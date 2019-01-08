import { log_error } from "../../uitils/log";
import Observer from "./lib/Observer";
import Type from "../Type/index";

const Utils = {
  /**
   * @description 函数节流
   * @param { Function } fn 需要节流的函数
   * @param { Number } t 节流时间，多久以后执行一次方法 单位ms
   * */
  throttle(fn, t = 1000) {
    if (typeof fn !== "function") {
      log_error("in throttle,first argument must be Function");
      return;
    }
    let _fn = fn;
    let time = null;
    let first = true;
    return function() {
      let arg = arguments;
      let _this = this;
      if (first) {
        _fn.apply(_this, arg);
        first = false;
        return;
      }
      if (time) return;
      time = setTimeout(function() {
        setTimeout(time);
        time = null;
        _fn.apply(_this, arg);
      }, t);
    };
  },

  /**
   * @description 函数防抖
   * @param { Function } fn 需要防抖的函数
   * @param { Number } t 防抖时间 单位ms
   */
  debounce(fn, t = 1000) {
    if (typeof fn !== "function") {
      log_error("in debounce,first argument must be Function");
      return;
    }
    let time;

    return function() {
      const arg = arguments;

      if (time) {
        clearTimeout(time);
        time = null;
        return;
      }
      time = setTimeout(() => {
        fn.apply(this, arg);
        time = null;
      }, t);
    };
  },

  /**
   * @description 深拷贝
   * @param { Array | Object } 被拷贝的值
   * @return { Array | Object } 拷贝成功的值
   */
  deepClone(val) {
    const isArray = Type.isArray(val);
    const isObject = Type.isObject(val);
    if (isArray) {
      const arr = [];
      for (let item of val) {
        if (Type.isArray(item) || Type.isObject(item)) {
          arr.push(this.deepClone(item));
        } else {
          arr.push(item);
        }
      }
      return arr;
    }
    if (isObject) {
      const obj = {};
      for (let key in val) {
        if (Type.isArray(val[key]) || Type.isObject(val[key])) {
          obj[key] = this.deepClone(val[key]);
        } else {
          obj[key] = val[key];
        }
      }
      return obj;
    }
    log_error("in deepClone,arg type must be Array or Object");
  },

  /**
   * @description 生成观察者
   * @param { Array | Object } 原始数据
   * @return { Array | Object } 原始数据的副本，观察者
   */
  observable(dep) {
    const copy = this.deepClone(dep);
    return new Observer(copy).observe();
  },



  /**
   * @description 时间格式化
   * @param { Data } 时间
   * @param { String } 格式，默认'yyyy-MM-dd hh:mm:ss'
   * @return { String } 格式化后的时间
   */
  dateFormat(date, fmt = "yyyy-MM-dd hh:mm:ss") {
    const o = {
      "M+": date.getMonth() + 1, //月份
      "d+": date.getDate(), //日
      "h+": date.getHours(), //小时
      "m+": date.getMinutes(), //分
      "s+": date.getSeconds(), //秒
      "q+": Math.floor((date.getMonth() + 3) / 3), //季度
      S: date.getMilliseconds() //毫秒
    };
    
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        (date.getFullYear() + "").substr(4 - RegExp.$1.length)
      );
    }
    for (var k in o) {
      if (new RegExp("(" + k + ")").test(fmt)) {
        fmt = fmt.replace(
          RegExp.$1,
          RegExp.$1.length == 1
            ? o[k]
            : ("00" + o[k]).substr(("" + o[k]).length)
        );
      }
    }
    return fmt;
  },

  /**
   * @description 当前设备是否是手机
   * @return { Boolean }
   */
  deviceIsMobile() {
    if (
      navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      )
    )
      return true;
    else return false;
  },

  /**
   * @description 当前设备是否是android
   * @return { Boolean }
   */
  deviceIsAndroid() {
    return /android/.test(navigator.userAgent.toLowerCase());
  },

  /**
   * @description 当前设备是否是IOS
   * @return { Boolean }
   */
  deviceIsIOS() {
    return /iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase());
  }
};

export default Utils;
