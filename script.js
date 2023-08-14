total = 0;


bun = prompt(`Choose bun type: hamburger or cheeseburger`);

if (bun === null
    || !bun.trim()
    || bun.toLowerCase() !== `cheeseburger`) {
        bun = `hamburger`
        total += 10
} else {
    bun = bun.toLowerCase()
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
    if (size === null || !size.trim() || size.toLowerCase().trim() !== `middle` && size.toLowerCase().trim() !== `big`) {
        size = `small`
        total += 10
    } else if (size.toLowerCase().trim() === `middle`) {
        total += 15
    } else {
        total += 20
    }
}


sauce = confirm(`Would you like sauce?`)

if (sauce) {
    sauceType = prompt(`Choose sauce: ketchup/mayonnaise`)
    if (sauceType === null || !sauceType.trim() || sauceType.toLowerCase().trim() !== `mayonnaise`) {
        sauceType = `ketchup`
        total += 2
    } else {
        total += 3
    }
}