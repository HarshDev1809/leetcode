/**
 * @param {string} s
 * @return {number}
 */

const lengthOfLastWord = (s)=>{
    let i = 0;
    let index = 0;
    let splitString = [];
    let word = ""
    while(s[index]){
        if(s[index] === " "){
            console.log(s[index])
            if(word === ""){
                index++;    
                continue
            }else{
                splitString.push(word);
                i++;
                word = "";
                index++;
                continue
            }
            
        }
        word += s[index]
    
        index ++ ;
    }
    if(word !== ""){
        splitString[i] = word;
        i++

    }
    return splitString[i - 1].length
}

export {lengthOfLastWord}