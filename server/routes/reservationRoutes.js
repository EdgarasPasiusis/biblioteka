const express = require("express");
const router = express.Router();

const {
  createReservation,
  getAllReservations,
  extendReservation,
  getReservationByUserAndBook,
  getMyReservations,
  returnReservation
} = require("../controllers/reservationController");
const { protect } = require("../controllers/authController");

router.route("/").post(protect, createReservation).get(getAllReservations);
router.route("/book/:bookId").get(protect, getReservationByUserAndBook);
router.route("/my").get(protect, getMyReservations);
router.route("/extend").put(protect, extendReservation);
router.route("/return").put(protect, returnReservation); 

module.exports = router;
