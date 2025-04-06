/**
 * @param {number[]} nums
 * @return {number}
 */

const removeDuplicates = (nums)=>{
    let uniqueNumbers = 0;
    for(let i = 1 ; i < nums.length ; i++){
        if(nums[i] > nums[uniqueNumbers]){
            const temp = nums[uniqueNumbers +1]
            nums[uniqueNumbers + 1] = nums[i];
            nums[i] = temp
            uniqueNumbers ++;
        }
    }

    return uniqueNumbers + 1;
}

export {removeDuplicates}