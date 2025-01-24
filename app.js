


let menu = document.querySelector(".menu-btn");
let menuItems = document.querySelector(".menu-ul");
let isMenuOpen = false;
menu.addEventListener("click", () => {
  isMenuOpen = !isMenuOpen; 
  if (isMenuOpen) {
    menu.src = "./images/close.png"; 
    menuItems.style.display = "block"; 
    menuItems.classList.remove("anim-updside1")
    menuItems.classList.add("anim-updside0")
  } 
  else {
    menuItems.style.display = "none"; 
    menu.src = "./images/menu.png"; 
    menuItems.classList.remove("anim-updside0")
    menuItems.classList.add("anim-updside1")
    
    
  }
});




var countDownDate = new Date("Feb 15, 2025 15:37:25").getTime();

var x = setInterval(function() {

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

window.addEventListener('load', function(){
  preloader.style.display = 'none';
});

			
window.addEventListener('load', function(){
			document.getElementById('preloader').style.display="block";
	
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



