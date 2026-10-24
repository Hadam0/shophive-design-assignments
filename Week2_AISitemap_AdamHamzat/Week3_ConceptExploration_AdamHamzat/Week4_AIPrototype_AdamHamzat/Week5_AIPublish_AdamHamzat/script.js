// ShopHive · interactions

document.addEventListener("DOMContentLoaded", function () {
  // ---------- Mobile menu ----------
  var menuToggle = document.getElementById("menuToggle");
  var nav = document.getElementById("nav");

  function closeMenu() {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open menu");
  }

  menuToggle.addEventListener("click", function () {
    var isOpen = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  });

  // Close the menu after tapping a link, or when pressing Escape
  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeMenu();
  });

  // ---------- Flash sale countdown (phone mock) ----------
  var countdownEl = document.getElementById("countdown");
  var remaining = 2 * 3600 + 14 * 60 + 9; // 02:14:09, as in the design

  function pad(n) { return String(n).padStart(2, "0"); }

  function renderCountdown() {
    var h = Math.floor(remaining / 3600);
    var m = Math.floor((remaining % 3600) / 60);
    var s = remaining % 60;
    countdownEl.textContent = pad(h) + ":" + pad(m) + ":" + pad(s);
  }

  renderCountdown();
  setInterval(function () {
    remaining = remaining > 0 ? remaining - 1 : 2 * 3600 + 14 * 60 + 9; // loop for the demo
    renderCountdown();
  }, 1000);

  // ---------- Phone category chips ----------
  var chips = document.querySelectorAll("#chips .chip");
  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      chips.forEach(function (c) { c.classList.remove("active"); });
      chip.classList.add("active");
    });
  });

  // ---------- Waitlist form (demo only: nothing is stored or sent) ----------
  var form = document.getElementById("waitlistForm");
  var emailInput = document.getElementById("email");
  var msg = document.getElementById("formMsg");
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var value = emailInput.value.trim();

    if (!emailPattern.test(value)) {
      emailInput.classList.add("invalid");
      msg.className = "form-msg error";
      msg.textContent = "Please enter a valid email address.";
      emailInput.focus();
      return;
    }

    emailInput.classList.remove("invalid");
    msg.className = "form-msg ok";
    msg.textContent = "Thanks! You're on the list. (Demo only: nothing was saved.)";
    form.reset();
  });

  emailInput.addEventListener("input", function () {
    emailInput.classList.remove("invalid");
    msg.textContent = "";
    msg.className = "form-msg";
  });

  // ---------- Footer year ----------
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
});
