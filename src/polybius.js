// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    
    let table = [
      ["a", "b", "c", "d", "e"],
      ["f", "g", "h", "i", "k"],
      ["l", "m", "n", "o", "p"],
      ["q", "r", "s", "t", "u"],
      ["v", "w", "x", "y", "z"],
    ];    
    
    if (encode === true) {
      let lettersArray = input.replaceAll("j", "i").toLowerCase().split("");

      let resultArray = [];

      lettersArray.forEach((letter) => {
        if (letter === " ") resultArray.push(letter);
        table.forEach((row) => {
          if (row.includes(letter)) {
            let foundRow = table.indexOf(row) + 1;
            let foundColumn = row.indexOf(letter) + 1;
            resultArray.push(foundColumn.toString() + foundRow.toString());
          }
        });
      });

      return resultArray.join("");

    } else {

      if(input.replace(/\s/g,"").length % 2 === 1) return false;

      let resultArray = [];
      let arrayOfInputArrays = input.split(" ")
      arrayOfInputArrays.forEach((array) => {
        let innerArray = [];
        for(let i = 0; i < array.length; i+=2){
          let result = table[array[i+1] - 1][array[i] - 1]
          result === "i" ? innerArray.push("(i/j)") : innerArray.push(result)
        }
        resultArray.push(innerArray.join(""))
      })
    
      return resultArray.join(" ")
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
