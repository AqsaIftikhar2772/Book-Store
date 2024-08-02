import express from 'express';
const bookRoute = express.Router();
import getBook from '../controller/bookController.js';
 
bookRoute.get("/book" ,getBook)


export default bookRoute;