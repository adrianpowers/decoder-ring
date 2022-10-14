const substitutionModule = (function () {

  function substitution(input, alphabet = "", encode = true) {

    // if the alphabet isn't exactly 26 characters long, return false
    if (alphabet.length !== 26) return false;

    /* this block uses key/value pairs in an object to check if 
    a character in the given alphabet cipher has been repeated;
    in the loop, get the value of the current letter's key in the object:
    if it is false, it doesn't already exist; true, it does.
    if the key exists and the alphabet isn't unique, exit early and return false.
    otherwise, set the letter's key to true to show that it now exists. */

    let alphaUniqueCheck = {};
    for (let i = 0; i < alphabet.length; i++) {
      let letterKey = alphabet[i];
      if (alphaUniqueCheck[letterKey]) return false;
      alphaUniqueCheck[letterKey] = true;
    }

    // split the given cipher alphabet, input message, and normal alphabet to arrays.
    let splitAlpha = alphabet.split("");
    let splitMsg = input.toLowerCase().split("");
    let decoderAlpha = "abcdefghijklmnopqrstuvwxyz"
    let splitDecoderAlpha = decoderAlpha.split("");

    // if encoding:
    if (encode) {
      // use map to replace letter with encoded letter
      let newMsg = splitMsg.map((letter) => {
        // ensures that it only encodes letters, not spaces or symbols
        if (letter.charCodeAt(0) < 97 || letter.charCodeAt(0) > 122)
          return letter;
        /* converts the character code of the given lowercase letter, 
        then subtracts the lowest lowercase alphabet code (97) from it,
        then uses that value to return a character at that index 
        in the cipher alphabet array */
        return splitAlpha[letter.charCodeAt(0) - 97];
      });

      // returns the joined message
      return newMsg.join("");
    }

    // if decoding:
    if (!encode) {
      // uses map to replace letter with decoded letter
      let newMsg = splitMsg.map((letter) => {
        // if the character is a space, return it
        if (letter.charCodeAt(0) === 32) return letter;
        /* finds the index of the current character in the cipher alphabet,
        then returns the letter at the same index in the regular alphabet */
        return splitDecoderAlpha[splitAlpha.indexOf(letter)]
      });

      // returns the joined message
      return newMsg.join("");
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
