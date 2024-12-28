//spread operator
var arr1 = ["a","b","c"]
var arr2 = [...arr1,"d","e"]
console.log(arr2)

var letter = [...arr1,...arr2]
console.log(letter)


//rest operator
var arr3 = ["a","b","c","d","e"]
var [f,s,t,...r] = arr3
console.log(f)
console.log(s)
console.log(t)
console.log(...r)