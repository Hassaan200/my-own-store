
// pagination work....
const manCollection = [
  {
    name: "new Asthetic Pant",
    price: "Rs 850",
    img: "img/men asthetic pant 1.webp"
  },
  {
    name: "Denim jeans",
    price: "Rs 950",
    img: "img/denim jeans2.webp",
  },
  {
    name: "mega baggy jeans3.webp",
    price: "Rs 750",
    img: "img/mega baggy jeans3.webp",
  },
  {
    name: "vulcan twill jort",
    price: "Rs 850",
    img: "img/vulcan twill jort4.webp",
  },
  {
    name: "basketBall Short",
    price: "Rs 450",
    img: "img/basketBall short5.webp"
  },
  {
    name: "Pull on Denim Pant",
    price: "Rs 300",
    img: "img/pull-on denim easy pant.webp"
  },
  {
    name: "T-shirt",
    price: "Rs 500",
    img: "img/shirt6.webp"
  },
  {
    name: "Bedminton club T-shirt",
    price: "Rs 700",
    img: "img/shirt9.webp"
  },
  {
    name: "Golf swingers T-shirt",
    price: "Rs 300",
    img: "img/shirt8.webp"
  },
  {
    name: "The north face",
    price: "Rs 700",
    img: "img/shirt7.webp"
  },
  {
    name: "Franks Bait shirt",
    price: "Rs 499",
    img: "img/franks Bait11.webp"
  },
  {
    name: "Lone star shirt",
    price: "Rs 599",
    img: "img/lone star 12.webp"
  },
  {
    name: "Vintage 1900s shirt",
    price: "Rs 650",
    img: "img/Vintage 1990s13.webp",
  },
  {
    name: "Cut-Off Oxford Shirt",
    price: "Rs 700",
    img: "img/solid cut14.webp",
  },
  {
    name: "Long Sleeve Button-Down Shirt",
    price: "Rs 700",
    img: "img/uo kenny menswear15.webp",
  },
  {
    name: "Plaid Flannel Shirt",
    price: "Rs 800",
    img: "img/katin_derek.webp",
  },
  {
    name: "Plaid Long Sleeve Shirt",
    price: "Rs 1000",
    img: "img/plaid_long.webp",
  },
  {
    name: "Micro Plaid Long Sleeve Shirt",
    price: "Rs 850",
    img: "img/micro_Plaid.webp",
  },
  {
    name: "Long Sleeve Button-down shirt",
    price: "Rs 550",
    img: "img/long_sleeve.webp",
  },
  {
    name: "Raga Man Stuvan",
    price: "Rs 500",
    img: "img/Raga_Man.webp",
  },
  {
    name: "Cropped Seersucker Shirt",
    price: "Rs 450",
    img: "img/seersucker_shirt21.webp",
  },
  {
    name: "Cotton Graphic Tee",
    price: "Rs 250",
    img: "img/graphic_tee.webp",
  },
  {
    name: "spirit Cotton Tee",
    price: "Rs 450",
    img: "img/spirit_tee.webp",
  },
  {
    name: "Innovation Graphic Tee",
    price: "Rs 650",
    img: "img/inovation_tee.webp",
  },
  {
    name: "CAT Core Logo Graphic Tee",
    price: "Rs 1,000",
    img: "img/logo_tee.webp"
  }
];




