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
    },

    contarCat:(req,res)=>{
      db.Categories.sequelize.query("SELECT categories.category_description, COUNT(products.id) as total FROM products INNER JOIN categories ON categories.id = category_id GROUP BY categories.category_description")
      .then(categories=>{
        return res.status(200).json({
          data: categories,
        url:"api/categories/count",
         status:200})
      })
    }

  
   }  
   
   

