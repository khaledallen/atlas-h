function largestOfFour(arr) {
  // You can do this!
  
  for (i=0; i < arr.length; i++) {
    var a = arr[i][0];
    for (j=0; j < arr[i].length; j++) {
      var b = arr[i][j];
      
      if (a > b) {
        a = a;
      } else {
        a = b;
      }
    }
    arr[i] = a;
  }
  return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
