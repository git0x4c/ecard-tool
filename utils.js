/**
 * @author hmagic
 * @email liang0x4c@gmail.com
 * @date 2018-12-24
 * @description 常用工具封装
 * @usage_method import { name } from ''
*/
export const Cookie = {
  /**
   * @author hmagic
   * @date 2018-12-24
   * @description 操作cookie的方法集合
  */
  setCookie: (cname, cvalue, exdays) => {
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
  getCookie: (name) => {
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
  }
}

export const FormatDate = {
  /**
   * @author hmagic
   * @date 2018-12-24
   * @description 时间戳格式化
  */
  ym: (time) => {
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
  md: (time) => {
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
  ymd: (time) => {
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
  hm: (time) => {
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
  ms: (time) => {
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
  hms: (time) => {
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
  getDateTime: (time) => {
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
    let _date = new Date(time * 1000)
    let y = _date.getFullYear()
    let M = _date.getMonth() + 1
    M = M < 10 ? ('0' + M) : M
    let d = _date.getDate()
    d = d < 10 ? ('0' + d) : d

    let h = _date.getHours()
    let m = _date.getMinutes()
    let s = _date.getSeconds()
    h = h < 10 ? ('0' + h) : h
    m = m < 10 ? ('0' + m) : m
    s = s < 10 ? ('0' + s) : s
    return `${y}-${M}-${d} ${h}:${m}:${s}`
  }
}
export const Regular = {
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
  isPhone: (str) => {
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
  isEmail: (str) => {
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
  isIdCard: (str) => {
    /**
     * @author hmagic
     * @date 2018-12-24
     * @description 判断身份证(中国)
     * @param { str } 身份证号码
     * @returns { boolean }
    */
    if (!str) return false
    const reg = new RegExp(this.idCardReg)
    return reg.test(str)
  },
  isUrl: (str) => {
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
  isInteger: (number) => {
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
  }
}

export const FileType = {
  /**
   * @author hmagic
   * @date 2018-12-24
   * @description 上传文件类型
  */
  xls_x: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel',
  image: 'image/jpeg,image/jpg,image/png',
  video: 'audio/mp4,video/mp4'
}
