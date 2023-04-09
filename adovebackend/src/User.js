const mongoose=require("mongoose");

const userSchema =new mongoose.Schema({
    name:{
      type: String,
      required: true,
      maxlength: 50,
    },
    email:{
      type: String,
      required: true,
      unique: true,
    },
    bio:{
      type: String,
      maxlength:200,
    },
  },
  {timestamps:true}
);
const User=mongoose.model("User", userSchema);
module.exports = User
