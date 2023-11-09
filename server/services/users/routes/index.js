const router = require("express").Router();
const Controller = require("../controllers/controller");

router.get("/", Controller.getAllUser);
router.post("/", Controller.createUser);
router.get("/:id", Controller.getUserById);
router.delete("/:id", Controller.deleteUserById);

module.exports = router;
