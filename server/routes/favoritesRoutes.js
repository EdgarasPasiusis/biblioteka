const express = require("express");
const router = express.Router();

const {
  createFavorite,
  getUserFavorites,
  deleteFavorite,
  checkFavoriteStatus
} = require("../controllers/favoritesController");
const { protect } = require("../controllers/authController");

router
  .route("/")
  .post(protect, createFavorite)
  .get(protect, getUserFavorites);
  router.route("/check/:bookId").get(protect, checkFavoriteStatus);
  router.route("/:id").delete(protect, deleteFavorite);

module.exports = router;
