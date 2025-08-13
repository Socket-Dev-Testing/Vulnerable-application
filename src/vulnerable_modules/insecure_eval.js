// insecure_eval.js
const express = require('express');
const router = express.Router();

router.get('/eval', (req, res) => {
  const code = req.query.code;
  // Vulnerable: Directly evaluating user input!
  try {
    const result = eval(code);
    res.send(`Result: ${result}`);
  } catch (e) {
    res.status(400).send('Error in code execution');
  }
});

module.exports = router;
