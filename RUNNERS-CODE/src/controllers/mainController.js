const path = require('path');
mainController = {
    index: function(req, res) {
        res.render(path.join(__dirname, '../views/index'))
    },
    login: function(req, res) {
        res.render(path.join(__dirname, '../views/users/login'))
    },
    productCart: function(req, res) {
        res.render(path.join(__dirname, '../views/products/productCart'))
    },
    productDetail: function(req, res) {
        res.render(path.join(__dirname, '../views/products/productDetail'))
    },
    register: function(req, res) {
        res.render(path.join(__dirname, '../views/users/register'))
    },
    productCreate: function(req, res) {
        res.render(path.join(__dirname, '../views/products/productCreate'))
    }   
};

module.exports = mainController;