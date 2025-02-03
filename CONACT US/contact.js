

  // function values(e){
  //   e.preventDefault()
  //   console.log("User Name: ",document.getElementById('h-name').value)
  //   console.log("User Email: ",document.getElementById('h-email').value)
  //   console.log("User Message: ",document.getElementById('h-message').value)

  //   document.getElementById('h-name').value = ""
  //   document.getElementById('h-email').value = ""
  //   document.getElementById('h-message').value = ""

  // }
    let name1 = document.getElementById('name1');
    let email = document.getElementById('email1');
    let message = document.getElementById('text1');
  document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    name1.value = '';
    email.value = '';
    message.value = '';
    Swal.fire({
      icon: "success",
      title: "Message sent!",
      text: "Thank you for reaching out! We will get back to you soon.",
    });
 
});

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
      menu.src = "../HOME PAGE/images/close.png";
      menuItems.style.display = "block";
      menuItems.classList.remove("anim-updside1");
      menuItems.classList.add("anim-updside0");
    } else {
      menuItems.classList.remove("anim-updside0");
      menuItems.classList.add("anim-updside1");
      setTimeout(() => {
        menuItems.style.display = "none";
        menu.src = "../HOME PAGE/images/menu.png";
      }, 500);
    }
  }
  
  
  
  
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
  cartItemsList.addEventListener("click", (e) => {
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