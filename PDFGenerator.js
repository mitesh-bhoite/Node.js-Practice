//PDF mGenerator
const pdf = require("pdfkit");
const fs = require("fs");

const doc = new pdf();
doc.pipe(fs.createWriteStream("output.pdf"));
doc.text("Hello, this is a test PDF!", 100, 100);
doc.end();
