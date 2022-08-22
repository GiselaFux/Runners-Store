const express = require("express");
const fs = require("fs");
const path = require("path");

let db = require("../../database/models");
const productsController = require("../productsController");


module.exports={
    list:(req, res)=>{
      db.Categories.findAll({
        include: [{association: "products"}]
      })
      .then(categories =>{
        return res.json({total:categories.length,
                         data: categories,
                        status:200})
        
      })
    },

    detail:(req, res)=>{
      db.Categories.findByPk(req.params.id)
      .then(categories=>{
        return res.status(200).json({
                         data: categories,
                        status:200})
        
      })
    }

  
   }