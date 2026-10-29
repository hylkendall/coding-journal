const msg = "Hello, world!";
console.log(msg.includes("world"));
console.log(msg.includes("World"));
console.log(msg.includes("Hello", 1));
console.log(msg.slice(0, 5));
console.log(msg.slice(7));
console.log(msg.slice(-6));
console.log(msg.slice(7, -1));
console.log(msg);


const raw = "  Hi, JS!  ";
const clean = raw.trim();
console.log(`|${raw}|`);
console.log(`|${clean}|`);
console.log(`|${raw.trimStart()}|`);
console.log(`|${raw.trimEnd()}|`);
console.log(raw.length);
console.log(clean.length);
console.log(clean.toUpperCase());
const lower = clean.toLowerCase();
console.log(lower);
console.log(clean.includes("js"));
console.log(lower.includes("js"));
console.log(`|${raw}|`);


const pets = "cat, Cat, cat";
console.log(pets.replace("cat", "dog"));
console.log(pets.replaceAll("cat", "dog"));
console.log(pets.toLowerCase().replaceAll("cat", "dog"));
console.log(pets);
console.log(`|${"ha ".repeat(3)}|`);
console.log(`|${"ha ".repeat(3).trimEnd()}|`);
console.log(`|${"ha".repeat(0)}|`);
console.log("ha".repeat(-1));
console.log("end");