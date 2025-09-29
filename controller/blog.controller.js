import BlogModel from "../models/Blogs.js";

 const createBlog = async(req,res)=>{
    const {title , description} = req.body;
    try{
const data = await BlogModel.create({
    title,
    description,
});
res.status(200).json({
    success : true,
    message : "Data Created Successfully",
    data,
})
    }catch(err){
        res.status(400).send(err)
        
    }
}

 const readBlog = async(req,res)=>{
    try{
        const data = await BlogModel.find();
        res.status(200).json({
    success : true,
    message : "Data Fetched Successfully",
    data,
})

    }catch(err){
         res.status(400).send(err)
    }
}



 const deleteBlog = async(req,res)=>{
    const {id} = req.params;
    try{
await BlogModel.findByIdAndDelete(id);
res.status(200).json({
    success : true,
    message : "Data Deleted Successfully",
})
    }catch(err){
                 res.status(400).send(err)
    }
}

 const updateBlog = async(req , res)=>{
        const {id} = req.params;
        try{
await BlogModel.findByIdAndUpdate(id,req.body,{new : true});

res.status(200).json({
    success : true,
    message : "Data Updated Successfully",
})
    }catch(err){
                 res.status(400).send(err)
    }
}
export {createBlog , readBlog , updateBlog , deleteBlog}