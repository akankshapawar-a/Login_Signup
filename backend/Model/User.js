import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:[true ,"Please provide a username"],
        
    },  
    email:{ 
        type:String,
        required:[true ,"Please provide a email"],
        unique:true, 
    },
    password:{
        type:String,
        required:[true ,"Please provide a password"],

    }
});
      
const User =mongoose.model("User",userSchema);

export default User;       