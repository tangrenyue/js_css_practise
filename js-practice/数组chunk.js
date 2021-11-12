// 函数chunk(array, size)
// 将数组拆分成多个 size 长度的区块，每个区块组成小数组,整体组成一个二维数组
function chunk(array, size) {
  if (array.length === 0) {
    return []
  }
  size = size || 1

  const bigArr = []
  let smallArr = []

  array.forEach(item => {
    if (smallArr.length === 0) {
      bigArr.push(smallArr)
    }
    smallArr.push(item)
    if (smallArr.length === size) {
      smallArr = []
    }
  })

  return bigArr
}

// 测试
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3));
// [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8 ] ]

console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8]));
// [ [ 1 ], [ 2 ], [ 3 ], [ 4 ], [ 5 ], [ 6 ], [ 7 ], [ 8 ] ]