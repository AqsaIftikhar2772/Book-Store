import express from 'express';
import  {signUp, login } from '../controller/userController.js';

const userRoute = express.Router();
userRoute.post("/signup" , signUp );
userRoute.post("/login" , login)



export default userRoute;