let button = document.getElementById("btn");

// button.addEventListener("click" , ()=> {
//     // alert("Button Clicked");
//     document.querySelector(".box").innerHTML = "Below button is clicked";
// })

// button.addEventListener("dblclick" , ()=> {
//     // alert("Button Clicked");
//     document.querySelector(".box").innerHTML = "Below button is clicked";
// })

button.addEventListener("contextmenu" , ()=> {
    alert("Don't hack us by right click please");
    // document.querySelector(".box").innerHTML = "Don't hack us by right click please";
})

document.addEventListener("keydown" , (e) => {
    console.log(e);
})