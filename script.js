const getRandomValue = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const getRandomColor = (red, green, blue) => `rgb(${red}, ${green}, ${blue})`;

const moveBlock = (top, left) => {
    movingBlock.style.top = top + `px`;
    movingBlock.style.left = left + `px`;
};

// -----Body-----
const bodyHeight = document.body.clientHeight;
const bodyWidth = document.body.clientWidth;

// -----Block-----
const movingBlock = document.querySelector(`#movingBlock`);
const blockHeight = movingBlock.clientHeight;
const blockWidth = movingBlock.clientWidth;
movingBlock.style.left = 0;
movingBlock.style.top = 0;

// -----Max top/left-----
const maxTop = bodyHeight - blockHeight;
const maxLeft = bodyWidth - blockWidth;

// -----Intervals-----
setInterval(() => {
    let position = [getRandomValue(0, maxTop), getRandomValue(0, maxTop)]
    let [top, left] = position;

    moveBlock(top, left)
}, 1000)

setInterval(() => {
    let colors = [getRandomValue(0, 255), getRandomValue(0, 255), getRandomValue(0, 255)];
    let [red, green, blue] = colors;
    
    movingBlock.style.background = getRandomColor(red, green, blue)
}, 500)