import { Request, Response } from "express";
import { BookModel } from "../models/book.model";
import { handleSuccess, handleError } from "../utils/response";

export const getBooks = async (_req: Request, res: Response) => {
  try {
    const books = await BookModel.find();
    handleSuccess(res, books);
  } catch (error) {
    handleError(res, "Error al obtener libros", error);
  }
};

export const getBookById = async (req: Request, res: Response) => {
  try {
    const book = await BookModel.findById(req.params.id);
    if (!book) return handleError(res, "Libro no encontrado", null, 404);
    handleSuccess(res, book);
  } catch (error) {
    handleError(res, "Error al obtener libro", error);
  }
};

export const createBook = async (req: Request, res: Response) => {
  try {
    const newBook = new BookModel(req.body);
    await newBook.save();
    handleSuccess(res, newBook, 201);
  } catch (error) {
    handleError(res, "Error al crear libro", error);
  }
};

export const updateBook = async (req: Request, res: Response) => {
  try {
    const updatedBook = await BookModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedBook) return handleError(res, "Libro no encontrado", null, 404);
    handleSuccess(res, updatedBook);
  } catch (error) {
    handleError(res, "Error al actualizar libro", error);
  }
};

export const deleteBook = async (req: Request, res: Response) => {
  try {
    const deletedBook = await BookModel.findByIdAndDelete(req.params.id);
    if (!deletedBook) return handleError(res, "Libro no encontrado", null, 404);
    handleSuccess(res, deletedBook);
  } catch (error) {
    handleError(res, "Error al eliminar libro", error);
  }
};
