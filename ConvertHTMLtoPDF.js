// Convert HTML to PDF
const pdf = require("html-pdf");
const html = "<h1>Hello Mitesh!</h1>";
pdf.create(html).toFile("hello.pdf", (err, res) => {
  if (err) return console.log(err);
  console.log("PDF created:", res.filename);
});
