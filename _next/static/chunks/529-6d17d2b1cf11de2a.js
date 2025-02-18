"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[529], {
    1968: (t, e, i) => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "default", {
            enumerable: !0,
            get: function() {
                return f
            }
        });
        let n = i(1162)
          , r = i(4884)
          , s = n._(i(4843))
          , o = i(5079)
          , a = i(4537)
          , l = i(9361)
          , u = i(6700)
          , h = i(3424)
          , d = i(2125)
          , c = i(763);
        function p(t, e, i) {
            "undefined" != typeof window && (async () => t.prefetch(e, i))().catch(t => {}
            )
        }
        function m(t) {
            return "string" == typeof t ? t : (0,
            o.formatUrl)(t)
        }
        i(2976);
        let f = s.default.forwardRef(function(t, e) {
            let i, n;
            let {href: o, as: f, children: v, prefetch: g=null, passHref: y, replace: x, shallow: b, scroll: w, onClick: P, onMouseEnter: T, onTouchStart: S, legacyBehavior: A=!1, ...E} = t;
            i = v,
            A && ("string" == typeof i || "number" == typeof i) && (i = (0,
            r.jsx)("a", {
                children: i
            }));
            let M = s.default.useContext(a.AppRouterContext)
              , k = !1 !== g
              , C = null === g ? u.PrefetchKind.AUTO : u.PrefetchKind.FULL
              , {href: R, as: V} = s.default.useMemo( () => {
                let t = m(o);
                return {
                    href: t,
                    as: f ? m(f) : t
                }
            }
            , [o, f])
              , D = s.default.useRef(R)
              , j = s.default.useRef(V);
            A && (n = s.default.Children.only(i));
            let L = A ? n && "object" == typeof n && n.ref : e
              , [F,O,B] = (0,
            l.useIntersection)({
                rootMargin: "200px"
            })
              , I = s.default.useCallback(t => {
                (j.current !== V || D.current !== R) && (B(),
                j.current = V,
                D.current = R),
                F(t)
            }
            , [V, R, B, F])
              , N = (0,
            h.useMergedRef)(I, L);
            s.default.useEffect( () => {
                M && O && k && p(M, R, {
                    kind: C
                })
            }
            , [V, R, O, k, M, C]);
            let U = {
                ref: N,
                onClick(t) {
                    A || "function" != typeof P || P(t),
                    A && n.props && "function" == typeof n.props.onClick && n.props.onClick(t),
                    M && !t.defaultPrevented && function(t, e, i, n, r, o, a) {
                        let {nodeName: l} = t.currentTarget;
                        "A" === l.toUpperCase() && function(t) {
                            let e = t.currentTarget.getAttribute("target");
                            return e && "_self" !== e || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || t.nativeEvent && 2 === t.nativeEvent.which
                        }(t) || (t.preventDefault(),
                        s.default.startTransition( () => {
                            let t = null == a || a;
                            "beforePopState"in e ? e[r ? "replace" : "push"](i, n, {
                                shallow: o,
                                scroll: t
                            }) : e[r ? "replace" : "push"](n || i, {
                                scroll: t
                            })
                        }
                        ))
                    }(t, M, R, V, x, b, w)
                },
                onMouseEnter(t) {
                    A || "function" != typeof T || T(t),
                    A && n.props && "function" == typeof n.props.onMouseEnter && n.props.onMouseEnter(t),
                    M && k && p(M, R, {
                        kind: C
                    })
                },
                onTouchStart: function(t) {
                    A || "function" != typeof S || S(t),
                    A && n.props && "function" == typeof n.props.onTouchStart && n.props.onTouchStart(t),
                    M && k && p(M, R, {
                        kind: C
                    })
                }
            };
            return (0,
            d.isAbsoluteUrl)(V) ? U.href = V : A && !y && ("a" !== n.type || "href"in n.props) || (U.href = (0,
            c.addBasePath)(V)),
            A ? s.default.cloneElement(n, U) : (0,
            r.jsx)("a", {
                ...E,
                ...U,
                children: i
            })
        });
        ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
            value: !0
        }),
        Object.assign(e.default, e),
        t.exports = e.default)
    }
    ,
    6152: (t, e) => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        function(t, e) {
            for (var i in e)
                Object.defineProperty(t, i, {
                    enumerable: !0,
                    get: e[i]
                })
        }(e, {
            cancelIdleCallback: function() {
                return n
            },
            requestIdleCallback: function() {
                return i
            }
        });
        let i = "undefined" != typeof self && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(t) {
            let e = Date.now();
            return self.setTimeout(function() {
                t({
                    didTimeout: !1,
                    timeRemaining: function() {
                        return Math.max(0, 50 - (Date.now() - e))
                    }
                })
            }, 1)
        }
          , n = "undefined" != typeof self && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(t) {
            return clearTimeout(t)
        }
        ;
        ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
            value: !0
        }),
        Object.assign(e.default, e),
        t.exports = e.default)
    }
    ,
    9361: (t, e, i) => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "useIntersection", {
            enumerable: !0,
            get: function() {
                return l
            }
        });
        let n = i(4843)
          , r = i(6152)
          , s = "function" == typeof IntersectionObserver
          , o = new Map
          , a = [];
        function l(t) {
            let {rootRef: e, rootMargin: i, disabled: l} = t
              , u = l || !s
              , [h,d] = (0,
            n.useState)(!1)
              , c = (0,
            n.useRef)(null)
              , p = (0,
            n.useCallback)(t => {
                c.current = t
            }
            , []);
            return (0,
            n.useEffect)( () => {
                if (s) {
                    if (u || h)
                        return;
                    let t = c.current;
                    if (t && t.tagName)
                        return function(t, e, i) {
                            let {id: n, observer: r, elements: s} = function(t) {
                                let e;
                                let i = {
                                    root: t.root || null,
                                    margin: t.rootMargin || ""
                                }
                                  , n = a.find(t => t.root === i.root && t.margin === i.margin);
                                if (n && (e = o.get(n)))
                                    return e;
                                let r = new Map;
                                return e = {
                                    id: i,
                                    observer: new IntersectionObserver(t => {
                                        t.forEach(t => {
                                            let e = r.get(t.target)
                                              , i = t.isIntersecting || t.intersectionRatio > 0;
                                            e && i && e(i)
                                        }
                                        )
                                    }
                                    ,t),
                                    elements: r
                                },
                                a.push(i),
                                o.set(i, e),
                                e
                            }(i);
                            return s.set(t, e),
                            r.observe(t),
                            function() {
                                if (s.delete(t),
                                r.unobserve(t),
                                0 === s.size) {
                                    r.disconnect(),
                                    o.delete(n);
                                    let t = a.findIndex(t => t.root === n.root && t.margin === n.margin);
                                    t > -1 && a.splice(t, 1)
                                }
                            }
                        }(t, t => t && d(t), {
                            root: null == e ? void 0 : e.current,
                            rootMargin: i
                        })
                } else if (!h) {
                    let t = (0,
                    r.requestIdleCallback)( () => d(!0));
                    return () => (0,
                    r.cancelIdleCallback)(t)
                }
            }
            , [u, i, e, h, c.current]),
            [p, h, (0,
            n.useCallback)( () => {
                d(!1)
            }
            , [])]
        }
        ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
            value: !0
        }),
        Object.assign(e.default, e),
        t.exports = e.default)
    }
    ,
    3424: (t, e, i) => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "useMergedRef", {
            enumerable: !0,
            get: function() {
                return r
            }
        });
        let n = i(4843);
        function r(t, e) {
            let i = (0,
            n.useRef)( () => {}
            )
              , r = (0,
            n.useRef)( () => {}
            );
            return (0,
            n.useMemo)( () => t && e ? n => {
                null === n ? (i.current(),
                r.current()) : (i.current = s(t, n),
                r.current = s(e, n))
            }
            : t || e, [t, e])
        }
        function s(t, e) {
            if ("function" != typeof t)
                return t.current = e,
                () => {
                    t.current = null
                }
                ;
            {
                let i = t(e);
                return "function" == typeof i ? i : () => t(null)
            }
        }
        ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
            value: !0
        }),
        Object.assign(e.default, e),
        t.exports = e.default)
    }
    ,
    5079: (t, e, i) => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        function(t, e) {
            for (var i in e)
                Object.defineProperty(t, i, {
                    enumerable: !0,
                    get: e[i]
                })
        }(e, {
            formatUrl: function() {
                return s
            },
            formatWithValidation: function() {
                return a
            },
            urlObjectKeys: function() {
                return o
            }
        });
        let n = i(8251)._(i(6773))
          , r = /https?|ftp|gopher|file/;
        function s(t) {
            let {auth: e, hostname: i} = t
              , s = t.protocol || ""
              , o = t.pathname || ""
              , a = t.hash || ""
              , l = t.query || ""
              , u = !1;
            e = e ? encodeURIComponent(e).replace(/%3A/i, ":") + "@" : "",
            t.host ? u = e + t.host : i && (u = e + (~i.indexOf(":") ? "[" + i + "]" : i),
            t.port && (u += ":" + t.port)),
            l && "object" == typeof l && (l = String(n.urlQueryToSearchParams(l)));
            let h = t.search || l && "?" + l || "";
            return s && !s.endsWith(":") && (s += ":"),
            t.slashes || (!s || r.test(s)) && !1 !== u ? (u = "//" + (u || ""),
            o && "/" !== o[0] && (o = "/" + o)) : u || (u = ""),
            a && "#" !== a[0] && (a = "#" + a),
            h && "?" !== h[0] && (h = "?" + h),
            "" + s + u + (o = o.replace(/[?#]/g, encodeURIComponent)) + (h = h.replace("#", "%23")) + a
        }
        let o = ["auth", "hash", "host", "hostname", "href", "path", "pathname", "port", "protocol", "query", "search", "slashes"];
        function a(t) {
            return s(t)
        }
    }
    ,
    6773: (t, e) => {
        function i(t) {
            let e = {};
            return t.forEach( (t, i) => {
                void 0 === e[i] ? e[i] = t : Array.isArray(e[i]) ? e[i].push(t) : e[i] = [e[i], t]
            }
            ),
            e
        }
        function n(t) {
            return "string" != typeof t && ("number" != typeof t || isNaN(t)) && "boolean" != typeof t ? "" : String(t)
        }
        function r(t) {
            let e = new URLSearchParams;
            return Object.entries(t).forEach(t => {
                let[i,r] = t;
                Array.isArray(r) ? r.forEach(t => e.append(i, n(t))) : e.set(i, n(r))
            }
            ),
            e
        }
        function s(t) {
            for (var e = arguments.length, i = Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
                i[n - 1] = arguments[n];
            return i.forEach(e => {
                Array.from(e.keys()).forEach(e => t.delete(e)),
                e.forEach( (e, i) => t.append(i, e))
            }
            ),
            t
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        function(t, e) {
            for (var i in e)
                Object.defineProperty(t, i, {
                    enumerable: !0,
                    get: e[i]
                })
        }(e, {
            assign: function() {
                return s
            },
            searchParamsToUrlQuery: function() {
                return i
            },
            urlQueryToSearchParams: function() {
                return r
            }
        })
    }
    ,
    2125: (t, e) => {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        function(t, e) {
            for (var i in e)
                Object.defineProperty(t, i, {
                    enumerable: !0,
                    get: e[i]
                })
        }(e, {
            DecodeError: function() {
                return m
            },
            MiddlewareNotFoundError: function() {
                return y
            },
            MissingStaticPage: function() {
                return g
            },
            NormalizeError: function() {
                return f
            },
            PageNotFoundError: function() {
                return v
            },
            SP: function() {
                return c
            },
            ST: function() {
                return p
            },
            WEB_VITALS: function() {
                return i
            },
            execOnce: function() {
                return n
            },
            getDisplayName: function() {
                return l
            },
            getLocationOrigin: function() {
                return o
            },
            getURL: function() {
                return a
            },
            isAbsoluteUrl: function() {
                return s
            },
            isResSent: function() {
                return u
            },
            loadGetInitialProps: function() {
                return d
            },
            normalizeRepeatedSlashes: function() {
                return h
            },
            stringifyError: function() {
                return x
            }
        });
        let i = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
        function n(t) {
            let e, i = !1;
            return function() {
                for (var n = arguments.length, r = Array(n), s = 0; s < n; s++)
                    r[s] = arguments[s];
                return i || (i = !0,
                e = t(...r)),
                e
            }
        }
        let r = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/
          , s = t => r.test(t);
        function o() {
            let {protocol: t, hostname: e, port: i} = window.location;
            return t + "//" + e + (i ? ":" + i : "")
        }
        function a() {
            let {href: t} = window.location
              , e = o();
            return t.substring(e.length)
        }
        function l(t) {
            return "string" == typeof t ? t : t.displayName || t.name || "Unknown"
        }
        function u(t) {
            return t.finished || t.headersSent
        }
        function h(t) {
            let e = t.split("?");
            return e[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") + (e[1] ? "?" + e.slice(1).join("?") : "")
        }
        async function d(t, e) {
            let i = e.res || e.ctx && e.ctx.res;
            if (!t.getInitialProps)
                return e.ctx && e.Component ? {
                    pageProps: await d(e.Component, e.ctx)
                } : {};
            let n = await t.getInitialProps(e);
            if (i && u(i))
                return n;
            if (!n)
                throw Error('"' + l(t) + '.getInitialProps()" should resolve to an object. But found "' + n + '" instead.');
            return n
        }
        let c = "undefined" != typeof performance
          , p = c && ["mark", "measure", "getEntriesByName"].every(t => "function" == typeof performance[t]);
        class m extends Error {
        }
        class f extends Error {
        }
        class v extends Error {
            constructor(t) {
                super(),
                this.code = "ENOENT",
                this.name = "PageNotFoundError",
                this.message = "Cannot find module for page: " + t
            }
        }
        class g extends Error {
            constructor(t, e) {
                super(),
                this.message = "Failed to load static file for page: " + t + " " + e
            }
        }
        class y extends Error {
            constructor() {
                super(),
                this.code = "ENOENT",
                this.message = "Cannot find the middleware module"
            }
        }
        function x(t) {
            return JSON.stringify({
                message: t.message,
                stack: t.stack
            })
        }
    }
    ,
    1338: (t, e, i) => {
        i.d(e, {
            l: () => T
        });
        var n = i(4843);
        let r = (0,
        n.createContext)({
            color: "currentColor",
            size: "1em",
            weight: "regular",
            mirrored: !1
        });
        var s = Object.defineProperty
          , o = Object.getOwnPropertySymbols
          , a = Object.prototype.hasOwnProperty
          , l = Object.prototype.propertyIsEnumerable
          , u = (t, e, i) => e in t ? s(t, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: i
        }) : t[e] = i
          , h = (t, e) => {
            for (var i in e || (e = {}))
                a.call(e, i) && u(t, i, e[i]);
            if (o)
                for (var i of o(e))
                    l.call(e, i) && u(t, i, e[i]);
            return t
        }
          , d = (t, e) => {
            var i = {};
            for (var n in t)
                a.call(t, n) && 0 > e.indexOf(n) && (i[n] = t[n]);
            if (null != t && o)
                for (var n of o(t))
                    0 > e.indexOf(n) && l.call(t, n) && (i[n] = t[n]);
            return i
        }
        ;
        let c = (0,
        n.forwardRef)( (t, e) => {
            let {alt: i, color: s, size: o, weight: a, mirrored: l, children: u, weights: c} = t
              , p = d(t, ["alt", "color", "size", "weight", "mirrored", "children", "weights"])
              , m = (0,
            n.useContext)(r)
              , {color: f="currentColor", size: v, weight: g="regular", mirrored: y=!1} = m
              , x = d(m, ["color", "size", "weight", "mirrored"]);
            return n.createElement("svg", h(h({
                ref: e,
                xmlns: "http://www.w3.org/2000/svg",
                width: null != o ? o : v,
                height: null != o ? o : v,
                fill: null != s ? s : f,
                viewBox: "0 0 256 256",
                transform: l || y ? "scale(-1, 1)" : void 0
            }, x), p), !!i && n.createElement("title", null, i), u, c.get(null != a ? a : g))
        }
        );
        c.displayName = "IconBase";
        let p = new Map([["bold", n.createElement(n.Fragment, null, n.createElement("path", {
            d: "M219.71,117.38a12,12,0,0,0-7.25-8.52L161.28,88.39l10.59-70.61a12,12,0,0,0-20.64-10l-112,120a12,12,0,0,0,4.31,19.33l51.18,20.47L84.13,238.22a12,12,0,0,0,20.64,10l112-120A12,12,0,0,0,219.71,117.38ZM113.6,203.55l6.27-41.77a12,12,0,0,0-7.41-12.92L68.74,131.37,142.4,52.45l-6.27,41.77a12,12,0,0,0,7.41,12.92l43.72,17.49Z"
        }))], ["duotone", n.createElement(n.Fragment, null, n.createElement("path", {
            d: "M96,240l16-80L48,136,160,16,144,96l64,24Z",
            opacity: "0.2"
        }), n.createElement("path", {
            d: "M215.79,118.17a8,8,0,0,0-5-5.66L153.18,90.9l14.66-73.33a8,8,0,0,0-13.69-7l-112,120a8,8,0,0,0,3,13l57.63,21.61L88.16,238.43a8,8,0,0,0,13.69,7l112-120A8,8,0,0,0,215.79,118.17ZM109.37,214l10.47-52.38a8,8,0,0,0-5-9.06L62,132.71l84.62-90.66L136.16,94.43a8,8,0,0,0,5,9.06l52.8,19.8Z"
        }))], ["fill", n.createElement(n.Fragment, null, n.createElement("path", {
            d: "M213.85,125.46l-112,120a8,8,0,0,1-13.69-7l14.66-73.33L45.19,143.49a8,8,0,0,1-3-13l112-120a8,8,0,0,1,13.69,7L153.18,90.9l57.63,21.61a8,8,0,0,1,3,12.95Z"
        }))], ["light", n.createElement(n.Fragment, null, n.createElement("path", {
            d: "M213.84,118.63a6,6,0,0,0-3.73-4.25L150.88,92.17l15-75a6,6,0,0,0-10.27-5.27l-112,120a6,6,0,0,0,2.28,9.71l59.23,22.21-15,75a6,6,0,0,0,3.14,6.52A6.07,6.07,0,0,0,96,246a6,6,0,0,0,4.39-1.91l112-120A6,6,0,0,0,213.84,118.63ZM106,220.46l11.85-59.28a6,6,0,0,0-3.77-6.8l-55.6-20.85,91.46-98L138.12,94.82a6,6,0,0,0,3.77,6.8l55.6,20.85Z"
        }))], ["regular", n.createElement(n.Fragment, null, n.createElement("path", {
            d: "M215.79,118.17a8,8,0,0,0-5-5.66L153.18,90.9l14.66-73.33a8,8,0,0,0-13.69-7l-112,120a8,8,0,0,0,3,13l57.63,21.61L88.16,238.43a8,8,0,0,0,13.69,7l112-120A8,8,0,0,0,215.79,118.17ZM109.37,214l10.47-52.38a8,8,0,0,0-5-9.06L62,132.71l84.62-90.66L136.16,94.43a8,8,0,0,0,5,9.06l52.8,19.8Z"
        }))], ["thin", n.createElement(n.Fragment, null, n.createElement("path", {
            d: "M211.89,119.09a4,4,0,0,0-2.49-2.84l-60.81-22.8,15.33-76.67a4,4,0,0,0-6.84-3.51l-112,120a4,4,0,0,0-1,3.64,4,4,0,0,0,2.49,2.84l60.81,22.8L92.08,239.22a4,4,0,0,0,6.84,3.51l112-120A4,4,0,0,0,211.89,119.09ZM102.68,227l13.24-66.2a4,4,0,0,0-2.52-4.53L55,134.36,153.32,29l-13.24,66.2a4,4,0,0,0,2.52,4.53L201,121.64Z"
        }))]]);
        var m = Object.defineProperty
          , f = Object.defineProperties
          , v = Object.getOwnPropertyDescriptors
          , g = Object.getOwnPropertySymbols
          , y = Object.prototype.hasOwnProperty
          , x = Object.prototype.propertyIsEnumerable
          , b = (t, e, i) => e in t ? m(t, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: i
        }) : t[e] = i
          , w = (t, e) => {
            for (var i in e || (e = {}))
                y.call(e, i) && b(t, i, e[i]);
            if (g)
                for (var i of g(e))
                    x.call(e, i) && b(t, i, e[i]);
            return t
        }
          , P = (t, e) => f(t, v(e));
        let T = (0,
        n.forwardRef)( (t, e) => n.createElement(c, P(w({
            ref: e
        }, t), {
            weights: p
        })));
        T.displayName = "Lightning"
    }
    ,
    6759: (t, e, i) => {
        i.d(e, {
            UC: () => tL,
            C1: () => tj,
            q7: () => tR,
            N_: () => tD,
            B8: () => tC,
            bL: () => tk,
            l9: () => tV,
            LM: () => tF
        });
        var n, r = i(4843), s = i.t(r, 2), o = i(6537), a = i(4884);
        function l(t, e=[]) {
            let i = []
              , n = () => {
                let e = i.map(t => r.createContext(t));
                return function(i) {
                    let n = i?.[t] || e;
                    return r.useMemo( () => ({
                        [`__scope${t}`]: {
                            ...i,
                            [t]: n
                        }
                    }), [i, n])
                }
            }
            ;
            return n.scopeName = t,
            [function(e, n) {
                let s = r.createContext(n)
                  , o = i.length;
                i = [...i, n];
                let l = e => {
                    let {scope: i, children: n, ...l} = e
                      , u = i?.[t]?.[o] || s
                      , h = r.useMemo( () => l, Object.values(l));
                    return (0,
                    a.jsx)(u.Provider, {
                        value: h,
                        children: n
                    })
                }
                ;
                return l.displayName = e + "Provider",
                [l, function(i, a) {
                    let l = a?.[t]?.[o] || s
                      , u = r.useContext(l);
                    if (u)
                        return u;
                    if (void 0 !== n)
                        return n;
                    throw Error(`\`${i}\` must be used within \`${e}\``)
                }
                ]
            }
            , function(...t) {
                let e = t[0];
                if (1 === t.length)
                    return e;
                let i = () => {
                    let i = t.map(t => ({
                        useScope: t(),
                        scopeName: t.scopeName
                    }));
                    return function(t) {
                        let n = i.reduce( (e, {useScope: i, scopeName: n}) => {
                            let r = i(t)[`__scope${n}`];
                            return {
                                ...e,
                                ...r
                            }
                        }
                        , {});
                        return r.useMemo( () => ({
                            [`__scope${e.scopeName}`]: n
                        }), [n])
                    }
                }
                ;
                return i.scopeName = e.scopeName,
                i
            }(n, ...e)]
        }
        function u(t, e, {checkForDefaultPrevented: i=!0}={}) {
            return function(n) {
                if (t?.(n),
                !1 === i || !n.defaultPrevented)
                    return e?.(n)
            }
        }
        function h(t, e) {
            if ("function" == typeof t)
                return t(e);
            null != t && (t.current = e)
        }
        function d(...t) {
            return e => {
                let i = !1
                  , n = t.map(t => {
                    let n = h(t, e);
                    return i || "function" != typeof n || (i = !0),
                    n
                }
                );
                if (i)
                    return () => {
                        for (let e = 0; e < n.length; e++) {
                            let i = n[e];
                            "function" == typeof i ? i() : h(t[e], null)
                        }
                    }
            }
        }
        function c(...t) {
            return r.useCallback(d(...t), t)
        }
        var p = r.forwardRef( (t, e) => {
            let {children: i, ...n} = t
              , s = r.Children.toArray(i)
              , o = s.find(v);
            if (o) {
                let t = o.props.children
                  , i = s.map(e => e !== o ? e : r.Children.count(t) > 1 ? r.Children.only(null) : r.isValidElement(t) ? t.props.children : null);
                return (0,
                a.jsx)(m, {
                    ...n,
                    ref: e,
                    children: r.isValidElement(t) ? r.cloneElement(t, void 0, i) : null
                })
            }
            return (0,
            a.jsx)(m, {
                ...n,
                ref: e,
                children: i
            })
        }
        );
        p.displayName = "Slot";
        var m = r.forwardRef( (t, e) => {
            let {children: i, ...n} = t;
            if (r.isValidElement(i)) {
                let t = function(t) {
                    let e = Object.getOwnPropertyDescriptor(t.props, "ref")?.get
                      , i = e && "isReactWarning"in e && e.isReactWarning;
                    return i ? t.ref : (i = (e = Object.getOwnPropertyDescriptor(t, "ref")?.get) && "isReactWarning"in e && e.isReactWarning) ? t.props.ref : t.props.ref || t.ref
                }(i)
                  , s = function(t, e) {
                    let i = {
                        ...e
                    };
                    for (let n in e) {
                        let r = t[n]
                          , s = e[n];
                        /^on[A-Z]/.test(n) ? r && s ? i[n] = (...t) => {
                            s(...t),
                            r(...t)
                        }
                        : r && (i[n] = r) : "style" === n ? i[n] = {
                            ...r,
                            ...s
                        } : "className" === n && (i[n] = [r, s].filter(Boolean).join(" "))
                    }
                    return {
                        ...t,
                        ...i
                    }
                }(n, i.props);
                return i.type !== r.Fragment && (s.ref = e ? d(e, t) : t),
                r.cloneElement(i, s)
            }
            return r.Children.count(i) > 1 ? r.Children.only(null) : null
        }
        );
        m.displayName = "SlotClone";
        var f = ({children: t}) => (0,
        a.jsx)(a.Fragment, {
            children: t
        });
        function v(t) {
            return r.isValidElement(t) && t.type === f
        }
        var g = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce( (t, e) => {
            let i = r.forwardRef( (t, i) => {
                let {asChild: n, ...r} = t
                  , s = n ? p : e;
                return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0),
                (0,
                a.jsx)(s, {
                    ...r,
                    ref: i
                })
            }
            );
            return i.displayName = `Primitive.${e}`,
            {
                ...t,
                [e]: i
            }
        }
        , {});
        function y(t, e) {
            t && o.flushSync( () => t.dispatchEvent(e))
        }
        function x(t) {
            let e = r.useRef(t);
            return r.useEffect( () => {
                e.current = t
            }
            ),
            r.useMemo( () => (...t) => e.current?.(...t), [])
        }
        function b({prop: t, defaultProp: e, onChange: i= () => {}
        }) {
            let[n,s] = function({defaultProp: t, onChange: e}) {
                let i = r.useState(t)
                  , [n] = i
                  , s = r.useRef(n)
                  , o = x(e);
                return r.useEffect( () => {
                    s.current !== n && (o(n),
                    s.current = n)
                }
                , [n, s, o]),
                i
            }({
                defaultProp: e,
                onChange: i
            })
              , o = void 0 !== t
              , a = o ? t : n
              , l = x(i);
            return [a, r.useCallback(e => {
                if (o) {
                    let i = "function" == typeof e ? e(t) : e;
                    i !== t && l(i)
                } else
                    s(e)
            }
            , [o, t, s, l])]
        }
        var w = r.createContext(void 0)
          , P = globalThis?.document ? r.useLayoutEffect : () => {}
          , T = t => {
            let {present: e, children: i} = t
              , n = function(t) {
                var e, i;
                let[n,s] = r.useState()
                  , o = r.useRef({})
                  , a = r.useRef(t)
                  , l = r.useRef("none")
                  , [u,h] = (e = t ? "mounted" : "unmounted",
                i = {
                    mounted: {
                        UNMOUNT: "unmounted",
                        ANIMATION_OUT: "unmountSuspended"
                    },
                    unmountSuspended: {
                        MOUNT: "mounted",
                        ANIMATION_END: "unmounted"
                    },
                    unmounted: {
                        MOUNT: "mounted"
                    }
                },
                r.useReducer( (t, e) => {
                    let n = i[t][e];
                    return null != n ? n : t
                }
                , e));
                return r.useEffect( () => {
                    let t = S(o.current);
                    l.current = "mounted" === u ? t : "none"
                }
                , [u]),
                P( () => {
                    let e = o.current
                      , i = a.current;
                    if (i !== t) {
                        let n = l.current
                          , r = S(e);
                        t ? h("MOUNT") : "none" === r || (null == e ? void 0 : e.display) === "none" ? h("UNMOUNT") : i && n !== r ? h("ANIMATION_OUT") : h("UNMOUNT"),
                        a.current = t
                    }
                }
                , [t, h]),
                P( () => {
                    if (n) {
                        var t;
                        let e;
                        let i = null !== (t = n.ownerDocument.defaultView) && void 0 !== t ? t : window
                          , r = t => {
                            let r = S(o.current).includes(t.animationName);
                            if (t.target === n && r && (h("ANIMATION_END"),
                            !a.current)) {
                                let t = n.style.animationFillMode;
                                n.style.animationFillMode = "forwards",
                                e = i.setTimeout( () => {
                                    "forwards" === n.style.animationFillMode && (n.style.animationFillMode = t)
                                }
                                )
                            }
                        }
                          , s = t => {
                            t.target === n && (l.current = S(o.current))
                        }
                        ;
                        return n.addEventListener("animationstart", s),
                        n.addEventListener("animationcancel", r),
                        n.addEventListener("animationend", r),
                        () => {
                            i.clearTimeout(e),
                            n.removeEventListener("animationstart", s),
                            n.removeEventListener("animationcancel", r),
                            n.removeEventListener("animationend", r)
                        }
                    }
                    h("ANIMATION_END")
                }
                , [n, h]),
                {
                    isPresent: ["mounted", "unmountSuspended"].includes(u),
                    ref: r.useCallback(t => {
                        t && (o.current = getComputedStyle(t)),
                        s(t)
                    }
                    , [])
                }
            }(e)
              , s = "function" == typeof i ? i({
                present: n.isPresent
            }) : r.Children.only(i)
              , o = c(n.ref, function(t) {
                var e, i;
                let n = null === (e = Object.getOwnPropertyDescriptor(t.props, "ref")) || void 0 === e ? void 0 : e.get
                  , r = n && "isReactWarning"in n && n.isReactWarning;
                return r ? t.ref : (r = (n = null === (i = Object.getOwnPropertyDescriptor(t, "ref")) || void 0 === i ? void 0 : i.get) && "isReactWarning"in n && n.isReactWarning) ? t.props.ref : t.props.ref || t.ref
            }(s));
            return "function" == typeof i || n.isPresent ? r.cloneElement(s, {
                ref: o
            }) : null
        }
        ;
        function S(t) {
            return (null == t ? void 0 : t.animationName) || "none"
        }
        T.displayName = "Presence";
        var A = s["useId".toString()] || ( () => void 0)
          , E = 0;
        function M(t) {
            let[e,i] = r.useState(A());
            return P( () => {
                t || i(t => t ?? String(E++))
            }
            , [t]),
            t || (e ? `radix-${e}` : "")
        }
        function k(t) {
            let e = t + "CollectionProvider"
              , [i,n] = l(e)
              , [s,o] = i(e, {
                collectionRef: {
                    current: null
                },
                itemMap: new Map
            })
              , u = t => {
                let {scope: e, children: i} = t
                  , n = r.useRef(null)
                  , o = r.useRef(new Map).current;
                return (0,
                a.jsx)(s, {
                    scope: e,
                    itemMap: o,
                    collectionRef: n,
                    children: i
                })
            }
            ;
            u.displayName = e;
            let h = t + "CollectionSlot"
              , d = r.forwardRef( (t, e) => {
                let {scope: i, children: n} = t
                  , r = c(e, o(h, i).collectionRef);
                return (0,
                a.jsx)(p, {
                    ref: r,
                    children: n
                })
            }
            );
            d.displayName = h;
            let m = t + "CollectionItemSlot"
              , f = "data-radix-collection-item"
              , v = r.forwardRef( (t, e) => {
                let {scope: i, children: n, ...s} = t
                  , l = r.useRef(null)
                  , u = c(e, l)
                  , h = o(m, i);
                return r.useEffect( () => (h.itemMap.set(l, {
                    ref: l,
                    ...s
                }),
                () => void h.itemMap.delete(l))),
                (0,
                a.jsx)(p, {
                    [f]: "",
                    ref: u,
                    children: n
                })
            }
            );
            return v.displayName = m,
            [{
                Provider: u,
                Slot: d,
                ItemSlot: v
            }, function(e) {
                let i = o(t + "CollectionConsumer", e);
                return r.useCallback( () => {
                    let t = i.collectionRef.current;
                    if (!t)
                        return [];
                    let e = Array.from(t.querySelectorAll("[".concat(f, "]")));
                    return Array.from(i.itemMap.values()).sort( (t, i) => e.indexOf(t.ref.current) - e.indexOf(i.ref.current))
                }
                , [i.collectionRef, i.itemMap])
            }
            , n]
        }
        var C = "dismissableLayer.update"
          , R = r.createContext({
            layers: new Set,
            layersWithOutsidePointerEventsDisabled: new Set,
            branches: new Set
        })
          , V = r.forwardRef( (t, e) => {
            var i, s;
            let {disableOutsidePointerEvents: o=!1, onEscapeKeyDown: l, onPointerDownOutside: h, onFocusOutside: d, onInteractOutside: p, onDismiss: m, ...f} = t
              , v = r.useContext(R)
              , [y,b] = r.useState(null)
              , w = null !== (s = null == y ? void 0 : y.ownerDocument) && void 0 !== s ? s : null === (i = globalThis) || void 0 === i ? void 0 : i.document
              , [,P] = r.useState({})
              , T = c(e, t => b(t))
              , S = Array.from(v.layers)
              , [A] = [...v.layersWithOutsidePointerEventsDisabled].slice(-1)
              , E = S.indexOf(A)
              , M = y ? S.indexOf(y) : -1
              , k = v.layersWithOutsidePointerEventsDisabled.size > 0
              , V = M >= E
              , L = function(t) {
                var e;
                let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null === (e = globalThis) || void 0 === e ? void 0 : e.document
                  , n = x(t)
                  , s = r.useRef(!1)
                  , o = r.useRef( () => {}
                );
                return r.useEffect( () => {
                    let t = t => {
                        if (t.target && !s.current) {
                            let e = function() {
                                j("dismissableLayer.pointerDownOutside", n, r, {
                                    discrete: !0
                                })
                            }
                              , r = {
                                originalEvent: t
                            };
                            "touch" === t.pointerType ? (i.removeEventListener("click", o.current),
                            o.current = e,
                            i.addEventListener("click", o.current, {
                                once: !0
                            })) : e()
                        } else
                            i.removeEventListener("click", o.current);
                        s.current = !1
                    }
                      , e = window.setTimeout( () => {
                        i.addEventListener("pointerdown", t)
                    }
                    , 0);
                    return () => {
                        window.clearTimeout(e),
                        i.removeEventListener("pointerdown", t),
                        i.removeEventListener("click", o.current)
                    }
                }
                , [i, n]),
                {
                    onPointerDownCapture: () => s.current = !0
                }
            }(t => {
                let e = t.target
                  , i = [...v.branches].some(t => t.contains(e));
                !V || i || (null == h || h(t),
                null == p || p(t),
                t.defaultPrevented || null == m || m())
            }
            , w)
              , F = function(t) {
                var e;
                let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null === (e = globalThis) || void 0 === e ? void 0 : e.document
                  , n = x(t)
                  , s = r.useRef(!1);
                return r.useEffect( () => {
                    let t = t => {
                        t.target && !s.current && j("dismissableLayer.focusOutside", n, {
                            originalEvent: t
                        }, {
                            discrete: !1
                        })
                    }
                    ;
                    return i.addEventListener("focusin", t),
                    () => i.removeEventListener("focusin", t)
                }
                , [i, n]),
                {
                    onFocusCapture: () => s.current = !0,
                    onBlurCapture: () => s.current = !1
                }
            }(t => {
                let e = t.target;
                [...v.branches].some(t => t.contains(e)) || (null == d || d(t),
                null == p || p(t),
                t.defaultPrevented || null == m || m())
            }
            , w);
            return !function(t, e=globalThis?.document) {
                let i = x(t);
                r.useEffect( () => {
                    let t = t => {
                        "Escape" === t.key && i(t)
                    }
                    ;
                    return e.addEventListener("keydown", t, {
                        capture: !0
                    }),
                    () => e.removeEventListener("keydown", t, {
                        capture: !0
                    })
                }
                , [i, e])
            }(t => {
                M !== v.layers.size - 1 || (null == l || l(t),
                !t.defaultPrevented && m && (t.preventDefault(),
                m()))
            }
            , w),
            r.useEffect( () => {
                if (y)
                    return o && (0 === v.layersWithOutsidePointerEventsDisabled.size && (n = w.body.style.pointerEvents,
                    w.body.style.pointerEvents = "none"),
                    v.layersWithOutsidePointerEventsDisabled.add(y)),
                    v.layers.add(y),
                    D(),
                    () => {
                        o && 1 === v.layersWithOutsidePointerEventsDisabled.size && (w.body.style.pointerEvents = n)
                    }
            }
            , [y, w, o, v]),
            r.useEffect( () => () => {
                y && (v.layers.delete(y),
                v.layersWithOutsidePointerEventsDisabled.delete(y),
                D())
            }
            , [y, v]),
            r.useEffect( () => {
                let t = () => P({});
                return document.addEventListener(C, t),
                () => document.removeEventListener(C, t)
            }
            , []),
            (0,
            a.jsx)(g.div, {
                ...f,
                ref: T,
                style: {
                    pointerEvents: k ? V ? "auto" : "none" : void 0,
                    ...t.style
                },
                onFocusCapture: u(t.onFocusCapture, F.onFocusCapture),
                onBlurCapture: u(t.onBlurCapture, F.onBlurCapture),
                onPointerDownCapture: u(t.onPointerDownCapture, L.onPointerDownCapture)
            })
        }
        );
        function D() {
            let t = new CustomEvent(C);
            document.dispatchEvent(t)
        }
        function j(t, e, i, n) {
            let {discrete: r} = n
              , s = i.originalEvent.target
              , o = new CustomEvent(t,{
                bubbles: !1,
                cancelable: !0,
                detail: i
            });
            e && s.addEventListener(t, e, {
                once: !0
            }),
            r ? y(s, o) : s.dispatchEvent(o)
        }
        V.displayName = "DismissableLayer",
        r.forwardRef( (t, e) => {
            let i = r.useContext(R)
              , n = r.useRef(null)
              , s = c(e, n);
            return r.useEffect( () => {
                let t = n.current;
                if (t)
                    return i.branches.add(t),
                    () => {
                        i.branches.delete(t)
                    }
            }
            , [i.branches]),
            (0,
            a.jsx)(g.div, {
                ...t,
                ref: s
            })
        }
        ).displayName = "DismissableLayerBranch";
        var L = r.forwardRef( (t, e) => (0,
        a.jsx)(g.span, {
            ...t,
            ref: e,
            style: {
                position: "absolute",
                border: 0,
                width: 1,
                height: 1,
                padding: 0,
                margin: -1,
                overflow: "hidden",
                clip: "rect(0, 0, 0, 0)",
                whiteSpace: "nowrap",
                wordWrap: "normal",
                ...t.style
            }
        }));
        L.displayName = "VisuallyHidden";
        var F = "NavigationMenu"
          , [O,B,I] = k(F)
          , [N,U,z] = k(F)
          , [$,W] = l(F, [I, z])
          , [_,K] = $(F)
          , [H,Y] = $(F)
          , q = r.forwardRef( (t, e) => {
            let {__scopeNavigationMenu: i, value: n, onValueChange: s, defaultValue: o, delayDuration: l=200, skipDelayDuration: u=300, orientation: h="horizontal", dir: d, ...p} = t
              , [m,f] = r.useState(null)
              , v = c(e, t => f(t))
              , y = function(t) {
                let e = r.useContext(w);
                return t || e || "ltr"
            }(d)
              , x = r.useRef(0)
              , P = r.useRef(0)
              , T = r.useRef(0)
              , [S,A] = r.useState(!0)
              , [E="",M] = b({
                prop: n,
                onChange: t => {
                    let e = u > 0;
                    "" !== t ? (window.clearTimeout(T.current),
                    e && A(!1)) : (window.clearTimeout(T.current),
                    T.current = window.setTimeout( () => A(!0), u)),
                    null == s || s(t)
                }
                ,
                defaultProp: o
            })
              , k = r.useCallback( () => {
                window.clearTimeout(P.current),
                P.current = window.setTimeout( () => M(""), 150)
            }
            , [M])
              , C = r.useCallback(t => {
                window.clearTimeout(P.current),
                M(t)
            }
            , [M])
              , R = r.useCallback(t => {
                E === t ? window.clearTimeout(P.current) : x.current = window.setTimeout( () => {
                    window.clearTimeout(P.current),
                    M(t)
                }
                , l)
            }
            , [E, M, l]);
            return r.useEffect( () => () => {
                window.clearTimeout(x.current),
                window.clearTimeout(P.current),
                window.clearTimeout(T.current)
            }
            , []),
            (0,
            a.jsx)(G, {
                scope: i,
                isRootMenu: !0,
                value: E,
                dir: y,
                orientation: h,
                rootNavigationMenu: m,
                onTriggerEnter: t => {
                    window.clearTimeout(x.current),
                    S ? R(t) : C(t)
                }
                ,
                onTriggerLeave: () => {
                    window.clearTimeout(x.current),
                    k()
                }
                ,
                onContentEnter: () => window.clearTimeout(P.current),
                onContentLeave: k,
                onItemSelect: t => {
                    M(e => e === t ? "" : t)
                }
                ,
                onItemDismiss: () => M(""),
                children: (0,
                a.jsx)(g.nav, {
                    "aria-label": "Main",
                    "data-orientation": h,
                    dir: y,
                    ...p,
                    ref: v
                })
            })
        }
        );
        q.displayName = F;
        var X = "NavigationMenuSub";
        r.forwardRef( (t, e) => {
            let {__scopeNavigationMenu: i, value: n, onValueChange: r, defaultValue: s, orientation: o="horizontal", ...l} = t
              , u = K(X, i)
              , [h="",d] = b({
                prop: n,
                onChange: r,
                defaultProp: s
            });
            return (0,
            a.jsx)(G, {
                scope: i,
                isRootMenu: !1,
                value: h,
                dir: u.dir,
                orientation: o,
                rootNavigationMenu: u.rootNavigationMenu,
                onTriggerEnter: t => d(t),
                onItemSelect: t => d(t),
                onItemDismiss: () => d(""),
                children: (0,
                a.jsx)(g.div, {
                    "data-orientation": o,
                    ...l,
                    ref: e
                })
            })
        }
        ).displayName = X;
        var G = t => {
            let {scope: e, isRootMenu: i, rootNavigationMenu: n, dir: s, orientation: o, children: l, value: u, onItemSelect: h, onItemDismiss: d, onTriggerEnter: c, onTriggerLeave: p, onContentEnter: m, onContentLeave: f} = t
              , [v,g] = r.useState(null)
              , [y,b] = r.useState(new Map)
              , [w,P] = r.useState(null);
            return (0,
            a.jsx)(_, {
                scope: e,
                isRootMenu: i,
                rootNavigationMenu: n,
                value: u,
                previousValue: function(t) {
                    let e = r.useRef({
                        value: t,
                        previous: t
                    });
                    return r.useMemo( () => (e.current.value !== t && (e.current.previous = e.current.value,
                    e.current.value = t),
                    e.current.previous), [t])
                }(u),
                baseId: M(),
                dir: s,
                orientation: o,
                viewport: v,
                onViewportChange: g,
                indicatorTrack: w,
                onIndicatorTrackChange: P,
                onTriggerEnter: x(c),
                onTriggerLeave: x(p),
                onContentEnter: x(m),
                onContentLeave: x(f),
                onItemSelect: x(h),
                onItemDismiss: x(d),
                onViewportContentChange: r.useCallback( (t, e) => {
                    b(i => (i.set(t, e),
                    new Map(i)))
                }
                , []),
                onViewportContentRemove: r.useCallback(t => {
                    b(e => e.has(t) ? (e.delete(t),
                    new Map(e)) : e)
                }
                , []),
                children: (0,
                a.jsx)(O.Provider, {
                    scope: e,
                    children: (0,
                    a.jsx)(H, {
                        scope: e,
                        items: y,
                        children: l
                    })
                })
            })
        }
          , Z = "NavigationMenuList"
          , J = r.forwardRef( (t, e) => {
            let {__scopeNavigationMenu: i, ...n} = t
              , r = K(Z, i)
              , s = (0,
            a.jsx)(g.ul, {
                "data-orientation": r.orientation,
                ...n,
                ref: e
            });
            return (0,
            a.jsx)(g.div, {
                style: {
                    position: "relative"
                },
                ref: r.onIndicatorTrackChange,
                children: (0,
                a.jsx)(O.Slot, {
                    scope: i,
                    children: r.isRootMenu ? (0,
                    a.jsx)(ty, {
                        asChild: !0,
                        children: s
                    }) : s
                })
            })
        }
        );
        J.displayName = Z;
        var Q = "NavigationMenuItem"
          , [tt,te] = $(Q)
          , ti = r.forwardRef( (t, e) => {
            let {__scopeNavigationMenu: i, value: n, ...s} = t
              , o = M()
              , l = r.useRef(null)
              , u = r.useRef(null)
              , h = r.useRef(null)
              , d = r.useRef( () => {}
            )
              , c = r.useRef(!1)
              , p = r.useCallback(function() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "start";
                if (l.current) {
                    d.current();
                    let e = tw(l.current);
                    e.length && tP("start" === t ? e : e.reverse())
                }
            }, [])
              , m = r.useCallback( () => {
                if (l.current) {
                    let t = tw(l.current);
                    t.length && (d.current = function(t) {
                        return t.forEach(t => {
                            t.dataset.tabindex = t.getAttribute("tabindex") || "",
                            t.setAttribute("tabindex", "-1")
                        }
                        ),
                        () => {
                            t.forEach(t => {
                                let e = t.dataset.tabindex;
                                t.setAttribute("tabindex", e)
                            }
                            )
                        }
                    }(t))
                }
            }
            , []);
            return (0,
            a.jsx)(tt, {
                scope: i,
                value: n || o || "LEGACY_REACT_AUTO_VALUE",
                triggerRef: u,
                contentRef: l,
                focusProxyRef: h,
                wasEscapeCloseRef: c,
                onEntryKeyDown: p,
                onFocusProxyEnter: p,
                onRootContentClose: m,
                onContentFocusOutside: m,
                children: (0,
                a.jsx)(g.li, {
                    ...s,
                    ref: e
                })
            })
        }
        );
        ti.displayName = Q;
        var tn = "NavigationMenuTrigger"
          , tr = r.forwardRef( (t, e) => {
            let {__scopeNavigationMenu: i, disabled: n, ...s} = t
              , o = K(tn, t.__scopeNavigationMenu)
              , l = te(tn, t.__scopeNavigationMenu)
              , h = r.useRef(null)
              , d = c(h, l.triggerRef, e)
              , p = tA(o.baseId, l.value)
              , m = tE(o.baseId, l.value)
              , f = r.useRef(!1)
              , v = r.useRef(!1)
              , y = l.value === o.value;
            return (0,
            a.jsxs)(a.Fragment, {
                children: [(0,
                a.jsx)(O.ItemSlot, {
                    scope: i,
                    value: l.value,
                    children: (0,
                    a.jsx)(tb, {
                        asChild: !0,
                        children: (0,
                        a.jsx)(g.button, {
                            id: p,
                            disabled: n,
                            "data-disabled": n ? "" : void 0,
                            "data-state": tS(y),
                            "aria-expanded": y,
                            "aria-controls": m,
                            ...s,
                            ref: d,
                            onPointerEnter: u(t.onPointerEnter, () => {
                                v.current = !1,
                                l.wasEscapeCloseRef.current = !1
                            }
                            ),
                            onPointerMove: u(t.onPointerMove, tM( () => {
                                n || v.current || l.wasEscapeCloseRef.current || f.current || (o.onTriggerEnter(l.value),
                                f.current = !0)
                            }
                            )),
                            onPointerLeave: u(t.onPointerLeave, tM( () => {
                                n || (o.onTriggerLeave(),
                                f.current = !1)
                            }
                            )),
                            onClick: u(t.onClick, () => {
                                o.onItemSelect(l.value),
                                v.current = y
                            }
                            ),
                            onKeyDown: u(t.onKeyDown, t => {
                                let e = {
                                    horizontal: "ArrowDown",
                                    vertical: "rtl" === o.dir ? "ArrowLeft" : "ArrowRight"
                                }[o.orientation];
                                y && t.key === e && (l.onEntryKeyDown(),
                                t.preventDefault())
                            }
                            )
                        })
                    })
                }), y && (0,
                a.jsxs)(a.Fragment, {
                    children: [(0,
                    a.jsx)(L, {
                        "aria-hidden": !0,
                        tabIndex: 0,
                        ref: l.focusProxyRef,
                        onFocus: t => {
                            let e = l.contentRef.current
                              , i = t.relatedTarget
                              , n = i === h.current
                              , r = null == e ? void 0 : e.contains(i);
                            (n || !r) && l.onFocusProxyEnter(n ? "start" : "end")
                        }
                    }), o.viewport && (0,
                    a.jsx)("span", {
                        "aria-owns": m
                    })]
                })]
            })
        }
        );
        tr.displayName = tn;
        var ts = "navigationMenu.linkSelect"
          , to = r.forwardRef( (t, e) => {
            let {__scopeNavigationMenu: i, active: n, onSelect: r, ...s} = t;
            return (0,
            a.jsx)(tb, {
                asChild: !0,
                children: (0,
                a.jsx)(g.a, {
                    "data-active": n ? "" : void 0,
                    "aria-current": n ? "page" : void 0,
                    ...s,
                    ref: e,
                    onClick: u(t.onClick, t => {
                        let e = t.target
                          , i = new CustomEvent(ts,{
                            bubbles: !0,
                            cancelable: !0
                        });
                        e.addEventListener(ts, t => null == r ? void 0 : r(t), {
                            once: !0
                        }),
                        y(e, i),
                        i.defaultPrevented || t.metaKey || y(e, new CustomEvent(tp,{
                            bubbles: !0,
                            cancelable: !0
                        }))
                    }
                    , {
                        checkForDefaultPrevented: !1
                    })
                })
            })
        }
        );
        to.displayName = "NavigationMenuLink";
        var ta = "NavigationMenuIndicator"
          , tl = r.forwardRef( (t, e) => {
            let {forceMount: i, ...n} = t
              , r = K(ta, t.__scopeNavigationMenu)
              , s = !!r.value;
            return r.indicatorTrack ? o.createPortal((0,
            a.jsx)(T, {
                present: i || s,
                children: (0,
                a.jsx)(tu, {
                    ...n,
                    ref: e
                })
            }), r.indicatorTrack) : null
        }
        );
        tl.displayName = ta;
        var tu = r.forwardRef( (t, e) => {
            let {__scopeNavigationMenu: i, ...n} = t
              , s = K(ta, i)
              , o = B(i)
              , [l,u] = r.useState(null)
              , [h,d] = r.useState(null)
              , c = "horizontal" === s.orientation
              , p = !!s.value;
            r.useEffect( () => {
                var t;
                let e = null === (t = o().find(t => t.value === s.value)) || void 0 === t ? void 0 : t.ref.current;
                e && u(e)
            }
            , [o, s.value]);
            let m = () => {
                l && d({
                    size: c ? l.offsetWidth : l.offsetHeight,
                    offset: c ? l.offsetLeft : l.offsetTop
                })
            }
            ;
            return tT(l, m),
            tT(s.indicatorTrack, m),
            h ? (0,
            a.jsx)(g.div, {
                "aria-hidden": !0,
                "data-state": p ? "visible" : "hidden",
                "data-orientation": s.orientation,
                ...n,
                ref: e,
                style: {
                    position: "absolute",
                    ...c ? {
                        left: 0,
                        width: h.size + "px",
                        transform: "translateX(".concat(h.offset, "px)")
                    } : {
                        top: 0,
                        height: h.size + "px",
                        transform: "translateY(".concat(h.offset, "px)")
                    },
                    ...n.style
                }
            }) : null
        }
        )
          , th = "NavigationMenuContent"
          , td = r.forwardRef( (t, e) => {
            let {forceMount: i, ...n} = t
              , r = K(th, t.__scopeNavigationMenu)
              , s = te(th, t.__scopeNavigationMenu)
              , o = c(s.contentRef, e)
              , l = s.value === r.value
              , h = {
                value: s.value,
                triggerRef: s.triggerRef,
                focusProxyRef: s.focusProxyRef,
                wasEscapeCloseRef: s.wasEscapeCloseRef,
                onContentFocusOutside: s.onContentFocusOutside,
                onRootContentClose: s.onRootContentClose,
                ...n
            };
            return r.viewport ? (0,
            a.jsx)(tc, {
                forceMount: i,
                ...h,
                ref: o
            }) : (0,
            a.jsx)(T, {
                present: i || l,
                children: (0,
                a.jsx)(tm, {
                    "data-state": tS(l),
                    ...h,
                    ref: o,
                    onPointerEnter: u(t.onPointerEnter, r.onContentEnter),
                    onPointerLeave: u(t.onPointerLeave, tM(r.onContentLeave)),
                    style: {
                        pointerEvents: !l && r.isRootMenu ? "none" : void 0,
                        ...h.style
                    }
                })
            })
        }
        );
        td.displayName = th;
        var tc = r.forwardRef( (t, e) => {
            let {onViewportContentChange: i, onViewportContentRemove: n} = K(th, t.__scopeNavigationMenu);
            return P( () => {
                i(t.value, {
                    ref: e,
                    ...t
                })
            }
            , [t, e, i]),
            P( () => () => n(t.value), [t.value, n]),
            null
        }
        )
          , tp = "navigationMenu.rootContentDismiss"
          , tm = r.forwardRef( (t, e) => {
            let {__scopeNavigationMenu: i, value: n, triggerRef: s, focusProxyRef: o, wasEscapeCloseRef: l, onRootContentClose: h, onContentFocusOutside: d, ...p} = t
              , m = K(th, i)
              , f = r.useRef(null)
              , v = c(f, e)
              , g = tA(m.baseId, n)
              , y = tE(m.baseId, n)
              , x = B(i)
              , b = r.useRef(null)
              , {onItemDismiss: w} = m;
            r.useEffect( () => {
                let t = f.current;
                if (m.isRootMenu && t) {
                    let e = () => {
                        var e;
                        w(),
                        h(),
                        t.contains(document.activeElement) && (null === (e = s.current) || void 0 === e || e.focus())
                    }
                    ;
                    return t.addEventListener(tp, e),
                    () => t.removeEventListener(tp, e)
                }
            }
            , [m.isRootMenu, t.value, s, w, h]);
            let P = r.useMemo( () => {
                let t = x().map(t => t.value);
                "rtl" === m.dir && t.reverse();
                let e = t.indexOf(m.value)
                  , i = t.indexOf(m.previousValue)
                  , r = n === m.value
                  , s = i === t.indexOf(n);
                if (!r && !s)
                    return b.current;
                let o = ( () => {
                    if (e !== i) {
                        if (r && -1 !== i)
                            return e > i ? "from-end" : "from-start";
                        if (s && -1 !== e)
                            return e > i ? "to-start" : "to-end"
                    }
                    return null
                }
                )();
                return b.current = o,
                o
            }
            , [m.previousValue, m.value, m.dir, x, n]);
            return (0,
            a.jsx)(ty, {
                asChild: !0,
                children: (0,
                a.jsx)(V, {
                    id: y,
                    "aria-labelledby": g,
                    "data-motion": P,
                    "data-orientation": m.orientation,
                    ...p,
                    ref: v,
                    disableOutsidePointerEvents: !1,
                    onDismiss: () => {
                        var t;
                        let e = new Event(tp,{
                            bubbles: !0,
                            cancelable: !0
                        });
                        null === (t = f.current) || void 0 === t || t.dispatchEvent(e)
                    }
                    ,
                    onFocusOutside: u(t.onFocusOutside, t => {
                        var e;
                        d();
                        let i = t.target;
                        (null === (e = m.rootNavigationMenu) || void 0 === e ? void 0 : e.contains(i)) && t.preventDefault()
                    }
                    ),
                    onPointerDownOutside: u(t.onPointerDownOutside, t => {
                        var e;
                        let i = t.target
                          , n = x().some(t => {
                            var e;
                            return null === (e = t.ref.current) || void 0 === e ? void 0 : e.contains(i)
                        }
                        )
                          , r = m.isRootMenu && (null === (e = m.viewport) || void 0 === e ? void 0 : e.contains(i));
                        (n || r || !m.isRootMenu) && t.preventDefault()
                    }
                    ),
                    onKeyDown: u(t.onKeyDown, t => {
                        let e = t.altKey || t.ctrlKey || t.metaKey;
                        if ("Tab" === t.key && !e) {
                            let e = tw(t.currentTarget)
                              , n = document.activeElement
                              , r = e.findIndex(t => t === n);
                            if (tP(t.shiftKey ? e.slice(0, r).reverse() : e.slice(r + 1, e.length)))
                                t.preventDefault();
                            else {
                                var i;
                                null === (i = o.current) || void 0 === i || i.focus()
                            }
                        }
                    }
                    ),
                    onEscapeKeyDown: u(t.onEscapeKeyDown, t => {
                        l.current = !0
                    }
                    )
                })
            })
        }
        )
          , tf = "NavigationMenuViewport"
          , tv = r.forwardRef( (t, e) => {
            let {forceMount: i, ...n} = t
              , r = !!K(tf, t.__scopeNavigationMenu).value;
            return (0,
            a.jsx)(T, {
                present: i || r,
                children: (0,
                a.jsx)(tg, {
                    ...n,
                    ref: e
                })
            })
        }
        );
        tv.displayName = tf;
        var tg = r.forwardRef( (t, e) => {
            let {__scopeNavigationMenu: i, children: n, ...s} = t
              , o = K(tf, i)
              , l = c(e, o.onViewportChange)
              , h = Y(th, t.__scopeNavigationMenu)
              , [p,m] = r.useState(null)
              , [f,v] = r.useState(null)
              , y = p ? (null == p ? void 0 : p.width) + "px" : void 0
              , x = p ? (null == p ? void 0 : p.height) + "px" : void 0
              , b = !!o.value
              , w = b ? o.value : o.previousValue;
            return tT(f, () => {
                f && m({
                    width: f.offsetWidth,
                    height: f.offsetHeight
                })
            }
            ),
            (0,
            a.jsx)(g.div, {
                "data-state": tS(b),
                "data-orientation": o.orientation,
                ...s,
                ref: l,
                style: {
                    pointerEvents: !b && o.isRootMenu ? "none" : void 0,
                    "--radix-navigation-menu-viewport-width": y,
                    "--radix-navigation-menu-viewport-height": x,
                    ...s.style
                },
                onPointerEnter: u(t.onPointerEnter, o.onContentEnter),
                onPointerLeave: u(t.onPointerLeave, tM(o.onContentLeave)),
                children: Array.from(h.items).map(t => {
                    let[e,{ref: i, forceMount: n, ...r}] = t
                      , s = w === e;
                    return (0,
                    a.jsx)(T, {
                        present: n || s,
                        children: (0,
                        a.jsx)(tm, {
                            ...r,
                            ref: d(i, t => {
                                s && t && v(t)
                            }
                            )
                        })
                    }, e)
                }
                )
            })
        }
        )
          , ty = r.forwardRef( (t, e) => {
            let {__scopeNavigationMenu: i, ...n} = t
              , r = K("FocusGroup", i);
            return (0,
            a.jsx)(N.Provider, {
                scope: i,
                children: (0,
                a.jsx)(N.Slot, {
                    scope: i,
                    children: (0,
                    a.jsx)(g.div, {
                        dir: r.dir,
                        ...n,
                        ref: e
                    })
                })
            })
        }
        )
          , tx = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"]
          , tb = r.forwardRef( (t, e) => {
            let {__scopeNavigationMenu: i, ...n} = t
              , r = U(i)
              , s = K("FocusGroupItem", i);
            return (0,
            a.jsx)(N.ItemSlot, {
                scope: i,
                children: (0,
                a.jsx)(g.button, {
                    ...n,
                    ref: e,
                    onKeyDown: u(t.onKeyDown, t => {
                        if (["Home", "End", ...tx].includes(t.key)) {
                            let e = r().map(t => t.ref.current);
                            if (["rtl" === s.dir ? "ArrowRight" : "ArrowLeft", "ArrowUp", "End"].includes(t.key) && e.reverse(),
                            tx.includes(t.key)) {
                                let i = e.indexOf(t.currentTarget);
                                e = e.slice(i + 1)
                            }
                            setTimeout( () => tP(e)),
                            t.preventDefault()
                        }
                    }
                    )
                })
            })
        }
        );
        function tw(t) {
            let e = []
              , i = document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, {
                acceptNode: t => {
                    let e = "INPUT" === t.tagName && "hidden" === t.type;
                    return t.disabled || t.hidden || e ? NodeFilter.FILTER_SKIP : t.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                }
            });
            for (; i.nextNode(); )
                e.push(i.currentNode);
            return e
        }
        function tP(t) {
            let e = document.activeElement;
            return t.some(t => t === e || (t.focus(),
            document.activeElement !== e))
        }
        function tT(t, e) {
            let i = x(e);
            P( () => {
                let e = 0;
                if (t) {
                    let n = new ResizeObserver( () => {
                        cancelAnimationFrame(e),
                        e = window.requestAnimationFrame(i)
                    }
                    );
                    return n.observe(t),
                    () => {
                        window.cancelAnimationFrame(e),
                        n.unobserve(t)
                    }
                }
            }
            , [t, i])
        }
        function tS(t) {
            return t ? "open" : "closed"
        }
        function tA(t, e) {
            return "".concat(t, "-trigger-").concat(e)
        }
        function tE(t, e) {
            return "".concat(t, "-content-").concat(e)
        }
        function tM(t) {
            return e => "mouse" === e.pointerType ? t(e) : void 0
        }
        var tk = q
          , tC = J
          , tR = ti
          , tV = tr
          , tD = to
          , tj = tl
          , tL = td
          , tF = tv
    }
    ,
    7158: (t, e, i) => {
        i.d(e, {
            F: () => o
        });
        var n = i(8273);
        let r = t => "boolean" == typeof t ? `${t}` : 0 === t ? "0" : t
          , s = n.$
          , o = (t, e) => i => {
            var n;
            if ((null == e ? void 0 : e.variants) == null)
                return s(t, null == i ? void 0 : i.class, null == i ? void 0 : i.className);
            let {variants: o, defaultVariants: a} = e
              , l = Object.keys(o).map(t => {
                let e = null == i ? void 0 : i[t]
                  , n = null == a ? void 0 : a[t];
                if (null === e)
                    return null;
                let s = r(e) || r(n);
                return o[t][s]
            }
            )
              , u = i && Object.entries(i).reduce( (t, e) => {
                let[i,n] = e;
                return void 0 === n || (t[i] = n),
                t
            }
            , {});
            return s(t, l, null == e ? void 0 : null === (n = e.compoundVariants) || void 0 === n ? void 0 : n.reduce( (t, e) => {
                let {class: i, className: n, ...r} = e;
                return Object.entries(r).every(t => {
                    let[e,i] = t;
                    return Array.isArray(i) ? i.includes({
                        ...a,
                        ...u
                    }[e]) : ({
                        ...a,
                        ...u
                    })[e] === i
                }
                ) ? [...t, i, n] : t
            }
            , []), null == i ? void 0 : i.class, null == i ? void 0 : i.className)
        }
    }
    ,
    8273: (t, e, i) => {
        i.d(e, {
            $: () => n
        });
        function n() {
            for (var t, e, i = 0, n = "", r = arguments.length; i < r; i++)
                (t = arguments[i]) && (e = function t(e) {
                    var i, n, r = "";
                    if ("string" == typeof e || "number" == typeof e)
                        r += e;
                    else if ("object" == typeof e) {
                        if (Array.isArray(e)) {
                            var s = e.length;
                            for (i = 0; i < s; i++)
                                e[i] && (n = t(e[i])) && (r && (r += " "),
                                r += n)
                        } else
                            for (n in e)
                                e[n] && (r && (r += " "),
                                r += n)
                    }
                    return r
                }(t)) && (n && (n += " "),
                n += e);
            return n
        }
    }
    ,
    1553: (t, e, i) => {
        let n;
        function r(t) {
            return null !== t && "object" == typeof t && "function" == typeof t.start
        }
        function s(t, e, i, n) {
            if ("function" == typeof e || ("string" == typeof e && (e = t.variants && t.variants[e]),
            "function" == typeof e)) {
                let[r,s] = function(t) {
                    let e = [{}, {}];
                    return null == t || t.values.forEach( (t, i) => {
                        e[0][i] = t.get(),
                        e[1][i] = t.getVelocity()
                    }
                    ),
                    e
                }(n);
                e = e(void 0 !== i ? i : t.custom, r, s)
            }
            return e
        }
        function o(t, e, i) {
            let n = t.getProps();
            return s(n, e, void 0 !== i ? i : n.custom, t)
        }
        function a(t) {
            let e;
            return () => (void 0 === e && (e = t()),
            e)
        }
        i.d(e, {
            P: () => sm
        });
        let l = a( () => void 0 !== window.ScrollTimeline);
        class u {
            constructor(t) {
                this.stop = () => this.runAll("stop"),
                this.animations = t.filter(Boolean)
            }
            get finished() {
                return Promise.all(this.animations.map(t => "finished"in t ? t.finished : t))
            }
            getAll(t) {
                return this.animations[0][t]
            }
            setAll(t, e) {
                for (let i = 0; i < this.animations.length; i++)
                    this.animations[i][t] = e
            }
            attachTimeline(t, e) {
                let i = this.animations.map(i => l() && i.attachTimeline ? i.attachTimeline(t) : "function" == typeof e ? e(i) : void 0);
                return () => {
                    i.forEach( (t, e) => {
                        t && t(),
                        this.animations[e].stop()
                    }
                    )
                }
            }
            get time() {
                return this.getAll("time")
            }
            set time(t) {
                this.setAll("time", t)
            }
            get speed() {
                return this.getAll("speed")
            }
            set speed(t) {
                this.setAll("speed", t)
            }
            get startTime() {
                return this.getAll("startTime")
            }
            get duration() {
                let t = 0;
                for (let e = 0; e < this.animations.length; e++)
                    t = Math.max(t, this.animations[e].duration);
                return t
            }
            runAll(t) {
                this.animations.forEach(e => e[t]())
            }
            flatten() {
                this.runAll("flatten")
            }
            play() {
                this.runAll("play")
            }
            pause() {
                this.runAll("pause")
            }
            cancel() {
                this.runAll("cancel")
            }
            complete() {
                this.runAll("complete")
            }
        }
        class h extends u {
            then(t, e) {
                return Promise.all(this.animations).then(t).catch(e)
            }
        }
        function d(t, e) {
            return t ? t[e] || t.default || t : void 0
        }
        function c(t) {
            let e = 0
              , i = t.next(e);
            for (; !i.done && e < 2e4; )
                e += 50,
                i = t.next(e);
            return e >= 2e4 ? 1 / 0 : e
        }
        function p(t) {
            return "function" == typeof t
        }
        function m(t, e) {
            t.timeline = e,
            t.onfinish = null
        }
        let f = t => Array.isArray(t) && "number" == typeof t[0]
          , v = {
            linearEasing: void 0
        }
          , g = function(t, e) {
            let i = a(t);
            return () => {
                var t;
                return null !== (t = v[e]) && void 0 !== t ? t : i()
            }
        }( () => {
            try {
                document.createElement("div").animate({
                    opacity: 0
                }, {
                    easing: "linear(0, 1)"
                })
            } catch (t) {
                return !1
            }
            return !0
        }
        , "linearEasing")
          , y = (t, e, i) => {
            let n = e - t;
            return 0 === n ? 1 : (i - t) / n
        }
          , x = (t, e, i=10) => {
            let n = ""
              , r = Math.max(Math.round(e / i), 2);
            for (let e = 0; e < r; e++)
                n += t(y(0, r - 1, e)) + ", ";
            return `linear(${n.substring(0, n.length - 2)})`
        }
          , b = ([t,e,i,n]) => `cubic-bezier(${t}, ${e}, ${i}, ${n})`
          , w = {
            linear: "linear",
            ease: "ease",
            easeIn: "ease-in",
            easeOut: "ease-out",
            easeInOut: "ease-in-out",
            circIn: b([0, .65, .55, 1]),
            circOut: b([.55, 0, 1, .45]),
            backIn: b([.31, .01, .66, -.59]),
            backOut: b([.33, 1.53, .69, .99])
        }
          , P = {
            x: !1,
            y: !1
        };
        function T(t, e) {
            let i = function(t, e, i) {
                if (t instanceof Element)
                    return [t];
                if ("string" == typeof t) {
                    let e = document.querySelectorAll(t);
                    return e ? Array.from(e) : []
                }
                return Array.from(t)
            }(t)
              , n = new AbortController;
            return [i, {
                passive: !0,
                ...e,
                signal: n.signal
            }, () => n.abort()]
        }
        function S(t) {
            return !("touch" === t.pointerType || P.x || P.y)
        }
        let A = (t, e) => !!e && (t === e || A(t, e.parentElement))
          , E = t => "mouse" === t.pointerType ? "number" != typeof t.button || t.button <= 0 : !1 !== t.isPrimary
          , M = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"])
          , k = new WeakSet;
        function C(t) {
            return e => {
                "Enter" === e.key && t(e)
            }
        }
        function R(t, e) {
            t.dispatchEvent(new PointerEvent("pointer" + e,{
                isPrimary: !0,
                bubbles: !0
            }))
        }
        let V = (t, e) => {
            let i = t.currentTarget;
            if (!i)
                return;
            let n = C( () => {
                if (k.has(i))
                    return;
                R(i, "down");
                let t = C( () => {
                    R(i, "up")
                }
                );
                i.addEventListener("keyup", t, e),
                i.addEventListener("blur", () => R(i, "cancel"), e)
            }
            );
            i.addEventListener("keydown", n, e),
            i.addEventListener("blur", () => i.removeEventListener("keydown", n), e)
        }
        ;
        function D(t) {
            return E(t) && !(P.x || P.y)
        }
        let j = t => 1e3 * t
          , L = t => t / 1e3
          , F = t => t
          , O = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
          , B = new Set(O)
          , I = new Set(["width", "height", "top", "left", "right", "bottom", ...O])
          , N = t => Array.isArray(t)
          , U = t => !!(t && "object" == typeof t && t.mix && t.toValue)
          , z = t => N(t) ? t[t.length - 1] || 0 : t
          , $ = {
            skipAnimations: !1,
            useManualTiming: !1
        }
          , W = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"]
          , _ = {
            value: null,
            addProjectionMetrics: null
        };
        function K(t, e) {
            let i = !1
              , n = !0
              , r = {
                delta: 0,
                timestamp: 0,
                isProcessing: !1
            }
              , s = () => i = !0
              , o = W.reduce( (t, i) => (t[i] = function(t, e) {
                let i = new Set
                  , n = new Set
                  , r = !1
                  , s = !1
                  , o = new WeakSet
                  , a = {
                    delta: 0,
                    timestamp: 0,
                    isProcessing: !1
                }
                  , l = 0;
                function u(e) {
                    o.has(e) && (h.schedule(e),
                    t()),
                    l++,
                    e(a)
                }
                let h = {
                    schedule: (t, e=!1, s=!1) => {
                        let a = s && r ? i : n;
                        return e && o.add(t),
                        a.has(t) || a.add(t),
                        t
                    }
                    ,
                    cancel: t => {
                        n.delete(t),
                        o.delete(t)
                    }
                    ,
                    process: t => {
                        if (a = t,
                        r) {
                            s = !0;
                            return
                        }
                        r = !0,
                        [i,n] = [n, i],
                        i.forEach(u),
                        e && _.value && _.value.frameloop[e].push(l),
                        l = 0,
                        i.clear(),
                        r = !1,
                        s && (s = !1,
                        h.process(t))
                    }
                };
                return h
            }(s, e ? i : void 0),
            t), {})
              , {read: a, resolveKeyframes: l, update: u, preRender: h, render: d, postRender: c} = o
              , p = () => {
                let s = $.useManualTiming ? r.timestamp : performance.now();
                i = !1,
                $.useManualTiming || (r.delta = n ? 1e3 / 60 : Math.max(Math.min(s - r.timestamp, 40), 1)),
                r.timestamp = s,
                r.isProcessing = !0,
                a.process(r),
                l.process(r),
                u.process(r),
                h.process(r),
                d.process(r),
                c.process(r),
                r.isProcessing = !1,
                i && e && (n = !1,
                t(p))
            }
              , m = () => {
                i = !0,
                n = !0,
                r.isProcessing || t(p)
            }
            ;
            return {
                schedule: W.reduce( (t, e) => {
                    let n = o[e];
                    return t[e] = (t, e=!1, r=!1) => (i || m(),
                    n.schedule(t, e, r)),
                    t
                }
                , {}),
                cancel: t => {
                    for (let e = 0; e < W.length; e++)
                        o[W[e]].cancel(t)
                }
                ,
                state: r,
                steps: o
            }
        }
        let {schedule: H, cancel: Y, state: q, steps: X} = K("undefined" != typeof requestAnimationFrame ? requestAnimationFrame : F, !0);
        function G() {
            n = void 0
        }
        let Z = {
            now: () => (void 0 === n && Z.set(q.isProcessing || $.useManualTiming ? q.timestamp : performance.now()),
            n),
            set: t => {
                n = t,
                queueMicrotask(G)
            }
        };
        function J(t, e) {
            -1 === t.indexOf(e) && t.push(e)
        }
        function Q(t, e) {
            let i = t.indexOf(e);
            i > -1 && t.splice(i, 1)
        }
        class tt {
            constructor() {
                this.subscriptions = []
            }
            add(t) {
                return J(this.subscriptions, t),
                () => Q(this.subscriptions, t)
            }
            notify(t, e, i) {
                let n = this.subscriptions.length;
                if (n) {
                    if (1 === n)
                        this.subscriptions[0](t, e, i);
                    else
                        for (let r = 0; r < n; r++) {
                            let n = this.subscriptions[r];
                            n && n(t, e, i)
                        }
                }
            }
            getSize() {
                return this.subscriptions.length
            }
            clear() {
                this.subscriptions.length = 0
            }
        }
        let te = t => !isNaN(parseFloat(t))
          , ti = {
            current: void 0
        };
        class tn {
            constructor(t, e={}) {
                this.version = "12.4.3",
                this.canTrackVelocity = null,
                this.events = {},
                this.updateAndNotify = (t, e=!0) => {
                    let i = Z.now();
                    this.updatedAt !== i && this.setPrevFrameValue(),
                    this.prev = this.current,
                    this.setCurrent(t),
                    this.current !== this.prev && this.events.change && this.events.change.notify(this.current),
                    e && this.events.renderRequest && this.events.renderRequest.notify(this.current)
                }
                ,
                this.hasAnimated = !1,
                this.setCurrent(t),
                this.owner = e.owner
            }
            setCurrent(t) {
                this.current = t,
                this.updatedAt = Z.now(),
                null === this.canTrackVelocity && void 0 !== t && (this.canTrackVelocity = te(this.current))
            }
            setPrevFrameValue(t=this.current) {
                this.prevFrameValue = t,
                this.prevUpdatedAt = this.updatedAt
            }
            onChange(t) {
                return this.on("change", t)
            }
            on(t, e) {
                this.events[t] || (this.events[t] = new tt);
                let i = this.events[t].add(e);
                return "change" === t ? () => {
                    i(),
                    H.read( () => {
                        this.events.change.getSize() || this.stop()
                    }
                    )
                }
                : i
            }
            clearListeners() {
                for (let t in this.events)
                    this.events[t].clear()
            }
            attach(t, e) {
                this.passiveEffect = t,
                this.stopPassiveEffect = e
            }
            set(t, e=!0) {
                e && this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t, e)
            }
            setWithVelocity(t, e, i) {
                this.set(e),
                this.prev = void 0,
                this.prevFrameValue = t,
                this.prevUpdatedAt = this.updatedAt - i
            }
            jump(t, e=!0) {
                this.updateAndNotify(t),
                this.prev = t,
                this.prevUpdatedAt = this.prevFrameValue = void 0,
                e && this.stop(),
                this.stopPassiveEffect && this.stopPassiveEffect()
            }
            get() {
                return ti.current && ti.current.push(this),
                this.current
            }
            getPrevious() {
                return this.prev
            }
            getVelocity() {
                var t;
                let e = Z.now();
                if (!this.canTrackVelocity || void 0 === this.prevFrameValue || e - this.updatedAt > 30)
                    return 0;
                let i = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
                return t = parseFloat(this.current) - parseFloat(this.prevFrameValue),
                i ? 1e3 / i * t : 0
            }
            start(t) {
                return this.stop(),
                new Promise(e => {
                    this.hasAnimated = !0,
                    this.animation = t(e),
                    this.events.animationStart && this.events.animationStart.notify()
                }
                ).then( () => {
                    this.events.animationComplete && this.events.animationComplete.notify(),
                    this.clearAnimation()
                }
                )
            }
            stop() {
                this.animation && (this.animation.stop(),
                this.events.animationCancel && this.events.animationCancel.notify()),
                this.clearAnimation()
            }
            isAnimating() {
                return !!this.animation
            }
            clearAnimation() {
                delete this.animation
            }
            destroy() {
                this.clearListeners(),
                this.stop(),
                this.stopPassiveEffect && this.stopPassiveEffect()
            }
        }
        function tr(t, e) {
            return new tn(t,e)
        }
        let ts = t => !!(t && t.getVelocity);
        function to(t, e) {
            let i = t.getValue("willChange");
            if (ts(i) && i.add)
                return i.add(e)
        }
        let ta = t => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase()
          , tl = "data-" + ta("framerAppearId")
          , tu = {
            current: !1
        }
          , th = (t, e, i) => (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;
        function td(t, e, i, n) {
            if (t === e && i === n)
                return F;
            let r = e => (function(t, e, i, n, r) {
                let s, o;
                let a = 0;
                do
                    (s = th(o = e + (i - e) / 2, n, r) - t) > 0 ? i = o : e = o;
                while (Math.abs(s) > 1e-7 && ++a < 12);
                return o
            }
            )(e, 0, 1, t, i);
            return t => 0 === t || 1 === t ? t : th(r(t), e, n)
        }
        let tc = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2
          , tp = t => e => 1 - t(1 - e)
          , tm = td(.33, 1.53, .69, .99)
          , tf = tp(tm)
          , tv = tc(tf)
          , tg = t => (t *= 2) < 1 ? .5 * tf(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
          , ty = t => 1 - Math.sin(Math.acos(t))
          , tx = tp(ty)
          , tb = tc(ty)
          , tw = t => /^0[^.\s]+$/u.test(t)
          , tP = (t, e, i) => i > e ? e : i < t ? t : i
          , tT = {
            test: t => "number" == typeof t,
            parse: parseFloat,
            transform: t => t
        }
          , tS = {
            ...tT,
            transform: t => tP(0, 1, t)
        }
          , tA = {
            ...tT,
            default: 1
        }
          , tE = t => Math.round(1e5 * t) / 1e5
          , tM = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu
          , tk = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu
          , tC = (t, e) => i => !!("string" == typeof i && tk.test(i) && i.startsWith(t) || e && null != i && Object.prototype.hasOwnProperty.call(i, e))
          , tR = (t, e, i) => n => {
            if ("string" != typeof n)
                return n;
            let[r,s,o,a] = n.match(tM);
            return {
                [t]: parseFloat(r),
                [e]: parseFloat(s),
                [i]: parseFloat(o),
                alpha: void 0 !== a ? parseFloat(a) : 1
            }
        }
          , tV = t => tP(0, 255, t)
          , tD = {
            ...tT,
            transform: t => Math.round(tV(t))
        }
          , tj = {
            test: tC("rgb", "red"),
            parse: tR("red", "green", "blue"),
            transform: ({red: t, green: e, blue: i, alpha: n=1}) => "rgba(" + tD.transform(t) + ", " + tD.transform(e) + ", " + tD.transform(i) + ", " + tE(tS.transform(n)) + ")"
        }
          , tL = {
            test: tC("#"),
            parse: function(t) {
                let e = ""
                  , i = ""
                  , n = ""
                  , r = "";
                return t.length > 5 ? (e = t.substring(1, 3),
                i = t.substring(3, 5),
                n = t.substring(5, 7),
                r = t.substring(7, 9)) : (e = t.substring(1, 2),
                i = t.substring(2, 3),
                n = t.substring(3, 4),
                r = t.substring(4, 5),
                e += e,
                i += i,
                n += n,
                r += r),
                {
                    red: parseInt(e, 16),
                    green: parseInt(i, 16),
                    blue: parseInt(n, 16),
                    alpha: r ? parseInt(r, 16) / 255 : 1
                }
            },
            transform: tj.transform
        }
          , tF = t => ({
            test: e => "string" == typeof e && e.endsWith(t) && 1 === e.split(" ").length,
            parse: parseFloat,
            transform: e => `${e}${t}`
        })
          , tO = tF("deg")
          , tB = tF("%")
          , tI = tF("px")
          , tN = tF("vh")
          , tU = tF("vw")
          , tz = {
            ...tB,
            parse: t => tB.parse(t) / 100,
            transform: t => tB.transform(100 * t)
        }
          , t$ = {
            test: tC("hsl", "hue"),
            parse: tR("hue", "saturation", "lightness"),
            transform: ({hue: t, saturation: e, lightness: i, alpha: n=1}) => "hsla(" + Math.round(t) + ", " + tB.transform(tE(e)) + ", " + tB.transform(tE(i)) + ", " + tE(tS.transform(n)) + ")"
        }
          , tW = {
            test: t => tj.test(t) || tL.test(t) || t$.test(t),
            parse: t => tj.test(t) ? tj.parse(t) : t$.test(t) ? t$.parse(t) : tL.parse(t),
            transform: t => "string" == typeof t ? t : t.hasOwnProperty("red") ? tj.transform(t) : t$.transform(t)
        }
          , t_ = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu
          , tK = "number"
          , tH = "color"
          , tY = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
        function tq(t) {
            let e = t.toString()
              , i = []
              , n = {
                color: [],
                number: [],
                var: []
            }
              , r = []
              , s = 0
              , o = e.replace(tY, t => (tW.test(t) ? (n.color.push(s),
            r.push(tH),
            i.push(tW.parse(t))) : t.startsWith("var(") ? (n.var.push(s),
            r.push("var"),
            i.push(t)) : (n.number.push(s),
            r.push(tK),
            i.push(parseFloat(t))),
            ++s,
            "${}")).split("${}");
            return {
                values: i,
                split: o,
                indexes: n,
                types: r
            }
        }
        function tX(t) {
            return tq(t).values
        }
        function tG(t) {
            let {split: e, types: i} = tq(t)
              , n = e.length;
            return t => {
                let r = "";
                for (let s = 0; s < n; s++)
                    if (r += e[s],
                    void 0 !== t[s]) {
                        let e = i[s];
                        e === tK ? r += tE(t[s]) : e === tH ? r += tW.transform(t[s]) : r += t[s]
                    }
                return r
            }
        }
        let tZ = t => "number" == typeof t ? 0 : t
          , tJ = {
            test: function(t) {
                var e, i;
                return isNaN(t) && "string" == typeof t && ((null === (e = t.match(tM)) || void 0 === e ? void 0 : e.length) || 0) + ((null === (i = t.match(t_)) || void 0 === i ? void 0 : i.length) || 0) > 0
            },
            parse: tX,
            createTransformer: tG,
            getAnimatableNone: function(t) {
                let e = tX(t);
                return tG(t)(e.map(tZ))
            }
        }
          , tQ = new Set(["brightness", "contrast", "saturate", "opacity"]);
        function t0(t) {
            let[e,i] = t.slice(0, -1).split("(");
            if ("drop-shadow" === e)
                return t;
            let[n] = i.match(tM) || [];
            if (!n)
                return t;
            let r = i.replace(n, "")
              , s = tQ.has(e) ? 1 : 0;
            return n !== i && (s *= 100),
            e + "(" + s + r + ")"
        }
        let t1 = /\b([a-z-]*)\(.*?\)/gu
          , t2 = {
            ...tJ,
            getAnimatableNone: t => {
                let e = t.match(t1);
                return e ? e.map(t0).join(" ") : t
            }
        }
          , t3 = {
            ...tT,
            transform: Math.round
        }
          , t5 = {
            borderWidth: tI,
            borderTopWidth: tI,
            borderRightWidth: tI,
            borderBottomWidth: tI,
            borderLeftWidth: tI,
            borderRadius: tI,
            radius: tI,
            borderTopLeftRadius: tI,
            borderTopRightRadius: tI,
            borderBottomRightRadius: tI,
            borderBottomLeftRadius: tI,
            width: tI,
            maxWidth: tI,
            height: tI,
            maxHeight: tI,
            top: tI,
            right: tI,
            bottom: tI,
            left: tI,
            padding: tI,
            paddingTop: tI,
            paddingRight: tI,
            paddingBottom: tI,
            paddingLeft: tI,
            margin: tI,
            marginTop: tI,
            marginRight: tI,
            marginBottom: tI,
            marginLeft: tI,
            backgroundPositionX: tI,
            backgroundPositionY: tI,
            rotate: tO,
            rotateX: tO,
            rotateY: tO,
            rotateZ: tO,
            scale: tA,
            scaleX: tA,
            scaleY: tA,
            scaleZ: tA,
            skew: tO,
            skewX: tO,
            skewY: tO,
            distance: tI,
            translateX: tI,
            translateY: tI,
            translateZ: tI,
            x: tI,
            y: tI,
            z: tI,
            perspective: tI,
            transformPerspective: tI,
            opacity: tS,
            originX: tz,
            originY: tz,
            originZ: tI,
            zIndex: t3,
            size: tI,
            fillOpacity: tS,
            strokeOpacity: tS,
            numOctaves: t3
        }
          , t4 = {
            ...t5,
            color: tW,
            backgroundColor: tW,
            outlineColor: tW,
            fill: tW,
            stroke: tW,
            borderColor: tW,
            borderTopColor: tW,
            borderRightColor: tW,
            borderBottomColor: tW,
            borderLeftColor: tW,
            filter: t2,
            WebkitFilter: t2
        }
          , t9 = t => t4[t];
        function t8(t, e) {
            let i = t9(t);
            return i !== t2 && (i = tJ),
            i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
        }
        let t6 = new Set(["auto", "none", "0"])
          , t7 = t => t === tT || t === tI
          , et = (t, e) => parseFloat(t.split(", ")[e])
          , ee = (t, e) => (i, {transform: n}) => {
            if ("none" === n || !n)
                return 0;
            let r = n.match(/^matrix3d\((.+)\)$/u);
            if (r)
                return et(r[1], e);
            {
                let e = n.match(/^matrix\((.+)\)$/u);
                return e ? et(e[1], t) : 0
            }
        }
          , ei = new Set(["x", "y", "z"])
          , en = O.filter(t => !ei.has(t))
          , er = {
            width: ({x: t}, {paddingLeft: e="0", paddingRight: i="0"}) => t.max - t.min - parseFloat(e) - parseFloat(i),
            height: ({y: t}, {paddingTop: e="0", paddingBottom: i="0"}) => t.max - t.min - parseFloat(e) - parseFloat(i),
            top: (t, {top: e}) => parseFloat(e),
            left: (t, {left: e}) => parseFloat(e),
            bottom: ({y: t}, {top: e}) => parseFloat(e) + (t.max - t.min),
            right: ({x: t}, {left: e}) => parseFloat(e) + (t.max - t.min),
            x: ee(4, 13),
            y: ee(5, 14)
        };
        er.translateX = er.x,
        er.translateY = er.y;
        let es = new Set
          , eo = !1
          , ea = !1;
        function el() {
            if (ea) {
                let t = Array.from(es).filter(t => t.needsMeasurement)
                  , e = new Set(t.map(t => t.element))
                  , i = new Map;
                e.forEach(t => {
                    let e = function(t) {
                        let e = [];
                        return en.forEach(i => {
                            let n = t.getValue(i);
                            void 0 !== n && (e.push([i, n.get()]),
                            n.set(i.startsWith("scale") ? 1 : 0))
                        }
                        ),
                        e
                    }(t);
                    e.length && (i.set(t, e),
                    t.render())
                }
                ),
                t.forEach(t => t.measureInitialState()),
                e.forEach(t => {
                    t.render();
                    let e = i.get(t);
                    e && e.forEach( ([e,i]) => {
                        var n;
                        null === (n = t.getValue(e)) || void 0 === n || n.set(i)
                    }
                    )
                }
                ),
                t.forEach(t => t.measureEndState()),
                t.forEach(t => {
                    void 0 !== t.suspendedScrollY && window.scrollTo(0, t.suspendedScrollY)
                }
                )
            }
            ea = !1,
            eo = !1,
            es.forEach(t => t.complete()),
            es.clear()
        }
        function eu() {
            es.forEach(t => {
                t.readKeyframes(),
                t.needsMeasurement && (ea = !0)
            }
            )
        }
        class eh {
            constructor(t, e, i, n, r, s=!1) {
                this.isComplete = !1,
                this.isAsync = !1,
                this.needsMeasurement = !1,
                this.isScheduled = !1,
                this.unresolvedKeyframes = [...t],
                this.onComplete = e,
                this.name = i,
                this.motionValue = n,
                this.element = r,
                this.isAsync = s
            }
            scheduleResolve() {
                this.isScheduled = !0,
                this.isAsync ? (es.add(this),
                eo || (eo = !0,
                H.read(eu),
                H.resolveKeyframes(el))) : (this.readKeyframes(),
                this.complete())
            }
            readKeyframes() {
                let {unresolvedKeyframes: t, name: e, element: i, motionValue: n} = this;
                for (let r = 0; r < t.length; r++)
                    if (null === t[r]) {
                        if (0 === r) {
                            let r = null == n ? void 0 : n.get()
                              , s = t[t.length - 1];
                            if (void 0 !== r)
                                t[0] = r;
                            else if (i && e) {
                                let n = i.readValue(e, s);
                                null != n && (t[0] = n)
                            }
                            void 0 === t[0] && (t[0] = s),
                            n && void 0 === r && n.set(t[0])
                        } else
                            t[r] = t[r - 1]
                    }
            }
            setFinalKeyframe() {}
            measureInitialState() {}
            renderEndStyles() {}
            measureEndState() {}
            complete() {
                this.isComplete = !0,
                this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
                es.delete(this)
            }
            cancel() {
                this.isComplete || (this.isScheduled = !1,
                es.delete(this))
            }
            resume() {
                this.isComplete || this.scheduleResolve()
            }
        }
        let ed = t => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t)
          , ec = t => e => "string" == typeof e && e.startsWith(t)
          , ep = ec("--")
          , em = ec("var(--")
          , ef = t => !!em(t) && ev.test(t.split("/*")[0].trim())
          , ev = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu
          , eg = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
          , ey = t => e => e.test(t)
          , ex = [tT, tI, tB, tO, tU, tN, {
            test: t => "auto" === t,
            parse: t => t
        }]
          , eb = t => ex.find(ey(t));
        class ew extends eh {
            constructor(t, e, i, n, r) {
                super(t, e, i, n, r, !0)
            }
            readKeyframes() {
                let {unresolvedKeyframes: t, element: e, name: i} = this;
                if (!e || !e.current)
                    return;
                super.readKeyframes();
                for (let i = 0; i < t.length; i++) {
                    let n = t[i];
                    if ("string" == typeof n && ef(n = n.trim())) {
                        let r = function t(e, i, n=1) {
                            F(n <= 4, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
                            let[r,s] = function(t) {
                                let e = eg.exec(t);
                                if (!e)
                                    return [, ];
                                let[,i,n,r] = e;
                                return [`--${null != i ? i : n}`, r]
                            }(e);
                            if (!r)
                                return;
                            let o = window.getComputedStyle(i).getPropertyValue(r);
                            if (o) {
                                let t = o.trim();
                                return ed(t) ? parseFloat(t) : t
                            }
                            return ef(s) ? t(s, i, n + 1) : s
                        }(n, e.current);
                        void 0 !== r && (t[i] = r),
                        i === t.length - 1 && (this.finalKeyframe = n)
                    }
                }
                if (this.resolveNoneKeyframes(),
                !I.has(i) || 2 !== t.length)
                    return;
                let[n,r] = t
                  , s = eb(n)
                  , o = eb(r);
                if (s !== o) {
                    if (t7(s) && t7(o))
                        for (let e = 0; e < t.length; e++) {
                            let i = t[e];
                            "string" == typeof i && (t[e] = parseFloat(i))
                        }
                    else
                        this.needsMeasurement = !0
                }
            }
            resolveNoneKeyframes() {
                let {unresolvedKeyframes: t, name: e} = this
                  , i = [];
                for (let e = 0; e < t.length; e++) {
                    var n;
                    ("number" == typeof (n = t[e]) ? 0 === n : null === n || "none" === n || "0" === n || tw(n)) && i.push(e)
                }
                i.length && function(t, e, i) {
                    let n, r = 0;
                    for (; r < t.length && !n; ) {
                        let e = t[r];
                        "string" == typeof e && !t6.has(e) && tq(e).values.length && (n = t[r]),
                        r++
                    }
                    if (n && i)
                        for (let r of e)
                            t[r] = t8(i, n)
                }(t, i, e)
            }
            measureInitialState() {
                let {element: t, unresolvedKeyframes: e, name: i} = this;
                if (!t || !t.current)
                    return;
                "height" === i && (this.suspendedScrollY = window.pageYOffset),
                this.measuredOrigin = er[i](t.measureViewportBox(), window.getComputedStyle(t.current)),
                e[0] = this.measuredOrigin;
                let n = e[e.length - 1];
                void 0 !== n && t.getValue(i, n).jump(n, !1)
            }
            measureEndState() {
                var t;
                let {element: e, name: i, unresolvedKeyframes: n} = this;
                if (!e || !e.current)
                    return;
                let r = e.getValue(i);
                r && r.jump(this.measuredOrigin, !1);
                let s = n.length - 1
                  , o = n[s];
                n[s] = er[i](e.measureViewportBox(), window.getComputedStyle(e.current)),
                null !== o && void 0 === this.finalKeyframe && (this.finalKeyframe = o),
                (null === (t = this.removedTransforms) || void 0 === t ? void 0 : t.length) && this.removedTransforms.forEach( ([t,i]) => {
                    e.getValue(t).set(i)
                }
                ),
                this.resolveNoneKeyframes()
            }
        }
        let eP = (t, e) => "zIndex" !== e && !!("number" == typeof t || Array.isArray(t) || "string" == typeof t && (tJ.test(t) || "0" === t) && !t.startsWith("url("))
          , eT = t => null !== t;
        function eS(t, {repeat: e, repeatType: i="loop"}, n) {
            let r = t.filter(eT)
              , s = e && "loop" !== i && e % 2 == 1 ? 0 : r.length - 1;
            return s && void 0 !== n ? n : r[s]
        }
        class eA {
            constructor({autoplay: t=!0, delay: e=0, type: i="keyframes", repeat: n=0, repeatDelay: r=0, repeatType: s="loop", ...o}) {
                this.isStopped = !1,
                this.hasAttemptedResolve = !1,
                this.createdAt = Z.now(),
                this.options = {
                    autoplay: t,
                    delay: e,
                    type: i,
                    repeat: n,
                    repeatDelay: r,
                    repeatType: s,
                    ...o
                },
                this.updateFinishedPromise()
            }
            calcStartTime() {
                return this.resolvedAt && this.resolvedAt - this.createdAt > 40 ? this.resolvedAt : this.createdAt
            }
            get resolved() {
                return this._resolved || this.hasAttemptedResolve || (eu(),
                el()),
                this._resolved
            }
            onKeyframesResolved(t, e) {
                this.resolvedAt = Z.now(),
                this.hasAttemptedResolve = !0;
                let {name: i, type: n, velocity: r, delay: s, onComplete: o, onUpdate: a, isGenerator: l} = this.options;
                if (!l && !function(t, e, i, n) {
                    let r = t[0];
                    if (null === r)
                        return !1;
                    if ("display" === e || "visibility" === e)
                        return !0;
                    let s = t[t.length - 1]
                      , o = eP(r, e)
                      , a = eP(s, e);
                    return F(o === a, `You are trying to animate ${e} from "${r}" to "${s}". ${r} is not an animatable value - to enable this animation set ${r} to a value animatable to ${s} via the \`style\` property.`),
                    !!o && !!a && (function(t) {
                        let e = t[0];
                        if (1 === t.length)
                            return !0;
                        for (let i = 0; i < t.length; i++)
                            if (t[i] !== e)
                                return !0
                    }(t) || ("spring" === i || p(i)) && n)
                }(t, i, n, r)) {
                    if (tu.current || !s) {
                        a && a(eS(t, this.options, e)),
                        o && o(),
                        this.resolveFinishedPromise();
                        return
                    }
                    this.options.duration = 0
                }
                let u = this.initPlayback(t, e);
                !1 !== u && (this._resolved = {
                    keyframes: t,
                    finalKeyframe: e,
                    ...u
                },
                this.onPostResolved())
            }
            onPostResolved() {}
            then(t, e) {
                return this.currentFinishedPromise.then(t, e)
            }
            flatten() {
                this.options.type = "keyframes",
                this.options.ease = "linear"
            }
            updateFinishedPromise() {
                this.currentFinishedPromise = new Promise(t => {
                    this.resolveFinishedPromise = t
                }
                )
            }
        }
        let eE = {
            layout: 0,
            mainThread: 0,
            waapi: 0
        }
          , eM = (t, e, i) => t + (e - t) * i;
        function ek(t, e, i) {
            return (i < 0 && (i += 1),
            i > 1 && (i -= 1),
            i < 1 / 6) ? t + (e - t) * 6 * i : i < .5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t
        }
        function eC(t, e) {
            return i => i > 0 ? e : t
        }
        let eR = (t, e, i) => {
            let n = t * t
              , r = i * (e * e - n) + n;
            return r < 0 ? 0 : Math.sqrt(r)
        }
          , eV = [tL, tj, t$]
          , eD = t => eV.find(e => e.test(t));
        function ej(t) {
            let e = eD(t);
            if (F(!!e, `'${t}' is not an animatable color. Use the equivalent color code instead.`),
            !e)
                return !1;
            let i = e.parse(t);
            return e === t$ && (i = function({hue: t, saturation: e, lightness: i, alpha: n}) {
                t /= 360,
                i /= 100;
                let r = 0
                  , s = 0
                  , o = 0;
                if (e /= 100) {
                    let n = i < .5 ? i * (1 + e) : i + e - i * e
                      , a = 2 * i - n;
                    r = ek(a, n, t + 1 / 3),
                    s = ek(a, n, t),
                    o = ek(a, n, t - 1 / 3)
                } else
                    r = s = o = i;
                return {
                    red: Math.round(255 * r),
                    green: Math.round(255 * s),
                    blue: Math.round(255 * o),
                    alpha: n
                }
            }(i)),
            i
        }
        let eL = (t, e) => {
            let i = ej(t)
              , n = ej(e);
            if (!i || !n)
                return eC(t, e);
            let r = {
                ...i
            };
            return t => (r.red = eR(i.red, n.red, t),
            r.green = eR(i.green, n.green, t),
            r.blue = eR(i.blue, n.blue, t),
            r.alpha = eM(i.alpha, n.alpha, t),
            tj.transform(r))
        }
          , eF = (t, e) => i => e(t(i))
          , eO = (...t) => t.reduce(eF)
          , eB = new Set(["none", "hidden"]);
        function eI(t, e) {
            return i => eM(t, e, i)
        }
        function eN(t) {
            return "number" == typeof t ? eI : "string" == typeof t ? ef(t) ? eC : tW.test(t) ? eL : e$ : Array.isArray(t) ? eU : "object" == typeof t ? tW.test(t) ? eL : ez : eC
        }
        function eU(t, e) {
            let i = [...t]
              , n = i.length
              , r = t.map( (t, i) => eN(t)(t, e[i]));
            return t => {
                for (let e = 0; e < n; e++)
                    i[e] = r[e](t);
                return i
            }
        }
        function ez(t, e) {
            let i = {
                ...t,
                ...e
            }
              , n = {};
            for (let r in i)
                void 0 !== t[r] && void 0 !== e[r] && (n[r] = eN(t[r])(t[r], e[r]));
            return t => {
                for (let e in n)
                    i[e] = n[e](t);
                return i
            }
        }
        let e$ = (t, e) => {
            let i = tJ.createTransformer(e)
              , n = tq(t)
              , r = tq(e);
            return n.indexes.var.length === r.indexes.var.length && n.indexes.color.length === r.indexes.color.length && n.indexes.number.length >= r.indexes.number.length ? eB.has(t) && !r.values.length || eB.has(e) && !n.values.length ? function(t, e) {
                return eB.has(t) ? i => i <= 0 ? t : e : i => i >= 1 ? e : t
            }(t, e) : eO(eU(function(t, e) {
                var i;
                let n = []
                  , r = {
                    color: 0,
                    var: 0,
                    number: 0
                };
                for (let s = 0; s < e.values.length; s++) {
                    let o = e.types[s]
                      , a = t.indexes[o][r[o]]
                      , l = null !== (i = t.values[a]) && void 0 !== i ? i : 0;
                    n[s] = l,
                    r[o]++
                }
                return n
            }(n, r), r.values), i) : (F(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),
            eC(t, e))
        }
        ;
        function eW(t, e, i) {
            return "number" == typeof t && "number" == typeof e && "number" == typeof i ? eM(t, e, i) : eN(t)(t, e)
        }
        function e_(t, e, i) {
            var n, r;
            let s = Math.max(e - 5, 0);
            return n = i - t(s),
            (r = e - s) ? 1e3 / r * n : 0
        }
        let eK = {
            stiffness: 100,
            damping: 10,
            mass: 1,
            velocity: 0,
            duration: 800,
            bounce: .3,
            visualDuration: .3,
            restSpeed: {
                granular: .01,
                default: 2
            },
            restDelta: {
                granular: .005,
                default: .5
            },
            minDuration: .01,
            maxDuration: 10,
            minDamping: .05,
            maxDamping: 1
        };
        function eH(t, e) {
            return t * Math.sqrt(1 - e * e)
        }
        let eY = ["duration", "bounce"]
          , eq = ["stiffness", "damping", "mass"];
        function eX(t, e) {
            return e.some(e => void 0 !== t[e])
        }
        function eG(t=eK.visualDuration, e=eK.bounce) {
            let i;
            let n = "object" != typeof t ? {
                visualDuration: t,
                keyframes: [0, 1],
                bounce: e
            } : t
              , {restSpeed: r, restDelta: s} = n
              , o = n.keyframes[0]
              , a = n.keyframes[n.keyframes.length - 1]
              , l = {
                done: !1,
                value: o
            }
              , {stiffness: u, damping: h, mass: d, duration: p, velocity: m, isResolvedFromDuration: f} = function(t) {
                let e = {
                    velocity: eK.velocity,
                    stiffness: eK.stiffness,
                    damping: eK.damping,
                    mass: eK.mass,
                    isResolvedFromDuration: !1,
                    ...t
                };
                if (!eX(t, eq) && eX(t, eY)) {
                    if (t.visualDuration) {
                        let i = 2 * Math.PI / (1.2 * t.visualDuration)
                          , n = i * i
                          , r = 2 * tP(.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(n);
                        e = {
                            ...e,
                            mass: eK.mass,
                            stiffness: n,
                            damping: r
                        }
                    } else {
                        let i = function({duration: t=eK.duration, bounce: e=eK.bounce, velocity: i=eK.velocity, mass: n=eK.mass}) {
                            let r, s;
                            F(t <= j(eK.maxDuration), "Spring duration must be 10 seconds or less");
                            let o = 1 - e;
                            o = tP(eK.minDamping, eK.maxDamping, o),
                            t = tP(eK.minDuration, eK.maxDuration, L(t)),
                            o < 1 ? (r = e => {
                                let n = e * o
                                  , r = n * t;
                                return .001 - (n - i) / eH(e, o) * Math.exp(-r)
                            }
                            ,
                            s = e => {
                                let n = e * o * t
                                  , s = Math.pow(o, 2) * Math.pow(e, 2) * t
                                  , a = Math.exp(-n)
                                  , l = eH(Math.pow(e, 2), o);
                                return (n * i + i - s) * a * (-r(e) + .001 > 0 ? -1 : 1) / l
                            }
                            ) : (r = e => -.001 + Math.exp(-e * t) * ((e - i) * t + 1),
                            s = e => t * t * (i - e) * Math.exp(-e * t));
                            let a = function(t, e, i) {
                                let n = i;
                                for (let i = 1; i < 12; i++)
                                    n -= t(n) / e(n);
                                return n
                            }(r, s, 5 / t);
                            if (t = j(t),
                            isNaN(a))
                                return {
                                    stiffness: eK.stiffness,
                                    damping: eK.damping,
                                    duration: t
                                };
                            {
                                let e = Math.pow(a, 2) * n;
                                return {
                                    stiffness: e,
                                    damping: 2 * o * Math.sqrt(n * e),
                                    duration: t
                                }
                            }
                        }(t);
                        (e = {
                            ...e,
                            ...i,
                            mass: eK.mass
                        }).isResolvedFromDuration = !0
                    }
                }
                return e
            }({
                ...n,
                velocity: -L(n.velocity || 0)
            })
              , v = m || 0
              , g = h / (2 * Math.sqrt(u * d))
              , y = a - o
              , b = L(Math.sqrt(u / d))
              , w = 5 > Math.abs(y);
            if (r || (r = w ? eK.restSpeed.granular : eK.restSpeed.default),
            s || (s = w ? eK.restDelta.granular : eK.restDelta.default),
            g < 1) {
                let t = eH(b, g);
                i = e => a - Math.exp(-g * b * e) * ((v + g * b * y) / t * Math.sin(t * e) + y * Math.cos(t * e))
            } else if (1 === g)
                i = t => a - Math.exp(-b * t) * (y + (v + b * y) * t);
            else {
                let t = b * Math.sqrt(g * g - 1);
                i = e => {
                    let i = Math.exp(-g * b * e)
                      , n = Math.min(t * e, 300);
                    return a - i * ((v + g * b * y) * Math.sinh(n) + t * y * Math.cosh(n)) / t
                }
            }
            let P = {
                calculatedDuration: f && p || null,
                next: t => {
                    let e = i(t);
                    if (f)
                        l.done = t >= p;
                    else {
                        let n = 0;
                        g < 1 && (n = 0 === t ? j(v) : e_(i, t, e));
                        let o = Math.abs(n) <= r
                          , u = Math.abs(a - e) <= s;
                        l.done = o && u
                    }
                    return l.value = l.done ? a : e,
                    l
                }
                ,
                toString: () => {
                    let t = Math.min(c(P), 2e4)
                      , e = x(e => P.next(t * e).value, t, 30);
                    return t + "ms " + e
                }
            };
            return P
        }
        function eZ({keyframes: t, velocity: e=0, power: i=.8, timeConstant: n=325, bounceDamping: r=10, bounceStiffness: s=500, modifyTarget: o, min: a, max: l, restDelta: u=.5, restSpeed: h}) {
            let d, c;
            let p = t[0]
              , m = {
                done: !1,
                value: p
            }
              , f = t => void 0 !== a && t < a || void 0 !== l && t > l
              , v = t => void 0 === a ? l : void 0 === l ? a : Math.abs(a - t) < Math.abs(l - t) ? a : l
              , g = i * e
              , y = p + g
              , x = void 0 === o ? y : o(y);
            x !== y && (g = x - p);
            let b = t => -g * Math.exp(-t / n)
              , w = t => x + b(t)
              , P = t => {
                let e = b(t)
                  , i = w(t);
                m.done = Math.abs(e) <= u,
                m.value = m.done ? x : i
            }
              , T = t => {
                f(m.value) && (d = t,
                c = eG({
                    keyframes: [m.value, v(m.value)],
                    velocity: e_(w, t, m.value),
                    damping: r,
                    stiffness: s,
                    restDelta: u,
                    restSpeed: h
                }))
            }
            ;
            return T(0),
            {
                calculatedDuration: null,
                next: t => {
                    let e = !1;
                    return (c || void 0 !== d || (e = !0,
                    P(t),
                    T(t)),
                    void 0 !== d && t >= d) ? c.next(t - d) : (e || P(t),
                    m)
                }
            }
        }
        let eJ = td(.42, 0, 1, 1)
          , eQ = td(0, 0, .58, 1)
          , e0 = td(.42, 0, .58, 1)
          , e1 = t => Array.isArray(t) && "number" != typeof t[0]
          , e2 = {
            linear: F,
            easeIn: eJ,
            easeInOut: e0,
            easeOut: eQ,
            circIn: ty,
            circInOut: tb,
            circOut: tx,
            backIn: tf,
            backInOut: tv,
            backOut: tm,
            anticipate: tg
        }
          , e3 = t => {
            if (f(t)) {
                F(4 === t.length, "Cubic bezier arrays must contain four numerical values.");
                let[e,i,n,r] = t;
                return td(e, i, n, r)
            }
            return "string" == typeof t ? (F(void 0 !== e2[t], `Invalid easing type '${t}'`),
            e2[t]) : t
        }
        ;
        function e5({duration: t=300, keyframes: e, times: i, ease: n="easeInOut"}) {
            let r = e1(n) ? n.map(e3) : e3(n)
              , s = {
                done: !1,
                value: e[0]
            }
              , o = function(t, e, {clamp: i=!0, ease: n, mixer: r}={}) {
                let s = t.length;
                if (F(s === e.length, "Both input and output ranges must be the same length"),
                1 === s)
                    return () => e[0];
                if (2 === s && e[0] === e[1])
                    return () => e[1];
                let o = t[0] === t[1];
                t[0] > t[s - 1] && (t = [...t].reverse(),
                e = [...e].reverse());
                let a = function(t, e, i) {
                    let n = []
                      , r = i || eW
                      , s = t.length - 1;
                    for (let i = 0; i < s; i++) {
                        let s = r(t[i], t[i + 1]);
                        e && (s = eO(Array.isArray(e) ? e[i] || F : e, s)),
                        n.push(s)
                    }
                    return n
                }(e, n, r)
                  , l = a.length
                  , u = i => {
                    if (o && i < t[0])
                        return e[0];
                    let n = 0;
                    if (l > 1)
                        for (; n < t.length - 2 && !(i < t[n + 1]); n++)
                            ;
                    let r = y(t[n], t[n + 1], i);
                    return a[n](r)
                }
                ;
                return i ? e => u(tP(t[0], t[s - 1], e)) : u
            }((i && i.length === e.length ? i : function(t) {
                let e = [0];
                return function(t, e) {
                    let i = t[t.length - 1];
                    for (let n = 1; n <= e; n++) {
                        let r = y(0, e, n);
                        t.push(eM(i, 1, r))
                    }
                }(e, t.length - 1),
                e
            }(e)).map(e => e * t), e, {
                ease: Array.isArray(r) ? r : e.map( () => r || e0).splice(0, e.length - 1)
            });
            return {
                calculatedDuration: t,
                next: e => (s.value = o(e),
                s.done = e >= t,
                s)
            }
        }
        let e4 = t => {
            let e = ({timestamp: e}) => t(e);
            return {
                start: () => H.update(e, !0),
                stop: () => Y(e),
                now: () => q.isProcessing ? q.timestamp : Z.now()
            }
        }
          , e9 = {
            decay: eZ,
            inertia: eZ,
            tween: e5,
            keyframes: e5,
            spring: eG
        }
          , e8 = t => t / 100;
        class e6 extends eA {
            constructor(t) {
                super(t),
                this.holdTime = null,
                this.cancelTime = null,
                this.currentTime = 0,
                this.playbackSpeed = 1,
                this.pendingPlayState = "running",
                this.startTime = null,
                this.state = "idle",
                this.stop = () => {
                    if (this.resolver.cancel(),
                    this.isStopped = !0,
                    "idle" === this.state)
                        return;
                    this.teardown();
                    let {onStop: t} = this.options;
                    t && t()
                }
                ;
                let {name: e, motionValue: i, element: n, keyframes: r} = this.options
                  , s = (null == n ? void 0 : n.KeyframeResolver) || eh;
                this.resolver = new s(r, (t, e) => this.onKeyframesResolved(t, e),e,i,n),
                this.resolver.scheduleResolve()
            }
            flatten() {
                super.flatten(),
                this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes))
            }
            initPlayback(t) {
                let e, i;
                let {type: n="keyframes", repeat: r=0, repeatDelay: s=0, repeatType: o, velocity: a=0} = this.options
                  , l = p(n) ? n : e9[n] || e5;
                l !== e5 && "number" != typeof t[0] && (e = eO(e8, eW(t[0], t[1])),
                t = [0, 100]);
                let u = l({
                    ...this.options,
                    keyframes: t
                });
                "mirror" === o && (i = l({
                    ...this.options,
                    keyframes: [...t].reverse(),
                    velocity: -a
                })),
                null === u.calculatedDuration && (u.calculatedDuration = c(u));
                let {calculatedDuration: h} = u
                  , d = h + s;
                return {
                    generator: u,
                    mirroredGenerator: i,
                    mapPercentToKeyframes: e,
                    calculatedDuration: h,
                    resolvedDuration: d,
                    totalDuration: d * (r + 1) - s
                }
            }
            onPostResolved() {
                let {autoplay: t=!0} = this.options;
                eE.mainThread++,
                this.play(),
                "paused" !== this.pendingPlayState && t ? this.state = this.pendingPlayState : this.pause()
            }
            tick(t, e=!1) {
                let {resolved: i} = this;
                if (!i) {
                    let {keyframes: t} = this.options;
                    return {
                        done: !0,
                        value: t[t.length - 1]
                    }
                }
                let {finalKeyframe: n, generator: r, mirroredGenerator: s, mapPercentToKeyframes: o, keyframes: a, calculatedDuration: l, totalDuration: u, resolvedDuration: h} = i;
                if (null === this.startTime)
                    return r.next(0);
                let {delay: d, repeat: c, repeatType: p, repeatDelay: m, onUpdate: f} = this.options;
                this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - u / this.speed, this.startTime)),
                e ? this.currentTime = t : null !== this.holdTime ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
                let v = this.currentTime - d * (this.speed >= 0 ? 1 : -1)
                  , g = this.speed >= 0 ? v < 0 : v > u;
                this.currentTime = Math.max(v, 0),
                "finished" === this.state && null === this.holdTime && (this.currentTime = u);
                let y = this.currentTime
                  , x = r;
                if (c) {
                    let t = Math.min(this.currentTime, u) / h
                      , e = Math.floor(t)
                      , i = t % 1;
                    !i && t >= 1 && (i = 1),
                    1 === i && e--,
                    (e = Math.min(e, c + 1)) % 2 && ("reverse" === p ? (i = 1 - i,
                    m && (i -= m / h)) : "mirror" === p && (x = s)),
                    y = tP(0, 1, i) * h
                }
                let b = g ? {
                    done: !1,
                    value: a[0]
                } : x.next(y);
                o && (b.value = o(b.value));
                let {done: w} = b;
                g || null === l || (w = this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
                let P = null === this.holdTime && ("finished" === this.state || "running" === this.state && w);
                return P && void 0 !== n && (b.value = eS(a, this.options, n)),
                f && f(b.value),
                P && this.finish(),
                b
            }
            get duration() {
                let {resolved: t} = this;
                return t ? L(t.calculatedDuration) : 0
            }
            get time() {
                return L(this.currentTime)
            }
            set time(t) {
                t = j(t),
                this.currentTime = t,
                null !== this.holdTime || 0 === this.speed ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed)
            }
            get speed() {
                return this.playbackSpeed
            }
            set speed(t) {
                let e = this.playbackSpeed !== t;
                this.playbackSpeed = t,
                e && (this.time = L(this.currentTime))
            }
            play() {
                if (this.resolver.isScheduled || this.resolver.resume(),
                !this._resolved) {
                    this.pendingPlayState = "running";
                    return
                }
                if (this.isStopped)
                    return;
                let {driver: t=e4, onPlay: e, startTime: i} = this.options;
                this.driver || (this.driver = t(t => this.tick(t))),
                e && e();
                let n = this.driver.now();
                null !== this.holdTime ? this.startTime = n - this.holdTime : this.startTime ? "finished" === this.state && (this.startTime = n) : this.startTime = null != i ? i : this.calcStartTime(),
                "finished" === this.state && this.updateFinishedPromise(),
                this.cancelTime = this.startTime,
                this.holdTime = null,
                this.state = "running",
                this.driver.start()
            }
            pause() {
                var t;
                if (!this._resolved) {
                    this.pendingPlayState = "paused";
                    return
                }
                this.state = "paused",
                this.holdTime = null !== (t = this.currentTime) && void 0 !== t ? t : 0
            }
            complete() {
                "running" !== this.state && this.play(),
                this.pendingPlayState = this.state = "finished",
                this.holdTime = null
            }
            finish() {
                this.teardown(),
                this.state = "finished";
                let {onComplete: t} = this.options;
                t && t()
            }
            cancel() {
                null !== this.cancelTime && this.tick(this.cancelTime),
                this.teardown(),
                this.updateFinishedPromise()
            }
            teardown() {
                this.state = "idle",
                this.stopDriver(),
                this.resolveFinishedPromise(),
                this.updateFinishedPromise(),
                this.startTime = this.cancelTime = null,
                this.resolver.cancel(),
                eE.mainThread--
            }
            stopDriver() {
                this.driver && (this.driver.stop(),
                this.driver = void 0)
            }
            sample(t) {
                return this.startTime = 0,
                this.tick(t, !0)
            }
        }
        let e7 = new Set(["opacity", "clipPath", "filter", "transform"])
          , it = a( () => Object.hasOwnProperty.call(Element.prototype, "animate"))
          , ie = {
            anticipate: tg,
            backInOut: tv,
            circInOut: tb
        };
        class ii extends eA {
            constructor(t) {
                super(t);
                let {name: e, motionValue: i, element: n, keyframes: r} = this.options;
                this.resolver = new ew(r, (t, e) => this.onKeyframesResolved(t, e),e,i,n),
                this.resolver.scheduleResolve()
            }
            initPlayback(t, e) {
                var i;
                let {duration: n=300, times: r, ease: s, type: o, motionValue: a, name: l, startTime: u} = this.options;
                if (!a.owner || !a.owner.current)
                    return !1;
                if ("string" == typeof s && g() && s in ie && (s = ie[s]),
                p((i = this.options).type) || "spring" === i.type || !function t(e) {
                    return !!("function" == typeof e && g() || !e || "string" == typeof e && (e in w || g()) || f(e) || Array.isArray(e) && e.every(t))
                }(i.ease)) {
                    let {onComplete: e, onUpdate: i, motionValue: a, element: l, ...u} = this.options
                      , h = function(t, e) {
                        let i = new e6({
                            ...e,
                            keyframes: t,
                            repeat: 0,
                            delay: 0,
                            isGenerator: !0
                        })
                          , n = {
                            done: !1,
                            value: t[0]
                        }
                          , r = []
                          , s = 0;
                        for (; !n.done && s < 2e4; )
                            r.push((n = i.sample(s)).value),
                            s += 10;
                        return {
                            times: void 0,
                            keyframes: r,
                            duration: s - 10,
                            ease: "linear"
                        }
                    }(t, u);
                    1 === (t = h.keyframes).length && (t[1] = t[0]),
                    n = h.duration,
                    r = h.times,
                    s = h.ease,
                    o = "keyframes"
                }
                let h = function(t, e, i, {delay: n=0, duration: r=300, repeat: s=0, repeatType: o="loop", ease: a="easeInOut", times: l}={}) {
                    let u = {
                        [e]: i
                    };
                    l && (u.offset = l);
                    let h = function t(e, i) {
                        if (e)
                            return "function" == typeof e && g() ? x(e, i) : f(e) ? b(e) : Array.isArray(e) ? e.map(e => t(e, i) || w.easeOut) : w[e]
                    }(a, r);
                    Array.isArray(h) && (u.easing = h),
                    _.value && eE.waapi++;
                    let d = t.animate(u, {
                        delay: n,
                        duration: r,
                        easing: Array.isArray(h) ? "linear" : h,
                        fill: "both",
                        iterations: s + 1,
                        direction: "reverse" === o ? "alternate" : "normal"
                    });
                    return _.value && d.finished.finally( () => {
                        eE.waapi--
                    }
                    ),
                    d
                }(a.owner.current, l, t, {
                    ...this.options,
                    duration: n,
                    times: r,
                    ease: s
                });
                return h.startTime = null != u ? u : this.calcStartTime(),
                this.pendingTimeline ? (m(h, this.pendingTimeline),
                this.pendingTimeline = void 0) : h.onfinish = () => {
                    let {onComplete: i} = this.options;
                    a.set(eS(t, this.options, e)),
                    i && i(),
                    this.cancel(),
                    this.resolveFinishedPromise()
                }
                ,
                {
                    animation: h,
                    duration: n,
                    times: r,
                    type: o,
                    ease: s,
                    keyframes: t
                }
            }
            get duration() {
                let {resolved: t} = this;
                if (!t)
                    return 0;
                let {duration: e} = t;
                return L(e)
            }
            get time() {
                let {resolved: t} = this;
                if (!t)
                    return 0;
                let {animation: e} = t;
                return L(e.currentTime || 0)
            }
            set time(t) {
                let {resolved: e} = this;
                if (!e)
                    return;
                let {animation: i} = e;
                i.currentTime = j(t)
            }
            get speed() {
                let {resolved: t} = this;
                if (!t)
                    return 1;
                let {animation: e} = t;
                return e.playbackRate
            }
            set speed(t) {
                let {resolved: e} = this;
                if (!e)
                    return;
                let {animation: i} = e;
                i.playbackRate = t
            }
            get state() {
                let {resolved: t} = this;
                if (!t)
                    return "idle";
                let {animation: e} = t;
                return e.playState
            }
            get startTime() {
                let {resolved: t} = this;
                if (!t)
                    return null;
                let {animation: e} = t;
                return e.startTime
            }
            attachTimeline(t) {
                if (this._resolved) {
                    let {resolved: e} = this;
                    if (!e)
                        return F;
                    let {animation: i} = e;
                    m(i, t)
                } else
                    this.pendingTimeline = t;
                return F
            }
            play() {
                if (this.isStopped)
                    return;
                let {resolved: t} = this;
                if (!t)
                    return;
                let {animation: e} = t;
                "finished" === e.playState && this.updateFinishedPromise(),
                e.play()
            }
            pause() {
                let {resolved: t} = this;
                if (!t)
                    return;
                let {animation: e} = t;
                e.pause()
            }
            stop() {
                if (this.resolver.cancel(),
                this.isStopped = !0,
                "idle" === this.state)
                    return;
                this.resolveFinishedPromise(),
                this.updateFinishedPromise();
                let {resolved: t} = this;
                if (!t)
                    return;
                let {animation: e, keyframes: i, duration: n, type: r, ease: s, times: o} = t;
                if ("idle" === e.playState || "finished" === e.playState)
                    return;
                if (this.time) {
                    let {motionValue: t, onUpdate: e, onComplete: a, element: l, ...u} = this.options
                      , h = new e6({
                        ...u,
                        keyframes: i,
                        duration: n,
                        type: r,
                        ease: s,
                        times: o,
                        isGenerator: !0
                    })
                      , d = j(this.time);
                    t.setWithVelocity(h.sample(d - 10).value, h.sample(d).value, 10)
                }
                let {onStop: a} = this.options;
                a && a(),
                this.cancel()
            }
            complete() {
                let {resolved: t} = this;
                t && t.animation.finish()
            }
            cancel() {
                let {resolved: t} = this;
                t && t.animation.cancel()
            }
            static supports(t) {
                let {motionValue: e, name: i, repeatDelay: n, repeatType: r, damping: s, type: o} = t;
                if (!e || !e.owner || !(e.owner.current instanceof HTMLElement))
                    return !1;
                let {onUpdate: a, transformTemplate: l} = e.owner.getProps();
                return it() && i && e7.has(i) && !a && !l && !n && "mirror" !== r && 0 !== s && "inertia" !== o
            }
        }
        let ir = {
            type: "spring",
            stiffness: 500,
            damping: 25,
            restSpeed: 10
        }
          , is = t => ({
            type: "spring",
            stiffness: 550,
            damping: 0 === t ? 2 * Math.sqrt(550) : 30,
            restSpeed: 10
        })
          , io = {
            type: "keyframes",
            duration: .8
        }
          , ia = {
            type: "keyframes",
            ease: [.25, .1, .35, 1],
            duration: .3
        }
          , il = (t, {keyframes: e}) => e.length > 2 ? io : B.has(t) ? t.startsWith("scale") ? is(e[1]) : ir : ia
          , iu = (t, e, i, n={}, r, s) => o => {
            let a = d(n, t) || {}
              , l = a.delay || n.delay || 0
              , {elapsed: u=0} = n;
            u -= j(l);
            let c = {
                keyframes: Array.isArray(i) ? i : [null, i],
                ease: "easeOut",
                velocity: e.getVelocity(),
                ...a,
                delay: -u,
                onUpdate: t => {
                    e.set(t),
                    a.onUpdate && a.onUpdate(t)
                }
                ,
                onComplete: () => {
                    o(),
                    a.onComplete && a.onComplete()
                }
                ,
                name: t,
                motionValue: e,
                element: s ? void 0 : r
            };
            !function({when: t, delay: e, delayChildren: i, staggerChildren: n, staggerDirection: r, repeat: s, repeatType: o, repeatDelay: a, from: l, elapsed: u, ...h}) {
                return !!Object.keys(h).length
            }(a) && (c = {
                ...c,
                ...il(t, c)
            }),
            c.duration && (c.duration = j(c.duration)),
            c.repeatDelay && (c.repeatDelay = j(c.repeatDelay)),
            void 0 !== c.from && (c.keyframes[0] = c.from);
            let p = !1;
            if (!1 !== c.type && (0 !== c.duration || c.repeatDelay) || (c.duration = 0,
            0 !== c.delay || (p = !0)),
            (tu.current || $.skipAnimations) && (p = !0,
            c.duration = 0,
            c.delay = 0),
            p && !s && void 0 !== e.get()) {
                let t = eS(c.keyframes, a);
                if (void 0 !== t)
                    return H.update( () => {
                        c.onUpdate(t),
                        c.onComplete()
                    }
                    ),
                    new h([])
            }
            return !s && ii.supports(c) ? new ii(c) : new e6(c)
        }
        ;
        function ih(t, e, {delay: i=0, transitionOverride: n, type: r}={}) {
            var s;
            let {transition: a=t.getDefaultTransition(), transitionEnd: l, ...u} = e;
            n && (a = n);
            let h = []
              , c = r && t.animationState && t.animationState.getState()[r];
            for (let e in u) {
                let n = t.getValue(e, null !== (s = t.latestValues[e]) && void 0 !== s ? s : null)
                  , r = u[e];
                if (void 0 === r || c && function({protectedKeys: t, needsAnimating: e}, i) {
                    let n = t.hasOwnProperty(i) && !0 !== e[i];
                    return e[i] = !1,
                    n
                }(c, e))
                    continue;
                let o = {
                    delay: i,
                    ...d(a || {}, e)
                }
                  , l = !1;
                if (window.MotionHandoffAnimation) {
                    let i = t.props[tl];
                    if (i) {
                        let t = window.MotionHandoffAnimation(i, e, H);
                        null !== t && (o.startTime = t,
                        l = !0)
                    }
                }
                to(t, e),
                n.start(iu(e, n, r, t.shouldReduceMotion && I.has(e) ? {
                    type: !1
                } : o, t, l));
                let p = n.animation;
                p && h.push(p)
            }
            return l && Promise.all(h).then( () => {
                H.update( () => {
                    l && function(t, e) {
                        let {transitionEnd: i={}, transition: n={}, ...r} = o(t, e) || {};
                        for (let e in r = {
                            ...r,
                            ...i
                        }) {
                            let i = z(r[e]);
                            t.hasValue(e) ? t.getValue(e).set(i) : t.addValue(e, tr(i))
                        }
                    }(t, l)
                }
                )
            }
            ),
            h
        }
        function id(t, e, i={}) {
            var n;
            let r = o(t, e, "exit" === i.type ? null === (n = t.presenceContext) || void 0 === n ? void 0 : n.custom : void 0)
              , {transition: s=t.getDefaultTransition() || {}} = r || {};
            i.transitionOverride && (s = i.transitionOverride);
            let a = r ? () => Promise.all(ih(t, r, i)) : () => Promise.resolve()
              , l = t.variantChildren && t.variantChildren.size ? (n=0) => {
                let {delayChildren: r=0, staggerChildren: o, staggerDirection: a} = s;
                return function(t, e, i=0, n=0, r=1, s) {
                    let o = []
                      , a = (t.variantChildren.size - 1) * n
                      , l = 1 === r ? (t=0) => t * n : (t=0) => a - t * n;
                    return Array.from(t.variantChildren).sort(ic).forEach( (t, n) => {
                        t.notify("AnimationStart", e),
                        o.push(id(t, e, {
                            ...s,
                            delay: i + l(n)
                        }).then( () => t.notify("AnimationComplete", e)))
                    }
                    ),
                    Promise.all(o)
                }(t, e, r + n, o, a, i)
            }
            : () => Promise.resolve()
              , {when: u} = s;
            if (!u)
                return Promise.all([a(), l(i.delay)]);
            {
                let[t,e] = "beforeChildren" === u ? [a, l] : [l, a];
                return t().then( () => e())
            }
        }
        function ic(t, e) {
            return t.sortNodePosition(e)
        }
        function ip(t, e) {
            if (!Array.isArray(e))
                return !1;
            let i = e.length;
            if (i !== t.length)
                return !1;
            for (let n = 0; n < i; n++)
                if (e[n] !== t[n])
                    return !1;
            return !0
        }
        function im(t) {
            return "string" == typeof t || Array.isArray(t)
        }
        let iv = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
          , ig = ["initial", ...iv]
          , iy = ig.length
          , ix = [...iv].reverse()
          , ib = iv.length;
        function iw(t=!1) {
            return {
                isActive: t,
                protectedKeys: {},
                needsAnimating: {},
                prevResolvedValues: {}
            }
        }
        function iP() {
            return {
                animate: iw(!0),
                whileInView: iw(),
                whileHover: iw(),
                whileTap: iw(),
                whileDrag: iw(),
                whileFocus: iw(),
                exit: iw()
            }
        }
        class iT {
            constructor(t) {
                this.isMounted = !1,
                this.node = t
            }
            update() {}
        }
        class iS extends iT {
            constructor(t) {
                super(t),
                t.animationState || (t.animationState = function(t) {
                    let e = e => Promise.all(e.map( ({animation: e, options: i}) => (function(t, e, i={}) {
                        let n;
                        if (t.notify("AnimationStart", e),
                        Array.isArray(e))
                            n = Promise.all(e.map(e => id(t, e, i)));
                        else if ("string" == typeof e)
                            n = id(t, e, i);
                        else {
                            let r = "function" == typeof e ? o(t, e, i.custom) : e;
                            n = Promise.all(ih(t, r, i))
                        }
                        return n.then( () => {
                            t.notify("AnimationComplete", e)
                        }
                        )
                    }
                    )(t, e, i)))
                      , i = iP()
                      , n = !0
                      , s = e => (i, n) => {
                        var r;
                        let s = o(t, n, "exit" === e ? null === (r = t.presenceContext) || void 0 === r ? void 0 : r.custom : void 0);
                        if (s) {
                            let {transition: t, transitionEnd: e, ...n} = s;
                            i = {
                                ...i,
                                ...n,
                                ...e
                            }
                        }
                        return i
                    }
                    ;
                    function a(a) {
                        let {props: l} = t
                          , u = function t(e) {
                            if (!e)
                                return;
                            if (!e.isControllingVariants) {
                                let i = e.parent && t(e.parent) || {};
                                return void 0 !== e.props.initial && (i.initial = e.props.initial),
                                i
                            }
                            let i = {};
                            for (let t = 0; t < iy; t++) {
                                let n = ig[t]
                                  , r = e.props[n];
                                (im(r) || !1 === r) && (i[n] = r)
                            }
                            return i
                        }(t.parent) || {}
                          , h = []
                          , d = new Set
                          , c = {}
                          , p = 1 / 0;
                        for (let e = 0; e < ib; e++) {
                            var m;
                            let o = ix[e]
                              , f = i[o]
                              , v = void 0 !== l[o] ? l[o] : u[o]
                              , g = im(v)
                              , y = o === a ? f.isActive : null;
                            !1 === y && (p = e);
                            let x = v === u[o] && v !== l[o] && g;
                            if (x && n && t.manuallyAnimateOnMount && (x = !1),
                            f.protectedKeys = {
                                ...c
                            },
                            !f.isActive && null === y || !v && !f.prevProp || r(v) || "boolean" == typeof v)
                                continue;
                            let b = (m = f.prevProp,
                            "string" == typeof v ? v !== m : !!Array.isArray(v) && !ip(v, m))
                              , w = b || o === a && f.isActive && !x && g || e > p && g
                              , P = !1
                              , T = Array.isArray(v) ? v : [v]
                              , S = T.reduce(s(o), {});
                            !1 === y && (S = {});
                            let {prevResolvedValues: A={}} = f
                              , E = {
                                ...A,
                                ...S
                            }
                              , M = e => {
                                w = !0,
                                d.has(e) && (P = !0,
                                d.delete(e)),
                                f.needsAnimating[e] = !0;
                                let i = t.getValue(e);
                                i && (i.liveStyle = !1)
                            }
                            ;
                            for (let t in E) {
                                let e = S[t]
                                  , i = A[t];
                                if (!c.hasOwnProperty(t))
                                    (N(e) && N(i) ? ip(e, i) : e === i) ? void 0 !== e && d.has(t) ? M(t) : f.protectedKeys[t] = !0 : null != e ? M(t) : d.add(t)
                            }
                            f.prevProp = v,
                            f.prevResolvedValues = S,
                            f.isActive && (c = {
                                ...c,
                                ...S
                            }),
                            n && t.blockInitialAnimation && (w = !1);
                            let k = !(x && b) || P;
                            w && k && h.push(...T.map(t => ({
                                animation: t,
                                options: {
                                    type: o
                                }
                            })))
                        }
                        if (d.size) {
                            let e = {};
                            if ("boolean" != typeof l.initial) {
                                let i = o(t, Array.isArray(l.initial) ? l.initial[0] : l.initial);
                                i && i.transition && (e.transition = i.transition)
                            }
                            d.forEach(i => {
                                let n = t.getBaseTarget(i)
                                  , r = t.getValue(i);
                                r && (r.liveStyle = !0),
                                e[i] = null != n ? n : null
                            }
                            ),
                            h.push({
                                animation: e
                            })
                        }
                        let f = !!h.length;
                        return n && (!1 === l.initial || l.initial === l.animate) && !t.manuallyAnimateOnMount && (f = !1),
                        n = !1,
                        f ? e(h) : Promise.resolve()
                    }
                    return {
                        animateChanges: a,
                        setActive: function(e, n) {
                            var r;
                            if (i[e].isActive === n)
                                return Promise.resolve();
                            null === (r = t.variantChildren) || void 0 === r || r.forEach(t => {
                                var i;
                                return null === (i = t.animationState) || void 0 === i ? void 0 : i.setActive(e, n)
                            }
                            ),
                            i[e].isActive = n;
                            let s = a(e);
                            for (let t in i)
                                i[t].protectedKeys = {};
                            return s
                        },
                        setAnimateFunction: function(i) {
                            e = i(t)
                        },
                        getState: () => i,
                        reset: () => {
                            i = iP(),
                            n = !0
                        }
                    }
                }(t))
            }
            updateAnimationControlsSubscription() {
                let {animate: t} = this.node.getProps();
                r(t) && (this.unmountControls = t.subscribe(this.node))
            }
            mount() {
                this.updateAnimationControlsSubscription()
            }
            update() {
                let {animate: t} = this.node.getProps()
                  , {animate: e} = this.node.prevProps || {};
                t !== e && this.updateAnimationControlsSubscription()
            }
            unmount() {
                var t;
                this.node.animationState.reset(),
                null === (t = this.unmountControls) || void 0 === t || t.call(this)
            }
        }
        let iA = 0;
        class iE extends iT {
            constructor() {
                super(...arguments),
                this.id = iA++
            }
            update() {
                if (!this.node.presenceContext)
                    return;
                let {isPresent: t, onExitComplete: e} = this.node.presenceContext
                  , {isPresent: i} = this.node.prevPresenceContext || {};
                if (!this.node.animationState || t === i)
                    return;
                let n = this.node.animationState.setActive("exit", !t);
                e && !t && n.then( () => {
                    e(this.id)
                }
                )
            }
            mount() {
                let {register: t, onExitComplete: e} = this.node.presenceContext || {};
                e && e(this.id),
                t && (this.unmount = t(this.id))
            }
            unmount() {}
        }
        function iM(t, e, i, n={
            passive: !0
        }) {
            return t.addEventListener(e, i, n),
            () => t.removeEventListener(e, i)
        }
        function ik(t) {
            return {
                point: {
                    x: t.pageX,
                    y: t.pageY
                }
            }
        }
        let iC = t => e => E(e) && t(e, ik(e));
        function iR(t, e, i, n) {
            return iM(t, e, iC(i), n)
        }
        let iV = (t, e) => Math.abs(t - e);
        class iD {
            constructor(t, e, {transformPagePoint: i, contextWindow: n, dragSnapToOrigin: r=!1}={}) {
                if (this.startEvent = null,
                this.lastMoveEvent = null,
                this.lastMoveEventInfo = null,
                this.handlers = {},
                this.contextWindow = window,
                this.updatePoint = () => {
                    if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                        return;
                    let t = iF(this.lastMoveEventInfo, this.history)
                      , e = null !== this.startEvent
                      , i = function(t, e) {
                        return Math.sqrt(iV(t.x, e.x) ** 2 + iV(t.y, e.y) ** 2)
                    }(t.offset, {
                        x: 0,
                        y: 0
                    }) >= 3;
                    if (!e && !i)
                        return;
                    let {point: n} = t
                      , {timestamp: r} = q;
                    this.history.push({
                        ...n,
                        timestamp: r
                    });
                    let {onStart: s, onMove: o} = this.handlers;
                    e || (s && s(this.lastMoveEvent, t),
                    this.startEvent = this.lastMoveEvent),
                    o && o(this.lastMoveEvent, t)
                }
                ,
                this.handlePointerMove = (t, e) => {
                    this.lastMoveEvent = t,
                    this.lastMoveEventInfo = ij(e, this.transformPagePoint),
                    H.update(this.updatePoint, !0)
                }
                ,
                this.handlePointerUp = (t, e) => {
                    this.end();
                    let {onEnd: i, onSessionEnd: n, resumeAnimation: r} = this.handlers;
                    if (this.dragSnapToOrigin && r && r(),
                    !(this.lastMoveEvent && this.lastMoveEventInfo))
                        return;
                    let s = iF("pointercancel" === t.type ? this.lastMoveEventInfo : ij(e, this.transformPagePoint), this.history);
                    this.startEvent && i && i(t, s),
                    n && n(t, s)
                }
                ,
                !E(t))
                    return;
                this.dragSnapToOrigin = r,
                this.handlers = e,
                this.transformPagePoint = i,
                this.contextWindow = n || window;
                let s = ij(ik(t), this.transformPagePoint)
                  , {point: o} = s
                  , {timestamp: a} = q;
                this.history = [{
                    ...o,
                    timestamp: a
                }];
                let {onSessionStart: l} = e;
                l && l(t, iF(s, this.history)),
                this.removeListeners = eO(iR(this.contextWindow, "pointermove", this.handlePointerMove), iR(this.contextWindow, "pointerup", this.handlePointerUp), iR(this.contextWindow, "pointercancel", this.handlePointerUp))
            }
            updateHandlers(t) {
                this.handlers = t
            }
            end() {
                this.removeListeners && this.removeListeners(),
                Y(this.updatePoint)
            }
        }
        function ij(t, e) {
            return e ? {
                point: e(t.point)
            } : t
        }
        function iL(t, e) {
            return {
                x: t.x - e.x,
                y: t.y - e.y
            }
        }
        function iF({point: t}, e) {
            return {
                point: t,
                delta: iL(t, iO(e)),
                offset: iL(t, e[0]),
                velocity: function(t, e) {
                    if (t.length < 2)
                        return {
                            x: 0,
                            y: 0
                        };
                    let i = t.length - 1
                      , n = null
                      , r = iO(t);
                    for (; i >= 0 && (n = t[i],
                    !(r.timestamp - n.timestamp > j(.1))); )
                        i--;
                    if (!n)
                        return {
                            x: 0,
                            y: 0
                        };
                    let s = L(r.timestamp - n.timestamp);
                    if (0 === s)
                        return {
                            x: 0,
                            y: 0
                        };
                    let o = {
                        x: (r.x - n.x) / s,
                        y: (r.y - n.y) / s
                    };
                    return o.x === 1 / 0 && (o.x = 0),
                    o.y === 1 / 0 && (o.y = 0),
                    o
                }(e, 0)
            }
        }
        function iO(t) {
            return t[t.length - 1]
        }
        function iB(t) {
            return t && "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current")
        }
        function iI(t) {
            return t.max - t.min
        }
        function iN(t, e, i, n=.5) {
            t.origin = n,
            t.originPoint = eM(e.min, e.max, t.origin),
            t.scale = iI(i) / iI(e),
            t.translate = eM(i.min, i.max, t.origin) - t.originPoint,
            (t.scale >= .9999 && t.scale <= 1.0001 || isNaN(t.scale)) && (t.scale = 1),
            (t.translate >= -.01 && t.translate <= .01 || isNaN(t.translate)) && (t.translate = 0)
        }
        function iU(t, e, i, n) {
            iN(t.x, e.x, i.x, n ? n.originX : void 0),
            iN(t.y, e.y, i.y, n ? n.originY : void 0)
        }
        function iz(t, e, i) {
            t.min = i.min + e.min,
            t.max = t.min + iI(e)
        }
        function i$(t, e, i) {
            t.min = e.min - i.min,
            t.max = t.min + iI(e)
        }
        function iW(t, e, i) {
            i$(t.x, e.x, i.x),
            i$(t.y, e.y, i.y)
        }
        function i_(t, e, i) {
            return {
                min: void 0 !== e ? t.min + e : void 0,
                max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0
            }
        }
        function iK(t, e) {
            let i = e.min - t.min
              , n = e.max - t.max;
            return e.max - e.min < t.max - t.min && ([i,n] = [n, i]),
            {
                min: i,
                max: n
            }
        }
        function iH(t, e, i) {
            return {
                min: iY(t, e),
                max: iY(t, i)
            }
        }
        function iY(t, e) {
            return "number" == typeof t ? t : t[e] || 0
        }
        let iq = () => ({
            translate: 0,
            scale: 1,
            origin: 0,
            originPoint: 0
        })
          , iX = () => ({
            x: iq(),
            y: iq()
        })
          , iG = () => ({
            min: 0,
            max: 0
        })
          , iZ = () => ({
            x: iG(),
            y: iG()
        });
        function iJ(t) {
            return [t("x"), t("y")]
        }
        function iQ({top: t, left: e, right: i, bottom: n}) {
            return {
                x: {
                    min: e,
                    max: i
                },
                y: {
                    min: t,
                    max: n
                }
            }
        }
        function i0(t) {
            return void 0 === t || 1 === t
        }
        function i1({scale: t, scaleX: e, scaleY: i}) {
            return !i0(t) || !i0(e) || !i0(i)
        }
        function i2(t) {
            return i1(t) || i3(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY
        }
        function i3(t) {
            var e, i;
            return (e = t.x) && "0%" !== e || (i = t.y) && "0%" !== i
        }
        function i5(t, e, i, n, r) {
            return void 0 !== r && (t = n + r * (t - n)),
            n + i * (t - n) + e
        }
        function i4(t, e=0, i=1, n, r) {
            t.min = i5(t.min, e, i, n, r),
            t.max = i5(t.max, e, i, n, r)
        }
        function i9(t, {x: e, y: i}) {
            i4(t.x, e.translate, e.scale, e.originPoint),
            i4(t.y, i.translate, i.scale, i.originPoint)
        }
        function i8(t, e) {
            t.min = t.min + e,
            t.max = t.max + e
        }
        function i6(t, e, i, n, r=.5) {
            let s = eM(t.min, t.max, r);
            i4(t, e, i, s, n)
        }
        function i7(t, e) {
            i6(t.x, e.x, e.scaleX, e.scale, e.originX),
            i6(t.y, e.y, e.scaleY, e.scale, e.originY)
        }
        function nt(t, e) {
            return iQ(function(t, e) {
                if (!e)
                    return t;
                let i = e({
                    x: t.left,
                    y: t.top
                })
                  , n = e({
                    x: t.right,
                    y: t.bottom
                });
                return {
                    top: i.y,
                    left: i.x,
                    bottom: n.y,
                    right: n.x
                }
            }(t.getBoundingClientRect(), e))
        }
        let ne = ({current: t}) => t ? t.ownerDocument.defaultView : null
          , ni = new WeakMap;
        class nn {
            constructor(t) {
                this.openDragLock = null,
                this.isDragging = !1,
                this.currentDirection = null,
                this.originPoint = {
                    x: 0,
                    y: 0
                },
                this.constraints = !1,
                this.hasMutatedConstraints = !1,
                this.elastic = iZ(),
                this.visualElement = t
            }
            start(t, {snapToCursor: e=!1}={}) {
                let {presenceContext: i} = this.visualElement;
                if (i && !1 === i.isPresent)
                    return;
                let {dragSnapToOrigin: n} = this.getProps();
                this.panSession = new iD(t,{
                    onSessionStart: t => {
                        let {dragSnapToOrigin: i} = this.getProps();
                        i ? this.pauseAnimation() : this.stopAnimation(),
                        e && this.snapToCursor(ik(t).point)
                    }
                    ,
                    onStart: (t, e) => {
                        let {drag: i, dragPropagation: n, onDragStart: r} = this.getProps();
                        if (i && !n && (this.openDragLock && this.openDragLock(),
                        this.openDragLock = "x" === i || "y" === i ? P[i] ? null : (P[i] = !0,
                        () => {
                            P[i] = !1
                        }
                        ) : P.x || P.y ? null : (P.x = P.y = !0,
                        () => {
                            P.x = P.y = !1
                        }
                        ),
                        !this.openDragLock))
                            return;
                        this.isDragging = !0,
                        this.currentDirection = null,
                        this.resolveConstraints(),
                        this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
                        this.visualElement.projection.target = void 0),
                        iJ(t => {
                            let e = this.getAxisMotionValue(t).get() || 0;
                            if (tB.test(e)) {
                                let {projection: i} = this.visualElement;
                                if (i && i.layout) {
                                    let n = i.layout.layoutBox[t];
                                    n && (e = iI(n) * (parseFloat(e) / 100))
                                }
                            }
                            this.originPoint[t] = e
                        }
                        ),
                        r && H.postRender( () => r(t, e)),
                        to(this.visualElement, "transform");
                        let {animationState: s} = this.visualElement;
                        s && s.setActive("whileDrag", !0)
                    }
                    ,
                    onMove: (t, e) => {
                        let {dragPropagation: i, dragDirectionLock: n, onDirectionLock: r, onDrag: s} = this.getProps();
                        if (!i && !this.openDragLock)
                            return;
                        let {offset: o} = e;
                        if (n && null === this.currentDirection) {
                            this.currentDirection = function(t, e=10) {
                                let i = null;
                                return Math.abs(t.y) > e ? i = "y" : Math.abs(t.x) > e && (i = "x"),
                                i
                            }(o),
                            null !== this.currentDirection && r && r(this.currentDirection);
                            return
                        }
                        this.updateAxis("x", e.point, o),
                        this.updateAxis("y", e.point, o),
                        this.visualElement.render(),
                        s && s(t, e)
                    }
                    ,
                    onSessionEnd: (t, e) => this.stop(t, e),
                    resumeAnimation: () => iJ(t => {
                        var e;
                        return "paused" === this.getAnimationState(t) && (null === (e = this.getAxisMotionValue(t).animation) || void 0 === e ? void 0 : e.play())
                    }
                    )
                },{
                    transformPagePoint: this.visualElement.getTransformPagePoint(),
                    dragSnapToOrigin: n,
                    contextWindow: ne(this.visualElement)
                })
            }
            stop(t, e) {
                let i = this.isDragging;
                if (this.cancel(),
                !i)
                    return;
                let {velocity: n} = e;
                this.startAnimation(n);
                let {onDragEnd: r} = this.getProps();
                r && H.postRender( () => r(t, e))
            }
            cancel() {
                this.isDragging = !1;
                let {projection: t, animationState: e} = this.visualElement;
                t && (t.isAnimationBlocked = !1),
                this.panSession && this.panSession.end(),
                this.panSession = void 0;
                let {dragPropagation: i} = this.getProps();
                !i && this.openDragLock && (this.openDragLock(),
                this.openDragLock = null),
                e && e.setActive("whileDrag", !1)
            }
            updateAxis(t, e, i) {
                let {drag: n} = this.getProps();
                if (!i || !nr(t, n, this.currentDirection))
                    return;
                let r = this.getAxisMotionValue(t)
                  , s = this.originPoint[t] + i[t];
                this.constraints && this.constraints[t] && (s = function(t, {min: e, max: i}, n) {
                    return void 0 !== e && t < e ? t = n ? eM(e, t, n.min) : Math.max(t, e) : void 0 !== i && t > i && (t = n ? eM(i, t, n.max) : Math.min(t, i)),
                    t
                }(s, this.constraints[t], this.elastic[t])),
                r.set(s)
            }
            resolveConstraints() {
                var t;
                let {dragConstraints: e, dragElastic: i} = this.getProps()
                  , n = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : null === (t = this.visualElement.projection) || void 0 === t ? void 0 : t.layout
                  , r = this.constraints;
                e && iB(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : e && n ? this.constraints = function(t, {top: e, left: i, bottom: n, right: r}) {
                    return {
                        x: i_(t.x, i, r),
                        y: i_(t.y, e, n)
                    }
                }(n.layoutBox, e) : this.constraints = !1,
                this.elastic = function(t=.35) {
                    return !1 === t ? t = 0 : !0 === t && (t = .35),
                    {
                        x: iH(t, "left", "right"),
                        y: iH(t, "top", "bottom")
                    }
                }(i),
                r !== this.constraints && n && this.constraints && !this.hasMutatedConstraints && iJ(t => {
                    !1 !== this.constraints && this.getAxisMotionValue(t) && (this.constraints[t] = function(t, e) {
                        let i = {};
                        return void 0 !== e.min && (i.min = e.min - t.min),
                        void 0 !== e.max && (i.max = e.max - t.min),
                        i
                    }(n.layoutBox[t], this.constraints[t]))
                }
                )
            }
            resolveRefConstraints() {
                var t;
                let {dragConstraints: e, onMeasureDragConstraints: i} = this.getProps();
                if (!e || !iB(e))
                    return !1;
                let n = e.current;
                F(null !== n, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
                let {projection: r} = this.visualElement;
                if (!r || !r.layout)
                    return !1;
                let s = function(t, e, i) {
                    let n = nt(t, i)
                      , {scroll: r} = e;
                    return r && (i8(n.x, r.offset.x),
                    i8(n.y, r.offset.y)),
                    n
                }(n, r.root, this.visualElement.getTransformPagePoint())
                  , o = {
                    x: iK((t = r.layout.layoutBox).x, s.x),
                    y: iK(t.y, s.y)
                };
                if (i) {
                    let t = i(function({x: t, y: e}) {
                        return {
                            top: e.min,
                            right: t.max,
                            bottom: e.max,
                            left: t.min
                        }
                    }(o));
                    this.hasMutatedConstraints = !!t,
                    t && (o = iQ(t))
                }
                return o
            }
            startAnimation(t) {
                let {drag: e, dragMomentum: i, dragElastic: n, dragTransition: r, dragSnapToOrigin: s, onDragTransitionEnd: o} = this.getProps()
                  , a = this.constraints || {};
                return Promise.all(iJ(o => {
                    if (!nr(o, e, this.currentDirection))
                        return;
                    let l = a && a[o] || {};
                    s && (l = {
                        min: 0,
                        max: 0
                    });
                    let u = {
                        type: "inertia",
                        velocity: i ? t[o] : 0,
                        bounceStiffness: n ? 200 : 1e6,
                        bounceDamping: n ? 40 : 1e7,
                        timeConstant: 750,
                        restDelta: 1,
                        restSpeed: 10,
                        ...r,
                        ...l
                    };
                    return this.startAxisValueAnimation(o, u)
                }
                )).then(o)
            }
            startAxisValueAnimation(t, e) {
                let i = this.getAxisMotionValue(t);
                return to(this.visualElement, t),
                i.start(iu(t, i, 0, e, this.visualElement, !1))
            }
            stopAnimation() {
                iJ(t => this.getAxisMotionValue(t).stop())
            }
            pauseAnimation() {
                iJ(t => {
                    var e;
                    return null === (e = this.getAxisMotionValue(t).animation) || void 0 === e ? void 0 : e.pause()
                }
                )
            }
            getAnimationState(t) {
                var e;
                return null === (e = this.getAxisMotionValue(t).animation) || void 0 === e ? void 0 : e.state
            }
            getAxisMotionValue(t) {
                let e = `_drag${t.toUpperCase()}`
                  , i = this.visualElement.getProps();
                return i[e] || this.visualElement.getValue(t, (i.initial ? i.initial[t] : void 0) || 0)
            }
            snapToCursor(t) {
                iJ(e => {
                    let {drag: i} = this.getProps();
                    if (!nr(e, i, this.currentDirection))
                        return;
                    let {projection: n} = this.visualElement
                      , r = this.getAxisMotionValue(e);
                    if (n && n.layout) {
                        let {min: i, max: s} = n.layout.layoutBox[e];
                        r.set(t[e] - eM(i, s, .5))
                    }
                }
                )
            }
            scalePositionWithinConstraints() {
                if (!this.visualElement.current)
                    return;
                let {drag: t, dragConstraints: e} = this.getProps()
                  , {projection: i} = this.visualElement;
                if (!iB(e) || !i || !this.constraints)
                    return;
                this.stopAnimation();
                let n = {
                    x: 0,
                    y: 0
                };
                iJ(t => {
                    let e = this.getAxisMotionValue(t);
                    if (e && !1 !== this.constraints) {
                        let i = e.get();
                        n[t] = function(t, e) {
                            let i = .5
                              , n = iI(t)
                              , r = iI(e);
                            return r > n ? i = y(e.min, e.max - n, t.min) : n > r && (i = y(t.min, t.max - r, e.min)),
                            tP(0, 1, i)
                        }({
                            min: i,
                            max: i
                        }, this.constraints[t])
                    }
                }
                );
                let {transformTemplate: r} = this.visualElement.getProps();
                this.visualElement.current.style.transform = r ? r({}, "") : "none",
                i.root && i.root.updateScroll(),
                i.updateLayout(),
                this.resolveConstraints(),
                iJ(e => {
                    if (!nr(e, t, null))
                        return;
                    let i = this.getAxisMotionValue(e)
                      , {min: r, max: s} = this.constraints[e];
                    i.set(eM(r, s, n[e]))
                }
                )
            }
            addListeners() {
                if (!this.visualElement.current)
                    return;
                ni.set(this.visualElement, this);
                let t = iR(this.visualElement.current, "pointerdown", t => {
                    let {drag: e, dragListener: i=!0} = this.getProps();
                    e && i && this.start(t)
                }
                )
                  , e = () => {
                    let {dragConstraints: t} = this.getProps();
                    iB(t) && t.current && (this.constraints = this.resolveRefConstraints())
                }
                  , {projection: i} = this.visualElement
                  , n = i.addEventListener("measure", e);
                i && !i.layout && (i.root && i.root.updateScroll(),
                i.updateLayout()),
                H.read(e);
                let r = iM(window, "resize", () => this.scalePositionWithinConstraints())
                  , s = i.addEventListener("didUpdate", ({delta: t, hasLayoutChanged: e}) => {
                    this.isDragging && e && (iJ(e => {
                        let i = this.getAxisMotionValue(e);
                        i && (this.originPoint[e] += t[e].translate,
                        i.set(i.get() + t[e].translate))
                    }
                    ),
                    this.visualElement.render())
                }
                );
                return () => {
                    r(),
                    t(),
                    n(),
                    s && s()
                }
            }
            getProps() {
                let t = this.visualElement.getProps()
                  , {drag: e=!1, dragDirectionLock: i=!1, dragPropagation: n=!1, dragConstraints: r=!1, dragElastic: s=.35, dragMomentum: o=!0} = t;
                return {
                    ...t,
                    drag: e,
                    dragDirectionLock: i,
                    dragPropagation: n,
                    dragConstraints: r,
                    dragElastic: s,
                    dragMomentum: o
                }
            }
        }
        function nr(t, e, i) {
            return (!0 === e || e === t) && (null === i || i === t)
        }
        class ns extends iT {
            constructor(t) {
                super(t),
                this.removeGroupControls = F,
                this.removeListeners = F,
                this.controls = new nn(t)
            }
            mount() {
                let {dragControls: t} = this.node.getProps();
                t && (this.removeGroupControls = t.subscribe(this.controls)),
                this.removeListeners = this.controls.addListeners() || F
            }
            unmount() {
                this.removeGroupControls(),
                this.removeListeners()
            }
        }
        let no = t => (e, i) => {
            t && H.postRender( () => t(e, i))
        }
        ;
        class na extends iT {
            constructor() {
                super(...arguments),
                this.removePointerDownListener = F
            }
            onPointerDown(t) {
                this.session = new iD(t,this.createPanHandlers(),{
                    transformPagePoint: this.node.getTransformPagePoint(),
                    contextWindow: ne(this.node)
                })
            }
            createPanHandlers() {
                let {onPanSessionStart: t, onPanStart: e, onPan: i, onPanEnd: n} = this.node.getProps();
                return {
                    onSessionStart: no(t),
                    onStart: no(e),
                    onMove: i,
                    onEnd: (t, e) => {
                        delete this.session,
                        n && H.postRender( () => n(t, e))
                    }
                }
            }
            mount() {
                this.removePointerDownListener = iR(this.node.current, "pointerdown", t => this.onPointerDown(t))
            }
            update() {
                this.session && this.session.updateHandlers(this.createPanHandlers())
            }
            unmount() {
                this.removePointerDownListener(),
                this.session && this.session.end()
            }
        }
        var nl, nu, nh = i(4884), nd = i(4843);
        let nc = (0,
        nd.createContext)(null)
          , np = (0,
        nd.createContext)({})
          , nm = (0,
        nd.createContext)({})
          , nf = {
            hasAnimatedSinceResize: !0,
            hasEverUpdated: !1
        };
        function nv(t, e) {
            return e.max === e.min ? 0 : t / (e.max - e.min) * 100
        }
        let ng = {
            correct: (t, e) => {
                if (!e.target)
                    return t;
                if ("string" == typeof t) {
                    if (!tI.test(t))
                        return t;
                    t = parseFloat(t)
                }
                let i = nv(t, e.target.x)
                  , n = nv(t, e.target.y);
                return `${i}% ${n}%`
            }
        }
          , ny = {}
          , {schedule: nx, cancel: nb} = K(queueMicrotask, !1);
        class nw extends nd.Component {
            componentDidMount() {
                let {visualElement: t, layoutGroup: e, switchLayoutGroup: i, layoutId: n} = this.props
                  , {projection: r} = t;
                !function(t) {
                    for (let e in t)
                        ny[e] = t[e],
                        ep(e) && (ny[e].isCSSVariable = !0)
                }(nT),
                r && (e.group && e.group.add(r),
                i && i.register && n && i.register(r),
                r.root.didUpdate(),
                r.addEventListener("animationComplete", () => {
                    this.safeToRemove()
                }
                ),
                r.setOptions({
                    ...r.options,
                    onExitComplete: () => this.safeToRemove()
                })),
                nf.hasEverUpdated = !0
            }
            getSnapshotBeforeUpdate(t) {
                let {layoutDependency: e, visualElement: i, drag: n, isPresent: r} = this.props
                  , s = i.projection;
                return s && (s.isPresent = r,
                n || t.layoutDependency !== e || void 0 === e ? s.willUpdate() : this.safeToRemove(),
                t.isPresent === r || (r ? s.promote() : s.relegate() || H.postRender( () => {
                    let t = s.getStack();
                    t && t.members.length || this.safeToRemove()
                }
                ))),
                null
            }
            componentDidUpdate() {
                let {projection: t} = this.props.visualElement;
                t && (t.root.didUpdate(),
                nx.postRender( () => {
                    !t.currentAnimation && t.isLead() && this.safeToRemove()
                }
                ))
            }
            componentWillUnmount() {
                let {visualElement: t, layoutGroup: e, switchLayoutGroup: i} = this.props
                  , {projection: n} = t;
                n && (n.scheduleCheckAfterUnmount(),
                e && e.group && e.group.remove(n),
                i && i.deregister && i.deregister(n))
            }
            safeToRemove() {
                let {safeToRemove: t} = this.props;
                t && t()
            }
            render() {
                return null
            }
        }
        function nP(t) {
            let[e,i] = function(t=!0) {
                let e = (0,
                nd.useContext)(nc);
                if (null === e)
                    return [!0, null];
                let {isPresent: i, onExitComplete: n, register: r} = e
                  , s = (0,
                nd.useId)();
                (0,
                nd.useEffect)( () => {
                    t && r(s)
                }
                , [t]);
                let o = (0,
                nd.useCallback)( () => t && n && n(s), [s, n, t]);
                return !i && n ? [!1, o] : [!0]
            }()
              , n = (0,
            nd.useContext)(np);
            return (0,
            nh.jsx)(nw, {
                ...t,
                layoutGroup: n,
                switchLayoutGroup: (0,
                nd.useContext)(nm),
                isPresent: e,
                safeToRemove: i
            })
        }
        let nT = {
            borderRadius: {
                ...ng,
                applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
            },
            borderTopLeftRadius: ng,
            borderTopRightRadius: ng,
            borderBottomLeftRadius: ng,
            borderBottomRightRadius: ng,
            boxShadow: {
                correct: (t, {treeScale: e, projectionDelta: i}) => {
                    let n = tJ.parse(t);
                    if (n.length > 5)
                        return t;
                    let r = tJ.createTransformer(t)
                      , s = "number" != typeof n[0] ? 1 : 0
                      , o = i.x.scale * e.x
                      , a = i.y.scale * e.y;
                    n[0 + s] /= o,
                    n[1 + s] /= a;
                    let l = eM(o, a, .5);
                    return "number" == typeof n[2 + s] && (n[2 + s] /= l),
                    "number" == typeof n[3 + s] && (n[3 + s] /= l),
                    r(n)
                }
            }
        }
          , nS = (t, e) => t.depth - e.depth;
        class nA {
            constructor() {
                this.children = [],
                this.isDirty = !1
            }
            add(t) {
                J(this.children, t),
                this.isDirty = !0
            }
            remove(t) {
                Q(this.children, t),
                this.isDirty = !0
            }
            forEach(t) {
                this.isDirty && this.children.sort(nS),
                this.isDirty = !1,
                this.children.forEach(t)
            }
        }
        function nE(t) {
            let e = ts(t) ? t.get() : t;
            return U(e) ? e.toValue() : e
        }
        let nM = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
          , nk = nM.length
          , nC = t => "string" == typeof t ? parseFloat(t) : t
          , nR = t => "number" == typeof t || tI.test(t);
        function nV(t, e) {
            return void 0 !== t[e] ? t[e] : t.borderRadius
        }
        let nD = nL(0, .5, tx)
          , nj = nL(.5, .95, F);
        function nL(t, e, i) {
            return n => n < t ? 0 : n > e ? 1 : i(y(t, e, n))
        }
        function nF(t, e) {
            t.min = e.min,
            t.max = e.max
        }
        function nO(t, e) {
            nF(t.x, e.x),
            nF(t.y, e.y)
        }
        function nB(t, e) {
            t.translate = e.translate,
            t.scale = e.scale,
            t.originPoint = e.originPoint,
            t.origin = e.origin
        }
        function nI(t, e, i, n, r) {
            return t -= e,
            t = n + 1 / i * (t - n),
            void 0 !== r && (t = n + 1 / r * (t - n)),
            t
        }
        function nN(t, e, [i,n,r], s, o) {
            !function(t, e=0, i=1, n=.5, r, s=t, o=t) {
                if (tB.test(e) && (e = parseFloat(e),
                e = eM(o.min, o.max, e / 100) - o.min),
                "number" != typeof e)
                    return;
                let a = eM(s.min, s.max, n);
                t === s && (a -= e),
                t.min = nI(t.min, e, i, a, r),
                t.max = nI(t.max, e, i, a, r)
            }(t, e[i], e[n], e[r], e.scale, s, o)
        }
        let nU = ["x", "scaleX", "originX"]
          , nz = ["y", "scaleY", "originY"];
        function n$(t, e, i, n) {
            nN(t.x, e, nU, i ? i.x : void 0, n ? n.x : void 0),
            nN(t.y, e, nz, i ? i.y : void 0, n ? n.y : void 0)
        }
        function nW(t) {
            return 0 === t.translate && 1 === t.scale
        }
        function n_(t) {
            return nW(t.x) && nW(t.y)
        }
        function nK(t, e) {
            return t.min === e.min && t.max === e.max
        }
        function nH(t, e) {
            return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max)
        }
        function nY(t, e) {
            return nH(t.x, e.x) && nH(t.y, e.y)
        }
        function nq(t) {
            return iI(t.x) / iI(t.y)
        }
        function nX(t, e) {
            return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint
        }
        class nG {
            constructor() {
                this.members = []
            }
            add(t) {
                J(this.members, t),
                t.scheduleRender()
            }
            remove(t) {
                if (Q(this.members, t),
                t === this.prevLead && (this.prevLead = void 0),
                t === this.lead) {
                    let t = this.members[this.members.length - 1];
                    t && this.promote(t)
                }
            }
            relegate(t) {
                let e;
                let i = this.members.findIndex(e => t === e);
                if (0 === i)
                    return !1;
                for (let t = i; t >= 0; t--) {
                    let i = this.members[t];
                    if (!1 !== i.isPresent) {
                        e = i;
                        break
                    }
                }
                return !!e && (this.promote(e),
                !0)
            }
            promote(t, e) {
                let i = this.lead;
                if (t !== i && (this.prevLead = i,
                this.lead = t,
                t.show(),
                i)) {
                    i.instance && i.scheduleRender(),
                    t.scheduleRender(),
                    t.resumeFrom = i,
                    e && (t.resumeFrom.preserveOpacity = !0),
                    i.snapshot && (t.snapshot = i.snapshot,
                    t.snapshot.latestValues = i.animationValues || i.latestValues),
                    t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
                    let {crossfade: n} = t.options;
                    !1 === n && i.hide()
                }
            }
            exitAnimationComplete() {
                this.members.forEach(t => {
                    let {options: e, resumingFrom: i} = t;
                    e.onExitComplete && e.onExitComplete(),
                    i && i.options.onExitComplete && i.options.onExitComplete()
                }
                )
            }
            scheduleRender() {
                this.members.forEach(t => {
                    t.instance && t.scheduleRender(!1)
                }
                )
            }
            removeLeadSnapshot() {
                this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
            }
        }
        let nZ = {
            nodes: 0,
            calculatedTargetDeltas: 0,
            calculatedProjections: 0
        }
          , nJ = ["", "X", "Y", "Z"]
          , nQ = {
            visibility: "hidden"
        }
          , n0 = 0;
        function n1(t, e, i, n) {
            let {latestValues: r} = e;
            r[t] && (i[t] = r[t],
            e.setStaticValue(t, 0),
            n && (n[t] = 0))
        }
        function n2({attachResizeListener: t, defaultParent: e, measureScroll: i, checkIsScrollRoot: n, resetTransform: r}) {
            return class {
                constructor(t={}, i=null == e ? void 0 : e()) {
                    this.id = n0++,
                    this.animationId = 0,
                    this.children = new Set,
                    this.options = {},
                    this.isTreeAnimating = !1,
                    this.isAnimationBlocked = !1,
                    this.isLayoutDirty = !1,
                    this.isProjectionDirty = !1,
                    this.isSharedProjectionDirty = !1,
                    this.isTransformDirty = !1,
                    this.updateManuallyBlocked = !1,
                    this.updateBlockedByResize = !1,
                    this.isUpdating = !1,
                    this.isSVG = !1,
                    this.needsReset = !1,
                    this.shouldResetTransform = !1,
                    this.hasCheckedOptimisedAppear = !1,
                    this.treeScale = {
                        x: 1,
                        y: 1
                    },
                    this.eventHandlers = new Map,
                    this.hasTreeAnimated = !1,
                    this.updateScheduled = !1,
                    this.scheduleUpdate = () => this.update(),
                    this.projectionUpdateScheduled = !1,
                    this.checkUpdateFailed = () => {
                        this.isUpdating && (this.isUpdating = !1,
                        this.clearAllSnapshots())
                    }
                    ,
                    this.updateProjection = () => {
                        this.projectionUpdateScheduled = !1,
                        _.value && (nZ.nodes = nZ.calculatedTargetDeltas = nZ.calculatedProjections = 0),
                        this.nodes.forEach(n4),
                        this.nodes.forEach(ri),
                        this.nodes.forEach(rn),
                        this.nodes.forEach(n9),
                        _.addProjectionMetrics && _.addProjectionMetrics(nZ)
                    }
                    ,
                    this.resolvedRelativeTargetAt = 0,
                    this.hasProjected = !1,
                    this.isVisible = !0,
                    this.animationProgress = 0,
                    this.sharedNodes = new Map,
                    this.latestValues = t,
                    this.root = i ? i.root || i : this,
                    this.path = i ? [...i.path, i] : [],
                    this.parent = i,
                    this.depth = i ? i.depth + 1 : 0;
                    for (let t = 0; t < this.path.length; t++)
                        this.path[t].shouldResetTransform = !0;
                    this.root === this && (this.nodes = new nA)
                }
                addEventListener(t, e) {
                    return this.eventHandlers.has(t) || this.eventHandlers.set(t, new tt),
                    this.eventHandlers.get(t).add(e)
                }
                notifyListeners(t, ...e) {
                    let i = this.eventHandlers.get(t);
                    i && i.notify(...e)
                }
                hasListeners(t) {
                    return this.eventHandlers.has(t)
                }
                mount(e, i=this.root.hasTreeAnimated) {
                    if (this.instance)
                        return;
                    this.isSVG = e instanceof SVGElement && "svg" !== e.tagName,
                    this.instance = e;
                    let {layoutId: n, layout: r, visualElement: s} = this.options;
                    if (s && !s.current && s.mount(e),
                    this.root.nodes.add(this),
                    this.parent && this.parent.children.add(this),
                    i && (r || n) && (this.isLayoutDirty = !0),
                    t) {
                        let i;
                        let n = () => this.root.updateBlockedByResize = !1;
                        t(e, () => {
                            this.root.updateBlockedByResize = !0,
                            i && i(),
                            i = function(t, e) {
                                let i = Z.now()
                                  , n = ({timestamp: e}) => {
                                    let r = e - i;
                                    r >= 250 && (Y(n),
                                    t(r - 250))
                                }
                                ;
                                return H.read(n, !0),
                                () => Y(n)
                            }(n, 250),
                            nf.hasAnimatedSinceResize && (nf.hasAnimatedSinceResize = !1,
                            this.nodes.forEach(re))
                        }
                        )
                    }
                    n && this.root.registerSharedNode(n, this),
                    !1 !== this.options.animate && s && (n || r) && this.addEventListener("didUpdate", ({delta: t, hasLayoutChanged: e, hasRelativeLayoutChanged: i, layout: n}) => {
                        if (this.isTreeAnimationBlocked()) {
                            this.target = void 0,
                            this.relativeTarget = void 0;
                            return
                        }
                        let r = this.options.transition || s.getDefaultTransition() || ru
                          , {onLayoutAnimationStart: o, onLayoutAnimationComplete: a} = s.getProps()
                          , l = !this.targetLayout || !nY(this.targetLayout, n)
                          , u = !e && i;
                        if (this.options.layoutRoot || this.resumeFrom || u || e && (l || !this.currentAnimation)) {
                            this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                            this.resumingFrom.resumingFrom = void 0),
                            this.setAnimationOrigin(t, u);
                            let e = {
                                ...d(r, "layout"),
                                onPlay: o,
                                onComplete: a
                            };
                            (s.shouldReduceMotion || this.options.layoutRoot) && (e.delay = 0,
                            e.type = !1),
                            this.startAnimation(e)
                        } else
                            e || re(this),
                            this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                        this.targetLayout = n
                    }
                    )
                }
                unmount() {
                    this.options.layoutId && this.willUpdate(),
                    this.root.nodes.remove(this);
                    let t = this.getStack();
                    t && t.remove(this),
                    this.parent && this.parent.children.delete(this),
                    this.instance = void 0,
                    Y(this.updateProjection)
                }
                blockUpdate() {
                    this.updateManuallyBlocked = !0
                }
                unblockUpdate() {
                    this.updateManuallyBlocked = !1
                }
                isUpdateBlocked() {
                    return this.updateManuallyBlocked || this.updateBlockedByResize
                }
                isTreeAnimationBlocked() {
                    return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
                }
                startUpdate() {
                    !this.isUpdateBlocked() && (this.isUpdating = !0,
                    this.nodes && this.nodes.forEach(rr),
                    this.animationId++)
                }
                getTransformTemplate() {
                    let {visualElement: t} = this.options;
                    return t && t.getProps().transformTemplate
                }
                willUpdate(t=!0) {
                    if (this.root.hasTreeAnimated = !0,
                    this.root.isUpdateBlocked()) {
                        this.options.onExitComplete && this.options.onExitComplete();
                        return
                    }
                    if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && function t(e) {
                        if (e.hasCheckedOptimisedAppear = !0,
                        e.root === e)
                            return;
                        let {visualElement: i} = e.options;
                        if (!i)
                            return;
                        let n = i.props[tl];
                        if (window.MotionHasOptimisedAnimation(n, "transform")) {
                            let {layout: t, layoutId: i} = e.options;
                            window.MotionCancelOptimisedAnimation(n, "transform", H, !(t || i))
                        }
                        let {parent: r} = e;
                        r && !r.hasCheckedOptimisedAppear && t(r)
                    }(this),
                    this.root.isUpdating || this.root.startUpdate(),
                    this.isLayoutDirty)
                        return;
                    this.isLayoutDirty = !0;
                    for (let t = 0; t < this.path.length; t++) {
                        let e = this.path[t];
                        e.shouldResetTransform = !0,
                        e.updateScroll("snapshot"),
                        e.options.layoutRoot && e.willUpdate(!1)
                    }
                    let {layoutId: e, layout: i} = this.options;
                    if (void 0 === e && !i)
                        return;
                    let n = this.getTransformTemplate();
                    this.prevTransformTemplateValue = n ? n(this.latestValues, "") : void 0,
                    this.updateSnapshot(),
                    t && this.notifyListeners("willUpdate")
                }
                update() {
                    if (this.updateScheduled = !1,
                    this.isUpdateBlocked()) {
                        this.unblockUpdate(),
                        this.clearAllSnapshots(),
                        this.nodes.forEach(n6);
                        return
                    }
                    this.isUpdating || this.nodes.forEach(n7),
                    this.isUpdating = !1,
                    this.nodes.forEach(rt),
                    this.nodes.forEach(n3),
                    this.nodes.forEach(n5),
                    this.clearAllSnapshots();
                    let t = Z.now();
                    q.delta = tP(0, 1e3 / 60, t - q.timestamp),
                    q.timestamp = t,
                    q.isProcessing = !0,
                    X.update.process(q),
                    X.preRender.process(q),
                    X.render.process(q),
                    q.isProcessing = !1
                }
                didUpdate() {
                    this.updateScheduled || (this.updateScheduled = !0,
                    nx.read(this.scheduleUpdate))
                }
                clearAllSnapshots() {
                    this.nodes.forEach(n8),
                    this.sharedNodes.forEach(rs)
                }
                scheduleUpdateProjection() {
                    this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
                    H.preRender(this.updateProjection, !1, !0))
                }
                scheduleCheckAfterUnmount() {
                    H.postRender( () => {
                        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
                    }
                    )
                }
                updateSnapshot() {
                    this.snapshot || !this.instance || (this.snapshot = this.measure(),
                    !this.snapshot || iI(this.snapshot.measuredBox.x) || iI(this.snapshot.measuredBox.y) || (this.snapshot = void 0))
                }
                updateLayout() {
                    if (!this.instance || (this.updateScroll(),
                    !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                        return;
                    if (this.resumeFrom && !this.resumeFrom.instance)
                        for (let t = 0; t < this.path.length; t++)
                            this.path[t].updateScroll();
                    let t = this.layout;
                    this.layout = this.measure(!1),
                    this.layoutCorrected = iZ(),
                    this.isLayoutDirty = !1,
                    this.projectionDelta = void 0,
                    this.notifyListeners("measure", this.layout.layoutBox);
                    let {visualElement: e} = this.options;
                    e && e.notify("LayoutMeasure", this.layout.layoutBox, t ? t.layoutBox : void 0)
                }
                updateScroll(t="measure") {
                    let e = !!(this.options.layoutScroll && this.instance);
                    if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === t && (e = !1),
                    e) {
                        let e = n(this.instance);
                        this.scroll = {
                            animationId: this.root.animationId,
                            phase: t,
                            isRoot: e,
                            offset: i(this.instance),
                            wasRoot: this.scroll ? this.scroll.isRoot : e
                        }
                    }
                }
                resetTransform() {
                    if (!r)
                        return;
                    let t = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout
                      , e = this.projectionDelta && !n_(this.projectionDelta)
                      , i = this.getTransformTemplate()
                      , n = i ? i(this.latestValues, "") : void 0
                      , s = n !== this.prevTransformTemplateValue;
                    t && (e || i2(this.latestValues) || s) && (r(this.instance, n),
                    this.shouldResetTransform = !1,
                    this.scheduleRender())
                }
                measure(t=!0) {
                    var e;
                    let i = this.measurePageBox()
                      , n = this.removeElementScroll(i);
                    return t && (n = this.removeTransform(n)),
                    rc((e = n).x),
                    rc(e.y),
                    {
                        animationId: this.root.animationId,
                        measuredBox: i,
                        layoutBox: n,
                        latestValues: {},
                        source: this.id
                    }
                }
                measurePageBox() {
                    var t;
                    let {visualElement: e} = this.options;
                    if (!e)
                        return iZ();
                    let i = e.measureViewportBox();
                    if (!((null === (t = this.scroll) || void 0 === t ? void 0 : t.wasRoot) || this.path.some(rm))) {
                        let {scroll: t} = this.root;
                        t && (i8(i.x, t.offset.x),
                        i8(i.y, t.offset.y))
                    }
                    return i
                }
                removeElementScroll(t) {
                    var e;
                    let i = iZ();
                    if (nO(i, t),
                    null === (e = this.scroll) || void 0 === e ? void 0 : e.wasRoot)
                        return i;
                    for (let e = 0; e < this.path.length; e++) {
                        let n = this.path[e]
                          , {scroll: r, options: s} = n;
                        n !== this.root && r && s.layoutScroll && (r.wasRoot && nO(i, t),
                        i8(i.x, r.offset.x),
                        i8(i.y, r.offset.y))
                    }
                    return i
                }
                applyTransform(t, e=!1) {
                    let i = iZ();
                    nO(i, t);
                    for (let t = 0; t < this.path.length; t++) {
                        let n = this.path[t];
                        !e && n.options.layoutScroll && n.scroll && n !== n.root && i7(i, {
                            x: -n.scroll.offset.x,
                            y: -n.scroll.offset.y
                        }),
                        i2(n.latestValues) && i7(i, n.latestValues)
                    }
                    return i2(this.latestValues) && i7(i, this.latestValues),
                    i
                }
                removeTransform(t) {
                    let e = iZ();
                    nO(e, t);
                    for (let t = 0; t < this.path.length; t++) {
                        let i = this.path[t];
                        if (!i.instance || !i2(i.latestValues))
                            continue;
                        i1(i.latestValues) && i.updateSnapshot();
                        let n = iZ();
                        nO(n, i.measurePageBox()),
                        n$(e, i.latestValues, i.snapshot ? i.snapshot.layoutBox : void 0, n)
                    }
                    return i2(this.latestValues) && n$(e, this.latestValues),
                    e
                }
                setTargetDelta(t) {
                    this.targetDelta = t,
                    this.root.scheduleUpdateProjection(),
                    this.isProjectionDirty = !0
                }
                setOptions(t) {
                    this.options = {
                        ...this.options,
                        ...t,
                        crossfade: void 0 === t.crossfade || t.crossfade
                    }
                }
                clearMeasurements() {
                    this.scroll = void 0,
                    this.layout = void 0,
                    this.snapshot = void 0,
                    this.prevTransformTemplateValue = void 0,
                    this.targetDelta = void 0,
                    this.target = void 0,
                    this.isLayoutDirty = !1
                }
                forceRelativeParentToResolveTarget() {
                    this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== q.timestamp && this.relativeParent.resolveTargetDelta(!0)
                }
                resolveTargetDelta(t=!1) {
                    var e, i, n, r;
                    let s = this.getLead();
                    this.isProjectionDirty || (this.isProjectionDirty = s.isProjectionDirty),
                    this.isTransformDirty || (this.isTransformDirty = s.isTransformDirty),
                    this.isSharedProjectionDirty || (this.isSharedProjectionDirty = s.isSharedProjectionDirty);
                    let o = !!this.resumingFrom || this !== s;
                    if (!(t || o && this.isSharedProjectionDirty || this.isProjectionDirty || (null === (e = this.parent) || void 0 === e ? void 0 : e.isProjectionDirty) || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
                        return;
                    let {layout: a, layoutId: l} = this.options;
                    if (this.layout && (a || l)) {
                        if (this.resolvedRelativeTargetAt = q.timestamp,
                        !this.targetDelta && !this.relativeTarget) {
                            let t = this.getClosestProjectingParent();
                            t && t.layout && 1 !== this.animationProgress ? (this.relativeParent = t,
                            this.forceRelativeParentToResolveTarget(),
                            this.relativeTarget = iZ(),
                            this.relativeTargetOrigin = iZ(),
                            iW(this.relativeTargetOrigin, this.layout.layoutBox, t.layout.layoutBox),
                            nO(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                        }
                        if (this.relativeTarget || this.targetDelta) {
                            if ((this.target || (this.target = iZ(),
                            this.targetWithTransforms = iZ()),
                            this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) ? (this.forceRelativeParentToResolveTarget(),
                            i = this.target,
                            n = this.relativeTarget,
                            r = this.relativeParent.target,
                            iz(i.x, n.x, r.x),
                            iz(i.y, n.y, r.y)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : nO(this.target, this.layout.layoutBox),
                            i9(this.target, this.targetDelta)) : nO(this.target, this.layout.layoutBox),
                            this.attemptToResolveRelativeTarget) {
                                this.attemptToResolveRelativeTarget = !1;
                                let t = this.getClosestProjectingParent();
                                t && !!t.resumingFrom == !!this.resumingFrom && !t.options.layoutScroll && t.target && 1 !== this.animationProgress ? (this.relativeParent = t,
                                this.forceRelativeParentToResolveTarget(),
                                this.relativeTarget = iZ(),
                                this.relativeTargetOrigin = iZ(),
                                iW(this.relativeTargetOrigin, this.target, t.target),
                                nO(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                            }
                            _.value && nZ.calculatedTargetDeltas++
                        }
                    }
                }
                getClosestProjectingParent() {
                    return !this.parent || i1(this.parent.latestValues) || i3(this.parent.latestValues) ? void 0 : this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
                }
                isProjecting() {
                    return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
                }
                calcProjection() {
                    var t;
                    let e = this.getLead()
                      , i = !!this.resumingFrom || this !== e
                      , n = !0;
                    if ((this.isProjectionDirty || (null === (t = this.parent) || void 0 === t ? void 0 : t.isProjectionDirty)) && (n = !1),
                    i && (this.isSharedProjectionDirty || this.isTransformDirty) && (n = !1),
                    this.resolvedRelativeTargetAt === q.timestamp && (n = !1),
                    n)
                        return;
                    let {layout: r, layoutId: s} = this.options;
                    if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
                    this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
                    !this.layout || !(r || s))
                        return;
                    nO(this.layoutCorrected, this.layout.layoutBox);
                    let o = this.treeScale.x
                      , a = this.treeScale.y;
                    !function(t, e, i, n=!1) {
                        let r, s;
                        let o = i.length;
                        if (o) {
                            e.x = e.y = 1;
                            for (let a = 0; a < o; a++) {
                                s = (r = i[a]).projectionDelta;
                                let {visualElement: o} = r.options;
                                (!o || !o.props.style || "contents" !== o.props.style.display) && (n && r.options.layoutScroll && r.scroll && r !== r.root && i7(t, {
                                    x: -r.scroll.offset.x,
                                    y: -r.scroll.offset.y
                                }),
                                s && (e.x *= s.x.scale,
                                e.y *= s.y.scale,
                                i9(t, s)),
                                n && i2(r.latestValues) && i7(t, r.latestValues))
                            }
                            e.x < 1.0000000000001 && e.x > .999999999999 && (e.x = 1),
                            e.y < 1.0000000000001 && e.y > .999999999999 && (e.y = 1)
                        }
                    }(this.layoutCorrected, this.treeScale, this.path, i),
                    e.layout && !e.target && (1 !== this.treeScale.x || 1 !== this.treeScale.y) && (e.target = e.layout.layoutBox,
                    e.targetWithTransforms = iZ());
                    let {target: l} = e;
                    if (!l) {
                        this.prevProjectionDelta && (this.createProjectionDeltas(),
                        this.scheduleRender());
                        return
                    }
                    this.projectionDelta && this.prevProjectionDelta ? (nB(this.prevProjectionDelta.x, this.projectionDelta.x),
                    nB(this.prevProjectionDelta.y, this.projectionDelta.y)) : this.createProjectionDeltas(),
                    iU(this.projectionDelta, this.layoutCorrected, l, this.latestValues),
                    this.treeScale.x === o && this.treeScale.y === a && nX(this.projectionDelta.x, this.prevProjectionDelta.x) && nX(this.projectionDelta.y, this.prevProjectionDelta.y) || (this.hasProjected = !0,
                    this.scheduleRender(),
                    this.notifyListeners("projectionUpdate", l)),
                    _.value && nZ.calculatedProjections++
                }
                hide() {
                    this.isVisible = !1
                }
                show() {
                    this.isVisible = !0
                }
                scheduleRender(t=!0) {
                    var e;
                    if (null === (e = this.options.visualElement) || void 0 === e || e.scheduleRender(),
                    t) {
                        let t = this.getStack();
                        t && t.scheduleRender()
                    }
                    this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
                }
                createProjectionDeltas() {
                    this.prevProjectionDelta = iX(),
                    this.projectionDelta = iX(),
                    this.projectionDeltaWithTransform = iX()
                }
                setAnimationOrigin(t, e=!1) {
                    let i;
                    let n = this.snapshot
                      , r = n ? n.latestValues : {}
                      , s = {
                        ...this.latestValues
                    }
                      , o = iX();
                    this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0),
                    this.attemptToResolveRelativeTarget = !e;
                    let a = iZ()
                      , l = (n ? n.source : void 0) !== (this.layout ? this.layout.source : void 0)
                      , u = this.getStack()
                      , h = !u || u.members.length <= 1
                      , d = !!(l && !h && !0 === this.options.crossfade && !this.path.some(rl));
                    this.animationProgress = 0,
                    this.mixTargetDelta = e => {
                        let n = e / 1e3;
                        if (ro(o.x, t.x, n),
                        ro(o.y, t.y, n),
                        this.setTargetDelta(o),
                        this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
                            var u, c, p, m;
                            iW(a, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                            p = this.relativeTarget,
                            m = this.relativeTargetOrigin,
                            ra(p.x, m.x, a.x, n),
                            ra(p.y, m.y, a.y, n),
                            i && (u = this.relativeTarget,
                            c = i,
                            nK(u.x, c.x) && nK(u.y, c.y)) && (this.isProjectionDirty = !1),
                            i || (i = iZ()),
                            nO(i, this.relativeTarget)
                        }
                        l && (this.animationValues = s,
                        function(t, e, i, n, r, s) {
                            r ? (t.opacity = eM(0, void 0 !== i.opacity ? i.opacity : 1, nD(n)),
                            t.opacityExit = eM(void 0 !== e.opacity ? e.opacity : 1, 0, nj(n))) : s && (t.opacity = eM(void 0 !== e.opacity ? e.opacity : 1, void 0 !== i.opacity ? i.opacity : 1, n));
                            for (let r = 0; r < nk; r++) {
                                let s = `border${nM[r]}Radius`
                                  , o = nV(e, s)
                                  , a = nV(i, s);
                                (void 0 !== o || void 0 !== a) && (o || (o = 0),
                                a || (a = 0),
                                0 === o || 0 === a || nR(o) === nR(a) ? (t[s] = Math.max(eM(nC(o), nC(a), n), 0),
                                (tB.test(a) || tB.test(o)) && (t[s] += "%")) : t[s] = a)
                            }
                            (e.rotate || i.rotate) && (t.rotate = eM(e.rotate || 0, i.rotate || 0, n))
                        }(s, r, this.latestValues, n, d, h)),
                        this.root.scheduleUpdateProjection(),
                        this.scheduleRender(),
                        this.animationProgress = n
                    }
                    ,
                    this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
                }
                startAnimation(t) {
                    this.notifyListeners("animationStart"),
                    this.currentAnimation && this.currentAnimation.stop(),
                    this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(),
                    this.pendingAnimation && (Y(this.pendingAnimation),
                    this.pendingAnimation = void 0),
                    this.pendingAnimation = H.update( () => {
                        nf.hasAnimatedSinceResize = !0,
                        eE.layout++,
                        this.currentAnimation = function(t, e, i) {
                            let n = ts(0) ? 0 : tr(0);
                            return n.start(iu("", n, 1e3, i)),
                            n.animation
                        }(0, 0, {
                            ...t,
                            onUpdate: e => {
                                this.mixTargetDelta(e),
                                t.onUpdate && t.onUpdate(e)
                            }
                            ,
                            onStop: () => {
                                eE.layout--
                            }
                            ,
                            onComplete: () => {
                                eE.layout--,
                                t.onComplete && t.onComplete(),
                                this.completeAnimation()
                            }
                        }),
                        this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                        this.pendingAnimation = void 0
                    }
                    )
                }
                completeAnimation() {
                    this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
                    this.resumingFrom.preserveOpacity = void 0);
                    let t = this.getStack();
                    t && t.exitAnimationComplete(),
                    this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
                    this.notifyListeners("animationComplete")
                }
                finishAnimation() {
                    this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3),
                    this.currentAnimation.stop()),
                    this.completeAnimation()
                }
                applyTransformsToTarget() {
                    let t = this.getLead()
                      , {targetWithTransforms: e, target: i, layout: n, latestValues: r} = t;
                    if (e && i && n) {
                        if (this !== t && this.layout && n && rp(this.options.animationType, this.layout.layoutBox, n.layoutBox)) {
                            i = this.target || iZ();
                            let e = iI(this.layout.layoutBox.x);
                            i.x.min = t.target.x.min,
                            i.x.max = i.x.min + e;
                            let n = iI(this.layout.layoutBox.y);
                            i.y.min = t.target.y.min,
                            i.y.max = i.y.min + n
                        }
                        nO(e, i),
                        i7(e, r),
                        iU(this.projectionDeltaWithTransform, this.layoutCorrected, e, r)
                    }
                }
                registerSharedNode(t, e) {
                    this.sharedNodes.has(t) || this.sharedNodes.set(t, new nG),
                    this.sharedNodes.get(t).add(e);
                    let i = e.options.initialPromotionConfig;
                    e.promote({
                        transition: i ? i.transition : void 0,
                        preserveFollowOpacity: i && i.shouldPreserveFollowOpacity ? i.shouldPreserveFollowOpacity(e) : void 0
                    })
                }
                isLead() {
                    let t = this.getStack();
                    return !t || t.lead === this
                }
                getLead() {
                    var t;
                    let {layoutId: e} = this.options;
                    return e && (null === (t = this.getStack()) || void 0 === t ? void 0 : t.lead) || this
                }
                getPrevLead() {
                    var t;
                    let {layoutId: e} = this.options;
                    return e ? null === (t = this.getStack()) || void 0 === t ? void 0 : t.prevLead : void 0
                }
                getStack() {
                    let {layoutId: t} = this.options;
                    if (t)
                        return this.root.sharedNodes.get(t)
                }
                promote({needsReset: t, transition: e, preserveFollowOpacity: i}={}) {
                    let n = this.getStack();
                    n && n.promote(this, i),
                    t && (this.projectionDelta = void 0,
                    this.needsReset = !0),
                    e && this.setOptions({
                        transition: e
                    })
                }
                relegate() {
                    let t = this.getStack();
                    return !!t && t.relegate(this)
                }
                resetSkewAndRotation() {
                    let {visualElement: t} = this.options;
                    if (!t)
                        return;
                    let e = !1
                      , {latestValues: i} = t;
                    if ((i.z || i.rotate || i.rotateX || i.rotateY || i.rotateZ || i.skewX || i.skewY) && (e = !0),
                    !e)
                        return;
                    let n = {};
                    i.z && n1("z", t, n, this.animationValues);
                    for (let e = 0; e < nJ.length; e++)
                        n1(`rotate${nJ[e]}`, t, n, this.animationValues),
                        n1(`skew${nJ[e]}`, t, n, this.animationValues);
                    for (let e in t.render(),
                    n)
                        t.setStaticValue(e, n[e]),
                        this.animationValues && (this.animationValues[e] = n[e]);
                    t.scheduleRender()
                }
                getProjectionStyles(t) {
                    var e, i;
                    if (!this.instance || this.isSVG)
                        return;
                    if (!this.isVisible)
                        return nQ;
                    let n = {
                        visibility: ""
                    }
                      , r = this.getTransformTemplate();
                    if (this.needsReset)
                        return this.needsReset = !1,
                        n.opacity = "",
                        n.pointerEvents = nE(null == t ? void 0 : t.pointerEvents) || "",
                        n.transform = r ? r(this.latestValues, "") : "none",
                        n;
                    let s = this.getLead();
                    if (!this.projectionDelta || !this.layout || !s.target) {
                        let e = {};
                        return this.options.layoutId && (e.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1,
                        e.pointerEvents = nE(null == t ? void 0 : t.pointerEvents) || ""),
                        this.hasProjected && !i2(this.latestValues) && (e.transform = r ? r({}, "") : "none",
                        this.hasProjected = !1),
                        e
                    }
                    let o = s.animationValues || s.latestValues;
                    this.applyTransformsToTarget(),
                    n.transform = function(t, e, i) {
                        let n = ""
                          , r = t.x.translate / e.x
                          , s = t.y.translate / e.y
                          , o = (null == i ? void 0 : i.z) || 0;
                        if ((r || s || o) && (n = `translate3d(${r}px, ${s}px, ${o}px) `),
                        (1 !== e.x || 1 !== e.y) && (n += `scale(${1 / e.x}, ${1 / e.y}) `),
                        i) {
                            let {transformPerspective: t, rotate: e, rotateX: r, rotateY: s, skewX: o, skewY: a} = i;
                            t && (n = `perspective(${t}px) ${n}`),
                            e && (n += `rotate(${e}deg) `),
                            r && (n += `rotateX(${r}deg) `),
                            s && (n += `rotateY(${s}deg) `),
                            o && (n += `skewX(${o}deg) `),
                            a && (n += `skewY(${a}deg) `)
                        }
                        let a = t.x.scale * e.x
                          , l = t.y.scale * e.y;
                        return (1 !== a || 1 !== l) && (n += `scale(${a}, ${l})`),
                        n || "none"
                    }(this.projectionDeltaWithTransform, this.treeScale, o),
                    r && (n.transform = r(o, n.transform));
                    let {x: a, y: l} = this.projectionDelta;
                    for (let t in n.transformOrigin = `${100 * a.origin}% ${100 * l.origin}% 0`,
                    s.animationValues ? n.opacity = s === this ? null !== (i = null !== (e = o.opacity) && void 0 !== e ? e : this.latestValues.opacity) && void 0 !== i ? i : 1 : this.preserveOpacity ? this.latestValues.opacity : o.opacityExit : n.opacity = s === this ? void 0 !== o.opacity ? o.opacity : "" : void 0 !== o.opacityExit ? o.opacityExit : 0,
                    ny) {
                        if (void 0 === o[t])
                            continue;
                        let {correct: e, applyTo: i, isCSSVariable: r} = ny[t]
                          , a = "none" === n.transform ? o[t] : e(o[t], s);
                        if (i) {
                            let t = i.length;
                            for (let e = 0; e < t; e++)
                                n[i[e]] = a
                        } else
                            r ? this.options.visualElement.renderState.vars[t] = a : n[t] = a
                    }
                    return this.options.layoutId && (n.pointerEvents = s === this ? nE(null == t ? void 0 : t.pointerEvents) || "" : "none"),
                    n
                }
                clearSnapshot() {
                    this.resumeFrom = this.snapshot = void 0
                }
                resetTree() {
                    this.root.nodes.forEach(t => {
                        var e;
                        return null === (e = t.currentAnimation) || void 0 === e ? void 0 : e.stop()
                    }
                    ),
                    this.root.nodes.forEach(n6),
                    this.root.sharedNodes.clear()
                }
            }
        }
        function n3(t) {
            t.updateLayout()
        }
        function n5(t) {
            var e;
            let i = (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) || t.snapshot;
            if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
                let {layoutBox: e, measuredBox: n} = t.layout
                  , {animationType: r} = t.options
                  , s = i.source !== t.layout.source;
                "size" === r ? iJ(t => {
                    let n = s ? i.measuredBox[t] : i.layoutBox[t]
                      , r = iI(n);
                    n.min = e[t].min,
                    n.max = n.min + r
                }
                ) : rp(r, i.layoutBox, e) && iJ(n => {
                    let r = s ? i.measuredBox[n] : i.layoutBox[n]
                      , o = iI(e[n]);
                    r.max = r.min + o,
                    t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0,
                    t.relativeTarget[n].max = t.relativeTarget[n].min + o)
                }
                );
                let o = iX();
                iU(o, e, i.layoutBox);
                let a = iX();
                s ? iU(a, t.applyTransform(n, !0), i.measuredBox) : iU(a, e, i.layoutBox);
                let l = !n_(o)
                  , u = !1;
                if (!t.resumeFrom) {
                    let n = t.getClosestProjectingParent();
                    if (n && !n.resumeFrom) {
                        let {snapshot: r, layout: s} = n;
                        if (r && s) {
                            let o = iZ();
                            iW(o, i.layoutBox, r.layoutBox);
                            let a = iZ();
                            iW(a, e, s.layoutBox),
                            nY(o, a) || (u = !0),
                            n.options.layoutRoot && (t.relativeTarget = a,
                            t.relativeTargetOrigin = o,
                            t.relativeParent = n)
                        }
                    }
                }
                t.notifyListeners("didUpdate", {
                    layout: e,
                    snapshot: i,
                    delta: a,
                    layoutDelta: o,
                    hasLayoutChanged: l,
                    hasRelativeLayoutChanged: u
                })
            } else if (t.isLead()) {
                let {onExitComplete: e} = t.options;
                e && e()
            }
            t.options.transition = void 0
        }
        function n4(t) {
            _.value && nZ.nodes++,
            t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty),
            t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)),
            t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
        }
        function n9(t) {
            t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
        }
        function n8(t) {
            t.clearSnapshot()
        }
        function n6(t) {
            t.clearMeasurements()
        }
        function n7(t) {
            t.isLayoutDirty = !1
        }
        function rt(t) {
            let {visualElement: e} = t.options;
            e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"),
            t.resetTransform()
        }
        function re(t) {
            t.finishAnimation(),
            t.targetDelta = t.relativeTarget = t.target = void 0,
            t.isProjectionDirty = !0
        }
        function ri(t) {
            t.resolveTargetDelta()
        }
        function rn(t) {
            t.calcProjection()
        }
        function rr(t) {
            t.resetSkewAndRotation()
        }
        function rs(t) {
            t.removeLeadSnapshot()
        }
        function ro(t, e, i) {
            t.translate = eM(e.translate, 0, i),
            t.scale = eM(e.scale, 1, i),
            t.origin = e.origin,
            t.originPoint = e.originPoint
        }
        function ra(t, e, i, n) {
            t.min = eM(e.min, i.min, n),
            t.max = eM(e.max, i.max, n)
        }
        function rl(t) {
            return t.animationValues && void 0 !== t.animationValues.opacityExit
        }
        let ru = {
            duration: .45,
            ease: [.4, 0, .1, 1]
        }
          , rh = t => "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t)
          , rd = rh("applewebkit/") && !rh("chrome/") ? Math.round : F;
        function rc(t) {
            t.min = rd(t.min),
            t.max = rd(t.max)
        }
        function rp(t, e, i) {
            return "position" === t || "preserve-aspect" === t && !(.2 >= Math.abs(nq(e) - nq(i)))
        }
        function rm(t) {
            var e;
            return t !== t.root && (null === (e = t.scroll) || void 0 === e ? void 0 : e.wasRoot)
        }
        let rf = n2({
            attachResizeListener: (t, e) => iM(t, "resize", e),
            measureScroll: () => ({
                x: document.documentElement.scrollLeft || document.body.scrollLeft,
                y: document.documentElement.scrollTop || document.body.scrollTop
            }),
            checkIsScrollRoot: () => !0
        })
          , rv = {
            current: void 0
        }
          , rg = n2({
            measureScroll: t => ({
                x: t.scrollLeft,
                y: t.scrollTop
            }),
            defaultParent: () => {
                if (!rv.current) {
                    let t = new rf({});
                    t.mount(window),
                    t.setOptions({
                        layoutScroll: !0
                    }),
                    rv.current = t
                }
                return rv.current
            }
            ,
            resetTransform: (t, e) => {
                t.style.transform = void 0 !== e ? e : "none"
            }
            ,
            checkIsScrollRoot: t => "fixed" === window.getComputedStyle(t).position
        });
        function ry(t, e, i) {
            let {props: n} = t;
            t.animationState && n.whileHover && t.animationState.setActive("whileHover", "Start" === i);
            let r = n["onHover" + i];
            r && H.postRender( () => r(e, ik(e)))
        }
        class rx extends iT {
            mount() {
                let {current: t} = this.node;
                t && (this.unmount = function(t, e, i={}) {
                    let[n,r,s] = T(t, i)
                      , o = t => {
                        if (!S(t))
                            return;
                        let {target: i} = t
                          , n = e(i, t);
                        if ("function" != typeof n || !i)
                            return;
                        let s = t => {
                            S(t) && (n(t),
                            i.removeEventListener("pointerleave", s))
                        }
                        ;
                        i.addEventListener("pointerleave", s, r)
                    }
                    ;
                    return n.forEach(t => {
                        t.addEventListener("pointerenter", o, r)
                    }
                    ),
                    s
                }(t, (t, e) => (ry(this.node, e, "Start"),
                t => ry(this.node, t, "End"))))
            }
            unmount() {}
        }
        class rb extends iT {
            constructor() {
                super(...arguments),
                this.isActive = !1
            }
            onFocus() {
                let t = !1;
                try {
                    t = this.node.current.matches(":focus-visible")
                } catch (e) {
                    t = !0
                }
                t && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0),
                this.isActive = !0)
            }
            onBlur() {
                this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1),
                this.isActive = !1)
            }
            mount() {
                this.unmount = eO(iM(this.node.current, "focus", () => this.onFocus()), iM(this.node.current, "blur", () => this.onBlur()))
            }
            unmount() {}
        }
        function rw(t, e, i) {
            let {props: n} = t;
            if (t.current instanceof HTMLButtonElement && t.current.disabled)
                return;
            t.animationState && n.whileTap && t.animationState.setActive("whileTap", "Start" === i);
            let r = n["onTap" + ("End" === i ? "" : i)];
            r && H.postRender( () => r(e, ik(e)))
        }
        class rP extends iT {
            mount() {
                let {current: t} = this.node;
                t && (this.unmount = function(t, e, i={}) {
                    let[n,r,s] = T(t, i)
                      , o = t => {
                        let n = t.currentTarget;
                        if (!D(t) || k.has(n))
                            return;
                        k.add(n);
                        let s = e(n, t)
                          , o = (t, e) => {
                            window.removeEventListener("pointerup", a),
                            window.removeEventListener("pointercancel", l),
                            D(t) && k.has(n) && (k.delete(n),
                            "function" == typeof s && s(t, {
                                success: e
                            }))
                        }
                          , a = t => {
                            o(t, i.useGlobalTarget || A(n, t.target))
                        }
                          , l = t => {
                            o(t, !1)
                        }
                        ;
                        window.addEventListener("pointerup", a, r),
                        window.addEventListener("pointercancel", l, r)
                    }
                    ;
                    return n.forEach(t => {
                        M.has(t.tagName) || -1 !== t.tabIndex || null !== t.getAttribute("tabindex") || (t.tabIndex = 0),
                        (i.useGlobalTarget ? window : t).addEventListener("pointerdown", o, r),
                        t.addEventListener("focus", t => V(t, r), r)
                    }
                    ),
                    s
                }(t, (t, e) => (rw(this.node, e, "Start"),
                (t, {success: e}) => rw(this.node, t, e ? "End" : "Cancel")), {
                    useGlobalTarget: this.node.props.globalTapTarget
                }))
            }
            unmount() {}
        }
        let rT = new WeakMap
          , rS = new WeakMap
          , rA = t => {
            let e = rT.get(t.target);
            e && e(t)
        }
          , rE = t => {
            t.forEach(rA)
        }
          , rM = {
            some: 0,
            all: 1
        };
        class rk extends iT {
            constructor() {
                super(...arguments),
                this.hasEnteredView = !1,
                this.isInView = !1
            }
            startObserver() {
                this.unmount();
                let {viewport: t={}} = this.node.getProps()
                  , {root: e, margin: i, amount: n="some", once: r} = t
                  , s = {
                    root: e ? e.current : void 0,
                    rootMargin: i,
                    threshold: "number" == typeof n ? n : rM[n]
                };
                return function(t, e, i) {
                    let n = function({root: t, ...e}) {
                        let i = t || document;
                        rS.has(i) || rS.set(i, {});
                        let n = rS.get(i)
                          , r = JSON.stringify(e);
                        return n[r] || (n[r] = new IntersectionObserver(rE,{
                            root: t,
                            ...e
                        })),
                        n[r]
                    }(e);
                    return rT.set(t, i),
                    n.observe(t),
                    () => {
                        rT.delete(t),
                        n.unobserve(t)
                    }
                }(this.node.current, s, t => {
                    let {isIntersecting: e} = t;
                    if (this.isInView === e || (this.isInView = e,
                    r && !e && this.hasEnteredView))
                        return;
                    e && (this.hasEnteredView = !0),
                    this.node.animationState && this.node.animationState.setActive("whileInView", e);
                    let {onViewportEnter: i, onViewportLeave: n} = this.node.getProps()
                      , s = e ? i : n;
                    s && s(t)
                }
                )
            }
            mount() {
                this.startObserver()
            }
            update() {
                if ("undefined" == typeof IntersectionObserver)
                    return;
                let {props: t, prevProps: e} = this.node;
                ["amount", "margin", "root"].some(function({viewport: t={}}, {viewport: e={}}={}) {
                    return i => t[i] !== e[i]
                }(t, e)) && this.startObserver()
            }
            unmount() {}
        }
        let rC = (0,
        nd.createContext)({
            strict: !1
        })
          , rR = (0,
        nd.createContext)({
            transformPagePoint: t => t,
            isStatic: !1,
            reducedMotion: "never"
        })
          , rV = (0,
        nd.createContext)({});
        function rD(t) {
            return r(t.animate) || ig.some(e => im(t[e]))
        }
        function rj(t) {
            return !!(rD(t) || t.variants)
        }
        function rL(t) {
            return Array.isArray(t) ? t.join(" ") : t
        }
        let rF = "undefined" != typeof window
          , rO = {
            animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
            exit: ["exit"],
            drag: ["drag", "dragControls"],
            focus: ["whileFocus"],
            hover: ["whileHover", "onHoverStart", "onHoverEnd"],
            tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
            pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
            inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
            layout: ["layout", "layoutId"]
        }
          , rB = {};
        for (let t in rO)
            rB[t] = {
                isEnabled: e => rO[t].some(t => !!e[t])
            };
        let rI = Symbol.for("motionComponentSymbol")
          , rN = rF ? nd.useLayoutEffect : nd.useEffect;
        function rU(t, {layout: e, layoutId: i}) {
            return B.has(t) || t.startsWith("origin") || (e || void 0 !== i) && (!!ny[t] || "opacity" === t)
        }
        let rz = (t, e) => e && "number" == typeof t ? e.transform(t) : t
          , r$ = {
            x: "translateX",
            y: "translateY",
            z: "translateZ",
            transformPerspective: "perspective"
        }
          , rW = O.length;
        function r_(t, e, i) {
            let {style: n, vars: r, transformOrigin: s} = t
              , o = !1
              , a = !1;
            for (let t in e) {
                let i = e[t];
                if (B.has(t)) {
                    o = !0;
                    continue
                }
                if (ep(t)) {
                    r[t] = i;
                    continue
                }
                {
                    let e = rz(i, t5[t]);
                    t.startsWith("origin") ? (a = !0,
                    s[t] = e) : n[t] = e
                }
            }
            if (!e.transform && (o || i ? n.transform = function(t, e, i) {
                let n = ""
                  , r = !0;
                for (let s = 0; s < rW; s++) {
                    let o = O[s]
                      , a = t[o];
                    if (void 0 === a)
                        continue;
                    let l = !0;
                    if (!(l = "number" == typeof a ? a === (o.startsWith("scale") ? 1 : 0) : 0 === parseFloat(a)) || i) {
                        let t = rz(a, t5[o]);
                        if (!l) {
                            r = !1;
                            let e = r$[o] || o;
                            n += `${e}(${t}) `
                        }
                        i && (e[o] = t)
                    }
                }
                return n = n.trim(),
                i ? n = i(e, r ? "" : n) : r && (n = "none"),
                n
            }(e, t.transform, i) : n.transform && (n.transform = "none")),
            a) {
                let {originX: t="50%", originY: e="50%", originZ: i=0} = s;
                n.transformOrigin = `${t} ${e} ${i}`
            }
        }
        let rK = () => ({
            style: {},
            transform: {},
            transformOrigin: {},
            vars: {}
        });
        function rH(t, e, i) {
            for (let n in e)
                ts(e[n]) || rU(n, i) || (t[n] = e[n])
        }
        let rY = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
        function rq(t) {
            return t.startsWith("while") || t.startsWith("drag") && "draggable" !== t || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || rY.has(t)
        }
        let rX = t => !rq(t);
        try {
            !function(t) {
                t && (rX = e => e.startsWith("on") ? !rq(e) : t(e))
            }(require("@emotion/is-prop-valid").default)
        } catch (t) {}
        let rG = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
        function rZ(t) {
            if ("string" != typeof t || t.includes("-"))
                ;
            else if (rG.indexOf(t) > -1 || /[A-Z]/u.test(t))
                return !0;
            return !1
        }
        let rJ = {
            offset: "stroke-dashoffset",
            array: "stroke-dasharray"
        }
          , rQ = {
            offset: "strokeDashoffset",
            array: "strokeDasharray"
        };
        function r0(t, e, i) {
            return "string" == typeof t ? t : tI.transform(e + i * t)
        }
        function r1(t, {attrX: e, attrY: i, attrScale: n, originX: r, originY: s, pathLength: o, pathSpacing: a=1, pathOffset: l=0, ...u}, h, d) {
            if (r_(t, u, d),
            h) {
                t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
                return
            }
            t.attrs = t.style,
            t.style = {};
            let {attrs: c, style: p, dimensions: m} = t;
            c.transform && (m && (p.transform = c.transform),
            delete c.transform),
            m && (void 0 !== r || void 0 !== s || p.transform) && (p.transformOrigin = function(t, e, i) {
                let n = r0(e, t.x, t.width)
                  , r = r0(i, t.y, t.height);
                return `${n} ${r}`
            }(m, void 0 !== r ? r : .5, void 0 !== s ? s : .5)),
            void 0 !== e && (c.x = e),
            void 0 !== i && (c.y = i),
            void 0 !== n && (c.scale = n),
            void 0 !== o && function(t, e, i=1, n=0, r=!0) {
                t.pathLength = 1;
                let s = r ? rJ : rQ;
                t[s.offset] = tI.transform(-n);
                let o = tI.transform(e)
                  , a = tI.transform(i);
                t[s.array] = `${o} ${a}`
            }(c, o, a, l, !1)
        }
        let r2 = () => ({
            ...rK(),
            attrs: {}
        })
          , r3 = t => "string" == typeof t && "svg" === t.toLowerCase()
          , r5 = t => (e, i) => {
            let n = (0,
            nd.useContext)(rV)
              , o = (0,
            nd.useContext)(nc)
              , a = () => (function({scrapeMotionValuesFromProps: t, createRenderState: e, onUpdate: i}, n, o, a) {
                let l = {
                    latestValues: function(t, e, i, n) {
                        let o = {}
                          , a = n(t, {});
                        for (let t in a)
                            o[t] = nE(a[t]);
                        let {initial: l, animate: u} = t
                          , h = rD(t)
                          , d = rj(t);
                        e && d && !h && !1 !== t.inherit && (void 0 === l && (l = e.initial),
                        void 0 === u && (u = e.animate));
                        let c = !!i && !1 === i.initial
                          , p = (c = c || !1 === l) ? u : l;
                        if (p && "boolean" != typeof p && !r(p)) {
                            let e = Array.isArray(p) ? p : [p];
                            for (let i = 0; i < e.length; i++) {
                                let n = s(t, e[i]);
                                if (n) {
                                    let {transitionEnd: t, transition: e, ...i} = n;
                                    for (let t in i) {
                                        let e = i[t];
                                        if (Array.isArray(e)) {
                                            let t = c ? e.length - 1 : 0;
                                            e = e[t]
                                        }
                                        null !== e && (o[t] = e)
                                    }
                                    for (let e in t)
                                        o[e] = t[e]
                                }
                            }
                        }
                        return o
                    }(n, o, a, t),
                    renderState: e()
                };
                return i && (l.onMount = t => i({
                    props: n,
                    current: t,
                    ...l
                }),
                l.onUpdate = t => i(t)),
                l
            }
            )(t, e, n, o);
            return i ? a() : function(t) {
                let e = (0,
                nd.useRef)(null);
                return null === e.current && (e.current = t()),
                e.current
            }(a)
        }
        ;
        function r4(t, e, i) {
            var n;
            let {style: r} = t
              , s = {};
            for (let o in r)
                (ts(r[o]) || e.style && ts(e.style[o]) || rU(o, t) || (null === (n = null == i ? void 0 : i.getValue(o)) || void 0 === n ? void 0 : n.liveStyle) !== void 0) && (s[o] = r[o]);
            return s
        }
        let r9 = {
            useVisualState: r5({
                scrapeMotionValuesFromProps: r4,
                createRenderState: rK
            })
        };
        function r8(t, e) {
            try {
                e.dimensions = "function" == typeof t.getBBox ? t.getBBox() : t.getBoundingClientRect()
            } catch (t) {
                e.dimensions = {
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0
                }
            }
        }
        function r6(t, {style: e, vars: i}, n, r) {
            for (let s in Object.assign(t.style, e, r && r.getProjectionStyles(n)),
            i)
                t.style.setProperty(s, i[s])
        }
        let r7 = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
        function st(t, e, i, n) {
            for (let i in r6(t, e, void 0, n),
            e.attrs)
                t.setAttribute(r7.has(i) ? i : ta(i), e.attrs[i])
        }
        function se(t, e, i) {
            let n = r4(t, e, i);
            for (let i in t)
                (ts(t[i]) || ts(e[i])) && (n[-1 !== O.indexOf(i) ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i] = t[i]);
            return n
        }
        let si = ["x", "y", "width", "height", "cx", "cy", "r"]
          , sn = {
            useVisualState: r5({
                scrapeMotionValuesFromProps: se,
                createRenderState: r2,
                onUpdate: ({props: t, prevProps: e, current: i, renderState: n, latestValues: r}) => {
                    if (!i)
                        return;
                    let s = !!t.drag;
                    if (!s) {
                        for (let t in r)
                            if (B.has(t)) {
                                s = !0;
                                break
                            }
                    }
                    if (!s)
                        return;
                    let o = !e;
                    if (e)
                        for (let i = 0; i < si.length; i++) {
                            let n = si[i];
                            t[n] !== e[n] && (o = !0)
                        }
                    o && H.read( () => {
                        r8(i, n),
                        H.render( () => {
                            r1(n, r, r3(i.tagName), t.transformTemplate),
                            st(i, n)
                        }
                        )
                    }
                    )
                }
            })
        }
          , sr = {
            current: null
        }
          , ss = {
            current: !1
        }
          , so = [...ex, tW, tJ]
          , sa = t => so.find(ey(t))
          , sl = new WeakMap
          , su = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
        class sh {
            scrapeMotionValuesFromProps(t, e, i) {
                return {}
            }
            constructor({parent: t, props: e, presenceContext: i, reducedMotionConfig: n, blockInitialAnimation: r, visualState: s}, o={}) {
                this.current = null,
                this.children = new Set,
                this.isVariantNode = !1,
                this.isControllingVariants = !1,
                this.shouldReduceMotion = null,
                this.values = new Map,
                this.KeyframeResolver = eh,
                this.features = {},
                this.valueSubscriptions = new Map,
                this.prevMotionValues = {},
                this.events = {},
                this.propEventSubscriptions = {},
                this.notifyUpdate = () => this.notify("Update", this.latestValues),
                this.render = () => {
                    this.current && (this.triggerBuild(),
                    this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
                }
                ,
                this.renderScheduledAt = 0,
                this.scheduleRender = () => {
                    let t = Z.now();
                    this.renderScheduledAt < t && (this.renderScheduledAt = t,
                    H.render(this.render, !1, !0))
                }
                ;
                let {latestValues: a, renderState: l, onUpdate: u} = s;
                this.onUpdate = u,
                this.latestValues = a,
                this.baseTarget = {
                    ...a
                },
                this.initialValues = e.initial ? {
                    ...a
                } : {},
                this.renderState = l,
                this.parent = t,
                this.props = e,
                this.presenceContext = i,
                this.depth = t ? t.depth + 1 : 0,
                this.reducedMotionConfig = n,
                this.options = o,
                this.blockInitialAnimation = !!r,
                this.isControllingVariants = rD(e),
                this.isVariantNode = rj(e),
                this.isVariantNode && (this.variantChildren = new Set),
                this.manuallyAnimateOnMount = !!(t && t.current);
                let {willChange: h, ...d} = this.scrapeMotionValuesFromProps(e, {}, this);
                for (let t in d) {
                    let e = d[t];
                    void 0 !== a[t] && ts(e) && e.set(a[t], !1)
                }
            }
            mount(t) {
                this.current = t,
                sl.set(t, this),
                this.projection && !this.projection.instance && this.projection.mount(t),
                this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
                this.values.forEach( (t, e) => this.bindToMotionValue(e, t)),
                ss.current || function() {
                    if (ss.current = !0,
                    rF) {
                        if (window.matchMedia) {
                            let t = window.matchMedia("(prefers-reduced-motion)")
                              , e = () => sr.current = t.matches;
                            t.addListener(e),
                            e()
                        } else
                            sr.current = !1
                    }
                }(),
                this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || sr.current),
                this.parent && this.parent.children.add(this),
                this.update(this.props, this.presenceContext)
            }
            unmount() {
                for (let t in this.projection && this.projection.unmount(),
                Y(this.notifyUpdate),
                Y(this.render),
                this.valueSubscriptions.forEach(t => t()),
                this.valueSubscriptions.clear(),
                this.removeFromVariantTree && this.removeFromVariantTree(),
                this.parent && this.parent.children.delete(this),
                this.events)
                    this.events[t].clear();
                for (let t in this.features) {
                    let e = this.features[t];
                    e && (e.unmount(),
                    e.isMounted = !1)
                }
                this.current = null
            }
            bindToMotionValue(t, e) {
                let i;
                this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
                let n = B.has(t);
                n && this.onBindTransform && this.onBindTransform();
                let r = e.on("change", e => {
                    this.latestValues[t] = e,
                    this.props.onUpdate && H.preRender(this.notifyUpdate),
                    n && this.projection && (this.projection.isTransformDirty = !0)
                }
                )
                  , s = e.on("renderRequest", this.scheduleRender);
                window.MotionCheckAppearSync && (i = window.MotionCheckAppearSync(this, t, e)),
                this.valueSubscriptions.set(t, () => {
                    r(),
                    s(),
                    i && i(),
                    e.owner && e.stop()
                }
                )
            }
            sortNodePosition(t) {
                return this.current && this.sortInstanceNodePosition && this.type === t.type ? this.sortInstanceNodePosition(this.current, t.current) : 0
            }
            updateFeatures() {
                let t = "animation";
                for (t in rB) {
                    let e = rB[t];
                    if (!e)
                        continue;
                    let {isEnabled: i, Feature: n} = e;
                    if (!this.features[t] && n && i(this.props) && (this.features[t] = new n(this)),
                    this.features[t]) {
                        let e = this.features[t];
                        e.isMounted ? e.update() : (e.mount(),
                        e.isMounted = !0)
                    }
                }
            }
            triggerBuild() {
                this.build(this.renderState, this.latestValues, this.props)
            }
            measureViewportBox() {
                return this.current ? this.measureInstanceViewportBox(this.current, this.props) : iZ()
            }
            getStaticValue(t) {
                return this.latestValues[t]
            }
            setStaticValue(t, e) {
                this.latestValues[t] = e
            }
            update(t, e) {
                (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
                this.prevProps = this.props,
                this.props = t,
                this.prevPresenceContext = this.presenceContext,
                this.presenceContext = e;
                for (let e = 0; e < su.length; e++) {
                    let i = su[e];
                    this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](),
                    delete this.propEventSubscriptions[i]);
                    let n = t["on" + i];
                    n && (this.propEventSubscriptions[i] = this.on(i, n))
                }
                this.prevMotionValues = function(t, e, i) {
                    for (let n in e) {
                        let r = e[n]
                          , s = i[n];
                        if (ts(r))
                            t.addValue(n, r);
                        else if (ts(s))
                            t.addValue(n, tr(r, {
                                owner: t
                            }));
                        else if (s !== r) {
                            if (t.hasValue(n)) {
                                let e = t.getValue(n);
                                !0 === e.liveStyle ? e.jump(r) : e.hasAnimated || e.set(r)
                            } else {
                                let e = t.getStaticValue(n);
                                t.addValue(n, tr(void 0 !== e ? e : r, {
                                    owner: t
                                }))
                            }
                        }
                    }
                    for (let n in i)
                        void 0 === e[n] && t.removeValue(n);
                    return e
                }(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues),
                this.handleChildMotionValue && this.handleChildMotionValue(),
                this.onUpdate && this.onUpdate(this)
            }
            getProps() {
                return this.props
            }
            getVariant(t) {
                return this.props.variants ? this.props.variants[t] : void 0
            }
            getDefaultTransition() {
                return this.props.transition
            }
            getTransformPagePoint() {
                return this.props.transformPagePoint
            }
            getClosestVariantNode() {
                return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
            }
            addVariantChild(t) {
                let e = this.getClosestVariantNode();
                if (e)
                    return e.variantChildren && e.variantChildren.add(t),
                    () => e.variantChildren.delete(t)
            }
            addValue(t, e) {
                let i = this.values.get(t);
                e !== i && (i && this.removeValue(t),
                this.bindToMotionValue(t, e),
                this.values.set(t, e),
                this.latestValues[t] = e.get())
            }
            removeValue(t) {
                this.values.delete(t);
                let e = this.valueSubscriptions.get(t);
                e && (e(),
                this.valueSubscriptions.delete(t)),
                delete this.latestValues[t],
                this.removeValueFromRenderState(t, this.renderState)
            }
            hasValue(t) {
                return this.values.has(t)
            }
            getValue(t, e) {
                if (this.props.values && this.props.values[t])
                    return this.props.values[t];
                let i = this.values.get(t);
                return void 0 === i && void 0 !== e && (i = tr(null === e ? void 0 : e, {
                    owner: this
                }),
                this.addValue(t, i)),
                i
            }
            readValue(t, e) {
                var i;
                let n = void 0 === this.latestValues[t] && this.current ? null !== (i = this.getBaseTargetFromProps(this.props, t)) && void 0 !== i ? i : this.readValueFromInstance(this.current, t, this.options) : this.latestValues[t];
                return null != n && ("string" == typeof n && (ed(n) || tw(n)) ? n = parseFloat(n) : !sa(n) && tJ.test(e) && (n = t8(t, e)),
                this.setBaseTarget(t, ts(n) ? n.get() : n)),
                ts(n) ? n.get() : n
            }
            setBaseTarget(t, e) {
                this.baseTarget[t] = e
            }
            getBaseTarget(t) {
                var e;
                let i;
                let {initial: n} = this.props;
                if ("string" == typeof n || "object" == typeof n) {
                    let r = s(this.props, n, null === (e = this.presenceContext) || void 0 === e ? void 0 : e.custom);
                    r && (i = r[t])
                }
                if (n && void 0 !== i)
                    return i;
                let r = this.getBaseTargetFromProps(this.props, t);
                return void 0 === r || ts(r) ? void 0 !== this.initialValues[t] && void 0 === i ? void 0 : this.baseTarget[t] : r
            }
            on(t, e) {
                return this.events[t] || (this.events[t] = new tt),
                this.events[t].add(e)
            }
            notify(t, ...e) {
                this.events[t] && this.events[t].notify(...e)
            }
        }
        class sd extends sh {
            constructor() {
                super(...arguments),
                this.KeyframeResolver = ew
            }
            sortInstanceNodePosition(t, e) {
                return 2 & t.compareDocumentPosition(e) ? 1 : -1
            }
            getBaseTargetFromProps(t, e) {
                return t.style ? t.style[e] : void 0
            }
            removeValueFromRenderState(t, {vars: e, style: i}) {
                delete e[t],
                delete i[t]
            }
            handleChildMotionValue() {
                this.childSubscription && (this.childSubscription(),
                delete this.childSubscription);
                let {children: t} = this.props;
                ts(t) && (this.childSubscription = t.on("change", t => {
                    this.current && (this.current.textContent = `${t}`)
                }
                ))
            }
        }
        class sc extends sd {
            constructor() {
                super(...arguments),
                this.type = "html",
                this.renderInstance = r6
            }
            readValueFromInstance(t, e) {
                if (B.has(e)) {
                    let t = t9(e);
                    return t && t.default || 0
                }
                {
                    let i = window.getComputedStyle(t)
                      , n = (ep(e) ? i.getPropertyValue(e) : i[e]) || 0;
                    return "string" == typeof n ? n.trim() : n
                }
            }
            measureInstanceViewportBox(t, {transformPagePoint: e}) {
                return nt(t, e)
            }
            build(t, e, i) {
                r_(t, e, i.transformTemplate)
            }
            scrapeMotionValuesFromProps(t, e, i) {
                return r4(t, e, i)
            }
        }
        class sp extends sd {
            constructor() {
                super(...arguments),
                this.type = "svg",
                this.isSVGTag = !1,
                this.measureInstanceViewportBox = iZ,
                this.updateDimensions = () => {
                    this.current && !this.renderState.dimensions && r8(this.current, this.renderState)
                }
            }
            getBaseTargetFromProps(t, e) {
                return t[e]
            }
            readValueFromInstance(t, e) {
                if (B.has(e)) {
                    let t = t9(e);
                    return t && t.default || 0
                }
                return e = r7.has(e) ? e : ta(e),
                t.getAttribute(e)
            }
            scrapeMotionValuesFromProps(t, e, i) {
                return se(t, e, i)
            }
            onBindTransform() {
                this.current && !this.renderState.dimensions && H.postRender(this.updateDimensions)
            }
            build(t, e, i) {
                r1(t, e, this.isSVGTag, i.transformTemplate)
            }
            renderInstance(t, e, i, n) {
                st(t, e, i, n)
            }
            mount(t) {
                this.isSVGTag = r3(t.tagName),
                super.mount(t)
            }
        }
        let sm = function(t) {
            if ("undefined" == typeof Proxy)
                return t;
            let e = new Map;
            return new Proxy( (...e) => t(...e),{
                get: (i, n) => "create" === n ? t : (e.has(n) || e.set(n, t(n)),
                e.get(n))
            })
        }((nl = {
            animation: {
                Feature: iS
            },
            exit: {
                Feature: iE
            },
            inView: {
                Feature: rk
            },
            tap: {
                Feature: rP
            },
            focus: {
                Feature: rb
            },
            hover: {
                Feature: rx
            },
            pan: {
                Feature: na
            },
            drag: {
                Feature: ns,
                ProjectionNode: rg,
                MeasureLayout: nP
            },
            layout: {
                ProjectionNode: rg,
                MeasureLayout: nP
            }
        },
        nu = (t, e) => rZ(t) ? new sp(e) : new sc(e,{
            allowProjection: t !== nd.Fragment
        }),
        function(t, {forwardMotionProps: e}={
            forwardMotionProps: !1
        }) {
            return function(t) {
                var e, i;
                let {preloadedFeatures: n, createVisualElement: r, useRender: s, useVisualState: o, Component: a} = t;
                function l(t, e) {
                    var i;
                    let n;
                    let l = {
                        ...(0,
                        nd.useContext)(rR),
                        ...t,
                        layoutId: function(t) {
                            let {layoutId: e} = t
                              , i = (0,
                            nd.useContext)(np).id;
                            return i && void 0 !== e ? i + "-" + e : e
                        }(t)
                    }
                      , {isStatic: u} = l
                      , h = function(t) {
                        let {initial: e, animate: i} = function(t, e) {
                            if (rD(t)) {
                                let {initial: e, animate: i} = t;
                                return {
                                    initial: !1 === e || im(e) ? e : void 0,
                                    animate: im(i) ? i : void 0
                                }
                            }
                            return !1 !== t.inherit ? e : {}
                        }(t, (0,
                        nd.useContext)(rV));
                        return (0,
                        nd.useMemo)( () => ({
                            initial: e,
                            animate: i
                        }), [rL(e), rL(i)])
                    }(t)
                      , d = o(t, u);
                    if (!u && rF) {
                        (0,
                        nd.useContext)(rC).strict;
                        let t = function(t) {
                            let {drag: e, layout: i} = rB;
                            if (!e && !i)
                                return {};
                            let n = {
                                ...e,
                                ...i
                            };
                            return {
                                MeasureLayout: (null == e ? void 0 : e.isEnabled(t)) || (null == i ? void 0 : i.isEnabled(t)) ? n.MeasureLayout : void 0,
                                ProjectionNode: n.ProjectionNode
                            }
                        }(l);
                        n = t.MeasureLayout,
                        h.visualElement = function(t, e, i, n, r) {
                            var s, o;
                            let {visualElement: a} = (0,
                            nd.useContext)(rV)
                              , l = (0,
                            nd.useContext)(rC)
                              , u = (0,
                            nd.useContext)(nc)
                              , h = (0,
                            nd.useContext)(rR).reducedMotion
                              , d = (0,
                            nd.useRef)(null);
                            n = n || l.renderer,
                            !d.current && n && (d.current = n(t, {
                                visualState: e,
                                parent: a,
                                props: i,
                                presenceContext: u,
                                blockInitialAnimation: !!u && !1 === u.initial,
                                reducedMotionConfig: h
                            }));
                            let c = d.current
                              , p = (0,
                            nd.useContext)(nm);
                            c && !c.projection && r && ("html" === c.type || "svg" === c.type) && function(t, e, i, n) {
                                let {layoutId: r, layout: s, drag: o, dragConstraints: a, layoutScroll: l, layoutRoot: u} = e;
                                t.projection = new i(t.latestValues,e["data-framer-portal-id"] ? void 0 : function t(e) {
                                    if (e)
                                        return !1 !== e.options.allowProjection ? e.projection : t(e.parent)
                                }(t.parent)),
                                t.projection.setOptions({
                                    layoutId: r,
                                    layout: s,
                                    alwaysMeasureLayout: !!o || a && iB(a),
                                    visualElement: t,
                                    animationType: "string" == typeof s ? s : "both",
                                    initialPromotionConfig: n,
                                    layoutScroll: l,
                                    layoutRoot: u
                                })
                            }(d.current, i, r, p);
                            let m = (0,
                            nd.useRef)(!1);
                            (0,
                            nd.useInsertionEffect)( () => {
                                c && m.current && c.update(i, u)
                            }
                            );
                            let f = i[tl]
                              , v = (0,
                            nd.useRef)(!!f && !(null === (s = window.MotionHandoffIsComplete) || void 0 === s ? void 0 : s.call(window, f)) && (null === (o = window.MotionHasOptimisedAnimation) || void 0 === o ? void 0 : o.call(window, f)));
                            return rN( () => {
                                c && (m.current = !0,
                                window.MotionIsMounted = !0,
                                c.updateFeatures(),
                                nx.render(c.render),
                                v.current && c.animationState && c.animationState.animateChanges())
                            }
                            ),
                            (0,
                            nd.useEffect)( () => {
                                c && (!v.current && c.animationState && c.animationState.animateChanges(),
                                v.current && (queueMicrotask( () => {
                                    var t;
                                    null === (t = window.MotionHandoffMarkAsComplete) || void 0 === t || t.call(window, f)
                                }
                                ),
                                v.current = !1))
                            }
                            ),
                            c
                        }(a, d, l, r, t.ProjectionNode)
                    }
                    return (0,
                    nh.jsxs)(rV.Provider, {
                        value: h,
                        children: [n && h.visualElement ? (0,
                        nh.jsx)(n, {
                            visualElement: h.visualElement,
                            ...l
                        }) : null, s(a, t, (i = h.visualElement,
                        (0,
                        nd.useCallback)(t => {
                            t && d.onMount && d.onMount(t),
                            i && (t ? i.mount(t) : i.unmount()),
                            e && ("function" == typeof e ? e(t) : iB(e) && (e.current = t))
                        }
                        , [i])), d, u, h.visualElement)]
                    })
                }
                n && function(t) {
                    for (let e in t)
                        rB[e] = {
                            ...rB[e],
                            ...t[e]
                        }
                }(n),
                l.displayName = "motion.".concat("string" == typeof a ? a : "create(".concat(null !== (i = null !== (e = a.displayName) && void 0 !== e ? e : a.name) && void 0 !== i ? i : "", ")"));
                let u = (0,
                nd.forwardRef)(l);
                return u[rI] = a,
                u
            }({
                ...rZ(t) ? sn : r9,
                preloadedFeatures: nl,
                useRender: function(t=!1) {
                    return (e, i, n, {latestValues: r}, s) => {
                        let o = (rZ(e) ? function(t, e, i, n) {
                            let r = (0,
                            nd.useMemo)( () => {
                                let i = r2();
                                return r1(i, e, r3(n), t.transformTemplate),
                                {
                                    ...i.attrs,
                                    style: {
                                        ...i.style
                                    }
                                }
                            }
                            , [e]);
                            if (t.style) {
                                let e = {};
                                rH(e, t.style, t),
                                r.style = {
                                    ...e,
                                    ...r.style
                                }
                            }
                            return r
                        }
                        : function(t, e) {
                            let i = {}
                              , n = function(t, e) {
                                let i = t.style || {}
                                  , n = {};
                                return rH(n, i, t),
                                Object.assign(n, function({transformTemplate: t}, e) {
                                    return (0,
                                    nd.useMemo)( () => {
                                        let i = rK();
                                        return r_(i, e, t),
                                        Object.assign({}, i.vars, i.style)
                                    }
                                    , [e])
                                }(t, e)),
                                n
                            }(t, e);
                            return t.drag && !1 !== t.dragListener && (i.draggable = !1,
                            n.userSelect = n.WebkitUserSelect = n.WebkitTouchCallout = "none",
                            n.touchAction = !0 === t.drag ? "none" : `pan-${"x" === t.drag ? "y" : "x"}`),
                            void 0 === t.tabIndex && (t.onTap || t.onTapStart || t.whileTap) && (i.tabIndex = 0),
                            i.style = n,
                            i
                        }
                        )(i, r, s, e)
                          , a = function(t, e, i) {
                            let n = {};
                            for (let r in t)
                                ("values" !== r || "object" != typeof t.values) && (rX(r) || !0 === i && rq(r) || !e && !rq(r) || t.draggable && r.startsWith("onDrag")) && (n[r] = t[r]);
                            return n
                        }(i, "string" == typeof e, t)
                          , l = e !== nd.Fragment ? {
                            ...a,
                            ...o,
                            ref: n
                        } : {}
                          , {children: u} = i
                          , h = (0,
                        nd.useMemo)( () => ts(u) ? u.get() : u, [u]);
                        return (0,
                        nd.createElement)(e, {
                            ...l,
                            children: h
                        })
                    }
                }(e),
                createVisualElement: nu,
                Component: t
            })
        }
        ))
    }
    ,
    2889: (t, e, i) => {
        i.d(e, {
            A: () => l
        });
        var n = i(4843);
        let r = t => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
          , s = function() {
            for (var t = arguments.length, e = Array(t), i = 0; i < t; i++)
                e[i] = arguments[i];
            return e.filter( (t, e, i) => !!t && "" !== t.trim() && i.indexOf(t) === e).join(" ").trim()
        };
        var o = {
            xmlns: "http://www.w3.org/2000/svg",
            width: 24,
            height: 24,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: 2,
            strokeLinecap: "round",
            strokeLinejoin: "round"
        };
        let a = (0,
        n.forwardRef)( (t, e) => {
            let {color: i="currentColor", size: r=24, strokeWidth: a=2, absoluteStrokeWidth: l, className: u="", children: h, iconNode: d, ...c} = t;
            return (0,
            n.createElement)("svg", {
                ref: e,
                ...o,
                width: r,
                height: r,
                stroke: i,
                strokeWidth: l ? 24 * Number(a) / Number(r) : a,
                className: s("lucide", u),
                ...c
            }, [...d.map(t => {
                let[e,i] = t;
                return (0,
                n.createElement)(e, i)
            }
            ), ...Array.isArray(h) ? h : [h]])
        }
        )
          , l = (t, e) => {
            let i = (0,
            n.forwardRef)( (i, o) => {
                let {className: l, ...u} = i;
                return (0,
                n.createElement)(a, {
                    ref: o,
                    iconNode: e,
                    className: s("lucide-".concat(r(t)), l),
                    ...u
                })
            }
            );
            return i.displayName = "".concat(t),
            i
        }
    }
    ,
    8181: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        let n = (0,
        i(2889).A)("AlignJustify", [["path", {
            d: "M3 12h18",
            key: "1i2n21"
        }], ["path", {
            d: "M3 18h18",
            key: "1h113x"
        }], ["path", {
            d: "M3 6h18",
            key: "d0wm0j"
        }]])
    }
    ,
    9482: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        let n = (0,
        i(2889).A)("ChevronDown", [["path", {
            d: "m6 9 6 6 6-6",
            key: "qrunsl"
        }]])
    }
    ,
    4873: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        let n = (0,
        i(2889).A)("CircleUser", [["circle", {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }], ["circle", {
            cx: "12",
            cy: "10",
            r: "3",
            key: "ilqhr7"
        }], ["path", {
            d: "M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662",
            key: "154egf"
        }]])
    }
    ,
    9154: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        let n = (0,
        i(2889).A)("Cog", [["path", {
            d: "M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z",
            key: "sobvz5"
        }], ["path", {
            d: "M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
            key: "11i496"
        }], ["path", {
            d: "M12 2v2",
            key: "tus03m"
        }], ["path", {
            d: "M12 22v-2",
            key: "1osdcq"
        }], ["path", {
            d: "m17 20.66-1-1.73",
            key: "eq3orb"
        }], ["path", {
            d: "M11 10.27 7 3.34",
            key: "16pf9h"
        }], ["path", {
            d: "m20.66 17-1.73-1",
            key: "sg0v6f"
        }], ["path", {
            d: "m3.34 7 1.73 1",
            key: "1ulond"
        }], ["path", {
            d: "M14 12h8",
            key: "4f43i9"
        }], ["path", {
            d: "M2 12h2",
            key: "1t8f8n"
        }], ["path", {
            d: "m20.66 7-1.73 1",
            key: "1ow05n"
        }], ["path", {
            d: "m3.34 17 1.73-1",
            key: "nuk764"
        }], ["path", {
            d: "m17 3.34-1 1.73",
            key: "2wel8s"
        }], ["path", {
            d: "m11 13.73-4 6.93",
            key: "794ttg"
        }]])
    }
    ,
    3714: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        let n = (0,
        i(2889).A)("Gauge", [["path", {
            d: "m12 14 4-4",
            key: "9kzdfg"
        }], ["path", {
            d: "M3.34 19a10 10 0 1 1 17.32 0",
            key: "19p75a"
        }]])
    }
    ,
    9544: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        let n = (0,
        i(2889).A)("Globe", [["circle", {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }], ["path", {
            d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
            key: "13o1zl"
        }], ["path", {
            d: "M2 12h20",
            key: "9i4pu4"
        }]])
    }
    ,
    9396: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        let n = (0,
        i(2889).A)("Mail", [["rect", {
            width: "20",
            height: "16",
            x: "2",
            y: "4",
            rx: "2",
            key: "18n3k1"
        }], ["path", {
            d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
            key: "1ocrg3"
        }]])
    }
    ,
    9333: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        let n = (0,
        i(2889).A)("MapPin", [["path", {
            d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
            key: "1r0f0z"
        }], ["circle", {
            cx: "12",
            cy: "10",
            r: "3",
            key: "ilqhr7"
        }]])
    }
    ,
    4207: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        let n = (0,
        i(2889).A)("Megaphone", [["path", {
            d: "m3 11 18-5v12L3 14v-3z",
            key: "n962bs"
        }], ["path", {
            d: "M11.6 16.8a3 3 0 1 1-5.8-1.6",
            key: "1yl0tm"
        }]])
    }
    ,
    9519: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        let n = (0,
        i(2889).A)("MousePointerClick", [["path", {
            d: "M14 4.1 12 6",
            key: "ita8i4"
        }], ["path", {
            d: "m5.1 8-2.9-.8",
            key: "1go3kf"
        }], ["path", {
            d: "m6 12-1.9 2",
            key: "mnht97"
        }], ["path", {
            d: "M7.2 2.2 8 5.1",
            key: "1cfko1"
        }], ["path", {
            d: "M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z",
            key: "s0h3yz"
        }]])
    }
    ,
    3705: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        let n = (0,
        i(2889).A)("Phone", [["path", {
            d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
            key: "foiqr5"
        }]])
    }
    ,
    8120: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        let n = (0,
        i(2889).A)("SquareDashedMousePointer", [["path", {
            d: "M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z",
            key: "xwnzip"
        }], ["path", {
            d: "M5 3a2 2 0 0 0-2 2",
            key: "y57alp"
        }], ["path", {
            d: "M19 3a2 2 0 0 1 2 2",
            key: "18rm91"
        }], ["path", {
            d: "M5 21a2 2 0 0 1-2-2",
            key: "sbafld"
        }], ["path", {
            d: "M9 3h1",
            key: "1yesri"
        }], ["path", {
            d: "M9 21h2",
            key: "1qve2z"
        }], ["path", {
            d: "M14 3h1",
            key: "1ec4yj"
        }], ["path", {
            d: "M3 9v1",
            key: "1r0deq"
        }], ["path", {
            d: "M21 9v2",
            key: "p14lih"
        }], ["path", {
            d: "M3 14v1",
            key: "vnatye"
        }]])
    }
    ,
    2112: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        let n = (0,
        i(2889).A)("TrendingUp", [["polyline", {
            points: "22 7 13.5 15.5 8.5 10.5 2 17",
            key: "126l90"
        }], ["polyline", {
            points: "16 7 22 7 22 13",
            key: "kwv8wd"
        }]])
    }
    ,
    3911: (t, e, i) => {
        i.d(e, {
            A: () => n
        });
        let n = (0,
        i(2889).A)("WandSparkles", [["path", {
            d: "m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",
            key: "ul74o6"
        }], ["path", {
            d: "m14 7 3 3",
            key: "1r5n42"
        }], ["path", {
            d: "M5 6v4",
            key: "ilb8ba"
        }], ["path", {
            d: "M19 14v4",
            key: "blhpug"
        }], ["path", {
            d: "M10 2v2",
            key: "7u0qdc"
        }], ["path", {
            d: "M7 8H3",
            key: "zfb6yr"
        }], ["path", {
            d: "M21 16h-4",
            key: "1cnmox"
        }], ["path", {
            d: "M11 3H9",
            key: "1obp7u"
        }]])
    }
    ,
    2136: (t, e, i) => {
        let n;
        function r(t) {
            return null !== t && "object" == typeof t && "function" == typeof t.start
        }
        function s(t, e, i, n) {
            if ("function" == typeof e || ("string" == typeof e && (e = t.variants && t.variants[e]),
            "function" == typeof e)) {
                let[r,s] = function(t) {
                    let e = [{}, {}];
                    return null == t || t.values.forEach( (t, i) => {
                        e[0][i] = t.get(),
                        e[1][i] = t.getVelocity()
                    }
                    ),
                    e
                }(n);
                e = e(void 0 !== i ? i : t.custom, r, s)
            }
            return e
        }
        function o(t, e, i) {
            let n = t.getProps();
            return s(n, e, void 0 !== i ? i : n.custom, t)
        }
        function a(t, e) {
            return t ? t[e] || t.default || t : void 0
        }
        i.d(e, {
            P: () => sm
        });
        let l = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
          , u = new Set(l)
          , h = new Set(["width", "height", "top", "left", "right", "bottom", ...l])
          , d = t => Array.isArray(t)
          , c = t => !!(t && "object" == typeof t && t.mix && t.toValue)
          , p = t => d(t) ? t[t.length - 1] || 0 : t
          , m = {
            skipAnimations: !1,
            useManualTiming: !1
        }
          , f = t => t
          , v = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"]
          , g = {
            value: null,
            addProjectionMetrics: null
        };
        function y(t, e) {
            let i = !1
              , n = !0
              , r = {
                delta: 0,
                timestamp: 0,
                isProcessing: !1
            }
              , s = () => i = !0
              , o = v.reduce( (t, i) => (t[i] = function(t, e) {
                let i = new Set
                  , n = new Set
                  , r = !1
                  , s = !1
                  , o = new WeakSet
                  , a = {
                    delta: 0,
                    timestamp: 0,
                    isProcessing: !1
                }
                  , l = 0;
                function u(e) {
                    o.has(e) && (h.schedule(e),
                    t()),
                    l++,
                    e(a)
                }
                let h = {
                    schedule: (t, e=!1, s=!1) => {
                        let a = s && r ? i : n;
                        return e && o.add(t),
                        a.has(t) || a.add(t),
                        t
                    }
                    ,
                    cancel: t => {
                        n.delete(t),
                        o.delete(t)
                    }
                    ,
                    process: t => {
                        if (a = t,
                        r) {
                            s = !0;
                            return
                        }
                        r = !0,
                        [i,n] = [n, i],
                        i.forEach(u),
                        e && g.value && g.value.frameloop[e].push(l),
                        l = 0,
                        i.clear(),
                        r = !1,
                        s && (s = !1,
                        h.process(t))
                    }
                };
                return h
            }(s, e ? i : void 0),
            t), {})
              , {read: a, resolveKeyframes: l, update: u, preRender: h, render: d, postRender: c} = o
              , p = () => {
                let s = m.useManualTiming ? r.timestamp : performance.now();
                i = !1,
                m.useManualTiming || (r.delta = n ? 1e3 / 60 : Math.max(Math.min(s - r.timestamp, 40), 1)),
                r.timestamp = s,
                r.isProcessing = !0,
                a.process(r),
                l.process(r),
                u.process(r),
                h.process(r),
                d.process(r),
                c.process(r),
                r.isProcessing = !1,
                i && e && (n = !1,
                t(p))
            }
              , f = () => {
                i = !0,
                n = !0,
                r.isProcessing || t(p)
            }
            ;
            return {
                schedule: v.reduce( (t, e) => {
                    let n = o[e];
                    return t[e] = (t, e=!1, r=!1) => (i || f(),
                    n.schedule(t, e, r)),
                    t
                }
                , {}),
                cancel: t => {
                    for (let e = 0; e < v.length; e++)
                        o[v[e]].cancel(t)
                }
                ,
                state: r,
                steps: o
            }
        }
        let {schedule: x, cancel: b, state: w, steps: P} = y("undefined" != typeof requestAnimationFrame ? requestAnimationFrame : f, !0);
        function T() {
            n = void 0
        }
        let S = {
            now: () => (void 0 === n && S.set(w.isProcessing || m.useManualTiming ? w.timestamp : performance.now()),
            n),
            set: t => {
                n = t,
                queueMicrotask(T)
            }
        };
        function A(t, e) {
            -1 === t.indexOf(e) && t.push(e)
        }
        function E(t, e) {
            let i = t.indexOf(e);
            i > -1 && t.splice(i, 1)
        }
        class M {
            constructor() {
                this.subscriptions = []
            }
            add(t) {
                return A(this.subscriptions, t),
                () => E(this.subscriptions, t)
            }
            notify(t, e, i) {
                let n = this.subscriptions.length;
                if (n) {
                    if (1 === n)
                        this.subscriptions[0](t, e, i);
                    else
                        for (let r = 0; r < n; r++) {
                            let n = this.subscriptions[r];
                            n && n(t, e, i)
                        }
                }
            }
            getSize() {
                return this.subscriptions.length
            }
            clear() {
                this.subscriptions.length = 0
            }
        }
        let k = t => !isNaN(parseFloat(t))
          , C = {
            current: void 0
        };
        class R {
            constructor(t, e={}) {
                this.version = "12.4.3",
                this.canTrackVelocity = null,
                this.events = {},
                this.updateAndNotify = (t, e=!0) => {
                    let i = S.now();
                    this.updatedAt !== i && this.setPrevFrameValue(),
                    this.prev = this.current,
                    this.setCurrent(t),
                    this.current !== this.prev && this.events.change && this.events.change.notify(this.current),
                    e && this.events.renderRequest && this.events.renderRequest.notify(this.current)
                }
                ,
                this.hasAnimated = !1,
                this.setCurrent(t),
                this.owner = e.owner
            }
            setCurrent(t) {
                this.current = t,
                this.updatedAt = S.now(),
                null === this.canTrackVelocity && void 0 !== t && (this.canTrackVelocity = k(this.current))
            }
            setPrevFrameValue(t=this.current) {
                this.prevFrameValue = t,
                this.prevUpdatedAt = this.updatedAt
            }
            onChange(t) {
                return this.on("change", t)
            }
            on(t, e) {
                this.events[t] || (this.events[t] = new M);
                let i = this.events[t].add(e);
                return "change" === t ? () => {
                    i(),
                    x.read( () => {
                        this.events.change.getSize() || this.stop()
                    }
                    )
                }
                : i
            }
            clearListeners() {
                for (let t in this.events)
                    this.events[t].clear()
            }
            attach(t, e) {
                this.passiveEffect = t,
                this.stopPassiveEffect = e
            }
            set(t, e=!0) {
                e && this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t, e)
            }
            setWithVelocity(t, e, i) {
                this.set(e),
                this.prev = void 0,
                this.prevFrameValue = t,
                this.prevUpdatedAt = this.updatedAt - i
            }
            jump(t, e=!0) {
                this.updateAndNotify(t),
                this.prev = t,
                this.prevUpdatedAt = this.prevFrameValue = void 0,
                e && this.stop(),
                this.stopPassiveEffect && this.stopPassiveEffect()
            }
            get() {
                return C.current && C.current.push(this),
                this.current
            }
            getPrevious() {
                return this.prev
            }
            getVelocity() {
                var t;
                let e = S.now();
                if (!this.canTrackVelocity || void 0 === this.prevFrameValue || e - this.updatedAt > 30)
                    return 0;
                let i = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
                return t = parseFloat(this.current) - parseFloat(this.prevFrameValue),
                i ? 1e3 / i * t : 0
            }
            start(t) {
                return this.stop(),
                new Promise(e => {
                    this.hasAnimated = !0,
                    this.animation = t(e),
                    this.events.animationStart && this.events.animationStart.notify()
                }
                ).then( () => {
                    this.events.animationComplete && this.events.animationComplete.notify(),
                    this.clearAnimation()
                }
                )
            }
            stop() {
                this.animation && (this.animation.stop(),
                this.events.animationCancel && this.events.animationCancel.notify()),
                this.clearAnimation()
            }
            isAnimating() {
                return !!this.animation
            }
            clearAnimation() {
                delete this.animation
            }
            destroy() {
                this.clearListeners(),
                this.stop(),
                this.stopPassiveEffect && this.stopPassiveEffect()
            }
        }
        function V(t, e) {
            return new R(t,e)
        }
        let D = t => !!(t && t.getVelocity);
        function j(t, e) {
            let i = t.getValue("willChange");
            if (D(i) && i.add)
                return i.add(e)
        }
        let L = t => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase()
          , F = "data-" + L("framerAppearId");
        function O(t) {
            let e;
            return () => (void 0 === e && (e = t()),
            e)
        }
        let B = O( () => void 0 !== window.ScrollTimeline);
        class I {
            constructor(t) {
                this.stop = () => this.runAll("stop"),
                this.animations = t.filter(Boolean)
            }
            get finished() {
                return Promise.all(this.animations.map(t => "finished"in t ? t.finished : t))
            }
            getAll(t) {
                return this.animations[0][t]
            }
            setAll(t, e) {
                for (let i = 0; i < this.animations.length; i++)
                    this.animations[i][t] = e
            }
            attachTimeline(t, e) {
                let i = this.animations.map(i => B() && i.attachTimeline ? i.attachTimeline(t) : "function" == typeof e ? e(i) : void 0);
                return () => {
                    i.forEach( (t, e) => {
                        t && t(),
                        this.animations[e].stop()
                    }
                    )
                }
            }
            get time() {
                return this.getAll("time")
            }
            set time(t) {
                this.setAll("time", t)
            }
            get speed() {
                return this.getAll("speed")
            }
            set speed(t) {
                this.setAll("speed", t)
            }
            get startTime() {
                return this.getAll("startTime")
            }
            get duration() {
                let t = 0;
                for (let e = 0; e < this.animations.length; e++)
                    t = Math.max(t, this.animations[e].duration);
                return t
            }
            runAll(t) {
                this.animations.forEach(e => e[t]())
            }
            flatten() {
                this.runAll("flatten")
            }
            play() {
                this.runAll("play")
            }
            pause() {
                this.runAll("pause")
            }
            cancel() {
                this.runAll("cancel")
            }
            complete() {
                this.runAll("complete")
            }
        }
        class N extends I {
            then(t, e) {
                return Promise.all(this.animations).then(t).catch(e)
            }
        }
        let U = t => 1e3 * t
          , z = t => t / 1e3
          , $ = {
            current: !1
        };
        function W(t) {
            return "function" == typeof t
        }
        function _(t, e) {
            t.timeline = e,
            t.onfinish = null
        }
        let K = t => Array.isArray(t) && "number" == typeof t[0]
          , H = {
            linearEasing: void 0
        }
          , Y = function(t, e) {
            let i = O(t);
            return () => {
                var t;
                return null !== (t = H[e]) && void 0 !== t ? t : i()
            }
        }( () => {
            try {
                document.createElement("div").animate({
                    opacity: 0
                }, {
                    easing: "linear(0, 1)"
                })
            } catch (t) {
                return !1
            }
            return !0
        }
        , "linearEasing")
          , q = (t, e, i) => {
            let n = e - t;
            return 0 === n ? 1 : (i - t) / n
        }
          , X = (t, e, i=10) => {
            let n = ""
              , r = Math.max(Math.round(e / i), 2);
            for (let e = 0; e < r; e++)
                n += t(q(0, r - 1, e)) + ", ";
            return `linear(${n.substring(0, n.length - 2)})`
        }
          , G = ([t,e,i,n]) => `cubic-bezier(${t}, ${e}, ${i}, ${n})`
          , Z = {
            linear: "linear",
            ease: "ease",
            easeIn: "ease-in",
            easeOut: "ease-out",
            easeInOut: "ease-in-out",
            circIn: G([0, .65, .55, 1]),
            circOut: G([.55, 0, 1, .45]),
            backIn: G([.31, .01, .66, -.59]),
            backOut: G([.33, 1.53, .69, .99])
        }
          , J = (t, e, i) => (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;
        function Q(t, e, i, n) {
            if (t === e && i === n)
                return f;
            let r = e => (function(t, e, i, n, r) {
                let s, o;
                let a = 0;
                do
                    (s = J(o = e + (i - e) / 2, n, r) - t) > 0 ? i = o : e = o;
                while (Math.abs(s) > 1e-7 && ++a < 12);
                return o
            }
            )(e, 0, 1, t, i);
            return t => 0 === t || 1 === t ? t : J(r(t), e, n)
        }
        let tt = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2
          , te = t => e => 1 - t(1 - e)
          , ti = Q(.33, 1.53, .69, .99)
          , tn = te(ti)
          , tr = tt(tn)
          , ts = t => (t *= 2) < 1 ? .5 * tn(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
          , to = t => 1 - Math.sin(Math.acos(t))
          , ta = te(to)
          , tl = tt(to)
          , tu = t => /^0[^.\s]+$/u.test(t)
          , th = (t, e, i) => i > e ? e : i < t ? t : i
          , td = {
            test: t => "number" == typeof t,
            parse: parseFloat,
            transform: t => t
        }
          , tc = {
            ...td,
            transform: t => th(0, 1, t)
        }
          , tp = {
            ...td,
            default: 1
        }
          , tm = t => Math.round(1e5 * t) / 1e5
          , tf = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu
          , tv = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu
          , tg = (t, e) => i => !!("string" == typeof i && tv.test(i) && i.startsWith(t) || e && null != i && Object.prototype.hasOwnProperty.call(i, e))
          , ty = (t, e, i) => n => {
            if ("string" != typeof n)
                return n;
            let[r,s,o,a] = n.match(tf);
            return {
                [t]: parseFloat(r),
                [e]: parseFloat(s),
                [i]: parseFloat(o),
                alpha: void 0 !== a ? parseFloat(a) : 1
            }
        }
          , tx = t => th(0, 255, t)
          , tb = {
            ...td,
            transform: t => Math.round(tx(t))
        }
          , tw = {
            test: tg("rgb", "red"),
            parse: ty("red", "green", "blue"),
            transform: ({red: t, green: e, blue: i, alpha: n=1}) => "rgba(" + tb.transform(t) + ", " + tb.transform(e) + ", " + tb.transform(i) + ", " + tm(tc.transform(n)) + ")"
        }
          , tP = {
            test: tg("#"),
            parse: function(t) {
                let e = ""
                  , i = ""
                  , n = ""
                  , r = "";
                return t.length > 5 ? (e = t.substring(1, 3),
                i = t.substring(3, 5),
                n = t.substring(5, 7),
                r = t.substring(7, 9)) : (e = t.substring(1, 2),
                i = t.substring(2, 3),
                n = t.substring(3, 4),
                r = t.substring(4, 5),
                e += e,
                i += i,
                n += n,
                r += r),
                {
                    red: parseInt(e, 16),
                    green: parseInt(i, 16),
                    blue: parseInt(n, 16),
                    alpha: r ? parseInt(r, 16) / 255 : 1
                }
            },
            transform: tw.transform
        }
          , tT = t => ({
            test: e => "string" == typeof e && e.endsWith(t) && 1 === e.split(" ").length,
            parse: parseFloat,
            transform: e => `${e}${t}`
        })
          , tS = tT("deg")
          , tA = tT("%")
          , tE = tT("px")
          , tM = tT("vh")
          , tk = tT("vw")
          , tC = {
            ...tA,
            parse: t => tA.parse(t) / 100,
            transform: t => tA.transform(100 * t)
        }
          , tR = {
            test: tg("hsl", "hue"),
            parse: ty("hue", "saturation", "lightness"),
            transform: ({hue: t, saturation: e, lightness: i, alpha: n=1}) => "hsla(" + Math.round(t) + ", " + tA.transform(tm(e)) + ", " + tA.transform(tm(i)) + ", " + tm(tc.transform(n)) + ")"
        }
          , tV = {
            test: t => tw.test(t) || tP.test(t) || tR.test(t),
            parse: t => tw.test(t) ? tw.parse(t) : tR.test(t) ? tR.parse(t) : tP.parse(t),
            transform: t => "string" == typeof t ? t : t.hasOwnProperty("red") ? tw.transform(t) : tR.transform(t)
        }
          , tD = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu
          , tj = "number"
          , tL = "color"
          , tF = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
        function tO(t) {
            let e = t.toString()
              , i = []
              , n = {
                color: [],
                number: [],
                var: []
            }
              , r = []
              , s = 0
              , o = e.replace(tF, t => (tV.test(t) ? (n.color.push(s),
            r.push(tL),
            i.push(tV.parse(t))) : t.startsWith("var(") ? (n.var.push(s),
            r.push("var"),
            i.push(t)) : (n.number.push(s),
            r.push(tj),
            i.push(parseFloat(t))),
            ++s,
            "${}")).split("${}");
            return {
                values: i,
                split: o,
                indexes: n,
                types: r
            }
        }
        function tB(t) {
            return tO(t).values
        }
        function tI(t) {
            let {split: e, types: i} = tO(t)
              , n = e.length;
            return t => {
                let r = "";
                for (let s = 0; s < n; s++)
                    if (r += e[s],
                    void 0 !== t[s]) {
                        let e = i[s];
                        e === tj ? r += tm(t[s]) : e === tL ? r += tV.transform(t[s]) : r += t[s]
                    }
                return r
            }
        }
        let tN = t => "number" == typeof t ? 0 : t
          , tU = {
            test: function(t) {
                var e, i;
                return isNaN(t) && "string" == typeof t && ((null === (e = t.match(tf)) || void 0 === e ? void 0 : e.length) || 0) + ((null === (i = t.match(tD)) || void 0 === i ? void 0 : i.length) || 0) > 0
            },
            parse: tB,
            createTransformer: tI,
            getAnimatableNone: function(t) {
                let e = tB(t);
                return tI(t)(e.map(tN))
            }
        }
          , tz = new Set(["brightness", "contrast", "saturate", "opacity"]);
        function t$(t) {
            let[e,i] = t.slice(0, -1).split("(");
            if ("drop-shadow" === e)
                return t;
            let[n] = i.match(tf) || [];
            if (!n)
                return t;
            let r = i.replace(n, "")
              , s = tz.has(e) ? 1 : 0;
            return n !== i && (s *= 100),
            e + "(" + s + r + ")"
        }
        let tW = /\b([a-z-]*)\(.*?\)/gu
          , t_ = {
            ...tU,
            getAnimatableNone: t => {
                let e = t.match(tW);
                return e ? e.map(t$).join(" ") : t
            }
        }
          , tK = {
            ...td,
            transform: Math.round
        }
          , tH = {
            borderWidth: tE,
            borderTopWidth: tE,
            borderRightWidth: tE,
            borderBottomWidth: tE,
            borderLeftWidth: tE,
            borderRadius: tE,
            radius: tE,
            borderTopLeftRadius: tE,
            borderTopRightRadius: tE,
            borderBottomRightRadius: tE,
            borderBottomLeftRadius: tE,
            width: tE,
            maxWidth: tE,
            height: tE,
            maxHeight: tE,
            top: tE,
            right: tE,
            bottom: tE,
            left: tE,
            padding: tE,
            paddingTop: tE,
            paddingRight: tE,
            paddingBottom: tE,
            paddingLeft: tE,
            margin: tE,
            marginTop: tE,
            marginRight: tE,
            marginBottom: tE,
            marginLeft: tE,
            backgroundPositionX: tE,
            backgroundPositionY: tE,
            rotate: tS,
            rotateX: tS,
            rotateY: tS,
            rotateZ: tS,
            scale: tp,
            scaleX: tp,
            scaleY: tp,
            scaleZ: tp,
            skew: tS,
            skewX: tS,
            skewY: tS,
            distance: tE,
            translateX: tE,
            translateY: tE,
            translateZ: tE,
            x: tE,
            y: tE,
            z: tE,
            perspective: tE,
            transformPerspective: tE,
            opacity: tc,
            originX: tC,
            originY: tC,
            originZ: tE,
            zIndex: tK,
            size: tE,
            fillOpacity: tc,
            strokeOpacity: tc,
            numOctaves: tK
        }
          , tY = {
            ...tH,
            color: tV,
            backgroundColor: tV,
            outlineColor: tV,
            fill: tV,
            stroke: tV,
            borderColor: tV,
            borderTopColor: tV,
            borderRightColor: tV,
            borderBottomColor: tV,
            borderLeftColor: tV,
            filter: t_,
            WebkitFilter: t_
        }
          , tq = t => tY[t];
        function tX(t, e) {
            let i = tq(t);
            return i !== t_ && (i = tU),
            i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
        }
        let tG = new Set(["auto", "none", "0"])
          , tZ = t => t === td || t === tE
          , tJ = (t, e) => parseFloat(t.split(", ")[e])
          , tQ = (t, e) => (i, {transform: n}) => {
            if ("none" === n || !n)
                return 0;
            let r = n.match(/^matrix3d\((.+)\)$/u);
            if (r)
                return tJ(r[1], e);
            {
                let e = n.match(/^matrix\((.+)\)$/u);
                return e ? tJ(e[1], t) : 0
            }
        }
          , t0 = new Set(["x", "y", "z"])
          , t1 = l.filter(t => !t0.has(t))
          , t2 = {
            width: ({x: t}, {paddingLeft: e="0", paddingRight: i="0"}) => t.max - t.min - parseFloat(e) - parseFloat(i),
            height: ({y: t}, {paddingTop: e="0", paddingBottom: i="0"}) => t.max - t.min - parseFloat(e) - parseFloat(i),
            top: (t, {top: e}) => parseFloat(e),
            left: (t, {left: e}) => parseFloat(e),
            bottom: ({y: t}, {top: e}) => parseFloat(e) + (t.max - t.min),
            right: ({x: t}, {left: e}) => parseFloat(e) + (t.max - t.min),
            x: tQ(4, 13),
            y: tQ(5, 14)
        };
        t2.translateX = t2.x,
        t2.translateY = t2.y;
        let t3 = new Set
          , t5 = !1
          , t4 = !1;
        function t9() {
            if (t4) {
                let t = Array.from(t3).filter(t => t.needsMeasurement)
                  , e = new Set(t.map(t => t.element))
                  , i = new Map;
                e.forEach(t => {
                    let e = function(t) {
                        let e = [];
                        return t1.forEach(i => {
                            let n = t.getValue(i);
                            void 0 !== n && (e.push([i, n.get()]),
                            n.set(i.startsWith("scale") ? 1 : 0))
                        }
                        ),
                        e
                    }(t);
                    e.length && (i.set(t, e),
                    t.render())
                }
                ),
                t.forEach(t => t.measureInitialState()),
                e.forEach(t => {
                    t.render();
                    let e = i.get(t);
                    e && e.forEach( ([e,i]) => {
                        var n;
                        null === (n = t.getValue(e)) || void 0 === n || n.set(i)
                    }
                    )
                }
                ),
                t.forEach(t => t.measureEndState()),
                t.forEach(t => {
                    void 0 !== t.suspendedScrollY && window.scrollTo(0, t.suspendedScrollY)
                }
                )
            }
            t4 = !1,
            t5 = !1,
            t3.forEach(t => t.complete()),
            t3.clear()
        }
        function t8() {
            t3.forEach(t => {
                t.readKeyframes(),
                t.needsMeasurement && (t4 = !0)
            }
            )
        }
        class t6 {
            constructor(t, e, i, n, r, s=!1) {
                this.isComplete = !1,
                this.isAsync = !1,
                this.needsMeasurement = !1,
                this.isScheduled = !1,
                this.unresolvedKeyframes = [...t],
                this.onComplete = e,
                this.name = i,
                this.motionValue = n,
                this.element = r,
                this.isAsync = s
            }
            scheduleResolve() {
                this.isScheduled = !0,
                this.isAsync ? (t3.add(this),
                t5 || (t5 = !0,
                x.read(t8),
                x.resolveKeyframes(t9))) : (this.readKeyframes(),
                this.complete())
            }
            readKeyframes() {
                let {unresolvedKeyframes: t, name: e, element: i, motionValue: n} = this;
                for (let r = 0; r < t.length; r++)
                    if (null === t[r]) {
                        if (0 === r) {
                            let r = null == n ? void 0 : n.get()
                              , s = t[t.length - 1];
                            if (void 0 !== r)
                                t[0] = r;
                            else if (i && e) {
                                let n = i.readValue(e, s);
                                null != n && (t[0] = n)
                            }
                            void 0 === t[0] && (t[0] = s),
                            n && void 0 === r && n.set(t[0])
                        } else
                            t[r] = t[r - 1]
                    }
            }
            setFinalKeyframe() {}
            measureInitialState() {}
            renderEndStyles() {}
            measureEndState() {}
            complete() {
                this.isComplete = !0,
                this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
                t3.delete(this)
            }
            cancel() {
                this.isComplete || (this.isScheduled = !1,
                t3.delete(this))
            }
            resume() {
                this.isComplete || this.scheduleResolve()
            }
        }
        let t7 = t => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t)
          , et = t => e => "string" == typeof e && e.startsWith(t)
          , ee = et("--")
          , ei = et("var(--")
          , en = t => !!ei(t) && er.test(t.split("/*")[0].trim())
          , er = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu
          , es = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
          , eo = t => e => e.test(t)
          , ea = [td, tE, tA, tS, tk, tM, {
            test: t => "auto" === t,
            parse: t => t
        }]
          , el = t => ea.find(eo(t));
        class eu extends t6 {
            constructor(t, e, i, n, r) {
                super(t, e, i, n, r, !0)
            }
            readKeyframes() {
                let {unresolvedKeyframes: t, element: e, name: i} = this;
                if (!e || !e.current)
                    return;
                super.readKeyframes();
                for (let i = 0; i < t.length; i++) {
                    let n = t[i];
                    if ("string" == typeof n && en(n = n.trim())) {
                        let r = function t(e, i, n=1) {
                            f(n <= 4, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
                            let[r,s] = function(t) {
                                let e = es.exec(t);
                                if (!e)
                                    return [, ];
                                let[,i,n,r] = e;
                                return [`--${null != i ? i : n}`, r]
                            }(e);
                            if (!r)
                                return;
                            let o = window.getComputedStyle(i).getPropertyValue(r);
                            if (o) {
                                let t = o.trim();
                                return t7(t) ? parseFloat(t) : t
                            }
                            return en(s) ? t(s, i, n + 1) : s
                        }(n, e.current);
                        void 0 !== r && (t[i] = r),
                        i === t.length - 1 && (this.finalKeyframe = n)
                    }
                }
                if (this.resolveNoneKeyframes(),
                !h.has(i) || 2 !== t.length)
                    return;
                let[n,r] = t
                  , s = el(n)
                  , o = el(r);
                if (s !== o) {
                    if (tZ(s) && tZ(o))
                        for (let e = 0; e < t.length; e++) {
                            let i = t[e];
                            "string" == typeof i && (t[e] = parseFloat(i))
                        }
                    else
                        this.needsMeasurement = !0
                }
            }
            resolveNoneKeyframes() {
                let {unresolvedKeyframes: t, name: e} = this
                  , i = [];
                for (let e = 0; e < t.length; e++) {
                    var n;
                    ("number" == typeof (n = t[e]) ? 0 === n : null === n || "none" === n || "0" === n || tu(n)) && i.push(e)
                }
                i.length && function(t, e, i) {
                    let n, r = 0;
                    for (; r < t.length && !n; ) {
                        let e = t[r];
                        "string" == typeof e && !tG.has(e) && tO(e).values.length && (n = t[r]),
                        r++
                    }
                    if (n && i)
                        for (let r of e)
                            t[r] = tX(i, n)
                }(t, i, e)
            }
            measureInitialState() {
                let {element: t, unresolvedKeyframes: e, name: i} = this;
                if (!t || !t.current)
                    return;
                "height" === i && (this.suspendedScrollY = window.pageYOffset),
                this.measuredOrigin = t2[i](t.measureViewportBox(), window.getComputedStyle(t.current)),
                e[0] = this.measuredOrigin;
                let n = e[e.length - 1];
                void 0 !== n && t.getValue(i, n).jump(n, !1)
            }
            measureEndState() {
                var t;
                let {element: e, name: i, unresolvedKeyframes: n} = this;
                if (!e || !e.current)
                    return;
                let r = e.getValue(i);
                r && r.jump(this.measuredOrigin, !1);
                let s = n.length - 1
                  , o = n[s];
                n[s] = t2[i](e.measureViewportBox(), window.getComputedStyle(e.current)),
                null !== o && void 0 === this.finalKeyframe && (this.finalKeyframe = o),
                (null === (t = this.removedTransforms) || void 0 === t ? void 0 : t.length) && this.removedTransforms.forEach( ([t,i]) => {
                    e.getValue(t).set(i)
                }
                ),
                this.resolveNoneKeyframes()
            }
        }
        let eh = (t, e) => "zIndex" !== e && !!("number" == typeof t || Array.isArray(t) || "string" == typeof t && (tU.test(t) || "0" === t) && !t.startsWith("url("))
          , ed = t => null !== t;
        function ec(t, {repeat: e, repeatType: i="loop"}, n) {
            let r = t.filter(ed)
              , s = e && "loop" !== i && e % 2 == 1 ? 0 : r.length - 1;
            return s && void 0 !== n ? n : r[s]
        }
        class ep {
            constructor({autoplay: t=!0, delay: e=0, type: i="keyframes", repeat: n=0, repeatDelay: r=0, repeatType: s="loop", ...o}) {
                this.isStopped = !1,
                this.hasAttemptedResolve = !1,
                this.createdAt = S.now(),
                this.options = {
                    autoplay: t,
                    delay: e,
                    type: i,
                    repeat: n,
                    repeatDelay: r,
                    repeatType: s,
                    ...o
                },
                this.updateFinishedPromise()
            }
            calcStartTime() {
                return this.resolvedAt && this.resolvedAt - this.createdAt > 40 ? this.resolvedAt : this.createdAt
            }
            get resolved() {
                return this._resolved || this.hasAttemptedResolve || (t8(),
                t9()),
                this._resolved
            }
            onKeyframesResolved(t, e) {
                this.resolvedAt = S.now(),
                this.hasAttemptedResolve = !0;
                let {name: i, type: n, velocity: r, delay: s, onComplete: o, onUpdate: a, isGenerator: l} = this.options;
                if (!l && !function(t, e, i, n) {
                    let r = t[0];
                    if (null === r)
                        return !1;
                    if ("display" === e || "visibility" === e)
                        return !0;
                    let s = t[t.length - 1]
                      , o = eh(r, e)
                      , a = eh(s, e);
                    return f(o === a, `You are trying to animate ${e} from "${r}" to "${s}". ${r} is not an animatable value - to enable this animation set ${r} to a value animatable to ${s} via the \`style\` property.`),
                    !!o && !!a && (function(t) {
                        let e = t[0];
                        if (1 === t.length)
                            return !0;
                        for (let i = 0; i < t.length; i++)
                            if (t[i] !== e)
                                return !0
                    }(t) || ("spring" === i || W(i)) && n)
                }(t, i, n, r)) {
                    if ($.current || !s) {
                        a && a(ec(t, this.options, e)),
                        o && o(),
                        this.resolveFinishedPromise();
                        return
                    }
                    this.options.duration = 0
                }
                let u = this.initPlayback(t, e);
                !1 !== u && (this._resolved = {
                    keyframes: t,
                    finalKeyframe: e,
                    ...u
                },
                this.onPostResolved())
            }
            onPostResolved() {}
            then(t, e) {
                return this.currentFinishedPromise.then(t, e)
            }
            flatten() {
                this.options.type = "keyframes",
                this.options.ease = "linear"
            }
            updateFinishedPromise() {
                this.currentFinishedPromise = new Promise(t => {
                    this.resolveFinishedPromise = t
                }
                )
            }
        }
        function em(t) {
            let e = 0
              , i = t.next(e);
            for (; !i.done && e < 2e4; )
                e += 50,
                i = t.next(e);
            return e >= 2e4 ? 1 / 0 : e
        }
        let ef = {
            layout: 0,
            mainThread: 0,
            waapi: 0
        }
          , ev = (t, e, i) => t + (e - t) * i;
        function eg(t, e, i) {
            return (i < 0 && (i += 1),
            i > 1 && (i -= 1),
            i < 1 / 6) ? t + (e - t) * 6 * i : i < .5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t
        }
        function ey(t, e) {
            return i => i > 0 ? e : t
        }
        let ex = (t, e, i) => {
            let n = t * t
              , r = i * (e * e - n) + n;
            return r < 0 ? 0 : Math.sqrt(r)
        }
          , eb = [tP, tw, tR]
          , ew = t => eb.find(e => e.test(t));
        function eP(t) {
            let e = ew(t);
            if (f(!!e, `'${t}' is not an animatable color. Use the equivalent color code instead.`),
            !e)
                return !1;
            let i = e.parse(t);
            return e === tR && (i = function({hue: t, saturation: e, lightness: i, alpha: n}) {
                t /= 360,
                i /= 100;
                let r = 0
                  , s = 0
                  , o = 0;
                if (e /= 100) {
                    let n = i < .5 ? i * (1 + e) : i + e - i * e
                      , a = 2 * i - n;
                    r = eg(a, n, t + 1 / 3),
                    s = eg(a, n, t),
                    o = eg(a, n, t - 1 / 3)
                } else
                    r = s = o = i;
                return {
                    red: Math.round(255 * r),
                    green: Math.round(255 * s),
                    blue: Math.round(255 * o),
                    alpha: n
                }
            }(i)),
            i
        }
        let eT = (t, e) => {
            let i = eP(t)
              , n = eP(e);
            if (!i || !n)
                return ey(t, e);
            let r = {
                ...i
            };
            return t => (r.red = ex(i.red, n.red, t),
            r.green = ex(i.green, n.green, t),
            r.blue = ex(i.blue, n.blue, t),
            r.alpha = ev(i.alpha, n.alpha, t),
            tw.transform(r))
        }
          , eS = (t, e) => i => e(t(i))
          , eA = (...t) => t.reduce(eS)
          , eE = new Set(["none", "hidden"]);
        function eM(t, e) {
            return i => ev(t, e, i)
        }
        function ek(t) {
            return "number" == typeof t ? eM : "string" == typeof t ? en(t) ? ey : tV.test(t) ? eT : eV : Array.isArray(t) ? eC : "object" == typeof t ? tV.test(t) ? eT : eR : ey
        }
        function eC(t, e) {
            let i = [...t]
              , n = i.length
              , r = t.map( (t, i) => ek(t)(t, e[i]));
            return t => {
                for (let e = 0; e < n; e++)
                    i[e] = r[e](t);
                return i
            }
        }
        function eR(t, e) {
            let i = {
                ...t,
                ...e
            }
              , n = {};
            for (let r in i)
                void 0 !== t[r] && void 0 !== e[r] && (n[r] = ek(t[r])(t[r], e[r]));
            return t => {
                for (let e in n)
                    i[e] = n[e](t);
                return i
            }
        }
        let eV = (t, e) => {
            let i = tU.createTransformer(e)
              , n = tO(t)
              , r = tO(e);
            return n.indexes.var.length === r.indexes.var.length && n.indexes.color.length === r.indexes.color.length && n.indexes.number.length >= r.indexes.number.length ? eE.has(t) && !r.values.length || eE.has(e) && !n.values.length ? function(t, e) {
                return eE.has(t) ? i => i <= 0 ? t : e : i => i >= 1 ? e : t
            }(t, e) : eA(eC(function(t, e) {
                var i;
                let n = []
                  , r = {
                    color: 0,
                    var: 0,
                    number: 0
                };
                for (let s = 0; s < e.values.length; s++) {
                    let o = e.types[s]
                      , a = t.indexes[o][r[o]]
                      , l = null !== (i = t.values[a]) && void 0 !== i ? i : 0;
                    n[s] = l,
                    r[o]++
                }
                return n
            }(n, r), r.values), i) : (f(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),
            ey(t, e))
        }
        ;
        function eD(t, e, i) {
            return "number" == typeof t && "number" == typeof e && "number" == typeof i ? ev(t, e, i) : ek(t)(t, e)
        }
        function ej(t, e, i) {
            var n, r;
            let s = Math.max(e - 5, 0);
            return n = i - t(s),
            (r = e - s) ? 1e3 / r * n : 0
        }
        let eL = {
            stiffness: 100,
            damping: 10,
            mass: 1,
            velocity: 0,
            duration: 800,
            bounce: .3,
            visualDuration: .3,
            restSpeed: {
                granular: .01,
                default: 2
            },
            restDelta: {
                granular: .005,
                default: .5
            },
            minDuration: .01,
            maxDuration: 10,
            minDamping: .05,
            maxDamping: 1
        };
        function eF(t, e) {
            return t * Math.sqrt(1 - e * e)
        }
        let eO = ["duration", "bounce"]
          , eB = ["stiffness", "damping", "mass"];
        function eI(t, e) {
            return e.some(e => void 0 !== t[e])
        }
        function eN(t=eL.visualDuration, e=eL.bounce) {
            let i;
            let n = "object" != typeof t ? {
                visualDuration: t,
                keyframes: [0, 1],
                bounce: e
            } : t
              , {restSpeed: r, restDelta: s} = n
              , o = n.keyframes[0]
              , a = n.keyframes[n.keyframes.length - 1]
              , l = {
                done: !1,
                value: o
            }
              , {stiffness: u, damping: h, mass: d, duration: c, velocity: p, isResolvedFromDuration: m} = function(t) {
                let e = {
                    velocity: eL.velocity,
                    stiffness: eL.stiffness,
                    damping: eL.damping,
                    mass: eL.mass,
                    isResolvedFromDuration: !1,
                    ...t
                };
                if (!eI(t, eB) && eI(t, eO)) {
                    if (t.visualDuration) {
                        let i = 2 * Math.PI / (1.2 * t.visualDuration)
                          , n = i * i
                          , r = 2 * th(.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(n);
                        e = {
                            ...e,
                            mass: eL.mass,
                            stiffness: n,
                            damping: r
                        }
                    } else {
                        let i = function({duration: t=eL.duration, bounce: e=eL.bounce, velocity: i=eL.velocity, mass: n=eL.mass}) {
                            let r, s;
                            f(t <= U(eL.maxDuration), "Spring duration must be 10 seconds or less");
                            let o = 1 - e;
                            o = th(eL.minDamping, eL.maxDamping, o),
                            t = th(eL.minDuration, eL.maxDuration, z(t)),
                            o < 1 ? (r = e => {
                                let n = e * o
                                  , r = n * t;
                                return .001 - (n - i) / eF(e, o) * Math.exp(-r)
                            }
                            ,
                            s = e => {
                                let n = e * o * t
                                  , s = Math.pow(o, 2) * Math.pow(e, 2) * t
                                  , a = Math.exp(-n)
                                  , l = eF(Math.pow(e, 2), o);
                                return (n * i + i - s) * a * (-r(e) + .001 > 0 ? -1 : 1) / l
                            }
                            ) : (r = e => -.001 + Math.exp(-e * t) * ((e - i) * t + 1),
                            s = e => t * t * (i - e) * Math.exp(-e * t));
                            let a = function(t, e, i) {
                                let n = i;
                                for (let i = 1; i < 12; i++)
                                    n -= t(n) / e(n);
                                return n
                            }(r, s, 5 / t);
                            if (t = U(t),
                            isNaN(a))
                                return {
                                    stiffness: eL.stiffness,
                                    damping: eL.damping,
                                    duration: t
                                };
                            {
                                let e = Math.pow(a, 2) * n;
                                return {
                                    stiffness: e,
                                    damping: 2 * o * Math.sqrt(n * e),
                                    duration: t
                                }
                            }
                        }(t);
                        (e = {
                            ...e,
                            ...i,
                            mass: eL.mass
                        }).isResolvedFromDuration = !0
                    }
                }
                return e
            }({
                ...n,
                velocity: -z(n.velocity || 0)
            })
              , v = p || 0
              , g = h / (2 * Math.sqrt(u * d))
              , y = a - o
              , x = z(Math.sqrt(u / d))
              , b = 5 > Math.abs(y);
            if (r || (r = b ? eL.restSpeed.granular : eL.restSpeed.default),
            s || (s = b ? eL.restDelta.granular : eL.restDelta.default),
            g < 1) {
                let t = eF(x, g);
                i = e => a - Math.exp(-g * x * e) * ((v + g * x * y) / t * Math.sin(t * e) + y * Math.cos(t * e))
            } else if (1 === g)
                i = t => a - Math.exp(-x * t) * (y + (v + x * y) * t);
            else {
                let t = x * Math.sqrt(g * g - 1);
                i = e => {
                    let i = Math.exp(-g * x * e)
                      , n = Math.min(t * e, 300);
                    return a - i * ((v + g * x * y) * Math.sinh(n) + t * y * Math.cosh(n)) / t
                }
            }
            let w = {
                calculatedDuration: m && c || null,
                next: t => {
                    let e = i(t);
                    if (m)
                        l.done = t >= c;
                    else {
                        let n = 0;
                        g < 1 && (n = 0 === t ? U(v) : ej(i, t, e));
                        let o = Math.abs(n) <= r
                          , u = Math.abs(a - e) <= s;
                        l.done = o && u
                    }
                    return l.value = l.done ? a : e,
                    l
                }
                ,
                toString: () => {
                    let t = Math.min(em(w), 2e4)
                      , e = X(e => w.next(t * e).value, t, 30);
                    return t + "ms " + e
                }
            };
            return w
        }
        function eU({keyframes: t, velocity: e=0, power: i=.8, timeConstant: n=325, bounceDamping: r=10, bounceStiffness: s=500, modifyTarget: o, min: a, max: l, restDelta: u=.5, restSpeed: h}) {
            let d, c;
            let p = t[0]
              , m = {
                done: !1,
                value: p
            }
              , f = t => void 0 !== a && t < a || void 0 !== l && t > l
              , v = t => void 0 === a ? l : void 0 === l ? a : Math.abs(a - t) < Math.abs(l - t) ? a : l
              , g = i * e
              , y = p + g
              , x = void 0 === o ? y : o(y);
            x !== y && (g = x - p);
            let b = t => -g * Math.exp(-t / n)
              , w = t => x + b(t)
              , P = t => {
                let e = b(t)
                  , i = w(t);
                m.done = Math.abs(e) <= u,
                m.value = m.done ? x : i
            }
              , T = t => {
                f(m.value) && (d = t,
                c = eN({
                    keyframes: [m.value, v(m.value)],
                    velocity: ej(w, t, m.value),
                    damping: r,
                    stiffness: s,
                    restDelta: u,
                    restSpeed: h
                }))
            }
            ;
            return T(0),
            {
                calculatedDuration: null,
                next: t => {
                    let e = !1;
                    return (c || void 0 !== d || (e = !0,
                    P(t),
                    T(t)),
                    void 0 !== d && t >= d) ? c.next(t - d) : (e || P(t),
                    m)
                }
            }
        }
        let ez = Q(.42, 0, 1, 1)
          , e$ = Q(0, 0, .58, 1)
          , eW = Q(.42, 0, .58, 1)
          , e_ = t => Array.isArray(t) && "number" != typeof t[0]
          , eK = {
            linear: f,
            easeIn: ez,
            easeInOut: eW,
            easeOut: e$,
            circIn: to,
            circInOut: tl,
            circOut: ta,
            backIn: tn,
            backInOut: tr,
            backOut: ti,
            anticipate: ts
        }
          , eH = t => {
            if (K(t)) {
                f(4 === t.length, "Cubic bezier arrays must contain four numerical values.");
                let[e,i,n,r] = t;
                return Q(e, i, n, r)
            }
            return "string" == typeof t ? (f(void 0 !== eK[t], `Invalid easing type '${t}'`),
            eK[t]) : t
        }
        ;
        function eY({duration: t=300, keyframes: e, times: i, ease: n="easeInOut"}) {
            let r = e_(n) ? n.map(eH) : eH(n)
              , s = {
                done: !1,
                value: e[0]
            }
              , o = function(t, e, {clamp: i=!0, ease: n, mixer: r}={}) {
                let s = t.length;
                if (f(s === e.length, "Both input and output ranges must be the same length"),
                1 === s)
                    return () => e[0];
                if (2 === s && e[0] === e[1])
                    return () => e[1];
                let o = t[0] === t[1];
                t[0] > t[s - 1] && (t = [...t].reverse(),
                e = [...e].reverse());
                let a = function(t, e, i) {
                    let n = []
                      , r = i || eD
                      , s = t.length - 1;
                    for (let i = 0; i < s; i++) {
                        let s = r(t[i], t[i + 1]);
                        e && (s = eA(Array.isArray(e) ? e[i] || f : e, s)),
                        n.push(s)
                    }
                    return n
                }(e, n, r)
                  , l = a.length
                  , u = i => {
                    if (o && i < t[0])
                        return e[0];
                    let n = 0;
                    if (l > 1)
                        for (; n < t.length - 2 && !(i < t[n + 1]); n++)
                            ;
                    let r = q(t[n], t[n + 1], i);
                    return a[n](r)
                }
                ;
                return i ? e => u(th(t[0], t[s - 1], e)) : u
            }((i && i.length === e.length ? i : function(t) {
                let e = [0];
                return function(t, e) {
                    let i = t[t.length - 1];
                    for (let n = 1; n <= e; n++) {
                        let r = q(0, e, n);
                        t.push(ev(i, 1, r))
                    }
                }(e, t.length - 1),
                e
            }(e)).map(e => e * t), e, {
                ease: Array.isArray(r) ? r : e.map( () => r || eW).splice(0, e.length - 1)
            });
            return {
                calculatedDuration: t,
                next: e => (s.value = o(e),
                s.done = e >= t,
                s)
            }
        }
        let eq = t => {
            let e = ({timestamp: e}) => t(e);
            return {
                start: () => x.update(e, !0),
                stop: () => b(e),
                now: () => w.isProcessing ? w.timestamp : S.now()
            }
        }
          , eX = {
            decay: eU,
            inertia: eU,
            tween: eY,
            keyframes: eY,
            spring: eN
        }
          , eG = t => t / 100;
        class eZ extends ep {
            constructor(t) {
                super(t),
                this.holdTime = null,
                this.cancelTime = null,
                this.currentTime = 0,
                this.playbackSpeed = 1,
                this.pendingPlayState = "running",
                this.startTime = null,
                this.state = "idle",
                this.stop = () => {
                    if (this.resolver.cancel(),
                    this.isStopped = !0,
                    "idle" === this.state)
                        return;
                    this.teardown();
                    let {onStop: t} = this.options;
                    t && t()
                }
                ;
                let {name: e, motionValue: i, element: n, keyframes: r} = this.options
                  , s = (null == n ? void 0 : n.KeyframeResolver) || t6;
                this.resolver = new s(r, (t, e) => this.onKeyframesResolved(t, e),e,i,n),
                this.resolver.scheduleResolve()
            }
            flatten() {
                super.flatten(),
                this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes))
            }
            initPlayback(t) {
                let e, i;
                let {type: n="keyframes", repeat: r=0, repeatDelay: s=0, repeatType: o, velocity: a=0} = this.options
                  , l = W(n) ? n : eX[n] || eY;
                l !== eY && "number" != typeof t[0] && (e = eA(eG, eD(t[0], t[1])),
                t = [0, 100]);
                let u = l({
                    ...this.options,
                    keyframes: t
                });
                "mirror" === o && (i = l({
                    ...this.options,
                    keyframes: [...t].reverse(),
                    velocity: -a
                })),
                null === u.calculatedDuration && (u.calculatedDuration = em(u));
                let {calculatedDuration: h} = u
                  , d = h + s;
                return {
                    generator: u,
                    mirroredGenerator: i,
                    mapPercentToKeyframes: e,
                    calculatedDuration: h,
                    resolvedDuration: d,
                    totalDuration: d * (r + 1) - s
                }
            }
            onPostResolved() {
                let {autoplay: t=!0} = this.options;
                ef.mainThread++,
                this.play(),
                "paused" !== this.pendingPlayState && t ? this.state = this.pendingPlayState : this.pause()
            }
            tick(t, e=!1) {
                let {resolved: i} = this;
                if (!i) {
                    let {keyframes: t} = this.options;
                    return {
                        done: !0,
                        value: t[t.length - 1]
                    }
                }
                let {finalKeyframe: n, generator: r, mirroredGenerator: s, mapPercentToKeyframes: o, keyframes: a, calculatedDuration: l, totalDuration: u, resolvedDuration: h} = i;
                if (null === this.startTime)
                    return r.next(0);
                let {delay: d, repeat: c, repeatType: p, repeatDelay: m, onUpdate: f} = this.options;
                this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - u / this.speed, this.startTime)),
                e ? this.currentTime = t : null !== this.holdTime ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
                let v = this.currentTime - d * (this.speed >= 0 ? 1 : -1)
                  , g = this.speed >= 0 ? v < 0 : v > u;
                this.currentTime = Math.max(v, 0),
                "finished" === this.state && null === this.holdTime && (this.currentTime = u);
                let y = this.currentTime
                  , x = r;
                if (c) {
                    let t = Math.min(this.currentTime, u) / h
                      , e = Math.floor(t)
                      , i = t % 1;
                    !i && t >= 1 && (i = 1),
                    1 === i && e--,
                    (e = Math.min(e, c + 1)) % 2 && ("reverse" === p ? (i = 1 - i,
                    m && (i -= m / h)) : "mirror" === p && (x = s)),
                    y = th(0, 1, i) * h
                }
                let b = g ? {
                    done: !1,
                    value: a[0]
                } : x.next(y);
                o && (b.value = o(b.value));
                let {done: w} = b;
                g || null === l || (w = this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
                let P = null === this.holdTime && ("finished" === this.state || "running" === this.state && w);
                return P && void 0 !== n && (b.value = ec(a, this.options, n)),
                f && f(b.value),
                P && this.finish(),
                b
            }
            get duration() {
                let {resolved: t} = this;
                return t ? z(t.calculatedDuration) : 0
            }
            get time() {
                return z(this.currentTime)
            }
            set time(t) {
                t = U(t),
                this.currentTime = t,
                null !== this.holdTime || 0 === this.speed ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed)
            }
            get speed() {
                return this.playbackSpeed
            }
            set speed(t) {
                let e = this.playbackSpeed !== t;
                this.playbackSpeed = t,
                e && (this.time = z(this.currentTime))
            }
            play() {
                if (this.resolver.isScheduled || this.resolver.resume(),
                !this._resolved) {
                    this.pendingPlayState = "running";
                    return
                }
                if (this.isStopped)
                    return;
                let {driver: t=eq, onPlay: e, startTime: i} = this.options;
                this.driver || (this.driver = t(t => this.tick(t))),
                e && e();
                let n = this.driver.now();
                null !== this.holdTime ? this.startTime = n - this.holdTime : this.startTime ? "finished" === this.state && (this.startTime = n) : this.startTime = null != i ? i : this.calcStartTime(),
                "finished" === this.state && this.updateFinishedPromise(),
                this.cancelTime = this.startTime,
                this.holdTime = null,
                this.state = "running",
                this.driver.start()
            }
            pause() {
                var t;
                if (!this._resolved) {
                    this.pendingPlayState = "paused";
                    return
                }
                this.state = "paused",
                this.holdTime = null !== (t = this.currentTime) && void 0 !== t ? t : 0
            }
            complete() {
                "running" !== this.state && this.play(),
                this.pendingPlayState = this.state = "finished",
                this.holdTime = null
            }
            finish() {
                this.teardown(),
                this.state = "finished";
                let {onComplete: t} = this.options;
                t && t()
            }
            cancel() {
                null !== this.cancelTime && this.tick(this.cancelTime),
                this.teardown(),
                this.updateFinishedPromise()
            }
            teardown() {
                this.state = "idle",
                this.stopDriver(),
                this.resolveFinishedPromise(),
                this.updateFinishedPromise(),
                this.startTime = this.cancelTime = null,
                this.resolver.cancel(),
                ef.mainThread--
            }
            stopDriver() {
                this.driver && (this.driver.stop(),
                this.driver = void 0)
            }
            sample(t) {
                return this.startTime = 0,
                this.tick(t, !0)
            }
        }
        let eJ = new Set(["opacity", "clipPath", "filter", "transform"])
          , eQ = O( () => Object.hasOwnProperty.call(Element.prototype, "animate"))
          , e0 = {
            anticipate: ts,
            backInOut: tr,
            circInOut: tl
        };
        class e1 extends ep {
            constructor(t) {
                super(t);
                let {name: e, motionValue: i, element: n, keyframes: r} = this.options;
                this.resolver = new eu(r, (t, e) => this.onKeyframesResolved(t, e),e,i,n),
                this.resolver.scheduleResolve()
            }
            initPlayback(t, e) {
                var i;
                let {duration: n=300, times: r, ease: s, type: o, motionValue: a, name: l, startTime: u} = this.options;
                if (!a.owner || !a.owner.current)
                    return !1;
                if ("string" == typeof s && Y() && s in e0 && (s = e0[s]),
                W((i = this.options).type) || "spring" === i.type || !function t(e) {
                    return !!("function" == typeof e && Y() || !e || "string" == typeof e && (e in Z || Y()) || K(e) || Array.isArray(e) && e.every(t))
                }(i.ease)) {
                    let {onComplete: e, onUpdate: i, motionValue: a, element: l, ...u} = this.options
                      , h = function(t, e) {
                        let i = new eZ({
                            ...e,
                            keyframes: t,
                            repeat: 0,
                            delay: 0,
                            isGenerator: !0
                        })
                          , n = {
                            done: !1,
                            value: t[0]
                        }
                          , r = []
                          , s = 0;
                        for (; !n.done && s < 2e4; )
                            r.push((n = i.sample(s)).value),
                            s += 10;
                        return {
                            times: void 0,
                            keyframes: r,
                            duration: s - 10,
                            ease: "linear"
                        }
                    }(t, u);
                    1 === (t = h.keyframes).length && (t[1] = t[0]),
                    n = h.duration,
                    r = h.times,
                    s = h.ease,
                    o = "keyframes"
                }
                let h = function(t, e, i, {delay: n=0, duration: r=300, repeat: s=0, repeatType: o="loop", ease: a="easeInOut", times: l}={}) {
                    let u = {
                        [e]: i
                    };
                    l && (u.offset = l);
                    let h = function t(e, i) {
                        if (e)
                            return "function" == typeof e && Y() ? X(e, i) : K(e) ? G(e) : Array.isArray(e) ? e.map(e => t(e, i) || Z.easeOut) : Z[e]
                    }(a, r);
                    Array.isArray(h) && (u.easing = h),
                    g.value && ef.waapi++;
                    let d = t.animate(u, {
                        delay: n,
                        duration: r,
                        easing: Array.isArray(h) ? "linear" : h,
                        fill: "both",
                        iterations: s + 1,
                        direction: "reverse" === o ? "alternate" : "normal"
                    });
                    return g.value && d.finished.finally( () => {
                        ef.waapi--
                    }
                    ),
                    d
                }(a.owner.current, l, t, {
                    ...this.options,
                    duration: n,
                    times: r,
                    ease: s
                });
                return h.startTime = null != u ? u : this.calcStartTime(),
                this.pendingTimeline ? (_(h, this.pendingTimeline),
                this.pendingTimeline = void 0) : h.onfinish = () => {
                    let {onComplete: i} = this.options;
                    a.set(ec(t, this.options, e)),
                    i && i(),
                    this.cancel(),
                    this.resolveFinishedPromise()
                }
                ,
                {
                    animation: h,
                    duration: n,
                    times: r,
                    type: o,
                    ease: s,
                    keyframes: t
                }
            }
            get duration() {
                let {resolved: t} = this;
                if (!t)
                    return 0;
                let {duration: e} = t;
                return z(e)
            }
            get time() {
                let {resolved: t} = this;
                if (!t)
                    return 0;
                let {animation: e} = t;
                return z(e.currentTime || 0)
            }
            set time(t) {
                let {resolved: e} = this;
                if (!e)
                    return;
                let {animation: i} = e;
                i.currentTime = U(t)
            }
            get speed() {
                let {resolved: t} = this;
                if (!t)
                    return 1;
                let {animation: e} = t;
                return e.playbackRate
            }
            set speed(t) {
                let {resolved: e} = this;
                if (!e)
                    return;
                let {animation: i} = e;
                i.playbackRate = t
            }
            get state() {
                let {resolved: t} = this;
                if (!t)
                    return "idle";
                let {animation: e} = t;
                return e.playState
            }
            get startTime() {
                let {resolved: t} = this;
                if (!t)
                    return null;
                let {animation: e} = t;
                return e.startTime
            }
            attachTimeline(t) {
                if (this._resolved) {
                    let {resolved: e} = this;
                    if (!e)
                        return f;
                    let {animation: i} = e;
                    _(i, t)
                } else
                    this.pendingTimeline = t;
                return f
            }
            play() {
                if (this.isStopped)
                    return;
                let {resolved: t} = this;
                if (!t)
                    return;
                let {animation: e} = t;
                "finished" === e.playState && this.updateFinishedPromise(),
                e.play()
            }
            pause() {
                let {resolved: t} = this;
                if (!t)
                    return;
                let {animation: e} = t;
                e.pause()
            }
            stop() {
                if (this.resolver.cancel(),
                this.isStopped = !0,
                "idle" === this.state)
                    return;
                this.resolveFinishedPromise(),
                this.updateFinishedPromise();
                let {resolved: t} = this;
                if (!t)
                    return;
                let {animation: e, keyframes: i, duration: n, type: r, ease: s, times: o} = t;
                if ("idle" === e.playState || "finished" === e.playState)
                    return;
                if (this.time) {
                    let {motionValue: t, onUpdate: e, onComplete: a, element: l, ...u} = this.options
                      , h = new eZ({
                        ...u,
                        keyframes: i,
                        duration: n,
                        type: r,
                        ease: s,
                        times: o,
                        isGenerator: !0
                    })
                      , d = U(this.time);
                    t.setWithVelocity(h.sample(d - 10).value, h.sample(d).value, 10)
                }
                let {onStop: a} = this.options;
                a && a(),
                this.cancel()
            }
            complete() {
                let {resolved: t} = this;
                t && t.animation.finish()
            }
            cancel() {
                let {resolved: t} = this;
                t && t.animation.cancel()
            }
            static supports(t) {
                let {motionValue: e, name: i, repeatDelay: n, repeatType: r, damping: s, type: o} = t;
                if (!e || !e.owner || !(e.owner.current instanceof HTMLElement))
                    return !1;
                let {onUpdate: a, transformTemplate: l} = e.owner.getProps();
                return eQ() && i && eJ.has(i) && !a && !l && !n && "mirror" !== r && 0 !== s && "inertia" !== o
            }
        }
        let e2 = {
            type: "spring",
            stiffness: 500,
            damping: 25,
            restSpeed: 10
        }
          , e3 = t => ({
            type: "spring",
            stiffness: 550,
            damping: 0 === t ? 2 * Math.sqrt(550) : 30,
            restSpeed: 10
        })
          , e5 = {
            type: "keyframes",
            duration: .8
        }
          , e4 = {
            type: "keyframes",
            ease: [.25, .1, .35, 1],
            duration: .3
        }
          , e9 = (t, {keyframes: e}) => e.length > 2 ? e5 : u.has(t) ? t.startsWith("scale") ? e3(e[1]) : e2 : e4
          , e8 = (t, e, i, n={}, r, s) => o => {
            let l = a(n, t) || {}
              , u = l.delay || n.delay || 0
              , {elapsed: h=0} = n;
            h -= U(u);
            let d = {
                keyframes: Array.isArray(i) ? i : [null, i],
                ease: "easeOut",
                velocity: e.getVelocity(),
                ...l,
                delay: -h,
                onUpdate: t => {
                    e.set(t),
                    l.onUpdate && l.onUpdate(t)
                }
                ,
                onComplete: () => {
                    o(),
                    l.onComplete && l.onComplete()
                }
                ,
                name: t,
                motionValue: e,
                element: s ? void 0 : r
            };
            !function({when: t, delay: e, delayChildren: i, staggerChildren: n, staggerDirection: r, repeat: s, repeatType: o, repeatDelay: a, from: l, elapsed: u, ...h}) {
                return !!Object.keys(h).length
            }(l) && (d = {
                ...d,
                ...e9(t, d)
            }),
            d.duration && (d.duration = U(d.duration)),
            d.repeatDelay && (d.repeatDelay = U(d.repeatDelay)),
            void 0 !== d.from && (d.keyframes[0] = d.from);
            let c = !1;
            if (!1 !== d.type && (0 !== d.duration || d.repeatDelay) || (d.duration = 0,
            0 !== d.delay || (c = !0)),
            ($.current || m.skipAnimations) && (c = !0,
            d.duration = 0,
            d.delay = 0),
            c && !s && void 0 !== e.get()) {
                let t = ec(d.keyframes, l);
                if (void 0 !== t)
                    return x.update( () => {
                        d.onUpdate(t),
                        d.onComplete()
                    }
                    ),
                    new N([])
            }
            return !s && e1.supports(d) ? new e1(d) : new eZ(d)
        }
        ;
        function e6(t, e, {delay: i=0, transitionOverride: n, type: r}={}) {
            var s;
            let {transition: l=t.getDefaultTransition(), transitionEnd: u, ...d} = e;
            n && (l = n);
            let c = []
              , m = r && t.animationState && t.animationState.getState()[r];
            for (let e in d) {
                let n = t.getValue(e, null !== (s = t.latestValues[e]) && void 0 !== s ? s : null)
                  , r = d[e];
                if (void 0 === r || m && function({protectedKeys: t, needsAnimating: e}, i) {
                    let n = t.hasOwnProperty(i) && !0 !== e[i];
                    return e[i] = !1,
                    n
                }(m, e))
                    continue;
                let o = {
                    delay: i,
                    ...a(l || {}, e)
                }
                  , u = !1;
                if (window.MotionHandoffAnimation) {
                    let i = t.props[F];
                    if (i) {
                        let t = window.MotionHandoffAnimation(i, e, x);
                        null !== t && (o.startTime = t,
                        u = !0)
                    }
                }
                j(t, e),
                n.start(e8(e, n, r, t.shouldReduceMotion && h.has(e) ? {
                    type: !1
                } : o, t, u));
                let p = n.animation;
                p && c.push(p)
            }
            return u && Promise.all(c).then( () => {
                x.update( () => {
                    u && function(t, e) {
                        let {transitionEnd: i={}, transition: n={}, ...r} = o(t, e) || {};
                        for (let e in r = {
                            ...r,
                            ...i
                        }) {
                            let i = p(r[e]);
                            t.hasValue(e) ? t.getValue(e).set(i) : t.addValue(e, V(i))
                        }
                    }(t, u)
                }
                )
            }
            ),
            c
        }
        function e7(t, e, i={}) {
            var n;
            let r = o(t, e, "exit" === i.type ? null === (n = t.presenceContext) || void 0 === n ? void 0 : n.custom : void 0)
              , {transition: s=t.getDefaultTransition() || {}} = r || {};
            i.transitionOverride && (s = i.transitionOverride);
            let a = r ? () => Promise.all(e6(t, r, i)) : () => Promise.resolve()
              , l = t.variantChildren && t.variantChildren.size ? (n=0) => {
                let {delayChildren: r=0, staggerChildren: o, staggerDirection: a} = s;
                return function(t, e, i=0, n=0, r=1, s) {
                    let o = []
                      , a = (t.variantChildren.size - 1) * n
                      , l = 1 === r ? (t=0) => t * n : (t=0) => a - t * n;
                    return Array.from(t.variantChildren).sort(it).forEach( (t, n) => {
                        t.notify("AnimationStart", e),
                        o.push(e7(t, e, {
                            ...s,
                            delay: i + l(n)
                        }).then( () => t.notify("AnimationComplete", e)))
                    }
                    ),
                    Promise.all(o)
                }(t, e, r + n, o, a, i)
            }
            : () => Promise.resolve()
              , {when: u} = s;
            if (!u)
                return Promise.all([a(), l(i.delay)]);
            {
                let[t,e] = "beforeChildren" === u ? [a, l] : [l, a];
                return t().then( () => e())
            }
        }
        function it(t, e) {
            return t.sortNodePosition(e)
        }
        function ie(t, e) {
            if (!Array.isArray(e))
                return !1;
            let i = e.length;
            if (i !== t.length)
                return !1;
            for (let n = 0; n < i; n++)
                if (e[n] !== t[n])
                    return !1;
            return !0
        }
        function ii(t) {
            return "string" == typeof t || Array.isArray(t)
        }
        let ir = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
          , is = ["initial", ...ir]
          , io = is.length
          , ia = [...ir].reverse()
          , il = ir.length;
        function iu(t=!1) {
            return {
                isActive: t,
                protectedKeys: {},
                needsAnimating: {},
                prevResolvedValues: {}
            }
        }
        function ih() {
            return {
                animate: iu(!0),
                whileInView: iu(),
                whileHover: iu(),
                whileTap: iu(),
                whileDrag: iu(),
                whileFocus: iu(),
                exit: iu()
            }
        }
        class id {
            constructor(t) {
                this.isMounted = !1,
                this.node = t
            }
            update() {}
        }
        class ic extends id {
            constructor(t) {
                super(t),
                t.animationState || (t.animationState = function(t) {
                    let e = e => Promise.all(e.map( ({animation: e, options: i}) => (function(t, e, i={}) {
                        let n;
                        if (t.notify("AnimationStart", e),
                        Array.isArray(e))
                            n = Promise.all(e.map(e => e7(t, e, i)));
                        else if ("string" == typeof e)
                            n = e7(t, e, i);
                        else {
                            let r = "function" == typeof e ? o(t, e, i.custom) : e;
                            n = Promise.all(e6(t, r, i))
                        }
                        return n.then( () => {
                            t.notify("AnimationComplete", e)
                        }
                        )
                    }
                    )(t, e, i)))
                      , i = ih()
                      , n = !0
                      , s = e => (i, n) => {
                        var r;
                        let s = o(t, n, "exit" === e ? null === (r = t.presenceContext) || void 0 === r ? void 0 : r.custom : void 0);
                        if (s) {
                            let {transition: t, transitionEnd: e, ...n} = s;
                            i = {
                                ...i,
                                ...n,
                                ...e
                            }
                        }
                        return i
                    }
                    ;
                    function a(a) {
                        let {props: l} = t
                          , u = function t(e) {
                            if (!e)
                                return;
                            if (!e.isControllingVariants) {
                                let i = e.parent && t(e.parent) || {};
                                return void 0 !== e.props.initial && (i.initial = e.props.initial),
                                i
                            }
                            let i = {};
                            for (let t = 0; t < io; t++) {
                                let n = is[t]
                                  , r = e.props[n];
                                (ii(r) || !1 === r) && (i[n] = r)
                            }
                            return i
                        }(t.parent) || {}
                          , h = []
                          , c = new Set
                          , p = {}
                          , m = 1 / 0;
                        for (let e = 0; e < il; e++) {
                            var f;
                            let o = ia[e]
                              , v = i[o]
                              , g = void 0 !== l[o] ? l[o] : u[o]
                              , y = ii(g)
                              , x = o === a ? v.isActive : null;
                            !1 === x && (m = e);
                            let b = g === u[o] && g !== l[o] && y;
                            if (b && n && t.manuallyAnimateOnMount && (b = !1),
                            v.protectedKeys = {
                                ...p
                            },
                            !v.isActive && null === x || !g && !v.prevProp || r(g) || "boolean" == typeof g)
                                continue;
                            let w = (f = v.prevProp,
                            "string" == typeof g ? g !== f : !!Array.isArray(g) && !ie(g, f))
                              , P = w || o === a && v.isActive && !b && y || e > m && y
                              , T = !1
                              , S = Array.isArray(g) ? g : [g]
                              , A = S.reduce(s(o), {});
                            !1 === x && (A = {});
                            let {prevResolvedValues: E={}} = v
                              , M = {
                                ...E,
                                ...A
                            }
                              , k = e => {
                                P = !0,
                                c.has(e) && (T = !0,
                                c.delete(e)),
                                v.needsAnimating[e] = !0;
                                let i = t.getValue(e);
                                i && (i.liveStyle = !1)
                            }
                            ;
                            for (let t in M) {
                                let e = A[t]
                                  , i = E[t];
                                if (!p.hasOwnProperty(t))
                                    (d(e) && d(i) ? ie(e, i) : e === i) ? void 0 !== e && c.has(t) ? k(t) : v.protectedKeys[t] = !0 : null != e ? k(t) : c.add(t)
                            }
                            v.prevProp = g,
                            v.prevResolvedValues = A,
                            v.isActive && (p = {
                                ...p,
                                ...A
                            }),
                            n && t.blockInitialAnimation && (P = !1);
                            let C = !(b && w) || T;
                            P && C && h.push(...S.map(t => ({
                                animation: t,
                                options: {
                                    type: o
                                }
                            })))
                        }
                        if (c.size) {
                            let e = {};
                            if ("boolean" != typeof l.initial) {
                                let i = o(t, Array.isArray(l.initial) ? l.initial[0] : l.initial);
                                i && i.transition && (e.transition = i.transition)
                            }
                            c.forEach(i => {
                                let n = t.getBaseTarget(i)
                                  , r = t.getValue(i);
                                r && (r.liveStyle = !0),
                                e[i] = null != n ? n : null
                            }
                            ),
                            h.push({
                                animation: e
                            })
                        }
                        let v = !!h.length;
                        return n && (!1 === l.initial || l.initial === l.animate) && !t.manuallyAnimateOnMount && (v = !1),
                        n = !1,
                        v ? e(h) : Promise.resolve()
                    }
                    return {
                        animateChanges: a,
                        setActive: function(e, n) {
                            var r;
                            if (i[e].isActive === n)
                                return Promise.resolve();
                            null === (r = t.variantChildren) || void 0 === r || r.forEach(t => {
                                var i;
                                return null === (i = t.animationState) || void 0 === i ? void 0 : i.setActive(e, n)
                            }
                            ),
                            i[e].isActive = n;
                            let s = a(e);
                            for (let t in i)
                                i[t].protectedKeys = {};
                            return s
                        },
                        setAnimateFunction: function(i) {
                            e = i(t)
                        },
                        getState: () => i,
                        reset: () => {
                            i = ih(),
                            n = !0
                        }
                    }
                }(t))
            }
            updateAnimationControlsSubscription() {
                let {animate: t} = this.node.getProps();
                r(t) && (this.unmountControls = t.subscribe(this.node))
            }
            mount() {
                this.updateAnimationControlsSubscription()
            }
            update() {
                let {animate: t} = this.node.getProps()
                  , {animate: e} = this.node.prevProps || {};
                t !== e && this.updateAnimationControlsSubscription()
            }
            unmount() {
                var t;
                this.node.animationState.reset(),
                null === (t = this.unmountControls) || void 0 === t || t.call(this)
            }
        }
        let ip = 0;
        class im extends id {
            constructor() {
                super(...arguments),
                this.id = ip++
            }
            update() {
                if (!this.node.presenceContext)
                    return;
                let {isPresent: t, onExitComplete: e} = this.node.presenceContext
                  , {isPresent: i} = this.node.prevPresenceContext || {};
                if (!this.node.animationState || t === i)
                    return;
                let n = this.node.animationState.setActive("exit", !t);
                e && !t && n.then( () => {
                    e(this.id)
                }
                )
            }
            mount() {
                let {register: t, onExitComplete: e} = this.node.presenceContext || {};
                e && e(this.id),
                t && (this.unmount = t(this.id))
            }
            unmount() {}
        }
        let iv = {
            x: !1,
            y: !1
        }
          , ig = t => "mouse" === t.pointerType ? "number" != typeof t.button || t.button <= 0 : !1 !== t.isPrimary;
        function iy(t, e, i, n={
            passive: !0
        }) {
            return t.addEventListener(e, i, n),
            () => t.removeEventListener(e, i)
        }
        function ix(t) {
            return {
                point: {
                    x: t.pageX,
                    y: t.pageY
                }
            }
        }
        let ib = t => e => ig(e) && t(e, ix(e));
        function iw(t, e, i, n) {
            return iy(t, e, ib(i), n)
        }
        let iP = (t, e) => Math.abs(t - e);
        class iT {
            constructor(t, e, {transformPagePoint: i, contextWindow: n, dragSnapToOrigin: r=!1}={}) {
                if (this.startEvent = null,
                this.lastMoveEvent = null,
                this.lastMoveEventInfo = null,
                this.handlers = {},
                this.contextWindow = window,
                this.updatePoint = () => {
                    if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                        return;
                    let t = iE(this.lastMoveEventInfo, this.history)
                      , e = null !== this.startEvent
                      , i = function(t, e) {
                        return Math.sqrt(iP(t.x, e.x) ** 2 + iP(t.y, e.y) ** 2)
                    }(t.offset, {
                        x: 0,
                        y: 0
                    }) >= 3;
                    if (!e && !i)
                        return;
                    let {point: n} = t
                      , {timestamp: r} = w;
                    this.history.push({
                        ...n,
                        timestamp: r
                    });
                    let {onStart: s, onMove: o} = this.handlers;
                    e || (s && s(this.lastMoveEvent, t),
                    this.startEvent = this.lastMoveEvent),
                    o && o(this.lastMoveEvent, t)
                }
                ,
                this.handlePointerMove = (t, e) => {
                    this.lastMoveEvent = t,
                    this.lastMoveEventInfo = iS(e, this.transformPagePoint),
                    x.update(this.updatePoint, !0)
                }
                ,
                this.handlePointerUp = (t, e) => {
                    this.end();
                    let {onEnd: i, onSessionEnd: n, resumeAnimation: r} = this.handlers;
                    if (this.dragSnapToOrigin && r && r(),
                    !(this.lastMoveEvent && this.lastMoveEventInfo))
                        return;
                    let s = iE("pointercancel" === t.type ? this.lastMoveEventInfo : iS(e, this.transformPagePoint), this.history);
                    this.startEvent && i && i(t, s),
                    n && n(t, s)
                }
                ,
                !ig(t))
                    return;
                this.dragSnapToOrigin = r,
                this.handlers = e,
                this.transformPagePoint = i,
                this.contextWindow = n || window;
                let s = iS(ix(t), this.transformPagePoint)
                  , {point: o} = s
                  , {timestamp: a} = w;
                this.history = [{
                    ...o,
                    timestamp: a
                }];
                let {onSessionStart: l} = e;
                l && l(t, iE(s, this.history)),
                this.removeListeners = eA(iw(this.contextWindow, "pointermove", this.handlePointerMove), iw(this.contextWindow, "pointerup", this.handlePointerUp), iw(this.contextWindow, "pointercancel", this.handlePointerUp))
            }
            updateHandlers(t) {
                this.handlers = t
            }
            end() {
                this.removeListeners && this.removeListeners(),
                b(this.updatePoint)
            }
        }
        function iS(t, e) {
            return e ? {
                point: e(t.point)
            } : t
        }
        function iA(t, e) {
            return {
                x: t.x - e.x,
                y: t.y - e.y
            }
        }
        function iE({point: t}, e) {
            return {
                point: t,
                delta: iA(t, iM(e)),
                offset: iA(t, e[0]),
                velocity: function(t, e) {
                    if (t.length < 2)
                        return {
                            x: 0,
                            y: 0
                        };
                    let i = t.length - 1
                      , n = null
                      , r = iM(t);
                    for (; i >= 0 && (n = t[i],
                    !(r.timestamp - n.timestamp > U(.1))); )
                        i--;
                    if (!n)
                        return {
                            x: 0,
                            y: 0
                        };
                    let s = z(r.timestamp - n.timestamp);
                    if (0 === s)
                        return {
                            x: 0,
                            y: 0
                        };
                    let o = {
                        x: (r.x - n.x) / s,
                        y: (r.y - n.y) / s
                    };
                    return o.x === 1 / 0 && (o.x = 0),
                    o.y === 1 / 0 && (o.y = 0),
                    o
                }(e, 0)
            }
        }
        function iM(t) {
            return t[t.length - 1]
        }
        function ik(t) {
            return t && "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current")
        }
        function iC(t) {
            return t.max - t.min
        }
        function iR(t, e, i, n=.5) {
            t.origin = n,
            t.originPoint = ev(e.min, e.max, t.origin),
            t.scale = iC(i) / iC(e),
            t.translate = ev(i.min, i.max, t.origin) - t.originPoint,
            (t.scale >= .9999 && t.scale <= 1.0001 || isNaN(t.scale)) && (t.scale = 1),
            (t.translate >= -.01 && t.translate <= .01 || isNaN(t.translate)) && (t.translate = 0)
        }
        function iV(t, e, i, n) {
            iR(t.x, e.x, i.x, n ? n.originX : void 0),
            iR(t.y, e.y, i.y, n ? n.originY : void 0)
        }
        function iD(t, e, i) {
            t.min = i.min + e.min,
            t.max = t.min + iC(e)
        }
        function ij(t, e, i) {
            t.min = e.min - i.min,
            t.max = t.min + iC(e)
        }
        function iL(t, e, i) {
            ij(t.x, e.x, i.x),
            ij(t.y, e.y, i.y)
        }
        function iF(t, e, i) {
            return {
                min: void 0 !== e ? t.min + e : void 0,
                max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0
            }
        }
        function iO(t, e) {
            let i = e.min - t.min
              , n = e.max - t.max;
            return e.max - e.min < t.max - t.min && ([i,n] = [n, i]),
            {
                min: i,
                max: n
            }
        }
        function iB(t, e, i) {
            return {
                min: iI(t, e),
                max: iI(t, i)
            }
        }
        function iI(t, e) {
            return "number" == typeof t ? t : t[e] || 0
        }
        let iN = () => ({
            translate: 0,
            scale: 1,
            origin: 0,
            originPoint: 0
        })
          , iU = () => ({
            x: iN(),
            y: iN()
        })
          , iz = () => ({
            min: 0,
            max: 0
        })
          , i$ = () => ({
            x: iz(),
            y: iz()
        });
        function iW(t) {
            return [t("x"), t("y")]
        }
        function i_({top: t, left: e, right: i, bottom: n}) {
            return {
                x: {
                    min: e,
                    max: i
                },
                y: {
                    min: t,
                    max: n
                }
            }
        }
        function iK(t) {
            return void 0 === t || 1 === t
        }
        function iH({scale: t, scaleX: e, scaleY: i}) {
            return !iK(t) || !iK(e) || !iK(i)
        }
        function iY(t) {
            return iH(t) || iq(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY
        }
        function iq(t) {
            var e, i;
            return (e = t.x) && "0%" !== e || (i = t.y) && "0%" !== i
        }
        function iX(t, e, i, n, r) {
            return void 0 !== r && (t = n + r * (t - n)),
            n + i * (t - n) + e
        }
        function iG(t, e=0, i=1, n, r) {
            t.min = iX(t.min, e, i, n, r),
            t.max = iX(t.max, e, i, n, r)
        }
        function iZ(t, {x: e, y: i}) {
            iG(t.x, e.translate, e.scale, e.originPoint),
            iG(t.y, i.translate, i.scale, i.originPoint)
        }
        function iJ(t, e) {
            t.min = t.min + e,
            t.max = t.max + e
        }
        function iQ(t, e, i, n, r=.5) {
            let s = ev(t.min, t.max, r);
            iG(t, e, i, s, n)
        }
        function i0(t, e) {
            iQ(t.x, e.x, e.scaleX, e.scale, e.originX),
            iQ(t.y, e.y, e.scaleY, e.scale, e.originY)
        }
        function i1(t, e) {
            return i_(function(t, e) {
                if (!e)
                    return t;
                let i = e({
                    x: t.left,
                    y: t.top
                })
                  , n = e({
                    x: t.right,
                    y: t.bottom
                });
                return {
                    top: i.y,
                    left: i.x,
                    bottom: n.y,
                    right: n.x
                }
            }(t.getBoundingClientRect(), e))
        }
        let i2 = ({current: t}) => t ? t.ownerDocument.defaultView : null
          , i3 = new WeakMap;
        class i5 {
            constructor(t) {
                this.openDragLock = null,
                this.isDragging = !1,
                this.currentDirection = null,
                this.originPoint = {
                    x: 0,
                    y: 0
                },
                this.constraints = !1,
                this.hasMutatedConstraints = !1,
                this.elastic = i$(),
                this.visualElement = t
            }
            start(t, {snapToCursor: e=!1}={}) {
                let {presenceContext: i} = this.visualElement;
                if (i && !1 === i.isPresent)
                    return;
                let {dragSnapToOrigin: n} = this.getProps();
                this.panSession = new iT(t,{
                    onSessionStart: t => {
                        let {dragSnapToOrigin: i} = this.getProps();
                        i ? this.pauseAnimation() : this.stopAnimation(),
                        e && this.snapToCursor(ix(t).point)
                    }
                    ,
                    onStart: (t, e) => {
                        let {drag: i, dragPropagation: n, onDragStart: r} = this.getProps();
                        if (i && !n && (this.openDragLock && this.openDragLock(),
                        this.openDragLock = "x" === i || "y" === i ? iv[i] ? null : (iv[i] = !0,
                        () => {
                            iv[i] = !1
                        }
                        ) : iv.x || iv.y ? null : (iv.x = iv.y = !0,
                        () => {
                            iv.x = iv.y = !1
                        }
                        ),
                        !this.openDragLock))
                            return;
                        this.isDragging = !0,
                        this.currentDirection = null,
                        this.resolveConstraints(),
                        this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
                        this.visualElement.projection.target = void 0),
                        iW(t => {
                            let e = this.getAxisMotionValue(t).get() || 0;
                            if (tA.test(e)) {
                                let {projection: i} = this.visualElement;
                                if (i && i.layout) {
                                    let n = i.layout.layoutBox[t];
                                    n && (e = iC(n) * (parseFloat(e) / 100))
                                }
                            }
                            this.originPoint[t] = e
                        }
                        ),
                        r && x.postRender( () => r(t, e)),
                        j(this.visualElement, "transform");
                        let {animationState: s} = this.visualElement;
                        s && s.setActive("whileDrag", !0)
                    }
                    ,
                    onMove: (t, e) => {
                        let {dragPropagation: i, dragDirectionLock: n, onDirectionLock: r, onDrag: s} = this.getProps();
                        if (!i && !this.openDragLock)
                            return;
                        let {offset: o} = e;
                        if (n && null === this.currentDirection) {
                            this.currentDirection = function(t, e=10) {
                                let i = null;
                                return Math.abs(t.y) > e ? i = "y" : Math.abs(t.x) > e && (i = "x"),
                                i
                            }(o),
                            null !== this.currentDirection && r && r(this.currentDirection);
                            return
                        }
                        this.updateAxis("x", e.point, o),
                        this.updateAxis("y", e.point, o),
                        this.visualElement.render(),
                        s && s(t, e)
                    }
                    ,
                    onSessionEnd: (t, e) => this.stop(t, e),
                    resumeAnimation: () => iW(t => {
                        var e;
                        return "paused" === this.getAnimationState(t) && (null === (e = this.getAxisMotionValue(t).animation) || void 0 === e ? void 0 : e.play())
                    }
                    )
                },{
                    transformPagePoint: this.visualElement.getTransformPagePoint(),
                    dragSnapToOrigin: n,
                    contextWindow: i2(this.visualElement)
                })
            }
            stop(t, e) {
                let i = this.isDragging;
                if (this.cancel(),
                !i)
                    return;
                let {velocity: n} = e;
                this.startAnimation(n);
                let {onDragEnd: r} = this.getProps();
                r && x.postRender( () => r(t, e))
            }
            cancel() {
                this.isDragging = !1;
                let {projection: t, animationState: e} = this.visualElement;
                t && (t.isAnimationBlocked = !1),
                this.panSession && this.panSession.end(),
                this.panSession = void 0;
                let {dragPropagation: i} = this.getProps();
                !i && this.openDragLock && (this.openDragLock(),
                this.openDragLock = null),
                e && e.setActive("whileDrag", !1)
            }
            updateAxis(t, e, i) {
                let {drag: n} = this.getProps();
                if (!i || !i4(t, n, this.currentDirection))
                    return;
                let r = this.getAxisMotionValue(t)
                  , s = this.originPoint[t] + i[t];
                this.constraints && this.constraints[t] && (s = function(t, {min: e, max: i}, n) {
                    return void 0 !== e && t < e ? t = n ? ev(e, t, n.min) : Math.max(t, e) : void 0 !== i && t > i && (t = n ? ev(i, t, n.max) : Math.min(t, i)),
                    t
                }(s, this.constraints[t], this.elastic[t])),
                r.set(s)
            }
            resolveConstraints() {
                var t;
                let {dragConstraints: e, dragElastic: i} = this.getProps()
                  , n = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : null === (t = this.visualElement.projection) || void 0 === t ? void 0 : t.layout
                  , r = this.constraints;
                e && ik(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : e && n ? this.constraints = function(t, {top: e, left: i, bottom: n, right: r}) {
                    return {
                        x: iF(t.x, i, r),
                        y: iF(t.y, e, n)
                    }
                }(n.layoutBox, e) : this.constraints = !1,
                this.elastic = function(t=.35) {
                    return !1 === t ? t = 0 : !0 === t && (t = .35),
                    {
                        x: iB(t, "left", "right"),
                        y: iB(t, "top", "bottom")
                    }
                }(i),
                r !== this.constraints && n && this.constraints && !this.hasMutatedConstraints && iW(t => {
                    !1 !== this.constraints && this.getAxisMotionValue(t) && (this.constraints[t] = function(t, e) {
                        let i = {};
                        return void 0 !== e.min && (i.min = e.min - t.min),
                        void 0 !== e.max && (i.max = e.max - t.min),
                        i
                    }(n.layoutBox[t], this.constraints[t]))
                }
                )
            }
            resolveRefConstraints() {
                var t;
                let {dragConstraints: e, onMeasureDragConstraints: i} = this.getProps();
                if (!e || !ik(e))
                    return !1;
                let n = e.current;
                f(null !== n, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
                let {projection: r} = this.visualElement;
                if (!r || !r.layout)
                    return !1;
                let s = function(t, e, i) {
                    let n = i1(t, i)
                      , {scroll: r} = e;
                    return r && (iJ(n.x, r.offset.x),
                    iJ(n.y, r.offset.y)),
                    n
                }(n, r.root, this.visualElement.getTransformPagePoint())
                  , o = {
                    x: iO((t = r.layout.layoutBox).x, s.x),
                    y: iO(t.y, s.y)
                };
                if (i) {
                    let t = i(function({x: t, y: e}) {
                        return {
                            top: e.min,
                            right: t.max,
                            bottom: e.max,
                            left: t.min
                        }
                    }(o));
                    this.hasMutatedConstraints = !!t,
                    t && (o = i_(t))
                }
                return o
            }
            startAnimation(t) {
                let {drag: e, dragMomentum: i, dragElastic: n, dragTransition: r, dragSnapToOrigin: s, onDragTransitionEnd: o} = this.getProps()
                  , a = this.constraints || {};
                return Promise.all(iW(o => {
                    if (!i4(o, e, this.currentDirection))
                        return;
                    let l = a && a[o] || {};
                    s && (l = {
                        min: 0,
                        max: 0
                    });
                    let u = {
                        type: "inertia",
                        velocity: i ? t[o] : 0,
                        bounceStiffness: n ? 200 : 1e6,
                        bounceDamping: n ? 40 : 1e7,
                        timeConstant: 750,
                        restDelta: 1,
                        restSpeed: 10,
                        ...r,
                        ...l
                    };
                    return this.startAxisValueAnimation(o, u)
                }
                )).then(o)
            }
            startAxisValueAnimation(t, e) {
                let i = this.getAxisMotionValue(t);
                return j(this.visualElement, t),
                i.start(e8(t, i, 0, e, this.visualElement, !1))
            }
            stopAnimation() {
                iW(t => this.getAxisMotionValue(t).stop())
            }
            pauseAnimation() {
                iW(t => {
                    var e;
                    return null === (e = this.getAxisMotionValue(t).animation) || void 0 === e ? void 0 : e.pause()
                }
                )
            }
            getAnimationState(t) {
                var e;
                return null === (e = this.getAxisMotionValue(t).animation) || void 0 === e ? void 0 : e.state
            }
            getAxisMotionValue(t) {
                let e = `_drag${t.toUpperCase()}`
                  , i = this.visualElement.getProps();
                return i[e] || this.visualElement.getValue(t, (i.initial ? i.initial[t] : void 0) || 0)
            }
            snapToCursor(t) {
                iW(e => {
                    let {drag: i} = this.getProps();
                    if (!i4(e, i, this.currentDirection))
                        return;
                    let {projection: n} = this.visualElement
                      , r = this.getAxisMotionValue(e);
                    if (n && n.layout) {
                        let {min: i, max: s} = n.layout.layoutBox[e];
                        r.set(t[e] - ev(i, s, .5))
                    }
                }
                )
            }
            scalePositionWithinConstraints() {
                if (!this.visualElement.current)
                    return;
                let {drag: t, dragConstraints: e} = this.getProps()
                  , {projection: i} = this.visualElement;
                if (!ik(e) || !i || !this.constraints)
                    return;
                this.stopAnimation();
                let n = {
                    x: 0,
                    y: 0
                };
                iW(t => {
                    let e = this.getAxisMotionValue(t);
                    if (e && !1 !== this.constraints) {
                        let i = e.get();
                        n[t] = function(t, e) {
                            let i = .5
                              , n = iC(t)
                              , r = iC(e);
                            return r > n ? i = q(e.min, e.max - n, t.min) : n > r && (i = q(t.min, t.max - r, e.min)),
                            th(0, 1, i)
                        }({
                            min: i,
                            max: i
                        }, this.constraints[t])
                    }
                }
                );
                let {transformTemplate: r} = this.visualElement.getProps();
                this.visualElement.current.style.transform = r ? r({}, "") : "none",
                i.root && i.root.updateScroll(),
                i.updateLayout(),
                this.resolveConstraints(),
                iW(e => {
                    if (!i4(e, t, null))
                        return;
                    let i = this.getAxisMotionValue(e)
                      , {min: r, max: s} = this.constraints[e];
                    i.set(ev(r, s, n[e]))
                }
                )
            }
            addListeners() {
                if (!this.visualElement.current)
                    return;
                i3.set(this.visualElement, this);
                let t = iw(this.visualElement.current, "pointerdown", t => {
                    let {drag: e, dragListener: i=!0} = this.getProps();
                    e && i && this.start(t)
                }
                )
                  , e = () => {
                    let {dragConstraints: t} = this.getProps();
                    ik(t) && t.current && (this.constraints = this.resolveRefConstraints())
                }
                  , {projection: i} = this.visualElement
                  , n = i.addEventListener("measure", e);
                i && !i.layout && (i.root && i.root.updateScroll(),
                i.updateLayout()),
                x.read(e);
                let r = iy(window, "resize", () => this.scalePositionWithinConstraints())
                  , s = i.addEventListener("didUpdate", ({delta: t, hasLayoutChanged: e}) => {
                    this.isDragging && e && (iW(e => {
                        let i = this.getAxisMotionValue(e);
                        i && (this.originPoint[e] += t[e].translate,
                        i.set(i.get() + t[e].translate))
                    }
                    ),
                    this.visualElement.render())
                }
                );
                return () => {
                    r(),
                    t(),
                    n(),
                    s && s()
                }
            }
            getProps() {
                let t = this.visualElement.getProps()
                  , {drag: e=!1, dragDirectionLock: i=!1, dragPropagation: n=!1, dragConstraints: r=!1, dragElastic: s=.35, dragMomentum: o=!0} = t;
                return {
                    ...t,
                    drag: e,
                    dragDirectionLock: i,
                    dragPropagation: n,
                    dragConstraints: r,
                    dragElastic: s,
                    dragMomentum: o
                }
            }
        }
        function i4(t, e, i) {
            return (!0 === e || e === t) && (null === i || i === t)
        }
        class i9 extends id {
            constructor(t) {
                super(t),
                this.removeGroupControls = f,
                this.removeListeners = f,
                this.controls = new i5(t)
            }
            mount() {
                let {dragControls: t} = this.node.getProps();
                t && (this.removeGroupControls = t.subscribe(this.controls)),
                this.removeListeners = this.controls.addListeners() || f
            }
            unmount() {
                this.removeGroupControls(),
                this.removeListeners()
            }
        }
        let i8 = t => (e, i) => {
            t && x.postRender( () => t(e, i))
        }
        ;
        class i6 extends id {
            constructor() {
                super(...arguments),
                this.removePointerDownListener = f
            }
            onPointerDown(t) {
                this.session = new iT(t,this.createPanHandlers(),{
                    transformPagePoint: this.node.getTransformPagePoint(),
                    contextWindow: i2(this.node)
                })
            }
            createPanHandlers() {
                let {onPanSessionStart: t, onPanStart: e, onPan: i, onPanEnd: n} = this.node.getProps();
                return {
                    onSessionStart: i8(t),
                    onStart: i8(e),
                    onMove: i,
                    onEnd: (t, e) => {
                        delete this.session,
                        n && x.postRender( () => n(t, e))
                    }
                }
            }
            mount() {
                this.removePointerDownListener = iw(this.node.current, "pointerdown", t => this.onPointerDown(t))
            }
            update() {
                this.session && this.session.updateHandlers(this.createPanHandlers())
            }
            unmount() {
                this.removePointerDownListener(),
                this.session && this.session.end()
            }
        }
        var i7, nt, ne = i(4884), ni = i(4843);
        let nn = (0,
        ni.createContext)(null)
          , nr = (0,
        ni.createContext)({})
          , ns = (0,
        ni.createContext)({})
          , no = {
            hasAnimatedSinceResize: !0,
            hasEverUpdated: !1
        };
        function na(t, e) {
            return e.max === e.min ? 0 : t / (e.max - e.min) * 100
        }
        let nl = {
            correct: (t, e) => {
                if (!e.target)
                    return t;
                if ("string" == typeof t) {
                    if (!tE.test(t))
                        return t;
                    t = parseFloat(t)
                }
                let i = na(t, e.target.x)
                  , n = na(t, e.target.y);
                return `${i}% ${n}%`
            }
        }
          , nu = {}
          , {schedule: nh, cancel: nd} = y(queueMicrotask, !1);
        class nc extends ni.Component {
            componentDidMount() {
                let {visualElement: t, layoutGroup: e, switchLayoutGroup: i, layoutId: n} = this.props
                  , {projection: r} = t;
                !function(t) {
                    for (let e in t)
                        nu[e] = t[e],
                        ee(e) && (nu[e].isCSSVariable = !0)
                }(nm),
                r && (e.group && e.group.add(r),
                i && i.register && n && i.register(r),
                r.root.didUpdate(),
                r.addEventListener("animationComplete", () => {
                    this.safeToRemove()
                }
                ),
                r.setOptions({
                    ...r.options,
                    onExitComplete: () => this.safeToRemove()
                })),
                no.hasEverUpdated = !0
            }
            getSnapshotBeforeUpdate(t) {
                let {layoutDependency: e, visualElement: i, drag: n, isPresent: r} = this.props
                  , s = i.projection;
                return s && (s.isPresent = r,
                n || t.layoutDependency !== e || void 0 === e ? s.willUpdate() : this.safeToRemove(),
                t.isPresent === r || (r ? s.promote() : s.relegate() || x.postRender( () => {
                    let t = s.getStack();
                    t && t.members.length || this.safeToRemove()
                }
                ))),
                null
            }
            componentDidUpdate() {
                let {projection: t} = this.props.visualElement;
                t && (t.root.didUpdate(),
                nh.postRender( () => {
                    !t.currentAnimation && t.isLead() && this.safeToRemove()
                }
                ))
            }
            componentWillUnmount() {
                let {visualElement: t, layoutGroup: e, switchLayoutGroup: i} = this.props
                  , {projection: n} = t;
                n && (n.scheduleCheckAfterUnmount(),
                e && e.group && e.group.remove(n),
                i && i.deregister && i.deregister(n))
            }
            safeToRemove() {
                let {safeToRemove: t} = this.props;
                t && t()
            }
            render() {
                return null
            }
        }
        function np(t) {
            let[e,i] = function(t=!0) {
                let e = (0,
                ni.useContext)(nn);
                if (null === e)
                    return [!0, null];
                let {isPresent: i, onExitComplete: n, register: r} = e
                  , s = (0,
                ni.useId)();
                (0,
                ni.useEffect)( () => {
                    t && r(s)
                }
                , [t]);
                let o = (0,
                ni.useCallback)( () => t && n && n(s), [s, n, t]);
                return !i && n ? [!1, o] : [!0]
            }()
              , n = (0,
            ni.useContext)(nr);
            return (0,
            ne.jsx)(nc, {
                ...t,
                layoutGroup: n,
                switchLayoutGroup: (0,
                ni.useContext)(ns),
                isPresent: e,
                safeToRemove: i
            })
        }
        let nm = {
            borderRadius: {
                ...nl,
                applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
            },
            borderTopLeftRadius: nl,
            borderTopRightRadius: nl,
            borderBottomLeftRadius: nl,
            borderBottomRightRadius: nl,
            boxShadow: {
                correct: (t, {treeScale: e, projectionDelta: i}) => {
                    let n = tU.parse(t);
                    if (n.length > 5)
                        return t;
                    let r = tU.createTransformer(t)
                      , s = "number" != typeof n[0] ? 1 : 0
                      , o = i.x.scale * e.x
                      , a = i.y.scale * e.y;
                    n[0 + s] /= o,
                    n[1 + s] /= a;
                    let l = ev(o, a, .5);
                    return "number" == typeof n[2 + s] && (n[2 + s] /= l),
                    "number" == typeof n[3 + s] && (n[3 + s] /= l),
                    r(n)
                }
            }
        }
          , nf = (t, e) => t.depth - e.depth;
        class nv {
            constructor() {
                this.children = [],
                this.isDirty = !1
            }
            add(t) {
                A(this.children, t),
                this.isDirty = !0
            }
            remove(t) {
                E(this.children, t),
                this.isDirty = !0
            }
            forEach(t) {
                this.isDirty && this.children.sort(nf),
                this.isDirty = !1,
                this.children.forEach(t)
            }
        }
        function ng(t) {
            let e = D(t) ? t.get() : t;
            return c(e) ? e.toValue() : e
        }
        let ny = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
          , nx = ny.length
          , nb = t => "string" == typeof t ? parseFloat(t) : t
          , nw = t => "number" == typeof t || tE.test(t);
        function nP(t, e) {
            return void 0 !== t[e] ? t[e] : t.borderRadius
        }
        let nT = nA(0, .5, ta)
          , nS = nA(.5, .95, f);
        function nA(t, e, i) {
            return n => n < t ? 0 : n > e ? 1 : i(q(t, e, n))
        }
        function nE(t, e) {
            t.min = e.min,
            t.max = e.max
        }
        function nM(t, e) {
            nE(t.x, e.x),
            nE(t.y, e.y)
        }
        function nk(t, e) {
            t.translate = e.translate,
            t.scale = e.scale,
            t.originPoint = e.originPoint,
            t.origin = e.origin
        }
        function nC(t, e, i, n, r) {
            return t -= e,
            t = n + 1 / i * (t - n),
            void 0 !== r && (t = n + 1 / r * (t - n)),
            t
        }
        function nR(t, e, [i,n,r], s, o) {
            !function(t, e=0, i=1, n=.5, r, s=t, o=t) {
                if (tA.test(e) && (e = parseFloat(e),
                e = ev(o.min, o.max, e / 100) - o.min),
                "number" != typeof e)
                    return;
                let a = ev(s.min, s.max, n);
                t === s && (a -= e),
                t.min = nC(t.min, e, i, a, r),
                t.max = nC(t.max, e, i, a, r)
            }(t, e[i], e[n], e[r], e.scale, s, o)
        }
        let nV = ["x", "scaleX", "originX"]
          , nD = ["y", "scaleY", "originY"];
        function nj(t, e, i, n) {
            nR(t.x, e, nV, i ? i.x : void 0, n ? n.x : void 0),
            nR(t.y, e, nD, i ? i.y : void 0, n ? n.y : void 0)
        }
        function nL(t) {
            return 0 === t.translate && 1 === t.scale
        }
        function nF(t) {
            return nL(t.x) && nL(t.y)
        }
        function nO(t, e) {
            return t.min === e.min && t.max === e.max
        }
        function nB(t, e) {
            return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max)
        }
        function nI(t, e) {
            return nB(t.x, e.x) && nB(t.y, e.y)
        }
        function nN(t) {
            return iC(t.x) / iC(t.y)
        }
        function nU(t, e) {
            return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint
        }
        class nz {
            constructor() {
                this.members = []
            }
            add(t) {
                A(this.members, t),
                t.scheduleRender()
            }
            remove(t) {
                if (E(this.members, t),
                t === this.prevLead && (this.prevLead = void 0),
                t === this.lead) {
                    let t = this.members[this.members.length - 1];
                    t && this.promote(t)
                }
            }
            relegate(t) {
                let e;
                let i = this.members.findIndex(e => t === e);
                if (0 === i)
                    return !1;
                for (let t = i; t >= 0; t--) {
                    let i = this.members[t];
                    if (!1 !== i.isPresent) {
                        e = i;
                        break
                    }
                }
                return !!e && (this.promote(e),
                !0)
            }
            promote(t, e) {
                let i = this.lead;
                if (t !== i && (this.prevLead = i,
                this.lead = t,
                t.show(),
                i)) {
                    i.instance && i.scheduleRender(),
                    t.scheduleRender(),
                    t.resumeFrom = i,
                    e && (t.resumeFrom.preserveOpacity = !0),
                    i.snapshot && (t.snapshot = i.snapshot,
                    t.snapshot.latestValues = i.animationValues || i.latestValues),
                    t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
                    let {crossfade: n} = t.options;
                    !1 === n && i.hide()
                }
            }
            exitAnimationComplete() {
                this.members.forEach(t => {
                    let {options: e, resumingFrom: i} = t;
                    e.onExitComplete && e.onExitComplete(),
                    i && i.options.onExitComplete && i.options.onExitComplete()
                }
                )
            }
            scheduleRender() {
                this.members.forEach(t => {
                    t.instance && t.scheduleRender(!1)
                }
                )
            }
            removeLeadSnapshot() {
                this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
            }
        }
        let n$ = {
            nodes: 0,
            calculatedTargetDeltas: 0,
            calculatedProjections: 0
        }
          , nW = ["", "X", "Y", "Z"]
          , n_ = {
            visibility: "hidden"
        }
          , nK = 0;
        function nH(t, e, i, n) {
            let {latestValues: r} = e;
            r[t] && (i[t] = r[t],
            e.setStaticValue(t, 0),
            n && (n[t] = 0))
        }
        function nY({attachResizeListener: t, defaultParent: e, measureScroll: i, checkIsScrollRoot: n, resetTransform: r}) {
            return class {
                constructor(t={}, i=null == e ? void 0 : e()) {
                    this.id = nK++,
                    this.animationId = 0,
                    this.children = new Set,
                    this.options = {},
                    this.isTreeAnimating = !1,
                    this.isAnimationBlocked = !1,
                    this.isLayoutDirty = !1,
                    this.isProjectionDirty = !1,
                    this.isSharedProjectionDirty = !1,
                    this.isTransformDirty = !1,
                    this.updateManuallyBlocked = !1,
                    this.updateBlockedByResize = !1,
                    this.isUpdating = !1,
                    this.isSVG = !1,
                    this.needsReset = !1,
                    this.shouldResetTransform = !1,
                    this.hasCheckedOptimisedAppear = !1,
                    this.treeScale = {
                        x: 1,
                        y: 1
                    },
                    this.eventHandlers = new Map,
                    this.hasTreeAnimated = !1,
                    this.updateScheduled = !1,
                    this.scheduleUpdate = () => this.update(),
                    this.projectionUpdateScheduled = !1,
                    this.checkUpdateFailed = () => {
                        this.isUpdating && (this.isUpdating = !1,
                        this.clearAllSnapshots())
                    }
                    ,
                    this.updateProjection = () => {
                        this.projectionUpdateScheduled = !1,
                        g.value && (n$.nodes = n$.calculatedTargetDeltas = n$.calculatedProjections = 0),
                        this.nodes.forEach(nG),
                        this.nodes.forEach(n3),
                        this.nodes.forEach(n5),
                        this.nodes.forEach(nZ),
                        g.addProjectionMetrics && g.addProjectionMetrics(n$)
                    }
                    ,
                    this.resolvedRelativeTargetAt = 0,
                    this.hasProjected = !1,
                    this.isVisible = !0,
                    this.animationProgress = 0,
                    this.sharedNodes = new Map,
                    this.latestValues = t,
                    this.root = i ? i.root || i : this,
                    this.path = i ? [...i.path, i] : [],
                    this.parent = i,
                    this.depth = i ? i.depth + 1 : 0;
                    for (let t = 0; t < this.path.length; t++)
                        this.path[t].shouldResetTransform = !0;
                    this.root === this && (this.nodes = new nv)
                }
                addEventListener(t, e) {
                    return this.eventHandlers.has(t) || this.eventHandlers.set(t, new M),
                    this.eventHandlers.get(t).add(e)
                }
                notifyListeners(t, ...e) {
                    let i = this.eventHandlers.get(t);
                    i && i.notify(...e)
                }
                hasListeners(t) {
                    return this.eventHandlers.has(t)
                }
                mount(e, i=this.root.hasTreeAnimated) {
                    if (this.instance)
                        return;
                    this.isSVG = e instanceof SVGElement && "svg" !== e.tagName,
                    this.instance = e;
                    let {layoutId: n, layout: r, visualElement: s} = this.options;
                    if (s && !s.current && s.mount(e),
                    this.root.nodes.add(this),
                    this.parent && this.parent.children.add(this),
                    i && (r || n) && (this.isLayoutDirty = !0),
                    t) {
                        let i;
                        let n = () => this.root.updateBlockedByResize = !1;
                        t(e, () => {
                            this.root.updateBlockedByResize = !0,
                            i && i(),
                            i = function(t, e) {
                                let i = S.now()
                                  , n = ({timestamp: e}) => {
                                    let r = e - i;
                                    r >= 250 && (b(n),
                                    t(r - 250))
                                }
                                ;
                                return x.read(n, !0),
                                () => b(n)
                            }(n, 250),
                            no.hasAnimatedSinceResize && (no.hasAnimatedSinceResize = !1,
                            this.nodes.forEach(n2))
                        }
                        )
                    }
                    n && this.root.registerSharedNode(n, this),
                    !1 !== this.options.animate && s && (n || r) && this.addEventListener("didUpdate", ({delta: t, hasLayoutChanged: e, hasRelativeLayoutChanged: i, layout: n}) => {
                        if (this.isTreeAnimationBlocked()) {
                            this.target = void 0,
                            this.relativeTarget = void 0;
                            return
                        }
                        let r = this.options.transition || s.getDefaultTransition() || rt
                          , {onLayoutAnimationStart: o, onLayoutAnimationComplete: l} = s.getProps()
                          , u = !this.targetLayout || !nI(this.targetLayout, n)
                          , h = !e && i;
                        if (this.options.layoutRoot || this.resumeFrom || h || e && (u || !this.currentAnimation)) {
                            this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                            this.resumingFrom.resumingFrom = void 0),
                            this.setAnimationOrigin(t, h);
                            let e = {
                                ...a(r, "layout"),
                                onPlay: o,
                                onComplete: l
                            };
                            (s.shouldReduceMotion || this.options.layoutRoot) && (e.delay = 0,
                            e.type = !1),
                            this.startAnimation(e)
                        } else
                            e || n2(this),
                            this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                        this.targetLayout = n
                    }
                    )
                }
                unmount() {
                    this.options.layoutId && this.willUpdate(),
                    this.root.nodes.remove(this);
                    let t = this.getStack();
                    t && t.remove(this),
                    this.parent && this.parent.children.delete(this),
                    this.instance = void 0,
                    b(this.updateProjection)
                }
                blockUpdate() {
                    this.updateManuallyBlocked = !0
                }
                unblockUpdate() {
                    this.updateManuallyBlocked = !1
                }
                isUpdateBlocked() {
                    return this.updateManuallyBlocked || this.updateBlockedByResize
                }
                isTreeAnimationBlocked() {
                    return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
                }
                startUpdate() {
                    !this.isUpdateBlocked() && (this.isUpdating = !0,
                    this.nodes && this.nodes.forEach(n4),
                    this.animationId++)
                }
                getTransformTemplate() {
                    let {visualElement: t} = this.options;
                    return t && t.getProps().transformTemplate
                }
                willUpdate(t=!0) {
                    if (this.root.hasTreeAnimated = !0,
                    this.root.isUpdateBlocked()) {
                        this.options.onExitComplete && this.options.onExitComplete();
                        return
                    }
                    if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && function t(e) {
                        if (e.hasCheckedOptimisedAppear = !0,
                        e.root === e)
                            return;
                        let {visualElement: i} = e.options;
                        if (!i)
                            return;
                        let n = i.props[F];
                        if (window.MotionHasOptimisedAnimation(n, "transform")) {
                            let {layout: t, layoutId: i} = e.options;
                            window.MotionCancelOptimisedAnimation(n, "transform", x, !(t || i))
                        }
                        let {parent: r} = e;
                        r && !r.hasCheckedOptimisedAppear && t(r)
                    }(this),
                    this.root.isUpdating || this.root.startUpdate(),
                    this.isLayoutDirty)
                        return;
                    this.isLayoutDirty = !0;
                    for (let t = 0; t < this.path.length; t++) {
                        let e = this.path[t];
                        e.shouldResetTransform = !0,
                        e.updateScroll("snapshot"),
                        e.options.layoutRoot && e.willUpdate(!1)
                    }
                    let {layoutId: e, layout: i} = this.options;
                    if (void 0 === e && !i)
                        return;
                    let n = this.getTransformTemplate();
                    this.prevTransformTemplateValue = n ? n(this.latestValues, "") : void 0,
                    this.updateSnapshot(),
                    t && this.notifyListeners("willUpdate")
                }
                update() {
                    if (this.updateScheduled = !1,
                    this.isUpdateBlocked()) {
                        this.unblockUpdate(),
                        this.clearAllSnapshots(),
                        this.nodes.forEach(nQ);
                        return
                    }
                    this.isUpdating || this.nodes.forEach(n0),
                    this.isUpdating = !1,
                    this.nodes.forEach(n1),
                    this.nodes.forEach(nq),
                    this.nodes.forEach(nX),
                    this.clearAllSnapshots();
                    let t = S.now();
                    w.delta = th(0, 1e3 / 60, t - w.timestamp),
                    w.timestamp = t,
                    w.isProcessing = !0,
                    P.update.process(w),
                    P.preRender.process(w),
                    P.render.process(w),
                    w.isProcessing = !1
                }
                didUpdate() {
                    this.updateScheduled || (this.updateScheduled = !0,
                    nh.read(this.scheduleUpdate))
                }
                clearAllSnapshots() {
                    this.nodes.forEach(nJ),
                    this.sharedNodes.forEach(n9)
                }
                scheduleUpdateProjection() {
                    this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
                    x.preRender(this.updateProjection, !1, !0))
                }
                scheduleCheckAfterUnmount() {
                    x.postRender( () => {
                        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
                    }
                    )
                }
                updateSnapshot() {
                    this.snapshot || !this.instance || (this.snapshot = this.measure(),
                    !this.snapshot || iC(this.snapshot.measuredBox.x) || iC(this.snapshot.measuredBox.y) || (this.snapshot = void 0))
                }
                updateLayout() {
                    if (!this.instance || (this.updateScroll(),
                    !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                        return;
                    if (this.resumeFrom && !this.resumeFrom.instance)
                        for (let t = 0; t < this.path.length; t++)
                            this.path[t].updateScroll();
                    let t = this.layout;
                    this.layout = this.measure(!1),
                    this.layoutCorrected = i$(),
                    this.isLayoutDirty = !1,
                    this.projectionDelta = void 0,
                    this.notifyListeners("measure", this.layout.layoutBox);
                    let {visualElement: e} = this.options;
                    e && e.notify("LayoutMeasure", this.layout.layoutBox, t ? t.layoutBox : void 0)
                }
                updateScroll(t="measure") {
                    let e = !!(this.options.layoutScroll && this.instance);
                    if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === t && (e = !1),
                    e) {
                        let e = n(this.instance);
                        this.scroll = {
                            animationId: this.root.animationId,
                            phase: t,
                            isRoot: e,
                            offset: i(this.instance),
                            wasRoot: this.scroll ? this.scroll.isRoot : e
                        }
                    }
                }
                resetTransform() {
                    if (!r)
                        return;
                    let t = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout
                      , e = this.projectionDelta && !nF(this.projectionDelta)
                      , i = this.getTransformTemplate()
                      , n = i ? i(this.latestValues, "") : void 0
                      , s = n !== this.prevTransformTemplateValue;
                    t && (e || iY(this.latestValues) || s) && (r(this.instance, n),
                    this.shouldResetTransform = !1,
                    this.scheduleRender())
                }
                measure(t=!0) {
                    var e;
                    let i = this.measurePageBox()
                      , n = this.removeElementScroll(i);
                    return t && (n = this.removeTransform(n)),
                    rn((e = n).x),
                    rn(e.y),
                    {
                        animationId: this.root.animationId,
                        measuredBox: i,
                        layoutBox: n,
                        latestValues: {},
                        source: this.id
                    }
                }
                measurePageBox() {
                    var t;
                    let {visualElement: e} = this.options;
                    if (!e)
                        return i$();
                    let i = e.measureViewportBox();
                    if (!((null === (t = this.scroll) || void 0 === t ? void 0 : t.wasRoot) || this.path.some(rs))) {
                        let {scroll: t} = this.root;
                        t && (iJ(i.x, t.offset.x),
                        iJ(i.y, t.offset.y))
                    }
                    return i
                }
                removeElementScroll(t) {
                    var e;
                    let i = i$();
                    if (nM(i, t),
                    null === (e = this.scroll) || void 0 === e ? void 0 : e.wasRoot)
                        return i;
                    for (let e = 0; e < this.path.length; e++) {
                        let n = this.path[e]
                          , {scroll: r, options: s} = n;
                        n !== this.root && r && s.layoutScroll && (r.wasRoot && nM(i, t),
                        iJ(i.x, r.offset.x),
                        iJ(i.y, r.offset.y))
                    }
                    return i
                }
                applyTransform(t, e=!1) {
                    let i = i$();
                    nM(i, t);
                    for (let t = 0; t < this.path.length; t++) {
                        let n = this.path[t];
                        !e && n.options.layoutScroll && n.scroll && n !== n.root && i0(i, {
                            x: -n.scroll.offset.x,
                            y: -n.scroll.offset.y
                        }),
                        iY(n.latestValues) && i0(i, n.latestValues)
                    }
                    return iY(this.latestValues) && i0(i, this.latestValues),
                    i
                }
                removeTransform(t) {
                    let e = i$();
                    nM(e, t);
                    for (let t = 0; t < this.path.length; t++) {
                        let i = this.path[t];
                        if (!i.instance || !iY(i.latestValues))
                            continue;
                        iH(i.latestValues) && i.updateSnapshot();
                        let n = i$();
                        nM(n, i.measurePageBox()),
                        nj(e, i.latestValues, i.snapshot ? i.snapshot.layoutBox : void 0, n)
                    }
                    return iY(this.latestValues) && nj(e, this.latestValues),
                    e
                }
                setTargetDelta(t) {
                    this.targetDelta = t,
                    this.root.scheduleUpdateProjection(),
                    this.isProjectionDirty = !0
                }
                setOptions(t) {
                    this.options = {
                        ...this.options,
                        ...t,
                        crossfade: void 0 === t.crossfade || t.crossfade
                    }
                }
                clearMeasurements() {
                    this.scroll = void 0,
                    this.layout = void 0,
                    this.snapshot = void 0,
                    this.prevTransformTemplateValue = void 0,
                    this.targetDelta = void 0,
                    this.target = void 0,
                    this.isLayoutDirty = !1
                }
                forceRelativeParentToResolveTarget() {
                    this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== w.timestamp && this.relativeParent.resolveTargetDelta(!0)
                }
                resolveTargetDelta(t=!1) {
                    var e, i, n, r;
                    let s = this.getLead();
                    this.isProjectionDirty || (this.isProjectionDirty = s.isProjectionDirty),
                    this.isTransformDirty || (this.isTransformDirty = s.isTransformDirty),
                    this.isSharedProjectionDirty || (this.isSharedProjectionDirty = s.isSharedProjectionDirty);
                    let o = !!this.resumingFrom || this !== s;
                    if (!(t || o && this.isSharedProjectionDirty || this.isProjectionDirty || (null === (e = this.parent) || void 0 === e ? void 0 : e.isProjectionDirty) || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
                        return;
                    let {layout: a, layoutId: l} = this.options;
                    if (this.layout && (a || l)) {
                        if (this.resolvedRelativeTargetAt = w.timestamp,
                        !this.targetDelta && !this.relativeTarget) {
                            let t = this.getClosestProjectingParent();
                            t && t.layout && 1 !== this.animationProgress ? (this.relativeParent = t,
                            this.forceRelativeParentToResolveTarget(),
                            this.relativeTarget = i$(),
                            this.relativeTargetOrigin = i$(),
                            iL(this.relativeTargetOrigin, this.layout.layoutBox, t.layout.layoutBox),
                            nM(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                        }
                        if (this.relativeTarget || this.targetDelta) {
                            if ((this.target || (this.target = i$(),
                            this.targetWithTransforms = i$()),
                            this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) ? (this.forceRelativeParentToResolveTarget(),
                            i = this.target,
                            n = this.relativeTarget,
                            r = this.relativeParent.target,
                            iD(i.x, n.x, r.x),
                            iD(i.y, n.y, r.y)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : nM(this.target, this.layout.layoutBox),
                            iZ(this.target, this.targetDelta)) : nM(this.target, this.layout.layoutBox),
                            this.attemptToResolveRelativeTarget) {
                                this.attemptToResolveRelativeTarget = !1;
                                let t = this.getClosestProjectingParent();
                                t && !!t.resumingFrom == !!this.resumingFrom && !t.options.layoutScroll && t.target && 1 !== this.animationProgress ? (this.relativeParent = t,
                                this.forceRelativeParentToResolveTarget(),
                                this.relativeTarget = i$(),
                                this.relativeTargetOrigin = i$(),
                                iL(this.relativeTargetOrigin, this.target, t.target),
                                nM(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                            }
                            g.value && n$.calculatedTargetDeltas++
                        }
                    }
                }
                getClosestProjectingParent() {
                    return !this.parent || iH(this.parent.latestValues) || iq(this.parent.latestValues) ? void 0 : this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
                }
                isProjecting() {
                    return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
                }
                calcProjection() {
                    var t;
                    let e = this.getLead()
                      , i = !!this.resumingFrom || this !== e
                      , n = !0;
                    if ((this.isProjectionDirty || (null === (t = this.parent) || void 0 === t ? void 0 : t.isProjectionDirty)) && (n = !1),
                    i && (this.isSharedProjectionDirty || this.isTransformDirty) && (n = !1),
                    this.resolvedRelativeTargetAt === w.timestamp && (n = !1),
                    n)
                        return;
                    let {layout: r, layoutId: s} = this.options;
                    if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
                    this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
                    !this.layout || !(r || s))
                        return;
                    nM(this.layoutCorrected, this.layout.layoutBox);
                    let o = this.treeScale.x
                      , a = this.treeScale.y;
                    !function(t, e, i, n=!1) {
                        let r, s;
                        let o = i.length;
                        if (o) {
                            e.x = e.y = 1;
                            for (let a = 0; a < o; a++) {
                                s = (r = i[a]).projectionDelta;
                                let {visualElement: o} = r.options;
                                (!o || !o.props.style || "contents" !== o.props.style.display) && (n && r.options.layoutScroll && r.scroll && r !== r.root && i0(t, {
                                    x: -r.scroll.offset.x,
                                    y: -r.scroll.offset.y
                                }),
                                s && (e.x *= s.x.scale,
                                e.y *= s.y.scale,
                                iZ(t, s)),
                                n && iY(r.latestValues) && i0(t, r.latestValues))
                            }
                            e.x < 1.0000000000001 && e.x > .999999999999 && (e.x = 1),
                            e.y < 1.0000000000001 && e.y > .999999999999 && (e.y = 1)
                        }
                    }(this.layoutCorrected, this.treeScale, this.path, i),
                    e.layout && !e.target && (1 !== this.treeScale.x || 1 !== this.treeScale.y) && (e.target = e.layout.layoutBox,
                    e.targetWithTransforms = i$());
                    let {target: l} = e;
                    if (!l) {
                        this.prevProjectionDelta && (this.createProjectionDeltas(),
                        this.scheduleRender());
                        return
                    }
                    this.projectionDelta && this.prevProjectionDelta ? (nk(this.prevProjectionDelta.x, this.projectionDelta.x),
                    nk(this.prevProjectionDelta.y, this.projectionDelta.y)) : this.createProjectionDeltas(),
                    iV(this.projectionDelta, this.layoutCorrected, l, this.latestValues),
                    this.treeScale.x === o && this.treeScale.y === a && nU(this.projectionDelta.x, this.prevProjectionDelta.x) && nU(this.projectionDelta.y, this.prevProjectionDelta.y) || (this.hasProjected = !0,
                    this.scheduleRender(),
                    this.notifyListeners("projectionUpdate", l)),
                    g.value && n$.calculatedProjections++
                }
                hide() {
                    this.isVisible = !1
                }
                show() {
                    this.isVisible = !0
                }
                scheduleRender(t=!0) {
                    var e;
                    if (null === (e = this.options.visualElement) || void 0 === e || e.scheduleRender(),
                    t) {
                        let t = this.getStack();
                        t && t.scheduleRender()
                    }
                    this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
                }
                createProjectionDeltas() {
                    this.prevProjectionDelta = iU(),
                    this.projectionDelta = iU(),
                    this.projectionDeltaWithTransform = iU()
                }
                setAnimationOrigin(t, e=!1) {
                    let i;
                    let n = this.snapshot
                      , r = n ? n.latestValues : {}
                      , s = {
                        ...this.latestValues
                    }
                      , o = iU();
                    this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0),
                    this.attemptToResolveRelativeTarget = !e;
                    let a = i$()
                      , l = (n ? n.source : void 0) !== (this.layout ? this.layout.source : void 0)
                      , u = this.getStack()
                      , h = !u || u.members.length <= 1
                      , d = !!(l && !h && !0 === this.options.crossfade && !this.path.some(n7));
                    this.animationProgress = 0,
                    this.mixTargetDelta = e => {
                        let n = e / 1e3;
                        if (n8(o.x, t.x, n),
                        n8(o.y, t.y, n),
                        this.setTargetDelta(o),
                        this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
                            var u, c, p, m;
                            iL(a, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                            p = this.relativeTarget,
                            m = this.relativeTargetOrigin,
                            n6(p.x, m.x, a.x, n),
                            n6(p.y, m.y, a.y, n),
                            i && (u = this.relativeTarget,
                            c = i,
                            nO(u.x, c.x) && nO(u.y, c.y)) && (this.isProjectionDirty = !1),
                            i || (i = i$()),
                            nM(i, this.relativeTarget)
                        }
                        l && (this.animationValues = s,
                        function(t, e, i, n, r, s) {
                            r ? (t.opacity = ev(0, void 0 !== i.opacity ? i.opacity : 1, nT(n)),
                            t.opacityExit = ev(void 0 !== e.opacity ? e.opacity : 1, 0, nS(n))) : s && (t.opacity = ev(void 0 !== e.opacity ? e.opacity : 1, void 0 !== i.opacity ? i.opacity : 1, n));
                            for (let r = 0; r < nx; r++) {
                                let s = `border${ny[r]}Radius`
                                  , o = nP(e, s)
                                  , a = nP(i, s);
                                (void 0 !== o || void 0 !== a) && (o || (o = 0),
                                a || (a = 0),
                                0 === o || 0 === a || nw(o) === nw(a) ? (t[s] = Math.max(ev(nb(o), nb(a), n), 0),
                                (tA.test(a) || tA.test(o)) && (t[s] += "%")) : t[s] = a)
                            }
                            (e.rotate || i.rotate) && (t.rotate = ev(e.rotate || 0, i.rotate || 0, n))
                        }(s, r, this.latestValues, n, d, h)),
                        this.root.scheduleUpdateProjection(),
                        this.scheduleRender(),
                        this.animationProgress = n
                    }
                    ,
                    this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
                }
                startAnimation(t) {
                    this.notifyListeners("animationStart"),
                    this.currentAnimation && this.currentAnimation.stop(),
                    this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(),
                    this.pendingAnimation && (b(this.pendingAnimation),
                    this.pendingAnimation = void 0),
                    this.pendingAnimation = x.update( () => {
                        no.hasAnimatedSinceResize = !0,
                        ef.layout++,
                        this.currentAnimation = function(t, e, i) {
                            let n = D(0) ? 0 : V(0);
                            return n.start(e8("", n, 1e3, i)),
                            n.animation
                        }(0, 0, {
                            ...t,
                            onUpdate: e => {
                                this.mixTargetDelta(e),
                                t.onUpdate && t.onUpdate(e)
                            }
                            ,
                            onStop: () => {
                                ef.layout--
                            }
                            ,
                            onComplete: () => {
                                ef.layout--,
                                t.onComplete && t.onComplete(),
                                this.completeAnimation()
                            }
                        }),
                        this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                        this.pendingAnimation = void 0
                    }
                    )
                }
                completeAnimation() {
                    this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
                    this.resumingFrom.preserveOpacity = void 0);
                    let t = this.getStack();
                    t && t.exitAnimationComplete(),
                    this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
                    this.notifyListeners("animationComplete")
                }
                finishAnimation() {
                    this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3),
                    this.currentAnimation.stop()),
                    this.completeAnimation()
                }
                applyTransformsToTarget() {
                    let t = this.getLead()
                      , {targetWithTransforms: e, target: i, layout: n, latestValues: r} = t;
                    if (e && i && n) {
                        if (this !== t && this.layout && n && rr(this.options.animationType, this.layout.layoutBox, n.layoutBox)) {
                            i = this.target || i$();
                            let e = iC(this.layout.layoutBox.x);
                            i.x.min = t.target.x.min,
                            i.x.max = i.x.min + e;
                            let n = iC(this.layout.layoutBox.y);
                            i.y.min = t.target.y.min,
                            i.y.max = i.y.min + n
                        }
                        nM(e, i),
                        i0(e, r),
                        iV(this.projectionDeltaWithTransform, this.layoutCorrected, e, r)
                    }
                }
                registerSharedNode(t, e) {
                    this.sharedNodes.has(t) || this.sharedNodes.set(t, new nz),
                    this.sharedNodes.get(t).add(e);
                    let i = e.options.initialPromotionConfig;
                    e.promote({
                        transition: i ? i.transition : void 0,
                        preserveFollowOpacity: i && i.shouldPreserveFollowOpacity ? i.shouldPreserveFollowOpacity(e) : void 0
                    })
                }
                isLead() {
                    let t = this.getStack();
                    return !t || t.lead === this
                }
                getLead() {
                    var t;
                    let {layoutId: e} = this.options;
                    return e && (null === (t = this.getStack()) || void 0 === t ? void 0 : t.lead) || this
                }
                getPrevLead() {
                    var t;
                    let {layoutId: e} = this.options;
                    return e ? null === (t = this.getStack()) || void 0 === t ? void 0 : t.prevLead : void 0
                }
                getStack() {
                    let {layoutId: t} = this.options;
                    if (t)
                        return this.root.sharedNodes.get(t)
                }
                promote({needsReset: t, transition: e, preserveFollowOpacity: i}={}) {
                    let n = this.getStack();
                    n && n.promote(this, i),
                    t && (this.projectionDelta = void 0,
                    this.needsReset = !0),
                    e && this.setOptions({
                        transition: e
                    })
                }
                relegate() {
                    let t = this.getStack();
                    return !!t && t.relegate(this)
                }
                resetSkewAndRotation() {
                    let {visualElement: t} = this.options;
                    if (!t)
                        return;
                    let e = !1
                      , {latestValues: i} = t;
                    if ((i.z || i.rotate || i.rotateX || i.rotateY || i.rotateZ || i.skewX || i.skewY) && (e = !0),
                    !e)
                        return;
                    let n = {};
                    i.z && nH("z", t, n, this.animationValues);
                    for (let e = 0; e < nW.length; e++)
                        nH(`rotate${nW[e]}`, t, n, this.animationValues),
                        nH(`skew${nW[e]}`, t, n, this.animationValues);
                    for (let e in t.render(),
                    n)
                        t.setStaticValue(e, n[e]),
                        this.animationValues && (this.animationValues[e] = n[e]);
                    t.scheduleRender()
                }
                getProjectionStyles(t) {
                    var e, i;
                    if (!this.instance || this.isSVG)
                        return;
                    if (!this.isVisible)
                        return n_;
                    let n = {
                        visibility: ""
                    }
                      , r = this.getTransformTemplate();
                    if (this.needsReset)
                        return this.needsReset = !1,
                        n.opacity = "",
                        n.pointerEvents = ng(null == t ? void 0 : t.pointerEvents) || "",
                        n.transform = r ? r(this.latestValues, "") : "none",
                        n;
                    let s = this.getLead();
                    if (!this.projectionDelta || !this.layout || !s.target) {
                        let e = {};
                        return this.options.layoutId && (e.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1,
                        e.pointerEvents = ng(null == t ? void 0 : t.pointerEvents) || ""),
                        this.hasProjected && !iY(this.latestValues) && (e.transform = r ? r({}, "") : "none",
                        this.hasProjected = !1),
                        e
                    }
                    let o = s.animationValues || s.latestValues;
                    this.applyTransformsToTarget(),
                    n.transform = function(t, e, i) {
                        let n = ""
                          , r = t.x.translate / e.x
                          , s = t.y.translate / e.y
                          , o = (null == i ? void 0 : i.z) || 0;
                        if ((r || s || o) && (n = `translate3d(${r}px, ${s}px, ${o}px) `),
                        (1 !== e.x || 1 !== e.y) && (n += `scale(${1 / e.x}, ${1 / e.y}) `),
                        i) {
                            let {transformPerspective: t, rotate: e, rotateX: r, rotateY: s, skewX: o, skewY: a} = i;
                            t && (n = `perspective(${t}px) ${n}`),
                            e && (n += `rotate(${e}deg) `),
                            r && (n += `rotateX(${r}deg) `),
                            s && (n += `rotateY(${s}deg) `),
                            o && (n += `skewX(${o}deg) `),
                            a && (n += `skewY(${a}deg) `)
                        }
                        let a = t.x.scale * e.x
                          , l = t.y.scale * e.y;
                        return (1 !== a || 1 !== l) && (n += `scale(${a}, ${l})`),
                        n || "none"
                    }(this.projectionDeltaWithTransform, this.treeScale, o),
                    r && (n.transform = r(o, n.transform));
                    let {x: a, y: l} = this.projectionDelta;
                    for (let t in n.transformOrigin = `${100 * a.origin}% ${100 * l.origin}% 0`,
                    s.animationValues ? n.opacity = s === this ? null !== (i = null !== (e = o.opacity) && void 0 !== e ? e : this.latestValues.opacity) && void 0 !== i ? i : 1 : this.preserveOpacity ? this.latestValues.opacity : o.opacityExit : n.opacity = s === this ? void 0 !== o.opacity ? o.opacity : "" : void 0 !== o.opacityExit ? o.opacityExit : 0,
                    nu) {
                        if (void 0 === o[t])
                            continue;
                        let {correct: e, applyTo: i, isCSSVariable: r} = nu[t]
                          , a = "none" === n.transform ? o[t] : e(o[t], s);
                        if (i) {
                            let t = i.length;
                            for (let e = 0; e < t; e++)
                                n[i[e]] = a
                        } else
                            r ? this.options.visualElement.renderState.vars[t] = a : n[t] = a
                    }
                    return this.options.layoutId && (n.pointerEvents = s === this ? ng(null == t ? void 0 : t.pointerEvents) || "" : "none"),
                    n
                }
                clearSnapshot() {
                    this.resumeFrom = this.snapshot = void 0
                }
                resetTree() {
                    this.root.nodes.forEach(t => {
                        var e;
                        return null === (e = t.currentAnimation) || void 0 === e ? void 0 : e.stop()
                    }
                    ),
                    this.root.nodes.forEach(nQ),
                    this.root.sharedNodes.clear()
                }
            }
        }
        function nq(t) {
            t.updateLayout()
        }
        function nX(t) {
            var e;
            let i = (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) || t.snapshot;
            if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
                let {layoutBox: e, measuredBox: n} = t.layout
                  , {animationType: r} = t.options
                  , s = i.source !== t.layout.source;
                "size" === r ? iW(t => {
                    let n = s ? i.measuredBox[t] : i.layoutBox[t]
                      , r = iC(n);
                    n.min = e[t].min,
                    n.max = n.min + r
                }
                ) : rr(r, i.layoutBox, e) && iW(n => {
                    let r = s ? i.measuredBox[n] : i.layoutBox[n]
                      , o = iC(e[n]);
                    r.max = r.min + o,
                    t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0,
                    t.relativeTarget[n].max = t.relativeTarget[n].min + o)
                }
                );
                let o = iU();
                iV(o, e, i.layoutBox);
                let a = iU();
                s ? iV(a, t.applyTransform(n, !0), i.measuredBox) : iV(a, e, i.layoutBox);
                let l = !nF(o)
                  , u = !1;
                if (!t.resumeFrom) {
                    let n = t.getClosestProjectingParent();
                    if (n && !n.resumeFrom) {
                        let {snapshot: r, layout: s} = n;
                        if (r && s) {
                            let o = i$();
                            iL(o, i.layoutBox, r.layoutBox);
                            let a = i$();
                            iL(a, e, s.layoutBox),
                            nI(o, a) || (u = !0),
                            n.options.layoutRoot && (t.relativeTarget = a,
                            t.relativeTargetOrigin = o,
                            t.relativeParent = n)
                        }
                    }
                }
                t.notifyListeners("didUpdate", {
                    layout: e,
                    snapshot: i,
                    delta: a,
                    layoutDelta: o,
                    hasLayoutChanged: l,
                    hasRelativeLayoutChanged: u
                })
            } else if (t.isLead()) {
                let {onExitComplete: e} = t.options;
                e && e()
            }
            t.options.transition = void 0
        }
        function nG(t) {
            g.value && n$.nodes++,
            t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty),
            t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)),
            t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
        }
        function nZ(t) {
            t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
        }
        function nJ(t) {
            t.clearSnapshot()
        }
        function nQ(t) {
            t.clearMeasurements()
        }
        function n0(t) {
            t.isLayoutDirty = !1
        }
        function n1(t) {
            let {visualElement: e} = t.options;
            e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"),
            t.resetTransform()
        }
        function n2(t) {
            t.finishAnimation(),
            t.targetDelta = t.relativeTarget = t.target = void 0,
            t.isProjectionDirty = !0
        }
        function n3(t) {
            t.resolveTargetDelta()
        }
        function n5(t) {
            t.calcProjection()
        }
        function n4(t) {
            t.resetSkewAndRotation()
        }
        function n9(t) {
            t.removeLeadSnapshot()
        }
        function n8(t, e, i) {
            t.translate = ev(e.translate, 0, i),
            t.scale = ev(e.scale, 1, i),
            t.origin = e.origin,
            t.originPoint = e.originPoint
        }
        function n6(t, e, i, n) {
            t.min = ev(e.min, i.min, n),
            t.max = ev(e.max, i.max, n)
        }
        function n7(t) {
            return t.animationValues && void 0 !== t.animationValues.opacityExit
        }
        let rt = {
            duration: .45,
            ease: [.4, 0, .1, 1]
        }
          , re = t => "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t)
          , ri = re("applewebkit/") && !re("chrome/") ? Math.round : f;
        function rn(t) {
            t.min = ri(t.min),
            t.max = ri(t.max)
        }
        function rr(t, e, i) {
            return "position" === t || "preserve-aspect" === t && !(.2 >= Math.abs(nN(e) - nN(i)))
        }
        function rs(t) {
            var e;
            return t !== t.root && (null === (e = t.scroll) || void 0 === e ? void 0 : e.wasRoot)
        }
        let ro = nY({
            attachResizeListener: (t, e) => iy(t, "resize", e),
            measureScroll: () => ({
                x: document.documentElement.scrollLeft || document.body.scrollLeft,
                y: document.documentElement.scrollTop || document.body.scrollTop
            }),
            checkIsScrollRoot: () => !0
        })
          , ra = {
            current: void 0
        }
          , rl = nY({
            measureScroll: t => ({
                x: t.scrollLeft,
                y: t.scrollTop
            }),
            defaultParent: () => {
                if (!ra.current) {
                    let t = new ro({});
                    t.mount(window),
                    t.setOptions({
                        layoutScroll: !0
                    }),
                    ra.current = t
                }
                return ra.current
            }
            ,
            resetTransform: (t, e) => {
                t.style.transform = void 0 !== e ? e : "none"
            }
            ,
            checkIsScrollRoot: t => "fixed" === window.getComputedStyle(t).position
        });
        function ru(t, e) {
            let i = function(t, e, i) {
                if (t instanceof Element)
                    return [t];
                if ("string" == typeof t) {
                    let e = document.querySelectorAll(t);
                    return e ? Array.from(e) : []
                }
                return Array.from(t)
            }(t)
              , n = new AbortController;
            return [i, {
                passive: !0,
                ...e,
                signal: n.signal
            }, () => n.abort()]
        }
        function rh(t) {
            return !("touch" === t.pointerType || iv.x || iv.y)
        }
        function rd(t, e, i) {
            let {props: n} = t;
            t.animationState && n.whileHover && t.animationState.setActive("whileHover", "Start" === i);
            let r = n["onHover" + i];
            r && x.postRender( () => r(e, ix(e)))
        }
        class rc extends id {
            mount() {
                let {current: t} = this.node;
                t && (this.unmount = function(t, e, i={}) {
                    let[n,r,s] = ru(t, i)
                      , o = t => {
                        if (!rh(t))
                            return;
                        let {target: i} = t
                          , n = e(i, t);
                        if ("function" != typeof n || !i)
                            return;
                        let s = t => {
                            rh(t) && (n(t),
                            i.removeEventListener("pointerleave", s))
                        }
                        ;
                        i.addEventListener("pointerleave", s, r)
                    }
                    ;
                    return n.forEach(t => {
                        t.addEventListener("pointerenter", o, r)
                    }
                    ),
                    s
                }(t, (t, e) => (rd(this.node, e, "Start"),
                t => rd(this.node, t, "End"))))
            }
            unmount() {}
        }
        class rp extends id {
            constructor() {
                super(...arguments),
                this.isActive = !1
            }
            onFocus() {
                let t = !1;
                try {
                    t = this.node.current.matches(":focus-visible")
                } catch (e) {
                    t = !0
                }
                t && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0),
                this.isActive = !0)
            }
            onBlur() {
                this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1),
                this.isActive = !1)
            }
            mount() {
                this.unmount = eA(iy(this.node.current, "focus", () => this.onFocus()), iy(this.node.current, "blur", () => this.onBlur()))
            }
            unmount() {}
        }
        let rm = (t, e) => !!e && (t === e || rm(t, e.parentElement))
          , rf = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"])
          , rv = new WeakSet;
        function rg(t) {
            return e => {
                "Enter" === e.key && t(e)
            }
        }
        function ry(t, e) {
            t.dispatchEvent(new PointerEvent("pointer" + e,{
                isPrimary: !0,
                bubbles: !0
            }))
        }
        let rx = (t, e) => {
            let i = t.currentTarget;
            if (!i)
                return;
            let n = rg( () => {
                if (rv.has(i))
                    return;
                ry(i, "down");
                let t = rg( () => {
                    ry(i, "up")
                }
                );
                i.addEventListener("keyup", t, e),
                i.addEventListener("blur", () => ry(i, "cancel"), e)
            }
            );
            i.addEventListener("keydown", n, e),
            i.addEventListener("blur", () => i.removeEventListener("keydown", n), e)
        }
        ;
        function rb(t) {
            return ig(t) && !(iv.x || iv.y)
        }
        function rw(t, e, i) {
            let {props: n} = t;
            if (t.current instanceof HTMLButtonElement && t.current.disabled)
                return;
            t.animationState && n.whileTap && t.animationState.setActive("whileTap", "Start" === i);
            let r = n["onTap" + ("End" === i ? "" : i)];
            r && x.postRender( () => r(e, ix(e)))
        }
        class rP extends id {
            mount() {
                let {current: t} = this.node;
                t && (this.unmount = function(t, e, i={}) {
                    let[n,r,s] = ru(t, i)
                      , o = t => {
                        let n = t.currentTarget;
                        if (!rb(t) || rv.has(n))
                            return;
                        rv.add(n);
                        let s = e(n, t)
                          , o = (t, e) => {
                            window.removeEventListener("pointerup", a),
                            window.removeEventListener("pointercancel", l),
                            rb(t) && rv.has(n) && (rv.delete(n),
                            "function" == typeof s && s(t, {
                                success: e
                            }))
                        }
                          , a = t => {
                            o(t, i.useGlobalTarget || rm(n, t.target))
                        }
                          , l = t => {
                            o(t, !1)
                        }
                        ;
                        window.addEventListener("pointerup", a, r),
                        window.addEventListener("pointercancel", l, r)
                    }
                    ;
                    return n.forEach(t => {
                        rf.has(t.tagName) || -1 !== t.tabIndex || null !== t.getAttribute("tabindex") || (t.tabIndex = 0),
                        (i.useGlobalTarget ? window : t).addEventListener("pointerdown", o, r),
                        t.addEventListener("focus", t => rx(t, r), r)
                    }
                    ),
                    s
                }(t, (t, e) => (rw(this.node, e, "Start"),
                (t, {success: e}) => rw(this.node, t, e ? "End" : "Cancel")), {
                    useGlobalTarget: this.node.props.globalTapTarget
                }))
            }
            unmount() {}
        }
        let rT = new WeakMap
          , rS = new WeakMap
          , rA = t => {
            let e = rT.get(t.target);
            e && e(t)
        }
          , rE = t => {
            t.forEach(rA)
        }
          , rM = {
            some: 0,
            all: 1
        };
        class rk extends id {
            constructor() {
                super(...arguments),
                this.hasEnteredView = !1,
                this.isInView = !1
            }
            startObserver() {
                this.unmount();
                let {viewport: t={}} = this.node.getProps()
                  , {root: e, margin: i, amount: n="some", once: r} = t
                  , s = {
                    root: e ? e.current : void 0,
                    rootMargin: i,
                    threshold: "number" == typeof n ? n : rM[n]
                };
                return function(t, e, i) {
                    let n = function({root: t, ...e}) {
                        let i = t || document;
                        rS.has(i) || rS.set(i, {});
                        let n = rS.get(i)
                          , r = JSON.stringify(e);
                        return n[r] || (n[r] = new IntersectionObserver(rE,{
                            root: t,
                            ...e
                        })),
                        n[r]
                    }(e);
                    return rT.set(t, i),
                    n.observe(t),
                    () => {
                        rT.delete(t),
                        n.unobserve(t)
                    }
                }(this.node.current, s, t => {
                    let {isIntersecting: e} = t;
                    if (this.isInView === e || (this.isInView = e,
                    r && !e && this.hasEnteredView))
                        return;
                    e && (this.hasEnteredView = !0),
                    this.node.animationState && this.node.animationState.setActive("whileInView", e);
                    let {onViewportEnter: i, onViewportLeave: n} = this.node.getProps()
                      , s = e ? i : n;
                    s && s(t)
                }
                )
            }
            mount() {
                this.startObserver()
            }
            update() {
                if ("undefined" == typeof IntersectionObserver)
                    return;
                let {props: t, prevProps: e} = this.node;
                ["amount", "margin", "root"].some(function({viewport: t={}}, {viewport: e={}}={}) {
                    return i => t[i] !== e[i]
                }(t, e)) && this.startObserver()
            }
            unmount() {}
        }
        let rC = (0,
        ni.createContext)({
            strict: !1
        })
          , rR = (0,
        ni.createContext)({
            transformPagePoint: t => t,
            isStatic: !1,
            reducedMotion: "never"
        })
          , rV = (0,
        ni.createContext)({});
        function rD(t) {
            return r(t.animate) || is.some(e => ii(t[e]))
        }
        function rj(t) {
            return !!(rD(t) || t.variants)
        }
        function rL(t) {
            return Array.isArray(t) ? t.join(" ") : t
        }
        let rF = "undefined" != typeof window
          , rO = {
            animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
            exit: ["exit"],
            drag: ["drag", "dragControls"],
            focus: ["whileFocus"],
            hover: ["whileHover", "onHoverStart", "onHoverEnd"],
            tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
            pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
            inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
            layout: ["layout", "layoutId"]
        }
          , rB = {};
        for (let t in rO)
            rB[t] = {
                isEnabled: e => rO[t].some(t => !!e[t])
            };
        let rI = Symbol.for("motionComponentSymbol")
          , rN = rF ? ni.useLayoutEffect : ni.useEffect;
        function rU(t, {layout: e, layoutId: i}) {
            return u.has(t) || t.startsWith("origin") || (e || void 0 !== i) && (!!nu[t] || "opacity" === t)
        }
        let rz = (t, e) => e && "number" == typeof t ? e.transform(t) : t
          , r$ = {
            x: "translateX",
            y: "translateY",
            z: "translateZ",
            transformPerspective: "perspective"
        }
          , rW = l.length;
        function r_(t, e, i) {
            let {style: n, vars: r, transformOrigin: s} = t
              , o = !1
              , a = !1;
            for (let t in e) {
                let i = e[t];
                if (u.has(t)) {
                    o = !0;
                    continue
                }
                if (ee(t)) {
                    r[t] = i;
                    continue
                }
                {
                    let e = rz(i, tH[t]);
                    t.startsWith("origin") ? (a = !0,
                    s[t] = e) : n[t] = e
                }
            }
            if (!e.transform && (o || i ? n.transform = function(t, e, i) {
                let n = ""
                  , r = !0;
                for (let s = 0; s < rW; s++) {
                    let o = l[s]
                      , a = t[o];
                    if (void 0 === a)
                        continue;
                    let u = !0;
                    if (!(u = "number" == typeof a ? a === (o.startsWith("scale") ? 1 : 0) : 0 === parseFloat(a)) || i) {
                        let t = rz(a, tH[o]);
                        if (!u) {
                            r = !1;
                            let e = r$[o] || o;
                            n += `${e}(${t}) `
                        }
                        i && (e[o] = t)
                    }
                }
                return n = n.trim(),
                i ? n = i(e, r ? "" : n) : r && (n = "none"),
                n
            }(e, t.transform, i) : n.transform && (n.transform = "none")),
            a) {
                let {originX: t="50%", originY: e="50%", originZ: i=0} = s;
                n.transformOrigin = `${t} ${e} ${i}`
            }
        }
        let rK = () => ({
            style: {},
            transform: {},
            transformOrigin: {},
            vars: {}
        });
        function rH(t, e, i) {
            for (let n in e)
                D(e[n]) || rU(n, i) || (t[n] = e[n])
        }
        let rY = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
        function rq(t) {
            return t.startsWith("while") || t.startsWith("drag") && "draggable" !== t || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || rY.has(t)
        }
        let rX = t => !rq(t);
        try {
            !function(t) {
                t && (rX = e => e.startsWith("on") ? !rq(e) : t(e))
            }(require("@emotion/is-prop-valid").default)
        } catch (t) {}
        let rG = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
        function rZ(t) {
            if ("string" != typeof t || t.includes("-"))
                ;
            else if (rG.indexOf(t) > -1 || /[A-Z]/u.test(t))
                return !0;
            return !1
        }
        let rJ = {
            offset: "stroke-dashoffset",
            array: "stroke-dasharray"
        }
          , rQ = {
            offset: "strokeDashoffset",
            array: "strokeDasharray"
        };
        function r0(t, e, i) {
            return "string" == typeof t ? t : tE.transform(e + i * t)
        }
        function r1(t, {attrX: e, attrY: i, attrScale: n, originX: r, originY: s, pathLength: o, pathSpacing: a=1, pathOffset: l=0, ...u}, h, d) {
            if (r_(t, u, d),
            h) {
                t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
                return
            }
            t.attrs = t.style,
            t.style = {};
            let {attrs: c, style: p, dimensions: m} = t;
            c.transform && (m && (p.transform = c.transform),
            delete c.transform),
            m && (void 0 !== r || void 0 !== s || p.transform) && (p.transformOrigin = function(t, e, i) {
                let n = r0(e, t.x, t.width)
                  , r = r0(i, t.y, t.height);
                return `${n} ${r}`
            }(m, void 0 !== r ? r : .5, void 0 !== s ? s : .5)),
            void 0 !== e && (c.x = e),
            void 0 !== i && (c.y = i),
            void 0 !== n && (c.scale = n),
            void 0 !== o && function(t, e, i=1, n=0, r=!0) {
                t.pathLength = 1;
                let s = r ? rJ : rQ;
                t[s.offset] = tE.transform(-n);
                let o = tE.transform(e)
                  , a = tE.transform(i);
                t[s.array] = `${o} ${a}`
            }(c, o, a, l, !1)
        }
        let r2 = () => ({
            ...rK(),
            attrs: {}
        })
          , r3 = t => "string" == typeof t && "svg" === t.toLowerCase()
          , r5 = t => (e, i) => {
            let n = (0,
            ni.useContext)(rV)
              , o = (0,
            ni.useContext)(nn)
              , a = () => (function({scrapeMotionValuesFromProps: t, createRenderState: e, onUpdate: i}, n, o, a) {
                let l = {
                    latestValues: function(t, e, i, n) {
                        let o = {}
                          , a = n(t, {});
                        for (let t in a)
                            o[t] = ng(a[t]);
                        let {initial: l, animate: u} = t
                          , h = rD(t)
                          , d = rj(t);
                        e && d && !h && !1 !== t.inherit && (void 0 === l && (l = e.initial),
                        void 0 === u && (u = e.animate));
                        let c = !!i && !1 === i.initial
                          , p = (c = c || !1 === l) ? u : l;
                        if (p && "boolean" != typeof p && !r(p)) {
                            let e = Array.isArray(p) ? p : [p];
                            for (let i = 0; i < e.length; i++) {
                                let n = s(t, e[i]);
                                if (n) {
                                    let {transitionEnd: t, transition: e, ...i} = n;
                                    for (let t in i) {
                                        let e = i[t];
                                        if (Array.isArray(e)) {
                                            let t = c ? e.length - 1 : 0;
                                            e = e[t]
                                        }
                                        null !== e && (o[t] = e)
                                    }
                                    for (let e in t)
                                        o[e] = t[e]
                                }
                            }
                        }
                        return o
                    }(n, o, a, t),
                    renderState: e()
                };
                return i && (l.onMount = t => i({
                    props: n,
                    current: t,
                    ...l
                }),
                l.onUpdate = t => i(t)),
                l
            }
            )(t, e, n, o);
            return i ? a() : function(t) {
                let e = (0,
                ni.useRef)(null);
                return null === e.current && (e.current = t()),
                e.current
            }(a)
        }
        ;
        function r4(t, e, i) {
            var n;
            let {style: r} = t
              , s = {};
            for (let o in r)
                (D(r[o]) || e.style && D(e.style[o]) || rU(o, t) || (null === (n = null == i ? void 0 : i.getValue(o)) || void 0 === n ? void 0 : n.liveStyle) !== void 0) && (s[o] = r[o]);
            return s
        }
        let r9 = {
            useVisualState: r5({
                scrapeMotionValuesFromProps: r4,
                createRenderState: rK
            })
        };
        function r8(t, e) {
            try {
                e.dimensions = "function" == typeof t.getBBox ? t.getBBox() : t.getBoundingClientRect()
            } catch (t) {
                e.dimensions = {
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0
                }
            }
        }
        function r6(t, {style: e, vars: i}, n, r) {
            for (let s in Object.assign(t.style, e, r && r.getProjectionStyles(n)),
            i)
                t.style.setProperty(s, i[s])
        }
        let r7 = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
        function st(t, e, i, n) {
            for (let i in r6(t, e, void 0, n),
            e.attrs)
                t.setAttribute(r7.has(i) ? i : L(i), e.attrs[i])
        }
        function se(t, e, i) {
            let n = r4(t, e, i);
            for (let i in t)
                (D(t[i]) || D(e[i])) && (n[-1 !== l.indexOf(i) ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i] = t[i]);
            return n
        }
        let si = ["x", "y", "width", "height", "cx", "cy", "r"]
          , sn = {
            useVisualState: r5({
                scrapeMotionValuesFromProps: se,
                createRenderState: r2,
                onUpdate: ({props: t, prevProps: e, current: i, renderState: n, latestValues: r}) => {
                    if (!i)
                        return;
                    let s = !!t.drag;
                    if (!s) {
                        for (let t in r)
                            if (u.has(t)) {
                                s = !0;
                                break
                            }
                    }
                    if (!s)
                        return;
                    let o = !e;
                    if (e)
                        for (let i = 0; i < si.length; i++) {
                            let n = si[i];
                            t[n] !== e[n] && (o = !0)
                        }
                    o && x.read( () => {
                        r8(i, n),
                        x.render( () => {
                            r1(n, r, r3(i.tagName), t.transformTemplate),
                            st(i, n)
                        }
                        )
                    }
                    )
                }
            })
        }
          , sr = {
            current: null
        }
          , ss = {
            current: !1
        }
          , so = [...ea, tV, tU]
          , sa = t => so.find(eo(t))
          , sl = new WeakMap
          , su = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
        class sh {
            scrapeMotionValuesFromProps(t, e, i) {
                return {}
            }
            constructor({parent: t, props: e, presenceContext: i, reducedMotionConfig: n, blockInitialAnimation: r, visualState: s}, o={}) {
                this.current = null,
                this.children = new Set,
                this.isVariantNode = !1,
                this.isControllingVariants = !1,
                this.shouldReduceMotion = null,
                this.values = new Map,
                this.KeyframeResolver = t6,
                this.features = {},
                this.valueSubscriptions = new Map,
                this.prevMotionValues = {},
                this.events = {},
                this.propEventSubscriptions = {},
                this.notifyUpdate = () => this.notify("Update", this.latestValues),
                this.render = () => {
                    this.current && (this.triggerBuild(),
                    this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
                }
                ,
                this.renderScheduledAt = 0,
                this.scheduleRender = () => {
                    let t = S.now();
                    this.renderScheduledAt < t && (this.renderScheduledAt = t,
                    x.render(this.render, !1, !0))
                }
                ;
                let {latestValues: a, renderState: l, onUpdate: u} = s;
                this.onUpdate = u,
                this.latestValues = a,
                this.baseTarget = {
                    ...a
                },
                this.initialValues = e.initial ? {
                    ...a
                } : {},
                this.renderState = l,
                this.parent = t,
                this.props = e,
                this.presenceContext = i,
                this.depth = t ? t.depth + 1 : 0,
                this.reducedMotionConfig = n,
                this.options = o,
                this.blockInitialAnimation = !!r,
                this.isControllingVariants = rD(e),
                this.isVariantNode = rj(e),
                this.isVariantNode && (this.variantChildren = new Set),
                this.manuallyAnimateOnMount = !!(t && t.current);
                let {willChange: h, ...d} = this.scrapeMotionValuesFromProps(e, {}, this);
                for (let t in d) {
                    let e = d[t];
                    void 0 !== a[t] && D(e) && e.set(a[t], !1)
                }
            }
            mount(t) {
                this.current = t,
                sl.set(t, this),
                this.projection && !this.projection.instance && this.projection.mount(t),
                this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
                this.values.forEach( (t, e) => this.bindToMotionValue(e, t)),
                ss.current || function() {
                    if (ss.current = !0,
                    rF) {
                        if (window.matchMedia) {
                            let t = window.matchMedia("(prefers-reduced-motion)")
                              , e = () => sr.current = t.matches;
                            t.addListener(e),
                            e()
                        } else
                            sr.current = !1
                    }
                }(),
                this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || sr.current),
                this.parent && this.parent.children.add(this),
                this.update(this.props, this.presenceContext)
            }
            unmount() {
                for (let t in this.projection && this.projection.unmount(),
                b(this.notifyUpdate),
                b(this.render),
                this.valueSubscriptions.forEach(t => t()),
                this.valueSubscriptions.clear(),
                this.removeFromVariantTree && this.removeFromVariantTree(),
                this.parent && this.parent.children.delete(this),
                this.events)
                    this.events[t].clear();
                for (let t in this.features) {
                    let e = this.features[t];
                    e && (e.unmount(),
                    e.isMounted = !1)
                }
                this.current = null
            }
            bindToMotionValue(t, e) {
                let i;
                this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
                let n = u.has(t);
                n && this.onBindTransform && this.onBindTransform();
                let r = e.on("change", e => {
                    this.latestValues[t] = e,
                    this.props.onUpdate && x.preRender(this.notifyUpdate),
                    n && this.projection && (this.projection.isTransformDirty = !0)
                }
                )
                  , s = e.on("renderRequest", this.scheduleRender);
                window.MotionCheckAppearSync && (i = window.MotionCheckAppearSync(this, t, e)),
                this.valueSubscriptions.set(t, () => {
                    r(),
                    s(),
                    i && i(),
                    e.owner && e.stop()
                }
                )
            }
            sortNodePosition(t) {
                return this.current && this.sortInstanceNodePosition && this.type === t.type ? this.sortInstanceNodePosition(this.current, t.current) : 0
            }
            updateFeatures() {
                let t = "animation";
                for (t in rB) {
                    let e = rB[t];
                    if (!e)
                        continue;
                    let {isEnabled: i, Feature: n} = e;
                    if (!this.features[t] && n && i(this.props) && (this.features[t] = new n(this)),
                    this.features[t]) {
                        let e = this.features[t];
                        e.isMounted ? e.update() : (e.mount(),
                        e.isMounted = !0)
                    }
                }
            }
            triggerBuild() {
                this.build(this.renderState, this.latestValues, this.props)
            }
            measureViewportBox() {
                return this.current ? this.measureInstanceViewportBox(this.current, this.props) : i$()
            }
            getStaticValue(t) {
                return this.latestValues[t]
            }
            setStaticValue(t, e) {
                this.latestValues[t] = e
            }
            update(t, e) {
                (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
                this.prevProps = this.props,
                this.props = t,
                this.prevPresenceContext = this.presenceContext,
                this.presenceContext = e;
                for (let e = 0; e < su.length; e++) {
                    let i = su[e];
                    this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](),
                    delete this.propEventSubscriptions[i]);
                    let n = t["on" + i];
                    n && (this.propEventSubscriptions[i] = this.on(i, n))
                }
                this.prevMotionValues = function(t, e, i) {
                    for (let n in e) {
                        let r = e[n]
                          , s = i[n];
                        if (D(r))
                            t.addValue(n, r);
                        else if (D(s))
                            t.addValue(n, V(r, {
                                owner: t
                            }));
                        else if (s !== r) {
                            if (t.hasValue(n)) {
                                let e = t.getValue(n);
                                !0 === e.liveStyle ? e.jump(r) : e.hasAnimated || e.set(r)
                            } else {
                                let e = t.getStaticValue(n);
                                t.addValue(n, V(void 0 !== e ? e : r, {
                                    owner: t
                                }))
                            }
                        }
                    }
                    for (let n in i)
                        void 0 === e[n] && t.removeValue(n);
                    return e
                }(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues),
                this.handleChildMotionValue && this.handleChildMotionValue(),
                this.onUpdate && this.onUpdate(this)
            }
            getProps() {
                return this.props
            }
            getVariant(t) {
                return this.props.variants ? this.props.variants[t] : void 0
            }
            getDefaultTransition() {
                return this.props.transition
            }
            getTransformPagePoint() {
                return this.props.transformPagePoint
            }
            getClosestVariantNode() {
                return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
            }
            addVariantChild(t) {
                let e = this.getClosestVariantNode();
                if (e)
                    return e.variantChildren && e.variantChildren.add(t),
                    () => e.variantChildren.delete(t)
            }
            addValue(t, e) {
                let i = this.values.get(t);
                e !== i && (i && this.removeValue(t),
                this.bindToMotionValue(t, e),
                this.values.set(t, e),
                this.latestValues[t] = e.get())
            }
            removeValue(t) {
                this.values.delete(t);
                let e = this.valueSubscriptions.get(t);
                e && (e(),
                this.valueSubscriptions.delete(t)),
                delete this.latestValues[t],
                this.removeValueFromRenderState(t, this.renderState)
            }
            hasValue(t) {
                return this.values.has(t)
            }
            getValue(t, e) {
                if (this.props.values && this.props.values[t])
                    return this.props.values[t];
                let i = this.values.get(t);
                return void 0 === i && void 0 !== e && (i = V(null === e ? void 0 : e, {
                    owner: this
                }),
                this.addValue(t, i)),
                i
            }
            readValue(t, e) {
                var i;
                let n = void 0 === this.latestValues[t] && this.current ? null !== (i = this.getBaseTargetFromProps(this.props, t)) && void 0 !== i ? i : this.readValueFromInstance(this.current, t, this.options) : this.latestValues[t];
                return null != n && ("string" == typeof n && (t7(n) || tu(n)) ? n = parseFloat(n) : !sa(n) && tU.test(e) && (n = tX(t, e)),
                this.setBaseTarget(t, D(n) ? n.get() : n)),
                D(n) ? n.get() : n
            }
            setBaseTarget(t, e) {
                this.baseTarget[t] = e
            }
            getBaseTarget(t) {
                var e;
                let i;
                let {initial: n} = this.props;
                if ("string" == typeof n || "object" == typeof n) {
                    let r = s(this.props, n, null === (e = this.presenceContext) || void 0 === e ? void 0 : e.custom);
                    r && (i = r[t])
                }
                if (n && void 0 !== i)
                    return i;
                let r = this.getBaseTargetFromProps(this.props, t);
                return void 0 === r || D(r) ? void 0 !== this.initialValues[t] && void 0 === i ? void 0 : this.baseTarget[t] : r
            }
            on(t, e) {
                return this.events[t] || (this.events[t] = new M),
                this.events[t].add(e)
            }
            notify(t, ...e) {
                this.events[t] && this.events[t].notify(...e)
            }
        }
        class sd extends sh {
            constructor() {
                super(...arguments),
                this.KeyframeResolver = eu
            }
            sortInstanceNodePosition(t, e) {
                return 2 & t.compareDocumentPosition(e) ? 1 : -1
            }
            getBaseTargetFromProps(t, e) {
                return t.style ? t.style[e] : void 0
            }
            removeValueFromRenderState(t, {vars: e, style: i}) {
                delete e[t],
                delete i[t]
            }
            handleChildMotionValue() {
                this.childSubscription && (this.childSubscription(),
                delete this.childSubscription);
                let {children: t} = this.props;
                D(t) && (this.childSubscription = t.on("change", t => {
                    this.current && (this.current.textContent = `${t}`)
                }
                ))
            }
        }
        class sc extends sd {
            constructor() {
                super(...arguments),
                this.type = "html",
                this.renderInstance = r6
            }
            readValueFromInstance(t, e) {
                if (u.has(e)) {
                    let t = tq(e);
                    return t && t.default || 0
                }
                {
                    let i = window.getComputedStyle(t)
                      , n = (ee(e) ? i.getPropertyValue(e) : i[e]) || 0;
                    return "string" == typeof n ? n.trim() : n
                }
            }
            measureInstanceViewportBox(t, {transformPagePoint: e}) {
                return i1(t, e)
            }
            build(t, e, i) {
                r_(t, e, i.transformTemplate)
            }
            scrapeMotionValuesFromProps(t, e, i) {
                return r4(t, e, i)
            }
        }
        class sp extends sd {
            constructor() {
                super(...arguments),
                this.type = "svg",
                this.isSVGTag = !1,
                this.measureInstanceViewportBox = i$,
                this.updateDimensions = () => {
                    this.current && !this.renderState.dimensions && r8(this.current, this.renderState)
                }
            }
            getBaseTargetFromProps(t, e) {
                return t[e]
            }
            readValueFromInstance(t, e) {
                if (u.has(e)) {
                    let t = tq(e);
                    return t && t.default || 0
                }
                return e = r7.has(e) ? e : L(e),
                t.getAttribute(e)
            }
            scrapeMotionValuesFromProps(t, e, i) {
                return se(t, e, i)
            }
            onBindTransform() {
                this.current && !this.renderState.dimensions && x.postRender(this.updateDimensions)
            }
            build(t, e, i) {
                r1(t, e, this.isSVGTag, i.transformTemplate)
            }
            renderInstance(t, e, i, n) {
                st(t, e, i, n)
            }
            mount(t) {
                this.isSVGTag = r3(t.tagName),
                super.mount(t)
            }
        }
        let sm = function(t) {
            if ("undefined" == typeof Proxy)
                return t;
            let e = new Map;
            return new Proxy( (...e) => t(...e),{
                get: (i, n) => "create" === n ? t : (e.has(n) || e.set(n, t(n)),
                e.get(n))
            })
        }((i7 = {
            animation: {
                Feature: ic
            },
            exit: {
                Feature: im
            },
            inView: {
                Feature: rk
            },
            tap: {
                Feature: rP
            },
            focus: {
                Feature: rp
            },
            hover: {
                Feature: rc
            },
            pan: {
                Feature: i6
            },
            drag: {
                Feature: i9,
                ProjectionNode: rl,
                MeasureLayout: np
            },
            layout: {
                ProjectionNode: rl,
                MeasureLayout: np
            }
        },
        nt = (t, e) => rZ(t) ? new sp(e) : new sc(e,{
            allowProjection: t !== ni.Fragment
        }),
        function(t, {forwardMotionProps: e}={
            forwardMotionProps: !1
        }) {
            return function(t) {
                var e, i;
                let {preloadedFeatures: n, createVisualElement: r, useRender: s, useVisualState: o, Component: a} = t;
                function l(t, e) {
                    var i;
                    let n;
                    let l = {
                        ...(0,
                        ni.useContext)(rR),
                        ...t,
                        layoutId: function(t) {
                            let {layoutId: e} = t
                              , i = (0,
                            ni.useContext)(nr).id;
                            return i && void 0 !== e ? i + "-" + e : e
                        }(t)
                    }
                      , {isStatic: u} = l
                      , h = function(t) {
                        let {initial: e, animate: i} = function(t, e) {
                            if (rD(t)) {
                                let {initial: e, animate: i} = t;
                                return {
                                    initial: !1 === e || ii(e) ? e : void 0,
                                    animate: ii(i) ? i : void 0
                                }
                            }
                            return !1 !== t.inherit ? e : {}
                        }(t, (0,
                        ni.useContext)(rV));
                        return (0,
                        ni.useMemo)( () => ({
                            initial: e,
                            animate: i
                        }), [rL(e), rL(i)])
                    }(t)
                      , d = o(t, u);
                    if (!u && rF) {
                        (0,
                        ni.useContext)(rC).strict;
                        let t = function(t) {
                            let {drag: e, layout: i} = rB;
                            if (!e && !i)
                                return {};
                            let n = {
                                ...e,
                                ...i
                            };
                            return {
                                MeasureLayout: (null == e ? void 0 : e.isEnabled(t)) || (null == i ? void 0 : i.isEnabled(t)) ? n.MeasureLayout : void 0,
                                ProjectionNode: n.ProjectionNode
                            }
                        }(l);
                        n = t.MeasureLayout,
                        h.visualElement = function(t, e, i, n, r) {
                            var s, o;
                            let {visualElement: a} = (0,
                            ni.useContext)(rV)
                              , l = (0,
                            ni.useContext)(rC)
                              , u = (0,
                            ni.useContext)(nn)
                              , h = (0,
                            ni.useContext)(rR).reducedMotion
                              , d = (0,
                            ni.useRef)(null);
                            n = n || l.renderer,
                            !d.current && n && (d.current = n(t, {
                                visualState: e,
                                parent: a,
                                props: i,
                                presenceContext: u,
                                blockInitialAnimation: !!u && !1 === u.initial,
                                reducedMotionConfig: h
                            }));
                            let c = d.current
                              , p = (0,
                            ni.useContext)(ns);
                            c && !c.projection && r && ("html" === c.type || "svg" === c.type) && function(t, e, i, n) {
                                let {layoutId: r, layout: s, drag: o, dragConstraints: a, layoutScroll: l, layoutRoot: u} = e;
                                t.projection = new i(t.latestValues,e["data-framer-portal-id"] ? void 0 : function t(e) {
                                    if (e)
                                        return !1 !== e.options.allowProjection ? e.projection : t(e.parent)
                                }(t.parent)),
                                t.projection.setOptions({
                                    layoutId: r,
                                    layout: s,
                                    alwaysMeasureLayout: !!o || a && ik(a),
                                    visualElement: t,
                                    animationType: "string" == typeof s ? s : "both",
                                    initialPromotionConfig: n,
                                    layoutScroll: l,
                                    layoutRoot: u
                                })
                            }(d.current, i, r, p);
                            let m = (0,
                            ni.useRef)(!1);
                            (0,
                            ni.useInsertionEffect)( () => {
                                c && m.current && c.update(i, u)
                            }
                            );
                            let f = i[F]
                              , v = (0,
                            ni.useRef)(!!f && !(null === (s = window.MotionHandoffIsComplete) || void 0 === s ? void 0 : s.call(window, f)) && (null === (o = window.MotionHasOptimisedAnimation) || void 0 === o ? void 0 : o.call(window, f)));
                            return rN( () => {
                                c && (m.current = !0,
                                window.MotionIsMounted = !0,
                                c.updateFeatures(),
                                nh.render(c.render),
                                v.current && c.animationState && c.animationState.animateChanges())
                            }
                            ),
                            (0,
                            ni.useEffect)( () => {
                                c && (!v.current && c.animationState && c.animationState.animateChanges(),
                                v.current && (queueMicrotask( () => {
                                    var t;
                                    null === (t = window.MotionHandoffMarkAsComplete) || void 0 === t || t.call(window, f)
                                }
                                ),
                                v.current = !1))
                            }
                            ),
                            c
                        }(a, d, l, r, t.ProjectionNode)
                    }
                    return (0,
                    ne.jsxs)(rV.Provider, {
                        value: h,
                        children: [n && h.visualElement ? (0,
                        ne.jsx)(n, {
                            visualElement: h.visualElement,
                            ...l
                        }) : null, s(a, t, (i = h.visualElement,
                        (0,
                        ni.useCallback)(t => {
                            t && d.onMount && d.onMount(t),
                            i && (t ? i.mount(t) : i.unmount()),
                            e && ("function" == typeof e ? e(t) : ik(e) && (e.current = t))
                        }
                        , [i])), d, u, h.visualElement)]
                    })
                }
                n && function(t) {
                    for (let e in t)
                        rB[e] = {
                            ...rB[e],
                            ...t[e]
                        }
                }(n),
                l.displayName = "motion.".concat("string" == typeof a ? a : "create(".concat(null !== (i = null !== (e = a.displayName) && void 0 !== e ? e : a.name) && void 0 !== i ? i : "", ")"));
                let u = (0,
                ni.forwardRef)(l);
                return u[rI] = a,
                u
            }({
                ...rZ(t) ? sn : r9,
                preloadedFeatures: i7,
                useRender: function(t=!1) {
                    return (e, i, n, {latestValues: r}, s) => {
                        let o = (rZ(e) ? function(t, e, i, n) {
                            let r = (0,
                            ni.useMemo)( () => {
                                let i = r2();
                                return r1(i, e, r3(n), t.transformTemplate),
                                {
                                    ...i.attrs,
                                    style: {
                                        ...i.style
                                    }
                                }
                            }
                            , [e]);
                            if (t.style) {
                                let e = {};
                                rH(e, t.style, t),
                                r.style = {
                                    ...e,
                                    ...r.style
                                }
                            }
                            return r
                        }
                        : function(t, e) {
                            let i = {}
                              , n = function(t, e) {
                                let i = t.style || {}
                                  , n = {};
                                return rH(n, i, t),
                                Object.assign(n, function({transformTemplate: t}, e) {
                                    return (0,
                                    ni.useMemo)( () => {
                                        let i = rK();
                                        return r_(i, e, t),
                                        Object.assign({}, i.vars, i.style)
                                    }
                                    , [e])
                                }(t, e)),
                                n
                            }(t, e);
                            return t.drag && !1 !== t.dragListener && (i.draggable = !1,
                            n.userSelect = n.WebkitUserSelect = n.WebkitTouchCallout = "none",
                            n.touchAction = !0 === t.drag ? "none" : `pan-${"x" === t.drag ? "y" : "x"}`),
                            void 0 === t.tabIndex && (t.onTap || t.onTapStart || t.whileTap) && (i.tabIndex = 0),
                            i.style = n,
                            i
                        }
                        )(i, r, s, e)
                          , a = function(t, e, i) {
                            let n = {};
                            for (let r in t)
                                ("values" !== r || "object" != typeof t.values) && (rX(r) || !0 === i && rq(r) || !e && !rq(r) || t.draggable && r.startsWith("onDrag")) && (n[r] = t[r]);
                            return n
                        }(i, "string" == typeof e, t)
                          , l = e !== ni.Fragment ? {
                            ...a,
                            ...o,
                            ref: n
                        } : {}
                          , {children: u} = i
                          , h = (0,
                        ni.useMemo)( () => D(u) ? u.get() : u, [u]);
                        return (0,
                        ni.createElement)(e, {
                            ...l,
                            children: h
                        })
                    }
                }(e),
                createVisualElement: nt,
                Component: t
            })
        }
        ))
    }
    ,
    726: (t, e, i) => {
        i.d(e, {
            QP: () => td
        });
        let n = t => {
            let e = a(t)
              , {conflictingClassGroups: i, conflictingClassGroupModifiers: n} = t;
            return {
                getClassGroupId: t => {
                    let i = t.split("-");
                    return "" === i[0] && 1 !== i.length && i.shift(),
                    r(i, e) || o(t)
                }
                ,
                getConflictingClassGroupIds: (t, e) => {
                    let r = i[t] || [];
                    return e && n[t] ? [...r, ...n[t]] : r
                }
            }
        }
          , r = (t, e) => {
            if (0 === t.length)
                return e.classGroupId;
            let i = t[0]
              , n = e.nextPart.get(i)
              , s = n ? r(t.slice(1), n) : void 0;
            if (s)
                return s;
            if (0 === e.validators.length)
                return;
            let o = t.join("-");
            return e.validators.find( ({validator: t}) => t(o))?.classGroupId
        }
          , s = /^\[(.+)\]$/
          , o = t => {
            if (s.test(t)) {
                let e = s.exec(t)[1]
                  , i = e?.substring(0, e.indexOf(":"));
                if (i)
                    return "arbitrary.." + i
            }
        }
          , a = t => {
            let {theme: e, classGroups: i} = t
              , n = {
                nextPart: new Map,
                validators: []
            };
            for (let t in i)
                l(i[t], n, t, e);
            return n
        }
          , l = (t, e, i, n) => {
            t.forEach(t => {
                if ("string" == typeof t) {
                    ("" === t ? e : u(e, t)).classGroupId = i;
                    return
                }
                if ("function" == typeof t) {
                    if (h(t)) {
                        l(t(n), e, i, n);
                        return
                    }
                    e.validators.push({
                        validator: t,
                        classGroupId: i
                    });
                    return
                }
                Object.entries(t).forEach( ([t,r]) => {
                    l(r, u(e, t), i, n)
                }
                )
            }
            )
        }
          , u = (t, e) => {
            let i = t;
            return e.split("-").forEach(t => {
                i.nextPart.has(t) || i.nextPart.set(t, {
                    nextPart: new Map,
                    validators: []
                }),
                i = i.nextPart.get(t)
            }
            ),
            i
        }
          , h = t => t.isThemeGetter
          , d = t => {
            if (t < 1)
                return {
                    get: () => void 0,
                    set: () => {}
                };
            let e = 0
              , i = new Map
              , n = new Map
              , r = (r, s) => {
                i.set(r, s),
                ++e > t && (e = 0,
                n = i,
                i = new Map)
            }
            ;
            return {
                get(t) {
                    let e = i.get(t);
                    return void 0 !== e ? e : void 0 !== (e = n.get(t)) ? (r(t, e),
                    e) : void 0
                },
                set(t, e) {
                    i.has(t) ? i.set(t, e) : r(t, e)
                }
            }
        }
          , c = t => {
            let {prefix: e, experimentalParseClassName: i} = t
              , n = t => {
                let e;
                let i = []
                  , n = 0
                  , r = 0
                  , s = 0;
                for (let o = 0; o < t.length; o++) {
                    let a = t[o];
                    if (0 === n && 0 === r) {
                        if (":" === a) {
                            i.push(t.slice(s, o)),
                            s = o + 1;
                            continue
                        }
                        if ("/" === a) {
                            e = o;
                            continue
                        }
                    }
                    "[" === a ? n++ : "]" === a ? n-- : "(" === a ? r++ : ")" === a && r--
                }
                let o = 0 === i.length ? t : t.substring(s)
                  , a = p(o);
                return {
                    modifiers: i,
                    hasImportantModifier: a !== o,
                    baseClassName: a,
                    maybePostfixModifierPosition: e && e > s ? e - s : void 0
                }
            }
            ;
            if (e) {
                let t = e + ":"
                  , i = n;
                n = e => e.startsWith(t) ? i(e.substring(t.length)) : {
                    isExternal: !0,
                    modifiers: [],
                    hasImportantModifier: !1,
                    baseClassName: e,
                    maybePostfixModifierPosition: void 0
                }
            }
            if (i) {
                let t = n;
                n = e => i({
                    className: e,
                    parseClassName: t
                })
            }
            return n
        }
          , p = t => t.endsWith("!") ? t.substring(0, t.length - 1) : t.startsWith("!") ? t.substring(1) : t
          , m = t => {
            let e = Object.fromEntries(t.orderSensitiveModifiers.map(t => [t, !0]));
            return t => {
                if (t.length <= 1)
                    return t;
                let i = []
                  , n = [];
                return t.forEach(t => {
                    "[" === t[0] || e[t] ? (i.push(...n.sort(), t),
                    n = []) : n.push(t)
                }
                ),
                i.push(...n.sort()),
                i
            }
        }
          , f = t => ({
            cache: d(t.cacheSize),
            parseClassName: c(t),
            sortModifiers: m(t),
            ...n(t)
        })
          , v = /\s+/
          , g = (t, e) => {
            let {parseClassName: i, getClassGroupId: n, getConflictingClassGroupIds: r, sortModifiers: s} = e
              , o = []
              , a = t.trim().split(v)
              , l = "";
            for (let t = a.length - 1; t >= 0; t -= 1) {
                let e = a[t]
                  , {isExternal: u, modifiers: h, hasImportantModifier: d, baseClassName: c, maybePostfixModifierPosition: p} = i(e);
                if (u) {
                    l = e + (l.length > 0 ? " " + l : l);
                    continue
                }
                let m = !!p
                  , f = n(m ? c.substring(0, p) : c);
                if (!f) {
                    if (!m || !(f = n(c))) {
                        l = e + (l.length > 0 ? " " + l : l);
                        continue
                    }
                    m = !1
                }
                let v = s(h).join(":")
                  , g = d ? v + "!" : v
                  , y = g + f;
                if (o.includes(y))
                    continue;
                o.push(y);
                let x = r(f, m);
                for (let t = 0; t < x.length; ++t) {
                    let e = x[t];
                    o.push(g + e)
                }
                l = e + (l.length > 0 ? " " + l : l)
            }
            return l
        }
        ;
        function y() {
            let t, e, i = 0, n = "";
            for (; i < arguments.length; )
                (t = arguments[i++]) && (e = x(t)) && (n && (n += " "),
                n += e);
            return n
        }
        let x = t => {
            let e;
            if ("string" == typeof t)
                return t;
            let i = "";
            for (let n = 0; n < t.length; n++)
                t[n] && (e = x(t[n])) && (i && (i += " "),
                i += e);
            return i
        }
          , b = t => {
            let e = e => e[t] || [];
            return e.isThemeGetter = !0,
            e
        }
          , w = /^\[(?:(\w[\w-]*):)?(.+)\]$/i
          , P = /^\((?:(\w[\w-]*):)?(.+)\)$/i
          , T = /^\d+\/\d+$/
          , S = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
          , A = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
          , E = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/
          , M = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
          , k = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
          , C = t => T.test(t)
          , R = t => !!t && !Number.isNaN(Number(t))
          , V = t => !!t && Number.isInteger(Number(t))
          , D = t => t.endsWith("%") && R(t.slice(0, -1))
          , j = t => S.test(t)
          , L = () => !0
          , F = t => A.test(t) && !E.test(t)
          , O = () => !1
          , B = t => M.test(t)
          , I = t => k.test(t)
          , N = t => !z(t) && !Y(t)
          , U = t => tt(t, to, O)
          , z = t => w.test(t)
          , $ = t => tt(t, ta, F)
          , W = t => tt(t, tl, R)
          , _ = t => tt(t, ti, O)
          , K = t => tt(t, tr, I)
          , H = t => tt(t, O, B)
          , Y = t => P.test(t)
          , q = t => te(t, ta)
          , X = t => te(t, tu)
          , G = t => te(t, ti)
          , Z = t => te(t, to)
          , J = t => te(t, tr)
          , Q = t => te(t, th, !0)
          , tt = (t, e, i) => {
            let n = w.exec(t);
            return !!n && (n[1] ? e(n[1]) : i(n[2]))
        }
          , te = (t, e, i=!1) => {
            let n = P.exec(t);
            return !!n && (n[1] ? e(n[1]) : i)
        }
          , ti = t => "position" === t
          , tn = new Set(["image", "url"])
          , tr = t => tn.has(t)
          , ts = new Set(["length", "size", "percentage"])
          , to = t => ts.has(t)
          , ta = t => "length" === t
          , tl = t => "number" === t
          , tu = t => "family-name" === t
          , th = t => "shadow" === t;
        Symbol.toStringTag;
        let td = function(t, ...e) {
            let i, n, r;
            let s = function(a) {
                return n = (i = f(e.reduce( (t, e) => e(t), t()))).cache.get,
                r = i.cache.set,
                s = o,
                o(a)
            };
            function o(t) {
                let e = n(t);
                if (e)
                    return e;
                let s = g(t, i);
                return r(t, s),
                s
            }
            return function() {
                return s(y.apply(null, arguments))
            }
        }( () => {
            let t = b("color")
              , e = b("font")
              , i = b("text")
              , n = b("font-weight")
              , r = b("tracking")
              , s = b("leading")
              , o = b("breakpoint")
              , a = b("container")
              , l = b("spacing")
              , u = b("radius")
              , h = b("shadow")
              , d = b("inset-shadow")
              , c = b("drop-shadow")
              , p = b("blur")
              , m = b("perspective")
              , f = b("aspect")
              , v = b("ease")
              , g = b("animate")
              , y = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
              , x = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
              , w = () => ["auto", "hidden", "clip", "visible", "scroll"]
              , P = () => ["auto", "contain", "none"]
              , T = () => [C, "px", "full", "auto", Y, z, l]
              , S = () => [V, "none", "subgrid", Y, z]
              , A = () => ["auto", {
                span: ["full", V, Y, z]
            }, Y, z]
              , E = () => [V, "auto", Y, z]
              , M = () => ["auto", "min", "max", "fr", Y, z]
              , k = () => [Y, z, l]
              , F = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline"]
              , O = () => ["start", "end", "center", "stretch"]
              , B = () => [Y, z, l]
              , I = () => ["px", ...B()]
              , tt = () => ["px", "auto", ...B()]
              , te = () => [C, "auto", "px", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", Y, z, l]
              , ti = () => [t, Y, z]
              , tn = () => [D, $]
              , tr = () => ["", "none", "full", u, Y, z]
              , ts = () => ["", R, q, $]
              , to = () => ["solid", "dashed", "dotted", "double"]
              , ta = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
              , tl = () => ["", "none", p, Y, z]
              , tu = () => ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", Y, z]
              , th = () => ["none", R, Y, z]
              , td = () => ["none", R, Y, z]
              , tc = () => [R, Y, z]
              , tp = () => [C, "full", "px", Y, z, l];
            return {
                cacheSize: 500,
                theme: {
                    animate: ["spin", "ping", "pulse", "bounce"],
                    aspect: ["video"],
                    blur: [j],
                    breakpoint: [j],
                    color: [L],
                    container: [j],
                    "drop-shadow": [j],
                    ease: ["in", "out", "in-out"],
                    font: [N],
                    "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
                    "inset-shadow": [j],
                    leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
                    perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
                    radius: [j],
                    shadow: [j],
                    spacing: [R],
                    text: [j],
                    tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
                },
                classGroups: {
                    aspect: [{
                        aspect: ["auto", "square", C, z, Y, f]
                    }],
                    container: ["container"],
                    columns: [{
                        columns: [R, z, Y, a]
                    }],
                    "break-after": [{
                        "break-after": y()
                    }],
                    "break-before": [{
                        "break-before": y()
                    }],
                    "break-inside": [{
                        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                    }],
                    "box-decoration": [{
                        "box-decoration": ["slice", "clone"]
                    }],
                    box: [{
                        box: ["border", "content"]
                    }],
                    display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                    sr: ["sr-only", "not-sr-only"],
                    float: [{
                        float: ["right", "left", "none", "start", "end"]
                    }],
                    clear: [{
                        clear: ["left", "right", "both", "none", "start", "end"]
                    }],
                    isolation: ["isolate", "isolation-auto"],
                    "object-fit": [{
                        object: ["contain", "cover", "fill", "none", "scale-down"]
                    }],
                    "object-position": [{
                        object: [...x(), z, Y]
                    }],
                    overflow: [{
                        overflow: w()
                    }],
                    "overflow-x": [{
                        "overflow-x": w()
                    }],
                    "overflow-y": [{
                        "overflow-y": w()
                    }],
                    overscroll: [{
                        overscroll: P()
                    }],
                    "overscroll-x": [{
                        "overscroll-x": P()
                    }],
                    "overscroll-y": [{
                        "overscroll-y": P()
                    }],
                    position: ["static", "fixed", "absolute", "relative", "sticky"],
                    inset: [{
                        inset: T()
                    }],
                    "inset-x": [{
                        "inset-x": T()
                    }],
                    "inset-y": [{
                        "inset-y": T()
                    }],
                    start: [{
                        start: T()
                    }],
                    end: [{
                        end: T()
                    }],
                    top: [{
                        top: T()
                    }],
                    right: [{
                        right: T()
                    }],
                    bottom: [{
                        bottom: T()
                    }],
                    left: [{
                        left: T()
                    }],
                    visibility: ["visible", "invisible", "collapse"],
                    z: [{
                        z: [V, "auto", Y, z]
                    }],
                    basis: [{
                        basis: [C, "full", "auto", Y, z, a, l]
                    }],
                    "flex-direction": [{
                        flex: ["row", "row-reverse", "col", "col-reverse"]
                    }],
                    "flex-wrap": [{
                        flex: ["nowrap", "wrap", "wrap-reverse"]
                    }],
                    flex: [{
                        flex: [R, C, "auto", "initial", "none", z]
                    }],
                    grow: [{
                        grow: ["", R, Y, z]
                    }],
                    shrink: [{
                        shrink: ["", R, Y, z]
                    }],
                    order: [{
                        order: [V, "first", "last", "none", Y, z]
                    }],
                    "grid-cols": [{
                        "grid-cols": S()
                    }],
                    "col-start-end": [{
                        col: A()
                    }],
                    "col-start": [{
                        "col-start": E()
                    }],
                    "col-end": [{
                        "col-end": E()
                    }],
                    "grid-rows": [{
                        "grid-rows": S()
                    }],
                    "row-start-end": [{
                        row: A()
                    }],
                    "row-start": [{
                        "row-start": E()
                    }],
                    "row-end": [{
                        "row-end": E()
                    }],
                    "grid-flow": [{
                        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                    }],
                    "auto-cols": [{
                        "auto-cols": M()
                    }],
                    "auto-rows": [{
                        "auto-rows": M()
                    }],
                    gap: [{
                        gap: k()
                    }],
                    "gap-x": [{
                        "gap-x": k()
                    }],
                    "gap-y": [{
                        "gap-y": k()
                    }],
                    "justify-content": [{
                        justify: [...F(), "normal"]
                    }],
                    "justify-items": [{
                        "justify-items": [...O(), "normal"]
                    }],
                    "justify-self": [{
                        "justify-self": ["auto", ...O()]
                    }],
                    "align-content": [{
                        content: ["normal", ...F()]
                    }],
                    "align-items": [{
                        items: [...O(), "baseline"]
                    }],
                    "align-self": [{
                        self: ["auto", ...O(), "baseline"]
                    }],
                    "place-content": [{
                        "place-content": F()
                    }],
                    "place-items": [{
                        "place-items": [...O(), "baseline"]
                    }],
                    "place-self": [{
                        "place-self": ["auto", ...O()]
                    }],
                    p: [{
                        p: I()
                    }],
                    px: [{
                        px: I()
                    }],
                    py: [{
                        py: I()
                    }],
                    ps: [{
                        ps: I()
                    }],
                    pe: [{
                        pe: I()
                    }],
                    pt: [{
                        pt: I()
                    }],
                    pr: [{
                        pr: I()
                    }],
                    pb: [{
                        pb: I()
                    }],
                    pl: [{
                        pl: I()
                    }],
                    m: [{
                        m: tt()
                    }],
                    mx: [{
                        mx: tt()
                    }],
                    my: [{
                        my: tt()
                    }],
                    ms: [{
                        ms: tt()
                    }],
                    me: [{
                        me: tt()
                    }],
                    mt: [{
                        mt: tt()
                    }],
                    mr: [{
                        mr: tt()
                    }],
                    mb: [{
                        mb: tt()
                    }],
                    ml: [{
                        ml: tt()
                    }],
                    "space-x": [{
                        "space-x": B()
                    }],
                    "space-x-reverse": ["space-x-reverse"],
                    "space-y": [{
                        "space-y": B()
                    }],
                    "space-y-reverse": ["space-y-reverse"],
                    size: [{
                        size: te()
                    }],
                    w: [{
                        w: [a, "screen", ...te()]
                    }],
                    "min-w": [{
                        "min-w": [a, "screen", "none", ...te()]
                    }],
                    "max-w": [{
                        "max-w": [a, "screen", "none", "prose", {
                            screen: [o]
                        }, ...te()]
                    }],
                    h: [{
                        h: ["screen", ...te()]
                    }],
                    "min-h": [{
                        "min-h": ["screen", "none", ...te()]
                    }],
                    "max-h": [{
                        "max-h": ["screen", ...te()]
                    }],
                    "font-size": [{
                        text: ["base", i, q, $]
                    }],
                    "font-smoothing": ["antialiased", "subpixel-antialiased"],
                    "font-style": ["italic", "not-italic"],
                    "font-weight": [{
                        font: [n, Y, W]
                    }],
                    "font-stretch": [{
                        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", D, z]
                    }],
                    "font-family": [{
                        font: [X, z, e]
                    }],
                    "fvn-normal": ["normal-nums"],
                    "fvn-ordinal": ["ordinal"],
                    "fvn-slashed-zero": ["slashed-zero"],
                    "fvn-figure": ["lining-nums", "oldstyle-nums"],
                    "fvn-spacing": ["proportional-nums", "tabular-nums"],
                    "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
                    tracking: [{
                        tracking: [r, Y, z]
                    }],
                    "line-clamp": [{
                        "line-clamp": [R, "none", Y, W]
                    }],
                    leading: [{
                        leading: [Y, z, s, l]
                    }],
                    "list-image": [{
                        "list-image": ["none", Y, z]
                    }],
                    "list-style-position": [{
                        list: ["inside", "outside"]
                    }],
                    "list-style-type": [{
                        list: ["disc", "decimal", "none", Y, z]
                    }],
                    "text-alignment": [{
                        text: ["left", "center", "right", "justify", "start", "end"]
                    }],
                    "placeholder-color": [{
                        placeholder: ti()
                    }],
                    "text-color": [{
                        text: ti()
                    }],
                    "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                    "text-decoration-style": [{
                        decoration: [...to(), "wavy"]
                    }],
                    "text-decoration-thickness": [{
                        decoration: [R, "from-font", "auto", Y, $]
                    }],
                    "text-decoration-color": [{
                        decoration: ti()
                    }],
                    "underline-offset": [{
                        "underline-offset": [R, "auto", Y, z]
                    }],
                    "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                    "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                    "text-wrap": [{
                        text: ["wrap", "nowrap", "balance", "pretty"]
                    }],
                    indent: [{
                        indent: ["px", ...B()]
                    }],
                    "vertical-align": [{
                        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Y, z]
                    }],
                    whitespace: [{
                        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                    }],
                    break: [{
                        break: ["normal", "words", "all", "keep"]
                    }],
                    hyphens: [{
                        hyphens: ["none", "manual", "auto"]
                    }],
                    content: [{
                        content: ["none", Y, z]
                    }],
                    "bg-attachment": [{
                        bg: ["fixed", "local", "scroll"]
                    }],
                    "bg-clip": [{
                        "bg-clip": ["border", "padding", "content", "text"]
                    }],
                    "bg-origin": [{
                        "bg-origin": ["border", "padding", "content"]
                    }],
                    "bg-position": [{
                        bg: [...x(), G, _]
                    }],
                    "bg-repeat": [{
                        bg: ["no-repeat", {
                            repeat: ["", "x", "y", "space", "round"]
                        }]
                    }],
                    "bg-size": [{
                        bg: ["auto", "cover", "contain", Z, U]
                    }],
                    "bg-image": [{
                        bg: ["none", {
                            linear: [{
                                to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                            }, V, Y, z],
                            radial: ["", Y, z],
                            conic: [V, Y, z]
                        }, J, K]
                    }],
                    "bg-color": [{
                        bg: ti()
                    }],
                    "gradient-from-pos": [{
                        from: tn()
                    }],
                    "gradient-via-pos": [{
                        via: tn()
                    }],
                    "gradient-to-pos": [{
                        to: tn()
                    }],
                    "gradient-from": [{
                        from: ti()
                    }],
                    "gradient-via": [{
                        via: ti()
                    }],
                    "gradient-to": [{
                        to: ti()
                    }],
                    rounded: [{
                        rounded: tr()
                    }],
                    "rounded-s": [{
                        "rounded-s": tr()
                    }],
                    "rounded-e": [{
                        "rounded-e": tr()
                    }],
                    "rounded-t": [{
                        "rounded-t": tr()
                    }],
                    "rounded-r": [{
                        "rounded-r": tr()
                    }],
                    "rounded-b": [{
                        "rounded-b": tr()
                    }],
                    "rounded-l": [{
                        "rounded-l": tr()
                    }],
                    "rounded-ss": [{
                        "rounded-ss": tr()
                    }],
                    "rounded-se": [{
                        "rounded-se": tr()
                    }],
                    "rounded-ee": [{
                        "rounded-ee": tr()
                    }],
                    "rounded-es": [{
                        "rounded-es": tr()
                    }],
                    "rounded-tl": [{
                        "rounded-tl": tr()
                    }],
                    "rounded-tr": [{
                        "rounded-tr": tr()
                    }],
                    "rounded-br": [{
                        "rounded-br": tr()
                    }],
                    "rounded-bl": [{
                        "rounded-bl": tr()
                    }],
                    "border-w": [{
                        border: ts()
                    }],
                    "border-w-x": [{
                        "border-x": ts()
                    }],
                    "border-w-y": [{
                        "border-y": ts()
                    }],
                    "border-w-s": [{
                        "border-s": ts()
                    }],
                    "border-w-e": [{
                        "border-e": ts()
                    }],
                    "border-w-t": [{
                        "border-t": ts()
                    }],
                    "border-w-r": [{
                        "border-r": ts()
                    }],
                    "border-w-b": [{
                        "border-b": ts()
                    }],
                    "border-w-l": [{
                        "border-l": ts()
                    }],
                    "divide-x": [{
                        "divide-x": ts()
                    }],
                    "divide-x-reverse": ["divide-x-reverse"],
                    "divide-y": [{
                        "divide-y": ts()
                    }],
                    "divide-y-reverse": ["divide-y-reverse"],
                    "border-style": [{
                        border: [...to(), "hidden", "none"]
                    }],
                    "divide-style": [{
                        divide: [...to(), "hidden", "none"]
                    }],
                    "border-color": [{
                        border: ti()
                    }],
                    "border-color-x": [{
                        "border-x": ti()
                    }],
                    "border-color-y": [{
                        "border-y": ti()
                    }],
                    "border-color-s": [{
                        "border-s": ti()
                    }],
                    "border-color-e": [{
                        "border-e": ti()
                    }],
                    "border-color-t": [{
                        "border-t": ti()
                    }],
                    "border-color-r": [{
                        "border-r": ti()
                    }],
                    "border-color-b": [{
                        "border-b": ti()
                    }],
                    "border-color-l": [{
                        "border-l": ti()
                    }],
                    "divide-color": [{
                        divide: ti()
                    }],
                    "outline-style": [{
                        outline: [...to(), "none", "hidden"]
                    }],
                    "outline-offset": [{
                        "outline-offset": [R, Y, z]
                    }],
                    "outline-w": [{
                        outline: ["", R, q, $]
                    }],
                    "outline-color": [{
                        outline: [t]
                    }],
                    shadow: [{
                        shadow: ["", "none", h, Q, H]
                    }],
                    "shadow-color": [{
                        shadow: ti()
                    }],
                    "inset-shadow": [{
                        "inset-shadow": ["none", Y, z, d]
                    }],
                    "inset-shadow-color": [{
                        "inset-shadow": ti()
                    }],
                    "ring-w": [{
                        ring: ts()
                    }],
                    "ring-w-inset": ["ring-inset"],
                    "ring-color": [{
                        ring: ti()
                    }],
                    "ring-offset-w": [{
                        "ring-offset": [R, $]
                    }],
                    "ring-offset-color": [{
                        "ring-offset": ti()
                    }],
                    "inset-ring-w": [{
                        "inset-ring": ts()
                    }],
                    "inset-ring-color": [{
                        "inset-ring": ti()
                    }],
                    opacity: [{
                        opacity: [R, Y, z]
                    }],
                    "mix-blend": [{
                        "mix-blend": [...ta(), "plus-darker", "plus-lighter"]
                    }],
                    "bg-blend": [{
                        "bg-blend": ta()
                    }],
                    filter: [{
                        filter: ["", "none", Y, z]
                    }],
                    blur: [{
                        blur: tl()
                    }],
                    brightness: [{
                        brightness: [R, Y, z]
                    }],
                    contrast: [{
                        contrast: [R, Y, z]
                    }],
                    "drop-shadow": [{
                        "drop-shadow": ["", "none", c, Y, z]
                    }],
                    grayscale: [{
                        grayscale: ["", R, Y, z]
                    }],
                    "hue-rotate": [{
                        "hue-rotate": [R, Y, z]
                    }],
                    invert: [{
                        invert: ["", R, Y, z]
                    }],
                    saturate: [{
                        saturate: [R, Y, z]
                    }],
                    sepia: [{
                        sepia: ["", R, Y, z]
                    }],
                    "backdrop-filter": [{
                        "backdrop-filter": ["", "none", Y, z]
                    }],
                    "backdrop-blur": [{
                        "backdrop-blur": tl()
                    }],
                    "backdrop-brightness": [{
                        "backdrop-brightness": [R, Y, z]
                    }],
                    "backdrop-contrast": [{
                        "backdrop-contrast": [R, Y, z]
                    }],
                    "backdrop-grayscale": [{
                        "backdrop-grayscale": ["", R, Y, z]
                    }],
                    "backdrop-hue-rotate": [{
                        "backdrop-hue-rotate": [R, Y, z]
                    }],
                    "backdrop-invert": [{
                        "backdrop-invert": ["", R, Y, z]
                    }],
                    "backdrop-opacity": [{
                        "backdrop-opacity": [R, Y, z]
                    }],
                    "backdrop-saturate": [{
                        "backdrop-saturate": [R, Y, z]
                    }],
                    "backdrop-sepia": [{
                        "backdrop-sepia": ["", R, Y, z]
                    }],
                    "border-collapse": [{
                        border: ["collapse", "separate"]
                    }],
                    "border-spacing": [{
                        "border-spacing": B()
                    }],
                    "border-spacing-x": [{
                        "border-spacing-x": B()
                    }],
                    "border-spacing-y": [{
                        "border-spacing-y": B()
                    }],
                    "table-layout": [{
                        table: ["auto", "fixed"]
                    }],
                    caption: [{
                        caption: ["top", "bottom"]
                    }],
                    transition: [{
                        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", Y, z]
                    }],
                    "transition-behavior": [{
                        transition: ["normal", "discrete"]
                    }],
                    duration: [{
                        duration: [R, "initial", Y, z]
                    }],
                    ease: [{
                        ease: ["linear", "initial", v, Y, z]
                    }],
                    delay: [{
                        delay: [R, Y, z]
                    }],
                    animate: [{
                        animate: ["none", g, Y, z]
                    }],
                    backface: [{
                        backface: ["hidden", "visible"]
                    }],
                    perspective: [{
                        perspective: [m, Y, z]
                    }],
                    "perspective-origin": [{
                        "perspective-origin": tu()
                    }],
                    rotate: [{
                        rotate: th()
                    }],
                    "rotate-x": [{
                        "rotate-x": th()
                    }],
                    "rotate-y": [{
                        "rotate-y": th()
                    }],
                    "rotate-z": [{
                        "rotate-z": th()
                    }],
                    scale: [{
                        scale: td()
                    }],
                    "scale-x": [{
                        "scale-x": td()
                    }],
                    "scale-y": [{
                        "scale-y": td()
                    }],
                    "scale-z": [{
                        "scale-z": td()
                    }],
                    "scale-3d": ["scale-3d"],
                    skew: [{
                        skew: tc()
                    }],
                    "skew-x": [{
                        "skew-x": tc()
                    }],
                    "skew-y": [{
                        "skew-y": tc()
                    }],
                    transform: [{
                        transform: [Y, z, "", "none", "gpu", "cpu"]
                    }],
                    "transform-origin": [{
                        origin: tu()
                    }],
                    "transform-style": [{
                        transform: ["3d", "flat"]
                    }],
                    translate: [{
                        translate: tp()
                    }],
                    "translate-x": [{
                        "translate-x": tp()
                    }],
                    "translate-y": [{
                        "translate-y": tp()
                    }],
                    "translate-z": [{
                        "translate-z": tp()
                    }],
                    "translate-none": ["translate-none"],
                    accent: [{
                        accent: ti()
                    }],
                    appearance: [{
                        appearance: ["none", "auto"]
                    }],
                    "caret-color": [{
                        caret: ti()
                    }],
                    "color-scheme": [{
                        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
                    }],
                    cursor: [{
                        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", Y, z]
                    }],
                    "field-sizing": [{
                        "field-sizing": ["fixed", "content"]
                    }],
                    "pointer-events": [{
                        "pointer-events": ["auto", "none"]
                    }],
                    resize: [{
                        resize: ["none", "", "y", "x"]
                    }],
                    "scroll-behavior": [{
                        scroll: ["auto", "smooth"]
                    }],
                    "scroll-m": [{
                        "scroll-m": B()
                    }],
                    "scroll-mx": [{
                        "scroll-mx": B()
                    }],
                    "scroll-my": [{
                        "scroll-my": B()
                    }],
                    "scroll-ms": [{
                        "scroll-ms": B()
                    }],
                    "scroll-me": [{
                        "scroll-me": B()
                    }],
                    "scroll-mt": [{
                        "scroll-mt": B()
                    }],
                    "scroll-mr": [{
                        "scroll-mr": B()
                    }],
                    "scroll-mb": [{
                        "scroll-mb": B()
                    }],
                    "scroll-ml": [{
                        "scroll-ml": B()
                    }],
                    "scroll-p": [{
                        "scroll-p": B()
                    }],
                    "scroll-px": [{
                        "scroll-px": B()
                    }],
                    "scroll-py": [{
                        "scroll-py": B()
                    }],
                    "scroll-ps": [{
                        "scroll-ps": B()
                    }],
                    "scroll-pe": [{
                        "scroll-pe": B()
                    }],
                    "scroll-pt": [{
                        "scroll-pt": B()
                    }],
                    "scroll-pr": [{
                        "scroll-pr": B()
                    }],
                    "scroll-pb": [{
                        "scroll-pb": B()
                    }],
                    "scroll-pl": [{
                        "scroll-pl": B()
                    }],
                    "snap-align": [{
                        snap: ["start", "end", "center", "align-none"]
                    }],
                    "snap-stop": [{
                        snap: ["normal", "always"]
                    }],
                    "snap-type": [{
                        snap: ["none", "x", "y", "both"]
                    }],
                    "snap-strictness": [{
                        snap: ["mandatory", "proximity"]
                    }],
                    touch: [{
                        touch: ["auto", "none", "manipulation"]
                    }],
                    "touch-x": [{
                        "touch-pan": ["x", "left", "right"]
                    }],
                    "touch-y": [{
                        "touch-pan": ["y", "up", "down"]
                    }],
                    "touch-pz": ["touch-pinch-zoom"],
                    select: [{
                        select: ["none", "text", "all", "auto"]
                    }],
                    "will-change": [{
                        "will-change": ["auto", "scroll", "contents", "transform", Y, z]
                    }],
                    fill: [{
                        fill: ["none", ...ti()]
                    }],
                    "stroke-w": [{
                        stroke: [R, q, $, W]
                    }],
                    stroke: [{
                        stroke: ["none", ...ti()]
                    }],
                    "forced-color-adjust": [{
                        "forced-color-adjust": ["auto", "none"]
                    }]
                },
                conflictingClassGroups: {
                    overflow: ["overflow-x", "overflow-y"],
                    overscroll: ["overscroll-x", "overscroll-y"],
                    inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                    "inset-x": ["right", "left"],
                    "inset-y": ["top", "bottom"],
                    flex: ["basis", "grow", "shrink"],
                    gap: ["gap-x", "gap-y"],
                    p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                    px: ["pr", "pl"],
                    py: ["pt", "pb"],
                    m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                    mx: ["mr", "ml"],
                    my: ["mt", "mb"],
                    size: ["w", "h"],
                    "font-size": ["leading"],
                    "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                    "fvn-ordinal": ["fvn-normal"],
                    "fvn-slashed-zero": ["fvn-normal"],
                    "fvn-figure": ["fvn-normal"],
                    "fvn-spacing": ["fvn-normal"],
                    "fvn-fraction": ["fvn-normal"],
                    "line-clamp": ["display", "overflow"],
                    rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                    "rounded-s": ["rounded-ss", "rounded-es"],
                    "rounded-e": ["rounded-se", "rounded-ee"],
                    "rounded-t": ["rounded-tl", "rounded-tr"],
                    "rounded-r": ["rounded-tr", "rounded-br"],
                    "rounded-b": ["rounded-br", "rounded-bl"],
                    "rounded-l": ["rounded-tl", "rounded-bl"],
                    "border-spacing": ["border-spacing-x", "border-spacing-y"],
                    "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                    "border-w-x": ["border-w-r", "border-w-l"],
                    "border-w-y": ["border-w-t", "border-w-b"],
                    "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                    "border-color-x": ["border-color-r", "border-color-l"],
                    "border-color-y": ["border-color-t", "border-color-b"],
                    translate: ["translate-x", "translate-y", "translate-none"],
                    "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
                    "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                    "scroll-mx": ["scroll-mr", "scroll-ml"],
                    "scroll-my": ["scroll-mt", "scroll-mb"],
                    "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                    "scroll-px": ["scroll-pr", "scroll-pl"],
                    "scroll-py": ["scroll-pt", "scroll-pb"],
                    touch: ["touch-x", "touch-y", "touch-pz"],
                    "touch-x": ["touch"],
                    "touch-y": ["touch"],
                    "touch-pz": ["touch"]
                },
                conflictingClassGroupModifiers: {
                    "font-size": ["leading"]
                },
                orderSensitiveModifiers: ["before", "after", "placeholder", "file", "marker", "selection", "first-line", "first-letter", "backdrop", "*", "**"]
            }
        }
        )
    }
}]);
