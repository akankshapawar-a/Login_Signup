
import mongoose from "mongoose";
import  express  from "express";
import cors from 'cors';
import userRouter from "./Routes/User.route.js";

const app = express();
const port =5000;



mongoose.connect('mongodb://localhost:27017/Reactjs').then(()=>{
    console.log("connected to mongoDb");
}).catch((error)=>{
    console.log("Mogodb is failed to connect",error);

})

app.use(cors())
app.use(express.json())
app.use('/api',userRouter)






app.listen(port, ()=>{
    console.log(`http://localhost:${port}`);
})