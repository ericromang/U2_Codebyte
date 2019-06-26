function SimpleAdding(num) { 

  if(num==1)
    return 1;
  // code goes here  
  return num + SimpleAdding(--num); 
         
}
   
// keep this function call here 
SimpleAdding(readline());