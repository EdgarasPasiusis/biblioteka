const {
deleteComment
} = require("../models/commentsModel");
const { validationResult } = require("express-validator");
const AppError = require("../utils/AppError");

exports.deleteComment = async (req, res, next) => {
  try {
    const { id } = req.params;

    const comment = await deleteComment(id);

    if (!comment) {
      throw new AppError("comment not found", 404);
    }
    res.status(200).json({
      status: "success",
      data: comment,
    });
  } catch (error) {
    next(error);
  }
};

