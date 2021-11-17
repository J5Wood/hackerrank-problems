function getTotalX(a, b) {
    let min = Math.max(...a)
    let max = Math.min(...b)
    let counter = 0
    let factor
    
    for(let i = min; i <= max; i++){
        factor = true
        for(let key in a){
            if(i % a[key] !== 0) factor = false
        }
        for(let key in b){
            if(b[key] % i !== 0) factor = false
        }
        if(factor) counter++
    }
    return counter
}

console.log(getTotalX([2, 4], [16, 32, 96]))