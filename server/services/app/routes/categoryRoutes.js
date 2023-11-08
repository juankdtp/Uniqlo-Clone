const router = require("express").Router();
const Controller = require("../controllers/controller");

router.get("/", Controller.fetchCategory);
router.post("/", Controller.addCategory);
router.delete("/:id", Controller.deleteCategory);

module.exports = router;
