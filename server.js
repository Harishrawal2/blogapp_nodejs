import express from "express";
import dotenv from "dotenv";
import mongoDBConn from "./src/config/db.js";
import userRoutes from "./src/routes/userRoutes.js";
import blogRoutes from "./src/routes/blogRoutes.js";

const app = express();

app.use(express.json());

// REST API
app.use("/api/user", userRoutes);
app.use("/api/blog", blogRoutes);

//Environment Configuration
dotenv.config();

// Database connection
mongoDBConn();

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server is connected on port ${port}`);
});
