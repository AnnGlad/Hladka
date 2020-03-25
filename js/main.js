"use strict";
let searchBtn = document.querySelector(".header-menu-search");
let searchIc = document.querySelector(".header-menu-search__ic");
let searchInput = document.querySelector(".header-menu-search__input");
if (matchMedia) {
  let mobileView = window.matchMedia("(max-width: 767px)");
  mobileView.addListener(mobileMenu);
  mobileMenu(mobileView);
  let tabletView = window.matchMedia("(min-width: 768px) and (max-width: 1023px)");
  tabletView.addListener(tabletSearch);
  tabletSearch(tabletView);
}


function mobileMenu(query) {
  if (query.matches) {
    let menuBtn = document.querySelector(".menu-btn");
    let menu = document.querySelector(".header-menu-wrapper");
    let header = document.querySelector(".header");
    menuBtn.onclick = function () {
      menuBtn.classList.toggle("active");
      menu.classList.toggle("active");
      header.classList.toggle("fixed");
    }
  }
}
function tabletSearch(query) {
  if (query.matches) {
    searchIc.onclick = function () {
      searchBtn.classList.toggle("active");
    };
    searchInput.onkeyup = function (event) {
      if (event.keyCode === 13) {
        searchBtn.classList.toggle("active");
        // here may be search function
        searchInput.value = null;
        searchInput.placeholder = "Style Name";
      }
    }
  }
};
