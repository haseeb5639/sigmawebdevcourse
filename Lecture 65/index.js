// let number = 6;
// let factorial = 1;
// for (let index = number; index > 0; index--) {
//     const element = index;
//     console.log(element);
//     factorial *= index;
// }

// console.log(factorial);


let number = 6;
let numbersViaArray = [];
for (let index = number; index > 0; index--) {
    numbersViaArray.push(index);
}
console.log(numbersViaArray);

factorial = numbersViaArray.reduce(FactorialCalculation);

function FactorialCalculation(a, b){
    return a*b;
}

console.log(factorial);