const express = require('express');
const router = express.Router();
const User = require('../models/User');
const passport = require('passport');
const jwt = require('jsonwebtoken');

// Register
router.post('/register', (req, res, next) => {
  //res.send('REGISTER');
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
  });

  User.addUser(newUser, (err, user) => {
    if (err) {
      res.json({
        success: false,
        msg: 'Failed to register user',
      })
    } else {
      res.json({
        success: true,
        msg: 'User registered',
      })
    }
  });
});

// Authenticate
router.post('/authenticate', (req, res, next) => {
  res.send('AUTHENTICATE');
});

// Profile
router.get('/profile', (req, res, next) => {
  res.send('PROFILE');
});

module.exports = router;
