// Write your function here:
const toEmoticon = (emotion) =>{
    switch(emotion){
      case 'shrug':
        return '|_{"}_|';
      case 'smiley face' :
        return ':)' ;
      case 'frowny face':
        return ':(';
      case 'winky face':
        return ';)';
      case 'heart':
        return '<3';
      default:
        return '|_(* ~ *)_|';        
    }
  
  }
  
  console.log(toEmoticon('smiley face'));
  console.log(toEmoticon('shrug'));
  console.log(toEmoticon('frowny face'));
  console.log(toEmoticon('winky face'));
  console.log(toEmoticon('cute face'));
  console.log(toEmoticon('heart'));
  console.log(toEmoticon('whatever'));
  
  
  
  // Uncomment the line below when you're ready to try out your function
  // console.log(toEmoticon("whatever")) 
  // Should print  '|_(* ~ *)_|'
  
  // We encourage you to add more function calls of your own to test your code!
  
