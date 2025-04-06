function isPalindrome(x){
    if(x < 0){
        return false
    }
    let num = x ;
    let reversedNumber = 0;

    while(num>0){
        const lastDigit = num % 10;
        reversedNumber = reversedNumber * 10 + lastDigit;
        num = (num - lastDigit) /  10
    }
    
    return reversedNumber === x
}

export {isPalindrome}