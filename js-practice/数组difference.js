//difference(arr1, arr2)  差集  arr1中所有不在arr2中的元素组成的数组
function difference(arr1, arr2) {
  if (arr1.length === 0) {
    return []
  } else if (arr2.length === 0) {
    return arr1.slice()
  }
  return arr1.filter(item => arr2.indexOf(item) === -1)
}

// ES6实现
// let difference = [...new Set(arr)].filter(item => !(new Set(arr2).has(item)));

// 测试
console.log(difference([1, 2, 3, 4], [3, 4, 5]));
// [ 1, 2 ]