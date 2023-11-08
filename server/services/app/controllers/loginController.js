const { plaintextAndPasswordCompare } = require("../helpers/bcrypt");
const { tokenCreate } = require("../helpers/jwt");
const { User } = require("../models/index");

class LoginController {
  static async login(req, res, next) {
    const { email, password } = req.body;
    // console.log(email, password);
    try {
      const foundUser = await User.findOne({
        where: {
          email,
        },
      });

      if (!foundUser) {
        throw new Error("USER_NOT_FOUND");
      }

      if (!plaintextAndPasswordCompare(password, foundUser.password)) {
        throw new Error("PASSWORD_INVALID");
      }

      const sendTokenPayload = {
        userId: foundUser.id,
        userEmail: foundUser.email,
      };

      const token = tokenCreate(sendTokenPayload);

      res.status(200).json({
        statusCode: 200,
        data: {
          access_token: token,
        },
      });
    } catch (err) {
      // console.log(err);
      next(err);
    }
  }
}

module.exports = LoginController;
