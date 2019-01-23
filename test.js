let utils = require('./index')
let time = 1543821845
let result = utils.FormatDate.getDateTime(time)
console.log(result) // 2018-12-03 15:24:05

let money = 412321000.00000;
console.log(utils.FormatMoney.currency(money))

let idcard = '450108197604077167' // 随机测试用例 侵删 来源：百度
console.log('idcard', utils.Regular.isIdCard(idcard))