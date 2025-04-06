//Sun Apr 06 2025 04:33:59 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const lIIlll = new l1li1("续赚抢单"),
  i11li1 = 1,
  iIlI1 = 0;
let IiIlII = "";
const iI11i = require("crypto-js"),
  I1Iili = require("ws"),
  ilIIII = "ws://219.153.110.127:9126/websocket";
let I1li,
  iIllIi = false;
const iI11l = "kele";
let IlIiiI = 0;
const lll1l1 = 1800;
!(async () => {
  index = 0;
  const ll1ill = iilI1i(token);
  if (ll1ill.success) {
    console.log("\n验证成功:");
    console.log("用户ID:", ll1ill.userId);
    console.log("剩余时间:", ll1ill.remainingTimeFormatted);
  } else {
    console.log("\n验证失败:", ll1ill.message);
    ll1ill.expiredAt && (console.log("过期时间:", ll1ill.expiredAt), process.exit(0));
    if (ll1ill.remainingTimeFormatted) {
      console.log("状态:", ll1ill.remainingTimeFormatted);
      process.exit(0);
    }
    process.exit(0);
  }
  await llili1();
})().catch(i1IIII => lIIlll.logErr(i1IIII)).finally(() => lIIlll.done());
async function llili1() {
  await IiIlI1();
  await iI11I();
  await iilI1l();
  I1li = await iIllIl();
}
async function iIllIl() {
  return new Promise(il1lil => {
    const iiliii = new I1Iili(ilIIII);
    let I1iii = false;
    iiliii.on("open", () => {
      console.log("连接服务器成功");
      IlIiiI = 0;
      const il1lii = Math.round(new Date().getTime() / 1000).toString(),
        illi1i = "{\"Id\":" + il1lii + "000,\"Parameter\":{\"deviceNo\":\"" + deviceNo + "\",\"memberId\":" + urid + "},\"RequestOrResponse\":0,\"MethodName\":\"QueryOrder\"}",
        lll1ll = ll1iii(illi1i);
      iiliii.send(lll1ll);
      il1lil(iiliii);
    });
    iiliii.on("message", async illi1l => {
      try {
        if (lli1I(illi1l)) {
          const l1llI = I1Iill(illi1l);
          id = JSON.parse(l1llI)[0].Id;
          !I1iii && (I1iii = true, await I1IilI(), I1iii = false);
        }
      } catch (llilii) {
        console.error("处理消息错误:", llilii);
      }
    });
    iiliii.on("close", () => {
      !iIllIi && (console.log("ws连接意外关闭，尝试重新连接..."), setTimeout(() => I1ll(), 5000));
    });
    iiliii.on("error", l1liIi => {
      console.error("WebSocket错误:", l1liIi);
      !iIllIi && setTimeout(() => I1ll(), 5000);
    });
  });
}
async function I1ll() {
  try {
    iIllIi = true;
    if (I1li) {
      I1li.removeAllListeners();
      I1li.readyState === I1Iili.OPEN && I1li.close();
    }
    console.log("正在重新连接WebSocket...");
    I1li = await iIllIl();
    iIllIi = false;
  } catch (il1lll) {
    console.error("重新连接失败:", il1lll);
    await lIIlll.wait(10000);
    await I1ll();
  }
}
function ll1iii(li1lI1) {
  var ll1I11 = iI11i.enc.Utf8.parse(pu),
    l1lli = iI11i.enc.Utf8.parse(li1lI1),
    il1lli = iI11i.DES.encrypt(l1lli, ll1I11, {
      "mode": iI11i.mode.ECB,
      "padding": iI11i.pad.Pkcs7
    });
  return iI11i.enc.Hex.stringify(iI11i.enc.Base64.parse(il1lli.toString()));
}
function ll1iil(IIi1Il) {
  if (IIi1Il <= 0) return "已过期";
  const IIi1Ii = Math.floor(IIi1Il / (3600 * 24)),
    li1lII = Math.floor(IIi1Il % (3600 * 24) / 3600),
    Il11II = Math.floor(IIi1Il % 3600 / 60),
    Iilll = IIi1Il % 60;
  let I11Ill = [];
  if (IIi1Ii > 0) I11Ill.push(IIi1Ii + "天");
  if (li1lII > 0) I11Ill.push(li1lII + "小时");
  if (Il11II > 0) I11Ill.push(Il11II + "分");
  if (Iilll > 0 || I11Ill.length === 0) I11Ill.push(Iilll + "秒");
  return I11Ill.join("");
}
function lIIlli(IillI) {
  var i1Il1i = iI11i.enc.Utf8.parse(ti),
    lIiil1 = iI11i.enc.Utf8.parse(IillI),
    i1Il1l = iI11i.DES.encrypt(lIiil1, i1Il1i, {
      "mode": iI11i.mode.ECB,
      "padding": iI11i.pad.Pkcs7
    });
  return iI11i.enc.Hex.stringify(iI11i.enc.Base64.parse(i1Il1l.toString()));
}
function I1Iill(I11IlI) {
  var IiIIlI = iI11i.enc.Utf8.parse(pu),
    IIi1I1 = iI11i.enc.Base64.stringify(iI11i.enc.Hex.parse(I11IlI)),
    lIiilI = iI11i.DES.decrypt(IIi1I1, IiIIlI, {
      "mode": iI11i.mode.ECB,
      "padding": iI11i.pad.Pkcs7
    });
  return lIiilI.toString(iI11i.enc.Utf8);
}
function iilI1i(i111II) {
  try {
    const iiiii1 = iI11i.AES.decrypt(i111II, iI11l),
      IIill1 = iiiii1.toString(iI11i.enc.Utf8);
    if (!IIill1) {
      return {
        "success": false,
        "message": "无效的Token"
      };
    }
    const iIII = JSON.parse(IIill1);
    if (!iIII.userId || !iIII.expire) {
      return {
        "success": false,
        "message": "Token格式错误"
      };
    }
    const iI1I1 = Math.floor(Date.now() / 1000),
      Ii11iI = iIII.expire - iI1I1;
    if (Ii11iI <= 0) {
      return {
        "success": false,
        "message": "Token已过期",
        "expiredAt": new Date(iIII.expire * 1000).toISOString(),
        "remainingTimeFormatted": "已过期"
      };
    }
    return {
      "success": true,
      "userId": iIII.userId,
      "remainingTime": Ii11iI,
      "remainingTimeFormatted": ll1iil(Ii11iI),
      "expireAt": new Date(iIII.expire * 1000).toISOString(),
      "issuedAt": new Date(iIII.timestamp * 1000).toISOString()
    };
  } catch (l1IIII) {
    return {
      "success": false,
      "message": "Token解析失败: " + l1IIII.message
    };
  }
}
async function IiIlI1() {
  let l1Ili = {
      "url": "https://gitee.com/kele2233/genxin/raw/master/xzw.json",
      "headers": {
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.43(0x18002b2d) NetType/WIFI Language/zh_CN"
      }
    },
    i1II11 = await iIil1i(l1Ili, "ll");
  if (i1II11.kg == 2) {
    pu = i1II11.pu;
    ti = i1II11.ti;
  } else console.log("不在活动时间，停止运行"), process.exit();
}
async function iilI1l() {
  const l1Il11 = "{\"account\":\"" + account + "\",\"pwd\":\"" + pwd + "\",\"domain\":\"http://www.xuzuan.cn/#/login\"}",
    IIl1lI = ll1iii(l1Il11);
  let ilii1i = {
      "url": "http://api.shangmeng.top/api/MemeberLogIn/XzwAccountPasswordLogIn",
      "headers": {
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1",
        "Accept": "application/json, text/plain, */*",
        "Accept-Encoding": "gzip, deflate",
        "Content-Type": "application/json",
        "devicenumber": deviceNo,
        "DNT": "1",
        "devicetype": "H5",
        "Origin": "http://www.xuzuan.cn",
        "Referer": "http://www.xuzuan.cn/",
        "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6"
      },
      "body": IIl1lI
    },
    IiliIl = await IiI11i(ilii1i, "获取code"),
    ilii1l = I1Iill(IiliIl);
  urid = JSON.parse(ilii1l).data.Id;
}
async function iI11I() {
  const ilili = "e96fbde632ef0d6d";
  let iII1iI = {
      "url": "http://api.shangmeng.top/api/MemeberRegistered/GetNewDeviceInfo",
      "headers": {
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1",
        "Accept": "application/json, text/plain, */*",
        "Accept-Encoding": "gzip, deflate",
        "Content-Type": "application/json"
      },
      "body": ilili
    },
    II1ili = await IiI11i(iII1iI, "获取登录设备参数");
  const ilill = I1Iill(II1ili);
  deviceNo = JSON.parse(ilill).data.devicenumber;
}
async function I1IilI() {
  const IIilii = "{\"id\":" + id + ",\"domainName\":\"http://www.xuzuan.cn/#/market/receiveOrder\",\"memberId\":" + urid + "}",
    iiiiiI = lIIlli(IIilii);
  let IiIl1i = {
      "url": "http://api.shangmeng.top/api/MarketOrder/ReceivingOrder",
      "headers": {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0",
        "Accept": "application/json, text/plain, */*",
        "Accept-Encoding": "gzip, deflate",
        "Content-Type": "application/json",
        "DNT": "1",
        "Authentication": "",
        "devicetype": "H5",
        "Origin": "http://www.xuzuan.cn",
        "Referer": "http://www.xuzuan.cn/",
        "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
        "devicenumber": deviceNo
      },
      "body": iiiiiI
    },
    IIl1li = await IiI11i(IiIl1i, "抢单"),
    l11i = I1Iill(IIl1li);
  if (JSON.parse(l11i).code == 200) {
    console.log("抢到了，快去充值吧" + JSON.parse(l11i).data.accounts);
    IiIlII = "抢到了，快去充值吧";
    await Il1il(IiIlII);
    zmsg == "true" && (await Il1il(IiIlII), await Il1il(IiIlII));
    console.log("暂停30秒后重新开始...");
    await lIIlll.wait(30000);
    await I1ll();
  } else {
    console.log(JSON.parse(l11i).msg);
    if (Retry == "true") {
      randomNumber = Math.floor(Math.random() * 5) + 1;
      for (let iiiili = 0; iiiili < randomNumber; iiiili++) {
        const iiiil1 = Math.floor(Math.random() * maxnum) + minnum;
        await lIIlll.wait(iiiil1);
        console.log("重试第" + (iiiili + 1) + "次");
        await iIllII();
      }
    }
  }
}
async function iIllII() {
  const IIl1l1 = "{\"id\": " + id + ",\"domainName\": \"http://www.xuzuan.cn/#/market/receiveOrder\",\"memberId\": " + urid + "}",
    Il111l = lIIlli(IIl1l1);
  let il1I = {
      "url": "http://api.shangmeng.top/api/MarketOrder/ReceivingOrder",
      "headers": {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0",
        "Accept": "application/json, text/plain, */*",
        "Accept-Encoding": "gzip, deflate",
        "Content-Type": "application/json",
        "DNT": "1",
        "Authentication": "",
        "devicetype": "H5",
        "Origin": "http://www.xuzuan.cn",
        "Referer": "http://www.xuzuan.cn/",
        "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
        "devicenumber": deviceNo
      },
      "body": Il111l
    },
    IIili1 = await IiI11i(il1I, "抢单"),
    Ii11li = I1Iill(IIili1);
  if (JSON.parse(Ii11li).code == 200) {
    console.log("抢到了，快去充值吧" + JSON.parse(Ii11li).data.accounts);
    IiIlII = "抢到了，快去充值吧";
    await Il1il(IiIlII);
    zmsg == "true" && (await Il1il(IiIlII), await Il1il(IiIlII));
    console.log("暂停30秒后重新开始...");
    await lIIlll.wait(30000);
    await I1ll();
  } else {
    console.log(JSON.parse(Ii11li).msg);
    const lIiil = JSON.parse(Ii11li);
    if (lIiil.msg == "请不要点这么快呀") {
      console.log("检测到提示，暂停 1 分钟...");
      i = randomNumber;
      await lIIlll.wait(60000);
    }
  }
}
function lli1I(iiiill) {
  if (typeof iiiill !== "string") throw new Error("服务器未正确返回数据，查看ws依赖是否是ws@7.4.3");
  if (iiiill.length > 96) return IlIiiI = 0, true;else {
    IlIiiI++;
    if (IlIiiI >= lll1l1) {
      IlIiiI = 0;
      console.log("长时间未有订单返回，即将重启WebSocket连接");
      setTimeout(() => {
        I1ll().catch(i1li1l => {
          console.error("WebSocket重启失败:", i1li1l);
        });
      }, 0);
    }
    return false;
  }
}
async function IlIilI(lIli, ilii1I) {
  return new Promise(iIIii => {
    let Ii1l1 = [];
    if (lIli) {
      if (lIli.indexOf("@") !== -1) lIli.split("@").forEach(iIll11 => {
        Ii1l1.push(iIll11);
      });else lIli.indexOf("\n") !== -1 ? lIli.split("\n").forEach(iIIil => {
        Ii1l1.push(iIIil);
      }) : Ii1l1.push(lIli);
      iIIii(Ii1l1);
    } else console.log("\n 【" + lIIlll.name + "】：未填写变量 " + ilii1I);
  });
}
async function Il1il(l11Il) {
  if (!l11Il) return;
  if (i11li1 > 0) {
    if (lIIlll.isNode()) {
      let iIIiI = require("./sendNotify");
      await iIIiI.sendNotify(lIIlll.name, l11Il);
    } else lIIlll.msg(l11Il);
  } else console.log(l11Il);
}
function lll1il(Il1Ill) {
  Il1Ill = Il1Ill || 32;
  let Il1Ili = "QWERTYUIOPASDFGHJKLZXCVBNM1234567890",
    Ii1ii = Il1Ili.length,
    lli1II = "";
  for (i = 0; i < Il1Ill; i++) lli1II += Il1Ili.charAt(Math.floor(Math.random() * Ii1ii));
  return lli1II;
}
function lll1ii(iiIll1, lll1I) {
  return Math.round(Math.random() * (lll1I - iiIll1) + iiIll1);
}
function lIIllI() {
  const iiIiI = new Date(),
    lIIlI1 = iiIiI.getHours(),
    ilill1 = new Date(iiIiI.getFullYear(), iiIiI.getMonth(), iiIiI.getDate(), lIIlI1 + 1, 0, 0, 0);
  return ilill1.getTime();
}
function IIllli() {
  return Math.round(new Date().getTime()).toString();
}
function lIIll1() {
  return Math.round(new Date().getTime() / 1000).toString();
}
function Il1ii() {
  let il1iil = new Date();
  return h = il1iil.getHours(), h;
}
function IiI11l() {
  let iiIi1 = new Date();
  return m = iiIi1.getMinutes(), m;
}
function iI1i1I(il1iii = 3 * 1000) {
  return new Promise(I1IiI1 => {
    let IlIl1i = {
      "url": "https://keai.icu/apiwyy/api"
    };
    lIIlll.get(IlIl1i, async (IIIi11, I1I, liIi1I) => {
      try {
        liIi1I = JSON.parse(liIi1I);
        console.log("\n 【网抑云时间】: " + liIi1I.content + "  by--" + liIi1I.music);
      } catch (lI1i1) {
        lIIlll.logErr(lI1i1, I1I);
      } finally {
        I1IiI1();
      }
    }, il1iii);
  });
}
async function iIil1i(lII11i, I1li1, Il11i1 = 3 * 1000) {
  return new Promise(I1liI => {
    let I1lii = lII11i;
    if (!I1li1) {
      let IiIlil = arguments.callee.toString(),
        I1lil = /function\s*(\w*)/i,
        IiIlii = I1lil.exec(IiIlil);
      I1li1 = IiIlii[1];
    }
    iIlI1 && (console.log("\n 【debug】=============== 这是 " + I1li1 + " 请求 url ==============="), console.log(I1lii));
    lIIlll.get(I1lii, async (liIi1i, IlIIII, lii1iI) => {
      try {
        iIlI1 && (console.log("\n\n 【debug】===============这是 " + I1li1 + " 返回data=============="), console.log(lii1iI), console.log("======"), console.log(JSON.parse(lii1iI)));
        let ll1iII = JSON.parse(lii1iI);
        I1liI(ll1iII);
      } catch (lli11l) {
        console.log("\n " + I1li1 + " 失败了!请稍后尝试!!");
        IiIlII += "\n " + I1li1 + " 失败了!请稍后尝试!!";
      } finally {
        I1liI();
      }
    }, Il11i1);
  });
}
async function IiI11i(IiIliI, IlIl11, lI1lI = 3 * 1000) {
  return new Promise(ii1lI1 => {
    let ii11i = IiIliI;
    if (!IlIl11) {
      let lIIlIl = arguments.callee.toString(),
        lIIlIi = /function\s*(\w*)/i,
        ililli = lIIlIi.exec(lIIlIl);
      IlIl11 = ililli[1];
    }
    iIlI1 && (console.log("\n 【debug】=============== 这是 " + IlIl11 + " 请求 url ==============="), console.log(ii11i));
    lIIlll.post(ii11i, async (ii11l, iIIiIi, ililll) => {
      try {
        iIlI1 && (console.log("\n\n 【debug】===============这是 " + IlIl11 + " 返回data=============="), console.log(ililll), console.log("======"));
        let il1Ii = ililll;
        ii1lI1(il1Ii);
      } catch (iIIiIl) {
        console.log("\n " + IlIl11 + " 失败了!请稍后尝试!!");
      } finally {
        ii1lI1();
      }
    }, lI1lI);
  });
}
function iIil1l(...IiIli1) {
  if (iIlI1) {
    console.log(...IiIli1);
  }
}
function iIil11(lI1li) {
  function lli111(l1l1, I1l1iI) {
    return l1l1 << I1l1iI | l1l1 >>> 32 - I1l1iI;
  }
  function lI1ll(iIilll, I11ili) {
    var Ii1i1i, iIilli, lI11i1, Ii1i1l, iI1li;
    return lI11i1 = 2147483648 & iIilll, Ii1i1l = 2147483648 & I11ili, Ii1i1i = 1073741824 & iIilll, iIilli = 1073741824 & I11ili, iI1li = (1073741823 & iIilll) + (1073741823 & I11ili), Ii1i1i & iIilli ? 2147483648 ^ iI1li ^ lI11i1 ^ Ii1i1l : Ii1i1i | iIilli ? 1073741824 & iI1li ? 3221225472 ^ iI1li ^ lI11i1 ^ Ii1i1l : 1073741824 ^ iI1li ^ lI11i1 ^ Ii1i1l : iI1li ^ lI11i1 ^ Ii1i1l;
  }
  function I1IiIl(ii11Il, ii11Ii, iiII1l) {
    return ii11Il & ii11Ii | ~ii11Il & iiII1l;
  }
  function I1IiIi(iiII1i, lll11l, iI1ill) {
    return iiII1i & iI1ill | lll11l & ~iI1ill;
  }
  function ii11I(i1iili, Illiii, iI1ll) {
    return i1iili ^ Illiii ^ iI1ll;
  }
  function lIIlII(i1iill, ill1, lI11iI) {
    return ill1 ^ (i1iill | ~lI11iI);
  }
  function ii1lIl(iI1ili, I1Ill, I1illi, I1illl, Ii1i1I, iIillI, iI1lI) {
    return iI1ili = lI1ll(iI1ili, lI1ll(lI1ll(I1IiIl(I1Ill, I1illi, I1illl), Ii1i1I), iI1lI)), lI1ll(lli111(iI1ili, iIillI), I1Ill);
  }
  function il1II(I1illI, IiiII1, lIli1, I1ill1, lIIl1l, Ii1i11, lIIl1i) {
    return I1illI = lI1ll(I1illI, lI1ll(lI1ll(I1IiIi(IiiII1, lIli1, I1ill1), lIIl1l), lIIl1i)), lI1ll(lli111(I1illI, Ii1i11), IiiII1);
  }
  function ii1lIi(iIill1, Illili, il1III, II1111, lliIII, illi, illl) {
    return iIill1 = lI1ll(iIill1, lI1ll(lI1ll(ii11I(Illili, il1III, II1111), lliIII), illl)), lI1ll(lli111(iIill1, illi), Illili);
  }
  function I1lll(lll11I, iI1il1, il1II1, II111I, IIii1, I11iii, iI1l1) {
    return lll11I = lI1ll(lll11I, lI1ll(lI1ll(lIIlII(iI1il1, il1II1, II111I), IIii1), iI1l1)), lI1ll(lli111(lll11I, I11iii), iI1il1);
  }
  function I1lli(I11iil) {
    for (var iIilii, iIl1li = I11iil.length, iIilil = iIl1li + 8, iIl1ll = (iIilil - iIilil % 64) / 64, lliII1 = 16 * (iIl1ll + 1), IiiIII = new Array(lliII1 - 1), lIIl1I = 0, IllilI = 0; iIl1li > IllilI;) iIilii = (IllilI - IllilI % 4) / 4, lIIl1I = IllilI % 4 * 8, IiiIII[iIilii] = IiiIII[iIilii] | I11iil.charCodeAt(IllilI) << lIIl1I, IllilI++;
    return iIilii = (IllilI - IllilI % 4) / 4, lIIl1I = IllilI % 4 * 8, IiiIII[iIilii] = IiiIII[iIilii] | 128 << lIIl1I, IiiIII[lliII1 - 2] = iIl1li << 3, IiiIII[lliII1 - 1] = iIl1li >>> 29, IiiIII;
  }
  function lii1lI(Illil1) {
    var Iil11I,
      iI1ii,
      I11il1 = "",
      lIliI = "";
    for (iI1ii = 0; 3 >= iI1ii; iI1ii++) Iil11I = Illil1 >>> 8 * iI1ii & 255, lIliI = "0" + Iil11I.toString(16), I11il1 += lIliI.substr(lIliI.length - 2, 2);
    return I11il1;
  }
  function l1Ii11(I1l1ll) {
    I1l1ll = I1l1ll.replace(/\r\n/g, "\n");
    for (var iI1ilI = "", I1l1li = 0; I1l1li < I1l1ll.length; I1l1li++) {
      var iI1il = I1l1ll.charCodeAt(I1l1li);
      128 > iI1il ? iI1ilI += String.fromCharCode(iI1il) : iI1il > 127 && 2048 > iI1il ? (iI1ilI += String.fromCharCode(iI1il >> 6 | 192), iI1ilI += String.fromCharCode(63 & iI1il | 128)) : (iI1ilI += String.fromCharCode(iI1il >> 12 | 224), iI1ilI += String.fromCharCode(iI1il >> 6 & 63 | 128), iI1ilI += String.fromCharCode(63 & iI1il | 128));
    }
    return iI1ilI;
  }
  var lliIi1,
    lIIIli,
    iI1II1,
    ii111,
    Iiiiil,
    Iiiiii,
    il1I1,
    lIIIll,
    i11I,
    iI1III = [],
    I11II1 = 7,
    l1II = 12,
    i1iIII = 17,
    i1l111 = 22,
    l1Ii1I = 5,
    lii1li = 9,
    lii1ll = 14,
    lIIIlI = 20,
    Iiiil1 = 4,
    iI1IIi = 11,
    lIIIl1 = 16,
    iI1IIl = 23,
    i1l11I = 6,
    IiiilI = 10,
    i111 = 15,
    i1iIIi = 21;
  for (lI1li = l1Ii11(lI1li), iI1III = I1lli(lI1li), Iiiiii = 1732584193, il1I1 = 4023233417, lIIIll = 2562383102, i11I = 271733878, lliIi1 = 0; lliIi1 < iI1III.length; lliIi1 += 16) lIIIli = Iiiiii, iI1II1 = il1I1, ii111 = lIIIll, Iiiiil = i11I, Iiiiii = ii1lIl(Iiiiii, il1I1, lIIIll, i11I, iI1III[lliIi1 + 0], I11II1, 3614090360), i11I = ii1lIl(i11I, Iiiiii, il1I1, lIIIll, iI1III[lliIi1 + 1], l1II, 3905402710), lIIIll = ii1lIl(lIIIll, i11I, Iiiiii, il1I1, iI1III[lliIi1 + 2], i1iIII, 606105819), il1I1 = ii1lIl(il1I1, lIIIll, i11I, Iiiiii, iI1III[lliIi1 + 3], i1l111, 3250441966), Iiiiii = ii1lIl(Iiiiii, il1I1, lIIIll, i11I, iI1III[lliIi1 + 4], I11II1, 4118548399), i11I = ii1lIl(i11I, Iiiiii, il1I1, lIIIll, iI1III[lliIi1 + 5], l1II, 1200080426), lIIIll = ii1lIl(lIIIll, i11I, Iiiiii, il1I1, iI1III[lliIi1 + 6], i1iIII, 2821735955), il1I1 = ii1lIl(il1I1, lIIIll, i11I, Iiiiii, iI1III[lliIi1 + 7], i1l111, 4249261313), Iiiiii = ii1lIl(Iiiiii, il1I1, lIIIll, i11I, iI1III[lliIi1 + 8], I11II1, 1770035416), i11I = ii1lIl(i11I, Iiiiii, il1I1, lIIIll, iI1III[lliIi1 + 9], l1II, 2336552879), lIIIll = ii1lIl(lIIIll, i11I, Iiiiii, il1I1, iI1III[lliIi1 + 10], i1iIII, 4294925233), il1I1 = ii1lIl(il1I1, lIIIll, i11I, Iiiiii, iI1III[lliIi1 + 11], i1l111, 2304563134), Iiiiii = ii1lIl(Iiiiii, il1I1, lIIIll, i11I, iI1III[lliIi1 + 12], I11II1, 1804603682), i11I = ii1lIl(i11I, Iiiiii, il1I1, lIIIll, iI1III[lliIi1 + 13], l1II, 4254626195), lIIIll = ii1lIl(lIIIll, i11I, Iiiiii, il1I1, iI1III[lliIi1 + 14], i1iIII, 2792965006), il1I1 = ii1lIl(il1I1, lIIIll, i11I, Iiiiii, iI1III[lliIi1 + 15], i1l111, 1236535329), Iiiiii = il1II(Iiiiii, il1I1, lIIIll, i11I, iI1III[lliIi1 + 1], l1Ii1I, 4129170786), i11I = il1II(i11I, Iiiiii, il1I1, lIIIll, iI1III[lliIi1 + 6], lii1li, 3225465664), lIIIll = il1II(lIIIll, i11I, Iiiiii, il1I1, iI1III[lliIi1 + 11], lii1ll, 643717713), il1I1 = il1II(il1I1, lIIIll, i11I, Iiiiii, iI1III[lliIi1 + 0], lIIIlI, 3921069994), Iiiiii = il1II(Iiiiii, il1I1, lIIIll, i11I, iI1III[lliIi1 + 5], l1Ii1I, 3593408605), i11I = il1II(i11I, Iiiiii, il1I1, lIIIll, iI1III[lliIi1 + 10], lii1li, 38016083), lIIIll = il1II(lIIIll, i11I, Iiiiii, il1I1, iI1III[lliIi1 + 15], lii1ll, 3634488961), il1I1 = il1II(il1I1, lIIIll, i11I, Iiiiii, iI1III[lliIi1 + 4], lIIIlI, 3889429448), Iiiiii = il1II(Iiiiii, il1I1, lIIIll, i11I, iI1III[lliIi1 + 9], l1Ii1I, 568446438), i11I = il1II(i11I, Iiiiii, il1I1, lIIIll, iI1III[lliIi1 + 14], lii1li, 3275163606), lIIIll = il1II(lIIIll, i11I, Iiiiii, il1I1, iI1III[lliIi1 + 3], lii1ll, 4107603335), il1I1 = il1II(il1I1, lIIIll, i11I, Iiiiii, iI1III[lliIi1 + 8], lIIIlI, 1163531501), Iiiiii = il1II(Iiiiii, il1I1, lIIIll, i11I, iI1III[lliIi1 + 13], l1Ii1I, 2850285829), i11I = il1II(i11I, Iiiiii, il1I1, lIIIll, iI1III[lliIi1 + 2], lii1li, 4243563512), lIIIll = il1II(lIIIll, i11I, Iiiiii, il1I1, iI1III[lliIi1 + 7], lii1ll, 1735328473), il1I1 = il1II(il1I1, lIIIll, i11I, Iiiiii, iI1III[lliIi1 + 12], lIIIlI, 2368359562), Iiiiii = ii1lIi(Iiiiii, il1I1, lIIIll, i11I, iI1III[lliIi1 + 5], Iiiil1, 4294588738), i11I = ii1lIi(i11I, Iiiiii, il1I1, lIIIll, iI1III[lliIi1 + 8], iI1IIi, 2272392833), lIIIll = ii1lIi(lIIIll, i11I, Iiiiii, il1I1, iI1III[lliIi1 + 11], lIIIl1, 1839030562), il1I1 = ii1lIi(il1I1, lIIIll, i11I, Iiiiii, iI1III[lliIi1 + 14], iI1IIl, 4259657740), Iiiiii = ii1lIi(Iiiiii, il1I1, lIIIll, i11I, iI1III[lliIi1 + 1], Iiiil1, 2763975236), i11I = ii1lIi(i11I, Iiiiii, il1I1, lIIIll, iI1III[lliIi1 + 4], iI1IIi, 1272893353), lIIIll = ii1lIi(lIIIll, i11I, Iiiiii, il1I1, iI1III[lliIi1 + 7], lIIIl1, 4139469664), il1I1 = ii1lIi(il1I1, lIIIll, i11I, Iiiiii, iI1III[lliIi1 + 10], iI1IIl, 3200236656), Iiiiii = ii1lIi(Iiiiii, il1I1, lIIIll, i11I, iI1III[lliIi1 + 13], Iiiil1, 681279174), i11I = ii1lIi(i11I, Iiiiii, il1I1, lIIIll, iI1III[lliIi1 + 0], iI1IIi, 3936430074), lIIIll = ii1lIi(lIIIll, i11I, Iiiiii, il1I1, iI1III[lliIi1 + 3], lIIIl1, 3572445317), il1I1 = ii1lIi(il1I1, lIIIll, i11I, Iiiiii, iI1III[lliIi1 + 6], iI1IIl, 76029189), Iiiiii = ii1lIi(Iiiiii, il1I1, lIIIll, i11I, iI1III[lliIi1 + 9], Iiiil1, 3654602809), i11I = ii1lIi(i11I, Iiiiii, il1I1, lIIIll, iI1III[lliIi1 + 12], iI1IIi, 3873151461), lIIIll = ii1lIi(lIIIll, i11I, Iiiiii, il1I1, iI1III[lliIi1 + 15], lIIIl1, 530742520), il1I1 = ii1lIi(il1I1, lIIIll, i11I, Iiiiii, iI1III[lliIi1 + 2], iI1IIl, 3299628645), Iiiiii = I1lll(Iiiiii, il1I1, lIIIll, i11I, iI1III[lliIi1 + 0], i1l11I, 4096336452), i11I = I1lll(i11I, Iiiiii, il1I1, lIIIll, iI1III[lliIi1 + 7], IiiilI, 1126891415), lIIIll = I1lll(lIIIll, i11I, Iiiiii, il1I1, iI1III[lliIi1 + 14], i111, 2878612391), il1I1 = I1lll(il1I1, lIIIll, i11I, Iiiiii, iI1III[lliIi1 + 5], i1iIIi, 4237533241), Iiiiii = I1lll(Iiiiii, il1I1, lIIIll, i11I, iI1III[lliIi1 + 12], i1l11I, 1700485571), i11I = I1lll(i11I, Iiiiii, il1I1, lIIIll, iI1III[lliIi1 + 3], IiiilI, 2399980690), lIIIll = I1lll(lIIIll, i11I, Iiiiii, il1I1, iI1III[lliIi1 + 10], i111, 4293915773), il1I1 = I1lll(il1I1, lIIIll, i11I, Iiiiii, iI1III[lliIi1 + 1], i1iIIi, 2240044497), Iiiiii = I1lll(Iiiiii, il1I1, lIIIll, i11I, iI1III[lliIi1 + 8], i1l11I, 1873313359), i11I = I1lll(i11I, Iiiiii, il1I1, lIIIll, iI1III[lliIi1 + 15], IiiilI, 4264355552), lIIIll = I1lll(lIIIll, i11I, Iiiiii, il1I1, iI1III[lliIi1 + 6], i111, 2734768916), il1I1 = I1lll(il1I1, lIIIll, i11I, Iiiiii, iI1III[lliIi1 + 13], i1iIIi, 1309151649), Iiiiii = I1lll(Iiiiii, il1I1, lIIIll, i11I, iI1III[lliIi1 + 4], i1l11I, 4149444226), i11I = I1lll(i11I, Iiiiii, il1I1, lIIIll, iI1III[lliIi1 + 11], IiiilI, 3174756917), lIIIll = I1lll(lIIIll, i11I, Iiiiii, il1I1, iI1III[lliIi1 + 2], i111, 718787259), il1I1 = I1lll(il1I1, lIIIll, i11I, Iiiiii, iI1III[lliIi1 + 9], i1iIIi, 3951481745), Iiiiii = lI1ll(Iiiiii, lIIIli), il1I1 = lI1ll(il1I1, iI1II1), lIIIll = lI1ll(lIIIll, ii111), i11I = lI1ll(i11I, Iiiiil);
  var i1iIIl = lii1lI(Iiiiii) + lii1lI(il1I1) + lii1lI(lIIIll) + lii1lI(i11I);
  return i1iIIl.toLowerCase();
}
function l1li1(lil1Il, lii11l) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class lil1Ii {
    constructor(llll11) {
      this.env = llll11;
    }
    ["send"](illIi, l11IIl = "GET") {
      illIi = "string" == typeof illIi ? {
        "url": illIi
      } : illIi;
      let iil1i = this.get;
      return "POST" === l11IIl && (iil1i = this.post), new Promise((liiIii, iil1l) => {
        iil1i.call(this, illIi, (III1l, ilIiIi, liiIil) => {
          III1l ? iil1l(III1l) : liiIii(ilIiIi);
        });
      });
    }
    ["get"](iIllll) {
      return this.send.call(this.env, iIllll);
    }
    ["post"](III1i) {
      return this.send.call(this.env, III1i, "POST");
    }
  }
  return new class {
    constructor(l11l1I, llI1l1) {
      this.name = l11l1I;
      this.http = new lil1Ii(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, llI1l1);
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
    ["toObj"](i1i11, IiI1li = null) {
      try {
        return JSON.parse(i1i11);
      } catch {
        return IiI1li;
      }
    }
    ["toStr"](il111, llI1ii = null) {
      try {
        return JSON.stringify(il111);
      } catch {
        return llI1ii;
      }
    }
    ["getjson"](lIlIlll1, Ilii1III) {
      let iIililIl = Ilii1III;
      const IiIl11iI = this.getdata(lIlIlll1);
      if (IiIl11iI) try {
        iIililIl = JSON.parse(this.getdata(lIlIlll1));
      } catch {}
      return iIililIl;
    }
    ["setjson"](I1Iilil, I1Iilii) {
      try {
        return this.setdata(JSON.stringify(I1Iilil), I1Iilii);
      } catch {
        return !1;
      }
    }
    ["getScript"](I1IiliI) {
      return new Promise(l1i111i1 => {
        this.get({
          "url": I1IiliI
        }, (l1Ili1ll, iIililII, l1lIIIi) => l1i111i1(l1lIIIi));
      });
    }
    ["runScript"](IiIl11il, i1II111I) {
      return new Promise(i1II111l => {
        let i1II111i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i1II111i = i1II111i ? i1II111i.replace(/\n/g, "").trim() : i1II111i;
        let IIIll111 = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        IIIll111 = IIIll111 ? 1 * IIIll111 : 20;
        IIIll111 = i1II111I && i1II111I.timeout ? i1II111I.timeout : IIIll111;
        const [IiIl11ll, iliIlilI] = i1II111i.split("@"),
          IiIl11li = {
            "url": "http://" + iliIlilI + "/v1/scripting/evaluate",
            "body": {
              "script_text": IiIl11il,
              "mock_type": "cron",
              "timeout": IIIll111
            },
            "headers": {
              "X-Key": IiIl11ll,
              "Accept": "*/*"
            }
          };
        this.post(IiIl11li, (iliIliii, IlIl111, iliIliil) => i1II111l(iliIliil));
      }).catch(IiIiiii1 => this.logErr(IiIiiii1));
    }
    ["loaddata"]() {
      if (!this.isNode()) return {};
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const l1IiIiii = this.path.resolve(this.dataFile),
          l1i111ii = this.path.resolve(process.cwd(), this.dataFile),
          lliI1III = this.fs.existsSync(l1IiIiii),
          l1Ili1l1 = !lliI1III && this.fs.existsSync(l1i111ii);
        if (!lliI1III && !l1Ili1l1) return {};
        {
          const IIIll11I = lliI1III ? l1IiIiii : l1i111ii;
          try {
            return JSON.parse(this.fs.readFileSync(IIIll11I));
          } catch (IiIl11lI) {
            return {};
          }
        }
      }
    }
    ["writedata"]() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const iliIliiI = this.path.resolve(this.dataFile),
          IIII11i1 = this.path.resolve(process.cwd(), this.dataFile),
          l1li1Il1 = this.fs.existsSync(iliIliiI),
          l1IiIil1 = !l1li1Il1 && this.fs.existsSync(IIII11i1),
          IiIiiil1 = JSON.stringify(this.data);
        l1li1Il1 ? this.fs.writeFileSync(iliIliiI, IiIiiil1) : l1IiIil1 ? this.fs.writeFileSync(IIII11i1, IiIiiil1) : this.fs.writeFileSync(iliIliiI, IiIiiil1);
      }
    }
    ["lodash_get"](IlI1i11, IIIll11l, IIIll11i) {
      const IIiIII1 = IIIll11l.replace(/\[(\d+)\]/g, ".$1").split(".");
      let IiIiiilI = IlI1i11;
      for (const l1i111l1 of IIiIII1) if (IiIiiilI = Object(IiIiiilI)[l1i111l1], void 0 === IiIiiilI) return IIIll11i;
      return IiIiiilI;
    }
    ["lodash_set"](l1li1Iii, lilII1i, IIl1l1iI) {
      return Object(l1li1Iii) !== l1li1Iii ? l1li1Iii : (Array.isArray(lilII1i) || (lilII1i = lilII1i.toString().match(/[^.[\]]+/g) || []), lilII1i.slice(0, -1).reduce((l1li1Iil, lilII1l, iliIlii1) => Object(l1li1Iil[lilII1l]) === l1li1Iil[lilII1l] ? l1li1Iil[lilII1l] : l1li1Iil[lilII1l] = Math.abs(lilII1i[iliIlii1 + 1]) >> 0 == +lilII1i[iliIlii1 + 1] ? [] : {}, l1li1Iii)[lilII1i[lilII1i.length - 1]] = IIl1l1iI, l1li1Iii);
    }
    ["getdata"](IIII11iI) {
      let IlIl11i = this.getval(IIII11iI);
      if (/^@/.test(IIII11iI)) {
        const [, IIIl1i1i, I1I1iIIi] = /^@(.*?)\.(.*?)$/.exec(IIII11iI),
          l1i111lI = IIIl1i1i ? this.getval(IIIl1i1i) : "";
        if (l1i111lI) try {
          const IiIiiiil = JSON.parse(l1i111lI);
          IlIl11i = IiIiiiil ? this.lodash_get(IiIiiiil, I1I1iIIi, "") : IlIl11i;
        } catch (IlIl11l) {
          IlIl11i = "";
        }
      }
      return IlIl11i;
    }
    ["setdata"](IiIiiiii, IIIl1i1l) {
      let l1IiIilI = false;
      if (/^@/.test(IIIl1i1l)) {
        const [, I11IIl11, I1I1iIIl] = /^@(.*?)\.(.*?)$/.exec(IIIl1i1l),
          l1Ili1iI = this.getval(I11IIl11),
          I11IIl1I = I11IIl11 ? "null" === l1Ili1iI ? null : l1Ili1iI || "{}" : "{}";
        try {
          const IlI1i1I = JSON.parse(I11IIl1I);
          this.lodash_set(IlI1i1I, I1I1iIIl, IiIiiiii);
          l1IiIilI = this.setval(JSON.stringify(IlI1i1I), I11IIl11);
        } catch (Ilii1IIi) {
          const I1IillI = {};
          this.lodash_set(I1IillI, I1I1iIIl, IiIiiiii);
          l1IiIilI = this.setval(JSON.stringify(I1IillI), I11IIl11);
        }
      } else l1IiIilI = this.setval(IiIiiiii, IIIl1i1l);
      return l1IiIilI;
    }
    ["getval"](Ilii1IIl) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(Ilii1IIl) : this.isQuanX() ? $prefs.valueForKey(Ilii1IIl) : this.isNode() ? (this.data = this.loaddata(), this.data[Ilii1IIl]) : this.data && this.data[Ilii1IIl] || null;
    }
    ["setval"](l1I11ll1, IIl1l1ii) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(l1I11ll1, IIl1l1ii) : this.isQuanX() ? $prefs.setValueForKey(l1I11ll1, IIl1l1ii) : this.isNode() ? (this.data = this.loaddata(), this.data[IIl1l1ii] = l1I11ll1, this.writedata(), !0) : this.data && this.data[IIl1l1ii] || null;
    }
    ["initGotEnv"](iililI1) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      iililI1 && (iililI1.headers = iililI1.headers ? iililI1.headers : {}, void 0 === iililI1.headers.Cookie && void 0 === iililI1.cookieJar && (iililI1.cookieJar = this.ckjar));
    }
    ["get"](IliIIIli, IIiIIIi = () => {}) {
      IliIIIli.headers && (delete IliIIIli.headers["Content-Type"], delete IliIIIli.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (IliIIIli.headers = IliIIIli.headers || {}, Object.assign(IliIIIli.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(IliIIIli, (IliIIIiI, liIi1III, iIllIii) => {
        !IliIIIiI && liIi1III && (liIi1III.body = iIllIii, liIi1III.statusCode = liIi1III.status);
        IIiIIIi(IliIIIiI, liIi1III, iIllIii);
      })) : this.isQuanX() ? (this.isNeedRewrite && (IliIIIli.opts = IliIIIli.opts || {}, Object.assign(IliIIIli.opts, {
        "hints": !1
      })), $task.fetch(IliIIIli).then(illiIII => {
        const {
          statusCode: il1li1iI,
          statusCode: il1iIiil,
          headers: iiiIIiII,
          body: il1iIiii
        } = illiIII;
        IIiIIIi(null, {
          "status": il1li1iI,
          "statusCode": il1iIiil,
          "headers": iiiIIiII,
          "body": il1iIiii
        }, il1iIiii);
      }, IIlillii => IIiIIIi(IIlillii))) : this.isNode() && (this.initGotEnv(IliIIIli), this.got(IliIIIli).on("redirect", (IliIIIi1, liIi1IIl) => {
        try {
          if (IliIIIi1.headers["set-cookie"]) {
            const il1iIill = IliIIIi1.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            il1iIill && this.ckjar.setCookieSync(il1iIill, null);
            liIi1IIl.cookieJar = this.ckjar;
          }
        } catch (I1iiiIl1) {
          this.logErr(I1iiiIl1);
        }
      }).then(iill11lI => {
        const {
          statusCode: lI1iiiil,
          statusCode: l11Il1II,
          headers: IlI1illI,
          body: l11lli1I
        } = iill11lI;
        IIiIIIi(null, {
          "status": lI1iiiil,
          "statusCode": l11Il1II,
          "headers": IlI1illI,
          "body": l11lli1I
        }, l11lli1I);
      }, iIii1ii => {
        const {
          message: IillliII,
          response: lI1iiiii
        } = iIii1ii;
        IIiIIIi(IillliII, lI1iiiii, lI1iiiii && lI1iiiii.body);
      }));
    }
    ["post"](iIii1il, IillliI1 = () => {}) {
      if (iIii1il.body && iIii1il.headers && !iIii1il.headers["Content-Type"] && (iIii1il.headers["Content-Type"] = "application/x-www-form-urlencoded"), iIii1il.headers && delete iIii1il.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (iIii1il.headers = iIii1il.headers || {}, Object.assign(iIii1il.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.post(iIii1il, (l11lli1l, iiliiii1, l11Il1I1) => {
        !l11lli1l && iiliiii1 && (iiliiii1.body = l11Il1I1, iiliiii1.statusCode = iiliiii1.status);
        IillliI1(l11lli1l, iiliiii1, l11Il1I1);
      });else {
        if (this.isQuanX()) iIii1il.method = "POST", this.isNeedRewrite && (iIii1il.opts = iIii1il.opts || {}, Object.assign(iIii1il.opts, {
          "hints": !1
        })), $task.fetch(iIii1il).then(iiliiiiI => {
          const {
            statusCode: I1iiiIiI,
            statusCode: i1111I1i,
            headers: iIi1Ii11,
            body: lI1iiilI
          } = iiliiiiI;
          IillliI1(null, {
            "status": I1iiiIiI,
            "statusCode": i1111I1i,
            "headers": iIi1Ii11,
            "body": lI1iiilI
          }, lI1iiilI);
        }, i1111I1l => IillliI1(i1111I1l));else {
          if (this.isNode()) {
            this.initGotEnv(iIii1il);
            const {
              url: iiliiiii,
              ...IillliIl
            } = iIii1il;
            this.got.post(iiliiiii, IillliIl).then(lI1l11ll => {
              const {
                statusCode: I11il1il,
                statusCode: Ili1i1lI,
                headers: lI1l11li,
                body: I11il1ii
              } = lI1l11ll;
              IillliI1(null, {
                "status": I11il1il,
                "statusCode": Ili1i1lI,
                "headers": lI1l11li,
                "body": I11il1ii
              }, I11il1ii);
            }, IlI1ilil => {
              const {
                message: iill11ll,
                response: iIi1Ii1I
              } = IlI1ilil;
              IillliI1(iill11ll, iIi1Ii1I, iIi1Ii1I && iIi1Ii1I.body);
            });
          }
        }
      }
    }
    ["time"](lI1iiil1, iiliiiil = null) {
      const l11lli11 = iiliiiil ? new Date(iiliiiil) : new Date();
      let IIl11iIl = {
        "M+": l11lli11.getMonth() + 1,
        "d+": l11lli11.getDate(),
        "H+": l11lli11.getHours(),
        "m+": l11lli11.getMinutes(),
        "s+": l11lli11.getSeconds(),
        "q+": Math.floor((l11lli11.getMonth() + 3) / 3),
        "S": l11lli11.getMilliseconds()
      };
      /(y+)/.test(lI1iiil1) && (lI1iiil1 = lI1iiil1.replace(RegExp.$1, (l11lli11.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let I11il1l1 in IIl11iIl) new RegExp("(" + I11il1l1 + ")").test(lI1iiil1) && (lI1iiil1 = lI1iiil1.replace(RegExp.$1, 1 == RegExp.$1.length ? IIl11iIl[I11il1l1] : ("00" + IIl11iIl[I11il1l1]).substr(("" + IIl11iIl[I11il1l1]).length)));
      return lI1iiil1;
    }
    ["msg"](lliI1I1i = lil1Il, lliI1I1l = "", I1iiiIi1 = "", I11i1iiI) {
      const IlI1ill1 = lI1iiill => {
        if (!lI1iiill) return lI1iiill;
        if ("string" == typeof lI1iiill) return this.isLoon() ? lI1iiill : this.isQuanX() ? {
          "open-url": lI1iiill
        } : this.isSurge() ? {
          "url": lI1iiill
        } : void 0;
        if ("object" == typeof lI1iiill) {
          if (this.isLoon()) {
            let i1111I11 = lI1iiill.openUrl || lI1iiill.url || lI1iiill["open-url"],
              iiliiili = lI1iiill.mediaUrl || lI1iiill["media-url"];
            return {
              "openUrl": i1111I11,
              "mediaUrl": iiliiili
            };
          }
          if (this.isQuanX()) {
            let IlliiIil = lI1iiill["open-url"] || lI1iiill.url || lI1iiill.openUrl,
              IlliiIii = lI1iiill["media-url"] || lI1iiill.mediaUrl;
            return {
              "open-url": IlliiIil,
              "media-url": IlliiIii
            };
          }
          if (this.isSurge()) {
            let l1iIiIIl = lI1iiill.url || lI1iiill.openUrl || lI1iiill["open-url"];
            return {
              "url": l1iIiIIl
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(lliI1I1i, lliI1I1l, I1iiiIi1, IlI1ill1(I11i1iiI)) : this.isQuanX() && $notify(lliI1I1i, lliI1I1l, I1iiiIi1, IlI1ill1(I11i1iiI))), !this.isMuteLog) {
        let IlliiIlI = ["", "==============📣系统通知📣=============="];
        IlliiIlI.push(lliI1I1i);
        lliI1I1l && IlliiIlI.push(lliI1I1l);
        I1iiiIi1 && IlliiIlI.push(I1iiiIi1);
        console.log(IlliiIlI.join("\n"));
        this.logs = this.logs.concat(IlliiIlI);
      }
    }
    ["log"](...iIlliI1I) {
      iIlliI1I.length > 0 && (this.logs = [...this.logs, ...iIlliI1I]);
      console.log(iIlliI1I.join(this.logSeparator));
    }
    ["logErr"](I1iiiIli, iIlliI11) {
      const llIl11I1 = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      llIl11I1 ? this.log("", "❗️" + this.name + ", 错误!", I1iiiIli.stack) : this.log("", "❗️" + this.name + ", 错误!", I1iiiIli);
    }
    ["wait"](IlliiIl1) {
      return new Promise(IlliiIli => setTimeout(IlliiIli, IlliiIl1));
    }
    ["done"](I1iiiIlI = {}) {
      const ii1il111 = new Date().getTime();
    }
  }(lil1Il, lii11l);
}