// Existing script for navbar and scrolling
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document.querySelector(`header nav a[href*=${id}]`).classList.add("active");
      });
    }
  });
  if (navbar.classList.contains("active")) {
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
  }
};

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// Handle form submission
document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission

  // Collect form data
  const fullName = document.getElementById("full-name").value;
  const email = document.getElementById("email").value;
  const phoneNumber = document.getElementById("phone-number").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  // Send email using EmailJS
  emailjs.send("service_jab46nt", "template_e42mq63", {
    from_name: fullName,  // Maps to {{from_name}} in your template
    message: message,     // Maps to {{message}} in your template
    reply_to: email       // Maps to {{reply_to}} in your template
});
    .then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message sent successfully!");
      },
      function (error) {
        console.log("FAILED...", error);
        alert("Failed to send message. Please try again later.");
      }
    );
});
