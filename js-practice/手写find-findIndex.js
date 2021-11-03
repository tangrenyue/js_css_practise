// 函数 find() 返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined
function find(array, callback) {
  for (let index = 0; index < array.length; index++) {
    if (callback(array[index], index)) {
      return array[index]
    }
  }
  return undefined
}

// 函数findIndex()返回数组中满足提供的测试函数的第一个元素的索引。若没有找到对应元素则返回-1。
function findIndex (array, callback) {
  for (let index = 0; index < array.length; index++) {
    if (callback(array[index], index)) {
      return index
    }
  }
  return -1
}

// 测试
const arr = [1, 2, 0, 4, 15];
const result1 = find(arr, item => {
  return item > 10;
});
const result2 = findIndex(arr, item => {
  return item > 10;
});
console.log(result1); // 15
console.log(result2); // 4

var inventory = [{
    name: 'apples',
    quantity: 2
  },
  {
    name: 'bananas',
    quantity: 0
  },
  {
    name: 'cherries',
    quantity: 5
  }
];

function findCherries(fruit) {
  return fruit.name === 'cherries';
}
console.log(find(inventory, findCherries)); // { name: 'cherries', quantity: 5 }
console.log(findIndex(inventory, findCherries)); // 2 

