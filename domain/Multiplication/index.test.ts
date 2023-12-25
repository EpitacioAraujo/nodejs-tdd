import assert from "node:assert";
import test from "node:test";
import Dollar from "./index.js";

test("Multiplication", () => {
  let five: Dollar = new Dollar(5);
  let product: Dollar = five.times(2);

  assert.equal(10, product.amount);

  product = five.times(3);

  assert.equal(30, product.amount);
});
