//[ 10, 20, 30, 40, 50 ]
arr1 = [10,20,30]
arr2 = [...arr1, 40,50]
console.log(arr2)

//[ 10, 20, 30, [ 40, 50 ] ]
arr1 = [10,20,30]
arr2 = [ 40,50]
arr3 = [...arr1,arr2]
console.log(arr3)

//[ 10, 20, 30, 40, 50 ]
arr1 = [10,20,30]
arr2 = [ 40,50]
arr3 = [...arr1,...arr2]
console.log(arr3)