//this is a small calculator module to be exported to another file

var calc = {
  add:
    function addition(n1,n2) {
      result=n1+n2;
      return result;
    },
  subtract:
    function subtraction(n1,n2) {
      result=n1-n2;
      return result;
    },
  multiply:
    function multiplication(n1,n2) {
      result=n1*n2;
      return result;
    },
  divide:
    function division(n1,n2) {
      result=n1/n2;
      return result;
    }
}

module.exports = calc;
