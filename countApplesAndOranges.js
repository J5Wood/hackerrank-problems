function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let houseApples = 0
    let houseOranges = 0
    for(let i = 0; i < apples.length; i++){
        if(apples[i] + a >= s && apples[i] + a <= t) houseApples++
    }
    for(let j = 0; j < oranges.length; j++){
        if(oranges[j] + b >= s && oranges[j] + b <= t) houseOranges++
    }
    // console.log(houseApples)
    // console.log(houseOranges)
    return [houseApples, houseOranges]
}

console.log(countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]))

