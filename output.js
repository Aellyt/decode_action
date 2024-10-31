//Thu Oct 31 2024 08:25:24 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("阿里云社区"),
  ckName = "aliyunWeb_data",
  controlTime = ($.isNode() ? process.env.aliyunWeb_time : $.getdata("aliyunWeb_time")) || "12",
  controlScene = ($.isNode() ? process.env.aliyunWeb_scene : $.getdata("aliyunWeb_scene")) || "false",
  controlStock = ($.isNode() ? process.env.aliyunWeb_stock : $.getdata("aliyunWeb_stock")) || "false",
  controlVideo = ($.isNode() ? process.env.aliyunWeb_video : $.getdata("aliyunWeb_video")) || "false",
  Notify = 1,
  notify = $.isNode() ? require("./sendNotify") : "";
let envSplitor = ["@"];
var userCookie = ($.isNode() ? process.env[ckName] : $.getdata(ckName)) || "";
let userList = [],
  userIdx = 0,
  userCount = 0;
const taskGroup = [{
  code: "",
  name: "我的社区"
}, {
  code: "ecs",
  name: "弹性计算"
}, {
  code: "computenest",
  name: "计算巢"
}, {
  code: "yitian",
  name: "倚天"
}, {
  code: "wuying",
  name: "无影"
}, {
  code: "cloudnative",
  name: "云原生"
}, {
  code: "storage",
  name: "云存储"
}, {
  code: "luoshen",
  name: "飞天洛神云网络"
}, {
  code: "database",
  name: "数据库"
}, {
  code: "polardb",
  name: "PolarDB开源"
}, {
  code: "bigdata",
  name: "大数据与机器学习"
}, {
  code: "modelscope",
  name: "ModelScope模型即服务"
}, {
  code: "viapi",
  name: "视觉智能"
}, {
  code: "dns",
  name: "域名解析DNS"
}, {
  code: "iot",
  name: "物联网"
}, {
  code: "devops",
  name: "云效DevOps"
}, {
  code: "aliyun_linux",
  name: "龙蜥操作系统"
}, {
  code: "modelstudio",
  name: "百炼大模型"
}, {
  code: "tongyi",
  name: "通义大模型"
}];
$.is_debug = ($.isNode() ? process.env.IS_DEDUG : $.getdata("is_debug")) || "false";
$.notifyList = [];
$.notifyMsg = [];
let pendingScore = 0,
  userScore = 0,
  sceneId = "",
  resourceFrom = "",
  sectionId = "",
  ip = "";
