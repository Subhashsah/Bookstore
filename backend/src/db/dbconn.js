
import mongoose from "mongoose"

const conn =async()=>{
    try {
        await mongoose.connect(process.env.DB_URL+"/bookStore")
        console.log("connectd to DB")
    } catch (error) {
        console.log("Fail to connect to db")
        console.log(error) 
    }
}
export {conn}