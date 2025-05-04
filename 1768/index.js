/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
const mergeAlternately = (word1, word2) =>{
    let result = "";
    let i = 0;
    while(word1[i] || word2[i]){

        result += `${word1[i] ?? ""}${word2[i]?? ""}`
        i++
    }

    return result
};

export {mergeAlternately}