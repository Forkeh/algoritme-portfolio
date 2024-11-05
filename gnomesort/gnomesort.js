function gnomeSort(arr) {
    let iterations = 0;
    let i = 0;

    // Continues until it reaches end of array
    while (i < arr.length) {
        // If at start of array, or the current value is bigger/equal than value to the left
        // Don't do anything, go to next index
        if (i === 0 || arr[i] >= arr[i - 1]) {
            i++;
            iterations++;
        } else {
            // If value is smaller than value to the left, swap them
            // decrement index to keep on same value
            swap(i, i - 1);
            i--;
            iterations++;
        }
    }

    console.log("iterations: ", iterations);

    return arr;

    function swap(indexA, indexB) {
        const temp = arr[indexA];

        arr[indexA] = arr[indexB];

        arr[indexB] = temp;
    }
}

export { gnomeSort };
