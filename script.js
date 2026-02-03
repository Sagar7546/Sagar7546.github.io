// Cyber Particles Background
tsParticles.load("tsparticles", {
  particles: {
    number: { value: 70 },
    color: { value: "#00ffff" },
    links: { enable: true, color: "#00ffff", opacity: 0.2 },
    move: { enable: true, speed: 1 },
    size: { value: 2 }
  }
});

// EmailJS Setup
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
