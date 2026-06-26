import "dotenv/config";
import { app } from "./app.js";
import connectDB from "./db/index.js";

connectDB()
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.error("MongoDB Error:", err);
  });

export default app;
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

// })()*/
// export default app;