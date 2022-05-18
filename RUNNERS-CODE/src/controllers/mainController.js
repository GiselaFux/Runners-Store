const path = require('path');
mainController = {
    index: function(req, res) {
        res.render(path.join(__dirname, '../views/index'))
    },
    login: function(req, res) {
        res.render(path.join(__dirname, '../views/users/login'))
    },
    register: function(req, res) {
        res.render(path.join(__dirname, '../views/users/register'))
    },
    /* algunos deberían desaparecer por esta ya en productsController
    productCart: function(req, res) {
        res.render(path.join(__dirname, '../views/products/productCart'))
    },
    productDetail: function(req, res) {
        res.render(path.join(__dirname, '../views/products/productDetail'))
    },

    productCreate: function(req, res) {
        res.render(path.join(__dirname, '../views/products/productCreate'))
    },
    productEdit: function(req, res) {
        res.render(path.join(__dirname, '../views/products/productEdit'))
    } */
};

module.exports = mainController;