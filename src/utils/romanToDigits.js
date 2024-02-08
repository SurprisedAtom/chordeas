function romanToDigits(roman) {
    const romanNumerals = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
    };
  
    let result = 0;
  
    for (let i = 0; i < roman.length; i++) {
      const currentDigit = romanNumerals[roman[i]];
      const nextDigit = romanNumerals[roman[i + 1]];
  
      if (nextDigit > currentDigit) {
        result += (nextDigit - currentDigit);
        i++; // Skip the next character since it's already considered
      } else {
        result += currentDigit;
      }
    }
  
    return result;
  }

export default romanToDigits