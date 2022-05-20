const AuthorController = require('../controllers/author.controller');

module.exports = (app) => {
    app.get('/api/author',AuthorController.testAuthor);
    app.get('/api/author/get',AuthorController.getAllAuthor);
    app.post('/api/author/new',AuthorController.newAuthor);
    app.get('/api/:id/edit', AuthorController.getOneAuthor);
    app.put('/api/author/:id',AuthorController.updateAuthor);
    app.delete('/api/author/:id',AuthorController.deleteAuthor);
}
