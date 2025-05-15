//Mini URL Status Checker
const axios = require("axios");
const urls = ["https://google.com", "https://github.com"];
urls.forEach(async (url) => {
    try{
        const res = await axios.get(url);
        console.log(`${url} - ${res.status}`);
    }
});
