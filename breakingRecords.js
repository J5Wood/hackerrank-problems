function breakingRecords(scores) {
    let min, max, minCount, maxCount
    minCount = maxCount = 0
    min = max = scores[0]
    
    for(let i = 1; i < scores.length; i++){
        if(scores[i] > max){
            max = scores[i]
            maxCount++
        }
        if(scores[i] < min){
            min = scores[i]
            minCount++
        }
    }
    return [maxCount, minCount]
}

console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]))
console.log(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]))