async function main() {
  try {
    $.log("\n================== 任务 ==================\n");
    for (let _0xc17500 of userList) {
      console.log("🔷账号" + _0xc17500.index + " >> Start work");
      console.log("随机延迟" + _0xc17500.getRandomTime() + "秒");
      const _0x1c4f51 = Date.now();
      userScore = (await _0xc17500.interactData()) ?? {};
      if (_0xc17500.ckStatus) {
        if (_0x1c4f51 < new Date(new Date().setHours(Math.floor(controlTime), 0, 0, 0)).getTime()) {
          for (let _0x57933f of taskGroup) {
            const _0x51d904 = await _0xc17500.getUserSpaceSignInDetail(_0x57933f.code),
              _0x33a038 = await _0xc17500.getTasks(_0x51d904);
            await _0xc17500.signin(_0x33a038, _0x57933f.name);
            await $.wait(_0xc17500.getRandomTime());
            const _0x17a4ce = await _0xc17500.assessSignInBonusQualification(_0x51d904, _0x57933f.name);
            await $.wait(_0xc17500.getRandomTime());
            _0x17a4ce && (await _0xc17500.receiveSignInBonus(_0x51d904, _0x57933f.name), await $.wait(_0xc17500.getRandomTime()));
          }
          const _0x50061a = await _0xc17500.getEbooks();
          await $.wait(_0xc17500.getRandomTime());
          const _0x18bdd1 = await _0xc17500.getCsrfToken(_0x50061a, "ebook");
          await $.wait(_0xc17500.getRandomTime());
          await _0xc17500.addBookComment(_0x50061a, _0x18bdd1);
          await $.wait(_0xc17500.getRandomTime());
          for (let _0xc370fb = 0; _0xc370fb < 5; _0xc370fb++) {
            const _0x4f28c6 = await _0xc17500.getArticles();
            await $.wait(_0xc17500.getRandomTime());
            await _0xc17500.likeOrNotLike(_0x4f28c6, "aliyun-public-like", 0);
            await $.wait(_0xc17500.getRandomTime());
            await _0xc17500.likeOrNotLike(_0x4f28c6, "aliyun-public-favorite", 0);
            await $.wait(_0xc17500.getRandomTime());
            _0xc370fb === 0 && (await _0xc17500.addComment(_0x4f28c6), await $.wait(_0xc17500.getRandomTime()), await _0xc17500.likeOrNotLike(_0x4f28c6, "aliyun-public-share", 0), await $.wait(_0xc17500.getRandomTime()));
            const _0x55e5ff = await _0xc17500.getAsks();
            await $.wait(_0xc17500.getRandomTime());
            if (_0x55e5ff && _0x55e5ff?.["id"]) {
              const _0x4779c0 = await _0xc17500.getCsrfToken(_0x55e5ff.id, "ask");
              await $.wait(_0xc17500.getRandomTime());
              const _0x3dea62 = await _0xc17500.getAskDetail(_0x55e5ff);
              await $.wait(_0xc17500.getRandomTime());
              _0x3dea62 && (await _0xc17500.voteAnswer(_0x55e5ff.id, _0x3dea62, _0x4779c0, 1), await $.wait(_0xc17500.getRandomTime()));
            }
          }
          JSON.parse(controlScene) && (await _0xc17500.doScene(), await $.wait(_0xc17500.getRandomTime()));
          JSON.parse(controlVideo) && (await _0xc17500.playVideo(), await $.wait(_0xc17500.getRandomTime()));
          JSON.parse(controlStock) && (await _0xc17500.getGroupItems());
          pendingScore = await _0xc17500.getUserTotalPendingScore();
          $.title = "获得待领取积分: " + pendingScore;
          DoubleLog("🎉 当前积分: " + userScore + ", 待领取积分: " + pendingScore);
        } else {
          for (let _0x4d3f34 of taskGroup) {
            const _0x5459c9 = await _0xc17500.getUserSpaceSignInDetail(_0x4d3f34.code),
              _0x842398 = await _0xc17500.assessSignInBonusQualification(_0x5459c9, _0x4d3f34.name);
            await $.wait(_0xc17500.getRandomTime());
            _0x842398 && (await _0xc17500.receiveSignInBonus(_0x5459c9, _0x4d3f34.name), await $.wait(_0xc17500.getRandomTime()));
          }
          pendingScore = await _0xc17500.getUserTotalPendingScore();
          await $.wait(_0xc17500.getRandomTime());
          await _0xc17500.collect();
          await $.wait(_0xc17500.getRandomTime());
          await $.wait(_0xc17500.getRandomTime());
          const _0x1f9cba = (await _0xc17500.getFavors()) ?? [];
          await $.wait(_0xc17500.getRandomTime());
          if (_0x1f9cba.length) {
            for (let _0x375857 of _0x1f9cba) {
              await _0xc17500.likeOrNotLike(_0x375857.objectId, "aliyun-public-like", 1);
              await $.wait(_0xc17500.getRandomTime());
              await _0xc17500.likeOrNotLike(_0x375857.objectId, "aliyun-public-favorite", 1);
              await $.wait(_0xc17500.getRandomTime());
            }
          }
          JSON.parse(controlStock) && (await _0xc17500.getGroupItems());
          let _0x2764b0 = (await _0xc17500.interactData()) ?? {};
          $.title = "本次运行共获得" + (pendingScore || 0) + "积分";
          DoubleLog("🎉 领取积分: " + pendingScore + ", 当前积分: " + _0x2764b0);
        }
      } else {
        $.notifyMsg.push("⛔️ 账号" + (_0xc17500.userName || _0xc17500.index) + " >> Check ck error!");
      }
      $.notifyList.push({
        id: _0xc17500.index,
        avatar: _0xc17500.avatar,
        message: $.notifyMsg
      });
      $.notifyMsg = [];
    }
  } catch (_0x1fd506) {
    $.log("⛔️ main run error => " + _0x1fd506);
    throw new Error("⛔️ main run error => " + _0x1fd506);
  }
}
class UserInfo {
  constructor(_0x9880) {
    this.index = ++userIdx;
    this.token = _0x9880.token || _0x9880;
    this.userId = _0x9880.userId;
    this.userName = _0x9880.userName;
    this.avatar = _0x9880.avatar;
    this.ckStatus = true;
    this.baseUrl = "";
    this.host = "https://developer.aliyun.com/developer/api";
    this.headers = {
      Cookie: this.token,
      "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
      Referer: "https://developer.aliyun.com/"
    };
    this.getRandomTime = () => randomInt(1, 2);
    this.fetch = async _0x5e81da => {
      try {
        if (typeof _0x5e81da === "string") {
          _0x5e81da = {
            url: _0x5e81da
          };
        }
        if (_0x5e81da?.["url"]?.["startsWith"]("/")) {
          _0x5e81da.url = this.host + _0x5e81da.url;
        }
        const _0x443266 = await Request({
          ..._0x5e81da,
          headers: _0x5e81da.headers || this.headers,
          url: _0x5e81da.url || this.baseUrl
        });
        debug(_0x443266, _0x5e81da?.["url"]?.["replace"](/\/+$/, "")["substring"](_0x5e81da?.["url"]?.["lastIndexOf"]("/") + 1));
        if (_0x443266?.["code"] == 40001) {
          throw new Error(_0x443266?.["message"] || "用户需要去登录");
        }
        return _0x443266;
      } catch (_0x4440cb) {
        this.ckStatus = false;
        $.log("⛔️ 请求发起失败！" + _0x4440cb);
      }
    };
  }
  async getUser() {
    try {
      const _0x44d6d4 = {
        url: "/my/user/getUser",
        type: "get"
      };
      await this.fetch(_0x44d6d4);
    } catch (_0x52156c) {
      this.ckStatus = false;
      $.log("⛔️ 获取签到任务列表失败! " + _0x52156c);
    }
  }
  async assessSignInBonusQualification(_0x2c7c66, _0x574373) {
    if (!_0x2c7c66) {
      return null;
    }
    try {
      const _0x271b06 = {
        url: "/sign/assessSignInBonusQualification",
        type: "get",
        params: {
          taskGroupId: _0x2c7c66
        }
      };
      let _0x4ba667 = await this.fetch(_0x271b06);
      return _0x4ba667?.["data"];
    } catch (_0x57c4e2) {
      this.ckStatus = false;
      $.log("⛔️ 查询领奖条件失败! " + _0x57c4e2);
    }
  }
  async receiveSignInBonus(_0x7495b, _0x4948dd) {
    try {
      const _0x5a858a = {
        url: "/sign/receiveSignInBonus",
        type: "post",
        dataType: "form",
        body: {
          taskGroupId: _0x7495b
        }
      };
      let _0x302b4f = await this.fetch(_0x5a858a);
      if (_0x302b4f?.["code"] == "200") {
        const _0x1ea936 = _0x302b4f?.["data"] || 0;
        $.log("✅ 抽奖 - " + (_0x4948dd || "default") + ": 获得 " + _0x1ea936 + " 积分");
      } else {
        $.log("⛔️ 抽奖 - " + (_0x4948dd || "default") + ": " + _0x302b4f?.["message"]);
      }
    } catch (_0x4e0a4f) {
      this.ckStatus = false;
      $.log("⛔️ 抽奖失败! " + _0x4e0a4f);
    }
  }
  async getUserSpaceSignInDetail(_0x31cf97) {
    try {
      const _0x1bb131 = {
        url: "/sign/getUserSpaceSignInDetail",
        type: "get",
        params: {
          excode: _0x31cf97
        }
      };
      let _0x38063a = await this.fetch(_0x1bb131);
      const _0x66769 = _0x38063a?.["data"]?.["taskGroupId"] || null;
      return _0x66769;
    } catch (_0x1d6ab4) {
      this.ckStatus = false;
      $.log("⛔️ 获取签到任务列表失败! " + _0x1d6ab4);
    }
  }
  async getTasks(_0x4716cf) {
    if (!_0x4716cf) {
      return null;
    }
    try {
      const _0x5ad647 = {
        url: "/task/getTaskGroup?groupId=" + _0x4716cf,
        type: "get"
      };
      let _0x2191eb = await this.fetch(_0x5ad647);
      const _0x58d890 = _0x2191eb?.["data"]?.["taskList"];
      let _0x477196 = {};
      if (_0x58d890.length) {
        const _0x21834a = new Date().getTime();
        for (let _0x5889ef of _0x58d890) {
          if (_0x21834a >= _0x5889ef.gmtEnableStart && _0x21834a <= _0x5889ef.gmtEnableEnd) {
            const _0x348e5d = JSON.parse(_0x5889ef.finishRule.replace(/&quot;/g, "\""));
            _0x477196.actionCode = _0x348e5d.actions[0].actionCode;
            _0x477196.activityCode = _0x348e5d.actions[0].actionCode;
            _0x477196.objectId = _0x348e5d.actions[0].objectId;
          }
        }
      }
      return _0x477196;
    } catch (_0x570364) {
      this.ckStatus = false;
      $.log("⛔️ 获取签到任务列表失败! " + _0x570364);
    }
  }
  async signin(_0x21e749, _0x2d26f7) {
    if (!_0x21e749) {
      $.log("✅ 签到 - " + (_0x2d26f7 || "default") + ": 该社区无签到任务");
      return;
    }
    try {
      const _0x26ea71 = {
        url: "/task/actionLog",
        type: "post",
        dataType: "form",
        body: _0x21e749
      };
      let _0x4dddd7 = await this.fetch(_0x26ea71);
      $.log("✅ 签到 - " + (_0x2d26f7 || "default") + ": " + _0x4dddd7?.["message"]);
    } catch (_0x3f0eb8) {
      this.ckStatus = false;
      $.log("⛔️ 签到失败! " + _0x3f0eb8);
    }
  }
  async getArticles() {
    try {
      const _0x177237 = Math.floor(Math.random() * 31) + 1,
        _0x524574 = {
          url: "https://developer.aliyun.com/group/aliware/article_hot?pageNum=" + _0x177237,
          type: "get"
        };
      let _0x3c4654 = await this.fetch(_0x524574);
      const _0x4d1f6a = $.Cheerio.load(_0x3c4654),
        _0x6396d2 = _0x4d1f6a(".community-detail-content"),
        _0xa1b2e2 = _0x6396d2.find(".community-list").map((_0x4f7801, _0x11a8ba) => {
          return {
            id: _0x4d1f6a(_0x11a8ba).find(".feed-item").attr("data-id"),
            name: _0x4d1f6a(_0x11a8ba).find(".feed-item-content-title h3").text()
          };
        }).get(),
        _0x4c4814 = _0xa1b2e2[Math.floor(Math.random() * _0xa1b2e2.length)],
        {
          id: _0xc6f1e8,
          name: _0x328275
        } = _0x4c4814;
      $.log("✅ 随机获取文章id: " + _0xc6f1e8 + ", 标题: " + _0x328275);
      return _0xc6f1e8;
    } catch (_0x2f4026) {
      this.ckStatus = false;
      $.log("⛔️ 获取文章列表失败! " + _0x2f4026);
    }
  }
  async getEbooks() {
    try {
      const _0x17f70b = Math.floor(Math.random() * 501) + 1,
        _0x5973f2 = {
          url: "https://developer.aliyun.com/ebook/index/__0_0_0_" + _0x17f70b,
          type: "get"
        };
      let _0x276984 = await this.fetch(_0x5973f2);
      const _0x1c9be6 = $.Cheerio.load(_0x276984),
        _0x407fa8 = _0x1c9be6(".ebook-home-list"),
        _0x34b2f1 = _0x407fa8.find(".ebook-home-item").map((_0x20d7cc, _0x8c4006) => {
          return {
            id: _0x1c9be6(_0x8c4006).attr("href").replace("/ebook/", ""),
            name: _0x1c9be6(_0x8c4006).find(".ebook-home-title").text()
          };
        }).get(),
        _0x215663 = _0x34b2f1[Math.floor(Math.random() * _0x34b2f1.length)],
        {
          id: _0xc01def,
          name: _0x362d2c
        } = _0x215663;
      $.log("✅ 随机电子书id: " + _0xc01def + ", 标题: " + _0x362d2c);
      return _0xc01def;
    } catch (_0xfcb8a6) {
      this.ckStatus = false;
      $.log("⛔️ 获取电子书列表失败! " + _0xfcb8a6);
    }
  }
  async getAsks() {
    try {
      const _0x21f883 = Math.floor(Math.random() * 31) + 1,
        _0x35d953 = {
          url: "https://developer.aliyun.com/ask?pageNum=" + _0x21f883,
          type: "get"
        };
      let _0x21a196 = await this.fetch(_0x35d953);
      const _0x3f3437 = $.Cheerio.load(_0x21a196),
        _0x5341fa = _0x3f3437(".askProduct-list"),
        _0x1772a5 = _0x5341fa.find(".askProduct-item").map((_0x3bf0f7, _0x580a7c) => {
          return {
            id: _0x3f3437(_0x580a7c).attr("data-id") || "",
            name: _0x3f3437(_0x580a7c).find(".askProduct-item-title-text h3").text() || "",
            answer: parseInt(_0x3f3437(_0x580a7c).find(".askProduct-item-info-answer").text()) || ""
          };
        }).filter((_0xfd811d, _0x3ac6dc) => _0x3ac6dc.answer > 0).get(),
        _0x27367d = _0x1772a5[Math.floor(Math.random() * _0x1772a5.length)];
      if (_0x27367d?.["id"] && _0x27367d?.["name"]) {
        const {
          id: _0x14c0c6,
          name: _0x34c830
        } = _0x27367d;
        $.log("✅ 随机获取问答id: " + _0x14c0c6 + ", 标题: " + _0x34c830);
        return _0x27367d;
      }
      return null;
    } catch (_0x2c7844) {
      this.ckStatus = false;
      $.log("⛔️ 获取问答列表失败! " + _0x2c7844);
    }
  }
  async getAskDetail(_0x3c853b) {
    try {
      const _0x4d9fd4 = {
        url: "https://developer.aliyun.com/ask/" + _0x3c853b.id,
        type: "get"
      };
      let _0x4a8d4d = await this.fetch(_0x4d9fd4);
      const _0x197405 = $.Cheerio.load(_0x4a8d4d),
        _0x95c7bb = _0x197405(".answer-list"),
        _0x496a64 = _0x95c7bb.find(".answer-item").map((_0x290648, _0x492ae4) => {
          return {
            id: _0x197405(_0x492ae4).attr("data-id") || ""
          };
        }).get(),
        _0x777a55 = _0x496a64[Math.floor(Math.random() * _0x3c853b.answer)];
      if (_0x777a55) {
        const {
          id: _0x2a3950
        } = _0x777a55;
        $.log("✅ 随机获取问题问答id: " + _0x2a3950);
        return _0x2a3950;
      }
      return null;
    } catch (_0x49424e) {
      this.ckStatus = false;
      $.log("⛔️ 随机获取问题问答失败! " + _0x49424e);
    }
  }
  async likeOrNotLike(_0x5af432, _0x2ed0dc, _0x3541c6) {
    try {
      const _0x4af17a = {
        url: "https://ucc.aliyun.com/uccPagingComponent/likeOrNotLike",
        type: "get",
        params: {
          bizCategory: "yq-article",
          actionCode: _0x2ed0dc,
          objectId: _0x5af432,
          status: _0x3541c6,
          uccCsrfToken: await this.getUccCsrfToken(),
          callback: getCallback()
        }
      };
      await this.fetch(_0x4af17a);
      let _0x33d148 = "文章" + (_0x3541c6 === 1 ? "取消" : "");
      if (_0x2ed0dc === "aliyun-public-like") {
        _0x33d148 += "点赞";
      } else {
        if (_0x2ed0dc === "aliyun-public-favorite") {
          _0x33d148 += "收藏";
        } else {
          _0x2ed0dc === "aliyun-public-share" && (_0x33d148 += "分享");
        }
      }
      $.log("✅ " + _0x33d148 + "成功: " + _0x5af432);
    } catch (_0x56df3a) {
      this.ckStatus = false;
      $.log("⛔️ " + taskType + "失败! " + _0x56df3a);
    }
  }
  async getCsrfToken(_0x3f985f, _0x20ff73) {
    try {
      const _0x4b9efd = {
          url: "https://developer.aliyun.com/csrfToken",
          type: "get",
          headers: {
            Cookie: this.token,
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(Aliyun/6.7.1) WindVane/8.7.2 1170x2532 WK",
            Referer: "https://developer.aliyun.com/" + _0x20ff73 + "/" + _0x3f985f
          }
        },
        _0x4948f3 = await this.fetch(_0x4b9efd);
      return _0x4948f3?.["token"];
    } catch (_0x12b621) {
      this.ckStatus = false;
      $.log("⛔️ 获取 csrf 失败! " + _0x12b621);
    }
  }
  async voteAnswer(_0x41d7ed, _0x29baf3, _0x2dc533, _0x750f28) {
    try {
      const _0x1383be = {
        url: "https://developer.aliyun.com/developer/api/my/ask/voteAnswer",
        type: "post",
        dataType: "form",
        headers: {
          Cookie: this.token,
          "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(Aliyun/6.7.1) WindVane/8.7.2 1170x2532 WK",
          Referer: "https://developer.aliyun.com/ask/" + _0x41d7ed
        },
        params: {
          p_csrf: _0x2dc533
        },
        body: {
          id: _0x29baf3,
          votes: _0x750f28
        }
      };
      await this.fetch(_0x1383be);
      $.log("✅ 回答点赞: " + _0x41d7ed + "-" + _0x29baf3);
    } catch (_0x194e66) {
      this.ckStatus = false;
      $.log("⛔️ 回答点赞失败! " + _0x194e66);
    }
  }
  async addBookComment(_0x3bb4d1, _0x4b6b9c) {
    try {
      const _0x37b32b = {
          url: "https://developer.aliyun.com/developer/api/ebook/mark/add",
          type: "post",
          dataType: "json",
          headers: {
            Cookie: this.token,
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(Aliyun/6.7.1) WindVane/8.7.2 1170x2532 WK",
            Referer: "https://developer.aliyun.com/ebook/" + _0x3bb4d1
          },
          params: {
            p_csrf: _0x4b6b9c
          },
          body: {
            eBookId: _0x3bb4d1,
            score: 10,
            content: "很棒的一本书"
          }
        },
        _0x2072a9 = await this.fetch(_0x37b32b);
      _0x2072a9?.["code"] == "200" ? $.log("✅ 评价电子书: " + _0x3bb4d1) : $.log("⛔️ 评价电子书失败! " + _0x2072a9?.["message"]);
    } catch (_0x194073) {
      this.ckStatus = false;
      $.log("⛔️ 评价电子书失败! " + _0x194073);
    }
  }
  async getFavors() {
    try {
      const _0x5d5bd3 = {
          url: "https://developer.aliyun.com/developer/api/my/subscribe/listUserFavor",
          type: "get",
          params: {
            pageNum: 1,
            pageSize: 10,
            type: 1
          }
        },
        _0x3c5f64 = await this.fetch(_0x5d5bd3),
        {
          list: _0xa7b2df
        } = _0x3c5f64?.["data"];
      if (_0xa7b2df.length) {
        $.log("✅ 开始取消文章的点赞与收藏记录");
        return _0xa7b2df;
      }
      return [];
    } catch (_0x3b85ec) {
      this.ckStatus = false;
      $.log("⛔️ " + (type === "aliyun-public-like" ? "文章点赞" : "文章收藏") + "失败! " + _0x3b85ec);
    }
  }
  async addComment(_0x5c615b) {
    try {
      const _0x122e33 = {
        url: "https://ucc.aliyun.com/uccPagingComponent/addComment",
        type: "get",
        params: {
          content: encodeURIComponent("很有用的文章，非常受用，感谢博主"),
          objectId: _0x5c615b,
          bizCategory: "yq-comment-type-article",
          commentType: 0,
          sourceAppCode: "developer-ecology",
          sourceBizCategory: "developer-ecology-group",
          uccCsrfToken: await this.getUccCsrfToken(),
          callback: getCallback()
        }
      };
      await this.fetch(_0x122e33);
      $.log("✅ 文章评论: " + _0x5c615b);
    } catch (_0x36f9bb) {
      this.ckStatus = false;
      $.log("⛔️ 文章点赞失败! " + _0x36f9bb);
    }
  }
  async doScene() {
    const _0xbeffd6 = this.token.match(new RegExp("c_csrf=([^;]*)"))[1];
    await this.getSceneList();
    await $.wait(this.getRandomTime());
    const _0x109c54 = await this.getSceneDetailPageInfoById();
    await $.wait(this.getRandomTime());
    _0x109c54 ? (await this.getSceneStartPageInfoById(), await $.wait(this.getRandomTime()), resourceFrom === "2" ? (await this.startSceneById(_0xbeffd6), await $.wait(this.getRandomTime()), await this.closeSceneById(_0xbeffd6), await $.wait(this.getRandomTime())) : await this.doScene()) : await this.doScene();
  }
  async getSceneList() {
    try {
      const _0x2c9fdc = Math.floor(Math.random() * 26) + 1,
        _0x46862c = 21,
        _0x11ed43 = {
          url: "https://developer.aliyun.com/adc/api/getSceneList",
          type: "get",
          params: {
            tags: encodeURIComponent(","),
            difficulty: "",
            orderBy: "useCountTotal",
            pageNum: _0x2c9fdc,
            pageSize: _0x46862c
          },
          headers: {
            Cookie: this.headers.Cookie,
            Referer: "https://developer.aliyun.com/adc/labs/",
            "User-Agent": this.headers["User-Agent"]
          }
        },
        _0x420fdc = await this.fetch(_0x11ed43),
        _0x32ec99 = _0x420fdc?.["data"]?.["list"];
      if (_0x32ec99.length) {
        const _0x1210da = _0x32ec99[Math.floor(Math.random() * _0x32ec99.length)];
        sceneId = _0x1210da?.["id"];
        $.log("✅ 获取场景: " + _0x1210da.name + "[" + sceneId + "]");
      } else {
        $.log("⛔️ 获取场景失败! " + e);
      }
    } catch (_0x12ed82) {
      this.ckStatus = false;
      $.log("⛔️ 获取场景失败! " + _0x12ed82);
    }
  }
  async getSceneDetailPageInfoById() {
    try {
      const _0x551353 = {
          url: "https://developer.aliyun.com/adc/api/getSceneDetailPageInfoById",
          type: "get",
          params: {
            id: sceneId
          },
          headers: {
            cookie: this.headers.Cookie,
            referer: "https://developer.aliyun.com/adc/scenario/" + sceneId,
            "user-agent": this.headers["User-Agent"]
          }
        },
        _0x5f152d = await this.fetch(_0x551353),
        _0x3abff0 = _0x5f152d?.["data"]?.["developerAdcExperienceStatusVO"]?.["buttonCode"];
      return _0x3abff0 ? _0x3abff0 === "1" ? ($.log("✅ 确认场景状态: " + _0x5f152d?.["data"]?.["id"]), _0x5f152d?.["data"]?.["id"]) : ($.log("⛔️ 确认场景状态: " + _0x5f152d?.["data"]?.["id"] + " 已完成，将重新获取场景"), null) : ($.log("⛔️ 确认场景状态: " + _0x5f152d?.["data"]?.["id"] + " 状态异常，将重新获取场景"), null);
    } catch (_0x5a3c2b) {
      this.ckStatus = false;
      $.log("⛔️ 确认场景状态失败! " + _0x5a3c2b);
    }
  }
  async getSceneStartPageInfoById() {
    try {
      const _0x182772 = {
          url: "https://developer.aliyun.com/adc/api/getSceneStartPageInfoById",
          type: "get",
          params: {
            id: sceneId
          },
          headers: {
            cookie: this.headers.Cookie,
            referer: "https://developer.aliyun.com/adc/scenario/exp/" + sceneId,
            "user-agent": this.headers["User-Agent"]
          }
        },
        _0x13c1b2 = await this.fetch(_0x182772);
      ip = _0x13c1b2?.["data"]?.["ip"];
      _0x13c1b2?.["data"]?.["resourceFrom"]["indexOf"]("1") > -1 ? resourceFrom = "1" : resourceFrom = "2";
      _0x13c1b2?.["data"]?.["resourceCardInfoDTOList"]["length"] && (sectionId = _0x13c1b2?.["data"]?.["resourceCardInfoDTOList"][0]?.["id"]);
      $.log("✅ 获取场景初始化信息: " + sceneId);
    } catch (_0x5a0a85) {
      this.ckStatus = false;
      $.log("⛔️ 获取场景初始化信息失败! " + _0x5a0a85);
    }
  }
  async startSceneById(_0xfb8c6e) {
    try {
      const _0x23127f = {
          url: "https://developer.aliyun.com/adc/api/startSceneById",
          type: "post",
          dataType: "form",
          headers: {
            Host: "developer.aliyun.com",
            H_csrf: _0xfb8c6e,
            "X-XSRF-TOKEN": _0xfb8c6e,
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
            Cookie: this.token,
            Referer: "https://developer.aliyun.com/adc/scenario/exp/" + sceneId
          },
          params: {
            p_csrf: _0xfb8c6e
          },
          body: {
            id: sceneId,
            resourceFrom: resourceFrom
          }
        },
        _0x498020 = await this.fetch(_0x23127f),
        {
          code: _0x4457a2,
          message: _0x20f985
        } = _0x498020;
      console.log((_0x4457a2 === "200" ? "✅" : "⛔️") + " 开始场景: " + sceneId + ", " + _0x20f985);
    } catch (_0xcacf62) {
      this.ckStatus = false;
      $.log("⛔️ 开始场景失败! " + _0xcacf62);
    }
  }
  async closeSceneById(_0x212e51) {
    try {
      const _0x549e7c = {
          url: "https://developer.aliyun.com/adc/api/closeSceneById",
          type: "post",
          dataType: "form",
          body: {
            sceneId: sceneId,
            forceClose: "true"
          },
          params: {
            p_csrf: _0x212e51
          },
          headers: {
            Host: "developer.aliyun.com",
            H_csrf: _0x212e51,
            "X-XSRF-TOKEN": _0x212e51,
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
            Cookie: this.token,
            Referer: "https://developer.aliyun.com/adc/scenario/exp/" + sceneId
          }
        },
        _0x18d5eb = await this.fetch(_0x549e7c),
        {
          code: _0x4e485d,
          message: _0x5ebc35
        } = _0x18d5eb;
      console.log((_0x4e485d === "200" ? "✅" : "⛔️") + " 结束场景: " + sceneId + ", " + _0x5ebc35);
    } catch (_0x169348) {
      this.ckStatus = false;
      $.log("⛔️ 结束场景失败! " + _0x169348);
    }
  }
  async createResourceById(_0x48af42) {
    try {
      const _0x286015 = {
          url: "https://developer.aliyun.com/adc/api/createResourceById",
          type: "post",
          dataType: "form",
          body: {
            id: sceneId,
            sectionId: sectionId,
            ip: ip
          },
          params: {
            p_csrf: _0x48af42
          },
          headers: {
            Host: "developer.aliyun.com",
            H_csrf: _0x48af42,
            "X-XSRF-TOKEN": _0x48af42,
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
            Cookie: this.token,
            Referer: "https://developer.aliyun.com/adc/scenario/exp/" + sceneId
          }
        },
        _0x59abad = await this.fetch(_0x286015);
      _0x59abad?.["data"] && console.log("✅ 开始创建场景资源: " + sceneId);
    } catch (_0x44de26) {
      this.ckStatus = false;
      $.log("⛔️ 创建场景资源失败! " + _0x44de26);
    }
  }
  async getResourceCardInfoById() {
    try {
      const _0x29c00e = {
          url: "https://developer.aliyun.com/adc/api/getResourceCardInfoById",
          type: "get",
          params: {
            sceneId: sceneId,
            sectionId: sectionId
          },
          headers: {
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
            Cookie: this.token,
            Referer: "https://developer.aliyun.com/adc/scenario/exp/" + sceneId
          }
        },
        _0x437ae9 = await this.fetch(_0x29c00e),
        {
          code: _0x36e2e8,
          data: _0x22043e
        } = _0x437ae9;
      if (_0x36e2e8 === "200" && _0x22043e) {
        if (_0x22043e?.["status"] !== "RUNNING") {
          await $.wait(this.getRandomTime());
          await this.getResourceCardInfoById();
        } else {
          console.log("✅ 创建场景资源完毕: " + sceneId);
          return true;
        }
      }
    } catch (_0x3184f0) {
      this.ckStatus = false;
      $.log("⛔️ 创建场景资源失败! " + _0x3184f0);
    }
  }
  async getVideoDetail(_0x5f3fc1) {
    try {
      const _0x38c61b = Date.now(),
        _0x451b2e = getCallback(_0x38c61b),
        _0x58f751 = {
          url: "https://ucc.aliyun.com/api/ucc/live/open/detail",
          type: "get",
          params: {
            _: _0x38c61b,
            callback: _0x451b2e,
            version: "1.1.23",
            id: _0x5f3fc1
          },
          headers: {
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
            Cookie: this.token,
            Referer: "https://developer.aliyun.com/live/" + _0x5f3fc1
          }
        },
        _0x46c6d5 = await this.fetch(_0x58f751),
        _0x4202fd = getJson(_0x46c6d5),
        _0x1ef603 = _0x4202fd?.["data"]?.["live"]?.["name"],
        _0x3e391f = _0x4202fd?.["data"]?.["live"]?.["duration"];
      console.log("✅ 获取视频信息成功: " + _0x1ef603 + ", 时长: " + _0x3e391f + " 秒");
      return {
        videoName: _0x1ef603,
        videoTime: _0x3e391f
      };
    } catch (_0x17a3fe) {
      this.ckStatus = false;
      $.log("⛔️ 获取视频信息失败! " + _0x17a3fe);
      return null;
    }
  }
  async getVideoView(_0x1e1e24, _0x174a43) {
    try {
      const _0x17cdc8 = Date.now(),
        _0x475c76 = getCallback(_0x17cdc8),
        _0x83fe0e = {
          url: "https://ucc.aliyun.com/api/ucc/live/open/view",
          type: "get",
          params: {
            _: _0x17cdc8,
            callback: _0x475c76,
            version: "1.1.23",
            id: _0x1e1e24,
            sessionId: _0x174a43
          },
          headers: {
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
            Cookie: this.token,
            Referer: "https://developer.aliyun.com/live/" + _0x1e1e24
          }
        };
      await this.fetch(_0x83fe0e);
    } catch (_0xf47ac) {
      this.ckStatus = false;
      $.log("⛔️ 获取视频视图失败! " + _0xf47ac);
    }
  }
  async play(_0x19cac2, _0x4aa617, _0x3f5f00) {
    try {
      const _0x2ba447 = Date.now(),
        _0x23605f = getCallback(_0x2ba447),
        _0xb88426 = {
          url: "https://ucc.aliyun.com/api/ucc/live/open/play",
          type: "get",
          params: {
            _: _0x2ba447,
            callback: _0x23605f,
            version: "1.1.23",
            id: _0x4aa617,
            sessionId: _0x3f5f00
          },
          headers: {
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
            Cookie: this.token,
            Referer: "https://developer.aliyun.com/live/" + _0x4aa617
          }
        };
      await this.fetch(_0xb88426);
      console.log("✅ 开始播放视频: " + _0x19cac2);
    } catch (_0x3d7d6d) {
      this.ckStatus = false;
      $.log("⛔️ 播放视频失败! " + _0x3d7d6d);
    }
  }
  async danmu(_0x4538f3, _0x3917d4) {
    try {
      const _0x21aff2 = Date.now(),
        _0xfaf2fc = getCallback(_0x21aff2),
        _0x32e09c = {
          url: "https://ucc.aliyun.com/api/ucc/live/open/danmu",
          type: "get",
          params: {
            _: _0x21aff2,
            callback: _0xfaf2fc,
            version: "1.1.23",
            id: _0x4538f3,
            seek: _0x3917d4
          },
          headers: {
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
            Cookie: this.token,
            Referer: "https://developer.aliyun.com/live/" + _0x4538f3
          }
        },
        _0x436c79 = await this.fetch(_0x32e09c),
        _0x3b80cb = getJson(_0x436c79);
      console.log("✅ 获取第 " + _0x3917d4 + " 秒弹幕: " + JSON.stringify(_0x3b80cb?.["data"]));
    } catch (_0x1899b3) {
      this.ckStatus = false;
      $.log("⛔️ 获取弹幕失败! " + _0x1899b3);
    }
  }
  async online(_0xf9cc65, _0x4b080b) {
    try {
      const _0x418c19 = Date.now(),
        _0x369e23 = getCallback(_0x418c19),
        _0x54fd5b = {
          url: "https://ucc.aliyun.com/api/ucc/live/open/online",
          type: "get",
          params: {
            _: _0x418c19,
            callback: _0x369e23,
            version: "1.1.23",
            id: _0xf9cc65,
            sessionId: _0x4b080b
          },
          headers: {
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
            Cookie: this.token,
            Referer: "https://developer.aliyun.com/live/" + _0xf9cc65
          }
        };
      await this.fetch(_0x54fd5b);
      console.log("✅ 在线心跳确认成功");
    } catch (_0x1be8cf) {
      this.ckStatus = false;
      $.log("⛔️ 在线心跳确认! " + _0x1be8cf);
    }
  }
  async playVideo() {
    const _0x42c6be = "253842",
      _0x6907e1 = getSessionId(this.token, _0x42c6be),
      {
        videoName: _0x152746,
        videoTime: _0x2d1a1a
      } = await this.getVideoDetail(_0x42c6be);
    await $.wait(this.getRandomTime());
    await this.getVideoView(_0x42c6be, _0x6907e1);
    await $.wait(this.getRandomTime());
    await this.play(_0x152746, _0x42c6be, _0x6907e1);
    await $.wait(this.getRandomTime());
    for (let _0x5682e6 = 3; _0x5682e6 < _0x2d1a1a; _0x5682e6 += 3) {
      await this.danmu(_0x42c6be, _0x5682e6);
      await $.wait(3000);
      _0x5682e6 == 60 && (await this.online(_0x42c6be, _0x6907e1));
    }
    console.log("✅ 视频播放完毕: " + _0x152746);
  }
  async getGroupItems() {
    try {
      const _0x48f601 = {
          url: "/lm/getGroupItems?pageNum=1&pageSize=50",
          type: "get"
        },
        _0x4ad0b6 = await this.fetch(_0x48f601),
        {
          list: _0x494c27
        } = _0x4ad0b6?.["data"];
      if (_0x494c27.length) {
        $.log("✅ 开始查询库存:");
        for (let _0x3d549a of _0x494c27) {
          $.log("🎁 " + _0x3d549a.itemTitle.replace(/【.*?】/g, "") + ": " + _0x3d549a.points + " 分【" + _0x3d549a.statusStr + "】");
        }
      }
    } catch (_0x37ea50) {
      $.log("⛔️ 查询待收获积分列表失败! " + _0x37ea50);
    }
  }
  async interactData() {
    try {
      const _0x2af767 = {
        url: "/my/score/getUserScore?appCode=developer",
        type: "get"
      };
      let _0x410f5d = await this.fetch(_0x2af767);
      return _0x410f5d?.["data"];
    } catch (_0x1977df) {
      $.log("⛔️ 查询待收获积分列表失败! " + _0x1977df);
    }
  }
  async getUserTotalPendingScore() {
    try {
      const _0x255dda = {
        url: "/score/pending/getUserTotalPendingScore?appCode=developer",
        type: "get"
      };
      let _0xd4267a = await this.fetch(_0x255dda);
      $.log("✅ 待领取积分: " + _0xd4267a?.["data"]);
      return _0xd4267a?.["data"];
    } catch (_0x4984ad) {
      $.log("⛔️ 查询待领取积分失败! " + _0x4984ad);
    }
  }
  async collect() {
    try {
      const _0x4f6134 = {
        url: "/score/pending/receiveAllPendingScore?appCode=developer",
        type: "get"
      };
      let _0x5094a6 = await this.fetch(_0x4f6134);
      $.log("✅ 收取积分: " + _0x5094a6?.["data"]);
      return _0x5094a6?.["data"];
    } catch (_0x218567) {
      $.log("⛔️ 收取积分失败! " + _0x218567);
    }
  }
  async getUccCsrfToken() {
    try {
      const _0x40283e = {
        url: "https://ucc.aliyun.com/uccPagingComponent/getUser",
        type: "get",
        params: {
          uccCsrfToken: "",
          callback: getCallback()
        }
      };
      let _0x3273a8 = await this.fetch(_0x40283e);
      const _0x4e54b3 = _0x3273a8.indexOf("{"),
        _0x32d38d = _0x3273a8.lastIndexOf("}"),
        _0x540a75 = _0x3273a8.substring(_0x4e54b3, _0x32d38d + 1),
        _0x4cf1fd = JSON.parse(_0x540a75);
      return _0x4cf1fd.data.uccCsrfToken;
    } catch (_0x1f1a15) {
      $.log("⛔️ 获取UccCsrfToken失败! " + _0x1f1a15);
    }
  }
}
function getCallback(_0x5deec1) {
  _0x5deec1 = _0x5deec1 || Date.now();
  return "jsonp_" + _0x5deec1 + "_" + Math.ceil(100000 * Math.random());
}
function getJson(_0x1f9cb8) {
  return JSON.parse(_0x1f9cb8.replace(/.*\(/, "").replace(/\)/, ""));
}
function getSessionId(_0x53c902, _0x3fc8b9) {
  function _0x137d42(_0x5d05d2, _0x23d059) {
    var _0x25d3d9 = (65535 & _0x5d05d2) + (65535 & _0x23d059);
    return (_0x5d05d2 >> 16) + (_0x23d059 >> 16) + (_0x25d3d9 >> 16) << 16 | 65535 & _0x25d3d9;
  }
  function _0x2f8b56(_0x3cb206, _0x3b83b4) {
    return _0x3cb206 << _0x3b83b4 | _0x3cb206 >>> 32 - _0x3b83b4;
  }
  function _0x1e821a(_0xce4859, _0x3e05a9, _0x46e3e4, _0x55aaa6, _0x3789c9, _0x5a4af6) {
    return _0x137d42(_0x2f8b56(_0x137d42(_0x137d42(_0x3e05a9, _0xce4859), _0x137d42(_0x55aaa6, _0x5a4af6)), _0x3789c9), _0x46e3e4);
  }
  function _0x556674(_0x4b0996, _0x5b0cf4, _0x3134a9, _0x5834c7, _0xe9da30, _0x2e94c5, _0x2f1c22) {
    return _0x1e821a(_0x5b0cf4 & _0x3134a9 | ~_0x5b0cf4 & _0x5834c7, _0x4b0996, _0x5b0cf4, _0xe9da30, _0x2e94c5, _0x2f1c22);
  }
  function _0x6edb37(_0x2cc02a, _0x23c0b8, _0x41a0a2, _0x33aa30, _0x4275f1, _0x6f2301, _0x236ce1) {
    return _0x1e821a(_0x23c0b8 & _0x33aa30 | _0x41a0a2 & ~_0x33aa30, _0x2cc02a, _0x23c0b8, _0x4275f1, _0x6f2301, _0x236ce1);
  }
  function _0x44c910(_0x51ee38, _0x41f5c5, _0xc0a5a7, _0x422b04, _0x2827cd, _0x2926bf, _0x4b2489) {
    return _0x1e821a(_0x41f5c5 ^ _0xc0a5a7 ^ _0x422b04, _0x51ee38, _0x41f5c5, _0x2827cd, _0x2926bf, _0x4b2489);
  }
  function _0xeaacd0(_0x37b302, _0x2615c6, _0x5eb8d8, _0x2b74e2, _0x55c746, _0x41df57, _0x46b3d3) {
    return _0x1e821a(_0x5eb8d8 ^ (_0x2615c6 | ~_0x2b74e2), _0x37b302, _0x2615c6, _0x55c746, _0x41df57, _0x46b3d3);
  }
  function _0x9cc193(_0x5c153a, _0x42b568) {
    var _0x24907b, _0x4edf31, _0x15d9bc, _0x5a2b74, _0x2cc331;
    _0x5c153a[_0x42b568 >> 5] |= 128 << _0x42b568 % 32;
    _0x5c153a[14 + (_0x42b568 + 64 >>> 9 << 4)] = _0x42b568;
    var _0x384ad4 = 1732584193,
      _0x3bb7b3 = -271733879,
      _0x208747 = -1732584194,
      _0x223c56 = 271733878;
    for (_0x24907b = 0; _0x24907b < _0x5c153a.length; _0x24907b += 16) {
      _0x4edf31 = _0x384ad4;
      _0x15d9bc = _0x3bb7b3;
      _0x5a2b74 = _0x208747;
      _0x2cc331 = _0x223c56;
      _0x3bb7b3 = _0xeaacd0(_0x3bb7b3 = _0xeaacd0(_0x3bb7b3 = _0xeaacd0(_0x3bb7b3 = _0xeaacd0(_0x3bb7b3 = _0x44c910(_0x3bb7b3 = _0x44c910(_0x3bb7b3 = _0x44c910(_0x3bb7b3 = _0x44c910(_0x3bb7b3 = _0x6edb37(_0x3bb7b3 = _0x6edb37(_0x3bb7b3 = _0x6edb37(_0x3bb7b3 = _0x6edb37(_0x3bb7b3 = _0x556674(_0x3bb7b3 = _0x556674(_0x3bb7b3 = _0x556674(_0x3bb7b3 = _0x556674(_0x3bb7b3, _0x208747 = _0x556674(_0x208747, _0x223c56 = _0x556674(_0x223c56, _0x384ad4 = _0x556674(_0x384ad4, _0x3bb7b3, _0x208747, _0x223c56, _0x5c153a[_0x24907b], 7, -680876936), _0x3bb7b3, _0x208747, _0x5c153a[_0x24907b + 1], 12, -389564586), _0x384ad4, _0x3bb7b3, _0x5c153a[_0x24907b + 2], 17, 606105819), _0x223c56, _0x384ad4, _0x5c153a[_0x24907b + 3], 22, -1044525330), _0x208747 = _0x556674(_0x208747, _0x223c56 = _0x556674(_0x223c56, _0x384ad4 = _0x556674(_0x384ad4, _0x3bb7b3, _0x208747, _0x223c56, _0x5c153a[_0x24907b + 4], 7, -176418897), _0x3bb7b3, _0x208747, _0x5c153a[_0x24907b + 5], 12, 1200080426), _0x384ad4, _0x3bb7b3, _0x5c153a[_0x24907b + 6], 17, -1473231341), _0x223c56, _0x384ad4, _0x5c153a[_0x24907b + 7], 22, -45705983), _0x208747 = _0x556674(_0x208747, _0x223c56 = _0x556674(_0x223c56, _0x384ad4 = _0x556674(_0x384ad4, _0x3bb7b3, _0x208747, _0x223c56, _0x5c153a[_0x24907b + 8], 7, 1770035416), _0x3bb7b3, _0x208747, _0x5c153a[_0x24907b + 9], 12, -1958414417), _0x384ad4, _0x3bb7b3, _0x5c153a[_0x24907b + 10], 17, -42063), _0x223c56, _0x384ad4, _0x5c153a[_0x24907b + 11], 22, -1990404162), _0x208747 = _0x556674(_0x208747, _0x223c56 = _0x556674(_0x223c56, _0x384ad4 = _0x556674(_0x384ad4, _0x3bb7b3, _0x208747, _0x223c56, _0x5c153a[_0x24907b + 12], 7, 1804603682), _0x3bb7b3, _0x208747, _0x5c153a[_0x24907b + 13], 12, -40341101), _0x384ad4, _0x3bb7b3, _0x5c153a[_0x24907b + 14], 17, -1502002290), _0x223c56, _0x384ad4, _0x5c153a[_0x24907b + 15], 22, 1236535329), _0x208747 = _0x6edb37(_0x208747, _0x223c56 = _0x6edb37(_0x223c56, _0x384ad4 = _0x6edb37(_0x384ad4, _0x3bb7b3, _0x208747, _0x223c56, _0x5c153a[_0x24907b + 1], 5, -165796510), _0x3bb7b3, _0x208747, _0x5c153a[_0x24907b + 6], 9, -1069501632), _0x384ad4, _0x3bb7b3, _0x5c153a[_0x24907b + 11], 14, 643717713), _0x223c56, _0x384ad4, _0x5c153a[_0x24907b], 20, -373897302), _0x208747 = _0x6edb37(_0x208747, _0x223c56 = _0x6edb37(_0x223c56, _0x384ad4 = _0x6edb37(_0x384ad4, _0x3bb7b3, _0x208747, _0x223c56, _0x5c153a[_0x24907b + 5], 5, -701558691), _0x3bb7b3, _0x208747, _0x5c153a[_0x24907b + 10], 9, 38016083), _0x384ad4, _0x3bb7b3, _0x5c153a[_0x24907b + 15], 14, -660478335), _0x223c56, _0x384ad4, _0x5c153a[_0x24907b + 4], 20, -405537848), _0x208747 = _0x6edb37(_0x208747, _0x223c56 = _0x6edb37(_0x223c56, _0x384ad4 = _0x6edb37(_0x384ad4, _0x3bb7b3, _0x208747, _0x223c56, _0x5c153a[_0x24907b + 9], 5, 568446438), _0x3bb7b3, _0x208747, _0x5c153a[_0x24907b + 14], 9, -1019803690), _0x384ad4, _0x3bb7b3, _0x5c153a[_0x24907b + 3], 14, -187363961), _0x223c56, _0x384ad4, _0x5c153a[_0x24907b + 8], 20, 1163531501), _0x208747 = _0x6edb37(_0x208747, _0x223c56 = _0x6edb37(_0x223c56, _0x384ad4 = _0x6edb37(_0x384ad4, _0x3bb7b3, _0x208747, _0x223c56, _0x5c153a[_0x24907b + 13], 5, -1444681467), _0x3bb7b3, _0x208747, _0x5c153a[_0x24907b + 2], 9, -51403784), _0x384ad4, _0x3bb7b3, _0x5c153a[_0x24907b + 7], 14, 1735328473), _0x223c56, _0x384ad4, _0x5c153a[_0x24907b + 12], 20, -1926607734), _0x208747 = _0x44c910(_0x208747, _0x223c56 = _0x44c910(_0x223c56, _0x384ad4 = _0x44c910(_0x384ad4, _0x3bb7b3, _0x208747, _0x223c56, _0x5c153a[_0x24907b + 5], 4, -378558), _0x3bb7b3, _0x208747, _0x5c153a[_0x24907b + 8], 11, -2022574463), _0x384ad4, _0x3bb7b3, _0x5c153a[_0x24907b + 11], 16, 1839030562), _0x223c56, _0x384ad4, _0x5c153a[_0x24907b + 14], 23, -35309556), _0x208747 = _0x44c910(_0x208747, _0x223c56 = _0x44c910(_0x223c56, _0x384ad4 = _0x44c910(_0x384ad4, _0x3bb7b3, _0x208747, _0x223c56, _0x5c153a[_0x24907b + 1], 4, -1530992060), _0x3bb7b3, _0x208747, _0x5c153a[_0x24907b + 4], 11, 1272893353), _0x384ad4, _0x3bb7b3, _0x5c153a[_0x24907b + 7], 16, -155497632), _0x223c56, _0x384ad4, _0x5c153a[_0x24907b + 10], 23, -1094730640), _0x208747 = _0x44c910(_0x208747, _0x223c56 = _0x44c910(_0x223c56, _0x384ad4 = _0x44c910(_0x384ad4, _0x3bb7b3, _0x208747, _0x223c56, _0x5c153a[_0x24907b + 13], 4, 681279174), _0x3bb7b3, _0x208747, _0x5c153a[_0x24907b], 11, -358537222), _0x384ad4, _0x3bb7b3, _0x5c153a[_0x24907b + 3], 16, -722521979), _0x223c56, _0x384ad4, _0x5c153a[_0x24907b + 6], 23, 76029189), _0x208747 = _0x44c910(_0x208747, _0x223c56 = _0x44c910(_0x223c56, _0x384ad4 = _0x44c910(_0x384ad4, _0x3bb7b3, _0x208747, _0x223c56, _0x5c153a[_0x24907b + 9], 4, -640364487), _0x3bb7b3, _0x208747, _0x5c153a[_0x24907b + 12], 11, -421815835), _0x384ad4, _0x3bb7b3, _0x5c153a[_0x24907b + 15], 16, 530742520), _0x223c56, _0x384ad4, _0x5c153a[_0x24907b + 2], 23, -995338651), _0x208747 = _0xeaacd0(_0x208747, _0x223c56 = _0xeaacd0(_0x223c56, _0x384ad4 = _0xeaacd0(_0x384ad4, _0x3bb7b3, _0x208747, _0x223c56, _0x5c153a[_0x24907b], 6, -198630844), _0x3bb7b3, _0x208747, _0x5c153a[_0x24907b + 7], 10, 1126891415), _0x384ad4, _0x3bb7b3, _0x5c153a[_0x24907b + 14], 15, -1416354905), _0x223c56, _0x384ad4, _0x5c153a[_0x24907b + 5], 21, -57434055), _0x208747 = _0xeaacd0(_0x208747, _0x223c56 = _0xeaacd0(_0x223c56, _0x384ad4 = _0xeaacd0(_0x384ad4, _0x3bb7b3, _0x208747, _0x223c56, _0x5c153a[_0x24907b + 12], 6, 1700485571), _0x3bb7b3, _0x208747, _0x5c153a[_0x24907b + 3], 10, -1894986606), _0x384ad4, _0x3bb7b3, _0x5c153a[_0x24907b + 10], 15, -1051523), _0x223c56, _0x384ad4, _0x5c153a[_0x24907b + 1], 21, -2054922799), _0x208747 = _0xeaacd0(_0x208747, _0x223c56 = _0xeaacd0(_0x223c56, _0x384ad4 = _0xeaacd0(_0x384ad4, _0x3bb7b3, _0x208747, _0x223c56, _0x5c153a[_0x24907b + 8], 6, 1873313359), _0x3bb7b3, _0x208747, _0x5c153a[_0x24907b + 15], 10, -30611744), _0x384ad4, _0x3bb7b3, _0x5c153a[_0x24907b + 6], 15, -1560198380), _0x223c56, _0x384ad4, _0x5c153a[_0x24907b + 13], 21, 1309151649), _0x208747 = _0xeaacd0(_0x208747, _0x223c56 = _0xeaacd0(_0x223c56, _0x384ad4 = _0xeaacd0(_0x384ad4, _0x3bb7b3, _0x208747, _0x223c56, _0x5c153a[_0x24907b + 4], 6, -145523070), _0x3bb7b3, _0x208747, _0x5c153a[_0x24907b + 11], 10, -1120210379), _0x384ad4, _0x3bb7b3, _0x5c153a[_0x24907b + 2], 15, 718787259), _0x223c56, _0x384ad4, _0x5c153a[_0x24907b + 9], 21, -343485551);
      _0x384ad4 = _0x137d42(_0x384ad4, _0x4edf31);
      _0x3bb7b3 = _0x137d42(_0x3bb7b3, _0x15d9bc);
      _0x208747 = _0x137d42(_0x208747, _0x5a2b74);
      _0x223c56 = _0x137d42(_0x223c56, _0x2cc331);
    }
    return [_0x384ad4, _0x3bb7b3, _0x208747, _0x223c56];
  }
  function _0x50ea51(_0x5ce175) {
    var _0x2d6737,
      _0x178b7e = "",
      _0xf302ee = 32 * _0x5ce175.length;
    for (_0x2d6737 = 0; _0x2d6737 < _0xf302ee; _0x2d6737 += 8) {
      _0x178b7e += String.fromCharCode(_0x5ce175[_0x2d6737 >> 5] >>> _0x2d6737 % 32 & 255);
    }
    return _0x178b7e;
  }
  function _0x29b34d(_0x34f282) {
    var _0x23e610,
      _0x3b69c5 = [];
    for (_0x3b69c5[(_0x34f282.length >> 2) - 1] = void 0, _0x23e610 = 0; _0x23e610 < _0x3b69c5.length; _0x23e610 += 1) {
      _0x3b69c5[_0x23e610] = 0;
    }
    var _0x2254fe = 8 * _0x34f282.length;
    for (_0x23e610 = 0; _0x23e610 < _0x2254fe; _0x23e610 += 8) {
      _0x3b69c5[_0x23e610 >> 5] |= (255 & _0x34f282.charCodeAt(_0x23e610 / 8)) << _0x23e610 % 32;
    }
    return _0x3b69c5;
  }
  function _0x158fdb(_0x322fab) {
    return _0x50ea51(_0x9cc193(_0x29b34d(_0x322fab), 8 * _0x322fab.length));
  }
  function _0x257071(_0x786736, _0x21848d) {
    var _0x5bc4eb,
      _0x239460 = _0x29b34d(_0x786736),
      _0x5b0446 = [],
      _0x3653d1 = [],
      _0x280460;
    for (_0x5b0446[15] = _0x3653d1[15] = void 0, _0x239460.length > 16 && (_0x239460 = _0x9cc193(_0x239460, 8 * _0x786736.length)), _0x5bc4eb = 0; _0x5bc4eb < 16; _0x5bc4eb += 1) {
      _0x5b0446[_0x5bc4eb] = 909522486 ^ _0x239460[_0x5bc4eb];
      _0x3653d1[_0x5bc4eb] = 1549556828 ^ _0x239460[_0x5bc4eb];
    }
    _0x280460 = _0x9cc193(_0x5b0446.concat(_0x29b34d(_0x21848d)), 512 + 8 * _0x21848d.length);
    return _0x50ea51(_0x9cc193(_0x3653d1.concat(_0x280460), 640));
  }
  function _0x9d69f1(_0x36e772) {
    var _0x42a123 = "0123456789abcdef",
      _0x3f8cf1 = "",
      _0x39ff07,
      _0x277ea5;
    for (_0x277ea5 = 0; _0x277ea5 < _0x36e772.length; _0x277ea5 += 1) {
      _0x39ff07 = _0x36e772.charCodeAt(_0x277ea5);
      _0x3f8cf1 += _0x42a123.charAt(_0x39ff07 >>> 4 & 15) + _0x42a123.charAt(15 & _0x39ff07);
    }
    return _0x3f8cf1;
  }
  function _0x1f0e1f(_0x143785) {
    return unescape(encodeURIComponent(_0x143785));
  }
  function _0x23c2fb(_0x4a2ea9) {
    return _0x158fdb(_0x1f0e1f(_0x4a2ea9));
  }
  function _0x173d91(_0x3a0f4b) {
    return _0x9d69f1(_0x23c2fb(_0x3a0f4b));
  }
  function _0x18aca0(_0x5ab9a2, _0x47a91d) {
    return _0x257071(_0x1f0e1f(_0x5ab9a2), _0x1f0e1f(_0x47a91d));
  }
  function _0x3a66fc(_0x10796d, _0x5ec3d1) {
    return _0x9d69f1(_0x18aca0(_0x10796d, _0x5ec3d1));
  }
  function _0x36d24a(_0x115e3e, _0x3a9ac8, _0x430575) {
    return _0x3a9ac8 ? _0x430575 ? _0x18aca0(_0x3a9ac8, _0x115e3e) : _0x3a66fc(_0x3a9ac8, _0x115e3e) : _0x430575 ? _0x23c2fb(_0x115e3e) : _0x173d91(_0x115e3e);
  }
  function _0x39c216(_0x3c1aa5) {
    for (var _0x3af048 = _0x53c902.split(";"), _0x8e4115 = 0; _0x8e4115 < _0x3af048.length; _0x8e4115++) {
      var _0x11935c = _0x3af048[_0x8e4115].split("=");
      if (_0x11935c[0].trim() == _0x3c1aa5) {
        return _0x11935c[1];
      }
    }
    return null;
  }
  const _0x12acac = _0x39c216("cna") || "",
    _0x2e2cd2 = _0x36d24a(_0x12acac + _0x3fc8b9 + Date.now());
  return _0x2e2cd2;
}
async function getCookie() {
  if ($request && $request.method === "OPTIONS") {
    return;
  }
  const _0x7ecb52 = ObjectKeys2LowerCase($request.headers),
    _0x1208dd = _0x7ecb52.cookie,
    _0x336440 = $.toObj($response.body);
  if (!_0x336440?.["data"]) {
    $.msg($.name, "⛔️ 获取Cookie失败!", "");
    return;
  }
  const {
      nickname: _0x305e12,
      avatar: _0x29f11b
    } = _0x336440?.["data"],
    _0x323aac = {
      userId: _0x305e12,
      avatar: _0x29f11b,
      token: _0x1208dd,
      userName: _0x305e12
    };
  userCookie = userCookie ? JSON.parse(userCookie) : [];
  const _0xc9be9e = userCookie.findIndex(_0x54d71d => _0x54d71d.userId == _0x323aac.userId);
  userCookie[_0xc9be9e] ? userCookie[_0xc9be9e] = _0x323aac : userCookie.push(_0x323aac);
  $.setjson(userCookie, ckName);
  $.msg($.name, "🎉" + _0x323aac.userName + "更新token成功!", "");
}
async function loadModule() {
  try {
    $.Cheerio = await loadCheerio();
    return $.Cheerio ? true : false;
  } catch (_0x531128) {
    throw new Error("⛔️ loadModule run error => " + _0x531128);
  }
}
async function checkEnv() {
  try {
    const _0x45ecad = envSplitor.find(_0x41502d => userCookie.includes(_0x41502d)) || envSplitor[0];
    userCookie = $.toObj(userCookie) || userCookie.split(_0x45ecad);
    userList.push(...userCookie.map(_0x12b0f9 => new UserInfo(_0x12b0f9)).filter(Boolean));
    userCount = userList.length;
    console.log("共找到" + userCount + "个账号");
    return true;
  } catch (_0x196413) {
    throw new Error("⛔️ checkEnv run error => " + _0x196413);
  }
}
async function Request(_0x46025c) {
  if (typeof _0x46025c === "string") {
    _0x46025c = {
      url: _0x46025c
    };
  }
  try {
    if (!_0x46025c?.["url"]) {
      throw new Error("[发送请求] 缺少 url 参数");
    }
    let {
      url: _0x3cebf5,
      type: _0x35fd01,
      headers = {},
      body: _0x33fed6,
      params: _0x363bc6,
      dataType = "form",
      resultType = "data"
    } = _0x46025c;
    const _0x4485f7 = _0x35fd01 ? _0x35fd01?.["toLowerCase"]() : "body" in _0x46025c ? "post" : "get",
      _0x21fcee = _0x3cebf5.concat(_0x4485f7 === "post" ? "?" + $.queryStr(_0x363bc6) : ""),
      _0x2399aa = _0x46025c.timeout ? $.isSurge() ? _0x46025c.timeout / 1000 : _0x46025c.timeout : 10000;
    if (dataType === "json") {
      headers["Content-Type"] = "application/json;charset=UTF-8";
    }
    const _0x582316 = _0x33fed6 && dataType == "form" ? $.queryStr(_0x33fed6) : $.toStr(_0x33fed6),
      _0x49763a = {
        ..._0x46025c,
        ...(_0x46025c?.["opts"] ? _0x46025c.opts : {}),
        url: _0x21fcee,
        headers: headers,
        ...(_0x4485f7 === "post" && {
          body: _0x582316
        }),
        ...(_0x4485f7 === "get" && _0x363bc6 && {
          params: _0x363bc6
        }),
        timeout: _0x2399aa
      },
      _0x5b18fd = $.http[_0x4485f7.toLowerCase()](_0x49763a).then(_0x301ecb => resultType == "data" ? $.toObj(_0x301ecb.body) || _0x301ecb.body : $.toObj(_0x301ecb) || _0x301ecb).catch(_0x5dd51a => $.log("⛔️ 请求发起失败！原因为: " + _0x5dd51a));
    return Promise.race([new Promise((_0x433b73, _0x280e6b) => setTimeout(() => _0x280e6b("当前请求已超时"), _0x2399aa)), _0x5b18fd]);
  } catch (_0x1aa310) {
    console.log("⛔️ 请求发起失败！原因为: " + _0x1aa310);
  }
}
function randomInt(_0x4a627a, _0x42fc17) {
  return Math.round(Math.random() * (_0x42fc17 - _0x4a627a) + _0x4a627a);
}
function DoubleLog(_0x4e8f4a) {
  if (_0x4e8f4a && $.isNode()) {
    console.log("" + _0x4e8f4a);
    $.notifyMsg.push("" + _0x4e8f4a);
  } else {
    _0x4e8f4a && (console.log("" + _0x4e8f4a), $.notifyMsg.push("" + _0x4e8f4a));
  }
}
function debug(_0x49c1b8, _0x1f6959 = "debug") {
  $.is_debug === "true" && ($.log("\n-----------" + _0x1f6959 + "------------\n"), $.log(typeof _0x49c1b8 == "string" ? _0x49c1b8 : $.toStr(_0x49c1b8) || "debug error => t=" + _0x49c1b8), $.log("\n-----------" + _0x1f6959 + "------------\n"));
}
async function SendMsgList(_0x2efcf7) {
  await Promise.allSettled(_0x2efcf7?.["map"](_0x29acf9 => SendMsg(_0x29acf9.message.join("\n"), _0x29acf9.avatar)));
}
async function SendMsg(_0x39ef4b, _0x173a54) {
  _0x39ef4b && (0 < Notify ? $.isNode() ? await notify.sendNotify($.name, _0x39ef4b) : $.msg($.name, $.title || "", _0x39ef4b, {
    "media-url": _0x173a54
  }) : console.log(_0x39ef4b));
}
function ObjectKeys2LowerCase(_0x4ec005) {
  _0x4ec005 = Object.fromEntries(Object.entries(_0x4ec005).map(([_0x33721f, _0x551a42]) => [_0x33721f.toLowerCase(), _0x551a42]));
  return new Proxy(_0x4ec005, {
    get: function (_0x1fecbc, _0x3ef758, _0x3e420b) {
      return Reflect.get(_0x1fecbc, _0x3ef758.toLowerCase(), _0x3e420b);
    },
    set: function (_0x4cede0, _0x4cd234, _0x56b9d3, _0x2b6205) {
      return Reflect.set(_0x4cede0, _0x4cd234.toLowerCase(), _0x56b9d3, _0x2b6205);
    }
  });
}
async function loadCheerio() {
  let _0x273655 = ($.isNode() ? process.env.Cheerio_code : $.getdata("Cheerio_code")) || "";
  if (_0x273655 && Object.keys(_0x273655).length) {
    console.log("✅" + $.name + ":缓存中存在Cheerio模块,跳过下载");
    eval(_0x273655);
    return createCheerio();
  }
  console.log("🚀" + $.name + ": 开始下载Cheerio模块");
  return new Promise(async _0x8b6ab8 => {
    $.getScript("https://mirror.ghproxy.com/https://raw.githubusercontent.com/Yuheng0101/X/main/Utils/cheerio.js").then(_0x61da04 => {
      $.setdata(_0x61da04, "Cheerio_code");
      eval(_0x61da04);
      const _0x208179 = createCheerio();
      console.log("✅Cheerio模块加载成功,请继续");
      _0x8b6ab8(_0x208179);
    });
  });
}
!(async () => {
  if (typeof $request != "undefined") {
    await getCookie();
  } else {
    if (!(await loadModule())) {
      throw new Error("⛔️ 加载模块失败，请检查模块路径是否正常");
    }
    if (!(await checkEnv())) {
      throw new Error("⛔️ 未检测到ck，请添加环境变量");
    }
    if (userList.length > 0) {
      await main();
    }
  }
})().catch(_0x3fb2c6 => $.notifyMsg.push(_0x3fb2c6.message || _0x3fb2c6)).finally(async () => {
  await SendMsgList($.notifyList);
  $.done({
    ok: 1
  });
});
function Env(t, e) {
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      "POST" === e && (s = this.post);
      return new Promise((e, r) => {
        s.call(this, t, (t, s, a) => {
          t ? r(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
    }
    getEnv() {
      return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : void 0;
    }
    isNode() {
      return "Node.js" === this.getEnv();
    }
    isQuanX() {
      return "Quantumult X" === this.getEnv();
    }
    isSurge() {
      return "Surge" === this.getEnv();
    }
    isLoon() {
      return "Loon" === this.getEnv();
    }
    isShadowrocket() {
      return "Shadowrocket" === this.getEnv();
    }
    isStash() {
      return "Stash" === this.getEnv();
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      if (this.getdata(t)) {
        try {
          s = JSON.parse(this.getdata(t));
        } catch {}
      }
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return !1;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, r) => e(r));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        r = r ? r.replace(/\n/g, "").trim() : r;
        let a = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        a = a ? 1 * a : 20;
        a = e && e.timeout ? e.timeout : a;
        const [i, o] = r.split("@"),
          n = {
            url: `http://${o}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: a
            },
            headers: {
              "X-Key": i,
              Accept: "*/*"
            },
            timeout: a
          };
        this.post(n, (t, e, r) => s(r));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          r = !s && this.fs.existsSync(e);
        if (!s && !r) {
          return {};
        }
        {
          const r = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(r));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          r = !s && this.fs.existsSync(e),
          a = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, a) : r ? this.fs.writeFileSync(e, a) : this.fs.writeFileSync(t, a);
      }
    }
    lodash_get(t, e, s = void 0) {
      const r = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let a = t;
      for (const t of r) if (a = Object(a)[t], void 0 === a) {
        return s;
      }
      return a;
    }
    lodash_set(t, e, s) {
      Object(t) !== t || (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, r) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[r + 1]) >> 0 == +e[r + 1] ? [] : {}, t)[e[e.length - 1]] = s);
      return t;
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, r] = /^@(.*?)\.(.*?)$/.exec(t),
          a = s ? this.getval(s) : "";
        if (a) {
          try {
            const t = JSON.parse(a);
            e = t ? this.lodash_get(t, r, "") : e;
          } catch (t) {
            e = "";
          }
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, r, a] = /^@(.*?)\.(.*?)$/.exec(e),
          i = this.getval(r),
          o = r ? "null" === i ? null : i || "{}" : "{}";
        try {
          const e = JSON.parse(o);
          this.lodash_set(e, a, t);
          s = this.setval(JSON.stringify(e), r);
        } catch (e) {
          const i = {};
          this.lodash_set(i, a, t);
          s = this.setval(JSON.stringify(i), r);
        }
      } else {
        s = this.setval(t, e);
      }
      return s;
    }
    getval(t) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.read(t);
        case "Quantumult X":
          return $prefs.valueForKey(t);
        case "Node.js":
          this.data = this.loaddata();
          return this.data[t];
        default:
          return this.data && this.data[t] || null;
      }
    }
    setval(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.write(t, e);
        case "Quantumult X":
          return $prefs.setValueForKey(t, e);
        case "Node.js":
          this.data = this.loaddata();
          this.data[e] = t;
          this.writedata();
          return !0;
        default:
          return this.data && this.data[e] || null;
      }
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      switch (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"], delete t.headers["content-type"], delete t.headers["content-length"]), t.params && (t.url += "?" + this.queryStr(t.params)), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = {
        redirection: !1
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": !1
          }));
          $httpClient.get(t, (t, s, r) => {
            !t && s && (s.body = r, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, r);
          });
          break;
        case "Quantumult X":
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: r,
              headers: a,
              body: i,
              bodyBytes: o
            } = t;
            e(null, {
              status: s,
              statusCode: r,
              headers: a,
              body: i,
              bodyBytes: o
            }, i, o);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let s = require("iconv-lite");
          this.initGotEnv(t);
          this.got(t).on("redirect", (t, e) => {
            try {
              if (t.headers["set-cookie"]) {
                const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                s && this.ckjar.setCookieSync(s, null);
                e.cookieJar = this.ckjar;
              }
            } catch (t) {
              this.logErr(t);
            }
          }).then(t => {
            const {
                statusCode: r,
                statusCode: a,
                headers: i,
                rawBody: o
              } = t,
              n = s.decode(o, this.encoding);
            e(null, {
              status: r,
              statusCode: a,
              headers: i,
              rawBody: o,
              body: n
            }, n);
          }, t => {
            const {
              message: r,
              response: a
            } = t;
            e(r, a, a && s.decode(a.rawBody, this.encoding));
          });
      }
    }
    post(t, e = () => {}) {
      const s = t.method ? t.method.toLocaleLowerCase() : "post";
      switch (t.body && t.headers && !t.headers["Content-Type"] && !t.headers["content-type"] && (t.headers["content-type"] = "application/x-www-form-urlencoded"), t.headers && (delete t.headers["Content-Length"], delete t.headers["content-length"]), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = {
        redirection: !1
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": !1
          }));
          $httpClient[s](t, (t, s, r) => {
            !t && s && (s.body = r, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, r);
          });
          break;
        case "Quantumult X":
          t.method = s;
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: r,
              headers: a,
              body: i,
              bodyBytes: o
            } = t;
            e(null, {
              status: s,
              statusCode: r,
              headers: a,
              body: i,
              bodyBytes: o
            }, i, o);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let r = require("iconv-lite");
          this.initGotEnv(t);
          const {
            url: a,
            ...i
          } = t;
          this.got[s](a, i).then(t => {
            const {
                statusCode: s,
                statusCode: a,
                headers: i,
                rawBody: o
              } = t,
              n = r.decode(o, this.encoding);
            e(null, {
              status: s,
              statusCode: a,
              headers: i,
              rawBody: o,
              body: n
            }, n);
          }, t => {
            const {
              message: s,
              response: a
            } = t;
            e(s, a, a && r.decode(a.rawBody, this.encoding));
          });
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let r = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in r) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? r[e] : ("00" + r[e]).substr(("" + r[e]).length)));
      return t;
    }
    queryStr(t) {
      let e = "";
      for (const s in t) {
        let r = t[s];
        null != r && "" !== r && ("object" == typeof r && (r = JSON.stringify(r)), e += `${s}=${r}&`);
      }
      e = e.substring(0, e.length - 1);
      return e;
    }
    msg(e = t, s = "", r = "", a) {
      const i = t => {
        switch (typeof t) {
          case void 0:
            return t;
          case "string":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              default:
                return {
                  url: t
                };
              case "Loon":
              case "Shadowrocket":
                return t;
              case "Quantumult X":
                return {
                  "open-url": t
                };
              case "Node.js":
                return;
            }
          case "object":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              case "Shadowrocket":
              default:
                return {
                  url: t.url || t.openUrl || t["open-url"]
                };
              case "Loon":
                return {
                  openUrl: t.openUrl || t.url || t["open-url"],
                  mediaUrl: t.mediaUrl || t["media-url"]
                };
              case "Quantumult X":
                return {
                  "open-url": t["open-url"] || t.url || t.openUrl,
                  "media-url": t["media-url"] || t.mediaUrl,
                  "update-pasteboard": t["update-pasteboard"] || t.updatePasteboard
                };
              case "Node.js":
                return;
            }
          default:
            return;
        }
      };
      if (!this.isMute) {
        switch (this.getEnv()) {
          case "Surge":
          case "Loon":
          case "Stash":
          case "Shadowrocket":
          default:
            $notification.post(e, s, r, i(a));
            break;
          case "Quantumult X":
            $notify(e, s, r, i(a));
          case "Node.js":
        }
      }
      if (!this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e);
        s && t.push(s);
        r && t.push(r);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          this.log("", `❗️${this.name}, 错误!`, t);
          break;
        case "Node.js":
          this.log("", `❗️${this.name}, 错误!`, t.stack);
      }
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = (new Date().getTime() - this.startTime) / 1000;
      switch (this.log("", `🔔${this.name}, 结束! 🕛 ${e} 秒`), this.log(), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          $done(t);
          break;
        case "Node.js":
          process.exit(1);
      }
    }
  }(t, e);
}