const sound = require("sound-play");

const path = require("path");

async function SoundPlay(soundPath) {
  try {
    console.log("Çalışıyor olmamm gerekli");
    const filePath = await path.join(__dirname, soundPath);
    await sound.play(
      "c:UsersErenDesktop\\nodejs text-to-speeksrccomponentssrcsound\\voice.mp3"
    );
    await console.log(filePath);
  } catch (e) {
    console.log("Error Mesage -------------", e.message);
  }
}

module.exports = SoundPlay;
