function hourGlassSum(arr){
    let joinedArr = [];
    let counter = 0;
    while (counter < 6){
        joinedArr.push(...arr[counter]);
        counter++;
    }
    let hourGlassSums = []
    let numPositions = [0,1,2,7,12,13,14]
    let returnVal = -Infinity;

    for (let i = 0; i < 24; i += 6){
        for (let j = 0; j < 4; j++){
            let sum = 0;
            for( let n of numPositions) sum += joinedArr[i + j + n]
            hourGlassSums.push(sum)
        }
    }
    for (let key in hourGlassSums){
        returnVal = Math.max(returnVal, hourGlassSums[key])
    }
    return returnVal;
}

console.log(hourGlassSum([
    [1,2,3,4,5,6],
    [1,2,3,4,5,6],
    [1,2,3,4,5,6],
    [1,2,3,4,5,6],
    [1,2,3,4,5,6],
    [1,2,3,4,5,6]
]))

console.log(hourGlassSum([
    [-1,-2,-3,-4,-5,-6],
    [-1,-2,-3,-4,-5,-6],
    [-1,-2,-3,-4,-5,-6],
    [-1,-2,-3,-4,-5,-6],
    [-1,-2,-3,-4,-5,-6],
    [-1,-2,-3,-4,-5,-6]
]))