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

const mediaQuery = window.matchMedia("(max-width: 767px)");

function handleChanges(e) {
  if (e.matches) {
    document.querySelector(".reviews-link").href = "";
    document.querySelector(".reviews-link").classList.add("isDisabled");
    // document.querySelector(".reviews-link").style.backgroundColor = "red";
    console.log("ready!");
  } else {
    document.querySelector(".reviews-link").href = "#";
    document.querySelector(".reviews-link").classList.remove("isDisabled");
    // document.querySelector(".reviews-link").style.backgroundColor = "green";
  }
}

mediaQuery.addListener(handleChanges);

handleChanges(mediaQuery);
