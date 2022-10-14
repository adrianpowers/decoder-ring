const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar module tests written by Adrian", () => {
    it("shift equal to zero should return false", () => {
        expect(caesar("abc", 0)).to.be.false;
    });
    it("shift less than -25 should return false", () => {
        expect(caesar("abc", -26)).to.be.false;
    });
    it("shift greater than 25 should return false", () => {
        expect(caesar("abc", 26)).to.be.false;
    });
    it("should ignore capital letters", () => {
        let expected = "def";
        let actual = caesar("ABC", 3, true);
        expect(actual).to.equal(expected);    
    });
    it("handles shifts that go past the end of the alphabet", () => {
        let expected = "c";
        let actual = caesar("z", 3);
        expect(actual).to.equal(expected);
    });
    it("should maintain spacing and symbols in original message", () => {
        let expected = "fgh!";
        let actual = caesar("abc!", 5);
        expect(actual).to.equal(expected);
    });
    it("should properly encode a message with positive shift", () => {
        let expected = "wklqnixo";
        let actual = caesar("thinkful", 3);
        expect(actual).to.equal(expected);
    });
    it("should properly encode a message with negative shift", () => {
        let expected = "thinkful";
        let actual = caesar("wklqnixo", -3);
        expect(actual).to.equal(expected);
    });
    it("should properly decode a message", () => {
        let expected = "thinkful";
        let actual = caesar("wklqnixo", 3, false);
        expect(actual).to.equal(expected);
    });
});