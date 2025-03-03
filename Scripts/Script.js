let menuButton = document.getElementById("menu-button");
let menuImage1 = document.getElementById("menu-image1");
let menuImage2 = document.getElementById("menu-image2");
let menuImage = document.getElementById("image-container");

menuButton.addEventListener("click", function () {
  // console.log("clicked");
});
function myFunction(x) {
  if (x.matches) {
    // If media query matches
    menuImage1.style.display = "block";
    menuImage2.style.display = "none";
  } else {
    menuImage1.style.display = "none";
    menuImage2.style.display = "block";
  }
}

// Create a MediaQueryList object
var x = window.matchMedia("(max-width: 500px)");

// Call listener function at run time
myFunction(x);

// Attach listener function on state changes
x.addEventListener("change", function () {
  myFunction(x);
  // console.log(x);
});
