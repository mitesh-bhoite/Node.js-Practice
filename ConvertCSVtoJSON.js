//Convert CSV to JSON ...
const csvtojson = require("csvtojson");
const fs = require("fs");

csvtojson()
  .fromFile("data.csv")
  .then((json) => {
    fs.writeFileSync("output.json", JSON.stringify(json, null, 2));
  });
