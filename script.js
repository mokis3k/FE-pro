const PROMO = `PATRON`;

const PRODUCTS = [
    {
        id: 1,
        title: "iPhone 9",
        price: 549,
        discountPercentage: 12.96,
        rating: 4.69
    },
    {
        id: 2,
        title: "iPhone X",
        price: 899,
        discountPercentage: 17.94,
        rating: 4.44
    },
    {
        id: 3,
        title: "Samsung Universe 9",
        price: 1249,
        discountPercentage: 15.46,
        rating: 4.09
    },
    {
        id: 4,
        title: "OPPOF19",
        price: 280,
        discountPercentage: 17.91,
        rating: 4.3
    },
    {
        id: 5,
        title: "Huawei P30",
        price: 499,
        discountPercentage: 10.58,
        rating: 4.09
    },
    {
        id: 6,
        title: "MacBook Pro",
        price: 1749,
        discountPercentage: 11.02,
        rating: 4.57
    },
    {
        id: 7,
        title: "Samsung Galaxy Book",
        price: 1499,
        discountPercentage: 4.15,
        rating: 4.25
    }
];


const THEAD  = [`Product title`, `Product price`, `Product discount percentage`, `Product rating`];


// -----Check promo validity-----
let promoCheck = (promo) => (promo === null || promo.replaceAll(` `, ``).toUpperCase() !== PROMO)? false : true;


// -----Count total price-----
let totalPrice = (arr, promo) => (
    arr.reduce((currentValue, item) => {
        if (promo) {
            const discountPrice = currentValue + item.price - (item.price * item.discountPercentage / 100);
            // debugger;
            return +discountPrice.toFixed(2);
        } else {
            return currentValue + item.price;
        }
    }, 0)
); 


// -----Rendering table----- 
let renderThead = arr => `<tr><th>${arr.join(`</th><th>`)}</th></tr>`;

let renderTbody = arr => {
    let TRs = arr.map((item) => {
        return `
        <tr>
            <td>${item.title}</td>
            <td>${item.price}$</td>
            <td>${item.discountPercentage}%</td>
            <td>${item.rating}</td>
        </tr>`
    }).join(``);

    return TRs
}

let renderTfoot = (arr, promo) => (`
    <tr>
        <td colspan="4">Final price: ${totalPrice(arr, promo)}$</td>
    </tr>
`)

let renderProductsTable = (arr, promo, ratingSort) => {
    arr = JSON.parse(JSON.stringify(arr));

    if (ratingSort) {
        arr.sort((x, y) => y.rating - x.rating);
    }

    document.write(`
    <table>
    <thead>
    ${renderThead(THEAD)}
    </thead>
    <tbody>
    ${renderTbody(arr)}
    </tbody>
    <tfoot >
    ${renderTfoot(arr, promo)}
    </tfoot>
    </table>`)
}


// ----------------------------------

let userPromo = promoCheck(prompt(`Enter promo:`));
let userSort = confirm(`Sort products by rating?`);

renderProductsTable(PRODUCTS, userPromo, userSort)