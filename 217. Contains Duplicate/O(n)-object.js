var containsDuplicate = function (nums) {
  /*
  分析題目會傳入一個名為 nums 的陣列
  需要判斷陣列中若有兩個以上重複的數字回傳 true
  若都沒有重複的數字則回傳 false
  */
  // 使用 物件{} 方法
  const map = {}
  for (let i = 0; i < nums.length; i++) {
    // 如果物件中有相同的 key 返回 true，否則 value = true 
    if (map[nums[i]]) return true
    else map[nums[i]] = true
  }
  return false
};