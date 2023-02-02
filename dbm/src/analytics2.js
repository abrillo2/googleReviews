window.NREUM || (NREUM = {});
NREUM.info = {
    "beacon": "bam.nr-data.net",
    "errorBeacon": "bam.nr-data.net",
    "licenseKey": "NRJS-fc902efb332119fff33",
    "applicationID": "367981416",
    "transactionName": "dFZWTENWVQ9QExdNRlJLSFlWXEpMRQBfXUYYSU1aXVBKC1AF",
    "queueTime": 0,
    "applicationTime": 425,
    "agent": ""
}(window.NREUM || (NREUM = {})).init = {
    ajax: {
        deny_list: ["bam.nr-data.net"]
    }
};
(window.NREUM || (NREUM = {})).loader_config = {
    licenseKey: "NRJS-fc902efb332119fff33",
    applicationID: "367981416"
};;
(() => {
    var e, t, r = {
            9071: (e, t, r) => {
                "use strict";
                r.d(t, {
                    I: () => n
                });
                var n = 0,
                    i = navigator.userAgent.match(/Firefox[\/\s](\d+\.\d+)/);
                i && (n = +i[1])
            },
            6900: (e, t, r) => {
                "use strict";
                let n;
                if (r.d(t, {
                        H: () => i
                    }), r(2374).il) {
                    const e = document.createElement("div");
                    e.innerHTML = "\x3c!--[if lte IE 6]><div></div><![endif]--\x3e\x3c!--[if lte IE 7]><div></div><![endif]--\x3e\x3c!--[if lte IE 8]><div></div><![endif]--\x3e\x3c!--[if lte IE 9]><div></div><![endif]--\x3e", n = e.getElementsByTagName("div").length
                }
                var i;
                i = 4 === n ? 6 : 3 === n ? 7 : 2 === n ? 8 : 1 === n ? 9 : 0
            },
            6562: (e, t, r) => {
                "use strict";
                r.d(t, {
                    P_: () => h,
                    Mt: () => v,
                    C5: () => d,
                    DL: () => w,
                    OP: () => B,
                    lF: () => V,
                    Yu: () => A,
                    Dg: () => p,
                    CX: () => l,
                    GE: () => y,
                    sU: () => M
                });
                var n = {};
                r.r(n), r.d(n, {
                    agent: () => O,
                    match: () => _,
                    version: () => S
                });
                var i = r(6797),
                    o = r(909),
                    a = r(8610);
                class s {
                    constructor(e, t) {
                        try {
                            if (!e || "object" != typeof e) return (0, a.Z)("New setting a Configurable requires an object as input");
                            if (!t || "object" != typeof t) return (0, a.Z)("Setting a Configurable requires a model to set its initial properties");
                            Object.assign(this, t), Object.entries(e).forEach((e => {
                                let [t, r] = e;
                                const n = (0, o.q)(t);
                                n.length && r && "object" == typeof r && n.forEach((e => {
                                    e in r && ((0, a.Z)(`"${e}" is a protected attribute and can not be changed in feature ${t}.  It will have no effect.`), delete r[e])
                                })), this[t] = r
                            }))
                        } catch (e) {
                            (0, a.Z)("An error occured while setting a Configurable", e)
                        }
                    }
                }
                const c = {
                        beacon: i.ce.beacon,
                        errorBeacon: i.ce.errorBeacon,
                        licenseKey: void 0,
                        applicationID: void 0,
                        sa: void 0,
                        queueTime: void 0,
                        applicationTime: void 0,
                        ttGuid: void 0,
                        user: void 0,
                        account: void 0,
                        product: void 0,
                        extra: void 0,
                        jsAttributes: {},
                        userAttributes: void 0,
                        atts: void 0,
                        transactionName: void 0,
                        tNamePlain: void 0
                    },
                    u = {};

                function d(e) {
                    if (!e) throw new Error("All info objects require an agent identifier!");
                    if (!u[e]) throw new Error(`Info for ${e} was never set`);
                    return u[e]
                }

                function l(e, t) {
                    if (!e) throw new Error("All info objects require an agent identifier!");
                    u[e] = new s(t, c), (0, i.Qy)(e, u[e], "info")
                }
                const f = {
                        allow_bfcache: !1,
                        privacy: {
                            cookies_enabled: !0
                        },
                        ajax: {
                            deny_list: void 0,
                            enabled: !0,
                            harvestTimeSeconds: 10
                        },
                        distributed_tracing: {
                            enabled: void 0,
                            exclude_newrelic_header: void 0,
                            cors_use_newrelic_header: void 0,
                            cors_use_tracecontext_headers: void 0,
                            allowed_origins: void 0
                        },
                        ssl: void 0,
                        obfuscate: void 0,
                        jserrors: {
                            enabled: !0,
                            harvestTimeSeconds: 10
                        },
                        metrics: {
                            enabled: !0,
                            harvestTimeSeconds: 10
                        },
                        page_action: {
                            enabled: !0,
                            harvestTimeSeconds: 30
                        },
                        page_view_event: {
                            enabled: !0
                        },
                        page_view_timing: {
                            enabled: !0,
                            harvestTimeSeconds: 30
                        },
                        session_trace: {
                            enabled: !0,
                            harvestTimeSeconds: 10
                        },
                        spa: {
                            enabled: !0,
                            harvestTimeSeconds: 10
                        }
                    },
                    g = {};

                function h(e) {
                    if (!e) throw new Error("All configuration objects require an agent identifier!");
                    if (!g[e]) throw new Error(`Configuration for ${e} was never set`);
                    return g[e]
                }

                function p(e, t) {
                    if (!e) throw new Error("All configuration objects require an agent identifier!");
                    g[e] = new s(t, f), (0, i.Qy)(e, g[e], "config")
                }

                function v(e, t) {
                    if (!e) throw new Error("All configuration objects require an agent identifier!");
                    var r = h(e);
                    if (r) {
                        for (var n = t.split("."), i = 0; i < n.length - 1; i++)
                            if ("object" != typeof(r = r[n[i]])) return;
                        r = r[n[n.length - 1]]
                    }
                    return r
                }
                const m = {
                        accountID: void 0,
                        trustKey: void 0,
                        agentID: void 0,
                        licenseKey: void 0,
                        applicationID: void 0,
                        xpid: void 0
                    },
                    b = {};

                function w(e) {
                    if (!e) throw new Error("All loader-config objects require an agent identifier!");
                    if (!b[e]) throw new Error(`LoaderConfig for ${e} was never set`);
                    return b[e]
                }

                function y(e, t) {
                    if (!e) throw new Error("All loader-config objects require an agent identifier!");
                    b[e] = new s(t, m), (0, i.Qy)(e, b[e], "loader_config")
                }
                const A = (0, i.mF)().o;
                var x = r(6900),
                    E = r(2053),
                    O = null,
                    S = null;
                if (navigator.userAgent) {
                    var D = navigator.userAgent,
                        j = D.match(/Version\/(\S+)\s+Safari/);
                    j && -1 === D.indexOf("Chrome") && -1 === D.indexOf("Chromium") && (O = "Safari", S = j[1])
                }

                function _(e, t) {
                    if (!O) return !1;
                    if (e !== O) return !1;
                    if (!t) return !0;
                    if (!S) return !1;
                    for (var r = S.split("."), n = t.split("."), i = 0; i < n.length; i++)
                        if (n[i] !== r[i]) return !1;
                    return !0
                }
                var k = r(5526),
                    T = r(2374);
                const P = "NRBA_SESSION_ID";

                function C() {
                    if (!T.il) return null;
                    try {
                        let e;
                        return null === (e = window.sessionStorage.getItem(P)) && (e = (0, k.ky)(16), window.sessionStorage.setItem(P, e)), e
                    } catch (e) {
                        return null
                    }
                }
                var I = T._A?.XMLHttpRequest,
                    N = I && I.prototype;
                const R = {};

                function B(e) {
                    if (!e) throw new Error("All runtime objects require an agent identifier!");
                    if (!R[e]) throw new Error(`Runtime for ${e} was never set`);
                    return R[e]
                }

                function M(e, t) {
                    if (!e) throw new Error("All runtime objects require an agent identifier!");
                    var r;
                    R[e] = new s(t, (r = e, {
                        customTransaction: void 0,
                        disabled: !1,
                        features: {},
                        isolatedBacklog: !1,
                        loaderType: void 0,
                        maxBytes: 6 === x.H ? 2e3 : 3e4,
                        offset: (0, E.yf)(),
                        onerror: void 0,
                        origin: "" + T._A?.location,
                        ptid: void 0,
                        releaseIds: {},
                        sessionId: 1 == v(r, "privacy.cookies_enabled") ? C() : null,
                        xhrWrappable: I && N && N.addEventListener && !/CriOS/.test(navigator.userAgent),
                        userAgent: n
                    })), (0, i.Qy)(e, R[e], "runtime")
                }

                function V(e) {
                    return function(e) {
                        try {
                            const t = d(e);
                            return !!t.licenseKey && !!t.errorBeacon && !!t.applicationID
                        } catch (e) {
                            return !1
                        }
                    }(e)
                }
            },
            8226: (e, t, r) => {
                "use strict";
                r.d(t, {
                    q: () => n
                });
                const n = "1223.PROD"
            },
            9557: (e, t, r) => {
                "use strict";
                r.d(t, {
                    w: () => o
                });
                var n = r(8610);
                const i = {
                    agentIdentifier: ""
                };
                class o {
                    constructor(e) {
                        try {
                            if ("object" != typeof e) return (0, n.Z)("shared context requires an object as input");
                            this.sharedContext = {}, Object.assign(this.sharedContext, i), Object.entries(e).forEach((e => {
                                let [t, r] = e;
                                Object.keys(i).includes(t) && (this.sharedContext[t] = r)
                            }))
                        } catch (e) {
                            (0, n.Z)("An error occured while setting SharedContext", e)
                        }
                    }
                }
            },
            4329: (e, t, r) => {
                "use strict";
                r.d(t, {
                    L: () => d,
                    R: () => c
                });
                var n = r(3752),
                    i = r(7022),
                    o = r(4045),
                    a = r(2325);
                const s = {};

                function c(e, t) {
                    const r = {
                        staged: !1,
                        priority: a.p[t] || 0
                    };
                    u(e), s[e].get(t) || s[e].set(t, r)
                }

                function u(e) {
                    e && (s[e] || (s[e] = new Map))
                }

                function d() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "feature";
                    if (u(e), !e || !s[e].get(t)) return a(t);
                    s[e].get(t).staged = !0;
                    const r = Array.from(s[e]);

                    function a(t) {
                        const r = e ? n.ee.get(e) : n.ee,
                            a = o.X.handlers;
                        if (r.backlog && a) {
                            var s = r.backlog[t],
                                c = a[t];
                            if (c) {
                                for (var u = 0; s && u < s.length; ++u) l(s[u], c);
                                (0, i.D)(c, (function(e, t) {
                                    (0, i.D)(t, (function(t, r) {
                                        r[0].on(e, r[1])
                                    }))
                                }))
                            }
                            delete a[t], r.backlog[t] = null, r.emit("drain-" + t, [])
                        }
                    }
                    r.every((e => {
                        let [t, r] = e;
                        return r.staged
                    })) && (r.sort(((e, t) => e[1].priority - t[1].priority)), r.forEach((e => {
                        let [t] = e;
                        a(t)
                    })))
                }

                function l(e, t) {
                    var r = e[1];
                    (0, i.D)(t[r], (function(t, r) {
                        var n = e[0];
                        if (r[0] === n) {
                            var i = r[1],
                                o = e[3],
                                a = e[2];
                            i.apply(o, a)
                        }
                    }))
                }
            },
            3752: (e, t, r) => {
                "use strict";
                r.d(t, {
                    ee: () => u
                });
                var n = r(6797),
                    i = r(3916),
                    o = r(7022),
                    a = r(6562),
                    s = "nr@context";
                let c = (0, n.fP)();
                var u;

                function d() {}

                function l() {
                    return new d
                }

                function f() {
                    (u.backlog.api || u.backlog.feature) && (u.aborted = !0, u.backlog = {})
                }
                c.ee ? u = c.ee : (u = function e(t, r) {
                    var n = {},
                        c = {},
                        g = {},
                        h = !1;
                    try {
                        h = 16 === r.length && (0, a.OP)(r).isolatedBacklog
                    } catch (e) {}
                    var p = {
                        on: b,
                        addEventListener: b,
                        removeEventListener: w,
                        emit: m,
                        get: A,
                        listeners: y,
                        context: v,
                        buffer: x,
                        abort: f,
                        aborted: !1,
                        isBuffering: E,
                        debugId: r,
                        backlog: h ? {} : t && "object" == typeof t.backlog ? t.backlog : {}
                    };
                    return p;

                    function v(e) {
                        return e && e instanceof d ? e : e ? (0, i.X)(e, s, l) : l()
                    }

                    function m(e, r, n, i, o) {
                        if (!1 !== o && (o = !0), !u.aborted || i) {
                            t && o && t.emit(e, r, n);
                            for (var a = v(n), s = y(e), d = s.length, l = 0; l < d; l++) s[l].apply(a, r);
                            var f = O()[c[e]];
                            return f && f.push([p, e, r, a]), a
                        }
                    }

                    function b(e, t) {
                        n[e] = y(e).concat(t)
                    }

                    function w(e, t) {
                        var r = n[e];
                        if (r)
                            for (var i = 0; i < r.length; i++) r[i] === t && r.splice(i, 1)
                    }

                    function y(e) {
                        return n[e] || []
                    }

                    function A(t) {
                        return g[t] = g[t] || e(p, t)
                    }

                    function x(e, t) {
                        var r = O();
                        p.aborted || (0, o.D)(e, (function(e, n) {
                            t = t || "feature", c[n] = t, t in r || (r[t] = [])
                        }))
                    }

                    function E(e) {
                        return !!O()[c[e]]
                    }

                    function O() {
                        return p.backlog
                    }
                }(void 0, "globalEE"), c.ee = u)
            },
            9252: (e, t, r) => {
                "use strict";
                r.d(t, {
                    E: () => n,
                    p: () => i
                });
                var n = r(3752).ee.get("handle");

                function i(e, t, r, i, o) {
                    o ? (o.buffer([e], i), o.emit(e, t, r)) : (n.buffer([e], i), n.emit(e, t, r))
                }
            },
            4045: (e, t, r) => {
                "use strict";
                r.d(t, {
                    X: () => o
                });
                var n = r(9252);
                o.on = a;
                var i = o.handlers = {};

                function o(e, t, r, o) {
                    a(o || n.E, i, e, t, r)
                }

                function a(e, t, r, i, o) {
                    o || (o = "feature"), e || (e = n.E);
                    var a = t[o] = t[o] || {};
                    (a[r] = a[r] || []).push([e, i])
                }
            },
            8544: (e, t, r) => {
                "use strict";
                r.d(t, {
                    bP: () => s,
                    iz: () => c,
                    m$: () => a
                });
                var n = r(2374),
                    i = !1;
                try {
                    var o = Object.defineProperty({}, "passive", {
                        get: function() {
                            i = !0
                        }
                    });
                    n._A?.addEventListener("testPassive", null, o), n._A?.removeEventListener("testPassive", null, o)
                } catch (e) {}

                function a(e) {
                    return i ? {
                        passive: !0,
                        capture: !!e
                    } : !!e
                }

                function s(e, t) {
                    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    window.addEventListener(e, t, a(r))
                }

                function c(e, t) {
                    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    document.addEventListener(e, t, a(r))
                }
            },
            5526: (e, t, r) => {
                "use strict";
                r.d(t, {
                    Rl: () => i,
                    ky: () => o
                });
                var n = r(2374);

                function i() {
                    var e = null,
                        t = 0,
                        r = n._A?.crypto || n._A?.msCrypto;

                    function i() {
                        return e ? 15 & e[t++] : 16 * Math.random() | 0
                    }
                    r && r.getRandomValues && (e = r.getRandomValues(new Uint8Array(31)));
                    for (var o, a = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx", s = "", c = 0; c < a.length; c++) s += "x" === (o = a[c]) ? i().toString(16) : "y" === o ? (o = 3 & i() | 8).toString(16) : o;
                    return s
                }

                function o(e) {
                    var t = null,
                        r = 0,
                        n = self.crypto || self.msCrypto;
                    n && n.getRandomValues && Uint8Array && (t = n.getRandomValues(new Uint8Array(31)));
                    for (var i = [], o = 0; o < e; o++) i.push(a().toString(16));
                    return i.join("");

                    function a() {
                        return t ? 15 & t[r++] : 16 * Math.random() | 0
                    }
                }
            },
            2053: (e, t, r) => {
                "use strict";
                r.d(t, {
                    nb: () => c,
                    os: () => u,
                    yf: () => s,
                    zO: () => a
                });
                var n = r(7145),
                    i = (new Date).getTime(),
                    o = i;

                function a() {
                    return n.G && performance.now ? Math.round(performance.now()) : (i = Math.max((new Date).getTime(), i)) - o
                }

                function s() {
                    return i
                }

                function c(e) {
                    o = e
                }

                function u() {
                    return o
                }
            },
            7145: (e, t, r) => {
                "use strict";
                r.d(t, {
                    G: () => n
                });
                const n = void 0 !== r(2374)._A?.performance?.timing?.navigationStart
            },
            6625: (e, t, r) => {
                "use strict";
                r.d(t, {
                    s: () => c,
                    v: () => u
                });
                var n = r(8283),
                    i = r(9071),
                    o = r(2053),
                    a = r(7145),
                    s = r(2374);
                let c = !0;

                function u(e) {
                    var t = function() {
                        if (i.I && i.I < 9) return;
                        if (a.G) return c = !1, s._A?.performance?.timing?.navigationStart
                    }();
                    t && ((0, n.B)(e, "starttime", t), (0, o.nb)(t))
                }
            },
            8283: (e, t, r) => {
                "use strict";
                r.d(t, {
                    B: () => o,
                    L: () => a
                });
                var n = r(2053),
                    i = {};

                function o(e, t, r) {
                    void 0 === r && (r = (0, n.zO)() + (0, n.os)()), i[e] = i[e] || {}, i[e][t] = r
                }

                function a(e, t, r, n) {
                    const o = e.sharedContext.agentIdentifier;
                    var a = i[o]?.[r],
                        s = i[o]?.[n];
                    void 0 !== a && void 0 !== s && e.store("measures", t, {
                        value: s - a
                    })
                }
            },
            9548: (e, t, r) => {
                "use strict";
                r.d(t, {
                    T: () => i
                });
                var n = r(2374);
                const i = {
                    isFileProtocol: function() {
                        let e = Boolean("file:" === (0, n.lW)()?.location?.protocol);
                        e && (i.supportabilityMetricSent = !0);
                        return e
                    },
                    supportabilityMetricSent: !1
                }
            },
            8610: (e, t, r) => {
                "use strict";

                function n(e, t) {
                    console && console.warn && "function" == typeof console.warn && (console.warn(`New Relic: ${e}`), t && console.warn(t))
                }
                r.d(t, {
                    Z: () => n
                })
            },
            3916: (e, t, r) => {
                "use strict";
                r.d(t, {
                    X: () => i
                });
                var n = Object.prototype.hasOwnProperty;

                function i(e, t, r) {
                    if (n.call(e, t)) return e[t];
                    var i = r();
                    if (Object.defineProperty && Object.keys) try {
                        return Object.defineProperty(e, t, {
                            value: i,
                            writable: !0,
                            enumerable: !1
                        }), i
                    } catch (e) {}
                    return e[t] = i, i
                }
            },
            2374: (e, t, r) => {
                "use strict";
                r.d(t, {
                    _A: () => o,
                    il: () => n,
                    lW: () => a,
                    v6: () => i
                });
                const n = Boolean("undefined" != typeof window && window.document),
                    i = Boolean("undefined" != typeof WorkerGlobalScope && self.navigator instanceof WorkerNavigator);
                let o = (() => {
                    if (n) return window;
                    if (i) {
                        if ("undefined" != typeof globalThis && globalThis instanceof WorkerGlobalScope) return globalThis;
                        if (self instanceof WorkerGlobalScope) return self
                    }
                    throw new Error("New Relic browser agent shutting down due to error: Unable to locate global scope. This is possibly due to code redefining browser global variables like `self` and `window`.")
                })();

                function a() {
                    return o
                }
            },
            7022: (e, t, r) => {
                "use strict";
                r.d(t, {
                    D: () => i
                });
                var n = Object.prototype.hasOwnProperty;

                function i(e, t) {
                    var r = [],
                        i = "",
                        o = 0;
                    for (i in e) n.call(e, i) && (r[o] = t(i, e[i]), o += 1);
                    return r
                }
            },
            9226: (e, t, r) => {
                "use strict";
                r.d(t, {
                    $c: () => u,
                    Ng: () => d,
                    RR: () => c
                });
                var n = r(6562),
                    i = r(9557),
                    o = r(9548),
                    a = r(8610),
                    s = {
                        regex: /^file:\/\/(.*)/,
                        replacement: "file://OBFUSCATED"
                    };
                class c extends i.w {
                    constructor(e) {
                        super(e)
                    }
                    shouldObfuscate() {
                        return u(this.sharedContext.agentIdentifier).length > 0
                    }
                    obfuscateString(e) {
                        if (!e || "string" != typeof e) return e;
                        for (var t = u(this.sharedContext.agentIdentifier), r = e, n = 0; n < t.length; n++) {
                            var i = t[n].regex,
                                o = t[n].replacement || "*";
                            r = r.replace(i, o)
                        }
                        return r
                    }
                }

                function u(e) {
                    var t = [],
                        r = (0, n.Mt)(e, "obfuscate") || [];
                    return t = t.concat(r), o.T.isFileProtocol() && t.push(s), t
                }

                function d(e) {
                    for (var t = !1, r = !1, n = 0; n < e.length; n++) {
                        "regex" in e[n] ? "string" != typeof e[n].regex && e[n].regex.constructor !== RegExp && ((0, a.Z)('An obfuscation replacement rule contains a "regex" value with an invalid type (must be a string or RegExp)'), r = !0) : ((0, a.Z)('An obfuscation replacement rule was detected missing a "regex" value.'), r = !0);
                        var i = e[n].replacement;
                        i && "string" != typeof i && ((0, a.Z)('An obfuscation replacement rule contains a "replacement" value with an invalid type (must be a string)'), t = !0)
                    }
                    return !t && !r
                }
            },
            2650: (e, t, r) => {
                "use strict";
                r.d(t, {
                    K: () => a,
                    b: () => o
                });
                var n = r(8544);

                function i() {
                    return "undefined" == typeof document || "complete" === document.readyState
                }

                function o(e, t) {
                    if (i()) return e();
                    (0, n.bP)("load", e, t)
                }

                function a(e) {
                    if (i()) return e();
                    (0, n.iz)("DOMContentLoaded", e)
                }
            },
            6797: (e, t, r) => {
                "use strict";
                r.d(t, {
                    EZ: () => u,
                    Qy: () => c,
                    ce: () => o,
                    fP: () => a,
                    gG: () => d,
                    mF: () => s
                });
                var n = r(2053),
                    i = r(2374);
                const o = {
                    beacon: "bam.nr-data.net",
                    errorBeacon: "bam.nr-data.net"
                };

                function a() {
                    return i._A.NREUM || (i._A.NREUM = {}), void 0 === i._A.newrelic && (i._A.newrelic = i._A.NREUM), i._A.NREUM
                }

                function s() {
                    let e = a();
                    return e.o || (e.o = {
                        ST: i._A.setTimeout,
                        SI: i._A.setImmediate,
                        CT: i._A.clearTimeout,
                        XHR: i._A.XMLHttpRequest,
                        REQ: i._A.Request,
                        EV: i._A.Event,
                        PR: i._A.Promise,
                        MO: i._A.MutationObserver,
                        FETCH: i._A.fetch
                    }), e
                }

                function c(e, t, r) {
                    let i = a();
                    const o = i.initializedAgents || {},
                        s = o[e] || {};
                    return Object.keys(s).length || (s.initializedAt = {
                        ms: (0, n.zO)(),
                        date: new Date
                    }), i.initializedAgents = {
                        ...o,
                        [e]: {
                            ...s,
                            [r]: t
                        }
                    }, i
                }

                function u(e, t) {
                    a()[e] = t
                }

                function d() {
                    return function() {
                            let e = a();
                            const t = e.info || {};
                            e.info = {
                                beacon: o.beacon,
                                errorBeacon: o.errorBeacon,
                                ...t
                            }
                        }(),
                        function() {
                            let e = a();
                            const t = e.init || {};
                            e.init = {
                                ...t
                            }
                        }(), s(),
                        function() {
                            let e = a();
                            const t = e.loader_config || {};
                            e.loader_config = {
                                ...t
                            }
                        }(), a()
                }
            },
            6998: (e, t, r) => {
                "use strict";
                r.d(t, {
                    N: () => i,
                    e: () => o
                });
                var n = r(8544);

                function i(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return void(0, n.iz)("visibilitychange", r);

                    function r() {
                        if (t) {
                            if ("hidden" != document.visibilityState) return;
                            e()
                        }
                        e(document.visibilityState)
                    }
                }

                function o() {
                    return "hidden" === document.visibilityState ? -1 : 1 / 0
                }
            },
            6034: (e, t, r) => {
                "use strict";
                r.d(t, {
                    t: () => n
                });
                const n = r(2325).D.metrics
            },
            2484: (e, t, r) => {
                "use strict";
                r.d(t, {
                    t: () => n
                });
                const n = r(2325).D.pageViewEvent
            },
            6382: (e, t, r) => {
                "use strict";
                r.d(t, {
                    t: () => n
                });
                const n = r(2325).D.pageViewTiming
            },
            1509: (e, t, r) => {
                "use strict";
                r.d(t, {
                    W: () => s
                });
                var n = r(6562),
                    i = r(3752),
                    o = r(2384),
                    a = r(6797);
                class s {
                    constructor(e, t, r) {
                        this.agentIdentifier = e, this.aggregator = t, this.ee = i.ee.get(e, (0, n.OP)(this.agentIdentifier).isolatedBacklog), this.featureName = r, this.blocked = !1, this.checkConfiguration()
                    }
                    checkConfiguration() {
                        if (!(0, n.lF)(this.agentIdentifier)) {
                            let e = {
                                ...(0, a.gG)().info?.jsAttributes
                            };
                            try {
                                e = {
                                    ...e,
                                    ...(0, n.C5)(this.agentIdentifier)?.jsAttributes
                                }
                            } catch (e) {}(0, o.j)(this.agentIdentifier, {
                                ...(0, a.gG)(),
                                info: {
                                    ...(0, a.gG)().info,
                                    jsAttributes: e
                                }
                            })
                        }
                    }
                }
            },
            2384: (e, t, r) => {
                "use strict";
                r.d(t, {
                    j: () => w
                });
                var n = r(8683),
                    i = r.n(n),
                    o = r(2325),
                    a = r(6562),
                    s = r(9252),
                    c = r(7022),
                    u = r(3752),
                    d = r(2053),
                    l = r(4329),
                    f = r(2650),
                    g = r(2374);

                function h(e, t, n) {
                    n || (0, l.R)(e, "api"),
                        function(e) {
                            function t(t) {
                                for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) n[i - 1] = arguments[i];
                                Object.values(e.initializedAgents).forEach((e => {
                                    e.exposed && e.api[t] && e.api[t](...n)
                                }))
                            } ["setErrorHandler", "finished", "addToTrace", "inlineHit", "addRelease", "addPageAction", "setCurrentRouteName", "setPageViewName", "setCustomAttribute", "interaction", "noticeError"].forEach((r => {
                                e[r] = function() {
                                    for (var e = arguments.length, n = new Array(e), i = 0; i < e; i++) n[i] = arguments[i];
                                    return t(r, ...n)
                                }
                            }))
                        }(t);
                    var h = u.ee.get(e),
                        p = h.get("tracer"),
                        v = "api-",
                        m = "api-ixn-";

                    function b() {}(0, c.D)(["setErrorHandler", "finished", "addToTrace", "inlineHit", "addRelease"], (function(e, r) {
                        t[r] = y(v, r, !0, "api")
                    })), t.addPageAction = y(v, "addPageAction", !0, o.D.pageAction), t.setCurrentRouteName = y(v, "routeName", !0, o.D.spa), t.setPageViewName = function(t, r) {
                        if ("string" == typeof t) return "/" !== t.charAt(0) && (t = "/" + t), (0, a.OP)(e).customTransaction = (r || "http://custom.transaction") + t, y(v, "setPageViewName", !0, "api")()
                    }, t.setCustomAttribute = function(t, r) {
                        const n = (0, a.C5)(e);
                        return (0, a.CX)(e, {
                            ...n,
                            jsAttributes: {
                                ...n.jsAttributes,
                                [t]: r
                            }
                        }), y(v, "setCustomAttribute", !0, "api")()
                    }, t.interaction = function() {
                        return (new b).get()
                    };
                    var w = b.prototype = {
                        createTracer: function(e, t) {
                            var r = {},
                                n = this,
                                i = "function" == typeof t;
                            return (0, s.p)("api-ixn-tracer", [(0, d.zO)(), e, r], n, o.D.spa, h),
                                function() {
                                    if (p.emit((i ? "" : "no-") + "fn-start", [(0, d.zO)(), n, i], r), i) try {
                                        return t.apply(this, arguments)
                                    } catch (e) {
                                        throw p.emit("fn-err", [arguments, this, "string" == typeof e ? new Error(e) : e], r), e
                                    } finally {
                                        p.emit("fn-end", [(0, d.zO)()], r)
                                    }
                                }
                        }
                    };

                    function y(e, t, r, n) {
                        return function() {
                            return (0, s.p)("record-supportability", ["API/" + t + "/called"], void 0, o.D.metrics, h), (0, s.p)(e + t, [(0, d.zO)()].concat(i()(arguments)), r ? null : this, n, h), r ? void 0 : this
                        }
                    }

                    function A() {
                        r.e(692).then(r.bind(r, 5692)).then((t => {
                            let {
                                setAPI: r
                            } = t;
                            r(e), (0, l.L)(e, "api")
                        }))
                    }(0, c.D)("actionText,setName,setAttribute,save,ignore,onEnd,getContext,end,get".split(","), (function(e, t) {
                        w[t] = y(m, t, void 0, o.D.spa)
                    })), t.noticeError = function(e, t) {
                        "string" == typeof e && (e = new Error(e)), (0, s.p)("record-supportability", ["API/noticeError/called"], void 0, o.D.metrics, h), (0, s.p)("err", [e, (0, d.zO)(), !1, t], void 0, o.D.jserrors, h)
                    }, g.v6 ? A() : (0, f.b)((() => A()), !0)
                }
                var p = r(6797);
                const v = {
                    stn: o.D.sessionTrace,
                    err: o.D.jserrors,
                    ins: o.D.pageAction,
                    spa: o.D.spa
                };

                function m(e, t) {
                    var r = u.ee.get(t);
                    e && "object" == typeof e && ((0, c.D)(e, (function(e, t) {
                        if (!t) return (0, s.p)("block-" + e, [], void 0, v[e], r);
                        t && !b[e] && ((0, s.p)("feat-" + e, [], void 0, v[e], r), b[e] = !0)
                    })), (0, l.L)(t, o.D.pageViewEvent))
                }
                const b = {};

                function w(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = arguments.length > 2 ? arguments[2] : void 0,
                        n = arguments.length > 3 ? arguments[3] : void 0,
                        {
                            init: i,
                            info: o,
                            loader_config: s,
                            runtime: c = {
                                loaderType: r
                            },
                            exposed: u = !0
                        } = t;
                    const d = (0, p.gG)();
                    let l = {};
                    return o || (i = d.init, o = d.info, s = d.loader_config, l = d), g.v6 && (o.jsAttributes = {
                        ...o.jsAttributes,
                        isWorker: !0
                    }), (0, a.CX)(e, o), (0, a.Dg)(e, i || {}), (0, a.GE)(e, s || {}), (0, a.sU)(e, c), h(e, l, n), (0, p.Qy)(e, d, "api"), (0, p.Qy)(e, u, "exposed"), g.v6 || ((0, p.EZ)("activatedFeatures", b), (0, p.EZ)("setToken", (t => m(t, e)))), l
                }
            },
            909: (e, t, r) => {
                "use strict";
                r.d(t, {
                    Z: () => i,
                    q: () => o
                });
                var n = r(2325);

                function i(e) {
                    switch (e) {
                        case n.D.ajax:
                            return [n.D.jserrors];
                        case n.D.sessionTrace:
                            return [n.D.ajax, n.D.pageViewEvent];
                        case n.D.pageViewTiming:
                            return [n.D.pageViewEvent];
                        default:
                            return []
                    }
                }

                function o(e) {
                    return e === n.D.jserrors ? [] : ["auto"]
                }
            },
            2325: (e, t, r) => {
                "use strict";
                r.d(t, {
                    D: () => n,
                    p: () => i
                });
                const n = {
                        ajax: "ajax",
                        jserrors: "jserrors",
                        metrics: "metrics",
                        pageAction: "page_action",
                        pageViewEvent: "page_view_event",
                        pageViewTiming: "page_view_timing",
                        sessionTrace: "session_trace",
                        spa: "spa"
                    },
                    i = {
                        [n.pageViewEvent]: 1,
                        [n.pageViewTiming]: 2,
                        [n.metrics]: 3,
                        [n.jserrors]: 4,
                        [n.ajax]: 5,
                        [n.sessionTrace]: 6,
                        [n.pageAction]: 7,
                        [n.spa]: 8
                    }
            },
            8683: e => {
                e.exports = function(e, t, r) {
                    t || (t = 0), void 0 === r && (r = e ? e.length : 0);
                    for (var n = -1, i = r - t || 0, o = Array(i < 0 ? 0 : i); ++n < i;) o[n] = e[t + n];
                    return o
                }
            },
            4992: (e, t, r) => {
                var n = {
                    "./ajax/aggregate": [960, 779, 960],
                    "./jserrors/aggregate": [6112, 779, 112],
                    "./metrics/aggregate": [4325, 779, 325],
                    "./page_action/aggregate": [6817, 779, 817],
                    "./page_view_event/aggregate": [4823, 779, 823],
                    "./page_view_timing/aggregate": [8785, 779, 785],
                    "./session_trace/aggregate": [1307, 779, 307],
                    "./spa/aggregate": [9378, 779, 378]
                };

                function i(e) {
                    if (!r.o(n, e)) return Promise.resolve().then((() => {
                        var t = new Error("Cannot find module '" + e + "'");
                        throw t.code = "MODULE_NOT_FOUND", t
                    }));
                    var t = n[e],
                        i = t[0];
                    return Promise.all(t.slice(1).map(r.e)).then((() => r(i)))
                }
                i.keys = () => Object.keys(n), i.id = 4992, e.exports = i
            }
        },
        n = {};

    function i(e) {
        var t = n[e];
        if (void 0 !== t) return t.exports;
        var o = n[e] = {
            exports: {}
        };
        return r[e](o, o.exports, i), o.exports
    }
    i.m = r, i.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return i.d(t, {
            a: t
        }), t
    }, i.d = (e, t) => {
        for (var r in t) i.o(t, r) && !i.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
        })
    }, i.f = {}, i.e = e => Promise.all(Object.keys(i.f).reduce(((t, r) => (i.f[r](e, t), t)), [])), i.u = e => e + "." + i.h().slice(0, 8) + "-1223.js", i.h = () => "215647de1097144af948", i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), e = {}, t = "NRBA:", i.l = (r, n, o, a) => {
        if (e[r]) e[r].push(n);
        else {
            var s, c;
            if (void 0 !== o)
                for (var u = document.getElementsByTagName("script"), d = 0; d < u.length; d++) {
                    var l = u[d];
                    if (l.getAttribute("src") == r || l.getAttribute("data-webpack") == t + o) {
                        s = l;
                        break
                    }
                }
            s || (c = !0, (s = document.createElement("script")).charset = "utf-8", s.timeout = 120, i.nc && s.setAttribute("nonce", i.nc), s.setAttribute("data-webpack", t + o), s.src = r), e[r] = [n];
            var f = (t, n) => {
                    s.onerror = s.onload = null, clearTimeout(g);
                    var i = e[r];
                    if (delete e[r], s.parentNode && s.parentNode.removeChild(s), i && i.forEach((e => e(n))), t) return t(n)
                },
                g = setTimeout(f.bind(null, void 0, {
                    type: "timeout",
                    target: s
                }), 12e4);
            s.onerror = f.bind(null, s.onerror), s.onload = f.bind(null, s.onload), c && document.head.appendChild(s)
        }
    }, i.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, i.p = "https://js-agent.newrelic.com/", (() => {
        var e = {
            55: 0,
            308: 0
        };
        i.f.j = (t, r) => {
            var n = i.o(e, t) ? e[t] : void 0;
            if (0 !== n)
                if (n) r.push(n[2]);
                else {
                    var o = new Promise(((r, i) => n = e[t] = [r, i]));
                    r.push(n[2] = o);
                    var a = i.p + i.u(t),
                        s = new Error;
                    i.l(a, (r => {
                        if (i.o(e, t) && (0 !== (n = e[t]) && (e[t] = void 0), n)) {
                            var o = r && ("load" === r.type ? "missing" : r.type),
                                a = r && r.target && r.target.src;
                            s.message = "Loading chunk " + t + " failed.\n(" + o + ": " + a + ")", s.name = "ChunkLoadError", s.type = o, s.request = a, n[1](s)
                        }
                    }), "chunk-" + t, t)
                }
        };
        var t = (t, r) => {
                var n, o, [a, s, c] = r,
                    u = 0;
                if (a.some((t => 0 !== e[t]))) {
                    for (n in s) i.o(s, n) && (i.m[n] = s[n]);
                    if (c) c(i)
                }
                for (t && t(r); u < a.length; u++) o = a[u], i.o(e, o) && e[o] && e[o][0](), e[o] = 0
            },
            r = window.webpackChunkNRBA = window.webpackChunkNRBA || [];
        r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
    })();
    var o = {};
    (() => {
        "use strict";
        i.r(o);
        var e = i(2325),
            t = i(6562);
        const r = Object.values(e.D);

        function n(e) {
            const n = {};
            return r.forEach((r => {
                n[r] = function(e, r) {
                    return !1 !== (0, t.Mt)(r, `${e}.enabled`)
                }(r, e)
            })), n
        }
        var a = i(2384),
            s = i(909),
            c = i(9557),
            u = i(7022);
        class d extends c.w {
            constructor(e) {
                super(e), this.aggregatedData = {}
            }
            store(e, t, r, n, i) {
                var o = this.getBucket(e, t, r, i);
                return o.metrics = function(e, t) {
                    t || (t = {
                        count: 0
                    });
                    return t.count += 1, (0, u.D)(e, (function(e, r) {
                        t[e] = l(r, t[e])
                    })), t
                }(n, o.metrics), o
            }
            merge(e, t, r, n, i) {
                var o = this.getBucket(e, t, n, i);
                if (o.metrics) {
                    var a = o.metrics;
                    a.count += r.count, (0, u.D)(r, (function(e, t) {
                        if ("count" !== e) {
                            var n = a[e],
                                i = r[e];
                            i && !i.c ? a[e] = l(i.t, n) : a[e] = function(e, t) {
                                if (!t) return e;
                                t.c || (t = f(t.t));
                                return t.min = Math.min(e.min, t.min), t.max = Math.max(e.max, t.max), t.t += e.t, t.sos += e.sos, t.c += e.c, t
                            }(i, a[e])
                        }
                    }))
                } else o.metrics = r
            }
            storeMetric(e, t, r, n) {
                var i = this.getBucket(e, t, r);
                return i.stats = l(n, i.stats), i
            }
            getBucket(e, t, r, n) {
                this.aggregatedData[e] || (this.aggregatedData[e] = {});
                var i = this.aggregatedData[e][t];
                return i || (i = this.aggregatedData[e][t] = {
                    params: r || {}
                }, n && (i.custom = n)), i
            }
            get(e, t) {
                return t ? this.aggregatedData[e] && this.aggregatedData[e][t] : this.aggregatedData[e]
            }
            take(e) {
                for (var t = {}, r = "", n = !1, i = 0; i < e.length; i++) t[r = e[i]] = g(this.aggregatedData[r]), t[r].length && (n = !0), delete this.aggregatedData[r];
                return n ? t : null
            }
        }

        function l(e, t) {
            return null == e ? function(e) {
                e ? e.c++ : e = {
                    c: 1
                };
                return e
            }(t) : t ? (t.c || (t = f(t.t)), t.c += 1, t.t += e, t.sos += e * e, e > t.max && (t.max = e), e < t.min && (t.min = e), t) : {
                t: e
            }
        }

        function f(e) {
            return {
                t: e,
                min: e,
                max: e,
                sos: e * e,
                c: 1
            }
        }

        function g(e) {
            return "object" != typeof e ? [] : (0, u.D)(e, h)
        }

        function h(e, t) {
            return t
        }
        var p = i(6797),
            v = i(5526),
            m = i(8610);
        var b = i(9252),
            w = i(2053),
            y = i(8283),
            A = i(6625),
            x = i(4329),
            E = i(1509),
            O = i(2650),
            S = i(2374);
        class D extends E.W {
            constructor(e, t, r) {
                let n = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                super(e, t, r), this.completed = new Promise(((e, t) => {
                    this.resolve = e, this.reject = t
                })), this.hasAggregator = !1, this.auto = n, n && (0, x.R)(e, r)
            }
            importAggregator() {
                try {
                    if (this.hasAggregator || !this.auto) return;
                    this.hasAggregator = !0;
                    const e = async () => {
                        try {
                            const {
                                Aggregate: e
                            } = await i(4992)(`./${this.featureName}/aggregate`);
                            new e(this.agentIdentifier, this.aggregator), this.resolve()
                        } catch (e) {
                            (0, m.Z)(`Failed to import aggregator class for ${this.featureName}`, e)
                        }
                    };
                    S.v6 ? e() : (0, O.b)((() => e()), !0)
                } catch (e) {
                    this.reject(e)
                }
            }
        }
        var j, _, k, T = i(2484);
        class P extends D {
            constructor(e, t) {
                let r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                super(e, t, T.t, r), S.il && ((0, A.v)(e), (0, y.B)(e, "firstbyte", (0, w.yf)()), (0, O.K)((() => this.measureDomContentLoaded())), (0, O.b)((() => this.measureWindowLoaded()), !0), this.importAggregator())
            }
            measureWindowLoaded() {
                var t = (0, w.zO)();
                (0, y.B)(this.agentIdentifier, "onload", t + (0, w.os)()), (0, b.p)("timing", ["load", t], void 0, e.D.pageViewTiming, this.ee)
            }
            measureDomContentLoaded() {
                (0, y.B)(this.agentIdentifier, "domContent", (0, w.zO)() + (0, w.os)())
            }
        }
        j = P, _ = "featureName", k = T.t, _ in j ? Object.defineProperty(j, _, {
            value: k,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : j[_] = k;
        var C = i(6998),
            I = i(8544),
            N = i(6382);
        class R extends D {
            constructor(t, r) {
                var n;
                let i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                if (super(t, r, N.t, i), n = this, S.il) {
                    if (this.pageHiddenTime = (0, C.e)(), this.performanceObserver, this.lcpPerformanceObserver, this.clsPerformanceObserver, this.fiRecorded = !1, "PerformanceObserver" in window && "function" == typeof window.PerformanceObserver) {
                        this.performanceObserver = new PerformanceObserver((function() {
                            return n.perfObserver(...arguments)
                        }));
                        try {
                            this.performanceObserver.observe({
                                entryTypes: ["paint"]
                            })
                        } catch (e) {}
                        this.lcpPerformanceObserver = new PerformanceObserver((function() {
                            return n.lcpObserver(...arguments)
                        }));
                        try {
                            this.lcpPerformanceObserver.observe({
                                entryTypes: ["largest-contentful-paint"]
                            })
                        } catch (e) {}
                        this.clsPerformanceObserver = new PerformanceObserver((function() {
                            return n.clsObserver(...arguments)
                        }));
                        try {
                            this.clsPerformanceObserver.observe({
                                type: "layout-shift",
                                buffered: !0
                            })
                        } catch (e) {}
                    }
                    this.fiRecorded = !1;
                    ["click", "keydown", "mousedown", "pointerdown", "touchstart"].forEach((e => {
                        (0, I.iz)(e, (function() {
                            return n.captureInteraction(...arguments)
                        }))
                    })), (0, C.N)((() => {
                        this.pageHiddenTime = (0, w.zO)(), (0, b.p)("docHidden", [this.pageHiddenTime], void 0, e.D.pageViewTiming, this.ee)
                    }), !0), (0, I.bP)("pagehide", (() => (0, b.p)("winPagehide", [(0, w.zO)()], void 0, e.D.pageViewTiming, this.ee))), this.importAggregator()
                }
            }
            perfObserver(t, r) {
                t.getEntries().forEach((t => {
                    "first-paint" === t.name ? (0, b.p)("timing", ["fp", Math.floor(t.startTime)], void 0, e.D.pageViewTiming, this.ee) : "first-contentful-paint" === t.name && (0, b.p)("timing", ["fcp", Math.floor(t.startTime)], void 0, e.D.pageViewTiming, this.ee)
                }))
            }
            lcpObserver(t, r) {
                var n = t.getEntries();
                if (n.length > 0) {
                    var i = n[n.length - 1];
                    if (this.pageHiddenTime < i.startTime) return;
                    var o = [i],
                        a = this.addConnectionAttributes({});
                    a && o.push(a), (0, b.p)("lcp", o, void 0, e.D.pageViewTiming, this.ee)
                }
            }
            clsObserver(t) {
                t.getEntries().forEach((t => {
                    t.hadRecentInput || (0, b.p)("cls", [t], void 0, e.D.pageViewTiming, this.ee)
                }))
            }
            addConnectionAttributes(e) {
                var t = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
                if (t) return t.type && (e["net-type"] = t.type), t.effectiveType && (e["net-etype"] = t.effectiveType), t.rtt && (e["net-rtt"] = t.rtt), t.downlink && (e["net-dlink"] = t.downlink), e
            }
            captureInteraction(r) {
                if (r instanceof t.Yu.EV && !this.fiRecorded) {
                    var n = Math.round(r.timeStamp),
                        i = {
                            type: r.type
                        };
                    this.addConnectionAttributes(i), n <= (0, w.zO)() ? i.fid = (0, w.zO)() - n : n > (0, w.os)() && n <= Date.now() ? (n -= (0, w.os)(), i.fid = (0, w.zO)() - n) : n = (0, w.zO)(), this.fiRecorded = !0, (0, b.p)("timing", ["fi", n, i], void 0, e.D.pageViewTiming, this.ee)
                }
            }
        }! function(e, t, r) {
            t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r
        }(R, "featureName", N.t);
        var B = i(4045),
            M = "React",
            V = "Angular",
            q = "AngularJS",
            L = "Backbone",
            z = "Ember",
            W = "Vue",
            $ = "Meteor",
            F = "Zepto",
            G = "Jquery";

        function Z() {
            if (!S.il) return [];
            var e = [];
            try {
                (function() {
                    try {
                        if (window.React || window.ReactDOM || window.ReactRedux) return !0;
                        if (document.querySelector("[data-reactroot], [data-reactid]")) return !0;
                        for (var e = document.querySelectorAll("body > div"), t = 0; t < e.length; t++)
                            if (Object.keys(e[t]).indexOf("_reactRootContainer") >= 0) return !0;
                        return !1
                    } catch (e) {
                        return !1
                    }
                })() && e.push(M),
                    function() {
                        try {
                            return !!window.angular || (!!document.querySelector(".ng-binding, [ng-app], [data-ng-app], [ng-controller], [data-ng-controller], [ng-repeat], [data-ng-repeat]") || !!document.querySelector('script[src*="angular.js"], script[src*="angular.min.js"]'))
                        } catch (e) {
                            return !1
                        }
                    }() && e.push(q),
                    function() {
                        try {
                            return !!(window.hasOwnProperty("ng") && window.ng.hasOwnProperty("coreTokens") && window.ng.coreTokens.hasOwnProperty("NgZone")) || !!document.querySelectorAll("[ng-version]").length
                        } catch (e) {
                            return !1
                        }
                    }() && e.push(V), window.Backbone && e.push(L), window.Ember && e.push(z), window.Vue && e.push(W), window.Meteor && e.push($), window.Zepto && e.push(F), window.jQuery && e.push(G)
            } catch (e) {}
            return e
        }
        var U = i(9548),
            H = i(9226),
            X = i(8226);
        const Q = Boolean(S._A?.Worker),
            K = Boolean(S._A?.SharedWorker),
            J = Boolean(S._A?.navigator?.serviceWorker);
        let Y, ee, te;
        var re = i(6034);
        class ne extends D {
            constructor(e, t) {
                var r;
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                super(e, t, re.t, i), r = this, this.PfFeatStatusEnum = n, this.singleChecks(), this.eachSessionChecks(), (0, B.X)("record-supportability", (function() {
                    return r.recordSupportability(...arguments)
                }), this.featureName, this.ee), (0, B.X)("record-custom", (function() {
                    return r.recordCustom(...arguments)
                }), this.featureName, this.ee), this.importAggregator()
            }
            recordSupportability(e, t) {
                var r = ["sm", e, {
                    name: e
                }, t];
                return (0, b.p)("storeMetric", r, null, this.featureName, this.ee), r
            }
            recordCustom(e, t) {
                var r = ["cm", e, {
                    name: e
                }, t];
                return (0, b.p)("storeEventMetrics", r, null, this.featureName, this.ee), r
            }
            singleChecks() {
                this.recordSupportability(`Generic/Version/${X.q}/Detected`);
                const {
                    loaderType: e
                } = (0, t.OP)(this.agentIdentifier);
                e && this.recordSupportability(`Generic/LoaderType/${e}/Detected`), S.il && (0, O.K)((() => {
                    Z().forEach((e => {
                        this.recordSupportability("Framework/" + e + "/Detected")
                    }))
                })), U.T.isFileProtocol() && (this.recordSupportability("Generic/FileProtocol/Detected"), U.T.supportabilityMetricSent = !0);
                const r = (0, H.$c)(this.agentIdentifier);
                r.length > 0 && this.recordSupportability("Generic/Obfuscate/Detected"), r.length > 0 && !(0, H.Ng)(r) && this.recordSupportability("Generic/Obfuscate/Invalid"), S.il && this.reportPolyfillsNeeded(),
                    function(e) {
                        if (!Y) {
                            if (Q) {
                                Y = Worker;
                                try {
                                    S._A.Worker = r(Y, "Dedicated")
                                } catch (e) {
                                    o(e, "Dedicated")
                                }
                                if (K) {
                                    ee = SharedWorker;
                                    try {
                                        S._A.SharedWorker = r(ee, "Shared")
                                    } catch (e) {
                                        o(e, "Shared")
                                    }
                                } else n("Shared");
                                if (J) {
                                    te = navigator.serviceWorker.register;
                                    try {
                                        S._A.navigator.serviceWorker.register = (t = te, function() {
                                            for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++) r[n] = arguments[n];
                                            return i("Service", r[1]?.type), t.apply(navigator.serviceWorker, r)
                                        })
                                    } catch (e) {
                                        o(e, "Service")
                                    }
                                } else n("Service");
                                var t;
                                return
                            }
                            n("All")
                        }

                        function r(e, t) {
                            return new Proxy(e, {
                                construct: (e, r) => (i(t, r[1]?.type), new e(...r))
                            })
                        }

                        function n(t) {
                            S.v6 || e(`Workers/${t}/Unavailable`)
                        }

                        function i(t, r) {
                            e("module" === r ? `Workers/${t}/Module` : `Workers/${t}/Classic`)
                        }

                        function o(t, r) {
                            e(`Workers/${r}/SM/Unsupported`), (0, m.Z)(`NR Agent: Unable to capture ${r} workers.`, t)
                        }
                    }(this.recordSupportability.bind(this))
            }
            reportPolyfillsNeeded() {
                this.recordSupportability(`Generic/Polyfill/Promise/${this.PfFeatStatusEnum.PROMISE}`), this.recordSupportability(`Generic/Polyfill/ArrayIncludes/${this.PfFeatStatusEnum.ARRAY_INCLUDES}`), this.recordSupportability(`Generic/Polyfill/ObjectAssign/${this.PfFeatStatusEnum.OBJECT_ASSIGN}`), this.recordSupportability(`Generic/Polyfill/ObjectEntries/${this.PfFeatStatusEnum.OBJECT_ENTRIES}`)
            }
            eachSessionChecks() {
                S.il && (0, I.bP)("pageshow", (e => {
                    e.persisted && this.recordCustom("Custom/BFCache/PageRestored")
                }))
            }
        }! function(e, t, r) {
            t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r
        }(ne, "featureName", re.t);
        new class {
            constructor(t) {
                let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (0, v.ky)(16);
                this.agentIdentifier = r, this.sharedAggregator = new d({
                    agentIdentifier: this.agentIdentifier
                }), this.features = {}, this.desiredFeatures = t.features || [], this.desiredFeatures.sort(((t, r) => e.p[t.featureName] - e.p[r.featureName])), Object.assign(this, (0, a.j)(this.agentIdentifier, t, t.loaderType || "agent")), this.start()
            }
            get config() {
                return {
                    info: (0, t.C5)(this.agentIdentifier),
                    init: (0, t.P_)(this.agentIdentifier),
                    loader_config: (0, t.DL)(this.agentIdentifier),
                    runtime: (0, t.OP)(this.agentIdentifier)
                }
            }
            start() {
                try {
                    const e = n(this.agentIdentifier);
                    this.desiredFeatures.forEach((t => {
                        if (e[t.featureName]) {
                            const r = (0, s.Z)(t.featureName);
                            r.every((t => e[t])) || (0, m.Z)(`${t.featureName} is enabled but one or more dependent features has been disabled (${JSON.stringify(r)}). This may cause unintended consequences or missing data...`), this.features[t.featureName] = new t(this.agentIdentifier, this.sharedAggregator)
                        }
                    })), (0, p.Qy)(this.agentIdentifier, this.features, "features")
                } catch (e) {
                    return (0, m.Z)("Failed to initialize instrument classes", e), !1
                }
            }
        }({
            features: [P, R, ne],
            loaderType: "lite"
        })
    })(), window.NRBA = o
})();