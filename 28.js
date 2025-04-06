/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = (haystack, needle) => {
  for (let i = 0; i < haystack.length; i++) {
    let k = 0;
    while (k < needle.length && haystack[i + k] === needle[k]) {
      k++;
    }
    if (k === needle.length) {
      return i;
    }
  }

  return -1;
};

export { strStr };
