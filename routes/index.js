var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Vehicle Registration" });
});
router.get("/register", function(req, res, next) {
  res.render("registerv", { title: "Register | Vehicle Registration" });
});

module.exports = router;
