// 判断一个字符串中出现次数最多的字符，统计这个次数
function strCountMost(s) {
  var o = {}; // 记录字符串中每一个字符出现的次数
  if (typeof s !== "string") {
    alert("请传入string类型的数据");
    return;
  }
  for (var i = 0; i < s.length; i++) {
    var item = s.charAt(i);
    if (o[item]) {
      o[item]++;
    } else {
      o[item] = 1;
    }
  }
  var maxChar; // 出现次数最多的字符
  var maxCount = 1; // 此字符出现的次数 假设最大值是1
  for (var key in o) {
    if (maxCount < o[key]) {
      maxCount = o[key]; // 最多的次数
      maxChar = key; // 次数最多的字符
    }
  }
  return "出现最多的是:" + maxChar + "  出现的次数为:" + maxCount + "次";
}
var str = "abghnbhnxyodgfhngghnjnp";
console.log(strCountMost(str));
// 出现最多的是:n  出现的次数为:5次
