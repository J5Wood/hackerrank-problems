function birthdayCakeCandles(candles) {
    const candleObj = {}
    let tallestCandle = 0;

    for(let i = 0; i < candles.length; i++) {
        candleObj[candles[i]] ? candleObj[candles[i]]++ : candleObj[candles[i]] = 1;
        
        if(candles[tallestCandle] < candles[i]){
            tallestCandle = i;
        }
    }
    return candleObj[candles[tallestCandle]];
}


console.log(birthdayCakeCandles([3,2,4,1,4,4,3]))