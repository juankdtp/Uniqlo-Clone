"use strict";
const { Model } = require("sequelize");
const { slugify } = require("voca");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.hasMany(models.Image, { foreignKey: "productId" });
      Product.belongsTo(models.Category, { foreignKey: "categoryId" });
      // Product.belongsTo(models.User, { foreignKey: "authorId" });
    }
  }
  Product.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "need name",
          },
          notNull: {
            msg: "need name",
          },
        },
      },
      slug: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "need slug",
          },
          notNull: {
            msg: "need slug",
          },
        },
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "need description",
          },
          notNull: {
            msg: "need description",
          },
        },
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "need price",
          },
          notNull: {
            msg: "need price",
          },
          min: 1000,
        },
      },
      mainImg: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "need main image url",
          },
          notNull: {
            msg: "need main image url",
          },
        },
      },
      categoryId: DataTypes.INTEGER,
      authorId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );

  Product.beforeValidate((instance, options) => {
    instance.slug = slugify(instance.name);
    // console.log(instance, 92);
  });

  return Product;
};
