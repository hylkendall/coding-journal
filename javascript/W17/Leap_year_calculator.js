function isLeapYear(num) {
    if (num % 4 !== 0) {
        return num + " is not a leap year.";
    } else if (num % 100 !== 0) {
        return num + " is a leap year.";
    } else if (num % 400 !== 0) {
        return num + " is not a leap year.";
    } else {
        return num + " is a leap year.";
    }
}
let year = 4300;
const result = isLeapYear(year);
console.log(result);