import assert from "node:assert";
import test from "node:test";

test("Multiplication", () => {
  let five = new Dollar(5);
  five.times(2);

  assert.equal(5, five.amount);
});
