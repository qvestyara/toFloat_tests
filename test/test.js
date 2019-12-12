import { toFloat } from "../src/index";
const { describe } = require("mocha");

var assert = require("assert");
describe("toFloat should correctly convert strings to numbers", () => {
  it("should escape discounted price amounts", () => {
    assert.equal(100.12, toFloat("-$100.12"));
  });
  it("should handle large numbers correctly", () => {
    assert.equal(1000.12, toFloat("Usd $1,000.12"));
  });
  it("should handle ASCII code of dollar sign", () => {
    assert.equal(462.96, toFloat("&#36;462.96"));
  });
  it("should ignore letters to convert strings to numbers", () => {
    assert.equal(46296, toFloat("Total:= 462,96 USD"));
  });
  it("should handle string without coins correctly", () => {
    assert.equal(100, toFloat("$100"));
  });
  it("should handle string with letters in the end correctly", () => {
    assert.equal(1000.12, toFloat("1,000.12 USD"));
  });
  it("should handle string with letters at the beginning correctly", () => {
    assert.equal(1000.12, toFloat("Total: $1,000.12"));
  });
  it("should work with numbers correctly", () => {
    assert.equal(1200, toFloat(1200));
  });
  it("should throw an error if can't parse string to number", () => {
    assert.throws(
      () => {
        toFloat("Some string");
      },
      err => {
        if (
          err instanceof Error &&
          /toFloat parameter can`t be converted to number\!/.test(err)
        ) {
          return true;
        }
      }
    );
  });
});
