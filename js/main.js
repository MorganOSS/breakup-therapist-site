// The Breakup Therapist — shared site behavior

document.addEventListener("DOMContentLoaded", function () {
  // Mobile nav toggle
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Contact form: no backend yet, so build a pre-filled mailto as a working
  // fallback until this is wired up to a real submission endpoint.
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var data = new FormData(form);
      var name = data.get("name") || "";
      var email = data.get("email") || "";
      var phone = data.get("phone") || "";
      var format = data.get("format") || "";
      var insurance = data.get("insurance") || "";
      var message = data.get("message") || "";

      var bodyLines = [
        "Name: " + name,
        "Email: " + email,
        "Phone: " + phone,
        "Preferred format: " + format,
        "Insurance: " + insurance,
        "",
        "What brings you in:",
        message
      ];

      var subject = encodeURIComponent("New consultation request — " + name);
      var body = encodeURIComponent(bodyLines.join("\n"));
      window.location.href = "mailto:roseandrecousenling@gmail.com?subject=" + subject + "&body=" + body;
    });
  }
});
