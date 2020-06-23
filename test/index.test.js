import {
  formatDate,
  s2eWeek,
  s2eMonth,
  s2eYear,
  dayByDays,
  s2eDayByDays,
  diffDays,
} from '..'
import assert from 'assert'

describe('date-cipher', () => {
  it('formatDate 格式化时间', done => {
    const output = formatDate({
      date: '2020-05-29',
      formatStr: 'YYYY年MM月DD日',
    })
    assert.equal(output, '2020年05月29日')
    done()
  })

  it('s2eWeek 计算周的起止时间(结束非当前时间)', done => {
    const output = s2eWeek({
      date: '2020-05-29',
      formatStr: 'YYYY年MM月DD日',
    })
    assert.deepEqual(output, {
      startDate: '2020年05月24日',
      endDate: '2020年05月30日',
    })
    done()
  })

  it('s2eWeek 计算周的起止时间(结束为当前时间)', done => {
    const output = s2eWeek({
      date: '2020-05-29',
      formatStr: 'YYYY年MM月DD日',
      isCurrent: true,
    })
    assert.deepEqual(output, {
      startDate: '2020年05月24日',
      endDate: '2020年05月29日',
    })
    done()
  })

  it('s2eMonth 计算月的起止时间(结束非当前时间)', done => {
    const output = s2eMonth({
      date: '2020-05-29',
      formatStr: 'YYYY年MM月DD日',
    })
    assert.deepEqual(output, {
      startDate: '2020年05月01日',
      endDate: '2020年05月31日',
    })
    done()
  })

  it('s2eMonth 计算月的起止时间(结束为当前时间)', done => {
    const output = s2eMonth({
      date: '2020-05-29',
      formatStr: 'YYYY年MM月DD日',
      isCurrent: true,
    })
    assert.deepEqual(output, {
      startDate: '2020年05月01日',
      endDate: '2020年05月29日',
    })
    done()
  })

  it('s2eYear 计算年的起止时间(结束非当前时间)', done => {
    const output = s2eYear({
      date: '2020-05-29',
      formatStr: 'YYYY年MM月DD日',
    })
    assert.deepEqual(output, {
      startDate: '2020年01月01日',
      endDate: '2020年12月31日',
    })
    done()
  })

  it('s2eYear 计算月的起止时间(结束为当前时间)', done => {
    const output = s2eYear({
      date: '2020-05-29',
      formatStr: 'YYYY年MM月DD日',
      isCurrent: true,
    })
    assert.deepEqual(output, {
      startDate: '2020年01月01日',
      endDate: '2020年05月29日',
    })
    done()
  })

  it('dayByDays 计算当前时间前一天的日期', done => {
    const output = dayByDays({
      date: '2020-05-29',
      formatStr: 'YYYY年MM月DD日',
      type: 'before',
    })
    assert.equal(output, '2020年05月28日')
    done()
  })

  it('dayByDays 计算当前时间后一天的日期', done => {
    const output = dayByDays({
      date: '2020-05-29',
      formatStr: 'YYYY年MM月DD日',
      type: 'after',
    })
    assert.equal(output, '2020年05月30日')
    done()
  })

  it('s2eDayByDays 计算最近一周起止时间(结束时间为昨天)', done => {
    const output = s2eDayByDays({
      days: 6,
      formatStr: 'YYYY年MM月DD日',
      type: 'before',
    })
    const endDate = dayByDays({
      formatStr: '',
    })
    assert.deepEqual(output, {
      startDate: dayByDays({
        date: endDate,
        days: 6,
        formatStr: 'YYYY年MM月DD日',
        type: 'before',
      }),
      endDate: formatDate({
        date: endDate,
        formatStr: 'YYYY年MM月DD日',
      }),
    })
    done()
  })

  it('diffDays 计算两个时间点相差天数', done => {
    const output = diffDays({
      startDate: '2020-05-01',
      endDate: '2020-05-07',

    })
    assert(output === 6)
    done()
  })
})