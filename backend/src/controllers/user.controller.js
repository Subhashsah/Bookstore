import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/user.model.js";

const registerUser =asyncHandler(async(req,res)=>{
    const{fullName,email,password}= req.body;
    if(!fullName ||!email ||!password){
        throw new ApiError(400,"All field required")
    }
    const isUserExist = await User.findOne({email})
    if(isUserExist){
        throw new ApiError(400,"User all ready exit")
    }
    const user = await User.create({
        fullName,
        email,
        password
    })
    const userCreated = await User.findById(user._id).select("-password")
    if(!userCreated){
        throw new ApiError(400,"something went wrong while registering user")
    }
    res
    .status(200)
    .json(
        new ApiResponse(201,userCreated,"user register successfully")
    )
   
})
export{
    registerUser
}