const womenCollection = [
  {
     name: "Women's navy blue joggers",
     price: `Rs 1,000`,
     img: "img2/jogger_01.avif"
  },
  {
     name: "Womens wide-leg jeans",
     price: `Rs 800`,
     img: "img2/cny_02.avif",
  },
  {
     name: "tailored fabric",
     price: `Rs 700`,
     img: "img2/tailored_fabric03.avif",
  },
  {
     name: "Black velvet-effect pants",
     price: `Rs 850`,
     img: "img2/black_velvet04.avif",
  },
  {
     name: "Womens white cotton joggers",
     price: `Rs 900`,
     img: "img2/white_joggger05.avif"
  },
  {
     name: "Womens pants in denim",
     price: `Rs 1,400`,
     img: "img2/denim_06.avif"
  },
  {
     name: "Black joggers in nappa leather ",
     price: `Rs 1,300`,
     img: "img2/nappa_jogger17.avif"
  },
  {
     name: "viscose cargo pants",
     price: `Rs 400`,
     img: "img2/cargo_pant18.avif"
  },
  {
     name: " pants in dove-gray tailored",
     price: `Rs 350`,
     img: "img2/wool_fabric19.avif"
  },
  {
     name: "silver technical pant",
     price: `Rs 450`,
     img: "img2/silver_fabric20.avif"
  },
  {
     name: "Womens green silk pants",
     price: `Rs 650`,
     img: "img2/silk_pants07.avif"
  },
  {
     name: "Women's olive green T-shirt",
     price: `Rs 1,400`,
     img: "img2/olive_green8.avif"
  },
  {
     name: "Women's shirt with a vertical",
     price: `Rs 1,400`,
     img: "img2/crystral_shirt10.avif"
  },
  {
     name: "Women's anthracite gray T-shirt ",
     price: `Rs 1,300`,
     img: "img2/gray_t-shirt12.avif"
  },
  {
     name: "Aged white cotton cropped T-shirt",
     price: `Rs 1,900`,
     img: "img2/crop_tshirt09.avif"
  },
  {
     name: "Womens polo shirt",
     price: `Rs 1,250`,
     img: "img2/polo_tshirt13.avif"
  },
  {
     name: "White Star Collection T-shirt",
     price: `Rs 450`,
     img: "img2/star_tshirt14.avif"
  },
  {
     name: "slim-fit distressed T-shirt",
     price: `Rs 550`,
     img: "img2/tshirt_black15.avif"
  },
  {
     name: "worn-white cotton T-shirt",
     price: `Rs 600`,
     img: "img2/worn_t-shirt15.avif"
  },
  {
     name: "Black T-shirt with multicolor print",
     price: `Rs 750`,
     img: "img2/multicolor_print16.avif"
  },
  {
     name: "Women's gray sleeveless T-shirt ",
     price: `Rs 500`,
     img: "img2/sleevesT-shirt17.avif"
  },
  {
     name: "Women's bleached jeans",
     price: `Rs 700`,
     img: "img2/crystral_pant21.avif"
  },
  {
     name: "cotton cargo pants",
     price: `Rs 1,500`,
     img: "img2/cargo_design21.avif"
  },
  {
     name: "Womens high-waisted pants",
     price: `Rs 900`,
     img: "img2/gray_pant23.avif",
  },
  {
     name: "Black joggers with white embroidery",
     price: `Rs 450`,
     img: "img2/black_jogger25.avif"
  },
];



