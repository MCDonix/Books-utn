import { Schema, model } from "mongoose";
import { IBook } from "../interfaces/book.interface";

const bookSchema = new Schema<IBook>({
  title: { type: String, required: true, unique: true },
  author: { type: String, required: true },
  publishedYear: Number,
  genre: String,
  available: { type: Boolean, default: true },
});

export const BookModel = model<IBook>("Book", bookSchema);
