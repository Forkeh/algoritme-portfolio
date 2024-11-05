let iterations = 0;

function mergeSort(arr) {
    console.log(arr);

    // Base case: if the array has 1 or 0 elements, it is already sorted
    if (arr.length <= 1) {
        console.log("iterations: ", iterations);

        return arr;
    }

    // Find the middle index of the array
    const mid = Math.floor(arr.length / 2);
    console.log("mid:", mid);

    // Split the array into two halves
    const leftHalf = arr.slice(0, mid);
    const rightHalf = arr.slice(mid);
    console.log(leftHalf, rightHalf);

    // Recursively sort both halves
    const sortedLeft = mergeSort(leftHalf);
    const sortedRight = mergeSort(rightHalf);

    iterations++;

    // Merge the sorted halves and return the result
    return merge(sortedLeft, sortedRight);
}

function merge(arrayA, arrayB) {
    const arrayC = [];

    // merges arrays into arrayC, inserting smallest current number
    while (arrayA.length > 0 && arrayB.length > 0) {
        if (arrayA[0] < arrayB[0]) {
            arrayC.push(arrayA.shift()); // Add the smallest element from arrayA
        } else {
            arrayC.push(arrayB.shift()); // Add the smallest element from arrayB
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

    console.log("merge: ", arrayC);
    
    return arrayC;
}

export { mergeSort };
