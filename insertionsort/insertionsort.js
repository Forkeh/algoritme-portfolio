function insertionSortShift(arr) {
    let iterations = 0;

    // Start checking from index 1 (as we are checking elements to the left)
    for (let i = 1; i < arr.length; i++) {
        const key = arr[i]; // Value we are checking
        let j = i - 1; // Initial index to the left of key

        // Keep going to the left, until value at index is larger than key
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j]; // Bigger than key value is moved to the right
            j--; // Move to next index to the left
        }
        arr[j + 1] = key; // key is inserted at new spot
        iterations++;
    }
    console.log("iterations: " + iterations);
    return arr;
}

function insertionSortSwap(arr) {
    let iterations = 0;
    // Start checking from index 1 (as we are checking elements to the left)
    for (let i = 1; i < arr.length; i++) {
        let j = i;

        // Keeps going left and swapping, while left value is larger
        while (j > 0 && arr[j] < arr[j - 1]) {
            swap(j, j - 1); // Swaps values at indexes
            j--; // Decrement to re-select value we just swapped for next loop
            iterations++;

            // console.log("iteration: ", iterations, arr);
        }
    }

    return arr;

    function swap(indexA, indexB) {
        // console.log("SWAP Index", indexA, indexB);
        // console.log("A", arr[indexA]);
        // console.log("B", arr[indexB]);

        [arr[indexA], arr[indexB]] = [arr[indexB], arr[indexA]];
    }
}

export { insertionSortShift, insertionSortSwap };
