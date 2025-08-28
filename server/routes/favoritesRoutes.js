const express = require("express");
const router = express.Router();

const {
postFavorites,
deleteFavorite,
getAllFavorites
} = require("../controllers/favoritesController");

router.route("/").post(postFavorites).get(getAllFavorites);
router.route("/:id").delete(deleteFavorite);

module.exports = router;
