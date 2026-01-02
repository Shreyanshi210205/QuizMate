import express from "express"
const router=express.Router();
import { register,login } from "../controllers/authController.js";

router.post('/auth/register',register)
router.post('/auth/login',login)

export const authRoutes=router;