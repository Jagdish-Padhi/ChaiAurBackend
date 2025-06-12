import express from "express";
import cors from "cors";
import cockieParser from "cookie-parser";
const app = express();

//CORS is used to allow req from frontend hosted on different origin than backend;
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

//MIDDLEWARES

//json data handle ke liye
app.use(express.json({ limit: "16kb" }));

//encoded url ko smjhne ke liye
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

//to access public assets
app.use(express.static("public"));

//to access/set cookies from user browser and perform CRUD operations
app.use(cockieParser());

//ROUTES import
import userRouter from "./routes/user.routes.js";

//Routes Declaration
app.use("/api/v1/users", userRouter);

export { app };
