/**
 * @author hmagic
 * @email liang0x4c@gmail.com
 * @date 2018-12-24
 * @description 常用工具封装
 * @usage_method import { name } from ''
*/
const Cookie = {
  /**
   * @author hmagic
   * @date 2018-12-24
   * @description 操作cookie的方法集合
  */
  setCookie: function (cname, cvalue, exdays) {
    /**
     * @author hmagic
     * @date 2018-12-24
     * @description 设置cookie
     * @param { cname } cookie名字
     * @param { cvalue } cookie值
     * @param { exdays } cookie过期天数
    */
    if(!exdays) {
      exdays = 1
    }
    let d = new Date()
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
    let expires = 'expires=' + d.toGMTString()
    document.cookie = cname + '=' + cvalue + '; ' + expires
  },
  getCookie: function (name) {
    /**
     * @author hmagic
     * @date 2018-12-24
     * @description 获得cookie
     * @param { name } cookie名字
     * @returns String
    */
    var strcookie = document.cookie// 获取cookie字符串
    if (!strcookie || strcookie.length === 0) {
      return ''
    }
    var arrcookie = strcookie.split('; ')// 分割
    // 遍历匹配
    for (var i = 0; i < arrcookie.length; i++) {
      var arr = arrcookie[i].split('=')
      if (arr[0] === name) {
        return arr[1]
      }
    }
    return ''
  },
  delCookie: function (name) {
    var exp = new Date(); 
    exp.setTime(exp.getTime() - 1); 
    var cval = this.getCookie(name); 
    if(cval != null) 
        document.cookie = name + "="+cval+";expires=" + exp.toGMTString(); 
  }
}

