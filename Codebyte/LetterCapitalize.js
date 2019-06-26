function LetterCapitalize(str) { 
  var cadena = str.split(" ");
  for (var i = 0, n = cadena.length; i < n; i++) {
   cadena[i] = cadena[i][0].toUpperCase() + cadena[i].slice(1); 
  }
  str = cadena.join(" ");
  return str; 
         
}
   
// keep this function call here 
LetterCapitalize(readline());