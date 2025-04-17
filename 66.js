/**
 * @param {number[]} digits
 * @return {number[]}
 */

const plusOne = (digits)=>{
    const length = digits.length;
    let i = length -1;
    let carryForward = 0;
    let sum = digits[i] + 1;
    if(sum < 10){
        digits[i] = sum;
        return digits;
    }else{
        carryForward = 1;
        digits[i] = sum % 10;
        i--;
        while(i >= 0 && carryForward === 1){
            sum = digits[i] + carryForward;
            if(sum < 10){
                digits[i] = sum;
                carryForward = 0;
                return digits;
            }
            carryForward = 1;
            digits[i] = sum % 10;
            i--;
        }
        if(carryForward === 1){
            return [1,...digits]
        }
    }
}

export {plusOne};