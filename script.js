function summerValue(value){
	return value*0.8;
}

function winterValue(value){
	return value*2;
}

// -------------VARIANT1------------------

function sum(arr) {
	let result = 0;
	for (let i=0; i<arr.length; i++) result += arr[i][1];
	return result;
}

function getPrice(products, seasonFunc) {
	let total;
	if (typeof seasonFunc !== `function`) {
		total = sum(products);
	} else {
		let copiedProducts = JSON.parse(JSON.stringify(products));
		for (let i=0; i<copiedProducts.length; i++) copiedProducts[i][1] = seasonFunc(copiedProducts[i][1]);
		total = sum(copiedProducts);
	}
	return total;
	
}

// -------------VARIANT2------------------

// function getPrice(products, seasonFunc) {
// 	let sum = 0;
// 	if (typeof seasonFunc !== `function`) {
// 		for (let i=0; i<products.length; i++) sum += products[i][1];
// 	} else {
// 		for (let i=0; i<products.length; i++) sum += seasonFunc(products[i][1]);
// 	}
// 	return sum;
// }


const PRODUCTS = [
	['apple',10],
	['banana',8],
	['mango',20],
	['grape',18]
]

console.log(getPrice(PRODUCTS, summerValue))
console.log(getPrice(PRODUCTS, winterValue))
console.log(getPrice(PRODUCTS))