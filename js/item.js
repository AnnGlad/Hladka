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
