// index.js
import express from 'express';
import { sum_to_n_a, sum_to_n_b, sum_to_n_c } from './src/problem1/summation_solution.js';
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // for parsing JSON bodies
app.use(express.urlencoded({ extended: true })); // for parsing form data

// Basic route
app.get('/problem1', (req, res) => {

  try{
    const results = {
      forLoop: sum_to_n_a(5),
      reducer: sum_to_n_b(5),
      recursion: sum_to_n_c(5)
    };

    res.json(results); // sends results back to client
  }catch(e){
    res.status(500).json(error);
  }
});


// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});