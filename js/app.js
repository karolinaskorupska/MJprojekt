//on click hamburger menu
const hamburgerMenu = document.getElementById("hamburgerMenu");
const container = document.getElementById("container");
const backgroundImage = document.getElementById("logoImage");

hamburgerMenu.addEventListener("click", function () {
    hamburgerMenu.classList.toggle("active");
    container.classList.toggle("active");
    backgroundImage.classList.toggle("active");

});



