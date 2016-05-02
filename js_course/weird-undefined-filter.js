function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  
  arr = arr.filter(function(id) {
    
  var x = Boolean(id);
    return x;

  });
  
  return arr;
}

bouncer([1, null, NaN, 2, undefined]);
