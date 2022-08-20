const express = require("express");
const router = express.Router();
const multer = require('multer')

const path = require("path");

/*middlewares validator*/

const createProductValidation = require("../middlewares/createProductValidation");
const editProductValidation = require("../middlewares/createProductValidation");

// requerir controller
const productsController = require("../controllers/productsController");

/***agrego la variable */
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        let folder = path.join(__dirname, "../../public/img")
        cb(null, folder)
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({ storage })


const autMiddleware = require("../middlewares/autMiddleware");


//todos los productos
router.get("/", productsController.list);

//productos categoria mujeres
router.get("/productsMujer", productsController.listMujer);

//productos categoria hombres
router.get("/productsHombre", productsController.listHombre);

//productos categoria zapatillas
router.get("/productsZapas", productsController.listZapas);

//productos categoria accesorios
router.get("/productsAccesorios", productsController.listAccesorios);

/**creación de un producto y almacenado*/
router.get("/create",autMiddleware,productsController.create);
router.post("/", upload.array("image", 6),createProductValidation, productsController.store);

/*detalle de un producto */
router.get("/:id", productsController.detail);

/*edición de un producto */
router.get("/edit/:id",autMiddleware, productsController.edit);
router.put("/edit/:id", upload.any(), editProductValidation, productsController.update);

/*borrar un producto*/
router.delete("/delete/:id",autMiddleware, productsController.destroy);

/*buscar un producto*/
router.post('/search', productsController.searchProduct)

module.exports = router;