
function toggleSearch() {
    const searchInput = document.querySelector('.search-input');
    searchInput.classList.toggle('show');
  }
  

  function values(e){
    e.preventDefault()
    console.log("User Name: ",document.getElementById('h-name').value)
    console.log("User Email: ",document.getElementById('h-email').value)
    console.log("User Message: ",document.getElementById('h-message').value)

    document.getElementById('h-name').value = ""
    document.getElementById('h-email').value = ""
    document.getElementById('h-message').value = ""


    let toast = document.getElementById("toast");
    toast.classList.add("show");

    // Hide toast after 3 seconds
    setTimeout(() => {
      toast.classList.remove("show");
    }, 3000);
  }

  