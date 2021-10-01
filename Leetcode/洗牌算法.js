// 其算法思想就是 从原始数组中随机抽取一个新的元素到新数组中
// 从还没处理的数组（假如还剩n个）中，产生一个[0, n]之间的随机数 random
// 从剩下的n个元素中把第 random 个元素取出到新数组中
// 删除原数组第random个元素
// 重复第 2 3 步直到所有元素取完
// 最终返回一个新的打乱的数组
// 按步骤一步一步来就很简单的实现

function shuffle(arr){
    var result = [],
        random;
    while(arr.length>0){
        random = Math.floor(Math.random() * arr.length);
        result.push(arr[random])
        arr.splice(random, 1)
    }
    return result;
}