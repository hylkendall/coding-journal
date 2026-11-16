const lunches = [];

function addLunchToEnd(arr, str) {
    arr.push(str);
    console.log(`${str} added to the end of the lunch menu.`);
    return arr;
}

function addLunchToStart(arr, str) {
    arr.unshift(str);
    console.log(`${str} added to the start of the lunch menu.`);
    return arr;
}

// let arr = [];
function removeLastLunch(arr) {
    if (arr.length === 0) {
        console.log("No lunches to remove.");
        return arr;
    }
    const removed = arr.pop();
    console.log(`${removed} removed from the end of the lunch menu.`);
    return arr;
}
// console.log(removeLastLunch(arr));

function removeFirstLunch(arr) {
    if (arr.length === 0) {
        console.log("No lunches to remove.");
        return arr;
    }
    const removed = arr.shift();
    console.log(`${removed} removed from the start of the lunch menu.`);
    return arr;
}


function getRandomLunch(arr) {
    if (arr.length === 0) {
        console.log("No lunches available.");
        return;
    }
    const random = Math.floor(arr.length * Math.random());
    console.log("Randomly selected lunch: " + arr[random]);
}


function showLunchMenu(arr) {
    if (arr.length === 0) {
        console.log("The menu is empty.");
        return;
    }
    console.log("Menu items: " + arr.join(", "));
}

