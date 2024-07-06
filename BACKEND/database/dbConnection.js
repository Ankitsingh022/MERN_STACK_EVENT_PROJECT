import mongoose from "mongoose"
export const dbConnection =()=>{
    mongoose.connect(process.env.MONGO_URI,
        {dbName:"MERN_STACK_EVENT_MESSAGE"}).then(()=>{
        console.log("connected to databse")
    }).catch(err=>{
        console.log("some error occured while connecting",err);
    });
}