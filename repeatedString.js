function repeatedString(s, n){
    
    let checkArr = s.split("")
    let aCount = 0;
    let remainderCount = 0;
    let repeated = n / checkArr.length
    let remainderLength = n % checkArr.length
    for (let i = 0; i < checkArr.length; i++){
        if (checkArr[i] === "a"){
            aCount++;
        }
    }
    for (let j = 0; j < remainderLength; j++){
        if (checkArr[j] === "a"){
            remainderCount++;
        }
    }
    return aCount * Math.floor(repeated) + remainderCount;
}

console.log(repeatedString("aba", 10))