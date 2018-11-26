var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("admin", { title: "Admin | Vehicle Registration" });
});

router.get("/login", function(req, res, next) {
  res.render("adminLogin", { title: "Admin Login | Vehicle Registration" });
});
router.get("/new", function(req, res, next) {
  res.render("newUser", { title: "New User | Vehicle Registration" });
});

module.exports = router;
