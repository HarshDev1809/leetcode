/**
 * @param {number[]} differences
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
// const numberOfArrays = (differences, lower, upper) => { 
//     const digits = {};
//     for(let i = 0; i < differences.length ; i ++){
//         const difference = differences[i]
//         if(!digits[i]){
//             digits[i] = {};
//         }
//         if(!digits[i+1]){
//             digits[i+1]  = {};
//         }
//         if(i=== 0){
//             for(let j = lower ; j <= upper ;j++){
//                 for(
//                     let k = j + difference ; k <= upper && k >= lower; k = k + difference){
                    
//                     if(!digits[i][j]){
//                         digits[i][j] = j;
//                     }
//                     if(!digits[i+1][k]){
//                         digits[i+1][k] = k;
//                     }
//                 }
//             }
//         }else{
//             const arrayI = Object.values(digits[i]);
//             console.log(arrayI)
//             for(let j = 0 ; j < arrayI.length ; j++){
//                 const ith = arrayI[j];
//                 console.log("i",ith + difference)
//                 for(let k = ith + difference ; k <= upper && k >= lower; k += difference){
//                     console.log(ith)
//                     if(!digits[i+1][k]){
//                         digits[i+1][k] = k;
//                     }
//                 }
//             }
//         }

//     }
//     console.log(digits)
    
// };


// const numberOfArrays = (differences, lower, upper) => { 
//     const {length : differenceLength} = differences;
//     let count = 0;
//     let found = true;
//     let cobination = [];
//     for(let i = lower ; i <= upper && i >= lower ; i++){
//         found = true
//         for(let j= 0 ; j < differenceLength ; j++){
//             const difference = differences[j];
//             const next = i + difference;
//             if(next < lower || next > upper){
//                 found = false;
//             }
//         }
//         if(found){
//             count++
//         }
//     }
//     console.log(count)
// };

const numberOfArrays = (differences, lower, upper) => {
    let minHidden0 = -Infinity; // Tracks highest lower bound for a
    let maxHidden0 = Infinity;  // Tracks lowest upper bound for a
    let prefixSum = 0;         // Net change in altitude

    for (let i = 0; i <= differences.length; i++) {
        if (i > 0) {
            prefixSum += differences[i - 1]; // Update net change
        }
        // Constraint: lower <= a + prefixSum <= upper
        minHidden0 = Math.max(minHidden0, lower - prefixSum); // Highest lower bound
        maxHidden0 = Math.min(maxHidden0, upper - prefixSum); // Lowest upper bound
    }

    if (minHidden0 > maxHidden0) {
        return 0; // No valid a
    }
    return Math.floor(maxHidden0) - Math.ceil(minHidden0) + 1; // Count integers in [minHidden0, maxHidden0]
};
export {numberOfArrays}