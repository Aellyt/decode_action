//Mon Dec 23 2024 08:59:25 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("超燃汇"),
  Notify = 1,
  debug = 0;
let ckStr = process.env.lthdck,
  msg = "",
  ck = "",
  activityId;
const CryptoJS = require("crypto-js"),
  config = {
    "mode": CryptoJS.mode.ECB,
    "padding": CryptoJS.pad.Pkcs7
  };
function encryptMillis(_0x484174) {
  const _0x190111 = CryptoJS.enc.Hex.parse("C53F06BB4C33DE0757D3E974D69D4C48"),
    _0x1b5cdb = "{\"millis\":" + _0x484174 + "}",
    _0x379af6 = CryptoJS.AES.encrypt(_0x1b5cdb, _0x190111, config).toString();
  return CryptoJS.enc.Base64.parse(_0x379af6).toString().toUpperCase();
}
function encryptMillisAndActivityId(_0x52df86, _0x48cdb3) {
  const _0x22bb53 = CryptoJS.enc.Hex.parse("C53F06BB4C33DE0757D3E974D69D4C48"),
    _0x1a99e9 = "{\"millis\":" + _0x52df86 + ",\"activity_id\": \"" + _0x48cdb3 + "\"}",
    _0x42f071 = CryptoJS.AES.encrypt(_0x1a99e9, _0x22bb53, config).toString();
  return CryptoJS.enc.Base64.parse(_0x42f071).toString().toUpperCase();
}
function encryptMillisAndIntegralTaskId(_0x2a275b) {
  const _0x247c7f = CryptoJS.enc.Hex.parse("C53F06BB4C33DE0757D3E974D69D4C48"),
    _0x3c84de = "{\"millis\":" + _0x2a275b + ",\"integral_task_id\": \"1\"}",
    _0x3584f6 = CryptoJS.AES.encrypt(_0x3c84de, _0x247c7f, config).toString();
  return CryptoJS.enc.Base64.parse(_0x3584f6).toString().toUpperCase();
}
let sjc = Math.round(new Date().getTime()).toString(),
  cv = encryptMillis(sjc),
  cv2 = encryptMillisAndActivityId(sjc, activityId),
  cv3 = encryptMillisAndIntegralTaskId(sjc);
