//Basic AI Chatbot
const axios = require("axios");
const API_KEY = "YOUR_OPENAI_API_KEY";
const prompt = "What is Node.js?";

axios
  .post(
    "https://api.openai.com/v1/completions",
    {
      model: "text-davinci-003",
      prompt,
      max_tokens: 100,
    },
    {
      headers: { Authorization: `Bearer ${API_KEY}` },
    }
  )
  .then((response) => console.log(response.data.choices[0].text.trim()))
  .catch((error) => console.error(error));
