console.log("Hello i am conditional Tutorial")

let age = 3;
let grace = 2;

age += grace;

console.log(age);
console.log(age - grace);
console.log(age * grace);
console.log(age / grace);
console.log(age ** grace);
console.log(age % grace);

if (age + grace > 18) {
    console.log("you can drive");
}
else {
    console.log("You can not drive");
}

let val1 = 6;
let val2 = 7;

let c = val1 > val2 ? (val1 + val2) : (val1 - val2);
console.log(c);