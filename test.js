// 100 items in the array
const items = Array.from({ length: 100 }, (_, i) => i);

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const doHeavyTask = () => {
    return wait(1000);
}
console.log("!!Start");
// foreach do task and defer 100ms
items.forEach(async (item) => {
    console.log("Start task: ", item);
    await doHeavyTask();
    console.log("End task: ", item);
    await wait(100);
});
console.log("!!End");
