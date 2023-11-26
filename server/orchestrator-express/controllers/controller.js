const axios = require("axios");
const APP_SERVICE_URL = process.env.APP_SERVICE_URL || "http://localhost:4002";
const USER_SERVICE_URL =
  process.env.USER_SERVICE_URL || "http://localhost:4001";

const Redis = require("ioredis");
const redis = new Redis({
  port: 16864, // Redis port
  host: "", // Redis host
  username: "default", // needs Redis >= 6
  password: process.env.REDIS_PASS,
});

class Controller {
  static async getAllProduct(req, res) {
    try {
      const productCache = await redis.get("products");

      if (productCache) {
        const data = JSON.parse(productCache);
        // redis.del("products");
        res.status(200).json({
          statusCode: 200,
          data,
        });
      } else {
        const { data } = await axios.get(`${APP_SERVICE_URL}/product`);
        const productData = data.data;
        await redis.set("products", JSON.stringify(productData));
        // console.log(productData);

        res.status(200).json({
          statusCode: 200,
          data: productData,
        });
      }
    } catch (err) {
      res.status(500).json({
        statusCode: 500,
        message: "Internal Server Error",
      });
    }
  }

  static async getProductById(req, res) {
    const { id } = req.params;
    try {
      const getProductById = await axios.get(
        `${APP_SERVICE_URL}/product/${id}`
      );
      const productByIdData = getProductById.data.data;
      //   console.log(productByIdData, 52);

      const getUserById = await axios.get(
        `${USER_SERVICE_URL}/${productByIdData.authorId}`
      );
      const userByIdData = getUserById.data.data;
      //   console.log(userByIdData, 56);

      productByIdData.User = userByIdData;

      //   console.log(productByIdData, 62);

      res.status(200).json({
        statusCode: 200,
        data: productByIdData,
      });
    } catch (err) {
      res.status(500).json({
        statusCode: 500,
        message: "Internal Server Error",
      });
    }
  }

  static async addProduct(req, res) {
    const {
      name,
      description,
      price,
      mainImg,
      categoryId,
      image1,
      image2,
      image3,
    } = req.body;
    try {
    } catch (err) {
      res.status(500).json({
        statusCode: 500,
        message: "Internal Server Error",
      });
    }
  }

  static async updateProduct(req, res) {
    try {
    } catch (err) {
      res.status(500).json({
        statusCode: 500,
        message: "Internal Server Error",
      });
    }
  }

  static async deleteProduct(req, res) {
    try {
    } catch (err) {
      res.status(500).json({
        statusCode: 500,
        message: "Internal Server Error",
      });
    }
  }

  static async getAllUser(req, res) {
    try {
    } catch (err) {
      res.status(500).json({
        statusCode: 500,
        message: "Internal Server Error",
      });
    }
  }

  static async getUserById(req, res) {
    try {
    } catch (err) {
      res.status(500).json({
        statusCode: 500,
        message: "Internal Server Error",
      });
    }
  }

  static async addUser(req, res) {
    try {
    } catch (err) {
      res.status(500).json({
        statusCode: 500,
        message: "Internal Server Error",
      });
    }
  }

  static async deleteUser(req, res) {
    try {
    } catch (err) {
      res.status(500).json({
        statusCode: 500,
        message: "Internal Server Error",
      });
    }
  }
}

module.exports = Controller;
