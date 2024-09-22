//Sun Sep 22 2024 09:43:41 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0x4f564e = new _0x54acad("联通云盘抽奖"),
  _0x167a3f = 1,
  _0x3d71e9 = 1,
  {
    v4: _0x3f6ede
  } = require("uuid"),
  _0x28bb92 = _0x3f6ede();
let _0x181f5c = process.env.chinaUnicomCookie,
  _0x239655 = "",
  _0x57da26 = "";
ckArr = _0x181f5c.split("&");
_0x3276a3("【debug】 这是你的账号数组:\n " + ckArr);
!(async () => {
  ckArr = _0x181f5c.split("&");
  for (let _0xcf4092 = 0; _0xcf4092 < ckArr.length; _0xcf4092++) {
    let _0x46010d = _0xcf4092 + 1;
    console.log("------------- 开始【第 " + _0x46010d + " 个账号】-------------");
    _0x57da26 = ckArr[_0xcf4092].split("&");
    _0x3276a3("【debug】 这是你第 " + _0x46010d + " 账号信息:\n " + _0x57da26);
    await _0x23e874();
    await _0x4f564e.wait(1 * 2000);
    if (num1 == 1) {
      console.log("当前online过期，跳过...");
      continue;
    }
    if (num1 == 2) {
      console.log("非浙江联通用户，跳过...");
      continue;
    }
    const _0x4f6cb6 = _0x59bad1(),
      _0x14631d = require("axios");
    let _0x282194 = {
      "method": "GET",
      "url": "https://m.client.10010.com/mobileService/openPlatform/openPlatLineNew.htm?to_url=https://zjwxapi.10010.com/wechat-route-rest-1.0/view/appZhejiangSpecialArea/index",
      "headers": {
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 unicom{version:iphone_c@11.0400}",
        "Referer": "https://img.client.10010.com/",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "zh-CN,zh-Hans;q=0.9",
        "Cookie": "PvSessionId=" + _0x4f6cb6 + "" + _0x28bb92 + ";c_mobile=" + _0x46010d + "; c_version=iphone_c@11.0400; city=036|" + cityCode + "|90063345|-99;devicedId=" + _0x28bb92 + "; ecs_token=" + ecs_token + ";t3_token=" + t3_token + ""
      },
      "maxRedirects": 0
    };
    await _0x14631d.request(_0x282194).catch(_0x2193ae => {
      wenb = _0x2193ae.request.res.rawHeaders[13];
      ticket1 = wenb.match(/ticket=([^&]+)/);
      ticket = ticket1[1];
      wenb = _0x2193ae.request.res.rawHeaders[13];
      postage1 = wenb.match(/postage=([^&]+)/);
      postage = postage1[1];
    });
    let _0x3e0ca6 = {
      "method": "GET",
      "url": "https://zjwxapi.10010.com/wechat-route-rest-1.0/view/appZhejiangSpecialArea/index?ticket=" + ticket + "&type=02&version=iphone_c@11.0400&timestamp=" + _0x4f6cb6 + "&desmobile=" + _0x46010d + "&num=0&postage=" + postage + "&userNumber=" + _0x46010d + "",
      "headers": {
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 unicom{version:iphone_c@11.0400}",
        "Referer": "https://img.client.10010.com/",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "zh-CN,zh-Hans;q=0.9",
        "Cookie": "PvSessionId=" + _0x4f6cb6 + "" + _0x28bb92 + ";c_mobile=" + _0x46010d + "; c_version=iphone_c@11.0400; city=036|" + cityCode + "|90063345|-99;devicedId=" + _0x28bb92 + "; ecs_token=" + ecs_token + ";t3_token=" + t3_token + ""
      }
    };
    async function _0x174db2() {
      try {
        const _0x5046f6 = await _0x14631d.request(_0x3e0ca6),
          _0x560f7e = _0x5046f6.headers,
          _0x305085 = _0x560f7e["set-cookie"][0],
          _0x43cf15 = /SERVERID=([^;]+);/,
          _0x3ee678 = _0x305085.match(_0x43cf15);
        if (_0x3ee678) {
          const _0x23cf43 = _0x3ee678[1];
          return _0x23cf43;
        } else {
          return console.log("No match found for SERVERID, retrying..."), _0x174db2();
        }
      } catch (_0x130969) {
        return _0x174db2();
      }
    }
    _0x174db2().then(_0x578e39 => {
      serverId = _0x578e39;
    });
    await _0x4f564e.wait(1 * 2000);
    await _0x28c8ed();
    await _0x59be02();
    if (cshu == 1) {
      console.log("" + num1 + "抽奖");
      await _0x1a541b();
    } else console.log("" + num1 + "已经抽过了");
  }
  await _0x26d3c3(_0x239655);
})().catch(_0x496c01 => _0x4f564e.logErr(_0x496c01)).finally(() => _0x4f564e.done());
async function _0x23e874() {
  let _0x14c552 = {
      "url": "https://m.client.10010.com/mobileService/onLine.htm",
      "headers": {
        "Accept-Encoding": "gzip, deflate, br",
        "Connection": "keep-alive",
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept": "*/*",
        "Host": "m.client.10010.com",
        "User-Agent": "ChinaUnicom.x CFNetwork iOS/16.3.1 unicom{version:iphone_c@11.0700}",
        "Accept-Language": "zh-CN,zh-Hans;q=0.9"
      },
      "body": "deviceModel=iPhone&step=background&token_online=" + _0x57da26 + "&version=iphone_c%4011.0700"
    },
    _0x58b92 = await _0x3d25d5(_0x14c552, "获取");
  try {
    if (_0x58b92.proName == "浙江") console.log("浙江联通用户");else {
      num1 = "2";
    }
    t3_token = _0x58b92.t3_token;
    private_token = _0x58b92.private_token;
    ecs_token = _0x58b92.ecs_token;
    num1 = _0x58b92.list[0].num;
    cityCode = _0x58b92.list[0].cityCode;
  } catch (_0x614a97) {
    num1 = "1";
  }
}
async function _0x1a541b() {
  let _0x5dfe60 = {
      "url": "https://api.m.taobao.com/rest/api3.do?api=mtop.common.getTimestamp",
      "headers": {
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko)"
      }
    },
    _0x3b0488 = await _0x27cd69(_0x5dfe60, "获取网络时间");
  try {
    shijian = _0x3b0488.data.t;
  } catch (_0x16eb58) {}
}
async function _0x25d99d() {
  let _0x1f6b61 = {
      "url": "https://gitee.com/kele2233/genxin/raw/master/ydid.json",
      "headers": {
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.43(0x18002b2d) NetType/WIFI Language/zh_CN"
      }
    },
    _0x5d8939 = await _0x27cd69(_0x1f6b61, "ll");
  hqsjc = _0x5d8939.ymsjc;
  gong = _0x5d8939.gong;
  dqsjc = Math.round(new Date().getTime() / 1000).toString();
  if (hqsjc > dqsjc) console.log("公告：" + _0x5d8939.gh), console.log("当前版本1.1，最新版本" + _0x5d8939.fwbbh), console.log("当前脚本有效期至" + _0x20a6f2(hqsjc));else {
    console.error(gong);
    process.exit();
  }
}
async function _0x28c8ed() {
  let _0x41edbb = {
      "url": "https://wechat.zj186.com/wechat-route-rest-1.0/sw-api/customerDay/checkActivity",
      "headers": {
        "Origin": "https://wechat.zj186.com",
        "Cookie": "SERVERID=" + serverId,
        "Connection": "keep-alive",
        "Content-Type": "application/json; charset=utf-8",
        "Accept": "application/json, text/plain, */*",
        "Host": "wechat.zj186.com",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 unicom{version:iphone_c@11.0400}",
        "Accept-Language": "zh-CN,zh-Hans;q=0.9",
        "Accept-Encoding": "gzip, deflate, br"
      },
      "body": "{\"oid\":null,\"cul\":\"/view/emallCustomer/index\",\"ful\":null,\"lid\":null,\"sce\":null,\"data\":{\"decodeData\":\"\",\"ticket\":\"" + ticket + "\",\"developId\":\"1020\"}}"
    },
    _0x5f546c = await _0x3d25d5(_0x41edbb, "numdata");
  decodeData = _0x5f546c.decodeData;
}
async function _0x59be02() {
  const _0x555f07 = Math.round(new Date().getTime()).toString();
  let _0x367c0c = {
      "url": "https://wechat.zj186.com/wechat-route-rest-1.0/sw-api/customerDay/drawToken.do",
      "headers": {
        "Origin": "https://wechat.zj186.com",
        "Cookie": "SERVERID=" + serverId,
        "Connection": "keep-alive",
        "Content-Type": "application/json; charset=utf-8",
        "Accept": "application/json, text/plain, */*",
        "Host": "wechat.zj186.com",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 unicom{version:iphone_c@11.0400}",
        "Accept-Language": "zh-CN,zh-Hans;q=0.9",
        "Accept-Encoding": "gzip, deflate, br"
      },
      "body": "{  \"phone_number\": \"" + decodeData + "\",  \"reqTs\": " + _0x555f07 + ",  \"developId\": \"1020\"}"
    },
    _0x1de2fe = await _0x3d25d5(_0x367c0c, "查询次数");
  _0x1de2fe.code == 0 ? (token = _0x1de2fe.dataMap.token, cshu = _0x1de2fe.dataMap.drawNumber) : cshu = 0;
}
async function _0x1a541b() {
  const _0x410fe2 = Math.round(new Date().getTime()).toString();
  let _0x1f4e53 = {
      "url": "https://wechat.zj186.com/wechat-route-rest-1.0/sw-api/customerDay/draw.do",
      "headers": {
        "Origin": "https://wechat.zj186.com",
        "Cookie": "SERVERID=" + serverId,
        "Connection": "keep-alive",
        "Content-Type": "application/json; charset=utf-8",
        "Accept": "application/json, text/plain, */*",
        "Host": "wechat.zj186.com",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 unicom{version:iphone_c@11.0400}",
        "Accept-Language": "zh-CN,zh-Hans;q=0.9",
        "Accept-Encoding": "gzip, deflate, br"
      },
      "body": "{\n  \"phone_number\": \"" + decodeData + "\",\n  \"reqToken\": \"" + token + "\",\n  \"developId\": \"1020\",\n  \"reqTs\": " + _0x410fe2 + ",\n  \"weChatData\": \"\"\n}"
    },
    _0x519067 = await _0x3d25d5(_0x1f4e53, "抽奖");
  const _0x26e3f0 = _0x519067.prizePageInfo.imageUrl,
    _0x5f1a6c = _0x26e3f0.match(/hf(\d+)\.png/)[1];
  console.log("本次抽奖获得" + _0x5f1a6c / 100 + "话费");
}
async function _0x54e79a(_0x166746, _0x5b629a) {
  return new Promise(_0x144545 => {
    let _0x1aa911 = [];
    if (_0x166746) {
      if (_0x166746.indexOf("@") !== -1) {
        _0x166746.split("@").forEach(_0x537e88 => {
          _0x1aa911.push(_0x537e88);
        });
      } else {
        if (_0x166746.indexOf("\n") !== -1) _0x166746.split("\n").forEach(_0x5bff39 => {
          _0x1aa911.push(_0x5bff39);
        });else {
          _0x1aa911.push(_0x166746);
        }
      }
      _0x144545(_0x1aa911);
    } else {
      console.log("\n 【" + _0x4f564e.name + "】：未填写变量 " + _0x5b629a);
    }
  });
}
async function _0x26d3c3(_0x564c9a) {
  if (!_0x564c9a) return;
  if (_0x167a3f > 0) {
    if (_0x4f564e.isNode()) {
      let _0x457bbf = require("./sendNotify");
      await _0x457bbf.sendNotify(_0x4f564e.name, _0x564c9a);
    } else {
      _0x4f564e.msg(_0x564c9a);
    }
  } else {
    console.log(_0x564c9a);
  }
}
function _0x521253(_0x395acd) {
  _0x395acd = _0x395acd || 32;
  let _0x2c35cb = "QWERTYUIOPASDFGHJKLZXCVBNM1234567890",
    _0x113834 = _0x2c35cb.length,
    _0x35d941 = "";
  for (i = 0; i < _0x395acd; i++) _0x35d941 += _0x2c35cb.charAt(Math.floor(Math.random() * _0x113834));
  return _0x35d941;
}
let _0x48ee38 = "";
function _0x564d93(_0x460339) {
  _0x48ee38 = _0x460339;
}
function _0x10e235(_0x40ac78) {
  if (_0x48ee38 === _0x40ac78) {
    console.log("Reached mark " + _0x40ac78);
  } else console.log("Invalid mark: " + _0x40ac78);
}
function _0x20a6f2(_0x34b04a) {
  var _0x2f0d74 = new Date(_0x34b04a * 1000);
  var _0xd26661 = _0x2f0d74.getFullYear();
  var _0x518eb3 = String(_0x2f0d74.getMonth() + 1).padStart(2, "0");
  var _0x8adf1 = String(_0x2f0d74.getDate()).padStart(2, "0");
  var _0x32994a = String(_0x2f0d74.getHours()).padStart(2, "0");
  var _0x15f7d7 = String(_0x2f0d74.getMinutes()).padStart(2, "0");
  var _0x418a5b = String(_0x2f0d74.getSeconds()).padStart(2, "0");
  var _0x32f13f = _0xd26661 + "-" + _0x518eb3 + "-" + _0x8adf1 + " " + _0x32994a + ":" + _0x15f7d7 + ":" + _0x418a5b;
  return _0x32f13f;
}
function _0x54025b(_0x31f25f, _0x93d0ab) {
  return Math.round(Math.random() * (_0x93d0ab - _0x31f25f) + _0x31f25f);
}
function _0x2f039c() {
  const _0x55c10f = new Date(),
    _0x3d9c03 = _0x55c10f.getHours(),
    _0x400df5 = new Date(_0x55c10f.getFullYear(), _0x55c10f.getMonth(), _0x55c10f.getDate(), _0x3d9c03 + 1, 0, 0, 0);
  return _0x400df5.getTime();
}
function _0x97a985() {
  const _0xacbd57 = new Date(),
    _0x3da079 = _0xacbd57.getMinutes(),
    _0x39ff1e = new Date(_0xacbd57.getFullYear(), _0xacbd57.getMonth(), _0xacbd57.getDate(), _0xacbd57.getHours(), _0x3da079 === 0 ? 1 : _0x3da079 + 1, 0, 0);
  return _0x39ff1e.getMinutes() === 0 && _0x39ff1e.getHours() !== _0xacbd57.getHours() && _0x39ff1e.setDate(_0xacbd57.getDate() + (_0x39ff1e.getHours() === 0 ? 1 : 0)), _0x39ff1e.getTime();
}
function _0x3c71b0() {
  return Math.round(new Date().getTime()).toString();
}
function _0x59bad1() {
  const _0x530fee = new Date(),
    _0x31e087 = String(_0x530fee.getFullYear()).padStart(4, "0"),
    _0x143ddb = String(_0x530fee.getMonth() + 1).padStart(2, "0"),
    _0x3aa667 = String(_0x530fee.getDate()).padStart(2, "0"),
    _0x41e42e = String(_0x530fee.getHours()).padStart(2, "0"),
    _0x34a884 = String(_0x530fee.getMinutes()).padStart(2, "0"),
    _0x4308a9 = String(_0x530fee.getSeconds()).slice(0, 2);
  return _0x31e087 + _0x143ddb + _0x3aa667 + _0x41e42e + _0x34a884 + _0x4308a9;
}
function _0x459d0e() {
  return Math.round(new Date().getTime() / 1000).toString();
}
function _0xd0a667() {
  let _0x1268aa = new Date();
  return h = _0x1268aa.getHours(), h;
}
function _0x136f49() {
  let _0x18d431 = new Date();
  return m = _0x18d431.getMinutes(), m;
}
function _0x526ef8(_0x4b9790 = 3 * 1000) {
  return new Promise(_0x716e5c => {
    let _0x30eba2 = {
      "url": "https://keai.icu/apiwyy/api"
    };
    _0x4f564e.get(_0x30eba2, async (_0x2dc1e4, _0x3d2a19, _0x2e2ea3) => {
      try {
        _0x2e2ea3 = JSON.parse(_0x2e2ea3);
        console.log("\n 【网抑云时间】: " + _0x2e2ea3.content + "  by--" + _0x2e2ea3.music);
      } catch (_0x321a4a) {
        _0x4f564e.logErr(_0x321a4a, _0x3d2a19);
      } finally {
        _0x716e5c();
      }
    }, _0x4b9790);
  });
}
async function _0x27cd69(_0x11a67b, _0x458f11, _0x44f296 = 3 * 1000) {
  return new Promise(_0x36bc79 => {
    let _0x2cc678 = _0x11a67b;
    if (!_0x458f11) {
      let _0x4404ab = arguments.callee.toString(),
        _0x43f4bd = /function\s*(\w*)/i,
        _0x1c1df0 = _0x43f4bd.exec(_0x4404ab);
      _0x458f11 = _0x1c1df0[1];
    }
    _0x3d71e9 && (console.log("\n 【debug】=============== 这是 " + _0x458f11 + " 请求 url ==============="), console.log(_0x2cc678));
    _0x4f564e.get(_0x2cc678, async (_0x3f09a7, _0x35afc5, _0x4f15e9) => {
      try {
        _0x3d71e9 && (console.log("\n\n 【debug】===============这是 " + _0x458f11 + " 返回data=============="), console.log(_0x4f15e9), console.log("======"), console.log(JSON.parse(_0x4f15e9)));
        let _0x21cef6 = JSON.parse(_0x4f15e9);
        _0x36bc79(_0x21cef6);
      } catch (_0x3a208d) {
        console.log(_0x3f09a7, _0x35afc5);
      } finally {
        _0x36bc79();
      }
    }, _0x44f296);
  });
}
async function _0x3d25d5(_0x41e984, _0x6c731e, _0x3858e9 = 2 * 100) {
  return new Promise(_0x49a114 => {
    let _0x5c30f1 = _0x41e984;
    if (!_0x6c731e) {
      let _0x3ea8a6 = arguments.callee.toString(),
        _0x231353 = /function\s*(\w*)/i,
        _0x1e9ce4 = _0x231353.exec(_0x3ea8a6);
      _0x6c731e = _0x1e9ce4[1];
    }
    _0x3d71e9 && (console.log("\n 【debug】=============== 这是 " + _0x6c731e + " 请求 url ==============="), console.log(_0x5c30f1));
    _0x4f564e.post(_0x5c30f1, async (_0x4272e1, _0x5354e1, _0x414739) => {
      try {
        _0x3d71e9 && (console.log("\n\n 【debug】===============这是 " + _0x6c731e + " 返回data=============="), console.log(_0x414739), console.log("======"), console.log(JSON.parse(_0x414739)));
        let _0x1d4325 = JSON.parse(_0x414739);
        _0x49a114(_0x1d4325);
      } catch (_0x1684b0) {} finally {
        _0x49a114();
      }
    }, _0x3858e9);
  });
}
function _0x3276a3(..._0x5a9b22) {
  if (_0x3d71e9) {
    console.log(..._0x5a9b22);
  }
}
function _0x50670a(_0x3e56c9) {
  function _0x4c8244(_0x5f1607, _0x3eea67) {
    return _0x5f1607 << _0x3eea67 | _0x5f1607 >>> 32 - _0x3eea67;
  }
  function _0x501cf6(_0x5d5573, _0x5d9d48) {
    var _0x46102e, _0x4c7595, _0x2d8ac7, _0x48f256, _0x51fc6f;
    return _0x2d8ac7 = 2147483648 & _0x5d5573, _0x48f256 = 2147483648 & _0x5d9d48, _0x46102e = 1073741824 & _0x5d5573, _0x4c7595 = 1073741824 & _0x5d9d48, _0x51fc6f = (1073741823 & _0x5d5573) + (1073741823 & _0x5d9d48), _0x46102e & _0x4c7595 ? 2147483648 ^ _0x51fc6f ^ _0x2d8ac7 ^ _0x48f256 : _0x46102e | _0x4c7595 ? 1073741824 & _0x51fc6f ? 3221225472 ^ _0x51fc6f ^ _0x2d8ac7 ^ _0x48f256 : 1073741824 ^ _0x51fc6f ^ _0x2d8ac7 ^ _0x48f256 : _0x51fc6f ^ _0x2d8ac7 ^ _0x48f256;
  }
  function _0x1d116e(_0x1d1d9f, _0x325974, _0x5299b7) {
    return _0x1d1d9f & _0x325974 | ~_0x1d1d9f & _0x5299b7;
  }
  function _0x86a217(_0x3a8632, _0x3ab81d, _0x336031) {
    return _0x3a8632 & _0x336031 | _0x3ab81d & ~_0x336031;
  }
  function _0x45d3b0(_0x5874f1, _0x3a42b7, _0x458232) {
    return _0x5874f1 ^ _0x3a42b7 ^ _0x458232;
  }
  function _0xab7eb8(_0x429617, _0x4641b7, _0x1da597) {
    return _0x4641b7 ^ (_0x429617 | ~_0x1da597);
  }
  function _0x499c9c(_0x1406dd, _0x47fa03, _0x5307af, _0x5d547e, _0x451945, _0x362793, _0x11f8e4) {
    return _0x1406dd = _0x501cf6(_0x1406dd, _0x501cf6(_0x501cf6(_0x1d116e(_0x47fa03, _0x5307af, _0x5d547e), _0x451945), _0x11f8e4)), _0x501cf6(_0x4c8244(_0x1406dd, _0x362793), _0x47fa03);
  }
  function _0x4a942e(_0x45202d, _0x2fcf38, _0x57b214, _0x5b976a, _0x31bc25, _0x58960b, _0x450f34) {
    return _0x45202d = _0x501cf6(_0x45202d, _0x501cf6(_0x501cf6(_0x86a217(_0x2fcf38, _0x57b214, _0x5b976a), _0x31bc25), _0x450f34)), _0x501cf6(_0x4c8244(_0x45202d, _0x58960b), _0x2fcf38);
  }
  function _0x28c37b(_0x82380d, _0x3737a8, _0x3a5622, _0x71cf1, _0x376a15, _0x5c764c, _0xafa02) {
    return _0x82380d = _0x501cf6(_0x82380d, _0x501cf6(_0x501cf6(_0x45d3b0(_0x3737a8, _0x3a5622, _0x71cf1), _0x376a15), _0xafa02)), _0x501cf6(_0x4c8244(_0x82380d, _0x5c764c), _0x3737a8);
  }
  function _0x39b6b3(_0x39f7e9, _0x48ee20, _0x5a57a9, _0x5546f1, _0x2b0ca3, _0x7a7d0b, _0x393e04) {
    return _0x39f7e9 = _0x501cf6(_0x39f7e9, _0x501cf6(_0x501cf6(_0xab7eb8(_0x48ee20, _0x5a57a9, _0x5546f1), _0x2b0ca3), _0x393e04)), _0x501cf6(_0x4c8244(_0x39f7e9, _0x7a7d0b), _0x48ee20);
  }
  function _0x441c72(_0xb4f374) {
    for (var _0x46bc8e, _0x150b85 = _0xb4f374.length, _0x51dcf7 = _0x150b85 + 8, _0x3416bc = (_0x51dcf7 - _0x51dcf7 % 64) / 64, _0x249e73 = 16 * (_0x3416bc + 1), _0x4230f9 = new Array(_0x249e73 - 1), _0x3bd1da = 0, _0xad089b = 0; _0x150b85 > _0xad089b;) _0x46bc8e = (_0xad089b - _0xad089b % 4) / 4, _0x3bd1da = _0xad089b % 4 * 8, _0x4230f9[_0x46bc8e] = _0x4230f9[_0x46bc8e] | _0xb4f374.charCodeAt(_0xad089b) << _0x3bd1da, _0xad089b++;
    return _0x46bc8e = (_0xad089b - _0xad089b % 4) / 4, _0x3bd1da = _0xad089b % 4 * 8, _0x4230f9[_0x46bc8e] = _0x4230f9[_0x46bc8e] | 128 << _0x3bd1da, _0x4230f9[_0x249e73 - 2] = _0x150b85 << 3, _0x4230f9[_0x249e73 - 1] = _0x150b85 >>> 29, _0x4230f9;
  }
  function _0x435555(_0x3515d0) {
    var _0x35e81d,
      _0x417e55,
      _0xb2c436 = "",
      _0x427ba1 = "";
    for (_0x417e55 = 0; 3 >= _0x417e55; _0x417e55++) _0x35e81d = _0x3515d0 >>> 8 * _0x417e55 & 255, _0x427ba1 = "0" + _0x35e81d.toString(16), _0xb2c436 += _0x427ba1.substr(_0x427ba1.length - 2, 2);
    return _0xb2c436;
  }
  function _0x553ae6(_0x3951d0) {
    _0x3951d0 = _0x3951d0.replace(/\r\n/g, "\n");
    for (var _0x25ddf4 = "", _0x437175 = 0; _0x437175 < _0x3951d0.length; _0x437175++) {
      var _0x5005e9 = _0x3951d0.charCodeAt(_0x437175);
      128 > _0x5005e9 ? _0x25ddf4 += String.fromCharCode(_0x5005e9) : _0x5005e9 > 127 && 2048 > _0x5005e9 ? (_0x25ddf4 += String.fromCharCode(_0x5005e9 >> 6 | 192), _0x25ddf4 += String.fromCharCode(63 & _0x5005e9 | 128)) : (_0x25ddf4 += String.fromCharCode(_0x5005e9 >> 12 | 224), _0x25ddf4 += String.fromCharCode(_0x5005e9 >> 6 & 63 | 128), _0x25ddf4 += String.fromCharCode(63 & _0x5005e9 | 128));
    }
    return _0x25ddf4;
  }
  var _0x5e51f5,
    _0x7f5dee,
    _0x25936b,
    _0x4a059f,
    _0x422ba1,
    _0x1cdf31,
    _0x44e0b8,
    _0x213b15,
    _0x124217,
    _0x192c66 = [],
    _0x4b93c1 = 7,
    _0x157bc6 = 12,
    _0xea1d30 = 17,
    _0x1fb568 = 22,
    _0xb70637 = 5,
    _0x32a13c = 9,
    _0x25a570 = 14,
    _0x33a863 = 20,
    _0x40f322 = 4,
    _0x21aa6b = 11,
    _0x86eb71 = 16,
    _0x449424 = 23,
    _0x4deea0 = 6,
    _0x5693ee = 10,
    _0x4c21da = 15,
    _0x21cf4a = 21;
  for (_0x3e56c9 = _0x553ae6(_0x3e56c9), _0x192c66 = _0x441c72(_0x3e56c9), _0x1cdf31 = 1732584193, _0x44e0b8 = 4023233417, _0x213b15 = 2562383102, _0x124217 = 271733878, _0x5e51f5 = 0; _0x5e51f5 < _0x192c66.length; _0x5e51f5 += 16) _0x7f5dee = _0x1cdf31, _0x25936b = _0x44e0b8, _0x4a059f = _0x213b15, _0x422ba1 = _0x124217, _0x1cdf31 = _0x499c9c(_0x1cdf31, _0x44e0b8, _0x213b15, _0x124217, _0x192c66[_0x5e51f5 + 0], _0x4b93c1, 3614090360), _0x124217 = _0x499c9c(_0x124217, _0x1cdf31, _0x44e0b8, _0x213b15, _0x192c66[_0x5e51f5 + 1], _0x157bc6, 3905402710), _0x213b15 = _0x499c9c(_0x213b15, _0x124217, _0x1cdf31, _0x44e0b8, _0x192c66[_0x5e51f5 + 2], _0xea1d30, 606105819), _0x44e0b8 = _0x499c9c(_0x44e0b8, _0x213b15, _0x124217, _0x1cdf31, _0x192c66[_0x5e51f5 + 3], _0x1fb568, 3250441966), _0x1cdf31 = _0x499c9c(_0x1cdf31, _0x44e0b8, _0x213b15, _0x124217, _0x192c66[_0x5e51f5 + 4], _0x4b93c1, 4118548399), _0x124217 = _0x499c9c(_0x124217, _0x1cdf31, _0x44e0b8, _0x213b15, _0x192c66[_0x5e51f5 + 5], _0x157bc6, 1200080426), _0x213b15 = _0x499c9c(_0x213b15, _0x124217, _0x1cdf31, _0x44e0b8, _0x192c66[_0x5e51f5 + 6], _0xea1d30, 2821735955), _0x44e0b8 = _0x499c9c(_0x44e0b8, _0x213b15, _0x124217, _0x1cdf31, _0x192c66[_0x5e51f5 + 7], _0x1fb568, 4249261313), _0x1cdf31 = _0x499c9c(_0x1cdf31, _0x44e0b8, _0x213b15, _0x124217, _0x192c66[_0x5e51f5 + 8], _0x4b93c1, 1770035416), _0x124217 = _0x499c9c(_0x124217, _0x1cdf31, _0x44e0b8, _0x213b15, _0x192c66[_0x5e51f5 + 9], _0x157bc6, 2336552879), _0x213b15 = _0x499c9c(_0x213b15, _0x124217, _0x1cdf31, _0x44e0b8, _0x192c66[_0x5e51f5 + 10], _0xea1d30, 4294925233), _0x44e0b8 = _0x499c9c(_0x44e0b8, _0x213b15, _0x124217, _0x1cdf31, _0x192c66[_0x5e51f5 + 11], _0x1fb568, 2304563134), _0x1cdf31 = _0x499c9c(_0x1cdf31, _0x44e0b8, _0x213b15, _0x124217, _0x192c66[_0x5e51f5 + 12], _0x4b93c1, 1804603682), _0x124217 = _0x499c9c(_0x124217, _0x1cdf31, _0x44e0b8, _0x213b15, _0x192c66[_0x5e51f5 + 13], _0x157bc6, 4254626195), _0x213b15 = _0x499c9c(_0x213b15, _0x124217, _0x1cdf31, _0x44e0b8, _0x192c66[_0x5e51f5 + 14], _0xea1d30, 2792965006), _0x44e0b8 = _0x499c9c(_0x44e0b8, _0x213b15, _0x124217, _0x1cdf31, _0x192c66[_0x5e51f5 + 15], _0x1fb568, 1236535329), _0x1cdf31 = _0x4a942e(_0x1cdf31, _0x44e0b8, _0x213b15, _0x124217, _0x192c66[_0x5e51f5 + 1], _0xb70637, 4129170786), _0x124217 = _0x4a942e(_0x124217, _0x1cdf31, _0x44e0b8, _0x213b15, _0x192c66[_0x5e51f5 + 6], _0x32a13c, 3225465664), _0x213b15 = _0x4a942e(_0x213b15, _0x124217, _0x1cdf31, _0x44e0b8, _0x192c66[_0x5e51f5 + 11], _0x25a570, 643717713), _0x44e0b8 = _0x4a942e(_0x44e0b8, _0x213b15, _0x124217, _0x1cdf31, _0x192c66[_0x5e51f5 + 0], _0x33a863, 3921069994), _0x1cdf31 = _0x4a942e(_0x1cdf31, _0x44e0b8, _0x213b15, _0x124217, _0x192c66[_0x5e51f5 + 5], _0xb70637, 3593408605), _0x124217 = _0x4a942e(_0x124217, _0x1cdf31, _0x44e0b8, _0x213b15, _0x192c66[_0x5e51f5 + 10], _0x32a13c, 38016083), _0x213b15 = _0x4a942e(_0x213b15, _0x124217, _0x1cdf31, _0x44e0b8, _0x192c66[_0x5e51f5 + 15], _0x25a570, 3634488961), _0x44e0b8 = _0x4a942e(_0x44e0b8, _0x213b15, _0x124217, _0x1cdf31, _0x192c66[_0x5e51f5 + 4], _0x33a863, 3889429448), _0x1cdf31 = _0x4a942e(_0x1cdf31, _0x44e0b8, _0x213b15, _0x124217, _0x192c66[_0x5e51f5 + 9], _0xb70637, 568446438), _0x124217 = _0x4a942e(_0x124217, _0x1cdf31, _0x44e0b8, _0x213b15, _0x192c66[_0x5e51f5 + 14], _0x32a13c, 3275163606), _0x213b15 = _0x4a942e(_0x213b15, _0x124217, _0x1cdf31, _0x44e0b8, _0x192c66[_0x5e51f5 + 3], _0x25a570, 4107603335), _0x44e0b8 = _0x4a942e(_0x44e0b8, _0x213b15, _0x124217, _0x1cdf31, _0x192c66[_0x5e51f5 + 8], _0x33a863, 1163531501), _0x1cdf31 = _0x4a942e(_0x1cdf31, _0x44e0b8, _0x213b15, _0x124217, _0x192c66[_0x5e51f5 + 13], _0xb70637, 2850285829), _0x124217 = _0x4a942e(_0x124217, _0x1cdf31, _0x44e0b8, _0x213b15, _0x192c66[_0x5e51f5 + 2], _0x32a13c, 4243563512), _0x213b15 = _0x4a942e(_0x213b15, _0x124217, _0x1cdf31, _0x44e0b8, _0x192c66[_0x5e51f5 + 7], _0x25a570, 1735328473), _0x44e0b8 = _0x4a942e(_0x44e0b8, _0x213b15, _0x124217, _0x1cdf31, _0x192c66[_0x5e51f5 + 12], _0x33a863, 2368359562), _0x1cdf31 = _0x28c37b(_0x1cdf31, _0x44e0b8, _0x213b15, _0x124217, _0x192c66[_0x5e51f5 + 5], _0x40f322, 4294588738), _0x124217 = _0x28c37b(_0x124217, _0x1cdf31, _0x44e0b8, _0x213b15, _0x192c66[_0x5e51f5 + 8], _0x21aa6b, 2272392833), _0x213b15 = _0x28c37b(_0x213b15, _0x124217, _0x1cdf31, _0x44e0b8, _0x192c66[_0x5e51f5 + 11], _0x86eb71, 1839030562), _0x44e0b8 = _0x28c37b(_0x44e0b8, _0x213b15, _0x124217, _0x1cdf31, _0x192c66[_0x5e51f5 + 14], _0x449424, 4259657740), _0x1cdf31 = _0x28c37b(_0x1cdf31, _0x44e0b8, _0x213b15, _0x124217, _0x192c66[_0x5e51f5 + 1], _0x40f322, 2763975236), _0x124217 = _0x28c37b(_0x124217, _0x1cdf31, _0x44e0b8, _0x213b15, _0x192c66[_0x5e51f5 + 4], _0x21aa6b, 1272893353), _0x213b15 = _0x28c37b(_0x213b15, _0x124217, _0x1cdf31, _0x44e0b8, _0x192c66[_0x5e51f5 + 7], _0x86eb71, 4139469664), _0x44e0b8 = _0x28c37b(_0x44e0b8, _0x213b15, _0x124217, _0x1cdf31, _0x192c66[_0x5e51f5 + 10], _0x449424, 3200236656), _0x1cdf31 = _0x28c37b(_0x1cdf31, _0x44e0b8, _0x213b15, _0x124217, _0x192c66[_0x5e51f5 + 13], _0x40f322, 681279174), _0x124217 = _0x28c37b(_0x124217, _0x1cdf31, _0x44e0b8, _0x213b15, _0x192c66[_0x5e51f5 + 0], _0x21aa6b, 3936430074), _0x213b15 = _0x28c37b(_0x213b15, _0x124217, _0x1cdf31, _0x44e0b8, _0x192c66[_0x5e51f5 + 3], _0x86eb71, 3572445317), _0x44e0b8 = _0x28c37b(_0x44e0b8, _0x213b15, _0x124217, _0x1cdf31, _0x192c66[_0x5e51f5 + 6], _0x449424, 76029189), _0x1cdf31 = _0x28c37b(_0x1cdf31, _0x44e0b8, _0x213b15, _0x124217, _0x192c66[_0x5e51f5 + 9], _0x40f322, 3654602809), _0x124217 = _0x28c37b(_0x124217, _0x1cdf31, _0x44e0b8, _0x213b15, _0x192c66[_0x5e51f5 + 12], _0x21aa6b, 3873151461), _0x213b15 = _0x28c37b(_0x213b15, _0x124217, _0x1cdf31, _0x44e0b8, _0x192c66[_0x5e51f5 + 15], _0x86eb71, 530742520), _0x44e0b8 = _0x28c37b(_0x44e0b8, _0x213b15, _0x124217, _0x1cdf31, _0x192c66[_0x5e51f5 + 2], _0x449424, 3299628645), _0x1cdf31 = _0x39b6b3(_0x1cdf31, _0x44e0b8, _0x213b15, _0x124217, _0x192c66[_0x5e51f5 + 0], _0x4deea0, 4096336452), _0x124217 = _0x39b6b3(_0x124217, _0x1cdf31, _0x44e0b8, _0x213b15, _0x192c66[_0x5e51f5 + 7], _0x5693ee, 1126891415), _0x213b15 = _0x39b6b3(_0x213b15, _0x124217, _0x1cdf31, _0x44e0b8, _0x192c66[_0x5e51f5 + 14], _0x4c21da, 2878612391), _0x44e0b8 = _0x39b6b3(_0x44e0b8, _0x213b15, _0x124217, _0x1cdf31, _0x192c66[_0x5e51f5 + 5], _0x21cf4a, 4237533241), _0x1cdf31 = _0x39b6b3(_0x1cdf31, _0x44e0b8, _0x213b15, _0x124217, _0x192c66[_0x5e51f5 + 12], _0x4deea0, 1700485571), _0x124217 = _0x39b6b3(_0x124217, _0x1cdf31, _0x44e0b8, _0x213b15, _0x192c66[_0x5e51f5 + 3], _0x5693ee, 2399980690), _0x213b15 = _0x39b6b3(_0x213b15, _0x124217, _0x1cdf31, _0x44e0b8, _0x192c66[_0x5e51f5 + 10], _0x4c21da, 4293915773), _0x44e0b8 = _0x39b6b3(_0x44e0b8, _0x213b15, _0x124217, _0x1cdf31, _0x192c66[_0x5e51f5 + 1], _0x21cf4a, 2240044497), _0x1cdf31 = _0x39b6b3(_0x1cdf31, _0x44e0b8, _0x213b15, _0x124217, _0x192c66[_0x5e51f5 + 8], _0x4deea0, 1873313359), _0x124217 = _0x39b6b3(_0x124217, _0x1cdf31, _0x44e0b8, _0x213b15, _0x192c66[_0x5e51f5 + 15], _0x5693ee, 4264355552), _0x213b15 = _0x39b6b3(_0x213b15, _0x124217, _0x1cdf31, _0x44e0b8, _0x192c66[_0x5e51f5 + 6], _0x4c21da, 2734768916), _0x44e0b8 = _0x39b6b3(_0x44e0b8, _0x213b15, _0x124217, _0x1cdf31, _0x192c66[_0x5e51f5 + 13], _0x21cf4a, 1309151649), _0x1cdf31 = _0x39b6b3(_0x1cdf31, _0x44e0b8, _0x213b15, _0x124217, _0x192c66[_0x5e51f5 + 4], _0x4deea0, 4149444226), _0x124217 = _0x39b6b3(_0x124217, _0x1cdf31, _0x44e0b8, _0x213b15, _0x192c66[_0x5e51f5 + 11], _0x5693ee, 3174756917), _0x213b15 = _0x39b6b3(_0x213b15, _0x124217, _0x1cdf31, _0x44e0b8, _0x192c66[_0x5e51f5 + 2], _0x4c21da, 718787259), _0x44e0b8 = _0x39b6b3(_0x44e0b8, _0x213b15, _0x124217, _0x1cdf31, _0x192c66[_0x5e51f5 + 9], _0x21cf4a, 3951481745), _0x1cdf31 = _0x501cf6(_0x1cdf31, _0x7f5dee), _0x44e0b8 = _0x501cf6(_0x44e0b8, _0x25936b), _0x213b15 = _0x501cf6(_0x213b15, _0x4a059f), _0x124217 = _0x501cf6(_0x124217, _0x422ba1);
  var _0x1a04ce = _0x435555(_0x1cdf31) + _0x435555(_0x44e0b8) + _0x435555(_0x213b15) + _0x435555(_0x124217);
  return _0x1a04ce.toLowerCase();
}
function _0x54acad(_0x368ac0, _0x3f18dd) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class _0x39b4a2 {
    constructor(_0xe4be78) {
      this.env = _0xe4be78;
    }
    ["send"](_0x51a82a, _0x4d7644 = "GET") {
      _0x51a82a = "string" == typeof _0x51a82a ? {
        "url": _0x51a82a
      } : _0x51a82a;
      let _0x53c7ea = this.get;
      return "POST" === _0x4d7644 && (_0x53c7ea = this.post), new Promise((_0xbf44b, _0x548e6c) => {
        _0x53c7ea.call(this, _0x51a82a, (_0x3d5ff8, _0x436b85, _0x1f6eeb) => {
          _0x3d5ff8 ? _0x548e6c(_0x3d5ff8) : _0xbf44b(_0x436b85);
        });
      });
    }
    ["get"](_0x158314) {
      return this.send.call(this.env, _0x158314);
    }
    ["post"](_0x33ab8a) {
      return this.send.call(this.env, _0x33ab8a, "POST");
    }
  }
  return new class {
    constructor(_0x25af92, _0x4eecb9) {
      this.name = _0x25af92;
      this.http = new _0x39b4a2(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x4eecb9);
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
    ["toObj"](_0x2cdfdd, _0x2037a6 = null) {
      try {
        return JSON.parse(_0x2cdfdd);
      } catch {
        return _0x2037a6;
      }
    }
    ["toStr"](_0x909acf, _0x140da4 = null) {
      try {
        return JSON.stringify(_0x909acf);
      } catch {
        return _0x140da4;
      }
    }
    ["getjson"](_0xe299b9, _0x22d737) {
      let _0x69bf6 = _0x22d737;
      const _0x24b37f = this.getdata(_0xe299b9);
      if (_0x24b37f) try {
        _0x69bf6 = JSON.parse(this.getdata(_0xe299b9));
      } catch {}
      return _0x69bf6;
    }
    ["setjson"](_0x3ae446, _0x3eee06) {
      try {
        return this.setdata(JSON.stringify(_0x3ae446), _0x3eee06);
      } catch {
        return !1;
      }
    }
    ["getScript"](_0x346a28) {
      return new Promise(_0x563334 => {
        this.get({
          "url": _0x346a28
        }, (_0x3b8b69, _0x6450e4, _0x5b7fbb) => _0x563334(_0x5b7fbb));
      });
    }
    ["runScript"](_0x4ee6c3, _0xde05d9) {
      return new Promise(_0x3d94f8 => {
        let _0x16c0a7 = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x16c0a7 = _0x16c0a7 ? _0x16c0a7.replace(/\n/g, "").trim() : _0x16c0a7;
        let _0x2a08ef = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x2a08ef = _0x2a08ef ? 1 * _0x2a08ef : 20;
        _0x2a08ef = _0xde05d9 && _0xde05d9.timeout ? _0xde05d9.timeout : _0x2a08ef;
        const [_0x5ecea5, _0x15e89a] = _0x16c0a7.split("@"),
          _0x2cae91 = {
            "url": "http://" + _0x15e89a + "/v1/scripting/evaluate",
            "body": {
              "script_text": _0x4ee6c3,
              "mock_type": "cron",
              "timeout": _0x2a08ef
            },
            "headers": {
              "Accept": "*/*"
            }
          };
        this.post(_0x2cae91, (_0x5c1786, _0x2f16f8, _0x38ee1c) => _0x3d94f8(_0x38ee1c));
      }).catch(_0x38a9dc => this.logErr(_0x38a9dc));
    }
    ["loaddata"]() {
      if (!this.isNode()) return {};
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x41c465 = this.path.resolve(this.dataFile),
          _0x1c2dd5 = this.path.resolve(process.cwd(), this.dataFile),
          _0xb9244b = this.fs.existsSync(_0x41c465),
          _0x55a08d = !_0xb9244b && this.fs.existsSync(_0x1c2dd5);
        if (!_0xb9244b && !_0x55a08d) return {};
        {
          const _0x3564cb = _0xb9244b ? _0x41c465 : _0x1c2dd5;
          try {
            return JSON.parse(this.fs.readFileSync(_0x3564cb));
          } catch (_0x3ecc99) {
            return {};
          }
        }
      }
    }
    ["writedata"]() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x5c4af5 = this.path.resolve(this.dataFile),
          _0x14d434 = this.path.resolve(process.cwd(), this.dataFile),
          _0x40a5a9 = this.fs.existsSync(_0x5c4af5),
          _0x16a9ff = !_0x40a5a9 && this.fs.existsSync(_0x14d434),
          _0x5b640e = JSON.stringify(this.data);
        _0x40a5a9 ? this.fs.writeFileSync(_0x5c4af5, _0x5b640e) : _0x16a9ff ? this.fs.writeFileSync(_0x14d434, _0x5b640e) : this.fs.writeFileSync(_0x5c4af5, _0x5b640e);
      }
    }
    ["lodash_get"](_0x6bdff1, _0x164a35, _0x2a0fba) {
      const _0x165e83 = _0x164a35.replace(/\[(\d+)\]/g, ".$1").split(".");
      let _0xa69ddb = _0x6bdff1;
      for (const _0x566328 of _0x165e83) if (_0xa69ddb = Object(_0xa69ddb)[_0x566328], void 0 === _0xa69ddb) return _0x2a0fba;
      return _0xa69ddb;
    }
    ["lodash_set"](_0x581387, _0x449abd, _0x155f91) {
      return Object(_0x581387) !== _0x581387 ? _0x581387 : (Array.isArray(_0x449abd) || (_0x449abd = _0x449abd.toString().match(/[^.[\]]+/g) || []), _0x449abd.slice(0, -1).reduce((_0x5b1e92, _0x250b99, _0x5cdd4b) => Object(_0x5b1e92[_0x250b99]) === _0x5b1e92[_0x250b99] ? _0x5b1e92[_0x250b99] : _0x5b1e92[_0x250b99] = Math.abs(_0x449abd[_0x5cdd4b + 1]) >> 0 == +_0x449abd[_0x5cdd4b + 1] ? [] : {}, _0x581387)[_0x449abd[_0x449abd.length - 1]] = _0x155f91, _0x581387);
    }
    ["getdata"](_0x5bd02d) {
      let _0x390b26 = this.getval(_0x5bd02d);
      if (/^@/.test(_0x5bd02d)) {
        const [, _0x3414e6, _0x1bbe45] = /^@(.*?)\.(.*?)$/.exec(_0x5bd02d),
          _0x3bd5f4 = _0x3414e6 ? this.getval(_0x3414e6) : "";
        if (_0x3bd5f4) try {
          const _0xb8020b = JSON.parse(_0x3bd5f4);
          _0x390b26 = _0xb8020b ? this.lodash_get(_0xb8020b, _0x1bbe45, "") : _0x390b26;
        } catch (_0x214e37) {
          _0x390b26 = "";
        }
      }
      return _0x390b26;
    }
    ["setdata"](_0x1fe469, _0xf9a651) {
      let _0x490964 = false;
      if (/^@/.test(_0xf9a651)) {
        const [, _0x245104, _0x215379] = /^@(.*?)\.(.*?)$/.exec(_0xf9a651),
          _0x31fb4b = this.getval(_0x245104),
          _0x2c75e7 = _0x245104 ? "null" === _0x31fb4b ? null : _0x31fb4b || "{}" : "{}";
        try {
          const _0x3eaadf = JSON.parse(_0x2c75e7);
          this.lodash_set(_0x3eaadf, _0x215379, _0x1fe469);
          _0x490964 = this.setval(JSON.stringify(_0x3eaadf), _0x245104);
        } catch (_0x45540d) {
          const _0x2e000e = {};
          this.lodash_set(_0x2e000e, _0x215379, _0x1fe469);
          _0x490964 = this.setval(JSON.stringify(_0x2e000e), _0x245104);
        }
      } else _0x490964 = this.setval(_0x1fe469, _0xf9a651);
      return _0x490964;
    }
    ["getval"](_0x2213c6) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x2213c6) : this.isQuanX() ? $prefs.valueForKey(_0x2213c6) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x2213c6]) : this.data && this.data[_0x2213c6] || null;
    }
    ["setval"](_0x2b01d7, _0x50e8d6) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x2b01d7, _0x50e8d6) : this.isQuanX() ? $prefs.setValueForKey(_0x2b01d7, _0x50e8d6) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x50e8d6] = _0x2b01d7, this.writedata(), !0) : this.data && this.data[_0x50e8d6] || null;
    }
    ["initGotEnv"](_0x38ebd2) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0x38ebd2 && (_0x38ebd2.headers = _0x38ebd2.headers ? _0x38ebd2.headers : {}, void 0 === _0x38ebd2.headers.Cookie && void 0 === _0x38ebd2.cookieJar && (_0x38ebd2.cookieJar = this.ckjar));
    }
    ["get"](_0x197351, _0x207f0e = () => {}) {
      _0x197351.headers && (delete _0x197351.headers["Content-Type"], delete _0x197351.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (_0x197351.headers = _0x197351.headers || {}, Object.assign(_0x197351.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(_0x197351, (_0x31e40c, _0x3bace9, _0xa42e4c) => {
        !_0x31e40c && _0x3bace9 && (_0x3bace9.body = _0xa42e4c, _0x3bace9.statusCode = _0x3bace9.status);
        _0x207f0e(_0x31e40c, _0x3bace9, _0xa42e4c);
      })) : this.isQuanX() ? (this.isNeedRewrite && (_0x197351.opts = _0x197351.opts || {}, Object.assign(_0x197351.opts, {
        "hints": !1
      })), $task.fetch(_0x197351).then(_0x5139ef => {
        const {
          statusCode: _0x1a7cfd,
          statusCode: _0x41c32f,
          headers: _0x1e7b4,
          body: _0x596a37
        } = _0x5139ef;
        _0x207f0e(null, {
          "status": _0x1a7cfd,
          "statusCode": _0x41c32f,
          "headers": _0x1e7b4,
          "body": _0x596a37
        }, _0x596a37);
      }, _0x1d4609 => _0x207f0e(_0x1d4609))) : this.isNode() && (this.initGotEnv(_0x197351), this.got(_0x197351).on("redirect", (_0x1455f0, _0x573368) => {
        try {
          if (_0x1455f0.headers["set-cookie"]) {
            const _0xceb207 = _0x1455f0.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            _0xceb207 && this.ckjar.setCookieSync(_0xceb207, null);
            _0x573368.cookieJar = this.ckjar;
          }
        } catch (_0x3fae85) {
          this.logErr(_0x3fae85);
        }
      }).then(_0xb1c9d8 => {
        const {
          statusCode: _0x4d1d4f,
          statusCode: _0x21b96e,
          headers: _0x3adad0,
          body: _0x2fce5b
        } = _0xb1c9d8;
        _0x207f0e(null, {
          "status": _0x4d1d4f,
          "statusCode": _0x21b96e,
          "headers": _0x3adad0,
          "body": _0x2fce5b
        }, _0x2fce5b);
      }, _0x3ab18b => {
        const {
          message: _0x4161dd,
          response: _0xa9e163
        } = _0x3ab18b;
        _0x207f0e(_0x4161dd, _0xa9e163, _0xa9e163 && _0xa9e163.body);
      }));
    }
    ["post"](_0x1fad63, _0x268d2a = () => {}) {
      if (_0x1fad63.body && _0x1fad63.headers && !_0x1fad63.headers["Content-Type"] && (_0x1fad63.headers["Content-Type"] = "application/json;charset=utf-8"), _0x1fad63.headers && delete _0x1fad63.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (_0x1fad63.headers = _0x1fad63.headers || {}, Object.assign(_0x1fad63.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.post(_0x1fad63, (_0x291990, _0x36d8aa, _0x3ef88b) => {
        !_0x291990 && _0x36d8aa && (_0x36d8aa.body = _0x3ef88b, _0x36d8aa.statusCode = _0x36d8aa.status);
        _0x268d2a(_0x291990, _0x36d8aa, _0x3ef88b);
      });else {
        if (this.isQuanX()) _0x1fad63.method = "POST", this.isNeedRewrite && (_0x1fad63.opts = _0x1fad63.opts || {}, Object.assign(_0x1fad63.opts, {
          "hints": !1
        })), $task.fetch(_0x1fad63).then(_0xadc143 => {
          const {
            statusCode: _0x55d110,
            statusCode: _0x3d5bb6,
            headers: _0x45cd1d,
            body: _0xc37b63
          } = _0xadc143;
          _0x268d2a(null, {
            "status": _0x55d110,
            "statusCode": _0x3d5bb6,
            "headers": _0x45cd1d,
            "body": _0xc37b63
          }, _0xc37b63);
        }, _0x1e2578 => _0x268d2a(_0x1e2578));else {
          if (this.isNode()) {
            this.initGotEnv(_0x1fad63);
            const {
              url: _0x15b315,
              ..._0x27219a
            } = _0x1fad63;
            this.got.post(_0x15b315, _0x27219a).then(_0x4ba868 => {
              const {
                statusCode: _0x161ba3,
                statusCode: _0x2098b6,
                headers: _0x5301ff,
                body: _0x2cc0de
              } = _0x4ba868;
              _0x268d2a(null, {
                "status": _0x161ba3,
                "statusCode": _0x2098b6,
                "headers": _0x5301ff,
                "body": _0x2cc0de
              }, _0x2cc0de);
            }, _0x40ebe1 => {
              const {
                message: _0x40555a,
                response: _0x5d4e1c
              } = _0x40ebe1;
              _0x268d2a(_0x40555a, _0x5d4e1c, _0x5d4e1c && _0x5d4e1c.body);
            });
          }
        }
      }
    }
    ["time"](_0x2b2f73, _0xc9c893 = null) {
      const _0x230f0a = _0xc9c893 ? new Date(_0xc9c893) : new Date();
      let _0x5cc2b1 = {
        "M+": _0x230f0a.getMonth() + 1,
        "d+": _0x230f0a.getDate(),
        "H+": _0x230f0a.getHours(),
        "m+": _0x230f0a.getMinutes(),
        "s+": _0x230f0a.getSeconds(),
        "q+": Math.floor((_0x230f0a.getMonth() + 3) / 3),
        "S": _0x230f0a.getMilliseconds()
      };
      /(y+)/.test(_0x2b2f73) && (_0x2b2f73 = _0x2b2f73.replace(RegExp.$1, (_0x230f0a.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x42a721 in _0x5cc2b1) new RegExp("(" + _0x42a721 + ")").test(_0x2b2f73) && (_0x2b2f73 = _0x2b2f73.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x5cc2b1[_0x42a721] : ("00" + _0x5cc2b1[_0x42a721]).substr(("" + _0x5cc2b1[_0x42a721]).length)));
      return _0x2b2f73;
    }
    ["msg"](_0x280b53 = _0x368ac0, _0x27e101 = "", _0xded962 = "", _0x36661c) {
      const _0x108b11 = _0xdd1222 => {
        if (!_0xdd1222) return _0xdd1222;
        if ("string" == typeof _0xdd1222) return this.isLoon() ? _0xdd1222 : this.isQuanX() ? {
          "open-url": _0xdd1222
        } : this.isSurge() ? {
          "url": _0xdd1222
        } : void 0;
        if ("object" == typeof _0xdd1222) {
          if (this.isLoon()) {
            let _0x470f95 = _0xdd1222.openUrl || _0xdd1222.url || _0xdd1222["open-url"],
              _0x3c1b74 = _0xdd1222.mediaUrl || _0xdd1222["media-url"];
            return {
              "openUrl": _0x470f95,
              "mediaUrl": _0x3c1b74
            };
          }
          if (this.isQuanX()) {
            let _0x4648f3 = _0xdd1222["open-url"] || _0xdd1222.url || _0xdd1222.openUrl,
              _0x246f32 = _0xdd1222["media-url"] || _0xdd1222.mediaUrl;
            return {
              "open-url": _0x4648f3,
              "media-url": _0x246f32
            };
          }
          if (this.isSurge()) {
            let _0x3d75ed = _0xdd1222.url || _0xdd1222.openUrl || _0xdd1222["open-url"];
            return {
              "url": _0x3d75ed
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x280b53, _0x27e101, _0xded962, _0x108b11(_0x36661c)) : this.isQuanX() && $notify(_0x280b53, _0x27e101, _0xded962, _0x108b11(_0x36661c))), !this.isMuteLog) {
        let _0x4f3a44 = ["", "==============📣系统通知📣=============="];
        _0x4f3a44.push(_0x280b53);
        _0x27e101 && _0x4f3a44.push(_0x27e101);
        _0xded962 && _0x4f3a44.push(_0xded962);
        console.log(_0x4f3a44.join("\n"));
        this.logs = this.logs.concat(_0x4f3a44);
      }
    }
    ["log"](..._0x30e0c5) {
      _0x30e0c5.length > 0 && (this.logs = [...this.logs, ..._0x30e0c5]);
      console.log(_0x30e0c5.join(this.logSeparator));
    }
    ["logErr"](_0xbc3f3f, _0x3031d7) {
      const _0x1e657b = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      _0x1e657b ? this.log("", "❗️" + this.name + ", 错误!", _0xbc3f3f.stack) : this.log("", "❗️" + this.name + ", 错误!", _0xbc3f3f);
    }
    ["wait"](_0x291543) {
      return new Promise(_0x1465fb => setTimeout(_0x1465fb, _0x291543));
    }
    ["done"](_0x52d8b7 = {}) {
      const _0x5e4d6b = new Date().getTime(),
        _0x287ddd = (_0x5e4d6b - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束! 🕛 " + _0x287ddd + " 秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0x52d8b7);
    }
  }(_0x368ac0, _0x3f18dd);
}