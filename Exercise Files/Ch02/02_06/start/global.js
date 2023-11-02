const waitTime = 3000;

console.log(`setting a wait time of ${waitTime/1000} seconds`);

const timeOver = () => { 
  clearInterval(interval);
  console.log("\n");
  console.log("done");
};

setTimeout(timeOver,waitTime);

const waitInterval = 500;
let currentTime = 0;

const increamentTime = () => {
  currentTime += waitInterval;
  const p = Math.floor( (currentTime / waitTime) * 100);
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(`wating... ${p}`);

  // console.log(`waiting ${currentTime/1000} seconds`);
}

const interval = setInterval(increamentTime,waitInterval);