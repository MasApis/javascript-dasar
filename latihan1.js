/*
    Output yang diinginkan :
    Grade 1: 95 (A)
    Grade 2: 85 (B)
    Grade 3: 65 (D)
    Grade 4: 80 (B)
    Grade 5: 70 (C)
*/

const checkGrades = (grades) => {
    for(i = 0; i < grades.length; i++) {
        if(typeof grades[i] !== 'number') {
            throw new Error("Error : Invalid input. Please provide an array of numbers.")
        }

        const grade = grades[i];
        let predikat;

        if(grade >= 90 && grade <= 100) {
            predikat = 'A';
        } else if(grade >= 80 && grade <= 89) {
            predikat = 'B';
        } else if(grade >= 70 && grade <= 79) {
            predikat = 'B-';
        } else if(grade >= 60 && grade <= 69) {
            predikat = 'C';
        } else if(grade >= 50 && grade <= 59) {
            predikat = 'C-';
        } else if(grade >= 20 && grade <= 49) {
            predikat = 'D';
        } else {
            predikat = 'F';
        }

        console.log(`Grade ${[i+1]}: ${grade} (${predikat})`)
    }
}

try {
    const studentsGrade = [95, 70, 84, 77, 89, 45];
    checkGrades(studentsGrade);
} catch(err) {
    console.error(err);
}