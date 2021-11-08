// 函数every() 数组中所有元素都通过回调函数的测试返回true ，否则返回false。
function every(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        // 执行回调 如果回调执行返回结果为 false
        if (!callback(arr[i], i)) {
            return false;
        }
    }
    //如果都满足条件则返回 true
    return true;
}

// 函数some() 数组中有至少一个元素通过回调函数的测试就会返回true；所有元素都没有通过回调函数的测试返回值才会为false。
function some(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        // 执行回调 如果回调执行返回结果为 false
        if (callback(arr[i], i)) {
            return true;
        }
    }
    //如果都满足条件则返回 true
    return false;
}

// 测试
const arr = [20, 47, 62];
const result1 = every(arr, (item, index) => {
    return item > 40;
});
const result2 = some(arr, (item, index) => {
    return item > 40;
});
console.log(result1); // false
console.log(result2); // true