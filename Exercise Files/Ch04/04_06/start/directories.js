const fs = require("fs");

// fs.renameSync("./assets/logs", "./accounts/logs");

// console.log("logs folder moved");


// fs.rmdir("./assets", (err) => {
//     if(err){
//         throw err;
//     }else{
//         console.log("assets dir removed");
//     }
// })

fs.readdirSync("./accounts").forEach( (file) => {
    fs.renameSync(`./accounts/${file}`, `./lib/${file}`)
} );

console.log("files removed");
fs.rmdirSync("./accounts");
console.log("folder removed");