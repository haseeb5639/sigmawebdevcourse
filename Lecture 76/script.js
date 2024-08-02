// async function getData() {
//     // Simulate getting data from a server
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455);
//         }, 3500);
//     })
// }

async function getData() {
    // Simulate getting data from a server
    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    //   .then(response => response.json())
    //   .then(json => console.log(json))

    // let x = fetch('https://jsonplaceholder.typicode.com/todos/1');
    // let data = await (await x).json();
    // console.log(data);


    let x = await fetch('https://jsonplaceholder.typicode.com/posts' , {
        method: 'POST',
        body: JSON.stringify({
            title: 'Goooooogle',
            body: 'Google Body',
            userId: 69,
        }),
        headers: {
            'content-type' : 'application/json; charset=UTF-8',
        },
    })

    let data = await x.json();
    return data;
    
}

// console.log('Loading Modules');
// console.log('Do something else');
// console.log('Load data');

// let data = getData();

// console.log(data);
// console.log('process data');
// console.log('task 2');

// data.then((v) => {

//     console.log(data);
//     console.log('process data');
//     console.log('task 2');

// })

async function main() {
    console.log('Loading Modules');
    console.log('Do something else');
    console.log('Load data');

    let data = await getData();

    console.log(data);
    console.log('process data');
    console.log('task 2');
}

main();





