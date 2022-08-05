//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console. 

const reverseList = array => console.log(array.reverse())

reverseList(['Mew', 'Mewtoo', 'Pikachu', 'Ditto' ])

//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

const isGreater = arrays => {
    let array1 = arrays[0].map(x => x**2)
    let array2 = arrays[1].map(x => x**3)
    if(array1.reduce((acc, curr) => acc+curr, 0) > array2.reduce((acc, curr) => acc+curr, 0)){
        return true
    }else{
        return false
    }


}

console.log(isGreater([[3,10],[2,2]]))

//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]

const isMultiple = array => {
    let newArr = []
    array.forEach((x,i) => {
        if(x%i === 0){
            newArr.push(x)
        }
    })
    return newArr
}

console.log(isMultiple([68, -1, 1, -7, 10, 10]))


//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.