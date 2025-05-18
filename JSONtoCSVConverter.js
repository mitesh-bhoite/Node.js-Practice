//JSON to CSV Converter
const fs = require("fs");
const { Parser } = require("json2csv");
const data = [
  { name: "Mitesh", age: 21 },
  { name: "Alice", age: 22 },
];
const parser = new Parser();
const csv = parser.parse(data);
fs.writeFileSync("data.csv", csv);
