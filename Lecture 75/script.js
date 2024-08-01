console.log("1st Log");
console.log("2nd Log");

setTimeout(() => {
    console.log("3rd Log");
}, 0);
setTimeout(() => {
    console.log("4th Log");
}, 0);

console.log("5th Log");

const fn = () => {
    console.log("Nothing");
}


const callback = (arg, fn) => {
    console.log(arg);
    fn();
}


const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Script has been loaded" , fn);
    document.head.append(sc);
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js" , callback);

