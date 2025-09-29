import mongoose from "mongoose";
const connect = async()=>{
    try{
        await mongoose.connect("mongodb+srv://rehanpoudel2_db_user:GjALlQk82oxdGcib@cluster0.t5d75rs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
console.log("DataBase Connected Successful");
    }catch(err){
        console.log(err)
    }
}
export default connect
