// Countdown Timer
function updateCountdown() {
  const eventDate = new Date('2025-10-12T16:00:00');
  const now = new Date();
  const diff = eventDate - now;
  const countdown = document.getElementById('countdown');
  if (diff > 0) {
    const days = Math.floor(diff / (1000*60*60*24));
    const hours = Math.floor((diff/(1000*60*60))%24);
    const mins = Math.floor((diff/(1000*60))%60);
    const secs = Math.floor((diff/1000)%60);
    countdown.innerHTML = `<div>
      <span><strong>${days}</strong> Days</span>
      <span><strong>${hours}</strong> Hours</span>
      <span><strong>${mins}</strong> Minutes</span>
      <span><strong>${secs}</strong> Seconds</span>
    </div>`;
  } else {
    countdown.innerHTML = "<strong>Event Started!</strong>";
  }
}
setInterval(updateCountdown, 1000);
updateCountdown();

// RSVP Count & Confirmation Modal
let rsvpTotal = localStorage.getItem('rsvpTotal') || 0;
document.getElementById('rsvp-total').textContent = rsvpTotal;

document.getElementById('rsvp-form').addEventListener('submit', function(e){
  e.preventDefault();
  // Optionally: Send with AJAX here, or let Formspree handle
  document.getElementById('rsvp-confirmation').style.display = 'block';
  rsvpTotal++;
  localStorage.setItem('rsvpTotal', rsvpTotal);
  document.getElementById('rsvp-total').textContent = rsvpTotal;
  this.reset();
});

// Collapsible Sidebar Sections
document.querySelectorAll('.sidebar h3').forEach(header => {
  header.addEventListener('click', function() {
    const nextUl = this.nextElementSibling;
    if (nextUl.classList.contains('open')) {
      nextUl.classList.remove('open');
    } else {
      document.querySelectorAll('.sidebar ul').forEach(ul => ul.classList.remove('open'));
      nextUl.classList.add('open');
    }
  });
  header.addEventListener('keypress', function(e){
    if (e.key === 'Enter' || e.key === ' ') this.click();
  });
});

// Social Sharing: Copy Link
function copyEventLink() {
  navigator.clipboard.writeText(window.location.href).then(() => {
    const copySuccess = document.getElementById('copy-success');
    copySuccess.style.display = 'block';
    setTimeout(() => copySuccess.style.display = 'none', 2000);
  });
}

// Gallery Lightbox
document.querySelectorAll('.gallery-img').forEach(img => {
  img.addEventListener('click', function() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = this.src;
    lightbox.style.display = 'flex';
  });
});
document.querySelector('.lightbox .close').addEventListener('click', function() {
  document.getElementById('lightbox').style.display = 'none';
});
document.getElementById('lightbox').addEventListener('click', function(e){
  if (e.target === this) this.style.display = 'none';
});
