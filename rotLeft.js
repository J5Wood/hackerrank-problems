function rotLeft(a, d){
    let arrSplice = a.splice(0, d);
    a.push(...arrSplice);
    return a;
}

console.log(rotLeft([1,2,3,4,5], 4))