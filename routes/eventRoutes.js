const router = require("express").Router();
const eventsController = require("../controllers/eventsController");

router.get("/", eventsController.index, eventsController.indexView);
// Create
router.get("/new", eventsController.new);
router.post(
  "/create",
  eventsController.validate,
  eventsController.create,
  eventsController.redirectView
);
// Read
router.get("/:id", eventsController.show, eventsController.showView);
router.get("/:id/:userID/:operation", eventsController.updateAttendee, eventsController.redirectView)
// Update
router.get("/:id/edit", eventsController.edit);
router.put(
  "/:id/update",
  eventsController.validate,
  eventsController.update,
  eventsController.redirectView
);
// Delete
router.delete(
  "/:id/delete",
  eventsController.delete,
  eventsController.redirectView
);

module.exports = router;
