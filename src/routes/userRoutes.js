import express from "express";
import {
  LoginUser,
  SignupUser,
  getAllUser,
} from "../controllers/userControllers.js";

const router = express.Router();

// ENDPOINT CRUD
// GET ALL USERS
router.get("/users", getAllUser);

// CREATE USER
router.post("/register", SignupUser);

// LOGIN USER
router.post("/login", LoginUser);

export default router;
