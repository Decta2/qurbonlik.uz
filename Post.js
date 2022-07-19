import mongoose from "mongoose";

const order = new mongoose.Schema({
    name:{type: String, required:true},
    address:{type: String, required:true},
    description:{type: String, required:true},
    phone:{type: Number, required:true},
    type_qurbonlik:{type: Number,min: 0,max: 3, required:true},
    address_tuman:{type: Number,min: 0,max: 10},
    mehrli_qollar:{type: Number,min: 0,max: 30, required:true}
})

export default mongoose.model('order', order)