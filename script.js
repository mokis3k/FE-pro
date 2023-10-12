// ----- Functions -----
const firstFunc = (event) => {
    console.log(`First func for ${event.target.innerHTML}`);
    event.target.removeEventListener(`click`, firstFunc);
    event.target.addEventListener(`click`, secondFunc);
};

const secondFunc = (event) => {
    console.log(`Second func for ${event.target.innerHTML}`);
    event.target.removeEventListener(`click`, secondFunc);
    event.target.addEventListener(`click`, lastFunc);
};

const lastFunc = (event) => {
    console.log(`Last func for ${event.target.innerHTML}`);
};

// ----- Catching buttons ------
const btns = document.querySelectorAll(`[data-btn="action"]`);

btns.forEach(btn => {
    btn.addEventListener(`click`, firstFunc)
})