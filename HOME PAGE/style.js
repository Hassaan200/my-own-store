import {
  auth,
  getAuth,
  createUserWithEmailAndPassword,
  doc,
  setDoc,
  getDoc,
  db,
  sendEmailVerification,
  signInWithEmailAndPassword,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  updateDoc,
  sendPasswordResetEmail,
  reauthenticateWithCredential, 
  updatePassword,
  EmailAuthProvider
} from "./firebase.js";




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
const uid = localStorage.getItem("uid");

let menu = document.querySelector(".menu-btn");
let menuItems = document.querySelector(".menu-ul");
let isMenuOpen = false;
const signIn = document.getElementById("signIn");
const logIn = document.getElementById("nav-item1");
console.log(signIn)

const route = ["/AUTHENTICATION  PAGE/signup.html", "/login.html" ];
  const currentRoute = window.location.pathname;

if (uid && signIn.textContent.trim() === "Sign In") {
  signIn.innerText = "Sign Out";
  logIn.innerHTML = "Log out";
  
}
else if(route.includes(currentRoute) && uid && signIn.textContent.trim() === "Sign In"){
  signIn.innerText = "Sign Out";
  logIn.innerHTML = "Log out";
  window.location.href = "/index.html";
}
 if(logIn.innerHTML === "Log out"){
  logIn.addEventListener("click", () => {
  localStorage.clear();
  window.location.href = "/login.html";
  })
}
if(signIn.textContent.trim() === "Sign Out"){
  signIn.addEventListener("click", () => {
  localStorage.clear();
  window.location.href = "/login.html";
  })
}

console.log(signIn.textContent.trim())

// console.log(logIn.innerHTML)

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




var countDownDate = new Date("july 15, 2025 15:37:25").getTime();

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

document.addEventListener('DOMContentLoaded', () => {
  const profileButton = document.getElementById('profile-button');
  const profileMenu = document.getElementById('profile-menu');

  if (!profileButton || !profileMenu) return;

  // Toggle menu on profile button click
  profileButton.addEventListener('click', (e) => {
    e.stopPropagation();
    profileMenu.classList.toggle('hidden');
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!profileMenu.contains(e.target) && !profileButton.contains(e.target)) {
      profileMenu.classList.add('hidden');
    }
  });
});

//  here is the add to card work
// Update the event listener for add to cart
document.addEventListener('DOMContentLoaded', () => {
  let cart = JSON.parse(localStorage.getItem('cart')) || {};
  const cartCounter = document.getElementById('cartCounter');
  const cartPanel = document.getElementById('cartPanel');
  const cartList = document.getElementById('cartList');
  const cartTotal = document.getElementById('cartTotal');

  // Initialize cart
  updateCartUI();

  // Add to cart functionality
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('add-to-cart')) {
      const productCard = e.target.closest('.product-1');
      if (!productCard) return;

      const productId = productCard.dataset.id;
      const productName = productCard.dataset.name;
      const productPrice = parseInt(productCard.dataset.price);
      
      // Update cart
      if (cart[productId]) {
        cart[productId].quantity++;
      } else {
        cart[productId] = {
          name: productName,
          price: productPrice,
          quantity: 1
        };
      }

      // Save to localStorage and update UI
      localStorage.setItem('cart', JSON.stringify(cart));
      updateCartUI();
      
      // Show success message
      Swal.fire({
        icon: 'success',
        title: 'Added to Cart!',
        text: `${productName} has been added to your cart`,
        showConfirmButton: false,
        timer: 1500
      });
    }
  });

  // Cart interactions
  cartList.addEventListener('click', (e) => {
    const button = e.target.closest('button');
    if (!button) return;

    const productId = button.dataset.id;
    if (!productId) return;

    if (button.classList.contains('increaseBtn')) {
      cart[productId].quantity++;
    } else if (button.classList.contains('decreaseBtn')) {
      if (cart[productId].quantity > 1) {
        cart[productId].quantity--;
      } else {
        delete cart[productId];
      }
    } else if (button.classList.contains('removeBtn')) {
      delete cart[productId];
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
  });

  // Cart visibility
  document.getElementById('cartTrigger').addEventListener('click', () => {
    cartPanel.classList.toggle('hidden');
  });

  document.getElementById('closeCart').addEventListener('click', () => {
    cartPanel.classList.add('hidden');
  });

  // Clear cart
  document.getElementById('clearCart').addEventListener('click', () => {
    cart = {};
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
    cartPanel.classList.add('hidden');
  });

  function updateCartUI() {
    // Update counter
    const totalItems = Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);
    cartCounter.textContent = totalItems;

    // Update list
    cartList.innerHTML = '';
    let totalPrice = 0;

    for (const [id, item] of Object.entries(cart)) {
      totalPrice += item.price * item.quantity;

      const cartItem = document.createElement('div');
      cartItem.className = 'flex justify-between items-center p-2 hover:bg-gray-50 rounded-lg';
      cartItem.innerHTML = `
        <div class="flex-1">
          <h4 class="font-semibold text-sm">${item.name}</h4>
          <p class="text-blue-600 text-xs">Rs ${item.price}</p>
        </div>
        <div class="flex items-center gap-2">
          <div class="flex items-center gap-1 bg-white px-2 py-1 rounded-full">
            <button data-id="${id}" class="decreaseBtn text-red-500 hover:text-red-700 text-md">−</button>
            <span class="w-6 text-center text-sm">${item.quantity}</span>
            <button data-id="${id}" class="increaseBtn text-green-500 hover:text-green-700 text-md">+</button>
          </div>
          <button data-id="${id}" class="removeBtn text-gray-400 hover:text-red-500 transition text-lg">✕</button>
        </div>
      `;
      cartList.appendChild(cartItem);
    }

    // Update total
    cartTotal.textContent = `Rs ${totalPrice}`;
  }
  // Save Cart to Local Storage
  function saveCart() {
      localStorage.setItem("cart", JSON.stringify(cart));
  }

  // Remove Item from Cart


  cartItemsList?.addEventListener("click", (e) => {
      if (e.target.classList.contains("remove-item")) {
          const id = e.target.dataset.id;
          if (cart[id].quantity > 1) {
              cart[id].quantity -= 1;
          } else {
              delete cart[id]; // Remove item completely if last quantity is removed
          }
          saveCart();
          updateCart();
      }
  });
  // Clear Cart
  clearCartBtn.addEventListener("click", () => {
      cart = {}; // Empty the cart
      saveCart();
      updateCart();
      cartDropdown.style.display = "none"; // Hide cart after clearing
  });
});


// add to card ended here