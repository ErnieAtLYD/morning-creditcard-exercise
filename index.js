// We're going to assume creditCardNum is a string.
function validateCreditCard(creditCardNum) {
  // Write your code here!
  // credit card number does not equal 16
  if(creditCardNum.length !== 16){
    return false;
  }
  // All of the digits must be numbers
  for(let i = 0; i < creditCardNum.length; i++){
    // store the current digit
    let currentNumber = creditCardNum[i];
    // turn the digit from a string to an integer (if the digit is in fact a digit and not anther char)
    currentNumber = Number.parseInt(currentNumber);
    // check that the digit is a number
    if(!Number.isInteger(currentNumber)){
      return false;
    }
  }
  // The sum of all the digits must be greater than 16 
  if(creditCardNum[creditCardNum.length - 1] % 2 !== 0){
    return false;
  }
  var sum = 0;
  for(var i = 0; i < creditCardNum.length; i++){
    sum += Number(creditCardNum[i]);
  }
  if(sum <= 16){
    return false;
  }
  return true;
}


/**
 * Think of these as tests. Write out your function
 * above so these console.logs below return what you
 * expect.
 */
console.log(validateCreditCard("9999777788880000")); // => true
console.log(validateCreditCard("6666666666661666")); // => true
console.log(validateCreditCard("a92332119c011112")); // => false
console.log(validateCreditCard("4444444444444444")); // => false
console.log(validateCreditCard("1211111111111112")); // => true
console.log(validateCreditCard("1111111111111110")); // => false
