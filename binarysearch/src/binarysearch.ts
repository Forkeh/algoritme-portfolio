function binarySearch<T>(searchValue: T, arr: T[], compareFunc: (a: T, b: T) => number): number {
    if (typeof arr[0] === "string") {
        arr.sort();
    }

    let iterations = 0;

    console.log("Searcing for:", searchValue, "- Array:", arr);

    // Initial minimum index
    let min = 0;

    // Initial maximum index - length of the array
    let max = arr.length - 1;

    // Loop continues until min/max becomes the same, or the correct index is found
    while (min <= max) {
        // Find the middle index within current min/max
        let mid = Math.floor((max + min) / 2);

        let log = `LOG
min: ${min}
max: ${max}
middle: ${mid}`;

        console.log(log);

        // Compare search value with value at current middle index
        const comparison = compareFunc(searchValue, arr[mid]);

        // Search value matches current middle index
        if (comparison === 0) {
            iterations++;
            console.log("iterations:", iterations);

            return mid;
        }

        // Search value is bigger than current middle index, move min to current middle
        if (comparison > 0) {
            min = mid + 1;
        }

        // Search value is smaller than current middle index, move max to current middle
        if (comparison < 0) {
            max = mid - 1;
        }
        iterations++;
    }

    // Search value wasn't found
    console.log("iterations:", iterations);
    return -1;
}

function compareGeneric<T>(a: T, b: T) {
    if (typeof a === "number" && typeof b === "number") {
        return a - b;
    }
    if (typeof a === "string" && typeof b === "string") {
        return a.localeCompare(b);
    }
    throw new Error("Unsupported type for comparison");
}

function compareStrings(a: string, b: string): number {
    return a.localeCompare(b);
}

function compareNumbers(a: number, b: number): number {
    return a - b;
}

// TODO: name comparison probably easier to make own implemention, due to Typescript
interface ICompareNames {
    name: string;
    house: string;
}

function compareNames(a: string | ICompareNames, b: ICompareNames): number {
    if (typeof a === "string") {
        return a.localeCompare(b.name);
    } else {
        return a.name.localeCompare(b.name);
    }
}

export { binarySearch, compareGeneric, compareNames, compareNumbers, compareStrings };
