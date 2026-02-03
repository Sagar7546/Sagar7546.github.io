window.addEventListener("load", function () {

  console.log("JS Loaded ✅");

  /* ================= TYPING ANIMATION ================= */
  const roles = [
    "Cybersecurity Engineer",
    "Network Specialist",
    "Ethical Hacking Enthusiast"
  ];

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

  typeEffect();

  /* ================= SCROLL REVEAL ================= */
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("show");
    });
  }, { threshold: 0.2 });

  document.querySelectorAll(".hidden").forEach(el => observer.observe(el));

  /* ================= SMOOTH SCROLL ================= */
  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href"))
        .scrollIntoView({ behavior: "smooth" });
    });
  });

  /* ================= MODAL CONTACT FORM ================= */
  const modal = document.getElementById("contactModal");
  const openBtns = document.querySelectorAll("#openContact, #openContactHero");
  const closeBtn = document.querySelector(".close");

  openBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      modal.style.display = "flex";
    });
  });

  closeBtn.addEventListener("click", () => modal.style.display = "none");

  window.addEventListener("click", e => {
    if (e.target === modal) modal.style.display = "none";
  });

  /* ================= EMAILJS SEND ================= */
  emailjs.init("kzZPoxfKpA96FFOxP");

  document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_1b5181c", "template_ot97div", this)
      .then(() => {
        document.getElementById("formContainer").style.display = "none";
        document.getElementById("successMessage").classList.remove("hidden");
      })
      .catch(error => {
        console.error("EmailJS Error:", error);
        alert("Failed to send message. Please try again.");
      });
  });

  /* ================= PARTICLES BACKGROUND ================= */
  tsParticles.load("tsparticles", {
    particles: {
      number: { value: 70 },
      color: { value: "#00ffff" },
      links: { enable: true, color: "#00ffff", opacity: 0.2 },
      move: { enable: true, speed: 1 },
      size: { value: 2 }
    }
  });

});
