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
