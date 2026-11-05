let a;
console.log(a, typeof a);
console.log(null == undefined, null === undefined);
console.log(null == 0, undefined == 0, null == "");
console.log(null > 0, null >= 0, null < 1, null == false, 0 == false);
console.log(undefined > 0, undefined >= 0, undefined < 1);
console.log(+undefined, undefined == NaN, NaN == NaN);

let level = "2";
switch (level) {
  case 2:
    console.log("数字 2");
    break;
  case "2":
    console.log("字符串 2");
    break;
  default:
    console.log("没匹配上");
}

let fruit = "apple";
switch (fruit) {
  case "apple":
    console.log("苹果");
  case "banana":
    console.log("香蕉");
    break;
  case "cherry":
    console.log("樱桃");
}

console.log(5 === 2 + 3 || 4 == 2);

if (1) {
  console.log("True!");
}

const c = 2;
if (1 == "1") {
  let b = 3;
  console.log(a + b);
}
console.log(b);