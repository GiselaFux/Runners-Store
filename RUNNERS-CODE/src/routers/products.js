const express = require("express");
const router = express.Router();
const multer = require('multer')

const path = require("path");

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


//todos los productos
router.get("/", productsController.indexProducts);

/**creación de un producto y almacenado*/
router.get("/create", productsController.create);
router.post("/", upload.single('imagen'), productsController.store);

/*detalle de un producto */
router.get("/:id", productsController.detail);

/*edición de un producto */
router.get("/edit/:id", productsController.edit);
router.put("/edit/:id", upload.any(), productsController.update);

/*borrar un producto*/
router.delete("/delete/:id", productsController.destroy);


module.exports = router;