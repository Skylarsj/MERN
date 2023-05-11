const ProductController = require('../controllers/product.controller');
module.exports = (app) => {
    app.get('/api/product', ProductController.findAllProducts);
    app.get('/api', ProductController.index);
    app.post('/api/product', ProductController.createProduct);
    app.get('/api/product/:id', ProductController.getProduct);
    app.delete('/api/product/:id', ProductController.deleteProduct)
    app.patch('/api/product/:id', ProductController.updateProduct)
}
