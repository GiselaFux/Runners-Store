const path = require('path');
const fs = require("fs");

/*marca el camino al json donde estan los productos y la conversión de json para js)*/
const productsFilePath = path.join(__dirname, "../database/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
/*constante de objeto literal donde ponemos la funcionalidad*/
const productsController = {

    // Root - Show all products
    index: (req, res) => {
        res.render('products', { products })
    },

    // Detail - Detail from one product
    detail: (req, res) => {
        let idProduct = req.params.id;
        let product = products.find((product) => product.id == idProduct);
        res.render('productDetail', { product })
    },

    // Create - Form to create
    create: (req, res) => {

    },
    // Update - Form to edit
    edit: (req, res) => {

    },
    // Create -  Method to store
    store: (req, res) => {

    },

    // Update - Form to edit
    edit: (req, res) => {

    },
    // Update - Method to update
    update: (req, res) => {

    },

    // Delete - Delete one product from DB
    destroy: (req, res) => {

    },
    //carrito de productos
    productCart: (req, res) => {}

};



module.exports = productsController;

module.exports = productsController;