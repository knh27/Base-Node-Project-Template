const {ErrorResponse_obj}=require("./../utils/common")
const { StatusCodes }=require("http-status-codes");
const AppError_class=require("./../utils/errors/app-error");


function validateCreateRequest(req, res,next){
    if(!req.body.modelNumber){
        ErrorResponse_obj.error_prop=new AppError_class(["model number not found in the correct form"], StatusCodes.BAD_REQUEST);
         return res.status(400).json(ErrorResponse_obj);
    }
    next();
}

module.exports={
    validateCreateRequest
}