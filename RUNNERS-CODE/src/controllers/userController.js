const bcryptjs = require ("bcryptjs");
const path = require('path');
const fs= require('fs');
const { body } = require('express-validator');
const { validationResult } = require('express-validator');
/* requiero el modulo User de a carpeta models */
const User = require('../models/User.js')

const userController= {
    register: (req,res) => {      
        res.cookie("testing", )
         return res.render('users/register')

    },
    processRegister: (req,res) => {
        const resultValidation = validationResult(req);

        if(resultValidation.error.length >0){
            return res.render('register',{
                errors: resultValidation.mapped(),
                oldData: req.body
            })
        }

        let userInDB = User.findByField("email", req.body.Email);

        if (userInDB) {
            return res.render('register',{
                errors: {
                    msg: "Este email ya está registrado"
                },
                oldData: req.body
            })
        }


        let userToCreate = {
            ...req.body,
            contraseña: bcryptjs.hashSync(req.body.contraseña, 10),
            avatar: req.file.filename
        }

        User.create(req.body)
        return res.send('ok, se guardó el usurio')
    },


    login: (req,res) => {

        res.render('login')
    },

    loginProcess: (req,res) => {
        let userToLogin = User.findByField("Email", req.body.Email);

        if (userToLogin){
            let passOk = bcryptjs.compareSync(req.body.contraseña, userToLogin.contraseña)
            if (passOk){
                delete userToLogin.contraseña;
                req.session.userLogged = userToLogin;

                if(req.body.remember_user){
                    res.cookie("userEmail", req.body.Email, {maxAge: (1000 * 60) * 2 })
                }

                return res.redirect("Bienvenido de nuevo!") /*REDIRIGIR A PAGINA DE PERFIL DE USUARIO*/
            };
        }

        return res.render("login",{
            errors:{
                Email: {
                    msg: "No hay usuario registrado con este correo"
                }
            }
        });
    },

    profile:(req,res) => {
        return res.render('login', {
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
