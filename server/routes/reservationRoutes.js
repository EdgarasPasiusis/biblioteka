const express = require("express");
const router = express.Router();

const {
postReservation,
getAllReservations
} = require("../controllers/reservationController");

router.route("/").post(postReservation).get(getAllReservations);

module.exports = router;
