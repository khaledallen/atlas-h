function diffArray(arr1, arr2) {
  var newArr = [];
  var subArr1 = [];
  var subArr2 = [];
  
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      newArr.push(arr2[i]);
    }
  }
  for (i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) == -1) {
      newArr.push(arr1[i]);
    }
  }
  
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
