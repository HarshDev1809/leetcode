/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (arr, target, startIndex, endIndex) => {
    // Handle empty array or invalid range
    if (startIndex > endIndex) {
        return startIndex; // Return insertion point
    }

    // Base case: single element
    if (startIndex === endIndex) {
        return arr[startIndex] === target
            ? startIndex
            : target > arr[startIndex]
            ? startIndex + 1
            : startIndex;
    }

    const middleIndex = Math.floor((startIndex + endIndex) / 2);

    if (arr[middleIndex] === target) {
        return middleIndex;
    } else if (target > arr[middleIndex]) {
        return search(arr, target, middleIndex + 1, endIndex);
    } else {
        return search(arr, target, startIndex, middleIndex - 1);
    }
};

const searchInsert =  (nums, target) => {
    if (!nums.length) return 0; // Empty array case
    const endIndex = nums.length - 1;
    const startIndex = 0;
    return search(nums, target, startIndex, endIndex);
};

export {searchInsert}