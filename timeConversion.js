function timeConversion(time) {
    let returnTime = time;

    if( time.slice(8) === "PM" && time.slice(0,2) !== "12"){
        let add12 = parseInt(time.slice(0, 2)) + 12
        returnTime = add12.toString() + time.slice(2);
    }
    if( time.slice(0,2) === "12" && time.slice(8) === "AM"){
        returnTime = "00" + time.slice(2);
    }

    return returnTime.slice(0,8)
}

console.log(timeConversion("12:01:00PM"))