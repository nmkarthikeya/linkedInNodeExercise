const fs = require("fs");

if(fs){

    if(fs.existsSync("your-files-here")){

        console.log("Already exists");

    }else{

        fs.mkdir("your-files-here", function(err){
            if(err){
                console.log(`Error: ${err}`);
            }else{
                console.log("directory created");
            }
        } );

    }
    
}