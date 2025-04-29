function twoSum(nums, target){
 
    for(let i = 0 ; i < nums.length ; i++ ){
        for(let j = i + 1; j <nums.length ; j++){
            if(Number(nums[i] + nums[j]) === Number(target)){
                return [i,j]
            }
        }
    }
    return null
}

export {twoSum};