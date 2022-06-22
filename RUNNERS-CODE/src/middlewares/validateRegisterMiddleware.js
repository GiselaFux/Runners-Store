const {body}=require('express-validator');
const path= require('path')

module.exports= [
    body('nombre').notEmpty().withMessage('Por favor, colocar su nombre'),
    body('apellido').notEmpty().withMessage('Por favor,ingresar su apellido'),
    body('fechaNacimiento').notEmpty(),
    body('DocumentoTipo').notEmpty(),
    body('Ndocumento').notEmpty().withMessage('Ingrese el número sin puntos'),
    body('genero').notEmpty(),
    body('Email').notEmpty().withMessage('Ingresar formto válido'),
    body('contraseña').notEmpty().isLength({min:5,max:8}).withMessage('ingresar contraseña adecuada'),
    body('imagen').custom((value,{req})=>{
        let file= req.file;
        let acceptedExtensions =['jpg', '.png','.gif'];
        if(!file){
            throw new Error('Tienes que subir una imagen')
        }else{
            let fileExtension=path.extname(file.originalname);
            if(!acceptedExtensions.includes(fileExtension)){
                throw new Error('las extensiones de rchivo permitidas son ${acceptedExtensions.join(',')}');
            }
        }
        return true;
    })
]

