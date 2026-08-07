/* ============================================
   CONFIGURAÇÕES RÁPIDAS DO SITE
   Quando vocês definirem os dados, altere aqui.
============================================ */
const CONFIG = {
  data: "A definir",
  horario: "A definir",
  endereco: "A definir",
  mostrarLinksLojas: true // troque para false se elas preferirem não mostrar links
};

document.getElementById("event-date").textContent = CONFIG.data;
document.getElementById("event-time").textContent = CONFIG.horario;
document.getElementById("event-address").textContent = CONFIG.endereco;

if (!CONFIG.mostrarLinksLojas) {
  document.getElementById("store-links").style.display = "none";
}

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
menuToggle.addEventListener("click", () => navLinks.classList.toggle("open"));

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});
