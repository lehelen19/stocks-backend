const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

async function create(req, res) {
  try {
    const user = await User.create(req.body);
    const token = createJWT(user);
    res.json(token);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

function createJWT(user) {
  return jwt.sign({ user }, process.env.SECRET, { expiresIn: '24h' });
}

async function login(req, res) {
  console.log('hit login');
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) throw new Error();
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) throw new Error();
    res.json(createJWT(user));
  } catch (err) {
    console.log(err);
    res.status(400).json('Bad Credentials');
  }
}

function checkToken(req, res) {
  console.log('req.user', req.user);
  res.json(req.exp);
}

module.exports = { create, login, checkToken };
