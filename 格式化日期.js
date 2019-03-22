//格式化日期对象 返回yyyy-MM-dd HH:mm:ss的形式
function formatDate(date) {
  // 判断参数date是否是日期对象
  if (!(date instanceof Date)) {
    console.error('date不是日期对象')
    return;
  }

  var year = date.getFullYear(),
    month = date.getMonth() + 1,
    day = date.getDate(),
    hour = date.getHours(),
    minute = date.getMinutes(),
    second = date.getSeconds();

  month = month < 10 ? '0' + month : month;
  day = day < 10 ? '0' + day : day;
  hour = hour < 10 ? '0' + hour : hour;
  minute = minute < 10 ? '0' + minute : minute;
  second = second < 10 ? '0' + second : second;

  return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
}

var d = new Date();
var dateStr = formatDate(d);
console.log(dateStr);



function getInterval(start, end) {
  // 两个日期对象，相差的毫秒数
  var interval = end - start;
  // 求 相差的天数/小时数/分钟数/秒数
  var day, hour, minute, second;

  // 两个日期对象，相差的秒数
  // interval = interval / 1000;
  interval /= 1000;

  day = Math.round(interval / 60 / 60 / 24); //四舍五入整数
  hour = Math.round(interval / 60 / 60 % 24);
  minute = Math.round(interval / 60 % 60);
  second = Math.round(interval % 60);

  return {
    day: day,
    hour: hour,
    minute: minute,
    second: second
  }
}

var d1 = new Date();
var d2 = new Date(2018, 1, 1);

var Interval = getInterval(d1, d2);
console.log(Interval);