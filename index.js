// MENU RESPONSIVE
let btnMenuOpen = document.getElementById("btnMenuOpen"),
    btnMenuClose = document.getElementById("btnMenuClose"),
    menuResponsive = document.getElementById("nav"),
    enlaces = document.getElementById("links")

    // CLICK OPEN

    btnMenuOpen.addEventListener("click" , () => {
        menuResponsive.classList.add("active")
    })

    // CLICK CLOSE

    btnMenuClose.addEventListener("click" , () => {
        menuResponsive.classList.remove("active")
    })

    // CLOSE MENU WITH A ELEMENTS

    enlaces.addEventListener("click" , () => {
        menuResponsive.style.transitionDelay = "0.5s"
        menuResponsive.classList.remove("active")
    })


// SLIDER PROD

let container = document.querySelector(".slider"),
      btnLeft = document.getElementById("btn-left"),
      btnRight = document.getElementById("btn-right");

      // BTN RIGHT EVENT

      btnRight.addEventListener("click" , () => {
        container.scrollLeft += container.offsetWidth;
      })

      // BTN LEFT EVENT

      btnLeft.addEventListener("click" , () => {
        container.scrollLeft -= container.offsetWidth;
      })

