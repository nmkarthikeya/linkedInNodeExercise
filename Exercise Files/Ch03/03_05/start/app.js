const events = require("events");

let emitter = new events.EventEmitter();

emitter.on("myEvent", (message,user) => {

    console.log(` ${user}: ${message} `);

});

emitter.emit("myEvent", "Hello Word", "Computer");
emitter.emit("myEvent", "Pretty Cool", "Karthi");

process.stdin.on( "data", (data) => {

    const input = data.toString().trim();

    if(input === "exit"){
        emitter.emit( "myEvent", "Goodbye!", "process" );
        process.exit();
    }else{
        emitter.emit("myEvent",input,"terminal");
    }

});

