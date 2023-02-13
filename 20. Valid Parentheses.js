/*
Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    /*
    分析題目為判斷 s 的陣列中是否為成對的括號
    */
    // 給一個空陣列暫存括號
    let stack = []
    for(let i = 0; i < s.length; i++){
        const top = stack[stack.length - 1]
        if(s[i] === '(' || s[i] === '{' || s[i] === '['){
            stack.push(s[i])
        } else if(s[i] ===')' && top === '('){
            stack.pop()
        } else if (s[i] === '}' && top === '{'){
            stack.pop()
        } else if (s[i] === ']' && top === '['){
            stack.pop()
        }
        // 若以上情況皆不符合，只有其中一邊括號不成對則 return fasle
        else return false
    }
    // 括號皆成對 stack 為空
    return stack.length === 0
};
