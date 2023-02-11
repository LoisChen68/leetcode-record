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
  // 使用 filter 方法
  // 方法一：篩選出相同的值，如果長度大於 0 ，代表有重複值返回 true
  const array = nums.filter((num, index) => { return nums.indexOf(num) !== index })
  return array.length > 0
  // 方法二：篩選出不相同的值，如果篩選長度與原始陣列長度不相同，代表有重複值返回 true
  // const array = nums.filter((num,index)=>{return nums.indexOf(num) === index})
  // return array.length !== nums.length
};