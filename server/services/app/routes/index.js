const router = require("express").Router();
const LoginController = require("../controllers/loginController");
const RegisterController = require("../controllers/registerController");
const productRoutes = require("./productRoutes");
const categoryRoutes = require("./categoryRoutes");
const authentication = require("../middleware/authentication");
const public = require("./public");

router.post("/login", LoginController.login);
router.use("/pub", public);

// router.use(authentication);
router.post("/register", RegisterController.register);

router.use("/product", productRoutes);
router.use("/category", categoryRoutes);

module.exports = router;
