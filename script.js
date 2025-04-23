window.onload = function () {
  window.scrollTo(0, 0);
};

document.addEventListener("DOMContentLoaded", function () {
  // Todo tu código va acá adentro
  console.log("DOM totalmente cargado");


  let bar_menu = document.getElementById("menu_interactivo");
  let bar1 = document.getElementById("line1");
  let bar2 = document.getElementById("line2");
  let bar3 = document.getElementById("line3");
  let menu_desplegable = document.getElementById("menu_desplegable");
  let inicio = document.getElementById("inicio-link");
  let contactoLink = document.getElementById("contacto-link");

  function toggleMenu() {
    bar1.classList.toggle("closeline1");
    bar2.classList.toggle("closeline2");
    bar3.classList.toggle("closeline3");
    menu_desplegable.classList.toggle("show");
  }

  function closeMenu() {
    bar1.classList.remove("closeline1");
    bar2.classList.remove("closeline2");
    bar3.classList.remove("closeline3");
    menu_desplegable.classList.remove("show");
  }

  bar_menu.addEventListener("click", function (event) {
    event.stopPropagation(); // Evita que se dispare el evento del document
    toggleMenu();
  });

  inicio.addEventListener("click", function () {
    closeMenu();
  });


  // Cierra el menú si hacés clic fuera
  document.addEventListener("click", function (event) {
    if (!menu_desplegable.contains(event.target) && !bar_menu.contains(event.target)) {
      closeMenu();
    }
  });

  //para hacer click en cualquier lado li en el menu desplegable

  document.querySelectorAll(".menu_link li").forEach(li => {
    li.addEventListener("click", function (e) {
      const link = li.querySelector("a");
      if (link && link.href && link.getAttribute("href") !== "#") {
        // Abre en nueva pestaña si tiene target="_blank"
        if (link.target === "_blank") {
          window.open(link.href, '_blank');
        } else {
          window.location.href = link.href;
        }
      }
    });
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
        console.log("closePopup:", closePopup);

        //contacto
        contactoLink.addEventListener("click", function (e) {
          e.preventDefault(); // Evita el salto automático

          // Cierra el menú
          closeMenu();

          // Hace scroll suave a la sección con id="contacto"
          const contactoSection = document.getElementById("contacto");
          if (contactoSection) {
            contactoSection.scrollTo({ behavior: "smooth" });
          }
        });


    });
    
