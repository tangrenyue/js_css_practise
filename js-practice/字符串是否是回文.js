// 函数 reverseString(str) 生成一个倒序的字符串
function reverseString(str) {
	return str.split('').reverse().join('')
}

// 函数 palindrome(str) 字符串是否是回文，如果是返回 true，否则返回 false
function palindrome(str) {
  return str === reverseString(str)
}

// 测试
console.log(palindrome('abcba')); // true
console.log(palindrome('abcdd')); // false 

