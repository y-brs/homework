const toggle = document.querySelector("#mobile_menu"),
      menu = document.querySelector("#menu"),
      menuBar = document.querySelector("#menu_bar"),
      closeMenu = document.querySelector("#close_menu");

toggle.addEventListener("click", function() {
  menu.classList.toggle("hidden");
  menuBar.classList.toggle("hidden");
  closeMenu.classList.toggle("hidden");
});


// Details
gsap.from(".details", {opacity:0, duration:1.2, delay:0.9, x:30});

// image
gsap.from(".img_", {opacity:0, duration:1.5, delay:1, x:60});

// info
gsap.from(".info", {opacity:0, duration:2, delay:1.5});

// ps5-text
gsap.from(".ps5-text", {opacity:0, duration:2.3, delay:2, y:25, ease:'expo.out', stagger: .2});

// nav-logo
gsap.from(".nav_logo", {opacity:0, duration:2.5, delay:2.6, y:20, ease:'expo.out'});

// nav items
gsap.from(".nav_items", {opacity:0, duration:2.5, delay:2.7, y:20, ease:'expo.out', stagger: .1});

// store-locator
gsap.from(".store_locator", {opacity:0, duration:2.5, delay:2.8, y:20, ease:'expo.out', stagger: .1});

// mobile menu
gsap.from(".mobile_menu", {opacity:0, duration:2.4, delay:2.5, y:25, ease:'expo.out', stagger: .1});

// social
gsap.from(".social", {opacity:0, duration:2.9, delay:3, y:25, ease:'expo.out', stagger: .1});
