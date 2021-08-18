(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __reExport = (target, module, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toModule = (module) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };

  // node_modules/bootstrap/dist/js/bootstrap.bundle.min.js
  var require_bootstrap_bundle_min = __commonJS({
    "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"(exports, module) {
      !function(t, e) {
        typeof exports == "object" && typeof module != "undefined" ? module.exports = e() : typeof define == "function" && define.amd ? define(e) : (t = typeof globalThis != "undefined" ? globalThis : t || self).bootstrap = e();
      }(exports, function() {
        "use strict";
        const t = (t2) => {
          let e2 = t2.getAttribute("data-bs-target");
          if (!e2 || e2 === "#") {
            let i2 = t2.getAttribute("href");
            if (!i2 || !i2.includes("#") && !i2.startsWith("."))
              return null;
            i2.includes("#") && !i2.startsWith("#") && (i2 = "#" + i2.split("#")[1]), e2 = i2 && i2 !== "#" ? i2.trim() : null;
          }
          return e2;
        }, e = (e2) => {
          const i2 = t(e2);
          return i2 && document.querySelector(i2) ? i2 : null;
        }, i = (e2) => {
          const i2 = t(e2);
          return i2 ? document.querySelector(i2) : null;
        }, n = (t2) => {
          t2.dispatchEvent(new Event("transitionend"));
        }, s = (t2) => !(!t2 || typeof t2 != "object") && (t2.jquery !== void 0 && (t2 = t2[0]), t2.nodeType !== void 0), o = (t2) => s(t2) ? t2.jquery ? t2[0] : t2 : typeof t2 == "string" && t2.length > 0 ? document.querySelector(t2) : null, r = (t2, e2, i2) => {
          Object.keys(i2).forEach((n2) => {
            const o2 = i2[n2], r2 = e2[n2], a2 = r2 && s(r2) ? "element" : (l2 = r2) == null ? "" + l2 : {}.toString.call(l2).match(/\s([a-z]+)/i)[1].toLowerCase();
            var l2;
            if (!new RegExp(o2).test(a2))
              throw new TypeError(`${t2.toUpperCase()}: Option "${n2}" provided type "${a2}" but expected type "${o2}".`);
          });
        }, a = (t2) => !(!s(t2) || t2.getClientRects().length === 0) && getComputedStyle(t2).getPropertyValue("visibility") === "visible", l = (t2) => !t2 || t2.nodeType !== Node.ELEMENT_NODE || !!t2.classList.contains("disabled") || (t2.disabled !== void 0 ? t2.disabled : t2.hasAttribute("disabled") && t2.getAttribute("disabled") !== "false"), c = (t2) => {
          if (!document.documentElement.attachShadow)
            return null;
          if (typeof t2.getRootNode == "function") {
            const e2 = t2.getRootNode();
            return e2 instanceof ShadowRoot ? e2 : null;
          }
          return t2 instanceof ShadowRoot ? t2 : t2.parentNode ? c(t2.parentNode) : null;
        }, h = () => {
        }, d = (t2) => {
          t2.offsetHeight;
        }, u = () => {
          const { jQuery: t2 } = window;
          return t2 && !document.body.hasAttribute("data-bs-no-jquery") ? t2 : null;
        }, f = [], p = () => document.documentElement.dir === "rtl", m = (t2) => {
          var e2;
          e2 = () => {
            const e3 = u();
            if (e3) {
              const i2 = t2.NAME, n2 = e3.fn[i2];
              e3.fn[i2] = t2.jQueryInterface, e3.fn[i2].Constructor = t2, e3.fn[i2].noConflict = () => (e3.fn[i2] = n2, t2.jQueryInterface);
            }
          }, document.readyState === "loading" ? (f.length || document.addEventListener("DOMContentLoaded", () => {
            f.forEach((t3) => t3());
          }), f.push(e2)) : e2();
        }, g = (t2) => {
          typeof t2 == "function" && t2();
        }, _ = (t2, e2, i2 = true) => {
          if (!i2)
            return void g(t2);
          const s2 = ((t3) => {
            if (!t3)
              return 0;
            let { transitionDuration: e3, transitionDelay: i3 } = window.getComputedStyle(t3);
            const n2 = Number.parseFloat(e3), s3 = Number.parseFloat(i3);
            return n2 || s3 ? (e3 = e3.split(",")[0], i3 = i3.split(",")[0], 1e3 * (Number.parseFloat(e3) + Number.parseFloat(i3))) : 0;
          })(e2) + 5;
          let o2 = false;
          const r2 = ({ target: i3 }) => {
            i3 === e2 && (o2 = true, e2.removeEventListener("transitionend", r2), g(t2));
          };
          e2.addEventListener("transitionend", r2), setTimeout(() => {
            o2 || n(e2);
          }, s2);
        }, b = (t2, e2, i2, n2) => {
          let s2 = t2.indexOf(e2);
          if (s2 === -1)
            return t2[!i2 && n2 ? t2.length - 1 : 0];
          const o2 = t2.length;
          return s2 += i2 ? 1 : -1, n2 && (s2 = (s2 + o2) % o2), t2[Math.max(0, Math.min(s2, o2 - 1))];
        }, v = /[^.]*(?=\..*)\.|.*/, y = /\..*/, w = /::\d+$/, E = {};
        let A = 1;
        const T = { mouseenter: "mouseover", mouseleave: "mouseout" }, O = /^(mouseenter|mouseleave)/i, C = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
        function k(t2, e2) {
          return e2 && `${e2}::${A++}` || t2.uidEvent || A++;
        }
        function L(t2) {
          const e2 = k(t2);
          return t2.uidEvent = e2, E[e2] = E[e2] || {}, E[e2];
        }
        function x(t2, e2, i2 = null) {
          const n2 = Object.keys(t2);
          for (let s2 = 0, o2 = n2.length; s2 < o2; s2++) {
            const o3 = t2[n2[s2]];
            if (o3.originalHandler === e2 && o3.delegationSelector === i2)
              return o3;
          }
          return null;
        }
        function D(t2, e2, i2) {
          const n2 = typeof e2 == "string", s2 = n2 ? i2 : e2;
          let o2 = I(t2);
          return C.has(o2) || (o2 = t2), [n2, s2, o2];
        }
        function S(t2, e2, i2, n2, s2) {
          if (typeof e2 != "string" || !t2)
            return;
          if (i2 || (i2 = n2, n2 = null), O.test(e2)) {
            const t3 = (t4) => function(e3) {
              if (!e3.relatedTarget || e3.relatedTarget !== e3.delegateTarget && !e3.delegateTarget.contains(e3.relatedTarget))
                return t4.call(this, e3);
            };
            n2 ? n2 = t3(n2) : i2 = t3(i2);
          }
          const [o2, r2, a2] = D(e2, i2, n2), l2 = L(t2), c2 = l2[a2] || (l2[a2] = {}), h2 = x(c2, r2, o2 ? i2 : null);
          if (h2)
            return void (h2.oneOff = h2.oneOff && s2);
          const d2 = k(r2, e2.replace(v, "")), u2 = o2 ? function(t3, e3, i3) {
            return function n3(s3) {
              const o3 = t3.querySelectorAll(e3);
              for (let { target: r3 } = s3; r3 && r3 !== this; r3 = r3.parentNode)
                for (let a3 = o3.length; a3--; )
                  if (o3[a3] === r3)
                    return s3.delegateTarget = r3, n3.oneOff && P.off(t3, s3.type, e3, i3), i3.apply(r3, [s3]);
              return null;
            };
          }(t2, i2, n2) : function(t3, e3) {
            return function i3(n3) {
              return n3.delegateTarget = t3, i3.oneOff && P.off(t3, n3.type, e3), e3.apply(t3, [n3]);
            };
          }(t2, i2);
          u2.delegationSelector = o2 ? i2 : null, u2.originalHandler = r2, u2.oneOff = s2, u2.uidEvent = d2, c2[d2] = u2, t2.addEventListener(a2, u2, o2);
        }
        function N(t2, e2, i2, n2, s2) {
          const o2 = x(e2[i2], n2, s2);
          o2 && (t2.removeEventListener(i2, o2, Boolean(s2)), delete e2[i2][o2.uidEvent]);
        }
        function I(t2) {
          return t2 = t2.replace(y, ""), T[t2] || t2;
        }
        const P = { on(t2, e2, i2, n2) {
          S(t2, e2, i2, n2, false);
        }, one(t2, e2, i2, n2) {
          S(t2, e2, i2, n2, true);
        }, off(t2, e2, i2, n2) {
          if (typeof e2 != "string" || !t2)
            return;
          const [s2, o2, r2] = D(e2, i2, n2), a2 = r2 !== e2, l2 = L(t2), c2 = e2.startsWith(".");
          if (o2 !== void 0) {
            if (!l2 || !l2[r2])
              return;
            return void N(t2, l2, r2, o2, s2 ? i2 : null);
          }
          c2 && Object.keys(l2).forEach((i3) => {
            !function(t3, e3, i4, n3) {
              const s3 = e3[i4] || {};
              Object.keys(s3).forEach((o3) => {
                if (o3.includes(n3)) {
                  const n4 = s3[o3];
                  N(t3, e3, i4, n4.originalHandler, n4.delegationSelector);
                }
              });
            }(t2, l2, i3, e2.slice(1));
          });
          const h2 = l2[r2] || {};
          Object.keys(h2).forEach((i3) => {
            const n3 = i3.replace(w, "");
            if (!a2 || e2.includes(n3)) {
              const e3 = h2[i3];
              N(t2, l2, r2, e3.originalHandler, e3.delegationSelector);
            }
          });
        }, trigger(t2, e2, i2) {
          if (typeof e2 != "string" || !t2)
            return null;
          const n2 = u(), s2 = I(e2), o2 = e2 !== s2, r2 = C.has(s2);
          let a2, l2 = true, c2 = true, h2 = false, d2 = null;
          return o2 && n2 && (a2 = n2.Event(e2, i2), n2(t2).trigger(a2), l2 = !a2.isPropagationStopped(), c2 = !a2.isImmediatePropagationStopped(), h2 = a2.isDefaultPrevented()), r2 ? (d2 = document.createEvent("HTMLEvents"), d2.initEvent(s2, l2, true)) : d2 = new CustomEvent(e2, { bubbles: l2, cancelable: true }), i2 !== void 0 && Object.keys(i2).forEach((t3) => {
            Object.defineProperty(d2, t3, { get: () => i2[t3] });
          }), h2 && d2.preventDefault(), c2 && t2.dispatchEvent(d2), d2.defaultPrevented && a2 !== void 0 && a2.preventDefault(), d2;
        } }, j = new Map();
        var M = { set(t2, e2, i2) {
          j.has(t2) || j.set(t2, new Map());
          const n2 = j.get(t2);
          n2.has(e2) || n2.size === 0 ? n2.set(e2, i2) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n2.keys())[0]}.`);
        }, get: (t2, e2) => j.has(t2) && j.get(t2).get(e2) || null, remove(t2, e2) {
          if (!j.has(t2))
            return;
          const i2 = j.get(t2);
          i2.delete(e2), i2.size === 0 && j.delete(t2);
        } };
        class H {
          constructor(t2) {
            (t2 = o(t2)) && (this._element = t2, M.set(this._element, this.constructor.DATA_KEY, this));
          }
          dispose() {
            M.remove(this._element, this.constructor.DATA_KEY), P.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this).forEach((t2) => {
              this[t2] = null;
            });
          }
          _queueCallback(t2, e2, i2 = true) {
            _(t2, e2, i2);
          }
          static getInstance(t2) {
            return M.get(o(t2), this.DATA_KEY);
          }
          static getOrCreateInstance(t2, e2 = {}) {
            return this.getInstance(t2) || new this(t2, typeof e2 == "object" ? e2 : null);
          }
          static get VERSION() {
            return "5.1.0";
          }
          static get NAME() {
            throw new Error('You have to implement the static method "NAME", for each component!');
          }
          static get DATA_KEY() {
            return "bs." + this.NAME;
          }
          static get EVENT_KEY() {
            return "." + this.DATA_KEY;
          }
        }
        const B = (t2, e2 = "hide") => {
          const n2 = "click.dismiss" + t2.EVENT_KEY, s2 = t2.NAME;
          P.on(document, n2, `[data-bs-dismiss="${s2}"]`, function(n3) {
            if (["A", "AREA"].includes(this.tagName) && n3.preventDefault(), l(this))
              return;
            const o2 = i(this) || this.closest("." + s2);
            t2.getOrCreateInstance(o2)[e2]();
          });
        };
        class R extends H {
          static get NAME() {
            return "alert";
          }
          close() {
            if (P.trigger(this._element, "close.bs.alert").defaultPrevented)
              return;
            this._element.classList.remove("show");
            const t2 = this._element.classList.contains("fade");
            this._queueCallback(() => this._destroyElement(), this._element, t2);
          }
          _destroyElement() {
            this._element.remove(), P.trigger(this._element, "closed.bs.alert"), this.dispose();
          }
          static jQueryInterface(t2) {
            return this.each(function() {
              const e2 = R.getOrCreateInstance(this);
              if (typeof t2 == "string") {
                if (e2[t2] === void 0 || t2.startsWith("_") || t2 === "constructor")
                  throw new TypeError(`No method named "${t2}"`);
                e2[t2](this);
              }
            });
          }
        }
        B(R, "close"), m(R);
        class W extends H {
          static get NAME() {
            return "button";
          }
          toggle() {
            this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
          }
          static jQueryInterface(t2) {
            return this.each(function() {
              const e2 = W.getOrCreateInstance(this);
              t2 === "toggle" && e2[t2]();
            });
          }
        }
        function z(t2) {
          return t2 === "true" || t2 !== "false" && (t2 === Number(t2).toString() ? Number(t2) : t2 === "" || t2 === "null" ? null : t2);
        }
        function q(t2) {
          return t2.replace(/[A-Z]/g, (t3) => "-" + t3.toLowerCase());
        }
        P.on(document, "click.bs.button.data-api", '[data-bs-toggle="button"]', (t2) => {
          t2.preventDefault();
          const e2 = t2.target.closest('[data-bs-toggle="button"]');
          W.getOrCreateInstance(e2).toggle();
        }), m(W);
        const F = { setDataAttribute(t2, e2, i2) {
          t2.setAttribute("data-bs-" + q(e2), i2);
        }, removeDataAttribute(t2, e2) {
          t2.removeAttribute("data-bs-" + q(e2));
        }, getDataAttributes(t2) {
          if (!t2)
            return {};
          const e2 = {};
          return Object.keys(t2.dataset).filter((t3) => t3.startsWith("bs")).forEach((i2) => {
            let n2 = i2.replace(/^bs/, "");
            n2 = n2.charAt(0).toLowerCase() + n2.slice(1, n2.length), e2[n2] = z(t2.dataset[i2]);
          }), e2;
        }, getDataAttribute: (t2, e2) => z(t2.getAttribute("data-bs-" + q(e2))), offset(t2) {
          const e2 = t2.getBoundingClientRect();
          return { top: e2.top + window.pageYOffset, left: e2.left + window.pageXOffset };
        }, position: (t2) => ({ top: t2.offsetTop, left: t2.offsetLeft }) }, U = { find: (t2, e2 = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(e2, t2)), findOne: (t2, e2 = document.documentElement) => Element.prototype.querySelector.call(e2, t2), children: (t2, e2) => [].concat(...t2.children).filter((t3) => t3.matches(e2)), parents(t2, e2) {
          const i2 = [];
          let n2 = t2.parentNode;
          for (; n2 && n2.nodeType === Node.ELEMENT_NODE && n2.nodeType !== 3; )
            n2.matches(e2) && i2.push(n2), n2 = n2.parentNode;
          return i2;
        }, prev(t2, e2) {
          let i2 = t2.previousElementSibling;
          for (; i2; ) {
            if (i2.matches(e2))
              return [i2];
            i2 = i2.previousElementSibling;
          }
          return [];
        }, next(t2, e2) {
          let i2 = t2.nextElementSibling;
          for (; i2; ) {
            if (i2.matches(e2))
              return [i2];
            i2 = i2.nextElementSibling;
          }
          return [];
        }, focusableChildren(t2) {
          const e2 = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((t3) => t3 + ':not([tabindex^="-"])').join(", ");
          return this.find(e2, t2).filter((t3) => !l(t3) && a(t3));
        } }, $ = { interval: 5e3, keyboard: true, slide: false, pause: "hover", wrap: true, touch: true }, V = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean", touch: "boolean" }, K = "next", X = "prev", Y = "left", Q = "right", G = { ArrowLeft: Q, ArrowRight: Y };
        class Z extends H {
          constructor(t2, e2) {
            super(t2), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = false, this._isSliding = false, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e2), this._indicatorsElement = U.findOne(".carousel-indicators", this._element), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent), this._addEventListeners();
          }
          static get Default() {
            return $;
          }
          static get NAME() {
            return "carousel";
          }
          next() {
            this._slide(K);
          }
          nextWhenVisible() {
            !document.hidden && a(this._element) && this.next();
          }
          prev() {
            this._slide(X);
          }
          pause(t2) {
            t2 || (this._isPaused = true), U.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (n(this._element), this.cycle(true)), clearInterval(this._interval), this._interval = null;
          }
          cycle(t2) {
            t2 || (this._isPaused = false), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
          }
          to(t2) {
            this._activeElement = U.findOne(".active.carousel-item", this._element);
            const e2 = this._getItemIndex(this._activeElement);
            if (t2 > this._items.length - 1 || t2 < 0)
              return;
            if (this._isSliding)
              return void P.one(this._element, "slid.bs.carousel", () => this.to(t2));
            if (e2 === t2)
              return this.pause(), void this.cycle();
            const i2 = t2 > e2 ? K : X;
            this._slide(i2, this._items[t2]);
          }
          _getConfig(t2) {
            return t2 = { ...$, ...F.getDataAttributes(this._element), ...typeof t2 == "object" ? t2 : {} }, r("carousel", t2, V), t2;
          }
          _handleSwipe() {
            const t2 = Math.abs(this.touchDeltaX);
            if (t2 <= 40)
              return;
            const e2 = t2 / this.touchDeltaX;
            this.touchDeltaX = 0, e2 && this._slide(e2 > 0 ? Q : Y);
          }
          _addEventListeners() {
            this._config.keyboard && P.on(this._element, "keydown.bs.carousel", (t2) => this._keydown(t2)), this._config.pause === "hover" && (P.on(this._element, "mouseenter.bs.carousel", (t2) => this.pause(t2)), P.on(this._element, "mouseleave.bs.carousel", (t2) => this.cycle(t2))), this._config.touch && this._touchSupported && this._addTouchEventListeners();
          }
          _addTouchEventListeners() {
            const t2 = (t3) => {
              !this._pointerEvent || t3.pointerType !== "pen" && t3.pointerType !== "touch" ? this._pointerEvent || (this.touchStartX = t3.touches[0].clientX) : this.touchStartX = t3.clientX;
            }, e2 = (t3) => {
              this.touchDeltaX = t3.touches && t3.touches.length > 1 ? 0 : t3.touches[0].clientX - this.touchStartX;
            }, i2 = (t3) => {
              !this._pointerEvent || t3.pointerType !== "pen" && t3.pointerType !== "touch" || (this.touchDeltaX = t3.clientX - this.touchStartX), this._handleSwipe(), this._config.pause === "hover" && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout((t4) => this.cycle(t4), 500 + this._config.interval));
            };
            U.find(".carousel-item img", this._element).forEach((t3) => {
              P.on(t3, "dragstart.bs.carousel", (t4) => t4.preventDefault());
            }), this._pointerEvent ? (P.on(this._element, "pointerdown.bs.carousel", (e3) => t2(e3)), P.on(this._element, "pointerup.bs.carousel", (t3) => i2(t3)), this._element.classList.add("pointer-event")) : (P.on(this._element, "touchstart.bs.carousel", (e3) => t2(e3)), P.on(this._element, "touchmove.bs.carousel", (t3) => e2(t3)), P.on(this._element, "touchend.bs.carousel", (t3) => i2(t3)));
          }
          _keydown(t2) {
            if (/input|textarea/i.test(t2.target.tagName))
              return;
            const e2 = G[t2.key];
            e2 && (t2.preventDefault(), this._slide(e2));
          }
          _getItemIndex(t2) {
            return this._items = t2 && t2.parentNode ? U.find(".carousel-item", t2.parentNode) : [], this._items.indexOf(t2);
          }
          _getItemByOrder(t2, e2) {
            const i2 = t2 === K;
            return b(this._items, e2, i2, this._config.wrap);
          }
          _triggerSlideEvent(t2, e2) {
            const i2 = this._getItemIndex(t2), n2 = this._getItemIndex(U.findOne(".active.carousel-item", this._element));
            return P.trigger(this._element, "slide.bs.carousel", { relatedTarget: t2, direction: e2, from: n2, to: i2 });
          }
          _setActiveIndicatorElement(t2) {
            if (this._indicatorsElement) {
              const e2 = U.findOne(".active", this._indicatorsElement);
              e2.classList.remove("active"), e2.removeAttribute("aria-current");
              const i2 = U.find("[data-bs-target]", this._indicatorsElement);
              for (let e3 = 0; e3 < i2.length; e3++)
                if (Number.parseInt(i2[e3].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(t2)) {
                  i2[e3].classList.add("active"), i2[e3].setAttribute("aria-current", "true");
                  break;
                }
            }
          }
          _updateInterval() {
            const t2 = this._activeElement || U.findOne(".active.carousel-item", this._element);
            if (!t2)
              return;
            const e2 = Number.parseInt(t2.getAttribute("data-bs-interval"), 10);
            e2 ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = e2) : this._config.interval = this._config.defaultInterval || this._config.interval;
          }
          _slide(t2, e2) {
            const i2 = this._directionToOrder(t2), n2 = U.findOne(".active.carousel-item", this._element), s2 = this._getItemIndex(n2), o2 = e2 || this._getItemByOrder(i2, n2), r2 = this._getItemIndex(o2), a2 = Boolean(this._interval), l2 = i2 === K, c2 = l2 ? "carousel-item-start" : "carousel-item-end", h2 = l2 ? "carousel-item-next" : "carousel-item-prev", u2 = this._orderToDirection(i2);
            if (o2 && o2.classList.contains("active"))
              return void (this._isSliding = false);
            if (this._isSliding)
              return;
            if (this._triggerSlideEvent(o2, u2).defaultPrevented)
              return;
            if (!n2 || !o2)
              return;
            this._isSliding = true, a2 && this.pause(), this._setActiveIndicatorElement(o2), this._activeElement = o2;
            const f2 = () => {
              P.trigger(this._element, "slid.bs.carousel", { relatedTarget: o2, direction: u2, from: s2, to: r2 });
            };
            if (this._element.classList.contains("slide")) {
              o2.classList.add(h2), d(o2), n2.classList.add(c2), o2.classList.add(c2);
              const t3 = () => {
                o2.classList.remove(c2, h2), o2.classList.add("active"), n2.classList.remove("active", h2, c2), this._isSliding = false, setTimeout(f2, 0);
              };
              this._queueCallback(t3, n2, true);
            } else
              n2.classList.remove("active"), o2.classList.add("active"), this._isSliding = false, f2();
            a2 && this.cycle();
          }
          _directionToOrder(t2) {
            return [Q, Y].includes(t2) ? p() ? t2 === Y ? X : K : t2 === Y ? K : X : t2;
          }
          _orderToDirection(t2) {
            return [K, X].includes(t2) ? p() ? t2 === X ? Y : Q : t2 === X ? Q : Y : t2;
          }
          static carouselInterface(t2, e2) {
            const i2 = Z.getOrCreateInstance(t2, e2);
            let { _config: n2 } = i2;
            typeof e2 == "object" && (n2 = { ...n2, ...e2 });
            const s2 = typeof e2 == "string" ? e2 : n2.slide;
            if (typeof e2 == "number")
              i2.to(e2);
            else if (typeof s2 == "string") {
              if (i2[s2] === void 0)
                throw new TypeError(`No method named "${s2}"`);
              i2[s2]();
            } else
              n2.interval && n2.ride && (i2.pause(), i2.cycle());
          }
          static jQueryInterface(t2) {
            return this.each(function() {
              Z.carouselInterface(this, t2);
            });
          }
          static dataApiClickHandler(t2) {
            const e2 = i(this);
            if (!e2 || !e2.classList.contains("carousel"))
              return;
            const n2 = { ...F.getDataAttributes(e2), ...F.getDataAttributes(this) }, s2 = this.getAttribute("data-bs-slide-to");
            s2 && (n2.interval = false), Z.carouselInterface(e2, n2), s2 && Z.getInstance(e2).to(s2), t2.preventDefault();
          }
        }
        P.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", Z.dataApiClickHandler), P.on(window, "load.bs.carousel.data-api", () => {
          const t2 = U.find('[data-bs-ride="carousel"]');
          for (let e2 = 0, i2 = t2.length; e2 < i2; e2++)
            Z.carouselInterface(t2[e2], Z.getInstance(t2[e2]));
        }), m(Z);
        const J = { toggle: true, parent: null }, tt = { toggle: "boolean", parent: "(null|element)" };
        class et extends H {
          constructor(t2, i2) {
            super(t2), this._isTransitioning = false, this._config = this._getConfig(i2), this._triggerArray = [];
            const n2 = U.find('[data-bs-toggle="collapse"]');
            for (let t3 = 0, i3 = n2.length; t3 < i3; t3++) {
              const i4 = n2[t3], s2 = e(i4), o2 = U.find(s2).filter((t4) => t4 === this._element);
              s2 !== null && o2.length && (this._selector = s2, this._triggerArray.push(i4));
            }
            this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
          }
          static get Default() {
            return J;
          }
          static get NAME() {
            return "collapse";
          }
          toggle() {
            this._isShown() ? this.hide() : this.show();
          }
          show() {
            if (this._isTransitioning || this._isShown())
              return;
            let t2, e2 = [];
            if (this._config.parent) {
              const t3 = U.find(".collapse .collapse", this._config.parent);
              e2 = U.find(".show, .collapsing", this._config.parent).filter((e3) => !t3.includes(e3));
            }
            const i2 = U.findOne(this._selector);
            if (e2.length) {
              const n3 = e2.find((t3) => i2 !== t3);
              if (t2 = n3 ? et.getInstance(n3) : null, t2 && t2._isTransitioning)
                return;
            }
            if (P.trigger(this._element, "show.bs.collapse").defaultPrevented)
              return;
            e2.forEach((e3) => {
              i2 !== e3 && et.getOrCreateInstance(e3, { toggle: false }).hide(), t2 || M.set(e3, "bs.collapse", null);
            });
            const n2 = this._getDimension();
            this._element.classList.remove("collapse"), this._element.classList.add("collapsing"), this._element.style[n2] = 0, this._addAriaAndCollapsedClass(this._triggerArray, true), this._isTransitioning = true;
            const s2 = "scroll" + (n2[0].toUpperCase() + n2.slice(1));
            this._queueCallback(() => {
              this._isTransitioning = false, this._element.classList.remove("collapsing"), this._element.classList.add("collapse", "show"), this._element.style[n2] = "", P.trigger(this._element, "shown.bs.collapse");
            }, this._element, true), this._element.style[n2] = this._element[s2] + "px";
          }
          hide() {
            if (this._isTransitioning || !this._isShown())
              return;
            if (P.trigger(this._element, "hide.bs.collapse").defaultPrevented)
              return;
            const t2 = this._getDimension();
            this._element.style[t2] = this._element.getBoundingClientRect()[t2] + "px", d(this._element), this._element.classList.add("collapsing"), this._element.classList.remove("collapse", "show");
            const e2 = this._triggerArray.length;
            for (let t3 = 0; t3 < e2; t3++) {
              const e3 = this._triggerArray[t3], n2 = i(e3);
              n2 && !this._isShown(n2) && this._addAriaAndCollapsedClass([e3], false);
            }
            this._isTransitioning = true, this._element.style[t2] = "", this._queueCallback(() => {
              this._isTransitioning = false, this._element.classList.remove("collapsing"), this._element.classList.add("collapse"), P.trigger(this._element, "hidden.bs.collapse");
            }, this._element, true);
          }
          _isShown(t2 = this._element) {
            return t2.classList.contains("show");
          }
          _getConfig(t2) {
            return (t2 = { ...J, ...F.getDataAttributes(this._element), ...t2 }).toggle = Boolean(t2.toggle), t2.parent = o(t2.parent), r("collapse", t2, tt), t2;
          }
          _getDimension() {
            return this._element.classList.contains("collapse-horizontal") ? "width" : "height";
          }
          _initializeChildren() {
            if (!this._config.parent)
              return;
            const t2 = U.find(".collapse .collapse", this._config.parent);
            U.find('[data-bs-toggle="collapse"]', this._config.parent).filter((e2) => !t2.includes(e2)).forEach((t3) => {
              const e2 = i(t3);
              e2 && this._addAriaAndCollapsedClass([t3], this._isShown(e2));
            });
          }
          _addAriaAndCollapsedClass(t2, e2) {
            t2.length && t2.forEach((t3) => {
              e2 ? t3.classList.remove("collapsed") : t3.classList.add("collapsed"), t3.setAttribute("aria-expanded", e2);
            });
          }
          static jQueryInterface(t2) {
            return this.each(function() {
              const e2 = {};
              typeof t2 == "string" && /show|hide/.test(t2) && (e2.toggle = false);
              const i2 = et.getOrCreateInstance(this, e2);
              if (typeof t2 == "string") {
                if (i2[t2] === void 0)
                  throw new TypeError(`No method named "${t2}"`);
                i2[t2]();
              }
            });
          }
        }
        P.on(document, "click.bs.collapse.data-api", '[data-bs-toggle="collapse"]', function(t2) {
          (t2.target.tagName === "A" || t2.delegateTarget && t2.delegateTarget.tagName === "A") && t2.preventDefault();
          const i2 = e(this);
          U.find(i2).forEach((t3) => {
            et.getOrCreateInstance(t3, { toggle: false }).toggle();
          });
        }), m(et);
        var it = "top", nt = "bottom", st = "right", ot = "left", rt = [it, nt, st, ot], at = rt.reduce(function(t2, e2) {
          return t2.concat([e2 + "-start", e2 + "-end"]);
        }, []), lt = [].concat(rt, ["auto"]).reduce(function(t2, e2) {
          return t2.concat([e2, e2 + "-start", e2 + "-end"]);
        }, []), ct = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];
        function ht(t2) {
          return t2 ? (t2.nodeName || "").toLowerCase() : null;
        }
        function dt(t2) {
          if (t2 == null)
            return window;
          if (t2.toString() !== "[object Window]") {
            var e2 = t2.ownerDocument;
            return e2 && e2.defaultView || window;
          }
          return t2;
        }
        function ut(t2) {
          return t2 instanceof dt(t2).Element || t2 instanceof Element;
        }
        function ft(t2) {
          return t2 instanceof dt(t2).HTMLElement || t2 instanceof HTMLElement;
        }
        function pt(t2) {
          return typeof ShadowRoot != "undefined" && (t2 instanceof dt(t2).ShadowRoot || t2 instanceof ShadowRoot);
        }
        var mt = { name: "applyStyles", enabled: true, phase: "write", fn: function(t2) {
          var e2 = t2.state;
          Object.keys(e2.elements).forEach(function(t3) {
            var i2 = e2.styles[t3] || {}, n2 = e2.attributes[t3] || {}, s2 = e2.elements[t3];
            ft(s2) && ht(s2) && (Object.assign(s2.style, i2), Object.keys(n2).forEach(function(t4) {
              var e3 = n2[t4];
              e3 === false ? s2.removeAttribute(t4) : s2.setAttribute(t4, e3 === true ? "" : e3);
            }));
          });
        }, effect: function(t2) {
          var e2 = t2.state, i2 = { popper: { position: e2.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
          return Object.assign(e2.elements.popper.style, i2.popper), e2.styles = i2, e2.elements.arrow && Object.assign(e2.elements.arrow.style, i2.arrow), function() {
            Object.keys(e2.elements).forEach(function(t3) {
              var n2 = e2.elements[t3], s2 = e2.attributes[t3] || {}, o2 = Object.keys(e2.styles.hasOwnProperty(t3) ? e2.styles[t3] : i2[t3]).reduce(function(t4, e3) {
                return t4[e3] = "", t4;
              }, {});
              ft(n2) && ht(n2) && (Object.assign(n2.style, o2), Object.keys(s2).forEach(function(t4) {
                n2.removeAttribute(t4);
              }));
            });
          };
        }, requires: ["computeStyles"] };
        function gt(t2) {
          return t2.split("-")[0];
        }
        var _t = Math.round;
        function bt(t2, e2) {
          e2 === void 0 && (e2 = false);
          var i2 = t2.getBoundingClientRect(), n2 = 1, s2 = 1;
          return ft(t2) && e2 && (n2 = i2.width / t2.offsetWidth || 1, s2 = i2.height / t2.offsetHeight || 1), { width: _t(i2.width / n2), height: _t(i2.height / s2), top: _t(i2.top / s2), right: _t(i2.right / n2), bottom: _t(i2.bottom / s2), left: _t(i2.left / n2), x: _t(i2.left / n2), y: _t(i2.top / s2) };
        }
        function vt(t2) {
          var e2 = bt(t2), i2 = t2.offsetWidth, n2 = t2.offsetHeight;
          return Math.abs(e2.width - i2) <= 1 && (i2 = e2.width), Math.abs(e2.height - n2) <= 1 && (n2 = e2.height), { x: t2.offsetLeft, y: t2.offsetTop, width: i2, height: n2 };
        }
        function yt(t2, e2) {
          var i2 = e2.getRootNode && e2.getRootNode();
          if (t2.contains(e2))
            return true;
          if (i2 && pt(i2)) {
            var n2 = e2;
            do {
              if (n2 && t2.isSameNode(n2))
                return true;
              n2 = n2.parentNode || n2.host;
            } while (n2);
          }
          return false;
        }
        function wt(t2) {
          return dt(t2).getComputedStyle(t2);
        }
        function Et(t2) {
          return ["table", "td", "th"].indexOf(ht(t2)) >= 0;
        }
        function At(t2) {
          return ((ut(t2) ? t2.ownerDocument : t2.document) || window.document).documentElement;
        }
        function Tt(t2) {
          return ht(t2) === "html" ? t2 : t2.assignedSlot || t2.parentNode || (pt(t2) ? t2.host : null) || At(t2);
        }
        function Ot(t2) {
          return ft(t2) && wt(t2).position !== "fixed" ? t2.offsetParent : null;
        }
        function Ct(t2) {
          for (var e2 = dt(t2), i2 = Ot(t2); i2 && Et(i2) && wt(i2).position === "static"; )
            i2 = Ot(i2);
          return i2 && (ht(i2) === "html" || ht(i2) === "body" && wt(i2).position === "static") ? e2 : i2 || function(t3) {
            var e3 = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1;
            if (navigator.userAgent.indexOf("Trident") !== -1 && ft(t3) && wt(t3).position === "fixed")
              return null;
            for (var i3 = Tt(t3); ft(i3) && ["html", "body"].indexOf(ht(i3)) < 0; ) {
              var n2 = wt(i3);
              if (n2.transform !== "none" || n2.perspective !== "none" || n2.contain === "paint" || ["transform", "perspective"].indexOf(n2.willChange) !== -1 || e3 && n2.willChange === "filter" || e3 && n2.filter && n2.filter !== "none")
                return i3;
              i3 = i3.parentNode;
            }
            return null;
          }(t2) || e2;
        }
        function kt(t2) {
          return ["top", "bottom"].indexOf(t2) >= 0 ? "x" : "y";
        }
        var Lt = Math.max, xt = Math.min, Dt = Math.round;
        function St(t2, e2, i2) {
          return Lt(t2, xt(e2, i2));
        }
        function Nt(t2) {
          return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, t2);
        }
        function It(t2, e2) {
          return e2.reduce(function(e3, i2) {
            return e3[i2] = t2, e3;
          }, {});
        }
        var Pt = { name: "arrow", enabled: true, phase: "main", fn: function(t2) {
          var e2, i2 = t2.state, n2 = t2.name, s2 = t2.options, o2 = i2.elements.arrow, r2 = i2.modifiersData.popperOffsets, a2 = gt(i2.placement), l2 = kt(a2), c2 = [ot, st].indexOf(a2) >= 0 ? "height" : "width";
          if (o2 && r2) {
            var h2 = function(t3, e3) {
              return Nt(typeof (t3 = typeof t3 == "function" ? t3(Object.assign({}, e3.rects, { placement: e3.placement })) : t3) != "number" ? t3 : It(t3, rt));
            }(s2.padding, i2), d2 = vt(o2), u2 = l2 === "y" ? it : ot, f2 = l2 === "y" ? nt : st, p2 = i2.rects.reference[c2] + i2.rects.reference[l2] - r2[l2] - i2.rects.popper[c2], m2 = r2[l2] - i2.rects.reference[l2], g2 = Ct(o2), _2 = g2 ? l2 === "y" ? g2.clientHeight || 0 : g2.clientWidth || 0 : 0, b2 = p2 / 2 - m2 / 2, v2 = h2[u2], y2 = _2 - d2[c2] - h2[f2], w2 = _2 / 2 - d2[c2] / 2 + b2, E2 = St(v2, w2, y2), A2 = l2;
            i2.modifiersData[n2] = ((e2 = {})[A2] = E2, e2.centerOffset = E2 - w2, e2);
          }
        }, effect: function(t2) {
          var e2 = t2.state, i2 = t2.options.element, n2 = i2 === void 0 ? "[data-popper-arrow]" : i2;
          n2 != null && (typeof n2 != "string" || (n2 = e2.elements.popper.querySelector(n2))) && yt(e2.elements.popper, n2) && (e2.elements.arrow = n2);
        }, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] }, jt = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
        function Mt(t2) {
          var e2, i2 = t2.popper, n2 = t2.popperRect, s2 = t2.placement, o2 = t2.offsets, r2 = t2.position, a2 = t2.gpuAcceleration, l2 = t2.adaptive, c2 = t2.roundOffsets, h2 = c2 === true ? function(t3) {
            var e3 = t3.x, i3 = t3.y, n3 = window.devicePixelRatio || 1;
            return { x: Dt(Dt(e3 * n3) / n3) || 0, y: Dt(Dt(i3 * n3) / n3) || 0 };
          }(o2) : typeof c2 == "function" ? c2(o2) : o2, d2 = h2.x, u2 = d2 === void 0 ? 0 : d2, f2 = h2.y, p2 = f2 === void 0 ? 0 : f2, m2 = o2.hasOwnProperty("x"), g2 = o2.hasOwnProperty("y"), _2 = ot, b2 = it, v2 = window;
          if (l2) {
            var y2 = Ct(i2), w2 = "clientHeight", E2 = "clientWidth";
            y2 === dt(i2) && wt(y2 = At(i2)).position !== "static" && (w2 = "scrollHeight", E2 = "scrollWidth"), y2 = y2, s2 === it && (b2 = nt, p2 -= y2[w2] - n2.height, p2 *= a2 ? 1 : -1), s2 === ot && (_2 = st, u2 -= y2[E2] - n2.width, u2 *= a2 ? 1 : -1);
          }
          var A2, T2 = Object.assign({ position: r2 }, l2 && jt);
          return a2 ? Object.assign({}, T2, ((A2 = {})[b2] = g2 ? "0" : "", A2[_2] = m2 ? "0" : "", A2.transform = (v2.devicePixelRatio || 1) < 2 ? "translate(" + u2 + "px, " + p2 + "px)" : "translate3d(" + u2 + "px, " + p2 + "px, 0)", A2)) : Object.assign({}, T2, ((e2 = {})[b2] = g2 ? p2 + "px" : "", e2[_2] = m2 ? u2 + "px" : "", e2.transform = "", e2));
        }
        var Ht = { name: "computeStyles", enabled: true, phase: "beforeWrite", fn: function(t2) {
          var e2 = t2.state, i2 = t2.options, n2 = i2.gpuAcceleration, s2 = n2 === void 0 || n2, o2 = i2.adaptive, r2 = o2 === void 0 || o2, a2 = i2.roundOffsets, l2 = a2 === void 0 || a2, c2 = { placement: gt(e2.placement), popper: e2.elements.popper, popperRect: e2.rects.popper, gpuAcceleration: s2 };
          e2.modifiersData.popperOffsets != null && (e2.styles.popper = Object.assign({}, e2.styles.popper, Mt(Object.assign({}, c2, { offsets: e2.modifiersData.popperOffsets, position: e2.options.strategy, adaptive: r2, roundOffsets: l2 })))), e2.modifiersData.arrow != null && (e2.styles.arrow = Object.assign({}, e2.styles.arrow, Mt(Object.assign({}, c2, { offsets: e2.modifiersData.arrow, position: "absolute", adaptive: false, roundOffsets: l2 })))), e2.attributes.popper = Object.assign({}, e2.attributes.popper, { "data-popper-placement": e2.placement });
        }, data: {} }, Bt = { passive: true }, Rt = { name: "eventListeners", enabled: true, phase: "write", fn: function() {
        }, effect: function(t2) {
          var e2 = t2.state, i2 = t2.instance, n2 = t2.options, s2 = n2.scroll, o2 = s2 === void 0 || s2, r2 = n2.resize, a2 = r2 === void 0 || r2, l2 = dt(e2.elements.popper), c2 = [].concat(e2.scrollParents.reference, e2.scrollParents.popper);
          return o2 && c2.forEach(function(t3) {
            t3.addEventListener("scroll", i2.update, Bt);
          }), a2 && l2.addEventListener("resize", i2.update, Bt), function() {
            o2 && c2.forEach(function(t3) {
              t3.removeEventListener("scroll", i2.update, Bt);
            }), a2 && l2.removeEventListener("resize", i2.update, Bt);
          };
        }, data: {} }, Wt = { left: "right", right: "left", bottom: "top", top: "bottom" };
        function zt(t2) {
          return t2.replace(/left|right|bottom|top/g, function(t3) {
            return Wt[t3];
          });
        }
        var qt = { start: "end", end: "start" };
        function Ft(t2) {
          return t2.replace(/start|end/g, function(t3) {
            return qt[t3];
          });
        }
        function Ut(t2) {
          var e2 = dt(t2);
          return { scrollLeft: e2.pageXOffset, scrollTop: e2.pageYOffset };
        }
        function $t(t2) {
          return bt(At(t2)).left + Ut(t2).scrollLeft;
        }
        function Vt(t2) {
          var e2 = wt(t2), i2 = e2.overflow, n2 = e2.overflowX, s2 = e2.overflowY;
          return /auto|scroll|overlay|hidden/.test(i2 + s2 + n2);
        }
        function Kt(t2, e2) {
          var i2;
          e2 === void 0 && (e2 = []);
          var n2 = function t3(e3) {
            return ["html", "body", "#document"].indexOf(ht(e3)) >= 0 ? e3.ownerDocument.body : ft(e3) && Vt(e3) ? e3 : t3(Tt(e3));
          }(t2), s2 = n2 === ((i2 = t2.ownerDocument) == null ? void 0 : i2.body), o2 = dt(n2), r2 = s2 ? [o2].concat(o2.visualViewport || [], Vt(n2) ? n2 : []) : n2, a2 = e2.concat(r2);
          return s2 ? a2 : a2.concat(Kt(Tt(r2)));
        }
        function Xt(t2) {
          return Object.assign({}, t2, { left: t2.x, top: t2.y, right: t2.x + t2.width, bottom: t2.y + t2.height });
        }
        function Yt(t2, e2) {
          return e2 === "viewport" ? Xt(function(t3) {
            var e3 = dt(t3), i2 = At(t3), n2 = e3.visualViewport, s2 = i2.clientWidth, o2 = i2.clientHeight, r2 = 0, a2 = 0;
            return n2 && (s2 = n2.width, o2 = n2.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (r2 = n2.offsetLeft, a2 = n2.offsetTop)), { width: s2, height: o2, x: r2 + $t(t3), y: a2 };
          }(t2)) : ft(e2) ? function(t3) {
            var e3 = bt(t3);
            return e3.top = e3.top + t3.clientTop, e3.left = e3.left + t3.clientLeft, e3.bottom = e3.top + t3.clientHeight, e3.right = e3.left + t3.clientWidth, e3.width = t3.clientWidth, e3.height = t3.clientHeight, e3.x = e3.left, e3.y = e3.top, e3;
          }(e2) : Xt(function(t3) {
            var e3, i2 = At(t3), n2 = Ut(t3), s2 = (e3 = t3.ownerDocument) == null ? void 0 : e3.body, o2 = Lt(i2.scrollWidth, i2.clientWidth, s2 ? s2.scrollWidth : 0, s2 ? s2.clientWidth : 0), r2 = Lt(i2.scrollHeight, i2.clientHeight, s2 ? s2.scrollHeight : 0, s2 ? s2.clientHeight : 0), a2 = -n2.scrollLeft + $t(t3), l2 = -n2.scrollTop;
            return wt(s2 || i2).direction === "rtl" && (a2 += Lt(i2.clientWidth, s2 ? s2.clientWidth : 0) - o2), { width: o2, height: r2, x: a2, y: l2 };
          }(At(t2)));
        }
        function Qt(t2) {
          return t2.split("-")[1];
        }
        function Gt(t2) {
          var e2, i2 = t2.reference, n2 = t2.element, s2 = t2.placement, o2 = s2 ? gt(s2) : null, r2 = s2 ? Qt(s2) : null, a2 = i2.x + i2.width / 2 - n2.width / 2, l2 = i2.y + i2.height / 2 - n2.height / 2;
          switch (o2) {
            case it:
              e2 = { x: a2, y: i2.y - n2.height };
              break;
            case nt:
              e2 = { x: a2, y: i2.y + i2.height };
              break;
            case st:
              e2 = { x: i2.x + i2.width, y: l2 };
              break;
            case ot:
              e2 = { x: i2.x - n2.width, y: l2 };
              break;
            default:
              e2 = { x: i2.x, y: i2.y };
          }
          var c2 = o2 ? kt(o2) : null;
          if (c2 != null) {
            var h2 = c2 === "y" ? "height" : "width";
            switch (r2) {
              case "start":
                e2[c2] = e2[c2] - (i2[h2] / 2 - n2[h2] / 2);
                break;
              case "end":
                e2[c2] = e2[c2] + (i2[h2] / 2 - n2[h2] / 2);
            }
          }
          return e2;
        }
        function Zt(t2, e2) {
          e2 === void 0 && (e2 = {});
          var i2 = e2, n2 = i2.placement, s2 = n2 === void 0 ? t2.placement : n2, o2 = i2.boundary, r2 = o2 === void 0 ? "clippingParents" : o2, a2 = i2.rootBoundary, l2 = a2 === void 0 ? "viewport" : a2, c2 = i2.elementContext, h2 = c2 === void 0 ? "popper" : c2, d2 = i2.altBoundary, u2 = d2 !== void 0 && d2, f2 = i2.padding, p2 = f2 === void 0 ? 0 : f2, m2 = Nt(typeof p2 != "number" ? p2 : It(p2, rt)), g2 = h2 === "popper" ? "reference" : "popper", _2 = t2.elements.reference, b2 = t2.rects.popper, v2 = t2.elements[u2 ? g2 : h2], y2 = function(t3, e3, i3) {
            var n3 = e3 === "clippingParents" ? function(t4) {
              var e4 = Kt(Tt(t4)), i4 = ["absolute", "fixed"].indexOf(wt(t4).position) >= 0 && ft(t4) ? Ct(t4) : t4;
              return ut(i4) ? e4.filter(function(t5) {
                return ut(t5) && yt(t5, i4) && ht(t5) !== "body";
              }) : [];
            }(t3) : [].concat(e3), s3 = [].concat(n3, [i3]), o3 = s3[0], r3 = s3.reduce(function(e4, i4) {
              var n4 = Yt(t3, i4);
              return e4.top = Lt(n4.top, e4.top), e4.right = xt(n4.right, e4.right), e4.bottom = xt(n4.bottom, e4.bottom), e4.left = Lt(n4.left, e4.left), e4;
            }, Yt(t3, o3));
            return r3.width = r3.right - r3.left, r3.height = r3.bottom - r3.top, r3.x = r3.left, r3.y = r3.top, r3;
          }(ut(v2) ? v2 : v2.contextElement || At(t2.elements.popper), r2, l2), w2 = bt(_2), E2 = Gt({ reference: w2, element: b2, strategy: "absolute", placement: s2 }), A2 = Xt(Object.assign({}, b2, E2)), T2 = h2 === "popper" ? A2 : w2, O2 = { top: y2.top - T2.top + m2.top, bottom: T2.bottom - y2.bottom + m2.bottom, left: y2.left - T2.left + m2.left, right: T2.right - y2.right + m2.right }, C2 = t2.modifiersData.offset;
          if (h2 === "popper" && C2) {
            var k2 = C2[s2];
            Object.keys(O2).forEach(function(t3) {
              var e3 = [st, nt].indexOf(t3) >= 0 ? 1 : -1, i3 = [it, nt].indexOf(t3) >= 0 ? "y" : "x";
              O2[t3] += k2[i3] * e3;
            });
          }
          return O2;
        }
        function Jt(t2, e2) {
          e2 === void 0 && (e2 = {});
          var i2 = e2, n2 = i2.placement, s2 = i2.boundary, o2 = i2.rootBoundary, r2 = i2.padding, a2 = i2.flipVariations, l2 = i2.allowedAutoPlacements, c2 = l2 === void 0 ? lt : l2, h2 = Qt(n2), d2 = h2 ? a2 ? at : at.filter(function(t3) {
            return Qt(t3) === h2;
          }) : rt, u2 = d2.filter(function(t3) {
            return c2.indexOf(t3) >= 0;
          });
          u2.length === 0 && (u2 = d2);
          var f2 = u2.reduce(function(e3, i3) {
            return e3[i3] = Zt(t2, { placement: i3, boundary: s2, rootBoundary: o2, padding: r2 })[gt(i3)], e3;
          }, {});
          return Object.keys(f2).sort(function(t3, e3) {
            return f2[t3] - f2[e3];
          });
        }
        var te = { name: "flip", enabled: true, phase: "main", fn: function(t2) {
          var e2 = t2.state, i2 = t2.options, n2 = t2.name;
          if (!e2.modifiersData[n2]._skip) {
            for (var s2 = i2.mainAxis, o2 = s2 === void 0 || s2, r2 = i2.altAxis, a2 = r2 === void 0 || r2, l2 = i2.fallbackPlacements, c2 = i2.padding, h2 = i2.boundary, d2 = i2.rootBoundary, u2 = i2.altBoundary, f2 = i2.flipVariations, p2 = f2 === void 0 || f2, m2 = i2.allowedAutoPlacements, g2 = e2.options.placement, _2 = gt(g2), b2 = l2 || (_2 !== g2 && p2 ? function(t3) {
              if (gt(t3) === "auto")
                return [];
              var e3 = zt(t3);
              return [Ft(t3), e3, Ft(e3)];
            }(g2) : [zt(g2)]), v2 = [g2].concat(b2).reduce(function(t3, i3) {
              return t3.concat(gt(i3) === "auto" ? Jt(e2, { placement: i3, boundary: h2, rootBoundary: d2, padding: c2, flipVariations: p2, allowedAutoPlacements: m2 }) : i3);
            }, []), y2 = e2.rects.reference, w2 = e2.rects.popper, E2 = new Map(), A2 = true, T2 = v2[0], O2 = 0; O2 < v2.length; O2++) {
              var C2 = v2[O2], k2 = gt(C2), L2 = Qt(C2) === "start", x2 = [it, nt].indexOf(k2) >= 0, D2 = x2 ? "width" : "height", S2 = Zt(e2, { placement: C2, boundary: h2, rootBoundary: d2, altBoundary: u2, padding: c2 }), N2 = x2 ? L2 ? st : ot : L2 ? nt : it;
              y2[D2] > w2[D2] && (N2 = zt(N2));
              var I2 = zt(N2), P2 = [];
              if (o2 && P2.push(S2[k2] <= 0), a2 && P2.push(S2[N2] <= 0, S2[I2] <= 0), P2.every(function(t3) {
                return t3;
              })) {
                T2 = C2, A2 = false;
                break;
              }
              E2.set(C2, P2);
            }
            if (A2)
              for (var j2 = function(t3) {
                var e3 = v2.find(function(e4) {
                  var i3 = E2.get(e4);
                  if (i3)
                    return i3.slice(0, t3).every(function(t4) {
                      return t4;
                    });
                });
                if (e3)
                  return T2 = e3, "break";
              }, M2 = p2 ? 3 : 1; M2 > 0 && j2(M2) !== "break"; M2--)
                ;
            e2.placement !== T2 && (e2.modifiersData[n2]._skip = true, e2.placement = T2, e2.reset = true);
          }
        }, requiresIfExists: ["offset"], data: { _skip: false } };
        function ee(t2, e2, i2) {
          return i2 === void 0 && (i2 = { x: 0, y: 0 }), { top: t2.top - e2.height - i2.y, right: t2.right - e2.width + i2.x, bottom: t2.bottom - e2.height + i2.y, left: t2.left - e2.width - i2.x };
        }
        function ie(t2) {
          return [it, st, nt, ot].some(function(e2) {
            return t2[e2] >= 0;
          });
        }
        var ne = { name: "hide", enabled: true, phase: "main", requiresIfExists: ["preventOverflow"], fn: function(t2) {
          var e2 = t2.state, i2 = t2.name, n2 = e2.rects.reference, s2 = e2.rects.popper, o2 = e2.modifiersData.preventOverflow, r2 = Zt(e2, { elementContext: "reference" }), a2 = Zt(e2, { altBoundary: true }), l2 = ee(r2, n2), c2 = ee(a2, s2, o2), h2 = ie(l2), d2 = ie(c2);
          e2.modifiersData[i2] = { referenceClippingOffsets: l2, popperEscapeOffsets: c2, isReferenceHidden: h2, hasPopperEscaped: d2 }, e2.attributes.popper = Object.assign({}, e2.attributes.popper, { "data-popper-reference-hidden": h2, "data-popper-escaped": d2 });
        } }, se = { name: "offset", enabled: true, phase: "main", requires: ["popperOffsets"], fn: function(t2) {
          var e2 = t2.state, i2 = t2.options, n2 = t2.name, s2 = i2.offset, o2 = s2 === void 0 ? [0, 0] : s2, r2 = lt.reduce(function(t3, i3) {
            return t3[i3] = function(t4, e3, i4) {
              var n3 = gt(t4), s3 = [ot, it].indexOf(n3) >= 0 ? -1 : 1, o3 = typeof i4 == "function" ? i4(Object.assign({}, e3, { placement: t4 })) : i4, r3 = o3[0], a3 = o3[1];
              return r3 = r3 || 0, a3 = (a3 || 0) * s3, [ot, st].indexOf(n3) >= 0 ? { x: a3, y: r3 } : { x: r3, y: a3 };
            }(i3, e2.rects, o2), t3;
          }, {}), a2 = r2[e2.placement], l2 = a2.x, c2 = a2.y;
          e2.modifiersData.popperOffsets != null && (e2.modifiersData.popperOffsets.x += l2, e2.modifiersData.popperOffsets.y += c2), e2.modifiersData[n2] = r2;
        } }, oe = { name: "popperOffsets", enabled: true, phase: "read", fn: function(t2) {
          var e2 = t2.state, i2 = t2.name;
          e2.modifiersData[i2] = Gt({ reference: e2.rects.reference, element: e2.rects.popper, strategy: "absolute", placement: e2.placement });
        }, data: {} }, re = { name: "preventOverflow", enabled: true, phase: "main", fn: function(t2) {
          var e2 = t2.state, i2 = t2.options, n2 = t2.name, s2 = i2.mainAxis, o2 = s2 === void 0 || s2, r2 = i2.altAxis, a2 = r2 !== void 0 && r2, l2 = i2.boundary, c2 = i2.rootBoundary, h2 = i2.altBoundary, d2 = i2.padding, u2 = i2.tether, f2 = u2 === void 0 || u2, p2 = i2.tetherOffset, m2 = p2 === void 0 ? 0 : p2, g2 = Zt(e2, { boundary: l2, rootBoundary: c2, padding: d2, altBoundary: h2 }), _2 = gt(e2.placement), b2 = Qt(e2.placement), v2 = !b2, y2 = kt(_2), w2 = y2 === "x" ? "y" : "x", E2 = e2.modifiersData.popperOffsets, A2 = e2.rects.reference, T2 = e2.rects.popper, O2 = typeof m2 == "function" ? m2(Object.assign({}, e2.rects, { placement: e2.placement })) : m2, C2 = { x: 0, y: 0 };
          if (E2) {
            if (o2 || a2) {
              var k2 = y2 === "y" ? it : ot, L2 = y2 === "y" ? nt : st, x2 = y2 === "y" ? "height" : "width", D2 = E2[y2], S2 = E2[y2] + g2[k2], N2 = E2[y2] - g2[L2], I2 = f2 ? -T2[x2] / 2 : 0, P2 = b2 === "start" ? A2[x2] : T2[x2], j2 = b2 === "start" ? -T2[x2] : -A2[x2], M2 = e2.elements.arrow, H2 = f2 && M2 ? vt(M2) : { width: 0, height: 0 }, B2 = e2.modifiersData["arrow#persistent"] ? e2.modifiersData["arrow#persistent"].padding : { top: 0, right: 0, bottom: 0, left: 0 }, R2 = B2[k2], W2 = B2[L2], z2 = St(0, A2[x2], H2[x2]), q2 = v2 ? A2[x2] / 2 - I2 - z2 - R2 - O2 : P2 - z2 - R2 - O2, F2 = v2 ? -A2[x2] / 2 + I2 + z2 + W2 + O2 : j2 + z2 + W2 + O2, U2 = e2.elements.arrow && Ct(e2.elements.arrow), $2 = U2 ? y2 === "y" ? U2.clientTop || 0 : U2.clientLeft || 0 : 0, V2 = e2.modifiersData.offset ? e2.modifiersData.offset[e2.placement][y2] : 0, K2 = E2[y2] + q2 - V2 - $2, X2 = E2[y2] + F2 - V2;
              if (o2) {
                var Y2 = St(f2 ? xt(S2, K2) : S2, D2, f2 ? Lt(N2, X2) : N2);
                E2[y2] = Y2, C2[y2] = Y2 - D2;
              }
              if (a2) {
                var Q2 = y2 === "x" ? it : ot, G2 = y2 === "x" ? nt : st, Z2 = E2[w2], J2 = Z2 + g2[Q2], tt2 = Z2 - g2[G2], et2 = St(f2 ? xt(J2, K2) : J2, Z2, f2 ? Lt(tt2, X2) : tt2);
                E2[w2] = et2, C2[w2] = et2 - Z2;
              }
            }
            e2.modifiersData[n2] = C2;
          }
        }, requiresIfExists: ["offset"] };
        function ae(t2, e2, i2) {
          i2 === void 0 && (i2 = false);
          var n2, s2, o2 = ft(e2), r2 = ft(e2) && function(t3) {
            var e3 = t3.getBoundingClientRect(), i3 = e3.width / t3.offsetWidth || 1, n3 = e3.height / t3.offsetHeight || 1;
            return i3 !== 1 || n3 !== 1;
          }(e2), a2 = At(e2), l2 = bt(t2, r2), c2 = { scrollLeft: 0, scrollTop: 0 }, h2 = { x: 0, y: 0 };
          return (o2 || !o2 && !i2) && ((ht(e2) !== "body" || Vt(a2)) && (c2 = (n2 = e2) !== dt(n2) && ft(n2) ? { scrollLeft: (s2 = n2).scrollLeft, scrollTop: s2.scrollTop } : Ut(n2)), ft(e2) ? ((h2 = bt(e2, true)).x += e2.clientLeft, h2.y += e2.clientTop) : a2 && (h2.x = $t(a2))), { x: l2.left + c2.scrollLeft - h2.x, y: l2.top + c2.scrollTop - h2.y, width: l2.width, height: l2.height };
        }
        var le = { placement: "bottom", modifiers: [], strategy: "absolute" };
        function ce() {
          for (var t2 = arguments.length, e2 = new Array(t2), i2 = 0; i2 < t2; i2++)
            e2[i2] = arguments[i2];
          return !e2.some(function(t3) {
            return !(t3 && typeof t3.getBoundingClientRect == "function");
          });
        }
        function he(t2) {
          t2 === void 0 && (t2 = {});
          var e2 = t2, i2 = e2.defaultModifiers, n2 = i2 === void 0 ? [] : i2, s2 = e2.defaultOptions, o2 = s2 === void 0 ? le : s2;
          return function(t3, e3, i3) {
            i3 === void 0 && (i3 = o2);
            var s3, r2, a2 = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, le, o2), modifiersData: {}, elements: { reference: t3, popper: e3 }, attributes: {}, styles: {} }, l2 = [], c2 = false, h2 = { state: a2, setOptions: function(i4) {
              d2(), a2.options = Object.assign({}, o2, a2.options, i4), a2.scrollParents = { reference: ut(t3) ? Kt(t3) : t3.contextElement ? Kt(t3.contextElement) : [], popper: Kt(e3) };
              var s4, r3, c3 = function(t4) {
                var e4 = function(t5) {
                  var e5 = new Map(), i5 = new Set(), n3 = [];
                  return t5.forEach(function(t6) {
                    e5.set(t6.name, t6);
                  }), t5.forEach(function(t6) {
                    i5.has(t6.name) || function t7(s5) {
                      i5.add(s5.name), [].concat(s5.requires || [], s5.requiresIfExists || []).forEach(function(n4) {
                        if (!i5.has(n4)) {
                          var s6 = e5.get(n4);
                          s6 && t7(s6);
                        }
                      }), n3.push(s5);
                    }(t6);
                  }), n3;
                }(t4);
                return ct.reduce(function(t5, i5) {
                  return t5.concat(e4.filter(function(t6) {
                    return t6.phase === i5;
                  }));
                }, []);
              }((s4 = [].concat(n2, a2.options.modifiers), r3 = s4.reduce(function(t4, e4) {
                var i5 = t4[e4.name];
                return t4[e4.name] = i5 ? Object.assign({}, i5, e4, { options: Object.assign({}, i5.options, e4.options), data: Object.assign({}, i5.data, e4.data) }) : e4, t4;
              }, {}), Object.keys(r3).map(function(t4) {
                return r3[t4];
              })));
              return a2.orderedModifiers = c3.filter(function(t4) {
                return t4.enabled;
              }), a2.orderedModifiers.forEach(function(t4) {
                var e4 = t4.name, i5 = t4.options, n3 = i5 === void 0 ? {} : i5, s5 = t4.effect;
                if (typeof s5 == "function") {
                  var o3 = s5({ state: a2, name: e4, instance: h2, options: n3 });
                  l2.push(o3 || function() {
                  });
                }
              }), h2.update();
            }, forceUpdate: function() {
              if (!c2) {
                var t4 = a2.elements, e4 = t4.reference, i4 = t4.popper;
                if (ce(e4, i4)) {
                  a2.rects = { reference: ae(e4, Ct(i4), a2.options.strategy === "fixed"), popper: vt(i4) }, a2.reset = false, a2.placement = a2.options.placement, a2.orderedModifiers.forEach(function(t5) {
                    return a2.modifiersData[t5.name] = Object.assign({}, t5.data);
                  });
                  for (var n3 = 0; n3 < a2.orderedModifiers.length; n3++)
                    if (a2.reset !== true) {
                      var s4 = a2.orderedModifiers[n3], o3 = s4.fn, r3 = s4.options, l3 = r3 === void 0 ? {} : r3, d3 = s4.name;
                      typeof o3 == "function" && (a2 = o3({ state: a2, options: l3, name: d3, instance: h2 }) || a2);
                    } else
                      a2.reset = false, n3 = -1;
                }
              }
            }, update: (s3 = function() {
              return new Promise(function(t4) {
                h2.forceUpdate(), t4(a2);
              });
            }, function() {
              return r2 || (r2 = new Promise(function(t4) {
                Promise.resolve().then(function() {
                  r2 = void 0, t4(s3());
                });
              })), r2;
            }), destroy: function() {
              d2(), c2 = true;
            } };
            if (!ce(t3, e3))
              return h2;
            function d2() {
              l2.forEach(function(t4) {
                return t4();
              }), l2 = [];
            }
            return h2.setOptions(i3).then(function(t4) {
              !c2 && i3.onFirstUpdate && i3.onFirstUpdate(t4);
            }), h2;
          };
        }
        var de = he(), ue = he({ defaultModifiers: [Rt, oe, Ht, mt] }), fe = he({ defaultModifiers: [Rt, oe, Ht, mt, se, te, re, Pt, ne] }), pe = Object.freeze({ __proto__: null, popperGenerator: he, detectOverflow: Zt, createPopperBase: de, createPopper: fe, createPopperLite: ue, top: it, bottom: nt, right: st, left: ot, auto: "auto", basePlacements: rt, start: "start", end: "end", clippingParents: "clippingParents", viewport: "viewport", popper: "popper", reference: "reference", variationPlacements: at, placements: lt, beforeRead: "beforeRead", read: "read", afterRead: "afterRead", beforeMain: "beforeMain", main: "main", afterMain: "afterMain", beforeWrite: "beforeWrite", write: "write", afterWrite: "afterWrite", modifierPhases: ct, applyStyles: mt, arrow: Pt, computeStyles: Ht, eventListeners: Rt, flip: te, hide: ne, offset: se, popperOffsets: oe, preventOverflow: re });
        const me = new RegExp("ArrowUp|ArrowDown|Escape"), ge = p() ? "top-end" : "top-start", _e = p() ? "top-start" : "top-end", be = p() ? "bottom-end" : "bottom-start", ve = p() ? "bottom-start" : "bottom-end", ye = p() ? "left-start" : "right-start", we = p() ? "right-start" : "left-start", Ee = { offset: [0, 2], boundary: "clippingParents", reference: "toggle", display: "dynamic", popperConfig: null, autoClose: true }, Ae = { offset: "(array|string|function)", boundary: "(string|element)", reference: "(string|element|object)", display: "string", popperConfig: "(null|object|function)", autoClose: "(boolean|string)" };
        class Te extends H {
          constructor(t2, e2) {
            super(t2), this._popper = null, this._config = this._getConfig(e2), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar();
          }
          static get Default() {
            return Ee;
          }
          static get DefaultType() {
            return Ae;
          }
          static get NAME() {
            return "dropdown";
          }
          toggle() {
            return this._isShown() ? this.hide() : this.show();
          }
          show() {
            if (l(this._element) || this._isShown(this._menu))
              return;
            const t2 = { relatedTarget: this._element };
            if (P.trigger(this._element, "show.bs.dropdown", t2).defaultPrevented)
              return;
            const e2 = Te.getParentFromElement(this._element);
            this._inNavbar ? F.setDataAttribute(this._menu, "popper", "none") : this._createPopper(e2), "ontouchstart" in document.documentElement && !e2.closest(".navbar-nav") && [].concat(...document.body.children).forEach((t3) => P.on(t3, "mouseover", h)), this._element.focus(), this._element.setAttribute("aria-expanded", true), this._menu.classList.add("show"), this._element.classList.add("show"), P.trigger(this._element, "shown.bs.dropdown", t2);
          }
          hide() {
            if (l(this._element) || !this._isShown(this._menu))
              return;
            const t2 = { relatedTarget: this._element };
            this._completeHide(t2);
          }
          dispose() {
            this._popper && this._popper.destroy(), super.dispose();
          }
          update() {
            this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
          }
          _completeHide(t2) {
            P.trigger(this._element, "hide.bs.dropdown", t2).defaultPrevented || ("ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((t3) => P.off(t3, "mouseover", h)), this._popper && this._popper.destroy(), this._menu.classList.remove("show"), this._element.classList.remove("show"), this._element.setAttribute("aria-expanded", "false"), F.removeDataAttribute(this._menu, "popper"), P.trigger(this._element, "hidden.bs.dropdown", t2));
          }
          _getConfig(t2) {
            if (t2 = { ...this.constructor.Default, ...F.getDataAttributes(this._element), ...t2 }, r("dropdown", t2, this.constructor.DefaultType), typeof t2.reference == "object" && !s(t2.reference) && typeof t2.reference.getBoundingClientRect != "function")
              throw new TypeError("dropdown".toUpperCase() + ': Option "reference" provided type "object" without a required "getBoundingClientRect" method.');
            return t2;
          }
          _createPopper(t2) {
            if (pe === void 0)
              throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
            let e2 = this._element;
            this._config.reference === "parent" ? e2 = t2 : s(this._config.reference) ? e2 = o(this._config.reference) : typeof this._config.reference == "object" && (e2 = this._config.reference);
            const i2 = this._getPopperConfig(), n2 = i2.modifiers.find((t3) => t3.name === "applyStyles" && t3.enabled === false);
            this._popper = fe(e2, this._menu, i2), n2 && F.setDataAttribute(this._menu, "popper", "static");
          }
          _isShown(t2 = this._element) {
            return t2.classList.contains("show");
          }
          _getMenuElement() {
            return U.next(this._element, ".dropdown-menu")[0];
          }
          _getPlacement() {
            const t2 = this._element.parentNode;
            if (t2.classList.contains("dropend"))
              return ye;
            if (t2.classList.contains("dropstart"))
              return we;
            const e2 = getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() === "end";
            return t2.classList.contains("dropup") ? e2 ? _e : ge : e2 ? ve : be;
          }
          _detectNavbar() {
            return this._element.closest(".navbar") !== null;
          }
          _getOffset() {
            const { offset: t2 } = this._config;
            return typeof t2 == "string" ? t2.split(",").map((t3) => Number.parseInt(t3, 10)) : typeof t2 == "function" ? (e2) => t2(e2, this._element) : t2;
          }
          _getPopperConfig() {
            const t2 = { placement: this._getPlacement(), modifiers: [{ name: "preventOverflow", options: { boundary: this._config.boundary } }, { name: "offset", options: { offset: this._getOffset() } }] };
            return this._config.display === "static" && (t2.modifiers = [{ name: "applyStyles", enabled: false }]), { ...t2, ...typeof this._config.popperConfig == "function" ? this._config.popperConfig(t2) : this._config.popperConfig };
          }
          _selectMenuItem({ key: t2, target: e2 }) {
            const i2 = U.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(a);
            i2.length && b(i2, e2, t2 === "ArrowDown", !i2.includes(e2)).focus();
          }
          static jQueryInterface(t2) {
            return this.each(function() {
              const e2 = Te.getOrCreateInstance(this, t2);
              if (typeof t2 == "string") {
                if (e2[t2] === void 0)
                  throw new TypeError(`No method named "${t2}"`);
                e2[t2]();
              }
            });
          }
          static clearMenus(t2) {
            if (t2 && (t2.button === 2 || t2.type === "keyup" && t2.key !== "Tab"))
              return;
            const e2 = U.find('[data-bs-toggle="dropdown"]');
            for (let i2 = 0, n2 = e2.length; i2 < n2; i2++) {
              const n3 = Te.getInstance(e2[i2]);
              if (!n3 || n3._config.autoClose === false)
                continue;
              if (!n3._isShown())
                continue;
              const s2 = { relatedTarget: n3._element };
              if (t2) {
                const e3 = t2.composedPath(), i3 = e3.includes(n3._menu);
                if (e3.includes(n3._element) || n3._config.autoClose === "inside" && !i3 || n3._config.autoClose === "outside" && i3)
                  continue;
                if (n3._menu.contains(t2.target) && (t2.type === "keyup" && t2.key === "Tab" || /input|select|option|textarea|form/i.test(t2.target.tagName)))
                  continue;
                t2.type === "click" && (s2.clickEvent = t2);
              }
              n3._completeHide(s2);
            }
          }
          static getParentFromElement(t2) {
            return i(t2) || t2.parentNode;
          }
          static dataApiKeydownHandler(t2) {
            if (/input|textarea/i.test(t2.target.tagName) ? t2.key === "Space" || t2.key !== "Escape" && (t2.key !== "ArrowDown" && t2.key !== "ArrowUp" || t2.target.closest(".dropdown-menu")) : !me.test(t2.key))
              return;
            const e2 = this.classList.contains("show");
            if (!e2 && t2.key === "Escape")
              return;
            if (t2.preventDefault(), t2.stopPropagation(), l(this))
              return;
            const i2 = this.matches('[data-bs-toggle="dropdown"]') ? this : U.prev(this, '[data-bs-toggle="dropdown"]')[0], n2 = Te.getOrCreateInstance(i2);
            if (t2.key !== "Escape")
              return t2.key === "ArrowUp" || t2.key === "ArrowDown" ? (e2 || n2.show(), void n2._selectMenuItem(t2)) : void (e2 && t2.key !== "Space" || Te.clearMenus());
            n2.hide();
          }
        }
        P.on(document, "keydown.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', Te.dataApiKeydownHandler), P.on(document, "keydown.bs.dropdown.data-api", ".dropdown-menu", Te.dataApiKeydownHandler), P.on(document, "click.bs.dropdown.data-api", Te.clearMenus), P.on(document, "keyup.bs.dropdown.data-api", Te.clearMenus), P.on(document, "click.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', function(t2) {
          t2.preventDefault(), Te.getOrCreateInstance(this).toggle();
        }), m(Te);
        class Oe {
          constructor() {
            this._element = document.body;
          }
          getWidth() {
            const t2 = document.documentElement.clientWidth;
            return Math.abs(window.innerWidth - t2);
          }
          hide() {
            const t2 = this.getWidth();
            this._disableOverFlow(), this._setElementAttributes(this._element, "paddingRight", (e2) => e2 + t2), this._setElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", "paddingRight", (e2) => e2 + t2), this._setElementAttributes(".sticky-top", "marginRight", (e2) => e2 - t2);
          }
          _disableOverFlow() {
            this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
          }
          _setElementAttributes(t2, e2, i2) {
            const n2 = this.getWidth();
            this._applyManipulationCallback(t2, (t3) => {
              if (t3 !== this._element && window.innerWidth > t3.clientWidth + n2)
                return;
              this._saveInitialAttribute(t3, e2);
              const s2 = window.getComputedStyle(t3)[e2];
              t3.style[e2] = i2(Number.parseFloat(s2)) + "px";
            });
          }
          reset() {
            this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, "paddingRight"), this._resetElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", "paddingRight"), this._resetElementAttributes(".sticky-top", "marginRight");
          }
          _saveInitialAttribute(t2, e2) {
            const i2 = t2.style[e2];
            i2 && F.setDataAttribute(t2, e2, i2);
          }
          _resetElementAttributes(t2, e2) {
            this._applyManipulationCallback(t2, (t3) => {
              const i2 = F.getDataAttribute(t3, e2);
              i2 === void 0 ? t3.style.removeProperty(e2) : (F.removeDataAttribute(t3, e2), t3.style[e2] = i2);
            });
          }
          _applyManipulationCallback(t2, e2) {
            s(t2) ? e2(t2) : U.find(t2, this._element).forEach(e2);
          }
          isOverflowing() {
            return this.getWidth() > 0;
          }
        }
        const Ce = { className: "modal-backdrop", isVisible: true, isAnimated: false, rootElement: "body", clickCallback: null }, ke = { className: "string", isVisible: "boolean", isAnimated: "boolean", rootElement: "(element|string)", clickCallback: "(function|null)" };
        class Le {
          constructor(t2) {
            this._config = this._getConfig(t2), this._isAppended = false, this._element = null;
          }
          show(t2) {
            this._config.isVisible ? (this._append(), this._config.isAnimated && d(this._getElement()), this._getElement().classList.add("show"), this._emulateAnimation(() => {
              g(t2);
            })) : g(t2);
          }
          hide(t2) {
            this._config.isVisible ? (this._getElement().classList.remove("show"), this._emulateAnimation(() => {
              this.dispose(), g(t2);
            })) : g(t2);
          }
          _getElement() {
            if (!this._element) {
              const t2 = document.createElement("div");
              t2.className = this._config.className, this._config.isAnimated && t2.classList.add("fade"), this._element = t2;
            }
            return this._element;
          }
          _getConfig(t2) {
            return (t2 = { ...Ce, ...typeof t2 == "object" ? t2 : {} }).rootElement = o(t2.rootElement), r("backdrop", t2, ke), t2;
          }
          _append() {
            this._isAppended || (this._config.rootElement.append(this._getElement()), P.on(this._getElement(), "mousedown.bs.backdrop", () => {
              g(this._config.clickCallback);
            }), this._isAppended = true);
          }
          dispose() {
            this._isAppended && (P.off(this._element, "mousedown.bs.backdrop"), this._element.remove(), this._isAppended = false);
          }
          _emulateAnimation(t2) {
            _(t2, this._getElement(), this._config.isAnimated);
          }
        }
        const xe = { trapElement: null, autofocus: true }, De = { trapElement: "element", autofocus: "boolean" };
        class Se {
          constructor(t2) {
            this._config = this._getConfig(t2), this._isActive = false, this._lastTabNavDirection = null;
          }
          activate() {
            const { trapElement: t2, autofocus: e2 } = this._config;
            this._isActive || (e2 && t2.focus(), P.off(document, ".bs.focustrap"), P.on(document, "focusin.bs.focustrap", (t3) => this._handleFocusin(t3)), P.on(document, "keydown.tab.bs.focustrap", (t3) => this._handleKeydown(t3)), this._isActive = true);
          }
          deactivate() {
            this._isActive && (this._isActive = false, P.off(document, ".bs.focustrap"));
          }
          _handleFocusin(t2) {
            const { target: e2 } = t2, { trapElement: i2 } = this._config;
            if (e2 === document || e2 === i2 || i2.contains(e2))
              return;
            const n2 = U.focusableChildren(i2);
            n2.length === 0 ? i2.focus() : this._lastTabNavDirection === "backward" ? n2[n2.length - 1].focus() : n2[0].focus();
          }
          _handleKeydown(t2) {
            t2.key === "Tab" && (this._lastTabNavDirection = t2.shiftKey ? "backward" : "forward");
          }
          _getConfig(t2) {
            return t2 = { ...xe, ...typeof t2 == "object" ? t2 : {} }, r("focustrap", t2, De), t2;
          }
        }
        const Ne = { backdrop: true, keyboard: true, focus: true }, Ie = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean" };
        class Pe extends H {
          constructor(t2, e2) {
            super(t2), this._config = this._getConfig(e2), this._dialog = U.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = false, this._ignoreBackdropClick = false, this._isTransitioning = false, this._scrollBar = new Oe();
          }
          static get Default() {
            return Ne;
          }
          static get NAME() {
            return "modal";
          }
          toggle(t2) {
            return this._isShown ? this.hide() : this.show(t2);
          }
          show(t2) {
            this._isShown || this._isTransitioning || P.trigger(this._element, "show.bs.modal", { relatedTarget: t2 }).defaultPrevented || (this._isShown = true, this._isAnimated() && (this._isTransitioning = true), this._scrollBar.hide(), document.body.classList.add("modal-open"), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), P.on(this._dialog, "mousedown.dismiss.bs.modal", () => {
              P.one(this._element, "mouseup.dismiss.bs.modal", (t3) => {
                t3.target === this._element && (this._ignoreBackdropClick = true);
              });
            }), this._showBackdrop(() => this._showElement(t2)));
          }
          hide() {
            if (!this._isShown || this._isTransitioning)
              return;
            if (P.trigger(this._element, "hide.bs.modal").defaultPrevented)
              return;
            this._isShown = false;
            const t2 = this._isAnimated();
            t2 && (this._isTransitioning = true), this._setEscapeEvent(), this._setResizeEvent(), this._focustrap.deactivate(), this._element.classList.remove("show"), P.off(this._element, "click.dismiss.bs.modal"), P.off(this._dialog, "mousedown.dismiss.bs.modal"), this._queueCallback(() => this._hideModal(), this._element, t2);
          }
          dispose() {
            [window, this._dialog].forEach((t2) => P.off(t2, ".bs.modal")), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
          }
          handleUpdate() {
            this._adjustDialog();
          }
          _initializeBackDrop() {
            return new Le({ isVisible: Boolean(this._config.backdrop), isAnimated: this._isAnimated() });
          }
          _initializeFocusTrap() {
            return new Se({ trapElement: this._element });
          }
          _getConfig(t2) {
            return t2 = { ...Ne, ...F.getDataAttributes(this._element), ...typeof t2 == "object" ? t2 : {} }, r("modal", t2, Ie), t2;
          }
          _showElement(t2) {
            const e2 = this._isAnimated(), i2 = U.findOne(".modal-body", this._dialog);
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", true), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0, i2 && (i2.scrollTop = 0), e2 && d(this._element), this._element.classList.add("show"), this._queueCallback(() => {
              this._config.focus && this._focustrap.activate(), this._isTransitioning = false, P.trigger(this._element, "shown.bs.modal", { relatedTarget: t2 });
            }, this._dialog, e2);
          }
          _setEscapeEvent() {
            this._isShown ? P.on(this._element, "keydown.dismiss.bs.modal", (t2) => {
              this._config.keyboard && t2.key === "Escape" ? (t2.preventDefault(), this.hide()) : this._config.keyboard || t2.key !== "Escape" || this._triggerBackdropTransition();
            }) : P.off(this._element, "keydown.dismiss.bs.modal");
          }
          _setResizeEvent() {
            this._isShown ? P.on(window, "resize.bs.modal", () => this._adjustDialog()) : P.off(window, "resize.bs.modal");
          }
          _hideModal() {
            this._element.style.display = "none", this._element.setAttribute("aria-hidden", true), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = false, this._backdrop.hide(() => {
              document.body.classList.remove("modal-open"), this._resetAdjustments(), this._scrollBar.reset(), P.trigger(this._element, "hidden.bs.modal");
            });
          }
          _showBackdrop(t2) {
            P.on(this._element, "click.dismiss.bs.modal", (t3) => {
              this._ignoreBackdropClick ? this._ignoreBackdropClick = false : t3.target === t3.currentTarget && (this._config.backdrop === true ? this.hide() : this._config.backdrop === "static" && this._triggerBackdropTransition());
            }), this._backdrop.show(t2);
          }
          _isAnimated() {
            return this._element.classList.contains("fade");
          }
          _triggerBackdropTransition() {
            if (P.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented)
              return;
            const { classList: t2, scrollHeight: e2, style: i2 } = this._element, n2 = e2 > document.documentElement.clientHeight;
            !n2 && i2.overflowY === "hidden" || t2.contains("modal-static") || (n2 || (i2.overflowY = "hidden"), t2.add("modal-static"), this._queueCallback(() => {
              t2.remove("modal-static"), n2 || this._queueCallback(() => {
                i2.overflowY = "";
              }, this._dialog);
            }, this._dialog), this._element.focus());
          }
          _adjustDialog() {
            const t2 = this._element.scrollHeight > document.documentElement.clientHeight, e2 = this._scrollBar.getWidth(), i2 = e2 > 0;
            (!i2 && t2 && !p() || i2 && !t2 && p()) && (this._element.style.paddingLeft = e2 + "px"), (i2 && !t2 && !p() || !i2 && t2 && p()) && (this._element.style.paddingRight = e2 + "px");
          }
          _resetAdjustments() {
            this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
          }
          static jQueryInterface(t2, e2) {
            return this.each(function() {
              const i2 = Pe.getOrCreateInstance(this, t2);
              if (typeof t2 == "string") {
                if (i2[t2] === void 0)
                  throw new TypeError(`No method named "${t2}"`);
                i2[t2](e2);
              }
            });
          }
        }
        P.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', function(t2) {
          const e2 = i(this);
          ["A", "AREA"].includes(this.tagName) && t2.preventDefault(), P.one(e2, "show.bs.modal", (t3) => {
            t3.defaultPrevented || P.one(e2, "hidden.bs.modal", () => {
              a(this) && this.focus();
            });
          }), Pe.getOrCreateInstance(e2).toggle(this);
        }), B(Pe), m(Pe);
        const je = { backdrop: true, keyboard: true, scroll: false }, Me = { backdrop: "boolean", keyboard: "boolean", scroll: "boolean" };
        class He extends H {
          constructor(t2, e2) {
            super(t2), this._config = this._getConfig(e2), this._isShown = false, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners();
          }
          static get NAME() {
            return "offcanvas";
          }
          static get Default() {
            return je;
          }
          toggle(t2) {
            return this._isShown ? this.hide() : this.show(t2);
          }
          show(t2) {
            this._isShown || P.trigger(this._element, "show.bs.offcanvas", { relatedTarget: t2 }).defaultPrevented || (this._isShown = true, this._element.style.visibility = "visible", this._backdrop.show(), this._config.scroll || new Oe().hide(), this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", true), this._element.setAttribute("role", "dialog"), this._element.classList.add("show"), this._queueCallback(() => {
              this._config.scroll || this._focustrap.activate(), P.trigger(this._element, "shown.bs.offcanvas", { relatedTarget: t2 });
            }, this._element, true));
          }
          hide() {
            this._isShown && (P.trigger(this._element, "hide.bs.offcanvas").defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = false, this._element.classList.remove("show"), this._backdrop.hide(), this._queueCallback(() => {
              this._element.setAttribute("aria-hidden", true), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._element.style.visibility = "hidden", this._config.scroll || new Oe().reset(), P.trigger(this._element, "hidden.bs.offcanvas");
            }, this._element, true)));
          }
          dispose() {
            this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
          }
          _getConfig(t2) {
            return t2 = { ...je, ...F.getDataAttributes(this._element), ...typeof t2 == "object" ? t2 : {} }, r("offcanvas", t2, Me), t2;
          }
          _initializeBackDrop() {
            return new Le({ className: "offcanvas-backdrop", isVisible: this._config.backdrop, isAnimated: true, rootElement: this._element.parentNode, clickCallback: () => this.hide() });
          }
          _initializeFocusTrap() {
            return new Se({ trapElement: this._element });
          }
          _addEventListeners() {
            P.on(this._element, "keydown.dismiss.bs.offcanvas", (t2) => {
              this._config.keyboard && t2.key === "Escape" && this.hide();
            });
          }
          static jQueryInterface(t2) {
            return this.each(function() {
              const e2 = He.getOrCreateInstance(this, t2);
              if (typeof t2 == "string") {
                if (e2[t2] === void 0 || t2.startsWith("_") || t2 === "constructor")
                  throw new TypeError(`No method named "${t2}"`);
                e2[t2](this);
              }
            });
          }
        }
        P.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', function(t2) {
          const e2 = i(this);
          if (["A", "AREA"].includes(this.tagName) && t2.preventDefault(), l(this))
            return;
          P.one(e2, "hidden.bs.offcanvas", () => {
            a(this) && this.focus();
          });
          const n2 = U.findOne(".offcanvas.show");
          n2 && n2 !== e2 && He.getInstance(n2).hide(), He.getOrCreateInstance(e2).toggle(this);
        }), P.on(window, "load.bs.offcanvas.data-api", () => U.find(".offcanvas.show").forEach((t2) => He.getOrCreateInstance(t2).show())), B(He), m(He);
        const Be = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]), Re = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i, We = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i, ze = (t2, e2) => {
          const i2 = t2.nodeName.toLowerCase();
          if (e2.includes(i2))
            return !Be.has(i2) || Boolean(Re.test(t2.nodeValue) || We.test(t2.nodeValue));
          const n2 = e2.filter((t3) => t3 instanceof RegExp);
          for (let t3 = 0, e3 = n2.length; t3 < e3; t3++)
            if (n2[t3].test(i2))
              return true;
          return false;
        };
        function qe(t2, e2, i2) {
          if (!t2.length)
            return t2;
          if (i2 && typeof i2 == "function")
            return i2(t2);
          const n2 = new window.DOMParser().parseFromString(t2, "text/html"), s2 = Object.keys(e2), o2 = [].concat(...n2.body.querySelectorAll("*"));
          for (let t3 = 0, i3 = o2.length; t3 < i3; t3++) {
            const i4 = o2[t3], n3 = i4.nodeName.toLowerCase();
            if (!s2.includes(n3)) {
              i4.remove();
              continue;
            }
            const r2 = [].concat(...i4.attributes), a2 = [].concat(e2["*"] || [], e2[n3] || []);
            r2.forEach((t4) => {
              ze(t4, a2) || i4.removeAttribute(t4.nodeName);
            });
          }
          return n2.body.innerHTML;
        }
        const Fe = new Set(["sanitize", "allowList", "sanitizeFn"]), Ue = { animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "(array|string|function)", container: "(string|element|boolean)", fallbackPlacements: "array", boundary: "(string|element)", customClass: "(string|function)", sanitize: "boolean", sanitizeFn: "(null|function)", allowList: "object", popperConfig: "(null|object|function)" }, $e = { AUTO: "auto", TOP: "top", RIGHT: p() ? "left" : "right", BOTTOM: "bottom", LEFT: p() ? "right" : "left" }, Ve = { animation: true, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: false, selector: false, placement: "top", offset: [0, 0], container: false, fallbackPlacements: ["top", "right", "bottom", "left"], boundary: "clippingParents", customClass: "", sanitize: true, sanitizeFn: null, allowList: { "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i], a: ["target", "href", "title", "rel"], area: [], b: [], br: [], col: [], code: [], div: [], em: [], hr: [], h1: [], h2: [], h3: [], h4: [], h5: [], h6: [], i: [], img: ["src", "srcset", "alt", "title", "width", "height"], li: [], ol: [], p: [], pre: [], s: [], small: [], span: [], sub: [], sup: [], strong: [], u: [], ul: [] }, popperConfig: null }, Ke = { HIDE: "hide.bs.tooltip", HIDDEN: "hidden.bs.tooltip", SHOW: "show.bs.tooltip", SHOWN: "shown.bs.tooltip", INSERTED: "inserted.bs.tooltip", CLICK: "click.bs.tooltip", FOCUSIN: "focusin.bs.tooltip", FOCUSOUT: "focusout.bs.tooltip", MOUSEENTER: "mouseenter.bs.tooltip", MOUSELEAVE: "mouseleave.bs.tooltip" };
        class Xe extends H {
          constructor(t2, e2) {
            if (pe === void 0)
              throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
            super(t2), this._isEnabled = true, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this._config = this._getConfig(e2), this.tip = null, this._setListeners();
          }
          static get Default() {
            return Ve;
          }
          static get NAME() {
            return "tooltip";
          }
          static get Event() {
            return Ke;
          }
          static get DefaultType() {
            return Ue;
          }
          enable() {
            this._isEnabled = true;
          }
          disable() {
            this._isEnabled = false;
          }
          toggleEnabled() {
            this._isEnabled = !this._isEnabled;
          }
          toggle(t2) {
            if (this._isEnabled)
              if (t2) {
                const e2 = this._initializeOnDelegatedTarget(t2);
                e2._activeTrigger.click = !e2._activeTrigger.click, e2._isWithActiveTrigger() ? e2._enter(null, e2) : e2._leave(null, e2);
              } else {
                if (this.getTipElement().classList.contains("show"))
                  return void this._leave(null, this);
                this._enter(null, this);
              }
          }
          dispose() {
            clearTimeout(this._timeout), P.off(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this.tip && this.tip.remove(), this._popper && this._popper.destroy(), super.dispose();
          }
          show() {
            if (this._element.style.display === "none")
              throw new Error("Please use show on visible elements");
            if (!this.isWithContent() || !this._isEnabled)
              return;
            const t2 = P.trigger(this._element, this.constructor.Event.SHOW), e2 = c(this._element), i2 = e2 === null ? this._element.ownerDocument.documentElement.contains(this._element) : e2.contains(this._element);
            if (t2.defaultPrevented || !i2)
              return;
            const n2 = this.getTipElement(), s2 = ((t3) => {
              do {
                t3 += Math.floor(1e6 * Math.random());
              } while (document.getElementById(t3));
              return t3;
            })(this.constructor.NAME);
            n2.setAttribute("id", s2), this._element.setAttribute("aria-describedby", s2), this._config.animation && n2.classList.add("fade");
            const o2 = typeof this._config.placement == "function" ? this._config.placement.call(this, n2, this._element) : this._config.placement, r2 = this._getAttachment(o2);
            this._addAttachmentClass(r2);
            const { container: a2 } = this._config;
            M.set(n2, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || (a2.append(n2), P.trigger(this._element, this.constructor.Event.INSERTED)), this._popper ? this._popper.update() : this._popper = fe(this._element, n2, this._getPopperConfig(r2)), n2.classList.add("show");
            const l2 = this._resolvePossibleFunction(this._config.customClass);
            l2 && n2.classList.add(...l2.split(" ")), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((t3) => {
              P.on(t3, "mouseover", h);
            });
            const d2 = this.tip.classList.contains("fade");
            this._queueCallback(() => {
              const t3 = this._hoverState;
              this._hoverState = null, P.trigger(this._element, this.constructor.Event.SHOWN), t3 === "out" && this._leave(null, this);
            }, this.tip, d2);
          }
          hide() {
            if (!this._popper)
              return;
            const t2 = this.getTipElement();
            if (P.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented)
              return;
            t2.classList.remove("show"), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((t3) => P.off(t3, "mouseover", h)), this._activeTrigger.click = false, this._activeTrigger.focus = false, this._activeTrigger.hover = false;
            const e2 = this.tip.classList.contains("fade");
            this._queueCallback(() => {
              this._isWithActiveTrigger() || (this._hoverState !== "show" && t2.remove(), this._cleanTipClass(), this._element.removeAttribute("aria-describedby"), P.trigger(this._element, this.constructor.Event.HIDDEN), this._popper && (this._popper.destroy(), this._popper = null));
            }, this.tip, e2), this._hoverState = "";
          }
          update() {
            this._popper !== null && this._popper.update();
          }
          isWithContent() {
            return Boolean(this.getTitle());
          }
          getTipElement() {
            if (this.tip)
              return this.tip;
            const t2 = document.createElement("div");
            t2.innerHTML = this._config.template;
            const e2 = t2.children[0];
            return this.setContent(e2), e2.classList.remove("fade", "show"), this.tip = e2, this.tip;
          }
          setContent(t2) {
            this._sanitizeAndSetContent(t2, this.getTitle(), ".tooltip-inner");
          }
          _sanitizeAndSetContent(t2, e2, i2) {
            const n2 = U.findOne(i2, t2);
            e2 || !n2 ? this.setElementContent(n2, e2) : n2.remove();
          }
          setElementContent(t2, e2) {
            if (t2 !== null)
              return s(e2) ? (e2 = o(e2), void (this._config.html ? e2.parentNode !== t2 && (t2.innerHTML = "", t2.append(e2)) : t2.textContent = e2.textContent)) : void (this._config.html ? (this._config.sanitize && (e2 = qe(e2, this._config.allowList, this._config.sanitizeFn)), t2.innerHTML = e2) : t2.textContent = e2);
          }
          getTitle() {
            const t2 = this._element.getAttribute("data-bs-original-title") || this._config.title;
            return this._resolvePossibleFunction(t2);
          }
          updateAttachment(t2) {
            return t2 === "right" ? "end" : t2 === "left" ? "start" : t2;
          }
          _initializeOnDelegatedTarget(t2, e2) {
            return e2 || this.constructor.getOrCreateInstance(t2.delegateTarget, this._getDelegateConfig());
          }
          _getOffset() {
            const { offset: t2 } = this._config;
            return typeof t2 == "string" ? t2.split(",").map((t3) => Number.parseInt(t3, 10)) : typeof t2 == "function" ? (e2) => t2(e2, this._element) : t2;
          }
          _resolvePossibleFunction(t2) {
            return typeof t2 == "function" ? t2.call(this._element) : t2;
          }
          _getPopperConfig(t2) {
            const e2 = { placement: t2, modifiers: [{ name: "flip", options: { fallbackPlacements: this._config.fallbackPlacements } }, { name: "offset", options: { offset: this._getOffset() } }, { name: "preventOverflow", options: { boundary: this._config.boundary } }, { name: "arrow", options: { element: `.${this.constructor.NAME}-arrow` } }, { name: "onChange", enabled: true, phase: "afterWrite", fn: (t3) => this._handlePopperPlacementChange(t3) }], onFirstUpdate: (t3) => {
              t3.options.placement !== t3.placement && this._handlePopperPlacementChange(t3);
            } };
            return { ...e2, ...typeof this._config.popperConfig == "function" ? this._config.popperConfig(e2) : this._config.popperConfig };
          }
          _addAttachmentClass(t2) {
            this.getTipElement().classList.add(`${this._getBasicClassPrefix()}-${this.updateAttachment(t2)}`);
          }
          _getAttachment(t2) {
            return $e[t2.toUpperCase()];
          }
          _setListeners() {
            this._config.trigger.split(" ").forEach((t2) => {
              if (t2 === "click")
                P.on(this._element, this.constructor.Event.CLICK, this._config.selector, (t3) => this.toggle(t3));
              else if (t2 !== "manual") {
                const e2 = t2 === "hover" ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN, i2 = t2 === "hover" ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT;
                P.on(this._element, e2, this._config.selector, (t3) => this._enter(t3)), P.on(this._element, i2, this._config.selector, (t3) => this._leave(t3));
              }
            }), this._hideModalHandler = () => {
              this._element && this.hide();
            }, P.on(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this._config.selector ? this._config = { ...this._config, trigger: "manual", selector: "" } : this._fixTitle();
          }
          _fixTitle() {
            const t2 = this._element.getAttribute("title"), e2 = typeof this._element.getAttribute("data-bs-original-title");
            (t2 || e2 !== "string") && (this._element.setAttribute("data-bs-original-title", t2 || ""), !t2 || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", t2), this._element.setAttribute("title", ""));
          }
          _enter(t2, e2) {
            e2 = this._initializeOnDelegatedTarget(t2, e2), t2 && (e2._activeTrigger[t2.type === "focusin" ? "focus" : "hover"] = true), e2.getTipElement().classList.contains("show") || e2._hoverState === "show" ? e2._hoverState = "show" : (clearTimeout(e2._timeout), e2._hoverState = "show", e2._config.delay && e2._config.delay.show ? e2._timeout = setTimeout(() => {
              e2._hoverState === "show" && e2.show();
            }, e2._config.delay.show) : e2.show());
          }
          _leave(t2, e2) {
            e2 = this._initializeOnDelegatedTarget(t2, e2), t2 && (e2._activeTrigger[t2.type === "focusout" ? "focus" : "hover"] = e2._element.contains(t2.relatedTarget)), e2._isWithActiveTrigger() || (clearTimeout(e2._timeout), e2._hoverState = "out", e2._config.delay && e2._config.delay.hide ? e2._timeout = setTimeout(() => {
              e2._hoverState === "out" && e2.hide();
            }, e2._config.delay.hide) : e2.hide());
          }
          _isWithActiveTrigger() {
            for (const t2 in this._activeTrigger)
              if (this._activeTrigger[t2])
                return true;
            return false;
          }
          _getConfig(t2) {
            const e2 = F.getDataAttributes(this._element);
            return Object.keys(e2).forEach((t3) => {
              Fe.has(t3) && delete e2[t3];
            }), (t2 = { ...this.constructor.Default, ...e2, ...typeof t2 == "object" && t2 ? t2 : {} }).container = t2.container === false ? document.body : o(t2.container), typeof t2.delay == "number" && (t2.delay = { show: t2.delay, hide: t2.delay }), typeof t2.title == "number" && (t2.title = t2.title.toString()), typeof t2.content == "number" && (t2.content = t2.content.toString()), r("tooltip", t2, this.constructor.DefaultType), t2.sanitize && (t2.template = qe(t2.template, t2.allowList, t2.sanitizeFn)), t2;
          }
          _getDelegateConfig() {
            const t2 = {};
            for (const e2 in this._config)
              this.constructor.Default[e2] !== this._config[e2] && (t2[e2] = this._config[e2]);
            return t2;
          }
          _cleanTipClass() {
            const t2 = this.getTipElement(), e2 = new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`, "g"), i2 = t2.getAttribute("class").match(e2);
            i2 !== null && i2.length > 0 && i2.map((t3) => t3.trim()).forEach((e3) => t2.classList.remove(e3));
          }
          _getBasicClassPrefix() {
            return "bs-tooltip";
          }
          _handlePopperPlacementChange(t2) {
            const { state: e2 } = t2;
            e2 && (this.tip = e2.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(e2.placement)));
          }
          static jQueryInterface(t2) {
            return this.each(function() {
              const e2 = Xe.getOrCreateInstance(this, t2);
              if (typeof t2 == "string") {
                if (e2[t2] === void 0)
                  throw new TypeError(`No method named "${t2}"`);
                e2[t2]();
              }
            });
          }
        }
        m(Xe);
        const Ye = { ...Xe.Default, placement: "right", offset: [0, 8], trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }, Qe = { ...Xe.DefaultType, content: "(string|element|function)" }, Ge = { HIDE: "hide.bs.popover", HIDDEN: "hidden.bs.popover", SHOW: "show.bs.popover", SHOWN: "shown.bs.popover", INSERTED: "inserted.bs.popover", CLICK: "click.bs.popover", FOCUSIN: "focusin.bs.popover", FOCUSOUT: "focusout.bs.popover", MOUSEENTER: "mouseenter.bs.popover", MOUSELEAVE: "mouseleave.bs.popover" };
        class Ze extends Xe {
          static get Default() {
            return Ye;
          }
          static get NAME() {
            return "popover";
          }
          static get Event() {
            return Ge;
          }
          static get DefaultType() {
            return Qe;
          }
          isWithContent() {
            return this.getTitle() || this._getContent();
          }
          setContent(t2) {
            this._sanitizeAndSetContent(t2, this.getTitle(), ".popover-header"), this._sanitizeAndSetContent(t2, this._getContent(), ".popover-body");
          }
          _getContent() {
            return this._resolvePossibleFunction(this._config.content);
          }
          _getBasicClassPrefix() {
            return "bs-popover";
          }
          static jQueryInterface(t2) {
            return this.each(function() {
              const e2 = Ze.getOrCreateInstance(this, t2);
              if (typeof t2 == "string") {
                if (e2[t2] === void 0)
                  throw new TypeError(`No method named "${t2}"`);
                e2[t2]();
              }
            });
          }
        }
        m(Ze);
        const Je = { offset: 10, method: "auto", target: "" }, ti = { offset: "number", method: "string", target: "(string|element)" }, ei = ".nav-link, .list-group-item, .dropdown-item";
        class ii extends H {
          constructor(t2, e2) {
            super(t2), this._scrollElement = this._element.tagName === "BODY" ? window : this._element, this._config = this._getConfig(e2), this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, P.on(this._scrollElement, "scroll.bs.scrollspy", () => this._process()), this.refresh(), this._process();
          }
          static get Default() {
            return Je;
          }
          static get NAME() {
            return "scrollspy";
          }
          refresh() {
            const t2 = this._scrollElement === this._scrollElement.window ? "offset" : "position", i2 = this._config.method === "auto" ? t2 : this._config.method, n2 = i2 === "position" ? this._getScrollTop() : 0;
            this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), U.find(ei, this._config.target).map((t3) => {
              const s2 = e(t3), o2 = s2 ? U.findOne(s2) : null;
              if (o2) {
                const t4 = o2.getBoundingClientRect();
                if (t4.width || t4.height)
                  return [F[i2](o2).top + n2, s2];
              }
              return null;
            }).filter((t3) => t3).sort((t3, e2) => t3[0] - e2[0]).forEach((t3) => {
              this._offsets.push(t3[0]), this._targets.push(t3[1]);
            });
          }
          dispose() {
            P.off(this._scrollElement, ".bs.scrollspy"), super.dispose();
          }
          _getConfig(t2) {
            return (t2 = { ...Je, ...F.getDataAttributes(this._element), ...typeof t2 == "object" && t2 ? t2 : {} }).target = o(t2.target) || document.documentElement, r("scrollspy", t2, ti), t2;
          }
          _getScrollTop() {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
          }
          _getScrollHeight() {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
          }
          _getOffsetHeight() {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
          }
          _process() {
            const t2 = this._getScrollTop() + this._config.offset, e2 = this._getScrollHeight(), i2 = this._config.offset + e2 - this._getOffsetHeight();
            if (this._scrollHeight !== e2 && this.refresh(), t2 >= i2) {
              const t3 = this._targets[this._targets.length - 1];
              this._activeTarget !== t3 && this._activate(t3);
            } else {
              if (this._activeTarget && t2 < this._offsets[0] && this._offsets[0] > 0)
                return this._activeTarget = null, void this._clear();
              for (let e3 = this._offsets.length; e3--; )
                this._activeTarget !== this._targets[e3] && t2 >= this._offsets[e3] && (this._offsets[e3 + 1] === void 0 || t2 < this._offsets[e3 + 1]) && this._activate(this._targets[e3]);
            }
          }
          _activate(t2) {
            this._activeTarget = t2, this._clear();
            const e2 = ei.split(",").map((e3) => `${e3}[data-bs-target="${t2}"],${e3}[href="${t2}"]`), i2 = U.findOne(e2.join(","), this._config.target);
            i2.classList.add("active"), i2.classList.contains("dropdown-item") ? U.findOne(".dropdown-toggle", i2.closest(".dropdown")).classList.add("active") : U.parents(i2, ".nav, .list-group").forEach((t3) => {
              U.prev(t3, ".nav-link, .list-group-item").forEach((t4) => t4.classList.add("active")), U.prev(t3, ".nav-item").forEach((t4) => {
                U.children(t4, ".nav-link").forEach((t5) => t5.classList.add("active"));
              });
            }), P.trigger(this._scrollElement, "activate.bs.scrollspy", { relatedTarget: t2 });
          }
          _clear() {
            U.find(ei, this._config.target).filter((t2) => t2.classList.contains("active")).forEach((t2) => t2.classList.remove("active"));
          }
          static jQueryInterface(t2) {
            return this.each(function() {
              const e2 = ii.getOrCreateInstance(this, t2);
              if (typeof t2 == "string") {
                if (e2[t2] === void 0)
                  throw new TypeError(`No method named "${t2}"`);
                e2[t2]();
              }
            });
          }
        }
        P.on(window, "load.bs.scrollspy.data-api", () => {
          U.find('[data-bs-spy="scroll"]').forEach((t2) => new ii(t2));
        }), m(ii);
        class ni extends H {
          static get NAME() {
            return "tab";
          }
          show() {
            if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains("active"))
              return;
            let t2;
            const e2 = i(this._element), n2 = this._element.closest(".nav, .list-group");
            if (n2) {
              const e3 = n2.nodeName === "UL" || n2.nodeName === "OL" ? ":scope > li > .active" : ".active";
              t2 = U.find(e3, n2), t2 = t2[t2.length - 1];
            }
            const s2 = t2 ? P.trigger(t2, "hide.bs.tab", { relatedTarget: this._element }) : null;
            if (P.trigger(this._element, "show.bs.tab", { relatedTarget: t2 }).defaultPrevented || s2 !== null && s2.defaultPrevented)
              return;
            this._activate(this._element, n2);
            const o2 = () => {
              P.trigger(t2, "hidden.bs.tab", { relatedTarget: this._element }), P.trigger(this._element, "shown.bs.tab", { relatedTarget: t2 });
            };
            e2 ? this._activate(e2, e2.parentNode, o2) : o2();
          }
          _activate(t2, e2, i2) {
            const n2 = (!e2 || e2.nodeName !== "UL" && e2.nodeName !== "OL" ? U.children(e2, ".active") : U.find(":scope > li > .active", e2))[0], s2 = i2 && n2 && n2.classList.contains("fade"), o2 = () => this._transitionComplete(t2, n2, i2);
            n2 && s2 ? (n2.classList.remove("show"), this._queueCallback(o2, t2, true)) : o2();
          }
          _transitionComplete(t2, e2, i2) {
            if (e2) {
              e2.classList.remove("active");
              const t3 = U.findOne(":scope > .dropdown-menu .active", e2.parentNode);
              t3 && t3.classList.remove("active"), e2.getAttribute("role") === "tab" && e2.setAttribute("aria-selected", false);
            }
            t2.classList.add("active"), t2.getAttribute("role") === "tab" && t2.setAttribute("aria-selected", true), d(t2), t2.classList.contains("fade") && t2.classList.add("show");
            let n2 = t2.parentNode;
            if (n2 && n2.nodeName === "LI" && (n2 = n2.parentNode), n2 && n2.classList.contains("dropdown-menu")) {
              const e3 = t2.closest(".dropdown");
              e3 && U.find(".dropdown-toggle", e3).forEach((t3) => t3.classList.add("active")), t2.setAttribute("aria-expanded", true);
            }
            i2 && i2();
          }
          static jQueryInterface(t2) {
            return this.each(function() {
              const e2 = ni.getOrCreateInstance(this);
              if (typeof t2 == "string") {
                if (e2[t2] === void 0)
                  throw new TypeError(`No method named "${t2}"`);
                e2[t2]();
              }
            });
          }
        }
        P.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', function(t2) {
          ["A", "AREA"].includes(this.tagName) && t2.preventDefault(), l(this) || ni.getOrCreateInstance(this).show();
        }), m(ni);
        const si = { animation: "boolean", autohide: "boolean", delay: "number" }, oi = { animation: true, autohide: true, delay: 5e3 };
        class ri extends H {
          constructor(t2, e2) {
            super(t2), this._config = this._getConfig(e2), this._timeout = null, this._hasMouseInteraction = false, this._hasKeyboardInteraction = false, this._setListeners();
          }
          static get DefaultType() {
            return si;
          }
          static get Default() {
            return oi;
          }
          static get NAME() {
            return "toast";
          }
          show() {
            P.trigger(this._element, "show.bs.toast").defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove("hide"), d(this._element), this._element.classList.add("show"), this._element.classList.add("showing"), this._queueCallback(() => {
              this._element.classList.remove("showing"), P.trigger(this._element, "shown.bs.toast"), this._maybeScheduleHide();
            }, this._element, this._config.animation));
          }
          hide() {
            this._element.classList.contains("show") && (P.trigger(this._element, "hide.bs.toast").defaultPrevented || (this._element.classList.add("showing"), this._queueCallback(() => {
              this._element.classList.add("hide"), this._element.classList.remove("showing"), this._element.classList.remove("show"), P.trigger(this._element, "hidden.bs.toast");
            }, this._element, this._config.animation)));
          }
          dispose() {
            this._clearTimeout(), this._element.classList.contains("show") && this._element.classList.remove("show"), super.dispose();
          }
          _getConfig(t2) {
            return t2 = { ...oi, ...F.getDataAttributes(this._element), ...typeof t2 == "object" && t2 ? t2 : {} }, r("toast", t2, this.constructor.DefaultType), t2;
          }
          _maybeScheduleHide() {
            this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(() => {
              this.hide();
            }, this._config.delay)));
          }
          _onInteraction(t2, e2) {
            switch (t2.type) {
              case "mouseover":
              case "mouseout":
                this._hasMouseInteraction = e2;
                break;
              case "focusin":
              case "focusout":
                this._hasKeyboardInteraction = e2;
            }
            if (e2)
              return void this._clearTimeout();
            const i2 = t2.relatedTarget;
            this._element === i2 || this._element.contains(i2) || this._maybeScheduleHide();
          }
          _setListeners() {
            P.on(this._element, "mouseover.bs.toast", (t2) => this._onInteraction(t2, true)), P.on(this._element, "mouseout.bs.toast", (t2) => this._onInteraction(t2, false)), P.on(this._element, "focusin.bs.toast", (t2) => this._onInteraction(t2, true)), P.on(this._element, "focusout.bs.toast", (t2) => this._onInteraction(t2, false));
          }
          _clearTimeout() {
            clearTimeout(this._timeout), this._timeout = null;
          }
          static jQueryInterface(t2) {
            return this.each(function() {
              const e2 = ri.getOrCreateInstance(this, t2);
              if (typeof t2 == "string") {
                if (e2[t2] === void 0)
                  throw new TypeError(`No method named "${t2}"`);
                e2[t2](this);
              }
            });
          }
        }
        return B(ri), m(ri), { Alert: R, Button: W, Carousel: Z, Collapse: et, Dropdown: Te, Modal: Pe, Offcanvas: He, Popover: Ze, ScrollSpy: ii, Tab: ni, Toast: ri, Tooltip: Xe };
      });
    }
  });

  // node_modules/svelte/internal/index.mjs
  function noop() {
  }
  function run(fn) {
    return fn();
  }
  function blank_object() {
    return Object.create(null);
  }
  function run_all(fns) {
    fns.forEach(run);
  }
  function is_function(thing) {
    return typeof thing === "function";
  }
  function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || (a && typeof a === "object" || typeof a === "function");
  }
  var src_url_equal_anchor;
  function src_url_equal(element_src, url) {
    if (!src_url_equal_anchor) {
      src_url_equal_anchor = document.createElement("a");
    }
    src_url_equal_anchor.href = url;
    return element_src === src_url_equal_anchor.href;
  }
  function is_empty(obj) {
    return Object.keys(obj).length === 0;
  }
  var tasks = new Set();
  var is_hydrating = false;
  function start_hydrating() {
    is_hydrating = true;
  }
  function end_hydrating() {
    is_hydrating = false;
  }
  function append(target, node) {
    target.appendChild(node);
  }
  function append_styles(target, style_sheet_id, styles) {
    const append_styles_to = get_root_for_style(target);
    if (!append_styles_to.getElementById(style_sheet_id)) {
      const style = element("style");
      style.id = style_sheet_id;
      style.textContent = styles;
      append_stylesheet(append_styles_to, style);
    }
  }
  function get_root_for_style(node) {
    if (!node)
      return document;
    const root = node.getRootNode ? node.getRootNode() : node.ownerDocument;
    if (root.host) {
      return root;
    }
    return document;
  }
  function append_stylesheet(node, style) {
    append(node.head || node, style);
  }
  function insert(target, node, anchor) {
    target.insertBefore(node, anchor || null);
  }
  function detach(node) {
    node.parentNode.removeChild(node);
  }
  function element(name) {
    return document.createElement(name);
  }
  function text(data) {
    return document.createTextNode(data);
  }
  function space() {
    return text(" ");
  }
  function listen(node, event, handler, options) {
    node.addEventListener(event, handler, options);
    return () => node.removeEventListener(event, handler, options);
  }
  function attr(node, attribute, value) {
    if (value == null)
      node.removeAttribute(attribute);
    else if (node.getAttribute(attribute) !== value)
      node.setAttribute(attribute, value);
  }
  function children(element2) {
    return Array.from(element2.childNodes);
  }
  function set_data(text2, data) {
    data = "" + data;
    if (text2.wholeText !== data)
      text2.data = data;
  }
  var active_docs = new Set();
  var current_component;
  function set_current_component(component) {
    current_component = component;
  }
  var dirty_components = [];
  var binding_callbacks = [];
  var render_callbacks = [];
  var flush_callbacks = [];
  var resolved_promise = Promise.resolve();
  var update_scheduled = false;
  function schedule_update() {
    if (!update_scheduled) {
      update_scheduled = true;
      resolved_promise.then(flush);
    }
  }
  function add_render_callback(fn) {
    render_callbacks.push(fn);
  }
  var flushing = false;
  var seen_callbacks = new Set();
  function flush() {
    if (flushing)
      return;
    flushing = true;
    do {
      for (let i = 0; i < dirty_components.length; i += 1) {
        const component = dirty_components[i];
        set_current_component(component);
        update(component.$$);
      }
      set_current_component(null);
      dirty_components.length = 0;
      while (binding_callbacks.length)
        binding_callbacks.pop()();
      for (let i = 0; i < render_callbacks.length; i += 1) {
        const callback = render_callbacks[i];
        if (!seen_callbacks.has(callback)) {
          seen_callbacks.add(callback);
          callback();
        }
      }
      render_callbacks.length = 0;
    } while (dirty_components.length);
    while (flush_callbacks.length) {
      flush_callbacks.pop()();
    }
    update_scheduled = false;
    flushing = false;
    seen_callbacks.clear();
  }
  function update($$) {
    if ($$.fragment !== null) {
      $$.update();
      run_all($$.before_update);
      const dirty = $$.dirty;
      $$.dirty = [-1];
      $$.fragment && $$.fragment.p($$.ctx, dirty);
      $$.after_update.forEach(add_render_callback);
    }
  }
  var outroing = new Set();
  var outros;
  function transition_in(block, local) {
    if (block && block.i) {
      outroing.delete(block);
      block.i(local);
    }
  }
  function transition_out(block, local, detach2, callback) {
    if (block && block.o) {
      if (outroing.has(block))
        return;
      outroing.add(block);
      outros.c.push(() => {
        outroing.delete(block);
        if (callback) {
          if (detach2)
            block.d(1);
          callback();
        }
      });
      block.o(local);
    }
  }
  var globals = typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : global;
  var boolean_attributes = new Set([
    "allowfullscreen",
    "allowpaymentrequest",
    "async",
    "autofocus",
    "autoplay",
    "checked",
    "controls",
    "default",
    "defer",
    "disabled",
    "formnovalidate",
    "hidden",
    "ismap",
    "loop",
    "multiple",
    "muted",
    "nomodule",
    "novalidate",
    "open",
    "playsinline",
    "readonly",
    "required",
    "reversed",
    "selected"
  ]);
  function create_component(block) {
    block && block.c();
  }
  function mount_component(component, target, anchor, customElement) {
    const { fragment, on_mount, on_destroy, after_update } = component.$$;
    fragment && fragment.m(target, anchor);
    if (!customElement) {
      add_render_callback(() => {
        const new_on_destroy = on_mount.map(run).filter(is_function);
        if (on_destroy) {
          on_destroy.push(...new_on_destroy);
        } else {
          run_all(new_on_destroy);
        }
        component.$$.on_mount = [];
      });
    }
    after_update.forEach(add_render_callback);
  }
  function destroy_component(component, detaching) {
    const $$ = component.$$;
    if ($$.fragment !== null) {
      run_all($$.on_destroy);
      $$.fragment && $$.fragment.d(detaching);
      $$.on_destroy = $$.fragment = null;
      $$.ctx = [];
    }
  }
  function make_dirty(component, i) {
    if (component.$$.dirty[0] === -1) {
      dirty_components.push(component);
      schedule_update();
      component.$$.dirty.fill(0);
    }
    component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
  }
  function init(component, options, instance3, create_fragment3, not_equal, props, append_styles2, dirty = [-1]) {
    const parent_component = current_component;
    set_current_component(component);
    const $$ = component.$$ = {
      fragment: null,
      ctx: null,
      props,
      update: noop,
      not_equal,
      bound: blank_object(),
      on_mount: [],
      on_destroy: [],
      on_disconnect: [],
      before_update: [],
      after_update: [],
      context: new Map(parent_component ? parent_component.$$.context : options.context || []),
      callbacks: blank_object(),
      dirty,
      skip_bound: false,
      root: options.target || parent_component.$$.root
    };
    append_styles2 && append_styles2($$.root);
    let ready = false;
    $$.ctx = instance3 ? instance3(component, options.props || {}, (i, ret, ...rest) => {
      const value = rest.length ? rest[0] : ret;
      if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
        if (!$$.skip_bound && $$.bound[i])
          $$.bound[i](value);
        if (ready)
          make_dirty(component, i);
      }
      return ret;
    }) : [];
    $$.update();
    ready = true;
    run_all($$.before_update);
    $$.fragment = create_fragment3 ? create_fragment3($$.ctx) : false;
    if (options.target) {
      if (options.hydrate) {
        start_hydrating();
        const nodes = children(options.target);
        $$.fragment && $$.fragment.l(nodes);
        nodes.forEach(detach);
      } else {
        $$.fragment && $$.fragment.c();
      }
      if (options.intro)
        transition_in(component.$$.fragment);
      mount_component(component, options.target, options.anchor, options.customElement);
      end_hydrating();
      flush();
    }
    set_current_component(parent_component);
  }
  var SvelteElement;
  if (typeof HTMLElement === "function") {
    SvelteElement = class extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({ mode: "open" });
      }
      connectedCallback() {
        const { on_mount } = this.$$;
        this.$$.on_disconnect = on_mount.map(run).filter(is_function);
        for (const key in this.$$.slotted) {
          this.appendChild(this.$$.slotted[key]);
        }
      }
      attributeChangedCallback(attr2, _oldValue, newValue) {
        this[attr2] = newValue;
      }
      disconnectedCallback() {
        run_all(this.$$.on_disconnect);
      }
      $destroy() {
        destroy_component(this, 1);
        this.$destroy = noop;
      }
      $on(type, callback) {
        const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
        callbacks.push(callback);
        return () => {
          const index = callbacks.indexOf(callback);
          if (index !== -1)
            callbacks.splice(index, 1);
        };
      }
      $set($$props) {
        if (this.$$set && !is_empty($$props)) {
          this.$$.skip_bound = true;
          this.$$set($$props);
          this.$$.skip_bound = false;
        }
      }
    };
  }
  var SvelteComponent = class {
    $destroy() {
      destroy_component(this, 1);
      this.$destroy = noop;
    }
    $on(type, callback) {
      const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
      callbacks.push(callback);
      return () => {
        const index = callbacks.indexOf(callback);
        if (index !== -1)
          callbacks.splice(index, 1);
      };
    }
    $set($$props) {
      if (this.$$set && !is_empty($$props)) {
        this.$$.skip_bound = true;
        this.$$set($$props);
        this.$$.skip_bound = false;
      }
    }
  };

  // src/components/HelloWorld.svelte
  function create_fragment(ctx) {
    let h1;
    let t0;
    let t1;
    let button;
    let t2;
    let t3;
    let mounted;
    let dispose;
    return {
      c() {
        h1 = element("h1");
        t0 = text(ctx[0]);
        t1 = space();
        button = element("button");
        t2 = text("Count: ");
        t3 = text(ctx[1]);
        attr(button, "class", "btn btn-primary");
      },
      m(target, anchor) {
        insert(target, h1, anchor);
        append(h1, t0);
        insert(target, t1, anchor);
        insert(target, button, anchor);
        append(button, t2);
        append(button, t3);
        if (!mounted) {
          dispose = listen(button, "click", ctx[2]);
          mounted = true;
        }
      },
      p(ctx2, [dirty]) {
        if (dirty & 1)
          set_data(t0, ctx2[0]);
        if (dirty & 2)
          set_data(t3, ctx2[1]);
      },
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching)
          detach(h1);
        if (detaching)
          detach(t1);
        if (detaching)
          detach(button);
        mounted = false;
        dispose();
      }
    };
  }
  function instance($$self, $$props, $$invalidate) {
    let { msg } = $$props;
    let count = 0;
    let increase = () => {
      $$invalidate(1, count++, count);
    };
    $$self.$$set = ($$props2) => {
      if ("msg" in $$props2)
        $$invalidate(0, msg = $$props2.msg);
    };
    return [msg, count, increase];
  }
  var HelloWorld = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance, create_fragment, safe_not_equal, { msg: 0 });
    }
  };
  var HelloWorld_default = HelloWorld;

  // src/App.svelte
  function add_css(target) {
    append_styles(target, "svelte-pbbg53", ".logo.svelte-pbbg53{max-width:100px}");
  }
  function create_fragment2(ctx) {
    let div2;
    let div1;
    let div0;
    let img;
    let img_src_value;
    let t0;
    let helloworld;
    let t1;
    let p0;
    let t2;
    let t3;
    let t4;
    let p1;
    let t5;
    let t6;
    let t7;
    let button;
    let current;
    let mounted;
    let dispose;
    helloworld = new HelloWorld_default({
      props: {
        msg: "Svelte + Esbuild + Bootstrap 5 + Livereload"
      }
    });
    return {
      c() {
        div2 = element("div");
        div1 = element("div");
        div0 = element("div");
        img = element("img");
        t0 = space();
        create_component(helloworld.$$.fragment);
        t1 = space();
        p0 = element("p");
        t2 = text("Answer is: ");
        t3 = text(ctx[0]);
        t4 = space();
        p1 = element("p");
        t5 = text("Message: ");
        t6 = text(ctx[1]);
        t7 = space();
        button = element("button");
        button.textContent = "Change Message";
        if (!src_url_equal(img.src, img_src_value = "assets/img/svelte-logo.png"))
          attr(img, "src", img_src_value);
        attr(img, "alt", "");
        attr(img, "class", "logo svelte-pbbg53");
        attr(p0, "class", "mt-2");
        attr(p1, "class", "mt-2");
        attr(button, "class", "btn btn-danger");
        attr(div0, "class", "col text-center");
        attr(div1, "class", "row");
        attr(div2, "class", "container mt-5");
      },
      m(target, anchor) {
        insert(target, div2, anchor);
        append(div2, div1);
        append(div1, div0);
        append(div0, img);
        append(div0, t0);
        mount_component(helloworld, div0, null);
        append(div0, t1);
        append(div0, p0);
        append(p0, t2);
        append(p0, t3);
        append(div0, t4);
        append(div0, p1);
        append(p1, t5);
        append(p1, t6);
        append(div0, t7);
        append(div0, button);
        current = true;
        if (!mounted) {
          dispose = listen(button, "click", ctx[2]);
          mounted = true;
        }
      },
      p(ctx2, [dirty]) {
        if (!current || dirty & 1)
          set_data(t3, ctx2[0]);
        if (!current || dirty & 2)
          set_data(t6, ctx2[1]);
      },
      i(local) {
        if (current)
          return;
        transition_in(helloworld.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(helloworld.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(div2);
        destroy_component(helloworld);
        mounted = false;
        dispose();
      }
    };
  }
  function instance2($$self, $$props, $$invalidate) {
    let { answer } = $$props;
    let message = "test message";
    const changeMessage = () => {
      $$invalidate(1, message = "message changed");
    };
    $$self.$$set = ($$props2) => {
      if ("answer" in $$props2)
        $$invalidate(0, answer = $$props2.answer);
    };
    return [answer, message, changeMessage];
  }
  var App = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance2, create_fragment2, safe_not_equal, { answer: 0 }, add_css);
    }
  };
  var App_default = App;

  // src/main.ts
  var import_bootstrap_bundle_min = __toModule(require_bootstrap_bundle_min());
  new App_default({
    target: document.getElementById("app"),
    props: {
      answer: 42
    }
  });
})();
/*!
  * Bootstrap v5.1.0 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
