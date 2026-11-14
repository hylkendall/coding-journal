function getHours(minutes) {
    if (minutes <= 15) {
        return 0;
    } else {
        return Math.ceil(minutes / 60);
    }    
}


function getFee(hours, isMember = false) {  
    if (hours === 0) {
        return 0;
    } 
    const fee = (hours - 1) * 5 + 8;
    const capped = fee >= 40 ? 40 : fee;
    if (isMember) {
        return capped * 0.8;
    } else {
        return capped;
    }
}

function maskPlate(plate) {
    return plate.slice(0, 2) + "*".repeat(plate.length - 4) + plate.slice(-2);
}


const formatYuan = yuan => "¥" + yuan.toFixed(2);


let n = 0;
function getReceipt(plate, minutes, isMember = false) {
    ++n;
    const hours = getHours(minutes);
    return "#" + n + " " + maskPlate(plate) + " | " + hours + " 小时" + " | " +  formatYuan(getFee(hours, isMember));
}

console.log(getHours(15), getHours(16), getHours(61));
// 0 1 2
console.log(getFee(0), getFee(1), getFee(3, true), getFee(10));
// 0 8 14.4 40
console.log(maskPlate("京A12345"), maskPlate("粤AD12345"));
// 京A***45 粤A****45
console.log(formatYuan(8), formatYuan(14.4));
// ¥8.00 ¥14.40

console.log(getReceipt("京A12345", 10));
// #1 京A***45 | 0 小时 | ¥0.00
console.log(getReceipt("沪B9X8Y7", 130, true));
// #2 沪B***Y7 | 3 小时 | ¥14.40
console.log(getReceipt("粤AD12345", 600));
// #3 粤A****45 | 10 小时 | ¥40.00
console.log(getReceipt("粤AD12345", 600, true));
// #4 粤A****45 | 10 小时 | ¥32.00
console.log(getReceipt("苏E00001", 60));
// #5 苏E***01 | 1 小时 | ¥8.00