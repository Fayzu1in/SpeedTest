(function () {
  "use strict";
  var t = {
      8072: function (t, e, n) {
        n(6992), n(8674), n(9601), n(7727);
        var i = n(9567),
          s = function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n("div", { attrs: { id: "app" } }, [
              n("div", { attrs: { id: "wrapper" } }, [
                t._m(0),
                n("div", { attrs: { id: "mainDiv" } }, [
                  n("div", { attrs: { id: "upperDiv" } }, [
                    t._m(1),
                    n("div", { staticClass: "speedChecker" }, [
                      n(
                        "p",
                        {
                          class: { finished: t.finished },
                          attrs: { id: "speed-text" },
                        },
                        [t._v(t._s(t.speed + " Mb/s"))]
                      ),
                      t._m(2),
                      n(
                        "button",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: t.checkBtn,
                              expression: "checkBtn",
                            },
                          ],
                          attrs: { id: "checkBtn" },
                          on: { click: t.checkSpeed },
                        },
                        [t._v(" Check Internet Speed ")]
                      ),
                      n(
                        "button",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: t.checkBtnNone,
                              expression: "checkBtnNone",
                            },
                          ],
                          attrs: { id: "checkBtnNone" },
                        },
                        [t._v(" Check Internet Speed ")]
                      ),
                    ]),
                  ]),
                  n("div", { attrs: { id: "downDiv" } }, [
                    n("div", { staticClass: "listView" }, [
                      n("p", { attrs: { id: "ipSection" } }, [
                        t._v("IP address:"),
                      ]),
                      t._m(3),
                      n(
                        "div",
                        { staticClass: "list", attrs: { id: "clientList" } },
                        [
                          n("div", { staticClass: "leftSide" }, [
                            t._v("Client:"),
                          ]),
                          n("div", { attrs: { id: "clientRight" } }, [
                            t._v(t._s(t.clientIP)),
                          ]),
                        ]
                      ),
                      n(
                        "div",
                        { staticClass: "list", attrs: { id: "xIpList" } },
                        [
                          n("div", { staticClass: "leftSide" }, [
                            t._v("X-Ip-Region:"),
                          ]),
                          n("div", { attrs: { id: "xIpRight" } }, [
                            t._v(t._s(t.ipRegion)),
                          ]),
                        ]
                      ),
                      n(
                        "div",
                        { staticClass: "list", attrs: { id: "xSiteList" } },
                        [
                          n("div", { staticClass: "leftSide" }, [
                            t._v("X-Site-Region:"),
                          ]),
                          n("div", { attrs: { id: "xSiteRight" } }, [
                            t._v(t._s(t.siteRegion)),
                          ]),
                        ]
                      ),
                    ]),
                  ]),
                  n(
                    "button",
                    {
                      staticClass: "copyBtn",
                      on: {
                        click: function (e) {
                          return t.copyText("clientRight");
                        },
                      },
                    },
                    [t._v(" Copy IP ")]
                  ),
                ]),
              ]),
            ]);
          },
          r = [
            function () {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e;
              return n("div", { attrs: { id: "alertBox" } }, [
                n("p", { attrs: { id: "alertBox__text" } }, [
                  t._v("IP copied"),
                ]),
              ]);
            },
            function () {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e;
              return n("a", { attrs: { href: "https://allplay.uz/" } }, [
                n("img", {
                  attrs: {
                    id: "logoImg",
                    src: "/public/allplayLogoWhite.png",
                    alt: "",
                  },
                }),
              ]);
            },
            function () {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e;
              return n("div", { staticClass: "ring" }, [
                n("span", { staticClass: "span" }),
              ]);
            },
            function () {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e;
              return n(
                "div",
                { staticClass: "list first", attrs: { id: "serverList" } },
                [
                  n("div", { staticClass: "leftSide" }, [t._v("Server:")]),
                  n("div", { attrs: { id: "serverRight" } }, [
                    t._v("91.234.218.52"),
                  ]),
                ]
              );
            },
          ],
          a = n(6198),
          o =
            (n(8975),
            n(6977),
            n(1539),
            {
              name: "App",
              components: {},
              data: function () {
                return {
                  clientIP: "Client IP",
                  ipRegion: "IP Region",
                  siteRegion: "Site Region",
                  fileUrl: "https://st16.allmovies.uz/test.bin",
                  loaded: 0,
                  timestamp: 0,
                  speed: 0,
                  finished: !1,
                  checkBtn: !0,
                  checkBtnNone: !1,
                };
              },
              methods: {
                copyText: function (t) {
                  var e = document.createElement("input");
                  e.setAttribute("value", document.getElementById(t).innerHTML),
                    document.body.appendChild(e),
                    e.select(),
                    document.execCommand("copy"),
                    document.body.removeChild(e),
                    (document.getElementById("alertBox").style.opacity = "1"),
                    setTimeout(function () {
                      document.getElementById("alertBox").style.opacity = "0";
                    }, 2e3);
                },
                checkSpeed: function () {
                  var t = this,
                    e = new XMLHttpRequest();
                  (e.responseType = "arraybuffer"),
                    (e.onprogress = function (e) {
                      var n = e.loaded - t.loaded,
                        i = e.timeStamp - t.timestamp;
                      (t.speed = n / i / 1024),
                        t.speed <= 10
                          ? (t.speed = t.speed.toFixed(2))
                          : t.speed > 10 &&
                            (t.speed = Math.round(n / i / 1024)),
                        (t.loaded = e.loaded),
                        (t.timestamp = e.timeStamp),
                        (t.checkBtn = !1),
                        (t.checkBtnNone = !0);
                    }),
                    e.open("GET", "https://st16.allmovies.uz/test.bin"),
                    e.send(),
                    setTimeout(function () {
                      e.abort(),
                        (t.finished = !0),
                        (t.checkBtn = !0),
                        (t.checkBtnNone = !1);
                    }, 7e3);
                },
              },
              mounted: function () {
                var t = this;
                return (0, a.Z)(
                  regeneratorRuntime.mark(function e() {
                    var n, i;
                    return regeneratorRuntime.wrap(function (e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              fetch("https://api.allplay.uz/api/v1/region")
                            );
                          case 2:
                            if (((n = e.sent), !n.ok)) {
                              e.next = 10;
                              break;
                            }
                            return (e.next = 6), n.json();
                          case 6:
                            (i = e.sent),
                              (t.clientIP = i.data.ip),
                              (t.ipRegion = i.data.ip_region),
                              (t.siteRegion = i.data.site_region);
                          case 10:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )();
              },
            }),
          c = o,
          d = n(1001),
          l = (0, d.Z)(c, s, r, !1, null, null, null),
          u = l.exports;
        (i.Z.config.productionTip = !1),
          new i.Z({
            render: function (t) {
              return t(u);
            },
          }).$mount("#app");
      },
    },
    e = {};
  function n(i) {
    var s = e[i];
    if (void 0 !== s) return s.exports;
    var r = (e[i] = { id: i, loaded: !1, exports: {} });
    return t[i](r, r.exports, n), (r.loaded = !0), r.exports;
  }
  (n.m = t),
    (function () {
      var t = [];
      n.O = function (e, i, s, r) {
        if (!i) {
          var a = 1 / 0;
          for (l = 0; l < t.length; l++) {
            (i = t[l][0]), (s = t[l][1]), (r = t[l][2]);
            for (var o = !0, c = 0; c < i.length; c++)
              (!1 & r || a >= r) &&
              Object.keys(n.O).every(function (t) {
                return n.O[t](i[c]);
              })
                ? i.splice(c--, 1)
                : ((o = !1), r < a && (a = r));
            if (o) {
              t.splice(l--, 1);
              var d = s();
              void 0 !== d && (e = d);
            }
          }
          return e;
        }
        r = r || 0;
        for (var l = t.length; l > 0 && t[l - 1][2] > r; l--) t[l] = t[l - 1];
        t[l] = [i, s, r];
      };
    })(),
    (function () {
      n.d = function (t, e) {
        for (var i in e)
          n.o(e, i) &&
            !n.o(t, i) &&
            Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
      };
    })(),
    (function () {
      n.g = (function () {
        if ("object" === typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (t) {
          if ("object" === typeof window) return window;
        }
      })();
    })(),
    (function () {
      n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      };
    })(),
    (function () {
      n.nmd = function (t) {
        return (t.paths = []), t.children || (t.children = []), t;
      };
    })(),
    (function () {
      var t = { 143: 0 };
      n.O.j = function (e) {
        return 0 === t[e];
      };
      var e = function (e, i) {
          var s,
            r,
            a = i[0],
            o = i[1],
            c = i[2],
            d = 0;
          if (
            a.some(function (e) {
              return 0 !== t[e];
            })
          ) {
            for (s in o) n.o(o, s) && (n.m[s] = o[s]);
            if (c) var l = c(n);
          }
          for (e && e(i); d < a.length; d++)
            (r = a[d]), n.o(t, r) && t[r] && t[r][0](), (t[r] = 0);
          return n.O(l);
        },
        i = (self["webpackChunkallplay_speed_test"] =
          self["webpackChunkallplay_speed_test"] || []);
      i.forEach(e.bind(null, 0)), (i.push = e.bind(null, i.push.bind(i)));
    })();
  var i = n.O(void 0, [998], function () {
    return n(8072);
  });
  i = n.O(i);
})();
//# sourceMappingURL=app-legacy.9e185d59.js.map
