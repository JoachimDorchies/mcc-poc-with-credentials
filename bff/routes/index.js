var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.set("Authorization", "Bearer myAuthorizationBearer");
  res.cookie("cookie", "accessToken", {
    maxAge: 900000,
    httpOnly: true,
    sameSite: "none",
    secure: true,
  });
  res.send({ service: "bff" });
});

module.exports = router;
