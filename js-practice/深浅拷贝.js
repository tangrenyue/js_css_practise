// 浅拷贝
function clone(target) {
  // 如果是对象(object对象或者数组)
  if (target != null && typeof target === 'object') {
    if (target instanceof Array) {
      return [...target]
    } else {
      return {
        ...target
      }
    }
  }
  // 基本类型或者函数, 直接返回
  return target
}

const obj1 = {
  name: '张三',
  age: 18,
  sex: '男',
  dog: {
    name: '金毛',
    age: 2
  },
  friends: ['李四', '王五']
}

const obj2 = clone(obj1)
// 修改obj1中的成员 会影响obj2
obj1.dog.name = 'xxx';
obj1.friends[0] = 'xxx';
console.log(obj1);
console.log(obj2);