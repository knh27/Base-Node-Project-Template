const { AirplaneRepository } = require("./../repositories");
const {logger}=require("./../config");
const AppError_class = require("../utils/errors/app-error");
const { StatusCodes } = require("http-status-codes");


const airplaneRepository=new AirplaneRepository();
async function createAirplane(data){
    try{
        return await airplaneRepository.create(data);
    }catch(error){
        console.log(error)
        if(error.name=="SequelizeValidationError"){//there is name property
            let message_arr=[];
            error.errors.forEach((er)=>{
                explanation.push(er.message_arr);
            })
            throw new AppError_class(message_arr, StatusCodes.BAD_REQUEST);
        }
        logger.error("something went wrong in airplane service: createAirplane", {error});
        throw error;
    }
}

module.exports={  
    createAirplane
}





