// Finding fruit in array function
function findingFruit(sportArr, fruitArr) {
    for (i=0; i<sportArr.length;) {
        currentElement = sportArr[i][0];
        if (currentElement === `apple`
        || currentElement === `watermelon`
        || currentElement === `lemon`) {
            fruitArr.push(sportArr[i])
            sportArr.splice(i, 1)
        } else {i++}
    }
}

// Printing array function
function printingArray(array, msg) {
    console.log(`*** ${msg} ***`);
    for (i=0; i<array.length; i++) {
        console.log(`${array[i][0]}: ${array[i][1]}`)
}
}

// Arrays 
sports = [
	['skier','⛷'],
	['snowboarder','🏂'],
	['apple','🍎'],
	['hockey','🏒'],
	['ice skate','⛸'],
	['swimmer','🏊'],
	['surfer','🏄‍'],
	['watermelon','🍉'],
	['lemon','🍋'],
	['rowboat','🚣'],
	['bicyclist','🚴‍']
];
summer_sports = sports.slice(-6);
winter_sports = sports.slice(0, 5);
fruits = new Array();

// Using FindingFruit function for arrays
findingFruit(summer_sports, fruits);
findingFruit(winter_sports, fruits);

// Using PrintingArray function for arrays
printingArray(winter_sports, `Winter sports`)
printingArray(summer_sports, `Summer sports`)
printingArray(fruits, `Fruits`)