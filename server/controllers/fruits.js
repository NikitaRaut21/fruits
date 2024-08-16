import User from "../models/User.js";
import Fruit from "./../models/Fruits.js";

const postFruits=async(req,res)=>{
    const{title,amount,category,type,user, protein, calories}=req.body;

    const fruit =new Fruit({
        title,
        amount,
        category,
        type,
        user,
       protein,
       calories
    })
    try{
        const savedFruits=await fruit.save();
        res.json({
            success:true,
            message:"'fruit successful added",
            data:savedFruits
        })
    }
    catch(e){
        res.json({
            success:false,
            message:e.message,
            data:null
        })
    }

}
const getFruits=async(req,res)=>{
  const { userId }=req.query;
  const user = await User.findById( userId);
  if(!user){
    return res.json({
        success:false,
        message:"User not found",
        data:null
    })
  }
  const fruits = await Fruit.find({user:userId});
  res.json({
    success:true,
    message:"Fruits fetech successfully",
    data:fruits
})

}
export {postFruits, getFruits}