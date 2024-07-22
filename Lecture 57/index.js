console.log("Loops Tutorial");

// for loop
for (let i = 0; i < 100; i++) {

    console.log(i + 1);
}

let obj = {
    name: "Harry",
    role: "Programmer",
    company: "CodeWithHarry AI"
}

// for in loop
for (const key in obj) {
    const element = obj[key];
    console.log(key, element);
}

// for off loop
for (const c of "Harry") {
    console.log(c);
}

// while loop
let i = 0;
while (i < 6) {
    console.log(i);
    i++;
}

//do while loop
let v = 10;
do {
    console.log(v);
    v++;
} while (v < 6);