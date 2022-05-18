const express = require("express");
const router = express.Router();
const multer = require('multer')

const path = require("path");

// requerir controller
const productsController = require("../controllers/productsController");



//todos los productos
router.get("/", productsController.index);

/***agrego la variable */
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        let folder = path.join(__dirname, "../../public/img")
        cb(null, folder)
    },
    filename: (req, file, cb) =>
        cb(null, file.filename + ',' + Date.now() + path.extname(file.originalname))
})
const upload = multer({ storage })



/**creación de un producto y almacenado*/
router.get("/create", productsController.create);
router.post("/", upload.any('fotos'), productsController.store);

/*detalle de un producto */
router.get("/detail/:id", productsController.detail);

/*edición de un producto */
router.get("/edit/:id", productsController.edit);
router.put("/edit/:id", productsController.update);

/*borrar un producto*/
router.delete("/delete/:id", productsController.destroy);

/* carrito*/
router.get('/productCart', productsController.productCart)

module.exports = router;