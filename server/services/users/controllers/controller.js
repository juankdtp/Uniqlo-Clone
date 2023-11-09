const { hashPassword } = require("../helpers/bcrypt");
const User = require("../models/user");

class Controller {
  static async createUser(req, res, next) {
    const { username, email, password, role, phoneNumber, address } = req.body;
    try {
      const result = await User.create({
        username,
        email,
        password: hashPassword(password),
        role,
        phoneNumber,
        address,
      });

      res.status(201).json({
        statusCode: 201,
        message: "User created sucessfully",
        data: result,
      });
    } catch (err) {
      res.status(500).json({
        statusCode: 500,
        message: "Internal Server Error",
      });
    }
  }
  static async getAllUser(req, res, next) {
    try {
      const result = await User.findAll();

      res.status(200).json({
        statusCode: 201,
        data: result,
      });
    } catch (err) {
      res.status(500).json({
        statusCode: 500,
        message: "Internal Server Error",
      });
    }
  }
  static async getUserById(req, res, next) {
    const { id } = req.params;
    // console.log(id);
    try {
      const result = await User.findById(id);

      res.status(200).json({
        statusCode: 200,
        data: result,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        statusCode: 500,
        message: "Internal Server Error",
      });
    }
  }
  static async deleteUserById(req, res, next) {
    const { id } = req.params;
    try {
      const result = await User.delete(id);

      res.status(200).json({
        statusCode: 200,
        message: `User with id ${id} deleted successfully`,
        data: result,
      });
    } catch (err) {
      res.status(500).json({
        statusCode: 500,
        message: "Internal Server Error",
      });
    }
  }
}

module.exports = Controller;
