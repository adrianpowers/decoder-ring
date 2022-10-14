const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("Adrian's polybius tests", () => {
    it(("i should translate to 42"), () => {
        expect(polybius("ai", true)).to.be.equal("1142");
    });
    it(("j should translate to 42"), () => {
        expect(polybius("aj", true)).to.be.equal("1142");
    });
    it(("42 should decode to (i/j)"), () => {
        expect(polybius("1142", false)).to.be.equal("a(i/j)");
    });
    it(("should properly encode a message regardless of spaces and capitals"), () => {
        let expected = "11 2131 3545 55";
        let actual = polybius("a bC Xy z");
        expect(expected).to.be.equal(actual);
    });
    it(("should properly decode a message regardless of spaces and capitals"), () => {
        let expected = "a bc xy z";
        let actual = polybius("11 2131 3545 55", false);
        expect(expected).to.be.equal(actual);
    });
    it(("DECODE: should return false if input string length is odd"), () => {
        expect(polybius("112", false)).to.be.equal(false);
    });
});
