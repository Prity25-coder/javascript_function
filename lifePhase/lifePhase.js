// Write your function here:
const lifePhase = age =>{
    if(age >= 0 && age < 4) {
      return 'baby';
    } 
  else  if(age >= 4 && age < 13) {
      return 'child';
    } else  if(age >= 13 && age < 20) {
      return 'teen';
    }  else if(age >= 20 && age < 65) {
      return 'adult';
    } else  if(age >= 65 && age < 150) {
      return 'senior citizen';
    } else{
  return 'This is not a valid age';
    }
  
  
  }
  lifePhase()
  console.log(lifePhase(200));
  