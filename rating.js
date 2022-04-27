const btn = document.querySelector("button");
const appreciation = document.querySelector(".appreciation");
const selection = document.querySelector(".sel2");
const container = document.querySelector(".container");
const inputs = document.getElementsByName("rate");
console.log(inputs);

function displayRating() {
  container.style.display = "none";
  appreciation.style.display = "block";

  for (i = 0; i < inputs.length; i++) {
    if (inputs[i].checked) {
      selection.textContent = `You selected ${inputs[i].value} out of 5`;
    }
  }
}

btn.addEventListener("click", displayRating);
