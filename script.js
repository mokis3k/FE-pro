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

// Total Score Red team
let totalScore = arr3.reduce((returnedValue, item) => {
    return returnedValue += item[2]
}, 0
);


// Render Table 
let THead = [`<tr><th>Name</th><th>Comand</th><th>Score</th><th>Data</th></tr>`];
let TFoot = [`<tr><td colspan="4">Total score: ${totalScore}</td></tr>`];
let TDs = []

arr3.forEach((item) => {
    item.forEach((itemInner, index) => {
        if (index === 0) {
            TDs.push(`<tr><td>${itemInner}</td>`)
        } else if (index === item.length-1){
            TDs.push(`<td>${itemInner}</td></tr>`)
        } else {
            TDs.push(`<td>${itemInner}</td>`)
        }
    })
});


// -------------------------------
document.write(`
    <table>
        <thead>
            ${THead}
        </thead>
        <tbody>
            ${TDs.join(``)}
        </tbody>
        <tfoot>
            ${TFoot}
        </tfoot>
    </table>`)