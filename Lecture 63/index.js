let arr = [1, 2, 4, 5, 7];

arr[0] = 5666;
console.log(arr, typeof arr);
console.log(arr.length);
console.log(arr[0]);
console.log(arr[2]);
console.log(arr[4]);
console.log(arr.toString());
console.log(arr.join(" and "));
console.log(arr.pop())
console.log(arr);
console.log(arr.push(55));
console.log(arr);
console.log(arr.push("Harry"));
console.log(arr);
console.log(arr.shift());
console.log(arr);
console.log(arr.unshift(`Jack`));
console.log(arr);
delete arr[5];
console.log(arr);

