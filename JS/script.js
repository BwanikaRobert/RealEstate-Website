const priceEl = document.getElementsByClassName("buy-btn");
const productbox = document.getElementsByClassName("product-box");
console.log(priceEl);

productbox[2].addEventListener("click", function () {
  priceEl[2].style.fontWeight = "600";
  priceEl[2].style.fontSize = "1.4rem";
  priceEl[2].style.color = "#fff";
  priceEl[2].style.padding = " 1.7rem 2rem 1rem 2rem;";
  priceEl[2].style.backgroundColor = "#28a3a1";
});
// for (var i = 0; i < productbox.length; i++) {
//   productbox[i].addEventListener(
//     "mouseover",
//     function () {
//       priceEl[i].style.fontWeight = "600";
//       priceEl[i].style.fontSize = "1.4rem";
//       priceEl[i].style.color = "#fff";
//       priceEl[i].style.padding = " 1.7rem 2rem 1rem 2rem;";
//       priceEl[i].style.backgroundColor = "#28a3a1";
//     },
//     false
//   );
//   // productbox[i].addEventListener("mouseout", function () {
//   //   priceEl.textContent = "$750/mo";
//   //   priceEl.style.fontWeight = "500";
//   //   priceEl.style.color = "#28a3a1";
//   //   priceEl.style.backgroundColor = "#28a4a21a";
//   // });
// }
