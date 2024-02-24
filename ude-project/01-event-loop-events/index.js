const fs = require("fs");
const dns = require("dns");

const info = (text) => console.log(text, performance.now().toFixed(2));

info("Program Start");

// Timeouts
setTimeout(() => info("Timeout 1"), 0);
setTimeout(() => {
  process.nextTick(() => info("Next tick 2"));
  info("Timeout 2");
}, 100);

// Close events
fs.writeFile("./test.txt", "Hello Node.js", () => info("File written"));

// Promises
Promise.resolve().then(() => info("Promise 1"));

// Next tick
process.nextTick(() => info("Next Tick 1"));

// setImmediate
setImmediate(() => info("Imidiate 1"));

// setIntervals
let intervalCount = 0;
const intervalId = setInterval(() => {
  info(`Interval ${(intervalCount += 1)}`);
  if (intervalCount === 2) clearInterval(intervalId);
}, 50);

// I/O events
dns.lookup("localhost", (err, address, family) => {
  info("DNS 1 localhost", address);
  Promise.resolve().then(() => info("Promise 2"));
});

info("Program End");
