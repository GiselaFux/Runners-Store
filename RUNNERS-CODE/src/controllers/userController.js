const bcrypt = require ("bcryptjs");
const path = require('path');
const fs= require('fs');
const { validationResult } = require('express-validator');
/* requiero el modulo User de a carpeta models */
const User = require('../models/User.js')

const userController= {
    register: (req,res) => {      
     res.render('users/register')

    },
    processRegister: (req,res) => {
        const resultValidation = validationResult(req);
            console.log(resultValidation)
        if(resultValidation.errors.length >0){
            return res.render('users/register',{
                errors: resultValidation.mapped(),
                oldData: req.body
            })
        }

        let userInDB = User.findByField("Email", req.body.email);

        if (userInDB) {
            return res.render('users/register',{
                errors: {
                    msg: "Este email ya está registrado"
                },
                oldData: req.body
            })
        }


        let userToCreate = {
            ...req.body,
            password: bcrypt.hashSync(req.body.password, 10),
            //avatar: req.file.filename
        }

        User.create(userToCreate)
        return res.send('ok, se guardó el usurio')
    },


    login: (req,res) => {

        res.render('users/login')
    },

    loginProcess: (req,res) => {
        let userToLogin = User.findByField("email", req.body.email);

        if (userToLogin){
            let passOk = bcryptjs.compareSync(req.body.password, userToLogin.password)
            if (passOk){
                delete userToLogin.password;
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
        return res.render('users/login', {
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
