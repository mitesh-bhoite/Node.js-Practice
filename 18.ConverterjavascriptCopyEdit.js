//Markdown to HTML Converter
const fs = require("fs");
const marked = require("marked");

fs.readFile("README.md", "utf8", (err, data) => {
  if (err) console.error(err);
  else fs.writeFileSync("output.html", marked(data));
});
