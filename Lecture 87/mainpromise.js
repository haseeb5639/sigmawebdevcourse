import fs from "fs/promises"

let a = await fs.readFile("harry.txt")

let b = await fs.appendFile("harry.txt" , "\n\n\n\n\n\nThis is amazing statement")
console.log(a.toString(), b);
