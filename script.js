// Array length
arrayLength = prompt(`Enter array length (from 2 to 10):`);

while (arrayLength === null
    || arrayLength.trim() === ``
    || isNaN(+arrayLength)
    || Math.abs(Math.round(arrayLength)) <= 2
    || Math.abs(Math.round(arrayLength)) >= 10
    ) {
        arrayLength = prompt(`Enter array length (from 2 to 10):`)
    }

arrayLength = Math.abs(Math.round(arrayLength));

//------------------------------
arr = new Array(arrayLength);
randomMin = Math.ceil(-10);
randomMax = Math.ceil(10);
sum = 0

// Filling array with random numbers
for (i=0; i<arr.length; i++) {
    arr[i] = Math.floor(Math.random() * (randomMax - randomMin + 1)) + randomMin;
}

// Finding max/min elements
for (i=1, arrMin = arrMax = arr[0]; i<arr.length; i++) {
    element = arr[i];
    if(element < arrMin){
        arrMin = element;
    }
    if(element > arrMax){
        arrMax = element;
    }
}

// Array elements sum
for (i=0; i<arr.length; i++) {
    sum += arr[i]
}


console.log(`Array: ${arr}`);
console.log(`Min: ${arrMin}`)
console.log(`Max: ${arrMax}`)
console.log(`Elements sum: ${sum}`)