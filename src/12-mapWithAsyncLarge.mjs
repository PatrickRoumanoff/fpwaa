import { waitThen } from "./wait.js";
const testData = Array.from({ length: 15 }, (_, i) => i);

async function doubler(i) {
    return waitThen(200, (x) => 2 * x, i);
}

console.log(await Promise.all(testData.map(doubler)));

function batchMap({ data, f, batchSize = 10 }) {
    const batch = [];
    for (let i = 0; i < data.length; i += batchSize) {
        batch.push(data.slice(i, i + batchSize));
    }
    return batch.reduce(
        async (acc, d) =>
            (await acc).concat(await Promise.all(d.map(f))),
        []
    );
}

console.log(await batchMap({ data: testData, f: doubler, batchSize: 5 }));
