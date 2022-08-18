"use strict";

const pipe = (...fns) => {
  for (const j of fns) {
    if (typeof j !== "function") {
      throw new Error(`${j} its not a function`);
    }
  }
  return (x) => fns.reduce((v, f) => f(v), x);
};

module.exports = { pipe };
