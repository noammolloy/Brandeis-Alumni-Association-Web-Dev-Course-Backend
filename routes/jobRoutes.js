const router = require("express").Router();
const jobsController = require("../controllers/jobsController");

router.get("/", jobsController.index, jobsController.indexView);
// Create
router.get("/new", jobsController.new);
router.post(
  "/create",
  jobsController.validate,
  jobsController.create,
  jobsController.redirectView
);
// Read
router.get("/:id", jobsController.show, jobsController.showView);
// Update
router.get("/:id/edit", jobsController.edit);
router.put(
  "/:id/update",
  jobsController.validate,
  jobsController.update,
  jobsController.redirectView
);
// Delete
router.delete(
  "/:id/delete",
  jobsController.delete,
  jobsController.redirectView
);

module.exports = router;
