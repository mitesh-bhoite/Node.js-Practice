//Basic AI Chatbot
const axios = require("axios");
const API_KEY = "YOUR_OPENAI_API_KEY";
const prompt = "What is Node.js?";

axios
  .post()
  .then((response) => console.log(response.data.choices[0].text.trim()))
  .catch((error) => console.error(error));
