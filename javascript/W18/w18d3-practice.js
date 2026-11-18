// W18D3 数组练习（11/18）
// 用法：在 VS Code 里写，终端跑 `node w18d3-practice.js`，对照每行注释里的「应打印」。
// 规则：不用循环（模块 6 才教）。能用的：函数、if/else、模板字符串、字符串方法，
//       以及本模块学过的数组写法：索引读写、push/pop/shift/unshift、splice、indexOf、
//       includes、解构、浅拷贝、split/reverse/join。
// 做完一题就把代码贴过来；预测题贴你的预测。

// ============ 练习 1：用 splice 在中间插入、删除 ============
// insertAt(arr, index, item)：把 item 插到 index 位置，一个都不删，返回 arr。
// removeAt(arr, index)：删掉 index 位置的元素，返回被删的那个「元素本身」（不是数组）。
// 两个函数都直接改原数组。

function insertAt(arr, index, item) {
    arr.splice(index, 0, item);
    return arr;
}

function removeAt(arr, index) {
    const [removed] = arr.splice(index, 1);
    return removed;
}

const letters = ["a", "b", "d"];
console.log("练习1:", insertAt(letters, 2, "c")); // 应打印：练习1: [ 'a', 'b', 'c', 'd' ]
console.log("练习1:", removeAt(letters, 0));      // 应打印：练习1: a
console.log("练习1:", letters);                   // 应打印：练习1: [ 'b', 'c', 'd' ]
console.log("练习1:", removeAt(letters, 10));     // 应打印：练习1: undefined（贴代码时说说为什么）

// ============ 练习 2：按值替换 ============
// replaceItem(list, oldItem, newItem)：
// - 找到 oldItem 第一次出现的位置，换成 newItem（直接改原数组），返回 "Replaced <old> with <new>."
// - 找不到就什么都不改，返回 "<old> is not on the list."

function replaceItem(list, oldItem, newItem) {
    const index = list.indexOf(oldItem);
    if (index !== -1) {
        list.splice(index, 1, newItem);
        return `Replaced ${oldItem} with ${newItem}.`;
    } else {
        return `${oldItem} is not on the list.`;
    }
}

const shopping = ["milk", "eggs", "bread", "eggs"];
console.log("练习2:", replaceItem(shopping, "eggs", "tofu")); // 应打印：练习2: Replaced eggs with tofu.
console.log("练习2:", replaceItem(shopping, "jam", "honey")); // 应打印：练习2: jam is not on the list.
console.log("练习2:", shopping); // 应打印：练习2: [ 'milk', 'tofu', 'bread', 'eggs' ]

// ============ 练习 3（预测题）：解构的跳过、默认值、rest ============
// 先别运行。把你预测的两行输出写在下面，再删掉 practice3(); 前面的 // 运行对照。
// 我的预测：
// 第 1 行：练习3: 90 60 75 40 ❌
// 第 2 行：练习3: null 2 ❌

function practice3() {
  const scores = [90, undefined, 75];
  const [a, b = 60, c = 50, d = 40, ...others] = scores;
  console.log("练习3:", a, b, c, d, others);

  const [x = 1, , z = 3] = [null, 2];
  console.log("练习3:", x, z);
}
practice3();

// ============ 练习 4：解构 + rest + join ============
// podium(runners)：runners 是按名次排好的名字数组（至少 2 个人）。
// 返回一行字符串：前三名分别标 Gold / Silver / Bronze，剩下的人都归进 Others，用 ", " 隔开。
// 没有第三名时 Bronze 写 none；没有剩下的人时 Others 写 none。
// 要求：只用一次解构，把 gold、silver、bronze、others 都取出来。

function podium(runners) {
    const [gold, silver, bronze = "none", ...others] = runners;
    // const othersText = others.join(", ") || "none";
    let othersText;   
    if (others.length !== 0) {
        othersText = others.join(", ");
    } else {
        othersText = "none";
    }
    return `Gold: ${gold} | Silver: ${silver} | Bronze: ${bronze} | Others: ${othersText}`;
}

