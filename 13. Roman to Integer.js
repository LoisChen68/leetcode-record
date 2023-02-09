/*
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

Example 1:

Input: s = "III"
Output: 3
Explanation: III = 3.
Example 2:

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
Example 3:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

*/

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    // 判斷題型為將羅馬數字轉換為阿拉伯數字
    // 先定義每個羅馬數字對應到的阿拉伯數字
    const roman = {
        I:1,V:5,X:10,L:50,C:100,D:500,M:1000
    }
    // 起始數字為 0
    let sum = 0;
    for(let i = 0; i < s.length; i++){
        // 定義左邊字符及右邊字符
        const leftChar = roman[s[i]];
        const rightChar = roman[s[i+1]];
        // 如果右邊比左邊大就右邊減左邊
        // ex: CM => M > C => 1000 - 100 = 900
        // ex: XC => C > X => 100 - 10 = 90
        if(rightChar > leftChar){
            sum = sum + rightChar - leftChar ;
            i++;
        }else{
            // 若右邊小於左邊則直接 +數字
            sum = sum + leftChar;
        }
    }
    return sum
};
