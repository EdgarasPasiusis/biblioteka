const {
  postCategory,
  deleteCategory,
  updateCategory,
  getAllCategorys,
} = require("../models/categoryModel");
const { validationResult } = require("express-validator");
const AppError = require("../utils/AppError");

exports.postCategory = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const newCategory = req.body;

    const postedCategory = await postCategory(newCategory);

    res.status(201).json({
      status: "success",
      data: postedCategory,
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteCategory = async (req, res, next) => {
  try {
    const { id } = req.params;

    const category = await deleteCategory(id);

    if (!category) {
      throw new AppError("category not found", 404);
    }
    res.status(200).json({
      status: "success",
      data: category,
    });
  } catch (error) {
    next(error);
  }
};

exports.updateCategory = async (req, res, next) => {
  try {
    const id = req.params.id;
    const updates = req.body;

    if (!updates || Object.keys(updates).length === 0) {
      throw new AppError("Please provide at least one field to update", 400);
    }

    const updatedCategory = await updateCategory(id, updates);

    if (!updatedCategory) {
      throw new AppError("Invalid id, category not found and not updated", 404);
    }

    res.status(200).json({
      status: "success",
      data: updatedCategory,
    });
  } catch (error) {
    next(error);
  }
};

exports.getAllCategorys = async (req, res, next) => {
  try {
    const categoryList = await getAllCategorys();
    res.status(200).json({
      status: "success",
      tours: categoryList,
    });
  } catch (error) {
    next(error);
  }
};
