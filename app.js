import express from "express"
import connect from "./db/connect.js"
import UserRoutes from "./routes/User.routes.js"
import cookieParser from "cookie-parser";
import cors from "cors"
import BlogsRoutes from "./routes/Blogs.routes.js";

//! initializing the express function and storing in a app varaible 
const app = express();

//? accepting json data from the frontend 
app.use(express.json());

//! getting routes for auth from user.routes.js file
app.use("/api/auth",UserRoutes);

//? getting routes for blogs from blogs.routes.js file
app.use("/api/blog",BlogsRoutes);

//! To get cookies from the frontend
app.use(cookieParser());
//? to enable cross origin resource sharing 
app.use(cors({
 credentials: true ,
}))

//! to run our server at port 3000 and connecting db 
app.listen(3000,()=>{
    connect();
    console.log("Server is running ");
})