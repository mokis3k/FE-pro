function getInfo(arr, msg) {
    entire = [];

    for (r=0; r<arr.length; r++) {
        currentTr = arr[r];
        entire.push(`<tr>`)
        for(d=0; d<currentTr.length; d++) {
            entire.push(`<td>${currentTr[d]}</td>`)
        }
        entire.push(`</tr>`)
    }
    
    return `<table>
	<caption>${msg} info</caption>
	<tbody>
    ${entire.join(`\n`)}
	</tbody>
    </table>`
}


animals = [
	['🐭','mouse','Jerry'],
	['🐹','hamster','Biscuit'],
	['🐰','rabbit','Bugs'],
	['🦊','fox','Mrs. Fox'],
	['🐻','bear','Paddington']
];
food = [
	['🍎','apple',10],
	['🍐','pear',12],
	['🍊','tangerine',15],
	['🍋','lemon',5],
	['🍌','banana',7]
];


tableAnimals = getInfo(animals, `Animals`)
tableFood = getInfo(food, `Food`)
document.write(tableAnimals, tableFood)