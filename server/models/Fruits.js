import { Schema, Types, model } from "mongoose";

const transactionSchema = new Schema({
    title:{
     type:String,
     required:true
    },
    
    amount: {
        type: Number, // Corrected 'Type' to 'type'
        required: true,
    },
    category: {
        type: String,
        required: true, // Changed to boolean
        default: "others" // Added default value for 'others'
    },
      protein:{
      type:String,
      required:true,
    },
    type: {
        type: String,
        required: true,
        
    },
    user: {
        type: Types.ObjectId, // Corrected the way to access ObjectId
        ref: "User",
        required: true,
    }
}, {
    timestamps: true,
});

const Transaction = model("Transaction", transactionSchema);

export default Transaction;