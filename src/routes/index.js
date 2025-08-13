const express = require('express');
const IndexController = require('../controllers/index');

function setRoutes(app) {
    const indexController = new IndexController();

    app.get('/', indexController.getIndex.bind(indexController));
    
    // Example of a vulnerable route
    app.get('/vulnerable', (req, res) => {
        const userInput = req.query.input; // Potentially vulnerable to XSS
        res.send(`<h1>User Input: ${userInput}</h1>`);
    });
    
    // Example of another vulnerable route
    app.post('/submit', (req, res) => {
        const username = req.body.username; // Potentially vulnerable to SQL Injection
        // Simulated database query (not implemented)
        res.send(`Submitted username: ${username}`);
    });
}

module.exports = setRoutes;