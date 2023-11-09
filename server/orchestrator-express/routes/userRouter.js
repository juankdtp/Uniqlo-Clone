const router = require("express").Router();
const Controller = require("../controllers/controller");

router.get("/", Controller.getAllUser);
router.post("/", Controller.addUser);
router.get("/:id", Controller.getUserById);
router.delete("/:id", Controller.deleteUser);

module.exports = router;
