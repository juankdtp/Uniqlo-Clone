const { User } = require("../models/index");

class RegisterController {
  static async register(req, res, next) {
    const { email, password, phoneNumber, address } = req.body;
    console.log(email, password, phoneNumber, address, 6, "masukkk");
    try {
      const result = await User.create({
        email,
        password,
        phoneNumber,
        address,
      });

      const userData = {
        id: result.id,
        email,
      };

      res.status(201).json({
        statusCode: 201,
        data: userData,
      });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
}

module.exports = RegisterController;
