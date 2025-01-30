 const express=require("express");
 const router=express.Router();

 const {airplaneController}=require("./../../controllers");
 const {AirplaneMiddlewares}=require("./../../middlewares")

 router.post("/",
         AirplaneMiddlewares.validateCreateRequest,
         airplaneController.createAirplane
        );

 module.exports=router;  