const womenWinterCollection = [
  {
     name: "Womens black crew neck dress",
     price: "Rs 1,000",
     img: "img3/neck_dress08.avif"
  },
  {
     name: "Women's bomber jacket",
     price: "Rs 1,200",
     img: "img3/bomber_jacket09.avif"
  },
  {
     name: "Womens black double-breasted blazer",
     price: "Rs 1,000",
     img: "img3/black_blazer11.avif"
  },
  {
     name: "Women's dove-gray blazer",
     price: "Rs 1,000",
     img: "img3/breasted_blazer13.avif",
  },
  {
     name: "Fair lsle pattern",
     price: "Rs 1,400",
     img: "img3/lsle_pattern13.avif",
  },
  {
     name: "Womens short-sleeved sweater",
     price: "Rs 1,300",
     img: "img3/white_sweeter14.avif",
  },
  {
     name: "Womens white zipped sweatshirt",
     price: "Rs 1,400",
     img: "img3/black_star15.avif",
  },
  {
     name: "Womens black cardigan",
     price: "Rs 1,800",
     img: "img3/embroidery_dress16.avif",
  },
  {
     name: "Micro Plaid Long Sleeve Shirt",
     price: "Rs 1,000",
     img: "img3/sweter_cotton17.avif",
  },
  {
     name: "Womens round-neck sweater ",
     price: "Rs 1,000",
     img: "img3/dark_blue18.avif",
  },
  {
     name: "Womens sweater ",
     price: "Rs 1,000",
     img: "img3/jouy_pattern19.avif",
  },
  {
     name: "Womens bomber jacket in dark blue ",
     price: "Rs 900",
     img: "img3/bomber_jacketblue20.avif",
  },
  {
     name: "cocoon coat",
     price: "Rs 1,800",
     img: "img3/cocoon_coat21.avif"
  },
  {
     name: "Women's denim jacket",
     price: "Rs 1,400",
     img: "img3/denim_jacket13.avif"
  },
  {
     name: "silver and black jacket",
     price: "Rs 1,500",
     img: "img3/silver_black14.avif"
  },
  {
     name: "shawl collar jacket",
     price: "Rs 2,200",
     img: "img3/shawl_collar15.avif"
  },
  {
     name: "logo and star jacket",
     price: "Rs 1,400",
     img: "img3/black_star15.avif"
  },
  {
     name: "Women's jacket in tobacco-colored ",
     price: "Rs 1,800",
     img: "img3/shearling_collar17.avif"
  },
  {
     name: "Aged white jacket in pinstripe cotton ",
     price: "Rs 1,400",
     img: "img3/over_jacket.avif"
  },
  {
     name: "Double-breasted wool boyfriend jacket ",
     price: "Rs 1,800",
     img: "img3/breasted_blue_21.avif"
  },
  {
     name: "Women's blue quilted jacket ",
     price: "Rs 1,300",
     img: "img3/blue_denim21.avif"
  },
  {
   name: "Aurora Shield Fleece Jacket",
     price: "Rs 1,200",
     img: "img3/helly_jacket22.avif"
  },
  {
     name: "Pine Bank Insulated",
     price: "Rs 1,000",
     img: "img3/bank_insulate23.avif"
  },
  {
     name: "Better Sweater Quarter",
     price: "Rs 1,500",
     img: "img3/Better_Sweater 23.avif"
  },
  {
     name: "Lost Canyon Hoodie",
     price: "Rs 1,400",
     img: "img3/Hoodie_Womens25.avif"
  }
];






const menWinterCollection = [
  {
     name: "Weather Jacket",
     price: "Rs 1,500",
     img: "img4/weather_jacket01.avif"
  },
  {
     name: "Puff Insulated Jacket",
     price: "Rs 2,000",
     img: "img4/nano_jacket02.avif"
  },
  {
     name: "Capa Hooded Insulated",
     price: "Rs 2,200",
     img: "img4/capa_hooded03.avif"
  },
  {
     name: "Down Hoodie",
     price: "Rs 2,400",
     img: "img4/magma_jacket04.avif"
  },
  {
     name: "Hybrid Insulated Jacket",
     price: "Rs 1,900",
     img: "img4/hooded_jacket05.avif"
  },
  {
     name: "hybrid collaps jacket",
     price: "Rs 2,400",
     img: "img4/hybrid_jacket06.avif"
  },
  {
     name: "Geo Insulated Jacket ",
     price: "Rs 1,800",
     img: "img4/geo_jacket07.avif"
  },
  {
     name: "Roaring Fork Down Jacket",
     price: "Rs 1,300",
     img: "img4/roaring_jacket08.avif"
  },
  {
     name: "Down sweeter Jacket",
     price: "Rs 2,400",
     img: "img4/hoodie_jacket09.avif"
  },
  {
     name: "Thermal Full-Zip hoodie",
     price: "Rs 1,200",
     img: "img4/zip_hoodie10.avif"
  },
  {
     name: "R1 Thermal Jacket",
     price: "Rs 1,200",
     img: "img4/thermal_jacket11.avif"
  },
  {
     name: "Better Sweater Coat",
     price: "Rs 1,400",
     img: "img4/better_sweater12.avif"
  },
  {
     name: "Reversible Silent jacket",
     price: "Rs 2,000",
     img: "img4/reversible_jacket13.avif"
  },
  {
     name: "Downdrift jacket",
     price: "Rs 1,200",
     img: "img4/downdrift_jacket14.avif"
  },
  {
     name: "Retro Pullover Jacket",
     price: "Rs 1,500",
     img: "img4/retro_pile15.avif"
  },
  {
     name: "Infiltrator Fleece Jacket",
     price: "Rs 1,400",
     img: "img4/fleece_jacket16.jpg"
  },
  {
     name: "fleece filler Jacket",
     price: "Rs 1,200",
     img: "img4/infiltratot_jacket17.web"
  },
  {
     name: "Aros Fleece Jacket",
     price: "Rs 1,800",
     img: "img4/aros_jacket18.jpg"
  },
  {
     name: "Hudson Trail Fleece jacket",
     price: "Rs 1,500",
     img: "img4/hudsin_jacket19.avif"
  },
  {
     name: "Alpha Zero Fleece hoodie",
     price: "Rs 1,400",
     img: "img4/alpha_jacket20.avif"
  },
  {
     name: "Hoodie-Men's",
     price: "Rs 1,500",
     img: "img4/zero_jacket21.avif"
  },
  {
     name: "Abrazo Fleece Hooded",
     price: "Rs 1,500",
     img: "img4/abrazo_jacket22.avif"
  },
  {
     name: "Mahnya Crewneck Sweater",
     price: "Rs 1,500",
     img: "img4/sweat_shirt22.avif"
  },
  {
     name: "Solid Sets Eco Crew",
     price: "Rs 1,200",
     img: "img4/solid_sweater24.avif"
  },
  {
     name: "Arete Crew sweater",
     price: "Rs 1,500",
     img: "img4/arere_crew25.avif"
  }
];

