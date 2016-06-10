function sumAll(arr) {
  var sum = ((( Math.max(...arr) - Math.min(...arr )) + 1) * (arr[0]+arr[1]))/2;
  return sum;
}

sumAll([1, 4]);
