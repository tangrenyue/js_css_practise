// forEach() + 对象容器
function unique1(array) {
    const arr = []
    const obj = {}
    array.forEach(item => {
        if (!obj.hasOwnProperty(item)) {
            obj[item] = true
            arr.push(item)
        }
    })
    return arr
}

// ES6语法
function unique2(array) {
    return [...new Set(array)]
}

// 测试
console.log(unique1([2, 4, 2, 7, 8, 7, 5])); // [ 2, 4, 7, 8, 5 ]
console.log(unique2([2, 4, 2, 7, 8, 7, 5])); // [ 2, 4, 7, 8, 5 ]