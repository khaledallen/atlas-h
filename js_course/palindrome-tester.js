function palindrome(str) {
  // Good luck!
  str = str.toLowerCase().replace(/[^a-z|^0-9+]/g,"");
  var strNew = str.split("").reverse("").join("");
  
  if (str == strNew){  
  return true;
  } else {return false;}
}


palindrome("0_0 (: /-\ :) 0-0");
