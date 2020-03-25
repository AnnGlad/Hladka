"use strict";
if (matchMedia) {
  let desktop = window.matchMedia("(min-width: 1024px)");
  desktop.addListener(filterView);
  filterView(desktop);
}
function filterView(query) {
  if (query.matches) {
    desktopFilterView();
  } else {
    mobFilterView();
  }
}

function desktopFilterView() {
  let filterList = document.querySelector(".filters-list");
  let flelterSelects = filterList.querySelectorAll(".filter-select");
  flelterSelects.forEach(element => {
    element.addEventListener("mouseover", desktopValueChanger);
    element.addEventListener("mouseover", hoverChanger);
  });

}
function desktopValueChanger() {
  let subfilter = this.querySelector(".subfilter");
  subfilter.onclick = function (event) {
    let target = event.target;
    let select = this.parentNode;
    if (target != subfilter) {
      let selectVal = select.querySelector(".filter-select-values");
      let items = subfilter.querySelectorAll(".subfilter__value");
      removeClassFromItem(items);
      target.classList.toggle("subfilter__value_selected");
      let itemText = target.innerText;
      let itemVal = target.getAttribute("data-val");
      let selectValText = selectVal.querySelector(".filter-select__value");

      if (itemVal != 0) {
        let selectedItem = document.createElement("span");
        selectedItem.className = "filter-select__value";
        selectedItem.innerText = itemText;
        if (select.className.includes("selected")) {
          selectValText.remove();
          selectVal.append(selectedItem);
        } else {
          select.classList.add("selected");
          selectVal.append(selectedItem);
        }
      } else {
        if (select.className.includes("selected")) {
          select.classList.remove("selected");
          selectValText.remove();
        }
      }
      subfilter.classList.add("hide");
    }
  }

}

function hoverChanger() {
  let subfilter = this.querySelector(".subfilter");
  if (subfilter.className.includes("hide")) {
    subfilter.classList.remove("hide");
  }
}

function mobFilterView() {
  let filterBtn = document.querySelector(".filter-top__btn");
  let filterList = document.querySelector(".filters-list-wrap");
  filterBtn.onclick = function () {
    this.classList.toggle("open");
    filterList.classList.toggle("active");
  }

  filterList.onclick = function (event) {
    let target = event.target;
    if (target.className.includes("subfilter__value")) {
      let item = target;
      let itemVal = target.getAttribute("data-val");

      let items = item.parentNode.querySelectorAll(".subfilter__value");
      removeClassFromItem(items);
      item.classList.toggle("subfilter__value_selected");
      let filterName = item.parentNode.parentNode.querySelector(".filter-select__name").innerText;
      let filterNameSmallText = filterName.toLowerCase()
      let span;

      if (filterNameSmallText.includes("product")) {
        span = document.getElementById("filter-product");
      }
      if (filterNameSmallText.includes("fashion")) {
        span = document.getElementById("filter-fashion");
      }
      if (filterNameSmallText.includes("color")) {
        span = document.getElementById("filter-color");
      }
      if (filterNameSmallText.includes("size")) {
        span = document.getElementById("filter-size");
      }
      if (filterNameSmallText.includes("brand")) {
        span = document.getElementById("filter-brand");
      }
      if (filterNameSmallText.includes("price")) {
        span = document.getElementById("filter-price");
      }

      if (itemVal != 0) {
        span.innerHTML = target.innerText;
        span.classList.add("selected");
      } else {
        span.innerHTML = filterName;
        span.classList.remove("selected");
      }

    }

  }
}

function removeClassFromItem(arr) {
  arr.forEach(el => {
    let selected = el.className.includes("subfilter__value_selected");
    if (selected) {
      el.classList.remove("subfilter__value_selected");
    }
  });
}