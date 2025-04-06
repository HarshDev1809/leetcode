const BRACES = {
    "(" : 0,
    "{" : 1,
    "[" : 2,
    ")" : 3,
    "}" : 4,
    "]" : 5

}

const isValid = (s)=>{
    const stringLength = s.length;
    if(stringLength === 1){
        return false
    }
    let queue = [];
    let queueLength = 0;
    for(let i = 0; i < stringLength ; i++){
        if(BRACES[s[i]] < 3){
            queue[queueLength] = s[i];
            queueLength ++;
        }else{
            if(BRACES[s[i]] - BRACES[queue[queueLength - 1]]  !== 3){
                return false
            }
            queue[queueLength]  = null;
            queueLength --;
        }
    }
    return queueLength === 0
}

export { isValid }