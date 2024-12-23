const router = require("express").Router();
const homeController = require("../controllers/homeController");

router.get("/", homeController.respondHome);
router.get("/about", homeController.showAbout);
router.get("/contact", homeController.showContact);
router.post("/contact", homeController.showThanks);
router.get("/chat", homeController.chat);

module.exports = router;