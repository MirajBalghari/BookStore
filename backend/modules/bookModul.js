import mongoose from "mongoose";
const schemaBook = new mongoose.Schema({
      id: Number,
    name: String,
     title:String,
     price:String,
    category:String,
    image :String  
        }
    )
export default  mongoose.model('books',schemaBook)