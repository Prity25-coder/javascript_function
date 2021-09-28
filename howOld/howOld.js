// Write your function here:
const howOld = (age, year) =>{
    let currentYear = 2021;
    if(year > currentYear){
      return `You will be ${age + (year - currentYear)} in the year ${year}`;
    } else if(year < currentYear){
      let bornYear = currentYear - age;
      if(year < bornYear) {
        return `The year ${year} was ${bornYear - year} years before you were born`;
      } else {
   return `You were ${age-(currentYear - year)} in the year ${year}`;
      }
    }
  };
  
  console.log(howOld(20, 2022))
  
  
  
  
  
  // Once your function is written, write function calls to test your code!
  