//require db, express
const noteSave = require("../db/db.json");
const router = require("express").Router();
const fs = require("fs");
const path = require("path");
const nid = require("nid");

//routes
// notes get
router.get("/notes", (req, res) => res.json(noteSave));

// post notes
router.post("/notes", (req, res) => {
  const notes = req.body;
  notes.id = nid();
  //json for notes pushed to db
  noteSave.push(notes);
  console.log(notes, "Your note was added!");
  res.json(true);
  // console.log(noteSave);
});
//delete notes
router.delete("/notes/:id", (req, res) => {
  const deleteData = req.params.id;

  for (let i = 0; i < noteSave.length; i++) {
    const currentNote = noteSave[i].id;
    if (currentNote === deleteData) {
      noteSave.splice(i, 1);
    }
    res.json(noteSave);
  }
});

//create class for databas notes/fs read & write code
class noteDb {
  readNotes() {
    fs.readFileSync("../db/db.json", "utf8");
  }
  writeNotes(notes) {
    fs.writeFileSync("../db/db.json", JSON.stringify(notes));
  }
  getNotes() {
    return this.readNotes().then((notes) => {});
  }

  appendNote(notes) {
    const { title, text } = notes;

    const addId = { title, text, id: nid() };

    return this.getNotes()
      .then((notes) => [...notes, addId])
      .then((newNotes) => this.writeNotes(newNotes))
      .then(() => addId);
  }

  deleteNote(id) {
    return this.getNotes()
      .then((notes) => notes.filter((notes) => notes.id !== id))
      .then((filterNote) => this.writeNotes(filterNote));
  }
}

//export module
module.exports = router;
