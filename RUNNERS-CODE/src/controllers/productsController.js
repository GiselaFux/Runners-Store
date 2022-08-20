const path = require('path');
const fs = require("fs");
const db = require('../database/models');
const { check, validationResult, body } = require("express-validator");

/*marca el camino al json donde estan los productos y la conversión de json para js)*/
const productsFilePath = path.join(__dirname, "../database/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
/*constante de objeto literal donde ponemos la funcionalidad*/



const productsController = {

    'list': (req, res) => {
        db.Products.findAll({
            include: [{association: 'images' },{association: 'category' }]
            
        })            
            .then(products => {
                let productMujer = products.filter((product) => product.category.category_description == "Mujer");
                let productHombre = products.filter((product) => product.category.category_description == "Hombre");
                let productAccesorios = products.filter((product) => product.category.category_description == "Accesorios");
                let productZapatillas = products.filter((product) => product.category.category_description == "Zapatillas");
                res.render('products/products', { products, productMujer, productHombre, productZapatillas, productAccesorios, toThousand })
            })
    },

    'listMujer': (req, res) => {
      db.Products.findAll({
          include: [{association: 'images' },{association: 'category' }]
          
      })            
        .then(products => {
              let productMujer = products.filter((product) => product.category.category_description == "Mujer");
              res.render('products/productsMujer', { products, productMujer, toThousand })
      })
    },

    'listHombre': (req, res) => {
      db.Products.findAll({
          include: [{association: 'images' },{association: 'category' }]
          
      })            
        .then(products => {
              let productHombre = products.filter((product) => product.category.category_description == "Hombre");
              res.render('products/productsHombre', { products, productHombre, toThousand })
      })
    },

    'listZapas': (req, res) => {
      db.Products.findAll({
          include: [{association: 'images' },{association: 'category' }]
          
      })            
        .then(products => {
          let productZapatillas = products.filter((product) => product.category.category_description == "Zapatillas");
              res.render('products/productsZapas', { products, productZapatillas, toThousand })
      })
    },

    'listAccesorios': (req, res) => {
      db.Products.findAll({
          include: [{association: 'images' },{association: 'category' }]
          
      })            
        .then(products => {
          let productAccesorios = products.filter((product) => product.category.category_description == "Accesorios");
              res.render('products/productsAccesorios', { products, productAccesorios, toThousand })
      })
    },

    // Detail - Detail from one product

    detail: (req, res) => {
        db.Products.findByPk(req.params.id, {
            include: [{association: 'colours' },{association: 'sizes' },{association: 'images' }]
        })
        /*.then(product => {
            return res.json(product)
          })*/

        .then(product => {
            res.render('products/productDetail', {product});
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
    store: async (req, res) =>  {      
      const resultValidation = validationResult(req);

      // si hay errores
      if (resultValidation.errors.length > 0) {
        let sizesDB = db.Sizes.findAll();
        let categoriesDB = db.Categories.findAll();
        let coloursDB = db.Colours.findAll();
        console.log(resultValidation)
        Promise.all([sizesDB, categoriesDB, coloursDB])
          .then(function ([allSizes, allCategories, allColours]) {
            // devuelvo la vista con errores y la info necesaria
            return res.render('products/productCreate', {
              errors: resultValidation.mapped(), //convierto el array errors en obj.literal
              oldData: req.body,
              allSizes,
              allCategories,
              allColours,
            });
            
          })
          .catch((e) => res.send(e));
      } else {   

      const newProduct = await db.Products.create({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            discount: req.body.discount,
            category_id: req.body.category
      });
              // IMAGES
      // con req.files accedemos a todos los file mandados y guardados en array. Solo queremos el nombre así que creamos nuevo array donde los pushearemos
      let images = [];
      for (i = 0; i < req.files.length; i++) {
        images.push(req.files[i].filename);
      }
      for (i = 0; i < images.length; i++) {
        // ahora con uuid ya no son 2 iguales y creara tantas imagenes como haya en el array
        await newProduct.createImage({ image: images[i] });
      }
        // SIZES
      let sizes = []
      
      for (i = 0; i < req.body.sizes.length; i++) {
        sizes.push(req.body.sizes[i]);
      }

      for (i = 0; i < sizes.length; i++) {
        // ahora con uuid ya no son 2 iguales y creara tantas imagenes como haya en el array
        await newProduct.addSizes(sizes[i]);
      }

        // COLOURS
      let colours = []
      
      for (i = 0; i < req.body.colours.length; i++) {
            colours.push(req.body.colours[i]);
      }
  
      for (i = 0; i < colours.length; i++) {
        // ahora con uuid ya no son 2 iguales y creara tantas imagenes como haya en el array
        await newProduct.addColours(colours[i]);
      }

      return res.redirect("/products");
    }
  },
    

    // Update - Form to edit

    edit: function(req,res) {
        let productFound = db.Products.findByPk(req.params.id,{include: ['sizes','colours','category','images']});
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

    update: async (req, res) => {
      const resultValidation = validationResult(req);
      let id = req.params.id;
  console.log(resultValidation)
      // si hay errores
      if (resultValidation.errors.length > 0) {
        let allSizes = await db.Sizes.findAll();
        let allCategories = await db.Categories.findAll();
        let allColours = await db.Colours.findAll();
        let product = await db.Products.findByPk(req.params.id,{include: ['sizes','colours','category','images']});
  
        // buscamos el producto
        let productToEdit = await db.Products.findByPk(id, {
          include: [{association: 'colours' },{association: 'sizes' },{association: 'images' },{association: 'category' }]
        });
  
        // devuelvo la vista con errores y la info necesaria
        return res.render("products/productEdit", {
          errors: resultValidation.mapped(), //convierto el array errors en obj.literal
          oldData: req.body,
          productToEdit,
          allSizes,
          allCategories,
          allColours,
          product
        });
      } else {

      let productToEdit = await db.Products.findByPk(id, {
        include: [{association: 'colours' },{association: 'sizes' },{association: 'images' }]
    })
    await productToEdit.update(
        {
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            discount: req.body.discount,
            category_id: req.body.category
    }, 
    );
    const editedProduct = await db.Products.findByPk(id, {
        include: ["images", "colours","sizes"],
      });
      // IMAGES
      // con req.files accedemos a todos los file mandados y guardados en array. Solo queremos el nombre así que creamos nuevo array donde los pushearemos
      let images = [];
      for (i = 0; i < req.files.length; i++) {
        images.push(req.files[i].filename);
      }
      for (i = 0; i < images.length; i++) {
        // ahora con uuid ya no son 2 iguales y creara tantas imagenes como haya en el array
        await editedProduct.createImage({ image: images[i] });
      }
        // SIZES
        let sizes = []
      
        for (i = 0; i < req.body.sizes.length; i++) {
        sizes.push(req.body.sizes[i]);
        }
        
        for (i = 0; i < sizes.length; i++) {

        const numbersSizes = sizes.map((size) => size);
        await editedProduct.setSizes(numbersSizes);
        }
        
        // COLOURS
        let colours = []
        if(req.body.colours.length>0){
        for (i = 0; i < req.body.colours.length; i++) {
            colours.push(req.body.colours[i]);
            }
        }
                
        for (i = 0; i < colours.length; i++) {
        await editedProduct.setColours(colours[i]);
        }

        const numbersColours = colours.map((colour) => colour);
        await editedProduct.setColours(numbersColours);
    res.redirect('/products');    
  }
},


    // Delete - Delete one product from DB
    destroy: (req, res) => {
        db.Products.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(res.redirect("/products"))
    },
    searchProduct: async (req, res) => {
      // const {Op} = require("sequelize");
      const Op = db.Sequelize.Op;
  
      let search = await db.Products.findAll({
        where: {
          name: { [Op.like]: `%${req.body.buscar}%` },
        }, 
          include: ["images", "colours","sizes"],
      });
  
      return res.render("products/productsSearch", { productos: search,toThousand });
    },   
};



module.exports = productsController;