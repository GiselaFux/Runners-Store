const bcryptjs = require ("bcryptjs");
const path = require('path');
const fs= require('fs');
const { validationResult } = require('express-validator');
/* requiero el modulo User de a carpeta models */
const User = require('../models/User.js')
const db = require('../database/models');

const userController= {
    register: (req,res) => {      
     res.render('users/register')

    },
   
    processRegister: async (req, res) => {
        const resultValidation = validationResult(req);
            console.log(resultValidation)
        if(resultValidation.errors.length >0){
            return res.render('users/register',{
                errors: resultValidation.mapped(),
                oldData: req.body
            })
        };

        // Validación propia, que no exista ya el email
        let userInDB = await db.Users.findOne({
            where: {
              email: req.body.email,
            },
          });

         // si ya existe..
        if (userInDB) {
            return res.render('users/register',{
                errors: {
                    email:{
                        msg: "Este email ya está registrado"
                    }
                },
                oldData: req.body
            })
        }

        // vemos si subió alguna imagen
        let avatar = '';
        // si la subió la creamos
            if (req.file) {
                avatar = await db.UserImage.create({
                name: req.file.filename,
            });
        // si no buscamos el default
            } else {
                avatar = await db.UserImage.findOne({
                where: {
                id: 1,
            },
        });
        console.log(req.file)
    }

        await db.Users.create({
            nombre:req.body.nombre,
            apellido:req.body.apellido,
            fechaNacimiento:req.body.fechaNacimiento,
            documentoTipo:req.body.documentoTipo,
            nDocumento:req.body.nDocumento,
            email:req.body.email,
            password: bcryptjs.hashSync(req.body.password, 10),
            genero:req.body.genero,
            categoryUsu_id: 1,
            image_id: avatar.id
    })
        return res.redirect('/users/login')
    },


    login: (req,res) => {
        res.render('users/login')
    },

    loginProcess:  async (req, res) => {
    // Validación propia: existe el user?
    let userToLogin = await db.Users.findOne({
        include: ["image"],
        where: {
          email: req.body.email,
        },
      });
      console.log(req.body.email)
      console.log(userToLogin)

    // existe el user?
      if (userToLogin){
            let passOk = bcryptjs.compareSync(req.body.password, userToLogin.password)
            if (passOk){
                // para no almacenar el password en session
                delete userToLogin.password;
                // se crea obj.literal session con prop userLogged y valor userToLogin
                req.session.userLogged = userToLogin;

                // creamos cookie
                if(req.body.remember_user){
                  res.cookie("userEmail", req.body.email, {maxAge: (1000 * 60) * 2 })
                }

                return res.redirect('/users/userProfile') 
            }
                 // si contraseña inválida
                return res.render('users/login',{
                    errors:{
                        email: {
                            msg: "Las credenciales son invalidas"
                            }
                        }
                    }) 
                }
                // si no se encuentra el email
                return res.render('users/login',{
                    errors:{
                        email: {
                            msg: "No hay usuario registrado con este correo"
                            }
                        }
                    });
    },


    profile: (req,res) => {
        return res.render('users/userProfile', {
           user: req.session.userLogged
        })
    },
    
    logout: (req,res) => {
        res.clearCookie("userEmail");
        req.session.destroy();
        return res.redirect("/")
    }
    
};

    module.exports= userController;
