// Write your function here:
const tipCalculator = (quality, totalCost) =>{
    let tip = 0;
    // if(quality === 'bad'){
    //   // tip = (totalCost * 5)/100
    //   tip = totalCost * 0.05;
    //   return tip;
    // }
  
    switch(quality) {
      case 'bad':
        // tip = totalCost * 0.05;
        return totalCost * 0.05;
      case 'ok':
       // tip = totalCost * 0.15;
        return totalCost * 0.15; 
      case 'good':
      //  tip  = totalCost * 0.20;
        return totalCost * 0.20;
      case 'excellent':
       // tip = totalCost *0.30;
        return totalCost *0.30;
      default:
       // tip = totalCost *0.18;
        return totalCost *0.18;
    }
  }
  
  console.log(tipCalculator('bad', 100));
  console.log(tipCalculator('ok', 100));
  console.log(tipCalculator('good', 100));
  console.log(tipCalculator('excellent', 100));
  console.log(tipCalculator('prashant', 100));
  
  
  
  
  
  // Uncomment the line below when you're ready to try out your function
  // console.log(tipCalculator('good', 100)) //should return 20
  
  // We encourage you to add more function calls of your own to test your code!
  