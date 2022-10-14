const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet = "", encode = true) {
    if (alphabet.length !== 26) return false;

    /* this block uses key/value pairs to check if a character 
    in the given alphabet cipher has been repeated;
    in the loop, it gets the key for that letter in the object:
    if it is true, that means it already exists and thus, the alphabet isn't unique;
    if it is false, the key is set to true, and it now exists */

    let alphaUniqueCheck = {};
    for (let i = 0; i < alphabet.length; i++) {
      let letterKey = alphabet[i];
      if (alphaUniqueCheck[letterKey]) return false;
      alphaUniqueCheck[letterKey] = true;
    }

    let splitAlpha = alphabet.split("");
    let splitMsg = input.toLowerCase().split("");
    let decoderAlpha = "abcdefghijklmnopqrstuvwxyz"
    let splitDecoderAlpha = decoderAlpha.split("");

    if (encode) {
      splitMsg = splitMsg.map((letter) => {
        if (letter.charCodeAt(0) < 97 || letter.charCodeAt(0) > 122)
          return letter;
        return splitAlpha[letter.charCodeAt(0) - 97];
      });

      return splitMsg.join("");
    }

    if (!encode) {
      console.log(splitAlpha)
      console.log(splitDecoderAlpha);
      splitMsg = splitMsg.map((letter) => {
        if (letter.charCodeAt(0) === 32) return letter;
        return splitDecoderAlpha[splitAlpha.indexOf(letter)]
      });

      return splitMsg.join("");
    }
  }

  return {
    substitution,
  };
})();

console.log(
  substitutionModule.substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false)
); // message
console.log(
  substitutionModule.substitution("jrufscpw xoy", "xoyqmcgrukswaflnthdjpzibev", false)
); // thinkful abc

module.exports = { substitution: substitutionModule.substitution };
