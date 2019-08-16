const express = require("express"),
    tiffinController = require("../controller/tiffin"),
    router = express.Router();


//for this route main logic will go to tiffincontroller-->controllers/tiffin  
router.get('/', tiffinController.getIndex);

router.get('/list', tiffinController.getList);

router.get('/foodorder', tiffinController.getFoodOrder);

router.get('/contact-us', tiffinController.getContactUs);

module.exports=router;