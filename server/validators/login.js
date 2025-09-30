const { body } = require("express-validator");
const { getUserByEmail } = require("../models/authModel");
const argon2 = require("argon2");

const validateLogin = [
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Email is invalid")
    .normalizeEmail()
    .custom(async (value, { req }) => { // Add { req } here
      const user = await getUserByEmail(value);
      if (!user) {
        throw new Error("User or password is incorrect");
      }
      req.user = user; // Now req is defined
      return true;
    }),

  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .custom(async (value, { req }) => {
      // This now works because the previous validator set req.user
      const user = req.user;
      if (user) {
        const match = await argon2.verify(user.password, value);
        if (!match) {
          throw new Error("User or password is incorrect");
        }
      }
      return true;
    }),
];

module.exports = { validateLogin }; 