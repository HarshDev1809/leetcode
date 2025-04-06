const SYMBOL_MAP = {
    I : 1,
    V : 5,
    X : 10,
    L : 50,
    C : 100,
    D : 500,
    M : 1000
}

const romanToInt = (s)=>{
    let number = 0;
    for(let i = 0 ; s[i] ; i++){

        if(s[i+1] && SYMBOL_MAP[s[i+1]] > SYMBOL_MAP[s[i]]){
            number += SYMBOL_MAP[s[i+1]] - SYMBOL_MAP[s[i]]
            i++;
        }else{
            number += SYMBOL_MAP[s[i]]
        }
    }
    return number
}   

export {romanToInt};