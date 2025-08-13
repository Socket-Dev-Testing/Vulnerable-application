class IndexController {
    getIndex(req, res) {
        // Intentionally vulnerable code pattern: directly rendering user input
        const userInput = req.query.input || '';
        res.render('index', { userInput });
    }
}

module.exports = IndexController;