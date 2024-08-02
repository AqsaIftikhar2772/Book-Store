import mongoose from 'mongoose';

const bookSchema = mongoose.Schema({
    name:{
        type:String
    },
    title:{
        type:String
    },
    price:{
        type:Number
    },
    category:{
        type:String
    },
    image:{
        type:String
    }
} , {timeStamps:true})


const  Book = mongoose.model("book" , bookSchema);

export default Book;

