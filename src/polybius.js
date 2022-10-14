const polybiusModule = (function () {

  function polybius(input, encode = true) {

    // set up a 2D array of the polybius table    
    let table = [
      ["a", "b", "c", "d", "e"],
      ["f", "g", "h", "i", "k"],
      ["l", "m", "n", "o", "p"],
      ["q", "r", "s", "t", "u"],
      ["v", "w", "x", "y", "z"],
    ];    
    
    // if encoding:
    if (encode) {

      /* replacing all Js in the string with Is for encoding purposes,
      then turning it to lowercase and splitting it */
      let lettersArray = input.replace(/\j/g, "i").toLowerCase().split("");

      // initialize an empty array to hold results
      let resultArray = [];

      // for each letter in the message...
      lettersArray.forEach((letter) => {
        // if the letter is actually a space, push it to the result array;
        if (letter === " ") resultArray.push(letter);
        // for each row (nested array) in the table...
        table.forEach((row) => {
          // if the row includes the letter...
          if (row.includes(letter)) {
            // set a column and row variable to the letter's position in the 2D array;
            let foundColumn = row.indexOf(letter) + 1;
            let foundRow = table.indexOf(row) + 1;
            // then push those numbers, as strings, concatenated, to the result array
            resultArray.push(foundColumn.toString() + foundRow.toString());
          }
        });
      });

      // return the result array, joined, as a string
      return resultArray.join("");

    } else {

      /* checks the string length to make sure there's a valid amount of numbers
      (taking out spaces to check the ACTUAL length by using a regexp!) */
      if(input.replace(/\s/g,"").length % 2 === 1) return false;

      // initializes an empty array to hold results
      let resultArray = [];

      // makes an array that holds an array of each word
      let arrayOfWordArrays = input.split(" ")

      // loop over each word...
      arrayOfWordArrays.forEach((word) => {
        // initialize an empty array to hold the new word
        let newWord = [];
        // uses an i for loop to be able to skip over indices
        for(let i = 0; i < word.length; i+=2){
          /* gets the column and row numbers (-1 because indices start at 0)
          then finds the letter at those indices in the 2D array and stores it */
          let letter = table[word[i+1] - 1][word[i] - 1]
          /* if the letter is "i", push (i/j) to the new word array instead.
          otherwise, push the result */
          letter === "i" ? newWord.push("(i/j)") : newWord.push(letter)
        }
        // push the joined new word array to the result array
        resultArray.push(newWord.join(""))
      })
      
      // returns the joined result array with spaces between
      return resultArray.join(" ")
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
