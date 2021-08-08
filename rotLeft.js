function rotLeft(a, d){
    //takes in  a, array to rotate
    // d, number of rotations

    // for every rotation shift everything one index to the left.


    // i.e. move 0 to end , move everything down once

    // could do pointers 
        // still have to change every index

    // do we want original array unchanged?

    debugger
        let arrSplice = a.splice(0, d);
        a.push(...arrSplice);
        debugger;
    //do it once 

    // grab n number of items at bottom 

    // move every index down by n

    // attach n items top end again

    return a;
}

console.log(rotLeft([1,2,3,4,5], 4))