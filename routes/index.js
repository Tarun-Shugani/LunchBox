const express = require("express"),
    tiffinController = require("../controller/tiffin"),
    router = express.Router();


//for this route main logic will go to tiffincontroller-->controllers/tiffin  
router.get('/', tiffinController.getIndex);

router.get('/menu-list', tiffinController.getListMenu);


module.exports=router;