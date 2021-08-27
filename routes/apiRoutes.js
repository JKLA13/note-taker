//require db, express
const noteSave = require("../db/db.json");
const router = require("express").Router();
const fs = require("fs");
const path = require("path");
const nid = require("nid");

//routes
// notes get
router.get("/notes", (req, res) => res.json(notes));

// post notes
router.post("/notes", (req, res) => {
  const notes = req.body;
  notes.id = nid();
  //json for notes pushed to db
  db.push(notes);
  console.log(notes, "Your note was added!");
  res.json(true);
});
//delete notes
router.delete("/notes/:id", (req, res) => {
  const deleteData = req.params.id;

  let i = db[i].id === deleteData ? (db.splice[i], 1) : res.end();
});

// class noteDb {
//   readNotes() {
//     fs.readFileSync("../db/db.json", "utf8");
//   }
//   writeNotes(notes) {
//     fs.writeFileSync("../db/db.json", JSON.stringify(notes));
//   }
//   getNotes() {
//     return this.readNotes().then((notes) => {});
//   }
// }

//export module
module.exports = router;
