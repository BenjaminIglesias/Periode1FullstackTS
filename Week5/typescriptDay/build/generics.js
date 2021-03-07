"use strict";
function reverseArr(arr) {
    let reversed = arr.reverse();
    return reversed;
}
console.log(reverseArr(["a", "b", "c"]));
console.log(reverseArr([1, 2, 3]));
console.log(reverseArr([true, true, false]));
class DataHolder {
    constructor(val) {
        this.val = val;
    }
    getvalue() {
        return this.val;
    }
    setvalue(value) {
        this.val = value;
    }
}
let d = new DataHolder("Hello");
console.log(d.getvalue());
d.setvalue("World");
console.log(d.getvalue());
let d2 = new DataHolder(123);
console.log(d2.getvalue());
d2.setvalue(500);
console.log(d2.getvalue());
//# sourceMappingURL=generics.js.map