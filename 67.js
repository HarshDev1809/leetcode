/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

const addBinary = (a, b) => {
    const lengthA = a.length;
    const lengthB = b.length;
    let maxLength = lengthA >= lengthB ? lengthA : lengthB;
    let i = lengthA - 1;
    let j = lengthB - 1;
    let sum = "";
    let carryForward = 0;
    while(maxLength > 0){
        const sum_ = Number(a[i] ?? 0) + Number(b[j] ?? 0) + carryForward;
        if(sum_ > 1){
            sum = (sum_ % 2) + sum;
            carryForward = Math.floor(sum_ / 2)
        }else{
            sum = sum_ + sum;
            carryForward = 0;
        }
        i--;
        j--;
        maxLength--;
    }
    if(carryForward !== 0 ){
        sum = carryForward + sum
    }
  return sum;
};

export { addBinary };