console.log("练习4:", podium(["Ann", "Bob", "Cat", "Dan", "Eve"]));
// 应打印：练习4: Gold: Ann | Silver: Bob | Bronze: Cat | Others: Dan, Eve
console.log("练习4:", podium(["Ann", "Bob", "Cat"]));
// 应打印：练习4: Gold: Ann | Silver: Bob | Bronze: Cat | Others: none
console.log("练习4:", podium(["Ann", "Bob"]));
// 应打印：练习4: Gold: Ann | Silver: Bob | Bronze: none | Others: none

// ============ 练习 5（预测题）：浅拷贝 + 二维数组 ============
// 和练习 3 一样：先写预测，再删掉 practice5(); 前面的 // 运行。
// 我的预测：
// 第 1 行（grid）：[[1, 2], [3, 4]]❌ [[99, 2], [3, 4]]
// 第 2 行（copy）：[[99, 2], [0, 0], [5, 6]]
// 第 3 行：false ❌

function practice5() {
  const grid = [[1, 2], [3, 4]];
  const copy = [...grid];
  copy.push([5, 6]);
  copy[0][0] = 99;
  copy[1] = [0, 0];
  console.log("练习5:", grid);
  console.log("练习5:", copy);
  console.log("练习5:", copy[0] === grid[0]);
}
practice5();


// 实验 1：把数组放进另一个数组时，放进去的是什么？
const box = [1, 2];
const list = [box];
box.push(3);                  // 改的是 box，没碰 list
console.log(list);            // [ [ 1, 2, 3 ] ]  ← list 里也变了
console.log(list[0] === box); // true             ← list[0] 就是 box 本身，不是一份副本

// 实验 2：浅拷贝复制了什么？
const listCopy = [...list];
console.log(listCopy === list);       // false ← 外层是新的（新清单）
console.log(listCopy[0] === list[0]); // true  ← 里面还是同一个 box（同一个链接）

// 实验 3：把 copy[0][0] = 99 拆成两步
const grid = [[1, 2], [3, 4]];
const copy = [...grid];
const first = copy[0];   // 第 1 步：先从 copy 里拿出第一个小数组
first[0] = 99;           // 第 2 步：改这个小数组的第 0 格
console.log(grid);       // [ [ 99, 2 ], [ 3, 4 ] ]

// ============ 练习 6：不改原数组的删除 ============
// withoutItem(arr, item)：返回一个「新数组」，去掉 item 第一次出现的那个；原数组 arr 不能变。
// 找不到 item 时，也要返回新数组（内容和 arr 一样，但不是同一个数组）。

function withoutItem(arr, item) {
    const newArr = [...arr];
    const index = newArr.indexOf(item);
    if (index !== -1) {
        newArr.splice(index, 1);
    } 
    return newArr;
}

const pets = ["cat", "dog", "fish"];
console.log("练习6:", withoutItem(pets, "dog"));           // 应打印：练习6: [ 'cat', 'fish' ]
console.log("练习6:", pets);                               // 应打印：练习6: [ 'cat', 'dog', 'fish' ]
console.log("练习6:", withoutItem(pets, "bird"));          // 应打印：练习6: [ 'cat', 'dog', 'fish' ]
console.log("练习6:", withoutItem(pets, "bird") === pets); // 应打印：练习6: false

// ============ 加分题 7（有时间再做）：二维数组读写 ============
// seats 是座位表：每一排是一个数组，"O" 是空位，"X" 是已订。
// bookSeat(seats, row, seat)：row 和 seat 是给人看的编号，从 1 开始数。
// - 已订：什么都不改，返回 "Row <row> seat <seat> is taken."
// - 空位：改成 "X"，返回 "Booked row <row> seat <seat>."

function bookSeat(seats, row, seat) {
    const nRow = row - 1;
    const nSeat = seat - 1;
    if (seats[nRow][nSeat] === "X") {
        return `Row ${row} seat ${seat} is taken.`;
    } else {
        seats[nRow][nSeat] = "X";
        return `Booked row ${row} seat ${seat}.`;
    }
}

const seats = [
  ["O", "O", "X"],
  ["O", "O", "O"],
];
console.log("练习7:", bookSeat(seats, 1, 3)); // 应打印：练习7: Row 1 seat 3 is taken.
console.log("练习7:", bookSeat(seats, 2, 1)); // 应打印：练习7: Booked row 2 seat 1.
console.log("练习7:", seats); // 应打印：练习7: [ [ 'O', 'O', 'X' ], [ 'X', 'O', 'O' ] ]
