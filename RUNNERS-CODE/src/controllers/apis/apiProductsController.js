const express = require("express");
const fs = require("fs");
const path = require("path");

let db = require("../../database/models");


module.exports={
    list:(req, res)=>{
      db.Products.findAll({
        include: [{association: "images"}, {association: "category"}]
      })
      .then(products=>{
        return res.json({total:products.length,
                         data: products,
                        status:200})
        
      })
    },
    detail:(req, res)=>{
      db.Products.findByPk(req.params.id)
      .then(product=>{
        return res.status(200).json({
                         data: product,
                        status:200})
        
      })
    }
  
   }
  
  
  