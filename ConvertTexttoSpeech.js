//Convert Text to Speech and Save as Audio
const say = require("say");

say.export("Hello, this is a test.", "voice.mp3", (err) => {
  //
  if (err) return console.error(err);
  console.log("Audio saved!");
});
