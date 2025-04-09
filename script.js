window.onload = function () {
  window.scrollTo(0, 0);
};

let bar_menu = document.getElementById("menu_interactivo");
let bar1 = document.getElementById("line1");
let bar2 = document.getElementById("line2");
let bar3 = document.getElementById("line3");
let menu_desplegable = document.getElementById("menu_desplegable");
let inicio= document.getElementById("inicio-link");


bar_menu.addEventListener("click", function animateBars() {
  bar1.classList.toggle("closeline1");
  bar2.classList.toggle("closeline2");
  bar3.classList.toggle("closeline3");
  menu_desplegable.classList.toggle("show");
});
inicio.addEventListener("click", function animateBars() {
  bar1.classList.toggle("closeline1");
  bar2.classList.toggle("closeline2");
  bar3.classList.toggle("closeline3");
  menu_desplegable.classList.toggle("show");
});

// PopUp

const popup = document.getElementById("popup");
      const popupImage = document.getElementById("popupImage");
      const closePopup = document.getElementById("closePopup");
      const nextBtn = document.getElementById("next");
      const prevBtn = document.getElementById("prev");
      const images = Array.from(document.querySelectorAll(".contenedor_img img"));
      let currentIndex = 0;
    
      function showImage(index) {
        currentIndex = index;
        popupImage.src = images[index].src;
        popup.style.display = "block";
      }
    
      images.forEach((img, index) => {
        img.addEventListener("click", () => {
          showImage(index);
        });
      });
    
      closePopup.addEventListener("click", () => {
        popup.style.display = "none";
      });
    
      popup.addEventListener("click", (e) => {
        if (e.target === popup) {
          popup.style.display = "none";
        }
      });
    
      nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
      });
    
      prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
      });
    
      document.addEventListener("keydown", (e) => {
        if (popup.style.display === "block") {
          if (e.key === "ArrowRight") {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
          } else if (e.key === "ArrowLeft") {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showImage(currentIndex);
          } else if (e.key === "Escape") {
            popup.style.display = "none";
          }
        }
      });