const itemPerPage = 10;
let currentPage = 1;
let currentCollection = []; // Tracks the active collection



const div1 = document.getElementById("box01");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
let collectionType = document.getElementById("collection-type");
// Function to display cards for the current page
const displayPage = (collection, itemPerPage, currentPage) => {
  div1.innerHTML = "";
  const start = (currentPage - 1) * itemPerPage;
  const end = start + itemPerPage;
  const paginatedCards = collection.slice(start, end);
  
  paginatedCards.forEach((item, index) => {
    const priceNum = parseInt(item.price.replace(/Rs\s|,/g, "")); // Remove "Rs " and commas
    const cutprice = parseInt(priceNum * 1.5); // Calculate the cut price
    div1.innerHTML += `
    <div class="product-1 prod-cards mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
    <img class="h-48 w-full object-cover object-center" src="${item.img}" alt="Product Image" />
    <div class="p-4 product-1" data-id="${index}" data-name="${item.name}" data-price="${priceNum}">
      <h2 class="mb-2 text-lg font-medium dark:text-white text-gray-900">${item.name}</h2>
      <div class="flex items-center">
        <p class="mr-2 text-lg font-semibold text-gray-900 dark:text-white">Rs ${priceNum}</p>
        <p class="text-base font-medium text-gray-500 line-through dark:text-gray-300">Rs ${cutprice}</p>
        <p class="ml-auto text-base font-medium text-green-500">20% off</p>
      </div>
      <button class="add-to-cart w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg">Add to Cart</button>
    </div>
  </div>
    `;
  });
};

//  here is the add to card work

document.addEventListener("DOMContentLoaded", () => {
  let cart = {}; // Cart object
  const cartCount = document.getElementById("cart-count");
  const cartDropdown = document.getElementById("cart-dropdown");
  const cartItemsList = document.getElementById("cart-items");
  const clearCartBtn = document.getElementById("clear-cart");
  const cartIcon = document.querySelector(".nav-btn"); // Cart icon container

  // Add event listener for dynamically created products
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("add-to-cart")) {
      const product = e.target.closest(".product-1");
      const id = product.dataset.id;
      const name = product.querySelector("h2").innerText; // Get product name
      const price = parseFloat(product.querySelector("p").innerText.replace("Rs ", "").trim()); // Get price

      if (cart[id]) {
        cart[id].quantity += 1;
      } else {
        cart[id] = { name, price, quantity: 1 };
      }

      updateCart();
      cartDropdown.style.display = "block"; // Keep cart open after adding
    }
  });

  // Update Cart UI
  function updateCart() {
    cartItemsList.innerHTML = "";
    let totalCount = 0;

    Object.keys(cart).forEach((id) => {
      const item = cart[id];
      totalCount += item.quantity;

      const li = document.createElement("li");
      li.innerHTML = `
        ${item.name} - Rs ${item.price} x ${item.quantity}
        <button class="remove-item" data-id="${id}">❌</button>
      `;

      cartItemsList.appendChild(li);
    });

    cartCount.textContent = totalCount; // Update cart count

    // Hide cart only if it's completely empty
    if (totalCount === 0) {
      cartDropdown.style.display = "none";
    }
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
      updateCart();
      if (Object.keys(cart).length > 0) {
        cartDropdown.style.display = "block"; // Keep cart open if items still exist
      }
    }
  });

  // Toggle Cart Dropdown
  cartIcon.addEventListener("click", () => {
    if (cartDropdown.style.display === "block") {
      cartDropdown.style.display = "none";
    } else if (Object.keys(cart).length > 0) {
      cartDropdown.style.display = "block";
    }
  });

  // Clear Cart
  clearCartBtn.addEventListener("click", () => {
    cart = {}; // Empty the cart
    updateCart();
    cartDropdown.style.display = "none"; // Hide cart after clearing
  });
});


