//require modules
const router = require("express").Router();

const path = require("path");

// get routes
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});
//export modules
module.exports = router;
