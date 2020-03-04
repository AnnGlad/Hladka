let itemView = document.querySelector(".item-view");
let itemFull = itemView.querySelector(".item-view__full img");
let itemSwitcher = itemView.querySelector(".item-view__switcher");
let thumbnails = itemSwitcher.querySelectorAll(".item-view__switcher-thumbnail");
let thumbnailsImages = itemSwitcher.querySelectorAll(".item-view__img");

itemSwitcher.onclick = function (event) {
  let target = event.target;
  thumbnails.forEach(function (element) {
    if (element.className.includes("active")) {
      element.classList.remove("active");
    }
  });
  target.classList.toggle("active");
  switchImg(target);
}

function switchImg(clickedThumb) {
  let imgSrc = clickedThumb.querySelector("img").src;
  let changeSrc;
  let newSrc;
  for (let i = 0; i < thumbnailsImages.length; i++) {
    let thumb = "_thumb-" + i;
    let full = "_full-" + i;
    if (imgSrc.includes(thumb)) {
      changeSrc = imgSrc.split(thumb);
      newSrc = changeSrc.join(full);
    }
  }
  itemFull.src = newSrc;
}

// Header bag
let buyBtn = document.getElementById("buy-btn");
let headerTotal = document.getElementById("cart-total-header");
let headerQuantity = document.getElementById("cart-quantity-header");

buyBtn.onclick = function () {
  let counter = 1;
  let price = document.querySelector(".item-descr__price").innerHTML;
  price = parseFloat(price.slice(1));
  let curHeaderPrice;
  if (headerTotal.innerHTML) {
    curHeaderPrice = parseFloat(headerTotal.innerHTML.slice(1));
  } else {
    curHeaderPrice = 0;
  }
  let headerQuantityVal = parseInt(headerQuantity.innerHTML);
  let newTotal = "£" + (curHeaderPrice + price).toFixed(2);
  headerTotal.innerHTML = newTotal;
  headerQuantity.innerHTML = (headerQuantityVal + counter);
  counter++;
}
