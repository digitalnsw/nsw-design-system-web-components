!(function () {
  function e(e, t) {
    return (t || "") + " (SystemJS https://git.io/JvFET#" + e + ")";
  }
  function t(e, t) {
    if (
      (-1 !== e.indexOf("\\") && (e = e.replace(/\\/g, "/")),
      "/" === e[0] && "/" === e[1])
    )
      return t.slice(0, t.indexOf(":") + 1) + e;
    if (
      ("." === e[0] &&
        ("/" === e[1] ||
          ("." === e[1] && ("/" === e[2] || (2 === e.length && (e += "/")))) ||
          (1 === e.length && (e += "/")))) ||
      "/" === e[0]
    ) {
      var n,
        r = t.slice(0, t.indexOf(":") + 1);
      if (
        ((n =
          "/" === t[r.length + 1]
            ? "file:" !== r
              ? (n = t.slice(r.length + 2)).slice(n.indexOf("/") + 1)
              : t.slice(8)
            : t.slice(r.length + ("/" === t[r.length]))),
        "/" === e[0])
      )
        return t.slice(0, t.length - n.length - 1) + e;
      for (
        var i = n.slice(0, n.lastIndexOf("/") + 1) + e, o = [], c = -1, s = 0;
        i.length > s;
        s++
      )
        -1 !== c
          ? "/" === i[s] && (o.push(i.slice(c, s + 1)), (c = -1))
          : "." === i[s]
          ? "." !== i[s + 1] || ("/" !== i[s + 2] && s + 2 !== i.length)
            ? "/" === i[s + 1] || s + 1 === i.length
              ? (s += 1)
              : (c = s)
            : (o.pop(), (s += 2))
          : (c = s);
      return (
        -1 !== c && o.push(i.slice(c)),
        t.slice(0, t.length - n.length) + o.join("")
      );
    }
  }
  function n(e, n) {
    return t(e, n) || (-1 !== e.indexOf(":") ? e : t("./" + e, n));
  }
  function r(e, n, r, i, o) {
    for (var u in e) {
      var f = t(u, r) || u,
        a = e[u];
      if ("string" == typeof a) {
        var l = s(i, t(a, r) || a, o);
        l ? (n[f] = l) : c("W1", u, a);
      }
    }
  }
  function i(e, t) {
    if (t[e]) return e;
    var n = e.length;
    do {
      var r = e.slice(0, n + 1);
      if (r in t) return r;
    } while (-1 !== (n = e.lastIndexOf("/", n - 1)));
  }
  function o(e, t) {
    var n = i(e, t);
    if (n) {
      var r = t[n];
      if (null === r) return;
      if (n.length >= e.length || "/" === r[r.length - 1])
        return r + e.slice(n.length);
      c("W2", n, r);
    }
  }
  function c(t, n, r) {
    console.warn(e(t, [r, n].join(", ")));
  }
  function s(e, t, n) {
    for (var r = e.scopes, c = n && i(n, r); c; ) {
      var s = o(t, r[c]);
      if (s) return s;
      c = i(c.slice(0, c.lastIndexOf("/")), r);
    }
    return o(t, e.imports) || (-1 !== t.indexOf(":") && t);
  }
  function u() {
    this[w] = {};
  }
  function f(t, n, r) {
    var i = t[w][n];
    if (i) return i;
    var o = [],
      c = Object.create(null);
    E && Object.defineProperty(c, E, { value: "Module" });
    var s = Promise.resolve()
        .then(function () {
          return t.instantiate(n, r);
        })
        .then(
          function (r) {
            if (!r) throw Error(e(2, n));
            var s = r[1](
              function (e, t) {
                i.h = !0;
                var n = !1;
                if ("string" == typeof e)
                  (e in c && c[e] === t) || ((c[e] = t), (n = !0));
                else {
                  for (var r in e)
                    (t = e[r]),
                      (r in c && c[r] === t) || ((c[r] = t), (n = !0));
                  e && e.__esModule && (c.__esModule = e.__esModule);
                }
                if (n)
                  for (var s = 0; o.length > s; s++) {
                    var u = o[s];
                    u && u(c);
                  }
                return t;
              },
              2 === r[1].length
                ? {
                    import: function (e) {
                      return t.import(e, n);
                    },
                    meta: t.createContext(n),
                  }
                : void 0
            );
            return (i.e = s.execute || function () {}), [r[0], s.setters || []];
          },
          function (e) {
            throw ((i.e = null), (i.er = e), e);
          }
        ),
      u = s.then(function (e) {
        return Promise.all(
          e[0].map(function (r, i) {
            var o = e[1][i];
            return Promise.resolve(t.resolve(r, n)).then(function (e) {
              var r = f(t, e, n);
              return Promise.resolve(r.I).then(function () {
                return o && (r.i.push(o), (!r.h && r.I) || o(r.n)), r;
              });
            });
          })
        ).then(function (e) {
          i.d = e;
        });
      });
    return (i = t[w][n] = {
      id: n,
      i: o,
      n: c,
      I: s,
      L: u,
      h: !1,
      d: void 0,
      e: void 0,
      er: void 0,
      E: void 0,
      C: void 0,
      p: void 0,
    });
  }
  function a() {
    [].forEach.call(document.querySelectorAll("script"), function (t) {
      if (!t.sp)
        if ("systemjs-module" === t.type) {
          if (((t.sp = !0), !t.src)) return;
          System.import(
            "import:" === t.src.slice(0, 7) ? t.src.slice(7) : n(t.src, l)
          ).catch(function (e) {
            if (e.message.indexOf("https://git.io/JvFET#3") > -1) {
              var n = document.createEvent("Event");
              n.initEvent("error", !1, !1), t.dispatchEvent(n);
            }
            return Promise.reject(e);
          });
        } else if ("systemjs-importmap" === t.type) {
          t.sp = !0;
          var i = t.src
            ? fetch(t.src, { integrity: t.integrity })
                .then(function (e) {
                  if (!e.ok) throw Error(e.status);
                  return e.text();
                })
                .catch(function (n) {
                  return (
                    (n.message = e("W4", t.src) + "\n" + n.message),
                    console.warn(n),
                    "function" == typeof t.onerror && t.onerror(),
                    "{}"
                  );
                })
            : t.innerHTML;
          j = j
            .then(function () {
              return i;
            })
            .then(function (i) {
              !(function (t, i, o) {
                var c = {};
                try {
                  c = JSON.parse(i);
                } catch (s) {
                  console.warn(Error(e("W5")));
                }
                !(function (e, t, i) {
                  var o;
                  for (o in (e.imports && r(e.imports, i.imports, t, i, null),
                  e.scopes || {})) {
                    var c = n(o, t);
                    r(e.scopes[o], i.scopes[c] || (i.scopes[c] = {}), t, i, c);
                  }
                  for (o in e.depcache || {})
                    i.depcache[n(o, t)] = e.depcache[o];
                  for (o in e.integrity || {})
                    i.integrity[n(o, t)] = e.integrity[o];
                })(c, o, t);
              })(L, i, t.src || l);
            });
        }
    });
  }
  var l,
    h = "undefined" != typeof Symbol,
    v = "undefined" != typeof self,
    d = "undefined" != typeof document,
    p = v ? self : global;
  if (d) {
    var m = document.querySelector("base[href]");
    m && (l = m.href);
  }
  if (!l && "undefined" != typeof location) {
    var g = (l = location.href.split("#")[0].split("?")[0]).lastIndexOf("/");
    -1 !== g && (l = l.slice(0, g + 1));
  }
  var y,
    E = h && Symbol.toStringTag,
    w = h ? Symbol() : "@",
    x = u.prototype;
  (x.import = function (e, t) {
    var n = this;
    return Promise.resolve(n.prepareImport())
      .then(function () {
        return n.resolve(e, t);
      })
      .then(function (e) {
        var t = f(n, e);
        return (
          t.C ||
          (function (e, t) {
            return (t.C = (function e(t, n, r, i) {
              if (!i[n.id])
                return (
                  (i[n.id] = !0),
                  Promise.resolve(n.L)
                    .then(function () {
                      return (
                        (n.p && null !== n.p.e) || (n.p = r),
                        Promise.all(
                          n.d.map(function (n) {
                            return e(t, n, r, i);
                          })
                        )
                      );
                    })
                    .catch(function (e) {
                      if (n.er) throw e;
                      throw ((n.e = null), e);
                    })
                );
            })(e, t, t, {})
              .then(function () {
                return (function e(t, n, r) {
                  function i() {
                    try {
                      var e = n.e.call(O);
                      if (e)
                        return (
                          (e = e.then(
                            function () {
                              (n.C = n.n), (n.E = null);
                            },
                            function (e) {
                              throw ((n.er = e), (n.E = null), e);
                            }
                          )),
                          (n.E = e)
                        );
                      (n.C = n.n), (n.L = n.I = void 0);
                    } catch (t) {
                      throw ((n.er = t), t);
                    } finally {
                      n.e = null;
                    }
                  }
                  if (!r[n.id]) {
                    if (((r[n.id] = !0), !n.e)) {
                      if (n.er) throw n.er;
                      return n.E ? n.E : void 0;
                    }
                    var o;
                    return (
                      n.d.forEach(function (i) {
                        try {
                          var c = e(t, i, r);
                          c && (o = o || []).push(c);
                        } catch (s) {
                          throw ((n.e = null), (n.er = s), s);
                        }
                      }),
                      o ? Promise.all(o).then(i) : i()
                    );
                  }
                })(e, t, {});
              })
              .then(function () {
                return t.n;
              }));
          })(n, t)
        );
      });
  }),
    (x.createContext = function (e) {
      var t = this;
      return {
        url: e,
        resolve: function (n, r) {
          return Promise.resolve(t.resolve(n, r || e));
        },
      };
    }),
    (x.register = function (e, t) {
      y = [e, t];
    }),
    (x.getRegister = function () {
      var e = y;
      return (y = void 0), e;
    });
  var O = Object.freeze(Object.create(null));
  p.System = new u();
  var S,
    P,
    j = Promise.resolve(),
    L = { imports: {}, scopes: {}, depcache: {}, integrity: {} },
    C = d;
  if (
    ((x.prepareImport = function (e) {
      return (C || e) && (a(), (C = !1)), j;
    }),
    d && (a(), window.addEventListener("DOMContentLoaded", a)),
    d)
  ) {
    window.addEventListener("error", function (e) {
      (b = e.filename), (T = e.error);
    });
    var I = location.origin;
  }
  x.createScript = function (e) {
    var t = document.createElement("script");
    (t.async = !0), e.indexOf(I + "/") && (t.crossOrigin = "anonymous");
    var n = L.integrity[e];
    return n && (t.integrity = n), (t.src = e), t;
  };
  var b,
    T,
    M = {},
    R = x.register;
  (x.register = function (e, t) {
    if (d && "loading" === document.readyState && "string" != typeof e) {
      var n = document.querySelectorAll("script[src]"),
        r = n[n.length - 1];
      if (r) {
        S = e;
        var i = this;
        P = setTimeout(function () {
          (M[r.src] = [e, t]), i.import(r.src);
        });
      }
    } else S = void 0;
    return R.call(this, e, t);
  }),
    (x.instantiate = function (t, n) {
      var r = M[t];
      if (r) return delete M[t], r;
      var i = this;
      return new Promise(function (r, o) {
        var c = x.createScript(t);
        c.addEventListener("error", function () {
          o(Error(e(3, [t, n].join(", "))));
        }),
          c.addEventListener("load", function () {
            if ((document.head.removeChild(c), b === t)) o(T);
            else {
              var e = i.getRegister();
              e && e[0] === S && clearTimeout(P), r(e);
            }
          }),
          document.head.appendChild(c);
      });
    }),
    (x.shouldFetch = function () {
      return !1;
    }),
    "undefined" != typeof fetch && (x.fetch = fetch);
  var _ = x.instantiate,
    F = /^(text|application)\/(x-)?javascript(;|$)/;
  (x.instantiate = function (t, n) {
    var r = this;
    return this.shouldFetch(t)
      ? this.fetch(t, {
          credentials: "same-origin",
          integrity: L.integrity[t],
        }).then(function (i) {
          if (!i.ok)
            throw Error(e(7, [i.status, i.statusText, t, n].join(", ")));
          var o = i.headers.get("content-type");
          if (!o || !F.test(o)) throw Error(e(4, o));
          return i.text().then(function (e) {
            return (
              0 > e.indexOf("//# sourceURL=") && (e += "\n//# sourceURL=" + t),
              (0, eval)(e),
              r.getRegister()
            );
          });
        })
      : _.apply(this, arguments);
  }),
    (x.resolve = function (n, r) {
      return (
        s(L, t(n, (r = r || l)) || n, r) ||
        (function (t, n) {
          throw Error(e(8, [t, n].join(", ")));
        })(n, r)
      );
    });
  var J = x.instantiate;
  (x.instantiate = function (e, t) {
    var n = L.depcache[e];
    if (n) for (var r = 0; n.length > r; r++) f(this, this.resolve(n[r], e), e);
    return J.call(this, e, t);
  }),
    v &&
      "function" == typeof importScripts &&
      (x.instantiate = function (e) {
        var t = this;
        return Promise.resolve().then(function () {
          return importScripts(e), t.getRegister();
        });
      });
})();
