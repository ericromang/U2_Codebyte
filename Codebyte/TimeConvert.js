function TimeConvert(num) { 
  var hours = Math.floor(num/60);
  var minutes = num % 60;
  var str = hours + ":" + minutes;
  return str;
  
         
}
TimeConvert(readline());