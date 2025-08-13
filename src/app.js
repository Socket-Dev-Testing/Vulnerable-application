const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const setRoutes = require('./routes/index');
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Register vulnerable modules
app.use('/vuln', require('./vulnerable_modules/insecure_eval'));
app.use('/vuln', require('./vulnerable_modules/hardcoded_secret'));
app.use('/vuln', require('./vulnerable_modules/unsafe_file_read'));

// Routes
setRoutes(app);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});