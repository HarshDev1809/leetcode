/**
 * @param {string[]} strs
 * @return {string}
 */

const longestCommonPrefix = (strs)=>{
    let prefix = strs[0];
    for(let i = 1; i < strs.length ; i++){
        let tempPrefix = "";
        let j = 0
        while(j < prefix.length && j < strs[i].length && prefix[j] === strs[i][j]){
            tempPrefix += prefix[j];
            j++;
        }
        if(tempPrefix === ""){
            return ""
        }else{
            prefix = tempPrefix
        }
    }
    return prefix
}


export {longestCommonPrefix};