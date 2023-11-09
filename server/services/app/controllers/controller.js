const { slugify } = require("voca");
const {
  Product,
  Category,
  Image,
  User,
  sequelize,
} = require("../models/index");

class Controller {
  static async fetchAllProduct(req, res, next) {
    try {
      const result = await Product.findAll({
        include: [
          {
            model: Category,
          },
        ],
      });

      res.status(200).json({
        statusCode: 200,
        data: result,
      });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  static async fetchProductDetail(req, res, next) {
    const { id } = req.params;
    try {
      const result = await Product.findByPk(id, {
        include: [
          {
            model: Image,
          },
          {
            model: Category,
          },
        ],
      });

      if (!result) {
        throw new Error("DATA_NOT_FOUND");
      }

      res.status(200).json({
        statusCode: 200,
        data: result,
      });
    } catch (err) {
      next(err);
    }
  }

  static async fetchProductImage(req, res, next) {
    const { id } = req.params;
    // console.log(id, "ada nih");
    try {
      const result = await Image.findAll({
        where: {
          productId: id,
        },
      });

      if (!result) {
        throw new Error("DATA_NOT_FOUND");
      }
      //   console.log(result, "masih gak error");
      res.status(200).json({
        statusCode: 200,
        data: result,
      });
    } catch (err) {
      next(err);
    }
  }

  static async addProduct(req, res, next) {
    // console.log("masukkk");
    const {
      name,
      description,
      price,
      mainImg,
      categoryId,
      image1,
      image2,
      image3,
      authorId,
    } = req.body;
    // const { userId } = req.additionalData;
    const t = await sequelize.transaction();
    // transaction
    try {
      const product = await Product.create(
        {
          name,
          description,
          price,
          mainImg,
          categoryId,
          authorId,
        },
        { transaction: t }
      );

      const image = await Image.bulkCreate(
        [
          {
            productId: product.id,
            imgUrl: image1,
          },
          {
            productId: product.id,
            imgUrl: image2,
          },
          {
            productId: product.id,
            imgUrl: image3,
          },
        ],
        { transaction: t }
      );

      await t.commit();

      res.status(200).json({
        statusCode: 200,
        data: {
          product,
          image,
        },
      });
    } catch (err) {
      await t.rollback();
      next(err);
    }
  }

  static async deleteProduct(req, res, next) {
    const { id } = req.params;
    try {
      const product = await Product.findByPk(id);
      if (!product) {
        throw new Error("DATA_NOT_FOUND");
      }

      const result = await Product.destroy({
        where: {
          id,
        },
      });

      res.status(200).json({
        statusCode: 200,
        message: `product with id ${id} has been deleted`,
      });
    } catch (err) {
      // console.log(err);
      next(err);
    }
  }

  static async editProduct(req, res, next) {
    const { id } = req.params;
    const { name, description, price, mainImg, categoryId } = req.body;
    try {
      const product = await Product.findByPk(id);

      if (!product) {
        throw new Error("DATA_NOT_FOUND");
      }

      const updateProduct = await Product.update(
        {
          name,
          slug: slugify(name),
          description,
          price,
          mainImg,
          categoryId,
        },
        {
          where: {
            id,
          },
        }
      );

      res.status(201).json({
        statusCode: 201,
        message: `Product with id ${id} has been updated`,
      });
    } catch (err) {
      // console.log(err);
      next(err);
    }
  }

  static async fetchCategory(req, res, next) {
    try {
      const result = await Category.findAll();

      res.status(200).json({
        statusCode: 200,
        data: result,
      });
    } catch (err) {
      next(err);
    }
  }

  static async addCategory(req, res, next) {
    const { name } = req.body;
    console.log(name);
    try {
      const result = await Category.create({
        name,
      });
      res.status(200).json({
        statusCode: 200,
        message: `a Category has been created with id ${result.id}`,
      });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  static async deleteCategory(req, res, next) {
    const { id } = req.params;
    try {
      const check = await Category.findByPk(id);

      if (!check) {
        throw new Error("DATA_NOT_FOUND");
      }

      const result = await Category.destroy({
        where: {
          id,
        },
      });

      res.status(200).json({
        statusCode: 200,
        message: `a Category with id ${id} has been deleted`,
      });
    } catch (err) {
      next(err);
    }
  }

  // CRUD category
  // edit dan delete product
}

module.exports = Controller;
