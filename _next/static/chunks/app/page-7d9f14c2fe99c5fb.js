(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[974], {
    8053: (e, t, a) => {
        Promise.resolve().then(a.bind(a, 6484))
    }
    ,
    6484: (e, t, a) => {
        "use strict";
        a.r(t),
        a.d(t, {
            default: () => J
        });
        var s = a(4884)
          , r = a(1553)
          , i = a(4843)
          , l = a(6759)
          , n = a(7158)
          , o = a(9482)
          , c = a(8273)
          , d = a(726);
        function x() {
            for (var e = arguments.length, t = Array(e), a = 0; a < e; a++)
                t[a] = arguments[a];
            return (0,
            d.QP)((0,
            c.$)(t))
        }
        let p = i.forwardRef( (e, t) => {
            let {className: a, children: r, ...i} = e;
            return (0,
            s.jsxs)(l.bL, {
                ref: t,
                className: x("relative z-10 flex max-w-max flex-1 items-center justify-center", a),
                ...i,
                children: [r, (0,
                s.jsx)(v, {})]
            })
        }
        );
        p.displayName = l.bL.displayName;
        let h = i.forwardRef( (e, t) => {
            let {className: a, ...r} = e;
            return (0,
            s.jsx)(l.B8, {
                ref: t,
                className: x("group flex flex-1 list-none items-center justify-center space-x-1", a),
                ...r
            })
        }
        );
        h.displayName = l.B8.displayName;
        let m = l.q7
          , f = (0,
        n.F)("group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50")
          , g = i.forwardRef( (e, t) => {
            let {className: a, children: r, ...i} = e;
            return (0,
            s.jsxs)(l.l9, {
                ref: t,
                className: x(f(), "group", a),
                ...i,
                children: [r, " ", (0,
                s.jsx)(o.A, {
                    className: "relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180",
                    "aria-hidden": "true"
                })]
            })
        }
        );
        g.displayName = l.l9.displayName;
        let u = i.forwardRef( (e, t) => {
            let {className: a, ...r} = e;
            return (0,
            s.jsx)(l.UC, {
                ref: t,
                className: x("left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ", a),
                ...r
            })
        }
        );
        u.displayName = l.UC.displayName;
        let b = l.N_
          , v = i.forwardRef( (e, t) => {
            let {className: a, ...r} = e;
            return (0,
            s.jsx)("div", {
                className: x("absolute left-0 top-full flex justify-center"),
                children: (0,
                s.jsx)(l.LM, {
                    className: x("origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]", a),
                    ref: t,
                    ...r
                })
            })
        }
        );
        v.displayName = l.LM.displayName,
        i.forwardRef( (e, t) => {
            let {className: a, ...r} = e;
            return (0,
            s.jsx)(l.C1, {
                ref: t,
                className: x("top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in", a),
                ...r,
                children: (0,
                s.jsx)("div", {
                    className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md"
                })
            })
        }
        ).displayName = l.C1.displayName;
        var j = a(1968)
          , w = a.n(j)
          , N = a(8181)
          , y = a(3705);
        let C = () => {
            let[e,t] = (0,
            i.useState)({
                x: 0,
                y: 0
            })
              , [a,l] = (0,
            i.useState)(!1)
              , [n,o] = (0,
            i.useState)(!1)
              , c = e => {
                let a = e.currentTarget.getBoundingClientRect();
                t({
                    x: e.clientX - a.left,
                    y: e.clientY - a.top
                })
            }
            ;
            return (0,
            s.jsx)(r.P.div, {
                initial: {
                    y: -100
                },
                animate: {
                    y: 0
                },
                className: "relative w-[80%] top-0 z-50 bg-[#0D0E0F] bg-transparent backdrop-blur-md border mt-8 rounded-xl border-[#252627]",
                children: (0,
                s.jsxs)("div", {
                    className: "container mx-auto px-4 h-16 flex items-center justify-between",
                    children: [(0,
                    s.jsx)(r.P.div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: {
                            duration: .5
                        },
                        children: (0,
                        s.jsxs)(w(), {
                            href: "/",
                            className: "text-2xl text-white",
                            children: ["ad", (0,
                            s.jsx)("span", {
                                className: "font-semibold",
                                children: "Task"
                            }), ".ai"]
                        })
                    }), (0,
                    s.jsx)(p, {
                        className: "bp2:hidden flex",
                        children: (0,
                        s.jsxs)(h, {
                            children: [(0,
                            s.jsxs)(m, {
                                children: [(0,
                                s.jsx)(g, {
                                    className: "bg-transparent data-[state=open]:bg-transparent hover:bg-transparent data-[state=open]:text-white hover:text-white",
                                    children: "Products"
                                }), (0,
                                s.jsx)(u, {
                                    children: (0,
                                    s.jsxs)("ul", {
                                        className: "grid w-[600px] gap-3 p-6 bg-gradient-to-r from-[#090B0F] backdrop-blur-md to-[#171B24]  grid-cols-2",
                                        children: [(0,
                                        s.jsxs)("li", {
                                            className: "col-span-1",
                                            children: [(0,
                                            s.jsx)("span", {
                                                className: "text-lg font-medium text-[#5B698B]",
                                                children: "Products"
                                            }), (0,
                                            s.jsxs)("ul", {
                                                className: "mt-4",
                                                children: [(0,
                                                s.jsx)("li", {
                                                    children: (0,
                                                    s.jsx)(b, {
                                                        asChild: !0,
                                                        children: (0,
                                                        s.jsxs)("a", {
                                                            href: "/optimize",
                                                            className: "text-white hover:text-gray-300 block pb-1",
                                                            children: ["Optimize", (0,
                                                            s.jsx)("div", {
                                                                className: "w-[150px] h-[1px] mt-4 bg-gradient-to-r from-[#2E3A58] to-[#455783]"
                                                            })]
                                                        })
                                                    })
                                                }), (0,
                                                s.jsx)("li", {
                                                    children: (0,
                                                    s.jsx)(b, {
                                                        asChild: !0,
                                                        children: (0,
                                                        s.jsxs)("a", {
                                                            href: "/content-analytics",
                                                            className: "text-white hover:text-gray-300 block pb-1",
                                                            children: ["Content Analytics", (0,
                                                            s.jsx)("div", {
                                                                className: "w-[150px] h-[1px] mt-4 bg-gradient-to-r from-[#2E3A58] to-[#455783]"
                                                            })]
                                                        })
                                                    })
                                                }), (0,
                                                s.jsx)("li", {
                                                    children: (0,
                                                    s.jsx)(b, {
                                                        asChild: !0,
                                                        children: (0,
                                                        s.jsxs)("a", {
                                                            href: "/keyword-research",
                                                            className: "text-white hover:text-gray-300 block pb-1",
                                                            children: ["Keyword Research", (0,
                                                            s.jsx)("div", {
                                                                className: "w-[150px] h-[1px] mt-4 bg-gradient-to-r from-[#2E3A58] to-[#455783]"
                                                            })]
                                                        })
                                                    })
                                                }), (0,
                                                s.jsx)("li", {
                                                    children: (0,
                                                    s.jsx)(b, {
                                                        asChild: !0,
                                                        children: (0,
                                                        s.jsxs)("a", {
                                                            href: "/keyword-tracking",
                                                            className: "text-white hover:text-gray-300 block pb-1",
                                                            children: ["Keyword Tracking", (0,
                                                            s.jsx)("div", {
                                                                className: "w-[150px] h-[1px] mt-4 bg-gradient-to-r from-[#2E3A58] to-[#455783]"
                                                            })]
                                                        })
                                                    })
                                                }), (0,
                                                s.jsx)("li", {
                                                    children: (0,
                                                    s.jsx)(b, {
                                                        asChild: !0,
                                                        children: (0,
                                                        s.jsx)("a", {
                                                            href: "/keyword-clustering",
                                                            className: "text-white hover:text-gray-300",
                                                            children: "Keyword Clustering"
                                                        })
                                                    })
                                                })]
                                            })]
                                        }), (0,
                                        s.jsx)("li", {
                                            className: "col-span-1",
                                            children: (0,
                                            s.jsxs)("ul", {
                                                className: "mt-12 space-y-4",
                                                children: [(0,
                                                s.jsx)("li", {
                                                    children: (0,
                                                    s.jsx)(b, {
                                                        asChild: !0,
                                                        children: (0,
                                                        s.jsxs)("a", {
                                                            href: "/competitor-research",
                                                            className: "text-white hover:text-gray-300 block pb-1",
                                                            children: ["Competitor Research", (0,
                                                            s.jsx)("div", {
                                                                className: "w-[150px] h-[1px] mt-4 bg-gradient-to-r from-[#2E3A58] to-[#455783]"
                                                            })]
                                                        })
                                                    })
                                                }), (0,
                                                s.jsx)("li", {
                                                    children: (0,
                                                    s.jsx)(b, {
                                                        asChild: !0,
                                                        children: (0,
                                                        s.jsxs)("a", {
                                                            href: "/social-listening",
                                                            className: "text-white hover:text-gray-300 block pb-1",
                                                            children: ["Social Listening", (0,
                                                            s.jsx)("div", {
                                                                className: "w-[150px] h-[1px] mt-4 bg-gradient-to-r from-[#2E3A58] to-[#455783]"
                                                            })]
                                                        })
                                                    })
                                                }), (0,
                                                s.jsx)("li", {
                                                    children: (0,
                                                    s.jsx)(b, {
                                                        asChild: !0,
                                                        children: (0,
                                                        s.jsxs)("a", {
                                                            href: "/autodetect",
                                                            className: "text-white hover:text-gray-300 block pb-1",
                                                            children: ["AutoDetect", (0,
                                                            s.jsx)("div", {
                                                                className: "w-[150px] h-[1px] mt-4 bg-gradient-to-r from-[#2E3A58] to-[#455783]"
                                                            })]
                                                        })
                                                    })
                                                }), (0,
                                                s.jsx)("li", {
                                                    children: (0,
                                                    s.jsx)(b, {
                                                        asChild: !0,
                                                        children: (0,
                                                        s.jsx)("a", {
                                                            href: "/site-audit",
                                                            className: "text-white hover:text-gray-300",
                                                            children: "Site Audit"
                                                        })
                                                    })
                                                })]
                                            })
                                        })]
                                    })
                                })]
                            }), (0,
                            s.jsxs)(m, {
                                children: [(0,
                                s.jsx)(g, {
                                    className: "bg-transparent data-[state=open]:bg-transparent hover:bg-transparent data-[state=open]:text-white hover:text-white",
                                    children: "Tools"
                                }), (0,
                                s.jsx)(u, {
                                    children: (0,
                                    s.jsxs)("ul", {
                                        className: "grid w-[600px] gap-3 p-6 bg-gradient-to-r from-[#090B0F] backdrop-blur-md to-[#171B24]  grid-cols-2",
                                        children: [(0,
                                        s.jsxs)("li", {
                                            className: "col-span-1",
                                            children: [(0,
                                            s.jsx)("span", {
                                                className: "text-lg font-medium text-[#5B698B]",
                                                children: "Tools"
                                            }), (0,
                                            s.jsxs)("ul", {
                                                className: "mt-4",
                                                children: [(0,
                                                s.jsx)("li", {
                                                    children: (0,
                                                    s.jsx)(b, {
                                                        asChild: !0,
                                                        children: (0,
                                                        s.jsxs)("a", {
                                                            href: "/optimize",
                                                            className: "text-white hover:text-gray-300 block pb-1",
                                                            children: ["SEO Title Generator", (0,
                                                            s.jsx)("div", {
                                                                className: "w-[150px] h-[1px] mt-4 bg-gradient-to-r from-[#2E3A58] to-[#455783]"
                                                            })]
                                                        })
                                                    })
                                                }), (0,
                                                s.jsx)("li", {
                                                    children: (0,
                                                    s.jsx)(b, {
                                                        asChild: !0,
                                                        children: (0,
                                                        s.jsxs)("a", {
                                                            href: "/content-analytics",
                                                            className: "text-white hover:text-gray-300 block pb-1",
                                                            children: ["Seo Keyword Generator", (0,
                                                            s.jsx)("div", {
                                                                className: "w-[150px] h-[1px] mt-4 bg-gradient-to-r from-[#2E3A58] to-[#455783]"
                                                            })]
                                                        })
                                                    })
                                                }), (0,
                                                s.jsx)("li", {
                                                    children: (0,
                                                    s.jsx)(b, {
                                                        asChild: !0,
                                                        children: (0,
                                                        s.jsxs)("a", {
                                                            href: "/keyword-research",
                                                            className: "text-white hover:text-gray-300 block pb-1",
                                                            children: ["Meta Description Generator", (0,
                                                            s.jsx)("div", {
                                                                className: "w-[150px] h-[1px] mt-4 bg-gradient-to-r from-[#2E3A58] to-[#455783]"
                                                            })]
                                                        })
                                                    })
                                                }), (0,
                                                s.jsx)("li", {
                                                    children: (0,
                                                    s.jsx)(b, {
                                                        asChild: !0,
                                                        children: (0,
                                                        s.jsxs)("a", {
                                                            href: "/keyword-tracking",
                                                            className: "text-white hover:text-gray-300 block pb-1",
                                                            children: ["Blog Idea generator", (0,
                                                            s.jsx)("div", {
                                                                className: "w-[150px] h-[1px] mt-4 bg-gradient-to-r from-[#2E3A58] to-[#455783]"
                                                            })]
                                                        })
                                                    })
                                                }), (0,
                                                s.jsx)("li", {
                                                    children: (0,
                                                    s.jsx)(b, {
                                                        asChild: !0,
                                                        children: (0,
                                                        s.jsx)("a", {
                                                            href: "/keyword-clustering",
                                                            className: "text-white hover:text-gray-300",
                                                            children: "Website ranking checker"
                                                        })
                                                    })
                                                })]
                                            })]
                                        }), (0,
                                        s.jsx)("li", {
                                            className: "col-span-1",
                                            children: (0,
                                            s.jsxs)("ul", {
                                                className: "mt-12 space-y-4",
                                                children: [(0,
                                                s.jsx)("li", {
                                                    children: (0,
                                                    s.jsx)(b, {
                                                        asChild: !0,
                                                        children: (0,
                                                        s.jsxs)("a", {
                                                            href: "/competitor-research",
                                                            className: "text-white hover:text-gray-300 block pb-1",
                                                            children: ["Keyword rank checker", (0,
                                                            s.jsx)("div", {
                                                                className: "w-[150px] h-[1px] mt-4 bg-gradient-to-r from-[#2E3A58] to-[#455783]"
                                                            })]
                                                        })
                                                    })
                                                }), (0,
                                                s.jsx)("li", {
                                                    children: (0,
                                                    s.jsx)(b, {
                                                        asChild: !0,
                                                        children: (0,
                                                        s.jsxs)("a", {
                                                            href: "/social-listening",
                                                            className: "text-white hover:text-gray-300 block pb-1",
                                                            children: ["Backlink Chekcer", (0,
                                                            s.jsx)("div", {
                                                                className: "w-[150px] h-[1px] mt-4 bg-gradient-to-r from-[#2E3A58] to-[#455783]"
                                                            })]
                                                        })
                                                    })
                                                })]
                                            })
                                        })]
                                    })
                                })]
                            }), (0,
                            s.jsx)(m, {
                                children: (0,
                                s.jsx)(w(), {
                                    href: "/contact",
                                    legacyBehavior: !0,
                                    passHref: !0,
                                    children: (0,
                                    s.jsx)(b, {
                                        className: x("text-sm"),
                                        children: "Contact Us"
                                    })
                                })
                            })]
                        })
                    }), (0,
                    s.jsx)(N.A, {
                        className: "w-6 h-6 bp3:flex hidden"
                    }), (0,
                    s.jsxs)(r.P.div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: {
                            duration: .5,
                            delay: .2
                        },
                        className: "bp3:hidden flex items-center gap-4",
                        children: [(0,
                        s.jsxs)(r.P.button, {
                            className: "group relative overflow-hidden border-[2px] border-[#5B698B] rounded-full bg-gradient-to-b from-black to-[rgb(65,64,64)] px-8 py-2 text-white backdrop-blur-sm transition-colors hover:bg-[rgba(0,0,0,0.30)]",
                            onMouseMove: c,
                            onHoverStart: () => l(!0),
                            onHoverEnd: () => l(!1),
                            children: [(0,
                            s.jsx)("span", {
                                className: "relative z-10",
                                children: "Log in"
                            }), a && (0,
                            s.jsx)(r.P.div, {
                                className: "absolute inset-0 z-0",
                                animate: {
                                    background: ["radial-gradient(40px circle at ".concat(e.x, "px ").concat(e.y, "px, rgba(255,255,255,0.15), transparent 50%)")]
                                },
                                transition: {
                                    duration: .15
                                }
                            })]
                        }), (0,
                        s.jsxs)(r.P.button, {
                            className: "group relative bp1:hidden flex border-[2px] border-[#5B698B] overflow-hidden rounded-full bg-gradient-to-b from-[rgb(91,105,139)] to-[#414040] px-8 py-2 text-white backdrop-blur-sm transition-colors hover:bg-[rgba(255,255,255,0.2)]",
                            onMouseMove: c,
                            onHoverStart: () => o(!0),
                            onHoverEnd: () => o(!1),
                            children: [(0,
                            s.jsx)("span", {
                                className: "relative z-10",
                                children: "Schedule a Call"
                            }), n && (0,
                            s.jsx)(r.P.div, {
                                className: "absolute inset-0 z-0",
                                animate: {
                                    background: ["radial-gradient(40px circle at ".concat(e.x, "px ").concat(e.y, "px, rgba(255,255,255,0.2), transparent 50%)")]
                                },
                                transition: {
                                    duration: .15
                                }
                            })]
                        }), (0,
                        s.jsxs)(r.P.button, {
                            className: "group relative bp1:flex hidden border-[2px] border-[#5B698B] overflow-hidden rounded-full bg-gradient-to-b from-[rgb(91,105,139)] to-[#414040] px-8 py-2 text-white backdrop-blur-sm transition-colors hover:bg-[rgba(255,255,255,0.2)]",
                            onMouseMove: c,
                            onHoverStart: () => o(!0),
                            onHoverEnd: () => o(!1),
                            children: [(0,
                            s.jsx)(y.A, {
                                className: "relative z-10 w-6 h-6"
                            }), n && (0,
                            s.jsx)(r.P.div, {
                                className: "absolute inset-0 z-0",
                                animate: {
                                    background: ["radial-gradient(40px circle at ".concat(e.x, "px ").concat(e.y, "px, rgba(255,255,255,0.2), transparent 50%)")]
                                },
                                transition: {
                                    duration: .15
                                }
                            })]
                        })]
                    })]
                })
            })
        }
        ;
        var k = a(3911)
          , z = a(9519)
          , M = a(3714)
          , L = a(2112)
          , S = a(9544)
          , A = a(8120)
          , B = a(4207)
          , _ = a(9396)
          , P = a(9333);
        function I(e) {
            let {children: t, containerClassName: a, className: l, as: n="button", duration: o=1, clockwise: c=!0, ...d} = e
              , [p,h] = (0,
            i.useState)(!1)
              , [m,f] = (0,
            i.useState)("TOP")
              , g = e => {
                let t = ["TOP", "LEFT", "BOTTOM", "RIGHT"]
                  , a = t.indexOf(e)
                  , s = c ? (a - 1 + t.length) % t.length : (a + 1) % t.length;
                return t[s]
            }
              , u = {
                TOP: "radial-gradient(30% 60% at 50% 0%, hsl(220, 100%, 75%) 0%, rgba(50, 117, 248, 0) 100%)",
                LEFT: "radial-gradient(25% 50% at 0% 50%, hsl(220, 100%, 75%) 0%, rgba(50, 117, 248, 0) 100%)",
                BOTTOM: "radial-gradient(30% 60% at 50% 100%, hsl(220, 100%, 75%) 0%, rgba(50, 117, 248, 0) 100%)",
                RIGHT: "radial-gradient(25% 50% at 100% 50%, hsl(220, 100%, 75%) 0%, rgba(50, 117, 248, 0) 100%)"
            };
            return (0,
            i.useEffect)( () => {
                if (!p) {
                    let e = setInterval( () => {
                        f(e => g(e))
                    }
                    , 1e3 * o);
                    return () => clearInterval(e)
                }
            }
            , [p]),
            (0,
            s.jsxs)(n, {
                onMouseEnter: () => {
                    h(!0)
                }
                ,
                onMouseLeave: () => h(!1),
                className: x("relative flex rounded-full border  content-center bg-black/20 hover:bg-black/10 transition duration-500 dark:bg-white/20 items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-px decoration-clone w-fit", a),
                ...d,
                children: [(0,
                s.jsx)("div", {
                    className: x("w-auto text-white z-10 bg-black px-4 py-2 rounded-[inherit]", l),
                    children: t
                }), (0,
                s.jsx)(r.P.div, {
                    className: x("flex-none inset-0 overflow-hidden absolute z-0 rounded-[inherit]"),
                    style: {
                        filter: "blur(2px)",
                        position: "absolute",
                        width: "100%",
                        height: "100%"
                    },
                    initial: {
                        background: u[m]
                    },
                    animate: {
                        background: p ? [u[m], "radial-gradient(90% 200% at 50% 50%, hsl(220, 100%, 60%) 0%, rgba(50, 117, 248, 0) 100%)"] : u[m]
                    },
                    transition: {
                        ease: "linear",
                        duration: null != o ? o : 1
                    }
                }), (0,
                s.jsx)("div", {
                    className: "bg-black absolute z-1 flex-none inset-[2px] rounded-[100px]"
                })]
            })
        }
        var R = a(2136);
        let E = e => {
            let {className: t, size: a=50, delay: r=0, duration: i=6, colorFrom: l="#ffaa40", colorTo: n="#9c40ff", transition: o, style: c, reverse: d=!1, initialOffset: p=0} = e;
            return (0,
            s.jsx)("div", {
                className: "pointer-events-none absolute inset-0 rounded-[inherit] border border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]",
                children: (0,
                s.jsx)(R.P.div, {
                    className: x("absolute aspect-square", "bg-gradient-to-l from-[var(--color-from)] via-[var(--color-to)] to-transparent", t),
                    style: {
                        width: a,
                        offsetPath: "rect(0 auto auto 0 round ".concat(a, "px)"),
                        "--color-from": l,
                        "--color-to": n,
                        ...c
                    },
                    initial: {
                        offsetDistance: "".concat(p, "%")
                    },
                    animate: {
                        offsetDistance: d ? ["".concat(100 - p, "%"), "".concat(-p, "%")] : ["".concat(p, "%"), "".concat(100 + p, "%")]
                    },
                    transition: {
                        repeat: 1 / 0,
                        ease: "linear",
                        duration: i,
                        delay: -r,
                        ...o
                    }
                })
            })
        }
          , O = [{
            name: "sony",
            logo: '<svg viewBox="0 0 192.744 192.744" xmlns="http://www.w3.org/2000/svg" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill-rule="evenodd" clip-rule="evenodd"> <path fill="#ffffff" d="M0 0h192.744v192.744H0V0z"></path> <path d="M187.035 106.442a2.852 2.852 0 1 0 0 5.703 2.847 2.847 0 0 0 2.844-2.858 2.844 2.844 0 0 0-2.844-2.845zm0 5.36a2.505 2.505 0 0 1-2.508-2.515 2.502 2.502 0 0 1 2.508-2.501 2.5 2.5 0 0 1 2.5 2.501 2.503 2.503 0 0 1-2.5 2.515z"></path> <path d="M188.498 108.54c0-.269-.119-.552-.357-.687-.24-.142-.508-.156-.777-.156h-1.389v3.187h.389v-1.47h.717l.91 1.47h.463l-.963-1.47c.568-.016 1.007-.247 1.007-.874zm-1.537.567h-.598v-1.127h.91c.396 0 .83.06.83.553.001.649-.695.574-1.142.574zM170.32 93.132l5.83-6.225c.338-.457.506-.777.506-1.051 0-.457-.393-.64-1.629-.64h-1.471v-3.93h15.922v3.93h-2.092c-2.416 0-2.865.365-6.236 4.615l-9.223 9.96v6.078c0 1.555.785 2.102 3.033 2.102h3.482v3.792h-22.301v-3.792h3.482c2.246 0 3.033-.547 3.033-2.102v-6.078l-10.863-12.017c-1.795-2.101-1.547-2.558-6.545-2.558v-3.93h20.168v3.93h-1.436c-1.461 0-2.08.274-2.08.822 0 .458.449.823.73 1.188l5.496 5.99c.653.679 1.45.767 2.194-.084zM35.003 81.285h4.865v10.966h-4.493c-.398-2.192-1.77-3.045-3.021-4.195-2.257-2.074-7.145-3.801-11.256-3.801-5.306 0-9.784 1.646-9.784 4.066 0 6.718 30.345 1.372 30.345 14.074 0 6.625-6.5 10.326-18.173 10.326-4.041 0-10.156-1.254-13.764-3.17-1.131-.653-1.611.618-1.823 2.211H2.911V100.43h4.512c.995 2.879 2.366 3.472 3.627 4.615 2.188 2.011 7.396 3.474 12.172 3.427 7.201-.071 9.677-1.645 9.677-3.93 0-2.284-2.449-2.833-10.34-4.066l-6.7-1.097c-7.561-1.143-13.066-2.833-13.066-8.864 0-6.26 6.964-10.19 17.975-10.19 4.64 0 8.522.62 12.248 2.726 1.032.671 2 .751 1.987-1.766zM129.947 99.645l.096-12.188c0-1.599-.832-2.147-3.209-2.147h-2.793v-3.792h17.77v3.792h-2.316c-2.379 0-3.211.549-3.211 2.147v24.537l-6.955-.055-22.524-21.329v15.49c0 1.554.832 2.147 3.209 2.147h3.092v3.747H94.651v-3.747h3.058c2.377 0 3.209-.594 3.209-2.147V87.457c0-1.599-.832-2.147-3.209-2.147h-3.058v-3.792h15.956l19.34 18.127zM70.424 80.095c-14.162 0-23.027 6.261-23.027 16.312 0 9.871 8.742 16.084 22.595 16.084 14.714 0 23.273-6.122 23.273-16.586.001-9.412-9.235-15.81-22.841-15.81zm-.322 28.422c-7.839 0-12.345-4.524-12.345-12.338 0-7.63 4.702-12.154 12.737-12.154 7.708 0 12.214 4.616 12.214 12.475 0 7.676-4.572 12.017-12.606 12.017z"></path> </g> </g></svg>'
        }, {
            name: "amazon",
            logo: '<svg viewBox="163.5 163.50000000000003 285 285" xmlns="http://www.w3.org/2000/svg" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g clip-rule="evenodd" fill-rule="evenodd"> <path d="m340.3 330.2c-16.5 12.2-40.5 18.7-61.2 18.7-29 0-55-10.7-74.8-28.5-1.5-1.4-.2-3.3 1.7-2.2 21.3 12.4 47.6 19.8 74.8 19.8 18.3 0 38.5-3.8 57.1-11.7 2.8-1.1 5.1 1.9 2.4 3.9z" fill="#f90"></path> <path d="m347.2 322.3c-2.1-2.7-14-1.3-19.3-.6-1.6.2-1.9-1.2-.4-2.2 9.5-6.7 25-4.7 26.8-2.5s-.5 17.8-9.4 25.2c-1.4 1.1-2.7.5-2.1-1 2-5 6.5-16.1 4.4-18.9z" fill="#f90"></path> <path d="m328.2 272.5v-6.5c0-1 .7-1.6 1.6-1.6h29c.9 0 1.7.7 1.7 1.6v5.5c0 .9-.8 2.1-2.2 4.1l-15 21.4c5.6-.1 11.5.7 16.5 3.5 1.1.6 1.4 1.6 1.5 2.5v6.9c0 1-1 2.1-2.1 1.5-8.9-4.7-20.8-5.2-30.6.1-1 .5-2.1-.5-2.1-1.5v-6.6c0-1 0-2.8 1.1-4.4l17.4-24.9h-15.1c-.9 0-1.7-.7-1.7-1.6zm-105.7 40.3h-8.8c-.8-.1-1.5-.7-1.6-1.5v-45.2c0-.9.8-1.6 1.7-1.6h8.2c.9 0 1.5.7 1.6 1.5v5.9h.2c2.1-5.7 6.2-8.4 11.6-8.4 5.5 0 9 2.7 11.4 8.4 2.1-5.7 7-8.4 12.2-8.4 3.7 0 7.7 1.5 10.2 5 2.8 3.8 2.2 9.3 2.2 14.2v28.6c0 .9-.8 1.6-1.7 1.6h-8.7c-.9-.1-1.6-.8-1.6-1.6v-24c0-1.9.2-6.7-.2-8.5-.7-3-2.6-3.9-5.2-3.9-2.1 0-4.4 1.4-5.3 3.7s-.8 6.1-.8 8.7v24c0 .9-.8 1.6-1.7 1.6h-8.8c-.9-.1-1.6-.8-1.6-1.6v-24c0-5 .8-12.5-5.4-12.5-6.3 0-6.1 7.2-6.1 12.5v24c-.1.8-.8 1.5-1.8 1.5zm163-49.3c13.1 0 20.2 11.2 20.2 25.5 0 13.8-7.8 24.8-20.2 24.8-12.8 0-19.8-11.2-19.8-25.2-.1-14.1 7-25.1 19.8-25.1zm0 9.3c-6.5 0-6.9 8.9-6.9 14.4s-.1 17.3 6.8 17.3c6.8 0 7.2-9.5 7.2-15.3 0-3.8-.2-8.4-1.3-12-1-3.2-3-4.4-5.8-4.4zm37.1 40h-8.8c-.9-.1-1.6-.8-1.6-1.6v-45.3c.1-.8.8-1.5 1.7-1.5h8.2c.8 0 1.4.6 1.6 1.3v6.9h.2c2.5-6.2 5.9-9.1 12-9.1 3.9 0 7.8 1.4 10.3 5.3 2.3 3.6 2.3 9.7 2.3 14.1v28.5c-.1.8-.8 1.4-1.7 1.4h-8.8c-.8-.1-1.5-.7-1.6-1.4v-24.6c0-5 .6-12.2-5.5-12.2-2.1 0-4.1 1.4-5.1 3.6-1.2 2.8-1.4 5.5-1.4 8.6v24.4c-.1.9-.9 1.6-1.8 1.6zm-117.5-21.6c0 3.4.1 6.3-1.6 9.4-1.4 2.5-3.6 4-6.1 4-3.4 0-5.4-2.6-5.4-6.4 0-7.5 6.7-8.9 13.1-8.9zm8.9 21.5c-.6.5-1.4.6-2.1.2-2.9-2.4-3.5-3.6-5.1-5.9-4.8 4.9-8.3 6.4-14.5 6.4-7.4 0-13.2-4.6-13.2-13.7 0-7.2 3.9-12 9.4-14.4 4.8-2.1 11.5-2.5 16.6-3.1v-1.1c0-2.1.2-4.6-1.1-6.4-1.1-1.6-3.1-2.3-4.9-2.3-3.4 0-6.4 1.7-7.1 5.3-.2.8-.7 1.6-1.5 1.6l-8.5-.9c-.7-.2-1.5-.7-1.3-1.8 2-10.4 11.3-13.5 19.7-13.5 4.3 0 9.9 1.1 13.3 4.4 4.3 4 3.9 9.4 3.9 15.2v13.7c0 4.1 1.7 5.9 3.3 8.2.6.8.7 1.8 0 2.3-1.9 1.5-5.1 4.3-6.9 5.8zm-124.4-21.5c0 3.4.1 6.3-1.6 9.4-1.4 2.5-3.6 4-6.1 4-3.4 0-5.4-2.6-5.4-6.4 0-7.5 6.7-8.9 13.1-8.9zm8.8 21.5c-.6.5-1.4.6-2.1.2-2.9-2.4-3.5-3.6-5.1-5.9-4.8 4.9-8.3 6.4-14.5 6.4-7.4 0-13.2-4.6-13.2-13.7 0-7.2 3.9-12 9.4-14.4 4.8-2.1 11.5-2.5 16.6-3.1v-1.1c0-2.1.2-4.6-1.1-6.4-1.1-1.6-3.1-2.3-4.9-2.3-3.4 0-6.4 1.7-7.1 5.3-.2.8-.7 1.6-1.5 1.6l-8.5-.9c-.7-.2-1.5-.7-1.3-1.8 2-10.4 11.3-13.5 19.7-13.5 4.3 0 9.9 1.1 13.3 4.4 4.3 4 3.9 9.4 3.9 15.2v13.7c0 4.1 1.7 5.9 3.3 8.2.6.8.7 1.8 0 2.3-1.9 1.5-5.1 4.3-6.9 5.8z"></path> </g> </g></svg>'
        }, {
            name: "intel",
            logo: '<svg fill="#ffffff" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.427 14.401v5.167h-1.646v-6.495h3.396c1.443 0 1.932 1.021 1.932 1.943v4.552h-1.641v-4.542c0-0.391-0.198-0.625-0.682-0.625zM20.615 14.323c-0.568 0-1 0.286-1.182 0.682-0.104 0.219-0.156 0.458-0.156 0.703h2.531c-0.031-0.703-0.354-1.385-1.193-1.385zM19.276 16.828c0 0.839 0.521 1.464 1.458 1.464 0.724 0 1.083-0.203 1.505-0.625l1.016 0.974c-0.646 0.641-1.333 1.031-2.536 1.031-1.573 0-3.078-0.859-3.078-3.359 0-2.141 1.313-3.349 3.042-3.349 1.755 0 2.766 1.417 2.766 3.271v0.589h-4.172zM16.25 19.557c-1.339 0-1.906-0.932-1.906-1.854v-6.401h1.641v1.771h1.234v1.328h-1.234v3.198c0 0.38 0.177 0.589 0.568 0.589h0.667v1.37zM6.318 12.177h-1.656v-1.578h1.656zM6.323 19.635c-1.24-0.12-1.661-0.87-1.661-1.74v-4.823h1.656v6.568zM26.063 19.495c-1.24-0.12-1.656-0.87-1.656-1.734v-7.38h1.656v9.12zM31.859 11.448c-1.5-7.328-15.724-7.792-24.885-2.214v0.62c9.151-4.708 22.141-4.677 23.323 2.063 0.391 2.234-0.865 4.557-3.109 5.896v1.75c2.703-0.99 5.474-4.198 4.672-8.115zM15.198 24.26c-6.323 0.583-12.917-0.339-13.839-5.276-0.448-2.438 0.667-5.021 2.13-6.625v-0.854c-2.646 2.323-4.083 5.266-3.255 8.74 1.057 4.458 6.714 6.984 15.344 6.146 3.417-0.333 7.891-1.432 10.995-3.141v-2.422c-2.818 1.682-7.49 3.073-11.375 3.432zM27.979 10.865c0-0.078-0.052-0.104-0.156-0.104h-0.104v0.229h0.104c0.104 0 0.156-0.031 0.156-0.109zM28.141 11.432h-0.125c-0.010 0-0.021-0.005-0.026-0.016l-0.167-0.286c-0.005-0.005-0.016-0.010-0.026-0.010h-0.073v0.281c0 0.016-0.016 0.031-0.031 0.031h-0.109c-0.016 0-0.031-0.016-0.031-0.031v-0.714c0-0.036 0.021-0.057 0.052-0.063 0.068-0.005 0.135-0.005 0.203-0.005 0.203 0 0.328 0.057 0.328 0.25v0.010c0 0.12-0.063 0.182-0.151 0.214l0.172 0.292c0 0.005 0.005 0.016 0.005 0.021 0.005 0.010-0.005 0.026-0.021 0.026zM27.849 10.484c-0.302 0-0.547 0.245-0.547 0.547 0.005 0.302 0.25 0.547 0.552 0.547 0.297 0 0.542-0.245 0.542-0.542 0-0.302-0.245-0.552-0.547-0.552zM27.849 11.693c-0.365 0-0.661-0.292-0.661-0.656s0.297-0.661 0.661-0.661c0.359 0 0.661 0.297 0.661 0.661s-0.302 0.656-0.661 0.656z"></path> </g></svg>'
        }, {
            name: "vercel",
            logo: '<svg viewBox="0 -198 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M255.420487,28.975665 C235.427278,28.975665 221.011885,42.0147142 221.011885,61.5732881 C221.011885,81.1318619 237.238257,94.1709111 257.231466,94.1709111 C269.310696,94.1709111 279.959253,89.3899264 286.551217,81.3310696 L272.697227,73.3265422 C269.039049,77.3288059 263.479344,79.6649689 257.231466,79.6649689 C248.556876,79.6649689 241.186191,75.1375212 238.451613,67.893605 L289.195246,67.893605 C289.593662,65.8653084 289.829089,63.7645727 289.829089,61.5551783 C289.829089,42.0147142 275.413696,28.975665 255.420487,28.975665 Z M238.288625,55.2348613 C240.552349,48.0090549 246.745897,43.4634975 255.402377,43.4634975 C264.076967,43.4634975 270.270515,48.0090549 272.516129,55.2348613 L238.288625,55.2348613 L238.288625,55.2348613 Z M450.426712,28.975665 C430.433503,28.975665 416.01811,42.0147142 416.01811,61.5732881 C416.01811,81.1318619 432.244482,94.1709111 452.237691,94.1709111 C464.316921,94.1709111 474.965478,89.3899264 481.557442,81.3310696 L467.703452,73.3265422 C464.045274,77.3288059 458.485569,79.6649689 452.237691,79.6649689 C443.563101,79.6649689 436.192417,75.1375212 433.457838,67.893605 L484.201471,67.893605 C484.599887,65.8653084 484.835314,63.7645727 484.835314,61.5551783 C484.835314,42.0147142 470.419921,28.975665 450.426712,28.975665 L450.426712,28.975665 Z M433.31296,55.2348613 C435.576684,48.0090549 441.770232,43.4634975 450.426712,43.4634975 C459.101302,43.4634975 465.29485,48.0090549 467.540464,55.2348613 L433.31296,55.2348613 Z M362.630447,61.5732881 C362.630447,72.4391624 369.729485,79.6830787 380.740238,79.6830787 C388.201471,79.6830787 393.797397,76.2965478 396.676853,70.7730617 L410.585173,78.7956989 C404.826259,88.3938879 394.032824,94.1709111 380.740238,94.1709111 C360.728919,94.1709111 346.331636,81.1318619 346.331636,61.5732881 C346.331636,42.0147142 360.747029,28.975665 380.740238,28.975665 C394.032824,28.975665 404.808149,34.7526882 410.585173,44.3508772 L396.676853,52.3735144 C393.797397,46.8500283 388.201471,43.4634975 380.740238,43.4634975 C369.747595,43.4634975 362.630447,50.7074137 362.630447,61.5732881 Z M512,9.0548953 L512,92.3599321 L495.701188,92.3599321 L495.701188,9.0548953 L512,9.0548953 Z M66.9156763,-1.42108547e-14 L133.831353,115.90266 L0,115.90266 L66.9156763,-1.42108547e-14 Z M234.213922,9.0548953 L184.031692,95.9818902 L133.849462,9.0548953 L152.665535,9.0548953 L184.031692,63.3842671 L215.397849,9.0548953 L234.213922,9.0548953 Z M340.898698,30.786644 L340.898698,48.3350311 C339.087719,47.8098472 337.168081,47.4476514 335.103565,47.4476514 C324.581777,47.4476514 316.993775,54.6915676 316.993775,65.557442 L316.993775,92.3599321 L300.694963,92.3599321 L300.694963,30.786644 L316.993775,30.786644 L316.993775,47.4476514 C316.993775,38.2478778 327.696661,30.786644 340.898698,30.786644 Z" fill="#ffffff" fill-rule="nonzero"> </path> </g> </g></svg>'
        }, {
            name: "lambo",
            logo: '<svg viewBox="0 -198 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M255.420487,28.975665 C235.427278,28.975665 221.011885,42.0147142 221.011885,61.5732881 C221.011885,81.1318619 237.238257,94.1709111 257.231466,94.1709111 C269.310696,94.1709111 279.959253,89.3899264 286.551217,81.3310696 L272.697227,73.3265422 C269.039049,77.3288059 263.479344,79.6649689 257.231466,79.6649689 C248.556876,79.6649689 241.186191,75.1375212 238.451613,67.893605 L289.195246,67.893605 C289.593662,65.8653084 289.829089,63.7645727 289.829089,61.5551783 C289.829089,42.0147142 275.413696,28.975665 255.420487,28.975665 Z M238.288625,55.2348613 C240.552349,48.0090549 246.745897,43.4634975 255.402377,43.4634975 C264.076967,43.4634975 270.270515,48.0090549 272.516129,55.2348613 L238.288625,55.2348613 L238.288625,55.2348613 Z M450.426712,28.975665 C430.433503,28.975665 416.01811,42.0147142 416.01811,61.5732881 C416.01811,81.1318619 432.244482,94.1709111 452.237691,94.1709111 C464.316921,94.1709111 474.965478,89.3899264 481.557442,81.3310696 L467.703452,73.3265422 C464.045274,77.3288059 458.485569,79.6649689 452.237691,79.6649689 C443.563101,79.6649689 436.192417,75.1375212 433.457838,67.893605 L484.201471,67.893605 C484.599887,65.8653084 484.835314,63.7645727 484.835314,61.5551783 C484.835314,42.0147142 470.419921,28.975665 450.426712,28.975665 L450.426712,28.975665 Z M433.31296,55.2348613 C435.576684,48.0090549 441.770232,43.4634975 450.426712,43.4634975 C459.101302,43.4634975 465.29485,48.0090549 467.540464,55.2348613 L433.31296,55.2348613 Z M362.630447,61.5732881 C362.630447,72.4391624 369.729485,79.6830787 380.740238,79.6830787 C388.201471,79.6830787 393.797397,76.2965478 396.676853,70.7730617 L410.585173,78.7956989 C404.826259,88.3938879 394.032824,94.1709111 380.740238,94.1709111 C360.728919,94.1709111 346.331636,81.1318619 346.331636,61.5732881 C346.331636,42.0147142 360.747029,28.975665 380.740238,28.975665 C394.032824,28.975665 404.808149,34.7526882 410.585173,44.3508772 L396.676853,52.3735144 C393.797397,46.8500283 388.201471,43.4634975 380.740238,43.4634975 C369.747595,43.4634975 362.630447,50.7074137 362.630447,61.5732881 Z M512,9.0548953 L512,92.3599321 L495.701188,92.3599321 L495.701188,9.0548953 L512,9.0548953 Z M66.9156763,-1.42108547e-14 L133.831353,115.90266 L0,115.90266 L66.9156763,-1.42108547e-14 Z M234.213922,9.0548953 L184.031692,95.9818902 L133.849462,9.0548953 L152.665535,9.0548953 L184.031692,63.3842671 L215.397849,9.0548953 L234.213922,9.0548953 Z M340.898698,30.786644 L340.898698,48.3350311 C339.087719,47.8098472 337.168081,47.4476514 335.103565,47.4476514 C324.581777,47.4476514 316.993775,54.6915676 316.993775,65.557442 L316.993775,92.3599321 L300.694963,92.3599321 L300.694963,30.786644 L316.993775,30.786644 L316.993775,47.4476514 C316.993775,38.2478778 327.696661,30.786644 340.898698,30.786644 Z" fill="#ffffff" fill-rule="nonzero"> </path> </g> </g></svg>'
        }, {
            name: "sony",
            logo: '<svg viewBox="0 0 192.744 192.744" xmlns="http://www.w3.org/2000/svg" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill-rule="evenodd" clip-rule="evenodd"> <path fill="#ffffff" d="M0 0h192.744v192.744H0V0z"></path> <path d="M187.035 106.442a2.852 2.852 0 1 0 0 5.703 2.847 2.847 0 0 0 2.844-2.858 2.844 2.844 0 0 0-2.844-2.845zm0 5.36a2.505 2.505 0 0 1-2.508-2.515 2.502 2.502 0 0 1 2.508-2.501 2.5 2.5 0 0 1 2.5 2.501 2.503 2.503 0 0 1-2.5 2.515z"></path> <path d="M188.498 108.54c0-.269-.119-.552-.357-.687-.24-.142-.508-.156-.777-.156h-1.389v3.187h.389v-1.47h.717l.91 1.47h.463l-.963-1.47c.568-.016 1.007-.247 1.007-.874zm-1.537.567h-.598v-1.127h.91c.396 0 .83.06.83.553.001.649-.695.574-1.142.574zM170.32 93.132l5.83-6.225c.338-.457.506-.777.506-1.051 0-.457-.393-.64-1.629-.64h-1.471v-3.93h15.922v3.93h-2.092c-2.416 0-2.865.365-6.236 4.615l-9.223 9.96v6.078c0 1.555.785 2.102 3.033 2.102h3.482v3.792h-22.301v-3.792h3.482c2.246 0 3.033-.547 3.033-2.102v-6.078l-10.863-12.017c-1.795-2.101-1.547-2.558-6.545-2.558v-3.93h20.168v3.93h-1.436c-1.461 0-2.08.274-2.08.822 0 .458.449.823.73 1.188l5.496 5.99c.653.679 1.45.767 2.194-.084zM35.003 81.285h4.865v10.966h-4.493c-.398-2.192-1.77-3.045-3.021-4.195-2.257-2.074-7.145-3.801-11.256-3.801-5.306 0-9.784 1.646-9.784 4.066 0 6.718 30.345 1.372 30.345 14.074 0 6.625-6.5 10.326-18.173 10.326-4.041 0-10.156-1.254-13.764-3.17-1.131-.653-1.611.618-1.823 2.211H2.911V100.43h4.512c.995 2.879 2.366 3.472 3.627 4.615 2.188 2.011 7.396 3.474 12.172 3.427 7.201-.071 9.677-1.645 9.677-3.93 0-2.284-2.449-2.833-10.34-4.066l-6.7-1.097c-7.561-1.143-13.066-2.833-13.066-8.864 0-6.26 6.964-10.19 17.975-10.19 4.64 0 8.522.62 12.248 2.726 1.032.671 2 .751 1.987-1.766zM129.947 99.645l.096-12.188c0-1.599-.832-2.147-3.209-2.147h-2.793v-3.792h17.77v3.792h-2.316c-2.379 0-3.211.549-3.211 2.147v24.537l-6.955-.055-22.524-21.329v15.49c0 1.554.832 2.147 3.209 2.147h3.092v3.747H94.651v-3.747h3.058c2.377 0 3.209-.594 3.209-2.147V87.457c0-1.599-.832-2.147-3.209-2.147h-3.058v-3.792h15.956l19.34 18.127zM70.424 80.095c-14.162 0-23.027 6.261-23.027 16.312 0 9.871 8.742 16.084 22.595 16.084 14.714 0 23.273-6.122 23.273-16.586.001-9.412-9.235-15.81-22.841-15.81zm-.322 28.422c-7.839 0-12.345-4.524-12.345-12.338 0-7.63 4.702-12.154 12.737-12.154 7.708 0 12.214 4.616 12.214 12.475 0 7.676-4.572 12.017-12.606 12.017z"></path> </g> </g></svg>'
        }, {
            name: "amazon",
            logo: '<svg viewBox="163.5 163.50000000000003 285 285" xmlns="http://www.w3.org/2000/svg" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g clip-rule="evenodd" fill-rule="evenodd"> <path d="m340.3 330.2c-16.5 12.2-40.5 18.7-61.2 18.7-29 0-55-10.7-74.8-28.5-1.5-1.4-.2-3.3 1.7-2.2 21.3 12.4 47.6 19.8 74.8 19.8 18.3 0 38.5-3.8 57.1-11.7 2.8-1.1 5.1 1.9 2.4 3.9z" fill="#f90"></path> <path d="m347.2 322.3c-2.1-2.7-14-1.3-19.3-.6-1.6.2-1.9-1.2-.4-2.2 9.5-6.7 25-4.7 26.8-2.5s-.5 17.8-9.4 25.2c-1.4 1.1-2.7.5-2.1-1 2-5 6.5-16.1 4.4-18.9z" fill="#f90"></path> <path d="m328.2 272.5v-6.5c0-1 .7-1.6 1.6-1.6h29c.9 0 1.7.7 1.7 1.6v5.5c0 .9-.8 2.1-2.2 4.1l-15 21.4c5.6-.1 11.5.7 16.5 3.5 1.1.6 1.4 1.6 1.5 2.5v6.9c0 1-1 2.1-2.1 1.5-8.9-4.7-20.8-5.2-30.6.1-1 .5-2.1-.5-2.1-1.5v-6.6c0-1 0-2.8 1.1-4.4l17.4-24.9h-15.1c-.9 0-1.7-.7-1.7-1.6zm-105.7 40.3h-8.8c-.8-.1-1.5-.7-1.6-1.5v-45.2c0-.9.8-1.6 1.7-1.6h8.2c.9 0 1.5.7 1.6 1.5v5.9h.2c2.1-5.7 6.2-8.4 11.6-8.4 5.5 0 9 2.7 11.4 8.4 2.1-5.7 7-8.4 12.2-8.4 3.7 0 7.7 1.5 10.2 5 2.8 3.8 2.2 9.3 2.2 14.2v28.6c0 .9-.8 1.6-1.7 1.6h-8.7c-.9-.1-1.6-.8-1.6-1.6v-24c0-1.9.2-6.7-.2-8.5-.7-3-2.6-3.9-5.2-3.9-2.1 0-4.4 1.4-5.3 3.7s-.8 6.1-.8 8.7v24c0 .9-.8 1.6-1.7 1.6h-8.8c-.9-.1-1.6-.8-1.6-1.6v-24c0-5 .8-12.5-5.4-12.5-6.3 0-6.1 7.2-6.1 12.5v24c-.1.8-.8 1.5-1.8 1.5zm163-49.3c13.1 0 20.2 11.2 20.2 25.5 0 13.8-7.8 24.8-20.2 24.8-12.8 0-19.8-11.2-19.8-25.2-.1-14.1 7-25.1 19.8-25.1zm0 9.3c-6.5 0-6.9 8.9-6.9 14.4s-.1 17.3 6.8 17.3c6.8 0 7.2-9.5 7.2-15.3 0-3.8-.2-8.4-1.3-12-1-3.2-3-4.4-5.8-4.4zm37.1 40h-8.8c-.9-.1-1.6-.8-1.6-1.6v-45.3c.1-.8.8-1.5 1.7-1.5h8.2c.8 0 1.4.6 1.6 1.3v6.9h.2c2.5-6.2 5.9-9.1 12-9.1 3.9 0 7.8 1.4 10.3 5.3 2.3 3.6 2.3 9.7 2.3 14.1v28.5c-.1.8-.8 1.4-1.7 1.4h-8.8c-.8-.1-1.5-.7-1.6-1.4v-24.6c0-5 .6-12.2-5.5-12.2-2.1 0-4.1 1.4-5.1 3.6-1.2 2.8-1.4 5.5-1.4 8.6v24.4c-.1.9-.9 1.6-1.8 1.6zm-117.5-21.6c0 3.4.1 6.3-1.6 9.4-1.4 2.5-3.6 4-6.1 4-3.4 0-5.4-2.6-5.4-6.4 0-7.5 6.7-8.9 13.1-8.9zm8.9 21.5c-.6.5-1.4.6-2.1.2-2.9-2.4-3.5-3.6-5.1-5.9-4.8 4.9-8.3 6.4-14.5 6.4-7.4 0-13.2-4.6-13.2-13.7 0-7.2 3.9-12 9.4-14.4 4.8-2.1 11.5-2.5 16.6-3.1v-1.1c0-2.1.2-4.6-1.1-6.4-1.1-1.6-3.1-2.3-4.9-2.3-3.4 0-6.4 1.7-7.1 5.3-.2.8-.7 1.6-1.5 1.6l-8.5-.9c-.7-.2-1.5-.7-1.3-1.8 2-10.4 11.3-13.5 19.7-13.5 4.3 0 9.9 1.1 13.3 4.4 4.3 4 3.9 9.4 3.9 15.2v13.7c0 4.1 1.7 5.9 3.3 8.2.6.8.7 1.8 0 2.3-1.9 1.5-5.1 4.3-6.9 5.8zm-124.4-21.5c0 3.4.1 6.3-1.6 9.4-1.4 2.5-3.6 4-6.1 4-3.4 0-5.4-2.6-5.4-6.4 0-7.5 6.7-8.9 13.1-8.9zm8.8 21.5c-.6.5-1.4.6-2.1.2-2.9-2.4-3.5-3.6-5.1-5.9-4.8 4.9-8.3 6.4-14.5 6.4-7.4 0-13.2-4.6-13.2-13.7 0-7.2 3.9-12 9.4-14.4 4.8-2.1 11.5-2.5 16.6-3.1v-1.1c0-2.1.2-4.6-1.1-6.4-1.1-1.6-3.1-2.3-4.9-2.3-3.4 0-6.4 1.7-7.1 5.3-.2.8-.7 1.6-1.5 1.6l-8.5-.9c-.7-.2-1.5-.7-1.3-1.8 2-10.4 11.3-13.5 19.7-13.5 4.3 0 9.9 1.1 13.3 4.4 4.3 4 3.9 9.4 3.9 15.2v13.7c0 4.1 1.7 5.9 3.3 8.2.6.8.7 1.8 0 2.3-1.9 1.5-5.1 4.3-6.9 5.8z"></path> </g> </g></svg>'
        }, {
            name: "intel",
            logo: '<svg fill="#ffffff" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.427 14.401v5.167h-1.646v-6.495h3.396c1.443 0 1.932 1.021 1.932 1.943v4.552h-1.641v-4.542c0-0.391-0.198-0.625-0.682-0.625zM20.615 14.323c-0.568 0-1 0.286-1.182 0.682-0.104 0.219-0.156 0.458-0.156 0.703h2.531c-0.031-0.703-0.354-1.385-1.193-1.385zM19.276 16.828c0 0.839 0.521 1.464 1.458 1.464 0.724 0 1.083-0.203 1.505-0.625l1.016 0.974c-0.646 0.641-1.333 1.031-2.536 1.031-1.573 0-3.078-0.859-3.078-3.359 0-2.141 1.313-3.349 3.042-3.349 1.755 0 2.766 1.417 2.766 3.271v0.589h-4.172zM16.25 19.557c-1.339 0-1.906-0.932-1.906-1.854v-6.401h1.641v1.771h1.234v1.328h-1.234v3.198c0 0.38 0.177 0.589 0.568 0.589h0.667v1.37zM6.318 12.177h-1.656v-1.578h1.656zM6.323 19.635c-1.24-0.12-1.661-0.87-1.661-1.74v-4.823h1.656v6.568zM26.063 19.495c-1.24-0.12-1.656-0.87-1.656-1.734v-7.38h1.656v9.12zM31.859 11.448c-1.5-7.328-15.724-7.792-24.885-2.214v0.62c9.151-4.708 22.141-4.677 23.323 2.063 0.391 2.234-0.865 4.557-3.109 5.896v1.75c2.703-0.99 5.474-4.198 4.672-8.115zM15.198 24.26c-6.323 0.583-12.917-0.339-13.839-5.276-0.448-2.438 0.667-5.021 2.13-6.625v-0.854c-2.646 2.323-4.083 5.266-3.255 8.74 1.057 4.458 6.714 6.984 15.344 6.146 3.417-0.333 7.891-1.432 10.995-3.141v-2.422c-2.818 1.682-7.49 3.073-11.375 3.432zM27.979 10.865c0-0.078-0.052-0.104-0.156-0.104h-0.104v0.229h0.104c0.104 0 0.156-0.031 0.156-0.109zM28.141 11.432h-0.125c-0.010 0-0.021-0.005-0.026-0.016l-0.167-0.286c-0.005-0.005-0.016-0.010-0.026-0.010h-0.073v0.281c0 0.016-0.016 0.031-0.031 0.031h-0.109c-0.016 0-0.031-0.016-0.031-0.031v-0.714c0-0.036 0.021-0.057 0.052-0.063 0.068-0.005 0.135-0.005 0.203-0.005 0.203 0 0.328 0.057 0.328 0.25v0.010c0 0.12-0.063 0.182-0.151 0.214l0.172 0.292c0 0.005 0.005 0.016 0.005 0.021 0.005 0.010-0.005 0.026-0.021 0.026zM27.849 10.484c-0.302 0-0.547 0.245-0.547 0.547 0.005 0.302 0.25 0.547 0.552 0.547 0.297 0 0.542-0.245 0.542-0.542 0-0.302-0.245-0.552-0.547-0.552zM27.849 11.693c-0.365 0-0.661-0.292-0.661-0.656s0.297-0.661 0.661-0.661c0.359 0 0.661 0.297 0.661 0.661s-0.302 0.656-0.661 0.656z"></path> </g></svg>'
        }, {
            name: "vercel",
            logo: '<svg viewBox="0 -198 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M255.420487,28.975665 C235.427278,28.975665 221.011885,42.0147142 221.011885,61.5732881 C221.011885,81.1318619 237.238257,94.1709111 257.231466,94.1709111 C269.310696,94.1709111 279.959253,89.3899264 286.551217,81.3310696 L272.697227,73.3265422 C269.039049,77.3288059 263.479344,79.6649689 257.231466,79.6649689 C248.556876,79.6649689 241.186191,75.1375212 238.451613,67.893605 L289.195246,67.893605 C289.593662,65.8653084 289.829089,63.7645727 289.829089,61.5551783 C289.829089,42.0147142 275.413696,28.975665 255.420487,28.975665 Z M238.288625,55.2348613 C240.552349,48.0090549 246.745897,43.4634975 255.402377,43.4634975 C264.076967,43.4634975 270.270515,48.0090549 272.516129,55.2348613 L238.288625,55.2348613 L238.288625,55.2348613 Z M450.426712,28.975665 C430.433503,28.975665 416.01811,42.0147142 416.01811,61.5732881 C416.01811,81.1318619 432.244482,94.1709111 452.237691,94.1709111 C464.316921,94.1709111 474.965478,89.3899264 481.557442,81.3310696 L467.703452,73.3265422 C464.045274,77.3288059 458.485569,79.6649689 452.237691,79.6649689 C443.563101,79.6649689 436.192417,75.1375212 433.457838,67.893605 L484.201471,67.893605 C484.599887,65.8653084 484.835314,63.7645727 484.835314,61.5551783 C484.835314,42.0147142 470.419921,28.975665 450.426712,28.975665 L450.426712,28.975665 Z M433.31296,55.2348613 C435.576684,48.0090549 441.770232,43.4634975 450.426712,43.4634975 C459.101302,43.4634975 465.29485,48.0090549 467.540464,55.2348613 L433.31296,55.2348613 Z M362.630447,61.5732881 C362.630447,72.4391624 369.729485,79.6830787 380.740238,79.6830787 C388.201471,79.6830787 393.797397,76.2965478 396.676853,70.7730617 L410.585173,78.7956989 C404.826259,88.3938879 394.032824,94.1709111 380.740238,94.1709111 C360.728919,94.1709111 346.331636,81.1318619 346.331636,61.5732881 C346.331636,42.0147142 360.747029,28.975665 380.740238,28.975665 C394.032824,28.975665 404.808149,34.7526882 410.585173,44.3508772 L396.676853,52.3735144 C393.797397,46.8500283 388.201471,43.4634975 380.740238,43.4634975 C369.747595,43.4634975 362.630447,50.7074137 362.630447,61.5732881 Z M512,9.0548953 L512,92.3599321 L495.701188,92.3599321 L495.701188,9.0548953 L512,9.0548953 Z M66.9156763,-1.42108547e-14 L133.831353,115.90266 L0,115.90266 L66.9156763,-1.42108547e-14 Z M234.213922,9.0548953 L184.031692,95.9818902 L133.849462,9.0548953 L152.665535,9.0548953 L184.031692,63.3842671 L215.397849,9.0548953 L234.213922,9.0548953 Z M340.898698,30.786644 L340.898698,48.3350311 C339.087719,47.8098472 337.168081,47.4476514 335.103565,47.4476514 C324.581777,47.4476514 316.993775,54.6915676 316.993775,65.557442 L316.993775,92.3599321 L300.694963,92.3599321 L300.694963,30.786644 L316.993775,30.786644 L316.993775,47.4476514 C316.993775,38.2478778 327.696661,30.786644 340.898698,30.786644 Z" fill="#ffffff" fill-rule="nonzero"> </path> </g> </g></svg>'
        }, {
            name: "lambo",
            logo: '<svg viewBox="0 -198 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M255.420487,28.975665 C235.427278,28.975665 221.011885,42.0147142 221.011885,61.5732881 C221.011885,81.1318619 237.238257,94.1709111 257.231466,94.1709111 C269.310696,94.1709111 279.959253,89.3899264 286.551217,81.3310696 L272.697227,73.3265422 C269.039049,77.3288059 263.479344,79.6649689 257.231466,79.6649689 C248.556876,79.6649689 241.186191,75.1375212 238.451613,67.893605 L289.195246,67.893605 C289.593662,65.8653084 289.829089,63.7645727 289.829089,61.5551783 C289.829089,42.0147142 275.413696,28.975665 255.420487,28.975665 Z M238.288625,55.2348613 C240.552349,48.0090549 246.745897,43.4634975 255.402377,43.4634975 C264.076967,43.4634975 270.270515,48.0090549 272.516129,55.2348613 L238.288625,55.2348613 L238.288625,55.2348613 Z M450.426712,28.975665 C430.433503,28.975665 416.01811,42.0147142 416.01811,61.5732881 C416.01811,81.1318619 432.244482,94.1709111 452.237691,94.1709111 C464.316921,94.1709111 474.965478,89.3899264 481.557442,81.3310696 L467.703452,73.3265422 C464.045274,77.3288059 458.485569,79.6649689 452.237691,79.6649689 C443.563101,79.6649689 436.192417,75.1375212 433.457838,67.893605 L484.201471,67.893605 C484.599887,65.8653084 484.835314,63.7645727 484.835314,61.5551783 C484.835314,42.0147142 470.419921,28.975665 450.426712,28.975665 L450.426712,28.975665 Z M433.31296,55.2348613 C435.576684,48.0090549 441.770232,43.4634975 450.426712,43.4634975 C459.101302,43.4634975 465.29485,48.0090549 467.540464,55.2348613 L433.31296,55.2348613 Z M362.630447,61.5732881 C362.630447,72.4391624 369.729485,79.6830787 380.740238,79.6830787 C388.201471,79.6830787 393.797397,76.2965478 396.676853,70.7730617 L410.585173,78.7956989 C404.826259,88.3938879 394.032824,94.1709111 380.740238,94.1709111 C360.728919,94.1709111 346.331636,81.1318619 346.331636,61.5732881 C346.331636,42.0147142 360.747029,28.975665 380.740238,28.975665 C394.032824,28.975665 404.808149,34.7526882 410.585173,44.3508772 L396.676853,52.3735144 C393.797397,46.8500283 388.201471,43.4634975 380.740238,43.4634975 C369.747595,43.4634975 362.630447,50.7074137 362.630447,61.5732881 Z M512,9.0548953 L512,92.3599321 L495.701188,92.3599321 L495.701188,9.0548953 L512,9.0548953 Z M66.9156763,-1.42108547e-14 L133.831353,115.90266 L0,115.90266 L66.9156763,-1.42108547e-14 Z M234.213922,9.0548953 L184.031692,95.9818902 L133.849462,9.0548953 L152.665535,9.0548953 L184.031692,63.3842671 L215.397849,9.0548953 L234.213922,9.0548953 Z M340.898698,30.786644 L340.898698,48.3350311 C339.087719,47.8098472 337.168081,47.4476514 335.103565,47.4476514 C324.581777,47.4476514 316.993775,54.6915676 316.993775,65.557442 L316.993775,92.3599321 L300.694963,92.3599321 L300.694963,30.786644 L316.993775,30.786644 L316.993775,47.4476514 C316.993775,38.2478778 327.696661,30.786644 340.898698,30.786644 Z" fill="#ffffff" fill-rule="nonzero"> </path> </g> </g></svg>'
        }]
          , V = e => {
            let {svgString: t} = e
              , a = t.replace('<path fill="#ffffff" d="M0 0h192.744v192.744H0V0z"></path>', "");
            return (0,
            s.jsx)("div", {
                dangerouslySetInnerHTML: {
                    __html: a
                }
            })
        }
          , D = () => (0,
        s.jsx)("div", {
            className: "relative w-full overflow-hidden py-8",
            children: (0,
            s.jsx)(r.P.div, {
                className: "flex w-max items-center gap-16",
                animate: {
                    x: ["0%", "-50%"]
                },
                transition: {
                    ease: "linear",
                    duration: 10,
                    repeat: 1 / 0
                },
                children: [...O, ...O].map( (e, t) => (0,
                s.jsx)("div", {
                    className: "flex-shrink-0 w-32 h-full flex items-center justify-center",
                    children: (0,
                    s.jsx)("div", {
                        className: "w-24 h-full opacity-50",
                        children: (0,
                        s.jsx)(V, {
                            svgString: e.logo
                        })
                    })
                }, t))
            })
        });
        function T() {
            let[e,t] = (0,
            i.useState)(!1)
              , [a,l] = (0,
            i.useState)(!1)
              , [n,o] = (0,
            i.useState)(!1)
              , [c,d] = (0,
            i.useState)(!1)
              , [x,p] = (0,
            i.useState)(!1)
              , [h,m] = (0,
            i.useState)(!1);
            return (0,
            s.jsxs)("div", {
                className: "flex w-[98%] flex-row flex-wrap mb-20 items-center mt-16 gap-9 justify-center",
                children: [(0,
                s.jsxs)("div", {
                    className: "relative flex flex-col flex-wrap items-center",
                    children: [(0,
                    s.jsxs)(r.P.div, {
                        className: "p-5 rounded-xl z-50 pointer-events-auto border-[2px] border-[#7485B3] bg-transparent relative group cursor-pointer",
                        initial: {
                            scale: 1,
                            boxShadow: "0px 0px 5px rgba(156, 168, 199, 0.3)"
                        },
                        whileHover: {
                            scale: 1.05,
                            boxShadow: "0px 0px 20px rgba(156, 168, 199, 0.8)"
                        },
                        transition: {
                            duration: .3,
                            ease: "easeInOut"
                        },
                        onMouseEnter: () => t(!0),
                        onMouseLeave: () => t(!1),
                        children: [(0,
                        s.jsx)("div", {
                            className: "absolute inset-0 bg-gradient-to-br from-gray-500/20 to-gray-800/20 rounded-xl"
                        }), (0,
                        s.jsx)(r.P.div, {
                            className: "relative z-10 flex flex-col items-center gap-2",
                            animate: e ? {
                                y: -10
                            } : {
                                y: 0
                            },
                            transition: {
                                duration: .3,
                                ease: "easeOut"
                            },
                            children: (0,
                            s.jsx)(r.P.svg, {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "100",
                                height: "100",
                                viewBox: "0,0,256,256",
                                className: "w-16 h-16 fill-[#9CA8C7] drop-shadow-[0_0_15px_#9CA8C7]",
                                initial: {
                                    filter: "drop-shadow(0px 0px 5px #9CA8C7)"
                                },
                                whileHover: {
                                    filter: "drop-shadow(0px 0px 15px #9CA8C7)"
                                },
                                transition: {
                                    duration: .3,
                                    ease: "easeInOut"
                                },
                                children: (0,
                                s.jsx)("g", {
                                    stroke: "none",
                                    strokeWidth: "1",
                                    strokeLinecap: "butt",
                                    strokeLinejoin: "miter",
                                    children: (0,
                                    s.jsx)("g", {
                                        transform: "scale(5.12,5.12)",
                                        children: (0,
                                        s.jsx)("path", {
                                            d: "M25.49414,4.99805c-1.309,0 -2.60414,0.34981 -3.74414,1.00781c-1.735,1.002 -2.97614,2.61773 -3.49414,4.55273c-0.519,1.935 -0.25381,3.95569 0.74219,5.67969l14.00781,25.01172c1.336,2.313 3.826,3.75195 6.5,3.75195c1.309,0 2.60414,-0.34981 3.74414,-1.00781c1.735,-1.002 2.97614,-2.61773 3.49414,-4.55273c0.519,-1.935 0.25381,-3.95569 -0.74219,-5.67969l-14.00781,-25.01172c-1.336,-2.313 -3.826,-3.75195 -6.5,-3.75195zM16.07031,13.64063l-9,15c1.07,-0.41 2.21969,-0.64062 3.42969,-0.64062c4.85,0 8.86969,3.65938 9.42969,8.35938l4.16016,-6.93945l-6.82031,-12.17969c-0.65,-1.12 -1.04922,-2.33961 -1.19922,-3.59961zM10.5,30c-4.14214,0 -7.5,3.35786 -7.5,7.5c0,4.14214 3.35786,7.5 7.5,7.5c4.14214,0 7.5,-3.35786 7.5,-7.5c0,-4.14214 -3.35786,-7.5 -7.5,-7.5z"
                                        })
                                    })
                                })
                            })
                        })]
                    }), (0,
                    s.jsx)(r.P.div, {
                        className: "absolute text-white -bottom-10 text-nowrap font-light mt-2",
                        initial: {
                            opacity: 0,
                            y: 5
                        },
                        animate: e ? {
                            opacity: 1,
                            y: 0
                        } : {
                            opacity: 0,
                            y: 5
                        },
                        transition: {
                            duration: .3,
                            ease: "easeOut"
                        },
                        children: "Google AdSense"
                    })]
                }), (0,
                s.jsxs)("div", {
                    className: "relative flex flex-col items-center",
                    children: [(0,
                    s.jsxs)(r.P.div, {
                        className: "p-5 rounded-xl z-50 pointer-events-auto border-[2px] border-[#7485B3] bg-transparent relative group cursor-pointer",
                        initial: {
                            scale: 1,
                            boxShadow: "0px 0px 5px rgba(156, 168, 199, 0.3)"
                        },
                        whileHover: {
                            scale: 1.05,
                            boxShadow: "0px 0px 20px rgba(156, 168, 199, 0.8)"
                        },
                        transition: {
                            duration: .3,
                            ease: "easeInOut"
                        },
                        onMouseEnter: () => l(!0),
                        onMouseLeave: () => l(!1),
                        children: [(0,
                        s.jsx)("div", {
                            className: "absolute inset-0 bg-gradient-to-br from-gray-500/20 to-gray-800/20 rounded-xl"
                        }), (0,
                        s.jsx)(r.P.div, {
                            className: "relative z-10 flex flex-col items-center gap-2",
                            animate: a ? {
                                y: -10
                            } : {
                                y: 0
                            },
                            transition: {
                                duration: .3,
                                ease: "easeOut"
                            },
                            children: (0,
                            s.jsxs)(r.P.svg, {
                                fill: "#ffffff",
                                viewBox: "0 0 24 24",
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "w-16 h-16 fill-[#9CA8C7] drop-shadow-[0_0_15px_#9CA8C7]",
                                initial: {
                                    filter: "drop-shadow(0px 0px 5px #9CA8C7)"
                                },
                                whileHover: {
                                    filter: "drop-shadow(0px 0px 15px #9CA8C7)"
                                },
                                transition: {
                                    duration: .3,
                                    ease: "easeInOut"
                                },
                                children: [(0,
                                s.jsx)("g", {
                                    id: "SVGRepo_bgCarrier",
                                    strokeWidth: "0"
                                }), (0,
                                s.jsx)("g", {
                                    id: "SVGRepo_tracerCarrier",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                }), (0,
                                s.jsx)("g", {
                                    id: "SVGRepo_iconCarrier",
                                    children: (0,
                                    s.jsx)("path", {
                                        d: "M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"
                                    })
                                })]
                            })
                        })]
                    }), (0,
                    s.jsx)(r.P.div, {
                        className: "absolute text-white -bottom-10 text-nowrap font-light mt-2",
                        initial: {
                            opacity: 0,
                            y: 5
                        },
                        animate: a ? {
                            opacity: 1,
                            y: 0
                        } : {
                            opacity: 0,
                            y: 5
                        },
                        transition: {
                            duration: .3,
                            ease: "easeOut"
                        },
                        children: "Tik Tok"
                    })]
                }), (0,
                s.jsxs)("div", {
                    className: "relative flex flex-col items-center",
                    children: [(0,
                    s.jsxs)(r.P.div, {
                        className: "p-5 rounded-xl z-50 pointer-events-auto border-[2px] border-[#7485B3] bg-transparent relative group cursor-pointer",
                        initial: {
                            scale: 1,
                            boxShadow: "0px 0px 5px rgba(156, 168, 199, 0.3)"
                        },
                        whileHover: {
                            scale: 1.05,
                            boxShadow: "0px 0px 20px rgba(156, 168, 199, 0.8)"
                        },
                        transition: {
                            duration: .3,
                            ease: "easeInOut"
                        },
                        onMouseEnter: () => d(!0),
                        onMouseLeave: () => d(!1),
                        children: [(0,
                        s.jsx)("div", {
                            className: "absolute inset-0 bg-gradient-to-br from-gray-500/20 to-gray-800/20 rounded-xl"
                        }), (0,
                        s.jsx)(r.P.div, {
                            className: "relative z-10 flex flex-col items-center gap-2",
                            animate: c ? {
                                y: -10
                            } : {
                                y: 0
                            },
                            transition: {
                                duration: .3,
                                ease: "easeOut"
                            },
                            children: (0,
                            s.jsxs)(r.P.svg, {
                                fill: "#ffffff",
                                viewBox: "0 0 32 32",
                                id: "Camada_1",
                                version: "1.1",
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "w-16 h-16 fill-[#9CA8C7] drop-shadow-[0_0_15px_#9CA8C7]",
                                initial: {
                                    filter: "drop-shadow(0px 0px 5px #9CA8C7)"
                                },
                                whileHover: {
                                    filter: "drop-shadow(0px 0px 15px #9CA8C7)"
                                },
                                transition: {
                                    duration: .3,
                                    ease: "easeInOut"
                                },
                                children: [(0,
                                s.jsx)("g", {
                                    id: "SVGRepo_bgCarrier",
                                    strokeWidth: "0"
                                }), (0,
                                s.jsx)("g", {
                                    id: "SVGRepo_tracerCarrier",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                }), (0,
                                s.jsx)("g", {
                                    id: "SVGRepo_iconCarrier",
                                    children: (0,
                                    s.jsx)("path", {
                                        d: "M5,19.5c0-4.6,2.3-9.4,5-9.4c1.5,0,2.7,0.9,4.6,3.6c-1.8,2.8-2.9,4.5-2.9,4.5c-2.4,3.8-3.2,4.6-4.5,4.6 C5.9,22.9,5,21.7,5,19.5 M20.7,17.8L19,15c-0.4-0.7-0.9-1.4-1.3-2c1.5-2.3,2.7-3.5,4.2-3.5c3,0,5.4,4.5,5.4,10.1 c0,2.1-0.7,3.3-2.1,3.3S23.3,22,20.7,17.8 M16.4,11c-2.2-2.9-4.1-4-6.3-4C5.5,7,2,13.1,2,19.5c0,4,1.9,6.5,5.1,6.5 c2.3,0,3.9-1.1,6.9-6.3c0,0,1.2-2.2,2.1-3.7c0.3,0.5,0.6,1,0.9,1.6l1.4,2.4c2.7,4.6,4.2,6.1,6.9,6.1c3.1,0,4.8-2.6,4.8-6.7 C30,12.6,26.4,7,22.1,7C19.8,7,18,8.8,16.4,11"
                                    })
                                })]
                            })
                        })]
                    }), (0,
                    s.jsx)(r.P.div, {
                        className: "absolute text-white -bottom-10 text-nowrap font-light mt-2",
                        initial: {
                            opacity: 0,
                            y: 5
                        },
                        animate: c ? {
                            opacity: 1,
                            y: 0
                        } : {
                            opacity: 0,
                            y: 5
                        },
                        transition: {
                            duration: .3,
                            ease: "easeOut"
                        },
                        children: "Meta"
                    })]
                }), (0,
                s.jsxs)("div", {
                    className: "relative flex flex-col items-center",
                    children: [(0,
                    s.jsxs)(r.P.div, {
                        className: "p-5 rounded-xl z-50 pointer-events-auto border-[2px] border-[#7485B3] bg-transparent relative group cursor-pointer",
                        initial: {
                            scale: 1,
                            boxShadow: "0px 0px 5px rgba(156, 168, 199, 0.3)"
                        },
                        whileHover: {
                            scale: 1.05,
                            boxShadow: "0px 0px 20px rgba(156, 168, 199, 0.8)"
                        },
                        transition: {
                            duration: .3,
                            ease: "easeInOut"
                        },
                        onMouseEnter: () => p(!0),
                        onMouseLeave: () => p(!1),
                        children: [(0,
                        s.jsx)("div", {
                            className: "absolute inset-0 bg-gradient-to-br from-gray-500/20 to-gray-800/20 rounded-xl"
                        }), (0,
                        s.jsx)(r.P.div, {
                            className: "relative z-10 flex flex-col items-center gap-2",
                            animate: x ? {
                                y: -10
                            } : {
                                y: 0
                            },
                            transition: {
                                duration: .3,
                                ease: "easeOut"
                            },
                            children: (0,
                            s.jsxs)(r.P.svg, {
                                fill: "#ffffff",
                                height: "200px",
                                width: "200px",
                                version: "1.1",
                                id: "Icons",
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 32 32",
                                className: "w-16 h-16 fill-[#9CA8C7] drop-shadow-[0_0_15px_#9CA8C7]",
                                initial: {
                                    filter: "drop-shadow(0px 0px 5px #9CA8C7)"
                                },
                                whileHover: {
                                    filter: "drop-shadow(0px 0px 15px #9CA8C7)"
                                },
                                transition: {
                                    duration: .3,
                                    ease: "easeInOut"
                                },
                                children: [(0,
                                s.jsx)("g", {
                                    id: "SVGRepo_bgCarrier",
                                    strokeWidth: "0"
                                }), (0,
                                s.jsx)("g", {
                                    id: "SVGRepo_tracerCarrier",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                }), (0,
                                s.jsxs)("g", {
                                    id: "SVGRepo_iconCarrier",
                                    children: [" ", (0,
                                    s.jsx)("path", {
                                        d: "M23,0H9C4,0,0,4,0,9v14c0,5,4,9,9,9h14c5,0,9-4,9-9V9C32,4,28,0,23,0z M12,25c0,0.6-0.4,1-1,1H7c-0.6,0-1-0.4-1-1V13 c0-0.6,0.4-1,1-1h4c0.6,0,1,0.4,1,1V25z M9,11c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3S10.7,11,9,11z M26,25c0,0.6-0.4,1-1,1h-3 c-0.6,0-1-0.4-1-1v-3.5v-1v-2c0-0.8-0.7-1.5-1.5-1.5S18,17.7,18,18.5v2v1V25c0,0.6-0.4,1-1,1h-3c-0.6,0-1-0.4-1-1V13 c0-0.6,0.4-1,1-1h4c0.3,0,0.5,0.1,0.7,0.3c0.6-0.2,1.2-0.3,1.8-0.3c3,0,5.5,2.5,5.5,5.5V25z"
                                    }), " "]
                                })]
                            })
                        })]
                    }), (0,
                    s.jsx)(r.P.div, {
                        className: "absolute text-white -bottom-10 text-nowrap font-light mt-2",
                        initial: {
                            opacity: 0,
                            y: 5
                        },
                        animate: x ? {
                            opacity: 1,
                            y: 0
                        } : {
                            opacity: 0,
                            y: 5
                        },
                        transition: {
                            duration: .3,
                            ease: "easeOut"
                        },
                        children: "Linked In"
                    })]
                }), (0,
                s.jsxs)("div", {
                    className: "relative flex flex-col items-center",
                    children: [(0,
                    s.jsxs)(r.P.div, {
                        className: "p-5 rounded-xl z-50 pointer-events-auto border-[2px] border-[#7485B3] bg-transparent relative group cursor-pointer",
                        initial: {
                            scale: 1,
                            boxShadow: "0px 0px 5px rgba(156, 168, 199, 0.3)"
                        },
                        whileHover: {
                            scale: 1.05,
                            boxShadow: "0px 0px 20px rgba(156, 168, 199, 0.8)"
                        },
                        transition: {
                            duration: .3,
                            ease: "easeInOut"
                        },
                        onMouseEnter: () => o(!0),
                        onMouseLeave: () => o(!1),
                        children: [(0,
                        s.jsx)("div", {
                            className: "absolute inset-0 bg-gradient-to-br from-gray-500/20 to-gray-800/20 rounded-xl"
                        }), (0,
                        s.jsx)(r.P.div, {
                            className: "relative z-10 flex flex-col items-center gap-2",
                            animate: n ? {
                                y: -10
                            } : {
                                y: 0
                            },
                            transition: {
                                duration: .3,
                                ease: "easeOut"
                            },
                            children: (0,
                            s.jsx)(r.P.svg, {
                                xmlns: "http://www.w3.org/2000/svg",
                                x: "0px",
                                y: "0px",
                                width: "100",
                                height: "100",
                                viewBox: "0,0,256,256",
                                className: "w-16 h-16 fill-[#9CA8C7] drop-shadow-[0_0_15px_#9CA8C7]",
                                initial: {
                                    filter: "drop-shadow(0px 0px 5px #9CA8C7)"
                                },
                                whileHover: {
                                    filter: "drop-shadow(0px 0px 15px #9CA8C7)"
                                },
                                transition: {
                                    duration: .3,
                                    ease: "easeInOut"
                                },
                                children: (0,
                                s.jsx)("g", {
                                    fill: "#ffffff",
                                    fillRule: "nonzero",
                                    stroke: "none",
                                    strokeWidth: "1",
                                    strokeLinecap: "butt",
                                    strokeLinejoin: "miter",
                                    strokeMiterlimit: "10",
                                    strokeDasharray: "",
                                    strokeDashoffset: "0",
                                    fontFamily: "none",
                                    fontWeight: "none",
                                    fontSize: "none",
                                    textAnchor: "none",
                                    children: (0,
                                    s.jsx)("g", {
                                        transform: "scale(5.12,5.12)",
                                        children: (0,
                                        s.jsx)("path", {
                                            d: "M5.91992,6l14.66211,21.375l-14.35156,16.625h3.17969l12.57617,-14.57812l10,14.57813h12.01367l-15.31836,-22.33008l13.51758,-15.66992h-3.16992l-11.75391,13.61719l-9.3418,-13.61719zM9.7168,8h7.16406l23.32227,34h-7.16406z"
                                        })
                                    })
                                })
                            })
                        })]
                    }), (0,
                    s.jsx)(r.P.div, {
                        className: "absolute text-white -bottom-10 text-nowrap font-light mt-2",
                        initial: {
                            opacity: 0,
                            y: 5
                        },
                        animate: n ? {
                            opacity: 1,
                            y: 0
                        } : {
                            opacity: 0,
                            y: 5
                        },
                        transition: {
                            duration: .3,
                            ease: "easeOut"
                        },
                        children: "X"
                    })]
                }), (0,
                s.jsxs)("div", {
                    className: "relative flex flex-col items-center",
                    children: [(0,
                    s.jsxs)(r.P.div, {
                        className: "p-5 rounded-xl z-50 pointer-events-auto border-[2px] border-[#7485B3] bg-transparent relative group cursor-pointer",
                        initial: {
                            scale: 1,
                            boxShadow: "0px 0px 5px rgba(156, 168, 199, 0.3)"
                        },
                        whileHover: {
                            scale: 1.05,
                            boxShadow: "0px 0px 20px rgba(156, 168, 199, 0.8)"
                        },
                        transition: {
                            duration: .3,
                            ease: "easeInOut"
                        },
                        onMouseEnter: () => m(!0),
                        onMouseLeave: () => m(!1),
                        children: [(0,
                        s.jsx)("div", {
                            className: "absolute inset-0 bg-gradient-to-br from-gray-500/20 to-gray-800/20 rounded-xl"
                        }), (0,
                        s.jsx)(r.P.div, {
                            className: "relative z-10 flex flex-col items-center gap-2",
                            animate: h ? {
                                y: -10
                            } : {
                                y: 0
                            },
                            transition: {
                                duration: .3,
                                ease: "easeOut"
                            },
                            children: (0,
                            s.jsxs)(r.P.svg, {
                                fill: "#ffffff",
                                viewBox: "0 -50 1100 1100",
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "w-16 h-16 fill-[#9CA8C7] drop-shadow-[0_0_15px_#9CA8C7]",
                                initial: {
                                    filter: "drop-shadow(0px 0px 5px #9CA8C7)"
                                },
                                whileHover: {
                                    filter: "drop-shadow(0px 0px 15px #9CA8C7)"
                                },
                                transition: {
                                    duration: .3,
                                    ease: "easeInOut"
                                },
                                children: [(0,
                                s.jsx)("g", {
                                    id: "SVGRepo_bgCarrier",
                                    "stroke-width": "0"
                                }), (0,
                                s.jsx)("g", {
                                    id: "SVGRepo_tracerCarrier",
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round"
                                }), (0,
                                s.jsx)("g", {
                                    id: "SVGRepo_iconCarrier",
                                    children: (0,
                                    s.jsx)("path", {
                                        d: "M2 776c3.333-5.333 8.666-5.667 16-1 166.666 96.667 348 145 544 145 130.666 0 259.666-24.333 387-73 3.333-1.333 8.166-3.333 14.5-6 6.333-2.667 10.833-4.667 13.5-6 10-4 17.833-2 23.5 6 5.666 8 3.833 15.333-5.5 22-12 8.667-27.334 18.667-46 30-57.334 34-121.334 60.333-192 79-70.667 18.667-139.667 28-207 28-104 0-202.334-18.167-295-54.5C162.333 909.167 79.333 858 6 792c-4-3.333-6-6.667-6-10 0-2 .666-4 2-6zm301-285c0-46 11.333-85.333 34-118 22.666-32.667 53.666-57.333 93-74 36-15.333 80.333-26.333 133-33 18-2 47.333-4.667 88-8v-17c0-42.667-4.667-71.333-14-86-14-20-36-30-66-30h-8c-22 2-41 9-57 21s-26.334 28.667-31 50c-2.667 13.333-9.334 21-20 23l-115-14c-11.334-2.667-17-8.667-17-18 0-2 .333-4.333 1-7 11.333-59.333 39.166-103.333 83.5-132C451.833 19.333 503.666 3.333 563 0h25c76 0 135.333 19.667 178 59a190.52 190.52 0 0 1 18.5 21.5c5.666 7.667 10.166 14.5 13.5 20.5 3.333 6 6.333 14.667 9 26 2.666 11.333 4.666 19.167 6 23.5 1.333 4.333 2.333 13.667 3 28 .666 14.333 1 22.833 1 25.5v242c0 17.333 2.5 33.167 7.5 47.5s9.833 24.667 14.5 31c4.666 6.333 12.333 16.5 23 30.5 4 6 6 11.333 6 16 0 5.333-2.667 10-8 14-55.334 48-85.334 74-90 78-8 6-17.667 6.667-29 2-9.334-8-17.5-15.667-24.5-23s-12-12.667-15-16-7.834-9.833-14.5-19.5c-6.667-9.667-11.334-16.167-14-19.5-37.334 40.667-74 66-110 76-22.667 6.667-50.667 10-84 10-51.334 0-93.5-15.833-126.5-47.5S303 549 303 491zm172-20c0 26 6.5 46.833 19.5 62.5S525 557 547 557c2 0 4.833-.333 8.5-1 3.666-.667 6.166-1 7.5-1 28-7.333 49.666-25.333 65-54 7.333-12.667 12.833-26.5 16.5-41.5 3.666-15 5.666-27.167 6-36.5.333-9.333.5-24.667.5-46v-25c-38.667 0-68 2.667-88 8-58.667 16.667-88 53.667-88 111zm420 322c1.333-2.667 3.333-5.333 6-8 16.666-11.333 32.666-19 48-23 25.333-6.667 50-10.333 74-11 6.666-.667 13-.333 19 1 30 2.667 48 7.667 54 15 2.666 4 4 10 4 18v7c0 23.333-6.334 50.833-19 82.5-12.667 31.667-30.334 57.167-53 76.5-3.334 2.667-6.334 4-9 4-1.334 0-2.667-.333-4-1-4-2-5-5.667-3-11 24.666-58 37-98.333 37-121 0-7.333-1.334-12.667-4-16-6.667-8-25.334-12-56-12-11.334 0-24.667.667-40 2-16.667 2-32 4-46 6-4 0-6.667-.667-8-2-1.334-1.333-1.667-2.667-1-4 0-.667.333-1.667 1-3z"
                                    })
                                })]
                            })
                        })]
                    }), (0,
                    s.jsx)(r.P.div, {
                        className: "absolute text-white -bottom-10 text-nowrap font-light mt-2",
                        initial: {
                            opacity: 0,
                            y: 5
                        },
                        animate: h ? {
                            opacity: 1,
                            y: 0
                        } : {
                            opacity: 0,
                            y: 5
                        },
                        transition: {
                            duration: .3,
                            ease: "easeOut"
                        },
                        children: "Amazon"
                    })]
                })]
            })
        }
        let G = i.forwardRef( (e, t) => {
            let {className: a, ...r} = e;
            return (0,
            s.jsx)("div", {
                ref: t,
                className: x("rounded-lg border bg-card text-card-foreground shadow-sm", a),
                ...r
            })
        }
        );
        G.displayName = "Card",
        i.forwardRef( (e, t) => {
            let {className: a, ...r} = e;
            return (0,
            s.jsx)("div", {
                ref: t,
                className: x("flex flex-col space-y-1.5 p-6", a),
                ...r
            })
        }
        ).displayName = "CardHeader",
        i.forwardRef( (e, t) => {
            let {className: a, ...r} = e;
            return (0,
            s.jsx)("div", {
                ref: t,
                className: x("text-2xl font-semibold leading-none tracking-tight", a),
                ...r
            })
        }
        ).displayName = "CardTitle",
        i.forwardRef( (e, t) => {
            let {className: a, ...r} = e;
            return (0,
            s.jsx)("div", {
                ref: t,
                className: x("text-sm text-muted-foreground", a),
                ...r
            })
        }
        ).displayName = "CardDescription";
        let H = i.forwardRef( (e, t) => {
            let {className: a, ...r} = e;
            return (0,
            s.jsx)("div", {
                ref: t,
                className: x("p-6 pt-0", a),
                ...r
            })
        }
        );
        H.displayName = "CardContent",
        i.forwardRef( (e, t) => {
            let {className: a, ...r} = e;
            return (0,
            s.jsx)("div", {
                ref: t,
                className: x("flex items-center p-6 pt-0", a),
                ...r
            })
        }
        ).displayName = "CardFooter";
        var F = a(4873)
          , Z = a(9154)
          , W = a(1338);
        let Y = () => {
            let e = [{
                x: 140 * Math.cos(Math.PI / 4),
                y: 140 * Math.sin(Math.PI / 4)
            }, {
                x: 140 * Math.cos(3 * Math.PI / 4),
                y: 140 * Math.sin(3 * Math.PI / 4)
            }, {
                x: 140 * Math.cos(5 * Math.PI / 4),
                y: 140 * Math.sin(5 * Math.PI / 4)
            }, {
                x: 140 * Math.cos(7 * Math.PI / 4),
                y: 140 * Math.sin(7 * Math.PI / 4)
            }];
            return (0,
            s.jsx)(G, {
                className: "h-[70%] w-[350px] bp6:-mt-[450px] bg-gradient-to-br from-[#2E3139] to-[#1E2536] overflow-hidden relative group",
                children: (0,
                s.jsxs)("div", {
                    className: "relative h-full bg-gradient-to-br from-[#2E3139] to-[#1E2536] rounded-xl overflow-hidden border-0",
                    children: [(0,
                    s.jsx)(E, {
                        duration: 6,
                        delay: 3,
                        size: 700,
                        className: "from-transparent via-blue-500 to-transparent"
                    }), (0,
                    s.jsx)("div", {
                        className: "absolute inset-0 flex items-center justify-center -translate-y-12",
                        children: (0,
                        s.jsxs)("div", {
                            className: "relative w-[280px] h-[280px] rounded-full border border-blue-300/30 flex items-center justify-center",
                            children: [(0,
                            s.jsx)("div", {
                                className: "absolute w-[180px] h-[180px] rounded-full border border-blue-300/40"
                            }), (0,
                            s.jsx)("div", {
                                className: "absolute w-[80px] h-[80px] rounded-full border border-blue-300/50"
                            }), e.map( (e, t) => (0,
                            s.jsx)(r.P.div, {
                                className: "absolute",
                                animate: {
                                    x: [e.x, 0, e.x],
                                    y: [e.y, 0, e.y],
                                    opacity: [1, .5, 1],
                                    scale: [1, .6, 1]
                                },
                                transition: {
                                    duration: 4,
                                    repeat: 1 / 0,
                                    repeatType: "loop",
                                    ease: "easeInOut",
                                    times: [0, .5, 1],
                                    delay: .75 * t
                                },
                                children: (0,
                                s.jsx)(F.A, {
                                    size: 28,
                                    className: "text-blue-300/90"
                                })
                            }, t)), (0,
                            s.jsx)(r.P.div, {
                                className: "absolute text-[#7586B4]",
                                initial: {
                                    scale: .8,
                                    opacity: .8,
                                    filter: "drop-shadow(0px 0px 10px #7586B4)"
                                },
                                animate: {
                                    scale: 1,
                                    opacity: 1,
                                    filter: "drop-shadow(0px 0px 20px #7586B4)"
                                },
                                transition: {
                                    duration: 1.5,
                                    repeat: 1 / 0,
                                    repeatType: "mirror",
                                    ease: "easeInOut"
                                },
                                children: (0,
                                s.jsx)(W.l, {
                                    size: 100,
                                    className: "fill-[#7586B4]"
                                })
                            })]
                        })
                    }), (0,
                    s.jsxs)("div", {
                        className: "absolute bottom-0 w-full p-6 bg-gradient-to-t from-black/60 to-transparent",
                        children: [(0,
                        s.jsx)("h3", {
                            className: "text-[16px] text-white",
                            children: "Intelligent Agents to Optimize your Reach"
                        }), (0,
                        s.jsx)("p", {
                            className: "text-gray-400 text-sm",
                            children: "Scale and refine your marketing with AI-powered agents. They track performance in real-time to help you reach more customers efficiently."
                        })]
                    })]
                })
            })
        }
          , U = [30, 50, 80, 40, 70]
          , K = () => (0,
        s.jsx)("div", {
            className: "w-[100px] h-[100px] flex items-end gap-2 p-4 bg-[#2c3445] rounded-lg",
            children: U.map( (e, t) => (0,
            s.jsx)(r.P.div, {
                initial: {
                    height: 0,
                    opacity: 0
                },
                animate: {
                    height: "".concat(e, "%"),
                    opacity: 1
                },
                transition: {
                    duration: .8,
                    delay: .2 * t
                },
                className: "w-8 rounded-md relative",
                style: {
                    background: "linear-gradient(180deg, #5a6486 0%, #454F68 50%, #2c3445 100%)",
                    boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.5), inset -2px -2px 5px rgba(255, 255, 255, 0.1)"
                }
            }, t))
        })
          , q = () => {
            let[e,t] = (0,
            i.useState)(!0);
            (0,
            i.useEffect)( () => {
                let e = setInterval( () => {
                    t(e => !e)
                }
                , 2e3);
                return () => clearInterval(e)
            }
            , []);
            let a = e ? 2 : 0;
            return (0,
            s.jsxs)("svg", {
                width: "100",
                height: "100",
                viewBox: "0 0 32 32",
                children: [(0,
                s.jsx)("circle", {
                    cx: "16",
                    cy: "18",
                    r: "14",
                    fill: "rgba(0,0,0,0.2)"
                }), [{
                    start: 0,
                    end: 90,
                    color: "#5a6486"
                }, {
                    start: 90,
                    end: 180,
                    color: "#454F68"
                }, {
                    start: 180,
                    end: 270,
                    color: "#2c3445"
                }, {
                    start: 270,
                    end: 360,
                    color: "#6B728E"
                }].map( (t, i) => {
                    let l = t.start * Math.PI / 180
                      , n = t.end * Math.PI / 180
                      , o = 16 + 15 * Math.cos(l)
                      , c = 16 + 15 * Math.sin(l)
                      , d = 16 + 15 * Math.cos(n)
                      , x = 16 + 15 * Math.sin(n)
                      , p = t.end - t.start > 180 ? 1 : 0;
                    return (0,
                    s.jsx)(r.P.path, {
                        initial: {
                            translateY: e ? -a : 0
                        },
                        animate: {
                            translateY: e ? 0 : -a
                        },
                        transition: {
                            duration: 1
                        },
                        fill: t.color,
                        d: "M".concat(16, ",").concat(16, " L").concat(o, ",").concat(c, " A").concat(15, ",").concat(15, " 0 ").concat(p, ",1 ").concat(d, ",").concat(x, " Z"),
                        style: {
                            filter: "drop-shadow(2px 2px 2px rgba(0,0,0,0.2))"
                        }
                    }, i)
                }
                )]
            })
        }
        ;
        function X() {
            return (0,
            s.jsx)("div", {
                className: "min-h-screen w-full flex justify-center items-center bg-transparent p-6",
                children: (0,
                s.jsxs)("div", {
                    className: " max-w-7xl",
                    children: [(0,
                    s.jsxs)("div", {
                        className: "bp1:grid hidden grid-rows-2 gap-6 mt-28 bp6:h-[2000px] h-[1200px] bp6:mt-[280px]  place-items-center",
                        children: [(0,
                        s.jsxs)("div", {
                            className: "grid bp6:grid-cols-1  grid-cols-2 gap-6 bp6:h-[1600px]  h-[800px]  place-items-center",
                            children: [(0,
                            s.jsx)(G, {
                                className: "h-[70%]  w-[350px] bg-gradient-to-br from-[#2E3139] to-[#1E2536] overflow-hidden relative group",
                                children: (0,
                                s.jsxs)("div", {
                                    className: "relative h-full bg-gradient-to-br from-[#2E3139] to-[#1E2536] rounded-xl overflow-hidden border-0",
                                    children: [(0,
                                    s.jsx)(E, {
                                        duration: 6,
                                        delay: 3,
                                        size: 700,
                                        className: "from-transparent via-blue-500 to-transparent"
                                    }), (0,
                                    s.jsx)("div", {
                                        className: "absolute inset-0 mb-24 flex items-center justify-center",
                                        children: (0,
                                        s.jsxs)("div", {
                                            className: "relative w-[300px] h-[300px] rounded-full border border-blue-300/30 flex items-center justify-center",
                                            children: [(0,
                                            s.jsx)(r.P.div, {
                                                className: "absolute w-[300px] h-[300px] rounded-full bg-gradient-to-r from-blue-300/40 to-transparent opacity-30",
                                                animate: {
                                                    rotate: 360
                                                },
                                                transition: {
                                                    duration: 4,
                                                    repeat: 1 / 0,
                                                    ease: "linear"
                                                }
                                            }), (0,
                                            s.jsx)(r.P.div, {
                                                className: "absolute w-[200px] h-[200px] rounded-full border border-blue-300/20",
                                                initial: {
                                                    scale: .5,
                                                    opacity: 0
                                                },
                                                animate: {
                                                    scale: 1.5,
                                                    opacity: 1
                                                },
                                                transition: {
                                                    duration: 1.5,
                                                    repeat: 1 / 0,
                                                    ease: "easeInOut"
                                                }
                                            }), (0,
                                            s.jsx)(r.P.div, {
                                                className: "absolute w-[250px] h-[250px] rounded-full border border-blue-300/10",
                                                initial: {
                                                    scale: .7,
                                                    opacity: 0
                                                },
                                                animate: {
                                                    scale: 2,
                                                    opacity: 1
                                                },
                                                transition: {
                                                    duration: 2,
                                                    repeat: 1 / 0,
                                                    ease: "easeInOut"
                                                }
                                            }), (0,
                                            s.jsx)(r.P.div, {
                                                className: "absolute w-[20px] h-[20px] bg-blue-400 rounded-full",
                                                animate: {
                                                    scale: [1, 1.5, 1],
                                                    opacity: [1, .5, 1]
                                                },
                                                transition: {
                                                    duration: 1.5,
                                                    repeat: 1 / 0,
                                                    ease: "easeInOut"
                                                }
                                            }), [{
                                                className: "top-4 left-8",
                                                delay: 0
                                            }, {
                                                className: "bottom-10 right-10",
                                                delay: .5
                                            }, {
                                                className: "top-10 right-16",
                                                delay: 1
                                            }, {
                                                className: "bottom-16 left-12",
                                                delay: 1.5
                                            }].map( (e, t) => (0,
                                            s.jsx)(r.P.div, {
                                                className: "absolute ".concat(e.className),
                                                initial: {
                                                    opacity: 0,
                                                    scale: .8
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    scale: 1
                                                },
                                                exit: {
                                                    opacity: 0,
                                                    scale: .8
                                                },
                                                transition: {
                                                    duration: 1.5,
                                                    repeat: 1 / 0,
                                                    repeatType: "mirror",
                                                    delay: e.delay
                                                },
                                                children: (0,
                                                s.jsx)(F.A, {
                                                    size: 28,
                                                    className: "text-blue-300/90"
                                                })
                                            }, t))]
                                        })
                                    }), (0,
                                    s.jsxs)("div", {
                                        className: "absolute bottom-0 w-full p-6 bg-gradient-to-t from-black/60 to-transparent",
                                        children: [(0,
                                        s.jsx)("h3", {
                                            className: "text-[16px] text-white",
                                            children: "Reach Target Audience2"
                                        }), (0,
                                        s.jsx)("p", {
                                            className: "text-gray-400 text-sm",
                                            children: "Pinpoint the perfect audience with precision. Our AI-driven targeting ensures every message resonates where it matters most."
                                        })]
                                    })]
                                })
                            }), (0,
                            s.jsx)(Y, {})]
                        }), (0,
                        s.jsxs)("div", {
                            className: "flex-row bp6:flex-col flex bp6:-mt-[350px] -mt-44 gap-6 h-[70%]",
                            children: [(0,
                            s.jsx)(G, {
                                className: "flex-1 w-[350px] h-[350px] bg-gradient-to-br from-[#2E3139] to-[#1E2536] border-0 overflow-hidden relative group",
                                children: (0,
                                s.jsxs)(H, {
                                    className: "h-full  p-6 flex relative flex-col gap-4 items-center justify-center",
                                    children: [(0,
                                    s.jsx)(E, {
                                        duration: 6,
                                        delay: 3,
                                        size: 300,
                                        className: "from-transparent via-blue-500 to-transparent"
                                    }), (0,
                                    s.jsx)("div", {
                                        className: "flex gap-4",
                                        children: (0,
                                        s.jsxs)("div", {
                                            className: "p-1 relative rounded-xl",
                                            children: [(0,
                                            s.jsx)(E, {
                                                duration: 6,
                                                delay: 3,
                                                size: 100,
                                                className: "from-transparent via-blue-500 to-transparent"
                                            }), (0,
                                            s.jsxs)("div", {
                                                className: "p-3 relative rounded-xl bg-[rgba(59,67,88)]",
                                                children: [(0,
                                                s.jsx)(E, {
                                                    duration: 6,
                                                    delay: 3,
                                                    size: 100,
                                                    className: "from-transparent via-blue-500 to-transparent"
                                                }), (0,
                                                s.jsx)(r.P.div, {
                                                    animate: {
                                                        rotate: 360
                                                    },
                                                    transition: {
                                                        repeat: 1 / 0,
                                                        duration: 5,
                                                        ease: "linear"
                                                    },
                                                    className: "drop-shadow-[0_0_10px_#7586B4] filter",
                                                    children: (0,
                                                    s.jsx)(Z.A, {
                                                        className: "w-24 h-24 text-[#7586B4]"
                                                    })
                                                })]
                                            }), (0,
                                            s.jsx)("div", {
                                                className: "w-28 h-[1px] absolute -right-[107px] top-1/2 -translate-y-1/2 bg-[#7586B4]  shadow-[0_0_10px_#7586B4]"
                                            }), (0,
                                            s.jsx)("div", {
                                                className: "absolute -right-[95px] top-[calc(50%-14px)] -translate-y-1/2 text-[#7586B4] text-[10px] font-light",
                                                children: "Gen AI Powered"
                                            })]
                                        })
                                    }), (0,
                                    s.jsxs)("div", {
                                        className: "mt-4 space-y-2",
                                        children: [(0,
                                        s.jsx)("h3", {
                                            className: "text-[16px] text-white",
                                            children: "Marketing made Easier"
                                        }), (0,
                                        s.jsx)("p", {
                                            className: "text-sm text-gray-400",
                                            children: "Save time and simplify campaign management. Let automated workflows handle the heavy lifting, so you can focus on creativity."
                                        })]
                                    })]
                                })
                            }), (0,
                            s.jsx)(G, {
                                className: "flex-1 h-[350px] bg-gradient-to-br from-[#2E3139] to-[#1E2536] border-0 overflow-hidden relative group",
                                children: (0,
                                s.jsxs)(H, {
                                    className: "h-full w-[350px]  relative p-6 flex flex-col gap-4 items-center justify-center",
                                    children: [(0,
                                    s.jsx)(E, {
                                        duration: 6,
                                        delay: 3,
                                        size: 300,
                                        className: "from-transparent via-blue-500 to-transparent"
                                    }), (0,
                                    s.jsxs)("div", {
                                        className: "flex gap-4",
                                        children: [(0,
                                        s.jsx)("div", {
                                            className: "p-1 relative rounded-xl",
                                            children: (0,
                                            s.jsx)("div", {
                                                className: "p-3 relative rounded-xl bg-[rgba(59,67,88)]",
                                                children: (0,
                                                s.jsx)(r.P.div, {
                                                    animate: {
                                                        y: [0, -10, 0]
                                                    },
                                                    transition: {
                                                        repeat: 1 / 0,
                                                        duration: 1.5,
                                                        ease: "easeInOut"
                                                    },
                                                    className: "drop-shadow-[0_0_10px_#7586B4] filter",
                                                    children: (0,
                                                    s.jsx)(K, {})
                                                })
                                            })
                                        }), (0,
                                        s.jsx)("div", {
                                            className: "w-[124px] h-[124px] flex items-center justify-center relative rounded-xl bg-[rgba(59,67,88)]",
                                            children: (0,
                                            s.jsx)(r.P.div, {
                                                animate: {
                                                    y: [0, -10, 0]
                                                },
                                                transition: {
                                                    repeat: 1 / 0,
                                                    duration: 1.5,
                                                    ease: "easeInOut"
                                                },
                                                className: "drop-shadow-[0_0_10px_#7586B4] filter",
                                                children: (0,
                                                s.jsx)(q, {})
                                            })
                                        })]
                                    }), (0,
                                    s.jsxs)("div", {
                                        className: "mt-4 space-y-2",
                                        children: [(0,
                                        s.jsx)("h3", {
                                            className: "text-[16px] text-white",
                                            children: "Smart Marketing Insights"
                                        }), (0,
                                        s.jsx)("p", {
                                            className: "text-sm text-gray-400",
                                            children: "Unlock actionable data to guide every decision. Stay ahead of trends, refine your strategies, and make confident moves with powerful analytics."
                                        })]
                                    })]
                                })
                            })]
                        })]
                    }), (0,
                    s.jsxs)("div", {
                        className: "bp1:hidden grid grid-cols-3 gap-6 h-[800px] place-items-center",
                        children: [(0,
                        s.jsx)(G, {
                            className: "h-[70%]  w-[350px] bg-gradient-to-br from-[#2E3139] to-[#1E2536] overflow-hidden relative group",
                            children: (0,
                            s.jsxs)("div", {
                                className: "relative h-full bg-gradient-to-br from-[#2E3139] to-[#1E2536] rounded-xl overflow-hidden border-0",
                                children: [(0,
                                s.jsx)(E, {
                                    duration: 6,
                                    delay: 3,
                                    size: 700,
                                    className: "from-transparent via-blue-500 to-transparent"
                                }), (0,
                                s.jsx)("div", {
                                    className: "absolute inset-0 mb-24 flex items-center justify-center",
                                    children: (0,
                                    s.jsxs)("div", {
                                        className: "relative w-[300px] h-[300px] rounded-full border border-blue-300/30 flex items-center justify-center",
                                        children: [(0,
                                        s.jsx)(r.P.div, {
                                            className: "absolute w-[300px] h-[300px] rounded-full bg-gradient-to-r from-blue-300/40 to-transparent opacity-30",
                                            animate: {
                                                rotate: 360
                                            },
                                            transition: {
                                                duration: 4,
                                                repeat: 1 / 0,
                                                ease: "linear"
                                            }
                                        }), (0,
                                        s.jsx)(r.P.div, {
                                            className: "absolute w-[200px] h-[200px] rounded-full border border-blue-300/20",
                                            initial: {
                                                scale: .5,
                                                opacity: 0
                                            },
                                            animate: {
                                                scale: 1.5,
                                                opacity: 1
                                            },
                                            transition: {
                                                duration: 1.5,
                                                repeat: 1 / 0,
                                                ease: "easeInOut"
                                            }
                                        }), (0,
                                        s.jsx)(r.P.div, {
                                            className: "absolute w-[250px] h-[250px] rounded-full border border-blue-300/10",
                                            initial: {
                                                scale: .7,
                                                opacity: 0
                                            },
                                            animate: {
                                                scale: 2,
                                                opacity: 1
                                            },
                                            transition: {
                                                duration: 2,
                                                repeat: 1 / 0,
                                                ease: "easeInOut"
                                            }
                                        }), (0,
                                        s.jsx)(r.P.div, {
                                            className: "absolute w-[20px] h-[20px] bg-blue-400 rounded-full",
                                            animate: {
                                                scale: [1, 1.5, 1],
                                                opacity: [1, .5, 1]
                                            },
                                            transition: {
                                                duration: 1.5,
                                                repeat: 1 / 0,
                                                ease: "easeInOut"
                                            }
                                        }), [{
                                            className: "top-4 left-8",
                                            delay: 0
                                        }, {
                                            className: "bottom-10 right-10",
                                            delay: .5
                                        }, {
                                            className: "top-10 right-16",
                                            delay: 1
                                        }, {
                                            className: "bottom-16 left-12",
                                            delay: 1.5
                                        }].map( (e, t) => (0,
                                        s.jsx)(r.P.div, {
                                            className: "absolute ".concat(e.className),
                                            initial: {
                                                opacity: 0,
                                                scale: .8
                                            },
                                            animate: {
                                                opacity: 1,
                                                scale: 1
                                            },
                                            exit: {
                                                opacity: 0,
                                                scale: .8
                                            },
                                            transition: {
                                                duration: 1.5,
                                                repeat: 1 / 0,
                                                repeatType: "mirror",
                                                delay: e.delay
                                            },
                                            children: (0,
                                            s.jsx)(F.A, {
                                                size: 28,
                                                className: "text-blue-300/90"
                                            })
                                        }, t))]
                                    })
                                }), (0,
                                s.jsxs)("div", {
                                    className: "absolute bottom-0 w-full p-6 bg-gradient-to-t from-black/60 to-transparent",
                                    children: [(0,
                                    s.jsx)("h3", {
                                        className: "text-[16px] text-white",
                                        children: "Reach Target Audience"
                                    }), (0,
                                    s.jsx)("p", {
                                        className: "text-gray-400 text-sm",
                                        children: "Pinpoint the perfect audience with precision. Our AI-driven targeting ensures every message resonates where it matters most."
                                    })]
                                })]
                            })
                        }), (0,
                        s.jsxs)("div", {
                            className: "flex flex-col  gap-6 h-[70%]",
                            children: [(0,
                            s.jsx)(G, {
                                className: "flex-1 bg-gradient-to-br from-[#2E3139] to-[#1E2536] border-0 overflow-hidden relative group",
                                children: (0,
                                s.jsxs)(H, {
                                    className: "h-full p-6 flex relative flex-col gap-4 items-center justify-center",
                                    children: [(0,
                                    s.jsx)(E, {
                                        duration: 6,
                                        delay: 3,
                                        size: 300,
                                        className: "from-transparent via-blue-500 to-transparent"
                                    }), (0,
                                    s.jsx)("div", {
                                        className: "flex gap-4",
                                        children: (0,
                                        s.jsxs)("div", {
                                            className: "p-1 relative rounded-xl",
                                            children: [(0,
                                            s.jsx)(E, {
                                                duration: 6,
                                                delay: 3,
                                                size: 100,
                                                className: "from-transparent via-blue-500 to-transparent"
                                            }), (0,
                                            s.jsxs)("div", {
                                                className: "p-3 relative rounded-xl bg-[rgba(59,67,88)]",
                                                children: [(0,
                                                s.jsx)(E, {
                                                    duration: 6,
                                                    delay: 3,
                                                    size: 100,
                                                    className: "from-transparent via-blue-500 to-transparent"
                                                }), (0,
                                                s.jsx)(r.P.div, {
                                                    animate: {
                                                        rotate: 360
                                                    },
                                                    transition: {
                                                        repeat: 1 / 0,
                                                        duration: 5,
                                                        ease: "linear"
                                                    },
                                                    className: "drop-shadow-[0_0_10px_#7586B4] filter",
                                                    children: (0,
                                                    s.jsx)(Z.A, {
                                                        className: "w-24 h-24 text-[#7586B4]"
                                                    })
                                                })]
                                            }), (0,
                                            s.jsx)("div", {
                                                className: "w-28 h-[1px] absolute -right-[107px] top-1/2 -translate-y-1/2 bg-[#7586B4]  shadow-[0_0_10px_#7586B4]"
                                            }), (0,
                                            s.jsx)("div", {
                                                className: "absolute -right-[95px] top-[calc(50%-14px)] -translate-y-1/2 text-[#7586B4] text-[10px] font-light",
                                                children: "Gen AI Powered"
                                            })]
                                        })
                                    }), (0,
                                    s.jsxs)("div", {
                                        className: "mt-4 space-y-2",
                                        children: [(0,
                                        s.jsx)("h3", {
                                            className: "text-[16px] text-white",
                                            children: "Marketing made Easier"
                                        }), (0,
                                        s.jsx)("p", {
                                            className: "text-sm text-gray-400",
                                            children: "Save time and simplify campaign management. Let automated workflows handle the heavy lifting, so you can focus on creativity."
                                        })]
                                    })]
                                })
                            }), (0,
                            s.jsx)(G, {
                                className: "flex-1 bg-gradient-to-br from-[#2E3139] to-[#1E2536] border-0 overflow-hidden relative group",
                                children: (0,
                                s.jsxs)(H, {
                                    className: "h-full relative p-6 flex flex-col gap-4 items-center justify-center",
                                    children: [(0,
                                    s.jsx)(E, {
                                        duration: 6,
                                        delay: 3,
                                        size: 300,
                                        className: "from-transparent via-blue-500 to-transparent"
                                    }), (0,
                                    s.jsxs)("div", {
                                        className: "flex gap-4",
                                        children: [(0,
                                        s.jsx)("div", {
                                            className: "p-1 relative rounded-xl",
                                            children: (0,
                                            s.jsx)("div", {
                                                className: "p-3 relative rounded-xl bg-[rgba(59,67,88)]",
                                                children: (0,
                                                s.jsx)(r.P.div, {
                                                    animate: {
                                                        y: [0, -10, 0]
                                                    },
                                                    transition: {
                                                        repeat: 1 / 0,
                                                        duration: 1.5,
                                                        ease: "easeInOut"
                                                    },
                                                    className: "drop-shadow-[0_0_10px_#7586B4] filter",
                                                    children: (0,
                                                    s.jsx)(K, {})
                                                })
                                            })
                                        }), (0,
                                        s.jsx)("div", {
                                            className: "w-[124px] h-[124px] flex items-center justify-center relative rounded-xl bg-[rgba(59,67,88)]",
                                            children: (0,
                                            s.jsx)(r.P.div, {
                                                animate: {
                                                    y: [0, -10, 0]
                                                },
                                                transition: {
                                                    repeat: 1 / 0,
                                                    duration: 1.5,
                                                    ease: "easeInOut"
                                                },
                                                className: "drop-shadow-[0_0_10px_#7586B4] filter",
                                                children: (0,
                                                s.jsx)(q, {})
                                            })
                                        })]
                                    }), (0,
                                    s.jsxs)("div", {
                                        className: "mt-4 space-y-2",
                                        children: [(0,
                                        s.jsx)("h3", {
                                            className: "text-[16px] text-white",
                                            children: "Smart Marketing Insights"
                                        }), (0,
                                        s.jsx)("p", {
                                            className: "text-sm text-gray-400",
                                            children: "Unlock actionable data to guide every decision. Stay ahead of trends, refine your strategies, and make confident moves with powerful analytics."
                                        })]
                                    })]
                                })
                            })]
                        }), (0,
                        s.jsx)(Y, {})]
                    })]
                })
            })
        }
        function Q(e) {
            let {children: t, title: a, text: r} = e;
            return (0,
            s.jsxs)("div", {
                className: "w-[350px] h-[300px] flex flex-col items-center gap-4 justify-center relative",
                children: [(0,
                s.jsxs)("div", {
                    className: "absolute inset-x-0 top-[50px] z-0 flex justify-center",
                    children: [(0,
                    s.jsx)("div", {
                        className: "absolute w-[300px] h-[200px] bg-[#5B698B]/40 opacity-80 blur-[80px]",
                        style: {
                            borderRadius: "50%"
                        }
                    }), (0,
                    s.jsx)("div", {
                        className: "absolute w-[300px] h-[150px] bg-[#5B698B]/50 opacity-80 blur-[100px]",
                        style: {
                            borderRadius: "50%"
                        }
                    })]
                }), (0,
                s.jsx)("div", {
                    className: "absolute top-0 left-[5%] w-[90%] h-[1px]",
                    style: {
                        background: "linear-gradient(to right, #0C0F16, #788DC5, #0C0F16)"
                    }
                }), (0,
                s.jsx)("div", {
                    className: "absolute bottom-0 left-[5%] w-[90%] h-[1px]",
                    style: {
                        background: "linear-gradient(to right, #0C0F16, #788DC5, #0C0F16)"
                    }
                }), (0,
                s.jsx)("div", {
                    className: "absolute left-0 top-[5%] h-[90%] w-[1px]",
                    style: {
                        background: "linear-gradient(to bottom, #0C0F16, #788DC5, #0C0F16)"
                    }
                }), (0,
                s.jsx)("div", {
                    className: "absolute right-0 top-[5%] h-[90%] w-[1px]",
                    style: {
                        background: "linear-gradient(to bottom, #0C0F16, #788DC5, #0C0F16)"
                    }
                }), (0,
                s.jsx)("div", {
                    className: "absolute top-0 left-1/2 w-[30px] h-[2px] bg-white -translate-x-1/2"
                }), (0,
                s.jsx)("div", {
                    className: "absolute bottom-0 left-1/2 w-[30px] h-[2px] bg-white -translate-x-1/2"
                }), (0,
                s.jsx)("div", {
                    className: "absolute left-0 top-1/2 w-[2px] h-[30px] bg-white -translate-y-1/2"
                }), (0,
                s.jsx)("div", {
                    className: "absolute right-0 top-1/2 w-[2px] h-[30px] bg-white -translate-y-1/2"
                }), (0,
                s.jsx)("div", {
                    className: "absolute top-[-8px] left-[-8px] w-[15px] h-[15px] bg-[#65749B] rounded-full flex items-center justify-center",
                    children: (0,
                    s.jsx)("div", {
                        className: "w-[5px] h-[5px] bg-[#2C354A] rounded-full"
                    })
                }), (0,
                s.jsx)("div", {
                    className: "absolute top-[-8px] right-[-8px] w-[15px] h-[15px] bg-[#65749B] rounded-full flex items-center justify-center",
                    children: (0,
                    s.jsx)("div", {
                        className: "w-[5px] h-[5px] bg-[#2C354A] rounded-full"
                    })
                }), (0,
                s.jsx)("div", {
                    className: "absolute bottom-[-8px] left-[-8px] w-[15px] h-[15px] bg-[#65749B] rounded-full flex items-center justify-center",
                    children: (0,
                    s.jsx)("div", {
                        className: "w-[5px] h-[5px] bg-[#2C354A] rounded-full"
                    })
                }), (0,
                s.jsx)("div", {
                    className: "absolute bottom-[-8px] right-[-8px] w-[15px] h-[15px] bg-[#65749B] rounded-full flex items-center justify-center",
                    children: (0,
                    s.jsx)("div", {
                        className: "w-[5px] h-[5px] bg-[#2C354A] rounded-full"
                    })
                }), t, (0,
                s.jsx)("p", {
                    className: "font-light text-[26px]",
                    children: a
                }), (0,
                s.jsx)("p", {
                    className: "w-[90%] text-sm text-center font-light",
                    children: r
                })]
            })
        }
        function $(e) {
            let {text: t, name: a} = e;
            return (0,
            s.jsxs)("div", {
                className: "w-[350px] h-[200px] rounded-xl flex flex-col items-start gap-6 justify-center p-4 relative",
                style: {
                    background: "linear-gradient(to bottom, #000000, #1a1a1a)"
                },
                children: [(0,
                s.jsx)(E, {
                    duration: 6,
                    delay: 3,
                    size: 200,
                    className: "from-transparent via-blue-500 to-transparent"
                }), (0,
                s.jsx)(E, {
                    duration: 6,
                    delay: 3,
                    size: 200,
                    className: "from-transparent via-blue-500 to-transparent"
                }), (0,
                s.jsx)("p", {
                    className: "text-gray-200 text-sm font-light",
                    children: t
                }), (0,
                s.jsx)("p", {
                    className: "text-start text-sm",
                    children: a
                })]
            })
        }
        function J() {
            let[e,t] = (0,
            i.useState)(!1)
              , [a,l] = (0,
            i.useState)({
                x: 0,
                y: 0
            })
              , [n,o] = (0,
            i.useState)(!1)
              , [c,d] = (0,
            i.useState)(!1)
              , [x,p] = (0,
            i.useState)(!1)
              , h = e => {
                let t = e.currentTarget.getBoundingClientRect();
                l({
                    x: e.clientX - t.left,
                    y: e.clientY - t.top
                })
            }
            ;
            return (0,
            s.jsxs)("div", {
                className: "relative min-h-screen w-full h-full flex flex-col items-center overflow-hidden",
                children: [(0,
                s.jsx)(C, {}), (0,
                s.jsx)("main", {
                    className: "relative pt-32 pb-16   container mx-auto px-4 z-10",
                    children: (0,
                    s.jsxs)(r.P.div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: .5
                        },
                        className: "text-center space-y-6 flex flex-col gap-8 items-center justify-center",
                        children: [(0,
                        s.jsx)(r.P.div, {
                            initial: {
                                opacity: 0,
                                scale: .9
                            },
                            animate: {
                                opacity: 1,
                                scale: 1
                            },
                            transition: {
                                delay: .2
                            },
                            className: "inline-block",
                            children: (0,
                            s.jsxs)("span", {
                                className: "relative px-4 py-2 rounded-xl flex flex-row gap-2 items-center bg-white/10 text-sm text-white/90 backdrop-blur-sm border border-white/10 overflow-hidden",
                                children: [(0,
                                s.jsx)(r.P.div, {
                                    className: "absolute top-0 w-[10px] h-full bg-blue-300 opacity-60 blur-md shadow-2xl",
                                    initial: {
                                        left: "-10%"
                                    },
                                    animate: {
                                        left: "110%"
                                    },
                                    transition: {
                                        repeat: 1 / 0,
                                        duration: 2,
                                        ease: "linear"
                                    }
                                }), (0,
                                s.jsx)(k.A, {
                                    className: "w-4 h-4 relative z-10"
                                }), (0,
                                s.jsx)("p", {
                                    className: "relative z-10",
                                    children: "TRANSFORM YOUR DIGITAL PRESENCE WITH AI AGENTS"
                                })]
                            })
                        }), (0,
                        s.jsx)(r.P.h1, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            transition: {
                                delay: .4
                            },
                            className: "text-8xl text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-white/50 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]",
                            children: (0,
                            s.jsx)(r.P.span, {
                                className: "text-[#d0d2d8] bp3:text-6xl text-8xl font-light relative flex space-x-1",
                                onHoverStart: () => t(!0),
                                onHoverEnd: () => t(!1),
                                children: "adTask.ai".split("").map( (t, a) => (0,
                                s.jsx)(r.P.span, {
                                    className: "inline-block ".concat("T" === t || "a" === t && 3 === a || "s" === t || "k" === t ? "font-semibold" : ""),
                                    animate: e ? {
                                        textShadow: "0px 0px 20px rgba(142, 146, 156, 1)",
                                        color: "#d9dbdf"
                                    } : {
                                        textShadow: "0px 0px 0px rgba(142, 146, 156, 0)",
                                        color: "white"
                                    },
                                    whileHover: {
                                        y: -5
                                    },
                                    transition: {
                                        duration: .2,
                                        ease: "easeInOut"
                                    },
                                    children: t
                                }, a))
                            })
                        }), (0,
                        s.jsx)(r.P.p, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            transition: {
                                delay: .6
                            },
                            className: "max-w-2xl mx-auto text-[15px] text-white",
                            children: "Stop struggling with marketing decisions. Our AI assistant analyzes your business, creates personalized strategies, and helps you execute them - all in real-time."
                        }), (0,
                        s.jsxs)(r.P.div, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            transition: {
                                delay: .8
                            },
                            className: "space-y-4 flex flex-col items-center justify-center",
                            children: [(0,
                            s.jsx)(I, {
                                className: "bg-gradient-to-b from-[rgb(91,105,139)] to-[#828282] px-6 font-extralight py-3 text-[16]",
                                children: "Start Free Trial"
                            }), (0,
                            s.jsx)("p", {
                                className: "text-sm text-white/50",
                                children: "Try AdTask AI free for 30 days"
                            })]
                        })]
                    })
                }), (0,
                s.jsxs)("div", {
                    className: "min-h-screen mt-32 w-full h-full flex flex-col items-center overflow-hidden relative bg-gradient-to-b from-[#040508] to-[#0C0F15]",
                    children: [(0,
                    s.jsxs)("div", {
                        className: "w-[70%]  relative flex items-center justify-center bg-black bp4:h-[400px] bp3:h-[350px] h-[600px] rounded-2xl overflow-hidden",
                        children: [(0,
                        s.jsx)(E, {
                            duration: 6,
                            size: 1e3,
                            className: "from-transparent via-red-500 to-transparent"
                        }), (0,
                        s.jsx)(E, {
                            duration: 6,
                            delay: 3,
                            size: 1e3,
                            className: "from-transparent via-blue-500 to-transparent"
                        }), (0,
                        s.jsx)(E, {
                            duration: 6,
                            size: 1e3,
                            className: "from-transparent via-red-500 to-transparent"
                        }), (0,
                        s.jsx)(E, {
                            duration: 6,
                            delay: 3,
                            size: 1e3,
                            className: "from-transparent via-blue-500 to-transparent"
                        }), (0,
                        s.jsxs)(r.P.span, {
                            className: "text-white bp4:text-5xl text-9xl font-light absolute z-0",
                            initial: {
                                textShadow: "0px 0px 0px rgba(91, 105, 139, 0)"
                            },
                            whileHover: {
                                textShadow: ["0px 0px 5px rgba(91, 105, 139, 0.5)", "0px 0px 15px rgba(91, 105, 139, 0.7)", "0px 0px 25px rgba(91, 105, 139, 1)", "0px 0px 40px rgba(91, 105, 139, 1)", "0px 0px 60px rgba(91, 105, 139, 1)"],
                                scale: 1.12,
                                transition: {
                                    duration: .2,
                                    ease: "easeInOut"
                                }
                            },
                            children: ["ad", (0,
                            s.jsx)("span", {
                                className: "font-semibold",
                                children: "Task"
                            }), ".ai"]
                        }), (0,
                        s.jsx)("div", {
                            className: "absolute inset-0 flex items-center justify-center z-10 bg-black/40 ",
                            children: (0,
                            s.jsx)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 16 16",
                                id: "Youtube",
                                className: "w-[16%] h-[16%] bp3:h-[8%] bp3:w-[8%] ",
                                children: (0,
                                s.jsxs)("g", {
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    fill: "#130101",
                                    className: "color000000 svgShape",
                                    children: [(0,
                                    s.jsx)("path", {
                                        fill: "#f43636",
                                        d: "M15.32 4.06c-.434-.772-.905-.914-1.864-.968C12.498 3.027 10.089 3 8.002 3c-2.091 0-4.501.027-5.458.091-.957.055-1.429.196-1.867.969C.23 4.831 0 6.159 0 8.497v.008c0 2.328.23 3.666.677 4.429.438.772.909.912 1.866.977.958.056 3.368.089 5.459.089 2.087 0 4.496-.033 5.455-.088.959-.065 1.43-.205 1.864-.977.451-.763.679-2.101.679-4.429v-.008c0-2.339-.228-3.667-.68-4.438z",
                                        className: "colorf44336 svgShape"
                                    }), (0,
                                    s.jsx)("path", {
                                        fill: "#fafafa",
                                        d: "M6 11.5v-6l5 3z",
                                        className: "colorfafafa svgShape"
                                    })]
                                })
                            })
                        })]
                    }), (0,
                    s.jsx)("div", {
                        className: "w-full mt-8",
                        children: (0,
                        s.jsx)(D, {})
                    })]
                }), (0,
                s.jsxs)("div", {
                    className: "min-h-screen w-full h-full flex flex-col z-0 items-center relative bg-gradient-to-b from-[#0C0F15] to-[#0C0F16]",
                    children: [(0,
                    s.jsxs)("div", {
                        className: "absolute inset-0 pointer-events-none",
                        children: [(0,
                        s.jsx)("div", {
                            className: "absolute left-1/2 top-[20px] -translate-x-1/2 w-[700px] h-[700px] bg-grid-black/[0.9] dark:bg-grid-white/[0.05] bg-[length:50px_50px]",
                            style: {
                                maskImage: "radial-gradient(circle, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 60%)",
                                WebkitMaskImage: "radial-gradient(circle, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 60%)"
                            }
                        }), (0,
                        s.jsxs)("div", {
                            className: "flex flex-col justify-center mt-14 items-center w-full",
                            children: [(0,
                            s.jsx)("p", {
                                className: "text-[16px] text-gray-200",
                                children: "Adtask AI works with: "
                            }), (0,
                            s.jsx)(T, {})]
                        })]
                    }), (0,
                    s.jsxs)("div", {
                        className: "flex mt-96 flex-col bg-transparent justify-center items-center w-full relative",
                        children: [(0,
                        s.jsx)("div", {
                            className: "absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-gradient-radial from-[#293249] to-transparent opacity-40 blur-3xl"
                        }), (0,
                        s.jsx)("div", {
                            className: "flex justify-center text-center bp1:mt-32 bp4:mt-44 mt-0 z-10",
                            children: (0,
                            s.jsx)(I, {
                                containerClassName: "rounded-full",
                                as: "button",
                                className: "dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2",
                                children: (0,
                                s.jsx)("span", {
                                    children: "Features"
                                })
                            })
                        }), (0,
                        s.jsxs)("div", {
                            className: "w-[70%] flex flex-col mt-8 items-center justify-center relative z-10",
                            children: [(0,
                            s.jsxs)("div", {
                                className: "absolute inset-x-0 top-[-50px] z-0 flex justify-center",
                                children: [(0,
                                s.jsx)("div", {
                                    className: "absolute w-[400px] h-[200px] bg-[#5B698B]/40 opacity-80 blur-[80px]",
                                    style: {
                                        borderRadius: "50%"
                                    }
                                }), (0,
                                s.jsx)("div", {
                                    className: "absolute w-[300px] h-[150px] bg-[#5B698B]/50 opacity-80 blur-[100px]",
                                    style: {
                                        borderRadius: "50%"
                                    }
                                })]
                            }), (0,
                            s.jsx)("p", {
                                className: "text-5xl bp3:text-xl bp4:text-3xl text-center font-light",
                                children: "Feature packed to Make"
                            }), (0,
                            s.jsxs)("div", {
                                className: "relative flex items-center w-full justify-center mt-1",
                                children: [(0,
                                s.jsx)("div", {
                                    className: "absolute -left-40 h-[1px] w-[30%] bg-gradient-to-l to-black from-[#8096D2]"
                                }), (0,
                                s.jsx)("div", {
                                    className: "absolute -right-40 h-[1px] w-[30%] bg-gradient-to-r to-black from-[#8096D2]"
                                })]
                            }), (0,
                            s.jsx)("p", {
                                className: "text-5xl  bp4:text-3xl bp3:text-xl text-center mt-2 bg-gradient-to-b from-[#8096D2] to-[#b7b9be] bg-clip-text text-transparent font-light leading-tight",
                                children: "Digital marketing easier and affordable"
                            })]
                        }), (0,
                        s.jsx)(X, {})]
                    }), (0,
                    s.jsxs)("div", {
                        className: "flex bp6:-mt-48 -mt-24 flex-col bg-transparent bg-gradient-to-b to-[#040508] from-[#0C0F15] justify-center items-center w-full relative",
                        children: [(0,
                        s.jsx)("div", {
                            className: "absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-gradient-radial from-[#293249] to-transparent opacity-40 blur-3xl"
                        }), (0,
                        s.jsx)("div", {
                            className: "flex justify-center text-center z-10",
                            children: (0,
                            s.jsx)(I, {
                                containerClassName: "rounded-full",
                                as: "button",
                                className: "dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2",
                                children: (0,
                                s.jsx)("span", {
                                    children: "Services"
                                })
                            })
                        }), (0,
                        s.jsxs)("div", {
                            className: "w-[70%] flex flex-col mt-8 items-center justify-center relative z-10",
                            children: [(0,
                            s.jsx)("p", {
                                className: " text-5xl bp3:text-xl bp4:text-3xl text-center font-light",
                                children: "Innovative Services"
                            }), (0,
                            s.jsxs)("div", {
                                className: "relative flex items-center w-full justify-center mt-1",
                                children: [(0,
                                s.jsx)("div", {
                                    className: "absolute -left-40 h-[1px] w-[40%] bg-gradient-to-l to-black from-[#8096D2]"
                                }), (0,
                                s.jsx)("div", {
                                    className: "absolute -right-40 h-[1px] w-[40%] bg-gradient-to-r to-black from-[#8096D2]"
                                })]
                            }), (0,
                            s.jsx)("p", {
                                className: "text-5xl bp3:text-xl bp4:text-3xl text-center mt-2 bg-gradient-to-b from-[#8096D2] to-[#b7b9be] bg-clip-text text-transparent font-light leading-tight",
                                children: "For Growth"
                            })]
                        }), (0,
                        s.jsxs)("div", {
                            className: "grid grid-cols-3 bp1:grid-cols-2 bp6:grid-cols-1 mt-14 gap-0 mb-10",
                            children: [(0,
                            s.jsx)(Q, {
                                title: "Smart Ad Targeting",
                                text: "AI-powered audience segmentation ensures your ads reach the right people, delivering higher ROI and maximum conversion rates.",
                                children: (0,
                                s.jsx)(z.A, {
                                    className: "w-20 h-20"
                                })
                            }), (0,
                            s.jsx)(Q, {
                                title: "Performance Analytics",
                                text: "Access real-time insights and track key metrics across all campaigns in one unified dashboard to quickly refine your strategies..",
                                children: (0,
                                s.jsx)(M.A, {
                                    className: "w-20 h-20"
                                })
                            }), (0,
                            s.jsx)(Q, {
                                title: "SEO Automation",
                                text: "Automate keyword research and content optimization suggestions to improve your search engine rankings with less effort.",
                                children: (0,
                                s.jsx)(L.A, {
                                    className: "w-20 h-20"
                                })
                            }), (0,
                            s.jsx)(Q, {
                                title: "Social Media Marketing",
                                text: "AI agents craft personalized content, schedule posts, monitor engagement, and refine strategies in real time for maximum impact.",
                                children: (0,
                                s.jsx)(S.A, {
                                    className: "w-20 h-20"
                                })
                            }), (0,
                            s.jsx)(Q, {
                                title: "Conversion Optimization",
                                text: "AI-driven A/B testing and automated tweaks to landing pages and funnels help you consistently improve conversion rates.",
                                children: (0,
                                s.jsx)(A.A, {
                                    className: "w-20 h-20"
                                })
                            }), (0,
                            s.jsx)(Q, {
                                title: "Campaign Automation",
                                text: "Centralize and streamline your ad management. Our intelligent engine automatically adjusts bids, budgets, and targeting to maximize results.",
                                children: (0,
                                s.jsx)(B.A, {
                                    className: "w-20 h-20"
                                })
                            })]
                        }), (0,
                        s.jsx)("div", {
                            className: "flex justify-center text-center bg-gradient-to-b from-[#040508] to-[#0C0F15] z-10",
                            children: (0,
                            s.jsx)(I, {
                                containerClassName: "rounded-full",
                                as: "button",
                                className: "dark:bg-black border-[1px] border-[#5A678A] bg-white text-black dark:text-white flex items-center space-x-2",
                                style: {
                                    background: "linear-gradient(to bottom, black, white)"
                                },
                                children: (0,
                                s.jsx)("span", {
                                    className: "text-xl font-light",
                                    children: "Contact us"
                                })
                            })
                        })]
                    }), (0,
                    s.jsxs)("div", {
                        className: "flex pt-32 flex-col bg-gradient-to-b from-[#040508] to-[#0C0F15] bg-transparent justify-center items-center w-full relative",
                        children: [(0,
                        s.jsx)("div", {
                            className: "absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-gradient-radial from-[#293249] to-transparent opacity-40 blur-3xl"
                        }), (0,
                        s.jsx)("div", {
                            className: "flex justify-center text-center z-10",
                            children: (0,
                            s.jsx)(I, {
                                containerClassName: "rounded-full",
                                as: "button",
                                className: "dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2",
                                children: (0,
                                s.jsx)("span", {
                                    children: "Services"
                                })
                            })
                        }), (0,
                        s.jsxs)("div", {
                            className: "w-[70%] flex flex-col mt-7  items-center justify-center relative z-10",
                            children: [(0,
                            s.jsxs)("div", {
                                className: "absolute inset-x-0 top-[-50px] z-0 flex justify-center",
                                children: [(0,
                                s.jsx)("div", {
                                    className: "absolute w-[400px] h-[200px] bg-[#5B698B]/40 opacity-80 blur-[80px]",
                                    style: {
                                        borderRadius: "50%"
                                    }
                                }), (0,
                                s.jsx)("div", {
                                    className: "absolute w-[300px] h-[150px] bg-[#5B698B]/50 opacity-80 blur-[100px]",
                                    style: {
                                        borderRadius: "50%"
                                    }
                                })]
                            }), (0,
                            s.jsx)("p", {
                                className: " text-5xl bp3:text-xl bp4:text-3xl text-center font-light",
                                children: "Trusted By"
                            }), (0,
                            s.jsxs)("div", {
                                className: "relative flex items-center w-full justify-center mt-1",
                                children: [(0,
                                s.jsx)("div", {
                                    className: "absolute -left-40 h-[1px] w-[50%] bg-gradient-to-l to-black from-[#8096D2]"
                                }), (0,
                                s.jsx)("div", {
                                    className: "absolute -right-40 h-[1px] w-[50%] bg-gradient-to-r to-black from-[#8096D2]"
                                })]
                            }), (0,
                            s.jsx)("p", {
                                className: "text-5xl bp3:text-xl bp4:text-3xl text-center mt-2 bg-gradient-to-b from-[#8096D2] to-[#b7b9be] bg-clip-text text-transparent font-light leading-tight",
                                children: "Satisfies Clients"
                            })]
                        }), (0,
                        s.jsx)("p", {
                            className: "text-sm font-light mt-8",
                            children: "Discover how we‘ve driven growth and innovation"
                        }), (0,
                        s.jsxs)("div", {
                            className: "grid grid-cols-3 bp1:grid-cols-2 bp6:grid-cols-1 mt-14 gap-4 mb-10",
                            children: [(0,
                            s.jsx)($, {
                                text: "We used to struggle with consistent branding across platforms. adTask’s unified dashboard ensures our message stays on point every single time",
                                name: "Brand Director at a Tech Startup"
                            }), (0,
                            s.jsx)($, {
                                text: "Unlock actionable data to guide every decision. Stay ahead of trends, refine your strategies, and make confident moves with powerful analytics.",
                                name: "Digital Strategist at a SaaS Company"
                            }), (0,
                            s.jsx)($, {
                                text: "adTask turned our complicated campaigns into a breeze. The built-in AI agents helped us reach exactly the customers we wanted—without guesswork!",
                                name: "Head of Growth at a Tech Startup"
                            }), (0,
                            s.jsx)($, {
                                text: "adTask made everything from campaign setup to performance tracking simple. Our team can now focus on creating great content rather than crunching numbers.",
                                name: "Social Media Lead at a Non-Profit Organization"
                            }), (0,
                            s.jsx)($, {
                                text: "We've tried other platforms before, but none delivered the depth of insights adTask offers. Our conversion rates are up by 35% since we signed on!",
                                name: "Ecommerce Manager at a Home D\xe9cor Brand"
                            }), (0,
                            s.jsx)($, {
                                text: "We've seen a 50% boost in engagement across our social channels since switching to adTask. Its AI-driven insights are game-changing!",
                                name: " Social Media Manager at a Fitness Brand"
                            })]
                        })]
                    }), (0,
                    s.jsxs)("div", {
                        className: "flex w-full mt-32 flex-col bg-gradient-to-b to-[#040508] from-[#0C0F15] bg-transparent justify-center items-center relative",
                        children: [(0,
                        s.jsx)("div", {
                            className: "absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-gradient-radial from-[#293249] to-transparent opacity-40 blur-3xl"
                        }), (0,
                        s.jsx)("div", {
                            className: "flex justify-center text-center z-10",
                            children: (0,
                            s.jsx)(I, {
                                containerClassName: "rounded-full",
                                as: "button",
                                className: "dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2",
                                children: (0,
                                s.jsx)("span", {
                                    children: "Contact us"
                                })
                            })
                        }), (0,
                        s.jsxs)("div", {
                            className: "w-[80%] mt-10  mb-10 gap-20 flex bp7:flex-col flex-row items-center justify-evenly",
                            children: [(0,
                            s.jsxs)("div", {
                                className: "flex  flex-col relative ",
                                children: [(0,
                                s.jsxs)("div", {
                                    className: "absolute inset-x-0 top-[-50px] z-0 flex  justify-center",
                                    children: [(0,
                                    s.jsx)("div", {
                                        className: "absolute w-[400px] h-[200px] bg-[#5B698B]/40 opacity-80 blur-[80px]",
                                        style: {
                                            borderRadius: "50%"
                                        }
                                    }), (0,
                                    s.jsx)("div", {
                                        className: "absolute w-[300px] h-[150px] bg-[#5B698B]/50 opacity-80 blur-[100px]",
                                        style: {
                                            borderRadius: "50%"
                                        }
                                    })]
                                }), (0,
                                s.jsx)("p", {
                                    className: "text-4xl font-light",
                                    children: "Ask whatever you have"
                                }), (0,
                                s.jsx)("p", {
                                    className: "text-4xl bg-gradient-to-b from-[#8096D2] to-[#b7b9be] bg-clip-text text-transparent font-light leading-tight",
                                    children: "In your Mind now"
                                }), (0,
                                s.jsx)("p", {
                                    className: "font-light text-sm mt-8",
                                    children: "Whether you have question or are ready to discuss your"
                                }), (0,
                                s.jsx)("p", {
                                    className: "font-light text-sm",
                                    children: "business, we're here to help reach out today!"
                                }), (0,
                                s.jsxs)("div", {
                                    className: "mt-8 flex flex-row gap-3 items-end",
                                    children: [(0,
                                    s.jsx)(_.A, {
                                        className: "w-6 h-6 text-[#8096D2]"
                                    }), (0,
                                    s.jsx)("p", {
                                        className: "font-light  text-sm",
                                        children: "contact@adtask.ai"
                                    })]
                                }), (0,
                                s.jsxs)("div", {
                                    className: "mt-8 flex flex-row gap-3 items-end",
                                    children: [(0,
                                    s.jsx)(y.A, {
                                        className: "w-6 h-6 text-[#8096D2]"
                                    }), (0,
                                    s.jsx)("p", {
                                        className: "font-light  text-sm",
                                        children: "(969) 819 8061"
                                    })]
                                }), (0,
                                s.jsxs)("div", {
                                    className: "mt-8 flex flex-row gap-3 items-end",
                                    children: [(0,
                                    s.jsx)(P.A, {
                                        className: "w-6 h-6 text-[#8096D2]"
                                    }), (0,
                                    s.jsx)("p", {
                                        className: "font-light  text-sm",
                                        children: "San Fransisco bay Area"
                                    })]
                                }), (0,
                                s.jsxs)("div", {
                                    className: "bp7:flex mt-8 hidden flex-col ",
                                    children: [(0,
                                    s.jsx)("p", {
                                        className: "font-light text-sm",
                                        children: "Name"
                                    }), (0,
                                    s.jsx)("input", {
                                        className: "w-[500px] bp7:w-[350px] text-sm pl-3 bg-transparent border-[1px] mt-2 h-[35px] text-white border-[#333B4F] rounded-md focus:outline-none focus:border-[#8096D2]",
                                        style: {
                                            zIndex: 50,
                                            position: "relative"
                                        }
                                    })]
                                }), (0,
                                s.jsxs)("div", {
                                    className: " bp7:flex mt-8 hidden flex-col",
                                    children: [(0,
                                    s.jsx)("p", {
                                        className: "font-light text-sm",
                                        children: "Email"
                                    }), (0,
                                    s.jsx)("input", {
                                        className: "w-[500px] bp7:w-[350px] text-sm pl-3 bg-transparent border-[1px] mt-2 h-[35px] text-white border-[#333B4F] rounded-md focus:outline-none focus:border-[#8096D2]",
                                        style: {
                                            zIndex: 50,
                                            position: "relative"
                                        }
                                    })]
                                }), (0,
                                s.jsxs)("div", {
                                    className: " bp7:flex  mt-8 hidden flex-col",
                                    children: [(0,
                                    s.jsx)("p", {
                                        className: "font-light text-sm",
                                        children: "Message"
                                    }), (0,
                                    s.jsx)("input", {
                                        className: "w-[500px] bp7:w-[350px] text-sm pl-3 bg-transparent border-[1px] mt-2 h-[100px] text-white border-[#333B4F] rounded-md focus:outline-none focus:border-[#8096D2]",
                                        style: {
                                            zIndex: 50,
                                            position: "relative"
                                        }
                                    })]
                                })]
                            }), (0,
                            s.jsxs)("div", {
                                className: "flex bp7:hidden  gap-4 flex-col  ",
                                children: [(0,
                                s.jsxs)("div", {
                                    className: "flex flex-col",
                                    children: [(0,
                                    s.jsx)("p", {
                                        className: "font-light text-sm",
                                        children: "Name"
                                    }), (0,
                                    s.jsx)("input", {
                                        className: "w-[500px] bp7:w-[350px] text-sm pl-3 bg-transparent border-[1px] mt-2 h-[35px] text-white border-[#333B4F] rounded-md focus:outline-none focus:border-[#8096D2]",
                                        style: {
                                            zIndex: 50,
                                            position: "relative"
                                        }
                                    })]
                                }), (0,
                                s.jsxs)("div", {
                                    className: "flex flex-col",
                                    children: [(0,
                                    s.jsx)("p", {
                                        className: "font-light text-sm",
                                        children: "Email"
                                    }), (0,
                                    s.jsx)("input", {
                                        className: "w-[500px] bp7:w-[350px] text-sm pl-3 bg-transparent border-[1px] mt-2 h-[35px] text-white border-[#333B4F] rounded-md focus:outline-none focus:border-[#8096D2]",
                                        style: {
                                            zIndex: 50,
                                            position: "relative"
                                        }
                                    })]
                                }), (0,
                                s.jsxs)("div", {
                                    className: "flex flex-col",
                                    children: [(0,
                                    s.jsx)("p", {
                                        className: "font-light text-sm",
                                        children: "Message"
                                    }), (0,
                                    s.jsx)("input", {
                                        className: "w-[500px] bp7:w-[350px] text-sm pl-3 bg-transparent border-[1px] mt-2 h-[100px] text-white border-[#333B4F] rounded-md focus:outline-none focus:border-[#8096D2]",
                                        style: {
                                            zIndex: 50,
                                            position: "relative"
                                        }
                                    })]
                                }), (0,
                                s.jsxs)(r.P.button, {
                                    className: "group relative w-[100px] border-[2px] border-[#5B698B] overflow-hidden rounded-full bg-gradient-to-b from-[rgb(91,105,139)] to-[#414040] px-2 py-2 text-white backdrop-blur-sm transition-colors hover:bg-[rgba(255,255,255,0.2)]",
                                    onMouseMove: h,
                                    onHoverStart: () => o(!0),
                                    onHoverEnd: () => o(!1),
                                    children: [(0,
                                    s.jsx)("span", {
                                        className: "relative z-10",
                                        children: "Submit"
                                    }), n && (0,
                                    s.jsx)(r.P.div, {
                                        className: "absolute inset-0 z-0",
                                        animate: {
                                            background: ["radial-gradient(40px circle at ".concat(a.x, "px ").concat(a.y, "px, rgba(255,255,255,0.2), transparent 50%)")]
                                        },
                                        transition: {
                                            duration: .15
                                        }
                                    })]
                                })]
                            })]
                        })]
                    }), (0,
                    s.jsxs)("div", {
                        className: "flex w-full pt-32 flex-col bg-gradient-to-b from-[#040508] to-[#0C0F15] bg-transparent justify-center items-center relative",
                        children: [(0,
                        s.jsxs)("div", {
                            className: "absolute inset-x-0 top-[-120px] z-0 flex justify-center",
                            children: [(0,
                            s.jsx)("div", {
                                className: "w-0 h-0 border-l-[300px] border-l-transparent border-r-[300px] border-r-transparent border-b-[600px] border-b-[#5B698B]/40 blur-[100px] opacity-50"
                            }), (0,
                            s.jsx)("div", {
                                className: "absolute top-[80px] w-0 h-0 border-l-[300px] border-l-transparent border-r-[300px] border-r-transparent border-b-[600px] border-b-[#5B698B]/50 blur-[120px] opacity-80"
                            })]
                        }), (0,
                        s.jsx)("div", {
                            className: "absolute inset-0 pointer-events-none",
                            children: (0,
                            s.jsx)("div", {
                                className: "absolute left-1/2 top-[20px] -translate-x-1/2 w-[700px] h-[700px] bg-grid-black/[0.15] dark:bg-grid-white/[0.2] bg-[length:50px_50px]",
                                style: {
                                    maskImage: "radial-gradient(circle, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 60%)",
                                    WebkitMaskImage: "radial-gradient(circle, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 60%)"
                                }
                            })
                        }), (0,
                        s.jsx)(r.P.h1, {
                            initial: {
                                opacity: .3
                            },
                            animate: {
                                opacity: .3
                            },
                            transition: {
                                delay: .4
                            },
                            className: "text-8xl text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-white/50 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]",
                            children: (0,
                            s.jsx)(r.P.span, {
                                className: "text-[#d0d2d8] bp6:text-5xl  text-8xl font-light relative flex space-x-1",
                                onHoverStart: () => t(!0),
                                onHoverEnd: () => t(!1),
                                children: "adTask.ai".split("").map( (t, a) => (0,
                                s.jsx)(r.P.span, {
                                    className: "inline-block ".concat("T" === t || "a" === t && 3 === a || "s" === t || "k" === t ? "font-semibold" : ""),
                                    animate: e ? {
                                        textShadow: "0px 0px 20px rgba(142, 146, 156, 1)",
                                        color: "#d9dbdf"
                                    } : {
                                        textShadow: "0px 0px 0px rgba(142, 146, 156, 0)",
                                        color: "white"
                                    },
                                    whileHover: {
                                        y: -5
                                    },
                                    transition: {
                                        duration: .2,
                                        ease: "easeInOut"
                                    },
                                    children: t
                                }, a))
                            })
                        }), (0,
                        s.jsxs)("div", {
                            className: "w-[70%] flex flex-col mt-16 items-center justify-center relative z-10",
                            children: [(0,
                            s.jsx)("p", {
                                className: "text-5xl text-center bp6:text-3xl",
                                children: "Are you ready to boost"
                            }), (0,
                            s.jsx)("p", {
                                className: "text-5xl text-center bp6:text-3xl mt-2 bg-gradient-to-b from-[#8096D2] to-[#b7b9be] bg-clip-text text-transparent leading-tight",
                                children: "your Digital Presence ?"
                            })]
                        }), (0,
                        s.jsxs)("div", {
                            className: "flex mt-14 flex-col gap-8 items-center w-full justify-center",
                            children: [(0,
                            s.jsxs)(r.P.button, {
                                className: "group relative font-light overflow-hidden border-[2px] border-[#5B698B] rounded-full bg-gradient-to-b from-black to-[rgb(65,64,64)] h-[43px] w-[191px] text-white backdrop-blur-sm transition-colors hover:bg-[rgba(0,0,0,0.30)]",
                                onMouseMove: h,
                                onHoverStart: () => d(!0),
                                onHoverEnd: () => d(!1),
                                children: [(0,
                                s.jsx)("span", {
                                    className: "relative z-10",
                                    children: "Start Free Trial"
                                }), c && (0,
                                s.jsx)(r.P.div, {
                                    className: "absolute inset-0 z-0",
                                    animate: {
                                        background: ["radial-gradient(40px circle at ".concat(a.x, "px ").concat(a.y, "px, rgba(255,255,255,0.15), transparent 50%)")]
                                    },
                                    transition: {
                                        duration: .15
                                    }
                                })]
                            }), (0,
                            s.jsxs)(r.P.button, {
                                className: "group relative border-[2px] font-light border-[#5B698B] overflow-hidden rounded-full bg-gradient-to-b from-[rgb(91,105,139)] to-[#414040] h-[43px] w-[191px] text-white backdrop-blur-sm transition-colors hover:bg-[rgba(255,255,255,0.2)]",
                                onMouseMove: h,
                                onHoverStart: () => p(!0),
                                onHoverEnd: () => p(!1),
                                children: [(0,
                                s.jsx)("span", {
                                    className: "relative z-10",
                                    children: "Schedule a Call"
                                }), x && (0,
                                s.jsx)(r.P.div, {
                                    className: "absolute inset-0 z-0",
                                    animate: {
                                        background: ["radial-gradient(40px circle at ".concat(a.x, "px ").concat(a.y, "px, rgba(255,255,255,0.2), transparent 50%)")]
                                    },
                                    transition: {
                                        duration: .15
                                    }
                                })]
                            })]
                        }), (0,
                        s.jsx)("div", {
                            className: "border-t-[#333B4F] w-[90%] border-[1px] mt-10 "
                        }), (0,
                        s.jsx)("footer", {
                            className: "w-full flex flex-row justify-center items-center py-10",
                            children: (0,
                            s.jsxs)("div", {
                                className: "flex flex-row w-[90%] justify-evenly bp2:flex-col-reverse bp2:items-center bp2:gap-8",
                                children: [(0,
                                s.jsxs)("div", {
                                    className: "flex flex-col items-center gap-4",
                                    children: [(0,
                                    s.jsxs)("h2", {
                                        className: "text-[#C5CDE3] bp3:text-5xl text-7xl font-light",
                                        children: ["ad", (0,
                                        s.jsx)("span", {
                                            className: "font-bold",
                                            children: "Task"
                                        }), ".ai"]
                                    }), (0,
                                    s.jsxs)("div", {
                                        className: "flex flex-row gap-3 items-end",
                                        children: [(0,
                                        s.jsx)(_.A, {
                                            className: "w-4 h-4 text-[#8096D2]"
                                        }), (0,
                                        s.jsx)("a", {
                                            href: "mailto:contact@adtask.ai",
                                            className: "font-light text-[#C5CDE3] hover:text-[#8096D2] transition-colors underline text-sm",
                                            children: "contact@adtask.ai"
                                        })]
                                    }), (0,
                                    s.jsxs)("div", {
                                        className: "flex flex-row gap-3 items-end",
                                        children: [(0,
                                        s.jsx)(P.A, {
                                            className: "w-4 h-4 text-[#8096D2]"
                                        }), (0,
                                        s.jsx)("p", {
                                            className: "font-light text-[#C5CDE3] text-sm",
                                            children: "San Francisco bay area"
                                        })]
                                    })]
                                }), (0,
                                s.jsxs)("div", {
                                    className: "flex flex-row gap-16 bp3:flex-col bp3:gap-8",
                                    children: [(0,
                                    s.jsxs)("div", {
                                        children: [(0,
                                        s.jsx)("h3", {
                                            className: "text-[#C5CDE3] text-2xl font-bold mb-4",
                                            children: "Utilities"
                                        }), (0,
                                        s.jsxs)("nav", {
                                            className: "flex flex-col text-gray-400 gap-1 items-center",
                                            children: [(0,
                                            s.jsx)("a", {
                                                href: "/",
                                                className: "hover:text-[#8096D2] transition-colors",
                                                children: "Home"
                                            }), (0,
                                            s.jsx)("a", {
                                                href: "/product",
                                                className: "hover:text-[#8096D2] transition-colors",
                                                children: "Product"
                                            }), (0,
                                            s.jsx)("a", {
                                                href: "/tools",
                                                className: "hover:text-[#8096D2] transition-colors",
                                                children: "Tools"
                                            }), (0,
                                            s.jsx)("a", {
                                                href: "/contact",
                                                className: "hover:text-[#8096D2] transition-colors",
                                                children: "Contact Us"
                                            })]
                                        })]
                                    }), (0,
                                    s.jsxs)("div", {
                                        children: [(0,
                                        s.jsx)("h3", {
                                            className: "text-[#C5CDE3] text-2xl font-bold mb-4",
                                            children: "Socials"
                                        }), (0,
                                        s.jsxs)("nav", {
                                            className: "flex flex-col text-gray-400 gap-1 items-center",
                                            children: [(0,
                                            s.jsx)("a", {
                                                href: "#",
                                                className: "hover:text-[#8096D2] transition-colors",
                                                children: "X"
                                            }), (0,
                                            s.jsx)("a", {
                                                href: "#",
                                                className: "hover:text-[#8096D2] transition-colors",
                                                children: "LinkedIn"
                                            }), (0,
                                            s.jsx)("a", {
                                                href: "#",
                                                className: "hover:text-[#8096D2] transition-colors",
                                                children: "Instagram"
                                            }), (0,
                                            s.jsx)("a", {
                                                href: "#",
                                                className: "hover:text-[#8096D2] transition-colors",
                                                children: "Facebook"
                                            })]
                                        })]
                                    })]
                                })]
                            })
                        })]
                    }), (0,
                    s.jsx)("div", {
                        className: "w-full flex justify-center text-gray-400 text-sm font-light mb-3 items-center",
                        children: (0,
                        s.jsx)("p", {
                            children: "All right reserved \xa9 2025 addTask"
                        })
                    })]
                })]
            })
        }
    }
}, e => {
    var t = t => e(e.s = t);
    e.O(0, [529, 449, 919, 358], () => t(8053)),
    _N_E = e.O()
}
]);
