const fs = require("fs");

// fs.readFile("./chat-logs/george-ben-chat.log","utf-8", (err,chatLog) => {
//     console.log(`File read ${chatLog.length}`)
// });

// console.log("Reading the file")


let stream = fs.createReadStream("./chat-logs/george-ben-chat.log","utf-8");
let data;

stream.once("data", (chunk) =>{
    console.log("read stream started");
    console.log("=====================");
    console.log(chunk)
});

stream.on("data",(chunk) => {
    console.log(`chunk size: ${chunk.length} `);
    data += chunk;
})

stream.on("end", () => {
    console.log(`Finished ${data.length} `)
})

console.log("reding file....")