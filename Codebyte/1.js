function LongestWord(sen) { 
  palabra_mas_grande = ""
  palabras = sen.replace(",", " ").split(" "); //replace usado para eliminar "," de las palabras.
  palabras.forEach(function(palabra){
  if (palabra.length > palabra_mas_grande.length){
       palabra_mas_grande = palabra;
   };
  });
  return palabra_mas_grande 
}
   
// keep this function call here 
LongestWord(readline());  