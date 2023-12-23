// const serverless = require("serverless-http");
import serverless from "serverless-http";
// const express = require("express");
import dotenv from "dotenv";
import express from "express";
const app = express();
app.use(express.json())
// const userRoutes = require('./routes/userRoute')
import userRoutes from "./routes/userRoute.js"
dotenv.config();

app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from root!",
  });
});

app.get("/path", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from path!",
  });
});

app.use("/api/v1/user",userRoutes);

app.listen(process.env.PORT,()=>{
  console.log(`i am available at ${process.env.PORT}`)
})

// module.exports.handler = serverless(app);
export const handler = serverless(app);
