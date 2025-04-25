//Generate Excel Files
const ExcelJS = require("exceljs");

const workbook = new ExcelJS.Workbook();
const sheet = workbook.addWorksheet("Users");

sheet.addRow(["Name", "Email"]);
sheet.addRow(["Mitesh", "mitesh@example.com"]);

workbook.xlsx
  .writeFile("users.xlsx")
  .then(() => console.log("Excel file created!"));
