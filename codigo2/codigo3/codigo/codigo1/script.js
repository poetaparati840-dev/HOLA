onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};window.addEventListener("DOMContentLoaded", () => {

  const btn = document.getElementById("btnCarta");
  const modal = document.getElementById("carta");
  const cerrar = document.querySelector(".cerrar");

  // Abrir carta
  btn.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  // Cerrar con la X
  cerrar.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Cerrar haciendo clic fuera
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
const audio = document.getElementById('bg-audio');
  audio.volume = 0.3;

  document.body.addEventListener('click', () => {
    audio.play();
  }, { once: true });
});