async function tips(_0x11b4ed) {
  _0x11b4ed = ckStr.split("&");
  console.log("\n=================== 共找到 " + _0x11b4ed.length + " 个账号 ===================");
  debugLog("【debug】 这是你的账号数组:\n " + _0x11b4ed);
}
!(async () => {
  ckArr = ckStr.split("&");
  for (let _0x48246e = 0; _0x48246e < ckArr.length; _0x48246e++) {
    let _0x2e0df7 = _0x48246e + 1;
    console.log("------------- 开始【第 " + _0x2e0df7 + " 个账号】-------------");
    ck = ckArr[_0x48246e].split("&");
    debugLog("【debug】 这是你第 " + _0x2e0df7 + " 账号信息:\n " + ck);
    await start2();
    for (var _0x525ea5 = 0; _0x525ea5 < 3; _0x525ea5++) {
      await start1();
      const _0x37d5c4 = Math.random() * (5000 - 1000) + 1000;
      await $.wait(_0x37d5c4);
    }
    let _0x5eb315 = Math.round(new Date().getTime()).toString();
    cv3 = encryptMillisAndIntegralTaskId(_0x5eb315);
    await signIn();
    await $.wait(1 * 1000);
    cv3 = encryptMillisAndIntegralTaskId(_0x5eb315);
    await signIn1();
    const _0x46251c = Math.random() * (15000 - 5000) + 5000,
      _0x5e0db5 = Math.floor(_0x46251c);
    console.log(" 休息一下\n " + _0x5e0db5 / 1000 + "秒后继续");
    await $.wait(_0x46251c);
  }
  await SendMsg(msg);
})().catch(_0x2d71c2 => $.logErr(_0x2d71c2)).finally(() => $.done());
async function start1() {
  let _0x38ad39 = Math.round(new Date().getTime()).toString();
  cv2 = encryptMillisAndActivityId(_0x38ad39, activityId);
  await sigg();
}
async function start2() {
  await sijj();
  let _0x318e74 = Math.round(new Date().getTime()).toString();
  cv = encryptMillis(_0x318e74);
  await si();
  await $.wait(1 * 1000);
  await si1();
  await $.wait(1 * 1000);
  cv2 = encryptMillisAndActivityId(_0x318e74, activityId);
  await sig();
  cv3 = encryptMillisAndIntegralTaskId(_0x318e74);
  await signIn8();
}
async function si() {
  let _0xff5cac = {
      "url": "https://burning.wo-adv.cn/actvt/queryActivityEntranceList.do",
      "headers": {
        "Content-Type": "application/json",
        "Host": "burning.wo-adv.cn",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.43(0x18002b27) NetType/4G Language/zh_CN"
      },
      "body": "" + cv + ""
    },
    _0x13a929 = await httpPost(_0xff5cac, "获取活动id"),
    _0x1728ab = _0x13a929.resultData[0]?.["ACTIVITY_ENTRANCE_URL"],
    _0x29e064 = _0x13a929.resultData[1]?.["ACTIVITY_ENTRANCE_URL"],
    _0x3f5cd6 = _0x13a929.resultData[2]?.["ACTIVITY_ENTRANCE_URL"];
  activityId1 = _0x1728ab.split("=")[1];
  !isNaN(Number(activityId1)) ? activityId2 = _0x29e064 ? _0x29e064.split("=")[1] : null : (activityId1 = _0x3f5cd6 ? _0x29e064.split("=")[1] : null, activityId2 = _0x29e064 ? _0x29e064.split("=")[1] : null);
}
async function si1() {
  let _0x165d39 = {
      "url": "https://burning.wo-adv.cn/draw/queryActivity.do",
      "headers": {
        "Content-Type": "application/json",
        "Host": "burning.wo-adv.cn",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.43(0x18002b27) NetType/WIFI Language/zh_CN"
      },
      "body": "{\"activity_id\": \"" + activityId1 + "\"}"
    },
    _0x376911 = await httpPost(_0x165d39, "测试活动id");
  _0x376911.resultData.ACTIVITY_STATUS == 1 ? activityId = activityId1 : activityId = activityId2;
}
async function sijj() {
  let _0x599500 = {
      "url": "https://gitee.com/kele2233/genxin/raw/master/but.json",
      "headers": {
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.43(0x18002b2d) NetType/WIFI Language/zh_CN"
      }
    },
    _0x163aee = await httpget(_0x599500, "ll");
  if (_0x163aee == 3) {} else console.log(" 当前网络不畅或者存在更新版本已停止运行"), process.exit(0);
}
async function sigg() {
  let _0x59186a = {
    "url": "https://burning.wo-adv.cn/draw/luckDraw.do",
    "headers": {
      "Cookie": "cshy_applet_user=" + ck + "",
      "Content-Type": "application/json",
      "Host": "burning.wo-adv.cn",
      "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.42(0x18002a2c) NetType/4G Language/zh_CN"
    },
    "body": "" + cv2 + ""
  };
}
async function sig() {
  let _0x2346e1 = {
    "url": "https://burning.wo-adv.cn/actvt/addAGNum.do",
    "headers": {
      "Cookie": "cshy_applet_user=" + ck + "",
      "Content-Type": "application/json",
      "Host": "burning.wo-adv.cn",
      "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.42(0x18002a2c) NetType/4G Language/zh_CN"
    },
    "body": "" + cv2 + ""
  };
}
async function signIn() {
  let _0xf85f1 = {
    "url": "https://burning.wo-adv.cn/integral/addIntegralTaskList.do",
    "headers": {
      "Cookie": "cshy_applet_user=" + ck + "",
      "Content-Type": "application/json",
      "Host": "burning.wo-adv.cn",
      "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.42(0x18002a2c) NetType/4G Language/zh_CN"
    },
    "body": "" + cv3 + ""
  };
  httpPost(_0xf85f1, "签到");
}
async function signIn1() {
  let _0x2aa7ca = {
      "url": "https://burning.wo-adv.cn/home/queryUserIntegral.do",
      "headers": {
        "Cookie": "cshy_applet_user=" + ck + "",
        "Content-Type": "application/json",
        "Host": "burning.wo-adv.cn",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.42(0x18002a2c) NetType/4G Language/zh_CN"
      },
      "body": "" + cv3 + ""
    },
    _0x1eb724 = await httpPost(_0x2aa7ca, "积分查询");
  try {
    xinjf = _0x1eb724.resultData.TOTAL_INTEGRAL;
    console.log(" 当前账号剩余积分： " + xinjf + "，本次运行获得了" + (xinjf - oldjf) + "分");
  } catch (_0x406e26) {}
}
async function signIn8() {
  let _0x2471f5 = {
      "url": "https://burning.wo-adv.cn/home/queryUserIntegral.do",
      "headers": {
        "Cookie": "cshy_applet_user=" + ck + "",
        "Content-Type": "application/json",
        "Host": "burning.wo-adv.cn",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.42(0x18002a2c) NetType/4G Language/zh_CN"
      },
      "body": "" + cv3 + ""
    },
    _0x455970 = await httpPost(_0x2471f5, "积分查询");
  try {
    oldjf = _0x455970.resultData.TOTAL_INTEGRAL;
  } catch (_0x53b3af) {}
}
async function getCks(_0x5142dc, _0x2b1da6) {
  return new Promise(_0x4c231e => {
    let _0x3f4f55 = [];
    if (_0x5142dc) {
      if (_0x5142dc.indexOf("@") !== -1) {
        _0x5142dc.split("@").forEach(_0xb3eda6 => {
          _0x3f4f55.push(_0xb3eda6);
        });
      } else {
        if (_0x5142dc.indexOf("\n") !== -1) {
          _0x5142dc.split("\n").forEach(_0x5ef5b7 => {
            _0x3f4f55.push(_0x5ef5b7);
          });
        } else {
          _0x3f4f55.push(_0x5142dc);
        }
      }
      _0x4c231e(_0x3f4f55);
    } else console.log("\n 【" + $.name + "】：未填写变量 " + _0x2b1da6);
  });
}
async function SendMsg(_0x2cf700) {
  if (!_0x2cf700) return;
  if (Notify > 0) {
    if ($.isNode()) {
      let _0x2cec2f = require("./sendNotify");
      await _0x2cec2f.sendNotify($.name, _0x2cf700);
    } else $.msg(_0x2cf700);
  } else console.log(_0x2cf700);
}
function randomString(_0x31b563) {
  _0x31b563 = _0x31b563 || 32;
  let _0x424374 = "QWERTYUIOPASDFGHJKLZXCVBNM1234567890",
    _0x354568 = _0x424374.length,
    _0x1cca3f = "";
  for (i = 0; i < _0x31b563; i++) _0x1cca3f += _0x424374.charAt(Math.floor(Math.random() * _0x354568));
  return _0x1cca3f;
}
function randomInt(_0x19a0de, _0x561054) {
  return Math.round(Math.random() * (_0x561054 - _0x19a0de) + _0x19a0de);
}
function ts13() {
  return Math.round(new Date().getTime()).toString();
}
function ts10() {
  return Math.round(new Date().getTime() / 1000).toString();
}
function local_hours() {
  let _0x158602 = new Date();
  return h = _0x158602.getHours(), h;
}
function local_minutes() {
  let _0x4521f1 = new Date();
  return m = _0x4521f1.getMinutes(), m;
}
function wyy(_0x250355 = 3 * 1000) {
  return new Promise(_0x2c4852 => {
    let _0x4c6b35 = {
      "url": "https://keai.icu/apiwyy/api"
    };
    $.get(_0x4c6b35, async (_0x23291b, _0x12bcf4, _0x56510c) => {
      try {
        _0x56510c = JSON.parse(_0x56510c);
        console.log("\n 【网抑云时间】: " + _0x56510c.content + "  by--" + _0x56510c.music);
      } catch (_0x5a9af1) {
        $.logErr(_0x5a9af1, _0x12bcf4);
      } finally {
        _0x2c4852();
      }
    }, _0x250355);
  });
}
async function httpget(_0x5793ca, _0x1eeabb, _0x2a4645 = 3 * 1000) {
  return new Promise(_0x32446f => {
    let _0x457856 = _0x5793ca;
    if (!_0x1eeabb) {
      let _0x2b04d8 = arguments.callee.toString(),
        _0x280468 = /function\s*(\w*)/i,
        _0x43d126 = _0x280468.exec(_0x2b04d8);
      _0x1eeabb = _0x43d126[1];
    }
    debug && (console.log("\n 【debug】=============== 这是 " + _0x1eeabb + " 请求 url ==============="), console.log(_0x457856));
    $.get(_0x457856, async (_0x109f51, _0x1404d4, _0x28d734) => {
      try {
        debug && (console.log("\n\n 【debug】===============这是 " + _0x1eeabb + " 返回data=============="), console.log(_0x28d734), console.log("======"), console.log(JSON.parse(_0x28d734)));
        let _0x38f54e = JSON.parse(_0x28d734);
        _0x32446f(_0x38f54e);
      } catch (_0x24f8f3) {
        console.log("\n " + _0x1eeabb + " 失败了!请稍后尝试!!");
      } finally {
        _0x32446f();
      }
    }, _0x2a4645);
  });
}
async function httpPost(_0x48a6fd, _0x48c6f6, _0x179d0a = 3 * 1000) {
  return new Promise(_0x5c1c15 => {
    let _0x23a256 = _0x48a6fd;
    if (!_0x48c6f6) {
      let _0x1b362e = arguments.callee.toString(),
        _0x31f663 = /function\s*(\w*)/i,
        _0x17189f = _0x31f663.exec(_0x1b362e);
      _0x48c6f6 = _0x17189f[1];
    }
    if (debug) {
      console.log("\n 【debug】=============== 这是 " + _0x48c6f6 + " 请求 url ===============");
      console.log(_0x23a256);
    }
    $.post(_0x23a256, async (_0x20f0fa, _0x2f16e0, _0x203215) => {
      try {
        if (debug) {
          console.log("\n\n 【debug】===============这是 " + _0x48c6f6 + " 返回data==============");
          console.log(_0x203215);
          console.log("======");
          console.log(JSON.parse(_0x203215));
        }
        let _0x413b46 = JSON.parse(_0x203215);
        _0x5c1c15(_0x413b46);
      } catch (_0x2c9bdf) {
        console.log("\n " + _0x48c6f6 + " 失败了!请稍后尝试!!");
      } finally {
        _0x5c1c15();
      }
    }, _0x179d0a);
  });
}
function debugLog(..._0x402566) {
  if (debug) {
    console.log(..._0x402566);
  }
}
function MD5Encrypt(_0x21718b) {
  function _0x133535(_0x5be8af, _0x45d77e) {
    return _0x5be8af << _0x45d77e | _0x5be8af >>> 32 - _0x45d77e;
  }
  function _0x12a821(_0x4f7777, _0x57648c) {
    var _0x413caa, _0x14b259, _0x1c645b, _0x1c7bfd, _0x3ce3b8;
    return _0x1c645b = 2147483648 & _0x4f7777, _0x1c7bfd = 2147483648 & _0x57648c, _0x413caa = 1073741824 & _0x4f7777, _0x14b259 = 1073741824 & _0x57648c, _0x3ce3b8 = (1073741823 & _0x4f7777) + (1073741823 & _0x57648c), _0x413caa & _0x14b259 ? 2147483648 ^ _0x3ce3b8 ^ _0x1c645b ^ _0x1c7bfd : _0x413caa | _0x14b259 ? 1073741824 & _0x3ce3b8 ? 3221225472 ^ _0x3ce3b8 ^ _0x1c645b ^ _0x1c7bfd : 1073741824 ^ _0x3ce3b8 ^ _0x1c645b ^ _0x1c7bfd : _0x3ce3b8 ^ _0x1c645b ^ _0x1c7bfd;
  }
  function _0x350c77(_0x12049d, _0x2db15c, _0x36849d) {
    return _0x12049d & _0x2db15c | ~_0x12049d & _0x36849d;
  }
  function _0x24fb15(_0x260780, _0x2b6636, _0x562679) {
    return _0x260780 & _0x562679 | _0x2b6636 & ~_0x562679;
  }
  function _0x4fc028(_0x34d949, _0x21a12a, _0x2a588d) {
    return _0x34d949 ^ _0x21a12a ^ _0x2a588d;
  }
  function _0x11b791(_0xf279bf, _0x438ec1, _0x4da130) {
    return _0x438ec1 ^ (_0xf279bf | ~_0x4da130);
  }
  function _0x5797d1(_0x17e21b, _0x3d3bd8, _0x4dfb89, _0x380195, _0x5e1dca, _0x279213, _0x4abbad) {
    return _0x17e21b = _0x12a821(_0x17e21b, _0x12a821(_0x12a821(_0x350c77(_0x3d3bd8, _0x4dfb89, _0x380195), _0x5e1dca), _0x4abbad)), _0x12a821(_0x133535(_0x17e21b, _0x279213), _0x3d3bd8);
  }
  function _0x424131(_0xe52128, _0x448f0f, _0xb99591, _0x2f2eab, _0x16f4c5, _0x4c0e4b, _0x18b8c4) {
    return _0xe52128 = _0x12a821(_0xe52128, _0x12a821(_0x12a821(_0x24fb15(_0x448f0f, _0xb99591, _0x2f2eab), _0x16f4c5), _0x18b8c4)), _0x12a821(_0x133535(_0xe52128, _0x4c0e4b), _0x448f0f);
  }
  function _0x40a02e(_0x44aa26, _0x2f88be, _0x58953c, _0x361204, _0x1228f9, _0x674eb2, _0x4be07d) {
    return _0x44aa26 = _0x12a821(_0x44aa26, _0x12a821(_0x12a821(_0x4fc028(_0x2f88be, _0x58953c, _0x361204), _0x1228f9), _0x4be07d)), _0x12a821(_0x133535(_0x44aa26, _0x674eb2), _0x2f88be);
  }
  function _0x172f02(_0x103222, _0x35b45e, _0xeca6cf, _0x14b87d, _0x3101e6, _0x32ea9b, _0x447d19) {
    return _0x103222 = _0x12a821(_0x103222, _0x12a821(_0x12a821(_0x11b791(_0x35b45e, _0xeca6cf, _0x14b87d), _0x3101e6), _0x447d19)), _0x12a821(_0x133535(_0x103222, _0x32ea9b), _0x35b45e);
  }
  function _0x441dfd(_0x29539e) {
    for (var _0x302dd1, _0xdca55c = _0x29539e.length, _0x5b49c2 = _0xdca55c + 8, _0x3f88f4 = (_0x5b49c2 - _0x5b49c2 % 64) / 64, _0xd3a06d = 16 * (_0x3f88f4 + 1), _0x2e9598 = new Array(_0xd3a06d - 1), _0x494332 = 0, _0x1d6217 = 0; _0xdca55c > _0x1d6217;) _0x302dd1 = (_0x1d6217 - _0x1d6217 % 4) / 4, _0x494332 = _0x1d6217 % 4 * 8, _0x2e9598[_0x302dd1] = _0x2e9598[_0x302dd1] | _0x29539e.charCodeAt(_0x1d6217) << _0x494332, _0x1d6217++;
    return _0x302dd1 = (_0x1d6217 - _0x1d6217 % 4) / 4, _0x494332 = _0x1d6217 % 4 * 8, _0x2e9598[_0x302dd1] = _0x2e9598[_0x302dd1] | 128 << _0x494332, _0x2e9598[_0xd3a06d - 2] = _0xdca55c << 3, _0x2e9598[_0xd3a06d - 1] = _0xdca55c >>> 29, _0x2e9598;
  }
  function _0x7109af(_0x121076) {
    var _0x377931,
      _0xc632cd,
      _0x5432f0 = "",
      _0x2f8cf0 = "";
    for (_0xc632cd = 0; 3 >= _0xc632cd; _0xc632cd++) _0x377931 = _0x121076 >>> 8 * _0xc632cd & 255, _0x2f8cf0 = "0" + _0x377931.toString(16), _0x5432f0 += _0x2f8cf0.substr(_0x2f8cf0.length - 2, 2);
    return _0x5432f0;
  }
  function _0x180aa6(_0x384c57) {
    _0x384c57 = _0x384c57.replace(/\r\n/g, "\n");
    for (var _0x567624 = "", _0x58f21c = 0; _0x58f21c < _0x384c57.length; _0x58f21c++) {
      var _0x3b08d0 = _0x384c57.charCodeAt(_0x58f21c);
      128 > _0x3b08d0 ? _0x567624 += String.fromCharCode(_0x3b08d0) : _0x3b08d0 > 127 && 2048 > _0x3b08d0 ? (_0x567624 += String.fromCharCode(_0x3b08d0 >> 6 | 192), _0x567624 += String.fromCharCode(63 & _0x3b08d0 | 128)) : (_0x567624 += String.fromCharCode(_0x3b08d0 >> 12 | 224), _0x567624 += String.fromCharCode(_0x3b08d0 >> 6 & 63 | 128), _0x567624 += String.fromCharCode(63 & _0x3b08d0 | 128));
    }
    return _0x567624;
  }
  var _0x5813d0,
    _0x46f456,
    _0x13ae3d,
    _0x52ab3d,
    _0x5ce1a0,
    _0x4646f0,
    _0x2f096e,
    _0x38a4f5,
    _0x411d4f,
    _0x53b09f = [],
    _0x303e7d = 7,
    _0x19f096 = 12,
    _0x1d2645 = 17,
    _0x4727ab = 22,
    _0x2c5f57 = 5,
    _0x34dc41 = 9,
    _0x201f7a = 14,
    _0x2d6fc2 = 20,
    _0x55aaae = 4,
    _0x17917b = 11,
    _0x1dd618 = 16,
    _0x1e6138 = 23,
    _0x1dabce = 6,
    _0x35a68c = 10,
    _0x4da29d = 15,
    _0x49660b = 21;
  for (_0x21718b = _0x180aa6(_0x21718b), _0x53b09f = _0x441dfd(_0x21718b), _0x4646f0 = 1732584193, _0x2f096e = 4023233417, _0x38a4f5 = 2562383102, _0x411d4f = 271733878, _0x5813d0 = 0; _0x5813d0 < _0x53b09f.length; _0x5813d0 += 16) _0x46f456 = _0x4646f0, _0x13ae3d = _0x2f096e, _0x52ab3d = _0x38a4f5, _0x5ce1a0 = _0x411d4f, _0x4646f0 = _0x5797d1(_0x4646f0, _0x2f096e, _0x38a4f5, _0x411d4f, _0x53b09f[_0x5813d0 + 0], _0x303e7d, 3614090360), _0x411d4f = _0x5797d1(_0x411d4f, _0x4646f0, _0x2f096e, _0x38a4f5, _0x53b09f[_0x5813d0 + 1], _0x19f096, 3905402710), _0x38a4f5 = _0x5797d1(_0x38a4f5, _0x411d4f, _0x4646f0, _0x2f096e, _0x53b09f[_0x5813d0 + 2], _0x1d2645, 606105819), _0x2f096e = _0x5797d1(_0x2f096e, _0x38a4f5, _0x411d4f, _0x4646f0, _0x53b09f[_0x5813d0 + 3], _0x4727ab, 3250441966), _0x4646f0 = _0x5797d1(_0x4646f0, _0x2f096e, _0x38a4f5, _0x411d4f, _0x53b09f[_0x5813d0 + 4], _0x303e7d, 4118548399), _0x411d4f = _0x5797d1(_0x411d4f, _0x4646f0, _0x2f096e, _0x38a4f5, _0x53b09f[_0x5813d0 + 5], _0x19f096, 1200080426), _0x38a4f5 = _0x5797d1(_0x38a4f5, _0x411d4f, _0x4646f0, _0x2f096e, _0x53b09f[_0x5813d0 + 6], _0x1d2645, 2821735955), _0x2f096e = _0x5797d1(_0x2f096e, _0x38a4f5, _0x411d4f, _0x4646f0, _0x53b09f[_0x5813d0 + 7], _0x4727ab, 4249261313), _0x4646f0 = _0x5797d1(_0x4646f0, _0x2f096e, _0x38a4f5, _0x411d4f, _0x53b09f[_0x5813d0 + 8], _0x303e7d, 1770035416), _0x411d4f = _0x5797d1(_0x411d4f, _0x4646f0, _0x2f096e, _0x38a4f5, _0x53b09f[_0x5813d0 + 9], _0x19f096, 2336552879), _0x38a4f5 = _0x5797d1(_0x38a4f5, _0x411d4f, _0x4646f0, _0x2f096e, _0x53b09f[_0x5813d0 + 10], _0x1d2645, 4294925233), _0x2f096e = _0x5797d1(_0x2f096e, _0x38a4f5, _0x411d4f, _0x4646f0, _0x53b09f[_0x5813d0 + 11], _0x4727ab, 2304563134), _0x4646f0 = _0x5797d1(_0x4646f0, _0x2f096e, _0x38a4f5, _0x411d4f, _0x53b09f[_0x5813d0 + 12], _0x303e7d, 1804603682), _0x411d4f = _0x5797d1(_0x411d4f, _0x4646f0, _0x2f096e, _0x38a4f5, _0x53b09f[_0x5813d0 + 13], _0x19f096, 4254626195), _0x38a4f5 = _0x5797d1(_0x38a4f5, _0x411d4f, _0x4646f0, _0x2f096e, _0x53b09f[_0x5813d0 + 14], _0x1d2645, 2792965006), _0x2f096e = _0x5797d1(_0x2f096e, _0x38a4f5, _0x411d4f, _0x4646f0, _0x53b09f[_0x5813d0 + 15], _0x4727ab, 1236535329), _0x4646f0 = _0x424131(_0x4646f0, _0x2f096e, _0x38a4f5, _0x411d4f, _0x53b09f[_0x5813d0 + 1], _0x2c5f57, 4129170786), _0x411d4f = _0x424131(_0x411d4f, _0x4646f0, _0x2f096e, _0x38a4f5, _0x53b09f[_0x5813d0 + 6], _0x34dc41, 3225465664), _0x38a4f5 = _0x424131(_0x38a4f5, _0x411d4f, _0x4646f0, _0x2f096e, _0x53b09f[_0x5813d0 + 11], _0x201f7a, 643717713), _0x2f096e = _0x424131(_0x2f096e, _0x38a4f5, _0x411d4f, _0x4646f0, _0x53b09f[_0x5813d0 + 0], _0x2d6fc2, 3921069994), _0x4646f0 = _0x424131(_0x4646f0, _0x2f096e, _0x38a4f5, _0x411d4f, _0x53b09f[_0x5813d0 + 5], _0x2c5f57, 3593408605), _0x411d4f = _0x424131(_0x411d4f, _0x4646f0, _0x2f096e, _0x38a4f5, _0x53b09f[_0x5813d0 + 10], _0x34dc41, 38016083), _0x38a4f5 = _0x424131(_0x38a4f5, _0x411d4f, _0x4646f0, _0x2f096e, _0x53b09f[_0x5813d0 + 15], _0x201f7a, 3634488961), _0x2f096e = _0x424131(_0x2f096e, _0x38a4f5, _0x411d4f, _0x4646f0, _0x53b09f[_0x5813d0 + 4], _0x2d6fc2, 3889429448), _0x4646f0 = _0x424131(_0x4646f0, _0x2f096e, _0x38a4f5, _0x411d4f, _0x53b09f[_0x5813d0 + 9], _0x2c5f57, 568446438), _0x411d4f = _0x424131(_0x411d4f, _0x4646f0, _0x2f096e, _0x38a4f5, _0x53b09f[_0x5813d0 + 14], _0x34dc41, 3275163606), _0x38a4f5 = _0x424131(_0x38a4f5, _0x411d4f, _0x4646f0, _0x2f096e, _0x53b09f[_0x5813d0 + 3], _0x201f7a, 4107603335), _0x2f096e = _0x424131(_0x2f096e, _0x38a4f5, _0x411d4f, _0x4646f0, _0x53b09f[_0x5813d0 + 8], _0x2d6fc2, 1163531501), _0x4646f0 = _0x424131(_0x4646f0, _0x2f096e, _0x38a4f5, _0x411d4f, _0x53b09f[_0x5813d0 + 13], _0x2c5f57, 2850285829), _0x411d4f = _0x424131(_0x411d4f, _0x4646f0, _0x2f096e, _0x38a4f5, _0x53b09f[_0x5813d0 + 2], _0x34dc41, 4243563512), _0x38a4f5 = _0x424131(_0x38a4f5, _0x411d4f, _0x4646f0, _0x2f096e, _0x53b09f[_0x5813d0 + 7], _0x201f7a, 1735328473), _0x2f096e = _0x424131(_0x2f096e, _0x38a4f5, _0x411d4f, _0x4646f0, _0x53b09f[_0x5813d0 + 12], _0x2d6fc2, 2368359562), _0x4646f0 = _0x40a02e(_0x4646f0, _0x2f096e, _0x38a4f5, _0x411d4f, _0x53b09f[_0x5813d0 + 5], _0x55aaae, 4294588738), _0x411d4f = _0x40a02e(_0x411d4f, _0x4646f0, _0x2f096e, _0x38a4f5, _0x53b09f[_0x5813d0 + 8], _0x17917b, 2272392833), _0x38a4f5 = _0x40a02e(_0x38a4f5, _0x411d4f, _0x4646f0, _0x2f096e, _0x53b09f[_0x5813d0 + 11], _0x1dd618, 1839030562), _0x2f096e = _0x40a02e(_0x2f096e, _0x38a4f5, _0x411d4f, _0x4646f0, _0x53b09f[_0x5813d0 + 14], _0x1e6138, 4259657740), _0x4646f0 = _0x40a02e(_0x4646f0, _0x2f096e, _0x38a4f5, _0x411d4f, _0x53b09f[_0x5813d0 + 1], _0x55aaae, 2763975236), _0x411d4f = _0x40a02e(_0x411d4f, _0x4646f0, _0x2f096e, _0x38a4f5, _0x53b09f[_0x5813d0 + 4], _0x17917b, 1272893353), _0x38a4f5 = _0x40a02e(_0x38a4f5, _0x411d4f, _0x4646f0, _0x2f096e, _0x53b09f[_0x5813d0 + 7], _0x1dd618, 4139469664), _0x2f096e = _0x40a02e(_0x2f096e, _0x38a4f5, _0x411d4f, _0x4646f0, _0x53b09f[_0x5813d0 + 10], _0x1e6138, 3200236656), _0x4646f0 = _0x40a02e(_0x4646f0, _0x2f096e, _0x38a4f5, _0x411d4f, _0x53b09f[_0x5813d0 + 13], _0x55aaae, 681279174), _0x411d4f = _0x40a02e(_0x411d4f, _0x4646f0, _0x2f096e, _0x38a4f5, _0x53b09f[_0x5813d0 + 0], _0x17917b, 3936430074), _0x38a4f5 = _0x40a02e(_0x38a4f5, _0x411d4f, _0x4646f0, _0x2f096e, _0x53b09f[_0x5813d0 + 3], _0x1dd618, 3572445317), _0x2f096e = _0x40a02e(_0x2f096e, _0x38a4f5, _0x411d4f, _0x4646f0, _0x53b09f[_0x5813d0 + 6], _0x1e6138, 76029189), _0x4646f0 = _0x40a02e(_0x4646f0, _0x2f096e, _0x38a4f5, _0x411d4f, _0x53b09f[_0x5813d0 + 9], _0x55aaae, 3654602809), _0x411d4f = _0x40a02e(_0x411d4f, _0x4646f0, _0x2f096e, _0x38a4f5, _0x53b09f[_0x5813d0 + 12], _0x17917b, 3873151461), _0x38a4f5 = _0x40a02e(_0x38a4f5, _0x411d4f, _0x4646f0, _0x2f096e, _0x53b09f[_0x5813d0 + 15], _0x1dd618, 530742520), _0x2f096e = _0x40a02e(_0x2f096e, _0x38a4f5, _0x411d4f, _0x4646f0, _0x53b09f[_0x5813d0 + 2], _0x1e6138, 3299628645), _0x4646f0 = _0x172f02(_0x4646f0, _0x2f096e, _0x38a4f5, _0x411d4f, _0x53b09f[_0x5813d0 + 0], _0x1dabce, 4096336452), _0x411d4f = _0x172f02(_0x411d4f, _0x4646f0, _0x2f096e, _0x38a4f5, _0x53b09f[_0x5813d0 + 7], _0x35a68c, 1126891415), _0x38a4f5 = _0x172f02(_0x38a4f5, _0x411d4f, _0x4646f0, _0x2f096e, _0x53b09f[_0x5813d0 + 14], _0x4da29d, 2878612391), _0x2f096e = _0x172f02(_0x2f096e, _0x38a4f5, _0x411d4f, _0x4646f0, _0x53b09f[_0x5813d0 + 5], _0x49660b, 4237533241), _0x4646f0 = _0x172f02(_0x4646f0, _0x2f096e, _0x38a4f5, _0x411d4f, _0x53b09f[_0x5813d0 + 12], _0x1dabce, 1700485571), _0x411d4f = _0x172f02(_0x411d4f, _0x4646f0, _0x2f096e, _0x38a4f5, _0x53b09f[_0x5813d0 + 3], _0x35a68c, 2399980690), _0x38a4f5 = _0x172f02(_0x38a4f5, _0x411d4f, _0x4646f0, _0x2f096e, _0x53b09f[_0x5813d0 + 10], _0x4da29d, 4293915773), _0x2f096e = _0x172f02(_0x2f096e, _0x38a4f5, _0x411d4f, _0x4646f0, _0x53b09f[_0x5813d0 + 1], _0x49660b, 2240044497), _0x4646f0 = _0x172f02(_0x4646f0, _0x2f096e, _0x38a4f5, _0x411d4f, _0x53b09f[_0x5813d0 + 8], _0x1dabce, 1873313359), _0x411d4f = _0x172f02(_0x411d4f, _0x4646f0, _0x2f096e, _0x38a4f5, _0x53b09f[_0x5813d0 + 15], _0x35a68c, 4264355552), _0x38a4f5 = _0x172f02(_0x38a4f5, _0x411d4f, _0x4646f0, _0x2f096e, _0x53b09f[_0x5813d0 + 6], _0x4da29d, 2734768916), _0x2f096e = _0x172f02(_0x2f096e, _0x38a4f5, _0x411d4f, _0x4646f0, _0x53b09f[_0x5813d0 + 13], _0x49660b, 1309151649), _0x4646f0 = _0x172f02(_0x4646f0, _0x2f096e, _0x38a4f5, _0x411d4f, _0x53b09f[_0x5813d0 + 4], _0x1dabce, 4149444226), _0x411d4f = _0x172f02(_0x411d4f, _0x4646f0, _0x2f096e, _0x38a4f5, _0x53b09f[_0x5813d0 + 11], _0x35a68c, 3174756917), _0x38a4f5 = _0x172f02(_0x38a4f5, _0x411d4f, _0x4646f0, _0x2f096e, _0x53b09f[_0x5813d0 + 2], _0x4da29d, 718787259), _0x2f096e = _0x172f02(_0x2f096e, _0x38a4f5, _0x411d4f, _0x4646f0, _0x53b09f[_0x5813d0 + 9], _0x49660b, 3951481745), _0x4646f0 = _0x12a821(_0x4646f0, _0x46f456), _0x2f096e = _0x12a821(_0x2f096e, _0x13ae3d), _0x38a4f5 = _0x12a821(_0x38a4f5, _0x52ab3d), _0x411d4f = _0x12a821(_0x411d4f, _0x5ce1a0);
  var _0x4c58ef = _0x7109af(_0x4646f0) + _0x7109af(_0x2f096e) + _0x7109af(_0x38a4f5) + _0x7109af(_0x411d4f);
  return _0x4c58ef.toLowerCase();
}
function Env(_0x42e277, _0x1f1b66) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class _0x1ac587 {
    constructor(_0x279734) {
      this.env = _0x279734;
    }
    ["send"](_0x2e9c8a, _0x864de = "GET") {
      _0x2e9c8a = "string" == typeof _0x2e9c8a ? {
        "url": _0x2e9c8a
      } : _0x2e9c8a;
      let _0xde64bb = this.get;
      return "POST" === _0x864de && (_0xde64bb = this.post), new Promise((_0x25ee7c, _0x30def3) => {
        _0xde64bb.call(this, _0x2e9c8a, (_0x11abdb, _0x13d451, _0x9abe9a) => {
          _0x11abdb ? _0x30def3(_0x11abdb) : _0x25ee7c(_0x13d451);
        });
      });
    }
    ["get"](_0x6ec5d7) {
      return this.send.call(this.env, _0x6ec5d7);
    }
    ["post"](_0x5d379d) {
      return this.send.call(this.env, _0x5d379d, "POST");
    }
  }
  return new class {
    constructor(_0x3edd17, _0x385e3d) {
      this.name = _0x3edd17;
      this.http = new _0x1ac587(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x385e3d);
      this.log("", "🔔" + this.name + ", 开始!");
    }
    ["isNode"]() {
      return "undefined" != typeof module && !!module.exports;
    }
    ["isQuanX"]() {
      return "undefined" != typeof $task;
    }
    ["isSurge"]() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    ["isLoon"]() {
      return "undefined" != typeof $loon;
    }
    ["toObj"](_0x34ff63, _0x3fe38c = null) {
      try {
        return JSON.parse(_0x34ff63);
      } catch {
        return _0x3fe38c;
      }
    }
    ["toStr"](_0x5a3e00, _0xc6f01d = null) {
      try {
        return JSON.stringify(_0x5a3e00);
      } catch {
        return _0xc6f01d;
      }
    }
    ["getjson"](_0x440f14, _0x3bde44) {
      let _0x50b38a = _0x3bde44;
      const _0x11af97 = this.getdata(_0x440f14);
      if (_0x11af97) try {
        _0x50b38a = JSON.parse(this.getdata(_0x440f14));
      } catch {}
      return _0x50b38a;
    }
    ["setjson"](_0x1120bc, _0x3be90e) {
      try {
        return this.setdata(JSON.stringify(_0x1120bc), _0x3be90e);
      } catch {
        return !1;
      }
    }
    ["getScript"](_0x4d0b8f) {
      return new Promise(_0x40b5aa => {
        this.get({
          "url": _0x4d0b8f
        }, (_0x25864b, _0x172039, _0x56ef66) => _0x40b5aa(_0x56ef66));
      });
    }
    ["runScript"](_0x33e072, _0x189c50) {
      return new Promise(_0x4f8b3b => {
        let _0x4f2a29 = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x4f2a29 = _0x4f2a29 ? _0x4f2a29.replace(/\n/g, "").trim() : _0x4f2a29;
        let _0x2e748c = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x2e748c = _0x2e748c ? 1 * _0x2e748c : 20;
        _0x2e748c = _0x189c50 && _0x189c50.timeout ? _0x189c50.timeout : _0x2e748c;
        const [_0x29cd32, _0x301d20] = _0x4f2a29.split("@"),
          _0x12b9f7 = {
            "url": "http://" + _0x301d20 + "/v1/scripting/evaluate",
            "body": {
              "script_text": _0x33e072,
              "mock_type": "cron",
              "timeout": _0x2e748c
            },
            "headers": {
              "X-Key": _0x29cd32,
              "Accept": "*/*"
            }
          };
        this.post(_0x12b9f7, (_0x41b31d, _0x4d7792, _0x1bfc92) => _0x4f8b3b(_0x1bfc92));
      }).catch(_0x5a8a8d => this.logErr(_0x5a8a8d));
    }
    ["loaddata"]() {
      if (!this.isNode()) return {};
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x385a97 = this.path.resolve(this.dataFile),
          _0x427f7c = this.path.resolve(process.cwd(), this.dataFile),
          _0xa8fd2f = this.fs.existsSync(_0x385a97),
          _0x1aa064 = !_0xa8fd2f && this.fs.existsSync(_0x427f7c);
        if (!_0xa8fd2f && !_0x1aa064) return {};
        {
          const _0x38872f = _0xa8fd2f ? _0x385a97 : _0x427f7c;
          try {
            return JSON.parse(this.fs.readFileSync(_0x38872f));
          } catch (_0xe450e1) {
            return {};
          }
        }
      }
    }
    ["writedata"]() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x4f3e44 = this.path.resolve(this.dataFile),
          _0x2d4bf6 = this.path.resolve(process.cwd(), this.dataFile),
          _0x4a4f5d = this.fs.existsSync(_0x4f3e44),
          _0x47a2bc = !_0x4a4f5d && this.fs.existsSync(_0x2d4bf6),
          _0x58eab6 = JSON.stringify(this.data);
        _0x4a4f5d ? this.fs.writeFileSync(_0x4f3e44, _0x58eab6) : _0x47a2bc ? this.fs.writeFileSync(_0x2d4bf6, _0x58eab6) : this.fs.writeFileSync(_0x4f3e44, _0x58eab6);
      }
    }
    ["lodash_get"](_0x5d5dd8, _0x1221ac, _0x796f07) {
      const _0x4b3b5d = _0x1221ac.replace(/\[(\d+)\]/g, ".$1").split(".");
      let _0x31b210 = _0x5d5dd8;
      for (const _0x27ae48 of _0x4b3b5d) if (_0x31b210 = Object(_0x31b210)[_0x27ae48], void 0 === _0x31b210) return _0x796f07;
      return _0x31b210;
    }
    ["lodash_set"](_0x5307d2, _0x59feb2, _0x48ca62) {
      return Object(_0x5307d2) !== _0x5307d2 ? _0x5307d2 : (Array.isArray(_0x59feb2) || (_0x59feb2 = _0x59feb2.toString().match(/[^.[\]]+/g) || []), _0x59feb2.slice(0, -1).reduce((_0x5bc018, _0x202e05, _0x1da50c) => Object(_0x5bc018[_0x202e05]) === _0x5bc018[_0x202e05] ? _0x5bc018[_0x202e05] : _0x5bc018[_0x202e05] = Math.abs(_0x59feb2[_0x1da50c + 1]) >> 0 == +_0x59feb2[_0x1da50c + 1] ? [] : {}, _0x5307d2)[_0x59feb2[_0x59feb2.length - 1]] = _0x48ca62, _0x5307d2);
    }
    ["getdata"](_0x50e4d9) {
      let _0x25991e = this.getval(_0x50e4d9);
      if (/^@/.test(_0x50e4d9)) {
        const [, _0x47079f, _0x5de5af] = /^@(.*?)\.(.*?)$/.exec(_0x50e4d9),
          _0x30854a = _0x47079f ? this.getval(_0x47079f) : "";
        if (_0x30854a) try {
          const _0x22cb76 = JSON.parse(_0x30854a);
          _0x25991e = _0x22cb76 ? this.lodash_get(_0x22cb76, _0x5de5af, "") : _0x25991e;
        } catch (_0x3014d2) {
          _0x25991e = "";
        }
      }
      return _0x25991e;
    }
    ["setdata"](_0x41b1a0, _0x2422bb) {
      let _0x10774f = false;
      if (/^@/.test(_0x2422bb)) {
        const [, _0x4c962a, _0x4dab50] = /^@(.*?)\.(.*?)$/.exec(_0x2422bb),
          _0x14e2ac = this.getval(_0x4c962a),
          _0x1b20fb = _0x4c962a ? "null" === _0x14e2ac ? null : _0x14e2ac || "{}" : "{}";
        try {
          const _0x3ac743 = JSON.parse(_0x1b20fb);
          this.lodash_set(_0x3ac743, _0x4dab50, _0x41b1a0);
          _0x10774f = this.setval(JSON.stringify(_0x3ac743), _0x4c962a);
        } catch (_0x40c3cf) {
          const _0x2e3b5c = {};
          this.lodash_set(_0x2e3b5c, _0x4dab50, _0x41b1a0);
          _0x10774f = this.setval(JSON.stringify(_0x2e3b5c), _0x4c962a);
        }
      } else _0x10774f = this.setval(_0x41b1a0, _0x2422bb);
      return _0x10774f;
    }
    ["getval"](_0x3a1a9f) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x3a1a9f) : this.isQuanX() ? $prefs.valueForKey(_0x3a1a9f) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x3a1a9f]) : this.data && this.data[_0x3a1a9f] || null;
    }
    ["setval"](_0xa0c20, _0x37bccc) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0xa0c20, _0x37bccc) : this.isQuanX() ? $prefs.setValueForKey(_0xa0c20, _0x37bccc) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x37bccc] = _0xa0c20, this.writedata(), !0) : this.data && this.data[_0x37bccc] || null;
    }
    ["initGotEnv"](_0xc58835) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0xc58835 && (_0xc58835.headers = _0xc58835.headers ? _0xc58835.headers : {}, void 0 === _0xc58835.headers.Cookie && void 0 === _0xc58835.cookieJar && (_0xc58835.cookieJar = this.ckjar));
    }
    ["get"](_0x2650b7, _0x1a4d69 = () => {}) {
      _0x2650b7.headers && (delete _0x2650b7.headers["Content-Type"], delete _0x2650b7.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (_0x2650b7.headers = _0x2650b7.headers || {}, Object.assign(_0x2650b7.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(_0x2650b7, (_0x32ad4d, _0x429c3d, _0x210f96) => {
        !_0x32ad4d && _0x429c3d && (_0x429c3d.body = _0x210f96, _0x429c3d.statusCode = _0x429c3d.status);
        _0x1a4d69(_0x32ad4d, _0x429c3d, _0x210f96);
      })) : this.isQuanX() ? (this.isNeedRewrite && (_0x2650b7.opts = _0x2650b7.opts || {}, Object.assign(_0x2650b7.opts, {
        "hints": !1
      })), $task.fetch(_0x2650b7).then(_0x45555f => {
        const {
          statusCode: _0x20686d,
          statusCode: _0x2b3ac7,
          headers: _0x9fe60d,
          body: _0x5e9eab
        } = _0x45555f;
        _0x1a4d69(null, {
          "status": _0x20686d,
          "statusCode": _0x2b3ac7,
          "headers": _0x9fe60d,
          "body": _0x5e9eab
        }, _0x5e9eab);
      }, _0x38d1d0 => _0x1a4d69(_0x38d1d0))) : this.isNode() && (this.initGotEnv(_0x2650b7), this.got(_0x2650b7).on("redirect", (_0x13fa6f, _0x48c137) => {
        try {
          if (_0x13fa6f.headers["set-cookie"]) {
            const _0x317ae8 = _0x13fa6f.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            _0x317ae8 && this.ckjar.setCookieSync(_0x317ae8, null);
            _0x48c137.cookieJar = this.ckjar;
          }
        } catch (_0x1b605a) {
          this.logErr(_0x1b605a);
        }
      }).then(_0x113e82 => {
        const {
          statusCode: _0x351ea6,
          statusCode: _0x458f44,
          headers: _0x1f1793,
          body: _0x51eacd
        } = _0x113e82;
        _0x1a4d69(null, {
          "status": _0x351ea6,
          "statusCode": _0x458f44,
          "headers": _0x1f1793,
          "body": _0x51eacd
        }, _0x51eacd);
      }, _0x525a95 => {
        const {
          message: _0x501481,
          response: _0x15de37
        } = _0x525a95;
        _0x1a4d69(_0x501481, _0x15de37, _0x15de37 && _0x15de37.body);
      }));
    }
    ["post"](_0x2fb40d, _0x3a7975 = () => {}) {
      if (_0x2fb40d.body && _0x2fb40d.headers && !_0x2fb40d.headers["Content-Type"] && (_0x2fb40d.headers["Content-Type"] = "application/x-www-form-urlencoded"), _0x2fb40d.headers && delete _0x2fb40d.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (_0x2fb40d.headers = _0x2fb40d.headers || {}, Object.assign(_0x2fb40d.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.post(_0x2fb40d, (_0xf33c84, _0x5ba83b, _0x1a835f) => {
        !_0xf33c84 && _0x5ba83b && (_0x5ba83b.body = _0x1a835f, _0x5ba83b.statusCode = _0x5ba83b.status);
        _0x3a7975(_0xf33c84, _0x5ba83b, _0x1a835f);
      });else {
        if (this.isQuanX()) _0x2fb40d.method = "POST", this.isNeedRewrite && (_0x2fb40d.opts = _0x2fb40d.opts || {}, Object.assign(_0x2fb40d.opts, {
          "hints": !1
        })), $task.fetch(_0x2fb40d).then(_0x31b6a3 => {
          const {
            statusCode: _0xe05697,
            statusCode: _0xafc196,
            headers: _0x4e55a9,
            body: _0x354761
          } = _0x31b6a3;
          _0x3a7975(null, {
            "status": _0xe05697,
            "statusCode": _0xafc196,
            "headers": _0x4e55a9,
            "body": _0x354761
          }, _0x354761);
        }, _0x1e53e8 => _0x3a7975(_0x1e53e8));else {
          if (this.isNode()) {
            this.initGotEnv(_0x2fb40d);
            const {
              url: _0x5e1a2b,
              ..._0x3b1051
            } = _0x2fb40d;
            this.got.post(_0x5e1a2b, _0x3b1051).then(_0x3975f7 => {
              const {
                statusCode: _0x41f65b,
                statusCode: _0x1e7436,
                headers: _0x90f00e,
                body: _0x441786
              } = _0x3975f7;
              _0x3a7975(null, {
                "status": _0x41f65b,
                "statusCode": _0x1e7436,
                "headers": _0x90f00e,
                "body": _0x441786
              }, _0x441786);
            }, _0x3fd18f => {
              const {
                message: _0x2bd3e0,
                response: _0x471afa
              } = _0x3fd18f;
              _0x3a7975(_0x2bd3e0, _0x471afa, _0x471afa && _0x471afa.body);
            });
          }
        }
      }
    }
    ["time"](_0x43bc95, _0x1320bc = null) {
      const _0x22c040 = _0x1320bc ? new Date(_0x1320bc) : new Date();
      let _0x57c001 = {
        "M+": _0x22c040.getMonth() + 1,
        "d+": _0x22c040.getDate(),
        "H+": _0x22c040.getHours(),
        "m+": _0x22c040.getMinutes(),
        "s+": _0x22c040.getSeconds(),
        "q+": Math.floor((_0x22c040.getMonth() + 3) / 3),
        "S": _0x22c040.getMilliseconds()
      };
      /(y+)/.test(_0x43bc95) && (_0x43bc95 = _0x43bc95.replace(RegExp.$1, (_0x22c040.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x277ac9 in _0x57c001) new RegExp("(" + _0x277ac9 + ")").test(_0x43bc95) && (_0x43bc95 = _0x43bc95.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x57c001[_0x277ac9] : ("00" + _0x57c001[_0x277ac9]).substr(("" + _0x57c001[_0x277ac9]).length)));
      return _0x43bc95;
    }
    ["msg"](_0x444251 = _0x42e277, _0xb36d3a = "", _0x4ada87 = "", _0x53b59b) {
      const _0x268935 = _0x114bba => {
        if (!_0x114bba) return _0x114bba;
        if ("string" == typeof _0x114bba) return this.isLoon() ? _0x114bba : this.isQuanX() ? {
          "open-url": _0x114bba
        } : this.isSurge() ? {
          "url": _0x114bba
        } : void 0;
        if ("object" == typeof _0x114bba) {
          if (this.isLoon()) {
            let _0x1068c8 = _0x114bba.openUrl || _0x114bba.url || _0x114bba["open-url"],
              _0x1bc989 = _0x114bba.mediaUrl || _0x114bba["media-url"];
            return {
              "openUrl": _0x1068c8,
              "mediaUrl": _0x1bc989
            };
          }
          if (this.isQuanX()) {
            let _0x1d329c = _0x114bba["open-url"] || _0x114bba.url || _0x114bba.openUrl,
              _0x534215 = _0x114bba["media-url"] || _0x114bba.mediaUrl;
            return {
              "open-url": _0x1d329c,
              "media-url": _0x534215
            };
          }
          if (this.isSurge()) {
            let _0xc2ae87 = _0x114bba.url || _0x114bba.openUrl || _0x114bba["open-url"];
            return {
              "url": _0xc2ae87
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x444251, _0xb36d3a, _0x4ada87, _0x268935(_0x53b59b)) : this.isQuanX() && $notify(_0x444251, _0xb36d3a, _0x4ada87, _0x268935(_0x53b59b))), !this.isMuteLog) {
        let _0x255b5e = ["", "==============📣系统通知📣=============="];
        _0x255b5e.push(_0x444251);
        _0xb36d3a && _0x255b5e.push(_0xb36d3a);
        _0x4ada87 && _0x255b5e.push(_0x4ada87);
        console.log(_0x255b5e.join("\n"));
        this.logs = this.logs.concat(_0x255b5e);
      }
    }
    ["log"](..._0x64b806) {
      _0x64b806.length > 0 && (this.logs = [...this.logs, ..._0x64b806]);
      console.log(_0x64b806.join(this.logSeparator));
    }
    ["logErr"](_0x1ebff0, _0x1100ac) {
      const _0x8ae72 = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      _0x8ae72 ? this.log("", "❗️" + this.name + ", 错误!", _0x1ebff0.stack) : this.log("", "❗️" + this.name + ", 错误!", _0x1ebff0);
    }
    ["wait"](_0x25762f) {
      return new Promise(_0x4df317 => setTimeout(_0x4df317, _0x25762f));
    }
    ["done"](_0x31935f = {}) {
      const _0x352e4f = new Date().getTime(),
        _0x121971 = (_0x352e4f - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束! 🕛 " + _0x121971 + " 秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0x31935f);
    }
  }(_0x42e277, _0x1f1b66);
}