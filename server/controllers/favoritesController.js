const {
  postFavorites,
  deleteFavorite,
  getAllFavorites,
} = require("../models/favoritesModel");
const { validationResult } = require("express-validator");
const AppError = require("../utils/AppError");

exports.postFavorites = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const newFavorite = req.body;

    const postedFavorite = await postFavorites(newFavorite);

    res.status(201).json({
      status: "success",
      data: postedFavorite,
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteFavorite = async (req, res, next) => {
  try {
    const { id } = req.params;

    const favorite = await deleteFavorite(id);

    if (!favorite) {
      throw new AppError("favorite not found", 404);
    }
    res.status(200).json({
      status: "success",
      data: favorite,
    });
  } catch (error) {
    next(error);
  }
};

exports.getAllFavorites = async (req, res, next) => {
  try {
    const favoriteList = await getAllFavorites();
    res.status(200).json({
      status: "success",
      tours: favoriteList,
    });
  } catch (error) {
    next(error);
  }
};
