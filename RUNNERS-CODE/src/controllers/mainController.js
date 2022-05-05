const path = require('path');
mainController = {
    index: function(req, res) {
        res.render(path.join(__dirname, '../views/index'))
    },
    login: function(req, res) {
        res.render(path.join(__dirname, '../views/login'))
    },
    productCart: function(req, res) {
        res.render(path.join(__dirname, '../views/productCart'))
    },
    productDetail: function(req, res) {
        res.render(path.join(__dirname, '../views/productDeatail'))
    },
    register: function(req, res) {
        res.render(path.join(__dirname, '/views/register'))
    }
};
module.exports = mainController;