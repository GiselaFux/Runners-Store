const express= require('express');
const router=express.Router();
const path=require('path');
const multer= require('multer')

//controller
const userController = require('../controllers/userController');

/*middlewares de multer y validator*/
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

const guestMiddleware = require("../middlewares/guestMiddleware");
const autMiddleware = require("../middlewares/autMiddleware");

/*formulariode registro*/

router.get('/register', guestMiddleware, userController.register);

/*procesar el registro*/
router.post('/register', upload.single('single'), userController.processRegister);

/*formulario login*/
router.get('/login', guestMiddleware, userController.login);

/*procesar login*/
router.post('/login',userController.loginProcess);

/*perfil del usuario*/
router.get('/profile', userController.profile);

/*Logout*/
router.get('/logout', userController.logout);


module.exports= router;

