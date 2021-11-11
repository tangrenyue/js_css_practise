// 函数flatten()  扁平化嵌套数组
function flatten(arr) {
  const result = [];

  arr.forEach((i) => {
    if (Array.isArray(i))
      result.push(...flatten(i));
    else
      result.push(i);
  })

  return result;
}

// flatDeep 扁平化嵌套数组，depth指定要提取嵌套数组的结构深度，默认值为 1
const flatDeep = (arr = [], depth = 1) => {
  const result = []; // 缓存递归结果
  // 开始递归
  (function flat(arr, depth) {
    // forEach 会自动去除数组空位
    arr.forEach((item) => {
      // 控制递归深度
      if (Array.isArray(item) && depth > 0) {
        // 递归数组
        flat(item, depth - 1)
      } else {
        // 缓存元素
        result.push(item)
      }
    })
  })(arr, depth)
  // 返回递归结果
  return result;
}

// 使用 reduce、concat 和递归展开无限多层嵌套的数组
// function flatDeep(arr, d = 1) {
//    return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
//                 : arr.slice();
// };

// 测试
console.log(flatten([1, 2, [3, 4, [5, 6]]])); // [ 1, 2, 3, 4, 5, 6 ] 
console.log(flatDeep([1, 2, [3, 4, [5, 6]]])); // [ 1, 2, 3, 4, [ 5, 6 ] ]