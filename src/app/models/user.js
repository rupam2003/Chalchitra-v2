import mongoose, { Schema, models } from "mongoose";


const userSchema = new Schema({
    
    name:{
        type: String,
        required : true,
    }, 
    
    email:{
        type: String,
        required : true,
        
    },
   
    password:{
        type: String,
        required : true,
    },
   
    movies:[
        {
            type:Number,
        }
    ],
    tv:[
        {
            type:Number,
        }
    ]
    
},
{timestamps: true},
);

const User = models.User || mongoose.model('User',userSchema);

export default User;