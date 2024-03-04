const name = "anil"
const repoCount = 50

// console.log(name + repoCount + " value");

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('anil-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-5, 4)
console.log(anotherString);

const newStringOne = "   anil   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://anil.com/anil%22luhar"

console.log(url.replace('%22', '-'))

console.log(url.includes('anil'));

console.log(gameName.split('-'));