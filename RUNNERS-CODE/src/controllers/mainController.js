const path = require('path');
const fs = require("fs");
const productsFilePath = path.join(__dirname, "../database/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

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
        let producto = products.find(producto => producto.id == req.params.id);
        res.render("products/productCart", {producto});
       // res.render(path.join(__dirname, '../views/products/productCart'))
    },

};

module.exports = mainController;