// ① 只声明、不调用
function sayHi() {
  console.log("Hi!");
}

// ② 少传一个实参
function greet(name) {
  console.log("Hello, " + name + "!");
}
greet();

// ③ console.log 和 return 不是一回事
function doSomething() {
  console.log("Doing something...");
}
let result = doSomething();
console.log(result);

// ④ return 之后的代码
function check(n) {
  return n * 2;
  console.log("after return");
}
console.log(check(5));

// ⑤ 多传一个实参 + 拿返回值继续算
function calculateSum(num1, num2) {
  return num1 + num2;
}
console.log(calculateSum(1, 2, 3));
console.log(calculateSum(3, 4) * 2);

// ⑥ 默认参数什么时候生效
function greetings(name = "Guest") {
  console.log("Hello, " + name + "!");
}
greetings(undefined);
greetings(null);
greetings("");