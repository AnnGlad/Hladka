"use strict";
let cartProdHolder = document.querySelector(".cart__prod-holder");
let cartItems = document.getElementsByClassName("cart__prod-col");
let cartContainer = document.querySelector(".cart-section .container");
let cartSection = document.querySelector(".cart-section");
let emptyBag = document.querySelector(".btn-empty-bag");
let headerTotal = document.getElementById("cart-total-header");
let headerQuantity = document.getElementById("cart-quantity-header");
let cartTotal = document.querySelector(".cart__total-price");
let checkoutBtn = document.querySelector(".btn-checkout");

cartProdHolder.onclick = function (event) {
  let target = event.target;
  let removeItemBtn = target.className.includes("btn-remove");
  let plusBtn = target.className.includes("btn-plus");
  let minusBtn = target.className.includes("btn-minus");
  if (removeItemBtn) {
    let cartItem = target.parentNode.parentNode.parentNode.parentNode;
    let price = target.parentNode.parentNode.parentNode.parentNode.querySelector(".product-item__price").innerHTML;
    recalcTotal(price, target);
    console.log(target);
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
    let price = target.parentNode.parentNode.parentNode.parentNode.querySelector(".product-item__price").innerHTML;
    recalcTotal(price, target);

  }
  if (minusBtn) {
    let val = parseInt(target.parentNode.querySelector(".quantity-input").value);
    let currentInput = target.parentNode.querySelector(".quantity-input");
    let price = target.parentNode.parentNode.parentNode.parentNode.querySelector(".product-item__price").innerHTML;
    if (val > 1) {
      let chageVal = val;
      chageVal -= 1;
      currentInput.value = chageVal;
      recalcTotal(price, target);
    }
  }
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

function recalcTotal(price, btn) {
  price = parseFloat(price.slice(1));
  let curHeaderPrice = parseFloat(headerTotal.innerHTML.slice(1));
  let headerQuantityVal = parseInt(headerQuantity.innerHTML);
  if (btn.className == "btn-plus") {
    let newTotal = "£" + (curHeaderPrice + price).toFixed(2);
    headerQuantityVal++;
    headerTotal.innerHTML = newTotal;
    cartTotal.innerHTML = newTotal;
  }
  if (btn.className == "btn-minus") {
    let newTotal = "£" + (curHeaderPrice - price).toFixed(2);
    if (headerQuantityVal != 0) {
      headerQuantityVal--;
    }
    headerTotal.innerHTML = newTotal;
    cartTotal.innerHTML = newTotal;
  }
  if (btn.className.includes("btn-remove")) {
    let quantity = btn.parentNode.querySelector(".quantity-input").value;
    let newTotal = "£" + (curHeaderPrice - (price * quantity)).toFixed(2);
    if (headerQuantityVal != 0) {
      headerQuantityVal -= quantity;
    }
    headerTotal.innerHTML = newTotal;
    cartTotal.innerHTML = newTotal;
  }
  headerQuantity.innerHTML = headerQuantityVal;
}
