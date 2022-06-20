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




/*formulariode registro*/

router.get('/register', userController.register);

/*procesar el registro*/
router.post('/register', upload.single('single'), userController.processRegister);

/*formulario login*/
router.get('/login',userController.login);

/*procesar login*/
router.post('/login',userController.loginProcess);

/*perfil del usuario*/
router.get('/profile/:userId', userController.profile);


module.exports= router;

