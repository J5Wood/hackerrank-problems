function minimumBribes(q){
    let count = 0;
    for ( let  i = 0; i < q.length; i++){
        // let counter = 1;
        if (q[i] > i + 3) return console.log("Too chaotic")
        if(q[i] > i + 1){
            count += q[i] - i - 1;
        } else if (q[i] > q[i + 1 ]){
            // while( q[i] > q[i + counter]){
                count++;
                // counter++;
            // }
        }
    }
    console.log(count);
}

console.log(minimumBribes([1, 2, 5, 3, 7, 8, 6, 4 ]))

    // takes in an array representing queue of people
    // array comes in out of place, assume it was originally in order
    // find out who moved forward in line, and by how much
    //if someone moved forward more than 2 spaces print "Too chaotic"
    // otherwise print the minimum bribes necessary for shown order
    // each person starts in index -1 from their shown number
    // if person is -2 or -3 from face value count it
    // if -4 too chaotic