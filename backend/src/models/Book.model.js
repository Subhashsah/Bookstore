import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
    author:{
        type:"String",
        minLenght:[2,"minumum lenght must be atleast 2"],
        required:true,
        trim:true
    },
    price:{
        type:"String",
        required:true,
        trim:true
    },
    image:{
        type:"String",
        required:true,
        trim:true,
    },
    category:{

        type:"String",
        required:true,
        trim:true
    },
    title:{
        type:"String",
        required:true,
        trim:true
    }
})
export const Book = mongoose.model("Book",BookSchema)