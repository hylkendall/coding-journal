// 实验 1：数字用 = 5 6
let x = 5;
let y = x;
y = 6;
console.log("实验1:", x, y);

// 实验 2：数组用 = [1, 2, 3][1, 2, 3]
const a = [1, 2];
const b = a;
b.push(3);
console.log("实验2:", a, b);
console.log("实验2:", a === b);

// 实验 3：同一个数组放进两个格子[[1, 2, 9], [1, 2]]❌
const inner = [1, 2];
const outer = [inner, inner];
outer[0].push(9);
console.log("实验3:", outer);

console.log("实验3:", inner);               // 数组①本身
console.log("实验3:", outer[0] === outer[1]); // 两格是不是同一个
const outer2 = [[1, 2], [1, 2]];
outer2[0].push(9);
console.log("实验3:", outer2);
console.log("实验3:", outer2[0] === outer2[1]);


// 实验 4：自己手写一个浅拷贝：新外层 + 每格做一次 =
const grid = [[1, 2], [3, 4]];
const handCopy = [grid[0], grid[1]];
handCopy[0].push(5);
console.log("实验4:", grid);
console.log("实验4:", handCopy[0] === grid[0]);

// 实验 5：换掉 vs 改里面（用变量）[1,8] [7]
let p = [1];
let q = p;
q.push(8);
q = [7];
console.log("实验5:", p, q);