let iterations = 0;

function mergeSort(arr) {
    console.log(arr);

    // Base case
    if (arr.length <= 1) {
        console.log("iterations: ", iterations);

        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    console.log("mid:", mid);

    const leftHalf = arr.slice(0, mid);
    const rightHalf = arr.slice(mid);
    console.log(leftHalf, rightHalf);

    const sortedLeft = mergeSort(leftHalf);
    const sortedRight = mergeSort(rightHalf);

    iterations++;

    return merge(sortedLeft, sortedRight);
}

function merge(arrayA, arrayB) {
    const arrayC = [];

    // merges arrays into arrayC, inserting smallest current number
    while (arrayA.length > 0 && arrayB.length > 0) {
        if (arrayA[0] < arrayB[0]) {
            arrayC.push(arrayA.shift());
        } else {
            arrayC.push(arrayB.shift());
        }
        iterations++;
    }

    // Insert remaining arrayA elements, if any
    while (arrayA.length > 0) {
        arrayC.push(arrayA.shift());
        iterations++;
    }

    // Insert remaining arrayB elements, if any
    while (arrayB.length > 0) {
        arrayC.push(arrayB.shift());
        iterations++;
    }

    return arrayC;
}

export { mergeSort };
