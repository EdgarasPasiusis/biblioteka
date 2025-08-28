const { postReservation, getAllReservations } = require("../models/reservationModel");
const { validationResult } = require("express-validator");

exports.postReservation = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const newReservation = req.body;

    const postedReservation = await postReservation(newReservation);

    res.status(201).json({
      status: "success",
      data: postedReservation,
    });
  } catch (error) {
    next(error);
  }
};

exports.getAllReservations = async (req, res, next) => {
  try {
    const reservationList = await getAllReservations();
    res.status(200).json({
      status: "success",
      tours: reservationList,
    });
  } catch (error) {
    next(error);
  }
};
