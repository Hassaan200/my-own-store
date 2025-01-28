
// pagination work....
let cards = [
    {
      name: "Product 1",
      category: "Electronics",
      size: "Medium",
      rating: 4.5,
      image: "https://picsum.photos/200/300?random=1",
    },
    {
      name: "Product 2",
      category: "Home & Kitchen",
      size: "Large",
      rating: 4.0,
      image: "https://picsum.photos/200/300?random=2",
    },
    {
      name: "Product 3",
      category: "Fashion",
      size: "Small",
      rating: 5.0,
      image: "https://picsum.photos/200/300?random=3",
    },
    {
      name: "Product 4",
      category: "Sports",
      size: "Large",
      rating: 3.5,
      image: "https://picsum.photos/200/300?random=4",
    },
    {
      name: "Product 5",
      category: "Toys",
      size: "Small",
      rating: 4.3,
      image: "https://picsum.photos/200/300?random=5",
    },
    {
      name: "Product 6",
      category: "Books",
      size: "Medium",
      rating: 4.7,
      image: "https://picsum.photos/200/300?random=6",
    },
    {
      name: "Product 7",
      category: "Health & Beauty",
      size: "Medium",
      rating: 4.6,
      image: "https://picsum.photos/200/300?random=7",
    },
    {
      name: "Product 8",
      category: "Electronics",
      size: "Large",
      rating: 3.8,
      image: "https://picsum.photos/200/300?random=8",
    },
    {
      name: "Product 9",
      category: "Home & Kitchen",
      size: "Small",
      rating: 4.2,
      image: "https://picsum.photos/200/300?random=9",
    },
    {
      name: "Product 10",
      category: "Fashion",
      size: "Medium",
      rating: 4.1,
      image: "https://picsum.photos/200/300?random=10",
    },
    {
      name: "Product 11",
      category: "Sports",
      size: "Small",
      rating: 4.9,
      image: "https://picsum.photos/200/300?random=11",
    },
    {
      name: "Product 12",
      category: "Toys",
      size: "Large",
      rating: 3.6,
      image: "https://picsum.photos/200/300?random=12",
    },
    {
      name: "Product 13",
      category: "Books",
      size: "Large",
      rating: 4.8,
      image: "https://picsum.photos/200/300?random=13",
    },
    {
      name: "Product 14",
      category: "Health & Beauty",
      size: "Small",
      rating: 4.0,
      image: "https://picsum.photos/200/300?random=14",
    },
    {
      name: "Product 15",
      category: "Electronics",
      size: "Small",
      rating: 3.9,
      image: "https://picsum.photos/200/300?random=15",
    },
    {
      name: "Product 16",
      category: "Home & Kitchen",
      size: "Medium",
      rating: 4.5,
      image: "https://picsum.photos/200/300?random=16",
    },
    {
      name: "Product 17",
      category: "Fashion",
      size: "Large",
      rating: 4.7,
      image: "https://picsum.photos/200/300?random=17",
    },
    {
      name: "Product 18",
      category: "Sports",
      size: "Medium",
      rating: 3.7,
      image: "https://picsum.photos/200/300?random=18",
    },
    {
      name: "Product 19",
      category: "Toys",
      size: "Medium",
      rating: 4.4,
      image: "https://picsum.photos/200/300?random=19",
    },
    {
      name: "Product 20",
      category: "Books",
      size: "Small",
      rating: 4.3,
      image: "https://picsum.photos/200/300?random=20",
    },
    {
      name: "Product 21",
      category: "Health & Beauty",
      size: "Large",
      rating: 4.8,
      image: "https://picsum.photos/200/300?random=21",
    },
    {
      name: "Product 22",
      category: "Electronics",
      size: "Medium",
      rating: 4.2,
      image: "https://picsum.photos/200/300?random=22",
    },
    {
      name: "Product 23",
      category: "Home & Kitchen",
      size: "Large",
      rating: 3.6,
      image: "https://picsum.photos/200/300?random=23",
    },
    {
      name: "Product 24",
      category: "Fashion",
      size: "Small",
      rating: 4.6,
      image: "https://picsum.photos/200/300?random=24",
    },
    {
      name: "Product 25",
      category: "Sports",
      size: "Large",
      rating: 4.0,
      image: "https://picsum.photos/200/300?random=25",
    },
    {
      name: "Product 26",
      category: "Toys",
      size: "Small",
      rating: 4.7,
      image: "https://picsum.photos/200/300?random=26",
    },
    {
      name: "Product 27",
      category: "Books",
      size: "Medium",
      rating: 3.9,
      image: "https://picsum.photos/200/300?random=27",
    },
    {
      name: "Product 28",
      category: "Health & Beauty",
      size: "Small",
      rating: 4.1,
      image: "https://picsum.photos/200/300?random=28",
    },
    {
      name: "Product 29",
      category: "Electronics",
      size: "Large",
      rating: 4.3,
      image: "https://picsum.photos/200/300?random=29",
    },
    {
      name: "Product 30",
      category: "Home & Kitchen",
      size: "Medium",
      rating: 5.0,
      image: "https://picsum.photos/200/300?random=30",
    },
    {
      name: "Product 31",
      category: "Fashion",
      size: "Large",
      rating: 3.8,
      image: "https://picsum.photos/200/300?random=31",
    },
    {
      name: "Product 32",
      category: "Sports",
      size: "Medium",
      rating: 4.2,
      image: "https://picsum.photos/200/300?random=32",
    },
    {
      name: "Product 33",
      category: "Toys",
      size: "Large",
      rating: 4.4,
      image: "https://picsum.photos/200/300?random=33",
    },
    {
      name: "Product 34",
      category: "Books",
      size: "Small",
      rating: 4.0,
      image: "https://picsum.photos/200/300?random=34",
    },
    {
      name: "Product 35",
      category: "Health & Beauty",
      size: "Large",
      rating: 4.5,
      image: "https://picsum.photos/200/300?random=35",
    },
    {
      name: "Product 36",
      category: "Electronics",
      size: "Small",
      rating: 4.6,
      image: "https://picsum.photos/200/300?random=36",
    },
    {
      name: "Product 37",
      category: "Home & Kitchen",
      size: "Large",
      rating: 4.1,
      image: "https://picsum.photos/200/300?random=37",
    },
    {
      name: "Product 38",
      category: "Fashion",
      size: "Medium",
      rating: 3.7,
      image: "https://picsum.photos/200/300?random=38",
    },
    {
      name: "Product 39",
      category: "Sports",
      size: "Small",
      rating: 4.3,
      image: "https://picsum.photos/200/300?random=39",
    },
    {
      name: "Product 40",
      category: "Toys",
      size: "Medium",
      rating: 4.6,
      image: "https://picsum.photos/200/300?random=40",
    },
    {
      name: "Product 41",
      category: "Books",
      size: "Large",
      rating: 4.2,
      image: "https://picsum.photos/200/300?random=41",
    },
    {
      name: "Product 42",
      category: "Health & Beauty",
      size: "Small",
      rating: 4.8,
      image: "https://picsum.photos/200/300?random=42",
    },
    {
      name: "Product 43",
      category: "Electronics",
      size: "Large",
      rating: 4.0,
      image: "https://picsum.photos/200/300?random=43",
    },
    {
      name: "Product 44",
      category: "Home & Kitchen",
      size: "Medium",
      rating: 3.9,
      image: "https://picsum.photos/200/300?random=44",
    },
    {
      name: "Product 45",
      category: "Fashion",
      size: "Large",
      rating: 4.3,
      image: "https://picsum.photos/200/300?random=45",
    },
    {
      name: "Product 46",
      category: "Sports",
      size: "Small",
      rating: 4.5,
      image: "https://picsum.photos/200/300?random=46",
    },
    {
      name: "Product 47",
      category: "Toys",
      size: "Large",
      rating: 4.2,
      image: "https://picsum.photos/200/300?random=47",
    },
    {
      name: "Product 48",
      category: "Books",
      size: "Small",
      rating: 4.0,
      image: "https://picsum.photos/200/300?random=48",
    },
    {
      name: "Product 49",
      category: "Health & Beauty",
      size: "Medium",
      rating: 4.7,
      image: "https://picsum.photos/200/300?random=49",
    },
    {
      name: "Product 50",
      category: "Electronics",
      size: "Medium",
      rating: 4.8,
      image: "https://picsum.photos/200/300?random=50",
    },
  ];
  
  const itemPerPage = 10;
      let currentPage = 1;
  
      const div1 = document.getElementById("box");
      const prevBtn = document.getElementById("prev-btn");
      const nextBtn = document.getElementById("next-btn");
  
      // Function to display cards for the current page
      const displayPage = (cards, itemPerPage, currentPage) => {
        div1.innerHTML = ""; 
        const start = (currentPage - 1) * itemPerPage;
        const end = currentPage * itemPerPage;
        const paginatedCards = cards.slice(start, end);
  
        paginatedCards.forEach((card) => {
          div1.innerHTML += `
            <div class="card">
              <img src="${card.image}" alt="${card.name}" width="200" height="150" />
              <h3>${card.name}</h3>
              <p>Rating: ${card.rating}</p>
              <p>Category: ${card.category}</p>
              <p>Size: ${card.size}</p>
              <button class= 'animate-on-scroll b-conf mt-20 relative flex h-[50px] w-40 items-center justify-center overflow-hidden border-2 border-white rounded-md text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-white before:duration-500 before:ease-out hover:font-bold hover:text-blue-500  hover:shadow-black hover:before:h-56 hover:before:w-56 cursor-pointer '>Add to Card</button>
            </div>`;
        });
      };
  
      // Initial render
      displayPage(cards, itemPerPage, currentPage);
  
      // Handle Next button click
      nextBtn.addEventListener("click", () => {
        currentPage++;
        displayPage(cards, itemPerPage, currentPage);
  
        // Show Previous button after the first page
        if (currentPage > 1) {
          prevBtn.style.display = "inline-block";
        }
  
        // Disable Next button if we're at the last page
        if (currentPage * itemPerPage >= cards.length) {
          nextBtn.style.display = "none";
        } 
      });
  
  
      // Handle Previous button click
      prevBtn.addEventListener("click", () => {
        currentPage--;
        displayPage(cards, itemPerPage, currentPage);
        nextBtn.style.display = "inline-block";
        if (currentPage === 1) {
          prevBtn.style.display = "none";
        }
  
        
      });