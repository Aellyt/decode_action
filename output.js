//Mon Oct 28 2024 10:43:40 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(() => {
  function b(U) {
    b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (W) {
      return typeof W;
    } : function (W) {
      return W && "function" == typeof Symbol && W.constructor === Symbol && W !== Symbol.prototype ? "symbol" : typeof W;
    };
    return b(U);
  }
  function c(U, V) {
    var X = "undefined" != typeof Symbol && U[Symbol.iterator] || U["@@iterator"];
    if (!X) {
      if (Array.isArray(U) || (X = d(U)) || V && U && "number" == typeof U.length) {
        X && (U = X);
        var Y = 0,
          Z = function () {};
        return {
          s: Z,
          n: function () {
            var a4 = {};
            a4.done = !0;
            return Y >= U.length ? a4 : {
              done: !1,
              value: U[Y++]
            };
          },
          e: function (a4) {
            throw a4;
          },
          f: Z
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var a0,
      a1 = !0,
      a2 = !1;
    return {
      s: function () {
        X = X.call(U);
      },
      n: function () {
        var a6 = X.next();
        a1 = a6.done;
        return a6;
      },
      e: function (a5) {
        a2 = !0;
        a0 = a5;
      },
      f: function () {
        try {
          a1 || null == X.return || X.return();
        } finally {
          if (a2) {
            throw a0;
          }
        }
      }
    };
  }
  function d(U, V) {
    if (U) {
      if ("string" == typeof U) {
        return f(U, V);
      }
      var W = {}.toString.call(U).slice(8, -1);
      "Object" === W && U.constructor && (W = U.constructor.name);
      return "Map" === W || "Set" === W ? Array.from(U) : "Arguments" === W || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(W) ? f(U, V) : void 0;
    }
  }
  function f(U, V) {
    (null == V || V > U.length) && (V = U.length);
    for (var W = 0, X = Array(V); W < V; W++) {
      X[W] = U[W];
    }
    return X;
  }
  function g() {
    'use strict';

    g = function () {
      return W;
    };
    var V,
      W = {},
      X = Object.prototype,
      Y = X.hasOwnProperty,
      Z = Object.defineProperty || function (ar, as, at) {
        ar[as] = at.value;
      },
      a0 = "function" == typeof Symbol ? Symbol : {},
      a1 = a0.iterator || "@@iterator",
      a2 = a0.asyncIterator || "@@asyncIterator",
      a3 = a0.toStringTag || "@@toStringTag";
    function a4(ar, as, at) {
      var au = {
        value: at,
        enumerable: !0,
        configurable: !0,
        writable: !0
      };
      Object.defineProperty(ar, as, au);
      return ar[as];
    }
    try {
      a4({}, "");
    } catch (as) {
      a4 = function (au, av, aw) {
        return au[av] = aw;
      };
    }
    function a5(au, av, aw, ax) {
      var ay = av && av.prototype instanceof ac ? av : ac,
        az = Object.create(ay.prototype),
        aA = new ap(ax || []);
      Z(az, "_invoke", {
        value: al(au, aw, aA)
      });
      return az;
    }
    function a6(au, av, aw) {
      try {
        return {
          type: "normal",
          arg: au.call(av, aw)
        };
      } catch (aB) {
        var ay = {
          type: "throw",
          arg: aB
        };
        return ay;
      }
    }
    W.wrap = a5;
    var a7 = "suspendedStart",
      a8 = "suspendedYield",
      a9 = "executing",
      aa = "completed",
      ab = {};
    function ac() {}
    function ad() {}
    function ae() {}
    var af = {};
    a4(af, a1, function () {
      return this;
    });
    var ag = Object.getPrototypeOf,
      ah = ag && ag(ag(aq([])));
    ah && ah !== X && Y.call(ah, a1) && (af = ah);
    ae.prototype = ac.prototype = Object.create(af);
    var ai = ae.prototype;
    function aj(au) {
      ["next", "throw", "return"].forEach(function (aw) {
        a4(au, aw, function (ay) {
          return this._invoke(aw, ay);
        });
      });
    }
    function ak(au, av) {
      function ay(az, aA, aB, aC) {
        var aE = a6(au[az], au, aA);
        if ("throw" !== aE.type) {
          var aF = aE.arg,
            aG = aF.value;
          return aG && "object" == b(aG) && Y.call(aG, "__await") ? av.resolve(aG.__await).then(function (aI) {
            ay("next", aI, aB, aC);
          }, function (aI) {
            ay("throw", aI, aB, aC);
          }) : av.resolve(aG).then(function (aI) {
            aF.value = aI;
            aB(aF);
          }, function (aI) {
            return ay("throw", aI, aB, aC);
          });
        }
        aC(aE.arg);
      }
      var ax;
      Z(this, "_invoke", {
        value: function (az, aA) {
          function aD() {
            return new av(function (aF, aG) {
              ay(az, aA, aF, aG);
            });
          }
          return ax = ax ? ax.then(aD, aD) : aD();
        }
      });
    }
    function al(au, av, aw) {
      var ay = a7;
      return function (aA, aB) {
        if (ay === a9) {
          throw Error("Generator is already running");
        }
        if (ay === aa) {
          if ("throw" === aA) {
            throw aB;
          }
          var aD = {};
          aD.value = V;
          aD.done = !0;
          return aD;
        }
        for (aw.method = aA, aw.arg = aB;;) {
          var aE = aw.delegate;
          if (aE) {
            var aF = am(aE, aw);
            if (aF) {
              if (aF === ab) {
                continue;
              }
              return aF;
            }
          }
          if ("next" === aw.method) {
            aw.sent = aw._sent = aw.arg;
          } else {
            if ("throw" === aw.method) {
              if (ay === a7) {
                throw ay = aa, aw.arg;
              }
              aw.dispatchException(aw.arg);
            } else {
              "return" === aw.method && aw.abrupt("return", aw.arg);
            }
          }
          ay = a9;
          var aG = a6(au, av, aw);
          if ("normal" === aG.type) {
            if (ay = aw.done ? aa : a8, aG.arg === ab) {
              continue;
            }
            var aH = {};
            aH.value = aG.arg;
            aH.done = aw.done;
            return aH;
          }
          "throw" === aG.type && (ay = aa, aw.method = "throw", aw.arg = aG.arg);
        }
      };
    }
    function am(au, av) {
      var ax = av.method,
        ay = au.iterator[ax];
      if (ay === V) {
        av.delegate = null;
        "throw" === ax && au.iterator.return && (av.method = "return", av.arg = V, am(au, av), "throw" === av.method) || "return" !== ax && (av.method = "throw", av.arg = new TypeError("The iterator does not provide a '" + ax + "' method"));
        return ab;
      }
      var az = a6(ay, au.iterator, av.arg);
      if ("throw" === az.type) {
        av.method = "throw";
        av.arg = az.arg;
        av.delegate = null;
        return ab;
      }
      var aA = az.arg;
      return aA ? aA.done ? (av[au.resultName] = aA.value, av.next = au.nextLoc, "return" !== av.method && (av.method = "next", av.arg = V), av.delegate = null, ab) : aA : (av.method = "throw", av.arg = new TypeError("iterator result is not an object"), av.delegate = null, ab);
    }
    function an(au) {
      var aw = {
        tryLoc: au[0]
      };
      var ax = aw;
      1 in au && (ax.catchLoc = au[1]);
      2 in au && (ax.finallyLoc = au[2], ax.afterLoc = au[3]);
      this.tryEntries.push(ax);
    }
    function ao(au) {
      var av = au.completion || {};
      av.type = "normal";
      delete av.arg;
      au.completion = av;
    }
    function ap(au) {
      var av = {};
      av.tryLoc = "root";
      this.tryEntries = [av];
      au.forEach(an, this);
      this.reset(!0);
    }
    function aq(au) {
      if (au || "" === au) {
        var aw = au[a1];
        if (aw) {
          return aw.call(au);
        }
        if ("function" == typeof au.next) {
          return au;
        }
        if (!isNaN(au.length)) {
          var ax = -1,
            ay = function aA() {
              for (; ++ax < au.length;) {
                if (Y.call(au, ax)) {
                  aA.value = au[ax];
                  aA.done = !1;
                  return aA;
                }
              }
              aA.value = V;
              aA.done = !0;
              return aA;
            };
          return ay.next = ay;
        }
      }
      throw new TypeError(b(au) + " is not iterable");
    }
    ad.prototype = ae;
    Z(ai, "constructor", {
      value: ae,
      configurable: !0
    });
    Z(ae, "constructor", {
      value: ad,
      configurable: !0
    });
    ad.displayName = a4(ae, a3, "GeneratorFunction");
    W.isGeneratorFunction = function (au) {
      var av = "function" == typeof au && au.constructor;
      return !!av && (av === ad || "GeneratorFunction" === (av.displayName || av.name));
    };
    W.mark = function (au) {
      Object.setPrototypeOf ? Object.setPrototypeOf(au, ae) : (au.__proto__ = ae, a4(au, a3, "GeneratorFunction"));
      au.prototype = Object.create(ai);
      return au;
    };
    W.awrap = function (au) {
      var av = {
        __await: au
      };
      return av;
    };
    aj(ak.prototype);
    a4(ak.prototype, a2, function () {
      return this;
    });
    W.AsyncIterator = ak;
    W.async = function (au, av, aw, ax, ay) {
      void 0 === ay && (ay = Promise);
      var aB = new ak(a5(au, av, aw, ax), ay);
      return W.isGeneratorFunction(av) ? aB : aB.next().then(function (aC) {
        return aC.done ? aC.value : aB.next();
      });
    };
    aj(ai);
    a4(ai, a3, "Generator");
    a4(ai, a1, function () {
      return this;
    });
    a4(ai, "toString", function () {
      return "[object Generator]";
    });
    W.keys = function (au) {
      var aw = Object(au),
        ax = [];
      for (var ay in aw) ax.push(ay);
      ax.reverse();
      return function aA() {
        for (; ax.length;) {
          var aC = ax.pop();
          if (aC in aw) {
            aA.value = aC;
            aA.done = !1;
            return aA;
          }
        }
        aA.done = !0;
        return aA;
      };
    };
    W.values = aq;
    ap.prototype = {
      constructor: ap,
      reset: function (au) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = V, this.done = !1, this.delegate = null, this.method = "next", this.arg = V, this.tryEntries.forEach(ao), !au) {
          for (var av in this) "t" === av.charAt(0) && Y.call(this, av) && !isNaN(+av.slice(1)) && (this[av] = V);
        }
      },
      stop: function () {
        this.done = !0;
        var au = this.tryEntries[0].completion;
        if ("throw" === au.type) {
          throw au.arg;
        }
        return this.rval;
      },
      dispatchException: function (au) {
        if (this.done) {
          throw au;
        }
        var aw = this;
        function aD(aE, aF) {
          az.type = "throw";
          az.arg = au;
          aw.next = aE;
          aF && (aw.method = "next", aw.arg = V);
          return !!aF;
        }
        for (var ax = this.tryEntries.length - 1; ax >= 0; --ax) {
          var ay = this.tryEntries[ax],
            az = ay.completion;
          if ("root" === ay.tryLoc) {
            return aD("end");
          }
          if (ay.tryLoc <= this.prev) {
            var aA = Y.call(ay, "catchLoc"),
              aB = Y.call(ay, "finallyLoc");
            if (aA && aB) {
              if (this.prev < ay.catchLoc) {
                return aD(ay.catchLoc, !0);
              }
              if (this.prev < ay.finallyLoc) {
                return aD(ay.finallyLoc);
              }
            } else {
              if (aA) {
                if (this.prev < ay.catchLoc) {
                  return aD(ay.catchLoc, !0);
                }
              } else {
                if (!aB) {
                  throw Error("try statement without catch or finally");
                }
                if (this.prev < ay.finallyLoc) {
                  return aD(ay.finallyLoc);
                }
              }
            }
          }
        }
      },
      abrupt: function (au, av) {
        for (var ax = this.tryEntries.length - 1; ax >= 0; --ax) {
          var ay = this.tryEntries[ax];
          if (ay.tryLoc <= this.prev && Y.call(ay, "finallyLoc") && this.prev < ay.finallyLoc) {
            var az = ay;
            break;
          }
        }
        az && ("break" === au || "continue" === au) && az.tryLoc <= av && av <= az.finallyLoc && (az = null);
        var aA = az ? az.completion : {};
        aA.type = au;
        aA.arg = av;
        return az ? (this.method = "next", this.next = az.finallyLoc, ab) : this.complete(aA);
      },
      complete: function (au, av) {
        if ("throw" === au.type) {
          throw au.arg;
        }
        "break" === au.type || "continue" === au.type ? this.next = au.arg : "return" === au.type ? (this.rval = this.arg = au.arg, this.method = "return", this.next = "end") : "normal" === au.type && av && (this.next = av);
        return ab;
      },
      finish: function (au) {
        for (var av = this.tryEntries.length - 1; av >= 0; --av) {
          var aw = this.tryEntries[av];
          if (aw.finallyLoc === au) {
            this.complete(aw.completion, aw.afterLoc);
            ao(aw);
            return ab;
          }
        }
      },
      catch: function (au) {
        for (var aw = this.tryEntries.length - 1; aw >= 0; --aw) {
          var ax = this.tryEntries[aw];
          if (ax.tryLoc === au) {
            var ay = ax.completion;
            if ("throw" === ay.type) {
              var az = ay.arg;
              ao(ax);
            }
            return az;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function (au, av, aw) {
        this.delegate = {
          iterator: aq(au),
          resultName: av,
          nextLoc: aw
        };
        "next" === this.method && (this.arg = V);
        return ab;
      }
    };
    return W;
  }
  function h(U, V, W, X, Y, Z, a0) {
    try {
      var a1 = U[Z](a0),
        a2 = a1.value;
    } catch (a4) {
      return void W(a4);
    }
    a1.done ? V(a2) : Promise.resolve(a2).then(X, Y);
  }
  function i(U) {
    return function () {
      var X = this,
        Y = arguments;
      return new Promise(function (Z, a0) {
        var a2 = U.apply(X, Y);
        function a3(a5) {
          h(a2, Z, a0, a3, a4, "next", a5);
        }
        function a4(a5) {
          h(a2, Z, a0, a3, a4, "throw", a5);
        }
        a3(void 0);
      });
    };
  }
  var j = ($.isNode() ? process.env.YongPai : $.getdata("YongPai")) || "";
  window = {};
  var k = "",
    l = "",
    m = "",
    n = "",
    o = "",
    p = "",
    q = "",
    r = "",
    s = "",
    t = "",
    u = "",
    v = "",
    w = "";
  function x() {
    return y.apply(this, arguments);
  }
  function y() {
    y = i(g().mark(function V() {
      var X, Y, Z, a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, as, at, au, av, aw, ax, ay, az, aA, aB, aC, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT;
      return g().wrap(function aU(aV) {
        for (;;) {
          switch (aV.prev = aV.next) {
            case 0:
              if (console.log("作者：@xzxxn777\n频道：https://t.me/xzxxn777\n群组：https://t.me/xzxxn7777\n自用机场推荐：https://xn--diqv0fut7b.com\n"), j) {
                aV.next = 6;
                break;
              }
              console.log("先去boxjs填写账号密码");
              aV.next = 5;
              return S("先去boxjs填写账号密码");
            case 5:
              return aV.abrupt("return");
            case 6:
              X = j.split(" ");
              Y = c(X);
              aV.prev = 8;
              Y.s();
            case 10:
              if ((Z = Y.n()).done) {
                aV.next = 247;
                break;
              }
              a0 = Z.value;
              console.log("随机生成设备");
              o = a0.split("&")[0];
              p = a0.split("&")[1];
              q = a0.split("&")[2];
              r = a0.split("&")[3];
              k = a0.split("&")[4];
              a1 = O();
              k || (k = a1.deviceId);
              v = a1.model;
              console.log(k);
              console.log(v);
              console.log("用户：".concat(o, "开始任务"));
              console.log("登录");
              a2 = Date.now();
              aV.next = 28;
              return z("username=".concat(o, "&password=").concat(encodeURI(p), "&deviceId=").concat(k, "&globalDatetime=").concat(a2, "&sign=").concat(md5("globalDatetime".concat(a2, "username").concat(o, "test_123456679890123456")).toUpperCase()));
            case 28:
              if (a3 = aV.sent, 0 == a3.code) {
                aV.next = 32;
                break;
              }
              console.log(a3.message);
              return aV.abrupt("continue", 245);
            case 32:
              console.log("获取userId：".concat(a3.data.userId));
              s = a3.data.userId;
              console.log("获取name：".concat(a3.data.nickname));
              a4 = a3.data.token;
              u = a3.data.nickname;
              aV.next = 39;
              return B("userId=".concat(s, "&loginName=").concat(o, "&name=").concat(encodeURI(u), "&phone=").concat(o));
            case 39:
              if (a5 = aV.sent, 200 == a5.code) {
                aV.next = 43;
                break;
              }
              console.log(a5.message);
              return aV.abrupt("continue", 245);
            case 43:
              console.log("登录成功");
              l = a5.data;
              console.log("————————————");
              console.log("开始任务");
              a6 = !0;
              a7 = !0;
              a8 = !0;
              aV.next = 52;
              return D("/yongpai-user/api/user/my_level?userId=".concat(s));
            case 52:
              a9 = aV.sent;
              aa = c(a9.data.scoreRule);
              aV.prev = 54;
              aa.s();
            case 56:
              if ((ab = aa.n()).done) {
                aV.next = 68;
                break;
              }
              if (ac = ab.value, console.log("任务：".concat(ac.type)), ac.dayscore != ac.usedScore) {
                aV.next = 62;
                break;
              }
              console.log("任务已完成");
              return aV.abrupt("continue", 66);
            case 62:
              console.log("任务进度：".concat(ac.usedScore, "/").concat(ac.dayscore));
              "阅读新闻" == ac.type && (a6 = !1);
              "点赞" == ac.type && (a7 = !1);
              "分享新闻" == ac.type && (a8 = !1);
            case 66:
              aV.next = 56;
              break;
            case 68:
              aV.next = 73;
              break;
            case 70:
              aV.prev = 70;
              aV.t0 = aV.catch(54);
              aa.e(aV.t0);
            case 73:
              aV.prev = 73;
              aa.f();
              return aV.finish(73);
            case 76:
              if (a6 && a7 && a8) {
                aV.next = 124;
                break;
              }
              ad = [0, 2, 20183, 20184, 4, 32];
              ae = 30;
              af = 0;
              ag = ad;
            case 80:
              if (!(af < ag.length)) {
                aV.next = 124;
                break;
              }
              ah = ag[af];
              aV.next = 84;
              return D("/yongpai-news/api/news/list?channelId=".concat(ah, "&currentPage=1&timestamp=0"));
            case 84:
              ai = aV.sent;
              aj = c(ai.data.content);
              aV.prev = 86;
              aj.s();
            case 88:
              if ((ak = aj.n()).done) {
                aV.next = 113;
                break;
              }
              if (al = ak.value, R(al.sourcetime)) {
                aV.next = 92;
                break;
              }
              return aV.abrupt("continue", 111);
            case 92:
              if (0 != ae) {
                aV.next = 94;
                break;
              }
              return aV.abrupt("break", 113);
            case 94:
              if (console.log("文章：".concat(al.title)), am = al.id, a6) {
                aV.next = 101;
                break;
              }
              aV.next = 99;
              return D("/yongpai-news/api/news/detail?newsId=".concat(am, "&userId=").concat(s, "&deviceId=").concat(k));
            case 99:
              an = aV.sent;
              console.log("阅读：".concat(an.message));
            case 101:
              if (a7) {
                aV.next = 106;
                break;
              }
              aV.next = 104;
              return D("/yongpai-ugc/api/praise/save_news?userId=".concat(s, "&newsId=").concat(am, "&deviceId=").concat(k));
            case 104:
              ao = aV.sent;
              0 == ao.code ? (ae--, console.log("点赞获得：".concat(null == ao || null === (ap = ao.data) || void 0 === ap ? void 0 : ap.score, "积分"))) : console.log(ao.message);
            case 106:
              if (a8) {
                aV.next = 111;
                break;
              }
              aV.next = 109;
              return D("/yongpai-ugc/api/forward/news?userId=".concat(s, "&newsId=").concat(am, "&source=4"));
            case 109:
              aq = aV.sent;
              0 == aq.code ? console.log("分享获得：".concat(null == aq ? void 0 : aq.data, "积分")) : console.log(aq.message);
            case 111:
              aV.next = 88;
              break;
            case 113:
              aV.next = 118;
              break;
            case 115:
              aV.prev = 115;
              aV.t1 = aV.catch(86);
              aj.e(aV.t1);
            case 118:
              aV.prev = 118;
              aj.f();
              return aV.finish(118);
            case 121:
              af++;
              aV.next = 80;
              break;
            case 124:
              ar = "";
              aV.next = 127;
              return D("/yongpai-news/api/news/list?channelId=4&currentPage=1&timestamp=0");
            case 127:
              as = aV.sent;
              at = c(as.data.content);
              aV.prev = 129;
              at.s();
            case 131:
              if ((au = at.n()).done) {
                aV.next = 139;
                break;
              }
              if (av = au.value, !av.title.includes("转盘")) {
                aV.next = 137;
                break;
              }
              console.log("抽奖活动：".concat(av.title));
              ar = av.id;
              return aV.abrupt("break", 139);
            case 137:
              aV.next = 131;
              break;
            case 139:
              aV.next = 144;
              break;
            case 141:
              aV.prev = 141;
              aV.t2 = aV.catch(129);
              at.e(aV.t2);
            case 144:
              aV.prev = 144;
              at.f();
              return aV.finish(144);
            case 147:
              if (console.log("————————————"), console.log("阅读抽奖"), console.log("获取id"), ar) {
                aV.next = 154;
                break;
              }
              console.log("未找到id");
              aV.next = 239;
              break;
            case 154:
              console.log(ar);
              console.log("获取抽奖id");
              aV.next = 158;
              return D("/yongpai-news/api/news/detail?newsId=".concat(ar, "&userId=").concat(s, "&deviceId=").concat(k));
            case 158:
              aw = aV.sent;
              ax = aw.data.body.match(/id=\d+/);
              ax && (n = ax[0].split("=")[1]);
              console.log(n);
              console.log("阅读登录");
              aV.next = 165;
              return F("userId=".concat(s, "&dbredirect=https://92722.activity-12.m.duiba.com.cn/hdtool/index?id=").concat(n, "&dbnewopen"));
            case 165:
              ay = aV.sent;
              m = "";
              aV.next = 169;
              return H(ay.data);
            case 169:
              m = aV.sent;
              console.log("获取抽奖key");
              aV.next = 173;
              return L("https://92722.activity-12.m.duiba.com.cn/hdtool/index?id=".concat(n, "&dbnewopen&from=login&spm=92722.1.1.1"));
            case 173:
              az = aV.sent;
              aV.next = 176;
              return J("/hdtool/ajaxElement?_=".concat(Date.now()), "hdType=dev&hdToolId=&preview=false&actId=".concat(n, "&adslotId="));
            case 176:
              aA = aV.sent;
              lotteryCount = aA.element.freeLimit;
              console.log("拥有".concat(lotteryCount, "次抽奖"));
              aB = 0;
            case 180:
              if (!(aB < aA.element.freeLimit)) {
                aV.next = 239;
                break;
              }
              aV.next = 183;
              return J("/hdtool/ctoken/getTokenNew", "timestamp=".concat(Date.now(), "&activityId=").concat(n, "&activityType=hdtool&consumerId=").concat(t));
            case 183:
              aC = aV.sent;
              eval(aC.token);
              aD = window[az];
              aV.next = 188;
              return J("/hdtool/doJoin?dpm=92722.3.1.0&activityId=".concat(n, "&_=").concat(Date.now()), "actId=".concat(n, "&oaId=").concat(n, "&activityType=hdtool&consumerId=").concat(t, "&token=").concat(aD));
            case 188:
              if (aE = aV.sent, !aE.success) {
                aV.next = 235;
                break;
              }
              if (aE.orderId) {
                aV.next = 193;
                break;
              }
              console.log(aE.message);
              return aV.abrupt("break", 239);
            case 193:
              aF = aE.orderId;
              aG = 0;
            case 195:
              if (0 != aG) {
                aV.next = 233;
                break;
              }
              aV.next = 198;
              return J("/hdtool/getOrderStatus?_=".concat(Date.now()), "orderId=".concat(aF, "&adslotId="));
            case 198:
              if (aH = aV.sent, aG = aH.result, 0 != aG) {
                aV.next = 204;
                break;
              }
              console.log(aH.message);
              aV.next = 231;
              break;
            case 204:
              if ("thanks" == aH.lottery.type && (console.log("谢谢参与"), w += "用户：".concat(o, " 抽奖获得：谢谢参与\n")), "alipay" != aH.lottery.type) {
                aV.next = 231;
                break;
              }
              for (console.log("抽奖获得支付宝红包：".concat(aH.lottery.title)), aI = aH.lottery.link, aJ = aI.split("?")[1], aK = {}, aL = aJ.split("&"), aM = 0, aN = aL.length; aM < aN; aM++) {
                aO = aL[aM].split("=");
                aK[aO[0]] = aO[1];
              }
              if (aP = aK.recordId, !q || !r) {
                aV.next = 230;
                break;
              }
              console.log("获取兑换key");
              aV.next = 217;
              return L("https://92722.activity-12.m.duiba.com.cn/activity/takePrizeNew?recordId=".concat(aP, "&dbnewopen"));
            case 217:
              az = aV.sent;
              aV.next = 220;
              return J("/ctoken/getToken.do");
            case 220:
              aQ = aV.sent;
              eval(aQ.token);
              aR = window[az];
              aV.next = 225;
              return J("/activity/doTakePrize", "alipay=".concat(r, "&realname=").concat(encodeURI(q), "&recordId=").concat(aP, "&token=").concat(aR));
            case 225:
              aS = aV.sent;
              console.log(aS.message);
              w += "用户：".concat(o, " 抽奖获得：").concat(aH.lottery.title, " 领取结果：").concat(aS.message, "\n");
              aV.next = 231;
              break;
            case 230:
              console.log("请设置支付宝姓名和账号");
            case 231:
              aV.next = 195;
              break;
            case 233:
              aV.next = 236;
              break;
            case 235:
              console.log(aE.message);
            case 236:
              aB++;
              aV.next = 180;
              break;
            case 239:
              console.log("————————————");
              console.log("查询积分");
              aV.next = 243;
              return D("/yongpai-user/api/user/client?userId=".concat(s, "&deviceId=").concat(k, "&token=").concat(a4));
            case 243:
              aT = aV.sent;
              console.log("拥有积分：".concat(aT.data.score, "\n"));
            case 245:
              aV.next = 10;
              break;
            case 247:
              aV.next = 252;
              break;
            case 249:
              aV.prev = 249;
              aV.t3 = aV.catch(8);
              Y.e(aV.t3);
            case 252:
              aV.prev = 252;
              Y.f();
              return aV.finish(252);
            case 255:
              if (!w) {
                aV.next = 258;
                break;
              }
              aV.next = 258;
              return S(w);
            case 258:
            case "end":
              return aV.stop();
          }
        }
      }, V, null, [[8, 249, 252, 255], [54, 70, 73, 76], [86, 115, 118, 121], [129, 141, 144, 147]]);
    }));
    return y.apply(this, arguments);
  }
  function z(U) {
    return A.apply(this, arguments);
  }
  function A() {
    A = i(g().mark(function V(W) {
      return g().wrap(function (Y) {
        for (;;) {
          switch (Y.prev = Y.next) {
            case 0:
              return Y.abrupt("return", new Promise(function (a0) {
                var a2 = {
                  url: "https://ypapp.cnnb.com.cn/yongpai-user/api/login2/local3?".concat(W),
                  headers: {
                    system: "android",
                    version: "30",
                    model: v,
                    appversion: "11.0.0",
                    appbuild: "202407040",
                    deviceid: k,
                    ticket: "",
                    "accept-encoding": "gzip",
                    "user-agent": "okhttp/4.9.1"
                  }
                };
                $.get(a2, function () {
                  var a4 = i(g().mark(function a5(a6, a7, a8) {
                    return g().wrap(function (a9) {
                      for (;;) {
                        switch (a9.prev = a9.next) {
                          case 0:
                            if (a9.prev = 0, !a6) {
                              a9.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(a6)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            a9.next = 9;
                            break;
                          case 6:
                            a9.next = 8;
                            return $.wait(2000);
                          case 8:
                            a0(JSON.parse(a8));
                          case 9:
                            a9.next = 14;
                            break;
                          case 11:
                            a9.prev = 11;
                            a9.t0 = a9.catch(0);
                            $.logErr(a9.t0, a7);
                          case 14:
                            a9.prev = 14;
                            a0();
                            return a9.finish(14);
                          case 17:
                          case "end":
                            return a9.stop();
                        }
                      }
                    }, a5, null, [[0, 11, 14, 17]]);
                  }));
                  return function (a6, a7, a8) {
                    return a4.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return Y.stop();
          }
        }
      }, V);
    }));
    return A.apply(this, arguments);
  }
  function B(U) {
    return C.apply(this, arguments);
  }
  function C() {
    C = i(g().mark(function V(W) {
      return g().wrap(function (X) {
        for (;;) {
          switch (X.prev = X.next) {
            case 0:
              return X.abrupt("return", new Promise(function (Z) {
                var a0 = {
                  url: "https://ypapp.cnnb.com.cn/web-nbcc/member/login?".concat(W),
                  headers: {
                    "content-type": "application/json",
                    module: "web-member",
                    sign: md5("/member/login{loginName:".concat(o, ",name:").concat(u, ",phone:").concat(o, ",userId:").concat(s)),
                    "accept-encoding": "gzip",
                    "user-agent": "okhttp/4.9.1"
                  }
                };
                $.get(a0, function () {
                  var a2 = i(g().mark(function a3(a4, a5, a6) {
                    return g().wrap(function (a7) {
                      for (;;) {
                        switch (a7.prev = a7.next) {
                          case 0:
                            if (a7.prev = 0, !a4) {
                              a7.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(a4)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            a7.next = 9;
                            break;
                          case 6:
                            a7.next = 8;
                            return $.wait(2000);
                          case 8:
                            Z(JSON.parse(a6));
                          case 9:
                            a7.next = 14;
                            break;
                          case 11:
                            a7.prev = 11;
                            a7.t0 = a7.catch(0);
                            $.logErr(a7.t0, a5);
                          case 14:
                            a7.prev = 14;
                            Z();
                            return a7.finish(14);
                          case 17:
                          case "end":
                            return a7.stop();
                        }
                      }
                    }, a3, null, [[0, 11, 14, 17]]);
                  }));
                  return function (a4, a5, a6) {
                    return a2.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return X.stop();
          }
        }
      }, V);
    }));
    return C.apply(this, arguments);
  }
  function D(U) {
    return E.apply(this, arguments);
  }
  function E() {
    E = i(g().mark(function V(W) {
      return g().wrap(function (Z) {
        for (;;) {
          switch (Z.prev = Z.next) {
            case 0:
              return Z.abrupt("return", new Promise(function (a1) {
                var a3 = {
                  system: "android",
                  version: "30",
                  model: v,
                  appversion: "11.0.0",
                  appbuild: "202407040",
                  deviceid: k,
                  ticket: l,
                  "accept-encoding": "gzip",
                  "user-agent": "okhttp/4.9.1"
                };
                var a4 = {
                  url: "https://ypapp.cnnb.com.cn".concat(W),
                  headers: a3
                };
                $.get(a4, function () {
                  var a6 = i(g().mark(function a7(a8, a9, aa) {
                    return g().wrap(function (ac) {
                      for (;;) {
                        switch (ac.prev = ac.next) {
                          case 0:
                            if (ac.prev = 0, !a8) {
                              ac.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(a8)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ac.next = 9;
                            break;
                          case 6:
                            ac.next = 8;
                            return $.wait(2000);
                          case 8:
                            a1(JSON.parse(aa));
                          case 9:
                            ac.next = 14;
                            break;
                          case 11:
                            ac.prev = 11;
                            ac.t0 = ac.catch(0);
                            $.logErr(ac.t0, a9);
                          case 14:
                            ac.prev = 14;
                            a1();
                            return ac.finish(14);
                          case 17:
                          case "end":
                            return ac.stop();
                        }
                      }
                    }, a7, null, [[0, 11, 14, 17]]);
                  }));
                  return function (a8, a9, aa) {
                    return a6.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return Z.stop();
          }
        }
      }, V);
    }));
    return E.apply(this, arguments);
  }
  function F(U) {
    return G.apply(this, arguments);
  }
  function G() {
    G = i(g().mark(function U(V) {
      return g().wrap(function (X) {
        for (;;) {
          switch (X.prev = X.next) {
            case 0:
              return X.abrupt("return", new Promise(function (Z) {
                var a1 = {
                  url: "https://ypapp.cnnb.com.cn/yongpai-user/api/duiba/autologin?".concat(V),
                  headers: {
                    "accept-encoding": "gzip",
                    "user-agent": "okhttp/4.9.1"
                  }
                };
                $.get(a1, function () {
                  var a2 = i(g().mark(function a3(a4, a5, a6) {
                    return g().wrap(function (a8) {
                      for (;;) {
                        switch (a8.prev = a8.next) {
                          case 0:
                            if (a8.prev = 0, !a4) {
                              a8.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(a4)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            a8.next = 9;
                            break;
                          case 6:
                            a8.next = 8;
                            return $.wait(2000);
                          case 8:
                            Z(JSON.parse(a6));
                          case 9:
                            a8.next = 14;
                            break;
                          case 11:
                            a8.prev = 11;
                            a8.t0 = a8.catch(0);
                            $.logErr(a8.t0, a5);
                          case 14:
                            a8.prev = 14;
                            Z();
                            return a8.finish(14);
                          case 17:
                          case "end":
                            return a8.stop();
                        }
                      }
                    }, a3, null, [[0, 11, 14, 17]]);
                  }));
                  return function (a4, a5, a6) {
                    return a2.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return X.stop();
          }
        }
      }, U);
    }));
    return G.apply(this, arguments);
  }
  function H(U) {
    return I.apply(this, arguments);
  }
  function I() {
    I = i(g().mark(function U(V) {
      return g().wrap(function (X) {
        for (;;) {
          switch (X.prev = X.next) {
            case 0:
              return X.abrupt("return", new Promise(function (Z) {
                var a0 = {
                  "upgrade-insecure-requests": "1",
                  "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36 agentweb/4.0.2  UCBrowser/11.6.4.950 yongpai",
                  accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                  "x-requested-with": "io.dcloud.H55BDF6BE",
                  "sec-fetch-site": "none",
                  "sec-fetch-mode": "navigate",
                  "sec-fetch-user": "?1",
                  "sec-fetch-dest": "document",
                  "accept-encoding": "gzip, deflate",
                  "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                };
                var a1 = {
                  url: "".concat(V),
                  headers: a0,
                  followRedirect: !1
                };
                $.get(a1, function () {
                  var a3 = i(g().mark(function a4(a5, a6, a7) {
                    var a8, a9;
                    return g().wrap(function (aa) {
                      for (;;) {
                        switch (aa.prev = aa.next) {
                          case 0:
                            if (aa.prev = 0, !a5) {
                              aa.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(a5)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aa.next = 10;
                            break;
                          case 6:
                            aa.next = 8;
                            return $.wait(2000);
                          case 8:
                            if ($.isNode()) {
                              for (a8 = a6.headers["set-cookie"] || a6.headers["Set-Cookie"], a9 = 0; a9 < a8.length; a9++) {
                                m += a8[a9].split(";")[0] + ";";
                              }
                            } else {
                              m = a6.headers["set-cookie"] || a6.headers["Set-Cookie"];
                              m = N(m);
                            }
                            Z(m);
                          case 10:
                            aa.next = 15;
                            break;
                          case 12:
                            aa.prev = 12;
                            aa.t0 = aa.catch(0);
                            $.logErr(aa.t0, a6);
                          case 15:
                            aa.prev = 15;
                            Z();
                            return aa.finish(15);
                          case 18:
                          case "end":
                            return aa.stop();
                        }
                      }
                    }, a4, null, [[0, 12, 15, 18]]);
                  }));
                  return function (a5, a6, a7) {
                    return a3.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return X.stop();
          }
        }
      }, U);
    }));
    return I.apply(this, arguments);
  }
  function J(U, V) {
    return K.apply(this, arguments);
  }
  function K() {
    K = i(g().mark(function U(V, W) {
      return g().wrap(function (Y) {
        for (;;) {
          switch (Y.prev = Y.next) {
            case 0:
              return Y.abrupt("return", new Promise(function (Z) {
                var a1 = {
                  url: "https://92722.activity-12.m.duiba.com.cn".concat(V),
                  headers: {
                    accept: "application/json",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36 agentweb/4.0.2  UCBrowser/11.6.4.950 yongpai",
                    "x-requested-with": "XMLHttpRequest",
                    "content-type": "application/x-www-form-urlencoded",
                    origin: "https://92722.activity-12.m.duiba.com.cn",
                    cookie: m,
                    "sec-fetch-site": "same-origin",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    referer: "https://92722.activity-12.m.duiba.com.cn/hdtool/index?id=".concat(n, "&dbnewopen&from=login&spm=92722.1.1.1"),
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  },
                  body: W
                };
                $.post(a1, function () {
                  var a3 = i(g().mark(function a4(a5, a6, a7) {
                    return g().wrap(function (a8) {
                      for (;;) {
                        switch (a8.prev = a8.next) {
                          case 0:
                            if (a8.prev = 0, !a5) {
                              a8.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(a5)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            a8.next = 9;
                            break;
                          case 6:
                            a8.next = 8;
                            return $.wait(2000);
                          case 8:
                            Z(JSON.parse(a7));
                          case 9:
                            a8.next = 14;
                            break;
                          case 11:
                            a8.prev = 11;
                            a8.t0 = a8.catch(0);
                            $.logErr(a8.t0, a6);
                          case 14:
                            a8.prev = 14;
                            Z();
                            return a8.finish(14);
                          case 17:
                          case "end":
                            return a8.stop();
                        }
                      }
                    }, a4, null, [[0, 11, 14, 17]]);
                  }));
                  return function (a5, a6, a7) {
                    return a3.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return Y.stop();
          }
        }
      }, U);
    }));
    return K.apply(this, arguments);
  }
  function L(U) {
    return M.apply(this, arguments);
  }
  function M() {
    M = i(g().mark(function V(W) {
      return g().wrap(function Y(Z) {
        for (;;) {
          switch (Z.prev = Z.next) {
            case 0:
              return Z.abrupt("return", new Promise(function (a0) {
                var a2 = {
                  accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                  "upgrade-insecure-requests": "1",
                  "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36 agentweb/4.0.2  UCBrowser/11.6.4.950 yongpai",
                  "x-requested-with": "io.dcloud.H55BDF6BE",
                  "sec-fetch-site": "none",
                  "sec-fetch-mode": "navigate",
                  "sec-fetch-user": "?1",
                  "sec-fetch-dest": "document",
                  "accept-encoding": "gzip, deflate",
                  "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                  cookie: m
                };
                var a3 = {
                  url: W,
                  headers: a2
                };
                $.get(a3, function () {
                  var a6 = i(g().mark(function a7(a8, a9, aa) {
                    var ab, ac, ad, ae;
                    return g().wrap(function af(ag) {
                      for (;;) {
                        switch (ag.prev = ag.next) {
                          case 0:
                            if (ag.prev = 0, !a8) {
                              ag.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(a8)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ag.next = 18;
                            break;
                          case 6:
                            ag.next = 8;
                            return $.wait(2000);
                          case 8:
                            ab = /<script type\b[^>]*>\s*var([\s\S]*?)<\/script>/.exec(aa)[1];
                            eval(ab);
                            ac = /var\s+key\s+=\s+'([^']+)';/.exec(getDuibaToken.toString())[1];
                            console.log(ac);
                            console.log("获取consumerId");
                            ad = /consumerId:'(\d+)'/;
                            ae = aa.match(ad);
                            t = ae ? ae[1] : "4136126583";
                            console.log(t);
                            a0(ac);
                          case 18:
                            ag.next = 23;
                            break;
                          case 20:
                            ag.prev = 20;
                            ag.t0 = ag.catch(0);
                            $.logErr(ag.t0, a9);
                          case 23:
                            ag.prev = 23;
                            a0();
                            return ag.finish(23);
                          case 26:
                          case "end":
                            return ag.stop();
                        }
                      }
                    }, a7, null, [[0, 20, 23, 26]]);
                  }));
                  return function (a8, a9, aa) {
                    return a6.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return Z.stop();
          }
        }
      }, V);
    }));
    return M.apply(this, arguments);
  }
  function N(U) {
    var V = U.split(", "),
      W = V.map(function (X) {
        var Y = X.split(";")[0];
        return Y.trim();
      });
    return W.join(";");
  }
  function O() {
    var U = Q(),
      V = P(["M1903F2A", "M2001J2E", "M2001J2C", "M2001J1E", "M2001J1C", "M2002J9E", "M2011K2C", "M2102K1C", "M2101K9C", "2107119DC", "2201123C", "2112123AC", "2201122C", "2211133C", "2210132C", "2304FPN6DC", "23127PN0CC", "24031PN0DC", "23090RA98C", "2312DRA50C", "2312CRAD3C", "2312DRAABC", "22101316UCP", "22101316C"]),
      W = {
        deviceId: U,
        model: V
      };
    return W;
  }
  function P(U) {
    return U[Math.floor(Math.random() * U.length)];
  }
  function Q() {
    for (var U = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 16, V = "abcdefghijklmnopqrstuvwxyz0123456789", W = "", X = 0; X < U; X++) {
      W += V.charAt(Math.floor(36 * Math.random()));
    }
    return W;
  }
  function R(U) {
    var V = new Date(U),
      W = new Date();
    return V.getFullYear() === W.getFullYear() && V.getMonth() === W.getMonth() && V.getDate() === W.getDate();
  }
  function S(U) {
    return T.apply(this, arguments);
  }
  function T() {
    T = i(g().mark(function V(W) {
      return g().wrap(function (Z) {
        for (;;) {
          switch (Z.prev = Z.next) {
            case 0:
              if (!$.isNode()) {
                Z.next = 5;
                break;
              }
              Z.next = 3;
              return notify.sendNotify($.name, W);
            case 3:
              Z.next = 6;
              break;
            case 5:
              $.msg($.name, "", W);
            case 6:
            case "end":
              return Z.stop();
          }
        }
      }, V);
    }));
    return T.apply(this, arguments);
  }
  i(g().mark(function U() {
    return g().wrap(function (V) {
      for (;;) {
        switch (V.prev = V.next) {
          case 0:
            V.next = 2;
            return x();
          case 2:
          case "end":
            return V.stop();
        }
      }
    }, U);
  }))().catch(function (V) {
    $.log(V);
  }).finally(function () {
    $.done({});
  });
})();