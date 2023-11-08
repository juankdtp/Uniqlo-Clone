const router = require("express").Router();
const Controller = require("../controllers/controller");

router.get("/", Controller.fetchAllProduct);
router.get("/:id", Controller.fetchProductDetail);

module.exports = router;
