function kangaroo(x1, v1, x2, v2) {
    let currentDistance = Infinity
    let newDistance = Math.max(x1, x2) - Math.min(x1, x2) 
    
    while(newDistance < currentDistance){
        if(x1 === x2) {
            return "YES"
        }
        x1 += v1
        x2 += v2
        currentDistance = newDistance
        newDistance = Math.max(x1, x2) - Math.min(x1, x2)
    }
    return "NO"
}

console.log(kangaroo(0, 3, 4, 2))
console.log(kangaroo(0, 2, 5, 3))
