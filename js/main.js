function slider(id) {
  let slider = document.getElementById(id);
  let sliderList = slider.querySelector(".slider-list");
  let sliderTrack = slider.querySelector(".slider-track");
  let sliderItems = sliderTrack.getElementsByClassName("slide");
  let sliderItemsAll = sliderItems.length;
  let itemHeights = []
  for (let i = 0; i < sliderItemsAll; i++) {
    itemHeights.push(sliderItems[i].offsetHeight);
  }
  let maxItemHeight = Math.max.apply(null, itemHeights);
  for (let i = 0; i < sliderItemsAll; i++) {
    sliderItems[i].style.height = maxItemHeight + "px";
  }
  let sliderItem = sliderTrack.querySelector(".slide");
  let sliderItemHeight = sliderItem.offsetHeight;
  sliderTrack.style.height = sliderItemHeight * sliderItemsAll;
  sliderList.style.height = sliderItemHeight + "px";


  let counterUp = 0;
  let counterDown = 0;

  slider.onclick = function (event) {
    let target = event.target;
    if (target == this.querySelector(".slider-btn__up")) {
      counterUp++
      // if (counterUp <= sliderItemsAll && counterUp != 1) {
      //   console.log("to previous");
      //   sliderTrack.style.transform = "translate3d(0px, -" + (sliderItemHeight * counterUp) + "px, 0px)";


      // } else {
      //   console.log("to last");
      //   sliderTrack.style.transform = "translate3d(0px, -" + (sliderItemHeight * (sliderItemsAll - 1)) + "px, 0px)";
      //   counterUp = 1;
      // }

      console.log("up");
    }

    if (target == this.querySelector(".slider-btn__down")) {
      counterDown++;
      if (sliderItemsAll > counterDown) {
        sliderTrack.style.transform = "translate3d(0px, -" + (sliderItemHeight * counterDown) + "px, 0px)";
        sliderItems[(counterDown - 1)].classList.remove("current");
        console.log("to next");
      } else {
        sliderTrack.style.transform = "translate3d(0px, 0px, 0px)";
        sliderItems[(counterDown - 1)].classList.remove("current");
        counterDown = 0;
        console.log("to first");
      }
      sliderItems[counterDown].classList.add("current");
    }
    console.log("down");
  }

}

window.onload = function () {
  slider("slider-1");
  slider("slider-2");

}
