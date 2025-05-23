/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
const createCounter = (init) => {
  let val = init;
  const increment = () => {
    val++;
    return val;
  };

  const decrement = () => {
    val--;
    return val;
  };

  const reset = () => {
    val = init;
    return init;
  };

  return { increment, decrement, reset };
};

export { createCounter };

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
