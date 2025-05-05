// Convert HTML to PDF
const pdf = require("html-pdf");
const html = "<h1>Hello Mitesh!</h1>";
pdf.create(html).toFile('hello.pdf', (err, res)