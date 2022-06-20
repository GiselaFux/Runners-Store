const path = require('path');
const fs= require('fs');
const { body } = require('express-validator');
const { validationResult } = require('express-validator');
/* requiero el modulo User de a carpeta models */
const User = require('../models/User.js')

const userController= {
    register: (req,res) => {      
         return res.render('users/register')

    },
    processRegister: (req,res) => {
        const resultValidation = validationResult(req);
        
        if(resultValidation.error.length >0){
            res.render('register',{
                errors:resultValidation.mapped(),
                oldData:req.body
            })
        }

        let userToCreate = {
            ...req.body,
            avatar: req.file.filename
        }

        User.create(req.body)
        return res.send('ok, se guardó el usurio')
        },


    login: (req,res) => {
        res.render('login')
    },
    profile:(req,res) => {
        res.render('login')
    }   
    };

    module.exports= userController;
