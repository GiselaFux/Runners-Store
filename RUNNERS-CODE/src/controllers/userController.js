const bcryptjs = require ("bcryptjs");
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
        };

        let userInDB = User.findByField('email', req.body.email);

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


        let userToCreate = {
            ...req.body,
            password: bcryptjs.hashSync(req.body.password, 10),
            //avatar: req.file.filename
        }

        User.create(userToCreate);

        return res.redirect('/users/login')
    },


    login: (req,res) => {
        res.render('users/login')
    },

    loginProcess: (req,res) => {
        let userToLogin = User.findByField('email', req.body.email);
        console.log(req.body.email)
        console.log(userToLogin)
        if (userToLogin){
            let passOk = bcryptjs.compareSync(req.body.password, userToLogin.password)
            if (passOk){
                delete userToLogin.password;
                req.session.userLogged = userToLogin;

                if(req.body.remember_user){
                  res.cookie("userEmail", req.body.email, {maxAge: (1000 * 60) * 2 })
                }

                return res.redirect('/users/userProfile') 
            };
            return res.render('users/login',{
                errors:{
                    email: {
                        msg: "Las credenciales son invalidas"
                    }
                }
            });
        }

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
