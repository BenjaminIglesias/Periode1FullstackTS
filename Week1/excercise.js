
//a

let arr = [1, 2, 3, 4]

function myFilter(array, callback){

    var arr = []
    for (var x = 0; x < array.length; x++ ){
      
        if (callback(array[x])) {
            arr.push(array[x])
        }

    }

    return arr
}

var callback =  (x) => {
    if (x > 2) {
        return true
    }
    return false
}

var arrToPrint = myFilter(arr, callback)

console.log(arrToPrint)




// b
 var arr2 = [1, 2, 3, 4]
function myMap(array, callback){

    var arr2 = []
    for (var x = 0; x < array.length; x++ ){
        arr2.push(callback2(array[x]))
    }

    return arr2
}

var callback2 = (x) => {
    return x * 2;
}

var arr2 = myMap(arr2, callback2)

console.log(arr2)


// c
Array.prototype.myMap = function () { 
    var arr = []
    for (var x = 0; x < this.length; x++ ){
        arr.push(callback2(this[x]))
    }

    return arr
}

   



let d = arr.myMap()
console.log(d)

//the reduce-method

var all = ["Lars", "Peter", "Jan", "Bo"];
// a
let joined = all.join(", ");
console.log(joined)

// b 
var numbers = [2, 3, 67, 33]; 
var sum = numbers.reduce((total, n) => {return total +=n})
console.log("Sum: ",sum)

// c
    let members = [
    {name : "Peter", age: 18},
    {name : "Jan", age: 35},
    {name : "Janne", age: 25},
    {name : "Martin", age: 22},
   ]
  var reduce = function(total, member, index, arr) {
    if (index == 1){
        total = total.age
    }
        if (index == arr.length - 1){
            return (total += member.age) / arr.length
        }

        return total += member.age

  }

    var ageSum = members.reduce(reduce)
    console.log("Age Sum: ",ageSum)


    // d
    var votes = [ "Clinton","Trump","Clinton","Clinton","Trump","Trump","Trump","None"];

    var together = votes.reduce((total, vote, index, arr) => {
        if (index == 1) {
                let t = total
                total = {}
                total[t] = 1
             }
           
             if (total[vote]){
               total[vote] += 1
             } else{
               total[vote] = 1
             }
             return total
    })

    console.log(together)