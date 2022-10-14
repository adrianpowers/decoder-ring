const caesarModule = (function () {

  function caesar(input, shift, encode = true) {

    // returns false if the shift isn't a valid number
    if (shift === 0 || shift < -25 || shift > 25) return false;
    
    // splits input into an array
    let inputArray = input.toLowerCase().split("");

    // uses map to replace original letter with encoded letter
    let resultArray = inputArray.map((letter) => {
      // if the current character isn't a lowercase letter, return it
      if(letter.charCodeAt(0) < 97 || letter.charCodeAt(0) > 122) return letter;
      // if encoding, add the shift value to the character's code
      if(encode === true) newCharCode = letter.charCodeAt(0) + shift;
      // if decoding, subtract the shift value from the character's code
      if(encode === false) newCharCode = letter.charCodeAt(0) - shift;
      // high and low offsets for the new character code
      if (newCharCode < 97) {
        newCharCode += 26;
      }
      if (newCharCode > 122) {
        newCharCode -= 26;
      }
      // return a string containing the letter at the new code
      return String.fromCharCode(newCharCode);
    });

    // return the joined result array
    return resultArray.join("");
  }

  return {
    caesar,
  };

})();

module.exports = { caesar: caesarModule.caesar };