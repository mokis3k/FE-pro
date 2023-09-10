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


// ------Check Promo Validity------
let promoCheck = (promo) => (promo === null || promo.replaceAll(` `, ``).toUpperCase() !== PROMO)? false : true


// ------Count Total Price------
let totalPrice = (arr, discount) => {
    if (discount) {
        arr.map(product => Object
            .keys(product)
            .reduce((returnedValue) => {
                let currentPrice = product[`price`];
                let promoPrice = currentPrice - (currentPrice * (product[`discountPercentage`] / 100))
                    return returnedValue += promoPrice
            }, 0)
        )
    } else {
        arr.map(product => Object
            .keys(product)
            .reduce((returnedValue) => {
                let currentPrice = product[`price`];
                return returnedValue += currentPrice
            }, 0)
        )
    }
}


// ------Render Table------
function renderProductsTable (arr, discount, sort) {

    let thead = [`Product title`, `Product price`, `Product discount percentage`, `Product rating`];
    arr = JSON.parse(JSON.stringify(arr));

    document.write(`
    <table>
        <thead>
            <th>${thead.join(`</th><th>`)}</th>
        </thead>
        <tbody>
            ${arr.map(product => `<tr>${Object
                .keys(product)
                .filter(key => key !== `id`)
                .map(key => `<td>${product[key]}</td>`)}</tr>`)}
        </tbody>
        <tfoot>
            <tr>${totalPrice(arr, discount)}</tr>
        </tfoot>
    </table>
`)
}


let userPromo = promoCheck(prompt(`Enter promo:`));
let sortRating = confirm(`Sort products by rating?`);

renderProductsTable(PRODUCTS, userPromo)