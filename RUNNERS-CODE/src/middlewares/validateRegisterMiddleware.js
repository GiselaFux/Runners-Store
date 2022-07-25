const {body}=require('express-validator');
const path= require('path')

module.exports= [
    body('nombre').notEmpty().withMessage('Por favor, colocar su nombre'),
    body('apellido').notEmpty().withMessage('Por favor,ingresar su apellido'),
    body('fechaNacimiento').notEmpty(),
    body('documentoTipo').notEmpty(),
    body('nDocumento').notEmpty().withMessage('Ingrese el número sin puntos'),
    body('genero').notEmpty(),
    body('email').notEmpty().withMessage('Ingresar formto válido'),
    body('password').notEmpty().isLength({min:5,max:8}).withMessage('contraseña min 5 y max 8'),
    body("avatar").custom((value, { req }) => {
      let file = req.file;
      let acceptedExtensions = [".jpg", ".jpeg", ".png", ".gif"];
  
      if (file) {
        // throw new Error("Tienes que subir una imagen");
        // } else {
        let fileExtension = path.extname(file.originalname);
        if (!acceptedExtensions.includes(fileExtension)) {
          throw new Error(
            `Las extensiones de archivo permitidas son ${acceptedExtensions.join(
              ", "
            )}`
          ).bail();
        }
      }
      return true;
    })
]

