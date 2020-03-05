function slider(id) {
  let slider = document.getElementById(id);
  let sliderList = slider.querySelector(".slider-list");
  let sliderTrack = slider.querySelector(".slider-track");
  let sliderItems = sliderTrack.getElementsByClassName("slide");
  let itemHeights = []
  for (let i = 0; i < sliderItems.length; i++) {
    itemHeights.push(sliderItems[i].offsetHeight);
  }
  let maxItemHeight = Math.max.apply(null, itemHeights);
  for (let i = 0; i < sliderItems.length; i++) {
    sliderItems[i].style.height = maxItemHeight + "px";
  }
  let sliderItem = sliderTrack.querySelector(".slide");
  let sliderItemHeight = sliderItem.offsetHeight;
  sliderTrack.style.height = sliderItemHeight * sliderItems.length;
  sliderList.style.height = sliderItemHeight + "px";


  let counterUp = sliderItems.length;
  let counterDown = 0;

  slider.onclick = function (event) {
    let target = event.target;
    if (target == this.querySelector(".slider-btn__up")) {
      counterUp--;

      let curentItem = findCurrentItem(sliderItems);

      if (curentItem > 1) {
        sliderTrack.style.transform = "translate3d(0px, -" + (sliderItemHeight * counterUp) + "px, 0px)";
        sliderItems[curentItem - 1].classList.remove("current");
        sliderItems[counterUp].classList.add("current");
      } else {

        sliderTrack.style.transform = "translate3d(0px, -" + (sliderItemHeight * (sliderItems.length - 1)) + "px, 0px)";
        sliderItems[0].classList.remove("current");
        sliderItems[sliderItems.length - curentItem].classList.add("current");

        if (counterUp < 0) {
          counterUp = sliderItems.length - 1;
        }

      }
    }

    if (target == this.querySelector(".slider-btn__down")) {
      let curentItem = findCurrentItem(sliderItems);
      counterDown++;
      if (curentItem < sliderItems.length) {
        sliderTrack.style.transform = "translate3d(0px, -" + (sliderItemHeight * counterDown) + "px, 0px)";
        sliderItems[(counterDown - 1)].classList.remove("current");
        sliderItems[counterDown].classList.add("current");
      } else {
        sliderTrack.style.transform = "translate3d(0px, 0px, 0px)";
        sliderItems[(counterDown - 1)].classList.remove("current");
        counterDown = 0;
        sliderItems[counterDown].classList.add("current");
      }
    }
  }

}

function findCurrentItem(arr) {
  let current;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].className.includes("current")) {
      current = i + 1;
    }
  }
  return current;
}

window.onload = function () {
  slider("slider-1");
  slider("slider-2");

}

