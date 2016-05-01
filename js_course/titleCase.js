function titleCase(str) {
    
  array = str.split("");
  array[0] = array[0].toUpperCase();
  
  for (i=1; i < array.length; i++){
    if (array[i-1] == " ") {
      array[i] = array[i].toUpperCase();
    } else {
      array[i] = array[i].toLowerCase();
    }
  }
  str = array.join("");
  
  return str;
}

titleCase("sHoRt AnD sToUt");
