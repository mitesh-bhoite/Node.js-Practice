//Password Strength Checker
const readline = require("readline");
const zxcvbn = require("zxcvbn");
const rl = readline.createInterface({
  input: process.stdin,
});
