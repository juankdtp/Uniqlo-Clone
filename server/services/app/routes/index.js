const router = require("express").Router();
const productRoutes = require("./productRoutes");
const categoryRoutes = require("./categoryRoutes");
const public = require("./public");

router.use("/pub", public);

router.use("/product", productRoutes);
router.use("/category", categoryRoutes);

module.exports = router;
