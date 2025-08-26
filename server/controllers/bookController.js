const { postBook, deleteBook, updateBook } = require("../models/bookModel");
const { validationResult } = require("express-validator");
const AppError = require("../utils/AppError");

exports.postBook = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const newBook = req.body;

    const postedBook = await postBook(newBook);

    res.status(201).json({
      status: "success",
      data: postedBook,
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteBook = async (req, res, next) => {
  try {
    const { id } = req.params;

    const book = await deleteBook(id);

    if (!book) {
      throw new AppError("book not found", 404);
    }
    res.status(200).json({
      status: "success",
      data: book,
    });
  } catch (error) {
    next(error);
  }
};

exports.updateBook = async (req, res, next) => {
  try {
    const id = req.params.id;
    const updates = req.body;

    if (!updates || Object.keys(updates).length === 0) {
      throw new AppError("Please provide at least one field to update", 400);
    }

    const updatedBook = await updateBook(id, updates);

    if (!updatedBook) {
      throw new AppError("Invalid id, book not found and not updated", 404);
    }

    res.status(200).json({
      status: "success",
      data: updatedBook,
    });
  } catch (error) {
    next(error);
  }
};