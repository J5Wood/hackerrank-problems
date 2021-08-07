function sockMerchant(ar) {
    let numOfPairs = 0;
    let countObj = {};
    for (let i = 0; i < ar.length; i++){
        countObj[ar[i]] ? countObj[ar[i]]++ : countObj[ar[i]] = 1;
    }
    for (let key in countObj){
        numOfPairs += Math.floor(countObj[key] / 2)
    }
    return numOfPairs;
}

console.log(sockMerchant([23.1,23.1,"yellow","yellow",68.7,68.7]))