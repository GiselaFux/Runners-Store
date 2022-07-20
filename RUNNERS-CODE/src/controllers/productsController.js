const path = require('path');
const fs = require("fs");
const db = require('../database/models');

/*marca el camino al json donde estan los productos y la conversión de json para js)*/
const productsFilePath = path.join(__dirname, "../database/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
/*constante de objeto literal donde ponemos la funcionalidad*/



const productsController = {

    'list': (req, res) => {
        db.Products.findAll({
            include: [{association: 'productImagenes' },{association: 'category' }]
            
        })            
            .then(products => {
                let productMujer = products.filter((product) => product.category.category_description == "Mujer");
                let productHombre = products.filter((product) => product.category.category_description == "Hombre");
                let productAccesorios = products.filter((product) => product.category.category_description == "Accesorios");
                let productZapatillas = products.filter((product) => product.category.category_description == "Zapatillas");
                res.render('products/products', { products, productMujer, productHombre, productZapatillas, productAccesorios, toThousand })
                console.log(products)
            })
    },

    // Detail - Detail from one product

    detail: (req, res) => {
        db.Products.findByPk(req.params.id, {
            include: [{association: 'colours' },{association: 'sizes' },{association: 'productImagenes' }]
        })
        /*.then(product => {
            return res.json(product)
          })*/

        .then(product => {
            res.render('products/productDetail', {product});
            console.log(product)
        });
    },

    // Create - Form to create
    create: (req, res) => {
        let sizes = db.Sizes.findAll();
        let categories = db.Categories.findAll();
        let colours = db.Colours.findAll();
        Promise.all([sizes,categories,colours])
        .then(function([allSizes,allCategories,allColours]) {
            return res.render('products/productCreate', {allSizes, allCategories,allColours})
        })
    },

    // Create -  Method to store
    store: (req, res) => {
        db.Products.create({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            discount: req.body.discount,
            category_id: req.body.category
        })
        db.ProductImagen.create({
            image: req.file.filename,
        })
        .then(res.redirect('/products'));
    },

    // Update - Form to edit

    edit: function(req,res) {
        let productFound = db.Products.findByPk(req.params.id,{include: ['sizes','colours','category','productImagenes']});
        let sizes = db.Sizes.findAll();
        let colours = db.Colours.findAll();
        let categories = db.Categories.findAll();
        let imagenes = db.ProductImagen.findAll();
        Promise.all([productFound,sizes,colours,categories,imagenes])
        .then(function([product,allSizes,allColours,allCategories,allImagenes]) {
            return res.render("products/productEdit", {product,allSizes,allColours,allCategories,allImagenes});
        })
    },

    // Update - Method to update

    update: function (req,res) {
        db.Products.update({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            discount: req.body.discount,
            category_id: req.body.category
        }, {
            where: {
                id: req.params.id
            }
        }
        )
        .then(res.redirect('/products'))
    },

    // Delete - Delete one product from DB
    destroy: function (req,res) {
        db.Products.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(res.redirect("/products"))
    }

};



module.exports = productsController;