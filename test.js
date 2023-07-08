// 1000 items in the array
const items = Array.from({ length: 1000 }, (_, i) => i);

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
console.log("!!Start");
// foreach do task and defer 100ms
items.forEach(async (item) => {
    console.log("Start task: ", item);
    await wait(100);
    console.log("End task: ", item);
});
console.log("!!End");
