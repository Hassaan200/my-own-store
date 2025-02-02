// function toggleSearch() {
//   const searchInput = document.querySelector('.search-input');
//   searchInput.style.display = "inline";
//   searchInput.classList.toggle('show');
//   searchInput.value = '';
// }
const searchInput = document.querySelector('.search-input'); 
const change = () => {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Search is not available in this demo",
  });
  searchInput.value = '';
}

let menu = document.querySelector(".menu-btn");
let menuItems = document.querySelector(".menu-ul");
let isMenuOpen = false;

menu.addEventListener("click", (event) => {
  event.stopPropagation(); // Prevent the click event from bubbling up to the body
  toggleMenu();
});

menuItems.addEventListener("click", (event) => {
  event.stopPropagation(); // Prevent clicks inside the menu from closing it
});

document.body.addEventListener("click", () => {
  if (isMenuOpen) {
    toggleMenu();
  }
});

function toggleMenu() {
  isMenuOpen = !isMenuOpen;
  if (isMenuOpen) {
    menu.src = "/HOME PAGE/images/close.png";
    searchInput.style.opacity = 1;
    menuItems.style.display = "block";
    menuItems.classList.remove("anim-updside1");
    menuItems.classList.add("anim-updside0");
  } else {
    menuItems.classList.remove("anim-updside0");
    menuItems.classList.add("anim-updside1");
    setTimeout(() => {
      menuItems.style.display = "none";
      searchInput.style.opacity = 0;
      menu.src = "/HOME PAGE/images/menu.png";
    }, 500);
  }
}




var countDownDate = new Date("Feb 15, 2025 15:37:25").getTime();

var x = setInterval(function () {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days1").innerHTML = days;
  document.getElementById("hours1").innerHTML = hours;
  document.getElementById("mins1").innerHTML = minutes;
  document.getElementById("sec1").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days1").innerHTML = "-";
    document.getElementById("hours1").innerHTML = "-";
    document.getElementById("mins1").innerHTML = "-";
    document.getElementById("sec1").innerHTML = "-";
  }
}, 1000);

console.log("hello")




var preloader = document.getElementById("preloader");

window.addEventListener('load', function () {
  preloader.style.display = 'none';
});


window.addEventListener('load', function () {
  document.getElementById('preloader').style.display = "block";

  const elements = document.querySelectorAll('.animate-on-scroll');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,

  });

  elements.forEach((element) => {
    observer.observe(element);
  });
});

var media1 = window.matchMedia("(max-width: 786px)");
var herobtn = document.querySelector(".hero-btn");
function myFunction(x) {
  if (x.matches) { // If media query matches
    herobtn.classList.remove("px-anim");
    herobtn.classList.add("anim-updside");

}
}
myFunction(media1);

// ahmed