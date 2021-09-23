// Write your function here:
const  finalGrade = (grade1,grade2,grade3) =>{



    if ((grade1 < 0 || grade1 > 100) || (grade2 < 0 || grade2 > 100) || (grade3 < 0 || grade3 > 100)) {
        return 'You have entered an invalid grade.'
      }
     const avg = (grade1 + grade2 + grade3) / 3;
       if (avg < 60) {
           return 'F';
       } else if (avg < 70) {
           return 'D';
       } else if (avg < 80) {
           return 'C';
       } else if (avg < 90) {
           return 'B';
           
       } return 'A';
   };
