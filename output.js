//Thu Oct 10 2024 13:16:13 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("联通活动监控"),
  Notify = 1,
  debug = 0;
let ckStr = process.env.lthdck,
  msg = "",
  ck = "";
const CryptoJS = require("crypto-js"),
  config = {
    "mode": CryptoJS.mode.ECB,
    "padding": CryptoJS.pad.Pkcs7
  };
function encryptMillis(_0x32d34d) {
  const _0x57b735 = CryptoJS.enc.Hex.parse("C53F06BB4C33DE0757D3E974D69D4C48"),
    _0x40232e = "{\"millis\":" + _0x32d34d + "}",
    _0x765534 = CryptoJS.AES.encrypt(_0x40232e, _0x57b735, config).toString();
  return CryptoJS.enc.Base64.parse(_0x765534).toString().toUpperCase();
}
let sjc = Math.round(new Date().getTime()).toString(),
  cv = encryptMillis(sjc);
async function tips(_0x360432) {
  debugLog("【debug】 这是你的账号数组:\n " + _0x360432);
}
!(async () => {
  ckArr = await getCks(ckStr, "lthdck");
  await tips(ckArr);
  index = 0;
  ck = ckArr[index].split("&");
  debugLog("【debug】 这是你的账号信息:\n " + ck);
  for (var _0x3d3d41 = 0; _0x3d3d41 < 100; _0x3d3d41++) {
    ios = generat();
    weixin = generateValue();
    yljz = generateRandomHex();
    const _0x60c809 = 60000,
      _0x11f77e = 300000,
      _0x37b223 = ["abcdefghijklmnopqrstuvwxyz", "0123456789"];
    result = "";
    for (let _0x262ea8 = 0; _0x262ea8 < 6; _0x262ea8++) {
      let _0x16d391 = _0x37b223[Math.floor(Math.random() * _0x37b223.length)];
      result += _0x16d391[Math.floor(Math.random() * _0x16d391.length)];
    }
    const _0x10205f = Math.floor(Math.random() * (_0x11f77e - _0x60c809 + 1)) + _0x60c809;
    await start();
    await $.wait(_0x10205f);
  }
})().catch(_0x34a8fc => $.logErr(_0x34a8fc)).finally(() => $.done());
async function start() {
  await sijj();
  let _0x2ee67f = Math.round(new Date().getTime()).toString();
  cv = encryptMillis(_0x2ee67f);
  await signIn();
  await $.wait(1 * 1000);
}
async function start1() {
  for (var _0x294d6b = 0; _0x294d6b < 3; _0x294d6b++) {
    await $.wait(1 * 2000);
    await SendMsg(msg);
  }
  msg = "";
  process.exit(0);
}
async function sijj() {
  let _0x57bfee = {
      "url": "https://gitee.com/kele2233/genxin/raw/master/but.json",
      "headers": {
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.43(0x18002b2d) NetType/WIFI Language/zh_CN"
      }
    },
    _0x47a328 = await httpget(_0x57bfee, "ll");
  if (_0x47a328 == 3) {} else console.log(" 当前网络不畅或者存在更新版本已停止运行"), process.exit(0);
}
async function signIn() {
  let _0x30ebfe = {
      "url": "https://burning.wo-adv.cn/integral/queryTemlateList.do",
      "headers": {
        "Accept-Encoding": "gzip,compress,br,deflate",
        "Cookie": "cshy_applet_user=" + ck[0] + "",
        "Accept": "*/*",
        "Content-Type": "application/json",
        "Referer": "https://servicewechat.com/wx" + result + "/34/page-frame.html",
        "Host": "burning.wo-adv.cn",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS " + ios + " like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/" + weixin + "(" + yljz + ") NetType/WIFI Language/zh_CN",
        "Accept-Language": "zh-Hans-CN;q=1.0",
        "Connection": "keep-alive"
      },
      "body": "" + cv + ""
    },
    _0x37d056 = await httpPost(_0x30ebfe, "监控");
  try {
    _0x37d056.resultData[0].PRODUCT_LIST[0].PRODUCT_NUM > 0 && _0x37d056.resultData[0].PRODUCT_LIST[0].PRODUCT_NUM < 7000 ? (msg += "\n   " + _0x37d056.resultData[0].PRODUCT_LIST[0].PRODUCT_NUM + "有库存了", await start1()) : console.log("\n   无库存 \n");
  } catch (_0x2c400c) {}
}
async function getCks(_0x33088b, _0x2f76ee) {
  return new Promise(_0xad9010 => {
    let _0x33e77b = [];
    if (_0x33088b) {
      if (_0x33088b.indexOf("@") !== -1) _0x33088b.split("@").forEach(_0x4fd3ba => {
        _0x33e77b.push(_0x4fd3ba);
      });else {
        if (_0x33088b.indexOf("\n") !== -1) _0x33088b.split("\n").forEach(_0x1e704b => {
          _0x33e77b.push(_0x1e704b);
        });else {
          _0x33e77b.push(_0x33088b);
        }
      }
      _0xad9010(_0x33e77b);
    } else console.log("\n 【" + $.name + "】：未填写变量 " + _0x2f76ee);
  });
}
async function SendMsg(_0x5a0da5) {
  if (!_0x5a0da5) return;
  if (Notify > 0) {
    if ($.isNode()) {
      let _0x3fe1b2 = require("./sendNotify");
      await _0x3fe1b2.sendNotify($.name, _0x5a0da5);
    } else $.msg(_0x5a0da5);
  } else {
    console.log(_0x5a0da5);
  }
}
function randomString(_0x53170e) {
  _0x53170e = _0x53170e || 32;
  let _0x229770 = "QWERTYUIOPASDFGHJKLZXCVBNM1234567890",
    _0x4c2ce2 = _0x229770.length,
    _0x56d8a9 = "";
  for (i = 0; i < _0x53170e; i++) _0x56d8a9 += _0x229770.charAt(Math.floor(Math.random() * _0x4c2ce2));
  return _0x56d8a9;
}
function randomInt(_0x359cef, _0x2b5687) {
  return Math.round(Math.random() * (_0x2b5687 - _0x359cef) + _0x359cef);
}
function generat() {
  const _0x487e1a = Math.floor(Math.random() * 7) + 10,
    _0x456b2c = Math.floor(Math.random() * 8),
    _0x3dda29 = Math.floor(Math.random() * 3);
  let _0x5e4a59 = "";
  return _0x5e4a59 = _0x487e1a + "_" + _0x456b2c + (_0x3dda29 ? "_" + _0x3dda29 : ""), _0x5e4a59;
}
function generateValue() {
  const _0x47fab3 = Math.floor(Math.random() * 2) + 7,
    _0x1094ca = 0;
  let _0xb0b946 = 0,
    _0x18e52b = 22;
  if (_0x47fab3 === 7) {
    _0x18e52b = 43;
  }
  const _0x36a92d = Math.floor(Math.random() * (_0x18e52b - _0xb0b946 + 1)) + _0xb0b946;
  let _0x4d3000 = "";
  return _0x1094ca === 0 && _0x36a92d === 0 ? _0x4d3000 = _0x47fab3 : _0x4d3000 = _0x47fab3 + "_" + _0x1094ca + (_0x36a92d ? "_" + _0x36a92d : ""), _0x4d3000;
}
function generateRandomHex() {
  let _0x3820ee = "";
  const _0x500635 = "0123456789abcdef";
  for (let _0x20203e = 0; _0x20203e < 8; _0x20203e++) {
    _0x3820ee += _0x500635[Math.floor(Math.random() * _0x500635.length)];
  }
  return _0x3820ee;
}
function ts13() {
  return Math.round(new Date().getTime()).toString();
}
function ts10() {
  return Math.round(new Date().getTime() / 1000).toString();
}
function local_hours() {
  let _0x5b6844 = new Date();
  return h = _0x5b6844.getHours(), h;
}
function local_minutes() {
  let _0x25d5b1 = new Date();
  return m = _0x25d5b1.getMinutes(), m;
}
function wyy(_0x162729 = 3 * 1000) {
  return new Promise(_0xff1908 => {
    let _0x297838 = {
      "url": "https://keai.icu/apiwyy/api"
    };
    $.get(_0x297838, async (_0x4f4f9d, _0x3b7d07, _0x182b43) => {
      try {
        _0x182b43 = JSON.parse(_0x182b43);
        console.log("\n 【网抑云时间】: " + _0x182b43.content + "  by--" + _0x182b43.music);
      } catch (_0x4816e0) {
        $.logErr(_0x4816e0, _0x3b7d07);
      } finally {
        _0xff1908();
      }
    }, _0x162729);
  });
}
async function httpget(_0x4bd893, _0x3c03be, _0x17461f = 3 * 1000) {
  return new Promise(_0x23d09f => {
    let _0x9deb38 = _0x4bd893;
    if (!_0x3c03be) {
      let _0x3076be = arguments.callee.toString(),
        _0x3593f1 = /function\s*(\w*)/i,
        _0x254b77 = _0x3593f1.exec(_0x3076be);
      _0x3c03be = _0x254b77[1];
    }
    debug && (console.log("\n 【debug】=============== 这是 " + _0x3c03be + " 请求 url ==============="), console.log(_0x9deb38));
    $.get(_0x9deb38, async (_0x1bd785, _0x15fa39, _0x13ac1c) => {
      try {
        debug && (console.log("\n\n 【debug】===============这是 " + _0x3c03be + " 返回data=============="), console.log(_0x13ac1c), console.log("======"), console.log(JSON.parse(_0x13ac1c)));
        let _0x1e30bc = JSON.parse(_0x13ac1c);
        _0x23d09f(_0x1e30bc);
      } catch (_0x395977) {
        console.log("\n " + _0x3c03be + " 失败了!请稍后尝试!!");
        msg += "\n " + _0x3c03be + " 失败了!请稍后尝试!!";
      } finally {
        _0x23d09f();
      }
    }, _0x17461f);
  });
}
async function httpPost(_0x1b6f6a, _0x52adb5, _0x51e2df = 3 * 1000) {
  return new Promise(_0x209d2e => {
    let _0x3f6499 = _0x1b6f6a;
    if (!_0x52adb5) {
      let _0x5cdf87 = arguments.callee.toString(),
        _0x3d772f = /function\s*(\w*)/i,
        _0x356f43 = _0x3d772f.exec(_0x5cdf87);
      _0x52adb5 = _0x356f43[1];
    }
    debug && (console.log("\n 【debug】=============== 这是 " + _0x52adb5 + " 请求 url ==============="), console.log(_0x3f6499));
    $.post(_0x3f6499, async (_0x5ac10e, _0x142437, _0x5ef886) => {
      try {
        debug && (console.log("\n\n 【debug】===============这是 " + _0x52adb5 + " 返回data=============="), console.log(_0x5ef886), console.log("======"), console.log(JSON.parse(_0x5ef886)));
        let _0xca2584 = JSON.parse(_0x5ef886);
        _0x209d2e(_0xca2584);
      } catch (_0x18b493) {
        console.log("\n " + _0x52adb5 + " 失败了!请稍后尝试!!");
        msg += "\n " + _0x52adb5 + " 失败了!请稍后尝试!!";
      } finally {
        _0x209d2e();
      }
    }, _0x51e2df);
  });
}
function debugLog(..._0x1ee559) {
  debug && console.log(..._0x1ee559);
}
function MD5Encrypt(_0x145e84) {
  function _0x26247a(_0x47e546, _0x3f3d9e) {
    return _0x47e546 << _0x3f3d9e | _0x47e546 >>> 32 - _0x3f3d9e;
  }
  function _0x283383(_0x550701, _0x3c0b17) {
    var _0x1c0f11, _0x190857, _0x1a1ec5, _0x3b7401, _0x1fff93;
    return _0x1a1ec5 = 2147483648 & _0x550701, _0x3b7401 = 2147483648 & _0x3c0b17, _0x1c0f11 = 1073741824 & _0x550701, _0x190857 = 1073741824 & _0x3c0b17, _0x1fff93 = (1073741823 & _0x550701) + (1073741823 & _0x3c0b17), _0x1c0f11 & _0x190857 ? 2147483648 ^ _0x1fff93 ^ _0x1a1ec5 ^ _0x3b7401 : _0x1c0f11 | _0x190857 ? 1073741824 & _0x1fff93 ? 3221225472 ^ _0x1fff93 ^ _0x1a1ec5 ^ _0x3b7401 : 1073741824 ^ _0x1fff93 ^ _0x1a1ec5 ^ _0x3b7401 : _0x1fff93 ^ _0x1a1ec5 ^ _0x3b7401;
  }
  function _0x161fc4(_0x15c94f, _0x48c7c8, _0x4ad1e8) {
    return _0x15c94f & _0x48c7c8 | ~_0x15c94f & _0x4ad1e8;
  }
  function _0x135c18(_0xeb2b6e, _0xf83b49, _0x1196a6) {
    return _0xeb2b6e & _0x1196a6 | _0xf83b49 & ~_0x1196a6;
  }
  function _0x2bcbf8(_0x365cdd, _0x48c1fb, _0x5ef78b) {
    return _0x365cdd ^ _0x48c1fb ^ _0x5ef78b;
  }
  function _0x14bb39(_0x995718, _0x7ef89a, _0x479b44) {
    return _0x7ef89a ^ (_0x995718 | ~_0x479b44);
  }
  function _0xc11194(_0x29b052, _0x21551f, _0x4ed1c0, _0x439b11, _0x83623b, _0x5b06db, _0x41193a) {
    return _0x29b052 = _0x283383(_0x29b052, _0x283383(_0x283383(_0x161fc4(_0x21551f, _0x4ed1c0, _0x439b11), _0x83623b), _0x41193a)), _0x283383(_0x26247a(_0x29b052, _0x5b06db), _0x21551f);
  }
  function _0x233f32(_0x4d8daa, _0x28aae0, _0x15f6be, _0xb51891, _0x5b1f4b, _0x1030e8, _0x24c2eb) {
    return _0x4d8daa = _0x283383(_0x4d8daa, _0x283383(_0x283383(_0x135c18(_0x28aae0, _0x15f6be, _0xb51891), _0x5b1f4b), _0x24c2eb)), _0x283383(_0x26247a(_0x4d8daa, _0x1030e8), _0x28aae0);
  }
  function _0x244f4c(_0x23ea46, _0x2fe212, _0x125577, _0xac5cd1, _0x4a72e6, _0x445db7, _0x47d1ef) {
    return _0x23ea46 = _0x283383(_0x23ea46, _0x283383(_0x283383(_0x2bcbf8(_0x2fe212, _0x125577, _0xac5cd1), _0x4a72e6), _0x47d1ef)), _0x283383(_0x26247a(_0x23ea46, _0x445db7), _0x2fe212);
  }
  function _0x50d84f(_0x42543e, _0x44a678, _0x4fb65e, _0x6e6375, _0x326921, _0x1344f9, _0x1b846e) {
    return _0x42543e = _0x283383(_0x42543e, _0x283383(_0x283383(_0x14bb39(_0x44a678, _0x4fb65e, _0x6e6375), _0x326921), _0x1b846e)), _0x283383(_0x26247a(_0x42543e, _0x1344f9), _0x44a678);
  }
  function _0x7676ef(_0x37a8fb) {
    for (var _0x589c7f, _0x3a985f = _0x37a8fb.length, _0x47ebaf = _0x3a985f + 8, _0x39d0d1 = (_0x47ebaf - _0x47ebaf % 64) / 64, _0x3109c6 = 16 * (_0x39d0d1 + 1), _0xd3d4bb = new Array(_0x3109c6 - 1), _0x4b8fba = 0, _0x2561c8 = 0; _0x3a985f > _0x2561c8;) _0x589c7f = (_0x2561c8 - _0x2561c8 % 4) / 4, _0x4b8fba = _0x2561c8 % 4 * 8, _0xd3d4bb[_0x589c7f] = _0xd3d4bb[_0x589c7f] | _0x37a8fb.charCodeAt(_0x2561c8) << _0x4b8fba, _0x2561c8++;
    return _0x589c7f = (_0x2561c8 - _0x2561c8 % 4) / 4, _0x4b8fba = _0x2561c8 % 4 * 8, _0xd3d4bb[_0x589c7f] = _0xd3d4bb[_0x589c7f] | 128 << _0x4b8fba, _0xd3d4bb[_0x3109c6 - 2] = _0x3a985f << 3, _0xd3d4bb[_0x3109c6 - 1] = _0x3a985f >>> 29, _0xd3d4bb;
  }
  function _0x354db5(_0x4ab7ad) {
    var _0x4870c6,
      _0x50f3f2,
      _0x51070d = "",
      _0x153bde = "";
    for (_0x50f3f2 = 0; 3 >= _0x50f3f2; _0x50f3f2++) _0x4870c6 = _0x4ab7ad >>> 8 * _0x50f3f2 & 255, _0x153bde = "0" + _0x4870c6.toString(16), _0x51070d += _0x153bde.substr(_0x153bde.length - 2, 2);
    return _0x51070d;
  }
  function _0x301381(_0xebc16e) {
    _0xebc16e = _0xebc16e.replace(/\r\n/g, "\n");
    for (var _0x391771 = "", _0x32628e = 0; _0x32628e < _0xebc16e.length; _0x32628e++) {
      var _0x230c01 = _0xebc16e.charCodeAt(_0x32628e);
      128 > _0x230c01 ? _0x391771 += String.fromCharCode(_0x230c01) : _0x230c01 > 127 && 2048 > _0x230c01 ? (_0x391771 += String.fromCharCode(_0x230c01 >> 6 | 192), _0x391771 += String.fromCharCode(63 & _0x230c01 | 128)) : (_0x391771 += String.fromCharCode(_0x230c01 >> 12 | 224), _0x391771 += String.fromCharCode(_0x230c01 >> 6 & 63 | 128), _0x391771 += String.fromCharCode(63 & _0x230c01 | 128));
    }
    return _0x391771;
  }
  var _0x1eb80e,
    _0xb87f8e,
    _0x268b38,
    _0x5b8c46,
    _0xa62aaf,
    _0x53d68b,
    _0xf45186,
    _0xd6e51c,
    _0x193ca2,
    _0x4c44a3 = [],
    _0x22d33d = 7,
    _0x14177b = 12,
    _0x10da9b = 17,
    _0x5cd462 = 22,
    _0x347be5 = 5,
    _0x274f43 = 9,
    _0x5c7ab5 = 14,
    _0x38b0f0 = 20,
    _0x3d826e = 4,
    _0xb02686 = 11,
    _0x5cbca4 = 16,
    _0x1e4774 = 23,
    _0x52eeb0 = 6,
    _0x2115e8 = 10,
    _0xe79626 = 15,
    _0x16c642 = 21;
  for (_0x145e84 = _0x301381(_0x145e84), _0x4c44a3 = _0x7676ef(_0x145e84), _0x53d68b = 1732584193, _0xf45186 = 4023233417, _0xd6e51c = 2562383102, _0x193ca2 = 271733878, _0x1eb80e = 0; _0x1eb80e < _0x4c44a3.length; _0x1eb80e += 16) _0xb87f8e = _0x53d68b, _0x268b38 = _0xf45186, _0x5b8c46 = _0xd6e51c, _0xa62aaf = _0x193ca2, _0x53d68b = _0xc11194(_0x53d68b, _0xf45186, _0xd6e51c, _0x193ca2, _0x4c44a3[_0x1eb80e + 0], _0x22d33d, 3614090360), _0x193ca2 = _0xc11194(_0x193ca2, _0x53d68b, _0xf45186, _0xd6e51c, _0x4c44a3[_0x1eb80e + 1], _0x14177b, 3905402710), _0xd6e51c = _0xc11194(_0xd6e51c, _0x193ca2, _0x53d68b, _0xf45186, _0x4c44a3[_0x1eb80e + 2], _0x10da9b, 606105819), _0xf45186 = _0xc11194(_0xf45186, _0xd6e51c, _0x193ca2, _0x53d68b, _0x4c44a3[_0x1eb80e + 3], _0x5cd462, 3250441966), _0x53d68b = _0xc11194(_0x53d68b, _0xf45186, _0xd6e51c, _0x193ca2, _0x4c44a3[_0x1eb80e + 4], _0x22d33d, 4118548399), _0x193ca2 = _0xc11194(_0x193ca2, _0x53d68b, _0xf45186, _0xd6e51c, _0x4c44a3[_0x1eb80e + 5], _0x14177b, 1200080426), _0xd6e51c = _0xc11194(_0xd6e51c, _0x193ca2, _0x53d68b, _0xf45186, _0x4c44a3[_0x1eb80e + 6], _0x10da9b, 2821735955), _0xf45186 = _0xc11194(_0xf45186, _0xd6e51c, _0x193ca2, _0x53d68b, _0x4c44a3[_0x1eb80e + 7], _0x5cd462, 4249261313), _0x53d68b = _0xc11194(_0x53d68b, _0xf45186, _0xd6e51c, _0x193ca2, _0x4c44a3[_0x1eb80e + 8], _0x22d33d, 1770035416), _0x193ca2 = _0xc11194(_0x193ca2, _0x53d68b, _0xf45186, _0xd6e51c, _0x4c44a3[_0x1eb80e + 9], _0x14177b, 2336552879), _0xd6e51c = _0xc11194(_0xd6e51c, _0x193ca2, _0x53d68b, _0xf45186, _0x4c44a3[_0x1eb80e + 10], _0x10da9b, 4294925233), _0xf45186 = _0xc11194(_0xf45186, _0xd6e51c, _0x193ca2, _0x53d68b, _0x4c44a3[_0x1eb80e + 11], _0x5cd462, 2304563134), _0x53d68b = _0xc11194(_0x53d68b, _0xf45186, _0xd6e51c, _0x193ca2, _0x4c44a3[_0x1eb80e + 12], _0x22d33d, 1804603682), _0x193ca2 = _0xc11194(_0x193ca2, _0x53d68b, _0xf45186, _0xd6e51c, _0x4c44a3[_0x1eb80e + 13], _0x14177b, 4254626195), _0xd6e51c = _0xc11194(_0xd6e51c, _0x193ca2, _0x53d68b, _0xf45186, _0x4c44a3[_0x1eb80e + 14], _0x10da9b, 2792965006), _0xf45186 = _0xc11194(_0xf45186, _0xd6e51c, _0x193ca2, _0x53d68b, _0x4c44a3[_0x1eb80e + 15], _0x5cd462, 1236535329), _0x53d68b = _0x233f32(_0x53d68b, _0xf45186, _0xd6e51c, _0x193ca2, _0x4c44a3[_0x1eb80e + 1], _0x347be5, 4129170786), _0x193ca2 = _0x233f32(_0x193ca2, _0x53d68b, _0xf45186, _0xd6e51c, _0x4c44a3[_0x1eb80e + 6], _0x274f43, 3225465664), _0xd6e51c = _0x233f32(_0xd6e51c, _0x193ca2, _0x53d68b, _0xf45186, _0x4c44a3[_0x1eb80e + 11], _0x5c7ab5, 643717713), _0xf45186 = _0x233f32(_0xf45186, _0xd6e51c, _0x193ca2, _0x53d68b, _0x4c44a3[_0x1eb80e + 0], _0x38b0f0, 3921069994), _0x53d68b = _0x233f32(_0x53d68b, _0xf45186, _0xd6e51c, _0x193ca2, _0x4c44a3[_0x1eb80e + 5], _0x347be5, 3593408605), _0x193ca2 = _0x233f32(_0x193ca2, _0x53d68b, _0xf45186, _0xd6e51c, _0x4c44a3[_0x1eb80e + 10], _0x274f43, 38016083), _0xd6e51c = _0x233f32(_0xd6e51c, _0x193ca2, _0x53d68b, _0xf45186, _0x4c44a3[_0x1eb80e + 15], _0x5c7ab5, 3634488961), _0xf45186 = _0x233f32(_0xf45186, _0xd6e51c, _0x193ca2, _0x53d68b, _0x4c44a3[_0x1eb80e + 4], _0x38b0f0, 3889429448), _0x53d68b = _0x233f32(_0x53d68b, _0xf45186, _0xd6e51c, _0x193ca2, _0x4c44a3[_0x1eb80e + 9], _0x347be5, 568446438), _0x193ca2 = _0x233f32(_0x193ca2, _0x53d68b, _0xf45186, _0xd6e51c, _0x4c44a3[_0x1eb80e + 14], _0x274f43, 3275163606), _0xd6e51c = _0x233f32(_0xd6e51c, _0x193ca2, _0x53d68b, _0xf45186, _0x4c44a3[_0x1eb80e + 3], _0x5c7ab5, 4107603335), _0xf45186 = _0x233f32(_0xf45186, _0xd6e51c, _0x193ca2, _0x53d68b, _0x4c44a3[_0x1eb80e + 8], _0x38b0f0, 1163531501), _0x53d68b = _0x233f32(_0x53d68b, _0xf45186, _0xd6e51c, _0x193ca2, _0x4c44a3[_0x1eb80e + 13], _0x347be5, 2850285829), _0x193ca2 = _0x233f32(_0x193ca2, _0x53d68b, _0xf45186, _0xd6e51c, _0x4c44a3[_0x1eb80e + 2], _0x274f43, 4243563512), _0xd6e51c = _0x233f32(_0xd6e51c, _0x193ca2, _0x53d68b, _0xf45186, _0x4c44a3[_0x1eb80e + 7], _0x5c7ab5, 1735328473), _0xf45186 = _0x233f32(_0xf45186, _0xd6e51c, _0x193ca2, _0x53d68b, _0x4c44a3[_0x1eb80e + 12], _0x38b0f0, 2368359562), _0x53d68b = _0x244f4c(_0x53d68b, _0xf45186, _0xd6e51c, _0x193ca2, _0x4c44a3[_0x1eb80e + 5], _0x3d826e, 4294588738), _0x193ca2 = _0x244f4c(_0x193ca2, _0x53d68b, _0xf45186, _0xd6e51c, _0x4c44a3[_0x1eb80e + 8], _0xb02686, 2272392833), _0xd6e51c = _0x244f4c(_0xd6e51c, _0x193ca2, _0x53d68b, _0xf45186, _0x4c44a3[_0x1eb80e + 11], _0x5cbca4, 1839030562), _0xf45186 = _0x244f4c(_0xf45186, _0xd6e51c, _0x193ca2, _0x53d68b, _0x4c44a3[_0x1eb80e + 14], _0x1e4774, 4259657740), _0x53d68b = _0x244f4c(_0x53d68b, _0xf45186, _0xd6e51c, _0x193ca2, _0x4c44a3[_0x1eb80e + 1], _0x3d826e, 2763975236), _0x193ca2 = _0x244f4c(_0x193ca2, _0x53d68b, _0xf45186, _0xd6e51c, _0x4c44a3[_0x1eb80e + 4], _0xb02686, 1272893353), _0xd6e51c = _0x244f4c(_0xd6e51c, _0x193ca2, _0x53d68b, _0xf45186, _0x4c44a3[_0x1eb80e + 7], _0x5cbca4, 4139469664), _0xf45186 = _0x244f4c(_0xf45186, _0xd6e51c, _0x193ca2, _0x53d68b, _0x4c44a3[_0x1eb80e + 10], _0x1e4774, 3200236656), _0x53d68b = _0x244f4c(_0x53d68b, _0xf45186, _0xd6e51c, _0x193ca2, _0x4c44a3[_0x1eb80e + 13], _0x3d826e, 681279174), _0x193ca2 = _0x244f4c(_0x193ca2, _0x53d68b, _0xf45186, _0xd6e51c, _0x4c44a3[_0x1eb80e + 0], _0xb02686, 3936430074), _0xd6e51c = _0x244f4c(_0xd6e51c, _0x193ca2, _0x53d68b, _0xf45186, _0x4c44a3[_0x1eb80e + 3], _0x5cbca4, 3572445317), _0xf45186 = _0x244f4c(_0xf45186, _0xd6e51c, _0x193ca2, _0x53d68b, _0x4c44a3[_0x1eb80e + 6], _0x1e4774, 76029189), _0x53d68b = _0x244f4c(_0x53d68b, _0xf45186, _0xd6e51c, _0x193ca2, _0x4c44a3[_0x1eb80e + 9], _0x3d826e, 3654602809), _0x193ca2 = _0x244f4c(_0x193ca2, _0x53d68b, _0xf45186, _0xd6e51c, _0x4c44a3[_0x1eb80e + 12], _0xb02686, 3873151461), _0xd6e51c = _0x244f4c(_0xd6e51c, _0x193ca2, _0x53d68b, _0xf45186, _0x4c44a3[_0x1eb80e + 15], _0x5cbca4, 530742520), _0xf45186 = _0x244f4c(_0xf45186, _0xd6e51c, _0x193ca2, _0x53d68b, _0x4c44a3[_0x1eb80e + 2], _0x1e4774, 3299628645), _0x53d68b = _0x50d84f(_0x53d68b, _0xf45186, _0xd6e51c, _0x193ca2, _0x4c44a3[_0x1eb80e + 0], _0x52eeb0, 4096336452), _0x193ca2 = _0x50d84f(_0x193ca2, _0x53d68b, _0xf45186, _0xd6e51c, _0x4c44a3[_0x1eb80e + 7], _0x2115e8, 1126891415), _0xd6e51c = _0x50d84f(_0xd6e51c, _0x193ca2, _0x53d68b, _0xf45186, _0x4c44a3[_0x1eb80e + 14], _0xe79626, 2878612391), _0xf45186 = _0x50d84f(_0xf45186, _0xd6e51c, _0x193ca2, _0x53d68b, _0x4c44a3[_0x1eb80e + 5], _0x16c642, 4237533241), _0x53d68b = _0x50d84f(_0x53d68b, _0xf45186, _0xd6e51c, _0x193ca2, _0x4c44a3[_0x1eb80e + 12], _0x52eeb0, 1700485571), _0x193ca2 = _0x50d84f(_0x193ca2, _0x53d68b, _0xf45186, _0xd6e51c, _0x4c44a3[_0x1eb80e + 3], _0x2115e8, 2399980690), _0xd6e51c = _0x50d84f(_0xd6e51c, _0x193ca2, _0x53d68b, _0xf45186, _0x4c44a3[_0x1eb80e + 10], _0xe79626, 4293915773), _0xf45186 = _0x50d84f(_0xf45186, _0xd6e51c, _0x193ca2, _0x53d68b, _0x4c44a3[_0x1eb80e + 1], _0x16c642, 2240044497), _0x53d68b = _0x50d84f(_0x53d68b, _0xf45186, _0xd6e51c, _0x193ca2, _0x4c44a3[_0x1eb80e + 8], _0x52eeb0, 1873313359), _0x193ca2 = _0x50d84f(_0x193ca2, _0x53d68b, _0xf45186, _0xd6e51c, _0x4c44a3[_0x1eb80e + 15], _0x2115e8, 4264355552), _0xd6e51c = _0x50d84f(_0xd6e51c, _0x193ca2, _0x53d68b, _0xf45186, _0x4c44a3[_0x1eb80e + 6], _0xe79626, 2734768916), _0xf45186 = _0x50d84f(_0xf45186, _0xd6e51c, _0x193ca2, _0x53d68b, _0x4c44a3[_0x1eb80e + 13], _0x16c642, 1309151649), _0x53d68b = _0x50d84f(_0x53d68b, _0xf45186, _0xd6e51c, _0x193ca2, _0x4c44a3[_0x1eb80e + 4], _0x52eeb0, 4149444226), _0x193ca2 = _0x50d84f(_0x193ca2, _0x53d68b, _0xf45186, _0xd6e51c, _0x4c44a3[_0x1eb80e + 11], _0x2115e8, 3174756917), _0xd6e51c = _0x50d84f(_0xd6e51c, _0x193ca2, _0x53d68b, _0xf45186, _0x4c44a3[_0x1eb80e + 2], _0xe79626, 718787259), _0xf45186 = _0x50d84f(_0xf45186, _0xd6e51c, _0x193ca2, _0x53d68b, _0x4c44a3[_0x1eb80e + 9], _0x16c642, 3951481745), _0x53d68b = _0x283383(_0x53d68b, _0xb87f8e), _0xf45186 = _0x283383(_0xf45186, _0x268b38), _0xd6e51c = _0x283383(_0xd6e51c, _0x5b8c46), _0x193ca2 = _0x283383(_0x193ca2, _0xa62aaf);
  var _0x1b4aa7 = _0x354db5(_0x53d68b) + _0x354db5(_0xf45186) + _0x354db5(_0xd6e51c) + _0x354db5(_0x193ca2);
  return _0x1b4aa7.toLowerCase();
}
function Env(_0x1ba110, _0x413ce0) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class _0x20e928 {
    constructor(_0x18c09a) {
      this.env = _0x18c09a;
    }
    ["send"](_0x3427c4, _0x2dcafb = "GET") {
      _0x3427c4 = "string" == typeof _0x3427c4 ? {
        "url": _0x3427c4
      } : _0x3427c4;
      let _0x983017 = this.get;
      return "POST" === _0x2dcafb && (_0x983017 = this.post), new Promise((_0x2ae6a8, _0x2e578d) => {
        _0x983017.call(this, _0x3427c4, (_0x1af42b, _0x3a8c63, _0x432253) => {
          _0x1af42b ? _0x2e578d(_0x1af42b) : _0x2ae6a8(_0x3a8c63);
        });
      });
    }
    ["get"](_0x3a3ccd) {
      return this.send.call(this.env, _0x3a3ccd);
    }
    ["post"](_0x38121e) {
      return this.send.call(this.env, _0x38121e, "POST");
    }
  }
  return new class {
    constructor(_0x3e5f00, _0x596e91) {
      this.name = _0x3e5f00;
      this.http = new _0x20e928(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x596e91);
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
    ["toObj"](_0x39de16, _0x2101dd = null) {
      try {
        return JSON.parse(_0x39de16);
      } catch {
        return _0x2101dd;
      }
    }
    ["toStr"](_0x37eff6, _0x5a29f6 = null) {
      try {
        return JSON.stringify(_0x37eff6);
      } catch {
        return _0x5a29f6;
      }
    }
    ["getjson"](_0x4d3d35, _0x1f22f8) {
      let _0x1bdb29 = _0x1f22f8;
      const _0x242a11 = this.getdata(_0x4d3d35);
      if (_0x242a11) try {
        _0x1bdb29 = JSON.parse(this.getdata(_0x4d3d35));
      } catch {}
      return _0x1bdb29;
    }
    ["setjson"](_0x31181a, _0x38a64e) {
      try {
        return this.setdata(JSON.stringify(_0x31181a), _0x38a64e);
      } catch {
        return !1;
      }
    }
    ["getScript"](_0x168100) {
      return new Promise(_0x538be8 => {
        this.get({
          "url": _0x168100
        }, (_0x259084, _0x133ffb, _0x4a1f64) => _0x538be8(_0x4a1f64));
      });
    }
    ["runScript"](_0x411119, _0x4a4a32) {
      return new Promise(_0x50747f => {
        let _0x3016a1 = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x3016a1 = _0x3016a1 ? _0x3016a1.replace(/\n/g, "").trim() : _0x3016a1;
        let _0x4ddf4f = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x4ddf4f = _0x4ddf4f ? 1 * _0x4ddf4f : 20;
        _0x4ddf4f = _0x4a4a32 && _0x4a4a32.timeout ? _0x4a4a32.timeout : _0x4ddf4f;
        const [_0x517eda, _0x138300] = _0x3016a1.split("@"),
          _0x14833a = {
            "url": "http://" + _0x138300 + "/v1/scripting/evaluate",
            "body": {
              "script_text": _0x411119,
              "mock_type": "cron",
              "timeout": _0x4ddf4f
            },
            "headers": {
              "X-Key": _0x517eda,
              "Accept": "*/*"
            }
          };
        this.post(_0x14833a, (_0x3f857d, _0x3cabcd, _0x5965f2) => _0x50747f(_0x5965f2));
      }).catch(_0x334d0e => this.logErr(_0x334d0e));
    }
    ["loaddata"]() {
      if (!this.isNode()) return {};
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x568f5c = this.path.resolve(this.dataFile),
          _0xa6882 = this.path.resolve(process.cwd(), this.dataFile),
          _0x21865f = this.fs.existsSync(_0x568f5c),
          _0x498ddb = !_0x21865f && this.fs.existsSync(_0xa6882);
        if (!_0x21865f && !_0x498ddb) return {};
        {
          const _0x4ff880 = _0x21865f ? _0x568f5c : _0xa6882;
          try {
            return JSON.parse(this.fs.readFileSync(_0x4ff880));
          } catch (_0x447f2b) {
            return {};
          }
        }
      }
    }
    ["writedata"]() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0xc0d6b3 = this.path.resolve(this.dataFile),
          _0x3d374d = this.path.resolve(process.cwd(), this.dataFile),
          _0x55b062 = this.fs.existsSync(_0xc0d6b3),
          _0x8119f = !_0x55b062 && this.fs.existsSync(_0x3d374d),
          _0x5a1191 = JSON.stringify(this.data);
        _0x55b062 ? this.fs.writeFileSync(_0xc0d6b3, _0x5a1191) : _0x8119f ? this.fs.writeFileSync(_0x3d374d, _0x5a1191) : this.fs.writeFileSync(_0xc0d6b3, _0x5a1191);
      }
    }
    ["lodash_get"](_0x2624c2, _0x1de898, _0x186bce) {
      const _0x2aea0d = _0x1de898.replace(/\[(\d+)\]/g, ".$1").split(".");
      let _0x3da9dd = _0x2624c2;
      for (const _0x568577 of _0x2aea0d) if (_0x3da9dd = Object(_0x3da9dd)[_0x568577], void 0 === _0x3da9dd) return _0x186bce;
      return _0x3da9dd;
    }
    ["lodash_set"](_0x19a059, _0x1dd3c9, _0x4a097f) {
      return Object(_0x19a059) !== _0x19a059 ? _0x19a059 : (Array.isArray(_0x1dd3c9) || (_0x1dd3c9 = _0x1dd3c9.toString().match(/[^.[\]]+/g) || []), _0x1dd3c9.slice(0, -1).reduce((_0x43c206, _0x15e1e6, _0x47cdff) => Object(_0x43c206[_0x15e1e6]) === _0x43c206[_0x15e1e6] ? _0x43c206[_0x15e1e6] : _0x43c206[_0x15e1e6] = Math.abs(_0x1dd3c9[_0x47cdff + 1]) >> 0 == +_0x1dd3c9[_0x47cdff + 1] ? [] : {}, _0x19a059)[_0x1dd3c9[_0x1dd3c9.length - 1]] = _0x4a097f, _0x19a059);
    }
    ["getdata"](_0x26daf5) {
      let _0x5b0b36 = this.getval(_0x26daf5);
      if (/^@/.test(_0x26daf5)) {
        const [, _0xf2e28, _0x3f25f0] = /^@(.*?)\.(.*?)$/.exec(_0x26daf5),
          _0x35216b = _0xf2e28 ? this.getval(_0xf2e28) : "";
        if (_0x35216b) try {
          const _0x24abba = JSON.parse(_0x35216b);
          _0x5b0b36 = _0x24abba ? this.lodash_get(_0x24abba, _0x3f25f0, "") : _0x5b0b36;
        } catch (_0x4e8698) {
          _0x5b0b36 = "";
        }
      }
      return _0x5b0b36;
    }
    ["setdata"](_0x231ed7, _0x1af143) {
      let _0x7a0c2c = false;
      if (/^@/.test(_0x1af143)) {
        const [, _0x11acb9, _0x156eba] = /^@(.*?)\.(.*?)$/.exec(_0x1af143),
          _0x2b87e2 = this.getval(_0x11acb9),
          _0x520ab3 = _0x11acb9 ? "null" === _0x2b87e2 ? null : _0x2b87e2 || "{}" : "{}";
        try {
          const _0x455762 = JSON.parse(_0x520ab3);
          this.lodash_set(_0x455762, _0x156eba, _0x231ed7);
          _0x7a0c2c = this.setval(JSON.stringify(_0x455762), _0x11acb9);
        } catch (_0x3b5f23) {
          const _0x8a8d3f = {};
          this.lodash_set(_0x8a8d3f, _0x156eba, _0x231ed7);
          _0x7a0c2c = this.setval(JSON.stringify(_0x8a8d3f), _0x11acb9);
        }
      } else _0x7a0c2c = this.setval(_0x231ed7, _0x1af143);
      return _0x7a0c2c;
    }
    ["getval"](_0x25e134) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x25e134) : this.isQuanX() ? $prefs.valueForKey(_0x25e134) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x25e134]) : this.data && this.data[_0x25e134] || null;
    }
    ["setval"](_0x48ecf8, _0x215311) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x48ecf8, _0x215311) : this.isQuanX() ? $prefs.setValueForKey(_0x48ecf8, _0x215311) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x215311] = _0x48ecf8, this.writedata(), !0) : this.data && this.data[_0x215311] || null;
    }
    ["initGotEnv"](_0x2c61d1) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0x2c61d1 && (_0x2c61d1.headers = _0x2c61d1.headers ? _0x2c61d1.headers : {}, void 0 === _0x2c61d1.headers.Cookie && void 0 === _0x2c61d1.cookieJar && (_0x2c61d1.cookieJar = this.ckjar));
    }
    ["get"](_0x4d55df, _0x3921d0 = () => {}) {
      _0x4d55df.headers && (delete _0x4d55df.headers["Content-Type"], delete _0x4d55df.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (_0x4d55df.headers = _0x4d55df.headers || {}, Object.assign(_0x4d55df.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(_0x4d55df, (_0x3ea650, _0x5e17a3, _0x15e399) => {
        !_0x3ea650 && _0x5e17a3 && (_0x5e17a3.body = _0x15e399, _0x5e17a3.statusCode = _0x5e17a3.status);
        _0x3921d0(_0x3ea650, _0x5e17a3, _0x15e399);
      })) : this.isQuanX() ? (this.isNeedRewrite && (_0x4d55df.opts = _0x4d55df.opts || {}, Object.assign(_0x4d55df.opts, {
        "hints": !1
      })), $task.fetch(_0x4d55df).then(_0x4011ee => {
        const {
          statusCode: _0x518239,
          statusCode: _0x4e9883,
          headers: _0x560b2d,
          body: _0x193f74
        } = _0x4011ee;
        _0x3921d0(null, {
          "status": _0x518239,
          "statusCode": _0x4e9883,
          "headers": _0x560b2d,
          "body": _0x193f74
        }, _0x193f74);
      }, _0x22d35f => _0x3921d0(_0x22d35f))) : this.isNode() && (this.initGotEnv(_0x4d55df), this.got(_0x4d55df).on("redirect", (_0xbb4395, _0x4bdef0) => {
        try {
          if (_0xbb4395.headers["set-cookie"]) {
            const _0x2b963b = _0xbb4395.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            _0x2b963b && this.ckjar.setCookieSync(_0x2b963b, null);
            _0x4bdef0.cookieJar = this.ckjar;
          }
        } catch (_0x47dbee) {
          this.logErr(_0x47dbee);
        }
      }).then(_0x488907 => {
        const {
          statusCode: _0x293d28,
          statusCode: _0x2862c2,
          headers: _0x23339d,
          body: _0x4c3fcd
        } = _0x488907;
        _0x3921d0(null, {
          "status": _0x293d28,
          "statusCode": _0x2862c2,
          "headers": _0x23339d,
          "body": _0x4c3fcd
        }, _0x4c3fcd);
      }, _0x596fb5 => {
        const {
          message: _0x3e75ae,
          response: _0x5366d3
        } = _0x596fb5;
        _0x3921d0(_0x3e75ae, _0x5366d3, _0x5366d3 && _0x5366d3.body);
      }));
    }
    ["post"](_0x441f75, _0x2bf392 = () => {}) {
      if (_0x441f75.body && _0x441f75.headers && !_0x441f75.headers["Content-Type"] && (_0x441f75.headers["Content-Type"] = "application/x-www-form-urlencoded"), _0x441f75.headers && delete _0x441f75.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (_0x441f75.headers = _0x441f75.headers || {}, Object.assign(_0x441f75.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.post(_0x441f75, (_0x2a0826, _0x492517, _0x1a6699) => {
        !_0x2a0826 && _0x492517 && (_0x492517.body = _0x1a6699, _0x492517.statusCode = _0x492517.status);
        _0x2bf392(_0x2a0826, _0x492517, _0x1a6699);
      });else {
        if (this.isQuanX()) _0x441f75.method = "POST", this.isNeedRewrite && (_0x441f75.opts = _0x441f75.opts || {}, Object.assign(_0x441f75.opts, {
          "hints": !1
        })), $task.fetch(_0x441f75).then(_0x8a729e => {
          const {
            statusCode: _0x3e1ed9,
            statusCode: _0x5693c4,
            headers: _0x4818b3,
            body: _0x44833f
          } = _0x8a729e;
          _0x2bf392(null, {
            "status": _0x3e1ed9,
            "statusCode": _0x5693c4,
            "headers": _0x4818b3,
            "body": _0x44833f
          }, _0x44833f);
        }, _0xa2f2cc => _0x2bf392(_0xa2f2cc));else {
          if (this.isNode()) {
            this.initGotEnv(_0x441f75);
            const {
              url: _0x1cbc81,
              ..._0x38cc47
            } = _0x441f75;
            this.got.post(_0x1cbc81, _0x38cc47).then(_0x31d9ac => {
              const {
                statusCode: _0x2a7305,
                statusCode: _0x40a017,
                headers: _0x563fe3,
                body: _0x2062fb
              } = _0x31d9ac;
              _0x2bf392(null, {
                "status": _0x2a7305,
                "statusCode": _0x40a017,
                "headers": _0x563fe3,
                "body": _0x2062fb
              }, _0x2062fb);
            }, _0xdd8d39 => {
              const {
                message: _0x14bfb8,
                response: _0x6ea73
              } = _0xdd8d39;
              _0x2bf392(_0x14bfb8, _0x6ea73, _0x6ea73 && _0x6ea73.body);
            });
          }
        }
      }
    }
    ["time"](_0x1d7c21, _0x47c9ce = null) {
      const _0x3fcf75 = _0x47c9ce ? new Date(_0x47c9ce) : new Date();
      let _0x59a4b0 = {
        "M+": _0x3fcf75.getMonth() + 1,
        "d+": _0x3fcf75.getDate(),
        "H+": _0x3fcf75.getHours(),
        "m+": _0x3fcf75.getMinutes(),
        "s+": _0x3fcf75.getSeconds(),
        "q+": Math.floor((_0x3fcf75.getMonth() + 3) / 3),
        "S": _0x3fcf75.getMilliseconds()
      };
      /(y+)/.test(_0x1d7c21) && (_0x1d7c21 = _0x1d7c21.replace(RegExp.$1, (_0x3fcf75.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x4badd0 in _0x59a4b0) new RegExp("(" + _0x4badd0 + ")").test(_0x1d7c21) && (_0x1d7c21 = _0x1d7c21.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x59a4b0[_0x4badd0] : ("00" + _0x59a4b0[_0x4badd0]).substr(("" + _0x59a4b0[_0x4badd0]).length)));
      return _0x1d7c21;
    }
    ["msg"](_0x2db8b0 = _0x1ba110, _0xd18e1a = "", _0x4942c7 = "", _0x5cc251) {
      const _0x2ed29c = _0x3a563e => {
        if (!_0x3a563e) return _0x3a563e;
        if ("string" == typeof _0x3a563e) return this.isLoon() ? _0x3a563e : this.isQuanX() ? {
          "open-url": _0x3a563e
        } : this.isSurge() ? {
          "url": _0x3a563e
        } : void 0;
        if ("object" == typeof _0x3a563e) {
          if (this.isLoon()) {
            let _0xfc7080 = _0x3a563e.openUrl || _0x3a563e.url || _0x3a563e["open-url"],
              _0x5a7a27 = _0x3a563e.mediaUrl || _0x3a563e["media-url"];
            return {
              "openUrl": _0xfc7080,
              "mediaUrl": _0x5a7a27
            };
          }
          if (this.isQuanX()) {
            let _0x2120b3 = _0x3a563e["open-url"] || _0x3a563e.url || _0x3a563e.openUrl,
              _0x1d01cd = _0x3a563e["media-url"] || _0x3a563e.mediaUrl;
            return {
              "open-url": _0x2120b3,
              "media-url": _0x1d01cd
            };
          }
          if (this.isSurge()) {
            let _0x23159a = _0x3a563e.url || _0x3a563e.openUrl || _0x3a563e["open-url"];
            return {
              "url": _0x23159a
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x2db8b0, _0xd18e1a, _0x4942c7, _0x2ed29c(_0x5cc251)) : this.isQuanX() && $notify(_0x2db8b0, _0xd18e1a, _0x4942c7, _0x2ed29c(_0x5cc251))), !this.isMuteLog) {
        let _0x2ecb01 = ["", "==============📣系统通知📣=============="];
        _0x2ecb01.push(_0x2db8b0);
        _0xd18e1a && _0x2ecb01.push(_0xd18e1a);
        _0x4942c7 && _0x2ecb01.push(_0x4942c7);
        console.log(_0x2ecb01.join("\n"));
        this.logs = this.logs.concat(_0x2ecb01);
      }
    }
    ["log"](..._0x29d40a) {
      _0x29d40a.length > 0 && (this.logs = [...this.logs, ..._0x29d40a]);
      console.log(_0x29d40a.join(this.logSeparator));
    }
    ["logErr"](_0x1defd0, _0x123b9f) {
      const _0x12ed52 = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      _0x12ed52 ? this.log("", "❗️" + this.name + ", 错误!", _0x1defd0.stack) : this.log("", "❗️" + this.name + ", 错误!", _0x1defd0);
    }
    ["wait"](_0xea89ce) {
      return new Promise(_0x210291 => setTimeout(_0x210291, _0xea89ce));
    }
    ["done"](_0x1d558b = {}) {
      const _0xb08c8b = new Date().getTime(),
        _0x3dfa73 = (_0xb08c8b - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束! 🕛 " + _0x3dfa73 + " 秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0x1d558b);
    }
  }(_0x1ba110, _0x413ce0);
}