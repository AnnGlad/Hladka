let doubleSlider = document.querySelector(".double-slider");
let sliderTrack = document.querySelector("#slider-1 .slider-track");
// let sliderTrack = document.querySelector(".slider-track");


let sliderItemsAll = sliderTrack.querySelectorAll(".slide").length;
let sliderItem = sliderTrack.querySelector(".slide");
let slideHeight = sliderItem.offsetHeight;

sliderTrack.style.height = slideHeight * sliderItemsAll;
let slider = document.querySelector("#slider-1");
let sliderList = document.querySelector("#slider-1 .slider-list");
// let slider = document.querySelector(".slider");
// let sliderList = document.querySelector(".slider-list");

sliderList.style.height = slideHeight + "px";
console.log(sliderTrack);
console.log(sliderItem);
console.log(slideHeight);
console.log(sliderItemsAll);


let counterUp = 0;
let counterDown = 0;
doubleSlider.onclick = function (event) {
  let target = event.target;
  // console.log(target);
  if (target == this.querySelector(".slider-btn__up")) {


    // if (counterUp == 0) {
    //   sliderTrack.style.transform = "translate3d(0px, -" + ((slideHeight * (sliderItemsAll - 1)) + 20) + "px, 0px)";
    //   counterUp++;
    // } else if (sliderItemsAll > counterUp) {
    //   sliderTrack.style.transform = "translate3d(0px, -" + ((slideHeight * counterUp) + 20) + "px, 0px)";

    // }
    console.log("up");
  }

  if (target == this.querySelector(".slider-btn__down")) {
    counterDown++;
    if (sliderItemsAll > counterDown) {
      sliderTrack.style.transform = "translate3d(0px, -" + ((slideHeight * counterDown) + 20) + "px, 0px)";
    } else {
      sliderTrack.style.transform = "translate3d(0px, 0px, 0px)";
      counterDown = 0;
    }

    console.log("down");
  }

}


