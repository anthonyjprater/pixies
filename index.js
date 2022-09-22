document
  .getElementById("booking-button")
  .addEventListener("click", function (event) {
    event.preventDefault();
  });

function hamburger() {
  let hamburgerNav = document.querySelector(".hamburger-menu-nav-wrapper");
  let headerEl = document.querySelector(".homepage-hero-intro");

  if (hamburgerNav.style.display === "grid") {
    hamburgerNav.style.display = "none";
    headerEl.style.backgroundColor = "unset";
  } else {
    hamburgerNav.style.display = "grid";
    headerEl.style.backgroundColor = "#14131c";
    // headerEl.style.zIndex = "4";
  }
}
