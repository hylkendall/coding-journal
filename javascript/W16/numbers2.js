console.log(NaN === NaN, typeof NaN);
console.log(isNaN("12abc"), isNaN(""), isNaN(false), isNaN(undefined));
console.log(Number.isNaN("blabla"), Number.isNaN(0 / 0), Number.isNaN(+"12abc"));
console.log(+"42px", parseInt("42px"), parseFloat("42px"));
console.log(parseInt("3.99"), parseFloat("3.14.5"), parseFloat("abc 3.14"));
console.log(parseInt("  -8.7kg"), parseFloat(".5"), parseInt(".5"));
console.log((3.14159).toFixed(2), (7).toFixed(2), (2.5).toFixed());
console.log((1.5).toFixed() + 1, typeof (1.5).toFixed());