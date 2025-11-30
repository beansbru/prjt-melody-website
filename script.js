// Project Melody Hub - UI Enhancements
document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;

  // --- THEME HANDLING (Neon Synthwave) ---
  const THEME_KEY = "melody-theme";
  const neonClass = "theme-neon";
  const toggleBtn = document.querySelector(".theme-toggle");

  const loadTheme = () => {
    if (localStorage.getItem(THEME_KEY) === "neon") {
      body.classList.add(neonClass);
      if (toggleBtn) {
        toggleBtn.classList.add("active");
        toggleBtn.setAttribute("aria-pressed", "true");
      }
    }
  };

  const setTheme = (neon) => {
    if (neon) {
      body.classList.add(neonClass);
      toggleBtn?.classList.add("active");
      toggleBtn?.setAttribute("aria-pressed", "true");
      localStorage.setItem(THEME_KEY, "neon");
    } else {
      body.classList.remove(neonClass);
      toggleBtn?.classList.remove("active");
      toggleBtn?.setAttribute("aria-pressed", "false");
      localStorage.setItem(THEME_KEY, "default");
    }
  };

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const isActive = body.classList.contains(neonClass);
      setTheme(!isActive);
    });

    toggleBtn.addEventListener("keydown", (e) => {
      if (e.key === " " || e.key === "Spacebar") {
        e.preventDefault();
        toggleBtn.click();
      }
    });
  }

  loadTheme();

  // --- MOBILE NAV ---
  const navToggle = document.querySelector(".nav-toggle");
  const navList = document.querySelector(".nav-list");

  if (navToggle && navList) {
    navToggle.addEventListener("click", () => {
      navList.style.display =
        navList.style.display === "flex" ? "none" : "flex";
    });
  }

  // --- SMOOTH SCROLL ---
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const target = document.querySelector(link.getAttribute("href"));
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });

      if (navList && window.innerWidth <= 900) {
        navList.style.display = "none";
      }
    });
  });

  // --- VISUAL PLAY ANIMATION ---
  const playBtns = document.querySelectorAll(".play-btn");
  const record = document.querySelector(".record");

  playBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (record) {
        record.classList.add("play-anim");
        setTimeout(() => record.classList.remove("play-anim"), 4000);
      }

      const original = btn.innerText;
      btn.innerText = "Playing…";
      btn.disabled = true;

      setTimeout(() => {
        btn.innerText = original;
        btn.disabled = false;
      }, 4000);
    });
  });

  // --- CONTACT FORM VALIDATION ---
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = form.querySelector("#name").value.trim();
      const email = form.querySelector("#email").value.trim();
      const message = form.querySelector("#message").value.trim();

      if (!name || !email || !message) {
        alert("Please complete all fields before sending.");
        return;
      }

      alert(`Thanks, ${name}! Your message was sent (simulated).`);
      form.reset();
    });
  }

  // --- DISCORD BUTTON ---
  const joinBtn = document.getElementById("joinDiscord");
  if (joinBtn) {
    joinBtn.addEventListener("click", (e) => {
      const url = joinBtn.getAttribute("href");
      if (!url) return;

      e.preventDefault();
      window.open(url, "_blank", "noopener");
    });
  }
});
