import express from 'express';
import db from '../db.js';
import { broadcastProblem6 } from '../../WebSocket.js';
import quizQuestions from './QuizAndAns.js';
import Authorization from '../middlewares/authorization.js';

const router = express.Router();

router.get('/leaderboard', (req, res) => {
  try {
    const stmt = db.prepare("SELECT name, score FROM users LIMIT 10 ORDER BY score DESC");
    const users = stmt.all();

    // Send via HTTP
    res.status(200).json(users); 

    // Broadcast only for Problem 6 clients
    broadcastProblem6({ leaderboard: users });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch leaderboard" });
  }
});

router.post("/submit-quiz", Authorization, (req, res) => {
  try {
    const { answers } = req.body; 
    // answers = [{ questionId: 1, answer: "4" }, { questionId: 2, answer: "Paris" }]

    let userId = req.userId;

    let points = 0;
    answers.forEach(ans => {
      const q = quizQuestions.find(q => q.id === ans.questionId);
      if (q && String(q.correct).toLowerCase() === String(ans.answer).toLowerCase()) {
        points += 1;
      }
    });

 // Update DB with earned points
    const result = db.prepare("UPDATE users SET score = score + ? WHERE id = ?").run(points, userId);

    // If no rows updated, user not found
    if (result.changes === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    // Fetch updated leaderboard
    const users = db.prepare("SELECT name, score FROM users LIMIT 10 ORDER BY score DESC").all();
    
    // Broadcast live update
    broadcastProblem6({ type: 'leaderboardUpdate', leaderboard: users });

    res.json({ success: true, pointsEarned: points, leaderboard: users });
  } catch (err) {
    console.error(err);
    broadcastProblem6({ type: 'error', message: 'Quiz submission failed' });
    res.status(500).json({ error: "Failed to submit quiz" });
  }
});



export default router;
