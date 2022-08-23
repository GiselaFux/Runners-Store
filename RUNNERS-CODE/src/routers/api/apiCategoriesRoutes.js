// ************ Require's ************
const express = require("express");
const router = express.Router();
const path = require ('path');

// ************ Controller Require ************
const apiCategoriesController = require("../../controllers/apis/apiCategoriesController");

// TODOS LOS PRODUCTOS
router.get("/", apiCategoriesController.list);

//count
router.get("/count",  apiCategoriesController.contarCat)

// DETALLE PRODUCTO
router.get("/:id", apiCategoriesController.detail);

module.exports = router;