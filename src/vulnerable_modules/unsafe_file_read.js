// unsafe_file_read.js
const express = require('express');
const fs = require('fs');
const router = express.Router();

router.get('/read-file', (req, res) => {
  const file = req.query.file;
  // Vulnerable: No validation on file path!
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) return res.status(500).send('Error reading file');
    res.send(data);
  });
});

module.exports = router;
