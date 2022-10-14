// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6



const caesarModule = (function () {
  
  function caesar(input, shift, encode = true) {

    if (shift === 0) return false;

    if(encode === true) {
      let inputArray = input.toLowerCase().split("");
      let resultArray = inputArray.map((letter) => {
        if (letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122) {
          newCharCode = letter.charCodeAt(0) + shift;
        } else { return letter } 
        if(newCharCode < 97) {
          newCharCode += 26;
        }
        if(newCharCode > 122) {
          newCharCode -= 26;
        }
        return String.fromCharCode(newCharCode);

      })

      return resultArray.join("");
      
    } else {

      let inputArray = input.toLowerCase().split("");
      let resultArray = inputArray.map((letter) => {
      if (letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122) {
        newCharCode = letter.charCodeAt(0) - shift;
      } else { return letter } 
      if(newCharCode > 122) {
        newCharCode += shift;
      }
      return String.fromCharCode(newCharCode);
      });

      return resultArray.join("")

    }
  
  }

  return {
    caesar,
  };
})();


module.exports = { caesar: caesarModule.caesar };


// EXPECTED INPUT WITH SHIFT OF 3 IS wklqnixo