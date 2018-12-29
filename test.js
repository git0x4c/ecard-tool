let utils = require('./utils')
let time = 1543821845
let result = utils.FormatDate.getDateTime(time)
console.log(result) // 2018-12-03 15:24:05

let money = 412321000.00000;
console.log(utils.FormatMoney.currency(money))