const FormatDate = {
  /**
   * @author hmagic
   * @date 2018-12-24
   * @description 时间戳格式化
  */
  ym: function (time) {
    /**
     * @author hmagic
     * @date 2018-12-24
     * @description 年月
     * @param { time } 时间戳
     * @returns '' or yyyy-MM
    */
    if (!time) {
      return ''
    }
    let _date = new Date(time * 1000)
    let y = _date.getFullYear()
    let m = _date.getMonth() + 1
    m = m < 10 ? ('0' + m) : m
    return `${y}-${m}`
  },
  md: function (time) {
    /**
     * @author hmagic
     * @date 2018-12-24
     * @description 月日
     * @param { time } 时间戳
     * @returns '' or MM-dd
    */
    if (!time) {
      return ''
    }
    let _date = new Date(time * 1000)
    let m = _date.getMonth() + 1
    m = m < 10 ? ('0' + m) : m
    let d = _date.getDate()
    d = d < 10 ? ('0' + d) : d
    return `${m}-${d}`
  },
  ymd: function (time) {
    /**
     * @author hmagic
     * @date 2018-12-24
     * @description 年月日
     * @param { time } 时间戳
     * @returns '' or yyyy-MM-dd
    */
    if (!time) {
      return ''
    }
    let _date = new Date(time * 1000)
    let y = _date.getFullYear()
    let m = _date.getMonth() + 1
    m = m < 10 ? ('0' + m) : m
    let d = _date.getDate()
    d = d < 10 ? ('0' + d) : d
    return `${y}-${m}-${d}`
  },
  hm: function (time) {
    /**
     * @author hmagic
     * @date 2018-12-24
     * @description 时:分
     * @param { time } 时间戳
     * @returns '' or hh:mm
    */
    if (!time) {
      return ''
    } else {
      let date = new Date(time * 1000)
      let h = date.getHours()
      let m = date.getMinutes()
      h = h < 10 ? ('0' + h) : h
      m = m < 10 ? ('0' + m) : m
      return `${h}:${m}`
    }
  },
  ms: function (time) {
    /**
     * @author hmagic
     * @date 2018-12-24
     * @description 分:秒
     * @param { time } 时间戳
     * @returns '' or hh:mm
    */
    if (!time) {
      return ''
    } else {
      let date = new Date(time * 1000)
      let m = date.getMinutes()
      let s = date.getSeconds()
      m = m < 10 ? ('0' + m) : m
      s = s < 10 ? ('0' + s) : s
      return `${m}:${s}`
    }
  },
  hms: function (time) {
    /**
     * @author hmagic
     * @date 2018-12-24
     * @description 时：分：秒
     * @param { time } 时间戳
     * @returns '' or hh:mm:ss
    */
    if (!time) {
      return ''
    } else {
      let date = new Date(time * 1000)
      let h = date.getHours()
      let m = date.getMinutes()
      let s = date.getSeconds()
      h = h < 10 ? ('0' + h) : h
      m = m < 10 ? ('0' + m) : m
      s = s < 10 ? ('0' + s) : s
      return `${h}:${m}:${s}`
    }
  },
  getDateTime: function (time) {
    /**
     * @author hmagic
     * @date 2018-12-24
     * @description 获得年-月-日 时:分:秒
     * @param { time } 时间戳
     * @returns '' or yyyy-MM-dd hh:mm:ss
    */
    if (!time) {
      return ''
    }
    return this.ymd(time) + ' ' + this.hms(time)
  }
}
const Regular = {
  /**
   * @author hmagic
   * @date 2018-12-24
   * @description 常用正则判断
  */
  phoneReg: '^1[3,4,5,6,7,8,9]{1}\\d{9}$',
  emailReg: '^[a-z0-9A-Z]+[-|a-z0-9A-Z._]+@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-z]{2,}$',
  idCardReg: '^(\\d{6})(\\d{4})(\\d{2})(\\d{2})(\\d{3})([0-9]|X|x)$',
  urlReg: 'http(s)?://([\\w-]+\\.)+[\\w-]+(/[\\w- ./?%&=]*)?',
  integerReg: '^[0-9]\\d*$',
  money: /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/,
  chinese: '^[\u4E00-\u9FA5]+$',
  isPhone: function (str) {
    /**
     * @author hmagic
     * @date 2018-12-24
     * @description 判断手机号码(中国大陆)
     * @param { str } 手机号码
     * @returns { boolean }
    */
    if (!str) return false
    const reg = new RegExp(this.phoneReg)
    return reg.test(str)
  },
  isEmail: function (str) {
    /**
     * @author hmagic
     * @date 2018-12-24
     * @description 判断邮箱
     * @param { str } 邮箱地址
     * @returns { boolean }
    */
    if (!str) return false
    const reg = new RegExp(this.emailReg)
    return reg.test(str)
  },
  isIdCard: function (str) {
    /**
     * @author hmagic
     * @date 2018-12-24
     * @description 判断身份证
     * @param { str } 身份证号码
     * @returns { boolean }
    */
    if (!str) return false
    // const reg = new RegExp(this.idCardReg)
    // return reg.test(str)
    var main = {
      vcity: {
        11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",
        21:"辽宁",22:"吉林",23:"黑龙江",31:"上海",32:"江苏",
        33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",
        42:"湖北",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",
        51:"四川",52:"贵州",53:"云南",54:"西藏",61:"陕西",62:"甘肃",
        63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外"
      },
      checkCard: function(str) {
        //校验长度，类型
        if(this.isCardNo(str) === false) {
          return false;
        }
        //检查省份
        if(this.checkProvince(str) === false) {
          return false;
        }
        //校验生日
        if(this.checkBirthday(str) === false) {
          return false;
        }
        //检验位的检测
        if(this.checkParity(str) === false) {
          return false;
        }
        return true;
      },
      //检查号码是否符合规范，包括长度，类型
      isCardNo: function(str) {
        //身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X
        var reg = /(^\d{15}$)|(^\d{17}(\d|X)$)/;
        if(reg.test(str) === false)
        {
          return false;
        }
        return true;
      },
      //取身份证前两位,校验省份
      checkProvince: function(str) {
        var province = str.substr(0,2);
        if(this.vcity[province] == undefined)
        {
          return false;
        }
        return true;
      },
      //检查生日是否正确
      checkBirthday: function(str) {
        var len = str.length;
        //身份证15位时，次序为省（3位）市（3位）年（2位）月（2位）日（2位）校验位（3位），皆为数字
        if(len == '15') {
          var re_fifteen = /^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/;
          var arr_data = str.match(re_fifteen);
          var year = arr_data[2];
          var month = arr_data[3];
          var day = arr_data[4];
          var birthday = new Date('19'+year+'/'+month+'/'+day);
          return this.verifyBirthday('19'+year,month,day,birthday);
        }
        //身份证18位时，次序为省（3位）市（3位）年（4位）月（2位）日（2位）校验位（4位），校验位末尾可能为X
        if(len == '18') {
          var re_eighteen = /^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/;
          var arr_data = str.match(re_eighteen);
          var year = arr_data[2];
          var month = arr_data[3];
          var day = arr_data[4];
          var birthday = new Date(year+'/'+month+'/'+day);
          return this.verifyBirthday(year,month,day,birthday);
        }
        return false;
      },
      verifyBirthday: function(year,month,day,birthday) {
        var now = new Date();
        var now_year = now.getFullYear();
        //年月日是否合理
        if(birthday.getFullYear() == year && (birthday.getMonth() + 1) == month && birthday.getDate() == day)
        {
          //判断年份的范围（3岁到100岁之间)
          var time = now_year - year;
          if(time >= 0 && time <= 130)
          {
            return true;
          }
          return false;
        }
        return false;
      },
      //校验位的检测
      checkParity: function(str) {
        //15位转18位
        str = this.changeFivteenToEighteen(str);
        var len = str.length;
        if(len == '18') {
          var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
          var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');
          var cardTemp = 0, i, valnum;
          for(i = 0; i < 17; i ++) {
            cardTemp += str.substr(i, 1) * arrInt[i];
          }
          valnum = arrCh[cardTemp % 11];
          if (valnum == str.substr(17, 1))
          {
            return true;
          }
          return false;
        }
        return false;
      },
      //15位转18位身份证号
      changeFivteenToEighteen: function(str) {
        if(str.length == '15') {
          var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
          var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');
          var cardTemp = 0, i;
          str = str.substr(0, 6) + '19' + str.substr(6, str.length - 6);
          for(i = 0; i < 17; i ++)
          {
            cardTemp += str.substr(i, 1) * arrInt[i];
          }
          str += arrCh[cardTemp % 11];
          return str;
        }
        return str;
      }
    }
    return main.checkCard(str)
  },
  isUrl: function (str) {
    /**
     * @author hmagic
     * @date 2018-12-24
     * @description 验证url
     * @param { str } url
     * @returns { boolean }
    */
    if (!str) return false
    const reg = new RegExp(this.urlReg)
    return reg.test(str)
  },
  isInteger: function (number) {
    /**
     * @author hmagic
     * @date 2018-12-24
     * @description 验证正整数
     * @param { number } 待验证的数字
     * @returns { boolean }
    */
    if (number < 0) return false
    const reg = new RegExp(this.integerReg)
    return reg.test(number)
  },
  isMoney: function (val) {
    /**
     * @author hmagic
     * @date 2019-1-19
     * @description 验证金额
     * @param { number } 待验证的数字
     * @returns { boolean }
    */
   if (val < 0) return false
   const reg = this.money
   return reg.test(val)
  },
  isChineseName: function (val) {
    /**
     * @author hmagic
     * @date 2019-5-7
     * @description 判断中文名字
     * @param { val } 待验证的字符串
     * @returns { Object }
    */
    if(val === undefined || !val) {
      return {
        bool: false,
        mes: '姓名不能为空'
      }
    }
    if(val.length < 2) {
      return {
        bool: false,
        mes: '姓名不能少于两个汉字'
      }
    }
    let reg = new RegExp(this.chinese)
    if(!reg.test(val)) {
        // 不全是中文
        return {
          bool: false,
          mes: '姓名不能含有非中文字符'
        }
    } else {
      return {
        bool: true,
        mes: ''
      }
    }
  },
  isBankCard: function (val) {
    let checkBankCard = require('./util/bankCardValidator')
    return checkBankCard(val)
  },
  isNumber: function (val) {
    let reg = new RegExp('^[0-9]*$')
    return reg.test(val)
  },
  isAccount: function (str, min=6, max=20) {
    if(max < min) { // 异或操作交换变量
      min = (max = (min ^= max) ^ max) ^ min
    }
    let reg = new RegExp(`^\\w{${min},${max}}$`)
    if(!str) {
      return {
        bool: false,
        text: '请输入账号'
      }
    }
    if(str.length < min || str.length > max) {
      return {
        bool: false,
        text: '账号长度需要在' + min + '~' + max + '之间,现长度为' + str.length
      }
    }
    if(!reg.test(str)) {
      return {
        bool: false,
        text: '账号长度在' + min + '~' + max + '之间且只能包含字母、数字或下划线'
      }
    }
    return {
      bool: true
    }
  },
  isPassword: function (str, min=5, max=19) {
    if(max < min) { // 异或操作交换变量
      min = (max = (min ^= max) ^ max) ^ min
    } 
    let reg = new RegExp(`^[a-zA-Z0-9]\\w{${min},${max}}$`)
    if(!str) {
      return {
        bool: false,
        text: '请输入密码'
      }
    }
    if(str.length < (min + 1) || str.length > (max + 1)) {
      return {
        bool: false,
        text: `密码长度需要在${min + 1}~${max + 1}之间,现长度为${str.length}`
      }
    }
    if(!reg.test(str)) {
      return {
        bool: false,
        text: `密码格式为字母或数字开头，长度在${min + 1}~${max + 1}之间且只能包含字母、数字或下划线`
      }
    }
    return {
      bool: true
    }
  }
}

