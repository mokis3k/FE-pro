const animalsList =  [
    [`turtle`,`🐢`],
    [`octopus`,`🐙`],
    [`fish`,`🐠`],
    [`flamingo`, `🦩`],
    [`penguin`, `🐧`],
];


function renderItems(arr) {
    
    arr.forEach(function(item, index) {
        item = `${item[0]}: ${item[1]}`;
        timeLoop(item, index);
    })
};


function timeLoop(item, coef) {

    setTimeout(function(){
        console.log(item);
    },
    coef * 1000
    );
};


renderItems(animalsList);