const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("Adrian's substitution tests", () => {
    it(("should have an alphabet with exactly 26 characters"), () => {
        let actual = substitution("abc", "short")
        expect(actual).to.be.false;
    });
    it(("every character in alphabet should be unique; otherwise, return false"), () => {
        let actual = substitution("abc", "abcdefghijklmnopqrstuvwxyx");
        expect(actual).to.be.false;
    });
    it(("should encode a message regardless of spaces, capitals, and special characters"), () => {
        let expected = "jrufscpw xoy";
        let actual = substitution("ThinKFul aBc", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.be.equal(expected);
    });
    it(("should decode a message regardless of spaces, capitals, and special characters"), () => {
        let expected = "thinkful abc";
        let actual = substitution("jrufscpw xoy", "xoyqmcgrukswaflnthdjpzibev", false);
        expect(actual).to.be.equal(expected);
    });
})