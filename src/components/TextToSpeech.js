// gtts modülünü projeye dahil edin
const gTTS = require("gtts");
const SoundPlay = require("./SoundPlay.js");
// Dönüştürülecek metni belirleyin
let speech = "test sesi";

// gTTS ile yeni bir instance oluşturun ve Türkçe dilini belirtin
const gtts = new gTTS(speech, "tr");

// Dönüşümü 'Voice.mp3' adlı dosyaya kaydedin
gtts.save("./src/sound/voice.mp3", function (err, result) {
  if (err) {
    // Hata oluştuysa hatayı konsola yazdırın
    throw new Error(err);
  }

  SoundPlay("./src/sound/voice.mp3");
});
