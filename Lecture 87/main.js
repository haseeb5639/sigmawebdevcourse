const fs = require("fs");
// console.log(fs);

console.log("File Write Starting...");
// fs.writeFileSync("harry.txt" , "Harry is a good boy");
fs.writeFile("harry2.txt", "Harry is a good boy 2", () => {
    console.log("File Write Done");
    fs.readFile("harry2.txt", (error, data) => {
        console.log(error, data.toString());
    })

})
fs.appendFile("harry.txt", " harryrobo", (e, d) => {
    console.log(d.toString());

})
console.log("File Write Finished!");
