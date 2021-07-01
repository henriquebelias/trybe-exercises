const crypto = require('crypto');

function generateToken() {
  const token = crypto.randomBytes(6).toString('hex');
  console.log(token);
}

generateToken();

module.exports = generateToken;
