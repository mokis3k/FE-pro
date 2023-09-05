const users = [
    ["john","red",5,["ball", "book", "pen"]],
    ["becky","blue",10,["tape", "backpack", "pen"]],
    ["susy","red",55,["ball", "eraser", "pen"]],
    ["tyson","green",1,["book", "pen"]],
];

// arr1 for array with .forEach()
let arr1 = [];
users.forEach((item) => arr1.push(item[0] + `!`));
console.log(arr1)

// arr2 for array with .map()
let arr2 = users.map((item) => item[0] + `?`)
console.log(arr2)

// arr3 for array with .filter()
let arr3 = users.filter((item) => item[1] === `red`)
console.log(arr3)

let totalScore = arr3.reduce((returnedValue, item) => {
    return returnedValue += item[2]
}, 0
);
console.log(totalScore)



// let mapResult = arr.map((item, index, arr) => item*2);
// console.log(mapResult);

// arr.forEach((item) => document.write(`<p>${item}</p>`));