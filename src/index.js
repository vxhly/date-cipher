import moment from 'moment'

/**
 * @method formatDate 简单的格式化日期格式
 *
 * @param {Date} date 需要被格式化的日期
 * @param {String} formatStr 格式化字符串
 *
 * @return {String} 返回格式化好的日期
 */
export const formatDate = ({
  date = new Date(),
  formatStr = 'YYYY年MM月DD日',
} = {}) => {
  return moment(date).format(formatStr)
}

/**
 * @method s2eWeek 计算周的起止时间
 *
 * @param {Date} date 任意一天
 * @param {String} formatStr 格式化字符串
 * @param {Boolean} isCurrent 结束时间为当前时间
 *
 * @return {Object} 返回起止日期
 */
export const s2eWeek = ({
  date = new Date(),
  formatStr = 'YYYY年MM月DD日',
  isCurrent = false,
} = {}) => {
  const startDate = moment(date).startOf('week').format(formatStr)
  let endDate
  if (isCurrent) {
    endDate = moment(date).format(formatStr)
  } else {
    endDate = moment(date).endOf('week').format(formatStr)
  }

  return {
    startDate,
    endDate,
  }
}

/**
 * @method s2eMonth 计算月的起止时间
 *
 * @param {Date} date 任意一天
 * @param {String} formatStr 格式化字符串
 * @param {Boolean} isCurrent 结束时间为当前时间
 *
 * @return {Object} 返回起止日期
 */
export const s2eMonth = ({
  date = new Date(),
  formatStr = 'YYYY年MM月DD日',
  isCurrent = false,
} = {}) => {
  const startDate = moment(date).startOf('month').format(formatStr)
  let endDate
  if (isCurrent) {
    endDate = moment(date).format(formatStr)
  } else {
    endDate = moment(date).endOf('month').format(formatStr)
  }

  return {
    startDate,
    endDate,
  }
}

/**
 * @method s2eYear 计算年的起止时间
 *
 * @param {Date} date 任意一天
 * @param {String} formatStr 格式化字符串
 * @param {Boolean} isCurrent 结束时间为当前时间
 *
 * @return {Object} 返回起止日期
 */
export const s2eYear = ({
  date = new Date(),
  formatStr = 'YYYY年MM月DD日',
  isCurrent = false,
} = {}) => {
  const startDate = moment(date).startOf('year').format(formatStr)
  let endDate
  if (isCurrent) {
    endDate = moment(date).format(formatStr)
  } else {
    endDate = moment(date).endOf('year').format(formatStr)
  }

  return {
    startDate,
    endDate,
  }
}

/**
 * @method dayByDays 计算N天前或者N天后的日期
 *
 * @param {Date} date 一年中任意一天
 * @param {String} formatStr 格式化字符串
 * @param {Number} days 计算天数
 * @param {String} type 计算的是之前的日期 before 之后的日期 after
 *
 * @return {Object} 默认返回昨天日期
 */
export const dayByDays = ({
  date = new Date(),
  days = 1,
  formatStr = 'YYYY年MM月DD日',
  type = 'before',
} = {}) => {
  switch (type) {
    case 'before':
      return moment(date).subtract(days, 'days').format(formatStr)
    case 'after':
      return moment(date).add(days, 'days').format(formatStr)
    default:
      return ''
  }
}

/**
 * @method s2eDayByDays 计算N天前或者N天后的日期（起止日期）
 *
 * @param {String} formatStr 格式化字符串
 * @param {Number} days 计算天数
 * @param {String} type 计算的是之前的日期 before 之后的日期 after
 * @param {Boolean} isCurrent 是否包含今天
 *
 * @return {Object} 默认返回最近一周的起止日期
 */
export const s2eDayByDays = ({
  days = 6,
  formatStr = 'YYYY年MM月DD日',
  type = 'before',
  isCurrent = false,
} = {}) => {
  let startDate
  let endDate

  switch (type) {
    case 'before':
      if (isCurrent) {
        endDate = moment().format(formatStr)
        startDate = dayByDays({
          date: endDate,
          days,
          formatStr,
          type,
        })
      } else {
        endDate = dayByDays({
          formatStr: '',
        })
        startDate = dayByDays({
          date: endDate,
          days,
          formatStr,
          type,
        })
        endDate = formatDate({
          date: endDate,
          formatStr,
        })
      }
      break
    case 'after':
      if (isCurrent) {
        startDate = moment().format(formatStr)
        endDate = dayByDays({
          date: startDate,
          days,
          formatStr,
          type,
        })
      } else {
        startDate = dayByDays({
          formatStr: '',
          type,
        })
        endDate = dayByDays({
          date: startDate,
          days,
          formatStr,
          type,
        })
        startDate = formatDate({
          date: startDate,
          formatStr,
        })
      }
      break
    default:
      return ''
  }

  return {
    startDate,
    endDate,
  }
}

/**
 * @method diffDays 计算两个时间段的相差天数,精确到 N 年 N 天 精确到小数后两位
 *
 * @param {Date} startDate 开始时间
 * @param {Date} endDate 结束时间
 * @param {Boolean} format 是否进行格式化，为 true 格式化成 N 年 N 天，为 false 直接返回未格式化的
 *
 * @return {String} 相差的天数
 */
export const diffDays = ({
  startDate,
  endDate,
  format = false,
} = {}) => {
  const start = moment(startDate)
  const end = moment(endDate)
  const diff = end.diff(start, 'days', true).toFixed(2)
  const diffYears = Math.floor(diff / 365)

  let str = ''
  if (format) {
    if (diffYears) {
      str = `${diffYears} 年 ${(diff - diffYears * 365) + 1} 天`
    } else {
      str = `${Math.floor(diff) + 1} 天`
    }
  } else {
    str = Math.round(diff)
  }
  return str
}
