// ************ Require's ************
const express = require("express");
const router = express.Router();
const path = require ('path');

// ************ Controller Require ************
const apiProductsController = require("../../controllers/apis/apiProductsController");

// TODOS LOS PRODUCTOS
router.get("/", apiProductsController.list);



// DETALLE PRODUCTO
router.get("/:id", apiProductsController.detail);

module.exports = router;