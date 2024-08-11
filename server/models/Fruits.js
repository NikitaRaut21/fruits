import { Schema, Types, model } from "mongoose";

const fruitSchema = new Schema({
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
      enum:["debit","credit"]
        
    },
    user: {
        type: Schema.Types.ObjectId, // Corrected the way to access ObjectId
        ref: "User",
        required: true,
    }
}, {
    timestamps: true,
});

const fruit = model("fruit", fruitSchema);

export default fruit;