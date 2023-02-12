import mongoose from "mongoose";

const recuriter=new mongoose.Schema({
    emailID:{
        type:String,
        require:true,
    },
    companyName:{
        type:String,
        require:true,
    },
    subject:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
})

const Recruiters=new mongoose.model("Recruiter",recuriter);

export default Recruiters;