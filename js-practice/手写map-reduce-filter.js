// 函数map
function map(array, callback) {
  const arr = []
  for (let index = 0; index < array.length; index++) {
    // 将callback的执行结果添加到结果数组中
    arr.push(callback(array[index], index))
  }
  return arr
}

// 函数reduce
function reduce(array, callback, initValue) {
  let result = initValue
  for (let index = 0; index < array.length; index++) {
    // 调用回调函数将返回的结果赋值给result
    result = callback(result, array[index], index)
  }
  return result
}

// 函数filter
function filter(array, callback) {
  const arr = []
  for (let index = 0; index < array.length; index++) {
    if (callback(array[index], index)) {
      arr.push(array[index])
    }
  }
  return arr
}

// 测试map
const arr = [1, 2, 0, 4, 5];
const result1 = map(arr, (item, index) => {
  return item + 10;
});
console.log(result1); // [ 11, 12, 10, 14, 15 ]

// 测试reduce
let result2 = reduce(arr, function (res, value) {
  return res + value;
}, 0);
console.log(result2); // 12

// 测试filter
const result3 = filter(arr, item => item % 2 === 0);
console.log(result3); // [ 2, 0, 4 ]