// Wedding date: 19 December 2026. Change the time below if you know the exact muhurtham.
const weddingDate = new Date("December 19, 2026 09:00:00").getTime();

function updateCountdown() {
  const now = Date.now();
  const distance = weddingDate - now;
  const safeDistance = Math.max(distance, 0);
  const days = Math.floor(safeDistance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((safeDistance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((safeDistance / (1000 * 60)) % 60);
  const seconds = Math.floor((safeDistance / 1000) % 60);
  document.getElementById("days").textContent = String(days).padStart(3, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}
updateCountdown();
setInterval(updateCountdown, 1000);

// Collapse the mobile navigation after selecting a section.
document.querySelectorAll(".navbar .nav-link").forEach(link => {
  link.addEventListener("click", () => {
    const menu = document.getElementById("mainNav");
    if (menu.classList.contains("show")) bootstrap.Collapse.getOrCreateInstance(menu).hide();
  });
});

// Gallery lightbox: opens the selected full-size image in a new tab.
document.querySelectorAll(".gallery-item").forEach(item => {
  item.addEventListener("click", event => {
    event.preventDefault();
    window.open(item.href, "_blank", "noopener");
  });
});

// RSVP demo. Replace this with the couple/family WhatsApp number including country code.
const WHATSAPP_NUMBER = "91XXXXXXXXXX";
document.getElementById("rsvpForm").addEventListener("submit", event => {
  event.preventDefault();
  const name = document.getElementById("guestName").value.trim();
  const count = document.getElementById("guestCount").value;
  const attendance = document.querySelector('input[name="attendance"]:checked').value;
  const message = `Wedding RSVP - Bhavana & Surya Nithish%0AName: ${encodeURIComponent(name)}%0AGuests: ${encodeURIComponent(count)}%0AResponse: ${encodeURIComponent(attendance)}`;
  if (WHATSAPP_NUMBER.includes("X")) {
    alert("Please add the WhatsApp number in js/script.js before using the RSVP form.");
    return;
  }
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank", "noopener");
});

// Back-to-top button.
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => backToTop.classList.toggle("show", window.scrollY > 500));
backToTop.addEventListener("click", () => window.scrollTo({top: 0, behavior: "smooth"}));
