const express = require("express");

const router = express.Router();

const {
    askAssistant,
} = require("../controllers/aiController");

router.post("/", askAssistant);

module.exports = router;