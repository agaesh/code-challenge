// middleware/authMiddleware.js
import jwt from 'jsonwebtoken';

function Authorization(req, res, next) {
  const authHeader = req.headers['authorization'];
  if (!authHeader) {
    return res.status(401).json({ error: 'You don’t have access to this resource' });
  }

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_KEY); // your secret from .env
    req.userId = decoded.id; // attach userId to request
    next();
  } catch (err) {
    return res.status(403).json({ error: err});
  }
}

export default Authorization;