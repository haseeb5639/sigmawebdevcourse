function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randomColorR = getRandomInt(0, 256);
let randomColorG = getRandomInt(0, 256);
let randomColorB = getRandomInt(0, 256);

function GenerateRandomColors() {
    randomColorR = getRandomInt(0, 256);
    randomColorG = getRandomInt(0, 256);
    randomColorB = getRandomInt(0, 256);
}

let AllBoxes = document.getElementsByClassName("box");
for (let index = 0; index < AllBoxes.length; index++) {
    GenerateRandomColors();
    AllBoxes[index].style.backgroundColor = `rgb(${randomColorR}, ${randomColorG}, ${randomColorB})`;
}