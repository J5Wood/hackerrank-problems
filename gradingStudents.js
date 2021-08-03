function gradingStudents(grades){
    for (let i = 0; i < grades.length; i++){
        if (grades[i] < 38){
            continue;
        }
        let checkNum = 0
        while (checkNum < grades[i]){
            checkNum += 5;
        }
        if (checkNum - grades[i] < 3){
            grades[i] = checkNum;
        }
    }
    return grades;
}

let grades = [ 73, 67, 38, 33 ];

console.log(gradingStudents(grades))