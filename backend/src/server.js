import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { authRoutes } from "../routes/authRoutes.js";
const app=express()

dotenv.config();

app.use(cors({
  origin: process.env.CORS_ORIGIN || "http://localhost:3000",
  credentials: true,
}));
app.use(express.json());

app.use("/api",authRoutes);

app.listen(5000, () =>
  console.log(`✅ Backend running at http://localhost:5000`)
);
