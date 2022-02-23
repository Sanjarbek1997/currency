let elForm = document.querySelector(".form");
let elInput = document.querySelector("#input");
let elSelect = document.querySelector("#currency");
let elText = document.querySelector(".text-currency");

const USD_TO_UZS = 10845;
const USD_TO_RUBL = 81;
const USD_TO_EURO = 0.88;

elForm.addEventListener("submit", function (e) {
  e.preventDefault();
  if (elInput.value > 0) {
    if (elSelect.value === "UZS") {
      elText.innerHTML = `${elInput.value} dollar ${
        elInput.value * USD_TO_UZS
      } so'm bo'ladi`;
    } else if (elSelect.value === "RUBL") {
      elText.innerHTML = `${elInput.value} dollar ${
        elInput.value * USD_TO_RUBL
      } rubl bo'ladi`;
    } else if (elSelect.value === "EURO") {
      elText.innerHTML = `${elInput.value} dollar ${
        elInput.value * USD_TO_EURO
      } euro bo'ladi`;
    }
  } else if (elInput.value == 0) {
      elText.innerHTML = "Oldin pul ishlab toping";
} else {
    elText.innerHTML = `Kechirasiz aka o'ylab ish qiling !!!`;
  }
});
