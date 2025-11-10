import express from "express";
import cors from "cors";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import pkg from "@prisma/client";

dotenv.config();

const { PrismaClient } = pkg;
const app = express();
const prisma = new PrismaClient();

// Allow frontend to call backend
app.use(cors({
  origin: process.env.CORS_ORIGIN || "http://localhost:3000",
  credentials: true,
}));
app.use(express.json());

// ✅ REGISTER
app.post("/api/auth/register", async (req, res) => {
  try {
    const { fullName, username, email, password, role } = req.body;

    if (!fullName || !username || !email || !password)
      return res.status(400).json({ message: "All fields are required" });

    const userExists = await prisma.user.findFirst({
      where: { OR: [{ email }, { username }] },
    });

    if (userExists)
      return res.status(400).json({ message: "Email or username already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: { fullName, username, email, password: hashedPassword, role }
    });

    return res.json({ message: "Account created successfully!" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

// ✅ LOGIN
app.post("/api/auth/login", async (req, res) => {
  try {
    const { emailOrUsername, password } = req.body;

    const user = await prisma.user.findFirst({
      where: {
        OR: [{ email: emailOrUsername }, { username: emailOrUsername }],
      },
    });

    if (!user) return res.status(400).json({ message: "Invalid login credentials" });

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword)
      return res.status(400).json({ message: "Invalid login credentials" });

    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET || "default_secret_key",
      { expiresIn: "7d" }
    );

    const { password: _, ...safeUser } = user;

    return res.json({ message: "Login successful", token, user: safeUser });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

app.listen(5000, () =>
  console.log(`✅ Backend running at http://localhost:5000`)
);
