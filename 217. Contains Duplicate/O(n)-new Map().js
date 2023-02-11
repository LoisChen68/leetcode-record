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
  // 使用 Map 方法
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    // 如果 map 中有相同值返回 true，若無進行 set
    if (map.has(nums[i])) return true
    else map.set(nums[i], i)
  }
  return false
};