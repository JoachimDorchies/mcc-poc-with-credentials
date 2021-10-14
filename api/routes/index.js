var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.json({
    service: "api",
    headers: req.headers,
    rawHeaders: req.rawHeaders,
    cookies: req.cookies,
    signedCookies: req.signedCookies,
  });
});

module.exports = router;
