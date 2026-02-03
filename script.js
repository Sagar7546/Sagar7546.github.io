// ===== Typing Animation =====
const roles = ["Cybersecurity Engineer", "Network Specialist", "Ethical Hacking Enthusiast"];
let roleIndex = 0;
let charIndex = 0;
const typingElement = document.getElementById("typing");

function typeEffect() {
  if (charIndex < roles[roleIndex].length) {
    typingElement.textContent += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 80);
  } else {
    setTimeout(eraseEffect, 1500);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    typingElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 40);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeEffect, 200);
  }
}
document.addEventListener("DOMContentLoaded", typeEffect);

// ===== Scroll Reveal Animation =====
const hiddenElements = document.querySelectorAll(".hidden");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

hiddenElements.forEach(el => observer.observe(el));

// ===== Smooth Scroll on Click =====
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// ===== Particles Background =====
tsParticles.load("tsparticles", {
  particles: {
    number: { value: 70 },
    color: { value: "#00ffff" },
    links: { enable: true, color: "#00ffff", opacity: 0.2 },
    move: { enable: true, speed: 1 },
    size: { value: 2 }
  }
});

// ===== EmailJS =====
emailjs.init("kzZPoxfKpA96FFOxP");

document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  emailjs.sendForm("service_1b5181c", "template_ot97div", this)
    .then(() => {
      document.getElementById("form-status").innerText = "Message sent successfully!";
      this.reset();
    }, () => {
      document.getElementById("form-status").innerText = "Failed to send message.";
    });
});

