"use strict";
import { binarySearch, compareGeneric, compareStrings } from "./binarysearch";
import { ordliste, values } from "./data";
import "./style.css";

window.addEventListener("load", start);

function start() {
    const result1 = binarySearch(23, values, compareGeneric);
    const result2 = binarySearch("gær", ordliste, compareStrings);
    // const result3 = binarySearch("Neville Longbottom", persons, compareNames); // TODO: Difficult to do generic implementation where search value and array elements aren't the same type, without having to change all the compare functions. Probably easier to do specific implementation

    console.log("result1", result1, "result2", result2);
}
