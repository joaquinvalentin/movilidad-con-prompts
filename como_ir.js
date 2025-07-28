webpackJsonp([11], {
    114: function(n, l, e) {
        "use strict";
        e.d(l, "a", function() {
            return a
        });
        e(0);
        var t = this && this.__assign || Object.assign || function(n) {
            for (var l, e = 1, t = arguments.length; e < t; e++) {
                l = arguments[e];
                for (var a in l)
                    Object.prototype.hasOwnProperty.call(l, a) && (n[a] = l[a])
            }
            return n
        }
          , a = function() {
            function n() {}
            return n.prototype.logEvent = function(n, l) {
                return console.log("Ga4Service.logEvent(" + n + ")"),
                gtag("event", n, t({}, l, {
                    app_name: "ComoIr"
                })),
                Promise.resolve()
            }
            ,
            n.prototype.setScreenView = function(n) {
                return console.log("Ga4Service.setScreenView(" + n + ") ----"),
                gtag("event", "screen_view", {
                    app_name: "ComoIr",
                    screen_name: n
                }),
                Promise.resolve()
            }
            ,
            n
        }()
    },
    115: function(n, l, e) {
        "use strict";
        e.d(l, "a", function() {
            return t
        });
        e(0);
        var t = function() {
            function n() {
                this.hide = !1,
                this.width = 0,
                this.margin_left = 0,
                this.timer = 0,
                this.width = 0,
                this.margin_left = 0
            }
            return n.prototype.timeout = function() {
                this.width < 30 && 0 == this.margin_left ? this.width = this.width + 2 : this.margin_left < 94 ? (this.margin_left = this.margin_left + 2,
                this.width = this.margin_left + this.width + 1 <= 100 ? this.width + 1 : 100 - this.margin_left) : (this.margin_left = 0,
                this.width = 0)
            }
            ,
            n.prototype.ionViewWillLeave = function() {
                clearTimeout(this.timer)
            }
            ,
            n
        }()
    },
    116: function(n, l, e) {
        "use strict";
        e.d(l, "a", function() {
            return a
        });
        e(0);
        var t = e(1)
          , a = (e(8),
        function() {
            function n(n, l, e, a, i) {
                this.platform = n,
                this.modalCtrl = l,
                this.navParams = e,
                this.viewCtrl = a,
                this.cdr = i,
                this.items = null,
                this.allitems = null,
                this.selectedText = null,
                this.onChange = new t.l,
                this.onEvent = new t.l,
                this.md_selector = !1,
                this.ios_selector = !1,
                this.isModal = this.navParams.get("isModal"),
                this.isModal ? (this.modal_items = this.navParams.get("selected"),
                this.items = this.navParams.get("items"),
                this.check()) : this.selectedText = "",
                this.platform.is("ios") ? this.ios_selector = !0 : this.md_selector = !0
            }
            return l = n,
            n.prototype.open = function() {
                var n = this;
                if (!this.isModal) {
                    var e = []
                      , t = {};
                    for (var a in this.allitems) {
                        t[(i = this.allitems[a]).l] = {
                            c: i.c,
                            l: i.l
                        }
                    }
                    for (var a in this.items) {
                        var i;
                        t[(i = this.items[a]).l].checked = !0
                    }
                    for (var a in t)
                        e.push(t[a]);
                    return this.modal = this.modalCtrl.create(l, {
                        isModal: !0,
                        selected: e,
                        items: this.items
                    }, {
                        enableBackdropDismiss: !0,
                        cssClass: "im-selector-modal"
                    }),
                    this.modal.onDidDismiss(function(l) {
                        if (l) {
                            n.modal = null;
                            var e = [];
                            for (var t in l) {
                                var a = l[t];
                                a.checked && (delete a.checked,
                                e.push(a))
                            }
                            console.log("-----\x3e", e),
                            n.items = e,
                            n.onChange.next(n.items)
                        }
                    }),
                    this.modal.present()
                }
            }
            ,
            n.prototype.ngOnChanges = function() {
                console.log("items:", this.items),
                console.log("selectedText:", this.selectedText)
            }
            ,
            n.prototype.refresh = function() {
                this.cdr.detectChanges()
            }
            ,
            n.prototype.checkall = function(n) {
                console.log("checkall()", n, this.modal_items);
                var l = [];
                for (var e in this.modal_items)
                    l.push({
                        l: this.modal_items[e].l,
                        c: this.modal_items[e].c,
                        checked: !0
                    });
                this.modal_items = l,
                this.check()
            }
            ,
            n.prototype.checknone = function(n) {
                console.log("checknone()", n, this.modal_items);
                var l = [];
                for (var e in this.modal_items)
                    l.push({
                        l: this.modal_items[e].l,
                        c: this.modal_items[e].c
                    });
                this.modal_items = l,
                this.check()
            }
            ,
            n.prototype.toggle = function(n) {
                n.checked = !n.checked,
                this.check()
            }
            ,
            n.prototype.check = function() {
                var n = this
                  , l = !0;
                for (var e in this.modal_items)
                    this.modal_items[e].checked || (l = !1);
                this.todos = l,
                setTimeout(function(l) {
                    n.refresh()
                }, 50)
            }
            ,
            n.prototype.confirm = function() {
                console.log("confirm() button clicked"),
                this.isModal && (console.log("confirm()", this.modal_items),
                this.dontCancel = !0,
                this.viewCtrl.dismiss(this.modal_items))
            }
            ,
            n.prototype.cancel = function() {
                console.log("cancel()", this.dontCancel),
                this.dontCancel || this.isModal && (this.dontCancel = !0,
                this.viewCtrl.dismiss(!1))
            }
            ,
            n;
            var l
        }())
    },
    118: function(n, l, e) {
        "use strict";
        e.d(l, "a", function() {
            return t
        });
        e(0),
        e(8),
        e(231);
        var t = function() {
            return function() {}
        }()
    },
    119: function(n, l, e) {
        "use strict";
        e.d(l, "a", function() {
            return t
        });
        e(0),
        e(8);
        var t = function() {
            function n(n, l, e) {
                this.navParams = n,
                this.events = l,
                this.viewCtrl = e,
                this.horarioElegido = null,
                this.hora = null,
                this.tipoDia = null,
                this.confirmarIndicado = !1,
                this.horarioElegido = n.get("horarioElegido");
                var t = this.dateWithoffsetTimezone();
                if (this.horarioElegido) {
                    var a = this.horarioElegido.hora.HH;
                    i = this.horarioElegido.hora.mm;
                    t.setUTCHours(Number(a)),
                    t.setUTCMinutes(Number(i)),
                    this.hora = t.toISOString(),
                    this.tipoDia = this.horarioElegido.tipoDia
                } else {
                    var i = t.getMinutes()
                      , o = Math.trunc(i / 5);
                    t.setMinutes(i = 5 * o),
                    this.hora = t.toISOString(),
                    this.tipoDia = 0 == t.getDay() ? 3 : t.getDay() > 0 && t.getDay() < 6 ? 1 : 2
                }
            }
            return n.prototype.ionViewDidLoad = function() {}
            ,
            n.prototype.confirmar = function() {
                var n = null
                  , l = new Date(this.hora);
                n = {
                    hora: {
                        HH: l.getUTCHours(),
                        mm: l.getUTCMinutes()
                    },
                    tipoDia: this.tipoDia,
                    tipoDiaTexto: "1" == this.tipoDia ? "Hábiles" : "2" == this.tipoDia ? "Sábados" : "Domingos"
                },
                console.log("DATA:", n),
                this.viewCtrl.dismiss(n)
            }
            ,
            n.prototype.cancelar = function() {
                this.viewCtrl.dismiss()
            }
            ,
            n.prototype.dateWithoffsetTimezone = function() {
                var n = 6e4 * (new Date).getTimezoneOffset();
                return new Date(Date.now() - n)
            }
            ,
            n
        }()
    },
    120: function(n, l, e) {
        "use strict";
        e.d(l, "a", function() {
            return a
        });
        e(0);
        var t = e(228)
          , a = (e.n(t),
        e(8),
        function() {
            return function(n) {
                var l = this;
                this.events = n,
                this.onEvent = new t.Subject,
                this.events.subscribe("share:btn", function() {
                    l.onEvent.next({
                        name: "share:btn",
                        data: null
                    })
                }),
                this.events.subscribe("share:create-alert", function(n) {
                    l.onEvent.next({
                        name: "share:create-alert",
                        data: n
                    })
                }),
                this.events.subscribe("sidemenu:toggle", function() {
                    l.onEvent.next({
                        name: "sidemenu:toggle",
                        data: null
                    })
                }),
                this.events.subscribe("sidemenu:open-inbox", function() {
                    l.onEvent.next({
                        name: "sidemenu:open-inbox",
                        data: null
                    })
                }),
                this.events.subscribe("sidemenu:restore-map", function() {
                    l.onEvent.next({
                        name: "sidemenu:restore-map",
                        data: null
                    })
                }),
                this.events.subscribe("sidemenu:load-map", function() {
                    l.onEvent.next({
                        name: "sidemenu:load-map",
                        data: null
                    })
                }),
                this.events.subscribe("maputils:parada-seleccionada", function(n) {
                    l.onEvent.next({
                        name: "maputils:parada-seleccionada",
                        data: n
                    })
                }),
                this.events.subscribe("maputils:parada-desh-seleccionada", function(n) {
                    l.onEvent.next({
                        name: "maputils:parada-desh-seleccionada",
                        data: n
                    })
                }),
                this.events.subscribe("header:go-back", function(n) {
                    l.onEvent.next({
                        name: "header:go-back",
                        data: n
                    })
                }),
                this.events.subscribe("swipe:change", function(n) {
                    l.onEvent.next({
                        name: "swipe:change",
                        data: n
                    })
                }),
                this.events.subscribe("transporte:lineas-parada", function(n) {
                    l.onEvent.next({
                        name: "transporte:lineas-parada",
                        data: n
                    })
                }),
                this.events.subscribe("transporte:teorico-primera-vez", function(n) {
                    l.onEvent.next({
                        name: "transporte:teorico-primera-vez",
                        data: n
                    })
                }),
                this.events.subscribe("transporte:buses", function(n) {
                    l.onEvent.next({
                        name: "transporte:buses",
                        data: n
                    })
                }),
                this.events.subscribe("transporte:lineas-paradas-error", function(n) {
                    l.onEvent.next({
                        name: "transporte:lineas-paradas-error",
                        data: n
                    })
                }),
                this.events.subscribe("map:geolacate-error", function(n) {
                    l.onEvent.next({
                        name: "map:geolacate-error",
                        data: n
                    })
                }),
                this.events.subscribe("map-utils-geolocation-service:update-geolocation", function(n) {
                    l.onEvent.next({
                        name: "map:geolacate-update",
                        data: n
                    })
                }),
                this.events.subscribe("map:show-busdata", function() {
                    l.onEvent.next({
                        name: "map:show-busdata",
                        data: null
                    })
                }),
                this.events.subscribe("transporte:buses-error", function(n) {
                    l.onEvent.next({
                        name: "transporte:buses-error",
                        data: n
                    })
                }),
                this.events.subscribe("busesmodal:filtrar-lineas", function(n) {
                    l.onEvent.next({
                        name: "busesmodal:filtrar-lineas",
                        data: n
                    })
                }),
                this.events.subscribe("busesmodal:horario-real", function(n) {
                    l.onEvent.next({
                        name: "busesmodal:horario-real",
                        data: n
                    })
                }),
                this.events.subscribe("busesmodal:horario-teorico", function(n) {
                    l.onEvent.next({
                        name: "busesmodal:horario-teorico",
                        data: n
                    })
                }),
                this.events.subscribe("irenbusmodal:filtrar-lineas", function(n) {
                    l.onEvent.next({
                        name: "irenbusmodal:filtrar-lineas",
                        data: n
                    })
                }),
                this.events.subscribe("irenbusmodal:horario-real", function(n) {
                    l.onEvent.next({
                        name: "irenbusmodal:horario-real",
                        data: n
                    })
                }),
                this.events.subscribe("irenbusmodal:horario-teorico", function(n) {
                    l.onEvent.next({
                        name: "irenbusmodal:horario-teorico",
                        data: n
                    })
                }),
                this.events.subscribe("transporte:buses-recorrido", function(n) {
                    l.onEvent.next({
                        name: "transporte:buses-recorrido",
                        data: n
                    })
                }),
                this.events.subscribe("transporte:buses-recorrido-error", function(n) {
                    l.onEvent.next({
                        name: "transporte:buses-recorrido-error",
                        data: n
                    })
                }),
                this.events.subscribe("comoir:caminando", function(n) {
                    l.onEvent.next({
                        name: "comoir:caminando",
                        data: n
                    })
                }),
                this.events.subscribe("comoir:caminando-error", function(n) {
                    l.onEvent.next({
                        name: "comoir:caminando-error",
                        data: n
                    })
                }),
                this.events.subscribe("comoir:bus", function(n) {
                    l.onEvent.next({
                        name: "comoir:bus",
                        data: n
                    })
                }),
                this.events.subscribe("deeplink:no-data", function() {
                    l.onEvent.next({
                        name: "deeplink:no-data",
                        data: null
                    })
                }),
                this.events.subscribe("deeplink:data", function(n) {
                    l.onEvent.next({
                        name: "deeplink:data",
                        data: n
                    })
                }),
                this.events.subscribe("deeplink:data-parada", function(n) {
                    l.onEvent.next({
                        name: "deeplink:data-parada",
                        data: n
                    })
                }),
                this.events.subscribe("comoir:bus-error", function(n) {
                    l.onEvent.next({
                        name: "comoir:bus-error",
                        data: n
                    })
                }),
                this.events.subscribe("map:press", function(n) {
                    l.onEvent.next({
                        name: "map:press",
                        data: n
                    })
                })
            }
        }())
    },
    121: function(n, l, e) {
        "use strict";
        e.d(l, "a", function() {
            return t
        });
        e(0);
        var t = function() {
            return function() {
                this.prevOrigenDestinoSelected = null,
                this.mapCurrentState = null,
                this.inputDestino = "",
                this.inputOrigen = ""
            }
        }()
    },
    138: function(n, l, e) {
        "use strict";
        e.d(l, "a", function() {
            return t
        });
        e(0);
        var t = function() {
            function n() {}
            return n.prototype.transform = function(n, l) {
                return n.sort(function(n, l) {
                    return n.properties.ordinal < l.properties.ordinal ? -1 : n.properties.ordinal > l.properties.ordinal ? 1 : 0
                }),
                n
            }
            ,
            n
        }()
    },
    153: function(n, l, e) {
        "use strict";
        e.d(l, "a", function() {
            return i
        });
        e(0);
        var t = e(113)
          , a = (e.n(t),
        e(394))
          , i = function() {
            function n() {
                var n = a.defs ? a : a.default;
                t.proj.setProj4(n),
                n.defs("EPSG:32721", "+proj=utm +zone=21 +south +datum=WGS84 +units=m +no_defs"),
                t.proj.get("EPSG:32721") || console.error("Fallo al registrar projection EPSG:32721 en OpenLayers")
            }
            return n.prototype.transformSRIDToSRID = function(n, l, e, a) {
                return t.proj.transform([n, l], e, a)
            }
            ,
            n
        }()
    },
    156: function(n, l, e) {
        "use strict";
        e.d(l, "a", function() {
            return o
        });
        var t = e(0)
          , a = e(1)
          , i = e(26)
          , o = function() {
            function n(n, l) {
                this.http = n,
                this.envVariables = l,
                this.init()
            }
            return n.prototype.getGlobalStatus = function() {
                return this.data[0].color
            }
            ,
            n.prototype.init = function() {
                this.ready = !1,
                this.data = [],
                this.data.push({
                    name: "global",
                    color: "busdata-ok",
                    value: 100
                }),
                this.updateStatus()
            }
            ,
            n.prototype.updateStatus = function() {
                var n = this;
                this.http.get(this.envVariables.BUSES_STATUS_URL).toPromise().then(function(l) {
                    n.ready = !0;
                    for (var e, t = l.json(), a = 100, i = 0; i < t.length; i++)
                        e = Math.max(0, Math.min(100, t[i].valor)),
                        n.data.push({
                            value: e,
                            color: "busdata-ok",
                            name: t[i].empresa
                        }),
                        a = Math.min(e, a);
                    n.data[0].value = a;
                    for (var o in n.data)
                        (e = n.data[o].value) < 70 && (n.data[o].color = "busdata-green"),
                        e < 45 && (n.data[o].color = "busdata-yellow"),
                        e < 25 && (n.data[o].color = "busdata-red"),
                        n.data[o].value = e;
                    console.log("BusesStatusService: ", [t, n.data])
                })
            }
            ,
            n = Object(t.__decorate)([Object(t.__param)(1, Object(a.n)(i.a))], n)
        }()
    },
    157: function(n, l, e) {
        "use strict";
        e.d(l, "a", function() {
            return t
        });
        e(0),
        e(227),
        e(8);
        var t = function() {
            function n(n, l) {
                this.socialSharing = n,
                this.events = l,
                this.check()
            }
            return n.prototype.check = function() {
                var n = this;
                this.socialSharing.canShareViaEmail().then(function() {
                    n.ok = !0,
                    console.log("SocialSharingService.check()", "Sharing via email is possible")
                }).catch(function() {
                    n.ok = !1,
                    console.log("SocialSharingService.check()", "Sharing via email is NOT possible")
                })
            }
            ,
            n.prototype.share = function(n, l) {
                var e = this;
                return this.socialSharing.share("Compartiendo " + n + ":", "ComoIr App", "", l).catch(function(t) {
                    console.error("HAY QUE LEVANTAR UN ALERT CON EL LINK PARA SER COPIADO A MANO"),
                    e.events.publish("share:create-alert", {
                        what: n,
                        url: l
                    })
                })
            }
            ,
            n
        }()
    },
    160: function(n, l, e) {
        "use strict";
        function t(n) {
            return i._23(0, [(n()(),
            i._0(0, 0, null, null, 17, "ion-item", [["class", "item item-block"], ["im-ripple-effect", ""], ["role", "button"], ["style", "position: relative; overflow: hidden"], ["tappable", ""]], null, [[null, "click"]], function(n, l, e) {
                var t = !0;
                if ("click" === l) {
                    t = !1 !== n.component.toggle(n.context.$implicit) && t
                }
                return t
            }, o.b, o.a)), i.Z(1, 1097728, null, 3, r.a, [u.a, s.a, i.j, i.A, [2, c.a]], null, null), i._19(335544320, 1, {
                contentLabel: 0
            }), i._19(603979776, 2, {
                _buttons: 1
            }), i._19(603979776, 3, {
                _icons: 1
            }), i.Z(5, 16384, null, 0, d.a, [], null, null), i.Z(6, 16384, null, 0, p.a, [i.j, i.B], null, null), (n()(),
            i._21(-1, 2, ["\n                "])), (n()(),
            i._0(8, 0, null, 0, 1, "ion-icon", [["item-start", ""], ["name", "square-outline"], ["role", "img"]], [[8, "hidden", 0], [2, "hide", null]], null, null, null, null)), i.Z(9, 147456, [[3, 4]], 0, h.a, [s.a, i.j, i.A], {
                name: [0, "name"]
            }, null), (n()(),
            i._21(-1, 2, ["\n                "])), (n()(),
            i._0(11, 0, null, 0, 1, "ion-icon", [["item-start", ""], ["name", "checkbox-outline"], ["role", "img"]], [[8, "hidden", 0], [2, "hide", null]], null, null, null, null)), i.Z(12, 147456, [[3, 4]], 0, h.a, [s.a, i.j, i.A], {
                name: [0, "name"]
            }, null), (n()(),
            i._21(-1, 2, ["\n                "])), (n()(),
            i._0(14, 0, null, 1, 2, "ion-label", [], null, null, null, null, null)), i.Z(15, 16384, [[1, 4]], 0, m.a, [s.a, i.j, i.A, [8, null], [8, null], [8, null], [8, null]], null, null), (n()(),
            i._21(16, null, ["", ""])), (n()(),
            i._21(-1, 2, ["                \n            "]))], function(n, l) {
                n(l, 9, 0, "square-outline");
                n(l, 12, 0, "checkbox-outline")
            }, function(n, l) {
                n(l, 8, 0, l.context.$implicit.checked, i._12(l, 9)._hidden);
                n(l, 11, 0, !l.context.$implicit.checked, i._12(l, 12)._hidden);
                n(l, 16, 0, l.context.$implicit.l)
            })
        }
        function a(n) {
            return i._23(0, [(n()(),
            i._0(0, 0, null, null, 1, "div", [["class", "select-text"]], [[8, "hidden", 0]], null, null, null, null)), (n()(),
            i._21(1, null, ["", ""])), (n()(),
            i._21(-1, null, ["\n"])), (n()(),
            i._0(3, 0, null, null, 1, "div", [["class", "select-icon"]], [[8, "hidden", 0]], null, null, null, null)), (n()(),
            i._0(4, 0, null, null, 0, "div", [["class", "select-icon-inner"]], null, null, null, null, null)), (n()(),
            i._21(-1, null, ["\n"])), (n()(),
            i._0(6, 0, null, null, 6, "button", [["aria-disabled", "false"], ["aria-haspopup", "true"], ["class", "item-cover disable-hover item-cover-default"], ["ion-button", "item-cover"], ["type", "button"]], [[8, "hidden", 0]], [[null, "click"]], function(n, l, e) {
                var t = !0;
                if ("click" === l) {
                    t = !1 !== n.component.open() && t
                }
                return t
            }, _.b, _.a)), i.Z(7, 1097728, null, 0, f.a, [[8, "item-cover"], s.a, i.j, i.A], null, null), (n()(),
            i._21(-1, 0, ["\n    "])), (n()(),
            i._0(9, 0, null, 0, 0, "span", [["class", "button-inner"]], null, null, null, null, null)), (n()(),
            i._21(-1, 0, ["\n    "])), (n()(),
            i._0(11, 0, null, 0, 0, "div", [["class", "button-effect"]], null, null, null, null, null)), (n()(),
            i._21(-1, 0, ["\n"])), (n()(),
            i._21(-1, null, ["\n"])), (n()(),
            i._0(14, 0, null, null, 61, "div", [["class", "selector-fixed-container"]], [[8, "hidden", 0]], null, null, null, null)), (n()(),
            i._21(-1, null, ["\n    "])), (n()(),
            i._0(16, 0, null, null, 58, "div", [["class", "selector-container"]], null, null, null, null, null)), (n()(),
            i._21(-1, null, ["\n        "])), (n()(),
            i._0(18, 0, null, null, 32, "div", [["class", "header"]], null, null, null, null, null)), (n()(),
            i._21(-1, null, ["\n            "])), (n()(),
            i._0(20, 0, null, null, 4, "div", [["class", "left"]], null, null, null, null, null)), (n()(),
            i._21(-1, null, ["\n                "])), (n()(),
            i._0(22, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (n()(),
            i._21(-1, null, ["Líneas"])), (n()(),
            i._21(-1, null, ["\n            "])), (n()(),
            i._21(-1, null, ["\n            "])), (n()(),
            i._0(26, 0, null, null, 23, "div", [["class", "right"]], null, null, null, null, null)), (n()(),
            i._21(-1, null, ["\n                "])), (n()(),
            i._0(28, 0, null, null, 9, "button", [["ion-button", ""], ["small", ""]], [[8, "hidden", 0]], [[null, "click"]], function(n, l, e) {
                var t = !0;
                if ("click" === l) {
                    t = !1 !== n.component.checkall(e) && t
                }
                return t
            }, _.b, _.a)), i.Z(29, 1097728, null, 0, f.a, [[8, ""], s.a, i.j, i.A], {
                small: [0, "small"]
            }, null), (n()(),
            i._21(-1, 0, ["\n                    "])), (n()(),
            i._0(31, 0, null, 0, 1, "ion-icon", [["item-start", ""], ["name", "checkbox-outline"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), i.Z(32, 147456, null, 0, h.a, [s.a, i.j, i.A], {
                name: [0, "name"]
            }, null), (n()(),
            i._21(-1, 0, ["\n                    "])), (n()(),
            i._0(34, 0, null, 0, 2, "ion-label", [], null, null, null, null, null)), i.Z(35, 16384, null, 0, m.a, [s.a, i.j, i.A, [8, null], [8, null], [8, null], [8, null]], null, null), (n()(),
            i._21(-1, null, ["  todas "])), (n()(),
            i._21(-1, 0, ["\n                "])), (n()(),
            i._21(-1, null, ["\n                "])), (n()(),
            i._0(39, 0, null, null, 9, "button", [["ion-button", ""], ["small", ""]], [[8, "hidden", 0]], [[null, "click"]], function(n, l, e) {
                var t = !0;
                if ("click" === l) {
                    t = !1 !== n.component.checknone(e) && t
                }
                return t
            }, _.b, _.a)), i.Z(40, 1097728, null, 0, f.a, [[8, ""], s.a, i.j, i.A], {
                small: [0, "small"]
            }, null), (n()(),
            i._21(-1, 0, ["\n                    "])), (n()(),
            i._0(42, 0, null, 0, 1, "ion-icon", [["item-start", ""], ["name", "square-outline"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), i.Z(43, 147456, null, 0, h.a, [s.a, i.j, i.A], {
                name: [0, "name"]
            }, null), (n()(),
            i._21(-1, 0, ["\n                    "])), (n()(),
            i._0(45, 0, null, 0, 2, "ion-label", [], null, null, null, null, null)), i.Z(46, 16384, null, 0, m.a, [s.a, i.j, i.A, [8, null], [8, null], [8, null], [8, null]], null, null), (n()(),
            i._21(-1, null, ["  ninguna "])), (n()(),
            i._21(-1, 0, ["\n                "])), (n()(),
            i._21(-1, null, ["\n            "])), (n()(),
            i._21(-1, null, ["\n        "])), (n()(),
            i._21(-1, null, ["\n        "])), (n()(),
            i._0(52, 0, null, null, 4, "div", [["class", "options"]], null, null, null, null, null)), (n()(),
            i._21(-1, null, ["\n            "])), (n()(),
            i.V(16777216, null, null, 1, null, t)), i.Z(55, 802816, null, 0, g.j, [i.J, i.G, i.q], {
                ngForOf: [0, "ngForOf"]
            }, null), (n()(),
            i._21(-1, null, ["\n        "])), (n()(),
            i._21(-1, null, ["\n        "])), (n()(),
            i._0(58, 0, null, null, 15, "div", [["class", "buttons"]], null, null, null, null, null)), (n()(),
            i._21(-1, null, ["\n            "])), (n()(),
            i._0(60, 0, null, null, 5, "div", [["class", "left"]], null, null, null, null, null)), (n()(),
            i._21(-1, null, ["\n                "])), (n()(),
            i._0(62, 0, null, null, 2, "button", [["ion-button", ""], ["small", ""]], null, [[null, "click"]], function(n, l, e) {
                var t = !0;
                if ("click" === l) {
                    t = !1 !== n.component.cancel() && t
                }
                return t
            }, _.b, _.a)), i.Z(63, 1097728, null, 0, f.a, [[8, ""], s.a, i.j, i.A], {
                small: [0, "small"]
            }, null), (n()(),
            i._21(-1, 0, ["Cancelar"])), (n()(),
            i._21(-1, null, ["\n            "])), (n()(),
            i._21(-1, null, ["\n            "])), (n()(),
            i._0(67, 0, null, null, 5, "div", [["class", "right"]], null, null, null, null, null)), (n()(),
            i._21(-1, null, ["\n                "])), (n()(),
            i._0(69, 0, null, null, 2, "button", [["ion-button", ""], ["small", ""]], null, [[null, "click"]], function(n, l, e) {
                var t = !0;
                if ("click" === l) {
                    t = !1 !== n.component.confirm() && t
                }
                return t
            }, _.b, _.a)), i.Z(70, 1097728, null, 0, f.a, [[8, ""], s.a, i.j, i.A], {
                small: [0, "small"]
            }, null), (n()(),
            i._21(-1, 0, ["Confirmar"])), (n()(),
            i._21(-1, null, ["\n            "])), (n()(),
            i._21(-1, null, ["\n        "])), (n()(),
            i._21(-1, null, ["\n    "])), (n()(),
            i._21(-1, null, ["\n"]))], function(n, l) {
                var e = l.component;
                n(l, 29, 0, "");
                n(l, 32, 0, "checkbox-outline");
                n(l, 40, 0, "");
                n(l, 43, 0, "square-outline");
                n(l, 55, 0, e.modal_items);
                n(l, 63, 0, "");
                n(l, 70, 0, "")
            }, function(n, l) {
                var e = l.component;
                n(l, 0, 0, e.isModal);
                n(l, 1, 0, e.selectedText);
                n(l, 3, 0, e.isModal);
                n(l, 6, 0, e.isModal);
                n(l, 14, 0, !e.isModal);
                n(l, 28, 0, e.todos);
                n(l, 31, 0, i._12(l, 32)._hidden);
                n(l, 39, 0, !e.todos);
                n(l, 42, 0, i._12(l, 43)._hidden)
            })
        }
        e.d(l, "b", function() {
            return C
        }),
        l.c = a,
        e.d(l, "a", function() {
            return w
        });
        var i = e(1)
          , o = e(50)
          , r = e(19)
          , u = e(17)
          , s = e(3)
          , c = e(35)
          , d = e(41)
          , p = e(395)
          , h = e(45)
          , m = e(73)
          , _ = e(36)
          , f = e(22)
          , g = e(15)
          , v = e(116)
          , b = e(5)
          , y = e(68)
          , S = e(16)
          , P = e(6)
          , C = i.Y({
            encapsulation: 2,
            styles: [],
            data: {}
        })
          , w = i.W("im-selector", v.a, function(n) {
            return i._23(0, [(n()(),
            i._0(0, 0, null, null, 1, "im-selector", [], [[2, "select-md", null], [2, "select-ios", null]], null, null, a, C)), i.Z(1, 573440, null, 0, v.a, [b.a, y.a, S.a, P.a, i.g], null, null)], null, function(n, l) {
                n(l, 0, 0, i._12(l, 1).md_selector, i._12(l, 1).ios_selector)
            })
        }, {
            items: "items",
            allitems: "allitems",
            selectedText: "selectedText"
        }, {
            onChange: "onChange",
            onEvent: "onEvent"
        }, [])
    },
    161: function(n, l, e) {
        "use strict";
        e.d(l, "a", function() {
            return i
        });
        e(0),
        e(8);
        var t = e(56)
          , a = e(119)
          , i = function() {
            function n(n, l, e, a, i, o, r, u, s, c, d, p, h, m, _) {
                var f = this;
                this.navCtrl = n,
                this.navParams = l,
                this.modalCtrl = e,
                this.utilsService = a,
                this.header = i,
                this.events = o,
                this.dataService = r,
                this.zone = u,
                this.renderer = s,
                this.domCtrl = c,
                this.platform = d,
                this.element = p,
                this.mapsUtilsFiltroParadas = h,
                this.comoIr = m,
                this.mapService = _,
                this.busIcon = t.c,
                this.feature = null,
                this.buses = [],
                this.busesObservable = null,
                this.busesSinFiltrar = [],
                this.paradaid = null,
                this.selectedLineas = [],
                this.selectedLineasOptions = {
                    title: "Líneas",
                    subtitle: "Seleccione las que desea filtrar",
                    buttons: {
                        text: "Seleccionar todas",
                        handler: this.testButtonHandler
                    }
                },
                this.showSpinner = !1,
                this.primerosBuses = !0,
                this.lineas = [],
                this.modalElegirHorario = null,
                this.horarioElegido = null,
                this.horarioElegidoCombo = "ahora",
                this.horarioOptions = [],
                this.idBusSelected = null,
                this.idVarianteSelected = null,
                this.lineaSelected = null,
                this.bounceBack = !0,
                this.max_width_sm = 500,
                this.iphone_micro_header = 0,
                this.header_height = 80,
                this.header_height_sm = 51,
                this.footer_height = 70,
                this.footer_height_sm = 54,
                this.firstSwipe = !0,
                this.showFull = !1,
                this.swipeState = "swipe-middle",
                this.swiping = !1,
                this.events.subscribe("updateScreen", function() {
                    f.zone.run(function() {
                        console.log("force update the screen")
                    })
                }),
                this.init()
            }
            return n.prototype.testButtonHandler = function() {
                console.log("TEST PASS")
            }
            ,
            n.prototype.init = function() {
                this.events.publish("swipe:change", this.swipeState),
                this.showSpinner = !0,
                this.primerosBuses = !0,
                this.horarioOptionsToNormal()
            }
            ,
            n.prototype.filtrarBuses = function() {
                var n = this;
                console.log("filtrarBuses()", this.idBusSelected, this.idVarianteSelected, this.lineaSelected),
                this.busesSinFiltrar && this.busesSinFiltrar.length > 0 && (this.buses = this.busesSinFiltrar),
                this.selectedLineas && this.selectedLineas.length > 0 && this.busesSinFiltrar && this.busesSinFiltrar.length > 0 && (this.buses = [],
                this.selectedLineas.forEach(function(l) {
                    for (var e = 0; e < n.busesSinFiltrar.length; e++)
                        n.busesSinFiltrar[e].linea == l.l && n.buses.push(n.busesSinFiltrar[e])
                })),
                this.buses.sort(function(n, l) {
                    return n.minutos != l.minutos ? n.minutos - l.minutos : n.hora != l.hora ? n.hora - l.hora : void 0
                }),
                this.updateSelected()
            }
            ,
            n.prototype.updateSelected = function() {
                console.log("updateSelected()");
                var n = !0;
                for (var l in this.buses) {
                    if ((e = this.buses[l]).idBus == this.idBusSelected && e.variante == this.idVarianteSelected) {
                        n = !1,
                        console.log("updateSelected() - no hay cambios");
                        break
                    }
                }
                if (n)
                    for (var l in this.buses) {
                        if ((e = this.buses[l]).variante == this.idVarianteSelected) {
                            this.idBusSelected = e.idBus,
                            this.lineaSelected = e.linea,
                            n = !1,
                            console.log("updateSelected() - encontré otro con el mismo variante");
                            break
                        }
                    }
                if (n)
                    for (var l in this.buses) {
                        var e;
                        if ((e = this.buses[l]).linea == this.lineaSelected) {
                            this.idBusSelected = e.idBus,
                            this.idVarianteSelected = e.variante,
                            n = !1,
                            console.log("updateSelected() - encontré otro con la misma línea");
                            break
                        }
                    }
                n && (console.log("updateSelected() - DESELECCIONO PORQUE NO ENCONTRÉ OTRO"),
                this.eventSelectLinea(null, {
                    idBus: this.idBusSelected,
                    variante: this.idVarianteSelected
                }))
            }
            ,
            n.prototype.stopSpinners = function() {
                this.showSpinner = !1
            }
            ,
            n.prototype.updateBuses = function(n, l) {
                void 0 === l && (l = !1),
                console.log("updateBuses()", [n], l),
                l && !this.primerosBuses || (this.primerosBuses = !1,
                this.busesSinFiltrar = n.pasadas,
                this.filtrarBuses(),
                l || this.stopSpinners(),
                this.events.publish("updateScreen"))
            }
            ,
            n.prototype.setFeature = function(n) {
                this.feature = n,
                this.paradaid = this.feature.get("cod_ubic_parada")
            }
            ,
            n.prototype.setLineasParada = function(n) {
                var l = this;
                console.log("setLineasParada()", n),
                this.lineas = n,
                this.dataService.getFiltroParada(this.paradaid).then(function(n) {
                    if (n) {
                        var e = !1;
                        n.forEach(function(t) {
                            for (var a = !1, i = 0; i < l.lineas.length; i++)
                                if (l.lineas[i].c == t.c && l.lineas[i].l == t.l) {
                                    a = !0;
                                    break
                                }
                            a || (e = !0,
                            n.splice(n.indexOf(t), 1))
                        }),
                        e && (n.length > 0 ? l.dataService.setFiltroParada(l.paradaid, n) : l.dataService.removeFiltroParada(l.paradaid)),
                        n.length > 0 ? (l.selectedLineas = n,
                        l.events.publish("busesmodal:filtrar-lineas", n)) : l.selectedLineas = l.lineas.map(function(n) {
                            return n
                        })
                    } else
                        l.selectedLineas = l.lineas.map(function(n) {
                            return n
                        })
                }).then(function(n) {
                    l.updateTextSelectLineas()
                })
            }
            ,
            n.prototype.updateMapLineasSeleccionadas = function() {
                this.selectedLineas && this.selectedLineas.length > 0 && (this.showSpinner = !0,
                this.events.publish("busesmodal:filtrar-lineas", this.selectedLineas))
            }
            ,
            n.prototype.ionViewDidLoad = function() {}
            ,
            n.prototype.updateTextSelectLineas = function() {
                var n = "";
                if (this.selectedLineas && 0 != this.selectedLineas.length && this.selectedLineas.length != this.lineas.length)
                    for (var l = 0; l < this.selectedLineas.length; l++)
                        0 != l && (n += ", "),
                        n += this.selectedLineas[l].l;
                else
                    n = "Todas las líneas";
                console.log("updateTextSelectLineas()", n),
                this.textSelectedLineas = n
            }
            ,
            n.prototype.compareFn = function(n, l) {
                return n.c === l.c
            }
            ,
            n.prototype.changeSelectLineas = function(n) {
                console.log("changeSelectLineas()", n),
                this.filtrarBuses(),
                this.selectedLineas = n,
                n && 0 != n.length || (this.selectedLineas = this.lineas),
                this.horarioElegidoCombo && "ahora" == this.horarioElegidoCombo ? this.updateMapLineasSeleccionadas() : this.getHorariosTeoricos(),
                this.dataService.setFiltroParada(this.paradaid, this.selectedLineas),
                this.updateTextSelectLineas(),
                this.debug()
            }
            ,
            n.prototype.onChangeHora = function(n) {
                "elegir" == n || "cambiar" == n ? this.openElegirHorarioModal() : "ahora" == n ? this.horarioOptionsToNormal() : this.horarioOptionsToElegido()
            }
            ,
            n.prototype.horarioOptionsToNormal = function(n) {
                void 0 === n && (n = !0),
                this.horarioOptions = [{
                    value: "ahora",
                    text: "Ahora"
                }, {
                    value: "elegir",
                    text: "Elegir horario"
                }],
                this.horarioElegidoCombo = "ahora",
                n && (this.events.publish("busesmodal:horario-real", {
                    lineas: this.selectedLineas
                }),
                this.showSpinner = !0,
                this.buses = [])
            }
            ,
            n.prototype.getHorariosTeoricos = function() {
                var n = this.horarioElegido.hora.mm;
                n < 10 && (n = "0" + n),
                this.events.publish("busesmodal:horario-teorico", {
                    horario: {
                        hora: this.horarioElegido.hora.HH + ":" + n,
                        tipoDia: this.horarioElegido.tipoDia,
                        tipoDiaTexto: this.horarioElegido.tipoDiaTexto
                    },
                    lineas: this.selectedLineas
                })
            }
            ,
            n.prototype.horarioOptionsToElegido = function(n) {
                void 0 === n && (n = !0),
                n && (this.getHorariosTeoricos(),
                this.showSpinner = !0,
                this.buses = []),
                this.horarioOptions = [{
                    value: "ahora",
                    text: "Ahora"
                }, {
                    value: "cambiar",
                    text: "Cambiar hora"
                }, {
                    value: "elegido",
                    text: this.textSelectHorario()
                }],
                this.horarioElegidoCombo = "elegido"
            }
            ,
            n.prototype.openElegirHorarioModal = function() {
                var n = this;
                return this.modalElegirHorario = this.modalCtrl.create(a.a, this.horarioElegido ? {
                    horarioElegido: this.horarioElegido
                } : null, {
                    enableBackdropDismiss: !0
                }),
                this.modalElegirHorario.onDidDismiss(function(l) {
                    if (l) {
                        var e = !1;
                        n.horarioElegido && n.horarioElegido.hora.HH == l.hora.HH && n.horarioElegido.hora.mm == l.hora.mm && n.horarioElegido.tipoDia == l.tipoDia || (n.horarioElegido = l,
                        e = !0),
                        n.horarioOptionsToElegido(e)
                    } else
                        "cambiar" == n.horarioElegidoCombo ? n.horarioOptionsToElegido(!1) : n.horarioOptionsToNormal(!1)
                }),
                this.modalElegirHorario.present()
            }
            ,
            n.prototype.textSelectHorario = function() {
                var n = "Ahora";
                return "ahora" == this.horarioElegidoCombo || this.horarioElegido && (n = this.horarioElegido.hora.HH + ":" + (this.horarioElegido.hora.mm < 10 ? "0" : "") + this.horarioElegido.hora.mm + " (" + this.horarioElegido.tipoDiaTexto + ")"),
                n
            }
            ,
            n.prototype.ngAfterViewInit = function() {
                var n = this
                  , l = this.header_height
                  , e = this.platform.height() - this.footer_height
                  , t = .6 * this.platform.height();
                this.platform.width() < this.max_width_sm && (l = this.header_height_sm,
                e = this.platform.height() - this.footer_height_sm),
                this.platform.is("ios") && (l += this.iphone_micro_header),
                this.puntos = [{
                    threshold: 200,
                    top: l
                }, {
                    threshold: 200,
                    top: t
                }, {
                    threshold: 200,
                    top: e
                }];
                var a = new window.Hammer(this.element.nativeElement);
                a.get("pan").set({
                    direction: window.Hammer.DIRECTION_VERTICAL
                }),
                a.on("pan", function(l) {
                    n.ionicList.nativeElement.contains(l.target) || n.handlePan(l)
                })
            }
            ,
            n.prototype.fallBackToPoint = function(n) {
                var l = this;
                this.showFull = 0 == n,
                this.domCtrl.write(function() {
                    l.renderer.setElementStyle(l.element.nativeElement, "transition", "top 0.5s"),
                    l.renderer.setElementStyle(l.element.nativeElement, "top", l.puntos[n].top + "px"),
                    l.renderer.setElementClass(l.element.nativeElement, "full", l.showFull)
                });
                var e = this.swipeState;
                switch (n) {
                case 0:
                    this.swipeState = "swipe-top";
                    break;
                case 1:
                    this.swipeState = "swipe-middle";
                    break;
                case 2:
                    this.swipeState = "swipe-down";
                    break;
                default:
                    console.error("WTF???")
                }
                e != this.swipeState && this.events.publish("swipe:change", this.swipeState)
            }
            ,
            n.prototype.dragVertically = function(n) {
                var l = this;
                this.renderer.setElementStyle(this.element.nativeElement, "transition", "none"),
                n > this.puntos[0].top && n < this.puntos[this.puntos.length - 1].top && this.domCtrl.write(function() {
                    l.renderer.setElementStyle(l.element.nativeElement, "top", n + "px")
                })
            }
            ,
            n.prototype.handlePan = function(n) {
                var l, e = n.center.y, t = -1, a = 2 * this.platform.height();
                if (this.bounceBack && n.isFinal)
                    for (var i in this.puntos)
                        (l = Math.abs(this.puntos[i].top - e)) < a && (t = parseInt(i),
                        a = l);
                -1 != t ? this.fallBackToPoint(t) : "panup" !== n.additionalEvent && "pandown" !== n.additionalEvent || this.dragVertically(e)
            }
            ,
            n.prototype.calcularHora = function(n) {
                return this.utilsService.calcularHora(n)
            }
            ,
            n.prototype.debug = function() {
                console.log("this.textSelectedLineas", this.textSelectedLineas),
                console.log("this.lineas", this.lineas),
                console.log("this.selectedLineas", this.selectedLineas),
                console.log("this.selectedLineasOptions", this.selectedLineasOptions)
            }
            ,
            n.prototype.swipeBusModal = function(n, l) {
                var e = this;
                this.swiping || (this.swiping = !0,
                this.showFull = !this.showFull,
                this.firstSwipe && (this.firstSwipe = !1,
                this.showFull = !1),
                this.swiping && setTimeout(function() {
                    e.swiping = !1
                }, 250),
                l.preventDefault(),
                this.fallBackToPoint(this.showFull ? 0 : 2))
            }
            ,
            n.prototype.eventSelectLinea = function(n, l) {
                var e = this;
                console.log("Evento selectLinea", n, l),
                this.mapService.clearRecorridoYParadasVariante(),
                this.idBusSelected === l.idBus && this.idVarianteSelected === l.variante ? (this.idBusSelected = null,
                this.idVarianteSelected = null,
                this.lineaSelected = null) : (this.idBusSelected = l.idBus,
                this.idVarianteSelected = l.variante,
                this.lineaSelected = l.linea,
                this.mapsUtilsFiltroParadas.getSiguientesParadasRecorrido(l.variante, this.paradaid).then(function(n) {
                    if (console.log("PI", n),
                    n.length > 1) {
                        var t = -1
                          , a = 0
                          , i = 0;
                        for (i = 0; i < n.length; i++) {
                            var o = n[i];
                            o.properties.ordinal >= t && (t = o.properties.ordinal,
                            a = o.properties.cod_ubic_parada)
                        }
                        e.comoIr.comoirCortarRecorridoVariante({
                            variante: l.variante,
                            paradaOrigen: e.paradaid,
                            paradaDestino: a,
                            circular: l.circular
                        }).then(function(l) {
                            console.log("RECORRIDO", l),
                            e.mapService.setRecorridoYParadasVariante(l, n)
                        })
                    }
                }).catch(function(n) {
                    console.log("Error al obtener paradas del variante " + l.variante, n)
                }))
            }
            ,
            n
        }()
    },
    162: function(n, l, e) {
        "use strict";
        e.d(l, "a", function() {
            return r
        });
        e(0),
        e(8);
        var t = e(56)
          , a = e(89)
          , i = this && this.__awaiter || function(n, l, e, t) {
            return new (e || (e = Promise))(function(a, i) {
                function o(n) {
                    try {
                        u(t.next(n))
                    } catch (n) {
                        i(n)
                    }
                }
                function r(n) {
                    try {
                        u(t.throw(n))
                    } catch (n) {
                        i(n)
                    }
                }
                function u(n) {
                    n.done ? a(n.value) : new e(function(l) {
                        l(n.value)
                    }
                    ).then(o, r)
                }
                u((t = t.apply(n, l || [])).next())
            }
            )
        }
          , o = this && this.__generator || function(n, l) {
            function e(e) {
                return function(o) {
                    return function(e) {
                        if (t)
                            throw new TypeError("Generator is already executing.");
                        for (; r; )
                            try {
                                if (t = 1,
                                a && (i = a[2 & e[0] ? "return" : e[0] ? "throw" : "next"]) && !(i = i.call(a, e[1])).done)
                                    return i;
                                switch (a = 0,
                                i && (e = [0, i.value]),
                                e[0]) {
                                case 0:
                                case 1:
                                    i = e;
                                    break;
                                case 4:
                                    return r.label++,
                                    {
                                        value: e[1],
                                        done: !1
                                    };
                                case 5:
                                    r.label++,
                                    a = e[1],
                                    e = [0];
                                    continue;
                                case 7:
                                    e = r.ops.pop(),
                                    r.trys.pop();
                                    continue;
                                default:
                                    if (i = r.trys,
                                    !(i = i.length > 0 && i[i.length - 1]) && (6 === e[0] || 2 === e[0])) {
                                        r = 0;
                                        continue
                                    }
                                    if (3 === e[0] && (!i || e[1] > i[0] && e[1] < i[3])) {
                                        r.label = e[1];
                                        break
                                    }
                                    if (6 === e[0] && r.label < i[1]) {
                                        r.label = i[1],
                                        i = e;
                                        break
                                    }
                                    if (i && r.label < i[2]) {
                                        r.label = i[2],
                                        r.ops.push(e);
                                        break
                                    }
                                    i[2] && r.ops.pop(),
                                    r.trys.pop();
                                    continue
                                }
                                e = l.call(n, r)
                            } catch (n) {
                                e = [6, n],
                                a = 0
                            } finally {
                                t = i = 0
                            }
                        if (5 & e[0])
                            throw e[1];
                        return {
                            value: e[0] ? e[1] : void 0,
                            done: !0
                        }
                    }([e, o])
                }
            }
            var t, a, i, o, r = {
                label: 0,
                sent: function() {
                    if (1 & i[0])
                        throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: e(0),
                throw: e(1),
                return: e(2)
            },
            "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o
        }
          , r = function() {
            function n(n, l, e, t, a, i, o, r) {
                this.events = n,
                this.modalCtrl = l,
                this.ubicacionesService = e,
                this.favorites = t,
                this.element = a,
                this.alertCtrl = i,
                this.renderer = o,
                this.domCtrl = r,
                this.inputSpinner = !1,
                this.autocompleteClosed = !0,
                this.autocompleteFinished = !0,
                this.typeaheadModal = null,
                this.updateFavoritos()
            }
            return n.prototype.backToHome = function() {
                console.log("FavoritosPage.backToHome()"),
                this.autocompleteClosed || this.closeAutocomplete(),
                this.events.publish("nav:load-home")
            }
            ,
            n.prototype.updateFavoritos = function() {
                return i(this, void 0, void 0, function() {
                    var n;
                    return o(this, function(l) {
                        switch (l.label) {
                        case 0:
                            return n = this,
                            [4, this.favorites.getAllFavs()];
                        case 1:
                            return n.favs = l.sent(),
                            console.log("FavoritosPage.updateFavoritos()", [this.favs]),
                            [2]
                        }
                    })
                })
            }
            ,
            n.prototype.onFocus = function(n) {
                console.log("FavoritosPage.onFocus()", [n]),
                this.onInputChange()
            }
            ,
            n.prototype.onInputChange = function() {
                var n = this;
                console.log("FavoritosPage.onInputChange()", [this.inputFavorito]),
                this.inputSpinner = !1,
                this.autocompleteClosed = !1;
                var l = this.inputFavorito || "";
                this.typingTimer && clearTimeout(this.typingTimer),
                this.typingTimer = window.setTimeout(function() {
                    (l = n.inputFavorito || "").length > 2 && (n.inputSpinner = !0,
                    n.ubicacionesService.autocompleteAddress(l, !1).then(function(e) {
                        n.fillAutocomplete(l, e),
                        n.inputSpinner = !1
                    }))
                }, 1e3),
                this.lastFltroLength < 3 && l.length >= 3 ? (this.inputSpinner = !0,
                this.ubicacionesService.autocompleteAddress(l, !1).then(function(e) {
                    n.fillAutocomplete(l, e),
                    n.inputSpinner = !1
                })) : this.ubicacionesService.autocompleteAddress(l, !0).then(function(e) {
                    n.fillAutocomplete(l, e)
                }),
                this.lastFltroLength = l.length
            }
            ,
            n.prototype.fillAutocomplete = function(n, l) {
                var e = this;
                console.log("FavoritosPage.fillAutocomplete()", n, [l]),
                this.autocompleteClosed || (this.autocompleteFinished ? (this.autocompleteFinished = !1,
                this.autocompleteContent = [],
                this.favorites.getFilteredFavs(n).then(function(n) {
                    var a = {};
                    console.log("FAVS", [n]),
                    n.map(function(n) {
                        n.fav = "yes",
                        n.icon = t.a + "icono_" + n.tipo + ".png",
                        a[n.text] = !0
                    });
                    for (var i in l) {
                        var o = l[i];
                        if (!a[o.nombre]) {
                            var r = o.descTipo;
                            o.descSubtipo && (r = o.descSubtipo),
                            r = r.split(" ").join("_");
                            var u = "no";
                            "VIA" == o.descTipo && (u = "usetext"),
                            e.autocompleteContent.push({
                                icon: t.a + "icono_" + r + ".png",
                                text: o.nombre,
                                fav: u,
                                data: o
                            })
                        }
                    }
                    0 == e.autocompleteContent.length && e.autocompleteContent.push({
                        icon: "none",
                        text: "No se encontraron resultados",
                        fav: "none",
                        data: {},
                        codigo: -2
                    }),
                    e.autocompleteFinished = !0,
                    e.updateTypeahead()
                })) : console.log("this.autocompleteFinished: ", this.autocompleteFinished))
            }
            ,
            n.prototype.updateTypeahead = function() {
                var n = this;
                return console.log("FavoritosPage.updateTypeahead()"),
                this.autocompleteClosed ? (null != this.typeaheadModal && (this.typeaheadModal.dismiss(),
                this.typeaheadModal = null),
                Promise.resolve()) : this.typeaheadModal ? (this.typeaheadModal && this.typeaheadModal.overlay && this.typeaheadModal.overlay.instance && this.typeaheadModal.overlay.instance.setDatos(this.autocompleteContent, this.getCurrentOffset(), this),
                Promise.resolve()) : (this.typeaheadModal = this.modalCtrl.create(a.a, null, {
                    cssClass: "typeahead"
                }),
                this.typeaheadModal.present({
                    keyboardClose: !1
                }).then(function(l) {
                    n.typeaheadModal.onDidDismiss(function() {
                        n.closeAutocomplete()
                    }),
                    n.typeaheadModal.overlay.instance.setDatos(n.autocompleteContent, n.getCurrentOffset(), n),
                    n.autoFocus(),
                    setTimeout(function() {
                        n.autoFocus()
                    }, 10),
                    setTimeout(function() {
                        n.autoFocus()
                    }, 200)
                }))
            }
            ,
            n.prototype.getCurrentOffset = function() {
                console.log("FavoritosPage.getCurrentOffset()");
                var n = this.input.nativeElement
                  , l = n.offsetHeight + n.parentNode.offsetTop + 20;
                return console.log("getCurrentOffset()", l, n.offsetHeight, n.parentNode.offsetTop),
                l
            }
            ,
            n.prototype.autoFocus = function() {
                console.log("FavoritosPage.autoFocus()"),
                this.input.nativeElement.focus()
            }
            ,
            n.prototype.editFavorite = function(n, l) {
                var e = this;
                console.log("FavoritosPage.closeAutocomplete()", [l]),
                this.askForName(l.label || l.text).then(function(t) {
                    return l.label = t,
                    e.switchFavorite(n, l, "yes")
                }).catch(function(n) {
                    return console.error(n)
                })
            }
            ,
            n.prototype.deleteFavorite = function(n, l) {
                var e = this;
                console.log("FavoritosPage.deleteFavorite()", [l]),
                this.askDeleteConfirmation(l.label || l.text).then(function(t) {
                    return e.switchFavorite(n, l, "no")
                }).catch(function(n) {
                    return console.error(n)
                })
            }
            ,
            n.prototype.closeAutocomplete = function() {
                var n = this;
                console.log("FavoritosPage.closeAutocomplete()"),
                this.autocompleteContent = [],
                this.autocompleteClosed = !0,
                this.updateTypeahead().then(function(l) {
                    return setTimeout(function(l) {
                        return n.updateFavoritos()
                    }, 100)
                })
            }
            ,
            n.prototype.switchFavorite = function(n, l, e) {
                var t = this;
                console.log("FavoritosPage.switchFavorite()", [n, l]),
                "hidden" != l.fav && (n.stopPropagation(),
                "yes" == l.fav && "no" == e ? this.favorites.removeFav(l).then(function(n) {
                    return t.closeAutocomplete()
                }) : "no" == l.fav && "yes" == e ? this.favorites.addFav(l).then(function(n) {
                    return t.closeAutocomplete()
                }) : "yes" == l.fav && "yes" == e && this.favorites.updateFav(l).then(function(n) {
                    return t.closeAutocomplete()
                }))
            }
            ,
            n.prototype.useTextOfAutocomplete = function(n, l) {
                console.log("FavoritosPage.useTextOfAutocomplete()", arguments),
                console.assert(l.data.descTipo),
                this.inputFavorito = l.text + " ",
                this.autoFocus()
            }
            ,
            n.prototype.onEntrySelected = function(n, l, e) {
                console.log("FavoritosPage.onEntrySelected() NOT IMPLEMENTED", arguments),
                this.typeaheadModal && this.typeaheadModal.overlay && this.typeaheadModal.overlay.instance ? this.typeaheadModal.overlay.instance.onEntryRightIconPressed(n, l) : (console.error("this.typeaheadModal", this.typeaheadModal),
                console.error("this.typeaheadModal.overlay", this.typeaheadModal.overlay),
                console.error("this.typeaheadModal.overlay.instance", this.typeaheadModal.overlay.instance))
            }
            ,
            n.prototype.askForName = function(n) {
                return i(this, void 0, void 0, function() {
                    var l = this;
                    return o(this, function(e) {
                        return console.log("FavoritesService.askForName()", [n]),
                        [2, new Promise(function(e, t) {
                            l.alertCtrl.create({
                                title: "Agregar Favorito",
                                cssClass: "fav-alert",
                                inputs: [{
                                    name: "label",
                                    placeholder: "Nombre",
                                    value: n
                                }],
                                buttons: [{
                                    text: "Cancelar",
                                    role: "cancel",
                                    handler: t
                                }, {
                                    text: "Aceptar",
                                    handler: function(n) {
                                        e(n.label)
                                    }
                                }]
                            }).present().then(function() {
                                l.domCtrl.write(function() {
                                    var n = l.element.nativeElement.parentNode.parentNode.parentNode.querySelector("ion-alert .alert-wrapper input");
                                    l.renderer.invokeElementMethod(n, "select", [])
                                })
                            })
                        }
                        )]
                    })
                })
            }
            ,
            n.prototype.askDeleteConfirmation = function(n) {
                return i(this, void 0, void 0, function() {
                    var l = this;
                    return o(this, function(e) {
                        return console.log("FavoritesService.askDeleteConfirmation()", [n]),
                        [2, new Promise(function(e, t) {
                            l.alertCtrl.create({
                                title: "Borrar Favorito",
                                message: n,
                                cssClass: "fav-alert",
                                buttons: [{
                                    text: "Cancelar",
                                    role: "cancel",
                                    handler: t
                                }, {
                                    text: "Aceptar",
                                    handler: function(n) {
                                        e(!0)
                                    }
                                }]
                            }).present()
                        }
                        )]
                    })
                })
            }
            ,
            n
        }()
    },
    163: function(n, l, e) {
        "use strict";
        e.d(l, "a", function() {
            return t
        });
        e(0),
        e(8);
        var t = function() {
            function n(n, l) {
                this.events = n,
                this.menuCtrl = l
            }
            return n.prototype.menuToggle = function() {
                console.log("menuToggle()"),
                this.menuCtrl.toggle("leftMenu")
            }
            ,
            n.prototype.closeModal = function() {
                console.log("closeModal()"),
                this.events.publish("sidemenu:restore-map")
            }
            ,
            n
        }()
    },
    164: function(n, l, e) {
        "use strict";
        e.d(l, "a", function() {
            return t
        });
        e(0),
        e(8);
        var t = function() {
            function n(n, l, e, t, a, i, o) {
                this.element = n,
                this.renderer = l,
                this.domCtrl = e,
                this.navCtrl = t,
                this.navParams = a,
                this.platform = i,
                this.events = o,
                this.camino = null,
                this.largo = null,
                this.bounceBack = !0,
                this.max_width_sm = 500,
                this.iphone_micro_header = 0,
                this.header_height = 150,
                this.header_height_sm = 97,
                this.footer_height = 70,
                this.footer_height_sm = 54,
                this.showFull = !1,
                this.swipeState = "swipe-down",
                this.swiping = !1,
                this.camino = a.get("camino"),
                this.largo = a.get("largo"),
                this.events.publish("swipe:change", this.swipeState)
            }
            return n.prototype.ionViewDidLoad = function() {}
            ,
            n.prototype.setCaminoYLargo = function(n, l) {
                this.camino = n,
                this.largo = l
            }
            ,
            n.prototype.ngAfterViewInit = function() {
                var n = this
                  , l = this.header_height
                  , e = this.platform.height() - this.footer_height
                  , t = .6 * this.platform.height();
                this.platform.width() < this.max_width_sm && (l = this.header_height_sm,
                e = this.platform.height() - this.footer_height_sm),
                this.platform.is("ios") && (l += this.iphone_micro_header),
                this.puntos = [{
                    threshold: 200,
                    top: l
                }, {
                    threshold: 200,
                    top: t
                }, {
                    threshold: 200,
                    top: e
                }];
                var a = new window.Hammer(this.element.nativeElement);
                a.get("pan").set({
                    direction: window.Hammer.DIRECTION_VERTICAL
                }),
                a.on("pan", function(l) {
                    n.ionicList.nativeElement.contains(l.target) || n.handlePan(l)
                })
            }
            ,
            n.prototype.fallBackToPoint = function(n) {
                var l = this;
                this.showFull = 0 == n,
                this.domCtrl.write(function() {
                    l.renderer.setElementStyle(l.element.nativeElement, "transition", "top 0.5s"),
                    l.renderer.setElementStyle(l.element.nativeElement, "top", l.puntos[n].top + "px"),
                    l.renderer.setElementClass(l.element.nativeElement, "full", l.showFull)
                });
                var e = this.swipeState;
                switch (n) {
                case 0:
                    this.swipeState = "swipe-top";
                    break;
                case 1:
                    this.swipeState = "swipe-middle";
                    break;
                case 2:
                    this.swipeState = "swipe-down";
                    break;
                default:
                    console.error("WTF???")
                }
                e != this.swipeState && this.events.publish("swipe:change", this.swipeState)
            }
            ,
            n.prototype.dragVertically = function(n) {
                var l = this;
                this.renderer.setElementStyle(this.element.nativeElement, "transition", "none"),
                n > this.puntos[0].top && n < this.puntos[this.puntos.length - 1].top && this.domCtrl.write(function() {
                    l.renderer.setElementStyle(l.element.nativeElement, "top", n + "px")
                })
            }
            ,
            n.prototype.handlePan = function(n) {
                var l, e = n.center.y, t = -1, a = 2 * this.platform.height();
                if (this.bounceBack && n.isFinal)
                    for (var i in this.puntos)
                        (l = Math.abs(this.puntos[i].top - e)) < a && (t = parseInt(i),
                        a = l);
                -1 != t ? this.fallBackToPoint(t) : "panup" !== n.additionalEvent && "pandown" !== n.additionalEvent || this.dragVertically(e)
            }
            ,
            n.prototype.swipeBusModal = function(n, l) {
                var e = this;
                this.swiping || (this.swiping = !0,
                this.showFull = !this.showFull,
                this.swiping && setTimeout(function() {
                    e.swiping = !1
                }, 250),
                l.preventDefault(),
                this.fallBackToPoint(this.showFull ? 0 : 2))
            }
            ,
            n
        }()
    },
    165: function(n, l, e) {
        "use strict";
        e.d(l, "a", function() {
            return t
        });
        e(0),
        e(8);
        var t = function() {
            function n(n, l, e, t, a) {
                this.navCtrl = n,
                this.navParams = l,
                this.viewCtrl = e,
                this.mapService = t,
                this.events = a,
                this.origen = "",
                this.destino = "",
                this.pasadaConRecorrido = null,
                this.showSpinner = !0,
                this.tiempoTotalViaje1 = null,
                this.tiempoTotalViaje2 = null,
                this.caminata_2 = [],
                this.caminata_3 = [],
                this.pasadaConRecorrido = this.navParams.get("pasadaConRecorrido"),
                this.destino = this.navParams.get("destino"),
                this.origen = this.navParams.get("origen");
                var i = this.navParams.get("tiempoTotalViaje1");
                i && (this.tiempoTotalViaje1 = i),
                this.paradasIntermedias1 = this.mapService.getParadasIntermediasDirecto(),
                this.pasadaConRecorrido.recorrido.ruta.trasbordo && (this.paradasIntermedias2 = this.mapService.getParadasIntermediasTrasbordo());
                var o = this.navParams.get("tiempoTotalViaje2");
                o && (this.tiempoTotalViaje2 = o),
                this.updateCaminatas()
            }
            return n.prototype.share = function() {
                this.events.publish("share:btn", {})
            }
            ,
            n.prototype.cerrar = function() {
                this.viewCtrl.dismiss()
            }
            ,
            n.prototype.ionViewDidLoad = function() {}
            ,
            n.prototype.updatePasada = function(n) {
                this.pasadaConRecorrido = n,
                console.log("updatePasada()", this.pasadaConRecorrido)
            }
            ,
            n.prototype.updateCaminatas = function() {
                this.caminata_3 = [],
                this.caminata_2 = [],
                this.pasadaConRecorrido.recorrido.ruta.trasbordo ? (this.caminata_2 = this.pasadaConRecorrido.recorrido.ruta.trasbordo.caminarTrasbordo.camino,
                this.caminata_3 = this.pasadaConRecorrido.recorrido.ruta.trasbordo.caminarLlegada.camino) : this.caminata_2 = this.pasadaConRecorrido.recorrido.ruta.directo.caminarLlegada.camino
            }
            ,
            n
        }()
    },
    166: function(n, l, e) {
        "use strict";
        e(0),
        e(1),
        e(8);
        e.d(l, "a", function() {
            return t
        });
        var t = function() {
            return function() {}
        }()
    },
    167: function(n, l, e) {
        "use strict";
        e(0),
        e(1),
        e(8);
        e.d(l, "a", function() {
            return t
        });
        var t = function() {
            return function() {}
        }()
    },
    168: function(n, l, e) {
        "use strict";
        e.d(l, "a", function() {
            return _
        });
        var t = e(0)
          , a = e(1)
          , i = (e(8),
        e(155),
        e(56))
          , o = e(26)
          , r = e(89)
          , u = e(161)
          , s = e(164)
          , c = e(169)
          , d = e(163)
          , p = e(228)
          , h = (e.n(p),
        this && this.__awaiter || function(n, l, e, t) {
            return new (e || (e = Promise))(function(a, i) {
                function o(n) {
                    try {
                        u(t.next(n))
                    } catch (n) {
                        i(n)
                    }
                }
                function r(n) {
                    try {
                        u(t.throw(n))
                    } catch (n) {
                        i(n)
                    }
                }
                function u(n) {
                    n.done ? a(n.value) : new e(function(l) {
                        l(n.value)
                    }
                    ).then(o, r)
                }
                u((t = t.apply(n, l || [])).next())
            }
            )
        }
        )
          , m = this && this.__generator || function(n, l) {
            function e(e) {
                return function(o) {
                    return function(e) {
                        if (t)
                            throw new TypeError("Generator is already executing.");
                        for (; r; )
                            try {
                                if (t = 1,
                                a && (i = a[2 & e[0] ? "return" : e[0] ? "throw" : "next"]) && !(i = i.call(a, e[1])).done)
                                    return i;
                                switch (a = 0,
                                i && (e = [0, i.value]),
                                e[0]) {
                                case 0:
                                case 1:
                                    i = e;
                                    break;
                                case 4:
                                    return r.label++,
                                    {
                                        value: e[1],
                                        done: !1
                                    };
                                case 5:
                                    r.label++,
                                    a = e[1],
                                    e = [0];
                                    continue;
                                case 7:
                                    e = r.ops.pop(),
                                    r.trys.pop();
                                    continue;
                                default:
                                    if (i = r.trys,
                                    !(i = i.length > 0 && i[i.length - 1]) && (6 === e[0] || 2 === e[0])) {
                                        r = 0;
                                        continue
                                    }
                                    if (3 === e[0] && (!i || e[1] > i[0] && e[1] < i[3])) {
                                        r.label = e[1];
                                        break
                                    }
                                    if (6 === e[0] && r.label < i[1]) {
                                        r.label = i[1],
                                        i = e;
                                        break
                                    }
                                    if (i && r.label < i[2]) {
                                        r.label = i[2],
                                        r.ops.push(e);
                                        break
                                    }
                                    i[2] && r.ops.pop(),
                                    r.trys.pop();
                                    continue
                                }
                                e = l.call(n, r)
                            } catch (n) {
                                e = [6, n],
                                a = 0
                            } finally {
                                t = i = 0
                            }
                        if (5 & e[0])
                            throw e[1];
                        return {
                            value: e[0] ? e[1] : void 0,
                            done: !0
                        }
                    }([e, o])
                }
            }
            var t, a, i, o, r = {
                label: 0,
                sent: function() {
                    if (1 & i[0])
                        throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: e(0),
                throw: e(1),
                return: e(2)
            },
            "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o
        }
          , _ = function() {
            function n(n, l, e, t, a, o, r, u, s, c, d, h, m, _, f, g, v, b, y, S, P, C, w, E, O) {
                this.platform = n,
                this.modalCtrl = l,
                this.loadingCtrl = e,
                this.mapService = t,
                this.dataService = a,
                this.transporteService = o,
                this.ubicacionesService = r,
                this.comoirService = u,
                this.header = s,
                this.alertCtrl = c,
                this.network = d,
                this.analyticsLogger = h,
                this.utilsService = m,
                this.http = _,
                this.busesStatus = f,
                this.social = g,
                this.toastCtrl = v,
                this.menuCtrl = b,
                this.homeEvents = y,
                this.homeState = S,
                this.favorites = P,
                this.renderer = C,
                this.domCtrl = w,
                this.element = E,
                this.envVariables = O,
                this.modal = null,
                this.loader = null,
                this.alert = null,
                this.screen = null,
                this.padding = [0, i.s, 0, i.s],
                this.modalState = "modal-closed",
                this.primerosDatosBusesParadas = !0,
                this.mapCurrentState = null,
                this.mapMode = !0,
                this.destinoSelected = !1,
                this.enablePressDestino = !1,
                this.origenSelected = !1,
                this.enablePressOrigen = !1,
                this.prevOrigenDestinoSelected = null,
                this.loadingComoir = null,
                this.autocompleteContent = [],
                this.dropDownBoxStyle = {},
                this.textoMiUbicacionOrigen = "Desde Mi Ubicación",
                this.textoMiUbicacionDestino = "Hasta Mi Ubicación",
                this.inputOrigenSpinner = !1,
                this.inputOrigenEditing = !1,
                this.inputDestinoSpinner = !1,
                this.inputDestinoEditing = !1,
                this.autocompleteClosed = !1,
                this.autocompleteFinished = !0,
                this.skipInputChange = !1,
                this.typingTimer = null,
                this.mode = "home",
                this.tocarMapa = !1,
                this.currentField = null,
                this.showPopup = {
                    show: !1
                },
                this.lockPopup = !1,
                this.typeaheadModal = null,
                this.getInputNativeElement = function(n) {
                    void 0 === n && (n = !0);
                    var l = this.currentField + "_" + this.header.ion_navbar_class
                      , e = null;
                    return -1 != l.indexOf(" ") && (l = l.split(" ")[0]),
                    n ? (console.assert(this[l], "ERROR: no se encontró el input", l, "field:", this.currentField, "class:", this.header.ion_navbar_class),
                    e = this[l].nativeElement) : this[l] && (e = this[l].nativeElement),
                    e
                }
                ,
                this.iphone_micro_header = 0,
                this.onclick = !1,
                this.onEventSubscriber = new p.Subscriber(this.onEvent.bind(this))
            }
            return n.prototype.ngOnDestroy = function() {
                this.onEventSubscriber.unsubscribe()
            }
            ,
            n.prototype.ngOnInit = function() {
                this.homeEvents.onEvent.subscribe(this.onEventSubscriber),
                this.init()
            }
            ,
            n.prototype.init = function() {
                var n = this;
                this.platform.ready().then(function(l) {
                    n.screen = {
                        x: n.platform.width(),
                        y: n.platform.height()
                    },
                    n.network.onDisconnect().subscribe(function(l) {
                        console.error("network was disconnected :-(", l),
                        n.alertNoConnection()
                    })
                }),
                setTimeout(function(l) {
                    console.log("-- TIME OUT --");
                    var e;
                    e = n.homeState.origen,
                    console.log("data:", e),
                    e && n.setOrigen(e.coords, e.properties, e.geometria),
                    e = n.homeState.destino,
                    console.log("data:", e),
                    e && n.setDestino(e.coords, e.properties, e.geometria),
                    n.updateHeaderHeight()
                }, 1e3),
                this.hidePopupBusdata()
            }
            ,
            n.prototype.getDataToShare = function() {
                return {
                    from: {
                        text: this.homeState.inputOrigen,
                        properties: this.mapService.getOrigenSelected()
                    },
                    to: {
                        text: this.homeState.inputDestino,
                        properties: this.mapService.getDestinoSelected()
                    }
                }
            }
            ,
            n.prototype.printDataToShare = function() {
                console.log("-----------------------"),
                console.log(this.getDataToShare()),
                console.log("-----------------------")
            }
            ,
            n.prototype.createUrlToShare = function(n) {
                var l = this.getDataToShare();
                console.log("DATA TO SHARE", l);
                var e = "https://m.montevideo.gub.uy/comoir/";
                return "ruta" == n ? (e += "ruta?",
                e += "to=" + encodeURIComponent(l.from.properties.descSubtipo || l.from.properties.descTipo) + "&",
                l.from.properties.codigo ? e += "c1o=" + l.from.properties.codigo + "&" : l.from.properties.via && (e += "c1o=" + l.from.properties.via + "&"),
                l.from.properties.via2 ? e += "c2o=" + l.from.properties.via2 + "&" : l.from.properties.numero && (e += "c2o=" + l.from.properties.numero + "&"),
                e += this.textoMiUbicacionOrigen == l.from.text ? "lo=" + encodeURIComponent(this.utilsService.toCapitalCase(l.from.properties.descripcion)) : "lo=" + encodeURIComponent(l.from.text),
                e += "&") : e += "destino?",
                "ruta" != n && "destino" != n || (e += "td=" + encodeURIComponent(l.to.properties.descSubtipo || l.to.properties.descTipo) + "&",
                l.to.properties.codigo ? e += "c1d=" + l.to.properties.codigo + "&" : l.to.properties.via && (e += "c1d=" + l.to.properties.via + "&"),
                l.to.properties.via2 ? e += "c2d=" + l.to.properties.via2 + "&" : l.to.properties.numero && (e += "c2d=" + l.to.properties.numero + "&"),
                e += this.textoMiUbicacionDestino == l.to.text ? "ld=" + encodeURIComponent(this.utilsService.toCapitalCase(l.to.properties.descripcion)) : "ld=" + encodeURIComponent(l.to.text)),
                console.log(l, e),
                e
            }
            ,
            n.prototype.handleShareRecorrido = function() {
                var n = this.createUrlToShare("ruta");
                this.social.share("recorrido", n)
            }
            ,
            n.prototype.handleShareDestino = function() {
                var n = this.createUrlToShare("destino");
                this.social.share("destino", n)
            }
            ,
            n.prototype.onEvent = function(n) {
                switch (n.name) {
                case "share:btn":
                    return this.handleShareBtn();
                case "share:create-alert":
                    return this.alertSharedLink(n.data.what, n.data.url);
                case "sidemenu:toggle":
                    return this.menuCtrl.toggle();
                case "sidemenu:open-inbox":
                    return this.openInboxModal();
                case "sidemenu:restore-map":
                    return this.closeInboxModal();
                case "sidemenu:load-map":
                    return this.reloadMap();
                case "maputils:parada-seleccionada":
                    return this.handleParadaSeleccionada(n.data);
                case "maputils:parada-desh-seleccionada":
                    return this.handleParadaDeshSeleccionada(n.data);
                case "header:go-back":
                    return this.goBack();
                case "swipe:change":
                    return this.handleSwipeChange(n.data);
                case "map:geolacate-error":
                    return this.handleGeolocError(n.data);
                case "map:geolacate-update":
                    return this.handleGeolocUpdate(n.data);
                case "map:show-busdata":
                    return this.showPopupBusdata();
                case "map:press":
                    return this.handleMapPressed(n.data);
                case "busesmodal:filtrar-lineas":
                    return this.filtrarLineas(n.data);
                case "busesmodal:horario-real":
                    return this.handleHorarioReal(n.data);
                case "busesmodal:horario-teorico":
                    return this.handleHorarioTeorico(n.data);
                case "irenbusmodal:filtrar-lineas":
                    return this.transporteFiltrarLineas(n.data);
                case "irenbusmodal:horario-real":
                    return this.transporteHorarioReal(n.data);
                case "irenbusmodal:horario-teorico":
                    return this.transporteHorarioTeorico(n.data);
                case "transporte:buses-recorrido":
                    return this.handleBusesRecorrido(n.data);
                case "transporte:buses-recorrido-error":
                    return this.handleBusesRecorridoError(n.data);
                case "transporte:lineas-parada":
                    return this.handleLineasDeParada(n.data);
                case "transporte:teorico-primera-vez":
                    return this.handleTeoricoPrimeraVez(n.data);
                case "transporte:buses":
                    return this.handleBusesPasadas(n.data);
                case "transporte:buses-error":
                    return this.handleBusesError(n.data);
                case "transporte:lineas-paradas-error":
                    return this.handleLineasParadasError(n.data);
                case "comoir:caminando":
                    return this.handleIrCaminando(n.data);
                case "comoir:caminando-error":
                    return this.handleIrCaminandoError(n.data);
                case "comoir:bus":
                    return this.handleIrEnBus(n.data);
                case "comoir:bus-error":
                    return this.handleIrEnBusError(n.data);
                case "deeplink:no-data":
                    return this.proccessNoDeeplinkData();
                case "deeplink:data":
                    return this.proccessDeeplinkData(n.data);
                case "deeplink:data-parada":
                    return this.proccessDeeplinkDataParada(n.data);
                default:
                    console.error("ERROR: Evento not handled", n.name, [n])
                }
            }
            ,
            n.prototype.handleIrCaminando = function(n) {
                this.loadingComoir && this.loadingComoir.dismiss(),
                this.openIrCaminandoModal(n)
            }
            ,
            n.prototype.handleIrCaminandoError = function(n) {
                this.loadingComoir && this.loadingComoir.dismiss(),
                console.error("Error", n);
                if (500 == n.status) {
                    JSON.parse(n._body).error
                }
                this.alertErrorRuteo("Ha ocurrido un error en el cálculo de la ruta. Vuelva a intentarlo más tarde.")
            }
            ,
            n.prototype.handleIrEnBus = function(n) {
                this.loadingComoir && this.loadingComoir.dismiss(),
                n || this.alertErrorRuteo("Ha ocurrido un error en el cálculo de la ruta."),
                0 == n.length ? this.alertErrorRuteo("La consulta no retornado ningún resultado.") : this.openIrEnBusModal(n)
            }
            ,
            n.prototype.handleIrEnBusError = function(n) {
                this.loadingComoir && this.loadingComoir.dismiss(),
                console.error("Error", n);
                if (500 == n.status) {
                    JSON.parse(n._body).error
                }
                this.alertErrorRuteo("Ha ocurrido un error en el cálculo de la ruta. Vuelva a intentarlo más tarde.")
            }
            ,
            n.prototype.handleBusesRecorrido = function(n) {
                console.log("HomePage.handleBusesRecorrido()", n),
                this.modal && this.modal.overlay && this.modal.overlay.instance && this.modal.overlay.instance.pasadasBusesPorParada(n)
            }
            ,
            n.prototype.handleBusesRecorridoError = function(n) {
                console.error("Error transporte:buses-recorrido-error", n),
                this.alertGenericServerError(),
                this.closeLoader(),
                this.closeBusesModal()
            }
            ,
            n.prototype.handleHorarioReal = function(n) {
                console.log("--\x3e busesmodal:horario-real", this.modal.overlay.instance),
                "function" == typeof this.modal.overlay.instance.setFeature && (this.primerosDatosBusesParadas = !0,
                this.transporteService.startBusesParada(this.mapService.getSelected().get("cod_ubic_parada"), n.lineas),
                this.modal.overlay.instance.updateMapLineasSeleccionadas())
            }
            ,
            n.prototype.handleHorarioTeorico = function(n) {
                var l = this;
                this.mapService.deleteBusesRealTime();
                var e = this.mapCurrentState.coords;
                this.mapService.centerMap(e[0], e[1]),
                n.parada = this.mapService.getSelected().get("cod_ubic_parada"),
                this.transporteService.getHorarioTeoricoParada(n).then(function(n) {
                    l.modal.overlay.instance.updateBuses({
                        pasadas: n
                    })
                }),
                this.transporteService.backToNormal()
            }
            ,
            n.prototype.transporteFiltrarLineas = function(n) {
                this.transporteService.filtrarLineasBusesRecorrido(n)
            }
            ,
            n.prototype.transporteHorarioReal = function(n) {
                console.log("HomePage.transporteHorarioReal()", [n]),
                this.transporteService.startBusesRecorrido(n)
            }
            ,
            n.prototype.transporteHorarioTeorico = function(n) {
                var l = this
                  , e = n.mapParadasRecorridos
                  , t = n.horario;
                console.log("irenbusmodal:horario-teorico", [e], t),
                this.transporteService.getHorarioTeoricoRecorrido(e, t).then(function(n) {
                    l.modal.overlay.instance.pasadasBusesPorParada(n)
                }),
                this.transporteService.backToNormal()
            }
            ,
            n.prototype.handleBusesError = function(n) {
                console.error("Error transporte:buses-error", n),
                this.alertGenericServerError(),
                this.closeLoader(),
                this.closeBusesModal()
            }
            ,
            n.prototype.filtrarLineas = function(n) {
                this.calculatePadding(),
                this.mapService.filtrarBusesTiempoReal(n, this.padding),
                this.transporteService.filtrarLineasBusesParada(n)
            }
            ,
            n.prototype.handleBusesPasadas = function(n) {
                var l = this
                  , e = {
                    pasadas: n,
                    descripcion: ""
                };
                if (0 != e.pasadas.length) {
                    var t = {
                        lineas: e.pasadas.map(function(n) {
                            return n.linea
                        }),
                        descripcion: e.descripcion
                    };
                    this.openBusesModal(t).then(function() {
                        var n = e.pasadas;
                        l.calculatePadding(),
                        l.mapService.setBusesRealTime(n, l.primerosDatosBusesParadas, l.padding),
                        l.primerosDatosBusesParadas = !1,
                        console.assert(l.modal && l.modal.overlay && l.modal.overlay.instance, "ERROR: no está instanciado el modal?", l.modal.overlay),
                        l.modal.overlay.instance.updateBuses(e)
                    })
                } else
                    this.modal && (this.alertNoBuses(),
                    this.transporteService.backToNormal(),
                    this.modal.overlay.instance.stopSpinners())
            }
            ,
            n.prototype.handleLineasParadasError = function(n) {
                console.error("Error transporte:buses-error NOT HANDLED!!!", n),
                this.closeLoader()
            }
            ,
            n.prototype.handleGeolocError = function(n) {
                if (console.error("Error getting location", n),
                n.solicitado)
                    switch (n.code) {
                    case 1:
                        this.alertNoGeolocAllowed();
                        break;
                    case 2:
                    case 3:
                        this.alertNoGeoloc()
                    }
                else
                    console.log("ERROR GEO"),
                    this.origenSelected = !1
            }
            ,
            n.prototype.handleLineasDeParada = function(n) {
                var l = this;
                this.openBusesModal(n).then(function() {
                    l.transporteService.startBusesParada(n.paradaID, null)
                })
            }
            ,
            n.prototype.handleTeoricoPrimeraVez = function(n) {
                var l = this
                  , e = {
                    pasadas: n,
                    descripcion: ""
                };
                if (0 != e.pasadas.length) {
                    var t = {
                        lineas: e.pasadas.map(function(n) {
                            return n.linea
                        }),
                        descripcion: e.descripcion
                    };
                    this.openBusesModal(t).then(function() {
                        l.calculatePadding(),
                        console.assert(l.modal && l.modal.overlay && l.modal.overlay.instance, "ERROR: no está instanciado el modal?", l.modal.overlay),
                        l.modal.overlay.instance.updateBuses(e, !0)
                    })
                } else
                    this.modal && (this.alertNoBuses(),
                    this.transporteService.backToNormal(),
                    this.modal.overlay.instance.stopSpinners())
            }
            ,
            n.prototype.handleSwipeChange = function(n) {
                this.swipeState = n
            }
            ,
            n.prototype.goBack = function() {
                console.log("GO HOME"),
                this.tocarMapa ? (this.tocarMapa = !1,
                this.mapService.unsetOnClickEvent(),
                this.enablePressOrigen = !1,
                this.enablePressDestino = !1,
                this.header.backToPrev()) : this.modal ? this.closeBusesModal() : this.header.showMapa()
            }
            ,
            n.prototype.handleParadaDeshSeleccionada = function(n) {
                var l = this;
                if (console.log("HomePage.handleParadaDeshSeleccionada()", [n]),
                n.featureParadaDeshabilitada)
                    if (n.featureParadaDeshabilitada.get("cod_ubic_parada")) {
                        console.log("data.featureParadaDeshabilitada.get('desc_ubic_parada')", n.featureParadaDeshabilitada.get("desc_ubic_parada")),
                        console.log("data.featureParadaDeshabilitada.get('comentario_ubic_deshabilitada')", n.featureParadaDeshabilitada.get("comentario_ubic_deshabilitada")),
                        this.paradaDeshabilitada = null;
                        var e = n.featureParadaDeshabilitada.get("comentario_ubic_deshabilitada")
                          , t = function(n, e) {
                            if (!l.paradaDeshabilitada && -1 != e.indexOf(n)) {
                                var t = e.split(n);
                                l.paradaDeshabilitada = {
                                    type: "link",
                                    link: n + t[1],
                                    text: t[0].trim()
                                }
                            }
                        }
                          , a = function(n) {
                            if (-1 != n.indexOf("/")) {
                                var l = n.split("/");
                                return {
                                    lineas: l[0].trim(),
                                    parada: l[1].trim()
                                }
                            }
                            return {
                                lineas: "Todas",
                                parada: n
                            }
                        };
                        t("http://", e),
                        t("https://", e),
                        function(n) {
                            if (!l.paradaDeshabilitada && -1 != n.indexOf("/")) {
                                var e = [];
                                if (-1 != n.indexOf("**")) {
                                    var t = n.split("**");
                                    for (var i in t)
                                        e.push(a(t[i]))
                                } else
                                    e.push(a(n));
                                l.paradaDeshabilitada = {
                                    type: "table",
                                    table: e
                                }
                            }
                        }(e),
                        this.paradaDeshabilitada || (this.paradaDeshabilitada = {
                            type: "link",
                            link: null,
                            text: e
                        })
                    } else
                        console.error("ERROR: las paradas deshabilitadas están viniendo sin 'cod_ubic_parada'", n.featureParadaDeshabilitada)
            }
            ,
            n.prototype.handleParadaSeleccionada = function(n) {
                if (console.log("HomePage.handleParadaSeleccionada", [n]),
                n.selected)
                    if (this.startLoading(),
                    n.selected.get("cod_ubic_parada")) {
                        var l = n.selected.get("cod_ubic_parada");
                        this.transporteService.getLineasParada(l),
                        this.analyticsLogger.logEvent("comoir_parada_request", {
                            action: "bus_parada_request",
                            data: l
                        }).then(function(n) {
                            console.log("Analytic Log succes", n)
                        }).catch(function(n) {
                            return console.error(n)
                        })
                    } else
                        console.error("ERROR: las paradas están viniendo sin 'cod_ubic_parada'", n.selected)
            }
            ,
            n.prototype.reloadMap = function() {
                this.mapService.reloadMap()
            }
            ,
            n.prototype.hidePopupBusdata = function() {
                this.lockPopup || (this.showPopup = {
                    show: !1
                })
            }
            ,
            n.prototype.alignPopupBusdata = function() {
                var n = window.document.querySelector(".ol-busdata.ol-control").getBoundingClientRect().top;
                this.showPopup = {
                    top: n - 150 + "px",
                    left: "53px",
                    punta: {
                        top: n + 21 + "px",
                        left: "43px"
                    },
                    show: !0
                }
            }
            ,
            n.prototype.showPopupBusdata = function() {
                var n = this;
                this.lockPopup = !0,
                window.setTimeout(this.alignPopupBusdata.bind(this), 200),
                window.setTimeout(function() {
                    n.lockPopup = !1
                }, 1e3)
            }
            ,
            n.prototype.share = function() {
                this.handleShareBtn()
            }
            ,
            n.prototype.handleShareBtn = function() {
                var n = this;
                this.alertCtrl.create({
                    buttons: [{
                        text: "Compartir recorrido...",
                        handler: function() {
                            n.handleShareRecorrido()
                        }
                    }, {
                        text: "Compartir sólo destino...",
                        handler: function() {
                            n.handleShareDestino()
                        }
                    }],
                    cssClass: "alertCustomCss"
                }).present()
            }
            ,
            n.prototype.proccessNoDeeplinkData = function() {
                var n = this;
                console.log("HomePage.proccessNoDeeplinkData()"),
                this.mapService.loadMap().then(function(l) {
                    n.setGeolocAsPoint(!1, "origen")
                })
            }
            ,
            n.prototype.proccessDeeplinkData = function(n) {
                var l = this;
                console.log("HomePage.proccessDeeplinkData()", [n]),
                this.mapService.loadMap().then(function(e) {
                    n && (n.origen || n.destino || n.parada) ? l.backToMap().then(function() {
                        n.origen ? l.proccessMapPoint(n.origen, !1) : l.mapService.getOrigenSelected() && l.mapService.getOrigenSelected().punto ? (console.log("Origen previo al link", l.mapService.getOrigenSelected()),
                        l.proccessMapPoint(l.mapService.getOrigenSelected(), !1)) : l.setGeolocAsPoint(!1, "origen"),
                        n.destino && l.proccessMapPoint(n.destino, !0),
                        l.mapService.ajustarMapaOrigenDestino()
                    }) : console.error("ERROR: proccessDeeplinkData(data) la data vino con un formato inesperado", n)
                })
            }
            ,
            n.prototype.proccessDeeplinkDataParada = function(n) {
                var l = this;
                console.log("HomePage.proccessDeeplinkDataParada()", [n]),
                this.mapService.loadMap().then(function(e) {
                    n && n[0] ? l.backToMap().then(function() {
                        l.mapService.seleccionarParadaDelParametro(n[0])
                    }) : console.error("ERROR: proccessDeeplinkDataParada(data) la data vino con un formato inesperado", n)
                })
            }
            ,
            n.prototype.ionViewDidLoad = function() {
                var n = this;
                this.mapService.loadMap().then(function(l) {
                    n.mapService.setParadasDeshabilitadasPopup(n.popupParadaDeshabilitada)
                }),
                this.analyticsLogger.setScreenView("home").then(function(n) {
                    console.log("Analytic Log success", n)
                }).catch(function(n) {
                    return console.error(n)
                })
            }
            ,
            n.prototype.calculatePadding = function() {
                switch (this.mode) {
                case "ir-en-bus":
                    this.padding[0] = this.screen.x > 500 ? 150 + 2 * i.s : 97 + 2 * i.s,
                    this.padding[2] = .4 * this.screen.y + i.s;
                    break;
                case "ir-caminando":
                    this.screen.x > 500 ? (this.padding[0] = 150 + 2 * i.s,
                    this.padding[2] = 150 + 2 * i.s) : (this.padding[0] = 97 + 2 * i.s,
                    this.padding[2] = 97 + 2 * i.s);
                    break;
                case "buses-parada":
                    this.padding[0] = this.screen.x > 500 ? 80 + i.s : 50 + i.s,
                    this.padding[2] = .4 * this.screen.y + i.s
                }
            }
            ,
            n.prototype.openIrEnBusModal = function(n) {
                var l = this;
                this.header.showIrEnBus(),
                this.mapMode = !1,
                this.mode = "ir-en-bus",
                this.calculatePadding(),
                this.mapService.enterModalState(this.padding),
                this.modal ? (console.log("El modal ya estaba abierto", [this.mode]),
                this.modal.overlay.instance.setData(n)) : (this.modalState = "modal-opening",
                this.mapCurrentState = this.mapService.getCurrentState(),
                this.modal = this.modalCtrl.create(c.a, {
                    data: n
                }, {
                    enableBackdropDismiss: !0,
                    cssClass: "busModal"
                }),
                this.modal.onDidDismiss(function() {
                    l.backToMap()
                }),
                this.modal.present().then(function() {
                    l.modalState = "modal-opened"
                }),
                this.loadingComoir = null),
                this.transporteService.startBusesRecorrido(this.utilsService.mapParadasVariantesFromRecorridos(n))
            }
            ,
            n.prototype.openInboxModal = function() {
                var n = this;
                console.log("HomePage.openInboxModal()"),
                this.mapMode = !1,
                this.modal ? console.error("El modal ya estaba abierto", [this.mode]) : (this.modalState = "modal-opening",
                this.mode = "inbox",
                this.modal = this.modalCtrl.create(d.a, {}, {
                    enableBackdropDismiss: !0,
                    cssClass: "InboxModal"
                }),
                this.modal.onDidDismiss(function() {
                    console.error("es necesario un this.backToMap(); ????"),
                    n.modal = null
                }),
                this.modal.present().then(function() {
                    n.modalState = "modal-opened"
                })),
                this.loadingComoir = null
            }
            ,
            n.prototype.closeInboxModal = function() {
                console.log("HomePage.closeInboxModal()"),
                this.modal && (console.log("this.modal.dismiss();"),
                this.modal.dismiss())
            }
            ,
            n.prototype.openIrCaminandoModal = function(n) {
                var l = this;
                this.mapService.setComoirCaminando(n),
                this.header.showIrCaminando(),
                this.mapMode = !1;
                var e = JSON.parse(n.feature.properties.camino)
                  , t = n.feature.properties.largo;
                this.modal ? (console.log("El modal ya estaba abierto", [this.mode]),
                this.modal.overlay.instance.setCaminoYLargo(e, t)) : (this.modalState = "modal-opening",
                this.mode = "ir-caminando",
                this.calculatePadding(),
                this.mapService.enterModalState(this.padding),
                this.mapCurrentState = this.mapService.getCurrentState(),
                this.modal = this.modalCtrl.create(s.a, {
                    camino: e,
                    largo: t
                }, {
                    enableBackdropDismiss: !0,
                    cssClass: "walkDetailsModal"
                }),
                this.modal.onDidDismiss(function() {
                    l.backToMap()
                }),
                this.modal.present().then(function() {
                    l.modalState = "modal-opened"
                })),
                this.loadingComoir = null
            }
            ,
            n.prototype.openBusesModal = function(n) {
                var l = this;
                if (this.mapMode = !1,
                this.mode = "buses-parada",
                this.closeLoader(),
                n.descripcion && this.header.showParada(n.descripcion),
                0 != n.lineas.length)
                    return this.calculatePadding(),
                    this.mapService.enterModalState(this.padding),
                    this.mapCurrentState = this.mapService.getCurrentState(),
                    this.mapCurrentState.coords = this.mapService.getCoordsSelected(),
                    this.modal ? Promise.resolve() : (this.modal = this.modalCtrl.create(u.a, null, {
                        cssClass: "busesModal"
                    }),
                    this.modalState = "modal-opening",
                    this.modal.present().then(function(e) {
                        l.modal.overlay.instance.setFeature(l.mapService.getSelected()),
                        l.modal.overlay.instance.setLineasParada(n.lineas),
                        l.modalState = "modal-opened",
                        setTimeout(function() {
                            var n = l.mapCurrentState.coords;
                            l.mapService.centerMap(n[0], n[1], i.h)
                        }, 200),
                        l.modal.onDidDismiss(function() {
                            l.backToMap()
                        })
                    }));
                this.alertNoBuses().then(function(n) {
                    l.mapCurrentState = l.mapService.getCurrentState(),
                    l.mapCurrentState.coords = l.mapService.getCoordsSelected(),
                    l.modal && l.closeBusesModal(),
                    l.backToMap()
                })
            }
            ,
            n.prototype.handleGeolocUpdate = function(n) {
                var l = this
                  , e = null;
                if (this.homeState.inputOrigen == this.textoMiUbicacionOrigen && (e = "origen"),
                this.homeState.inputDestino == this.textoMiUbicacionDestino && (e = "destino"),
                e) {
                    this.lastGeolocCoords || (this.lastGeolocCoords = [0, 0]);
                    var t = this.mapService.geolocToMapProjection(n);
                    console.assert(!!t, "WARNING: newcoords es null"),
                    console.assert(!!this.lastGeolocCoords, "WARNING: this.lastGeolocCoords es null");
                    var a = t[0] - this.lastGeolocCoords[0]
                      , i = t[1] - this.lastGeolocCoords[1];
                    if (Math.abs(a) + Math.abs(i) > 30)
                        return this.lastGeolocCoords = t,
                        this.ubicacionesService.geodecodificacion(this.mapService.transformMapProjectionto32721(this.lastGeolocCoords[0], this.lastGeolocCoords[1])).then(function(n) {
                            if (n && 200 === n.status)
                                l.lastGeolocDecoData = n.json();
                            else if (n && 204 === n.status)
                                return console.error("ERROR: al tratar de georeferenciar la ubicación del usuario con el backend: " + JSON.stringify(n))
                        }, function(n) {
                            return console.error("this.ubicacionesService.geodecodificacion() error -----\x3e", n),
                            console.error("Something went wrong!", n),
                            null
                        })
                }
            }
            ,
            n.prototype.updateMiUbicacion = function() {
                return h(this, void 0, void 0, function() {
                    var n, l, e, t, a;
                    return m(this, function(i) {
                        return n = null,
                        this.homeState.inputOrigen == this.textoMiUbicacionOrigen && (n = "origen"),
                        this.homeState.inputDestino == this.textoMiUbicacionDestino && (n = "destino"),
                        console.log("HomePage.updateMiUbicacion() field: ", n),
                        n && this.lastGeolocDecoData ? (l = this.utilsService.toCapitalCase(n),
                        t = (e = this.lastGeolocDecoData).punto.geoJSON.coordinates,
                        a = null,
                        e.geometria && (a = e.geometria),
                        this.homeState["input" + l] = this["textoMiUbicacion" + l],
                        this.mapService["set" + l](t, e, a),
                        [2]) : [2, null]
                    })
                })
            }
            ,
            n.prototype.setGeolocAsPoint = function(n, l) {
                var e = this;
                console.log("HomePage.setGeolocAsPoint()", n, l);
                var t = this.utilsService.toCapitalCase(l);
                return this.mapService.geolocate(n, n ? 2 : 0).then(function(n) {
                    return console.log("HomePage.setGeolocAsPoint() this.mapService.geolocate() -----\x3e", n),
                    e.ubicacionesService.geodecodificacion(e.mapService.transformMapProjectionto32721(n[0], n[1])).then(function(a) {
                        console.log("HomePage.setGeolocAsPoint() this.ubicacionesService.geodecodificacion() -----\x3e", a.status, a);
                        var o, r = null;
                        if (a && 200 === a.status) {
                            r = a.json(),
                            e.lastGeolocDecoData = r,
                            o = r.punto.geoJSON.coordinates;
                            var u = null;
                            return r.geometria && (u = r.geometria),
                            e.homeState["input" + t] = e["textoMiUbicacion" + t],
                            e.mapService["set" + t](o, r, u),
                            e.mapService.centerMap(n[0], n[1], i.h),
                            e[l + "Selected"] = !0,
                            e.prevOrigenDestinoSelected = l,
                            "ir_caminando" == e.header.ion_navbar_class || "ir_en_bus" == e.header.ion_navbar_class ? e.recalcularComoIr() : e.updateHeaderHeight()
                        }
                        if (a && 204 === a.status)
                            return e.alertNoExisteUbicacionGeoreferenciada()
                    }, function(n) {
                        return console.error("this.ubicacionesService.geodecodificacion() -----\x3e", n),
                        console.error("Something went wrong!", n),
                        e.alertGenericServerError()
                    })
                })
            }
            ,
            n.prototype.hideMapPopup = function(n) {
                console.log(n),
                console.log(n.target == this.popupParadaDeshabilitadaLink),
                this.mapService.hidePopup()
            }
            ,
            n.prototype.proccessMapPoint = function(n, l) {
                console.log("proccessMapPoint()", [n, l]);
                var e = n
                  , t = e.punto.geoJSON.coordinates
                  , a = null;
                e.geometria && (a = e.geometria),
                console.log("-----", t, e, a),
                e.descripcion = this.utilsService.toCapitalCase(e.descripcion),
                l ? (this.homeState.inputDestino = e.descripcion,
                e.label && (this.homeState.inputDestino = e.label),
                this.setDestino(t, e, a),
                this.destinoSelected = !0,
                this.prevOrigenDestinoSelected = "destino") : (this.homeState.inputOrigen = e.descripcion,
                e.label && (this.homeState.inputOrigen = e.label),
                this.setOrigen(t, e, a),
                this.origenSelected = !0,
                this.prevOrigenDestinoSelected = "origen"),
                this.enablePressOrigen = !1,
                this.enablePressDestino = !1,
                this.tocarMapa && (this.mapService.unsetOnClickEvent(),
                this.enablePressOrigen = !1,
                this.enablePressDestino = !1,
                this.header.backToPrev()),
                this.updateHeaderHeight()
            }
            ,
            n.prototype.handleMapPressed = function(n) {
                var l = this;
                console.log("handleMapPressed()", [n]);
                var e = this.loadingCtrl.create({
                    content: "Buscando ubicación próxima.\n                        Por favor, espere..."
                });
                e.present();
                var t = !0;
                t = !this.enablePressOrigen && (!!this.enablePressDestino || !!this.origenSelected && (!this.destinoSelected || !(!this.prevOrigenDestinoSelected || "origen" != this.prevOrigenDestinoSelected))),
                this.ubicacionesService.geodecodificacion(this.mapService.transformMapProjectionto32721(n[0], n[1])).then(function(n) {
                    n && 200 === n.status ? l.proccessMapPoint(n.json(), t) : n && 204 === n.status && l.alertNoExisteUbicacion(),
                    e.dismiss()
                }, function(n) {
                    console.error("Something went wrong!", n),
                    e.dismiss(),
                    l.alertGenericServerError()
                }).then(function(n) {
                    l.recalcularComoIr()
                })
            }
            ,
            n.prototype.updateTypeahead = function() {
                var n = this;
                return this.autocompleteClosed ? (null != this.typeaheadModal && (this.typeaheadModal.dismiss(),
                this.typeaheadModal = null),
                Promise.resolve()) : this.typeaheadModal ? (this.typeaheadModal && this.typeaheadModal.overlay && this.typeaheadModal.overlay.instance && this.typeaheadModal.overlay.instance.setDatos(this.autocompleteContent, this.getCurrentOffset(), this),
                Promise.resolve()) : (this.typeaheadModal = this.modalCtrl.create(r.a, null, {
                    cssClass: "typeahead"
                }),
                this.typeaheadModal.present({
                    keyboardClose: !1
                }).then(function(l) {
                    n.typeaheadModal.onDidDismiss(function() {
                        n.closeAutocomplete()
                    }),
                    n.typeaheadModal.overlay.instance.setDatos(n.autocompleteContent, n.getCurrentOffset(), n),
                    n.autoFocus(),
                    setTimeout(function() {
                        n.autoFocus()
                    }, 10),
                    setTimeout(function() {
                        n.autoFocus()
                    }, 200)
                }))
            }
            ,
            n.prototype.switchHeaderHeight = function() {
                "mapa" == this.header.ion_navbar_class ? this.header.showMapaMasBotones() : this.header.showMapaOnly()
            }
            ,
            n.prototype.updateHeaderHeight = function() {
                console.log("HomePage.updateHeaderHeight()", this.destinoSelected, this.origenSelected, this.header.ion_navbar_class);
                var n = this.header.ion_navbar_class;
                "mapa" != n && "mapa con-botones" != n || (this.destinoSelected && this.origenSelected ? this.header.showMapaMasBotones() : this.header.showMapaOnly())
            }
            ,
            n.prototype.cambiarOrigen = function() {
                this.header.showOrigenDestino()
            }
            ,
            n.prototype.recalcularComoIr = function() {
                var n = this;
                switch (this.mode) {
                case "ir-caminando":
                    this.irCaminando();
                    break;
                case "ir-en-bus":
                    this.backToMap().then(function(l) {
                        return n.irEnBus()
                    })
                }
            }
            ,
            n.prototype.switchFields = function() {
                var n = this.homeState.inputDestino;
                this.homeState.inputDestino = this.homeState.inputOrigen == this.textoMiUbicacionOrigen ? this.textoMiUbicacionDestino : this.homeState.inputOrigen,
                this.homeState.inputOrigen = n == this.textoMiUbicacionDestino ? this.textoMiUbicacionOrigen : n,
                this.mapService.switchPuntos(),
                this.recalcularComoIr()
            }
            ,
            n.prototype.closeAutocomplete = function() {
                this.autocompleteContent = [],
                this.autocompleteClosed = !0,
                this.inputDestinoEditing = !1,
                this.inputOrigenEditing = !1,
                this.updateHeaderHeight(),
                this.updateTypeahead()
            }
            ,
            n.prototype.onInputChange = function(n, l) {
                var e = this;
                if (this.skipInputChange)
                    this.skipInputChange = !1;
                else {
                    8 != n.keyCode && "Backspace" != n.key && "Backspace" != n.code || ("inputDestino" == l && this.destinoSelected ? this.unsetDestinoMapa() : "inputOrigen" == l && this.origenSelected && this.unsetOrigenMapa()),
                    this.inputOrigenSpinner = !1,
                    this.inputDestinoSpinner = !1,
                    this.autocompleteClosed = !1;
                    var t = this.homeState[l];
                    t == this.textoMiUbicacionOrigen ? (this.homeState[l] = "",
                    this.fillAutocomplete("", []),
                    this.unsetOrigenMapa()) : t == this.textoMiUbicacionDestino ? (this.homeState[l] = "",
                    this.fillAutocomplete("", []),
                    this.unsetDestinoMapa()) : (this.typingTimer && clearTimeout(this.typingTimer),
                    this.typingTimer = setTimeout(function() {
                        console.assert("inputDestino" == l || "inputOrigen" == l, "ERROR: me pasaste cualquierita: ", l);
                        var n = e.homeState[l];
                        n.length > 2 && (e[l + "Spinner"] = !0,
                        e.ubicacionesService.autocompleteAddress(n, !1).then(function(t) {
                            e.fillAutocomplete(n, t),
                            e[l + "Spinner"] = !1
                        }))
                    }, 1e3),
                    this.largoFiltro < 3 && t.length >= 3 ? (this[l + "Spinner"] = !0,
                    this.ubicacionesService.autocompleteAddress(t, !1).then(function(n) {
                        e.fillAutocomplete(t, n),
                        e[l + "Spinner"] = !1
                    })) : this.ubicacionesService.autocompleteAddress(t, !0).then(function(n) {
                        e.fillAutocomplete(t, n)
                    })),
                    console.log("filtro:", t),
                    this.largoFiltro = t.length
                }
            }
            ,
            n.prototype.unsetDestinoMapa = function() {
                this.destinoSelected = !1,
                this.mapService.unsetDestino(),
                this.homeState.destino = null,
                this.prevOrigenDestinoSelected = "origen",
                this.updateHeaderHeight()
            }
            ,
            n.prototype.unsetOrigenMapa = function() {
                this.origenSelected = !1,
                this.mapService.unsetOrigen(),
                this.homeState.origen = null,
                this.prevOrigenDestinoSelected = "destino",
                this.updateHeaderHeight()
            }
            ,
            n.prototype.fillAutocomplete = function(n, l) {
                var e = this;
                console.log("fillAutocomplete()", [n, l, this.autocompleteContent, this.autocompleteClosed]),
                this.autocompleteClosed || (this.autocompleteFinished ? (this.autocompleteFinished = !1,
                this.autocompleteContent = [],
                "" == this.homeState[this.currentField] && (this.autocompleteContent.push({
                    icon: i.a + "icono_ElegirMapa.png",
                    text: "Elegir en el mapa",
                    fav: "hidden",
                    codigo: 0
                }),
                this.autocompleteContent.push({
                    icon: i.a + "icono_ElegirMapa.png",
                    text: "Mi ubicación",
                    fav: "hidden",
                    codigo: -1
                }),
                this.updateTypeahead()),
                this.dataService.getFilteredFavs(n).then(function(n) {
                    var t = {};
                    console.log("FAVS", [n]),
                    n.map(function(n) {
                        n.fav = "yes",
                        n.icon = i.a + "icono_" + n.tipo + ".png",
                        e.autocompleteContent.push(n),
                        t[n.text] = !0
                    });
                    for (var a in l) {
                        var o = l[a];
                        if (!t[o.nombre]) {
                            var r = o.descTipo;
                            o.descSubtipo && (r = o.descSubtipo),
                            r = r.split(" ").join("_");
                            var u = "no";
                            "VIA" == o.descTipo && (u = "usetext"),
                            e.autocompleteContent.push({
                                icon: i.a + "icono_" + r + ".png",
                                text: o.nombre,
                                fav: u,
                                data: o
                            })
                        }
                    }
                    0 == e.autocompleteContent.length && e.autocompleteContent.push({
                        icon: "none",
                        text: "No se encontraron resultados",
                        fav: "none",
                        data: {},
                        codigo: -2
                    }),
                    e.autocompleteFinished = !0,
                    e.updateTypeahead()
                })) : console.log("this.autocompleteFinished: ", this.autocompleteFinished))
            }
            ,
            n.prototype.switchFavorite = function(n, l, e) {
                var t = this;
                console.log("FavoritosPage.switchFavorite()", [n, l]),
                "hidden" != l.fav && (n.stopPropagation(),
                "yes" == l.fav && "no" == e ? this.favorites.removeFav(l).then(function(n) {
                    return t.closeAutocomplete()
                }) : "no" == l.fav && "yes" == e ? this.favorites.addFav(l).then(function(e) {
                    console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"),
                    t.onEntrySelected(n, l, !0)
                }) : "yes" == l.fav && "yes" == e && this.favorites.updateFav(l).then(function(n) {
                    return t.closeAutocomplete()
                }))
            }
            ,
            n.prototype.askForName = function(n) {
                return h(this, void 0, void 0, function() {
                    var l = this;
                    return m(this, function(e) {
                        return console.log("FavoritesService.askForName()", [n]),
                        [2, new Promise(function(e, t) {
                            l.alertCtrl.create({
                                title: "Agregar Favorito",
                                cssClass: "fav-alert",
                                inputs: [{
                                    name: "label",
                                    placeholder: "Nombre",
                                    value: n
                                }],
                                buttons: [{
                                    text: "Cancelar",
                                    role: "cancel",
                                    handler: t
                                }, {
                                    text: "Aceptar",
                                    handler: function(n) {
                                        e(n.label)
                                    }
                                }]
                            }).present().then(function() {
                                l.domCtrl.write(function() {
                                    var n = l.element.nativeElement.parentNode.parentNode.parentNode.querySelector("ion-alert .alert-wrapper input");
                                    l.renderer.invokeElementMethod(n, "select", [])
                                })
                            })
                        }
                        )]
                    })
                })
            }
            ,
            n.prototype.onFocus = function(n, l) {
                console.log("HomePage.onFocus()", l),
                console.assert("inputDestino" == l || "inputOrigen" == l, "ERROR: me pasaste cualquierita: ", l),
                this.currentField = l,
                this.onInputChange({}, l),
                this[this.currentField + "Editing"] = !0
            }
            ,
            n.prototype.useTextOfAutocomplete = function(n, l) {
                console.log("HomePage.useTextOfAutocomplete()"),
                console.assert(l.data.descTipo),
                this.skipInputChange = !1,
                this.homeState[this.currentField] = l.text,
                this.homeState[this.currentField] = this.homeState[this.currentField] + " ",
                this.autoFocus()
            }
            ,
            n.prototype.autoFocus = function() {
                var n = this.getInputNativeElement(!1);
                n && n.focus()
            }
            ,
            n.prototype.getCurrentOffset = function() {
                var n = this.getInputNativeElement()
                  , l = n.offsetHeight + n.parentNode.offsetTop + 5;
                return this.platform.is("ios") && (l += this.iphone_micro_header),
                console.log("getCurrentOffset()", l, n.offsetHeight, n.parentNode.offsetTop),
                l
            }
            ,
            n.prototype.onEntrySelected = function(n, l, e) {
                var t = this;
                if (console.log("onEntrySelected()", [l]),
                0 == l.codigo) {
                    switch (this.currentField) {
                    case "inputOrigen":
                        this.enablePressOrigen = !0,
                        this.enablePressDestino = !1,
                        this.header.showTocarMapa("origen");
                        break;
                    case "inputDestino":
                        this.enablePressDestino = !0,
                        this.enablePressOrigen = !1,
                        this.header.showTocarMapa("destino")
                    }
                    this.mapService.setOnClickEvent(),
                    this.tocarMapa = !0
                } else if (-1 == l.codigo)
                    switch (this.currentField) {
                    case "inputOrigen":
                        this.setGeolocAsPoint(!0, "origen");
                        break;
                    case "inputDestino":
                        this.setGeolocAsPoint(!0, "destino")
                    }
                else if (-2 == l.codigo)
                    e = !1;
                else
                    switch (this.skipInputChange = !1,
                    this.homeState[this.currentField] = l.label || l.text,
                    l.data.descTipo) {
                    case "VIA":
                        this.useTextOfAutocomplete(n, l),
                        this[this.currentField + "Spinner"] = !0,
                        this.ubicacionesService.resolverCoordenadas(l).then(function(e) {
                            t[t.currentField + "Spinner"] = !1,
                            t.setPuntoEnMapa(e),
                            t.useTextOfAutocomplete(n, l),
                            t.ubicacionesService.geodecodificacion(e.data.geoJSON.coordinates).then(function(n) {
                                n && 200 === n.status ? t.proccessMapPoint(n.json(), "inputDestino" == t.currentField) : n && 204 === n.status && t.alertNoExisteUbicacion()
                            }, function(n) {
                                console.error("Something went wrong!", n),
                                t.alertGenericServerError()
                            }).then(function(n) {
                                t.recalcularComoIr()
                            })
                        });
                        break;
                    case "ESQUINA":
                    case "DIRECCION":
                        console.assert(l.data.geoJSON, l.data),
                        l.data.geoJSON && this.setPuntoEnMapa(l);
                        break;
                    case "LUGAR DE INTERES":
                        this[this.currentField + "Spinner"] = !0,
                        this.ubicacionesService.resolverCoordenadas(l).then(function(n) {
                            t[t.currentField + "Spinner"] = !1,
                            t.setPuntoEnMapa(n)
                        });
                        break;
                    default:
                        console.log("NOT IMPLEMENTED: ", l.data.descTipo, l)
                    }
                e && this.closeAutocomplete()
            }
            ,
            n.prototype.borrarCampo = function(n) {
                this.currentField = n,
                console.log("borrarCampo('" + n + "')" + this.header.ion_navbar_class),
                this.homeState[n] = "",
                this.onInputChange({}, n),
                "inputDestino" == n ? this.unsetDestinoMapa() : "inputOrigen" == n && this.unsetOrigenMapa(),
                this.autoFocus()
            }
            ,
            n.prototype.setOrigen = function(n, l, e) {
                this.homeState.origen = {
                    coords: n,
                    properties: l,
                    geometria: e
                },
                this.mapService.setOrigen(n, l, e),
                this.origenSelected = !0
            }
            ,
            n.prototype.setDestino = function(n, l, e) {
                this.homeState.destino = {
                    coords: n,
                    properties: l,
                    geometria: e
                },
                this.mapService.setDestino(n, l, e),
                this.destinoSelected = !0
            }
            ,
            n.prototype.setPuntoEnMapa = function(n) {
                var l = this;
                switch (console.log("setPuntoEnMapa()", [n]),
                !n.data.descripcion && n.text && (n.data.descripcion = n.text),
                this.currentField) {
                case "inputOrigen":
                    this.setOrigen(n.data.geoJSON.coordinates, n.data, n.data.geometria),
                    this.origenSelected = !0;
                    break;
                case "inputDestino":
                    this.setDestino(n.data.geoJSON.coordinates, n.data, n.data.geometria),
                    this.destinoSelected = !0
                }
                "ir_caminando" == this.header.ion_navbar_class || "ir_en_bus" == this.header.ion_navbar_class ? this.recalcularComoIr() : this.mapService.centerMap(n.data.geoJSON.coordinates[0], n.data.geoJSON.coordinates[1]).then(function() {
                    l.updateHeaderHeight()
                })
            }
            ,
            n.prototype.irEnBus = function() {
                var n = this;
                console.log("irEnBus()", this.origenSelected, this.destinoSelected),
                this.origenSelected ? this.destinoSelected ? this.updateMiUbicacion().then(function(l) {
                    n.loadingComoir = n.loadingCtrl.create({
                        content: "Buscando buses para su recorrido. Por favor, espere..."
                    }),
                    n.loadingComoir.present(),
                    n.comoirService.comoirBus(n.mapService.getOrigenSelected(), n.mapService.getDestinoSelected())
                }) : this.showAlert("Atención", "Debe ingresar un destino.", ["OK"]) : this.showAlert("Atención", "Debe ingresar un origen.", ["OK"])
            }
            ,
            n.prototype.irCaminando = function() {
                var n = this;
                this.origenSelected ? this.destinoSelected ? this.updateMiUbicacion().then(function(l) {
                    n.loadingComoir = n.loadingCtrl.create({
                        content: "Buscando camino mas corto. Por favor, espere..."
                    }),
                    n.loadingComoir.present(),
                    n.comoirService.comoirCaminando(n.mapService.getOrigenSelected(), n.mapService.getDestinoSelected())
                }) : this.showAlert("Atención", "Debe ingresar un destino.", ["OK"]) : this.showAlert("Atención", "Debe ingresar un origen.", ["OK"])
            }
            ,
            n.prototype.enableSetOrigen = function() {
                this.enablePressOrigen = !0,
                this.enablePressDestino = !1
            }
            ,
            n.prototype.enableSetDestino = function() {
                this.enablePressOrigen = !1,
                this.enablePressDestino = !0
            }
            ,
            n.prototype.copyToClipboard = function(n) {
                var l = document.createElement("textarea");
                if (l.value = n,
                document.body.appendChild(l),
                navigator.userAgent.match(/ipad|ipod|iphone/i)) {
                    l.contentEditable = "true",
                    l.readOnly = !1;
                    var e = document.createRange();
                    e.selectNodeContents(l);
                    var t = window.getSelection();
                    t.removeAllRanges(),
                    t.addRange(e),
                    l.setSelectionRange(0, 999999)
                } else
                    l.select();
                document.execCommand("copy"),
                document.body.removeChild(l);
                this.toastCtrl.create({
                    message: "El enlace se ha copiado al portapapeles",
                    duration: 3e3,
                    position: "bottom",
                    cssClass: "im-toast"
                }).present()
            }
            ,
            n.prototype.alertSharedLink = function(n, l) {
                var e = this;
                setTimeout(function() {
                    if (null == e.alert) {
                        e.alert = e.alertCtrl.create({
                            title: "Compartir " + n,
                            subTitle: 'Para copiar el enlace al portapapeles presiona el botón "copiar"',
                            message: l,
                            buttons: [{
                                text: "Copiar",
                                handler: function() {
                                    e.copyToClipboard(l)
                                }
                            }]
                        });
                        var t = e.alert.present();
                        return e.alert.onDidDismiss(function() {
                            e.alert = null
                        }),
                        t
                    }
                }, 100)
            }
            ,
            n.prototype.alertGenericServerError = function() {
                return this.showAlert("Error del servidor", "Ocurrió un error al tratar de comunicarnos con el servidor. Vuelva a intentarlo.", ["OK"])
            }
            ,
            n.prototype.alertNoGeolocAllowed = function() {
                return this.showAlert("Geolocalización", "El acceso a la geolocalización fue denegado para esta aplicación.", ["OK"])
            }
            ,
            n.prototype.alertNoGeoloc = function() {
                return this.showAlert("Geolocalización", "Ocurrió un error al intentar acceder a la geolocalización de su dispositivo. Vuelva a intentarlo.", ["OK"])
            }
            ,
            n.prototype.alertNoBuses = function() {
                return this.showAlert("No hay datos", "En este momento no contamos con datos de ómnibus en tiempo real para la parada seleccionada.", ["OK"])
            }
            ,
            n.prototype.alertNoConnection = function() {
                return this.showAlert("Sin conectividad", "No fue posible conectarse con el servidor. Por favor, verifique su conectividad.", ["OK"])
            }
            ,
            n.prototype.alertUnderConstruction = function() {
                return onclick ? (this.mapService.unsetOnClickEvent(),
                this.onclick = !1) : (this.mapService.setOnClickEvent(),
                this.onclick = !0),
                this.showAlert("En construcción", "La funcionalidad que solicitó no ha sido desarrollada todavía. Lo invitamos a intentarlo nuevamente en la próxima versión de la applicación. Disculpe las molestias.", ["OK"])
            }
            ,
            n.prototype.alertPrueba = function() {
                return this.showAlert("Prueba", "Este es un texto de prueba para visualizar el cartel.", ["OK"])
            }
            ,
            n.prototype.alertNoExisteUbicacion = function() {
                return this.showAlert("No hay datos", "No fue posible encontrar una ubicación cercana a la indicada.", ["OK"])
            }
            ,
            n.prototype.alertNoExisteUbicacionGeoreferenciada = function() {
                return this.showAlert("No hay datos", "No fue posible encontrar una ubicación cercana a la indicada por el GPS.", ["OK"])
            }
            ,
            n.prototype.alertErrorRuteo = function(n) {
                return void 0 === n && (n = null),
                this.showAlert("Atención", n || "Ha ocurrido un error, vuelva a intentar luego.", ["OK"])
            }
            ,
            n.prototype.closeBusesModal = function() {
                console.assert(this.modal, "ERROR: se quiso cerrar el modal cuando este estaba en NULL"),
                this.modal && this.modal.dismiss()
            }
            ,
            n.prototype.closeLoader = function() {
                var n = this;
                setTimeout(function() {
                    n.loader && (n.loader.dismiss(),
                    n.loader = null)
                }, 500)
            }
            ,
            n.prototype.backToMap = function() {
                var n = this;
                return this.mapMode ? Promise.resolve() : new Promise(function(l) {
                    n.mapMode = !0,
                    n.mode = "home",
                    n.primerosDatosBusesParadas = !0,
                    n.header.showMapa(),
                    n.transporteService.backToNormal(),
                    n.modalState = "modal-closed",
                    n.mapService.clear(),
                    n.mapService.leaveModalState(),
                    n.mapService.setCurrentState(n.mapCurrentState),
                    n.mapService.hidePopup(),
                    setTimeout(function() {
                        if (n.mapService.deselectAll(),
                        n.updateHeaderHeight(),
                        n.modal) {
                            var e = n.modal;
                            n.modal = null,
                            e.dismiss()
                        }
                        l()
                    }, 1e3)
                }
                )
            }
            ,
            n.prototype.startLoading = function() {
                this.loader || (this.loader = this.loadingCtrl.create({
                    content: "Obteniendo líneas de la parada seleccionada. Por favor, espere..."
                })),
                this.loader.present()
            }
            ,
            n.prototype.onPressEvent = function(n) {
                this.mapService.setOnClickEvent()
            }
            ,
            n.prototype.showAlert = function(n, l, e) {
                var t = this;
                if (null == this.alert) {
                    this.alert = this.alertCtrl.create({
                        title: n,
                        subTitle: l,
                        buttons: e,
                        cssClass: "im-alert"
                    });
                    var a = this.alert.present();
                    return this.alert.onDidDismiss(function() {
                        t.alert = null
                    }),
                    a
                }
            }
            ,
            n = Object(t.__decorate)([Object(t.__param)(24, Object(a.n)(o.a))], n)
        }()
    },
    169: function(n, l, e) {
        "use strict";
        e.d(l, "a", function() {
            return s
        });
        var t = e(0)
          , a = e(1)
          , i = (e(8),
        e(26))
          , o = e(56)
          , r = e(165)
          , u = e(119)
          , s = function() {
            function n(n, l, e, t, a, i, r, u, s, c, d, p, h) {
                this.navCtrl = n,
                this.navParams = l,
                this.events = e,
                this.mapService = t,
                this.comoirService = a,
                this.utilsService = i,
                this.transporteService = r,
                this.modalCtrl = u,
                this.domCtrl = s,
                this.platform = c,
                this.renderer = d,
                this.element = p,
                this.envVariables = h,
                this.data = null,
                this.dataOriginal = null,
                this.itemSelected = 0,
                this.iconParada = null,
                this.iconBus = null,
                this.showSpinner = !1,
                this.showETASpinner = !1,
                this.showTTSpinner = !1,
                this.showPopup = null,
                this.selectedLineas = null,
                this.selectedLineasOptions = {
                    title: "Líneas",
                    subtitle: "Seleccione las que desea filtrar"
                },
                this.lineas = [],
                this.modalElegirHorario = null,
                this.horarioElegido = null,
                this.horarioElegidoCombo = "ahora",
                this.horarioOptions = [],
                this.horaParaOrdenarPasadas = null,
                this.busesOrderOptions = [{
                    value: "caminar-menos",
                    text: "Caminar menos"
                }, {
                    value: "primero-llegar-parada",
                    text: "Primero en pasar"
                }, {
                    value: "llegar-antes",
                    text: "Tiempo de viaje"
                }],
                this.busesOrderSelected = "caminar-menos",
                this.modalDetalle = null,
                this.pasadasPorParada = null,
                this.pasadasConRecorrido = [],
                this.pasadasConRecorridoOriginal = [],
                this.primerosDatosTiempoReal = !0,
                this.codigoCirculares = null,
                this.tiempoViajeRecorridos = null,
                this.bounceBack = !0,
                this.max_width_sm = 500,
                this.iphone_micro_header = 0,
                this.header_height = 150,
                this.header_height_sm = 97,
                this.footer_height = 70,
                this.footer_height_sm = 54,
                this.firstSwipe = !0,
                this.showFull = !1,
                this.swipeState = "swipe-middle",
                this.swiping = !1,
                this.iconBus = o.c,
                this.iconParada = o.v,
                this.showSpinner = !0,
                this.showETASpinner = !0,
                this.showTTSpinner = !0,
                this.primerosDatosTiempoReal = !0,
                this.setData(this.navParams.get("data")),
                this.hidePopupQA(),
                this.events.publish("swipe:change", this.swipeState)
            }
            return n.prototype.compareFn = function(n, l) {
                return n === l
            }
            ,
            n.prototype.log = function(n) {
                console.log(n)
            }
            ,
            n.prototype.calcularHora = function(n) {
                return this.utilsService.calcularHora(n)
            }
            ,
            n.prototype.hidePopupQA = function() {
                this.showPopup = {
                    show: !1
                }
            }
            ,
            n.prototype.showPopupQA = function(n, l) {
                var e, t, a = window.document.getElementById("tiempo_total_" + n.id), i = a.parentElement.parentElement.scrollTop;
                window.innerWidth < 500 ? (e = 76,
                n.recorrido.ruta.trasbordo && (e = 96),
                this.showPopup = {
                    top: a.offsetTop - i + "px",
                    left: "53px",
                    punta: {
                        top: a.offsetTop + e - i + "px",
                        left: "43px"
                    },
                    show: !0
                }) : (e = 120,
                t = 50,
                n.recorrido.ruta.trasbordo && (e = 156,
                t = 80),
                this.showPopup = {
                    top: a.offsetTop + t - i + "px",
                    left: "77px",
                    punta: {
                        top: a.offsetTop + e - i + "px",
                        left: "68px"
                    },
                    show: !0
                }),
                console.log(this.showPopup)
            }
            ,
            n.prototype.extraerDestinoDeDescripcion = function(n) {
                return n.substr(n.lastIndexOf("-") + 2)
            }
            ,
            n.prototype.setData = function(n) {
                var l = this;
                console.log("DATA", n),
                this.data = n;
                var e = !1
                  , t = 0;
                this.data.forEach(function(n) {
                    n.id = t,
                    l.lineas.some(function(l) {
                        return l.l === n.ruta.directo.linea
                    }) || l.lineas.push({
                        l: n.ruta.directo.linea,
                        c: null
                    }),
                    !e && n.ruta.directo.circular && (e = !0),
                    t += 1
                }),
                this.showTTSpinner = !0,
                this.comoirService.duracionRuteo(this.data).subscribe(function(n) {
                    l.showTTSpinner = !1,
                    l.tiempoViajeRecorridos = n
                }, function(n) {
                    l.showTTSpinner = !1,
                    console.error("Something went wrong!", n),
                    l.busesOrderOptions = [{
                        value: "caminar-menos",
                        text: "Caminar menos"
                    }, {
                        value: "primero-llegar-parada",
                        text: "Primero en pasar"
                    }]
                }),
                this.dataOriginal = this.data,
                this.selectedLineas = this.lineas,
                this.selectedLineas.sort(this.utilsService.compareLineas),
                this.horarioOptionsToNormal(!1),
                e && this.transporteService.getCodigoVariantesCirculares().then(function(n) {
                    l.codigoCirculares = n
                }),
                this.updateTextSelectLineas()
            }
            ,
            n.prototype.ionViewDidLoad = function() {}
            ,
            n.prototype.selectRuteo = function(n) {
                this.itemSelected != n ? (this.itemSelected = n,
                this.mostrarRuta()) : this.detalle()
            }
            ,
            n.prototype.mostrarRuta = function() {
                var n = this
                  , l = this.pasadaConRecorridoSelected(this.itemSelected)
                  , e = [{
                    variante: l.recorrido.ruta.directo.codigoVariante,
                    paradaOrigen: l.recorrido.ruta.directo.paradaOrigen.id,
                    paradaDestino: l.recorrido.ruta.directo.paradaDestino.id,
                    circular: l.recorrido.ruta.directo.circular
                }];
                if (l.recorrido.ruta.trasbordo) {
                    e.push({
                        variante: l.recorrido.ruta.trasbordo.codigoVariante,
                        paradaOrigen: l.recorrido.ruta.trasbordo.paradaOrigen.id,
                        paradaDestino: l.recorrido.ruta.trasbordo.paradaDestino.id,
                        circular: l.recorrido.ruta.trasbordo.circular
                    })
                }
                var t = null;
                l.pasada && l.pasada.real && (t = l.pasada),
                this.comoirService.comoirCortarRecorrido(e).subscribe(function(e) {
                    n.mapService.setComoirEnBus(l.recorrido.ruta, e, t)
                }, function(n) {
                    console.log("Something went wrong!", n)
                })
            }
            ,
            n.prototype.detalle = function() {
                this.openIrEnBusDetalleModal()
            }
            ,
            n.prototype.openIrEnBusDetalleModal = function() {
                for (var n = this, l = null, e = 0; e < this.pasadasConRecorrido.length; e++)
                    if (this.pasadasConRecorrido[e].id == this.itemSelected) {
                        l = this.pasadasConRecorrido[e];
                        break
                    }
                var t = this.mapService.getDestinoSelected().descripcion
                  , a = this.mapService.getOrigenSelected().descripcion
                  , i = this.tiempoViajeIdRecorrido(l.recorrido.id, !1)
                  , o = this.tiempoViajeIdRecorrido(l.recorrido.id, !0);
                return this.modalDetalle = this.modalCtrl.create(r.a, {
                    pasadaConRecorrido: l,
                    destino: t,
                    origen: a,
                    tiempoTotalViaje1: i,
                    tiempoTotalViaje2: o
                }, {
                    enableBackdropDismiss: !0,
                    cssClass: "busDetailsModal"
                }),
                this.modalDetalle.onDidDismiss(function(l) {
                    n.modalDetalle = null
                }),
                this.modalDetalle.present()
            }
            ,
            n.prototype.changeSelectLineas = function(n) {
                var l = this;
                console.log("changeSelectLineas()", n),
                this.selectedLineas = n,
                n && 0 != n.length || (this.selectedLineas = this.lineas);
                var e = null;
                if (this.pasadasConRecorrido && this.pasadasConRecorrido.length > 0 && null != this.itemSelected) {
                    var t = this.pasadaConRecorridoSelected(this.itemSelected);
                    e = t ? t.recorrido.id : null
                }
                if (this.filtrarPasadasRecorrido(),
                this.volverASeleccionarRecorrido(e),
                this.horarioElegidoCombo && "ahora" == this.horarioElegidoCombo) {
                    var a = [];
                    this.selectedLineas && this.selectedLineas.length > 0 && this.dataOriginal.forEach(function(n) {
                        for (var e = 0; e < l.selectedLineas.length; e++)
                            if (n.ruta.directo.linea == l.selectedLineas[e].l) {
                                a.push(n);
                                break
                            }
                    }),
                    this.events.publish("irenbusmodal:filtrar-lineas", this.utilsService.mapParadasVariantesFromRecorridos(a))
                } else
                    this.getHorariosTeoricos();
                this.updateTextSelectLineas()
            }
            ,
            n.prototype.filtrarPasadasRecorrido = function() {
                var n = this;
                this.selectedLineas && this.selectedLineas.length > 0 && this.pasadasConRecorridoOriginal && this.pasadasConRecorridoOriginal.length > 0 && (this.pasadasConRecorrido = [],
                this.selectedLineas.forEach(function(l) {
                    for (var e = 0; e < n.pasadasConRecorridoOriginal.length; e++)
                        n.pasadasConRecorridoOriginal[e].pasada.linea == l.l && n.pasadasConRecorrido.push(n.pasadasConRecorridoOriginal[e])
                })),
                this.pasadasConRecorrido && 0 != this.pasadasConRecorrido.length ? this.ordenarPasadasConRecorrido() : (this.mapService.limpiarRuteoComoir(),
                this.mapService.deleteBusesRealTime(),
                this.showSpinner = !0)
            }
            ,
            n.prototype.updateTextSelectLineas = function() {
                var n = "";
                if (this.selectedLineas && 0 != this.selectedLineas.length && this.selectedLineas.length != this.lineas.length)
                    for (var l = 0; l < this.selectedLineas.length; l++)
                        0 != l && (n += ", "),
                        n += this.selectedLineas[l].l;
                else
                    n = "Todas las líneas";
                console.log("updateTextSelectLineas()", n),
                this.textSelectedLineas = n
            }
            ,
            n.prototype.onChangeHora = function(n) {
                "elegir" == n || "cambiar" == n ? this.openElegirHorarioModal() : "ahora" == n ? this.horarioOptionsToNormal() : this.horarioOptionsToElegido()
            }
            ,
            n.prototype.horarioOptionsToNormal = function(n) {
                if (void 0 === n && (n = !0),
                this.horarioOptions = [{
                    value: "ahora",
                    text: "Ahora"
                }, {
                    value: "elegir",
                    text: "Elegir horario"
                }],
                this.horarioElegidoCombo = "ahora",
                n) {
                    var l = [];
                    this.pasadasConRecorrido.forEach(function(n) {
                        l.push(n.recorrido)
                    }),
                    this.pasadasConRecorrido = [],
                    this.showSpinner = !0,
                    this.events.publish("ifenbusmodal:horario-real", this.utilsService.mapParadasVariantesFromRecorridos(l))
                }
            }
            ,
            n.prototype.getHorariosTeoricos = function() {
                var n = this
                  , l = this.horarioElegido.hora.HH
                  , e = this.horarioElegido.hora.mm;
                e < 10 && (e = "0" + e);
                var t = [];
                this.dataOriginal.forEach(function(l) {
                    for (var e = 0; e < n.selectedLineas.length; e++)
                        if (l.ruta.directo.linea == n.selectedLineas[e].l) {
                            t.push(l);
                            break
                        }
                }),
                this.pasadasConRecorrido = [],
                this.showSpinner = !0,
                this.events.publish("irenbusmodal:horario-teorico", {
                    mapParadasRecorridos: this.utilsService.mapParadasVariantesFromRecorridos(t),
                    horario: {
                        hora: l + ":" + e,
                        tipoDia: this.horarioElegido.tipoDia,
                        tipoDiaTexto: this.horarioElegido.tipoDiaTexto
                    }
                })
            }
            ,
            n.prototype.horarioOptionsToElegido = function(n) {
                void 0 === n && (n = !0),
                n && this.getHorariosTeoricos(),
                this.horarioOptions = [{
                    value: "ahora",
                    text: "Ahora"
                }, {
                    value: "cambiar",
                    text: "Cambiar hora"
                }, {
                    value: "elegido",
                    text: this.textSelectHorario()
                }],
                this.horarioElegidoCombo = "elegido"
            }
            ,
            n.prototype.openElegirHorarioModal = function() {
                var n = this;
                return this.modalElegirHorario = this.modalCtrl.create(u.a, this.horarioElegido ? {
                    horarioElegido: this.horarioElegido
                } : null, {
                    enableBackdropDismiss: !0
                }),
                this.modalElegirHorario.onDidDismiss(function(l) {
                    if (l) {
                        var e = !1;
                        n.horarioElegido && n.horarioElegido.hora.HH == l.hora.HH && n.horarioElegido.hora.mm == l.hora.mm && n.horarioElegido.tipoDia == l.tipoDia || (n.horarioElegido = l,
                        e = !0),
                        n.horarioOptionsToElegido(e)
                    } else
                        "cambiar" == n.horarioElegidoCombo ? n.horarioOptionsToElegido(!1) : n.horarioOptionsToNormal(!1)
                }),
                this.modalElegirHorario.present()
            }
            ,
            n.prototype.textSelectHorario = function() {
                var n = "Ahora";
                return "ahora" == this.horarioElegidoCombo || this.horarioElegido && (n = this.horarioElegido.hora.HH + ":" + (this.horarioElegido.hora.mm < 10 ? "0" : "") + this.horarioElegido.hora.mm + " (" + this.horarioElegido.tipoDiaTexto + ")"),
                n
            }
            ,
            n.prototype.onChangeBusesOrder = function(n) {
                this.horaParaOrdenarPasadas = this.horaElegidaNumber(),
                this.pasadasConRecorrido.sort("caminar-menos" == this.busesOrderSelected ? this.comparePasadaConRecorridoFn.bind(this) : "llegar-antes" == this.busesOrderSelected ? this.comparePasadaConRecorridoPorTiempoViajeFn.bind(this) : this.comparePasadaConRecorridoPorHoraFn.bind(this)),
                this.itemSelected = this.pasadasConRecorrido[0].id,
                this.mostrarRuta()
            }
            ,
            n.prototype.pasadasBusesPorParada = function(n) {
                var l = this;
                console.log("pasadasBusesPorParada", n);
                var e = null;
                if (this.pasadasConRecorrido && this.pasadasConRecorrido.length > 0 && null != this.itemSelected) {
                    var t = this.pasadaConRecorridoSelected(this.itemSelected);
                    e = t ? t.recorrido.id : null
                }
                this.pasadasPorParada = new Map,
                Object.keys(n).forEach(function(e) {
                    var t = n[e]
                      , a = [];
                    Object.keys(t).forEach(function(n) {
                        var l = !1;
                        "true" == n && (l = !0);
                        t[n].forEach(function(n) {
                            n.circular = l,
                            a.push(n)
                        })
                    }),
                    l.pasadasPorParada.set(e, a)
                }),
                this.pasadasConRecorrido = [];
                var a = 0;
                if (this.pasadasPorParada.forEach(function(n, e) {
                    n && n.forEach(function(n) {
                        for (var t = 0; t < l.data.length; t++) {
                            var i = l.data[t];
                            if (i.ruta.directo.circular == n.circular || i.ruta.trasbordo && !n.circular) {
                                var o = !1;
                                if (i.ruta.directo.paradaOrigen.id == e) {
                                    var r = i.ruta.directo.maximales;
                                    if (r) {
                                        for (var u = 0; u < r.length; u++) {
                                            if (i.ruta.directo.circular)
                                                for (var s = 0; s < r[u].codigo.length; s++) {
                                                    if ((h = l.variantesDeCirculares(r[u].codigo[s])) && h >= 0 && h == n.variante) {
                                                        o = !0;
                                                        break
                                                    }
                                                }
                                            else
                                                r[u].codigo.find(function(l) {
                                                    return l == n.variante
                                                }) && (o = !0);
                                            if (o)
                                                break
                                        }
                                        var c = i.ruta.directo.noMaximales;
                                        if (!o && c)
                                            for (var d = 0; d < c.length; d++) {
                                                if (i.ruta.directo.circular)
                                                    for (var p = 0; p < c[d].codigo.length; p++) {
                                                        var h;
                                                        if ((h = l.variantesDeCirculares(c[d].codigo[p])) && h >= 0 && h == n.variante) {
                                                            o = !0;
                                                            break
                                                        }
                                                    }
                                                else
                                                    c[d].codigo.find(function(l) {
                                                        return l == n.variante
                                                    }) && (o = !0);
                                                if (o)
                                                    break
                                            }
                                    }
                                    if (o) {
                                        var m = l.tiempoTotalRecorrido(n, i);
                                        l.pasadasConRecorrido.push({
                                            id: a,
                                            recorrido: i,
                                            pasada: n,
                                            tiempoTotalConfianza: m
                                        }),
                                        a += 1
                                    }
                                }
                            }
                        }
                    })
                }),
                this.pasadasConRecorridoOriginal = this.pasadasConRecorrido,
                this.pasadasConRecorrido && this.pasadasConRecorrido.length > 0)
                    if (this.lineas && this.selectedLineas && this.selectedLineas.length > 0 && this.selectedLineas.length != this.lineas.length && this.filtrarPasadasRecorrido(),
                    this.ordenarPasadasConRecorrido(),
                    this.volverASeleccionarRecorrido(e),
                    this.primerosDatosTiempoReal)
                        this.mostrarRuta();
                    else {
                        var i = this.pasadaConRecorridoSelected(this.itemSelected);
                        i && (this.mapService.setBusesRealTime([i.pasada], !1),
                        this.modalDetalle && this.modalDetalle.overlay.instance.updatePasada(i))
                    }
                this.primerosDatosTiempoReal = !1,
                this.showSpinner = !1
            }
            ,
            n.prototype.ordenarPasadasConRecorrido = function() {
                this.horaParaOrdenarPasadas = this.horaElegidaNumber(),
                "caminar-menos" == this.busesOrderSelected ? this.pasadasConRecorrido.sort(this.comparePasadaConRecorridoFn.bind(this)) : "llegar-antes" == this.busesOrderSelected ? this.pasadasConRecorrido.sort(this.comparePasadaConRecorridoPorTiempoViajeFn.bind(this)) : "primero-llegar-parada" == this.busesOrderSelected && this.pasadasConRecorrido.sort(this.comparePasadaConRecorridoPorHoraFn.bind(this))
            }
            ,
            n.prototype.volverASeleccionarRecorrido = function(n) {
                void 0 === n && (n = null);
                var l = !1;
                if (null != n)
                    for (var e = 0; e < this.pasadasConRecorrido.length; e++)
                        if (this.pasadasConRecorrido[e].recorrido.id == n) {
                            this.itemSelected = this.pasadasConRecorrido[e].id,
                            l = !0;
                            break
                        }
                l || (this.itemSelected = this.pasadasConRecorrido[0] ? this.pasadasConRecorrido[0].id : 0,
                this.pasadasConRecorrido[0] && this.mostrarRuta())
            }
            ,
            n.prototype.recalculandoRecorrido = function() {
                this.showSpinner = !0,
                this.showETASpinner = !0,
                this.showTTSpinner = !0,
                this.primerosDatosTiempoReal = !0,
                this.pasadasConRecorrido = [],
                this.selectedLineas = [],
                this.lineas = [],
                this.itemSelected = 0
            }
            ,
            n.prototype.pasadaConRecorridoSelected = function(n) {
                for (var l = 0; l < this.pasadasConRecorrido.length; l++)
                    if (this.pasadasConRecorrido[l].id == n)
                        return this.pasadasConRecorrido[l];
                return null
            }
            ,
            n.prototype.comparePasadaConRecorridoFn = function(n, l) {
                return n.recorrido.id < l.recorrido.id ? -1 : n.recorrido.id > l.recorrido.id ? 1 : n.pasada && l.pasada ? this.comparePasadaConRecorridoPorHoraFn(n, l) : 0
            }
            ,
            n.prototype.comparePasadaConRecorridoPorHoraFn = function(n, l) {
                var e = this.horaParaOrdenarPasadas
                  , t = n.pasada.hora
                  , a = l.pasada.hora;
                return t < e && (t += 2400),
                a < e && (a += 2400),
                t < a ? -1 : t > a ? 1 : 0
            }
            ,
            n.prototype.comparePasadaConRecorridoPorTiempoViajeFn = function(n, l) {
                var e = n.tiempoTotalConfianza ? n.tiempoTotalConfianza.tiempoTotal : null
                  , t = l.tiempoTotalConfianza ? l.tiempoTotalConfianza.tiempoTotal : null;
                return e || t ? !e && t ? 1 : e && !t ? -1 : e < t ? -1 : e > t ? 1 : 0 : 0
            }
            ,
            n.prototype.horaElegidaNumber = function() {
                var n = null;
                if ("ahora" == this.horarioElegidoCombo) {
                    var l = new Date((new Date).getTime() - 9e5);
                    n = 100 * l.getHours() + l.getMinutes()
                } else
                    this.horarioElegido && (n = 100 * this.horarioElegido.hora.HH + this.horarioElegido.hora.mm);
                return n
            }
            ,
            n.prototype.variantesDeCirculares = function(n) {
                var l = this;
                if (this.codigoCirculares) {
                    if (this.codigoCirculares[n])
                        return this.codigoCirculares[n][0]
                } else
                    this.transporteService.getCodigoVariantesCirculares().then(function(e) {
                        if (l.codigoCirculares = e,
                        l.codigoCirculares[n])
                            return l.codigoCirculares[n][0]
                    });
                return -1
            }
            ,
            n.prototype.tiempoTotalRecorrido = function(n, l) {
                var e = null
                  , t = null
                  , a = 2;
                if (this.tiempoViajeRecorridos && l) {
                    var i = l.id;
                    if (t = this.tiempoViajeIdRecorrido(i, !1)) {
                        if (l.ruta.trasbordo) {
                            a -= 1,
                            n.real || (a -= 1);
                            var o = this.tiempoViajeIdRecorrido(i, !0);
                            o && (t += o);
                            t += Math.round(l.ruta.trasbordo.caminarTrasbordo.largo / 100);
                            t += Math.round(l.ruta.trasbordo.caminarLlegada.largo / 100)
                        } else {
                            n.real || (a -= 2);
                            t += Math.round(l.ruta.directo.caminarLlegada.largo / 100)
                        }
                        n && n.minutos && "ahora" == this.horarioElegidoCombo && (t += n.minutos)
                    }
                    e = {
                        tiempoTotal: t,
                        confianza: a
                    }
                }
                return e
            }
            ,
            n.prototype.tiempoViajeIdRecorrido = function(n, l) {
                void 0 === l && (l = !1);
                var e = null
                  , t = this.horaElegidaNumber();
                if (this.tiempoViajeRecorridos && t) {
                    l && (n += o.q);
                    var a = this.tiempoViajeRecorridos[n];
                    if (a) {
                        var i = a[this.tipoDeDiaElegidoNumber()]
                          , r = Math.floor(t / 100);
                        i && (e = i[r])
                    }
                }
                return e
            }
            ,
            n.prototype.tipoDeDiaElegidoNumber = function() {
                var n = null;
                if ("ahora" == this.horarioElegidoCombo) {
                    var l = (new Date).getDay();
                    n = 0 == l ? 3 : 6 == l ? 2 : 1
                } else
                    this.horarioElegido && (n = this.horarioElegido.tipoDia);
                return n
            }
            ,
            n.prototype.ngAfterViewInit = function() {
                var n = this
                  , l = this.header_height
                  , e = this.platform.height() - this.footer_height
                  , t = .6 * this.platform.height();
                this.platform.width() < this.max_width_sm && (l = this.header_height_sm,
                e = this.platform.height() - this.footer_height_sm),
                this.platform.is("ios") && (l += this.iphone_micro_header),
                this.puntos = [{
                    threshold: 200,
                    top: l
                }, {
                    threshold: 200,
                    top: t
                }, {
                    threshold: 200,
                    top: e
                }];
                var a = new window.Hammer(this.element.nativeElement);
                a.get("pan").set({
                    direction: window.Hammer.DIRECTION_VERTICAL
                }),
                a.on("pan", function(l) {
                    n.ionicList.nativeElement.contains(l.target) || n.handlePan(l)
                })
            }
            ,
            n.prototype.fallBackToPoint = function(n) {
                var l = this;
                this.showFull = 0 == n,
                this.domCtrl.write(function() {
                    l.renderer.setElementStyle(l.element.nativeElement, "transition", "top 0.5s"),
                    l.renderer.setElementStyle(l.element.nativeElement, "top", l.puntos[n].top + "px"),
                    l.renderer.setElementClass(l.element.nativeElement, "full", l.showFull)
                });
                var e = this.swipeState;
                switch (n) {
                case 0:
                    this.swipeState = "swipe-top";
                    break;
                case 1:
                    this.swipeState = "swipe-middle";
                    break;
                case 2:
                    this.swipeState = "swipe-down";
                    break;
                default:
                    console.error("WTF???")
                }
                e != this.swipeState && this.events.publish("swipe:change", this.swipeState)
            }
            ,
            n.prototype.dragVertically = function(n) {
                var l = this;
                this.renderer.setElementStyle(this.element.nativeElement, "transition", "none"),
                n > this.puntos[0].top && n < this.puntos[this.puntos.length - 1].top && this.domCtrl.write(function() {
                    l.renderer.setElementStyle(l.element.nativeElement, "top", n + "px")
                })
            }
            ,
            n.prototype.handlePan = function(n) {
                var l, e = n.center.y, t = -1, a = 2 * this.platform.height();
                if (this.bounceBack && n.isFinal)
                    for (var i in this.puntos)
                        (l = Math.abs(this.puntos[i].top - e)) < a && (t = parseInt(i),
                        a = l);
                -1 != t ? this.fallBackToPoint(t) : "panup" !== n.additionalEvent && "pandown" !== n.additionalEvent || this.dragVertically(e)
            }
            ,
            n.prototype.swipeBusModal = function(n, l) {
                var e = this;
                this.swiping || (this.swiping = !0,
                this.showFull = !this.showFull,
                this.firstSwipe && (this.firstSwipe = !1,
                this.showFull = !1),
                this.swiping && setTimeout(function() {
                    e.swiping = !1
                }, 250),
                l.preventDefault(),
                this.fallBackToPoint(this.showFull ? 0 : 2))
            }
            ,
            n.prototype.void = function() {}
            ,
            n = Object(t.__decorate)([Object(t.__param)(12, Object(a.n)(i.a))], n)
        }()
    },
    170: function(n, l, e) {
        "use strict";
        e.d(l, "a", function() {
            return i
        });
        e(0),
        e(8);
        var t = this && this.__awaiter || function(n, l, e, t) {
            return new (e || (e = Promise))(function(a, i) {
                function o(n) {
                    try {
                        u(t.next(n))
                    } catch (n) {
                        i(n)
                    }
                }
                function r(n) {
                    try {
                        u(t.throw(n))
                    } catch (n) {
                        i(n)
                    }
                }
                function u(n) {
                    n.done ? a(n.value) : new e(function(l) {
                        l(n.value)
                    }
                    ).then(o, r)
                }
                u((t = t.apply(n, l || [])).next())
            }
            )
        }
          , a = this && this.__generator || function(n, l) {
            function e(e) {
                return function(o) {
                    return function(e) {
                        if (t)
                            throw new TypeError("Generator is already executing.");
                        for (; r; )
                            try {
                                if (t = 1,
                                a && (i = a[2 & e[0] ? "return" : e[0] ? "throw" : "next"]) && !(i = i.call(a, e[1])).done)
                                    return i;
                                switch (a = 0,
                                i && (e = [0, i.value]),
                                e[0]) {
                                case 0:
                                case 1:
                                    i = e;
                                    break;
                                case 4:
                                    return r.label++,
                                    {
                                        value: e[1],
                                        done: !1
                                    };
                                case 5:
                                    r.label++,
                                    a = e[1],
                                    e = [0];
                                    continue;
                                case 7:
                                    e = r.ops.pop(),
                                    r.trys.pop();
                                    continue;
                                default:
                                    if (i = r.trys,
                                    !(i = i.length > 0 && i[i.length - 1]) && (6 === e[0] || 2 === e[0])) {
                                        r = 0;
                                        continue
                                    }
                                    if (3 === e[0] && (!i || e[1] > i[0] && e[1] < i[3])) {
                                        r.label = e[1];
                                        break
                                    }
                                    if (6 === e[0] && r.label < i[1]) {
                                        r.label = i[1],
                                        i = e;
                                        break
                                    }
                                    if (i && r.label < i[2]) {
                                        r.label = i[2],
                                        r.ops.push(e);
                                        break
                                    }
                                    i[2] && r.ops.pop(),
                                    r.trys.pop();
                                    continue
                                }
                                e = l.call(n, r)
                            } catch (n) {
                                e = [6, n],
                                a = 0
                            } finally {
                                t = i = 0
                            }
                        if (5 & e[0])
                            throw e[1];
                        return {
                            value: e[0] ? e[1] : void 0,
                            done: !0
                        }
                    }([e, o])
                }
            }
            var t, a, i, o, r = {
                label: 0,
                sent: function() {
                    if (1 & i[0])
                        throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: e(0),
                throw: e(1),
                return: e(2)
            },
            "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o
        }
          , i = function() {
            function n(n, l, e, t) {
                var a = this;
                this.events = n,
                this.data = l,
                this.alertCtrl = e,
                this.push = t,
                this.messages = [],
                this.checkShowMessage(),
                this.events.subscribe("push:new-message", function(n) {
                    setTimeout(function(n) {
                        a.push.refresh()
                    }, 500)
                })
            }
            return n.prototype.checkShowMessage = function() {
                return t(this, void 0, void 0, function() {
                    var n, l = this;
                    return a(this, function(e) {
                        return (n = this.push.clearReadMsg()) && this.data.getMessage(n).then(function(e) {
                            l.readMsg = e,
                            l.push.setMessageAsRead(n)
                        }),
                        [2]
                    })
                })
            }
            ,
            n.prototype.backToHome = function() {
                console.log("FavoritosPage.backToHome()", this.readMsg),
                this.readMsg ? (delete this.readMsg,
                this.push.refresh()) : this.events.publish("nav:load-home")
            }
            ,
            n.prototype.openMsg = function(n) {
                var l = this;
                console.log("openMsg", n),
                this.data.getMessage(n.idMensaje).then(function(e) {
                    l.readMsg = e,
                    l.push.setMessageAsRead(n.idMensaje)
                })
            }
            ,
            n.prototype.deleteNotificacion = function(n, l) {
                var e = this;
                console.error("HAY QUE TYPAR ESTE DATO: ", l),
                n.preventDefault(),
                n.stopPropagation(),
                n.stopImmediatePropagation(),
                console.log("FavoritosPage.deleteNotificacion()", [n, l]),
                this.askDeleteConfirmation(l.title, l.summary).then(function(n) {
                    return e.data.removeMessage(l).then(function(n) {
                        return e.push.refresh()
                    })
                }).catch(function(n) {
                    return console.error(n)
                })
            }
            ,
            n.prototype.askDeleteConfirmation = function(n, l) {
                return t(this, void 0, void 0, function() {
                    var e = this;
                    return a(this, function(t) {
                        return console.log("NotificacionesPage.askDeleteConfirmation()", [n, l]),
                        [2, new Promise(function(t, a) {
                            e.alertCtrl.create({
                                title: "Borrar Mensaje",
                                subTitle: n,
                                message: l,
                                cssClass: "fav-alert",
                                buttons: [{
                                    text: "Cancelar",
                                    role: "cancel",
                                    handler: a
                                }, {
                                    text: "Aceptar",
                                    handler: function(n) {
                                        t(!0)
                                    }
                                }]
                            }).present()
                        }
                        )]
                    })
                })
            }
            ,
            n
        }()
    },
    223: function(n, l, e) {
        "use strict";
        e.d(l, "a", function() {
            return t
        });
        e(0),
        e(8),
        e(224);
        var t = function() {
            function n(n, l) {
                this.events = n,
                this.geolocation = l,
                this.watchObservable = null,
                this.mapService = null
            }
            return n.prototype.getCurrentPosition = function() {
                return this.geolocation.getCurrentPosition({
                    enableHighAccuracy: !0,
                    maximumAge: 0,
                    timeout: 5e3
                })
            }
            ,
            n.prototype.watchPosition = function() {
                var n = this;
                this.watchObservable || (this.watchObservable = this.geolocation.watchPosition({
                    enableHighAccuracy: !1,
                    maximumAge: 3e3,
                    timeout: 1e4
                }).subscribe(function(l) {
                    void 0 !== l.coords && n.events.publish("map-utils-geolocation-service:update-geolocation", l)
                }))
            }
            ,
            n.prototype.unwatchPosition = function() {
                this.watchObservable && (this.watchObservable.unsubscribe(),
                this.watchObservable = null)
            }
            ,
            n
        }()
    },
    225: function(n, l, e) {
        "use strict";
        e.d(l, "a", function() {
            return u
        });
        var t = e(0)
          , a = e(1)
          , i = (e(8),
        e(26))
          , o = e(56)
          , r = e(113)
          , u = (e.n(r),
        function() {
            function n(n, l) {
                this.events = n,
                this.envVariables = l,
                this.paradasVectorSrcTileGrid = null,
                this.paradasVectorLayerTileGrid = null,
                this.paradasDeshabilitadasVectorSource = null,
                this.paradasDeshabilitadasVectorLayer = null,
                this.paradaSeleccionadaFeature = null,
                this.paradaDeshabilitadaSeleccionadaFeature = null,
                this.paradaSeleccionadaSource = null,
                this.paradaSeleccionadaLayer = null,
                this.interaccionSeleccionarParada = null,
                this.showParadas = !0,
                this.showParadasIntermedias = !1,
                this.paradasIntermediasDirectoSource = null,
                this.paradasIntermediasDirectoLayer = null,
                this.paradasIntermediasTrasbordoSource = null,
                this.paradasIntermediasTrasbordoLayer = null,
                this.altoIconoParada = 40,
                this.olStyleParada = null,
                this.olStyleParadaShadow = null,
                this.olStyleParadaHiden = new r.style.Style({}),
                this.olStyleParadaDeshabilitada = null,
                this.olStyleParadaIntermedia = null,
                this.overlayParadaDeshabilitada = null
            }
            return n.prototype.iniciar = function(n, l, e, t, a, i, o) {
                this.iniciarEstilosYZIndex(n, l, e, o),
                this.iniciarSourcesYLayers(t, a, i),
                this.iniciarEventoSeleccionarParada()
            }
            ,
            n.prototype.iniciarEstilosYZIndex = function(n, l, e, t) {
                this.olStyleParada = new r.style.Style({
                    image: new r.style.Icon({
                        anchor: [.5, 1],
                        size: [34, this.altoIconoParada],
                        scale: 1,
                        anchorXUnits: "fraction",
                        anchorYUnits: "fraction",
                        src: o.v
                    }),
                    zIndex: n
                }),
                this.olStyleParadaShadow = new r.style.Style({
                    image: new r.style.Icon({
                        anchor: [.42, .87],
                        size: [42, 49],
                        scale: 1,
                        anchorXUnits: "fraction",
                        anchorYUnits: "fraction",
                        src: o.u
                    }),
                    zIndex: l
                }),
                this.olStyleParadaHiden = new r.style.Style({}),
                this.olStyleParadaDeshabilitada = new r.style.Style({
                    image: new r.style.Icon({
                        anchor: [.45, 1],
                        size: [39, 46],
                        scale: 1,
                        anchorXUnits: "fraction",
                        anchorYUnits: "fraction",
                        src: o.t
                    }),
                    zIndex: e
                }),
                this.olStyleParadaIntermedia = new r.style.Style({
                    image: new r.style.Icon({
                        anchor: [.5, 1],
                        size: [36, 42],
                        scale: .8,
                        anchorXUnits: "fraction",
                        anchorYUnits: "fraction",
                        src: o.w
                    }),
                    zIndex: t
                })
            }
            ,
            n.prototype.iniciarSourcesYLayers = function(n, l, e) {
                var t = this
                  , a = r.tilegrid.createXYZ({
                    minZoom: 16,
                    maxZoom: 19
                })
                  , i = this.envVariables;
                this.paradasVectorSrcTileGrid = new r.source.Vector({
                    format: new r.format.GeoJSON({
                        defaultDataProjection: o.x,
                        featureProjection: o.x
                    }),
                    strategy: r.loadingstrategy.tile(a),
                    url: function(n, l) {
                        var e = a.getTileCoordForCoordAndResolution(r.extent.getCenter(n), l)
                          , t = e[0]
                          , u = e[1]
                          , s = e[2];
                        return s = Math.pow(2, t) + s,
                        i.GEOWEB_CACHE_VECTOR_TILE_PARADAS[Math.floor(Math.random() * i.GEOWEB_CACHE_VECTOR_TILE_PARADAS.length)] + "@EPSG%3A" + o.y + "@geojson/" + t + "/" + u + "/" + s + ".geojson"
                    }
                }),
                this.paradasVectorLayerTileGrid = new r.layer.Vector({
                    source: this.paradasVectorSrcTileGrid,
                    maxResolution: 3,
                    updateWhileAnimating: !0,
                    updateWhileInteracting: !0,
                    zIndex: n,
                    style: [this.olStyleParada, this.olStyleParadaShadow]
                }),
                this.paradasDeshabilitadasVectorSource = new r.source.Vector({
                    format: new r.format.GeoJSON({
                        defaultDataProjection: o.x,
                        featureProjection: o.x
                    }),
                    url: function(n) {
                        return i.GEOSERVER_WFS_PARADAS_DESHABILITADAS + "&srsname=EPSG%3A" + o.y + "&bbox=" + n.join(",") + ",EPSG%3A" + o.y
                    },
                    strategy: r.loadingstrategy.bbox
                }),
                this.paradasDeshabilitadasVectorLayer = new r.layer.Vector({
                    source: this.paradasDeshabilitadasVectorSource,
                    maxResolution: 3,
                    updateWhileAnimating: !0,
                    updateWhileInteracting: !0,
                    zIndex: l,
                    style: this.olStyleParadaDeshabilitada
                }),
                this.paradaSeleccionadaSource = new r.source.Vector({
                    useSpatialIndex: !1
                }),
                this.paradaSeleccionadaLayer = new r.layer.Vector({
                    source: this.paradaSeleccionadaSource,
                    zIndex: e
                }),
                this.paradasIntermediasDirectoSource = new r.source.Vector({
                    useSpatialIndex: !1
                }),
                this.paradasIntermediasTrasbordoSource = new r.source.Vector({
                    useSpatialIndex: !1
                }),
                this.paradasIntermediasDirectoLayer = new r.layer.Vector({
                    source: this.paradasIntermediasDirectoSource,
                    style: function(n, l) {
                        return l > 5 ? t.olStyleParadaHiden : t.olStyleParadaIntermedia
                    }
                }),
                this.paradasIntermediasTrasbordoLayer = new r.layer.Vector({
                    source: this.paradasIntermediasTrasbordoSource,
                    style: function(n, l) {
                        return l > 5 ? t.olStyleParadaHiden : t.olStyleParadaIntermedia
                    }
                })
            }
            ,
            n.prototype.iniciarEventoSeleccionarParada = function() {
                this.interaccionSeleccionarParada = new r.interaction.Select({
                    style: [this.olStyleParadaHiden],
                    condition: r.events.condition.singleClick,
                    multi: !0,
                    layers: [this.paradasVectorLayerTileGrid, this.paradasDeshabilitadasVectorLayer]
                })
            }
            ,
            n.prototype.obtenerCoordenadasParadaSeleccionada = function() {
                return this.paradaSeleccionadaFeature.getGeometry().getCoordinates()
            }
            ,
            n.prototype.obtenerParadaSeleccionada = function() {
                return this.paradaSeleccionadaFeature
            }
            ,
            n.prototype.obtenerEstiloParadas = function() {
                return this.olStyleParada
            }
            ,
            n.prototype.obtenerEstiloParadasSombra = function() {
                return this.olStyleParadaShadow
            }
            ,
            n.prototype.obtenerLayerParadas = function() {
                return this.paradasVectorLayerTileGrid
            }
            ,
            n.prototype.obtenerLayerParadasDeshabilitadas = function() {
                return this.paradasDeshabilitadasVectorLayer
            }
            ,
            n.prototype.obtenerLayerParadaSeleccionada = function() {
                return this.paradaSeleccionadaLayer
            }
            ,
            n.prototype.obtenerLayerParadasIntermediasDirecto = function() {
                return this.paradasIntermediasDirectoLayer
            }
            ,
            n.prototype.obtenerLayerParadasIntermediasTrasbordo = function() {
                return this.paradasIntermediasTrasbordoLayer
            }
            ,
            n.prototype.deseleccionarParadas = function() {
                this.paradaSeleccionadaSource.clear(!0),
                this.paradaSeleccionadaFeature = null,
                this.paradaDeshabilitadaSeleccionadaFeature = null,
                this.paradaSeleccionadaLayer.setVisible(!1),
                this.interaccionSeleccionarParada.getFeatures().clear(),
                this.mostrarParadas()
            }
            ,
            n.prototype.ocultarParadas = function() {
                this.showParadas = !1,
                this.paradasVectorLayerTileGrid.setVisible(this.showParadas),
                this.paradasDeshabilitadasVectorLayer.setVisible(this.showParadas)
            }
            ,
            n.prototype.mostrarParadas = function() {
                this.showParadas = !0,
                this.paradasVectorLayerTileGrid.setVisible(this.showParadas),
                this.paradasDeshabilitadasVectorLayer.setVisible(this.showParadas)
            }
            ,
            n.prototype.eventoSeleccionarParada = function(n) {
                if (!this.paradaSeleccionadaFeature && n.selected.length > 0)
                    for (var l = 0; null == this.paradaSeleccionadaFeature && l < n.selected.length; ) {
                        var e = n.selected[l];
                        if (!e.get("fecha_desde_ubic_deshabilitada")) {
                            this.paradaSeleccionadaFeature = e,
                            this.paradaSeleccionadaFeature.setStyle(this.olStyleParada);
                            for (var t = 0; null == this.paradaDeshabilitadaSeleccionadaFeature && t < n.selected.length; ) {
                                var a = n.selected[t];
                                null != a.get("fecha_desde_ubic_deshabilitada") && a.get("cod_ubic_parada") == e.get("cod_ubic_parada") && (this.paradaDeshabilitadaSeleccionadaFeature = a,
                                this.paradaDeshabilitadaSeleccionadaFeature.setStyle(this.olStyleParadaDeshabilitada),
                                this.paradaSeleccionadaSource.addFeature(this.paradaDeshabilitadaSeleccionadaFeature),
                                this.events.publish("maputils:parada-desh-seleccionada", {
                                    featureParadaDeshabilitada: a,
                                    event: n
                                }),
                                this.overlayParadaDeshabilitada.setPosition(a.get("geometry").getCoordinates())),
                                t += 1
                            }
                            this.paradaSeleccionadaSource.addFeature(this.paradaSeleccionadaFeature),
                            this.paradasDeshabilitadasVectorLayer.setVisible(!1),
                            this.paradasVectorLayerTileGrid.setVisible(!1),
                            this.paradaSeleccionadaLayer.setVisible(!0),
                            this.events.publish("maputils:parada-seleccionada", {
                                selected: e
                            })
                        }
                        l += 1
                    }
                else
                    ;
            }
            ,
            n.prototype.setEventoSeleccionarParada = function(n) {
                return this.interaccionSeleccionarParada || this.iniciarEventoSeleccionarParada(),
                n.addInteraction(this.interaccionSeleccionarParada),
                this.interaccionSeleccionarParada.on("select", this.eventoSeleccionarParada, this),
                n
            }
            ,
            n.prototype.unsetEventoSeleccionarParada = function(n) {
                return n.removeInteraction(this.interaccionSeleccionarParada),
                n
            }
            ,
            n.prototype.seleccionarParadaDelParametro = function(n) {
                console.log("data", n);
                var l = new r.Feature({
                    id: n.id,
                    cod_ubic_parada: n.properties.cod_ubic_parada,
                    desc_ubic_parada: n.properties.desc_ubic_parada
                });
                l.setGeometry(new r.geom.Point([n.geometry.coordinates[0], n.geometry.coordinates[1]])),
                l.setProperties(n.properties),
                this.paradaSeleccionadaFeature = l,
                this.paradaSeleccionadaFeature.setStyle(this.olStyleParada),
                this.paradaSeleccionadaSource.addFeature(this.paradaSeleccionadaFeature),
                this.paradasDeshabilitadasVectorLayer.setVisible(!1),
                this.paradasVectorLayerTileGrid.setVisible(!1),
                this.paradaSeleccionadaLayer.setVisible(!0),
                this.events.publish("maputils:parada-seleccionada", {
                    selected: l
                })
            }
            ,
            n.prototype.setParadasDeshabilitadasPopup = function(n, l) {
                console.log("MapUtilsParadasService.setParadasDeshabilitadasPopup()", arguments),
                this.overlayParadaDeshabilitada = new r.Overlay({
                    id: "overlayParadaDeshabilitada",
                    element: l.nativeElement,
                    autoPan: !0,
                    positioning: "bottom-right",
                    offset: [0, -1 * this.altoIconoParada]
                }),
                n.addOverlay(this.overlayParadaDeshabilitada)
            }
            ,
            n.prototype.hidePopup = function() {
                this.overlayParadaDeshabilitada && this.overlayParadaDeshabilitada.setPosition(void 0)
            }
            ,
            n.prototype.limpiarParadasIntermedias = function() {
                this.paradasIntermediasDirectoSource.clear(),
                this.paradasIntermediasTrasbordoSource.clear()
            }
            ,
            n.prototype.addFeatureParadasIntermediasDirecto = function(n) {
                this.paradasIntermediasDirectoSource.addFeature(n)
            }
            ,
            n.prototype.addFeatureParadasIntermediasTrasbordo = function(n) {
                this.paradasIntermediasTrasbordoSource.addFeature(n)
            }
            ,
            n = Object(t.__decorate)([Object(t.__param)(1, Object(a.n)(i.a))], n)
        }())
    },
    226: function(n, l, e) {
        "use strict";
        function t(n) {
            return a._23(0, [(n()(),
            a._0(0, 0, null, null, 4, "div", [["class", "progress-outer"]], [[8, "hidden", 0]], null, null, null, null)), (n()(),
            a._21(-1, null, ["\n    "])), (n()(),
            a._21(-1, null, ["\n    "])), (n()(),
            a._0(3, 0, null, null, 0, "div", [["class", "progress-inner"]], null, null, null, null, null)), (n()(),
            a._21(-1, null, ["\n"])), (n()(),
            a._21(-1, null, ["\n"]))], null, function(n, l) {
                n(l, 0, 0, l.component.hide)
            })
        }
        e.d(l, "a", function() {
            return i
        }),
        l.b = t;
        var a = e(1)
          , i = a.Y({
            encapsulation: 2,
            styles: [],
            data: {}
        })
    },
    231: function(n, l, e) {
        "use strict";
        e.d(l, "a", function() {
            return t
        });
        e(0),
        e(395);
        var t = function() {
            return function() {}
        }()
    },
    232: function(n, l, e) {
        "use strict";
        e.d(l, "a", function() {
            return t
        });
        e(0),
        e(8);
        var t = function() {
            return function() {}
        }()
    },
    233: function(n, l, e) {
        "use strict";
        e.d(l, "a", function() {
            return t
        });
        e(0),
        e(8);
        var t = function() {
            function n(n, l) {
                var e = this;
                this.events = n,
                this.push = l,
                console.log("ConfiguracionPage.constructor()"),
                this.section = "settings",
                this.notifOptions = {
                    all: !0,
                    op1: !0,
                    op2: !0,
                    op3: !0,
                    op4: !1,
                    op5: !0
                },
                this.push.waitReady.then(function(n) {
                    console.log("ConfiguracionPage.constructor() this.push.topics.COMOIR_BASE_TOPIC", e.push.topics.COMOIR_BASE_TOPIC),
                    e.notifOptions.all = e.push.topics.COMOIR_BASE_TOPIC
                })
            }
            return Object.defineProperty(n.prototype, "title", {
                get: function() {
                    switch (this.section) {
                    case "settings":
                        return "Configuración";
                    case "notif":
                        return "Configurar notificaciones";
                    case "viaje":
                        return "Preferencias de viaje";
                    case "stm":
                        return "Asociar tarjeta STM"
                    }
                    return "unknown"
                },
                enumerable: !0,
                configurable: !0
            }),
            n.prototype.backToHome = function() {
                console.log("ConfiguracionPage.backToHome()"),
                "settings" != this.section ? this.section = "settings" : this.events.publish("nav:load-home")
            }
            ,
            n.prototype.enterSection = function(n) {
                console.log("ConfiguracionPage.enterSection()", n),
                this.section = n
            }
            ,
            n.prototype.clickOnNotifEntry = function(n) {
                this.notifOptions[n] = !this.notifOptions[n],
                console.log("ConfiguracionPage.clickOnNotifEntry()", n, ": ", this.notifOptions[n]),
                "all" == n ? this.notifOptions[n] ? this.push.subscribeToTopic("COMOIR_BASE_TOPIC") : this.push.unsubscribeToTopic("COMOIR_BASE_TOPIC") : console.error("ConfiguracionPage.clickOnNotifEntry() CASO NO IMPLEMENTADO. entry: ", n)
            }
            ,
            n
        }()
    },
    234: function(n, l, e) {
        "use strict";
        e.d(l, "a", function() {
            return t
        });
        e(0),
        e(8),
        e(116);
        var t = function() {
            return function() {}
        }()
    },
    235: function(n, l, e) {
        "use strict";
        e.d(l, "a", function() {
            return t
        });
        e(0),
        e(8);
        var t = function() {
            return function() {}
        }()
    },
    236: function(n, l, e) {
        "use strict";
        e.d(l, "a", function() {
            return t
        });
        e(0),
        e(8);
        var t = function() {
            return function() {}
        }()
    },
    237: function(n, l, e) {
        "use strict";
        e.d(l, "a", function() {
            return t
        });
        e(0),
        e(8);
        var t = function() {
            return function() {}
        }()
    },
    238: function(n, l, e) {
        "use strict";
        e.d(l, "a", function() {
            return t
        });
        e(0),
        e(8);
        var t = function() {
            return function() {}
        }()
    },
    239: function(n, l, e) {
        "use strict";
        e.d(l, "a", function() {
            return t
        });
        e(0),
        e(8);
        var t = function() {
            return function() {}
        }()
    },
    240: function(n, l, e) {
        "use strict";
        e.d(l, "a", function() {
            return t
        });
        e(0),
        e(8);
        var t = function() {
            return function() {}
        }()
    },
    241: function(n, l, e) {
        "use strict";
        e.d(l, "a", function() {
            return t
        });
        e(0),
        e(8);
        var t = function() {
            return function() {}
        }()
    },
    242: function(n, l, e) {
        "use strict";
        e.d(l, "a", function() {
            return t
        });
        e(0),
        e(8);
        var t = function() {
            return function() {}
        }()
    },
    243: function(n, l, e) {
        "use strict";
        e.d(l, "a", function() {
            return t
        });
        e(0),
        e(8);
        var t = function() {
            return function() {}
        }()
    },
    254: function(n, l) {
        function e(n) {
            return Promise.resolve().then(function() {
                throw new Error("Cannot find module '" + n + "'.")
            })
        }
        e.keys = function() {
            return []
        }
        ,
        e.resolve = e,
        n.exports = e,
        e.id = 254
    },
    26: function(n, l, e) {
        "use strict";
        e.d(l, "a", function() {
            return t
        });
        var t = new (e(1).o)("env.variables")
    },
    284: function(n, l, e) {
        function t(n) {
            var l = a[n];
            return l ? e.e(l[1]).then(function() {
                return e(l[0])
            }) : Promise.reject(new Error("Cannot find module '" + n + "'."))
        }
        var a = {
            "../pages/buses-modal/buses-modal.module.ngfactory": [721, 10],
            "../pages/configuracion/configuracion.module.ngfactory": [720, 9],
            "../pages/elegir-horario-modal/elegir-horario-modal.module.ngfactory": [723, 8],
            "../pages/favoritos/favoritos.module.ngfactory": [722, 7],
            "../pages/home/home.module.ngfactory": [727, 6],
            "../pages/inbox/inbox.module.ngfactory": [724, 5],
            "../pages/ir-caminando-modal/ir-caminando-modal.module.ngfactory": [725, 4],
            "../pages/ir-en-bus-detalle-modal/ir-en-bus-detalle-modal.module.ngfactory": [726, 3],
            "../pages/ir-en-bus-modal/ir-en-bus-modal.module.ngfactory": [728, 2],
            "../pages/notificaciones/notificaciones.module.ngfactory": [729, 1],
            "../pages/typeahead/typeahead.module.ngfactory": [730, 0]
        };
        t.keys = function() {
            return Object.keys(a)
        }
        ,
        t.id = 284,
        n.exports = t
    },
    38: function(n, l, e) {
        "use strict";
        e.d(l, "a", function() {
            return t
        });
        e(0);
        var t = function() {
            function n() {
                this.toCapitalCase = function(n) {
                    if (!n)
                        return n;
                    if ("function" != typeof n.toLowerCase)
                        return "NULL";
                    var l = n.toLowerCase().split(" ");
                    for (var e in l) {
                        var t = l[e];
                        if (t)
                            switch ("0" == e && (l[e] = t[0].toUpperCase() + t.substr(1)),
                            t) {
                            case "de":
                            case "los":
                            case "las":
                            case "el":
                            case "del":
                            case "la":
                            case "en":
                            case "a":
                            case "y":
                                break;
                            default:
                                l[e] = t[0].toUpperCase() + t.substr(1)
                            }
                    }
                    return l.join(" ")
                }
            }
            return n.prototype.calcularHora = function(n) {
                var l, e = "";
                if (n) {
                    l = n;
                    for (var t = new Date, a = t.getMinutes() + l, i = t.getHours(); a >= 60; )
                        a -= 60,
                        i += 1;
                    i >= 24 && (i -= 24);
                    var o = a.toString()
                      , r = i.toString();
                    i < 10 && (r = "0" + r),
                    a < 10 && (o = "0" + o),
                    e = "(" + r + ":" + o + ")"
                }
                return e
            }
            ,
            n.prototype.compareLineas = function(n, l) {
                var e = n.l
                  , t = l.l
                  , a = !1
                  , i = !1
                  , o = null
                  , r = null;
                if (o = parseInt(e),
                a = Number.isNaN(o),
                r = parseInt(t),
                i = Number.isNaN(r),
                a && i) {
                    if (e.charAt(0) == t.charAt(0)) {
                        var u = null
                          , s = null;
                        return u = parseInt(e.substring(1)),
                        s = parseInt(t.substring(1)),
                        Number.isNaN(u) || Number.isNaN(s) ? e.localeCompare(t) : u > s ? 1 : u == s ? 0 : -1
                    }
                    return e.localeCompare(t)
                }
                return a && !i ? 1 : !a && i ? -1 : a || i ? 0 : o > r ? 1 : o == r ? 0 : -1
            }
            ,
            n.prototype.mapParadasVariantesFromRecorridos = function(n) {
                var l = new Map;
                return n && n.forEach(function(n) {
                    var e = null
                      , t = null
                      , a = null;
                    l.has(n.ruta.directo.paradaOrigen.id) ? (a = l.get(n.ruta.directo.paradaOrigen.id),
                    e = a.get(!0),
                    t = a.get(!1)) : (a = new Map,
                    e = new Array,
                    t = new Array),
                    n.ruta.directo.maximales && n.ruta.directo.maximales.length > 0 && n.ruta.directo.maximales.forEach(function(l) {
                        l.codigo.forEach(function(l) {
                            n.ruta.directo.circular ? e.push(l) : t.push(l)
                        })
                    }),
                    n.ruta.directo.noMaximales && n.ruta.directo.noMaximales.length > 0 && n.ruta.directo.noMaximales.forEach(function(l) {
                        l.codigo.forEach(function(l) {
                            n.ruta.directo.circular ? e.push(l) : t.push(l)
                        })
                    }),
                    a.set(!0, e),
                    a.set(!1, t),
                    l.set(n.ruta.directo.paradaOrigen.id, a)
                }),
                l
            }
            ,
            n
        }()
    },
    39: function(n, l, e) {
        "use strict";
        e.d(l, "a", function() {
            return o
        });
        e(0);
        var t = e(204)
          , a = this && this.__awaiter || function(n, l, e, t) {
            return new (e || (e = Promise))(function(a, i) {
                function o(n) {
                    try {
                        u(t.next(n))
                    } catch (n) {
                        i(n)
                    }
                }
                function r(n) {
                    try {
                        u(t.throw(n))
                    } catch (n) {
                        i(n)
                    }
                }
                function u(n) {
                    n.done ? a(n.value) : new e(function(l) {
                        l(n.value)
                    }
                    ).then(o, r)
                }
                u((t = t.apply(n, l || [])).next())
            }
            )
        }
          , i = this && this.__generator || function(n, l) {
            function e(e) {
                return function(o) {
                    return function(e) {
                        if (t)
                            throw new TypeError("Generator is already executing.");
                        for (; r; )
                            try {
                                if (t = 1,
                                a && (i = a[2 & e[0] ? "return" : e[0] ? "throw" : "next"]) && !(i = i.call(a, e[1])).done)
                                    return i;
                                switch (a = 0,
                                i && (e = [0, i.value]),
                                e[0]) {
                                case 0:
                                case 1:
                                    i = e;
                                    break;
                                case 4:
                                    return r.label++,
                                    {
                                        value: e[1],
                                        done: !1
                                    };
                                case 5:
                                    r.label++,
                                    a = e[1],
                                    e = [0];
                                    continue;
                                case 7:
                                    e = r.ops.pop(),
                                    r.trys.pop();
                                    continue;
                                default:
                                    if (i = r.trys,
                                    !(i = i.length > 0 && i[i.length - 1]) && (6 === e[0] || 2 === e[0])) {
                                        r = 0;
                                        continue
                                    }
                                    if (3 === e[0] && (!i || e[1] > i[0] && e[1] < i[3])) {
                                        r.label = e[1];
                                        break
                                    }
                                    if (6 === e[0] && r.label < i[1]) {
                                        r.label = i[1],
                                        i = e;
                                        break
                                    }
                                    if (i && r.label < i[2]) {
                                        r.label = i[2],
                                        r.ops.push(e);
                                        break
                                    }
                                    i[2] && r.ops.pop(),
                                    r.trys.pop();
                                    continue
                                }
                                e = l.call(n, r)
                            } catch (n) {
                                e = [6, n],
                                a = 0
                            } finally {
                                t = i = 0
                            }
                        if (5 & e[0])
                            throw e[1];
                        return {
                            value: e[0] ? e[1] : void 0,
                            done: !0
                        }
                    }([e, o])
                }
            }
            var t, a, i, o, r = {
                label: 0,
                sent: function() {
                    if (1 & i[0])
                        throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: e(0),
                throw: e(1),
                return: e(2)
            },
            "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o
        }
          , o = function() {
            function n(n) {
                var l = this;
                this.storage = n,
                this.lineasParadaTiempoExpiracionStorage = 864e5,
                this.lineasParadaKey = "parada-",
                this.filtroParadaKey = "filtro-parada-",
                this.lastCoordsKey = "last_coords",
                this.lastZoomKey = "last_zoom",
                this.pushTopicsKey = "push_topics",
                this.pushLastIdKey = "push_lastid",
                this.favsKey = "favs",
                this.favsIdKey = "favs-id",
                this.msgKey = "msg-",
                this.msgListKey = "messages",
                this.circularesTiempoExpiracionStorage = 6048e5,
                this.circularesKey = "circulares";
                this.storage.get("como-ir-version").then(function(n) {
                    (!n || n && "3.1.0-beta2" != n) && (l.updateFavs(),
                    l.storage.set("como-ir-version", "3.1.0-beta2"))
                })
            }
            return n.prototype.getLineasParada = function(n) {
                var l = this;
                return new Promise(function(e, t) {
                    l.storage.get(l.lineasParadaKey + n).then(function(t) {
                        t && Date.now() - t.comoirStoredDatetime > l.lineasParadaTiempoExpiracionStorage && (l.storage.remove(l.lineasParadaKey + n),
                        t = null),
                        e(t)
                    })
                }
                )
            }
            ,
            n.prototype.setLineasParada = function(n, l) {
                return l.comoirStoredDatetime = new Date,
                this.storage.set(this.lineasParadaKey + n, l)
            }
            ,
            n.prototype.getFiltroParada = function(n) {
                return this.storage.get(this.filtroParadaKey + n)
            }
            ,
            n.prototype.setFiltroParada = function(n, l) {
                return this.storage.set(this.filtroParadaKey + n, l)
            }
            ,
            n.prototype.removeFiltroParada = function(n) {
                return this.storage.remove(this.filtroParadaKey + n)
            }
            ,
            n.prototype.getLastCoords = function() {
                return this.storage.get(this.lastCoordsKey)
            }
            ,
            n.prototype.setLastCoords = function(n) {
                return this.storage.set(this.lastCoordsKey, n)
            }
            ,
            n.prototype.getLastZoom = function() {
                return this.storage.get(this.lastZoomKey)
            }
            ,
            n.prototype.setLastZoom = function(n) {
                return this.storage.set(this.lastZoomKey, n)
            }
            ,
            n.prototype.updateFavs = function() {
                var n = this
                  , l = [];
                this.getFavs().then(function(e) {
                    l = e.map(function(l) {
                        return !l.label && l.text && (l.label = l.text,
                        l.local_storage_id = n.getFavId(l)),
                        l
                    }),
                    n.storage.set(n.favsKey, l)
                })
            }
            ,
            n.prototype.getFavs = function() {
                return this.storage.get(this.favsKey).then(function(n) {
                    return console.log("FAVORITOS --\x3e " + n),
                    n || []
                })
            }
            ,
            n.prototype.getFilteredFavs = function(n) {
                return this.getFavs().then(function(l) {
                    return l.filter(function(l) {
                        var e = l.text && -1 != l.text.toLowerCase().indexOf(n.toLowerCase())
                          , t = l.label && -1 != l.label.toLowerCase().indexOf(n.toLowerCase());
                        return e || t
                    })
                })
            }
            ,
            n.prototype.getFavId = function(n) {
                return console.assert(n.text && n.tipo, "ERROR: getFavId() a este entry le falta el text o el tipo: ", n),
                t.Md5.hashStr(n.text + "-" + n.tipo)
            }
            ,
            n.prototype.addFav = function(n) {
                var l = this
                  , e = this.getFavId(n);
                return n.local_storage_id = e,
                this.getFavs().then(function(t) {
                    if (t) {
                        for (var a = !0, i = 0; i < t.length; i++)
                            t[i].local_storage_id == e && (console.error("ERROR: se intentó agregar un favorito que ya estaba salvado. Nuevo:", [n], "Salvado:", [t[i]]),
                            a = !1);
                        a && t.push(n)
                    } else
                        t = [n];
                    return l.storage.set(l.favsKey, t),
                    n
                })
            }
            ,
            n.prototype.updateFav = function(n) {
                var l = this
                  , e = this.getFavId(n);
                return console.assert(e == n.local_storage_id, "ERROR: el ID generado para el Fav no coincide con el ID que ya tine el FAV:" + JSON.stringify([e, n], null, 4)),
                this.getFavs().then(function(t) {
                    if (t) {
                        for (var a = !1, i = 0; i < t.length; i++)
                            t[i].local_storage_id == e && (t[i] = n,
                            a = !0);
                        a || t.push(n)
                    } else
                        t = [n];
                    return l.storage.set(l.favsKey, t),
                    n
                })
            }
            ,
            n.prototype.removeFav = function(n) {
                var l = this
                  , e = null;
                e = "object" == typeof n ? this.getFavId(n) : n,
                this.getFavs().then(function(n) {
                    if (n)
                        for (var t = 0; t < n.length; t++)
                            if (n[t].local_storage_id == e)
                                return n.splice(t, 1),
                                void l.storage.set(l.favsKey, n)
                })
            }
            ,
            n.prototype.getCirculares = function() {
                var n = this;
                return new Promise(function(l, e) {
                    n.storage.get(n.circularesKey).then(function(e) {
                        e && Date.now() - e.comoirStoredDatetime > n.circularesTiempoExpiracionStorage && (n.storage.remove(n.circularesKey),
                        e = null),
                        l(e)
                    })
                }
                )
            }
            ,
            n.prototype.setCirculares = function(n) {
                return n.comoirStoredDatetime = new Date,
                this.storage.set(this.circularesKey, n)
            }
            ,
            n.prototype.hotfix = function() {
                return a(this, void 0, void 0, function() {
                    var n = this;
                    return i(this, function(l) {
                        return [2, this.getMessagesList().then(function(l) {
                            for (var e = 0; e < l.length; e++)
                                console.log(e, "_mesages[i].fecha: ", l[e].fecha, typeof l[e].fecha),
                                l[e].timestamp = new Date(l[e].fecha).getTime();
                            n.storage.set(n.msgListKey, l)
                        })]
                    })
                })
            }
            ,
            n.prototype.getLastMessageId = function() {
                return a(this, void 0, void 0, function() {
                    var n = this;
                    return i(this, function(l) {
                        return [2, new Promise(function(l, e) {
                            n.storage.get(n.pushLastIdKey).then(function(n) {
                                l(n)
                            })
                        }
                        )]
                    })
                })
            }
            ,
            n.prototype.setLastMessageId = function(n) {
                return a(this, void 0, void 0, function() {
                    var l = this;
                    return i(this, function(e) {
                        return [2, new Promise(function(e, t) {
                            l.storage.set(l.pushLastIdKey, n).then(function(n) {
                                e()
                            })
                        }
                        )]
                    })
                })
            }
            ,
            n.prototype.getUserPushTopics = function() {
                return a(this, void 0, void 0, function() {
                    var n = this;
                    return i(this, function(l) {
                        return [2, new Promise(function(l, e) {
                            n.storage.get(n.pushTopicsKey).then(function(n) {
                                l(n)
                            })
                        }
                        )]
                    })
                })
            }
            ,
            n.prototype.setUserPushTopic = function(n, l) {
                return a(this, void 0, void 0, function() {
                    var e;
                    return i(this, function(t) {
                        switch (t.label) {
                        case 0:
                            return console.log("DataService.setUserPushTopic()", n, l),
                            [4, this.getUserPushTopics()];
                        case 1:
                            return (e = t.sent()) || (e = {}),
                            e[n] = l,
                            [2, this.storage.set(this.pushTopicsKey, e)]
                        }
                    })
                })
            }
            ,
            n.prototype.getMessagesList = function() {
                return a(this, void 0, void 0, function() {
                    return i(this, function(n) {
                        return [2, this.storage.get(this.msgListKey)]
                    })
                })
            }
            ,
            n.prototype.getMessage = function(n) {
                return a(this, void 0, void 0, function() {
                    var l, e;
                    return i(this, function(t) {
                        switch (t.label) {
                        case 0:
                            return l = this.msgKey + n,
                            [4, this.storage.get(l)];
                        case 1:
                            return e = t.sent(),
                            this.markMessageAsRead(n),
                            [2, e]
                        }
                    })
                })
            }
            ,
            n.prototype.markMessageAsRead = function(n) {
                return a(this, void 0, void 0, function() {
                    var l = this;
                    return i(this, function(e) {
                        return [2, this.getMessagesList().then(function(e) {
                            var t = {
                                title: "...",
                                summary: "...",
                                fecha: "...",
                                timestamp: 0,
                                idMensaje: n,
                                read: !0
                            };
                            if (e) {
                                for (var a = -1, i = 0; i < e.length; i++)
                                    if (e[i].idMensaje == n) {
                                        a = i;
                                        break
                                    }
                                -1 == a ? e.push(t) : e[a].read = !0
                            } else
                                e = [t];
                            l.storage.set(l.msgListKey, e)
                        })]
                    })
                })
            }
            ,
            n.prototype.addPushMessage = function(n) {
                return a(this, void 0, void 0, function() {
                    var l, e, t;
                    return i(this, function(a) {
                        return l = n.idMensaje,
                        e = this.msgKey + l,
                        this.storage.set(e, n),
                        t = {
                            title: n.title,
                            summary: n.summary,
                            fecha: n.fecha,
                            timestamp: n.timestamp,
                            idMensaje: l,
                            read: !1
                        },
                        [2, this.updateMsgSummaryList(t)]
                    })
                })
            }
            ,
            n.prototype.addBackendMessage = function(n) {
                return a(this, void 0, void 0, function() {
                    var l, e, t;
                    return i(this, function(a) {
                        return l = n.idMensaje,
                        e = this.msgKey + l,
                        this.storage.set(e, n),
                        t = {
                            title: n.titulo,
                            summary: n.mensajeCorto,
                            fecha: n.fecha,
                            timestamp: n.timestamp,
                            idMensaje: l,
                            read: !1
                        },
                        [2, this.updateMsgSummaryList(t)]
                    })
                })
            }
            ,
            n.prototype.updateMsgSummaryList = function(n) {
                return a(this, void 0, void 0, function() {
                    var l = this;
                    return i(this, function(e) {
                        return [2, this.getMessagesList().then(function(e) {
                            if (e) {
                                for (var t = -1, a = 0; a < e.length; a++)
                                    if (e[a].idMensaje == n.idMensaje) {
                                        t = a;
                                        break
                                    }
                                -1 == t ? e.push(n) : (n.read = e[t].read,
                                e[t] = n)
                            } else
                                e = [n];
                            l.storage.set(l.msgListKey, e)
                        })]
                    })
                })
            }
            ,
            n.prototype.removeMessage = function(n) {
                return a(this, void 0, void 0, function() {
                    var l, e, t = this;
                    return i(this, function(a) {
                        return l = n.idMensaje || n.id,
                        e = this.msgKey + l,
                        this.storage.remove(e),
                        [2, this.getMessagesList().then(function(e) {
                            if (e) {
                                for (var a = -1, i = 0; i < e.length; i++)
                                    if (e[i].idMensaje == l) {
                                        a = i;
                                        break
                                    }
                                e.splice(a, 1)
                            }
                            return t.storage.set(t.msgListKey, e),
                            n
                        })]
                    })
                })
            }
            ,
            n
        }()
    },
    395: function(n, l, e) {
        "use strict";
        e.d(l, "a", function() {
            return i
        });
        var t = e(0)
          , a = e(1)
          , i = function() {
            function n(n, l) {
                var e = l.createElement("div");
                l.addClass(e, "button-effect"),
                l.setStyle(e, "display", "block"),
                l.setStyle(e, "opacity", "1"),
                l.appendChild(n.nativeElement, e)
            }
            return n = Object(t.__decorate)([Object(t.__param)(0, Object(a.m)())], n)
        }()
    },
    418: function(n, l, e) {
        "use strict";
        function t(n) {
            return a._23(0, [(n()(),
            a._0(0, 0, null, null, 12, "ion-header", [["page", ""]], null, null, null, null, null)), a.Z(1, 16384, null, 0, i.a, [o.a, a.j, a.A, [2, r.a]], null, null), (n()(),
            a._21(-1, null, ["\n    "])), (n()(),
            a._0(3, 0, null, null, 8, "ion-navbar", [["class", "toolbar"]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, u.b, u.a)), a.Z(4, 49152, null, 0, s.a, [c.a, [2, r.a], [2, d.a], o.a, a.j, a.A], null, null), (n()(),
            a._21(-1, 3, ["\n        "])), (n()(),
            a._0(6, 0, null, 3, 1, "button", [["class", "left"]], null, [[null, "click"]], function(n, l, e) {
                var t = !0;
                if ("click" === l) {
                    t = !1 !== n.component.backToHome() && t
                }
                return t
            }, null, null)), (n()(),
            a._0(7, 0, null, null, 0, "img", [["class", "icon-back"], ["src", "assets/images/button/icono_Atras.png"]], null, null, null, null, null)), (n()(),
            a._21(-1, 3, ["\n        "])), (n()(),
            a._0(9, 0, null, 3, 1, "span", [["class", "title-label text-ellipsis"]], null, null, null, null, null)), (n()(),
            a._21(10, null, ["", ""])), (n()(),
            a._21(-1, 3, ["\n    "])), (n()(),
            a._21(-1, null, ["\n"])), (n()(),
            a._21(-1, null, ["\n\n\n"])), (n()(),
            a._0(14, 0, null, null, 112, "ion-content", [["configuracion", ""]], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, p.b, p.a)), a.Z(15, 4374528, null, 0, h.a, [o.a, m.a, _.a, a.j, a.A, c.a, f.a, a.v, [2, r.a], [2, d.a]], null, null), (n()(),
            a._21(-1, 1, ["\n\n    "])), (n()(),
            a._0(17, 0, null, 1, 25, "div", [["class", "configuracion-menu"]], [[8, "hidden", 0]], null, null, null, null)), (n()(),
            a._21(-1, null, ["\n\n        "])), (n()(),
            a._0(19, 0, null, null, 6, "div", [["class", "menu-entry cursor-pointer"], ["im-ripple-effect", ""]], null, [[null, "click"]], function(n, l, e) {
                var t = !0;
                if ("click" === l) {
                    t = !1 !== n.component.enterSection("notif") && t
                }
                return t
            }, null, null)), (n()(),
            a._21(-1, null, ["\n            "])), (n()(),
            a._0(21, 0, null, null, 0, "img", [["class", "icon icon-mail"], ["src", "assets/images/azul/side-menu-mail-black.png"]], null, null, null, null, null)), (n()(),
            a._21(-1, null, ["\n            "])), (n()(),
            a._0(23, 0, null, null, 1, "span", [["class", "text"]], null, null, null, null, null)), (n()(),
            a._21(-1, null, [" Notificaciones "])), (n()(),
            a._21(-1, null, ["\n        "])), (n()(),
            a._21(-1, null, ["\n\n        "])), (n()(),
            a._0(27, 0, null, null, 6, "div", [["class", "menu-entry cursor-pointer disabled"], ["im-ripple-effect", ""]], null, [[null, "click"]], function(n, l, e) {
                var t = !0;
                if ("click" === l) {
                    t = !1 !== n.component.enterSection("viaje") && t
                }
                return t
            }, null, null)), (n()(),
            a._21(-1, null, ["\n            "])), (n()(),
            a._0(29, 0, null, null, 0, "img", [["class", "icon icon-bus"], ["src", "assets/images/button/icon-en-bus-black.svg"]], null, null, null, null, null)), (n()(),
            a._21(-1, null, ["\n            "])), (n()(),
            a._0(31, 0, null, null, 1, "span", [["class", "text"]], null, null, null, null, null)), (n()(),
            a._21(-1, null, [" Preferencias de viaje "])), (n()(),
            a._21(-1, null, ["\n        "])), (n()(),
            a._21(-1, null, ["\n\n        "])), (n()(),
            a._0(35, 0, null, null, 6, "div", [["class", "menu-entry cursor-pointer disabled"], ["im-ripple-effect", ""]], null, [[null, "click"]], function(n, l, e) {
                var t = !0;
                if ("click" === l) {
                    t = !1 !== n.component.enterSection("stm") && t
                }
                return t
            }, null, null)), (n()(),
            a._21(-1, null, ["\n            "])), (n()(),
            a._0(37, 0, null, null, 0, "img", [["class", "icon icon-stm"], ["src", "assets/images/azul/side-menu-stm-black.png"]], null, null, null, null, null)), (n()(),
            a._21(-1, null, ["\n            "])), (n()(),
            a._0(39, 0, null, null, 1, "span", [["class", "text"]], null, null, null, null, null)), (n()(),
            a._21(-1, null, [" Asociar tarjeta STM "])), (n()(),
            a._21(-1, null, ["\n        "])), (n()(),
            a._21(-1, null, ["\n    \n    "])), (n()(),
            a._21(-1, 1, ["\n\n    "])), (n()(),
            a._0(44, 0, null, 1, 81, "div", [["class", "notificaciones-menu"]], [[8, "hidden", 0]], null, null, null, null)), a.Z(45, 278528, null, 0, g.i, [a.q, a.r, a.j, a.B], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), a._15(46, {
                none: 0
            }), (n()(),
            a._21(-1, null, ["\n        "])), (n()(),
            a._0(48, 0, null, null, 10, "div", [["class", "sin-sangria notif-menu-entry cursor-pointer"], ["im-ripple-effect", ""]], null, [[null, "click"]], function(n, l, e) {
                var t = !0;
                if ("click" === l) {
                    t = !1 !== n.component.clickOnNotifEntry("all") && t
                }
                return t
            }, null, null)), (n()(),
            a._21(-1, null, ["\n            "])), (n()(),
            a._0(50, 0, null, null, 1, "span", [["class", "text title"]], null, null, null, null, null)), (n()(),
            a._21(-1, null, ["Deseo recibir notificaciones"])), (n()(),
            a._21(-1, null, ["\n            "])), (n()(),
            a._0(53, 0, null, null, 1, "ion-icon", [["name", "checkbox-outline"], ["role", "img"]], [[8, "hidden", 0], [2, "hide", null]], null, null, null, null)), a.Z(54, 147456, null, 0, v.a, [o.a, a.j, a.A], {
                name: [0, "name"]
            }, null), (n()(),
            a._21(-1, null, ["\n            "])), (n()(),
            a._0(56, 0, null, null, 1, "ion-icon", [["name", "square-outline"], ["role", "img"]], [[8, "hidden", 0], [2, "hide", null]], null, null, null, null)), a.Z(57, 147456, null, 0, v.a, [o.a, a.j, a.A], {
                name: [0, "name"]
            }, null), (n()(),
            a._21(-1, null, ["\n        "])), (n()(),
            a._21(-1, null, ["\n        "])), (n()(),
            a._0(60, 0, null, null, 10, "div", [["class", "con-sangria notif-menu-entry cursor-pointer"], ["im-ripple-effect", ""]], null, [[null, "click"]], function(n, l, e) {
                var t = !0;
                if ("click" === l) {
                    t = !1 !== n.component.clickOnNotifEntry("op1") && t
                }
                return t
            }, null, null)), (n()(),
            a._21(-1, null, ["\n            "])), (n()(),
            a._0(62, 0, null, null, 1, "span", [["class", "text"]], null, null, null, null, null)), (n()(),
            a._21(-1, null, ["Cortes y desvíos"])), (n()(),
            a._21(-1, null, ["\n            "])), (n()(),
            a._0(65, 0, null, null, 1, "ion-icon", [["name", "checkbox-outline"], ["role", "img"]], [[8, "hidden", 0], [2, "hide", null]], null, null, null, null)), a.Z(66, 147456, null, 0, v.a, [o.a, a.j, a.A], {
                name: [0, "name"]
            }, null), (n()(),
            a._21(-1, null, ["\n            "])), (n()(),
            a._0(68, 0, null, null, 1, "ion-icon", [["name", "square-outline"], ["role", "img"]], [[8, "hidden", 0], [2, "hide", null]], null, null, null, null)), a.Z(69, 147456, null, 0, v.a, [o.a, a.j, a.A], {
                name: [0, "name"]
            }, null), (n()(),
            a._21(-1, null, ["\n        "])), (n()(),
            a._21(-1, null, ["\n        "])), (n()(),
            a._0(72, 0, null, null, 10, "div", [["class", "con-sangria notif-menu-entry cursor-pointer"], ["im-ripple-effect", ""]], null, [[null, "click"]], function(n, l, e) {
                var t = !0;
                if ("click" === l) {
                    t = !1 !== n.component.clickOnNotifEntry("op2") && t
                }
                return t
            }, null, null)), (n()(),
            a._21(-1, null, ["\n            "])), (n()(),
            a._0(74, 0, null, null, 1, "span", [["class", "text"]], null, null, null, null, null)), (n()(),
            a._21(-1, null, ["Cambios de frecuencia o servicios"])), (n()(),
            a._21(-1, null, ["\n            "])), (n()(),
            a._0(77, 0, null, null, 1, "ion-icon", [["name", "checkbox-outline"], ["role", "img"]], [[8, "hidden", 0], [2, "hide", null]], null, null, null, null)), a.Z(78, 147456, null, 0, v.a, [o.a, a.j, a.A], {
                name: [0, "name"]
            }, null), (n()(),
            a._21(-1, null, ["\n            "])), (n()(),
            a._0(80, 0, null, null, 1, "ion-icon", [["name", "square-outline"], ["role", "img"]], [[8, "hidden", 0], [2, "hide", null]], null, null, null, null)), a.Z(81, 147456, null, 0, v.a, [o.a, a.j, a.A], {
                name: [0, "name"]
            }, null), (n()(),
            a._21(-1, null, ["\n        "])), (n()(),
            a._21(-1, null, ["\n        "])), (n()(),
            a._0(84, 0, null, null, 10, "div", [["class", "con-sangria notif-menu-entry cursor-pointer"], ["im-ripple-effect", ""]], null, [[null, "click"]], function(n, l, e) {
                var t = !0;
                if ("click" === l) {
                    t = !1 !== n.component.clickOnNotifEntry("op3") && t
                }
                return t
            }, null, null)), (n()(),
            a._21(-1, null, ["\n            "])), (n()(),
            a._0(86, 0, null, null, 1, "span", [["class", "text"]], null, null, null, null, null)), (n()(),
            a._21(-1, null, ["Cambio de tarifas"])), (n()(),
            a._21(-1, null, ["\n            "])), (n()(),
            a._0(89, 0, null, null, 1, "ion-icon", [["name", "checkbox-outline"], ["role", "img"]], [[8, "hidden", 0], [2, "hide", null]], null, null, null, null)), a.Z(90, 147456, null, 0, v.a, [o.a, a.j, a.A], {
                name: [0, "name"]
            }, null), (n()(),
            a._21(-1, null, ["\n            "])), (n()(),
            a._0(92, 0, null, null, 1, "ion-icon", [["name", "square-outline"], ["role", "img"]], [[8, "hidden", 0], [2, "hide", null]], null, null, null, null)), a.Z(93, 147456, null, 0, v.a, [o.a, a.j, a.A], {
                name: [0, "name"]
            }, null), (n()(),
            a._21(-1, null, ["\n        "])), (n()(),
            a._21(-1, null, ["\n        "])), (n()(),
            a._0(96, 0, null, null, 13, "div", [["class", "con-sangria notif-menu-entry cursor-pointer doble-linea"], ["im-ripple-effect", ""]], null, [[null, "click"]], function(n, l, e) {
                var t = !0;
                if ("click" === l) {
                    t = !1 !== n.component.clickOnNotifEntry("op4") && t
                }
                return t
            }, null, null)), (n()(),
            a._21(-1, null, ["\n            "])), (n()(),
            a._0(98, 0, null, null, 1, "span", [["class", "text"]], null, null, null, null, null)), (n()(),
            a._21(-1, null, ["Novedades STM"])), (n()(),
            a._21(-1, null, ["\n            "])), (n()(),
            a._0(101, 0, null, null, 1, "span", [["class", "info"]], null, null, null, null, null)), (n()(),
            a._21(-1, null, ["Beneficios, modalidades de pago, etc."])), (n()(),
            a._21(-1, null, ["\n            "])), (n()(),
            a._0(104, 0, null, null, 1, "ion-icon", [["name", "checkbox-outline"], ["role", "img"]], [[8, "hidden", 0], [2, "hide", null]], null, null, null, null)), a.Z(105, 147456, null, 0, v.a, [o.a, a.j, a.A], {
                name: [0, "name"]
            }, null), (n()(),
            a._21(-1, null, ["\n            "])), (n()(),
            a._0(107, 0, null, null, 1, "ion-icon", [["name", "square-outline"], ["role", "img"]], [[8, "hidden", 0], [2, "hide", null]], null, null, null, null)), a.Z(108, 147456, null, 0, v.a, [o.a, a.j, a.A], {
                name: [0, "name"]
            }, null), (n()(),
            a._21(-1, null, ["\n        "])), (n()(),
            a._21(-1, null, ["\n        "])), (n()(),
            a._0(111, 0, null, null, 13, "div", [["class", "con-sangria notif-menu-entry cursor-pointer doble-linea"], ["im-ripple-effect", ""]], null, [[null, "click"]], function(n, l, e) {
                var t = !0;
                if ("click" === l) {
                    t = !1 !== n.component.clickOnNotifEntry("op5") && t
                }
                return t
            }, null, null)), (n()(),
            a._21(-1, null, ["\n            "])), (n()(),
            a._0(113, 0, null, null, 1, "span", [["class", "text"]], null, null, null, null, null)), (n()(),
            a._21(-1, null, ["Información de urgencia"])), (n()(),
            a._21(-1, null, ["\n            "])), (n()(),
            a._0(116, 0, null, null, 1, "span", [["class", "info"]], null, null, null, null, null)), (n()(),
            a._21(-1, null, ["Emergencia climática, paro sorpresivo, etc."])), (n()(),
            a._21(-1, null, ["\n            "])), (n()(),
            a._0(119, 0, null, null, 1, "ion-icon", [["name", "checkbox-outline"], ["role", "img"]], [[8, "hidden", 0], [2, "hide", null]], null, null, null, null)), a.Z(120, 147456, null, 0, v.a, [o.a, a.j, a.A], {
                name: [0, "name"]
            }, null), (n()(),
            a._21(-1, null, ["\n            "])), (n()(),
            a._0(122, 0, null, null, 1, "ion-icon", [["name", "square-outline"], ["role", "img"]], [[8, "hidden", 0], [2, "hide", null]], null, null, null, null)), a.Z(123, 147456, null, 0, v.a, [o.a, a.j, a.A], {
                name: [0, "name"]
            }, null), (n()(),
            a._21(-1, null, ["\n        "])), (n()(),
            a._21(-1, null, ["\n    \n    "])), (n()(),
            a._21(-1, 1, ["\n\n"])), (n()(),
            a._21(-1, null, ["\n"]))], function(n, l) {
                n(l, 45, 0, "notificaciones-menu", n(l, 46, 0, !l.component.notifOptions.all));
                n(l, 54, 0, "checkbox-outline");
                n(l, 57, 0, "square-outline");
                n(l, 66, 0, "checkbox-outline");
                n(l, 69, 0, "square-outline");
                n(l, 78, 0, "checkbox-outline");
                n(l, 81, 0, "square-outline");
                n(l, 90, 0, "checkbox-outline");
                n(l, 93, 0, "square-outline");
                n(l, 105, 0, "checkbox-outline");
                n(l, 108, 0, "square-outline");
                n(l, 120, 0, "checkbox-outline");
                n(l, 123, 0, "square-outline")
            }, function(n, l) {
                var e = l.component;
                n(l, 3, 0, a._12(l, 4)._hidden, a._12(l, 4)._sbPadding);
                n(l, 10, 0, e.title);
                n(l, 14, 0, a._12(l, 15).statusbarPadding, a._12(l, 15)._hasRefresher);
                n(l, 17, 0, "settings" != e.section);
                n(l, 44, 0, "notif" != e.section);
                n(l, 53, 0, !e.notifOptions.all, a._12(l, 54)._hidden);
                n(l, 56, 0, e.notifOptions.all, a._12(l, 57)._hidden);
                n(l, 65, 0, !e.notifOptions.op1, a._12(l, 66)._hidden);
                n(l, 68, 0, e.notifOptions.op1, a._12(l, 69)._hidden);
                n(l, 77, 0, !e.notifOptions.op2, a._12(l, 78)._hidden);
                n(l, 80, 0, e.notifOptions.op2, a._12(l, 81)._hidden);
                n(l, 89, 0, !e.notifOptions.op3, a._12(l, 90)._hidden);
                n(l, 92, 0, e.notifOptions.op3, a._12(l, 93)._hidden);
                n(l, 104, 0, !e.notifOptions.op4, a._12(l, 105)._hidden);
                n(l, 107, 0, e.notifOptions.op4, a._12(l, 108)._hidden);
                n(l, 119, 0, !e.notifOptions.op5, a._12(l, 120)._hidden);
                n(l, 122, 0, e.notifOptions.op5, a._12(l, 123)._hidden)
            })
        }
        e.d(l, "a", function() {
            return C
        });
        var a = e(1)
          , i = e(51)
          , o = e(3)
          , r = e(6)
          , u = e(77)
          , s = e(32)
          , c = e(9)
          , d = e(20)
          , p = e(43)
          , h = e(21)
          , m = e(5)
          , _ = e(10)
          , f = e(25)
          , g = e(15)
          , v = e(45)
          , b = e(233)
          , y = e(37)
          , S = e(67)
          , P = a.Y({
            encapsulation: 2,
            styles: [],
            data: {}
        })
          , C = a.W("page-configuracion", b.a, function(n) {
            return a._23(0, [(n()(),
            a._0(0, 0, null, null, 1, "page-configuracion", [], null, null, null, t, P)), a.Z(1, 49152, null, 0, b.a, [y.a, S.a], null, null)], null, null)
        }, {}, {}, [])
    },
    419: function(n, l, e) {
        "use strict";
        function t(n) {
            return o._23(0, [(n()(),
            o._0(0, 0, null, null, 2, "ion-option", [], null, null, null, null, null)), o.Z(1, 16384, [[2, 4]], 0, r.a, [o.j], {
                value: [0, "value"]
            }, null), (n()(),
            o._21(2, null, ["", ""]))], function(n, l) {
                n(l, 1, 0, o._3(1, "", l.context.$implicit.value, ""))
            }, function(n, l) {
                n(l, 2, 0, l.context.$implicit.text)
            })
        }
        function a(n) {
            return o._23(0, [(n()(),
            o._0(0, 0, null, null, 43, "ion-item", [["class", "item item-block"]], null, [[null, "click"]], function(n, l, e) {
                var t = !0;
                if ("click" === l) {
                    t = !1 !== n.component.eventSelectLinea(e, n.context.$implicit) && t
                }
                return t
            }, u.b, u.a)), o.Z(1, 278528, null, 0, s.i, [o.q, o.r, o.j, o.B], {
                ngClass: [0, "ngClass"]
            }, null), o._15(2, {
                "item-selected-bus": 0
            }), o.Z(3, 1097728, null, 3, c.a, [d.a, p.a, o.j, o.A, [2, h.a]], null, null), o._19(335544320, 3, {
                contentLabel: 0
            }), o._19(603979776, 4, {
                _buttons: 1
            }), o._19(603979776, 5, {
                _icons: 1
            }), o.Z(7, 16384, null, 0, m.a, [], null, null), (n()(),
            o._21(-1, 2, ["\n            "])), (n()(),
            o._0(9, 0, null, 0, 3, "div", [["item-start", ""]], null, null, null, null, null)), (n()(),
            o._21(-1, null, ["\n                "])), (n()(),
            o._0(11, 0, null, null, 0, "img", [["class", "icon_bus"], ["src", "assets/images/bus/icon-bus.svg"]], null, null, null, null, null)), (n()(),
            o._21(-1, null, ["\n            "])), (n()(),
            o._21(-1, 2, ["\n            "])), (n()(),
            o._0(14, 0, null, 2, 3, "p", [], null, null, null, null, null)), (n()(),
            o._0(15, 0, null, null, 1, "b", [], null, null, null, null, null)), (n()(),
            o._21(16, null, ["", ""])), (n()(),
            o._21(17, null, [" - ", ""])), (n()(),
            o._21(-1, 2, ["\n            \n            "])), (n()(),
            o._0(19, 0, null, 4, 3, "div", [["class", "bus-accesibilidad"], ["item-end", ""]], [[8, "hidden", 0]], null, null, null, null)), (n()(),
            o._21(-1, null, ["\n                "])), (n()(),
            o._0(21, 0, null, null, 0, "img", [["class", "icon_accessibilidad"], ["src", "assets/images/bus/icono_Accesibilidad.png"]], null, null, null, null, null)), (n()(),
            o._21(-1, null, ["\n            "])), (n()(),
            o._21(-1, 2, ["\n            "])), (n()(),
            o._0(24, 0, null, 4, 3, "div", [["class", "bus-accesibilidad"], ["item-end", ""]], [[8, "hidden", 0]], null, null, null, null)), (n()(),
            o._21(-1, null, ["\n                "])), (n()(),
            o._0(26, 0, null, null, 0, "img", [["class", "icon_accessibilidad"], ["src", "assets/images/bus/icono_Accesibilidad-universal.png"]], null, null, null, null, null)), (n()(),
            o._21(-1, null, ["\n            "])), (n()(),
            o._21(-1, 2, ["\n            "])), (n()(),
            o._0(29, 0, null, 4, 13, "div", [["class", "bus-time"], ["item-end", ""]], null, null, null, null, null)), (n()(),
            o._21(-1, null, ["\n                "])), (n()(),
            o._0(31, 0, null, null, 2, "span", [["class", "siguiente-en"]], [[8, "hidden", 0]], null, null, null, null)), (n()(),
            o._21(-1, null, ["siguiente en"])), (n()(),
            o._0(33, 0, null, null, 0, "br", [], null, null, null, null, null)), (n()(),
            o._21(-1, null, ["\n                "])), (n()(),
            o._0(35, 0, null, null, 2, "span", [["class", "minutes-real"]], [[8, "hidden", 0]], null, null, null, null)), (n()(),
            o._21(36, null, ["", "'"])), (n()(),
            o._0(37, 0, null, null, 0, "br", [], null, null, null, null, null)), (n()(),
            o._21(-1, null, ["\n                "])), (n()(),
            o._21(-1, null, ["\n                "])), (n()(),
            o._0(40, 0, null, null, 1, "span", [["class", "minutes-theory"]], [[8, "hidden", 0]], null, null, null, null)), (n()(),
            o._21(41, null, ["", ""])), (n()(),
            o._21(-1, null, ["\n            "])), (n()(),
            o._21(-1, 2, ["\n        "]))], function(n, l) {
                var e = l.component;
                n(l, 1, 0, n(l, 2, 0, l.context.$implicit.idBus == e.idBusSelected && l.context.$implicit.variante == e.idVarianteSelected))
            }, function(n, l) {
                n(l, 16, 0, l.context.$implicit.linea);
                n(l, 17, 0, l.context.$implicit.destino);
                n(l, 19, 0, 3 != l.context.$implicit.tipoAccesibilidad);
                n(l, 24, 0, 2 != l.context.$implicit.tipoAccesibilidad);
                n(l, 31, 0, !l.context.$implicit.real);
                n(l, 35, 0, !l.context.$implicit.real);
                n(l, 36, 0, l.context.$implicit.minutos);
                n(l, 40, 0, l.context.$implicit.real);
                n(l, 41, 0, l.context.$implicit.horaDesc)
            })
        }
        function i(n) {
            return o._23(0, [o._19(402653184, 1, {
                ionicList: 0
            }), (n()(),
            o._0(1, 0, null, null, 61, "ion-content", [], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, _.b, _.a)), o.Z(2, 4374528, null, 0, f.a, [p.a, g.a, v.a, o.j, o.A, b.a, y.a, o.v, [2, S.a], [2, P.a]], null, null), (n()(),
            o._21(-1, 1, ["\n    "])), (n()(),
            o._21(-1, 1, ["\n    \n    "])), (n()(),
            o._0(5, 0, null, 0, 49, "div", [["ion-fixed", ""]], null, null, null, null, null)), (n()(),
            o._21(-1, null, ["\n    \n        "])), (n()(),
            o._0(7, 0, null, null, 12, "div", [["class", "tab"]], null, null, null, null, null)), (n()(),
            o._21(-1, null, ["\n            "])), (n()(),
            o._0(9, 0, null, null, 0, "div", [["class", "tab-shadow-side"]], null, null, null, null, null)), (n()(),
            o._21(-1, null, ["\n            "])), (n()(),
            o._0(11, 0, null, null, 3, "div", [["class", "tab-shadow"]], null, null, null, null, null)), (n()(),
            o._21(-1, null, ["\n                "])), (n()(),
            o._0(13, 0, null, null, 0, "div", [["class", "icon-up"]], null, null, null, null, null)), (n()(),
            o._21(-1, null, ["\n            "])), (n()(),
            o._21(-1, null, ["\n            "])), (n()(),
            o._0(16, 0, null, null, 0, "div", [["class", "tab-shadow-side"]], null, null, null, null, null)), (n()(),
            o._21(-1, null, ["\n            "])), (n()(),
            o._0(18, 0, null, null, 0, "div", [["class", "events"]], null, [[null, "tap"]], function(n, l, e) {
                var t = !0;
                if ("tap" === l) {
                    t = !1 !== n.component.swipeBusModal("click", e) && t
                }
                return t
            }, null, null)), (n()(),
            o._21(-1, null, ["\n        "])), (n()(),
            o._21(-1, null, ["\n        \n        "])), (n()(),
            o._0(21, 0, null, null, 28, "ion-row", [["class", "modal-header row"]], null, null, null, null, null)), o.Z(22, 16384, null, 0, C.a, [], null, null), (n()(),
            o._21(-1, null, ["\n            "])), (n()(),
            o._0(24, 0, null, null, 8, "ion-col", [["class", "col-1 col"], ["col-6", ""]], null, null, null, null, null)), o.Z(25, 16384, null, 0, w.a, [], null, null), (n()(),
            o._21(-1, null, ["\n                "])), (n()(),
            o._21(-1, null, ["\n                "])), (n()(),
            o._0(28, 0, null, null, 2, "im-selector", [], [[2, "select-md", null], [2, "select-ios", null]], [[null, "itemsChange"], [null, "onChange"]], function(n, l, e) {
                var t = !0
                  , a = n.component;
                if ("itemsChange" === l) {
                    t = !1 !== (a.selectedLineas = e) && t
                }
                if ("onChange" === l) {
                    t = !1 !== a.changeSelectLineas(e) && t
                }
                return t
            }, E.c, E.b)), o.Z(29, 573440, null, 0, O.a, [g.a, A.a, x.a, S.a, o.g], {
                items: [0, "items"],
                allitems: [1, "allitems"],
                selectedText: [2, "selectedText"]
            }, {
                onChange: "onChange"
            }), (n()(),
            o._21(-1, null, ["\n\n                "])), (n()(),
            o._21(-1, null, ["\n\n            "])), (n()(),
            o._21(-1, null, ["\n            "])), (n()(),
            o._21(-1, null, ["\n            \n            \n            "])), (n()(),
            o._0(34, 0, null, null, 14, "ion-col", [["class", "col-3 col"], ["col-6", ""]], null, null, null, null, null)), o.Z(35, 16384, null, 0, w.a, [], null, null), (n()(),
            o._21(-1, null, ["\n                "])), (n()(),
            o._0(37, 0, null, null, 10, "ion-select", [["interface", "popover"]], [[2, "select-disabled", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ionChange"], [null, "ngModelChange"], [null, "click"], [null, "keyup.space"]], function(n, l, e) {
                var t = !0
                  , a = n.component;
                if ("click" === l) {
                    t = !1 !== o._12(n, 38)._click(e) && t
                }
                if ("keyup.space" === l) {
                    t = !1 !== o._12(n, 38)._keyup() && t
                }
                if ("ionChange" === l) {
                    t = !1 !== a.onChangeHora(e) && t
                }
                if ("ngModelChange" === l) {
                    t = !1 !== (a.horarioElegidoCombo = e) && t
                }
                return t
            }, I.b, I.a)), o.Z(38, 1228800, null, 1, R.a, [b.a, d.a, p.a, o.j, o.A, [2, c.a], D.a], {
                interface: [0, "interface"],
                selectedText: [1, "selectedText"]
            }, {
                ionChange: "ionChange"
            }), o._19(603979776, 2, {
                options: 1
            }), o._17(1024, null, T.e, function(n) {
                return [n]
            }, [R.a]), o.Z(41, 671744, null, 0, T.h, [[8, null], [8, null], [8, null], [2, T.e]], {
                model: [0, "model"]
            }, {
                update: "ngModelChange"
            }), o._17(2048, null, T.f, null, [T.h]), o.Z(43, 16384, null, 0, T.g, [T.f], null, null), (n()(),
            o._21(-1, null, ["\n                    "])), (n()(),
            o.V(16777216, null, null, 1, null, t)), o.Z(46, 802816, null, 0, s.j, [o.J, o.G, o.q], {
                ngForOf: [0, "ngForOf"]
            }, null), (n()(),
            o._21(-1, null, ["\n                "])), (n()(),
            o._21(-1, null, ["\n            "])), (n()(),
            o._21(-1, null, ["\n            \n        "])), (n()(),
            o._21(-1, null, ["\n        "])), (n()(),
            o._21(-1, null, ["\n        "])), (n()(),
            o._0(52, 0, null, null, 1, "im-indeterminate-progress-bar", [], null, null, null, k.b, k.a)), o.Z(53, 49152, null, 0, M.a, [], {
                hide: [0, "hide"]
            }, null), (n()(),
            o._21(-1, null, ["\n    "])), (n()(),
            o._21(-1, 1, ["\n\n    "])), (n()(),
            o._0(56, 0, [[1, 0], ["ionicList", 1]], 1, 5, "ion-list", [["id", "ionicList"]], null, null, null, null, null)), o.Z(57, 16384, null, 0, F.a, [p.a, o.j, o.A, g.a, L.l, v.a], null, null), (n()(),
            o._21(-1, null, ["\n        "])), (n()(),
            o.V(16777216, null, null, 1, null, a)), o.Z(60, 802816, null, 0, s.j, [o.J, o.G, o.q], {
                ngForOf: [0, "ngForOf"]
            }, null), (n()(),
            o._21(-1, null, ["\n    "])), (n()(),
            o._21(-1, 1, ["    \n\n"])), (n()(),
            o._21(-1, null, ["\n"]))], function(n, l) {
                var e = l.component;
                n(l, 29, 0, e.selectedLineas, e.lineas, e.textSelectedLineas);
                n(l, 38, 0, "popover", o._3(1, "", e.textSelectHorario(), ""));
                n(l, 41, 0, e.horarioElegidoCombo);
                n(l, 46, 0, e.horarioOptions);
                n(l, 53, 0, !e.showSpinner);
                n(l, 60, 0, e.buses)
            }, function(n, l) {
                n(l, 1, 0, o._12(l, 2).statusbarPadding, o._12(l, 2)._hasRefresher);
                n(l, 28, 0, o._12(l, 29).md_selector, o._12(l, 29).ios_selector);
                n(l, 37, 0, o._12(l, 38)._disabled, o._12(l, 43).ngClassUntouched, o._12(l, 43).ngClassTouched, o._12(l, 43).ngClassPristine, o._12(l, 43).ngClassDirty, o._12(l, 43).ngClassValid, o._12(l, 43).ngClassInvalid, o._12(l, 43).ngClassPending)
            })
        }
        e.d(l, "a", function() {
            return z
        });
        var o = e(1)
          , r = e(110)
          , u = e(50)
          , s = e(15)
          , c = e(19)
          , d = e(17)
          , p = e(3)
          , h = e(35)
          , m = e(41)
          , _ = e(43)
          , f = e(21)
          , g = e(5)
          , v = e(10)
          , b = e(9)
          , y = e(25)
          , S = e(6)
          , P = e(20)
          , C = e(75)
          , w = e(74)
          , E = e(160)
          , O = e(116)
          , A = e(68)
          , x = e(16)
          , I = e(396)
          , R = e(111)
          , D = e(28)
          , T = e(23)
          , k = e(226)
          , M = e(115)
          , F = e(42)
          , L = e(11)
          , j = e(161)
          , N = e(38)
          , V = e(86)
          , Z = e(37)
          , U = e(39)
          , B = e(79)
          , G = e(69)
          , H = e(52)
          , $ = o.Y({
            encapsulation: 2,
            styles: [],
            data: {}
        })
          , z = o.W("page-buses-modal", j.a, function(n) {
            return o._23(0, [(n()(),
            o._0(0, 0, null, null, 1, "page-buses-modal", [], [[2, "swiping", null]], null, null, i, $)), o.Z(1, 4243456, null, 0, j.a, [P.a, x.a, A.a, N.a, V.a, Z.a, U.a, o.v, o.A, v.a, g.a, o.j, B.a, G.a, H.a], null, null)], null, function(n, l) {
                n(l, 0, 0, o._12(l, 1).swiping)
            })
        }, {}, {}, [])
    },
    420: function(n, l, e) {
        "use strict";
        function t(n) {
            return o._23(0, [(n()(),
            o._0(0, 0, null, null, 24, "ion-item", [["class", "item item-block"]], null, null, null, r.b, r.a)), o.Z(1, 1097728, null, 3, u.a, [s.a, c.a, o.j, o.A, [2, d.a]], null, null), o._19(335544320, 2, {
                contentLabel: 0
            }), o._19(603979776, 3, {
                _buttons: 1
            }), o._19(603979776, 4, {
                _icons: 1
            }), o.Z(5, 16384, null, 0, p.a, [], null, null), (n()(),
            o._21(-1, 2, ["\n            "])), (n()(),
            o._0(7, 0, null, 2, 1, "h2", [], null, null, null, null, null)), (n()(),
            o._21(8, null, ["", ""])), (n()(),
            o._21(-1, 2, ["\n            "])), (n()(),
            o._0(10, 0, null, 2, 1, "p", [], null, null, null, null, null)), (n()(),
            o._21(11, null, ["", ""])), (n()(),
            o._21(-1, 2, ["\n            "])), (n()(),
            o._0(13, 0, null, 4, 4, "ion-thumbnail", [["item-end", ""]], null, [[null, "click"]], function(n, l, e) {
                var t = !0;
                if ("click" === l) {
                    t = !1 !== n.component.editFavorite(e, n.context.$implicit) && t
                }
                return t
            }, null, null)), o.Z(14, 16384, null, 0, h.a, [], null, null), (n()(),
            o._21(-1, null, ["\n                "])), (n()(),
            o._0(16, 0, null, null, 0, "img", [["class", "icon-action"], ["src", "assets/images/button/icon-pen.png"]], null, null, null, null, null)), (n()(),
            o._21(-1, null, ["\n            "])), (n()(),
            o._21(-1, 2, ["\n            "])), (n()(),
            o._0(19, 0, null, 4, 4, "ion-thumbnail", [["item-end", ""]], null, [[null, "click"]], function(n, l, e) {
                var t = !0;
                if ("click" === l) {
                    t = !1 !== n.component.deleteFavorite(e, n.context.$implicit) && t
                }
                return t
            }, null, null)), o.Z(20, 16384, null, 0, h.a, [], null, null), (n()(),
            o._21(-1, null, ["\n                "])), (n()(),
            o._0(22, 0, null, null, 0, "img", [["class", "icon-action"], ["src", "assets/images/button/icon-trash.png"]], null, null, null, null, null)), (n()(),
            o._21(-1, null, ["\n            "])), (n()(),
            o._21(-1, 2, ["\n        "]))], null, function(n, l) {
                n(l, 8, 0, l.context.$implicit.label);
                n(l, 11, 0, l.context.$implicit.text)
            })
        }
        function a(n) {
            return o._23(0, [(n()(),
            o._0(0, 0, null, null, 9, "ion-item", [["class", "item item-block"]], null, null, null, r.b, r.a)), o.Z(1, 1097728, null, 3, u.a, [s.a, c.a, o.j, o.A, [2, d.a]], null, null), o._19(335544320, 5, {
                contentLabel: 0
            }), o._19(603979776, 6, {
                _buttons: 1
            }), o._19(603979776, 7, {
                _icons: 1
            }), o.Z(5, 16384, null, 0, p.a, [], null, null), (n()(),
            o._21(-1, 2, ["\n            "])), (n()(),
            o._0(7, 0, null, 2, 1, "h2", [], null, null, null, null, null)), (n()(),
            o._21(-1, null, ["No hay favoritos."])), (n()(),
            o._21(-1, 2, ["\n        "]))], null, null)
        }
        function i(n) {
            return o._23(0, [o._19(402653184, 1, {
                input: 0
            }), (n()(),
            o._0(1, 0, null, null, 12, "ion-header", [["page", ""]], null, null, null, null, null)), o.Z(2, 16384, null, 0, m.a, [c.a, o.j, o.A, [2, _.a]], null, null), (n()(),
            o._21(-1, null, ["\n    "])), (n()(),
            o._0(4, 0, null, null, 8, "ion-navbar", [["class", "toolbar"]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, f.b, f.a)), o.Z(5, 49152, null, 0, g.a, [v.a, [2, _.a], [2, b.a], c.a, o.j, o.A], null, null), (n()(),
            o._21(-1, 3, ["\n        "])), (n()(),
            o._0(7, 0, null, 3, 1, "button", [["class", "left"]], null, [[null, "click"]], function(n, l, e) {
                var t = !0;
                if ("click" === l) {
                    t = !1 !== n.component.backToHome() && t
                }
                return t
            }, null, null)), (n()(),
            o._0(8, 0, null, null, 0, "img", [["class", "icon-back"], ["src", "assets/images/button/icono_Atras.png"]], null, null, null, null, null)), (n()(),
            o._21(-1, 3, ["\n        "])), (n()(),
            o._0(10, 0, null, 3, 1, "span", [["class", "title-label text-ellipsis"]], null, null, null, null, null)), (n()(),
            o._21(-1, null, ["Favoritos"])), (n()(),
            o._21(-1, 3, ["\n    "])), (n()(),
            o._21(-1, null, ["\n"])), (n()(),
            o._21(-1, null, ["\n\n\n"])), (n()(),
            o._0(15, 0, null, null, 23, "ion-content", [["favoritos", ""]], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, y.b, y.a)), o.Z(16, 4374528, null, 0, S.a, [c.a, P.a, C.a, o.j, o.A, v.a, w.a, o.v, [2, _.a], [2, b.a]], null, null), (n()(),
            o._21(-1, 1, ["\n    "])), (n()(),
            o._0(18, 0, null, 1, 1, "im-indeterminate-progress-bar", [], null, null, null, E.b, E.a)), o.Z(19, 49152, null, 0, O.a, [], {
                hide: [0, "hide"]
            }, null), (n()(),
            o._21(-1, 1, ["\n        \n    "])), (n()(),
            o._0(21, 0, [[1, 0], ["input", 1]], 1, 5, "input", [["class", "campo"], ["placeholder", "Agregar favorito..."], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "focus"], [null, "keydown"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function(n, l, e) {
                var t = !0
                  , a = n.component;
                if ("input" === l) {
                    t = !1 !== o._12(n, 22)._handleInput(e.target.value) && t
                }
                if ("blur" === l) {
                    t = !1 !== o._12(n, 22).onTouched() && t
                }
                if ("compositionstart" === l) {
                    t = !1 !== o._12(n, 22)._compositionStart() && t
                }
                if ("compositionend" === l) {
                    t = !1 !== o._12(n, 22)._compositionEnd(e.target.value) && t
                }
                if ("ngModelChange" === l) {
                    t = !1 !== (a.inputFavorito = e) && t
                }
                if ("focus" === l) {
                    t = !1 !== a.onFocus(e) && t
                }
                if ("keydown" === l) {
                    t = !1 !== a.onInputChange(e) && t
                }
                return t
            }, null, null)), o.Z(22, 16384, null, 0, A.b, [o.B, o.j, [2, A.a]], null, null), o._17(1024, null, A.e, function(n) {
                return [n]
            }, [A.b]), o.Z(24, 671744, null, 0, A.h, [[8, null], [8, null], [8, null], [2, A.e]], {
                model: [0, "model"]
            }, {
                update: "ngModelChange"
            }), o._17(2048, null, A.f, null, [A.h]), o.Z(26, 16384, null, 0, A.g, [A.f], null, null), (n()(),
            o._21(-1, 1, ["\n\n    "])), (n()(),
            o._0(28, 0, null, 1, 8, "ion-list", [], null, null, null, null, null)), o.Z(29, 16384, null, 0, x.a, [c.a, o.j, o.A, P.a, I.l, C.a], null, null), (n()(),
            o._21(-1, null, ["\n        "])), (n()(),
            o.V(16777216, null, null, 1, null, t)), o.Z(32, 802816, null, 0, R.j, [o.J, o.G, o.q], {
                ngForOf: [0, "ngForOf"]
            }, null), (n()(),
            o._21(-1, null, ["\n        "])), (n()(),
            o.V(16777216, null, null, 1, null, a)), o.Z(35, 16384, null, 0, R.k, [o.J, o.G], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            o._21(-1, null, ["\n    "])), (n()(),
            o._21(-1, 1, ["\n\n"])), (n()(),
            o._21(-1, 1, ["\n\n"])), (n()(),
            o._21(-1, null, ["\n"]))], function(n, l) {
                var e = l.component;
                n(l, 19, 0, !e.inputSpinner);
                n(l, 24, 0, e.inputFavorito);
                n(l, 32, 0, e.favs);
                n(l, 35, 0, !e.favs || 0 == e.favs.length)
            }, function(n, l) {
                n(l, 4, 0, o._12(l, 5)._hidden, o._12(l, 5)._sbPadding);
                n(l, 15, 0, o._12(l, 16).statusbarPadding, o._12(l, 16)._hasRefresher);
                n(l, 21, 0, o._12(l, 26).ngClassUntouched, o._12(l, 26).ngClassTouched, o._12(l, 26).ngClassPristine, o._12(l, 26).ngClassDirty, o._12(l, 26).ngClassValid, o._12(l, 26).ngClassInvalid, o._12(l, 26).ngClassPending)
            })
        }
        e.d(l, "a", function() {
            return N
        });
        var o = e(1)
          , r = e(50)
          , u = e(19)
          , s = e(17)
          , c = e(3)
          , d = e(35)
          , p = e(41)
          , h = e(150)
          , m = e(51)
          , _ = e(6)
          , f = e(77)
          , g = e(32)
          , v = e(9)
          , b = e(20)
          , y = e(43)
          , S = e(21)
          , P = e(5)
          , C = e(10)
          , w = e(25)
          , E = e(226)
          , O = e(115)
          , A = e(23)
          , x = e(42)
          , I = e(11)
          , R = e(15)
          , D = e(162)
          , T = e(37)
          , k = e(68)
          , M = e(80)
          , F = e(57)
          , L = e(72)
          , j = o.Y({
            encapsulation: 2,
            styles: [],
            data: {}
        })
          , N = o.W("page-favoritos", D.a, function(n) {
            return o._23(0, [(n()(),
            o._0(0, 0, null, null, 1, "page-favoritos", [], null, null, null, i, j)), o.Z(1, 49152, null, 0, D.a, [T.a, k.a, M.a, F.a, o.j, L.a, o.A, C.a], null, null)], null, null)
        }, {}, {}, [])
    },
    421: function(n, l, e) {
        "use strict";
        function t(n) {
            return a._23(0, [(n()(),
            a._0(0, 0, null, null, 10, "ion-header", [], null, null, null, null, null)), a.Z(1, 16384, null, 0, i.a, [o.a, a.j, a.A, [2, r.a]], null, null), (n()(),
            a._21(-1, null, ["\n    "])), (n()(),
            a._0(3, 0, null, null, 6, "ion-navbar", [["class", "toolbar"]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, u.b, u.a)), a.Z(4, 49152, null, 0, s.a, [c.a, [2, r.a], [2, d.a], o.a, a.j, a.A], null, null), (n()(),
            a._21(-1, 3, ["\n        "])), (n()(),
            a._0(6, 0, null, 3, 2, "ion-title", [], null, null, null, p.b, p.a)), a.Z(7, 49152, null, 0, h.a, [o.a, a.j, a.A, [2, m.a], [2, s.a]], null, null), (n()(),
            a._21(-1, 0, ["Elegir hora"])), (n()(),
            a._21(-1, 3, ["\n    "])), (n()(),
            a._21(-1, null, ["\n"])), (n()(),
            a._21(-1, null, ["\n"])), (n()(),
            a._0(12, 0, null, null, 77, "ion-content", [], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, _.b, _.a)), a.Z(13, 4374528, null, 0, f.a, [o.a, g.a, v.a, a.j, a.A, c.a, b.a, a.v, [2, r.a], [2, d.a]], null, null), (n()(),
            a._21(-1, 1, ["\n    "])), (n()(),
            a._0(15, 0, null, 1, 53, "ion-list", [["radio-group", ""], ["role", "radiogroup"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"]], function(n, l, e) {
                var t = !0;
                if ("ngModelChange" === l) {
                    t = !1 !== (n.component.tipoDia = e) && t
                }
                return t
            }, null, null)), a.Z(16, 1064960, null, 1, y.a, [a.A, a.j, a.g], null, null), a._19(335544320, 1, {
                _header: 0
            }), a._17(1024, null, S.e, function(n) {
                return [n]
            }, [y.a]), a.Z(19, 671744, null, 0, S.h, [[8, null], [8, null], [8, null], [2, S.e]], {
                model: [0, "model"]
            }, {
                update: "ngModelChange"
            }), a._17(2048, null, S.f, null, [S.h]), a.Z(21, 16384, null, 0, S.g, [S.f], null, null), a.Z(22, 16384, null, 0, P.a, [o.a, a.j, a.A, g.a, C.l, v.a], null, null), (n()(),
            a._21(-1, null, ["\n        "])), (n()(),
            a._0(24, 0, null, null, 13, "ion-item", [["class", "item item-block"]], null, null, null, w.b, w.a)), a.Z(25, 1097728, null, 3, E.a, [O.a, o.a, a.j, a.A, [2, A.a]], null, null), a._19(335544320, 2, {
                contentLabel: 0
            }), a._19(603979776, 3, {
                _buttons: 1
            }), a._19(603979776, 4, {
                _icons: 1
            }), a.Z(29, 16384, null, 0, x.a, [], null, null), (n()(),
            a._21(-1, 2, ["\n            "])), (n()(),
            a._0(31, 0, null, 1, 2, "ion-label", [], null, null, null, null, null)), a.Z(32, 16384, [[2, 4]], 0, I.a, [o.a, a.j, a.A, [8, null], [8, null], [8, null], [8, null]], null, null), (n()(),
            a._21(-1, null, ["Hábiles"])), (n()(),
            a._21(-1, 2, ["\n            "])), (n()(),
            a._0(35, 0, null, 4, 1, "ion-radio", [["value", "1"]], [[2, "radio-disabled", null]], [[null, "click"]], function(n, l, e) {
                var t = !0;
                if ("click" === l) {
                    t = !1 !== a._12(n, 36)._click(e) && t
                }
                return t
            }, R.b, R.a)), a.Z(36, 245760, null, 0, D.a, [O.a, o.a, a.j, a.A, [2, E.a], [2, y.a]], {
                value: [0, "value"]
            }, null), (n()(),
            a._21(-1, 2, ["\n        "])), (n()(),
            a._21(-1, null, ["\n        "])), (n()(),
            a._0(39, 0, null, null, 13, "ion-item", [["class", "item item-block"]], null, null, null, w.b, w.a)), a.Z(40, 1097728, null, 3, E.a, [O.a, o.a, a.j, a.A, [2, A.a]], null, null), a._19(335544320, 5, {
                contentLabel: 0
            }), a._19(603979776, 6, {
                _buttons: 1
            }), a._19(603979776, 7, {
                _icons: 1
            }), a.Z(44, 16384, null, 0, x.a, [], null, null), (n()(),
            a._21(-1, 2, ["\n            "])), (n()(),
            a._0(46, 0, null, 1, 2, "ion-label", [], null, null, null, null, null)), a.Z(47, 16384, [[5, 4]], 0, I.a, [o.a, a.j, a.A, [8, null], [8, null], [8, null], [8, null]], null, null), (n()(),
            a._21(-1, null, ["Sábados"])), (n()(),
            a._21(-1, 2, ["\n            "])), (n()(),
            a._0(50, 0, null, 4, 1, "ion-radio", [["value", "2"]], [[2, "radio-disabled", null]], [[null, "click"]], function(n, l, e) {
                var t = !0;
                if ("click" === l) {
                    t = !1 !== a._12(n, 51)._click(e) && t
                }
                return t
            }, R.b, R.a)), a.Z(51, 245760, null, 0, D.a, [O.a, o.a, a.j, a.A, [2, E.a], [2, y.a]], {
                value: [0, "value"]
            }, null), (n()(),
            a._21(-1, 2, ["\n        "])), (n()(),
            a._21(-1, null, ["\n        "])), (n()(),
            a._0(54, 0, null, null, 13, "ion-item", [["class", "item item-block"]], null, null, null, w.b, w.a)), a.Z(55, 1097728, null, 3, E.a, [O.a, o.a, a.j, a.A, [2, A.a]], null, null), a._19(335544320, 8, {
                contentLabel: 0
            }), a._19(603979776, 9, {
                _buttons: 1
            }), a._19(603979776, 10, {
                _icons: 1
            }), a.Z(59, 16384, null, 0, x.a, [], null, null), (n()(),
            a._21(-1, 2, ["\n            "])), (n()(),
            a._0(61, 0, null, 1, 2, "ion-label", [], null, null, null, null, null)), a.Z(62, 16384, [[8, 4]], 0, I.a, [o.a, a.j, a.A, [8, null], [8, null], [8, null], [8, null]], null, null), (n()(),
            a._21(-1, null, ["Domingos"])), (n()(),
            a._21(-1, 2, ["\n            "])), (n()(),
            a._0(65, 0, null, 4, 1, "ion-radio", [["value", "3"]], [[2, "radio-disabled", null]], [[null, "click"]], function(n, l, e) {
                var t = !0;
                if ("click" === l) {
                    t = !1 !== a._12(n, 66)._click(e) && t
                }
                return t
            }, R.b, R.a)), a.Z(66, 245760, null, 0, D.a, [O.a, o.a, a.j, a.A, [2, E.a], [2, y.a]], {
                value: [0, "value"]
            }, null), (n()(),
            a._21(-1, 2, ["\n        "])), (n()(),
            a._21(-1, null, ["\n    "])), (n()(),
            a._21(-1, 1, ["\n    "])), (n()(),
            a._0(70, 0, null, 1, 18, "ion-item", [["class", "item item-block"]], null, null, null, w.b, w.a)), a.Z(71, 1097728, null, 3, E.a, [O.a, o.a, a.j, a.A, [2, A.a]], null, null), a._19(335544320, 11, {
                contentLabel: 0
            }), a._19(603979776, 12, {
                _buttons: 1
            }), a._19(603979776, 13, {
                _icons: 1
            }), a.Z(75, 16384, null, 0, x.a, [], null, null), (n()(),
            a._21(-1, 2, ["\n        "])), (n()(),
            a._0(77, 0, null, 1, 2, "ion-label", [], null, null, null, null, null)), a.Z(78, 16384, [[11, 4]], 0, I.a, [o.a, a.j, a.A, [8, null], [8, null], [8, null], [8, null]], null, null), (n()(),
            a._21(-1, null, ["Hora"])), (n()(),
            a._21(-1, 2, ["\n        "])), (n()(),
            a._0(81, 0, null, 3, 6, "ion-datetime", [["cancelText", "Cancelar"], ["doneText", "Confirmar"], ["minuteValues", "0,5,10,15,20,25,30,35,40,45,50,55"], ["pickerFormat", "HH:mm"]], [[2, "datetime-disabled", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "click"], [null, "keyup.space"]], function(n, l, e) {
                var t = !0
                  , i = n.component;
                if ("click" === l) {
                    t = !1 !== a._12(n, 82)._click(e) && t
                }
                if ("keyup.space" === l) {
                    t = !1 !== a._12(n, 82)._keyup() && t
                }
                if ("ngModelChange" === l) {
                    t = !1 !== (i.hora = e) && t
                }
                return t
            }, T.b, T.a)), a.Z(82, 1228800, null, 0, k.a, [O.a, o.a, a.j, a.A, [2, E.a], [2, M.a]], {
                pickerFormat: [0, "pickerFormat"],
                cancelText: [1, "cancelText"],
                doneText: [2, "doneText"],
                minuteValues: [3, "minuteValues"]
            }, null), a._17(1024, null, S.e, function(n) {
                return [n]
            }, [k.a]), a.Z(84, 671744, null, 0, S.h, [[8, null], [8, null], [8, null], [2, S.e]], {
                model: [0, "model"]
            }, {
                update: "ngModelChange"
            }), a._17(2048, null, S.f, null, [S.h]), a.Z(86, 16384, null, 0, S.g, [S.f], null, null), (n()(),
            a._21(-1, null, ["\n        "])), (n()(),
            a._21(-1, 2, ["\n    "])), (n()(),
            a._21(-1, 1, ["\n"])), (n()(),
            a._21(-1, null, ["\n"])), (n()(),
            a._0(91, 0, null, null, 30, "ion-footer", [], null, null, null, null, null)), a.Z(92, 16384, null, 0, F.a, [o.a, a.j, a.A, [2, r.a]], null, null), (n()(),
            a._21(-1, null, ["\n    "])), (n()(),
            a._0(94, 0, null, null, 26, "ion-toolbar", [["class", "toolbar"]], [[2, "statusbar-padding", null]], null, null, L.b, L.a)), a.Z(95, 49152, null, 0, m.a, [o.a, a.j, a.A], null, null), (n()(),
            a._21(-1, 3, ["\n        "])), (n()(),
            a._0(97, 0, null, 3, 22, "ion-grid", [["class", "grid"], ["item-content", ""]], null, null, null, null, null)), a.Z(98, 16384, null, 0, j.a, [], null, null), (n()(),
            a._21(-1, null, ["\n            "])), (n()(),
            a._0(100, 0, null, null, 18, "ion-row", [["class", "row"]], null, null, null, null, null)), a.Z(101, 16384, null, 0, N.a, [], null, null), (n()(),
            a._21(-1, null, ["\n              "])), (n()(),
            a._0(103, 0, null, null, 6, "ion-col", [["class", "col"], ["col-6", ""]], null, null, null, null, null)), a.Z(104, 16384, null, 0, V.a, [], null, null), (n()(),
            a._21(-1, null, ["\n                  "])), (n()(),
            a._0(106, 0, null, null, 2, "button", [["full", ""], ["ion-button", ""]], null, [[null, "click"]], function(n, l, e) {
                var t = !0;
                if ("click" === l) {
                    t = !1 !== n.component.cancelar() && t
                }
                return t
            }, Z.b, Z.a)), a.Z(107, 1097728, null, 0, U.a, [[8, ""], o.a, a.j, a.A], {
                full: [0, "full"]
            }, null), (n()(),
            a._21(-1, 0, ["Cancelar"])), (n()(),
            a._21(-1, null, ["\n              "])), (n()(),
            a._21(-1, null, ["\n              "])), (n()(),
            a._0(111, 0, null, null, 6, "ion-col", [["class", "col"], ["col-6", ""]], null, null, null, null, null)), a.Z(112, 16384, null, 0, V.a, [], null, null), (n()(),
            a._21(-1, null, ["\n                  "])), (n()(),
            a._0(114, 0, null, null, 2, "button", [["full", ""], ["ion-button", ""]], null, [[null, "click"]], function(n, l, e) {
                var t = !0;
                if ("click" === l) {
                    t = !1 !== n.component.confirmar() && t
                }
                return t
            }, Z.b, Z.a)), a.Z(115, 1097728, null, 0, U.a, [[8, ""], o.a, a.j, a.A], {
                full: [0, "full"]
            }, null), (n()(),
            a._21(-1, 0, ["Confirmar"])), (n()(),
            a._21(-1, null, ["\n              "])), (n()(),
            a._21(-1, null, ["\n            "])), (n()(),
            a._21(-1, null, ["\n        "])), (n()(),
            a._21(-1, 3, ["\n    "])), (n()(),
            a._21(-1, null, ["\n"]))], function(n, l) {
                var e = l.component;
                n(l, 19, 0, e.tipoDia);
                n(l, 36, 0, "1");
                n(l, 51, 0, "2");
                n(l, 66, 0, "3");
                n(l, 82, 0, "HH:mm", "Cancelar", "Confirmar", "0,5,10,15,20,25,30,35,40,45,50,55");
                n(l, 84, 0, e.hora);
                n(l, 107, 0, "");
                n(l, 115, 0, "")
            }, function(n, l) {
                n(l, 3, 0, a._12(l, 4)._hidden, a._12(l, 4)._sbPadding);
                n(l, 12, 0, a._12(l, 13).statusbarPadding, a._12(l, 13)._hasRefresher);
                n(l, 15, 0, a._12(l, 21).ngClassUntouched, a._12(l, 21).ngClassTouched, a._12(l, 21).ngClassPristine, a._12(l, 21).ngClassDirty, a._12(l, 21).ngClassValid, a._12(l, 21).ngClassInvalid, a._12(l, 21).ngClassPending);
                n(l, 35, 0, a._12(l, 36)._disabled);
                n(l, 50, 0, a._12(l, 51)._disabled);
                n(l, 65, 0, a._12(l, 66)._disabled);
                n(l, 81, 0, a._12(l, 82)._disabled, a._12(l, 86).ngClassUntouched, a._12(l, 86).ngClassTouched, a._12(l, 86).ngClassPristine, a._12(l, 86).ngClassDirty, a._12(l, 86).ngClassValid, a._12(l, 86).ngClassInvalid, a._12(l, 86).ngClassPending);
                n(l, 94, 0, a._12(l, 95)._sbPadding)
            })
        }
        e.d(l, "a", function() {
            return z
        });
        var a = e(1)
          , i = e(51)
          , o = e(3)
          , r = e(6)
          , u = e(77)
          , s = e(32)
          , c = e(9)
          , d = e(20)
          , p = e(154)
          , h = e(78)
          , m = e(46)
          , _ = e(43)
          , f = e(21)
          , g = e(5)
          , v = e(10)
          , b = e(25)
          , y = e(85)
          , S = e(23)
          , P = e(42)
          , C = e(11)
          , w = e(50)
          , E = e(19)
          , O = e(17)
          , A = e(35)
          , x = e(41)
          , I = e(73)
          , R = e(374)
          , D = e(109)
          , T = e(450)
          , k = e(131)
          , M = e(84)
          , F = e(219)
          , L = e(398)
          , j = e(182)
          , N = e(75)
          , V = e(74)
          , Z = e(36)
          , U = e(22)
          , B = e(119)
          , G = e(16)
          , H = e(37)
          , $ = a.Y({
            encapsulation: 2,
            styles: [],
            data: {}
        })
          , z = a.W("page-elegir-horario-modal", B.a, function(n) {
            return a._23(0, [(n()(),
            a._0(0, 0, null, null, 1, "page-elegir-horario-modal", [], null, null, null, t, $)), a.Z(1, 49152, null, 0, B.a, [G.a, H.a, r.a], null, null)], null, null)
        }, {}, {}, [])
    },
    422: function(n, l, e) {
        "use strict";
        function t(n) {
            return a._23(0, [(n()(),
            a._0(0, 0, null, null, 34, "ion-header", [], null, null, null, null, null)), a.Z(1, 16384, null, 0, i.a, [o.a, a.j, a.A, [2, r.a]], null, null), (n()(),
            a._21(-1, null, ["\n    "])), (n()(),
            a._0(3, 0, null, null, 30, "ion-navbar", [["class", "toolbar"]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, u.b, u.a)), a.Z(4, 49152, null, 0, s.a, [c.a, [2, r.a], [2, d.a], o.a, a.j, a.A], null, null), (n()(),
            a._21(-1, 3, ["\n        \n\n\n            "])), (n()(),
            a._0(6, 0, null, 3, 26, "ion-title", [], null, null, null, p.b, p.a)), a.Z(7, 49152, null, 0, h.a, [o.a, a.j, a.A, [2, m.a], [2, s.a]], null, null), (n()(),
            a._21(-1, 0, ["\n\n                "])), (n()(),
            a._0(9, 0, null, 0, 10, "ion-buttons", [["start", ""]], null, null, null, null, null)), a.Z(10, 16384, null, 1, _.a, [o.a, a.j, a.A, [2, m.a], [2, s.a]], null, null), a._19(603979776, 1, {
                _buttons: 1
            }), (n()(),
            a._21(-1, null, ["\n                    "])), (n()(),
            a._0(13, 0, null, null, 5, "button", [["icon-only", ""], ["ion-button", ""]], null, [[null, "click"]], function(n, l, e) {
                var t = !0;
                if ("click" === l) {
                    t = !1 !== n.component.menuToggle() && t
                }
                return t
            }, f.b, f.a)), a.Z(14, 1097728, [[1, 4]], 0, g.a, [[8, ""], o.a, a.j, a.A], null, null), (n()(),
            a._21(-1, 0, ["\n                        "])), (n()(),
            a._0(16, 0, null, 0, 1, "ion-icon", [["name", "menu"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), a.Z(17, 147456, null, 0, v.a, [o.a, a.j, a.A], {
                name: [0, "name"]
            }, null), (n()(),
            a._21(-1, 0, ["\n                    "])), (n()(),
            a._21(-1, null, ["\n                "])), (n()(),
            a._21(-1, 0, ["                \n                Inbox\n                "])), (n()(),
            a._0(21, 0, null, 0, 10, "ion-buttons", [["end", ""]], null, null, null, null, null)), a.Z(22, 16384, null, 1, _.a, [o.a, a.j, a.A, [2, m.a], [2, s.a]], null, null), a._19(603979776, 2, {
                _buttons: 1
            }), (n()(),
            a._21(-1, null, ["\n                    "])), (n()(),
            a._0(25, 0, null, null, 5, "button", [["icon-only", ""], ["ion-button", ""]], null, [[null, "click"]], function(n, l, e) {
                var t = !0;
                if ("click" === l) {
                    t = !1 !== n.component.closeModal() && t
                }
                return t
            }, f.b, f.a)), a.Z(26, 1097728, [[2, 4]], 0, g.a, [[8, ""], o.a, a.j, a.A], null, null), (n()(),
            a._21(-1, 0, ["\n                        "])), (n()(),
            a._0(28, 0, null, 0, 1, "ion-icon", [["name", "close"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), a.Z(29, 147456, null, 0, v.a, [o.a, a.j, a.A], {
                name: [0, "name"]
            }, null), (n()(),
            a._21(-1, 0, ["\n                    "])), (n()(),
            a._21(-1, null, ["\n                "])), (n()(),
            a._21(-1, 0, ["                \n            "])), (n()(),
            a._21(-1, 3, ["\n\n\n        \n    "])), (n()(),
            a._21(-1, null, ["\n\n"])), (n()(),
            a._21(-1, null, ["\n\n\n"])), (n()(),
            a._0(36, 0, null, null, 5, "ion-content", [], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, b.b, b.a)), a.Z(37, 4374528, null, 0, y.a, [o.a, S.a, P.a, a.j, a.A, c.a, C.a, a.v, [2, r.a], [2, d.a]], null, null), (n()(),
            a._21(-1, 1, ["    \n    "])), (n()(),
            a._0(39, 0, null, 1, 1, "h1", [], null, null, null, null, null)), (n()(),
            a._21(-1, null, ["Inbox"])), (n()(),
            a._21(-1, 1, ["\n"])), (n()(),
            a._21(-1, null, ["\n"]))], function(n, l) {
                n(l, 17, 0, "menu");
                n(l, 29, 0, "close")
            }, function(n, l) {
                n(l, 3, 0, a._12(l, 4)._hidden, a._12(l, 4)._sbPadding);
                n(l, 16, 0, a._12(l, 17)._hidden);
                n(l, 28, 0, a._12(l, 29)._hidden);
                n(l, 36, 0, a._12(l, 37).statusbarPadding, a._12(l, 37)._hasRefresher)
            })
        }
        e.d(l, "a", function() {
            return x
        });
        var a = e(1)
          , i = e(51)
          , o = e(3)
          , r = e(6)
          , u = e(77)
          , s = e(32)
          , c = e(9)
          , d = e(20)
          , p = e(154)
          , h = e(78)
          , m = e(46)
          , _ = e(151)
          , f = e(36)
          , g = e(22)
          , v = e(45)
          , b = e(43)
          , y = e(21)
          , S = e(5)
          , P = e(10)
          , C = e(25)
          , w = e(163)
          , E = e(37)
          , O = e(40)
          , A = a.Y({
            encapsulation: 2,
            styles: [],
            data: {}
        })
          , x = a.W("page-inbox", w.a, function(n) {
            return a._23(0, [(n()(),
            a._0(0, 0, null, null, 1, "page-inbox", [], null, null, null, t, A)), a.Z(1, 49152, null, 0, w.a, [E.a, O.a], null, null)], null, null)
        }, {}, {}, [])
    },
    423: function(n, l, e) {
        "use strict";
        function t(n) {
            return i._23(0, [(n()(),
            i._0(0, 0, null, null, 22, "ion-item", [["class", "item item-block"], ["ion-item", ""]], null, null, null, o.b, o.a)), i.Z(1, 1097728, null, 3, r.a, [u.a, s.a, i.j, i.A, [2, c.a]], null, null), i._19(335544320, 2, {
                contentLabel: 0
            }), i._19(603979776, 3, {
                _buttons: 1
            }), i._19(603979776, 4, {
                _icons: 1
            }), i.Z(5, 16384, null, 0, d.a, [], null, null), (n()(),
            i._21(-1, 2, ["\n            "])), (n()(),
            i._0(7, 0, null, 0, 10, "ion-avatar", [["item-start", ""]], null, null, null, null, null)), i.Z(8, 16384, null, 0, p.a, [], null, null), (n()(),
            i._21(-1, null, ["\n                "])), (n()(),
            i._0(10, 0, null, null, 0, "img", [["alt", "continúe por"], ["src", "assets/images/trayecto/icono_ruta_adelante.png"]], [[8, "hidden", 0]], null, null, null, null)), (n()(),
            i._21(-1, null, ["\n                "])), (n()(),
            i._0(12, 0, null, null, 0, "img", [["alt", "gire a la izquierda en"], ["src", "assets/images/trayecto/icono_ruta_izquierda.png"]], [[8, "hidden", 0]], null, null, null, null)), (n()(),
            i._21(-1, null, ["\n                "])), (n()(),
            i._0(14, 0, null, null, 0, "img", [["alt", "gire a la derecha en"], ["src", "assets/images/trayecto/icono_ruta_derecha.png"]], [[8, "hidden", 0]], null, null, null, null)), (n()(),
            i._21(-1, null, ["\n                "])), (n()(),
            i._0(16, 0, null, null, 0, "img", [["alt", "gire 180 grados en"], ["src", "assets/images/trayecto/icono_ruta_atras.png"]], [[8, "hidden", 0]], null, null, null, null)), (n()(),
            i._21(-1, null, ["\n            "])), (n()(),
            i._21(-1, 2, ["\n            "])), (n()(),
            i._0(19, 0, null, 2, 2, "h2", [], null, null, null, null, null)), (n()(),
            i._21(20, null, ["", ""])), i._16(21, 1), (n()(),
            i._21(-1, 2, ["\n        "]))], null, function(n, l) {
                n(l, 10, 0, "SIGUE" != l.context.$implicit.giro);
                n(l, 12, 0, "IZQUIERDA" != l.context.$implicit.giro);
                n(l, 14, 0, "DERECHA" != l.context.$implicit.giro);
                n(l, 16, 0, "ATRAS" != l.context.$implicit.giro);
                n(l, 20, 0, i._22(l, 20, 0, n(l, 21, 0, i._12(l.parent, 0), l.context.$implicit.nombreVia)))
            })
        }
        function a(n) {
            return i._23(0, [i._14(0, h.a, [m.a]), i._19(402653184, 1, {
                ionicList: 0
            }), (n()(),
            i._21(-1, null, ["\n\n\n\n\n\n"])), (n()(),
            i._0(3, 0, null, null, 51, "ion-content", [], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, _.b, _.a)), i.Z(4, 4374528, null, 0, f.a, [s.a, g.a, v.a, i.j, i.A, b.a, y.a, i.v, [2, S.a], [2, P.a]], null, null), (n()(),
            i._21(-1, 1, ["\n    \n    "])), (n()(),
            i._21(-1, 1, ["\n    \n    "])), (n()(),
            i._0(7, 0, null, 0, 39, "div", [["ion-fixed", ""]], null, null, null, null, null)), (n()(),
            i._21(-1, null, ["\n    \n        "])), (n()(),
            i._0(9, 0, null, null, 12, "div", [["class", "tab"]], null, null, null, null, null)), (n()(),
            i._21(-1, null, ["\n            "])), (n()(),
            i._0(11, 0, null, null, 0, "div", [["class", "tab-shadow-side"]], null, null, null, null, null)), (n()(),
            i._21(-1, null, ["\n            "])), (n()(),
            i._0(13, 0, null, null, 3, "div", [["class", "tab-shadow"]], null, null, null, null, null)), (n()(),
            i._21(-1, null, ["\n                "])), (n()(),
            i._0(15, 0, null, null, 0, "div", [["class", "icon-up"]], null, null, null, null, null)), (n()(),
            i._21(-1, null, ["\n            "])), (n()(),
            i._21(-1, null, ["\n            "])), (n()(),
            i._0(18, 0, null, null, 0, "div", [["class", "tab-shadow-side"]], null, null, null, null, null)), (n()(),
            i._21(-1, null, ["\n            "])), (n()(),
            i._0(20, 0, null, null, 0, "div", [["class", "events"]], null, [[null, "tap"]], function(n, l, e) {
                var t = !0;
                if ("tap" === l) {
                    t = !1 !== n.component.swipeBusModal("click", e) && t
                }
                return t
            }, null, null)), (n()(),
            i._21(-1, null, ["\n        "])), (n()(),
            i._21(-1, null, ["\n\n        "])), (n()(),
            i._0(23, 0, null, null, 22, "ion-row", [["class", "modal-header row"]], null, null, null, null, null)), i.Z(24, 16384, null, 0, C.a, [], null, null), (n()(),
            i._21(-1, null, ["\n            "])), (n()(),
            i._0(26, 0, null, null, 18, "ion-col", [["class", "col-1 col"]], null, null, null, null, null)), i.Z(27, 16384, null, 0, w.a, [], null, null), (n()(),
            i._21(-1, null, ["\n                "])), (n()(),
            i._0(29, 0, null, null, 5, "div", [["class", "pull-right ver-detalles"]], null, null, null, null, null)), (n()(),
            i._21(-1, null, ["\n                    "])), (n()(),
            i._0(31, 0, null, null, 2, "button", [["ion-button", ""]], null, [[null, "tap"]], function(n, l, e) {
                var t = !0;
                if ("tap" === l) {
                    t = !1 !== n.component.swipeBusModal("click", e) && t
                }
                return t
            }, E.b, E.a)), i.Z(32, 1097728, null, 0, O.a, [[8, ""], s.a, i.j, i.A], null, null), (n()(),
            i._21(-1, 0, ["Detalle"])), (n()(),
            i._21(-1, null, ["\n                "])), (n()(),
            i._21(-1, null, ["\n                "])), (n()(),
            i._0(36, 0, null, null, 7, "ion-title", [], null, null, null, A.b, A.a)), i.Z(37, 49152, null, 0, x.a, [s.a, i.j, i.A, [2, I.a], [2, R.a]], null, null), (n()(),
            i._21(-1, 0, ["\n                    "])), (n()(),
            i._0(39, 0, null, 0, 0, "img", [["class", "icon-ir-caminando"], ["src", "assets/images/button/icon-a-pie.svg"]], null, null, null, null, null)), (n()(),
            i._21(-1, 0, ["\n                    "])), (n()(),
            i._0(41, 0, null, 0, 1, "span", [["class", "texto"]], null, null, null, null, null)), (n()(),
            i._21(42, null, ["Distancia: ", " metros"])), (n()(),
            i._21(-1, 0, ["\n                "])), (n()(),
            i._21(-1, null, ["\n            "])), (n()(),
            i._21(-1, null, ["\n        "])), (n()(),
            i._21(-1, null, ["        \n        \n    "])), (n()(),
            i._21(-1, 1, ["\n    \n    \n    \n    "])), (n()(),
            i._0(48, 0, [[1, 0], ["ionicList", 1]], 1, 5, "ion-list", [["no-lines", ""]], null, null, null, null, null)), i.Z(49, 16384, null, 0, D.a, [s.a, i.j, i.A, g.a, T.l, v.a], null, null), (n()(),
            i._21(-1, null, ["\n        "])), (n()(),
            i.V(16777216, null, null, 1, null, t)), i.Z(52, 802816, null, 0, k.j, [i.J, i.G, i.q], {
                ngForOf: [0, "ngForOf"]
            }, null), (n()(),
            i._21(-1, null, ["\n    "])), (n()(),
            i._21(-1, 1, ["\n"])), (n()(),
            i._21(-1, null, ["\n"]))], function(n, l) {
                n(l, 52, 0, l.component.camino)
            }, function(n, l) {
                var e = l.component;
                n(l, 3, 0, i._12(l, 4).statusbarPadding, i._12(l, 4)._hasRefresher);
                n(l, 42, 0, e.largo)
            })
        }
        e.d(l, "a", function() {
            return N
        });
        var i = e(1)
          , o = e(50)
          , r = e(19)
          , u = e(17)
          , s = e(3)
          , c = e(35)
          , d = e(41)
          , p = e(180)
          , h = e(76)
          , m = e(38)
          , _ = e(43)
          , f = e(21)
          , g = e(5)
          , v = e(10)
          , b = e(9)
          , y = e(25)
          , S = e(6)
          , P = e(20)
          , C = e(75)
          , w = e(74)
          , E = e(36)
          , O = e(22)
          , A = e(154)
          , x = e(78)
          , I = e(46)
          , R = e(32)
          , D = e(42)
          , T = e(11)
          , k = e(15)
          , M = e(164)
          , F = e(16)
          , L = e(37)
          , j = i.Y({
            encapsulation: 2,
            styles: [],
            data: {}
        })
          , N = i.W("page-ir-caminando-modal", M.a, function(n) {
            return i._23(0, [(n()(),
            i._0(0, 0, null, null, 1, "page-ir-caminando-modal", [], [[2, "swiping", null]], null, null, a, j)), i.Z(1, 4243456, null, 0, M.a, [i.j, i.A, v.a, P.a, F.a, g.a, L.a], null, null)], null, function(n, l) {
                n(l, 0, 0, i._12(l, 1).swiping)
            })
        }, {}, {}, [])
    },
    424: function(n, l, e) {
        "use strict";
        function t(n) {
            return M._23(0, [(n()(),
            M._0(0, 0, null, null, 4, "div", [["class", "pull-right"]], null, null, null, null, null)), (n()(),
            M._21(-1, null, ["\n                "])), (n()(),
            M._0(2, 0, null, null, 1, "span", [["class", "tiempo-total"]], null, null, null, null, null)), (n()(),
            M._21(3, null, ["", "'"])), (n()(),
            M._21(-1, null, ["\n            "]))], null, function(n, l) {
                n(l, 3, 0, l.component.pasadaConRecorrido.tiempoTotalConfianza.tiempoTotal)
            })
        }
        function a(n) {
            return M._23(0, [(n()(),
            M._0(0, 0, null, null, 14, "ion-col", [["class", "caminata col"], ["col-11", ""], ["offset-1", ""]], [[8, "hidden", 0]], null, null, null, null)), M.Z(1, 16384, null, 0, F.a, [], null, null), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._0(3, 0, null, null, 0, "img", [["alt", "continúe por"], ["src", "assets/images/trayecto/icono_ruta_adelante.png"]], [[8, "hidden", 0]], null, null, null, null)), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._0(5, 0, null, null, 0, "img", [["alt", "gire a la izquierda en"], ["src", "assets/images/trayecto/icono_ruta_izquierda.png"]], [[8, "hidden", 0]], null, null, null, null)), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._0(7, 0, null, null, 0, "img", [["alt", "gire a la derecha en"], ["src", "assets/images/trayecto/icono_ruta_derecha.png"]], [[8, "hidden", 0]], null, null, null, null)), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._0(9, 0, null, null, 0, "img", [["alt", "gire 180 grados en"], ["src", "assets/images/trayecto/icono_ruta_atras.png"]], [[8, "hidden", 0]], null, null, null, null)), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._0(11, 0, null, null, 2, "span", [["class", "text-container"]], null, null, null, null, null)), (n()(),
            M._21(12, null, ["", ""])), M._16(13, 1), (n()(),
            M._21(-1, null, ["\n        "]))], null, function(n, l) {
                n(l, 0, 0, !l.component.ver_caminar_detalle_1);
                n(l, 3, 0, "SIGUE" != l.context.$implicit.giro);
                n(l, 5, 0, "IZQUIERDA" != l.context.$implicit.giro);
                n(l, 7, 0, "DERECHA" != l.context.$implicit.giro);
                n(l, 9, 0, "ATRAS" != l.context.$implicit.giro);
                n(l, 12, 0, M._22(l, 12, 0, n(l, 13, 0, M._12(l.parent, 0), l.context.$implicit.nombreVia)))
            })
        }
        function i(n) {
            return M._23(0, [(n()(),
            M._0(0, 0, null, null, 1, "span", [], null, null, null, null, null)), (n()(),
            M._21(-1, null, ["s"]))], null, null)
        }
        function o(n) {
            return M._23(0, [(n()(),
            M._0(0, 0, null, null, 1, "span", [], null, null, null, null, null)), (n()(),
            M._21(-1, null, ["s"]))], null, null)
        }
        function r(n) {
            return M._23(0, [(n()(),
            M._0(0, 0, null, null, 17, "ion-col", [["class", "linea-entera cursor-pointer col"], ["col-11", ""], ["offset-1", ""]], null, [[null, "click"]], function(n, l, e) {
                var t = !0
                  , a = n.component;
                if ("click" === l) {
                    t = !1 != (a.invertido_1 = !a.invertido_1) && t
                }
                return t
            }, null, null)), M.Z(1, 16384, null, 0, F.a, [], null, null), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._0(3, 0, null, null, 7, "span", [["class", "icon-container arrow-down color-parada"]], null, null, null, null, null)), (n()(),
            M._21(-1, null, ["\n                "])), (n()(),
            M._0(5, 0, null, null, 1, "ion-icon", [["class", "vertical-middle"], ["name", "ios-arrow-down"], ["role", "img"]], [[8, "hidden", 0], [2, "hide", null]], null, null, null, null)), M.Z(6, 147456, null, 0, L.a, [j.a, M.j, M.A], {
                name: [0, "name"]
            }, null), (n()(),
            M._21(-1, null, ["\n                "])), (n()(),
            M._0(8, 0, null, null, 1, "ion-icon", [["class", "vertical-middle"], ["name", "ios-arrow-up"], ["role", "img"]], [[8, "hidden", 0], [2, "hide", null]], null, null, null, null)), M.Z(9, 147456, null, 0, L.a, [j.a, M.j, M.A], {
                name: [0, "name"]
            }, null), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._0(12, 0, null, null, 4, "span", [["class", "text-container text-ellipsis color-parada"]], null, null, null, null, null)), (n()(),
            M._21(13, null, ["\n                ", " parada"])), (n()(),
            M.V(16777216, null, null, 1, null, o)), M.Z(15, 16384, null, 0, N.k, [M.J, M.G], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._21(-1, null, ["\n        "]))], function(n, l) {
                n(l, 6, 0, "ios-arrow-down");
                n(l, 9, 0, "ios-arrow-up");
                n(l, 15, 0, l.parent.context.$implicit.length > 1)
            }, function(n, l) {
                var e = l.component;
                n(l, 5, 0, e.invertido_1, M._12(l, 6)._hidden);
                n(l, 8, 0, !e.invertido_1, M._12(l, 9)._hidden);
                n(l, 13, 0, l.parent.context.$implicit.length)
            })
        }
        function u(n) {
            return M._23(0, [(n()(),
            M._0(0, 0, null, null, 7, "ion-col", [["class", "linea-entera linea-vertical col"], ["col-11", ""], ["offset-1", ""]], [[8, "hidden", 0]], null, null, null, null)), M.Z(1, 16384, null, 0, F.a, [], null, null), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._0(3, 0, null, null, 3, "span", [["class", "text-container text-ellipsis indentado"]], null, [[null, "click"]], function(n, l, e) {
                var t = !0
                  , a = n.component;
                if ("click" === l) {
                    t = !1 != (a.invertido_1 = !a.invertido_1) && t
                }
                return t
            }, null, null)), (n()(),
            M._21(4, null, ["\n                ", " y ", "\n            "])), M._16(5, 1), M._16(6, 1), (n()(),
            M._21(-1, null, ["\n        "]))], null, function(n, l) {
                n(l, 0, 0, !l.component.invertido_1);
                n(l, 4, 0, M._22(l, 4, 0, n(l, 5, 0, M._12(l.parent.parent, 0), l.context.$implicit.properties.calle)), M._22(l, 4, 1, n(l, 6, 0, M._12(l.parent.parent, 0), l.context.$implicit.properties.esquina)))
            })
        }
        function s(n) {
            return M._23(0, [(n()(),
            M._0(0, 0, null, null, 56, "ion-row", [["class", "viaje-en-bus line-container row"]], null, null, null, null, null)), M.Z(1, 16384, null, 0, V.a, [], null, null), (n()(),
            M._21(-1, null, ["\n        "])), (n()(),
            M._0(3, 0, null, null, 19, "ion-col", [["class", "linea-sub-titulo col"], ["col-12", ""]], null, null, null, null, null)), M.Z(4, 16384, null, 0, F.a, [], null, null), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._0(6, 0, null, null, 3, "span", [["class", "icon-container icon-reloj"]], null, null, null, null, null)), (n()(),
            M._21(-1, null, ["\n                "])), (n()(),
            M._0(8, 0, null, null, 0, "img", [["src", "assets/images/trayecto/icono_ViajarTrayecto.png"]], null, null, null, null, null)), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._0(11, 0, null, null, 4, "span", [["class", "text-container caminar-text"]], null, null, null, null, null)), (n()(),
            M._21(12, null, ["\n                Viajar ", " parada"])), (n()(),
            M.V(16777216, null, null, 1, null, i)), M.Z(14, 16384, null, 0, N.k, [M.J, M.G], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._0(17, 0, null, null, 4, "div", [["class", "data-right-container pull-right"]], [[8, "hidden", 0]], null, null, null, null)), (n()(),
            M._21(-1, null, ["\n                "])), (n()(),
            M._0(19, 0, null, null, 1, "span", [["class", "caminar-tiempo data-right"]], null, null, null, null, null)), (n()(),
            M._21(20, null, ["", "'"])), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._21(-1, null, ["\n        "])), (n()(),
            M._21(-1, null, ["\n        "])), (n()(),
            M._0(24, 0, null, null, 11, "ion-col", [["class", "linea-sup col"], ["col-11", ""], ["offset-1", ""]], null, null, null, null, null)), M.Z(25, 16384, null, 0, F.a, [], null, null), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._0(27, 0, null, null, 3, "span", [["class", "icon-container icon-bus"]], null, null, null, null, null)), (n()(),
            M._21(-1, null, ["\n                "])), (n()(),
            M._0(29, 0, null, null, 0, "img", [["src", "assets/images/trayecto/icono_ParadaTrayecto.png"]], null, null, null, null, null)), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._0(32, 0, null, null, 2, "span", [["class", "text-container caminar-text text-ellipsis"]], null, null, null, null, null)), (n()(),
            M._21(33, null, ["\n                ", "\n            "])), M._16(34, 1), (n()(),
            M._21(-1, null, ["\n        "])), (n()(),
            M._21(-1, null, ["\n        "])), (n()(),
            M.V(16777216, null, null, 1, null, r)), M.Z(38, 16384, null, 0, N.k, [M.J, M.G], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            M._21(-1, null, ["\n        "])), (n()(),
            M.V(16777216, null, null, 2, null, u)), M.Z(41, 802816, null, 0, N.j, [M.J, M.G, M.q], {
                ngForOf: [0, "ngForOf"]
            }, null), M._16(42, 1), (n()(),
            M._21(-1, null, ["\n        "])), (n()(),
            M._0(44, 0, null, null, 11, "ion-col", [["class", "linea-inf col"], ["col-11", ""], ["offset-1", ""]], null, null, null, null, null)), M.Z(45, 16384, null, 0, F.a, [], null, null), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._0(47, 0, null, null, 3, "span", [["class", "icon-container icon-bus"]], null, null, null, null, null)), (n()(),
            M._21(-1, null, ["\n                "])), (n()(),
            M._0(49, 0, null, null, 0, "img", [["src", "assets/images/trayecto/icono_ParadaTrayecto.png"]], null, null, null, null, null)), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._0(52, 0, null, null, 2, "span", [["class", "text-container caminar-text text-ellipsis"]], null, null, null, null, null)), (n()(),
            M._21(53, null, ["\n                ", "\n            "])), M._16(54, 1), (n()(),
            M._21(-1, null, ["\n        "])), (n()(),
            M._21(-1, null, ["\n\n    "]))], function(n, l) {
                n(l, 14, 0, l.context.$implicit.length + 1 > 1);
                n(l, 38, 0, l.context.$implicit.length > 0);
                n(l, 41, 0, M._22(l, 41, 0, n(l, 42, 0, M._12(l.parent, 1), l.context.$implicit)))
            }, function(n, l) {
                var e = l.component;
                n(l, 12, 0, l.context.$implicit.length + 1);
                n(l, 17, 0, !e.tiempoTotalViaje1);
                n(l, 20, 0, e.tiempoTotalViaje1);
                n(l, 33, 0, M._22(l, 33, 0, n(l, 34, 0, M._12(l.parent, 0), e.pasadaConRecorrido.recorrido.ruta.directo.paradaOrigen.descripcion)));
                n(l, 53, 0, M._22(l, 53, 0, n(l, 54, 0, M._12(l.parent, 0), e.pasadaConRecorrido.recorrido.ruta.directo.paradaDestino.descripcion)))
            })
        }
        function c(n) {
            return M._23(0, [(n()(),
            M._21(-1, null, ["\n        "])), (n()(),
            M._0(1, 0, null, null, 6, "ion-row", [["class", "line-container row"]], null, null, null, null, null)), M.Z(2, 16384, null, 0, V.a, [], null, null), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._0(4, 0, null, null, 2, "ion-col", [["class", "linea-sub-titulo col"], ["col-12", ""]], null, null, null, null, null)), M.Z(5, 16384, null, 0, F.a, [], null, null), (n()(),
            M._21(-1, null, ["\n                Cargando paradas...\n            "])), (n()(),
            M._21(-1, null, ["\n        "])), (n()(),
            M._21(-1, null, ["\n    "]))], null, null)
        }
        function d(n) {
            return M._23(0, [(n()(),
            M._0(0, 0, null, null, 1, "span", [["class", "text-container caminar-text"]], null, null, null, null, null)), (n()(),
            M._21(-1, null, ["\n                 Caminar hasta el destino\n            "]))], null, null)
        }
        function p(n) {
            return M._23(0, [(n()(),
            M._0(0, 0, null, null, 1, "span", [["class", "text-container caminar-text"]], null, null, null, null, null)), (n()(),
            M._21(-1, null, ["\n                 Caminar a la parada\n            "]))], null, null)
        }
        function h(n) {
            return M._23(0, [(n()(),
            M._0(0, 0, null, null, 1, "span", [["class", "text-container caminar-text"]], null, null, null, null, null)), (n()(),
            M._21(-1, null, ["\n                 Esperar en la misma parada que debe bajarse\n            "]))], null, null)
        }
        function m(n) {
            return M._23(0, [(n()(),
            M._0(0, 0, null, null, 11, "ion-col", [["class", "ver-caminata col"], ["col-11", ""], ["offset-1", ""]], null, [[null, "click"]], function(n, l, e) {
                var t = !0
                  , a = n.component;
                if ("click" === l) {
                    t = !1 != (a.ver_caminar_detalle_2 = !a.ver_caminar_detalle_2) && t
                }
                return t
            }, null, null)), M.Z(1, 16384, null, 0, F.a, [], null, null), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._0(3, 0, null, null, 1, "ion-icon", [["class", "vertical-middle"], ["name", "ios-arrow-down"], ["role", "img"]], [[8, "hidden", 0], [2, "hide", null]], null, null, null, null)), M.Z(4, 147456, null, 0, L.a, [j.a, M.j, M.A], {
                name: [0, "name"]
            }, null), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._0(6, 0, null, null, 1, "ion-icon", [["class", "vertical-middle"], ["name", "ios-arrow-up"], ["role", "img"]], [[8, "hidden", 0], [2, "hide", null]], null, null, null, null)), M.Z(7, 147456, null, 0, L.a, [j.a, M.j, M.A], {
                name: [0, "name"]
            }, null), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._0(9, 0, null, null, 1, "span", [["class", "text-container vertical-middle"]], null, null, null, null, null)), (n()(),
            M._21(-1, null, ["Detalles"])), (n()(),
            M._21(-1, null, ["\n        "]))], function(n, l) {
                n(l, 4, 0, "ios-arrow-down");
                n(l, 7, 0, "ios-arrow-up")
            }, function(n, l) {
                var e = l.component;
                n(l, 3, 0, e.ver_caminar_detalle_2, M._12(l, 4)._hidden);
                n(l, 6, 0, !e.ver_caminar_detalle_2, M._12(l, 7)._hidden)
            })
        }
        function _(n) {
            return M._23(0, [(n()(),
            M._0(0, 0, null, null, 14, "ion-col", [["class", "caminata col"], ["col-11", ""], ["offset-1", ""]], [[8, "hidden", 0]], null, null, null, null)), M.Z(1, 16384, null, 0, F.a, [], null, null), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._0(3, 0, null, null, 0, "img", [["alt", "continúe por"], ["src", "assets/images/trayecto/icono_ruta_adelante.png"]], [[8, "hidden", 0]], null, null, null, null)), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._0(5, 0, null, null, 0, "img", [["alt", "gire a la izquierda en"], ["src", "assets/images/trayecto/icono_ruta_izquierda.png"]], [[8, "hidden", 0]], null, null, null, null)), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._0(7, 0, null, null, 0, "img", [["alt", "gire a la derecha en"], ["src", "assets/images/trayecto/icono_ruta_derecha.png"]], [[8, "hidden", 0]], null, null, null, null)), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._0(9, 0, null, null, 0, "img", [["alt", "gire 180 grados en"], ["src", "assets/images/trayecto/icono_ruta_atras.png"]], [[8, "hidden", 0]], null, null, null, null)), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._0(11, 0, null, null, 2, "span", [["class", "text-container"]], null, null, null, null, null)), (n()(),
            M._21(12, null, ["", ""])), M._16(13, 1), (n()(),
            M._21(-1, null, ["\n        "]))], null, function(n, l) {
                n(l, 0, 0, !l.component.ver_caminar_detalle_2);
                n(l, 3, 0, "SIGUE" != l.context.$implicit.giro);
                n(l, 5, 0, "IZQUIERDA" != l.context.$implicit.giro);
                n(l, 7, 0, "DERECHA" != l.context.$implicit.giro);
                n(l, 9, 0, "ATRAS" != l.context.$implicit.giro);
                n(l, 12, 0, M._22(l, 12, 0, n(l, 13, 0, M._12(l.parent, 0), l.context.$implicit.nombreVia)))
            })
        }
        function f(n) {
            return M._23(0, [(n()(),
            M._0(0, 0, null, null, 17, "ion-col", [["class", "col"], ["col-11", ""], ["offset-1", ""]], null, null, null, null, null)), M.Z(1, 16384, null, 0, F.a, [], null, null), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._0(3, 0, null, null, 3, "span", [["class", "icon-container icon-caminar"]], null, null, null, null, null)), (n()(),
            M._21(-1, null, ["\n                "])), (n()(),
            M._0(5, 0, null, null, 0, "img", [["src", "assets/images/icon/icon-destino.svg"]], null, null, null, null, null)), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._0(8, 0, null, null, 2, "span", [["class", "text-container caminar-text text-ellipsis"]], null, null, null, null, null)), (n()(),
            M._21(9, null, ["\n                ", "\n            "])), M._16(10, 1), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._0(12, 0, null, null, 4, "div", [["class", "data-right-container pull-right"]], null, null, null, null, null)), (n()(),
            M._21(-1, null, ["\n                "])), (n()(),
            M._0(14, 0, null, null, 1, "span", [["class", "caminar-metros data-right"]], null, null, null, null, null)), (n()(),
            M._21(15, null, ["", " m"])), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._21(-1, null, ["\n        "]))], null, function(n, l) {
                var e = l.component;
                n(l, 9, 0, M._22(l, 9, 0, n(l, 10, 0, M._12(l.parent, 0), e.destino)));
                n(l, 15, 0, e.pasadaConRecorrido.recorrido.ruta.directo.caminarLlegada.largo)
            })
        }
        function g(n) {
            return M._23(0, [(n()(),
            M._0(0, 0, null, null, 11, "ion-col", [["class", "ver-caminata col"], ["col-11", ""], ["offset-1", ""]], null, [[null, "click"]], function(n, l, e) {
                var t = !0
                  , a = n.component;
                if ("click" === l) {
                    t = !1 != (a.ver_caminar_detalle_3 = !a.ver_caminar_detalle_3) && t
                }
                return t
            }, null, null)), M.Z(1, 16384, null, 0, F.a, [], null, null), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._0(3, 0, null, null, 1, "ion-icon", [["class", "vertical-middle"], ["name", "ios-arrow-down"], ["role", "img"]], [[8, "hidden", 0], [2, "hide", null]], null, null, null, null)), M.Z(4, 147456, null, 0, L.a, [j.a, M.j, M.A], {
                name: [0, "name"]
            }, null), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._0(6, 0, null, null, 1, "ion-icon", [["class", "vertical-middle"], ["name", "ios-arrow-up"], ["role", "img"]], [[8, "hidden", 0], [2, "hide", null]], null, null, null, null)), M.Z(7, 147456, null, 0, L.a, [j.a, M.j, M.A], {
                name: [0, "name"]
            }, null), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._0(9, 0, null, null, 1, "span", [["class", "text-container vertical-middle"]], null, null, null, null, null)), (n()(),
            M._21(-1, null, ["Detalles"])), (n()(),
            M._21(-1, null, ["\n        "]))], function(n, l) {
                n(l, 4, 0, "ios-arrow-down");
                n(l, 7, 0, "ios-arrow-up")
            }, function(n, l) {
                var e = l.component;
                n(l, 3, 0, e.ver_caminar_detalle_3, M._12(l, 4)._hidden);
                n(l, 6, 0, !e.ver_caminar_detalle_3, M._12(l, 7)._hidden)
            })
        }
        function v(n) {
            return M._23(0, [(n()(),
            M._0(0, 0, null, null, 14, "ion-col", [["class", "caminata col"], ["col-11", ""], ["offset-1", ""]], [[8, "hidden", 0]], null, null, null, null)), M.Z(1, 16384, null, 0, F.a, [], null, null), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._0(3, 0, null, null, 0, "img", [["alt", "continúe por"], ["src", "assets/images/trayecto/icono_ruta_adelante.png"]], [[8, "hidden", 0]], null, null, null, null)), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._0(5, 0, null, null, 0, "img", [["alt", "gire a la izquierda en"], ["src", "assets/images/trayecto/icono_ruta_izquierda.png"]], [[8, "hidden", 0]], null, null, null, null)), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._0(7, 0, null, null, 0, "img", [["alt", "gire a la derecha en"], ["src", "assets/images/trayecto/icono_ruta_derecha.png"]], [[8, "hidden", 0]], null, null, null, null)), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._0(9, 0, null, null, 0, "img", [["alt", "gire 180 grados en"], ["src", "assets/images/trayecto/icono_ruta_atras.png"]], [[8, "hidden", 0]], null, null, null, null)), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._0(11, 0, null, null, 2, "span", [["class", "text-container"]], null, null, null, null, null)), (n()(),
            M._21(12, null, ["", ""])), M._16(13, 1), (n()(),
            M._21(-1, null, ["\n        "]))], null, function(n, l) {
                n(l, 0, 0, !l.component.ver_caminar_detalle_3);
                n(l, 3, 0, "SIGUE" != l.context.$implicit.giro);
                n(l, 5, 0, "IZQUIERDA" != l.context.$implicit.giro);
                n(l, 7, 0, "DERECHA" != l.context.$implicit.giro);
                n(l, 9, 0, "ATRAS" != l.context.$implicit.giro);
                n(l, 12, 0, M._22(l, 12, 0, n(l, 13, 0, M._12(l.parent, 0), l.context.$implicit.nombreVia)))
            })
        }
        function b(n) {
            return M._23(0, [(n()(),
            M._0(0, 0, null, null, 4, "div", [["class", "data-right-container pull-right"]], null, null, null, null, null)), (n()(),
            M._21(-1, null, ["\n                "])), (n()(),
            M._0(2, 0, null, null, 1, "span", [["class", "caminar-metros data-right"]], null, null, null, null, null)), (n()(),
            M._21(3, null, ["", " m"])), (n()(),
            M._21(-1, null, ["\n            "]))], null, function(n, l) {
                n(l, 3, 0, l.component.pasadaConRecorrido.recorrido.ruta.trasbordo.caminarTrasbordo.largo)
            })
        }
        function y(n) {
            return M._23(0, [(n()(),
            M._0(0, 0, null, null, 14, "ion-col", [["class", "col"], ["col-11", ""], ["offset-1", ""]], null, null, null, null, null)), M.Z(1, 16384, null, 0, F.a, [], null, null), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._0(3, 0, null, null, 3, "span", [["class", "icon-container icon-caminar"]], null, null, null, null, null)), (n()(),
            M._21(-1, null, ["\n                "])), (n()(),
            M._0(5, 0, null, null, 0, "img", [["src", "assets/images/trayecto/icono_ParadaTrayecto.png"]], null, null, null, null, null)), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._0(8, 0, null, null, 2, "span", [["class", "text-container caminar-text text-ellipsis"]], null, null, null, null, null)), (n()(),
            M._21(9, null, ["\n                ", "\n            "])), M._16(10, 1), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M.V(16777216, null, null, 1, null, b)), M.Z(13, 16384, null, 0, N.k, [M.J, M.G], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            M._21(-1, null, ["\n        "]))], function(n, l) {
                var e = l.component;
                n(l, 13, 0, e.pasadaConRecorrido.recorrido.ruta.trasbordo && e.pasadaConRecorrido.recorrido.ruta.trasbordo.caminarTrasbordo.largo > 0)
            }, function(n, l) {
                var e = l.component;
                n(l, 9, 0, M._22(l, 9, 0, n(l, 10, 0, M._12(l.parent, 0), e.pasadaConRecorrido.recorrido.ruta.trasbordo.paradaOrigen.descripcion)))
            })
        }
        function S(n) {
            return M._23(0, [(n()(),
            M._0(0, 0, null, null, 11, "ion-col", [["class", "col"], ["col-11", ""], ["offset-1", ""]], null, null, null, null, null)), M.Z(1, 16384, null, 0, F.a, [], null, null), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._0(3, 0, null, null, 3, "span", [["class", "icon-container icon-bus"]], null, null, null, null, null)), (n()(),
            M._21(-1, null, ["\n                "])), (n()(),
            M._0(5, 0, null, null, 0, "img", [["src", "assets/images/trayecto/icono_BusTrayecto.png"]], null, null, null, null, null)), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._0(8, 0, null, null, 1, "span", [["class", "text-container caminar-text text-ellipsis"]], null, null, null, null, null)), (n()(),
            M._21(9, null, ["\n                ", " - ", "\n            "])), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._21(-1, null, ["\n        "]))], null, function(n, l) {
                n(l, 9, 0, l.context.$implicit.linea, l.context.$implicit.destino)
            })
        }
        function P(n) {
            return M._23(0, [(n()(),
            M._0(0, 0, null, null, 11, "ion-col", [["class", "col"], ["col-11", ""], ["offset-1", ""]], null, null, null, null, null)), M.Z(1, 16384, null, 0, F.a, [], null, null), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._0(3, 0, null, null, 3, "span", [["class", "icon-container icon-bus"]], null, null, null, null, null)), (n()(),
            M._21(-1, null, ["\n                "])), (n()(),
            M._0(5, 0, null, null, 0, "img", [["src", "assets/images/trayecto/icono_BusTrayecto.png"]], null, null, null, null, null)), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._0(8, 0, null, null, 1, "span", [["class", "text-container caminar-text text-ellipsis"]], null, null, null, null, null)), (n()(),
            M._21(9, null, ["\n                ", " - ", "\n            "])), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._21(-1, null, ["\n        "]))], null, function(n, l) {
                n(l, 9, 0, l.context.$implicit.linea, l.context.$implicit.destino)
            })
        }
        function C(n) {
            return M._23(0, [(n()(),
            M._0(0, 0, null, null, 20, "ion-row", [["class", "line-container row"]], null, null, null, null, null)), M.Z(1, 16384, null, 0, V.a, [], null, null), (n()(),
            M._21(-1, null, ["\n        "])), (n()(),
            M._0(3, 0, null, null, 10, "ion-col", [["class", "linea-sub-titulo col"], ["col-12", ""]], null, null, null, null, null)), M.Z(4, 16384, null, 0, F.a, [], null, null), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._0(6, 0, null, null, 3, "span", [["class", "icon-container icon-reloj"]], null, null, null, null, null)), (n()(),
            M._21(-1, null, ["\n                "])), (n()(),
            M._0(8, 0, null, null, 0, "img", [["src", "assets/images/trayecto/icono_EsperarTrayecto.png"]], null, null, null, null, null)), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._0(11, 0, null, null, 1, "span", [["class", "text-container caminar-text"]], null, null, null, null, null)), (n()(),
            M._21(-1, null, ["\n                Esperar el\n            "])), (n()(),
            M._21(-1, null, ["\n        "])), (n()(),
            M._21(-1, null, ["\n\n        "])), (n()(),
            M.V(16777216, null, null, 1, null, S)), M.Z(16, 802816, null, 0, N.j, [M.J, M.G, M.q], {
                ngForOf: [0, "ngForOf"]
            }, null), (n()(),
            M._21(-1, null, ["\n\n        "])), (n()(),
            M.V(16777216, null, null, 1, null, P)), M.Z(19, 802816, null, 0, N.j, [M.J, M.G, M.q], {
                ngForOf: [0, "ngForOf"]
            }, null), (n()(),
            M._21(-1, null, ["\n\n    "]))], function(n, l) {
                var e = l.component;
                n(l, 16, 0, e.pasadaConRecorrido.recorrido.ruta.trasbordo.maximales);
                n(l, 19, 0, e.pasadaConRecorrido.recorrido.ruta.trasbordo.noMaximales)
            }, null)
        }
        function w(n) {
            return M._23(0, [(n()(),
            M._0(0, 0, null, null, 1, "span", [], null, null, null, null, null)), (n()(),
            M._21(-1, null, ["s"]))], null, null)
        }
        function E(n) {
            return M._23(0, [(n()(),
            M._0(0, 0, null, null, 1, "span", [], null, null, null, null, null)), (n()(),
            M._21(-1, null, ["s"]))], null, null)
        }
        function O(n) {
            return M._23(0, [(n()(),
            M._0(0, 0, null, null, 17, "ion-col", [["class", "linea-entera cursor-pointer col"], ["col-11", ""], ["offset-1", ""]], null, [[null, "click"]], function(n, l, e) {
                var t = !0
                  , a = n.component;
                if ("click" === l) {
                    t = !1 != (a.invertido_2 = !a.invertido_2) && t
                }
                return t
            }, null, null)), M.Z(1, 16384, null, 0, F.a, [], null, null), (n()(),
            M._21(-1, null, ["\n                "])), (n()(),
            M._0(3, 0, null, null, 7, "span", [["class", "icon-container arrow-down color-parada"]], null, null, null, null, null)), (n()(),
            M._21(-1, null, ["\n                    "])), (n()(),
            M._0(5, 0, null, null, 1, "ion-icon", [["class", "vertical-middle"], ["name", "ios-arrow-down"], ["role", "img"]], [[8, "hidden", 0], [2, "hide", null]], null, null, null, null)), M.Z(6, 147456, null, 0, L.a, [j.a, M.j, M.A], {
                name: [0, "name"]
            }, null), (n()(),
            M._21(-1, null, ["\n                    "])), (n()(),
            M._0(8, 0, null, null, 1, "ion-icon", [["class", "vertical-middle"], ["name", "ios-arrow-up"], ["role", "img"]], [[8, "hidden", 0], [2, "hide", null]], null, null, null, null)), M.Z(9, 147456, null, 0, L.a, [j.a, M.j, M.A], {
                name: [0, "name"]
            }, null), (n()(),
            M._21(-1, null, ["\n                "])), (n()(),
            M._21(-1, null, ["\n                "])), (n()(),
            M._0(12, 0, null, null, 4, "span", [["class", "text-container text-ellipsis color-parada"]], null, null, null, null, null)), (n()(),
            M._21(13, null, ["\n                    ", " parada"])), (n()(),
            M.V(16777216, null, null, 1, null, E)), M.Z(15, 16384, null, 0, N.k, [M.J, M.G], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            M._21(-1, null, ["\n                "])), (n()(),
            M._21(-1, null, ["\n            "]))], function(n, l) {
                n(l, 6, 0, "ios-arrow-down");
                n(l, 9, 0, "ios-arrow-up");
                n(l, 15, 0, l.parent.context.$implicit.length > 1)
            }, function(n, l) {
                var e = l.component;
                n(l, 5, 0, e.invertido_2, M._12(l, 6)._hidden);
                n(l, 8, 0, !e.invertido_2, M._12(l, 9)._hidden);
                n(l, 13, 0, l.parent.context.$implicit.length)
            })
        }
        function A(n) {
            return M._23(0, [(n()(),
            M._0(0, 0, null, null, 7, "ion-col", [["class", "linea-entera linea-vertical col"], ["col-11", ""], ["offset-1", ""]], [[8, "hidden", 0]], null, null, null, null)), M.Z(1, 16384, null, 0, F.a, [], null, null), (n()(),
            M._21(-1, null, ["\n                "])), (n()(),
            M._0(3, 0, null, null, 3, "span", [["class", "text-container text-ellipsis indentado"]], null, null, null, null, null)), (n()(),
            M._21(4, null, ["\n                    ", " y ", "\n                "])), M._16(5, 1), M._16(6, 1), (n()(),
            M._21(-1, null, ["\n            "]))], null, function(n, l) {
                n(l, 0, 0, !l.component.invertido_2);
                n(l, 4, 0, M._22(l, 4, 0, n(l, 5, 0, M._12(l.parent.parent.parent, 0), l.context.$implicit.properties.calle)), M._22(l, 4, 1, n(l, 6, 0, M._12(l.parent.parent.parent, 0), l.context.$implicit.properties.esquina)))
            })
        }
        function x(n) {
            return M._23(0, [(n()(),
            M._0(0, 0, null, null, 56, "ion-row", [["class", "line-container row"]], null, null, null, null, null)), M.Z(1, 16384, null, 0, V.a, [], null, null), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._0(3, 0, null, null, 19, "ion-col", [["class", "linea-sub-titulo col"], ["col-12", ""]], null, null, null, null, null)), M.Z(4, 16384, null, 0, F.a, [], null, null), (n()(),
            M._21(-1, null, ["\n                "])), (n()(),
            M._0(6, 0, null, null, 3, "span", [["class", "icon-container icon-reloj"]], null, null, null, null, null)), (n()(),
            M._21(-1, null, ["\n                    "])), (n()(),
            M._0(8, 0, null, null, 0, "img", [["src", "assets/images/trayecto/icono_ViajarTrayecto.png"]], null, null, null, null, null)), (n()(),
            M._21(-1, null, ["\n                "])), (n()(),
            M._21(-1, null, ["\n                "])), (n()(),
            M._0(11, 0, null, null, 4, "span", [["class", "text-container caminar-text"]], null, null, null, null, null)), (n()(),
            M._21(12, null, ["\n                    Viajar ", " parada"])), (n()(),
            M.V(16777216, null, null, 1, null, w)), M.Z(14, 16384, null, 0, N.k, [M.J, M.G], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            M._21(-1, null, ["\n                "])), (n()(),
            M._21(-1, null, ["\n                "])), (n()(),
            M._0(17, 0, null, null, 4, "div", [["class", "data-right-container pull-right"]], [[8, "hidden", 0]], null, null, null, null)), (n()(),
            M._21(-1, null, ["\n                    "])), (n()(),
            M._0(19, 0, null, null, 1, "span", [["class", "caminar-tiempo data-right"]], null, null, null, null, null)), (n()(),
            M._21(20, null, ["", "'"])), (n()(),
            M._21(-1, null, ["\n                "])), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._21(-1, null, ["\n\n            "])), (n()(),
            M._0(24, 0, null, null, 11, "ion-col", [["class", "linea-sup col"], ["col-11", ""], ["offset-1", ""]], null, null, null, null, null)), M.Z(25, 16384, null, 0, F.a, [], null, null), (n()(),
            M._21(-1, null, ["\n                "])), (n()(),
            M._0(27, 0, null, null, 3, "span", [["class", "icon-container icon-bus"]], null, null, null, null, null)), (n()(),
            M._21(-1, null, ["\n                    "])), (n()(),
            M._0(29, 0, null, null, 0, "img", [["src", "assets/images/trayecto/icono_ParadaTrayecto.png"]], null, null, null, null, null)), (n()(),
            M._21(-1, null, ["\n                "])), (n()(),
            M._21(-1, null, ["\n                "])), (n()(),
            M._0(32, 0, null, null, 2, "span", [["class", "text-container caminar-text text-ellipsis"]], null, null, null, null, null)), (n()(),
            M._21(33, null, ["\n                    ", "\n                "])), M._16(34, 1), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M.V(16777216, null, null, 1, null, O)), M.Z(38, 16384, null, 0, N.k, [M.J, M.G], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M.V(16777216, null, null, 2, null, A)), M.Z(41, 802816, null, 0, N.j, [M.J, M.G, M.q], {
                ngForOf: [0, "ngForOf"]
            }, null), M._16(42, 1), (n()(),
            M._21(-1, null, ["\n\n            "])), (n()(),
            M._0(44, 0, null, null, 11, "ion-col", [["class", "linea-inf col"], ["col-11", ""], ["offset-1", ""]], null, null, null, null, null)), M.Z(45, 16384, null, 0, F.a, [], null, null), (n()(),
            M._21(-1, null, ["\n                "])), (n()(),
            M._0(47, 0, null, null, 3, "span", [["class", "icon-container icon-bus"]], null, null, null, null, null)), (n()(),
            M._21(-1, null, ["\n                    "])), (n()(),
            M._0(49, 0, null, null, 0, "img", [["src", "assets/images/trayecto/icono_ParadaTrayecto.png"]], null, null, null, null, null)), (n()(),
            M._21(-1, null, ["\n                "])), (n()(),
            M._21(-1, null, ["\n                "])), (n()(),
            M._0(52, 0, null, null, 2, "span", [["class", "text-container caminar-text text-ellipsis"]], null, null, null, null, null)), (n()(),
            M._21(53, null, ["\n                    ", "\n                "])), M._16(54, 1), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._21(-1, null, ["\n\n        "]))], function(n, l) {
                n(l, 14, 0, l.context.$implicit.length + 1 > 1);
                n(l, 38, 0, l.context.$implicit.length > 0);
                n(l, 41, 0, M._22(l, 41, 0, n(l, 42, 0, M._12(l.parent.parent, 1), l.context.$implicit)))
            }, function(n, l) {
                var e = l.component;
                n(l, 12, 0, l.context.$implicit.length + 1);
                n(l, 17, 0, !e.tiempoTotalViaje2);
                n(l, 20, 0, e.tiempoTotalViaje2);
                n(l, 33, 0, M._22(l, 33, 0, n(l, 34, 0, M._12(l.parent.parent, 0), e.pasadaConRecorrido.recorrido.ruta.trasbordo.paradaOrigen.descripcion)));
                n(l, 53, 0, M._22(l, 53, 0, n(l, 54, 0, M._12(l.parent.parent, 0), e.pasadaConRecorrido.recorrido.ruta.trasbordo.paradaDestino.descripcion)))
            })
        }
        function I(n) {
            return M._23(0, [(n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._0(1, 0, null, null, 6, "ion-row", [["class", "line-container row"]], null, null, null, null, null)), M.Z(2, 16384, null, 0, V.a, [], null, null), (n()(),
            M._21(-1, null, ["\n                "])), (n()(),
            M._0(4, 0, null, null, 2, "ion-col", [["class", "linea-sub-titulo col"], ["col-12", ""]], null, null, null, null, null)), M.Z(5, 16384, null, 0, F.a, [], null, null), (n()(),
            M._21(-1, null, ["\n                    Cargando paradas...\n                "])), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._21(-1, null, ["\n        "]))], null, null)
        }
        function R(n) {
            return M._23(0, [(n()(),
            M._0(0, 0, null, null, 7, "div", [["class", "viaje-en-bus line-container"]], null, null, null, null, null)), (n()(),
            M._21(-1, null, ["\n        "])), (n()(),
            M.V(16777216, null, null, 2, null, x)), M.Z(3, 16384, null, 0, N.k, [M.J, M.G], {
                ngIf: [0, "ngIf"],
                ngIfElse: [1, "ngIfElse"]
            }, null), M._14(131072, N.b, [M.g]), (n()(),
            M._21(-1, null, ["\n        "])), (n()(),
            M.V(0, [["loadingParadasIntermedias2", 2]], null, 0, null, I)), (n()(),
            M._21(-1, null, ["\n    "]))], function(n, l) {
                var e = l.component;
                n(l, 3, 0, M._22(l, 3, 0, M._12(l, 4).transform(e.paradasIntermedias2)), M._12(l, 6))
            }, null)
        }
        function D(n) {
            return M._23(0, [(n()(),
            M._0(0, 0, null, null, 14, "ion-col", [["class", "caminata col"], ["col-11", ""], ["offset-1", ""]], [[8, "hidden", 0]], null, null, null, null)), M.Z(1, 16384, null, 0, F.a, [], null, null), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._0(3, 0, null, null, 0, "img", [["alt", "continúe por"], ["src", "assets/images/trayecto/icono_ruta_adelante.png"]], [[8, "hidden", 0]], null, null, null, null)), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._0(5, 0, null, null, 0, "img", [["alt", "gire a la izquierda en"], ["src", "assets/images/trayecto/icono_ruta_izquierda.png"]], [[8, "hidden", 0]], null, null, null, null)), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._0(7, 0, null, null, 0, "img", [["alt", "gire a la derecha en"], ["src", "assets/images/trayecto/icono_ruta_derecha.png"]], [[8, "hidden", 0]], null, null, null, null)), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._0(9, 0, null, null, 0, "img", [["alt", "gire 180 grados en"], ["src", "assets/images/trayecto/icono_ruta_atras.png"]], [[8, "hidden", 0]], null, null, null, null)), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._0(11, 0, null, null, 2, "span", [["class", "text-container"]], null, null, null, null, null)), (n()(),
            M._21(12, null, ["", ""])), M._16(13, 1), (n()(),
            M._21(-1, null, ["\n        "]))], null, function(n, l) {
                n(l, 0, 0, !l.component.ver_caminar_detalle_4);
                n(l, 3, 0, "SIGUE" != l.context.$implicit.giro);
                n(l, 5, 0, "IZQUIERDA" != l.context.$implicit.giro);
                n(l, 7, 0, "DERECHA" != l.context.$implicit.giro);
                n(l, 9, 0, "ATRAS" != l.context.$implicit.giro);
                n(l, 12, 0, M._22(l, 12, 0, n(l, 13, 0, M._12(l.parent.parent, 0), l.context.$implicit.nombreVia)))
            })
        }
        function T(n) {
            return M._23(0, [(n()(),
            M._0(0, 0, null, null, 48, "ion-row", [["class", "line-container row"]], null, null, null, null, null)), M.Z(1, 16384, null, 0, V.a, [], null, null), (n()(),
            M._21(-1, null, ["\n        "])), (n()(),
            M._0(3, 0, null, null, 10, "ion-col", [["class", "linea-sub-titulo col"], ["col-12", ""]], null, null, null, null, null)), M.Z(4, 16384, null, 0, F.a, [], null, null), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._0(6, 0, null, null, 3, "span", [["class", "icon-container icon-reloj"]], null, null, null, null, null)), (n()(),
            M._21(-1, null, ["\n                "])), (n()(),
            M._0(8, 0, null, null, 0, "img", [["src", "assets/images/trayecto/icono_CaminarTrayecto.png"]], null, null, null, null, null)), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._0(11, 0, null, null, 1, "span", [["class", "text-container caminar-text"]], null, null, null, null, null)), (n()(),
            M._21(-1, null, ["\n                 Caminar hasta el destino\n            "])), (n()(),
            M._21(-1, null, ["\n        "])), (n()(),
            M._21(-1, null, ["\n\n        "])), (n()(),
            M._0(15, 0, null, null, 11, "ion-col", [["class", "ver-caminata col"], ["col-11", ""], ["offset-1", ""]], [[8, "hidden", 0]], [[null, "click"]], function(n, l, e) {
                var t = !0
                  , a = n.component;
                if ("click" === l) {
                    t = !1 != (a.ver_caminar_detalle_4 = !a.ver_caminar_detalle_4) && t
                }
                return t
            }, null, null)), M.Z(16, 16384, null, 0, F.a, [], null, null), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._0(18, 0, null, null, 1, "ion-icon", [["class", "vertical-middle"], ["name", "ios-arrow-down"], ["role", "img"]], [[8, "hidden", 0], [2, "hide", null]], null, null, null, null)), M.Z(19, 147456, null, 0, L.a, [j.a, M.j, M.A], {
                name: [0, "name"]
            }, null), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._0(21, 0, null, null, 1, "ion-icon", [["class", "vertical-middle"], ["name", "ios-arrow-up"], ["role", "img"]], [[8, "hidden", 0], [2, "hide", null]], null, null, null, null)), M.Z(22, 147456, null, 0, L.a, [j.a, M.j, M.A], {
                name: [0, "name"]
            }, null), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._0(24, 0, null, null, 1, "span", [["class", "text-container vertical-middle"]], null, null, null, null, null)), (n()(),
            M._21(-1, null, ["Detalles"])), (n()(),
            M._21(-1, null, ["\n        "])), (n()(),
            M._21(-1, null, ["\n        "])), (n()(),
            M.V(16777216, null, null, 1, null, D)), M.Z(29, 802816, null, 0, N.j, [M.J, M.G, M.q], {
                ngForOf: [0, "ngForOf"]
            }, null), (n()(),
            M._21(-1, null, ["\n        "])), (n()(),
            M._0(31, 0, null, null, 16, "ion-col", [["class", "col"], ["col-11", ""], ["offset-1", ""]], null, null, null, null, null)), M.Z(32, 16384, null, 0, F.a, [], null, null), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._0(34, 0, null, null, 3, "span", [["class", "icon-container icon-caminar"]], null, null, null, null, null)), (n()(),
            M._21(-1, null, ["\n                "])), (n()(),
            M._0(36, 0, null, null, 0, "img", [["src", "assets/images/icon/icon-destino.svg"]], null, null, null, null, null)), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._0(39, 0, null, null, 1, "span", [["class", "text-container caminar-text text-ellipsis"]], null, null, null, null, null)), (n()(),
            M._21(40, null, ["\n                ", "\n            "])), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._0(42, 0, null, null, 4, "div", [["class", "data-right-container pull-right"]], null, null, null, null, null)), (n()(),
            M._21(-1, null, ["\n                "])), (n()(),
            M._0(44, 0, null, null, 1, "span", [["class", "caminar-metros data-right"]], null, null, null, null, null)), (n()(),
            M._21(45, null, ["", " m"])), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._21(-1, null, ["\n        "])), (n()(),
            M._21(-1, null, ["\n\n    "]))], function(n, l) {
                var e = l.component;
                n(l, 19, 0, "ios-arrow-down");
                n(l, 22, 0, "ios-arrow-up");
                n(l, 29, 0, e.caminata_3)
            }, function(n, l) {
                var e = l.component;
                n(l, 15, 0, 0 == e.caminata_3.length);
                n(l, 18, 0, e.ver_caminar_detalle_4, M._12(l, 19)._hidden);
                n(l, 21, 0, !e.ver_caminar_detalle_4, M._12(l, 22)._hidden);
                n(l, 40, 0, e.destino);
                n(l, 45, 0, e.pasadaConRecorrido.recorrido.ruta.trasbordo.caminarLlegada.largo)
            })
        }
        function k(n) {
            return M._23(0, [M._14(0, Z.a, [U.a]), M._14(0, B.a, []), (n()(),
            M._0(2, 0, null, null, 19, "ion-header", [], null, null, null, null, null)), M.Z(3, 16384, null, 0, G.a, [j.a, M.j, M.A, [2, H.a]], null, null), (n()(),
            M._21(-1, null, ["\n\n    "])), (n()(),
            M._0(5, 0, null, null, 15, "ion-navbar", [["class", "toolbar"]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, $.b, $.a)), M.Z(6, 49152, null, 0, z.a, [q.a, [2, H.a], [2, J.a], j.a, M.j, M.A], null, null), (n()(),
            M._21(-1, 3, ["\n        "])), (n()(),
            M._0(8, 0, null, 3, 1, "button", [["class", "left"]], null, [[null, "click"]], function(n, l, e) {
                var t = !0;
                if ("click" === l) {
                    t = !1 !== n.component.cerrar() && t
                }
                return t
            }, null, null)), (n()(),
            M._0(9, 0, null, null, 0, "img", [["class", "icon-back"], ["src", "assets/images/button/icono_Atras.png"]], null, null, null, null, null)), (n()(),
            M._21(-1, 3, ["\n        "])), (n()(),
            M._0(11, 0, null, 3, 1, "div", [["class", "icon-destino-container"]], null, null, null, null, null)), (n()(),
            M._0(12, 0, null, null, 0, "img", [["class", "icon-destino"], ["src", "assets/images/icon/icon-destino.svg"]], null, null, null, null, null)), (n()(),
            M._21(-1, 3, ["\n        "])), (n()(),
            M._0(14, 0, null, 3, 2, "span", [["class", "title-label text-ellipsis"]], null, null, null, null, null)), (n()(),
            M._21(15, null, ["", ""])), M._16(16, 1), (n()(),
            M._21(-1, 3, ["\n        "])), (n()(),
            M._0(18, 0, null, 3, 1, "button", [["class", "right"]], null, [[null, "click"]], function(n, l, e) {
                var t = !0;
                if ("click" === l) {
                    t = !1 !== n.component.share() && t
                }
                return t
            }, null, null)), (n()(),
            M._0(19, 0, null, null, 0, "img", [["class", "icon-back"], ["src", "assets/images/button/share.png"]], null, null, null, null, null)), (n()(),
            M._21(-1, 3, ["\n    "])), (n()(),
            M._21(-1, null, ["\n\n"])), (n()(),
            M._21(-1, null, ["\n\n\n"])), (n()(),
            M._0(23, 0, null, null, 203, "ion-content", [], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, Y.b, Y.a)), M.Z(24, 4374528, null, 0, K.a, [j.a, W.a, Q.a, M.j, M.A, q.a, X.a, M.v, [2, H.a], [2, J.a]], null, null), (n()(),
            M._21(-1, 1, ["\n    "])), (n()(),
            M._0(26, 0, null, 1, 13, "ion-row", [["class", "tiempo-total-cabezal row"]], null, null, null, null, null)), M.Z(27, 16384, null, 0, V.a, [], null, null), (n()(),
            M._21(-1, null, ["\n        "])), (n()(),
            M._21(-1, null, ["\n        "])), (n()(),
            M._0(30, 0, null, null, 8, "ion-col", [["class", "col"], ["col-12", ""]], null, null, null, null, null)), M.Z(31, 16384, null, 0, F.a, [], null, null), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._0(33, 0, null, null, 1, "span", [["class", "origen-a-destino"]], null, null, null, null, null)), (n()(),
            M._21(-1, null, ["\n                DE ORIGEN A DESTINO\n            "])), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M.V(16777216, null, null, 1, null, t)), M.Z(37, 16384, null, 0, N.k, [M.J, M.G], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            M._21(-1, null, ["\n        "])), (n()(),
            M._21(-1, null, ["\n    "])), (n()(),
            M._21(-1, 1, ["\n    "])), (n()(),
            M._0(41, 0, null, 1, 65, "ion-row", [["class", "line-container row"]], null, null, null, null, null)), M.Z(42, 16384, null, 0, V.a, [], null, null), (n()(),
            M._21(-1, null, ["\n        "])), (n()(),
            M._21(-1, null, ["\n        "])), (n()(),
            M._0(45, 0, null, null, 11, "ion-col", [["class", "linea-sub-titulo col"], ["col-12", ""]], null, null, null, null, null)), M.Z(46, 16384, null, 0, F.a, [], null, null), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._0(48, 0, null, null, 3, "span", [["class", "icon-container icon-caminar"]], null, null, null, null, null)), (n()(),
            M._21(-1, null, ["\n                "])), (n()(),
            M._0(50, 0, null, null, 0, "img", [["src", "assets/images/icon/icon-origen.svg"]], null, null, null, null, null)), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._0(53, 0, null, null, 2, "span", [["class", "text-container caminar-text text-ellipsis"]], null, null, null, null, null)), (n()(),
            M._21(54, null, ["\n                ", "\n            "])), M._16(55, 1), (n()(),
            M._21(-1, null, ["\n        "])), (n()(),
            M._21(-1, null, ["\n        "])), (n()(),
            M._0(58, 0, null, null, 17, "ion-col", [["class", "linea-sub-titulo col"], ["col-12", ""], ["style", "margin-top: 10px"]], null, null, null, null, null)), M.Z(59, 16384, null, 0, F.a, [], null, null), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._0(61, 0, null, null, 3, "span", [["class", "icon-container icon-caminar"]], null, null, null, null, null)), (n()(),
            M._21(-1, null, ["\n                "])), (n()(),
            M._0(63, 0, null, null, 0, "img", [["src", "assets/images/trayecto/icono_CaminarTrayecto.png"]], null, null, null, null, null)), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._0(66, 0, null, null, 1, "span", [["class", "text-container caminar-text"]], null, null, null, null, null)), (n()(),
            M._21(-1, null, ["\n                Caminar a la parada\n            "])), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._0(69, 0, null, null, 4, "div", [["class", "data-right-container pull-right"]], null, null, null, null, null)), (n()(),
            M._21(-1, null, ["\n                "])), (n()(),
            M._0(71, 0, null, null, 1, "span", [["class", "caminar-metros data-right"]], null, null, null, null, null)), (n()(),
            M._21(72, null, ["", " m"])), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._21(-1, null, ["\n        "])), (n()(),
            M._21(-1, null, ["\n        "])), (n()(),
            M._0(77, 0, null, null, 11, "ion-col", [["class", "ver-caminata col"], ["col-11", ""], ["offset-1", ""]], [[8, "hidden", 0]], [[null, "click"]], function(n, l, e) {
                var t = !0
                  , a = n.component;
                if ("click" === l) {
                    t = !1 != (a.ver_caminar_detalle_1 = !a.ver_caminar_detalle_1) && t
                }
                return t
            }, null, null)), M.Z(78, 16384, null, 0, F.a, [], null, null), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._0(80, 0, null, null, 1, "ion-icon", [["class", "vertical-middle"], ["name", "ios-arrow-down"], ["role", "img"]], [[8, "hidden", 0], [2, "hide", null]], null, null, null, null)), M.Z(81, 147456, null, 0, L.a, [j.a, M.j, M.A], {
                name: [0, "name"]
            }, null), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._0(83, 0, null, null, 1, "ion-icon", [["class", "vertical-middle"], ["name", "ios-arrow-up"], ["role", "img"]], [[8, "hidden", 0], [2, "hide", null]], null, null, null, null)), M.Z(84, 147456, null, 0, L.a, [j.a, M.j, M.A], {
                name: [0, "name"]
            }, null), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._0(86, 0, null, null, 1, "span", [["class", "text-container vertical-middle"]], null, null, null, null, null)), (n()(),
            M._21(-1, null, ["Detalles"])), (n()(),
            M._21(-1, null, ["\n        "])), (n()(),
            M._21(-1, null, ["\n        "])), (n()(),
            M.V(16777216, null, null, 1, null, a)), M.Z(91, 802816, null, 0, N.j, [M.J, M.G, M.q], {
                ngForOf: [0, "ngForOf"]
            }, null), (n()(),
            M._21(-1, null, ["\n        "])), (n()(),
            M._0(93, 0, null, null, 12, "ion-col", [["class", "col"], ["col-11", ""], ["offset-1", ""]], null, null, null, null, null)), M.Z(94, 16384, null, 0, F.a, [], null, null), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._0(96, 0, null, null, 3, "span", [["class", "icon-container icon-caminar"]], null, null, null, null, null)), (n()(),
            M._21(-1, null, ["\n                "])), (n()(),
            M._0(98, 0, null, null, 0, "img", [["src", "assets/images/trayecto/icono_ParadaTrayecto.png"]], null, null, null, null, null)), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._0(101, 0, null, null, 2, "span", [["class", "text-container caminar-text text-ellipsis"]], null, null, null, null, null)), (n()(),
            M._21(102, null, ["\n                ", "\n            "])), M._16(103, 1), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._21(-1, null, ["\n        "])), (n()(),
            M._21(-1, null, ["\n    "])), (n()(),
            M._21(-1, 1, ["\n    "])), (n()(),
            M._0(108, 0, null, 1, 0, "hr", [], null, null, null, null, null)), (n()(),
            M._21(-1, 1, ["\n\n    "])), (n()(),
            M._21(-1, 1, ["\n    "])), (n()(),
            M._0(111, 0, null, 1, 42, "ion-row", [["class", "line-container row"]], null, null, null, null, null)), M.Z(112, 16384, null, 0, V.a, [], null, null), (n()(),
            M._21(-1, null, ["\n        "])), (n()(),
            M._0(114, 0, null, null, 17, "ion-col", [["class", "linea-sub-titulo col"], ["col-12", ""]], null, null, null, null, null)), M.Z(115, 16384, null, 0, F.a, [], null, null), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._0(117, 0, null, null, 3, "span", [["class", "icon-container icon-reloj"]], null, null, null, null, null)), (n()(),
            M._21(-1, null, ["\n                "])), (n()(),
            M._0(119, 0, null, null, 0, "img", [["src", "assets/images/trayecto/icono_EsperarTrayecto.png"]], null, null, null, null, null)), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._0(122, 0, null, null, 1, "span", [["class", "text-container caminar-text"]], null, null, null, null, null)), (n()(),
            M._21(-1, null, ["\n                Esperar el\n            "])), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._0(125, 0, null, null, 5, "div", [["class", "data-right-container pull-right"]], null, null, null, null, null)), (n()(),
            M._21(-1, null, ["\n                "])), (n()(),
            M._0(127, 0, null, null, 2, "span", [["class", "siguiente-en"]], [[8, "hidden", 0]], null, null, null, null)), (n()(),
            M._21(-1, null, ["siguiente en"])), (n()(),
            M._0(129, 0, null, null, 0, "br", [], null, null, null, null, null)), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._21(-1, null, ["\n        "])), (n()(),
            M._21(-1, null, ["\n\n        "])), (n()(),
            M._0(133, 0, null, null, 19, "ion-col", [["class", "col"], ["col-11", ""], ["offset-1", ""]], null, null, null, null, null)), M.Z(134, 16384, null, 0, F.a, [], null, null), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._0(136, 0, null, null, 3, "span", [["class", "icon-container icon-bus"]], null, null, null, null, null)), (n()(),
            M._21(-1, null, ["\n                "])), (n()(),
            M._0(138, 0, null, null, 0, "img", [["src", "assets/images/trayecto/icono_BusTrayecto.png"]], null, null, null, null, null)), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._0(141, 0, null, null, 1, "span", [["class", "text-container caminar-text text-ellipsis"]], null, null, null, null, null)), (n()(),
            M._21(142, null, ["\n                ", " - ", "\n            "])), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._0(144, 0, null, null, 7, "div", [["class", "data-right-container pull-right"]], null, null, null, null, null)), (n()(),
            M._21(-1, null, ["\n                "])), (n()(),
            M._0(146, 0, null, null, 1, "span", [["class", "minutes-real"]], [[8, "hidden", 0]], null, null, null, null)), (n()(),
            M._21(147, null, ["", "'"])), (n()(),
            M._21(-1, null, ["\n                "])), (n()(),
            M._0(149, 0, null, null, 1, "span", [["class", "minutes-theory"]], [[8, "hidden", 0]], null, null, null, null)), (n()(),
            M._21(150, null, ["", ""])), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._21(-1, null, ["\n        "])), (n()(),
            M._21(-1, null, ["\n    "])), (n()(),
            M._21(-1, 1, ["\n    "])), (n()(),
            M._0(155, 0, null, 1, 0, "hr", [], null, null, null, null, null)), (n()(),
            M._21(-1, 1, ["\n\n    "])), (n()(),
            M._21(-1, 1, ["\n    "])), (n()(),
            M.V(16777216, null, 1, 2, null, s)), M.Z(159, 16384, null, 0, N.k, [M.J, M.G], {
                ngIf: [0, "ngIf"],
                ngIfElse: [1, "ngIfElse"]
            }, null), M._14(131072, N.b, [M.g]), (n()(),
            M._21(-1, 1, ["\n    "])), (n()(),
            M.V(0, [["loadingParadasIntermedias1", 2]], 1, 0, null, c)), (n()(),
            M._21(-1, 1, ["\n    "])), (n()(),
            M._0(164, 0, null, 1, 0, "hr", [], null, null, null, null, null)), (n()(),
            M._21(-1, 1, ["\n\n    "])), (n()(),
            M._21(-1, 1, ["\n    "])), (n()(),
            M._0(167, 0, null, 1, 40, "ion-row", [["class", "line-container row"]], null, null, null, null, null)), M.Z(168, 16384, null, 0, V.a, [], null, null), (n()(),
            M._21(-1, null, ["\n        "])), (n()(),
            M._0(170, 0, null, null, 16, "ion-col", [["class", "linea-sub-titulo col"], ["col-12", ""]], null, null, null, null, null)), M.Z(171, 16384, null, 0, F.a, [], null, null), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._0(173, 0, null, null, 3, "span", [["class", "icon-container icon-reloj"]], null, null, null, null, null)), (n()(),
            M._21(-1, null, ["\n                "])), (n()(),
            M._0(175, 0, null, null, 0, "img", [["src", "assets/images/trayecto/icono_CaminarTrayecto.png"]], null, null, null, null, null)), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M.V(16777216, null, null, 1, null, d)), M.Z(179, 16384, null, 0, N.k, [M.J, M.G], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M.V(16777216, null, null, 1, null, p)), M.Z(182, 16384, null, 0, N.k, [M.J, M.G], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            M._21(-1, null, ["\n            "])), (n()(),
            M.V(16777216, null, null, 1, null, h)), M.Z(185, 16384, null, 0, N.k, [M.J, M.G], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            M._21(-1, null, ["\n        "])), (n()(),
            M._21(-1, null, ["\n        "])), (n()(),
            M._21(-1, null, ["\n        "])), (n()(),
            M.V(16777216, null, null, 1, null, m)), M.Z(190, 16384, null, 0, N.k, [M.J, M.G], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            M._21(-1, null, ["\n        "])), (n()(),
            M.V(16777216, null, null, 1, null, _)), M.Z(193, 802816, null, 0, N.j, [M.J, M.G, M.q], {
                ngForOf: [0, "ngForOf"]
            }, null), (n()(),
            M._21(-1, null, ["\n        "])), (n()(),
            M.V(16777216, null, null, 1, null, f)), M.Z(196, 16384, null, 0, N.k, [M.J, M.G], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            M._21(-1, null, ["\n        "])), (n()(),
            M._21(-1, null, ["\n        "])), (n()(),
            M.V(16777216, null, null, 1, null, g)), M.Z(200, 16384, null, 0, N.k, [M.J, M.G], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            M._21(-1, null, ["\n        "])), (n()(),
            M.V(16777216, null, null, 1, null, v)), M.Z(203, 802816, null, 0, N.j, [M.J, M.G, M.q], {
                ngForOf: [0, "ngForOf"]
            }, null), (n()(),
            M._21(-1, null, ["\n        "])), (n()(),
            M.V(16777216, null, null, 1, null, y)), M.Z(206, 16384, null, 0, N.k, [M.J, M.G], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            M._21(-1, null, ["\n    "])), (n()(),
            M._21(-1, 1, ["\n    "])), (n()(),
            M._0(209, 0, null, 1, 0, "hr", [], null, null, null, null, null)), (n()(),
            M._21(-1, 1, ["\n\n    "])), (n()(),
            M._21(-1, 1, ["\n    "])), (n()(),
            M.V(16777216, null, 1, 1, null, C)), M.Z(213, 16384, null, 0, N.k, [M.J, M.G], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            M._21(-1, 1, ["\n    "])), (n()(),
            M._0(215, 0, null, 1, 0, "hr", [], null, null, null, null, null)), (n()(),
            M._21(-1, 1, ["\n\n\n    "])), (n()(),
            M._21(-1, 1, ["\n    "])), (n()(),
            M.V(16777216, null, 1, 1, null, R)), M.Z(219, 16384, null, 0, N.k, [M.J, M.G], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            M._21(-1, 1, ["\n    "])), (n()(),
            M._0(221, 0, null, 1, 0, "hr", [], null, null, null, null, null)), (n()(),
            M._21(-1, 1, ["\n\n\n    "])), (n()(),
            M._21(-1, 1, ["\n    "])), (n()(),
            M.V(16777216, null, 1, 1, null, T)), M.Z(225, 16384, null, 0, N.k, [M.J, M.G], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            M._21(-1, 1, ["\n\n"])), (n()(),
            M._21(-1, null, ["\n"]))], function(n, l) {
                var e = l.component;
                n(l, 37, 0, e.pasadaConRecorrido.tiempoTotalConfianza && e.pasadaConRecorrido.tiempoTotalConfianza.tiempoTotal);
                n(l, 81, 0, "ios-arrow-down");
                n(l, 84, 0, "ios-arrow-up");
                n(l, 91, 0, e.pasadaConRecorrido.recorrido.ruta.directo.caminarSalida.camino);
                n(l, 159, 0, M._22(l, 159, 0, M._12(l, 160).transform(e.paradasIntermedias1)), M._12(l, 162));
                n(l, 179, 0, !e.pasadaConRecorrido.recorrido.ruta.trasbordo);
                n(l, 182, 0, e.pasadaConRecorrido.recorrido.ruta.trasbordo && e.pasadaConRecorrido.recorrido.ruta.trasbordo.caminarTrasbordo.largo > 0);
                n(l, 185, 0, e.pasadaConRecorrido.recorrido.ruta.trasbordo && 0 == e.pasadaConRecorrido.recorrido.ruta.trasbordo.caminarTrasbordo.largo);
                n(l, 190, 0, !e.pasadaConRecorrido.recorrido.ruta.trasbordo && e.caminata_2.length > 0);
                n(l, 193, 0, e.caminata_2);
                n(l, 196, 0, !e.pasadaConRecorrido.recorrido.ruta.trasbordo);
                n(l, 200, 0, e.pasadaConRecorrido.recorrido.ruta.trasbordo && e.pasadaConRecorrido.recorrido.ruta.trasbordo.caminarTrasbordo.camino.length > 0);
                n(l, 203, 0, e.caminata_2);
                n(l, 206, 0, e.pasadaConRecorrido.recorrido.ruta.trasbordo);
                n(l, 213, 0, e.pasadaConRecorrido.recorrido.ruta.trasbordo);
                n(l, 219, 0, e.pasadaConRecorrido.recorrido.ruta.trasbordo);
                n(l, 225, 0, e.pasadaConRecorrido.recorrido.ruta.trasbordo)
            }, function(n, l) {
                var e = l.component;
                n(l, 5, 0, M._12(l, 6)._hidden, M._12(l, 6)._sbPadding);
                n(l, 15, 0, M._22(l, 15, 0, n(l, 16, 0, M._12(l, 0), e.destino)));
                n(l, 23, 0, M._12(l, 24).statusbarPadding, M._12(l, 24)._hasRefresher);
                n(l, 54, 0, M._22(l, 54, 0, n(l, 55, 0, M._12(l, 0), e.origen)));
                n(l, 72, 0, e.pasadaConRecorrido.recorrido.ruta.directo.caminarSalida.largo);
                n(l, 77, 0, !e.pasadaConRecorrido.recorrido.ruta.directo.caminarSalida.camino);
                n(l, 80, 0, e.ver_caminar_detalle_1, M._12(l, 81)._hidden);
                n(l, 83, 0, !e.ver_caminar_detalle_1, M._12(l, 84)._hidden);
                n(l, 102, 0, M._22(l, 102, 0, n(l, 103, 0, M._12(l, 0), e.pasadaConRecorrido.recorrido.ruta.directo.paradaOrigen.descripcion)));
                n(l, 127, 0, !e.pasadaConRecorrido.pasada.real);
                n(l, 142, 0, e.pasadaConRecorrido.pasada.linea, e.pasadaConRecorrido.pasada.destino);
                n(l, 146, 0, !e.pasadaConRecorrido.pasada.real);
                n(l, 147, 0, e.pasadaConRecorrido.pasada.minutos);
                n(l, 149, 0, e.pasadaConRecorrido.pasada.real);
                n(l, 150, 0, e.pasadaConRecorrido.pasada.horaDesc)
            })
        }
        e.d(l, "a", function() {
            return on
        });
        var M = e(1)
          , F = e(74)
          , L = e(45)
          , j = e(3)
          , N = e(15)
          , V = e(75)
          , Z = e(76)
          , U = e(38)
          , B = e(138)
          , G = e(51)
          , H = e(6)
          , $ = e(77)
          , z = e(32)
          , q = e(9)
          , J = e(20)
          , Y = e(43)
          , K = e(21)
          , W = e(5)
          , Q = e(10)
          , X = e(25)
          , nn = e(165)
          , ln = e(16)
          , en = e(52)
          , tn = e(37)
          , an = M.Y({
            encapsulation: 2,
            styles: [],
            data: {}
        })
          , on = M.W("page-ir-en-bus-detalle-modal", nn.a, function(n) {
            return M._23(0, [(n()(),
            M._0(0, 0, null, null, 1, "page-ir-en-bus-detalle-modal", [], null, null, null, k, an)), M.Z(1, 49152, null, 0, nn.a, [J.a, ln.a, H.a, en.a, tn.a], null, null)], null, null)
        }, {}, {}, [])
    },
    425: function(n, l, e) {
        "use strict";
        function t(n) {
            return s._23(0, [(n()(),
            s._0(0, 0, null, null, 22, "div", [["class", "row"]], [[8, "hidden", 0]], null, null, null, null)), (n()(),
            s._21(-1, null, ["\n                "])), (n()(),
            s._0(2, 0, null, null, 13, "div", [["class", "col text-right padding"]], null, null, null, null, null)), (n()(),
            s._21(-1, null, ["\n                    "])), (n()(),
            s._0(4, 0, null, null, 10, "div", [["class", "d-inline-flex text-center flex-column"]], null, null, null, null, null)), (n()(),
            s._21(-1, null, ["\n                        "])), (n()(),
            s._0(6, 0, null, null, 1, "div", [["class", "text-sm"]], null, null, null, null, null)), (n()(),
            s._21(7, null, ["", "%"])), (n()(),
            s._21(-1, null, ["\n                        "])), (n()(),
            s._0(9, 0, null, null, 4, "div", [["class", "bar-container margin-top-sm"]], null, null, null, null, null)), (n()(),
            s._0(10, 0, null, null, 3, "div", [["class", "bar"]], null, null, null, null, null)), s.Z(11, 278528, null, 0, c.i, [s.q, s.r, s.j, s.B], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), s.Z(12, 278528, null, 0, c.n, [s.r, s.j, s.B], {
                ngStyle: [0, "ngStyle"]
            }, null), s._15(13, {
                width: 0
            }), (n()(),
            s._21(-1, null, ["\n                    "])), (n()(),
            s._21(-1, null, ["                    \n                "])), (n()(),
            s._21(-1, null, ["\n                "])), (n()(),
            s._0(17, 0, null, null, 4, "div", [["class", "col text-left padding d-inline-flex flex-column flex-center"]], null, null, null, null, null)), (n()(),
            s._21(-1, null, ["\n                    "])), (n()(),
            s._0(19, 0, null, null, 1, "span", [], null, null, null, null, null)), (n()(),
            s._21(20, null, ["", ""])), (n()(),
            s._21(-1, null, ["\n                "])), (n()(),
            s._21(-1, null, ["\n            "]))], function(n, l) {
                n(l, 11, 0, "bar", l.context.$implicit.color);
                n(l, 12, 0, n(l, 13, 0, l.context.$implicit.value + "%"))
            }, function(n, l) {
                n(l, 0, 0, "global" == l.context.$implicit.name);
                n(l, 7, 0, l.context.$implicit.value);
                n(l, 20, 0, l.context.$implicit.name)
            })
        }
        function a(n) {
            return s._23(0, [(n()(),
            s._0(0, 0, null, null, 16, "div", [["class", "busdata-popup"], ["ion-fixed", ""]], [[8, "hidden", 0]], [[null, "click"]], function(n, l, e) {
                var t = !0;
                if ("click" === l) {
                    t = !1 !== n.component.hidePopupBusdata() && t
                }
                return t
            }, null, null)), (n()(),
            s._21(-1, null, ["\n        "])), (n()(),
            s._0(2, 0, null, null, 0, "div", [["class", "bg"]], null, null, null, null, null)), (n()(),
            s._21(-1, null, ["\n        "])), (n()(),
            s._0(4, 0, null, null, 8, "div", [["class", "popup"]], null, null, null, null, null)), s.Z(5, 278528, null, 0, c.n, [s.r, s.j, s.B], {
                ngStyle: [0, "ngStyle"]
            }, null), (n()(),
            s._21(-1, null, ["\n            "])), (n()(),
            s._0(7, 0, null, null, 1, "div", [["class", "head"]], null, null, null, null, null)), (n()(),
            s._21(-1, null, ["\n                Buses trasmitiendo en tiempo real\n            "])), (n()(),
            s._21(-1, null, ["\n            "])), (n()(),
            s.V(16777216, null, null, 1, null, t)), s.Z(11, 802816, null, 0, c.j, [s.J, s.G, s.q], {
                ngForOf: [0, "ngForOf"]
            }, null), (n()(),
            s._21(-1, null, ["\n        "])), (n()(),
            s._21(-1, null, ["\n        "])), (n()(),
            s._0(14, 0, null, null, 1, "div", [["class", "punta"]], null, null, null, null, null)), s.Z(15, 278528, null, 0, c.n, [s.r, s.j, s.B], {
                ngStyle: [0, "ngStyle"]
            }, null), (n()(),
            s._21(-1, null, ["\n    "]))], function(n, l) {
                var e = l.component;
                n(l, 5, 0, e.showPopup);
                n(l, 11, 0, e.busesStatus.data);
                n(l, 15, 0, e.showPopup.punta)
            }, function(n, l) {
                n(l, 0, 0, !l.component.showPopup.show)
            })
        }
        function i(n) {
            return s._23(0, [(n()(),
            s._0(0, 0, null, null, 4, "div", [["class", "pull-right"]], null, null, null, null, null)), (n()(),
            s._21(-1, null, ["\n                    "])), (n()(),
            s._0(2, 0, [[13, 0], ["popupParadaDeshabilitadaLink", 1]], null, 1, "a", [["target", "_blank"]], [[8, "href", 4]], null, null, null, null)), (n()(),
            s._21(-1, null, ["Más información "])), (n()(),
            s._21(-1, null, ["\n                "]))], null, function(n, l) {
                n(l, 2, 0, s._3(1, "", l.component.paradaDeshabilitada.link, ""))
            })
        }
        function o(n) {
            return s._23(0, [(n()(),
            s._0(0, 0, null, null, 6, "tr", [], null, null, null, null, null)), (n()(),
            s._21(-1, null, ["\n                            "])), (n()(),
            s._0(2, 0, null, null, 1, "td", [], null, null, null, null, null)), (n()(),
            s._21(3, null, ["", ""])), (n()(),
            s._0(4, 0, null, null, 1, "td", [], null, null, null, null, null)), (n()(),
            s._21(5, null, ["", ""])), (n()(),
            s._21(-1, null, ["\n                        "]))], null, function(n, l) {
                n(l, 3, 0, l.context.$implicit.lineas);
                n(l, 5, 0, l.context.$implicit.parada)
            })
        }
        function r(n) {
            return s._23(0, [(n()(),
            s._0(0, 0, null, null, 46, "div", [["class", "popu-container"]], null, [[null, "click"]], function(n, l, e) {
                var t = !0;
                if ("click" === l) {
                    t = !1 !== n.component.hideMapPopup(e) && t
                }
                return t
            }, null, null)), (n()(),
            s._21(-1, null, ["\n            \n            "])), (n()(),
            s._0(2, 0, null, null, 12, "div", [["class", "pink-container big"]], [[8, "hidden", 0]], null, null, null, null)), (n()(),
            s._21(-1, null, ["\n                "])), (n()(),
            s._0(4, 0, null, null, 0, "img", [["src", "assets/images/parada/icon-alert-parada-deshabilitada.png"]], null, null, null, null, null)), (n()(),
            s._21(-1, null, ["\n                "])), (n()(),
            s._0(6, 0, null, null, 1, "h4", [["class", "nowrap-on-desktop"]], null, null, null, null, null)), (n()(),
            s._21(-1, null, ["Parada temporalmente suspendida"])), (n()(),
            s._21(-1, null, ["\n                "])), (n()(),
            s._0(9, 0, null, null, 1, "p", [], null, null, null, null, null)), (n()(),
            s._21(10, null, ["", ""])), (n()(),
            s._21(-1, null, ["\n                "])), (n()(),
            s.V(16777216, null, null, 1, null, i)), s.Z(13, 16384, null, 0, c.k, [s.J, s.G], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            s._21(-1, null, ["\n            "])), (n()(),
            s._21(-1, null, ["\n\n            "])), (n()(),
            s._0(16, 0, null, null, 6, "div", [["class", "pink-container"]], [[8, "hidden", 0]], null, null, null, null)), (n()(),
            s._21(-1, null, ["\n                "])), (n()(),
            s._0(18, 0, null, null, 0, "img", [["src", "assets/images/parada/icon-alert-parada-deshabilitada.png"]], null, null, null, null, null)), (n()(),
            s._21(-1, null, ["\n                "])), (n()(),
            s._0(20, 0, null, null, 1, "h4", [["class", "nowrap-on-desktop"]], null, null, null, null, null)), (n()(),
            s._21(-1, null, ["Parada temporalmente suspendida"])), (n()(),
            s._21(-1, null, ["\n            "])), (n()(),
            s._21(-1, null, ["\n        \n            "])), (n()(),
            s._0(24, 0, null, null, 21, "div", [["style", "margin-top: 10px;"]], [[8, "hidden", 0]], null, null, null, null)), (n()(),
            s._21(-1, null, ["\n                "])), (n()(),
            s._0(26, 0, null, null, 18, "table", [["border", "1"], ["class", "table"]], null, null, null, null, null)), (n()(),
            s._21(-1, null, ["\n                    "])), (n()(),
            s._0(28, 0, null, null, 9, "thead", [], null, null, null, null, null)), (n()(),
            s._21(-1, null, ["\n                        "])), (n()(),
            s._0(30, 0, null, null, 6, "tr", [], null, null, null, null, null)), (n()(),
            s._0(31, 0, null, null, 2, "td", [], null, null, null, null, null)), (n()(),
            s._0(32, 0, null, null, 0, "img", [["src", "assets/images/bus/icon-bus.svg"]], null, null, null, null, null)), (n()(),
            s._21(-1, null, [" Líneas"])), (n()(),
            s._0(34, 0, null, null, 2, "td", [], null, null, null, null, null)), (n()(),
            s._0(35, 0, null, null, 0, "img", [["src", "assets/images/parada/icon-parada.svg"]], null, null, null, null, null)), (n()(),
            s._21(-1, null, [" Parada provisoria"])), (n()(),
            s._21(-1, null, ["\n                    "])), (n()(),
            s._21(-1, null, ["\n                    "])), (n()(),
            s._0(39, 0, null, null, 4, "tbody", [], null, null, null, null, null)), (n()(),
            s._21(-1, null, ["\n                        "])), (n()(),
            s.V(16777216, null, null, 1, null, o)), s.Z(42, 802816, null, 0, c.j, [s.J, s.G, s.q], {
                ngForOf: [0, "ngForOf"]
            }, null), (n()(),
            s._21(-1, null, ["\n                    "])), (n()(),
            s._21(-1, null, ["\n                "])), (n()(),
            s._21(-1, null, ["\n            "])), (n()(),
            s._21(-1, null, ["\n\n        "]))], function(n, l) {
                var e = l.component;
                n(l, 13, 0, e.paradaDeshabilitada.link);
                n(l, 42, 0, e.paradaDeshabilitada.table)
            }, function(n, l) {
                var e = l.component;
                n(l, 2, 0, "link" != e.paradaDeshabilitada.type);
                n(l, 10, 0, e.paradaDeshabilitada.text);
                n(l, 16, 0, "table" != e.paradaDeshabilitada.type);
                n(l, 24, 0, "table" != e.paradaDeshabilitada.type)
            })
        }
        function u(n) {
            return s._23(0, [s._14(0, d.a, [p.a]), s._19(402653184, 1, {
                map: 0
            }), s._19(402653184, 2, {
                inputDestino_mapa: 0
            }), s._19(402653184, 3, {
                inputDestino_origen_destino: 0
            }), s._19(402653184, 4, {
                inputDestino_ir_caminando: 0
            }), s._19(402653184, 5, {
                inputDestino_ir_en_bus: 0
            }), s._19(402653184, 6, {
                inputOrigen_mapa: 0
            }), s._19(402653184, 7, {
                inputOrigen_origen_destino: 0
            }), s._19(402653184, 8, {
                inputOrigen_ir_caminando: 0
            }), s._19(402653184, 9, {
                inputOrigen_ir_en_bus: 0
            }), s._19(402653184, 10, {
                popupParadaDeshabilitada: 0
            }), s._19(402653184, 11, {
                popupParadaDeshabilitadaCloser: 0
            }), s._19(402653184, 12, {
                popupParadaDeshabilitadaContent: 0
            }), s._19(671088640, 13, {
                popupParadaDeshabilitadaLink: 0
            }), (n()(),
            s._0(14, 0, null, null, 281, "ion-header", [], null, null, null, null, null)), s.Z(15, 16384, null, 0, h.a, [m.a, s.j, s.A, [2, _.a]], null, null), (n()(),
            s._21(-1, null, ["\n    "])), (n()(),
            s._0(17, 0, null, null, 277, "ion-navbar", [["class", "toolbar"]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, f.b, f.a)), s.Z(18, 278528, null, 0, c.i, [s.q, s.r, s.j, s.B], {
                ngClass: [0, "ngClass"]
            }, null), s.Z(19, 49152, null, 0, g.a, [v.a, [2, _.a], [2, b.a], m.a, s.j, s.A], null, null), (n()(),
            s._21(-1, 3, ["\n\n        "])), (n()(),
            s._0(21, 0, null, 3, 98, "div", [["class", "mapa"]], null, null, null, null, null)), (n()(),
            s._21(-1, null, ["\n            "])), (n()(),
            s._0(23, 0, null, null, 0, "div", [["dragger", ""], ["id", "dragger"]], null, null, null, null, null)), (n()(),
            s._21(-1, null, ["\n            "])), (n()(),
            s._0(25, 0, null, null, 0, "img", [["alt", "Logo Intendencia de Montevideo"], ["class", "icon_montevideo"], ["src", "assets/images/IM-logo.png"]], null, [[null, "click"]], function(n, l, e) {
                var t = !0;
                if ("click" === l) {
                    t = !1 !== n.component.printDataToShare() && t
                }
                return t
            }, null, null)), (n()(),
            s._21(-1, null, ["\n            "])), (n()(),
            s._0(27, 0, null, null, 73, "div", [["class", "fields_container"]], null, null, null, null, null)), (n()(),
            s._21(-1, null, ["\n                "])), (n()(),
            s._0(29, 0, null, null, 21, "div", [["class", "cambiar_origen"]], null, null, null, null, null)), (n()(),
            s._21(-1, null, ["\n                    "])), (n()(),
            s._0(31, 0, null, null, 0, "img", [["alt", ""], ["class", "field-icon icon-origen"], ["src", "assets/images/icon/icon-origen.svg"]], [[8, "hidden", 0]], null, null, null, null)), (n()(),
            s._21(-1, null, ["\n                    "])), (n()(),
            s._0(33, 0, null, null, 1, "ion-spinner", [["alt", "Cargando opciones"], ["class", "field-icon icon-origen spinner-energized"], ["icon", "ripple"]], [[8, "hidden", 0], [2, "spinner-paused", null]], null, null, y.b, y.a)), s.Z(34, 114688, null, 0, S.a, [m.a, s.j, s.A], null, null), (n()(),
            s._21(-1, null, ["\n                    "])), (n()(),
            s._0(36, 0, [[6, 0], ["inputOrigen_mapa", 1]], null, 5, "input", [["aria-placeholder", "¿Desde dónde vas?"], ["class", "campo_origen"], ["placeholder", "¿Desde dónde vas?"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "focus"], [null, "keydown"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function(n, l, e) {
                var t = !0
                  , a = n.component;
                if ("input" === l) {
                    t = !1 !== s._12(n, 37)._handleInput(e.target.value) && t
                }
                if ("blur" === l) {
                    t = !1 !== s._12(n, 37).onTouched() && t
                }
                if ("compositionstart" === l) {
                    t = !1 !== s._12(n, 37)._compositionStart() && t
                }
                if ("compositionend" === l) {
                    t = !1 !== s._12(n, 37)._compositionEnd(e.target.value) && t
                }
                if ("ngModelChange" === l) {
                    t = !1 !== (a.homeState.inputOrigen = e) && t
                }
                if ("focus" === l) {
                    t = !1 !== a.onFocus(e, "inputOrigen") && t
                }
                if ("keydown" === l) {
                    t = !1 !== a.onInputChange(e, "inputOrigen") && t
                }
                return t
            }, null, null)), s.Z(37, 16384, null, 0, P.b, [s.B, s.j, [2, P.a]], null, null), s._17(1024, null, P.e, function(n) {
                return [n]
            }, [P.b]), s.Z(39, 671744, null, 0, P.h, [[8, null], [8, null], [8, null], [2, P.e]], {
                model: [0, "model"]
            }, {
                update: "ngModelChange"
            }), s._17(2048, null, P.f, null, [P.h]), s.Z(41, 16384, null, 0, P.g, [P.f], null, null), (n()(),
            s._21(-1, null, ["\n                    "])), (n()(),
            s._0(43, 0, null, null, 0, "div", [["class", "input-delete-button-bg"]], [[8, "hidden", 0]], null, null, null, null)), (n()(),
            s._21(-1, null, ["\n                    "])), (n()(),
            s._0(45, 0, null, null, 4, "button", [["aria-label", "Borrar origen"], ["class", "input-delete-button"]], [[8, "hidden", 0]], [[null, "click"]], function(n, l, e) {
                var t = !0;
                if ("click" === l) {
                    t = !1 !== n.component.borrarCampo("inputOrigen") && t
                }
                return t
            }, null, null)), (n()(),
            s._21(-1, null, ["\n                        "])), (n()(),
            s._0(47, 0, null, null, 1, "ion-icon", [["alt", ""], ["class", "input-delete-icon"], ["ios", "md-close"], ["md", "md-close"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), s.Z(48, 147456, null, 0, C.a, [m.a, s.j, s.A], {
                ios: [0, "ios"],
                md: [1, "md"]
            }, null), (n()(),
            s._21(-1, null, ["\n                    "])), (n()(),
            s._21(-1, null, ["\n                "])), (n()(),
            s._21(-1, null, ["\n                "])), (n()(),
            s._0(52, 0, null, null, 21, "div", [["class", "cambiar_destino"]], null, null, null, null, null)), (n()(),
            s._21(-1, null, ["\n                    "])), (n()(),
            s._0(54, 0, null, null, 0, "img", [["alt", ""], ["class", "field-icon icon-destino"], ["src", "assets/images/icon/icon-destino.svg"]], [[8, "hidden", 0]], null, null, null, null)), (n()(),
            s._21(-1, null, ["\n                    "])), (n()(),
            s._0(56, 0, null, null, 1, "ion-spinner", [["alt", "Cargando opciones"], ["class", "field-icon icon-destino spinner-energized"], ["icon", "ripple"]], [[8, "hidden", 0], [2, "spinner-paused", null]], null, null, y.b, y.a)), s.Z(57, 114688, null, 0, S.a, [m.a, s.j, s.A], null, null), (n()(),
            s._21(-1, null, ["\n                    "])), (n()(),
            s._0(59, 0, [[2, 0], ["inputDestino_mapa", 1]], null, 5, "input", [["aria-placeholder", "¿A dónde quieres ir?"], ["class", "campo_destino"], ["placeholder", "¿A dónde quieres ir?"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "focus"], [null, "keydown"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function(n, l, e) {
                var t = !0
                  , a = n.component;
                if ("input" === l) {
                    t = !1 !== s._12(n, 60)._handleInput(e.target.value) && t
                }
                if ("blur" === l) {
                    t = !1 !== s._12(n, 60).onTouched() && t
                }
                if ("compositionstart" === l) {
                    t = !1 !== s._12(n, 60)._compositionStart() && t
                }
                if ("compositionend" === l) {
                    t = !1 !== s._12(n, 60)._compositionEnd(e.target.value) && t
                }
                if ("ngModelChange" === l) {
                    t = !1 !== (a.homeState.inputDestino = e) && t
                }
                if ("focus" === l) {
                    t = !1 !== a.onFocus(e, "inputDestino") && t
                }
                if ("keydown" === l) {
                    t = !1 !== a.onInputChange(e, "inputDestino") && t
                }
                return t
            }, null, null)), s.Z(60, 16384, null, 0, P.b, [s.B, s.j, [2, P.a]], null, null), s._17(1024, null, P.e, function(n) {
                return [n]
            }, [P.b]), s.Z(62, 671744, null, 0, P.h, [[8, null], [8, null], [8, null], [2, P.e]], {
                model: [0, "model"]
            }, {
                update: "ngModelChange"
            }), s._17(2048, null, P.f, null, [P.h]), s.Z(64, 16384, null, 0, P.g, [P.f], null, null), (n()(),
            s._21(-1, null, ["\n                    "])), (n()(),
            s._0(66, 0, null, null, 0, "div", [["class", "input-delete-button-bg"]], [[8, "hidden", 0]], null, null, null, null)), (n()(),
            s._21(-1, null, ["\n                    "])), (n()(),
            s._0(68, 0, null, null, 4, "button", [["aria-label", "Borrar origen"], ["class", "input-delete-button"]], [[8, "hidden", 0]], [[null, "click"]], function(n, l, e) {
                var t = !0;
                if ("click" === l) {
                    t = !1 !== n.component.borrarCampo("inputDestino") && t
                }
                return t
            }, null, null)), (n()(),
            s._21(-1, null, ["\n                        "])), (n()(),
            s._0(70, 0, null, null, 1, "ion-icon", [["alt", ""], ["class", "input-delete-icon"], ["ios", "md-close"], ["md", "md-close"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), s.Z(71, 147456, null, 0, C.a, [m.a, s.j, s.A], {
                ios: [0, "ios"],
                md: [1, "md"]
            }, null), (n()(),
            s._21(-1, null, ["\n                    "])), (n()(),
            s._21(-1, null, ["\n                "])), (n()(),
            s._21(-1, null, ["\n                "])), (n()(),
            s._0(75, 0, null, null, 17, "div", [["class", "botones_comoir"]], null, null, null, null, null)), (n()(),
            s._21(-1, null, ["\n                    "])), (n()(),
            s._21(-1, null, ["\n                    "])), (n()(),
            s._0(78, 0, null, null, 5, "button", [["class", "btn-ir-caminando"]], null, [[null, "click"]], function(n, l, e) {
                var t = !0;
                if ("click" === l) {
                    t = !1 !== n.component.irCaminando() && t
                }
                return t
            }, null, null)), (n()(),
            s._21(-1, null, ["\n                        "])), (n()(),
            s._0(80, 0, null, null, 0, "img", [["alt", ""], ["class", "icon-ir-caminando"], ["src", "assets/images/button/icon-a-pie.svg"]], null, null, null, null, null)), (n()(),
            s._0(81, 0, null, null, 1, "span", [], null, null, null, null, null)), (n()(),
            s._21(-1, null, [" Ir a pie"])), (n()(),
            s._21(-1, null, ["\n                    "])), (n()(),
            s._21(-1, null, ["\n                    "])), (n()(),
            s._0(85, 0, null, null, 5, "button", [["class", "btn-ir-en-bus"]], null, [[null, "click"]], function(n, l, e) {
                var t = !0;
                if ("click" === l) {
                    t = !1 !== n.component.irEnBus() && t
                }
                return t
            }, null, null)), (n()(),
            s._21(-1, null, ["\n                        "])), (n()(),
            s._0(87, 0, null, null, 0, "img", [["alt", ""], ["class", "icon-ir-en-bus"], ["src", "assets/images/button/icon-en-bus.svg"]], null, null, null, null, null)), (n()(),
            s._0(88, 0, null, null, 1, "span", [], null, null, null, null, null)), (n()(),
            s._21(-1, null, [" Ir en bus"])), (n()(),
            s._21(-1, null, ["\n                    "])), (n()(),
            s._21(-1, null, ["\n                    "])), (n()(),
            s._21(-1, null, ["\n                "])), (n()(),
            s._21(-1, null, ["\n                "])), (n()(),
            s._0(94, 0, null, null, 5, "div", [["class", "switch-arrows"]], [[8, "hidden", 0]], [[null, "click"]], function(n, l, e) {
                var t = !0;
                if ("click" === l) {
                    t = !1 !== n.component.switchFields() && t
                }
                return t
            }, null, null)), (n()(),
            s._21(-1, null, ["\n                    "])), (n()(),
            s._0(96, 0, null, null, 0, "div", [["class", "switch-arrows-bg"]], null, null, null, null, null)), (n()(),
            s._21(-1, null, ["\n                    "])), (n()(),
            s._0(98, 0, null, null, 0, "img", [["alt", "Intercambiar origen y destino"], ["class", "side_icon"], ["src", "assets/images/button/switch_inputs.png"]], null, null, null, null, null)), (n()(),
            s._21(-1, null, ["\n                "])), (n()(),
            s._21(-1, null, ["\n            "])), (n()(),
            s._21(-1, null, ["\n            "])), (n()(),
            s._0(102, 0, null, null, 0, "br", [], null, null, null, null, null)), (n()(),
            s._21(-1, null, ["\n            "])), (n()(),
            s._0(104, 0, null, null, 7, "button", [["class", "sidemenu-btn"], ["menuToggle", "leftMenu"]], [[8, "hidden", 0]], [[null, "click"]], function(n, l, e) {
                var t = !0
                  , a = n.component;
                if ("click" === l) {
                    t = !1 !== s._12(n, 105).toggle() && t
                }
                if ("click" === l) {
                    t = !1 !== a.closeAutocomplete() && t
                }
                return t
            }, null, null)), s.Z(105, 1064960, null, 0, w.a, [E.a, [2, _.a], [2, O.a], [2, g.a]], {
                menuToggle: [0, "menuToggle"]
            }, null), s.Z(106, 16384, null, 1, A.a, [m.a, s.j, s.A, [2, x.a], [2, g.a]], null, null), s._19(603979776, 14, {
                _buttons: 1
            }), (n()(),
            s._21(-1, null, ["\n                "])), (n()(),
            s._21(-1, null, ["\n                "])), (n()(),
            s._0(110, 0, null, null, 0, "img", [["alt", "toggle side menu"], ["class", "side_icon"], ["src", "assets/images/azul/side-menu.png"]], null, null, null, null, null)), (n()(),
            s._21(-1, null, ["\n            "])), (n()(),
            s._21(-1, null, ["\n            "])), (n()(),
            s._0(113, 0, null, null, 0, "br", [], null, null, null, null, null)), (n()(),
            s._21(-1, null, ["\n            "])), (n()(),
            s._0(115, 0, null, null, 3, "button", [["class", "compartir"]], null, [[null, "click"]], function(n, l, e) {
                var t = !0;
                if ("click" === l) {
                    t = !1 !== n.component.share() && t
                }
                return t
            }, null, null)), (n()(),
            s._21(-1, null, ["\n                "])), (n()(),
            s._0(117, 0, null, null, 0, "img", [["alt", "Compartir"], ["class", "side_icon"], ["src", "assets/images/button/share.png"]], null, null, null, null, null)), (n()(),
            s._21(-1, null, ["\n            "])), (n()(),
            s._21(-1, null, ["\n        "])), (n()(),
            s._21(-1, 3, ["\n\n        "])), (n()(),
            s._0(121, 0, null, 3, 65, "div", [["class", "ir_caminando"]], null, null, null, null, null)), (n()(),
            s._21(-1, null, ["\n            "])), (n()(),
            s._0(123, 0, null, null, 3, "button", [["class", "btn-back"]], null, [[null, "click"]], function(n, l, e) {
                var t = !0;
                if ("click" === l) {
                    t = !1 !== n.component.header.goBack() && t
                }
                return t
            }, null, null)), (n()(),
            s._21(-1, null, ["\n                "])), (n()(),
            s._0(125, 0, null, null, 0, "img", [["alt", "Atrás"], ["class", "icon-back"], ["src", "assets/images/button/icono_Atras.png"]], null, null, null, null, null)), (n()(),
            s._21(-1, null, ["\n            "])), (n()(),
            s._21(-1, null, ["\n            "])), (n()(),
            s._0(128, 0, null, null, 54, "div", [["class", "fields_container"]], null, null, null, null, null)), (n()(),
            s._21(-1, null, ["\n                "])), (n()(),
            s._0(130, 0, null, null, 21, "div", [["class", "cambiar_origen"]], null, null, null, null, null)), (n()(),
            s._21(-1, null, ["\n                    "])), (n()(),
            s._0(132, 0, null, null, 0, "img", [["alt", ""], ["class", "field-icon icon-origen"], ["src", "assets/images/icon/icon-origen.svg"]], [[8, "hidden", 0]], null, null, null, null)), (n()(),
            s._21(-1, null, ["\n                    "])), (n()(),
            s._0(134, 0, null, null, 1, "ion-spinner", [["alt", "Cargando opciones"], ["class", "field-icon icon-origen spinner-energized"], ["icon", "ripple"]], [[8, "hidden", 0], [2, "spinner-paused", null]], null, null, y.b, y.a)), s.Z(135, 114688, null, 0, S.a, [m.a, s.j, s.A], null, null), (n()(),
            s._21(-1, null, ["\n                    "])), (n()(),
            s._0(137, 0, [[8, 0], ["inputOrigen_ir_caminando", 1]], null, 5, "input", [["aria-placeholder", "¿Desde dónde vas?"], ["class", "campo_origen"], ["placeholder", "¿Desde dónde vas?"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "focus"], [null, "keydown"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function(n, l, e) {
                var t = !0
                  , a = n.component;
                if ("input" === l) {
                    t = !1 !== s._12(n, 138)._handleInput(e.target.value) && t
                }
                if ("blur" === l) {
                    t = !1 !== s._12(n, 138).onTouched() && t
                }
                if ("compositionstart" === l) {
                    t = !1 !== s._12(n, 138)._compositionStart() && t
                }
                if ("compositionend" === l) {
                    t = !1 !== s._12(n, 138)._compositionEnd(e.target.value) && t
                }
                if ("ngModelChange" === l) {
                    t = !1 !== (a.homeState.inputOrigen = e) && t
                }
                if ("focus" === l) {
                    t = !1 !== a.onFocus(e, "inputOrigen") && t
                }
                if ("keydown" === l) {
                    t = !1 !== a.onInputChange(e, "inputOrigen") && t
                }
                return t
            }, null, null)), s.Z(138, 16384, null, 0, P.b, [s.B, s.j, [2, P.a]], null, null), s._17(1024, null, P.e, function(n) {
                return [n]
            }, [P.b]), s.Z(140, 671744, null, 0, P.h, [[8, null], [8, null], [8, null], [2, P.e]], {
                model: [0, "model"]
            }, {
                update: "ngModelChange"
            }), s._17(2048, null, P.f, null, [P.h]), s.Z(142, 16384, null, 0, P.g, [P.f], null, null), (n()(),
            s._21(-1, null, ["\n                    "])), (n()(),
            s._0(144, 0, null, null, 0, "div", [["class", "input-delete-button-bg"]], [[8, "hidden", 0]], null, null, null, null)), (n()(),
            s._21(-1, null, ["\n                    "])), (n()(),
            s._0(146, 0, null, null, 4, "button", [["aria-label", "Borrar origen"], ["class", "input-delete-button"]], [[8, "hidden", 0]], [[null, "click"]], function(n, l, e) {
                var t = !0;
                if ("click" === l) {
                    t = !1 !== n.component.borrarCampo("inputOrigen") && t
                }
                return t
            }, null, null)), (n()(),
            s._21(-1, null, ["\n                        "])), (n()(),
            s._0(148, 0, null, null, 1, "ion-icon", [["alt", ""], ["class", "input-delete-icon"], ["ios", "md-close"], ["md", "md-close"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), s.Z(149, 147456, null, 0, C.a, [m.a, s.j, s.A], {
                ios: [0, "ios"],
                md: [1, "md"]
            }, null), (n()(),
            s._21(-1, null, ["\n                    "])), (n()(),
            s._21(-1, null, ["\n                "])), (n()(),
            s._21(-1, null, ["\n                "])), (n()(),
            s._0(153, 0, null, null, 21, "div", [["class", "cambiar_destino"]], null, null, null, null, null)), (n()(),
            s._21(-1, null, ["\n                    "])), (n()(),
            s._0(155, 0, null, null, 0, "img", [["class", "field-icon icon-destino"], ["src", "assets/images/icon/icon-destino.svg"]], [[8, "hidden", 0]], null, null, null, null)), (n()(),
            s._21(-1, null, ["\n                    "])), (n()(),
            s._0(157, 0, null, null, 1, "ion-spinner", [["class", "field-icon icon-destino spinner-energized"], ["icon", "ripple"]], [[8, "hidden", 0], [2, "spinner-paused", null]], null, null, y.b, y.a)), s.Z(158, 114688, null, 0, S.a, [m.a, s.j, s.A], null, null), (n()(),
            s._21(-1, null, ["\n                    "])), (n()(),
            s._0(160, 0, [[4, 0], ["inputDestino_ir_caminando", 1]], null, 5, "input", [["aria-placeholder", "¿A dónde quieres ir?"], ["class", "campo_destino"], ["placeholder", "¿A dónde quieres ir?"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "focus"], [null, "keydown"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function(n, l, e) {
                var t = !0
                  , a = n.component;
                if ("input" === l) {
                    t = !1 !== s._12(n, 161)._handleInput(e.target.value) && t
                }
                if ("blur" === l) {
                    t = !1 !== s._12(n, 161).onTouched() && t
                }
                if ("compositionstart" === l) {
                    t = !1 !== s._12(n, 161)._compositionStart() && t
                }
                if ("compositionend" === l) {
                    t = !1 !== s._12(n, 161)._compositionEnd(e.target.value) && t
                }
                if ("ngModelChange" === l) {
                    t = !1 !== (a.homeState.inputDestino = e) && t
                }
                if ("focus" === l) {
                    t = !1 !== a.onFocus(e, "inputDestino") && t
                }
                if ("keydown" === l) {
                    t = !1 !== a.onInputChange(e, "inputDestino") && t
                }
                return t
            }, null, null)), s.Z(161, 16384, null, 0, P.b, [s.B, s.j, [2, P.a]], null, null), s._17(1024, null, P.e, function(n) {
                return [n]
            }, [P.b]), s.Z(163, 671744, null, 0, P.h, [[8, null], [8, null], [8, null], [2, P.e]], {
                model: [0, "model"]
            }, {
                update: "ngModelChange"
            }), s._17(2048, null, P.f, null, [P.h]), s.Z(165, 16384, null, 0, P.g, [P.f], null, null), (n()(),
            s._21(-1, null, ["\n                    "])), (n()(),
            s._0(167, 0, null, null, 0, "div", [["class", "input-delete-button-bg"]], [[8, "hidden", 0]], null, null, null, null)), (n()(),
            s._21(-1, null, ["\n                    "])), (n()(),
            s._0(169, 0, null, null, 4, "button", [["aria-label", "Borrar destino"], ["class", "input-delete-button"]], [[8, "hidden", 0]], [[null, "click"]], function(n, l, e) {
                var t = !0;
                if ("click" === l) {
                    t = !1 !== n.component.borrarCampo("inputDestino") && t
                }
                return t
            }, null, null)), (n()(),
            s._21(-1, null, ["\n                        "])), (n()(),
            s._0(171, 0, null, null, 1, "ion-icon", [["alt", ""], ["class", "input-delete-icon"], ["ios", "md-close"], ["md", "md-close"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), s.Z(172, 147456, null, 0, C.a, [m.a, s.j, s.A], {
                ios: [0, "ios"],
                md: [1, "md"]
            }, null), (n()(),
            s._21(-1, null, ["\n                    "])), (n()(),
            s._21(-1, null, ["\n                "])), (n()(),
            s._21(-1, null, ["\n                "])), (n()(),
            s._0(176, 0, null, null, 5, "div", [["class", "switch-arrows"]], [[8, "hidden", 0]], [[null, "click"]], function(n, l, e) {
                var t = !0;
                if ("click" === l) {
                    t = !1 !== n.component.switchFields() && t
                }
                return t
            }, null, null)), (n()(),
            s._21(-1, null, ["\n                    "])), (n()(),
            s._0(178, 0, null, null, 0, "div", [["class", "switch-arrows-bg"]], null, null, null, null, null)), (n()(),
            s._21(-1, null, ["\n                    "])), (n()(),
            s._0(180, 0, null, null, 0, "img", [["alt", "Intercambiar origen y destino"], ["class", "side_icon"], ["src", "assets/images/button/switch_inputs.png"]], null, null, null, null, null)), (n()(),
            s._21(-1, null, ["\n                "])), (n()(),
            s._21(-1, null, ["                \n            "])), (n()(),
            s._21(-1, null, ["\n            "])), (n()(),
            s._0(184, 0, null, null, 0, "br", [], null, null, null, null, null)), (n()(),
            s._21(-1, null, ["\n            "])), (n()(),
            s._21(-1, null, ["\n        "])), (n()(),
            s._21(-1, 3, ["\n\n        "])), (n()(),
            s._0(188, 0, null, 3, 65, "div", [["class", "ir_en_bus"]], null, null, null, null, null)), (n()(),
            s._21(-1, null, ["\n            "])), (n()(),
            s._0(190, 0, null, null, 3, "button", [["class", "btn-back"]], null, [[null, "click"]], function(n, l, e) {
                var t = !0;
                if ("click" === l) {
                    t = !1 !== n.component.header.goBack() && t
                }
                return t
            }, null, null)), (n()(),
            s._21(-1, null, ["\n                "])), (n()(),
            s._0(192, 0, null, null, 0, "img", [["alt", "Atrás"], ["class", "icon-back"], ["src", "assets/images/button/icono_Atras.png"]], null, null, null, null, null)), (n()(),
            s._21(-1, null, ["\n            "])), (n()(),
            s._21(-1, null, ["\n            "])), (n()(),
            s._0(195, 0, null, null, 54, "div", [["class", "fields_container"]], null, null, null, null, null)), (n()(),
            s._21(-1, null, ["\n                "])), (n()(),
            s._0(197, 0, null, null, 21, "div", [["class", "cambiar_origen"]], null, null, null, null, null)), (n()(),
            s._21(-1, null, ["\n                    "])), (n()(),
            s._0(199, 0, null, null, 0, "img", [["class", "field-icon icon-origen"], ["src", "assets/images/icon/icon-origen.svg"]], [[8, "hidden", 0]], null, null, null, null)), (n()(),
            s._21(-1, null, ["\n                    "])), (n()(),
            s._0(201, 0, null, null, 1, "ion-spinner", [["class", "field-icon icon-origen spinner-energized"], ["icon", "ripple"]], [[8, "hidden", 0], [2, "spinner-paused", null]], null, null, y.b, y.a)), s.Z(202, 114688, null, 0, S.a, [m.a, s.j, s.A], null, null), (n()(),
            s._21(-1, null, ["\n                    "])), (n()(),
            s._0(204, 0, [[9, 0], ["inputOrigen_ir_en_bus", 1]], null, 5, "input", [["aria-placeholder", "¿Desde dónde vas?"], ["class", "campo_origen"], ["placeholder", "¿Desde dónde vas?"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "focus"], [null, "keydown"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function(n, l, e) {
                var t = !0
                  , a = n.component;
                if ("input" === l) {
                    t = !1 !== s._12(n, 205)._handleInput(e.target.value) && t
                }
                if ("blur" === l) {
                    t = !1 !== s._12(n, 205).onTouched() && t
                }
                if ("compositionstart" === l) {
                    t = !1 !== s._12(n, 205)._compositionStart() && t
                }
                if ("compositionend" === l) {
                    t = !1 !== s._12(n, 205)._compositionEnd(e.target.value) && t
                }
                if ("ngModelChange" === l) {
                    t = !1 !== (a.homeState.inputOrigen = e) && t
                }
                if ("focus" === l) {
                    t = !1 !== a.onFocus(e, "inputOrigen") && t
                }
                if ("keydown" === l) {
                    t = !1 !== a.onInputChange(e, "inputOrigen") && t
                }
                return t
            }, null, null)), s.Z(205, 16384, null, 0, P.b, [s.B, s.j, [2, P.a]], null, null), s._17(1024, null, P.e, function(n) {
                return [n]
            }, [P.b]), s.Z(207, 671744, null, 0, P.h, [[8, null], [8, null], [8, null], [2, P.e]], {
                model: [0, "model"]
            }, {
                update: "ngModelChange"
            }), s._17(2048, null, P.f, null, [P.h]), s.Z(209, 16384, null, 0, P.g, [P.f], null, null), (n()(),
            s._21(-1, null, ["\n                    "])), (n()(),
            s._0(211, 0, null, null, 0, "div", [["class", "input-delete-button-bg"]], [[8, "hidden", 0]], null, null, null, null)), (n()(),
            s._21(-1, null, ["\n                    "])), (n()(),
            s._0(213, 0, null, null, 4, "button", [["aria-label", "Borrar origen"], ["class", "input-delete-button"]], [[8, "hidden", 0]], [[null, "click"]], function(n, l, e) {
                var t = !0;
                if ("click" === l) {
                    t = !1 !== n.component.borrarCampo("inputOrigen") && t
                }
                return t
            }, null, null)), (n()(),
            s._21(-1, null, ["\n                        "])), (n()(),
            s._0(215, 0, null, null, 1, "ion-icon", [["alt", ""], ["class", "input-delete-icon"], ["ios", "md-close"], ["md", "md-close"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), s.Z(216, 147456, null, 0, C.a, [m.a, s.j, s.A], {
                ios: [0, "ios"],
                md: [1, "md"]
            }, null), (n()(),
            s._21(-1, null, ["\n                    "])), (n()(),
            s._21(-1, null, ["\n                "])), (n()(),
            s._21(-1, null, ["\n                "])), (n()(),
            s._0(220, 0, null, null, 21, "div", [["class", "cambiar_destino"]], null, null, null, null, null)), (n()(),
            s._21(-1, null, ["\n                    "])), (n()(),
            s._0(222, 0, null, null, 0, "img", [["class", "field-icon icon-destino"], ["src", "assets/images/icon/icon-destino.svg"]], [[8, "hidden", 0]], null, null, null, null)), (n()(),
            s._21(-1, null, ["\n                    "])), (n()(),
            s._0(224, 0, null, null, 1, "ion-spinner", [["class", "field-icon icon-destino spinner-energized"], ["icon", "ripple"]], [[8, "hidden", 0], [2, "spinner-paused", null]], null, null, y.b, y.a)), s.Z(225, 114688, null, 0, S.a, [m.a, s.j, s.A], null, null), (n()(),
            s._21(-1, null, ["\n                    "])), (n()(),
            s._0(227, 0, [[5, 0], ["inputDestino_ir_en_bus", 1]], null, 5, "input", [["aria-placeholder", "¿A dónde quieres ir?"], ["class", "campo_destino"], ["placeholder", "¿A dónde quieres ir?"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "focus"], [null, "keydown"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function(n, l, e) {
                var t = !0
                  , a = n.component;
                if ("input" === l) {
                    t = !1 !== s._12(n, 228)._handleInput(e.target.value) && t
                }
                if ("blur" === l) {
                    t = !1 !== s._12(n, 228).onTouched() && t
                }
                if ("compositionstart" === l) {
                    t = !1 !== s._12(n, 228)._compositionStart() && t
                }
                if ("compositionend" === l) {
                    t = !1 !== s._12(n, 228)._compositionEnd(e.target.value) && t
                }
                if ("ngModelChange" === l) {
                    t = !1 !== (a.homeState.inputDestino = e) && t
                }
                if ("focus" === l) {
                    t = !1 !== a.onFocus(e, "inputDestino") && t
                }
                if ("keydown" === l) {
                    t = !1 !== a.onInputChange(e, "inputDestino") && t
                }
                return t
            }, null, null)), s.Z(228, 16384, null, 0, P.b, [s.B, s.j, [2, P.a]], null, null), s._17(1024, null, P.e, function(n) {
                return [n]
            }, [P.b]), s.Z(230, 671744, null, 0, P.h, [[8, null], [8, null], [8, null], [2, P.e]], {
                model: [0, "model"]
            }, {
                update: "ngModelChange"
            }), s._17(2048, null, P.f, null, [P.h]), s.Z(232, 16384, null, 0, P.g, [P.f], null, null), (n()(),
            s._21(-1, null, ["\n                    "])), (n()(),
            s._0(234, 0, null, null, 0, "div", [["class", "input-delete-button-bg"]], [[8, "hidden", 0]], null, null, null, null)), (n()(),
            s._21(-1, null, ["\n                    "])), (n()(),
            s._0(236, 0, null, null, 4, "button", [["aria-label", "Borrar destino"], ["class", "input-delete-button"]], [[8, "hidden", 0]], [[null, "click"]], function(n, l, e) {
                var t = !0;
                if ("click" === l) {
                    t = !1 !== n.component.borrarCampo("inputDestino") && t
                }
                return t
            }, null, null)), (n()(),
            s._21(-1, null, ["\n                        "])), (n()(),
            s._0(238, 0, null, null, 1, "ion-icon", [["alt", ""], ["class", "input-delete-icon"], ["ios", "md-close"], ["md", "md-close"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), s.Z(239, 147456, null, 0, C.a, [m.a, s.j, s.A], {
                ios: [0, "ios"],
                md: [1, "md"]
            }, null), (n()(),
            s._21(-1, null, ["\n                    "])), (n()(),
            s._21(-1, null, ["\n                "])), (n()(),
            s._21(-1, null, ["\n                "])), (n()(),
            s._0(243, 0, null, null, 5, "div", [["class", "switch-arrows"]], [[8, "hidden", 0]], [[null, "click"]], function(n, l, e) {
                var t = !0;
                if ("click" === l) {
                    t = !1 !== n.component.switchFields() && t
                }
                return t
            }, null, null)), (n()(),
            s._21(-1, null, ["\n                    "])), (n()(),
            s._0(245, 0, null, null, 0, "div", [["class", "switch-arrows-bg"]], null, null, null, null, null)), (n()(),
            s._21(-1, null, ["\n                    "])), (n()(),
            s._0(247, 0, null, null, 0, "img", [["alt", "Intercambiar origen y destino"], ["class", "side_icon"], ["src", "assets/images/button/switch_inputs.png"]], null, null, null, null, null)), (n()(),
            s._21(-1, null, ["\n                "])), (n()(),
            s._21(-1, null, ["                \n            "])), (n()(),
            s._21(-1, null, ["\n            "])), (n()(),
            s._0(251, 0, null, null, 0, "br", [], null, null, null, null, null)), (n()(),
            s._21(-1, null, ["\n            "])), (n()(),
            s._21(-1, null, ["\n        "])), (n()(),
            s._21(-1, 3, ["\n\n        "])), (n()(),
            s._0(255, 0, null, 3, 10, "div", [["class", "parada"]], null, null, null, null, null)), (n()(),
            s._21(-1, null, ["\n            "])), (n()(),
            s._0(257, 0, null, null, 3, "button", [["class", "btn-back"]], null, [[null, "click"]], function(n, l, e) {
                var t = !0;
                if ("click" === l) {
                    t = !1 !== n.component.header.goBack() && t
                }
                return t
            }, null, null)), (n()(),
            s._21(-1, null, ["\n                "])), (n()(),
            s._0(259, 0, null, null, 0, "img", [["alt", "Atrás"], ["class", "icon-back"], ["src", "assets/images/button/icono_Atras.png"]], null, null, null, null, null)), (n()(),
            s._21(-1, null, ["\n            "])), (n()(),
            s._21(-1, null, ["\n            "])), (n()(),
            s._0(262, 0, null, null, 2, "span", [["class", "title-label text-ellipsis"]], null, null, null, null, null)), (n()(),
            s._21(263, null, ["", ""])), s._16(264, 1), (n()(),
            s._21(-1, null, ["\n        "])), (n()(),
            s._21(-1, 3, ["\n\n        "])), (n()(),
            s._0(267, 0, null, 3, 12, "div", [["class", "destino"]], null, null, null, null, null)), (n()(),
            s._21(-1, null, ["\n            "])), (n()(),
            s._0(269, 0, null, null, 3, "button", [["class", "btn-back"]], null, [[null, "click"]], function(n, l, e) {
                var t = !0;
                if ("click" === l) {
                    t = !1 !== n.component.header.goBack() && t
                }
                return t
            }, null, null)), (n()(),
            s._21(-1, null, ["\n                "])), (n()(),
            s._0(271, 0, null, null, 0, "img", [["alt", "Atrás"], ["class", "icon-back"], ["src", "assets/images/button/icono_Atras.png"]], null, null, null, null, null)), (n()(),
            s._21(-1, null, ["\n            "])), (n()(),
            s._21(-1, null, ["\n            "])), (n()(),
            s._0(274, 0, null, null, 0, "img", [["alt", "Destino"], ["class", "icon-destino"], ["src", "assets/images/icon/icon-destino.svg"]], null, null, null, null, null)), (n()(),
            s._21(-1, null, ["\n            "])), (n()(),
            s._0(276, 0, null, null, 2, "span", [["class", "title-label text-ellipsis"]], null, null, null, null, null)), (n()(),
            s._21(277, null, ["", ""])), s._16(278, 1), (n()(),
            s._21(-1, null, ["\n        "])), (n()(),
            s._21(-1, 3, ["\n\n        "])), (n()(),
            s._0(281, 0, null, 3, 12, "div", [["class", "tocar_mapa"]], null, null, null, null, null)), (n()(),
            s._21(-1, null, ["\n            "])), (n()(),
            s._0(283, 0, null, null, 0, "img", [["alt", "Toque un punto del mapa"], ["class", "icon-destino"]], [[8, "src", 4]], null, null, null, null)), (n()(),
            s._21(-1, null, ["\n            "])), (n()(),
            s._0(285, 0, null, null, 1, "span", [["class", "title-label text-ellipsis"]], null, null, null, null, null)), (n()(),
            s._21(-1, null, ["Toque un punto en el mapa"])), (n()(),
            s._21(-1, null, ["\n            "])), (n()(),
            s._0(288, 0, null, null, 4, "button", [["aria-label", "Cerrar y volver"], ["class", "cerrar"]], null, [[null, "click"]], function(n, l, e) {
                var t = !0;
                if ("click" === l) {
                    t = !1 !== n.component.header.goBack() && t
                }
                return t
            }, null, null)), (n()(),
            s._21(-1, null, ["\n                "])), (n()(),
            s._0(290, 0, null, null, 1, "ion-icon", [["name", "close"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), s.Z(291, 147456, null, 0, C.a, [m.a, s.j, s.A], {
                name: [0, "name"]
            }, null), (n()(),
            s._21(-1, null, ["\n            "])), (n()(),
            s._21(-1, null, ["\n        "])), (n()(),
            s._21(-1, 3, ["\n\n    "])), (n()(),
            s._21(-1, null, ["\n\n"])), (n()(),
            s._21(-1, null, ["\n\n\n"])), (n()(),
            s._0(297, 0, null, null, 20, "ion-content", [], [[2, "statusbar-padding", null], [2, "has-refresher", null]], [[null, "press"]], function(n, l, e) {
                var t = !0;
                if ("press" === l) {
                    t = !1 !== n.component.onPressEvent(e) && t
                }
                return t
            }, I.b, I.a)), s.Z(298, 278528, null, 0, c.i, [s.q, s.r, s.j, s.B], {
                ngClass: [0, "ngClass"]
            }, null), s.Z(299, 4374528, null, 0, R.a, [m.a, D.a, T.a, s.j, s.A, v.a, k.a, s.v, [2, _.a], [2, b.a]], null, null), (n()(),
            s._21(-1, 1, ["\n    "])), (n()(),
            s._0(301, 0, [[1, 0], ["map", 1]], 0, 0, "div", [["class", "map"], ["id", "map"], ["ion-fixed", ""]], null, null, null, null, null)), (n()(),
            s._21(-1, 1, ["\n    \n    "])), (n()(),
            s._0(303, 0, null, 0, 2, "div", [["class", "drop-down-menu"], ["ion-fixed", ""]], [[8, "hidden", 0]], null, null, null, null)), (n()(),
            s._21(-1, null, ["\n    "])), (n()(),
            s._21(-1, null, ["\n    "])), (n()(),
            s._21(-1, 1, ["\n    \n    "])), (n()(),
            s._21(-1, 1, ["\n    "])), (n()(),
            s.V(16777216, null, 0, 1, null, a)), s.Z(309, 16384, null, 0, c.k, [s.J, s.G], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            s._21(-1, 1, ["\n    \n    "])), (n()(),
            s._21(-1, 1, ["\n    "])), (n()(),
            s._0(312, 0, [[10, 0], ["popupParadaDeshabilitada", 1]], 1, 4, "div", [["class", "ol-popup"], ["id", "popupParadaDeshabilitada"]], null, null, null, null, null)), (n()(),
            s._21(-1, null, ["\n        "])), (n()(),
            s.V(16777216, null, null, 1, null, r)), s.Z(315, 16384, null, 0, c.k, [s.J, s.G], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            s._21(-1, null, ["\n    "])), (n()(),
            s._21(-1, 1, ["\n\n"])), (n()(),
            s._21(-1, null, ["\n"]))], function(n, l) {
                var e = l.component;
                n(l, 18, 0, e.header.ion_navbar_class),
                n(l, 34, 0);
                n(l, 39, 0, e.homeState.inputOrigen);
                n(l, 48, 0, "md-close", "md-close"),
                n(l, 57, 0);
                n(l, 62, 0, e.homeState.inputDestino);
                n(l, 71, 0, "md-close", "md-close");
                n(l, 105, 0, "leftMenu"),
                n(l, 135, 0);
                n(l, 140, 0, e.homeState.inputOrigen);
                n(l, 149, 0, "md-close", "md-close"),
                n(l, 158, 0);
                n(l, 163, 0, e.homeState.inputDestino);
                n(l, 172, 0, "md-close", "md-close"),
                n(l, 202, 0);
                n(l, 207, 0, e.homeState.inputOrigen);
                n(l, 216, 0, "md-close", "md-close"),
                n(l, 225, 0);
                n(l, 230, 0, e.homeState.inputDestino);
                n(l, 239, 0, "md-close", "md-close");
                n(l, 291, 0, "close");
                n(l, 298, 0, e.header.ion_navbar_class + " " + e.modalState + " " + e.mode + " " + e.swipeState + " " + e.busesStatus.getGlobalStatus());
                n(l, 309, 0, e.busesStatus.ready);
                n(l, 315, 0, e.paradaDeshabilitada)
            }, function(n, l) {
                var e = l.component;
                n(l, 17, 0, s._12(l, 19)._hidden, s._12(l, 19)._sbPadding);
                n(l, 31, 0, e.inputOrigenSpinner);
                n(l, 33, 0, !e.inputOrigenSpinner, s._12(l, 34)._paused);
                n(l, 36, 0, s._12(l, 41).ngClassUntouched, s._12(l, 41).ngClassTouched, s._12(l, 41).ngClassPristine, s._12(l, 41).ngClassDirty, s._12(l, 41).ngClassValid, s._12(l, 41).ngClassInvalid, s._12(l, 41).ngClassPending);
                n(l, 43, 0, !e.homeState.inputOrigen || !e.inputOrigenEditing);
                n(l, 45, 0, !e.homeState.inputOrigen || !e.inputOrigenEditing);
                n(l, 47, 0, s._12(l, 48)._hidden);
                n(l, 54, 0, e.inputDestinoSpinner);
                n(l, 56, 0, !e.inputDestinoSpinner, s._12(l, 57)._paused);
                n(l, 59, 0, s._12(l, 64).ngClassUntouched, s._12(l, 64).ngClassTouched, s._12(l, 64).ngClassPristine, s._12(l, 64).ngClassDirty, s._12(l, 64).ngClassValid, s._12(l, 64).ngClassInvalid, s._12(l, 64).ngClassPending);
                n(l, 66, 0, !e.homeState.inputDestino || !e.inputDestinoEditing);
                n(l, 68, 0, !e.homeState.inputDestino || !e.inputDestinoEditing);
                n(l, 70, 0, s._12(l, 71)._hidden);
                n(l, 94, 0, e.inputDestinoEditing || e.inputOrigenEditing);
                n(l, 104, 0, s._12(l, 105).isHidden);
                n(l, 132, 0, e.inputOrigenSpinner);
                n(l, 134, 0, !e.inputOrigenSpinner, s._12(l, 135)._paused);
                n(l, 137, 0, s._12(l, 142).ngClassUntouched, s._12(l, 142).ngClassTouched, s._12(l, 142).ngClassPristine, s._12(l, 142).ngClassDirty, s._12(l, 142).ngClassValid, s._12(l, 142).ngClassInvalid, s._12(l, 142).ngClassPending);
                n(l, 144, 0, !e.homeState.inputOrigen || !e.inputOrigenEditing);
                n(l, 146, 0, !e.homeState.inputOrigen || !e.inputOrigenEditing);
                n(l, 148, 0, s._12(l, 149)._hidden);
                n(l, 155, 0, e.inputDestinoSpinner);
                n(l, 157, 0, !e.inputDestinoSpinner, s._12(l, 158)._paused);
                n(l, 160, 0, s._12(l, 165).ngClassUntouched, s._12(l, 165).ngClassTouched, s._12(l, 165).ngClassPristine, s._12(l, 165).ngClassDirty, s._12(l, 165).ngClassValid, s._12(l, 165).ngClassInvalid, s._12(l, 165).ngClassPending);
                n(l, 167, 0, !e.homeState.inputDestino || !e.inputDestinoEditing);
                n(l, 169, 0, !e.homeState.inputDestino || !e.inputDestinoEditing);
                n(l, 171, 0, s._12(l, 172)._hidden);
                n(l, 176, 0, e.inputDestinoEditing || e.inputOrigenEditing);
                n(l, 199, 0, e.inputOrigenSpinner);
                n(l, 201, 0, !e.inputOrigenSpinner, s._12(l, 202)._paused);
                n(l, 204, 0, s._12(l, 209).ngClassUntouched, s._12(l, 209).ngClassTouched, s._12(l, 209).ngClassPristine, s._12(l, 209).ngClassDirty, s._12(l, 209).ngClassValid, s._12(l, 209).ngClassInvalid, s._12(l, 209).ngClassPending);
                n(l, 211, 0, !e.homeState.inputOrigen || !e.inputOrigenEditing);
                n(l, 213, 0, !e.homeState.inputOrigen || !e.inputOrigenEditing);
                n(l, 215, 0, s._12(l, 216)._hidden);
                n(l, 222, 0, e.inputDestinoSpinner);
                n(l, 224, 0, !e.inputDestinoSpinner, s._12(l, 225)._paused);
                n(l, 227, 0, s._12(l, 232).ngClassUntouched, s._12(l, 232).ngClassTouched, s._12(l, 232).ngClassPristine, s._12(l, 232).ngClassDirty, s._12(l, 232).ngClassValid, s._12(l, 232).ngClassInvalid, s._12(l, 232).ngClassPending);
                n(l, 234, 0, !e.homeState.inputDestino || !e.inputDestinoEditing);
                n(l, 236, 0, !e.homeState.inputDestino || !e.inputDestinoEditing);
                n(l, 238, 0, s._12(l, 239)._hidden);
                n(l, 243, 0, e.inputDestinoEditing || e.inputOrigenEditing);
                n(l, 263, 0, s._22(l, 263, 0, n(l, 264, 0, s._12(l, 0), e.header.show_parada)));
                n(l, 277, 0, s._22(l, 277, 0, n(l, 278, 0, s._12(l, 0), e.header.show_destino)));
                n(l, 283, 0, s._3(1, "", e.header.icon_src, ""));
                n(l, 290, 0, s._12(l, 291)._hidden);
                n(l, 297, 0, s._12(l, 299).statusbarPadding, s._12(l, 299)._hasRefresher);
                n(l, 303, 0, 0 == e.autocompleteContent.length)
            })
        }
        e.d(l, "a", function() {
            return ln
        });
        var s = e(1)
          , c = e(15)
          , d = e(76)
          , p = e(38)
          , h = e(51)
          , m = e(3)
          , _ = e(6)
          , f = e(77)
          , g = e(32)
          , v = e(9)
          , b = e(20)
          , y = e(373)
          , S = e(108)
          , P = e(23)
          , C = e(45)
          , w = e(188)
          , E = e(40)
          , O = e(22)
          , A = e(151)
          , x = e(46)
          , I = e(43)
          , R = e(21)
          , D = e(5)
          , T = e(10)
          , k = e(25)
          , M = e(168)
          , F = e(68)
          , L = e(98)
          , j = e(52)
          , N = e(39)
          , V = e(87)
          , Z = e(80)
          , U = e(69)
          , B = e(86)
          , G = e(72)
          , H = e(155)
          , $ = e(114)
          , z = e(49)
          , q = e(156)
          , J = e(157)
          , Y = e(112)
          , K = e(120)
          , W = e(121)
          , Q = e(57)
          , X = e(26)
          , nn = s.Y({
            encapsulation: 2,
            styles: [],
            data: {}
        })
          , ln = s.W("page-home", M.a, function(n) {
            return s._23(0, [(n()(),
            s._0(0, 0, null, null, 1, "page-home", [], null, null, null, u, nn)), s.Z(1, 245760, null, 0, M.a, [D.a, F.a, L.a, j.a, N.a, V.a, Z.a, U.a, B.a, G.a, H.a, $.a, p.a, z.e, q.a, J.a, Y.a, E.a, K.a, W.a, Q.a, s.A, T.a, s.j, X.a], null, null)], function(n, l) {
                n(l, 1, 0)
            }, null)
        }, {}, {}, [])
    },
    426: function(n, l, e) {
        "use strict";
        function t(n) {
            return f._23(0, [(n()(),
            f._0(0, 0, null, null, 2, "ion-option", [], null, null, null, null, null)), f.Z(1, 16384, [[2, 4]], 0, g.a, [f.j], {
                value: [0, "value"]
            }, null), (n()(),
            f._21(2, null, ["", ""]))], function(n, l) {
                n(l, 1, 0, f._3(1, "", l.context.$implicit.value, ""))
            }, function(n, l) {
                n(l, 2, 0, l.context.$implicit.text)
            })
        }
        function a(n) {
            return f._23(0, [(n()(),
            f._0(0, 0, null, null, 2, "ion-option", [], null, null, null, null, null)), f.Z(1, 16384, [[3, 4]], 0, g.a, [f.j], {
                value: [0, "value"]
            }, null), (n()(),
            f._21(2, null, ["", ""]))], function(n, l) {
                n(l, 1, 0, f._3(1, "", l.context.$implicit.value, ""))
            }, function(n, l) {
                n(l, 2, 0, l.context.$implicit.text)
            })
        }
        function i(n) {
            return f._23(0, [(n()(),
            f._0(0, 0, null, null, 16, "div", [["class", "total-time"], ["item-start", ""]], null, [[null, "click"]], function(n, l, e) {
                var t = !0;
                if ("click" === l) {
                    t = !1 !== n.component.showPopupQA(n.parent.context.$implicit, n.parent.context.$implicit.tiempoTotalConfianza.confianza) && t
                }
                return t
            }, null, null)), (n()(),
            f._21(-1, null, ["\n                "])), (n()(),
            f._0(2, 0, null, null, 13, "div", [["style", "display: inline-block"]], null, null, null, null, null)), (n()(),
            f._21(-1, null, ["\n                    "])), (n()(),
            f._0(4, 0, null, null, 1, "span", [], null, null, null, null, null)), (n()(),
            f._21(5, null, ["", "'"])), (n()(),
            f._21(-1, null, ["\n                    "])), (n()(),
            f._0(7, 0, null, null, 7, "div", [["class", "bar-container"]], null, null, null, null, null)), (n()(),
            f._21(-1, null, ["\n                        "])), (n()(),
            f._0(9, 0, null, null, 0, "div", [["class", "bar"], ["style", "width: 33%"]], [[8, "hidden", 0]], null, null, null, null)), (n()(),
            f._21(-1, null, ["\n                        "])), (n()(),
            f._0(11, 0, null, null, 0, "div", [["class", "bar"], ["style", "width: 66%"]], [[8, "hidden", 0]], null, null, null, null)), (n()(),
            f._21(-1, null, ["\n                        "])), (n()(),
            f._0(13, 0, null, null, 0, "div", [["class", "bar"], ["style", "width: 100%"]], [[8, "hidden", 0]], null, null, null, null)), (n()(),
            f._21(-1, null, ["\n                    "])), (n()(),
            f._21(-1, null, ["\n                "])), (n()(),
            f._21(-1, null, ["\n            "]))], null, function(n, l) {
                n(l, 5, 0, l.parent.context.$implicit.tiempoTotalConfianza.tiempoTotal);
                n(l, 9, 0, 1 != l.parent.context.$implicit.tiempoTotalConfianza.confianza);
                n(l, 11, 0, 2 != l.parent.context.$implicit.tiempoTotalConfianza.confianza);
                n(l, 13, 0, 3 != l.parent.context.$implicit.tiempoTotalConfianza.confianza)
            })
        }
        function o(n) {
            return f._23(0, [(n()(),
            f._0(0, 0, null, null, 23, "ion-row", [["class", "row"]], null, [[null, "click"]], function(n, l, e) {
                var t = !0;
                if ("click" === l) {
                    t = !1 !== n.component.selectRuteo(n.parent.context.$implicit.id) && t
                }
                return t
            }, null, null)), f.Z(1, 16384, null, 0, v.a, [], null, null), (n()(),
            f._21(-1, null, ["\n                "])), (n()(),
            f._0(3, 0, null, null, 19, "div", [["float-left", ""], ["style", "width: 100%"]], null, null, null, null, null)), (n()(),
            f._21(-1, null, ["\n                    "])), (n()(),
            f._0(5, 0, null, null, 16, "ion-row", [["align-items-center", ""], ["class", "line-container line-1 row"]], null, null, null, null, null)), f.Z(6, 16384, null, 0, v.a, [], null, null), (n()(),
            f._21(-1, null, ["\n                        "])), (n()(),
            f._0(8, 0, null, null, 12, "ion-col", [["class", "col"]], null, null, null, null, null)), f.Z(9, 16384, null, 0, b.a, [], null, null), (n()(),
            f._21(-1, null, ["\n                            "])), (n()(),
            f._0(11, 0, null, null, 4, "span", [["class", "bus_destino text-ellipsis"]], null, null, null, null, null)), (n()(),
            f._21(-1, null, ["\n                                "])), (n()(),
            f._0(13, 0, null, null, 1, "span", [["class", "bus_linea"]], null, null, null, null, null)), (n()(),
            f._21(14, null, ["", ""])), (n()(),
            f._21(15, null, ["\n                                - ", "\n                            "])), (n()(),
            f._21(-1, null, ["\n                            "])), (n()(),
            f._0(17, 0, null, null, 2, "div", [["style", "display:none"]], null, null, null, null, null)), (n()(),
            f._21(18, null, ["", ""])), f._14(0, y.f, []), (n()(),
            f._21(-1, null, ["\n                        "])), (n()(),
            f._21(-1, null, ["\n                    "])), (n()(),
            f._21(-1, null, ["\n                "])), (n()(),
            f._21(-1, null, ["\n            "]))], null, function(n, l) {
                n(l, 14, 0, l.parent.context.$implicit.recorrido.ruta.directo.linea);
                n(l, 15, 0, l.parent.context.$implicit.pasada.destino);
                n(l, 18, 0, f._22(l, 18, 0, f._12(l, 19).transform(l.parent.context.$implicit)))
            })
        }
        function r(n) {
            return f._23(0, [(n()(),
            f._0(0, 0, null, null, 23, "ion-row", [["class", "row"]], null, [[null, "click"]], function(n, l, e) {
                var t = !0;
                if ("click" === l) {
                    t = !1 !== n.component.selectRuteo(n.parent.context.$implicit.id) && t
                }
                return t
            }, null, null)), f.Z(1, 16384, null, 0, v.a, [], null, null), (n()(),
            f._21(-1, null, ["\n                "])), (n()(),
            f._0(3, 0, null, null, 19, "div", [["float-left", ""], ["style", "width: 100%"]], null, null, null, null, null)), (n()(),
            f._21(-1, null, ["\n                    "])), (n()(),
            f._0(5, 0, null, null, 16, "ion-row", [["align-items-center", ""], ["class", "line-container line-2 row"]], null, null, null, null, null)), f.Z(6, 16384, null, 0, v.a, [], null, null), (n()(),
            f._21(-1, null, ["\n                        "])), (n()(),
            f._0(8, 0, null, null, 4, "ion-col", [["class", "icon-container col"]], null, null, null, null, null)), f.Z(9, 16384, null, 0, b.a, [], null, null), (n()(),
            f._21(-1, null, ["\n                            "])), (n()(),
            f._0(11, 0, null, null, 0, "img", [["class", "icon_parada"], ["src", "assets/images/parada/icon-parada.svg"]], null, null, null, null, null)), (n()(),
            f._21(-1, null, ["\n                        "])), (n()(),
            f._21(-1, null, ["\n                        "])), (n()(),
            f._0(14, 0, null, null, 6, "ion-col", [["class", "col"]], null, null, null, null, null)), f.Z(15, 16384, null, 0, b.a, [], null, null), (n()(),
            f._21(-1, null, ["\n                            "])), (n()(),
            f._0(17, 0, null, null, 2, "span", [["class", "text-ellipsis texto_parada"]], null, null, null, null, null)), (n()(),
            f._21(18, null, ["", ""])), f._16(19, 1), (n()(),
            f._21(-1, null, ["\n                        "])), (n()(),
            f._21(-1, null, ["\n                    "])), (n()(),
            f._21(-1, null, ["\n                "])), (n()(),
            f._21(-1, null, ["\n            "]))], null, function(n, l) {
                n(l, 18, 0, f._22(l, 18, 0, n(l, 19, 0, f._12(l.parent.parent, 0), l.parent.context.$implicit.recorrido.ruta.directo.paradaOrigen.descripcion)))
            })
        }
        function u(n) {
            return f._23(0, [(n()(),
            f._0(0, 0, null, null, 40, "ion-row", [["class", "trasbordo-row-1 row"]], null, [[null, "click"]], function(n, l, e) {
                var t = !0;
                if ("click" === l) {
                    t = !1 !== n.component.selectRuteo(n.parent.context.$implicit.id) && t
                }
                return t
            }, null, null)), f.Z(1, 16384, null, 0, v.a, [], null, null), (n()(),
            f._21(-1, null, ["\n                "])), (n()(),
            f._0(3, 0, null, null, 36, "div", [["float-left", ""], ["style", "width: 100%"]], null, null, null, null, null)), (n()(),
            f._21(-1, null, ["\n                    "])), (n()(),
            f._0(5, 0, null, null, 33, "ion-row", [["align-items-center", ""], ["class", "line-container line-1 row"]], null, null, null, null, null)), f.Z(6, 16384, null, 0, v.a, [], null, null), (n()(),
            f._21(-1, null, ["\n                        "])), (n()(),
            f._0(8, 0, null, null, 6, "ion-col", [["class", "trasbordo-col-1 col"]], null, null, null, null, null)), f.Z(9, 16384, null, 0, b.a, [], null, null), (n()(),
            f._21(-1, null, ["\n                            "])), (n()(),
            f._0(11, 0, null, null, 2, "span", [["class", "bus_destino"]], null, null, null, null, null)), (n()(),
            f._0(12, 0, null, null, 1, "span", [["class", "bus_linea"]], null, null, null, null, null)), (n()(),
            f._21(13, null, ["", ""])), (n()(),
            f._21(-1, null, ["\n                        "])), (n()(),
            f._21(-1, null, ["\n                        "])), (n()(),
            f._0(16, 0, null, null, 5, "ion-col", [["class", "col"]], null, null, null, null, null)), f.Z(17, 16384, null, 0, b.a, [], null, null), (n()(),
            f._21(-1, null, ["\n                            "])), (n()(),
            f._0(19, 0, null, null, 1, "span", [["class", "bus_destino text-ellipsis"]], null, null, null, null, null)), (n()(),
            f._21(20, null, ["\n                                    ", "\n                            "])), (n()(),
            f._21(-1, null, ["\n                        "])), (n()(),
            f._21(-1, null, ["\n                        \n                        "])), (n()(),
            f._0(23, 0, null, null, 4, "ion-col", [["class", "icon-container accessibilidad col"], ["item-end", ""]], [[8, "hidden", 0]], null, null, null, null)), f.Z(24, 16384, null, 0, b.a, [], null, null), (n()(),
            f._21(-1, null, ["\n                            "])), (n()(),
            f._0(26, 0, null, null, 0, "img", [["class", "icon_accessibilidad"], ["src", "assets/images/bus/icono_Accesibilidad.png"]], null, null, null, null, null)), (n()(),
            f._21(-1, null, ["\n                        "])), (n()(),
            f._21(-1, null, ["\n                        "])), (n()(),
            f._0(29, 0, null, null, 4, "ion-col", [["class", "icon-container accessibilidad col"], ["item-end", ""]], [[8, "hidden", 0]], null, null, null, null)), f.Z(30, 16384, null, 0, b.a, [], null, null), (n()(),
            f._21(-1, null, ["\n                            "])), (n()(),
            f._0(32, 0, null, null, 0, "img", [["class", "icon_accessibilidad"], ["src", "assets/images/bus/icono_Accesibilidad-universal.png"]], null, null, null, null, null)), (n()(),
            f._21(-1, null, ["\n                        "])), (n()(),
            f._21(-1, null, ["\n                        "])), (n()(),
            f._0(35, 0, null, null, 2, "div", [["style", "display:none"]], null, null, null, null, null)), (n()(),
            f._21(36, null, ["", ""])), f._14(0, y.f, []), (n()(),
            f._21(-1, null, ["\n                    "])), (n()(),
            f._21(-1, null, ["\n                "])), (n()(),
            f._21(-1, null, ["\n            "]))], null, function(n, l) {
                n(l, 13, 0, l.parent.context.$implicit.recorrido.ruta.directo.linea);
                n(l, 20, 0, l.parent.context.$implicit.pasada.destino);
                n(l, 23, 0, 3 != l.parent.context.$implicit.pasada.tipoAccesibilidad);
                n(l, 29, 0, 2 != l.parent.context.$implicit.pasada.tipoAccesibilidad);
                n(l, 36, 0, f._22(l, 36, 0, f._12(l, 37).transform(l.parent.context.$implicit)))
            })
        }
        function s(n) {
            return f._23(0, [(n()(),
            f._0(0, 0, null, null, 23, "ion-row", [["class", "trasbordo-row-2 row"]], null, [[null, "click"]], function(n, l, e) {
                var t = !0;
                if ("click" === l) {
                    t = !1 !== n.component.selectRuteo(n.parent.context.$implicit.id) && t
                }
                return t
            }, null, null)), f.Z(1, 16384, null, 0, v.a, [], null, null), (n()(),
            f._21(-1, null, ["\n                "])), (n()(),
            f._0(3, 0, null, null, 19, "div", [["float-left", ""], ["style", "width: 100%"]], null, null, null, null, null)), (n()(),
            f._21(-1, null, ["\n                    "])), (n()(),
            f._0(5, 0, null, null, 16, "ion-row", [["align-items-center", ""], ["class", "line-container line-2 row"]], null, null, null, null, null)), f.Z(6, 16384, null, 0, v.a, [], null, null), (n()(),
            f._21(-1, null, ["\n                        "])), (n()(),
            f._0(8, 0, null, null, 2, "ion-col", [["class", "trasbordo-col-1 col"]], null, null, null, null, null)), f.Z(9, 16384, null, 0, b.a, [], null, null), (n()(),
            f._21(-1, null, ["\n                            \n                        "])), (n()(),
            f._21(-1, null, ["\n                        "])), (n()(),
            f._0(12, 0, null, null, 8, "ion-col", [["class", "col"]], null, null, null, null, null)), f.Z(13, 16384, null, 0, b.a, [], null, null), (n()(),
            f._21(-1, null, ["\n                            "])), (n()(),
            f._0(15, 0, null, null, 0, "img", [["class", "icon_parada"], ["src", "assets/images/parada/icon-parada.svg"]], null, null, null, null, null)), (n()(),
            f._21(-1, null, ["\n                            "])), (n()(),
            f._0(17, 0, null, null, 2, "span", [["class", "text-ellipsis texto_parada"]], null, null, null, null, null)), (n()(),
            f._21(18, null, ["", ""])), f._16(19, 1), (n()(),
            f._21(-1, null, ["\n                        "])), (n()(),
            f._21(-1, null, ["\n                    "])), (n()(),
            f._21(-1, null, ["\n                "])), (n()(),
            f._21(-1, null, ["\n            "]))], null, function(n, l) {
                n(l, 18, 0, f._22(l, 18, 0, n(l, 19, 0, f._12(l.parent.parent, 0), l.parent.context.$implicit.recorrido.ruta.directo.paradaOrigen.descripcion)))
            })
        }
        function c(n) {
            return f._23(0, [(n()(),
            f._0(0, 0, null, null, 26, "ion-row", [["class", "trasbordo-row-3 row"]], null, [[null, "click"]], function(n, l, e) {
                var t = !0;
                if ("click" === l) {
                    t = !1 !== n.component.selectRuteo(n.parent.context.$implicit.id) && t
                }
                return t
            }, null, null)), f.Z(1, 16384, null, 0, v.a, [], null, null), (n()(),
            f._21(-1, null, ["\n                "])), (n()(),
            f._0(3, 0, null, null, 22, "div", [["float-left", ""], ["style", "width: 100%"]], null, null, null, null, null)), (n()(),
            f._21(-1, null, ["\n                    "])), (n()(),
            f._0(5, 0, null, null, 19, "ion-row", [["align-items-center", ""], ["class", "line-container line-1 row"]], null, null, null, null, null)), f.Z(6, 16384, null, 0, v.a, [], null, null), (n()(),
            f._21(-1, null, ["\n                        "])), (n()(),
            f._0(8, 0, null, null, 8, "ion-col", [["class", "trasbordo-col-1 col"]], null, null, null, null, null)), f.Z(9, 16384, null, 0, b.a, [], null, null), (n()(),
            f._21(-1, null, ["\n                            "])), (n()(),
            f._0(11, 0, null, null, 0, "img", [["class", "icon_accessibilidad"], ["src", "assets/images/bus/icono_Accesibilidad.png"]], [[8, "hidden", 0]], null, null, null, null)), (n()(),
            f._21(-1, null, ["\n                            "])), (n()(),
            f._0(13, 0, null, null, 2, "span", [["class", "bus_destino"]], null, null, null, null, null)), (n()(),
            f._0(14, 0, null, null, 1, "span", [["class", "bus_linea"]], null, null, null, null, null)), (n()(),
            f._21(15, null, ["", ""])), (n()(),
            f._21(-1, null, ["\n                        "])), (n()(),
            f._21(-1, null, ["\n                        "])), (n()(),
            f._0(18, 0, null, null, 5, "ion-col", [["class", "col"]], null, null, null, null, null)), f.Z(19, 16384, null, 0, b.a, [], null, null), (n()(),
            f._21(-1, null, ["\n                            "])), (n()(),
            f._0(21, 0, null, null, 1, "span", [["class", "bus_destino text-ellipsis"]], null, null, null, null, null)), (n()(),
            f._21(22, null, ["\n                                ", "\n                            "])), (n()(),
            f._21(-1, null, ["\n                        "])), (n()(),
            f._21(-1, null, ["\n                    "])), (n()(),
            f._21(-1, null, ["\n                "])), (n()(),
            f._21(-1, null, ["\n            "]))], null, function(n, l) {
                var e = l.component;
                n(l, 11, 0, !0);
                n(l, 15, 0, l.parent.context.$implicit.recorrido.ruta.trasbordo.linea);
                n(l, 22, 0, e.extraerDestinoDeDescripcion(l.parent.context.$implicit.recorrido.ruta.trasbordo.descripcion))
            })
        }
        function d(n) {
            return f._23(0, [(n()(),
            f._0(0, 0, null, null, 23, "ion-row", [["class", "trasbordo-row-4 row"]], null, [[null, "click"]], function(n, l, e) {
                var t = !0;
                if ("click" === l) {
                    t = !1 !== n.component.selectRuteo(n.parent.context.$implicit.id) && t
                }
                return t
            }, null, null)), f.Z(1, 16384, null, 0, v.a, [], null, null), (n()(),
            f._21(-1, null, ["\n                "])), (n()(),
            f._0(3, 0, null, null, 19, "div", [["float-left", ""], ["style", "width: 100%"]], null, null, null, null, null)), (n()(),
            f._21(-1, null, ["\n                    "])), (n()(),
            f._0(5, 0, null, null, 16, "ion-row", [["align-items-center", ""], ["class", "line-container line-2 row"]], null, null, null, null, null)), f.Z(6, 16384, null, 0, v.a, [], null, null), (n()(),
            f._21(-1, null, ["\n                        "])), (n()(),
            f._0(8, 0, null, null, 2, "ion-col", [["class", "trasbordo-col-1 col"]], null, null, null, null, null)), f.Z(9, 16384, null, 0, b.a, [], null, null), (n()(),
            f._21(-1, null, ["\n                            \n                        "])), (n()(),
            f._21(-1, null, ["\n                        "])), (n()(),
            f._0(12, 0, null, null, 8, "ion-col", [["class", "col"]], null, null, null, null, null)), f.Z(13, 16384, null, 0, b.a, [], null, null), (n()(),
            f._21(-1, null, ["\n                            "])), (n()(),
            f._0(15, 0, null, null, 0, "img", [["class", "icon_parada"], ["src", "assets/images/parada/icon-parada.svg"]], null, null, null, null, null)), (n()(),
            f._21(-1, null, ["\n                            "])), (n()(),
            f._0(17, 0, null, null, 2, "span", [["class", "text-ellipsis texto_parada"]], null, null, null, null, null)), (n()(),
            f._21(18, null, ["", ""])), f._16(19, 1), (n()(),
            f._21(-1, null, ["\n                        "])), (n()(),
            f._21(-1, null, ["\n                    "])), (n()(),
            f._21(-1, null, ["\n                "])), (n()(),
            f._21(-1, null, ["\n            "]))], null, function(n, l) {
                n(l, 18, 0, f._22(l, 18, 0, n(l, 19, 0, f._12(l.parent.parent, 0), l.parent.context.$implicit.recorrido.ruta.trasbordo.paradaOrigen.descripcion)))
            })
        }
        function p(n) {
            return f._23(0, [(n()(),
            f._0(0, 0, null, null, 2, "button", [["ion-button", ""]], null, null, null, S.b, S.a)), f.Z(1, 1097728, [[5, 4]], 0, P.a, [[8, ""], C.a, f.j, f.A], null, null), (n()(),
            f._21(-1, 0, ["detalle"]))], null, null)
        }
        function h(n) {
            return f._23(0, [(n()(),
            f._0(0, 0, null, null, 2, "button", [["class", "ver-detalles"], ["ion-button", ""]], null, null, null, S.b, S.a)), f.Z(1, 1097728, [[5, 4]], 0, P.a, [[8, ""], C.a, f.j, f.A], null, null), (n()(),
            f._21(-1, 0, ["detalle"]))], null, null)
        }
        function m(n) {
            return f._23(0, [(n()(),
            f._0(0, 0, null, null, 71, "ion-item", [["class", "item item-block"]], [[8, "id", 0]], null, null, w.b, w.a)), f.Z(1, 278528, null, 0, y.i, [f.q, f.r, f.j, f.B], {
                ngClass: [0, "ngClass"]
            }, null), f._15(2, {
                "item-selected-bus": 0
            }), f.Z(3, 1097728, null, 3, E.a, [O.a, C.a, f.j, f.A, [2, A.a]], null, null), f._19(335544320, 4, {
                contentLabel: 0
            }), f._19(603979776, 5, {
                _buttons: 1
            }), f._19(603979776, 6, {
                _icons: 1
            }), f.Z(7, 16384, null, 0, x.a, [], null, null), (n()(),
            f._21(-1, 2, ["\n            "])), (n()(),
            f._21(-1, 2, ["\n            "])), (n()(),
            f.V(16777216, null, 0, 1, null, i)), f.Z(11, 16384, null, 0, y.k, [f.J, f.G], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            f._21(-1, 2, ["\n            \n            "])), (n()(),
            f._21(-1, 2, ["\n            "])), (n()(),
            f.V(16777216, null, 2, 1, null, o)), f.Z(15, 16384, null, 0, y.k, [f.J, f.G], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            f._21(-1, 2, ["\n\n            "])), (n()(),
            f._21(-1, 2, ["\n            "])), (n()(),
            f.V(16777216, null, 2, 1, null, r)), f.Z(19, 16384, null, 0, y.k, [f.J, f.G], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            f._21(-1, 2, ["\n\n            "])), (n()(),
            f._0(21, 0, null, 4, 4, "ion-col", [["class", "icon-container accessibilidad col"], ["item-end", ""]], [[8, "hidden", 0]], null, null, null, null)), f.Z(22, 16384, null, 0, b.a, [], null, null), (n()(),
            f._21(-1, null, ["\n                "])), (n()(),
            f._0(24, 0, null, null, 0, "img", [["class", "icon_accessibilidad"], ["src", "assets/images/bus/icono_Accesibilidad.png"]], null, null, null, null, null)), (n()(),
            f._21(-1, null, ["\n            "])), (n()(),
            f._21(-1, 2, ["\n            "])), (n()(),
            f._0(27, 0, null, 4, 4, "ion-col", [["class", "icon-container accessibilidad col"], ["item-end", ""]], [[8, "hidden", 0]], null, null, null, null)), f.Z(28, 16384, null, 0, b.a, [], null, null), (n()(),
            f._21(-1, null, ["\n                "])), (n()(),
            f._0(30, 0, null, null, 0, "img", [["class", "icon_accessibilidad"], ["src", "assets/images/bus/icono_Accesibilidad-universal.png"]], null, null, null, null, null)), (n()(),
            f._21(-1, null, ["\n            "])), (n()(),
            f._21(-1, 2, ["\n\n\n\n\n            "])), (n()(),
            f._21(-1, 2, ["\n            "])), (n()(),
            f.V(16777216, null, 2, 1, null, u)), f.Z(35, 16384, null, 0, y.k, [f.J, f.G], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            f._21(-1, 2, ["\n\n            "])), (n()(),
            f._21(-1, 2, ["\n            "])), (n()(),
            f.V(16777216, null, 2, 1, null, s)), f.Z(39, 16384, null, 0, y.k, [f.J, f.G], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            f._21(-1, 2, ["\n\n\n\n\n\n\n            "])), (n()(),
            f._21(-1, 2, ["\n            "])), (n()(),
            f.V(16777216, null, 2, 1, null, c)), f.Z(43, 16384, null, 0, y.k, [f.J, f.G], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            f._21(-1, 2, ["\n\n            "])), (n()(),
            f._21(-1, 2, ["\n            "])), (n()(),
            f.V(16777216, null, 2, 1, null, d)), f.Z(47, 16384, null, 0, y.k, [f.J, f.G], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            f._21(-1, 2, ["\n                        \n            \n            "])), (n()(),
            f._21(-1, 2, ["\n            "])), (n()(),
            f._0(50, 0, null, 4, 4, "div", [["class", "ver-detalles"], ["item-end", ""]], null, [[null, "click"]], function(n, l, e) {
                var t = !0;
                if ("click" === l) {
                    t = !1 !== n.component.selectRuteo(n.context.$implicit.id) && t
                }
                return t
            }, null, null)), (n()(),
            f._21(-1, null, ["\n                "])), (n()(),
            f.V(16777216, null, null, 1, null, p)), f.Z(53, 16384, null, 0, y.k, [f.J, f.G], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            f._21(-1, null, ["\n            "])), (n()(),
            f._21(-1, 2, ["\n            \n\n            "])), (n()(),
            f._21(-1, 2, ["\n            "])), (n()(),
            f._0(57, 0, null, 4, 13, "div", [["class", "bus-time"], ["item-end", ""]], null, [[null, "click"]], function(n, l, e) {
                var t = !0;
                if ("click" === l) {
                    t = !1 !== n.component.selectRuteo(n.context.$implicit.id) && t
                }
                return t
            }, null, null)), (n()(),
            f._21(-1, null, ["\n                "])), (n()(),
            f._21(-1, null, ["\n                "])), (n()(),
            f._0(60, 0, null, null, 1, "span", [["class", "minutes-theory"]], [[8, "hidden", 0]], null, null, null, null)), (n()(),
            f._21(61, null, ["", ""])), (n()(),
            f._21(-1, null, ["\n                "])), (n()(),
            f._0(63, 0, null, null, 2, "span", [["class", "minutes-real"]], [[8, "hidden", 0]], null, null, null, null)), (n()(),
            f._21(64, null, ["", "'"])), (n()(),
            f._0(65, 0, null, null, 0, "br", [], null, null, null, null, null)), (n()(),
            f._21(-1, null, ["\n                "])), (n()(),
            f._21(-1, null, ["\n                "])), (n()(),
            f.V(16777216, null, null, 1, null, h)), f.Z(69, 16384, null, 0, y.k, [f.J, f.G], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            f._21(-1, null, ["\n            "])), (n()(),
            f._21(-1, 2, ["\n\n        "]))], function(n, l) {
                var e = l.component;
                n(l, 1, 0, n(l, 2, 0, l.context.$implicit.id == e.itemSelected));
                n(l, 11, 0, l.context.$implicit.tiempoTotalConfianza);
                n(l, 15, 0, !l.context.$implicit.recorrido.ruta.trasbordo);
                n(l, 19, 0, !l.context.$implicit.recorrido.ruta.trasbordo);
                n(l, 35, 0, l.context.$implicit.recorrido.ruta.trasbordo);
                n(l, 39, 0, l.context.$implicit.recorrido.ruta.trasbordo);
                n(l, 43, 0, l.context.$implicit.recorrido.ruta.trasbordo);
                n(l, 47, 0, l.context.$implicit.recorrido.ruta.trasbordo);
                n(l, 53, 0, l.context.$implicit.id == e.itemSelected);
                n(l, 69, 0, l.context.$implicit.id == e.itemSelected)
            }, function(n, l) {
                n(l, 0, 0, f._3(1, "", "tiempo_total_" + l.context.$implicit.id, ""));
                n(l, 21, 0, l.context.$implicit.recorrido.ruta.trasbordo || 3 != l.context.$implicit.pasada.tipoAccesibilidad);
                n(l, 27, 0, l.context.$implicit.recorrido.ruta.trasbordo || 2 != l.context.$implicit.pasada.tipoAccesibilidad);
                n(l, 60, 0, l.context.$implicit.pasada.real);
                n(l, 61, 0, l.context.$implicit.pasada.horaDesc);
                n(l, 63, 0, !l.context.$implicit.pasada.real);
                n(l, 64, 0, l.context.$implicit.pasada.minutos)
            })
        }
        function _(n) {
            return f._23(0, [f._14(0, I.a, [R.a]), f._19(402653184, 1, {
                ionicList: 0
            }), (n()(),
            f._0(2, 0, null, null, 123, "ion-content", [], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, D.b, D.a)), f.Z(3, 4374528, null, 0, T.a, [C.a, k.a, M.a, f.j, f.A, F.a, L.a, f.v, [2, j.a], [2, N.a]], null, null), (n()(),
            f._21(-1, 1, ["\n\n    "])), (n()(),
            f._0(5, 0, null, 0, 42, "div", [["class", "time-quality-popup"], ["ion-fixed", ""]], [[8, "hidden", 0]], [[null, "click"]], function(n, l, e) {
                var t = !0;
                if ("click" === l) {
                    t = !1 !== n.component.hidePopupQA() && t
                }
                return t
            }, null, null)), (n()(),
            f._21(-1, null, ["\n        "])), (n()(),
            f._0(7, 0, null, null, 0, "div", [["class", "bg"]], null, null, null, null, null)), (n()(),
            f._21(-1, null, ["\n        "])), (n()(),
            f._0(9, 0, null, null, 1, "div", [["class", "punta"]], null, null, null, null, null)), f.Z(10, 278528, null, 0, y.n, [f.r, f.j, f.B], {
                ngStyle: [0, "ngStyle"]
            }, null), (n()(),
            f._21(-1, null, ["\n        "])), (n()(),
            f._0(12, 0, null, null, 34, "div", [["class", "popup"]], null, null, null, null, null)), f.Z(13, 278528, null, 0, y.n, [f.r, f.j, f.B], {
                ngStyle: [0, "ngStyle"]
            }, null), (n()(),
            f._21(-1, null, ["\n            "])), (n()(),
            f._0(15, 0, null, null, 1, "div", [["class", "head"]], null, null, null, null, null)), (n()(),
            f._21(-1, null, ["\n                Estimación de tiempo total:\n            "])), (n()(),
            f._21(-1, null, ["\n            "])), (n()(),
            f._0(18, 0, null, null, 7, "div", [["class", "q1 total-time"]], null, null, null, null, null)), (n()(),
            f._21(-1, null, ["\n                "])), (n()(),
            f._0(20, 0, null, null, 1, "div", [["class", "bar-container bar-box"]], null, null, null, null, null)), (n()(),
            f._0(21, 0, null, null, 0, "div", [["class", "bar"], ["style", "width: 100%"]], null, null, null, null, null)), (n()(),
            f._21(-1, null, ["\n                "])), (n()(),
            f._0(23, 0, null, null, 1, "div", [["class", "text"]], null, null, null, null, null)), (n()(),
            f._21(-1, null, ["Tiempo real"])), (n()(),
            f._21(-1, null, ["\n            "])), (n()(),
            f._21(-1, null, ["\n            "])), (n()(),
            f._0(27, 0, null, null, 9, "div", [["class", "q2 total-time"]], null, null, null, null, null)), (n()(),
            f._21(-1, null, ["\n                "])), (n()(),
            f._0(29, 0, null, null, 1, "div", [["class", "bar-container bar-box"]], null, null, null, null, null)), (n()(),
            f._0(30, 0, null, null, 0, "div", [["class", "bar"], ["style", "width: 66%"]], null, null, null, null, null)), (n()(),
            f._21(-1, null, ["\n                "])), (n()(),
            f._0(32, 0, null, null, 3, "div", [["class", "text"]], null, null, null, null, null)), (n()(),
            f._21(-1, null, ["Tiempo real +"])), (n()(),
            f._0(34, 0, null, null, 0, "br", [], null, null, null, null, null)), (n()(),
            f._21(-1, null, ["información teórica"])), (n()(),
            f._21(-1, null, ["\n            "])), (n()(),
            f._21(-1, null, ["\n            "])), (n()(),
            f._0(38, 0, null, null, 7, "div", [["class", "q3 total-time"]], null, null, null, null, null)), (n()(),
            f._21(-1, null, ["\n                "])), (n()(),
            f._0(40, 0, null, null, 1, "div", [["class", "bar-container bar-box"]], null, null, null, null, null)), (n()(),
            f._0(41, 0, null, null, 0, "div", [["class", "bar"], ["style", "width: 33%"]], null, null, null, null, null)), (n()(),
            f._21(-1, null, ["\n                "])), (n()(),
            f._0(43, 0, null, null, 1, "div", [["class", "text"]], null, null, null, null, null)), (n()(),
            f._21(-1, null, ["Información teórica"])), (n()(),
            f._21(-1, null, ["\n            "])), (n()(),
            f._21(-1, null, ["\n        "])), (n()(),
            f._21(-1, null, ["\n    "])), (n()(),
            f._21(-1, 1, ["\n\n    "])), (n()(),
            f._21(-1, 1, ["\n    "])), (n()(),
            f._0(50, 0, null, 0, 67, "div", [["ion-fixed", ""]], null, null, null, null, null)), (n()(),
            f._21(-1, null, ["\n    \n        "])), (n()(),
            f._0(52, 0, null, null, 12, "div", [["class", "tab"]], null, null, null, null, null)), (n()(),
            f._21(-1, null, ["\n            "])), (n()(),
            f._0(54, 0, null, null, 0, "div", [["class", "tab-shadow-side"]], null, null, null, null, null)), (n()(),
            f._21(-1, null, ["\n            "])), (n()(),
            f._0(56, 0, null, null, 3, "div", [["class", "tab-shadow"]], null, null, null, null, null)), (n()(),
            f._21(-1, null, ["\n                "])), (n()(),
            f._0(58, 0, null, null, 0, "div", [["class", "icon-up"]], null, null, null, null, null)), (n()(),
            f._21(-1, null, ["\n            "])), (n()(),
            f._21(-1, null, ["\n            "])), (n()(),
            f._0(61, 0, null, null, 0, "div", [["class", "tab-shadow-side"]], null, null, null, null, null)), (n()(),
            f._21(-1, null, ["\n            "])), (n()(),
            f._0(63, 0, null, null, 0, "div", [["class", "events"]], null, [[null, "tap"], [null, "click"]], function(n, l, e) {
                var t = !0
                  , a = n.component;
                if ("tap" === l) {
                    t = !1 !== a.swipeBusModal("click", e) && t
                }
                if ("click" === l) {
                    t = !1 !== a.void() && t
                }
                return t
            }, null, null)), (n()(),
            f._21(-1, null, ["\n        "])), (n()(),
            f._21(-1, null, ["\n        \n        "])), (n()(),
            f._0(66, 0, null, null, 47, "ion-row", [["class", "modal-header row"]], null, null, null, null, null)), f.Z(67, 16384, null, 0, v.a, [], null, null), (n()(),
            f._21(-1, null, ["\n            "])), (n()(),
            f._0(69, 0, null, null, 11, "ion-col", [["class", "col-1 col"], ["col-5", ""]], null, null, null, null, null)), f.Z(70, 16384, null, 0, b.a, [], null, null), (n()(),
            f._21(-1, null, ["\n\n                "])), (n()(),
            f._0(72, 0, null, null, 2, "im-selector", [], [[2, "select-md", null], [2, "select-ios", null]], [[null, "itemsChange"], [null, "onChange"]], function(n, l, e) {
                var t = !0
                  , a = n.component;
                if ("itemsChange" === l) {
                    t = !1 !== (a.selectedLineas = e) && t
                }
                if ("onChange" === l) {
                    t = !1 !== a.changeSelectLineas(e) && t
                }
                return t
            }, V.c, V.b)), f.Z(73, 573440, null, 0, Z.a, [k.a, U.a, B.a, j.a, f.g], {
                items: [0, "items"],
                allitems: [1, "allitems"],
                selectedText: [2, "selectedText"]
            }, {
                onChange: "onChange"
            }), (n()(),
            f._21(-1, null, ["\n\n                "])), (n()(),
            f._21(-1, null, ["\n\n                "])), (n()(),
            f._21(-1, null, ["\n                "])), (n()(),
            f._0(77, 0, null, null, 2, "div", [["style", "display: none"]], null, null, null, null, null)), (n()(),
            f._21(78, null, ["", ""])), f._14(0, y.f, []), (n()(),
            f._21(-1, null, ["\n                \n            "])), (n()(),
            f._21(-1, null, ["\n            \n            "])), (n()(),
            f._0(82, 0, null, null, 14, "ion-col", [["class", "col-2 col"], ["col-3", ""]], null, null, null, null, null)), f.Z(83, 16384, null, 0, b.a, [], null, null), (n()(),
            f._21(-1, null, ["\n                "])), (n()(),
            f._0(85, 0, null, null, 10, "ion-select", [["interface", "popover"]], [[2, "select-disabled", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ionChange"], [null, "ngModelChange"], [null, "click"], [null, "keyup.space"]], function(n, l, e) {
                var t = !0
                  , a = n.component;
                if ("click" === l) {
                    t = !1 !== f._12(n, 86)._click(e) && t
                }
                if ("keyup.space" === l) {
                    t = !1 !== f._12(n, 86)._keyup() && t
                }
                if ("ionChange" === l) {
                    t = !1 !== a.onChangeHora(e) && t
                }
                if ("ngModelChange" === l) {
                    t = !1 !== (a.horarioElegidoCombo = e) && t
                }
                return t
            }, G.b, G.a)), f.Z(86, 1228800, null, 1, H.a, [F.a, O.a, C.a, f.j, f.A, [2, E.a], $.a], {
                interface: [0, "interface"],
                selectedText: [1, "selectedText"]
            }, {
                ionChange: "ionChange"
            }), f._19(603979776, 2, {
                options: 1
            }), f._17(1024, null, z.e, function(n) {
                return [n]
            }, [H.a]), f.Z(89, 671744, null, 0, z.h, [[8, null], [8, null], [8, null], [2, z.e]], {
                model: [0, "model"]
            }, {
                update: "ngModelChange"
            }), f._17(2048, null, z.f, null, [z.h]), f.Z(91, 16384, null, 0, z.g, [z.f], null, null), (n()(),
            f._21(-1, null, ["\n                    "])), (n()(),
            f.V(16777216, null, null, 1, null, t)), f.Z(94, 802816, null, 0, y.j, [f.J, f.G, f.q], {
                ngForOf: [0, "ngForOf"]
            }, null), (n()(),
            f._21(-1, null, ["\n                "])), (n()(),
            f._21(-1, null, ["\n            "])), (n()(),
            f._21(-1, null, ["\n            \n            "])), (n()(),
            f._0(98, 0, null, null, 14, "ion-col", [["class", "col-3 col"], ["col-4", ""]], null, null, null, null, null)), f.Z(99, 16384, null, 0, b.a, [], null, null), (n()(),
            f._21(-1, null, ["\n                "])), (n()(),
            f._0(101, 0, null, null, 10, "ion-select", [["interface", "popover"]], [[2, "select-disabled", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ionChange"], [null, "ngModelChange"], [null, "click"], [null, "keyup.space"]], function(n, l, e) {
                var t = !0
                  , a = n.component;
                if ("click" === l) {
                    t = !1 !== f._12(n, 102)._click(e) && t
                }
                if ("keyup.space" === l) {
                    t = !1 !== f._12(n, 102)._keyup() && t
                }
                if ("ionChange" === l) {
                    t = !1 !== a.onChangeBusesOrder(e) && t
                }
                if ("ngModelChange" === l) {
                    t = !1 !== (a.busesOrderSelected = e) && t
                }
                return t
            }, G.b, G.a)), f.Z(102, 1228800, null, 1, H.a, [F.a, O.a, C.a, f.j, f.A, [2, E.a], $.a], {
                interface: [0, "interface"]
            }, {
                ionChange: "ionChange"
            }), f._19(603979776, 3, {
                options: 1
            }), f._17(1024, null, z.e, function(n) {
                return [n]
            }, [H.a]), f.Z(105, 671744, null, 0, z.h, [[8, null], [8, null], [8, null], [2, z.e]], {
                model: [0, "model"]
            }, {
                update: "ngModelChange"
            }), f._17(2048, null, z.f, null, [z.h]), f.Z(107, 16384, null, 0, z.g, [z.f], null, null), (n()(),
            f._21(-1, null, ["\n                    "])), (n()(),
            f.V(16777216, null, null, 1, null, a)), f.Z(110, 802816, null, 0, y.j, [f.J, f.G, f.q], {
                ngForOf: [0, "ngForOf"]
            }, null), (n()(),
            f._21(-1, null, ["\n                "])), (n()(),
            f._21(-1, null, ["\n            "])), (n()(),
            f._21(-1, null, ["\n            \n            \n        "])), (n()(),
            f._21(-1, null, ["\n        \n        "])), (n()(),
            f._0(115, 0, null, null, 1, "im-indeterminate-progress-bar", [], null, null, null, q.b, q.a)), f.Z(116, 49152, null, 0, J.a, [], {
                hide: [0, "hide"]
            }, null), (n()(),
            f._21(-1, null, ["\n\n    "])), (n()(),
            f._21(-1, 1, ["\n    \n\n    "])), (n()(),
            f._0(119, 0, [[1, 0], ["ionicList", 1]], 1, 5, "ion-list", [["id", "ionicList"]], [[8, "hidden", 0]], null, null, null, null)), f.Z(120, 16384, null, 0, Y.a, [C.a, f.j, f.A, k.a, K.l, M.a], null, null), (n()(),
            f._21(-1, null, ["\n        "])), (n()(),
            f.V(16777216, null, null, 1, null, m)), f.Z(123, 802816, null, 0, y.j, [f.J, f.G, f.q], {
                ngForOf: [0, "ngForOf"]
            }, null), (n()(),
            f._21(-1, null, ["\n    "])), (n()(),
            f._21(-1, 1, ["\n\n"])), (n()(),
            f._21(-1, null, ["\n"]))], function(n, l) {
                var e = l.component;
                n(l, 10, 0, e.showPopup.punta);
                n(l, 13, 0, e.showPopup);
                n(l, 73, 0, e.selectedLineas, e.lineas, e.textSelectedLineas);
                n(l, 86, 0, "popover", f._3(1, "", e.textSelectHorario(), ""));
                n(l, 89, 0, e.horarioElegidoCombo);
                n(l, 94, 0, e.horarioOptions);
                n(l, 102, 0, "popover");
                n(l, 105, 0, e.busesOrderSelected);
                n(l, 110, 0, e.busesOrderOptions);
                n(l, 116, 0, !e.showSpinner);
                n(l, 123, 0, e.pasadasConRecorrido)
            }, function(n, l) {
                var e = l.component;
                n(l, 2, 0, f._12(l, 3).statusbarPadding, f._12(l, 3)._hasRefresher);
                n(l, 5, 0, !e.showPopup.show);
                n(l, 72, 0, f._12(l, 73).md_selector, f._12(l, 73).ios_selector);
                n(l, 78, 0, f._22(l, 78, 0, f._12(l, 79).transform(e.lineas)));
                n(l, 85, 0, f._12(l, 86)._disabled, f._12(l, 91).ngClassUntouched, f._12(l, 91).ngClassTouched, f._12(l, 91).ngClassPristine, f._12(l, 91).ngClassDirty, f._12(l, 91).ngClassValid, f._12(l, 91).ngClassInvalid, f._12(l, 91).ngClassPending);
                n(l, 101, 0, f._12(l, 102)._disabled, f._12(l, 107).ngClassUntouched, f._12(l, 107).ngClassTouched, f._12(l, 107).ngClassPristine, f._12(l, 107).ngClassDirty, f._12(l, 107).ngClassValid, f._12(l, 107).ngClassInvalid, f._12(l, 107).ngClassPending);
                n(l, 119, 0, !e.pasadasConRecorrido || 0 == e.pasadasConRecorrido.length)
            })
        }
        e.d(l, "a", function() {
            return an
        });
        var f = e(1)
          , g = e(110)
          , v = e(75)
          , b = e(74)
          , y = e(15)
          , S = e(36)
          , P = e(22)
          , C = e(3)
          , w = e(50)
          , E = e(19)
          , O = e(17)
          , A = e(35)
          , x = e(41)
          , I = e(76)
          , R = e(38)
          , D = e(43)
          , T = e(21)
          , k = e(5)
          , M = e(10)
          , F = e(9)
          , L = e(25)
          , j = e(6)
          , N = e(20)
          , V = e(160)
          , Z = e(116)
          , U = e(68)
          , B = e(16)
          , G = e(396)
          , H = e(111)
          , $ = e(28)
          , z = e(23)
          , q = e(226)
          , J = e(115)
          , Y = e(42)
          , K = e(11)
          , W = e(169)
          , Q = e(37)
          , X = e(52)
          , nn = e(69)
          , ln = e(87)
          , en = e(26)
          , tn = f.Y({
            encapsulation: 2,
            styles: [],
            data: {}
        })
          , an = f.W("page-ir-en-bus-modal", W.a, function(n) {
            return f._23(0, [(n()(),
            f._0(0, 0, null, null, 1, "page-ir-en-bus-modal", [], [[2, "swiping", null]], null, null, _, tn)), f.Z(1, 4243456, null, 0, W.a, [N.a, B.a, Q.a, X.a, nn.a, R.a, ln.a, U.a, M.a, k.a, f.A, f.j, en.a], null, null)], null, function(n, l) {
                n(l, 0, 0, f._12(l, 1).swiping)
            })
        }, {}, {}, [])
    },
    427: function(n, l, e) {
        "use strict";
        function t(n) {
            return c._23(0, [(n()(),
            c._0(0, 0, null, null, 1, "span", [["class", "title-label text-ellipsis"]], null, null, null, null, null)), (n()(),
            c._21(-1, null, ["Notificaciones"]))], null, null)
        }
        function a(n) {
            return c._23(0, [(n()(),
            c._0(0, 0, null, null, 1, "span", [["class", "title-label text-ellipsis"]], null, null, null, null, null)), (n()(),
            c._21(1, null, ["", ""]))], null, function(n, l) {
                n(l, 1, 0, l.component.readMsg.title)
            })
        }
        function i(n) {
            return c._23(0, [(n()(),
            c._0(0, 0, null, null, 40, "ion-item", [["class", "item item-block"]], null, [[null, "click"]], function(n, l, e) {
                var t = !0;
                if ("click" === l) {
                    t = !1 !== n.component.openMsg(n.context.$implicit) && t
                }
                return t
            }, d.b, d.a)), c.Z(1, 1097728, null, 3, p.a, [h.a, m.a, c.j, c.A, [2, _.a]], null, null), c._19(335544320, 1, {
                contentLabel: 0
            }), c._19(603979776, 2, {
                _buttons: 1
            }), c._19(603979776, 3, {
                _icons: 1
            }), c.Z(5, 16384, null, 0, f.a, [], null, null), (n()(),
            c._21(-1, 2, ["\n            "])), (n()(),
            c._0(7, 0, null, 0, 6, "ion-thumbnail", [["class", "dot-wrapper"], ["item-start", ""]], null, null, null, null, null)), c.Z(8, 16384, null, 0, g.a, [], null, null), (n()(),
            c._21(-1, null, ["\n                "])), (n()(),
            c._0(10, 0, null, null, 2, "div", [["class", "dot"]], null, null, null, null, null)), c.Z(11, 278528, null, 0, v.i, [c.q, c.r, c.j, c.B], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), c._15(12, {
                read: 0
            }), (n()(),
            c._21(-1, null, ["\n            "])), (n()(),
            c._21(-1, 2, ["\n            "])), (n()(),
            c._0(15, 0, null, 2, 2, "p", [], null, null, null, null, null)), (n()(),
            c._0(16, 0, null, null, 1, "small", [], null, null, null, null, null)), (n()(),
            c._21(17, null, ["", ""])), (n()(),
            c._21(-1, 2, ["\n            "])), (n()(),
            c._21(-1, 2, ["\n            "])), (n()(),
            c._0(20, 0, null, 2, 2, "h2", [], [[8, "hidden", 0]], null, null, null, null)), (n()(),
            c._0(21, 0, null, null, 1, "b", [], null, null, null, null, null)), (n()(),
            c._21(22, null, ["", ""])), (n()(),
            c._21(-1, 2, ["\n            "])), (n()(),
            c._0(24, 0, null, 2, 2, "h3", [], [[8, "hidden", 0]], null, null, null, null)), (n()(),
            c._0(25, 0, null, null, 1, "b", [], null, null, null, null, null)), (n()(),
            c._21(26, null, ["", ""])), (n()(),
            c._21(-1, 2, ["\n            "])), (n()(),
            c._21(-1, 2, ["\n            "])), (n()(),
            c._0(29, 0, null, 2, 1, "h2", [], [[8, "hidden", 0]], null, null, null, null)), (n()(),
            c._21(30, null, ["", ""])), (n()(),
            c._21(-1, 2, ["\n            "])), (n()(),
            c._0(32, 0, null, 2, 1, "h3", [], [[8, "hidden", 0]], null, null, null, null)), (n()(),
            c._21(33, null, ["", ""])), (n()(),
            c._21(-1, 2, ["\n            "])), (n()(),
            c._0(35, 0, null, 4, 4, "ion-thumbnail", [["item-end", ""]], null, [[null, "click"]], function(n, l, e) {
                var t = !0;
                if ("click" === l) {
                    t = !1 !== n.component.deleteNotificacion(e, n.context.$implicit) && t
                }
                return t
            }, null, null)), c.Z(36, 16384, null, 0, g.a, [], null, null), (n()(),
            c._21(-1, null, ["\n                "])), (n()(),
            c._0(38, 0, null, null, 0, "img", [["class", "icon-action"], ["src", "assets/images/button/icon-trash.png"]], null, null, null, null, null)), (n()(),
            c._21(-1, null, ["\n            "])), (n()(),
            c._21(-1, 2, ["\n        "]))], function(n, l) {
                n(l, 11, 0, "dot", n(l, 12, 0, l.context.$implicit.read))
            }, function(n, l) {
                n(l, 17, 0, l.context.$implicit.fecha);
                n(l, 20, 0, l.context.$implicit.read);
                n(l, 22, 0, l.context.$implicit.title);
                n(l, 24, 0, l.context.$implicit.read);
                n(l, 26, 0, l.context.$implicit.summary);
                n(l, 29, 0, !l.context.$implicit.read);
                n(l, 30, 0, l.context.$implicit.title);
                n(l, 32, 0, !l.context.$implicit.read);
                n(l, 33, 0, l.context.$implicit.summary)
            })
        }
        function o(n) {
            return c._23(0, [(n()(),
            c._0(0, 0, null, null, 9, "ion-item", [["class", "item item-block"]], null, null, null, d.b, d.a)), c.Z(1, 1097728, null, 3, p.a, [h.a, m.a, c.j, c.A, [2, _.a]], null, null), c._19(335544320, 4, {
                contentLabel: 0
            }), c._19(603979776, 5, {
                _buttons: 1
            }), c._19(603979776, 6, {
                _icons: 1
            }), c.Z(5, 16384, null, 0, f.a, [], null, null), (n()(),
            c._21(-1, 2, ["\n            "])), (n()(),
            c._0(7, 0, null, 2, 1, "h2", [], null, null, null, null, null)), (n()(),
            c._21(-1, null, ["No hay notificaciones."])), (n()(),
            c._21(-1, 2, ["\n        "]))], null, null)
        }
        function r(n) {
            return c._23(0, [(n()(),
            c._0(0, 0, null, null, 8, "ion-list", [], null, null, null, null, null)), c.Z(1, 16384, null, 0, b.a, [m.a, c.j, c.A, y.a, S.l, P.a], null, null), (n()(),
            c._21(-1, null, ["\n        "])), (n()(),
            c.V(16777216, null, null, 1, null, i)), c.Z(4, 802816, null, 0, v.j, [c.J, c.G, c.q], {
                ngForOf: [0, "ngForOf"]
            }, null), (n()(),
            c._21(-1, null, ["\n        "])), (n()(),
            c.V(16777216, null, null, 1, null, o)), c.Z(7, 16384, null, 0, v.k, [c.J, c.G], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            c._21(-1, null, ["\n    "]))], function(n, l) {
                var e = l.component;
                n(l, 4, 0, e.push.messages);
                n(l, 7, 0, !e.push.messages || 0 == e.push.messages.length)
            }, null)
        }
        function u(n) {
            return c._23(0, [(n()(),
            c._0(0, 0, null, null, 10, "div", [["padding", ""]], null, null, null, null, null)), (n()(),
            c._21(-1, null, ["\n        "])), (n()(),
            c._0(2, 0, null, null, 0, "div", [], [[8, "innerHTML", 1]], null, null, null, null)), (n()(),
            c._21(-1, null, ["\n        "])), (n()(),
            c._0(4, 0, null, null, 0, "hr", [], null, null, null, null, null)), (n()(),
            c._21(-1, null, ["\n        "])), (n()(),
            c._0(6, 0, null, null, 2, "a", [["ion-button", ""], ["target", "_blank"]], [[8, "hidden", 0], [8, "href", 4]], null, null, C.b, C.a)), c.Z(7, 1097728, null, 0, w.a, [[8, ""], m.a, c.j, c.A], null, null), (n()(),
            c._21(-1, 0, ["\n            Más información\n        "])), (n()(),
            c._21(-1, null, ["\n        "])), (n()(),
            c._21(-1, null, ["\n    "]))], null, function(n, l) {
                var e = l.component;
                n(l, 2, 0, e.readMsg.mensajeCompleto);
                n(l, 6, 0, !e.readMsg.dataLink, e.readMsg.dataLink)
            })
        }
        function s(n) {
            return c._23(0, [(n()(),
            c._0(0, 0, null, null, 15, "ion-header", [["page", ""]], null, null, null, null, null)), c.Z(1, 16384, null, 0, E.a, [m.a, c.j, c.A, [2, O.a]], null, null), (n()(),
            c._21(-1, null, ["\n    "])), (n()(),
            c._0(3, 0, null, null, 11, "ion-navbar", [["class", "toolbar"]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, A.b, A.a)), c.Z(4, 49152, null, 0, x.a, [I.a, [2, O.a], [2, R.a], m.a, c.j, c.A], null, null), (n()(),
            c._21(-1, 3, ["\n        "])), (n()(),
            c._0(6, 0, null, 3, 1, "button", [["class", "left"]], null, [[null, "click"]], function(n, l, e) {
                var t = !0;
                if ("click" === l) {
                    t = !1 !== n.component.backToHome() && t
                }
                return t
            }, null, null)), (n()(),
            c._0(7, 0, null, null, 0, "img", [["class", "icon-back"], ["src", "assets/images/button/icono_Atras.png"]], null, null, null, null, null)), (n()(),
            c._21(-1, 3, ["\n        "])), (n()(),
            c.V(16777216, null, 3, 1, null, t)), c.Z(10, 16384, null, 0, v.k, [c.J, c.G], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            c._21(-1, 3, ["\n        "])), (n()(),
            c.V(16777216, null, 3, 1, null, a)), c.Z(13, 16384, null, 0, v.k, [c.J, c.G], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            c._21(-1, 3, ["\n    "])), (n()(),
            c._21(-1, null, ["\n"])), (n()(),
            c._21(-1, null, ["\n\n\n"])), (n()(),
            c._0(17, 0, null, null, 8, "ion-content", [["notificaciones", ""]], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, D.b, D.a)), c.Z(18, 4374528, null, 0, T.a, [m.a, y.a, P.a, c.j, c.A, I.a, k.a, c.v, [2, O.a], [2, R.a]], null, null), (n()(),
            c._21(-1, 1, ["\n    "])), (n()(),
            c.V(16777216, null, 1, 1, null, r)), c.Z(21, 16384, null, 0, v.k, [c.J, c.G], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            c._21(-1, 1, ["\n\n\n    "])), (n()(),
            c.V(16777216, null, 1, 1, null, u)), c.Z(24, 16384, null, 0, v.k, [c.J, c.G], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            c._21(-1, 1, ["\n\n"])), (n()(),
            c._21(-1, null, ["\n"]))], function(n, l) {
                var e = l.component;
                n(l, 10, 0, !e.readMsg);
                n(l, 13, 0, e.readMsg);
                n(l, 21, 0, !e.readMsg);
                n(l, 24, 0, e.readMsg)
            }, function(n, l) {
                n(l, 3, 0, c._12(l, 4)._hidden, c._12(l, 4)._sbPadding);
                n(l, 17, 0, c._12(l, 18).statusbarPadding, c._12(l, 18)._hasRefresher)
            })
        }
        e.d(l, "a", function() {
            return Z
        });
        var c = e(1)
          , d = e(50)
          , p = e(19)
          , h = e(17)
          , m = e(3)
          , _ = e(35)
          , f = e(41)
          , g = e(150)
          , v = e(15)
          , b = e(42)
          , y = e(5)
          , S = e(11)
          , P = e(10)
          , C = e(36)
          , w = e(22)
          , E = e(51)
          , O = e(6)
          , A = e(77)
          , x = e(32)
          , I = e(9)
          , R = e(20)
          , D = e(43)
          , T = e(21)
          , k = e(25)
          , M = e(170)
          , F = e(37)
          , L = e(39)
          , j = e(72)
          , N = e(67)
          , V = c.Y({
            encapsulation: 2,
            styles: [],
            data: {}
        })
          , Z = c.W("page-notificaciones", M.a, function(n) {
            return c._23(0, [(n()(),
            c._0(0, 0, null, null, 1, "page-notificaciones", [], null, null, null, s, V)), c.Z(1, 49152, null, 0, M.a, [F.a, L.a, j.a, N.a], null, null)], null, null)
        }, {}, {}, [])
    },
    428: function(n, l, e) {
        "use strict";
        function t(n) {
            return i._23(0, [(n()(),
            i._0(0, 0, null, null, 25, "ion-item", [["class", "item item-block"]], null, null, null, o.b, o.a)), i.Z(1, 1097728, null, 3, r.a, [u.a, s.a, i.j, i.A, [2, c.a]], null, null), i._19(335544320, 2, {
                contentLabel: 0
            }), i._19(603979776, 3, {
                _buttons: 1
            }), i._19(603979776, 4, {
                _icons: 1
            }), i.Z(5, 16384, null, 0, d.a, [], null, null), (n()(),
            i._21(-1, 2, ["\n            "])), (n()(),
            i._21(-1, 2, ["\n\n        \n            "])), (n()(),
            i._0(8, 0, null, 0, 3, "div", [["item-start", ""]], null, [[null, "click"]], function(n, l, e) {
                var t = !0;
                if ("click" === l) {
                    t = !1 !== n.component.onEntrySelected(e, n.context.$implicit, !0) && t
                }
                return t
            }, null, null)), (n()(),
            i._21(-1, null, ["\n                "])), (n()(),
            i._0(10, 0, null, null, 0, "img", [["class", "icon-fav-type"]], [[8, "hidden", 0], [8, "src", 4]], null, null, null, null)), (n()(),
            i._21(-1, null, ["\n            "])), (n()(),
            i._21(-1, 2, ["\n            "])), (n()(),
            i._0(13, 0, null, 2, 1, "span", [["class", "cursor-pointer autocomplete-entry-text text-ellipsis"]], null, [[null, "click"]], function(n, l, e) {
                var t = !0;
                if ("click" === l) {
                    t = !1 !== n.component.onEntrySelected(e, n.context.$implicit, !0) && t
                }
                return t
            }, null, null)), (n()(),
            i._21(14, null, ["", ""])), (n()(),
            i._21(-1, 2, ["\n            "])), (n()(),
            i._0(16, 0, null, 4, 7, "div", [["class", "bus-time"], ["item-end", ""]], null, [[null, "click"]], function(n, l, e) {
                var t = !0;
                if ("click" === l) {
                    t = !1 !== n.component.onEntryRightIconPressed(e, n.context.$implicit, !0) && t
                }
                return t
            }, null, null)), (n()(),
            i._21(-1, null, ["\n                "])), (n()(),
            i._0(18, 0, null, null, 0, "img", [["class", "cursor-pointer icon-top-left"], ["src", "assets/images/autocomplete/load_text_to_input.png"]], [[8, "hidden", 0]], null, null, null, null)), (n()(),
            i._21(-1, null, ["\n                "])), (n()(),
            i._0(20, 0, null, null, 0, "img", [["class", "cursor-pointer icon-favorite"], ["src", "assets/images/button/icon-star.svg"]], [[8, "hidden", 0]], null, null, null, null)), (n()(),
            i._21(-1, null, ["\n                "])), (n()(),
            i._0(22, 0, null, null, 0, "img", [["class", "cursor-pointer icon-favorite"], ["src", "assets/images/button/icon-star-sel.svg"]], [[8, "hidden", 0]], null, null, null, null)), (n()(),
            i._21(-1, null, ["\n            "])), (n()(),
            i._21(-1, 2, ["\n        \n\n            "])), (n()(),
            i._21(-1, 2, ["            \n\n        "]))], null, function(n, l) {
                n(l, 10, 0, "none" == l.context.$implicit.icon, i._3(1, "", l.context.$implicit.icon, ""));
                n(l, 14, 0, l.context.$implicit.label || l.context.$implicit.text);
                n(l, 18, 0, "usetext" != l.context.$implicit.fav);
                n(l, 20, 0, "no" != l.context.$implicit.fav);
                n(l, 22, 0, "yes" != l.context.$implicit.fav)
            })
        }
        function a(n) {
            return i._23(0, [i._19(402653184, 1, {
                ionicList: 0
            }), (n()(),
            i._0(1, 0, null, null, 14, "ion-content", [], [[2, "statusbar-padding", null], [2, "has-refresher", null]], [[null, "click"]], function(n, l, e) {
                var t = !0;
                if ("click" === l) {
                    t = !1 !== n.component.closeAutocomplete(e) && t
                }
                return t
            }, p.b, p.a)), i.Z(2, 4374528, null, 0, h.a, [s.a, m.a, _.a, i.j, i.A, f.a, g.a, i.v, [2, v.a], [2, b.a]], null, null), (n()(),
            i._21(-1, 1, ["\n    "])), (n()(),
            i._21(-1, 1, ["\n\n    "])), (n()(),
            i._0(5, 0, [[1, 0], ["ionicList", 1]], 1, 9, "ion-list", [["id", "ionicList"]], null, null, null, null, null)), i.Z(6, 16384, null, 0, y.a, [s.a, i.j, i.A, m.a, S.l, _.a], null, null), (n()(),
            i._21(-1, null, ["\n        "])), (n()(),
            i.V(16777216, null, null, 1, null, t)), i.Z(9, 802816, null, 0, P.j, [i.J, i.G, i.q], {
                ngForOf: [0, "ngForOf"]
            }, null), (n()(),
            i._21(-1, null, ["\n\n        "])), (n()(),
            i._21(-1, null, ["\n        "])), (n()(),
            i._21(-1, null, ["\n        "])), (n()(),
            i._0(13, 0, null, null, 0, "div", [["style", "height: 120px;"]], null, null, null, null, null)), (n()(),
            i._21(-1, null, ["\n        \n    "])), (n()(),
            i._21(-1, 1, ["     \n"])), (n()(),
            i._21(-1, null, ["\n"]))], function(n, l) {
                n(l, 9, 0, l.component.entries)
            }, function(n, l) {
                n(l, 1, 0, i._12(l, 2).statusbarPadding, i._12(l, 2)._hasRefresher)
            })
        }
        e.d(l, "a", function() {
            return A
        });
        var i = e(1)
          , o = e(50)
          , r = e(19)
          , u = e(17)
          , s = e(3)
          , c = e(35)
          , d = e(41)
          , p = e(43)
          , h = e(21)
          , m = e(5)
          , _ = e(10)
          , f = e(9)
          , g = e(25)
          , v = e(6)
          , b = e(20)
          , y = e(42)
          , S = e(11)
          , P = e(15)
          , C = e(89)
          , w = e(16)
          , E = e(57)
          , O = i.Y({
            encapsulation: 2,
            styles: [],
            data: {}
        })
          , A = i.W("page-typeahead", C.a, function(n) {
            return i._23(0, [(n()(),
            i._0(0, 0, null, null, 1, "page-typeahead", [], null, null, null, a, O)), i.Z(1, 49152, null, 0, C.a, [b.a, w.a, v.a, E.a, i.j, i.A, _.a], null, null)], null, null)
        }, {}, {}, [])
    },
    429: function(n, l, e) {
        "use strict";
        function t() {
            return g
        }
        function a(n) {
            return u._23(0, [(n()(),
            u._0(0, 0, null, null, 1, "span", [["class", "badge side-menu-badge"]], null, null, null, null, null)), (n()(),
            u._21(1, null, ["", ""]))], null, function(n, l) {
                n(l, 1, 0, l.component.push.unread)
            })
        }
        function i(n) {
            return u._23(0, [(n()(),
            u._0(0, 0, null, null, 17, "button", [["class", "item item-block"], ["ion-item", ""], ["menuClose", ""]], null, [[null, "click"]], function(n, l, e) {
                var t = !0
                  , a = n.component;
                if ("click" === l) {
                    t = !1 !== u._12(n, 6).close() && t
                }
                if ("click" === l) {
                    t = !1 !== a.openPage(n.context.$implicit) && t
                }
                return t
            }, qn.b, qn.a)), u.Z(1, 1097728, null, 3, Jn.a, [Yn.a, Kn.a, u.j, u.A, [2, Wn.a]], null, null), u._19(335544320, 4, {
                contentLabel: 0
            }), u._19(603979776, 5, {
                _buttons: 1
            }), u._19(603979776, 6, {
                _icons: 1
            }), u.Z(5, 16384, null, 0, Qn.a, [], null, null), u.Z(6, 16384, null, 0, Xn.a, [nl.a], {
                menuClose: [0, "menuClose"]
            }, null), (n()(),
            u._21(-1, 2, ["\n                "])), (n()(),
            u._0(8, 0, null, 2, 1, "img", [], [[8, "src", 4]], null, null, null, null)), u.Z(9, 278528, null, 0, ll.i, [u.q, u.r, u.j, u.B], {
                ngClass: [0, "ngClass"]
            }, null), (n()(),
            u._21(-1, 2, ["\n                "])), (n()(),
            u._0(11, 0, null, 2, 1, "span", [["class", "btn-text"]], null, null, null, null, null)), (n()(),
            u._21(12, null, ["", ""])), (n()(),
            u._21(-1, 2, ["\n                "])), (n()(),
            u._21(-1, 2, ["\n                "])), (n()(),
            u.V(16777216, null, 2, 1, null, a)), u.Z(16, 16384, null, 0, ll.k, [u.J, u.G], {
                ngIf: [0, "ngIf"]
            }, null), (n()(),
            u._21(-1, 2, ["\n            "]))], function(n, l) {
                var e = l.component;
                n(l, 6, 0, "");
                n(l, 9, 0, l.context.$implicit.iconclass);
                n(l, 16, 0, l.context.$implicit.badge && e.push.unread > 0)
            }, function(n, l) {
                n(l, 8, 0, "assets/images/icon/" + l.context.$implicit.icon);
                n(l, 12, 0, l.context.$implicit.title)
            })
        }
        function o(n) {
            return u._23(0, [u._19(402653184, 1, {
                nav: 0
            }), (n()(),
            u._0(1, 0, null, null, 33, "ion-menu", [["id", "leftMenu"], ["role", "navigation"], ["side", "left"], ["type", "overlay"]], null, null, null, el.b, el.a)), u._17(6144, null, tl.a, null, [al.a]), u.Z(3, 245760, null, 2, al.a, [nl.a, u.j, Kn.a, il.a, u.A, ol.a, rl.l, ul.a, sl.a], {
                content: [0, "content"],
                id: [1, "id"],
                type: [2, "type"],
                side: [3, "side"]
            }, null), u._19(335544320, 2, {
                menuContent: 0
            }), u._19(335544320, 3, {
                menuNav: 0
            }), (n()(),
            u._21(-1, 0, ["\n    "])), (n()(),
            u._0(7, 0, null, 0, 12, "ion-header", [], null, null, null, null, null)), u.Z(8, 16384, null, 0, cl.a, [Kn.a, u.j, u.A, [2, dl.a]], null, null), (n()(),
            u._21(-1, null, ["\n        "])), (n()(),
            u._0(10, 0, null, null, 8, "ion-toolbar", [["class", "toolbar"]], [[2, "statusbar-padding", null]], null, null, pl.b, pl.a)), u.Z(11, 49152, null, 0, hl.a, [Kn.a, u.j, u.A], null, null), (n()(),
            u._21(-1, 3, ["\n            "])), (n()(),
            u._0(13, 0, null, 3, 4, "ion-title", [], null, null, null, ml.b, ml.a)), u.Z(14, 49152, null, 0, _l.a, [Kn.a, u.j, u.A, [2, hl.a], [2, fl.a]], null, null), (n()(),
            u._21(-1, 0, ["\n                "])), (n()(),
            u._0(16, 0, null, 0, 0, "img", [["class", "icon-bus"], ["src", "assets/images/button/icon-en-bus.svg"]], null, null, null, null, null)), (n()(),
            u._21(-1, 0, ["\n                CÓMO IR\n            "])), (n()(),
            u._21(-1, 3, ["\n        "])), (n()(),
            u._21(-1, null, ["\n    "])), (n()(),
            u._21(-1, 0, ["\n    "])), (n()(),
            u._0(21, 0, null, 0, 12, "ion-content", [], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, gl.b, gl.a)), u.Z(22, 4374528, [[2, 4]], 0, vl.a, [Kn.a, il.a, ul.a, u.j, u.A, sl.a, ol.a, u.v, [2, dl.a], [2, bl.a]], null, null), (n()(),
            u._21(-1, 1, ["\n        "])), (n()(),
            u._0(24, 0, null, 0, 6, "ion-list", [["ion-fixed", ""]], null, null, null, null, null)), u.Z(25, 16384, null, 0, yl.a, [Kn.a, u.j, u.A, il.a, rl.l, ul.a], null, null), (n()(),
            u._21(-1, null, ["\n            "])), (n()(),
            u._21(-1, null, ["\n            "])), (n()(),
            u.V(16777216, null, null, 1, null, i)), u.Z(29, 802816, null, 0, ll.j, [u.J, u.G, u.q], {
                ngForOf: [0, "ngForOf"]
            }, null), (n()(),
            u._21(-1, null, ["\n        "])), (n()(),
            u._21(-1, 1, ["\n        "])), (n()(),
            u._0(32, 0, null, 0, 0, "img", [["class", "side-menu-icon-montevideo"], ["ion-fixed", ""], ["src", "assets/images/IM-logo.png"]], null, null, null, null, null)), (n()(),
            u._21(-1, 1, ["\n    "])), (n()(),
            u._21(-1, 0, ["\n"])), (n()(),
            u._21(-1, null, ["\n"])), (n()(),
            u._0(36, 0, null, null, 2, "ion-nav", [["id", "nav"]], null, null, null, Sl.b, Sl.a)), u._17(6144, null, tl.a, null, [Pl.a]), u.Z(38, 4374528, [[1, 4], ["rootNavController", 4], ["content", 4]], 0, Pl.a, [[2, dl.a], [2, bl.a], sl.a, Kn.a, il.a, u.j, u.v, u.A, u.i, rl.l, Cl.a, [2, wl.a], ul.a, u.k], {
                root: [0, "root"]
            }, null)], function(n, l) {
                var e = l.component;
                n(l, 3, 0, u._12(l, 38), "leftMenu", "overlay", "left");
                n(l, 29, 0, e.pages);
                n(l, 38, 0, e.rootPage)
            }, function(n, l) {
                n(l, 10, 0, u._12(l, 11)._sbPadding);
                n(l, 21, 0, u._12(l, 22).statusbarPadding, u._12(l, 22)._hasRefresher)
            })
        }
        Object.defineProperty(l, "__esModule", {
            value: !0
        });
        var r = e(58)
          , u = e(1)
          , s = e(0)
          , c = (e(8),
        e(49))
          , d = e(26)
          , p = (["tiles1", "tiles2"].map(function(n) {
            return "https://{subdomain}.montevideo.gub.uy/geoserver/service/tms/1.0.0/".replace("{subdomain}", n)
        }).map(function(n) {
            return n + "imm:v_uptu_ubic_paradas_con_horarios_fid"
        }),
        "https://geoserver.montevideo.gub.uy/geoserver/")
          , h = "https://api.montevideo.gub.uy/ubicacionesRest/"
          , m = "https://api.montevideo.gub.uy/transporteRest/"
          , _ = "https://api.montevideo.gub.uy/comoirRest/rest/comoir/"
          , f = "http://www.imm.gub.uy"
          , g = {
            GEOSERVER_WMS_URL: p + "wms",
            GEOSERVER_WMS_CACHE_URL: p + "gwc/service/wms",
            GEOSERVER_WFS_URL: p + "ows",
            GEOWEB_CACHE_VECTOR_TILE_PARADAS: ["tiles1", "tiles2"].map(function(n) {
                return "https://{subdomain}.montevideo.gub.uy/geoserver/service/tms/1.0.0/".replace("{subdomain}", n)
            }).map(function(n) {
                return n + "imm:v_uptu_ubic_paradas_con_horarios_fid"
            }),
            GEOSERVER_WFS_PARADAS_DESHABILITADAS: p + "ows?service=wfs&version=2.0.0&request=GetFeature&typename=imm:v_uptu_ubic_paradas_con_horarios_deshabilitadas&outputFormat=application/json",
            LAYER_CARTO: "mobile_carto_basica",
            LAYER_PARADAS_VARIANTES: {
                featureNS: f,
                featurePrefix: "imm",
                featureTypes: ["v_uptu_paradas", "uptu_parada_no_maximal"]
            },
            LAYER_PARADAS_FILTRO: {
                featureNS: "http://www.imm.gub.uy",
                featurePrefix: "imm",
                featureTypes: ["v_uptu_ubic_paradas_con_horarios_fid"]
            },
            LAYER_VARIANTE_NO_MAXIMAL: {
                featureNS: f,
                featurePrefix: "imm",
                featureTypes: ["uptu_variante_no_maximal"]
            },
            UBIC_GEODECOD_UBICACION: h + "geodecodificacion/ubicacion?",
            LUGARES_Y_VIAS_URL: h + "infoUbicacion/lugaresDeInteresYVias/?",
            ESQUINA_URL: h + "infoUbicacion/esquinas/",
            ESQUINA_VIAS_URL: h + "esquinas/",
            ESQUINA_POSICION_URL: h + "esquinas/posicion/",
            CULTURA_POSICION_URL: h + "cultura/posicion/",
            DIRECCION_POSICION_URL: h + "direcciones/posicion/",
            DIRECCION_INFO_URL: h + "direcciones/",
            PARQUE_POSICION_URL: h + "nombresDeParque/",
            PLAYA_POSICION_URL: h + "playas/",
            EDUCACION_POSICION_URL: h + "educacion/",
            ESPACIO_LIBRE_POSICION_URL: h + "nombresDeEspacioLibre/",
            MONUMENTO_POSICION_URL: h + "monumentos/",
            DEPORTE_POSICION_URL: h + "deporte/",
            PATRIMONIO_POSICION_URL: h + "patrimonio/",
            SALUD_POSICION_URL: h + "salud/",
            VIA_PUNTO_URL: h + "vias/punto/",
            NOTIFICACIONES_MENSAJES: "https://api.montevideo.gub.uy/notificacion/mensajes",
            SIGUIENTES_BUSES_PARADA: m + "siguientesParada/",
            SIGUIENTES_BUSES_RUTEO: m + "siguientesRuteo/",
            LINEAS_DE_PARADA: m + "lineas/",
            VARIANTES_CIRCULARES: m + "partesCirculares/",
            COMOIR_CAMINANDO: _ + "caminando/",
            COMOIR_BUS: _ + "bus/",
            COMOIR_BUS_RECORRIDO: _ + "cortarRecorrido?",
            COMOIR_DURACION_RECORRIDO: _ + "duracionRuteo",
            BUSES_STATUS_URL: "https://pci.montevideo.gub.uy/buses/control",
            ENABLE_ANALYTICS: !0,
            ANALYTICS_TRACKID: "UA-110957177-1",
            ENABLE_PUSH: !0
        }
          , v = function() {
            return function() {}
        }()
          , b = e(158)
          , y = e(159)
          , S = e(168)
          , P = e(80)
          , C = e(79)
          , w = function() {
            function n(n, l) {
                this.ubicacionesService = n,
                this.mapUtilsFiltroParadasService = l,
                this.homeCtrl = null
            }
            return n.prototype.decodificarURI = function(n) {
                return n ? decodeURIComponent(n) : n
            }
            ,
            n.prototype.validarParametrosObligatorios = function(n, l) {
                var e = this;
                return console.log("DeeplinksService.validarParametrosObligatorios() ", [n, l]),
                new Promise(function(t, a) {
                    if (n)
                        if ("/comoir/destino" === n)
                            l ? e.validaParametrosObligatoriosOrigenDestino(e.decodificarURI(l.td), l.c1d, l.c2d, e.decodificarURI(l.sridd), e.decodificarURI(l.ld)).then(function(e) {
                                e ? t({
                                    origen: null,
                                    destino: e,
                                    parada: null
                                }) : (console.error("No se pudo obtener datos del destino a partir de los parametros", n, l),
                                a("No se pudo obtener datos del destino a partir de los parametros"))
                            }) : a("Faltan parametros obligatorios");
                        else if ("/comoir/ruta" === n) {
                            if (l) {
                                var i = [];
                                return i.push(e.validaParametrosObligatoriosOrigenDestino(e.decodificarURI(l.to), l.c1o, l.c2o, e.decodificarURI(l.srido), e.decodificarURI(l.lo))),
                                i.push(e.validaParametrosObligatoriosOrigenDestino(e.decodificarURI(l.td), l.c1d, l.c2d, e.decodificarURI(l.sridd), e.decodificarURI(l.ld))),
                                Promise.all(i).then(function(n) {
                                    n[0] && n[1] ? t({
                                        origen: n[0],
                                        destino: n[1],
                                        parada: null
                                    }) : a("No se pudo obtener datos de origen o destino a partir de los parametros")
                                }, function(n) {
                                    a(n)
                                })
                            }
                            a("Faltan parametros obligatorios")
                        } else
                            "/comoir/" === n && t({});
                    else
                        a("No tiene una ruta para saber que tipo de deeplink es")
                }
                )
            }
            ,
            n.prototype.validaParametrosObligatoriosOrigenDestino = function(n, l, e, t, a) {
                var i = this;
                return new Promise(function(o, r) {
                    n ? "CULTURA" === n || "DEPORTE" === n || "EDUCACION" === n || "ESPACIO LIBRE" === n || "PARQUE" === n || "MONUMENTO" === n || "PATRIMONIO" === n || "PLAYA" === n || "SALUD" === n || "VARIANTE" === n || "VIA" === n ? l ? o(i.ubicacionesService.obtenerUbicacionPorTipoYCodigo(n, l, e, t, a)) : r("Faltan parametros obligatorios") : "ESQUINA" !== n && "DIRECCION" !== n && "COORDS" !== n || (l && e ? o(i.ubicacionesService.obtenerUbicacionPorTipoYCodigo(n, l, e, t, a)) : r("Faltan parametros obligatorios")) : r("No tiene tipo ubicacion")
                }
                )
            }
            ,
            n.prototype.iniciarParadaPorCodigo = function(n) {
                var l = this;
                return new Promise(function(e, t) {
                    n ? e(l.mapUtilsFiltroParadasService.getParadaPorCodigo(n)) : t("Falta codigo parada")
                }
                )
            }
            ,
            n
        }()
          , E = e(67)
          , O = e(162)
          , A = e(170)
          , x = function() {
            function n(n, l, e, t, a, i, o, r, u) {
                var s = this;
                this.platform = n,
                this.statusBar = l,
                this.splashScreen = e,
                this.deeplinksService = t,
                this.loadingCtrl = a,
                this.alertCtrl = i,
                this.events = o,
                this.push = r,
                this.toastCtrl = u,
                this.rootPage = S.a,
                this.params = null,
                this.loaderDeeplinks = null,
                this.alertErrorDeeplink = null,
                this.pages = [{
                    icon: "side-menu-mail.png",
                    iconclass: "mail",
                    title: "Bandeja de notificaciones",
                    comp: A.a,
                    badge: !0
                }, {
                    icon: "side-menu-star.png",
                    iconclass: "star",
                    title: "Favoritos",
                    comp: O.a
                }, {
                    icon: "side-menu-stm.png",
                    iconclass: "stm",
                    title: "Mi STM",
                    comp: null
                }],
                this.events.subscribe("nav:load-home", function() {
                    s.loadHome()
                }),
                this.events.subscribe("nav:load-notification", function(n) {
                    s.loadNotification(n)
                }),
                this.events.subscribe("push:alert-message", function(n) {
                    s.alertNewMessage(n)
                }),
                this.events.subscribe("push:new-message", function(n) {
                    n.tap ? s.events.publish("nav:load-notification", n.idMensaje) : s.events.publish("push:alert-message", n)
                }),
                this.init()
            }
            return n.prototype.loadHome = function() {
                var n = this;
                this.nav.setRoot(S.a);
                var l;
                l = setInterval(function(e) {
                    var t = document.getElementById("map");
                    console.log("target", t),
                    t && (n.events.publish("sidemenu:load-map"),
                    clearInterval(l))
                }, 100),
                setTimeout(function(n) {
                    clearInterval(l),
                    console.log("TIMEOUT")
                }, 5e3)
            }
            ,
            n.prototype.loadNotification = function(n) {
                this.push.setReadMsg(n),
                this.nav.setRoot(A.a)
            }
            ,
            n.prototype.openPage = function(n) {
                console.log(n),
                "stm" == n.iconclass ? (console.log("ABRIR INAPP"),
                window.open("https://m.montevideo.gub.uy/app/comoir/mistm", "_system")) : n.comp && this.nav.setRoot(n.comp)
            }
            ,
            n.prototype.alertNewMessage = function(n) {
                var l = this
                  , e = new Date
                  , t = this.toastCtrl.create({
                    duration: 5e3,
                    message: n.summary,
                    showCloseButton: !0,
                    cssClass: "im-toast",
                    closeButtonText: "Leer Más"
                });
                t.onDidDismiss(function() {
                    var t = (new Date).getTime() - e.getTime();
                    console.log("elapsedTime -----\x3e", t),
                    t < 5e3 && l.events.publish("nav:load-notification", n.idMensaje)
                }),
                t.present()
            }
            ,
            n.prototype.try_to_match_url = function() {
                var n = {
                    $args: {}
                }
                  , l = window.location.href.split("?");
                if (l.length > 1)
                    for (var e = l[1].split("&"), t = 0; t < e.length; t++) {
                        var a = e[t].split("=");
                        n.$args[a[0]] = a[1]
                    }
                return n
            }
            ,
            n.prototype.init = function() {
                var n = this;
                console.log(" app Component init"),
                this.platform.ready().then(function() {
                    n.statusBar.styleLightContent(),
                    n.splashScreen.hide(),
                    console.log(" app Component init"),
                    n.platform.is("cordova") ? (console.log("platform cordova"),
                    console.log("Ejecutando PushNotificationProvider init()"),
                    n.push.init(!0)) : n.push.init(!1);
                    var l = window.setTimeout(function() {
                        n.events.publish("deeplink:no-data", {})
                    }, 2e3)
                      , e = window.location.pathname
                      , t = n.try_to_match_url();
                    "/comoir/destino" === e || "/comoir/ruta" === e ? (window.clearTimeout(l),
                    n.loaderDeeplinks || (n.loaderDeeplinks = n.loadingCtrl.create({
                        content: "Obteniendo datos. Por favor, espere..."
                    })),
                    n.loaderDeeplinks.present(),
                    n.deeplinksService.validarParametrosObligatorios(e, t.$args).then(function(l) {
                        n.params = l,
                        n.loaderDeeplinks && (n.loaderDeeplinks.dismiss(),
                        n.loaderDeeplinks = null),
                        n.events.publish("deeplink:data", l)
                    }, function(l) {
                        console.error("DEEPLINK roto faltan parametros", l),
                        n.loaderDeeplinks && (n.loaderDeeplinks.dismiss(),
                        n.loaderDeeplinks = null),
                        n.alertErrorDeeplink = n.alertCtrl.create({
                            title: "Error: enlace mal formado",
                            subTitle: "No fue posible obtener los datos de origen y destino a partir del enlace proporcionado",
                            buttons: ["OK"],
                            cssClass: "im-alert"
                        }),
                        n.alertErrorDeeplink.present(),
                        n.alertErrorDeeplink.onDidDismiss(function() {
                            n.alertErrorDeeplink = null,
                            n.events.publish("deeplink:no-data", {})
                        })
                    })) : "/comoir/parada" === e && (window.clearTimeout(l),
                    n.loaderDeeplinks || (n.loaderDeeplinks = n.loadingCtrl.create({
                        content: "Obteniendo datos. Por favor, espere..."
                    })),
                    n.loaderDeeplinks.present(),
                    n.deeplinksService.iniciarParadaPorCodigo(t.$args.numero).then(function(l) {
                        n.loaderDeeplinks && (n.loaderDeeplinks.dismiss(),
                        n.loaderDeeplinks = null),
                        l[0] ? n.events.publish("deeplink:data-parada", l) : (console.error("DEEPLINK roto no hay parada con ese codigo"),
                        n.loaderDeeplinks && (n.loaderDeeplinks.dismiss(),
                        n.loaderDeeplinks = null),
                        n.alertErrorDeeplink = n.alertCtrl.create({
                            title: "Error: enlace mal formado",
                            subTitle: "No se pudo obtener datos de la parada " + t.$args.numero,
                            buttons: ["OK"],
                            cssClass: "im-alert"
                        }),
                        n.alertErrorDeeplink.present(),
                        n.alertErrorDeeplink.onDidDismiss(function() {
                            n.alertErrorDeeplink = null,
                            n.events.publish("deeplink:no-data", {})
                        }))
                    }, function(l) {
                        console.error("DEEPLINK roto faltan parametros", l),
                        n.loaderDeeplinks && (n.loaderDeeplinks.dismiss(),
                        n.loaderDeeplinks = null),
                        n.alertErrorDeeplink = n.alertCtrl.create({
                            title: "Error: enlace mal formado",
                            subTitle: "No se pudo obtener datos de la parada " + t.$args.numero,
                            buttons: ["OK"],
                            cssClass: "im-alert"
                        }),
                        n.alertErrorDeeplink.present(),
                        n.alertErrorDeeplink.onDidDismiss(function() {
                            n.alertErrorDeeplink = null,
                            n.events.publish("deeplink:no-data", {})
                        })
                    }))
                })
            }
            ,
            n.prototype.restoreMap = function() {
                console.log("restoreMap()"),
                this.events.publish("sidemenu:restore-map")
            }
            ,
            n.prototype.openInboxModal = function() {
                console.log("openInboxModal()", this.rootPage),
                this.events.publish("sidemenu:open-inbox")
            }
            ,
            n
        }()
          , I = e(224)
          , R = e(52)
          , D = e(39)
          , T = e(86)
          , k = e(234)
          , M = e(236)
          , F = e(87)
          , L = e(69)
          , j = e(156)
          , N = e(155)
          , V = e(240)
          , Z = e(203)
          , U = e(238)
          , B = e(241)
          , G = e(38)
          , H = e(239)
          , $ = e(243)
          , z = e(166)
          , q = e(167)
          , J = e(138)
          , Y = e(117)
          , K = function() {
            function n(n, l, e) {
                var t = this;
                this.ga = n,
                this.platform = l,
                this.envVariables = e,
                console.log("GaService constructor"),
                e.ENABLE_ANALYTICS && this.platform.ready().then(function() {
                    t.ga.startTrackerWithId(e.ANALYTICS_TRACKID).then(function() {
                        console.log("Google analytics is ready now"),
                        t.ga.trackView("home").then(function(n) {
                            console.log(n)
                        })
                    }).catch(function(n) {
                        return console.error("Error starting GoogleAnalytics", n)
                    })
                })
            }
            return n.prototype.getGa = function() {
                return this.ga
            }
            ,
            n.prototype.trackView = function(n) {
                return this.ga.trackView(n)
            }
            ,
            n = Object(s.__decorate)([Object(s.__param)(2, Object(u.n)(d.a))], n)
        }()
          , W = e(88)
          , Q = e(76)
          , X = e(223)
          , nn = e(204)
          , ln = e(408)
          , en = e(225)
          , tn = e(157)
          , an = e(227)
          , on = e(153)
          , rn = e(100)
          , un = e(118)
          , sn = function() {
            function n(n, l, e) {
                var t = this;
                this.ga = n,
                this.platform = l,
                this.envVariables = e,
                console.log("GaAnalyticsLoggerProvider Constructor"),
                this.platform.ready().then(function() {
                    t.ga.startTrackerWithId(e.ANALYTICS_TRACKID).then(function() {
                        console.log("Google analytics is ready now"),
                        t.ga.trackView("home").then(function(n) {
                            console.log(n)
                        })
                    }).catch(function(n) {
                        return console.error("Error starting GoogleAnalytics", n)
                    })
                })
            }
            return n.prototype.logEvent = function(n, l) {
                return this.envVariables.ENABLE_ANALYTICS ? this.ga.trackEvent(n, l.action) : Promise.resolve()
            }
            ,
            n.prototype.setScreenView = function(n) {
                return this.envVariables.ENABLE_ANALYTICS ? this.ga.trackView(n) : Promise.resolve()
            }
            ,
            n = Object(s.__decorate)([Object(s.__param)(2, Object(u.n)(d.a))], n)
        }()
          , cn = function() {
            function n(n, l) {
                this.firebase = n,
                this.envVariables = l,
                console.log("Hello FbAnalyticsLoggerProvider Provider"),
                this.firebase.getToken().then(function(n) {
                    return console.log("The token is " + n)
                }).catch(function(n) {
                    return console.error("Error getting token", n)
                })
            }
            return n.prototype.logEvent = function(n, l) {
                return this.envVariables.ENABLE_ANALYTICS ? this.firebase.logEvent(n, l) : Promise.resolve()
            }
            ,
            n.prototype.setScreenView = function(n) {
                return this.envVariables.ENABLE_ANALYTICS ? this.firebase.setScreenName(n) : Promise.resolve()
            }
            ,
            n = Object(s.__decorate)([Object(s.__param)(1, Object(u.n)(d.a))], n)
        }()
          , dn = function() {
            function n() {}
            return n.prototype.logEvent = function(n, l) {
                return Promise.resolve()
            }
            ,
            n.prototype.setScreenView = function(n) {
                return Promise.resolve()
            }
            ,
            n
        }()
          , pn = function() {
            function n(n, l, e, t) {
                this.platform = n,
                this.envVariables = l,
                this.ga = e,
                this.fb = t,
                console.log("PlatformAnalyticsLogger Provider Constructor ok!"),
                l.ENABLE_ANALYTICS ? this.platform.is("cordova") ? (console.log("FbAnalyticsLoggerProvider Provider Constructor ok!"),
                this.analyticsLogger = new cn(this.fb,l)) : (console.log("GaAnalyticsLoggerProvider Provider Constructor ok!"),
                this.analyticsLogger = new sn(this.ga,n,l)) : this.analyticsLogger = new dn
            }
            return n.prototype.logEvent = function(n, l) {
                return this.analyticsLogger.logEvent(n, l)
            }
            ,
            n.prototype.setScreenView = function(n) {
                return this.analyticsLogger.setScreenView(n)
            }
            ,
            n = Object(s.__decorate)([Object(s.__param)(1, Object(u.n)(d.a))], n)
        }()
          , hn = function() {
            return function() {}
        }()
          , mn = e(237)
          , _n = e(235)
          , fn = e(242)
          , gn = e(232)
          , vn = e(229)
          , bn = function() {
            function n(n, l) {
                this.iab = n,
                this.loadingCtrl = l
            }
            return n.prototype.openInAppBrowser = function(n) {
                var l = this;
                this.loading = this.loadingCtrl.create({
                    content: "Espere por favor..."
                });
                var e = this.iab.create(n, "_blank", {
                    closebuttoncaption: "Cerrar",
                    closebuttoncolor: "#ffffff",
                    hidenavigationbuttons: "yes",
                    hideurlbar: "yes",
                    navigationbuttoncolor: "#005BAA",
                    toolbarcolor: "#005BAA"
                });
                return e.on("loadstart").subscribe(function(n) {
                    l.loading.present()
                }, function(n) {
                    l.loading.dismiss()
                }),
                e.on("loadstop").subscribe(function() {
                    l.loading.dismiss()
                }, function(n) {
                    l.loading.dismiss()
                }),
                e.on("loaderror").subscribe(function() {
                    l.loading.dismiss()
                }, function(n) {
                    l.loading.dismiss()
                }),
                e.on("exit").subscribe(function() {
                    l.loading.dismiss()
                }, function(n) {
                    l.loading.dismiss()
                }),
                e
            }
            ,
            n
        }()
          , yn = this && this.__awaiter || function(n, l, e, t) {
            return new (e || (e = Promise))(function(a, i) {
                function o(n) {
                    try {
                        u(t.next(n))
                    } catch (n) {
                        i(n)
                    }
                }
                function r(n) {
                    try {
                        u(t.throw(n))
                    } catch (n) {
                        i(n)
                    }
                }
                function u(n) {
                    n.done ? a(n.value) : new e(function(l) {
                        l(n.value)
                    }
                    ).then(o, r)
                }
                u((t = t.apply(n, l || [])).next())
            }
            )
        }
          , Sn = this && this.__generator || function(n, l) {
            function e(e) {
                return function(o) {
                    return function(e) {
                        if (t)
                            throw new TypeError("Generator is already executing.");
                        for (; r; )
                            try {
                                if (t = 1,
                                a && (i = a[2 & e[0] ? "return" : e[0] ? "throw" : "next"]) && !(i = i.call(a, e[1])).done)
                                    return i;
                                switch (a = 0,
                                i && (e = [0, i.value]),
                                e[0]) {
                                case 0:
                                case 1:
                                    i = e;
                                    break;
                                case 4:
                                    return r.label++,
                                    {
                                        value: e[1],
                                        done: !1
                                    };
                                case 5:
                                    r.label++,
                                    a = e[1],
                                    e = [0];
                                    continue;
                                case 7:
                                    e = r.ops.pop(),
                                    r.trys.pop();
                                    continue;
                                default:
                                    if (i = r.trys,
                                    !(i = i.length > 0 && i[i.length - 1]) && (6 === e[0] || 2 === e[0])) {
                                        r = 0;
                                        continue
                                    }
                                    if (3 === e[0] && (!i || e[1] > i[0] && e[1] < i[3])) {
                                        r.label = e[1];
                                        break
                                    }
                                    if (6 === e[0] && r.label < i[1]) {
                                        r.label = i[1],
                                        i = e;
                                        break
                                    }
                                    if (i && r.label < i[2]) {
                                        r.label = i[2],
                                        r.ops.push(e);
                                        break
                                    }
                                    i[2] && r.ops.pop(),
                                    r.trys.pop();
                                    continue
                                }
                                e = l.call(n, r)
                            } catch (n) {
                                e = [6, n],
                                a = 0
                            } finally {
                                t = i = 0
                            }
                        if (5 & e[0])
                            throw e[1];
                        return {
                            value: e[0] ? e[1] : void 0,
                            done: !0
                        }
                    }([e, o])
                }
            }
            var t, a, i, o, r = {
                label: 0,
                sent: function() {
                    if (1 & i[0])
                        throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: e(0),
                throw: e(1),
                return: e(2)
            },
            "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o
        }
          , Pn = function() {
            function n(n) {
                this.envVariables = n,
                console.log("Hello WebPushService Provider")
            }
            return n.prototype.ngOnInit = function() {
                return yn(this, void 0, void 0, function() {
                    return Sn(this, function(n) {
                        return [2]
                    })
                })
            }
            ,
            n = Object(s.__decorate)([Object(s.__param)(0, Object(u.n)(d.a))], n)
        }()
          , Cn = e(114)
          , wn = function() {
            return function() {}
        }()
          , En = e(93)
          , On = e(409)
          , An = e(410)
          , xn = e(411)
          , In = e(412)
          , Rn = e(413)
          , Dn = e(414)
          , Tn = e(415)
          , kn = e(416)
          , Mn = e(417)
          , Fn = e(160)
          , Ln = e(419)
          , jn = e(421)
          , Nn = e(425)
          , Vn = e(422)
          , Zn = e(420)
          , Un = e(427)
          , Bn = e(418)
          , Gn = e(423)
          , Hn = e(426)
          , $n = e(424)
          , zn = e(428)
          , qn = e(50)
          , Jn = e(19)
          , Yn = e(17)
          , Kn = e(3)
          , Wn = e(35)
          , Qn = e(41)
          , Xn = e(187)
          , nl = e(40)
          , ll = e(15)
          , el = e(718)
          , tl = e(66)
          , al = e(136)
          , il = e(5)
          , ol = e(25)
          , rl = e(11)
          , ul = e(10)
          , sl = e(9)
          , cl = e(51)
          , dl = e(6)
          , pl = e(398)
          , hl = e(46)
          , ml = e(154)
          , _l = e(78)
          , fl = e(32)
          , gl = e(43)
          , vl = e(21)
          , bl = e(20)
          , yl = e(42)
          , Sl = e(719)
          , Pl = e(99)
          , Cl = e(63)
          , wl = e(28)
          , El = e(98)
          , Ol = e(72)
          , Al = e(37)
          , xl = e(112)
          , Il = u.Y({
            encapsulation: 2,
            styles: [],
            data: {}
        })
          , Rl = u.W("ng-component", x, function(n) {
            return u._23(0, [(n()(),
            u._0(0, 0, null, null, 1, "ng-component", [], null, null, null, o, Il)), u.Z(1, 49152, null, 0, x, [il.a, b.a, y.a, w, El.a, Ol.a, Al.a, E.a, xl.a], null, null)], null, null)
        }, {}, {}, [])
          , Dl = e(205)
          , Tl = e(23)
          , kl = e(120)
          , Ml = e(121)
          , Fl = e(57)
          , Ll = e(178)
          , jl = e(65)
          , Nl = e(230)
          , Vl = e(95)
          , Zl = e(81)
          , Ul = e(68)
          , Bl = e(84)
          , Gl = e(211)
          , Hl = e(207)
          , $l = e(407)
          , zl = e(206)
          , ql = e(189)
          , Jl = e(208)
          , Yl = e(231)
          , Kl = e(53)
          , Wl = e(89)
          , Ql = u.X(wn, [En.b], function(n) {
            return u._8([u._9(512, u.i, u.T, [[8, [On.a, An.a, xn.a, In.a, Rn.a, Dn.a, Tn.a, kn.a, Mn.a, Fn.a, Ln.a, jn.a, Nn.a, Vn.a, Zn.a, Un.a, Bn.a, Gn.a, Hn.a, $n.a, zn.a, Rl]], [3, u.i], u.t]), u._9(5120, u.s, u._18, [[3, u.s]]), u._9(4608, ll.m, ll.l, [u.s, [2, ll.u]]), u._9(5120, u.b, u._2, []), u._9(5120, u.q, u._10, []), u._9(5120, u.r, u._13, []), u._9(4608, r.c, r.q, [ll.d]), u._9(6144, u.E, null, [r.c]), u._9(4608, r.f, Dl.a, []), u._9(5120, r.d, function(n, l, e, t, a) {
                return [new r.k(n,l), new r.o(e), new r.n(t,a)]
            }, [ll.d, u.v, ll.d, ll.d, r.f]), u._9(4608, r.e, r.e, [r.d, u.v]), u._9(135680, r.m, r.m, [ll.d]), u._9(4608, r.l, r.l, [r.e, r.m]), u._9(6144, u.C, null, [r.l]), u._9(6144, r.p, null, [r.m]), u._9(4608, u.H, u.H, [u.v]), u._9(4608, r.h, r.h, [ll.d]), u._9(4608, r.i, r.i, [ll.d]), u._9(4608, c.c, c.c, []), u._9(4608, c.h, c.b, []), u._9(5120, c.j, c.k, []), u._9(4608, c.i, c.i, [c.c, c.h, c.j]), u._9(4608, c.g, c.a, []), u._9(5120, c.e, c.l, [c.i, c.g]), u._9(4608, Tl.k, Tl.k, []), u._9(4608, Tl.c, Tl.c, []), u._9(5120, d.a, t, []), u._9(4608, Al.a, Al.a, []), u._9(4608, kl.a, kl.a, [Al.a]), u._9(4608, Ml.a, Ml.a, []), u._9(5120, Z.b, Z.d, [Z.c]), u._9(4608, D.a, D.a, [Z.b]), u._9(4608, Fl.a, Fl.a, [D.a]), u._9(4608, Y.a, Y.a, []), u._9(4608, sn, sn, [Y.a, il.a, d.a]), u._9(4608, rn.a, rn.a, []), u._9(4608, cn, cn, [rn.a, d.a]), u._9(4608, pn, pn, [il.a, d.a, Y.a, rn.a]), u._9(4608, Ll.a, Ll.a, [sl.a, Kn.a]), u._9(4608, Ol.a, Ol.a, [sl.a, Kn.a]), u._9(4608, Yn.a, Yn.a, []), u._9(4608, jl.a, jl.a, [il.a]), u._9(4608, ol.a, ol.a, [Kn.a, il.a, u.v, ul.a]), u._9(4608, El.a, El.a, [sl.a, Kn.a]), u._9(5120, ll.h, Nl.c, [ll.s, [2, ll.a], Kn.a]), u._9(4608, ll.g, ll.g, [ll.h]), u._9(5120, Vl.b, Vl.d, [sl.a, Vl.a]), u._9(5120, wl.a, wl.b, [sl.a, Vl.b, ll.g, Zl.b, u.i]), u._9(4608, Ul.a, Ul.a, [sl.a, Kn.a, wl.a]), u._9(4608, Bl.a, Bl.a, [sl.a, Kn.a]), u._9(4608, Gl.a, Gl.a, [sl.a, Kn.a, wl.a]), u._9(4608, Hl.a, Hl.a, [Kn.a, il.a, ul.a, sl.a, rl.l]), u._9(4608, xl.a, xl.a, [sl.a, Kn.a]), u._9(4608, Cl.a, Cl.a, [il.a, Kn.a]), u._9(4608, b.a, b.a, []), u._9(4608, y.a, y.a, []), u._9(4608, N.a, N.a, []), u._9(4608, I.a, I.a, []), u._9(4608, C.a, C.a, [c.e, d.a]), u._9(4608, X.a, X.a, [Al.a, I.a]), u._9(4608, en.a, en.a, [Al.a, d.a]), u._9(4608, on.a, on.a, []), u._9(4608, R.a, R.a, [Al.a, il.a, D.a, C.a, X.a, en.a, on.a, El.a, d.a]), u._9(4608, G.a, G.a, []), u._9(4608, T.a, T.a, [Al.a, il.a, G.a, d.a]), u._9(4608, F.a, F.a, [c.e, Al.a, D.a, d.a]), u._9(4608, P.a, P.a, [c.e, Al.a, G.a, on.a, d.a]), u._9(4608, Cn.a, Cn.a, []), u._9(4608, L.a, L.a, [c.e, Al.a, d.a, Cn.a, C.a]), u._9(4608, nn.Md5, nn.Md5, []), u._9(4608, K, K, [Y.a, il.a, d.a]), u._9(4608, J.a, J.a, []), u._9(4608, Q.a, Q.a, [G.a]), u._9(4608, ln.a, ln.a, []), u._9(4608, w, w, [P.a, C.a]), u._9(4608, j.a, j.a, [c.e, d.a]), u._9(4608, an.a, an.a, []), u._9(4608, tn.a, tn.a, [an.a, Al.a]), u._9(4608, E.a, E.a, [c.e, rn.a, il.a, D.a, Al.a, d.a]), u._9(4608, vn.a, vn.a, []), u._9(4608, bn, bn, [vn.a, El.a]), u._9(4608, Pn, Pn, [d.a]), u._9(512, ll.c, ll.c, []), u._9(512, u.k, $l.a, []), u._9(256, Kn.b, {
                scrollAssist: !1,
                autoFocusAssist: !1,
                locationStrategy: "path"
            }, []), u._9(1024, zl.a, zl.b, []), u._9(1024, il.a, il.b, [r.b, zl.a, u.v]), u._9(1024, Kn.a, Kn.c, [Kn.b, il.a]), u._9(512, ul.a, ul.a, [il.a]), u._9(512, nl.a, nl.a, []), u._9(512, sl.a, sl.a, [Kn.a, il.a, [2, nl.a]]), u._9(512, rl.l, rl.l, [sl.a]), u._9(256, Vl.a, {
                links: [{
                    loadChildren: "../pages/configuracion/configuracion.module.ngfactory#ConfiguracionPageModuleNgFactory",
                    name: "ConfiguracionPage",
                    segment: "configuracion",
                    priority: "low",
                    defaultHistory: []
                }, {
                    loadChildren: "../pages/buses-modal/buses-modal.module.ngfactory#BusesModalPageModuleNgFactory",
                    name: "BusesModalPage",
                    segment: "buses-modal",
                    priority: "low",
                    defaultHistory: []
                }, {
                    loadChildren: "../pages/favoritos/favoritos.module.ngfactory#FavoritosPageModuleNgFactory",
                    name: "FavoritosPage",
                    segment: "favoritos",
                    priority: "low",
                    defaultHistory: []
                }, {
                    loadChildren: "../pages/elegir-horario-modal/elegir-horario-modal.module.ngfactory#ElegirHorarioModalPageModuleNgFactory",
                    name: "ElegirHorarioModalPage",
                    segment: "elegir-horario-modal",
                    priority: "low",
                    defaultHistory: []
                }, {
                    loadChildren: "../pages/inbox/inbox.module.ngfactory#InBoxPageModuleNgFactory",
                    name: "InBoxPage",
                    segment: "inbox",
                    priority: "low",
                    defaultHistory: []
                }, {
                    loadChildren: "../pages/ir-caminando-modal/ir-caminando-modal.module.ngfactory#IrCaminandoModalPageModuleNgFactory",
                    name: "IrCaminandoModalPage",
                    segment: "ir-caminando-modal",
                    priority: "low",
                    defaultHistory: []
                }, {
                    loadChildren: "../pages/ir-en-bus-detalle-modal/ir-en-bus-detalle-modal.module.ngfactory#IrEnBusDetalleModalPageModuleNgFactory",
                    name: "IrEnBusDetalleModalPage",
                    segment: "ir-en-bus-detalle-modal",
                    priority: "low",
                    defaultHistory: []
                }, {
                    loadChildren: "../pages/home/home.module.ngfactory#HomePageModuleNgFactory",
                    name: "HomePage",
                    segment: "home",
                    priority: "low",
                    defaultHistory: []
                }, {
                    loadChildren: "../pages/ir-en-bus-modal/ir-en-bus-modal.module.ngfactory#IrEnBusModalPageModuleNgFactory",
                    name: "IrEnBusModalPage",
                    segment: "ir-en-bus-modal",
                    priority: "low",
                    defaultHistory: []
                }, {
                    loadChildren: "../pages/notificaciones/notificaciones.module.ngfactory#NotificacionesPageModuleNgFactory",
                    name: "NotificacionesPage",
                    segment: "notificaciones",
                    priority: "low",
                    defaultHistory: []
                }, {
                    loadChildren: "../pages/typeahead/typeahead.module.ngfactory#TypeaheadPageModuleNgFactory",
                    name: "TypeaheadPage",
                    segment: "typeahead",
                    priority: "low",
                    defaultHistory: []
                }]
            }, []), u._9(512, u.h, u.h, []), u._9(512, ql.a, ql.a, [u.h]), u._9(1024, Zl.b, Zl.c, [ql.a, u.p]), u._9(1024, u.c, function(n, l, e, t, a, i, o, u, s, c, d, p, h) {
                return [r.s(n), Jl.a(l), Al.b(e, t), Hl.b(a, i, o, u, s), Zl.d(c, d, p, h)]
            }, [[2, u.u], Kn.a, il.a, ul.a, Kn.a, il.a, ul.a, sl.a, rl.l, Kn.a, Vl.a, Zl.b, u.v]), u._9(512, u.d, u.d, [[2, u.c]]), u._9(131584, u.f, u.f, [u.v, u.U, u.p, u.k, u.i, u.d]), u._9(512, u.e, u.e, [u.f]), u._9(512, r.a, r.a, [[3, r.a]]), u._9(512, c.f, c.f, []), u._9(512, Tl.j, Tl.j, []), u._9(512, Tl.d, Tl.d, []), u._9(512, Tl.i, Tl.i, []), u._9(512, Nl.a, Nl.a, []), u._9(512, Z.a, Z.a, []), u._9(512, v, v, []), u._9(512, Nl.b, Nl.b, []), u._9(512, W.a, W.a, []), u._9(512, Yl.a, Yl.a, []), u._9(512, un.a, un.a, []), u._9(512, k.a, k.a, []), u._9(512, M.a, M.a, []), u._9(512, Kl.a, Kl.a, []), u._9(512, V.a, V.a, []), u._9(512, mn.a, mn.a, []), u._9(512, _n.a, _n.a, []), u._9(512, fn.a, fn.a, []), u._9(512, gn.a, gn.a, []), u._9(512, U.a, U.a, []), u._9(512, B.a, B.a, []), u._9(512, z.a, z.a, []), u._9(512, q.a, q.a, []), u._9(512, H.a, H.a, []), u._9(512, $.a, $.a, []), u._9(512, hn, hn, []), u._9(512, wn, wn, []), u._9(256, Zl.a, Wl.a, []), u._9(256, Z.c, {
                name: "im_db",
                storeName: "im_comoir",
                driverOrder: ["indexeddb", "sqlite", "websql", "localstorage"]
            }, []), u._9(256, En.a, x, []), u._9(256, ll.a, "/", [])])
        });
        Object(u.N)(),
        Object(r.j)().bootstrapModuleFactory(Ql)
    },
    52: function(n, l, e) {
        "use strict";
        var t = e(0)
          , a = e(1)
          , i = (e(8),
        e(26))
          , o = e(56)
          , r = e(113)
          , u = e(394)
          , s = function() {
            function n(n, l, e) {
                this.idBus = n,
                this.coordinates = l,
                this.linea = e
            }
            return Object.defineProperty(n.prototype, "$idBus", {
                get: function() {
                    return this.idBus
                },
                set: function(n) {
                    this.idBus = n
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(n.prototype, "$coordinates", {
                get: function() {
                    return this.coordinates
                },
                set: function(n) {
                    this.coordinates = n
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(n.prototype, "$linea", {
                get: function() {
                    return this.linea
                },
                set: function(n) {
                    this.linea = n
                },
                enumerable: !0,
                configurable: !0
            }),
            n
        }();
        e(79),
        e(223),
        e(39),
        e(225),
        e(153);
        e.d(l, "a", function() {
            return c
        });
        var c = function() {
            function n(n, l, e, t, a, i, o, u, s) {
                var c = this;
                this.events = n,
                this.platform = l,
                this.dataService = e,
                this.mapUtilsFiltroParadas = t,
                this.mapUtilsGeolocation = a,
                this.mapUtilsParadas = i,
                this.mapUtilsProjections = o,
                this.loadingCtrl = u,
                this.envVariables = s,
                this.map = null,
                this.zIndexMapa = 0,
                this.zIndexAccuracyLayer = 1,
                this.zIndexComoIrLayer = 3,
                this.zIndexParadasSombra = 5,
                this.zIndexParadasIntermedias = 6,
                this.zIndexParadas = 7,
                this.zIndexParadasDeshabilitadas = 9,
                this.zIndexLayerParadas = 5,
                this.zIndexLayerParadasDeshabilitadas = 9,
                this.zIndezLayerParadaSeleccionada = 10,
                this.zIndexOrigenDestinoLayer = 12,
                this.zIndexgeoRefLater = 14,
                this.zIndexBusesCluster = 100,
                this.currentLatitude = null,
                this.currentLongitude = null,
                this.currentAccuracy = null,
                this.geoLocateZoom = 18,
                this.loadingGeoloc = null,
                this.busesVectorSrc = null,
                this.busesETA = null,
                this.accuracyFeature = null,
                this.positionFeature = null,
                this.trackingFeature = null,
                this.trackingSuscription = null,
                this.deltaMean = 500,
                this.ready = null,
                this.last_coords = null,
                this.last_zoom = 0,
                this.lineasSeleccionadas = new Array,
                this.modalState = !0,
                this.padding = [0, 0, 0, 0],
                this.origenDestinoSource = null,
                this.origenFeature = null,
                this.origenGeometryFeature = null,
                this.destinoFeature = null,
                this.destinoGeometryFeature = null,
                this.comoirSource = null,
                this.promiseParadasIntermediasDirecto = null,
                this.promiseParadasIntermediasTrasbordo = null,
                this.geoJSONformat = null,
                this.olStyleCaminando = new r.style.Style({
                    stroke: new r.style.Stroke({
                        color: "rgba(122, 122, 122, 0.7)",
                        lineCap: "butt",
                        width: 5
                    })
                }),
                this.olStyleRecorridoBus = new r.style.Style({
                    stroke: new r.style.Stroke({
                        color: "rgba(103, 72, 155, 0.7)",
                        lineCap: "butt",
                        width: 6
                    })
                }),
                this.olStyleHidden = new r.style.Style,
                this.events.subscribe("map-utils-geolocation-service:update-geolocation", function(n) {
                    c.updateGeolocation(n)
                }),
                this.init(),
                this.mapUtilsParadas.iniciar(this.zIndexParadas, this.zIndexParadasSombra, this.zIndexParadasDeshabilitadas, this.zIndexLayerParadas, this.zIndexLayerParadasDeshabilitadas, this.zIndezLayerParadaSeleccionada, this.zIndexParadasIntermedias)
            }
            return n.prototype.init = function() {
                var n = this;
                this.ready = new Promise(function(l, e) {
                    n.platform.ready().then(function() {
                        Promise.all([n.dataService.getLastCoords().then(function(l) {
                            n.last_coords = l || o.i
                        }), n.dataService.getLastZoom().then(function(l) {
                            n.last_zoom = l || o.j
                        })]).then(function() {
                            l(n)
                        })
                    })
                }
                )
            }
            ,
            n.prototype.getMap = function() {
                return console.log("MAP", this.map),
                this.map
            }
            ,
            n.prototype.getSelected = function() {
                return this.mapUtilsParadas.obtenerParadaSeleccionada()
            }
            ,
            n.prototype.getCoordsSelected = function() {
                return this.mapUtilsParadas.obtenerCoordenadasParadaSeleccionada()
            }
            ,
            n.prototype.getCurrentState = function() {
                return {
                    coords: this.last_coords,
                    zoom: this.last_zoom
                }
            }
            ,
            n.prototype.setCurrentState = function(n) {
                this.centerMap(n.coords[0], n.coords[1], n.zoom)
            }
            ,
            n.prototype.leaveModalState = function() {
                this.modalState = !1,
                this.padding = [0, 0, 0, 0],
                console.log("MapService.leaveModalState()", [this.padding])
            }
            ,
            n.prototype.enterModalState = function(n) {
                this.modalState = !0,
                this.padding = n,
                console.log("MapService.enterModalState()", [this.padding])
            }
            ,
            n.prototype.deselectAll = function() {
                this.mapUtilsParadas.deseleccionarParadas(),
                this.lineasSeleccionadas = [],
                this.busesVectorSrc.clear(!0),
                this.limpiarRuteoComoir()
            }
            ,
            n.prototype.deleteBusesRealTime = function() {
                this.lineasSeleccionadas = [],
                this.busesVectorSrc.clear(!0)
            }
            ,
            n.prototype.clear = function() {
                this.deleteBusesRealTime(),
                this.limpiarRuteoComoir()
            }
            ,
            n.prototype.reloadMap = function() {
                return this.map = null,
                this.loadMap()
            }
            ,
            n.prototype.loadMap = function() {
                var n = this;
                return this.map ? Promise.resolve(this.map) : this.ready.then(function() {
                    return new Promise(function(l, e) {
                        var t = n.envVariables
                          , a = [o.o[0], o.o[1], o.o[2], o.o[3]]
                          , i = u.defs ? u : u.default;
                        r.proj.setProj4(i),
                        i.defs("EPSG:32721", "+proj=utm +zone=21 +south +datum=WGS84 +units=m +no_defs"),
                        r.proj.get("EPSG:32721") || console.error("Fallo al registrar projection EPSG:32721 en OpenLayers"),
                        n.mapUtilsParadas.iniciar(n.zIndexParadas, n.zIndexParadasSombra, n.zIndexParadasDeshabilitadas, n.zIndexLayerParadas, n.zIndexLayerParadasDeshabilitadas, n.zIndezLayerParadaSeleccionada, n.zIndexParadasIntermedias);
                        var s = new r.source.TileWMS({
                            url: t.GEOSERVER_WMS_CACHE_URL,
                            projection: o.x,
                            params: {
                                LAYERS: t.LAYER_CARTO,
                                TILED: !0,
                                WIDTH: "512",
                                HEIGHT: "512",
                                SRS: o.x,
                                FORMAT: "image/png"
                            },
                            serverType: "geoserver"
                        })
                          , c = new r.layer.Tile({
                            preload: 1 / 0,
                            source: s,
                            useInterimTilesOnError: !1,
                            extent: a
                        })
                          , d = function(n, l) {
                            var e = -25
                              , t = ""
                              , a = 1;
                            2 == l.length ? (e = -35,
                            a = 2) : l.length > 2 && (e = -45,
                            a = 2);
                            for (var i = 0; i < a; i++)
                                t += l[i],
                                i < a - 1 && (t += "\n");
                            return 2 == a && 3 == l.length ? t = t + "\n" + l[2] : 2 == a && l.length > 3 && (t += "\n..."),
                            t = t.trim(),
                            new r.style.Text({
                                textAlign: "center",
                                textBaseline: "middle",
                                font: "bold 12px Arial",
                                text: t,
                                fill: new r.style.Fill({
                                    color: "#000000"
                                }),
                                stroke: new r.style.Stroke({
                                    color: "#FFF",
                                    width: 5
                                }),
                                offsetX: 0,
                                offsetY: e,
                                rotation: 0
                            })
                        }
                          , p = n;
                        n.busesVectorSrc = new r.source.Vector({
                            useSpatialIndex: !0
                        });
                        var h = new r.source.Cluster({
                            distance: 25,
                            source: n.busesVectorSrc
                        })
                          , m = new r.layer.Vector({
                            source: h,
                            style: function(n, l) {
                                var e = n.get("features")
                                  , t = null;
                                p.mapUtilsParadas.obtenerParadaSeleccionada() && (t = p.mapUtilsParadas.obtenerCoordenadasParadaSeleccionada());
                                var a = e[0].getGeometry().getCoordinates()
                                  , i = [];
                                if (e.forEach(function(n) {
                                    (0 == p.lineasSeleccionadas.length || p.lineasSeleccionadas.find(function(l) {
                                        return l == n.getProperties().linea
                                    })) && i.push(n.getProperties().linea)
                                }),
                                i && 0 != i.length) {
                                    if (1 == i.length)
                                        return new r.style.Style({
                                            image: new r.style.Icon({
                                                anchor: [.5, .71],
                                                size: [28, 47],
                                                scale: 1,
                                                anchorXUnits: "fraction",
                                                anchorYUnits: "fraction",
                                                src: o.b
                                            }),
                                            text: d(l, i)
                                        });
                                    var u = o.d
                                      , s = !1;
                                    t[0] < a[0] && (s = !0);
                                    var c = [38, 66]
                                      , h = [.5, .78];
                                    return 2 == i.length ? (u = o.d,
                                    s && (u = o.e)) : (u = o.f,
                                    c = [38, 85],
                                    h = [.5, .85],
                                    s && (u = o.g)),
                                    new r.style.Style({
                                        image: new r.style.Icon({
                                            anchor: h,
                                            size: c,
                                            scale: 1,
                                            anchorXUnits: "fraction",
                                            anchorYUnits: "fraction",
                                            src: u
                                        }),
                                        text: d(l, i)
                                    })
                                }
                                return p.olStyleHidden
                            }
                        });
                        n.origenFeature = new r.Feature,
                        n.origenFeature.setId("origen"),
                        n.origenFeature.setStyle(new r.style.Style({
                            image: new r.style.Icon({
                                anchor: [.5, .5],
                                size: [58, 59],
                                scale: .5,
                                anchorXUnits: "fraction",
                                anchorYUnits: "fraction",
                                src: o.r
                            })
                        })),
                        n.destinoFeature = new r.Feature,
                        n.destinoFeature.setId("destino"),
                        n.destinoFeature.setStyle(new r.style.Style({
                            image: new r.style.Icon({
                                anchor: [.5, .5],
                                size: [61, 61],
                                scale: .5,
                                anchorXUnits: "fraction",
                                anchorYUnits: "fraction",
                                src: o.k
                            })
                        })),
                        n.origenGeometryFeature = new r.Feature,
                        n.origenGeometryFeature.setId("origengeometry"),
                        n.origenGeometryFeature.setStyle(new r.style.Style({
                            stroke: new r.style.Stroke({
                                color: "rgba(0, 180, 139, 0.7)",
                                width: 3
                            }),
                            fill: new r.style.Fill({
                                color: "rgba(0, 180, 139, 0.5)"
                            })
                        })),
                        n.destinoGeometryFeature = new r.Feature,
                        n.destinoGeometryFeature.setId("destinogeometry"),
                        n.destinoGeometryFeature.setStyle(new r.style.Style({
                            stroke: new r.style.Stroke({
                                color: "rgba(255, 157, 0, 0.7)",
                                width: 3
                            }),
                            fill: new r.style.Fill({
                                color: "rgba(255, 157, 0, 0.5)"
                            })
                        })),
                        n.origenDestinoSource = new r.source.Vector({
                            features: [n.origenGeometryFeature, n.origenFeature, n.destinoGeometryFeature, n.destinoFeature]
                        });
                        var _ = new r.layer.Vector({
                            source: n.origenDestinoSource
                        });
                        n.comoirSource = new r.source.Vector({
                            useSpatialIndex: !1
                        });
                        var f = new r.layer.Vector({
                            source: n.comoirSource
                        });
                        n.accuracyFeature = new r.Feature,
                        n.positionFeature = new r.Feature,
                        n.positionFeature.setStyle(new r.style.Style({
                            image: new r.style.Icon({
                                anchor: [.5, .5],
                                size: [333, 348],
                                scale: .2,
                                anchorXUnits: "fraction",
                                anchorYUnits: "fraction",
                                src: o.p
                            })
                        })),
                        n.trackingFeature = new r.Feature,
                        n.trackingFeature.setStyle(new r.style.Style({
                            image: new r.style.Icon({
                                anchor: [.5, 1],
                                size: [34, 40],
                                scale: 1,
                                anchorXUnits: "fraction",
                                anchorYUnits: "fraction",
                                src: "assets/images/map/geolocation_marker_heading.png"
                            })
                        }));
                        var g = new r.layer.Vector({
                            source: new r.source.Vector({
                                features: [n.accuracyFeature]
                            })
                        })
                          , v = new r.layer.Vector({
                            source: new r.source.Vector({
                                features: [n.positionFeature, n.trackingFeature]
                            })
                        })
                          , b = document.getElementById("map");
                        console.assert(!!b, "ERROR: no fue posible obtener la instancia del DOM con id map (desde MapService)"),
                        c.setZIndex(n.zIndexMapa),
                        g.setZIndex(n.zIndexAccuracyLayer),
                        f.setZIndex(n.zIndexComoIrLayer),
                        _.setZIndex(n.zIndexOrigenDestinoLayer),
                        v.setZIndex(n.zIndexOrigenDestinoLayer),
                        m.setZIndex(n.zIndexBusesCluster);
                        var y = new r.View({
                            center: n.last_coords,
                            projection: o.x,
                            zoom: n.last_zoom,
                            maxZoom: 20,
                            minZoom: 10,
                            extent: a
                        })
                          , S = function(n, l) {
                            var e = document.createElement("button");
                            e.addEventListener("click", l, !1),
                            e.addEventListener("touchstart", l, !1);
                            var t = document.createElement("div");
                            return t.className = n,
                            t.appendChild(e),
                            t
                        };
                        n.map = new r.Map({
                            layers: [c, g, f, n.mapUtilsParadas.obtenerLayerParadasIntermediasDirecto(), n.mapUtilsParadas.obtenerLayerParadasIntermediasTrasbordo(), n.mapUtilsParadas.obtenerLayerParadas(), n.mapUtilsParadas.obtenerLayerParadasDeshabilitadas(), n.mapUtilsParadas.obtenerLayerParadaSeleccionada(), _, v, m],
                            target: b,
                            pixelRatio: 1,
                            view: y,
                            controls: r.control.defaults({
                                attribution: !1,
                                rotate: !0,
                                rotateOptions: {
                                    tipLabel: "Reiniciar rotación"
                                },
                                zoom: !0,
                                zoomOptions: {
                                    zoomInTipLabel: "Acercar",
                                    zoomOutTipLabel: "Alejar"
                                }
                            }).extend([new r.control.Control({
                                element: S("ol-geoloc ol-control", function(n) {
                                    p.geolocate(!0, 2).then(function(n) {
                                        p.centerMap(n[0], n[1], p.last_zoom)
                                    })
                                })
                            }), new r.control.Control({
                                element: S("ol-busdata ol-control", function(n) {
                                    p.showBusData()
                                })
                            })]),
                            interactions: r.interaction.defaults().extend([new r.interaction.DragRotateAndZoom]),
                            logo: !1
                        }),
                        n.map.on("moveend", function(l) {
                            n.last_coords = l.frameState.focus,
                            n.last_zoom = n.map.getView().getZoom(),
                            n.dataService.setLastCoords(n.last_coords),
                            n.dataService.setLastZoom(n.last_zoom)
                        }),
                        n.setSelectParadaEvent(),
                        n.geoJSONformat = new r.format.GeoJSON({
                            defaultDataProjection: "EPSG:32721",
                            featureProjection: n.map.getView().getProjection()
                        }),
                        n.watchPosition(),
                        l(n.map)
                    }
                    )
                })
            }
            ,
            n.prototype.setParadasDeshabilitadasPopup = function(n) {
                this.map && this.mapUtilsParadas.setParadasDeshabilitadasPopup(this.map, n)
            }
            ,
            n.prototype.hidePopup = function() {
                this.map && this.mapUtilsParadas.hidePopup()
            }
            ,
            n.prototype.showBusData = function() {
                this.events.publish("map:show-busdata", {})
            }
            ,
            n.prototype.geolocToMapProjection = function(n) {
                var l = this.transform4326toMapProjection(n.coords.longitude, n.coords.latitude);
                return [l[0], l[1], n.coords.accuracy]
            }
            ,
            n.prototype.geolocate = function(n, l) {
                var e = this;
                return void 0 === n && (n = !1),
                void 0 === l && (l = 0),
                console.log("MapService.geolocate(" + n + "," + l + ")"),
                this.loadingGeoloc || (this.loadingGeoloc = this.loadingCtrl.create({
                    content: "Geolocalizando..."
                }),
                this.loadingGeoloc.present()),
                new Promise(function(t, a) {
                    return e.mapUtilsGeolocation.getCurrentPosition().then(function(n) {
                        e.updateGeolocation(n),
                        e.loadingGeoloc && (e.loadingGeoloc.dismiss(),
                        e.loadingGeoloc = null),
                        console.log("MapService.geolocate() EXITO!");
                        var l = e.geolocToMapProjection(n);
                        t(l)
                    }).catch(function(t) {
                        if (console.log("MapService.geolocate() ERROR!"),
                        l > 0)
                            return console.log("MapService.geolocate() reintento..."),
                            e.geolocate(n, l - 1);
                        t.solicitado = n,
                        e.loadingGeoloc && (e.loadingGeoloc.dismiss(),
                        e.loadingGeoloc = null),
                        e.events.publish("map:geolacate-error", t)
                    })
                }
                )
            }
            ,
            n.prototype.watchPosition = function() {
                this.mapUtilsGeolocation.watchPosition()
            }
            ,
            n.prototype.updateGeolocation = function(n) {
                if (void 0 !== n.coords) {
                    var l = this.transform4326toMapProjection(n.coords.longitude, n.coords.latitude);
                    this.currentLongitude = l[0],
                    this.currentLatitude = l[1],
                    this.currentAccuracy = n.coords.accuracy,
                    n.coords.accuracy && n.coords.accuracy > o.l && (this.currentAccuracy = o.l),
                    this.accuracyFeature.setGeometry(this.currentAccuracy ? new r.geom.Circle([this.currentLongitude, this.currentLatitude],this.currentAccuracy) : null),
                    this.positionFeature.setGeometry(this.currentLongitude ? new r.geom.Point([this.currentLongitude, this.currentLatitude]) : null)
                }
            }
            ,
            n.prototype.centerMap = function(n, l, e) {
                var t = this;
                if (void 0 === n && (n = void 0),
                void 0 === l && (l = void 0),
                void 0 === e && (e = this.last_zoom),
                console.log("centerMap() ", [n, l], [this.padding]),
                n > 0 && l > 0) {
                    var a = this.transform32721toMapProjection(n, l);
                    n = a[0],
                    l = a[1]
                }
                return this.loadMap().then(function(a) {
                    var i = n || t.currentLongitude
                      , o = l || t.currentLatitude
                      , r = new Array;
                    return r.push(new Array),
                    r[0].push([i, o]),
                    t.viewFit(r, t.padding, e)
                })
            }
            ,
            n.prototype.ajustarMapaOrigenDestino = function() {
                console.log("Ajustando mapa a origen y destino", this.origenFeature, this.destinoFeature);
                var n = new Array;
                n.push(new Array),
                (this.origenFeature || this.destinoFeature) && (this.origenFeature && this.origenFeature.getProperties() && this.origenFeature.getProperties().punto && n[0].push(this.transform32721toMapProjection(this.origenFeature.getProperties().punto.geoJSON.coordinates[0], this.origenFeature.getProperties().punto.geoJSON.coordinates[1])),
                this.destinoFeature && this.destinoFeature.getProperties() && this.destinoFeature.getProperties().punto && n[0].push(this.transform32721toMapProjection(this.destinoFeature.getProperties().punto.geoJSON.coordinates[0], this.destinoFeature.getProperties().punto.geoJSON.coordinates[1])),
                this.viewFit(n, this.padding, this.last_zoom))
            }
            ,
            n.prototype.viewFit = function(n, l, e) {
                var t = this;
                return void 0 === e && (e = this.last_zoom),
                this.loadMap().then(function(a) {
                    var i = new r.geom.Polygon(n);
                    return n && n[0] && n[0].length > 1 ? t.map.getView().fit(i, {
                        padding: l,
                        nearest: !1,
                        duration: 500
                    }) : t.map.getView().fit(i, {
                        padding: l,
                        nearest: !1,
                        duration: 500,
                        maxZoom: e
                    })
                })
            }
            ,
            n.prototype.viewFitExtent = function(n, l, e) {
                var t = this;
                return void 0 === e && (e = this.last_zoom),
                this.loadMap().then(function(a) {
                    return n ? t.map.getView().fit(n, {
                        padding: l,
                        nearest: !1,
                        duration: 500
                    }) : t.map.getView().fit(n, {
                        padding: l,
                        nearest: !1,
                        duration: 500,
                        maxZoom: e
                    })
                })
            }
            ,
            n.prototype.transform4326toMapProjection = function(n, l) {
                return this.mapUtilsProjections.transformSRIDToSRID(n, l, "EPSG:4326", this.map.getView().getProjection())
            }
            ,
            n.prototype.transform4326to32721 = function(n, l) {
                return this.mapUtilsProjections.transformSRIDToSRID(n, l, "EPSG:4326", "EPSG:32721")
            }
            ,
            n.prototype.transform32721toMapProjection = function(n, l) {
                return this.mapUtilsProjections.transformSRIDToSRID(n, l, "EPSG:32721", this.map.getView().getProjection())
            }
            ,
            n.prototype.transformMapProjectionto32721 = function(n, l) {
                return this.mapUtilsProjections.transformSRIDToSRID(n, l, this.map.getView().getProjection(), "EPSG:32721")
            }
            ,
            n.prototype.setBusesRealTime = function(n, l, e, t) {
                var a = this;
                return void 0 === e && (e = this.padding),
                void 0 === t && (t = !0),
                new Promise(function(i, o) {
                    a.busesETA = n;
                    var u = new Map;
                    n.forEach(function(n) {
                        n.real && u.set(n.idBus, new s(n.idBus,n.coordinates,n.linea))
                    });
                    var c;
                    a.busesVectorSrc.forEachFeature(function(n) {
                        if (n) {
                            var l = Number(n.getId())
                              , e = u.get(l);
                            e ? (c = a.transform4326toMapProjection(e.$coordinates[0], e.$coordinates[1]),
                            n.setGeometry(new r.geom.Point(c)),
                            a.busesVectorSrc.set(n.getId().toString(), n),
                            u.delete(l)) : a.busesVectorSrc.removeFeature(n)
                        }
                    }),
                    u.forEach(function(n) {
                        c = a.transform4326toMapProjection(n.$coordinates[0], n.$coordinates[1]);
                        var l = new r.Feature({
                            geometry: new r.geom.Point(c),
                            linea: n.$linea
                        });
                        l.setId(n.$idBus.toString()),
                        a.busesVectorSrc.addFeature(l)
                    }),
                    t && l && a.mapUtilsParadas.obtenerParadaSeleccionada && a.ajustarVistaBusesConFiltro(e),
                    i()
                }
                )
            }
            ,
            n.prototype.ajustarVistaBusesConFiltro = function(n) {
                var l = this;
                void 0 === n && (n = [0, 0, 0, 0]);
                var e = new Array;
                e.push(new Array);
                var t, a = this.mapUtilsParadas.obtenerCoordenadasParadaSeleccionada(), i = this.transformMapProjectionto32721(a[0], a[1]);
                e[0].push(a);
                var r = o.m * o.m
                  , u = new Map
                  , s = new Array;
                if (this.busesETA && (this.busesETA.forEach(function(n) {
                    if (n.real && (!l.lineasSeleccionadas || 0 == l.lineasSeleccionadas.length || l.lineasSeleccionadas.find(function(l) {
                        return l == n.linea
                    }))) {
                        var e = (t = l.transform4326to32721(n.coordinates[0], n.coordinates[1]))[0] - i[0]
                          , a = t[1] - i[1]
                          , o = e * e + a * a;
                        u.set(o, [n.coordinates[0], n.coordinates[1]]),
                        s.push(o)
                    }
                }),
                s.length > 0)) {
                    s = s.sort(function(n, l) {
                        return n - l
                    });
                    for (var c = 0; c < s.length && !(e[0].length > o.n); c++)
                        if (s[c] <= r) {
                            var d = u.get(s[c]);
                            t = this.transform4326toMapProjection(d[0], d[1]),
                            e[0].push(t)
                        }
                    if (1 == e[0].length) {
                        d = u.get(s[0]);
                        t = this.transform4326toMapProjection(d[0], d[1]),
                        e[0].push(t)
                    }
                }
                e[0].length > 1 && this.viewFit(e, n)
            }
            ,
            n.prototype.filtrarBusesTiempoReal = function(n, l) {
                void 0 === n && (n = []),
                this.lineasSeleccionadas = n.map(function(n) {
                    return n.l
                }),
                this.busesVectorSrc.refresh(),
                this.ajustarVistaBusesConFiltro(l)
            }
            ,
            n.prototype.setSelectParadaEvent = function() {
                this.map = this.mapUtilsParadas.setEventoSeleccionarParada(this.map)
            }
            ,
            n.prototype.unsetSelectParadaEvent = function() {
                this.map = this.mapUtilsParadas.unsetEventoSeleccionarParada(this.map)
            }
            ,
            n.prototype.seleccionarParadaDelParametro = function(n) {
                this.mapUtilsParadas.seleccionarParadaDelParametro(n)
            }
            ,
            n.prototype.onClickFunction = function(n) {
                n.preventDefault(),
                this.events.publish("map:press", n.coordinate),
                this.unsetOnClickEvent()
            }
            ,
            n.prototype.setOnClickEvent = function() {
                this.unsetSelectParadaEvent(),
                this.map.on("singleclick", this.onClickFunction, this)
            }
            ,
            n.prototype.unsetOnClickEvent = function() {
                this.setSelectParadaEvent(),
                this.map.un("singleclick", this.onClickFunction, this)
            }
            ,
            n.prototype.switchPuntos = function() {
                var n = this.destinoFeature.getGeometry()
                  , l = this.destinoFeature.getId()
                  , e = this.destinoFeature.getProperties()
                  , t = this.destinoGeometryFeature.getGeometry();
                this.destinoFeature.setGeometry(this.origenFeature.getGeometry()),
                this.destinoFeature.setId(this.origenFeature.getId()),
                this.destinoFeature.setProperties(this.origenFeature.getProperties()),
                this.destinoGeometryFeature.setGeometry(null),
                this.origenGeometryFeature && this.destinoGeometryFeature.setGeometry(this.origenGeometryFeature.getGeometry()),
                this.origenFeature.setGeometry(n),
                this.origenFeature.setId(l),
                this.origenFeature.setProperties(e),
                this.origenGeometryFeature.setGeometry(null),
                t && this.origenGeometryFeature.setGeometry(t),
                this.limpiarRuteoComoir(),
                this.origenDestinoSource.refresh()
            }
            ,
            n.prototype.cleanFeature = function(n) {
                n.unset("codigo"),
                n.unset("descSubtipo"),
                n.unset("descTipo"),
                n.unset("descripcion"),
                n.unset("geoJSON"),
                n.unset("numero"),
                n.unset("via"),
                n.unset("via2")
            }
            ,
            n.prototype.setPointData = function(n, l, e, t, a, i) {
                void 0 === l && (l = null),
                void 0 === e && (e = null),
                console.log(n, e, t),
                a.setGeometry(null),
                i.setGeometry(l ? new r.geom.Point(this.transform32721toMapProjection(l[0], l[1])) : null),
                i.setId(n),
                this.cleanFeature(i),
                i.setProperties(e),
                t && (console.log("geometria.geoJSON", t.geoJSON, "----\x3e", this.geoJSONformat.readGeometry(t.geoJSON)),
                a.setGeometry(this.geoJSONformat.readGeometry(t.geoJSON))),
                this.limpiarRuteoComoir()
            }
            ,
            n.prototype.setDestino = function(n, l, e) {
                void 0 === n && (n = null),
                void 0 === l && (l = null),
                void 0 === e && (e = null),
                console.log("MapService.setDestino()"),
                this.setPointData("DESTINO", n, l, e, this.destinoGeometryFeature, this.destinoFeature)
            }
            ,
            n.prototype.setOrigen = function(n, l, e) {
                void 0 === n && (n = null),
                void 0 === l && (l = null),
                void 0 === e && (e = null),
                console.log("MapService.setOrigen()"),
                this.setPointData("ORIGEN", n, l, e, this.origenGeometryFeature, this.origenFeature)
            }
            ,
            n.prototype.getDestinoSelected = function() {
                return this.destinoFeature ? this.destinoFeature.getProperties() : null
            }
            ,
            n.prototype.unsetPunto = function(n, l) {
                l && (l.setGeometry(null),
                l.setProperties(null),
                n && n.setGeometry(null),
                this.limpiarRuteoComoir(),
                this.deleteBusesRealTime())
            }
            ,
            n.prototype.unsetDestino = function() {
                this.unsetPunto(this.destinoGeometryFeature, this.destinoFeature)
            }
            ,
            n.prototype.unsetOrigen = function() {
                this.unsetPunto(this.origenGeometryFeature, this.origenFeature)
            }
            ,
            n.prototype.getOrigenSelected = function() {
                return this.origenFeature ? this.origenFeature.getProperties() : null
            }
            ,
            n.prototype.limpiarRuteoComoir = function() {
                this.comoirSource.clear(),
                this.mapUtilsParadas.limpiarParadasIntermedias(),
                this.origenFeature.getGeometry() && this.comoirSource.addFeature(this.origenFeature),
                this.origenGeometryFeature.getGeometry() && this.comoirSource.addFeature(this.origenGeometryFeature),
                this.destinoFeature.getGeometry() && this.comoirSource.addFeature(this.destinoFeature),
                this.destinoGeometryFeature.getGeometry() && this.comoirSource.addFeature(this.destinoGeometryFeature)
            }
            ,
            n.prototype.setComoirCaminando = function(n, l) {
                void 0 === l && (l = this.padding),
                this.limpiarRuteoComoir(),
                this.mapUtilsParadas.ocultarParadas();
                var e = new r.Feature;
                e.setId("caminando"),
                e.setProperties(n.feature.properties),
                e.setStyle(this.olStyleCaminando),
                e.setGeometry(this.geoJSONformat.readGeometry(n.feature.geometry)),
                this.comoirSource.addFeature(e),
                this.viewFitExtent(e.getGeometry().getExtent(), this.padding)
            }
            ,
            n.prototype.setComoirEnBus = function(n, l, e, t) {
                var a = this;
                void 0 === t && (t = this.padding),
                this.limpiarRuteoComoir(),
                this.deleteBusesRealTime(),
                this.mapUtilsParadas.ocultarParadas();
                var i = new r.Feature;
                i.setId("caminata-salida"),
                i.setStyle(this.olStyleCaminando),
                i.setGeometry(this.geoJSONformat.readGeometry(n.directo.caminarSalida.geometry));
                var o = new r.Feature;
                o.setId("caminata-trasbordo"),
                o.setStyle(this.olStyleCaminando);
                var u = new r.Feature;
                u.setId("caminata-llegada"),
                u.setStyle(this.olStyleCaminando);
                var s = new r.Feature;
                s.setId("parada-origen"),
                s.setStyle([this.mapUtilsParadas.obtenerEstiloParadas(), this.mapUtilsParadas.obtenerEstiloParadasSombra()]),
                s.setGeometry(this.geoJSONformat.readGeometry(n.directo.paradaOrigen.geometry));
                var c = new r.Feature;
                c.setId("parada-trasbordo1"),
                c.setStyle([this.mapUtilsParadas.obtenerEstiloParadas(), this.mapUtilsParadas.obtenerEstiloParadasSombra()]);
                var d = new r.Feature;
                d.setId("parada-trasbordo2"),
                d.setStyle([this.mapUtilsParadas.obtenerEstiloParadas(), this.mapUtilsParadas.obtenerEstiloParadasSombra()]);
                var p = new r.Feature;
                if (p.setId("parada-destino"),
                p.setStyle([this.mapUtilsParadas.obtenerEstiloParadas(), this.mapUtilsParadas.obtenerEstiloParadasSombra()]),
                n.trasbordo) {
                    o.setGeometry(this.geoJSONformat.readGeometry(n.trasbordo.caminarTrasbordo.geometry)),
                    u.setGeometry(this.geoJSONformat.readGeometry(n.trasbordo.caminarLlegada.geometry)),
                    c.setGeometry(this.geoJSONformat.readGeometry(n.directo.paradaDestino.geometry)),
                    d.setGeometry(this.geoJSONformat.readGeometry(n.trasbordo.paradaOrigen.geometry)),
                    p.setGeometry(this.geoJSONformat.readGeometry(n.trasbordo.paradaDestino.geometry));
                    var h = n.directo.codigoVariante
                      , m = n.directo.paradaOrigen.id
                      , _ = n.directo.paradaDestino.id;
                    n.directo.circular ? this.promiseParadasIntermediasDirecto = Promise.resolve([]) : (this.promiseParadasIntermediasDirecto = this.mapUtilsFiltroParadas.getParadasIntermedias(h, m, _),
                    this.promiseParadasIntermediasDirecto.then(function(n) {
                        a.addParadasIntermedias(n)
                    }));
                    var f = n.trasbordo.codigoVariante
                      , g = n.trasbordo.paradaOrigen.id
                      , v = n.trasbordo.paradaDestino.id;
                    n.trasbordo.circular ? this.promiseParadasIntermediasTrasbordo = Promise.resolve([]) : (this.promiseParadasIntermediasTrasbordo = this.mapUtilsFiltroParadas.getParadasIntermedias(f, g, v),
                    this.promiseParadasIntermediasTrasbordo.then(function(n) {
                        a.addParadasIntermedias(n, !1)
                    }))
                } else {
                    u.setGeometry(this.geoJSONformat.readGeometry(n.directo.caminarLlegada.geometry)),
                    p.setGeometry(this.geoJSONformat.readGeometry(n.directo.paradaDestino.geometry));
                    h = n.directo.codigoVariante,
                    m = n.directo.paradaOrigen.id,
                    _ = n.directo.paradaDestino.id;
                    n.directo.circular ? this.promiseParadasIntermediasDirecto = Promise.resolve([]) : (this.promiseParadasIntermediasDirecto = this.mapUtilsFiltroParadas.getParadasIntermedias(h, m, _),
                    this.promiseParadasIntermediasDirecto.then(function(n) {
                        a.addParadasIntermedias(n)
                    }))
                }
                this.comoirSource.addFeatures([u, o, i, s, c, d, p]);
                var b = null;
                if (b = i.getGeometry().getExtent(),
                r.extent.extend(b, u.getGeometry().getExtent()),
                o.getGeometry() && r.extent.extend(b, o.getGeometry().getExtent()),
                e && e.real) {
                    this.setBusesRealTime([e], !1, this.padding, !1);
                    var y = this.transform4326toMapProjection(e.coordinates[0], e.coordinates[1])
                      , S = new r.geom.Point(y);
                    r.extent.extend(b, S.getExtent())
                }
                if (l) {
                    var P = 0;
                    l.geom.geometries.forEach(function(n) {
                        var l = new r.Feature;
                        l.setId("recorrido-buses" + P),
                        P += 1,
                        l.setStyle(a.olStyleRecorridoBus),
                        l.setGeometry(a.geoJSONformat.readGeometry(n)),
                        b ? r.extent.extend(b, l.getGeometry().getExtent()) : b = l.getGeometry().getExtent(),
                        l.getGeometry().getExtent(),
                        a.comoirSource.addFeature(l)
                    })
                }
                this.viewFitExtent(b, this.padding)
            }
            ,
            n.prototype.addParadasIntermedias = function(n, l) {
                var e = this;
                void 0 === l && (l = !0),
                n.forEach(function(n) {
                    var t = new r.Feature;
                    t.setId(n.id),
                    t.setGeometry(e.geoJSONformat.readGeometry(n.geometry)),
                    l ? e.mapUtilsParadas.addFeatureParadasIntermediasDirecto(t) : e.mapUtilsParadas.addFeatureParadasIntermediasTrasbordo(t)
                })
            }
            ,
            n.prototype.getParadasIntermediasDirecto = function() {
                return this.promiseParadasIntermediasDirecto
            }
            ,
            n.prototype.getParadasIntermediasTrasbordo = function() {
                return this.promiseParadasIntermediasTrasbordo
            }
            ,
            n.prototype.setRecorridoYParadasVariante = function(n, l) {
                var e = this;
                if (this.clearRecorridoYParadasVariante(),
                n) {
                    var t = 0;
                    n.geom.geometries.forEach(function(n) {
                        var l = new r.Feature;
                        l.setId("recorrido-buses" + t),
                        t += 1,
                        l.setStyle(e.olStyleRecorridoBus),
                        l.setGeometry(e.geoJSONformat.readGeometry(n)),
                        l.getGeometry().getExtent(),
                        e.comoirSource.addFeature(l)
                    })
                }
                l.forEach(function(n) {
                    var l = new r.Feature;
                    l.setId(n.id),
                    l.setGeometry(e.geoJSONformat.readGeometry(n.geometry)),
                    e.mapUtilsParadas.addFeatureParadasIntermediasDirecto(l)
                })
            }
            ,
            n.prototype.clearRecorridoYParadasVariante = function() {
                this.comoirSource.clear(),
                this.mapUtilsParadas.limpiarParadasIntermedias()
            }
            ,
            n = Object(t.__decorate)([Object(t.__param)(8, Object(a.n)(i.a))], n)
        }()
    },
    53: function(n, l, e) {
        "use strict";
        e.d(l, "a", function() {
            return t
        });
        e(0),
        e(76),
        e(138);
        var t = function() {
            return function() {}
        }()
    },
    56: function(n, l, e) {
        "use strict";
        e.d(l, "o", function() {
            return a
        }),
        e.d(l, "y", function() {
            return i
        }),
        e.d(l, "x", function() {
            return o
        }),
        e.d(l, "v", function() {
            return r
        }),
        e.d(l, "u", function() {
            return u
        }),
        e.d(l, "w", function() {
            return s
        }),
        e.d(l, "t", function() {
            return c
        }),
        e.d(l, "c", function() {
            return d
        }),
        e.d(l, "b", function() {
            return p
        }),
        e.d(l, "d", function() {
            return h
        }),
        e.d(l, "e", function() {
            return m
        }),
        e.d(l, "f", function() {
            return _
        }),
        e.d(l, "g", function() {
            return f
        }),
        e.d(l, "r", function() {
            return g
        }),
        e.d(l, "k", function() {
            return v
        }),
        e.d(l, "p", function() {
            return b
        }),
        e.d(l, "a", function() {
            return y
        }),
        e.d(l, "l", function() {
            return S
        }),
        e.d(l, "z", function() {
            return P
        }),
        e.d(l, "A", function() {
            return C
        }),
        e.d(l, "m", function() {
            return w
        }),
        e.d(l, "n", function() {
            return E
        }),
        e.d(l, "i", function() {
            return O
        }),
        e.d(l, "j", function() {
            return A
        }),
        e.d(l, "h", function() {
            return x
        }),
        e.d(l, "s", function() {
            return I
        }),
        e.d(l, "q", function() {
            return R
        });
        var t = "assets/images/"
          , a = [-6358249.62941, -4213839.90042, -6226491.30192, -4114146.90629]
          , i = "900913"
          , o = "EPSG:" + i
          , r = t + "parada/icon-parada.svg"
          , u = t + "parada/icon-shadow.png"
          , s = t + "parada/icono_ParadasIntermediasSM.png"
          , c = t + "parada/icon-parada-deshabilitada.png"
          , d = t + "bus/icono_BusMapa.png"
          , p = t + "bus/icono_bus_1.png"
          , h = t + "bus/icono_stack_2.png"
          , m = t + "bus/icono_stack_2_l.png"
          , _ = t + "bus/icono_stack_3.png"
          , f = t + "bus/icono_stack_3_l.png"
          , g = t + "icon/icono_Origen.png"
          , v = t + "icon/icono_Destino.png"
          , b = t + "map/icono_Ubicacion.png"
          , y = t + "autocomplete/"
          , S = 100
          , P = 15e3
          , C = 1e3
          , w = 1e3
          , E = 4
          , O = [-6254615.166107359, -4151078.817356302]
          , A = 18
          , x = 17
          , I = 16
          , R = 100
    },
    57: function(n, l, e) {
        "use strict";
        e.d(l, "a", function() {
            return i
        });
        e(0);
        var t = this && this.__awaiter || function(n, l, e, t) {
            return new (e || (e = Promise))(function(a, i) {
                function o(n) {
                    try {
                        u(t.next(n))
                    } catch (n) {
                        i(n)
                    }
                }
                function r(n) {
                    try {
                        u(t.throw(n))
                    } catch (n) {
                        i(n)
                    }
                }
                function u(n) {
                    n.done ? a(n.value) : new e(function(l) {
                        l(n.value)
                    }
                    ).then(o, r)
                }
                u((t = t.apply(n, l || [])).next())
            }
            )
        }
          , a = this && this.__generator || function(n, l) {
            function e(e) {
                return function(o) {
                    return function(e) {
                        if (t)
                            throw new TypeError("Generator is already executing.");
                        for (; r; )
                            try {
                                if (t = 1,
                                a && (i = a[2 & e[0] ? "return" : e[0] ? "throw" : "next"]) && !(i = i.call(a, e[1])).done)
                                    return i;
                                switch (a = 0,
                                i && (e = [0, i.value]),
                                e[0]) {
                                case 0:
                                case 1:
                                    i = e;
                                    break;
                                case 4:
                                    return r.label++,
                                    {
                                        value: e[1],
                                        done: !1
                                    };
                                case 5:
                                    r.label++,
                                    a = e[1],
                                    e = [0];
                                    continue;
                                case 7:
                                    e = r.ops.pop(),
                                    r.trys.pop();
                                    continue;
                                default:
                                    if (i = r.trys,
                                    !(i = i.length > 0 && i[i.length - 1]) && (6 === e[0] || 2 === e[0])) {
                                        r = 0;
                                        continue
                                    }
                                    if (3 === e[0] && (!i || e[1] > i[0] && e[1] < i[3])) {
                                        r.label = e[1];
                                        break
                                    }
                                    if (6 === e[0] && r.label < i[1]) {
                                        r.label = i[1],
                                        i = e;
                                        break
                                    }
                                    if (i && r.label < i[2]) {
                                        r.label = i[2],
                                        r.ops.push(e);
                                        break
                                    }
                                    i[2] && r.ops.pop(),
                                    r.trys.pop();
                                    continue
                                }
                                e = l.call(n, r)
                            } catch (n) {
                                e = [6, n],
                                a = 0
                            } finally {
                                t = i = 0
                            }
                        if (5 & e[0])
                            throw e[1];
                        return {
                            value: e[0] ? e[1] : void 0,
                            done: !0
                        }
                    }([e, o])
                }
            }
            var t, a, i, o, r = {
                label: 0,
                sent: function() {
                    if (1 & i[0])
                        throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: e(0),
                throw: e(1),
                return: e(2)
            },
            "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o
        }
          , i = function() {
            function n(n) {
                this.dataService = n
            }
            return n.prototype.getAllFavs = function() {
                return t(this, void 0, void 0, function() {
                    return a(this, function(n) {
                        return [2, this.dataService.getFilteredFavs("")]
                    })
                })
            }
            ,
            n.prototype.getFilteredFavs = function(n) {
                return t(this, void 0, void 0, function() {
                    return a(this, function(l) {
                        return [2, this.dataService.getFilteredFavs(n)]
                    })
                })
            }
            ,
            n.prototype.updateFav = function(n) {
                return t(this, void 0, void 0, function() {
                    return a(this, function(l) {
                        return console.log("FavoritesService.updateFav()", [n]),
                        this.dataService.updateFav(n),
                        [2]
                    })
                })
            }
            ,
            n.prototype.addFav = function(n) {
                return t(this, void 0, void 0, function() {
                    var l, e;
                    return a(this, function(t) {
                        return console.log("FavoritesService.addFav()", [n]),
                        n.fav = "yes",
                        l = n.data.descTipo,
                        n.data.descSubtipo && (l = n.data.descSubtipo),
                        l = l.split(" ").join("_"),
                        e = {
                            tipo: l,
                            text: n.text,
                            fav: "yes",
                            data: {
                                codigo: n.data.codigo,
                                descTipo: n.data.descTipo,
                                geoJSON: n.data.geoJSON
                            }
                        },
                        n.label && (e.label = n.label),
                        n.data.descSubtipo && (e.data.descSubtipo = n.data.descSubtipo),
                        n.data.via && (e.data.via = n.data.via),
                        n.data.via2 && (e.data.via2 = n.data.via2),
                        n.data.numero && (e.data.numero = n.data.numero),
                        [2, this.dataService.addFav(e).then(function(l) {
                            return n.local_storage_id = l.local_storage_id,
                            n
                        })]
                    })
                })
            }
            ,
            n.prototype.removeFav = function(n) {
                return t(this, void 0, void 0, function() {
                    return a(this, function(l) {
                        return console.log("FavoritesService.removeFav()", [n]),
                        n.fav = "no",
                        [2, this.dataService.removeFav(n)]
                    })
                })
            }
            ,
            n
        }()
    },
    67: function(n, l, e) {
        "use strict";
        e.d(l, "a", function() {
            return s
        });
        var t = e(0)
          , a = e(1)
          , i = (e(100),
        e(8),
        e(287))
          , o = (e.n(i),
        e(26))
          , r = (e(39),
        this && this.__awaiter || function(n, l, e, t) {
            return new (e || (e = Promise))(function(a, i) {
                function o(n) {
                    try {
                        u(t.next(n))
                    } catch (n) {
                        i(n)
                    }
                }
                function r(n) {
                    try {
                        u(t.throw(n))
                    } catch (n) {
                        i(n)
                    }
                }
                function u(n) {
                    n.done ? a(n.value) : new e(function(l) {
                        l(n.value)
                    }
                    ).then(o, r)
                }
                u((t = t.apply(n, l || [])).next())
            }
            )
        }
        )
          , u = this && this.__generator || function(n, l) {
            function e(e) {
                return function(o) {
                    return function(e) {
                        if (t)
                            throw new TypeError("Generator is already executing.");
                        for (; r; )
                            try {
                                if (t = 1,
                                a && (i = a[2 & e[0] ? "return" : e[0] ? "throw" : "next"]) && !(i = i.call(a, e[1])).done)
                                    return i;
                                switch (a = 0,
                                i && (e = [0, i.value]),
                                e[0]) {
                                case 0:
                                case 1:
                                    i = e;
                                    break;
                                case 4:
                                    return r.label++,
                                    {
                                        value: e[1],
                                        done: !1
                                    };
                                case 5:
                                    r.label++,
                                    a = e[1],
                                    e = [0];
                                    continue;
                                case 7:
                                    e = r.ops.pop(),
                                    r.trys.pop();
                                    continue;
                                default:
                                    if (i = r.trys,
                                    !(i = i.length > 0 && i[i.length - 1]) && (6 === e[0] || 2 === e[0])) {
                                        r = 0;
                                        continue
                                    }
                                    if (3 === e[0] && (!i || e[1] > i[0] && e[1] < i[3])) {
                                        r.label = e[1];
                                        break
                                    }
                                    if (6 === e[0] && r.label < i[1]) {
                                        r.label = i[1],
                                        i = e;
                                        break
                                    }
                                    if (i && r.label < i[2]) {
                                        r.label = i[2],
                                        r.ops.push(e);
                                        break
                                    }
                                    i[2] && r.ops.pop(),
                                    r.trys.pop();
                                    continue
                                }
                                e = l.call(n, r)
                            } catch (n) {
                                e = [6, n],
                                a = 0
                            } finally {
                                t = i = 0
                            }
                        if (5 & e[0])
                            throw e[1];
                        return {
                            value: e[0] ? e[1] : void 0,
                            done: !0
                        }
                    }([e, o])
                }
            }
            var t, a, i, o, r = {
                label: 0,
                sent: function() {
                    if (1 & i[0])
                        throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: e(0),
                throw: e(1),
                return: e(2)
            },
            "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o
        }
          , s = function() {
            function n(n, l, e, t, a, i) {
                var o = this;
                this.http = n,
                this.firebaseNative = l,
                this.platform = e,
                this.dataService = t,
                this.events = a,
                this.envVariables = i,
                this.idApp = 1,
                this.waitReady = new Promise(function(n) {
                    o.setReady = n
                }
                ),
                this.waitUpToDate = new Promise(function(n) {
                    o.setUpToDate = n
                }
                ),
                this.cordova_available = !1,
                this.topics = {
                    COMOIR_BASE_TOPIC: !0
                }
            }
            return n.prototype.setReadMsg = function(n) {
                this.msg = n
            }
            ,
            n.prototype.clearReadMsg = function() {
                var n = this.msg;
                return delete this.msg,
                n
            }
            ,
            n.prototype.init = function(n) {
                return r(this, void 0, void 0, function() {
                    var l = this;
                    return u(this, function(e) {
                        switch (e.label) {
                        case 0:
                            return this.cordova_available = n,
                            this.envVariables.ENABLE_PUSH ? (this.limpiar(),
                            [4, this.getToken()]) : [3, 4];
                        case 1:
                            return e.sent(),
                            [4, this.dataService.getLastMessageId().then(function(n) {
                                return r(l, void 0, void 0, function() {
                                    return u(this, function(l) {
                                        return this.lastid = n || 0,
                                        [2]
                                    })
                                })
                            })];
                        case 2:
                            return e.sent(),
                            [4, this.dataService.getUserPushTopics().then(function(n) {
                                return r(l, void 0, void 0, function() {
                                    var l, e, t, a;
                                    return u(this, function(i) {
                                        switch (i.label) {
                                        case 0:
                                            if (n ? this.topics = n : n = this.topics,
                                            !this.cordova_available)
                                                return [3, 6];
                                            l = [];
                                            for (e in n)
                                                l.push(e);
                                            t = 0,
                                            i.label = 1;
                                        case 1:
                                            return t < l.length ? (a = l[t],
                                            n[a] ? [4, this.subscribeToTopic(a)] : [3, 3]) : [3, 6];
                                        case 2:
                                            return i.sent(),
                                            [3, 5];
                                        case 3:
                                            return [4, this.unsubscribeToTopic(a)];
                                        case 4:
                                            i.sent(),
                                            i.label = 5;
                                        case 5:
                                            return t++,
                                            [3, 1];
                                        case 6:
                                            return this.setReady(),
                                            this.updateMesagges(),
                                            [2]
                                        }
                                    })
                                })
                            })];
                        case 3:
                            e.sent(),
                            this.cordova_available && this.listenToNotifications().pipe(Object(i.tap)(function(n) {
                                return l.proccessPushMessageArrived(n)
                            })).subscribe(),
                            e.label = 4;
                        case 4:
                            return [2]
                        }
                    })
                })
            }
            ,
            n.prototype.limpiar = function() {
                return r(this, void 0, void 0, function() {
                    var n = this;
                    return u(this, function(l) {
                        return console.log("limpiar()"),
                        [2, this.dataService.getMessagesList().then(function(l) {
                            for (var e in l)
                                console.log("lista[a].summary: ", l[e].summary),
                                "estamos haciendo pruebas de envío de mensajes" == l[e].summary && n.dataService.removeMessage(l[e]).then(function(l) {
                                    return n.refresh()
                                })
                        })]
                    })
                })
            }
            ,
            n.prototype.refresh = function() {
                return r(this, void 0, void 0, function() {
                    var n = this;
                    return u(this, function(l) {
                        return [2, this.dataService.getMessagesList().then(function(l) {
                            if (l) {
                                n.messages = l.sort(function(n, l) {
                                    return n.timestamp > l.timestamp ? -1 : n.timestamp < l.timestamp ? 1 : 0
                                }),
                                n.unread = 0;
                                for (var e in n.messages)
                                    n.messages[e].read || n.unread++
                            } else
                                n.messages = []
                        })]
                    })
                })
            }
            ,
            n.prototype.updateMesagges = function() {
                return r(this, void 0, void 0, function() {
                    var n, l = this;
                    return u(this, function(e) {
                        return n = this.envVariables.NOTIFICACIONES_MENSAJES + "?idApp=" + this.idApp + "&fromIdMessage=" + this.lastid,
                        console.log("PushNotificationProvider.updateMesagges()", n),
                        [2, this.http.get(n).toPromise().then(function(n) {
                            return r(l, void 0, void 0, function() {
                                var l, e, t, a, i, o, r = this;
                                return u(this, function(u) {
                                    switch (u.label) {
                                    case 0:
                                        l = n.json(),
                                        e = [];
                                        for (t in l.messages)
                                            e.push(t);
                                        a = 0,
                                        u.label = 1;
                                    case 1:
                                        return a < e.length ? (i = e[a],
                                        o = l.messages[i],
                                        this.lastid < parseInt(o.idMensaje) && (this.lastid = parseInt(o.idMensaje)),
                                        [4, this.proccessBackendMessageArrived(o)]) : [3, 4];
                                    case 2:
                                        u.sent(),
                                        u.label = 3;
                                    case 3:
                                        return a++,
                                        [3, 1];
                                    case 4:
                                        return [4, this.dataService.setLastMessageId(this.lastid)];
                                    case 5:
                                        return u.sent(),
                                        console.log("-------------------------"),
                                        console.log("updateMesagges: ", l.messages),
                                        console.log("lastid: ", this.lastid),
                                        console.log("-------------------------"),
                                        l.count > l.messages.length ? this.updateMesagges() : this.refresh().then(function(n) {
                                            r.setUpToDate()
                                        }),
                                        [2]
                                    }
                                })
                            })
                        }).catch(function(e) {
                            l.refresh().then(function(n) {
                                l.setUpToDate()
                            }),
                            console.error("--------- ERROR ---------"),
                            console.error(e),
                            -1 != n.indexOf("desa") && console.error("Estás en desarrollo. Tenés activada la VPN con el FortiClient?")
                        })]
                    })
                })
            }
            ,
            n.prototype.setMessageAsRead = function(n) {
                return r(this, void 0, void 0, function() {
                    var l = this;
                    return u(this, function(e) {
                        return this.dataService.markMessageAsRead(n).then(function(n) {
                            l.refresh()
                        }),
                        [2]
                    })
                })
            }
            ,
            n.prototype.formatearFecha = function(n) {
                var l = n.toISOString().slice(0, 10).split("-");
                return l[2] + "-" + l[1] + "-" + l[0]
            }
            ,
            n.prototype.proccessBackendMessageArrived = function(n) {
                return r(this, void 0, void 0, function() {
                    var l, e;
                    return u(this, function(t) {
                        return console.log("proccessBackendMessageArrived() llega:", this.cleanCopy(n)),
                        "string" != typeof n.fecha || -1 == n.fecha.indexOf("-") ? l = parseInt(n.fecha) : n.timestamp > 0 && (l = n.timestamp),
                        e = this.formatearFecha(new Date(l)),
                        n.fecha = e,
                        n.timestamp = l,
                        console.log("proccessBackendMessageArrived()  sale: --\x3e ", this.cleanCopy(n)),
                        [2, this.dataService.addBackendMessage(n)]
                    })
                })
            }
            ,
            n.prototype.cleanCopy = function(n) {
                try {
                    return JSON.parse(JSON.stringify(n))
                } catch (l) {
                    return console.error("No se pudo clonar el objeto", l),
                    n
                }
            }
            ,
            n.prototype.proccessPushMessageArrived = function(n) {
                return r(this, void 0, void 0, function() {
                    var l, e, t = this;
                    return u(this, function(a) {
                        return console.log("Object JSON PUSH", this.cleanCopy(n)),
                        n.fecha ? "number" == typeof n.fecha && (l = new Date(n.fecha),
                        n.timestamp = l.getTime(),
                        n.fecha = this.formatearFecha(l),
                        console.log("fecha caso 1:", n.fecha)) : (n.fecha = this.formatearFecha(new Date),
                        n.timestamp = (new Date).getTime(),
                        console.log("fecha caso 2:", n.fecha, n.timestamp)),
                        console.log("data.timestamp", n.timestamp),
                        console.log("data.fecha", n.fecha),
                        '"' == n.message.substr(0, 1) && '"' == n.message.substr(n.message.length - 1, 1) && (console.log("ANTES   message: ", n.message),
                        n.message = n.message.substr(1, n.message.length - 2),
                        console.log("DESPUÉS message: ", n.message)),
                        '"' == n.detaillink.substr(0, 1) && '"' == n.detaillink.substr(n.detaillink.length - 1, 1) && (console.log("ANTES   detaillink: ", n.detaillink),
                        n.detaillink = n.detaillink.substr(1, n.detaillink.length - 2),
                        console.log("DESPUÉS detaillink: ", n.detaillink)),
                        n.summary ? '"' == n.summary.substr(0, 1) && '"' == n.summary.substr(n.summary.length - 1, 1) && (console.log("ANTES   summary: ", n.summary),
                        n.summary = n.summary.substr(1, n.summary.length - 2),
                        console.log("DESPUÉS summary: ", n.summary)) : n.summary = "y el summary?",
                        n.title ? '"' == n.title.substr(0, 1) && '"' == n.title.substr(n.title.length - 1, 1) && (console.log("ANTES   title: ", n.title),
                        n.title = n.title.substr(1, n.title.length - 2),
                        console.log("DESPUÉS title: ", n.title)) : n.title = "y el title?",
                        e = {
                            dataLink: n.detaillink,
                            fecha: n.fecha,
                            timestamp: n.timestamp,
                            idMensaje: n.idMensaje,
                            idUsuario: "null",
                            mensajeCompleto: n.message,
                            mensajeCorto: n.summary,
                            titulo: n.title,
                            topicId: "1"
                        },
                        this.proccessBackendMessageArrived(e).then(function(l) {
                            t.events.publish("push:new-message", n)
                        }),
                        [2]
                    })
                })
            }
            ,
            n.prototype.storeNewPushMessage = function(n) {
                return r(this, void 0, void 0, function() {
                    return u(this, function(l) {
                        return [2, this.dataService.addPushMessage(n)]
                    })
                })
            }
            ,
            n.prototype.getToken = function() {
                return r(this, void 0, void 0, function() {
                    var n, l;
                    return u(this, function(e) {
                        switch (e.label) {
                        case 0:
                            return this.platform.is("android") ? (n = this,
                            [4, this.firebaseNative.getToken()]) : [3, 2];
                        case 1:
                            n.token = e.sent(),
                            e.label = 2;
                        case 2:
                            return this.platform.is("ios") ? (l = this,
                            [4, this.firebaseNative.getToken()]) : [3, 5];
                        case 3:
                            return l.token = e.sent(),
                            [4, this.firebaseNative.grantPermission()];
                        case 4:
                            e.sent(),
                            e.label = 5;
                        case 5:
                            return [2, this.saveTokenToFirestore(this.token)]
                        }
                    })
                })
            }
            ,
            n.prototype.saveTokenToFirestore = function(n) {
                return console.warn("TODO cuando se use firestore para PWA", n),
                n
            }
            ,
            n.prototype.listenToNotifications = function() {
                return console.log("PushNotificationProvider.listenToNotifications()"),
                this.firebaseNative.onNotificationOpen()
            }
            ,
            n.prototype.subscribeToTopic = function(n) {
                return r(this, void 0, void 0, function() {
                    var l;
                    return u(this, function(e) {
                        return console.log("PushNotificationProvider.subscribeToTopic()", n),
                        l = this,
                        [2, l.dataService.setUserPushTopic(n, !0).then(function(e) {
                            return l.firebaseNative.subscribe(n)
                        })]
                    })
                })
            }
            ,
            n.prototype.unsubscribeToTopic = function(n) {
                return r(this, void 0, void 0, function() {
                    var l;
                    return u(this, function(e) {
                        return console.log("PushNotificationProvider.unsubscribeToTopic()", n),
                        l = this,
                        [2, l.dataService.setUserPushTopic(n, !1).then(function(e) {
                            return l.firebaseNative.unsubscribe(n)
                        })]
                    })
                })
            }
            ,
            n.prototype.onNotificationOpen = function() {
                return console.log("PushNotificationProvider.onNotificationOpen()"),
                this.firebaseNative.onNotificationOpen().subscribe(function(n) {
                    console.log("User opened a notification", n)
                })
            }
            ,
            n = Object(t.__decorate)([Object(t.__param)(5, Object(a.n)(o.a))], n)
        }()
    },
    69: function(n, l, e) {
        "use strict";
        e.d(l, "a", function() {
            return h
        });
        var t = e(0)
          , a = e(1)
          , i = e(49)
          , o = e(152)
          , r = (e.n(o),
        e(26))
          , u = (e(8),
        e(56))
          , s = (e(79),
        e(113))
          , c = e.n(s)
          , d = (e(114),
        this && this.__awaiter || function(n, l, e, t) {
            return new (e || (e = Promise))(function(a, i) {
                function o(n) {
                    try {
                        u(t.next(n))
                    } catch (n) {
                        i(n)
                    }
                }
                function r(n) {
                    try {
                        u(t.throw(n))
                    } catch (n) {
                        i(n)
                    }
                }
                function u(n) {
                    n.done ? a(n.value) : new e(function(l) {
                        l(n.value)
                    }
                    ).then(o, r)
                }
                u((t = t.apply(n, l || [])).next())
            }
            )
        }
        )
          , p = this && this.__generator || function(n, l) {
            function e(e) {
                return function(o) {
                    return function(e) {
                        if (t)
                            throw new TypeError("Generator is already executing.");
                        for (; r; )
                            try {
                                if (t = 1,
                                a && (i = a[2 & e[0] ? "return" : e[0] ? "throw" : "next"]) && !(i = i.call(a, e[1])).done)
                                    return i;
                                switch (a = 0,
                                i && (e = [0, i.value]),
                                e[0]) {
                                case 0:
                                case 1:
                                    i = e;
                                    break;
                                case 4:
                                    return r.label++,
                                    {
                                        value: e[1],
                                        done: !1
                                    };
                                case 5:
                                    r.label++,
                                    a = e[1],
                                    e = [0];
                                    continue;
                                case 7:
                                    e = r.ops.pop(),
                                    r.trys.pop();
                                    continue;
                                default:
                                    if (i = r.trys,
                                    !(i = i.length > 0 && i[i.length - 1]) && (6 === e[0] || 2 === e[0])) {
                                        r = 0;
                                        continue
                                    }
                                    if (3 === e[0] && (!i || e[1] > i[0] && e[1] < i[3])) {
                                        r.label = e[1];
                                        break
                                    }
                                    if (6 === e[0] && r.label < i[1]) {
                                        r.label = i[1],
                                        i = e;
                                        break
                                    }
                                    if (i && r.label < i[2]) {
                                        r.label = i[2],
                                        r.ops.push(e);
                                        break
                                    }
                                    i[2] && r.ops.pop(),
                                    r.trys.pop();
                                    continue
                                }
                                e = l.call(n, r)
                            } catch (n) {
                                e = [6, n],
                                a = 0
                            } finally {
                                t = i = 0
                            }
                        if (5 & e[0])
                            throw e[1];
                        return {
                            value: e[0] ? e[1] : void 0,
                            done: !0
                        }
                    }([e, o])
                }
            }
            var t, a, i, o, r = {
                label: 0,
                sent: function() {
                    if (1 & i[0])
                        throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: e(0),
                throw: e(1),
                return: e(2)
            },
            "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o
        }
          , h = function() {
            function n(n, l, e, t, a) {
                this.http = n,
                this.events = l,
                this.envVariables = e,
                this.analyticsLogger = t,
                this.mapUtilsFiltrParadas = a
            }
            return n.prototype.parametersFromDescTipo = function(n) {
                var l = new Array;
                return "LUGAR DE INTERES" === n.descTipo || "CULTURA" === n.descTipo || "DEPORTE" === n.descTipo || "EDUCACION" === n.descTipo || "ESPACIO LIBRE" === n.descTipo || "PARQUE" === n.descTipo || "MONUMENTO" === n.descTipo || "PATRIMONIO" === n.descTipo || "PLAYA" === n.descTipo || "SALUD" === n.descTipo || "VARIANTE" === n.descTipo || "VIA" === n.descTipo ? l.push(n.codigo) : "ESQUINA" === n.descTipo ? (l.push(n.via),
                l.push(n.via2)) : "DIRECCION" === n.descTipo && (l.push(n.via),
                n.numero && l.push(n.numero)),
                l
            }
            ,
            n.prototype.comoirCaminando = function(n, l) {
                var e = this
                  , t = n.descTipo;
                "LUGAR DE INTERES" == n.descTipo && (t = n.descSubtipo);
                var a = l.descTipo;
                "LUGAR DE INTERES" == l.descTipo && (a = l.descSubtipo);
                var i = this.envVariables.COMOIR_CAMINANDO + t + "/" + a + "?";
                this.parametersFromDescTipo(n).forEach(function(n) {
                    i = i + "paramOrigen=" + n + "&"
                });
                this.parametersFromDescTipo(l).forEach(function(n) {
                    i = i + "paramDestino=" + n + "&"
                }),
                i.endsWith("&") && (i = i.substring(0, i.length - 1)),
                console.log("APIURL", i),
                this.http.get(i).map(function(n) {
                    return n.json()
                }).subscribe(function(n) {
                    e.events.publish("comoir:caminando", n)
                }, function(n) {
                    console.log("Something went wrong!"),
                    e.events.publish("comoir:caminando-error", n)
                })
            }
            ,
            n.prototype.comoirBus = function(n, l) {
                var e = this;
                console.log("comoirBus()", [n, l]);
                var t = n.descTipo;
                "LUGAR DE INTERES" == n.descTipo && (t = n.descSubtipo);
                var a = l.descTipo;
                "LUGAR DE INTERES" == l.descTipo && (a = l.descSubtipo);
                var i = this.envVariables.COMOIR_BUS + t + "/" + a + "?";
                this.parametersFromDescTipo(n).forEach(function(n) {
                    i = i + "paramOrigen=" + n + "&"
                });
                this.parametersFromDescTipo(l).forEach(function(n) {
                    i = i + "paramDestino=" + n + "&"
                }),
                i.endsWith("&") && (i = i.substring(0, i.length - 1)),
                console.log("AnalyticsLogger ir en bus comoir service"),
                this.analyticsLogger.logEvent("comoir_bus_request", {
                    action: "rutaBus",
                    data: i
                }).then(function(n) {
                    return console.log(n)
                }).catch(function(n) {
                    return console.error(n)
                }),
                this.http.get(i).map(function(n) {
                    return n.json()
                }).subscribe(function(n) {
                    e.events.publish("comoir:bus", n)
                }, function(n) {
                    console.log("Something went wrong!", n),
                    e.events.publish("comoir:bus-error", n)
                })
            }
            ,
            n.prototype.comoirCortarRecorrido = function(n) {
                if (n && n.length > 0) {
                    var l = this.envVariables.COMOIR_BUS_RECORRIDO;
                    return n.forEach(function(n) {
                        l = (l = (l = (l = l + "variante=" + n.variante + "&") + "paradaOrigen=" + n.paradaOrigen + "&") + "paradaDestino=" + n.paradaDestino + "&") + "circular=" + n.circular + "&"
                    }),
                    l.endsWith("&") && (l = l.substring(0, l.length - 1)),
                    this.http.get(l).map(function(n) {
                        return n.json()
                    })
                }
            }
            ,
            n.prototype.comoirCortarRecorridoVariante = function(n) {
                return d(this, void 0, void 0, function() {
                    var l, e, t, a;
                    return p(this, function(i) {
                        switch (i.label) {
                        case 0:
                            return l = this.envVariables.COMOIR_BUS_RECORRIDO,
                            l = l + "variante=" + n.variante + "&",
                            l = l + "paradaOrigen=" + n.paradaOrigen + "&",
                            l = l + "paradaDestino=" + n.paradaDestino + "&",
                            (l = l + "circular=" + n.circular + "&").endsWith("&") && (l = l.substring(0, l.length - 1)),
                            e = this.http.get(l),
                            [4, e.map(function(n) {
                                return n.json()
                            }).toPromise()];
                        case 1:
                            return t = i.sent(),
                            console.log("_recorridoJSON", t),
                            0 != t.geom.geometries.length ? [3, 3] : [4, this.getVarianteMaximal(n.variante)];
                        case 2:
                            return a = i.sent(),
                            n.variante = a,
                            [2, this.comoirCortarRecorrido([n]).toPromise()];
                        case 3:
                            return [2, Promise.resolve(t)]
                        }
                    })
                })
            }
            ,
            n.prototype.getVarianteMaximal = function(n) {
                var l = c.a.format.filter.equalTo("cod_variante", n);
                return this.mapUtilsFiltrParadas.doWFSRequest(this.envVariables.GEOSERVER_WFS_URL, "EPSG:32721", this.envVariables.LAYER_VARIANTE_NO_MAXIMAL.featureNS, this.envVariables.LAYER_VARIANTE_NO_MAXIMAL.featurePrefix, this.envVariables.LAYER_VARIANTE_NO_MAXIMAL.featureTypes, l).then(function(n) {
                    return n[0].properties.cod_variante_maximal
                })
            }
            ,
            n.prototype.duracionRuteo = function(n) {
                if (n) {
                    var l = this.envVariables.COMOIR_DURACION_RECORRIDO
                      , e = [];
                    n.forEach(function(n) {
                        var l = !1;
                        n.ruta.directo.circular && (l = !0);
                        var t = [];
                        if (n.ruta.directo.maximales && n.ruta.directo.maximales.length > 0 && n.ruta.directo.maximales.forEach(function(n) {
                            n.codigo.forEach(function(n) {
                                t.push(n)
                            })
                        }),
                        n.ruta.directo.noMaximales && n.ruta.directo.noMaximales.length > 0 && n.ruta.directo.noMaximales.forEach(function(n) {
                            n.codigo.forEach(function(n) {
                                t.push(n)
                            })
                        }),
                        e.push({
                            id_viaje: n.id,
                            circular: l,
                            ubic_parada1: n.ruta.directo.paradaOrigen.id,
                            ubic_parada2: n.ruta.directo.paradaDestino.id,
                            variantes: t
                        }),
                        n.ruta.trasbordo) {
                            var a = n.id + u.q;
                            l = !1,
                            n.ruta.trasbordo.circular && (l = !0),
                            t = [],
                            n.ruta.trasbordo.maximales && n.ruta.trasbordo.maximales.length > 0 && n.ruta.trasbordo.maximales.forEach(function(n) {
                                n.codigo.forEach(function(n) {
                                    t.push(n)
                                })
                            }),
                            n.ruta.trasbordo.noMaximales && n.ruta.trasbordo.noMaximales.length > 0 && n.ruta.trasbordo.noMaximales.forEach(function(n) {
                                n.codigo.forEach(function(n) {
                                    t.push(n)
                                })
                            }),
                            e.push({
                                id_viaje: a,
                                circular: l,
                                ubic_parada1: n.ruta.trasbordo.paradaOrigen.id,
                                ubic_parada2: n.ruta.trasbordo.paradaDestino.id,
                                variantes: t
                            })
                        }
                    });
                    var t = new i.d({
                        "Content-Type": "application/json"
                    });
                    return this.http.post(l, e, {
                        headers: t
                    }).map(function(n) {
                        return n.json()
                    })
                }
            }
            ,
            n = Object(t.__decorate)([Object(t.__param)(2, Object(a.n)(r.a))], n)
        }()
    },
    76: function(n, l, e) {
        "use strict";
        e.d(l, "a", function() {
            return t
        });
        e(0);
        var t = function() {
            function n(n) {
                this.utilsService = n
            }
            return n.prototype.transform = function(n) {
                return this.utilsService.toCapitalCase(n)
            }
            ,
            n
        }()
    },
    79: function(n, l, e) {
        "use strict";
        e.d(l, "a", function() {
            return u
        });
        var t = e(0)
          , a = e(1)
          , i = e(26)
          , o = e(56)
          , r = e(113)
          , u = (e.n(r),
        function() {
            function n(n, l) {
                this.http = n,
                this.envVariables = l
            }
            return n.prototype.doWFSRequest = function(n, l, e, t, a, i) {
                var o = this
                  , u = (new r.format.WFS).writeGetFeature({
                    srsName: l,
                    featureNS: e,
                    featurePrefix: t,
                    featureTypes: a,
                    outputFormat: "application/json",
                    filter: i
                })
                  , s = (new XMLSerializer).serializeToString(u);
                return new Promise(function(l, e) {
                    o.http.post(n, s).subscribe(function(n) {
                        l(n.json().features)
                    }, function(n) {
                        e(n)
                    })
                }
                )
            }
            ,
            n.prototype.getParadasIntermedias = function(n, l, e) {
                var t, a, i = this, o = r.format.filter.equalTo("cod_ubic_parada", l), u = r.format.filter.equalTo("cod_ubic_parada", e), s = r.format.filter.equalTo("cod_variante", n), c = this.envVariables;
                return this.doWFSRequest(c.GEOSERVER_WFS_URL, "EPSG:32721", c.LAYER_PARADAS_VARIANTES.featureNS, c.LAYER_PARADAS_VARIANTES.featurePrefix, c.LAYER_PARADAS_VARIANTES.featureTypes, r.format.filter.or(r.format.filter.and(o, s), r.format.filter.and(u, s))).then(function(n) {
                    for (var o = 0, u = n; o < u.length; o++) {
                        var d = u[o];
                        d.properties.cod_ubic_parada == l && (t = d.properties.ordinal),
                        d.properties.cod_ubic_parada == e && (a = d.properties.ordinal)
                    }
                    var p = r.format.filter.and(s, r.format.filter.and(r.format.filter.greaterThan("ordinal", t), r.format.filter.lessThan("ordinal", a)));
                    return i.doWFSRequest(c.GEOSERVER_WFS_URL, "EPSG:32721", c.LAYER_PARADAS_VARIANTES.featureNS, c.LAYER_PARADAS_VARIANTES.featurePrefix, c.LAYER_PARADAS_VARIANTES.featureTypes, p)
                })
            }
            ,
            n.prototype.getSiguientesParadasRecorrido = function(n, l) {
                var e, t = this, a = r.format.filter.equalTo("cod_ubic_parada", l), i = r.format.filter.equalTo("cod_variante", n), o = this.envVariables;
                return this.doWFSRequest(o.GEOSERVER_WFS_URL, "EPSG:32721", o.LAYER_PARADAS_VARIANTES.featureNS, o.LAYER_PARADAS_VARIANTES.featurePrefix, o.LAYER_PARADAS_VARIANTES.featureTypes, r.format.filter.and(a, i)).then(function(n) {
                    for (var a = 0, u = n; a < u.length; a++) {
                        var s = u[a];
                        console.log(s),
                        s.properties.cod_ubic_parada == l && (e = s.properties.ordinal)
                    }
                    if (e) {
                        var c = r.format.filter.and(i, r.format.filter.greaterThan("ordinal", e));
                        return t.doWFSRequest(o.GEOSERVER_WFS_URL, "EPSG:32721", o.LAYER_PARADAS_VARIANTES.featureNS, o.LAYER_PARADAS_VARIANTES.featurePrefix, o.LAYER_PARADAS_VARIANTES.featureTypes, c)
                    }
                    return new Promise(function(n, l) {
                        l({})
                    }
                    )
                })
            }
            ,
            n.prototype.getParadaPorCodigo = function(n) {
                var l = this.envVariables
                  , e = r.format.filter.equalTo("cod_ubic_parada", n);
                return this.doWFSRequest(l.GEOSERVER_WFS_URL, o.x, l.LAYER_PARADAS_FILTRO.featureNS, l.LAYER_PARADAS_FILTRO.featurePrefix, l.LAYER_PARADAS_FILTRO.featureTypes, e)
            }
            ,
            n = Object(t.__decorate)([Object(t.__param)(1, Object(a.n)(i.a))], n)
        }())
    },
    80: function(n, l, e) {
        "use strict";
        e.d(l, "a", function() {
            return u
        });
        var t = e(0)
          , a = e(1)
          , i = e(152)
          , o = (e.n(i),
        e(26))
          , r = (e(8),
        e(38),
        e(397))
          , u = (e.n(r),
        e(153),
        function() {
            function n(n, l, e, t, a) {
                this.http = n,
                this.events = l,
                this.utils = e,
                this.mapUtilsProjections = t,
                this.envVariables = a,
                this.toCapitalCase = function(n) {
                    return this.utils.toCapitalCase(n)
                }
                ,
                this.autocomplete_cache = {}
            }
            return n.prototype.resolverUrlPorTipoUbicacion = function(n, l, e, t) {
                void 0 === e && (e = null),
                void 0 === t && (t = !1);
                var a = null;
                switch (n) {
                case "CULTURA":
                    a = this.envVariables.CULTURA_POSICION_URL + l;
                    break;
                case "PARQUE":
                    a = this.envVariables.PARQUE_POSICION_URL + l;
                    break;
                case "PLAYA":
                    a = this.envVariables.PLAYA_POSICION_URL + l;
                    break;
                case "EDUCACION":
                    a = this.envVariables.EDUCACION_POSICION_URL + l;
                    break;
                case "ESPACIO LIBRE":
                    a = this.envVariables.ESPACIO_LIBRE_POSICION_URL + l;
                    break;
                case "PATRIMONIO":
                    a = this.envVariables.PATRIMONIO_POSICION_URL + l;
                    break;
                case "MONUMENTO":
                    a = this.envVariables.MONUMENTO_POSICION_URL + l;
                    break;
                case "DEPORTE":
                    a = this.envVariables.DEPORTE_POSICION_URL + l;
                    break;
                case "SALUD":
                    a = this.envVariables.SALUD_POSICION_URL + l;
                    break;
                case "VIA":
                    a = this.envVariables.VIA_PUNTO_URL + l;
                    break;
                case "ESQUINA":
                    a = this.envVariables.ESQUINA_VIAS_URL + l + "/" + e;
                    break;
                case "DIRECCION":
                    a = this.envVariables.DIRECCION_INFO_URL + l + "/" + e;
                    break;
                case "DIRECCION_POSICION":
                    a = this.envVariables.DIRECCION_POSICION_URL + l + "/" + e;
                    break;
                default:
                    if ("COORDS" == n) {
                        a = this.envVariables.UBIC_GEODECOD_UBICACION,
                        t && (a += "direcciones=true&"),
                        a = a + "x=" + l + "&y=" + e;
                        break
                    }
                    console.log("NOT IMPLEMENTED ", n)
                }
                return a
            }
            ,
            n.prototype.geodecodificacion = function(n, l) {
                var e = this;
                void 0 === l && (l = !0);
                var t = this.resolverUrlPorTipoUbicacion("COORDS", n[0].toString(), n[1].toString(), l);
                return new Promise(function(n, l) {
                    e.http.get(t).subscribe(function(l) {
                        n(l)
                    }, function(n) {
                        l(n)
                    })
                }
                )
            }
            ,
            n.prototype.getData = function(n) {
                var l = this;
                if (n.use_cache) {
                    var e = this.autocomplete_cache[n.service] || {}
                      , t = null;
                    switch (n.service) {
                    case "ESQUINA_URL":
                        t = e[n.codigo1];
                        break;
                    case "ESQUINA_POSICION_URL":
                        t = e[n.codigo1 + "/" + n.codigo2];
                        break;
                    case "LUGARES_Y_VIAS_URL":
                        t = e.lista
                    }
                    t = t || [];
                    var a = [];
                    if ("ESQUINA_POSICION_URL" == n.service)
                        a = t;
                    else
                        for (var i in t)
                            "string" == typeof n.texto && n.texto.length > 0 && -1 != t[i].nombre.toLowerCase().indexOf(n.texto) && a.push(t[i]);
                    return Promise.resolve(a)
                }
                var o = this.envVariables[n.service];
                switch (n.service) {
                case "ESQUINA_URL":
                    o += n.codigo1 + "?nombre=" + n.texto;
                    break;
                case "ESQUINA_POSICION_URL":
                    o += n.codigo1 + "/" + n.codigo2;
                    break;
                case "LUGARES_Y_VIAS_URL":
                    o += "nombre=" + n.texto
                }
                return this.http.get(o).toPromise().then(function(e) {
                    var t = e.json()
                      , a = l.autocomplete_cache[n.service] || {};
                    switch (n.service) {
                    case "ESQUINA_URL":
                        a[n.codigo1] = t;
                        break;
                    case "ESQUINA_POSICION_URL":
                        a[n.codigo1 + "/" + n.codigo2] = t;
                        break;
                    case "LUGARES_Y_VIAS_URL":
                        a.lista = t
                    }
                    return "ESQUINA_POSICION_URL" == n.service && (t.via = n.codigo1,
                    t.via2 = n.codigo2,
                    t.cruce_nombre = "cruce_nombre",
                    t.cruce_nombre = "cruce_nombre",
                    n.cruce_nombre && (t.cruce_nombre = n.cruce_nombre)),
                    l.autocomplete_cache[n.service] = a,
                    t
                })
            }
            ,
            n.prototype.resolverDireccion = function(n, l) {
                var e = this
                  , t = this.resolverUrlPorTipoUbicacion("DIRECCION_POSICION", n.codigo, l, !1);
                return new Promise(function(a, i) {
                    e.http.get(t).toPromise().then(function(n) {
                        return n.json()
                    }).then(function(t) {
                        Object.assign(n, t),
                        n.nombre = e.toCapitalCase(n.nombre) + " " + l,
                        n.descTipo = "DIRECCION",
                        n.numero = l,
                        n.via = n.codigo,
                        a(n)
                    }).catch(function(n) {
                        a(null)
                    })
                }
                )
            }
            ,
            n.prototype.auxResolverEsquinas = function(n, l, e) {
                var t = this;
                return this.getData({
                    service: "ESQUINA_URL",
                    codigo1: n.codigo,
                    texto: l,
                    use_cache: e
                }).then(function(l) {
                    var a = []
                      , i = [];
                    for (var o in l)
                        if ("VIA" == l[o].descTipo) {
                            var r = t.getData({
                                service: "ESQUINA_POSICION_URL",
                                codigo1: n.codigo,
                                codigo2: l[o].codigo,
                                use_cache: e,
                                cruce_nombre: l[o].nombre
                            }).then(function(l) {
                                return l.nombre = t.toCapitalCase(n.nombre) + " y " + t.toCapitalCase(l.cruce_nombre),
                                l.descTipo = "ESQUINA",
                                a.push(l),
                                l
                            });
                            i.push(r)
                        }
                    return Promise.all(i).then(function(n) {
                        return a
                    }, function(n) {
                        console.error("HUBO ERRORES: ", n)
                    })
                })
            }
            ,
            n.prototype.resolverCoordenadas = function(n) {
                console.log("resolverCoordenadas()", n.data.codigo, [n]);
                var l = ""
                  , e = n.data.descTipo;
                return n.data.descTipo && "VIA" == n.data.descTipo || (e = n.data.descSubtipo),
                l = this.resolverUrlPorTipoUbicacion(e, n.data.codigo),
                console.log(l),
                this.http.get(l).toPromise().then(function(n) {
                    return n.json()
                }).then(function(l) {
                    return console.log("---\x3e", n.data, l),
                    l.punto ? Object.assign(n.data, l.punto) : l.geoJSON && "Point" == l.geoJSON.type && Object.assign(n.data, l),
                    l.geometria && (n.data.geometria = l.geometria),
                    console.log("resolverCoordenadas() posicion -> ", n),
                    n
                })
            }
            ,
            n.prototype.autocompleteAddress = function(n, l) {
                var e = this
                  , t = []
                  , a = n ? n.toLocaleLowerCase() : "";
                if (-1 != (a = a.trim()).indexOf(" ")) {
                    var i = 0
                      , o = null
                      , r = a.split(" ")
                      , u = null;
                    for (var s in r)
                        "y" != r[s] && "esq" != r[s] && "esq." != r[s] && "esquina" != r[s] || (o = s),
                        !isNaN(parseInt(r[s])) && 3 <= r[s].length && r[s].length <= 4 && parseInt(s) == r.length - 1 && (i = parseInt(r[s]));
                    if (i)
                        return console.log("NUMERO", i),
                        u = a.split("" + i),
                        this.getData({
                            service: "LUGARES_Y_VIAS_URL",
                            texto: u[0],
                            use_cache: l
                        }).then(function(n) {
                            var l = [];
                            for (var a in n)
                                "VIA" == n[a].descTipo && l.push(e.resolverDireccion(n[a], i).then(function(n) {
                                    return console.log("resolverDireccion ->", n),
                                    n
                                }));
                            return Promise.all(l).then(function(n) {
                                console.log("RESPUESTA FINAL: ", n);
                                for (var l in n)
                                    n[l] && t.push(n[l]);
                                return t
                            }, function(n) {
                                console.error("HUBO ERRORES: ", n)
                            })
                        });
                    if (o) {
                        u = ["", ""];
                        for (var c = 0; c < parseInt(o); c++)
                            u[0] += r[c] + " ";
                        for (c = parseInt(o) + 1; c < r.length; c++)
                            u[1] += r[c] + " ";
                        return u[0] = u[0].trim(),
                        u[1] = u[1].trim(),
                        u[1].length >= 2 ? this.getData({
                            service: "LUGARES_Y_VIAS_URL",
                            texto: u[0],
                            use_cache: l
                        }).then(function(n) {
                            var a = [];
                            for (var i in n)
                                "VIA" == n[i].descTipo && a.push(e.auxResolverEsquinas(n[i], u[1], l).then(function(n) {
                                    return n
                                }));
                            return Promise.all(a).then(function(n) {
                                for (var l in n)
                                    for (var e in n[l])
                                        t.push(n[l][e]);
                                return t
                            }, function(n) {
                                console.error("HUBO ERRORES: ", n)
                            })
                        }) : this.fetchViasYLugares(u[0], l)
                    }
                }
                return this.fetchViasYLugares(a, l)
            }
            ,
            n.prototype.fetchViasYLugares = function(n, l) {
                var e = this;
                return this.getData({
                    service: "LUGARES_Y_VIAS_URL",
                    texto: n,
                    use_cache: l
                }).then(function(n) {
                    for (var l in n)
                        n[l].nombre = e.toCapitalCase(n[l].nombre);
                    return n
                })
            }
            ,
            n.prototype.obtenerUbicacionPorTipoYCodigo = function(n, l, e, t, a) {
                if (t && "EPSG:32721" !== t) {
                    var i = this.mapUtilsProjections.transformSRIDToSRID(parseFloat(l), parseFloat(e), t, "EPSG:32721");
                    l = i[0],
                    e = i[1]
                }
                var o = this.resolverUrlPorTipoUbicacion(n, l, e, !0);
                return this.http.get(o).toPromise().then(function(n) {
                    var l = n.json();
                    return a && (l.label = a,
                    console.log("Agrega label", l)),
                    l
                }).catch(function(n) {
                    return null
                })
            }
            ,
            n = Object(t.__decorate)([Object(t.__param)(4, Object(a.n)(o.a))], n)
        }())
    },
    86: function(n, l, e) {
        "use strict";
        e.d(l, "a", function() {
            return o
        });
        var t = e(0)
          , a = e(1)
          , i = (e(8),
        e(26))
          , o = (e(38),
        function() {
            function n(n, l, e, t) {
                this.events = n,
                this.platform = l,
                this.utils = e,
                this.envVariables = t,
                this.ion_navbar_prev_class = null,
                this.ion_navbar_class = "mapa",
                this.show_parada = "",
                this.show_destino = ""
            }
            return n.prototype.goBack = function() {
                this.events.publish("header:go-back", {})
            }
            ,
            n.prototype.backToPrev = function() {
                this.ion_navbar_prev_class && (this.ion_navbar_class = this.ion_navbar_prev_class,
                this.ion_navbar_prev_class = null)
            }
            ,
            n.prototype.showMapa = function() {
                this.ion_navbar_class = "mapa",
                this.updateMapeSize()
            }
            ,
            n.prototype.showMapaOnly = function() {
                this.showMapa()
            }
            ,
            n.prototype.showMapaMasBotones = function() {
                this.ion_navbar_class = "mapa con-botones",
                this.updateMapeSize()
            }
            ,
            n.prototype.showParada = function(n) {
                this.ion_navbar_class = "parada",
                this.show_parada = n,
                this.updateMapeSize()
            }
            ,
            n.prototype.showDestino = function(n) {
                this.ion_navbar_class = "destino",
                this.show_parada = n,
                this.updateMapeSize()
            }
            ,
            n.prototype.showIrCaminando = function() {
                this.ion_navbar_class = "ir_caminando",
                this.updateMapeSize()
            }
            ,
            n.prototype.showIrEnBus = function() {
                this.ion_navbar_class = "ir_en_bus",
                this.updateMapeSize()
            }
            ,
            n.prototype.showOrigenDestino = function() {
                this.ion_navbar_class = "origen_destino",
                this.updateMapeSize()
            }
            ,
            n.prototype.showTocarMapa = function(n) {
                this.ion_navbar_prev_class = this.ion_navbar_class,
                this.ion_navbar_class = "tocar_mapa",
                this.icon_src = "assets/images/icon/icon-" + n + ".svg",
                this.updateMapeSize()
            }
            ,
            n.prototype.setNavController = function(n) {
                this.navCtrl = n
            }
            ,
            n.prototype.updateMapeSize = function() {}
            ,
            n = Object(t.__decorate)([Object(t.__param)(3, Object(a.n)(i.a))], n)
        }())
    },
    87: function(n, l, e) {
        "use strict";
        e.d(l, "a", function() {
            return s
        });
        var t = e(0)
          , a = e(1)
          , i = e(49)
          , o = e(152)
          , r = (e.n(o),
        e(8),
        e(26))
          , u = e(56)
          , s = (e(39),
        function() {
            function n(n, l, e, t) {
                this.http = n,
                this.events = l,
                this.dataService = e,
                this.envVariables = t,
                this.estado = "normal",
                this.lastGet = 0,
                this.lineasParada = null,
                this.paradaId = 0,
                this.primerGetBusesParada = !1,
                this.timerBusesParada = null,
                this.waiting = !1,
                this.lastGetRecorrido = 0,
                this.listParadaVariantes = new Map,
                this.primerGetBusesRecorrido = !1,
                this.timerBusesRecorrido = null,
                this.waitingRecorrido = !1
            }
            return n.prototype.backToNormal = function() {
                clearTimeout(this.timerBusesParada),
                clearTimeout(this.timerBusesRecorrido),
                this.estado = "normal",
                this.paradaId = 0,
                this.timerBusesParada = 0,
                this.listParadaVariantes = new Map
            }
            ,
            n.prototype.startBusesParada = function(n, l) {
                this.estado && "parada" == this.estado || (this.primerGetBusesParada = !0),
                this.estado = "parada",
                this.lineasParada = l,
                this.paradaId = n,
                this.getBusesParadaTimeout()
            }
            ,
            n.prototype.filtrarLineasBusesParada = function(n) {
                this.lineasParada = n,
                clearTimeout(this.timerBusesParada),
                this.getBusesParadaTimeout()
            }
            ,
            n.prototype.setTimerBusesParada = function(n) {
                this.timerBusesParada = setTimeout(this.getBusesParadaTimeout.bind(this), n)
            }
            ,
            n.prototype.getBusesParadaTimeout = function() {
                var n = this;
                if ("parada" == this.estado) {
                    if (this.waiting)
                        return this.setTimerBusesParada(u.A);
                    this.waiting = !0,
                    this.lastGet = (new Date).getTime();
                    var l = this.paradaId
                      , e = this.lineasParada;
                    if (this.primerGetBusesParada) {
                        var t = new Date
                          , a = t.getMinutes();
                        a = 5 * Math.trunc(a / 5);
                        var i = t.getHours()
                          , o = "HABIL";
                        6 == t.getDay() ? o = "SABADO" : 0 == t.getDay() && (o = "DOMINGO");
                        var r = this.envVariables.SIGUIENTES_BUSES_PARADA + l + "/" + o + "/" + i + ":" + a;
                        if (e) {
                            var s = e.map(function(n) {
                                return n.c
                            });
                            this.http.post(r, s).subscribe(function(l) {
                                n.events.publish("transporte:teorico-primera-vez", l.json())
                            }, function(n) {
                                console.error("Something went wrong!", n)
                            })
                        } else
                            this.http.get(r).subscribe(function(l) {
                                n.events.publish("transporte:teorico-primera-vez", l.json())
                            }, function(n) {
                                console.error("Something went wrong!", n)
                            });
                        this.primerGetBusesParada = !1,
                        this.doGetBusesParada(l, this.lineasParada)
                    } else
                        this.doGetBusesParada(l, this.lineasParada)
                } else
                    console.error("ERROR: esto no debería pasar nunca. fijate si existe un clearTimeout(this.timerBusesParada); en la funcion backToNormal ()")
            }
            ,
            n.prototype.doGetBusesParada = function(n, l) {
                var e = this
                  , t = this.envVariables.SIGUIENTES_BUSES_PARADA + this.paradaId;
                if (l && null != l) {
                    var a = l.map(function(n) {
                        return n.c
                    });
                    this.http.post(t, a).subscribe(function(l) {
                        e.manageDataBusesParada(n, l)
                    }, function(n) {
                        e.waiting = !1,
                        console.error("Something went wrong!"),
                        e.events.publish("transporte:buses-error", n)
                    })
                } else
                    this.http.get(t).subscribe(function(l) {
                        e.manageDataBusesParada(n, l)
                    }, function(n) {
                        e.waiting = !1,
                        console.error("Something went wrong!"),
                        e.events.publish("transporte:buses-error", n)
                    })
            }
            ,
            n.prototype.depurarDatos = function(n) {
                var l = [];
                for (var e in n) {
                    var t = n[e];
                    t.linea ? t.destino ? l.push(t) : console.error("ERROR: se encontró un dato que no tiene destino", t) : console.error("ERROR: se encontró un dato que no tiene línea", t)
                }
                return {
                    pasadas: l
                }
            }
            ,
            n.prototype.manageDataBusesParada = function(n, l) {
                if (console.log("transporteService.manageDataBusesParada(data)", n, [l]),
                this.waiting = !1,
                "parada" == this.estado && n == this.paradaId) {
                    var e = this.depurarDatos(l.json());
                    this.events.publish("transporte:buses", e.pasadas);
                    var t = (new Date).getTime()
                      , a = u.z - (t - this.lastGet);
                    a < 0 && (a = 0),
                    this.setTimerBusesParada(a)
                }
            }
            ,
            n.prototype.getHorarioTeoricoParada = function(n) {
                var l = this;
                this.estado = "teoricoParada";
                var e = "HABIL";
                2 == n.horario.tipoDia ? e = "SABADO" : 3 == n.horario.tipoDia && (e = "DOMINGO");
                var t = this.envVariables.SIGUIENTES_BUSES_PARADA + n.parada + "/" + e + "/" + n.horario.hora;
                if (n.lineas) {
                    var a = n.lineas.map(function(n) {
                        return n.c
                    });
                    return new Promise(function(n, e) {
                        l.http.post(t, a).subscribe(function(l) {
                            n(l.json())
                        }, function(n) {
                            console.error("Something went wrong!", n),
                            e(n)
                        })
                    }
                    )
                }
                return new Promise(function(n, e) {
                    l.http.get(t).subscribe(function(l) {
                        n(l.json())
                    }, function(n) {
                        console.error("Something went wrong!", n),
                        e(n)
                    })
                }
                )
            }
            ,
            n.prototype.getLineasParada = function(n) {
                var l = this;
                if (void 0 === n && (n = null),
                n && (this.paradaId = n),
                this.paradaId > 0) {
                    var e = this.paradaId;
                    this.dataService.getLineasParada(e).then(function(t) {
                        t ? (t.paradaID = n,
                        l.events.publish("transporte:lineas-parada", t)) : l.http.get(l.envVariables.LINEAS_DE_PARADA + l.paradaId).subscribe(function(t) {
                            var a = t.json()
                              , i = [];
                            for (var o in a.lineas) {
                                var r = a.lineas[o];
                                r.descripcion && r.codigo && i.push({
                                    l: r.descripcion,
                                    c: r.codigo
                                })
                            }
                            a.lineas = i,
                            l.dataService.setLineasParada(e, a),
                            a.paradaID = n,
                            l.events.publish("transporte:lineas-parada", a)
                        }, function(e) {
                            l.waiting = !1,
                            console.log("Something went wrong!"),
                            l.events.publish("transporte:lineas-paradas-error", {
                                error: e,
                                parada: n
                            })
                        })
                    })
                }
            }
            ,
            n.prototype.startBusesRecorrido = function(n) {
                console.log("TransporteService.startBusesRecorrido()", n),
                this.estado && "recorrido" == this.estado || (this.primerGetBusesRecorrido = !0),
                this.estado = "recorrido",
                this.listParadaVariantes = n,
                this.getBusesRecorridoTimeout()
            }
            ,
            n.prototype.filtrarLineasBusesRecorrido = function(n) {
                this.listParadaVariantes = n,
                clearTimeout(this.timerBusesRecorrido),
                this.getBusesRecorridoTimeout()
            }
            ,
            n.prototype.setTimerBusesRecorrido = function(n) {
                console.log("TransporteService.setTimerBusesRecorrido()", n),
                this.timerBusesRecorrido = setTimeout(this.getBusesRecorridoTimeout.bind(this), n)
            }
            ,
            n.prototype.getBusesRecorridoTimeout = function() {
                if ("recorrido" == this.estado) {
                    if (this.waitingRecorrido)
                        return this.setTimerBusesRecorrido(u.A);
                    this.waitingRecorrido = !0,
                    this.lastGetRecorrido = (new Date).getTime(),
                    this.doGetBusesRecorrido()
                } else
                    console.error("ERROR: esto no debería pasar nunca. fijate si existe un clearTimeout(this.timerBusesParada); en la funcion backToNormal ()")
            }
            ,
            n.prototype.doGetBusesRecorrido = function() {
                var n = this;
                console.log("TransporteService.doGetBusesRecorrido() ");
                var l = this.envVariables.SIGUIENTES_BUSES_RUTEO;
                console.log("REQUEST: ", [this.listParadaVariantes]);
                var e = this.mapToString(this.listParadaVariantes)
                  , t = new i.d({
                    "Content-Type": "application/json"
                });
                this.http.post(l, e, {
                    headers: t
                }).subscribe(function(l) {
                    n.manageDataBusesRecorrido(l)
                }, function(l) {
                    n.waitingRecorrido = !1,
                    console.error("Something went wrong!"),
                    console.log("this.listParadaVariantes: ", n.listParadaVariantes)
                })
            }
            ,
            n.prototype.manageDataBusesRecorrido = function(n) {
                if (console.log("TransporteService.manageDataBusesRecorrido", n),
                this.waitingRecorrido = !1,
                "recorrido" == this.estado) {
                    var l = n.json()
                      , e = [];
                    for (var t in l.pasadas) {
                        var a = l.pasadas[t];
                        a.destino && a.linea && e.push(a)
                    }
                    l.pasadas = e,
                    this.events.publish("transporte:buses-recorrido", l);
                    var i = (new Date).getTime()
                      , o = u.z - (i - this.lastGetRecorrido);
                    o < 0 && (o = 0),
                    this.setTimerBusesRecorrido(o)
                }
            }
            ,
            n.prototype.getHorarioTeoricoRecorrido = function(n, l) {
                var e = this;
                this.estado = "teoricoRecorrido",
                this.listParadaVariantes = n;
                var t = "HABIL";
                2 == l.tipoDia ? t = "SABADO" : 3 == l.tipoDia && (t = "DOMINGO");
                var a = this.envVariables.SIGUIENTES_BUSES_RUTEO + t + "/" + l.hora
                  , o = this.mapToString(this.listParadaVariantes)
                  , r = new i.d({
                    "Content-Type": "application/json"
                });
                return new Promise(function(n, l) {
                    e.http.post(a, o, {
                        headers: r
                    }).subscribe(function(l) {
                        n(l.json())
                    }, function(n) {
                        console.error("Something went wrong!", n),
                        l(n)
                    })
                }
                )
            }
            ,
            n.prototype.mapToString = function(n) {
                var l = this
                  , e = "{";
                return n.forEach(function(n, t) {
                    e = e + '"' + t + '":' + l.mapToStringAux(n) + ","
                }),
                e.length > 1 && (e = e.substring(0, e.length - 1)),
                e += "}"
            }
            ,
            n.prototype.mapToStringAux = function(n) {
                var l = "{";
                return n.forEach(function(n, e) {
                    l = l + '"' + e + '":[' + n + "],"
                }),
                l.length > 1 && (l = l.substring(0, l.length - 1)),
                l += "}"
            }
            ,
            n.prototype.getCodigoVariantesCirculares = function() {
                var n = this;
                return new Promise(function(l, e) {
                    n.dataService.getCirculares().then(function(t) {
                        if (t)
                            l(t);
                        else {
                            var a = new i.d({
                                "Content-Type": "application/json"
                            });
                            n.http.get(n.envVariables.VARIANTES_CIRCULARES, {
                                headers: a
                            }).subscribe(function(e) {
                                var a = e.json();
                                n.dataService.setCirculares(a),
                                l(t)
                            }, function(n) {
                                console.log("Something went wrong!"),
                                e(n)
                            })
                        }
                    })
                }
                )
            }
            ,
            n = Object(t.__decorate)([Object(t.__param)(3, Object(a.n)(r.a))], n)
        }())
    },
    88: function(n, l, e) {
        "use strict";
        e.d(l, "a", function() {
            return t
        });
        e(0),
        e(8);
        var t = function() {
            return function() {}
        }()
    },
    89: function(n, l, e) {
        "use strict";
        e.d(l, "a", function() {
            return t
        });
        e(0),
        e(8);
        var t = function() {
            function n(n, l, e, t, a, i, o) {
                this.navCtrl = n,
                this.navParams = l,
                this.viewCtrl = e,
                this.favorites = t,
                this.element = a,
                this.renderer = i,
                this.domCtrl = o,
                this.entries = [],
                this.caller = null
            }
            return n.prototype.onEntryRightIconPressed = function(n, l) {
                var e = this;
                return console.log("TypeaheadPage.onEntryRightIconPressed()", l),
                "no" == l.fav ? this.caller.askForName(l.text).then(function(t) {
                    return l.label = t,
                    e.caller.switchFavorite(n, l, "yes")
                }).catch(function(n) {
                    return console.error(n)
                }) : "yes" == l.fav ? this.caller.switchFavorite(n, l, "no") : void ("usetext" == l.fav && this.caller.useTextOfAutocomplete(n, l))
            }
            ,
            n.prototype.onEntrySelected = function(n, l, e) {
                this.caller.onEntrySelected(n, l, e)
            }
            ,
            n.prototype.closeAutocomplete = function(n) {
                console.log("TypeaheadPage.closeAutocomplete()", n, this.ionicList.nativeElement.contains(n.target), n.target),
                this.ionicList.nativeElement.contains(n.target) || this.caller.closeAutocomplete()
            }
            ,
            n.prototype.ionViewDidLoad = function() {}
            ,
            n.prototype.setDatos = function(n, l, e) {
                var t = this;
                console.log("TypeaheadPage.setDatos()", l),
                this.entries = n,
                this.caller = e,
                this.domCtrl.write(function() {
                    t.renderer.setElementStyle(t.element.nativeElement.parentNode.parentNode, "top", l + "px")
                })
            }
            ,
            n
        }()
    }
}, [429]);
