import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db";
import bookRoutes from "./routes/book.routes";

dotenv.config();
process.loadEnvFile?.();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", bookRoutes);

app.listen(PORT, async () => {
  await connectDB();
  console.log(`🚀 Servidor 100% activo :D`);
});