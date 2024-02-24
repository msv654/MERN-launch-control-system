import process from 'process';

console.log('Hello World');

let intervalCount = 0;
const intervalId = setInterval(() => {
    intervalCount += 1;
    if (intervalCount === 10) {
        clearInterval(intervalId);
        return console.log(`Goodbye World after ${intervalCount} seconds`);
    }
}, 1000);

process.on('SIGINT', () => {
    console.log(`Stopped by user after ${intervalCount} seconds`);
    process.exit();
});
