const express = require("express");
const { updateText, createSample } = require("./sample");

const router = express.Router();


router.route("/updatetext/:Id").put(updateText);
router.route("/addtext").post(createSample);

module.exports = router
