const ProductController = require('../controllers/product.controller');

module.exports = (app) => {
    app.get('/api/product', ProductController.testProduct);
    app.get('/api/product/get', ProductController.getAllProduct);
    app.post('/api/product/new', ProductController.newProduct);
    app.get('/api/product/get/:id', ProductController.getOneProduct);
    app.put('/api/product/:id', ProductController.updateProduct);
    app.delete('/api/product/:id', ProductController.deleteProduct);
    // app.delete('/api/product/:id', ProductController.deleteProduct);
}
