const jwt = require('jsonwebtoken');
const Joi = require('joi');

const { SECRET } = process.env;

const loginSchema = Joi.object({
  username: Joi.string().alphanum().min(5).required(),
  password: Joi.string().min(5).required(),
});

const loginController = async (req, res, next) => {
  const { username, password } = req.body;

  const { error } = loginSchema.validate({ username, password });
  if (error) return next(error);

  const jwtConfig = {
    expiresIn: '1h',
    algorithm: 'HS256',
  };

  const admin = username === 'admin' && password === 's3nh4S3gur4???';

  const payload = {
    username,
    admin,
  };

  const token = jwt.sign(payload, SECRET, jwtConfig);

  return res.status(200).json({ token });
};

module.exports = loginController;