// add to card ended here






// Function to handle category clicks
var handleCategoryClick = (collection) => {
  currentCollection = collection; // Track selected collection
  currentPage = 1;
  displayPage(collection, itemPerPage, currentPage);

  // Show/hide pagination buttons
  nextBtn.style.display = (collection.length > itemPerPage) ? "inline-block" : "none";
  prevBtn.style.display = "none";

  // Add animations AFTER rendering
  addScrollAnimations();
};
// Attach event listeners to category buttons
document.querySelectorAll("#category").forEach((button) => {
  button.addEventListener("click", () => {
    const collectionType = button.textContent.trim();
    let collection = [];

    if (collectionType === "WOMAN COLLECTION") {
      collection = womenCollection;
      collectionType.innerHTML = "WOMAN COLLECTION";
    } else if (collectionType === "MAN COLLECTION") {
      collection = manCollection;
      collectionType.innerHTML = "MAN COLLECTION";
    } else if (collectionType === "WOMAN WINTER COLLECTION") {
      collection = womenWinterCollection;
      collectionType.innerHTML = "WOMAN WINTER COLLECTION";
    } else if (collectionType === "MAN WINTER COLLECTION") {
      collection = menWinterCollection;
      collectionType.innerHTML = "MAN WINTER COLLECTION";
    }
    handleCategoryClick(collection);
  });
});

nextBtn.addEventListener("click", () => {
  currentPage++;
  displayPage(currentCollection, itemPerPage, currentPage);

  window.scrollTo({ top: 0, behavior: "smooth" });
  
  prevBtn.style.display = "inline-block";
  
  // Hide next button if no more items
  if (currentPage * itemPerPage >= currentCollection.length) {
    nextBtn.style.display = "none";
  }

  addScrollAnimations();
});

// Handle Previous button click
prevBtn.addEventListener("click", () => {
  currentPage--;
  displayPage(currentCollection, itemPerPage, currentPage);

  window.scrollTo({ top: 0, behavior: "smooth" });
  
  nextBtn.style.display = "inline-block";
  
  if (currentPage === 1) {
    prevBtn.style.display = "none";
  }

  addScrollAnimations();
});

// Function to get the current collection (you need to implement this based on your logic)
const getCurrentCollection = () => currentCollection;


// Function to add scroll animations to cards
const addScrollAnimations = () => {
  const cards = document.querySelectorAll("#box01 > div"); // Select all cards inside #box01

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("card-animate"); // Add the animation class
          observer.unobserve(entry.target); // Stop observing once the animation is applied
        }
      });
    },
    {
      threshold: 0.1, // Trigger when 10% of the card is visible
    }
  );

  // Observe each card
  cards.forEach((card) => {
    observer.observe(card);
  });
};

 handleCategoryClick = (collection) => {
  currentCollection = collection; // Track selected collection
  currentPage = 1;
  displayPage(collection, itemPerPage, currentPage);

  // Show/hide pagination buttons
  nextBtn.style.display = (collection.length > itemPerPage) ? "inline-block" : "none";
  prevBtn.style.display = "none";

  // Add animations AFTER rendering
  addScrollAnimations();
}






// Initialize with default collection
window.addEventListener('DOMContentLoaded', () => {
  currentCollection = manCollection; // Or any default collection
  displayPage(currentCollection, itemPerPage, currentPage);
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




  
