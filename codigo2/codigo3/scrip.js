const canvas = document.getElementById("cartaCanvas");
const ctx = canvas.getContext("2d");
const papel3d = document.getElementById("papel3d");
const papelMsg = document.getElementById("papelMsg");
const closeBtn = document.getElementById("closeBtn");
const subtitle = document.getElementById("subtitle");
const bgFade = document.getElementById("bgFade");

const openSound = document.getElementById("openSound");
const closeSound = document.getElementById("closeSound");
const bgMusic = document.getElementById("bgMusic");

let open = false;

// ✨ Carta cerrada morada
function drawCarta() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Cuerpo blanco
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(50, 80, 300, 150);

  // Borde morado
  ctx.strokeStyle = "#b37bff";
  ctx.lineWidth = 3;
  ctx.strokeRect(50, 80, 300, 150);

  // Tapa superior morada pastel
  ctx.fillStyle = "#d7b3ff";
  ctx.beginPath();
  ctx.moveTo(50, 80);
  ctx.lineTo(200, 180);
  ctx.lineTo(350, 80);
  ctx.closePath();
  ctx.fill();
}
drawCarta();

// Texto de la carta
let mensaje = `Hola 💜,

Hoy no escribo solo palabras,
escribo lo que siento por ti,
lo que el tiempo no ha borrado
y lo que siempre vivirá en mí. 💕

Fuiste luz en mis días,
calma en medio del ruido,
una sonrisa que guardo
como un recuerdo querido. 🌷

Tu forma de ser, tu mirada,
tu manera de pensar,
son cosas que en silencio
jamás podré olvidar. ✨

Tal vez no fue nuestro momento,
tal vez no era el camino,
pero agradezco al destino
por haberte puesto en mi destino. 💖

Hoy te dejo ir sin tristeza,
con cariño y con verdad,
porque quererte fue bonito,
aunque no fuera para siempre… en esta realidad.

No es un adiós definitivo,
es un hasta luego sincero,
porque en alguna parte del tiempo,
siempre te voy a querer. 🌷

Con cariño, `;


// Máquina de escribir
function escribirTexto(texto, elemento, velocidad = 50) {
  elemento.innerHTML = "";
  let i = 0;
  const intervalo = setInterval(() => {
    elemento.innerHTML += texto[i];
    i++;
    if (i >= texto.length) clearInterval(intervalo);
  }, velocidad);
}

// Corazones morados flotando
function crearCorazon() {
  const corazon = document.createElement("div");
  corazon.classList.add("corazon");
  corazon.innerHTML = "💜";
  corazon.style.left = Math.random() * 100 + "vw";
  corazon.style.bottom = "0px";
  document.body.appendChild(corazon);
  setTimeout(() => corazon.remove(), 4000);
}


// Abrir la carta
canvas.addEventListener("click", () => {
  if (!open) {
    open = true;

    gsap.to(canvas, { y: -80, opacity: 0, duration: 1 });

    setTimeout(() => {
      papel3d.classList.add("visible");
      escribirTexto(mensaje, papelMsg, 45);

      bgFade.classList.add("bg-fade-dark");
      closeBtn.classList.add("visible");
      subtitle.style.opacity = 0;

      openSound.play();
      bgMusic.play();

      setInterval(crearCorazon, 400);

    }, 800);
  }
});

// Cerrar carta
closeBtn.addEventListener("click", () => {
  open = false;

  papel3d.classList.remove("visible");
  bgFade.classList.remove("bg-fade-dark");
  closeBtn.classList.remove("visible");

  gsap.to(canvas, { y: 0, opacity: 1, duration: 1 });

  subtitle.style.opacity = 1;

  closeSound.play();
  bgMusic.pause();
});
