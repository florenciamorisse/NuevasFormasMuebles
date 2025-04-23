window.onload = function () {
  window.scrollTo(0, 0);
};

document.addEventListener("DOMContentLoaded", function () {
  let bar_menu = document.getElementById("menu_interactivo");
  let bar1 = document.getElementById("line1");
  let bar2 = document.getElementById("line2");
  let bar3 = document.getElementById("line3");
  let menu_desplegable = document.getElementById("menu_desplegable");
  let inicio = document.getElementById("inicio-link");
  let contactoLink = document.getElementById("contacto-link");
  let formulario = document.getElementById("formulario");
  let spinner = document.getElementById("spinner");
  // let mensajeExito= document.getElementById("mensajeExito");

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
    if (
      !menu_desplegable.contains(event.target) &&
      !bar_menu.contains(event.target)
    ) {
      closeMenu();
    }
  });

  //para hacer click en cualquier lado li en el menu desplegable

  document.querySelectorAll(".menu_link li").forEach((li) => {
    li.addEventListener("click", function (e) {
      const link = li.querySelector("a");
      if (link && link.href && link.getAttribute("href") !== "#") {
        // Abre en nueva pestaña si tiene target="_blank"
        if (link.target === "_blank") {
          window.open(link.href, "_blank");
        } else {
          window.location.href = link.href;
        }
      }
    });
  });

  formulario.addEventListener("submit", enviarEmail);

  function enviarEmail(e) {
    e.preventDefault();
    spinner.classList.remove("none");

    setTimeout(() => {
      spinner.classList.add("none");
      formulario.submit();
      // formulario.reset();
    }, 3000);
  }

  const params = new URLSearchParams(window.location.search);
  if (params.get("exito") === "1") {
    const mensajeExito = document.getElementById("mensajeExito");
    if (mensajeExito) {
      mensajeExito.classList.remove("none");
      mensajeExito.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        mensajeExito.classList.add("none");
      }, 5000);
    }
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  if (params.get("exito") === "1") {
    const mensajeExito = document.getElementById("mensajeExito");
    if (mensajeExito) {
      mensajeExito.classList.remove("none");
      setTimeout(() => {
        mensajeExito.classList.add("none");
      }, 5000);
    }
  }

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

// document.addEventListener("DOMContentLoaded", function () {
//   // --- ELEMENTOS ---
//   const bar_menu = document.getElementById("menu_interactivo");
//   const bar1 = document.getElementById("line1");
//   const bar2 = document.getElementById("line2");
//   const bar3 = document.getElementById("line3");
//   const menu_desplegable = document.getElementById("menu_desplegable");
//   const inicio = document.getElementById("inicio-link");
//   const contactoLink = document.getElementById("contacto-link");
//   const formulario = document.getElementById("formulario");
//   const spinner = document.getElementById("spinner");
//   const mensajeExito = document.getElementById("mensajeExito");

//   const popup = document.getElementById("popup");
//   const popupImage = document.getElementById("popupImage");
//   const closePopup = document.getElementById("closePopup");
//   const nextBtn = document.getElementById("next");
//   const prevBtn = document.getElementById("prev");
//   const images = Array.from(document.querySelectorAll(".contenedor_img img"));
//   let currentIndex = 0;

//   // --- MENÚ ---
//   function toggleMenu() {
//     bar1.classList.toggle("closeline1");
//     bar2.classList.toggle("closeline2");
//     bar3.classList.toggle("closeline3");
//     menu_desplegable.classList.toggle("show");
//   }

//   function closeMenu() {
//     bar1.classList.remove("closeline1");
//     bar2.classList.remove("closeline2");
//     bar3.classList.remove("closeline3");
//     menu_desplegable.classList.remove("show");
//   }

//   bar_menu.addEventListener("click", function (event) {
//     event.stopPropagation();
//     toggleMenu();
//   });

//   inicio.addEventListener("click", closeMenu);

//   document.addEventListener("click", function (event) {
//     if (!menu_desplegable.contains(event.target) && !bar_menu.contains(event.target)) {
//       closeMenu();
//     }
//   });

//   document.querySelectorAll(".menu_link li").forEach(li => {
//     li.addEventListener("click", function () {
//       const link = li.querySelector("a");
//       if (link && link.href && link.getAttribute("href") !== "#") {
//         if (link.target === "_blank") {
//           window.open(link.href, '_blank');
//         } else {
//           window.location.href = link.href;
//         }
//       }
//     });
//   });

//   // --- FORMULARIO ---
//   formulario.addEventListener('submit', function enviarEmail(e) {
//     e.preventDefault();
//     spinner.classList.remove('none');
//     setTimeout(() => {
//       spinner.classList.add('none');
//       formulario.submit();
//     }, 3000);
//   });

//   // --- MENSAJE DE ÉXITO ---
//   const params = new URLSearchParams(window.location.search);
//   if (params.get("exito") === "1" && mensajeExito) {
//     mensajeExito.classList.remove("none");
//     mensajeExito.scrollIntoView({ behavior: "smooth" });
//     setTimeout(() => {
//       mensajeExito.classList.add("none");
//     }, 5000);
//   }

//   // --- POPUP ---
//   function showImage(index) {
//     currentIndex = index;
//     popupImage.src = images[index].src;
//     popup.style.display = "block";
//   }

//   images.forEach((img, index) => {
//     img.addEventListener("click", () => {
//       showImage(index);
//     });
//   });

//   if (closePopup) {
//     closePopup.addEventListener("click", () => {
//       popup.style.display = "none";
//     });
//   }

//   popup.addEventListener("click", (e) => {
//     if (e.target === popup) {
//       popup.style.display = "none";
//     }
//   });

//   nextBtn.addEventListener("click", () => {
//     currentIndex = (currentIndex + 1) % images.length;
//     showImage(currentIndex);
//   });

//   prevBtn.addEventListener("click", () => {
//     currentIndex = (currentIndex - 1 + images.length) % images.length;
//     showImage(currentIndex);
//   });

//   document.addEventListener("keydown", (e) => {
//     if (popup.style.display === "block") {
//       if (e.key === "ArrowRight") {
//         currentIndex = (currentIndex + 1) % images.length;
//         showImage(currentIndex);
//       } else if (e.key === "ArrowLeft") {
//         currentIndex = (currentIndex - 1 + images.length) % images.length;
//         showImage(currentIndex);
//       } else if (e.key === "Escape") {
//         popup.style.display = "none";
//       }
//     }
//   });

//   // --- SCROLL CONTACTO ---
//   contactoLink.addEventListener("click", function (e) {
//     e.preventDefault();
//     closeMenu();
//     const contactoSection = document.getElementById("contacto");
//     if (contactoSection) {
//       contactoSection.scrollIntoView({ behavior: "smooth" });
//     }
//   });
// });
