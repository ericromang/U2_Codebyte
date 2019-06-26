function FirstFactorial(num) { 

  if(num===0){
    return 1;
  }
  return num*FirstFactorial(--num); 
         
}
   
// keep this function call here 
FirstFactorial(readline());