console.log("Changing Color of Boxes");

let boxes = document.getElementsByClassName("box");
console.log(boxes);

boxes[2].style.backgroundColor = "red";

document.getElementById("green").style.backgroundColor = "green";

document.querySelector(".box").style.backgroundColor = "purple";
document.querySelectorAll(".box").forEach(e => {
    console.log(e);
    e.style.backgroundColor = "green";
})



