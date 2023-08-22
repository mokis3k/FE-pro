hero = ['Ivan'];
native = ['York','Of'];
destination = ['Poltava','In'];

// ['Richard','Of','York','Gave','Battle','In','Vain']
rainbow = destination.concat(native, hero).reverse();

// Ivan -> Richard
richard = rainbow.shift();
richard = `Richard`
rainbow.unshift(richard);

// + Gave Battle
rainbow.splice(3, 0, `Gave`, `Battle`);

// Poltava -> Vain
vain = rainbow.pop();
vain = `Vain`
rainbow.push(vain);


for (i=0; i<rainbow.length; i++) {
    document.write(`<span class="name">${rainbow[i]}</span>`)
}
