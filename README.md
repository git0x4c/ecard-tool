# ecard-tool library
广州易林电子商务有限公司前端业务常用JavaScript函数封装

## Install
```javascript
npm install ecard-tool --save
```

## Usage
```javascript
import { Module_name } from 'ecard-tool';

Module_name.method();
```

## Example
```javascript
import { Regular } from 'ecard-tool';

let result = Regular.isEmail('liang0x4c@gmail.com');
console.log(result); // true
```

### Cookie

#### 操作cookie的方法集合
|方法名称|说明|返回值|
| :--: | :--: | :--: |
|setCookie(cname, cvalue, exdays)|设置Cookie|null|
|getCookie(cname)|读取Cookie|String|
```javascript
import { Cookie } from 'ecard-tool'
let cname = 'cookie-name'
let cvalue = 'cookie-value'
let exdays = 1
Cookie.setCookie(cname, cvalue, exdays)
let value = Cookie.getCookie(cname)
console.log(value)
```
|参数名称|说明|参数格式|默认值|必填|
| :-: | :-: | :-: | :-: | :-: |
|cname|cookie名字|string|-|√|
|cvalue|cookie值|string|-|√|
|exdays|过期天数|integer|1|√|

### FormatDate

#### 格式化时间戳 yyyy-MM-dd hh:mm:ss
|方法名称|说明|返回值|
| :--: | :--: | :--: |
|ym(time)|年月|String|
|md(time)|月日|String|
|ymd(time)|年月日|String|
|hm(time)|时分|String|
|ms(time)|分秒|String|
|hms(time)|时分秒|String|
|getDateTime(time)|年月日时分秒|Sring|
```javascript
import { FormatDate } from 'ecard-tool'
let time = 1543821845
let result = FormateDate.getDateTime(time)
console.log(result) // 2018-12-03 15:24:05
```
|参数名称|说明|参数格式|默认值|必填|
| :-: | :-: | :-: | :-: | :-: |
|time|时间戳|number|-|√|
注： 方法内部会将time * 1000

### Regular

#### 常用正则及判断

|方法名称|说明|返回值|
| :--: | :--: | :--: |
|isPhone|验证手机号码(中国大陆)|boolean|
|isEmail|验证邮箱地址|boolean|
|isIdcard|验证身份证|boolean|
|isUrl|验证url地址|boolean|
|isInteger|验证正整数|boolean|
  
|常量名称|说明|返回值|
| :--: | :--: | :--: |
|phoneReg|手机号码(中国大陆)正则|String|
|emailReg|邮箱正则|String|
|idCardReg|身份证(中国)正则|String|
|integerReg|正整数正则|String|

```javascript
import { Regular } from 'ecard-tool'
let phone = Regular.isPhone('13800138000') // true
let email = Regular.isEmail('liang0x4c@gmail.com') // true
let phoneReg = Regular.phoneReg // '^1[3,4,5,6,7,8,9]{1}\\d{9}$'
```

### FileType
#### 上传文件类型

|常量名称|说明|返回值|
| :--: | :--: | :--: |
|xls_x|xls和xlsx文件格式|String|
|image|图片格式：jpge、jpg、png|String|
|video|视频格式：mp4|String|
```javascript
import { FileType } from 'ecard-tool'
let video = FileType.video // 'audio/mp4,video/mp4'
```

### FormatMoney
#### 格式化金额
|方法名称|说明|返回值|
| :--: | :--: | :--: |
|currency|格式化货币并保留两位数|String -> eg: 1,234.00|
|limit|限制输入框小数点后两位|String|

```javascript
import { FormatMoney } from 'ecard-tool'
let money = 4000
console.log( FormatMoney.currency(money) ) // 4,000.00
```  
```html
// for vuejs
<input type="number" v-model="money" @input="money = FormatMoney.limit(money)" />
```
