// hardcoded_secret.js
const express = require('express');
const router = express.Router();

const SECRET_KEY = 'supersecretkey123'; // Vulnerable: Hardcoded secret

router.get('/secret', (req, res) => {
  res.send(`The secret key is: ${SECRET_KEY}`);
});

module.exports = router;
