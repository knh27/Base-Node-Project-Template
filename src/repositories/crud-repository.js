const {logger}=require("./../config");
class CrudRepository{
    constructor(model){
        this.model=model;
    }

    async create(data){
        const response=await this.model.create(data);
        return response;
    }


    async destroy(data){
        try{
            const response=await this.model.destroy({
                where:{
                    id:data
                }
            });
            return response;
        }catch(error){
            logger.error("something went wrong in crud repo: destroy");
            throw error;
        }
    }

    async get(data){
        try{
            const response=await this.model.findByPK(data);
            return response;
        }catch(error){
            logger.error("something went wrong in crud repo: get");
            throw error;
        }
    }

    async getAll(){
        try{
            const response=await this.model.findAll();
            return response;
        }catch(error){
            logger.error("something went wrong in crud-repo: getAll");
            throw error;
        }
    }

    async update(id, data){  //data->{col:value}
        try{
            const response=await this.model.update(data, {
                where:{
                    id:id
                }
            });
            return response;
        }catch(error){
            logger.error("something went wrong in crud repo: update");
            throw error;
        }
    }
    
}

module.exports=CrudRepository;