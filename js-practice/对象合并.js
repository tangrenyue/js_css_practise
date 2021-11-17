// mergeObject(...objs) 合并多个对象, 返回一个合并后对象
function mergeObject(...objs) {
  //声明一个空对象
  const result = {};
  //遍历所有的参数对象
  objs.forEach(obj => {
    //获取当前对象所有的属性
    Object.keys(obj).forEach(key => {
      //检测 result 中是否存在 key 属性
      if (result.hasOwnProperty(key)) {
        result[key] = [].concat(result[key], obj[key]);
      } else {
        //如果没有 则直接写入
        result[key] = obj[key];
      }
    });
  });
  return result;
}

// 测试
const object1 = {
  a: [{ x: 1 }, { y: 2 }],
  b: 1,
  c: 'test1'
}
const object2 = {
  a: { z: 3},
  b: [2, 3],
  c: 'test2'
}
console.log(mergeObject(object1, object2)) 
// { a: [ { x: 1 }, { y: 2 }, { z: 3 } ],b: [ 1, 2, 3 ],c: [ 'test1', 'test2' ] }