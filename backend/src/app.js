import express from "express"
import dotenv from "dotenv"
import cors from "cors";
import { conn } from "./db/dbconn.js";
import { router } from "./routes/user.route.js";
import { errorHandler } from "./middleware/errorHandler.middleware.js";
dotenv.config();
const app = express();

app.use(cors(
    {
     origin:"http://localhost:5173",
     methods: ["GET", "POST"],
     credentials: true,
    }
))
const port = process.env.PORT || 4000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/book",router);

app.use(errorHandler);

conn()
.then(()=>{
    app.listen(port,()=>{
        console.log(`server is listening at ${port}`);
    })
})
.catch((err)=>{
    console.log("fail to connect server")
})
