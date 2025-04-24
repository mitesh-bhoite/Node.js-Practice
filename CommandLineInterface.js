//Create a Note App with Command Line Interface
const fs = require("fs");
const yargs = require("yargs");

yargs
  .command({
    command: "add",
    describe: "Add a new note",
    builder: {
      title: { type: "string", demandOption: true },
      body: { type: "string", demandOption: true },
    },
    handler(argv) {},
  })
  .parse();
