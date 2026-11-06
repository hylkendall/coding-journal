// A 组：短路
console.log(0 || 10);//10
console.log(0 ?? 10);//0
console.log(undefined ?? null ?? "最后");//最后
console.log("a" && "b");//ture ❌
console.log(0 && "b");//false ❌

// B 组：isNaN
console.log(isNaN("abc"));//ture
console.log(Number.isNaN("abc"));//false
console.log(isNaN("123"));//false
console.log(isNaN(undefined));//true
console.log(isNaN(null));//false
console.log(NaN === NaN);//true ❌

// C 组：null / undefined 比较
console.log(null >= 0);//true
console.log(null == 0);//false
console.log(undefined >= 0);//fasle
console.log(null == false);//false

// D 组：数字方法和 switch
console.log(typeof (3.14159).toFixed(2));//number ❌
console.log(Math.floor(-2.5));//-3
console.log(Math.trunc(-2.5));//-2
let level = "2";
switch (level) {
  case 2:
    console.log("数字 2");
    break;
  case "2":
    console.log("字符串 2");
  default:
    console.log("默认");
}
/*
字符串2
默认
*/
