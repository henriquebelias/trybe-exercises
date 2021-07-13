const jwt = require('jsonwebtoken');

const { SECRET } = process.env;

const validateToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) return res.status(401).json({ error: { message: 'Token not found' } });

  try {
    const { username, admin } = jwt.verify(token, SECRET);
    req.username = username;
    req.admin = admin;
    next();
  } catch (error) {
    return res.status(401).json({ error: { message: error.message } });
  }
};

module.exports = validateToken;
