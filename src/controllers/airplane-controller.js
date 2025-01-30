const {AirplaneService}=require("./../services");
const {ErrorResponse_obj, SuccessResponse_obj}=require("./../utils/common")

async function createAirplane(req, res){
    try{
        const airplane=await AirplaneService.createAirplane({
            modelNumber:req.body.modelNumber,
            capacity:req.body.capacity
        });
        SuccessResponse_obj.data=airplane;
        return res.status(201).json(SuccessResponse_obj)
    }catch(error){
        ErrorResponse_obj.error_prop=error; //error_prop key holds an object
        return res.status(error.statusCode).json(ErrorResponse_obj);
    }
}

module.exports={
    createAirplane
};


