/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  cardGenerator(numeros, simbolos);
};
function cardGenerator(numeros, simbolos) {
  let numrandom = numeros[Math.floor(Math.random() * numeros.length)];
  let simbolosrandom = simbolos[Math.floor(Math.random() * simbolos.length)];
  let colorrandom = colors[Math.floor(Math.random() * colors.length)];

  let header = (document.querySelector("#simbolo1").innerHTML = simbolosrandom);
  let body = (document.querySelector("#numeros1").innerHTML = numrandom);
  let footer = (document.querySelector("#simbolo2").innerHTML = simbolosrandom);
  let palosuperior = document.querySelector("#simbolo1");
  let paloinferior = document.querySelector("#simbolo2");

  palosuperior.style.color = colorrandom;
  paloinferior.style.color = colorrandom;
}

let numeros = ["1", "2", "3", "4", "5", "6", "7"];
let simbolos = ["♠", "♣", "♥", "♦"];
let colors = ["black", "red"];

document.querySelector(".btn").addEventListener("click", () => {
  cardGenerator(numeros, simbolos);
});
