const express = require("express");
const router = express.Router();
const userController = require("../controllers/usersControl");

router.get("/", userController.getAll);
router.get("/:id", userController.getById);
router.post("/", userController.insert);
router.put("/:id", userController.edit);
router.delete("/:id", userController.delete);

module.exports = router;
