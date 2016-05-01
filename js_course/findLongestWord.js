function findLongestWord(str) {
    
  var array = str.split(" ");
  str = array[0];
 
  for (i=0; i < array.length; i++){
    if (str.length > array[i].length) {
      str = str;
    } else {str = array[i];}
    }
  
  return str.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
