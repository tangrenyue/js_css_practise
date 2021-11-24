/* leetcode 1. 两数之和 TwoSum
给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出和为目标值target的那两个整数，并返回它们的数组下标。
你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
你可以按任意顺序返回答案。

示例 1：输入：nums = [2,7,11,15], target = 9
输出：[0,1]    解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。

示例 2： 输入：nums = [3,2,4], target = 6
输出：[1,2]

示例 3：输入：nums = [3,3], target = 6
输出：[0,1]
*/

/* 1.暴力法  将两数之和转换为两数之差。
双层循环找出当前数组中符合条件的两个元素，并将它们的索引下标组合成数组返回即所求。
时间复杂度：O(n^2) 
空间复杂度：O(1)
*/
const twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === target - nums[j]) {
                return [i, j];
            }
        }
    }
}

/* 2.算法优化 借用 Map 
借用 Map 存储遍历过的元素及其索引，每遍历一个元素时，去 Map 中查看是否存在满足要求的元素。
如果存在的话将其对应的索引从 Map 中取出和当前索引值组合为数组返回即为所求，如果不存在则将当前值作为键，当前索引作为值存入。
题目要求返回的是数组下标，所以 Map 中的键名是数组元素，键值是索引。
时间复杂度：O(n)
空间复杂度：O(n)
*/
const twoSum = function(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
      const diff = target - nums[i];
      if (map.has(diff)) {
          return [map.get(diff), i];
      }
      map.set(nums[i], i);
  }
}
 