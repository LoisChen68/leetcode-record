/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  /*
  分析題目會傳入一個名為 nums 的陣列
  需要判斷陣列中若有兩個以上重複的數字回傳 true
  若都沒有重複的數字則回傳 false
  */
  // 使用 new Set() 方法
  return new Set(nums).size !== nums.length
};