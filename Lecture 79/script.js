let a = prompt("Enter a number");

let b = prompt("Enter Second Number");
if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorry this is not allowed");
}
let sum = parseInt(a) + parseInt(b);

function main() {
    try {
        console.log("the sum is ", sum);
        return sum;
    } catch (error) {
        console.log("Error is " + error);
        return error;
    }
    finally {
        console.log('Files are being closed and db connection is being closed');

    }
}

main();


