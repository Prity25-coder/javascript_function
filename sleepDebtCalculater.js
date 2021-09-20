const getSleepHours = day =>{
    dayName = day.toLowerCase();
    if(dayName === 'monday'){
      return 7;
    } else if(dayName === 'tuesday'){
      return 6;
    } else if(dayName === 'wednesday'){
      return 7;
    } else if(dayName === 'thursday'){
      return 7;
    } else if(dayName === 'friday'){
      return 7;
    } else if(dayName === 'saturday'){
      return 8;
    } else if(dayName === 'sunday'){
      return 7;
    }
  }
  
  // console.log(getSleepHours('saturday'));
  // const getActualSleepHours = () =>
  // getSleepHours('monday')+getSleepHours('tuesday')+getSleepHours('wednesday')+getSleepHours('thursday')+getSleepHours('friday')+getSleepHours('saturday')+getSleepHours('sunday');
  const getActualSleepHours = () => {
    return `${7+7+7+7+7+6+8}`;
  }
  
  // console.log(getActualSleepHours());
  const getIdealSleepHours = (idealHours) =>{
    return idealHours*7;  
  };
  // console.log(getIdealSleepHours());
  const calculateSleepDebt = () =>{
    const actualSleepHours = parseInt(getActualSleepHours());
    console.log(actualSleepHours);
    const idealSleepHours = getIdealSleepHours(5);
    console.log(idealSleepHours)
  if(actualSleepHours === idealSleepHours){
    console.log('You got the perfect amount of sleep.');
  } else if (actualSleepHours > idealSleepHours){
    console.log(` You got ${actualSleepHours - idealSleepHours}hr more sleep than needed.`);
  } else {
    console.log(`${idealSleepHours-actualSleepHours}hr less then Ideal Sleep, you should get some rest`);
  }
  };
  calculateSleepDebt();
  