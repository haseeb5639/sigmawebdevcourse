function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(document.body.firstElementChild.innerHTML);

async function AddWait() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, getRandomInt(1, 6) * 1000);
    })
}

// async function getData() {
//     // Simulate getting data from a server
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455);
//         }, 3500);
//     })
// }


// Promise(resolve => setTimeout(resolve, 3000));


async function HackingTerminal() {
    console.log('Before Waiting');
    await AddWait();
    console.log('After waiting');
    let hackingtexts = document.body.getElementsByClassName("hackingtexts");
    console.log(hackingtexts);

    hackingtexts[0].innerHTML = "Initializing Hacking...";
    await AddWait();
    hackingtexts[1].innerHTML = "Reading Your Files...";
    await AddWait();
    hackingtexts[2].innerHTML = "Password files Detected...";
    await AddWait();
    hackingtexts[3].innerHTML = "Uploading all the personal files and passwords to the server...";
    await AddWait();
    hackingtexts[3].innerHTML = "Uploading Successful...";
}

HackingTerminal();