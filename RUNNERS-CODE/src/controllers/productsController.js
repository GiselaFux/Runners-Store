const path = require('path');
const fs = require("fs");

/*marca el camino al json donde estan los productos y la conversión de json para js)*/
const productsFilePath = path.join(__dirname, "../database/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
/*constante de objeto literal donde ponemos la funcionalidad*/


const productsController = {

    // Root - Show all products
    indexProducts: (req, res) => {
        let productMujer = products.filter((product) => product.category == "Mujer");
        let productHombre = products.filter((product) => product.category == "Hombre");
        let productAccesorios = products.filter((product) => product.category == "Accesorios");
        let productZapatillas = products.filter((product) => product.category == "Zapatillas");

        res.render('products', { products, productMujer, productHombre, productAccesorios, toThousand })
        //console.log(productMujer)
    },

    // Detail - Detail from one product
    detail: (req, res) => {
        let idProduct = req.params.id;
        let product = products.find((product) => product.id == idProduct);
        res.render('productDetail', { product })
        //console.log(product.imagen.length)
    },

    // Create - Form to create
    create: (req, res) => {
        res.render('productCreate')
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
        products.push(newProduct);
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));
        res.redirect('/products');
    },


    // Update - Form to edit
    edit: (req, res) => {
        let producto = products.find(producto => producto.id == req.params.id);
        res.render("productEdit", {producto});
    },

    // Update - Method to update
    update: (req, res) => {
        let idProduct = req.params.id;
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