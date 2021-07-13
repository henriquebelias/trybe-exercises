const ping = require('./ping');
const loginController = require('./login');
const userController = require('./users');
const secretController = require('./topSecret');

module.exports = {
  ping,
  loginController,
  userController,
  secretController,
};
