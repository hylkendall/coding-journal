function confirmEnding(str, ending) {
    return str.slice(-ending.length) === ending;
}

console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"));