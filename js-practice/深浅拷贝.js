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

// 深拷贝
function deepClone(target) {
  //检测数据的类型
  if (typeof target === 'object' && target !== null) {
      const result = Array.isArray(target) ? [] : {};
      //遍历对象
      for (let key in target) {
          //检测该属性是否为对象本身的属性
          if (target.hasOwnProperty(key)) {
              //拷贝
              result[key] = deepClone(target[key]);
          }
      }
      return result;
  } else { 
      return target;
  }
}

const obj1 = {
  name: '张三',
  age: 18,
  sex: '男',
  dog: {
    name: '金毛',
    age: 2
  },
  friends: ['李四', '王五'],
  test: function(){}
}

const obj2 = deepClone(obj1)
// 修改obj1中的成员 会影响obj2
obj1.dog.name = 'xxx';
obj1.friends[0] = 'xxx';
console.log(obj1);
console.log(obj2);