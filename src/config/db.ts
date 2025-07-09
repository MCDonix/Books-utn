import mongoose from "mongoose";
import process from "process";
process.loadEnvFile?.();

const URI = process.env.URI_BD || "";

export const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log("✅ Conectado a la bd");
  } catch (error) {
    console.error("❌ Error al conectar a la bd:", error);
    process.exit(1);
  }
};