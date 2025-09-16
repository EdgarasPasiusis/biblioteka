const {
  addFavorite,
  removeFavorite,
  getAllFavorites,
  getFavoritesByUser,
  checkIfFavorite,
} = require("../models/favoritesModel");
const { validationResult } = require("express-validator");

exports.createFavorite = async (req, res) => {
  try {
    const userId = req.user.id;
    const { bookId } = req.body;

    if (!bookId) {
      return res.status(400).json({ message: "Book_id is required" });
    }

    const alreadyExists = await checkIfFavorite(userId, bookId);

    if (alreadyExists) {
      return res.status(409).json({ message: "Book is already in favorites" });
    }

    const favorite = await addFavorite(userId, bookId);
    res.status(201).json(favorite);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.deleteFavorite = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const bookId = req.params.id;

    await removeFavorite(userId, bookId);

    res.status(204).json({
      status: "success",
      data: null,
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

exports.getUserFavorites = async (req, res) => {
  try {
    const userId = req.user.id;
    const favorites = await getFavoritesByUser(userId);

    res.status(200).json({
      status: "success",
      results: favorites.length,
      data: favorites,
    });
  } catch (err) {
    console.error("Error in getUserFavorites:", err);
    res.status(500).json({ message: "Server error" });
  }
};


exports.checkFavoriteStatus = async (req, res) => {
  try {
    const userId = req.user.id;
    const { bookId } = req.params;

    const isFav = await checkIfFavorite(userId, bookId);

    res.status(200).json({ isFavorite: isFav });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "Server error while checking favorite status" });
  }
};
