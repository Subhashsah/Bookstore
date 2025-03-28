import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Book } from "../models/Book.model.js";

const getBook=asyncHandler(async(req,res)=>{
    const book = await Book.find();
    if(!book ||book.length===0){
        throw new ApiError(400,"no book found")
    }
    res.
    status(200)
    .json(
        new ApiResponse(200,book,"successfull book found")
    )
})
const addBook = asyncHandler(async(req,res)=>{
    console.log(req.body)
    const {author,price,image,category,title}=req.body;
    if(!author ||!price ||!image || !category ||!title ){
        throw new ApiError(400,"All field is required");
    }
    const book = await Book.create({
        author,
        price,
        image,
        category,
        title
    })
    res.status(200)
    .json(
       new ApiResponse(201,book,"books uploaded to databse")
    )
})
export{
    getBook,
    addBook
}