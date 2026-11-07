// A 组
// const size = "L";
// const cupsInput = "3杯";
// const sugarInput = 0;
// const member = "gold";

// B 组
// const size = "M";
// const cupsInput = "4杯";
// const sugarInput = null;
// const member = null;

// C 组
const size = "XL";
const cupsInput = "两杯";
const sugarInput = 7;
const member = "silver";

let unitPrice;
switch (size){
    case "S":
        unitPrice = 12;
        break;
    case "M":
        unitPrice = 15;
        break;
    case "L":
        unitPrice = 18;
        break;
    default:
        unitPrice = 15;
}
console.log(`杯型：${size}, 单价 ${unitPrice} 元`)

let numberOfCups; 
// if (Number.isNaN(parseInt(cupsInput))) {
//     numberOfCups = 1;
// } else {
//     numberOfCups = parseInt(cupsInput);
// }
numberOfCups = Number.isNaN(parseInt(cupsInput)) ?  1 :  parseInt(cupsInput);
// console.log(numberOfCups);
console.log(`杯数：${numberOfCups}`)

let sugarContent;
sugarContent = sugarInput == null ?  5 :  sugarInput;
console.log(`糖度：${sugarContent} 分糖`)

let memberRate;
switch (member){
    case "gold":
        console.log("会员：gold，8 折");
        memberRate = 0.8;
        break;
    case "silver":
        console.log("会员：silver，9 折");
        memberRate = 0.9;
        break;
    case null:
        console.log("会员：无，不打折");
        memberRate = 1;
}

let originalPrice;
originalPrice = unitPrice * numberOfCups;
console.log(`原价：${originalPrice.toFixed(0)} 元`);

let afterDiscount;
afterDiscount = originalPrice * memberRate;
console.log(`折后：${afterDiscount.toFixed(2)} 元`);

let reduction;
if (afterDiscount >= 50){
    console.log("满减：-5 元");
    reduction = 5;
} else{
    console.log("满减：未满 50 元，不减")
    reduction = 0;
}

let total;
total = afterDiscount - reduction;
console.log(`应付：${total.toFixed(2)} 元`)

let lotteryNumber = Math.floor(Math.random() * 100 + 1);
if (lotteryNumber <= 10){
    console.log(`抽奖号码：${lotteryNumber}, 中奖！再来一杯`)
} else{
    console.log(`抽奖号码：${lotteryNumber}, 未中奖`)
}
