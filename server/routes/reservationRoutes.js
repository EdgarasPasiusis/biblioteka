const express = require("express");
const router = express.Router();

const {
  createReservation,
  getAllReservations,
  extendReservation,
  getReservationByUserAndBook,
  getMyReservations
} = require("../controllers/reservationController");
const { protect } = require("../controllers/authController");

router
  .route("/")
  .post(protect, createReservation)
  .get(getAllReservations)
  .put(protect, extendReservation);
  router.route("/book/:bookId").get(protect, getReservationByUserAndBook);
  router.route("/my").get(protect, getMyReservations);

module.exports = router;

