import express from "express"
import { createBlog, deleteBlog, readBlog, updateBlog } from "../controller/blog.controller.js";
import { keepLoggedIn } from "../middlewares/login.middleware.js";
const router = express.Router();

router.route("/add").post(keepLoggedIn,createBlog);
router.route("/data").get(keepLoggedIn,readBlog);
router.route("/update/:id").put(keepLoggedIn,updateBlog);
router.route("/delete/:id").delete(keepLoggedIn,deleteBlog);


export default router;