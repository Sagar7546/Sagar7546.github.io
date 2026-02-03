// Scroll reveal
const sections = document.querySelectorAll('.glass');
window.addEventListener('scroll', () => {
  const trigger = window.innerHeight * 0.85;
  sections.forEach(sec => {
    if (sec.getBoundingClientRect().top < trigger) {
      sec.style.opacity = 1;
      sec.style.transform = "translateY(0)";
    }
  });
});
window.addEventListener('load', () => {
  sections.forEach(sec => {
    sec.style.opacity = 0;
    sec.style.transform = "translateY(40px)";
    sec.style.transition = "all 0.6s ease";
  });
});

// Progress bars
window.addEventListener('scroll', () => {
  document.querySelectorAll('.progress').forEach(bar => {
    if (bar.getBoundingClientRect().top < window.innerHeight) {
      bar.style.width = bar.dataset.width;
    }
  });
});

// Particles
tsParticles.load("tsparticles", {
  particles: {
    number: { value: 80 },
    color: { value: "#00ffff" },
    links: { enable: true, color: "#00ffff", opacity: 0.2 },
    move: { enable: true, speed: 1 },
    size: { value: 2 }
  }
});

// EmailJS
emailjs.init("YOUR_PUBLIC_KEY");

document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
    .then(() => {
      document.getElementById("form-status").innerText = "Message sent successfully!";
      this.reset();
    }, () => {
      document.getElementById("form-status").innerText = "Failed to send message.";
    });
});
