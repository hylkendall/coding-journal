// ① 外面的变量，函数里、块里都能用
const city = "Shanghai";

function showCity() {
  console.log("函数里：" + city);
}
showCity();

if (true) {
  console.log("块里：" + city);
}
console.log("-".repeat(8));


// ② 函数里改外面的变量
let count = 0;

function addOne() {
  count = count + 1;
}
addOne();
addOne();
addOne();
addOne();
console.log(count);
console.log("-".repeat(8));


// ③ 一层套一层：函数里的块，能用函数里的变量
function checkAge(age) {
  const limit = 18;
  if (age >= limit) {
    const msg = "成年";
    console.log(msg + "，门槛是 " + limit);
  }
}5
checkAge(18);
checkAge(20);
checkAge(18);
checkAge(10);
console.log("-".repeat(8));


// ④ 同名变量，在不同的层里各声明一次
let pet = "外面的猫";

function showPet() {
  let pet = "里面的狗";
  console.log(pet);
}
showPet();
console.log(pet);
console.log("-".repeat(8));


// ⑤ 外面看里面
if (true) {
  let secret = 42;
  console.log("块里：" + secret);
}5
// 下面三行，每次只取消注释一行：预测 → 运行 → 再注释回去
// console.log(secret);
// console.log(limit);
// console.log(age);