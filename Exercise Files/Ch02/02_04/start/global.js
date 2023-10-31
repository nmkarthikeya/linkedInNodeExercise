process.stdout.write("Hello ")

const questions = [
"What is your name",
"What do you want to be",
"What language do you like",
];

const answers = [];

function ask(i){
    process.stdout.write(`\n\n ${questions[i]} `);
    process.stdout.write(` > `);
}

process.stdin.on("data",function(data){
    process.stdout.write(data.toString().trim());
});

ask(answers.length);