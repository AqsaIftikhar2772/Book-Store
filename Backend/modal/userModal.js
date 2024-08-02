import mongoose from 'mongoose'

const userSchema = mongoose.Schema({

    name:{
        type:String,
        required: true,
    },
    email:{
        type:String,
        required: true,
        unique: true,
        match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    },
    password:{
        type:String,
        required: true,
        // minlength: 8,
        // select: false
    },
})
    const User = mongoose.model("User" , userSchema);
    export default User;
