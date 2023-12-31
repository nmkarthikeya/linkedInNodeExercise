const fs = require("fs");
const { connected } = require("process");

// fs.renameSync("./lib/config.js", "./lib/project-config.js");

// console.log("config.js file renamed");

// fs.rename("./lib/nodes.md", "./notes.md", function(err){

//     if(err){
//         throw err;
//     }

//     console.log("file moved")

// });

// fs.unlinkSync("./lib/project-config.js");
// console.log("File deleted");


fs.unlink("./notes.md", function(err){
    if(err){
        throw err;
    }
    console.log("notes is gone");
})