const router = require("express").Router();
const usersController = require("../controllers/usersController");

// Logging in
router.get("/login", usersController.login);
router.post("/login", usersController.authenticate);
router.get("/logout", usersController.logout, usersController.redirectView);

router.get("/", usersController.index, usersController.indexView);
// Create
router.get("/new", usersController.new);
router.post(
  "/create",
  usersController.validate,
  usersController.create,
  usersController.redirectView
);
// Read
router.get("/:id", usersController.show, usersController.showView);
// Update
router.get("/:id/edit", usersController.edit);
router.put("/:id/update", usersController.update, usersController.redirectView);
// Delete
router.delete(
  "/:id/delete",
  usersController.delete,
  usersController.redirectView
);

module.exports = router;
