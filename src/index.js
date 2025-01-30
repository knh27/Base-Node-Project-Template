const express=require("express");;
const apiRouter=require("./routes");

const {serverConfig,logger}=require("./config");
// const {PORT}=require("./config/index.js");

const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));//extend option allow to choose parsing library

app.use("/api", apiRouter);

app.listen(serverConfig.PORT, ()=>{
    console.log(`server started at ${serverConfig.PORT}`);
    logger.info("successfully started server", {})
})
