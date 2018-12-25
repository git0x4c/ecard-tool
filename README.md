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

## Modules

### Cookie
#### 操作cookie的方法集合
|方法名称|说明|返回值|
| :--: | :--: | :--: |
|setCookie|设置Cookie|null|
|getCookie|读取Cookie|String|
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
