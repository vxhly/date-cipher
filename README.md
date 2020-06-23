# date-cipher

[![NPM version](https://img.shields.io/npm/v/date-cipher.svg?style=flat-square)](https://www.npmjs.com/package/date-cipher) [![Build Status](https://travis-ci.org/vxhly/date-cipher.svg?branch=master)](https://travis-ci.org/vxhly/date-cipher) [![GitHub forks](https://img.shields.io/github/forks/vxhly/date-cipher.svg)](https://github.com/vxhly/date-cipher/network) [![GitHub stars](https://img.shields.io/github/stars/vxhly/date-cipher.svg)](https://github.com/vxhly/date-cipher/stargazers) [![NPM download](https://img.shields.io/npm/dm/date-cipher.svg?style=flat-square)](https://npmjs.org/package/date-cipher) [![GitHub license](https://img.shields.io/github/license/vxhly/date-cipher.svg)](https://github.com/vxhly/date-cipher/blob/master/LICENSE)

> 二次封装的时间计算快捷函数使用库

# methods

## 简单的格式化日期格式

``` js
/**
 * @method formatDate 简单的格式化日期格式
 *
 * @param {Date} date 需要被格式化的日期
 * @param {String} formatStr 格式化字符串
 *
 * @return {String} 返回格式化好的日期
 */
```

使用方式 =>

``` js
import { formatDate } from 'date-cipher'

console.log(formatDate())
```

## 计算周的起止时间

``` js
/**
 * @method s2eWeek 计算周的起止时间
 *
 * @param {Date} date 任意一天
 * @param {String} formatStr 格式化字符串
 * @param {Boolean} isCurrent 结束时间为当前时间
 *
 * @return {Object} 返回起止日期
 */
```

使用方式 =>

``` js
import { s2eWeek } from 'date-cipher'

console.log(s2eWeek())
```

## 计算月的起止时间

``` js
/**
 * @method s2eMonth 计算月的起止时间
 *
 * @param {Date} date 任意一天
 * @param {String} formatStr 格式化字符串
 * @param {Boolean} isCurrent 结束时间为当前时间
 *
 * @return {Object} 返回起止日期
 */
```

使用方式 =>

``` js
import { s2eMonth } from 'date-cipher'

console.log(s2eMonth())
```

## 计算年的起止时间

``` js
/**
 * @method s2eYear 计算年的起止时间
 *
 * @param {Date} date 任意一天
 * @param {String} formatStr 格式化字符串
 * @param {Boolean} isCurrent 结束时间为当前时间
 *
 * @return {Object} 返回起止日期
 */
```

使用方式 =>

``` js
import { s2eYear } from 'date-cipher'

console.log(s2eYear())
```

## 计算N天前或者N天后的日期

``` js
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
```

使用方式 =>

``` js
import { dayByDays } from 'date-cipher'

console.log(dayByDays())
```

## 计算N天前或者N天后的日期（起止日期）

``` js
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
```

使用方式 =>

``` js
import { s2eDayByDays } from 'date-cipher'

console.log(s2eDayByDays())
```

## 计算两个时间段的相差天数, 精确到 N 年 N 天 精确到小数后两位

``` js
/**
 * @method diffDays 计算两个时间段的相差天数,精确到 N 年 N 天 精确到小数后两位
 *
 * @param {Date} startDate 开始时间
 * @param {Date} endDate 结束时间
 * @param {Boolean} format 是否进行格式化，为 true 格式化成 N 年 N 天，为 false 直接返回未格式化的
 *
 * @return {String} 相差的天数
 */
```

使用方式 =>

``` js
import { diffDays } from 'date-cipher'

console.log(diffDays())
```
