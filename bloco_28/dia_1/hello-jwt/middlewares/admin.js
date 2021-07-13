const adminCheck = (req, res, next) => {
  const { admin } = req;

  if (!admin) return res.status(403).json({ error: { message: 'Restricted access' } });

  return next();
};

module.exports = adminCheck;
