function reverseArr<T>(arr: T[]){

    let reversed = arr.reverse()
    return reversed
}





console.log(reverseArr<string>(["a","b","c"]));
console.log(reverseArr<number>([1,2,3]));
console.log(reverseArr<boolean>([true,true,false]));

class DataHolder<T>{
    private val: T
    constructor(val: T){
        this.val = val
    }

    getvalue(): T {
        return this.val
    }

    setvalue(value:T){
        this.val = value
    }

}



let d = new DataHolder<string>("Hello");
console.log(d.getvalue())
d.setvalue("World");
console.log(d.getvalue());

let d2 = new DataHolder<number>(123);
console.log(d2.getvalue());
d2.setvalue(500);
console.log(d2.getvalue());