const productBox = document.querySelectorAll(".product-box");
let buyEl = document.querySelectorAll("#buy-btn");
let active;
const designBuy = [
  ["backgroundColor", ["#28a3a1", "white"]],
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
