const authorController = require('../controllers/author.controller');
module.exports = (app) => {
    // app.get('/api/author', authorController.findAllAuthors);
    app.get('/api', authorController.index);
    // app.post('/api/author', authorController.createAuthor);
    // app.get('/api/author/:id', authorController.getAuthor);
    // app.delete('/api/author/:id', authorController.deleteAuthor)
    // app.patch('/api/author/:id', authorController.updateAuthor)
}
