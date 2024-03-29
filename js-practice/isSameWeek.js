const ONE_DAY = 1000 * 60 * 60 * 24

/**
 * 判断两个时间是否同一周
 * @param {Date} d1 
 * @param {Date} d2 
 */
function isSameWeek(d1, d2) {
    const difftime = Math.abs(d2 - d1)
    // 时间差大于等于7天
    if (difftime >= ONE_DAY * 7) {
        return false
    }
    // 前者存放小日期的星期，后者存放大日期的星期
    let smallDay, bigDay
    if (d1 > d2) {
        // 周日返回的是0，给它转为7
        bigDay = d1.getDay() || 7
        smallDay = d2.getDay() || 7
    } else {
        smallDay = d1.getDay() || 7
        bigDay = d2.getDay() || 7
    }

    // 大日期的星期 < 小日期的星期
    if (bigDay < smallDay) {
        return false
    }
    // 大日期的星期 == 小日期的星期，且时间差 >1 天
    if (bigDay === smallDay && difftime > ONE_DAY){
        return false
    }
    
    return true
}
