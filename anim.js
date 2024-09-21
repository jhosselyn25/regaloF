// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Él la estaba esperando", time: 15.2, duration: 4 },
  { text: "Con una flor amarilla", time: 18, duration: 5},
  { text: "Ella lo estaba soñando", time: 24.8, duration: 2 },
  { text: "Con la luz en su pupila", time: 25.2, duration: 5 },
  { text: "Y el amarillo del Sol", time: 32, duration: 3 },
  { text: "Iluminaba la esquina", time: 33, duration: 5 },
  { text: "Lo sentía tan cercano", time: 40, duration: 3},
  { text: "Lo sentía desde niña", time: 42, duration: 5 },
  { text: "Ella sabía que él sabía", time: 46, duration: 4 },
  { text: "Que algún día pasaría", time: 48, duration: 4 },
  { text: "Que vendría a buscarla", time: 50, duration: 4 },
  { text: "Con sus flores amarillas", time: 52.7, duration: 6.5 },
  { text: "No te apures, no detengas", time: 57.2, duration: 4.6 },
  { text: "El instante del encuentro", time: 60, duration: 4 },
  { text: "Está dicho que es un hecho", time: 62, duration: 4 },
  { text: "No la pierdas, no hay derecho", time: 64, duration: 5 },
  { text: "Hey!!!", time: 72, duration: 5 },
  { text: "Como amiga quisiera regalarte estas flores", time: 75, duration: 6 },
  { text: "Que aunque no son reales", time: 80, duration: 5 },
  { text: "son hechas con todo mi corazon", time: 85, duration: 5 },
  { text: "No queria que seas espectadora 😄😅", time: 90, duration: 5 },
  { text: "Asi que ahi tienes tus flores amarillas", time: 94, duration: 5 },
  { text: "Te quiere", time: 99, duration: 5 },
  { text: "Tu otra emoción", time: 105, duration: 5 },

];

// Modifica la función updateLyrics
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + line.duration
  );

  if (currentLine) {
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);
    
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Manejo de desvanecimiento para el texto
    lyrics.style.opacity = Math.max(0, lyrics.style.opacity - 0.1);
    if (lyrics.style.opacity <= 0) {
      lyrics.innerHTML = ""; // Limpia el texto solo si está completamente desvanecido
    }
  }
}

function animate() {
  updateLyrics();
  requestAnimationFrame(animate);
}

// Comienza la animación
animate();
