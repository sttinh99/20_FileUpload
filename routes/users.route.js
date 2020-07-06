const express = require("express");
var multer  = require('multer');

require('../server/cloudinary');
require('dotenv').config();

// var upload = multer({ dest: './public/uploads/'})
var upload = require('../middleware/multer')
var shortid = require("shortid");
var controller = require('../controller/users.controller');
var validation = require('../validation/users.validation');
var db = require('../db');

var router = express.Router();


router.get("/",controller.index);
router.get("/create", controller.getCreate);
router.post("/create",upload.single('avatar'), validation.postCreate, controller.postCreate);
router.get('/:id/delete',controller.delete);
router.get("/:id/update",controller.getUpdate);
router.post("/update",upload.single('avatar'), controller.postUpdate);  
router.get("/profile",controller.profile)
router.post("/profile",upload.single('avatar'),controller.postProfile)
module.exports = router;