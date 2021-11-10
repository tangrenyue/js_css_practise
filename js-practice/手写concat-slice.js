// 函数concat()  将原数组和输入的参数:数组或值合并到一个新的数组中
function concat(arr, ...args) {
    const result = [...arr];
    //遍历数组
    args.forEach(item => {
        //判断 item 是否为数组
        if (Array.isArray(item)) {
            result.push(...item);
        } else {
            result.push(item);
        }
    });
    return result;
}

// 函数slice() 返回一个新的数组，是一个由 begin 和 end 决定的原数组的浅拷贝（包括 begin，不包括end）。
function slice(arr, begin, end) {
    //若arr数组长度为 0 , 直接返回[]
    if (arr.length === 0) {
        return [];
    }

    //判断 begin超过最大下标, 直接返回[]
    begin = begin || 0;
    if (begin >= arr.length) {
        return [];
    }

    //判断 end不大于begin, 直接返回[] 
    end = end || arr.length;
    if (end < begin) {
        end = arr.length;
    }

    //声明一个空数组  
    const result = [];
    //遍历对象 取出下标在[begin, end)区间的元素存入新数组
    for (let index = begin; index < end; index++) {
        arr.push(array[index])
      }

    return result;
}

// 测试
console.log(concat(['a', 'b', 'c'], 1, [2, [3]])); // [ 'a', 'b', 'c', 1, 2, [ 3 ] ]

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']
console.log(animals.slice(2, 4)); // ["camel", "duck"]
console.log(animals.slice(2)); // ["camel", "duck", "elephant"]
console.log(animals.slice(2, 1)); // []