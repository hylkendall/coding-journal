console.log(1 && "a" && 3);
console.log("x" && null && 0);
console.log(0 || "" || "b" || 5);
console.log(0 || "" || null);
console.log(null ?? undefined ?? 0 ?? 5);
let nickname = "";
console.log(nickname || "匿名");
console.log(nickname ?? "匿名");
console.log("finalLine");


const max = 10;
const min = 5;
console.log(Math.floor(0 * (max - min + 1)) + min);      // 最小能抽到几
console.log(Math.floor(0.999 * (max - min + 1)) + min);  // 最大能抽到几
console.log(Math.floor(0.999 * (max - min)) + min);      // 不加 1，最大是几