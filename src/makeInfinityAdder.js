'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let countBank = 0;

  return function add(...args) {
    if (args.length === 0) {
      const temp = countBank;

      countBank = 0;

      return temp;
    }

    countBank += args[0];

    return add;
  };
}

module.exports = makeInfinityAdder;
