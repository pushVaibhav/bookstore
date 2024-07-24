import mongoose from "mongoose";
import userRoute from "./routes/user.route.js"
import bookroute from "./routes/book.route.js"
import express from "express";
import dotenv from "dotenv";
import cors from "cors"
const app = express()
dotenv.config()
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 4000
const URI = process.env.MONGODBURI

// mongodb connection

try {
    mongoose.connect(URI,{
      useNewUrlParser:true,
      useUnifiedTopology:true
    })
    console.log("Databse Connected!")
} catch (error) {
    console.log("Error:",error)
}

app.use("/book",bookroute)
app.use("/user",userRoute)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})