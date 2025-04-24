//Create a Note App with Command Line Interface
const fs = require("fs");
const yargs = require("yargs");

yargs
  .command({
    command: "add",
    describe: "Add a new note",
    builder: {},
    handler(argv) {
      const note = { title: argv.title, body: argv.body };
      const notes = JSON.parse(fs.readFileSync("notes.json") || "[]");
      notes.push(note);
      fs.writeFileSync("notes.json", JSON.stringify(notes));
      console.log("Note added!");
    },
  })
  .parse();
