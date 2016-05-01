function mutation(arr) {

  var splitString = arr[1].toLowerCase().split("");
  
  for (i=0; i < splitString.length; i++) {
    if (arr[0].toLowerCase().indexOf(splitString[i]) == -1 ) {
      return false;
    }
  }
  return true;   
}

mutation(["hello", "hey"]);
