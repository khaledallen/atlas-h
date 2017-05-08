
function convertToRoman(num) {
  
  // Step 1: Separate the number into 1s, 10s, 100s, 1000s

  function getPart(decimal) {
    return (num / decimal ) - (num / decimal) % 1;
  }
  
  var thousands = getPart(1000);
  var hundreds = getPart(100) - thousands*10;
  var tens = getPart(10) - thousands*100 - hundreds*10;
  var ones = num - thousands*1000 - hundreds*100 - tens*10;
    
  // Step 2: Check for 5s/50s/500s
  
  var RomanOne = [];
  var RomanTens = [];
  var RomanHundreds = [];
  var RomanThousands = [];

  
  function compileRoman(input, numeral, fiveNumeral, tenNumeral, output)
  {
          if (10-input == 1)
            {
              output.push(numeral);
              output.push(tenNumeral);
            }
           else if (5-input == 1)
            {
              output.push(numeral);
              output.push(fiveNumeral);
            }
    else 
    {
      for ( var i = 0 ; i < input; i++)
        {
          if (input >= 5)
            {
              output.push(fiveNumeral);
              input = input - 4;
            }
          else {
             output.push(numeral);
          }

    }
        }
  }
  
  compileRoman(ones, "I", "V", "X", RomanOne);
  compileRoman(tens, "X", "L", "C", RomanTens);
  compileRoman(hundreds, "C", "D", "M", RomanHundreds);
  compileRoman(thousands, "M", "M", "M", RomanThousands);

  
  var Roman = [];
  
  Roman.splice(0,0,RomanThousands.join(""),RomanHundreds.join(""), RomanTens.join(""),RomanOne.join(""));
  
  return Roman.join("");
  // 1 = I
  // 5 = V
  // 10 = X
  // 50 = L
  // 100 = C
  // 500 = D
  // 1000 = M
  
  // Step 3: Convert the pieces into the Roman Numerals
  // Step 4: Join everything back together
  
}

convertToRoman(68);
