const path = require('path');
const fs = require("fs");

/*marca el camino al json donde estan los productos y la conversión de json para js)*/
const productsFilePath = path.join(__dirname, "../database/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
/*constante de objeto literal donde ponemos la funcionalidad*/
const productsController = {

    // Root - Show all products
    indexProducts: (req, res) => {
        console.log(products);
        res.render('productsAll', { products: products })
    },

    // Detail - Detail from one product
    detail: (req, res) => {
        let idProduct = req.params.id;
        let product = products.find((product) => product.id == idProduct);
        res.render('productDetail', { product })
        console.log(product.imagen.length)
    },

    // Create - Form to create
    create: (req, res) => {
        res.render('productCreate')

    },
    // Update - Form to edit
    edit: (req, res) => {

    },
    // Create -  Method to store
    store: (req, res) => {
        let image;
        if (req.file != undefined) {
            image = req.file.filename;
        } else {
            image = "default-image.png";
        }
        let newProduct = {
            id: products[products.length - 1].id + 1,
            ...req.body,
            image: image,
        }
        products.push(newProduct);
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));
        res.redirect('productsAll');
    },


    // Update - Form to edit
    edit: (req, res) => {
        let id = req.params.id;
        let productToEdit = products.find((product) => product.id == id);
        res.render("productEdit", { productToEdit });
    },
    // Update - Method to update
    update: (req, res) => {
        let id = req.params.id;
        let productToEdit = products.find(product => product.id == id)
        let image;
        if (req.files[0] != undefined) {
            image = req.file[0].filename
        } else {
            image = productToEdit.image
        }
        productToEdit = {
            id: productToEdit.id,
            ...req.body,
            image: image
        };
        let newProducts = products.map(product => {
            if (product.id == productToEdit.id) {
                return product = {...productToEdit };
            }
            return product
        })
        fs.writeFileSync(productsFilePath, JSON.stringify(newProducts, null, ' '))
        res.redirect('productsAll');
    },



    // Delete - Delete one product from DB
    destroy: (req, res) => {
        let id = req.params.id;
        let finalProducts = products.filter(product => product.id != id)
        fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, ' '))
        res.redirect('productsAll');
    },
    //carrito de productos
    productCart: (req, res) => {}

};



module.exports = productsController;