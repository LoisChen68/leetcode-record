/**
Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
**/

/**
 * @param {number} x
 * @return {boolean}
 */
 /*
    判斷題型為將參數反轉後若相同則返回 true
    故參數頭尾會是相同的
 */
var isPalindrome = function(x) {
    const numStr = x + ''
    const len = numStr.length
    const mid = Math.floor(len/2)
    for(let i = 0; i < mid; i++){
        /*
        迴圈開始跑第一圈， i = 0
        比對字串中第 0 個如果不等於字串中長度減 1 減 0 的話，就 return false
        ["-", "1", "2", "1"]
        "-" 不等於 "1" (4 - 1 - 0)
        ["1", "2", "1"]
        "1" 等於 "1" (3 - 1 -0)
        */
        if(numStr[i] !== numStr[len-1-i]){
            return false
        }
    }
    return true
};
