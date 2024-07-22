console.log("Hello World");
console.log("Hello World 1");
console.log("Hello World 2");
console.log("Hello World 3");

function hello(name) {
    console.log("Hello " + name);
}

hello("Haseeb");
hello("Harry");

function sum(a, b){
    console.log(a + b);
}

function sumWithReturn(a, b){
    return a + b;
}

function sumWithDefaultValue(a, b, c=3){
    return a + b + c;
}

result = sumWithReturn(5,5);
result1 = sumWithDefaultValue(5,9);
result2 = sumWithDefaultValue(5,9,4);
console.log(result);
console.log(result1);
console.log(result2);

sum(3, 5);


const func1 = (x)=> {
    console.log("Arrow function " + x);
    console.log(20 + x);
}

func1(34);