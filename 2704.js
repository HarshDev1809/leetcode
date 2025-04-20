/**
 * @param {string} val
 * @return {Object}
 */
const expect = (val) => {
    const toBe = (val2)=>{
        if(val === val2){
            return true;
        }else{
            throw new Error(`Not Equal`);
        }
    }

    const notToBe = (val2)=>{
        if(val !== val2){
            return true;
        }else{
            throw new Error(`Equal`)
        }
    }

    return {toBe, notToBe}
};

export {expect}

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */

