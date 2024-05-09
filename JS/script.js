const productBox = document.querySelectorAll(".product-box");
let buyEl = document.querySelectorAll(".buy-btn");

console.log(buyEl);
// buyEl.textContent = "BUY";

for (const item of productBox) {
  item.addEventListener("mouseover", function () {
    item.querySelector(".buy-btn").textContent = "BUY";
    item.querySelector(".buy-btn").classList.add("buy");
  });
  item.addEventListener("mouseout", function () {
    item.querySelector(".buy-btn").classList.remove("buy");
    item.querySelector(".buy-btn").textContent = "750/mo";
  });
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
