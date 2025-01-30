class AppError_class extends Error{
       constructor(message_arr, statusCode){
        super(message_arr.join(", ")); // inherit from error class and pass message to parent constructor 
        this.statusCode=statusCode;
        this.message_arr=message_arr;
       }
}

module.exports=AppError_class;