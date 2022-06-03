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

router.get('/productCart', mainController.productCart)


module.exports = router;