import express from "express";
import bcryptjs from "bcryptjs";
import User from '../Model/User.js';
import jwt from 'jsonwebtoken';
const userRouter = express.Router();

userRouter.post("/Signup", async (req, res) => {
  const {username, email, password } = req.body;
  const hashpassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username ,email, password: hashpassword });
  try {
    await newUser.save();
    res.status(200).json("User Created Successfully");
  } catch (error) {
    res.status(500).json({ error: "Something went wrong", message: error.message });
  }
});


userRouter.post("/login", async (req, res) => {
  const TOKEN_SECRET="jdlldwnsnf";
  const { email, password } = req.body;
  try {
    const user = await User.findOne({email})
    if(!user){
        return res.json({error: "User does not exist"}, {status: 400})
    }
    console.log("user exists");
    const validPassword = await bcryptjs.compare(password, user.password)
    if(!validPassword){
        return res.json({error: "Invalid password"}, {status: 400})
    }
    console.log(user);
     
    //create token data
    const tokenData = {
        id: user._id,
        username: user.username,
        email: user.email
    }
    //create token
    const token = await jwt.sign(tokenData, TOKEN_SECRET, {expiresIn: "1d"})

    const response = res.json({
        message: "Login successful",
        success: true,
    })
    // response.cookies.set("token", token, {
    //     httpOnly: true, 
        
    // })
    return response;

} catch (error) {
  res.status(500).json({ error: "Something went wrong", message: error.message });

  }
  
});




export default userRouter;
