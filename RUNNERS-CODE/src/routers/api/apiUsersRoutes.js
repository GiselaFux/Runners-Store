// ************ Require's ************
const express = require("express");
const router = express.Router();

// ************ Controller Require ************
const apiUserController = require("../../controllers/apis/apiUserController");

// LISTADO DE USERS
router.get("/", apiUserController.list);



// USER DETAILS
router.get("/:id", apiUserController.detail);


module.exports = router;