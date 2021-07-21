// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers.
// Then print the respective minimum and maximum values as a single line of two space-separated long integers.

function miniMaxSum(arr){
    let smallSum = Infinity;
    let bigSum = 0;
    
    function getSum(key){
        let index = parseInt(key)
        let nums = arr.slice(0, index).concat(arr.slice(index + 1))
        return nums.reduce((a,b) => a + b)
    }

    for (let key in arr){
        smallSum = Math.min(smallSum, getSum(key))
        bigSum = Math.max(bigSum, getSum(key))
    }
    console.log(smallSum + " " + bigSum)
} 

miniMaxSum([7,69,2,221,8974])