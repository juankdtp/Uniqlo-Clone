const router = require("express").Router();
const Controller = require("../controllers/controller");

router.get("/", Controller.fetchAllProduct);
router.get("/image/:id", Controller.fetchProductImage);
router.post("/", Controller.addProduct);
router.get("/:id", Controller.fetchProductDetail);
router.delete("/:id", Controller.deleteProduct);
router.put("/:id", Controller.editProduct);

module.exports = router;
