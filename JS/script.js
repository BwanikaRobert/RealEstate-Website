"use strict";
const productBox = document.querySelectorAll(".product-box");
let buyEl = document.querySelectorAll("#buy-btn");
let active;
const designBuy = [
  ["backgroundColor", ["#28a3a1", "#28a3a11a"]],
  ["fontSize", ["1.8rem", "1.6rem"]],
  ["color", ["white", "#28a3a1"]],
];

for (const item of productBox) {
  const buyBtn = item.querySelector("#buy-btn");
  item.addEventListener("mouseover", function () {
    item.querySelector("#buy-btn").textContent = "BUY";

    for (const [properttName, propertyValue] of designBuy) {
      buyBtn.style[properttName] = `${propertyValue[0]}`;
    }
  });
  item.addEventListener("mouseout", function () {
    item.querySelector("#buy-btn").textContent = "750/mo";
    for (const [properttName, propertyValue] of designBuy) {
      buyBtn.style[properttName] = `${propertyValue[1]}`;
    }
  });
}

//////////////////////////////////////////////////////////////
// Removing breaking points when the screen size reduces
const tertiaryheadEl = document.querySelectorAll(".heading-tertiary");
let arrStringsAdded = "";
const combineStrings = function (name) {
  for (const item of name) {
    let str = item.trim();
    arrStringsAdded += str;
  }
  return arrStringsAdded;
};
if (window.matchMedia("(max-width: 1216px)").matches) {
  for (const text of tertiaryheadEl) {
    let textTransformed = text.textContent.trim().split("\n");
    text.textContent = combineStrings(textTransformed);
    arrStringsAdded = "";
  }
}
if (window.matchMedia("(max-width:512px)").matches) {
  const strBefore = combineStrings(
    document.querySelector(".cta p").textContent.split("\n")
  );
  arrStringsAdded = "";
  document.querySelector(".cta p").textContent = strBefore.replace(
    "Get",
    "Get "
  );
  console.log(
    combineStrings(document.querySelector(".cta p").textContent.split("\n"))
  );
}

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
