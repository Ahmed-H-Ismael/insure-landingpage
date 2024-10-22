const tabmenue = document.querySelector(".tab img");
const mynav = document.querySelector(".mynav");
const planLink = document.querySelector(".plan-link")
tabmenue.addEventListener("click",function(){
    switchImage()
})
let isFirstImage = true;

function switchImage() {

    if (isFirstImage) {
        tabmenue.src = `./images/icon-close.svg` // Switch back to first image
        mynav.classList.remove("hidden");
        planLink.classList.add("active")
        mynav.classList.add("active");
        
    } else {
        tabmenue.src = `./images/icon-hamburger.svg`; // Switch to second image
        mynav.classList.add("hidden");
        planLink.classList.remove("active")
        mynav.classList.remove("active");

    }
    
    isFirstImage = !isFirstImage; // Toggle the state
}

