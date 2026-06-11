(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __pow = Math.pow;
  var __commonJS = (cb2, mod) => function __require() {
    return mod || (0, cb2[__getOwnPropNames(cb2)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // (disabled):worker_threads
  var require_worker_threads = __commonJS({
    "(disabled):worker_threads"() {
    }
  });

  // node_modules/flexsearch/dist/flexsearch.bundle.module.min.js
  var import_meta = {};
  var w;
  function H(a, c, b) {
    const e = typeof b, d = typeof a;
    if (e !== "undefined") {
      if (d !== "undefined") {
        if (b) {
          if (d === "function" && e === d) return function(h) {
            return a(b(h));
          };
          c = a.constructor;
          if (c === b.constructor) {
            if (c === Array) return b.concat(a);
            if (c === Map) {
              var f = new Map(b);
              for (var g of a) f.set(g[0], g[1]);
              return f;
            }
            if (c === Set) {
              g = new Set(b);
              for (f of a.values()) g.add(f);
              return g;
            }
          }
        }
        return a;
      }
      return b;
    }
    return d === "undefined" ? c : a;
  }
  function aa(a, c) {
    return typeof a === "undefined" ? c : a;
  }
  function I() {
    return /* @__PURE__ */ Object.create(null);
  }
  function M(a) {
    return typeof a === "string";
  }
  function ba(a) {
    return typeof a === "object";
  }
  function ca(a, c) {
    if (M(c)) a = a[c];
    else for (let b = 0; a && b < c.length; b++) a = a[c[b]];
    return a;
  }
  var ea = /[^\p{L}\p{N}]+/u;
  var fa = /(\d{3})/g;
  var ha = /(\D)(\d{3})/g;
  var ia = /(\d{3})(\D)/g;
  var ja = /[\u0300-\u036f]/g;
  function ka(a = {}) {
    if (!this || this.constructor !== ka) return new ka(...arguments);
    if (arguments.length) for (a = 0; a < arguments.length; a++) this.assign(arguments[a]);
    else this.assign(a);
  }
  w = ka.prototype;
  w.assign = function(a) {
    this.normalize = H(a.normalize, true, this.normalize);
    let c = a.include, b = c || a.exclude || a.split, e;
    if (b || b === "") {
      if (typeof b === "object" && b.constructor !== RegExp) {
        let d = "";
        e = !c;
        c || (d += "\\p{Z}");
        b.letter && (d += "\\p{L}");
        b.number && (d += "\\p{N}", e = !!c);
        b.symbol && (d += "\\p{S}");
        b.punctuation && (d += "\\p{P}");
        b.control && (d += "\\p{C}");
        if (b = b.char) d += typeof b === "object" ? b.join("") : b;
        try {
          this.split = new RegExp("[" + (c ? "^" : "") + d + "]+", "u");
        } catch (f) {
          this.split = /\s+/;
        }
      } else this.split = b, e = b === false || "a1a".split(b).length < 2;
      this.numeric = H(a.numeric, e);
    } else {
      try {
        this.split = H(this.split, ea);
      } catch (d) {
        this.split = /\s+/;
      }
      this.numeric = H(a.numeric, H(this.numeric, true));
    }
    this.prepare = H(a.prepare, null, this.prepare);
    this.finalize = H(a.finalize, null, this.finalize);
    b = a.filter;
    this.filter = typeof b === "function" ? b : H(b && new Set(b), null, this.filter);
    this.dedupe = H(a.dedupe, true, this.dedupe);
    this.matcher = H((b = a.matcher) && new Map(b), null, this.matcher);
    this.mapper = H((b = a.mapper) && new Map(b), null, this.mapper);
    this.stemmer = H(
      (b = a.stemmer) && new Map(b),
      null,
      this.stemmer
    );
    this.replacer = H(a.replacer, null, this.replacer);
    this.minlength = H(a.minlength, 1, this.minlength);
    this.maxlength = H(a.maxlength, 1024, this.maxlength);
    this.rtl = H(a.rtl, false, this.rtl);
    if (this.cache = b = H(a.cache, true, this.cache)) this.F = null, this.L = typeof b === "number" ? b : 2e5, this.B = /* @__PURE__ */ new Map(), this.D = /* @__PURE__ */ new Map(), this.I = this.H = 128;
    this.h = "";
    this.J = null;
    this.A = "";
    this.K = null;
    if (this.matcher) for (const d of this.matcher.keys()) this.h += (this.h ? "|" : "") + d;
    if (this.stemmer) for (const d of this.stemmer.keys()) this.A += (this.A ? "|" : "") + d;
    return this;
  };
  w.addStemmer = function(a, c) {
    this.stemmer || (this.stemmer = /* @__PURE__ */ new Map());
    this.stemmer.set(a, c);
    this.A += (this.A ? "|" : "") + a;
    this.K = null;
    this.cache && Q(this);
    return this;
  };
  w.addFilter = function(a) {
    typeof a === "function" ? this.filter = a : (this.filter || (this.filter = /* @__PURE__ */ new Set()), this.filter.add(a));
    this.cache && Q(this);
    return this;
  };
  w.addMapper = function(a, c) {
    if (typeof a === "object") return this.addReplacer(a, c);
    if (a.length > 1) return this.addMatcher(a, c);
    this.mapper || (this.mapper = /* @__PURE__ */ new Map());
    this.mapper.set(a, c);
    this.cache && Q(this);
    return this;
  };
  w.addMatcher = function(a, c) {
    if (typeof a === "object") return this.addReplacer(a, c);
    if (a.length < 2 && (this.dedupe || this.mapper)) return this.addMapper(a, c);
    this.matcher || (this.matcher = /* @__PURE__ */ new Map());
    this.matcher.set(a, c);
    this.h += (this.h ? "|" : "") + a;
    this.J = null;
    this.cache && Q(this);
    return this;
  };
  w.addReplacer = function(a, c) {
    if (typeof a === "string") return this.addMatcher(a, c);
    this.replacer || (this.replacer = []);
    this.replacer.push(a, c);
    this.cache && Q(this);
    return this;
  };
  w.encode = function(a, c) {
    if (this.cache && a.length <= this.H) if (this.F) {
      if (this.B.has(a)) return this.B.get(a);
    } else this.F = setTimeout(Q, 50, this);
    this.normalize && (typeof this.normalize === "function" ? a = this.normalize(a) : a = ja ? a.normalize("NFKD").replace(ja, "").toLowerCase() : a.toLowerCase());
    this.prepare && (a = this.prepare(a));
    this.numeric && a.length > 3 && (a = a.replace(ha, "$1 $2").replace(ia, "$1 $2").replace(fa, "$1 "));
    const b = !(this.dedupe || this.mapper || this.filter || this.matcher || this.stemmer || this.replacer);
    let e = [], d = I(), f, g, h = this.split || this.split === "" ? a.split(this.split) : [a];
    for (let l = 0, m, p; l < h.length; l++) if ((m = p = h[l]) && !(m.length < this.minlength || m.length > this.maxlength)) {
      if (c) {
        if (d[m]) continue;
        d[m] = 1;
      } else {
        if (f === m) continue;
        f = m;
      }
      if (b) e.push(m);
      else if (!this.filter || (typeof this.filter === "function" ? this.filter(m) : !this.filter.has(m))) {
        if (this.cache && m.length <= this.I) if (this.F) {
          var k = this.D.get(m);
          if (k || k === "") {
            k && e.push(k);
            continue;
          }
        } else this.F = setTimeout(Q, 50, this);
        if (this.stemmer) {
          this.K || (this.K = new RegExp("(?!^)(" + this.A + ")$"));
          let u;
          for (; u !== m && m.length > 2; ) u = m, m = m.replace(this.K, (r) => this.stemmer.get(r));
        }
        if (m && (this.mapper || this.dedupe && m.length > 1)) {
          k = "";
          for (let u = 0, r = "", t, n; u < m.length; u++) t = m.charAt(u), t === r && this.dedupe || ((n = this.mapper && this.mapper.get(t)) || n === "" ? n === r && this.dedupe || !(r = n) || (k += n) : k += r = t);
          m = k;
        }
        this.matcher && m.length > 1 && (this.J || (this.J = new RegExp("(" + this.h + ")", "g")), m = m.replace(this.J, (u) => this.matcher.get(u)));
        if (m && this.replacer) for (k = 0; m && k < this.replacer.length; k += 2) m = m.replace(
          this.replacer[k],
          this.replacer[k + 1]
        );
        this.cache && p.length <= this.I && (this.D.set(p, m), this.D.size > this.L && (this.D.clear(), this.I = this.I / 1.1 | 0));
        if (m) {
          if (m !== p) if (c) {
            if (d[m]) continue;
            d[m] = 1;
          } else {
            if (g === m) continue;
            g = m;
          }
          e.push(m);
        }
      }
    }
    this.finalize && (e = this.finalize(e) || e);
    this.cache && a.length <= this.H && (this.B.set(a, e), this.B.size > this.L && (this.B.clear(), this.H = this.H / 1.1 | 0));
    return e;
  };
  function Q(a) {
    a.F = null;
    a.B.clear();
    a.D.clear();
  }
  function la(a, c, b) {
    b || (c || typeof a !== "object" ? typeof c === "object" && (b = c, c = 0) : b = a);
    b && (a = b.query || a, c = b.limit || c);
    let e = "" + (c || 0);
    b && (e += (b.offset || 0) + !!b.context + !!b.suggest + (b.resolve !== false) + (b.resolution || this.resolution) + (b.boost || 0));
    a = ("" + a).toLowerCase();
    this.cache || (this.cache = new ma());
    let d = this.cache.get(a + e);
    if (!d) {
      const f = b && b.cache;
      f && (b.cache = false);
      d = this.search(a, c, b);
      f && (b.cache = f);
      this.cache.set(a + e, d);
    }
    return d;
  }
  function ma(a) {
    this.limit = a && a !== true ? a : 1e3;
    this.cache = /* @__PURE__ */ new Map();
    this.h = "";
  }
  ma.prototype.set = function(a, c) {
    this.cache.set(this.h = a, c);
    this.cache.size > this.limit && this.cache.delete(this.cache.keys().next().value);
  };
  ma.prototype.get = function(a) {
    const c = this.cache.get(a);
    c && this.h !== a && (this.cache.delete(a), this.cache.set(this.h = a, c));
    return c;
  };
  ma.prototype.remove = function(a) {
    for (const c of this.cache) {
      const b = c[0];
      c[1].includes(a) && this.cache.delete(b);
    }
  };
  ma.prototype.clear = function() {
    this.cache.clear();
    this.h = "";
  };
  var na = { normalize: false, numeric: false, dedupe: false };
  var oa = {};
  var ra = /* @__PURE__ */ new Map([["b", "p"], ["v", "f"], ["w", "f"], ["z", "s"], ["x", "s"], ["d", "t"], ["n", "m"], ["c", "k"], ["g", "k"], ["j", "k"], ["q", "k"], ["i", "e"], ["y", "e"], ["u", "o"]]);
  var sa = /* @__PURE__ */ new Map([["ae", "a"], ["oe", "o"], ["sh", "s"], ["kh", "k"], ["th", "t"], ["ph", "f"], ["pf", "f"]]);
  var ta = [/([^aeo])h(.)/g, "$1$2", /([aeo])h([^aeo]|$)/g, "$1$2", /(.)\1+/g, "$1"];
  var ua = { a: "", e: "", i: "", o: "", u: "", y: "", b: 1, f: 1, p: 1, v: 1, c: 2, g: 2, j: 2, k: 2, q: 2, s: 2, x: 2, z: 2, "\xDF": 2, d: 3, t: 3, l: 4, m: 5, n: 5, r: 6 };
  var va = { Exact: na, Default: oa, Normalize: oa, LatinBalance: { mapper: ra }, LatinAdvanced: { mapper: ra, matcher: sa, replacer: ta }, LatinExtra: { mapper: ra, replacer: ta.concat([/(?!^)[aeo]/g, ""]), matcher: sa }, LatinSoundex: { dedupe: false, include: { letter: true }, finalize: function(a) {
    for (let b = 0; b < a.length; b++) {
      var c = a[b];
      let e = c.charAt(0), d = ua[e];
      for (let f = 1, g; f < c.length && (g = c.charAt(f), g === "h" || g === "w" || !(g = ua[g]) || g === d || (e += g, d = g, e.length !== 4)); f++) ;
      a[b] = e;
    }
  } }, CJK: { split: "" }, LatinExact: na, LatinDefault: oa, LatinSimple: oa };
  function wa(a, c, b, e) {
    let d = [];
    for (let f = 0, g; f < a.index.length; f++) if (g = a.index[f], c >= g.length) c -= g.length;
    else {
      c = g[e ? "splice" : "slice"](c, b);
      const h = c.length;
      if (h && (d = d.length ? d.concat(c) : c, b -= h, e && (a.length -= h), !b)) break;
      c = 0;
    }
    return d;
  }
  function xa(a) {
    if (!this || this.constructor !== xa) return new xa(a);
    this.index = a ? [a] : [];
    this.length = a ? a.length : 0;
    const c = this;
    return new Proxy([], { get(b, e) {
      if (e === "length") return c.length;
      if (e === "push") return function(d) {
        c.index[c.index.length - 1].push(d);
        c.length++;
      };
      if (e === "pop") return function() {
        if (c.length) return c.length--, c.index[c.index.length - 1].pop();
      };
      if (e === "indexOf") return function(d) {
        let f = 0;
        for (let g = 0, h, k; g < c.index.length; g++) {
          h = c.index[g];
          k = h.indexOf(d);
          if (k >= 0) return f + k;
          f += h.length;
        }
        return -1;
      };
      if (e === "includes") return function(d) {
        for (let f = 0; f < c.index.length; f++) if (c.index[f].includes(d)) return true;
        return false;
      };
      if (e === "slice") return function(d, f) {
        return wa(c, d || 0, f || c.length, false);
      };
      if (e === "splice") return function(d, f) {
        return wa(c, d || 0, f || c.length, true);
      };
      if (e === "constructor") return Array;
      if (typeof e !== "symbol") return (b = c.index[e / __pow(2, 31) | 0]) && b[e];
    }, set(b, e, d) {
      b = e / __pow(2, 31) | 0;
      (c.index[b] || (c.index[b] = []))[e] = d;
      c.length++;
      return true;
    } });
  }
  xa.prototype.clear = function() {
    this.index.length = 0;
  };
  xa.prototype.push = function() {
  };
  function R(a = 8) {
    if (!this || this.constructor !== R) return new R(a);
    this.index = I();
    this.h = [];
    this.size = 0;
    a > 32 ? (this.B = Aa, this.A = BigInt(a)) : (this.B = Ba, this.A = a);
  }
  R.prototype.get = function(a) {
    const c = this.index[this.B(a)];
    return c && c.get(a);
  };
  R.prototype.set = function(a, c) {
    var b = this.B(a);
    let e = this.index[b];
    e ? (b = e.size, e.set(a, c), (b -= e.size) && this.size++) : (this.index[b] = e = /* @__PURE__ */ new Map([[a, c]]), this.h.push(e), this.size++);
  };
  function S(a = 8) {
    if (!this || this.constructor !== S) return new S(a);
    this.index = I();
    this.h = [];
    this.size = 0;
    a > 32 ? (this.B = Aa, this.A = BigInt(a)) : (this.B = Ba, this.A = a);
  }
  S.prototype.add = function(a) {
    var c = this.B(a);
    let b = this.index[c];
    b ? (c = b.size, b.add(a), (c -= b.size) && this.size++) : (this.index[c] = b = /* @__PURE__ */ new Set([a]), this.h.push(b), this.size++);
  };
  w = R.prototype;
  w.has = S.prototype.has = function(a) {
    const c = this.index[this.B(a)];
    return c && c.has(a);
  };
  w.delete = S.prototype.delete = function(a) {
    const c = this.index[this.B(a)];
    c && c.delete(a) && this.size--;
  };
  w.clear = S.prototype.clear = function() {
    this.index = I();
    this.h = [];
    this.size = 0;
  };
  w.values = S.prototype.values = function* () {
    for (let a = 0; a < this.h.length; a++) for (let c of this.h[a].values()) yield c;
  };
  w.keys = S.prototype.keys = function* () {
    for (let a = 0; a < this.h.length; a++) for (let c of this.h[a].keys()) yield c;
  };
  w.entries = S.prototype.entries = function* () {
    for (let a = 0; a < this.h.length; a++) for (let c of this.h[a].entries()) yield c;
  };
  function Ba(a) {
    let c = __pow(2, this.A) - 1;
    if (typeof a == "number") return a & c;
    let b = 0, e = this.A + 1;
    for (let d = 0; d < a.length; d++) b = (b * e ^ a.charCodeAt(d)) & c;
    return this.A === 32 ? b + __pow(2, 31) : b;
  }
  function Aa(a) {
    let c = __pow(BigInt(2), this.A) - BigInt(1);
    var b = typeof a;
    if (b === "bigint") return a & c;
    if (b === "number") return BigInt(a) & c;
    b = BigInt(0);
    let e = this.A + BigInt(1);
    for (let d = 0; d < a.length; d++) b = (b * e ^ BigInt(a.charCodeAt(d))) & c;
    return b;
  }
  var Ca;
  var Da;
  function Ea(a) {
    return __async(this, null, function* () {
      a = a.data;
      var c = a.task;
      const b = a.id;
      let e = a.args;
      switch (c) {
        case "init":
          Da = a.options || {};
          (c = a.factory) ? (Function("return " + c)()(self), Ca = new self.FlexSearch.Index(Da), delete self.FlexSearch) : Ca = new T(Da);
          postMessage({ id: b });
          break;
        default:
          let d;
          c === "export" && (e[1] ? (e[0] = Da.export, e[2] = 0, e[3] = 1) : e = null);
          c === "import" ? e[0] && (a = yield Da.import.call(Ca, e[0]), Ca.import(e[0], a)) : ((d = e && Ca[c].apply(Ca, e)) && d.then && (d = yield d), d && d.await && (d = yield d.await), c === "search" && d.result && (d = d.result));
          postMessage(c === "search" ? { id: b, msg: d } : { id: b });
      }
    });
  }
  function Fa(a) {
    Ga.call(a, "add");
    Ga.call(a, "append");
    Ga.call(a, "search");
    Ga.call(a, "update");
    Ga.call(a, "remove");
    Ga.call(a, "searchCache");
  }
  var Ha;
  var Ia;
  var Ja;
  function Ka() {
    Ha = Ja = 0;
  }
  function Ga(a) {
    this[a + "Async"] = function() {
      const c = arguments;
      var b = c[c.length - 1];
      let e;
      typeof b === "function" && (e = b, delete c[c.length - 1]);
      Ha ? Ja || (Ja = Date.now() - Ia >= this.priority * this.priority * 3) : (Ha = setTimeout(Ka, 0), Ia = Date.now());
      if (Ja) {
        const f = this;
        return new Promise((g) => {
          setTimeout(function() {
            g(f[a + "Async"].apply(f, c));
          }, 0);
        });
      }
      const d = this[a].apply(this, c);
      b = d.then ? d : new Promise((f) => f(d));
      e && b.then(e);
      return b;
    };
  }
  var V = 0;
  function La(a = {}, c) {
    function b(h) {
      function k(l) {
        l = l.data || l;
        const m = l.id, p = m && f.h[m];
        p && (p(l.msg), delete f.h[m]);
      }
      this.worker = h;
      this.h = I();
      if (this.worker) {
        d ? this.worker.on("message", k) : this.worker.onmessage = k;
        if (a.config) return new Promise(function(l) {
          V > 1e9 && (V = 0);
          f.h[++V] = function() {
            l(f);
          };
          f.worker.postMessage({ id: V, task: "init", factory: e, options: a });
        });
        this.priority = a.priority || 4;
        this.encoder = c || null;
        this.worker.postMessage({ task: "init", factory: e, options: a });
        return this;
      }
    }
    if (!this || this.constructor !== La) return new La(a);
    let e = typeof self !== "undefined" ? self._factory : typeof window !== "undefined" ? window._factory : null;
    e && (e = e.toString());
    const d = typeof window === "undefined", f = this, g = Ma(e, d, a.worker);
    return g.then ? g.then(function(h) {
      return b.call(f, h);
    }) : b.call(this, g);
  }
  W("add");
  W("append");
  W("search");
  W("update");
  W("remove");
  W("clear");
  W("export");
  W("import");
  La.prototype.searchCache = la;
  Fa(La.prototype);
  function W(a) {
    La.prototype[a] = function() {
      const c = this, b = [].slice.call(arguments);
      var e = b[b.length - 1];
      let d;
      typeof e === "function" && (d = e, b.pop());
      e = new Promise(function(f) {
        a === "export" && typeof b[0] === "function" && (b[0] = null);
        V > 1e9 && (V = 0);
        c.h[++V] = f;
        c.worker.postMessage({ task: a, id: V, args: b });
      });
      return d ? (e.then(d), this) : e;
    };
  }
  function Ma(a, c, b) {
    return c ? typeof module !== "undefined" ? new (require_worker_threads())["Worker"](__dirname + "/worker/node.js") : Promise.resolve().then(() => __toESM(require_worker_threads())).then(function(worker) {
      return new worker["Worker"](import_meta.dirname + "/node/node.mjs");
    }) : a ? new window.Worker(URL.createObjectURL(new Blob(["onmessage=" + Ea.toString()], { type: "text/javascript" }))) : new window.Worker(typeof b === "string" ? b : import_meta.url.replace("/worker.js", "/worker/worker.js").replace(
      "flexsearch.bundle.module.min.js",
      "module/worker/worker.js"
    ), { type: "module" });
  }
  Na.prototype.add = function(a, c, b) {
    ba(a) && (c = a, a = ca(c, this.key));
    if (c && (a || a === 0)) {
      if (!b && this.reg.has(a)) return this.update(a, c);
      for (let h = 0, k; h < this.field.length; h++) {
        k = this.B[h];
        var e = this.index.get(this.field[h]);
        if (typeof k === "function") {
          var d = k(c);
          d && e.add(a, d, b, true);
        } else if (d = k.G, !d || d(c)) k.constructor === String ? k = ["" + k] : M(k) && (k = [k]), Qa(c, k, this.D, 0, e, a, k[0], b);
      }
      if (this.tag) for (e = 0; e < this.A.length; e++) {
        var f = this.A[e];
        d = this.tag.get(this.F[e]);
        let h = I();
        if (typeof f === "function") {
          if (f = f(c), !f) continue;
        } else {
          var g = f.G;
          if (g && !g(c)) continue;
          f.constructor === String && (f = "" + f);
          f = ca(c, f);
        }
        if (d && f) {
          M(f) && (f = [f]);
          for (let k = 0, l, m; k < f.length; k++) if (l = f[k], !h[l] && (h[l] = 1, (g = d.get(l)) ? m = g : d.set(l, m = []), !b || !m.includes(a))) {
            if (m.length === __pow(2, 31) - 1) {
              g = new xa(m);
              if (this.fastupdate) for (let p of this.reg.values()) p.includes(m) && (p[p.indexOf(m)] = g);
              d.set(l, m = g);
            }
            m.push(a);
            this.fastupdate && ((g = this.reg.get(a)) ? g.push(m) : this.reg.set(a, [m]));
          }
        }
      }
      if (this.store && (!b || !this.store.has(a))) {
        let h;
        if (this.h) {
          h = I();
          for (let k = 0, l; k < this.h.length; k++) {
            l = this.h[k];
            if ((b = l.G) && !b(c)) continue;
            let m;
            if (typeof l === "function") {
              m = l(c);
              if (!m) continue;
              l = [l.O];
            } else if (M(l) || l.constructor === String) {
              h[l] = c[l];
              continue;
            }
            Ra(c, h, l, 0, l[0], m);
          }
        }
        this.store.set(a, h || c);
      }
      this.worker && (this.fastupdate || this.reg.add(a));
    }
    return this;
  };
  function Ra(a, c, b, e, d, f) {
    a = a[d];
    if (e === b.length - 1) c[d] = f || a;
    else if (a) if (a.constructor === Array) for (c = c[d] = Array(a.length), d = 0; d < a.length; d++) Ra(a, c, b, e, d);
    else c = c[d] || (c[d] = I()), d = b[++e], Ra(a, c, b, e, d);
  }
  function Qa(a, c, b, e, d, f, g, h) {
    if (a = a[g]) if (e === c.length - 1) {
      if (a.constructor === Array) {
        if (b[e]) {
          for (c = 0; c < a.length; c++) d.add(f, a[c], true, true);
          return;
        }
        a = a.join(" ");
      }
      d.add(f, a, h, true);
    } else if (a.constructor === Array) for (g = 0; g < a.length; g++) Qa(a, c, b, e, d, f, g, h);
    else g = c[++e], Qa(a, c, b, e, d, f, g, h);
  }
  function Sa(a, c, b, e) {
    if (!a.length) return a;
    if (a.length === 1) return a = a[0], a = b || a.length > c ? a.slice(b, b + c) : a, e ? Ta.call(this, a) : a;
    let d = [];
    for (let f = 0, g, h; f < a.length; f++) if ((g = a[f]) && (h = g.length)) {
      if (b) {
        if (b >= h) {
          b -= h;
          continue;
        }
        g = g.slice(b, b + c);
        h = g.length;
        b = 0;
      }
      h > c && (g = g.slice(0, c), h = c);
      if (!d.length && h >= c) return e ? Ta.call(this, g) : g;
      d.push(g);
      c -= h;
      if (!c) break;
    }
    d = d.length > 1 ? [].concat.apply([], d) : d[0];
    return e ? Ta.call(this, d) : d;
  }
  function Ua(a, c, b, e) {
    var d = e[0];
    if (d[0] && d[0].query) return a[c].apply(a, d);
    if (!(c !== "and" && c !== "not" || a.result.length || a.await || d.suggest)) return e.length > 1 && (d = e[e.length - 1]), (e = d.resolve) ? a.await || a.result : a;
    let f = [], g = 0, h = 0, k, l, m, p, u;
    for (c = 0; c < e.length; c++) if (d = e[c]) {
      var r = void 0;
      if (d.constructor === X) r = d.await || d.result;
      else if (d.then || d.constructor === Array) r = d;
      else {
        g = d.limit || 0;
        h = d.offset || 0;
        m = d.suggest;
        l = d.resolve;
        k = ((p = d.highlight || a.highlight) || d.enrich) && l;
        r = d.queue;
        let t = d.async || r, n = d.index, q = d.query;
        n ? a.index || (a.index = n) : n = a.index;
        if (q || d.tag) {
          const x = d.field || d.pluck;
          x && (!q || a.query && !p || (a.query = q, a.field = x, a.highlight = p), n = n.index.get(x));
          if (r && (u || a.await)) {
            u = 1;
            let v;
            const A = a.C.length, D = new Promise(function(G) {
              v = G;
            });
            (function(G, E) {
              D.h = function() {
                E.index = null;
                E.resolve = false;
                let B = t ? G.searchAsync(E) : G.search(E);
                if (B.then) return B.then(function(z) {
                  a.C[A] = z = z.result || z;
                  v(z);
                  return z;
                });
                B = B.result || B;
                v(B);
                return B;
              };
            })(n, Object.assign({}, d));
            a.C.push(D);
            f[c] = D;
            continue;
          } else d.resolve = false, d.index = null, r = t ? n.searchAsync(d) : n.search(d), d.resolve = l, d.index = n;
        } else if (d.and) r = Va(d, "and", n);
        else if (d.or) r = Va(d, "or", n);
        else if (d.not) r = Va(d, "not", n);
        else if (d.xor) r = Va(d, "xor", n);
        else continue;
      }
      r.await ? (u = 1, r = r.await) : r.then ? (u = 1, r = r.then(function(t) {
        return t.result || t;
      })) : r = r.result || r;
      f[c] = r;
    }
    u && !a.await && (a.await = new Promise(function(t) {
      a.return = t;
    }));
    if (u) {
      const t = Promise.all(f).then(function(n) {
        for (let q = 0; q < a.C.length; q++) if (a.C[q] === t) {
          a.C[q] = function() {
            return b.call(a, n, g, h, k, l, m, p);
          };
          break;
        }
        Wa(a);
      });
      a.C.push(t);
    } else if (a.await) a.C.push(function() {
      return b.call(a, f, g, h, k, l, m, p);
    });
    else return b.call(a, f, g, h, k, l, m, p);
    return l ? a.await || a.result : a;
  }
  function Va(a, c, b) {
    a = a[c];
    const e = a[0] || a;
    e.index || (e.index = b);
    b = new X(e);
    a.length > 1 && (b = b[c].apply(b, a.slice(1)));
    return b;
  }
  X.prototype.or = function() {
    return Ua(this, "or", Xa, arguments);
  };
  function Xa(a, c, b, e, d, f, g) {
    a.length && (this.result.length && a.push(this.result), a.length < 2 ? this.result = a[0] : (this.result = Ya(a, c, b, false, this.h), b = 0));
    d && (this.await = null);
    return d ? this.resolve(c, b, e, g) : this;
  }
  X.prototype.and = function() {
    return Ua(this, "and", Za, arguments);
  };
  function Za(a, c, b, e, d, f, g) {
    if (!f && !this.result.length) return d ? this.result : this;
    let h;
    if (a.length) if (this.result.length && a.unshift(this.result), a.length < 2) this.result = a[0];
    else {
      let k = 0;
      for (let l = 0, m, p; l < a.length; l++) if ((m = a[l]) && (p = m.length)) k < p && (k = p);
      else if (!f) {
        k = 0;
        break;
      }
      k ? (this.result = $a(a, k, c, b, f, this.h, d), h = true) : this.result = [];
    }
    else f || (this.result = a);
    d && (this.await = null);
    return d ? this.resolve(c, b, e, g, h) : this;
  }
  X.prototype.xor = function() {
    return Ua(this, "xor", ab, arguments);
  };
  function ab(a, c, b, e, d, f, g) {
    if (a.length) if (this.result.length && a.unshift(this.result), a.length < 2) this.result = a[0];
    else {
      a: {
        f = b;
        var h = this.h;
        const k = [], l = I();
        let m = 0;
        for (let p = 0, u; p < a.length; p++) if (u = a[p]) {
          m < u.length && (m = u.length);
          for (let r = 0, t; r < u.length; r++) if (t = u[r]) for (let n = 0, q; n < t.length; n++) q = t[n], l[q] = l[q] ? 2 : 1;
        }
        for (let p = 0, u, r = 0; p < m; p++) for (let t = 0, n; t < a.length; t++) if (n = a[t]) {
          if (u = n[p]) {
            for (let q = 0, x; q < u.length; q++) if (x = u[q], l[x] === 1) if (f) f--;
            else if (d) {
              if (k.push(x), k.length === c) {
                a = k;
                break a;
              }
            } else {
              const v = p + (t ? h : 0);
              k[v] || (k[v] = []);
              k[v].push(x);
              if (++r === c) {
                a = k;
                break a;
              }
            }
          }
        }
        a = k;
      }
      this.result = a;
      h = true;
    }
    else f || (this.result = a);
    d && (this.await = null);
    return d ? this.resolve(c, b, e, g, h) : this;
  }
  X.prototype.not = function() {
    return Ua(this, "not", bb, arguments);
  };
  function bb(a, c, b, e, d, f, g) {
    if (!f && !this.result.length) return d ? this.result : this;
    if (a.length && this.result.length) {
      a: {
        f = b;
        var h = [];
        a = new Set(a.flat().flat());
        for (let k = 0, l, m = 0; k < this.result.length; k++) if (l = this.result[k]) {
          for (let p = 0, u; p < l.length; p++) if (u = l[p], !a.has(u)) {
            if (f) f--;
            else if (d) {
              if (h.push(u), h.length === c) {
                a = h;
                break a;
              }
            } else if (h[k] || (h[k] = []), h[k].push(u), ++m === c) {
              a = h;
              break a;
            }
          }
        }
        a = h;
      }
      this.result = a;
      h = true;
    }
    d && (this.await = null);
    return d ? this.resolve(c, b, e, g, h) : this;
  }
  function cb(a, c, b, e, d) {
    let f, g, h;
    typeof d === "string" ? (f = d, d = "") : f = d.template;
    g = f.indexOf("$1");
    h = f.substring(g + 2);
    g = f.substring(0, g);
    let k = d && d.boundary, l = !d || d.clip !== false, m = d && d.merge && h && g && new RegExp(h + " " + g, "g");
    d = d && d.ellipsis;
    var p = 0;
    if (typeof d === "object") {
      var u = d.template;
      p = u.length - 2;
      d = d.pattern;
    }
    typeof d !== "string" && (d = d === false ? "" : "...");
    p && (d = u.replace("$1", d));
    u = d.length - p;
    let r, t;
    typeof k === "object" && (r = k.before, r === 0 && (r = -1), t = k.after, t === 0 && (t = -1), k = k.total || 9e5);
    p = /* @__PURE__ */ new Map();
    for (let Oa = 0, da, db, pa; Oa < c.length; Oa++) {
      let qa;
      if (e) qa = c, pa = e;
      else {
        var n = c[Oa];
        pa = n.field;
        if (!pa) continue;
        qa = n.result;
      }
      db = b.get(pa);
      da = db.encoder;
      n = p.get(da);
      typeof n !== "string" && (n = da.encode(a), p.set(da, n));
      for (let ya = 0; ya < qa.length; ya++) {
        var q = qa[ya].doc;
        if (!q) continue;
        q = ca(q, pa);
        if (!q) continue;
        var x = q.trim().split(/\s+/);
        if (!x.length) continue;
        q = "";
        var v = [];
        let za = [];
        var A = -1, D = -1, G = 0;
        for (var E = 0; E < x.length; E++) {
          var B = x[E], z = da.encode(B);
          z = z.length > 1 ? z.join(" ") : z[0];
          let y;
          if (z && B) {
            var C = B.length, K = (da.split ? B.replace(da.split, "") : B).length - z.length, F = "", N = 0;
            for (var O = 0; O < n.length; O++) {
              var P = n[O];
              if (P) {
                var L = P.length;
                L += K;
                N && L <= N || (P = z.indexOf(P), P > -1 && (F = (P ? B.substring(0, P) : "") + g + B.substring(P, P + L) + h + (P + L < C ? B.substring(P + L) : ""), N = L, y = true));
              }
            }
            F && (k && (A < 0 && (A = q.length + (q ? 1 : 0)), D = q.length + (q ? 1 : 0) + F.length, G += C, za.push(v.length), v.push({ match: F })), q += (q ? " " : "") + F);
          }
          if (!y) B = x[E], q += (q ? " " : "") + B, k && v.push({ text: B });
          else if (k && G >= k) break;
        }
        G = za.length * (f.length - 2);
        if (r || t || k && q.length - G > k) if (G = k + G - u * 2, E = D - A, r > 0 && (E += r), t > 0 && (E += t), E <= G) x = r ? A - (r > 0 ? r : 0) : A - ((G - E) / 2 | 0), v = t ? D + (t > 0 ? t : 0) : x + G, l || (x > 0 && q.charAt(x) !== " " && q.charAt(x - 1) !== " " && (x = q.indexOf(" ", x), x < 0 && (x = 0)), v < q.length && q.charAt(v - 1) !== " " && q.charAt(v) !== " " && (v = q.lastIndexOf(" ", v), v < D ? v = D : ++v)), q = (x ? d : "") + q.substring(x, v) + (v < q.length ? d : "");
        else {
          D = [];
          A = {};
          G = {};
          E = {};
          B = {};
          z = {};
          F = K = C = 0;
          for (O = N = 1; ; ) {
            var U = void 0;
            for (let y = 0, J; y < za.length; y++) {
              J = za[y];
              if (F) if (K !== F) {
                if (E[y + 1]) continue;
                J += F;
                if (A[J]) {
                  C -= u;
                  G[y + 1] = 1;
                  E[y + 1] = 1;
                  continue;
                }
                if (J >= v.length - 1) {
                  if (J >= v.length) {
                    E[y + 1] = 1;
                    J >= x.length && (G[y + 1] = 1);
                    continue;
                  }
                  C -= u;
                }
                q = v[J].text;
                if (L = t && z[y]) if (L > 0) {
                  if (q.length > L) if (E[y + 1] = 1, l) q = q.substring(0, L);
                  else continue;
                  (L -= q.length) || (L = -1);
                  z[y] = L;
                } else {
                  E[y + 1] = 1;
                  continue;
                }
                if (C + q.length + 1 <= k) q = " " + q, D[y] += q;
                else if (l) U = k - C - 1, U > 0 && (q = " " + q.substring(0, U), D[y] += q), E[y + 1] = 1;
                else {
                  E[y + 1] = 1;
                  continue;
                }
              } else {
                if (E[y]) continue;
                J -= K;
                if (A[J]) {
                  C -= u;
                  E[y] = 1;
                  G[y] = 1;
                  continue;
                }
                if (J <= 0) {
                  if (J < 0) {
                    E[y] = 1;
                    G[y] = 1;
                    continue;
                  }
                  C -= u;
                }
                q = v[J].text;
                if (L = r && B[y]) if (L > 0) {
                  if (q.length > L) if (E[y] = 1, l) q = q.substring(q.length - L);
                  else continue;
                  (L -= q.length) || (L = -1);
                  B[y] = L;
                } else {
                  E[y] = 1;
                  continue;
                }
                if (C + q.length + 1 <= k) q += " ", D[y] = q + D[y];
                else if (l) U = q.length + 1 - (k - C), U >= 0 && U < q.length && (q = q.substring(U) + " ", D[y] = q + D[y]), E[y] = 1;
                else {
                  E[y] = 1;
                  continue;
                }
              }
              else {
                q = v[J].match;
                r && (B[y] = r);
                t && (z[y] = t);
                y && C++;
                let Pa;
                J ? !y && u && (C += u) : (G[y] = 1, E[y] = 1);
                J >= x.length - 1 ? Pa = 1 : J < v.length - 1 && v[J + 1].match ? Pa = 1 : u && (C += u);
                C -= f.length - 2;
                if (!y || C + q.length <= k) D[y] = q;
                else {
                  U = N = O = G[y] = 0;
                  break;
                }
                Pa && (G[y + 1] = 1, E[y + 1] = 1);
              }
              C += q.length;
              U = A[J] = 1;
            }
            if (U) K === F ? F++ : K++;
            else {
              K === F ? N = 0 : O = 0;
              if (!N && !O) break;
              N ? (K++, F = K) : F++;
            }
          }
          q = "";
          for (let y = 0, J; y < D.length; y++) J = (y && G[y] ? " " : (y && !d ? " " : "") + d) + D[y], q += J;
          d && !G[D.length] && (q += d);
        }
        m && (q = q.replace(m, " "));
        qa[ya].highlight = q;
      }
      if (e) break;
    }
    return c;
  }
  function X(a, c) {
    if (!this || this.constructor !== X) return new X(a, c);
    let b = 0, e, d, f, g, h, k;
    if (a && a.index) {
      const l = a;
      c = l.index;
      b = l.boost || 0;
      if (d = l.query) {
        f = l.field || l.pluck;
        g = l.highlight;
        const m = l.resolve;
        a = l.async || l.queue;
        l.resolve = false;
        l.index = null;
        a = a ? c.searchAsync(l) : c.search(l);
        l.resolve = m;
        l.index = c;
        a = a.result || a;
      } else a = [];
    }
    if (a && a.then) {
      const l = this;
      a = a.then(function(m) {
        l.C[0] = l.result = m.result || m;
        Wa(l);
      });
      e = [a];
      a = [];
      h = new Promise(function(m) {
        k = m;
      });
    }
    this.index = c || null;
    this.result = a || [];
    this.h = b;
    this.C = e || [];
    this.await = h || null;
    this.return = k || null;
    this.highlight = g || null;
    this.query = d || "";
    this.field = f || "";
  }
  w = X.prototype;
  w.limit = function(a) {
    if (this.await) {
      const c = this;
      this.C.push(function() {
        return c.limit(a).result;
      });
    } else if (this.result.length) {
      const c = [];
      for (let b = 0, e; b < this.result.length; b++) if (e = this.result[b]) if (e.length <= a) {
        if (c[b] = e, a -= e.length, !a) break;
      } else {
        c[b] = e.slice(0, a);
        break;
      }
      this.result = c;
    }
    return this;
  };
  w.offset = function(a) {
    if (this.await) {
      const c = this;
      this.C.push(function() {
        return c.offset(a).result;
      });
    } else if (this.result.length) {
      const c = [];
      for (let b = 0, e; b < this.result.length; b++) if (e = this.result[b]) e.length <= a ? a -= e.length : (c[b] = e.slice(a), a = 0);
      this.result = c;
    }
    return this;
  };
  w.boost = function(a) {
    if (this.await) {
      const c = this;
      this.C.push(function() {
        return c.boost(a).result;
      });
    } else this.h += a;
    return this;
  };
  function Wa(a, c) {
    let b = a.result;
    var e = a.await;
    a.await = null;
    for (let d = 0, f; d < a.C.length; d++) if (f = a.C[d]) {
      if (typeof f === "function") b = f(), a.C[d] = b = b.result || b, d--;
      else if (f.h) b = f.h(), a.C[d] = b = b.result || b, d--;
      else if (f.then) return a.await = e;
    }
    e = a.return;
    a.C = [];
    a.return = null;
    c || e(b);
    return b;
  }
  w.resolve = function(a, c, b, e, d) {
    let f = this.await ? Wa(this, true) : this.result;
    if (f.then) {
      const g = this;
      return f.then(function() {
        return g.resolve(a, c, b, e, d);
      });
    }
    f.length && (typeof a === "object" ? (e = a.highlight || this.highlight, b = !!e || a.enrich, c = a.offset, a = a.limit) : (e = e || this.highlight, b = !!e || b), f = d ? b ? Ta.call(this.index, f) : f : Sa.call(this.index, f, a || 100, c, b));
    return this.finalize(f, e);
  };
  w.finalize = function(a, c) {
    if (a.then) {
      const e = this;
      return a.then(function(d) {
        return e.finalize(d, c);
      });
    }
    c && a.length && this.query && (a = cb(this.query, a, this.index.index, this.field, c));
    const b = this.return;
    this.highlight = this.index = this.result = this.C = this.await = this.return = null;
    this.query = this.field = "";
    b && b(a);
    return a;
  };
  function $a(a, c, b, e, d, f, g) {
    const h = a.length;
    let k = [], l, m;
    l = I();
    for (let p = 0, u, r, t, n; p < c; p++) for (let q = 0; q < h; q++) if (t = a[q], p < t.length && (u = t[p])) for (let x = 0; x < u.length; x++) {
      r = u[x];
      (m = l[r]) ? l[r]++ : (m = 0, l[r] = 1);
      n = k[m] || (k[m] = []);
      if (!g) {
        let v = p + (q || !d ? 0 : f || 0);
        n = n[v] || (n[v] = []);
      }
      n.push(r);
      if (g && b && m === h - 1 && n.length - e === b) return e ? n.slice(e) : n;
    }
    if (a = k.length) if (d) k = k.length > 1 ? Ya(k, b, e, g, f) : (k = k[0]) && b && k.length > b || e ? k.slice(e, b + e) : k;
    else {
      if (a < h) return [];
      k = k[a - 1];
      if (b || e) if (g) {
        if (k.length > b || e) k = k.slice(e, b + e);
      } else {
        d = [];
        for (let p = 0, u; p < k.length; p++) if (u = k[p]) if (e && u.length > e) e -= u.length;
        else {
          if (b && u.length > b || e) u = u.slice(e, b + e), b -= u.length, e && (e -= u.length);
          d.push(u);
          if (!b) break;
        }
        k = d;
      }
    }
    return k;
  }
  function Ya(a, c, b, e, d) {
    const f = [], g = I();
    let h;
    var k = a.length;
    let l;
    if (e) for (d = k - 1; d >= 0; d--) {
      if (l = (e = a[d]) && e.length) {
        for (k = 0; k < l; k++) if (h = e[k], !g[h]) {
          if (g[h] = 1, b) b--;
          else if (f.push(h), f.length === c) return f;
        }
      }
    }
    else for (let m = k - 1, p, u = 0; m >= 0; m--) {
      p = a[m];
      for (let r = 0; r < p.length; r++) if (l = (e = p[r]) && e.length) {
        for (let t = 0; t < l; t++) if (h = e[t], !g[h]) if (g[h] = 1, b) b--;
        else {
          let n = (r + (m < k - 1 ? d || 0 : 0)) / (m + 1) | 0;
          (f[n] || (f[n] = [])).push(h);
          if (++u === c) return f;
        }
      }
    }
    return f;
  }
  function eb(a, c, b) {
    const e = I(), d = [];
    for (let f = 0, g; f < c.length; f++) {
      g = c[f];
      for (let h = 0; h < g.length; h++) e[g[h]] = 1;
    }
    if (b) for (let f = 0, g; f < a.length; f++) g = a[f], e[g] && (d.push(g), e[g] = 0);
    else for (let f = 0, g, h; f < a.result.length; f++) for (g = a.result[f], c = 0; c < g.length; c++) h = g[c], e[h] && ((d[f] || (d[f] = [])).push(h), e[h] = 0);
    return d;
  }
  I();
  Na.prototype.search = function(a, c, b, e) {
    b || (!c && ba(a) ? (b = a, a = "") : ba(c) && (b = c, c = 0));
    let d = [];
    var f = [];
    let g;
    let h, k, l, m, p;
    let u = 0, r = true, t;
    if (b) {
      b.constructor === Array && (b = { index: b });
      a = b.query || a;
      g = b.pluck;
      h = b.merge;
      l = b.boost;
      p = g || b.field || (p = b.index) && (p.index ? null : p);
      var n = this.tag && b.tag;
      k = b.suggest;
      r = b.resolve !== false;
      m = b.cache;
      t = r && this.store && b.highlight;
      var q = !!t || r && this.store && b.enrich;
      c = b.limit || c;
      var x = b.offset || 0;
      c || (c = r ? 100 : 0);
      if (n && (!this.db || !e)) {
        n.constructor !== Array && (n = [n]);
        var v = [];
        for (let B = 0, z; B < n.length; B++) if (z = n[B], z.field && z.tag) {
          var A = z.tag;
          if (A.constructor === Array) for (var D = 0; D < A.length; D++) v.push(z.field, A[D]);
          else v.push(z.field, A);
        } else {
          A = Object.keys(z);
          for (let C = 0, K, F; C < A.length; C++) if (K = A[C], F = z[K], F.constructor === Array) for (D = 0; D < F.length; D++) v.push(K, F[D]);
          else v.push(K, F);
        }
        n = v;
        if (!a) {
          f = [];
          if (v.length) for (n = 0; n < v.length; n += 2) {
            if (this.db) {
              e = this.index.get(v[n]);
              if (!e) continue;
              f.push(e = e.db.tag(v[n + 1], c, x, q));
            } else e = fb.call(this, v[n], v[n + 1], c, x, q);
            d.push(r ? { field: v[n], tag: v[n + 1], result: e } : [e]);
          }
          if (f.length) {
            const B = this;
            return Promise.all(f).then(function(z) {
              for (let C = 0; C < z.length; C++) r ? d[C].result = z[C] : d[C] = z[C];
              return r ? d : new X(d.length > 1 ? $a(d, 1, 0, 0, k, l) : d[0], B);
            });
          }
          return r ? d : new X(d.length > 1 ? $a(d, 1, 0, 0, k, l) : d[0], this);
        }
      }
      r || g || !(p = p || this.field) || (M(p) ? g = p : (p.constructor === Array && p.length === 1 && (p = p[0]), g = p.field || p.index));
      p && p.constructor !== Array && (p = [p]);
    }
    p || (p = this.field);
    let G;
    v = (this.worker || this.db) && !e && [];
    for (let B = 0, z, C, K; B < p.length; B++) {
      C = p[B];
      if (this.db && this.tag && !this.B[B]) continue;
      let F;
      M(C) || (F = C, C = F.field, a = F.query || a, c = aa(F.limit, c), x = aa(F.offset, x), k = aa(F.suggest, k), t = r && this.store && aa(F.highlight, t), q = !!t || r && this.store && aa(F.enrich, q), m = aa(F.cache, m));
      if (e) z = e[B];
      else {
        A = F || b || {};
        D = A.enrich;
        var E = this.index.get(C);
        n && (this.db && (A.tag = n, G = E.db.support_tag_search, A.field = p), !G && D && (A.enrich = false));
        z = m ? E.searchCache(a, c, A) : E.search(a, c, A);
        D && (A.enrich = D);
        if (v) {
          v[B] = z;
          continue;
        }
      }
      K = (z = z.result || z) && z.length;
      if (n && K) {
        A = [];
        D = 0;
        if (this.db && e) {
          if (!G) for (E = p.length; E < e.length; E++) {
            let N = e[E];
            if (N && N.length) D++, A.push(N);
            else if (!k) return r ? d : new X(d, this);
          }
        } else for (let N = 0, O, P; N < n.length; N += 2) {
          O = this.tag.get(n[N]);
          if (!O) if (k) continue;
          else return r ? d : new X(d, this);
          if (P = (O = O && O.get(n[N + 1])) && O.length) D++, A.push(O);
          else if (!k) return r ? d : new X(d, this);
        }
        if (D) {
          z = eb(z, A, r);
          K = z.length;
          if (!K && !k) return r ? z : new X(z, this);
          D--;
        }
      }
      if (K) f[u] = C, d.push(z), u++;
      else if (p.length === 1) return r ? d : new X(d, this);
    }
    if (v) {
      if (this.db && n && n.length && !G) for (q = 0; q < n.length; q += 2) {
        f = this.index.get(n[q]);
        if (!f) if (k) continue;
        else return r ? d : new X(d, this);
        v.push(f.db.tag(n[q + 1], c, x, false));
      }
      const B = this;
      return Promise.all(v).then(function(z) {
        b && (b.resolve = r);
        z.length && (z = B.search(a, c, b, z));
        return z;
      });
    }
    if (!u) return r ? d : new X(d, this);
    if (g && (!q || !this.store)) return d = d[0], r ? d : new X(d, this);
    v = [];
    for (x = 0; x < f.length; x++) {
      n = d[x];
      q && n.length && typeof n[0].doc === "undefined" && (this.db ? v.push(n = this.index.get(this.field[0]).db.enrich(n)) : n = Ta.call(this, n));
      if (g) return r ? t ? cb(a, n, this.index, g, t) : n : new X(n, this);
      d[x] = { field: f[x], result: n };
    }
    if (q && this.db && v.length) {
      const B = this;
      return Promise.all(v).then(function(z) {
        for (let C = 0; C < z.length; C++) d[C].result = z[C];
        t && (d = cb(a, d, B.index, g, t));
        return h ? gb(d) : d;
      });
    }
    t && (d = cb(a, d, this.index, g, t));
    return h ? gb(d) : d;
  };
  function gb(a) {
    const c = [], b = I(), e = I();
    for (let d = 0, f, g, h, k, l, m, p; d < a.length; d++) {
      f = a[d];
      g = f.field;
      h = f.result;
      for (let u = 0; u < h.length; u++) if (l = h[u], typeof l !== "object" ? l = { id: k = l } : k = l.id, (m = b[k]) ? m.push(g) : (l.field = b[k] = [g], c.push(l)), p = l.highlight) m = e[k], m || (e[k] = m = {}, l.highlight = m), m[g] = p;
    }
    return c;
  }
  function fb(a, c, b, e, d) {
    a = this.tag.get(a);
    if (!a) return [];
    a = a.get(c);
    if (!a) return [];
    c = a.length - e;
    if (c > 0) {
      if (b && c > b || e) a = a.slice(e, e + b);
      d && (a = Ta.call(this, a));
    }
    return a;
  }
  function Ta(a) {
    if (!this || !this.store) return a;
    if (this.db) return this.index.get(this.field[0]).db.enrich(a);
    const c = Array(a.length);
    for (let b = 0, e; b < a.length; b++) e = a[b], c[b] = { id: e, doc: this.store.get(e) };
    return c;
  }
  function Na(a) {
    if (!this || this.constructor !== Na) return new Na(a);
    const c = a.document || a.doc || a;
    let b, e;
    this.B = [];
    this.field = [];
    this.D = [];
    this.key = (b = c.key || c.id) && hb(b, this.D) || "id";
    (e = a.keystore || 0) && (this.keystore = e);
    this.fastupdate = !!a.fastupdate;
    this.reg = !this.fastupdate || a.worker || a.db ? e ? new S(e) : /* @__PURE__ */ new Set() : e ? new R(e) : /* @__PURE__ */ new Map();
    this.h = (b = c.store || null) && b && b !== true && [];
    this.store = b ? e ? new R(e) : /* @__PURE__ */ new Map() : null;
    this.cache = (b = a.cache || null) && new ma(b);
    a.cache = false;
    this.worker = a.worker || false;
    this.priority = a.priority || 4;
    this.index = ib.call(this, a, c);
    this.tag = null;
    if (b = c.tag) {
      if (typeof b === "string" && (b = [b]), b.length) {
        this.tag = /* @__PURE__ */ new Map();
        this.A = [];
        this.F = [];
        for (let d = 0, f, g; d < b.length; d++) {
          f = b[d];
          g = f.field || f;
          if (!g) throw Error("The tag field from the document descriptor is undefined.");
          f.custom ? this.A[d] = f.custom : (this.A[d] = hb(g, this.D), f.filter && (typeof this.A[d] === "string" && (this.A[d] = new String(this.A[d])), this.A[d].G = f.filter));
          this.F[d] = g;
          this.tag.set(g, /* @__PURE__ */ new Map());
        }
      }
    }
    if (this.worker) {
      this.fastupdate = false;
      a = [];
      for (const d of this.index.values()) d.then && a.push(d);
      if (a.length) {
        const d = this;
        return Promise.all(a).then(function(f) {
          let g = 0;
          for (const h of d.index.entries()) {
            const k = h[0];
            let l = h[1];
            l.then && (l = f[g], d.index.set(k, l), g++);
          }
          return d;
        });
      }
    } else a.db && (this.fastupdate = false, this.mount(a.db));
  }
  w = Na.prototype;
  w.mount = function(a) {
    let c = this.field;
    if (this.tag) for (let f = 0, g; f < this.F.length; f++) {
      g = this.F[f];
      var b = void 0;
      this.index.set(g, b = new T({}, this.reg));
      c === this.field && (c = c.slice(0));
      c.push(g);
      b.tag = this.tag.get(g);
    }
    b = [];
    const e = { db: a.db, type: a.type, fastupdate: a.fastupdate };
    for (let f = 0, g, h; f < c.length; f++) {
      e.field = h = c[f];
      g = this.index.get(h);
      const k = new a.constructor(a.id, e);
      k.id = a.id;
      b[f] = k.mount(g);
      g.document = true;
      f ? g.bypass = true : g.store = this.store;
    }
    const d = this;
    return this.db = Promise.all(b).then(function() {
      d.db = true;
    });
  };
  w.commit = function() {
    return __async(this, null, function* () {
      const a = [];
      for (const c of this.index.values()) a.push(c.commit());
      yield Promise.all(a);
      this.reg.clear();
    });
  };
  w.destroy = function() {
    const a = [];
    for (const c of this.index.values()) a.push(c.destroy());
    return Promise.all(a);
  };
  function ib(a, c) {
    const b = /* @__PURE__ */ new Map();
    let e = c.index || c.field || c;
    M(e) && (e = [e]);
    for (let f = 0, g, h; f < e.length; f++) {
      g = e[f];
      M(g) || (h = g, g = g.field);
      h = ba(h) ? Object.assign({}, a, h) : a;
      if (this.worker) {
        var d = void 0;
        d = (d = h.encoder) && d.encode ? d : new ka(typeof d === "string" ? va[d] : d || {});
        d = new La(h, d);
        b.set(g, d);
      }
      this.worker || b.set(g, new T(h, this.reg));
      h.custom ? this.B[f] = h.custom : (this.B[f] = hb(g, this.D), h.filter && (typeof this.B[f] === "string" && (this.B[f] = new String(this.B[f])), this.B[f].G = h.filter));
      this.field[f] = g;
    }
    if (this.h) {
      a = c.store;
      M(a) && (a = [a]);
      for (let f = 0, g, h; f < a.length; f++) g = a[f], h = g.field || g, g.custom ? (this.h[f] = g.custom, g.custom.O = h) : (this.h[f] = hb(h, this.D), g.filter && (typeof this.h[f] === "string" && (this.h[f] = new String(this.h[f])), this.h[f].G = g.filter));
    }
    return b;
  }
  function hb(a, c) {
    const b = a.split(":");
    let e = 0;
    for (let d = 0; d < b.length; d++) a = b[d], a[a.length - 1] === "]" && (a = a.substring(0, a.length - 2)) && (c[e] = true), a && (b[e++] = a);
    e < b.length && (b.length = e);
    return e > 1 ? b : b[0];
  }
  w.append = function(a, c) {
    return this.add(a, c, true);
  };
  w.update = function(a, c) {
    return this.remove(a).add(a, c);
  };
  w.remove = function(a) {
    ba(a) && (a = ca(a, this.key));
    for (var c of this.index.values()) c.remove(a, true);
    if (this.reg.has(a)) {
      if (this.tag && !this.fastupdate) for (let b of this.tag.values()) for (let e of b) {
        c = e[0];
        const d = e[1], f = d.indexOf(a);
        f > -1 && (d.length > 1 ? d.splice(f, 1) : b.delete(c));
      }
      this.store && this.store.delete(a);
      this.reg.delete(a);
    }
    this.cache && this.cache.remove(a);
    return this;
  };
  w.clear = function() {
    const a = [];
    for (const c of this.index.values()) {
      const b = c.clear();
      b.then && a.push(b);
    }
    if (this.tag) for (const c of this.tag.values()) c.clear();
    this.store && this.store.clear();
    this.cache && this.cache.clear();
    return a.length ? Promise.all(a) : this;
  };
  w.contain = function(a) {
    return this.db ? this.index.get(this.field[0]).db.has(a) : this.reg.has(a);
  };
  w.cleanup = function() {
    for (const a of this.index.values()) a.cleanup();
    return this;
  };
  w.get = function(a) {
    return this.db ? this.index.get(this.field[0]).db.enrich(a).then(function(c) {
      return c[0] && c[0].doc || null;
    }) : this.store.get(a) || null;
  };
  w.set = function(a, c) {
    typeof a === "object" && (c = a, a = ca(c, this.key));
    this.store.set(a, c);
    return this;
  };
  w.searchCache = la;
  w.export = jb;
  w.import = kb;
  Fa(Na.prototype);
  function lb(a, c = 0) {
    let b = [], e = [];
    c && (c = 25e4 / c * 5e3 | 0);
    for (const d of a.entries()) e.push(d), e.length === c && (b.push(e), e = []);
    e.length && b.push(e);
    return b;
  }
  function mb(a, c) {
    c || (c = /* @__PURE__ */ new Map());
    for (let b = 0, e; b < a.length; b++) e = a[b], c.set(e[0], e[1]);
    return c;
  }
  function nb(a, c = 0) {
    let b = [], e = [];
    c && (c = 25e4 / c * 1e3 | 0);
    for (const d of a.entries()) e.push([d[0], lb(d[1])[0]]), e.length === c && (b.push(e), e = []);
    e.length && b.push(e);
    return b;
  }
  function ob(a, c) {
    c || (c = /* @__PURE__ */ new Map());
    for (let b = 0, e, d; b < a.length; b++) e = a[b], d = c.get(e[0]), c.set(e[0], mb(e[1], d));
    return c;
  }
  function pb(a) {
    let c = [], b = [];
    for (const e of a.keys()) b.push(e), b.length === 25e4 && (c.push(b), b = []);
    b.length && c.push(b);
    return c;
  }
  function qb(a, c) {
    c || (c = /* @__PURE__ */ new Set());
    for (let b = 0; b < a.length; b++) c.add(a[b]);
    return c;
  }
  function rb(a, c, b, e, d, f, g = 0) {
    const h = e && e.constructor === Array;
    var k = h ? e.shift() : e;
    if (!k) return this.export(a, c, d, f + 1);
    if ((k = a((c ? c + "." : "") + (g + 1) + "." + b, JSON.stringify(k))) && k.then) {
      const l = this;
      return k.then(function() {
        return rb.call(l, a, c, b, h ? e : null, d, f, g + 1);
      });
    }
    return rb.call(this, a, c, b, h ? e : null, d, f, g + 1);
  }
  function jb(a, c, b = 0, e = 0) {
    if (b < this.field.length) {
      const g = this.field[b];
      if ((c = this.index.get(g).export(a, g, b, e = 1)) && c.then) {
        const h = this;
        return c.then(function() {
          return h.export(a, g, b + 1);
        });
      }
      return this.export(a, g, b + 1);
    }
    let d, f;
    switch (e) {
      case 0:
        d = "reg";
        f = pb(this.reg);
        c = null;
        break;
      case 1:
        d = "tag";
        f = this.tag && nb(this.tag, this.reg.size);
        c = null;
        break;
      case 2:
        d = "doc";
        f = this.store && lb(this.store);
        c = null;
        break;
      default:
        return;
    }
    return rb.call(this, a, c, d, f || null, b, e);
  }
  function kb(a, c) {
    var b = a.split(".");
    b[b.length - 1] === "json" && b.pop();
    const e = b.length > 2 ? b[0] : "";
    b = b.length > 2 ? b[2] : b[1];
    if (this.worker && e) return this.index.get(e).import(a);
    if (c) {
      typeof c === "string" && (c = JSON.parse(c));
      if (e) return this.index.get(e).import(b, c);
      switch (b) {
        case "reg":
          this.fastupdate = false;
          this.reg = qb(c, this.reg);
          for (let d = 0, f; d < this.field.length; d++) f = this.index.get(this.field[d]), f.fastupdate = false, f.reg = this.reg;
          if (this.worker) {
            c = [];
            for (const d of this.index.values()) c.push(d.import(a));
            return Promise.all(c);
          }
          break;
        case "tag":
          this.tag = ob(c, this.tag);
          break;
        case "doc":
          this.store = mb(c, this.store);
      }
    }
  }
  function sb(a, c) {
    let b = "";
    for (const e of a.entries()) {
      a = e[0];
      const d = e[1];
      let f = "";
      for (let g = 0, h; g < d.length; g++) {
        h = d[g] || [""];
        let k = "";
        for (let l = 0; l < h.length; l++) k += (k ? "," : "") + (c === "string" ? '"' + h[l] + '"' : h[l]);
        k = "[" + k + "]";
        f += (f ? "," : "") + k;
      }
      f = '["' + a + '",[' + f + "]]";
      b += (b ? "," : "") + f;
    }
    return b;
  }
  T.prototype.remove = function(a, c) {
    const b = this.reg.size && (this.fastupdate ? this.reg.get(a) : this.reg.has(a));
    if (b) {
      if (this.fastupdate) for (let e = 0, d, f; e < b.length; e++) {
        if ((d = b[e]) && (f = d.length)) if (d[f - 1] === a) d.pop();
        else {
          const g = d.indexOf(a);
          g >= 0 && d.splice(g, 1);
        }
      }
      else tb(this.map, a), this.depth && tb(this.ctx, a);
      c || this.reg.delete(a);
    }
    this.db && (this.commit_task.push({ del: a }), this.M && ub(this));
    this.cache && this.cache.remove(a);
    return this;
  };
  function tb(a, c) {
    let b = 0;
    var e = typeof c === "undefined";
    if (a.constructor === Array) for (let d = 0, f, g, h; d < a.length; d++) {
      if ((f = a[d]) && f.length) {
        if (e) return 1;
        g = f.indexOf(c);
        if (g >= 0) {
          if (f.length > 1) return f.splice(g, 1), 1;
          delete a[d];
          if (b) return 1;
          h = 1;
        } else {
          if (h) return 1;
          b++;
        }
      }
    }
    else for (let d of a.entries()) e = d[0], tb(d[1], c) ? b++ : a.delete(e);
    return b;
  }
  var vb = { memory: { resolution: 1 }, performance: { resolution: 3, fastupdate: true, context: { depth: 1, resolution: 1 } }, match: { tokenize: "forward" }, score: { resolution: 9, context: { depth: 2, resolution: 3 } } };
  T.prototype.add = function(a, c, b, e) {
    if (c && (a || a === 0)) {
      if (!e && !b && this.reg.has(a)) return this.update(a, c);
      e = this.depth;
      c = this.encoder.encode(c, !e);
      const l = c.length;
      if (l) {
        const m = I(), p = I(), u = this.resolution;
        for (let r = 0; r < l; r++) {
          let t = c[this.rtl ? l - 1 - r : r];
          var d = t.length;
          if (d && (e || !p[t])) {
            var f = this.score ? this.score(c, t, r, null, 0) : wb(u, l, r), g = "";
            switch (this.tokenize) {
              case "tolerant":
                Y(this, p, t, f, a, b);
                if (d > 2) {
                  for (let n = 1, q, x, v, A; n < d - 1; n++) q = t.charAt(n), x = t.charAt(n + 1), v = t.substring(0, n) + x, A = t.substring(n + 2), g = v + q + A, Y(this, p, g, f, a, b), g = v + A, Y(this, p, g, f, a, b);
                  Y(this, p, t.substring(0, t.length - 1), f, a, b);
                }
                break;
              case "full":
                if (d > 2) {
                  for (let n = 0, q; n < d; n++) for (f = d; f > n; f--) {
                    g = t.substring(n, f);
                    q = this.rtl ? d - 1 - n : n;
                    var h = this.score ? this.score(c, t, r, g, q) : wb(u, l, r, d, q);
                    Y(this, p, g, h, a, b);
                  }
                  break;
                }
              case "bidirectional":
              case "reverse":
                if (d > 1) {
                  for (h = d - 1; h > 0; h--) {
                    g = t[this.rtl ? d - 1 - h : h] + g;
                    var k = this.score ? this.score(c, t, r, g, h) : wb(u, l, r, d, h);
                    Y(this, p, g, k, a, b);
                  }
                  g = "";
                }
              case "forward":
                if (d > 1) {
                  for (h = 0; h < d; h++) g += t[this.rtl ? d - 1 - h : h], Y(
                    this,
                    p,
                    g,
                    f,
                    a,
                    b
                  );
                  break;
                }
              default:
                if (Y(this, p, t, f, a, b), e && l > 1 && r < l - 1) for (d = this.N, g = t, f = Math.min(e + 1, this.rtl ? r + 1 : l - r), h = 1; h < f; h++) {
                  t = c[this.rtl ? l - 1 - r - h : r + h];
                  k = this.bidirectional && t > g;
                  const n = this.score ? this.score(c, g, r, t, h - 1) : wb(d + (l / 2 > d ? 0 : 1), l, r, f - 1, h - 1);
                  Y(this, m, k ? g : t, n, a, b, k ? t : g);
                }
            }
          }
        }
        this.fastupdate || this.reg.add(a);
      }
    }
    this.db && (this.commit_task.push(b ? { ins: a } : { del: a }), this.M && ub(this));
    return this;
  };
  function Y(a, c, b, e, d, f, g) {
    let h, k;
    if (!(h = c[b]) || g && !h[g]) {
      g ? (c = h || (c[b] = I()), c[g] = 1, k = a.ctx, (h = k.get(g)) ? k = h : k.set(g, k = a.keystore ? new R(a.keystore) : /* @__PURE__ */ new Map())) : (k = a.map, c[b] = 1);
      (h = k.get(b)) ? k = h : k.set(b, k = h = []);
      if (f) {
        for (let l = 0, m; l < h.length; l++) if ((m = h[l]) && m.includes(d)) {
          if (l <= e) return;
          m.splice(m.indexOf(d), 1);
          a.fastupdate && (c = a.reg.get(d)) && c.splice(c.indexOf(m), 1);
          break;
        }
      }
      k = k[e] || (k[e] = []);
      k.push(d);
      if (k.length === __pow(2, 31) - 1) {
        c = new xa(k);
        if (a.fastupdate) for (let l of a.reg.values()) l.includes(k) && (l[l.indexOf(k)] = c);
        h[e] = k = c;
      }
      a.fastupdate && ((e = a.reg.get(d)) ? e.push(k) : a.reg.set(d, [k]));
    }
  }
  function wb(a, c, b, e, d) {
    return b && a > 1 ? c + (e || 0) <= a ? b + (d || 0) : (a - 1) / (c + (e || 0)) * (b + (d || 0)) + 1 | 0 : 0;
  }
  T.prototype.search = function(a, c, b) {
    b || (c || typeof a !== "object" ? typeof c === "object" && (b = c, c = 0) : (b = a, a = ""));
    if (b && b.cache) return b.cache = false, a = this.searchCache(a, c, b), b.cache = true, a;
    let e = [], d, f, g, h = 0, k, l, m, p, u;
    b && (a = b.query || a, c = b.limit || c, h = b.offset || 0, f = b.context, g = b.suggest, u = (k = b.resolve) && b.enrich, m = b.boost, p = b.resolution, l = this.db && b.tag);
    typeof k === "undefined" && (k = this.resolve);
    f = this.depth && f !== false;
    let r = this.encoder.encode(a, !f);
    d = r.length;
    c = c || (k ? 100 : 0);
    if (d === 1) return xb.call(
      this,
      r[0],
      "",
      c,
      h,
      k,
      u,
      l
    );
    if (d === 2 && f && !g) return xb.call(this, r[1], r[0], c, h, k, u, l);
    let t = I(), n = 0, q;
    f && (q = r[0], n = 1);
    p || p === 0 || (p = q ? this.N : this.resolution);
    if (this.db) {
      if (this.db.search && (b = this.db.search(this, r, c, h, g, k, u, l), b !== false)) return b;
      const x = this;
      return function() {
        return __async(this, null, function* () {
          for (let v, A; n < d; n++) {
            if ((A = r[n]) && !t[A]) {
              t[A] = 1;
              v = yield yb(x, A, q, 0, 0, false, false);
              if (v = zb(v, e, g, p)) {
                e = v;
                break;
              }
              q && (g && v && e.length || (q = A));
            }
            g && q && n === d - 1 && !e.length && (p = x.resolution, q = "", n = -1, t = I());
          }
          return Ab(e, p, c, h, g, m, k);
        });
      }();
    }
    for (let x, v; n < d; n++) {
      if ((v = r[n]) && !t[v]) {
        t[v] = 1;
        x = yb(this, v, q, 0, 0, false, false);
        if (x = zb(x, e, g, p)) {
          e = x;
          break;
        }
        q && (g && x && e.length || (q = v));
      }
      g && q && n === d - 1 && !e.length && (p = this.resolution, q = "", n = -1, t = I());
    }
    return Ab(e, p, c, h, g, m, k);
  };
  function Ab(a, c, b, e, d, f, g) {
    let h = a.length, k = a;
    if (h > 1) k = $a(a, c, b, e, d, f, g);
    else if (h === 1) return g ? Sa.call(null, a[0], b, e) : new X(a[0], this);
    return g ? k : new X(k, this);
  }
  function xb(a, c, b, e, d, f, g) {
    a = yb(this, a, c, b, e, d, f, g);
    return this.db ? a.then(function(h) {
      return d ? h || [] : new X(h, this);
    }) : a && a.length ? d ? Sa.call(this, a, b, e) : new X(a, this) : d ? [] : new X([], this);
  }
  function zb(a, c, b, e) {
    let d = [];
    if (a && a.length) {
      if (a.length <= e) {
        c.push(a);
        return;
      }
      for (let f = 0, g; f < e; f++) if (g = a[f]) d[f] = g;
      if (d.length) {
        c.push(d);
        return;
      }
    }
    if (!b) return d;
  }
  function yb(a, c, b, e, d, f, g, h) {
    let k;
    b && (k = a.bidirectional && c > b) && (k = b, b = c, c = k);
    if (a.db) return a.db.get(c, b, e, d, f, g, h);
    a = b ? (a = a.ctx.get(b)) && a.get(c) : a.map.get(c);
    return a;
  }
  function T(a, c) {
    if (!this || this.constructor !== T) return new T(a);
    if (a) {
      var b = M(a) ? a : a.preset;
      b && (a = Object.assign({}, vb[b], a));
    } else a = {};
    b = a.context;
    const e = b === true ? { depth: 1 } : b || {}, d = M(a.encoder) ? va[a.encoder] : a.encode || a.encoder || {};
    this.encoder = d.encode ? d : typeof d === "object" ? new ka(d) : { encode: d };
    this.resolution = a.resolution || 9;
    this.tokenize = b = (b = a.tokenize) && b !== "default" && b !== "exact" && b || "strict";
    this.depth = b === "strict" && e.depth || 0;
    this.bidirectional = e.bidirectional !== false;
    this.fastupdate = !!a.fastupdate;
    this.score = a.score || null;
    (b = a.keystore || 0) && (this.keystore = b);
    this.map = b ? new R(b) : /* @__PURE__ */ new Map();
    this.ctx = b ? new R(b) : /* @__PURE__ */ new Map();
    this.reg = c || (this.fastupdate ? b ? new R(b) : /* @__PURE__ */ new Map() : b ? new S(b) : /* @__PURE__ */ new Set());
    this.N = e.resolution || 3;
    this.rtl = d.rtl || a.rtl || false;
    this.cache = (b = a.cache || null) && new ma(b);
    this.resolve = a.resolve !== false;
    if (b = a.db) this.db = this.mount(b);
    this.M = a.commit !== false;
    this.commit_task = [];
    this.commit_timer = null;
    this.priority = a.priority || 4;
  }
  w = T.prototype;
  w.mount = function(a) {
    this.commit_timer && (clearTimeout(this.commit_timer), this.commit_timer = null);
    return a.mount(this);
  };
  w.commit = function() {
    this.commit_timer && (clearTimeout(this.commit_timer), this.commit_timer = null);
    return this.db.commit(this);
  };
  w.destroy = function() {
    this.commit_timer && (clearTimeout(this.commit_timer), this.commit_timer = null);
    return this.db.destroy();
  };
  function ub(a) {
    a.commit_timer || (a.commit_timer = setTimeout(function() {
      a.commit_timer = null;
      a.db.commit(a);
    }, 1));
  }
  w.clear = function() {
    this.map.clear();
    this.ctx.clear();
    this.reg.clear();
    this.cache && this.cache.clear();
    return this.db ? (this.commit_timer && clearTimeout(this.commit_timer), this.commit_timer = null, this.commit_task = [], this.db.clear()) : this;
  };
  w.append = function(a, c) {
    return this.add(a, c, true);
  };
  w.contain = function(a) {
    return this.db ? this.db.has(a) : this.reg.has(a);
  };
  w.update = function(a, c) {
    const b = this, e = this.remove(a);
    return e && e.then ? e.then(() => b.add(a, c)) : this.add(a, c);
  };
  w.cleanup = function() {
    if (!this.fastupdate) return this;
    tb(this.map);
    this.depth && tb(this.ctx);
    return this;
  };
  w.searchCache = la;
  w.export = function(a, c, b = 0, e = 0) {
    let d, f;
    switch (e) {
      case 0:
        d = "reg";
        f = pb(this.reg);
        break;
      case 1:
        d = "cfg";
        f = null;
        break;
      case 2:
        d = "map";
        f = lb(this.map, this.reg.size);
        break;
      case 3:
        d = "ctx";
        f = nb(this.ctx, this.reg.size);
        break;
      default:
        return;
    }
    return rb.call(this, a, c, d, f, b, e);
  };
  w.import = function(a, c) {
    if (c) switch (typeof c === "string" && (c = JSON.parse(c)), a = a.split("."), a[a.length - 1] === "json" && a.pop(), a.length === 3 && a.shift(), a = a.length > 1 ? a[1] : a[0], a) {
      case "reg":
        this.fastupdate = false;
        this.reg = qb(c, this.reg);
        break;
      case "map":
        this.map = mb(c, this.map);
        break;
      case "ctx":
        this.ctx = ob(c, this.ctx);
    }
  };
  w.serialize = function(a = true) {
    let c = "", b = "", e = "";
    if (this.reg.size) {
      let f;
      for (var d of this.reg.keys()) f || (f = typeof d), c += (c ? "," : "") + (f === "string" ? '"' + d + '"' : d);
      c = "index.reg=new Set([" + c + "]);";
      b = sb(this.map, f);
      b = "index.map=new Map([" + b + "]);";
      for (const g of this.ctx.entries()) {
        d = g[0];
        let h = sb(g[1], f);
        h = "new Map([" + h + "])";
        h = '["' + d + '",' + h + "]";
        e += (e ? "," : "") + h;
      }
      e = "index.ctx=new Map([" + e + "]);";
    }
    return a ? "function inject(index){" + c + b + e + "}" : c + b + e;
  };
  Fa(T.prototype);
  var Bb = typeof window !== "undefined" && (window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB);
  var Cb = ["map", "ctx", "tag", "reg", "cfg"];
  var Db = I();
  function Eb(a, c = {}) {
    if (!this || this.constructor !== Eb) return new Eb(a, c);
    typeof a === "object" && (c = a, a = a.name);
    a || console.info("Default storage space was used, because a name was not passed.");
    this.id = "flexsearch" + (a ? ":" + a.toLowerCase().replace(/[^a-z0-9_\-]/g, "") : "");
    this.field = c.field ? c.field.toLowerCase().replace(/[^a-z0-9_\-]/g, "") : "";
    this.type = c.type;
    this.fastupdate = this.support_tag_search = false;
    this.db = null;
    this.h = {};
  }
  w = Eb.prototype;
  w.mount = function(a) {
    if (a.index) return a.mount(this);
    a.db = this;
    return this.open();
  };
  w.open = function() {
    if (this.db) return this.db;
    let a = this;
    navigator.storage && navigator.storage.persist();
    Db[a.id] || (Db[a.id] = []);
    Db[a.id].push(a.field);
    const c = Bb.open(a.id, 1);
    c.onupgradeneeded = function() {
      const b = a.db = this.result;
      for (let e = 0, d; e < Cb.length; e++) {
        d = Cb[e];
        for (let f = 0, g; f < Db[a.id].length; f++) g = Db[a.id][f], b.objectStoreNames.contains(d + (d !== "reg" ? g ? ":" + g : "" : "")) || b.createObjectStore(d + (d !== "reg" ? g ? ":" + g : "" : ""));
      }
    };
    return a.db = Z(c, function(b) {
      a.db = b;
      a.db.onversionchange = function() {
        a.close();
      };
    });
  };
  w.close = function() {
    this.db && this.db.close();
    this.db = null;
  };
  w.destroy = function() {
    const a = Bb.deleteDatabase(this.id);
    return Z(a);
  };
  w.clear = function() {
    const a = [];
    for (let b = 0, e; b < Cb.length; b++) {
      e = Cb[b];
      for (let d = 0, f; d < Db[this.id].length; d++) f = Db[this.id][d], a.push(e + (e !== "reg" ? f ? ":" + f : "" : ""));
    }
    const c = this.db.transaction(a, "readwrite");
    for (let b = 0; b < a.length; b++) c.objectStore(a[b]).clear();
    return Z(c);
  };
  w.get = function(a, c, b = 0, e = 0, d = true, f = false) {
    a = this.db.transaction((c ? "ctx" : "map") + (this.field ? ":" + this.field : ""), "readonly").objectStore((c ? "ctx" : "map") + (this.field ? ":" + this.field : "")).get(c ? c + ":" + a : a);
    const g = this;
    return Z(a).then(function(h) {
      let k = [];
      if (!h || !h.length) return k;
      if (d) {
        if (!b && !e && h.length === 1) return h[0];
        for (let l = 0, m; l < h.length; l++) if ((m = h[l]) && m.length) {
          if (e >= m.length) {
            e -= m.length;
            continue;
          }
          const p = b ? e + Math.min(m.length - e, b) : m.length;
          for (let u = e; u < p; u++) k.push(m[u]);
          e = 0;
          if (k.length === b) break;
        }
        return f ? g.enrich(k) : k;
      }
      return h;
    });
  };
  w.tag = function(a, c = 0, b = 0, e = false) {
    a = this.db.transaction("tag" + (this.field ? ":" + this.field : ""), "readonly").objectStore("tag" + (this.field ? ":" + this.field : "")).get(a);
    const d = this;
    return Z(a).then(function(f) {
      if (!f || !f.length || b >= f.length) return [];
      if (!c && !b) return f;
      f = f.slice(b, b + c);
      return e ? d.enrich(f) : f;
    });
  };
  w.enrich = function(a) {
    typeof a !== "object" && (a = [a]);
    const c = this.db.transaction("reg", "readonly").objectStore("reg"), b = [];
    for (let e = 0; e < a.length; e++) b[e] = Z(c.get(a[e]));
    return Promise.all(b).then(function(e) {
      for (let d = 0; d < e.length; d++) e[d] = { id: a[d], doc: e[d] ? JSON.parse(e[d]) : null };
      return e;
    });
  };
  w.has = function(a) {
    a = this.db.transaction("reg", "readonly").objectStore("reg").getKey(a);
    return Z(a).then(function(c) {
      return !!c;
    });
  };
  w.search = null;
  w.info = function() {
  };
  w.transaction = function(a, c, b) {
    a += a !== "reg" ? this.field ? ":" + this.field : "" : "";
    let e = this.h[a + ":" + c];
    if (e) return b.call(this, e);
    let d = this.db.transaction(a, c);
    this.h[a + ":" + c] = e = d.objectStore(a);
    const f = b.call(this, e);
    this.h[a + ":" + c] = null;
    return Z(d).finally(function() {
      d = e = null;
      return f;
    });
  };
  w.commit = function(a) {
    return __async(this, null, function* () {
      let c = a.commit_task, b = [];
      a.commit_task = [];
      for (let e = 0, d; e < c.length; e++) d = c[e], d.del && b.push(d.del);
      b.length && (yield this.remove(b));
      a.reg.size && (yield this.transaction("map", "readwrite", function(e) {
        for (const d of a.map) {
          const f = d[0], g = d[1];
          g.length && (e.get(f).onsuccess = function() {
            let h = this.result;
            var k;
            if (h && h.length) {
              const l = Math.max(h.length, g.length);
              for (let m = 0, p, u; m < l; m++) if ((u = g[m]) && u.length) {
                if ((p = h[m]) && p.length) for (k = 0; k < u.length; k++) p.push(u[k]);
                else h[m] = u;
                k = 1;
              }
            } else h = g, k = 1;
            k && e.put(h, f);
          });
        }
      }), yield this.transaction("ctx", "readwrite", function(e) {
        for (const d of a.ctx) {
          const f = d[0], g = d[1];
          for (const h of g) {
            const k = h[0], l = h[1];
            l.length && (e.get(f + ":" + k).onsuccess = function() {
              let m = this.result;
              var p;
              if (m && m.length) {
                const u = Math.max(m.length, l.length);
                for (let r = 0, t, n; r < u; r++) if ((n = l[r]) && n.length) {
                  if ((t = m[r]) && t.length) for (p = 0; p < n.length; p++) t.push(n[p]);
                  else m[r] = n;
                  p = 1;
                }
              } else m = l, p = 1;
              p && e.put(m, f + ":" + k);
            });
          }
        }
      }), a.store ? yield this.transaction(
        "reg",
        "readwrite",
        function(e) {
          for (const d of a.store) {
            const f = d[0], g = d[1];
            e.put(typeof g === "object" ? JSON.stringify(g) : 1, f);
          }
        }
      ) : a.bypass || (yield this.transaction("reg", "readwrite", function(e) {
        for (const d of a.reg.keys()) e.put(1, d);
      })), a.tag && (yield this.transaction("tag", "readwrite", function(e) {
        for (const d of a.tag) {
          const f = d[0], g = d[1];
          g.length && (e.get(f).onsuccess = function() {
            let h = this.result;
            h = h && h.length ? h.concat(g) : g;
            e.put(h, f);
          });
        }
      })), a.map.clear(), a.ctx.clear(), a.tag && a.tag.clear(), a.store && a.store.clear(), a.document || a.reg.clear());
    });
  };
  function Fb(a, c, b) {
    const e = a.value;
    let d, f = 0;
    for (let g = 0, h; g < e.length; g++) {
      if (h = b ? e : e[g]) {
        for (let k = 0, l, m; k < c.length; k++) if (m = c[k], l = h.indexOf(m), l >= 0) if (d = 1, h.length > 1) h.splice(l, 1);
        else {
          e[g] = [];
          break;
        }
        f += h.length;
      }
      if (b) break;
    }
    f ? d && a.update(e) : a.delete();
    a.continue();
  }
  w.remove = function(a) {
    typeof a !== "object" && (a = [a]);
    return Promise.all([this.transaction("map", "readwrite", function(c) {
      c.openCursor().onsuccess = function() {
        const b = this.result;
        b && Fb(b, a);
      };
    }), this.transaction("ctx", "readwrite", function(c) {
      c.openCursor().onsuccess = function() {
        const b = this.result;
        b && Fb(b, a);
      };
    }), this.transaction("tag", "readwrite", function(c) {
      c.openCursor().onsuccess = function() {
        const b = this.result;
        b && Fb(b, a, true);
      };
    }), this.transaction("reg", "readwrite", function(c) {
      for (let b = 0; b < a.length; b++) c.delete(a[b]);
    })]);
  };
  function Z(a, c) {
    return new Promise((b, e) => {
      a.onsuccess = a.oncomplete = function() {
        c && c(this.result);
        c = null;
        b(this.result);
      };
      a.onerror = a.onblocked = e;
      a = null;
    });
  }
  var flexsearch_bundle_module_min_default = { Index: T, Charset: va, Encoder: ka, Document: Na, Worker: La, Resolver: X, IndexedDB: Eb, Language: {} };

  // <stdin>
  (function() {
    "use strict";
    const index = new flexsearch_bundle_module_min_default.Document({
      tokenize: "forward",
      document: {
        id: "id",
        index: [
          {
            field: "title"
          },
          {
            field: "tags"
          },
          {
            field: "content"
          },
          {
            field: "date",
            tokenize: "strict",
            encode: false
          }
        ],
        store: ["title", "summary", "date", "permalink"]
      }
    });
    function showResults(items) {
      const template = document.querySelector("template").content;
      const fragment = document.createDocumentFragment();
      const results = document.querySelector(".search-results");
      results.textContent = "";
      const itemsLength = Object.keys(items).length;
      if (itemsLength === 0 && query.value === "") {
        document.querySelector(".search-no-results").classList.add("d-none");
        document.querySelector(".search-no-recent").classList.remove("d-none");
      } else if (itemsLength === 0 && query.value !== "") {
        document.querySelector(".search-no-recent").classList.add("d-none");
        const queryNoResults = document.querySelector(".query-no-results");
        queryNoResults.innerText = query.value;
        document.querySelector(".search-no-results").classList.remove("d-none");
      } else {
        document.querySelector(".search-no-recent").classList.add("d-none");
        document.querySelector(".search-no-results").classList.add("d-none");
      }
      for (const id in items) {
        const item = items[id];
        const result = template.cloneNode(true);
        const a = result.querySelector("a");
        const time = result.querySelector("time");
        const content = result.querySelector(".content");
        a.innerHTML = item.title;
        a.href = item.permalink;
        time.innerText = item.date;
        content.innerHTML = item.summary;
        fragment.appendChild(result);
      }
      results.appendChild(fragment);
    }
    function doSearch() {
      const query2 = document.querySelector(".search-text").value.trim();
      const limit = 99;
      const results = index.search({
        query: query2,
        enrich: true,
        limit
      });
      const items = {};
      results.forEach(function(result) {
        result.result.forEach(function(r) {
          items[r.id] = r.doc;
        });
      });
      showResults(items);
    }
    function enableUI() {
      const searchform = document.querySelector(".search-form");
      searchform.addEventListener("submit", function(e) {
        e.preventDefault();
        doSearch();
      });
      searchform.addEventListener("input", function() {
        doSearch();
      });
      document.querySelector(".search-loading").classList.add("d-none");
      document.querySelector(".search-input").classList.remove("d-none");
      document.querySelector(".search-text").focus();
    }
    function buildIndex() {
      document.querySelector(".search-loading").classList.remove("d-none");
      fetch("search-index.json").then(function(response) {
        return response.json();
      }).then(function(data) {
        data.forEach(function(item) {
          index.add(item);
        });
      });
    }
    buildIndex();
    enableUI();
  })();
})();
/*!
 * FlexSearch for Bootstrap based Thulite sites
 * Copyright 2021-2024 Thulite
 * Licensed under the MIT License
 * Based on https://github.com/frjo/hugo-theme-zen/blob/main/assets/js/search.js
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL2ZsZXhzZWFyY2gvZGlzdC9mbGV4c2VhcmNoLmJ1bmRsZS5tb2R1bGUubWluLmpzIiwgIjxzdGRpbj4iXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qKiFcclxuICogRmxleFNlYXJjaC5qcyB2MC44LjIwNSAoQnVuZGxlL01vZHVsZSlcclxuICogQXV0aG9yIGFuZCBDb3B5cmlnaHQ6IFRob21hcyBXaWxrZXJsaW5nXHJcbiAqIExpY2VuY2U6IEFwYWNoZS0yLjBcclxuICogSG9zdGVkIGJ5IE5leHRhcHBzIEdtYkhcclxuICogaHR0cHM6Ly9naXRodWIuY29tL25leHRhcHBzLWRlL2ZsZXhzZWFyY2hcclxuICovXG52YXIgdztmdW5jdGlvbiBIKGEsYyxiKXtjb25zdCBlPXR5cGVvZiBiLGQ9dHlwZW9mIGE7aWYoZSE9PVwidW5kZWZpbmVkXCIpe2lmKGQhPT1cInVuZGVmaW5lZFwiKXtpZihiKXtpZihkPT09XCJmdW5jdGlvblwiJiZlPT09ZClyZXR1cm4gZnVuY3Rpb24oaCl7cmV0dXJuIGEoYihoKSl9O2M9YS5jb25zdHJ1Y3RvcjtpZihjPT09Yi5jb25zdHJ1Y3Rvcil7aWYoYz09PUFycmF5KXJldHVybiBiLmNvbmNhdChhKTtpZihjPT09TWFwKXt2YXIgZj1uZXcgTWFwKGIpO2Zvcih2YXIgZyBvZiBhKWYuc2V0KGdbMF0sZ1sxXSk7cmV0dXJuIGZ9aWYoYz09PVNldCl7Zz1uZXcgU2V0KGIpO2ZvcihmIG9mIGEudmFsdWVzKCkpZy5hZGQoZik7cmV0dXJuIGd9fX1yZXR1cm4gYX1yZXR1cm4gYn1yZXR1cm4gZD09PVwidW5kZWZpbmVkXCI/YzphfWZ1bmN0aW9uIGFhKGEsYyl7cmV0dXJuIHR5cGVvZiBhPT09XCJ1bmRlZmluZWRcIj9jOmF9ZnVuY3Rpb24gSSgpe3JldHVybiBPYmplY3QuY3JlYXRlKG51bGwpfVxuZnVuY3Rpb24gTShhKXtyZXR1cm4gdHlwZW9mIGE9PT1cInN0cmluZ1wifWZ1bmN0aW9uIGJhKGEpe3JldHVybiB0eXBlb2YgYT09PVwib2JqZWN0XCJ9ZnVuY3Rpb24gY2EoYSxjKXtpZihNKGMpKWE9YVtjXTtlbHNlIGZvcihsZXQgYj0wO2EmJmI8Yy5sZW5ndGg7YisrKWE9YVtjW2JdXTtyZXR1cm4gYX07Y29uc3QgZWE9L1teXFxwe0x9XFxwe059XSsvdSxmYT0vKFxcZHszfSkvZyxoYT0vKFxcRCkoXFxkezN9KS9nLGlhPS8oXFxkezN9KShcXEQpL2csamE9L1tcXHUwMzAwLVxcdTAzNmZdL2c7ZnVuY3Rpb24ga2EoYT17fSl7aWYoIXRoaXN8fHRoaXMuY29uc3RydWN0b3IhPT1rYSlyZXR1cm4gbmV3IGthKC4uLmFyZ3VtZW50cyk7aWYoYXJndW1lbnRzLmxlbmd0aClmb3IoYT0wO2E8YXJndW1lbnRzLmxlbmd0aDthKyspdGhpcy5hc3NpZ24oYXJndW1lbnRzW2FdKTtlbHNlIHRoaXMuYXNzaWduKGEpfXc9a2EucHJvdG90eXBlO1xudy5hc3NpZ249ZnVuY3Rpb24oYSl7dGhpcy5ub3JtYWxpemU9SChhLm5vcm1hbGl6ZSwhMCx0aGlzLm5vcm1hbGl6ZSk7bGV0IGM9YS5pbmNsdWRlLGI9Y3x8YS5leGNsdWRlfHxhLnNwbGl0LGU7aWYoYnx8Yj09PVwiXCIpe2lmKHR5cGVvZiBiPT09XCJvYmplY3RcIiYmYi5jb25zdHJ1Y3RvciE9PVJlZ0V4cCl7bGV0IGQ9XCJcIjtlPSFjO2N8fChkKz1cIlxcXFxwe1p9XCIpO2IubGV0dGVyJiYoZCs9XCJcXFxccHtMfVwiKTtiLm51bWJlciYmKGQrPVwiXFxcXHB7Tn1cIixlPSEhYyk7Yi5zeW1ib2wmJihkKz1cIlxcXFxwe1N9XCIpO2IucHVuY3R1YXRpb24mJihkKz1cIlxcXFxwe1B9XCIpO2IuY29udHJvbCYmKGQrPVwiXFxcXHB7Q31cIik7aWYoYj1iLmNoYXIpZCs9dHlwZW9mIGI9PT1cIm9iamVjdFwiP2Iuam9pbihcIlwiKTpiO3RyeXt0aGlzLnNwbGl0PW5ldyBSZWdFeHAoXCJbXCIrKGM/XCJeXCI6XCJcIikrZCtcIl0rXCIsXCJ1XCIpfWNhdGNoKGYpe3RoaXMuc3BsaXQ9L1xccysvfX1lbHNlIHRoaXMuc3BsaXQ9YixlPWI9PT0hMXx8XCJhMWFcIi5zcGxpdChiKS5sZW5ndGg8XG4yO3RoaXMubnVtZXJpYz1IKGEubnVtZXJpYyxlKX1lbHNle3RyeXt0aGlzLnNwbGl0PUgodGhpcy5zcGxpdCxlYSl9Y2F0Y2goZCl7dGhpcy5zcGxpdD0vXFxzKy99dGhpcy5udW1lcmljPUgoYS5udW1lcmljLEgodGhpcy5udW1lcmljLCEwKSl9dGhpcy5wcmVwYXJlPUgoYS5wcmVwYXJlLG51bGwsdGhpcy5wcmVwYXJlKTt0aGlzLmZpbmFsaXplPUgoYS5maW5hbGl6ZSxudWxsLHRoaXMuZmluYWxpemUpO2I9YS5maWx0ZXI7dGhpcy5maWx0ZXI9dHlwZW9mIGI9PT1cImZ1bmN0aW9uXCI/YjpIKGImJm5ldyBTZXQoYiksbnVsbCx0aGlzLmZpbHRlcik7dGhpcy5kZWR1cGU9SChhLmRlZHVwZSwhMCx0aGlzLmRlZHVwZSk7dGhpcy5tYXRjaGVyPUgoKGI9YS5tYXRjaGVyKSYmbmV3IE1hcChiKSxudWxsLHRoaXMubWF0Y2hlcik7dGhpcy5tYXBwZXI9SCgoYj1hLm1hcHBlcikmJm5ldyBNYXAoYiksbnVsbCx0aGlzLm1hcHBlcik7dGhpcy5zdGVtbWVyPUgoKGI9YS5zdGVtbWVyKSYmbmV3IE1hcChiKSxcbm51bGwsdGhpcy5zdGVtbWVyKTt0aGlzLnJlcGxhY2VyPUgoYS5yZXBsYWNlcixudWxsLHRoaXMucmVwbGFjZXIpO3RoaXMubWlubGVuZ3RoPUgoYS5taW5sZW5ndGgsMSx0aGlzLm1pbmxlbmd0aCk7dGhpcy5tYXhsZW5ndGg9SChhLm1heGxlbmd0aCwxMDI0LHRoaXMubWF4bGVuZ3RoKTt0aGlzLnJ0bD1IKGEucnRsLCExLHRoaXMucnRsKTtpZih0aGlzLmNhY2hlPWI9SChhLmNhY2hlLCEwLHRoaXMuY2FjaGUpKXRoaXMuRj1udWxsLHRoaXMuTD10eXBlb2YgYj09PVwibnVtYmVyXCI/YjoyRTUsdGhpcy5CPW5ldyBNYXAsdGhpcy5EPW5ldyBNYXAsdGhpcy5JPXRoaXMuSD0xMjg7dGhpcy5oPVwiXCI7dGhpcy5KPW51bGw7dGhpcy5BPVwiXCI7dGhpcy5LPW51bGw7aWYodGhpcy5tYXRjaGVyKWZvcihjb25zdCBkIG9mIHRoaXMubWF0Y2hlci5rZXlzKCkpdGhpcy5oKz0odGhpcy5oP1wifFwiOlwiXCIpK2Q7aWYodGhpcy5zdGVtbWVyKWZvcihjb25zdCBkIG9mIHRoaXMuc3RlbW1lci5rZXlzKCkpdGhpcy5BKz1cbih0aGlzLkE/XCJ8XCI6XCJcIikrZDtyZXR1cm4gdGhpc307dy5hZGRTdGVtbWVyPWZ1bmN0aW9uKGEsYyl7dGhpcy5zdGVtbWVyfHwodGhpcy5zdGVtbWVyPW5ldyBNYXApO3RoaXMuc3RlbW1lci5zZXQoYSxjKTt0aGlzLkErPSh0aGlzLkE/XCJ8XCI6XCJcIikrYTt0aGlzLks9bnVsbDt0aGlzLmNhY2hlJiZRKHRoaXMpO3JldHVybiB0aGlzfTt3LmFkZEZpbHRlcj1mdW5jdGlvbihhKXt0eXBlb2YgYT09PVwiZnVuY3Rpb25cIj90aGlzLmZpbHRlcj1hOih0aGlzLmZpbHRlcnx8KHRoaXMuZmlsdGVyPW5ldyBTZXQpLHRoaXMuZmlsdGVyLmFkZChhKSk7dGhpcy5jYWNoZSYmUSh0aGlzKTtyZXR1cm4gdGhpc307XG53LmFkZE1hcHBlcj1mdW5jdGlvbihhLGMpe2lmKHR5cGVvZiBhPT09XCJvYmplY3RcIilyZXR1cm4gdGhpcy5hZGRSZXBsYWNlcihhLGMpO2lmKGEubGVuZ3RoPjEpcmV0dXJuIHRoaXMuYWRkTWF0Y2hlcihhLGMpO3RoaXMubWFwcGVyfHwodGhpcy5tYXBwZXI9bmV3IE1hcCk7dGhpcy5tYXBwZXIuc2V0KGEsYyk7dGhpcy5jYWNoZSYmUSh0aGlzKTtyZXR1cm4gdGhpc307dy5hZGRNYXRjaGVyPWZ1bmN0aW9uKGEsYyl7aWYodHlwZW9mIGE9PT1cIm9iamVjdFwiKXJldHVybiB0aGlzLmFkZFJlcGxhY2VyKGEsYyk7aWYoYS5sZW5ndGg8MiYmKHRoaXMuZGVkdXBlfHx0aGlzLm1hcHBlcikpcmV0dXJuIHRoaXMuYWRkTWFwcGVyKGEsYyk7dGhpcy5tYXRjaGVyfHwodGhpcy5tYXRjaGVyPW5ldyBNYXApO3RoaXMubWF0Y2hlci5zZXQoYSxjKTt0aGlzLmgrPSh0aGlzLmg/XCJ8XCI6XCJcIikrYTt0aGlzLko9bnVsbDt0aGlzLmNhY2hlJiZRKHRoaXMpO3JldHVybiB0aGlzfTtcbncuYWRkUmVwbGFjZXI9ZnVuY3Rpb24oYSxjKXtpZih0eXBlb2YgYT09PVwic3RyaW5nXCIpcmV0dXJuIHRoaXMuYWRkTWF0Y2hlcihhLGMpO3RoaXMucmVwbGFjZXJ8fCh0aGlzLnJlcGxhY2VyPVtdKTt0aGlzLnJlcGxhY2VyLnB1c2goYSxjKTt0aGlzLmNhY2hlJiZRKHRoaXMpO3JldHVybiB0aGlzfTtcbncuZW5jb2RlPWZ1bmN0aW9uKGEsYyl7aWYodGhpcy5jYWNoZSYmYS5sZW5ndGg8PXRoaXMuSClpZih0aGlzLkYpe2lmKHRoaXMuQi5oYXMoYSkpcmV0dXJuIHRoaXMuQi5nZXQoYSl9ZWxzZSB0aGlzLkY9c2V0VGltZW91dChRLDUwLHRoaXMpO3RoaXMubm9ybWFsaXplJiYodHlwZW9mIHRoaXMubm9ybWFsaXplPT09XCJmdW5jdGlvblwiP2E9dGhpcy5ub3JtYWxpemUoYSk6YT1qYT9hLm5vcm1hbGl6ZShcIk5GS0RcIikucmVwbGFjZShqYSxcIlwiKS50b0xvd2VyQ2FzZSgpOmEudG9Mb3dlckNhc2UoKSk7dGhpcy5wcmVwYXJlJiYoYT10aGlzLnByZXBhcmUoYSkpO3RoaXMubnVtZXJpYyYmYS5sZW5ndGg+MyYmKGE9YS5yZXBsYWNlKGhhLFwiJDEgJDJcIikucmVwbGFjZShpYSxcIiQxICQyXCIpLnJlcGxhY2UoZmEsXCIkMSBcIikpO2NvbnN0IGI9ISh0aGlzLmRlZHVwZXx8dGhpcy5tYXBwZXJ8fHRoaXMuZmlsdGVyfHx0aGlzLm1hdGNoZXJ8fHRoaXMuc3RlbW1lcnx8dGhpcy5yZXBsYWNlcik7bGV0IGU9XG5bXSxkPUkoKSxmLGcsaD10aGlzLnNwbGl0fHx0aGlzLnNwbGl0PT09XCJcIj9hLnNwbGl0KHRoaXMuc3BsaXQpOlthXTtmb3IobGV0IGw9MCxtLHA7bDxoLmxlbmd0aDtsKyspaWYoKG09cD1oW2xdKSYmIShtLmxlbmd0aDx0aGlzLm1pbmxlbmd0aHx8bS5sZW5ndGg+dGhpcy5tYXhsZW5ndGgpKXtpZihjKXtpZihkW21dKWNvbnRpbnVlO2RbbV09MX1lbHNle2lmKGY9PT1tKWNvbnRpbnVlO2Y9bX1pZihiKWUucHVzaChtKTtlbHNlIGlmKCF0aGlzLmZpbHRlcnx8KHR5cGVvZiB0aGlzLmZpbHRlcj09PVwiZnVuY3Rpb25cIj90aGlzLmZpbHRlcihtKTohdGhpcy5maWx0ZXIuaGFzKG0pKSl7aWYodGhpcy5jYWNoZSYmbS5sZW5ndGg8PXRoaXMuSSlpZih0aGlzLkYpe3ZhciBrPXRoaXMuRC5nZXQobSk7aWYoa3x8az09PVwiXCIpe2smJmUucHVzaChrKTtjb250aW51ZX19ZWxzZSB0aGlzLkY9c2V0VGltZW91dChRLDUwLHRoaXMpO2lmKHRoaXMuc3RlbW1lcil7dGhpcy5LfHwodGhpcy5LPW5ldyBSZWdFeHAoXCIoPyFeKShcIitcbnRoaXMuQStcIikkXCIpKTtsZXQgdTtmb3IoO3UhPT1tJiZtLmxlbmd0aD4yOyl1PW0sbT1tLnJlcGxhY2UodGhpcy5LLHI9PnRoaXMuc3RlbW1lci5nZXQocikpfWlmKG0mJih0aGlzLm1hcHBlcnx8dGhpcy5kZWR1cGUmJm0ubGVuZ3RoPjEpKXtrPVwiXCI7Zm9yKGxldCB1PTAscj1cIlwiLHQsbjt1PG0ubGVuZ3RoO3UrKyl0PW0uY2hhckF0KHUpLHQ9PT1yJiZ0aGlzLmRlZHVwZXx8KChuPXRoaXMubWFwcGVyJiZ0aGlzLm1hcHBlci5nZXQodCkpfHxuPT09XCJcIj9uPT09ciYmdGhpcy5kZWR1cGV8fCEocj1uKXx8KGsrPW4pOmsrPXI9dCk7bT1rfXRoaXMubWF0Y2hlciYmbS5sZW5ndGg+MSYmKHRoaXMuSnx8KHRoaXMuSj1uZXcgUmVnRXhwKFwiKFwiK3RoaXMuaCtcIilcIixcImdcIikpLG09bS5yZXBsYWNlKHRoaXMuSix1PT50aGlzLm1hdGNoZXIuZ2V0KHUpKSk7aWYobSYmdGhpcy5yZXBsYWNlcilmb3Ioaz0wO20mJms8dGhpcy5yZXBsYWNlci5sZW5ndGg7ays9MiltPW0ucmVwbGFjZSh0aGlzLnJlcGxhY2VyW2tdLFxudGhpcy5yZXBsYWNlcltrKzFdKTt0aGlzLmNhY2hlJiZwLmxlbmd0aDw9dGhpcy5JJiYodGhpcy5ELnNldChwLG0pLHRoaXMuRC5zaXplPnRoaXMuTCYmKHRoaXMuRC5jbGVhcigpLHRoaXMuST10aGlzLkkvMS4xfDApKTtpZihtKXtpZihtIT09cClpZihjKXtpZihkW21dKWNvbnRpbnVlO2RbbV09MX1lbHNle2lmKGc9PT1tKWNvbnRpbnVlO2c9bX1lLnB1c2gobSl9fX10aGlzLmZpbmFsaXplJiYoZT10aGlzLmZpbmFsaXplKGUpfHxlKTt0aGlzLmNhY2hlJiZhLmxlbmd0aDw9dGhpcy5IJiYodGhpcy5CLnNldChhLGUpLHRoaXMuQi5zaXplPnRoaXMuTCYmKHRoaXMuQi5jbGVhcigpLHRoaXMuSD10aGlzLkgvMS4xfDApKTtyZXR1cm4gZX07ZnVuY3Rpb24gUShhKXthLkY9bnVsbDthLkIuY2xlYXIoKTthLkQuY2xlYXIoKX07ZnVuY3Rpb24gbGEoYSxjLGIpe2J8fChjfHx0eXBlb2YgYSE9PVwib2JqZWN0XCI/dHlwZW9mIGM9PT1cIm9iamVjdFwiJiYoYj1jLGM9MCk6Yj1hKTtiJiYoYT1iLnF1ZXJ5fHxhLGM9Yi5saW1pdHx8Yyk7bGV0IGU9XCJcIisoY3x8MCk7YiYmKGUrPShiLm9mZnNldHx8MCkrISFiLmNvbnRleHQrISFiLnN1Z2dlc3QrKGIucmVzb2x2ZSE9PSExKSsoYi5yZXNvbHV0aW9ufHx0aGlzLnJlc29sdXRpb24pKyhiLmJvb3N0fHwwKSk7YT0oXCJcIithKS50b0xvd2VyQ2FzZSgpO3RoaXMuY2FjaGV8fCh0aGlzLmNhY2hlPW5ldyBtYSk7bGV0IGQ9dGhpcy5jYWNoZS5nZXQoYStlKTtpZighZCl7Y29uc3QgZj1iJiZiLmNhY2hlO2YmJihiLmNhY2hlPSExKTtkPXRoaXMuc2VhcmNoKGEsYyxiKTtmJiYoYi5jYWNoZT1mKTt0aGlzLmNhY2hlLnNldChhK2UsZCl9cmV0dXJuIGR9ZnVuY3Rpb24gbWEoYSl7dGhpcy5saW1pdD1hJiZhIT09ITA/YToxRTM7dGhpcy5jYWNoZT1uZXcgTWFwO3RoaXMuaD1cIlwifVxubWEucHJvdG90eXBlLnNldD1mdW5jdGlvbihhLGMpe3RoaXMuY2FjaGUuc2V0KHRoaXMuaD1hLGMpO3RoaXMuY2FjaGUuc2l6ZT50aGlzLmxpbWl0JiZ0aGlzLmNhY2hlLmRlbGV0ZSh0aGlzLmNhY2hlLmtleXMoKS5uZXh0KCkudmFsdWUpfTttYS5wcm90b3R5cGUuZ2V0PWZ1bmN0aW9uKGEpe2NvbnN0IGM9dGhpcy5jYWNoZS5nZXQoYSk7YyYmdGhpcy5oIT09YSYmKHRoaXMuY2FjaGUuZGVsZXRlKGEpLHRoaXMuY2FjaGUuc2V0KHRoaXMuaD1hLGMpKTtyZXR1cm4gY307bWEucHJvdG90eXBlLnJlbW92ZT1mdW5jdGlvbihhKXtmb3IoY29uc3QgYyBvZiB0aGlzLmNhY2hlKXtjb25zdCBiPWNbMF07Y1sxXS5pbmNsdWRlcyhhKSYmdGhpcy5jYWNoZS5kZWxldGUoYil9fTttYS5wcm90b3R5cGUuY2xlYXI9ZnVuY3Rpb24oKXt0aGlzLmNhY2hlLmNsZWFyKCk7dGhpcy5oPVwiXCJ9O2NvbnN0IG5hPXtub3JtYWxpemU6ITEsbnVtZXJpYzohMSxkZWR1cGU6ITF9O2NvbnN0IG9hPXt9O2NvbnN0IHJhPW5ldyBNYXAoW1tcImJcIixcInBcIl0sW1widlwiLFwiZlwiXSxbXCJ3XCIsXCJmXCJdLFtcInpcIixcInNcIl0sW1wieFwiLFwic1wiXSxbXCJkXCIsXCJ0XCJdLFtcIm5cIixcIm1cIl0sW1wiY1wiLFwia1wiXSxbXCJnXCIsXCJrXCJdLFtcImpcIixcImtcIl0sW1wicVwiLFwia1wiXSxbXCJpXCIsXCJlXCJdLFtcInlcIixcImVcIl0sW1widVwiLFwib1wiXV0pO2NvbnN0IHNhPW5ldyBNYXAoW1tcImFlXCIsXCJhXCJdLFtcIm9lXCIsXCJvXCJdLFtcInNoXCIsXCJzXCJdLFtcImtoXCIsXCJrXCJdLFtcInRoXCIsXCJ0XCJdLFtcInBoXCIsXCJmXCJdLFtcInBmXCIsXCJmXCJdXSksdGE9Wy8oW15hZW9dKWgoLikvZyxcIiQxJDJcIiwvKFthZW9dKWgoW15hZW9dfCQpL2csXCIkMSQyXCIsLyguKVxcMSsvZyxcIiQxXCJdO2NvbnN0IHVhPXthOlwiXCIsZTpcIlwiLGk6XCJcIixvOlwiXCIsdTpcIlwiLHk6XCJcIixiOjEsZjoxLHA6MSx2OjEsYzoyLGc6MixqOjIsazoyLHE6MixzOjIseDoyLHo6MixcIlxcdTAwZGZcIjoyLGQ6Myx0OjMsbDo0LG06NSxuOjUscjo2fTt2YXIgdmE9e0V4YWN0Om5hLERlZmF1bHQ6b2EsTm9ybWFsaXplOm9hLExhdGluQmFsYW5jZTp7bWFwcGVyOnJhfSxMYXRpbkFkdmFuY2VkOnttYXBwZXI6cmEsbWF0Y2hlcjpzYSxyZXBsYWNlcjp0YX0sTGF0aW5FeHRyYTp7bWFwcGVyOnJhLHJlcGxhY2VyOnRhLmNvbmNhdChbLyg/IV4pW2Flb10vZyxcIlwiXSksbWF0Y2hlcjpzYX0sTGF0aW5Tb3VuZGV4OntkZWR1cGU6ITEsaW5jbHVkZTp7bGV0dGVyOiEwfSxmaW5hbGl6ZTpmdW5jdGlvbihhKXtmb3IobGV0IGI9MDtiPGEubGVuZ3RoO2IrKyl7dmFyIGM9YVtiXTtsZXQgZT1jLmNoYXJBdCgwKSxkPXVhW2VdO2ZvcihsZXQgZj0xLGc7ZjxjLmxlbmd0aCYmKGc9Yy5jaGFyQXQoZiksZz09PVwiaFwifHxnPT09XCJ3XCJ8fCEoZz11YVtnXSl8fGc9PT1kfHwoZSs9ZyxkPWcsZS5sZW5ndGghPT00KSk7ZisrKTthW2JdPWV9fX0sQ0pLOntzcGxpdDpcIlwifSxMYXRpbkV4YWN0Om5hLExhdGluRGVmYXVsdDpvYSxMYXRpblNpbXBsZTpvYX07ZnVuY3Rpb24gd2EoYSxjLGIsZSl7bGV0IGQ9W107Zm9yKGxldCBmPTAsZztmPGEuaW5kZXgubGVuZ3RoO2YrKylpZihnPWEuaW5kZXhbZl0sYz49Zy5sZW5ndGgpYy09Zy5sZW5ndGg7ZWxzZXtjPWdbZT9cInNwbGljZVwiOlwic2xpY2VcIl0oYyxiKTtjb25zdCBoPWMubGVuZ3RoO2lmKGgmJihkPWQubGVuZ3RoP2QuY29uY2F0KGMpOmMsYi09aCxlJiYoYS5sZW5ndGgtPWgpLCFiKSlicmVhaztjPTB9cmV0dXJuIGR9XG5mdW5jdGlvbiB4YShhKXtpZighdGhpc3x8dGhpcy5jb25zdHJ1Y3RvciE9PXhhKXJldHVybiBuZXcgeGEoYSk7dGhpcy5pbmRleD1hP1thXTpbXTt0aGlzLmxlbmd0aD1hP2EubGVuZ3RoOjA7Y29uc3QgYz10aGlzO3JldHVybiBuZXcgUHJveHkoW10se2dldChiLGUpe2lmKGU9PT1cImxlbmd0aFwiKXJldHVybiBjLmxlbmd0aDtpZihlPT09XCJwdXNoXCIpcmV0dXJuIGZ1bmN0aW9uKGQpe2MuaW5kZXhbYy5pbmRleC5sZW5ndGgtMV0ucHVzaChkKTtjLmxlbmd0aCsrfTtpZihlPT09XCJwb3BcIilyZXR1cm4gZnVuY3Rpb24oKXtpZihjLmxlbmd0aClyZXR1cm4gYy5sZW5ndGgtLSxjLmluZGV4W2MuaW5kZXgubGVuZ3RoLTFdLnBvcCgpfTtpZihlPT09XCJpbmRleE9mXCIpcmV0dXJuIGZ1bmN0aW9uKGQpe2xldCBmPTA7Zm9yKGxldCBnPTAsaCxrO2c8Yy5pbmRleC5sZW5ndGg7ZysrKXtoPWMuaW5kZXhbZ107az1oLmluZGV4T2YoZCk7aWYoaz49MClyZXR1cm4gZitrO2YrPWgubGVuZ3RofXJldHVybi0xfTtcbmlmKGU9PT1cImluY2x1ZGVzXCIpcmV0dXJuIGZ1bmN0aW9uKGQpe2ZvcihsZXQgZj0wO2Y8Yy5pbmRleC5sZW5ndGg7ZisrKWlmKGMuaW5kZXhbZl0uaW5jbHVkZXMoZCkpcmV0dXJuITA7cmV0dXJuITF9O2lmKGU9PT1cInNsaWNlXCIpcmV0dXJuIGZ1bmN0aW9uKGQsZil7cmV0dXJuIHdhKGMsZHx8MCxmfHxjLmxlbmd0aCwhMSl9O2lmKGU9PT1cInNwbGljZVwiKXJldHVybiBmdW5jdGlvbihkLGYpe3JldHVybiB3YShjLGR8fDAsZnx8Yy5sZW5ndGgsITApfTtpZihlPT09XCJjb25zdHJ1Y3RvclwiKXJldHVybiBBcnJheTtpZih0eXBlb2YgZSE9PVwic3ltYm9sXCIpcmV0dXJuKGI9Yy5pbmRleFtlLzIqKjMxfDBdKSYmYltlXX0sc2V0KGIsZSxkKXtiPWUvMioqMzF8MDsoYy5pbmRleFtiXXx8KGMuaW5kZXhbYl09W10pKVtlXT1kO2MubGVuZ3RoKys7cmV0dXJuITB9fSl9eGEucHJvdG90eXBlLmNsZWFyPWZ1bmN0aW9uKCl7dGhpcy5pbmRleC5sZW5ndGg9MH07eGEucHJvdG90eXBlLnB1c2g9ZnVuY3Rpb24oKXt9O1xuZnVuY3Rpb24gUihhPTgpe2lmKCF0aGlzfHx0aGlzLmNvbnN0cnVjdG9yIT09UilyZXR1cm4gbmV3IFIoYSk7dGhpcy5pbmRleD1JKCk7dGhpcy5oPVtdO3RoaXMuc2l6ZT0wO2E+MzI/KHRoaXMuQj1BYSx0aGlzLkE9QmlnSW50KGEpKToodGhpcy5CPUJhLHRoaXMuQT1hKX1SLnByb3RvdHlwZS5nZXQ9ZnVuY3Rpb24oYSl7Y29uc3QgYz10aGlzLmluZGV4W3RoaXMuQihhKV07cmV0dXJuIGMmJmMuZ2V0KGEpfTtSLnByb3RvdHlwZS5zZXQ9ZnVuY3Rpb24oYSxjKXt2YXIgYj10aGlzLkIoYSk7bGV0IGU9dGhpcy5pbmRleFtiXTtlPyhiPWUuc2l6ZSxlLnNldChhLGMpLChiLT1lLnNpemUpJiZ0aGlzLnNpemUrKyk6KHRoaXMuaW5kZXhbYl09ZT1uZXcgTWFwKFtbYSxjXV0pLHRoaXMuaC5wdXNoKGUpLHRoaXMuc2l6ZSsrKX07XG5mdW5jdGlvbiBTKGE9OCl7aWYoIXRoaXN8fHRoaXMuY29uc3RydWN0b3IhPT1TKXJldHVybiBuZXcgUyhhKTt0aGlzLmluZGV4PUkoKTt0aGlzLmg9W107dGhpcy5zaXplPTA7YT4zMj8odGhpcy5CPUFhLHRoaXMuQT1CaWdJbnQoYSkpOih0aGlzLkI9QmEsdGhpcy5BPWEpfVMucHJvdG90eXBlLmFkZD1mdW5jdGlvbihhKXt2YXIgYz10aGlzLkIoYSk7bGV0IGI9dGhpcy5pbmRleFtjXTtiPyhjPWIuc2l6ZSxiLmFkZChhKSwoYy09Yi5zaXplKSYmdGhpcy5zaXplKyspOih0aGlzLmluZGV4W2NdPWI9bmV3IFNldChbYV0pLHRoaXMuaC5wdXNoKGIpLHRoaXMuc2l6ZSsrKX07dz1SLnByb3RvdHlwZTt3Lmhhcz1TLnByb3RvdHlwZS5oYXM9ZnVuY3Rpb24oYSl7Y29uc3QgYz10aGlzLmluZGV4W3RoaXMuQihhKV07cmV0dXJuIGMmJmMuaGFzKGEpfTtcbncuZGVsZXRlPVMucHJvdG90eXBlLmRlbGV0ZT1mdW5jdGlvbihhKXtjb25zdCBjPXRoaXMuaW5kZXhbdGhpcy5CKGEpXTtjJiZjLmRlbGV0ZShhKSYmdGhpcy5zaXplLS19O3cuY2xlYXI9Uy5wcm90b3R5cGUuY2xlYXI9ZnVuY3Rpb24oKXt0aGlzLmluZGV4PUkoKTt0aGlzLmg9W107dGhpcy5zaXplPTB9O3cudmFsdWVzPVMucHJvdG90eXBlLnZhbHVlcz1mdW5jdGlvbiooKXtmb3IobGV0IGE9MDthPHRoaXMuaC5sZW5ndGg7YSsrKWZvcihsZXQgYyBvZiB0aGlzLmhbYV0udmFsdWVzKCkpeWllbGQgY307dy5rZXlzPVMucHJvdG90eXBlLmtleXM9ZnVuY3Rpb24qKCl7Zm9yKGxldCBhPTA7YTx0aGlzLmgubGVuZ3RoO2ErKylmb3IobGV0IGMgb2YgdGhpcy5oW2FdLmtleXMoKSl5aWVsZCBjfTt3LmVudHJpZXM9Uy5wcm90b3R5cGUuZW50cmllcz1mdW5jdGlvbiooKXtmb3IobGV0IGE9MDthPHRoaXMuaC5sZW5ndGg7YSsrKWZvcihsZXQgYyBvZiB0aGlzLmhbYV0uZW50cmllcygpKXlpZWxkIGN9O1xuZnVuY3Rpb24gQmEoYSl7bGV0IGM9MioqdGhpcy5BLTE7aWYodHlwZW9mIGE9PVwibnVtYmVyXCIpcmV0dXJuIGEmYztsZXQgYj0wLGU9dGhpcy5BKzE7Zm9yKGxldCBkPTA7ZDxhLmxlbmd0aDtkKyspYj0oYiplXmEuY2hhckNvZGVBdChkKSkmYztyZXR1cm4gdGhpcy5BPT09MzI/YisyKiozMTpifWZ1bmN0aW9uIEFhKGEpe2xldCBjPUJpZ0ludCgyKSoqdGhpcy5BLUJpZ0ludCgxKTt2YXIgYj10eXBlb2YgYTtpZihiPT09XCJiaWdpbnRcIilyZXR1cm4gYSZjO2lmKGI9PT1cIm51bWJlclwiKXJldHVybiBCaWdJbnQoYSkmYztiPUJpZ0ludCgwKTtsZXQgZT10aGlzLkErQmlnSW50KDEpO2ZvcihsZXQgZD0wO2Q8YS5sZW5ndGg7ZCsrKWI9KGIqZV5CaWdJbnQoYS5jaGFyQ29kZUF0KGQpKSkmYztyZXR1cm4gYn07bGV0IENhLERhO1xuYXN5bmMgZnVuY3Rpb24gRWEoYSl7YT1hLmRhdGE7dmFyIGM9YS50YXNrO2NvbnN0IGI9YS5pZDtsZXQgZT1hLmFyZ3M7c3dpdGNoKGMpe2Nhc2UgXCJpbml0XCI6RGE9YS5vcHRpb25zfHx7fTsoYz1hLmZhY3RvcnkpPyhGdW5jdGlvbihcInJldHVybiBcIitjKSgpKHNlbGYpLENhPW5ldyBzZWxmLkZsZXhTZWFyY2guSW5kZXgoRGEpLGRlbGV0ZSBzZWxmLkZsZXhTZWFyY2gpOkNhPW5ldyBUKERhKTtwb3N0TWVzc2FnZSh7aWQ6Yn0pO2JyZWFrO2RlZmF1bHQ6bGV0IGQ7Yz09PVwiZXhwb3J0XCImJihlWzFdPyhlWzBdPURhLmV4cG9ydCxlWzJdPTAsZVszXT0xKTplPW51bGwpO2M9PT1cImltcG9ydFwiP2VbMF0mJihhPWF3YWl0IERhLmltcG9ydC5jYWxsKENhLGVbMF0pLENhLmltcG9ydChlWzBdLGEpKTooKGQ9ZSYmQ2FbY10uYXBwbHkoQ2EsZSkpJiZkLnRoZW4mJihkPWF3YWl0IGQpLGQmJmQuYXdhaXQmJihkPWF3YWl0IGQuYXdhaXQpLGM9PT1cInNlYXJjaFwiJiZkLnJlc3VsdCYmKGQ9ZC5yZXN1bHQpKTtcbnBvc3RNZXNzYWdlKGM9PT1cInNlYXJjaFwiP3tpZDpiLG1zZzpkfTp7aWQ6Yn0pfX07ZnVuY3Rpb24gRmEoYSl7R2EuY2FsbChhLFwiYWRkXCIpO0dhLmNhbGwoYSxcImFwcGVuZFwiKTtHYS5jYWxsKGEsXCJzZWFyY2hcIik7R2EuY2FsbChhLFwidXBkYXRlXCIpO0dhLmNhbGwoYSxcInJlbW92ZVwiKTtHYS5jYWxsKGEsXCJzZWFyY2hDYWNoZVwiKX1sZXQgSGEsSWEsSmE7ZnVuY3Rpb24gS2EoKXtIYT1KYT0wfVxuZnVuY3Rpb24gR2EoYSl7dGhpc1thK1wiQXN5bmNcIl09ZnVuY3Rpb24oKXtjb25zdCBjPWFyZ3VtZW50czt2YXIgYj1jW2MubGVuZ3RoLTFdO2xldCBlO3R5cGVvZiBiPT09XCJmdW5jdGlvblwiJiYoZT1iLGRlbGV0ZSBjW2MubGVuZ3RoLTFdKTtIYT9KYXx8KEphPURhdGUubm93KCktSWE+PXRoaXMucHJpb3JpdHkqdGhpcy5wcmlvcml0eSozKTooSGE9c2V0VGltZW91dChLYSwwKSxJYT1EYXRlLm5vdygpKTtpZihKYSl7Y29uc3QgZj10aGlzO3JldHVybiBuZXcgUHJvbWlzZShnPT57c2V0VGltZW91dChmdW5jdGlvbigpe2coZlthK1wiQXN5bmNcIl0uYXBwbHkoZixjKSl9LDApfSl9Y29uc3QgZD10aGlzW2FdLmFwcGx5KHRoaXMsYyk7Yj1kLnRoZW4/ZDpuZXcgUHJvbWlzZShmPT5mKGQpKTtlJiZiLnRoZW4oZSk7cmV0dXJuIGJ9fTtsZXQgVj0wO1xuZnVuY3Rpb24gTGEoYT17fSxjKXtmdW5jdGlvbiBiKGgpe2Z1bmN0aW9uIGsobCl7bD1sLmRhdGF8fGw7Y29uc3QgbT1sLmlkLHA9bSYmZi5oW21dO3AmJihwKGwubXNnKSxkZWxldGUgZi5oW21dKX10aGlzLndvcmtlcj1oO3RoaXMuaD1JKCk7aWYodGhpcy53b3JrZXIpe2Q/dGhpcy53b3JrZXIub24oXCJtZXNzYWdlXCIsayk6dGhpcy53b3JrZXIub25tZXNzYWdlPWs7aWYoYS5jb25maWcpcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKGwpe1Y+MUU5JiYoVj0wKTtmLmhbKytWXT1mdW5jdGlvbigpe2woZil9O2Yud29ya2VyLnBvc3RNZXNzYWdlKHtpZDpWLHRhc2s6XCJpbml0XCIsZmFjdG9yeTplLG9wdGlvbnM6YX0pfSk7dGhpcy5wcmlvcml0eT1hLnByaW9yaXR5fHw0O3RoaXMuZW5jb2Rlcj1jfHxudWxsO3RoaXMud29ya2VyLnBvc3RNZXNzYWdlKHt0YXNrOlwiaW5pdFwiLGZhY3Rvcnk6ZSxvcHRpb25zOmF9KTtyZXR1cm4gdGhpc319aWYoIXRoaXN8fHRoaXMuY29uc3RydWN0b3IhPT1MYSlyZXR1cm4gbmV3IExhKGEpO1xubGV0IGU9dHlwZW9mIHNlbGYhPT1cInVuZGVmaW5lZFwiP3NlbGYuX2ZhY3Rvcnk6dHlwZW9mIHdpbmRvdyE9PVwidW5kZWZpbmVkXCI/d2luZG93Ll9mYWN0b3J5Om51bGw7ZSYmKGU9ZS50b1N0cmluZygpKTtjb25zdCBkPXR5cGVvZiB3aW5kb3c9PT1cInVuZGVmaW5lZFwiLGY9dGhpcyxnPU1hKGUsZCxhLndvcmtlcik7cmV0dXJuIGcudGhlbj9nLnRoZW4oZnVuY3Rpb24oaCl7cmV0dXJuIGIuY2FsbChmLGgpfSk6Yi5jYWxsKHRoaXMsZyl9VyhcImFkZFwiKTtXKFwiYXBwZW5kXCIpO1coXCJzZWFyY2hcIik7VyhcInVwZGF0ZVwiKTtXKFwicmVtb3ZlXCIpO1coXCJjbGVhclwiKTtXKFwiZXhwb3J0XCIpO1coXCJpbXBvcnRcIik7TGEucHJvdG90eXBlLnNlYXJjaENhY2hlPWxhO0ZhKExhLnByb3RvdHlwZSk7XG5mdW5jdGlvbiBXKGEpe0xhLnByb3RvdHlwZVthXT1mdW5jdGlvbigpe2NvbnN0IGM9dGhpcyxiPVtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTt2YXIgZT1iW2IubGVuZ3RoLTFdO2xldCBkO3R5cGVvZiBlPT09XCJmdW5jdGlvblwiJiYoZD1lLGIucG9wKCkpO2U9bmV3IFByb21pc2UoZnVuY3Rpb24oZil7YT09PVwiZXhwb3J0XCImJnR5cGVvZiBiWzBdPT09XCJmdW5jdGlvblwiJiYoYlswXT1udWxsKTtWPjFFOSYmKFY9MCk7Yy5oWysrVl09ZjtjLndvcmtlci5wb3N0TWVzc2FnZSh7dGFzazphLGlkOlYsYXJnczpifSl9KTtyZXR1cm4gZD8oZS50aGVuKGQpLHRoaXMpOmV9fVxuZnVuY3Rpb24gTWEoYSxjLGIpe3JldHVybiBjP3R5cGVvZiBtb2R1bGUhPT1cInVuZGVmaW5lZFwiP25ldyhyZXF1aXJlKFwid29ya2VyX3RocmVhZHNcIilbXCJXb3JrZXJcIl0pKF9fZGlybmFtZStcIi93b3JrZXIvbm9kZS5qc1wiKTppbXBvcnQoXCJ3b3JrZXJfdGhyZWFkc1wiKS50aGVuKGZ1bmN0aW9uKHdvcmtlcil7cmV0dXJuIG5ldyB3b3JrZXJbXCJXb3JrZXJcIl0oaW1wb3J0Lm1ldGEuZGlybmFtZStcIi9ub2RlL25vZGUubWpzXCIpfSk6YT9uZXcgd2luZG93LldvcmtlcihVUkwuY3JlYXRlT2JqZWN0VVJMKG5ldyBCbG9iKFtcIm9ubWVzc2FnZT1cIitFYS50b1N0cmluZygpXSx7dHlwZTpcInRleHQvamF2YXNjcmlwdFwifSkpKTpuZXcgd2luZG93Lldvcmtlcih0eXBlb2YgYj09PVwic3RyaW5nXCI/YjppbXBvcnQubWV0YS51cmwucmVwbGFjZShcIi93b3JrZXIuanNcIixcIi93b3JrZXIvd29ya2VyLmpzXCIpLnJlcGxhY2UoXCJmbGV4c2VhcmNoLmJ1bmRsZS5tb2R1bGUubWluLmpzXCIsXG5cIm1vZHVsZS93b3JrZXIvd29ya2VyLmpzXCIpLHt0eXBlOlwibW9kdWxlXCJ9KX07TmEucHJvdG90eXBlLmFkZD1mdW5jdGlvbihhLGMsYil7YmEoYSkmJihjPWEsYT1jYShjLHRoaXMua2V5KSk7aWYoYyYmKGF8fGE9PT0wKSl7aWYoIWImJnRoaXMucmVnLmhhcyhhKSlyZXR1cm4gdGhpcy51cGRhdGUoYSxjKTtmb3IobGV0IGg9MCxrO2g8dGhpcy5maWVsZC5sZW5ndGg7aCsrKXtrPXRoaXMuQltoXTt2YXIgZT10aGlzLmluZGV4LmdldCh0aGlzLmZpZWxkW2hdKTtpZih0eXBlb2Ygaz09PVwiZnVuY3Rpb25cIil7dmFyIGQ9ayhjKTtkJiZlLmFkZChhLGQsYiwhMCl9ZWxzZSBpZihkPWsuRywhZHx8ZChjKSlrLmNvbnN0cnVjdG9yPT09U3RyaW5nP2s9W1wiXCIra106TShrKSYmKGs9W2tdKSxRYShjLGssdGhpcy5ELDAsZSxhLGtbMF0sYil9aWYodGhpcy50YWcpZm9yKGU9MDtlPHRoaXMuQS5sZW5ndGg7ZSsrKXt2YXIgZj10aGlzLkFbZV07ZD10aGlzLnRhZy5nZXQodGhpcy5GW2VdKTtsZXQgaD1JKCk7aWYodHlwZW9mIGY9PT1cImZ1bmN0aW9uXCIpe2lmKGY9ZihjKSwhZiljb250aW51ZX1lbHNle3ZhciBnPVxuZi5HO2lmKGcmJiFnKGMpKWNvbnRpbnVlO2YuY29uc3RydWN0b3I9PT1TdHJpbmcmJihmPVwiXCIrZik7Zj1jYShjLGYpfWlmKGQmJmYpe00oZikmJihmPVtmXSk7Zm9yKGxldCBrPTAsbCxtO2s8Zi5sZW5ndGg7aysrKWlmKGw9ZltrXSwhaFtsXSYmKGhbbF09MSwoZz1kLmdldChsKSk/bT1nOmQuc2V0KGwsbT1bXSksIWJ8fCFtLmluY2x1ZGVzKGEpKSl7aWYobS5sZW5ndGg9PT0yKiozMS0xKXtnPW5ldyB4YShtKTtpZih0aGlzLmZhc3R1cGRhdGUpZm9yKGxldCBwIG9mIHRoaXMucmVnLnZhbHVlcygpKXAuaW5jbHVkZXMobSkmJihwW3AuaW5kZXhPZihtKV09Zyk7ZC5zZXQobCxtPWcpfW0ucHVzaChhKTt0aGlzLmZhc3R1cGRhdGUmJigoZz10aGlzLnJlZy5nZXQoYSkpP2cucHVzaChtKTp0aGlzLnJlZy5zZXQoYSxbbV0pKX19fWlmKHRoaXMuc3RvcmUmJighYnx8IXRoaXMuc3RvcmUuaGFzKGEpKSl7bGV0IGg7aWYodGhpcy5oKXtoPUkoKTtmb3IobGV0IGs9MCxsO2s8dGhpcy5oLmxlbmd0aDtrKyspe2w9XG50aGlzLmhba107aWYoKGI9bC5HKSYmIWIoYykpY29udGludWU7bGV0IG07aWYodHlwZW9mIGw9PT1cImZ1bmN0aW9uXCIpe209bChjKTtpZighbSljb250aW51ZTtsPVtsLk9dfWVsc2UgaWYoTShsKXx8bC5jb25zdHJ1Y3Rvcj09PVN0cmluZyl7aFtsXT1jW2xdO2NvbnRpbnVlfVJhKGMsaCxsLDAsbFswXSxtKX19dGhpcy5zdG9yZS5zZXQoYSxofHxjKX10aGlzLndvcmtlciYmKHRoaXMuZmFzdHVwZGF0ZXx8dGhpcy5yZWcuYWRkKGEpKX1yZXR1cm4gdGhpc307ZnVuY3Rpb24gUmEoYSxjLGIsZSxkLGYpe2E9YVtkXTtpZihlPT09Yi5sZW5ndGgtMSljW2RdPWZ8fGE7ZWxzZSBpZihhKWlmKGEuY29uc3RydWN0b3I9PT1BcnJheSlmb3IoYz1jW2RdPUFycmF5KGEubGVuZ3RoKSxkPTA7ZDxhLmxlbmd0aDtkKyspUmEoYSxjLGIsZSxkKTtlbHNlIGM9Y1tkXXx8KGNbZF09SSgpKSxkPWJbKytlXSxSYShhLGMsYixlLGQpfVxuZnVuY3Rpb24gUWEoYSxjLGIsZSxkLGYsZyxoKXtpZihhPWFbZ10paWYoZT09PWMubGVuZ3RoLTEpe2lmKGEuY29uc3RydWN0b3I9PT1BcnJheSl7aWYoYltlXSl7Zm9yKGM9MDtjPGEubGVuZ3RoO2MrKylkLmFkZChmLGFbY10sITAsITApO3JldHVybn1hPWEuam9pbihcIiBcIil9ZC5hZGQoZixhLGgsITApfWVsc2UgaWYoYS5jb25zdHJ1Y3Rvcj09PUFycmF5KWZvcihnPTA7ZzxhLmxlbmd0aDtnKyspUWEoYSxjLGIsZSxkLGYsZyxoKTtlbHNlIGc9Y1srK2VdLFFhKGEsYyxiLGUsZCxmLGcsaCl9O2Z1bmN0aW9uIFNhKGEsYyxiLGUpe2lmKCFhLmxlbmd0aClyZXR1cm4gYTtpZihhLmxlbmd0aD09PTEpcmV0dXJuIGE9YVswXSxhPWJ8fGEubGVuZ3RoPmM/YS5zbGljZShiLGIrYyk6YSxlP1RhLmNhbGwodGhpcyxhKTphO2xldCBkPVtdO2ZvcihsZXQgZj0wLGcsaDtmPGEubGVuZ3RoO2YrKylpZigoZz1hW2ZdKSYmKGg9Zy5sZW5ndGgpKXtpZihiKXtpZihiPj1oKXtiLT1oO2NvbnRpbnVlfWc9Zy5zbGljZShiLGIrYyk7aD1nLmxlbmd0aDtiPTB9aD5jJiYoZz1nLnNsaWNlKDAsYyksaD1jKTtpZighZC5sZW5ndGgmJmg+PWMpcmV0dXJuIGU/VGEuY2FsbCh0aGlzLGcpOmc7ZC5wdXNoKGcpO2MtPWg7aWYoIWMpYnJlYWt9ZD1kLmxlbmd0aD4xP1tdLmNvbmNhdC5hcHBseShbXSxkKTpkWzBdO3JldHVybiBlP1RhLmNhbGwodGhpcyxkKTpkfTtmdW5jdGlvbiBVYShhLGMsYixlKXt2YXIgZD1lWzBdO2lmKGRbMF0mJmRbMF0ucXVlcnkpcmV0dXJuIGFbY10uYXBwbHkoYSxkKTtpZighKGMhPT1cImFuZFwiJiZjIT09XCJub3RcInx8YS5yZXN1bHQubGVuZ3RofHxhLmF3YWl0fHxkLnN1Z2dlc3QpKXJldHVybiBlLmxlbmd0aD4xJiYoZD1lW2UubGVuZ3RoLTFdKSwoZT1kLnJlc29sdmUpP2EuYXdhaXR8fGEucmVzdWx0OmE7bGV0IGY9W10sZz0wLGg9MCxrLGwsbSxwLHU7Zm9yKGM9MDtjPGUubGVuZ3RoO2MrKylpZihkPWVbY10pe3ZhciByPXZvaWQgMDtpZihkLmNvbnN0cnVjdG9yPT09WClyPWQuYXdhaXR8fGQucmVzdWx0O2Vsc2UgaWYoZC50aGVufHxkLmNvbnN0cnVjdG9yPT09QXJyYXkpcj1kO2Vsc2V7Zz1kLmxpbWl0fHwwO2g9ZC5vZmZzZXR8fDA7bT1kLnN1Z2dlc3Q7bD1kLnJlc29sdmU7az0oKHA9ZC5oaWdobGlnaHR8fGEuaGlnaGxpZ2h0KXx8ZC5lbnJpY2gpJiZsO3I9ZC5xdWV1ZTtsZXQgdD1kLmFzeW5jfHxyLG49ZC5pbmRleCxcbnE9ZC5xdWVyeTtuP2EuaW5kZXh8fChhLmluZGV4PW4pOm49YS5pbmRleDtpZihxfHxkLnRhZyl7Y29uc3QgeD1kLmZpZWxkfHxkLnBsdWNrO3gmJighcXx8YS5xdWVyeSYmIXB8fChhLnF1ZXJ5PXEsYS5maWVsZD14LGEuaGlnaGxpZ2h0PXApLG49bi5pbmRleC5nZXQoeCkpO2lmKHImJih1fHxhLmF3YWl0KSl7dT0xO2xldCB2O2NvbnN0IEE9YS5DLmxlbmd0aCxEPW5ldyBQcm9taXNlKGZ1bmN0aW9uKEcpe3Y9R30pOyhmdW5jdGlvbihHLEUpe0QuaD1mdW5jdGlvbigpe0UuaW5kZXg9bnVsbDtFLnJlc29sdmU9ITE7bGV0IEI9dD9HLnNlYXJjaEFzeW5jKEUpOkcuc2VhcmNoKEUpO2lmKEIudGhlbilyZXR1cm4gQi50aGVuKGZ1bmN0aW9uKHope2EuQ1tBXT16PXoucmVzdWx0fHx6O3Yoeik7cmV0dXJuIHp9KTtCPUIucmVzdWx0fHxCO3YoQik7cmV0dXJuIEJ9fSkobixPYmplY3QuYXNzaWduKHt9LGQpKTthLkMucHVzaChEKTtmW2NdPUQ7Y29udGludWV9ZWxzZSBkLnJlc29sdmU9ITEsXG5kLmluZGV4PW51bGwscj10P24uc2VhcmNoQXN5bmMoZCk6bi5zZWFyY2goZCksZC5yZXNvbHZlPWwsZC5pbmRleD1ufWVsc2UgaWYoZC5hbmQpcj1WYShkLFwiYW5kXCIsbik7ZWxzZSBpZihkLm9yKXI9VmEoZCxcIm9yXCIsbik7ZWxzZSBpZihkLm5vdClyPVZhKGQsXCJub3RcIixuKTtlbHNlIGlmKGQueG9yKXI9VmEoZCxcInhvclwiLG4pO2Vsc2UgY29udGludWV9ci5hd2FpdD8odT0xLHI9ci5hd2FpdCk6ci50aGVuPyh1PTEscj1yLnRoZW4oZnVuY3Rpb24odCl7cmV0dXJuIHQucmVzdWx0fHx0fSkpOnI9ci5yZXN1bHR8fHI7ZltjXT1yfXUmJiFhLmF3YWl0JiYoYS5hd2FpdD1uZXcgUHJvbWlzZShmdW5jdGlvbih0KXthLnJldHVybj10fSkpO2lmKHUpe2NvbnN0IHQ9UHJvbWlzZS5hbGwoZikudGhlbihmdW5jdGlvbihuKXtmb3IobGV0IHE9MDtxPGEuQy5sZW5ndGg7cSsrKWlmKGEuQ1txXT09PXQpe2EuQ1txXT1mdW5jdGlvbigpe3JldHVybiBiLmNhbGwoYSxuLGcsaCxrLGwsbSxwKX07YnJlYWt9V2EoYSl9KTtcbmEuQy5wdXNoKHQpfWVsc2UgaWYoYS5hd2FpdClhLkMucHVzaChmdW5jdGlvbigpe3JldHVybiBiLmNhbGwoYSxmLGcsaCxrLGwsbSxwKX0pO2Vsc2UgcmV0dXJuIGIuY2FsbChhLGYsZyxoLGssbCxtLHApO3JldHVybiBsP2EuYXdhaXR8fGEucmVzdWx0OmF9ZnVuY3Rpb24gVmEoYSxjLGIpe2E9YVtjXTtjb25zdCBlPWFbMF18fGE7ZS5pbmRleHx8KGUuaW5kZXg9Yik7Yj1uZXcgWChlKTthLmxlbmd0aD4xJiYoYj1iW2NdLmFwcGx5KGIsYS5zbGljZSgxKSkpO3JldHVybiBifTtYLnByb3RvdHlwZS5vcj1mdW5jdGlvbigpe3JldHVybiBVYSh0aGlzLFwib3JcIixYYSxhcmd1bWVudHMpfTtmdW5jdGlvbiBYYShhLGMsYixlLGQsZixnKXthLmxlbmd0aCYmKHRoaXMucmVzdWx0Lmxlbmd0aCYmYS5wdXNoKHRoaXMucmVzdWx0KSxhLmxlbmd0aDwyP3RoaXMucmVzdWx0PWFbMF06KHRoaXMucmVzdWx0PVlhKGEsYyxiLCExLHRoaXMuaCksYj0wKSk7ZCYmKHRoaXMuYXdhaXQ9bnVsbCk7cmV0dXJuIGQ/dGhpcy5yZXNvbHZlKGMsYixlLGcpOnRoaXN9O1gucHJvdG90eXBlLmFuZD1mdW5jdGlvbigpe3JldHVybiBVYSh0aGlzLFwiYW5kXCIsWmEsYXJndW1lbnRzKX07ZnVuY3Rpb24gWmEoYSxjLGIsZSxkLGYsZyl7aWYoIWYmJiF0aGlzLnJlc3VsdC5sZW5ndGgpcmV0dXJuIGQ/dGhpcy5yZXN1bHQ6dGhpcztsZXQgaDtpZihhLmxlbmd0aClpZih0aGlzLnJlc3VsdC5sZW5ndGgmJmEudW5zaGlmdCh0aGlzLnJlc3VsdCksYS5sZW5ndGg8Mil0aGlzLnJlc3VsdD1hWzBdO2Vsc2V7bGV0IGs9MDtmb3IobGV0IGw9MCxtLHA7bDxhLmxlbmd0aDtsKyspaWYoKG09YVtsXSkmJihwPW0ubGVuZ3RoKSlrPHAmJihrPXApO2Vsc2UgaWYoIWYpe2s9MDticmVha31rPyh0aGlzLnJlc3VsdD0kYShhLGssYyxiLGYsdGhpcy5oLGQpLGg9ITApOnRoaXMucmVzdWx0PVtdfWVsc2UgZnx8KHRoaXMucmVzdWx0PWEpO2QmJih0aGlzLmF3YWl0PW51bGwpO3JldHVybiBkP3RoaXMucmVzb2x2ZShjLGIsZSxnLGgpOnRoaXN9O1gucHJvdG90eXBlLnhvcj1mdW5jdGlvbigpe3JldHVybiBVYSh0aGlzLFwieG9yXCIsYWIsYXJndW1lbnRzKX07XG5mdW5jdGlvbiBhYihhLGMsYixlLGQsZixnKXtpZihhLmxlbmd0aClpZih0aGlzLnJlc3VsdC5sZW5ndGgmJmEudW5zaGlmdCh0aGlzLnJlc3VsdCksYS5sZW5ndGg8Mil0aGlzLnJlc3VsdD1hWzBdO2Vsc2V7YTp7Zj1iO3ZhciBoPXRoaXMuaDtjb25zdCBrPVtdLGw9SSgpO2xldCBtPTA7Zm9yKGxldCBwPTAsdTtwPGEubGVuZ3RoO3ArKylpZih1PWFbcF0pe208dS5sZW5ndGgmJihtPXUubGVuZ3RoKTtmb3IobGV0IHI9MCx0O3I8dS5sZW5ndGg7cisrKWlmKHQ9dVtyXSlmb3IobGV0IG49MCxxO248dC5sZW5ndGg7bisrKXE9dFtuXSxsW3FdPWxbcV0/MjoxfWZvcihsZXQgcD0wLHUscj0wO3A8bTtwKyspZm9yKGxldCB0PTAsbjt0PGEubGVuZ3RoO3QrKylpZihuPWFbdF0paWYodT1uW3BdKWZvcihsZXQgcT0wLHg7cTx1Lmxlbmd0aDtxKyspaWYoeD11W3FdLGxbeF09PT0xKWlmKGYpZi0tO2Vsc2UgaWYoZCl7aWYoay5wdXNoKHgpLGsubGVuZ3RoPT09Yyl7YT1rO2JyZWFrIGF9fWVsc2V7Y29uc3Qgdj1cbnArKHQ/aDowKTtrW3ZdfHwoa1t2XT1bXSk7a1t2XS5wdXNoKHgpO2lmKCsrcj09PWMpe2E9azticmVhayBhfX1hPWt9dGhpcy5yZXN1bHQ9YTtoPSEwfWVsc2UgZnx8KHRoaXMucmVzdWx0PWEpO2QmJih0aGlzLmF3YWl0PW51bGwpO3JldHVybiBkP3RoaXMucmVzb2x2ZShjLGIsZSxnLGgpOnRoaXN9O1gucHJvdG90eXBlLm5vdD1mdW5jdGlvbigpe3JldHVybiBVYSh0aGlzLFwibm90XCIsYmIsYXJndW1lbnRzKX07XG5mdW5jdGlvbiBiYihhLGMsYixlLGQsZixnKXtpZighZiYmIXRoaXMucmVzdWx0Lmxlbmd0aClyZXR1cm4gZD90aGlzLnJlc3VsdDp0aGlzO2lmKGEubGVuZ3RoJiZ0aGlzLnJlc3VsdC5sZW5ndGgpe2E6e2Y9Yjt2YXIgaD1bXTthPW5ldyBTZXQoYS5mbGF0KCkuZmxhdCgpKTtmb3IobGV0IGs9MCxsLG09MDtrPHRoaXMucmVzdWx0Lmxlbmd0aDtrKyspaWYobD10aGlzLnJlc3VsdFtrXSlmb3IobGV0IHA9MCx1O3A8bC5sZW5ndGg7cCsrKWlmKHU9bFtwXSwhYS5oYXModSkpaWYoZilmLS07ZWxzZSBpZihkKXtpZihoLnB1c2godSksaC5sZW5ndGg9PT1jKXthPWg7YnJlYWsgYX19ZWxzZSBpZihoW2tdfHwoaFtrXT1bXSksaFtrXS5wdXNoKHUpLCsrbT09PWMpe2E9aDticmVhayBhfWE9aH10aGlzLnJlc3VsdD1hO2g9ITB9ZCYmKHRoaXMuYXdhaXQ9bnVsbCk7cmV0dXJuIGQ/dGhpcy5yZXNvbHZlKGMsYixlLGcsaCk6dGhpc307ZnVuY3Rpb24gY2IoYSxjLGIsZSxkKXtsZXQgZixnLGg7dHlwZW9mIGQ9PT1cInN0cmluZ1wiPyhmPWQsZD1cIlwiKTpmPWQudGVtcGxhdGU7Zz1mLmluZGV4T2YoXCIkMVwiKTtoPWYuc3Vic3RyaW5nKGcrMik7Zz1mLnN1YnN0cmluZygwLGcpO2xldCBrPWQmJmQuYm91bmRhcnksbD0hZHx8ZC5jbGlwIT09ITEsbT1kJiZkLm1lcmdlJiZoJiZnJiZuZXcgUmVnRXhwKGgrXCIgXCIrZyxcImdcIik7ZD1kJiZkLmVsbGlwc2lzO3ZhciBwPTA7aWYodHlwZW9mIGQ9PT1cIm9iamVjdFwiKXt2YXIgdT1kLnRlbXBsYXRlO3A9dS5sZW5ndGgtMjtkPWQucGF0dGVybn10eXBlb2YgZCE9PVwic3RyaW5nXCImJihkPWQ9PT0hMT9cIlwiOlwiLi4uXCIpO3AmJihkPXUucmVwbGFjZShcIiQxXCIsZCkpO3U9ZC5sZW5ndGgtcDtsZXQgcix0O3R5cGVvZiBrPT09XCJvYmplY3RcIiYmKHI9ay5iZWZvcmUscj09PTAmJihyPS0xKSx0PWsuYWZ0ZXIsdD09PTAmJih0PS0xKSxrPWsudG90YWx8fDlFNSk7cD1uZXcgTWFwO2ZvcihsZXQgT2E9MCxcbmRhLGRiLHBhO09hPGMubGVuZ3RoO09hKyspe2xldCBxYTtpZihlKXFhPWMscGE9ZTtlbHNle3ZhciBuPWNbT2FdO3BhPW4uZmllbGQ7aWYoIXBhKWNvbnRpbnVlO3FhPW4ucmVzdWx0fWRiPWIuZ2V0KHBhKTtkYT1kYi5lbmNvZGVyO249cC5nZXQoZGEpO3R5cGVvZiBuIT09XCJzdHJpbmdcIiYmKG49ZGEuZW5jb2RlKGEpLHAuc2V0KGRhLG4pKTtmb3IobGV0IHlhPTA7eWE8cWEubGVuZ3RoO3lhKyspe3ZhciBxPXFhW3lhXS5kb2M7aWYoIXEpY29udGludWU7cT1jYShxLHBhKTtpZighcSljb250aW51ZTt2YXIgeD1xLnRyaW0oKS5zcGxpdCgvXFxzKy8pO2lmKCF4Lmxlbmd0aCljb250aW51ZTtxPVwiXCI7dmFyIHY9W107bGV0IHphPVtdO3ZhciBBPS0xLEQ9LTEsRz0wO2Zvcih2YXIgRT0wO0U8eC5sZW5ndGg7RSsrKXt2YXIgQj14W0VdLHo9ZGEuZW5jb2RlKEIpO3o9ei5sZW5ndGg+MT96LmpvaW4oXCIgXCIpOnpbMF07bGV0IHk7aWYoeiYmQil7dmFyIEM9Qi5sZW5ndGgsSz0oZGEuc3BsaXQ/XG5CLnJlcGxhY2UoZGEuc3BsaXQsXCJcIik6QikubGVuZ3RoLXoubGVuZ3RoLEY9XCJcIixOPTA7Zm9yKHZhciBPPTA7TzxuLmxlbmd0aDtPKyspe3ZhciBQPW5bT107aWYoUCl7dmFyIEw9UC5sZW5ndGg7TCs9SztOJiZMPD1OfHwoUD16LmluZGV4T2YoUCksUD4tMSYmKEY9KFA/Qi5zdWJzdHJpbmcoMCxQKTpcIlwiKStnK0Iuc3Vic3RyaW5nKFAsUCtMKStoKyhQK0w8Qz9CLnN1YnN0cmluZyhQK0wpOlwiXCIpLE49TCx5PSEwKSl9fUYmJihrJiYoQTwwJiYoQT1xLmxlbmd0aCsocT8xOjApKSxEPXEubGVuZ3RoKyhxPzE6MCkrRi5sZW5ndGgsRys9Qyx6YS5wdXNoKHYubGVuZ3RoKSx2LnB1c2goe21hdGNoOkZ9KSkscSs9KHE/XCIgXCI6XCJcIikrRil9aWYoIXkpQj14W0VdLHErPShxP1wiIFwiOlwiXCIpK0IsayYmdi5wdXNoKHt0ZXh0OkJ9KTtlbHNlIGlmKGsmJkc+PWspYnJlYWt9Rz16YS5sZW5ndGgqKGYubGVuZ3RoLTIpO2lmKHJ8fHR8fGsmJnEubGVuZ3RoLUc+aylpZihHPWsrRy11KjIsRT1ELUEscj4wJiZcbihFKz1yKSx0PjAmJihFKz10KSxFPD1HKXg9cj9BLShyPjA/cjowKTpBLSgoRy1FKS8yfDApLHY9dD9EKyh0PjA/dDowKTp4K0csbHx8KHg+MCYmcS5jaGFyQXQoeCkhPT1cIiBcIiYmcS5jaGFyQXQoeC0xKSE9PVwiIFwiJiYoeD1xLmluZGV4T2YoXCIgXCIseCkseDwwJiYoeD0wKSksdjxxLmxlbmd0aCYmcS5jaGFyQXQodi0xKSE9PVwiIFwiJiZxLmNoYXJBdCh2KSE9PVwiIFwiJiYodj1xLmxhc3RJbmRleE9mKFwiIFwiLHYpLHY8RD92PUQ6Kyt2KSkscT0oeD9kOlwiXCIpK3Euc3Vic3RyaW5nKHgsdikrKHY8cS5sZW5ndGg/ZDpcIlwiKTtlbHNle0Q9W107QT17fTtHPXt9O0U9e307Qj17fTt6PXt9O0Y9Sz1DPTA7Zm9yKE89Tj0xOzspe3ZhciBVPXZvaWQgMDtmb3IobGV0IHk9MCxKO3k8emEubGVuZ3RoO3krKyl7Sj16YVt5XTtpZihGKWlmKEshPT1GKXtpZihFW3krMV0pY29udGludWU7Sis9RjtpZihBW0pdKXtDLT11O0dbeSsxXT0xO0VbeSsxXT0xO2NvbnRpbnVlfWlmKEo+PXYubGVuZ3RoLTEpe2lmKEo+PVxudi5sZW5ndGgpe0VbeSsxXT0xO0o+PXgubGVuZ3RoJiYoR1t5KzFdPTEpO2NvbnRpbnVlfUMtPXV9cT12W0pdLnRleHQ7aWYoTD10JiZ6W3ldKWlmKEw+MCl7aWYocS5sZW5ndGg+TClpZihFW3krMV09MSxsKXE9cS5zdWJzdHJpbmcoMCxMKTtlbHNlIGNvbnRpbnVlOyhMLT1xLmxlbmd0aCl8fChMPS0xKTt6W3ldPUx9ZWxzZXtFW3krMV09MTtjb250aW51ZX1pZihDK3EubGVuZ3RoKzE8PWspcT1cIiBcIitxLERbeV0rPXE7ZWxzZSBpZihsKVU9ay1DLTEsVT4wJiYocT1cIiBcIitxLnN1YnN0cmluZygwLFUpLERbeV0rPXEpLEVbeSsxXT0xO2Vsc2V7RVt5KzFdPTE7Y29udGludWV9fWVsc2V7aWYoRVt5XSljb250aW51ZTtKLT1LO2lmKEFbSl0pe0MtPXU7RVt5XT0xO0dbeV09MTtjb250aW51ZX1pZihKPD0wKXtpZihKPDApe0VbeV09MTtHW3ldPTE7Y29udGludWV9Qy09dX1xPXZbSl0udGV4dDtpZihMPXImJkJbeV0paWYoTD4wKXtpZihxLmxlbmd0aD5MKWlmKEVbeV09MSxsKXE9cS5zdWJzdHJpbmcocS5sZW5ndGgtXG5MKTtlbHNlIGNvbnRpbnVlOyhMLT1xLmxlbmd0aCl8fChMPS0xKTtCW3ldPUx9ZWxzZXtFW3ldPTE7Y29udGludWV9aWYoQytxLmxlbmd0aCsxPD1rKXErPVwiIFwiLERbeV09cStEW3ldO2Vsc2UgaWYobClVPXEubGVuZ3RoKzEtKGstQyksVT49MCYmVTxxLmxlbmd0aCYmKHE9cS5zdWJzdHJpbmcoVSkrXCIgXCIsRFt5XT1xK0RbeV0pLEVbeV09MTtlbHNle0VbeV09MTtjb250aW51ZX19ZWxzZXtxPXZbSl0ubWF0Y2g7ciYmKEJbeV09cik7dCYmKHpbeV09dCk7eSYmQysrO2xldCBQYTtKPyF5JiZ1JiYoQys9dSk6KEdbeV09MSxFW3ldPTEpO0o+PXgubGVuZ3RoLTE/UGE9MTpKPHYubGVuZ3RoLTEmJnZbSisxXS5tYXRjaD9QYT0xOnUmJihDKz11KTtDLT1mLmxlbmd0aC0yO2lmKCF5fHxDK3EubGVuZ3RoPD1rKURbeV09cTtlbHNle1U9Tj1PPUdbeV09MDticmVha31QYSYmKEdbeSsxXT0xLEVbeSsxXT0xKX1DKz1xLmxlbmd0aDtVPUFbSl09MX1pZihVKUs9PT1GP0YrKzpLKys7ZWxzZXtLPT09XG5GP049MDpPPTA7aWYoIU4mJiFPKWJyZWFrO04/KEsrKyxGPUspOkYrK319cT1cIlwiO2ZvcihsZXQgeT0wLEo7eTxELmxlbmd0aDt5KyspSj0oeSYmR1t5XT9cIiBcIjooeSYmIWQ/XCIgXCI6XCJcIikrZCkrRFt5XSxxKz1KO2QmJiFHW0QubGVuZ3RoXSYmKHErPWQpfW0mJihxPXEucmVwbGFjZShtLFwiIFwiKSk7cWFbeWFdLmhpZ2hsaWdodD1xfWlmKGUpYnJlYWt9cmV0dXJuIGN9O2Z1bmN0aW9uIFgoYSxjKXtpZighdGhpc3x8dGhpcy5jb25zdHJ1Y3RvciE9PVgpcmV0dXJuIG5ldyBYKGEsYyk7bGV0IGI9MCxlLGQsZixnLGgsaztpZihhJiZhLmluZGV4KXtjb25zdCBsPWE7Yz1sLmluZGV4O2I9bC5ib29zdHx8MDtpZihkPWwucXVlcnkpe2Y9bC5maWVsZHx8bC5wbHVjaztnPWwuaGlnaGxpZ2h0O2NvbnN0IG09bC5yZXNvbHZlO2E9bC5hc3luY3x8bC5xdWV1ZTtsLnJlc29sdmU9ITE7bC5pbmRleD1udWxsO2E9YT9jLnNlYXJjaEFzeW5jKGwpOmMuc2VhcmNoKGwpO2wucmVzb2x2ZT1tO2wuaW5kZXg9YzthPWEucmVzdWx0fHxhfWVsc2UgYT1bXX1pZihhJiZhLnRoZW4pe2NvbnN0IGw9dGhpczthPWEudGhlbihmdW5jdGlvbihtKXtsLkNbMF09bC5yZXN1bHQ9bS5yZXN1bHR8fG07V2EobCl9KTtlPVthXTthPVtdO2g9bmV3IFByb21pc2UoZnVuY3Rpb24obSl7az1tfSl9dGhpcy5pbmRleD1jfHxudWxsO3RoaXMucmVzdWx0PWF8fFtdO3RoaXMuaD1iO3RoaXMuQz1cbmV8fFtdO3RoaXMuYXdhaXQ9aHx8bnVsbDt0aGlzLnJldHVybj1rfHxudWxsO3RoaXMuaGlnaGxpZ2h0PWd8fG51bGw7dGhpcy5xdWVyeT1kfHxcIlwiO3RoaXMuZmllbGQ9Znx8XCJcIn13PVgucHJvdG90eXBlO3cubGltaXQ9ZnVuY3Rpb24oYSl7aWYodGhpcy5hd2FpdCl7Y29uc3QgYz10aGlzO3RoaXMuQy5wdXNoKGZ1bmN0aW9uKCl7cmV0dXJuIGMubGltaXQoYSkucmVzdWx0fSl9ZWxzZSBpZih0aGlzLnJlc3VsdC5sZW5ndGgpe2NvbnN0IGM9W107Zm9yKGxldCBiPTAsZTtiPHRoaXMucmVzdWx0Lmxlbmd0aDtiKyspaWYoZT10aGlzLnJlc3VsdFtiXSlpZihlLmxlbmd0aDw9YSl7aWYoY1tiXT1lLGEtPWUubGVuZ3RoLCFhKWJyZWFrfWVsc2V7Y1tiXT1lLnNsaWNlKDAsYSk7YnJlYWt9dGhpcy5yZXN1bHQ9Y31yZXR1cm4gdGhpc307XG53Lm9mZnNldD1mdW5jdGlvbihhKXtpZih0aGlzLmF3YWl0KXtjb25zdCBjPXRoaXM7dGhpcy5DLnB1c2goZnVuY3Rpb24oKXtyZXR1cm4gYy5vZmZzZXQoYSkucmVzdWx0fSl9ZWxzZSBpZih0aGlzLnJlc3VsdC5sZW5ndGgpe2NvbnN0IGM9W107Zm9yKGxldCBiPTAsZTtiPHRoaXMucmVzdWx0Lmxlbmd0aDtiKyspaWYoZT10aGlzLnJlc3VsdFtiXSllLmxlbmd0aDw9YT9hLT1lLmxlbmd0aDooY1tiXT1lLnNsaWNlKGEpLGE9MCk7dGhpcy5yZXN1bHQ9Y31yZXR1cm4gdGhpc307dy5ib29zdD1mdW5jdGlvbihhKXtpZih0aGlzLmF3YWl0KXtjb25zdCBjPXRoaXM7dGhpcy5DLnB1c2goZnVuY3Rpb24oKXtyZXR1cm4gYy5ib29zdChhKS5yZXN1bHR9KX1lbHNlIHRoaXMuaCs9YTtyZXR1cm4gdGhpc307XG5mdW5jdGlvbiBXYShhLGMpe2xldCBiPWEucmVzdWx0O3ZhciBlPWEuYXdhaXQ7YS5hd2FpdD1udWxsO2ZvcihsZXQgZD0wLGY7ZDxhLkMubGVuZ3RoO2QrKylpZihmPWEuQ1tkXSlpZih0eXBlb2YgZj09PVwiZnVuY3Rpb25cIiliPWYoKSxhLkNbZF09Yj1iLnJlc3VsdHx8YixkLS07ZWxzZSBpZihmLmgpYj1mLmgoKSxhLkNbZF09Yj1iLnJlc3VsdHx8YixkLS07ZWxzZSBpZihmLnRoZW4pcmV0dXJuIGEuYXdhaXQ9ZTtlPWEucmV0dXJuO2EuQz1bXTthLnJldHVybj1udWxsO2N8fGUoYik7cmV0dXJuIGJ9XG53LnJlc29sdmU9ZnVuY3Rpb24oYSxjLGIsZSxkKXtsZXQgZj10aGlzLmF3YWl0P1dhKHRoaXMsITApOnRoaXMucmVzdWx0O2lmKGYudGhlbil7Y29uc3QgZz10aGlzO3JldHVybiBmLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gZy5yZXNvbHZlKGEsYyxiLGUsZCl9KX1mLmxlbmd0aCYmKHR5cGVvZiBhPT09XCJvYmplY3RcIj8oZT1hLmhpZ2hsaWdodHx8dGhpcy5oaWdobGlnaHQsYj0hIWV8fGEuZW5yaWNoLGM9YS5vZmZzZXQsYT1hLmxpbWl0KTooZT1lfHx0aGlzLmhpZ2hsaWdodCxiPSEhZXx8YiksZj1kP2I/VGEuY2FsbCh0aGlzLmluZGV4LGYpOmY6U2EuY2FsbCh0aGlzLmluZGV4LGYsYXx8MTAwLGMsYikpO3JldHVybiB0aGlzLmZpbmFsaXplKGYsZSl9O1xudy5maW5hbGl6ZT1mdW5jdGlvbihhLGMpe2lmKGEudGhlbil7Y29uc3QgZT10aGlzO3JldHVybiBhLnRoZW4oZnVuY3Rpb24oZCl7cmV0dXJuIGUuZmluYWxpemUoZCxjKX0pfWMmJmEubGVuZ3RoJiZ0aGlzLnF1ZXJ5JiYoYT1jYih0aGlzLnF1ZXJ5LGEsdGhpcy5pbmRleC5pbmRleCx0aGlzLmZpZWxkLGMpKTtjb25zdCBiPXRoaXMucmV0dXJuO3RoaXMuaGlnaGxpZ2h0PXRoaXMuaW5kZXg9dGhpcy5yZXN1bHQ9dGhpcy5DPXRoaXMuYXdhaXQ9dGhpcy5yZXR1cm49bnVsbDt0aGlzLnF1ZXJ5PXRoaXMuZmllbGQ9XCJcIjtiJiZiKGEpO3JldHVybiBhfTtmdW5jdGlvbiAkYShhLGMsYixlLGQsZixnKXtjb25zdCBoPWEubGVuZ3RoO2xldCBrPVtdLGwsbTtsPUkoKTtmb3IobGV0IHA9MCx1LHIsdCxuO3A8YztwKyspZm9yKGxldCBxPTA7cTxoO3ErKylpZih0PWFbcV0scDx0Lmxlbmd0aCYmKHU9dFtwXSkpZm9yKGxldCB4PTA7eDx1Lmxlbmd0aDt4Kyspe3I9dVt4XTsobT1sW3JdKT9sW3JdKys6KG09MCxsW3JdPTEpO249a1ttXXx8KGtbbV09W10pO2lmKCFnKXtsZXQgdj1wKyhxfHwhZD8wOmZ8fDApO249blt2XXx8KG5bdl09W10pfW4ucHVzaChyKTtpZihnJiZiJiZtPT09aC0xJiZuLmxlbmd0aC1lPT09YilyZXR1cm4gZT9uLnNsaWNlKGUpOm59aWYoYT1rLmxlbmd0aClpZihkKWs9ay5sZW5ndGg+MT9ZYShrLGIsZSxnLGYpOihrPWtbMF0pJiZiJiZrLmxlbmd0aD5ifHxlP2suc2xpY2UoZSxiK2UpOms7ZWxzZXtpZihhPGgpcmV0dXJuW107az1rW2EtMV07aWYoYnx8ZSlpZihnKXtpZihrLmxlbmd0aD5ifHxlKWs9ay5zbGljZShlLGIrXG5lKX1lbHNle2Q9W107Zm9yKGxldCBwPTAsdTtwPGsubGVuZ3RoO3ArKylpZih1PWtbcF0paWYoZSYmdS5sZW5ndGg+ZSllLT11Lmxlbmd0aDtlbHNle2lmKGImJnUubGVuZ3RoPmJ8fGUpdT11LnNsaWNlKGUsYitlKSxiLT11Lmxlbmd0aCxlJiYoZS09dS5sZW5ndGgpO2QucHVzaCh1KTtpZighYilicmVha31rPWR9fXJldHVybiBrfVxuZnVuY3Rpb24gWWEoYSxjLGIsZSxkKXtjb25zdCBmPVtdLGc9SSgpO2xldCBoO3ZhciBrPWEubGVuZ3RoO2xldCBsO2lmKGUpZm9yKGQ9ay0xO2Q+PTA7ZC0tKXtpZihsPShlPWFbZF0pJiZlLmxlbmd0aClmb3Ioaz0wO2s8bDtrKyspaWYoaD1lW2tdLCFnW2hdKWlmKGdbaF09MSxiKWItLTtlbHNlIGlmKGYucHVzaChoKSxmLmxlbmd0aD09PWMpcmV0dXJuIGZ9ZWxzZSBmb3IobGV0IG09ay0xLHAsdT0wO20+PTA7bS0tKXtwPWFbbV07Zm9yKGxldCByPTA7cjxwLmxlbmd0aDtyKyspaWYobD0oZT1wW3JdKSYmZS5sZW5ndGgpZm9yKGxldCB0PTA7dDxsO3QrKylpZihoPWVbdF0sIWdbaF0paWYoZ1toXT0xLGIpYi0tO2Vsc2V7bGV0IG49KHIrKG08ay0xP2R8fDA6MCkpLyhtKzEpfDA7KGZbbl18fChmW25dPVtdKSkucHVzaChoKTtpZigrK3U9PT1jKXJldHVybiBmfX1yZXR1cm4gZn1cbmZ1bmN0aW9uIGViKGEsYyxiKXtjb25zdCBlPUkoKSxkPVtdO2ZvcihsZXQgZj0wLGc7ZjxjLmxlbmd0aDtmKyspe2c9Y1tmXTtmb3IobGV0IGg9MDtoPGcubGVuZ3RoO2grKyllW2dbaF1dPTF9aWYoYilmb3IobGV0IGY9MCxnO2Y8YS5sZW5ndGg7ZisrKWc9YVtmXSxlW2ddJiYoZC5wdXNoKGcpLGVbZ109MCk7ZWxzZSBmb3IobGV0IGY9MCxnLGg7ZjxhLnJlc3VsdC5sZW5ndGg7ZisrKWZvcihnPWEucmVzdWx0W2ZdLGM9MDtjPGcubGVuZ3RoO2MrKyloPWdbY10sZVtoXSYmKChkW2ZdfHwoZFtmXT1bXSkpLnB1c2goaCksZVtoXT0wKTtyZXR1cm4gZH07SSgpO05hLnByb3RvdHlwZS5zZWFyY2g9ZnVuY3Rpb24oYSxjLGIsZSl7Ynx8KCFjJiZiYShhKT8oYj1hLGE9XCJcIik6YmEoYykmJihiPWMsYz0wKSk7bGV0IGQ9W107dmFyIGY9W107bGV0IGc7bGV0IGgsayxsLG0scDtsZXQgdT0wLHI9ITAsdDtpZihiKXtiLmNvbnN0cnVjdG9yPT09QXJyYXkmJihiPXtpbmRleDpifSk7YT1iLnF1ZXJ5fHxhO2c9Yi5wbHVjaztoPWIubWVyZ2U7bD1iLmJvb3N0O3A9Z3x8Yi5maWVsZHx8KHA9Yi5pbmRleCkmJihwLmluZGV4P251bGw6cCk7dmFyIG49dGhpcy50YWcmJmIudGFnO2s9Yi5zdWdnZXN0O3I9Yi5yZXNvbHZlIT09ITE7bT1iLmNhY2hlO3Q9ciYmdGhpcy5zdG9yZSYmYi5oaWdobGlnaHQ7dmFyIHE9ISF0fHxyJiZ0aGlzLnN0b3JlJiZiLmVucmljaDtjPWIubGltaXR8fGM7dmFyIHg9Yi5vZmZzZXR8fDA7Y3x8KGM9cj8xMDA6MCk7aWYobiYmKCF0aGlzLmRifHwhZSkpe24uY29uc3RydWN0b3IhPT1BcnJheSYmKG49W25dKTt2YXIgdj1bXTtmb3IobGV0IEI9XG4wLHo7QjxuLmxlbmd0aDtCKyspaWYoej1uW0JdLHouZmllbGQmJnoudGFnKXt2YXIgQT16LnRhZztpZihBLmNvbnN0cnVjdG9yPT09QXJyYXkpZm9yKHZhciBEPTA7RDxBLmxlbmd0aDtEKyspdi5wdXNoKHouZmllbGQsQVtEXSk7ZWxzZSB2LnB1c2goei5maWVsZCxBKX1lbHNle0E9T2JqZWN0LmtleXMoeik7Zm9yKGxldCBDPTAsSyxGO0M8QS5sZW5ndGg7QysrKWlmKEs9QVtDXSxGPXpbS10sRi5jb25zdHJ1Y3Rvcj09PUFycmF5KWZvcihEPTA7RDxGLmxlbmd0aDtEKyspdi5wdXNoKEssRltEXSk7ZWxzZSB2LnB1c2goSyxGKX1uPXY7aWYoIWEpe2Y9W107aWYodi5sZW5ndGgpZm9yKG49MDtuPHYubGVuZ3RoO24rPTIpe2lmKHRoaXMuZGIpe2U9dGhpcy5pbmRleC5nZXQodltuXSk7aWYoIWUpY29udGludWU7Zi5wdXNoKGU9ZS5kYi50YWcodltuKzFdLGMseCxxKSl9ZWxzZSBlPWZiLmNhbGwodGhpcyx2W25dLHZbbisxXSxjLHgscSk7ZC5wdXNoKHI/e2ZpZWxkOnZbbl0sdGFnOnZbbitcbjFdLHJlc3VsdDplfTpbZV0pfWlmKGYubGVuZ3RoKXtjb25zdCBCPXRoaXM7cmV0dXJuIFByb21pc2UuYWxsKGYpLnRoZW4oZnVuY3Rpb24oeil7Zm9yKGxldCBDPTA7Qzx6Lmxlbmd0aDtDKyspcj9kW0NdLnJlc3VsdD16W0NdOmRbQ109eltDXTtyZXR1cm4gcj9kOm5ldyBYKGQubGVuZ3RoPjE/JGEoZCwxLDAsMCxrLGwpOmRbMF0sQil9KX1yZXR1cm4gcj9kOm5ldyBYKGQubGVuZ3RoPjE/JGEoZCwxLDAsMCxrLGwpOmRbMF0sdGhpcyl9fXJ8fGd8fCEocD1wfHx0aGlzLmZpZWxkKXx8KE0ocCk/Zz1wOihwLmNvbnN0cnVjdG9yPT09QXJyYXkmJnAubGVuZ3RoPT09MSYmKHA9cFswXSksZz1wLmZpZWxkfHxwLmluZGV4KSk7cCYmcC5jb25zdHJ1Y3RvciE9PUFycmF5JiYocD1bcF0pfXB8fChwPXRoaXMuZmllbGQpO2xldCBHO3Y9KHRoaXMud29ya2VyfHx0aGlzLmRiKSYmIWUmJltdO2ZvcihsZXQgQj0wLHosQyxLO0I8cC5sZW5ndGg7QisrKXtDPXBbQl07aWYodGhpcy5kYiYmdGhpcy50YWcmJlxuIXRoaXMuQltCXSljb250aW51ZTtsZXQgRjtNKEMpfHwoRj1DLEM9Ri5maWVsZCxhPUYucXVlcnl8fGEsYz1hYShGLmxpbWl0LGMpLHg9YWEoRi5vZmZzZXQseCksaz1hYShGLnN1Z2dlc3QsayksdD1yJiZ0aGlzLnN0b3JlJiZhYShGLmhpZ2hsaWdodCx0KSxxPSEhdHx8ciYmdGhpcy5zdG9yZSYmYWEoRi5lbnJpY2gscSksbT1hYShGLmNhY2hlLG0pKTtpZihlKXo9ZVtCXTtlbHNle0E9Rnx8Ynx8e307RD1BLmVucmljaDt2YXIgRT10aGlzLmluZGV4LmdldChDKTtuJiYodGhpcy5kYiYmKEEudGFnPW4sRz1FLmRiLnN1cHBvcnRfdGFnX3NlYXJjaCxBLmZpZWxkPXApLCFHJiZEJiYoQS5lbnJpY2g9ITEpKTt6PW0/RS5zZWFyY2hDYWNoZShhLGMsQSk6RS5zZWFyY2goYSxjLEEpO0QmJihBLmVucmljaD1EKTtpZih2KXt2W0JdPXo7Y29udGludWV9fUs9KHo9ei5yZXN1bHR8fHopJiZ6Lmxlbmd0aDtpZihuJiZLKXtBPVtdO0Q9MDtpZih0aGlzLmRiJiZlKXtpZighRylmb3IoRT1wLmxlbmd0aDtFPFxuZS5sZW5ndGg7RSsrKXtsZXQgTj1lW0VdO2lmKE4mJk4ubGVuZ3RoKUQrKyxBLnB1c2goTik7ZWxzZSBpZighaylyZXR1cm4gcj9kOm5ldyBYKGQsdGhpcyl9fWVsc2UgZm9yKGxldCBOPTAsTyxQO048bi5sZW5ndGg7Tis9Mil7Tz10aGlzLnRhZy5nZXQobltOXSk7aWYoIU8paWYoayljb250aW51ZTtlbHNlIHJldHVybiByP2Q6bmV3IFgoZCx0aGlzKTtpZihQPShPPU8mJk8uZ2V0KG5bTisxXSkpJiZPLmxlbmd0aClEKyssQS5wdXNoKE8pO2Vsc2UgaWYoIWspcmV0dXJuIHI/ZDpuZXcgWChkLHRoaXMpfWlmKEQpe3o9ZWIoeixBLHIpO0s9ei5sZW5ndGg7aWYoIUsmJiFrKXJldHVybiByP3o6bmV3IFgoeix0aGlzKTtELS19fWlmKEspZlt1XT1DLGQucHVzaCh6KSx1Kys7ZWxzZSBpZihwLmxlbmd0aD09PTEpcmV0dXJuIHI/ZDpuZXcgWChkLHRoaXMpfWlmKHYpe2lmKHRoaXMuZGImJm4mJm4ubGVuZ3RoJiYhRylmb3IocT0wO3E8bi5sZW5ndGg7cSs9Mil7Zj10aGlzLmluZGV4LmdldChuW3FdKTtcbmlmKCFmKWlmKGspY29udGludWU7ZWxzZSByZXR1cm4gcj9kOm5ldyBYKGQsdGhpcyk7di5wdXNoKGYuZGIudGFnKG5bcSsxXSxjLHgsITEpKX1jb25zdCBCPXRoaXM7cmV0dXJuIFByb21pc2UuYWxsKHYpLnRoZW4oZnVuY3Rpb24oeil7YiYmKGIucmVzb2x2ZT1yKTt6Lmxlbmd0aCYmKHo9Qi5zZWFyY2goYSxjLGIseikpO3JldHVybiB6fSl9aWYoIXUpcmV0dXJuIHI/ZDpuZXcgWChkLHRoaXMpO2lmKGcmJighcXx8IXRoaXMuc3RvcmUpKXJldHVybiBkPWRbMF0scj9kOm5ldyBYKGQsdGhpcyk7dj1bXTtmb3IoeD0wO3g8Zi5sZW5ndGg7eCsrKXtuPWRbeF07cSYmbi5sZW5ndGgmJnR5cGVvZiBuWzBdLmRvYz09PVwidW5kZWZpbmVkXCImJih0aGlzLmRiP3YucHVzaChuPXRoaXMuaW5kZXguZ2V0KHRoaXMuZmllbGRbMF0pLmRiLmVucmljaChuKSk6bj1UYS5jYWxsKHRoaXMsbikpO2lmKGcpcmV0dXJuIHI/dD9jYihhLG4sdGhpcy5pbmRleCxnLHQpOm46bmV3IFgobix0aGlzKTtkW3hdPVxue2ZpZWxkOmZbeF0scmVzdWx0Om59fWlmKHEmJnRoaXMuZGImJnYubGVuZ3RoKXtjb25zdCBCPXRoaXM7cmV0dXJuIFByb21pc2UuYWxsKHYpLnRoZW4oZnVuY3Rpb24oeil7Zm9yKGxldCBDPTA7Qzx6Lmxlbmd0aDtDKyspZFtDXS5yZXN1bHQ9eltDXTt0JiYoZD1jYihhLGQsQi5pbmRleCxnLHQpKTtyZXR1cm4gaD9nYihkKTpkfSl9dCYmKGQ9Y2IoYSxkLHRoaXMuaW5kZXgsZyx0KSk7cmV0dXJuIGg/Z2IoZCk6ZH07XG5mdW5jdGlvbiBnYihhKXtjb25zdCBjPVtdLGI9SSgpLGU9SSgpO2ZvcihsZXQgZD0wLGYsZyxoLGssbCxtLHA7ZDxhLmxlbmd0aDtkKyspe2Y9YVtkXTtnPWYuZmllbGQ7aD1mLnJlc3VsdDtmb3IobGV0IHU9MDt1PGgubGVuZ3RoO3UrKylpZihsPWhbdV0sdHlwZW9mIGwhPT1cIm9iamVjdFwiP2w9e2lkOms9bH06az1sLmlkLChtPWJba10pP20ucHVzaChnKToobC5maWVsZD1iW2tdPVtnXSxjLnB1c2gobCkpLHA9bC5oaWdobGlnaHQpbT1lW2tdLG18fChlW2tdPW09e30sbC5oaWdobGlnaHQ9bSksbVtnXT1wfXJldHVybiBjfWZ1bmN0aW9uIGZiKGEsYyxiLGUsZCl7YT10aGlzLnRhZy5nZXQoYSk7aWYoIWEpcmV0dXJuW107YT1hLmdldChjKTtpZighYSlyZXR1cm5bXTtjPWEubGVuZ3RoLWU7aWYoYz4wKXtpZihiJiZjPmJ8fGUpYT1hLnNsaWNlKGUsZStiKTtkJiYoYT1UYS5jYWxsKHRoaXMsYSkpfXJldHVybiBhfVxuZnVuY3Rpb24gVGEoYSl7aWYoIXRoaXN8fCF0aGlzLnN0b3JlKXJldHVybiBhO2lmKHRoaXMuZGIpcmV0dXJuIHRoaXMuaW5kZXguZ2V0KHRoaXMuZmllbGRbMF0pLmRiLmVucmljaChhKTtjb25zdCBjPUFycmF5KGEubGVuZ3RoKTtmb3IobGV0IGI9MCxlO2I8YS5sZW5ndGg7YisrKWU9YVtiXSxjW2JdPXtpZDplLGRvYzp0aGlzLnN0b3JlLmdldChlKX07cmV0dXJuIGN9O2Z1bmN0aW9uIE5hKGEpe2lmKCF0aGlzfHx0aGlzLmNvbnN0cnVjdG9yIT09TmEpcmV0dXJuIG5ldyBOYShhKTtjb25zdCBjPWEuZG9jdW1lbnR8fGEuZG9jfHxhO2xldCBiLGU7dGhpcy5CPVtdO3RoaXMuZmllbGQ9W107dGhpcy5EPVtdO3RoaXMua2V5PShiPWMua2V5fHxjLmlkKSYmaGIoYix0aGlzLkQpfHxcImlkXCI7KGU9YS5rZXlzdG9yZXx8MCkmJih0aGlzLmtleXN0b3JlPWUpO3RoaXMuZmFzdHVwZGF0ZT0hIWEuZmFzdHVwZGF0ZTt0aGlzLnJlZz0hdGhpcy5mYXN0dXBkYXRlfHxhLndvcmtlcnx8YS5kYj9lP25ldyBTKGUpOm5ldyBTZXQ6ZT9uZXcgUihlKTpuZXcgTWFwO3RoaXMuaD0oYj1jLnN0b3JlfHxudWxsKSYmYiYmYiE9PSEwJiZbXTt0aGlzLnN0b3JlPWI/ZT9uZXcgUihlKTpuZXcgTWFwOm51bGw7dGhpcy5jYWNoZT0oYj1hLmNhY2hlfHxudWxsKSYmbmV3IG1hKGIpO2EuY2FjaGU9ITE7dGhpcy53b3JrZXI9YS53b3JrZXJ8fCExO3RoaXMucHJpb3JpdHk9YS5wcmlvcml0eXx8XG40O3RoaXMuaW5kZXg9aWIuY2FsbCh0aGlzLGEsYyk7dGhpcy50YWc9bnVsbDtpZihiPWMudGFnKWlmKHR5cGVvZiBiPT09XCJzdHJpbmdcIiYmKGI9W2JdKSxiLmxlbmd0aCl7dGhpcy50YWc9bmV3IE1hcDt0aGlzLkE9W107dGhpcy5GPVtdO2ZvcihsZXQgZD0wLGYsZztkPGIubGVuZ3RoO2QrKyl7Zj1iW2RdO2c9Zi5maWVsZHx8ZjtpZighZyl0aHJvdyBFcnJvcihcIlRoZSB0YWcgZmllbGQgZnJvbSB0aGUgZG9jdW1lbnQgZGVzY3JpcHRvciBpcyB1bmRlZmluZWQuXCIpO2YuY3VzdG9tP3RoaXMuQVtkXT1mLmN1c3RvbToodGhpcy5BW2RdPWhiKGcsdGhpcy5EKSxmLmZpbHRlciYmKHR5cGVvZiB0aGlzLkFbZF09PT1cInN0cmluZ1wiJiYodGhpcy5BW2RdPW5ldyBTdHJpbmcodGhpcy5BW2RdKSksdGhpcy5BW2RdLkc9Zi5maWx0ZXIpKTt0aGlzLkZbZF09Zzt0aGlzLnRhZy5zZXQoZyxuZXcgTWFwKX19aWYodGhpcy53b3JrZXIpe3RoaXMuZmFzdHVwZGF0ZT0hMTthPVtdO2Zvcihjb25zdCBkIG9mIHRoaXMuaW5kZXgudmFsdWVzKCkpZC50aGVuJiZcbmEucHVzaChkKTtpZihhLmxlbmd0aCl7Y29uc3QgZD10aGlzO3JldHVybiBQcm9taXNlLmFsbChhKS50aGVuKGZ1bmN0aW9uKGYpe2xldCBnPTA7Zm9yKGNvbnN0IGggb2YgZC5pbmRleC5lbnRyaWVzKCkpe2NvbnN0IGs9aFswXTtsZXQgbD1oWzFdO2wudGhlbiYmKGw9ZltnXSxkLmluZGV4LnNldChrLGwpLGcrKyl9cmV0dXJuIGR9KX19ZWxzZSBhLmRiJiYodGhpcy5mYXN0dXBkYXRlPSExLHRoaXMubW91bnQoYS5kYikpfXc9TmEucHJvdG90eXBlO1xudy5tb3VudD1mdW5jdGlvbihhKXtsZXQgYz10aGlzLmZpZWxkO2lmKHRoaXMudGFnKWZvcihsZXQgZj0wLGc7Zjx0aGlzLkYubGVuZ3RoO2YrKyl7Zz10aGlzLkZbZl07dmFyIGI9dm9pZCAwO3RoaXMuaW5kZXguc2V0KGcsYj1uZXcgVCh7fSx0aGlzLnJlZykpO2M9PT10aGlzLmZpZWxkJiYoYz1jLnNsaWNlKDApKTtjLnB1c2goZyk7Yi50YWc9dGhpcy50YWcuZ2V0KGcpfWI9W107Y29uc3QgZT17ZGI6YS5kYix0eXBlOmEudHlwZSxmYXN0dXBkYXRlOmEuZmFzdHVwZGF0ZX07Zm9yKGxldCBmPTAsZyxoO2Y8Yy5sZW5ndGg7ZisrKXtlLmZpZWxkPWg9Y1tmXTtnPXRoaXMuaW5kZXguZ2V0KGgpO2NvbnN0IGs9bmV3IGEuY29uc3RydWN0b3IoYS5pZCxlKTtrLmlkPWEuaWQ7YltmXT1rLm1vdW50KGcpO2cuZG9jdW1lbnQ9ITA7Zj9nLmJ5cGFzcz0hMDpnLnN0b3JlPXRoaXMuc3RvcmV9Y29uc3QgZD10aGlzO3JldHVybiB0aGlzLmRiPVByb21pc2UuYWxsKGIpLnRoZW4oZnVuY3Rpb24oKXtkLmRiPVxuITB9KX07dy5jb21taXQ9YXN5bmMgZnVuY3Rpb24oKXtjb25zdCBhPVtdO2Zvcihjb25zdCBjIG9mIHRoaXMuaW5kZXgudmFsdWVzKCkpYS5wdXNoKGMuY29tbWl0KCkpO2F3YWl0IFByb21pc2UuYWxsKGEpO3RoaXMucmVnLmNsZWFyKCl9O3cuZGVzdHJveT1mdW5jdGlvbigpe2NvbnN0IGE9W107Zm9yKGNvbnN0IGMgb2YgdGhpcy5pbmRleC52YWx1ZXMoKSlhLnB1c2goYy5kZXN0cm95KCkpO3JldHVybiBQcm9taXNlLmFsbChhKX07XG5mdW5jdGlvbiBpYihhLGMpe2NvbnN0IGI9bmV3IE1hcDtsZXQgZT1jLmluZGV4fHxjLmZpZWxkfHxjO00oZSkmJihlPVtlXSk7Zm9yKGxldCBmPTAsZyxoO2Y8ZS5sZW5ndGg7ZisrKXtnPWVbZl07TShnKXx8KGg9ZyxnPWcuZmllbGQpO2g9YmEoaCk/T2JqZWN0LmFzc2lnbih7fSxhLGgpOmE7aWYodGhpcy53b3JrZXIpe3ZhciBkPXZvaWQgMDtkPShkPWguZW5jb2RlcikmJmQuZW5jb2RlP2Q6bmV3IGthKHR5cGVvZiBkPT09XCJzdHJpbmdcIj92YVtkXTpkfHx7fSk7ZD1uZXcgTGEoaCxkKTtiLnNldChnLGQpfXRoaXMud29ya2VyfHxiLnNldChnLG5ldyBUKGgsdGhpcy5yZWcpKTtoLmN1c3RvbT90aGlzLkJbZl09aC5jdXN0b206KHRoaXMuQltmXT1oYihnLHRoaXMuRCksaC5maWx0ZXImJih0eXBlb2YgdGhpcy5CW2ZdPT09XCJzdHJpbmdcIiYmKHRoaXMuQltmXT1uZXcgU3RyaW5nKHRoaXMuQltmXSkpLHRoaXMuQltmXS5HPWguZmlsdGVyKSk7dGhpcy5maWVsZFtmXT1nfWlmKHRoaXMuaCl7YT1cbmMuc3RvcmU7TShhKSYmKGE9W2FdKTtmb3IobGV0IGY9MCxnLGg7ZjxhLmxlbmd0aDtmKyspZz1hW2ZdLGg9Zy5maWVsZHx8ZyxnLmN1c3RvbT8odGhpcy5oW2ZdPWcuY3VzdG9tLGcuY3VzdG9tLk89aCk6KHRoaXMuaFtmXT1oYihoLHRoaXMuRCksZy5maWx0ZXImJih0eXBlb2YgdGhpcy5oW2ZdPT09XCJzdHJpbmdcIiYmKHRoaXMuaFtmXT1uZXcgU3RyaW5nKHRoaXMuaFtmXSkpLHRoaXMuaFtmXS5HPWcuZmlsdGVyKSl9cmV0dXJuIGJ9ZnVuY3Rpb24gaGIoYSxjKXtjb25zdCBiPWEuc3BsaXQoXCI6XCIpO2xldCBlPTA7Zm9yKGxldCBkPTA7ZDxiLmxlbmd0aDtkKyspYT1iW2RdLGFbYS5sZW5ndGgtMV09PT1cIl1cIiYmKGE9YS5zdWJzdHJpbmcoMCxhLmxlbmd0aC0yKSkmJihjW2VdPSEwKSxhJiYoYltlKytdPWEpO2U8Yi5sZW5ndGgmJihiLmxlbmd0aD1lKTtyZXR1cm4gZT4xP2I6YlswXX13LmFwcGVuZD1mdW5jdGlvbihhLGMpe3JldHVybiB0aGlzLmFkZChhLGMsITApfTtcbncudXBkYXRlPWZ1bmN0aW9uKGEsYyl7cmV0dXJuIHRoaXMucmVtb3ZlKGEpLmFkZChhLGMpfTt3LnJlbW92ZT1mdW5jdGlvbihhKXtiYShhKSYmKGE9Y2EoYSx0aGlzLmtleSkpO2Zvcih2YXIgYyBvZiB0aGlzLmluZGV4LnZhbHVlcygpKWMucmVtb3ZlKGEsITApO2lmKHRoaXMucmVnLmhhcyhhKSl7aWYodGhpcy50YWcmJiF0aGlzLmZhc3R1cGRhdGUpZm9yKGxldCBiIG9mIHRoaXMudGFnLnZhbHVlcygpKWZvcihsZXQgZSBvZiBiKXtjPWVbMF07Y29uc3QgZD1lWzFdLGY9ZC5pbmRleE9mKGEpO2Y+LTEmJihkLmxlbmd0aD4xP2Quc3BsaWNlKGYsMSk6Yi5kZWxldGUoYykpfXRoaXMuc3RvcmUmJnRoaXMuc3RvcmUuZGVsZXRlKGEpO3RoaXMucmVnLmRlbGV0ZShhKX10aGlzLmNhY2hlJiZ0aGlzLmNhY2hlLnJlbW92ZShhKTtyZXR1cm4gdGhpc307XG53LmNsZWFyPWZ1bmN0aW9uKCl7Y29uc3QgYT1bXTtmb3IoY29uc3QgYyBvZiB0aGlzLmluZGV4LnZhbHVlcygpKXtjb25zdCBiPWMuY2xlYXIoKTtiLnRoZW4mJmEucHVzaChiKX1pZih0aGlzLnRhZylmb3IoY29uc3QgYyBvZiB0aGlzLnRhZy52YWx1ZXMoKSljLmNsZWFyKCk7dGhpcy5zdG9yZSYmdGhpcy5zdG9yZS5jbGVhcigpO3RoaXMuY2FjaGUmJnRoaXMuY2FjaGUuY2xlYXIoKTtyZXR1cm4gYS5sZW5ndGg/UHJvbWlzZS5hbGwoYSk6dGhpc307dy5jb250YWluPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmRiP3RoaXMuaW5kZXguZ2V0KHRoaXMuZmllbGRbMF0pLmRiLmhhcyhhKTp0aGlzLnJlZy5oYXMoYSl9O3cuY2xlYW51cD1mdW5jdGlvbigpe2Zvcihjb25zdCBhIG9mIHRoaXMuaW5kZXgudmFsdWVzKCkpYS5jbGVhbnVwKCk7cmV0dXJuIHRoaXN9O1xudy5nZXQ9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZGI/dGhpcy5pbmRleC5nZXQodGhpcy5maWVsZFswXSkuZGIuZW5yaWNoKGEpLnRoZW4oZnVuY3Rpb24oYyl7cmV0dXJuIGNbMF0mJmNbMF0uZG9jfHxudWxsfSk6dGhpcy5zdG9yZS5nZXQoYSl8fG51bGx9O3cuc2V0PWZ1bmN0aW9uKGEsYyl7dHlwZW9mIGE9PT1cIm9iamVjdFwiJiYoYz1hLGE9Y2EoYyx0aGlzLmtleSkpO3RoaXMuc3RvcmUuc2V0KGEsYyk7cmV0dXJuIHRoaXN9O3cuc2VhcmNoQ2FjaGU9bGE7dy5leHBvcnQ9amI7dy5pbXBvcnQ9a2I7RmEoTmEucHJvdG90eXBlKTtmdW5jdGlvbiBsYihhLGM9MCl7bGV0IGI9W10sZT1bXTtjJiYoYz0yNUU0L2MqNUUzfDApO2Zvcihjb25zdCBkIG9mIGEuZW50cmllcygpKWUucHVzaChkKSxlLmxlbmd0aD09PWMmJihiLnB1c2goZSksZT1bXSk7ZS5sZW5ndGgmJmIucHVzaChlKTtyZXR1cm4gYn1mdW5jdGlvbiBtYihhLGMpe2N8fChjPW5ldyBNYXApO2ZvcihsZXQgYj0wLGU7YjxhLmxlbmd0aDtiKyspZT1hW2JdLGMuc2V0KGVbMF0sZVsxXSk7cmV0dXJuIGN9ZnVuY3Rpb24gbmIoYSxjPTApe2xldCBiPVtdLGU9W107YyYmKGM9MjVFNC9jKjFFM3wwKTtmb3IoY29uc3QgZCBvZiBhLmVudHJpZXMoKSllLnB1c2goW2RbMF0sbGIoZFsxXSlbMF1dKSxlLmxlbmd0aD09PWMmJihiLnB1c2goZSksZT1bXSk7ZS5sZW5ndGgmJmIucHVzaChlKTtyZXR1cm4gYn1cbmZ1bmN0aW9uIG9iKGEsYyl7Y3x8KGM9bmV3IE1hcCk7Zm9yKGxldCBiPTAsZSxkO2I8YS5sZW5ndGg7YisrKWU9YVtiXSxkPWMuZ2V0KGVbMF0pLGMuc2V0KGVbMF0sbWIoZVsxXSxkKSk7cmV0dXJuIGN9ZnVuY3Rpb24gcGIoYSl7bGV0IGM9W10sYj1bXTtmb3IoY29uc3QgZSBvZiBhLmtleXMoKSliLnB1c2goZSksYi5sZW5ndGg9PT0yNUU0JiYoYy5wdXNoKGIpLGI9W10pO2IubGVuZ3RoJiZjLnB1c2goYik7cmV0dXJuIGN9ZnVuY3Rpb24gcWIoYSxjKXtjfHwoYz1uZXcgU2V0KTtmb3IobGV0IGI9MDtiPGEubGVuZ3RoO2IrKyljLmFkZChhW2JdKTtyZXR1cm4gY31cbmZ1bmN0aW9uIHJiKGEsYyxiLGUsZCxmLGc9MCl7Y29uc3QgaD1lJiZlLmNvbnN0cnVjdG9yPT09QXJyYXk7dmFyIGs9aD9lLnNoaWZ0KCk6ZTtpZighaylyZXR1cm4gdGhpcy5leHBvcnQoYSxjLGQsZisxKTtpZigoaz1hKChjP2MrXCIuXCI6XCJcIikrKGcrMSkrXCIuXCIrYixKU09OLnN0cmluZ2lmeShrKSkpJiZrLnRoZW4pe2NvbnN0IGw9dGhpcztyZXR1cm4gay50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIHJiLmNhbGwobCxhLGMsYixoP2U6bnVsbCxkLGYsZysxKX0pfXJldHVybiByYi5jYWxsKHRoaXMsYSxjLGIsaD9lOm51bGwsZCxmLGcrMSl9XG5mdW5jdGlvbiBqYihhLGMsYj0wLGU9MCl7aWYoYjx0aGlzLmZpZWxkLmxlbmd0aCl7Y29uc3QgZz10aGlzLmZpZWxkW2JdO2lmKChjPXRoaXMuaW5kZXguZ2V0KGcpLmV4cG9ydChhLGcsYixlPTEpKSYmYy50aGVuKXtjb25zdCBoPXRoaXM7cmV0dXJuIGMudGhlbihmdW5jdGlvbigpe3JldHVybiBoLmV4cG9ydChhLGcsYisxKX0pfXJldHVybiB0aGlzLmV4cG9ydChhLGcsYisxKX1sZXQgZCxmO3N3aXRjaChlKXtjYXNlIDA6ZD1cInJlZ1wiO2Y9cGIodGhpcy5yZWcpO2M9bnVsbDticmVhaztjYXNlIDE6ZD1cInRhZ1wiO2Y9dGhpcy50YWcmJm5iKHRoaXMudGFnLHRoaXMucmVnLnNpemUpO2M9bnVsbDticmVhaztjYXNlIDI6ZD1cImRvY1wiO2Y9dGhpcy5zdG9yZSYmbGIodGhpcy5zdG9yZSk7Yz1udWxsO2JyZWFrO2RlZmF1bHQ6cmV0dXJufXJldHVybiByYi5jYWxsKHRoaXMsYSxjLGQsZnx8bnVsbCxiLGUpfVxuZnVuY3Rpb24ga2IoYSxjKXt2YXIgYj1hLnNwbGl0KFwiLlwiKTtiW2IubGVuZ3RoLTFdPT09XCJqc29uXCImJmIucG9wKCk7Y29uc3QgZT1iLmxlbmd0aD4yP2JbMF06XCJcIjtiPWIubGVuZ3RoPjI/YlsyXTpiWzFdO2lmKHRoaXMud29ya2VyJiZlKXJldHVybiB0aGlzLmluZGV4LmdldChlKS5pbXBvcnQoYSk7aWYoYyl7dHlwZW9mIGM9PT1cInN0cmluZ1wiJiYoYz1KU09OLnBhcnNlKGMpKTtpZihlKXJldHVybiB0aGlzLmluZGV4LmdldChlKS5pbXBvcnQoYixjKTtzd2l0Y2goYil7Y2FzZSBcInJlZ1wiOnRoaXMuZmFzdHVwZGF0ZT0hMTt0aGlzLnJlZz1xYihjLHRoaXMucmVnKTtmb3IobGV0IGQ9MCxmO2Q8dGhpcy5maWVsZC5sZW5ndGg7ZCsrKWY9dGhpcy5pbmRleC5nZXQodGhpcy5maWVsZFtkXSksZi5mYXN0dXBkYXRlPSExLGYucmVnPXRoaXMucmVnO2lmKHRoaXMud29ya2VyKXtjPVtdO2Zvcihjb25zdCBkIG9mIHRoaXMuaW5kZXgudmFsdWVzKCkpYy5wdXNoKGQuaW1wb3J0KGEpKTtyZXR1cm4gUHJvbWlzZS5hbGwoYyl9YnJlYWs7XG5jYXNlIFwidGFnXCI6dGhpcy50YWc9b2IoYyx0aGlzLnRhZyk7YnJlYWs7Y2FzZSBcImRvY1wiOnRoaXMuc3RvcmU9bWIoYyx0aGlzLnN0b3JlKX19fWZ1bmN0aW9uIHNiKGEsYyl7bGV0IGI9XCJcIjtmb3IoY29uc3QgZSBvZiBhLmVudHJpZXMoKSl7YT1lWzBdO2NvbnN0IGQ9ZVsxXTtsZXQgZj1cIlwiO2ZvcihsZXQgZz0wLGg7ZzxkLmxlbmd0aDtnKyspe2g9ZFtnXXx8W1wiXCJdO2xldCBrPVwiXCI7Zm9yKGxldCBsPTA7bDxoLmxlbmd0aDtsKyspays9KGs/XCIsXCI6XCJcIikrKGM9PT1cInN0cmluZ1wiPydcIicraFtsXSsnXCInOmhbbF0pO2s9XCJbXCIraytcIl1cIjtmKz0oZj9cIixcIjpcIlwiKStrfWY9J1tcIicrYSsnXCIsWycrZitcIl1dXCI7Yis9KGI/XCIsXCI6XCJcIikrZn1yZXR1cm4gYn07VC5wcm90b3R5cGUucmVtb3ZlPWZ1bmN0aW9uKGEsYyl7Y29uc3QgYj10aGlzLnJlZy5zaXplJiYodGhpcy5mYXN0dXBkYXRlP3RoaXMucmVnLmdldChhKTp0aGlzLnJlZy5oYXMoYSkpO2lmKGIpe2lmKHRoaXMuZmFzdHVwZGF0ZSlmb3IobGV0IGU9MCxkLGY7ZTxiLmxlbmd0aDtlKyspe2lmKChkPWJbZV0pJiYoZj1kLmxlbmd0aCkpaWYoZFtmLTFdPT09YSlkLnBvcCgpO2Vsc2V7Y29uc3QgZz1kLmluZGV4T2YoYSk7Zz49MCYmZC5zcGxpY2UoZywxKX19ZWxzZSB0Yih0aGlzLm1hcCxhKSx0aGlzLmRlcHRoJiZ0Yih0aGlzLmN0eCxhKTtjfHx0aGlzLnJlZy5kZWxldGUoYSl9dGhpcy5kYiYmKHRoaXMuY29tbWl0X3Rhc2sucHVzaCh7ZGVsOmF9KSx0aGlzLk0mJnViKHRoaXMpKTt0aGlzLmNhY2hlJiZ0aGlzLmNhY2hlLnJlbW92ZShhKTtyZXR1cm4gdGhpc307XG5mdW5jdGlvbiB0YihhLGMpe2xldCBiPTA7dmFyIGU9dHlwZW9mIGM9PT1cInVuZGVmaW5lZFwiO2lmKGEuY29uc3RydWN0b3I9PT1BcnJheSlmb3IobGV0IGQ9MCxmLGcsaDtkPGEubGVuZ3RoO2QrKyl7aWYoKGY9YVtkXSkmJmYubGVuZ3RoKXtpZihlKXJldHVybiAxO2c9Zi5pbmRleE9mKGMpO2lmKGc+PTApe2lmKGYubGVuZ3RoPjEpcmV0dXJuIGYuc3BsaWNlKGcsMSksMTtkZWxldGUgYVtkXTtpZihiKXJldHVybiAxO2g9MX1lbHNle2lmKGgpcmV0dXJuIDE7YisrfX19ZWxzZSBmb3IobGV0IGQgb2YgYS5lbnRyaWVzKCkpZT1kWzBdLHRiKGRbMV0sYyk/YisrOmEuZGVsZXRlKGUpO3JldHVybiBifTtjb25zdCB2Yj17bWVtb3J5OntyZXNvbHV0aW9uOjF9LHBlcmZvcm1hbmNlOntyZXNvbHV0aW9uOjMsZmFzdHVwZGF0ZTohMCxjb250ZXh0OntkZXB0aDoxLHJlc29sdXRpb246MX19LG1hdGNoOnt0b2tlbml6ZTpcImZvcndhcmRcIn0sc2NvcmU6e3Jlc29sdXRpb246OSxjb250ZXh0OntkZXB0aDoyLHJlc29sdXRpb246M319fTtULnByb3RvdHlwZS5hZGQ9ZnVuY3Rpb24oYSxjLGIsZSl7aWYoYyYmKGF8fGE9PT0wKSl7aWYoIWUmJiFiJiZ0aGlzLnJlZy5oYXMoYSkpcmV0dXJuIHRoaXMudXBkYXRlKGEsYyk7ZT10aGlzLmRlcHRoO2M9dGhpcy5lbmNvZGVyLmVuY29kZShjLCFlKTtjb25zdCBsPWMubGVuZ3RoO2lmKGwpe2NvbnN0IG09SSgpLHA9SSgpLHU9dGhpcy5yZXNvbHV0aW9uO2ZvcihsZXQgcj0wO3I8bDtyKyspe2xldCB0PWNbdGhpcy5ydGw/bC0xLXI6cl07dmFyIGQ9dC5sZW5ndGg7aWYoZCYmKGV8fCFwW3RdKSl7dmFyIGY9dGhpcy5zY29yZT90aGlzLnNjb3JlKGMsdCxyLG51bGwsMCk6d2IodSxsLHIpLGc9XCJcIjtzd2l0Y2godGhpcy50b2tlbml6ZSl7Y2FzZSBcInRvbGVyYW50XCI6WSh0aGlzLHAsdCxmLGEsYik7aWYoZD4yKXtmb3IobGV0IG49MSxxLHgsdixBO248ZC0xO24rKylxPXQuY2hhckF0KG4pLHg9dC5jaGFyQXQobisxKSx2PXQuc3Vic3RyaW5nKDAsbikreCxBPXQuc3Vic3RyaW5nKG4rXG4yKSxnPXYrcStBLFkodGhpcyxwLGcsZixhLGIpLGc9ditBLFkodGhpcyxwLGcsZixhLGIpO1kodGhpcyxwLHQuc3Vic3RyaW5nKDAsdC5sZW5ndGgtMSksZixhLGIpfWJyZWFrO2Nhc2UgXCJmdWxsXCI6aWYoZD4yKXtmb3IobGV0IG49MCxxO248ZDtuKyspZm9yKGY9ZDtmPm47Zi0tKXtnPXQuc3Vic3RyaW5nKG4sZik7cT10aGlzLnJ0bD9kLTEtbjpuO3ZhciBoPXRoaXMuc2NvcmU/dGhpcy5zY29yZShjLHQscixnLHEpOndiKHUsbCxyLGQscSk7WSh0aGlzLHAsZyxoLGEsYil9YnJlYWt9Y2FzZSBcImJpZGlyZWN0aW9uYWxcIjpjYXNlIFwicmV2ZXJzZVwiOmlmKGQ+MSl7Zm9yKGg9ZC0xO2g+MDtoLS0pe2c9dFt0aGlzLnJ0bD9kLTEtaDpoXStnO3ZhciBrPXRoaXMuc2NvcmU/dGhpcy5zY29yZShjLHQscixnLGgpOndiKHUsbCxyLGQsaCk7WSh0aGlzLHAsZyxrLGEsYil9Zz1cIlwifWNhc2UgXCJmb3J3YXJkXCI6aWYoZD4xKXtmb3IoaD0wO2g8ZDtoKyspZys9dFt0aGlzLnJ0bD9kLTEtaDpoXSxZKHRoaXMsXG5wLGcsZixhLGIpO2JyZWFrfWRlZmF1bHQ6aWYoWSh0aGlzLHAsdCxmLGEsYiksZSYmbD4xJiZyPGwtMSlmb3IoZD10aGlzLk4sZz10LGY9TWF0aC5taW4oZSsxLHRoaXMucnRsP3IrMTpsLXIpLGg9MTtoPGY7aCsrKXt0PWNbdGhpcy5ydGw/bC0xLXItaDpyK2hdO2s9dGhpcy5iaWRpcmVjdGlvbmFsJiZ0Pmc7Y29uc3Qgbj10aGlzLnNjb3JlP3RoaXMuc2NvcmUoYyxnLHIsdCxoLTEpOndiKGQrKGwvMj5kPzA6MSksbCxyLGYtMSxoLTEpO1kodGhpcyxtLGs/Zzp0LG4sYSxiLGs/dDpnKX19fX10aGlzLmZhc3R1cGRhdGV8fHRoaXMucmVnLmFkZChhKX19dGhpcy5kYiYmKHRoaXMuY29tbWl0X3Rhc2sucHVzaChiP3tpbnM6YX06e2RlbDphfSksdGhpcy5NJiZ1Yih0aGlzKSk7cmV0dXJuIHRoaXN9O1xuZnVuY3Rpb24gWShhLGMsYixlLGQsZixnKXtsZXQgaCxrO2lmKCEoaD1jW2JdKXx8ZyYmIWhbZ10pe2c/KGM9aHx8KGNbYl09SSgpKSxjW2ddPTEsaz1hLmN0eCwoaD1rLmdldChnKSk/az1oOmsuc2V0KGcsaz1hLmtleXN0b3JlP25ldyBSKGEua2V5c3RvcmUpOm5ldyBNYXApKTooaz1hLm1hcCxjW2JdPTEpOyhoPWsuZ2V0KGIpKT9rPWg6ay5zZXQoYixrPWg9W10pO2lmKGYpZm9yKGxldCBsPTAsbTtsPGgubGVuZ3RoO2wrKylpZigobT1oW2xdKSYmbS5pbmNsdWRlcyhkKSl7aWYobDw9ZSlyZXR1cm47bS5zcGxpY2UobS5pbmRleE9mKGQpLDEpO2EuZmFzdHVwZGF0ZSYmKGM9YS5yZWcuZ2V0KGQpKSYmYy5zcGxpY2UoYy5pbmRleE9mKG0pLDEpO2JyZWFrfWs9a1tlXXx8KGtbZV09W10pO2sucHVzaChkKTtpZihrLmxlbmd0aD09PTIqKjMxLTEpe2M9bmV3IHhhKGspO2lmKGEuZmFzdHVwZGF0ZSlmb3IobGV0IGwgb2YgYS5yZWcudmFsdWVzKCkpbC5pbmNsdWRlcyhrKSYmKGxbbC5pbmRleE9mKGspXT1cbmMpO2hbZV09az1jfWEuZmFzdHVwZGF0ZSYmKChlPWEucmVnLmdldChkKSk/ZS5wdXNoKGspOmEucmVnLnNldChkLFtrXSkpfX1mdW5jdGlvbiB3YihhLGMsYixlLGQpe3JldHVybiBiJiZhPjE/YysoZXx8MCk8PWE/YisoZHx8MCk6KGEtMSkvKGMrKGV8fDApKSooYisoZHx8MCkpKzF8MDowfTtULnByb3RvdHlwZS5zZWFyY2g9ZnVuY3Rpb24oYSxjLGIpe2J8fChjfHx0eXBlb2YgYSE9PVwib2JqZWN0XCI/dHlwZW9mIGM9PT1cIm9iamVjdFwiJiYoYj1jLGM9MCk6KGI9YSxhPVwiXCIpKTtpZihiJiZiLmNhY2hlKXJldHVybiBiLmNhY2hlPSExLGE9dGhpcy5zZWFyY2hDYWNoZShhLGMsYiksYi5jYWNoZT0hMCxhO2xldCBlPVtdLGQsZixnLGg9MCxrLGwsbSxwLHU7YiYmKGE9Yi5xdWVyeXx8YSxjPWIubGltaXR8fGMsaD1iLm9mZnNldHx8MCxmPWIuY29udGV4dCxnPWIuc3VnZ2VzdCx1PShrPWIucmVzb2x2ZSkmJmIuZW5yaWNoLG09Yi5ib29zdCxwPWIucmVzb2x1dGlvbixsPXRoaXMuZGImJmIudGFnKTt0eXBlb2Ygaz09PVwidW5kZWZpbmVkXCImJihrPXRoaXMucmVzb2x2ZSk7Zj10aGlzLmRlcHRoJiZmIT09ITE7bGV0IHI9dGhpcy5lbmNvZGVyLmVuY29kZShhLCFmKTtkPXIubGVuZ3RoO2M9Y3x8KGs/MTAwOjApO2lmKGQ9PT0xKXJldHVybiB4Yi5jYWxsKHRoaXMsclswXSxcIlwiLGMsXG5oLGssdSxsKTtpZihkPT09MiYmZiYmIWcpcmV0dXJuIHhiLmNhbGwodGhpcyxyWzFdLHJbMF0sYyxoLGssdSxsKTtsZXQgdD1JKCksbj0wLHE7ZiYmKHE9clswXSxuPTEpO3B8fHA9PT0wfHwocD1xP3RoaXMuTjp0aGlzLnJlc29sdXRpb24pO2lmKHRoaXMuZGIpe2lmKHRoaXMuZGIuc2VhcmNoJiYoYj10aGlzLmRiLnNlYXJjaCh0aGlzLHIsYyxoLGcsayx1LGwpLGIhPT0hMSkpcmV0dXJuIGI7Y29uc3QgeD10aGlzO3JldHVybiBhc3luYyBmdW5jdGlvbigpe2ZvcihsZXQgdixBO248ZDtuKyspe2lmKChBPXJbbl0pJiYhdFtBXSl7dFtBXT0xO3Y9YXdhaXQgeWIoeCxBLHEsMCwwLCExLCExKTtpZih2PXpiKHYsZSxnLHApKXtlPXY7YnJlYWt9cSYmKGcmJnYmJmUubGVuZ3RofHwocT1BKSl9ZyYmcSYmbj09PWQtMSYmIWUubGVuZ3RoJiYocD14LnJlc29sdXRpb24scT1cIlwiLG49LTEsdD1JKCkpfXJldHVybiBBYihlLHAsYyxoLGcsbSxrKX0oKX1mb3IobGV0IHgsdjtuPGQ7bisrKXtpZigodj1cbnJbbl0pJiYhdFt2XSl7dFt2XT0xO3g9eWIodGhpcyx2LHEsMCwwLCExLCExKTtpZih4PXpiKHgsZSxnLHApKXtlPXg7YnJlYWt9cSYmKGcmJngmJmUubGVuZ3RofHwocT12KSl9ZyYmcSYmbj09PWQtMSYmIWUubGVuZ3RoJiYocD10aGlzLnJlc29sdXRpb24scT1cIlwiLG49LTEsdD1JKCkpfXJldHVybiBBYihlLHAsYyxoLGcsbSxrKX07ZnVuY3Rpb24gQWIoYSxjLGIsZSxkLGYsZyl7bGV0IGg9YS5sZW5ndGgsaz1hO2lmKGg+MSlrPSRhKGEsYyxiLGUsZCxmLGcpO2Vsc2UgaWYoaD09PTEpcmV0dXJuIGc/U2EuY2FsbChudWxsLGFbMF0sYixlKTpuZXcgWChhWzBdLHRoaXMpO3JldHVybiBnP2s6bmV3IFgoayx0aGlzKX1cbmZ1bmN0aW9uIHhiKGEsYyxiLGUsZCxmLGcpe2E9eWIodGhpcyxhLGMsYixlLGQsZixnKTtyZXR1cm4gdGhpcy5kYj9hLnRoZW4oZnVuY3Rpb24oaCl7cmV0dXJuIGQ/aHx8W106bmV3IFgoaCx0aGlzKX0pOmEmJmEubGVuZ3RoP2Q/U2EuY2FsbCh0aGlzLGEsYixlKTpuZXcgWChhLHRoaXMpOmQ/W106bmV3IFgoW10sdGhpcyl9ZnVuY3Rpb24gemIoYSxjLGIsZSl7bGV0IGQ9W107aWYoYSYmYS5sZW5ndGgpe2lmKGEubGVuZ3RoPD1lKXtjLnB1c2goYSk7cmV0dXJufWZvcihsZXQgZj0wLGc7ZjxlO2YrKylpZihnPWFbZl0pZFtmXT1nO2lmKGQubGVuZ3RoKXtjLnB1c2goZCk7cmV0dXJufX1pZighYilyZXR1cm4gZH1cbmZ1bmN0aW9uIHliKGEsYyxiLGUsZCxmLGcsaCl7bGV0IGs7YiYmKGs9YS5iaWRpcmVjdGlvbmFsJiZjPmIpJiYoaz1iLGI9YyxjPWspO2lmKGEuZGIpcmV0dXJuIGEuZGIuZ2V0KGMsYixlLGQsZixnLGgpO2E9Yj8oYT1hLmN0eC5nZXQoYikpJiZhLmdldChjKTphLm1hcC5nZXQoYyk7cmV0dXJuIGF9O2Z1bmN0aW9uIFQoYSxjKXtpZighdGhpc3x8dGhpcy5jb25zdHJ1Y3RvciE9PVQpcmV0dXJuIG5ldyBUKGEpO2lmKGEpe3ZhciBiPU0oYSk/YTphLnByZXNldDtiJiYoYT1PYmplY3QuYXNzaWduKHt9LHZiW2JdLGEpKX1lbHNlIGE9e307Yj1hLmNvbnRleHQ7Y29uc3QgZT1iPT09ITA/e2RlcHRoOjF9OmJ8fHt9LGQ9TShhLmVuY29kZXIpP3ZhW2EuZW5jb2Rlcl06YS5lbmNvZGV8fGEuZW5jb2Rlcnx8e307dGhpcy5lbmNvZGVyPWQuZW5jb2RlP2Q6dHlwZW9mIGQ9PT1cIm9iamVjdFwiP25ldyBrYShkKTp7ZW5jb2RlOmR9O3RoaXMucmVzb2x1dGlvbj1hLnJlc29sdXRpb258fDk7dGhpcy50b2tlbml6ZT1iPShiPWEudG9rZW5pemUpJiZiIT09XCJkZWZhdWx0XCImJmIhPT1cImV4YWN0XCImJmJ8fFwic3RyaWN0XCI7dGhpcy5kZXB0aD1iPT09XCJzdHJpY3RcIiYmZS5kZXB0aHx8MDt0aGlzLmJpZGlyZWN0aW9uYWw9ZS5iaWRpcmVjdGlvbmFsIT09ITE7dGhpcy5mYXN0dXBkYXRlPSEhYS5mYXN0dXBkYXRlO1xudGhpcy5zY29yZT1hLnNjb3JlfHxudWxsOyhiPWEua2V5c3RvcmV8fDApJiYodGhpcy5rZXlzdG9yZT1iKTt0aGlzLm1hcD1iP25ldyBSKGIpOm5ldyBNYXA7dGhpcy5jdHg9Yj9uZXcgUihiKTpuZXcgTWFwO3RoaXMucmVnPWN8fCh0aGlzLmZhc3R1cGRhdGU/Yj9uZXcgUihiKTpuZXcgTWFwOmI/bmV3IFMoYik6bmV3IFNldCk7dGhpcy5OPWUucmVzb2x1dGlvbnx8Mzt0aGlzLnJ0bD1kLnJ0bHx8YS5ydGx8fCExO3RoaXMuY2FjaGU9KGI9YS5jYWNoZXx8bnVsbCkmJm5ldyBtYShiKTt0aGlzLnJlc29sdmU9YS5yZXNvbHZlIT09ITE7aWYoYj1hLmRiKXRoaXMuZGI9dGhpcy5tb3VudChiKTt0aGlzLk09YS5jb21taXQhPT0hMTt0aGlzLmNvbW1pdF90YXNrPVtdO3RoaXMuY29tbWl0X3RpbWVyPW51bGw7dGhpcy5wcmlvcml0eT1hLnByaW9yaXR5fHw0fXc9VC5wcm90b3R5cGU7XG53Lm1vdW50PWZ1bmN0aW9uKGEpe3RoaXMuY29tbWl0X3RpbWVyJiYoY2xlYXJUaW1lb3V0KHRoaXMuY29tbWl0X3RpbWVyKSx0aGlzLmNvbW1pdF90aW1lcj1udWxsKTtyZXR1cm4gYS5tb3VudCh0aGlzKX07dy5jb21taXQ9ZnVuY3Rpb24oKXt0aGlzLmNvbW1pdF90aW1lciYmKGNsZWFyVGltZW91dCh0aGlzLmNvbW1pdF90aW1lciksdGhpcy5jb21taXRfdGltZXI9bnVsbCk7cmV0dXJuIHRoaXMuZGIuY29tbWl0KHRoaXMpfTt3LmRlc3Ryb3k9ZnVuY3Rpb24oKXt0aGlzLmNvbW1pdF90aW1lciYmKGNsZWFyVGltZW91dCh0aGlzLmNvbW1pdF90aW1lciksdGhpcy5jb21taXRfdGltZXI9bnVsbCk7cmV0dXJuIHRoaXMuZGIuZGVzdHJveSgpfTtmdW5jdGlvbiB1YihhKXthLmNvbW1pdF90aW1lcnx8KGEuY29tbWl0X3RpbWVyPXNldFRpbWVvdXQoZnVuY3Rpb24oKXthLmNvbW1pdF90aW1lcj1udWxsO2EuZGIuY29tbWl0KGEpfSwxKSl9XG53LmNsZWFyPWZ1bmN0aW9uKCl7dGhpcy5tYXAuY2xlYXIoKTt0aGlzLmN0eC5jbGVhcigpO3RoaXMucmVnLmNsZWFyKCk7dGhpcy5jYWNoZSYmdGhpcy5jYWNoZS5jbGVhcigpO3JldHVybiB0aGlzLmRiPyh0aGlzLmNvbW1pdF90aW1lciYmY2xlYXJUaW1lb3V0KHRoaXMuY29tbWl0X3RpbWVyKSx0aGlzLmNvbW1pdF90aW1lcj1udWxsLHRoaXMuY29tbWl0X3Rhc2s9W10sdGhpcy5kYi5jbGVhcigpKTp0aGlzfTt3LmFwcGVuZD1mdW5jdGlvbihhLGMpe3JldHVybiB0aGlzLmFkZChhLGMsITApfTt3LmNvbnRhaW49ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZGI/dGhpcy5kYi5oYXMoYSk6dGhpcy5yZWcuaGFzKGEpfTt3LnVwZGF0ZT1mdW5jdGlvbihhLGMpe2NvbnN0IGI9dGhpcyxlPXRoaXMucmVtb3ZlKGEpO3JldHVybiBlJiZlLnRoZW4/ZS50aGVuKCgpPT5iLmFkZChhLGMpKTp0aGlzLmFkZChhLGMpfTtcbncuY2xlYW51cD1mdW5jdGlvbigpe2lmKCF0aGlzLmZhc3R1cGRhdGUpcmV0dXJuIHRoaXM7dGIodGhpcy5tYXApO3RoaXMuZGVwdGgmJnRiKHRoaXMuY3R4KTtyZXR1cm4gdGhpc307dy5zZWFyY2hDYWNoZT1sYTt3LmV4cG9ydD1mdW5jdGlvbihhLGMsYj0wLGU9MCl7bGV0IGQsZjtzd2l0Y2goZSl7Y2FzZSAwOmQ9XCJyZWdcIjtmPXBiKHRoaXMucmVnKTticmVhaztjYXNlIDE6ZD1cImNmZ1wiO2Y9bnVsbDticmVhaztjYXNlIDI6ZD1cIm1hcFwiO2Y9bGIodGhpcy5tYXAsdGhpcy5yZWcuc2l6ZSk7YnJlYWs7Y2FzZSAzOmQ9XCJjdHhcIjtmPW5iKHRoaXMuY3R4LHRoaXMucmVnLnNpemUpO2JyZWFrO2RlZmF1bHQ6cmV0dXJufXJldHVybiByYi5jYWxsKHRoaXMsYSxjLGQsZixiLGUpfTtcbncuaW1wb3J0PWZ1bmN0aW9uKGEsYyl7aWYoYylzd2l0Y2godHlwZW9mIGM9PT1cInN0cmluZ1wiJiYoYz1KU09OLnBhcnNlKGMpKSxhPWEuc3BsaXQoXCIuXCIpLGFbYS5sZW5ndGgtMV09PT1cImpzb25cIiYmYS5wb3AoKSxhLmxlbmd0aD09PTMmJmEuc2hpZnQoKSxhPWEubGVuZ3RoPjE/YVsxXTphWzBdLGEpe2Nhc2UgXCJyZWdcIjp0aGlzLmZhc3R1cGRhdGU9ITE7dGhpcy5yZWc9cWIoYyx0aGlzLnJlZyk7YnJlYWs7Y2FzZSBcIm1hcFwiOnRoaXMubWFwPW1iKGMsdGhpcy5tYXApO2JyZWFrO2Nhc2UgXCJjdHhcIjp0aGlzLmN0eD1vYihjLHRoaXMuY3R4KX19O1xudy5zZXJpYWxpemU9ZnVuY3Rpb24oYT0hMCl7bGV0IGM9XCJcIixiPVwiXCIsZT1cIlwiO2lmKHRoaXMucmVnLnNpemUpe2xldCBmO2Zvcih2YXIgZCBvZiB0aGlzLnJlZy5rZXlzKCkpZnx8KGY9dHlwZW9mIGQpLGMrPShjP1wiLFwiOlwiXCIpKyhmPT09XCJzdHJpbmdcIj8nXCInK2QrJ1wiJzpkKTtjPVwiaW5kZXgucmVnPW5ldyBTZXQoW1wiK2MrXCJdKTtcIjtiPXNiKHRoaXMubWFwLGYpO2I9XCJpbmRleC5tYXA9bmV3IE1hcChbXCIrYitcIl0pO1wiO2Zvcihjb25zdCBnIG9mIHRoaXMuY3R4LmVudHJpZXMoKSl7ZD1nWzBdO2xldCBoPXNiKGdbMV0sZik7aD1cIm5ldyBNYXAoW1wiK2grXCJdKVwiO2g9J1tcIicrZCsnXCIsJytoK1wiXVwiO2UrPShlP1wiLFwiOlwiXCIpK2h9ZT1cImluZGV4LmN0eD1uZXcgTWFwKFtcIitlK1wiXSk7XCJ9cmV0dXJuIGE/XCJmdW5jdGlvbiBpbmplY3QoaW5kZXgpe1wiK2MrYitlK1wifVwiOmMrYitlfTtGYShULnByb3RvdHlwZSk7Y29uc3QgQmI9dHlwZW9mIHdpbmRvdyE9PVwidW5kZWZpbmVkXCImJih3aW5kb3cuaW5kZXhlZERCfHx3aW5kb3cubW96SW5kZXhlZERCfHx3aW5kb3cud2Via2l0SW5kZXhlZERCfHx3aW5kb3cubXNJbmRleGVkREIpLENiPVtcIm1hcFwiLFwiY3R4XCIsXCJ0YWdcIixcInJlZ1wiLFwiY2ZnXCJdLERiPUkoKTtcbmZ1bmN0aW9uIEViKGEsYz17fSl7aWYoIXRoaXN8fHRoaXMuY29uc3RydWN0b3IhPT1FYilyZXR1cm4gbmV3IEViKGEsYyk7dHlwZW9mIGE9PT1cIm9iamVjdFwiJiYoYz1hLGE9YS5uYW1lKTthfHxjb25zb2xlLmluZm8oXCJEZWZhdWx0IHN0b3JhZ2Ugc3BhY2Ugd2FzIHVzZWQsIGJlY2F1c2UgYSBuYW1lIHdhcyBub3QgcGFzc2VkLlwiKTt0aGlzLmlkPVwiZmxleHNlYXJjaFwiKyhhP1wiOlwiK2EudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9bXmEtejAtOV9cXC1dL2csXCJcIik6XCJcIik7dGhpcy5maWVsZD1jLmZpZWxkP2MuZmllbGQudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9bXmEtejAtOV9cXC1dL2csXCJcIik6XCJcIjt0aGlzLnR5cGU9Yy50eXBlO3RoaXMuZmFzdHVwZGF0ZT10aGlzLnN1cHBvcnRfdGFnX3NlYXJjaD0hMTt0aGlzLmRiPW51bGw7dGhpcy5oPXt9fXc9RWIucHJvdG90eXBlO3cubW91bnQ9ZnVuY3Rpb24oYSl7aWYoYS5pbmRleClyZXR1cm4gYS5tb3VudCh0aGlzKTthLmRiPXRoaXM7cmV0dXJuIHRoaXMub3BlbigpfTtcbncub3Blbj1mdW5jdGlvbigpe2lmKHRoaXMuZGIpcmV0dXJuIHRoaXMuZGI7bGV0IGE9dGhpcztuYXZpZ2F0b3Iuc3RvcmFnZSYmbmF2aWdhdG9yLnN0b3JhZ2UucGVyc2lzdCgpO0RiW2EuaWRdfHwoRGJbYS5pZF09W10pO0RiW2EuaWRdLnB1c2goYS5maWVsZCk7Y29uc3QgYz1CYi5vcGVuKGEuaWQsMSk7Yy5vbnVwZ3JhZGVuZWVkZWQ9ZnVuY3Rpb24oKXtjb25zdCBiPWEuZGI9dGhpcy5yZXN1bHQ7Zm9yKGxldCBlPTAsZDtlPENiLmxlbmd0aDtlKyspe2Q9Q2JbZV07Zm9yKGxldCBmPTAsZztmPERiW2EuaWRdLmxlbmd0aDtmKyspZz1EYlthLmlkXVtmXSxiLm9iamVjdFN0b3JlTmFtZXMuY29udGFpbnMoZCsoZCE9PVwicmVnXCI/Zz9cIjpcIitnOlwiXCI6XCJcIikpfHxiLmNyZWF0ZU9iamVjdFN0b3JlKGQrKGQhPT1cInJlZ1wiP2c/XCI6XCIrZzpcIlwiOlwiXCIpKX19O3JldHVybiBhLmRiPVooYyxmdW5jdGlvbihiKXthLmRiPWI7YS5kYi5vbnZlcnNpb25jaGFuZ2U9ZnVuY3Rpb24oKXthLmNsb3NlKCl9fSl9O1xudy5jbG9zZT1mdW5jdGlvbigpe3RoaXMuZGImJnRoaXMuZGIuY2xvc2UoKTt0aGlzLmRiPW51bGx9O3cuZGVzdHJveT1mdW5jdGlvbigpe2NvbnN0IGE9QmIuZGVsZXRlRGF0YWJhc2UodGhpcy5pZCk7cmV0dXJuIFooYSl9O3cuY2xlYXI9ZnVuY3Rpb24oKXtjb25zdCBhPVtdO2ZvcihsZXQgYj0wLGU7YjxDYi5sZW5ndGg7YisrKXtlPUNiW2JdO2ZvcihsZXQgZD0wLGY7ZDxEYlt0aGlzLmlkXS5sZW5ndGg7ZCsrKWY9RGJbdGhpcy5pZF1bZF0sYS5wdXNoKGUrKGUhPT1cInJlZ1wiP2Y/XCI6XCIrZjpcIlwiOlwiXCIpKX1jb25zdCBjPXRoaXMuZGIudHJhbnNhY3Rpb24oYSxcInJlYWR3cml0ZVwiKTtmb3IobGV0IGI9MDtiPGEubGVuZ3RoO2IrKyljLm9iamVjdFN0b3JlKGFbYl0pLmNsZWFyKCk7cmV0dXJuIFooYyl9O1xudy5nZXQ9ZnVuY3Rpb24oYSxjLGI9MCxlPTAsZD0hMCxmPSExKXthPXRoaXMuZGIudHJhbnNhY3Rpb24oKGM/XCJjdHhcIjpcIm1hcFwiKSsodGhpcy5maWVsZD9cIjpcIit0aGlzLmZpZWxkOlwiXCIpLFwicmVhZG9ubHlcIikub2JqZWN0U3RvcmUoKGM/XCJjdHhcIjpcIm1hcFwiKSsodGhpcy5maWVsZD9cIjpcIit0aGlzLmZpZWxkOlwiXCIpKS5nZXQoYz9jK1wiOlwiK2E6YSk7Y29uc3QgZz10aGlzO3JldHVybiBaKGEpLnRoZW4oZnVuY3Rpb24oaCl7bGV0IGs9W107aWYoIWh8fCFoLmxlbmd0aClyZXR1cm4gaztpZihkKXtpZighYiYmIWUmJmgubGVuZ3RoPT09MSlyZXR1cm4gaFswXTtmb3IobGV0IGw9MCxtO2w8aC5sZW5ndGg7bCsrKWlmKChtPWhbbF0pJiZtLmxlbmd0aCl7aWYoZT49bS5sZW5ndGgpe2UtPW0ubGVuZ3RoO2NvbnRpbnVlfWNvbnN0IHA9Yj9lK01hdGgubWluKG0ubGVuZ3RoLWUsYik6bS5sZW5ndGg7Zm9yKGxldCB1PWU7dTxwO3UrKylrLnB1c2gobVt1XSk7ZT0wO2lmKGsubGVuZ3RoPT09YilicmVha31yZXR1cm4gZj9cbmcuZW5yaWNoKGspOmt9cmV0dXJuIGh9KX07dy50YWc9ZnVuY3Rpb24oYSxjPTAsYj0wLGU9ITEpe2E9dGhpcy5kYi50cmFuc2FjdGlvbihcInRhZ1wiKyh0aGlzLmZpZWxkP1wiOlwiK3RoaXMuZmllbGQ6XCJcIiksXCJyZWFkb25seVwiKS5vYmplY3RTdG9yZShcInRhZ1wiKyh0aGlzLmZpZWxkP1wiOlwiK3RoaXMuZmllbGQ6XCJcIikpLmdldChhKTtjb25zdCBkPXRoaXM7cmV0dXJuIFooYSkudGhlbihmdW5jdGlvbihmKXtpZighZnx8IWYubGVuZ3RofHxiPj1mLmxlbmd0aClyZXR1cm5bXTtpZighYyYmIWIpcmV0dXJuIGY7Zj1mLnNsaWNlKGIsYitjKTtyZXR1cm4gZT9kLmVucmljaChmKTpmfSl9O1xudy5lbnJpY2g9ZnVuY3Rpb24oYSl7dHlwZW9mIGEhPT1cIm9iamVjdFwiJiYoYT1bYV0pO2NvbnN0IGM9dGhpcy5kYi50cmFuc2FjdGlvbihcInJlZ1wiLFwicmVhZG9ubHlcIikub2JqZWN0U3RvcmUoXCJyZWdcIiksYj1bXTtmb3IobGV0IGU9MDtlPGEubGVuZ3RoO2UrKyliW2VdPVooYy5nZXQoYVtlXSkpO3JldHVybiBQcm9taXNlLmFsbChiKS50aGVuKGZ1bmN0aW9uKGUpe2ZvcihsZXQgZD0wO2Q8ZS5sZW5ndGg7ZCsrKWVbZF09e2lkOmFbZF0sZG9jOmVbZF0/SlNPTi5wYXJzZShlW2RdKTpudWxsfTtyZXR1cm4gZX0pfTt3Lmhhcz1mdW5jdGlvbihhKXthPXRoaXMuZGIudHJhbnNhY3Rpb24oXCJyZWdcIixcInJlYWRvbmx5XCIpLm9iamVjdFN0b3JlKFwicmVnXCIpLmdldEtleShhKTtyZXR1cm4gWihhKS50aGVuKGZ1bmN0aW9uKGMpe3JldHVybiEhY30pfTt3LnNlYXJjaD1udWxsO3cuaW5mbz1mdW5jdGlvbigpe307XG53LnRyYW5zYWN0aW9uPWZ1bmN0aW9uKGEsYyxiKXthKz1hIT09XCJyZWdcIj90aGlzLmZpZWxkP1wiOlwiK3RoaXMuZmllbGQ6XCJcIjpcIlwiO2xldCBlPXRoaXMuaFthK1wiOlwiK2NdO2lmKGUpcmV0dXJuIGIuY2FsbCh0aGlzLGUpO2xldCBkPXRoaXMuZGIudHJhbnNhY3Rpb24oYSxjKTt0aGlzLmhbYStcIjpcIitjXT1lPWQub2JqZWN0U3RvcmUoYSk7Y29uc3QgZj1iLmNhbGwodGhpcyxlKTt0aGlzLmhbYStcIjpcIitjXT1udWxsO3JldHVybiBaKGQpLmZpbmFsbHkoZnVuY3Rpb24oKXtkPWU9bnVsbDtyZXR1cm4gZn0pfTtcbncuY29tbWl0PWFzeW5jIGZ1bmN0aW9uKGEpe2xldCBjPWEuY29tbWl0X3Rhc2ssYj1bXTthLmNvbW1pdF90YXNrPVtdO2ZvcihsZXQgZT0wLGQ7ZTxjLmxlbmd0aDtlKyspZD1jW2VdLGQuZGVsJiZiLnB1c2goZC5kZWwpO2IubGVuZ3RoJiZhd2FpdCB0aGlzLnJlbW92ZShiKTthLnJlZy5zaXplJiYoYXdhaXQgdGhpcy50cmFuc2FjdGlvbihcIm1hcFwiLFwicmVhZHdyaXRlXCIsZnVuY3Rpb24oZSl7Zm9yKGNvbnN0IGQgb2YgYS5tYXApe2NvbnN0IGY9ZFswXSxnPWRbMV07Zy5sZW5ndGgmJihlLmdldChmKS5vbnN1Y2Nlc3M9ZnVuY3Rpb24oKXtsZXQgaD10aGlzLnJlc3VsdDt2YXIgaztpZihoJiZoLmxlbmd0aCl7Y29uc3QgbD1NYXRoLm1heChoLmxlbmd0aCxnLmxlbmd0aCk7Zm9yKGxldCBtPTAscCx1O208bDttKyspaWYoKHU9Z1ttXSkmJnUubGVuZ3RoKXtpZigocD1oW21dKSYmcC5sZW5ndGgpZm9yKGs9MDtrPHUubGVuZ3RoO2srKylwLnB1c2godVtrXSk7ZWxzZSBoW21dPXU7az1cbjF9fWVsc2UgaD1nLGs9MTtrJiZlLnB1dChoLGYpfSl9fSksYXdhaXQgdGhpcy50cmFuc2FjdGlvbihcImN0eFwiLFwicmVhZHdyaXRlXCIsZnVuY3Rpb24oZSl7Zm9yKGNvbnN0IGQgb2YgYS5jdHgpe2NvbnN0IGY9ZFswXSxnPWRbMV07Zm9yKGNvbnN0IGggb2YgZyl7Y29uc3Qgaz1oWzBdLGw9aFsxXTtsLmxlbmd0aCYmKGUuZ2V0KGYrXCI6XCIraykub25zdWNjZXNzPWZ1bmN0aW9uKCl7bGV0IG09dGhpcy5yZXN1bHQ7dmFyIHA7aWYobSYmbS5sZW5ndGgpe2NvbnN0IHU9TWF0aC5tYXgobS5sZW5ndGgsbC5sZW5ndGgpO2ZvcihsZXQgcj0wLHQsbjtyPHU7cisrKWlmKChuPWxbcl0pJiZuLmxlbmd0aCl7aWYoKHQ9bVtyXSkmJnQubGVuZ3RoKWZvcihwPTA7cDxuLmxlbmd0aDtwKyspdC5wdXNoKG5bcF0pO2Vsc2UgbVtyXT1uO3A9MX19ZWxzZSBtPWwscD0xO3AmJmUucHV0KG0sZitcIjpcIitrKX0pfX19KSxhLnN0b3JlP2F3YWl0IHRoaXMudHJhbnNhY3Rpb24oXCJyZWdcIixcInJlYWR3cml0ZVwiLFxuZnVuY3Rpb24oZSl7Zm9yKGNvbnN0IGQgb2YgYS5zdG9yZSl7Y29uc3QgZj1kWzBdLGc9ZFsxXTtlLnB1dCh0eXBlb2YgZz09PVwib2JqZWN0XCI/SlNPTi5zdHJpbmdpZnkoZyk6MSxmKX19KTphLmJ5cGFzc3x8YXdhaXQgdGhpcy50cmFuc2FjdGlvbihcInJlZ1wiLFwicmVhZHdyaXRlXCIsZnVuY3Rpb24oZSl7Zm9yKGNvbnN0IGQgb2YgYS5yZWcua2V5cygpKWUucHV0KDEsZCl9KSxhLnRhZyYmYXdhaXQgdGhpcy50cmFuc2FjdGlvbihcInRhZ1wiLFwicmVhZHdyaXRlXCIsZnVuY3Rpb24oZSl7Zm9yKGNvbnN0IGQgb2YgYS50YWcpe2NvbnN0IGY9ZFswXSxnPWRbMV07Zy5sZW5ndGgmJihlLmdldChmKS5vbnN1Y2Nlc3M9ZnVuY3Rpb24oKXtsZXQgaD10aGlzLnJlc3VsdDtoPWgmJmgubGVuZ3RoP2guY29uY2F0KGcpOmc7ZS5wdXQoaCxmKX0pfX0pLGEubWFwLmNsZWFyKCksYS5jdHguY2xlYXIoKSxhLnRhZyYmYS50YWcuY2xlYXIoKSxhLnN0b3JlJiZhLnN0b3JlLmNsZWFyKCksYS5kb2N1bWVudHx8XG5hLnJlZy5jbGVhcigpKX07ZnVuY3Rpb24gRmIoYSxjLGIpe2NvbnN0IGU9YS52YWx1ZTtsZXQgZCxmPTA7Zm9yKGxldCBnPTAsaDtnPGUubGVuZ3RoO2crKyl7aWYoaD1iP2U6ZVtnXSl7Zm9yKGxldCBrPTAsbCxtO2s8Yy5sZW5ndGg7aysrKWlmKG09Y1trXSxsPWguaW5kZXhPZihtKSxsPj0wKWlmKGQ9MSxoLmxlbmd0aD4xKWguc3BsaWNlKGwsMSk7ZWxzZXtlW2ddPVtdO2JyZWFrfWYrPWgubGVuZ3RofWlmKGIpYnJlYWt9Zj9kJiZhLnVwZGF0ZShlKTphLmRlbGV0ZSgpO2EuY29udGludWUoKX1cbncucmVtb3ZlPWZ1bmN0aW9uKGEpe3R5cGVvZiBhIT09XCJvYmplY3RcIiYmKGE9W2FdKTtyZXR1cm4gUHJvbWlzZS5hbGwoW3RoaXMudHJhbnNhY3Rpb24oXCJtYXBcIixcInJlYWR3cml0ZVwiLGZ1bmN0aW9uKGMpe2Mub3BlbkN1cnNvcigpLm9uc3VjY2Vzcz1mdW5jdGlvbigpe2NvbnN0IGI9dGhpcy5yZXN1bHQ7YiYmRmIoYixhKX19KSx0aGlzLnRyYW5zYWN0aW9uKFwiY3R4XCIsXCJyZWFkd3JpdGVcIixmdW5jdGlvbihjKXtjLm9wZW5DdXJzb3IoKS5vbnN1Y2Nlc3M9ZnVuY3Rpb24oKXtjb25zdCBiPXRoaXMucmVzdWx0O2ImJkZiKGIsYSl9fSksdGhpcy50cmFuc2FjdGlvbihcInRhZ1wiLFwicmVhZHdyaXRlXCIsZnVuY3Rpb24oYyl7Yy5vcGVuQ3Vyc29yKCkub25zdWNjZXNzPWZ1bmN0aW9uKCl7Y29uc3QgYj10aGlzLnJlc3VsdDtiJiZGYihiLGEsITApfX0pLHRoaXMudHJhbnNhY3Rpb24oXCJyZWdcIixcInJlYWR3cml0ZVwiLGZ1bmN0aW9uKGMpe2ZvcihsZXQgYj0wO2I8YS5sZW5ndGg7YisrKWMuZGVsZXRlKGFbYl0pfSldKX07XG5mdW5jdGlvbiBaKGEsYyl7cmV0dXJuIG5ldyBQcm9taXNlKChiLGUpPT57YS5vbnN1Y2Nlc3M9YS5vbmNvbXBsZXRlPWZ1bmN0aW9uKCl7YyYmYyh0aGlzLnJlc3VsdCk7Yz1udWxsO2IodGhpcy5yZXN1bHQpfTthLm9uZXJyb3I9YS5vbmJsb2NrZWQ9ZTthPW51bGx9KX07ZXhwb3J0IGRlZmF1bHQge0luZGV4OlQsQ2hhcnNldDp2YSxFbmNvZGVyOmthLERvY3VtZW50Ok5hLFdvcmtlcjpMYSxSZXNvbHZlcjpYLEluZGV4ZWREQjpFYixMYW5ndWFnZTp7fX07XG5leHBvcnQgY29uc3QgSW5kZXg9VDtleHBvcnQgY29uc3QgQ2hhcnNldD12YTtleHBvcnQgY29uc3QgRW5jb2Rlcj1rYTtleHBvcnQgY29uc3QgRG9jdW1lbnQ9TmE7ZXhwb3J0IGNvbnN0IFdvcmtlcj1MYTtleHBvcnQgY29uc3QgUmVzb2x2ZXI9WDtleHBvcnQgY29uc3QgSW5kZXhlZERCPUViO2V4cG9ydCBjb25zdCBMYW5ndWFnZT17fTsiLCAiLyohXHJcbiAqIEZsZXhTZWFyY2ggZm9yIEJvb3RzdHJhcCBiYXNlZCBUaHVsaXRlIHNpdGVzXHJcbiAqIENvcHlyaWdodCAyMDIxLTIwMjQgVGh1bGl0ZVxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2VcclxuICogQmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2Zyam8vaHVnby10aGVtZS16ZW4vYmxvYi9tYWluL2Fzc2V0cy9qcy9zZWFyY2guanNcclxuICovXHJcblxyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiwgZ3VhcmQtZm9yLWluICovXHJcblxyXG4vKipcclxuICogQGZpbGVcclxuICogQSBKYXZhU2NyaXB0IGZpbGUgZm9yIGZsZXhzZWFyY2guXHJcbiAqL1xyXG5cclxuLy8gaW1wb3J0ICogYXMgRmxleFNlYXJjaCBmcm9tICdmbGV4c2VhcmNoJztcclxuaW1wb3J0IEluZGV4IGZyb20gJ2ZsZXhzZWFyY2gnO1xyXG5cclxuKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAvLyBjb25zdCBpbmRleCA9IG5ldyBGbGV4U2VhcmNoLkRvY3VtZW50KHtcclxuICBjb25zdCBpbmRleCA9IG5ldyBJbmRleC5Eb2N1bWVudCh7XHJcbiAgICB0b2tlbml6ZTogJ2ZvcndhcmQnLFxyXG4gICAgZG9jdW1lbnQ6IHtcclxuICAgICAgaWQ6ICdpZCcsXHJcbiAgICAgIGluZGV4OiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZmllbGQ6ICd0aXRsZSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGZpZWxkOiAndGFncydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGZpZWxkOiAnY29udGVudCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGZpZWxkOiAgJ2RhdGUnLFxyXG4gICAgICAgICAgdG9rZW5pemU6ICdzdHJpY3QnLFxyXG4gICAgICAgICAgZW5jb2RlOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgXSxcclxuICAgICAgc3RvcmU6IFsndGl0bGUnLCdzdW1tYXJ5JywnZGF0ZScsJ3Blcm1hbGluayddXHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGZ1bmN0aW9uIHNob3dSZXN1bHRzKGl0ZW1zKSB7XHJcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RlbXBsYXRlJykuY29udGVudDtcclxuICAgIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG5cclxuICAgIGNvbnN0IHJlc3VsdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLXJlc3VsdHMnKTtcclxuICAgIHJlc3VsdHMudGV4dENvbnRlbnQgPSAnJztcclxuXHJcbiAgICBjb25zdCBpdGVtc0xlbmd0aCA9IE9iamVjdC5rZXlzKGl0ZW1zKS5sZW5ndGg7XHJcblxyXG4gICAgLy8gU2hvdy9oaWRlIFwiTm8gcmVjZW50IHNlYXJjaGVzXCIgYW5kIFwiTm8gc2VhcmNoIHJlc3VsdHNcIiBtZXNzYWdlc1xyXG4gICAgaWYgKChpdGVtc0xlbmd0aCA9PT0gMCkgJiYgKHF1ZXJ5LnZhbHVlID09PSAnJykpIHtcclxuICAgICAgLy8gSGlkZSBcIk5vIHNlYXJjaCByZXN1bHRzXCIgbWVzc2FnZVxyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLW5vLXJlc3VsdHMnKS5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcclxuICAgICAgLy8gU2hvdyBcIk5vIHJlY2VudCBzZWFyY2hlc1wiIG1lc3NhZ2VcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1uby1yZWNlbnQnKS5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcclxuICAgIH0gZWxzZSBpZiAoKGl0ZW1zTGVuZ3RoID09PSAwKSAmJiAocXVlcnkudmFsdWUgIT09ICcnKSkge1xyXG4gICAgICAvLyBIaWRlIFwiTm8gcmVjZW50IHNlYXJjaGVzXCIgbWVzc2FnZVxyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLW5vLXJlY2VudCcpLmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xyXG4gICAgICAvLyBTaG93IFwiTm8gc2VhcmNoIHJlc3VsdHNcIiBtZXNzYWdlXHJcbiAgICAgIGNvbnN0IHF1ZXJ5Tm9SZXN1bHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnF1ZXJ5LW5vLXJlc3VsdHMnKTtcclxuICAgICAgcXVlcnlOb1Jlc3VsdHMuaW5uZXJUZXh0ID0gcXVlcnkudmFsdWU7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtbm8tcmVzdWx0cycpLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gSGlkZSBib3RoIFwiTm8gcmVjZW50IHNlYXJjaGVzXCIgYW5kIFwiTm8gc2VhcmNoIHJlc3VsdHNcIiBtZXNzYWdlc1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLW5vLXJlY2VudCcpLmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLW5vLXJlc3VsdHMnKS5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGNvbnN0IGlkIGluIGl0ZW1zKSB7XHJcbiAgICAgIGNvbnN0IGl0ZW0gPSBpdGVtc1tpZF07XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHRlbXBsYXRlLmNsb25lTm9kZSh0cnVlKTtcclxuICAgICAgY29uc3QgYSA9IHJlc3VsdC5xdWVyeVNlbGVjdG9yKCdhJyk7XHJcbiAgICAgIGNvbnN0IHRpbWUgPSByZXN1bHQucXVlcnlTZWxlY3RvcigndGltZScpO1xyXG4gICAgICBjb25zdCBjb250ZW50ID0gcmVzdWx0LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XHJcbiAgICAgIGEuaW5uZXJIVE1MID0gaXRlbS50aXRsZTtcclxuICAgICAgYS5ocmVmID0gaXRlbS5wZXJtYWxpbms7XHJcbiAgICAgIHRpbWUuaW5uZXJUZXh0ID0gaXRlbS5kYXRlO1xyXG4gICAgICBjb250ZW50LmlubmVySFRNTCA9IGl0ZW0uc3VtbWFyeTtcclxuICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQocmVzdWx0KTtcclxuICAgIH1cclxuXHJcbiAgICByZXN1bHRzLmFwcGVuZENoaWxkKGZyYWdtZW50KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGRvU2VhcmNoKCkge1xyXG4gICAgY29uc3QgcXVlcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLXRleHQnKS52YWx1ZS50cmltKCk7XHJcbiAgICBjb25zdCBsaW1pdCA9IDk5O1xyXG4gICAgY29uc3QgcmVzdWx0cyA9IGluZGV4LnNlYXJjaCh7XHJcbiAgICAgIHF1ZXJ5OiBxdWVyeSxcclxuICAgICAgZW5yaWNoOiB0cnVlLFxyXG4gICAgICBsaW1pdDogbGltaXQsXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGl0ZW1zID0ge307XHJcblxyXG4gICAgcmVzdWx0cy5mb3JFYWNoKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgcmVzdWx0LnJlc3VsdC5mb3JFYWNoKGZ1bmN0aW9uIChyKSB7XHJcbiAgICAgICAgaXRlbXNbci5pZF0gPSByLmRvYztcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBzaG93UmVzdWx0cyhpdGVtcyk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBlbmFibGVVSSgpIHtcclxuICAgIGNvbnN0IHNlYXJjaGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWZvcm0nKTtcclxuICAgIHNlYXJjaGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBkb1NlYXJjaCgpO1xyXG4gICAgfSk7XHJcbiAgICBzZWFyY2hmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICBkb1NlYXJjaCgpO1xyXG4gICAgfSk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWxvYWRpbmcnKS5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtaW5wdXQnKS5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtdGV4dCcpLmZvY3VzKCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBidWlsZEluZGV4KCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1sb2FkaW5nJykuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XHJcbiAgICBmZXRjaChcInNlYXJjaC1pbmRleC5qc29uXCIpXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgZGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICBpbmRleC5hZGQoaXRlbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYnVpbGRJbmRleCgpO1xyXG4gIGVuYWJsZVVJKCk7XHJcbn0pKCk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQU9BLE1BQUk7QUFBRSxXQUFTLEVBQUUsR0FBRSxHQUFFLEdBQUU7QUFBQyxVQUFNLElBQUUsT0FBTyxHQUFFLElBQUUsT0FBTztBQUFFLFFBQUcsTUFBSSxhQUFZO0FBQUMsVUFBRyxNQUFJLGFBQVk7QUFBQyxZQUFHLEdBQUU7QUFBQyxjQUFHLE1BQUksY0FBWSxNQUFJLEVBQUUsUUFBTyxTQUFTLEdBQUU7QUFB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SztBQUFDLFVBQUc7QUFBQyxhQUFLLFFBQU0sRUFBRSxLQUFLLE9BQU0sRUFBRTtBQUFBLE1BQUMsU0FBTyxHQUFFO0FBQUMsYUFBSyxRQUFNO0FBQUEsTUFBSztBQUFDLFdBQUssVUFBUSxFQUFFLEVBQUUsU0FBUSxFQUFFLEtBQUssU0FBUSxJQUFFLENBQUM7QUFBQSxJQUFDO0FBQUMsU0FBSyxVQUFRLEVBQUUsRUFBRSxTQUFRLE1BQUssS0FBSyxPQUFPO0FBQUUsU0FBSyxXQUFTLEVBQUUsRUFBRSxVQUFTLE1BQUssS0FBSyxRQUFRO0FBQUUsUUFBRSxFQUFFO0FBQU8sU0FBSyxTQUFPLE9BQU8sTUFBSSxhQUFXLElBQUUsRUFBRSxLQUFHLElBQUksSUFBSSxDQUFDLEdBQUUsTUFBSyxLQUFLLE1BQU07QUFBRSxTQUFLLFNBQU8sRUFBRSxFQUFFLFFBQU8sTUFBRyxLQUFLLE1BQU07QUFBRSxTQUFLLFVBQVEsR0FBRyxJQUFFLEVBQUUsWUFBVSxJQUFJLElBQUksQ0FBQyxHQUFFLE1BQUssS0FBSyxPQUFPO0FBQUUsU0FBSyxTQUFPLEdBQUcsSUFBRSxFQUFFLFdBQVMsSUFBSSxJQUFJLENBQUMsR0FBRSxNQUFLLEtBQUssTUFBTTtBQUFFLFNBQUssVUFBUTtBQUFBLE9BQUcsSUFBRSxFQUFFLFlBQVUsSUFBSSxJQUFJLENBQUM7QUFBQSxNQUN6ZjtBQUFBLE1BQUssS0FBSztBQUFBLElBQU87QUFBRSxTQUFLLFdBQVMsRUFBRSxFQUFFLFVBQVMsTUFBSyxLQUFLLFFBQVE7QUFBRSxTQUFLLFlBQVUsRUFBRSxFQUFFLFdBQVUsR0FBRSxLQUFLLFNBQVM7QUFBRSxTQUFLLFlBQVUsRUFBRSxFQUFFLFdBQVUsTUFBSyxLQUFLLFNBQVM7QUFBRSxTQUFLLE1BQUksRUFBRSxFQUFFLEtBQUksT0FBRyxLQUFLLEdBQUc7QUFBRSxRQUFHLEtBQUssUUFBTSxJQUFFLEVBQUUsRUFBRSxPQUFNLE1BQUcsS0FBSyxLQUFLLEVBQUUsTUFBSyxJQUFFLE1BQUssS0FBSyxJQUFFLE9BQU8sTUFBSSxXQUFTLElBQUUsS0FBSSxLQUFLLElBQUUsb0JBQUksT0FBSSxLQUFLLElBQUUsb0JBQUksT0FBSSxLQUFLLElBQUUsS0FBSyxJQUFFO0FBQUksU0FBSyxJQUFFO0FBQUcsU0FBSyxJQUFFO0FBQUssU0FBSyxJQUFFO0FBQUcsU0FBSyxJQUFFO0FBQUssUUFBRyxLQUFLLFFBQVEsWUFBVSxLQUFLLEtBQUssUUFBUSxLQUFLLEVBQUUsTUFBSyxNQUFJLEtBQUssSUFBRSxNQUFJLE1BQUk7QUFBRSxRQUFHLEtBQUssUUFBUSxZQUFVLEtBQUssS0FBSyxRQUFRLEtBQUssRUFBRSxNQUFLLE1BQ3ZmLEtBQUssSUFBRSxNQUFJLE1BQUk7QUFBRSxXQUFPO0FBQUEsRUFBSTtBQUFFLElBQUUsYUFBVyxTQUFTLEdBQUUsR0FBRTtBQUFDLFNBQUssWUFBVSxLQUFLLFVBQVEsb0JBQUk7QUFBSyxTQUFLLFFBQVEsSUFBSSxHQUFFLENBQUM7QUFBRSxTQUFLLE1BQUksS0FBSyxJQUFFLE1BQUksTUFBSTtBQUFFLFNBQUssSUFBRTtBQUFLLFNBQUssU0FBTyxFQUFFLElBQUk7QUFBRSxXQUFPO0FBQUEsRUFBSTtBQUFFLElBQUUsWUFBVSxTQUFTLEdBQUU7QUFBQyxXQUFPLE1BQUksYUFBVyxLQUFLLFNBQU8sS0FBRyxLQUFLLFdBQVMsS0FBSyxTQUFPLG9CQUFJLFFBQUssS0FBSyxPQUFPLElBQUksQ0FBQztBQUFHLFNBQUssU0FBTyxFQUFFLElBQUk7QUFBRSxXQUFPO0FBQUEsRUFBSTtBQUMvVSxJQUFFLFlBQVUsU0FBUyxHQUFFLEdBQUU7QUFBQyxRQUFHLE9BQU8sTUFBSSxTQUFTLFFBQU8sS0FBSyxZQUFZLEdBQUUsQ0FBQztBQUFFLFFBQUcsRUFBRSxTQUFPLEVBQUUsUUFBTyxLQUFLLFdBQVcsR0FBRSxDQUFDO0FBQUUsU0FBSyxXQUFTLEtBQUssU0FBTyxvQkFBSTtBQUFLLFNBQUssT0FBTyxJQUFJLEdBQUUsQ0FBQztBQUFFLFNBQUssU0FBTyxFQUFFLElBQUk7QUFBRSxXQUFPO0FBQUEsRUFBSTtBQUFFLElBQUUsYUFBVyxTQUFTLEdBQUUsR0FBRTtBQUFDLFFBQUcsT0FBTyxNQUFJLFNBQVMsUUFBTyxLQUFLLFlBQVksR0FBRSxDQUFDO0FBQUUsUUFBRyxFQUFFLFNBQU8sTUFBSSxLQUFLLFVBQVEsS0FBSyxRQUFRLFFBQU8sS0FBSyxVQUFVLEdBQUUsQ0FBQztBQUFFLFNBQUssWUFBVSxLQUFLLFVBQVEsb0JBQUk7QUFBSyxTQUFLLFFBQVEsSUFBSSxHQUFFLENBQUM7QUFBRSxTQUFLLE1BQUksS0FBSyxJQUFFLE1BQUksTUFBSTtBQUFFLFNBQUssSUFBRTtBQUFLLFNBQUssU0FBTyxFQUFFLElBQUk7QUFBRSxXQUFPO0FBQUEsRUFBSTtBQUNyZSxJQUFFLGNBQVksU0FBUyxHQUFFLEdBQUU7QUFBQyxRQUFHLE9BQU8sTUFBSSxTQUFTLFFBQU8sS0FBSyxXQUFXLEdBQUUsQ0FBQztBQUFFLFNBQUssYUFBVyxLQUFLLFdBQVMsQ0FBQztBQUFHLFNBQUssU0FBUyxLQUFLLEdBQUUsQ0FBQztBQUFFLFNBQUssU0FBTyxFQUFFLElBQUk7QUFBRSxXQUFPO0FBQUEsRUFBSTtBQUN4SyxJQUFFLFNBQU8sU0FBUyxHQUFFLEdBQUU7QUFBQyxRQUFHLEtBQUssU0FBTyxFQUFFLFVBQVEsS0FBSyxFQUFFLEtBQUcsS0FBSyxHQUFFO0FBQUMsVUFBRyxLQUFLLEVBQUUsSUFBSSxDQUFDLEVBQUUsUUFBTyxLQUFLLEVBQUUsSUFBSSxDQUFDO0FBQUEsSUFBQyxNQUFNLE1BQUssSUFBRSxXQUFXLEdBQUUsSUFBRyxJQUFJO0FBQUUsU0FBSyxjQUFZLE9BQU8sS0FBSyxjQUFZLGFBQVcsSUFBRSxLQUFLLFVBQVUsQ0FBQyxJQUFFLElBQUUsS0FBRyxFQUFFLFVBQVUsTUFBTSxFQUFFLFFBQVEsSUFBRyxFQUFFLEVBQUUsWUFBWSxJQUFFLEVBQUUsWUFBWTtBQUFHLFNBQUssWUFBVSxJQUFFLEtBQUssUUFBUSxDQUFDO0FBQUcsU0FBSyxXQUFTLEVBQUUsU0FBTyxNQUFJLElBQUUsRUFBRSxRQUFRLElBQUcsT0FBTyxFQUFFLFFBQVEsSUFBRyxPQUFPLEVBQUUsUUFBUSxJQUFHLEtBQUs7QUFBRyxVQUFNLElBQUUsRUFBRSxLQUFLLFVBQVEsS0FBSyxVQUFRLEtBQUssVUFBUSxLQUFLLFdBQVMsS0FBSyxXQUFTLEtBQUs7QUFBVSxRQUFJLElBQ3JmLENBQUMsR0FBRSxJQUFFLEVBQUUsR0FBRSxHQUFFLEdBQUUsSUFBRSxLQUFLLFNBQU8sS0FBSyxVQUFRLEtBQUcsRUFBRSxNQUFNLEtBQUssS0FBSyxJQUFFLENBQUMsQ0FBQztBQUFFLGFBQVEsSUFBRSxHQUFFLEdBQUUsR0FBRSxJQUFFLEVBQUUsUUFBTyxJQUFJLE1BQUksSUFBRSxJQUFFLEVBQUUsQ0FBQyxNQUFJLEVBQUUsRUFBRSxTQUFPLEtBQUssYUFBVyxFQUFFLFNBQU8sS0FBSyxZQUFXO0FBQUMsVUFBRyxHQUFFO0FBQUMsWUFBRyxFQUFFLENBQUMsRUFBRTtBQUFTLFVBQUUsQ0FBQyxJQUFFO0FBQUEsTUFBQyxPQUFLO0FBQUMsWUFBRyxNQUFJLEVBQUU7QUFBUyxZQUFFO0FBQUEsTUFBQztBQUFDLFVBQUcsRUFBRSxHQUFFLEtBQUssQ0FBQztBQUFBLGVBQVUsQ0FBQyxLQUFLLFdBQVMsT0FBTyxLQUFLLFdBQVMsYUFBVyxLQUFLLE9BQU8sQ0FBQyxJQUFFLENBQUMsS0FBSyxPQUFPLElBQUksQ0FBQyxJQUFHO0FBQUMsWUFBRyxLQUFLLFNBQU8sRUFBRSxVQUFRLEtBQUssRUFBRSxLQUFHLEtBQUssR0FBRTtBQUFDLGNBQUksSUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDO0FBQUUsY0FBRyxLQUFHLE1BQUksSUFBRztBQUFDLGlCQUFHLEVBQUUsS0FBSyxDQUFDO0FBQUU7QUFBQSxVQUFRO0FBQUEsUUFBQyxNQUFNLE1BQUssSUFBRSxXQUFXLEdBQUUsSUFBRyxJQUFJO0FBQUUsWUFBRyxLQUFLLFNBQVE7QUFBQyxlQUFLLE1BQUksS0FBSyxJQUFFLElBQUksT0FBTyxXQUM1ZixLQUFLLElBQUUsSUFBSTtBQUFHLGNBQUk7QUFBRSxpQkFBSyxNQUFJLEtBQUcsRUFBRSxTQUFPLElBQUcsS0FBRSxHQUFFLElBQUUsRUFBRSxRQUFRLEtBQUssR0FBRSxPQUFHLEtBQUssUUFBUSxJQUFJLENBQUMsQ0FBQztBQUFBLFFBQUM7QUFBQyxZQUFHLE1BQUksS0FBSyxVQUFRLEtBQUssVUFBUSxFQUFFLFNBQU8sSUFBRztBQUFDLGNBQUU7QUFBRyxtQkFBUSxJQUFFLEdBQUUsSUFBRSxJQUFHLEdBQUUsR0FBRSxJQUFFLEVBQUUsUUFBTyxJQUFJLEtBQUUsRUFBRSxPQUFPLENBQUMsR0FBRSxNQUFJLEtBQUcsS0FBSyxZQUFVLElBQUUsS0FBSyxVQUFRLEtBQUssT0FBTyxJQUFJLENBQUMsTUFBSSxNQUFJLEtBQUcsTUFBSSxLQUFHLEtBQUssVUFBUSxFQUFFLElBQUUsT0FBSyxLQUFHLEtBQUcsS0FBRyxJQUFFO0FBQUcsY0FBRTtBQUFBLFFBQUM7QUFBQyxhQUFLLFdBQVMsRUFBRSxTQUFPLE1BQUksS0FBSyxNQUFJLEtBQUssSUFBRSxJQUFJLE9BQU8sTUFBSSxLQUFLLElBQUUsS0FBSSxHQUFHLElBQUcsSUFBRSxFQUFFLFFBQVEsS0FBSyxHQUFFLE9BQUcsS0FBSyxRQUFRLElBQUksQ0FBQyxDQUFDO0FBQUcsWUFBRyxLQUFHLEtBQUssU0FBUyxNQUFJLElBQUUsR0FBRSxLQUFHLElBQUUsS0FBSyxTQUFTLFFBQU8sS0FBRyxFQUFFLEtBQUUsRUFBRTtBQUFBLFVBQVEsS0FBSyxTQUFTLENBQUM7QUFBQSxVQUM3ZixLQUFLLFNBQVMsSUFBRSxDQUFDO0FBQUEsUUFBQztBQUFFLGFBQUssU0FBTyxFQUFFLFVBQVEsS0FBSyxNQUFJLEtBQUssRUFBRSxJQUFJLEdBQUUsQ0FBQyxHQUFFLEtBQUssRUFBRSxPQUFLLEtBQUssTUFBSSxLQUFLLEVBQUUsTUFBTSxHQUFFLEtBQUssSUFBRSxLQUFLLElBQUUsTUFBSTtBQUFJLFlBQUcsR0FBRTtBQUFDLGNBQUcsTUFBSSxFQUFFLEtBQUcsR0FBRTtBQUFDLGdCQUFHLEVBQUUsQ0FBQyxFQUFFO0FBQVMsY0FBRSxDQUFDLElBQUU7QUFBQSxVQUFDLE9BQUs7QUFBQyxnQkFBRyxNQUFJLEVBQUU7QUFBUyxnQkFBRTtBQUFBLFVBQUM7QUFBQyxZQUFFLEtBQUssQ0FBQztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUEsSUFBQztBQUFDLFNBQUssYUFBVyxJQUFFLEtBQUssU0FBUyxDQUFDLEtBQUc7QUFBRyxTQUFLLFNBQU8sRUFBRSxVQUFRLEtBQUssTUFBSSxLQUFLLEVBQUUsSUFBSSxHQUFFLENBQUMsR0FBRSxLQUFLLEVBQUUsT0FBSyxLQUFLLE1BQUksS0FBSyxFQUFFLE1BQU0sR0FBRSxLQUFLLElBQUUsS0FBSyxJQUFFLE1BQUk7QUFBSSxXQUFPO0FBQUEsRUFBQztBQUFFLFdBQVMsRUFBRSxHQUFFO0FBQUMsTUFBRSxJQUFFO0FBQUssTUFBRSxFQUFFLE1BQU07QUFBRSxNQUFFLEVBQUUsTUFBTTtBQUFBLEVBQUM7QUFBRSxXQUFTLEdBQUcsR0FBRSxHQUFFLEdBQUU7QUFBQyxVQUFJLEtBQUcsT0FBTyxNQUFJLFdBQVMsT0FBTyxNQUFJLGFBQVcsSUFBRSxHQUFFLElBQUUsS0FBRyxJQUFFO0FBQUcsVUFBSSxJQUFFLEVBQUUsU0FBTyxHQUFFLElBQUUsRUFBRSxTQUFPO0FBQUcsUUFBSSxJQUFFLE1BQUksS0FBRztBQUFHLFVBQUksTUFBSSxFQUFFLFVBQVEsS0FBRyxDQUFDLENBQUMsRUFBRSxVQUFRLENBQUMsQ0FBQyxFQUFFLFdBQVMsRUFBRSxZQUFVLFVBQUssRUFBRSxjQUFZLEtBQUssZUFBYSxFQUFFLFNBQU87QUFBSSxTQUFHLEtBQUcsR0FBRyxZQUFZO0FBQUUsU0FBSyxVQUFRLEtBQUssUUFBTSxJQUFJO0FBQUksUUFBSSxJQUFFLEtBQUssTUFBTSxJQUFJLElBQUUsQ0FBQztBQUFFLFFBQUcsQ0FBQyxHQUFFO0FBQUMsWUFBTSxJQUFFLEtBQUcsRUFBRTtBQUFNLFlBQUksRUFBRSxRQUFNO0FBQUksVUFBRSxLQUFLLE9BQU8sR0FBRSxHQUFFLENBQUM7QUFBRSxZQUFJLEVBQUUsUUFBTTtBQUFHLFdBQUssTUFBTSxJQUFJLElBQUUsR0FBRSxDQUFDO0FBQUEsSUFBQztBQUFDLFdBQU87QUFBQSxFQUFDO0FBQUMsV0FBUyxHQUFHLEdBQUU7QUFBQyxTQUFLLFFBQU0sS0FBRyxNQUFJLE9BQUcsSUFBRTtBQUFJLFNBQUssUUFBTSxvQkFBSTtBQUFJLFNBQUssSUFBRTtBQUFBLEVBQUU7QUFDNTRCLEtBQUcsVUFBVSxNQUFJLFNBQVMsR0FBRSxHQUFFO0FBQUMsU0FBSyxNQUFNLElBQUksS0FBSyxJQUFFLEdBQUUsQ0FBQztBQUFFLFNBQUssTUFBTSxPQUFLLEtBQUssU0FBTyxLQUFLLE1BQU0sT0FBTyxLQUFLLE1BQU0sS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLO0FBQUEsRUFBQztBQUFFLEtBQUcsVUFBVSxNQUFJLFNBQVMsR0FBRTtBQUFDLFVBQU0sSUFBRSxLQUFLLE1BQU0sSUFBSSxDQUFDO0FBQUUsU0FBRyxLQUFLLE1BQUksTUFBSSxLQUFLLE1BQU0sT0FBTyxDQUFDLEdBQUUsS0FBSyxNQUFNLElBQUksS0FBSyxJQUFFLEdBQUUsQ0FBQztBQUFHLFdBQU87QUFBQSxFQUFDO0FBQUUsS0FBRyxVQUFVLFNBQU8sU0FBUyxHQUFFO0FBQUMsZUFBVSxLQUFLLEtBQUssT0FBTTtBQUFDLFlBQU0sSUFBRSxFQUFFLENBQUM7QUFBRSxRQUFFLENBQUMsRUFBRSxTQUFTLENBQUMsS0FBRyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBQUEsSUFBQztBQUFBLEVBQUM7QUFBRSxLQUFHLFVBQVUsUUFBTSxXQUFVO0FBQUMsU0FBSyxNQUFNLE1BQU07QUFBRSxTQUFLLElBQUU7QUFBQSxFQUFFO0FBQUUsTUFBTSxLQUFHLEVBQUMsV0FBVSxPQUFHLFNBQVEsT0FBRyxRQUFPLE1BQUU7QUFBRSxNQUFNLEtBQUcsQ0FBQztBQUFFLE1BQU0sS0FBRyxvQkFBSSxJQUFJLENBQUMsQ0FBQyxLQUFJLEdBQUcsR0FBRSxDQUFDLEtBQUksR0FBRyxHQUFFLENBQUMsS0FBSSxHQUFHLEdBQUUsQ0FBQyxLQUFJLEdBQUcsR0FBRSxDQUFDLEtBQUksR0FBRyxHQUFFLENBQUMsS0FBSSxHQUFHLEdBQUUsQ0FBQyxLQUFJLEdBQUcsR0FBRSxDQUFDLEtBQUksR0FBRyxHQUFFLENBQUMsS0FBSSxHQUFHLEdBQUUsQ0FBQyxLQUFJLEdBQUcsR0FBRSxDQUFDLEtBQUksR0FBRyxHQUFFLENBQUMsS0FBSSxHQUFHLEdBQUUsQ0FBQyxLQUFJLEdBQUcsR0FBRSxDQUFDLEtBQUksR0FBRyxDQUFDLENBQUM7QUFBRSxNQUFNLEtBQUcsb0JBQUksSUFBSSxDQUFDLENBQUMsTUFBSyxHQUFHLEdBQUUsQ0FBQyxNQUFLLEdBQUcsR0FBRSxDQUFDLE1BQUssR0FBRyxHQUFFLENBQUMsTUFBSyxHQUFHLEdBQUUsQ0FBQyxNQUFLLEdBQUcsR0FBRSxDQUFDLE1BQUssR0FBRyxHQUFFLENBQUMsTUFBSyxHQUFHLENBQUMsQ0FBQztBQUEvRixNQUFpRyxLQUFHLENBQUMsaUJBQWdCLFFBQU8sdUJBQXNCLFFBQU8sV0FBVSxJQUFJO0FBQUUsTUFBTSxLQUFHLEVBQUMsR0FBRSxJQUFHLEdBQUUsSUFBRyxHQUFFLElBQUcsR0FBRSxJQUFHLEdBQUUsSUFBRyxHQUFFLElBQUcsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsUUFBUyxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxFQUFDO0FBQUUsTUFBSSxLQUFHLEVBQUMsT0FBTSxJQUFHLFNBQVEsSUFBRyxXQUFVLElBQUcsY0FBYSxFQUFDLFFBQU8sR0FBRSxHQUFFLGVBQWMsRUFBQyxRQUFPLElBQUcsU0FBUSxJQUFHLFVBQVMsR0FBRSxHQUFFLFlBQVcsRUFBQyxRQUFPLElBQUcsVUFBUyxHQUFHLE9BQU8sQ0FBQyxlQUFjLEVBQUUsQ0FBQyxHQUFFLFNBQVEsR0FBRSxHQUFFLGNBQWEsRUFBQyxRQUFPLE9BQUcsU0FBUSxFQUFDLFFBQU8sS0FBRSxHQUFFLFVBQVMsU0FBUyxHQUFFO0FBQUMsYUFBUSxJQUFFLEdBQUUsSUFBRSxFQUFFLFFBQU8sS0FBSTtBQUFDLFVBQUksSUFBRSxFQUFFLENBQUM7QUFBRSxVQUFJLElBQUUsRUFBRSxPQUFPLENBQUMsR0FBRSxJQUFFLEdBQUcsQ0FBQztBQUFFLGVBQVEsSUFBRSxHQUFFLEdBQUUsSUFBRSxFQUFFLFdBQVMsSUFBRSxFQUFFLE9BQU8sQ0FBQyxHQUFFLE1BQUksT0FBSyxNQUFJLE9BQUssRUFBRSxJQUFFLEdBQUcsQ0FBQyxNQUFJLE1BQUksTUFBSSxLQUFHLEdBQUUsSUFBRSxHQUFFLEVBQUUsV0FBUyxLQUFJLElBQUk7QUFBQyxRQUFFLENBQUMsSUFBRTtBQUFBLElBQUM7QUFBQSxFQUFDLEVBQUMsR0FBRSxLQUFJLEVBQUMsT0FBTSxHQUFFLEdBQUUsWUFBVyxJQUFHLGNBQWEsSUFBRyxhQUFZLEdBQUU7QUFBRSxXQUFTLEdBQUcsR0FBRSxHQUFFLEdBQUUsR0FBRTtBQUFDLFFBQUksSUFBRSxDQUFDO0FBQUUsYUFBUSxJQUFFLEdBQUUsR0FBRSxJQUFFLEVBQUUsTUFBTSxRQUFPLElBQUksS0FBRyxJQUFFLEVBQUUsTUFBTSxDQUFDLEdBQUUsS0FBRyxFQUFFLE9BQU8sTUFBRyxFQUFFO0FBQUEsU0FBVztBQUFDLFVBQUUsRUFBRSxJQUFFLFdBQVMsT0FBTyxFQUFFLEdBQUUsQ0FBQztBQUFFLFlBQU0sSUFBRSxFQUFFO0FBQU8sVUFBRyxNQUFJLElBQUUsRUFBRSxTQUFPLEVBQUUsT0FBTyxDQUFDLElBQUUsR0FBRSxLQUFHLEdBQUUsTUFBSSxFQUFFLFVBQVEsSUFBRyxDQUFDLEdBQUc7QUFBTSxVQUFFO0FBQUEsSUFBQztBQUFDLFdBQU87QUFBQSxFQUFDO0FBQy9vRCxXQUFTLEdBQUcsR0FBRTtBQUFDLFFBQUcsQ0FBQyxRQUFNLEtBQUssZ0JBQWMsR0FBRyxRQUFPLElBQUksR0FBRyxDQUFDO0FBQUUsU0FBSyxRQUFNLElBQUUsQ0FBQyxDQUFDLElBQUUsQ0FBQztBQUFFLFNBQUssU0FBTyxJQUFFLEVBQUUsU0FBTztBQUFFLFVBQU0sSUFBRTtBQUFLLFdBQU8sSUFBSSxNQUFNLENBQUMsR0FBRSxFQUFDLElBQUksR0FBRSxHQUFFO0FBQUMsVUFBRyxNQUFJLFNBQVMsUUFBTyxFQUFFO0FBQU8sVUFBRyxNQUFJLE9BQU8sUUFBTyxTQUFTLEdBQUU7QUFBQyxVQUFFLE1BQU0sRUFBRSxNQUFNLFNBQU8sQ0FBQyxFQUFFLEtBQUssQ0FBQztBQUFFLFVBQUU7QUFBQSxNQUFRO0FBQUUsVUFBRyxNQUFJLE1BQU0sUUFBTyxXQUFVO0FBQUMsWUFBRyxFQUFFLE9BQU8sUUFBTyxFQUFFLFVBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxTQUFPLENBQUMsRUFBRSxJQUFJO0FBQUEsTUFBQztBQUFFLFVBQUcsTUFBSSxVQUFVLFFBQU8sU0FBUyxHQUFFO0FBQUMsWUFBSSxJQUFFO0FBQUUsaUJBQVEsSUFBRSxHQUFFLEdBQUUsR0FBRSxJQUFFLEVBQUUsTUFBTSxRQUFPLEtBQUk7QUFBQyxjQUFFLEVBQUUsTUFBTSxDQUFDO0FBQUUsY0FBRSxFQUFFLFFBQVEsQ0FBQztBQUFFLGNBQUcsS0FBRyxFQUFFLFFBQU8sSUFBRTtBQUFFLGVBQUcsRUFBRTtBQUFBLFFBQU07QUFBQyxlQUFNO0FBQUEsTUFBRTtBQUMxZixVQUFHLE1BQUksV0FBVyxRQUFPLFNBQVMsR0FBRTtBQUFDLGlCQUFRLElBQUUsR0FBRSxJQUFFLEVBQUUsTUFBTSxRQUFPLElBQUksS0FBRyxFQUFFLE1BQU0sQ0FBQyxFQUFFLFNBQVMsQ0FBQyxFQUFFLFFBQU07QUFBRyxlQUFNO0FBQUEsTUFBRTtBQUFFLFVBQUcsTUFBSSxRQUFRLFFBQU8sU0FBUyxHQUFFLEdBQUU7QUFBQyxlQUFPLEdBQUcsR0FBRSxLQUFHLEdBQUUsS0FBRyxFQUFFLFFBQU8sS0FBRTtBQUFBLE1BQUM7QUFBRSxVQUFHLE1BQUksU0FBUyxRQUFPLFNBQVMsR0FBRSxHQUFFO0FBQUMsZUFBTyxHQUFHLEdBQUUsS0FBRyxHQUFFLEtBQUcsRUFBRSxRQUFPLElBQUU7QUFBQSxNQUFDO0FBQUUsVUFBRyxNQUFJLGNBQWMsUUFBTztBQUFNLFVBQUcsT0FBTyxNQUFJLFNBQVMsU0FBTyxJQUFFLEVBQUUsTUFBTSxJQUFFLFNBQUcsTUFBRyxDQUFDLE1BQUksRUFBRSxDQUFDO0FBQUEsSUFBQyxHQUFFLElBQUksR0FBRSxHQUFFLEdBQUU7QUFBQyxVQUFFLElBQUUsU0FBRyxNQUFHO0FBQUUsT0FBQyxFQUFFLE1BQU0sQ0FBQyxNQUFJLEVBQUUsTUFBTSxDQUFDLElBQUUsQ0FBQyxJQUFJLENBQUMsSUFBRTtBQUFFLFFBQUU7QUFBUyxhQUFNO0FBQUEsSUFBRSxFQUFDLENBQUM7QUFBQSxFQUFDO0FBQUMsS0FBRyxVQUFVLFFBQU0sV0FBVTtBQUFDLFNBQUssTUFBTSxTQUFPO0FBQUEsRUFBQztBQUFFLEtBQUcsVUFBVSxPQUFLLFdBQVU7QUFBQSxFQUFDO0FBQzlmLFdBQVMsRUFBRSxJQUFFLEdBQUU7QUFBQyxRQUFHLENBQUMsUUFBTSxLQUFLLGdCQUFjLEVBQUUsUUFBTyxJQUFJLEVBQUUsQ0FBQztBQUFFLFNBQUssUUFBTSxFQUFFO0FBQUUsU0FBSyxJQUFFLENBQUM7QUFBRSxTQUFLLE9BQUs7QUFBRSxRQUFFLE1BQUksS0FBSyxJQUFFLElBQUcsS0FBSyxJQUFFLE9BQU8sQ0FBQyxNQUFJLEtBQUssSUFBRSxJQUFHLEtBQUssSUFBRTtBQUFBLEVBQUU7QUFBQyxJQUFFLFVBQVUsTUFBSSxTQUFTLEdBQUU7QUFBQyxVQUFNLElBQUUsS0FBSyxNQUFNLEtBQUssRUFBRSxDQUFDLENBQUM7QUFBRSxXQUFPLEtBQUcsRUFBRSxJQUFJLENBQUM7QUFBQSxFQUFDO0FBQUUsSUFBRSxVQUFVLE1BQUksU0FBUyxHQUFFLEdBQUU7QUFBQyxRQUFJLElBQUUsS0FBSyxFQUFFLENBQUM7QUFBRSxRQUFJLElBQUUsS0FBSyxNQUFNLENBQUM7QUFBRSxTQUFHLElBQUUsRUFBRSxNQUFLLEVBQUUsSUFBSSxHQUFFLENBQUMsSUFBRyxLQUFHLEVBQUUsU0FBTyxLQUFLLFdBQVMsS0FBSyxNQUFNLENBQUMsSUFBRSxJQUFFLG9CQUFJLElBQUksQ0FBQyxDQUFDLEdBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLEdBQUUsS0FBSztBQUFBLEVBQU87QUFDelosV0FBUyxFQUFFLElBQUUsR0FBRTtBQUFDLFFBQUcsQ0FBQyxRQUFNLEtBQUssZ0JBQWMsRUFBRSxRQUFPLElBQUksRUFBRSxDQUFDO0FBQUUsU0FBSyxRQUFNLEVBQUU7QUFBRSxTQUFLLElBQUUsQ0FBQztBQUFFLFNBQUssT0FBSztBQUFFLFFBQUUsTUFBSSxLQUFLLElBQUUsSUFBRyxLQUFLLElBQUUsT0FBTyxDQUFDLE1BQUksS0FBSyxJQUFFLElBQUcsS0FBSyxJQUFFO0FBQUEsRUFBRTtBQUFDLElBQUUsVUFBVSxNQUFJLFNBQVMsR0FBRTtBQUFDLFFBQUksSUFBRSxLQUFLLEVBQUUsQ0FBQztBQUFFLFFBQUksSUFBRSxLQUFLLE1BQU0sQ0FBQztBQUFFLFNBQUcsSUFBRSxFQUFFLE1BQUssRUFBRSxJQUFJLENBQUMsSUFBRyxLQUFHLEVBQUUsU0FBTyxLQUFLLFdBQVMsS0FBSyxNQUFNLENBQUMsSUFBRSxJQUFFLG9CQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLEdBQUUsS0FBSztBQUFBLEVBQU87QUFBRSxNQUFFLEVBQUU7QUFBVSxJQUFFLE1BQUksRUFBRSxVQUFVLE1BQUksU0FBUyxHQUFFO0FBQUMsVUFBTSxJQUFFLEtBQUssTUFBTSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0FBQUUsV0FBTyxLQUFHLEVBQUUsSUFBSSxDQUFDO0FBQUEsRUFBQztBQUNyYSxJQUFFLFNBQU8sRUFBRSxVQUFVLFNBQU8sU0FBUyxHQUFFO0FBQUMsVUFBTSxJQUFFLEtBQUssTUFBTSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0FBQUUsU0FBRyxFQUFFLE9BQU8sQ0FBQyxLQUFHLEtBQUs7QUFBQSxFQUFNO0FBQUUsSUFBRSxRQUFNLEVBQUUsVUFBVSxRQUFNLFdBQVU7QUFBQyxTQUFLLFFBQU0sRUFBRTtBQUFFLFNBQUssSUFBRSxDQUFDO0FBQUUsU0FBSyxPQUFLO0FBQUEsRUFBQztBQUFFLElBQUUsU0FBTyxFQUFFLFVBQVUsU0FBTyxhQUFXO0FBQUMsYUFBUSxJQUFFLEdBQUUsSUFBRSxLQUFLLEVBQUUsUUFBTyxJQUFJLFVBQVEsS0FBSyxLQUFLLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFNO0FBQUEsRUFBQztBQUFFLElBQUUsT0FBSyxFQUFFLFVBQVUsT0FBSyxhQUFXO0FBQUMsYUFBUSxJQUFFLEdBQUUsSUFBRSxLQUFLLEVBQUUsUUFBTyxJQUFJLFVBQVEsS0FBSyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxPQUFNO0FBQUEsRUFBQztBQUFFLElBQUUsVUFBUSxFQUFFLFVBQVUsVUFBUSxhQUFXO0FBQUMsYUFBUSxJQUFFLEdBQUUsSUFBRSxLQUFLLEVBQUUsUUFBTyxJQUFJLFVBQVEsS0FBSyxLQUFLLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxPQUFNO0FBQUEsRUFBQztBQUM1ZixXQUFTLEdBQUcsR0FBRTtBQUFDLFFBQUksSUFBRSxTQUFHLEtBQUssS0FBRTtBQUFFLFFBQUcsT0FBTyxLQUFHLFNBQVMsUUFBTyxJQUFFO0FBQUUsUUFBSSxJQUFFLEdBQUUsSUFBRSxLQUFLLElBQUU7QUFBRSxhQUFRLElBQUUsR0FBRSxJQUFFLEVBQUUsUUFBTyxJQUFJLE1BQUcsSUFBRSxJQUFFLEVBQUUsV0FBVyxDQUFDLEtBQUc7QUFBRSxXQUFPLEtBQUssTUFBSSxLQUFHLElBQUUsU0FBRyxNQUFHO0FBQUEsRUFBQztBQUFDLFdBQVMsR0FBRyxHQUFFO0FBQUMsUUFBSSxJQUFFLGFBQU8sQ0FBQyxHQUFHLEtBQUssS0FBRSxPQUFPLENBQUM7QUFBRSxRQUFJLElBQUUsT0FBTztBQUFFLFFBQUcsTUFBSSxTQUFTLFFBQU8sSUFBRTtBQUFFLFFBQUcsTUFBSSxTQUFTLFFBQU8sT0FB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LElBQUUsR0FBRSxJQUFFLEVBQUUsUUFBTyxJQUFJLElBQUcsR0FBRSxHQUFFLEdBQUUsR0FBRSxDQUFDO0FBQUEsUUFBTyxLQUFFLEVBQUUsQ0FBQyxNQUFJLEVBQUUsQ0FBQyxJQUFFLEVBQUUsSUFBRyxJQUFFLEVBQUUsRUFBRSxDQUFDLEdBQUUsR0FBRyxHQUFFLEdBQUUsR0FBRSxHQUFFLENBQUM7QUFBQSxFQUFDO0FBQzdjLFdBQVMsR0FBRyxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUU7QUFBQyxRQUFHLElBQUUsRUFBRSxDQUFDLEVBQUUsS0FBRyxNQUFJLEVBQUUsU0FBTyxHQUFFO0FBQUMsVUFBRyxFQUFFLGdCQUFjLE9BQU07QUFBQyxZQUFHLEVBQUUsQ0FBQyxHQUFFO0FBQUMsZUFBSSxJQUFFLEdBQUUsSUFBRSxFQUFFLFFBQU8sSUFBSSxHQUFFLElBQUksR0FBRSxFQUFFLENBQUMsR0FBRSxNQUFHLElBQUU7QUFBRTtBQUFBLFFBQU07QUFBQyxZQUFFLEVBQUUsS0FBSyxHQUFHO0FBQUEsTUFBQztBQUFDLFFBQUUsSUFBSSxHQUFFLEdBQUUsR0FBRSxJQUFFO0FBQUEsSUFBQyxXQUFTLEVBQUUsZ0JBQWMsTUFBTSxNQUFJLElBQUUsR0FBRSxJQUFFLEVBQUUsUUFBTyxJQUFJLElBQUcsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxDQUFDO0FBQUEsUUFBTyxLQUFFLEVBQUUsRUFBRSxDQUFDLEdBQUUsR0FBRyxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLENBQUM7QUFBQSxFQUFDO0FBQUUsV0FBUyxHQUFHLEdBQUUsR0FBRSxHQUFFLEdBQUU7QUFBQyxRQUFHLENBQUMsRUFBRSxPQUFPLFFBQU87QUFBRSxRQUFHLEVBQUUsV0FBUyxFQUFFLFFBQU8sSUFBRSxFQUFFLENBQUMsR0FBRSxJQUFFLEtBQUcsRUFBRSxTQUFPLElBQUUsRUFBRSxNQUFNLEdBQUUsSUFBRSxDQUFDLElBQUUsR0FBRSxJQUFFLEdBQUcsS0FBSyxNQUFLLENBQUMsSUFBRTtBQUFFLFFBQUksSUFBRSxDQUFDO0FBQUUsYUFBUSxJQUFFLEdBQUUsR0FBRSxHQUFFLElBQUUsRUFBRSxRQUFPLElBQUksTUFBSSxJQUFFLEVBQUUsQ0FBQyxPQUFLLElBQUUsRUFBRSxTQUFRO0FBQUMsVUFBRyxHQUFFO0FBQUMsWUFBRyxLQUFHLEdBQUU7QUFBQyxlQUFHO0FBQUU7QUFBQSxRQUFRO0FBQUMsWUFBRSxFQUFFLE1BQU0sR0FBRSxJQUFFLENBQUM7QUFBRSxZQUFFLEVBQUU7QUFBTyxZQUFFO0FBQUEsTUFBQztBQUFDLFVBQUUsTUFBSSxJQUFFLEVBQUUsTUFBTSxHQUFFLENBQUMsR0FBRSxJQUFFO0FBQUcsVUFBRyxDQUFDLEVBQUUsVUFBUSxLQUFHLEVBQUUsUUFBTyxJQUFFLEdBQUcsS0FBSyxNQUFLLENBQUMsSUFBRTtBQUFFLFFBQUUsS0FBSyxDQUFDO0FBQUUsV0FBRztBQUFFLFVBQUcsQ0FBQyxFQUFFO0FBQUEsSUFBSztBQUFDLFFBQUUsRUFBRSxTQUFPLElBQUUsQ0FBQyxFQUFFLE9BQU8sTUFBTSxDQUFDLEdBQUUsQ0FBQyxJQUFFLEVBQUUsQ0FBQztBQUFFLFdBQU8sSUFBRSxHQUFHLEtBQUssTUFBSyxDQUFDLElBQUU7QUFBQSxFQUFDO0FBQUUsV0FBUyxHQUFHLEdBQUUsR0FBRSxHQUFFLEdBQUU7QUFBQyxRQUFJLElBQUUsRUFBRSxDQUFDO0FBQUUsUUFBRyxFQUFFLENBQUMsS0FBRyxFQUFFLENBQUMsRUFBRSxNQUFNLFFBQU8sRUFBRSxDQUFDLEVBQUUsTUFBTSxHQUFFLENBQUM7QUFBRSxRQUFHLEVBQUUsTUFBSSxTQUFPLE1BQUksU0FBTyxFQUFFLE9BQU8sVUFBUSxFQUFFLFNBQU8sRUFBRSxTQUFTLFFBQU8sRUFBRSxTQUFPLE1BQUksSUFBRSxFQUFFLEVBQUUsU0FBTyxDQUFDLEtBQUksSUFBRSxFQUFFLFdBQVMsRUFBRSxTQUFPLEVBQUUsU0FBTztBQUFFLFFBQUksSUFBRSxDQUFDLEdBQUUsSUFBRSxHQUFFLElBQUUsR0FBRSxH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QUFBQyxpQkFBUSxJQUFFLEdBQUUsSUFBRSxFQUFFLEVBQUUsUUFBTyxJQUFJLEtBQUcsRUFBRSxFQUFFLENBQUMsTUFBSSxHQUFFO0FBQUMsWUFBRSxFQUFFLENBQUMsSUFBRSxXQUFVO0FBQUMsbUJBQU8sRUFBRSxLQUFLLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsQ0FBQztBQUFBLFVBQUM7QUFBRTtBQUFBLFFBQUs7QUFBQyxXQUFHLENBQUM7QUFBQSxNQUFDLENBQUM7QUFDaGdCLFFBQUUsRUFBRSxLQUFLLENBQUM7QUFBQSxJQUFDLFdBQVMsRUFBRSxNQUFNLEdBQUUsRUFBRSxLQUFLLFdBQVU7QUFBQyxhQUFPLEVBQUUsS0FBSyxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLENBQUM7QUFBQSxJQUFDLENBQUM7QUFBQSxRQUFPLFFBQU8sRUFBRSxLQUFLLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsQ0FBQztBQUFFLFdBQU8sSUFBRSxFQUFFLFNBQU8sRUFBRSxTQUFPO0FBQUEsRUFBQztBQUFDLFdBQVMsR0FBRyxHQUFFLEdBQUUsR0FBRTtBQUFDLFFBQUUsRUFBRSxDQUFDO0FBQUUsVUFBTSxJQUFFLEVBQUUsQ0FBQyxLQUFHO0FBQUUsTUFBRSxVQUFRLEVBQUUsUUFBTTtBQUFHLFFBQUUsSUFBSSxFQUFFLENBQUM7QUFBRSxNQUFFLFNBQU8sTUFBSSxJQUFFLEVBQUUsQ0FBQyxFQUFFLE1BQU0sR0FBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQUcsV0FBTztBQUFBLEVBQUM7QUFBRSxJQUFFLFVBQVUsS0FBRyxXQUFVO0FBQUMsV0FBTyxHQUFHLE1BQUssTUFBSyxJQUFHLFNBQVM7QUFBQSxFQUFDO0FBQUUsV0FBUyxHQUFHLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUU7QUFBQyxNQUFFLFdBQVMsS0FBSyxPQUFPLFVBQVEsRUFBRSxLQUFLLEtBQUssTUFBTSxHQUFFLEVBQUUsU0FBTyxJQUFFLEtBQUssU0FBTyxFQUFFLENBQUMsS0FBRyxLQUFLLFNBQU8sR0FBRyxHQUFFLEdBQUUsR0FBRSxPQUFHLEtBQUssQ0FBQyxHQUFFLElBQUU7QUFBSSxVQUFJLEtBQUssUUFBTTtBQUFNLFdBQU8sSUFBRSxLQUFLLFFBQVEsR0FBRSxHQUFFLEdBQUUsQ0FBQyxJQUFFO0FBQUEsRUFBSTtBQUFFLElBQUUsVUFBVSxNQUFJLFdBQVU7QUFBQyxXQUFPLEdBQUcsTUFBSyxPQUFNLElBQUcsU0FBUztBQUFBLEVBQUM7QUFBRSxXQUFTLEdBQUcsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRTtBQUFDLFFBQUcsQ0FBQyxLQUFHLENBQUMsS0FBSyxPQUFPLE9BQU8sUUFBTyxJQUFFLEtBQUssU0FBTztBQUFLLFFBQUk7QUFBRSxRQUFHLEVBQUUsT0FBTyxLQUFHLEtBQUssT0FBTyxVQUFRLEVBQUUsUUFBUSxLQUFLLE1BQU0sR0FBRSxFQUFFLFNBQU8sRUFBRSxNQUFLLFNBQU8sRUFBRSxDQUFDO0FBQUEsU0FBTTtBQUFDLFVBQUksSUFBRTtBQUFFLGVBQVEsSUFBRSxHQUFFLEdBQUUsR0FBRSxJQUFFLEVBQUUsUUFBTyxJQUFJLE1BQUksSUFBRSxFQUFFLENBQUMsT0FBSyxJQUFFLEVBQUUsUUFBUSxLQUFFLE1BQUksSUFBRTtBQUFBLGVBQVcsQ0FBQyxHQUFFO0FBQUMsWUFBRTtBQUFFO0FBQUEsTUFBSztBQUFDLFdBQUcsS0FBSyxTQUFPLEdBQUcsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEtBQUssR0FBRSxDQUFDLEdBQUUsSUFBRSxRQUFJLEtBQUssU0FBTyxDQUFDO0FBQUEsSUFBQztBQUFBLFFBQU0sT0FBSSxLQUFLLFNBQU87QUFBRyxVQUFJLEtBQUssUUFBTTtBQUFNLFdBQU8sSUFBRSxLQUFLLFFBQVEsR0FBRSxHQUFFLEdBQUUsR0FBRSxDQUFDLElBQUU7QUFBQSxFQUFJO0FBQUUsSUFBRSxVQUFVLE1BQUksV0FBVTtBQUFDLFdBQU8sR0FBRyxNQUFLLE9BQU0sSUFBRyxTQUFTO0FBQUEsRUFBQztB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QUFBLGNBQUM7QUFBQSxZQUFDLFdBQVMsRUFBRSxDQUFDLE1BQUksRUFBRSxDQUFDLElBQUUsQ0FBQyxJQUFHLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFFLEVBQUUsTUFBSSxHQUFFO0FBQUMsa0JBQUU7QUFBRSxvQkFBTTtBQUFBLFlBQUM7QUFBQTtBQUFBO0FBQUMsWUFBRTtBQUFBLE1BQUM7QUFBQyxXQUFLLFNBQU87QUFBRSxVQUFFO0FBQUEsSUFBRTtBQUFDLFVBQUksS0FBSyxRQUFNO0FBQU0sV0FBTyxJQUFFLEtBQUssUUFBUSxHQUFFLEdBQUUsR0FBRSxHQUFFLENBQUMsSUFBRTtBQUFBLEVBQUk7QUFBRSxXQUFTLEdBQUcsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFO0FBQUMsUUFBSSxHQUFFLEdBQUU7QUFBRSxXQUFPLE1BQUksWUFBVSxJQUFFLEdBQUUsSUFBRSxNQUFJLElBQUUsRUFBRTtBQUFTLFFBQUUsRUFBRSxRQUFRLElBQUk7QUFBRSxRQUFFLEVBQUUsVUFBVSxJQUFFLENBQUM7QUFBRSxRQUFFLEVBQUUsVUFBVSxHQUFFLENBQUM7QUFBRSxRQUFJLElBQUUsS0FBRyxFQUFFLFVBQVMsSUFBRSxDQUFDLEtBQUcsRUFBRSxTQUFPLE9BQUcsSUFBRSxLQUFHLEVBQUUsU0FBTyxLQUFHLEtBQUcsSUFBSSxPQUFPLElBQUUsTUFBSSxHQUFFLEdBQUc7QUFBRSxRQUFFLEtBQUcsRUFBRTtBQUFTLFFBQUksSUFBRTtBQUFFLFFBQUcsT0FBTyxNQUFJLFVBQVM7QUFBQyxVQUFJLElBQUUsRUFBRTtBQUFTLFVBQUUsRUFBRSxTQUFPO0FBQUUsVUFBRSxFQUFFO0FBQUEsSUFBTztBQUFDLFdBQU8sTUFBSSxhQUFXLElBQUUsTUFBSSxRQUFHLEtBQUc7QUFBTyxVQUFJLElBQUUsRUFBRSxRQUFRLE1BQUssQ0FBQztBQUFHLFFBQUUsRUFBRSxTQUFPO0FBQUUsUUFBSSxHQUFFO0FBQUUsV0FBTyxNQUFJLGFBQVcsSUFBRSxFQUFFLFFBQU8sTUFBSSxNQUFJLElBQUUsS0FBSSxJQUFF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VSxjQUFNLElBQUUsRUFBRTtBQUFRLFlBQUUsRUFBRSxTQUFPLEVBQUU7QUFBTSxVQUFFLFVBQVE7QUFBRyxVQUFFLFFBQU07QUFBSyxZQUFFLElBQUUsRUFBRSxZQUFZLENBQUMsSUFBRSxFQUFFLE9BQU8sQ0FBQztBQUFFLFVBQUUsVUFBUTtBQUFFLFVBQUUsUUFBTTtBQUFFLFlBQUUsRUFBRSxVQUFRO0FBQUEsTUFBQyxNQUFNLEtBQUUsQ0FBQztBQUFBLElBQUM7QUFBQyxRQUFHLEtBQUcsRUFBRSxNQUFLO0FBQUMsWUFBTSxJQUFFO0FBQUssVUFBRSxFQUFFLEtBQUssU0FBUyxHQUFFO0FBQUMsVUFBRSxFQUFFLENBQUMsSUFBRSxFQUFFLFNBQU8sRUFBRSxVQUFRO0FBQUUsV0FBRyxDQUFDO0FBQUEsTUFBQyxDQUFDO0FBQUUsVUFBRSxDQUFDLENBQUM7QUFBRSxVQUFFLENBQUM7QUFBRSxVQUFFLElBQUksUUFBUSxTQUFTLEdBQUU7QUFBQyxZQUFFO0FBQUEsTUFBQyxDQUFDO0FBQUEsSUFBQztBQUFDLFNBQUssUUFBTSxLQUFHO0FBQUssU0FBSyxTQUFPLEtBQUcsQ0FBQztBQUFFLFNBQUssSUFBRTtBQUFFLFNBQUssSUFDcHNCLEtBQUcsQ0FBQztBQUFFLFNBQUssUUFBTSxLQUFHO0FBQUssU0FBSyxTQUFPLEtBQUc7QUFBSyxTQUFLLFlBQVUsS0FBRztBQUFLLFNBQUssUUFBTSxLQUFHO0FBQUcsU0FBSyxRQUFNLEtBQUc7QUFBQSxFQUFFO0FBQUMsTUFBRSxFQUFFO0FBQVUsSUFBRSxRQUFNLFNBQVMsR0FBRTtBQUFDLFFBQUcsS0FBSyxPQUFNO0FBQUMsWUFBTSxJQUFFO0FBQUssV0FBSyxFQUFFLEtBQUssV0FBVTtBQUFDLGVBQU8sRUFBRSxNQUFNLENBQUMsRUFBRTtBQUFBLE1BQU0sQ0FBQztBQUFBLElBQUMsV0FBUyxLQUFLLE9BQU8sUUFBTztBQUFDLFlBQU0sSUFBRSxDQUFDO0FBQUUsZUFBUSxJQUFFLEdBQUUsR0FBRSxJQUFFLEtBQUssT0FBTyxRQUFPLElBQUksS0FBRyxJQUFFLEtBQUssT0FBTyxDQUFDLEVBQUUsS0FBRyxFQUFFLFVBQVEsR0FBRTtBQUFDLFlBQUcsRUFBRSxDQUFDLElBQUUsR0FBRSxLQUFHLEVBQUUsUUFBTyxDQUFDLEVBQUU7QUFBQSxNQUFLLE9BQUs7QUFBQyxVQUFFLENBQUMsSUFBRSxFQUFFLE1BQU0sR0FBRSxDQUFDO0FBQUU7QUFBQSxNQUFLO0FBQUMsV0FBSyxTQUFPO0FBQUEsSUFBQztBQUFDLFdBQU87QUFBQSxFQUFJO0FBQzdaLElBQUUsU0FBTyxTQUFTLEdBQUU7QUFBQyxRQUFHLEtBQUssT0FBTTtBQUFDLFlBQU0sSUFBRTtBQUFLLFdBQUssRUFBRSxLQUFLLFdBQVU7QUFBQyxlQUFPLEVBQUUsT0FBTyxDQUFDLEVBQUU7QUFBQSxNQUFNLENBQUM7QUFBQSxJQUFDLFdBQVMsS0FBSyxPQUFPLFFBQU87QUFBQyxZQUFNLElBQUUsQ0FBQztBQUFFLGVBQVEsSUFBRSxHQUFFLEdBQUUsSUFBRSxLQUFLLE9BQU8sUUFBTyxJQUFJLEtBQUcsSUFBRSxLQUFLLE9BQU8sQ0FBQyxFQUFFLEdBQUUsVUFBUSxJQUFFLEtBQUcsRUFBRSxVQUFRLEVBQUUsQ0FBQyxJQUFFLEVBQUUsTUFBTSxDQUFDLEdBQUUsSUFBRTtBQUFHLFdBQUssU0FBTztBQUFBLElBQUM7QUFBQyxXQUFPO0FBQUEsRUFBSTtBQUFFLElBQUUsUUFBTSxTQUFTLEdBQUU7QUFBQyxRQUFHLEtBQUssT0FBTTtBQUFDLFlBQU0sSUFBRTtBQUFLLFdBQUssRUFBRSxLQUFLLFdBQVU7QUFBQyxlQUFPLEVBQUUsTUFBTSxDQUFDLEVBQUU7QUFBQSxNQUFNLENBQUM7QUFBQSxJQUFDLE1BQU0sTUFBSyxLQUFHO0FBQUUsV0FBTztBQUFBLEVBQUk7QUFDM1ksV0FBUyxHQUFHLEdBQUUsR0FBRTtBQUFDLFFBQUksSUFBRSxFQUFFO0FBQU8sUUFBSSxJQUFFLEVBQUU7QUFBTSxNQUFFLFFBQU07QUFBSyxhQUFRLElBQUUsR0FBRSxHQUFFLElBQUUsRUFBRSxFQUFFLFFBQU8sSUFBSSxLQUFHLElBQUUsRUFBRSxFQUFFLENBQUM7QUFBRSxVQUFHLE9BQU8sTUFBSSxXQUFXLEtBQUUsRUFBRSxHQUFFLEVBQUUsRUFBRSxDQUFDLElBQUUsSUFBRSxFQUFFLFVBQVEsR0FBRTtBQUFBLGVBQVksRUFBRSxFQUFFLEtBQUUsRUFBRSxFQUFFLEdBQUUsRUFBRSxFQUFFLENBQUMsSUFBRSxJQUFFLEVBQUUsVUFBUSxHQUFFO0FBQUEsZUFBWSxFQUFFLEtBQUssUUFBTyxFQUFFLFFBQU07QUFBQTtBQUFFLFFBQUUsRUFBRTtBQUFPLE1BQUUsSUFBRSxDQUFDO0FBQUUsTUFBRSxTQUFPO0FBQUssU0FBRyxFQUFFLENBQUM7QUFBRSxXQUFPO0FBQUEsRUFBQztBQUMzUixJQUFFLFVBQVEsU0FBUyxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUU7QUFBQyxRQUFJLElBQUUsS0FBSyxRQUFNLEdBQUcsTUFBSyxJQUFFLElBQUUsS0FBSztBQUFPLFFBQUcsRUFBRSxNQUFLO0FBQUMsWUFBTSxJQUFFO0FBQUssYUFBTyxFQUFFLEtBQUssV0FBVTtBQUFDLGVBQU8sRUFBRSxRQUFRLEdBQUUsR0FBRSxHQUFFLEdBQUUsQ0FBQztBQUFBLE1BQUMsQ0FBQztBQUFBLElBQUM7QUFBQyxNQUFFLFdBQVMsT0FBTyxNQUFJLFlBQVUsSUFBRSxFQUFFLGFBQVcsS0FBSyxXQUFVLElBQUUsQ0FBQyxDQUFDLEtBQUcsRUFBRSxRQUFPLElBQUUsRUFBRSxRQUFPLElBQUUsRUFBRSxVQUFRLElBQUUsS0FBRyxLQUFLLFdBQVUsSUFBRSxDQUFDLENBQUMsS0FBRyxJQUFHLElBQUUsSUFBRSxJQUFFLEdBQUcsS0FBSyxLQUFLLE9BQU0sQ0FBQyxJQUFFLElBQUUsR0FBRyxLQUFLLEtBQUssT0FBTSxHQUFFLEtBQUcsS0FBSSxHQUFFLENBQUM7QUFBRyxXQUFPLEtBQUssU0FBUyxHQUFFLENBQUM7QUFBQSxFQUFDO0FBQ2xYLElBQUUsV0FBUyxTQUFTLEdBQUUsR0FBRTtBQUFDLFFBQUcsRUFBRSxNQUFLO0FBQUMsWUFBTSxJQUFFO0FBQUssYUFBTyxFQUFFLEtBQUssU0FBUyxHQUFFO0FBQUMsZUFBTyxFQUFFLFNBQVMsR0FBRSxDQUFDO0FBQUEsTUFBQyxDQUFDO0FBQUEsSUFBQztBQUFDLFNBQUcsRUFBRSxVQUFRLEtBQUssVUFBUSxJQUFFLEdBQUcsS0FBSyxPQUFNLEdBQUUsS0FBSyxNQUFNLE9BQU0sS0FBSyxPQUFNLENBQUM7QUFBRyxVQUFNLElBQUUsS0FBSztBQUFPLFNBQUssWUFBVSxLQUFLLFFBQU0sS0FBSyxTQUFPLEtBQUssSUFBRSxLQUFLLFFBQU0sS0FBSyxTQUFPO0FBQUssU0FBSyxRQUFNLEtBQUssUUFBTTtBQUFHLFNBQUcsRUFBRSxDQUFDO0FBQUUsV0FBTztBQUFBLEVBQUM7QUFBRSxXQUFTLEdBQUcsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRTtBQUFDLFVBQU0sSUFBRSxFQUFFO0FBQU8sUUFBSSxJQUFFLENBQUMsR0FBRSxHQUFFO0FBQUUsUUFBRSxFQUFFO0FBQUUsYUFBUSxJQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxJQUFFLEdBQUUsSUFBSSxVQUFRLElBQUUsR0FBRSxJQUFFLEdBQUUsSUFBSSxLQUFHLElBQUUsRUFBRSxDQUFDLEdBQUUsSUFBRSxFQUFFLFdBQVMsSUFBRSxFQUFFLENBQUMsR0FBRyxVQUFRLElBQUUsR0FBRSxJQUFFLEVBQUUsUUFBTyxLQUFJO0FBQUMsVUFBRSxFQUFFLENBQUM7QUFBRSxPQUFDLElBQUUsRUFBRSxDQUFDLEtBQUcsRUFBRSxDQUFDLE9BQUssSUFBRSxHQUFFLEVBQUUsQ0FBQyxJQUFFO0FBQUcsVUFBRSxFQUFFLENBQUMsTUFBSSxFQUFFLENBQUMsSUFBRSxDQUFDO0FBQUcsVUFBRyxDQUFDLEdBQUU7QUFBQyxZQUFJLElBQUUsS0FBRyxLQUFHLENBQUMsSUFBRSxJQUFFLEtBQUc7QUFBRyxZQUFFLEVBQUUsQ0FBQyxNQUFJLEVBQUUsQ0FBQyxJQUFFLENBQUM7QUFBQSxNQUFFO0FBQUMsUUFBRSxLQUFLLENBQUM7QUFBRSxVQUFHLEtBQUcsS0FBRyxNQUFJLElBQUUsS0FBRyxFQUFFLFNBQU8sTUFBSSxFQUFFLFFBQU8sSUFBRSxFQUFFLE1BQU0sQ0FBQyxJQUFFO0FBQUEsSUFBQztBQUFDLFFBQUcsSUFBRSxFQUFFLE9BQU8sS0FBRyxFQUFFLEtBQUUsRUFBRSxTQUFPLElBQUUsR0FBRyxHQUFFLEdBQUUsR0FBRSxHQUFFLENBQUMsS0FBRyxJQUFFLEVBQUUsQ0FBQyxNQUFJLEtBQUcsRUFBRSxTQUFPLEtBQUcsSUFBRSxFQUFFLE1BQU0sR0FBRSxJQUFFLENBQUMsSUFBRTtBQUFBLFNBQU07QUFBQyxVQUFHLElBQUUsRUFBRSxRQUFNLENBQUM7QUFBRSxVQUFFLEVBQUUsSUFBRSxDQUFDO0FBQUUsVUFBRyxLQUFHLEVBQUUsS0FBRyxHQUFFO0FBQUMsWUFBRyxFQUFFLFNBQU8sS0FBRyxFQUFFLEtBQUUsRUFBRSxNQUFNLEdBQUUsSUFDNXlCLENBQUM7QUFBQSxNQUFDLE9BQUs7QUFBQyxZQUFFLENBQUM7QUFBRSxpQkFBUSxJQUFFLEdBQUUsR0FBRSxJQUFFLEVBQUUsUUFBTyxJQUFJLEtBQUcsSUFBRSxFQUFFLENBQUMsRUFBRSxLQUFHLEtBQUcsRUFBRSxTQUFPLEVBQUUsTUFBRyxFQUFFO0FBQUEsYUFBVztBQUFDLGNBQUcsS0FBRyxFQUFFLFNBQU8sS0FBRyxFQUFFLEtBQUUsRUFBRSxNQUFNLEdBQUUsSUFBRSxDQUFDLEdBQUUsS0FBRyxFQUFFLFFBQU8sTUFBSSxLQUFHLEVBQUU7QUFBUSxZQUFFLEtBQUssQ0FBQztBQUFFLGNBQUcsQ0FBQyxFQUFFO0FBQUEsUUFBSztBQUFDLFlBQUU7QUFBQSxNQUFDO0FBQUEsSUFBQztBQUFDLFdBQU87QUFBQSxFQUFDO0FBQzNMLFdBQVMsR0FBRyxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUU7QUFBQyxVQUFNLElBQUUsQ0FBQyxHQUFFLElBQUUsRUFBRTtBQUFFLFFBQUk7QUFBRSxRQUFJLElBQUUsRUFBRTtBQUFPLFFBQUk7QUFBRSxRQUFHLEVBQUUsTUFBSSxJQUFFLElBQUUsR0FBRSxLQUFHLEdBQUUsS0FBSTtBQUFDLFVBQUcsS0FBRyxJQUFFLEVBQUUsQ0FBQyxNQUFJLEVBQUU7QUFBTyxhQUFJLElBQUUsR0FBRSxJQUFFLEdBQUUsSUFBSSxLQUFHLElBQUUsRUFBRSxDQUFDLEdBQUUsQ0FBQyxFQUFFLENBQUM7QUFBRSxjQUFHLEVBQUUsQ0FBQyxJQUFFLEdBQUUsRUFBRTtBQUFBLG1CQUFZLEVBQUUsS0FBSyxDQUFDLEdBQUUsRUFBRSxXQUFTLEVBQUUsUUFBTztBQUFBO0FBQUE7QUFBQSxJQUFDO0FBQUEsUUFBTSxVQUFRLElBQUUsSUFBRSxHQUFFLEdBQUUsSUFBRSxHQUFFLEtBQUcsR0FBRSxLQUFJO0FBQUMsVUFBRSxFQUFFLENBQUM7QUFBRSxlQUFRLElBQUUsR0FBRSxJQUFFLEVBQUUsUUFBTyxJQUFJLEtBQUcsS0FBRyxJQUFFLEVBQUUsQ0FBQyxNQUFJLEVBQUU7QUFBTyxpQkFBUSxJQUFFLEdBQUUsSUFBRSxHQUFFLElBQUksS0FBRyxJQUFFLEVBQUUsQ0FBQyxHQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBRyxFQUFFLENBQUMsSUFBRSxHQUFFLEVBQUU7QUFBQSxhQUFRO0FBQUMsY0FBSSxLQUFHLEtBQUcsSUFBRSxJQUFFLElBQUUsS0FBRyxJQUFFLE9BQUssSUFBRSxLQUFHO0FBQUUsV0FBQyxFQUFFLENBQUMsTUFBSSxFQUFFLENBQUMsSUFBRSxDQUFDLElBQUksS0FBSyxDQUFDO0FBQUUsY0FBRyxFQUFFLE1BQUksRUFBRSxRQUFPO0FBQUEsUUFBQztBQUFBO0FBQUEsSUFBQztBQUFDLFdBQU87QUFBQSxFQUFDO0FBQzFiLFdBQVMsR0FBRyxHQUFFLEdBQUUsR0FBRTtBQUFDLFVBQU0sSUFBRSxFQUFFLEdBQUUsSUFBRSxDQUFDO0FBQUUsYUFBUSxJQUFFLEdBQUUsR0FBRSxJQUFFLEVBQUUsUUFBTyxLQUFJO0FBQUMsVUFBRSxFQUFFLENBQUM7QUFBRSxlQUFRLElBQUUsR0FBRSxJQUFFLEVBQUUsUUFBTyxJQUFJLEdBQUUsRUFBRSxDQUFDLENBQUMsSUFBRTtBQUFBLElBQUM7QUFBQyxRQUFHLEVBQUUsVUFBUSxJQUFFLEdBQUUsR0FBRSxJQUFFLEVBQUUsUUFBTyxJQUFJLEtBQUUsRUFBRSxDQUFDLEdBQUUsRUFBRSxDQUFDLE1BQUksRUFBRSxLQUFLLENBQUMsR0FBRSxFQUFFLENBQUMsSUFBRTtBQUFBLFFBQVEsVUFBUSxJQUFFLEdBQUUsR0FBRSxHQUFFLElBQUUsRUFBRSxPQUFPLFFBQU8sSUFBSSxNQUFJLElBQUUsRUFBRSxPQUFPLENBQUMsR0FBRSxJQUFFLEdBQUUsSUFBRSxFQUFFLFFBQU8sSUFBSSxLQUFFLEVBQUUsQ0FBQyxHQUFFLEVBQUUsQ0FBQyxPQUFLLEVBQUUsQ0FBQyxNQUFJLEVBQUUsQ0FBQyxJQUFFLENBQUMsSUFBSSxLQUFLLENBQUMsR0FBRSxFQUFFLENBQUMsSUFBRTtBQUFHLFdBQU87QUFBQSxFQUFDO0FBQUUsSUFBRTtBQUFFLEtBQUcsVUFBVSxTQUFPLFNBQVMsR0FBRSxHQUFFLEdBQUUsR0FBRTtBQUFDLFVBQUksQ0FBQyxLQUFHLEdBQUcsQ0FBQyxLQUFHLElBQUUsR0FBRSxJQUFFLE1BQUksR0FBRyxDQUFDLE1BQUksSUFBRSxHQUFFLElBQUU7QUFBSSxRQUFJLElBQUUsQ0FBQztBQUFFLFFBQUksSUFBRSxDQUFDO0FBQUUsUUFBSTtBQUFFLFFBQUksR0FBRSxHQUFFLEdBQUUsR0FBRTtBQUFFLFFBQUksSUFBRSxHQUFFLElBQUUsTUFBRztBQUFFLFFBQUcsR0FBRTtBQUFDLFFBQUUsZ0JBQWMsVUFBUSxJQUFFLEVBQUMsT0FBTSxFQUFDO0FBQUcsVUFBRSxFQUFFLFNBQU87QUFBRSxVQUFFLEVBQUU7QUFBTSxVQUFFLEVBQUU7QUFBTSxVQUFFLEVBQUU7QUFBTSxVQUFFLEtBQUcsRUFBRSxVQUFRLElBQUUsRUFBRSxXQUFTLEVBQUUsUUFBTSxPQUFLO0FBQUcsVUFBSSxJQUFFLEtBQUssT0FBSyxFQUFFO0FBQUksVUFBRSxFQUFFO0FBQVEsVUFBRSxFQUFFLFlBQVU7QUFBRyxVQUFFLEVBQUU7QUFBTSxVQUFFLEtBQUcsS0FBSyxTQUFPLEVBQUU7QUFBVSxVQUFJLElBQUUsQ0FBQyxDQUFDLEtBQUcsS0FBRyxLQUFLLFNBQU8sRUFBRTtBQUFPLFVBQUUsRUFBRSxTQUFPO0FBQUUsVUFBSSxJQUFFLEVBQUUsVUFBUTtBQUFFLFlBQUksSUFBRSxJQUFFLE1BQUk7QUFBRyxVQUFHLE1BQUksQ0FBQyxLQUFLLE1BQUksQ0FBQyxJQUFHO0FBQUMsVUFBRSxnQkFBYyxVQUFRLElBQUUsQ0FBQyxDQUFDO0FBQUcsWUFBSSxJQUFFLENBQUM7QUFBRSxpQkFBUSxJQUN2ekIsR0FBRSxHQUFFLElBQUUsRUFBRSxRQUFPLElBQUksS0FBRyxJQUFFLEVBQUUsQ0FBQyxHQUFFLEVBQUUsU0FBTyxFQUFFLEtBQUk7QUFBQyxjQUFJLElBQUUsRUFBRTtBQUFJLGNBQUcsRUFBRSxnQkFBYyxNQUFNLFVBQVEsSUFBRSxHQUFFLElBQUUsRUFBRSxRQUFPLElBQUksR0FBRSxLQUFLLEVBQUUsT0FBTSxFQUFFLENBQUMsQ0FBQztBQUFBLGNBQU8sR0FBRSxLQUFLLEVBQUUsT0FBTSxDQUFDO0FBQUEsUUFBQyxPQUFLO0FBQUMsY0FBRSxPQUFPLEtBQUssQ0FBQztBQUFFLG1CQUFRLElBQUUsR0FBRSxHQUFFLEdBQUUsSUFBRSxFQUFFLFFBQU8sSUFBSSxLQUFHLElBQUUsRUFBRSxDQUFDLEdBQUUsSUFBRSxFQUFFLENBQUMsR0FBRSxFQUFFLGdCQUFjLE1BQU0sTUFBSSxJQUFFLEdBQUUsSUFBRSxFQUFFLFFBQU8sSUFBSSxHQUFFLEtBQUssR0FBRSxFQUFFLENBQUMsQ0FBQztBQUFBLGNBQU8sR0FBRSxLQUFLLEdBQUUsQ0FBQztBQUFBLFFBQUM7QUFBQyxZQUFFO0FBQUUsWUFBRyxDQUFDLEdBQUU7QUFBQyxjQUFFLENBQUM7QUFBRSxjQUFHLEVBQUUsT0FBTyxNQUFJLElBQUUsR0FBRSxJQUFFLEVBQUUsUUFBTyxLQUFHLEdBQUU7QUFBQyxnQkFBRyxLQUFLLElBQUc7QUFBQyxrQkFBRSxLQUFLLE1BQU0sSUFBSSxFQUFFLENBQUMsQ0FBQztBQUFFLGtCQUFHLENBQUMsRUFBRTtBQUFTLGdCQUFFLEtBQUssSUFBRSxFQUFFLEdBQUcsSUFBSSxFQUFFLElBQUUsQ0FBQyxHQUFFLEdBQUUsR0FBRSxDQUFDLENBQUM7QUFBQSxZQUFDLE1BQU0sS0FBRSxHQUFHLEtBQUssTUFBSyxFQUFFLENBQUMsR0FBRSxFQUFFLElBQUUsQ0FBQyxHQUFFLEdBQUUsR0FBRSxDQUFDO0FBQUUsY0FBRSxLQUFLLElBQUUsRUFBQyxPQUFNLEVBQUUsQ0FBQyxHQUFFLEtBQUksRUFBRSxJQUN0ZixDQUFDLEdBQUUsUUFBTyxFQUFDLElBQUUsQ0FBQyxDQUFDLENBQUM7QUFBQSxVQUFDO0FBQUMsY0FBRyxFQUFFLFFBQU87QUFBQyxrQkFBTSxJQUFFO0FBQUssbUJBQU8sUUFBUSxJQUFJLENBQUMsRUFBRSxLQUFLLFNBQVMsR0FBRTtBQUFDLHVCQUFRLElBQUUsR0FBRSxJQUFFLEVBQUUsUUFBTyxJQUFJLEtBQUUsRUFBRSxDQUFDLEVBQUUsU0FBTyxFQUFFLENBQUMsSUFBRSxFQUFFLENBQUMsSUFBRSxFQUFFLENBQUM7QUFBRSxxQkFBTyxJQUFFLElBQUUsSUFBSSxFQUFFLEVBQUUsU0FBTyxJQUFFLEdBQUcsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLENBQUMsSUFBRSxFQUFFLENBQUMsR0FBRSxDQUFDO0FBQUEsWUFBQyxDQUFDO0FBQUEsVUFBQztBQUFDLGlCQUFPLElBQUUsSUFBRSxJQUFJLEVBQUUsRUFBRSxTQUFPLElBQUUsR0FBRyxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsQ0FBQyxJQUFFLEVBQUUsQ0FBQyxHQUFFLElBQUk7QUFBQSxRQUFDO0FBQUEsTUFBQztBQUFDLFdBQUcsS0FBRyxFQUFFLElBQUUsS0FBRyxLQUFLLFdBQVMsRUFBRSxDQUFDLElBQUUsSUFBRSxLQUFHLEVBQUUsZ0JBQWMsU0FBTyxFQUFFLFdBQVMsTUFBSSxJQUFFLEVBQUUsQ0FBQyxJQUFHLElBQUUsRUFBRSxTQUFPLEVBQUU7QUFBUSxXQUFHLEVBQUUsZ0JBQWMsVUFBUSxJQUFFLENBQUMsQ0FBQztBQUFBLElBQUU7QUFBQyxVQUFJLElBQUUsS0FBSztBQUFPLFFBQUk7QUFBRSxTQUFHLEtBQUssVUFBUSxLQUFLLE9BQUssQ0FBQyxLQUFHLENBQUM7QUFBRSxhQUFRLElBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxJQUFFLEVBQUUsUUFBTyxLQUFJO0FBQUMsVUFBRSxFQUFFLENBQUM7QUFBRSxVQUFHLEtBQUssTUFBSSxLQUFLLE9BQ3RmLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRTtBQUFTLFVBQUk7QUFBRSxRQUFFLENBQUMsTUFBSSxJQUFFLEdBQUUsSUFBRSxFQUFFLE9BQU0sSUFBRSxFQUFFLFNBQU8sR0FBRSxJQUFFLEdBQUcsRUFBRSxPQUFNLENBQUMsR0FBRSxJQUFFLEdBQUcsRUFBRSxRQUFPLENBQUMsR0FBRSxJQUFFLEdBQUcsRUFBRSxTQUFRLENBQUMsR0FBRSxJQUFFLEtBQUcsS0FBSyxTQUFPLEdBQUcsRUFBRSxXQUFVLENBQUMsR0FBRSxJQUFFLENBQUMsQ0FBQyxLQUFHLEtBQUcsS0FBSyxTQUFPLEdBQUcsRUFBRSxRQUFPLENBQUMsR0FBRSxJQUFFLEdBQUcsRUFBRSxPQUFNLENBQUM7QUFBRyxVQUFHLEVBQUUsS0FBRSxFQUFFLENBQUM7QUFBQSxXQUFNO0FBQUMsWUFBRSxLQUFHLEtBQUcsQ0FBQztBQUFFLFlBQUUsRUFBRTtBQUFPLFlBQUksSUFBRSxLQUFLLE1BQU0sSUFBSSxDQUFDO0FBQUUsY0FBSSxLQUFLLE9BQUssRUFBRSxNQUFJLEdBQUUsSUFBRSxFQUFFLEdBQUcsb0JBQW1CLEVBQUUsUUFBTSxJQUFHLENBQUMsS0FBRyxNQUFJLEVBQUUsU0FBTztBQUFLLFlBQUUsSUFBRSxFQUFFLFlBQVksR0FBRSxHQUFFLENBQUMsSUFBRSxFQUFFLE9BQU8sR0FBRSxHQUFFLENBQUM7QUFBRSxjQUFJLEVBQUUsU0FBTztBQUFHLFlBQUcsR0FBRTtBQUFDLFlBQUUsQ0FBQyxJQUFFO0FBQUU7QUFBQSxRQUFRO0FBQUEsTUFBQztBQUFDLFdBQUcsSUFBRSxFQUFFLFVBQVEsTUFBSSxFQUFFO0FBQU8sVUFBRyxLQUFHLEdBQUU7QUFBQyxZQUFFLENBQUM7QUFBRSxZQUFFO0FBQUUsWUFBRyxLQUFLLE1BQUksR0FBRTtBQUFDLGNBQUcsQ0FBQyxFQUFFLE1BQUksSUFBRSxFQUFFLFFBQU8sSUFDMWYsRUFBRSxRQUFPLEtBQUk7QUFBQyxnQkFBSSxJQUFFLEVBQUUsQ0FBQztBQUFFLGdCQUFHLEtBQUcsRUFBRSxPQUFPLE1BQUksRUFBRSxLQUFLLENBQUM7QUFBQSxxQkFBVSxDQUFDLEVBQUUsUUFBTyxJQUFFLElBQUUsSUFBSSxFQUFFLEdBQUUsSUFBSTtBQUFBLFVBQUM7QUFBQSxRQUFDLE1BQU0sVUFBUSxJQUFFLEdBQUUsR0FBRSxHQUFFLElBQUUsRUFBRSxRQUFPLEtBQUcsR0FBRTtBQUFDLGNBQUUsS0FBSyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUM7QUFBRSxjQUFHLENBQUMsRUFBRSxLQUFHLEVBQUU7QUFBQSxjQUFjLFFBQU8sSUFBRSxJQUFFLElBQUksRUFBRSxHQUFFLElBQUk7QUFBRSxjQUFHLEtBQUcsSUFBRSxLQUFHLEVBQUUsSUFBSSxFQUFFLElBQUUsQ0FBQyxDQUFDLE1BQUksRUFBRSxPQUFPLE1BQUksRUFBRSxLQUFLLENBQUM7QUFBQSxtQkFBVSxDQUFDLEVBQUUsUUFBTyxJQUFFLElBQUUsSUFBSSxFQUFFLEdBQUUsSUFBSTtBQUFBLFFBQUM7QUFBQyxZQUFHLEdBQUU7QUFBQyxjQUFFLEdBQUcsR0FBRSxHQUFFLENBQUM7QUFBRSxjQUFFLEVBQUU7QUFBTyxjQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsUUFBTyxJQUFFLElBQUUsSUFBSSxFQUFFLEdBQUUsSUFBSTtBQUFFO0FBQUEsUUFBRztBQUFBLE1BQUM7QUFBQyxVQUFHLEVBQUUsR0FBRSxDQUFDLElBQUUsR0FBRSxFQUFFLEtBQUssQ0FBQyxHQUFFO0FBQUEsZUFBWSxFQUFFLFdBQVMsRUFBRSxRQUFPLElBQUUsSUFBRSxJQUFJLEVBQUUsR0FBRSxJQUFJO0FBQUEsSUFBQztBQUFDLFFBQUcsR0FBRTtBQUFDLFVBQUcsS0FBSyxNQUFJLEtBQUcsRUFBRSxVQUFRLENBQUMsRUFBRSxNQUFJLElBQUUsR0FBRSxJQUFFLEVBQUUsUUFBTyxLQUFHLEdBQUU7QUFBQyxZQUFFLEtBQUssTUFBTSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQzNmLFlBQUcsQ0FBQyxFQUFFLEtBQUcsRUFBRTtBQUFBLFlBQWMsUUFBTyxJQUFFLElBQUUsSUFBSSxFQUFFLEdBQUUsSUFBSTtBQUFFLFVBQUUsS0FBSyxFQUFFLEdBQUcsSUFBSSxFQUFFLElBQUUsQ0FBQyxHQUFFLEdBQUUsR0FBRSxLQUFFLENBQUM7QUFBQSxNQUFDO0FBQUMsWUFBTSxJQUFFO0FBQUssYUFBTyxRQUFRLElBQUksQ0FBQyxFQUFFLEtBQUssU0FBUyxHQUFFO0FBQUMsY0FBSSxFQUFFLFVBQVE7QUFBRyxVQUFFLFdBQVMsSUFBRSxFQUFFLE9BQU8sR0FBRSxHQUFFLEdBQUUsQ0FBQztBQUFHLGVBQU87QUFBQSxNQUFDLENBQUM7QUFBQSxJQUFDO0FBQUMsUUFBRyxDQUFDLEVBQUUsUUFBTyxJQUFFLElBQUUsSUFBSSxFQUFFLEdBQUUsSUFBSTtBQUFFLFFBQUcsTUFBSSxDQUFDLEtBQUcsQ0FBQyxLQUFLLE9BQU8sUUFBTyxJQUFFLEVBQUUsQ0FBQyxHQUFFLElBQUUsSUFBRSxJQUFJLEVBQUUsR0FBRSxJQUFJO0FBQUUsUUFBRSxDQUFDO0FBQUUsU0FBSSxJQUFFLEdBQUUsSUFBRSxFQUFFLFFBQU8sS0FBSTtBQUFDLFVBQUUsRUFBRSxDQUFDO0FBQUUsV0FBRyxFQUFFLFVBQVEsT0FBTyxFQUFFLENBQUMsRUFBRSxRQUFNLGdCQUFjLEtBQUssS0FBRyxFQUFFLEtBQUssSUFBRSxLQUFLLE1BQU0sSUFBSSxLQUFLLE1BQU0sQ0FBQyxDQUFDLEVBQUUsR0FBRyxPQUFPLENBQUMsQ0FBQyxJQUFFLElBQUUsR0FBRyxLQUFLLE1BQUssQ0FBQztBQUFHLFVBQUcsRUFBRSxRQUFPLElBQUUsSUFBRSxHQUFHLEdBQUUsR0FBRSxLQUFLLE9BQU0sR0FBRSxDQUFDLElBQUUsSUFBRSxJQUFJLEVBQUUsR0FBRSxJQUFJO0FBQUUsUUFBRSxDQUFDLElBQ3BmLEVBQUMsT0FBTSxFQUFFLENBQUMsR0FBRSxRQUFPLEVBQUM7QUFBQSxJQUFDO0FBQUMsUUFBRyxLQUFHLEtBQUssTUFBSSxFQUFFLFFBQU87QUFBQyxZQUFNLElBQUU7QUFBSyxhQUFPLFFBQVEsSUFBSSxDQUFDLEVBQUUsS0FBSyxTQUFTLEdBQUU7QUFBQyxpQkFBUSxJQUFFLEdBQUUsSUFBRSxFQUFFLFFBQU8sSUFBSSxHQUFFLENBQUMsRUFBRSxTQUFPLEVBQUUsQ0FBQztBQUFFLGNBQUksSUFBRSxHQUFHLEdBQUUsR0FBRSxFQUFFLE9BQU0sR0FBRSxDQUFDO0FBQUcsZUFBTyxJQUFFLEdBQUcsQ0FBQyxJQUFFO0FBQUEsTUFBQyxDQUFDO0FBQUEsSUFBQztBQUFDLFVBQUksSUFBRSxHQUFHLEdBQUUsR0FBRSxLQUFLLE9BQU0sR0FBRSxDQUFDO0FBQUcsV0FBTyxJQUFFLEdBQUcsQ0FBQyxJQUFFO0FBQUEsRUFBQztBQUMzTyxXQUFTLEdBQUcsR0FBRTtBQUFDLFVBQU0sSUFBRSxDQUFDLEdBQUUsSUFBRSxFQUFFLEdBQUUsSUFBRSxFQUFFO0FBQUUsYUFBUSxJQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxJQUFFLEVBQUUsUUFBTyxLQUFJO0FBQUMsVUFBRSxFQUFFLENBQUM7QUFBRSxVQUFFLEVBQUU7QUFBTSxVQUFFLEVBQUU7QUFBTyxlQUFRLElBQUUsR0FBRSxJQUFFLEVBQUUsUUFBTyxJQUFJLEtBQUcsSUFBRSxFQUFFLENBQUMsR0FBRSxPQUFPLE1BQUksV0FBUyxJQUFFLEVBQUMsSUFBRyxJQUFFLEVBQUMsSUFBRSxJQUFFLEVBQUUsS0FBSSxJQUFFLEVBQUUsQ0FBQyxLQUFHLEVBQUUsS0FBSyxDQUFDLEtBQUcsRUFBRSxRQUFNLEVBQUUsQ0FBQyxJQUFFLENBQUMsQ0FBQyxHQUFFLEVBQUUsS0FBSyxDQUFDLElBQUcsSUFBRSxFQUFFLFVBQVUsS0FBRSxFQUFFLENBQUMsR0FBRSxNQUFJLEVBQUUsQ0FBQyxJQUFFLElBQUUsQ0FBQyxHQUFFLEVBQUUsWUFBVSxJQUFHLEVBQUUsQ0FBQyxJQUFFO0FBQUEsSUFBQztBQUFDLFdBQU87QUFBQSxFQUFDO0FBQUMsV0FBUyxHQUFHLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRTtBQUFDLFFBQUUsS0FBSyxJQUFJLElBQUksQ0FBQztBQUFFLFFBQUcsQ0FBQyxFQUFFLFFBQU0sQ0FBQztBQUFFLFFBQUUsRUFBRSxJQUFJLENBQUM7QUFBRSxRQUFHLENBQUMsRUFBRSxRQUFNLENBQUM7QUFBRSxRQUFFLEVBQUUsU0FBTztBQUFFLFFBQUcsSUFBRSxHQUFFO0FBQUMsVUFBRyxLQUFHLElBQUUsS0FBRyxFQUFFLEtBQUUsRUFBRSxNQUFNLEdBQUUsSUFBRSxDQUFDO0FBQUUsWUFBSSxJQUFFLEdBQUcsS0FBSyxNQUFLLENBQUM7QUFBQSxJQUFFO0FBQUMsV0FBTztBQUFBLEVBQUM7QUFDN2MsV0FBUyxHQUFHLEdBQUU7QUFBQyxRQUFHLENBQUMsUUFBTSxDQUFDLEtBQUssTUFBTSxRQUFPO0FBQUUsUUFBRyxLQUFLLEdBQUcsUUFBTyxLQUFLLE1BQU0sSUFBSSxLQUFLLE1BQU0sQ0FBQyxDQUFDLEVBQUUsR0FBRyxPQUFPLENBQUM7QUFBRSxVQUFNLElBQUUsTUFBTSxFQUFFLE1BQU07QUFBRSxhQUFRLElBQUUsR0FBRSxHQUFFLElBQUUsRUFBRSxRQUFPLElBQUksS0FBRSxFQUFFLENBQUMsR0FBRSxFQUFFLENBQUMsSUFBRSxFQUFDLElBQUcsR0FBRSxLQUFJLEtBQUssTUFBTSxJQUFJLENBQUMsRUFBQztBQUFFLFdBQU87QUFBQSxFQUFDO0FBQUUsV0FBUyxHQUFHLEdBQUU7QUFBQyxRQUFHLENBQUMsUUFBTSxLQUFLLGdCQUFjLEdBQUcsUUFBTyxJQUFJLEdBQUcsQ0FBQztBQUFFLFVBQU0sSUFBRSxFQUFFLFlBQVUsRUFBRSxPQUFLO0FBQUUsUUFBSSxHQUFFO0FBQUUsU0FBSyxJQUFFLENBQUM7QUFBRSxTQUFLLFFBQU0sQ0FBQztBQUFFLFNBQUssSUFBRSxDQUFDO0FBQUUsU0FBSyxPQUFLLElBQUUsRUFBRSxPQUFLLEVBQUUsT0FBSyxHQUFHLEdBQUUsS0FBSyxDQUFDLEtBQUc7QUFBSyxLQUFDLElBQUUsRUFBRSxZQUFVLE9BQUssS0FBSyxXQUFTO0FBQUcsU0FBSyxhQUFXLENBQUMsQ0FBQyxFQUFFO0FBQVcsU0FBSyxNQUFJLENBQUMsS0FBSyxjQUFZLEVBQUUsVUFBUSxFQUFFLEtBQUcsSUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFFLG9CQUFJLFFBQUksSUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFFLG9CQUFJO0FBQUksU0FBSyxLQUFHLElBQUUsRUFBRSxTQUFPLFNBQU8sS0FBRyxNQUFJLFFBQUksQ0FBQztBQUFFLFNBQUssUUFBTSxJQUFFLElBQUUsSUFBSSxFQUFFLENBQUMsSUFBRSxvQkFBSSxRQUFJO0FBQUssU0FBSyxTQUFPLElBQUUsRUFBRSxTQUFPLFNBQU8sSUFBSSxHQUFHLENBQUM7QUFBRSxNQUFFLFFBQU07QUFBRyxTQUFLLFNBQU8sRUFBRSxVQUFRO0FBQUcsU0FBSyxXQUFTLEVBQUUsWUFDcHNCO0FBQUUsU0FBSyxRQUFNLEdBQUcsS0FBSyxNQUFLLEdBQUUsQ0FBQztBQUFFLFNBQUssTUFBSTtBQUFLLFFBQUcsSUFBRSxFQUFFO0FBQUksVUFBRyxPQUFPLE1BQUksYUFBVyxJQUFFLENBQUMsQ0FBQyxJQUFHLEVBQUUsUUFBTztBQUFDLGFBQUssTUFBSSxvQkFBSTtBQUFJLGFBQUssSUFBRSxDQUFDO0FBQUUsYUFBSyxJQUFFLENBQUM7QUFBRSxpQkFBUSxJQUFFLEdBQUUsR0FBRSxHQUFFLElBQUUsRUFBRSxRQUFPLEtBQUk7QUFBQyxjQUFFLEVBQUUsQ0FBQztBQUFFLGNBQUUsRUFBRSxTQUFPO0FBQUUsY0FBRyxDQUFDLEVBQUUsT0FBTSxNQUFNLDBEQUEwRDtBQUFFLFlBQUUsU0FBTyxLQUFLLEVBQUUsQ0FBQyxJQUFFLEVBQUUsVUFBUSxLQUFLLEVBQUUsQ0FBQyxJQUFFLEdBQUcsR0FBRSxLQUFLLENBQUMsR0FBRSxFQUFFLFdBQVMsT0FBTyxLQUFLLEVBQUUsQ0FBQyxNQUFJLGFBQVcsS0FBSyxFQUFFLENBQUMsSUFBRSxJQUFJLE9BQU8sS0FBSyxFQUFFLENBQUMsQ0FBQyxJQUFHLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBRSxFQUFFO0FBQVMsZUFBSyxFQUFFLENBQUMsSUFBRTtBQUFFLGVBQUssSUFBSSxJQUFJLEdBQUUsb0JBQUksS0FBRztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUE7QUFBQyxRQUFHLEtBQUssUUFBTztBQUFDLFdBQUssYUFBVztBQUFHLFVBQUUsQ0FBQztBQUFFLGlCQUFVLEtBQUssS0FBSyxNQUFNLE9BQU8sRUFBRSxHQUFFLFFBQ2hoQixFQUFFLEtBQUssQ0FBQztBQUFFLFVBQUcsRUFBRSxRQUFPO0FBQUMsY0FBTSxJQUFFO0FBQUssZUFBTyxRQUFRLElBQUksQ0FBQyxFQUFFLEtBQUssU0FBUyxHQUFFO0FBQUMsY0FBSSxJQUFFO0FBQUUscUJBQVUsS0FBSyxFQUFFLE1BQU0sUUFBUSxHQUFFO0FBQUMsa0JBQU0sSUFBRSxFQUFFLENBQUM7QUFBRSxnQkFBSSxJQUFFLEVBQUUsQ0FBQztBQUFFLGNBQUUsU0FBTyxJQUFFLEVBQUUsQ0FBQyxHQUFFLEVBQUUsTUFBTSxJQUFJLEdBQUUsQ0FBQyxHQUFFO0FBQUEsVUFBSTtBQUFDLGlCQUFPO0FBQUEsUUFBQyxDQUFDO0FBQUEsTUFBQztBQUFBLElBQUMsTUFBTSxHQUFFLE9BQUssS0FBSyxhQUFXLE9BQUcsS0FBSyxNQUFNLEVBQUUsRUFBRTtBQUFBLEVBQUU7QUFBQyxNQUFFLEdBQUc7QUFDclAsSUFBRSxRQUFNLFNBQVMsR0FBRTtBQUFDLFFBQUksSUFBRSxLQUFLO0FBQU0sUUFBRyxLQUFLLElBQUksVUFBUSxJQUFFLEdBQUUsR0FBRSxJQUFFLEtBQUssRUFBRSxRQUFPLEtBQUk7QUFBQyxVQUFFLEtBQUssRUFBRSxDQUFDO0FBQUUsVUFBSSxJQUFFO0FBQU8sV0FBSyxNQUFNLElBQUksR0FBRSxJQUFFLElBQUksRUFBRSxDQUFDLEdBQUUsS0FBSyxHQUFHLENBQUM7QUFBRSxZQUFJLEtBQUssVUFBUSxJQUFFLEVBQUUsTUFBTSxDQUFDO0FBQUcsUUFBRSxLQUFLLENBQUM7QUFBRSxRQUFFLE1BQUksS0FBSyxJQUFJLElBQUksQ0FBQztBQUFBLElBQUM7QUFBQyxRQUFFLENBQUM7QUFBRSxVQUFNLElBQUUsRUFBQyxJQUFHLEVBQUUsSUFBRyxNQUFLLEVBQUUsTUFBSyxZQUFXLEVBQUUsV0FBVTtBQUFFLGFBQVEsSUFBRSxHQUFFLEdBQUUsR0FBRSxJQUFFLEVBQUUsUUFBTyxLQUFJO0FBQUMsUUFBRSxRQUFNLElBQUUsRUFBRSxDQUFDO0FBQUUsVUFBRSxLQUFLLE1BQU0sSUFBSSxDQUFDO0FBQUUsWUFBTSxJQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsSUFBRyxDQUFDO0FBQUUsUUFBRSxLQUFHLEVBQUU7QUFBRyxRQUFFLENBQUMsSUFBRSxFQUFFLE1BQU0sQ0FBQztBQUFFLFFBQUUsV0FBUztBQUFHLFVBQUUsRUFBRSxTQUFPLE9BQUcsRUFBRSxRQUFNLEtBQUs7QUFBQSxJQUFLO0FBQUMsVUFBTSxJQUFFO0FBQUssV0FBTyxLQUFLLEtBQUcsUUFBUSxJQUFJLENBQUMsRUFBRSxLQUFLLFdBQVU7QUFBQyxRQUFFLEtBQ3pmO0FBQUEsSUFBRSxDQUFDO0FBQUEsRUFBQztBQUFFLElBQUUsU0FBTyxXQUFnQjtBQUFBO0FBQUMsWUFBTSxJQUFFLENBQUM7QUFBRSxpQkFBVSxLQUFLLEtBQUssTUFBTSxPQUFPLEVBQUUsR0FBRSxLQUFLLEVBQUUsT0FBTyxDQUFDO0FBQUUsWUFBTSxRQUFRLElBQUksQ0FBQztBQUFFLFdBQUssSUFBSSxNQUFNO0FBQUEsSUFBQztBQUFBO0FBQUUsSUFBRSxVQUFRLFdBQVU7QUFBQyxVQUFNLElBQUUsQ0FBQztBQUFFLGVBQVUsS0FBSyxLQUFLLE1BQU0sT0FBTyxFQUFFLEdBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQztBQUFFLFdBQU8sUUFBUSxJQUFJLENBQUM7QUFBQSxFQUFDO0FBQ3BQLFdBQVMsR0FBRyxHQUFFLEdBQUU7QUFBQyxVQUFNLElBQUUsb0JBQUk7QUFBSSxRQUFJLElBQUUsRUFBRSxTQUFPLEVBQUUsU0FBTztBQUFFLE1BQUUsQ0FBQyxNQUFJLElBQUUsQ0FBQyxDQUFDO0FBQUcsYUFBUSxJQUFFLEdBQUUsR0FBRSxHQUFFLElBQUUsRUFBRSxRQUFPLEtBQUk7QUFBQyxVQUFFLEVBQUUsQ0FBQztBQUFFLFFBQUUsQ0FBQyxNQUFJLElBQUUsR0FBRSxJQUFFLEVBQUU7QUFBTyxVQUFFLEdBQUcsQ0FBQyxJQUFFLE9BQU8sT0FBTyxDQUFDLEdBQUUsR0FBRSxDQUFDLElBQUU7QUFBRSxVQUFHLEtBQUssUUFBTztBQUFDLFlBQUksSUFBRTtBQUFPLGFBQUcsSUFBRSxFQUFFLFlBQVUsRUFBRSxTQUFPLElBQUUsSUFBSSxHQUFHLE9BQU8sTUFBSSxXQUFTLEdBQUcsQ0FBQyxJQUFFLEtBQUcsQ0FBQyxDQUFDO0FBQUUsWUFBRSxJQUFJLEdBQUcsR0FBRSxDQUFDO0FBQUUsVUFBRSxJQUFJLEdBQUUsQ0FBQztBQUFBLE1BQUM7QUFBQyxXQUFLLFVBQVEsRUFBRSxJQUFJLEdBQUUsSUFBSSxFQUFFLEdBQUUsS0FBSyxHQUFHLENBQUM7QUFBRSxRQUFFLFNBQU8sS0FBSyxFQUFFLENBQUMsSUFBRSxFQUFFLFVBQVEsS0FBSyxFQUFFLENBQUMsSUFBRSxHQUFHLEdBQUUsS0FBSyxDQUFDLEdBQUUsRUFBRSxXQUFTLE9BQU8sS0FBSyxFQUFFLENBQUMsTUFBSSxhQUFXLEtBQUssRUFBRSxDQUFDLElBQUUsSUFBSSxPQUFPLEtBQUssRUFBRSxDQUFDLENBQUMsSUFBRyxLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUUsRUFBRTtBQUFTLFdBQUssTUFBTSxDQUFDLElBQUU7QUFBQSxJQUFDO0FBQUMsUUFBRyxLQUFLLEdBQUU7QUFBQyxVQUN4ZixFQUFFO0FBQU0sUUFBRSxDQUFDLE1BQUksSUFBRSxDQUFDLENBQUM7QUFBRyxlQUFRLElBQUUsR0FBRSxHQUFFLEdBQUUsSUFBRSxFQUFFLFFBQU8sSUFBSSxLQUFFLEVBQUUsQ0FBQyxHQUFFLElBQUUsRUFBRSxTQUFPLEdBQUUsRUFBRSxVQUFRLEtBQUssRUFBRSxDQUFDLElBQUUsRUFBRSxRQUFPLEVBQUUsT0FBTyxJQUFFLE1BQUksS0FBSyxFQUFFLENBQUMsSUFBRSxHQUFHLEdBQUUsS0FBSyxDQUFDLEdBQUUsRUFBRSxXQUFTLE9BQU8sS0FBSyxFQUFFLENBQUMsTUFBSSxhQUFXLEtBQUssRUFBRSxDQUFDLElBQUUsSUFBSSxPQUFPLEtBQUssRUFBRSxDQUFDLENBQUMsSUFBRyxLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUUsRUFBRTtBQUFBLElBQVE7QUFBQyxXQUFPO0FBQUEsRUFBQztBQUFDLFdBQVMsR0FBRyxHQUFFLEdBQUU7QUFBQyxVQUFNLElBQUUsRUFBRSxNQUFNLEdBQUc7QUFBRSxRQUFJLElBQUU7QUFBRSxhQUFRLElBQUUsR0FBRSxJQUFFLEVBQUUsUUFBTyxJQUFJLEtBQUUsRUFBRSxDQUFDLEdBQUUsRUFBRSxFQUFFLFNBQU8sQ0FBQyxNQUFJLFFBQU0sSUFBRSxFQUFFLFVBQVUsR0FBRSxFQUFFLFNBQU8sQ0FBQyxPQUFLLEVBQUUsQ0FBQyxJQUFFLE9BQUksTUFBSSxFQUFFLEdBQUcsSUFBRTtBQUFHLFFBQUUsRUFBRSxXQUFTLEVBQUUsU0FBTztBQUFHLFdBQU8sSUFBRSxJQUFFLElBQUUsRUFBRSxDQUFDO0FBQUEsRUFBQztBQUFDLElBQUUsU0FBTyxTQUFTLEdBQUUsR0FBRTtBQUFDLFdBQU8sS0FBSyxJQUFJLEdBQUUsR0FBRSxJQUFFO0FBQUEsRUFBQztBQUMzZSxJQUFFLFNBQU8sU0FBUyxHQUFFLEdBQUU7QUFBQyxXQUFPLEtBQUssT0FBTyxDQUFDLEVBQUUsSUFBSSxHQUFFLENBQUM7QUFBQSxFQUFDO0FBQUUsSUFBRSxTQUFPLFNBQVMsR0FBRTtBQUFDLE9BQUcsQ0FBQyxNQUFJLElBQUUsR0FBRyxHQUFFLEtBQUssR0FBRztBQUFHLGFBQVEsS0FBSyxLQUFLLE1BQU0sT0FBTyxFQUFFLEdBQUUsT0FBTyxHQUFFLElBQUU7QUFBRSxRQUFHLEtBQUssSUFBSSxJQUFJLENBQUMsR0FBRTtBQUFDLFVBQUcsS0FBSyxPQUFLLENBQUMsS0FBSyxXQUFXLFVBQVEsS0FBSyxLQUFLLElBQUksT0FBTyxFQUFFLFVBQVEsS0FBSyxHQUFFO0FBQUMsWUFBRSxFQUFFLENBQUM7QUFBRSxjQUFNLElBQUUsRUFBRSxDQUFDLEdBQUUsSUFBRSxFQUFFLFFBQVEsQ0FBQztBQUFFLFlBQUUsT0FBSyxFQUFFLFNBQU8sSUFBRSxFQUFFLE9BQU8sR0FBRSxDQUFDLElBQUUsRUFBRSxPQUFPLENBQUM7QUFBQSxNQUFFO0FBQUMsV0FBSyxTQUFPLEtBQUssTUFBTSxPQUFPLENBQUM7QUFBRSxXQUFLLElBQUksT0FBTyxDQUFDO0FBQUEsSUFBQztBQUFDLFNBQUssU0FBTyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBQUUsV0FBTztBQUFBLEVBQUk7QUFDdmEsSUFBRSxRQUFNLFdBQVU7QUFBQyxVQUFNLElBQUUsQ0FBQztBQUFFLGVBQVUsS0FBSyxLQUFLLE1BQU0sT0FBTyxHQUFFO0FBQUMsWUFBTSxJQUFFLEVBQUUsTUFBTTtBQUFFLFFBQUUsUUFBTSxFQUFFLEtBQUssQ0FBQztBQUFBLElBQUM7QUFBQyxRQUFHLEtBQUssSUFBSSxZQUFVLEtBQUssS0FBSyxJQUFJLE9BQU8sRUFBRSxHQUFFLE1BQU07QUFBRSxTQUFLLFNBQU8sS0FBSyxNQUFNLE1BQU07QUFBRSxTQUFLLFNBQU8sS0FBSyxNQUFNLE1BQU07QUFBRSxXQUFPLEVBQUUsU0FBTyxRQUFRLElBQUksQ0FBQyxJQUFFO0FBQUEsRUFBSTtBQUFFLElBQUUsVUFBUSxTQUFTLEdBQUU7QUFBQyxXQUFPLEtBQUssS0FBRyxLQUFLLE1BQU0sSUFBSSxLQUFLLE1BQU0sQ0FBQyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBRSxLQUFLLElBQUksSUFBSSxDQUFDO0FBQUEsRUFBQztBQUFFLElBQUUsVUFBUSxXQUFVO0FBQUMsZUFBVSxLQUFLLEtBQUssTUFBTSxPQUFPLEVBQUUsR0FBRSxRQUFRO0FBQUUsV0FBTztBQUFBLEVBQUk7QUFDN2EsSUFBRSxNQUFJLFNBQVMsR0FBRTtBQUFDLFdBQU8sS0FBSyxLQUFHLEtBQUssTUFBTSxJQUFJLEtBQUssTUFBTSxDQUFDLENBQUMsRUFBRSxHQUFHLE9BQU8sQ0FBQyxFQUFFLEtBQUssU0FBUyxHQUFFO0FBQUMsYUFBTyxFQUFFLENBQUMsS0FBRyxFQUFFLENBQUMsRUFBRSxPQUFLO0FBQUEsSUFBSSxDQUFDLElBQUUsS0FBSyxNQUFNLElBQUksQ0FBQyxLQUFHO0FBQUEsRUFBSTtBQUFFLElBQUUsTUFBSSxTQUFTLEdBQUUsR0FBRTtBQUFDLFdBQU8sTUFBSSxhQUFXLElBQUUsR0FBRSxJQUFFLEdBQUcsR0FBRSxLQUFLLEdBQUc7QUFBRyxTQUFLLE1BQU0sSUFBSSxHQUFFLENBQUM7QUFBRSxXQUFPO0FBQUEsRUFBSTtBQUFFLElBQUUsY0FBWTtBQUFHLElBQUUsU0FBTztBQUFHLElBQUUsU0FBTztBQUFHLEtBQUcsR0FBRyxTQUFTO0FBQUUsV0FBUyxHQUFHLEdBQUUsSUFBRSxHQUFFO0FBQUMsUUFBSSxJQUFFLENBQUMsR0FBRSxJQUFFLENBQUM7QUFBRSxVQUFJLElBQUUsT0FBSyxJQUFFLE1BQUk7QUFBRyxlQUFVLEtBQUssRUFBRSxRQUFRLEVBQUUsR0FBRSxLQUFLLENBQUMsR0FBRSxFQUFFLFdBQVMsTUFBSSxFQUFFLEtBQUssQ0FBQyxHQUFFLElBQUUsQ0FBQztBQUFHLE1BQUUsVUFBUSxFQUFFLEtBQUssQ0FBQztBQUFFLFdBQU87QUFBQSxFQUFDO0FBQUMsV0FBUyxHQUFHLEdBQUUsR0FBRTtBQUFDLFVBQUksSUFBRSxvQkFBSTtBQUFLLGFBQVEsSUFBRSxHQUFFLEdBQUUsSUFBRSxFQUFFLFFBQU8sSUFBSSxLQUFFLEVBQUUsQ0FBQyxHQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRSxFQUFFLENBQUMsQ0FBQztBQUFFLFdBQU87QUFBQSxFQUFDO0FBQUMsV0FBUyxHQUFHLEdBQUUsSUFBRSxHQUFFO0FBQUMsUUFBSSxJQUFFLENBQUMsR0FBRSxJQUFFLENBQUM7QUFBRSxVQUFJLElBQUUsT0FBSyxJQUFFLE1BQUk7QUFBRyxlQUFVLEtBQUssRUFBRSxRQUFRLEVBQUUsR0FBRSxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUUsRUFBRSxXQUFTLE1BQUksRUFBRSxLQUFLLENBQUMsR0FBRSxJQUFFLENBQUM7QUFBRyxNQUFFLFVBQVEsRUFBRSxLQUFLLENBQUM7QUFBRSxXQUFPO0FBQUEsRUFBQztBQUN6c0IsV0FBUyxHQUFHLEdBQUUsR0FBRTtBQUFDLFVBQUksSUFBRSxvQkFBSTtBQUFLLGFBQVEsSUFBRSxHQUFFLEdBQUUsR0FBRSxJQUFFLEVBQUUsUUFBTyxJQUFJLEtBQUUsRUFBRSxDQUFDLEdBQUUsSUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRSxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUUsR0FBRyxFQUFFLENBQUMsR0FBRSxDQUFDLENBQUM7QUFBRSxXQUFPO0FBQUEsRUFBQztBQUFDLFdBQVMsR0FBRyxHQUFFO0FBQUMsUUFBSSxJQUFFLENBQUMsR0FBRSxJQUFFLENBQUM7QUFBRSxlQUFVLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRSxLQUFLLENBQUMsR0FBRSxFQUFFLFdBQVMsU0FBTyxFQUFFLEtBQUssQ0FBQyxHQUFFLElBQUUsQ0FBQztBQUFHLE1BQUUsVUFBUSxFQUFFLEtBQUssQ0FBQztBQUFFLFdBQU87QUFBQSxFQUFDO0FBQUMsV0FBUyxHQUFHLEdBQUUsR0FBRTtBQUFDLFVBQUksSUFBRSxvQkFBSTtBQUFLLGFBQVEsSUFBRSxHQUFFLElBQUUsRUFBRSxRQUFPLElBQUksR0FBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQUUsV0FBTztBQUFBLEVBQUM7QUFDalUsV0FBUyxHQUFHLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLElBQUUsR0FBRTtBQUFDLFVBQU0sSUFBRSxLQUFHLEVBQUUsZ0JBQWM7QUFBTSxRQUFJLElBQUUsSUFBRSxFQUFFLE1BQU0sSUFBRTtBQUFFLFFBQUcsQ0FBQyxFQUFFLFFBQU8sS0FBSyxPQUFPLEdBQUUsR0FBRSxHQUFFLElBQUUsQ0FBQztBQUFFLFNBQUksSUFBRSxHQUFHLElBQUUsSUFBRSxNQUFJLE9BQUssSUFBRSxLQUFHLE1BQUksR0FBRSxLQUFLLFVBQVUsQ0FBQyxDQUFDLE1BQUksRUFBRSxNQUFLO0FBQUMsWUFBTSxJQUFFO0FBQUssYUFBTyxFQUFFLEtBQUssV0FBVTtBQUFDLGVBQU8sR0FBRyxLQUFLLEdBQUUsR0FBRSxHQUFFLEdBQUUsSUFBRSxJQUFFLE1BQUssR0FBRSxHQUFFLElBQUUsQ0FBQztBQUFBLE1BQUMsQ0FBQztBQUFBLElBQUM7QUFBQyxXQUFPLEdBQUcsS0FBSyxNQUFLLEdBQUUsR0FBRSxHQUFFLElBQUUsSUFBRSxNQUFLLEdBQUUsR0FBRSxJQUFFLENBQUM7QUFBQSxFQUFDO0FBQ2hULFdBQVMsR0FBRyxHQUFFLEdBQUUsSUFBRSxHQUFFLElBQUUsR0FBRTtBQUFDLFFBQUcsSUFBRSxLQUFLLE1BQU0sUUFBTztBQUFDLFlBQU0sSUFBRSxLQUFLLE1BQU0sQ0FBQztBQUFFLFdBQUksSUFBRSxLQUFLLE1BQU0sSUFBSSxDQUFDLEVBQUUsT0FBTyxHQUFFLEdBQUUsR0FBRSxJQUFFLENBQUMsTUFBSSxFQUFFLE1BQUs7QUFBQyxjQUFNLElBQUU7QUFBSyxlQUFPLEVBQUUsS0FBSyxXQUFVO0FBQUMsaUJBQU8sRUFBRSxPQUFPLEdBQUUsR0FBRSxJQUFFLENBQUM7QUFBQSxRQUFDLENBQUM7QUFBQSxNQUFDO0FBQUMsYUFBTyxLQUFLLE9BQU8sR0FBRSxHQUFFLElBQUUsQ0FBQztBQUFBLElBQUM7QUFBQyxRQUFJLEdBQUU7QUFBRSxZQUFPLEdBQUU7QUFBQSxNQUFDLEtBQUs7QUFBRSxZQUFFO0FBQU0sWUFBRSxHQUFHLEtBQUssR0FBRztBQUFFLFlBQUU7QUFBSztBQUFBLE1BQU0sS0FBSztBQUFFLFlBQUU7QUFBTSxZQUFFLEtBQUssT0FBSyxHQUFHLEtBQUssS0FBSSxLQUFLLElBQUksSUFBSTtBQUFFLFlBQUU7QUFBSztBQUFBLE1BQU0sS0FBSztBQUFFLFlBQUU7QUFBTSxZQUFFLEtBQUssU0FBTyxHQUFHLEtBQUssS0FBSztBQUFFLFlBQUU7QUFBSztBQUFBLE1BQU07QUFBUTtBQUFBLElBQU07QUFBQyxXQUFPLEdBQUcsS0FBSyxNQUFLLEdBQUUsR0FBRSxHQUFFLEtBQUcsTUFBSyxHQUFFLENBQUM7QUFBQSxFQUFDO0FBQ3RjLFdBQVMsR0FBRyxHQUFFLEdBQUU7QUFBQyxRQUFJLElBQUUsRUFBRSxNQUFNLEdBQUc7QUFBRSxNQUFFLEVBQUUsU0FBTyxDQUFDLE1BQUksVUFBUSxFQUFFLElBQUk7QUFBRSxVQUFNLElBQUUsRUFBRSxTQUFPLElBQUUsRUFBRSxDQUFDLElBQUU7QUFBRyxRQUFFLEVBQUUsU0FBTyxJQUFFLEVBQUUsQ0FBQyxJQUFFLEVBQUUsQ0FBQztBQUFFLFFBQUcsS0FBSyxVQUFRLEVBQUUsUUFBTyxLQUFLLE1BQU0sSUFBSSxDQUFDLEVBQUUsT0FBTyxDQUFDO0FBQUUsUUFBRyxHQUFFO0FBQUMsYUFBTyxNQUFJLGFBQVcsSUFBRSxLQUFLLE1BQU0sQ0FBQztBQUFHLFVBQUcsRUFBRSxRQUFPLEtBQUssTUFBTSxJQUFJLENBQUMsRUFBRSxPQUFPLEdBQUUsQ0FBQztBQUFFLGNBQU8sR0FBRTtBQUFBLFFBQUMsS0FBSztBQUFNLGVBQUssYUFBVztBQUFHLGVBQUssTUFBSSxHQUFHLEdBQUUsS0FBSyxHQUFHO0FBQUUsbUJBQVEsSUFBRSxHQUFFLEdBQUUsSUFBRSxLQUFLLE1BQU0sUUFBTyxJQUFJLEtBQUUsS0FBSyxNQUFNLElBQUksS0FBSyxNQUFNLENBQUMsQ0FBQyxHQUFFLEVBQUUsYUFBVyxPQUFHLEVBQUUsTUFBSSxLQUFLO0FBQUksY0FBRyxLQUFLLFFBQU87QUFBQyxnQkFBRSxDQUFDO0FBQUUsdUJBQVUsS0FBSyxLQUFLLE1BQU0sT0FBTyxFQUFFLEdBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQUUsbUJBQU8sUUFBUSxJQUFJLENBQUM7QUFBQSxVQUFDO0FBQUM7QUFBQSxRQUN6Z0IsS0FBSztBQUFNLGVBQUssTUFBSSxHQUFHLEdBQUUsS0FBSyxHQUFHO0FBQUU7QUFBQSxRQUFNLEtBQUs7QUFBTSxlQUFLLFFBQU0sR0FBRyxHQUFFLEtBQUssS0FBSztBQUFBLE1BQUM7QUFBQSxJQUFDO0FBQUEsRUFBQztBQUFDLFdBQVMsR0FBRyxHQUFFLEdBQUU7QUFBQyxRQUFJLElBQUU7QUFBRyxlQUFVLEtBQUssRUFBRSxRQUFRLEdBQUU7QUFBQyxVQUFFLEVBQUUsQ0FBQztBQUFFLFlBQU0sSUFBRSxFQUFFLENBQUM7QUFBRSxVQUFJLElBQUU7QUFBRyxlQUFRLElBQUUsR0FBRSxHQUFFLElBQUUsRUFBRSxRQUFPLEtBQUk7QUFBQyxZQUFFLEVBQUUsQ0FBQyxLQUFHLENBQUMsRUFBRTtBQUFFLFlBQUksSUFBRTtBQUFHLGlCQUFRLElBQUUsR0FBRSxJQUFFLEVBQUUsUUFBTyxJQUFJLE9BQUksSUFBRSxNQUFJLE9BQUssTUFBSSxXQUFTLE1BQUksRUFBRSxDQUFDLElBQUUsTUFBSSxFQUFFLENBQUM7QUFBRyxZQUFFLE1BQUksSUFBRTtBQUFJLGNBQUksSUFBRSxNQUFJLE1BQUk7QUFBQSxNQUFDO0FBQUMsVUFBRSxPQUFLLElBQUUsUUFBTSxJQUFFO0FBQUssWUFBSSxJQUFFLE1BQUksTUFBSTtBQUFBLElBQUM7QUFBQyxXQUFPO0FBQUEsRUFBQztBQUFFLElBQUUsVUFBVSxTQUFPLFNBQVMsR0FBRSxHQUFFO0FBQUMsVUFBTSxJQUFFLEtBQUssSUFBSSxTQUFPLEtBQUssYUFBVyxLQUFLLElBQUksSUFBSSxDQUFDLElBQUUsS0FBSyxJQUFJLElBQUksQ0FBQztBQUFHLFFBQUcsR0FBRTtBQUFDLFVBQUcsS0FBSyxXQUFXLFVBQVEsSUFBRSxHQUFFLEdBQUUsR0FBRSxJQUFFLEVBQUUsUUFBTyxLQUFJO0FBQUMsYUFBSSxJQUFFLEVBQUUsQ0FBQyxPQUFLLElBQUUsRUFBRSxRQUFRLEtBQUcsRUFBRSxJQUFFLENBQUMsTUFBSSxFQUFFLEdBQUUsSUFBSTtBQUFBLGFBQU07QUFBQyxnQkFBTSxJQUFFLEVBQUUsUUFBUSxDQUFDO0FBQUUsZUFBRyxLQUFHLEVBQUUsT0FBTyxHQUFFLENBQUM7QUFBQSxRQUFDO0FBQUEsTUFBQztBQUFBLFVBQU0sSUFBRyxLQUFLLEtBQUksQ0FBQyxHQUFFLEtBQUssU0FBTyxHQUFHLEtBQUssS0FBSSxDQUFDO0FBQUUsV0FBRyxLQUFLLElBQUksT0FBTyxDQUFDO0FBQUEsSUFBQztBQUFDLFNBQUssT0FBSyxLQUFLLFlBQVksS0FBSyxFQUFDLEtBQUksRUFBQyxDQUFDLEdBQUUsS0FBSyxLQUFHLEdBQUcsSUFBSTtBQUFHLFNBQUssU0FBTyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBQUUsV0FBTztBQUFBLEVBQUk7QUFDN3hCLFdBQVMsR0FBRyxHQUFFLEdBQUU7QUFBQyxRQUFJLElBQUU7QUFBRSxRQUFJLElBQUUsT0FBTyxNQUFJO0FBQVksUUFBRyxFQUFFLGdCQUFjLE1BQU0sVUFBUSxJQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsSUFBRSxFQUFFLFFBQU8sS0FBSTtBQUFDLFdBQUksSUFBRSxFQUFFLENBQUMsTUFBSSxFQUFFLFFBQU87QUFBQyxZQUFHLEVBQUUsUUFBTztBQUFFLFlBQUUsRUFBRSxRQUFRLENBQUM7QUFBRSxZQUFHLEtBQUcsR0FBRTtBQUFDLGNBQUcsRUFBRSxTQUFPLEVBQUUsUUFBTyxFQUFFLE9BQU8sR0FBRSxDQUFDLEdBQUU7QUFBRSxpQkFBTyxFQUFFLENBQUM7QUFBRSxjQUFHLEVBQUUsUUFBTztBQUFFLGNBQUU7QUFBQSxRQUFDLE9BQUs7QUFBQyxjQUFHLEVBQUUsUUFBTztBQUFFO0FBQUEsUUFBRztBQUFBLE1BQUM7QUFBQSxJQUFDO0FBQUEsUUFBTSxVQUFRLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBRSxFQUFFLENBQUMsR0FBRSxHQUFHLEVBQUUsQ0FBQyxHQUFFLENBQUMsSUFBRSxNQUFJLEVBQUUsT0FBTyxDQUFDO0FBQUUsV0FBTztBQUFBLEVBQUM7QUFBRSxNQUFNLEtBQUcsRUFBQyxRQUFPLEVBQUMsWUFBVyxFQUFDLEdBQUUsYUFBWSxFQUFDLFlBQVcsR0FBRSxZQUFXLE1BQUcsU0FBUSxFQUFDLE9BQU0sR0FBRSxZQUFXLEVBQUMsRUFBQyxHQUFFLE9BQU0sRUFBQyxVQUFTLFVBQVMsR0FBRSxPQUFNLEVBQUMsWUFBVyxHQUFFLFNBQVEsRUFBQyxPQUFNLEdBQUUsWUFBVyxFQUFDLEVBQUMsRUFBQztBQUFFLElBQUUsVUFBVSxNQUFJLFNBQVMsR0FBRSxHQUFFLEdBQUUsR0FBRTtBQUFDLFFBQUcsTUFBSSxLQUFHLE1BQUksSUFBRztBQUFDLFVBQUcsQ0FBQyxLQUFHLENBQUMsS0FBRyxLQUFLLElBQUksSUFBSSxDQUFDLEVBQUUsUUFBTyxLQUFLLE9BQU8sR0FBRSxDQUFDO0FBQUUsVUFBRSxLQUFLO0FBQU0sVUFBRSxLQUFLLFFBQVEsT0FBTyxHQUFFLENBQUMsQ0FBQztBQUFFLFlBQU0sSUFBRSxFQUFFO0FBQU8sVUFBRyxHQUFFO0FBQUMsY0FBTSxJQUFFLEVBQUUsR0FBRSxJQUFFLEVBQUUsR0FBRSxJQUFFLEtBQUs7QUFBVyxpQkFBUSxJQUFFLEdBQUUsSUFBRSxHQUFFLEtBQUk7QUFBQyxjQUFJLElBQUUsRUFBRSxLQUFLLE1BQUksSUFBRSxJQUFFLElBQUUsQ0FBQztBQUFFLGNBQUksSUFBRSxFQUFFO0FBQU8sY0FBRyxNQUFJLEtBQUcsQ0FBQyxFQUFFLENBQUMsSUFBRztBQUFDLGdCQUFJLElBQUUsS0FBSyxRQUFNLEtBQUssTUFBTSxHQUFFLEdBQUUsR0FBRSxNQUFLLENBQUMsSUFBRSxHQUFHLEdBQUUsR0FBRSxDQUFDLEdBQUUsSUFBRTtBQUFHLG9CQUFPLEtBQUssVUFBUztBQUFBLGNBQUMsS0FBSztBQUFXLGtCQUFFLE1BQUssR0FBRSxHQUFFLEdBQUUsR0FBRSxDQUFDO0FBQUUsb0JBQUcsSUFBRSxHQUFFO0FBQUMsMkJBQVEsSUFBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsSUFBRSxJQUFFLEdBQUUsSUFBSSxLQUFFLEVBQUUsT0FBTyxDQUFDLEdBQUUsSUFBRSxFQUFFLE9BQU8sSUFBRSxDQUFDLEdBQUUsSUFBRSxFQUFFLFVBQVUsR0FBRSxDQUFDLElBQUUsR0FBRSxJQUFFLEVBQUUsVUFBVSxJQUMvL0IsQ0FBQyxHQUFFLElBQUUsSUFBRSxJQUFFLEdBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRSxHQUFFLEdBQUUsQ0FBQyxHQUFFLElBQUUsSUFBRSxHQUFFLEVBQUUsTUFBSyxHQUFFLEdBQUUsR0FBRSxHQUFFLENBQUM7QUFBRSxvQkFBRSxNQUFLLEdBQUUsRUFBRSxVQUFVLEdBQUUsRUFBRSxTQUFPLENBQUMsR0FBRSxHQUFFLEdBQUUsQ0FBQztBQUFBLGdCQUFDO0FBQUM7QUFBQSxjQUFNLEtBQUs7QUFBTyxvQkFBRyxJQUFFLEdBQUU7QUFBQywyQkFBUSxJQUFFLEdBQUUsR0FBRSxJQUFFLEdBQUUsSUFBSSxNQUFJLElBQUUsR0FBRSxJQUFFLEdBQUUsS0FBSTtBQUFDLHdCQUFFLEVBQUUsVUFBVSxHQUFFLENBQUM7QUFBRSx3QkFBRSxLQUFLLE1BQUksSUFBRSxJQUFFLElBQUU7QUFBRSx3QkFBSSxJQUFFLEtBQUssUUFBTSxLQUFLLE1BQU0sR0FBRSxHQUFFLEdBQUUsR0FBRSxDQUFDLElBQUUsR0FBRyxHQUFFLEdBQUUsR0FBRSxHQUFFLENBQUM7QUFBRSxzQkFBRSxNQUFLLEdBQUUsR0FBRSxHQUFFLEdBQUUsQ0FBQztBQUFBLGtCQUFDO0FBQUM7QUFBQSxnQkFBSztBQUFBLGNBQUMsS0FBSztBQUFBLGNBQWdCLEtBQUs7QUFBVSxvQkFBRyxJQUFFLEdBQUU7QUFBQyx1QkFBSSxJQUFFLElBQUUsR0FBRSxJQUFFLEdBQUUsS0FBSTtBQUFDLHdCQUFFLEVBQUUsS0FBSyxNQUFJLElBQUUsSUFBRSxJQUFFLENBQUMsSUFBRTtBQUFFLHdCQUFJLElBQUUsS0FBSyxRQUFNLEtBQUssTUFBTSxHQUFFLEdBQUUsR0FBRSxHQUFFLENBQUMsSUFBRSxHQUFHLEdBQUUsR0FBRSxHQUFFLEdBQUUsQ0FBQztBQUFFLHNCQUFFLE1BQUssR0FBRSxHQUFFLEdBQUUsR0FBRSxDQUFDO0FBQUEsa0JBQUM7QUFBQyxzQkFBRTtBQUFBLGdCQUFFO0FBQUEsY0FBQyxLQUFLO0FBQVUsb0JBQUcsSUFBRSxHQUFFO0FBQUMsdUJBQUksSUFBRSxHQUFFLElBQUUsR0FBRSxJQUFJLE1BQUcsRUFBRSxLQUFLLE1BQUksSUFBRSxJQUFFLElBQUUsQ0FBQyxHQUFFO0FBQUEsb0JBQUU7QUFBQSxvQkFDdGY7QUFBQSxvQkFBRTtBQUFBLG9CQUFFO0FBQUEsb0JBQUU7QUFBQSxvQkFBRTtBQUFBLGtCQUFDO0FBQUU7QUFBQSxnQkFBSztBQUFBLGNBQUM7QUFBUSxvQkFBRyxFQUFFLE1BQUssR0FBRSxHQUFFLEdBQUUsR0FBRSxDQUFDLEdBQUUsS0FBRyxJQUFFLEtBQUcsSUFBRSxJQUFFLEVBQUUsTUFBSSxJQUFFLEtBQUssR0FBRSxJQUFFLEdBQUUsSUFBRSxLQUFLLElBQUksSUFBRSxHQUFFLEtBQUssTUFBSSxJQUFFLElBQUUsSUFBRSxDQUFDLEdBQUUsSUFBRSxHQUFFLElBQUUsR0FBRSxLQUFJO0FBQUMsc0JBQUUsRUFBRSxLQUFLLE1BQUksSUFBRSxJQUFFLElBQUUsSUFBRSxJQUFFLENBQUM7QUFBRSxzQkFBRSxLQUFLLGlCQUFlLElBQUU7QUFBRSx3QkFBTSxJQUFFLEtBQUssUUFBTSxLQUFLLE1BQU0sR0FBRSxHQUFFLEdBQUUsR0FBRSxJQUFFLENBQUMsSUFBRSxHQUFHLEtBQUcsSUFBRSxJQUFFLElBQUUsSUFBRSxJQUFHLEdBQUUsR0FBRSxJQUFFLEdBQUUsSUFBRSxDQUFDO0FBQUUsb0JBQUUsTUFBSyxHQUFFLElBQUUsSUFBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLElBQUUsSUFBRSxDQUFDO0FBQUEsZ0JBQUM7QUFBQSxZQUFDO0FBQUEsVUFBQztBQUFBLFFBQUM7QUFBQyxhQUFLLGNBQVksS0FBSyxJQUFJLElBQUksQ0FBQztBQUFBLE1BQUM7QUFBQSxJQUFDO0FBQUMsU0FBSyxPQUFLLEtBQUssWUFBWSxLQUFLLElBQUUsRUFBQyxLQUFJLEVBQUMsSUFBRSxFQUFDLEtBQUksRUFBQyxDQUFDLEdBQUUsS0FBSyxLQUFHLEdBQUcsSUFBSTtBQUFHLFdBQU87QUFBQSxFQUFJO0FBQ3pZLFdBQVMsRUFBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFO0FBQUMsUUFBSSxHQUFFO0FBQUUsUUFBRyxFQUFFLElBQUUsRUFBRSxDQUFDLE1BQUksS0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFFO0FBQUMsV0FBRyxJQUFFLE1BQUksRUFBRSxDQUFDLElBQUUsRUFBRSxJQUFHLEVBQUUsQ0FBQyxJQUFFLEdBQUUsSUFBRSxFQUFFLE1BQUssSUFBRSxFQUFFLElBQUksQ0FBQyxLQUFHLElBQUUsSUFBRSxFQUFFLElBQUksR0FBRSxJQUFFLEVBQUUsV0FBUyxJQUFJLEVBQUUsRUFBRSxRQUFRLElBQUUsb0JBQUksS0FBRyxNQUFJLElBQUUsRUFBRSxLQUFJLEVBQUUsQ0FBQyxJQUFFO0FBQUcsT0FBQyxJQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUcsSUFBRSxJQUFFLEVBQUUsSUFBSSxHQUFFLElBQUUsSUFBRSxDQUFDLENBQUM7QUFBRSxVQUFHO0FBQUUsaUJBQVEsSUFBRSxHQUFFLEdBQUUsSUFBRSxFQUFFLFFBQU8sSUFBSSxNQUFJLElBQUUsRUFBRSxDQUFDLE1BQUksRUFBRSxTQUFTLENBQUMsR0FBRTtBQUFDLGNBQUcsS0FBRyxFQUFFO0FBQU8sWUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDLEdBQUUsQ0FBQztBQUFFLFlBQUUsZUFBYSxJQUFFLEVBQUUsSUFBSSxJQUFJLENBQUMsTUFBSSxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUMsR0FBRSxDQUFDO0FBQUU7QUFBQSxRQUFLO0FBQUE7QUFBQyxVQUFFLEVBQUUsQ0FBQyxNQUFJLEVBQUUsQ0FBQyxJQUFFLENBQUM7QUFBRyxRQUFFLEtBQUssQ0FBQztBQUFFLFVBQUcsRUFBRSxXQUFTLFNBQUcsTUFBRyxHQUFFO0FBQUMsWUFBRSxJQUFJLEdBQUcsQ0FBQztBQUFFLFlBQUcsRUFBRSxXQUFXLFVBQVEsS0FBSyxFQUFFLElBQUksT0FBTyxFQUFFLEdBQUUsU0FBUyxDQUFDLE1BQUksRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDLElBQzlmO0FBQUcsVUFBRSxDQUFDLElBQUUsSUFBRTtBQUFBLE1BQUM7QUFBQyxRQUFFLGdCQUFjLElBQUUsRUFBRSxJQUFJLElBQUksQ0FBQyxLQUFHLEVBQUUsS0FBSyxDQUFDLElBQUUsRUFBRSxJQUFJLElBQUksR0FBRSxDQUFDLENBQUMsQ0FBQztBQUFBLElBQUU7QUFBQSxFQUFDO0FBQUMsV0FBUyxHQUFHLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRTtBQUFDLFdBQU8sS0FBRyxJQUFFLElBQUUsS0FBRyxLQUFHLE1BQUksSUFBRSxLQUFHLEtBQUcsTUFBSSxJQUFFLE1BQUksS0FBRyxLQUFHLE9BQUssS0FBRyxLQUFHLE1BQUksSUFBRSxJQUFFO0FBQUEsRUFBQztBQUFFLElBQUUsVUFBVSxTQUFPLFNBQVMsR0FBRSxHQUFFLEdBQUU7QUFBQyxVQUFJLEtBQUcsT0FBTyxNQUFJLFdBQVMsT0FBTyxNQUFJLGFBQVcsSUFBRSxHQUFFLElBQUUsTUFBSSxJQUFFLEdBQUUsSUFBRTtBQUFLLFFBQUcsS0FBRyxFQUFFLE1BQU0sUUFBTyxFQUFFLFFBQU0sT0FBRyxJQUFFLEtBQUssWUFBWSxHQUFFLEdBQUUsQ0FBQyxHQUFFLEVBQUUsUUFBTSxNQUFHO0FBQUUsUUFBSSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUUsR0FBRSxJQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRTtBQUFFLFVBQUksSUFBRSxFQUFFLFNBQU8sR0FBRSxJQUFFLEVBQUUsU0FBTyxHQUFFLElBQUUsRUFBRSxVQUFRLEdBQUUsSUFBRSxFQUFFLFNBQVEsSUFBRSxFQUFFLFNBQVEsS0FBRyxJQUFFLEVBQUUsWUFBVSxFQUFFLFFBQU8sSUFBRSxFQUFFLE9BQU0sSUFBRSxF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QUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxHQUFFLElBQUk7QUFBRSxXQUFPLElBQUUsSUFBRSxJQUFJLEVBQUUsR0FBRSxJQUFJO0FBQUEsRUFBQztBQUM3VixXQUFTLEdBQUcsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRTtBQUFDLFFBQUUsR0FBRyxNQUFLLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLENBQUM7QUFBRSxXQUFPLEtBQUssS0FBRyxFQUFFLEtBQUssU0FBUyxHQUFFO0FBQUMsYUFBTyxJQUFFLEtBQUcsQ0FBQyxJQUFFLElBQUksRUFBRSxHQUFFLElBQUk7QUFBQSxJQUFDLENBQUMsSUFBRSxLQUFHLEVBQUUsU0FBTyxJQUFFLEdBQUcsS0FBSyxNQUFLLEdBQUUsR0FBRSxDQUFDLElBQUUsSUFBSSxFQUFFLEdBQUUsSUFBSSxJQUFFLElBQUUsQ0FBQyxJQUFFLElBQUksRUFBRSxDQUFDLEdBQUUsSUFBSTtBQUFBLEVBQUM7QUFBQyxXQUFTLEdBQUcsR0FBRSxHQUFFLEdBQUUsR0FBRTtBQUFDLFFBQUksSUFBRSxDQUFDO0FBQUUsUUFBRyxLQUFHLEVBQUUsUUFBTztBQUFDLFVBQUcsRUFBRSxVQUFRLEdBQUU7QUFBQyxVQUFFLEtBQUssQ0FBQztBQUFFO0FBQUEsTUFBTTtBQUFDLGVBQVEsSUFBRSxHQUFFLEdBQUUsSUFBRSxHQUFFLElBQUksS0FBRyxJQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUUsQ0FBQyxJQUFFO0FBQUUsVUFBRyxFQUFFLFFBQU87QUFBQyxVQUFFLEtBQUssQ0FBQztBQUFFO0FBQUEsTUFBTTtBQUFBLElBQUM7QUFBQyxRQUFHLENBQUMsRUFBRSxRQUFPO0FBQUEsRUFBQztBQUM1VixXQUFTLEdBQUcsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFO0FBQUMsUUFBSTtBQUFFLFVBQUksSUFBRSxFQUFFLGlCQUFlLElBQUUsT0FBSyxJQUFFLEdBQUUsSUFBRSxHQUFFLElBQUU7QUFBRyxRQUFHLEVBQUUsR0FBRyxRQUFP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SSxNQUFNO0FBQUUsU0FBSyxJQUFJLE1BQU07QUFBRSxTQUFLLElBQUksTUFBTTtBQUFFLFNBQUssU0FBTyxLQUFLLE1BQU0sTUFBTTtBQUFFLFdBQU8sS0FBSyxNQUFJLEtBQUssZ0JBQWMsYUFBYSxLQUFLLFlBQVksR0FBRSxLQUFLLGVBQWEsTUFBSyxLQUFLLGNBQVksQ0FBQyxHQUFFLEtBQUssR0FBRyxNQUFNLEtBQUc7QUFBQSxFQUFJO0FBQUUsSUFBRSxTQUFPLFNBQVMsR0FBRSxHQUFFO0FBQUMsV0FBTyxLQUFLLElBQUksR0FBRSxHQUFFLElBQUU7QUFBQSxFQUFDO0FBQUUsSUFBRSxVQUFRLFNBQVMsR0FBRTtBQUFDLFdBQU8sS0FBSyxLQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBRSxLQUFLLElBQUksSUFBSSxDQUFDO0FBQUEsRUFBQztBQUFFLElBQUUsU0FBTyxTQUFTLEdBQUUsR0FBRTtBQUFDLFVBQU0sSUFBRSxNQUFLLElBQUUsS0FBSyxPQUFPLENBQUM7QUFBRSxXQUFPLEtBQUcsRUFBRSxPQUFLLEVBQUUsS0FBSyxNQUFJLEVBQUUsSUFBSSxHQUFFLENBQUMsQ0FBQyxJQUFFLEtBQUssSUFBSSxHQUFFLENBQUM7QUFBQSxFQUFDO0FBQ3pjLElBQUUsVUFBUSxXQUFVO0FBQUMsUUFBRyxDQUFDLEtBQUssV0FBVyxRQUFPO0FBQUssT0FBRyxLQUFLLEdBQUc7QUFBRSxTQUFLLFNBQU8sR0FBRyxLQUFLLEdBQUc7QUFBRSxXQUFPO0FBQUEsRUFBSTtBQUFFLElBQUUsY0FBWTtBQUFHLElBQUUsU0FBTyxTQUFTLEdBQUUsR0FBRSxJQUFFLEdBQUUsSUFBRSxHQUFFO0FBQUMsUUFBSSxHQUFFO0FBQUUsWUFBTyxHQUFFO0FBQUEsTUFBQyxLQUFLO0FBQUUsWUFBRTtBQUFNLFlBQUUsR0FBRyxLQUFLLEdBQUc7QUFBRTtBQUFBLE1BQU0sS0FBSztBQUFFLFlBQUU7QUFBTSxZQUFFO0FBQUs7QUFBQSxNQUFNLEtBQUs7QUFBRSxZQUFFO0FBQU0sWUFBRSxHQUFHLEtBQUssS0FBSSxL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QztBQUFBLEVBQUM7QUFBRSxJQUFFLFFBQU0sV0FBVTtBQUFDLFVBQU0sSUFBRSxDQUFDO0FBQUUsYUFBUSxJQUFFLEdBQUUsR0FBRSxJQUFFLEdBQUcsUUFBTyxLQUFJO0FBQUMsVUFBRSxHQUFHLENBQUM7QUFBRSxlQUFRLElBQUUsR0FBRSxHQUFFLElBQUUsR0FBRyxLQUFLLEVBQUUsRUFBRSxRQUFPLElBQUksS0FBRSxHQUFHLEtBQUssRUFBRSxFQUFFLENBQUMsR0FBRSxFQUFFLEtBQUssS0FBRyxNQUFJLFFBQU0sSUFBRSxNQUFJLElBQUUsS0FBRyxHQUFHO0FBQUEsSUFBQztBQUFDLFVBQU0sSUFBRSxLQUFLLEdBQUcsWUFBWSxHQUFFLFdBQVc7QUFBRSxhQUFRLElBQUUsR0FBRSxJQUFFLEVBQUUsUUFBTyxJQUFJLEdBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQyxFQUFFLE1BQU07QUFBRSxXQUFPLEVBQUUsQ0FBQztBQUFBLEVBQUM7QUFDN1ksSUFBRSxNQUFJLFNBQVMsR0FBRSxHQUFFLElBQUUsR0FBRSxJQUFFLEdBQUUsSUFBRSxNQUFHLElBQUUsT0FBRztBQUFDLFFBQUUsS0FBSyxHQUFHLGFBQWEsSUFBRSxRQUFNLFVBQVEsS0FBSyxRQUFNLE1BQUksS0FBSyxRQUFNLEtBQUksVUFBVSxFQUFFLGFBQWEsSUFBRSxRQUFNLFVBQVEsS0FBSyxRQUFNLE1BQUksS0FBSyxRQUFNLEdBQUcsRUFBRSxJQUFJLElBQUUsSUFBRSxNQUFJLElBQUUsQ0FBQztBQUFFLFVBQU0sSUFBRTtBQUFLLFdBQU8sRUFBRSxDQUFDLEVBQUUsS0FBSyxTQUFTLEdBQUU7QUFBQyxVQUFJLElBQUUsQ0FBQztBQUFFLFVBQUcsQ0FBQyxLQUFHLENBQUMsRUFBRSxPQUFPLFFBQU87QUFBRSxVQUFHLEdBQUU7QUFBQyxZQUFHLENBQUMsS0FBRyxDQUFDLEtBQUcsRUFBRSxXQUFTLEVBQUUsUUFBTyxFQUFFLENBQUM7QUFBRSxpQkFBUSxJQUFFLEdBQUUsR0FBRSxJQUFFLEVBQUUsUUFBTyxJQUFJLE1BQUksSUFBRSxFQUFFLENBQUMsTUFBSSxFQUFFLFFBQU87QUFBQyxjQUFHLEtBQUcsRUFBRSxRQUFPO0FBQUMsaUJBQUcsRUFBRTtBQUFPO0FBQUEsVUFBUTtBQUFDLGdCQUFNLElBQUUsSUFBRSxJQUFFLEtBQUssSUFBSSxFQUFFLFNBQU8sR0FBRSxDQUFDLElBQUUsRUFBRTtBQUFPLG1CQUFRLElBQUUsR0FBRSxJQUFFLEdBQUUsSUFBSSxHQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7QUFBRSxjQUFFO0FBQUUsY0FBRyxFQUFFLFdBQVMsRUFBRTtBQUFBLFFBQUs7QUFBQyxlQUFPLElBQ2xnQixFQUFFLE9BQU8sQ0FBQyxJQUFFO0FBQUEsTUFBQztBQUFDLGFBQU87QUFBQSxJQUFDLENBQUM7QUFBQSxFQUFDO0FBQUUsSUFBRSxNQUFJLFNBQVMsR0FBRSxJQUFFLEdBQUUsSUFBRSxHQUFFLElBQUUsT0FBRztBQUFDLFFBQUUsS0FBSyxHQUFHLFlBQVksU0FBTyxLQUFLLFFBQU0sTUFBSSxLQUFLLFFBQU0sS0FBSSxVQUFVLEVBQUUsWUFBWSxTQUFPLEtBQUssUUFBTSxNQUFJLEtBQUssUUFBTSxHQUFHLEVBQUUsSUFBSSxDQUFDO0FBQUUsVUFBTSxJQUFFO0FBQUssV0FBTyxFQUFFLENBQUMsRUFBRSxLQUFLLFNBQVMsR0FBRTtBQUFDLFVBQUcsQ0FBQyxLQUFHLENBQUMsRUFBRSxVQUFRLEtBQUcsRUFBRSxPQUFPLFFBQU0sQ0FBQztBQUFFLFVBQUcsQ0FBQyxLQUFHLENBQUMsRUFBRSxRQUFPO0FBQUUsVUFBRSxFQUFFLE1BQU0sR0FBRSxJQUFFLENBQUM7QUFBRSxhQUFPLElBQUUsRUFBRSxPQUFPLENBQUMsSUFBRTtBQUFBLElBQUMsQ0FBQztBQUFBLEVBQUM7QUFDdFUsSUFBRSxTQUFPLFNBQVMsR0FBRTtBQUFDLFdBQU8sTUFBSSxhQUFXLElBQUUsQ0FBQyxDQUFDO0FBQUcsVUFBTSxJQUFFLEtBQUssR0FBRyxZQUFZLE9BQU0sVUFBVSxFQUFFLFlBQVksS0FBSyxHQUFFLElBQUUsQ0FBQztBQUFFLGFBQVEsSUFBRSxHQUFFLElBQUUsRUFBRSxRQUFPLElBQUksR0FBRSxDQUFDLElBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztBQUFFLFdBQU8sUUFBUSxJQUFJLENBQUMsRUFBRSxLQUFLLFNBQVMsR0FBRTtBQUFDLGVBQVEsSUFBRSxHQUFFLElBQUUsRUFBRSxRQUFPLElBQUksR0FBRSxDQUFDLElBQUUsRUFBQyxJQUFHLEVBQUUsQ0FBQyxHQUFFLEtBQUksRUFBRSxDQUFDLElBQUUsS0FBSyxNQUFNLEVBQUUsQ0FBQyxDQUFDLElBQUUsS0FBSTtBQUFFLGFBQU87QUFBQSxJQUFDLENBQUM7QUFBQSxFQUFDO0FBQUUsSUFBRSxNQUFJLFNBQVMsR0FBRTtBQUFDLFFBQUUsS0FBSyxHQUFHLFlBQVksT0FBTSxVQUFVLEVBQUUsWUFBWSxLQUFLLEVBQUUsT0FBTyxDQUFDO0FBQUUsV0FBTyxFQUFFLENBQUMsRUFBRSxLQUFLLFNBQVMsR0FBRTtBQUFDLGFBQU0sQ0FBQyxDQUFDO0FBQUEsSUFBQyxDQUFDO0FBQUEsRUFBQztBQUFFLElBQUUsU0FBTztBQUFLLElBQUUsT0FBSyxXQUFVO0FBQUEsRUFBQztBQUNwYyxJQUFFLGNBQVksU0FBUyxHQUFFLEdBQUUsR0FBRTtBQUFDLFNBQUcsTUFBSSxRQUFNLEtBQUssUUFBTSxNQUFJLEtBQUssUUFBTSxLQUFHO0FBQUcsUUFBSSxJQUFFLEtBQUssRUFBRSxJQUFFLE1BQUksQ0FBQztBQUFFLFFBQUcsRUFBRSxRQUFPLEVBQUUsS0FBSyxNQUFLLENBQUM7QUFBRSxRQUFJLElBQUUsS0FBSyxHQUFHLFlBQVksR0FBRSxDQUFDO0FBQUUsU0FBSyxFQUFFLElBQUUsTUFBSSxDQUFDLElBQUUsSUFBRSxFQUFFLFlBQVksQ0FBQztBQUFFLFVBQU0sSUFBRSxFQUFFLEtBQUssTUFBSyxDQUFDO0FBQUUsU0FBSyxFQUFFLElBQUUsTUFBSSxDQUFDLElBQUU7QUFBSyxXQUFPLEVBQUUsQ0FBQyxFQUFFLFFBQVEsV0FBVTtBQUFDLFVBQUUsSUFBRTtBQUFL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LFNBQVMsR0FBRTtBQUFDLG1CQUFVLEtBQUssRUFBRSxJQUFJLEtBQUssRUFBRSxHQUFFLElBQUksR0FBRSxDQUFDO0FBQUEsTUFBQyxDQUFDLElBQUUsRUFBRSxRQUFLLE1BQU0sS0FBSyxZQUFZLE9BQU0sYUFBWSxTQUFTLEdBQUU7QUFBQyxtQkFBVSxLQUFLLEVBQUUsS0FBSTtBQUFDLGdCQUFNLElBQUUsRUFBRSxDQUFDLEdBQUUsSUFBRSxFQUFFLENBQUM7QUFBRSxZQUFFLFdBQVMsRUFBRSxJQUFJLENBQUMsRUFBRSxZQUFVLFdBQVU7QUFBQyxnQkFBSSxJQUFFLEtBQUs7QUFBTyxnQkFBRSxLQUFHLEVBQUUsU0FBTyxFQUFFLE9BQU8sQ0FBQyxJQUFFO0FBQUUsY0FBRSxJQUFJLEdBQUUsQ0FBQztBQUFBLFVBQUM7QUFBQSxRQUFFO0FBQUEsTUFBQyxDQUFDLElBQUUsRUFBRSxJQUFJLE1BQU0sR0FBRSxFQUFFLElBQUksTUFBTSxHQUFFLEVBQUUsT0FBSyxFQUFFLElBQUksTUFBTSxHQUFFLEVBQUUsU0FBTyxFQUFFLE1BQU0sTUFBTSxHQUFFLEVBQUUsWUFDN2UsRUFBRSxJQUFJLE1BQU07QUFBQSxJQUFFO0FBQUE7QUFBRSxXQUFTLEdBQUcsR0FBRSxHQUFFLEdBQUU7QUFBQyxVQUFNLElBQUUsRUFBRTtBQUFNLFFBQUksR0FBRSxJQUFFO0FBQUUsYUFBUSxJQUFFLEdBQUUsR0FBRSxJQUFFLEVBQUUsUUFBTyxLQUFJO0FBQUMsVUFBRyxJQUFFLElBQUUsSUFBRSxFQUFFLENBQUMsR0FBRTtBQUFDLGlCQUFRLElBQUUsR0FBRSxHQUFFLEdBQUUsSUFBRSxFQUFFLFFBQU8sSUFBSSxLQUFHLElBQUUsRUFBRSxDQUFDLEdBQUUsSUFBRSxFQUFFLFFBQVEsQ0FBQyxHQUFFLEtBQUcsRUFBRSxLQUFHLElBQUUsR0FBRSxFQUFFLFNBQU8sRUFBRSxHQUFFLE9BQU8sR0FBRSxDQUFDO0FBQUEsYUFBTTtBQUFDLFlBQUUsQ0FBQyxJQUFFLENBQUM7QUFBRTtBQUFBLFFBQUs7QUFBQyxhQUFHLEVB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
