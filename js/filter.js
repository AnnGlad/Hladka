// if (matchMedia) {
//   let mobileAndTabletView = window.matchMedia("max-width: 1023px)");
//   mobileAndTabletView.addListener(tabletSearch);
//   tabletSearch(tabletView);
// let desktopView = window.matchMedia("min-width: 1024px)");
// } else {
//   window.addEventListener("load", function () {
//     if (window.innerWidth < 768) {
//       mobileMenu();
//     } else if (window.innerWidth < 1024) {
//       tabletSearch();
//     }
//   });
// }
// let mobile = false;
// let desktop = true;

// filterList.onmouseover = function (event) {
//   let target = event.target;
//   console.log(target);


// }
// console.log(filterList);
function desktopFilterView() {
  let filterList = document.querySelector(".filters-list");
  let flelterSelects = filterList.querySelectorAll(".filter-select");
  flelterSelects.forEach(element => {
    element.addEventListener("mouseover", desktopValueChanger);
    // console.log(element);
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
      items.forEach(el => {
        let selected = el.className.includes("subfilter__value_selected");
        if (selected) {
          el.classList.remove("subfilter__value_selected");
        }
      });
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
    }

  }
}
desktopFilterView();