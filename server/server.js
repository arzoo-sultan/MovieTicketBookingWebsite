import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import express from "express";
import 'dotenv/config'
 import { app } from "./app.js";
import connectDB from "./db/index.js";

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})
/*const app= express();
;(async () => {
    try {
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       app.on("error",(error)=>{
        console.log("error :",error)
        throw error;

        app.listen(process.env.PORT||8000,()=>{
            console.log(`App is listening on ${process.env.PORT}`)
        })
       })
    } catch (error) {
        console.error("ERROR")
        throw err   
    }

})()*/
export default app;