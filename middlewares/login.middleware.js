import jwt from "jsonwebtoken";


export const keepLoggedIn = async(req , res , next)=>{
    const token = req.cookies.Token;
      if (!token) {
    return res.status(401).json({ message: "Access Denied. No token provided." });
  }

try{
const decoded = jwt.verify(token, "TOKEN");
    req.user = decoded;
    next();
}catch(err){
   return res.status(403).json({ message: "Invalid or expired token." });
}
}



