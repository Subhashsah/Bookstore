import mongoose from 'mongoose'
import validator from 'validator'
const userSchema = new mongoose.Schema({
  fullName:{
    type:"String",
    minLength:[2,"minimum fullName must contain to letter"],
    trim:true,
    required:true,
  },
  email:{
    type:"String",
    unique:true,
    trim:true,
    required:true,
    validate:{
        validator:validator.isEmail,
        message:"Invalid email format"
    }

  },
  password:{
    type:"String",
    trim:true,
    required:true,

  }
})

export const User = mongoose.model("User",userSchema)