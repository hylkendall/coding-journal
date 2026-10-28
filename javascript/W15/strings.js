const word = "JavaScript";
console.log(word.length);
console.log(word[0]);
console.log(word[word.length - 1]);
console.log(word[10]);
console.log(word[0] + word[4]);

console.log("Line 1\nLine 2");
console.log("She said, \"Hi!\"");
console.log('It\'s fine');
console.log("C:\\Users\\kendall");
console.log("C:\Users\kendall");


const name = "Kendall";
const lang = "JavaScript";
console.log(`Hi, ${name}!`);
console.log("Hi, ${name}!");
console.log(`${lang} has ${lang.length} letters.`);
console.log(`Line A
Line B`);

console.log(lang.indexOf("Script"));
console.log(lang.indexOf("script"));
console.log(lang.indexOf("a"));
console.log(lang.indexOf("a", 2));

console.log("A".charCodeAt(0));
console.log(String.fromCharCode(66));

const answer = prompt("Your name?");
console.log(answer);