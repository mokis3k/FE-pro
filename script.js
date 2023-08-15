total = 0;


bun = prompt(`Choose bun type: hamburger or cheeseburger`);

if (bun === null
    || !bun.trim()
    || bun.toLowerCase() !== `cheeseburger`) {
        bun = `hamburger`
        total += 10
} else {
    bun = bun.trim().toLowerCase()
    doubleCheese = confirm(`Would you like to add double cheese?`)
    if (doubleCheese) {
        total += 20
    } else {
        total += 15
    }
}


potato = confirm(`Would you like potato?`)

if (potato) {
    size = prompt(`Choose potato size: small/middle/big`)
    if (size === null 
        || !size.trim() 
        || size.toLowerCase().trim() !== `middle` 
        && size.toLowerCase().trim() !== `big`) {
        size = `small`
        total += 10
    } else if (size.toLowerCase().trim() === `middle`) {
        size.toLowerCase().trim()
        total += 15
    } else {
        size.toLowerCase().trim()
        total += 20
    }
}


sauce = confirm(`Would you like sauce?`)

if (sauce) {
    sauceType = prompt(`Choose sauce: ketchup/mayonnaise`)
    if (sauceType === null 
        || !sauceType.trim() 
        || sauceType.toLowerCase().trim() !== `mayonnaise`) {
        sauceType = `ketchup`
        total += 2
    } else {
        sauceType = sauceType.toLowerCase().trim()
        total += 3
    }
}


if (potato !== false && sauce !== false) {
    document.write(`<h2>Your order:</h2>
	<ul>
		<li>Bun: ${bun} </li>
		<li>Potato: ${size} </li>
		<li>Sauce: ${sauceType} </li>
	</ul>

	<p>Price: $${total} </p>
`);
} else if (potato !== false && sauce !== true) {
    document.write(`<h2>Your order:</h2>
	<ul>
		<li>Bun: ${bun} </li>
		<li>Potato: ${size} </li>
	</ul>

	<p>Price: $${total} </p>
`);
} else if (potato !== true && sauce !== false) {
    document.write(`<h2>Your order:</h2>
	<ul>
		<li>Bun: ${bun} </li>
		<li>Potato: ${size} </li>
	</ul>

	<p>Price: $${total} </p>
`);
} else {
    document.write(`<h2>Your order:</h2>
	<ul>
		<li>Bun: ${bun} </li>
	</ul>

	<p>Price: $${total} </p>
`);
}
