const {body}=require('express-validator');
const path= require('path')

module.exports= [
  body("name")
    .notEmpty()
    .withMessage("Tienes que escribir un nombre")
    .bail()
    .isLength({ min: 5 })
    .withMessage("Tiene que tener al menos 5 caracteres"),
  body("description")
    .notEmpty()
    .withMessage("Tienes que escribir una descripción para el producto")
    .bail()
    .isLength({ min: 20 })
    .withMessage("Tiene que tener al menos 20 caracteres"),
  body("category")
    .notEmpty()
    .withMessage("Tienes que seleccionar una categoría")
    .bail()
    .matches("[1234]")
    .withMessage("La categoría no corresponde con ningún valor válido"),
  body("price")
    .notEmpty()
    .withMessage("Tienes que marcar un precio")
    .bail()
    .isNumeric()
    .withMessage("Tienes que escribir un valor numérico"),
  body("discount")
    .notEmpty()
    .withMessage("Tienes que marcar un descuento. Si no lo tiene, introduce 0")
    .bail()
    .isNumeric()
    .withMessage("Tienes que escribir un valor numérico"),
  body("sizes").notEmpty().withMessage("Tienes que marcar al menos un talle."),
  body("colours").notEmpty().withMessage("Tienes que marcar al menos un color."),
  /*body("image").custom((value, { req }) => {
    let file = req.files;
    let acceptedExtensions = [".jpg", ".jpeg", ".png", ".gif"];

    if (file.length < 1) {
      //probe mil cosas y es la única que funciona
      throw new Error("Tienes que subir al menos una imagen");
    } else {
      for (const onefile of file) {
        let fileExtension = path.extname(onefile.originalname);
        if (!acceptedExtensions.includes(fileExtension)) {
          throw new Error(
            `Las extensiones de archivo permitidas son ${acceptedExtensions.join(
              ", "
            )}`
          );
        }
      }
    }
    return true;
  }),*/
];
