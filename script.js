// -----Creating Class-----
class Bulka {
    constructor(name, size) {
        this.name = name;
        this.size = size;
        this.ingredients = [`cutlet`, `salada`, `tomato`];

        this.setAdditionalIngredients = function(ingredients) {
            return this.ingredients = this.ingredients.concat(ingredients)
        }
    }
}


// -----Creating Class Examples-----
let Humburger = new Bulka(`Humburger`, `small`);
let Cheeseburger = new Bulka(`Cheeseburger`, `big`);

// -----Setting Additional Ingredients-----
Humburger.setAdditionalIngredients([`avokado`, `mushrooms`]);
Cheeseburger.setAdditionalIngredients([`onion`, `black pepper`]);

// -----Pretty console log ✨-----
burgers = [Humburger, Cheeseburger];

burgers.map(obj => Object
    .entries(obj)
    .filter(value => value[0] !== `setAdditionalIngredients`)
    .map((value, index, arr) => {
        if (index === arr.length - 1) {
            console.log(`${value[0]}: ${value[1]}\n--------------------`)
        } else if (index === 0) {
            console.log(`--------------------\n${value[0]}: ${value[1]}`)
        } else {
            console.log(`${value[0]}: ${value[1]}`)
        }
    }))