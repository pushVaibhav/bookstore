import mongoose from "mongoose";

const schema = mongoose.Schema({
    name:String,
    title:String,
    price:Number,
    category:String,
    image:String

})

const Book = mongoose.model("Books",schema)

export default Book;