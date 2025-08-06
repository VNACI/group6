// Countdown Timer
const countdown = document.getElementById('countdown');
const eventDate = new Date("October 12, 2025 16:00:00").getTime();

const updateCountdown = () => {
  const now = new Date().getTime();
  const distance = eventDate - now;

  if (distance < 0) {
    countdown.innerHTML = "🎉 The event is happening now!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdown.innerHTML = `
    ⏳ <strong>${days}</strong> Days 
    <strong>${hours}</strong> Hours 
    <strong>${minutes}</strong> Minutes 
    <strong>${seconds}</strong> Seconds 
    left until the event!
  `;
};

setInterval(updateCountdown, 1000);

// RSVP Alert
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('rsvp-form');
  if (form) {
    form.addEventListener('submit', function (event) {
      const food = document.getElementById('food').value;
      const drink = document.getElementById('drink').value;
      alert(`🎉 Thanks for RSVPing!\nYou selected: ${food} with ${drink}.`);
    });
  }

  // Mobile Menu Toggle
  const menuBtn = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');

  if (menuBtn && nav) {
    menuBtn.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
  }
});