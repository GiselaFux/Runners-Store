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
    
    productCart: function(req, res) {
        res.render(path.join(__dirname, '../views/products/productCart'))
    },
};

module.exports = mainController;