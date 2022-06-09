const button = document.querySelector("#button");
const body = document.getElementById("body");
const gradientTitle = document.querySelector("#gradient");

const hexNumbers = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];

button.onclick = getColor;

function getColor() {
  let color1 = "#",
    color2 = "#",
    color3 = "#";

  for (let i = 0; i < 6; i++) {
    let random1 = Math.floor(Math.random() * hexNumbers.length);
    color1 += hexNumbers[random1];
    let random2 = Math.floor(Math.random() * hexNumbers.length);
    color2 += hexNumbers[random2];
    let random3 = Math.floor(Math.random() * hexNumbers.length);
    color3 += hexNumbers[random3];
  }
  body.style.background = `linear-gradient(90deg, ${color1}, ${color2}, ${color3})`;
  gradientTitle.innerHTML = `linear-gradient(90deg, ${color1}, ${color2}, ${color3});`;
}
