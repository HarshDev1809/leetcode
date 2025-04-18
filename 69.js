/**
 * @param {number} x
 * @return {number}
 */
const  mySqrt = (x) => {
    let sqrt = x /2 ;
    let remainder = (x / sqrt)
    let differnce = Math.abs(sqrt - remainder)
    while(differnce >= 0.00000001){
        sqrt = (sqrt + remainder) / 2;
        remainder = (x / sqrt);
        differnce =  Math.abs(sqrt - remainder)
    }
    return Math.floor(sqrt)
};

export {mySqrt};