
import User from "../models/UserSchema.js";
//Update user

export const updateUser=async(req,res)=>{
    const id=req.params.id;

    try {
        const updateUser= await User.findByIdAndUpdate(
            id,
            {$set:req.body},
            {new:true}
            
        );
        
        
        res.status(200).json({success:true,message:'successfully updated',data:updateUser});


    }catch (error) {
        res.status(500).json({success:false,message:'failed to update'});
    }
};

//Delete User
export const deleteUser=async(req,res)=>{
    const id=req.params.id;

    try {
        await User.findByIdAndDelete(
            id,
            
        );
        
        
        res.status(200).json({success:true,message:'successfully deleted'});


    }catch (error) {
        res.status(500).json({success:false,message:'failed to delete'});
    }
};
//Get one user
export const getSingleUser=async(req,res)=>{
    const id=req.params.id;

    try {
        const user= await User.findById(id).select("-password");
        
        
        res.status(200).json({success:true,message:'User found',data:user});


    }catch (error) {
        res.status(404).json({success:false,message:'No user found'});
    }
};

//Get All users
export const getAllUser=async(req,res)=>{
    

    try {
        const users= await User.find({}).select("-password");
        
        
        res.status(200).json({success:true,message:'Users found',data:users});


    }catch (error) {
        res.status(404).json({success:false,message:'No users found'});
    }
};