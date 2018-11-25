var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
  res.render("registerv", { title: "Register | Vehicle Registration" });
});

module.exports = router;
