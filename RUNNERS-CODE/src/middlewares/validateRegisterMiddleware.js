const {body}=require('express-validator');
const path= require('path')

module.exports= [
    body('nombre')
    .notEmpty()
    .withMessage('Por favor, colocar su nombre')
    .isLength({ min: 2, max: 20 })
    .withMessage("El nombre tiene que tener entre 1 y 20 caracteres"),
    body('apellido')
    .notEmpty()
    .withMessage("Tienes que escribir un apellido")
    .bail()
    .isLength({ min: 2, max: 20 })
    .withMessage("El apellido tiene que tener entre 1 y 20 caracteres"),
    body('fechaNacimiento')
    .notEmpty()
    .isDate(),
    body('documentoTipo').notEmpty(),
    body('nDocumento')
    .notEmpty()
    .matches("[0-9]")
    .withMessage('Ingrese el número sin puntos'),
    body('genero').notEmpty(),
    body('email')
    .notEmpty()
    .withMessage("Tienes que escribir un email")
    .bail()
    .isEmail()
    .withMessage("Tiene que tener formato de email"),
    body('password')
        .notEmpty()
        .withMessage("Tienes que escribir un password")
        .bail()
        // que tenga la longitud deseada
        .isLength({ min: 8, max: 20 })
        .withMessage(
          "La contraseña debe tener al menos 8 dígitos, incluir una mayúscula, una minúscula, un número y un carácter especial('#?!@$%^&*-')"
        )
        // que contenga un número
        .matches("[0-9]")
        .withMessage(
          "La contraseña debe tener al menos 8 dígitos, incluir una mayúscula, una minúscula, un número y un carácter especial('#?!@$%^&*-')"
        )
        // que contenga una mayúscula
        .matches("[A-Z]")
        .withMessage(
          "La contraseña debe tener al menos 8 dígitos, incluir una mayúscula, una minúscula, un número y un carácter especial('#?!@$%^&*-')"
        )
        // que contenga un carácter especial
        .matches("[#?!@$%^&*-]")
        .withMessage(
          "La contraseña debe tener al menos 8 dígitos, incluir una mayúscula, una minúscula, un número y un carácter especial('#?!@$%^&*-')"
        ),
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

