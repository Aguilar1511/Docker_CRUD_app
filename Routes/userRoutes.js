
var express = require ("express")

var authController = require ("../controller/authController")

var router = express.Router();

router.post("/signup", authController.signup);
router.post("/login", authController.login);

module.exports = router
