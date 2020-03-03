"use strict";
let cartProdHolder = document.querySelector(".cart__prod-holder");
let cartItems = document.getElementsByClassName("cart__prod-col");
let cartContainer = document.querySelector(".cart-section .container");
let cartSection = document.querySelector(".cart-section");
let emptyBag = document.querySelector(".btn-empty-bag");
let headerTotal = document.getElementById("cart-total-header");
let headerQuantity = document.getElementById("cart-quantity-header");
let checkoutBtn = document.querySelector(".btn-checkout");

cartProdHolder.onclick = function (event) {
  let target = event.target;
  // console.log(target);
  let removeItemBtn = target.className.includes("btn-remove");
  let plusBtn = target.className.includes("btn-plus");
  let minusBtn = target.className.includes("btn-minus");
  if (removeItemBtn) {
    let cartItem = target.parentNode.parentNode.parentNode.parentNode;
    let quantity = target.parentNode.querySelector(".quantity-input").value;
    // console.log(quantity);
    cartItem.remove();
    if (cartItems.length == 0) {
      emptyMsg();
      emptyHeaderCart();
    }
  }
  if (plusBtn) {
    let currentInput = target.parentNode.querySelector(".quantity-input");
    let val = parseInt(target.parentNode.querySelector(".quantity-input").value);
    let chageVal = 1;
    chageVal += val;
    currentInput.value = chageVal;

    // console.log(chageVal);
  }
  // if (minusBtn) {
  // }
}

emptyBag.onclick = function () {
  let question = confirm("Delete all items from the cart?");
  if (question) {
    emptyMsg();
    emptyHeaderCart();
  }
}

function emptyMsg() {
  let emptyMessage = (
    `<div class="cart-message container">
        <p class="cart-message__text">Your shopping bag is empty. Use <a href="catalog.html">Catalog</a> to add new items</p>
      </div>`);
  cartSection.innerHTML = emptyMessage;
}
function emptyHeaderCart() {
  headerTotal.innerHTML = "";
  headerQuantity.innerHTML = "0";
}
function checkoutMessage() {
  let message = (
    `<div class="cart-message container">
        <p class="cart-message__text">Thank you for your purchase <b>&#10084;</b></p>
      </div>`);
  cartSection.innerHTML = message;
}
if (cartItems.length != 0) {

  checkoutBtn.addEventListener("click", function () {
    checkoutMessage();
    emptyHeaderCart();
  })
}


// if (cartItems.length != 0) {
//   let quantities = document.querySelectorAll(".quantity-input");
//   quantities.forEach(function (el) {
//     el.addEventListener("change", validateInput);

//   })
// }
// function validateInput(inputVal) {
//   console.log("change");
//   // console.log(this);
//   // let reg = new RegExp("^\d+$");
//   // let reg = new RegExp("^[1-9]\d*$");
//   // if (!(inputVal.value.match(reg))) {
//   //   alert("Please enter only positive integers.");
//   //   inputVal.value = 1; //(*extra miles: or chage to localstorage value from map)
//   // }
// }

