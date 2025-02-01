
// pagination work....
const manCollection = [
  {
     name: "new Asthetic Pant",
     price: `Rs 850 <del class="delete"> Rs 950</del> `,
     img: "img/men asthetic pant 1.webp"
  },
  {
     name: "Denim jeans",
     price: `Rs 950 <del class="delete"> Rs 1,050</del> `,
     img: "img/denim jeans2.webp",
  },
  {
     name: "mega baggy jeans3.webp",
     price: `Rs 750 <del class="delete"> Rs 950</del> `,
     img: "img/mega baggy jeans3.webp",
  },
  {
     name: "vulcan twill jort",
     price: `Rs 850 <del class="delete"> Rs 950</del> `,
     img: "img/vulcan twill jort4.webp",
  },
  {
     name: "basketBall Short",
     price: `Rs 450 <del class="delete"> Rs 550</del> `,
     img: "img/basketBall short5.webp"

  },
  {
     name: "Pull on Denim Pant",
     price: `Rs 300 <del class="delete"> Rs 400</del> `,
     img: "img/pull-on denim easy pant.webp"
  },
  {
     name: "T-shirt",
     price: `Rs 500 <del class="delete"> Rs 600</del> `,
     img: " img/shirt6.webp"
  },
  {
     name: "Bedminton club T-shirt",
     price: `Rs 700 <del class="delete"> Rs 850</del> `,
     img: "img/shirt9.webp"
  },
  {
     name: "Golf swingers T-shirt",
     price: `Rs 300 <del class="delete"> 450</del> `,
     img: "img/shirt8.webp"
  },
  {
     name: "The north face",
     price: `Rs 700 <del class="delete"> 850</del> `,
     img: "img/shirt7.webp"
  },
  {
     name: "Franks Bait shirt",
     price: `Rs 499 <del class="delete"> 650</del> `,
     img: "img/franks Bait11.webp"
  },
  {
     name: "Lone star shirt",
     price: `Rs 599 <del class="delete"> 700</del> `,
     img: "img/lone star 12.webp"
  },
  {
     name: "Vintage 1900s shirt",
     price: `Rs 650 <del class="delete"> 850</del> `,
     img: "img/Vintage 1990s13.webp",
  },
  {
     name: "Cut-Off Oxford Shirt",
     price: `Rs 700 <del class="delete"> 900</del> `,
     img: "img/solid cut14.webp",
  },
  {
     name: "Long Sleeve Button-Down Shirt",
     price: `Rs 700 <del class="delete"> 800</del> `,
     img: "img/uo kenny menswear15.webp",
  },
  {
     name: "Plaid Flannel Shirt",
     price: `Rs 800 <del class="delete"> 950</del> `,
     img: "img/katin_derek.webp",
  },
  {
     name: "Plaid Long Sleeve Shirt",
     price: `Rs 1000 <del class="delete"> 1,250</del> `,
     img: "img/plaid_long.webp",
  },
  {
     name: "Micro Plaid Long Sleeve Shirt",
     price: `Rs 850 <del class="delete"> 950</del> `,
     img: "img/micro_Plaid.webp",
  },
  {
     name: "Long Sleeve Button-down shirt",
     price: `Rs 550 <del class="delete"> 650</del> `,
     img: "img/long_sleeve.webp",
  },
  {
     name: "Raga Man Stuvan",
     price: `Rs 500 <del class="delete"> 700</del> `,
     img: "img/Raga_Man.webp",

  },
  {
     name: "Cropped Seersucker Shirt",
     price: `Rs 450 <del class="delete"> 600</del> `,
     img: "img/seersucker_shirt21.webp",
  },
  {
     name: "Cotton Graphic Tee",
     price: `Rs 250 <del class="delete"> 400</del> `,
     img: "img/graphic_tee.webp",
  },
  {
     name: " spirit Cotton Tee",
     price: `Rs 450 <del class="delete"> 550</del> `,
     img: "img/spirit_tee.webp",
  },
  {
     name: "Innovation Graphic Tee",
     price: `Rs 650 <del class="delete"> 999</del> `,
     img: "img/inovation_tee.webp",
  },
  {
     name: "CAT Core Logo Graphic Tee",
     price: `Rs 1,000 <del class="delete"> 1,500</del> `,
     img: "img/logo_tee.webp"
  }

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
  
        paginatedCards.forEach((manCollection) => {
          div1.innerHTML += `
            <div class="card">
              <img src="${manCollection.image}" alt="${manCollection.name}" width="200" height="150" />
              <h3>${manCollection.name}</h3>
              <p>price: ${manCollection.price}</p>
              <button class= 'animate-on-scroll b-conf mt-20 relative flex h-[50px] w-40 items-center justify-center overflow-hidden border-2 border-white rounded-md text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-white before:duration-500 before:ease-out hover:font-bold hover:text-blue-500  hover:shadow-black hover:before:h-56 hover:before:w-56 cursor-pointer '>Add to Card</button>
            </div>`;
        });
      };
  
      // Initial render
      displayPage(manCollection, itemPerPage, currentPage);
  
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