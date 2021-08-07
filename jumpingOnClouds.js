function jumpingOnClouds(c){
    let counter = 0;
    let moves = 0;
    while (counter < c.length - 1){
        if (c[counter + 2] === 0){
            counter += 2;
        } else {
            counter++;
        }
        moves++;
    }
    return moves;
}