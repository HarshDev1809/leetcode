/**
 * @param {number} n
 * @return {string}
 */

const runLengthEncoding = (number) =>{
    
    const number_ = String(number)
    const length = number_.length;
    let count = 1;
    let encodedResult = "";
    let prevNumber = number_[0];
    for(let i = 1 ; i < length ; i++){
        if(prevNumber === number_[i]){
            count++;
        }else{
            encodedResult = encodedResult + count + prevNumber;
            prevNumber = number_[i];
            count = 1;
        }
    }
    
    return encodedResult + count + prevNumber;
}

const countAndSay = (n) => {
    let result = "1";
    for(let i = 2 ; i <= n ; i++){
        result = runLengthEncoding(result)
        
    }
    return  result
};

export {countAndSay}