const FileType = {
  /**
   * @author hmagic
   * @date 2018-12-24
   * @description 上传文件类型
  */
  xls_x: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel',
  image: 'image/jpeg,image/jpg,image/png',
  video: 'audio/mp4,video/mp4'
}

const FormatMoney = {
  /**
   * @author hmagic
   * @date 2018-12-29
   * @description 金额格式化
  */
  currency: function(num) {
    /**
     * @author hmagic
     * @date 2018-12-29
     * @description 格式化货币 4000 -> 4,000.00 保留两位数
     * @param { num } 待转化的金额
     * @returns Number
    */
    num = num.toString().replace(/\$|\,/g,'')
    if(isNaN(num)) num = "0"
    let sign = (num == (num = Math.abs(num)))
    num = Math.floor(num*100+0.50000000001);
    let cents = num % 100;
    num = Math.floor(num/100).toString();
    if(cents<10) cents = "0" + cents;
    for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++) {
      num = num.substring(0,num.length-(4*i+3)) + ',' + num.substring(num.length-(4*i+3))
    }
    return (((sign)?'':'-') + num + '.' + cents)
  },
  limit: function(num) {
    /**
     * @author hmagic
     * @date 2018-12-29
     * @description 限制输入框只能输入到小数点后两位
     * @param { num } 输入的内容
     * @returns Number or null
    */
    num += '';
    return (num.match(/^\d*(\.?\d{0,2})/g)[0]);
  }
}

const Download = function (url, data) {
  let obj = ''
  if(data) {
    try {
      obj = new URLSearchParams(data)
    } catch (error) {
      var tempArr = [];
      for (var i in data) {
          var key = encodeURIComponent(i);
          var value = encodeURIComponent(data[i]);
          tempArr.push(key + '=' + value);
      }
      obj = tempArr.join('&');
    }
  } else {
    obj = ''
  }
  window.open(url + obj, '_blank')
}
module.exports = { Cookie, FormatDate, Regular, FileType, FormatMoney, Download }