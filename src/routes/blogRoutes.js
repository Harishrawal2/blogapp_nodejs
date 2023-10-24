import express from "express";
import {
  CreateBlogs,
  GetByIdBlog,
  UpdateBlog,
  deleteBlog,
  getAllBlogs,
  getByUserId,
} from "../controllers/blogControllers.js";

const router = express.Router();

// GET ALL BLOGS
router.get("/", getAllBlogs);

// CREATE BLOG
router.post("/add", CreateBlogs);

// UPDATE BLOG BY ID
router.put("/update/:id", UpdateBlog);

// GET BLOG BY ID
router.get("/:id", GetByIdBlog);

// DELETE BLOG BY ID
router.delete("/:id", deleteBlog);

// GET BLOG BY USER ID
router.get("/user/:id", getByUserId);

export default router;
