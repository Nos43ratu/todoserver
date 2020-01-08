const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const Signup = require("../../shema/signup");
router.post(
  "/",
  [
    check("email", "нужно ввести email").isEmail(),
    check("firstname", "нужно ввести имя")
      .not()
      .isEmpty(),
    check("password", "нужно ввести пароль").isLength({ min: 6 }),
    check("cook", "вы кто")
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, firstname, password, cook } = req.body;

    try {
      let poisk = await Signup.findOne({ email });
      if (poisk) {
        return res.status(400).json({ errors: [{ msg: "idi nahui" }] });
      }
      poisk = new Signup({
        email,
        firstname,
        password,
        cook
      });

      await poisk.save();
      res.send("kotaksos");
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);
module.exports = router;
