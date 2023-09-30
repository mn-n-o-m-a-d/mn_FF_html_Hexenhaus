console.log("Hallo, ich bin die Hexe Wilhelmina")

const katze = document.querySelector(".katze");
const herz = document.querySelector(".herz");

let anzahl = 0;

function aktualisiereAnzahl() {
    document.querySelector(".zaehler").textContent = anzahl;
}

function miau() {
    new Audio("miau.mp3").play();
}

function zeigeHerz() {
    miau();
    herz.style.display = "block";
    anzahl++;
    aktualisiereAnzahl();
}

function verschwindeHerz(e) {
    e.stopPropagation();
    herz.style.display = "none";
}

const besen = document.querySelector(".besen");
let delta = 10;

function bewegeBesen() {
    const rect = besen.getBoundingClientRect();
    console.log(rect);
    besen.style.left = `$(rect.left + delta)px`;
    delta = -delta;
}

besen.addEventListener("click", bewegeBesen);
katze.addEventListener("click", zeigeHerz);
herz.addEventListener("click", verschwindeHerz);
