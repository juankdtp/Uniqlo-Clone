const router = require("express").Router();
const Controller = require("../controllers/controller");

router.post("/", Controller.addProduct);
router.get("/", Controller.getAllProduct);
router.get("/:id", Controller.getProductById);
router.put("/:id", Controller.updateProduct);
router.delete("/:id", Controller.deleteProduct);

module.exports = router;
