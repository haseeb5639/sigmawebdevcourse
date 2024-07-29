function createCard(title, cName, views, monthsOld, duration) {
    console.log(title);
    document.querySelector(".title").innerHTML = title;
    document.querySelector(".stats").children[0].innerHTML = cName;
    document.querySelector(".stats").children[2].innerHTML = views;
    document.querySelector(".stats").children[4].innerHTML = monthsOld;
    document.querySelector(".Duration-Text").innerHTML = duration;
    

}

createCard("JavaScript Exercise 13 - Dynamic Website Builder | Sigma Web Development Course - Tutorial #73", "Code With Haseeb" , "1.1M Views" , "11 Months Ago" , "33:54");



