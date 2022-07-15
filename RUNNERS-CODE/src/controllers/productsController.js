const path = require('path');
const fs = require("fs");
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
/*marca el camino al json donde estan los productos y la conversión de json para js)*/
//const productsFilePath = path.join(__dirname, "../database/products.json");
//const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
/*constante de objeto literal donde ponemos la funcionalidad*/
//const readProducts = () => {
    //const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
    //return products;
//}



const productsController = {
    'list': (req, res) => {
    db.Products.findAll({
        include: ['category_id']
    })
        .then(products => {
            res.render('products/products', {products})
        })
},

    // Root - Show all products
    indexProducts: (req, res) => {
        let productMujer = db.Products.filter((product) => product.category == "Mujer");
        let productHombre = db.Products.filter((product) => product.category == "Hombre");
        let productAccesorios = db.Products.filter((product) => product.category == "Accesorios");
        let productZapatillas = db.Products.filter((product) => product.category == "Zapatillas");
        res.render('products/products', { Products, productMujer, productHombre, productZapatillas, productAccesorios, toThousand })
        //console.log(productMujer)
    },

    // Detail - Detail from one product
    detail: (req, res) => {
        let idProduct = req.params.id;
        let product = products.find((product) => product.id == idProduct);
        res.render('products/productDetail', { product })
        //console.log(product.imagen.length)
    },

    // Create - Form to create
    createView: (req, res) => {
        res.render("products/productCreate")
    },


    // Create -  Method to store
    store: (req, res) => {
        
        let imagen;
        if (req.file != undefined) {
            imagen = req.file.filename;
        } else {
            imagen = "default-image.png";
        }
        let newProduct = {
            id: products[products.length - 1].id + 1,
            ...req.body,
            price: Number(req.body.price),
            discount: Number(req.body.discount),
            imagen: [imagen],
        }
        console.log(newProduct)
        products.push(newProduct);
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));
        res.redirect('/products');
    },


    // Update - Form to edit
    editView: (req, res) => {
        const id = req.params.id
        let producto = products.find(producto => producto.id == req.params.id);
        res.render("products/productEdit", {producto});
    },

    // Update - Method to update
    update: (req, res) => {
        let idProduct = req.params.id;
         const product = readProducts()
        let productToEdit = products.find(product => product.id == idProduct)
        let imagen;
        if (req.files[0] != undefined) {
            imagen = req.file[0].filename
        } else {
            imagen = productToEdit.imagen
        }

        productToEdit = {
            id: productToEdit.id,
            ...req.body,
            price: Number(req.body.price),
            discount: Number(req.body.discount),
            imagen: imagen
        };
        console.log(productToEdit)
        let newProduct = products.map(product => {
            if (product.id == productToEdit.id) {
                return product = {...productToEdit};
            }
            return product
        })
        fs.writeFileSync(productsFilePath, JSON.stringify(newProduct, null, ' '))
        res.redirect('/products');    
    },



    // Delete - Delete one product from DB
    destroy: (req, res) => {
        let id = req.params.id;
        let finalProducts = products.filter(product => product.id != id)
        fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, ' '))
        res.redirect("/products")
    },

};



module.exports = productsController;