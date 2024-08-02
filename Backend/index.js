// install packges 
// 1) expresss  2)nodemon 3) dotenv 4) mongoose 5) cors  6)bcrypt

// express
import express from 'express'
const app = express();

// dotenv
import dotenv from "dotenv";
dotenv.config();

// cors
import cors from 'cors'
app.use(cors());

app.use(express.json());

// routes
import bookRoute from './routes/bookRoute.js';
import userRoute from './routes/userRoute.js';
app.use("/api/v1" , bookRoute);
app.use("/user"  , userRoute);


const port = process.env.PORT || 9000 ;
app.listen(port , () =>{
    console.log(`server is running on port ${port}`);
})

// database
import DbConfig from './config/dbConfig.js';
DbConfig();