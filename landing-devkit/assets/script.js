const menu = document.querySelector(".nav_menu"),
      toggleButton = document.querySelector(".toggle_btn"),
      closeButton = document.querySelector(".close_btn");

// SHOW MENU
toggleButton.addEventListener("click", () => {
  menu.classList.toggle("show");
});

// HIDE MENU
closeButton.addEventListener("click", () => {
  menu.classList.toggle("show");
});

// Animate on Scroll Initialize
AOS.init();

// GSAP Animations
// LOGO
gsap.from(".logo", {
  opacity: 0,
  y: -10,
  delay: 1,
  duration: 0.5,
});

// NAV-MENU
gsap.from(".nav_menu_list .nav_menu_item", {
  opacity: 0,
  y: -10,
  delay: 1.4,
  duration: 0.5,
  stagger: 0.3,
});

// TOGGLE BTN
gsap.from(".toggle_btn", {
  opacity: 0,
  y: -10,
  delay: 1.4,
  duration: 0.5,
});

// MAIN HEADING
gsap.from(".main-heading", {
  opacity: 0,
  y: 20,
  delay: 2.4,
  duration: 1,
});

// INFO TEXT
gsap.from(".info-text", {
  opacity: 0,
  y: 20,
  delay: 2.8,
  duration: 1,
});

// CTA BUTTONS
gsap.from(".btn_wrapper", {
  opacity: 0,
  y: 20,
  delay: 2.8,
  duration: 1,
});

// TEAM IMAGE
gsap.from(".team_img_wrapper img", {
  opacity: 0,
  y: 20,
  delay: 3,
  duration: 1,
});
