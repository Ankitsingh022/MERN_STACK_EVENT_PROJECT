import app from "./app.js";
app.listen(process.env.PORT,()=>{
    console.log(`server started at port ${process.env.PORT}`)
})