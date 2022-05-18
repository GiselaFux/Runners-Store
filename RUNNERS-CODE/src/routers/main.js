const express = require('express');
const router = express.Router();
const multer = require('multer')

/*agrego la variable de multer para decir donde guardar las imagenes y el nombre*/
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        let folder = path.join(__dirname, "../public/img")
        cb(null, folder)
    },
    filename: (req, file, cb) =>
        cb(null, file.filename + ',' + Date.now() + path.extname(file.originalname))
})
const upload = multer({ storage })
const mainController = require('../controllers/mainController')
router.get('/', mainController.index)
router.get('/login', mainController.login)
router.get('/register', mainController.register)
    /*deberían eliminarse porque ya estan  en products.js 
router.get('/productCart', mainController.productCart)
router.get('/productDetail', mainController.productDetail)
router.get('/productCreate', mainController.productCreate);
router.get('/productEdit', mainController.productEdit);*/

module.exports = router;