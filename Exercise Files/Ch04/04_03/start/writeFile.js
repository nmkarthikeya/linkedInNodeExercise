const fs = require("fs");

let md = `
    This is a new file
    ==================

    *Lets see if this works
    *I guess it would

`;

fs.writeFile("javascript.md",md.trim(), function(err){
    if(err){
        throw err;
    }
    fs.appendFileSync(
        "javascript.md",
        "\n\n ###### node is fun!"
    );
    console.log("file created");
})