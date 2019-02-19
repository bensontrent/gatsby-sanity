/*! jQuery v1.8.2 jquery.com | jquery.org/license */
/* eslint-disable */
;(function(a, b) {
  function G(a) {
    var b = (F[a] = {})
    return (
      p.each(a.split(s), function(a, c) {

        b[c] = !0
      }),
      b
    )
  }
  function J(a, c, d) {
    if (d === b && a.nodeType === 1) {
      var e = 'data-' + c.replace(I, '-$1').toLowerCase()
      d = a.getAttribute(e)
      if (typeof d == 'string') {
        try {
          d =
            d === 'true'
              ? !0
              : d === 'false'
              ? !1
              : d === 'null'
              ? null
              : +d + '' === d
              ? +d
              : H.test(d)
              ? p.parseJSON(d)
              : d
        } catch (f) {}
        p.data(a, c, d)
      } else d = b
    }
    return d
  }
  function K(a) {
    var b
    for (b in a) {
      if (b === 'data' && p.isEmptyObject(a[b])) continue
      if (b !== 'toJSON') return !1
    }
    return !0
  }
  function ba() {
    return !1
  }
  function bb() {
    return !0
  }
  function bh(a) {
    return !a || !a.parentNode || a.parentNode.nodeType === 11
  }
  function bi(a, b) {
    do a = a[b]
    while (a && a.nodeType !== 1)
    return a
  }
  function bj(a, b, c) {
    b = b || 0
    if (p.isFunction(b))
      return p.grep(a, function(a, d) {
        var e = !!b.call(a, d, a)
        return e === c
      })
    if (b.nodeType)
      return p.grep(a, function(a, d) {
        return (a === b) === c
      })
    if (typeof b == 'string') {
      var d = p.grep(a, function(a) {
        return a.nodeType === 1
      })
      if (be.test(b)) return p.filter(b, d, !c)
      b = p.filter(b, d)
    }
    return p.grep(a, function(a, d) {
      return p.inArray(a, b) >= 0 === c
    })
  }
  function bk(a) {
    var b = bl.split('|'),
      c = a.createDocumentFragment()
    if (c.createElement) while (b.length) c.createElement(b.pop())
    return c
  }
  function bC(a, b) {
    return a.getElementsByTagName(b)[0] || a.appendChild(a.ownerDocument.createElement(b))
  }
  function bD(a, b) {
    if (b.nodeType !== 1 || !p.hasData(a)) return
    var c,
      d,
      e,
      f = p._data(a),
      g = p._data(b, f),
      h = f.events
    if (h) {
      delete g.handle, (g.events = {})
      for (c in h) for (d = 0, e = h[c].length; d < e; d++) p.event.add(b, c, h[c][d])
    }
    g.data && (g.data = p.extend({}, g.data))
  }
  function bE(a, b) {
    var c
    if (b.nodeType !== 1) return
    b.clearAttributes && b.clearAttributes(),
      b.mergeAttributes && b.mergeAttributes(a),
      (c = b.nodeName.toLowerCase()),
      c === 'object'
        ? (b.parentNode && (b.outerHTML = a.outerHTML),
          p.support.html5Clone &&
            a.innerHTML &&
            !p.trim(b.innerHTML) &&
            (b.innerHTML = a.innerHTML))
        : c === 'input' && bv.test(a.type)
        ? ((b.defaultChecked = b.checked = a.checked), b.value !== a.value && (b.value = a.value))
        : c === 'option'
        ? (b.selected = a.defaultSelected)
        : c === 'input' || c === 'textarea'
        ? (b.defaultValue = a.defaultValue)
        : c === 'script' && b.text !== a.text && (b.text = a.text),
      b.removeAttribute(p.expando)
  }
  function bF(a) {
    return typeof a.getElementsByTagName != 'undefined'
      ? a.getElementsByTagName('*')
      : typeof a.querySelectorAll != 'undefined'
      ? a.querySelectorAll('*')
      : []
  }
  function bG(a) {
    bv.test(a.type) && (a.defaultChecked = a.checked)
  }
  function bY(a, b) {
    if (b in a) return b
    var c = b.charAt(0).toUpperCase() + b.slice(1),
      d = b,
      e = bW.length
    while (e--) {
      b = bW[e] + c
      if (b in a) return b
    }
    return d
  }
  function bZ(a, b) {
    return (a = b || a), p.css(a, 'display') === 'none' || !p.contains(a.ownerDocument, a)
  }
  function b$(a, b) {
    var c,
      d,
      e = [],
      f = 0,
      g = a.length
    for (; f < g; f++) {
      c = a[f]
      if (!c.style) continue
      ;(e[f] = p._data(c, 'olddisplay')),
        b
          ? (!e[f] && c.style.display === 'none' && (c.style.display = ''),
            c.style.display === '' && bZ(c) && (e[f] = p._data(c, 'olddisplay', cc(c.nodeName))))
          : ((d = bH(c, 'display')), !e[f] && d !== 'none' && p._data(c, 'olddisplay', d))
    }
    for (f = 0; f < g; f++) {
      c = a[f]
      if (!c.style) continue
      if (!b || c.style.display === 'none' || c.style.display === '')
        c.style.display = b ? e[f] || '' : 'none'
    }
    return a
  }
  function b_(a, b, c) {
    var d = bP.exec(b)
    return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || 'px') : b
  }
  function ca(a, b, c, d) {
    var e = c === (d ? 'border' : 'content') ? 4 : b === 'width' ? 1 : 0,
      f = 0
    for (; e < 4; e += 2)
      c === 'margin' && (f += p.css(a, c + bV[e], !0)),
        d
          ? (c === 'content' && (f -= parseFloat(bH(a, 'padding' + bV[e])) || 0),
            c !== 'margin' && (f -= parseFloat(bH(a, 'border' + bV[e] + 'Width')) || 0))
          : ((f += parseFloat(bH(a, 'padding' + bV[e])) || 0),
            c !== 'padding' && (f += parseFloat(bH(a, 'border' + bV[e] + 'Width')) || 0))
    return f
  }
  function cb(a, b, c) {
    var d = b === 'width' ? a.offsetWidth : a.offsetHeight,
      e = !0,
      f = p.support.boxSizing && p.css(a, 'boxSizing') === 'border-box'
    if (d <= 0 || d == null) {
      d = bH(a, b)
      if (d < 0 || d == null) d = a.style[b]
      if (bQ.test(d)) return d
      ;(e = f && (p.support.boxSizingReliable || d === a.style[b])), (d = parseFloat(d) || 0)
    }
    return d + ca(a, b, c || (f ? 'border' : 'content'), e) + 'px'
  }
  function cc(a) {
    if (bS[a]) return bS[a]
    var b = p('<' + a + '>').appendTo(e.body),
      c = b.css('display')
    b.remove()
    if (c === 'none' || c === '') {
      bI = e.body.appendChild(
        bI || p.extend(e.createElement('iframe'), { frameBorder: 0, width: 0, height: 0 })
      )
      if (!bJ || !bI.createElement)
        (bJ = (bI.contentWindow || bI.contentDocument).document),
          bJ.write('<!doctype html><html><body>'),
          bJ.close()
      ;(b = bJ.body.appendChild(bJ.createElement(a))),
        (c = bH(b, 'display')),
        e.body.removeChild(bI)
    }
    return (bS[a] = c), c
  }
  function ci(a, b, c, d) {
    var e
    if (p.isArray(b))
      p.each(b, function(b, e) {
        c || ce.test(a) ? d(a, e) : ci(a + '[' + (typeof e == 'object' ? b : '') + ']', e, c, d)
      })
    else if (!c && p.type(b) === 'object') for (e in b) ci(a + '[' + e + ']', b[e], c, d)
    else d(a, b)
  }
  function cz(a) {
    return function(b, c) {
      typeof b != 'string' && ((c = b), (b = '*'))
      var d,
        e,
        f,
        g = b.toLowerCase().split(s),
        h = 0,
        i = g.length
      if (p.isFunction(c))
        for (; h < i; h++)
          (d = g[h]),
            (f = /^\+/.test(d)),
            f && (d = d.substr(1) || '*'),
            (e = a[d] = a[d] || []),
            e[f ? 'unshift' : 'push'](c)
    }
  }
  function cA(a, c, d, e, f, g) {
    ;(f = f || c.dataTypes[0]), (g = g || {}), (g[f] = !0)
    var h,
      i = a[f],
      j = 0,
      k = i ? i.length : 0,
      l = a === cv
    for (; j < k && (l || !h); j++)
      (h = i[j](c, d, e)),
        typeof h == 'string' &&
          (!l || g[h] ? (h = b) : (c.dataTypes.unshift(h), (h = cA(a, c, d, e, h, g))))
    return (l || !h) && !g['*'] && (h = cA(a, c, d, e, '*', g)), h
  }
  function cB(a, c) {
    var d,
      e,
      f = p.ajaxSettings.flatOptions || {}
    for (d in c) c[d] !== b && ((f[d] ? a : e || (e = {}))[d] = c[d])
    e && p.extend(!0, a, e)
  }
  function cC(a, c, d) {
    var e,
      f,
      g,
      h,
      i = a.contents,
      j = a.dataTypes,
      k = a.responseFields
    for (f in k) f in d && (c[k[f]] = d[f])
    while (j[0] === '*')
      j.shift(), e === b && (e = a.mimeType || c.getResponseHeader('content-type'))
    if (e)
      for (f in i)
        if (i[f] && i[f].test(e)) {
          j.unshift(f)
          break
        }
    if (j[0] in d) g = j[0]
    else {
      for (f in d) {
        if (!j[0] || a.converters[f + ' ' + j[0]]) {
          g = f
          break
        }
        h || (h = f)
      }
      g = g || h
    }
    if (g) return g !== j[0] && j.unshift(g), d[g]
  }
  function cD(a, b) {
    var c,
      d,
      e,
      f,
      g = a.dataTypes.slice(),
      h = g[0],
      i = {},
      j = 0
    a.dataFilter && (b = a.dataFilter(b, a.dataType))
    if (g[1]) for (c in a.converters) i[c.toLowerCase()] = a.converters[c]
    for (; (e = g[++j]); )
      if (e !== '*') {
        if (h !== '*' && h !== e) {
          c = i[h + ' ' + e] || i['* ' + e]
          if (!c)
            for (d in i) {
              f = d.split(' ')
              if (f[1] === e) {
                c = i[h + ' ' + f[0]] || i['* ' + f[0]]
                if (c) {
                  c === !0 ? (c = i[d]) : i[d] !== !0 && ((e = f[0]), g.splice(j--, 0, e))
                  break
                }
              }
            }
          if (c !== !0)
            if (c && a['throws']) b = c(b)
            else
              try {
                b = c(b)
              } catch (k) {
                return {
                  state: 'parsererror',
                  error: c ? k : 'No conversion from ' + h + ' to ' + e
                }
              }
        }
        h = e
      }
    return { state: 'success', data: b }
  }
  function cL() {
    try {
      return new a.XMLHttpRequest()
    } catch (b) {}
  }
  function cM() {
    try {
      return new a.ActiveXObject('Microsoft.XMLHTTP')
    } catch (b) {}
  }
  function cU() {
    return (
      setTimeout(function() {
        cN = b
      }, 0),
      (cN = p.now())
    )
  }
  function cV(a, b) {
    p.each(b, function(b, c) {
      var d = (cT[b] || []).concat(cT['*']),
        e = 0,
        f = d.length
      for (; e < f; e++) if (d[e].call(a, b, c)) return
    })
  }
  function cW(a, b, c) {
    var d,
      e = 0,
      f = 0,
      g = cS.length,
      h = p.Deferred().always(function() {
        delete i.elem
      }),
      i = function() {
        var b = cN || cU(),
          c = Math.max(0, j.startTime + j.duration - b),
          d = 1 - (c / j.duration || 0),
          e = 0,
          f = j.tweens.length
        for (; e < f; e++) j.tweens[e].run(d)
        return h.notifyWith(a, [j, d, c]), d < 1 && f ? c : (h.resolveWith(a, [j]), !1)
      },
      j = h.promise({
        elem: a,
        props: p.extend({}, b),
        opts: p.extend(!0, { specialEasing: {} }, c),
        originalProperties: b,
        originalOptions: c,
        startTime: cN || cU(),
        duration: c.duration,
        tweens: [],
        createTween: function(b, c, d) {
          var e = p.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing)
          return j.tweens.push(e), e
        },
        stop: function(b) {
          var c = 0,
            d = b ? j.tweens.length : 0
          for (; c < d; c++) j.tweens[c].run(1)
          return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
        }
      }),
      k = j.props
    cX(k, j.opts.specialEasing)
    for (; e < g; e++) {
      d = cS[e].call(j, a, k, j.opts)
      if (d) return d
    }
    return (
      cV(j, k),
      p.isFunction(j.opts.start) && j.opts.start.call(a, j),
      p.fx.timer(p.extend(i, { anim: j, queue: j.opts.queue, elem: a })),
      j
        .progress(j.opts.progress)
        .done(j.opts.done, j.opts.complete)
        .fail(j.opts.fail)
        .always(j.opts.always)
    )
  }
  function cX(a, b) {
    var c, d, e, f, g
    for (c in a) {
      ;(d = p.camelCase(c)),
        (e = b[d]),
        (f = a[c]),
        p.isArray(f) && ((e = f[1]), (f = a[c] = f[0])),
        c !== d && ((a[d] = f), delete a[c]),
        (g = p.cssHooks[d])
      if (g && 'expand' in g) {
        ;(f = g.expand(f)), delete a[d]
        for (c in f) c in a || ((a[c] = f[c]), (b[c] = e))
      } else b[d] = e
    }
  }
  function cY(a, b, c) {
    var d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l = this,
      m = a.style,
      n = {},
      o = [],
      q = a.nodeType && bZ(a)
    c.queue ||
      ((j = p._queueHooks(a, 'fx')),
      j.unqueued == null &&
        ((j.unqueued = 0),
        (k = j.empty.fire),
        (j.empty.fire = function() {
          j.unqueued || k()
        })),
      j.unqueued++,
      l.always(function() {
        l.always(function() {
          j.unqueued--, p.queue(a, 'fx').length || j.empty.fire()
        })
      })),
      a.nodeType === 1 &&
        ('height' in b || 'width' in b) &&
        ((c.overflow = [m.overflow, m.overflowX, m.overflowY]),
        p.css(a, 'display') === 'inline' &&
          p.css(a, 'float') === 'none' &&
          (!p.support.inlineBlockNeedsLayout || cc(a.nodeName) === 'inline'
            ? (m.display = 'inline-block')
            : (m.zoom = 1))),
      c.overflow &&
        ((m.overflow = 'hidden'),
        p.support.shrinkWrapBlocks ||
          l.done(function() {
            ;(m.overflow = c.overflow[0]),
              (m.overflowX = c.overflow[1]),
              (m.overflowY = c.overflow[2])
          }))
    for (d in b) {
      f = b[d]
      if (cP.exec(f)) {
        delete b[d]
        if (f === (q ? 'hide' : 'show')) continue
        o.push(d)
      }
    }
    g = o.length
    if (g) {
      ;(h = p._data(a, 'fxshow') || p._data(a, 'fxshow', {})),
        q
          ? p(a).show()
          : l.done(function() {
              p(a).hide()
            }),
        l.done(function() {
          var b
          p.removeData(a, 'fxshow', !0)
          for (b in n) p.style(a, b, n[b])
        })
      for (d = 0; d < g; d++)
        (e = o[d]),
          (i = l.createTween(e, q ? h[e] : 0)),
          (n[e] = h[e] || p.style(a, e)),
          e in h ||
            ((h[e] = i.start),
            q && ((i.end = i.start), (i.start = e === 'width' || e === 'height' ? 1 : 0)))
    }
  }
  function cZ(a, b, c, d, e) {
    return new cZ.prototype.init(a, b, c, d, e)
  }
  function c$(a, b) {
    var c,
      d = { height: a },
      e = 0
    b = b ? 1 : 0
    for (; e < 4; e += 2 - b) (c = bV[e]), (d['margin' + c] = d['padding' + c] = a)
    return b && (d.opacity = d.width = a), d
  }
  function da(a) {
    return p.isWindow(a) ? a : a.nodeType === 9 ? a.defaultView || a.parentWindow : !1
  }
  var c,
    d,
    e = a.document,
    f = a.location,
    g = a.navigator,
    h = a.jQuery,
    i = a.$,
    j = Array.prototype.push,
    k = Array.prototype.slice,
    l = Array.prototype.indexOf,
    m = Object.prototype.toString,
    n = Object.prototype.hasOwnProperty,
    o = String.prototype.trim,
    p = function(a, b) {
      return new p.fn.init(a, b, c)
    },
    q = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
    r = /\S/,
    s = /\s+/,
    t = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    u = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
    v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    w = /^[\],:{}\s]*$/,
    x = /(?:^|:|,)(?:\s*\[)+/g,
    y = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
    z = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
    A = /^-ms-/,
    B = /-([\da-z])/gi,
    C = function(a, b) {
      return (b + '').toUpperCase()
    },
    D = function() {
      e.addEventListener
        ? (e.removeEventListener('DOMContentLoaded', D, !1), p.ready())
        : e.readyState === 'complete' && (e.detachEvent('onreadystatechange', D), p.ready())
    },
    E = {}
  ;(p.fn = p.prototype = {
    constructor: p,
    init: function(a, c, d) {
      var f, g, h, i
      if (!a) return this
      if (a.nodeType) return (this.context = this[0] = a), (this.length = 1), this
      if (typeof a == 'string') {
        a.charAt(0) === '<' && a.charAt(a.length - 1) === '>' && a.length >= 3
          ? (f = [null, a, null])
          : (f = u.exec(a))
        if (f && (f[1] || !c)) {
          if (f[1])
            return (
              (c = c instanceof p ? c[0] : c),
              (i = c && c.nodeType ? c.ownerDocument || c : e),
              (a = p.parseHTML(f[1], i, !0)),
              v.test(f[1]) && p.isPlainObject(c) && this.attr.call(a, c, !0),
              p.merge(this, a)
            )
          g = e.getElementById(f[2])
          if (g && g.parentNode) {
            if (g.id !== f[2]) return d.find(a)
            ;(this.length = 1), (this[0] = g)
          }
          return (this.context = e), (this.selector = a), this
        }
        return !c || c.jquery ? (c || d).find(a) : this.constructor(c).find(a)
      }
      return p.isFunction(a)
        ? d.ready(a)
        : (a.selector !== b && ((this.selector = a.selector), (this.context = a.context)),
          p.makeArray(a, this))
    },
    selector: '',
    jquery: '1.8.2',
    length: 0,
    size: function() {
      return this.length
    },
    toArray: function() {
      return k.call(this)
    },
    get: function(a) {
      return a == null ? this.toArray() : a < 0 ? this[this.length + a] : this[a]
    },
    pushStack: function(a, b, c) {
      var d = p.merge(this.constructor(), a)
      return (
        (d.prevObject = this),
        (d.context = this.context),
        b === 'find'
          ? (d.selector = this.selector + (this.selector ? ' ' : '') + c)
          : b && (d.selector = this.selector + '.' + b + '(' + c + ')'),
        d
      )
    },
    each: function(a, b) {
      return p.each(this, a, b)
    },
    ready: function(a) {
      return p.ready.promise().done(a), this
    },
    eq: function(a) {
      return (a = +a), a === -1 ? this.slice(a) : this.slice(a, a + 1)
    },
    first: function() {
      return this.eq(0)
    },
    last: function() {
      return this.eq(-1)
    },
    slice: function() {
      return this.pushStack(k.apply(this, arguments), 'slice', k.call(arguments).join(','))
    },
    map: function(a) {
      return this.pushStack(
        p.map(this, function(b, c) {
          return a.call(b, c, b)
        })
      )
    },
    end: function() {
      return this.prevObject || this.constructor(null)
    },
    push: j,
    sort: [].sort,
    splice: [].splice
  }),
    (p.fn.init.prototype = p.fn),
    (p.extend = p.fn.extend = function() {
      var a,
        c,
        d,
        e,
        f,
        g,
        h = arguments[0] || {},
        i = 1,
        j = arguments.length,
        k = !1
      typeof h == 'boolean' && ((k = h), (h = arguments[1] || {}), (i = 2)),
        typeof h != 'object' && !p.isFunction(h) && (h = {}),
        j === i && ((h = this), --i)
      for (; i < j; i++)
        if ((a = arguments[i]) != null)
          for (c in a) {
            ;(d = h[c]), (e = a[c])
            if (h === e) continue
            k && e && (p.isPlainObject(e) || (f = p.isArray(e)))
              ? (f
                  ? ((f = !1), (g = d && p.isArray(d) ? d : []))
                  : (g = d && p.isPlainObject(d) ? d : {}),
                (h[c] = p.extend(k, g, e)))
              : e !== b && (h[c] = e)
          }
      return h
    }),
    p.extend({
      noConflict: function(b) {
        return a.$ === p && (a.$ = i), b && a.jQuery === p && (a.jQuery = h), p
      },
      isReady: !1,
      readyWait: 1,
      holdReady: function(a) {
        a ? p.readyWait++ : p.ready(!0)
      },
      ready: function(a) {
        if (a === !0 ? --p.readyWait : p.isReady) return
        if (!e.body) return setTimeout(p.ready, 1)
        p.isReady = !0
        if (a !== !0 && --p.readyWait > 0) return
        d.resolveWith(e, [p]),
          p.fn.trigger &&
            p(e)
              .trigger('ready')
              .off('ready')
      },
      isFunction: function(a) {
        return p.type(a) === 'function'
      },
      isArray:
        Array.isArray ||
        function(a) {
          return p.type(a) === 'array'
        },
      isWindow: function(a) {
        return a != null && a == a.window
      },
      isNumeric: function(a) {
        return !isNaN(parseFloat(a)) && isFinite(a)
      },
      type: function(a) {
        return a == null ? String(a) : E[m.call(a)] || 'object'
      },
      isPlainObject: function(a) {
        if (!a || p.type(a) !== 'object' || a.nodeType || p.isWindow(a)) return !1
        try {
          if (
            a.constructor &&
            !n.call(a, 'constructor') &&
            !n.call(a.constructor.prototype, 'isPrototypeOf')
          )
            return !1
        } catch (c) {
          return !1
        }
        var d
        for (d in a);
        return d === b || n.call(a, d)
      },
      isEmptyObject: function(a) {
        var b
        for (b in a) return !1
        return !0
      },
      error: function(a) {
        throw new Error(a)
      },
      parseHTML: function(a, b, c) {
        var d
        return !a || typeof a != 'string'
          ? null
          : (typeof b == 'boolean' && ((c = b), (b = 0)),
            (b = b || e),
            (d = v.exec(a))
              ? [b.createElement(d[1])]
              : ((d = p.buildFragment([a], b, c ? null : [])),
                p.merge([], (d.cacheable ? p.clone(d.fragment) : d.fragment).childNodes)))
      },
      parseJSON: function(b) {
        if (!b || typeof b != 'string') return null
        b = p.trim(b)
        if (a.JSON && a.JSON.parse) return a.JSON.parse(b)
        if (
          w.test(
            b
              .replace(y, '@')
              .replace(z, ']')
              .replace(x, '')
          )
        )
          return new Function('return ' + b)()
        p.error('Invalid JSON: ' + b)
      },
      parseXML: function(c) {
        var d, e
        if (!c || typeof c != 'string') return null
        try {
          a.DOMParser
            ? ((e = new DOMParser()), (d = e.parseFromString(c, 'text/xml')))
            : ((d = new ActiveXObject('Microsoft.XMLDOM')), (d.async = 'false'), d.loadXML(c))
        } catch (f) {
          d = b
        }
        return (
          (!d || !d.documentElement || d.getElementsByTagName('parsererror').length) &&
            p.error('Invalid XML: ' + c),
          d
        )
      },
      noop: function() {},
      globalEval: function(b) {
        b &&
          r.test(b) &&
          (a.execScript ||
            function(b) {
              a.eval.call(a, b)
            })(b)
      },
      camelCase: function(a) {
        return a.replace(A, 'ms-').replace(B, C)
      },
      nodeName: function(a, b) {
        return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
      },
      each: function(a, c, d) {
        var e,
          f = 0,
          g = a.length,
          h = g === b || p.isFunction(a)
        if (d) {
          if (h) {
            for (e in a) if (c.apply(a[e], d) === !1) break
          } else for (; f < g; ) if (c.apply(a[f++], d) === !1) break
        } else if (h) {
          for (e in a) if (c.call(a[e], e, a[e]) === !1) break
        } else for (; f < g; ) if (c.call(a[f], f, a[f++]) === !1) break
        return a
      },
      trim:
        o && !o.call('﻿ ')
          ? function(a) {
              return a == null ? '' : o.call(a)
            }
          : function(a) {
              return a == null ? '' : (a + '').replace(t, '')
            },
      makeArray: function(a, b) {
        var c,
          d = b || []
        return (
          a != null &&
            ((c = p.type(a)),
            a.length == null ||
            c === 'string' ||
            c === 'function' ||
            c === 'regexp' ||
            p.isWindow(a)
              ? j.call(d, a)
              : p.merge(d, a)),
          d
        )
      },
      inArray: function(a, b, c) {
        var d
        if (b) {
          if (l) return l.call(b, a, c)
          ;(d = b.length), (c = c ? (c < 0 ? Math.max(0, d + c) : c) : 0)
          for (; c < d; c++) if (c in b && b[c] === a) return c
        }
        return -1
      },
      merge: function(a, c) {
        var d = c.length,
          e = a.length,
          f = 0
        if (typeof d == 'number') for (; f < d; f++) a[e++] = c[f]
        else while (c[f] !== b) a[e++] = c[f++]
        return (a.length = e), a
      },
      grep: function(a, b, c) {
        var d,
          e = [],
          f = 0,
          g = a.length
        c = !!c
        for (; f < g; f++) (d = !!b(a[f], f)), c !== d && e.push(a[f])
        return e
      },
      map: function(a, c, d) {
        var e,
          f,
          g = [],
          h = 0,
          i = a.length,
          j =
            a instanceof p ||
            (i !== b &&
              typeof i == 'number' &&
              ((i > 0 && a[0] && a[i - 1]) || i === 0 || p.isArray(a)))
        if (j) for (; h < i; h++) (e = c(a[h], h, d)), e != null && (g[g.length] = e)
        else for (f in a) (e = c(a[f], f, d)), e != null && (g[g.length] = e)
        return g.concat.apply([], g)
      },
      guid: 1,
      proxy: function(a, c) {
        var d, e, f
        return (
          typeof c == 'string' && ((d = a[c]), (c = a), (a = d)),
          p.isFunction(a)
            ? ((e = k.call(arguments, 2)),
              (f = function() {
                return a.apply(c, e.concat(k.call(arguments)))
              }),
              (f.guid = a.guid = a.guid || p.guid++),
              f)
            : b
        )
      },
      access: function(a, c, d, e, f, g, h) {
        var i,
          j = d == null,
          k = 0,
          l = a.length
        if (d && typeof d == 'object') {
          for (k in d) p.access(a, c, k, d[k], 1, g, e)
          f = 1
        } else if (e !== b) {
          ;(i = h === b && p.isFunction(e)),
            j &&
              (i
                ? ((i = c),
                  (c = function(a, b, c) {
                    return i.call(p(a), c)
                  }))
                : (c.call(a, e), (c = null)))
          if (c) for (; k < l; k++) c(a[k], d, i ? e.call(a[k], k, c(a[k], d)) : e, h)
          f = 1
        }
        return f ? a : j ? c.call(a) : l ? c(a[0], d) : g
      },
      now: function() {
        return new Date().getTime()
      }
    }),
    (p.ready.promise = function(b) {
      if (!d) {
        d = p.Deferred()
        if (e.readyState === 'complete') setTimeout(p.ready, 1)
        else if (e.addEventListener)
          e.addEventListener('DOMContentLoaded', D, !1), a.addEventListener('load', p.ready, !1)
        else {
          e.attachEvent('onreadystatechange', D), a.attachEvent('onload', p.ready)
          var c = !1
          try {
            c = a.frameElement == null && e.documentElement
          } catch (f) {}
          c &&
            c.doScroll &&
            (function g() {
              if (!p.isReady) {
                try {
                  c.doScroll('left')
                } catch (a) {
                  return setTimeout(g, 50)
                }
                p.ready()
              }
            })()
        }
      }
      return d.promise(b)
    }),
    p.each('Boolean Number String Function Array Date RegExp Object'.split(' '), function(a, b) {
      E['[object ' + b + ']'] = b.toLowerCase()
    }),
    (c = p(e))
  var F = {}
  ;(p.Callbacks = function(a) {
    a = typeof a == 'string' ? F[a] || G(a) : p.extend({}, a)
    var c,
      d,
      e,
      f,
      g,
      h,
      i = [],
      j = !a.once && [],
      k = function(b) {
        ;(c = a.memory && b), (d = !0), (h = f || 0), (f = 0), (g = i.length), (e = !0)
        for (; i && h < g; h++)
          if (i[h].apply(b[0], b[1]) === !1 && a.stopOnFalse) {
            c = !1
            break
          }
        ;(e = !1), i && (j ? j.length && k(j.shift()) : c ? (i = []) : l.disable())
      },
      l = {
        add: function() {
          if (i) {
            var b = i.length
            ;(function d(b) {
              p.each(b, function(b, c) {
                var e = p.type(c)
                e === 'function' && (!a.unique || !l.has(c))
                  ? i.push(c)
                  : c && c.length && e !== 'string' && d(c)
              })
            })(arguments),
              e ? (g = i.length) : c && ((f = b), k(c))
          }
          return this
        },
        remove: function() {
          return (
            i &&
              p.each(arguments, function(a, b) {
                var c
                while ((c = p.inArray(b, i, c)) > -1)
                  i.splice(c, 1), e && (c <= g && g--, c <= h && h--)
              }),
            this
          )
        },
        has: function(a) {
          return p.inArray(a, i) > -1
        },
        empty: function() {
          return (i = []), this
        },
        disable: function() {
          return (i = j = c = b), this
        },
        disabled: function() {
          return !i
        },
        lock: function() {
          return (j = b), c || l.disable(), this
        },
        locked: function() {
          return !j
        },
        fireWith: function(a, b) {
          return (
            (b = b || []),
            (b = [a, b.slice ? b.slice() : b]),
            i && (!d || j) && (e ? j.push(b) : k(b)),
            this
          )
        },
        fire: function() {
          return l.fireWith(this, arguments), this
        },
        fired: function() {
          return !!d
        }
      }
    return l
  }),
    p.extend({
      Deferred: function(a) {
        var b = [
            ['resolve', 'done', p.Callbacks('once memory'), 'resolved'],
            ['reject', 'fail', p.Callbacks('once memory'), 'rejected'],
            ['notify', 'progress', p.Callbacks('memory')]
          ],
          c = 'pending',
          d = {
            state: function() {
              return c
            },
            always: function() {
              return e.done(arguments).fail(arguments), this
            },
            then: function() {
              var a = arguments
              return p
                .Deferred(function(c) {
                  p.each(b, function(b, d) {
                    var f = d[0],
                      g = a[b]
                    e[d[1]](
                      p.isFunction(g)
                        ? function() {
                            var a = g.apply(this, arguments)
                            a && p.isFunction(a.promise)
                              ? a
                                  .promise()
                                  .done(c.resolve)
                                  .fail(c.reject)
                                  .progress(c.notify)
                              : c[f + 'With'](this === e ? c : this, [a])
                          }
                        : c[f]
                    )
                  }),
                    (a = null)
                })
                .promise()
            },
            promise: function(a) {
              return a != null ? p.extend(a, d) : d
            }
          },
          e = {}
        return (
          (d.pipe = d.then),
          p.each(b, function(a, f) {
            var g = f[2],
              h = f[3]
            ;(d[f[1]] = g.add),
              h &&
                g.add(
                  function() {
                    c = h
                  },
                  b[a ^ 1][2].disable,
                  b[2][2].lock
                ),
              (e[f[0]] = g.fire),
              (e[f[0] + 'With'] = g.fireWith)
          }),
          d.promise(e),
          a && a.call(e, e),
          e
        )
      },
      when: function(a) {
        var b = 0,
          c = k.call(arguments),
          d = c.length,
          e = d !== 1 || (a && p.isFunction(a.promise)) ? d : 0,
          f = e === 1 ? a : p.Deferred(),
          g = function(a, b, c) {
            return function(d) {
              ;(b[a] = this),
                (c[a] = arguments.length > 1 ? k.call(arguments) : d),
                c === h ? f.notifyWith(b, c) : --e || f.resolveWith(b, c)
            }
          },
          h,
          i,
          j
        if (d > 1) {
          ;(h = new Array(d)), (i = new Array(d)), (j = new Array(d))
          for (; b < d; b++)
            c[b] && p.isFunction(c[b].promise)
              ? c[b]
                  .promise()
                  .done(g(b, j, c))
                  .fail(f.reject)
                  .progress(g(b, i, h))
              : --e
        }
        return e || f.resolveWith(j, c), f.promise()
      }
    }),
    (p.support = (function() {
      var b,
        c,
        d,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n = e.createElement('div')
      n.setAttribute('className', 't'),
        (n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
        (c = n.getElementsByTagName('*')),
        (d = n.getElementsByTagName('a')[0]),
        (d.style.cssText = 'top:1px;float:left;opacity:.5')
      if (!c || !c.length) return {}
      ;(f = e.createElement('select')),
        (g = f.appendChild(e.createElement('option'))),
        (h = n.getElementsByTagName('input')[0]),
        (b = {
          leadingWhitespace: n.firstChild.nodeType === 3,
          tbody: !n.getElementsByTagName('tbody').length,
          htmlSerialize: !!n.getElementsByTagName('link').length,
          style: /top/.test(d.getAttribute('style')),
          hrefNormalized: d.getAttribute('href') === '/a',
          opacity: /^0.5/.test(d.style.opacity),
          cssFloat: !!d.style.cssFloat,
          checkOn: h.value === 'on',
          optSelected: g.selected,
          getSetAttribute: n.className !== 't',
          enctype: !!e.createElement('form').enctype,
          html5Clone: e.createElement('nav').cloneNode(!0).outerHTML !== '<:nav></:nav>',
          boxModel: e.compatMode === 'CSS1Compat',
          submitBubbles: !0,
          changeBubbles: !0,
          focusinBubbles: !1,
          deleteExpando: !0,
          noCloneEvent: !0,
          inlineBlockNeedsLayout: !1,
          shrinkWrapBlocks: !1,
          reliableMarginRight: !0,
          boxSizingReliable: !0,
          pixelPosition: !1
        }),
        (h.checked = !0),
        (b.noCloneChecked = h.cloneNode(!0).checked),
        (f.disabled = !0),
        (b.optDisabled = !g.disabled)
      try {
        delete n.test
      } catch (o) {
        b.deleteExpando = !1
      }
      !n.addEventListener &&
        n.attachEvent &&
        n.fireEvent &&
        (n.attachEvent(
          'onclick',
          (m = function() {
            b.noCloneEvent = !1
          })
        ),
        n.cloneNode(!0).fireEvent('onclick'),
        n.detachEvent('onclick', m)),
        (h = e.createElement('input')),
        (h.value = 't'),
        h.setAttribute('type', 'radio'),
        (b.radioValue = h.value === 't'),
        h.setAttribute('checked', 'checked'),
        h.setAttribute('name', 't'),
        n.appendChild(h),
        (i = e.createDocumentFragment()),
        i.appendChild(n.lastChild),
        (b.checkClone = i.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (b.appendChecked = h.checked),
        i.removeChild(h),
        i.appendChild(n)
      if (n.attachEvent)
        for (k in { submit: !0, change: !0, focusin: !0 })
          (j = 'on' + k),
            (l = j in n),
            l || (n.setAttribute(j, 'return;'), (l = typeof n[j] == 'function')),
            (b[k + 'Bubbles'] = l)
      return (
        p(function() {
          var c,
            d,
            f,
            g,
            h = 'padding:0;margin:0;border:0;display:block;overflow:hidden;',
            i = e.getElementsByTagName('body')[0]
          if (!i) return
          ;(c = e.createElement('div')),
            (c.style.cssText =
              'visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px'),
            i.insertBefore(c, i.firstChild),
            (d = e.createElement('div')),
            c.appendChild(d),
            (d.innerHTML = '<table><tr><td></td><td>t</td></tr></table>'),
            (f = d.getElementsByTagName('td')),
            (f[0].style.cssText = 'padding:0;margin:0;border:0;display:none'),
            (l = f[0].offsetHeight === 0),
            (f[0].style.display = ''),
            (f[1].style.display = 'none'),
            (b.reliableHiddenOffsets = l && f[0].offsetHeight === 0),
            (d.innerHTML = ''),
            (d.style.cssText =
              'box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;'),
            (b.boxSizing = d.offsetWidth === 4),
            (b.doesNotIncludeMarginInBodyOffset = i.offsetTop !== 1),
            a.getComputedStyle &&
              ((b.pixelPosition = (a.getComputedStyle(d, null) || {}).top !== '1%'),
              (b.boxSizingReliable =
                (a.getComputedStyle(d, null) || { width: '4px' }).width === '4px'),
              (g = e.createElement('div')),
              (g.style.cssText = d.style.cssText = h),
              (g.style.marginRight = g.style.width = '0'),
              (d.style.width = '1px'),
              d.appendChild(g),
              (b.reliableMarginRight = !parseFloat(
                (a.getComputedStyle(g, null) || {}).marginRight
              ))),
            typeof d.style.zoom != 'undefined' &&
              ((d.innerHTML = ''),
              (d.style.cssText = h + 'width:1px;padding:1px;display:inline;zoom:1'),
              (b.inlineBlockNeedsLayout = d.offsetWidth === 3),
              (d.style.display = 'block'),
              (d.style.overflow = 'visible'),
              (d.innerHTML = '<div></div>'),
              (d.firstChild.style.width = '5px'),
              (b.shrinkWrapBlocks = d.offsetWidth !== 3),
              (c.style.zoom = 1)),
            i.removeChild(c),
            (c = d = f = g = null)
        }),
        i.removeChild(n),
        (c = d = f = g = h = i = n = null),
        b
      )
    })())
  var H = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
    I = /([A-Z])/g
  p.extend({
    cache: {},
    deletedIds: [],
    uuid: 0,
    expando: 'jQuery' + (p.fn.jquery + Math.random()).replace(/\D/g, ''),
    noData: { embed: !0, object: 'clsid:D27CDB6E-AE6D-11cf-96B8-444553540000', applet: !0 },
    hasData: function(a) {
      return (a = a.nodeType ? p.cache[a[p.expando]] : a[p.expando]), !!a && !K(a)
    },
    data: function(a, c, d, e) {
      if (!p.acceptData(a)) return
      var f,
        g,
        h = p.expando,
        i = typeof c == 'string',
        j = a.nodeType,
        k = j ? p.cache : a,
        l = j ? a[h] : a[h] && h
      if ((!l || !k[l] || (!e && !k[l].data)) && i && d === b) return
      l || (j ? (a[h] = l = p.deletedIds.pop() || p.guid++) : (l = h)),
        k[l] || ((k[l] = {}), j || (k[l].toJSON = p.noop))
      if (typeof c == 'object' || typeof c == 'function')
        e ? (k[l] = p.extend(k[l], c)) : (k[l].data = p.extend(k[l].data, c))
      return (
        (f = k[l]),
        e || (f.data || (f.data = {}), (f = f.data)),
        d !== b && (f[p.camelCase(c)] = d),
        i ? ((g = f[c]), g == null && (g = f[p.camelCase(c)])) : (g = f),
        g
      )
    },
    removeData: function(a, b, c) {
      if (!p.acceptData(a)) return
      var d,
        e,
        f,
        g = a.nodeType,
        h = g ? p.cache : a,
        i = g ? a[p.expando] : p.expando
      if (!h[i]) return
      if (b) {
        d = c ? h[i] : h[i].data
        if (d) {
          p.isArray(b) ||
            (b in d ? (b = [b]) : ((b = p.camelCase(b)), b in d ? (b = [b]) : (b = b.split(' '))))
          for (e = 0, f = b.length; e < f; e++) delete d[b[e]]
          if (!(c ? K : p.isEmptyObject)(d)) return
        }
      }
      if (!c) {
        delete h[i].data
        if (!K(h[i])) return
      }
      g
        ? p.cleanData([a], !0)
        : p.support.deleteExpando || h != h.window
        ? delete h[i]
        : (h[i] = null)
    },
    _data: function(a, b, c) {
      return p.data(a, b, c, !0)
    },
    acceptData: function(a) {
      var b = a.nodeName && p.noData[a.nodeName.toLowerCase()]
      return !b || (b !== !0 && a.getAttribute('classid') === b)
    }
  }),
    p.fn.extend({
      data: function(a, c) {
        var d,
          e,
          f,
          g,
          h,
          i = this[0],
          j = 0,
          k = null
        if (a === b) {
          if (this.length) {
            k = p.data(i)
            if (i.nodeType === 1 && !p._data(i, 'parsedAttrs')) {
              f = i.attributes
              for (h = f.length; j < h; j++)
                (g = f[j].name),
                  g.indexOf('data-') || ((g = p.camelCase(g.substring(5))), J(i, g, k[g]))
              p._data(i, 'parsedAttrs', !0)
            }
          }
          return k
        }
        return typeof a == 'object'
          ? this.each(function() {
              p.data(this, a)
            })
          : ((d = a.split('.', 2)),
            (d[1] = d[1] ? '.' + d[1] : ''),
            (e = d[1] + '!'),
            p.access(
              this,
              function(c) {
                if (c === b)
                  return (
                    (k = this.triggerHandler('getData' + e, [d[0]])),
                    k === b && i && ((k = p.data(i, a)), (k = J(i, a, k))),
                    k === b && d[1] ? this.data(d[0]) : k
                  )
                ;(d[1] = c),
                  this.each(function() {
                    var b = p(this)
                    b.triggerHandler('setData' + e, d),
                      p.data(this, a, c),
                      b.triggerHandler('changeData' + e, d)
                  })
              },
              null,
              c,
              arguments.length > 1,
              null,
              !1
            ))
      },
      removeData: function(a) {
        return this.each(function() {
          p.removeData(this, a)
        })
      }
    }),
    p.extend({
      queue: function(a, b, c) {
        var d
        if (a)
          return (
            (b = (b || 'fx') + 'queue'),
            (d = p._data(a, b)),
            c && (!d || p.isArray(c) ? (d = p._data(a, b, p.makeArray(c))) : d.push(c)),
            d || []
          )
      },
      dequeue: function(a, b) {
        b = b || 'fx'
        var c = p.queue(a, b),
          d = c.length,
          e = c.shift(),
          f = p._queueHooks(a, b),
          g = function() {
            p.dequeue(a, b)
          }
        e === 'inprogress' && ((e = c.shift()), d--),
          e && (b === 'fx' && c.unshift('inprogress'), delete f.stop, e.call(a, g, f)),
          !d && f && f.empty.fire()
      },
      _queueHooks: function(a, b) {
        var c = b + 'queueHooks'
        return (
          p._data(a, c) ||
          p._data(a, c, {
            empty: p.Callbacks('once memory').add(function() {
              p.removeData(a, b + 'queue', !0), p.removeData(a, c, !0)
            })
          })
        )
      }
    }),
    p.fn.extend({
      queue: function(a, c) {
        var d = 2
        return (
          typeof a != 'string' && ((c = a), (a = 'fx'), d--),
          arguments.length < d
            ? p.queue(this[0], a)
            : c === b
            ? this
            : this.each(function() {
                var b = p.queue(this, a, c)
                p._queueHooks(this, a), a === 'fx' && b[0] !== 'inprogress' && p.dequeue(this, a)
              })
        )
      },
      dequeue: function(a) {
        return this.each(function() {
          p.dequeue(this, a)
        })
      },
      delay: function(a, b) {
        return (
          (a = p.fx ? p.fx.speeds[a] || a : a),
          (b = b || 'fx'),
          this.queue(b, function(b, c) {
            var d = setTimeout(b, a)
            c.stop = function() {
              clearTimeout(d)
            }
          })
        )
      },
      clearQueue: function(a) {
        return this.queue(a || 'fx', [])
      },
      promise: function(a, c) {
        var d,
          e = 1,
          f = p.Deferred(),
          g = this,
          h = this.length,
          i = function() {
            --e || f.resolveWith(g, [g])
          }
        typeof a != 'string' && ((c = a), (a = b)), (a = a || 'fx')
        while (h--) (d = p._data(g[h], a + 'queueHooks')), d && d.empty && (e++, d.empty.add(i))
        return i(), f.promise(c)
      }
    })
  var L,
    M,
    N,
    O = /[\t\r\n]/g,
    P = /\r/g,
    Q = /^(?:button|input)$/i,
    R = /^(?:button|input|object|select|textarea)$/i,
    S = /^a(?:rea|)$/i,
    T = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
    U = p.support.getSetAttribute
  p.fn.extend({
    attr: function(a, b) {
      return p.access(this, p.attr, a, b, arguments.length > 1)
    },
    removeAttr: function(a) {
      return this.each(function() {
        p.removeAttr(this, a)
      })
    },
    prop: function(a, b) {
      return p.access(this, p.prop, a, b, arguments.length > 1)
    },
    removeProp: function(a) {
      return (
        (a = p.propFix[a] || a),
        this.each(function() {
          try {
            ;(this[a] = b), delete this[a]
          } catch (c) {}
        })
      )
    },
    addClass: function(a) {
      var b, c, d, e, f, g, h
      if (p.isFunction(a))
        return this.each(function(b) {
          p(this).addClass(a.call(this, b, this.className))
        })
      if (a && typeof a == 'string') {
        b = a.split(s)
        for (c = 0, d = this.length; c < d; c++) {
          e = this[c]
          if (e.nodeType === 1)
            if (!e.className && b.length === 1) e.className = a
            else {
              f = ' ' + e.className + ' '
              for (g = 0, h = b.length; g < h; g++)
                f.indexOf(' ' + b[g] + ' ') < 0 && (f += b[g] + ' ')
              e.className = p.trim(f)
            }
        }
      }
      return this
    },
    removeClass: function(a) {
      var c, d, e, f, g, h, i
      if (p.isFunction(a))
        return this.each(function(b) {
          p(this).removeClass(a.call(this, b, this.className))
        })
      if ((a && typeof a == 'string') || a === b) {
        c = (a || '').split(s)
        for (h = 0, i = this.length; h < i; h++) {
          e = this[h]
          if (e.nodeType === 1 && e.className) {
            d = (' ' + e.className + ' ').replace(O, ' ')
            for (f = 0, g = c.length; f < g; f++)
              while (d.indexOf(' ' + c[f] + ' ') >= 0) d = d.replace(' ' + c[f] + ' ', ' ')
            e.className = a ? p.trim(d) : ''
          }
        }
      }
      return this
    },
    toggleClass: function(a, b) {
      var c = typeof a,
        d = typeof b == 'boolean'
      return p.isFunction(a)
        ? this.each(function(c) {
            p(this).toggleClass(a.call(this, c, this.className, b), b)
          })
        : this.each(function() {
            if (c === 'string') {
              var e,
                f = 0,
                g = p(this),
                h = b,
                i = a.split(s)
              while ((e = i[f++]))
                (h = d ? h : !g.hasClass(e)), g[h ? 'addClass' : 'removeClass'](e)
            } else if (c === 'undefined' || c === 'boolean') this.className && p._data(this, '__className__', this.className), (this.className = this.className || a === !1 ? '' : p._data(this, '__className__') || '')
          })
    },
    hasClass: function(a) {
      var b = ' ' + a + ' ',
        c = 0,
        d = this.length
      for (; c < d; c++)
        if (
          this[c].nodeType === 1 &&
          (' ' + this[c].className + ' ').replace(O, ' ').indexOf(b) >= 0
        )
          return !0
      return !1
    },
    val: function(a) {
      var c,
        d,
        e,
        f = this[0]
      if (!arguments.length) {
        if (f)
          return (
            (c = p.valHooks[f.type] || p.valHooks[f.nodeName.toLowerCase()]),
            c && 'get' in c && (d = c.get(f, 'value')) !== b
              ? d
              : ((d = f.value), typeof d == 'string' ? d.replace(P, '') : d == null ? '' : d)
          )
        return
      }
      return (
        (e = p.isFunction(a)),
        this.each(function(d) {
          var f,
            g = p(this)
          if (this.nodeType !== 1) return
          e ? (f = a.call(this, d, g.val())) : (f = a),
            f == null
              ? (f = '')
              : typeof f == 'number'
              ? (f += '')
              : p.isArray(f) &&
                (f = p.map(f, function(a) {
                  return a == null ? '' : a + ''
                })),
            (c = p.valHooks[this.type] || p.valHooks[this.nodeName.toLowerCase()])
          if (!c || !('set' in c) || c.set(this, f, 'value') === b) this.value = f
        })
      )
    }
  }),
    p.extend({
      valHooks: {
        option: {
          get: function(a) {
            var b = a.attributes.value
            return !b || b.specified ? a.value : a.text
          }
        },
        select: {
          get: function(a) {
            var b,
              c,
              d,
              e,
              f = a.selectedIndex,
              g = [],
              h = a.options,
              i = a.type === 'select-one'
            if (f < 0) return null
            ;(c = i ? f : 0), (d = i ? f + 1 : h.length)
            for (; c < d; c++) {
              e = h[c]
              if (
                e.selected &&
                (p.support.optDisabled ? !e.disabled : e.getAttribute('disabled') === null) &&
                (!e.parentNode.disabled || !p.nodeName(e.parentNode, 'optgroup'))
              ) {
                b = p(e).val()
                if (i) return b
                g.push(b)
              }
            }
            return i && !g.length && h.length ? p(h[f]).val() : g
          },
          set: function(a, b) {
            var c = p.makeArray(b)
            return (
              p(a)
                .find('option')
                .each(function() {
                  this.selected = p.inArray(p(this).val(), c) >= 0
                }),
              c.length || (a.selectedIndex = -1),
              c
            )
          }
        }
      },
      attrFn: {},
      attr: function(a, c, d, e) {
        var f,
          g,
          h,
          i = a.nodeType
        if (!a || i === 3 || i === 8 || i === 2) return
        if (e && p.isFunction(p.fn[c])) return p(a)[c](d)
        if (typeof a.getAttribute == 'undefined') return p.prop(a, c, d)
        ;(h = i !== 1 || !p.isXMLDoc(a)),
          h && ((c = c.toLowerCase()), (g = p.attrHooks[c] || (T.test(c) ? M : L)))
        if (d !== b) {
          if (d === null) {
            p.removeAttr(a, c)
            return
          }
          return g && 'set' in g && h && (f = g.set(a, d, c)) !== b
            ? f
            : (a.setAttribute(c, d + ''), d)
        }
        return g && 'get' in g && h && (f = g.get(a, c)) !== null
          ? f
          : ((f = a.getAttribute(c)), f === null ? b : f)
      },
      removeAttr: function(a, b) {
        var c,
          d,
          e,
          f,
          g = 0
        if (b && a.nodeType === 1) {
          d = b.split(s)
          for (; g < d.length; g++)
            (e = d[g]),
              e &&
                ((c = p.propFix[e] || e),
                (f = T.test(e)),
                f || p.attr(a, e, ''),
                a.removeAttribute(U ? e : c),
                f && c in a && (a[c] = !1))
        }
      },
      attrHooks: {
        type: {
          set: function(a, b) {
            if (Q.test(a.nodeName) && a.parentNode) p.error("type property can't be changed")
            else if (!p.support.radioValue && b === 'radio' && p.nodeName(a, 'input')) {
              var c = a.value
              return a.setAttribute('type', b), c && (a.value = c), b
            }
          }
        },
        value: {
          get: function(a, b) {
            return L && p.nodeName(a, 'button') ? L.get(a, b) : b in a ? a.value : null
          },
          set: function(a, b, c) {
            if (L && p.nodeName(a, 'button')) return L.set(a, b, c)
            a.value = b
          }
        }
      },
      propFix: {
        tabindex: 'tabIndex',
        readonly: 'readOnly',
        for: 'htmlFor',
        class: 'className',
        maxlength: 'maxLength',
        cellspacing: 'cellSpacing',
        cellpadding: 'cellPadding',
        rowspan: 'rowSpan',
        colspan: 'colSpan',
        usemap: 'useMap',
        frameborder: 'frameBorder',
        contenteditable: 'contentEditable'
      },
      prop: function(a, c, d) {
        var e,
          f,
          g,
          h = a.nodeType
        if (!a || h === 3 || h === 8 || h === 2) return
        return (
          (g = h !== 1 || !p.isXMLDoc(a)),
          g && ((c = p.propFix[c] || c), (f = p.propHooks[c])),
          d !== b
            ? f && 'set' in f && (e = f.set(a, d, c)) !== b
              ? e
              : (a[c] = d)
            : f && 'get' in f && (e = f.get(a, c)) !== null
            ? e
            : a[c]
        )
      },
      propHooks: {
        tabIndex: {
          get: function(a) {
            var c = a.getAttributeNode('tabindex')
            return c && c.specified
              ? parseInt(c.value, 10)
              : R.test(a.nodeName) || (S.test(a.nodeName) && a.href)
              ? 0
              : b
          }
        }
      }
    }),
    (M = {
      get: function(a, c) {
        var d,
          e = p.prop(a, c)
        return e === !0 ||
          (typeof e != 'boolean' && (d = a.getAttributeNode(c)) && d.nodeValue !== !1)
          ? c.toLowerCase()
          : b
      },
      set: function(a, b, c) {
        var d
        return (
          b === !1
            ? p.removeAttr(a, c)
            : ((d = p.propFix[c] || c), d in a && (a[d] = !0), a.setAttribute(c, c.toLowerCase())),
          c
        )
      }
    }),
    U ||
      ((N = { name: !0, id: !0, coords: !0 }),
      (L = p.valHooks.button = {
        get: function(a, c) {
          var d
          return (
            (d = a.getAttributeNode(c)), d && (N[c] ? d.value !== '' : d.specified) ? d.value : b
          )
        },
        set: function(a, b, c) {
          var d = a.getAttributeNode(c)
          return d || ((d = e.createAttribute(c)), a.setAttributeNode(d)), (d.value = b + '')
        }
      }),
      p.each(['width', 'height'], function(a, b) {
        p.attrHooks[b] = p.extend(p.attrHooks[b], {
          set: function(a, c) {
            if (c === '') return a.setAttribute(b, 'auto'), c
          }
        })
      }),
      (p.attrHooks.contenteditable = {
        get: L.get,
        set: function(a, b, c) {
          b === '' && (b = 'false'), L.set(a, b, c)
        }
      })),
    p.support.hrefNormalized ||
      p.each(['href', 'src', 'width', 'height'], function(a, c) {
        p.attrHooks[c] = p.extend(p.attrHooks[c], {
          get: function(a) {
            var d = a.getAttribute(c, 2)
            return d === null ? b : d
          }
        })
      }),
    p.support.style ||
      (p.attrHooks.style = {
        get: function(a) {
          return a.style.cssText.toLowerCase() || b
        },
        set: function(a, b) {
          return (a.style.cssText = b + '')
        }
      }),
    p.support.optSelected ||
      (p.propHooks.selected = p.extend(p.propHooks.selected, {
        get: function(a) {
          var b = a.parentNode
          return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        }
      })),
    p.support.enctype || (p.propFix.enctype = 'encoding'),
    p.support.checkOn ||
      p.each(['radio', 'checkbox'], function() {
        p.valHooks[this] = {
          get: function(a) {
            return a.getAttribute('value') === null ? 'on' : a.value
          }
        }
      }),
    p.each(['radio', 'checkbox'], function() {
      p.valHooks[this] = p.extend(p.valHooks[this], {
        set: function(a, b) {
          if (p.isArray(b)) return (a.checked = p.inArray(p(a).val(), b) >= 0)
        }
      })
    })
  var V = /^(?:textarea|input|select)$/i,
    W = /^([^\.]*|)(?:\.(.+)|)$/,
    X = /(?:^|\s)hover(\.\S+|)\b/,
    Y = /^key/,
    Z = /^(?:mouse|contextmenu)|click/,
    $ = /^(?:focusinfocus|focusoutblur)$/,
    _ = function(a) {
      return p.event.special.hover ? a : a.replace(X, 'mouseenter$1 mouseleave$1')
    }
  ;(p.event = {
    add: function(a, c, d, e, f) {
      var g, h, i, j, k, l, m, n, o, q, r
      if (a.nodeType === 3 || a.nodeType === 8 || !c || !d || !(g = p._data(a))) return
      d.handler && ((o = d), (d = o.handler), (f = o.selector)),
        d.guid || (d.guid = p.guid++),
        (i = g.events),
        i || (g.events = i = {}),
        (h = g.handle),
        h ||
          ((g.handle = h = function(a) {
            return typeof p != 'undefined' && (!a || p.event.triggered !== a.type)
              ? p.event.dispatch.apply(h.elem, arguments)
              : b
          }),
          (h.elem = a)),
        (c = p.trim(_(c)).split(' '))
      for (j = 0; j < c.length; j++) {
        ;(k = W.exec(c[j]) || []),
          (l = k[1]),
          (m = (k[2] || '').split('.').sort()),
          (r = p.event.special[l] || {}),
          (l = (f ? r.delegateType : r.bindType) || l),
          (r = p.event.special[l] || {}),
          (n = p.extend(
            {
              type: l,
              origType: k[1],
              data: e,
              handler: d,
              guid: d.guid,
              selector: f,
              needsContext: f && p.expr.match.needsContext.test(f),
              namespace: m.join('.')
            },
            o
          )),
          (q = i[l])
        if (!q) {
          ;(q = i[l] = []), (q.delegateCount = 0)
          if (!r.setup || r.setup.call(a, e, m, h) === !1)
            a.addEventListener
              ? a.addEventListener(l, h, !1)
              : a.attachEvent && a.attachEvent('on' + l, h)
        }
        r.add && (r.add.call(a, n), n.handler.guid || (n.handler.guid = d.guid)),
          f ? q.splice(q.delegateCount++, 0, n) : q.push(n),
          (p.event.global[l] = !0)
      }
      a = null
    },
    global: {},
    remove: function(a, b, c, d, e) {
      var f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        q,
        r = p.hasData(a) && p._data(a)
      if (!r || !(m = r.events)) return
      b = p.trim(_(b || '')).split(' ')
      for (f = 0; f < b.length; f++) {
        ;(g = W.exec(b[f]) || []), (h = i = g[1]), (j = g[2])
        if (!h) {
          for (h in m) p.event.remove(a, h + b[f], c, d, !0)
          continue
        }
        ;(n = p.event.special[h] || {}),
          (h = (d ? n.delegateType : n.bindType) || h),
          (o = m[h] || []),
          (k = o.length),
          (j = j
            ? new RegExp(
                '(^|\\.)' +
                  j
                    .split('.')
                    .sort()
                    .join('\\.(?:.*\\.|)') +
                  '(\\.|$)'
              )
            : null)
        for (l = 0; l < o.length; l++)
          (q = o[l]),
            (e || i === q.origType) &&
              (!c || c.guid === q.guid) &&
              (!j || j.test(q.namespace)) &&
              (!d || d === q.selector || (d === '**' && q.selector)) &&
              (o.splice(l--, 1), q.selector && o.delegateCount--, n.remove && n.remove.call(a, q))
        o.length === 0 &&
          k !== o.length &&
          ((!n.teardown || n.teardown.call(a, j, r.handle) === !1) && p.removeEvent(a, h, r.handle),
          delete m[h])
      }
      p.isEmptyObject(m) && (delete r.handle, p.removeData(a, 'events', !0))
    },
    customEvent: { getData: !0, setData: !0, changeData: !0 },
    trigger: function(c, d, f, g) {
      if (!f || (f.nodeType !== 3 && f.nodeType !== 8)) {
        var h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          q,
          r,
          s = c.type || c,
          t = []
        if ($.test(s + p.event.triggered)) return
        s.indexOf('!') >= 0 && ((s = s.slice(0, -1)), (i = !0)),
          s.indexOf('.') >= 0 && ((t = s.split('.')), (s = t.shift()), t.sort())
        if ((!f || p.event.customEvent[s]) && !p.event.global[s]) return
        ;(c = typeof c == 'object' ? (c[p.expando] ? c : new p.Event(s, c)) : new p.Event(s)),
          (c.type = s),
          (c.isTrigger = !0),
          (c.exclusive = i),
          (c.namespace = t.join('.')),
          (c.namespace_re = c.namespace
            ? new RegExp('(^|\\.)' + t.join('\\.(?:.*\\.|)') + '(\\.|$)')
            : null),
          (m = s.indexOf(':') < 0 ? 'on' + s : '')
        if (!f) {
          h = p.cache
          for (j in h) h[j].events && h[j].events[s] && p.event.trigger(c, d, h[j].handle.elem, !0)
          return
        }
        ;(c.result = b),
          c.target || (c.target = f),
          (d = d != null ? p.makeArray(d) : []),
          d.unshift(c),
          (n = p.event.special[s] || {})
        if (n.trigger && n.trigger.apply(f, d) === !1) return
        q = [[f, n.bindType || s]]
        if (!g && !n.noBubble && !p.isWindow(f)) {
          ;(r = n.delegateType || s), (k = $.test(r + s) ? f : f.parentNode)
          for (l = f; k; k = k.parentNode) q.push([k, r]), (l = k)
          l === (f.ownerDocument || e) && q.push([l.defaultView || l.parentWindow || a, r])
        }
        for (j = 0; j < q.length && !c.isPropagationStopped(); j++)
          (k = q[j][0]),
            (c.type = q[j][1]),
            (o = (p._data(k, 'events') || {})[c.type] && p._data(k, 'handle')),
            o && o.apply(k, d),
            (o = m && k[m]),
            o && p.acceptData(k) && o.apply && o.apply(k, d) === !1 && c.preventDefault()
        return (
          (c.type = s),
          !g &&
            !c.isDefaultPrevented() &&
            (!n._default || n._default.apply(f.ownerDocument, d) === !1) &&
            (s !== 'click' || !p.nodeName(f, 'a')) &&
            p.acceptData(f) &&
            m &&
            f[s] &&
            ((s !== 'focus' && s !== 'blur') || c.target.offsetWidth !== 0) &&
            !p.isWindow(f) &&
            ((l = f[m]),
            l && (f[m] = null),
            (p.event.triggered = s),
            f[s](),
            (p.event.triggered = b),
            l && (f[m] = l)),
          c.result
        )
      }
      return
    },
    dispatch: function(c) {
      c = p.event.fix(c || a.event)
      var d,
        e,
        f,
        g,
        h,
        i,
        j,
        l,
        m,
        n,
        o = (p._data(this, 'events') || {})[c.type] || [],
        q = o.delegateCount,
        r = k.call(arguments),
        s = !c.exclusive && !c.namespace,
        t = p.event.special[c.type] || {},
        u = []
      ;(r[0] = c), (c.delegateTarget = this)
      if (t.preDispatch && t.preDispatch.call(this, c) === !1) return
      if (q && (!c.button || c.type !== 'click'))
        for (f = c.target; f != this; f = f.parentNode || this)
          if (f.disabled !== !0 || c.type !== 'click') {
            ;(h = {}), (j = [])
            for (d = 0; d < q; d++)
              (l = o[d]),
                (m = l.selector),
                h[m] === b &&
                  (h[m] = l.needsContext
                    ? p(m, this).index(f) >= 0
                    : p.find(m, this, null, [f]).length),
                h[m] && j.push(l)
            j.length && u.push({ elem: f, matches: j })
          }
      o.length > q && u.push({ elem: this, matches: o.slice(q) })
      for (d = 0; d < u.length && !c.isPropagationStopped(); d++) {
        ;(i = u[d]), (c.currentTarget = i.elem)
        for (e = 0; e < i.matches.length && !c.isImmediatePropagationStopped(); e++) {
          l = i.matches[e]
          if (
            s ||
            (!c.namespace && !l.namespace) ||
            (c.namespace_re && c.namespace_re.test(l.namespace))
          )
            (c.data = l.data),
              (c.handleObj = l),
              (g = ((p.event.special[l.origType] || {}).handle || l.handler).apply(i.elem, r)),
              g !== b && ((c.result = g), g === !1 && (c.preventDefault(), c.stopPropagation()))
        }
      }
      return t.postDispatch && t.postDispatch.call(this, c), c.result
    },
    props: 'attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which'.split(
      ' '
    ),
    fixHooks: {},
    keyHooks: {
      props: 'char charCode key keyCode'.split(' '),
      filter: function(a, b) {
        return a.which == null && (a.which = b.charCode != null ? b.charCode : b.keyCode), a
      }
    },
    mouseHooks: {
      props: 'button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement'.split(
        ' '
      ),
      filter: function(a, c) {
        var d,
          f,
          g,
          h = c.button,
          i = c.fromElement
        return (
          a.pageX == null &&
            c.clientX != null &&
            ((d = a.target.ownerDocument || e),
            (f = d.documentElement),
            (g = d.body),
            (a.pageX =
              c.clientX +
              ((f && f.scrollLeft) || (g && g.scrollLeft) || 0) -
              ((f && f.clientLeft) || (g && g.clientLeft) || 0)),
            (a.pageY =
              c.clientY +
              ((f && f.scrollTop) || (g && g.scrollTop) || 0) -
              ((f && f.clientTop) || (g && g.clientTop) || 0))),
          !a.relatedTarget && i && (a.relatedTarget = i === a.target ? c.toElement : i),
          !a.which && h !== b && (a.which = h & 1 ? 1 : h & 2 ? 3 : h & 4 ? 2 : 0),
          a
        )
      }
    },
    fix: function(a) {
      if (a[p.expando]) return a
      var b,
        c,
        d = a,
        f = p.event.fixHooks[a.type] || {},
        g = f.props ? this.props.concat(f.props) : this.props
      a = p.Event(d)
      for (b = g.length; b; ) (c = g[--b]), (a[c] = d[c])
      return (
        a.target || (a.target = d.srcElement || e),
        a.target.nodeType === 3 && (a.target = a.target.parentNode),
        (a.metaKey = !!a.metaKey),
        f.filter ? f.filter(a, d) : a
      )
    },
    special: {
      load: { noBubble: !0 },
      focus: { delegateType: 'focusin' },
      blur: { delegateType: 'focusout' },
      beforeunload: {
        setup: function(a, b, c) {
          p.isWindow(this) && (this.onbeforeunload = c)
        },
        teardown: function(a, b) {
          this.onbeforeunload === b && (this.onbeforeunload = null)
        }
      }
    },
    simulate: function(a, b, c, d) {
      var e = p.extend(new p.Event(), c, { type: a, isSimulated: !0, originalEvent: {} })
      d ? p.event.trigger(e, null, b) : p.event.dispatch.call(b, e),
        e.isDefaultPrevented() && c.preventDefault()
    }
  }),
    (p.event.handle = p.event.dispatch),
    (p.removeEvent = e.removeEventListener
      ? function(a, b, c) {
          a.removeEventListener && a.removeEventListener(b, c, !1)
        }
      : function(a, b, c) {
          var d = 'on' + b
          a.detachEvent && (typeof a[d] == 'undefined' && (a[d] = null), a.detachEvent(d, c))
        }),
    (p.Event = function(a, b) {
      if (this instanceof p.Event)
        a && a.type
          ? ((this.originalEvent = a),
            (this.type = a.type),
            (this.isDefaultPrevented =
              a.defaultPrevented ||
              a.returnValue === !1 ||
              (a.getPreventDefault && a.getPreventDefault())
                ? bb
                : ba))
          : (this.type = a),
          b && p.extend(this, b),
          (this.timeStamp = (a && a.timeStamp) || p.now()),
          (this[p.expando] = !0)
      else return new p.Event(a, b)
    }),
    (p.Event.prototype = {
      preventDefault: function() {
        this.isDefaultPrevented = bb
        var a = this.originalEvent
        if (!a) return
        a.preventDefault ? a.preventDefault() : (a.returnValue = !1)
      },
      stopPropagation: function() {
        this.isPropagationStopped = bb
        var a = this.originalEvent
        if (!a) return
        a.stopPropagation && a.stopPropagation(), (a.cancelBubble = !0)
      },
      stopImmediatePropagation: function() {
        ;(this.isImmediatePropagationStopped = bb), this.stopPropagation()
      },
      isDefaultPrevented: ba,
      isPropagationStopped: ba,
      isImmediatePropagationStopped: ba
    }),
    p.each({ mouseenter: 'mouseover', mouseleave: 'mouseout' }, function(a, b) {
      p.event.special[a] = {
        delegateType: b,
        bindType: b,
        handle: function(a) {
          var c,
            d = this,
            e = a.relatedTarget,
            f = a.handleObj,
            g = f.selector
          if (!e || (e !== d && !p.contains(d, e)))
            (a.type = f.origType), (c = f.handler.apply(this, arguments)), (a.type = b)
          return c
        }
      }
    }),
    p.support.submitBubbles ||
      (p.event.special.submit = {
        setup: function() {
          if (p.nodeName(this, 'form')) return !1
          p.event.add(this, 'click._submit keypress._submit', function(a) {
            var c = a.target,
              d = p.nodeName(c, 'input') || p.nodeName(c, 'button') ? c.form : b
            d &&
              !p._data(d, '_submit_attached') &&
              (p.event.add(d, 'submit._submit', function(a) {
                a._submit_bubble = !0
              }),
              p._data(d, '_submit_attached', !0))
          })
        },
        postDispatch: function(a) {
          a._submit_bubble &&
            (delete a._submit_bubble,
            this.parentNode && !a.isTrigger && p.event.simulate('submit', this.parentNode, a, !0))
        },
        teardown: function() {
          if (p.nodeName(this, 'form')) return !1
          p.event.remove(this, '._submit')
        }
      }),
    p.support.changeBubbles ||
      (p.event.special.change = {
        setup: function() {
          if (V.test(this.nodeName)) {
            if (this.type === 'checkbox' || this.type === 'radio')
              p.event.add(this, 'propertychange._change', function(a) {
                a.originalEvent.propertyName === 'checked' && (this._just_changed = !0)
              }),
                p.event.add(this, 'click._change', function(a) {
                  this._just_changed && !a.isTrigger && (this._just_changed = !1),
                    p.event.simulate('change', this, a, !0)
                })
            return !1
          }
          p.event.add(this, 'beforeactivate._change', function(a) {
            var b = a.target
            V.test(b.nodeName) &&
              !p._data(b, '_change_attached') &&
              (p.event.add(b, 'change._change', function(a) {
                this.parentNode &&
                  !a.isSimulated &&
                  !a.isTrigger &&
                  p.event.simulate('change', this.parentNode, a, !0)
              }),
              p._data(b, '_change_attached', !0))
          })
        },
        handle: function(a) {
          var b = a.target
          if (
            this !== b ||
            a.isSimulated ||
            a.isTrigger ||
            (b.type !== 'radio' && b.type !== 'checkbox')
          )
            return a.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
          return p.event.remove(this, '._change'), !V.test(this.nodeName)
        }
      }),
    p.support.focusinBubbles ||
      p.each({ focus: 'focusin', blur: 'focusout' }, function(a, b) {
        var c = 0,
          d = function(a) {
            p.event.simulate(b, a.target, p.event.fix(a), !0)
          }
        p.event.special[b] = {
          setup: function() {
            c++ === 0 && e.addEventListener(a, d, !0)
          },
          teardown: function() {
            --c === 0 && e.removeEventListener(a, d, !0)
          }
        }
      }),
    p.fn.extend({
      on: function(a, c, d, e, f) {
        var g, h
        if (typeof a == 'object') {
          typeof c != 'string' && ((d = d || c), (c = b))
          for (h in a) this.on(h, c, d, a[h], f)
          return this
        }
        d == null && e == null
          ? ((e = c), (d = c = b))
          : e == null && (typeof c == 'string' ? ((e = d), (d = b)) : ((e = d), (d = c), (c = b)))
        if (e === !1) e = ba
        else if (!e) return this
        return (
          f === 1 &&
            ((g = e),
            (e = function(a) {
              return p().off(a), g.apply(this, arguments)
            }),
            (e.guid = g.guid || (g.guid = p.guid++))),
          this.each(function() {
            p.event.add(this, a, e, d, c)
          })
        )
      },
      one: function(a, b, c, d) {
        return this.on(a, b, c, d, 1)
      },
      off: function(a, c, d) {
        var e, f
        if (a && a.preventDefault && a.handleObj)
          return (
            (e = a.handleObj),
            p(a.delegateTarget).off(
              e.namespace ? e.origType + '.' + e.namespace : e.origType,
              e.selector,
              e.handler
            ),
            this
          )
        if (typeof a == 'object') {
          for (f in a) this.off(f, c, a[f])
          return this
        }
        if (c === !1 || typeof c == 'function') (d = c), (c = b)
        return (
          d === !1 && (d = ba),
          this.each(function() {
            p.event.remove(this, a, d, c)
          })
        )
      },
      bind: function(a, b, c) {
        return this.on(a, null, b, c)
      },
      unbind: function(a, b) {
        return this.off(a, null, b)
      },
      live: function(a, b, c) {
        return p(this.context).on(a, this.selector, b, c), this
      },
      die: function(a, b) {
        return p(this.context).off(a, this.selector || '**', b), this
      },
      delegate: function(a, b, c, d) {
        return this.on(b, a, c, d)
      },
      undelegate: function(a, b, c) {
        return arguments.length === 1 ? this.off(a, '**') : this.off(b, a || '**', c)
      },
      trigger: function(a, b) {
        return this.each(function() {
          p.event.trigger(a, b, this)
        })
      },
      triggerHandler: function(a, b) {
        if (this[0]) return p.event.trigger(a, b, this[0], !0)
      },
      toggle: function(a) {
        var b = arguments,
          c = a.guid || p.guid++,
          d = 0,
          e = function(c) {
            var e = (p._data(this, 'lastToggle' + a.guid) || 0) % d
            return (
              p._data(this, 'lastToggle' + a.guid, e + 1),
              c.preventDefault(),
              b[e].apply(this, arguments) || !1
            )
          }
        e.guid = c
        while (d < b.length) b[d++].guid = c
        return this.click(e)
      },
      hover: function(a, b) {
        return this.mouseenter(a).mouseleave(b || a)
      }
    }),
    p.each(
      'blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu'.split(
        ' '
      ),
      function(a, b) {
        ;(p.fn[b] = function(a, c) {
          return (
            c == null && ((c = a), (a = null)),
            arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
          )
        }),
          Y.test(b) && (p.event.fixHooks[b] = p.event.keyHooks),
          Z.test(b) && (p.event.fixHooks[b] = p.event.mouseHooks)
      }
    ),
    (function(a, b) {
      function bc(a, b, c, d) {
        ;(c = c || []), (b = b || r)
        var e,
          f,
          i,
          j,
          k = b.nodeType
        if (!a || typeof a != 'string') return c
        if (k !== 1 && k !== 9) return []
        i = g(b)
        if (!i && !d)
          if ((e = P.exec(a)))
            if ((j = e[1])) {
              if (k === 9) {
                f = b.getElementById(j)
                if (!f || !f.parentNode) return c
                if (f.id === j) return c.push(f), c
              } else if (
                b.ownerDocument &&
                (f = b.ownerDocument.getElementById(j)) &&
                h(b, f) &&
                f.id === j
              )
                return c.push(f), c
            } else {
              if (e[2]) return w.apply(c, x.call(b.getElementsByTagName(a), 0)), c
              if ((j = e[3]) && _ && b.getElementsByClassName)
                return w.apply(c, x.call(b.getElementsByClassName(j), 0)), c
            }
        return bp(a.replace(L, '$1'), b, c, d, i)
      }
      function bd(a) {
        return function(b) {
          var c = b.nodeName.toLowerCase()
          return c === 'input' && b.type === a
        }
      }
      function be(a) {
        return function(b) {
          var c = b.nodeName.toLowerCase()
          return (c === 'input' || c === 'button') && b.type === a
        }
      }
      function bf(a) {
        return z(function(b) {
          return (
            (b = +b),
            z(function(c, d) {
              var e,
                f = a([], c.length, b),
                g = f.length
              while (g--) c[(e = f[g])] && (c[e] = !(d[e] = c[e]))
            })
          )
        })
      }
      function bg(a, b, c) {
        if (a === b) return c
        var d = a.nextSibling
        while (d) {
          if (d === b) return -1
          d = d.nextSibling
        }
        return 1
      }
      function bh(a, b) {
        var c,
          d,
          f,
          g,
          h,
          i,
          j,
          k = C[o][a]
        if (k) return b ? 0 : k.slice(0)
        ;(h = a), (i = []), (j = e.preFilter)
        while (h) {
          if (!c || (d = M.exec(h))) d && (h = h.slice(d[0].length)), i.push((f = []))
          c = !1
          if ((d = N.exec(h)))
            f.push((c = new q(d.shift()))), (h = h.slice(c.length)), (c.type = d[0].replace(L, ' '))
          for (g in e.filter)
            (d = W[g].exec(h)) &&
              (!j[g] || (d = j[g](d, r, !0))) &&
              (f.push((c = new q(d.shift()))),
              (h = h.slice(c.length)),
              (c.type = g),
              (c.matches = d))
          if (!c) break
        }
        return b ? h.length : h ? bc.error(a) : C(a, i).slice(0)
      }
      function bi(a, b, d) {
        var e = b.dir,
          f = d && b.dir === 'parentNode',
          g = u++
        return b.first
          ? function(b, c, d) {
              while ((b = b[e])) if (f || b.nodeType === 1) return a(b, c, d)
            }
          : function(b, d, h) {
              if (!h) {
                var i,
                  j = t + ' ' + g + ' ',
                  k = j + c
                while ((b = b[e]))
                  if (f || b.nodeType === 1) {
                    if ((i = b[o]) === k) return b.sizset
                    if (typeof i == 'string' && i.indexOf(j) === 0) {
                      if (b.sizset) return b
                    } else {
                      b[o] = k
                      if (a(b, d, h)) return (b.sizset = !0), b
                      b.sizset = !1
                    }
                  }
              } else while ((b = b[e])) if (f || b.nodeType === 1) if (a(b, d, h)) return b
            }
      }
      function bj(a) {
        return a.length > 1
          ? function(b, c, d) {
              var e = a.length
              while (e--) if (!a[e](b, c, d)) return !1
              return !0
            }
          : a[0]
      }
      function bk(a, b, c, d, e) {
        var f,
          g = [],
          h = 0,
          i = a.length,
          j = b != null
        for (; h < i; h++) if ((f = a[h])) if (!c || c(f, d, e)) g.push(f), j && b.push(h)
        return g
      }
      function bl(a, b, c, d, e, f) {
        return (
          d && !d[o] && (d = bl(d)),
          e && !e[o] && (e = bl(e, f)),
          z(function(f, g, h, i) {
            if (f && e) return
            var j,
              k,
              l,
              m = [],
              n = [],
              o = g.length,
              p = f || bo(b || '*', h.nodeType ? [h] : h, [], f),
              q = a && (f || !b) ? bk(p, m, a, h, i) : p,
              r = c ? (e || (f ? a : o || d) ? [] : g) : q
            c && c(q, r, h, i)
            if (d) {
              ;(l = bk(r, n)), d(l, [], h, i), (j = l.length)
              while (j--) if ((k = l[j])) r[n[j]] = !(q[n[j]] = k)
            }
            if (f) {
              j = a && r.length
              while (j--) if ((k = r[j])) f[m[j]] = !(g[m[j]] = k)
            } else (r = bk(r === g ? r.splice(o, r.length) : r)), e ? e(null, g, r, i) : w.apply(g, r)
          })
        )
      }
      function bm(a) {
        var b,
          c,
          d,
          f = a.length,
          g = e.relative[a[0].type],
          h = g || e.relative[' '],
          i = g ? 1 : 0,
          j = bi(
            function(a) {
              return a === b
            },
            h,
            !0
          ),
          k = bi(
            function(a) {
              return y.call(b, a) > -1
            },
            h,
            !0
          ),
          m = [
            function(a, c, d) {
              return (!g && (d || c !== l)) || ((b = c).nodeType ? j(a, c, d) : k(a, c, d))
            }
          ]
        for (; i < f; i++)
          if ((c = e.relative[a[i].type])) m = [bi(bj(m), c)]
          else {
            c = e.filter[a[i].type].apply(null, a[i].matches)
            if (c[o]) {
              d = ++i
              for (; d < f; d++) if (e.relative[a[d].type]) break
              return bl(
                i > 1 && bj(m),
                i > 1 &&
                  a
                    .slice(0, i - 1)
                    .join('')
                    .replace(L, '$1'),
                c,
                i < d && bm(a.slice(i, d)),
                d < f && bm((a = a.slice(d))),
                d < f && a.join('')
              )
            }
            m.push(c)
          }
        return bj(m)
      }
      function bn(a, b) {
        var d = b.length > 0,
          f = a.length > 0,
          g = function(h, i, j, k, m) {
            var n,
              o,
              p,
              q = [],
              s = 0,
              u = '0',
              x = h && [],
              y = m != null,
              z = l,
              A = h || (f && e.find.TAG('*', (m && i.parentNode) || i)),
              B = (t += z == null ? 1 : Math.E)
            y && ((l = i !== r && i), (c = g.el))
            for (; (n = A[u]) != null; u++) {
              if (f && n) {
                for (o = 0; (p = a[o]); o++)
                  if (p(n, i, j)) {
                    k.push(n)
                    break
                  }
                y && ((t = B), (c = ++g.el))
              }
              d && ((n = !p && n) && s--, h && x.push(n))
            }
            s += u
            if (d && u !== s) {
              for (o = 0; (p = b[o]); o++) p(x, q, i, j)
              if (h) {
                if (s > 0) while (u--) !x[u] && !q[u] && (q[u] = v.call(k))
                q = bk(q)
              }
              w.apply(k, q), y && !h && q.length > 0 && s + b.length > 1 && bc.uniqueSort(k)
            }
            return y && ((t = B), (l = z)), x
          }
        return (g.el = 0), d ? z(g) : g
      }
      function bo(a, b, c, d) {
        var e = 0,
          f = b.length
        for (; e < f; e++) bc(a, b[e], c, d)
        return c
      }
      function bp(a, b, c, d, f) {
        var g,
          h,
          j,
          k,
          l,
          m = bh(a),
          n = m.length
        if (!d && m.length === 1) {
          h = m[0] = m[0].slice(0)
          if (
            h.length > 2 &&
            (j = h[0]).type === 'ID' &&
            b.nodeType === 9 &&
            !f &&
            e.relative[h[1].type]
          ) {
            b = e.find.ID(j.matches[0].replace(V, ''), b, f)[0]
            if (!b) return c
            a = a.slice(h.shift().length)
          }
          for (g = W.POS.test(a) ? -1 : h.length - 1; g >= 0; g--) {
            j = h[g]
            if (e.relative[(k = j.type)]) break
            if ((l = e.find[k]))
              if (
                (d = l(j.matches[0].replace(V, ''), (R.test(h[0].type) && b.parentNode) || b, f))
              ) {
                h.splice(g, 1), (a = d.length && h.join(''))
                if (!a) return w.apply(c, x.call(d, 0)), c
                break
              }
          }
        }
        return i(a, m)(d, b, f, c, R.test(a)), c
      }
      function bq() {}
      var c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m = !0,
        n = 'undefined',
        o = ('sizcache' + Math.random()).replace('.', ''),
        q = String,
        r = a.document,
        s = r.documentElement,
        t = 0,
        u = 0,
        v = [].pop,
        w = [].push,
        x = [].slice,
        y =
          [].indexOf ||
          function(a) {
            var b = 0,
              c = this.length
            for (; b < c; b++) if (this[b] === a) return b
            return -1
          },
        z = function(a, b) {
          return (a[o] = b == null || b), a
        },
        A = function() {
          var a = {},
            b = []
          return z(function(c, d) {
            return b.push(c) > e.cacheLength && delete a[b.shift()], (a[c] = d)
          }, a)
        },
        B = A(),
        C = A(),
        D = A(),
        E = '[\\x20\\t\\r\\n\\f]',
        F = '(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+',
        G = F.replace('w', 'w#'),
        H = '([*^$|!~]?=)',
        I =
          '\\[' +
          E +
          '*(' +
          F +
          ')' +
          E +
          '*(?:' +
          H +
          E +
          '*(?:([\'"])((?:\\\\.|[^\\\\])*?)\\3|(' +
          G +
          ')|)|)' +
          E +
          '*\\]',
        J =
          ':(' +
          F +
          ')(?:\\((?:([\'"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:' +
          I +
          ')|[^:]|\\\\.)*|.*))\\)|)',
        K =
          ':(even|odd|eq|gt|lt|nth|first|last)(?:\\(' +
          E +
          '*((?:-\\d)?\\d*)' +
          E +
          '*\\)|)(?=[^-]|$)',
        L = new RegExp('^' + E + '+|((?:^|[^\\\\])(?:\\\\.)*)' + E + '+$', 'g'),
        M = new RegExp('^' + E + '*,' + E + '*'),
        N = new RegExp('^' + E + '*([\\x20\\t\\r\\n\\f>+~])' + E + '*'),
        O = new RegExp(J),
        P = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
        Q = /^:not/,
        R = /[\x20\t\r\n\f]*[+~]/,
        S = /:not\($/,
        T = /h\d/i,
        U = /input|select|textarea|button/i,
        V = /\\(?!\\)/g,
        W = {
          ID: new RegExp('^#(' + F + ')'),
          CLASS: new RegExp('^\\.(' + F + ')'),
          NAME: new RegExp('^\\[name=[\'"]?(' + F + ')[\'"]?\\]'),
          TAG: new RegExp('^(' + F.replace('w', 'w*') + ')'),
          ATTR: new RegExp('^' + I),
          PSEUDO: new RegExp('^' + J),
          POS: new RegExp(K, 'i'),
          CHILD: new RegExp(
            '^:(only|nth|first|last)-child(?:\\(' +
              E +
              '*(even|odd|(([+-]|)(\\d*)n|)' +
              E +
              '*(?:([+-]|)' +
              E +
              '*(\\d+)|))' +
              E +
              '*\\)|)',
            'i'
          ),
          needsContext: new RegExp('^' + E + '*[>+~]|' + K, 'i')
        },
        X = function(a) {
          var b = r.createElement('div')
          try {
            return a(b)
          } catch (c) {
            return !1
          } finally {
            b = null
          }
        },
        Y = X(function(a) {
          return a.appendChild(r.createComment('')), !a.getElementsByTagName('*').length
        }),
        Z = X(function(a) {
          return (
            (a.innerHTML = "<a href='#'></a>"),
            a.firstChild &&
              typeof a.firstChild.getAttribute !== n &&
              a.firstChild.getAttribute('href') === '#'
          )
        }),
        $ = X(function(a) {
          a.innerHTML = '<select></select>'
          var b = typeof a.lastChild.getAttribute('multiple')
          return b !== 'boolean' && b !== 'string'
        }),
        _ = X(function(a) {
          return (
            (a.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>"),
            !a.getElementsByClassName || !a.getElementsByClassName('e').length
              ? !1
              : ((a.lastChild.className = 'e'), a.getElementsByClassName('e').length === 2)
          )
        }),
        ba = X(function(a) {
          ;(a.id = o + 0),
            (a.innerHTML = "<a name='" + o + "'></a><div name='" + o + "'></div>"),
            s.insertBefore(a, s.firstChild)
          var b =
            r.getElementsByName &&
            r.getElementsByName(o).length === 2 + r.getElementsByName(o + 0).length
          return (d = !r.getElementById(o)), s.removeChild(a), b
        })
      try {
        x.call(s.childNodes, 0)[0].nodeType
      } catch (bb) {
        x = function(a) {
          var b,
            c = []
          for (; (b = this[a]); a++) c.push(b)
          return c
        }
      }
      ;(bc.matches = function(a, b) {
        return bc(a, null, null, b)
      }),
        (bc.matchesSelector = function(a, b) {
          return bc(b, null, null, [a]).length > 0
        }),
        (f = bc.getText = function(a) {
          var b,
            c = '',
            d = 0,
            e = a.nodeType
          if (e) {
            if (e === 1 || e === 9 || e === 11) {
              if (typeof a.textContent == 'string') return a.textContent
              for (a = a.firstChild; a; a = a.nextSibling) c += f(a)
            } else if (e === 3 || e === 4) return a.nodeValue
          } else for (; (b = a[d]); d++) c += f(b)
          return c
        }),
        (g = bc.isXML = function(a) {
          var b = a && (a.ownerDocument || a).documentElement
          return b ? b.nodeName !== 'HTML' : !1
        }),
        (h = bc.contains = s.contains
          ? function(a, b) {
              var c = a.nodeType === 9 ? a.documentElement : a,
                d = b && b.parentNode
              return a === d || !!(d && d.nodeType === 1 && c.contains && c.contains(d))
            }
          : s.compareDocumentPosition
          ? function(a, b) {
              return b && !!(a.compareDocumentPosition(b) & 16)
            }
          : function(a, b) {
              while ((b = b.parentNode)) if (b === a) return !0
              return !1
            }),
        (bc.attr = function(a, b) {
          var c,
            d = g(a)
          return (
            d || (b = b.toLowerCase()),
            (c = e.attrHandle[b])
              ? c(a)
              : d || $
              ? a.getAttribute(b)
              : ((c = a.getAttributeNode(b)),
                c
                  ? typeof a[b] == 'boolean'
                    ? a[b]
                      ? b
                      : null
                    : c.specified
                    ? c.value
                    : null
                  : null)
          )
        }),
        (e = bc.selectors = {
          cacheLength: 50,
          createPseudo: z,
          match: W,
          attrHandle: Z
            ? {}
            : {
                href: function(a) {
                  return a.getAttribute('href', 2)
                },
                type: function(a) {
                  return a.getAttribute('type')
                }
              },
          find: {
            ID: d
              ? function(a, b, c) {
                  if (typeof b.getElementById !== n && !c) {
                    var d = b.getElementById(a)
                    return d && d.parentNode ? [d] : []
                  }
                }
              : function(a, c, d) {
                  if (typeof c.getElementById !== n && !d) {
                    var e = c.getElementById(a)
                    return e
                      ? e.id === a ||
                        (typeof e.getAttributeNode !== n && e.getAttributeNode('id').value === a)
                        ? [e]
                        : b
                      : []
                  }
                },
            TAG: Y
              ? function(a, b) {
                  if (typeof b.getElementsByTagName !== n) return b.getElementsByTagName(a)
                }
              : function(a, b) {
                  var c = b.getElementsByTagName(a)
                  if (a === '*') {
                    var d,
                      e = [],
                      f = 0
                    for (; (d = c[f]); f++) d.nodeType === 1 && e.push(d)
                    return e
                  }
                  return c
                },
            NAME:
              ba &&
              function(a, b) {
                if (typeof b.getElementsByName !== n) return b.getElementsByName(name)
              },
            CLASS:
              _ &&
              function(a, b, c) {
                if (typeof b.getElementsByClassName !== n && !c) return b.getElementsByClassName(a)
              }
          },
          relative: {
            '>': { dir: 'parentNode', first: !0 },
            ' ': { dir: 'parentNode' },
            '+': { dir: 'previousSibling', first: !0 },
            '~': { dir: 'previousSibling' }
          },
          preFilter: {
            ATTR: function(a) {
              return (
                (a[1] = a[1].replace(V, '')),
                (a[3] = (a[4] || a[5] || '').replace(V, '')),
                a[2] === '~=' && (a[3] = ' ' + a[3] + ' '),
                a.slice(0, 4)
              )
            },
            CHILD: function(a) {
              return (
                (a[1] = a[1].toLowerCase()),
                a[1] === 'nth'
                  ? (a[2] || bc.error(a[0]),
                    (a[3] = +(a[3] ? a[4] + (a[5] || 1) : 2 * (a[2] === 'even' || a[2] === 'odd'))),
                    (a[4] = +(a[6] + a[7] || a[2] === 'odd')))
                  : a[2] && bc.error(a[0]),
                a
              )
            },
            PSEUDO: function(a) {
              var b, c
              if (W.CHILD.test(a[0])) return null
              if (a[3]) a[2] = a[3]
              else if ((b = a[4]))
                O.test(b) &&
                  (c = bh(b, !0)) &&
                  (c = b.indexOf(')', b.length - c) - b.length) &&
                  ((b = b.slice(0, c)), (a[0] = a[0].slice(0, c))),
                  (a[2] = b)
              return a.slice(0, 3)
            }
          },
          filter: {
            ID: d
              ? function(a) {
                  return (
                    (a = a.replace(V, '')),
                    function(b) {
                      return b.getAttribute('id') === a
                    }
                  )
                }
              : function(a) {
                  return (
                    (a = a.replace(V, '')),
                    function(b) {
                      var c = typeof b.getAttributeNode !== n && b.getAttributeNode('id')
                      return c && c.value === a
                    }
                  )
                },
            TAG: function(a) {
              return a === '*'
                ? function() {
                    return !0
                  }
                : ((a = a.replace(V, '').toLowerCase()),
                  function(b) {
                    return b.nodeName && b.nodeName.toLowerCase() === a
                  })
            },
            CLASS: function(a) {
              var b = B[o][a]
              return (
                b || (b = B(a, new RegExp('(^|' + E + ')' + a + '(' + E + '|$)'))),
                function(a) {
                  return b.test(
                    a.className || (typeof a.getAttribute !== n && a.getAttribute('class')) || ''
                  )
                }
              )
            },
            ATTR: function(a, b, c) {
              return function(d, e) {
                var f = bc.attr(d, a)
                return f == null
                  ? b === '!='
                  : b
                  ? ((f += ''),
                    b === '='
                      ? f === c
                      : b === '!='
                      ? f !== c
                      : b === '^='
                      ? c && f.indexOf(c) === 0
                      : b === '*='
                      ? c && f.indexOf(c) > -1
                      : b === '$='
                      ? c && f.substr(f.length - c.length) === c
                      : b === '~='
                      ? (' ' + f + ' ').indexOf(c) > -1
                      : b === '|='
                      ? f === c || f.substr(0, c.length + 1) === c + '-'
                      : !1)
                  : !0
              }
            },
            CHILD: function(a, b, c, d) {
              return a === 'nth'
                ? function(a) {
                    var b,
                      e,
                      f = a.parentNode
                    if (c === 1 && d === 0) return !0
                    if (f) {
                      e = 0
                      for (b = f.firstChild; b; b = b.nextSibling)
                        if (b.nodeType === 1) {
                          e++
                          if (a === b) break
                        }
                    }
                    return (e -= d), e === c || (e % c === 0 && e / c >= 0)
                  }
                : function(b) {
                    var c = b
                    switch (a) {
                      case 'only':
                      case 'first':
                        while ((c = c.previousSibling)) if (c.nodeType === 1) return !1
                        if (a === 'first') return !0
                        c = b
                      case 'last':
                        while ((c = c.nextSibling)) if (c.nodeType === 1) return !1
                        return !0
                    }
                  }
            },
            PSEUDO: function(a, b) {
              var c,
                d =
                  e.pseudos[a] ||
                  e.setFilters[a.toLowerCase()] ||
                  bc.error('unsupported pseudo: ' + a)
              return d[o]
                ? d(b)
                : d.length > 1
                ? ((c = [a, a, '', b]),
                  e.setFilters.hasOwnProperty(a.toLowerCase())
                    ? z(function(a, c) {
                        var e,
                          f = d(a, b),
                          g = f.length
                        while (g--) (e = y.call(a, f[g])), (a[e] = !(c[e] = f[g]))
                      })
                    : function(a) {
                        return d(a, 0, c)
                      })
                : d
            }
          },
          pseudos: {
            not: z(function(a) {
              var b = [],
                c = [],
                d = i(a.replace(L, '$1'))
              return d[o]
                ? z(function(a, b, c, e) {
                    var f,
                      g = d(a, null, e, []),
                      h = a.length
                    while (h--) if ((f = g[h])) a[h] = !(b[h] = f)
                  })
                : function(a, e, f) {
                    return (b[0] = a), d(b, null, f, c), !c.pop()
                  }
            }),
            has: z(function(a) {
              return function(b) {
                return bc(a, b).length > 0
              }
            }),
            contains: z(function(a) {
              return function(b) {
                return (b.textContent || b.innerText || f(b)).indexOf(a) > -1
              }
            }),
            enabled: function(a) {
              return a.disabled === !1
            },
            disabled: function(a) {
              return a.disabled === !0
            },
            checked: function(a) {
              var b = a.nodeName.toLowerCase()
              return (b === 'input' && !!a.checked) || (b === 'option' && !!a.selected)
            },
            selected: function(a) {
              return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
            },
            parent: function(a) {
              return !e.pseudos.empty(a)
            },
            empty: function(a) {
              var b
              a = a.firstChild
              while (a) {
                if (a.nodeName > '@' || (b = a.nodeType) === 3 || b === 4) return !1
                a = a.nextSibling
              }
              return !0
            },
            header: function(a) {
              return T.test(a.nodeName)
            },
            text: function(a) {
              var b, c
              return (
                a.nodeName.toLowerCase() === 'input' &&
                (b = a.type) === 'text' &&
                ((c = a.getAttribute('type')) == null || c.toLowerCase() === b)
              )
            },
            radio: bd('radio'),
            checkbox: bd('checkbox'),
            file: bd('file'),
            password: bd('password'),
            image: bd('image'),
            submit: be('submit'),
            reset: be('reset'),
            button: function(a) {
              var b = a.nodeName.toLowerCase()
              return (b === 'input' && a.type === 'button') || b === 'button'
            },
            input: function(a) {
              return U.test(a.nodeName)
            },
            focus: function(a) {
              var b = a.ownerDocument
              return (
                a === b.activeElement && (!b.hasFocus || b.hasFocus()) && (!!a.type || !!a.href)
              )
            },
            active: function(a) {
              return a === a.ownerDocument.activeElement
            },
            first: bf(function(a, b, c) {
              return [0]
            }),
            last: bf(function(a, b, c) {
              return [b - 1]
            }),
            eq: bf(function(a, b, c) {
              return [c < 0 ? c + b : c]
            }),
            even: bf(function(a, b, c) {
              for (var d = 0; d < b; d += 2) a.push(d)
              return a
            }),
            odd: bf(function(a, b, c) {
              for (var d = 1; d < b; d += 2) a.push(d)
              return a
            }),
            lt: bf(function(a, b, c) {
              for (var d = c < 0 ? c + b : c; --d >= 0; ) a.push(d)
              return a
            }),
            gt: bf(function(a, b, c) {
              for (var d = c < 0 ? c + b : c; ++d < b; ) a.push(d)
              return a
            })
          }
        }),
        (j = s.compareDocumentPosition
          ? function(a, b) {
              return a === b
                ? ((k = !0), 0)
                : (!a.compareDocumentPosition || !b.compareDocumentPosition
                  ? a.compareDocumentPosition
                  : a.compareDocumentPosition(b) & 4)
                ? -1
                : 1
            }
          : function(a, b) {
              if (a === b) return (k = !0), 0
              if (a.sourceIndex && b.sourceIndex) return a.sourceIndex - b.sourceIndex
              var c,
                d,
                e = [],
                f = [],
                g = a.parentNode,
                h = b.parentNode,
                i = g
              if (g === h) return bg(a, b)
              if (!g) return -1
              if (!h) return 1
              while (i) e.unshift(i), (i = i.parentNode)
              i = h
              while (i) f.unshift(i), (i = i.parentNode)
              ;(c = e.length), (d = f.length)
              for (var j = 0; j < c && j < d; j++) if (e[j] !== f[j]) return bg(e[j], f[j])
              return j === c ? bg(a, f[j], -1) : bg(e[j], b, 1)
            }),
        [0, 0].sort(j),
        (m = !k),
        (bc.uniqueSort = function(a) {
          var b,
            c = 1
          ;(k = m), a.sort(j)
          if (k) for (; (b = a[c]); c++) b === a[c - 1] && a.splice(c--, 1)
          return a
        }),
        (bc.error = function(a) {
          throw new Error('Syntax error, unrecognized expression: ' + a)
        }),
        (i = bc.compile = function(a, b) {
          var c,
            d = [],
            e = [],
            f = D[o][a]
          if (!f) {
            b || (b = bh(a)), (c = b.length)
            while (c--) (f = bm(b[c])), f[o] ? d.push(f) : e.push(f)
            f = D(a, bn(e, d))
          }
          return f
        }),
        r.querySelectorAll &&
          (function() {
            var a,
              b = bp,
              c = /'|\\/g,
              d = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
              e = [':focus'],
              f = [':active', ':focus'],
              h =
                s.matchesSelector ||
                s.mozMatchesSelector ||
                s.webkitMatchesSelector ||
                s.oMatchesSelector ||
                s.msMatchesSelector
            X(function(a) {
              ;(a.innerHTML = "<select><option selected=''></option></select>"),
                a.querySelectorAll('[selected]').length ||
                  e.push(
                    '\\[' + E + '*(?:checked|disabled|ismap|multiple|readonly|selected|value)'
                  ),
                a.querySelectorAll(':checked').length || e.push(':checked')
            }),
              X(function(a) {
                ;(a.innerHTML = "<p test=''></p>"),
                  a.querySelectorAll("[test^='']").length && e.push('[*^$]=' + E + '*(?:""|\'\')'),
                  (a.innerHTML = "<input type='hidden'/>"),
                  a.querySelectorAll(':enabled').length || e.push(':enabled', ':disabled')
              }),
              (e = new RegExp(e.join('|'))),
              (bp = function(a, d, f, g, h) {
                if (!g && !h && (!e || !e.test(a))) {
                  var i,
                    j,
                    k = !0,
                    l = o,
                    m = d,
                    n = d.nodeType === 9 && a
                  if (d.nodeType === 1 && d.nodeName.toLowerCase() !== 'object') {
                    ;(i = bh(a)),
                      (k = d.getAttribute('id'))
                        ? (l = k.replace(c, '\\$&'))
                        : d.setAttribute('id', l),
                      (l = "[id='" + l + "'] "),
                      (j = i.length)
                    while (j--) i[j] = l + i[j].join('')
                    ;(m = (R.test(a) && d.parentNode) || d), (n = i.join(','))
                  }
                  if (n)
                    try {
                      return w.apply(f, x.call(m.querySelectorAll(n), 0)), f
                    } catch (p) {
                    } finally {
                      k || d.removeAttribute('id')
                    }
                }
                return b(a, d, f, g, h)
              }),
              h &&
                (X(function(b) {
                  a = h.call(b, 'div')
                  try {
                    h.call(b, "[test!='']:sizzle"), f.push('!=', J)
                  } catch (c) {}
                }),
                (f = new RegExp(f.join('|'))),
                (bc.matchesSelector = function(b, c) {
                  c = c.replace(d, "='$1']")
                  if (!g(b) && !f.test(c) && (!e || !e.test(c)))
                    try {
                      var i = h.call(b, c)
                      if (i || a || (b.document && b.document.nodeType !== 11)) return i
                    } catch (j) {}
                  return bc(c, null, null, [b]).length > 0
                }))
          })(),
        (e.pseudos.nth = e.pseudos.eq),
        (e.filters = bq.prototype = e.pseudos),
        (e.setFilters = new bq()),
        (bc.attr = p.attr),
        (p.find = bc),
        (p.expr = bc.selectors),
        (p.expr[':'] = p.expr.pseudos),
        (p.unique = bc.uniqueSort),
        (p.text = bc.getText),
        (p.isXMLDoc = bc.isXML),
        (p.contains = bc.contains)
    })(a)
  var bc = /Until$/,
    bd = /^(?:parents|prev(?:Until|All))/,
    be = /^.[^:#\[\.,]*$/,
    bf = p.expr.match.needsContext,
    bg = { children: !0, contents: !0, next: !0, prev: !0 }
  p.fn.extend({
    find: function(a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h = this
      if (typeof a != 'string')
        return p(a).filter(function() {
          for (b = 0, c = h.length; b < c; b++) if (p.contains(h[b], this)) return !0
        })
      g = this.pushStack('', 'find', a)
      for (b = 0, c = this.length; b < c; b++) {
        ;(d = g.length), p.find(a, this[b], g)
        if (b > 0)
          for (e = d; e < g.length; e++)
            for (f = 0; f < d; f++)
              if (g[f] === g[e]) {
                g.splice(e--, 1)
                break
              }
      }
      return g
    },
    has: function(a) {
      var b,
        c = p(a, this),
        d = c.length
      return this.filter(function() {
        for (b = 0; b < d; b++) if (p.contains(this, c[b])) return !0
      })
    },
    not: function(a) {
      return this.pushStack(bj(this, a, !1), 'not', a)
    },
    filter: function(a) {
      return this.pushStack(bj(this, a, !0), 'filter', a)
    },
    is: function(a) {
      return (
        !!a &&
        (typeof a == 'string'
          ? bf.test(a)
            ? p(a, this.context).index(this[0]) >= 0
            : p.filter(a, this).length > 0
          : this.filter(a).length > 0)
      )
    },
    closest: function(a, b) {
      var c,
        d = 0,
        e = this.length,
        f = [],
        g = bf.test(a) || typeof a != 'string' ? p(a, b || this.context) : 0
      for (; d < e; d++) {
        c = this[d]
        while (c && c.ownerDocument && c !== b && c.nodeType !== 11) {
          if (g ? g.index(c) > -1 : p.find.matchesSelector(c, a)) {
            f.push(c)
            break
          }
          c = c.parentNode
        }
      }
      return (f = f.length > 1 ? p.unique(f) : f), this.pushStack(f, 'closest', a)
    },
    index: function(a) {
      return a
        ? typeof a == 'string'
          ? p.inArray(this[0], p(a))
          : p.inArray(a.jquery ? a[0] : a, this)
        : this[0] && this[0].parentNode
        ? this.prevAll().length
        : -1
    },
    add: function(a, b) {
      var c = typeof a == 'string' ? p(a, b) : p.makeArray(a && a.nodeType ? [a] : a),
        d = p.merge(this.get(), c)
      return this.pushStack(bh(c[0]) || bh(d[0]) ? d : p.unique(d))
    },
    addBack: function(a) {
      return this.add(a == null ? this.prevObject : this.prevObject.filter(a))
    }
  }),
    (p.fn.andSelf = p.fn.addBack),
    p.each(
      {
        parent: function(a) {
          var b = a.parentNode
          return b && b.nodeType !== 11 ? b : null
        },
        parents: function(a) {
          return p.dir(a, 'parentNode')
        },
        parentsUntil: function(a, b, c) {
          return p.dir(a, 'parentNode', c)
        },
        next: function(a) {
          return bi(a, 'nextSibling')
        },
        prev: function(a) {
          return bi(a, 'previousSibling')
        },
        nextAll: function(a) {
          return p.dir(a, 'nextSibling')
        },
        prevAll: function(a) {
          return p.dir(a, 'previousSibling')
        },
        nextUntil: function(a, b, c) {
          return p.dir(a, 'nextSibling', c)
        },
        prevUntil: function(a, b, c) {
          return p.dir(a, 'previousSibling', c)
        },
        siblings: function(a) {
          return p.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
          return p.sibling(a.firstChild)
        },
        contents: function(a) {
          return p.nodeName(a, 'iframe')
            ? a.contentDocument || a.contentWindow.document
            : p.merge([], a.childNodes)
        }
      },
      function(a, b) {
        p.fn[a] = function(c, d) {
          var e = p.map(this, b, c)
          return (
            bc.test(a) || (d = c),
            d && typeof d == 'string' && (e = p.filter(d, e)),
            (e = this.length > 1 && !bg[a] ? p.unique(e) : e),
            this.length > 1 && bd.test(a) && (e = e.reverse()),
            this.pushStack(e, a, k.call(arguments).join(','))
          )
        }
      }
    ),
    p.extend({
      filter: function(a, b, c) {
        return (
          c && (a = ':not(' + a + ')'),
          b.length === 1 ? (p.find.matchesSelector(b[0], a) ? [b[0]] : []) : p.find.matches(a, b)
        )
      },
      dir: function(a, c, d) {
        var e = [],
          f = a[c]
        while (f && f.nodeType !== 9 && (d === b || f.nodeType !== 1 || !p(f).is(d)))
          f.nodeType === 1 && e.push(f), (f = f[c])
        return e
      },
      sibling: function(a, b) {
        var c = []
        for (; a; a = a.nextSibling) a.nodeType === 1 && a !== b && c.push(a)
        return c
      }
    })
  var bl =
      'abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video',
    bm = / jQuery\d+="(?:null|\d+)"/g,
    bn = /^\s+/,
    bo = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    bp = /<([\w:]+)/,
    bq = /<tbody/i,
    br = /<|&#?\w+;/,
    bs = /<(?:script|style|link)/i,
    bt = /<(?:script|object|embed|option|style)/i,
    bu = new RegExp('<(?:' + bl + ')[\\s/>]', 'i'),
    bv = /^(?:checkbox|radio)$/,
    bw = /checked\s*(?:[^=]|=\s*.checked.)/i,
    bx = /\/(java|ecma)script/i,
    by = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
    bz = {
      option: [1, "<select multiple='multiple'>", '</select>'],
      legend: [1, '<fieldset>', '</fieldset>'],
      thead: [1, '<table>', '</table>'],
      tr: [2, '<table><tbody>', '</tbody></table>'],
      td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
      col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>'],
      area: [1, '<map>', '</map>'],
      _default: [0, '', '']
    },
    bA = bk(e),
    bB = bA.appendChild(e.createElement('div'))
  ;(bz.optgroup = bz.option),
    (bz.tbody = bz.tfoot = bz.colgroup = bz.caption = bz.thead),
    (bz.th = bz.td),
    p.support.htmlSerialize || (bz._default = [1, 'X<div>', '</div>']),
    p.fn.extend({
      text: function(a) {
        return p.access(
          this,
          function(a) {
            return a === b
              ? p.text(this)
              : this.empty().append(((this[0] && this[0].ownerDocument) || e).createTextNode(a))
          },
          null,
          a,
          arguments.length
        )
      },
      wrapAll: function(a) {
        if (p.isFunction(a))
          return this.each(function(b) {
            p(this).wrapAll(a.call(this, b))
          })
        if (this[0]) {
          var b = p(a, this[0].ownerDocument)
            .eq(0)
            .clone(!0)
          this[0].parentNode && b.insertBefore(this[0]),
            b
              .map(function() {
                var a = this
                while (a.firstChild && a.firstChild.nodeType === 1) a = a.firstChild
                return a
              })
              .append(this)
        }
        return this
      },
      wrapInner: function(a) {
        return p.isFunction(a)
          ? this.each(function(b) {
              p(this).wrapInner(a.call(this, b))
            })
          : this.each(function() {
              var b = p(this),
                c = b.contents()
              c.length ? c.wrapAll(a) : b.append(a)
            })
      },
      wrap: function(a) {
        var b = p.isFunction(a)
        return this.each(function(c) {
          p(this).wrapAll(b ? a.call(this, c) : a)
        })
      },
      unwrap: function() {
        return this.parent()
          .each(function() {
            p.nodeName(this, 'body') || p(this).replaceWith(this.childNodes)
          })
          .end()
      },
      append: function() {
        return this.domManip(arguments, !0, function(a) {
          ;(this.nodeType === 1 || this.nodeType === 11) && this.appendChild(a)
        })
      },
      prepend: function() {
        return this.domManip(arguments, !0, function(a) {
          ;(this.nodeType === 1 || this.nodeType === 11) && this.insertBefore(a, this.firstChild)
        })
      },
      before: function() {
        if (!bh(this[0]))
          return this.domManip(arguments, !1, function(a) {
            this.parentNode.insertBefore(a, this)
          })
        if (arguments.length) {
          var a = p.clean(arguments)
          return this.pushStack(p.merge(a, this), 'before', this.selector)
        }
      },
      after: function() {
        if (!bh(this[0]))
          return this.domManip(arguments, !1, function(a) {
            this.parentNode.insertBefore(a, this.nextSibling)
          })
        if (arguments.length) {
          var a = p.clean(arguments)
          return this.pushStack(p.merge(this, a), 'after', this.selector)
        }
      },
      remove: function(a, b) {
        var c,
          d = 0
        for (; (c = this[d]) != null; d++)
          if (!a || p.filter(a, [c]).length)
            !b && c.nodeType === 1 && (p.cleanData(c.getElementsByTagName('*')), p.cleanData([c])),
              c.parentNode && c.parentNode.removeChild(c)
        return this
      },
      empty: function() {
        var a,
          b = 0
        for (; (a = this[b]) != null; b++) {
          a.nodeType === 1 && p.cleanData(a.getElementsByTagName('*'))
          while (a.firstChild) a.removeChild(a.firstChild)
        }
        return this
      },
      clone: function(a, b) {
        return (
          (a = a == null ? !1 : a),
          (b = b == null ? a : b),
          this.map(function() {
            return p.clone(this, a, b)
          })
        )
      },
      html: function(a) {
        return p.access(
          this,
          function(a) {
            var c = this[0] || {},
              d = 0,
              e = this.length
            if (a === b) return c.nodeType === 1 ? c.innerHTML.replace(bm, '') : b
            if (
              typeof a == 'string' &&
              !bs.test(a) &&
              (p.support.htmlSerialize || !bu.test(a)) &&
              (p.support.leadingWhitespace || !bn.test(a)) &&
              !bz[(bp.exec(a) || ['', ''])[1].toLowerCase()]
            ) {
              a = a.replace(bo, '<$1></$2>')
              try {
                for (; d < e; d++)
                  (c = this[d] || {}),
                    c.nodeType === 1 &&
                      (p.cleanData(c.getElementsByTagName('*')), (c.innerHTML = a))
                c = 0
              } catch (f) {}
            }
            c && this.empty().append(a)
          },
          null,
          a,
          arguments.length
        )
      },
      replaceWith: function(a) {
        return bh(this[0])
          ? this.length
            ? this.pushStack(p(p.isFunction(a) ? a() : a), 'replaceWith', a)
            : this
          : p.isFunction(a)
          ? this.each(function(b) {
              var c = p(this),
                d = c.html()
              c.replaceWith(a.call(this, b, d))
            })
          : (typeof a != 'string' && (a = p(a).detach()),
            this.each(function() {
              var b = this.nextSibling,
                c = this.parentNode
              p(this).remove(), b ? p(b).before(a) : p(c).append(a)
            }))
      },
      detach: function(a) {
        return this.remove(a, !0)
      },
      domManip: function(a, c, d) {
        a = [].concat.apply([], a)
        var e,
          f,
          g,
          h,
          i = 0,
          j = a[0],
          k = [],
          l = this.length
        if (!p.support.checkClone && l > 1 && typeof j == 'string' && bw.test(j))
          return this.each(function() {
            p(this).domManip(a, c, d)
          })
        if (p.isFunction(j))
          return this.each(function(e) {
            var f = p(this)
            ;(a[0] = j.call(this, e, c ? f.html() : b)), f.domManip(a, c, d)
          })
        if (this[0]) {
          ;(e = p.buildFragment(a, this, k)),
            (g = e.fragment),
            (f = g.firstChild),
            g.childNodes.length === 1 && (g = f)
          if (f) {
            c = c && p.nodeName(f, 'tr')
            for (h = e.cacheable || l - 1; i < l; i++)
              d.call(
                c && p.nodeName(this[i], 'table') ? bC(this[i], 'tbody') : this[i],
                i === h ? g : p.clone(g, !0, !0)
              )
          }
          ;(g = f = null),
            k.length &&
              p.each(k, function(a, b) {
                b.src
                  ? p.ajax
                    ? p.ajax({
                        url: b.src,
                        type: 'GET',
                        dataType: 'script',
                        async: !1,
                        global: !1,
                        throws: !0
                      })
                    : p.error('no ajax')
                  : p.globalEval((b.text || b.textContent || b.innerHTML || '').replace(by, '')),
                  b.parentNode && b.parentNode.removeChild(b)
              })
        }
        return this
      }
    }),
    (p.buildFragment = function(a, c, d) {
      var f,
        g,
        h,
        i = a[0]
      return (
        (c = c || e),
        (c = (!c.nodeType && c[0]) || c),
        (c = c.ownerDocument || c),
        a.length === 1 &&
          typeof i == 'string' &&
          i.length < 512 &&
          c === e &&
          i.charAt(0) === '<' &&
          !bt.test(i) &&
          (p.support.checkClone || !bw.test(i)) &&
          (p.support.html5Clone || !bu.test(i)) &&
          ((g = !0), (f = p.fragments[i]), (h = f !== b)),
        f ||
          ((f = c.createDocumentFragment()), p.clean(a, c, f, d), g && (p.fragments[i] = h && f)),
        { fragment: f, cacheable: g }
      )
    }),
    (p.fragments = {}),
    p.each(
      {
        appendTo: 'append',
        prependTo: 'prepend',
        insertBefore: 'before',
        insertAfter: 'after',
        replaceAll: 'replaceWith'
      },
      function(a, b) {
        p.fn[a] = function(c) {
          var d,
            e = 0,
            f = [],
            g = p(c),
            h = g.length,
            i = this.length === 1 && this[0].parentNode
          if ((i == null || (i && i.nodeType === 11 && i.childNodes.length === 1)) && h === 1)
            return g[b](this[0]), this
          for (; e < h; e++)
            (d = (e > 0 ? this.clone(!0) : this).get()), p(g[e])[b](d), (f = f.concat(d))
          return this.pushStack(f, a, g.selector)
        }
      }
    ),
    p.extend({
      clone: function(a, b, c) {
        var d, e, f, g
        p.support.html5Clone || p.isXMLDoc(a) || !bu.test('<' + a.nodeName + '>')
          ? (g = a.cloneNode(!0))
          : ((bB.innerHTML = a.outerHTML), bB.removeChild((g = bB.firstChild)))
        if (
          (!p.support.noCloneEvent || !p.support.noCloneChecked) &&
          (a.nodeType === 1 || a.nodeType === 11) &&
          !p.isXMLDoc(a)
        ) {
          bE(a, g), (d = bF(a)), (e = bF(g))
          for (f = 0; d[f]; ++f) e[f] && bE(d[f], e[f])
        }
        if (b) {
          bD(a, g)
          if (c) {
            ;(d = bF(a)), (e = bF(g))
            for (f = 0; d[f]; ++f) bD(d[f], e[f])
          }
        }
        return (d = e = null), g
      },
      clean: function(a, b, c, d) {
        var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          q,
          r,
          s = b === e && bA,
          t = []
        if (!b || typeof b.createDocumentFragment == 'undefined') b = e
        for (f = 0; (h = a[f]) != null; f++) {
          typeof h == 'number' && (h += '')
          if (!h) continue
          if (typeof h == 'string')
            if (!br.test(h)) h = b.createTextNode(h)
            else {
              ;(s = s || bk(b)),
                (l = b.createElement('div')),
                s.appendChild(l),
                (h = h.replace(bo, '<$1></$2>')),
                (i = (bp.exec(h) || ['', ''])[1].toLowerCase()),
                (j = bz[i] || bz._default),
                (k = j[0]),
                (l.innerHTML = j[1] + h + j[2])
              while (k--) l = l.lastChild
              if (!p.support.tbody) {
                ;(m = bq.test(h)),
                  (n =
                    i === 'table' && !m
                      ? l.firstChild && l.firstChild.childNodes
                      : j[1] === '<table>' && !m
                      ? l.childNodes
                      : [])
                for (g = n.length - 1; g >= 0; --g)
                  p.nodeName(n[g], 'tbody') &&
                    !n[g].childNodes.length &&
                    n[g].parentNode.removeChild(n[g])
              }
              !p.support.leadingWhitespace &&
                bn.test(h) &&
                l.insertBefore(b.createTextNode(bn.exec(h)[0]), l.firstChild),
                (h = l.childNodes),
                l.parentNode.removeChild(l)
            }
          h.nodeType ? t.push(h) : p.merge(t, h)
        }
        l && (h = l = s = null)
        if (!p.support.appendChecked)
          for (f = 0; (h = t[f]) != null; f++)
            p.nodeName(h, 'input')
              ? bG(h)
              : typeof h.getElementsByTagName != 'undefined' &&
                p.grep(h.getElementsByTagName('input'), bG)
        if (c) {
          q = function(a) {
            if (!a.type || bx.test(a.type))
              return d ? d.push(a.parentNode ? a.parentNode.removeChild(a) : a) : c.appendChild(a)
          }
          for (f = 0; (h = t[f]) != null; f++)
            if (!p.nodeName(h, 'script') || !q(h))
              c.appendChild(h),
                typeof h.getElementsByTagName != 'undefined' &&
                  ((r = p.grep(p.merge([], h.getElementsByTagName('script')), q)),
                  t.splice.apply(t, [f + 1, 0].concat(r)),
                  (f += r.length))
        }
        return t
      },
      cleanData: function(a, b) {
        var c,
          d,
          e,
          f,
          g = 0,
          h = p.expando,
          i = p.cache,
          j = p.support.deleteExpando,
          k = p.event.special
        for (; (e = a[g]) != null; g++)
          if (b || p.acceptData(e)) {
            ;(d = e[h]), (c = d && i[d])
            if (c) {
              if (c.events)
                for (f in c.events) k[f] ? p.event.remove(e, f) : p.removeEvent(e, f, c.handle)
              i[d] &&
                (delete i[d],
                j ? delete e[h] : e.removeAttribute ? e.removeAttribute(h) : (e[h] = null),
                p.deletedIds.push(d))
            }
          }
      }
    }),
    (function() {
      var a, b
      ;(p.uaMatch = function(a) {
        a = a.toLowerCase()
        var b =
          /(chrome)[ \/]([\w.]+)/.exec(a) ||
          /(webkit)[ \/]([\w.]+)/.exec(a) ||
          /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) ||
          /(msie) ([\w.]+)/.exec(a) ||
          (a.indexOf('compatible') < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)) ||
          []
        return { browser: b[1] || '', version: b[2] || '0' }
      }),
        (a = p.uaMatch(g.userAgent)),
        (b = {}),
        a.browser && ((b[a.browser] = !0), (b.version = a.version)),
        b.chrome ? (b.webkit = !0) : b.webkit && (b.safari = !0),
        (p.browser = b),
        (p.sub = function() {
          function a(b, c) {
            return new a.fn.init(b, c)
          }
          p.extend(!0, a, this),
            (a.superclass = this),
            (a.fn = a.prototype = this()),
            (a.fn.constructor = a),
            (a.sub = this.sub),
            (a.fn.init = function c(c, d) {
              return (
                d && d instanceof p && !(d instanceof a) && (d = a(d)),
                p.fn.init.call(this, c, d, b)
              )
            }),
            (a.fn.init.prototype = a.fn)
          var b = a(e)
          return a
        })
    })()
  var bH,
    bI,
    bJ,
    bK = /alpha\([^)]*\)/i,
    bL = /opacity=([^)]*)/,
    bM = /^(top|right|bottom|left)$/,
    bN = /^(none|table(?!-c[ea]).+)/,
    bO = /^margin/,
    bP = new RegExp('^(' + q + ')(.*)$', 'i'),
    bQ = new RegExp('^(' + q + ')(?!px)[a-z%]+$', 'i'),
    bR = new RegExp('^([-+])=(' + q + ')', 'i'),
    bS = {},
    bT = { position: 'absolute', visibility: 'hidden', display: 'block' },
    bU = { letterSpacing: 0, fontWeight: 400 },
    bV = ['Top', 'Right', 'Bottom', 'Left'],
    bW = ['Webkit', 'O', 'Moz', 'ms'],
    bX = p.fn.toggle
  p.fn.extend({
    css: function(a, c) {
      return p.access(
        this,
        function(a, c, d) {
          return d !== b ? p.style(a, c, d) : p.css(a, c)
        },
        a,
        c,
        arguments.length > 1
      )
    },
    show: function() {
      return b$(this, !0)
    },
    hide: function() {
      return b$(this)
    },
    toggle: function(a, b) {
      var c = typeof a == 'boolean'
      return p.isFunction(a) && p.isFunction(b)
        ? bX.apply(this, arguments)
        : this.each(function() {
            ;(c ? a : bZ(this)) ? p(this).show() : p(this).hide()
          })
    }
  }),
    p.extend({
      cssHooks: {
        opacity: {
          get: function(a, b) {
            if (b) {
              var c = bH(a, 'opacity')
              return c === '' ? '1' : c
            }
          }
        }
      },
      cssNumber: {
        fillOpacity: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0
      },
      cssProps: { float: p.support.cssFloat ? 'cssFloat' : 'styleFloat' },
      style: function(a, c, d, e) {
        if (!a || a.nodeType === 3 || a.nodeType === 8 || !a.style) return
        var f,
          g,
          h,
          i = p.camelCase(c),
          j = a.style
        ;(c = p.cssProps[i] || (p.cssProps[i] = bY(j, i))), (h = p.cssHooks[c] || p.cssHooks[i])
        if (d === b) return h && 'get' in h && (f = h.get(a, !1, e)) !== b ? f : j[c]
        ;(g = typeof d),
          g === 'string' &&
            (f = bR.exec(d)) &&
            ((d = (f[1] + 1) * f[2] + parseFloat(p.css(a, c))), (g = 'number'))
        if (d == null || (g === 'number' && isNaN(d))) return
        g === 'number' && !p.cssNumber[i] && (d += 'px')
        if (!h || !('set' in h) || (d = h.set(a, d, e)) !== b)
          try {
            j[c] = d
          } catch (k) {}
      },
      css: function(a, c, d, e) {
        var f,
          g,
          h,
          i = p.camelCase(c)
        return (
          (c = p.cssProps[i] || (p.cssProps[i] = bY(a.style, i))),
          (h = p.cssHooks[c] || p.cssHooks[i]),
          h && 'get' in h && (f = h.get(a, !0, e)),
          f === b && (f = bH(a, c)),
          f === 'normal' && c in bU && (f = bU[c]),
          d || e !== b ? ((g = parseFloat(f)), d || p.isNumeric(g) ? g || 0 : f) : f
        )
      },
      swap: function(a, b, c) {
        var d,
          e,
          f = {}
        for (e in b) (f[e] = a.style[e]), (a.style[e] = b[e])
        d = c.call(a)
        for (e in b) a.style[e] = f[e]
        return d
      }
    }),
    a.getComputedStyle
      ? (bH = function(b, c) {
          var d,
            e,
            f,
            g,
            h = a.getComputedStyle(b, null),
            i = b.style
          return (
            h &&
              ((d = h[c]),
              d === '' && !p.contains(b.ownerDocument, b) && (d = p.style(b, c)),
              bQ.test(d) &&
                bO.test(c) &&
                ((e = i.width),
                (f = i.minWidth),
                (g = i.maxWidth),
                (i.minWidth = i.maxWidth = i.width = d),
                (d = h.width),
                (i.width = e),
                (i.minWidth = f),
                (i.maxWidth = g))),
            d
          )
        })
      : e.documentElement.currentStyle &&
        (bH = function(a, b) {
          var c,
            d,
            e = a.currentStyle && a.currentStyle[b],
            f = a.style
          return (
            e == null && f && f[b] && (e = f[b]),
            bQ.test(e) &&
              !bM.test(b) &&
              ((c = f.left),
              (d = a.runtimeStyle && a.runtimeStyle.left),
              d && (a.runtimeStyle.left = a.currentStyle.left),
              (f.left = b === 'fontSize' ? '1em' : e),
              (e = f.pixelLeft + 'px'),
              (f.left = c),
              d && (a.runtimeStyle.left = d)),
            e === '' ? 'auto' : e
          )
        }),
    p.each(['height', 'width'], function(a, b) {
      p.cssHooks[b] = {
        get: function(a, c, d) {
          if (c)
            return a.offsetWidth === 0 && bN.test(bH(a, 'display'))
              ? p.swap(a, bT, function() {
                  return cb(a, b, d)
                })
              : cb(a, b, d)
        },
        set: function(a, c, d) {
          return b_(
            a,
            c,
            d ? ca(a, b, d, p.support.boxSizing && p.css(a, 'boxSizing') === 'border-box') : 0
          )
        }
      }
    }),
    p.support.opacity ||
      (p.cssHooks.opacity = {
        get: function(a, b) {
          return bL.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || '')
            ? 0.01 * parseFloat(RegExp.$1) + ''
            : b
            ? '1'
            : ''
        },
        set: function(a, b) {
          var c = a.style,
            d = a.currentStyle,
            e = p.isNumeric(b) ? 'alpha(opacity=' + b * 100 + ')' : '',
            f = (d && d.filter) || c.filter || ''
          c.zoom = 1
          if (b >= 1 && p.trim(f.replace(bK, '')) === '' && c.removeAttribute) {
            c.removeAttribute('filter')
            if (d && !d.filter) return
          }
          c.filter = bK.test(f) ? f.replace(bK, e) : f + ' ' + e
        }
      }),
    p(function() {
      p.support.reliableMarginRight ||
        (p.cssHooks.marginRight = {
          get: function(a, b) {
            return p.swap(a, { display: 'inline-block' }, function() {
              if (b) return bH(a, 'marginRight')
            })
          }
        }),
        !p.support.pixelPosition &&
          p.fn.position &&
          p.each(['top', 'left'], function(a, b) {
            p.cssHooks[b] = {
              get: function(a, c) {
                if (c) {
                  var d = bH(a, b)
                  return bQ.test(d) ? p(a).position()[b] + 'px' : d
                }
              }
            }
          })
    }),
    p.expr &&
      p.expr.filters &&
      ((p.expr.filters.hidden = function(a) {
        return (
          (a.offsetWidth === 0 && a.offsetHeight === 0) ||
          (!p.support.reliableHiddenOffsets &&
            ((a.style && a.style.display) || bH(a, 'display')) === 'none')
        )
      }),
      (p.expr.filters.visible = function(a) {
        return !p.expr.filters.hidden(a)
      })),
    p.each({ margin: '', padding: '', border: 'Width' }, function(a, b) {
      ;(p.cssHooks[a + b] = {
        expand: function(c) {
          var d,
            e = typeof c == 'string' ? c.split(' ') : [c],
            f = {}
          for (d = 0; d < 4; d++) f[a + bV[d] + b] = e[d] || e[d - 2] || e[0]
          return f
        }
      }),
        bO.test(a) || (p.cssHooks[a + b].set = b_)
    })
  var cd = /%20/g,
    ce = /\[\]$/,
    cf = /\r?\n/g,
    cg = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
    ch = /^(?:select|textarea)/i
  p.fn.extend({
    serialize: function() {
      return p.param(this.serializeArray())
    },
    serializeArray: function() {
      return this.map(function() {
        return this.elements ? p.makeArray(this.elements) : this
      })
        .filter(function() {
          return (
            this.name &&
            !this.disabled &&
            (this.checked || ch.test(this.nodeName) || cg.test(this.type))
          )
        })
        .map(function(a, b) {
          var c = p(this).val()
          return c == null
            ? null
            : p.isArray(c)
            ? p.map(c, function(a, c) {
                return { name: b.name, value: a.replace(cf, '\r\n') }
              })
            : { name: b.name, value: c.replace(cf, '\r\n') }
        })
        .get()
    }
  }),
    (p.param = function(a, c) {
      var d,
        e = [],
        f = function(a, b) {
          ;(b = p.isFunction(b) ? b() : b == null ? '' : b),
            (e[e.length] = encodeURIComponent(a) + '=' + encodeURIComponent(b))
        }
      c === b && (c = p.ajaxSettings && p.ajaxSettings.traditional)
      if (p.isArray(a) || (a.jquery && !p.isPlainObject(a)))
        p.each(a, function() {
          f(this.name, this.value)
        })
      else for (d in a) ci(d, a[d], c, f)
      return e.join('&').replace(cd, '+')
    })
  var cj,
    ck,
    cl = /#.*$/,
    cm = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    cn = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
    co = /^(?:GET|HEAD)$/,
    cp = /^\/\//,
    cq = /\?/,
    cr = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    cs = /([?&])_=[^&]*/,
    ct = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
    cu = p.fn.load,
    cv = {},
    cw = {},
    cx = ['*/'] + ['*']
  try {
    ck = f.href
  } catch (cy) {
    ;(ck = e.createElement('a')), (ck.href = ''), (ck = ck.href)
  }
  ;(cj = ct.exec(ck.toLowerCase()) || []),
    (p.fn.load = function(a, c, d) {
      if (typeof a != 'string' && cu) return cu.apply(this, arguments)
      if (!this.length) return this
      var e,
        f,
        g,
        h = this,
        i = a.indexOf(' ')
      return (
        i >= 0 && ((e = a.slice(i, a.length)), (a = a.slice(0, i))),
        p.isFunction(c) ? ((d = c), (c = b)) : c && typeof c == 'object' && (f = 'POST'),
        p
          .ajax({
            url: a,
            type: f,
            dataType: 'html',
            data: c,
            complete: function(a, b) {
              d && h.each(d, g || [a.responseText, b, a])
            }
          })
          .done(function(a) {
            ;(g = arguments),
              h.html(
                e
                  ? p('<div>')
                      .append(a.replace(cr, ''))
                      .find(e)
                  : a
              )
          }),
        this
      )
    }),
    p.each('ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend'.split(' '), function(
      a,
      b
    ) {
      p.fn[b] = function(a) {
        return this.on(b, a)
      }
    }),
    p.each(['get', 'post'], function(a, c) {
      p[c] = function(a, d, e, f) {
        return (
          p.isFunction(d) && ((f = f || e), (e = d), (d = b)),
          p.ajax({ type: c, url: a, data: d, success: e, dataType: f })
        )
      }
    }),
    p.extend({
      getScript: function(a, c) {
        return p.get(a, b, c, 'script')
      },
      getJSON: function(a, b, c) {
        return p.get(a, b, c, 'json')
      },
      ajaxSetup: function(a, b) {
        return b ? cB(a, p.ajaxSettings) : ((b = a), (a = p.ajaxSettings)), cB(a, b), a
      },
      ajaxSettings: {
        url: ck,
        isLocal: cn.test(cj[1]),
        global: !0,
        type: 'GET',
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        processData: !0,
        async: !0,
        accepts: {
          xml: 'application/xml, text/xml',
          html: 'text/html',
          text: 'text/plain',
          json: 'application/json, text/javascript',
          '*': cx
        },
        contents: { xml: /xml/, html: /html/, json: /json/ },
        responseFields: { xml: 'responseXML', text: 'responseText' },
        converters: {
          '* text': a.String,
          'text html': !0,
          'text json': p.parseJSON,
          'text xml': p.parseXML
        },
        flatOptions: { context: !0, url: !0 }
      },
      ajaxPrefilter: cz(cv),
      ajaxTransport: cz(cw),
      ajax: function(a, c) {
        function y(a, c, f, i) {
          var k,
            s,
            t,
            u,
            w,
            y = c
          if (v === 2) return
          ;(v = 2),
            h && clearTimeout(h),
            (g = b),
            (e = i || ''),
            (x.readyState = a > 0 ? 4 : 0),
            f && (u = cC(l, x, f))
          if ((a >= 200 && a < 300) || a === 304)
            l.ifModified &&
              ((w = x.getResponseHeader('Last-Modified')),
              w && (p.lastModified[d] = w),
              (w = x.getResponseHeader('Etag')),
              w && (p.etag[d] = w)),
              a === 304
                ? ((y = 'notmodified'), (k = !0))
                : ((k = cD(l, u)), (y = k.state), (s = k.data), (t = k.error), (k = !t))
          else {
            t = y
            if (!y || a) (y = 'error'), a < 0 && (a = 0)
          }
          ;(x.status = a),
            (x.statusText = (c || y) + ''),
            k ? o.resolveWith(m, [s, y, x]) : o.rejectWith(m, [x, y, t]),
            x.statusCode(r),
            (r = b),
            j && n.trigger('ajax' + (k ? 'Success' : 'Error'), [x, l, k ? s : t]),
            q.fireWith(m, [x, y]),
            j && (n.trigger('ajaxComplete', [x, l]), --p.active || p.event.trigger('ajaxStop'))
        }
        typeof a == 'object' && ((c = a), (a = b)), (c = c || {})
        var d,
          e,
          f,
          g,
          h,
          i,
          j,
          k,
          l = p.ajaxSetup({}, c),
          m = l.context || l,
          n = m !== l && (m.nodeType || m instanceof p) ? p(m) : p.event,
          o = p.Deferred(),
          q = p.Callbacks('once memory'),
          r = l.statusCode || {},
          t = {},
          u = {},
          v = 0,
          w = 'canceled',
          x = {
            readyState: 0,
            setRequestHeader: function(a, b) {
              if (!v) {
                var c = a.toLowerCase()
                ;(a = u[c] = u[c] || a), (t[a] = b)
              }
              return this
            },
            getAllResponseHeaders: function() {
              return v === 2 ? e : null
            },
            getResponseHeader: function(a) {
              var c
              if (v === 2) {
                if (!f) {
                  f = {}
                  while ((c = cm.exec(e))) f[c[1].toLowerCase()] = c[2]
                }
                c = f[a.toLowerCase()]
              }
              return c === b ? null : c
            },
            overrideMimeType: function(a) {
              return v || (l.mimeType = a), this
            },
            abort: function(a) {
              return (a = a || w), g && g.abort(a), y(0, a), this
            }
          }
        o.promise(x),
          (x.success = x.done),
          (x.error = x.fail),
          (x.complete = q.add),
          (x.statusCode = function(a) {
            if (a) {
              var b
              if (v < 2) for (b in a) r[b] = [r[b], a[b]]
              else (b = a[x.status]), x.always(b)
            }
            return this
          }),
          (l.url = ((a || l.url) + '').replace(cl, '').replace(cp, cj[1] + '//')),
          (l.dataTypes = p
            .trim(l.dataType || '*')
            .toLowerCase()
            .split(s)),
          l.crossDomain == null &&
            ((i = ct.exec(l.url.toLowerCase()) || !1),
            (l.crossDomain =
              i &&
              i.join(':') + (i[3] ? '' : i[1] === 'http:' ? 80 : 443) !==
                cj.join(':') + (cj[3] ? '' : cj[1] === 'http:' ? 80 : 443))),
          l.data &&
            l.processData &&
            typeof l.data != 'string' &&
            (l.data = p.param(l.data, l.traditional)),
          cA(cv, l, c, x)
        if (v === 2) return x
        ;(j = l.global),
          (l.type = l.type.toUpperCase()),
          (l.hasContent = !co.test(l.type)),
          j && p.active++ === 0 && p.event.trigger('ajaxStart')
        if (!l.hasContent) {
          l.data && ((l.url += (cq.test(l.url) ? '&' : '?') + l.data), delete l.data), (d = l.url)
          if (l.cache === !1) {
            var z = p.now(),
              A = l.url.replace(cs, '$1_=' + z)
            l.url = A + (A === l.url ? (cq.test(l.url) ? '&' : '?') + '_=' + z : '')
          }
        }
        ;((l.data && l.hasContent && l.contentType !== !1) || c.contentType) &&
          x.setRequestHeader('Content-Type', l.contentType),
          l.ifModified &&
            ((d = d || l.url),
            p.lastModified[d] && x.setRequestHeader('If-Modified-Since', p.lastModified[d]),
            p.etag[d] && x.setRequestHeader('If-None-Match', p.etag[d])),
          x.setRequestHeader(
            'Accept',
            l.dataTypes[0] && l.accepts[l.dataTypes[0]]
              ? l.accepts[l.dataTypes[0]] + (l.dataTypes[0] !== '*' ? ', ' + cx + '; q=0.01' : '')
              : l.accepts['*']
          )
        for (k in l.headers) x.setRequestHeader(k, l.headers[k])
        if (!l.beforeSend || (l.beforeSend.call(m, x, l) !== !1 && v !== 2)) {
          w = 'abort'
          for (k in { success: 1, error: 1, complete: 1 }) x[k](l[k])
          g = cA(cw, l, c, x)
          if (!g) y(-1, 'No Transport')
          else {
            ;(x.readyState = 1),
              j && n.trigger('ajaxSend', [x, l]),
              l.async &&
                l.timeout > 0 &&
                (h = setTimeout(function() {
                  x.abort('timeout')
                }, l.timeout))
            try {
              ;(v = 1), g.send(t, y)
            } catch (B) {
              if (v < 2) y(-1, B)
              else throw B
            }
          }
          return x
        }
        return x.abort()
      },
      active: 0,
      lastModified: {},
      etag: {}
    })
  var cE = [],
    cF = /\?/,
    cG = /(=)\?(?=&|$)|\?\?/,
    cH = p.now()
  p.ajaxSetup({
    jsonp: 'callback',
    jsonpCallback: function() {
      var a = cE.pop() || p.expando + '_' + cH++
      return (this[a] = !0), a
    }
  }),
    p.ajaxPrefilter('json jsonp', function(c, d, e) {
      var f,
        g,
        h,
        i = c.data,
        j = c.url,
        k = c.jsonp !== !1,
        l = k && cG.test(j),
        m =
          k &&
          !l &&
          typeof i == 'string' &&
          !(c.contentType || '').indexOf('application/x-www-form-urlencoded') &&
          cG.test(i)
      if (c.dataTypes[0] === 'jsonp' || l || m)
        return (
          (f = c.jsonpCallback = p.isFunction(c.jsonpCallback)
            ? c.jsonpCallback()
            : c.jsonpCallback),
          (g = a[f]),
          l
            ? (c.url = j.replace(cG, '$1' + f))
            : m
            ? (c.data = i.replace(cG, '$1' + f))
            : k && (c.url += (cF.test(j) ? '&' : '?') + c.jsonp + '=' + f),
          (c.converters['script json'] = function() {
            return h || p.error(f + ' was not called'), h[0]
          }),
          (c.dataTypes[0] = 'json'),
          (a[f] = function() {
            h = arguments
          }),
          e.always(function() {
            ;(a[f] = g),
              c[f] && ((c.jsonpCallback = d.jsonpCallback), cE.push(f)),
              h && p.isFunction(g) && g(h[0]),
              (h = g = b)
          }),
          'script'
        )
    }),
    p.ajaxSetup({
      accepts: {
        script:
          'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript'
      },
      contents: { script: /javascript|ecmascript/ },
      converters: {
        'text script': function(a) {
          return p.globalEval(a), a
        }
      }
    }),
    p.ajaxPrefilter('script', function(a) {
      a.cache === b && (a.cache = !1), a.crossDomain && ((a.type = 'GET'), (a.global = !1))
    }),
    p.ajaxTransport('script', function(a) {
      if (a.crossDomain) {
        var c,
          d = e.head || e.getElementsByTagName('head')[0] || e.documentElement
        return {
          send: function(f, g) {
            ;(c = e.createElement('script')),
              (c.async = 'async'),
              a.scriptCharset && (c.charset = a.scriptCharset),
              (c.src = a.url),
              (c.onload = c.onreadystatechange = function(a, e) {
                if (e || !c.readyState || /loaded|complete/.test(c.readyState))
                  (c.onload = c.onreadystatechange = null),
                    d && c.parentNode && d.removeChild(c),
                    (c = b),
                    e || g(200, 'success')
              }),
              d.insertBefore(c, d.firstChild)
          },
          abort: function() {
            c && c.onload(0, 1)
          }
        }
      }
    })
  var cI,
    cJ = a.ActiveXObject
      ? function() {
          for (var a in cI) cI[a](0, 1)
        }
      : !1,
    cK = 0
  ;(p.ajaxSettings.xhr = a.ActiveXObject
    ? function() {
        return (!this.isLocal && cL()) || cM()
      }
    : cL),
    (function(a) {
      p.extend(p.support, { ajax: !!a, cors: !!a && 'withCredentials' in a })
    })(p.ajaxSettings.xhr()),
    p.support.ajax &&
      p.ajaxTransport(function(c) {
        if (!c.crossDomain || p.support.cors) {
          var d
          return {
            send: function(e, f) {
              var g,
                h,
                i = c.xhr()
              c.username
                ? i.open(c.type, c.url, c.async, c.username, c.password)
                : i.open(c.type, c.url, c.async)
              if (c.xhrFields) for (h in c.xhrFields) i[h] = c.xhrFields[h]
              c.mimeType && i.overrideMimeType && i.overrideMimeType(c.mimeType),
                !c.crossDomain &&
                  !e['X-Requested-With'] &&
                  (e['X-Requested-With'] = 'XMLHttpRequest')
              try {
                for (h in e) i.setRequestHeader(h, e[h])
              } catch (j) {}
              i.send((c.hasContent && c.data) || null),
                (d = function(a, e) {
                  var h, j, k, l, m
                  try {
                    if (d && (e || i.readyState === 4)) {
                      ;(d = b), g && ((i.onreadystatechange = p.noop), cJ && delete cI[g])
                      if (e) i.readyState !== 4 && i.abort()
                      else {
                        ;(h = i.status),
                          (k = i.getAllResponseHeaders()),
                          (l = {}),
                          (m = i.responseXML),
                          m && m.documentElement && (l.xml = m)
                        try {
                          l.text = i.responseText
                        } catch (a) {}
                        try {
                          j = i.statusText
                        } catch (n) {
                          j = ''
                        }
                        !h && c.isLocal && !c.crossDomain
                          ? (h = l.text ? 200 : 404)
                          : h === 1223 && (h = 204)
                      }
                    }
                  } catch (o) {
                    e || f(-1, o)
                  }
                  l && f(h, j, l, k)
                }),
                c.async
                  ? i.readyState === 4
                    ? setTimeout(d, 0)
                    : ((g = ++cK),
                      cJ && (cI || ((cI = {}), p(a).unload(cJ)), (cI[g] = d)),
                      (i.onreadystatechange = d))
                  : d()
            },
            abort: function() {
              d && d(0, 1)
            }
          }
        }
      })
  var cN,
    cO,
    cP = /^(?:toggle|show|hide)$/,
    cQ = new RegExp('^(?:([-+])=|)(' + q + ')([a-z%]*)$', 'i'),
    cR = /queueHooks$/,
    cS = [cY],
    cT = {
      '*': [
        function(a, b) {
          var c,
            d,
            e = this.createTween(a, b),
            f = cQ.exec(b),
            g = e.cur(),
            h = +g || 0,
            i = 1,
            j = 20
          if (f) {
            ;(c = +f[2]), (d = f[3] || (p.cssNumber[a] ? '' : 'px'))
            if (d !== 'px' && h) {
              h = p.css(e.elem, a, !0) || c || 1
              do (i = i || '.5'), (h = h / i), p.style(e.elem, a, h + d)
              while (i !== (i = e.cur() / g) && i !== 1 && --j)
            }
            ;(e.unit = d), (e.start = h), (e.end = f[1] ? h + (f[1] + 1) * c : c)
          }
          return e
        }
      ]
    }
  ;(p.Animation = p.extend(cW, {
    tweener: function(a, b) {
      p.isFunction(a) ? ((b = a), (a = ['*'])) : (a = a.split(' '))
      var c,
        d = 0,
        e = a.length
      for (; d < e; d++) (c = a[d]), (cT[c] = cT[c] || []), cT[c].unshift(b)
    },
    prefilter: function(a, b) {
      b ? cS.unshift(a) : cS.push(a)
    }
  })),
    (p.Tween = cZ),
    (cZ.prototype = {
      constructor: cZ,
      init: function(a, b, c, d, e, f) {
        ;(this.elem = a),
          (this.prop = c),
          (this.easing = e || 'swing'),
          (this.options = b),
          (this.start = this.now = this.cur()),
          (this.end = d),
          (this.unit = f || (p.cssNumber[c] ? '' : 'px'))
      },
      cur: function() {
        var a = cZ.propHooks[this.prop]
        return a && a.get ? a.get(this) : cZ.propHooks._default.get(this)
      },
      run: function(a) {
        var b,
          c = cZ.propHooks[this.prop]
        return (
          this.options.duration
            ? (this.pos = b = p.easing[this.easing](
                a,
                this.options.duration * a,
                0,
                1,
                this.options.duration
              ))
            : (this.pos = b = a),
          (this.now = (this.end - this.start) * b + this.start),
          this.options.step && this.options.step.call(this.elem, this.now, this),
          c && c.set ? c.set(this) : cZ.propHooks._default.set(this),
          this
        )
      }
    }),
    (cZ.prototype.init.prototype = cZ.prototype),
    (cZ.propHooks = {
      _default: {
        get: function(a) {
          var b
          return a.elem[a.prop] == null || (!!a.elem.style && a.elem.style[a.prop] != null)
            ? ((b = p.css(a.elem, a.prop, !1, '')), !b || b === 'auto' ? 0 : b)
            : a.elem[a.prop]
        },
        set: function(a) {
          p.fx.step[a.prop]
            ? p.fx.step[a.prop](a)
            : a.elem.style && (a.elem.style[p.cssProps[a.prop]] != null || p.cssHooks[a.prop])
            ? p.style(a.elem, a.prop, a.now + a.unit)
            : (a.elem[a.prop] = a.now)
        }
      }
    }),
    (cZ.propHooks.scrollTop = cZ.propHooks.scrollLeft = {
      set: function(a) {
        a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
      }
    }),
    p.each(['toggle', 'show', 'hide'], function(a, b) {
      var c = p.fn[b]
      p.fn[b] = function(d, e, f) {
        return d == null || typeof d == 'boolean' || (!a && p.isFunction(d) && p.isFunction(e))
          ? c.apply(this, arguments)
          : this.animate(c$(b, !0), d, e, f)
      }
    }),
    p.fn.extend({
      fadeTo: function(a, b, c, d) {
        return this.filter(bZ)
          .css('opacity', 0)
          .show()
          .end()
          .animate({ opacity: b }, a, c, d)
      },
      animate: function(a, b, c, d) {
        var e = p.isEmptyObject(a),
          f = p.speed(b, c, d),
          g = function() {
            var b = cW(this, p.extend({}, a), f)
            e && b.stop(!0)
          }
        return e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
      },
      stop: function(a, c, d) {
        var e = function(a) {
          var b = a.stop
          delete a.stop, b(d)
        }
        return (
          typeof a != 'string' && ((d = c), (c = a), (a = b)),
          c && a !== !1 && this.queue(a || 'fx', []),
          this.each(function() {
            var b = !0,
              c = a != null && a + 'queueHooks',
              f = p.timers,
              g = p._data(this)
            if (c) g[c] && g[c].stop && e(g[c])
            else for (c in g) g[c] && g[c].stop && cR.test(c) && e(g[c])
            for (c = f.length; c--; )
              f[c].elem === this &&
                (a == null || f[c].queue === a) &&
                (f[c].anim.stop(d), (b = !1), f.splice(c, 1))
            ;(b || !d) && p.dequeue(this, a)
          })
        )
      }
    }),
    p.each(
      {
        slideDown: c$('show'),
        slideUp: c$('hide'),
        slideToggle: c$('toggle'),
        fadeIn: { opacity: 'show' },
        fadeOut: { opacity: 'hide' },
        fadeToggle: { opacity: 'toggle' }
      },
      function(a, b) {
        p.fn[a] = function(a, c, d) {
          return this.animate(b, a, c, d)
        }
      }
    ),
    (p.speed = function(a, b, c) {
      var d =
        a && typeof a == 'object'
          ? p.extend({}, a)
          : {
              complete: c || (!c && b) || (p.isFunction(a) && a),
              duration: a,
              easing: (c && b) || (b && !p.isFunction(b) && b)
            }
      d.duration = p.fx.off
        ? 0
        : typeof d.duration == 'number'
        ? d.duration
        : d.duration in p.fx.speeds
        ? p.fx.speeds[d.duration]
        : p.fx.speeds._default
      if (d.queue == null || d.queue === !0) d.queue = 'fx'
      return (
        (d.old = d.complete),
        (d.complete = function() {
          p.isFunction(d.old) && d.old.call(this), d.queue && p.dequeue(this, d.queue)
        }),
        d
      )
    }),
    (p.easing = {
      linear: function(a) {
        return a
      },
      swing: function(a) {
        return 0.5 - Math.cos(a * Math.PI) / 2
      }
    }),
    (p.timers = []),
    (p.fx = cZ.prototype.init),
    (p.fx.tick = function() {
      var a,
        b = p.timers,
        c = 0
      for (; c < b.length; c++) (a = b[c]), !a() && b[c] === a && b.splice(c--, 1)
      b.length || p.fx.stop()
    }),
    (p.fx.timer = function(a) {
      a() && p.timers.push(a) && !cO && (cO = setInterval(p.fx.tick, p.fx.interval))
    }),
    (p.fx.interval = 13),
    (p.fx.stop = function() {
      clearInterval(cO), (cO = null)
    }),
    (p.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (p.fx.step = {}),
    p.expr &&
      p.expr.filters &&
      (p.expr.filters.animated = function(a) {
        return p.grep(p.timers, function(b) {
          return a === b.elem
        }).length
      })
  var c_ = /^(?:body|html)$/i
  ;(p.fn.offset = function(a) {
    if (arguments.length)
      return a === b
        ? this
        : this.each(function(b) {
            p.offset.setOffset(this, a, b)
          })
    var c,
      d,
      e,
      f,
      g,
      h,
      i,
      j = { top: 0, left: 0 },
      k = this[0],
      l = k && k.ownerDocument
    if (!l) return
    return (d = l.body) === k
      ? p.offset.bodyOffset(k)
      : ((c = l.documentElement),
        p.contains(c, k)
          ? (typeof k.getBoundingClientRect != 'undefined' && (j = k.getBoundingClientRect()),
            (e = da(l)),
            (f = c.clientTop || d.clientTop || 0),
            (g = c.clientLeft || d.clientLeft || 0),
            (h = e.pageYOffset || c.scrollTop),
            (i = e.pageXOffset || c.scrollLeft),
            { top: j.top + h - f, left: j.left + i - g })
          : j)
  }),
    (p.offset = {
      bodyOffset: function(a) {
        var b = a.offsetTop,
          c = a.offsetLeft
        return (
          p.support.doesNotIncludeMarginInBodyOffset &&
            ((b += parseFloat(p.css(a, 'marginTop')) || 0),
            (c += parseFloat(p.css(a, 'marginLeft')) || 0)),
          { top: b, left: c }
        )
      },
      setOffset: function(a, b, c) {
        var d = p.css(a, 'position')
        d === 'static' && (a.style.position = 'relative')
        var e = p(a),
          f = e.offset(),
          g = p.css(a, 'top'),
          h = p.css(a, 'left'),
          i = (d === 'absolute' || d === 'fixed') && p.inArray('auto', [g, h]) > -1,
          j = {},
          k = {},
          l,
          m
        i
          ? ((k = e.position()), (l = k.top), (m = k.left))
          : ((l = parseFloat(g) || 0), (m = parseFloat(h) || 0)),
          p.isFunction(b) && (b = b.call(a, c, f)),
          b.top != null && (j.top = b.top - f.top + l),
          b.left != null && (j.left = b.left - f.left + m),
          'using' in b ? b.using.call(a, j) : e.css(j)
      }
    }),
    p.fn.extend({
      position: function() {
        if (!this[0]) return
        var a = this[0],
          b = this.offsetParent(),
          c = this.offset(),
          d = c_.test(b[0].nodeName) ? { top: 0, left: 0 } : b.offset()
        return (
          (c.top -= parseFloat(p.css(a, 'marginTop')) || 0),
          (c.left -= parseFloat(p.css(a, 'marginLeft')) || 0),
          (d.top += parseFloat(p.css(b[0], 'borderTopWidth')) || 0),
          (d.left += parseFloat(p.css(b[0], 'borderLeftWidth')) || 0),
          { top: c.top - d.top, left: c.left - d.left }
        )
      },
      offsetParent: function() {
        return this.map(function() {
          var a = this.offsetParent || e.body
          while (a && !c_.test(a.nodeName) && p.css(a, 'position') === 'static') a = a.offsetParent
          return a || e.body
        })
      }
    }),
    p.each({ scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' }, function(a, c) {
      var d = /Y/.test(c)
      p.fn[a] = function(e) {
        return p.access(
          this,
          function(a, e, f) {
            var g = da(a)
            if (f === b) return g ? (c in g ? g[c] : g.document.documentElement[e]) : a[e]
            g ? g.scrollTo(d ? p(g).scrollLeft() : f, d ? f : p(g).scrollTop()) : (a[e] = f)
          },
          a,
          e,
          arguments.length,
          null
        )
      }
    }),
    p.each({ Height: 'height', Width: 'width' }, function(a, c) {
      p.each({ padding: 'inner' + a, content: c, '': 'outer' + a }, function(d, e) {
        p.fn[e] = function(e, f) {
          var g = arguments.length && (d || typeof e != 'boolean'),
            h = d || (e === !0 || f === !0 ? 'margin' : 'border')
          return p.access(
            this,
            function(c, d, e) {
              var f
              return p.isWindow(c)
                ? c.document.documentElement['client' + a]
                : c.nodeType === 9
                ? ((f = c.documentElement),
                  Math.max(
                    c.body['scroll' + a],
                    f['scroll' + a],
                    c.body['offset' + a],
                    f['offset' + a],
                    f['client' + a]
                  ))
                : e === b
                ? p.css(c, d, e, h)
                : p.style(c, d, e, h)
            },
            c,
            g ? e : b,
            g,
            null
          )
        }
      })
    }),
    (a.jQuery = a.$ = p),
    typeof define == 'function' &&
      define.amd &&
      define.amd.jQuery &&
      define('jquery', [], function() {
        return p
      })
})(window)
/**
 * Bootstrap.js by @fat & @mdo
 * plugins: bootstrap-transition.js, bootstrap-modal.js, bootstrap-dropdown.js, bootstrap-scrollspy.js, bootstrap-tab.js, bootstrap-tooltip.js, bootstrap-popover.js, bootstrap-affix.js, bootstrap-alert.js, bootstrap-button.js, bootstrap-collapse.js, bootstrap-carousel.js, bootstrap-typeahead.js
 * Copyright 2012 Twitter, Inc.
 * http://www.apache.org/licenses/LICENSE-2.0.txt
 */
!(function(a) {
  a(function() {
    a.support.transition = (function() {
      var a = (function() {
        var a = document.createElement('bootstrap'),
          b = {
            WebkitTransition: 'webkitTransitionEnd',
            MozTransition: 'transitionend',
            OTransition: 'oTransitionEnd otransitionend',
            transition: 'transitionend'
          },
          c
        for (c in b) if (a.style[c] !== undefined) return b[c]
      })()
      return a && { end: a }
    })()
  })
})(window.jQuery),
  !(function(a) {
    var b = function(b, c) {
      ;(this.options = c),
        (this.$element = a(b).delegate(
          '[data-dismiss="modal"]',
          'click.dismiss.modal',
          a.proxy(this.hide, this)
        )),
        this.options.remote && this.$element.find('.modal-body').load(this.options.remote)
    }
    b.prototype = {
      constructor: b,
      toggle: function() {
        return this[this.isShown ? 'hide' : 'show']()
      },
      show: function() {
        var b = this,
          c = a.Event('show')
        this.$element.trigger(c)
        if (this.isShown || c.isDefaultPrevented()) return
        ;(this.isShown = !0),
          this.escape(),
          this.backdrop(function() {
            var c = a.support.transition && b.$element.hasClass('fade')
            b.$element.parent().length || b.$element.appendTo(document.body),
              b.$element.show(),
              c && b.$element[0].offsetWidth,
              b.$element.addClass('in').attr('aria-hidden', !1),
              b.enforceFocus(),
              c
                ? b.$element.one(a.support.transition.end, function() {
                    b.$element.focus().trigger('shown')
                  })
                : b.$element.focus().trigger('shown')
          })
      },
      hide: function(b) {
        b && b.preventDefault()
        var c = this
        ;(b = a.Event('hide')), this.$element.trigger(b)
        if (!this.isShown || b.isDefaultPrevented()) return
        ;(this.isShown = !1),
          this.escape(),
          a(document).off('focusin.modal'),
          this.$element.removeClass('in').attr('aria-hidden', !0),
          a.support.transition && this.$element.hasClass('fade')
            ? this.hideWithTransition()
            : this.hideModal()
      },
      enforceFocus: function() {
        var b = this
        a(document).on('focusin.modal', function(a) {
          b.$element[0] !== a.target && !b.$element.has(a.target).length && b.$element.focus()
        })
      },
      escape: function() {
        var a = this
        this.isShown && this.options.keyboard
          ? this.$element.on('keyup.dismiss.modal', function(b) {
              b.which == 27 && a.hide()
            })
          : this.isShown || this.$element.off('keyup.dismiss.modal')
      },
      hideWithTransition: function() {
        var b = this,
          c = setTimeout(function() {
            b.$element.off(a.support.transition.end), b.hideModal()
          }, 500)
        this.$element.one(a.support.transition.end, function() {
          clearTimeout(c), b.hideModal()
        })
      },
      hideModal: function() {
        var a = this
        this.$element.hide(),
          this.backdrop(function() {
            a.removeBackdrop(), a.$element.trigger('hidden')
          })
      },
      removeBackdrop: function() {
        this.$backdrop && this.$backdrop.remove(), (this.$backdrop = null)
      },
      backdrop: function(b) {
        var c = this,
          d = this.$element.hasClass('fade') ? 'fade' : ''
        if (this.isShown && this.options.backdrop) {
          var e = a.support.transition && d
          ;(this.$backdrop = a('<div class="modal-backdrop ' + d + '" />').appendTo(document.body)),
            this.$backdrop.click(
              this.options.backdrop == 'static'
                ? a.proxy(this.$element[0].focus, this.$element[0])
                : a.proxy(this.hide, this)
            ),
            e && this.$backdrop[0].offsetWidth,
            this.$backdrop.addClass('in')
          if (!b) return
          e ? this.$backdrop.one(a.support.transition.end, b) : b()
        } else
          !this.isShown && this.$backdrop
            ? (this.$backdrop.removeClass('in'),
              a.support.transition && this.$element.hasClass('fade')
                ? this.$backdrop.one(a.support.transition.end, b)
                : b())
            : b && b()
      }
    }
    var c = a.fn.modal
    ;(a.fn.modal = function(c) {
      return this.each(function() {
        var d = a(this),
          e = d.data('modal'),
          f = a.extend({}, a.fn.modal.defaults, d.data(), typeof c == 'object' && c)
        e || d.data('modal', (e = new b(this, f))),
          typeof c == 'string' ? e[c]() : f.show && e.show()
      })
    }),
      (a.fn.modal.defaults = { backdrop: !0, keyboard: !0, show: !0 }),
      (a.fn.modal.Constructor = b),
      (a.fn.modal.noConflict = function() {
        return (a.fn.modal = c), this
      }),
      a(document).on('click.modal.data-api', '[data-toggle="modal"]', function(b) {
        var c = a(this),
          d = c.attr('href'),
          e = a(c.attr('data-target') || (d && d.replace(/.*(?=#[^\s]+$)/, ''))),
          f = e.data('modal')
            ? 'toggle'
            : a.extend({ remote: !/#/.test(d) && d }, e.data(), c.data())
        b.preventDefault(),
          e.modal(f).one('hide', function() {
            c.focus()
          })
      })
  })(window.jQuery),
  !(function(a) {
    function d() {
      a(b).each(function() {
        e(a(this)).removeClass('open')
      })
    }
    function e(b) {
      var c = b.attr('data-target'),
        d
      c || ((c = b.attr('href')), (c = c && /#/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ''))),
        (d = c && a(c))
      if (!d || !d.length) d = b.parent()
      return d
    }
    var b = '[data-toggle=dropdown]',
      c = function(b) {
        var c = a(b).on('click.dropdown.data-api', this.toggle)
        a('html').on('click.dropdown.data-api', function() {
          c.parent().removeClass('open')
        })
      }
    c.prototype = {
      constructor: c,
      toggle: function(b) {
        var c = a(this),
          f,
          g
        if (c.is('.disabled, :disabled')) return
        return (f = e(c)), (g = f.hasClass('open')), d(), g || f.toggleClass('open'), c.focus(), !1
      },
      keydown: function(c) {
        var d, f, g, h, i, j
        if (!/(38|40|27)/.test(c.keyCode)) return
        ;(d = a(this)), c.preventDefault(), c.stopPropagation()
        if (d.is('.disabled, :disabled')) return
        ;(h = e(d)), (i = h.hasClass('open'))
        if (!i || (i && c.keyCode == 27)) return c.which == 27 && h.find(b).focus(), d.click()
        f = a('[role=menu] li:not(.divider):visible a', h)
        if (!f.length) return
        ;(j = f.index(f.filter(':focus'))),
          c.keyCode == 38 && j > 0 && j--,
          c.keyCode == 40 && j < f.length - 1 && j++,
          ~j || (j = 0),
          f.eq(j).focus()
      }
    }
    var f = a.fn.dropdown
    ;(a.fn.dropdown = function(b) {
      return this.each(function() {
        var d = a(this),
          e = d.data('dropdown')
        e || d.data('dropdown', (e = new c(this))), typeof b == 'string' && e[b].call(d)
      })
    }),
      (a.fn.dropdown.Constructor = c),
      (a.fn.dropdown.noConflict = function() {
        return (a.fn.dropdown = f), this
      }),
      a(document)
        .on('click.dropdown.data-api', d)
        .on('click.dropdown.data-api', '.dropdown form', function(a) {
          a.stopPropagation()
        })
        .on('click.dropdown-menu', function(a) {
          a.stopPropagation()
        })
        .on('click.dropdown.data-api', b, c.prototype.toggle)
        .on('keydown.dropdown.data-api', b + ', [role=menu]', c.prototype.keydown)
  })(window.jQuery),
  !(function(a) {
    function b(b, c) {
      var d = a.proxy(this.process, this),
        e = a(b).is('body') ? a(window) : a(b),
        f
      ;(this.options = a.extend({}, a.fn.scrollspy.defaults, c)),
        (this.$scrollElement = e.on('scroll.scroll-spy.data-api', d)),
        (this.selector =
          (this.options.target ||
            ((f = a(b).attr('href')) && f.replace(/.*(?=#[^\s]+$)/, '')) ||
            '') + ' .nav li > a'),
        (this.$body = a('body')),
        this.refresh(),
        this.process()
    }
    b.prototype = {
      constructor: b,
      refresh: function() {
        var b = this,
          c
        ;(this.offsets = a([])),
          (this.targets = a([])),
          (c = this.$body
            .find(this.selector)
            .map(function() {
              var c = a(this),
                d = c.data('target') || c.attr('href'),
                e = /^#\w/.test(d) && a(d)
              return (
                (e &&
                  e.length && [
                    [
                      e.position().top +
                        (!a.isWindow(b.$scrollElement.get(0)) && b.$scrollElement.scrollTop()),
                      d
                    ]
                  ]) ||
                null
              )
            })
            .sort(function(a, b) {
              return a[0] - b[0]
            })
            .each(function() {
              b.offsets.push(this[0]), b.targets.push(this[1])
            }))
      },
      process: function() {
        var a = this.$scrollElement.scrollTop() + this.options.offset,
          b = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight,
          c = b - this.$scrollElement.height(),
          d = this.offsets,
          e = this.targets,
          f = this.activeTarget,
          g
        if (a >= c) return f != (g = e.last()[0]) && this.activate(g)
        for (g = d.length; g--; )
          f != e[g] && a >= d[g] && (!d[g + 1] || a <= d[g + 1]) && this.activate(e[g])
      },
      activate: function(b) {
        var c, d
        ;(this.activeTarget = b),
          a(this.selector)
            .parent('.active')
            .removeClass('active'),
          (d = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]'),
          (c = a(d)
            .parent('li')
            .addClass('active')),
          c.parent('.dropdown-menu').length && (c = c.closest('li.dropdown').addClass('active')),
          c.trigger('activate')
      }
    }
    var c = a.fn.scrollspy
    ;(a.fn.scrollspy = function(c) {
      return this.each(function() {
        var d = a(this),
          e = d.data('scrollspy'),
          f = typeof c == 'object' && c
        e || d.data('scrollspy', (e = new b(this, f))), typeof c == 'string' && e[c]()
      })
    }),
      (a.fn.scrollspy.Constructor = b),
      (a.fn.scrollspy.defaults = { offset: 10 }),
      (a.fn.scrollspy.noConflict = function() {
        return (a.fn.scrollspy = c), this
      }),
      a(window).on('load', function() {
        a('[data-spy="scroll"]').each(function() {
          var b = a(this)
          b.scrollspy(b.data())
        })
      })
  })(window.jQuery),
  !(function(a) {
    var b = function(b) {
      this.element = a(b)
    }
    b.prototype = {
      constructor: b,
      show: function() {
        var b = this.element,
          c = b.closest('ul:not(.dropdown-menu)'),
          d = b.attr('data-target'),
          e,
          f,
          g
        d || ((d = b.attr('href')), (d = d && d.replace(/.*(?=#[^\s]*$)/, '')))
        if (b.parent('li').hasClass('active')) return
        ;(e = c.find('.active:last a')[0]),
          (g = a.Event('show', { relatedTarget: e })),
          b.trigger(g)
        if (g.isDefaultPrevented()) return
        ;(f = a(d)),
          this.activate(b.parent('li'), c),
          this.activate(f, f.parent(), function() {
            b.trigger({ type: 'shown', relatedTarget: e })
          })
      },
      activate: function(b, c, d) {
        function g() {
          e
            .removeClass('active')
            .find('> .dropdown-menu > .active')
            .removeClass('active'),
            b.addClass('active'),
            f ? (b[0].offsetWidth, b.addClass('in')) : b.removeClass('fade'),
            b.parent('.dropdown-menu') && b.closest('li.dropdown').addClass('active'),
            d && d()
        }
        var e = c.find('> .active'),
          f = d && a.support.transition && e.hasClass('fade')
        f ? e.one(a.support.transition.end, g) : g(), e.removeClass('in')
      }
    }
    var c = a.fn.tab
    ;(a.fn.tab = function(c) {
      return this.each(function() {
        var d = a(this),
          e = d.data('tab')
        e || d.data('tab', (e = new b(this))), typeof c == 'string' && e[c]()
      })
    }),
      (a.fn.tab.Constructor = b),
      (a.fn.tab.noConflict = function() {
        return (a.fn.tab = c), this
      }),
      a(document).on('click.tab.data-api', '[data-toggle="tab"], [data-toggle="pill"]', function(
        b
      ) {
        b.preventDefault(), a(this).tab('show')
      })
  })(window.jQuery),
  !(function(a) {
    var b = function(a, b) {
      this.init('tooltip', a, b)
    }
    b.prototype = {
      constructor: b,
      init: function(b, c, d) {
        var e, f, g, h, i
        ;(this.type = b),
          (this.$element = a(c)),
          (this.options = this.getOptions(d)),
          (this.enabled = !0),
          (g = this.options.trigger.split(' '))
        for (i = g.length; i--; )
          (h = g[i]),
            h == 'click'
              ? this.$element.on(
                  'click.' + this.type,
                  this.options.selector,
                  a.proxy(this.toggle, this)
                )
              : h != 'manual' &&
                ((e = h == 'hover' ? 'mouseenter' : 'focus'),
                (f = h == 'hover' ? 'mouseleave' : 'blur'),
                this.$element.on(
                  e + '.' + this.type,
                  this.options.selector,
                  a.proxy(this.enter, this)
                ),
                this.$element.on(
                  f + '.' + this.type,
                  this.options.selector,
                  a.proxy(this.leave, this)
                ))
        this.options.selector
          ? (this._options = a.extend({}, this.options, { trigger: 'manual', selector: '' }))
          : this.fixTitle()
      },
      getOptions: function(b) {
        return (
          (b = a.extend({}, a.fn[this.type].defaults, this.$element.data(), b)),
          b.delay && typeof b.delay == 'number' && (b.delay = { show: b.delay, hide: b.delay }),
          b
        )
      },
      enter: function(b) {
        var c = a.fn[this.type].defaults,
          d = {},
          e
        this._options &&
          a.each(
            this._options,
            function(a, b) {
              c[a] != b && (d[a] = b)
            },
            this
          ),
          (e = a(b.currentTarget)
            [this.type](d)
            .data(this.type))
        if (!e.options.delay || !e.options.delay.show) return e.show()
        clearTimeout(this.timeout),
          (e.hoverState = 'in'),
          (this.timeout = setTimeout(function() {
            e.hoverState == 'in' && e.show()
          }, e.options.delay.show))
      },
      leave: function(b) {
        var c = a(b.currentTarget)
          [this.type](this._options)
          .data(this.type)
        this.timeout && clearTimeout(this.timeout)
        if (!c.options.delay || !c.options.delay.hide) return c.hide()
        ;(c.hoverState = 'out'),
          (this.timeout = setTimeout(function() {
            c.hoverState == 'out' && c.hide()
          }, c.options.delay.hide))
      },
      show: function() {
        var b,
          c,
          d,
          e,
          f,
          g,
          h = a.Event('show')
        if (this.hasContent() && this.enabled) {
          this.$element.trigger(h)
          if (h.isDefaultPrevented()) return
          ;(b = this.tip()),
            this.setContent(),
            this.options.animation && b.addClass('fade'),
            (f =
              typeof this.options.placement == 'function'
                ? this.options.placement.call(this, b[0], this.$element[0])
                : this.options.placement),
            b.detach().css({ top: 0, left: 0, display: 'block' }),
            this.options.container
              ? b.appendTo(this.options.container)
              : b.insertAfter(this.$element),
            (c = this.getPosition()),
            (d = b[0].offsetWidth),
            (e = b[0].offsetHeight)
          switch (f) {
            case 'bottom':
              g = { top: c.top + c.height, left: c.left + c.width / 2 - d / 2 }
              break
            case 'top':
              g = { top: c.top - e, left: c.left + c.width / 2 - d / 2 }
              break
            case 'left':
              g = { top: c.top + c.height / 2 - e / 2, left: c.left - d }
              break
            case 'right':
              g = { top: c.top + c.height / 2 - e / 2, left: c.left + c.width }
          }
          this.applyPlacement(g, f), this.$element.trigger('shown')
        }
      },
      applyPlacement: function(a, b) {
        var c = this.tip(),
          d = c[0].offsetWidth,
          e = c[0].offsetHeight,
          f,
          g,
          h,
          i
        c
          .offset(a)
          .addClass(b)
          .addClass('in'),
          (f = c[0].offsetWidth),
          (g = c[0].offsetHeight),
          b == 'top' && g != e && ((a.top = a.top + e - g), (i = !0)),
          b == 'bottom' || b == 'top'
            ? ((h = 0),
              a.left < 0 &&
                ((h = a.left * -2),
                (a.left = 0),
                c.offset(a),
                (f = c[0].offsetWidth),
                (g = c[0].offsetHeight)),
              this.replaceArrow(h - d + f, f, 'left'))
            : this.replaceArrow(g - e, g, 'top'),
          i && c.offset(a)
      },
      replaceArrow: function(a, b, c) {
        this.arrow().css(c, a ? 50 * (1 - a / b) + '%' : '')
      },
      setContent: function() {
        var a = this.tip(),
          b = this.getTitle()
        a.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](b),
          a.removeClass('fade in top bottom left right')
      },
      hide: function() {
        function e() {
          var b = setTimeout(function() {
            c.off(a.support.transition.end).detach()
          }, 500)
          c.one(a.support.transition.end, function() {
            clearTimeout(b), c.detach()
          })
        }
        var b = this,
          c = this.tip(),
          d = a.Event('hide')
        this.$element.trigger(d)
        if (d.isDefaultPrevented()) return
        return (
          c.removeClass('in'),
          a.support.transition && this.$tip.hasClass('fade') ? e() : c.detach(),
          this.$element.trigger('hidden'),
          this
        )
      },
      fixTitle: function() {
        var a = this.$element
        ;(a.attr('title') || typeof a.attr('data-original-title') != 'string') &&
          a.attr('data-original-title', a.attr('title') || '').attr('title', '')
      },
      hasContent: function() {
        return this.getTitle()
      },
      getPosition: function() {
        var b = this.$element[0]
        return a.extend(
          {},
          typeof b.getBoundingClientRect == 'function'
            ? b.getBoundingClientRect()
            : { width: b.offsetWidth, height: b.offsetHeight },
          this.$element.offset()
        )
      },
      getTitle: function() {
        var a,
          b = this.$element,
          c = this.options
        return (
          (a =
            b.attr('data-original-title') ||
            (typeof c.title == 'function' ? c.title.call(b[0]) : c.title)),
          a
        )
      },
      tip: function() {
        return (this.$tip = this.$tip || a(this.options.template))
      },
      arrow: function() {
        return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'))
      },
      validate: function() {
        this.$element[0].parentNode || (this.hide(), (this.$element = null), (this.options = null))
      },
      enable: function() {
        this.enabled = !0
      },
      disable: function() {
        this.enabled = !1
      },
      toggleEnabled: function() {
        this.enabled = !this.enabled
      },
      toggle: function(b) {
        var c = b
          ? a(b.currentTarget)
              [this.type](this._options)
              .data(this.type)
          : this
        c.tip().hasClass('in') ? c.hide() : c.show()
      },
      destroy: function() {
        this.hide()
          .$element.off('.' + this.type)
          .removeData(this.type)
      }
    }
    var c = a.fn.tooltip
    ;(a.fn.tooltip = function(c) {
      return this.each(function() {
        var d = a(this),
          e = d.data('tooltip'),
          f = typeof c == 'object' && c
        e || d.data('tooltip', (e = new b(this, f))), typeof c == 'string' && e[c]()
      })
    }),
      (a.fn.tooltip.Constructor = b),
      (a.fn.tooltip.defaults = {
        animation: !0,
        placement: 'top',
        selector: !1,
        template:
          '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: 'hover focus',
        title: '',
        delay: 0,
        html: !1,
        container: !1
      }),
      (a.fn.tooltip.noConflict = function() {
        return (a.fn.tooltip = c), this
      })
  })(window.jQuery),
  !(function(a) {
    var b = function(a, b) {
      this.init('popover', a, b)
    }
    b.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype, {
      constructor: b,
      setContent: function() {
        var a = this.tip(),
          b = this.getTitle(),
          c = this.getContent()
        a.find('.popover-title')[this.options.html ? 'html' : 'text'](b),
          a.find('.popover-content')[this.options.html ? 'html' : 'text'](c),
          a.removeClass('fade top bottom left right in')
      },
      hasContent: function() {
        return this.getTitle() || this.getContent()
      },
      getContent: function() {
        var a,
          b = this.$element,
          c = this.options
        return (
          (a =
            (typeof c.content == 'function' ? c.content.call(b[0]) : c.content) ||
            b.attr('data-content')),
          a
        )
      },
      tip: function() {
        return this.$tip || (this.$tip = a(this.options.template)), this.$tip
      },
      destroy: function() {
        this.hide()
          .$element.off('.' + this.type)
          .removeData(this.type)
      }
    })
    var c = a.fn.popover
    ;(a.fn.popover = function(c) {
      return this.each(function() {
        var d = a(this),
          e = d.data('popover'),
          f = typeof c == 'object' && c
        e || d.data('popover', (e = new b(this, f))), typeof c == 'string' && e[c]()
      })
    }),
      (a.fn.popover.Constructor = b),
      (a.fn.popover.defaults = a.extend({}, a.fn.tooltip.defaults, {
        placement: 'right',
        trigger: 'click',
        content: '',
        template:
          '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
      })),
      (a.fn.popover.noConflict = function() {
        return (a.fn.popover = c), this
      })
  })(window.jQuery),
  !(function(a) {
    var b = function(b, c) {
      ;(this.options = a.extend({}, a.fn.affix.defaults, c)),
        (this.$window = a(window)
          .on('scroll.affix.data-api', a.proxy(this.checkPosition, this))
          .on(
            'click.affix.data-api',
            a.proxy(function() {
              setTimeout(a.proxy(this.checkPosition, this), 1)
            }, this)
          )),
        (this.$element = a(b)),
        this.checkPosition()
    }
    b.prototype.checkPosition = function() {
      if (!this.$element.is(':visible')) return
      var b = a(document).height(),
        c = this.$window.scrollTop(),
        d = this.$element.offset(),
        e = this.options.offset,
        f = e.bottom,
        g = e.top,
        h = 'affix affix-top affix-bottom',
        i
      typeof e != 'object' && (f = g = e),
        typeof g == 'function' && (g = e.top()),
        typeof f == 'function' && (f = e.bottom()),
        (i =
          this.unpin != null && c + this.unpin <= d.top
            ? !1
            : f != null && d.top + this.$element.height() >= b - f
            ? 'bottom'
            : g != null && c <= g
            ? 'top'
            : !1)
      if (this.affixed === i) return
      ;(this.affixed = i),
        (this.unpin = i == 'bottom' ? d.top - c : null),
        this.$element.removeClass(h).addClass('affix' + (i ? '-' + i : ''))
    }
    var c = a.fn.affix
    ;(a.fn.affix = function(c) {
      return this.each(function() {
        var d = a(this),
          e = d.data('affix'),
          f = typeof c == 'object' && c
        e || d.data('affix', (e = new b(this, f))), typeof c == 'string' && e[c]()
      })
    }),
      (a.fn.affix.Constructor = b),
      (a.fn.affix.defaults = { offset: 0 }),
      (a.fn.affix.noConflict = function() {
        return (a.fn.affix = c), this
      }),
      a(window).on('load', function() {
        a('[data-spy="affix"]').each(function() {
          var b = a(this),
            c = b.data()
          ;(c.offset = c.offset || {}),
            c.offsetBottom && (c.offset.bottom = c.offsetBottom),
            c.offsetTop && (c.offset.top = c.offsetTop),
            b.affix(c)
        })
      })
  })(window.jQuery),
  !(function(a) {
    var b = '[data-dismiss="alert"]',
      c = function(c) {
        a(c).on('click', b, this.close)
      }
    c.prototype.close = function(b) {
      function f() {
        e.trigger('closed').remove()
      }
      var c = a(this),
        d = c.attr('data-target'),
        e
      d || ((d = c.attr('href')), (d = d && d.replace(/.*(?=#[^\s]*$)/, ''))),
        (e = a(d)),
        b && b.preventDefault(),
        e.length || (e = c.hasClass('alert') ? c : c.parent()),
        e.trigger((b = a.Event('close')))
      if (b.isDefaultPrevented()) return
      e.removeClass('in'),
        a.support.transition && e.hasClass('fade') ? e.on(a.support.transition.end, f) : f()
    }
    var d = a.fn.alert
    ;(a.fn.alert = function(b) {
      return this.each(function() {
        var d = a(this),
          e = d.data('alert')
        e || d.data('alert', (e = new c(this))), typeof b == 'string' && e[b].call(d)
      })
    }),
      (a.fn.alert.Constructor = c),
      (a.fn.alert.noConflict = function() {
        return (a.fn.alert = d), this
      }),
      a(document).on('click.alert.data-api', b, c.prototype.close)
  })(window.jQuery),
  !(function(a) {
    var b = function(b, c) {
      ;(this.$element = a(b)), (this.options = a.extend({}, a.fn.button.defaults, c))
    }
    ;(b.prototype.setState = function(a) {
      var b = 'disabled',
        c = this.$element,
        d = c.data(),
        e = c.is('input') ? 'val' : 'html'
      ;(a += 'Text'),
        d.resetText || c.data('resetText', c[e]()),
        c[e](d[a] || this.options[a]),
        setTimeout(function() {
          a == 'loadingText' ? c.addClass(b).attr(b, b) : c.removeClass(b).removeAttr(b)
        }, 0)
    }),
      (b.prototype.toggle = function() {
        var a = this.$element.closest('[data-toggle="buttons-radio"]')
        a && a.find('.active').removeClass('active'), this.$element.toggleClass('active')
      })
    var c = a.fn.button
    ;(a.fn.button = function(c) {
      return this.each(function() {
        var d = a(this),
          e = d.data('button'),
          f = typeof c == 'object' && c
        e || d.data('button', (e = new b(this, f))), c == 'toggle' ? e.toggle() : c && e.setState(c)
      })
    }),
      (a.fn.button.defaults = { loadingText: 'loading...' }),
      (a.fn.button.Constructor = b),
      (a.fn.button.noConflict = function() {
        return (a.fn.button = c), this
      }),
      a(document).on('click.button.data-api', '[data-toggle^=button]', function(b) {
        var c = a(b.target)
        c.hasClass('btn') || (c = c.closest('.btn')), c.button('toggle')
      })
  })(window.jQuery),
  !(function(a) {
    var b = function(b, c) {
      ;(this.$element = a(b)),
        (this.options = a.extend({}, a.fn.collapse.defaults, c)),
        this.options.parent && (this.$parent = a(this.options.parent)),
        this.options.toggle && this.toggle()
    }
    b.prototype = {
      constructor: b,
      dimension: function() {
        var a = this.$element.hasClass('width')
        return a ? 'width' : 'height'
      },
      show: function() {
        var b, c, d, e
        if (this.transitioning || this.$element.hasClass('in')) return
        ;(b = this.dimension()),
          (c = a.camelCase(['scroll', b].join('-'))),
          (d = this.$parent && this.$parent.find('> .accordion-group > .in'))
        if (d && d.length) {
          e = d.data('collapse')
          if (e && e.transitioning) return
          d.collapse('hide'), e || d.data('collapse', null)
        }
        this.$element[b](0),
          this.transition('addClass', a.Event('show'), 'shown'),
          a.support.transition && this.$element[b](this.$element[0][c])
      },
      hide: function() {
        var b
        if (this.transitioning || !this.$element.hasClass('in')) return
        ;(b = this.dimension()),
          this.reset(this.$element[b]()),
          this.transition('removeClass', a.Event('hide'), 'hidden'),
          this.$element[b](0)
      },
      reset: function(a) {
        var b = this.dimension()
        return (
          this.$element.removeClass('collapse')[b](a || 'auto')[0].offsetWidth,
          this.$element[a !== null ? 'addClass' : 'removeClass']('collapse'),
          this
        )
      },
      transition: function(b, c, d) {
        var e = this,
          f = function() {
            c.type == 'show' && e.reset(), (e.transitioning = 0), e.$element.trigger(d)
          }
        this.$element.trigger(c)
        if (c.isDefaultPrevented()) return
        ;(this.transitioning = 1),
          this.$element[b]('in'),
          a.support.transition && this.$element.hasClass('collapse')
            ? this.$element.one(a.support.transition.end, f)
            : f()
      },
      toggle: function() {
        this[this.$element.hasClass('in') ? 'hide' : 'show']()
      }
    }
    var c = a.fn.collapse
    ;(a.fn.collapse = function(c) {
      return this.each(function() {
        var d = a(this),
          e = d.data('collapse'),
          f = a.extend({}, a.fn.collapse.defaults, d.data(), typeof c == 'object' && c)
        e || d.data('collapse', (e = new b(this, f))), typeof c == 'string' && e[c]()
      })
    }),
      (a.fn.collapse.defaults = { toggle: !0 }),
      (a.fn.collapse.Constructor = b),
      (a.fn.collapse.noConflict = function() {
        return (a.fn.collapse = c), this
      }),
      a(document).on('click.collapse.data-api', '[data-toggle=collapse]', function(b) {
        var c = a(this),
          d,
          e =
            c.attr('data-target') ||
            b.preventDefault() ||
            ((d = c.attr('href')) && d.replace(/.*(?=#[^\s]+$)/, '')),
          f = a(e).data('collapse') ? 'toggle' : c.data()
        c[a(e).hasClass('in') ? 'addClass' : 'removeClass']('collapsed'), a(e).collapse(f)
      })
  })(window.jQuery),
  !(function(a) {
    var b = function(b, c) {
      ;(this.$element = a(b)),
        (this.$indicators = this.$element.find('.carousel-indicators')),
        (this.options = c),
        this.options.pause == 'hover' &&
          this.$element
            .on('mouseenter', a.proxy(this.pause, this))
            .on('mouseleave', a.proxy(this.cycle, this))
    }
    b.prototype = {
      cycle: function(b) {
        return (
          b || (this.paused = !1),
          this.interval && clearInterval(this.interval),
          this.options.interval &&
            !this.paused &&
            (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)),
          this
        )
      },
      getActiveIndex: function() {
        return (
          (this.$active = this.$element.find('.item.active')),
          (this.$items = this.$active.parent().children()),
          this.$items.index(this.$active)
        )
      },
      to: function(b) {
        var c = this.getActiveIndex(),
          d = this
        if (b > this.$items.length - 1 || b < 0) return
        return this.sliding
          ? this.$element.one('slid', function() {
              d.to(b)
            })
          : c == b
          ? this.pause().cycle()
          : this.slide(b > c ? 'next' : 'prev', a(this.$items[b]))
      },
      pause: function(b) {
        return (
          b || (this.paused = !0),
          this.$element.find('.next, .prev').length &&
            a.support.transition.end &&
            (this.$element.trigger(a.support.transition.end), this.cycle(!0)),
          clearInterval(this.interval),
          (this.interval = null),
          this
        )
      },
      next: function() {
        if (this.sliding) return
        return this.slide('next')
      },
      prev: function() {
        if (this.sliding) return
        return this.slide('prev')
      },
      slide: function(b, c) {
        var d = this.$element.find('.item.active'),
          e = c || d[b](),
          f = this.interval,
          g = b == 'next' ? 'left' : 'right',
          h = b == 'next' ? 'first' : 'last',
          i = this,
          j
        ;(this.sliding = !0),
          f && this.pause(),
          (e = e.length ? e : this.$element.find('.item')[h]()),
          (j = a.Event('slide', { relatedTarget: e[0], direction: g }))
        if (e.hasClass('active')) return
        this.$indicators.length &&
          (this.$indicators.find('.active').removeClass('active'),
          this.$element.one('slid', function() {
            var b = a(i.$indicators.children()[i.getActiveIndex()])
            b && b.addClass('active')
          }))
        if (a.support.transition && this.$element.hasClass('slide')) {
          this.$element.trigger(j)
          if (j.isDefaultPrevented()) return
          e.addClass(b),
            e[0].offsetWidth,
            d.addClass(g),
            e.addClass(g),
            this.$element.one(a.support.transition.end, function() {
              e.removeClass([b, g].join(' ')).addClass('active'),
                d.removeClass(['active', g].join(' ')),
                (i.sliding = !1),
                setTimeout(function() {
                  i.$element.trigger('slid')
                }, 0)
            })
        } else {
          this.$element.trigger(j)
          if (j.isDefaultPrevented()) return
          d.removeClass('active'),
            e.addClass('active'),
            (this.sliding = !1),
            this.$element.trigger('slid')
        }
        return f && this.cycle(), this
      }
    }
    var c = a.fn.carousel
    ;(a.fn.carousel = function(c) {
      return this.each(function() {
        var d = a(this),
          e = d.data('carousel'),
          f = a.extend({}, a.fn.carousel.defaults, typeof c == 'object' && c),
          g = typeof c == 'string' ? c : f.slide
        e || d.data('carousel', (e = new b(this, f))),
          typeof c == 'number' ? e.to(c) : g ? e[g]() : f.interval && e.pause().cycle()
      })
    }),
      (a.fn.carousel.defaults = { interval: 5e3, pause: 'hover' }),
      (a.fn.carousel.Constructor = b),
      (a.fn.carousel.noConflict = function() {
        return (a.fn.carousel = c), this
      }),
      a(document).on('click.carousel.data-api', '[data-slide], [data-slide-to]', function(b) {
        var c = a(this),
          d,
          e = a(c.attr('data-target') || ((d = c.attr('href')) && d.replace(/.*(?=#[^\s]+$)/, ''))),
          f = a.extend({}, e.data(), c.data()),
          g
        e.carousel(f),
          (g = c.attr('data-slide-to')) &&
            e
              .data('carousel')
              .pause()
              .to(g)
              .cycle(),
          b.preventDefault()
      })
  })(window.jQuery),
  !(function(a) {
    var b = function(b, c) {
      ;(this.$element = a(b)),
        (this.options = a.extend({}, a.fn.typeahead.defaults, c)),
        (this.matcher = this.options.matcher || this.matcher),
        (this.sorter = this.options.sorter || this.sorter),
        (this.highlighter = this.options.highlighter || this.highlighter),
        (this.updater = this.options.updater || this.updater),
        (this.source = this.options.source),
        (this.$menu = a(this.options.menu)),
        (this.shown = !1),
        this.listen()
    }
    b.prototype = {
      constructor: b,
      select: function() {
        var a = this.$menu.find('.active').attr('data-value')
        return this.$element.val(this.updater(a)).change(), this.hide()
      },
      updater: function(a) {
        return a
      },
      show: function() {
        var b = a.extend({}, this.$element.position(), { height: this.$element[0].offsetHeight })
        return (
          this.$menu
            .insertAfter(this.$element)
            .css({ top: b.top + b.height, left: b.left })
            .show(),
          (this.shown = !0),
          this
        )
      },
      hide: function() {
        return this.$menu.hide(), (this.shown = !1), this
      },
      lookup: function(b) {
        var c
        return (
          (this.query = this.$element.val()),
          !this.query || this.query.length < this.options.minLength
            ? this.shown
              ? this.hide()
              : this
            : ((c = a.isFunction(this.source)
                ? this.source(this.query, a.proxy(this.process, this))
                : this.source),
              c ? this.process(c) : this)
        )
      },
      process: function(b) {
        var c = this
        return (
          (b = a.grep(b, function(a) {
            return c.matcher(a)
          })),
          (b = this.sorter(b)),
          b.length
            ? this.render(b.slice(0, this.options.items)).show()
            : this.shown
            ? this.hide()
            : this
        )
      },
      matcher: function(a) {
        return ~a.toLowerCase().indexOf(this.query.toLowerCase())
      },
      sorter: function(a) {
        var b = [],
          c = [],
          d = [],
          e
        while ((e = a.shift()))
          e.toLowerCase().indexOf(this.query.toLowerCase())
            ? ~e.indexOf(this.query)
              ? c.push(e)
              : d.push(e)
            : b.push(e)
        return b.concat(c, d)
      },
      highlighter: function(a) {
        var b = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&')
        return a.replace(new RegExp('(' + b + ')', 'ig'), function(a, b) {
          return '<strong>' + b + '</strong>'
        })
      },
      render: function(b) {
        var c = this
        return (
          (b = a(b).map(function(b, d) {
            return (
              (b = a(c.options.item).attr('data-value', d)),
              b.find('a').html(c.highlighter(d)),
              b[0]
            )
          })),
          b.first().addClass('active'),
          this.$menu.html(b),
          this
        )
      },
      next: function(b) {
        var c = this.$menu.find('.active').removeClass('active'),
          d = c.next()
        d.length || (d = a(this.$menu.find('li')[0])), d.addClass('active')
      },
      prev: function(a) {
        var b = this.$menu.find('.active').removeClass('active'),
          c = b.prev()
        c.length || (c = this.$menu.find('li').last()), c.addClass('active')
      },
      listen: function() {
        this.$element
          .on('focus', a.proxy(this.focus, this))
          .on('blur', a.proxy(this.blur, this))
          .on('keypress', a.proxy(this.keypress, this))
          .on('keyup', a.proxy(this.keyup, this)),
          this.eventSupported('keydown') &&
            this.$element.on('keydown', a.proxy(this.keydown, this)),
          this.$menu
            .on('click', a.proxy(this.click, this))
            .on('mouseenter', 'li', a.proxy(this.mouseenter, this))
            .on('mouseleave', 'li', a.proxy(this.mouseleave, this))
      },
      eventSupported: function(a) {
        var b = a in this.$element
        return (
          b ||
            (this.$element.setAttribute(a, 'return;'), (b = typeof this.$element[a] == 'function')),
          b
        )
      },
      move: function(a) {
        if (!this.shown) return
        switch (a.keyCode) {
          case 9:
          case 13:
          case 27:
            a.preventDefault()
            break
          case 38:
            a.preventDefault(), this.prev()
            break
          case 40:
            a.preventDefault(), this.next()
        }
        a.stopPropagation()
      },
      keydown: function(b) {
        ;(this.suppressKeyPressRepeat = ~a.inArray(b.keyCode, [40, 38, 9, 13, 27])), this.move(b)
      },
      keypress: function(a) {
        if (this.suppressKeyPressRepeat) return
        this.move(a)
      },
      keyup: function(a) {
        switch (a.keyCode) {
          case 40:
          case 38:
          case 16:
          case 17:
          case 18:
            break
          case 9:
          case 13:
            if (!this.shown) return
            this.select()
            break
          case 27:
            if (!this.shown) return
            this.hide()
            break
          default:
            this.lookup()
        }
        a.stopPropagation(), a.preventDefault()
      },
      focus: function(a) {
        this.focused = !0
      },
      blur: function(a) {
        ;(this.focused = !1), !this.mousedover && this.shown && this.hide()
      },
      click: function(a) {
        a.stopPropagation(), a.preventDefault(), this.select(), this.$element.focus()
      },
      mouseenter: function(b) {
        ;(this.mousedover = !0),
          this.$menu.find('.active').removeClass('active'),
          a(b.currentTarget).addClass('active')
      },
      mouseleave: function(a) {
        ;(this.mousedover = !1), !this.focused && this.shown && this.hide()
      }
    }
    var c = a.fn.typeahead
    ;(a.fn.typeahead = function(c) {
      return this.each(function() {
        var d = a(this),
          e = d.data('typeahead'),
          f = typeof c == 'object' && c
        e || d.data('typeahead', (e = new b(this, f))), typeof c == 'string' && e[c]()
      })
    }),
      (a.fn.typeahead.defaults = {
        source: [],
        items: 8,
        menu: '<ul class="typeahead dropdown-menu"></ul>',
        item: '<li><a href="#"></a></li>',
        minLength: 1
      }),
      (a.fn.typeahead.Constructor = b),
      (a.fn.typeahead.noConflict = function() {
        return (a.fn.typeahead = c), this
      }),
      a(document).on('focus.typeahead.data-api', '[data-provide="typeahead"]', function(b) {
        var c = a(this)
        if (c.data('typeahead')) return
        c.typeahead(c.data())
      })
  })(window.jQuery)
/**
 * Parse JavaScript SDK v1.6.0
 *
 * Copyright (c) 2015-present, Parse, LLC.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
!(function(e) {
  if ('object' == typeof exports && 'undefined' != typeof module) module.exports = e()
  else if ('function' == typeof define && define.amd) define([], e)
  else {
    var t
    ;(t =
      'undefined' != typeof window
        ? window
        : 'undefined' != typeof global
        ? global
        : 'undefined' != typeof self
        ? self
        : this),
      (t.Parse = e())
  }
})(function() {
  return (function e(t, r, n) {
    function a(o, i) {
      if (!r[o]) {
        if (!t[o]) {
          var u = 'function' == typeof require && require
          if (!i && u) return u(o, !0)
          if (s) return s(o, !0)
          var l = new Error("Cannot find module '" + o + "'")
          throw ((l.code = 'MODULE_NOT_FOUND'), l)
        }
        var c = (r[o] = { exports: {} })
        t[o][0].call(
          c.exports,
          function(e) {
            var r = t[o][1][e]
            return a(r ? r : e)
          },
          c,
          c.exports,
          e,
          t,
          r,
          n
        )
      }
      return r[o].exports
    }
    for (var s = 'function' == typeof require && require, o = 0; o < n.length; o++) a(n[o])
    return a
  })(
    {
      1: [
        function(e, t, r) {
          'use strict'
          function n(e, t, r) {
            if (
              ((e = e || ''),
              (e = e.replace(/^\s*/, '')),
              (e = e.replace(/\s*$/, '')),
              0 === e.length)
            )
              throw new TypeError('A name for the custom event must be provided')
            for (var n in t)
              if ('string' != typeof n || 'string' != typeof t[n])
                throw new TypeError('track() dimensions expects keys and values of type "string".')
            return (
              (r = r || {}),
              o['default']
                .getAnalyticsController()
                .track(e, t)
                ._thenRunCallbacks(r)
            )
          }
          var a = e('babel-runtime/helpers/interop-require-default')['default']
          Object.defineProperty(r, '__esModule', { value: !0 }), (r.track = n)
          var s = e('./CoreManager'),
            o = a(s)
          o['default'].setAnalyticsController({
            track: function(e, t) {
              var r = o['default'].getRESTController()
              return r.request('POST', 'events/' + e, { dimensions: t })
            }
          })
        },
        { './CoreManager': 3, 'babel-runtime/helpers/interop-require-default': 47 }
      ],
      2: [
        function(e, t, r) {
          'use strict'
          function n(e, t, r) {
            if (((r = r || {}), 'string' != typeof e || 0 === e.length))
              throw new TypeError('Cloud function name must be a string.')
            return o['default']
              .getCloudController()
              .run(e, t, { useMasterKey: r.useMasterKey })
              ._thenRunCallbacks(r)
          }
          var a = e('babel-runtime/helpers/interop-require-default')['default']
          Object.defineProperty(r, '__esModule', { value: !0 }), (r.run = n)
          var s = e('./CoreManager'),
            o = a(s),
            i = e('./decode'),
            u = a(i),
            l = e('./encode'),
            c = a(l),
            f = e('./ParseError'),
            d = a(f),
            h = e('./ParsePromise'),
            p = a(h)
          o['default'].setCloudController({
            run: function(e, t, r) {
              var n = o['default'].getRESTController(),
                a = c['default'](t, !0),
                s = n.request('POST', 'functions/' + e, a, { useMasterKey: !!r.useMasterKey })
              return s
                .then(function(e) {
                  var t = u['default'](e)
                  return t && t.hasOwnProperty('result')
                    ? p['default'].as(t.result)
                    : p['default'].error(
                        new d['default'](
                          d['default'].INVALID_JSON,
                          'The server returned an invalid response.'
                        )
                      )
                })
                ._thenRunCallbacks(r)
            }
          })
        },
        {
          './CoreManager': 3,
          './ParseError': 10,
          './ParsePromise': 16,
          './decode': 29,
          './encode': 30,
          'babel-runtime/helpers/interop-require-default': 47
        }
      ],
      3: [
        function(e, t, r) {
          ;(function(e) {
            'use strict'
            var r = {
              IS_NODE: 'undefined' != typeof e && !!e.versions && !!e.versions.node,
              REQUEST_ATTEMPT_LIMIT: 5,
              SERVER_URL: 'https://api.parse.com',
              VERSION: { version: '1.6.0' }.version,
              APPLICATION_ID: null,
              JAVASCRIPT_KEY: null,
              MASTER_KEY: null,
              USE_MASTER_KEY: !1,
              PERFORM_USER_REWRITE: !0,
              FORCE_REVOCABLE_SESSION: !1
            }
            t.exports = {
              get: function(e) {
                if (r.hasOwnProperty(e)) return r[e]
                throw new Error('Configuration key not found: ' + e)
              },
              set: function(e, t) {
                r[e] = t
              },
              setAnalyticsController: function(e) {
                if ('function' != typeof e.track)
                  throw new Error('AnalyticsController must implement track()')
                r.AnalyticsController = e
              },
              getAnalyticsController: function() {
                return r.AnalyticsController
              },
              setCloudController: function(e) {
                if ('function' != typeof e.run)
                  throw new Error('CloudController must implement run()')
                r.CloudController = e
              },
              getCloudController: function() {
                return r.CloudController
              },
              setConfigController: function(e) {
                if ('function' != typeof e.current)
                  throw new Error('ConfigController must implement current()')
                if ('function' != typeof e.get)
                  throw new Error('ConfigController must implement get()')
                r.ConfigController = e
              },
              getConfigController: function() {
                return r.ConfigController
              },
              setFileController: function(e) {
                if ('function' != typeof e.saveFile)
                  throw new Error('FileController must implement saveFile()')
                if ('function' != typeof e.saveBase64)
                  throw new Error('FileController must implement saveBase64()')
                r.FileController = e
              },
              getFileController: function() {
                return r.FileController
              },
              setInstallationController: function(e) {
                if ('function' != typeof e.currentInstallationId)
                  throw new Error('InstallationController must implement currentInstallationId()')
                r.InstallationController = e
              },
              getInstallationController: function() {
                return r.InstallationController
              },
              setPushController: function(e) {
                if ('function' != typeof e.send)
                  throw new Error('PushController must implement send()')
                r.PushController = e
              },
              getPushController: function() {
                return r.PushController
              },
              setObjectController: function(e) {
                if ('function' != typeof e.save)
                  throw new Error('ObjectController must implement save()')
                if ('function' != typeof e.fetch)
                  throw new Error('ObjectController must implement fetch()')
                if ('function' != typeof e.destroy)
                  throw new Error('ObjectController must implement destroy()')
                r.ObjectController = e
              },
              getObjectController: function() {
                return r.ObjectController
              },
              setQueryController: function(e) {
                if ('function' != typeof e.find)
                  throw new Error('QueryController must implement find()')
                r.QueryController = e
              },
              getQueryController: function() {
                return r.QueryController
              },
              setRESTController: function(e) {
                if ('function' != typeof e.request)
                  throw new Error('RESTController must implement request()')
                if ('function' != typeof e.ajax)
                  throw new Error('RESTController must implement ajax()')
                r.RESTController = e
              },
              getRESTController: function() {
                return r.RESTController
              },
              setSessionController: function(e) {
                if ('function' != typeof e.getSession)
                  throw new Error('A SessionController must implement getSession()')
                r.SessionController = e
              },
              getSessionController: function() {
                return r.SessionController
              },
              setStorageController: function(e) {
                if (e.async) {
                  if ('function' != typeof e.getItemAsync)
                    throw new Error('An async StorageController must implement getItemAsync()')
                  if ('function' != typeof e.setItemAsync)
                    throw new Error('An async StorageController must implement setItemAsync()')
                  if ('function' != typeof e.removeItemAsync)
                    throw new Error('An async StorageController must implement removeItemAsync()')
                } else {
                  if ('function' != typeof e.getItem)
                    throw new Error('A synchronous StorageController must implement getItem()')
                  if ('function' != typeof e.setItem)
                    throw new Error('A synchronous StorageController must implement setItem()')
                  if ('function' != typeof e.removeItem)
                    throw new Error('A synchonous StorageController must implement removeItem()')
                }
                r.StorageController = e
              },
              getStorageController: function() {
                return r.StorageController
              },
              setUserController: function(e) {
                if ('function' != typeof e.setCurrentUser)
                  throw new Error('A UserController must implement setCurrentUser()')
                if ('function' != typeof e.currentUser)
                  throw new Error('A UserController must implement currentUser()')
                if ('function' != typeof e.currentUserAsync)
                  throw new Error('A UserController must implement currentUserAsync()')
                if ('function' != typeof e.signUp)
                  throw new Error('A UserController must implement signUp()')
                if ('function' != typeof e.logIn)
                  throw new Error('A UserController must implement logIn()')
                if ('function' != typeof e.become)
                  throw new Error('A UserController must implement become()')
                if ('function' != typeof e.logOut)
                  throw new Error('A UserController must implement logOut()')
                if ('function' != typeof e.requestPasswordReset)
                  throw new Error('A UserController must implement requestPasswordReset()')
                if ('function' != typeof e.upgradeToRevocableSession)
                  throw new Error('A UserController must implement upgradeToRevocableSession()')
                if ('function' != typeof e.linkWith)
                  throw new Error('A UserController must implement linkWith()')
                r.UserController = e
              },
              getUserController: function() {
                return r.UserController
              }
            }
          }.call(this, e('_process')))
        },
        { _process: 75 }
      ],
      4: [
        function(e, t, r) {
          'use strict'
          var n = e('babel-runtime/helpers/interop-require-default')['default']
          Object.defineProperty(r, '__esModule', { value: !0 })
          var a,
            s,
            o = e('./parseDate'),
            i = n(o),
            u = e('./ParseUser'),
            l = n(u),
            c = !1
          ;(r['default'] = {
            init: function(e) {
              if ('undefined' == typeof FB)
                throw new Error('The Facebook JavaScript SDK must be loaded before calling init.')
              if (((s = {}), e)) for (var t in e) s[t] = e[t]
              if (s.status && 'undefined' != typeof console) {
                var r = console.warn || console.log || function() {}
                r.call(
                  console,
                  'The "status" flag passed into FB.init, when set to true, can interfere with Parse Facebook integration, so it has been suppressed. Please call FB.getLoginStatus() explicitly if you require this behavior.'
                )
              }
              ;(s.status = !1),
                FB.init(s),
                l['default']._registerAuthenticationProvider({
                  authenticate: function(e) {
                    var t = this
                    'undefined' == typeof FB && e.error(this, 'Facebook SDK not found.'),
                      FB.login(
                        function(r) {
                          r.authResponse
                            ? e.success &&
                              e.success(self, {
                                id: r.authResponse.userID,
                                access_token: r.authResponse.accessToken,
                                expiration_date: new Date(
                                  1e3 * r.authResponse.expiresIn + new Date().getTime()
                                ).toJSON()
                              })
                            : e.error && e.error(t, r)
                        },
                        { scope: a }
                      )
                  },
                  restoreAuthentication: function(e) {
                    if (e) {
                      var t = i['default'](e.expiration_date),
                        r = t ? (t.getTime() - new Date().getTime()) / 1e3 : 0,
                        n = { userID: e.id, accessToken: e.access_token, expiresIn: r },
                        a = {}
                      if (s) for (var o in s) a[o] = s[o]
                      ;(a.authResponse = n), (a.status = !1)
                      var u = FB.getAuthResponse()
                      u && u.userID !== n.userID && FB.logout(), FB.init(a)
                    }
                    return !0
                  },
                  getAuthType: function() {
                    return 'facebook'
                  },
                  deauthenticate: function() {
                    this.restoreAuthentication(null)
                  }
                }),
                (c = !0)
            },
            isLinked: function(e) {
              return e._isLinked('facebook')
            },
            logIn: function(e, t) {
              if (e && 'string' != typeof e) {
                var r = {}
                if (t) for (var n in t) r[n] = t[n]
                return (r.authData = e), l['default']._logInWith('facebook', r)
              }
              if (!c) throw new Error('You must initialize FacebookUtils before calling logIn.')
              return (a = e), l['default']._logInWith('facebook', t)
            },
            link: function(e, t, r) {
              if (t && 'string' != typeof t) {
                var n = {}
                if (r) for (var s in r) n[s] = r[s]
                return (n.authData = t), e._linkWith('facebook', n)
              }
              if (!c) throw new Error('You must initialize FacebookUtils before calling link.')
              return (a = t), e._linkWith('facebook', r)
            },
            unlink: function(e, t) {
              if (!c) throw new Error('You must initialize FacebookUtils before calling unlink.')
              return e._unlinkFrom('facebook', t)
            }
          }),
            (t.exports = r['default'])
        },
        {
          './ParseUser': 21,
          './parseDate': 34,
          'babel-runtime/helpers/interop-require-default': 47
        }
      ],
      5: [
        function(e, t, r) {
          'use strict'
          function n() {
            return Math.floor(65536 * (1 + Math.random()))
              .toString(16)
              .substring(1)
          }
          function a() {
            return n() + n() + '-' + n() + '-' + n() + '-' + n() + '-' + n() + n() + n()
          }
          var s = e('babel-runtime/helpers/interop-require-default')['default'],
            o = e('./CoreManager'),
            i = (s(o), e('./ParsePromise')),
            u = s(i),
            l = e('./Storage'),
            c = s(l),
            f = null
          t.exports = {
            currentInstallationId: function() {
              if ('string' == typeof f) return u['default'].as(f)
              var e = c['default'].generatePath('installationId')
              return c['default'].getItemAsync(e).then(function(t) {
                return t
                  ? ((f = t), t)
                  : ((t = a()),
                    c['default'].setItemAsync(e, t).then(function() {
                      return (f = t), t
                    }))
              })
            },
            _clearCache: function() {
              f = null
            },
            _setInstallationIdCache: function(e) {
              f = e
            }
          }
        },
        {
          './CoreManager': 3,
          './ParsePromise': 16,
          './Storage': 24,
          'babel-runtime/helpers/interop-require-default': 47
        }
      ],
      6: [
        function(e, t, r) {
          'use strict'
          function n(e, t) {
            var r = T[e]
            return r ? r[t] || null : null
          }
          function a(e, t, r) {
            var a = n(e, t)
            return a
              ? a
              : (T[e] || (T[e] = {}),
                r ||
                  (r = {
                    serverData: {},
                    pendingOps: [{}],
                    objectCache: {},
                    tasks: new I['default'](),
                    existed: !1
                  }),
                (a = T[e][t] = r))
          }
          function s(e, t) {
            var r = n(e, t)
            return null === r ? null : (delete T[e][t], r)
          }
          function o(e, t) {
            var r = n(e, t)
            return r ? r.serverData : {}
          }
          function i(e, t, r) {
            var n = a(e, t).serverData
            for (var s in r) 'undefined' != typeof r[s] ? (n[s] = r[s]) : delete n[s]
          }
          function u(e, t) {
            var r = n(e, t)
            return r ? r.pendingOps : [{}]
          }
          function l(e, t, r, n) {
            var s = a(e, t).pendingOps,
              o = s.length - 1
            n ? (s[o][r] = n) : delete s[o][r]
          }
          function c(e, t) {
            var r = a(e, t).pendingOps
            r.push({})
          }
          function f(e, t) {
            var r = a(e, t).pendingOps,
              n = r.shift()
            return r.length || (r[0] = {}), n
          }
          function d(e, t) {
            var r = f(e, t),
              n = u(e, t),
              a = n[0]
            for (var s in r)
              if (a[s] && r[s]) {
                var o = a[s].mergeWith(r[s])
                o && (a[s] = o)
              } else a[s] = r[s]
          }
          function h(e, t) {
            var r = n(e, t)
            return r ? r.objectCache : {}
          }
          function p(e, t, r) {
            for (var n = o(e, t), a = n[r], s = u(e, t), i = 0; i < s.length; i++)
              s[i][r] &&
                (a =
                  s[i][r] instanceof N.RelationOp
                    ? s[i][r].applyTo(a, { className: e, id: t }, r)
                    : s[i][r].applyTo(a))
            return a
          }
          function y(e, t) {
            var r,
              n = {},
              a = o(e, t)
            for (r in a) n[r] = a[r]
            for (var s = u(e, t), i = 0; i < s.length; i++)
              for (r in s[i])
                s[i][r] instanceof N.RelationOp
                  ? (n[r] = s[i][r].applyTo(n[r], { className: e, id: t }, r))
                  : (n[r] = s[i][r].applyTo(n[r]))
            return n
          }
          function v(e, t, r) {
            var n = a(e, t)
            for (var s in r) {
              var o = r[s]
              if (
                ((n.serverData[s] = o),
                o &&
                  'object' == typeof o &&
                  !(o instanceof k['default']) &&
                  !(o instanceof C['default']) &&
                  !(o instanceof S['default']))
              ) {
                var i = w['default'](o, !1, !0)
                n.objectCache[s] = JSON.stringify(i)
              }
            }
          }
          function b(e, t, r) {
            var n = a(e, t)
            return n.tasks.enqueue(r)
          }
          function m() {
            T = {}
          }
          var g = e('babel-runtime/helpers/interop-require-default')['default']
          Object.defineProperty(r, '__esModule', { value: !0 }),
            (r.getState = n),
            (r.initializeState = a),
            (r.removeState = s),
            (r.getServerData = o),
            (r.setServerData = i),
            (r.getPendingOps = u),
            (r.setPendingOp = l),
            (r.pushPendingState = c),
            (r.popPendingState = f),
            (r.mergeFirstPendingState = d),
            (r.getObjectCache = h),
            (r.estimateAttribute = p),
            (r.estimateAttributes = y),
            (r.commitServerChanges = v),
            (r.enqueueTask = b),
            (r._clearAllState = m)
          var _ = e('./encode'),
            w = g(_),
            O = e('./ParseFile'),
            C = g(O),
            P = e('./ParseObject'),
            k = g(P),
            A = e('./ParsePromise'),
            E = (g(A), e('./ParseRelation')),
            S = g(E),
            j = e('./TaskQueue'),
            I = g(j),
            N = e('./ParseOp'),
            T = {}
        },
        {
          './ParseFile': 11,
          './ParseObject': 14,
          './ParseOp': 15,
          './ParsePromise': 16,
          './ParseRelation': 18,
          './TaskQueue': 26,
          './encode': 30,
          'babel-runtime/helpers/interop-require-default': 47
        }
      ],
      7: [
        function(e, t, r) {
          'use strict'
          var n = e('babel-runtime/helpers/interop-require-default')['default'],
            a = e('babel-runtime/helpers/interop-require-wildcard')['default'],
            s = e('./decode'),
            o = n(s),
            i = e('./encode'),
            u = n(i),
            l = e('./CoreManager'),
            c = n(l),
            f = e('./InstallationController'),
            d = n(f),
            h = e('./ParseOp'),
            p = a(h),
            y = e('./RESTController'),
            v = n(y),
            b = {
              initialize: function(e, t) {
                c['default'].get('IS_NODE') &&
                  console.log(
                    "It looks like you're using the browser version of the SDK in a node.js environment. You should require('parse/node') instead."
                  ),
                  b._initialize(e, t)
              },
              _initialize: function(e, t, r) {
                c['default'].set('APPLICATION_ID', e),
                  c['default'].set('JAVASCRIPT_KEY', t),
                  c['default'].set('MASTER_KEY', r),
                  c['default'].set('USE_MASTER_KEY', !1)
              }
            }
          Object.defineProperty(b, 'applicationId', {
            get: function() {
              return c['default'].get('APPLICATION_ID')
            },
            set: function(e) {
              c['default'].set('APPLICATION_ID', e)
            }
          }),
            Object.defineProperty(b, 'javaScriptKey', {
              get: function() {
                return c['default'].get('JAVASCRIPT_KEY')
              },
              set: function(e) {
                c['default'].set('JAVASCRIPT_KEY', e)
              }
            }),
            Object.defineProperty(b, 'masterKey', {
              get: function() {
                return c['default'].get('MASTER_KEY')
              },
              set: function(e) {
                c['default'].set('MASTER_KEY', e)
              }
            }),
            Object.defineProperty(b, 'serverURL', {
              get: function() {
                return c['default'].get('SERVER_URL')
              },
              set: function(e) {
                c['default'].set('SERVER_URL', e)
              }
            }),
            (b.ACL = e('./ParseACL')),
            (b.Analytics = e('./Analytics')),
            (b.Cloud = e('./Cloud')),
            (b.CoreManager = e('./CoreManager')),
            (b.Config = e('./ParseConfig')),
            (b.Error = e('./ParseError')),
            (b.FacebookUtils = e('./FacebookUtils')),
            (b.File = e('./ParseFile')),
            (b.GeoPoint = e('./ParseGeoPoint')),
            (b.Installation = e('./ParseInstallation')),
            (b.Object = e('./ParseObject')),
            (b.Op = {
              Set: p.SetOp,
              Unset: p.UnsetOp,
              Increment: p.IncrementOp,
              Add: p.AddOp,
              Remove: p.RemoveOp,
              AddUnique: p.AddUniqueOp,
              Relation: p.RelationOp
            }),
            (b.Promise = e('./ParsePromise')),
            (b.Push = e('./Push')),
            (b.Query = e('./ParseQuery')),
            (b.Relation = e('./ParseRelation')),
            (b.Role = e('./ParseRole')),
            (b.Session = e('./ParseSession')),
            (b.Storage = e('./Storage')),
            (b.User = e('./ParseUser')),
            (b._request = function() {
              for (var e = arguments.length, t = Array(e), r = 0; e > r; r++) t[r] = arguments[r]
              return c['default'].getRESTController().request.apply(null, t)
            }),
            (b._ajax = function() {
              for (var e = arguments.length, t = Array(e), r = 0; e > r; r++) t[r] = arguments[r]
              return c['default'].getRESTController().ajax.apply(null, t)
            }),
            (b._decode = function(e, t) {
              return o['default'](t)
            }),
            (b._encode = function(e, t, r) {
              return u['default'](e, r)
            }),
            (b._getInstallationId = function() {
              return c['default'].getInstallationController().currentInstallationId()
            }),
            c['default'].setInstallationController(d['default']),
            c['default'].setRESTController(v['default']),
            (t.exports = b)
        },
        {
          './Analytics': 1,
          './Cloud': 2,
          './CoreManager': 3,
          './FacebookUtils': 4,
          './InstallationController': 5,
          './ParseACL': 8,
          './ParseConfig': 9,
          './ParseError': 10,
          './ParseFile': 11,
          './ParseGeoPoint': 12,
          './ParseInstallation': 13,
          './ParseObject': 14,
          './ParseOp': 15,
          './ParsePromise': 16,
          './ParseQuery': 17,
          './ParseRelation': 18,
          './ParseRole': 19,
          './ParseSession': 20,
          './ParseUser': 21,
          './Push': 22,
          './RESTController': 23,
          './Storage': 24,
          './decode': 29,
          './encode': 30,
          'babel-runtime/helpers/interop-require-default': 47,
          'babel-runtime/helpers/interop-require-wildcard': 48
        }
      ],
      8: [
        function(e, t, r) {
          'use strict'
          var n = e('babel-runtime/helpers/create-class')['default'],
            a = e('babel-runtime/helpers/class-call-check')['default'],
            s = e('babel-runtime/core-js/object/keys')['default'],
            o = e('babel-runtime/helpers/interop-require-default')['default']
          Object.defineProperty(r, '__esModule', { value: !0 })
          var i = e('./ParseRole'),
            u = o(i),
            l = e('./ParseUser'),
            c = o(l),
            f = '*',
            d = (function() {
              function e(t) {
                if ((a(this, e), (this.permissionsById = {}), t && 'object' == typeof t))
                  if (t instanceof c['default'])
                    this.setReadAccess(t, !0), this.setWriteAccess(t, !0)
                  else
                    for (var r in t) {
                      var n = t[r]
                      if ('string' != typeof r)
                        throw new TypeError('Tried to create an ACL with an invalid user id.')
                      this.permissionsById[r] = {}
                      for (var s in n) {
                        var o = n[s]
                        if ('read' !== s && 'write' !== s)
                          throw new TypeError(
                            'Tried to create an ACL with an invalid permission type.'
                          )
                        if ('boolean' != typeof o)
                          throw new TypeError(
                            'Tried to create an ACL with an invalid permission value.'
                          )
                        this.permissionsById[r][s] = o
                      }
                    }
                else if ('function' == typeof t)
                  throw new TypeError('ParseACL constructed with a function. Did you forget ()?')
              }
              return (
                n(e, [
                  {
                    key: 'toJSON',
                    value: function() {
                      var e = {}
                      for (var t in this.permissionsById) e[t] = this.permissionsById[t]
                      return e
                    }
                  },
                  {
                    key: 'equals',
                    value: function(t) {
                      if (!(t instanceof e)) return !1
                      var r = s(this.permissionsById),
                        n = s(t.permissionsById)
                      if (r.length !== n.length) return !1
                      for (var a in this.permissionsById) {
                        if (!t.permissionsById[a]) return !1
                        if (this.permissionsById[a].read !== t.permissionsById[a].read) return !1
                        if (this.permissionsById[a].write !== t.permissionsById[a].write) return !1
                      }
                      return !0
                    }
                  },
                  {
                    key: '_setAccess',
                    value: function(e, t, r) {
                      if (
                        (t instanceof c['default']
                          ? (t = t.id)
                          : t instanceof u['default'] && (t = 'role:' + t.getName()),
                        'string' != typeof t)
                      )
                        throw new TypeError('userId must be a string.')
                      if ('boolean' != typeof r)
                        throw new TypeError('allowed must be either true or false.')
                      var n = this.permissionsById[t]
                      if (!n) {
                        if (!r) return
                        ;(n = {}), (this.permissionsById[t] = n)
                      }
                      r
                        ? (this.permissionsById[t][e] = !0)
                        : (delete n[e], 0 === s(n).length && delete this.permissionsById[t])
                    }
                  },
                  {
                    key: '_getAccess',
                    value: function(e, t) {
                      t instanceof c['default']
                        ? (t = t.id)
                        : t instanceof u['default'] && (t = 'role:' + t.getName())
                      var r = this.permissionsById[t]
                      return r ? !!r[e] : !1
                    }
                  },
                  {
                    key: 'setReadAccess',
                    value: function(e, t) {
                      this._setAccess('read', e, t)
                    }
                  },
                  {
                    key: 'getReadAccess',
                    value: function(e) {
                      return this._getAccess('read', e)
                    }
                  },
                  {
                    key: 'setWriteAccess',
                    value: function(e, t) {
                      this._setAccess('write', e, t)
                    }
                  },
                  {
                    key: 'getWriteAccess',
                    value: function(e) {
                      return this._getAccess('write', e)
                    }
                  },
                  {
                    key: 'setPublicReadAccess',
                    value: function(e) {
                      this.setReadAccess(f, e)
                    }
                  },
                  {
                    key: 'getPublicReadAccess',
                    value: function() {
                      return this.getReadAccess(f)
                    }
                  },
                  {
                    key: 'setPublicWriteAccess',
                    value: function(e) {
                      this.setWriteAccess(f, e)
                    }
                  },
                  {
                    key: 'getPublicWriteAccess',
                    value: function() {
                      return this.getWriteAccess(f)
                    }
                  },
                  {
                    key: 'getRoleReadAccess',
                    value: function(e) {
                      if ((e instanceof u['default'] && (e = e.getName()), 'string' != typeof e))
                        throw new TypeError('role must be a ParseRole or a String')
                      return this.getReadAccess('role:' + e)
                    }
                  },
                  {
                    key: 'getRoleWriteAccess',
                    value: function(e) {
                      if ((e instanceof u['default'] && (e = e.getName()), 'string' != typeof e))
                        throw new TypeError('role must be a ParseRole or a String')
                      return this.getWriteAccess('role:' + e)
                    }
                  },
                  {
                    key: 'setRoleReadAccess',
                    value: function(e, t) {
                      if ((e instanceof u['default'] && (e = e.getName()), 'string' != typeof e))
                        throw new TypeError('role must be a ParseRole or a String')
                      this.setReadAccess('role:' + e, t)
                    }
                  },
                  {
                    key: 'setRoleWriteAccess',
                    value: function(e, t) {
                      if ((e instanceof u['default'] && (e = e.getName()), 'string' != typeof e))
                        throw new TypeError('role must be a ParseRole or a String')
                      this.setWriteAccess('role:' + e, t)
                    }
                  }
                ]),
                e
              )
            })()
          ;(r['default'] = d), (t.exports = r['default'])
        },
        {
          './ParseRole': 19,
          './ParseUser': 21,
          'babel-runtime/core-js/object/keys': 41,
          'babel-runtime/helpers/class-call-check': 43,
          'babel-runtime/helpers/create-class': 44,
          'babel-runtime/helpers/interop-require-default': 47
        }
      ],
      9: [
        function(e, t, r) {
          'use strict'
          function n(e) {
            try {
              var t = JSON.parse(e)
              if (t && 'object' == typeof t) return c['default'](t)
            } catch (r) {
              return null
            }
          }
          var a = e('babel-runtime/helpers/create-class')['default'],
            s = e('babel-runtime/helpers/class-call-check')['default'],
            o = e('babel-runtime/helpers/interop-require-default')['default']
          Object.defineProperty(r, '__esModule', { value: !0 })
          var i = e('./CoreManager'),
            u = o(i),
            l = e('./decode'),
            c = o(l),
            f = e('./encode'),
            d = (o(f), e('./escape')),
            h = o(d),
            p = e('./ParseError'),
            y = o(p),
            v = e('./ParsePromise'),
            b = o(v),
            m = e('./Storage'),
            g = o(m),
            _ = (function() {
              function e() {
                s(this, e), (this.attributes = {}), (this._escapedAttributes = {})
              }
              return (
                a(
                  e,
                  [
                    {
                      key: 'get',
                      value: function(e) {
                        return this.attributes[e]
                      }
                    },
                    {
                      key: 'escape',
                      value: function(e) {
                        var t = this._escapedAttributes[e]
                        if (t) return t
                        var r = this.attributes[e],
                          n = ''
                        return (
                          null != r && (n = h['default'](r.toString())),
                          (this._escapedAttributes[e] = n),
                          n
                        )
                      }
                    }
                  ],
                  [
                    {
                      key: 'current',
                      value: function() {
                        var e = u['default'].getConfigController()
                        return e.current()
                      }
                    },
                    {
                      key: 'get',
                      value: function(e) {
                        e = e || {}
                        var t = u['default'].getConfigController()
                        return t.get()._thenRunCallbacks(e)
                      }
                    }
                  ]
                ),
                e
              )
            })()
          r['default'] = _
          var w = null,
            O = 'currentConfig'
          u['default'].setConfigController({
            current: function() {
              if (w) return w
              var e,
                t = new _(),
                r = g['default'].generatePath(O)
              if (!g['default'].async()) {
                if ((e = g['default'].getItem(r))) {
                  var a = n(e)
                  a && ((t.attributes = a), (w = t))
                }
                return t
              }
              return g['default'].getItemAsync(r).then(function(e) {
                if (e) {
                  var r = n(e)
                  r && ((t.attributes = r), (w = t))
                }
                return t
              })
            },
            get: function() {
              var e = u['default'].getRESTController()
              return e.request('GET', 'config', {}, {}).then(function(e) {
                if (!e || !e.params) {
                  var t = new y['default'](
                    y['default'].INVALID_JSON,
                    'Config JSON response invalid.'
                  )
                  return b['default'].error(t)
                }
                var r = new _()
                r.attributes = {}
                for (var n in e.params) r.attributes[n] = c['default'](e.params[n])
                return (
                  (w = r),
                  g['default']
                    .setItemAsync(g['default'].generatePath(O), JSON.stringify(e.params))
                    .then(function() {
                      return r
                    })
                )
              })
            }
          }),
            (t.exports = r['default'])
        },
        {
          './CoreManager': 3,
          './ParseError': 10,
          './ParsePromise': 16,
          './Storage': 24,
          './decode': 29,
          './encode': 30,
          './escape': 32,
          'babel-runtime/helpers/class-call-check': 43,
          'babel-runtime/helpers/create-class': 44,
          'babel-runtime/helpers/interop-require-default': 47
        }
      ],
      10: [
        function(e, t, r) {
          'use strict'
          var n = e('babel-runtime/helpers/class-call-check')['default']
          Object.defineProperty(r, '__esModule', { value: !0 })
          var a = function s(e, t) {
            n(this, s), (this.code = e), (this.message = t)
          }
          ;(r['default'] = a),
            (a.OTHER_CAUSE = -1),
            (a.INTERNAL_SERVER_ERROR = 1),
            (a.CONNECTION_FAILED = 100),
            (a.OBJECT_NOT_FOUND = 101),
            (a.INVALID_QUERY = 102),
            (a.INVALID_CLASS_NAME = 103),
            (a.MISSING_OBJECT_ID = 104),
            (a.INVALID_KEY_NAME = 105),
            (a.INVALID_POINTER = 106),
            (a.INVALID_JSON = 107),
            (a.COMMAND_UNAVAILABLE = 108),
            (a.NOT_INITIALIZED = 109),
            (a.INCORRECT_TYPE = 111),
            (a.INVALID_CHANNEL_NAME = 112),
            (a.PUSH_MISCONFIGURED = 115),
            (a.OBJECT_TOO_LARGE = 116),
            (a.OPERATION_FORBIDDEN = 119),
            (a.CACHE_MISS = 120),
            (a.INVALID_NESTED_KEY = 121),
            (a.INVALID_FILE_NAME = 122),
            (a.INVALID_ACL = 123),
            (a.TIMEOUT = 124),
            (a.INVALID_EMAIL_ADDRESS = 125),
            (a.MISSING_CONTENT_TYPE = 126),
            (a.MISSING_CONTENT_LENGTH = 127),
            (a.INVALID_CONTENT_LENGTH = 128),
            (a.FILE_TOO_LARGE = 129),
            (a.FILE_SAVE_ERROR = 130),
            (a.DUPLICATE_VALUE = 137),
            (a.INVALID_ROLE_NAME = 139),
            (a.EXCEEDED_QUOTA = 140),
            (a.SCRIPT_FAILED = 141),
            (a.VALIDATION_ERROR = 142),
            (a.INVALID_IMAGE_DATA = 143),
            (a.UNSAVED_FILE_ERROR = 151),
            (a.INVALID_PUSH_TIME_ERROR = 152),
            (a.FILE_DELETE_ERROR = 153),
            (a.REQUEST_LIMIT_EXCEEDED = 155),
            (a.INVALID_EVENT_NAME = 160),
            (a.USERNAME_MISSING = 200),
            (a.PASSWORD_MISSING = 201),
            (a.USERNAME_TAKEN = 202),
            (a.EMAIL_TAKEN = 203),
            (a.EMAIL_MISSING = 204),
            (a.EMAIL_NOT_FOUND = 205),
            (a.SESSION_MISSING = 206),
            (a.MUST_CREATE_USER_THROUGH_SIGNUP = 207),
            (a.ACCOUNT_ALREADY_LINKED = 208),
            (a.INVALID_SESSION_TOKEN = 209),
            (a.LINKED_ID_MISSING = 250),
            (a.INVALID_LINKED_SESSION = 251),
            (a.UNSUPPORTED_SERVICE = 252),
            (a.AGGREGATE_ERROR = 600),
            (a.FILE_READ_ERROR = 601),
            (a.X_DOMAIN_REQUEST = 602),
            (t.exports = r['default'])
        },
        { 'babel-runtime/helpers/class-call-check': 43 }
      ],
      11: [
        function(e, t, r) {
          'use strict'
          function n(e) {
            if (26 > e) return String.fromCharCode(65 + e)
            if (52 > e) return String.fromCharCode(97 + (e - 26))
            if (62 > e) return String.fromCharCode(48 + (e - 52))
            if (62 === e) return '+'
            if (63 === e) return '/'
            throw new TypeError('Tried to encode large digit ' + e + ' in base64.')
          }
          var a = e('babel-runtime/helpers/create-class')['default'],
            s = e('babel-runtime/helpers/class-call-check')['default'],
            o = e('babel-runtime/helpers/interop-require-default')['default']
          Object.defineProperty(r, '__esModule', { value: !0 })
          var i = e('./CoreManager'),
            u = o(i),
            l = e('./ParsePromise'),
            c = (o(l),
            (function() {
              function e(t, r, n) {
                s(this, e)
                var a = n || ''
                if (((this._name = t), Array.isArray(r)))
                  this._source = { format: 'base64', base64: e.encodeBase64(r), type: a }
                else if ('undefined' != typeof File && r instanceof File)
                  this._source = { format: 'file', file: r, type: a }
                else if (r && r.hasOwnProperty('base64')) {
                  var o = /^data:([a-zA-Z]*\/[a-zA-Z+.-]*);(charset=[a-zA-Z0-9\-\/\s]*,)?base64,(\S+)/.exec(
                    r.base64
                  )
                  o && o.length > 0
                    ? (this._source = {
                        format: 'base64',
                        base64: 4 === o.length ? o[3] : o[2],
                        type: o[1]
                      })
                    : (this._source = { format: 'base64', base64: r.base64, type: a })
                } else if ('undefined' != typeof r)
                  throw new TypeError('Cannot create a Parse.File with that data.')
              }
              return (
                a(
                  e,
                  [
                    {
                      key: 'name',
                      value: function() {
                        return this._name
                      }
                    },
                    {
                      key: 'url',
                      value: function() {
                        return this._url
                      }
                    },
                    {
                      key: 'save',
                      value: function(e) {
                        var t = this
                        e = e || {}
                        var r = u['default'].getFileController()
                        return (
                          this._previousSave ||
                            ('file' === this._source.format
                              ? (this._previousSave = r
                                  .saveFile(this._name, this._source)
                                  .then(function(e) {
                                    return (t._name = e.name), (t._url = e.url), t
                                  }))
                              : (this._previousSave = r
                                  .saveBase64(this._name, this._source)
                                  .then(function(e) {
                                    return (t._name = e.name), (t._url = e.url), t
                                  }))),
                          this._previousSave ? this._previousSave._thenRunCallbacks(e) : void 0
                        )
                      }
                    },
                    {
                      key: 'toJSON',
                      value: function() {
                        return { __type: 'File', name: this._name, url: this._url }
                      }
                    },
                    {
                      key: 'equals',
                      value: function(t) {
                        return this === t
                          ? !0
                          : t instanceof e &&
                              this.name() === t.name() &&
                              this.url() === t.url() &&
                              'undefined' != typeof this.url()
                      }
                    }
                  ],
                  [
                    {
                      key: 'fromJSON',
                      value: function(t) {
                        if ('File' !== t.__type)
                          throw new TypeError('JSON object does not represent a ParseFile')
                        var r = new e(t.name)
                        return (r._url = t.url), r
                      }
                    },
                    {
                      key: 'encodeBase64',
                      value: function(e) {
                        var t = []
                        t.length = Math.ceil(e.length / 3)
                        for (var r = 0; r < t.length; r++) {
                          var a = e[3 * r],
                            s = e[3 * r + 1] || 0,
                            o = e[3 * r + 2] || 0,
                            i = 3 * r + 1 < e.length,
                            u = 3 * r + 2 < e.length
                          t[r] = [
                            n((a >> 2) & 63),
                            n(((a << 4) & 48) | ((s >> 4) & 15)),
                            i ? n(((s << 2) & 60) | ((o >> 6) & 3)) : '=',
                            u ? n(63 & o) : '='
                          ].join('')
                        }
                        return t.join('')
                      }
                    }
                  ]
                ),
                e
              )
            })())
          ;(r['default'] = c),
            u['default'].setFileController({
              saveFile: function(e, t) {
                if ('file' !== t.format)
                  throw new Error('saveFile can only be used with File-type sources.')
                var r = {
                    'X-Parse-Application-ID': u['default'].get('APPLICATION_ID'),
                    'X-Parse-JavaScript-Key': u['default'].get('JAVASCRIPT_KEY')
                  },
                  n = u['default'].get('SERVER_URL')
                return (
                  (n += '/1/files/' + e),
                  u['default'].getRESTController().ajax('POST', n, t.file, r)
                )
              },
              saveBase64: function(e, t) {
                if ('base64' !== t.format)
                  throw new Error('saveBase64 can only be used with Base64-type sources.')
                var r = { base64: t.base64 }
                return (
                  t.type && (r._ContentType = t.type),
                  u['default'].getRESTController().request('POST', 'files/' + e, r)
                )
              }
            }),
            (t.exports = r['default'])
        },
        {
          './CoreManager': 3,
          './ParsePromise': 16,
          'babel-runtime/helpers/class-call-check': 43,
          'babel-runtime/helpers/create-class': 44,
          'babel-runtime/helpers/interop-require-default': 47
        }
      ],
      12: [
        function(e, t, r) {
          'use strict'
          var n = e('babel-runtime/helpers/create-class')['default'],
            a = e('babel-runtime/helpers/class-call-check')['default'],
            s = e('babel-runtime/helpers/interop-require-default')['default']
          Object.defineProperty(r, '__esModule', { value: !0 })
          var o = e('./ParsePromise'),
            i = s(o),
            u = (function() {
              function e(t, r) {
                a(this, e),
                  Array.isArray(t)
                    ? (e._validate(t[0], t[1]), (this._latitude = t[0]), (this._longitude = t[1]))
                    : 'object' == typeof t
                    ? (e._validate(t.latitude, t.longitude),
                      (this._latitude = t.latitude),
                      (this._longitude = t.longitude))
                    : 'number' == typeof t && 'number' == typeof r
                    ? (e._validate(t, r), (this._latitude = t), (this._longitude = r))
                    : ((this._latitude = 0), (this._longitude = 0))
              }
              return (
                n(
                  e,
                  [
                    {
                      key: 'toJSON',
                      value: function() {
                        return (
                          e._validate(this._latitude, this._longitude),
                          {
                            __type: 'GeoPoint',
                            latitude: this._latitude,
                            longitude: this._longitude
                          }
                        )
                      }
                    },
                    {
                      key: 'equals',
                      value: function(t) {
                        return (
                          t instanceof e &&
                          this.latitude === t.latitude &&
                          this.longitude === t.longitude
                        )
                      }
                    },
                    {
                      key: 'radiansTo',
                      value: function(e) {
                        var t = Math.PI / 180,
                          r = this.latitude * t,
                          n = this.longitude * t,
                          a = e.latitude * t,
                          s = e.longitude * t,
                          o = Math.sin((r - a) / 2),
                          i = Math.sin((n - s) / 2),
                          u = o * o + Math.cos(r) * Math.cos(a) * i * i
                        return (u = Math.min(1, u)), 2 * Math.asin(Math.sqrt(u))
                      }
                    },
                    {
                      key: 'kilometersTo',
                      value: function(e) {
                        return 6371 * this.radiansTo(e)
                      }
                    },
                    {
                      key: 'milesTo',
                      value: function(e) {
                        return 3958.8 * this.radiansTo(e)
                      }
                    },
                    {
                      key: 'latitude',
                      get: function() {
                        return this._latitude
                      },
                      set: function(t) {
                        e._validate(t, this.longitude), (this._latitude = t)
                      }
                    },
                    {
                      key: 'longitude',
                      get: function() {
                        return this._longitude
                      },
                      set: function(t) {
                        e._validate(this.latitude, t), (this._longitude = t)
                      }
                    }
                  ],
                  [
                    {
                      key: '_validate',
                      value: function(e, t) {
                        if (e !== e || t !== t)
                          throw new TypeError(
                            'GeoPoint latitude and longitude must be valid numbers'
                          )
                        if (-90 > e)
                          throw new TypeError('GeoPoint latitude out of bounds: ' + e + ' < -90.0.')
                        if (e > 90)
                          throw new TypeError('GeoPoint latitude out of bounds: ' + e + ' > 90.0.')
                        if (-180 > t)
                          throw new TypeError(
                            'GeoPoint longitude out of bounds: ' + t + ' < -180.0.'
                          )
                        if (t > 180)
                          throw new TypeError(
                            'GeoPoint longitude out of bounds: ' + t + ' > 180.0.'
                          )
                      }
                    },
                    {
                      key: 'current',
                      value: function(t) {
                        var r = new i['default']()
                        return (
                          navigator.geolocation.getCurrentPosition(
                            function(t) {
                              r.resolve(new e(t.coords.latitude, t.coords.longitude))
                            },
                            function(e) {
                              r.reject(e)
                            }
                          ),
                          r._thenRunCallbacks(t)
                        )
                      }
                    }
                  ]
                ),
                e
              )
            })()
          ;(r['default'] = u), (t.exports = r['default'])
        },
        {
          './ParsePromise': 16,
          'babel-runtime/helpers/class-call-check': 43,
          'babel-runtime/helpers/create-class': 44,
          'babel-runtime/helpers/interop-require-default': 47
        }
      ],
      13: [
        function(e, t, r) {
          'use strict'
          var n = e('babel-runtime/helpers/get')['default'],
            a = e('babel-runtime/helpers/inherits')['default'],
            s = e('babel-runtime/helpers/class-call-check')['default'],
            o = e('babel-runtime/helpers/interop-require-default')['default']
          Object.defineProperty(r, '__esModule', { value: !0 })
          var i = e('./ParseObject'),
            u = o(i),
            l = (function(e) {
              function t(e) {
                if (
                  (s(this, t),
                  n(Object.getPrototypeOf(t.prototype), 'constructor', this).call(
                    this,
                    '_Installation'
                  ),
                  e && 'object' == typeof e && !this.set(e || {}))
                )
                  throw new Error("Can't create an invalid Session")
              }
              return a(t, e), t
            })(u['default'])
          ;(r['default'] = l),
            u['default'].registerSubclass('_Installation', l),
            (t.exports = r['default'])
        },
        {
          './ParseObject': 14,
          'babel-runtime/helpers/class-call-check': 43,
          'babel-runtime/helpers/get': 45,
          'babel-runtime/helpers/inherits': 46,
          'babel-runtime/helpers/interop-require-default': 47
        }
      ],
      14: [
        function(e, t, r) {
          'use strict'
          var n = e('babel-runtime/helpers/create-class')['default'],
            a = e('babel-runtime/helpers/class-call-check')['default'],
            s = e('babel-runtime/core-js/object/keys')['default'],
            o = e('babel-runtime/core-js/object/freeze')['default'],
            i = e('babel-runtime/core-js/object/create')['default'],
            u = e('babel-runtime/core-js/object/define-property')['default'],
            l = e('babel-runtime/helpers/interop-require-default')['default'],
            c = e('babel-runtime/helpers/interop-require-wildcard')['default']
          Object.defineProperty(r, '__esModule', { value: !0 })
          var f = e('./CoreManager'),
            d = l(f),
            h = e('./canBeSerialized'),
            p = l(h),
            y = e('./decode'),
            v = l(y),
            b = e('./encode'),
            m = l(b),
            g = e('./equals'),
            _ = (l(g), e('./escape')),
            w = l(_),
            O = e('./ObjectState'),
            C = c(O),
            P = e('./ParseACL'),
            k = l(P),
            A = e('./parseDate'),
            E = l(A),
            S = e('./ParseError'),
            j = l(S),
            I = e('./ParseFile'),
            N = l(I),
            T = e('./ParseOp'),
            R = e('./ParsePromise'),
            M = l(R),
            D = e('./ParseQuery'),
            q = l(D),
            x = e('./ParseRelation'),
            U = l(x),
            L = e('./unique'),
            F = l(L),
            K = e('./unsavedChildren'),
            $ = l(K),
            J = {},
            W = 0,
            B = 0,
            G = !d['default'].get('IS_NODE'),
            V = (function() {
              function e(t, r) {
                a(this, e)
                var n = null
                if (((this._objCount = B++), 'string' == typeof t))
                  (this.className = t), r && 'object' == typeof r && (n = r)
                else if (t && 'object' == typeof t) {
                  ;(this.className = t.className), (n = {})
                  for (var s in t) 'className' !== s && (n[s] = t[s])
                }
                if (n && !this.set(n)) throw new Error("Can't create an invalid Parse Object")
                'function' == typeof this.initialize && this.initialize.apply(this, arguments)
              }
              return (
                n(
                  e,
                  [
                    {
                      key: '_getId',
                      value: function() {
                        if ('string' == typeof this.id) return this.id
                        if ('string' == typeof this._localId) return this._localId
                        var e = 'local' + String(W++)
                        return (this._localId = e), e
                      }
                    },
                    {
                      key: '_getStateIdentifier',
                      value: function() {
                        return 'string' == typeof this.id
                          ? G
                            ? this.id
                            : this.id + '_' + String(this._objCount)
                          : this._getId()
                      }
                    },
                    {
                      key: '_getServerData',
                      value: function() {
                        return C.getServerData(this.className, this._getStateIdentifier())
                      }
                    },
                    {
                      key: '_clearServerData',
                      value: function() {
                        var e = this._getServerData(),
                          t = {}
                        for (var r in e) t[r] = void 0
                        C.setServerData(this.className, this._getStateIdentifier(), t)
                      }
                    },
                    {
                      key: '_getPendingOps',
                      value: function() {
                        return C.getPendingOps(this.className, this._getStateIdentifier())
                      }
                    },
                    {
                      key: '_clearPendingOps',
                      value: function() {
                        var e = this._getPendingOps(),
                          t = e[e.length - 1],
                          r = s(t)
                        r.forEach(function(e) {
                          delete t[e]
                        })
                      }
                    },
                    {
                      key: '_getDirtyObjectAttributes',
                      value: function() {
                        var t = this.attributes,
                          r = C.getObjectCache(this.className, this._getStateIdentifier()),
                          n = {}
                        for (var a in t) {
                          var s = t[a]
                          if (
                            s &&
                            'object' == typeof s &&
                            !(s instanceof e) &&
                            !(s instanceof N['default']) &&
                            !(s instanceof U['default'])
                          ) {
                            var o = m['default'](s, !1, !0),
                              i = JSON.stringify(o)
                            r[a] !== i && (n[a] = s)
                          }
                        }
                        return n
                      }
                    },
                    {
                      key: '_toFullJSON',
                      value: function() {
                        var e = this.toJSON()
                        return (e.__type = 'Object'), (e.className = this.className), e
                      }
                    },
                    {
                      key: '_getSaveJSON',
                      value: function() {
                        var e,
                          t = this._getPendingOps(),
                          r = this._getDirtyObjectAttributes(),
                          n = {}
                        for (e in r) n[e] = new T.SetOp(r[e]).toJSON()
                        for (e in t[0]) n[e] = t[0][e].toJSON()
                        return n
                      }
                    },
                    {
                      key: '_getSaveParams',
                      value: function() {
                        var e = this.id ? 'PUT' : 'POST',
                          t = this._getSaveJSON(),
                          r = 'classes/' + this.className
                        return (
                          this.id
                            ? (r += '/' + this.id)
                            : '_User' === this.className && (r = 'users'),
                          { method: e, body: t, path: r }
                        )
                      }
                    },
                    {
                      key: '_finishFetch',
                      value: function(e) {
                        !this.id && e.objectId && (this.id = e.objectId),
                          C.initializeState(this.className, this._getStateIdentifier())
                        var t = {}
                        for (var r in e)
                          'ACL' === r
                            ? (t[r] = new k['default'](e[r]))
                            : 'objectId' !== r &&
                              ((t[r] = v['default'](e[r])),
                              t[r] instanceof U['default'] && t[r]._ensureParentAndKey(this, r))
                        t.createdAt &&
                          'string' == typeof t.createdAt &&
                          (t.createdAt = E['default'](t.createdAt)),
                          t.updatedAt &&
                            'string' == typeof t.updatedAt &&
                            (t.updatedAt = E['default'](t.updatedAt)),
                          !t.updatedAt && t.createdAt && (t.updatedAt = t.createdAt),
                          C.commitServerChanges(this.className, this._getStateIdentifier(), t)
                      }
                    },
                    {
                      key: '_setExisted',
                      value: function(e) {
                        var t = C.getState(this.className, this._getStateIdentifier())
                        t && (t.existed = e)
                      }
                    },
                    {
                      key: '_migrateId',
                      value: function(e) {
                        if (this._localId && e) {
                          var t = C.removeState(this.className, this._getStateIdentifier())
                          ;(this.id = e),
                            delete this._localId,
                            t && C.initializeState(this.className, this._getStateIdentifier(), t)
                        }
                      }
                    },
                    {
                      key: '_handleSaveResponse',
                      value: function(e, t) {
                        var r,
                          n = {},
                          a = C.popPendingState(this.className, this._getStateIdentifier())
                        for (r in a)
                          a[r] instanceof T.RelationOp
                            ? (n[r] = a[r].applyTo(void 0, this, r))
                            : r in e || (n[r] = a[r].applyTo(void 0))
                        for (r in e)
                          ('createdAt' !== r && 'updatedAt' !== r) || 'string' != typeof e[r]
                            ? 'objectId' !== r && (n[r] = v['default'](e[r]))
                            : (n[r] = E['default'](e[r]))
                        n.createdAt && !n.updatedAt && (n.updatedAt = n.createdAt),
                          this._migrateId(e.objectId),
                          201 !== t && this._setExisted(!0),
                          C.commitServerChanges(this.className, this._getStateIdentifier(), n)
                      }
                    },
                    {
                      key: '_handleSaveError',
                      value: function() {
                        var e = this._getPendingOps()
                        e.length > 2 &&
                          C.mergeFirstPendingState(this.className, this._getStateIdentifier())
                      }
                    },
                    { key: 'initialize', value: function() {} },
                    {
                      key: 'toJSON',
                      value: function() {
                        var e = {},
                          t = this.attributes
                        for (var r in t) e[r] = m['default'](t[r], !1, !1)
                        var n = this._getPendingOps()
                        for (var r in n[0]) e[r] = n[0][r].toJSON()
                        return this.id && (e.objectId = this.id), e
                      }
                    },
                    {
                      key: 'equals',
                      value: function(t) {
                        return this === t
                          ? !0
                          : t instanceof e &&
                              this.className === t.className &&
                              this.id === t.id &&
                              'undefined' != typeof this.id
                      }
                    },
                    {
                      key: 'dirty',
                      value: function(e) {
                        if (!this.id) return !0
                        var t = this._getPendingOps(),
                          r = this._getDirtyObjectAttributes()
                        if (e) {
                          if (r.hasOwnProperty(e)) return !0
                          for (var n = 0; n < t.length; n++) if (t[n].hasOwnProperty(e)) return !0
                          return !1
                        }
                        return 0 !== s(t[0]).length ? !0 : 0 !== s(r).length ? !0 : !1
                      }
                    },
                    {
                      key: 'dirtyKeys',
                      value: function() {
                        for (var e = this._getPendingOps(), t = {}, r = 0; r < e.length; r++)
                          for (var n in e[r]) t[n] = !0
                        var a = this._getDirtyObjectAttributes()
                        for (var n in a) t[n] = !0
                        return s(t)
                      }
                    },
                    {
                      key: 'toPointer',
                      value: function() {
                        if (!this.id)
                          throw new Error('Cannot create a pointer to an unsaved ParseObject')
                        return { __type: 'Pointer', className: this.className, objectId: this.id }
                      }
                    },
                    {
                      key: 'get',
                      value: function(e) {
                        return this.attributes[e]
                      }
                    },
                    {
                      key: 'relation',
                      value: function(e) {
                        var t = this.get(e)
                        if (t) {
                          if (!(t instanceof U['default']))
                            throw new Error('Called relation() on non-relation field ' + e)
                          return t._ensureParentAndKey(this, e), t
                        }
                        return new U['default'](this, e)
                      }
                    },
                    {
                      key: 'escape',
                      value: function(e) {
                        var t = this.attributes[e]
                        if (null == t) return ''
                        if ('string' != typeof t) {
                          if ('function' != typeof t.toString) return ''
                          t = t.toString()
                        }
                        return w['default'](t)
                      }
                    },
                    {
                      key: 'has',
                      value: function(e) {
                        var t = this.attributes
                        return t.hasOwnProperty(e) ? null != t[e] : !1
                      }
                    },
                    {
                      key: 'set',
                      value: function(e, t, r) {
                        var n = {},
                          a = {}
                        if (e && 'object' == typeof e) (n = e), (r = t)
                        else {
                          if ('string' != typeof e) return this
                          n[e] = t
                        }
                        r = r || {}
                        var s = []
                        'function' == typeof this.constructor.readOnlyAttributes &&
                          (s = s.concat(this.constructor.readOnlyAttributes()))
                        for (var o in n)
                          if ('createdAt' !== o && 'updatedAt' !== o) {
                            if (s.indexOf(o) > -1)
                              throw new Error('Cannot modify readonly attribute: ' + o)
                            r.unset
                              ? (a[o] = new T.UnsetOp())
                              : n[o] instanceof T.Op
                              ? (a[o] = n[o])
                              : n[o] && 'object' == typeof n[o] && 'string' == typeof n[o].__op
                              ? (a[o] = T.opFromJSON(n[o]))
                              : 'objectId' === o || 'id' === o
                              ? (this.id = n[o])
                              : (a[o] = new T.SetOp(n[o]))
                          }
                        var i = this.attributes,
                          u = {}
                        for (var l in a)
                          a[l] instanceof T.RelationOp
                            ? (u[l] = a[l].applyTo(i[l], this, l))
                            : a[l] instanceof T.UnsetOp || (u[l] = a[l].applyTo(i[l]))
                        var c = this.validate(u)
                        if (c) return 'function' == typeof r.error && r.error(this, c), !1
                        var f = this._getPendingOps(),
                          d = f.length - 1
                        for (var l in a) {
                          var h = a[l].mergeWith(f[d][l])
                          C.setPendingOp(this.className, this._getStateIdentifier(), l, h)
                        }
                        return this
                      }
                    },
                    {
                      key: 'unset',
                      value: function(e, t) {
                        return (t = t || {}), (t.unset = !0), this.set(e, null, t)
                      }
                    },
                    {
                      key: 'increment',
                      value: function(e, t) {
                        if (('undefined' == typeof t && (t = 1), 'number' != typeof t))
                          throw new Error('Cannot increment by a non-numeric amount.')
                        return this.set(e, new T.IncrementOp(t))
                      }
                    },
                    {
                      key: 'add',
                      value: function(e, t) {
                        return this.set(e, new T.AddOp([t]))
                      }
                    },
                    {
                      key: 'addUnique',
                      value: function(e, t) {
                        return this.set(e, new T.AddUniqueOp([t]))
                      }
                    },
                    {
                      key: 'remove',
                      value: function(e, t) {
                        return this.set(e, new T.RemoveOp([t]))
                      }
                    },
                    {
                      key: 'op',
                      value: function(e) {
                        for (var t = this._getPendingOps(), r = t.length; r--; )
                          if (t[r][e]) return t[r][e]
                      }
                    },
                    {
                      key: 'clone',
                      value: function t() {
                        var t = new this.constructor()
                        return (
                          t.set(this.attributes), t.className || (t.className = this.className), t
                        )
                      }
                    },
                    {
                      key: 'isNew',
                      value: function() {
                        return !this.id
                      }
                    },
                    {
                      key: 'existed',
                      value: function() {
                        if (!this.id) return !1
                        var e = C.getState(this.className, this._getStateIdentifier())
                        return e ? e.existed : !1
                      }
                    },
                    {
                      key: 'isValid',
                      value: function() {
                        return !this.validate(this.attributes)
                      }
                    },
                    {
                      key: 'validate',
                      value: function(e) {
                        if (e.hasOwnProperty('ACL') && !(e.ACL instanceof k['default']))
                          return new j['default'](
                            j['default'].OTHER_CAUSE,
                            'ACL must be a Parse ACL.'
                          )
                        for (var t in e)
                          if (!/^[A-Za-z][0-9A-Za-z_]*$/.test(t))
                            return new j['default'](j['default'].INVALID_KEY_NAME)
                        return !1
                      }
                    },
                    {
                      key: 'getACL',
                      value: function() {
                        var e = this.get('ACL')
                        return e instanceof k['default'] ? e : null
                      }
                    },
                    {
                      key: 'setACL',
                      value: function(e, t) {
                        return this.set('ACL', e, t)
                      }
                    },
                    {
                      key: 'clear',
                      value: function() {
                        var e = this.attributes,
                          t = {},
                          r = ['createdAt', 'updatedAt']
                        'function' == typeof this.constructor.readOnlyAttributes &&
                          (r = r.concat(this.constructor.readOnlyAttributes()))
                        for (var n in e) r.indexOf(n) < 0 && (t[n] = !0)
                        return this.set(t, { unset: !0 })
                      }
                    },
                    {
                      key: 'fetch',
                      value: function(e) {
                        e = e || {}
                        var t = {}
                        e.hasOwnProperty('useMasterKey') && (t.useMasterKey = e.useMasterKey),
                          e.hasOwnProperty('sessionToken') && (t.sessionToken = e.sessionToken)
                        var r = d['default'].getObjectController()
                        return r.fetch(this, !0, t)._thenRunCallbacks(e)
                      }
                    },
                    {
                      key: 'save',
                      value: function(e, t, r) {
                        var n,
                          a,
                          s = this
                        if (
                          ('object' == typeof e || 'undefined' == typeof e
                            ? ((n = e), (a = t))
                            : ((n = {}), (n[e] = t), (a = r)),
                          !a &&
                            n &&
                            ((a = {}),
                            'function' == typeof n.success &&
                              ((a.success = n.success), delete n.success),
                            'function' == typeof n.error && ((a.error = n.error), delete n.error)),
                          n)
                        ) {
                          var o = this.validate(n)
                          if (o)
                            return (
                              a && 'function' == typeof a.error && a.error(this, o),
                              M['default'].error(o)
                            )
                          this.set(n, a)
                        }
                        a = a || {}
                        var i = {}
                        a.hasOwnProperty('useMasterKey') && (i.useMasterKey = a.useMasterKey),
                          a.hasOwnProperty('sessionToken') && (i.sessionToken = a.sessionToken)
                        var u = d['default'].getObjectController(),
                          l = $['default'](this)
                        return u
                          .save(l, i)
                          .then(function() {
                            return u.save(s, i)
                          })
                          ._thenRunCallbacks(a, this)
                      }
                    },
                    {
                      key: 'destroy',
                      value: function(e) {
                        e = e || {}
                        var t = {}
                        return (
                          e.hasOwnProperty('useMasterKey') && (t.useMasterKey = e.useMasterKey),
                          e.hasOwnProperty('sessionToken') && (t.sessionToken = e.sessionToken),
                          this.id
                            ? d['default']
                                .getObjectController()
                                .destroy(this, t)
                                ._thenRunCallbacks(e)
                            : M['default'].as()._thenRunCallbacks(e)
                        )
                      }
                    },
                    {
                      key: 'attributes',
                      get: function() {
                        return o(C.estimateAttributes(this.className, this._getStateIdentifier()))
                      }
                    },
                    {
                      key: 'createdAt',
                      get: function() {
                        return this._getServerData().createdAt
                      }
                    },
                    {
                      key: 'updatedAt',
                      get: function() {
                        return this._getServerData().updatedAt
                      }
                    }
                  ],
                  [
                    {
                      key: '_clearAllState',
                      value: function() {
                        C._clearAllState()
                      }
                    },
                    {
                      key: 'fetchAll',
                      value: function(e, t) {
                        var t = t || {},
                          r = {}
                        return (
                          t.hasOwnProperty('useMasterKey') && (r.useMasterKey = t.useMasterKey),
                          t.hasOwnProperty('sessionToken') && (r.sessionToken = t.sessionToken),
                          d['default']
                            .getObjectController()
                            .fetch(e, !0, r)
                            ._thenRunCallbacks(t)
                        )
                      }
                    },
                    {
                      key: 'fetchAllIfNeeded',
                      value: function(e, t) {
                        var t = t || {},
                          r = {}
                        return (
                          t.hasOwnProperty('useMasterKey') && (r.useMasterKey = t.useMasterKey),
                          t.hasOwnProperty('sessionToken') && (r.sessionToken = t.sessionToken),
                          d['default']
                            .getObjectController()
                            .fetch(e, !1, r)
                            ._thenRunCallbacks(t)
                        )
                      }
                    },
                    {
                      key: 'destroyAll',
                      value: function(e, t) {
                        var t = t || {},
                          r = {}
                        return (
                          t.hasOwnProperty('useMasterKey') && (r.useMasterKey = t.useMasterKey),
                          t.hasOwnProperty('sessionToken') && (r.sessionToken = t.sessionToken),
                          d['default']
                            .getObjectController()
                            .destroy(e, r)
                            ._thenRunCallbacks(t)
                        )
                      }
                    },
                    {
                      key: 'saveAll',
                      value: function(e, t) {
                        var t = t || {},
                          r = {}
                        return (
                          t.hasOwnProperty('useMasterKey') && (r.useMasterKey = t.useMasterKey),
                          t.hasOwnProperty('sessionToken') && (r.sessionToken = t.sessionToken),
                          d['default']
                            .getObjectController()
                            .save(e, r)
                            ._thenRunCallbacks(t)
                        )
                      }
                    },
                    {
                      key: 'createWithoutData',
                      value: function(e) {
                        var t = new this()
                        return (t.id = e), t
                      }
                    },
                    {
                      key: 'fromJSON',
                      value: function(t) {
                        if (!t.className)
                          throw new Error('Cannot create an object without a className')
                        var r = J[t.className],
                          n = r ? new r() : new e(t.className),
                          a = {}
                        for (var s in t) 'className' !== s && '__type' !== s && (a[s] = t[s])
                        return n._finishFetch(a), n
                      }
                    },
                    {
                      key: 'registerSubclass',
                      value: function(e, t) {
                        if ('string' != typeof e)
                          throw new TypeError('The first argument must be a valid class name.')
                        if ('undefined' == typeof t)
                          throw new TypeError('You must supply a subclass constructor.')
                        if ('function' != typeof t)
                          throw new TypeError(
                            'You must register the subclass constructor. Did you attempt to register an instance of the subclass?'
                          )
                        ;(J[e] = t), t.className || (t.className = e)
                      }
                    },
                    {
                      key: 'extend',
                      value: function(t, r, n) {
                        if ('string' != typeof t) {
                          if (t && 'string' == typeof t.className)
                            return e.extend(t.className, t, r)
                          throw new Error(
                            "Parse.Object.extend's first argument should be the className."
                          )
                        }
                        var a = t
                        'User' === a && d['default'].get('PERFORM_USER_REWRITE') && (a = '_User')
                        var s = e.prototype
                        this.hasOwnProperty('__super__') && this.__super__
                          ? (s = this.prototype)
                          : J[a] && (s = J[a].prototype)
                        var o = function(e) {
                          if (
                            ((this.className = a),
                            (this._objCount = B++),
                            e && 'object' == typeof e && !this.set(e || {}))
                          )
                            throw new Error("Can't create an invalid Parse Object")
                          'function' == typeof this.initialize &&
                            this.initialize.apply(this, arguments)
                        }
                        if (
                          ((o.className = a),
                          (o.__super__ = s),
                          (o.prototype = i(s, {
                            constructor: {
                              value: o,
                              enumerable: !1,
                              writable: !0,
                              configurable: !0
                            }
                          })),
                          r)
                        )
                          for (var l in r)
                            'className' !== l &&
                              u(o.prototype, l, {
                                value: r[l],
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                              })
                        if (n)
                          for (var l in n)
                            'className' !== l &&
                              u(o, l, {
                                value: n[l],
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                              })
                        return (
                          (o.extend = function(t, r, n) {
                            return 'string' == typeof t
                              ? e.extend.call(o, t, r, n)
                              : e.extend.call(o, a, t, r)
                          }),
                          (o.createWithoutData = e.createWithoutData),
                          (J[a] = o),
                          o
                        )
                      }
                    },
                    {
                      key: 'enableSingleInstance',
                      value: function() {
                        G = !0
                      }
                    },
                    {
                      key: 'disableSingleInstance',
                      value: function() {
                        G = !1
                      }
                    }
                  ]
                ),
                e
              )
            })()
          ;(r['default'] = V),
            d['default'].setObjectController({
              fetch: function(e, t, r) {
                if (Array.isArray(e)) {
                  if (e.length < 1) return M['default'].as([])
                  var n = [],
                    a = [],
                    o = null,
                    i = [],
                    u = null
                  if (
                    (e.forEach(function(e, r) {
                      u ||
                        (o || (o = e.className),
                        o !== e.className &&
                          (u = new j['default'](
                            j['default'].INVALID_CLASS_NAME,
                            'All objects should be of the same class'
                          )),
                        e.id ||
                          (u = new j['default'](
                            j['default'].MISSING_OBJECT_ID,
                            'All objects must have an ID'
                          )),
                        (t || 0 === s(e._getServerData()).length) && (a.push(e.id), n.push(e)),
                        i.push(e))
                    }),
                    u)
                  )
                    return M['default'].error(u)
                  var l = new q['default'](o)
                  return (
                    l.containedIn('objectId', a),
                    (l._limit = a.length),
                    l.find(r).then(function(e) {
                      var r = {}
                      e.forEach(function(e) {
                        r[e.id] = e
                      })
                      for (var a = 0; a < n.length; a++) {
                        var s = n[a]
                        if ((!s || !s.id || !r[s.id]) && t)
                          return M['default'].error(
                            new j['default'](
                              j['default'].OBJECT_NOT_FOUND,
                              'All objects must exist on the server.'
                            )
                          )
                      }
                      if (!G)
                        for (var a = 0; a < i.length; a++) {
                          var s = i[a]
                          if (s && s.id && r[s.id]) {
                            var o = s.id
                            s._finishFetch(r[o].toJSON()), (i[a] = r[o])
                          }
                        }
                      return M['default'].as(i)
                    })
                  )
                }
                var c = d['default'].getRESTController()
                return c
                  .request('GET', 'classes/' + e.className + '/' + e._getId(), {}, r)
                  .then(function(t, r, n) {
                    return e instanceof V && (e._clearPendingOps(), e._finishFetch(t)), e
                  })
              },
              destroy: function(e, t) {
                var r = d['default'].getRESTController()
                if (Array.isArray(e)) {
                  if (e.length < 1) return M['default'].as([])
                  var n = [[]]
                  e.forEach(function(e) {
                    e.id && (n[n.length - 1].push(e), n[n.length - 1].length >= 20 && n.push([]))
                  }),
                    0 === n[n.length - 1].length && n.pop()
                  var a = M['default'].as(),
                    s = []
                  return (
                    n.forEach(function(e) {
                      a = a.then(function() {
                        return r
                          .request(
                            'POST',
                            'batch',
                            {
                              requests: e.map(function(e) {
                                return {
                                  method: 'DELETE',
                                  path: '/1/classes/' + e.className + '/' + e._getId(),
                                  body: {}
                                }
                              })
                            },
                            t
                          )
                          .then(function(t) {
                            for (var r = 0; r < t.length; r++)
                              if (t[r] && t[r].hasOwnProperty('error')) {
                                var n = new j['default'](t[r].error.code, t[r].error.error)
                                ;(n.object = e[r]), s.push(n)
                              }
                          })
                      })
                    }),
                    a.then(function() {
                      if (s.length) {
                        var t = new j['default'](j['default'].AGGREGATE_ERROR)
                        return (t.errors = s), M['default'].error(t)
                      }
                      return M['default'].as(e)
                    })
                  )
                }
                return e instanceof V
                  ? r
                      .request('DELETE', 'classes/' + e.className + '/' + e._getId(), {}, t)
                      .then(function() {
                        return M['default'].as(e)
                      })
                  : M['default'].as(e)
              },
              save: function(e, t) {
                var r = d['default'].getRESTController()
                if (Array.isArray(e)) {
                  if (e.length < 1) return M['default'].as([])
                  for (var n = e.concat(), a = 0; a < e.length; a++)
                    e[a] instanceof V && (n = n.concat($['default'](e[a], !0)))
                  n = F['default'](n)
                  var s = M['default'].as(),
                    o = []
                  return (
                    n.forEach(function(e) {
                      e instanceof N['default']
                        ? (s = s.then(function() {
                            return e.save()
                          }))
                        : e instanceof V && o.push(e)
                    }),
                    s.then(function() {
                      var n = null
                      return M['default']
                        ._continueWhile(
                          function() {
                            return o.length > 0
                          },
                          function() {
                            var e = [],
                              a = []
                            if (
                              (o.forEach(function(t) {
                                e.length < 20 && p['default'](t) ? e.push(t) : a.push(t)
                              }),
                              (o = a),
                              e.length < 1)
                            )
                              return M['default'].error(
                                new j['default'](
                                  j['default'].OTHER_CAUSE,
                                  'Tried to save a batch with a cycle.'
                                )
                              )
                            var s = new M['default'](),
                              i = [],
                              u = []
                            return (
                              e.forEach(function(e, t) {
                                var r = new M['default']()
                                i.push(r)
                                var a = function() {
                                  return (
                                    r.resolve(),
                                    s.then(function(r, a) {
                                      if (r[t].hasOwnProperty('success'))
                                        e._handleSaveResponse(r[t].success, a)
                                      else {
                                        if (!n && r[t].hasOwnProperty('error')) {
                                          var s = r[t].error
                                          ;(n = new j['default'](s.code, s.error)), (o = [])
                                        }
                                        e._handleSaveError()
                                      }
                                    })
                                  )
                                }
                                C.pushPendingState(e.className, e._getStateIdentifier()),
                                  u.push(C.enqueueTask(e.className, e._getStateIdentifier(), a))
                              }),
                              M['default']
                                .when(i)
                                .then(function() {
                                  return r.request(
                                    'POST',
                                    'batch',
                                    {
                                      requests: e.map(function(e) {
                                        var t = e._getSaveParams()
                                        return (t.path = '/1/' + t.path), t
                                      })
                                    },
                                    t
                                  )
                                })
                                .then(function(e, t, r) {
                                  s.resolve(e, t)
                                }),
                              M['default'].when(u)
                            )
                          }
                        )
                        .then(function() {
                          return n ? M['default'].error(n) : M['default'].as(e)
                        })
                    })
                  )
                }
                if (e instanceof V) {
                  var i = e,
                    u = function() {
                      var e = i._getSaveParams()
                      return r.request(e.method, e.path, e.body, t).then(
                        function(e, t) {
                          i._handleSaveResponse(e, t)
                        },
                        function(e) {
                          return i._handleSaveError(), M['default'].error(e)
                        }
                      )
                    }
                  return (
                    C.pushPendingState(e.className, e._getStateIdentifier()),
                    C.enqueueTask(e.className, e._getStateIdentifier(), u).then(
                      function() {
                        return e
                      },
                      function(e) {
                        return e
                      }
                    )
                  )
                }
                return M['default'].as()
              }
            }),
            (t.exports = r['default'])
        },
        {
          './CoreManager': 3,
          './ObjectState': 6,
          './ParseACL': 8,
          './ParseError': 10,
          './ParseFile': 11,
          './ParseOp': 15,
          './ParsePromise': 16,
          './ParseQuery': 17,
          './ParseRelation': 18,
          './canBeSerialized': 28,
          './decode': 29,
          './encode': 30,
          './equals': 31,
          './escape': 32,
          './parseDate': 34,
          './unique': 35,
          './unsavedChildren': 36,
          'babel-runtime/core-js/object/create': 37,
          'babel-runtime/core-js/object/define-property': 38,
          'babel-runtime/core-js/object/freeze': 39,
          'babel-runtime/core-js/object/keys': 41,
          'babel-runtime/helpers/class-call-check': 43,
          'babel-runtime/helpers/create-class': 44,
          'babel-runtime/helpers/interop-require-default': 47,
          'babel-runtime/helpers/interop-require-wildcard': 48
        }
      ],
      15: [
        function(e, t, r) {
          'use strict'
          function n(e) {
            if (!e || !e.__op) return null
            switch (e.__op) {
              case 'Delete':
                return new C()
              case 'Increment':
                return new P(e.amount)
              case 'Add':
                return new k(d['default'](e.objects))
              case 'AddUnique':
                return new A(d['default'](e.objects))
              case 'Remove':
                return new E(d['default'](e.objects))
              case 'AddRelation':
                var t = d['default'](e.objects)
                return Array.isArray(t) ? new S(t, []) : new S([], [])
              case 'RemoveRelation':
                var r = d['default'](e.objects)
                return Array.isArray(r) ? new S([], r) : new S([], [])
              case 'Batch':
                for (var t = [], r = [], n = 0; n < e.ops.length; n++)
                  'AddRelation' === e.ops[n].__op
                    ? (t = t.concat(d['default'](e.ops[n].objects)))
                    : 'RemoveRelation' === e.ops[n].__op &&
                      (r = r.concat(d['default'](e.ops[n].objects)))
                return new S(t, r)
            }
            return null
          }
          var a = e('babel-runtime/helpers/create-class')['default'],
            s = e('babel-runtime/helpers/class-call-check')['default'],
            o = e('babel-runtime/helpers/get')['default'],
            i = e('babel-runtime/helpers/inherits')['default'],
            u = e('babel-runtime/helpers/interop-require-default')['default']
          Object.defineProperty(r, '__esModule', { value: !0 }), (r.opFromJSON = n)
          var l = e('./arrayContainsObject'),
            c = u(l),
            f = e('./decode'),
            d = u(f),
            h = e('./encode'),
            p = u(h),
            y = e('./ParseObject'),
            v = u(y),
            b = e('./ParseRelation'),
            m = u(b),
            g = e('./unique'),
            _ = u(g),
            w = (function() {
              function e() {
                s(this, e)
              }
              return (
                a(e, [
                  { key: 'applyTo', value: function(e) {} },
                  { key: 'mergeWith', value: function(e) {} },
                  { key: 'toJSON', value: function() {} }
                ]),
                e
              )
            })()
          r.Op = w
          var O = (function(e) {
            function t(e) {
              s(this, t),
                o(Object.getPrototypeOf(t.prototype), 'constructor', this).call(this),
                (this._value = e)
            }
            return (
              i(t, e),
              a(t, [
                {
                  key: 'applyTo',
                  value: function(e) {
                    return this._value
                  }
                },
                {
                  key: 'mergeWith',
                  value: function(e) {
                    return new t(this._value)
                  }
                },
                {
                  key: 'toJSON',
                  value: function() {
                    return p['default'](this._value, !1, !0)
                  }
                }
              ]),
              t
            )
          })(w)
          r.SetOp = O
          var C = (function(e) {
            function t() {
              s(this, t),
                o(Object.getPrototypeOf(t.prototype), 'constructor', this).apply(this, arguments)
            }
            return (
              i(t, e),
              a(t, [
                {
                  key: 'applyTo',
                  value: function(e) {
                    return void 0
                  }
                },
                {
                  key: 'mergeWith',
                  value: function(e) {
                    return new t()
                  }
                },
                {
                  key: 'toJSON',
                  value: function() {
                    return { __op: 'Delete' }
                  }
                }
              ]),
              t
            )
          })(w)
          r.UnsetOp = C
          var P = (function(e) {
            function t(e) {
              if (
                (s(this, t),
                o(Object.getPrototypeOf(t.prototype), 'constructor', this).call(this),
                'number' != typeof e)
              )
                throw new TypeError('Increment Op must be initialized with a numeric amount.')
              this._amount = e
            }
            return (
              i(t, e),
              a(t, [
                {
                  key: 'applyTo',
                  value: function(e) {
                    if ('undefined' == typeof e) return this._amount
                    if ('number' != typeof e)
                      throw new TypeError('Cannot increment a non-numeric value.')
                    return this._amount + e
                  }
                },
                {
                  key: 'mergeWith',
                  value: function(e) {
                    if (!e) return this
                    if (e instanceof O) return new O(this.applyTo(e._value))
                    if (e instanceof C) return new O(this._amount)
                    if (e instanceof t) return new t(this.applyTo(e._amount))
                    throw new Error('Cannot merge Increment Op with the previous Op')
                  }
                },
                {
                  key: 'toJSON',
                  value: function() {
                    return { __op: 'Increment', amount: this._amount }
                  }
                }
              ]),
              t
            )
          })(w)
          r.IncrementOp = P
          var k = (function(e) {
            function t(e) {
              s(this, t),
                o(Object.getPrototypeOf(t.prototype), 'constructor', this).call(this),
                (this._value = Array.isArray(e) ? e : [e])
            }
            return (
              i(t, e),
              a(t, [
                {
                  key: 'applyTo',
                  value: function(e) {
                    if (null == e) return this._value
                    if (Array.isArray(e)) return e.concat(this._value)
                    throw new Error('Cannot add elements to a non-array value')
                  }
                },
                {
                  key: 'mergeWith',
                  value: function(e) {
                    if (!e) return this
                    if (e instanceof O) return new O(this.applyTo(e._value))
                    if (e instanceof C) return new O(this._value)
                    if (e instanceof t) return new t(this.applyTo(e._value))
                    throw new Error('Cannot merge Add Op with the previous Op')
                  }
                },
                {
                  key: 'toJSON',
                  value: function() {
                    return { __op: 'Add', objects: p['default'](this._value, !1, !0) }
                  }
                }
              ]),
              t
            )
          })(w)
          r.AddOp = k
          var A = (function(e) {
            function t(e) {
              s(this, t),
                o(Object.getPrototypeOf(t.prototype), 'constructor', this).call(this),
                (this._value = _['default'](Array.isArray(e) ? e : [e]))
            }
            return (
              i(t, e),
              a(t, [
                {
                  key: 'applyTo',
                  value: function(e) {
                    if (null == e) return this._value || []
                    if (Array.isArray(e)) {
                      var t = e,
                        r = []
                      return (
                        this._value.forEach(function(e) {
                          e instanceof v['default']
                            ? c['default'](t, e) || r.push(e)
                            : t.indexOf(e) < 0 && r.push(e)
                        }),
                        e.concat(r)
                      )
                    }
                    throw new Error('Cannot add elements to a non-array value')
                  }
                },
                {
                  key: 'mergeWith',
                  value: function(e) {
                    if (!e) return this
                    if (e instanceof O) return new O(this.applyTo(e._value))
                    if (e instanceof C) return new O(this._value)
                    if (e instanceof t) return new t(this.applyTo(e._value))
                    throw new Error('Cannot merge AddUnique Op with the previous Op')
                  }
                },
                {
                  key: 'toJSON',
                  value: function() {
                    return { __op: 'AddUnique', objects: p['default'](this._value, !1, !0) }
                  }
                }
              ]),
              t
            )
          })(w)
          r.AddUniqueOp = A
          var E = (function(e) {
            function t(e) {
              s(this, t),
                o(Object.getPrototypeOf(t.prototype), 'constructor', this).call(this),
                (this._value = _['default'](Array.isArray(e) ? e : [e]))
            }
            return (
              i(t, e),
              a(t, [
                {
                  key: 'applyTo',
                  value: function(e) {
                    if (null == e) return []
                    if (Array.isArray(e)) {
                      for (
                        var t = e.indexOf(this._value), r = e.concat([]), t = 0;
                        t < this._value.length;
                        t++
                      ) {
                        for (var n = r.indexOf(this._value[t]); n > -1; )
                          r.splice(n, 1), (n = r.indexOf(this._value[t]))
                        if (this._value[t] instanceof v['default'] && this._value[t].id)
                          for (var a = 0; a < r.length; a++)
                            r[a] instanceof v['default'] &&
                              this._value[t].id === r[a].id &&
                              (r.splice(a, 1), a--)
                      }
                      return r
                    }
                    throw new Error('Cannot remove elements from a non-array value')
                  }
                },
                {
                  key: 'mergeWith',
                  value: function(e) {
                    if (!e) return this
                    if (e instanceof O) return new O(this.applyTo(e._value))
                    if (e instanceof C) return new C()
                    if (e instanceof t) {
                      for (var r = e._value.concat([]), n = 0; n < this._value.length; n++)
                        this._value[n] instanceof v['default']
                          ? c['default'](r, this._value[n]) || r.push(this._value[n])
                          : r.indexOf(this._value[n]) < 0 && r.push(this._value[n])
                      return new t(r)
                    }
                    throw new Error('Cannot merge Remove Op with the previous Op')
                  }
                },
                {
                  key: 'toJSON',
                  value: function() {
                    return { __op: 'Remove', objects: p['default'](this._value, !1, !0) }
                  }
                }
              ]),
              t
            )
          })(w)
          r.RemoveOp = E
          var S = (function(e) {
            function t(e, r) {
              s(this, t),
                o(Object.getPrototypeOf(t.prototype), 'constructor', this).call(this),
                (this._targetClassName = null),
                Array.isArray(e) &&
                  (this.relationsToAdd = _['default'](e.map(this._extractId, this))),
                Array.isArray(r) &&
                  (this.relationsToRemove = _['default'](r.map(this._extractId, this)))
            }
            return (
              i(t, e),
              a(t, [
                {
                  key: '_extractId',
                  value: function(e) {
                    if ('string' == typeof e) return e
                    if (!e.id)
                      throw new Error(
                        'You cannot add or remove an unsaved Parse Object from a relation'
                      )
                    if (
                      (this._targetClassName || (this._targetClassName = e.className),
                      this._targetClassName !== e.className)
                    )
                      throw new Error(
                        'Tried to create a Relation with 2 different object types: ' +
                          this._targetClassName +
                          ' and ' +
                          e.className +
                          '.'
                      )
                    return e.id
                  }
                },
                {
                  key: 'applyTo',
                  value: function(e, t, r) {
                    if (!e) {
                      var n = new v['default'](t.className)
                      t.id && 0 === t.id.indexOf('local')
                        ? (n._localId = t.id)
                        : t.id && (n.id = t.id)
                      var a = new m['default'](n, r)
                      return (a.targetClassName = this._targetClassName), a
                    }
                    if (e instanceof m['default']) {
                      if (this._targetClassName)
                        if (e.targetClassName) {
                          if (this._targetClassName !== e.targetClassName)
                            throw new Error(
                              'Related object must be a ' +
                                e.targetClassName +
                                ', but a ' +
                                this._targetClassName +
                                ' was passed in.'
                            )
                        } else e.targetClassName = this._targetClassName
                      return e
                    }
                    throw new Error('Relation cannot be applied to a non-relation field')
                  }
                },
                {
                  key: 'mergeWith',
                  value: function(e) {
                    if (!e) return this
                    if (e instanceof C)
                      throw new Error('You cannot modify a relation after deleting it.')
                    if (e instanceof t) {
                      if (e._targetClassName && e._targetClassName !== this._targetClassName)
                        throw new Error(
                          'Related object must be of class ' +
                            e._targetClassName +
                            ', but ' +
                            (this._targetClassName || 'null') +
                            ' was passed in.'
                        )
                      var r = e.relationsToAdd.concat([])
                      this.relationsToRemove.forEach(function(e) {
                        var t = r.indexOf(e)
                        t > -1 && r.splice(t, 1)
                      }),
                        this.relationsToAdd.forEach(function(e) {
                          var t = r.indexOf(e)
                          0 > t && r.push(e)
                        })
                      var n = e.relationsToRemove.concat([])
                      this.relationsToAdd.forEach(function(e) {
                        var t = n.indexOf(e)
                        t > -1 && n.splice(t, 1)
                      }),
                        this.relationsToRemove.forEach(function(e) {
                          var t = n.indexOf(e)
                          0 > t && n.push(e)
                        })
                      var a = new t(r, n)
                      return (a._targetClassName = this._targetClassName), a
                    }
                    throw new Error('Cannot merge Relation Op with the previous Op')
                  }
                },
                {
                  key: 'toJSON',
                  value: function() {
                    var e = this,
                      t = function(t) {
                        return { __type: 'Pointer', className: e._targetClassName, objectId: t }
                      },
                      r = null,
                      n = null,
                      a = null
                    return (
                      this.relationsToAdd.length > 0 &&
                        ((a = this.relationsToAdd.map(t)),
                        (r = { __op: 'AddRelation', objects: a })),
                      this.relationsToRemove.length > 0 &&
                        ((a = this.relationsToRemove.map(t)),
                        (n = { __op: 'RemoveRelation', objects: a })),
                      r && n ? { __op: 'Batch', ops: [r, n] } : r || n || {}
                    )
                  }
                }
              ]),
              t
            )
          })(w)
          r.RelationOp = S
        },
        {
          './ParseObject': 14,
          './ParseRelation': 18,
          './arrayContainsObject': 27,
          './decode': 29,
          './encode': 30,
          './unique': 35,
          'babel-runtime/helpers/class-call-check': 43,
          'babel-runtime/helpers/create-class': 44,
          'babel-runtime/helpers/get': 45,
          'babel-runtime/helpers/inherits': 46,
          'babel-runtime/helpers/interop-require-default': 47
        }
      ],
      16: [
        function(e, t, r) {
          'use strict'
          var n = e('babel-runtime/helpers/create-class')['default'],
            a = e('babel-runtime/helpers/class-call-check')['default']
          Object.defineProperty(r, '__esModule', { value: !0 })
          var s = !1,
            o = (function() {
              function e() {
                a(this, e),
                  (this._resolved = !1),
                  (this._rejected = !1),
                  (this._resolvedCallbacks = []),
                  (this._rejectedCallbacks = [])
              }
              return (
                n(
                  e,
                  [
                    {
                      key: 'resolve',
                      value: function() {
                        if (this._resolved || this._rejected)
                          throw new Error(
                            'A promise was resolved even though it had already been ' +
                              (this._resolved ? 'resolved' : 'rejected') +
                              '.'
                          )
                        this._resolved = !0
                        for (var e = arguments.length, t = Array(e), r = 0; e > r; r++)
                          t[r] = arguments[r]
                        this._result = t
                        for (var n = 0; n < this._resolvedCallbacks.length; n++)
                          this._resolvedCallbacks[n].apply(this, t)
                        ;(this._resolvedCallbacks = []), (this._rejectedCallbacks = [])
                      }
                    },
                    {
                      key: 'reject',
                      value: function(e) {
                        if (this._resolved || this._rejected)
                          throw new Error(
                            'A promise was resolved even though it had already been ' +
                              (this._resolved ? 'resolved' : 'rejected') +
                              '.'
                          )
                        ;(this._rejected = !0), (this._error = e)
                        for (var t = 0; t < this._rejectedCallbacks.length; t++)
                          this._rejectedCallbacks[t](e)
                        ;(this._resolvedCallbacks = []), (this._rejectedCallbacks = [])
                      }
                    },
                    {
                      key: 'then',
                      value: function(t, r) {
                        var n = this,
                          a = new e(),
                          s = function() {
                            for (var r = arguments.length, n = Array(r), s = 0; r > s; s++)
                              n[s] = arguments[s]
                            'function' == typeof t && (n = [t.apply(this, n)]),
                              1 === n.length && e.is(n[0])
                                ? n[0].then(
                                    function() {
                                      a.resolve.apply(a, arguments)
                                    },
                                    function(e) {
                                      a.reject(e)
                                    }
                                  )
                                : a.resolve.apply(a, n)
                          },
                          o = function(t) {
                            var n = []
                            'function' == typeof r
                              ? ((n = [r(t)]),
                                1 === n.length && e.is(n[0])
                                  ? n[0].then(
                                      function() {
                                        a.resolve.apply(a, arguments)
                                      },
                                      function(e) {
                                        a.reject(e)
                                      }
                                    )
                                  : a.reject(n[0]))
                              : a.reject(t)
                          },
                          i = function(e) {
                            e.call()
                          }
                        return (
                          this._resolved
                            ? i(function() {
                                s.apply(n, n._result)
                              })
                            : this._rejected
                            ? i(function() {
                                o(n._error)
                              })
                            : (this._resolvedCallbacks.push(s), this._rejectedCallbacks.push(o)),
                          a
                        )
                      }
                    },
                    {
                      key: 'always',
                      value: function(e) {
                        return this.then(e, e)
                      }
                    },
                    {
                      key: 'done',
                      value: function(e) {
                        return this.then(e)
                      }
                    },
                    {
                      key: 'fail',
                      value: function(e) {
                        return this.then(null, e)
                      }
                    },
                    {
                      key: '_thenRunCallbacks',
                      value: function(t, r) {
                        var n = {}
                        return (
                          'function' == typeof t
                            ? ((n.success = function(e) {
                                t(e, null)
                              }),
                              (n.error = function(e) {
                                t(null, e)
                              }))
                            : 'object' == typeof t &&
                              ('function' == typeof t.success && (n.success = t.success),
                              'function' == typeof t.error && (n.error = t.error)),
                          this.then(
                            function() {
                              for (var t = arguments.length, r = Array(t), a = 0; t > a; a++)
                                r[a] = arguments[a]
                              return n.success && n.success.apply(this, r), e.as.apply(e, arguments)
                            },
                            function(t) {
                              return (
                                n.error && ('undefined' != typeof r ? n.error(r, t) : n.error(t)),
                                e.error(t)
                              )
                            }
                          )
                        )
                      }
                    },
                    {
                      key: '_continueWith',
                      value: function(e) {
                        return this.then(
                          function() {
                            return e(arguments, null)
                          },
                          function(t) {
                            return e(null, t)
                          }
                        )
                      }
                    }
                  ],
                  [
                    {
                      key: 'is',
                      value: function(e) {
                        return 'undefined' != typeof e && 'function' == typeof e.then
                      }
                    },
                    {
                      key: 'as',
                      value: function() {
                        for (var t = new e(), r = arguments.length, n = Array(r), a = 0; r > a; a++)
                          n[a] = arguments[a]
                        return t.resolve.apply(t, n), t
                      }
                    },
                    {
                      key: 'error',
                      value: function() {
                        for (var t = new e(), r = arguments.length, n = Array(r), a = 0; r > a; a++)
                          n[a] = arguments[a]
                        return t.reject.apply(t, n), t
                      }
                    },
                    {
                      key: 'when',
                      value: function(t) {
                        var r
                        r = Array.isArray(t) ? t : arguments
                        var n = r.length,
                          a = !1,
                          s = [],
                          o = []
                        if (((s.length = r.length), (o.length = r.length), 0 === n))
                          return e.as.apply(this, s)
                        for (
                          var i = new e(),
                            u = function() {
                              n--, 0 >= n && (a ? i.reject(o) : i.resolve.apply(i, s))
                            },
                            l = function(t, r) {
                              e.is(t)
                                ? t.then(
                                    function(e) {
                                      ;(s[r] = e), u()
                                    },
                                    function(e) {
                                      ;(o[r] = e), (a = !0), u()
                                    }
                                  )
                                : ((s[c] = t), u())
                            },
                            c = 0;
                          c < r.length;
                          c++
                        )
                          l(r[c], c)
                        return i
                      }
                    },
                    {
                      key: '_continueWhile',
                      value: function(t, r) {
                        return t()
                          ? r().then(function() {
                              return e._continueWhile(t, r)
                            })
                          : e.as()
                      }
                    },
                    {
                      key: 'isPromisesAPlusCompliant',
                      value: function() {
                        return s
                      }
                    }
                  ]
                ),
                e
              )
            })()
          ;(r['default'] = o), (t.exports = r['default'])
        },
        { 'babel-runtime/helpers/class-call-check': 43, 'babel-runtime/helpers/create-class': 44 }
      ],
      17: [
        function(e, t, r) {
          'use strict'
          function n(e) {
            return '\\Q' + e.replace('\\E', '\\E\\\\E\\Q') + '\\E'
          }
          var a = e('babel-runtime/helpers/create-class')['default'],
            s = e('babel-runtime/helpers/class-call-check')['default'],
            o = e('babel-runtime/helpers/interop-require-default')['default']
          Object.defineProperty(r, '__esModule', { value: !0 })
          var i = e('./CoreManager'),
            u = o(i),
            l = e('./encode'),
            c = o(l),
            f = e('./ParseError'),
            d = o(f),
            h = e('./ParseGeoPoint'),
            p = o(h),
            y = e('./ParseObject'),
            v = o(y),
            b = e('./ParsePromise'),
            m = o(b),
            g = (function() {
              function e(t) {
                if ((s(this, e), 'string' == typeof t)) this.className = t
                else if (t instanceof v['default']) this.className = t.className
                else {
                  if ('function' != typeof t)
                    throw new TypeError(
                      'A ParseQuery must be constructed with a ParseObject or class name.'
                    )
                  if ('string' == typeof t.className) this.className = t.className
                  else {
                    var r = new t()
                    this.className = r.className
                  }
                }
                ;(this._where = {}),
                  (this._include = []),
                  (this._limit = -1),
                  (this._skip = 0),
                  (this._extraOptions = {})
              }
              return (
                a(
                  e,
                  [
                    {
                      key: '_orQuery',
                      value: function(e) {
                        var t = e.map(function(e) {
                          return e.toJSON().where
                        })
                        return (this._where.$or = t), this
                      }
                    },
                    {
                      key: '_addCondition',
                      value: function(e, t, r) {
                        return (
                          (this._where[e] && 'string' != typeof this._where[e]) ||
                            (this._where[e] = {}),
                          (this._where[e][t] = c['default'](r, !1, !0)),
                          this
                        )
                      }
                    },
                    {
                      key: 'toJSON',
                      value: function() {
                        var e = { where: this._where }
                        this._include.length && (e.include = this._include.join(',')),
                          this._select && (e.keys = this._select.join(',')),
                          this._limit >= 0 && (e.limit = this._limit),
                          this._skip > 0 && (e.skip = this._skip),
                          this._order && (e.order = this._order.join(','))
                        for (var t in this._extraOptions) e[t] = this._extraOptions[t]
                        return e
                      }
                    },
                    {
                      key: 'get',
                      value: function(e, t) {
                        this.equalTo('objectId', e)
                        var r = {}
                        return (
                          t &&
                            t.hasOwnProperty('useMasterKey') &&
                            (r.useMasterKey = t.useMasterKey),
                          t &&
                            t.hasOwnProperty('sessionToken') &&
                            (r.sessionToken = t.sessionToken),
                          this.first(r)
                            .then(function(e) {
                              if (e) return e
                              var t = new d['default'](
                                d['default'].OBJECT_NOT_FOUND,
                                'Object not found.'
                              )
                              return m['default'].error(t)
                            })
                            ._thenRunCallbacks(t, null)
                        )
                      }
                    },
                    {
                      key: 'find',
                      value: function(e) {
                        var t = this
                        e = e || {}
                        var r = {}
                        e.hasOwnProperty('useMasterKey') && (r.useMasterKey = e.useMasterKey),
                          e.hasOwnProperty('sessionToken') && (r.sessionToken = e.sessionToken)
                        var n = u['default'].getQueryController()
                        return n
                          .find(this.className, this.toJSON(), r)
                          .then(function(e) {
                            return e.results.map(function(e) {
                              return (e.className = t.className), v['default'].fromJSON(e)
                            })
                          })
                          ._thenRunCallbacks(e)
                      }
                    },
                    {
                      key: 'count',
                      value: function(e) {
                        e = e || {}
                        var t = {}
                        e.hasOwnProperty('useMasterKey') && (t.useMasterKey = e.useMasterKey),
                          e.hasOwnProperty('sessionToken') && (t.sessionToken = e.sessionToken)
                        var r = u['default'].getQueryController(),
                          n = this.toJSON()
                        return (
                          (n.limit = 0),
                          (n.count = 1),
                          r
                            .find(this.className, n, t)
                            .then(function(e) {
                              return e.count
                            })
                            ._thenRunCallbacks(e)
                        )
                      }
                    },
                    {
                      key: 'first',
                      value: function(e) {
                        var t = this
                        e = e || {}
                        var r = {}
                        e.hasOwnProperty('useMasterKey') && (r.useMasterKey = e.useMasterKey),
                          e.hasOwnProperty('sessionToken') && (r.sessionToken = e.sessionToken)
                        var n = u['default'].getQueryController(),
                          a = this.toJSON()
                        return (
                          (a.limit = 1),
                          n
                            .find(this.className, a, r)
                            .then(function(e) {
                              var r = e.results
                              return r[0]
                                ? ((r[0].className = t.className), v['default'].fromJSON(r[0]))
                                : void 0
                            })
                            ._thenRunCallbacks(e)
                        )
                      }
                    },
                    {
                      key: 'each',
                      value: function(t, r) {
                        if (((r = r || {}), this._order || this._skip || this._limit >= 0))
                          return m['default']
                            .error('Cannot iterate on a query with sort, skip, or limit.')
                            ._thenRunCallbacks(r)
                        var n = (new m['default'](), new e(this.className))
                        ;(n._limit = r.batchSize || 100),
                          (n._include = this._include.map(function(e) {
                            return e
                          })),
                          this._select &&
                            (n._select = this._select.map(function(e) {
                              return e
                            })),
                          (n._where = {})
                        for (var a in this._where) {
                          var s = this._where[a]
                          if (Array.isArray(s))
                            n._where[a] = s.map(function(e) {
                              return e
                            })
                          else if (s && 'object' == typeof s) {
                            var o = {}
                            n._where[a] = o
                            for (var i in s) o[i] = s[i]
                          } else n._where[a] = s
                        }
                        n.ascending('objectId')
                        var u = {}
                        r.hasOwnProperty('useMasterKey') && (u.useMasterKey = r.useMasterKey),
                          r.hasOwnProperty('sessionToken') && (u.sessionToken = r.sessionToken)
                        var l = !1
                        return m['default']
                          ._continueWhile(
                            function() {
                              return !l
                            },
                            function() {
                              return n.find(u).then(function(e) {
                                var r = m['default'].as()
                                return (
                                  e.forEach(function(e) {
                                    r = r.then(function() {
                                      return t(e)
                                    })
                                  }),
                                  r.then(function() {
                                    e.length >= n._limit
                                      ? n.greaterThan('objectId', e[e.length - 1].id)
                                      : (l = !0)
                                  })
                                )
                              })
                            }
                          )
                          ._thenRunCallbacks(r)
                      }
                    },
                    {
                      key: 'equalTo',
                      value: function(e, t) {
                        return 'undefined' == typeof t
                          ? this.doesNotExist(e)
                          : ((this._where[e] = c['default'](t, !1, !0)), this)
                      }
                    },
                    {
                      key: 'notEqualTo',
                      value: function(e, t) {
                        return this._addCondition(e, '$ne', t)
                      }
                    },
                    {
                      key: 'lessThan',
                      value: function(e, t) {
                        return this._addCondition(e, '$lt', t)
                      }
                    },
                    {
                      key: 'greaterThan',
                      value: function(e, t) {
                        return this._addCondition(e, '$gt', t)
                      }
                    },
                    {
                      key: 'lessThanOrEqualTo',
                      value: function(e, t) {
                        return this._addCondition(e, '$lte', t)
                      }
                    },
                    {
                      key: 'greaterThanOrEqualTo',
                      value: function(e, t) {
                        return this._addCondition(e, '$gte', t)
                      }
                    },
                    {
                      key: 'containedIn',
                      value: function(e, t) {
                        return this._addCondition(e, '$in', t)
                      }
                    },
                    {
                      key: 'notContainedIn',
                      value: function(e, t) {
                        return this._addCondition(e, '$nin', t)
                      }
                    },
                    {
                      key: 'containsAll',
                      value: function(e, t) {
                        return this._addCondition(e, '$all', t)
                      }
                    },
                    {
                      key: 'exists',
                      value: function(e) {
                        return this._addCondition(e, '$exists', !0)
                      }
                    },
                    {
                      key: 'doesNotExist',
                      value: function(e) {
                        return this._addCondition(e, '$exists', !1)
                      }
                    },
                    {
                      key: 'matches',
                      value: function(e, t, r) {
                        return (
                          this._addCondition(e, '$regex', t),
                          r || (r = ''),
                          t.ignoreCase && (r += 'i'),
                          t.multiline && (r += 'm'),
                          r.length && this._addCondition(e, '$options', r),
                          this
                        )
                      }
                    },
                    {
                      key: 'matchesQuery',
                      value: function(e, t) {
                        var r = t.toJSON()
                        return (r.className = t.className), this._addCondition(e, '$inQuery', r)
                      }
                    },
                    {
                      key: 'doesNotMatchQuery',
                      value: function(e, t) {
                        var r = t.toJSON()
                        return (r.className = t.className), this._addCondition(e, '$notInQuery', r)
                      }
                    },
                    {
                      key: 'matchesKeyInQuery',
                      value: function(e, t, r) {
                        var n = r.toJSON()
                        return (
                          (n.className = r.className),
                          this._addCondition(e, '$select', { key: t, query: n })
                        )
                      }
                    },
                    {
                      key: 'doesNotMatchKeyInQuery',
                      value: function(e, t, r) {
                        var n = r.toJSON()
                        return (
                          (n.className = r.className),
                          this._addCondition(e, '$dontSelect', { key: t, query: n })
                        )
                      }
                    },
                    {
                      key: 'contains',
                      value: function(e, t) {
                        if ('string' != typeof t)
                          throw new Error('The value being searched for must be a string.')
                        return this._addCondition(e, '$regex', n(t))
                      }
                    },
                    {
                      key: 'startsWith',
                      value: function(e, t) {
                        if ('string' != typeof t)
                          throw new Error('The value being searched for must be a string.')
                        return this._addCondition(e, '$regex', '^' + n(t))
                      }
                    },
                    {
                      key: 'endsWith',
                      value: function(e, t) {
                        if ('string' != typeof t)
                          throw new Error('The value being searched for must be a string.')
                        return this._addCondition(e, '$regex', n(t) + '$')
                      }
                    },
                    {
                      key: 'near',
                      value: function(e, t) {
                        return (
                          t instanceof p['default'] || (t = new p['default'](t)),
                          this._addCondition(e, '$nearSphere', t)
                        )
                      }
                    },
                    {
                      key: 'withinRadians',
                      value: function(e, t, r) {
                        return this.near(e, t), this._addCondition(e, '$maxDistance', r)
                      }
                    },
                    {
                      key: 'withinMiles',
                      value: function(e, t, r) {
                        return this.withinRadians(e, t, r / 3958.8)
                      }
                    },
                    {
                      key: 'withinKilometers',
                      value: function(e, t, r) {
                        return this.withinRadians(e, t, r / 6371)
                      }
                    },
                    {
                      key: 'withinGeoBox',
                      value: function(e, t, r) {
                        return (
                          t instanceof p['default'] || (t = new p['default'](t)),
                          r instanceof p['default'] || (r = new p['default'](r)),
                          this._addCondition(e, '$within', { $box: [t, r] }),
                          this
                        )
                      }
                    },
                    {
                      key: 'ascending',
                      value: function() {
                        this._order = []
                        for (var e = arguments.length, t = Array(e), r = 0; e > r; r++)
                          t[r] = arguments[r]
                        return this.addAscending.apply(this, t)
                      }
                    },
                    {
                      key: 'addAscending',
                      value: function() {
                        var e = this
                        this._order || (this._order = [])
                        for (var t = arguments.length, r = Array(t), n = 0; t > n; n++)
                          r[n] = arguments[n]
                        return (
                          r.forEach(function(t) {
                            Array.isArray(t) && (t = t.join()),
                              (e._order = e._order.concat(t.replace(/\s/g, '').split(',')))
                          }),
                          this
                        )
                      }
                    },
                    {
                      key: 'descending',
                      value: function() {
                        this._order = []
                        for (var e = arguments.length, t = Array(e), r = 0; e > r; r++)
                          t[r] = arguments[r]
                        return this.addDescending.apply(this, t)
                      }
                    },
                    {
                      key: 'addDescending',
                      value: function() {
                        var e = this
                        this._order || (this._order = [])
                        for (var t = arguments.length, r = Array(t), n = 0; t > n; n++)
                          r[n] = arguments[n]
                        return (
                          r.forEach(function(t) {
                            Array.isArray(t) && (t = t.join()),
                              (e._order = e._order.concat(
                                t
                                  .replace(/\s/g, '')
                                  .split(',')
                                  .map(function(e) {
                                    return '-' + e
                                  })
                              ))
                          }),
                          this
                        )
                      }
                    },
                    {
                      key: 'skip',
                      value: function(e) {
                        if ('number' != typeof e || 0 > e)
                          throw new Error('You can only skip by a positive number')
                        return (this._skip = e), this
                      }
                    },
                    {
                      key: 'limit',
                      value: function(e) {
                        if ('number' != typeof e)
                          throw new Error('You can only set the limit to a numeric value')
                        return (this._limit = e), this
                      }
                    },
                    {
                      key: 'include',
                      value: function() {
                        for (var e = this, t = arguments.length, r = Array(t), n = 0; t > n; n++)
                          r[n] = arguments[n]
                        return (
                          r.forEach(function(t) {
                            Array.isArray(t)
                              ? (e._include = e._include.concat(t))
                              : e._include.push(t)
                          }),
                          this
                        )
                      }
                    },
                    {
                      key: 'select',
                      value: function() {
                        var e = this
                        this._select || (this._select = [])
                        for (var t = arguments.length, r = Array(t), n = 0; t > n; n++)
                          r[n] = arguments[n]
                        return (
                          r.forEach(function(t) {
                            Array.isArray(t) ? (e._select = e._select.concat(t)) : e._select.push(t)
                          }),
                          this
                        )
                      }
                    }
                  ],
                  [
                    {
                      key: 'or',
                      value: function() {
                        for (var t = null, r = arguments.length, n = Array(r), a = 0; r > a; a++)
                          n[a] = arguments[a]
                        n.forEach(function(e) {
                          if ((t || (t = e.className), t !== e.className))
                            throw new Error('All queries must be for the same class.')
                        })
                        var s = new e(t)
                        return s._orQuery(n), s
                      }
                    }
                  ]
                ),
                e
              )
            })()
          ;(r['default'] = g),
            u['default'].setQueryController({
              find: function(e, t, r) {
                var n = u['default'].getRESTController()
                return n.request('GET', 'classes/' + e, t, r)
              }
            }),
            (t.exports = r['default'])
        },
        {
          './CoreManager': 3,
          './ParseError': 10,
          './ParseGeoPoint': 12,
          './ParseObject': 14,
          './ParsePromise': 16,
          './encode': 30,
          'babel-runtime/helpers/class-call-check': 43,
          'babel-runtime/helpers/create-class': 44,
          'babel-runtime/helpers/interop-require-default': 47
        }
      ],
      18: [
        function(e, t, r) {
          'use strict'
          var n = e('babel-runtime/helpers/create-class')['default'],
            a = e('babel-runtime/helpers/class-call-check')['default'],
            s = e('babel-runtime/helpers/interop-require-default')['default']
          Object.defineProperty(r, '__esModule', { value: !0 })
          var o = e('./ParseOp'),
            i = e('./ParseObject'),
            u = (s(i), e('./ParseQuery')),
            l = s(u),
            c = (function() {
              function e(t, r) {
                a(this, e), (this.parent = t), (this.key = r), (this.targetClassName = null)
              }
              return (
                n(e, [
                  {
                    key: '_ensureParentAndKey',
                    value: function(e, t) {
                      if (((this.key = this.key || t), this.key !== t))
                        throw new Error(
                          'Internal Error. Relation retrieved from two different keys.'
                        )
                      if (this.parent) {
                        if (this.parent.className !== e.className)
                          throw new Error(
                            'Internal Error. Relation retrieved from two different Objects.'
                          )
                        if (this.parent.id) {
                          if (this.parent.id !== e.id)
                            throw new Error(
                              'Internal Error. Relation retrieved from two different Objects.'
                            )
                        } else e.id && (this.parent = e)
                      } else this.parent = e
                    }
                  },
                  {
                    key: 'add',
                    value: function(e) {
                      Array.isArray(e) || (e = [e])
                      var t = new o.RelationOp(e, [])
                      return (
                        this.parent.set(this.key, t),
                        (this.targetClassName = t._targetClassName),
                        parent
                      )
                    }
                  },
                  {
                    key: 'remove',
                    value: function(e) {
                      Array.isArray(e) || (e = [e])
                      var t = new o.RelationOp([], e)
                      this.parent.set(this.key, t), (this.targetClassName = t._targetClassName)
                    }
                  },
                  {
                    key: 'toJSON',
                    value: function() {
                      return { __type: 'Relation', className: this.targetClassName }
                    }
                  },
                  {
                    key: 'query',
                    value: function t() {
                      var t
                      return (
                        this.targetClassName
                          ? (t = new l['default'](this.targetClassName))
                          : ((t = new l['default'](this.parent.className)),
                            (t._extraOptions.redirectClassNameForKey = this.key)),
                        t._addCondition('$relatedTo', 'object', {
                          __type: 'Pointer',
                          className: this.parent.className,
                          objectId: this.parent.id
                        }),
                        t._addCondition('$relatedTo', 'key', this.key),
                        t
                      )
                    }
                  }
                ]),
                e
              )
            })()
          ;(r['default'] = c), (t.exports = r['default'])
        },
        {
          './ParseObject': 14,
          './ParseOp': 15,
          './ParseQuery': 17,
          'babel-runtime/helpers/class-call-check': 43,
          'babel-runtime/helpers/create-class': 44,
          'babel-runtime/helpers/interop-require-default': 47
        }
      ],
      19: [
        function(e, t, r) {
          'use strict'
          var n = e('babel-runtime/helpers/get')['default'],
            a = e('babel-runtime/helpers/inherits')['default'],
            s = e('babel-runtime/helpers/create-class')['default'],
            o = e('babel-runtime/helpers/class-call-check')['default'],
            i = e('babel-runtime/helpers/interop-require-default')['default']
          Object.defineProperty(r, '__esModule', { value: !0 })
          var u = e('./ParseACL'),
            l = i(u),
            c = e('./ParseError'),
            f = i(c),
            d = e('./ParseObject'),
            h = i(d),
            p = (function(e) {
              function t(e, r) {
                o(this, t),
                  n(Object.getPrototypeOf(t.prototype), 'constructor', this).call(this, '_Role'),
                  'string' == typeof e &&
                    r instanceof l['default'] &&
                    (this.setName(e), this.setACL(r))
              }
              return (
                a(t, e),
                s(t, [
                  {
                    key: 'getName',
                    value: function() {
                      return this.get('name')
                    }
                  },
                  {
                    key: 'setName',
                    value: function(e, t) {
                      return this.set('name', e, t)
                    }
                  },
                  {
                    key: 'getUsers',
                    value: function() {
                      return this.relation('users')
                    }
                  },
                  {
                    key: 'getRoles',
                    value: function() {
                      return this.relation('roles')
                    }
                  },
                  {
                    key: 'validate',
                    value: function(e, r) {
                      var a = n(Object.getPrototypeOf(t.prototype), 'validate', this).call(
                        this,
                        e,
                        r
                      )
                      if (a) return a
                      if ('name' in e && e.name !== this.getName()) {
                        var s = e.name
                        if (this.id && this.id !== e.objectId)
                          return new f['default'](
                            f['default'].OTHER_CAUSE,
                            "A role's name can only be set before it has been saved."
                          )
                        if ('string' != typeof s)
                          return new f['default'](
                            f['default'].OTHER_CAUSE,
                            "A role's name must be a String."
                          )
                        if (!/^[0-9a-zA-Z\-_ ]+$/.test(s))
                          return new f['default'](
                            f['default'].OTHER_CAUSE,
                            "A role's name can be only contain alphanumeric characters, _, -, and spaces."
                          )
                      }
                      return !1
                    }
                  }
                ]),
                t
              )
            })(h['default'])
          ;(r['default'] = p), h['default'].registerSubclass('_Role', p), (t.exports = r['default'])
        },
        {
          './ParseACL': 8,
          './ParseError': 10,
          './ParseObject': 14,
          'babel-runtime/helpers/class-call-check': 43,
          'babel-runtime/helpers/create-class': 44,
          'babel-runtime/helpers/get': 45,
          'babel-runtime/helpers/inherits': 46,
          'babel-runtime/helpers/interop-require-default': 47
        }
      ],
      20: [
        function(e, t, r) {
          'use strict'
          var n = e('babel-runtime/helpers/get')['default'],
            a = e('babel-runtime/helpers/inherits')['default'],
            s = e('babel-runtime/helpers/create-class')['default'],
            o = e('babel-runtime/helpers/class-call-check')['default'],
            i = e('babel-runtime/helpers/interop-require-default')['default']
          Object.defineProperty(r, '__esModule', { value: !0 })
          var u = e('./CoreManager'),
            l = i(u),
            c = e('./isRevocableSession'),
            f = i(c),
            d = e('./ParseObject'),
            h = i(d),
            p = e('./ParsePromise'),
            y = i(p),
            v = e('./ParseUser'),
            b = i(v),
            m = (function(e) {
              function t(e) {
                if (
                  (o(this, t),
                  n(Object.getPrototypeOf(t.prototype), 'constructor', this).call(this, '_Session'),
                  e && 'object' == typeof e && !this.set(e || {}))
                )
                  throw new Error("Can't create an invalid Session")
              }
              return (
                a(t, e),
                s(
                  t,
                  [
                    {
                      key: 'getSessionToken',
                      value: function() {
                        return this.get('sessionToken')
                      }
                    }
                  ],
                  [
                    {
                      key: 'readOnlyAttributes',
                      value: function() {
                        return [
                          'createdWith',
                          'expiresAt',
                          'installationId',
                          'restricted',
                          'sessionToken',
                          'user'
                        ]
                      }
                    },
                    {
                      key: 'current',
                      value: function(e) {
                        e = e || {}
                        var t = l['default'].getSessionController(),
                          r = {}
                        return (
                          e.hasOwnProperty('useMasterKey') && (r.useMasterKey = e.useMasterKey),
                          b['default'].currentAsync().then(function(e) {
                            if (!e) return y['default'].error('There is no current user.')
                            e.getSessionToken()
                            return (r.sessionToken = e.getSessionToken()), t.getSession(r)
                          })
                        )
                      }
                    },
                    {
                      key: 'isCurrentSessionRevocable',
                      value: function() {
                        var e = b['default'].current()
                        return e ? f['default'](e.getSessionToken() || '') : !1
                      }
                    }
                  ]
                ),
                t
              )
            })(h['default'])
          ;(r['default'] = m),
            h['default'].registerSubclass('_Session', m),
            l['default'].setSessionController({
              getSession: function(e) {
                var t = l['default'].getRESTController(),
                  r = new m()
                return t.request('GET', 'sessions/me', {}, e).then(function(e) {
                  return r._finishFetch(e), r._setExisted(!0), r
                })
              }
            }),
            (t.exports = r['default'])
        },
        {
          './CoreManager': 3,
          './ParseObject': 14,
          './ParsePromise': 16,
          './ParseUser': 21,
          './isRevocableSession': 33,
          'babel-runtime/helpers/class-call-check': 43,
          'babel-runtime/helpers/create-class': 44,
          'babel-runtime/helpers/get': 45,
          'babel-runtime/helpers/inherits': 46,
          'babel-runtime/helpers/interop-require-default': 47
        }
      ],
      21: [
        function(e, t, r) {
          'use strict'
          var n = e('babel-runtime/helpers/get')['default'],
            a = e('babel-runtime/helpers/inherits')['default'],
            s = e('babel-runtime/helpers/create-class')['default'],
            o = e('babel-runtime/helpers/class-call-check')['default'],
            i = e('babel-runtime/core-js/object/define-property')['default'],
            u = e('babel-runtime/helpers/interop-require-default')['default'],
            l = e('babel-runtime/helpers/interop-require-wildcard')['default']
          Object.defineProperty(r, '__esModule', { value: !0 })
          var c = e('./CoreManager'),
            f = u(c),
            d = e('./isRevocableSession'),
            h = u(d),
            p = e('./ObjectState'),
            y = l(p),
            v = e('./ParseError'),
            b = u(v),
            m = e('./ParseObject'),
            g = u(m),
            _ = e('./ParsePromise'),
            w = u(_),
            O = e('./ParseSession'),
            C = u(O),
            P = e('./Storage'),
            k = u(P),
            A = 'currentUser',
            E = !f['default'].get('IS_NODE'),
            S = !1,
            j = null,
            I = {},
            N = (function(e) {
              function t(e) {
                if (
                  (o(this, t),
                  n(Object.getPrototypeOf(t.prototype), 'constructor', this).call(this, '_User'),
                  e && 'object' == typeof e && !this.set(e || {}))
                )
                  throw new Error("Can't create an invalid Parse User")
              }
              return (
                a(t, e),
                s(
                  t,
                  [
                    {
                      key: '_upgradeToRevocableSession',
                      value: function(e) {
                        e = e || {}
                        var t = {}
                        e.hasOwnProperty('useMasterKey') && (t.useMasterKey = e.useMasterKey)
                        var r = f['default'].getUserController()
                        return r.upgradeToRevocableSession(this, t)._thenRunCallbacks(e)
                      }
                    },
                    {
                      key: '_linkWith',
                      value: function(e, t) {
                        var r,
                          n = this
                        if (
                          ('string' == typeof e ? ((r = e), (e = I[e])) : (r = e.getAuthType()),
                          t && t.hasOwnProperty('authData'))
                        ) {
                          var a = this.get('authData') || {}
                          a[r] = t.authData
                          var s = f['default'].getUserController()
                          return s.linkWith(this, a)._thenRunCallbacks(t, this)
                        }
                        var o = new w['default']()
                        return (
                          e.authenticate({
                            success: function(e, r) {
                              var a = {}
                              ;(a.authData = r),
                                t.success && (a.success = t.success),
                                t.error && (a.error = t.error),
                                n._linkWith(e, a).then(function() {
                                  o.resolve(n)
                                })
                            },
                            error: function(e, r) {
                              t.error && t.error(n, r), o.reject(r)
                            }
                          }),
                          o
                        )
                      }
                    },
                    {
                      key: '_synchronizeAuthData',
                      value: function(e) {
                        if (this.isCurrent() && e) {
                          var t
                          'string' == typeof e ? ((t = e), (e = I[t])) : (t = e.getAuthType())
                          var r = this.get('authData')
                          if ('object' == typeof r) {
                            var n = e.restoreAuthentication(r[t])
                            n || this._unlinkFrom(e)
                          }
                        }
                      }
                    },
                    {
                      key: '_synchronizeAllAuthData',
                      value: function() {
                        var e = this.get('authData')
                        if ('object' == typeof e) for (var t in e) this._synchronizeAuthData(t)
                      }
                    },
                    {
                      key: '_cleanupAuthData',
                      value: function() {
                        if (this.isCurrent()) {
                          var e = this.get('authData')
                          if ('object' == typeof e) for (var t in e) e[t] || delete e[t]
                        }
                      }
                    },
                    {
                      key: '_unlinkFrom',
                      value: function(e, t) {
                        var r,
                          n = this
                        return (
                          'string' == typeof e ? ((r = e), (e = I[e])) : (r = e.getAuthType()),
                          this._linkWith(e, { authData: null })
                            .then(function() {
                              return n._synchronizeAuthData(e), w['default'].as(n)
                            })
                            ._thenRunCallbacks(t)
                        )
                      }
                    },
                    {
                      key: '_isLinked',
                      value: function(e) {
                        var t
                        t = 'string' == typeof e ? e : e.getAuthType()
                        var r = this.get('authData') || {}
                        return !!r[t]
                      }
                    },
                    {
                      key: '_logOutWithAll',
                      value: function() {
                        var e = this.get('authData')
                        if ('object' == typeof e) for (var t in e) this._logOutWith(t)
                      }
                    },
                    {
                      key: '_logOutWith',
                      value: function(e) {
                        this.isCurrent() &&
                          ('string' == typeof e && (e = I[e]),
                          e && e.deauthenticate && e.deauthenticate())
                      }
                    },
                    {
                      key: 'isCurrent',
                      value: function() {
                        var e = t.current()
                        return !!e && e.id === this.id
                      }
                    },
                    {
                      key: 'getUsername',
                      value: function() {
                        return this.get('username')
                      }
                    },
                    {
                      key: 'setUsername',
                      value: function(e) {
                        this.set('username', e)
                      }
                    },
                    {
                      key: 'setPassword',
                      value: function(e) {
                        this.set('password', e)
                      }
                    },
                    {
                      key: 'getEmail',
                      value: function() {
                        return this.get('email')
                      }
                    },
                    {
                      key: 'setEmail',
                      value: function(e) {
                        this.set('email', e)
                      }
                    },
                    {
                      key: 'getSessionToken',
                      value: function() {
                        return this.get('sessionToken')
                      }
                    },
                    {
                      key: 'authenticated',
                      value: function() {
                        var e = t.current()
                        return !!this.get('sessionToken') && !!e && e.id === this.id
                      }
                    },
                    {
                      key: 'signUp',
                      value: function(e, t) {
                        t = t || {}
                        var r = {}
                        t.hasOwnProperty('useMasterKey') && (r.useMasterKey = t.useMasterKey)
                        var n = f['default'].getUserController()
                        return n.signUp(this, e, r)._thenRunCallbacks(t, this)
                      }
                    },
                    {
                      key: 'logIn',
                      value: function(e) {
                        if (!E)
                          throw new Error('It is not possible to log in on a server environment.')
                        e = e || {}
                        var t = {}
                        e.hasOwnProperty('useMasterKey') && (t.useMasterKey = e.useMasterKey)
                        var r = f['default'].getUserController()
                        return r.logIn(this, t)._thenRunCallbacks(e)
                      }
                    }
                  ],
                  [
                    {
                      key: 'readOnlyAttributes',
                      value: function() {
                        return ['sessionToken']
                      }
                    },
                    {
                      key: 'extend',
                      value: function(e, r) {
                        if (e)
                          for (var n in e)
                            'className' !== n &&
                              i(t.prototype, n, {
                                value: e[n],
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                              })
                        if (r)
                          for (var n in r)
                            'className' !== n &&
                              i(t, n, {
                                value: r[n],
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                              })
                        return t
                      }
                    },
                    {
                      key: 'current',
                      value: function() {
                        if (!E) return null
                        var e = f['default'].getUserController()
                        return e.currentUser()
                      }
                    },
                    {
                      key: 'currentAsync',
                      value: function() {
                        if (!E) return w['default'].as(null)
                        var e = f['default'].getUserController()
                        return e.currentUserAsync()
                      }
                    },
                    {
                      key: 'signUp',
                      value: function(e, r, n, a) {
                        ;(n = n || {}), (n.username = e), (n.password = r)
                        var s = new t(n)
                        return s.signUp({}, a)
                      }
                    },
                    {
                      key: 'logIn',
                      value: function(e, r, n) {
                        var a = new t()
                        return a._finishFetch({ username: e, password: r }), a.logIn(n)
                      }
                    },
                    {
                      key: 'become',
                      value: function(e, t) {
                        if (!E)
                          throw new Error(
                            'It is not memory-safe to become a user in a server environment'
                          )
                        t = t || {}
                        var r = { sessionToken: e }
                        t.hasOwnProperty('useMasterKey') && (r.useMasterKey = t.useMasterKey)
                        var n = f['default'].getUserController()
                        return n.become(r)._thenRunCallbacks(t)
                      }
                    },
                    {
                      key: 'logInWith',
                      value: function(e, r) {
                        return t._logInWith(e, r)
                      }
                    },
                    {
                      key: 'logOut',
                      value: function() {
                        if (!E)
                          throw new Error(
                            'There is no current user user on a node.js server environment.'
                          )
                        var e = f['default'].getUserController()
                        return e.logOut()
                      }
                    },
                    {
                      key: 'requestPasswordReset',
                      value: function(e, t) {
                        t = t || {}
                        var r = {}
                        t.hasOwnProperty('useMasterKey') && (r.useMasterKey = t.useMasterKey)
                        var n = f['default'].getUserController()
                        return n.requestPasswordReset(e, r)._thenRunCallbacks(t)
                      }
                    },
                    {
                      key: 'allowCustomUserClass',
                      value: function(e) {
                        f['default'].set('PERFORM_USER_REWRITE', !e)
                      }
                    },
                    {
                      key: 'enableRevocableSession',
                      value: function(e) {
                        if (((e = e || {}), f['default'].set('FORCE_REVOCABLE_SESSION', !0), E)) {
                          var r = t.current()
                          if (r) return r._upgradeToRevocableSession(e)
                        }
                        return w['default'].as()._thenRunCallbacks(e)
                      }
                    },
                    {
                      key: 'enableUnsafeCurrentUser',
                      value: function() {
                        E = !0
                      }
                    },
                    {
                      key: '_registerAuthenticationProvider',
                      value: function(e) {
                        I[e.getAuthType()] = e
                        var r = t.current()
                        r && r._synchronizeAuthData(e.getAuthType())
                      }
                    },
                    {
                      key: '_logInWith',
                      value: function(e, r) {
                        var n = new t()
                        return n._linkWith(e, r)
                      }
                    },
                    {
                      key: '_clearCache',
                      value: function() {
                        ;(j = null), (S = !1)
                      }
                    },
                    {
                      key: '_setCurrentUserCache',
                      value: function(e) {
                        j = e
                      }
                    }
                  ]
                ),
                t
              )
            })(g['default'])
          ;(r['default'] = N), g['default'].registerSubclass('_User', N)
          var T = {
            setCurrentUser: function(e) {
              ;(j = e), e._cleanupAuthData(), e._synchronizeAllAuthData()
              var t = k['default'].generatePath(A),
                r = e.toJSON()
              return (
                (r.className = '_User'),
                k['default'].setItemAsync(t, JSON.stringify(r)).then(function() {
                  return e
                })
              )
            },
            currentUser: function() {
              if (j) return j
              if (S) return null
              if (k['default'].async())
                throw new Error(
                  'Cannot call currentUser() when using a platform with an async storage system. Call currentUserAsync() instead.'
                )
              var e = k['default'].generatePath(A),
                t = k['default'].getItem(e)
              if (((S = !0), !t)) return (j = null), null
              var r = N.fromJSON(JSON.parse(t))
              return (j = r), r._synchronizeAllAuthData(), r
            },
            currentUserAsync: function() {
              if (j) return w['default'].as(j)
              if (S) return w['default'].as(null)
              var e = k['default'].generatePath(A)
              return k['default'].getItemAsync(e).then(function(e) {
                if (((S = !0), !e)) return (j = null), w['default'].as(null)
                var t = N.fromJSON(JSON.parse(e))
                return (j = t), t._synchronizeAllAuthData(), w['default'].as(t)
              })
            },
            signUp: function(e, t, r) {
              var n = (t && t.username) || e.get('username'),
                a = (t && t.password) || e.get('password')
              return n && n.length
                ? a && a.length
                  ? e.save(t, r).then(function() {
                      return e._finishFetch({ password: void 0 }), E ? T.setCurrentUser(e) : e
                    })
                  : w['default'].error(
                      new b['default'](
                        b['default'].OTHER_CAUSE,
                        'Cannot sign up user with an empty password.'
                      )
                    )
                : w['default'].error(
                    new b['default'](
                      b['default'].OTHER_CAUSE,
                      'Cannot sign up user with an empty name.'
                    )
                  )
            },
            logIn: function(e, t) {
              var r = f['default'].getRESTController(),
                n = { username: e.get('username'), password: e.get('password') }
              return r.request('GET', 'login', n, t).then(function(t, r) {
                return (
                  e._migrateId(t.objectId),
                  e._setExisted(!0),
                  y.setPendingOp(e.className, e._getId(), 'username', void 0),
                  y.setPendingOp(e.className, e._getId(), 'password', void 0),
                  (t.password = void 0),
                  e._finishFetch(t),
                  T.setCurrentUser(e)
                )
              })
            },
            become: function(e) {
              var t = new N(),
                r = f['default'].getRESTController()
              return r.request('GET', 'users/me', {}, e).then(function(e, r) {
                return t._finishFetch(e), t._setExisted(!0), T.setCurrentUser(t)
              })
            },
            logOut: function() {
              return T.currentUserAsync().then(function(e) {
                var t = k['default'].generatePath(A),
                  r = k['default'].removeItemAsync(t),
                  n = f['default'].getRESTController()
                if (null !== e) {
                  var a = e.getSessionToken()
                  a &&
                    h['default'](a) &&
                    r.then(function() {
                      return n.request('POST', 'logout', {}, { sessionToken: a })
                    }),
                    e._logOutWithAll(),
                    e._finishFetch({ sessionToken: void 0 })
                }
                return (S = !0), (j = null), r
              })
            },
            requestPasswordReset: function(e, t) {
              var r = f['default'].getRESTController()
              return r.request('POST', 'requestPasswordReset', { email: e }, t)
            },
            upgradeToRevocableSession: function(e, t) {
              var r = e.getSessionToken()
              if (!r)
                return w['default'].error(
                  new b['default'](
                    b['default'].SESSION_MISSING,
                    'Cannot upgrade a user with no session token'
                  )
                )
              t.sessionToken = r
              var n = f['default'].getRESTController()
              return n.request('POST', 'upgradeToRevocableSession', {}, t).then(function(t) {
                var r = new C['default']()
                return (
                  r._finishFetch(t),
                  e._finishFetch({ sessionToken: r.getSessionToken() }),
                  e.isCurrent() ? T.setCurrentUser(e) : w['default'].as(e)
                )
              })
            },
            linkWith: function(e, t) {
              return e.save({ authData: t }).then(function() {
                return E ? T.setCurrentUser(e) : e
              })
            }
          }
          f['default'].setUserController(T), (t.exports = r['default'])
        },
        {
          './CoreManager': 3,
          './ObjectState': 6,
          './ParseError': 10,
          './ParseObject': 14,
          './ParsePromise': 16,
          './ParseSession': 20,
          './Storage': 24,
          './isRevocableSession': 33,
          'babel-runtime/core-js/object/define-property': 38,
          'babel-runtime/helpers/class-call-check': 43,
          'babel-runtime/helpers/create-class': 44,
          'babel-runtime/helpers/get': 45,
          'babel-runtime/helpers/inherits': 46,
          'babel-runtime/helpers/interop-require-default': 47,
          'babel-runtime/helpers/interop-require-wildcard': 48
        }
      ],
      22: [
        function(e, t, r) {
          'use strict'
          function n(e, t) {
            if (
              ((t = t || {}),
              e.where && (e.where = e.where.toJSON().where),
              e.push_time && 'object' == typeof e.push_time && (e.push_time = e.push_time.toJSON()),
              e.expiration_time && (e.expiration_time = e.expiration_time.toJSON()),
              e.expiration_time && e.expiration_interval)
            )
              throw new Error('expiration_time and expiration_interval cannot both be set.')
            return o['default']
              .getPushController()
              .send(e, { useMasterKey: t.useMasterKey })
              ._thenRunCallbacks(t)
          }
          var a = e('babel-runtime/helpers/interop-require-default')['default']
          Object.defineProperty(r, '__esModule', { value: !0 }), (r.send = n)
          var s = e('./CoreManager'),
            o = a(s)
          o['default'].setPushController({
            send: function(e, t) {
              var r = o['default'].getRESTController(),
                n = r.request('POST', 'push', e, { useMasterKey: !!t.useMasterKey })
              return n._thenRunCallbacks(t)
            }
          })
        },
        { './CoreManager': 3, 'babel-runtime/helpers/interop-require-default': 47 }
      ],
      23: [
        function(e, t, r) {
          ;(function(n) {
            'use strict'
            function a(e, t, r) {
              var n = new f['default'](),
                a = new XDomainRequest()
              return (
                (a.onload = function() {
                  var e
                  try {
                    e = JSON.parse(a.responseText)
                  } catch (t) {
                    n.reject(t)
                  }
                  n.resolve(e)
                }),
                (a.onerror = a.ontimeout = function() {
                  var e = {
                    responseText: JSON.stringify({
                      code: l['default'].X_DOMAIN_REQUEST,
                      error: "IE's XDomainRequest does not supply error info."
                    })
                  }
                  n.reject(e)
                }),
                (a.onprogress = function() {}),
                a.open(e, t),
                a.send(r),
                n
              )
            }
            var s = e('babel-runtime/helpers/interop-require-default')['default']
            Object.defineProperty(r, '__esModule', { value: !0 })
            var o = e('./CoreManager'),
              i = s(o),
              u = e('./ParseError'),
              l = s(u),
              c = e('./ParsePromise'),
              f = s(c),
              d = e('./Storage'),
              h = (s(d), null)
            'undefined' != typeof XMLHttpRequest && (h = XMLHttpRequest)
            var p = !1
            'undefined' == typeof XDomainRequest ||
              'withCredentials' in new XMLHttpRequest() ||
              (p = !0)
            var y = {
              ajax: function(e, t, r, s) {
                if (p) return a(e, t, r, s)
                var o = new f['default'](),
                  u = 0,
                  l = function c() {
                    if (null == h)
                      throw new Error(
                        'Cannot make a request: No definition of XMLHttpRequest was found.'
                      )
                    var a = !1,
                      l = new h()
                    ;(l.onreadystatechange = function() {
                      if (4 === l.readyState && !a)
                        if (((a = !0), l.status >= 200 && l.status < 300)) {
                          var e
                          try {
                            e = JSON.parse(l.responseText)
                          } catch (t) {
                            o.reject(t)
                          }
                          o.resolve(e, l.status, l)
                        } else if (l.status >= 500)
                          if (++u < i['default'].get('REQUEST_ATTEMPT_LIMIT')) {
                            var r = Math.round(125 * Math.random() * Math.pow(2, u))
                            setTimeout(c, r)
                          } else o.reject(l)
                        else o.reject(l)
                    }),
                      (s = s || {}),
                      (s['Content-Type'] = 'text/plain'),
                      i['default'].get('IS_NODE') &&
                        (s['User-Agent'] =
                          'Parse/' +
                          i['default'].get('VERSION') +
                          ' (NodeJS ' +
                          n.versions.node +
                          ')'),
                      l.open(e, t, !0)
                    for (var f in s) l.setRequestHeader(f, s[f])
                    l.send(r)
                  }
                return l(), o
              },
              request: function(e, t, r, n) {
                n = n || {}
                var a = i['default'].get('SERVER_URL')
                a += '/1/' + t
                var s = {}
                if (r && 'object' == typeof r) for (var o in r) s[o] = r[o]
                'POST' !== e && ((s._method = e), (e = 'POST')),
                  (s._ApplicationId = i['default'].get('APPLICATION_ID')),
                  (s._JavaScriptKey = i['default'].get('JAVASCRIPT_KEY')),
                  (s._ClientVersion = 'js' + i['default'].get('VERSION'))
                var u = n.useMasterKey
                if (('undefined' == typeof u && (u = i['default'].get('USE_MASTER_KEY')), u)) {
                  if (!i['default'].get('MASTER_KEY'))
                    throw new Error('Cannot use the Master Key, it has not been provided.')
                  s._MasterKey = i['default'].get('MASTER_KEY')
                }
                i['default'].get('FORCE_REVOCABLE_SESSION') && (s._RevocableSession = '1')
                var c = i['default'].getInstallationController()
                return c
                  .currentInstallationId()
                  .then(function(e) {
                    s._InstallationId = e
                    var t = i['default'].getUserController()
                    return n && 'string' == typeof n.sessionToken
                      ? f['default'].as(n.sessionToken)
                      : t
                      ? t.currentUserAsync().then(function(e) {
                          return e ? f['default'].as(e.getSessionToken()) : f['default'].as(null)
                        })
                      : f['default'].as(null)
                  })
                  .then(function(t) {
                    t && (s._SessionToken = t)
                    var r = JSON.stringify(s)
                    return y.ajax(e, a, r)
                  })
                  .then(null, function(e) {
                    var t
                    if (e && e.responseText)
                      try {
                        var r = JSON.parse(e.responseText)
                        t = new l['default'](r.code, r.error)
                      } catch (n) {
                        t = new l['default'](
                          l['default'].INVALID_JSON,
                          'Received an error with invalid JSON from Parse: ' + e.responseText
                        )
                      }
                    else
                      t = new l['default'](
                        l['default'].CONNECTION_FAILED,
                        'XMLHttpRequest failed: ' + JSON.stringify(e)
                      )
                    return f['default'].error(t)
                  })
              },
              _setXHR: function(e) {
                h = e
              }
            }
            t.exports = y
          }.call(this, e('_process')))
        },
        {
          './CoreManager': 3,
          './ParseError': 10,
          './ParsePromise': 16,
          './Storage': 24,
          _process: 75,
          'babel-runtime/helpers/interop-require-default': 47
        }
      ],
      24: [
        function(e, t, r) {
          'use strict'
          var n = e('babel-runtime/helpers/interop-require-default')['default'],
            a = e('./CoreManager'),
            s = n(a),
            o = e('./ParsePromise'),
            i = n(o)
          ;(t.exports = {
            async: function() {
              var e = s['default'].getStorageController()
              return !!e.async
            },
            getItem: function(e) {
              var t = s['default'].getStorageController()
              if (1 === t.async)
                throw new Error(
                  'Synchronous storage is not supported by the current storage controller'
                )
              return t.getItem(e)
            },
            getItemAsync: function(e) {
              var t = s['default'].getStorageController()
              return 1 === t.async ? t.getItemAsync(e) : i['default'].as(t.getItem(e))
            },
            setItem: function(e, t) {
              var r = s['default'].getStorageController()
              if (1 === r.async)
                throw new Error(
                  'Synchronous storage is not supported by the current storage controller'
                )
              return r.setItem(e, t)
            },
            setItemAsync: function(e, t) {
              var r = s['default'].getStorageController()
              return 1 === r.async ? r.setItemAsync(e, t) : i['default'].as(r.setItem(e, t))
            },
            removeItem: function(e) {
              var t = s['default'].getStorageController()
              if (1 === t.async)
                throw new Error(
                  'Synchronous storage is not supported by the current storage controller'
                )
              return t.removeItem(e)
            },
            removeItemAsync: function(e) {
              var t = s['default'].getStorageController()
              return 1 === t.async ? t.removeItemAsync(e) : i['default'].as(t.removeItem(e))
            },
            generatePath: function(e) {
              if (!s['default'].get('APPLICATION_ID'))
                throw new Error('You need to call Parse.initialize before using Parse.')
              if ('string' != typeof e)
                throw new Error('Tried to get a Storage path that was not a String.')
              return (
                '/' === e[0] && (e = e.substr(1)),
                'Parse/' + s['default'].get('APPLICATION_ID') + '/' + e
              )
            },
            _clear: function() {
              var e = s['default'].getStorageController()
              e.hasOwnProperty('clear') && e.clear()
            }
          }),
            s['default'].setStorageController(e('./StorageController.browser'))
        },
        {
          './CoreManager': 3,
          './ParsePromise': 16,
          './StorageController.browser': 25,
          'babel-runtime/helpers/interop-require-default': 47
        }
      ],
      25: [
        function(e, t, r) {
          'use strict'
          var n = e('babel-runtime/helpers/interop-require-default')['default'],
            a = e('./ParsePromise')
          n(a)
          t.exports = {
            async: 0,
            getItem: function(e) {
              return localStorage.getItem(e)
            },
            setItem: function(e, t) {
              localStorage.setItem(e, t)
            },
            removeItem: function(e) {
              localStorage.removeItem(e)
            },
            clear: function() {
              localStorage.clear()
            }
          }
        },
        { './ParsePromise': 16, 'babel-runtime/helpers/interop-require-default': 47 }
      ],
      26: [
        function(e, t, r) {
          'use strict'
          var n = e('babel-runtime/helpers/create-class')['default'],
            a = e('babel-runtime/helpers/class-call-check')['default'],
            s = e('babel-runtime/helpers/interop-require-default')['default'],
            o = e('./ParsePromise'),
            i = s(o)
          t.exports = (function() {
            function e() {
              a(this, e), (this.queue = [])
            }
            return (
              n(e, [
                {
                  key: 'enqueue',
                  value: function(e) {
                    var t = this,
                      r = new i['default']()
                    return (
                      this.queue.push({ task: e, _completion: r }),
                      1 === this.queue.length &&
                        e().then(
                          function() {
                            t._dequeue(), r.resolve()
                          },
                          function(e) {
                            t._dequeue(), r.reject(e)
                          }
                        ),
                      r
                    )
                  }
                },
                {
                  key: '_dequeue',
                  value: function() {
                    var e = this
                    if ((this.queue.shift(), this.queue.length)) {
                      var t = this.queue[0]
                      t.task().then(
                        function() {
                          e._dequeue(), t._completion.resolve()
                        },
                        function(r) {
                          e._dequeue(), t._completion.reject(r)
                        }
                      )
                    }
                  }
                }
              ]),
              e
            )
          })()
        },
        {
          './ParsePromise': 16,
          'babel-runtime/helpers/class-call-check': 43,
          'babel-runtime/helpers/create-class': 44,
          'babel-runtime/helpers/interop-require-default': 47
        }
      ],
      27: [
        function(e, t, r) {
          'use strict'
          function n(e, t) {
            if (e.indexOf(t) > -1) return !0
            for (var r = 0; r < e.length; r++)
              if (
                e[r] instanceof o['default'] &&
                e[r].className === t.className &&
                e[r]._getId() === t._getId()
              )
                return !0
            return !1
          }
          var a = e('babel-runtime/helpers/interop-require-default')['default']
          Object.defineProperty(r, '__esModule', { value: !0 }), (r['default'] = n)
          var s = e('./ParseObject'),
            o = a(s)
          t.exports = r['default']
        },
        { './ParseObject': 14, 'babel-runtime/helpers/interop-require-default': 47 }
      ],
      28: [
        function(e, t, r) {
          'use strict'
          function n(e) {
            if (!(e instanceof l['default'])) return !0
            var t = e.attributes
            for (var r in t) {
              var n = t[r]
              if (!a(n)) return !1
            }
            return !0
          }
          function a(e) {
            if ('object' != typeof e) return !0
            if (e instanceof f['default']) return !0
            if (e instanceof l['default']) return !!e.id
            if (e instanceof i['default']) return e.url() ? !0 : !1
            if (Array.isArray(e)) {
              for (var t = 0; t < e.length; t++) if (!a(e[t])) return !1
              return !0
            }
            for (var r in e) if (!a(e[r])) return !1
            return !0
          }
          var s = e('babel-runtime/helpers/interop-require-default')['default']
          Object.defineProperty(r, '__esModule', { value: !0 }), (r['default'] = n)
          var o = e('./ParseFile'),
            i = s(o),
            u = e('./ParseObject'),
            l = s(u),
            c = e('./ParseRelation'),
            f = s(c)
          t.exports = r['default']
        },
        {
          './ParseFile': 11,
          './ParseObject': 14,
          './ParseRelation': 18,
          'babel-runtime/helpers/interop-require-default': 47
        }
      ],
      29: [
        function(e, t, r) {
          'use strict'
          function n(e) {
            if (null === e || 'object' != typeof e) return e
            if (Array.isArray(e)) {
              var t = []
              return (
                e.forEach(function(e, r) {
                  t[r] = n(e)
                }),
                t
              )
            }
            if ('string' == typeof e.__op) return d.opFromJSON(e)
            if ('Pointer' === e.__type && e.className) return f['default'].fromJSON(e)
            if ('Object' === e.__type && e.className) return f['default'].fromJSON(e)
            if ('Relation' === e.__type) {
              var r = new p['default'](null, null)
              return (r.targetClassName = e.className), r
            }
            if ('Date' === e.__type) return new Date(e.iso)
            if ('File' === e.__type) return i['default'].fromJSON(e)
            if ('GeoPoint' === e.__type)
              return new l['default']({ latitude: e.latitude, longitude: e.longitude })
            var a = {}
            for (var s in e) a[s] = n(e[s])
            return a
          }
          var a = e('babel-runtime/helpers/interop-require-default')['default']
          Object.defineProperty(r, '__esModule', { value: !0 }), (r['default'] = n)
          var s = e('./ParseACL'),
            o = (a(s), e('./ParseFile')),
            i = a(o),
            u = e('./ParseGeoPoint'),
            l = a(u),
            c = e('./ParseObject'),
            f = a(c),
            d = e('./ParseOp'),
            h = e('./ParseRelation'),
            p = a(h)
          t.exports = r['default']
        },
        {
          './ParseACL': 8,
          './ParseFile': 11,
          './ParseGeoPoint': 12,
          './ParseObject': 14,
          './ParseOp': 15,
          './ParseRelation': 18,
          'babel-runtime/helpers/interop-require-default': 47
        }
      ],
      30: [
        function(e, t, r) {
          'use strict'
          function n(e, t, r, s) {
            for (var o = !0; o; ) {
              var u = e,
                c = t,
                d = r,
                y = s
              if (((_ = m = g = void 0), (o = !1), !(u instanceof h['default']))) {
                if (
                  u instanceof p.Op ||
                  u instanceof i['default'] ||
                  u instanceof f['default'] ||
                  u instanceof v['default']
                )
                  return u.toJSON()
                if (u instanceof l['default']) {
                  if (!u.url()) throw new Error('Tried to encode an unsaved file.')
                  return u.toJSON()
                }
                if ('[object Date]' === b.call(u)) {
                  if (isNaN(u)) throw new Error('Tried to encode an invalid date.')
                  return { __type: 'Date', iso: u.toJSON() }
                }
                if ('[object RegExp]' === b.call(u) && 'string' == typeof u.source) return u.source
                if (Array.isArray(u))
                  return u.map(function(e) {
                    return n(e, c, d, y)
                  })
                if (u && 'object' == typeof u) {
                  var m = {}
                  for (var g in u) m[g] = n(u[g], c, d, y)
                  return m
                }
                return u
              }
              if (c) throw new Error('Parse Objects not allowed here')
              if (d || !y || y.indexOf(u) > -1 || u.dirty() || a(u._getServerData()).length < 1)
                return u.toPointer()
              y = y.concat(u)
              var _ = u._toFullJSON(y)
              ;(e = _), (t = c), (r = d), (s = y), (o = !0)
            }
          }
          var a = e('babel-runtime/core-js/object/keys')['default'],
            s = e('babel-runtime/helpers/interop-require-default')['default']
          Object.defineProperty(r, '__esModule', { value: !0 })
          var o = e('./ParseACL'),
            i = s(o),
            u = e('./ParseFile'),
            l = s(u),
            c = e('./ParseGeoPoint'),
            f = s(c),
            d = e('./ParseObject'),
            h = s(d),
            p = e('./ParseOp'),
            y = e('./ParseRelation'),
            v = s(y),
            b = Object.prototype.toString
          ;(r['default'] = function(e, t, r) {
            return n(e, !!t, !!r, [])
          }),
            (t.exports = r['default'])
        },
        {
          './ParseACL': 8,
          './ParseFile': 11,
          './ParseGeoPoint': 12,
          './ParseObject': 14,
          './ParseOp': 15,
          './ParseRelation': 18,
          'babel-runtime/core-js/object/keys': 41,
          'babel-runtime/helpers/interop-require-default': 47
        }
      ],
      31: [
        function(e, t, r) {
          'use strict'
          function n(e, t) {
            if (typeof e != typeof t) return !1
            if (!e || 'object' != typeof e) return e === t
            if (Array.isArray(e) || Array.isArray(t)) {
              if (!Array.isArray(e) || !Array.isArray(t)) return !1
              if (e.length !== t.length) return !1
              for (var r = e.length; r--; ) if (!n(e[r], t[r])) return !1
              return !0
            }
            if (
              e instanceof i['default'] ||
              e instanceof l['default'] ||
              e instanceof f['default'] ||
              e instanceof h['default']
            )
              return e.equals(t)
            if (a(e).length !== a(t).length) return !1
            for (var s in e) if (!n(e[s], t[s])) return !1
            return !0
          }
          var a = e('babel-runtime/core-js/object/keys')['default'],
            s = e('babel-runtime/helpers/interop-require-default')['default']
          Object.defineProperty(r, '__esModule', { value: !0 }), (r['default'] = n)
          var o = e('./ParseACL'),
            i = s(o),
            u = e('./ParseFile'),
            l = s(u),
            c = e('./ParseGeoPoint'),
            f = s(c),
            d = e('./ParseObject'),
            h = s(d)
          t.exports = r['default']
        },
        {
          './ParseACL': 8,
          './ParseFile': 11,
          './ParseGeoPoint': 12,
          './ParseObject': 14,
          'babel-runtime/core-js/object/keys': 41,
          'babel-runtime/helpers/interop-require-default': 47
        }
      ],
      32: [
        function(e, t, r) {
          'use strict'
          function n(e) {
            return e.replace(/[&<>\/'"]/g, function(e) {
              return {
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '/': '&#x2F;',
                "'": '&#x27;',
                '"': '&quot;'
              }[e]
            })
          }
          Object.defineProperty(r, '__esModule', { value: !0 }),
            (r['default'] = n),
            (t.exports = r['default'])
        },
        {}
      ],
      33: [
        function(e, t, r) {
          'use strict'
          function n(e) {
            return e.indexOf('r:') > -1
          }
          Object.defineProperty(r, '__esModule', { value: !0 }),
            (r['default'] = n),
            (t.exports = r['default'])
        },
        {}
      ],
      34: [
        function(e, t, r) {
          'use strict'
          function n(e) {
            var t = new RegExp(
                '^([0-9]{1,4})-([0-9]{1,2})-([0-9]{1,2})T([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2})(.([0-9]+))?Z$'
              ),
              r = t.exec(e)
            if (!r) return null
            var n = r[1] || 0,
              a = (r[2] || 1) - 1,
              s = r[3] || 0,
              o = r[4] || 0,
              i = r[5] || 0,
              u = r[6] || 0,
              l = r[8] || 0
            return new Date(Date.UTC(n, a, s, o, i, u, l))
          }
          Object.defineProperty(r, '__esModule', { value: !0 }),
            (r['default'] = n),
            (t.exports = r['default'])
        },
        {}
      ],
      35: [
        function(e, t, r) {
          'use strict'
          function n(e) {
            var t = []
            return (
              e.forEach(function(e) {
                e instanceof u['default']
                  ? o['default'](t, e) || t.push(e)
                  : t.indexOf(e) < 0 && t.push(e)
              }),
              t
            )
          }
          var a = e('babel-runtime/helpers/interop-require-default')['default']
          Object.defineProperty(r, '__esModule', { value: !0 }), (r['default'] = n)
          var s = e('./arrayContainsObject'),
            o = a(s),
            i = e('./ParseObject'),
            u = a(i)
          t.exports = r['default']
        },
        {
          './ParseObject': 14,
          './arrayContainsObject': 27,
          'babel-runtime/helpers/interop-require-default': 47
        }
      ],
      36: [
        function(e, t, r) {
          'use strict'
          function n(e, t) {
            var r = { objects: {}, files: [] },
              n = e.className + ':' + e._getId()
            r.objects[n] = e.dirty() ? e : !0
            var s = e.attributes
            for (var o in s) 'object' == typeof s[o] && a(s[o], r, !1, !!t)
            var i = []
            for (var u in r.objects) u !== n && r.objects[u] !== !0 && i.push(r.objects[u])
            return i.concat(r.files)
          }
          function a(e, t, r, n) {
            if (e instanceof l['default']) {
              if (!e.id && r) throw new Error('Cannot create a pointer to an unsaved Object.')
              var s = e.className + ':' + e._getId()
              if (!t.objects[s]) {
                t.objects[s] = e.dirty() ? e : !0
                var o = e.attributes
                for (var u in o) 'object' == typeof o[u] && a(o[u], t, !n, n)
              }
            } else {
              if (e instanceof i['default'])
                return void (!e.url() && t.files.indexOf(e) < 0 && t.files.push(e))
              if (!(e instanceof f['default'])) {
                Array.isArray(e) &&
                  e.forEach(function(e) {
                    a(e, t, r, n)
                  })
                for (var c in e) 'object' == typeof e[c] && a(e[c], t, r, n)
              }
            }
          }
          var s = e('babel-runtime/helpers/interop-require-default')['default']
          Object.defineProperty(r, '__esModule', { value: !0 }), (r['default'] = n)
          var o = e('./ParseFile'),
            i = s(o),
            u = e('./ParseObject'),
            l = s(u),
            c = e('./ParseRelation'),
            f = s(c)
          t.exports = r['default']
        },
        {
          './ParseFile': 11,
          './ParseObject': 14,
          './ParseRelation': 18,
          'babel-runtime/helpers/interop-require-default': 47
        }
      ],
      37: [
        function(e, t, r) {
          t.exports = { default: e('core-js/library/fn/object/create'), __esModule: !0 }
        },
        { 'core-js/library/fn/object/create': 49 }
      ],
      38: [
        function(e, t, r) {
          t.exports = { default: e('core-js/library/fn/object/define-property'), __esModule: !0 }
        },
        { 'core-js/library/fn/object/define-property': 50 }
      ],
      39: [
        function(e, t, r) {
          t.exports = { default: e('core-js/library/fn/object/freeze'), __esModule: !0 }
        },
        { 'core-js/library/fn/object/freeze': 51 }
      ],
      40: [
        function(e, t, r) {
          t.exports = {
            default: e('core-js/library/fn/object/get-own-property-descriptor'),
            __esModule: !0
          }
        },
        { 'core-js/library/fn/object/get-own-property-descriptor': 52 }
      ],
      41: [
        function(e, t, r) {
          t.exports = { default: e('core-js/library/fn/object/keys'), __esModule: !0 }
        },
        { 'core-js/library/fn/object/keys': 53 }
      ],
      42: [
        function(e, t, r) {
          t.exports = { default: e('core-js/library/fn/object/set-prototype-of'), __esModule: !0 }
        },
        { 'core-js/library/fn/object/set-prototype-of': 54 }
      ],
      43: [
        function(e, t, r) {
          'use strict'
          ;(r['default'] = function(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
          }),
            (r.__esModule = !0)
        },
        {}
      ],
      44: [
        function(e, t, r) {
          'use strict'
          var n = e('babel-runtime/core-js/object/define-property')['default']
          ;(r['default'] = (function() {
            function e(e, t) {
              for (var r = 0; r < t.length; r++) {
                var a = t[r]
                ;(a.enumerable = a.enumerable || !1),
                  (a.configurable = !0),
                  'value' in a && (a.writable = !0),
                  n(e, a.key, a)
              }
            }
            return function(t, r, n) {
              return r && e(t.prototype, r), n && e(t, n), t
            }
          })()),
            (r.__esModule = !0)
        },
        { 'babel-runtime/core-js/object/define-property': 38 }
      ],
      45: [
        function(e, t, r) {
          'use strict'
          var n = e('babel-runtime/core-js/object/get-own-property-descriptor')['default']
          ;(r['default'] = function(e, t, r) {
            for (var a = !0; a; ) {
              var s = e,
                o = t,
                i = r
              ;(u = c = l = void 0), (a = !1), null === s && (s = Function.prototype)
              var u = n(s, o)
              if (void 0 !== u) {
                if ('value' in u) return u.value
                var l = u.get
                return void 0 === l ? void 0 : l.call(i)
              }
              var c = Object.getPrototypeOf(s)
              if (null === c) return void 0
              ;(e = c), (t = o), (r = i), (a = !0)
            }
          }),
            (r.__esModule = !0)
        },
        { 'babel-runtime/core-js/object/get-own-property-descriptor': 40 }
      ],
      46: [
        function(e, t, r) {
          'use strict'
          var n = e('babel-runtime/core-js/object/create')['default'],
            a = e('babel-runtime/core-js/object/set-prototype-of')['default']
          ;(r['default'] = function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function, not ' + typeof t
              )
            ;(e.prototype = n(t && t.prototype, {
              constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 }
            })),
              t && (a ? a(e, t) : (e.__proto__ = t))
          }),
            (r.__esModule = !0)
        },
        {
          'babel-runtime/core-js/object/create': 37,
          'babel-runtime/core-js/object/set-prototype-of': 42
        }
      ],
      47: [
        function(e, t, r) {
          'use strict'
          ;(r['default'] = function(e) {
            return e && e.__esModule ? e : { default: e }
          }),
            (r.__esModule = !0)
        },
        {}
      ],
      48: [
        function(e, t, r) {
          'use strict'
          ;(r['default'] = function(e) {
            if (e && e.__esModule) return e
            var t = {}
            if (null != e)
              for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
            return (t['default'] = e), t
          }),
            (r.__esModule = !0)
        },
        {}
      ],
      49: [
        function(e, t, r) {
          var n = e('../../modules/$')
          t.exports = function(e, t) {
            return n.create(e, t)
          }
        },
        { '../../modules/$': 66 }
      ],
      50: [
        function(e, t, r) {
          var n = e('../../modules/$')
          t.exports = function(e, t, r) {
            return n.setDesc(e, t, r)
          }
        },
        { '../../modules/$': 66 }
      ],
      51: [
        function(e, t, r) {
          e('../../modules/es6.object.freeze'),
            (t.exports = e('../../modules/$.core').Object.freeze)
        },
        { '../../modules/$.core': 58, '../../modules/es6.object.freeze': 71 }
      ],
      52: [
        function(e, t, r) {
          var n = e('../../modules/$')
          e('../../modules/es6.object.get-own-property-descriptor'),
            (t.exports = function(e, t) {
              return n.getDesc(e, t)
            })
        },
        { '../../modules/$': 66, '../../modules/es6.object.get-own-property-descriptor': 72 }
      ],
      53: [
        function(e, t, r) {
          e('../../modules/es6.object.keys'), (t.exports = e('../../modules/$.core').Object.keys)
        },
        { '../../modules/$.core': 58, '../../modules/es6.object.keys': 73 }
      ],
      54: [
        function(e, t, r) {
          e('../../modules/es6.object.set-prototype-of'),
            (t.exports = e('../../modules/$.core').Object.setPrototypeOf)
        },
        { '../../modules/$.core': 58, '../../modules/es6.object.set-prototype-of': 74 }
      ],
      55: [
        function(e, t, r) {
          t.exports = function(e) {
            if ('function' != typeof e) throw TypeError(e + ' is not a function!')
            return e
          }
        },
        {}
      ],
      56: [
        function(e, t, r) {
          var n = e('./$.is-object')
          t.exports = function(e) {
            if (!n(e)) throw TypeError(e + ' is not an object!')
            return e
          }
        },
        { './$.is-object': 65 }
      ],
      57: [
        function(e, t, r) {
          var n = {}.toString
          t.exports = function(e) {
            return n.call(e).slice(8, -1)
          }
        },
        {}
      ],
      58: [
        function(e, t, r) {
          var n = (t.exports = {})
          'number' == typeof __e && (__e = n)
        },
        {}
      ],
      59: [
        function(e, t, r) {
          var n = e('./$.a-function')
          t.exports = function(e, t, r) {
            if ((n(e), void 0 === t)) return e
            switch (r) {
              case 1:
                return function(r) {
                  return e.call(t, r)
                }
              case 2:
                return function(r, n) {
                  return e.call(t, r, n)
                }
              case 3:
                return function(r, n, a) {
                  return e.call(t, r, n, a)
                }
            }
            return function() {
              return e.apply(t, arguments)
            }
          }
        },
        { './$.a-function': 55 }
      ],
      60: [
        function(e, t, r) {
          var n = e('./$.global'),
            a = e('./$.core'),
            s = 'prototype',
            o = function(e, t) {
              return function() {
                return e.apply(t, arguments)
              }
            },
            i = function(e, t, r) {
              var u,
                l,
                c,
                f,
                d = e & i.G,
                h = e & i.P,
                p = d ? n : e & i.S ? n[t] : (n[t] || {})[s],
                y = d ? a : a[t] || (a[t] = {})
              d && (r = t)
              for (u in r)
                (l = !(e & i.F) && p && u in p),
                  (l && u in y) ||
                    ((c = l ? p[u] : r[u]),
                    d && 'function' != typeof p[u]
                      ? (f = r[u])
                      : e & i.B && l
                      ? (f = o(c, n))
                      : e & i.W && p[u] == c
                      ? !(function(e) {
                          ;(f = function(t) {
                            return this instanceof e ? new e(t) : e(t)
                          }),
                            (f[s] = e[s])
                        })(c)
                      : (f = h && 'function' == typeof c ? o(Function.call, c) : c),
                    (y[u] = f),
                    h && ((y[s] || (y[s] = {}))[u] = c))
            }
          ;(i.F = 1), (i.G = 2), (i.S = 4), (i.P = 8), (i.B = 16), (i.W = 32), (t.exports = i)
        },
        { './$.core': 58, './$.global': 63 }
      ],
      61: [
        function(e, t, r) {
          t.exports = function(e) {
            if (void 0 == e) throw TypeError("Can't call method on  " + e)
            return e
          }
        },
        {}
      ],
      62: [
        function(e, t, r) {
          t.exports = function(e) {
            try {
              return !!e()
            } catch (t) {
              return !0
            }
          }
        },
        {}
      ],
      63: [
        function(e, t, r) {
          var n = 'undefined',
            a = (t.exports =
              typeof window != n && window.Math == Math
                ? window
                : typeof self != n && self.Math == Math
                ? self
                : Function('return this')())
          'number' == typeof __g && (__g = a)
        },
        {}
      ],
      64: [
        function(e, t, r) {
          var n = e('./$.cof')
          t.exports =
            0 in Object('z')
              ? Object
              : function(e) {
                  return 'String' == n(e) ? e.split('') : Object(e)
                }
        },
        { './$.cof': 57 }
      ],
      65: [
        function(e, t, r) {
          t.exports = function(e) {
            return null !== e && ('object' == typeof e || 'function' == typeof e)
          }
        },
        {}
      ],
      66: [
        function(e, t, r) {
          var n = Object
          t.exports = {
            create: n.create,
            getProto: n.getPrototypeOf,
            isEnum: {}.propertyIsEnumerable,
            getDesc: n.getOwnPropertyDescriptor,
            setDesc: n.defineProperty,
            setDescs: n.defineProperties,
            getKeys: n.keys,
            getNames: n.getOwnPropertyNames,
            getSymbols: n.getOwnPropertySymbols,
            each: [].forEach
          }
        },
        {}
      ],
      67: [
        function(e, t, r) {
          t.exports = function(t, r) {
            var n = e('./$.def'),
              a = (e('./$.core').Object || {})[t] || Object[t],
              s = {}
            ;(s[t] = r(a)),
              n(
                n.S +
                  n.F *
                    e('./$.fails')(function() {
                      a(1)
                    }),
                'Object',
                s
              )
          }
        },
        { './$.core': 58, './$.def': 60, './$.fails': 62 }
      ],
      68: [
        function(e, t, r) {
          var n = e('./$').getDesc,
            a = e('./$.is-object'),
            s = e('./$.an-object'),
            o = function(e, t) {
              if ((s(e), !a(t) && null !== t)) throw TypeError(t + ": can't set as prototype!")
            }
          t.exports = {
            set:
              Object.setPrototypeOf ||
              ('__proto__' in {}
                ? (function(t, r) {
                    try {
                      ;(r = e('./$.ctx')(Function.call, n(Object.prototype, '__proto__').set, 2)),
                        r({}, [])
                    } catch (a) {
                      t = !0
                    }
                    return function(e, n) {
                      return o(e, n), t ? (e.__proto__ = n) : r(e, n), e
                    }
                  })()
                : void 0),
            check: o
          }
        },
        { './$': 66, './$.an-object': 56, './$.ctx': 59, './$.is-object': 65 }
      ],
      69: [
        function(e, t, r) {
          var n = e('./$.iobject'),
            a = e('./$.defined')
          t.exports = function(e) {
            return n(a(e))
          }
        },
        { './$.defined': 61, './$.iobject': 64 }
      ],
      70: [
        function(e, t, r) {
          var n = e('./$.defined')
          t.exports = function(e) {
            return Object(n(e))
          }
        },
        { './$.defined': 61 }
      ],
      71: [
        function(e, t, r) {
          var n = e('./$.is-object')
          e('./$.object-sap')('freeze', function(e) {
            return function(t) {
              return e && n(t) ? e(t) : t
            }
          })
        },
        { './$.is-object': 65, './$.object-sap': 67 }
      ],
      72: [
        function(e, t, r) {
          var n = e('./$.to-iobject')
          e('./$.object-sap')('getOwnPropertyDescriptor', function(e) {
            return function(t, r) {
              return e(n(t), r)
            }
          })
        },
        { './$.object-sap': 67, './$.to-iobject': 69 }
      ],
      73: [
        function(e, t, r) {
          var n = e('./$.to-object')
          e('./$.object-sap')('keys', function(e) {
            return function(t) {
              return e(n(t))
            }
          })
        },
        { './$.object-sap': 67, './$.to-object': 70 }
      ],
      74: [
        function(e, t, r) {
          var n = e('./$.def')
          n(n.S, 'Object', { setPrototypeOf: e('./$.set-proto').set })
        },
        { './$.def': 60, './$.set-proto': 68 }
      ],
      75: [function(e, t, r) {}, {}]
    },
    {},
    [7]
  )(7)
})
/**
 * Copyright 2010 Tim Down.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * jshashtable
 *
 * jshashtable is a JavaScript implementation of a hash table. It creates a single constructor function called Hashtable
 * in the global scope.
 *
 * Author: Tim Down <tim@timdown.co.uk>
 * Version: 2.1
 * Build date: 21 March 2010
 * Website: http://www.timdown.co.uk/jshashtable
 */

var Hashtable = (function() {
  var FUNCTION = 'function'

  var arrayRemoveAt =
    typeof Array.prototype.splice == FUNCTION
      ? function(arr, idx) {
          arr.splice(idx, 1)
        }
      : function(arr, idx) {
          var itemsAfterDeleted, i, len
          if (idx === arr.length - 1) {
            arr.length = idx
          } else {
            itemsAfterDeleted = arr.slice(idx + 1)
            arr.length = idx
            for (i = 0, len = itemsAfterDeleted.length; i < len; ++i) {
              arr[idx + i] = itemsAfterDeleted[i]
            }
          }
        }

  function hashObject(obj) {
    var hashCode
    if (typeof obj == 'string') {
      return obj
    } else if (typeof obj.hashCode == FUNCTION) {
      // Check the hashCode method really has returned a string
      hashCode = obj.hashCode()
      return typeof hashCode == 'string' ? hashCode : hashObject(hashCode)
    } else if (typeof obj.toString == FUNCTION) {
      return obj.toString()
    } else {
      try {
        return String(obj)
      } catch (ex) {
        // For host objects (such as ActiveObjects in IE) that have no toString() method and throw an error when
        // passed to String()
        return Object.prototype.toString.call(obj)
      }
    }
  }

  function equals_fixedValueHasEquals(fixedValue, variableValue) {
    return fixedValue.equals(variableValue)
  }

  function equals_fixedValueNoEquals(fixedValue, variableValue) {
    return typeof variableValue.equals == FUNCTION
      ? variableValue.equals(fixedValue)
      : fixedValue === variableValue
  }

  function createKeyValCheck(kvStr) {
    return function(kv) {
      if (kv === null) {
        throw new Error('null is not a valid ' + kvStr)
      } else if (typeof kv == 'undefined') {
        throw new Error(kvStr + ' must not be undefined')
      }
    }
  }

  var checkKey = createKeyValCheck('key'),
    checkValue = createKeyValCheck('value')

  /*----------------------------------------------------------------------------------------------------------------*/

  function Bucket(hash, firstKey, firstValue, equalityFunction) {
    this[0] = hash
    this.entries = []
    this.addEntry(firstKey, firstValue)

    if (equalityFunction !== null) {
      this.getEqualityFunction = function() {
        return equalityFunction
      }
    }
  }

  var EXISTENCE = 0,
    ENTRY = 1,
    ENTRY_INDEX_AND_VALUE = 2

  function createBucketSearcher(mode) {
    return function(key) {
      var i = this.entries.length,
        entry,
        equals = this.getEqualityFunction(key)
      while (i--) {
        entry = this.entries[i]
        if (equals(key, entry[0])) {
          switch (mode) {
            case EXISTENCE:
              return true
            case ENTRY:
              return entry
            case ENTRY_INDEX_AND_VALUE:
              return [i, entry[1]]
          }
        }
      }
      return false
    }
  }

  function createBucketLister(entryProperty) {
    return function(aggregatedArr) {
      var startIndex = aggregatedArr.length
      for (var i = 0, len = this.entries.length; i < len; ++i) {
        aggregatedArr[startIndex + i] = this.entries[i][entryProperty]
      }
    }
  }

  Bucket.prototype = {
    getEqualityFunction: function(searchValue) {
      return typeof searchValue.equals == FUNCTION
        ? equals_fixedValueHasEquals
        : equals_fixedValueNoEquals
    },

    getEntryForKey: createBucketSearcher(ENTRY),

    getEntryAndIndexForKey: createBucketSearcher(ENTRY_INDEX_AND_VALUE),

    removeEntryForKey: function(key) {
      var result = this.getEntryAndIndexForKey(key)
      if (result) {
        arrayRemoveAt(this.entries, result[0])
        return result[1]
      }
      return null
    },

    addEntry: function(key, value) {
      this.entries[this.entries.length] = [key, value]
    },

    keys: createBucketLister(0),

    values: createBucketLister(1),

    getEntries: function(entries) {
      var startIndex = entries.length
      for (var i = 0, len = this.entries.length; i < len; ++i) {
        // Clone the entry stored in the bucket before adding to array
        entries[startIndex + i] = this.entries[i].slice(0)
      }
    },

    containsKey: createBucketSearcher(EXISTENCE),

    containsValue: function(value) {
      var i = this.entries.length
      while (i--) {
        if (value === this.entries[i][1]) {
          return true
        }
      }
      return false
    }
  }

  /*----------------------------------------------------------------------------------------------------------------*/

  // Supporting functions for searching hashtable buckets

  function searchBuckets(buckets, hash) {
    var i = buckets.length,
      bucket
    while (i--) {
      bucket = buckets[i]
      if (hash === bucket[0]) {
        return i
      }
    }
    return null
  }

  function getBucketForHash(bucketsByHash, hash) {
    var bucket = bucketsByHash[hash]

    // Check that this is a genuine bucket and not something inherited from the bucketsByHash's prototype
    return bucket && bucket instanceof Bucket ? bucket : null
  }

  /*----------------------------------------------------------------------------------------------------------------*/

  function Hashtable(hashingFunctionParam, equalityFunctionParam) {
    var that = this
    var buckets = []
    var bucketsByHash = {}

    var hashingFunction =
      typeof hashingFunctionParam == FUNCTION ? hashingFunctionParam : hashObject
    var equalityFunction = typeof equalityFunctionParam == FUNCTION ? equalityFunctionParam : null

    this.put = function(key, value) {
      checkKey(key)
      checkValue(value)
      var hash = hashingFunction(key),
        bucket,
        bucketEntry,
        oldValue = null

      // Check if a bucket exists for the bucket key
      bucket = getBucketForHash(bucketsByHash, hash)
      if (bucket) {
        // Check this bucket to see if it already contains this key
        bucketEntry = bucket.getEntryForKey(key)
        if (bucketEntry) {
          // This bucket entry is the current mapping of key to value, so replace old value and we're done.
          oldValue = bucketEntry[1]
          bucketEntry[1] = value
        } else {
          // The bucket does not contain an entry for this key, so add one
          bucket.addEntry(key, value)
        }
      } else {
        // No bucket exists for the key, so create one and put our key/value mapping in
        bucket = new Bucket(hash, key, value, equalityFunction)
        buckets[buckets.length] = bucket
        bucketsByHash[hash] = bucket
      }
      return oldValue
    }

    this.get = function(key) {
      checkKey(key)

      var hash = hashingFunction(key)

      // Check if a bucket exists for the bucket key
      var bucket = getBucketForHash(bucketsByHash, hash)
      if (bucket) {
        // Check this bucket to see if it contains this key
        var bucketEntry = bucket.getEntryForKey(key)
        if (bucketEntry) {
          // This bucket entry is the current mapping of key to value, so return the value.
          return bucketEntry[1]
        }
      }
      return null
    }

    this.containsKey = function(key) {
      checkKey(key)
      var bucketKey = hashingFunction(key)

      // Check if a bucket exists for the bucket key
      var bucket = getBucketForHash(bucketsByHash, bucketKey)

      return bucket ? bucket.containsKey(key) : false
    }

    this.containsValue = function(value) {
      checkValue(value)
      var i = buckets.length
      while (i--) {
        if (buckets[i].containsValue(value)) {
          return true
        }
      }
      return false
    }

    this.clear = function() {
      buckets.length = 0
      bucketsByHash = {}
    }

    this.isEmpty = function() {
      return !buckets.length
    }

    var createBucketAggregator = function(bucketFuncName) {
      return function() {
        var aggregated = [],
          i = buckets.length
        while (i--) {
          buckets[i][bucketFuncName](aggregated)
        }
        return aggregated
      }
    }

    this.keys = createBucketAggregator('keys')
    this.values = createBucketAggregator('values')
    this.entries = createBucketAggregator('getEntries')

    this.remove = function(key) {
      checkKey(key)

      var hash = hashingFunction(key),
        bucketIndex,
        oldValue = null

      // Check if a bucket exists for the bucket key
      var bucket = getBucketForHash(bucketsByHash, hash)

      if (bucket) {
        // Remove entry from this bucket for this key
        oldValue = bucket.removeEntryForKey(key)
        if (oldValue !== null) {
          // Entry was removed, so check if bucket is empty
          if (!bucket.entries.length) {
            // Bucket is empty, so remove it from the bucket collections
            bucketIndex = searchBuckets(buckets, hash)
            arrayRemoveAt(buckets, bucketIndex)
            delete bucketsByHash[hash]
          }
        }
      }
      return oldValue
    }

    this.size = function() {
      var total = 0,
        i = buckets.length
      while (i--) {
        total += buckets[i].entries.length
      }
      return total
    }

    this.each = function(callback) {
      var entries = that.entries(),
        i = entries.length,
        entry
      while (i--) {
        entry = entries[i]
        callback(entry[0], entry[1])
      }
    }

    this.putAll = function(hashtable, conflictCallback) {
      var entries = hashtable.entries()
      var entry,
        key,
        value,
        thisValue,
        i = entries.length
      var hasConflictCallback = typeof conflictCallback == FUNCTION
      while (i--) {
        entry = entries[i]
        key = entry[0]
        value = entry[1]

        // Check for a conflict. The default behaviour is to overwrite the value for an existing key
        if (hasConflictCallback && (thisValue = that.get(key))) {
          value = conflictCallback(key, thisValue, value)
        }
        that.put(key, value)
      }
    }

    this.clone = function() {
      var clone = new Hashtable(hashingFunctionParam, equalityFunctionParam)
      clone.putAll(that)
      return clone
    }
  }

  return Hashtable
})()
/**
 * jquery.numberformatter - Formatting/Parsing Numbers in jQuery
 *
 * Written by
 * Michael Abernethy (mike@abernethysoft.com),
 * Andrew Parry (aparry0@gmail.com)
 *
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * @author Michael Abernethy, Andrew Parry
 * @version 1.2.2-RELEASE ($Id$)
 *
 * Dependencies
 *
 * jQuery (http://jquery.com)
 * jshashtable (http://www.timdown.co.uk/jshashtable)
 *
 * Notes & Thanks
 *
 * many thanks to advweb.nanasi.jp for his bug fixes
 * jsHashtable is now used also, so thanks to the author for that excellent little class.
 *
 * This plugin can be used to format numbers as text and parse text as Numbers
 * Because we live in an international world, we cannot assume that everyone
 * uses "," to divide thousands, and "." as a decimal point.
 *
 * As of 1.2 the way this plugin works has changed slightly, parsing text to a number
 * has 1 set of functions, formatting a number to text has it's own. Before things
 * were a little confusing, so I wanted to separate the 2 out more.
 *
 *
 * jQuery extension functions:
 *
 * formatNumber(options, writeBack, giveReturnValue) - Reads the value from the subject, parses to
 * a Javascript Number object, then formats back to text using the passed options and write back to
 * the subject.
 *
 * parseNumber(options) - Parses the value in the subject to a Number object using the passed options
 * to decipher the actual number from the text, then writes the value as text back to the subject.
 *
 *
 * Generic functions:
 *
 * formatNumber(numberString, options) - Takes a plain number as a string (e.g. '1002.0123') and returns
 * a string of the given format options.
 *
 * parseNumber(numberString, options) - Takes a number as text that is formatted the same as the given
 * options then and returns it as a plain Number object.
 *
 * To achieve the old way of combining parsing and formatting to keep say a input field always formatted
 * to a given format after it has lost focus you'd simply use a combination of the functions.
 *
 * e.g.
 * jQuery("#salary").blur(function(){
 * 		jQuery(this).parseNumber({format:"#,###.00", locale:"us"});
 * 		jQuery(this).formatNumber({format:"#,###.00", locale:"us"});
 * });
 *
 * The syntax for the formatting is:
 * 0 = Digit
 * # = Digit, zero shows as absent
 * . = Decimal separator
 * - = Negative sign
 * , = Grouping Separator
 * % = Percent (multiplies the number by 100)
 *
 * For example, a format of "#,###.00" and text of 4500.20 will
 * display as "4.500,20" with a locale of "de", and "4,500.20" with a locale of "us"
 *
 *
 * As of now, the only acceptable locales are
 * Arab Emirates -> "ae"
 * Australia -> "au"
 * Austria -> "at"
 * Brazil -> "br"
 * Canada -> "ca"
 * China -> "cn"
 * Czech -> "cz"
 * Denmark -> "dk"
 * Egypt -> "eg"
 * Finland -> "fi"
 * France  -> "fr"
 * Germany -> "de"
 * Greece -> "gr"
 * Great Britain -> "gb"
 * Hong Kong -> "hk"
 * India -> "in"
 * Israel -> "il"
 * Japan -> "jp"
 * Russia -> "ru"
 * South Korea -> "kr"
 * Spain -> "es"
 * Sweden -> "se"
 * Switzerland -> "ch"
 * Taiwan -> "tw"
 * Thailand -> "th"
 * United States -> "us"
 * Vietnam -> "vn"
 **/

;(function(jQuery) {
  var nfLocales = new Hashtable()

  var nfLocalesLikeUS = [
    'ae',
    'au',
    'ca',
    'cn',
    'eg',
    'gb',
    'hk',
    'il',
    'in',
    'jp',
    'sk',
    'th',
    'tw',
    'us'
  ]
  var nfLocalesLikeDE = ['at', 'br', 'de', 'dk', 'es', 'gr', 'it', 'nl', 'pt', 'tr', 'vn']
  var nfLocalesLikeFR = ['cz', 'fi', 'fr', 'ru', 'se', 'pl']
  var nfLocalesLikeCH = ['ch']

  var nfLocaleFormatting = [['.', ','], [',', '.'], [',', ' '], ['.', "'"]]
  var nfAllLocales = [nfLocalesLikeUS, nfLocalesLikeDE, nfLocalesLikeFR, nfLocalesLikeCH]

  function FormatData(dec, group, neg) {
    this.dec = dec
    this.group = group
    this.neg = neg
  }

  function init() {
    // write the arrays into the hashtable
    for (var localeGroupIdx = 0; localeGroupIdx < nfAllLocales.length; localeGroupIdx++) {
      localeGroup = nfAllLocales[localeGroupIdx]
      for (var i = 0; i < localeGroup.length; i++) {
        nfLocales.put(localeGroup[i], localeGroupIdx)
      }
    }
  }

  function formatCodes(locale) {
    if (nfLocales.size() == 0) init()

    // default values
    var dec = '.'
    var group = ','
    var neg = '-'

    // hashtable lookup to match locale with codes
    var codesIndex = nfLocales.get(locale)
    if (codesIndex) {
      var codes = nfLocaleFormatting[codesIndex]
      if (codes) {
        dec = codes[0]
        group = codes[1]
      }
    }
    return new FormatData(dec, group, neg)
  }

  /*	Formatting Methods	*/

  /**
   * Formats anything containing a number in standard js number notation.
   *
   * @param {Object}	options			The formatting options to use
   * @param {Boolean}	writeBack		(true) If the output value should be written back to the subject
   * @param {Boolean} giveReturnValue	(true) If the function should return the output string
   */
  jQuery.fn.formatNumber = function(options, writeBack, giveReturnValue) {
    return this.each(function() {
      // enforce defaults
      if (writeBack == null) writeBack = true
      if (giveReturnValue == null) giveReturnValue = true

      // get text
      var text
      if (jQuery(this).is(':input')) text = new String(jQuery(this).val())
      else text = new String(jQuery(this).text())

      // format
      var returnString = jQuery.formatNumber(text, options)

      // set formatted string back, only if a success
      //			if (returnString) {
      if (writeBack) {
        if (jQuery(this).is(':input')) jQuery(this).val(returnString)
        else jQuery(this).text(returnString)
      }
      if (giveReturnValue) return returnString
      //			}
      //			return '';
    })
  }

  /**
   * First parses a string and reformats it with the given options.
   *
   * @param {Object} numberString
   * @param {Object} options
   */
  jQuery.formatNumber = function(numberString, options) {
    var options = jQuery.extend({}, jQuery.fn.formatNumber.defaults, options)
    var formatData = formatCodes(options.locale.toLowerCase())

    var dec = formatData.dec
    var group = formatData.group
    var neg = formatData.neg

    var validFormat = '0#-,.'

    // strip all the invalid characters at the beginning and the end
    // of the format, and we'll stick them back on at the end
    // make a special case for the negative sign "-" though, so
    // we can have formats like -$23.32
    var prefix = ''
    var negativeInFront = false
    for (var i = 0; i < options.format.length; i++) {
      if (validFormat.indexOf(options.format.charAt(i)) == -1)
        prefix = prefix + options.format.charAt(i)
      else if (i == 0 && options.format.charAt(i) == '-') {
        negativeInFront = true
        continue
      } else break
    }
    var suffix = ''
    for (var i = options.format.length - 1; i >= 0; i--) {
      if (validFormat.indexOf(options.format.charAt(i)) == -1)
        suffix = options.format.charAt(i) + suffix
      else break
    }

    options.format = options.format.substring(prefix.length)
    options.format = options.format.substring(0, options.format.length - suffix.length)

    // now we need to convert it into a number
    //while (numberString.indexOf(group) > -1)
    //	numberString = numberString.replace(group, '');
    //var number = new Number(numberString.replace(dec, ".").replace(neg, "-"));
    var number = new Number(numberString)

    return jQuery._formatNumber(number, options, suffix, prefix, negativeInFront)
  }

  /**
   * Formats a Number object into a string, using the given formatting options
   *
   * @param {Object} numberString
   * @param {Object} options
   */
  jQuery._formatNumber = function(number, options, suffix, prefix, negativeInFront) {
    var options = jQuery.extend({}, jQuery.fn.formatNumber.defaults, options)
    var formatData = formatCodes(options.locale.toLowerCase())

    var dec = formatData.dec
    var group = formatData.group
    var neg = formatData.neg

    var forcedToZero = false
    if (isNaN(number)) {
      if (options.nanForceZero == true) {
        number = 0
        forcedToZero = true
      } else return null
    }

    // special case for percentages
    if (suffix == '%') number = number * 100

    var returnString = ''
    if (options.format.indexOf('.') > -1) {
      var decimalPortion = dec
      var decimalFormat = options.format.substring(options.format.lastIndexOf('.') + 1)

      // round or truncate number as needed
      if (options.round == true) number = new Number(number.toFixed(decimalFormat.length))
      else {
        var numStr = number.toString()
        numStr = numStr.substring(0, numStr.lastIndexOf('.') + decimalFormat.length + 1)
        number = new Number(numStr)
      }

      var decimalValue = number % 1
      var decimalString = new String(decimalValue.toFixed(decimalFormat.length))
      decimalString = decimalString.substring(decimalString.lastIndexOf('.') + 1)

      for (var i = 0; i < decimalFormat.length; i++) {
        if (decimalFormat.charAt(i) == '#' && decimalString.charAt(i) != '0') {
          decimalPortion += decimalString.charAt(i)
          continue
        } else if (decimalFormat.charAt(i) == '#' && decimalString.charAt(i) == '0') {
          var notParsed = decimalString.substring(i)
          if (notParsed.match('[1-9]')) {
            decimalPortion += decimalString.charAt(i)
            continue
          } else break
        } else if (decimalFormat.charAt(i) == '0') decimalPortion += decimalString.charAt(i)
      }
      returnString += decimalPortion
    } else number = Math.round(number)

    var ones = Math.floor(number)
    if (number < 0) ones = Math.ceil(number)

    var onesFormat = ''
    if (options.format.indexOf('.') == -1) onesFormat = options.format
    else onesFormat = options.format.substring(0, options.format.indexOf('.'))

    var onePortion = ''
    if (!(ones == 0 && onesFormat.substr(onesFormat.length - 1) == '#') || forcedToZero) {
      // find how many digits are in the group
      var oneText = new String(Math.abs(ones))
      var groupLength = 9999
      if (onesFormat.lastIndexOf(',') != -1)
        groupLength = onesFormat.length - onesFormat.lastIndexOf(',') - 1
      var groupCount = 0
      for (var i = oneText.length - 1; i > -1; i--) {
        onePortion = oneText.charAt(i) + onePortion
        groupCount++
        if (groupCount == groupLength && i != 0) {
          onePortion = group + onePortion
          groupCount = 0
        }
      }

      // account for any pre-data 0's
      if (onesFormat.length > onePortion.length) {
        var padStart = onesFormat.indexOf('0')
        if (padStart != -1) {
          var padLen = onesFormat.length - padStart

          // pad to left with 0's
          while (onePortion.length < padLen) {
            onePortion = '0' + onePortion
          }
        }
      }
    }

    if (!onePortion && onesFormat.indexOf('0', onesFormat.length - 1) !== -1) onePortion = '0'

    returnString = onePortion + returnString

    // handle special case where negative is in front of the invalid characters
    if (number < 0 && negativeInFront && prefix.length > 0) prefix = neg + prefix
    else if (number < 0) returnString = neg + returnString

    if (!options.decimalSeparatorAlwaysShown) {
      if (returnString.lastIndexOf(dec) == returnString.length - 1) {
        returnString = returnString.substring(0, returnString.length - 1)
      }
    }
    returnString = prefix + returnString + suffix
    return returnString
  }

  /*	Parsing Methods	*/

  /**
   * Parses a number of given format from the element and returns a Number object.
   * @param {Object} options
   */
  jQuery.fn.parseNumber = function(options, writeBack, giveReturnValue) {
    // enforce defaults
    if (writeBack == null) writeBack = true
    if (giveReturnValue == null) giveReturnValue = true

    // get text
    var text
    if (jQuery(this).is(':input')) text = new String(jQuery(this).val())
    else text = new String(jQuery(this).text())

    // parse text
    var number = jQuery.parseNumber(text, options)

    if (number) {
      if (writeBack) {
        if (jQuery(this).is(':input')) jQuery(this).val(number.toString())
        else jQuery(this).text(number.toString())
      }
      if (giveReturnValue) return number
    }
  }

  /**
   * Parses a string of given format into a Number object.
   *
   * @param {Object} string
   * @param {Object} options
   */
  jQuery.parseNumber = function(numberString, options) {
    var options = jQuery.extend({}, jQuery.fn.parseNumber.defaults, options)
    var formatData = formatCodes(options.locale.toLowerCase())

    var dec = formatData.dec
    var group = formatData.group
    var neg = formatData.neg

    var valid = '1234567890.-'

    // now we need to convert it into a number
    while (numberString.indexOf(group) > -1) numberString = numberString.replace(group, '')
    numberString = numberString.replace(dec, '.').replace(neg, '-')
    var validText = ''
    var hasPercent = false
    if (numberString.charAt(numberString.length - 1) == '%') hasPercent = true
    for (var i = 0; i < numberString.length; i++) {
      if (valid.indexOf(numberString.charAt(i)) > -1) validText = validText + numberString.charAt(i)
    }
    var number = new Number(validText)
    if (hasPercent) {
      number = number / 100
      number = number.toFixed(validText.length - 1)
    }

    return number
  }

  jQuery.fn.parseNumber.defaults = {
    locale: 'us',
    decimalSeparatorAlwaysShown: false
  }

  jQuery.fn.formatNumber.defaults = {
    format: '#,###.00',
    locale: 'us',
    decimalSeparatorAlwaysShown: false,
    nanForceZero: true,
    round: true
  }

  Number.prototype.toFixed = function(precision) {
    return jQuery._roundNumber(this, precision)
  }

  jQuery._roundNumber = function(number, decimalPlaces) {
    var power = Math.pow(10, decimalPlaces || 0)
    var value = String(Math.round(number * power) / power)

    // ensure the decimal places are there
    if (decimalPlaces > 0) {
      var dp = value.indexOf('.')
      if (dp == -1) {
        value += '.'
        dp = 0
      } else {
        dp = value.length - (dp + 1)
      }

      while (dp < decimalPlaces) {
        value += '0'
        dp++
      }
    }
    return value
  }
})(jQuery)

// Simple JavaScript Templating
// John Resig - http://ejohn.org/ - MIT Licensed
;(function() {
  var cache = {}

  this.tmpl = function tmpl(str, data) {
    // Figure out if we're getting a template, or if we need to
    // load the template - and be sure to cache the result.
    var fn = !/\W/.test(str)
      ? (cache[str] = cache[str] || tmpl(document.getElementById(str).innerHTML))
      : // Generate a reusable function that will serve as a template
        // generator (and which will be cached).
        new Function(
          'obj',
          'var p=[],print=function(){p.push.apply(p,arguments);};' +
            // Introduce the data as local variables using with(){}
            "with(obj){p.push('" +
            // Convert the template into pure JavaScript
            str
              .replace(/[\r\t\n]/g, ' ')
              .split('<%')
              .join('\t')
              .replace(/((^|%>)[^\t]*)'/g, '$1\r')
              .replace(/\t=(.*?)%>/g, "',$1,'")
              .split('\t')
              .join("');")
              .split('%>')
              .join("p.push('")
              .split('\r')
              .join("\\'") +
            "');}return p.join('');"
        )

    // Provide some basic currying to the user
    return data ? fn(data) : fn
  }
})()

/**
 * jquery.dependClass - Attach class based on first class in list of current element
 *
 * Written by
 * Egor Khmelev (hmelyoff@gmail.com)
 *
 * Licensed under the MIT (MIT-LICENSE.txt).
 *
 * @author Egor Khmelev
 * @version 0.1.0-BETA ($Id$)
 *
 **/

;(function($) {
  $.baseClass = function(obj) {
    obj = $(obj)
    return obj.get(0).className.match(/([^ ]+)/)[1]
  }

  $.fn.addDependClass = function(className, delimiter) {
    var options = {
      delimiter: delimiter ? delimiter : '-'
    }
    return this.each(function() {
      var baseClass = $.baseClass(this)
      if (baseClass) $(this).addClass(baseClass + options.delimiter + className)
    })
  }

  $.fn.removeDependClass = function(className, delimiter) {
    var options = {
      delimiter: delimiter ? delimiter : '-'
    }
    return this.each(function() {
      var baseClass = $.baseClass(this)
      if (baseClass) $(this).removeClass(baseClass + options.delimiter + className)
    })
  }

  $.fn.toggleDependClass = function(className, delimiter) {
    var options = {
      delimiter: delimiter ? delimiter : '-'
    }
    return this.each(function() {
      var baseClass = $.baseClass(this)
      if (baseClass)
        if ($(this).is('.' + baseClass + options.delimiter + className))
          $(this).removeClass(baseClass + options.delimiter + className)
        else $(this).addClass(baseClass + options.delimiter + className)
    })
  }
})(jQuery)

/**
 * draggable - Class allows to make any element draggable
 *
 * Written by
 * Egor Khmelev (hmelyoff@gmail.com)
 *
 * Licensed under the MIT (MIT-LICENSE.txt).
 *
 * @author Egor Khmelev
 * @version 0.1.0-BETA ($Id$)
 *
 **/

;(function($) {
  function Draggable() {
    this._init.apply(this, arguments)
  }

  Draggable.prototype.oninit = function() {}

  Draggable.prototype.events = function() {}

  Draggable.prototype.onmousedown = function() {
    this.ptr.css({ position: 'absolute' })
  }

  Draggable.prototype.onmousemove = function(evt, x, y) {
    this.ptr.css({ left: x, top: y })
  }

  Draggable.prototype.onmouseup = function() {}

  Draggable.prototype.isDefault = {
    drag: false,
    clicked: false,
    toclick: true,
    mouseup: false
  }

  Draggable.prototype._init = function() {
    if (arguments.length > 0) {
      this.ptr = $(arguments[0])
      this.outer = $('.draggable-outer')

      this.is = {}
      $.extend(this.is, this.isDefault)

      var _offset = this.ptr.offset()
      this.d = {
        left: _offset.left,
        top: _offset.top,
        width: this.ptr.width(),
        height: this.ptr.height()
      }

      this.oninit.apply(this, arguments)

      this._events()
    }
  }

  Draggable.prototype._getPageCoords = function(event) {
    if (event.targetTouches && event.targetTouches[0]) {
      return { x: event.targetTouches[0].pageX, y: event.targetTouches[0].pageY }
    } else return { x: event.pageX, y: event.pageY }
  }

  Draggable.prototype._bindEvent = function(ptr, eventType, handler) {
    var self = this

    if (this.supportTouches_) ptr.get(0).addEventListener(this.events_[eventType], handler, false)
    else ptr.bind(this.events_[eventType], handler)
  }

  Draggable.prototype._events = function() {
    var self = this

    this.supportTouches_ = navigator.userAgent.indexOf('Mobile') != -1
    this.events_ = {
      click: this.supportTouches_ ? 'touchstart' : 'click',
      down: this.supportTouches_ ? 'touchstart' : 'mousedown',
      move: this.supportTouches_ ? 'touchmove' : 'mousemove',
      up: this.supportTouches_ ? 'touchend' : 'mouseup'
    }

    this._bindEvent($(document), 'move', function(event) {
      if (self.is.drag) {
        event.stopPropagation()
        event.preventDefault()
        self._mousemove(event)
      }
    })
    this._bindEvent($(document), 'down', function(event) {
      if (self.is.drag) {
        event.stopPropagation()
        event.preventDefault()
      }
    })
    this._bindEvent($(document), 'up', function(event) {
      self._mouseup(event)
    })

    this._bindEvent(this.ptr, 'down', function(event) {
      self._mousedown(event)
      return false
    })
    this._bindEvent(this.ptr, 'up', function(event) {
      self._mouseup(event)
    })

    this.ptr
      .find('a')
      .click(function() {
        self.is.clicked = true

        if (!self.is.toclick) {
          self.is.toclick = true
          return false
        }
      })
      .mousedown(function(event) {
        self._mousedown(event)
        return false
      })

    this.events()
  }

  Draggable.prototype._mousedown = function(evt) {
    this.is.drag = true
    this.is.clicked = false
    this.is.mouseup = false

    var _offset = this.ptr.offset()
    var coords = this._getPageCoords(evt)
    this.cx = coords.x - _offset.left
    this.cy = coords.y - _offset.top

    $.extend(this.d, {
      left: _offset.left,
      top: _offset.top,
      width: this.ptr.width(),
      height: this.ptr.height()
    })

    if (this.outer && this.outer.get(0)) {
      this.outer.css({
        height: Math.max(this.outer.height(), $(document.body).height()),
        overflow: 'hidden'
      })
    }

    this.onmousedown(evt)
  }

  Draggable.prototype._mousemove = function(evt) {
    this.is.toclick = false
    var coords = this._getPageCoords(evt)
    this.onmousemove(evt, coords.x - this.cx, coords.y - this.cy)
  }

  Draggable.prototype._mouseup = function(evt) {
    var oThis = this

    if (this.is.drag) {
      this.is.drag = false

      if (this.outer && this.outer.get(0)) {
        if ($.browser.mozilla) {
          this.outer.css({ overflow: 'hidden' })
        } else {
          this.outer.css({ overflow: 'visible' })
        }

        if ($.browser.msie && $.browser.version == '6.0') {
          this.outer.css({ height: '100%' })
        } else {
          this.outer.css({ height: 'auto' })
        }
      }

      this.onmouseup(evt)
    }
  }

  window.Draggable = Draggable
})(jQuery)

/**
 * jquery.slider - Slider ui control in jQuery
 *
 * Written by
 * Egor Khmelev (hmelyoff@gmail.com)
 *
 * Licensed under the MIT (MIT-LICENSE.txt).
 *
 * @author Egor Khmelev
 * @version 1.1.0-RELEASE ($Id$)
 *
 * Dependencies
 *
 * jQuery (http://jquery.com)
 * jquery.numberformatter (http://code.google.com/p/jquery-numberformatter/)
 * tmpl (http://ejohn.org/blog/javascript-micro-templating/)
 * jquery.dependClass
 * draggable
 *
 **/

;(function($) {
  function isArray(value) {
    if (typeof value == 'undefined') return false

    if (
      value instanceof Array ||
      ((!(value instanceof Object) && Object.prototype.toString.call(value) == '[object Array]') ||
        (typeof value.length == 'number' &&
          typeof value.splice != 'undefined' &&
          typeof value.propertyIsEnumerable != 'undefined' &&
          !value.propertyIsEnumerable('splice')))
    ) {
      return true
    }

    return false
  }

  $.slider = function(node, settings) {
    var jNode = $(node)
    if (!jNode.data('jslider')) jNode.data('jslider', new jSlider(node, settings))

    return jNode.data('jslider')
  }

  $.fn.slider = function(action, opt_value) {
    var returnValue,
      args = arguments

    function isDef(val) {
      return val !== undefined
    }

    function isDefAndNotNull(val) {
      return val != null
    }

    this.each(function() {
      var self = $.slider(this, action)

      // do actions
      if (typeof action == 'string') {
        switch (action) {
          case 'value':
            if (isDef(args[1]) && isDef(args[2])) {
              var pointers = self.getPointers()
              if (isDefAndNotNull(pointers[0]) && isDefAndNotNull(args[1])) {
                pointers[0].set(args[1])
                pointers[0].setIndexOver()
              }

              if (isDefAndNotNull(pointers[1]) && isDefAndNotNull(args[2])) {
                pointers[1].set(args[2])
                pointers[1].setIndexOver()
              }
            } else if (isDef(args[1])) {
              var pointers = self.getPointers()
              if (isDefAndNotNull(pointers[0]) && isDefAndNotNull(args[1])) {
                pointers[0].set(args[1])
                pointers[0].setIndexOver()
              }
            } else returnValue = self.getValue()

            break

          case 'prc':
            if (isDef(args[1]) && isDef(args[2])) {
              var pointers = self.getPointers()
              if (isDefAndNotNull(pointers[0]) && isDefAndNotNull(args[1])) {
                pointers[0]._set(args[1])
                pointers[0].setIndexOver()
              }

              if (isDefAndNotNull(pointers[1]) && isDefAndNotNull(args[2])) {
                pointers[1]._set(args[2])
                pointers[1].setIndexOver()
              }
            } else if (isDef(args[1])) {
              var pointers = self.getPointers()
              if (isDefAndNotNull(pointers[0]) && isDefAndNotNull(args[1])) {
                pointers[0]._set(args[1])
                pointers[0].setIndexOver()
              }
            } else returnValue = self.getPrcValue()

            break

          case 'calculatedValue':
            var value = self.getValue().split(';')
            returnValue = ''
            for (var i = 0; i < value.length; i++) {
              returnValue += (i > 0 ? ';' : '') + self.nice(value[i])
            }

            break

          case 'skin':
            self.setSkin(args[1])

            break
        }
      }

      // return actual object
      else if (!action && !opt_value) {
        if (!isArray(returnValue)) returnValue = []

        returnValue.push(slider)
      }
    })

    // flatten array just with one slider
    if (isArray(returnValue) && returnValue.length == 1) returnValue = returnValue[0]

    return returnValue || this
  }

  var OPTIONS = {
    settings: {
      from: 1,
      to: 10,
      step: 1,
      smooth: true,
      limits: true,
      round: 0,
      format: { format: '#,###.##' },
      value: '5;7',
      dimension: ''
    },

    className: 'jslider',
    selector: '.jslider-',

    template: tmpl(
      '<span class="<%=className%>">' +
        '<table><tr><td>' +
        '<div class="<%=className%>-bg">' +
        '<i class="l"></i><i class="r"></i>' +
        '<i class="v"></i>' +
        '</div>' +
        '<div class="<%=className%>-pointer"></div>' +
        '<div class="<%=className%>-pointer <%=className%>-pointer-to"></div>' +
        '<div class="<%=className%>-label"><span><%=settings.from%></span></div>' +
        '<div class="<%=className%>-label <%=className%>-label-to"><span><%=settings.to%></span><%=settings.dimension%></div>' +
        '<div class="<%=className%>-value"><span></span><%=settings.dimension%></div>' +
        '<div class="<%=className%>-value <%=className%>-value-to"><span></span><%=settings.dimension%></div>' +
        '<div class="<%=className%>-scale"><%=scale%></div>' +
        '</td></tr></table>' +
        '</span>'
    )
  }

  function jSlider() {
    return this.init.apply(this, arguments)
  }

  jSlider.prototype.init = function(node, settings) {
    this.settings = $.extend(true, {}, OPTIONS.settings, settings ? settings : {})

    // obj.sliderHandler = this;
    this.inputNode = $(node).hide()

    this.settings.interval = this.settings.to - this.settings.from
    this.settings.value = this.inputNode.attr('value')

    if (this.settings.calculate && $.isFunction(this.settings.calculate))
      this.nice = this.settings.calculate

    if (this.settings.onstatechange && $.isFunction(this.settings.onstatechange))
      this.onstatechange = this.settings.onstatechange

    this.is = {
      init: false
    }
    this.o = {}

    this.create()
  }

  jSlider.prototype.onstatechange = function() {}

  jSlider.prototype.create = function() {
    var $this = this

    this.domNode = $(
      OPTIONS.template({
        className: OPTIONS.className,
        settings: {
          from: this.nice(this.settings.from),
          to: this.nice(this.settings.to),
          dimension: this.settings.dimension
        },
        scale: this.generateScale()
      })
    )

    this.inputNode.after(this.domNode)
    this.drawScale()

    // set skin class
    if (this.settings.skin && this.settings.skin.length > 0) this.setSkin(this.settings.skin)

    this.sizes = {
      domWidth: this.domNode.width(),
      domOffset: this.domNode.offset()
    }

    // find some objects
    $.extend(this.o, {
      pointers: {},
      labels: {
        0: {
          o: this.domNode.find(OPTIONS.selector + 'value').not(OPTIONS.selector + 'value-to')
        },
        1: {
          o: this.domNode.find(OPTIONS.selector + 'value').filter(OPTIONS.selector + 'value-to')
        }
      },
      limits: {
        0: this.domNode.find(OPTIONS.selector + 'label').not(OPTIONS.selector + 'label-to'),
        1: this.domNode.find(OPTIONS.selector + 'label').filter(OPTIONS.selector + 'label-to')
      }
    })

    $.extend(this.o.labels[0], {
      value: this.o.labels[0].o.find('span')
    })

    $.extend(this.o.labels[1], {
      value: this.o.labels[1].o.find('span')
    })

    if (!$this.settings.value.split(';')[1]) {
      this.settings.single = true
      this.domNode.addDependClass('single')
    }

    if (!$this.settings.limits) this.domNode.addDependClass('limitless')

    this.domNode.find(OPTIONS.selector + 'pointer').each(function(i) {
      var value = $this.settings.value.split(';')[i]
      if (value) {
        $this.o.pointers[i] = new jSliderPointer(this, i, $this)

        var prev = $this.settings.value.split(';')[i - 1]
        if (prev && new Number(value) < new Number(prev)) value = prev

        value = value < $this.settings.from ? $this.settings.from : value
        value = value > $this.settings.to ? $this.settings.to : value

        $this.o.pointers[i].set(value, true)
      }
    })

    this.o.value = this.domNode.find('.v')
    this.is.init = true

    $.each(this.o.pointers, function(i) {
      $this.redraw(this)
    })

    ;(function(self) {
      $(window).resize(function() {
        self.onresize()
      })
    })(this)
  }

  jSlider.prototype.setSkin = function(skin) {
    if (this.skin_) this.domNode.removeDependClass(this.skin_, '_')

    this.domNode.addDependClass((this.skin_ = skin), '_')
  }

  jSlider.prototype.setPointersIndex = function(i) {
    $.each(this.getPointers(), function(i) {
      this.index(i)
    })
  }

  jSlider.prototype.getPointers = function() {
    return this.o.pointers
  }

  jSlider.prototype.generateScale = function() {
    if (this.settings.scale && this.settings.scale.length > 0) {
      var str = ''
      var s = this.settings.scale
      var prc = Math.round((100 / (s.length - 1)) * 10) / 10
      for (var i = 0; i < s.length; i++) {
        str +=
          '<span style="left: ' +
          i * prc +
          '%">' +
          (s[i] != '|' ? '<ins>' + s[i] + '</ins>' : '') +
          '</span>'
      }
      return str
    } else return ''

    return ''
  }

  jSlider.prototype.drawScale = function() {
    this.domNode.find(OPTIONS.selector + 'scale span ins').each(function() {
      $(this).css({ marginLeft: -$(this).outerWidth() / 2 })
    })
  }

  jSlider.prototype.onresize = function() {
    var self = this
    this.sizes = {
      domWidth: this.domNode.width(),
      domOffset: this.domNode.offset()
    }

    $.each(this.o.pointers, function(i) {
      self.redraw(this)
    })
  }

  jSlider.prototype.limits = function(x, pointer) {
    // smooth
    if (!this.settings.smooth) {
      var step = (this.settings.step * 100) / this.settings.interval
      x = Math.round(x / step) * step
    }

    var another = this.o.pointers[1 - pointer.uid]
    if (another && pointer.uid && x < another.value.prc) x = another.value.prc
    if (another && !pointer.uid && x > another.value.prc) x = another.value.prc

    // base limit
    if (x < 0) x = 0
    if (x > 100) x = 100

    return Math.round(x * 10) / 10
  }

  jSlider.prototype.redraw = function(pointer) {
    if (!this.is.init) return false

    this.setValue()

    // redraw range line
    if (this.o.pointers[0] && this.o.pointers[1])
      this.o.value.css({
        left: this.o.pointers[0].value.prc + '%',
        width: this.o.pointers[1].value.prc - this.o.pointers[0].value.prc + '%'
      })

    this.o.labels[pointer.uid].value.html(this.nice(pointer.value.origin))

    // redraw position of labels
    this.redrawLabels(pointer)
  }

  jSlider.prototype.redrawLabels = function(pointer) {
    function setPosition(label, sizes, prc) {
      sizes.margin = -sizes.label / 2

      // left limit
      label_left = sizes.border + sizes.margin
      if (label_left < 0) sizes.margin -= label_left

      // right limit
      if (sizes.border + sizes.label / 2 > self.sizes.domWidth) {
        sizes.margin = 0
        sizes.right = true
      } else sizes.right = false

      label.o.css({ left: prc + '%', marginLeft: sizes.margin, right: 'auto' })
      if (sizes.right) label.o.css({ left: 'auto', right: 0 })
      return sizes
    }

    var self = this
    var label = this.o.labels[pointer.uid]
    var prc = pointer.value.prc

    var sizes = {
      label: label.o.outerWidth(),
      right: false,
      border: (prc * this.sizes.domWidth) / 100
    }

    if (!this.settings.single) {
      // glue if near;
      var another = this.o.pointers[1 - pointer.uid]
      var another_label = this.o.labels[another.uid]

      switch (pointer.uid) {
        case 0:
          if (
            sizes.border + sizes.label / 2 >
            another_label.o.offset().left - this.sizes.domOffset.left
          ) {
            another_label.o.css({ visibility: 'hidden' })
            another_label.value.html(this.nice(another.value.origin))

            label.o.css({ visibility: 'visible' })

            prc = (another.value.prc - prc) / 2 + prc
            if (another.value.prc != pointer.value.prc) {
              label.value.html(
                this.nice(pointer.value.origin) +
                  '&nbsp;&ndash;&nbsp;' +
                  this.nice(another.value.origin)
              )
              sizes.label = label.o.outerWidth()
              sizes.border = (prc * this.sizes.domWidth) / 100
            }
          } else {
            another_label.o.css({ visibility: 'visible' })
          }
          break

        case 1:
          if (
            sizes.border - sizes.label / 2 <
            another_label.o.offset().left - this.sizes.domOffset.left + another_label.o.outerWidth()
          ) {
            another_label.o.css({ visibility: 'hidden' })
            another_label.value.html(this.nice(another.value.origin))

            label.o.css({ visibility: 'visible' })

            prc = (prc - another.value.prc) / 2 + another.value.prc
            if (another.value.prc != pointer.value.prc) {
              label.value.html(
                this.nice(another.value.origin) +
                  '&nbsp;&ndash;&nbsp;' +
                  this.nice(pointer.value.origin)
              )
              sizes.label = label.o.outerWidth()
              sizes.border = (prc * this.sizes.domWidth) / 100
            }
          } else {
            another_label.o.css({ visibility: 'visible' })
          }
          break
      }
    }

    sizes = setPosition(label, sizes, prc)

    /* draw second label */
    if (another_label) {
      var sizes = {
        label: another_label.o.outerWidth(),
        right: false,
        border: (another.value.prc * this.sizes.domWidth) / 100
      }
      sizes = setPosition(another_label, sizes, another.value.prc)
    }

    this.redrawLimits()
  }

  jSlider.prototype.redrawLimits = function() {
    if (this.settings.limits) {
      var limits = [true, true]

      for (key in this.o.pointers) {
        if (!this.settings.single || key == 0) {
          var pointer = this.o.pointers[key]
          var label = this.o.labels[pointer.uid]
          var label_left = label.o.offset().left - this.sizes.domOffset.left

          var limit = this.o.limits[0]
          if (label_left < limit.outerWidth()) limits[0] = false

          var limit = this.o.limits[1]
          if (label_left + label.o.outerWidth() > this.sizes.domWidth - limit.outerWidth())
            limits[1] = false
        }
      }

      for (var i = 0; i < limits.length; i++) {
        if (limits[i]) this.o.limits[i].fadeIn('fast')
        else this.o.limits[i].fadeOut('fast')
      }
    }
  }

  jSlider.prototype.setValue = function() {
    var value = this.getValue()
    this.inputNode.attr('value', value)
    this.onstatechange.call(this, value)
  }

  jSlider.prototype.getValue = function() {
    if (!this.is.init) return false
    var $this = this

    var value = ''
    $.each(this.o.pointers, function(i) {
      if (this.value.prc != undefined && !isNaN(this.value.prc))
        value += (i > 0 ? ';' : '') + $this.prcToValue(this.value.prc)
    })
    return value
  }

  jSlider.prototype.getPrcValue = function() {
    if (!this.is.init) return false
    var $this = this

    var value = ''
    $.each(this.o.pointers, function(i) {
      if (this.value.prc != undefined && !isNaN(this.value.prc))
        value += (i > 0 ? ';' : '') + this.value.prc
    })
    return value
  }

  jSlider.prototype.prcToValue = function(prc) {
    if (this.settings.heterogeneity && this.settings.heterogeneity.length > 0) {
      var h = this.settings.heterogeneity

      var _start = 0
      var _from = this.settings.from

      for (var i = 0; i <= h.length; i++) {
        if (h[i]) var v = h[i].split('/')
        else var v = [100, this.settings.to]

        v[0] = new Number(v[0])
        v[1] = new Number(v[1])

        if (prc >= _start && prc <= v[0]) {
          var value = _from + ((prc - _start) * (v[1] - _from)) / (v[0] - _start)
        }

        _start = v[0]
        _from = v[1]
      }
    } else {
      var value = this.settings.from + (prc * this.settings.interval) / 100
    }

    return this.round(value)
  }

  jSlider.prototype.valueToPrc = function(value, pointer) {
    if (this.settings.heterogeneity && this.settings.heterogeneity.length > 0) {
      var h = this.settings.heterogeneity

      var _start = 0
      var _from = this.settings.from

      for (var i = 0; i <= h.length; i++) {
        if (h[i]) var v = h[i].split('/')
        else var v = [100, this.settings.to]
        v[0] = new Number(v[0])
        v[1] = new Number(v[1])

        if (value >= _from && value <= v[1]) {
          var prc = pointer.limits(_start + ((value - _from) * (v[0] - _start)) / (v[1] - _from))
        }

        _start = v[0]
        _from = v[1]
      }
    } else {
      var prc = pointer.limits(((value - this.settings.from) * 100) / this.settings.interval)
    }

    return prc
  }

  jSlider.prototype.round = function(value) {
    value = Math.round(value / this.settings.step) * this.settings.step
    if (this.settings.round)
      value =
        Math.round(value * Math.pow(10, this.settings.round)) / Math.pow(10, this.settings.round)
    else value = Math.round(value)
    return value
  }

  jSlider.prototype.nice = function(value) {
    value = value
      .toString()
      .replace(/,/gi, '.')
      .replace(/ /gi, '')

    if ($.formatNumber) {
      return $.formatNumber(new Number(value), this.settings.format || {}).replace(/-/gi, '&minus;')
    } else {
      return new Number(value)
    }
  }

  function jSliderPointer() {
    Draggable.apply(this, arguments)
  }
  jSliderPointer.prototype = new Draggable()

  jSliderPointer.prototype.oninit = function(ptr, id, _constructor) {
    this.uid = id
    this.parent = _constructor
    this.value = {}
    this.settings = this.parent.settings
  }

  jSliderPointer.prototype.onmousedown = function(evt) {
    this._parent = {
      offset: this.parent.domNode.offset(),
      width: this.parent.domNode.width()
    }
    this.ptr.addDependClass('hover')
    this.setIndexOver()
  }

  jSliderPointer.prototype.onmousemove = function(evt, x) {
    var coords = this._getPageCoords(evt)
    this._set(this.calc(coords.x))
  }

  jSliderPointer.prototype.onmouseup = function(evt) {
    if (this.parent.settings.callback && $.isFunction(this.parent.settings.callback))
      this.parent.settings.callback.call(this.parent, this.parent.getValue())

    this.ptr.removeDependClass('hover')
  }

  jSliderPointer.prototype.setIndexOver = function() {
    this.parent.setPointersIndex(1)
    this.index(2)
  }

  jSliderPointer.prototype.index = function(i) {
    this.ptr.css({ zIndex: i })
  }

  jSliderPointer.prototype.limits = function(x) {
    return this.parent.limits(x, this)
  }

  jSliderPointer.prototype.calc = function(coords) {
    var x = this.limits(((coords - this._parent.offset.left) * 100) / this._parent.width)
    return x
  }

  jSliderPointer.prototype.set = function(value, opt_origin) {
    this.value.origin = this.parent.round(value)
    this._set(this.parent.valueToPrc(value, this), opt_origin)
  }

  jSliderPointer.prototype._set = function(prc, opt_origin) {
    if (!opt_origin) this.value.origin = this.parent.prcToValue(prc)

    this.value.prc = prc
    this.ptr.css({ left: prc + '%' })
    this.parent.redraw(this)
  }
})(jQuery)
/*
 * jQuery Currency v0.5
 * Simple, unobtrusive currency converting and formatting
 *
 * Copyright 2011, Gilbert Pellegrom
 * Free to use and abuse under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * http://dev7studios.com
 */

;(function($) {
  $.fn.currency = function(method) {
    var methods = {
      init: function(options) {
        var settings = $.extend({}, this.currency.defaults, options)
        return this.each(function() {
          var $element = $(this),
            element = this
          var value = 0

          if ($element.is(':input')) {
            value = $element.val()
          } else {
            value = $element.text()
          }

          if (helpers.isNumber(value)) {
            if (settings.convertFrom != '') {
              if ($element.is(':input')) {
                $element.val(value + ' ' + settings.convertLoading)
              } else {
                $element.html(value + ' ' + settings.convertLoading)
              }
              $.post(
                settings.convertLocation,
                { amount: value, from: settings.convertFrom, to: settings.region },
                function(data) {
                  value = data
                  if ($element.is(':input')) {
                    $element.val(helpers.format_currency(value, settings))
                  } else {
                    $element.html(helpers.format_currency(value, settings))
                  }
                }
              )
            } else {
              if ($element.is(':input')) {
                $element.val(helpers.format_currency(value, settings))
              } else {
                $element.html(helpers.format_currency(value, settings))
              }
            }
          }
        })
      }
    }

    var helpers = {
      format_currency: function(amount, settings) {
        var bc = settings.region
        var currency_before = ''
        var currency_after = ''

        if (bc == 'USD') currency_before = '$'

        if (currency_before == '' && currency_after == '') currency_before = '$'

        var output = ''
        if (!settings.hidePrefix) output += currency_before
        output += helpers.number_format(
          amount,
          settings.decimals,
          settings.decimal,
          settings.thousands
        )
        if (!settings.hidePostfix) output += currency_after
        return output
      },

      // Kindly borrowed from http://phpjs.org/functions/number_format
      number_format: function(number, decimals, dec_point, thousands_sep) {
        number = (number + '').replace(/[^0-9+\-Ee.]/g, '')
        var n = !isFinite(+number) ? 0 : +number,
          prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
          sep = typeof thousands_sep === 'undefined' ? ',' : thousands_sep,
          dec = typeof dec_point === 'undefined' ? '.' : dec_point,
          s = '',
          toFixedFix = function(n, prec) {
            var k = Math.pow(10, prec)
            return '' + Math.round(n * k) / k
          }
        // Fix for IE parseFloat(0.55).toFixed(0) = 0;
        s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.')
        if (s[0].length > 3) {
          s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep)
        }
        if ((s[1] || '').length < prec) {
          s[1] = s[1] || ''
          s[1] += new Array(prec - s[1].length + 1).join('0')
        }
        return s.join(dec)
      },

      isNumber: function(n) {
        return !isNaN(parseFloat(n)) && isFinite(n)
      }
    }

    if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1))
    } else if (typeof method === 'object' || !method) {
      return methods.init.apply(this, arguments)
    } else {
      $.error('Method "' + method + '" does not exist in currency plugin!')
    }
  }

  $.fn.currency.defaults = {
    region: 'USD', // The 3 digit ISO code you want to display your currency in
    thousands: ',', // Thousands separator
    decimal: '.', // Decimal separator
    decimals: 2, // How many decimals to show
    hidePrefix: false, // Hide any prefix
    hidePostfix: false, // Hide any postfix
    convertFrom: '', // If converting, the 3 digit ISO code you want to convert from,
    convertLoading: '(Converting...)', // Loading message appended to values while converting
    convertLocation: 'convert.php' // Location of convert.php file
  }

  $.fn.currency.settings = {}
})(jQuery)
/*
 Highcharts JS v4.0.1 (2014-04-24)

 (c) 2009-2014 Torstein Honsi

 License: www.highcharts.com/license
*/
;(function() {
  function q(a, b) {
    var c
    a || (a = {})
    for (c in b) a[c] = b[c]
    return a
  }
  function w() {
    var a,
      b = arguments,
      c,
      d = {},
      e = function(a, b) {
        var c, d
        typeof a !== 'object' && (a = {})
        for (d in b)
          b.hasOwnProperty(d) &&
            ((c = b[d]),
            (a[d] =
              c &&
              typeof c === 'object' &&
              Object.prototype.toString.call(c) !== '[object Array]' &&
              d !== 'renderTo' &&
              typeof c.nodeType !== 'number'
                ? e(a[d] || {}, c)
                : b[d]))
        return a
      }
    b[0] === !0 && ((d = b[1]), (b = Array.prototype.slice.call(b, 2)))
    c = b.length
    for (a = 0; a < c; a++) d = e(d, b[a])
    return d
  }
  function z(a, b) {
    return parseInt(a, b || 10)
  }
  function Fa(a) {
    return typeof a === 'string'
  }
  function ca(a) {
    return typeof a === 'object'
  }
  function La(a) {
    return Object.prototype.toString.call(a) === '[object Array]'
  }
  function ha(a) {
    return typeof a === 'number'
  }
  function za(a) {
    return U.log(a) / U.LN10
  }
  function ia(a) {
    return U.pow(10, a)
  }
  function ja(a, b) {
    for (var c = a.length; c--; )
      if (a[c] === b) {
        a.splice(c, 1)
        break
      }
  }
  function r(a) {
    return a !== t && a !== null
  }
  function H(a, b, c) {
    var d, e
    if (Fa(b)) r(c) ? a.setAttribute(b, c) : a && a.getAttribute && (e = a.getAttribute(b))
    else if (r(b) && ca(b)) for (d in b) a.setAttribute(d, b[d])
    return e
  }
  function qa(a) {
    return La(a) ? a : [a]
  }
  function m() {
    var a = arguments,
      b,
      c,
      d = a.length
    for (b = 0; b < d; b++) if (((c = a[b]), typeof c !== 'undefined' && c !== null)) return c
  }
  function G(a, b) {
    if (Aa && !aa && b && b.opacity !== t) b.filter = 'alpha(opacity=' + b.opacity * 100 + ')'
    q(a.style, b)
  }
  function Y(a, b, c, d, e) {
    a = y.createElement(a)
    b && q(a, b)
    e && G(a, { padding: 0, border: Q, margin: 0 })
    c && G(a, c)
    d && d.appendChild(a)
    return a
  }
  function ka(a, b) {
    var c = function() {}
    c.prototype = new a()
    q(c.prototype, b)
    return c
  }
  function Ga(a, b, c, d) {
    var e = E.lang,
      a = +a || 0,
      f = b === -1 ? (a.toString().split('.')[1] || '').length : isNaN((b = M(b))) ? 2 : b,
      b = c === void 0 ? e.decimalPoint : c,
      d = d === void 0 ? e.thousandsSep : d,
      e = a < 0 ? '-' : '',
      c = String(z((a = M(a).toFixed(f)))),
      g = c.length > 3 ? c.length % 3 : 0
    return (
      e +
      (g ? c.substr(0, g) + d : '') +
      c.substr(g).replace(/(\d{3})(?=\d)/g, '$1' + d) +
      (f
        ? b +
          M(a - c)
            .toFixed(f)
            .slice(2)
        : '')
    )
  }
  function Ha(a, b) {
    return Array((b || 2) + 1 - String(a).length).join(0) + a
  }
  function Ma(a, b, c) {
    var d = a[b]
    a[b] = function() {
      var a = Array.prototype.slice.call(arguments)
      a.unshift(d)
      return c.apply(this, a)
    }
  }
  function Ia(a, b) {
    for (var c = '{', d = !1, e, f, g, h, i, j = []; (c = a.indexOf(c)) !== -1; ) {
      e = a.slice(0, c)
      if (d) {
        f = e.split(':')
        g = f.shift().split('.')
        i = g.length
        e = b
        for (h = 0; h < i; h++) e = e[g[h]]
        if (f.length)
          (f = f.join(':')),
            (g = /\.([0-9])/),
            (h = E.lang),
            (i = void 0),
            /f$/.test(f)
              ? ((i = (i = f.match(g)) ? i[1] : -1),
                e !== null &&
                  (e = Ga(e, i, h.decimalPoint, f.indexOf(',') > -1 ? h.thousandsSep : '')))
              : (e = cb(f, e))
      }
      j.push(e)
      a = a.slice(c + 1)
      c = (d = !d) ? '}' : '{'
    }
    j.push(a)
    return j.join('')
  }
  function mb(a) {
    return U.pow(10, T(U.log(a) / U.LN10))
  }
  function nb(a, b, c, d) {
    var e,
      c = m(c, 1)
    e = a / c
    b ||
      ((b = [1, 2, 2.5, 5, 10]),
      d && d.allowDecimals === !1 && (c === 1 ? (b = [1, 2, 5, 10]) : c <= 0.1 && (b = [1 / c])))
    for (d = 0; d < b.length; d++) if (((a = b[d]), e <= (b[d] + (b[d + 1] || b[d])) / 2)) break
    a *= c
    return a
  }
  function Bb() {
    this.symbol = this.color = 0
  }
  function ob(a, b) {
    var c = a.length,
      d,
      e
    for (e = 0; e < c; e++) a[e].ss_i = e
    a.sort(function(a, c) {
      d = b(a, c)
      return d === 0 ? a.ss_i - c.ss_i : d
    })
    for (e = 0; e < c; e++) delete a[e].ss_i
  }
  function Na(a) {
    for (var b = a.length, c = a[0]; b--; ) a[b] < c && (c = a[b])
    return c
  }
  function Ba(a) {
    for (var b = a.length, c = a[0]; b--; ) a[b] > c && (c = a[b])
    return c
  }
  function Oa(a, b) {
    for (var c in a) a[c] && a[c] !== b && a[c].destroy && a[c].destroy(), delete a[c]
  }
  function Pa(a) {
    db || (db = Y(Ja))
    a && db.appendChild(a)
    db.innerHTML = ''
  }
  function ra(a, b) {
    var c = 'Highcharts error #' + a + ': www.highcharts.com/errors/' + a
    if (b) throw c
    else I.console && console.log(c)
  }
  function da(a) {
    return parseFloat(a.toPrecision(14))
  }
  function Qa(a, b) {
    va = m(a, b.animation)
  }
  function Cb() {
    var a = E.global.useUTC,
      b = a ? 'getUTC' : 'get',
      c = a ? 'setUTC' : 'set'
    Ra = ((a && E.global.timezoneOffset) || 0) * 6e4
    eb = a
      ? Date.UTC
      : function(a, b, c, g, h, i) {
          return new Date(a, b, m(c, 1), m(g, 0), m(h, 0), m(i, 0)).getTime()
        }
    pb = b + 'Minutes'
    qb = b + 'Hours'
    rb = b + 'Day'
    Xa = b + 'Date'
    fb = b + 'Month'
    gb = b + 'FullYear'
    Db = c + 'Minutes'
    Eb = c + 'Hours'
    sb = c + 'Date'
    Fb = c + 'Month'
    Gb = c + 'FullYear'
  }
  function P() {}
  function Sa(a, b, c, d) {
    this.axis = a
    this.pos = b
    this.type = c || ''
    this.isNew = !0
    !c && !d && this.addLabel()
  }
  function la() {
    this.init.apply(this, arguments)
  }
  function Ya() {
    this.init.apply(this, arguments)
  }
  function Hb(a, b, c, d, e) {
    var f = a.chart.inverted
    this.axis = a
    this.isNegative = c
    this.options = b
    this.x = d
    this.total = null
    this.points = {}
    this.stack = e
    this.alignOptions = {
      align: b.align || (f ? (c ? 'left' : 'right') : 'center'),
      verticalAlign: b.verticalAlign || (f ? 'middle' : c ? 'bottom' : 'top'),
      y: m(b.y, f ? 4 : c ? 14 : -6),
      x: m(b.x, f ? (c ? -6 : 6) : 0)
    }
    this.textAlign = b.textAlign || (f ? (c ? 'right' : 'left') : 'center')
  }
  var t,
    y = document,
    I = window,
    U = Math,
    u = U.round,
    T = U.floor,
    Ka = U.ceil,
    v = U.max,
    C = U.min,
    M = U.abs,
    Z = U.cos,
    ea = U.sin,
    ma = U.PI,
    Ca = (ma * 2) / 360,
    wa = navigator.userAgent,
    Ib = I.opera,
    Aa = /msie/i.test(wa) && !Ib,
    hb = y.documentMode === 8,
    ib = /AppleWebKit/.test(wa),
    Ta = /Firefox/.test(wa),
    Jb = /(Mobile|Android|Windows Phone)/.test(wa),
    xa = 'http://www.w3.org/2000/svg',
    aa = !!y.createElementNS && !!y.createElementNS(xa, 'svg').createSVGRect,
    Nb = Ta && parseInt(wa.split('Firefox/')[1], 10) < 4,
    fa = !aa && !Aa && !!y.createElement('canvas').getContext,
    Za,
    $a,
    Kb = {},
    tb = 0,
    db,
    E,
    cb,
    va,
    ub,
    A,
    sa = function() {},
    V = [],
    ab = 0,
    Ja = 'div',
    Q = 'none',
    Ob = /^[0-9]+$/,
    Pb = 'stroke-width',
    eb,
    Ra,
    pb,
    qb,
    rb,
    Xa,
    fb,
    gb,
    Db,
    Eb,
    sb,
    Fb,
    Gb,
    F = {},
    R = (I.Highcharts = I.Highcharts ? ra(16, !0) : {})
  cb = function(a, b, c) {
    if (!r(b) || isNaN(b)) return 'Invalid date'
    var a = m(a, '%Y-%m-%d %H:%M:%S'),
      d = new Date(b - Ra),
      e,
      f = d[qb](),
      g = d[rb](),
      h = d[Xa](),
      i = d[fb](),
      j = d[gb](),
      k = E.lang,
      l = k.weekdays,
      d = q(
        {
          a: l[g].substr(0, 3),
          A: l[g],
          d: Ha(h),
          e: h,
          b: k.shortMonths[i],
          B: k.months[i],
          m: Ha(i + 1),
          y: j.toString().substr(2, 2),
          Y: j,
          H: Ha(f),
          I: Ha(f % 12 || 12),
          l: f % 12 || 12,
          M: Ha(d[pb]()),
          p: f < 12 ? 'AM' : 'PM',
          P: f < 12 ? 'am' : 'pm',
          S: Ha(d.getSeconds()),
          L: Ha(u(b % 1e3), 3)
        },
        R.dateFormats
      )
    for (e in d)
      for (; a.indexOf('%' + e) !== -1; )
        a = a.replace('%' + e, typeof d[e] === 'function' ? d[e](b) : d[e])
    return c ? a.substr(0, 1).toUpperCase() + a.substr(1) : a
  }
  Bb.prototype = {
    wrapColor: function(a) {
      if (this.color >= a) this.color = 0
    },
    wrapSymbol: function(a) {
      if (this.symbol >= a) this.symbol = 0
    }
  }
  A = (function() {
    for (var a = 0, b = arguments, c = b.length, d = {}; a < c; a++) d[b[a++]] = b[a]
    return d
  })(
    'millisecond',
    1,
    'second',
    1e3,
    'minute',
    6e4,
    'hour',
    36e5,
    'day',
    864e5,
    'week',
    6048e5,
    'month',
    26784e5,
    'year',
    31556952e3
  )
  ub = {
    init: function(a, b, c) {
      var b = b || '',
        d = a.shift,
        e = b.indexOf('C') > -1,
        f = e ? 7 : 3,
        g,
        b = b.split(' '),
        c = [].concat(c),
        h,
        i,
        j = function(a) {
          for (g = a.length; g--; )
            a[g] === 'M' && a.splice(g + 1, 0, a[g + 1], a[g + 2], a[g + 1], a[g + 2])
        }
      e && (j(b), j(c))
      a.isArea && ((h = b.splice(b.length - 6, 6)), (i = c.splice(c.length - 6, 6)))
      if (d <= c.length / f && b.length === c.length)
        for (; d--; )
          c = []
            .concat(c)
            .splice(0, f)
            .concat(c)
      a.shift = 0
      if (b.length)
        for (a = c.length; b.length < a; )
          (d = [].concat(b).splice(b.length - f, f)),
            e && ((d[f - 6] = d[f - 2]), (d[f - 5] = d[f - 1])),
            (b = b.concat(d))
      h && ((b = b.concat(h)), (c = c.concat(i)))
      return [b, c]
    },
    step: function(a, b, c, d) {
      var e = [],
        f = a.length
      if (c === 1) e = d
      else if (f === b.length && c < 1)
        for (; f--; )
          (d = parseFloat(a[f])), (e[f] = isNaN(d) ? a[f] : c * parseFloat(b[f] - d) + d)
      else e = b
      return e
    }
  }
  ;(function(a) {
    I.HighchartsAdapter =
      I.HighchartsAdapter ||
      (a && {
        init: function(b) {
          var c = a.fx,
            d = c.step,
            e,
            f = a.Tween,
            g = f && f.propHooks
          e = a.cssHooks.opacity
          a.extend(a.easing, {
            easeOutQuad: function(a, b, c, d, e) {
              return -d * (b /= e) * (b - 2) + c
            }
          })
          a.each(['cur', '_default', 'width', 'height', 'opacity'], function(a, b) {
            var e = d,
              k
            b === 'cur' ? (e = c.prototype) : b === '_default' && f && ((e = g[b]), (b = 'set'))
            ;(k = e[b]) &&
              (e[b] = function(c) {
                var d,
                  c = a ? c : this
                if (c.prop !== 'align')
                  return (
                    (d = c.elem),
                    d.attr ? d.attr(c.prop, b === 'cur' ? t : c.now) : k.apply(this, arguments)
                  )
              })
          })
          Ma(e, 'get', function(a, b, c) {
            return b.attr ? b.opacity || 0 : a.call(this, b, c)
          })
          e = function(a) {
            var c = a.elem,
              d
            if (!a.started)
              (d = b.init(c, c.d, c.toD)), (a.start = d[0]), (a.end = d[1]), (a.started = !0)
            c.attr('d', b.step(a.start, a.end, a.pos, c.toD))
          }
          f ? (g.d = { set: e }) : (d.d = e)
          this.each = Array.prototype.forEach
            ? function(a, b) {
                return Array.prototype.forEach.call(a, b)
              }
            : function(a, b) {
                for (var c = 0, d = a.length; c < d; c++)
                  if (b.call(a[c], a[c], c, a) === !1) return c
              }
          a.fn.highcharts = function() {
            var a = 'Chart',
              b = arguments,
              c,
              d
            if (this[0]) {
              Fa(b[0]) && ((a = b[0]), (b = Array.prototype.slice.call(b, 1)))
              c = b[0]
              if (c !== t)
                (c.chart = c.chart || {}),
                  (c.chart.renderTo = this[0]),
                  new R[a](c, b[1]),
                  (d = this)
              c === t && (d = V[H(this[0], 'data-highcharts-chart')])
            }
            return d
          }
        },
        getScript: a.getScript,
        inArray: a.inArray,
        adapterRun: function(b, c) {
          return a(b)[c]()
        },
        grep: a.grep,
        map: function(a, c) {
          for (var d = [], e = 0, f = a.length; e < f; e++) d[e] = c.call(a[e], a[e], e, a)
          return d
        },
        offset: function(b) {
          return a(b).offset()
        },
        addEvent: function(b, c, d) {
          a(b).bind(c, d)
        },
        removeEvent: function(b, c, d) {
          var e = y.removeEventListener ? 'removeEventListener' : 'detachEvent'
          y[e] && b && !b[e] && (b[e] = function() {})
          a(b).unbind(c, d)
        },
        fireEvent: function(b, c, d, e) {
          var f = a.Event(c),
            g = 'detached' + c,
            h
          !Aa && d && (delete d.layerX, delete d.layerY, delete d.returnValue)
          q(f, d)
          b[c] && ((b[g] = b[c]), (b[c] = null))
          a.each(['preventDefault', 'stopPropagation'], function(a, b) {
            var c = f[b]
            f[b] = function() {
              try {
                c.call(f)
              } catch (a) {
                b === 'preventDefault' && (h = !0)
              }
            }
          })
          a(b).trigger(f)
          b[g] && ((b[c] = b[g]), (b[g] = null))
          e && !f.isDefaultPrevented() && !h && e(f)
        },
        washMouseEvent: function(a) {
          var c = a.originalEvent || a
          if (c.pageX === t) (c.pageX = a.pageX), (c.pageY = a.pageY)
          return c
        },
        animate: function(b, c, d) {
          var e = a(b)
          if (!b.style) b.style = {}
          if (c.d) (b.toD = c.d), (c.d = 1)
          e.stop()
          c.opacity !== t && b.attr && (c.opacity += 'px')
          e.animate(c, d)
        },
        stop: function(b) {
          a(b).stop()
        }
      })
  })(I.jQuery)
  var S = I.HighchartsAdapter,
    N = S || {}
  S && S.init.call(S, ub)
  var jb = N.adapterRun,
    Qb = N.getScript,
    Da = N.inArray,
    p = N.each,
    vb = N.grep,
    Rb = N.offset,
    Ua = N.map,
    K = N.addEvent,
    W = N.removeEvent,
    D = N.fireEvent,
    Sb = N.washMouseEvent,
    kb = N.animate,
    bb = N.stop,
    N = {
      enabled: !0,
      x: 0,
      y: 15,
      style: { color: '#606060', cursor: 'default', fontSize: '11px' }
    }
  E = {
    colors: '#7cb5ec,#434348,#90ed7d,#f7a35c,#8085e9,#f15c80,#e4d354,#8085e8,#8d4653,#91e8e1'.split(
      ','
    ),
    symbols: ['circle', 'diamond', 'square', 'triangle', 'triangle-down'],
    lang: {
      loading: 'Loading...',
      months: 'January,February,March,April,May,June,July,August,September,October,November,December'.split(
        ','
      ),
      shortMonths: 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec'.split(','),
      weekdays: 'Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday'.split(','),
      decimalPoint: '.',
      numericSymbols: 'k,M,G,T,P,E'.split(','),
      resetZoom: 'Reset zoom',
      resetZoomTitle: 'Reset zoom level 1:1',
      thousandsSep: ','
    },
    global: {
      useUTC: !0,
      canvasToolsURL: 'http://code.highcharts.com/4.0.1/modules/canvas-tools.js',
      VMLRadialGradientURL: 'http://code.highcharts.com/4.0.1/gfx/vml-radial-gradient.png'
    },
    chart: {
      borderColor: '#4572A7',
      borderRadius: 0,
      defaultSeriesType: 'line',
      ignoreHiddenSeries: !0,
      spacing: [10, 10, 15, 10],
      backgroundColor: '#FFFFFF',
      plotBorderColor: '#C0C0C0',
      resetZoomButton: { theme: { zIndex: 20 }, position: { align: 'right', x: -10, y: 10 } }
    },
    title: {
      text: 'Chart title',
      align: 'center',
      margin: 15,
      style: { color: '#333333', fontSize: '18px' }
    },
    subtitle: { text: '', align: 'center', style: { color: '#555555' } },
    plotOptions: {
      line: {
        allowPointSelect: !1,
        showCheckbox: !1,
        animation: { duration: 1e3 },
        events: {},
        lineWidth: 2,
        marker: {
          lineWidth: 0,
          radius: 4,
          lineColor: '#FFFFFF',
          states: {
            hover: { enabled: !0 },
            select: { fillColor: '#FFFFFF', lineColor: '#000000', lineWidth: 2 }
          }
        },
        point: { events: {} },
        dataLabels: w(N, {
          align: 'center',
          enabled: !1,
          formatter: function() {
            return this.y === null ? '' : Ga(this.y, -1)
          },
          verticalAlign: 'bottom',
          y: 0
        }),
        cropThreshold: 300,
        pointRange: 0,
        states: {
          hover: { marker: {}, halo: { size: 10, opacity: 0.25 } },
          select: { marker: {} }
        },
        stickyTracking: !0,
        turboThreshold: 1e3
      }
    },
    labels: { style: { position: 'absolute', color: '#3E576F' } },
    legend: {
      enabled: !0,
      align: 'center',
      layout: 'horizontal',
      labelFormatter: function() {
        return this.name
      },
      borderColor: '#909090',
      borderRadius: 0,
      navigation: { activeColor: '#274b6d', inactiveColor: '#CCC' },
      shadow: !1,
      itemStyle: { color: '#333333', fontSize: '12px', fontWeight: 'bold' },
      itemHoverStyle: { color: '#000' },
      itemHiddenStyle: { color: '#CCC' },
      itemCheckboxStyle: { position: 'absolute', width: '13px', height: '13px' },
      symbolPadding: 5,
      verticalAlign: 'bottom',
      x: 0,
      y: 0,
      title: { style: { fontWeight: 'bold' } }
    },
    loading: {
      labelStyle: { fontWeight: 'bold', position: 'relative', top: '1em' },
      style: { position: 'absolute', backgroundColor: 'white', opacity: 0.5, textAlign: 'center' }
    },
    tooltip: {
      enabled: !0,
      animation: aa,
      backgroundColor: 'rgba(249, 249, 249, .85)',
      borderWidth: 1,
      borderRadius: 3,
      dateTimeLabelFormats: {
        millisecond: '%A, %b %e, %H:%M:%S.%L',
        second: '%A, %b %e, %H:%M:%S',
        minute: '%A, %b %e, %H:%M',
        hour: '%A, %b %e, %H:%M',
        day: '%A, %b %e, %Y',
        week: 'Week from %A, %b %e, %Y',
        month: '%B %Y',
        year: '%Y'
      },
      headerFormat: '<span style="font-size: 10px">{point.key}</span><br/>',
      pointFormat:
        '<span style="color:{series.color}">●</span> {series.name}: <b>{point.y}</b><br/>',
      shadow: !0,
      snap: Jb ? 25 : 10,
      style: {
        color: '#333333',
        cursor: 'default',
        fontSize: '12px',
        padding: '8px',
        whiteSpace: 'nowrap'
      }
    },
    credits: {
      enabled: !0,
      text: 'Highcharts.com',
      href: 'http://www.highcharts.com',
      position: { align: 'right', x: -10, verticalAlign: 'bottom', y: -5 },
      style: { cursor: 'pointer', color: '#909090', fontSize: '9px' }
    }
  }
  var ba = E.plotOptions,
    S = ba.line
  Cb()
  var Tb = /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,
    Ub = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/,
    Vb = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,
    ya = function(a) {
      var b = [],
        c,
        d
      ;(function(a) {
        a && a.stops
          ? (d = Ua(a.stops, function(a) {
              return ya(a[1])
            }))
          : (c = Tb.exec(a))
          ? (b = [z(c[1]), z(c[2]), z(c[3]), parseFloat(c[4], 10)])
          : (c = Ub.exec(a))
          ? (b = [z(c[1], 16), z(c[2], 16), z(c[3], 16), 1])
          : (c = Vb.exec(a)) && (b = [z(c[1]), z(c[2]), z(c[3]), 1])
      })(a)
      return {
        get: function(c) {
          var f
          d
            ? ((f = w(a)),
              (f.stops = [].concat(f.stops)),
              p(d, function(a, b) {
                f.stops[b] = [f.stops[b][0], a.get(c)]
              }))
            : (f =
                b && !isNaN(b[0])
                  ? c === 'rgb'
                    ? 'rgb(' + b[0] + ',' + b[1] + ',' + b[2] + ')'
                    : c === 'a'
                    ? b[3]
                    : 'rgba(' + b.join(',') + ')'
                  : a)
          return f
        },
        brighten: function(a) {
          if (d)
            p(d, function(b) {
              b.brighten(a)
            })
          else if (ha(a) && a !== 0) {
            var c
            for (c = 0; c < 3; c++)
              (b[c] += z(a * 255)), b[c] < 0 && (b[c] = 0), b[c] > 255 && (b[c] = 255)
          }
          return this
        },
        rgba: b,
        setOpacity: function(a) {
          b[3] = a
          return this
        }
      }
    }
  P.prototype = {
    init: function(a, b) {
      this.element = b === 'span' ? Y(b) : y.createElementNS(xa, b)
      this.renderer = a
    },
    opacity: 1,
    animate: function(a, b, c) {
      b = m(b, va, !0)
      bb(this)
      if (b) {
        b = w(b, {})
        if (c) b.complete = c
        kb(this, a, b)
      } else this.attr(a), c && c()
    },
    colorGradient: function(a, b, c) {
      var d = this.renderer,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        o,
        n,
        s = []
      a.linearGradient ? (f = 'linearGradient') : a.radialGradient && (f = 'radialGradient')
      if (f) {
        g = a[f]
        h = d.gradients
        j = a.stops
        o = c.radialReference
        La(g) &&
          (a[f] = g = { x1: g[0], y1: g[1], x2: g[2], y2: g[3], gradientUnits: 'userSpaceOnUse' })
        f === 'radialGradient' &&
          o &&
          !r(g.gradientUnits) &&
          (g = w(g, {
            cx: o[0] - o[2] / 2 + g.cx * o[2],
            cy: o[1] - o[2] / 2 + g.cy * o[2],
            r: g.r * o[2],
            gradientUnits: 'userSpaceOnUse'
          }))
        for (n in g) n !== 'id' && s.push(n, g[n])
        for (n in j) s.push(j[n])
        s = s.join(',')
        h[s]
          ? (a = h[s].attr('id'))
          : ((g.id = a = 'highcharts-' + tb++),
            (h[s] = i = d
              .createElement(f)
              .attr(g)
              .add(d.defs)),
            (i.stops = []),
            p(j, function(a) {
              a[1].indexOf('rgba') === 0
                ? ((e = ya(a[1])), (k = e.get('rgb')), (l = e.get('a')))
                : ((k = a[1]), (l = 1))
              a = d
                .createElement('stop')
                .attr({ offset: a[0], 'stop-color': k, 'stop-opacity': l })
                .add(i)
              i.stops.push(a)
            }))
        c.setAttribute(b, 'url(' + d.url + '#' + a + ')')
      }
    },
    attr: function(a, b) {
      var c,
        d,
        e = this.element,
        f,
        g = this,
        h
      typeof a === 'string' && b !== t && ((c = a), (a = {}), (a[c] = b))
      if (typeof a === 'string') g = (this[a + 'Getter'] || this._defaultGetter).call(this, a, e)
      else {
        for (c in a) {
          d = a[c]
          h = !1
          this.symbolName &&
            /^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)/.test(c) &&
            (f || (this.symbolAttr(a), (f = !0)), (h = !0))
          if (this.rotation && (c === 'x' || c === 'y')) this.doTransform = !0
          h || (this[c + 'Setter'] || this._defaultSetter).call(this, d, c, e)
          this.shadows &&
            /^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(c) &&
            this.updateShadows(c, d)
        }
        if (this.doTransform) this.updateTransform(), (this.doTransform = !1)
      }
      return g
    },
    updateShadows: function(a, b) {
      for (var c = this.shadows, d = c.length; d--; )
        c[d].setAttribute(
          a,
          a === 'height' ? v(b - (c[d].cutHeight || 0), 0) : a === 'd' ? this.d : b
        )
    },
    addClass: function(a) {
      var b = this.element,
        c = H(b, 'class') || ''
      c.indexOf(a) === -1 && H(b, 'class', c + ' ' + a)
      return this
    },
    symbolAttr: function(a) {
      var b = this
      p('x,y,r,start,end,width,height,innerR,anchorX,anchorY'.split(','), function(c) {
        b[c] = m(a[c], b[c])
      })
      b.attr({ d: b.renderer.symbols[b.symbolName](b.x, b.y, b.width, b.height, b) })
    },
    clip: function(a) {
      return this.attr('clip-path', a ? 'url(' + this.renderer.url + '#' + a.id + ')' : Q)
    },
    crisp: function(a) {
      var b,
        c = {},
        d,
        e = a.strokeWidth || this.strokeWidth || (this.attr && this.attr('stroke-width')) || 0
      d = (u(e) % 2) / 2
      a.x = T(a.x || this.x || 0) + d
      a.y = T(a.y || this.y || 0) + d
      a.width = T((a.width || this.width || 0) - 2 * d)
      a.height = T((a.height || this.height || 0) - 2 * d)
      a.strokeWidth = e
      for (b in a) this[b] !== a[b] && (this[b] = c[b] = a[b])
      return c
    },
    css: function(a) {
      var b = this.styles,
        c = {},
        d = this.element,
        e,
        f,
        g = ''
      e = !b
      if (a && a.color) a.fill = a.color
      if (b) for (f in a) a[f] !== b[f] && ((c[f] = a[f]), (e = !0))
      if (e) {
        e = this.textWidth = a && a.width && d.nodeName.toLowerCase() === 'text' && z(a.width)
        b && (a = q(b, c))
        this.styles = a
        e && (fa || (!aa && this.renderer.forExport)) && delete a.width
        if (Aa && !aa) G(this.element, a)
        else {
          b = function(a, b) {
            return '-' + b.toLowerCase()
          }
          for (f in a) g += f.replace(/([A-Z])/g, b) + ':' + a[f] + ';'
          H(d, 'style', g)
        }
        e && this.added && this.renderer.buildText(this)
      }
      return this
    },
    on: function(a, b) {
      var c = this,
        d = c.element
      $a && a === 'click'
        ? ((d.ontouchstart = function(a) {
            c.touchEventFired = Date.now()
            a.preventDefault()
            b.call(d, a)
          }),
          (d.onclick = function(a) {
            ;(wa.indexOf('Android') === -1 || Date.now() - (c.touchEventFired || 0) > 1100) &&
              b.call(d, a)
          }))
        : (d['on' + a] = b)
      return this
    },
    setRadialReference: function(a) {
      this.element.radialReference = a
      return this
    },
    translate: function(a, b) {
      return this.attr({ translateX: a, translateY: b })
    },
    invert: function() {
      this.inverted = !0
      this.updateTransform()
      return this
    },
    updateTransform: function() {
      var a = this.translateX || 0,
        b = this.translateY || 0,
        c = this.scaleX,
        d = this.scaleY,
        e = this.inverted,
        f = this.rotation,
        g = this.element
      e && ((a += this.attr('width')), (b += this.attr('height')))
      a = ['translate(' + a + ',' + b + ')']
      e
        ? a.push('rotate(90) scale(-1,1)')
        : f &&
          a.push(
            'rotate(' +
              f +
              ' ' +
              (g.getAttribute('x') || 0) +
              ' ' +
              (g.getAttribute('y') || 0) +
              ')'
          )
      ;(r(c) || r(d)) && a.push('scale(' + m(c, 1) + ' ' + m(d, 1) + ')')
      a.length && g.setAttribute('transform', a.join(' '))
    },
    toFront: function() {
      var a = this.element
      a.parentNode.appendChild(a)
      return this
    },
    align: function(a, b, c) {
      var d,
        e,
        f,
        g,
        h = {}
      e = this.renderer
      f = e.alignedObjects
      if (a) {
        if (((this.alignOptions = a), (this.alignByTranslate = b), !c || Fa(c)))
          (this.alignTo = d = c || 'renderer'), ja(f, this), f.push(this), (c = null)
      } else (a = this.alignOptions), (b = this.alignByTranslate), (d = this.alignTo)
      c = m(c, e[d], e)
      d = a.align
      e = a.verticalAlign
      f = (c.x || 0) + (a.x || 0)
      g = (c.y || 0) + (a.y || 0)
      if (d === 'right' || d === 'center')
        f += (c.width - (a.width || 0)) / { right: 1, center: 2 }[d]
      h[b ? 'translateX' : 'x'] = u(f)
      if (e === 'bottom' || e === 'middle')
        g += (c.height - (a.height || 0)) / ({ bottom: 1, middle: 2 }[e] || 1)
      h[b ? 'translateY' : 'y'] = u(g)
      this[this.placed ? 'animate' : 'attr'](h)
      this.placed = !0
      this.alignAttr = h
      return this
    },
    getBBox: function() {
      var a = this.bBox,
        b = this.renderer,
        c,
        d,
        e = this.rotation
      c = this.element
      var f = this.styles,
        g = e * Ca
      d = this.textStr
      var h
      if (d === '' || Ob.test(d))
        h = 'num.' + d.toString().length + (f ? '|' + f.fontSize + '|' + f.fontFamily : '')
      h && (a = b.cache[h])
      if (!a) {
        if (c.namespaceURI === xa || b.forExport) {
          try {
            a = c.getBBox ? q({}, c.getBBox()) : { width: c.offsetWidth, height: c.offsetHeight }
          } catch (i) {}
          if (!a || a.width < 0) a = { width: 0, height: 0 }
        } else a = this.htmlGetBBox()
        if (b.isSVG) {
          c = a.width
          d = a.height
          if (Aa && f && f.fontSize === '11px' && d.toPrecision(3) === '16.9') a.height = d = 14
          if (e) (a.width = M(d * ea(g)) + M(c * Z(g))), (a.height = M(d * Z(g)) + M(c * ea(g)))
        }
        this.bBox = a
        h && (b.cache[h] = a)
      }
      return a
    },
    show: function(a) {
      return a && this.element.namespaceURI === xa
        ? (this.element.removeAttribute('visibility'), this)
        : this.attr({ visibility: a ? 'inherit' : 'visible' })
    },
    hide: function() {
      return this.attr({ visibility: 'hidden' })
    },
    fadeOut: function(a) {
      var b = this
      b.animate(
        { opacity: 0 },
        {
          duration: a || 150,
          complete: function() {
            b.hide()
          }
        }
      )
    },
    add: function(a) {
      var b = this.renderer,
        c = a || b,
        d = c.element || b.box,
        e = this.element,
        f = this.zIndex,
        g,
        h
      if (a) this.parentGroup = a
      this.parentInverted = a && a.inverted
      this.textStr !== void 0 && b.buildText(this)
      if (f) (c.handleZ = !0), (f = z(f))
      if (c.handleZ) {
        a = d.childNodes
        for (g = 0; g < a.length; g++)
          if (((b = a[g]), (c = H(b, 'zIndex')), b !== e && (z(c) > f || (!r(f) && r(c))))) {
            d.insertBefore(e, b)
            h = !0
            break
          }
      }
      h || d.appendChild(e)
      this.added = !0
      if (this.onAdd) this.onAdd()
      return this
    },
    safeRemoveChild: function(a) {
      var b = a.parentNode
      b && b.removeChild(a)
    },
    destroy: function() {
      var a = this,
        b = a.element || {},
        c = a.shadows,
        d = a.renderer.isSVG && b.nodeName === 'SPAN' && a.parentGroup,
        e,
        f
      b.onclick = b.onmouseout = b.onmouseover = b.onmousemove = b.point = null
      bb(a)
      if (a.clipPath) a.clipPath = a.clipPath.destroy()
      if (a.stops) {
        for (f = 0; f < a.stops.length; f++) a.stops[f] = a.stops[f].destroy()
        a.stops = null
      }
      a.safeRemoveChild(b)
      for (
        c &&
        p(c, function(b) {
          a.safeRemoveChild(b)
        });
        d && d.div.childNodes.length === 0;

      )
        (b = d.parentGroup), a.safeRemoveChild(d.div), delete d.div, (d = b)
      a.alignTo && ja(a.renderer.alignedObjects, a)
      for (e in a) delete a[e]
      return null
    },
    shadow: function(a, b, c) {
      var d = [],
        e,
        f,
        g = this.element,
        h,
        i,
        j,
        k
      if (a) {
        i = m(a.width, 3)
        j = (a.opacity || 0.15) / i
        k = this.parentInverted ? '(-1,-1)' : '(' + m(a.offsetX, 1) + ', ' + m(a.offsetY, 1) + ')'
        for (e = 1; e <= i; e++) {
          f = g.cloneNode(0)
          h = i * 2 + 1 - 2 * e
          H(f, {
            isShadow: 'true',
            stroke: a.color || 'black',
            'stroke-opacity': j * e,
            'stroke-width': h,
            transform: 'translate' + k,
            fill: Q
          })
          if (c) H(f, 'height', v(H(f, 'height') - h, 0)), (f.cutHeight = h)
          b ? b.element.appendChild(f) : g.parentNode.insertBefore(f, g)
          d.push(f)
        }
        this.shadows = d
      }
      return this
    },
    xGetter: function(a) {
      this.element.nodeName === 'circle' && (a = { x: 'cx', y: 'cy' }[a] || a)
      return this._defaultGetter(a)
    },
    _defaultGetter: function(a) {
      a = m(this[a], this.element ? this.element.getAttribute(a) : null, 0)
      ;/^[0-9\.]+$/.test(a) && (a = parseFloat(a))
      return a
    },
    dSetter: function(a, b, c) {
      a && a.join && (a = a.join(' '))
      ;/(NaN| {2}|^$)/.test(a) && (a = 'M 0 0')
      c.setAttribute(b, a)
      this[b] = a
    },
    dashstyleSetter: function(a) {
      var b
      if ((a = a && a.toLowerCase())) {
        a = a
          .replace('shortdashdotdot', '3,1,1,1,1,1,')
          .replace('shortdashdot', '3,1,1,1')
          .replace('shortdot', '1,1,')
          .replace('shortdash', '3,1,')
          .replace('longdash', '8,3,')
          .replace(/dot/g, '1,3,')
          .replace('dash', '4,3,')
          .replace(/,$/, '')
          .split(',')
        for (b = a.length; b--; ) a[b] = z(a[b]) * this.element.getAttribute('stroke-width')
        a = a.join(',')
        this.element.setAttribute('stroke-dasharray', a)
      }
    },
    alignSetter: function(a) {
      this.element.setAttribute('text-anchor', { left: 'start', center: 'middle', right: 'end' }[a])
    },
    opacitySetter: function(a, b, c) {
      this[b] = a
      c.setAttribute(b, a)
    },
    'stroke-widthSetter': function(a, b, c) {
      a === 0 && (a = 1.0e-5)
      this.strokeWidth = a
      c.setAttribute(b, a)
    },
    titleSetter: function(a) {
      var b = this.element.getElementsByTagName('title')[0]
      b || ((b = y.createElementNS(xa, 'title')), this.element.appendChild(b))
      b.textContent = a
    },
    textSetter: function(a) {
      if (a !== this.textStr)
        delete this.bBox, (this.textStr = a), this.added && this.renderer.buildText(this)
    },
    fillSetter: function(a, b, c) {
      typeof a === 'string' ? c.setAttribute(b, a) : a && this.colorGradient(a, b, c)
    },
    zIndexSetter: function(a, b, c) {
      c.setAttribute(b, a)
      this[b] = a
    },
    _defaultSetter: function(a, b, c) {
      c.setAttribute(b, a)
    }
  }
  P.prototype.yGetter = P.prototype.xGetter
  P.prototype.translateXSetter = P.prototype.translateYSetter = P.prototype.rotationSetter = P.prototype.verticalAlignSetter = P.prototype.scaleXSetter = P.prototype.scaleYSetter = function(
    a,
    b
  ) {
    this[b] = a
    this.doTransform = !0
  }
  P.prototype.strokeSetter = P.prototype.fillSetter
  var ta = function() {
    this.init.apply(this, arguments)
  }
  ta.prototype = {
    Element: P,
    init: function(a, b, c, d, e) {
      var f = location,
        g,
        d = this.createElement('svg')
          .attr({ version: '1.1' })
          .css(this.getStyle(d))
      g = d.element
      a.appendChild(g)
      a.innerHTML.indexOf('xmlns') === -1 && H(g, 'xmlns', xa)
      this.isSVG = !0
      this.box = g
      this.boxWrapper = d
      this.alignedObjects = []
      this.url =
        (Ta || ib) && y.getElementsByTagName('base').length
          ? f.href
              .replace(/#.*?$/, '')
              .replace(/([\('\)])/g, '\\$1')
              .replace(/ /g, '%20')
          : ''
      this.createElement('desc')
        .add()
        .element.appendChild(y.createTextNode('Created with Highcharts 4.0.1'))
      this.defs = this.createElement('defs').add()
      this.forExport = e
      this.gradients = {}
      this.cache = {}
      this.setSize(b, c, !1)
      var h
      if (Ta && a.getBoundingClientRect)
        (this.subPixelFix = b = function() {
          G(a, { left: 0, top: 0 })
          h = a.getBoundingClientRect()
          G(a, { left: Ka(h.left) - h.left + 'px', top: Ka(h.top) - h.top + 'px' })
        }),
          b(),
          K(I, 'resize', b)
    },
    getStyle: function(a) {
      return (this.style = q(
        {
          fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',
          fontSize: '12px'
        },
        a
      ))
    },
    isHidden: function() {
      return !this.boxWrapper.getBBox().width
    },
    destroy: function() {
      var a = this.defs
      this.box = null
      this.boxWrapper = this.boxWrapper.destroy()
      Oa(this.gradients || {})
      this.gradients = null
      if (a) this.defs = a.destroy()
      this.subPixelFix && W(I, 'resize', this.subPixelFix)
      return (this.alignedObjects = null)
    },
    createElement: function(a) {
      var b = new this.Element()
      b.init(this, a)
      return b
    },
    draw: function() {},
    buildText: function(a) {
      for (
        var b = a.element,
          c = this,
          d = c.forExport,
          e = m(a.textStr, '').toString(),
          f = e.indexOf('<') !== -1,
          g = b.childNodes,
          h,
          i,
          j = H(b, 'x'),
          k = a.styles,
          l = a.textWidth,
          o = k && k.lineHeight,
          n = g.length,
          s = function(a) {
            return o
              ? z(o)
              : c.fontMetrics(
                  /(px|em)$/.test(a && a.style.fontSize)
                    ? a.style.fontSize
                    : (k && k.fontSize) || c.style.fontSize || 12
                ).h
          };
        n--;

      )
        b.removeChild(g[n])
      !f && e.indexOf(' ') === -1
        ? b.appendChild(y.createTextNode(e))
        : ((h = /<.*style="([^"]+)".*>/),
          (i = /<.*href="(http[^"]+)".*>/),
          l && !a.added && this.box.appendChild(b),
          (e = f
            ? e
                .replace(/<(b|strong)>/g, '<span style="font-weight:bold">')
                .replace(/<(i|em)>/g, '<span style="font-style:italic">')
                .replace(/<a/g, '<span')
                .replace(/<\/(b|strong|i|em|a)>/g, '</span>')
                .split(/<br.*?>/g)
            : [e]),
          e[e.length - 1] === '' && e.pop(),
          p(e, function(e, f) {
            var g,
              n = 0,
              e = e.replace(/<span/g, '|||<span').replace(/<\/span>/g, '</span>|||')
            g = e.split('|||')
            p(g, function(e) {
              if (e !== '' || g.length === 1) {
                var o = {},
                  m = y.createElementNS(xa, 'tspan'),
                  p
                h.test(e) &&
                  ((p = e.match(h)[1].replace(/(;| |^)color([ :])/, '$1fill$2')), H(m, 'style', p))
                i.test(e) &&
                  !d &&
                  (H(m, 'onclick', 'location.href="' + e.match(i)[1] + '"'),
                  G(m, { cursor: 'pointer' }))
                e = (e.replace(/<(.|\n)*?>/g, '') || ' ')
                  .replace(/&lt;/g, '<')
                  .replace(/&gt;/g, '>')
                if (e !== ' ') {
                  m.appendChild(y.createTextNode(e))
                  if (n) o.dx = 0
                  else if (f && j !== null) o.x = j
                  H(m, o)
                  !n &&
                    f &&
                    (!aa && d && G(m, { display: 'block' }), H(m, 'dy', s(m), ib && m.offsetHeight))
                  b.appendChild(m)
                  n++
                  if (l)
                    for (
                      var e = e.replace(/([^\^])-/g, '$1- ').split(' '),
                        o = e.length > 1 && k.whiteSpace !== 'nowrap',
                        $,
                        r,
                        B = a._clipHeight,
                        q = [],
                        v = s(),
                        t = 1;
                      o && (e.length || q.length);

                    )
                      delete a.bBox,
                        ($ = a.getBBox()),
                        (r = $.width),
                        !aa && c.forExport && (r = c.measureSpanWidth(m.firstChild.data, a.styles)),
                        ($ = r > l),
                        !$ || e.length === 1
                          ? ((e = q),
                            (q = []),
                            e.length &&
                              (t++,
                              B && t * v > B
                                ? ((e = ['...']), a.attr('title', a.textStr))
                                : ((m = y.createElementNS(xa, 'tspan')),
                                  H(m, { dy: v, x: j }),
                                  p && H(m, 'style', p),
                                  b.appendChild(m),
                                  r > l && (l = r))))
                          : (m.removeChild(m.firstChild), q.unshift(e.pop())),
                        e.length && m.appendChild(y.createTextNode(e.join(' ').replace(/- /g, '-')))
                }
              }
            })
          }))
    },
    button: function(a, b, c, d, e, f, g, h, i) {
      var j = this.label(a, b, c, i, null, null, null, null, 'button'),
        k = 0,
        l,
        o,
        n,
        s,
        m,
        p,
        a = { x1: 0, y1: 0, x2: 0, y2: 1 },
        e = w(
          {
            'stroke-width': 1,
            stroke: '#CCCCCC',
            fill: { linearGradient: a, stops: [[0, '#FEFEFE'], [1, '#F6F6F6']] },
            r: 2,
            padding: 5,
            style: { color: 'black' }
          },
          e
        )
      n = e.style
      delete e.style
      f = w(
        e,
        { stroke: '#68A', fill: { linearGradient: a, stops: [[0, '#FFF'], [1, '#ACF']] } },
        f
      )
      s = f.style
      delete f.style
      g = w(
        e,
        { stroke: '#68A', fill: { linearGradient: a, stops: [[0, '#9BD'], [1, '#CDF']] } },
        g
      )
      m = g.style
      delete g.style
      h = w(e, { style: { color: '#CCC' } }, h)
      p = h.style
      delete h.style
      K(j.element, Aa ? 'mouseover' : 'mouseenter', function() {
        k !== 3 && j.attr(f).css(s)
      })
      K(j.element, Aa ? 'mouseout' : 'mouseleave', function() {
        k !== 3 && ((l = [e, f, g][k]), (o = [n, s, m][k]), j.attr(l).css(o))
      })
      j.setState = function(a) {
        ;(j.state = k = a)
          ? a === 2
            ? j.attr(g).css(m)
            : a === 3 && j.attr(h).css(p)
          : j.attr(e).css(n)
      }
      return j
        .on('click', function() {
          k !== 3 && d.call(j)
        })
        .attr(e)
        .css(q({ cursor: 'default' }, n))
    },
    crispLine: function(a, b) {
      a[1] === a[4] && (a[1] = a[4] = u(a[1]) - (b % 2) / 2)
      a[2] === a[5] && (a[2] = a[5] = u(a[2]) + (b % 2) / 2)
      return a
    },
    path: function(a) {
      var b = { fill: Q }
      La(a) ? (b.d = a) : ca(a) && q(b, a)
      return this.createElement('path').attr(b)
    },
    circle: function(a, b, c) {
      a = ca(a) ? a : { x: a, y: b, r: c }
      b = this.createElement('circle')
      b.xSetter = function(a) {
        this.element.setAttribute('cx', a)
      }
      b.ySetter = function(a) {
        this.element.setAttribute('cy', a)
      }
      return b.attr(a)
    },
    arc: function(a, b, c, d, e, f) {
      if (ca(a)) (b = a.y), (c = a.r), (d = a.innerR), (e = a.start), (f = a.end), (a = a.x)
      a = this.symbol('arc', a || 0, b || 0, c || 0, c || 0, {
        innerR: d || 0,
        start: e || 0,
        end: f || 0
      })
      a.r = c
      return a
    },
    rect: function(a, b, c, d, e, f) {
      var e = ca(a) ? a.r : e,
        g = this.createElement('rect'),
        a = ca(a) ? a : a === t ? {} : { x: a, y: b, width: v(c, 0), height: v(d, 0) }
      if (f !== t) (a.strokeWidth = f), (a = g.crisp(a))
      if (e) a.r = e
      g.rSetter = function(a) {
        H(this.element, { rx: a, ry: a })
      }
      return g.attr(a)
    },
    setSize: function(a, b, c) {
      var d = this.alignedObjects,
        e = d.length
      this.width = a
      this.height = b
      for (this.boxWrapper[m(c, !0) ? 'animate' : 'attr']({ width: a, height: b }); e--; )
        d[e].align()
    },
    g: function(a) {
      var b = this.createElement('g')
      return r(a) ? b.attr({ class: 'highcharts-' + a }) : b
    },
    image: function(a, b, c, d, e) {
      var f = { preserveAspectRatio: Q }
      arguments.length > 1 && q(f, { x: b, y: c, width: d, height: e })
      f = this.createElement('image').attr(f)
      f.element.setAttributeNS
        ? f.element.setAttributeNS('http://www.w3.org/1999/xlink', 'href', a)
        : f.element.setAttribute('hc-svg-href', a)
      return f
    },
    symbol: function(a, b, c, d, e, f) {
      var g,
        h = this.symbols[a],
        h = h && h(u(b), u(c), d, e, f),
        i = /^url\((.*?)\)$/,
        j,
        k
      if (h)
        (g = this.path(h)), q(g, { symbolName: a, x: b, y: c, width: d, height: e }), f && q(g, f)
      else if (i.test(a))
        (k = function(a, b) {
          a.element &&
            (a.attr({ width: b[0], height: b[1] }),
            a.alignByTranslate || a.translate(u((d - b[0]) / 2), u((e - b[1]) / 2)))
        }),
          (j = a.match(i)[1]),
          (a = Kb[j]),
          (g = this.image(j).attr({ x: b, y: c })),
          (g.isImg = !0),
          a
            ? k(g, a)
            : (g.attr({ width: 0, height: 0 }),
              Y('img', {
                onload: function() {
                  k(g, (Kb[j] = [this.width, this.height]))
                },
                src: j
              }))
      return g
    },
    symbols: {
      circle: function(a, b, c, d) {
        var e = 0.166 * c
        return [
          'M',
          a + c / 2,
          b,
          'C',
          a + c + e,
          b,
          a + c + e,
          b + d,
          a + c / 2,
          b + d,
          'C',
          a - e,
          b + d,
          a - e,
          b,
          a + c / 2,
          b,
          'Z'
        ]
      },
      square: function(a, b, c, d) {
        return ['M', a, b, 'L', a + c, b, a + c, b + d, a, b + d, 'Z']
      },
      triangle: function(a, b, c, d) {
        return ['M', a + c / 2, b, 'L', a + c, b + d, a, b + d, 'Z']
      },
      'triangle-down': function(a, b, c, d) {
        return ['M', a, b, 'L', a + c, b, a + c / 2, b + d, 'Z']
      },
      diamond: function(a, b, c, d) {
        return ['M', a + c / 2, b, 'L', a + c, b + d / 2, a + c / 2, b + d, a, b + d / 2, 'Z']
      },
      arc: function(a, b, c, d, e) {
        var f = e.start,
          c = e.r || c || d,
          g = e.end - 0.001,
          d = e.innerR,
          h = e.open,
          i = Z(f),
          j = ea(f),
          k = Z(g),
          g = ea(g),
          e = e.end - f < ma ? 0 : 1
        return [
          'M',
          a + c * i,
          b + c * j,
          'A',
          c,
          c,
          0,
          e,
          1,
          a + c * k,
          b + c * g,
          h ? 'M' : 'L',
          a + d * k,
          b + d * g,
          'A',
          d,
          d,
          0,
          e,
          0,
          a + d * i,
          b + d * j,
          h ? '' : 'Z'
        ]
      },
      callout: function(a, b, c, d, e) {
        var f = C((e && e.r) || 0, c, d),
          g = f + 6,
          h = e && e.anchorX,
          i = e && e.anchorY,
          e = (u(e.strokeWidth || 0) % 2) / 2
        a += e
        b += e
        e = [
          'M',
          a + f,
          b,
          'L',
          a + c - f,
          b,
          'C',
          a + c,
          b,
          a + c,
          b,
          a + c,
          b + f,
          'L',
          a + c,
          b + d - f,
          'C',
          a + c,
          b + d,
          a + c,
          b + d,
          a + c - f,
          b + d,
          'L',
          a + f,
          b + d,
          'C',
          a,
          b + d,
          a,
          b + d,
          a,
          b + d - f,
          'L',
          a,
          b + f,
          'C',
          a,
          b,
          a,
          b,
          a + f,
          b
        ]
        h && h > c && i > b + g && i < b + d - g
          ? e.splice(13, 3, 'L', a + c, i - 6, a + c + 6, i, a + c, i + 6, a + c, b + d - f)
          : h && h < 0 && i > b + g && i < b + d - g
          ? e.splice(33, 3, 'L', a, i + 6, a - 6, i, a, i - 6, a, b + f)
          : i && i > d && h > a + g && h < a + c - g
          ? e.splice(23, 3, 'L', h + 6, b + d, h, b + d + 6, h - 6, b + d, a + f, b + d)
          : i &&
            i < 0 &&
            h > a + g &&
            h < a + c - g &&
            e.splice(3, 3, 'L', h - 6, b, h, b - 6, h + 6, b, c - f, b)
        return e
      }
    },
    clipRect: function(a, b, c, d) {
      var e = 'highcharts-' + tb++,
        f = this.createElement('clipPath')
          .attr({ id: e })
          .add(this.defs),
        a = this.rect(a, b, c, d, 0).add(f)
      a.id = e
      a.clipPath = f
      return a
    },
    text: function(a, b, c, d) {
      var e = fa || (!aa && this.forExport),
        f = {}
      if (d && !this.forExport) return this.html(a, b, c)
      f.x = Math.round(b || 0)
      if (c) f.y = Math.round(c)
      if (a || a === 0) f.text = a
      a = this.createElement('text').attr(f)
      e && a.css({ position: 'absolute' })
      if (!d)
        a.xSetter = function(a, b, c) {
          var d = c.childNodes,
            e,
            f
          for (f = 1; f < d.length; f++)
            (e = d[f]), e.getAttribute('x') === c.getAttribute('x') && e.setAttribute('x', a)
          c.setAttribute(b, a)
        }
      return a
    },
    fontMetrics: function(a) {
      var a = a || this.style.fontSize,
        a = /px/.test(a) ? z(a) : /em/.test(a) ? parseFloat(a) * 12 : 12,
        a = a < 24 ? a + 4 : u(a * 1.2),
        b = u(a * 0.8)
      return { h: a, b: b }
    },
    label: function(a, b, c, d, e, f, g, h, i) {
      function j() {
        var a, b
        a = s.element.style
        J = (Va === void 0 || wb === void 0 || n.styles.textAlign) && s.textStr && s.getBBox()
        n.width = (Va || J.width || 0) + 2 * x + v
        n.height = (wb || J.height || 0) + 2 * x
        na = x + o.fontMetrics(a && a.fontSize).b
        if (z) {
          if (!m)
            (a = u(-L * x)),
              (b = h ? -na : 0),
              (n.box = m = d
                ? o.symbol(d, a, b, n.width, n.height, B)
                : o.rect(a, b, n.width, n.height, 0, B[Pb])),
              m.attr('fill', Q).add(n)
          m.isImg || m.attr(q({ width: u(n.width), height: u(n.height) }, B))
          B = null
        }
      }
      function k() {
        var a = n.styles,
          a = a && a.textAlign,
          b = v + x * (1 - L),
          c
        c = h ? 0 : na
        if (r(Va) && J && (a === 'center' || a === 'right'))
          b += { center: 0.5, right: 1 }[a] * (Va - J.width)
        if (b !== s.x || c !== s.y) s.attr('x', b), c !== t && s.attr('y', c)
        s.x = b
        s.y = c
      }
      function l(a, b) {
        m ? m.attr(a, b) : (B[a] = b)
      }
      var o = this,
        n = o.g(i),
        s = o.text('', 0, 0, g).attr({ zIndex: 1 }),
        m,
        J,
        L = 0,
        x = 3,
        v = 0,
        Va,
        wb,
        xb,
        yb,
        y = 0,
        B = {},
        na,
        z
      n.onAdd = function() {
        s.add(n)
        n.attr({ text: a || '', x: b, y: c })
        m && r(e) && n.attr({ anchorX: e, anchorY: f })
      }
      n.widthSetter = function(a) {
        Va = a
      }
      n.heightSetter = function(a) {
        wb = a
      }
      n.paddingSetter = function(a) {
        r(a) && a !== x && ((x = a), k())
      }
      n.paddingLeftSetter = function(a) {
        r(a) && a !== v && ((v = a), k())
      }
      n.alignSetter = function(a) {
        L = { left: 0, center: 0.5, right: 1 }[a]
      }
      n.textSetter = function(a) {
        a !== t && s.textSetter(a)
        j()
        k()
      }
      n['stroke-widthSetter'] = function(a, b) {
        a && (z = !0)
        y = (a % 2) / 2
        l(b, a)
      }
      n.strokeSetter = n.fillSetter = n.rSetter = function(a, b) {
        b === 'fill' && a && (z = !0)
        l(b, a)
      }
      n.anchorXSetter = function(a, b) {
        e = a
        l(b, a + y - xb)
      }
      n.anchorYSetter = function(a, b) {
        f = a
        l(b, a - yb)
      }
      n.xSetter = function(a) {
        n.x = a
        L && (a -= L * ((Va || J.width) + x))
        xb = u(a)
        n.attr('translateX', xb)
      }
      n.ySetter = function(a) {
        yb = n.y = u(a)
        n.attr('translateY', yb)
      }
      var A = n.css
      return q(n, {
        css: function(a) {
          if (a) {
            var b = {},
              a = w(a)
            p(
              'fontSize,fontWeight,fontFamily,color,lineHeight,width,textDecoration,textShadow'.split(
                ','
              ),
              function(c) {
                a[c] !== t && ((b[c] = a[c]), delete a[c])
              }
            )
            s.css(b)
          }
          return A.call(n, a)
        },
        getBBox: function() {
          return { width: J.width + 2 * x, height: J.height + 2 * x, x: J.x - x, y: J.y - x }
        },
        shadow: function(a) {
          m && m.shadow(a)
          return n
        },
        destroy: function() {
          W(n.element, 'mouseenter')
          W(n.element, 'mouseleave')
          s && (s = s.destroy())
          m && (m = m.destroy())
          P.prototype.destroy.call(n)
          n = o = j = k = l = null
        }
      })
    }
  }
  Za = ta
  q(P.prototype, {
    htmlCss: function(a) {
      var b = this.element
      if ((b = a && b.tagName === 'SPAN' && a.width))
        delete a.width, (this.textWidth = b), this.updateTransform()
      this.styles = q(this.styles, a)
      G(this.element, a)
      return this
    },
    htmlGetBBox: function() {
      var a = this.element,
        b = this.bBox
      if (!b) {
        if (a.nodeName === 'text') a.style.position = 'absolute'
        b = this.bBox = {
          x: a.offsetLeft,
          y: a.offsetTop,
          width: a.offsetWidth,
          height: a.offsetHeight
        }
      }
      return b
    },
    htmlUpdateTransform: function() {
      if (this.added) {
        var a = this.renderer,
          b = this.element,
          c = this.translateX || 0,
          d = this.translateY || 0,
          e = this.x || 0,
          f = this.y || 0,
          g = this.textAlign || 'left',
          h = { left: 0, center: 0.5, right: 1 }[g],
          i = this.shadows
        G(b, { marginLeft: c, marginTop: d })
        i &&
          p(i, function(a) {
            G(a, { marginLeft: c + 1, marginTop: d + 1 })
          })
        this.inverted &&
          p(b.childNodes, function(c) {
            a.invertChild(c, b)
          })
        if (b.tagName === 'SPAN') {
          var j = this.rotation,
            k,
            l = z(this.textWidth),
            o = [j, g, b.innerHTML, this.textWidth].join(',')
          if (o !== this.cTT) {
            k = a.fontMetrics(b.style.fontSize).b
            r(j) && this.setSpanRotation(j, h, k)
            i = m(this.elemWidth, b.offsetWidth)
            if (i > l && /[ \-]/.test(b.textContent || b.innerText))
              G(b, { width: l + 'px', display: 'block', whiteSpace: 'normal' }), (i = l)
            this.getSpanCorrection(i, k, h, j, g)
          }
          G(b, { left: e + (this.xCorr || 0) + 'px', top: f + (this.yCorr || 0) + 'px' })
          if (ib) k = b.offsetHeight
          this.cTT = o
        }
      } else this.alignOnAdd = !0
    },
    setSpanRotation: function(a, b, c) {
      var d = {},
        e = Aa
          ? '-ms-transform'
          : ib
          ? '-webkit-transform'
          : Ta
          ? 'MozTransform'
          : Ib
          ? '-o-transform'
          : ''
      d[e] = d.transform = 'rotate(' + a + 'deg)'
      d[e + (Ta ? 'Origin' : '-origin')] = d.transformOrigin = b * 100 + '% ' + c + 'px'
      G(this.element, d)
    },
    getSpanCorrection: function(a, b, c) {
      this.xCorr = -a * c
      this.yCorr = -b
    }
  })
  q(ta.prototype, {
    html: function(a, b, c) {
      var d = this.createElement('span'),
        e = d.element,
        f = d.renderer
      d.textSetter = function(a) {
        a !== e.innerHTML && delete this.bBox
        e.innerHTML = this.textStr = a
      }
      d.xSetter = d.ySetter = d.alignSetter = d.rotationSetter = function(a, b) {
        b === 'align' && (b = 'textAlign')
        d[b] = a
        d.htmlUpdateTransform()
      }
      d.attr({ text: a, x: u(b), y: u(c) }).css({
        position: 'absolute',
        whiteSpace: 'nowrap',
        fontFamily: this.style.fontFamily,
        fontSize: this.style.fontSize
      })
      d.css = d.htmlCss
      if (f.isSVG)
        d.add = function(a) {
          var b,
            c = f.box.parentNode,
            j = []
          if ((this.parentGroup = a)) {
            if (((b = a.div), !b)) {
              for (; a; ) j.push(a), (a = a.parentGroup)
              p(j.reverse(), function(a) {
                var d
                b = a.div =
                  a.div ||
                  Y(
                    Ja,
                    { className: H(a.element, 'class') },
                    {
                      position: 'absolute',
                      left: (a.translateX || 0) + 'px',
                      top: (a.translateY || 0) + 'px'
                    },
                    b || c
                  )
                d = b.style
                q(a, {
                  translateXSetter: function(b, c) {
                    d.left = b + 'px'
                    a[c] = b
                    a.doTransform = !0
                  },
                  translateYSetter: function(b, c) {
                    d.top = b + 'px'
                    a[c] = b
                    a.doTransform = !0
                  },
                  visibilitySetter: function(a, b) {
                    d[b] = a
                  }
                })
              })
            }
          } else b = c
          b.appendChild(e)
          d.added = !0
          d.alignOnAdd && d.htmlUpdateTransform()
          return d
        }
      return d
    }
  })
  var X
  if (!aa && !fa) {
    R.VMLElement = X = {
      init: function(a, b) {
        var c = ['<', b, ' filled="f" stroked="f"'],
          d = ['position: ', 'absolute', ';'],
          e = b === Ja
        ;(b === 'shape' || e) && d.push('left:0;top:0;width:1px;height:1px;')
        d.push('visibility: ', e ? 'hidden' : 'visible')
        c.push(' style="', d.join(''), '"/>')
        if (b)
          (c = e || b === 'span' || b === 'img' ? c.join('') : a.prepVML(c)), (this.element = Y(c))
        this.renderer = a
      },
      add: function(a) {
        var b = this.renderer,
          c = this.element,
          d = b.box,
          d = a ? a.element || a : d
        a && a.inverted && b.invertChild(c, d)
        d.appendChild(c)
        this.added = !0
        this.alignOnAdd && !this.deferUpdateTransform && this.updateTransform()
        if (this.onAdd) this.onAdd()
        return this
      },
      updateTransform: P.prototype.htmlUpdateTransform,
      setSpanRotation: function() {
        var a = this.rotation,
          b = Z(a * Ca),
          c = ea(a * Ca)
        G(this.element, {
          filter: a
            ? [
                'progid:DXImageTransform.Microsoft.Matrix(M11=',
                b,
                ', M12=',
                -c,
                ', M21=',
                c,
                ', M22=',
                b,
                ", sizingMethod='auto expand')"
              ].join('')
            : Q
        })
      },
      getSpanCorrection: function(a, b, c, d, e) {
        var f = d ? Z(d * Ca) : 1,
          g = d ? ea(d * Ca) : 0,
          h = m(this.elemHeight, this.element.offsetHeight),
          i
        this.xCorr = f < 0 && -a
        this.yCorr = g < 0 && -h
        i = f * g < 0
        this.xCorr += g * b * (i ? 1 - c : c)
        this.yCorr -= f * b * (d ? (i ? c : 1 - c) : 1)
        e &&
          e !== 'left' &&
          ((this.xCorr -= a * c * (f < 0 ? -1 : 1)),
          d && (this.yCorr -= h * c * (g < 0 ? -1 : 1)),
          G(this.element, { textAlign: e }))
      },
      pathToVML: function(a) {
        for (var b = a.length, c = []; b--; )
          if (ha(a[b])) c[b] = u(a[b] * 10) - 5
          else if (a[b] === 'Z') c[b] = 'x'
          else if (((c[b] = a[b]), a.isArc && (a[b] === 'wa' || a[b] === 'at')))
            c[b + 5] === c[b + 7] && (c[b + 7] += a[b + 7] > a[b + 5] ? 1 : -1),
              c[b + 6] === c[b + 8] && (c[b + 8] += a[b + 8] > a[b + 6] ? 1 : -1)
        return c.join(' ') || 'x'
      },
      clip: function(a) {
        var b = this,
          c
        a
          ? ((c = a.members),
            ja(c, b),
            c.push(b),
            (b.destroyClip = function() {
              ja(c, b)
            }),
            (a = a.getCSS(b)))
          : (b.destroyClip && b.destroyClip(), (a = { clip: hb ? 'inherit' : 'rect(auto)' }))
        return b.css(a)
      },
      css: P.prototype.htmlCss,
      safeRemoveChild: function(a) {
        a.parentNode && Pa(a)
      },
      destroy: function() {
        this.destroyClip && this.destroyClip()
        return P.prototype.destroy.apply(this)
      },
      on: function(a, b) {
        this.element['on' + a] = function() {
          var a = I.event
          a.target = a.srcElement
          b(a)
        }
        return this
      },
      cutOffPath: function(a, b) {
        var c,
          a = a.split(/[ ,]/)
        c = a.length
        if (c === 9 || c === 11) a[c - 4] = a[c - 2] = z(a[c - 2]) - 10 * b
        return a.join(' ')
      },
      shadow: function(a, b, c) {
        var d = [],
          e,
          f = this.element,
          g = this.renderer,
          h,
          i = f.style,
          j,
          k = f.path,
          l,
          o,
          n,
          s
        k && typeof k.value !== 'string' && (k = 'x')
        o = k
        if (a) {
          n = m(a.width, 3)
          s = (a.opacity || 0.15) / n
          for (e = 1; e <= 3; e++) {
            l = n * 2 + 1 - 2 * e
            c && (o = this.cutOffPath(k.value, l + 0.5))
            j = [
              '<shape isShadow="true" strokeweight="',
              l,
              '" filled="false" path="',
              o,
              '" coordsize="10 10" style="',
              f.style.cssText,
              '" />'
            ]
            h = Y(g.prepVML(j), null, {
              left: z(i.left) + m(a.offsetX, 1),
              top: z(i.top) + m(a.offsetY, 1)
            })
            if (c) h.cutOff = l + 1
            j = ['<stroke color="', a.color || 'black', '" opacity="', s * e, '"/>']
            Y(g.prepVML(j), null, null, h)
            b ? b.element.appendChild(h) : f.parentNode.insertBefore(h, f)
            d.push(h)
          }
          this.shadows = d
        }
        return this
      },
      updateShadows: sa,
      setAttr: function(a, b) {
        hb ? (this.element[a] = b) : this.element.setAttribute(a, b)
      },
      classSetter: function(a) {
        this.element.className = a
      },
      dashstyleSetter: function(a, b, c) {
        ;(c.getElementsByTagName('stroke')[0] ||
          Y(this.renderer.prepVML(['<stroke/>']), null, null, c))[b] = a || 'solid'
        this[b] = a
      },
      dSetter: function(a, b, c) {
        var d = this.shadows,
          a = a || []
        this.d = a.join(' ')
        c.path = a = this.pathToVML(a)
        if (d)
          for (c = d.length; c--; ) d[c].path = d[c].cutOff ? this.cutOffPath(a, d[c].cutOff) : a
        this.setAttr(b, a)
      },
      fillSetter: function(a, b, c) {
        var d = c.nodeName
        if (d === 'SPAN') c.style.color = a
        else if (d !== 'IMG')
          (c.filled = a !== Q), this.setAttr('fillcolor', this.renderer.color(a, c, b, this))
      },
      opacitySetter: sa,
      rotationSetter: function(a, b, c) {
        c = c.style
        this[b] = c[b] = a
        c.left = -u(ea(a * Ca) + 1) + 'px'
        c.top = u(Z(a * Ca)) + 'px'
      },
      strokeSetter: function(a, b, c) {
        this.setAttr('strokecolor', this.renderer.color(a, c, b))
      },
      'stroke-widthSetter': function(a, b, c) {
        c.stroked = !!a
        this[b] = a
        ha(a) && (a += 'px')
        this.setAttr('strokeweight', a)
      },
      titleSetter: function(a, b) {
        this.setAttr(b, a)
      },
      visibilitySetter: function(a, b, c) {
        a === 'inherit' && (a = 'visible')
        this.shadows &&
          p(this.shadows, function(c) {
            c.style[b] = a
          })
        c.nodeName === 'DIV' &&
          ((a = a === 'hidden' ? '-999em' : 0),
          hb || (c.style[b] = a ? 'visible' : 'hidden'),
          (b = 'top'))
        c.style[b] = a
      },
      xSetter: function(a, b, c) {
        this[b] = a
        b === 'x' ? (b = 'left') : b === 'y' && (b = 'top')
        this.updateClipping ? ((this[b] = a), this.updateClipping()) : (c.style[b] = a)
      },
      zIndexSetter: function(a, b, c) {
        c.style[b] = a
      }
    }
    X = ka(P, X)
    X.prototype.ySetter = X.prototype.widthSetter = X.prototype.heightSetter = X.prototype.xSetter
    var ga = {
      Element: X,
      isIE8: wa.indexOf('MSIE 8.0') > -1,
      init: function(a, b, c, d) {
        var e
        this.alignedObjects = []
        d = this.createElement(Ja).css(q(this.getStyle(d), { position: 'relative' }))
        e = d.element
        a.appendChild(d.element)
        this.isVML = !0
        this.box = e
        this.boxWrapper = d
        this.cache = {}
        this.setSize(b, c, !1)
        if (!y.namespaces.hcv) {
          y.namespaces.add('hcv', 'urn:schemas-microsoft-com:vml')
          try {
            y.createStyleSheet().cssText =
              'hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } '
          } catch (f) {
            y.styleSheets[0].cssText +=
              'hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } '
          }
        }
      },
      isHidden: function() {
        return !this.box.offsetWidth
      },
      clipRect: function(a, b, c, d) {
        var e = this.createElement(),
          f = ca(a)
        return q(e, {
          members: [],
          left: (f ? a.x : a) + 1,
          top: (f ? a.y : b) + 1,
          width: (f ? a.width : c) - 1,
          height: (f ? a.height : d) - 1,
          getCSS: function(a) {
            var b = a.element,
              c = b.nodeName,
              a = a.inverted,
              d = this.top - (c === 'shape' ? b.offsetTop : 0),
              e = this.left,
              b = e + this.width,
              f = d + this.height,
              d = {
                clip:
                  'rect(' +
                  u(a ? e : d) +
                  'px,' +
                  u(a ? f : b) +
                  'px,' +
                  u(a ? b : f) +
                  'px,' +
                  u(a ? d : e) +
                  'px)'
              }
            !a && hb && c === 'DIV' && q(d, { width: b + 'px', height: f + 'px' })
            return d
          },
          updateClipping: function() {
            p(e.members, function(a) {
              a.element && a.css(e.getCSS(a))
            })
          }
        })
      },
      color: function(a, b, c, d) {
        var e = this,
          f,
          g = /^rgba/,
          h,
          i,
          j = Q
        a && a.linearGradient ? (i = 'gradient') : a && a.radialGradient && (i = 'pattern')
        if (i) {
          var k,
            l,
            o = a.linearGradient || a.radialGradient,
            n,
            s,
            m,
            J,
            L,
            x = '',
            a = a.stops,
            r,
            v = [],
            q = function() {
              h = [
                '<fill colors="' + v.join(',') + '" opacity="',
                m,
                '" o:opacity2="',
                s,
                '" type="',
                i,
                '" ',
                x,
                'focus="100%" method="any" />'
              ]
              Y(e.prepVML(h), null, null, b)
            }
          n = a[0]
          r = a[a.length - 1]
          n[0] > 0 && a.unshift([0, n[1]])
          r[0] < 1 && a.push([1, r[1]])
          p(a, function(a, b) {
            g.test(a[1])
              ? ((f = ya(a[1])), (k = f.get('rgb')), (l = f.get('a')))
              : ((k = a[1]), (l = 1))
            v.push(a[0] * 100 + '% ' + k)
            b ? ((m = l), (J = k)) : ((s = l), (L = k))
          })
          if (c === 'fill')
            if (i === 'gradient')
              (c = o.x1 || o[0] || 0),
                (a = o.y1 || o[1] || 0),
                (n = o.x2 || o[2] || 0),
                (o = o.y2 || o[3] || 0),
                (x = 'angle="' + (90 - (U.atan((o - a) / (n - c)) * 180) / ma) + '"'),
                q()
            else {
              var j = o.r,
                t = j * 2,
                u = j * 2,
                y = o.cx,
                B = o.cy,
                na = b.radialReference,
                w,
                j = function() {
                  na &&
                    ((w = d.getBBox()),
                    (y += (na[0] - w.x) / w.width - 0.5),
                    (B += (na[1] - w.y) / w.height - 0.5),
                    (t *= na[2] / w.width),
                    (u *= na[2] / w.height))
                  x =
                    'src="' +
                    E.global.VMLRadialGradientURL +
                    '" size="' +
                    t +
                    ',' +
                    u +
                    '" origin="0.5,0.5" position="' +
                    y +
                    ',' +
                    B +
                    '" color2="' +
                    L +
                    '" '
                  q()
                }
              d.added ? j() : (d.onAdd = j)
              j = J
            }
          else j = k
        } else if (g.test(a) && b.tagName !== 'IMG')
          (f = ya(a)),
            (h = ['<', c, ' opacity="', f.get('a'), '"/>']),
            Y(this.prepVML(h), null, null, b),
            (j = f.get('rgb'))
        else {
          j = b.getElementsByTagName(c)
          if (j.length) (j[0].opacity = 1), (j[0].type = 'solid')
          j = a
        }
        return j
      },
      prepVML: function(a) {
        var b = this.isIE8,
          a = a.join('')
        b
          ? ((a = a.replace('/>', ' xmlns="urn:schemas-microsoft-com:vml" />')),
            (a =
              a.indexOf('style="') === -1
                ? a.replace('/>', ' style="display:inline-block;behavior:url(#default#VML);" />')
                : a.replace('style="', 'style="display:inline-block;behavior:url(#default#VML);')))
          : (a = a.replace('<', '<hcv:'))
        return a
      },
      text: ta.prototype.html,
      path: function(a) {
        var b = { coordsize: '10 10' }
        La(a) ? (b.d = a) : ca(a) && q(b, a)
        return this.createElement('shape').attr(b)
      },
      circle: function(a, b, c) {
        var d = this.symbol('circle')
        if (ca(a)) (c = a.r), (b = a.y), (a = a.x)
        d.isCircle = !0
        d.r = c
        return d.attr({ x: a, y: b })
      },
      g: function(a) {
        var b
        a && (b = { className: 'highcharts-' + a, class: 'highcharts-' + a })
        return this.createElement(Ja).attr(b)
      },
      image: function(a, b, c, d, e) {
        var f = this.createElement('img').attr({ src: a })
        arguments.length > 1 && f.attr({ x: b, y: c, width: d, height: e })
        return f
      },
      createElement: function(a) {
        return a === 'rect' ? this.symbol(a) : ta.prototype.createElement.call(this, a)
      },
      invertChild: function(a, b) {
        var c = this,
          d = b.style,
          e = a.tagName === 'IMG' && a.style
        G(a, {
          flip: 'x',
          left: z(d.width) - (e ? z(e.top) : 1),
          top: z(d.height) - (e ? z(e.left) : 1),
          rotation: -90
        })
        p(a.childNodes, function(b) {
          c.invertChild(b, a)
        })
      },
      symbols: {
        arc: function(a, b, c, d, e) {
          var f = e.start,
            g = e.end,
            h = e.r || c || d,
            c = e.innerR,
            d = Z(f),
            i = ea(f),
            j = Z(g),
            k = ea(g)
          if (g - f === 0) return ['x']
          f = ['wa', a - h, b - h, a + h, b + h, a + h * d, b + h * i, a + h * j, b + h * k]
          e.open && !c && f.push('e', 'M', a, b)
          f.push(
            'at',
            a - c,
            b - c,
            a + c,
            b + c,
            a + c * j,
            b + c * k,
            a + c * d,
            b + c * i,
            'x',
            'e'
          )
          f.isArc = !0
          return f
        },
        circle: function(a, b, c, d, e) {
          e && (c = d = 2 * e.r)
          e && e.isCircle && ((a -= c / 2), (b -= d / 2))
          return ['wa', a, b, a + c, b + d, a + c, b + d / 2, a + c, b + d / 2, 'e']
        },
        rect: function(a, b, c, d, e) {
          return ta.prototype.symbols[!r(e) || !e.r ? 'square' : 'callout'].call(0, a, b, c, d, e)
        }
      }
    }
    R.VMLRenderer = X = function() {
      this.init.apply(this, arguments)
    }
    X.prototype = w(ta.prototype, ga)
    Za = X
  }
  ta.prototype.measureSpanWidth = function(a, b) {
    var c = y.createElement('span'),
      d
    d = y.createTextNode(a)
    c.appendChild(d)
    G(c, b)
    this.box.appendChild(c)
    d = c.offsetWidth
    Pa(c)
    return d
  }
  var Lb
  if (fa)
    (R.CanVGRenderer = X = function() {
      xa = 'http://www.w3.org/1999/xhtml'
    }),
      (X.prototype.symbols = {}),
      (Lb = (function() {
        function a() {
          var a = b.length,
            d
          for (d = 0; d < a; d++) b[d]()
          b = []
        }
        var b = []
        return {
          push: function(c, d) {
            b.length === 0 && Qb(d, a)
            b.push(c)
          }
        }
      })()),
      (Za = X)
  Sa.prototype = {
    addLabel: function() {
      var a = this.axis,
        b = a.options,
        c = a.chart,
        d = a.horiz,
        e = a.categories,
        f = a.names,
        g = this.pos,
        h = b.labels,
        i = a.tickPositions,
        d =
          (d && e && !h.step && !h.staggerLines && !h.rotation && c.plotWidth / i.length) ||
          (!d && (c.margin[3] || c.chartWidth * 0.33)),
        j = g === i[0],
        k = g === i[i.length - 1],
        l,
        f = e ? m(e[g], f[g], g) : g,
        e = this.label,
        o = i.info
      a.isDatetimeAxis && o && (l = b.dateTimeLabelFormats[o.higherRanks[g] || o.unitName])
      this.isFirst = j
      this.isLast = k
      b = a.labelFormatter.call({
        axis: a,
        chart: c,
        isFirst: j,
        isLast: k,
        dateTimeLabelFormat: l,
        value: a.isLog ? da(ia(f)) : f
      })
      g = d && { width: v(1, u(d - 2 * (h.padding || 10))) + 'px' }
      g = q(g, h.style)
      if (r(e)) e && e.attr({ text: b }).css(g)
      else {
        l = { align: a.labelAlign }
        if (ha(h.rotation)) l.rotation = h.rotation
        if (d && h.ellipsis) l._clipHeight = a.len / i.length
        this.label =
          r(b) && h.enabled
            ? c.renderer
                .text(b, 0, 0, h.useHTML)
                .attr(l)
                .css(g)
                .add(a.labelGroup)
            : null
      }
    },
    getLabelSize: function() {
      var a = this.label,
        b = this.axis
      return a ? a.getBBox()[b.horiz ? 'height' : 'width'] : 0
    },
    getLabelSides: function() {
      var a = this.label.getBBox(),
        b = this.axis,
        c = b.horiz,
        d = b.options.labels,
        a = c ? a.width : a.height,
        b = c ? d.x - a * { left: 0, center: 0.5, right: 1 }[b.labelAlign] : 0
      return [b, c ? a + b : a]
    },
    handleOverflow: function(a, b) {
      var c = !0,
        d = this.axis,
        e = this.isFirst,
        f = this.isLast,
        g = d.horiz ? b.x : b.y,
        h = d.reversed,
        i = d.tickPositions,
        j = this.getLabelSides(),
        k = j[0],
        j = j[1],
        l,
        o,
        n,
        s = this.label.line || 0
      l = d.labelEdge
      o = d.justifyLabels && (e || f)
      l[s] === t || g + k > l[s] ? (l[s] = g + j) : o || (c = !1)
      if (o) {
        l = (o = d.justifyToPlot) ? d.pos : 0
        o = o ? l + d.len : d.chart.chartWidth
        do (a += e ? 1 : -1), (n = d.ticks[i[a]])
        while (i[a] && (!n || n.label.line !== s))
        d = n && n.label.xy && n.label.xy.x + n.getLabelSides()[e ? 0 : 1]
        ;(e && !h) || (f && h)
          ? g + k < l && ((g = l - k), n && g + j > d && (c = !1))
          : g + j > o && ((g = o - j), n && g + k < d && (c = !1))
        b.x = g
      }
      return c
    },
    getPosition: function(a, b, c, d) {
      var e = this.axis,
        f = e.chart,
        g = (d && f.oldChartHeight) || f.chartHeight
      return {
        x: a
          ? e.translate(b + c, null, null, d) + e.transB
          : e.left +
            e.offset +
            (e.opposite ? ((d && f.oldChartWidth) || f.chartWidth) - e.right - e.left : 0),
        y: a
          ? g - e.bottom + e.offset - (e.opposite ? e.height : 0)
          : g - e.translate(b + c, null, null, d) - e.transB
      }
    },
    getLabelPosition: function(a, b, c, d, e, f, g, h) {
      var i = this.axis,
        j = i.transA,
        k = i.reversed,
        l = i.staggerLines,
        o = i.chart.renderer.fontMetrics(e.style.fontSize).b,
        n = e.rotation,
        a = a + e.x - (f && d ? f * j * (k ? -1 : 1) : 0),
        b = b + e.y - (f && !d ? f * j * (k ? 1 : -1) : 0)
      n && i.side === 2 && (b -= o - o * Z(n * Ca))
      !r(e.y) && !n && (b += o - c.getBBox().height / 2)
      if (l) (c.line = (g / (h || 1)) % l), (b += c.line * (i.labelOffset / l))
      return { x: a, y: b }
    },
    getMarkPath: function(a, b, c, d, e, f) {
      return f.crispLine(['M', a, b, 'L', a + (e ? 0 : -c), b + (e ? c : 0)], d)
    },
    render: function(a, b, c) {
      var d = this.axis,
        e = d.options,
        f = d.chart.renderer,
        g = d.horiz,
        h = this.type,
        i = this.label,
        j = this.pos,
        k = e.labels,
        l = this.gridLine,
        o = h ? h + 'Grid' : 'grid',
        n = h ? h + 'Tick' : 'tick',
        s = e[o + 'LineWidth'],
        p = e[o + 'LineColor'],
        J = e[o + 'LineDashStyle'],
        L = e[n + 'Length'],
        o = e[n + 'Width'] || 0,
        x = e[n + 'Color'],
        r = e[n + 'Position'],
        n = this.mark,
        v = k.step,
        q = !0,
        u = d.tickmarkOffset,
        w = this.getPosition(g, j, u, b),
        y = w.x,
        w = w.y,
        B = (g && y === d.pos + d.len) || (!g && w === d.pos) ? -1 : 1
      this.isActive = !0
      if (s) {
        j = d.getPlotLinePath(j + u, s * B, b, !0)
        if (l === t) {
          l = { stroke: p, 'stroke-width': s }
          if (J) l.dashstyle = J
          if (!h) l.zIndex = 1
          if (b) l.opacity = 0
          this.gridLine = l = s
            ? f
                .path(j)
                .attr(l)
                .add(d.gridGroup)
            : null
        }
        if (!b && l && j) l[this.isNew ? 'attr' : 'animate']({ d: j, opacity: c })
      }
      if (o && L)
        r === 'inside' && (L = -L),
          d.opposite && (L = -L),
          (h = this.getMarkPath(y, w, L, o * B, g, f)),
          n
            ? n.animate({ d: h, opacity: c })
            : (this.mark = f
                .path(h)
                .attr({ stroke: x, 'stroke-width': o, opacity: c })
                .add(d.axisGroup))
      if (i && !isNaN(y))
        (i.xy = w = this.getLabelPosition(y, w, i, g, k, u, a, v)),
          (this.isFirst && !this.isLast && !m(e.showFirstLabel, 1)) ||
          (this.isLast && !this.isFirst && !m(e.showLastLabel, 1))
            ? (q = !1)
            : !d.isRadial &&
              !k.step &&
              !k.rotation &&
              !b &&
              c !== 0 &&
              (q = this.handleOverflow(a, w)),
          v && a % v && (q = !1),
          q && !isNaN(w.y)
            ? ((w.opacity = c), i[this.isNew ? 'attr' : 'animate'](w), (this.isNew = !1))
            : i.attr('y', -9999)
    },
    destroy: function() {
      Oa(this, this.axis)
    }
  }
  R.PlotLineOrBand = function(a, b) {
    this.axis = a
    if (b) (this.options = b), (this.id = b.id)
  }
  R.PlotLineOrBand.prototype = {
    render: function() {
      var a = this,
        b = a.axis,
        c = b.horiz,
        d = (b.pointRange || 0) / 2,
        e = a.options,
        f = e.label,
        g = a.label,
        h = e.width,
        i = e.to,
        j = e.from,
        k = r(j) && r(i),
        l = e.value,
        o = e.dashStyle,
        n = a.svgElem,
        s = [],
        p,
        J = e.color,
        L = e.zIndex,
        x = e.events,
        q = {},
        t = b.chart.renderer
      b.isLog && ((j = za(j)), (i = za(i)), (l = za(l)))
      if (h) {
        if (((s = b.getPlotLinePath(l, h)), (q = { stroke: J, 'stroke-width': h }), o))
          q.dashstyle = o
      } else if (k) {
        j = v(j, b.min - d)
        i = C(i, b.max + d)
        s = b.getPlotBandPath(j, i, e)
        if (J) q.fill = J
        if (e.borderWidth) (q.stroke = e.borderColor), (q['stroke-width'] = e.borderWidth)
      } else return
      if (r(L)) q.zIndex = L
      if (n)
        if (s) n.animate({ d: s }, null, n.onGetPath)
        else {
          if (
            (n.hide(),
            (n.onGetPath = function() {
              n.show()
            }),
            g)
          )
            a.label = g = g.destroy()
        }
      else if (
        s &&
        s.length &&
        ((a.svgElem = n = t
          .path(s)
          .attr(q)
          .add()),
        x)
      )
        for (p in ((d = function(b) {
          n.on(b, function(c) {
            x[b].apply(a, [c])
          })
        }),
        x))
          d(p)
      if (f && r(f.text) && s && s.length && b.width > 0 && b.height > 0) {
        f = w(
          {
            align: c && k && 'center',
            x: c ? !k && 4 : 10,
            verticalAlign: !c && k && 'middle',
            y: c ? (k ? 16 : 10) : k ? 6 : -4,
            rotation: c && !k && 90
          },
          f
        )
        if (!g) {
          q = { align: f.textAlign || f.align, rotation: f.rotation }
          if (r(L)) q.zIndex = L
          a.label = g = t
            .text(f.text, 0, 0, f.useHTML)
            .attr(q)
            .css(f.style)
            .add()
        }
        b = [s[1], s[4], m(s[6], s[1])]
        s = [s[2], s[5], m(s[7], s[2])]
        c = Na(b)
        k = Na(s)
        g.align(f, !1, { x: c, y: k, width: Ba(b) - c, height: Ba(s) - k })
        g.show()
      } else g && g.hide()
      return a
    },
    destroy: function() {
      ja(this.axis.plotLinesAndBands, this)
      delete this.axis
      Oa(this)
    }
  }
  la.prototype = {
    defaultOptions: {
      dateTimeLabelFormats: {
        millisecond: '%H:%M:%S.%L',
        second: '%H:%M:%S',
        minute: '%H:%M',
        hour: '%H:%M',
        day: '%e. %b',
        week: '%e. %b',
        month: "%b '%y",
        year: '%Y'
      },
      endOnTick: !1,
      gridLineColor: '#C0C0C0',
      labels: N,
      lineColor: '#C0D0E0',
      lineWidth: 1,
      minPadding: 0.01,
      maxPadding: 0.01,
      minorGridLineColor: '#E0E0E0',
      minorGridLineWidth: 1,
      minorTickColor: '#A0A0A0',
      minorTickLength: 2,
      minorTickPosition: 'outside',
      startOfWeek: 1,
      startOnTick: !1,
      tickColor: '#C0D0E0',
      tickLength: 10,
      tickmarkPlacement: 'between',
      tickPixelInterval: 100,
      tickPosition: 'outside',
      tickWidth: 1,
      title: { align: 'middle', style: { color: '#707070' } },
      type: 'linear'
    },
    defaultYAxisOptions: {
      endOnTick: !0,
      gridLineWidth: 1,
      tickPixelInterval: 72,
      showLastLabel: !0,
      labels: { x: -8, y: 3 },
      lineWidth: 0,
      maxPadding: 0.05,
      minPadding: 0.05,
      startOnTick: !0,
      tickWidth: 0,
      title: { rotation: 270, text: 'Values' },
      stackLabels: {
        enabled: !1,
        formatter: function() {
          return Ga(this.total, -1)
        },
        style: N.style
      }
    },
    defaultLeftAxisOptions: { labels: { x: -15, y: null }, title: { rotation: 270 } },
    defaultRightAxisOptions: { labels: { x: 15, y: null }, title: { rotation: 90 } },
    defaultBottomAxisOptions: { labels: { x: 0, y: 20 }, title: { rotation: 0 } },
    defaultTopAxisOptions: { labels: { x: 0, y: -15 }, title: { rotation: 0 } },
    init: function(a, b) {
      var c = b.isX
      this.horiz = a.inverted ? !c : c
      this.coll = (this.isXAxis = c) ? 'xAxis' : 'yAxis'
      this.opposite = b.opposite
      this.side = b.side || (this.horiz ? (this.opposite ? 0 : 2) : this.opposite ? 1 : 3)
      this.setOptions(b)
      var d = this.options,
        e = d.type
      this.labelFormatter = d.labels.formatter || this.defaultLabelFormatter
      this.userOptions = b
      this.minPixelPadding = 0
      this.chart = a
      this.reversed = d.reversed
      this.zoomEnabled = d.zoomEnabled !== !1
      this.categories = d.categories || e === 'category'
      this.names = []
      this.isLog = e === 'logarithmic'
      this.isDatetimeAxis = e === 'datetime'
      this.isLinked = r(d.linkedTo)
      this.tickmarkOffset = this.categories && d.tickmarkPlacement === 'between' ? 0.5 : 0
      this.ticks = {}
      this.labelEdge = []
      this.minorTicks = {}
      this.plotLinesAndBands = []
      this.alternateBands = {}
      this.len = 0
      this.minRange = this.userMinRange = d.minRange || d.maxZoom
      this.range = d.range
      this.offset = d.offset || 0
      this.stacks = {}
      this.oldStacks = {}
      this.min = this.max = null
      this.crosshair = m(d.crosshair, qa(a.options.tooltip.crosshairs)[c ? 0 : 1], !1)
      var f,
        d = this.options.events
      Da(this, a.axes) === -1 &&
        (c && !this.isColorAxis ? a.axes.splice(a.xAxis.length, 0, this) : a.axes.push(this),
        a[this.coll].push(this))
      this.series = this.series || []
      if (a.inverted && c && this.reversed === t) this.reversed = !0
      this.removePlotLine = this.removePlotBand = this.removePlotBandOrLine
      for (f in d) K(this, f, d[f])
      if (this.isLog) (this.val2lin = za), (this.lin2val = ia)
    },
    setOptions: function(a) {
      this.options = w(
        this.defaultOptions,
        this.isXAxis ? {} : this.defaultYAxisOptions,
        [
          this.defaultTopAxisOptions,
          this.defaultRightAxisOptions,
          this.defaultBottomAxisOptions,
          this.defaultLeftAxisOptions
        ][this.side],
        w(E[this.coll], a)
      )
    },
    defaultLabelFormatter: function() {
      var a = this.axis,
        b = this.value,
        c = a.categories,
        d = this.dateTimeLabelFormat,
        e = E.lang.numericSymbols,
        f = e && e.length,
        g,
        h = a.options.labels.format,
        a = a.isLog ? b : a.tickInterval
      if (h) g = Ia(h, this)
      else if (c) g = b
      else if (d) g = cb(d, b)
      else if (f && a >= 1e3)
        for (; f-- && g === t; )
          (c = Math.pow(1e3, f + 1)), a >= c && e[f] !== null && (g = Ga(b / c, -1) + e[f])
      g === t && (g = M(b) >= 1e4 ? Ga(b, 0) : Ga(b, -1, t, ''))
      return g
    },
    getSeriesExtremes: function() {
      var a = this,
        b = a.chart
      a.hasVisibleSeries = !1
      a.dataMin = a.dataMax = null
      a.buildStacks && a.buildStacks()
      p(a.series, function(c) {
        if (c.visible || !b.options.chart.ignoreHiddenSeries) {
          var d
          d = c.options.threshold
          var e
          a.hasVisibleSeries = !0
          a.isLog && d <= 0 && (d = null)
          if (a.isXAxis) {
            if (((d = c.xData), d.length))
              (a.dataMin = C(m(a.dataMin, d[0]), Na(d))), (a.dataMax = v(m(a.dataMax, d[0]), Ba(d)))
          } else {
            c.getExtremes()
            e = c.dataMax
            c = c.dataMin
            if (r(c) && r(e))
              (a.dataMin = C(m(a.dataMin, c), c)), (a.dataMax = v(m(a.dataMax, e), e))
            if (r(d))
              if (a.dataMin >= d) (a.dataMin = d), (a.ignoreMinPadding = !0)
              else if (a.dataMax < d) (a.dataMax = d), (a.ignoreMaxPadding = !0)
          }
        }
      })
    },
    translate: function(a, b, c, d, e, f) {
      var g = 1,
        h = 0,
        i = d ? this.oldTransA : this.transA,
        d = d ? this.oldMin : this.min,
        j = this.minPixelPadding,
        e = (this.options.ordinal || (this.isLog && e)) && this.lin2val
      if (!i) i = this.transA
      if (c) (g *= -1), (h = this.len)
      this.reversed && ((g *= -1), (h -= g * (this.sector || this.len)))
      b
        ? ((a = a * g + h), (a -= j), (a = a / i + d), e && (a = this.lin2val(a)))
        : (e && (a = this.val2lin(a)),
          f === 'between' && (f = 0.5),
          (a = g * (a - d) * i + h + g * j + (ha(f) ? i * f * this.pointRange : 0)))
      return a
    },
    toPixels: function(a, b) {
      return this.translate(a, !1, !this.horiz, null, !0) + (b ? 0 : this.pos)
    },
    toValue: function(a, b) {
      return this.translate(a - (b ? 0 : this.pos), !0, !this.horiz, null, !0)
    },
    getPlotLinePath: function(a, b, c, d, e) {
      var f = this.chart,
        g = this.left,
        h = this.top,
        i,
        j,
        k = (c && f.oldChartHeight) || f.chartHeight,
        l = (c && f.oldChartWidth) || f.chartWidth,
        o
      i = this.transB
      e = m(e, this.translate(a, null, null, c))
      a = c = u(e + i)
      i = j = u(k - e - i)
      if (isNaN(e)) o = !0
      else if (this.horiz) {
        if (((i = h), (j = k - this.bottom), a < g || a > g + this.width)) o = !0
      } else if (((a = g), (c = l - this.right), i < h || i > h + this.height)) o = !0
      return o && !d ? null : f.renderer.crispLine(['M', a, i, 'L', c, j], b || 1)
    },
    getLinearTickPositions: function(a, b, c) {
      var d,
        e = da(T(b / a) * a),
        f = da(Ka(c / a) * a),
        g = []
      if (b === c && ha(b)) return [b]
      for (b = e; b <= f; ) {
        g.push(b)
        b = da(b + a)
        if (b === d) break
        d = b
      }
      return g
    },
    getMinorTickPositions: function() {
      var a = this.options,
        b = this.tickPositions,
        c = this.minorTickInterval,
        d = [],
        e
      if (this.isLog) {
        e = b.length
        for (a = 1; a < e; a++) d = d.concat(this.getLogTickPositions(c, b[a - 1], b[a], !0))
      } else if (this.isDatetimeAxis && a.minorTickInterval === 'auto')
        (d = d.concat(
          this.getTimeTicks(this.normalizeTimeTickInterval(c), this.min, this.max, a.startOfWeek)
        )),
          d[0] < this.min && d.shift()
      else for (b = this.min + ((b[0] - this.min) % c); b <= this.max; b += c) d.push(b)
      return d
    },
    adjustForMinRange: function() {
      var a = this.options,
        b = this.min,
        c = this.max,
        d,
        e = this.dataMax - this.dataMin >= this.minRange,
        f,
        g,
        h,
        i,
        j
      if (this.isXAxis && this.minRange === t && !this.isLog)
        r(a.min) || r(a.max)
          ? (this.minRange = null)
          : (p(this.series, function(a) {
              i = a.xData
              for (g = j = a.xIncrement ? 1 : i.length - 1; g > 0; g--)
                if (((h = i[g] - i[g - 1]), f === t || h < f)) f = h
            }),
            (this.minRange = C(f * 5, this.dataMax - this.dataMin)))
      if (c - b < this.minRange) {
        var k = this.minRange
        d = (k - c + b) / 2
        d = [b - d, m(a.min, b - d)]
        if (e) d[2] = this.dataMin
        b = Ba(d)
        c = [b + k, m(a.max, b + k)]
        if (e) c[2] = this.dataMax
        c = Na(c)
        c - b < k && ((d[0] = c - k), (d[1] = m(a.min, c - k)), (b = Ba(d)))
      }
      this.min = b
      this.max = c
    },
    setAxisTranslation: function(a) {
      var b = this,
        c = b.max - b.min,
        d = b.axisPointRange || 0,
        e,
        f = 0,
        g = 0,
        h = b.linkedParent,
        i = !!b.categories,
        j = b.transA
      if (b.isXAxis || i || d)
        h
          ? ((f = h.minPointOffset), (g = h.pointRangePadding))
          : p(b.series, function(a) {
              var h = i ? 1 : b.isXAxis ? a.pointRange : b.axisPointRange || 0,
                j = a.options.pointPlacement,
                n = a.closestPointRange
              h > c && (h = 0)
              d = v(d, h)
              f = v(f, Fa(j) ? 0 : h / 2)
              g = v(g, j === 'on' ? 0 : h)
              !a.noSharedTooltip && r(n) && (e = r(e) ? C(e, n) : n)
            }),
          (h = b.ordinalSlope && e ? b.ordinalSlope / e : 1),
          (b.minPointOffset = f *= h),
          (b.pointRangePadding = g *= h),
          (b.pointRange = C(d, c)),
          (b.closestPointRange = e)
      if (a) b.oldTransA = j
      b.translationSlope = b.transA = j = b.len / (c + g || 1)
      b.transB = b.horiz ? b.left : b.bottom
      b.minPixelPadding = j * f
    },
    setTickPositions: function(a) {
      var b = this,
        c = b.chart,
        d = b.options,
        e = b.isLog,
        f = b.isDatetimeAxis,
        g = b.isXAxis,
        h = b.isLinked,
        i = b.options.tickPositioner,
        j = d.maxPadding,
        k = d.minPadding,
        l = d.tickInterval,
        o = d.minTickInterval,
        n = d.tickPixelInterval,
        s,
        $ = b.categories
      h
        ? ((b.linkedParent = c[b.coll][d.linkedTo]),
          (c = b.linkedParent.getExtremes()),
          (b.min = m(c.min, c.dataMin)),
          (b.max = m(c.max, c.dataMax)),
          d.type !== b.linkedParent.options.type && ra(11, 1))
        : ((b.min = m(b.userMin, d.min, b.dataMin)), (b.max = m(b.userMax, d.max, b.dataMax)))
      if (e)
        !a && C(b.min, m(b.dataMin, b.min)) <= 0 && ra(10, 1),
          (b.min = da(za(b.min))),
          (b.max = da(za(b.max)))
      if (b.range && r(b.max))
        (b.userMin = b.min = v(b.min, b.max - b.range)), (b.userMax = b.max), (b.range = null)
      b.beforePadding && b.beforePadding()
      b.adjustForMinRange()
      if (
        !$ &&
        !b.axisPointRange &&
        !b.usePercentage &&
        !h &&
        r(b.min) &&
        r(b.max) &&
        (c = b.max - b.min)
      ) {
        if (!r(d.min) && !r(b.userMin) && k && (b.dataMin < 0 || !b.ignoreMinPadding))
          b.min -= c * k
        if (!r(d.max) && !r(b.userMax) && j && (b.dataMax > 0 || !b.ignoreMaxPadding))
          b.max += c * j
      }
      if (ha(d.floor)) b.min = v(b.min, d.floor)
      if (ha(d.ceiling)) b.max = C(b.max, d.ceiling)
      b.min === b.max || b.min === void 0 || b.max === void 0
        ? (b.tickInterval = 1)
        : h && !l && n === b.linkedParent.options.tickPixelInterval
        ? (b.tickInterval = b.linkedParent.tickInterval)
        : ((b.tickInterval = m(l, $ ? 1 : ((b.max - b.min) * n) / v(b.len, n))),
          !r(l) &&
            b.len < n &&
            !this.isRadial &&
            !this.isLog &&
            !$ &&
            d.startOnTick &&
            d.endOnTick &&
            ((s = !0), (b.tickInterval /= 4)))
      g &&
        !a &&
        p(b.series, function(a) {
          a.processData(b.min !== b.oldMin || b.max !== b.oldMax)
        })
      b.setAxisTranslation(!0)
      b.beforeSetTickPositions && b.beforeSetTickPositions()
      if (b.postProcessTickInterval) b.tickInterval = b.postProcessTickInterval(b.tickInterval)
      if (b.pointRange) b.tickInterval = v(b.pointRange, b.tickInterval)
      if (!l && b.tickInterval < o) b.tickInterval = o
      if (!f && !e && !l) b.tickInterval = nb(b.tickInterval, null, mb(b.tickInterval), d)
      b.minorTickInterval =
        d.minorTickInterval === 'auto' && b.tickInterval ? b.tickInterval / 5 : d.minorTickInterval
      b.tickPositions = a = d.tickPositions
        ? [].concat(d.tickPositions)
        : i && i.apply(b, [b.min, b.max])
      if (!a)
        !b.ordinalPositions && (b.max - b.min) / b.tickInterval > v(2 * b.len, 200) && ra(19, !0),
          (a = f
            ? b.getTimeTicks(
                b.normalizeTimeTickInterval(b.tickInterval, d.units),
                b.min,
                b.max,
                d.startOfWeek,
                b.ordinalPositions,
                b.closestPointRange,
                !0
              )
            : e
            ? b.getLogTickPositions(b.tickInterval, b.min, b.max)
            : b.getLinearTickPositions(b.tickInterval, b.min, b.max)),
          s && a.splice(1, a.length - 2),
          (b.tickPositions = a)
      if (!h)
        (e = a[0]),
          (f = a[a.length - 1]),
          (h = b.minPointOffset || 0),
          d.startOnTick ? (b.min = e) : b.min - h > e && a.shift(),
          d.endOnTick ? (b.max = f) : b.max + h < f && a.pop(),
          a.length === 1 && ((d = M(b.max) > 1e13 ? 1 : 0.001), (b.min -= d), (b.max += d))
    },
    setMaxTicks: function() {
      var a = this.chart,
        b = a.maxTicks || {},
        c = this.tickPositions,
        d = (this._maxTicksKey = [this.coll, this.pos, this.len].join('-'))
      if (
        !this.isLinked &&
        !this.isDatetimeAxis &&
        c &&
        c.length > (b[d] || 0) &&
        this.options.alignTicks !== !1
      )
        b[d] = c.length
      a.maxTicks = b
    },
    adjustTickAmount: function() {
      var a = this._maxTicksKey,
        b = this.tickPositions,
        c = this.chart.maxTicks
      if (
        c &&
        c[a] &&
        !this.isDatetimeAxis &&
        !this.categories &&
        !this.isLinked &&
        this.options.alignTicks !== !1 &&
        this.min !== t
      ) {
        var d = this.tickAmount,
          e = b.length
        this.tickAmount = a = c[a]
        if (e < a) {
          for (; b.length < a; ) b.push(da(b[b.length - 1] + this.tickInterval))
          this.transA *= (e - 1) / (a - 1)
          this.max = b[b.length - 1]
        }
        if (r(d) && a !== d) this.isDirty = !0
      }
    },
    setScale: function() {
      var a = this.stacks,
        b,
        c,
        d,
        e
      this.oldMin = this.min
      this.oldMax = this.max
      this.oldAxisLength = this.len
      this.setAxisSize()
      e = this.len !== this.oldAxisLength
      p(this.series, function(a) {
        if (a.isDirtyData || a.isDirty || a.xAxis.isDirty) d = !0
      })
      if (
        e ||
        d ||
        this.isLinked ||
        this.forceRedraw ||
        this.userMin !== this.oldUserMin ||
        this.userMax !== this.oldUserMax
      ) {
        if (!this.isXAxis) for (b in a) for (c in a[b]) (a[b][c].total = null), (a[b][c].cum = 0)
        this.forceRedraw = !1
        this.getSeriesExtremes()
        this.setTickPositions()
        this.oldUserMin = this.userMin
        this.oldUserMax = this.userMax
        if (!this.isDirty) this.isDirty = e || this.min !== this.oldMin || this.max !== this.oldMax
      } else if (!this.isXAxis) {
        if (this.oldStacks) a = this.stacks = this.oldStacks
        for (b in a) for (c in a[b]) a[b][c].cum = a[b][c].total
      }
      this.setMaxTicks()
    },
    setExtremes: function(a, b, c, d, e) {
      var f = this,
        g = f.chart,
        c = m(c, !0),
        e = q(e, { min: a, max: b })
      D(f, 'setExtremes', e, function() {
        f.userMin = a
        f.userMax = b
        f.eventArgs = e
        f.isDirtyExtremes = !0
        c && g.redraw(d)
      })
    },
    zoom: function(a, b) {
      var c = this.dataMin,
        d = this.dataMax,
        e = this.options
      this.allowZoomOutside ||
        (r(c) && a <= C(c, m(e.min, c)) && (a = t), r(d) && b >= v(d, m(e.max, d)) && (b = t))
      this.displayBtn = a !== t || b !== t
      this.setExtremes(a, b, !1, t, { trigger: 'zoom' })
      return !0
    },
    setAxisSize: function() {
      var a = this.chart,
        b = this.options,
        c = b.offsetLeft || 0,
        d = this.horiz,
        e = m(b.width, a.plotWidth - c + (b.offsetRight || 0)),
        f = m(b.height, a.plotHeight),
        g = m(b.top, a.plotTop),
        b = m(b.left, a.plotLeft + c),
        c = /%$/
      c.test(f) && (f = (parseInt(f, 10) / 100) * a.plotHeight)
      c.test(g) && (g = (parseInt(g, 10) / 100) * a.plotHeight + a.plotTop)
      this.left = b
      this.top = g
      this.width = e
      this.height = f
      this.bottom = a.chartHeight - f - g
      this.right = a.chartWidth - e - b
      this.len = v(d ? e : f, 0)
      this.pos = d ? b : g
    },
    getExtremes: function() {
      var a = this.isLog
      return {
        min: a ? da(ia(this.min)) : this.min,
        max: a ? da(ia(this.max)) : this.max,
        dataMin: this.dataMin,
        dataMax: this.dataMax,
        userMin: this.userMin,
        userMax: this.userMax
      }
    },
    getThreshold: function(a) {
      var b = this.isLog,
        c = b ? ia(this.min) : this.min,
        b = b ? ia(this.max) : this.max
      c > a || a === null ? (a = c) : b < a && (a = b)
      return this.translate(a, 0, 1, 0, 1)
    },
    autoLabelAlign: function(a) {
      a = (m(a, 0) - this.side * 90 + 720) % 360
      return a > 15 && a < 165 ? 'right' : a > 195 && a < 345 ? 'left' : 'center'
    },
    getOffset: function() {
      var a = this,
        b = a.chart,
        c = b.renderer,
        d = a.options,
        e = a.tickPositions,
        f = a.ticks,
        g = a.horiz,
        h = a.side,
        i = b.inverted ? [1, 0, 3, 2][h] : h,
        j,
        k = 0,
        l,
        o = 0,
        n = d.title,
        s = d.labels,
        $ = 0,
        J = b.axisOffset,
        L = b.clipOffset,
        x = [-1, 1, 1, -1][h],
        q,
        u = 1,
        w = m(s.maxStaggerLines, 5),
        y,
        z,
        A,
        B,
        na = h === 2 ? c.fontMetrics(s.style.fontSize).b : 0
      a.hasData = j = a.hasVisibleSeries || (r(a.min) && r(a.max) && !!e)
      a.showAxis = b = j || m(d.showEmpty, !0)
      a.staggerLines = a.horiz && s.staggerLines
      if (!a.axisGroup)
        (a.gridGroup = c
          .g('grid')
          .attr({ zIndex: d.gridZIndex || 1 })
          .add()),
          (a.axisGroup = c
            .g('axis')
            .attr({ zIndex: d.zIndex || 2 })
            .add()),
          (a.labelGroup = c
            .g('axis-labels')
            .attr({ zIndex: s.zIndex || 7 })
            .addClass('highcharts-' + a.coll.toLowerCase() + '-labels')
            .add())
      if (j || a.isLinked) {
        a.labelAlign = m(s.align || a.autoLabelAlign(s.rotation))
        p(e, function(b) {
          f[b] ? f[b].addLabel() : (f[b] = new Sa(a, b))
        })
        if (a.horiz && !a.staggerLines && w && !s.rotation) {
          for (q = a.reversed ? [].concat(e).reverse() : e; u < w; ) {
            j = []
            y = !1
            for (s = 0; s < q.length; s++)
              (z = q[s]),
                (A = (A = f[z].label && f[z].label.getBBox()) ? A.width : 0),
                (B = s % u),
                A && ((z = a.translate(z)), j[B] !== t && z < j[B] && (y = !0), (j[B] = z + A))
            if (y) u++
            else break
          }
          if (u > 1) a.staggerLines = u
        }
        p(e, function(b) {
          if (h === 0 || h === 2 || { 1: 'left', 3: 'right' }[h] === a.labelAlign)
            $ = v(f[b].getLabelSize(), $)
        })
        if (a.staggerLines) ($ *= a.staggerLines), (a.labelOffset = $)
      } else for (q in f) f[q].destroy(), delete f[q]
      if (n && n.text && n.enabled !== !1) {
        if (!a.axisTitle)
          (a.axisTitle = c
            .text(n.text, 0, 0, n.useHTML)
            .attr({
              zIndex: 7,
              rotation: n.rotation || 0,
              align: n.textAlign || { low: 'left', middle: 'center', high: 'right' }[n.align]
            })
            .addClass('highcharts-' + this.coll.toLowerCase() + '-title')
            .css(n.style)
            .add(a.axisGroup)),
            (a.axisTitle.isNew = !0)
        if (b)
          (k = a.axisTitle.getBBox()[g ? 'height' : 'width']),
            (o = m(n.margin, g ? 5 : 10)),
            (l = n.offset)
        a.axisTitle[b ? 'show' : 'hide']()
      }
      a.offset = x * m(d.offset, J[h])
      a.axisTitleMargin = m(l, $ + o + ($ && x * d.labels[g ? 'y' : 'x'] - na))
      J[h] = v(J[h], a.axisTitleMargin + k + x * a.offset)
      L[i] = v(L[i], T(d.lineWidth / 2) * 2)
    },
    getLinePath: function(a) {
      var b = this.chart,
        c = this.opposite,
        d = this.offset,
        e = this.horiz,
        f = this.left + (c ? this.width : 0) + d,
        d = b.chartHeight - this.bottom - (c ? this.height : 0) + d
      c && (a *= -1)
      return b.renderer.crispLine(
        [
          'M',
          e ? this.left : f,
          e ? d : this.top,
          'L',
          e ? b.chartWidth - this.right : f,
          e ? d : b.chartHeight - this.bottom
        ],
        a
      )
    },
    getTitlePosition: function() {
      var a = this.horiz,
        b = this.left,
        c = this.top,
        d = this.len,
        e = this.options.title,
        f = a ? b : c,
        g = this.opposite,
        h = this.offset,
        i = z(e.style.fontSize || 12),
        d = { low: f + (a ? 0 : d), middle: f + d / 2, high: f + (a ? d : 0) }[e.align],
        b =
          (a ? c + this.height : b) +
          (a ? 1 : -1) * (g ? -1 : 1) * this.axisTitleMargin +
          (this.side === 2 ? i : 0)
      return {
        x: a ? d : b + (g ? this.width : 0) + h + (e.x || 0),
        y: a ? b - (g ? this.height : 0) + h : d + (e.y || 0)
      }
    },
    render: function() {
      var a = this,
        b = a.horiz,
        c = a.reversed,
        d = a.chart,
        e = d.renderer,
        f = a.options,
        g = a.isLog,
        h = a.isLinked,
        i = a.tickPositions,
        j,
        k = a.axisTitle,
        l = a.ticks,
        o = a.minorTicks,
        n = a.alternateBands,
        s = f.stackLabels,
        m = f.alternateGridColor,
        J = a.tickmarkOffset,
        L = f.lineWidth,
        x = d.hasRendered && r(a.oldMin) && !isNaN(a.oldMin),
        q = a.hasData,
        v = a.showAxis,
        u,
        w = f.labels.overflow,
        y = (a.justifyLabels = b && w !== !1),
        z
      a.labelEdge.length = 0
      a.justifyToPlot = w === 'justify'
      p([l, o, n], function(a) {
        for (var b in a) a[b].isActive = !1
      })
      if (q || h)
        if (
          (a.minorTickInterval &&
            !a.categories &&
            p(a.getMinorTickPositions(), function(b) {
              o[b] || (o[b] = new Sa(a, b, 'minor'))
              x && o[b].isNew && o[b].render(null, !0)
              o[b].render(null, !1, 1)
            }),
          i.length &&
            ((j = i.slice()),
            ((b && c) || (!b && !c)) && j.reverse(),
            y && (j = j.slice(1).concat([j[0]])),
            p(j, function(b, c) {
              y && (c = c === j.length - 1 ? 0 : c + 1)
              if (!h || (b >= a.min && b <= a.max))
                l[b] || (l[b] = new Sa(a, b)),
                  x && l[b].isNew && l[b].render(c, !0, 0.1),
                  l[b].render(c, !1, 1)
            }),
            J && a.min === 0 && (l[-1] || (l[-1] = new Sa(a, -1, null, !0)), l[-1].render(-1))),
          m &&
            p(i, function(b, c) {
              if (c % 2 === 0 && b < a.max)
                n[b] || (n[b] = new R.PlotLineOrBand(a)),
                  (u = b + J),
                  (z = i[c + 1] !== t ? i[c + 1] + J : a.max),
                  (n[b].options = { from: g ? ia(u) : u, to: g ? ia(z) : z, color: m }),
                  n[b].render(),
                  (n[b].isActive = !0)
            }),
          !a._addedPlotLB)
        )
          p((f.plotLines || []).concat(f.plotBands || []), function(b) {
            a.addPlotBandOrLine(b)
          }),
            (a._addedPlotLB = !0)
      p([l, o, n], function(a) {
        var b,
          c,
          e = [],
          f = va ? va.duration || 500 : 0,
          g = function() {
            for (c = e.length; c--; )
              a[e[c]] && !a[e[c]].isActive && (a[e[c]].destroy(), delete a[e[c]])
          }
        for (b in a) if (!a[b].isActive) a[b].render(b, !1, 0), (a[b].isActive = !1), e.push(b)
        a === n || !d.hasRendered || !f ? g() : f && setTimeout(g, f)
      })
      if (L)
        (b = a.getLinePath(L)),
          a.axisLine
            ? a.axisLine.animate({ d: b })
            : (a.axisLine = e
                .path(b)
                .attr({ stroke: f.lineColor, 'stroke-width': L, zIndex: 7 })
                .add(a.axisGroup)),
          a.axisLine[v ? 'show' : 'hide']()
      if (k && v) k[k.isNew ? 'attr' : 'animate'](a.getTitlePosition()), (k.isNew = !1)
      s && s.enabled && a.renderStackTotals()
      a.isDirty = !1
    },
    redraw: function() {
      var a = this.chart.pointer
      a && a.reset(!0)
      this.render()
      p(this.plotLinesAndBands, function(a) {
        a.render()
      })
      p(this.series, function(a) {
        a.isDirty = !0
      })
    },
    destroy: function(a) {
      var b = this,
        c = b.stacks,
        d,
        e = b.plotLinesAndBands
      a || W(b)
      for (d in c) Oa(c[d]), (c[d] = null)
      p([b.ticks, b.minorTicks, b.alternateBands], function(a) {
        Oa(a)
      })
      for (a = e.length; a--; ) e[a].destroy()
      p(
        'stackTotalGroup,axisLine,axisTitle,axisGroup,cross,gridGroup,labelGroup'.split(','),
        function(a) {
          b[a] && (b[a] = b[a].destroy())
        }
      )
      this.cross && this.cross.destroy()
    },
    drawCrosshair: function(a, b) {
      if (this.crosshair)
        if ((r(b) || !m(this.crosshair.snap, !0)) === !1) this.hideCrosshair()
        else {
          var c,
            d = this.crosshair,
            e = d.animation
          m(d.snap, !0)
            ? r(b) && (c = this.chart.inverted != this.horiz ? b.plotX : this.len - b.plotY)
            : (c = this.horiz ? a.chartX - this.pos : this.len - a.chartY + this.pos)
          c = this.isRadial
            ? this.getPlotLinePath(this.isXAxis ? b.x : m(b.stackY, b.y))
            : this.getPlotLinePath(null, null, null, null, c)
          if (c === null) this.hideCrosshair()
          else if (this.cross)
            this.cross.attr({ visibility: 'visible' })[e ? 'animate' : 'attr']({ d: c }, e)
          else {
            e = {
              'stroke-width': d.width || 1,
              stroke: d.color || '#C0C0C0',
              zIndex: d.zIndex || 2
            }
            if (d.dashStyle) e.dashstyle = d.dashStyle
            this.cross = this.chart.renderer
              .path(c)
              .attr(e)
              .add()
          }
        }
    },
    hideCrosshair: function() {
      this.cross && this.cross.hide()
    }
  }
  q(la.prototype, {
    getPlotBandPath: function(a, b) {
      var c = this.getPlotLinePath(b),
        d = this.getPlotLinePath(a)
      d && c ? d.push(c[4], c[5], c[1], c[2]) : (d = null)
      return d
    },
    addPlotBand: function(a) {
      this.addPlotBandOrLine(a, 'plotBands')
    },
    addPlotLine: function(a) {
      this.addPlotBandOrLine(a, 'plotLines')
    },
    addPlotBandOrLine: function(a, b) {
      var c = new R.PlotLineOrBand(this, a).render(),
        d = this.userOptions
      c && (b && ((d[b] = d[b] || []), d[b].push(a)), this.plotLinesAndBands.push(c))
      return c
    },
    removePlotBandOrLine: function(a) {
      for (
        var b = this.plotLinesAndBands, c = this.options, d = this.userOptions, e = b.length;
        e--;

      )
        b[e].id === a && b[e].destroy()
      p([c.plotLines || [], d.plotLines || [], c.plotBands || [], d.plotBands || []], function(b) {
        for (e = b.length; e--; ) b[e].id === a && ja(b, b[e])
      })
    }
  })
  la.prototype.getTimeTicks = function(a, b, c, d) {
    var e = [],
      f = {},
      g = E.global.useUTC,
      h,
      i = new Date(b - Ra),
      j = a.unitRange,
      k = a.count
    if (r(b)) {
      j >= A.second &&
        (i.setMilliseconds(0), i.setSeconds(j >= A.minute ? 0 : k * T(i.getSeconds() / k)))
      if (j >= A.minute) i[Db](j >= A.hour ? 0 : k * T(i[pb]() / k))
      if (j >= A.hour) i[Eb](j >= A.day ? 0 : k * T(i[qb]() / k))
      if (j >= A.day) i[sb](j >= A.month ? 1 : k * T(i[Xa]() / k))
      j >= A.month && (i[Fb](j >= A.year ? 0 : k * T(i[fb]() / k)), (h = i[gb]()))
      j >= A.year && ((h -= h % k), i[Gb](h))
      if (j === A.week) i[sb](i[Xa]() - i[rb]() + m(d, 1))
      b = 1
      Ra && (i = new Date(i.getTime() + Ra))
      h = i[gb]()
      for (
        var d = i.getTime(),
          l = i[fb](),
          o = i[Xa](),
          n = g ? Ra : (864e5 + i.getTimezoneOffset() * 6e4) % 864e5;
        d < c;

      )
        e.push(d),
          j === A.year
            ? (d = eb(h + b * k, 0))
            : j === A.month
            ? (d = eb(h, l + b * k))
            : !g && (j === A.day || j === A.week)
            ? (d = eb(h, l, o + b * k * (j === A.day ? 1 : 7)))
            : (d += j * k),
          b++
      e.push(d)
      p(
        vb(e, function(a) {
          return j <= A.hour && a % A.day === n
        }),
        function(a) {
          f[a] = 'day'
        }
      )
    }
    e.info = q(a, { higherRanks: f, totalRange: j * k })
    return e
  }
  la.prototype.normalizeTimeTickInterval = function(a, b) {
    var c = b || [
        ['millisecond', [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]],
        ['second', [1, 2, 5, 10, 15, 30]],
        ['minute', [1, 2, 5, 10, 15, 30]],
        ['hour', [1, 2, 3, 4, 6, 8, 12]],
        ['day', [1, 2]],
        ['week', [1, 2]],
        ['month', [1, 2, 3, 4, 6]],
        ['year', null]
      ],
      d = c[c.length - 1],
      e = A[d[0]],
      f = d[1],
      g
    for (g = 0; g < c.length; g++)
      if (
        ((d = c[g]),
        (e = A[d[0]]),
        (f = d[1]),
        c[g + 1] && a <= (e * f[f.length - 1] + A[c[g + 1][0]]) / 2)
      )
        break
    e === A.year && a < 5 * e && (f = [1, 2, 5])
    c = nb(a / e, f, d[0] === 'year' ? v(mb(a / e), 1) : 1)
    return { unitRange: e, count: c, unitName: d[0] }
  }
  la.prototype.getLogTickPositions = function(a, b, c, d) {
    var e = this.options,
      f = this.len,
      g = []
    if (!d) this._minorAutoInterval = null
    if (a >= 0.5) (a = u(a)), (g = this.getLinearTickPositions(a, b, c))
    else if (a >= 0.08)
      for (
        var f = T(b),
          h,
          i,
          j,
          k,
          l,
          e = a > 0.3 ? [1, 2, 4] : a > 0.15 ? [1, 2, 4, 6, 8] : [1, 2, 3, 4, 5, 6, 7, 8, 9];
        f < c + 1 && !l;
        f++
      ) {
        i = e.length
        for (h = 0; h < i && !l; h++)
          (j = za(ia(f) * e[h])), j > b && (!d || k <= c) && g.push(k), k > c && (l = !0), (k = j)
      }
    else if (
      ((b = ia(b)),
      (c = ia(c)),
      (a = e[d ? 'minorTickInterval' : 'tickInterval']),
      (a = m(
        a === 'auto' ? null : a,
        this._minorAutoInterval,
        ((c - b) * (e.tickPixelInterval / (d ? 5 : 1))) /
          ((d ? f / this.tickPositions.length : f) || 1)
      )),
      (a = nb(a, null, mb(a))),
      (g = Ua(this.getLinearTickPositions(a, b, c), za)),
      !d)
    )
      this._minorAutoInterval = a / 5
    if (!d) this.tickInterval = a
    return g
  }
  var Mb = (R.Tooltip = function() {
    this.init.apply(this, arguments)
  })
  Mb.prototype = {
    init: function(a, b) {
      var c = b.borderWidth,
        d = b.style,
        e = z(d.padding)
      this.chart = a
      this.options = b
      this.crosshairs = []
      this.now = { x: 0, y: 0 }
      this.isHidden = !0
      this.label = a.renderer
        .label('', 0, 0, b.shape || 'callout', null, null, b.useHTML, null, 'tooltip')
        .attr({
          padding: e,
          fill: b.backgroundColor,
          'stroke-width': c,
          r: b.borderRadius,
          zIndex: 8
        })
        .css(d)
        .css({ padding: 0 })
        .add()
        .attr({ y: -9999 })
      fa || this.label.shadow(b.shadow)
      this.shared = b.shared
    },
    destroy: function() {
      if (this.label) this.label = this.label.destroy()
      clearTimeout(this.hideTimer)
      clearTimeout(this.tooltipTimeout)
    },
    move: function(a, b, c, d) {
      var e = this,
        f = e.now,
        g = e.options.animation !== !1 && !e.isHidden,
        h = e.followPointer || e.len > 1
      q(f, {
        x: g ? (2 * f.x + a) / 3 : a,
        y: g ? (f.y + b) / 2 : b,
        anchorX: h ? t : g ? (2 * f.anchorX + c) / 3 : c,
        anchorY: h ? t : g ? (f.anchorY + d) / 2 : d
      })
      e.label.attr(f)
      if (g && (M(a - f.x) > 1 || M(b - f.y) > 1))
        clearTimeout(this.tooltipTimeout),
          (this.tooltipTimeout = setTimeout(function() {
            e && e.move(a, b, c, d)
          }, 32))
    },
    hide: function() {
      var a = this,
        b
      clearTimeout(this.hideTimer)
      if (!this.isHidden)
        (b = this.chart.hoverPoints),
          (this.hideTimer = setTimeout(function() {
            a.label.fadeOut()
            a.isHidden = !0
          }, m(this.options.hideDelay, 500))),
          b &&
            p(b, function(a) {
              a.setState()
            }),
          (this.chart.hoverPoints = null)
    },
    getAnchor: function(a, b) {
      var c,
        d = this.chart,
        e = d.inverted,
        f = d.plotTop,
        g = 0,
        h = 0,
        i,
        a = qa(a)
      c = a[0].tooltipPos
      this.followPointer &&
        b &&
        (b.chartX === t && (b = d.pointer.normalize(b)),
        (c = [b.chartX - d.plotLeft, b.chartY - f]))
      c ||
        (p(a, function(a) {
          i = a.series.yAxis
          g += a.plotX
          h += (a.plotLow ? (a.plotLow + a.plotHigh) / 2 : a.plotY) + (!e && i ? i.top - f : 0)
        }),
        (g /= a.length),
        (h /= a.length),
        (c = [
          e ? d.plotWidth - h : g,
          this.shared && !e && a.length > 1 && b ? b.chartY - f : e ? d.plotHeight - g : h
        ]))
      return Ua(c, u)
    },
    getPosition: function(a, b, c) {
      var d = this.chart,
        e = this.distance,
        f = {},
        g,
        h = ['y', d.chartHeight, b, c.plotY + d.plotTop],
        i = ['x', d.chartWidth, a, c.plotX + d.plotLeft],
        j = c.ttBelow || (d.inverted && !c.negative) || (!d.inverted && c.negative),
        k = function(a, b, c, d) {
          var g = c < d - e,
            b = d + e + c < b,
            c = d - e - c
          d += e
          if (j && b) f[a] = d
          else if (!j && g) f[a] = c
          else if (g) f[a] = c
          else if (b) f[a] = d
          else return !1
        },
        l = function(a, b, c, d) {
          if (d < e || d > b - e) return !1
          else f[a] = d < c / 2 ? 1 : d > b - c / 2 ? b - c - 2 : d - c / 2
        },
        o = function(a) {
          var b = h
          h = i
          i = b
          g = a
        },
        n = function() {
          k.apply(0, h) !== !1
            ? l.apply(0, i) === !1 && !g && (o(!0), n())
            : g
            ? (f.x = f.y = 0)
            : (o(!0), n())
        }
      ;(d.inverted || this.len > 1) && o()
      n()
      return f
    },
    defaultFormatter: function(a) {
      var b = this.points || qa(this),
        c = b[0].series,
        d
      d = [a.tooltipHeaderFormatter(b[0])]
      p(b, function(a) {
        c = a.series
        d.push(
          (c.tooltipFormatter && c.tooltipFormatter(a)) ||
            a.point.tooltipFormatter(c.tooltipOptions.pointFormat)
        )
      })
      d.push(a.options.footerFormat || '')
      return d.join('')
    },
    refresh: function(a, b) {
      var c = this.chart,
        d = this.label,
        e = this.options,
        f,
        g,
        h = {},
        i,
        j = []
      i = e.formatter || this.defaultFormatter
      var h = c.hoverPoints,
        k,
        l = this.shared
      clearTimeout(this.hideTimer)
      this.followPointer = qa(a)[0].series.tooltipOptions.followPointer
      g = this.getAnchor(a, b)
      f = g[0]
      g = g[1]
      l && (!a.series || !a.series.noSharedTooltip)
        ? ((c.hoverPoints = a),
          h &&
            p(h, function(a) {
              a.setState()
            }),
          p(a, function(a) {
            a.setState('hover')
            j.push(a.getLabelConfig())
          }),
          (h = { x: a[0].category, y: a[0].y }),
          (h.points = j),
          (this.len = j.length),
          (a = a[0]))
        : (h = a.getLabelConfig())
      i = i.call(h, this)
      h = a.series
      this.distance = m(h.tooltipOptions.distance, 16)
      i === !1
        ? this.hide()
        : (this.isHidden && (bb(d), d.attr('opacity', 1).show()),
          d.attr({ text: i }),
          (k = e.borderColor || a.color || h.color || '#606060'),
          d.attr({ stroke: k }),
          this.updatePosition({ plotX: f, plotY: g, negative: a.negative, ttBelow: a.ttBelow }),
          (this.isHidden = !1))
      D(c, 'tooltipRefresh', { text: i, x: f + c.plotLeft, y: g + c.plotTop, borderColor: k })
    },
    updatePosition: function(a) {
      var b = this.chart,
        c = this.label,
        c = (this.options.positioner || this.getPosition).call(this, c.width, c.height, a)
      this.move(u(c.x), u(c.y), a.plotX + b.plotLeft, a.plotY + b.plotTop)
    },
    tooltipHeaderFormatter: function(a) {
      var b = a.series,
        c = b.tooltipOptions,
        d = c.dateTimeLabelFormats,
        e = c.xDateFormat,
        f = b.xAxis,
        g = f && f.options.type === 'datetime' && ha(a.key),
        c = c.headerFormat,
        f = f && f.closestPointRange,
        h
      if (g && !e) {
        if (f)
          for (h in A) {
            if (A[h] >= f || (A[h] <= A.day && a.key % A[h] > 0)) {
              e = d[h]
              break
            }
          }
        else e = d.day
        e = e || d.year
      }
      g && e && (c = c.replace('{point.key}', '{point.key:' + e + '}'))
      return Ia(c, { point: a, series: b })
    }
  }
  var oa
  $a = y.documentElement.ontouchstart !== t
  var Wa = (R.Pointer = function(a, b) {
    this.init(a, b)
  })
  Wa.prototype = {
    init: function(a, b) {
      var c = b.chart,
        d = c.events,
        e = fa ? '' : c.zoomType,
        c = a.inverted,
        f
      this.options = b
      this.chart = a
      this.zoomX = f = /x/.test(e)
      this.zoomY = e = /y/.test(e)
      this.zoomHor = (f && !c) || (e && c)
      this.zoomVert = (e && !c) || (f && c)
      this.hasZoom = f || e
      this.runChartClick = d && !!d.click
      this.pinchDown = []
      this.lastValidTouch = {}
      if (R.Tooltip && b.tooltip.enabled)
        (a.tooltip = new Mb(a, b.tooltip)), (this.followTouchMove = b.tooltip.followTouchMove)
      this.setDOMEvents()
    },
    normalize: function(a, b) {
      var c,
        d,
        a = a || window.event,
        a = Sb(a)
      if (!a.target) a.target = a.srcElement
      d = a.touches ? (a.touches.length ? a.touches.item(0) : a.changedTouches[0]) : a
      if (!b) this.chartPosition = b = Rb(this.chart.container)
      d.pageX === t
        ? ((c = v(a.x, a.clientX - b.left)), (d = a.y))
        : ((c = d.pageX - b.left), (d = d.pageY - b.top))
      return q(a, { chartX: u(c), chartY: u(d) })
    },
    getCoordinates: function(a) {
      var b = { xAxis: [], yAxis: [] }
      p(this.chart.axes, function(c) {
        b[c.isXAxis ? 'xAxis' : 'yAxis'].push({
          axis: c,
          value: c.toValue(a[c.horiz ? 'chartX' : 'chartY'])
        })
      })
      return b
    },
    getIndex: function(a) {
      var b = this.chart
      return b.inverted ? b.plotHeight + b.plotTop - a.chartY : a.chartX - b.plotLeft
    },
    runPointActions: function(a) {
      var b = this.chart,
        c = b.series,
        d = b.tooltip,
        e,
        f,
        g = b.hoverPoint,
        h = b.hoverSeries,
        i,
        j,
        k = b.chartWidth,
        l = this.getIndex(a)
      if (d && this.options.tooltip.shared && (!h || !h.noSharedTooltip)) {
        f = []
        i = c.length
        for (j = 0; j < i; j++)
          if (
            c[j].visible &&
            c[j].options.enableMouseTracking !== !1 &&
            !c[j].noSharedTooltip &&
            c[j].singularTooltips !== !0 &&
            c[j].tooltipPoints.length &&
            (e = c[j].tooltipPoints[l]) &&
            e.series
          )
            (e._dist = M(l - e.clientX)), (k = C(k, e._dist)), f.push(e)
        for (i = f.length; i--; ) f[i]._dist > k && f.splice(i, 1)
        if (f.length && f[0].clientX !== this.hoverX) d.refresh(f, a), (this.hoverX = f[0].clientX)
      }
      c = h && h.tooltipOptions.followPointer
      if (h && h.tracker && !c) {
        if ((e = h.tooltipPoints[l]) && e !== g) e.onMouseOver(a)
      } else
        d &&
          c &&
          !d.isHidden &&
          ((h = d.getAnchor([{}], a)), d.updatePosition({ plotX: h[0], plotY: h[1] }))
      if (d && !this._onDocumentMouseMove)
        (this._onDocumentMouseMove = function(a) {
          if (V[oa]) V[oa].pointer.onDocumentMouseMove(a)
        }),
          K(y, 'mousemove', this._onDocumentMouseMove)
      p(b.axes, function(b) {
        b.drawCrosshair(a, m(e, g))
      })
    },
    reset: function(a) {
      var b = this.chart,
        c = b.hoverSeries,
        d = b.hoverPoint,
        e = b.tooltip,
        f = e && e.shared ? b.hoverPoints : d
      ;(a = a && e && f) && qa(f)[0].plotX === t && (a = !1)
      if (a) e.refresh(f), d && d.setState(d.state, !0)
      else {
        if (d) d.onMouseOut()
        if (c) c.onMouseOut()
        e && e.hide()
        if (this._onDocumentMouseMove)
          W(y, 'mousemove', this._onDocumentMouseMove), (this._onDocumentMouseMove = null)
        p(b.axes, function(a) {
          a.hideCrosshair()
        })
        this.hoverX = null
      }
    },
    scaleGroups: function(a, b) {
      var c = this.chart,
        d
      p(c.series, function(e) {
        d = a || e.getPlotBox()
        e.xAxis &&
          e.xAxis.zoomEnabled &&
          (e.group.attr(d),
          e.markerGroup && (e.markerGroup.attr(d), e.markerGroup.clip(b ? c.clipRect : null)),
          e.dataLabelsGroup && e.dataLabelsGroup.attr(d))
      })
      c.clipRect.attr(b || c.clipBox)
    },
    dragStart: function(a) {
      var b = this.chart
      b.mouseIsDown = a.type
      b.cancelClick = !1
      b.mouseDownX = this.mouseDownX = a.chartX
      b.mouseDownY = this.mouseDownY = a.chartY
    },
    drag: function(a) {
      var b = this.chart,
        c = b.options.chart,
        d = a.chartX,
        e = a.chartY,
        f = this.zoomHor,
        g = this.zoomVert,
        h = b.plotLeft,
        i = b.plotTop,
        j = b.plotWidth,
        k = b.plotHeight,
        l,
        o = this.mouseDownX,
        n = this.mouseDownY
      d < h ? (d = h) : d > h + j && (d = h + j)
      e < i ? (e = i) : e > i + k && (e = i + k)
      this.hasDragged = Math.sqrt(Math.pow(o - d, 2) + Math.pow(n - e, 2))
      if (this.hasDragged > 10) {
        l = b.isInsidePlot(o - h, n - i)
        if (b.hasCartesianSeries && (this.zoomX || this.zoomY) && l && !this.selectionMarker)
          this.selectionMarker = b.renderer
            .rect(h, i, f ? 1 : j, g ? 1 : k, 0)
            .attr({ fill: c.selectionMarkerFill || 'rgba(69,114,167,0.25)', zIndex: 7 })
            .add()
        this.selectionMarker &&
          f &&
          ((d -= o), this.selectionMarker.attr({ width: M(d), x: (d > 0 ? 0 : d) + o }))
        this.selectionMarker &&
          g &&
          ((d = e - n), this.selectionMarker.attr({ height: M(d), y: (d > 0 ? 0 : d) + n }))
        l && !this.selectionMarker && c.panning && b.pan(a, c.panning)
      }
    },
    drop: function(a) {
      var b = this.chart,
        c = this.hasPinched
      if (this.selectionMarker) {
        var d = { xAxis: [], yAxis: [], originalEvent: a.originalEvent || a },
          a = this.selectionMarker,
          e = a.attr ? a.attr('x') : a.x,
          f = a.attr ? a.attr('y') : a.y,
          g = a.attr ? a.attr('width') : a.width,
          h = a.attr ? a.attr('height') : a.height,
          i
        if (this.hasDragged || c)
          p(b.axes, function(a) {
            if (a.zoomEnabled) {
              var b = a.horiz,
                c = a.toValue(b ? e : f),
                b = a.toValue(b ? e + g : f + h)
              !isNaN(c) &&
                !isNaN(b) &&
                (d[a.coll].push({ axis: a, min: C(c, b), max: v(c, b) }), (i = !0))
            }
          }),
            i &&
              D(b, 'selection', d, function(a) {
                b.zoom(q(a, c ? { animation: !1 } : null))
              })
        this.selectionMarker = this.selectionMarker.destroy()
        c && this.scaleGroups()
      }
      if (b)
        G(b.container, { cursor: b._cursor }),
          (b.cancelClick = this.hasDragged > 10),
          (b.mouseIsDown = this.hasDragged = this.hasPinched = !1),
          (this.pinchDown = [])
    },
    onContainerMouseDown: function(a) {
      a = this.normalize(a)
      a.preventDefault && a.preventDefault()
      this.dragStart(a)
    },
    onDocumentMouseUp: function(a) {
      V[oa] && V[oa].pointer.drop(a)
    },
    onDocumentMouseMove: function(a) {
      var b = this.chart,
        c = this.chartPosition,
        d = b.hoverSeries,
        a = this.normalize(a, c)
      c &&
        d &&
        !this.inClass(a.target, 'highcharts-tracker') &&
        !b.isInsidePlot(a.chartX - b.plotLeft, a.chartY - b.plotTop) &&
        this.reset()
    },
    onContainerMouseLeave: function() {
      var a = V[oa]
      if (a) a.pointer.reset(), (a.pointer.chartPosition = null)
    },
    onContainerMouseMove: function(a) {
      var b = this.chart
      oa = b.index
      a = this.normalize(a)
      b.mouseIsDown === 'mousedown' && this.drag(a)
      ;(this.inClass(a.target, 'highcharts-tracker') ||
        b.isInsidePlot(a.chartX - b.plotLeft, a.chartY - b.plotTop)) &&
        !b.openMenu &&
        this.runPointActions(a)
    },
    inClass: function(a, b) {
      for (var c; a; ) {
        if ((c = H(a, 'class')))
          if (c.indexOf(b) !== -1) return !0
          else if (c.indexOf('highcharts-container') !== -1) return !1
        a = a.parentNode
      }
    },
    onTrackerMouseOut: function(a) {
      var b = this.chart.hoverSeries,
        c = (a = a.relatedTarget || a.toElement) && a.point && a.point.series
      if (b && !b.options.stickyTracking && !this.inClass(a, 'highcharts-tooltip') && c !== b)
        b.onMouseOut()
    },
    onContainerClick: function(a) {
      var b = this.chart,
        c = b.hoverPoint,
        d = b.plotLeft,
        e = b.plotTop,
        a = this.normalize(a)
      a.cancelBubble = !0
      b.cancelClick ||
        (c && this.inClass(a.target, 'highcharts-tracker')
          ? (D(c.series, 'click', q(a, { point: c })), b.hoverPoint && c.firePointEvent('click', a))
          : (q(a, this.getCoordinates(a)),
            b.isInsidePlot(a.chartX - d, a.chartY - e) && D(b, 'click', a)))
    },
    setDOMEvents: function() {
      var a = this,
        b = a.chart.container
      b.onmousedown = function(b) {
        a.onContainerMouseDown(b)
      }
      b.onmousemove = function(b) {
        a.onContainerMouseMove(b)
      }
      b.onclick = function(b) {
        a.onContainerClick(b)
      }
      K(b, 'mouseleave', a.onContainerMouseLeave)
      ab === 1 && K(y, 'mouseup', a.onDocumentMouseUp)
      if ($a)
        (b.ontouchstart = function(b) {
          a.onContainerTouchStart(b)
        }),
          (b.ontouchmove = function(b) {
            a.onContainerTouchMove(b)
          }),
          ab === 1 && K(y, 'touchend', a.onDocumentTouchEnd)
    },
    destroy: function() {
      var a
      W(this.chart.container, 'mouseleave', this.onContainerMouseLeave)
      ab || (W(y, 'mouseup', this.onDocumentMouseUp), W(y, 'touchend', this.onDocumentTouchEnd))
      clearInterval(this.tooltipTimeout)
      for (a in this) this[a] = null
    }
  }
  q(R.Pointer.prototype, {
    pinchTranslate: function(a, b, c, d, e, f) {
      ;(this.zoomHor || this.pinchHor) && this.pinchTranslateDirection(!0, a, b, c, d, e, f)
      ;(this.zoomVert || this.pinchVert) && this.pinchTranslateDirection(!1, a, b, c, d, e, f)
    },
    pinchTranslateDirection: function(a, b, c, d, e, f, g, h) {
      var i = this.chart,
        j = a ? 'x' : 'y',
        k = a ? 'X' : 'Y',
        l = 'chart' + k,
        o = a ? 'width' : 'height',
        n = i['plot' + (a ? 'Left' : 'Top')],
        s,
        m,
        p = h || 1,
        q = i.inverted,
        x = i.bounds[a ? 'h' : 'v'],
        r = b.length === 1,
        v = b[0][l],
        u = c[0][l],
        t = !r && b[1][l],
        w = !r && c[1][l],
        y,
        c = function() {
          !r && M(v - t) > 20 && (p = h || M(u - w) / M(v - t))
          m = (n - u) / p + v
          s = i['plot' + (a ? 'Width' : 'Height')] / p
        }
      c()
      b = m
      b < x.min ? ((b = x.min), (y = !0)) : b + s > x.max && ((b = x.max - s), (y = !0))
      y ? ((u -= 0.8 * (u - g[j][0])), r || (w -= 0.8 * (w - g[j][1])), c()) : (g[j] = [u, w])
      q || ((f[j] = m - n), (f[o] = s))
      f = q ? 1 / p : p
      e[o] = s
      e[j] = b
      d[q ? (a ? 'scaleY' : 'scaleX') : 'scale' + k] = p
      d['translate' + k] = f * n + (u - f * v)
    },
    pinch: function(a) {
      var b = this,
        c = b.chart,
        d = b.pinchDown,
        e = b.followTouchMove,
        f = a.touches,
        g = f.length,
        h = b.lastValidTouch,
        i = b.hasZoom,
        j = b.selectionMarker,
        k = {},
        l =
          g === 1 &&
          ((b.inClass(a.target, 'highcharts-tracker') && c.runTrackerClick) || c.runChartClick),
        o = {}
      ;(i || e) && !l && a.preventDefault()
      Ua(f, function(a) {
        return b.normalize(a)
      })
      if (a.type === 'touchstart')
        p(f, function(a, b) {
          d[b] = { chartX: a.chartX, chartY: a.chartY }
        }),
          (h.x = [d[0].chartX, d[1] && d[1].chartX]),
          (h.y = [d[0].chartY, d[1] && d[1].chartY]),
          p(c.axes, function(a) {
            if (a.zoomEnabled) {
              var b = c.bounds[a.horiz ? 'h' : 'v'],
                d = a.minPixelPadding,
                e = a.toPixels(a.dataMin),
                f = a.toPixels(a.dataMax),
                g = C(e, f),
                e = v(e, f)
              b.min = C(a.pos, g - d)
              b.max = v(a.pos + a.len, e + d)
            }
          })
      else if (d.length) {
        if (!j) b.selectionMarker = j = q({ destroy: sa }, c.plotBox)
        b.pinchTranslate(d, f, k, j, o, h)
        b.hasPinched = i
        b.scaleGroups(k, o)
        !i && e && g === 1 && this.runPointActions(b.normalize(a))
      }
    },
    onContainerTouchStart: function(a) {
      var b = this.chart
      oa = b.index
      a.touches.length === 1
        ? ((a = this.normalize(a)),
          b.isInsidePlot(a.chartX - b.plotLeft, a.chartY - b.plotTop)
            ? (this.runPointActions(a), this.pinch(a))
            : this.reset())
        : a.touches.length === 2 && this.pinch(a)
    },
    onContainerTouchMove: function(a) {
      ;(a.touches.length === 1 || a.touches.length === 2) && this.pinch(a)
    },
    onDocumentTouchEnd: function(a) {
      V[oa] && V[oa].pointer.drop(a)
    }
  })
  if (I.PointerEvent || I.MSPointerEvent) {
    var ua = {},
      zb = !!I.PointerEvent,
      Wb = function() {
        var a,
          b = []
        b.item = function(a) {
          return this[a]
        }
        for (a in ua)
          ua.hasOwnProperty(a) &&
            b.push({ pageX: ua[a].pageX, pageY: ua[a].pageY, target: ua[a].target })
        return b
      },
      Ab = function(a, b, c, d) {
        a = a.originalEvent || a
        if ((a.pointerType === 'touch' || a.pointerType === a.MSPOINTER_TYPE_TOUCH) && V[oa])
          d(a),
            (d = V[oa].pointer),
            d[b]({ type: c, target: a.currentTarget, preventDefault: sa, touches: Wb() })
      }
    q(Wa.prototype, {
      onContainerPointerDown: function(a) {
        Ab(a, 'onContainerTouchStart', 'touchstart', function(a) {
          ua[a.pointerId] = { pageX: a.pageX, pageY: a.pageY, target: a.currentTarget }
        })
      },
      onContainerPointerMove: function(a) {
        Ab(a, 'onContainerTouchMove', 'touchmove', function(a) {
          ua[a.pointerId] = { pageX: a.pageX, pageY: a.pageY }
          if (!ua[a.pointerId].target) ua[a.pointerId].target = a.currentTarget
        })
      },
      onDocumentPointerUp: function(a) {
        Ab(a, 'onContainerTouchEnd', 'touchend', function(a) {
          delete ua[a.pointerId]
        })
      },
      batchMSEvents: function(a) {
        a(this.chart.container, zb ? 'pointerdown' : 'MSPointerDown', this.onContainerPointerDown)
        a(this.chart.container, zb ? 'pointermove' : 'MSPointerMove', this.onContainerPointerMove)
        a(y, zb ? 'pointerup' : 'MSPointerUp', this.onDocumentPointerUp)
      }
    })
    Ma(Wa.prototype, 'init', function(a, b, c) {
      a.call(this, b, c)
      ;(this.hasZoom || this.followTouchMove) &&
        G(b.container, { '-ms-touch-action': Q, 'touch-action': Q })
    })
    Ma(Wa.prototype, 'setDOMEvents', function(a) {
      a.apply(this)
      ;(this.hasZoom || this.followTouchMove) && this.batchMSEvents(K)
    })
    Ma(Wa.prototype, 'destroy', function(a) {
      this.batchMSEvents(W)
      a.call(this)
    })
  }
  var lb = (R.Legend = function(a, b) {
    this.init(a, b)
  })
  lb.prototype = {
    init: function(a, b) {
      var c = this,
        d = b.itemStyle,
        e = m(b.padding, 8),
        f = b.itemMarginTop || 0
      this.options = b
      if (b.enabled)
        (c.baseline = z(d.fontSize) + 3 + f),
          (c.itemStyle = d),
          (c.itemHiddenStyle = w(d, b.itemHiddenStyle)),
          (c.itemMarginTop = f),
          (c.padding = e),
          (c.initialItemX = e),
          (c.initialItemY = e - 5),
          (c.maxItemWidth = 0),
          (c.chart = a),
          (c.itemHeight = 0),
          (c.lastLineHeight = 0),
          (c.symbolWidth = m(b.symbolWidth, 16)),
          (c.pages = []),
          c.render(),
          K(c.chart, 'endResize', function() {
            c.positionCheckboxes()
          })
    },
    colorizeItem: function(a, b) {
      var c = this.options,
        d = a.legendItem,
        e = a.legendLine,
        f = a.legendSymbol,
        g = this.itemHiddenStyle.color,
        c = b ? c.itemStyle.color : g,
        h = b ? a.legendColor || a.color || '#CCC' : g,
        g = a.options && a.options.marker,
        i = { fill: h },
        j
      d && d.css({ fill: c, color: c })
      e && e.attr({ stroke: h })
      if (f) {
        if (g && f.isMarker)
          for (j in ((i.stroke = h), (g = a.convertAttribs(g)), g))
            (d = g[j]), d !== t && (i[j] = d)
        f.attr(i)
      }
    },
    positionItem: function(a) {
      var b = this.options,
        c = b.symbolPadding,
        b = !b.rtl,
        d = a._legendItemPos,
        e = d[0],
        d = d[1],
        f = a.checkbox
      a.legendGroup && a.legendGroup.translate(b ? e : this.legendWidth - e - 2 * c - 4, d)
      if (f) (f.x = e), (f.y = d)
    },
    destroyItem: function(a) {
      var b = a.checkbox
      p(['legendItem', 'legendLine', 'legendSymbol', 'legendGroup'], function(b) {
        a[b] && (a[b] = a[b].destroy())
      })
      b && Pa(a.checkbox)
    },
    destroy: function() {
      var a = this.group,
        b = this.box
      if (b) this.box = b.destroy()
      if (a) this.group = a.destroy()
    },
    positionCheckboxes: function(a) {
      var b = this.group.alignAttr,
        c,
        d = this.clipHeight || this.legendHeight
      if (b)
        (c = b.translateY),
          p(this.allItems, function(e) {
            var f = e.checkbox,
              g
            f &&
              ((g = c + f.y + (a || 0) + 3),
              G(f, {
                left: b.translateX + e.checkboxOffset + f.x - 20 + 'px',
                top: g + 'px',
                display: g > c - 6 && g < c + d - 6 ? '' : Q
              }))
          })
    },
    renderTitle: function() {
      var a = this.padding,
        b = this.options.title,
        c = 0
      if (b.text) {
        if (!this.title)
          this.title = this.chart.renderer
            .label(b.text, a - 3, a - 4, null, null, null, null, null, 'legend-title')
            .attr({ zIndex: 1 })
            .css(b.style)
            .add(this.group)
        a = this.title.getBBox()
        c = a.height
        this.offsetWidth = a.width
        this.contentGroup.attr({ translateY: c })
      }
      this.titleHeight = c
    },
    renderItem: function(a) {
      var b = this.chart,
        c = b.renderer,
        d = this.options,
        e = d.layout === 'horizontal',
        f = this.symbolWidth,
        g = d.symbolPadding,
        h = this.itemStyle,
        i = this.itemHiddenStyle,
        j = this.padding,
        k = e ? m(d.itemDistance, 20) : 0,
        l = !d.rtl,
        o = d.width,
        n = d.itemMarginBottom || 0,
        s = this.itemMarginTop,
        p = this.initialItemX,
        q = a.legendItem,
        r = a.series && a.series.drawLegendSymbol ? a.series : a,
        x = r.options,
        x = this.createCheckboxForItem && x && x.showCheckbox,
        t = d.useHTML
      if (!q)
        (a.legendGroup = c
          .g('legend-item')
          .attr({ zIndex: 1 })
          .add(this.scrollGroup)),
          r.drawLegendSymbol(this, a),
          (a.legendItem = q = c
            .text(
              d.labelFormat ? Ia(d.labelFormat, a) : d.labelFormatter.call(a),
              l ? f + g : -g,
              this.baseline,
              t
            )
            .css(w(a.visible ? h : i))
            .attr({ align: l ? 'left' : 'right', zIndex: 2 })
            .add(a.legendGroup)),
          this.setItemEvents && this.setItemEvents(a, q, t, h, i),
          this.colorizeItem(a, a.visible),
          x && this.createCheckboxForItem(a)
      c = q.getBBox()
      f = a.checkboxOffset = d.itemWidth || a.legendItemWidth || f + g + c.width + k + (x ? 20 : 0)
      this.itemHeight = g = u(a.legendItemHeight || c.height)
      if (e && this.itemX - p + f > (o || b.chartWidth - 2 * j - p - d.x))
        (this.itemX = p), (this.itemY += s + this.lastLineHeight + n), (this.lastLineHeight = 0)
      this.maxItemWidth = v(this.maxItemWidth, f)
      this.lastItemY = s + this.itemY + n
      this.lastLineHeight = v(g, this.lastLineHeight)
      a._legendItemPos = [this.itemX, this.itemY]
      e ? (this.itemX += f) : ((this.itemY += s + g + n), (this.lastLineHeight = g))
      this.offsetWidth = o || v((e ? this.itemX - p - k : f) + j, this.offsetWidth)
    },
    getAllItems: function() {
      var a = []
      p(this.chart.series, function(b) {
        var c = b.options
        if (m(c.showInLegend, !r(c.linkedTo) ? t : !1, !0))
          a = a.concat(b.legendItems || (c.legendType === 'point' ? b.data : b))
      })
      return a
    },
    render: function() {
      var a = this,
        b = a.chart,
        c = b.renderer,
        d = a.group,
        e,
        f,
        g,
        h,
        i = a.box,
        j = a.options,
        k = a.padding,
        l = j.borderWidth,
        o = j.backgroundColor
      a.itemX = a.initialItemX
      a.itemY = a.initialItemY
      a.offsetWidth = 0
      a.lastItemY = 0
      if (!d)
        (a.group = d = c
          .g('legend')
          .attr({ zIndex: 7 })
          .add()),
          (a.contentGroup = c
            .g()
            .attr({ zIndex: 1 })
            .add(d)),
          (a.scrollGroup = c.g().add(a.contentGroup))
      a.renderTitle()
      e = a.getAllItems()
      ob(e, function(a, b) {
        return (
          ((a.options && a.options.legendIndex) || 0) - ((b.options && b.options.legendIndex) || 0)
        )
      })
      j.reversed && e.reverse()
      a.allItems = e
      a.display = f = !!e.length
      p(e, function(b) {
        a.renderItem(b)
      })
      g = j.width || a.offsetWidth
      h = a.lastItemY + a.lastLineHeight + a.titleHeight
      h = a.handleOverflow(h)
      if (l || o) {
        g += k
        h += k
        if (i) {
          if (g > 0 && h > 0)
            i[i.isNew ? 'attr' : 'animate'](i.crisp({ width: g, height: h })), (i.isNew = !1)
        } else
          (a.box = i = c
            .rect(0, 0, g, h, j.borderRadius, l || 0)
            .attr({ stroke: j.borderColor, 'stroke-width': l || 0, fill: o || Q })
            .add(d)
            .shadow(j.shadow)),
            (i.isNew = !0)
        i[f ? 'show' : 'hide']()
      }
      a.legendWidth = g
      a.legendHeight = h
      p(e, function(b) {
        a.positionItem(b)
      })
      f && d.align(q({ width: g, height: h }, j), !0, 'spacingBox')
      b.isResizing || this.positionCheckboxes()
    },
    handleOverflow: function(a) {
      var b = this,
        c = this.chart,
        d = c.renderer,
        e = this.options,
        f = e.y,
        f = c.spacingBox.height + (e.verticalAlign === 'top' ? -f : f) - this.padding,
        g = e.maxHeight,
        h,
        i = this.clipRect,
        j = e.navigation,
        k = m(j.animation, !0),
        l = j.arrowSize || 12,
        o = this.nav,
        n = this.pages,
        s,
        q = this.allItems
      e.layout === 'horizontal' && (f /= 2)
      g && (f = C(f, g))
      n.length = 0
      if (a > f && !e.useHTML) {
        this.clipHeight = h = f - 20 - this.titleHeight - this.padding
        this.currentPage = m(this.currentPage, 1)
        this.fullHeight = a
        p(q, function(a, b) {
          var c = a._legendItemPos[1],
            d = u(a.legendItem.getBBox().height),
            e = n.length
          if (!e || (c - n[e - 1] > h && (s || c) !== n[e - 1])) n.push(s || c), e++
          b === q.length - 1 && c + d - n[e - 1] > h && n.push(c)
          c !== s && (s = c)
        })
        if (!i) (i = b.clipRect = d.clipRect(0, this.padding, 9999, 0)), b.contentGroup.clip(i)
        i.attr({ height: h })
        if (!o)
          (this.nav = o = d
            .g()
            .attr({ zIndex: 1 })
            .add(this.group)),
            (this.up = d
              .symbol('triangle', 0, 0, l, l)
              .on('click', function() {
                b.scroll(-1, k)
              })
              .add(o)),
            (this.pager = d
              .text('', 15, 10)
              .css(j.style)
              .add(o)),
            (this.down = d
              .symbol('triangle-down', 0, 0, l, l)
              .on('click', function() {
                b.scroll(1, k)
              })
              .add(o))
        b.scroll(0)
        a = f
      } else if (o)
        i.attr({ height: c.chartHeight }),
          o.hide(),
          this.scrollGroup.attr({ translateY: 1 }),
          (this.clipHeight = 0)
      return a
    },
    scroll: function(a, b) {
      var c = this.pages,
        d = c.length,
        e = this.currentPage + a,
        f = this.clipHeight,
        g = this.options.navigation,
        h = g.activeColor,
        g = g.inactiveColor,
        i = this.pager,
        j = this.padding
      e > d && (e = d)
      if (e > 0)
        b !== t && Qa(b, this.chart),
          this.nav.attr({
            translateX: j,
            translateY: f + this.padding + 7 + this.titleHeight,
            visibility: 'visible'
          }),
          this.up.attr({ fill: e === 1 ? g : h }).css({ cursor: e === 1 ? 'default' : 'pointer' }),
          i.attr({ text: e + '/' + d }),
          this.down
            .attr({ x: 18 + this.pager.getBBox().width, fill: e === d ? g : h })
            .css({ cursor: e === d ? 'default' : 'pointer' }),
          (c = -c[e - 1] + this.initialItemY),
          this.scrollGroup.animate({ translateY: c }),
          (this.currentPage = e),
          this.positionCheckboxes(c)
    }
  }
  N = R.LegendSymbolMixin = {
    drawRectangle: function(a, b) {
      var c = a.options.symbolHeight || 12
      b.legendSymbol = this.chart.renderer
        .rect(0, a.baseline - 5 - c / 2, a.symbolWidth, c, a.options.symbolRadius || 0)
        .attr({ zIndex: 3 })
        .add(b.legendGroup)
    },
    drawLineMarker: function(a) {
      var b = this.options,
        c = b.marker,
        d
      d = a.symbolWidth
      var e = this.chart.renderer,
        f = this.legendGroup,
        a = a.baseline - u(e.fontMetrics(a.options.itemStyle.fontSize).b * 0.3),
        g
      if (b.lineWidth) {
        g = { 'stroke-width': b.lineWidth }
        if (b.dashStyle) g.dashstyle = b.dashStyle
        this.legendLine = e
          .path(['M', 0, a, 'L', d, a])
          .attr(g)
          .add(f)
      }
      if (c && c.enabled !== !1)
        (b = c.radius),
          (this.legendSymbol = d = e.symbol(this.symbol, d / 2 - b, a - b, 2 * b, 2 * b).add(f)),
          (d.isMarker = !0)
    }
  }
  ;(/Trident\/7\.0/.test(wa) || Ta) &&
    Ma(lb.prototype, 'positionItem', function(a, b) {
      var c = this,
        d = function() {
          b._legendItemPos && a.call(c, b)
        }
      d()
      setTimeout(d)
    })
  Ya.prototype = {
    init: function(a, b) {
      var c,
        d = a.series
      a.series = null
      c = w(E, a)
      c.series = a.series = d
      this.userOptions = a
      d = c.chart
      this.margin = this.splashArray('margin', d)
      this.spacing = this.splashArray('spacing', d)
      var e = d.events
      this.bounds = { h: {}, v: {} }
      this.callback = b
      this.isResizing = 0
      this.options = c
      this.axes = []
      this.series = []
      this.hasCartesianSeries = d.showAxes
      var f = this,
        g
      f.index = V.length
      V.push(f)
      ab++
      d.reflow !== !1 &&
        K(f, 'load', function() {
          f.initReflow()
        })
      if (e) for (g in e) K(f, g, e[g])
      f.xAxis = []
      f.yAxis = []
      f.animation = fa ? !1 : m(d.animation, !0)
      f.pointCount = 0
      f.counters = new Bb()
      f.firstRender()
    },
    initSeries: function(a) {
      var b = this.options.chart
      ;(b = F[a.type || b.type || b.defaultSeriesType]) || ra(17, !0)
      b = new b()
      b.init(this, a)
      return b
    },
    isInsidePlot: function(a, b, c) {
      var d = c ? b : a,
        a = c ? a : b
      return d >= 0 && d <= this.plotWidth && a >= 0 && a <= this.plotHeight
    },
    adjustTickAmounts: function() {
      this.options.chart.alignTicks !== !1 &&
        p(this.axes, function(a) {
          a.adjustTickAmount()
        })
      this.maxTicks = null
    },
    redraw: function(a) {
      var b = this.axes,
        c = this.series,
        d = this.pointer,
        e = this.legend,
        f = this.isDirtyLegend,
        g,
        h,
        i = this.isDirtyBox,
        j = c.length,
        k = j,
        l = this.renderer,
        o = l.isHidden(),
        n = []
      Qa(a, this)
      o && this.cloneRenderTo()
      for (this.layOutTitles(); k--; )
        if (((a = c[k]), a.options.stacking && ((g = !0), a.isDirty))) {
          h = !0
          break
        }
      if (h) for (k = j; k--; ) if (((a = c[k]), a.options.stacking)) a.isDirty = !0
      p(c, function(a) {
        a.isDirty && a.options.legendType === 'point' && (f = !0)
      })
      if (f && e.options.enabled) e.render(), (this.isDirtyLegend = !1)
      g && this.getStacks()
      if (this.hasCartesianSeries) {
        if (!this.isResizing)
          (this.maxTicks = null),
            p(b, function(a) {
              a.setScale()
            })
        this.adjustTickAmounts()
        this.getMargins()
        p(b, function(a) {
          a.isDirty && (i = !0)
        })
        p(b, function(a) {
          if (a.isDirtyExtremes)
            (a.isDirtyExtremes = !1),
              n.push(function() {
                D(a, 'afterSetExtremes', q(a.eventArgs, a.getExtremes()))
                delete a.eventArgs
              })
          ;(i || g) && a.redraw()
        })
      }
      i && this.drawChartBox()
      p(c, function(a) {
        a.isDirty && a.visible && (!a.isCartesian || a.xAxis) && a.redraw()
      })
      d && d.reset(!0)
      l.draw()
      D(this, 'redraw')
      o && this.cloneRenderTo(!0)
      p(n, function(a) {
        a.call()
      })
    },
    get: function(a) {
      var b = this.axes,
        c = this.series,
        d,
        e
      for (d = 0; d < b.length; d++) if (b[d].options.id === a) return b[d]
      for (d = 0; d < c.length; d++) if (c[d].options.id === a) return c[d]
      for (d = 0; d < c.length; d++) {
        e = c[d].points || []
        for (b = 0; b < e.length; b++) if (e[b].id === a) return e[b]
      }
      return null
    },
    getAxes: function() {
      var a = this,
        b = this.options,
        c = (b.xAxis = qa(b.xAxis || {})),
        b = (b.yAxis = qa(b.yAxis || {}))
      p(c, function(a, b) {
        a.index = b
        a.isX = !0
      })
      p(b, function(a, b) {
        a.index = b
      })
      c = c.concat(b)
      p(c, function(b) {
        new la(a, b)
      })
      a.adjustTickAmounts()
    },
    getSelectedPoints: function() {
      var a = []
      p(this.series, function(b) {
        a = a.concat(
          vb(b.points || [], function(a) {
            return a.selected
          })
        )
      })
      return a
    },
    getSelectedSeries: function() {
      return vb(this.series, function(a) {
        return a.selected
      })
    },
    getStacks: function() {
      var a = this
      p(a.yAxis, function(a) {
        if (a.stacks && a.hasVisibleSeries) a.oldStacks = a.stacks
      })
      p(a.series, function(b) {
        if (b.options.stacking && (b.visible === !0 || a.options.chart.ignoreHiddenSeries === !1))
          b.stackKey = b.type + m(b.options.stack, '')
      })
    },
    setTitle: function(a, b, c) {
      var g
      var d = this,
        e = d.options,
        f
      f = e.title = w(e.title, a)
      ;(g = e.subtitle = w(e.subtitle, b)), (e = g)
      p([['title', a, f], ['subtitle', b, e]], function(a) {
        var b = a[0],
          c = d[b],
          e = a[1],
          a = a[2]
        c && e && (d[b] = c = c.destroy())
        a &&
          a.text &&
          !c &&
          (d[b] = d.renderer
            .text(a.text, 0, 0, a.useHTML)
            .attr({ align: a.align, class: 'highcharts-' + b, zIndex: a.zIndex || 4 })
            .css(a.style)
            .add())
      })
      d.layOutTitles(c)
    },
    layOutTitles: function(a) {
      var b = 0,
        c = this.title,
        d = this.subtitle,
        e = this.options,
        f = e.title,
        e = e.subtitle,
        g = this.spacingBox.width - 44
      if (
        c &&
        (c.css({ width: (f.width || g) + 'px' }).align(q({ y: 15 }, f), !1, 'spacingBox'),
        !f.floating && !f.verticalAlign)
      )
        b = c.getBBox().height
      d &&
        (d.css({ width: (e.width || g) + 'px' }).align(q({ y: b + f.margin }, e), !1, 'spacingBox'),
        !e.floating && !e.verticalAlign && (b = Ka(b + d.getBBox().height)))
      c = this.titleOffset !== b
      this.titleOffset = b
      if (!this.isDirtyBox && c)
        (this.isDirtyBox = c), this.hasRendered && m(a, !0) && this.isDirtyBox && this.redraw()
    },
    getChartSize: function() {
      var a = this.options.chart,
        b = a.width,
        a = a.height,
        c = this.renderToClone || this.renderTo
      if (!r(b)) this.containerWidth = jb(c, 'width')
      if (!r(a)) this.containerHeight = jb(c, 'height')
      this.chartWidth = v(0, b || this.containerWidth || 600)
      this.chartHeight = v(0, m(a, this.containerHeight > 19 ? this.containerHeight : 400))
    },
    cloneRenderTo: function(a) {
      var b = this.renderToClone,
        c = this.container
      a
        ? b && (this.renderTo.appendChild(c), Pa(b), delete this.renderToClone)
        : (c && c.parentNode === this.renderTo && this.renderTo.removeChild(c),
          (this.renderToClone = b = this.renderTo.cloneNode(0)),
          G(b, { position: 'absolute', top: '-9999px', display: 'block' }),
          b.style.setProperty && b.style.setProperty('display', 'block', 'important'),
          y.body.appendChild(b),
          c && b.appendChild(c))
    },
    getContainer: function() {
      var a,
        b = this.options.chart,
        c,
        d,
        e
      this.renderTo = a = b.renderTo
      e = 'highcharts-' + tb++
      if (Fa(a)) this.renderTo = a = y.getElementById(a)
      a || ra(13, !0)
      c = z(H(a, 'data-highcharts-chart'))
      !isNaN(c) && V[c] && V[c].hasRendered && V[c].destroy()
      H(a, 'data-highcharts-chart', this.index)
      a.innerHTML = ''
      !b.skipClone && !a.offsetWidth && this.cloneRenderTo()
      this.getChartSize()
      c = this.chartWidth
      d = this.chartHeight
      this.container = a = Y(
        Ja,
        { className: 'highcharts-container' + (b.className ? ' ' + b.className : ''), id: e },
        q(
          {
            position: 'relative',
            overflow: 'hidden',
            width: c + 'px',
            height: d + 'px',
            textAlign: 'left',
            lineHeight: 'normal',
            zIndex: 0,
            '-webkit-tap-highlight-color': 'rgba(0,0,0,0)'
          },
          b.style
        ),
        this.renderToClone || a
      )
      this._cursor = a.style.cursor
      this.renderer = b.forExport ? new ta(a, c, d, b.style, !0) : new Za(a, c, d, b.style)
      fa && this.renderer.create(this, a, c, d)
    },
    getMargins: function() {
      var a = this.spacing,
        b,
        c = this.legend,
        d = this.margin,
        e = this.options.legend,
        f = m(e.margin, 20),
        g = e.x,
        h = e.y,
        i = e.align,
        j = e.verticalAlign,
        k = this.titleOffset
      this.resetMargins()
      b = this.axisOffset
      if (k && !r(d[0])) this.plotTop = v(this.plotTop, k + this.options.title.margin + a[0])
      if (c.display && !e.floating)
        if (i === 'right') {
          if (!r(d[1])) this.marginRight = v(this.marginRight, c.legendWidth - g + f + a[1])
        } else if (i === 'left') {
          if (!r(d[3])) this.plotLeft = v(this.plotLeft, c.legendWidth + g + f + a[3])
        } else if (j === 'top') {
          if (!r(d[0])) this.plotTop = v(this.plotTop, c.legendHeight + h + f + a[0])
        } else if (j === 'bottom' && !r(d[2]))
          this.marginBottom = v(this.marginBottom, c.legendHeight - h + f + a[2])
      this.extraBottomMargin && (this.marginBottom += this.extraBottomMargin)
      this.extraTopMargin && (this.plotTop += this.extraTopMargin)
      this.hasCartesianSeries &&
        p(this.axes, function(a) {
          a.getOffset()
        })
      r(d[3]) || (this.plotLeft += b[3])
      r(d[0]) || (this.plotTop += b[0])
      r(d[2]) || (this.marginBottom += b[2])
      r(d[1]) || (this.marginRight += b[1])
      this.setChartSize()
    },
    reflow: function(a) {
      var b = this,
        c = b.options.chart,
        d = b.renderTo,
        e = c.width || jb(d, 'width'),
        f = c.height || jb(d, 'height'),
        c = a ? a.target : I,
        d = function() {
          if (b.container) b.setSize(e, f, !1), (b.hasUserSize = null)
        }
      if (!b.hasUserSize && e && f && (c === I || c === y)) {
        if (e !== b.containerWidth || f !== b.containerHeight)
          clearTimeout(b.reflowTimeout), a ? (b.reflowTimeout = setTimeout(d, 100)) : d()
        b.containerWidth = e
        b.containerHeight = f
      }
    },
    initReflow: function() {
      var a = this,
        b = function(b) {
          a.reflow(b)
        }
      K(I, 'resize', b)
      K(a, 'destroy', function() {
        W(I, 'resize', b)
      })
    },
    setSize: function(a, b, c) {
      var d = this,
        e,
        f,
        g
      d.isResizing += 1
      g = function() {
        d &&
          D(d, 'endResize', null, function() {
            d.isResizing -= 1
          })
      }
      Qa(c, d)
      d.oldChartHeight = d.chartHeight
      d.oldChartWidth = d.chartWidth
      if (r(a)) (d.chartWidth = e = v(0, u(a))), (d.hasUserSize = !!e)
      if (r(b)) d.chartHeight = f = v(0, u(b))
      ;(va ? kb : G)(d.container, { width: e + 'px', height: f + 'px' }, va)
      d.setChartSize(!0)
      d.renderer.setSize(e, f, c)
      d.maxTicks = null
      p(d.axes, function(a) {
        a.isDirty = !0
        a.setScale()
      })
      p(d.series, function(a) {
        a.isDirty = !0
      })
      d.isDirtyLegend = !0
      d.isDirtyBox = !0
      d.layOutTitles()
      d.getMargins()
      d.redraw(c)
      d.oldChartHeight = null
      D(d, 'resize')
      va === !1 ? g() : setTimeout(g, (va && va.duration) || 500)
    },
    setChartSize: function(a) {
      var b = this.inverted,
        c = this.renderer,
        d = this.chartWidth,
        e = this.chartHeight,
        f = this.options.chart,
        g = this.spacing,
        h = this.clipOffset,
        i,
        j,
        k,
        l
      this.plotLeft = i = u(this.plotLeft)
      this.plotTop = j = u(this.plotTop)
      this.plotWidth = k = v(0, u(d - i - this.marginRight))
      this.plotHeight = l = v(0, u(e - j - this.marginBottom))
      this.plotSizeX = b ? l : k
      this.plotSizeY = b ? k : l
      this.plotBorderWidth = f.plotBorderWidth || 0
      this.spacingBox = c.spacingBox = {
        x: g[3],
        y: g[0],
        width: d - g[3] - g[1],
        height: e - g[0] - g[2]
      }
      this.plotBox = c.plotBox = { x: i, y: j, width: k, height: l }
      d = 2 * T(this.plotBorderWidth / 2)
      b = Ka(v(d, h[3]) / 2)
      c = Ka(v(d, h[0]) / 2)
      this.clipBox = {
        x: b,
        y: c,
        width: T(this.plotSizeX - v(d, h[1]) / 2 - b),
        height: T(this.plotSizeY - v(d, h[2]) / 2 - c)
      }
      a ||
        p(this.axes, function(a) {
          a.setAxisSize()
          a.setAxisTranslation()
        })
    },
    resetMargins: function() {
      var a = this.spacing,
        b = this.margin
      this.plotTop = m(b[0], a[0])
      this.marginRight = m(b[1], a[1])
      this.marginBottom = m(b[2], a[2])
      this.plotLeft = m(b[3], a[3])
      this.axisOffset = [0, 0, 0, 0]
      this.clipOffset = [0, 0, 0, 0]
    },
    drawChartBox: function() {
      var a = this.options.chart,
        b = this.renderer,
        c = this.chartWidth,
        d = this.chartHeight,
        e = this.chartBackground,
        f = this.plotBackground,
        g = this.plotBorder,
        h = this.plotBGImage,
        i = a.borderWidth || 0,
        j = a.backgroundColor,
        k = a.plotBackgroundColor,
        l = a.plotBackgroundImage,
        o = a.plotBorderWidth || 0,
        n,
        s = this.plotLeft,
        m = this.plotTop,
        p = this.plotWidth,
        q = this.plotHeight,
        r = this.plotBox,
        v = this.clipRect,
        u = this.clipBox
      n = i + (a.shadow ? 8 : 0)
      if (i || j)
        if (e) e.animate(e.crisp({ width: c - n, height: d - n }))
        else {
          e = { fill: j || Q }
          if (i) (e.stroke = a.borderColor), (e['stroke-width'] = i)
          this.chartBackground = b
            .rect(n / 2, n / 2, c - n, d - n, a.borderRadius, i)
            .attr(e)
            .addClass('highcharts-background')
            .add()
            .shadow(a.shadow)
        }
      if (k)
        f
          ? f.animate(r)
          : (this.plotBackground = b
              .rect(s, m, p, q, 0)
              .attr({ fill: k })
              .add()
              .shadow(a.plotShadow))
      if (l) h ? h.animate(r) : (this.plotBGImage = b.image(l, s, m, p, q).add())
      v ? v.animate({ width: u.width, height: u.height }) : (this.clipRect = b.clipRect(u))
      if (o)
        g
          ? g.animate(g.crisp({ x: s, y: m, width: p, height: q }))
          : (this.plotBorder = b
              .rect(s, m, p, q, 0, -o)
              .attr({ stroke: a.plotBorderColor, 'stroke-width': o, fill: Q, zIndex: 1 })
              .add())
      this.isDirtyBox = !1
    },
    propFromSeries: function() {
      var a = this,
        b = a.options.chart,
        c,
        d = a.options.series,
        e,
        f
      p(['inverted', 'angular', 'polar'], function(g) {
        c = F[b.type || b.defaultSeriesType]
        f = a[g] || b[g] || (c && c.prototype[g])
        for (e = d && d.length; !f && e--; ) (c = F[d[e].type]) && c.prototype[g] && (f = !0)
        a[g] = f
      })
    },
    linkSeries: function() {
      var a = this,
        b = a.series
      p(b, function(a) {
        a.linkedSeries.length = 0
      })
      p(b, function(b) {
        var d = b.options.linkedTo
        if (Fa(d) && (d = d === ':previous' ? a.series[b.index - 1] : a.get(d)))
          d.linkedSeries.push(b), (b.linkedParent = d)
      })
    },
    renderSeries: function() {
      p(this.series, function(a) {
        a.translate()
        a.setTooltipPoints && a.setTooltipPoints()
        a.render()
      })
    },
    render: function() {
      var a = this,
        b = a.axes,
        c = a.renderer,
        d = a.options,
        e = d.labels,
        f = d.credits,
        g
      a.setTitle()
      a.legend = new lb(a, d.legend)
      a.getStacks()
      p(b, function(a) {
        a.setScale()
      })
      a.getMargins()
      a.maxTicks = null
      p(b, function(a) {
        a.setTickPositions(!0)
        a.setMaxTicks()
      })
      a.adjustTickAmounts()
      a.getMargins()
      a.drawChartBox()
      a.hasCartesianSeries &&
        p(b, function(a) {
          a.render()
        })
      if (!a.seriesGroup)
        a.seriesGroup = c
          .g('series-group')
          .attr({ zIndex: 3 })
          .add()
      a.renderSeries()
      e.items &&
        p(e.items, function(b) {
          var d = q(e.style, b.style),
            f = z(d.left) + a.plotLeft,
            g = z(d.top) + a.plotTop + 12
          delete d.left
          delete d.top
          c.text(b.html, f, g)
            .attr({ zIndex: 2 })
            .css(d)
            .add()
        })
      if (f.enabled && !a.credits)
        (g = f.href),
          (a.credits = c
            .text(f.text, 0, 0)
            .on('click', function() {
              if (g) location.href = g
            })
            .attr({ align: f.position.align, zIndex: 8 })
            .css(f.style)
            .add()
            .align(f.position))
      a.hasRendered = !0
    },
    destroy: function() {
      var a = this,
        b = a.axes,
        c = a.series,
        d = a.container,
        e,
        f = d && d.parentNode
      D(a, 'destroy')
      V[a.index] = t
      ab--
      a.renderTo.removeAttribute('data-highcharts-chart')
      W(a)
      for (e = b.length; e--; ) b[e] = b[e].destroy()
      for (e = c.length; e--; ) c[e] = c[e].destroy()
      p(
        'title,subtitle,chartBackground,plotBackground,plotBGImage,plotBorder,seriesGroup,clipRect,credits,pointer,scroller,rangeSelector,legend,resetZoomButton,tooltip,renderer'.split(
          ','
        ),
        function(b) {
          var c = a[b]
          c && c.destroy && (a[b] = c.destroy())
        }
      )
      if (d) (d.innerHTML = ''), W(d), f && Pa(d)
      for (e in a) delete a[e]
    },
    isReadyToRender: function() {
      var a = this
      return (!aa && I == I.top && y.readyState !== 'complete') || (fa && !I.canvg)
        ? (fa
            ? Lb.push(function() {
                a.firstRender()
              }, a.options.global.canvasToolsURL)
            : y.attachEvent('onreadystatechange', function() {
                y.detachEvent('onreadystatechange', a.firstRender)
                y.readyState === 'complete' && a.firstRender()
              }),
          !1)
        : !0
    },
    firstRender: function() {
      var a = this,
        b = a.options,
        c = a.callback
      if (a.isReadyToRender()) {
        a.getContainer()
        D(a, 'init')
        a.resetMargins()
        a.setChartSize()
        a.propFromSeries()
        a.getAxes()
        p(b.series || [], function(b) {
          a.initSeries(b)
        })
        a.linkSeries()
        D(a, 'beforeRender')
        if (R.Pointer) a.pointer = new Wa(a, b)
        a.render()
        a.renderer.draw()
        c && c.apply(a, [a])
        p(a.callbacks, function(b) {
          b.apply(a, [a])
        })
        a.cloneRenderTo(!0)
        D(a, 'load')
      }
    },
    splashArray: function(a, b) {
      var c = b[a],
        c = ca(c) ? c : [c, c, c, c]
      return [
        m(b[a + 'Top'], c[0]),
        m(b[a + 'Right'], c[1]),
        m(b[a + 'Bottom'], c[2]),
        m(b[a + 'Left'], c[3])
      ]
    }
  }
  Ya.prototype.callbacks = []
  X = R.CenteredSeriesMixin = {
    getCenter: function() {
      var a = this.options,
        b = this.chart,
        c = 2 * (a.slicedOffset || 0),
        d,
        e = b.plotWidth - 2 * c,
        f = b.plotHeight - 2 * c,
        b = a.center,
        a = [m(b[0], '50%'), m(b[1], '50%'), a.size || '100%', a.innerSize || 0],
        g = C(e, f),
        h
      return Ua(a, function(a, b) {
        h = /%$/.test(a)
        d = b < 2 || (b === 2 && h)
        return (h ? ([e, f, g, g][b] * z(a)) / 100 : a) + (d ? c : 0)
      })
    }
  }
  var Ea = function() {}
  Ea.prototype = {
    init: function(a, b, c) {
      this.series = a
      this.applyOptions(b, c)
      this.pointAttr = {}
      if (
        a.options.colorByPoint &&
        ((b = a.options.colors || a.chart.options.colors),
        (this.color = this.color || b[a.colorCounter++]),
        a.colorCounter === b.length)
      )
        a.colorCounter = 0
      a.chart.pointCount++
      return this
    },
    applyOptions: function(a, b) {
      var c = this.series,
        d = c.pointValKey,
        a = Ea.prototype.optionsToObject.call(this, a)
      q(this, a)
      this.options = this.options ? q(this.options, a) : a
      if (d) this.y = this[d]
      if (this.x === t && c) this.x = b === t ? c.autoIncrement() : b
      return this
    },
    optionsToObject: function(a) {
      var b = {},
        c = this.series,
        d = c.pointArrayMap || ['y'],
        e = d.length,
        f = 0,
        g = 0
      if (typeof a === 'number' || a === null) b[d[0]] = a
      else if (La(a)) {
        if (a.length > e) {
          c = typeof a[0]
          if (c === 'string') b.name = a[0]
          else if (c === 'number') b.x = a[0]
          f++
        }
        for (; g < e; ) b[d[g++]] = a[f++]
      } else if (typeof a === 'object') {
        b = a
        if (a.dataLabels) c._hasPointLabels = !0
        if (a.marker) c._hasPointMarkers = !0
      }
      return b
    },
    destroy: function() {
      var a = this.series.chart,
        b = a.hoverPoints,
        c
      a.pointCount--
      if (b && (this.setState(), ja(b, this), !b.length)) a.hoverPoints = null
      if (this === a.hoverPoint) this.onMouseOut()
      if (this.graphic || this.dataLabel) W(this), this.destroyElements()
      this.legendItem && a.legend.destroyItem(this)
      for (c in this) this[c] = null
    },
    destroyElements: function() {
      for (
        var a = 'graphic,dataLabel,dataLabelUpper,group,connector,shadowGroup'.split(','), b, c = 6;
        c--;

      )
        (b = a[c]), this[b] && (this[b] = this[b].destroy())
    },
    getLabelConfig: function() {
      return {
        x: this.category,
        y: this.y,
        key: this.name || this.category,
        series: this.series,
        point: this,
        percentage: this.percentage,
        total: this.total || this.stackTotal
      }
    },
    tooltipFormatter: function(a) {
      var b = this.series,
        c = b.tooltipOptions,
        d = m(c.valueDecimals, ''),
        e = c.valuePrefix || '',
        f = c.valueSuffix || ''
      p(b.pointArrayMap || ['y'], function(b) {
        b = '{point.' + b
        if (e || f) a = a.replace(b + '}', e + b + '}' + f)
        a = a.replace(b + '}', b + ':,.' + d + 'f}')
      })
      return Ia(a, { point: this, series: this.series })
    },
    firePointEvent: function(a, b, c) {
      var d = this,
        e = this.series.options
      ;(e.point.events[a] || (d.options && d.options.events && d.options.events[a])) &&
        this.importEvents()
      a === 'click' &&
        e.allowPointSelect &&
        (c = function(a) {
          d.select(null, a.ctrlKey || a.metaKey || a.shiftKey)
        })
      D(this, a, b, c)
    }
  }
  var O = function() {}
  O.prototype = {
    isCartesian: !0,
    type: 'line',
    pointClass: Ea,
    sorted: !0,
    requireSorting: !0,
    pointAttrToOptions: {
      stroke: 'lineColor',
      'stroke-width': 'lineWidth',
      fill: 'fillColor',
      r: 'radius'
    },
    axisTypes: ['xAxis', 'yAxis'],
    colorCounter: 0,
    parallelArrays: ['x', 'y'],
    init: function(a, b) {
      var c = this,
        d,
        e,
        f = a.series,
        g = function(a, b) {
          return m(a.options.index, a._i) - m(b.options.index, b._i)
        }
      c.chart = a
      c.options = b = c.setOptions(b)
      c.linkedSeries = []
      c.bindAxes()
      q(c, {
        name: b.name,
        state: '',
        pointAttr: {},
        visible: b.visible !== !1,
        selected: b.selected === !0
      })
      if (fa) b.animation = !1
      e = b.events
      for (d in e) K(c, d, e[d])
      if (
        (e && e.click) ||
        (b.point && b.point.events && b.point.events.click) ||
        b.allowPointSelect
      )
        a.runTrackerClick = !0
      c.getColor()
      c.getSymbol()
      p(c.parallelArrays, function(a) {
        c[a + 'Data'] = []
      })
      c.setData(b.data, !1)
      if (c.isCartesian) a.hasCartesianSeries = !0
      f.push(c)
      c._i = f.length - 1
      ob(f, g)
      this.yAxis && ob(this.yAxis.series, g)
      p(f, function(a, b) {
        a.index = b
        a.name = a.name || 'Series ' + (b + 1)
      })
    },
    bindAxes: function() {
      var a = this,
        b = a.options,
        c = a.chart,
        d
      p(a.axisTypes || [], function(e) {
        p(c[e], function(c) {
          d = c.options
          if (b[e] === d.index || (b[e] !== t && b[e] === d.id) || (b[e] === t && d.index === 0))
            c.series.push(a), (a[e] = c), (c.isDirty = !0)
        })
        !a[e] && a.optionalAxis !== e && ra(18, !0)
      })
    },
    updateParallelArrays: function(a, b) {
      var c = a.series,
        d = arguments
      p(
        c.parallelArrays,
        typeof b === 'number'
          ? function(d) {
              var f = d === 'y' && c.toYData ? c.toYData(a) : a[d]
              c[d + 'Data'][b] = f
            }
          : function(a) {
              Array.prototype[b].apply(c[a + 'Data'], Array.prototype.slice.call(d, 2))
            }
      )
    },
    autoIncrement: function() {
      var a = this.options,
        b = this.xIncrement,
        b = m(b, a.pointStart, 0)
      this.pointInterval = m(this.pointInterval, a.pointInterval, 1)
      this.xIncrement = b + this.pointInterval
      return b
    },
    getSegments: function() {
      var a = -1,
        b = [],
        c,
        d = this.points,
        e = d.length
      if (e)
        if (this.options.connectNulls) {
          for (c = e; c--; ) d[c].y === null && d.splice(c, 1)
          d.length && (b = [d])
        } else
          p(d, function(c, g) {
            c.y === null
              ? (g > a + 1 && b.push(d.slice(a + 1, g)), (a = g))
              : g === e - 1 && b.push(d.slice(a + 1, g + 1))
          })
      this.segments = b
    },
    setOptions: function(a) {
      var b = this.chart,
        c = b.options.plotOptions,
        b = b.userOptions || {},
        d = b.plotOptions || {},
        e = c[this.type]
      this.userOptions = a
      c = w(e, c.series, a)
      this.tooltipOptions = w(
        E.tooltip,
        E.plotOptions[this.type].tooltip,
        b.tooltip,
        d.series && d.series.tooltip,
        d[this.type] && d[this.type].tooltip,
        a.tooltip
      )
      e.marker === null && delete c.marker
      return c
    },
    getColor: function() {
      var a = this.options,
        b = this.userOptions,
        c = this.chart.options.colors,
        d = this.chart.counters,
        e
      e = a.color || ba[this.type].color
      if (!e && !a.colorByPoint)
        r(b._colorIndex) ? (a = b._colorIndex) : ((b._colorIndex = d.color), (a = d.color++)),
          (e = c[a])
      this.color = e
      d.wrapColor(c.length)
    },
    getSymbol: function() {
      var a = this.userOptions,
        b = this.options.marker,
        c = this.chart,
        d = c.options.symbols,
        c = c.counters
      this.symbol = b.symbol
      if (!this.symbol)
        r(a._symbolIndex) ? (a = a._symbolIndex) : ((a._symbolIndex = c.symbol), (a = c.symbol++)),
          (this.symbol = d[a])
      if (/^url/.test(this.symbol)) b.radius = 0
      c.wrapSymbol(d.length)
    },
    drawLegendSymbol: N.drawLineMarker,
    setData: function(a, b, c, d) {
      var e = this,
        f = e.points,
        g = (f && f.length) || 0,
        h,
        i = e.options,
        j = e.chart,
        k = null,
        l = e.xAxis,
        o = l && !!l.categories,
        n = e.tooltipPoints,
        s = i.turboThreshold,
        q = this.xData,
        r = this.yData,
        v = (h = e.pointArrayMap) && h.length,
        a = a || []
      h = a.length
      b = m(b, !0)
      if (d !== !1 && h && g === h && !e.cropped && !e.hasGroupedData)
        p(a, function(a, b) {
          f[b].update(a, !1)
        })
      else {
        e.xIncrement = null
        e.pointRange = o ? 1 : i.pointRange
        e.colorCounter = 0
        p(this.parallelArrays, function(a) {
          e[a + 'Data'].length = 0
        })
        if (s && h > s) {
          for (c = 0; k === null && c < h; ) (k = a[c]), c++
          if (ha(k)) {
            o = m(i.pointStart, 0)
            i = m(i.pointInterval, 1)
            for (c = 0; c < h; c++) (q[c] = o), (r[c] = a[c]), (o += i)
            e.xIncrement = o
          } else if (La(k))
            if (v) for (c = 0; c < h; c++) (i = a[c]), (q[c] = i[0]), (r[c] = i.slice(1, v + 1))
            else for (c = 0; c < h; c++) (i = a[c]), (q[c] = i[0]), (r[c] = i[1])
          else ra(12)
        } else
          for (c = 0; c < h; c++)
            if (
              a[c] !== t &&
              ((i = { series: e }),
              e.pointClass.prototype.applyOptions.apply(i, [a[c]]),
              e.updateParallelArrays(i, c),
              o && i.name)
            )
              l.names[i.x] = i.name
        Fa(r[0]) && ra(14, !0)
        e.data = []
        e.options.data = a
        for (c = g; c--; ) f[c] && f[c].destroy && f[c].destroy()
        if (n) n.length = 0
        if (l) l.minRange = l.userMinRange
        e.isDirty = e.isDirtyData = j.isDirtyBox = !0
        c = !1
      }
      b && j.redraw(c)
    },
    processData: function(a) {
      var b = this.xData,
        c = this.yData,
        d = b.length,
        e
      e = 0
      var f,
        g,
        h = this.xAxis,
        i = this.options,
        j = i.cropThreshold,
        k = 0,
        l = this.isCartesian,
        o,
        n
      if (l && !this.isDirty && !h.isDirty && !this.yAxis.isDirty && !a) return !1
      if (l && this.sorted && (!j || d > j || this.forceCrop))
        if (((o = h.min), (n = h.max), b[d - 1] < o || b[0] > n)) (b = []), (c = [])
        else if (b[0] < o || b[d - 1] > n)
          (e = this.cropData(this.xData, this.yData, o, n)),
            (b = e.xData),
            (c = e.yData),
            (e = e.start),
            (f = !0),
            (k = b.length)
      for (d = b.length - 1; d >= 0; d--)
        (a = b[d] - b[d - 1]),
          !f && b[d] > o && b[d] < n && k++,
          a > 0 && (g === t || a < g) ? (g = a) : a < 0 && this.requireSorting && ra(15)
      this.cropped = f
      this.cropStart = e
      this.processedXData = b
      this.processedYData = c
      this.activePointCount = k
      if (i.pointRange === null) this.pointRange = g || 1
      this.closestPointRange = g
    },
    cropData: function(a, b, c, d) {
      var e = a.length,
        f = 0,
        g = e,
        h = m(this.cropShoulder, 1),
        i
      for (i = 0; i < e; i++)
        if (a[i] >= c) {
          f = v(0, i - h)
          break
        }
      for (; i < e; i++)
        if (a[i] > d) {
          g = i + h
          break
        }
      return { xData: a.slice(f, g), yData: b.slice(f, g), start: f, end: g }
    },
    generatePoints: function() {
      var a = this.options.data,
        b = this.data,
        c,
        d = this.processedXData,
        e = this.processedYData,
        f = this.pointClass,
        g = d.length,
        h = this.cropStart || 0,
        i,
        j = this.hasGroupedData,
        k,
        l = [],
        o
      if (!b && !j) (b = []), (b.length = a.length), (b = this.data = b)
      for (o = 0; o < g; o++)
        (i = h + o),
          j
            ? (l[o] = new f().init(this, [d[o]].concat(qa(e[o]))))
            : (b[i] ? (k = b[i]) : a[i] !== t && (b[i] = k = new f().init(this, a[i], d[o])),
              (l[o] = k))
      if (b && (g !== (c = b.length) || j))
        for (o = 0; o < c; o++)
          if ((o === h && !j && (o += g), b[o])) b[o].destroyElements(), (b[o].plotX = t)
      this.data = b
      this.points = l
    },
    getExtremes: function(a) {
      var b = this.yAxis,
        c = this.processedXData,
        d,
        e = [],
        f = 0
      d = this.xAxis.getExtremes()
      var g = d.min,
        h = d.max,
        i,
        j,
        k,
        l,
        a = a || this.stackedYData || this.processedYData
      d = a.length
      for (l = 0; l < d; l++)
        if (
          ((j = c[l]),
          (k = a[l]),
          (i = k !== null && k !== t && (!b.isLog || k.length || k > 0)),
          (j =
            this.getExtremesFromAll ||
            this.cropped ||
            ((c[l + 1] || j) >= g && (c[l - 1] || j) <= h)),
          i && j)
        )
          if ((i = k.length)) for (; i--; ) k[i] !== null && (e[f++] = k[i])
          else e[f++] = k
      this.dataMin = m(void 0, Na(e))
      this.dataMax = m(void 0, Ba(e))
    },
    translate: function() {
      this.processedXData || this.processData()
      this.generatePoints()
      for (
        var a = this.options,
          b = a.stacking,
          c = this.xAxis,
          d = c.categories,
          e = this.yAxis,
          f = this.points,
          g = f.length,
          h = !!this.modifyValue,
          i = a.pointPlacement,
          j = i === 'between' || ha(i),
          k = a.threshold,
          a = 0;
        a < g;
        a++
      ) {
        var l = f[a],
          o = l.x,
          n = l.y,
          s = l.low,
          p = b && e.stacks[(this.negStacks && n < k ? '-' : '') + this.stackKey]
        if (e.isLog && n <= 0) l.y = n = null
        l.plotX = c.translate(o, 0, 0, 0, 1, i, this.type === 'flags')
        if (b && this.visible && p && p[o])
          (p = p[o]),
            (n = p.points[this.index + ',' + a]),
            (s = n[0]),
            (n = n[1]),
            s === 0 && (s = m(k, e.min)),
            e.isLog && s <= 0 && (s = null),
            (l.total = l.stackTotal = p.total),
            (l.percentage = p.total && (l.y / p.total) * 100),
            (l.stackY = n),
            p.setOffset(this.pointXOffset || 0, this.barW || 0)
        l.yBottom = r(s) ? e.translate(s, 0, 1, 0, 1) : null
        h && (n = this.modifyValue(n, l))
        l.plotY = typeof n === 'number' && n !== Infinity ? e.translate(n, 0, 1, 0, 1) : t
        l.clientX = j ? c.translate(o, 0, 0, 0, 1) : l.plotX
        l.negative = l.y < (k || 0)
        l.category = d && d[l.x] !== t ? d[l.x] : l.x
      }
      this.getSegments()
    },
    animate: function(a) {
      var b = this.chart,
        c = b.renderer,
        d
      d = this.options.animation
      var e = this.clipBox || b.clipBox,
        f = b.inverted,
        g
      if (d && !ca(d)) d = ba[this.type].animation
      g = ['_sharedClip', d.duration, d.easing, e.height].join(',')
      a
        ? ((a = b[g]),
          (d = b[g + 'm']),
          a ||
            ((b[g] = a = c.clipRect(q(e, { width: 0 }))),
            (b[g + 'm'] = d = c.clipRect(
              -99,
              f ? -b.plotLeft : -b.plotTop,
              99,
              f ? b.chartWidth : b.chartHeight
            ))),
          this.group.clip(a),
          this.markerGroup.clip(d),
          (this.sharedClipKey = g))
        : ((a = b[g]) && a.animate({ width: b.plotSizeX }, d),
          b[g + 'm'] && b[g + 'm'].animate({ width: b.plotSizeX + 99 }, d),
          (this.animate = null))
    },
    afterAnimate: function() {
      var a = this.chart,
        b = this.sharedClipKey,
        c = this.group,
        d = this.clipBox
      if (c && this.options.clip !== !1) {
        if (!b || !d) c.clip(d ? a.renderer.clipRect(d) : a.clipRect)
        this.markerGroup.clip()
      }
      D(this, 'afterAnimate')
      setTimeout(function() {
        b &&
          a[b] &&
          (d || (a[b] = a[b].destroy()), a[b + 'm'] && (a[b + 'm'] = a[b + 'm'].destroy()))
      }, 100)
    },
    drawPoints: function() {
      var a,
        b = this.points,
        c = this.chart,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k
      d = this.options.marker
      var l = this.pointAttr[''],
        o,
        n = this.markerGroup,
        s = m(d.enabled, this.activePointCount < (0.5 * this.xAxis.len) / d.radius)
      if (d.enabled !== !1 || this._hasPointMarkers)
        for (f = b.length; f--; )
          if (
            ((g = b[f]),
            (d = T(g.plotX)),
            (e = g.plotY),
            (k = g.graphic),
            (i = g.marker || {}),
            (a = (s && i.enabled === t) || i.enabled),
            (o = c.isInsidePlot(u(d), e, c.inverted)),
            a && e !== t && !isNaN(e) && g.y !== null)
          )
            if (
              ((a = g.pointAttr[g.selected ? 'select' : ''] || l),
              (h = a.r),
              (i = m(i.symbol, this.symbol)),
              (j = i.indexOf('url') === 0),
              k)
            )
              k[o ? 'show' : 'hide'](!0).animate(
                q({ x: d - h, y: e - h }, k.symbolName ? { width: 2 * h, height: 2 * h } : {})
              )
            else {
              if (o && (h > 0 || j))
                g.graphic = c.renderer
                  .symbol(i, d - h, e - h, 2 * h, 2 * h)
                  .attr(a)
                  .add(n)
            }
          else if (k) g.graphic = k.destroy()
    },
    convertAttribs: function(a, b, c, d) {
      var e = this.pointAttrToOptions,
        f,
        g,
        h = {},
        a = a || {},
        b = b || {},
        c = c || {},
        d = d || {}
      for (f in e) (g = e[f]), (h[f] = m(a[g], b[f], c[f], d[f]))
      return h
    },
    getAttribs: function() {
      var a = this,
        b = a.options,
        c = ba[a.type].marker ? b.marker : b,
        d = c.states,
        e = d.hover,
        f,
        g = a.color
      f = { stroke: g, fill: g }
      var h = a.points || [],
        i,
        j = [],
        k,
        l = a.pointAttrToOptions
      k = a.hasPointSpecificOptions
      var o = b.negativeColor,
        n = c.lineColor,
        s = c.fillColor
      i = b.turboThreshold
      var m
      b.marker
        ? ((e.radius = e.radius || c.radius + 2), (e.lineWidth = e.lineWidth || c.lineWidth + 1))
        : (e.color =
            e.color ||
            ya(e.color || g)
              .brighten(e.brightness)
              .get())
      j[''] = a.convertAttribs(c, f)
      p(['hover', 'select'], function(b) {
        j[b] = a.convertAttribs(d[b], j[''])
      })
      a.pointAttr = j
      g = h.length
      if (!i || g < i || k)
        for (; g--; ) {
          i = h[g]
          if ((c = (i.options && i.options.marker) || i.options) && c.enabled === !1) c.radius = 0
          if (i.negative && o) i.color = i.fillColor = o
          k = b.colorByPoint || i.color
          if (i.options) for (m in l) r(c[l[m]]) && (k = !0)
          if (k) {
            c = c || {}
            k = []
            d = c.states || {}
            f = d.hover = d.hover || {}
            if (!b.marker)
              f.color =
                f.color ||
                (!i.options.color && e.color) ||
                ya(i.color)
                  .brighten(f.brightness || e.brightness)
                  .get()
            f = { color: i.color }
            if (!s) f.fillColor = i.color
            if (!n) f.lineColor = i.color
            k[''] = a.convertAttribs(q(f, c), j[''])
            k.hover = a.convertAttribs(d.hover, j.hover, k[''])
            k.select = a.convertAttribs(d.select, j.select, k[''])
          } else k = j
          i.pointAttr = k
        }
    },
    destroy: function() {
      var a = this,
        b = a.chart,
        c = /AppleWebKit\/533/.test(wa),
        d,
        e,
        f = a.data || [],
        g,
        h,
        i
      D(a, 'destroy')
      W(a)
      p(a.axisTypes || [], function(b) {
        if ((i = a[b])) ja(i.series, a), (i.isDirty = i.forceRedraw = !0)
      })
      a.legendItem && a.chart.legend.destroyItem(a)
      for (e = f.length; e--; ) (g = f[e]) && g.destroy && g.destroy()
      a.points = null
      clearTimeout(a.animationTimeout)
      p(
        'area,graph,dataLabelsGroup,group,markerGroup,tracker,graphNeg,areaNeg,posClip,negClip'.split(
          ','
        ),
        function(b) {
          a[b] && ((d = c && b === 'group' ? 'hide' : 'destroy'), a[b][d]())
        }
      )
      if (b.hoverSeries === a) b.hoverSeries = null
      ja(b.series, a)
      for (h in a) delete a[h]
    },
    getSegmentPath: function(a) {
      var b = this,
        c = [],
        d = b.options.step
      p(a, function(e, f) {
        var g = e.plotX,
          h = e.plotY,
          i
        b.getPointSpline
          ? c.push.apply(c, b.getPointSpline(a, e, f))
          : (c.push(f ? 'L' : 'M'),
            d &&
              f &&
              ((i = a[f - 1]),
              d === 'right'
                ? c.push(i.plotX, h)
                : d === 'center'
                ? c.push((i.plotX + g) / 2, i.plotY, (i.plotX + g) / 2, h)
                : c.push(g, i.plotY)),
            c.push(e.plotX, e.plotY))
      })
      return c
    },
    getGraphPath: function() {
      var a = this,
        b = [],
        c,
        d = []
      p(a.segments, function(e) {
        c = a.getSegmentPath(e)
        e.length > 1 ? (b = b.concat(c)) : d.push(e[0])
      })
      a.singlePoints = d
      return (a.graphPath = b)
    },
    drawGraph: function() {
      var a = this,
        b = this.options,
        c = [['graph', b.lineColor || this.color]],
        d = b.lineWidth,
        e = b.dashStyle,
        f = b.linecap !== 'square',
        g = this.getGraphPath(),
        h = b.negativeColor
      h && c.push(['graphNeg', h])
      p(c, function(c, h) {
        var k = c[0],
          l = a[k]
        if (l) bb(l), l.animate({ d: g })
        else if (d && g.length)
          (l = { stroke: c[1], 'stroke-width': d, fill: Q, zIndex: 1 }),
            e ? (l.dashstyle = e) : f && (l['stroke-linecap'] = l['stroke-linejoin'] = 'round'),
            (a[k] = a.chart.renderer
              .path(g)
              .attr(l)
              .add(a.group)
              .shadow(!h && b.shadow))
      })
    },
    clipNeg: function() {
      var a = this.options,
        b = this.chart,
        c = b.renderer,
        d = a.negativeColor || a.negativeFillColor,
        e,
        f = this.graph,
        g = this.area,
        h = this.posClip,
        i = this.negClip
      e = b.chartWidth
      var j = b.chartHeight,
        k = v(e, j),
        l = this.yAxis
      if (d && (f || g)) {
        d = u(l.toPixels(a.threshold || 0, !0))
        d < 0 && (k -= d)
        a = { x: 0, y: 0, width: k, height: d }
        k = { x: 0, y: d, width: k, height: k }
        if (b.inverted)
          (a.height = k.y = b.plotWidth - d),
            c.isVML &&
              ((a = { x: b.plotWidth - d - b.plotLeft, y: 0, width: e, height: j }),
              (k = { x: d + b.plotLeft - e, y: 0, width: b.plotLeft + d, height: e }))
        l.reversed ? ((b = k), (e = a)) : ((b = a), (e = k))
        h
          ? (h.animate(b), i.animate(e))
          : ((this.posClip = h = c.clipRect(b)),
            (this.negClip = i = c.clipRect(e)),
            f && this.graphNeg && (f.clip(h), this.graphNeg.clip(i)),
            g && (g.clip(h), this.areaNeg.clip(i)))
      }
    },
    invertGroups: function() {
      function a() {
        var a = { width: b.yAxis.len, height: b.xAxis.len }
        p(['group', 'markerGroup'], function(c) {
          b[c] && b[c].attr(a).invert()
        })
      }
      var b = this,
        c = b.chart
      if (b.xAxis)
        K(c, 'resize', a),
          K(b, 'destroy', function() {
            W(c, 'resize', a)
          }),
          a(),
          (b.invertGroups = a)
    },
    plotGroup: function(a, b, c, d, e) {
      var f = this[a],
        g = !f
      g &&
        (this[a] = f = this.chart.renderer
          .g(b)
          .attr({ visibility: c, zIndex: d || 0.1 })
          .add(e))
      f[g ? 'attr' : 'animate'](this.getPlotBox())
      return f
    },
    getPlotBox: function() {
      var a = this.chart,
        b = this.xAxis,
        c = this.yAxis
      if (a.inverted) (b = c), (c = this.xAxis)
      return {
        translateX: b ? b.left : a.plotLeft,
        translateY: c ? c.top : a.plotTop,
        scaleX: 1,
        scaleY: 1
      }
    },
    render: function() {
      var a = this,
        b = a.chart,
        c,
        d = a.options,
        e = ((c = d.animation) && !!a.animate && b.renderer.isSVG && m(c.duration, 500)) || 0,
        f = a.visible ? 'visible' : 'hidden',
        g = d.zIndex,
        h = a.hasRendered,
        i = b.seriesGroup
      c = a.plotGroup('group', 'series', f, g, i)
      a.markerGroup = a.plotGroup('markerGroup', 'markers', f, g, i)
      e && a.animate(!0)
      a.getAttribs()
      c.inverted = a.isCartesian ? b.inverted : !1
      a.drawGraph && (a.drawGraph(), a.clipNeg())
      a.drawDataLabels && a.drawDataLabels()
      a.visible && a.drawPoints()
      a.drawTracker && a.options.enableMouseTracking !== !1 && a.drawTracker()
      b.inverted && a.invertGroups()
      d.clip !== !1 && !a.sharedClipKey && !h && c.clip(b.clipRect)
      e && a.animate()
      if (!h)
        e
          ? (a.animationTimeout = setTimeout(function() {
              a.afterAnimate()
            }, e))
          : a.afterAnimate()
      a.isDirty = a.isDirtyData = !1
      a.hasRendered = !0
    },
    redraw: function() {
      var a = this.chart,
        b = this.isDirtyData,
        c = this.group,
        d = this.xAxis,
        e = this.yAxis
      c &&
        (a.inverted && c.attr({ width: a.plotWidth, height: a.plotHeight }),
        c.animate({ translateX: m(d && d.left, a.plotLeft), translateY: m(e && e.top, a.plotTop) }))
      this.translate()
      this.setTooltipPoints && this.setTooltipPoints(!0)
      this.render()
      b && D(this, 'updatedData')
    }
  }
  Hb.prototype = {
    destroy: function() {
      Oa(this, this.axis)
    },
    render: function(a) {
      var b = this.options,
        c = b.format,
        c = c ? Ia(c, this) : b.formatter.call(this)
      this.label
        ? this.label.attr({ text: c, visibility: 'hidden' })
        : (this.label = this.axis.chart.renderer
            .text(c, null, null, b.useHTML)
            .css(b.style)
            .attr({ align: this.textAlign, rotation: b.rotation, visibility: 'hidden' })
            .add(a))
    },
    setOffset: function(a, b) {
      var c = this.axis,
        d = c.chart,
        e = d.inverted,
        f = this.isNegative,
        g = c.translate(c.usePercentage ? 100 : this.total, 0, 0, 0, 1),
        c = c.translate(0),
        c = M(g - c),
        h = d.xAxis[0].translate(this.x) + a,
        i = d.plotHeight,
        f = {
          x: e ? (f ? g : g - c) : h,
          y: e ? i - h - b : f ? i - g - c : i - g,
          width: e ? c : b,
          height: e ? b : c
        }
      if ((e = this.label))
        e.align(this.alignOptions, null, f),
          (f = e.alignAttr),
          e[this.options.crop === !1 || d.isInsidePlot(f.x, f.y) ? 'show' : 'hide'](!0)
    }
  }
  la.prototype.buildStacks = function() {
    var a = this.series,
      b = m(this.options.reversedStacks, !0),
      c = a.length
    if (!this.isXAxis) {
      for (this.usePercentage = !1; c--; ) a[b ? c : a.length - c - 1].setStackedPoints()
      if (this.usePercentage) for (c = 0; c < a.length; c++) a[c].setPercentStacks()
    }
  }
  la.prototype.renderStackTotals = function() {
    var a = this.chart,
      b = a.renderer,
      c = this.stacks,
      d,
      e,
      f = this.stackTotalGroup
    if (!f)
      this.stackTotalGroup = f = b
        .g('stack-labels')
        .attr({ visibility: 'visible', zIndex: 6 })
        .add()
    f.translate(a.plotLeft, a.plotTop)
    for (d in c) for (e in ((a = c[d]), a)) a[e].render(f)
  }
  O.prototype.setStackedPoints = function() {
    if (
      this.options.stacking &&
      !(this.visible !== !0 && this.chart.options.chart.ignoreHiddenSeries !== !1)
    ) {
      var a = this.processedXData,
        b = this.processedYData,
        c = [],
        d = b.length,
        e = this.options,
        f = e.threshold,
        g = e.stack,
        e = e.stacking,
        h = this.stackKey,
        i = '-' + h,
        j = this.negStacks,
        k = this.yAxis,
        l = k.stacks,
        o = k.oldStacks,
        n,
        m,
        p,
        q,
        r,
        u
      for (q = 0; q < d; q++) {
        r = a[q]
        u = b[q]
        p = this.index + ',' + q
        m = (n = j && u < f) ? i : h
        l[m] || (l[m] = {})
        if (!l[m][r])
          o[m] && o[m][r]
            ? ((l[m][r] = o[m][r]), (l[m][r].total = null))
            : (l[m][r] = new Hb(k, k.options.stackLabels, n, r, g))
        m = l[m][r]
        m.points[p] = [m.cum || 0]
        e === 'percent'
          ? ((n = n ? h : i),
            j && l[n] && l[n][r]
              ? ((n = l[n][r]), (m.total = n.total = v(n.total, m.total) + M(u) || 0))
              : (m.total = da(m.total + (M(u) || 0))))
          : (m.total = da(m.total + (u || 0)))
        m.cum = (m.cum || 0) + (u || 0)
        m.points[p].push(m.cum)
        c[q] = m.cum
      }
      if (e === 'percent') k.usePercentage = !0
      this.stackedYData = c
      k.oldStacks = {}
    }
  }
  O.prototype.setPercentStacks = function() {
    var a = this,
      b = a.stackKey,
      c = a.yAxis.stacks,
      d = a.processedXData
    p([b, '-' + b], function(b) {
      var e
      for (var f = d.length, g, h; f--; )
        if (((g = d[f]), (e = (h = c[b] && c[b][g]) && h.points[a.index + ',' + f]), (g = e)))
          (h = h.total ? 100 / h.total : 0),
            (g[0] = da(g[0] * h)),
            (g[1] = da(g[1] * h)),
            (a.stackedYData[f] = g[1])
    })
  }
  q(Ya.prototype, {
    addSeries: function(a, b, c) {
      var d,
        e = this
      a &&
        ((b = m(b, !0)),
        D(e, 'addSeries', { options: a }, function() {
          d = e.initSeries(a)
          e.isDirtyLegend = !0
          e.linkSeries()
          b && e.redraw(c)
        }))
      return d
    },
    addAxis: function(a, b, c, d) {
      var e = b ? 'xAxis' : 'yAxis',
        f = this.options
      new la(this, w(a, { index: this[e].length, isX: b }))
      f[e] = qa(f[e] || {})
      f[e].push(a)
      m(c, !0) && this.redraw(d)
    },
    showLoading: function(a) {
      var b = this.options,
        c = this.loadingDiv,
        d = b.loading
      if (!c)
        (this.loadingDiv = c = Y(
          Ja,
          { className: 'highcharts-loading' },
          q(d.style, { zIndex: 10, display: Q }),
          this.container
        )),
          (this.loadingSpan = Y('span', null, d.labelStyle, c))
      this.loadingSpan.innerHTML = a || b.lang.loading
      if (!this.loadingShown)
        G(c, {
          opacity: 0,
          display: '',
          left: this.plotLeft + 'px',
          top: this.plotTop + 'px',
          width: this.plotWidth + 'px',
          height: this.plotHeight + 'px'
        }),
          kb(c, { opacity: d.style.opacity }, { duration: d.showDuration || 0 }),
          (this.loadingShown = !0)
    },
    hideLoading: function() {
      var a = this.options,
        b = this.loadingDiv
      b &&
        kb(
          b,
          { opacity: 0 },
          {
            duration: a.loading.hideDuration || 100,
            complete: function() {
              G(b, { display: Q })
            }
          }
        )
      this.loadingShown = !1
    }
  })
  q(Ea.prototype, {
    update: function(a, b, c) {
      var d = this,
        e = d.series,
        f = d.graphic,
        g,
        h = e.data,
        i = e.chart,
        j = e.options,
        b = m(b, !0)
      d.firePointEvent('update', { options: a }, function() {
        d.applyOptions(a)
        if (ca(a)) {
          e.getAttribs()
          if (f)
            a && a.marker && a.marker.symbol
              ? (d.graphic = f.destroy())
              : f.attr(d.pointAttr[d.state || ''])
          if (a && a.dataLabels && d.dataLabel) d.dataLabel = d.dataLabel.destroy()
        }
        g = Da(d, h)
        e.updateParallelArrays(d, g)
        j.data[g] = d.options
        e.isDirty = e.isDirtyData = !0
        if (!e.fixedBox && e.hasCartesianSeries) i.isDirtyBox = !0
        j.legendType === 'point' && i.legend.destroyItem(d)
        b && i.redraw(c)
      })
    },
    remove: function(a, b) {
      var c = this,
        d = c.series,
        e = d.points,
        f = d.chart,
        g,
        h = d.data
      Qa(b, f)
      a = m(a, !0)
      c.firePointEvent('remove', null, function() {
        g = Da(c, h)
        h.length === e.length && e.splice(g, 1)
        h.splice(g, 1)
        d.options.data.splice(g, 1)
        d.updateParallelArrays(c, 'splice', g, 1)
        c.destroy()
        d.isDirty = !0
        d.isDirtyData = !0
        a && f.redraw()
      })
    }
  })
  q(O.prototype, {
    addPoint: function(a, b, c, d) {
      var e = this.options,
        f = this.data,
        g = this.graph,
        h = this.area,
        i = this.chart,
        j = this.xAxis && this.xAxis.names,
        k = (g && g.shift) || 0,
        l = e.data,
        o,
        n = this.xData
      Qa(d, i)
      c &&
        p([g, h, this.graphNeg, this.areaNeg], function(a) {
          if (a) a.shift = k + 1
        })
      if (h) h.isArea = !0
      b = m(b, !0)
      d = { series: this }
      this.pointClass.prototype.applyOptions.apply(d, [a])
      g = d.x
      h = n.length
      if (this.requireSorting && g < n[h - 1]) for (o = !0; h && n[h - 1] > g; ) h--
      this.updateParallelArrays(d, 'splice', h, 0, 0)
      this.updateParallelArrays(d, h)
      if (j) j[g] = d.name
      l.splice(h, 0, a)
      o && (this.data.splice(h, 0, null), this.processData())
      e.legendType === 'point' && this.generatePoints()
      c &&
        (f[0] && f[0].remove
          ? f[0].remove(!1)
          : (f.shift(), this.updateParallelArrays(d, 'shift'), l.shift()))
      this.isDirtyData = this.isDirty = !0
      b && (this.getAttribs(), i.redraw())
    },
    remove: function(a, b) {
      var c = this,
        d = c.chart,
        a = m(a, !0)
      if (!c.isRemoving)
        (c.isRemoving = !0),
          D(c, 'remove', null, function() {
            c.destroy()
            d.isDirtyLegend = d.isDirtyBox = !0
            d.linkSeries()
            a && d.redraw(b)
          })
      c.isRemoving = !1
    },
    update: function(a, b) {
      var c = this.chart,
        d = this.type,
        e = F[d].prototype,
        f,
        a = w(
          this.userOptions,
          { animation: !1, index: this.index, pointStart: this.xData[0] },
          { data: this.options.data },
          a
        )
      this.remove(!1)
      for (f in e) e.hasOwnProperty(f) && (this[f] = t)
      q(this, F[a.type || d].prototype)
      this.init(c, a)
      m(b, !0) && c.redraw(!1)
    }
  })
  q(la.prototype, {
    update: function(a, b) {
      var c = this.chart,
        a = (c.options[this.coll][this.options.index] = w(this.userOptions, a))
      this.destroy(!0)
      this._addedPlotLB = t
      this.init(c, q(a, { events: t }))
      c.isDirtyBox = !0
      m(b, !0) && c.redraw()
    },
    remove: function(a) {
      for (var b = this.chart, c = this.coll, d = this.series, e = d.length; e--; )
        d[e] && d[e].remove(!1)
      ja(b.axes, this)
      ja(b[c], this)
      b.options[c].splice(this.options.index, 1)
      p(b[c], function(a, b) {
        a.options.index = b
      })
      this.destroy()
      b.isDirtyBox = !0
      m(a, !0) && b.redraw()
    },
    setTitle: function(a, b) {
      this.update({ title: a }, b)
    },
    setCategories: function(a, b) {
      this.update({ categories: a }, b)
    }
  })
  ga = ka(O)
  F.line = ga
  ba.area = w(S, { threshold: 0 })
  var pa = ka(O, {
    type: 'area',
    getSegments: function() {
      var a = [],
        b = [],
        c = [],
        d = this.xAxis,
        e = this.yAxis,
        f = e.stacks[this.stackKey],
        g = {},
        h,
        i,
        j = this.points,
        k = this.options.connectNulls,
        l,
        o,
        n
      if (this.options.stacking && !this.cropped) {
        for (o = 0; o < j.length; o++) g[j[o].x] = j[o]
        for (n in f) f[n].total !== null && c.push(+n)
        c.sort(function(a, b) {
          return a - b
        })
        p(c, function(a) {
          if (!k || (g[a] && g[a].y !== null))
            g[a]
              ? b.push(g[a])
              : ((h = d.translate(a)),
                (l = f[a].percent ? (f[a].total ? (f[a].cum * 100) / f[a].total : 0) : f[a].cum),
                (i = e.toPixels(l, !0)),
                b.push({ y: null, plotX: h, clientX: h, plotY: i, yBottom: i, onMouseOver: sa }))
        })
        b.length && a.push(b)
      } else O.prototype.getSegments.call(this), (a = this.segments)
      this.segments = a
    },
    getSegmentPath: function(a) {
      var b = O.prototype.getSegmentPath.call(this, a),
        c = [].concat(b),
        d,
        e = this.options
      d = b.length
      var f = this.yAxis.getThreshold(e.threshold),
        g
      d === 3 && c.push('L', b[1], b[2])
      if (e.stacking && !this.closedStacks)
        for (d = a.length - 1; d >= 0; d--)
          (g = m(a[d].yBottom, f)),
            d < a.length - 1 && e.step && c.push(a[d + 1].plotX, g),
            c.push(a[d].plotX, g)
      else this.closeSegment(c, a, f)
      this.areaPath = this.areaPath.concat(c)
      return b
    },
    closeSegment: function(a, b, c) {
      a.push('L', b[b.length - 1].plotX, c, 'L', b[0].plotX, c)
    },
    drawGraph: function() {
      this.areaPath = []
      O.prototype.drawGraph.apply(this)
      var a = this,
        b = this.areaPath,
        c = this.options,
        d = c.negativeColor,
        e = c.negativeFillColor,
        f = [['area', this.color, c.fillColor]]
      ;(d || e) && f.push(['areaNeg', d, e])
      p(f, function(d) {
        var e = d[0],
          f = a[e]
        f
          ? f.animate({ d: b })
          : (a[e] = a.chart.renderer
              .path(b)
              .attr({
                fill: m(
                  d[2],
                  ya(d[1])
                    .setOpacity(m(c.fillOpacity, 0.75))
                    .get()
                ),
                zIndex: 0
              })
              .add(a.group))
      })
    },
    drawLegendSymbol: N.drawRectangle
  })
  F.area = pa
  ba.spline = w(S)
  ga = ka(O, {
    type: 'spline',
    getPointSpline: function(a, b, c) {
      var d = b.plotX,
        e = b.plotY,
        f = a[c - 1],
        g = a[c + 1],
        h,
        i,
        j,
        k
      if (f && g) {
        a = f.plotY
        j = g.plotX
        var g = g.plotY,
          l
        h = (1.5 * d + f.plotX) / 2.5
        i = (1.5 * e + a) / 2.5
        j = (1.5 * d + j) / 2.5
        k = (1.5 * e + g) / 2.5
        l = ((k - i) * (j - d)) / (j - h) + e - k
        i += l
        k += l
        i > a && i > e
          ? ((i = v(a, e)), (k = 2 * e - i))
          : i < a && i < e && ((i = C(a, e)), (k = 2 * e - i))
        k > g && k > e
          ? ((k = v(g, e)), (i = 2 * e - k))
          : k < g && k < e && ((k = C(g, e)), (i = 2 * e - k))
        b.rightContX = j
        b.rightContY = k
      }
      c
        ? ((b = ['C', f.rightContX || f.plotX, f.rightContY || f.plotY, h || d, i || e, d, e]),
          (f.rightContX = f.rightContY = null))
        : (b = ['M', d, e])
      return b
    }
  })
  F.spline = ga
  ba.areaspline = w(ba.area)
  pa = pa.prototype
  ga = ka(ga, {
    type: 'areaspline',
    closedStacks: !0,
    getSegmentPath: pa.getSegmentPath,
    closeSegment: pa.closeSegment,
    drawGraph: pa.drawGraph,
    drawLegendSymbol: N.drawRectangle
  })
  F.areaspline = ga
  ba.column = w(S, {
    borderColor: '#FFFFFF',
    borderRadius: 0,
    groupPadding: 0.2,
    marker: null,
    pointPadding: 0.1,
    minPointLength: 0,
    cropThreshold: 50,
    pointRange: null,
    states: {
      hover: { brightness: 0.1, shadow: !1, halo: !1 },
      select: { color: '#C0C0C0', borderColor: '#000000', shadow: !1 }
    },
    dataLabels: { align: null, verticalAlign: null, y: null },
    stickyTracking: !1,
    tooltip: { distance: 6 },
    threshold: 0
  })
  ga = ka(O, {
    type: 'column',
    pointAttrToOptions: { stroke: 'borderColor', fill: 'color', r: 'borderRadius' },
    cropShoulder: 0,
    trackerGroups: ['group', 'dataLabelsGroup'],
    negStacks: !0,
    init: function() {
      O.prototype.init.apply(this, arguments)
      var a = this,
        b = a.chart
      b.hasRendered &&
        p(b.series, function(b) {
          if (b.type === a.type) b.isDirty = !0
        })
    },
    getColumnMetrics: function() {
      var a = this,
        b = a.options,
        c = a.xAxis,
        d = a.yAxis,
        e = c.reversed,
        f,
        g = {},
        h,
        i = 0
      b.grouping === !1
        ? (i = 1)
        : p(a.chart.series, function(b) {
            var c = b.options,
              e = b.yAxis
            if (b.type === a.type && b.visible && d.len === e.len && d.pos === e.pos)
              c.stacking
                ? ((f = b.stackKey), g[f] === t && (g[f] = i++), (h = g[f]))
                : c.grouping !== !1 && (h = i++),
                (b.columnIndex = h)
          })
      var c = C(
          M(c.transA) *
            (c.ordinalSlope || b.pointRange || c.closestPointRange || c.tickInterval || 1),
          c.len
        ),
        j = c * b.groupPadding,
        k = (c - 2 * j) / i,
        l = b.pointWidth,
        b = r(l) ? (k - l) / 2 : k * b.pointPadding,
        l = m(l, k - 2 * b)
      return (a.columnMetrics = {
        width: l,
        offset:
          b + (j + ((e ? i - (a.columnIndex || 0) : a.columnIndex) || 0) * k - c / 2) * (e ? -1 : 1)
      })
    },
    translate: function() {
      var a = this,
        b = a.chart,
        c = a.options,
        d = (a.borderWidth = m(c.borderWidth, a.activePointCount > 0.5 * a.xAxis.len ? 0 : 1)),
        e = a.yAxis,
        f = (a.translatedThreshold = e.getThreshold(c.threshold)),
        g = m(c.minPointLength, 5),
        c = a.getColumnMetrics(),
        h = c.width,
        i = (a.barW = Ka(v(h, 1 + 2 * d))),
        j = (a.pointXOffset = c.offset),
        k = -(d % 2 ? 0.5 : 0),
        l = d % 2 ? 0.5 : 1
      b.renderer.isVML && b.inverted && (l += 1)
      O.prototype.translate.apply(a)
      p(a.points, function(c) {
        var d = m(c.yBottom, f),
          p = C(v(-999 - d, c.plotY), e.len + 999 + d),
          q = c.plotX + j,
          r = i,
          t = C(p, d),
          x
        x = v(p, d) - t
        M(x) < g &&
          g &&
          ((x = g), (t = u(M(t - f) > g ? d - g : f - (e.translate(c.y, 0, 1, 0, 1) <= f ? g : 0))))
        c.barX = q
        c.pointWidth = h
        c.tooltipPos = b.inverted ? [e.len - p, a.xAxis.len - q - r / 2] : [q + r / 2, p]
        d = M(q) < 0.5
        r = u(q + r) + k
        q = u(q) + k
        r -= q
        p = M(t) < 0.5
        x = u(t + x) + l
        t = u(t) + l
        x -= t
        d && ((q += 1), (r -= 1))
        p && ((t -= 1), (x += 1))
        c.shapeType = 'rect'
        c.shapeArgs = { x: q, y: t, width: r, height: x }
      })
    },
    getSymbol: sa,
    drawLegendSymbol: N.drawRectangle,
    drawGraph: sa,
    drawPoints: function() {
      var a = this,
        b = this.chart,
        c = a.options,
        d = b.renderer,
        e = c.animationLimit || 250,
        f,
        g,
        h
      p(a.points, function(i) {
        var j = i.plotY,
          k = i.graphic
        if (j !== t && !isNaN(j) && i.y !== null)
          (f = i.shapeArgs),
            (h = r(a.borderWidth) ? { 'stroke-width': a.borderWidth } : {}),
            (g = i.pointAttr[i.selected ? 'select' : ''] || a.pointAttr['']),
            k
              ? (bb(k), k.attr(h)[b.pointCount < e ? 'animate' : 'attr'](w(f)))
              : (i.graphic = d[i.shapeType](f)
                  .attr(g)
                  .attr(h)
                  .add(a.group)
                  .shadow(c.shadow, null, c.stacking && !c.borderRadius))
        else if (k) i.graphic = k.destroy()
      })
    },
    animate: function(a) {
      var b = this.yAxis,
        c = this.options,
        d = this.chart.inverted,
        e = {}
      if (aa)
        a
          ? ((e.scaleY = 0.001),
            (a = C(b.pos + b.len, v(b.pos, b.toPixels(c.threshold)))),
            d ? (e.translateX = a - b.len) : (e.translateY = a),
            this.group.attr(e))
          : ((e.scaleY = 1),
            (e[d ? 'translateX' : 'translateY'] = b.pos),
            this.group.animate(e, this.options.animation),
            (this.animate = null))
    },
    remove: function() {
      var a = this,
        b = a.chart
      b.hasRendered &&
        p(b.series, function(b) {
          if (b.type === a.type) b.isDirty = !0
        })
      O.prototype.remove.apply(a, arguments)
    }
  })
  F.column = ga
  ba.bar = w(ba.column)
  pa = ka(ga, { type: 'bar', inverted: !0 })
  F.bar = pa
  ba.scatter = w(S, {
    lineWidth: 0,
    tooltip: {
      headerFormat:
        '<span style="color:{series.color}">●</span> <span style="font-size: 10px;"> {series.name}</span><br/>',
      pointFormat: 'x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>'
    },
    stickyTracking: !1
  })
  pa = ka(O, {
    type: 'scatter',
    sorted: !1,
    requireSorting: !1,
    noSharedTooltip: !0,
    trackerGroups: ['markerGroup'],
    takeOrdinalPosition: !1,
    singularTooltips: !0,
    drawGraph: function() {
      this.options.lineWidth && O.prototype.drawGraph.call(this)
    }
  })
  F.scatter = pa
  ba.pie = w(S, {
    borderColor: '#FFFFFF',
    borderWidth: 1,
    center: [null, null],
    clip: !1,
    colorByPoint: !0,
    dataLabels: {
      distance: 30,
      enabled: !0,
      formatter: function() {
        return this.point.name
      }
    },
    ignoreHiddenPoint: !0,
    legendType: 'point',
    marker: null,
    size: null,
    showInLegend: !1,
    slicedOffset: 10,
    states: { hover: { brightness: 0.1, shadow: !1 } },
    stickyTracking: !1,
    tooltip: { followPointer: !0 }
  })
  S = {
    type: 'pie',
    isCartesian: !1,
    pointClass: ka(Ea, {
      init: function() {
        Ea.prototype.init.apply(this, arguments)
        var a = this,
          b
        if (a.y < 0) a.y = null
        q(a, { visible: a.visible !== !1, name: m(a.name, 'Slice') })
        b = function(b) {
          a.slice(b.type === 'select')
        }
        K(a, 'select', b)
        K(a, 'unselect', b)
        return a
      },
      setVisible: function(a) {
        var b = this,
          c = b.series,
          d = c.chart
        b.visible = b.options.visible = a = a === t ? !b.visible : a
        c.options.data[Da(b, c.data)] = b.options
        p(['graphic', 'dataLabel', 'connector', 'shadowGroup'], function(c) {
          if (b[c]) b[c][a ? 'show' : 'hide'](!0)
        })
        b.legendItem && d.legend.colorizeItem(b, a)
        if (!c.isDirty && c.options.ignoreHiddenPoint) (c.isDirty = !0), d.redraw()
      },
      slice: function(a, b, c) {
        var d = this.series
        Qa(c, d.chart)
        m(b, !0)
        this.sliced = this.options.sliced = a = r(a) ? a : !this.sliced
        d.options.data[Da(this, d.data)] = this.options
        a = a ? this.slicedTranslation : { translateX: 0, translateY: 0 }
        this.graphic.animate(a)
        this.shadowGroup && this.shadowGroup.animate(a)
      },
      haloPath: function(a) {
        var b = this.shapeArgs,
          c = this.series.chart
        return this.series.chart.renderer.symbols.arc(
          c.plotLeft + b.x,
          c.plotTop + b.y,
          b.r + a,
          b.r + a,
          { innerR: this.shapeArgs.r, start: b.start, end: b.end }
        )
      }
    }),
    requireSorting: !1,
    noSharedTooltip: !0,
    trackerGroups: ['group', 'dataLabelsGroup'],
    axisTypes: [],
    pointAttrToOptions: { stroke: 'borderColor', 'stroke-width': 'borderWidth', fill: 'color' },
    singularTooltips: !0,
    getColor: sa,
    animate: function(a) {
      var b = this,
        c = b.points,
        d = b.startAngleRad
      if (!a)
        p(c, function(a) {
          var c = a.graphic,
            a = a.shapeArgs
          c &&
            (c.attr({ r: b.center[3] / 2, start: d, end: d }),
            c.animate({ r: a.r, start: a.start, end: a.end }, b.options.animation))
        }),
          (b.animate = null)
    },
    setData: function(a, b, c, d) {
      O.prototype.setData.call(this, a, !1, c, d)
      this.processData()
      this.generatePoints()
      m(b, !0) && this.chart.redraw(c)
    },
    generatePoints: function() {
      var a,
        b = 0,
        c,
        d,
        e,
        f = this.options.ignoreHiddenPoint
      O.prototype.generatePoints.call(this)
      c = this.points
      d = c.length
      for (a = 0; a < d; a++) (e = c[a]), (b += f && !e.visible ? 0 : e.y)
      this.total = b
      for (a = 0; a < d; a++)
        (e = c[a]), (e.percentage = b > 0 ? (e.y / b) * 100 : 0), (e.total = b)
    },
    translate: function(a) {
      this.generatePoints()
      var b = 0,
        c = this.options,
        d = c.slicedOffset,
        e = d + c.borderWidth,
        f,
        g,
        h,
        i = c.startAngle || 0,
        j = (this.startAngleRad = (ma / 180) * (i - 90)),
        i = (this.endAngleRad = (ma / 180) * (m(c.endAngle, i + 360) - 90)) - j,
        k = this.points,
        l = c.dataLabels.distance,
        c = c.ignoreHiddenPoint,
        o,
        n = k.length,
        p
      if (!a) this.center = a = this.getCenter()
      this.getX = function(b, c) {
        h = U.asin(C((b - a[1]) / (a[2] / 2 + l), 1))
        return a[0] + (c ? -1 : 1) * Z(h) * (a[2] / 2 + l)
      }
      for (o = 0; o < n; o++) {
        p = k[o]
        f = j + b * i
        if (!c || p.visible) b += p.percentage / 100
        g = j + b * i
        p.shapeType = 'arc'
        p.shapeArgs = {
          x: a[0],
          y: a[1],
          r: a[2] / 2,
          innerR: a[3] / 2,
          start: u(f * 1e3) / 1e3,
          end: u(g * 1e3) / 1e3
        }
        h = (g + f) / 2
        h > 1.5 * ma ? (h -= 2 * ma) : h < -ma / 2 && (h += 2 * ma)
        p.slicedTranslation = { translateX: u(Z(h) * d), translateY: u(ea(h) * d) }
        f = (Z(h) * a[2]) / 2
        g = (ea(h) * a[2]) / 2
        p.tooltipPos = [a[0] + f * 0.7, a[1] + g * 0.7]
        p.half = h < -ma / 2 || h > ma / 2 ? 1 : 0
        p.angle = h
        e = C(e, l / 2)
        p.labelPos = [
          a[0] + f + Z(h) * l,
          a[1] + g + ea(h) * l,
          a[0] + f + Z(h) * e,
          a[1] + g + ea(h) * e,
          a[0] + f,
          a[1] + g,
          l < 0 ? 'center' : p.half ? 'right' : 'left',
          h
        ]
      }
    },
    drawGraph: null,
    drawPoints: function() {
      var a = this,
        b = a.chart.renderer,
        c,
        d,
        e = a.options.shadow,
        f,
        g
      if (e && !a.shadowGroup) a.shadowGroup = b.g('shadow').add(a.group)
      p(a.points, function(h) {
        d = h.graphic
        g = h.shapeArgs
        f = h.shadowGroup
        if (e && !f) f = h.shadowGroup = b.g('shadow').add(a.shadowGroup)
        c = h.sliced ? h.slicedTranslation : { translateX: 0, translateY: 0 }
        f && f.attr(c)
        d
          ? d.animate(q(g, c))
          : (h.graphic = d = b[h.shapeType](g)
              .setRadialReference(a.center)
              .attr(h.pointAttr[h.selected ? 'select' : ''])
              .attr({ 'stroke-linejoin': 'round' })
              .attr(c)
              .add(a.group)
              .shadow(e, f))
        h.visible !== void 0 && h.setVisible(h.visible)
      })
    },
    sortByAngle: function(a, b) {
      a.sort(function(a, d) {
        return a.angle !== void 0 && (d.angle - a.angle) * b
      })
    },
    drawLegendSymbol: N.drawRectangle,
    getCenter: X.getCenter,
    getSymbol: sa
  }
  S = ka(O, S)
  F.pie = S
  O.prototype.drawDataLabels = function() {
    var a = this,
      b = a.options,
      c = b.cursor,
      d = b.dataLabels,
      e = a.points,
      f,
      g,
      h,
      i
    if (d.enabled || a._hasPointLabels)
      a.dlProcessOptions && a.dlProcessOptions(d),
        (i = a.plotGroup('dataLabelsGroup', 'data-labels', 'hidden', d.zIndex || 6)),
        !a.hasRendered &&
          m(d.defer, !0) &&
          (i.attr({ opacity: 0 }),
          K(a, 'afterAnimate', function() {
            a.dataLabelsGroup
              .show()
              [b.animation ? 'animate' : 'attr']({ opacity: 1 }, { duration: 200 })
          })),
        (g = d),
        p(e, function(b) {
          var e,
            l = b.dataLabel,
            o,
            n,
            p = b.connector,
            u = !0
          f = b.options && b.options.dataLabels
          e = m(f && f.enabled, g.enabled)
          if (l && !e) b.dataLabel = l.destroy()
          else if (e) {
            d = w(g, f)
            e = d.rotation
            o = b.getLabelConfig()
            h = d.format ? Ia(d.format, o) : d.formatter.call(o, d)
            d.style.color = m(d.color, d.style.color, a.color, 'black')
            if (l)
              if (r(h)) l.attr({ text: h }), (u = !1)
              else {
                if (((b.dataLabel = l = l.destroy()), p)) b.connector = p.destroy()
              }
            else if (r(h)) {
              l = {
                fill: d.backgroundColor,
                stroke: d.borderColor,
                'stroke-width': d.borderWidth,
                r: d.borderRadius || 0,
                rotation: e,
                padding: d.padding,
                zIndex: 1
              }
              for (n in l) l[n] === t && delete l[n]
              l = b.dataLabel = a.chart.renderer[e ? 'text' : 'label'](
                h,
                0,
                -999,
                null,
                null,
                null,
                d.useHTML
              )
                .attr(l)
                .css(q(d.style, c && { cursor: c }))
                .add(i)
                .shadow(d.shadow)
            }
            l && a.alignDataLabel(b, l, d, null, u)
          }
        })
  }
  O.prototype.alignDataLabel = function(a, b, c, d, e) {
    var f = this.chart,
      g = f.inverted,
      h = m(a.plotX, -999),
      i = m(a.plotY, -999),
      j = b.getBBox()
    if (
      (a =
        this.visible &&
        (a.series.forceDL ||
          f.isInsidePlot(h, u(i), g) ||
          (d && f.isInsidePlot(h, g ? d.x + 1 : d.y + d.height - 1, g))))
    )
      (d = q(
        { x: g ? f.plotWidth - i : h, y: u(g ? f.plotHeight - h : i), width: 0, height: 0 },
        d
      )),
        q(c, { width: j.width, height: j.height }),
        c.rotation
          ? ((g = { align: c.align, x: d.x + c.x + d.width / 2, y: d.y + c.y + d.height / 2 }),
            b[e ? 'attr' : 'animate'](g))
          : (b.align(c, null, d),
            (g = b.alignAttr),
            m(c.overflow, 'justify') === 'justify'
              ? this.justifyDataLabel(b, c, g, j, d, e)
              : m(c.crop, !0) &&
                (a = f.isInsidePlot(g.x, g.y) && f.isInsidePlot(g.x + j.width, g.y + j.height)))
    if (!a) b.attr({ y: -999 }), (b.placed = !1)
  }
  O.prototype.justifyDataLabel = function(a, b, c, d, e, f) {
    var g = this.chart,
      h = b.align,
      i = b.verticalAlign,
      j,
      k
    j = c.x
    if (j < 0) h === 'right' ? (b.align = 'left') : (b.x = -j), (k = !0)
    j = c.x + d.width
    if (j > g.plotWidth) h === 'left' ? (b.align = 'right') : (b.x = g.plotWidth - j), (k = !0)
    j = c.y
    if (j < 0) i === 'bottom' ? (b.verticalAlign = 'top') : (b.y = -j), (k = !0)
    j = c.y + d.height
    if (j > g.plotHeight)
      i === 'top' ? (b.verticalAlign = 'bottom') : (b.y = g.plotHeight - j), (k = !0)
    if (k) (a.placed = !f), a.align(b, null, e)
  }
  if (F.pie)
    (F.pie.prototype.drawDataLabels = function() {
      var a = this,
        b = a.data,
        c,
        d = a.chart,
        e = a.options.dataLabels,
        f = m(e.connectorPadding, 10),
        g = m(e.connectorWidth, 1),
        h = d.plotWidth,
        d = d.plotHeight,
        i,
        j,
        k = m(e.softConnector, !0),
        l = e.distance,
        o = a.center,
        n = o[2] / 2,
        q = o[1],
        r = l > 0,
        t,
        w,
        x,
        y,
        z = [[], []],
        A,
        C,
        G,
        D,
        B,
        F = [0, 0, 0, 0],
        N = function(a, b) {
          return b.y - a.y
        }
      if (a.visible && (e.enabled || a._hasPointLabels)) {
        O.prototype.drawDataLabels.apply(a)
        p(b, function(a) {
          a.dataLabel && a.visible && z[a.half].push(a)
        })
        for (D = 0; !y && b[D]; )
          (y = b[D] && b[D].dataLabel && (b[D].dataLabel.getBBox().height || 21)), D++
        for (D = 2; D--; ) {
          var b = [],
            K = [],
            H = z[D],
            I = H.length,
            E
          a.sortByAngle(H, D - 0.5)
          if (l > 0) {
            for (B = q - n - l; B <= q + n + l; B += y) b.push(B)
            w = b.length
            if (I > w) {
              c = [].concat(H)
              c.sort(N)
              for (B = I; B--; ) c[B].rank = B
              for (B = I; B--; ) H[B].rank >= w && H.splice(B, 1)
              I = H.length
            }
            for (B = 0; B < I; B++) {
              c = H[B]
              x = c.labelPos
              c = 9999
              var Q, P
              for (P = 0; P < w; P++) (Q = M(b[P] - x[1])), Q < c && ((c = Q), (E = P))
              if (E < B && b[B] !== null) E = B
              else for (w < I - B + E && b[B] !== null && (E = w - I + B); b[E] === null; ) E++
              K.push({ i: E, y: b[E] })
              b[E] = null
            }
            K.sort(N)
          }
          for (B = 0; B < I; B++) {
            c = H[B]
            x = c.labelPos
            t = c.dataLabel
            G = c.visible === !1 ? 'hidden' : 'visible'
            c = x[1]
            if (l > 0) {
              if (
                ((w = K.pop()),
                (E = w.i),
                (C = w.y),
                (c > C && b[E + 1] !== null) || (c < C && b[E - 1] !== null))
              )
                C = c
            } else C = c
            A = e.justify
              ? o[0] + (D ? -1 : 1) * (n + l)
              : a.getX(E === 0 || E === b.length - 1 ? c : C, D)
            t._attr = { visibility: G, align: x[6] }
            t._pos = { x: A + e.x + ({ left: f, right: -f }[x[6]] || 0), y: C + e.y - 10 }
            t.connX = A
            t.connY = C
            if (this.options.size === null)
              (w = t.width),
                A - w < f
                  ? (F[3] = v(u(w - A + f), F[3]))
                  : A + w > h - f && (F[1] = v(u(A + w - h + f), F[1])),
                C - y / 2 < 0
                  ? (F[0] = v(u(-C + y / 2), F[0]))
                  : C + y / 2 > d && (F[2] = v(u(C + y / 2 - d), F[2]))
          }
        }
        if (Ba(F) === 0 || this.verifyDataLabelOverflow(F))
          this.placeDataLabels(),
            r &&
              g &&
              p(this.points, function(b) {
                i = b.connector
                x = b.labelPos
                if ((t = b.dataLabel) && t._pos)
                  (G = t._attr.visibility),
                    (A = t.connX),
                    (C = t.connY),
                    (j = k
                      ? [
                          'M',
                          A + (x[6] === 'left' ? 5 : -5),
                          C,
                          'C',
                          A,
                          C,
                          2 * x[2] - x[4],
                          2 * x[3] - x[5],
                          x[2],
                          x[3],
                          'L',
                          x[4],
                          x[5]
                        ]
                      : ['M', A + (x[6] === 'left' ? 5 : -5), C, 'L', x[2], x[3], 'L', x[4], x[5]]),
                    i
                      ? (i.animate({ d: j }), i.attr('visibility', G))
                      : (b.connector = i = a.chart.renderer
                          .path(j)
                          .attr({
                            'stroke-width': g,
                            stroke: e.connectorColor || b.color || '#606060',
                            visibility: G
                          })
                          .add(a.dataLabelsGroup))
                else if (i) b.connector = i.destroy()
              })
      }
    }),
      (F.pie.prototype.placeDataLabels = function() {
        p(this.points, function(a) {
          var a = a.dataLabel,
            b
          if (a)
            (b = a._pos)
              ? (a.attr(a._attr), a[a.moved ? 'animate' : 'attr'](b), (a.moved = !0))
              : a && a.attr({ y: -999 })
        })
      }),
      (F.pie.prototype.alignDataLabel = sa),
      (F.pie.prototype.verifyDataLabelOverflow = function(a) {
        var b = this.center,
          c = this.options,
          d = c.center,
          e = (c = c.minSize || 80),
          f
        d[0] !== null
          ? (e = v(b[2] - v(a[1], a[3]), c))
          : ((e = v(b[2] - a[1] - a[3], c)), (b[0] += (a[3] - a[1]) / 2))
        d[1] !== null
          ? (e = v(C(e, b[2] - v(a[0], a[2])), c))
          : ((e = v(C(e, b[2] - a[0] - a[2]), c)), (b[1] += (a[0] - a[2]) / 2))
        e < b[2]
          ? ((b[2] = e),
            this.translate(b),
            p(this.points, function(a) {
              if (a.dataLabel) a.dataLabel._pos = null
            }),
            this.drawDataLabels && this.drawDataLabels())
          : (f = !0)
        return f
      })
  if (F.column)
    F.column.prototype.alignDataLabel = function(a, b, c, d, e) {
      var f = this.chart,
        g = f.inverted,
        h = a.dlBox || a.shapeArgs,
        i = a.below || a.plotY > m(this.translatedThreshold, f.plotSizeY),
        j = m(c.inside, !!this.options.stacking)
      if (
        h &&
        ((d = w(h)),
        g &&
          (d = {
            x: f.plotWidth - d.y - d.height,
            y: f.plotHeight - d.x - d.width,
            width: d.height,
            height: d.width
          }),
        !j)
      )
        g ? ((d.x += i ? 0 : d.width), (d.width = 0)) : ((d.y += i ? d.height : 0), (d.height = 0))
      c.align = m(c.align, !g || j ? 'center' : i ? 'right' : 'left')
      c.verticalAlign = m(c.verticalAlign, g || j ? 'middle' : i ? 'top' : 'bottom')
      O.prototype.alignDataLabel.call(this, a, b, c, d, e)
    }
  S = R.TrackerMixin = {
    drawTrackerPoint: function() {
      var a = this,
        b = a.chart,
        c = b.pointer,
        d = a.options.cursor,
        e = d && { cursor: d },
        f = function(c) {
          var d = c.target,
            e
          if (b.hoverSeries !== a) a.onMouseOver()
          for (; d && !e; ) (e = d.point), (d = d.parentNode)
          if (e !== t && e !== b.hoverPoint) e.onMouseOver(c)
        }
      p(a.points, function(a) {
        if (a.graphic) a.graphic.element.point = a
        if (a.dataLabel) a.dataLabel.element.point = a
      })
      if (!a._hasTracking)
        p(a.trackerGroups, function(b) {
          if (
            a[b] &&
            (a[b]
              .addClass('highcharts-tracker')
              .on('mouseover', f)
              .on('mouseout', function(a) {
                c.onTrackerMouseOut(a)
              })
              .css(e),
            $a)
          )
            a[b].on('touchstart', f)
        }),
          (a._hasTracking = !0)
    },
    drawTrackerGraph: function() {
      var a = this,
        b = a.options,
        c = b.trackByArea,
        d = [].concat(c ? a.areaPath : a.graphPath),
        e = d.length,
        f = a.chart,
        g = f.pointer,
        h = f.renderer,
        i = f.options.tooltip.snap,
        j = a.tracker,
        k = b.cursor,
        l = k && { cursor: k },
        k = a.singlePoints,
        m,
        n = function() {
          if (f.hoverSeries !== a) a.onMouseOver()
        },
        q = 'rgba(192,192,192,' + (aa ? 1.0e-4 : 0.002) + ')'
      if (e && !c)
        for (m = e + 1; m--; )
          d[m] === 'M' && d.splice(m + 1, 0, d[m + 1] - i, d[m + 2], 'L'),
            ((m && d[m] === 'M') || m === e) && d.splice(m, 0, 'L', d[m - 2] + i, d[m - 1])
      for (m = 0; m < k.length; m++)
        (e = k[m]), d.push('M', e.plotX - i, e.plotY, 'L', e.plotX + i, e.plotY)
      j
        ? j.attr({ d: d })
        : ((a.tracker = h
            .path(d)
            .attr({
              'stroke-linejoin': 'round',
              visibility: a.visible ? 'visible' : 'hidden',
              stroke: q,
              fill: c ? q : Q,
              'stroke-width': b.lineWidth + (c ? 0 : 2 * i),
              zIndex: 2
            })
            .add(a.group)),
          p([a.tracker, a.markerGroup], function(a) {
            a.addClass('highcharts-tracker')
              .on('mouseover', n)
              .on('mouseout', function(a) {
                g.onTrackerMouseOut(a)
              })
              .css(l)
            if ($a) a.on('touchstart', n)
          }))
    }
  }
  if (F.column) ga.prototype.drawTracker = S.drawTrackerPoint
  if (F.pie) F.pie.prototype.drawTracker = S.drawTrackerPoint
  if (F.scatter) pa.prototype.drawTracker = S.drawTrackerPoint
  q(lb.prototype, {
    setItemEvents: function(a, b, c, d, e) {
      var f = this
      ;(c ? b : a.legendGroup)
        .on('mouseover', function() {
          a.setState('hover')
          b.css(f.options.itemHoverStyle)
        })
        .on('mouseout', function() {
          b.css(a.visible ? d : e)
          a.setState()
        })
        .on('click', function(b) {
          var c = function() {
              a.setVisible()
            },
            b = { browserEvent: b }
          a.firePointEvent
            ? a.firePointEvent('legendItemClick', b, c)
            : D(a, 'legendItemClick', b, c)
        })
    },
    createCheckboxForItem: function(a) {
      a.checkbox = Y(
        'input',
        { type: 'checkbox', checked: a.selected, defaultChecked: a.selected },
        this.options.itemCheckboxStyle,
        this.chart.container
      )
      K(a.checkbox, 'click', function(b) {
        D(a, 'checkboxClick', { checked: b.target.checked }, function() {
          a.select()
        })
      })
    }
  })
  E.legend.itemStyle.cursor = 'pointer'
  q(Ya.prototype, {
    showResetZoom: function() {
      var a = this,
        b = E.lang,
        c = a.options.chart.resetZoomButton,
        d = c.theme,
        e = d.states,
        f = c.relativeTo === 'chart' ? null : 'plotBox'
      this.resetZoomButton = a.renderer
        .button(
          b.resetZoom,
          null,
          null,
          function() {
            a.zoomOut()
          },
          d,
          e && e.hover
        )
        .attr({ align: c.position.align, title: b.resetZoomTitle })
        .add()
        .align(c.position, !1, f)
    },
    zoomOut: function() {
      var a = this
      D(a, 'selection', { resetSelection: !0 }, function() {
        a.zoom()
      })
    },
    zoom: function(a) {
      var b,
        c = this.pointer,
        d = !1,
        e
      !a || a.resetSelection
        ? p(this.axes, function(a) {
            b = a.zoom()
          })
        : p(a.xAxis.concat(a.yAxis), function(a) {
            var e = a.axis,
              h = e.isXAxis
            if (c[h ? 'zoomX' : 'zoomY'] || c[h ? 'pinchX' : 'pinchY'])
              (b = e.zoom(a.min, a.max)), e.displayBtn && (d = !0)
          })
      e = this.resetZoomButton
      if (d && !e) this.showResetZoom()
      else if (!d && ca(e)) this.resetZoomButton = e.destroy()
      b && this.redraw(m(this.options.chart.animation, a && a.animation, this.pointCount < 100))
    },
    pan: function(a, b) {
      var c = this,
        d = c.hoverPoints,
        e
      d &&
        p(d, function(a) {
          a.setState()
        })
      p(b === 'xy' ? [1, 0] : [1], function(b) {
        var d = a[b ? 'chartX' : 'chartY'],
          h = c[b ? 'xAxis' : 'yAxis'][0],
          i = c[b ? 'mouseDownX' : 'mouseDownY'],
          j = (h.pointRange || 0) / 2,
          k = h.getExtremes(),
          l = h.toValue(i - d, !0) + j,
          i = h.toValue(i + c[b ? 'plotWidth' : 'plotHeight'] - d, !0) - j
        h.series.length &&
          l > C(k.dataMin, k.min) &&
          i < v(k.dataMax, k.max) &&
          (h.setExtremes(l, i, !1, !1, { trigger: 'pan' }), (e = !0))
        c[b ? 'mouseDownX' : 'mouseDownY'] = d
      })
      e && c.redraw(!1)
      G(c.container, { cursor: 'move' })
    }
  })
  q(Ea.prototype, {
    select: function(a, b) {
      var c = this,
        d = c.series,
        e = d.chart,
        a = m(a, !c.selected)
      c.firePointEvent(a ? 'select' : 'unselect', { accumulate: b }, function() {
        c.selected = c.options.selected = a
        d.options.data[Da(c, d.data)] = c.options
        c.setState(a && 'select')
        b ||
          p(e.getSelectedPoints(), function(a) {
            if (a.selected && a !== c)
              (a.selected = a.options.selected = !1),
                (d.options.data[Da(a, d.data)] = a.options),
                a.setState(''),
                a.firePointEvent('unselect')
          })
      })
    },
    onMouseOver: function(a) {
      var b = this.series,
        c = b.chart,
        d = c.tooltip,
        e = c.hoverPoint
      if (e && e !== this) e.onMouseOut()
      this.firePointEvent('mouseOver')
      d && (!d.shared || b.noSharedTooltip) && d.refresh(this, a)
      this.setState('hover')
      c.hoverPoint = this
    },
    onMouseOut: function() {
      var a = this.series.chart,
        b = a.hoverPoints
      if (!b || Da(this, b) === -1)
        this.firePointEvent('mouseOut'), this.setState(), (a.hoverPoint = null)
    },
    importEvents: function() {
      if (!this.hasImportedEvents) {
        var a = w(this.series.options.point, this.options).events,
          b
        this.events = a
        for (b in a) K(this, b, a[b])
        this.hasImportedEvents = !0
      }
    },
    setState: function(a, b) {
      var c = this.plotX,
        d = this.plotY,
        e = this.series,
        f = e.options.states,
        g = ba[e.type].marker && e.options.marker,
        h = g && !g.enabled,
        i = g && g.states[a],
        j = i && i.enabled === !1,
        k = e.stateMarkerGraphic,
        l = this.marker || {},
        m = e.chart,
        n = e.halo,
        p,
        a = a || ''
      p = this.pointAttr[a] || e.pointAttr[a]
      if (
        !(
          (a === this.state && !b) ||
          (this.selected && a !== 'select') ||
          (f[a] && f[a].enabled === !1) ||
          (a && (j || (h && i.enabled === !1))) ||
          (a && l.states && l.states[a] && l.states[a].enabled === !1)
        )
      ) {
        if (this.graphic)
          (g = g && this.graphic.symbolName && p.r),
            this.graphic.attr(w(p, g ? { x: c - g, y: d - g, width: 2 * g, height: 2 * g } : {})),
            k && k.hide()
        else {
          if (a && i)
            if (
              ((g = i.radius),
              (l = l.symbol || e.symbol),
              k && k.currentSymbol !== l && (k = k.destroy()),
              k)
            )
              k[b ? 'animate' : 'attr']({ x: c - g, y: d - g })
            else if (l)
              (e.stateMarkerGraphic = k = m.renderer
                .symbol(l, c - g, d - g, 2 * g, 2 * g)
                .attr(p)
                .add(e.markerGroup)),
                (k.currentSymbol = l)
          if (k) k[a && m.isInsidePlot(c, d, m.inverted) ? 'show' : 'hide']()
        }
        if ((c = f[a] && f[a].halo) && c.size) {
          if (!n) e.halo = n = m.renderer.path().add(e.seriesGroup)
          n.attr(
            q(
              {
                fill: ya(this.color || e.color)
                  .setOpacity(c.opacity)
                  .get()
              },
              c.attributes
            )
          )[b ? 'animate' : 'attr']({ d: this.haloPath(c.size) })
        } else n && n.attr({ d: [] })
        this.state = a
      }
    },
    haloPath: function(a) {
      var b = this.series,
        c = b.chart,
        d = b.getPlotBox(),
        e = c.inverted
      return c.renderer.symbols.circle(
        d.translateX + (e ? b.yAxis.len - this.plotY : this.plotX) - a,
        d.translateY + (e ? b.xAxis.len - this.plotX : this.plotY) - a,
        a * 2,
        a * 2
      )
    }
  })
  q(O.prototype, {
    onMouseOver: function() {
      var a = this.chart,
        b = a.hoverSeries
      if (b && b !== this) b.onMouseOut()
      this.options.events.mouseOver && D(this, 'mouseOver')
      this.setState('hover')
      a.hoverSeries = this
    },
    onMouseOut: function() {
      var a = this.options,
        b = this.chart,
        c = b.tooltip,
        d = b.hoverPoint
      if (d) d.onMouseOut()
      this && a.events.mouseOut && D(this, 'mouseOut')
      c && !a.stickyTracking && (!c.shared || this.noSharedTooltip) && c.hide()
      this.setState()
      b.hoverSeries = null
    },
    setState: function(a) {
      var b = this.options,
        c = this.graph,
        d = this.graphNeg,
        e = b.states,
        b = b.lineWidth,
        a = a || ''
      if (this.state !== a)
        (this.state = a),
          (e[a] && e[a].enabled === !1) ||
            (a && (b = e[a].lineWidth || b + 1),
            c && !c.dashstyle && ((a = { 'stroke-width': b }), c.attr(a), d && d.attr(a)))
    },
    setVisible: function(a, b) {
      var c = this,
        d = c.chart,
        e = c.legendItem,
        f,
        g = d.options.chart.ignoreHiddenSeries,
        h = c.visible
      f = (c.visible = a = c.userOptions.visible = a === t ? !h : a) ? 'show' : 'hide'
      p(['group', 'dataLabelsGroup', 'markerGroup', 'tracker'], function(a) {
        if (c[a]) c[a][f]()
      })
      if (d.hoverSeries === c) c.onMouseOut()
      e && d.legend.colorizeItem(c, a)
      c.isDirty = !0
      c.options.stacking &&
        p(d.series, function(a) {
          if (a.options.stacking && a.visible) a.isDirty = !0
        })
      p(c.linkedSeries, function(b) {
        b.setVisible(a, !1)
      })
      if (g) d.isDirtyBox = !0
      b !== !1 && d.redraw()
      D(c, f)
    },
    setTooltipPoints: function(a) {
      var b = [],
        c,
        d,
        e = this.xAxis,
        f = e && e.getExtremes(),
        g = e ? e.tooltipLen || e.len : this.chart.plotSizeX,
        h,
        i,
        j = []
      if (!(this.options.enableMouseTracking === !1 || this.singularTooltips)) {
        if (a) this.tooltipPoints = null
        p(this.segments || this.points, function(a) {
          b = b.concat(a)
        })
        e && e.reversed && (b = b.reverse())
        this.orderTooltipPoints && this.orderTooltipPoints(b)
        a = b.length
        for (i = 0; i < a; i++)
          if (((e = b[i]), (c = e.x), c >= f.min && c <= f.max)) {
            h = b[i + 1]
            c = d === t ? 0 : d + 1
            for (
              d = b[i + 1]
                ? C(v(0, T((e.clientX + (h ? h.wrappedClientX || h.clientX : g)) / 2)), g)
                : g;
              c >= 0 && c <= d;

            )
              j[c++] = e
          }
        this.tooltipPoints = j
      }
    },
    show: function() {
      this.setVisible(!0)
    },
    hide: function() {
      this.setVisible(!1)
    },
    select: function(a) {
      this.selected = a = a === t ? !this.selected : a
      if (this.checkbox) this.checkbox.checked = a
      D(this, a ? 'select' : 'unselect')
    },
    drawTracker: S.drawTrackerGraph
  })
  q(R, {
    Axis: la,
    Chart: Ya,
    Color: ya,
    Point: Ea,
    Tick: Sa,
    Renderer: Za,
    Series: O,
    SVGElement: P,
    SVGRenderer: ta,
    arrayMin: Na,
    arrayMax: Ba,
    charts: V,
    dateFormat: cb,
    format: Ia,
    pathAnim: ub,
    getOptions: function() {
      return E
    },
    hasBidiBug: Nb,
    isTouchDevice: Jb,
    numberFormat: Ga,
    seriesTypes: F,
    setOptions: function(a) {
      E = w(!0, E, a)
      Cb()
      return E
    },
    addEvent: K,
    removeEvent: W,
    createElement: Y,
    discardElement: Pa,
    css: G,
    each: p,
    extend: q,
    map: Ua,
    merge: w,
    pick: m,
    splat: qa,
    extendClass: ka,
    pInt: z,
    wrap: Ma,
    svg: aa,
    canvas: fa,
    vml: !aa && !fa,
    product: 'Highcharts',
    version: '4.0.1'
  })
})()

/*
 Highcharts JS v4.0.1 (2014-04-24)

 (c) 2009-2013 Torstein Hønsi

 License: www.highcharts.com/license
*/
;(function(c) {
  function x(e, a, b, d) {
    var f, g, h
    b *= n
    a *= n
    var i = [],
      j,
      o,
      t
    b *= -1
    j = d.x
    o = d.y
    t = (d.z === 0 ? 1.0e-4 : d.z) * (d.vd || 25)
    var y = k(b),
      v = l(b),
      m = k(a),
      q = l(a),
      r,
      u,
      s
    c.each(e, function(a) {
      r = a.x - j
      u = a.y - o
      s = a.z || 0
      f = v * r - y * s
      g = -y * m * r - v * m * s + q * u
      h = y * q * r + v * q * s + m * u
      f = f * ((t - h) / t) + j
      g = g * ((t - h) / t) + o
      i.push({ x: C(f), y: C(g), z: C(h) })
    })
    return i
  }
  function z(e, a, b, d, f, c, h, i) {
    var j = []
    return c > f && c - f > m / 2 + 1.0e-4
      ? ((j = j.concat(z(e, a, b, d, f, f + m / 2, h, i))),
        (j = j.concat(z(e, a, b, d, f + m / 2, c, h, i))))
      : c < f && f - c > m / 2 + 1.0e-4
      ? ((j = j.concat(z(e, a, b, d, f, f - m / 2, h, i))),
        (j = j.concat(z(e, a, b, d, f - m / 2, c, h, i))))
      : ((j = c - f),
        [
          'C',
          e + b * l(f) - b * D * j * k(f) + h,
          a + d * k(f) + d * D * j * l(f) + i,
          e + b * l(c) + b * D * j * k(c) + h,
          a + d * k(c) - d * D * j * l(c) + i,
          e + b * l(c) + h,
          a + d * k(c) + i
        ])
  }
  function F(e) {
    if (this.chart.is3d()) {
      var a = this.chart.options.plotOptions.column.grouping
      a !== void 0 &&
        !a &&
        this.group.zIndex !== void 0 &&
        this.group.attr({ zIndex: this.group.zIndex * 10 })
      if (this.userOptions.borderColor === void 0) this.options.borderColor = this.color
      c.each(this.data, function(a) {
        var d = a.options.borderColor || a.color || a.series.userOptions.borderColor
        a.options.borderColor = d
        a.borderColor = d
        a.pointAttr[''].stroke = d
        a.pointAttr.hover.stroke = d
        a.pointAttr.select.stroke = d
      })
    }
    e.apply(this, [].slice.call(arguments, 1))
  }
  var m = Math.PI,
    n = m / 180,
    k = Math.sin,
    l = Math.cos,
    C = Math.round,
    D = (4 * (Math.sqrt(2) - 1)) / 3 / (m / 2)
  c.SVGRenderer.prototype.toLinePath = function(e, a) {
    var b = []
    c.each(e, function(a) {
      b.push('L', a.x, a.y)
    })
    b[0] = 'M'
    a && b.push('Z')
    return b
  }
  c.SVGRenderer.prototype.cuboid = function(e) {
    var a = this.g(),
      e = this.cuboidPath(e)
    a.front = this.path(e[0])
      .attr({ zIndex: e[3], 'stroke-linejoin': 'round' })
      .add(a)
    a.top = this.path(e[1])
      .attr({ zIndex: e[4], 'stroke-linejoin': 'round' })
      .add(a)
    a.side = this.path(e[2])
      .attr({ zIndex: e[5], 'stroke-linejoin': 'round' })
      .add(a)
    a.fillSetter = function(a) {
      var d = c
          .Color(a)
          .brighten(0.1)
          .get(),
        e = c
          .Color(a)
          .brighten(-0.1)
          .get()
      this.front.attr({ fill: a })
      this.top.attr({ fill: d })
      this.side.attr({ fill: e })
      this.color = a
      return this
    }
    a.opacitySetter = function(a) {
      this.front.attr({ opacity: a })
      this.top.attr({ opacity: a })
      this.side.attr({ opacity: a })
      return this
    }
    a.attr = function(a) {
      a.shapeArgs || a.x
        ? ((a = this.renderer.cuboidPath(a.shapeArgs || a)),
          this.front.attr({ d: a[0], zIndex: a[3] }),
          this.top.attr({ d: a[1], zIndex: a[4] }),
          this.side.attr({ d: a[2], zIndex: a[5] }))
        : c.SVGElement.prototype.attr.call(this, a)
      return this
    }
    a.animate = function(a, d, e) {
      a.x && a.y
        ? ((a = this.renderer.cuboidPath(a)),
          this.front.attr({ zIndex: a[3] }).animate({ d: a[0] }, d, e),
          this.top.attr({ zIndex: a[4] }).animate({ d: a[1] }, d, e),
          this.side.attr({ zIndex: a[5] }).animate({ d: a[2] }, d, e))
        : a.opacity
        ? (this.front.animate(a, d, e), this.top.animate(a, d, e), this.side.animate(a, d, e))
        : c.SVGElement.prototype.animate.call(this, a, d, e)
      return this
    }
    a.destroy = function() {
      this.front.destroy()
      this.top.destroy()
      this.side.destroy()
      return null
    }
    a.attr({ zIndex: -e[3] })
    return a
  }
  c.SVGRenderer.prototype.cuboidPath = function(e) {
    var a = e.x,
      b = e.y,
      d = e.z,
      c = e.height,
      g = e.width,
      h = e.depth,
      i = e.alpha,
      j = e.beta,
      a = [
        { x: a, y: b, z: d },
        { x: a + g, y: b, z: d },
        { x: a + g, y: b + c, z: d },
        { x: a, y: b + c, z: d },
        { x: a, y: b + c, z: d + h },
        { x: a + g, y: b + c, z: d + h },
        { x: a + g, y: b, z: d + h },
        { x: a, y: b, z: d + h }
      ],
      a = x(a, i, j, e.origin),
      e = ['M', a[0].x, a[0].y, 'L', a[7].x, a[7].y, 'L', a[6].x, a[6].y, 'L', a[1].x, a[1].y, 'Z'],
      b = ['M', a[3].x, a[3].y, 'L', a[2].x, a[2].y, 'L', a[5].x, a[5].y, 'L', a[4].x, a[4].y, 'Z'],
      d = ['M', a[1].x, a[1].y, 'L', a[2].x, a[2].y, 'L', a[5].x, a[5].y, 'L', a[6].x, a[6].y, 'Z'],
      c = ['M', a[0].x, a[0].y, 'L', a[7].x, a[7].y, 'L', a[4].x, a[4].y, 'L', a[3].x, a[3].y, 'Z']
    return [
      ['M', a[0].x, a[0].y, 'L', a[1].x, a[1].y, 'L', a[2].x, a[2].y, 'L', a[3].x, a[3].y, 'Z'],
      a[7].y < a[1].y ? e : a[4].y > a[2].y ? b : [],
      a[6].x > a[1].x ? d : a[7].x < a[0].x ? c : [],
      (a[0].z + a[1].z + a[2].z + a[3].z) / 4,
      j > 0 ? (a[0].z + a[7].z + a[6].z + a[1].z) / 4 : (a[3].z + a[2].z + a[5].z + a[4].z) / 4,
      i > 0 ? (a[1].z + a[2].z + a[5].z + a[6].z) / 4 : (a[0].z + a[7].z + a[4].z + a[3].z) / 4
    ]
  }
  c.SVGRenderer.prototype.arc3d = function(e) {
    e.alpha *= n
    e.beta *= n
    var a = this.g(),
      b = this.arc3dPath(e),
      d = a.renderer,
      f = b.zAll * 100
    a.shapeArgs = e
    a.side1 = d
      .path(b.side2)
      .attr({ zIndex: b.zSide2 })
      .add(a)
    a.side2 = d
      .path(b.side1)
      .attr({ zIndex: b.zSide1 })
      .add(a)
    a.inn = d
      .path(b.inn)
      .attr({ zIndex: b.zInn })
      .add(a)
    a.out = d
      .path(b.out)
      .attr({ zIndex: b.zOut })
      .add(a)
    a.top = d
      .path(b.top)
      .attr({ zIndex: b.zTop })
      .add(a)
    a.fillSetter = function(a) {
      this.color = a
      var b = c
        .Color(a)
        .brighten(-0.1)
        .get()
      this.side1.attr({ fill: b })
      this.side2.attr({ fill: b })
      this.inn.attr({ fill: b })
      this.out.attr({ fill: b })
      this.top.attr({ fill: a })
      return this
    }
    a.animate = function(a, b, d) {
      c.SVGElement.prototype.animate.call(this, a, b, d)
      if (a.x && a.y)
        (b = this.renderer),
          (a = c.splat(a)[0]),
          (a.alpha *= n),
          (a.beta *= n),
          (b = b.arc3dPath(a)),
          (this.shapeArgs = a),
          this.inn.attr({ d: b.inn, zIndex: b.zInn }),
          this.out.attr({ d: b.out, zIndex: b.zOut }),
          this.side1.attr({ d: b.side1, zIndex: b.zSide2 }),
          this.side2.attr({ d: b.side2, zIndex: b.zSide1 }),
          this.top.attr({ d: b.top, zIndex: b.zTop }),
          this.attr({ fill: this.color }),
          this.attr({ zIndex: b.zAll * 100 })
      return this
    }
    a.zIndex = f
    a.attr({ zIndex: f })
    return a
  }
  c.SVGRenderer.prototype.arc3dPath = function(e) {
    var a = e.x,
      b = e.y,
      d = e.start,
      c = e.end - 1.0e-5,
      g = e.r,
      h = e.innerR,
      i = e.depth,
      j = e.alpha,
      o = e.beta,
      t = l(d),
      y = k(d),
      v = l(c),
      n = k(c),
      q = g * l(o),
      r = g * l(j),
      u = h * l(o),
      s = h * l(j),
      A = i * k(o),
      B = i * k(j),
      i = ['M', a + q * t, b + r * y],
      i = i.concat(z(a, b, q, r, d, c, 0, 0)),
      i = i.concat(['L', a + u * v, b + s * n]),
      i = i.concat(z(a, b, u, s, c, d, 0, 0)),
      i = i.concat(['Z']),
      e = (e.start + e.end) / 2,
      e = k(o) * l(e) + k(-j) * k(-e),
      p = o > 0 ? m / 2 : 0,
      w = j > 0 ? 0 : m / 2,
      p = d > -p ? d : c > -p ? -p : d,
      x = c < m - w ? c : d < m - w ? m - w : c,
      w = ['M', a + q * l(p), b + r * k(p)],
      w = w.concat(z(a, b, q, r, p, x, 0, 0)),
      w = w.concat(['L', a + q * l(x) + A, b + r * k(x) + B]),
      w = w.concat(z(a, b, q, r, x, p, A, B)),
      w = w.concat(['Z']),
      p = ['M', a + u * t, b + s * y],
      p = p.concat(z(a, b, u, s, d, c, 0, 0)),
      p = p.concat(['L', a + u * l(c) + A, b + s * k(c) + B]),
      p = p.concat(z(a, b, u, s, c, d, A, B)),
      p = p.concat(['Z']),
      t = [
        'M',
        a + q * t,
        b + r * y,
        'L',
        a + q * t + A,
        b + r * y + B,
        'L',
        a + u * t + A,
        b + s * y + B,
        'L',
        a + u * t,
        b + s * y,
        'Z'
      ],
      a = [
        'M',
        a + q * v,
        b + r * n,
        'L',
        a + q * v + A,
        b + r * n + B,
        'L',
        a + u * v + A,
        b + s * n + B,
        'L',
        a + u * v,
        b + s * n,
        'Z'
      ],
      v = h + (g - h) / 2,
      b = Math.abs(e * 2 * v)
    g *= e
    h *= e
    d = (k(o) * l(d) + k(-j) * k(-d)) * v
    c = (k(o) * l(c) + k(-j) * k(-c)) * v
    return {
      top: i,
      zTop: b * 100,
      out: w,
      zOut: g * 100,
      inn: p,
      zInn: h * 100,
      side1: t,
      zSide1: d * 100,
      side2: a,
      zSide2: c * 100,
      zAll: e
    }
  }
  c.Chart.prototype.is3d = function() {
    return this.options.chart.options3d && this.options.chart.options3d.enabled
  }
  c.wrap(c.Chart.prototype, 'isInsidePlot', function(c) {
    return this.is3d() ? !0 : c.apply(this, [].slice.call(arguments, 1))
  })
  c.wrap(c.Chart.prototype, 'init', function(e) {
    var a = arguments
    a[1] = c.merge(
      {
        chart: {
          options3d: {
            enabled: !1,
            alpha: 0,
            beta: 0,
            depth: 100,
            viewDistance: 25,
            frame: {
              bottom: { size: 1, color: 'rgba(255,255,255,0)' },
              side: { size: 1, color: 'rgba(255,255,255,0)' },
              back: { size: 1, color: 'rgba(255,255,255,0)' }
            }
          }
        }
      },
      a[1]
    )
    e.apply(this, [].slice.call(a, 1))
  })
  c.wrap(c.Chart.prototype, 'setChartSize', function(c) {
    c.apply(this, [].slice.call(arguments, 1))
    if (this.is3d()) {
      var a = this.inverted,
        b = this.clipBox,
        d = this.margin
      b[a ? 'y' : 'x'] = -(d[3] || 0)
      b[a ? 'x' : 'y'] = -(d[0] || 0)
      b[a ? 'height' : 'width'] = this.chartWidth + (d[3] || 0) + (d[1] || 0)
      b[a ? 'width' : 'height'] = this.chartHeight + (d[0] || 0) + (d[2] || 0)
    }
  })
  c.wrap(c.Chart.prototype, 'redraw', function(c) {
    if (this.is3d()) this.isDirtyBox = !0
    c.apply(this, [].slice.call(arguments, 1))
  })
  c.Chart.prototype.retrieveStacks = function() {
    var e = {},
      a = this.options.plotOptions[this.options.chart.type],
      b = a.stacking,
      d = 1
    if (a.grouping || !b) return this.series
    c.each(this.series, function(a) {
      e[a.options.stack || 0]
        ? e[a.options.stack || 0].series.push(a)
        : ((e[a.options.stack || 0] = { series: [a], position: d }), d++)
    })
    e.totalStacks = d + 1
    return e
  }
  c.wrap(c.Axis.prototype, 'init', function(e) {
    var a = arguments
    if (a[1].is3d())
      (a[2].tickWidth = c.pick(a[2].tickWidth, 0)),
        (a[2].gridLineWidth = c.pick(a[2].gridLineWidth, 1))
    e.apply(this, [].slice.call(arguments, 1))
  })
  c.wrap(c.Axis.prototype, 'render', function(c) {
    c.apply(this, [].slice.call(arguments, 1))
    if (this.chart.is3d()) {
      var a = this.chart,
        b = a.renderer,
        d = a.options.chart.options3d,
        f = d.alpha,
        g = d.beta * (a.yAxis[0].opposite ? -1 : 1),
        h = d.frame,
        i = h.bottom,
        j = h.back,
        h = h.side,
        o = d.depth,
        k = this.height,
        l = this.width,
        m = this.left,
        n = this.top,
        d = {
          x: a.plotLeft + a.plotWidth / 2,
          y: a.plotTop + a.plotHeight / 2,
          z: o,
          vd: d.viewDistance
        }
      if (this.horiz)
        this.axisLine && this.axisLine.hide(),
          (g = {
            x: m,
            y: n + (a.yAxis[0].reversed ? -i.size : k),
            z: 0,
            width: l,
            height: i.size,
            depth: o,
            alpha: f,
            beta: g,
            origin: d
          }),
          this.bottomFrame
            ? this.bottomFrame.animate(g)
            : (this.bottomFrame = b
                .cuboid(g)
                .attr({ fill: i.color, zIndex: a.yAxis[0].reversed && f > 0 ? 4 : -1 })
                .css({ stroke: i.color })
                .add())
      else {
        var q = {
          x: m,
          y: n,
          z: o + 1,
          width: l,
          height: k + i.size,
          depth: j.size,
          alpha: f,
          beta: g,
          origin: d
        }
        this.backFrame
          ? this.backFrame.animate(q)
          : (this.backFrame = b
              .cuboid(q)
              .attr({ fill: j.color, zIndex: -3 })
              .css({ stroke: j.color })
              .add())
        this.axisLine && this.axisLine.hide()
        a = {
          x: (a.yAxis[0].opposite ? l : 0) + m - h.size,
          y: n,
          z: 0,
          width: h.size,
          height: k + i.size,
          depth: o + j.size,
          alpha: f,
          beta: g,
          origin: d
        }
        this.sideFrame
          ? this.sideFrame.animate(a)
          : (this.sideFrame = b
              .cuboid(a)
              .attr({ fill: h.color, zIndex: -2 })
              .css({ stroke: h.color })
              .add())
      }
    }
  })
  c.wrap(c.Axis.prototype, 'getPlotLinePath', function(c) {
    var a = c.apply(this, [].slice.call(arguments, 1))
    if (!this.chart.is3d()) return a
    if (a === null) return a
    var b = this.chart,
      d = b.options.chart.options3d,
      f = d.depth
    d.origin = {
      x: b.plotLeft + b.plotWidth / 2,
      y: b.plotTop + b.plotHeight / 2,
      z: f,
      vd: d.viewDistance
    }
    var a = [
        { x: a[1], y: a[2], z: this.horiz || this.opposite ? f : 0 },
        { x: a[1], y: a[2], z: f },
        { x: a[4], y: a[5], z: f },
        { x: a[4], y: a[5], z: this.horiz || this.opposite ? 0 : f }
      ],
      f = b.options.inverted ? d.beta : d.alpha,
      g = b.options.inverted ? d.alpha : d.beta
    g *= b.yAxis[0].opposite ? -1 : 1
    a = x(a, f, g, d.origin)
    return (a = this.chart.renderer.toLinePath(a, !1))
  })
  c.wrap(c.Tick.prototype, 'getMarkPath', function(c) {
    var a = c.apply(this, [].slice.call(arguments, 1))
    if (!this.axis.chart.is3d()) return a
    var b = this.axis.chart,
      d = b.options.chart.options3d,
      f = {
        x: b.plotLeft + b.plotWidth / 2,
        y: b.plotTop + b.plotHeight / 2,
        z: d.depth,
        vd: d.viewDistance
      },
      a = [{ x: a[1], y: a[2], z: 0 }, { x: a[4], y: a[5], z: 0 }],
      g = b.inverted ? d.beta : d.alpha,
      d = b.inverted ? d.alpha : d.beta
    d *= b.yAxis[0].opposite ? -1 : 1
    a = x(a, g, d, f)
    return (a = ['M', a[0].x, a[0].y, 'L', a[1].x, a[1].y])
  })
  c.wrap(c.Tick.prototype, 'getLabelPosition', function(c) {
    var a = c.apply(this, [].slice.call(arguments, 1))
    if (!this.axis.chart.is3d()) return a
    var b = this.axis.chart,
      d = b.options.chart.options3d,
      f = {
        x: b.plotLeft + b.plotWidth / 2,
        y: b.plotTop + b.plotHeight / 2,
        z: d.depth,
        vd: d.viewDistance
      },
      g = b.inverted ? d.beta : d.alpha,
      d = b.inverted ? d.alpha : d.beta
    d *= b.yAxis[0].opposite ? -1 : 1
    return (a = x([{ x: a.x, y: a.y, z: 0 }], g, d, f)[0])
  })
  c.wrap(c.Axis.prototype, 'drawCrosshair', function(c) {
    var a = arguments
    this.chart.is3d() &&
      a[2] &&
      (a[2] = { plotX: a[2].plotXold || a[2].plotX, plotY: a[2].plotYold || a[2].plotY })
    c.apply(this, [].slice.call(a, 1))
  })
  c.wrap(c.seriesTypes.column.prototype, 'translate', function(e) {
    e.apply(this, [].slice.call(arguments, 1))
    if (this.chart.is3d()) {
      var a = this.chart,
        b = a.options,
        d = b.plotOptions[this.chart.options.chart.type],
        b = b.chart.options3d,
        f = d.depth || 25,
        g = { x: a.plotWidth / 2, y: a.plotHeight / 2, z: b.depth, vd: b.viewDistance },
        h = b.alpha,
        i = b.beta * (a.yAxis[0].opposite ? -1 : 1),
        j = (d.stacking ? this.options.stack || 0 : this._i) * (f + (d.groupZPadding || 1))
      d.grouping !== !1 && (j = 0)
      j += d.groupZPadding || 1
      c.each(this.data, function(a) {
        var b = a.shapeArgs,
          c = a.tooltipPos
        a.shapeType = 'cuboid'
        b.alpha = h
        b.beta = i
        b.z = j
        b.origin = g
        b.depth = f
        c = x([{ x: c[0], y: c[1], z: j }], h, i, g)[0]
        a.tooltipPos = [c.x, c.y]
      })
    }
  })
  c.wrap(c.seriesTypes.column.prototype, 'animate', function(e) {
    if (this.chart.is3d()) {
      var a = arguments[1],
        b = this.yAxis,
        d = this,
        f = this.yAxis.reversed
      if (c.svg)
        a
          ? c.each(d.data, function(a) {
              a.height = a.shapeArgs.height
              a.shapeArgs.height = 1
              if (!f)
                a.shapeArgs.y = a.stackY
                  ? a.plotY + b.translate(a.stackY)
                  : a.plotY + (a.negative ? -a.height : a.height)
            })
          : (c.each(d.data, function(a) {
              a.shapeArgs.height = a.height
              if (!f) a.shapeArgs.y = a.plotY - (a.negative ? a.height : 0)
              a.graphic && a.graphic.animate(a.shapeArgs, d.options.animation)
            }),
            (d.animate = null))
    } else e.apply(this, [].slice.call(arguments, 1))
  })
  c.wrap(c.seriesTypes.column.prototype, 'init', function(c) {
    c.apply(this, [].slice.call(arguments, 1))
    if (this.chart.is3d()) {
      var a = this.chart.options.plotOptions.column.grouping,
        b = this.chart.options.plotOptions.column.stacking,
        d = this.options.zIndex
      if (!d && (a === void 0 || a) && b) {
        a = this.chart.retrieveStacks()
        b = this.options.stack || 0
        for (d = 0; d < a[b].series.length; d++) if (a[b].series[d] === this) break
        d = a.totalStacks * 10 - 10 * (a.totalStacks - a[b].position) - d
        this.options.zIndex = d
      }
    }
  })
  c.seriesTypes.columnrange && c.wrap(c.seriesTypes.columnrange.prototype, 'drawPoints', F)
  c.wrap(c.seriesTypes.column.prototype, 'drawPoints', F)
  var E = c.getOptions()
  E.plotOptions.cylinder = c.merge(E.plotOptions.column)
  E = c.extendClass(c.seriesTypes.column, { type: 'cylinder' })
  c.seriesTypes.cylinder = E
  c.wrap(c.seriesTypes.cylinder.prototype, 'translate', function(e) {
    e.apply(this, [].slice.call(arguments, 1))
    if (this.chart.is3d()) {
      var a = this.chart,
        b = a.options,
        d = b.plotOptions.cylinder,
        b = b.chart.options3d,
        f = d.depth || 0,
        g = {
          x: a.inverted ? a.plotHeight / 2 : a.plotWidth / 2,
          y: a.inverted ? a.plotWidth / 2 : a.plotHeight / 2,
          z: b.depth,
          vd: b.viewDistance
        },
        h = b.alpha,
        i = d.stacking ? (this.options.stack || 0) * f : this._i * f
      i += f / 2
      d.grouping !== !1 && (i = 0)
      c.each(this.data, function(a) {
        var b = a.shapeArgs
        a.shapeType = 'arc3d'
        b.x += f / 2
        b.z = i
        b.start = 0
        b.end = 2 * m
        b.r = f * 0.95
        b.innerR = 0
        b.depth = b.height * (1 / k((90 - h) * n)) - i
        b.alpha = 90 - h
        b.beta = 0
        b.origin = g
      })
    }
  })
  c.wrap(c.seriesTypes.pie.prototype, 'translate', function(e) {
    e.apply(this, [].slice.call(arguments, 1))
    if (this.chart.is3d()) {
      var a = this,
        b = a.chart,
        d = b.options,
        f = d.plotOptions.pie,
        g = f.depth || 0,
        d = d.chart.options3d,
        h = { x: b.plotWidth / 2, y: b.plotHeight / 2, z: d.depth },
        i = d.alpha,
        j = d.beta,
        o = f.stacking ? (this.options.stack || 0) * g : a._i * g
      o += g / 2
      f.grouping !== !1 && (o = 0)
      c.each(a.data, function(b) {
        b.shapeType = 'arc3d'
        var c = b.shapeArgs
        c.z = o
        c.depth = g * 0.75
        c.origin = h
        c.alpha = i
        c.beta = j
        c = (c.end + c.start) / 2
        b.slicedTranslation = {
          translateX: C(l(c) * a.options.slicedOffset * l(i * n)),
          translateY: C(k(c) * a.options.slicedOffset * l(i * n))
        }
      })
    }
  })
  c.wrap(c.seriesTypes.pie.prototype.pointClass.prototype, 'haloPath', function(c) {
    return this.series.chart.is3d() ? [] : c.call(this)
  })
  c.wrap(c.seriesTypes.pie.prototype, 'drawPoints', function(e) {
    this.chart.is3d() &&
      c.each(this.data, function(a) {
        var b =
          a.options.borderColor || a.color || a.series.userOptions.borderColor || a.series.color
        a.options.borderColor = b
        a.borderColor = b
        a.pointAttr[''].stroke = b
        a.pointAttr.hover.stroke = b
        a.pointAttr.select.stroke = b
      })
    e.apply(this, [].slice.call(arguments, 1))
  })
  c.wrap(c.seriesTypes.pie.prototype, 'drawDataLabels', function(e) {
    e.apply(this, [].slice.call(arguments, 1))
    this.chart.is3d() &&
      c.each(this.data, function(a) {
        var b = a.shapeArgs,
          c = b.r,
          e = b.depth,
          g = b.alpha * n,
          h = b.beta * n,
          b = (b.start + b.end) / 2
        a.connector &&
          a.connector.translate(
            -c * (1 - l(h)) * l(b) + (l(b) > 0 ? k(h) * e : 0),
            -c * (1 - l(g)) * k(b) + (k(b) > 0 ? k(g) * e : 0)
          )
        a.dataLabel &&
          a.dataLabel.attr({
            x:
              a.dataLabel.connX +
              -c * (1 - l(h)) * l(b) +
              (l(b) > 0 ? l(h) * e : 0) -
              a.dataLabel.width / 2,
            y:
              a.dataLabel.connY +
              -c * (1 - l(g)) * k(b) +
              (k(b) > 0 ? k(g) * e : 0) -
              a.dataLabel.height / 2
          })
      })
  })
  c.wrap(c.seriesTypes.pie.prototype, 'addPoint', function(c) {
    c.apply(this, [].slice.call(arguments, 1))
    this.chart.is3d() && this.update()
  })
  c.wrap(c.seriesTypes.pie.prototype, 'animate', function(e) {
    if (this.chart.is3d()) {
      var a = arguments[1],
        b = this.options.animation,
        d = this.center,
        f = this.group,
        g = this.markerGroup
      if (c.svg)
        if ((b === !0 && (b = {}), a)) {
          if (
            ((this.oldtranslateX = f.translateX),
            (this.oldtranslateY = f.translateY),
            (a = { translateX: d[0], translateY: d[1], scaleX: 0.001, scaleY: 0.001 }),
            f.attr(a),
            g)
          )
            (g.attrSetters = f.attrSetters), g.attr(a)
        } else
          (a = {
            translateX: this.oldtranslateX,
            translateY: this.oldtranslateY,
            scaleX: 1,
            scaleY: 1
          }),
            f.animate(a, b),
            g && g.animate(a, b),
            (this.animate = null)
    } else e.apply(this, [].slice.call(arguments, 1))
  })
  c.wrap(c.seriesTypes.scatter.prototype, 'translate', function(e) {
    e.apply(this, [].slice.call(arguments, 1))
    if (this.chart.is3d()) {
      var a = this.chart,
        b = this.chart.options.chart.options3d,
        d = b.alpha,
        f = b.beta,
        g = {
          x: a.inverted ? a.plotHeight / 2 : a.plotWidth / 2,
          y: a.inverted ? a.plotWidth / 2 : a.plotHeight / 2,
          z: b.depth,
          vd: b.viewDistance
        },
        b = b.depth,
        h = a.options.zAxis || { min: 0, max: b },
        i = b / (h.max - h.min)
      c.each(this.data, function(a) {
        var b = { x: a.plotX, y: a.plotY, z: (a.z - h.min) * i },
          b = x([b], d, f, g)[0]
        a.plotXold = a.plotX
        a.plotYold = a.plotY
        a.plotX = b.x
        a.plotY = b.y
        a.plotZ = b.z
      })
    }
  })
  c.wrap(c.seriesTypes.scatter.prototype, 'init', function(c) {
    var a = c.apply(this, [].slice.call(arguments, 1))
    if (this.chart.is3d())
      (this.pointArrayMap = ['x', 'y', 'z']),
        (this.tooltipOptions.pointFormat = this.userOptions.tooltip
          ? this.userOptions.tooltip.pointFormat ||
            'x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>z: <b>{point.z}</b><br/>'
          : 'x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>z: <b>{point.z}</b><br/>')
    return a
  })
  if (c.VMLRenderer)
    c.setOptions({ animate: !1 }),
      (c.VMLRenderer.prototype.cuboid = c.SVGRenderer.prototype.cuboid),
      (c.VMLRenderer.prototype.cuboidPath = c.SVGRenderer.prototype.cuboidPath),
      (c.VMLRenderer.prototype.toLinePath = c.SVGRenderer.prototype.toLinePath),
      (c.VMLRenderer.prototype.createElement3D = c.SVGRenderer.prototype.createElement3D),
      (c.VMLRenderer.prototype.arc3d = function(e) {
        e = c.SVGRenderer.prototype.arc3d.call(this, e)
        e.css({ zIndex: e.zIndex })
        return e
      }),
      (c.VMLRenderer.prototype.arc3dPath = c.SVGRenderer.prototype.arc3dPath),
      (c.Chart.prototype.renderSeries = function() {
        for (var c, a = this.series.length; a--; )
          (c = this.series[a]),
            c.translate(),
            c.setTooltipPoints && c.setTooltipPoints(),
            c.render()
      }),
      c.wrap(c.Axis.prototype, 'render', function(c) {
        c.apply(this, [].slice.call(arguments, 1))
        this.sideFrame &&
          (this.sideFrame.css({ zIndex: 0 }),
          this.sideFrame.front.attr({ fill: this.sideFrame.color }))
        this.bottomFrame &&
          (this.bottomFrame.css({ zIndex: 1 }),
          this.bottomFrame.front.attr({ fill: this.bottomFrame.color }))
        this.backFrame &&
          (this.backFrame.css({ zIndex: 0 }),
          this.backFrame.front.attr({ fill: this.backFrame.color }))
      })
})(Highcharts)

/* globals jQuery, Highcharts */
/*jshint -W020 */

;('use strict')

var chart1,
  chart2,
  chart3,
  chart4,
  chart5,
  chart6,
  chart7,
  gascostforpie,
  electricitycostforpie,
  gasHistory // globally available
gascostforpie = 1630
electricitycostforpie = 398

//Initialize gas history, in the format of [[epochTime, price],[epochTime, price]]
gasHistory = [
  [786153600000, 1.174],
  [788832000000, 1.136],
  [791510400000, 1.163],
  [793929600000, 1.153],
  [796608000000, 1.153],
  [799200000000, 1.224],
  [801878400000, 1.288],
  [804470400000, 1.27],
  [807148800000, 1.22],
  [809827200000, 1.206],
  [812419200000, 1.197],
  [815097600000, 1.154],
  [817689600000, 1.146],
  [820368000000, 1.163],
  [823046400000, 1.168],
  [825552000000, 1.189],
  [828230400000, 1.244],
  [830822400000, 1.347],
  [833500800000, 1.347],
  [836092800000, 1.318],
  [838771200000, 1.297],
  [841449600000, 1.288],
  [844041600000, 1.286],
  [846720000000, 1.305],
  [849312000000, 1.332],
  [851990400000, 1.313],
  [854668800000, 1.321],
  [857088000000, 1.307],
  [859766400000, 1.281],
  [862358400000, 1.273],
  [865036800000, 1.287],
  [867628800000, 1.259],
  [870307200000, 1.252],
  [872985600000, 1.314],
  [875577600000, 1.281],
  [878256000000, 1.258],
  [880848000000, 1.239],
  [883526400000, 1.189],
  [886204800000, 1.146],
  [888624000000, 1.128],
  [891302400000, 1.117],
  [893894400000, 1.123],
  [896572800000, 1.138],
  [899164800000, 1.128],
  [901843200000, 1.118],
  [904521600000, 1.085],
  [907113600000, 1.085],
  [909792000000, 1.089],
  [912384000000, 1.048],
  [915062400000, 1.008],
  [917740800000, 1.006],
  [920160000000, 0.979],
  [922838400000, 1.141],
  [925430400000, 1.187],
  [928108800000, 1.18],
  [930700800000, 1.185],
  [933379200000, 1.261],
  [936057600000, 1.302],
  [938649600000, 1.342],
  [941328000000, 1.319],
  [943920000000, 1.357],
  [946598400000, 1.358],
  [949276800000, 1.398],
  [951782400000, 1.499],
  [954460800000, 1.576],
  [957052800000, 1.495],
  [959731200000, 1.594],
  [962323200000, 1.712],
  [965001600000, 1.541],
  [967680000000, 1.544],
  [970272000000, 1.607],
  [972950400000, 1.608],
  [975542400000, 1.575],
  [978220800000, 1.467],
  [980899200000, 1.533],
  [983318400000, 1.498],
  [985996800000, 1.468],
  [988588800000, 1.671],
  [991267200000, 1.73],
  [993859200000, 1.546],
  [996537600000, 1.406],
  [999216000000, 1.538],
  [1001808000000, 1.532],
  [1004486400000, 1.278],
  [1007078400000, 1.18],
  [1009756800000, 1.182],
  [1012435200000, 1.167],
  [1014854400000, 1.172],
  [1017532800000, 1.393],
  [1020124800000, 1.44],
  [1022803200000, 1.438],
  [1025395200000, 1.428],
  [1028073600000, 1.459],
  [1030752000000, 1.45],
  [1033344000000, 1.471],
  [1036022400000, 1.51],
  [1038614400000, 1.423],
  [1041292800000, 1.506],
  [1043971200000, 1.525],
  [1046390400000, 1.7],
  [1049068800000, 1.666],
  [1051660800000, 1.574],
  [1054339200000, 1.517],
  [1056931200000, 1.525],
  [1059609600000, 1.574],
  [1062288000000, 1.775],
  [1064880000000, 1.613],
  [1067558400000, 1.579],
  [1070150400000, 1.563],
  [1072828800000, 1.544],
  [1075507200000, 1.691],
  [1078012800000, 1.726],
  [1080691200000, 1.802],
  [1083283200000, 1.859],
  [1085961600000, 2.084],
  [1088553600000, 1.947],
  [1091232000000, 1.948],
  [1093910400000, 1.911],
  [1096502400000, 1.979],
  [1099180800000, 2.068],
  [1101772800000, 1.994],
  [1104451200000, 1.851],
  [1107129600000, 1.982],
  [1109548800000, 1.989],
  [1112227200000, 2.225],
  [1114819200000, 2.285],
  [1117497600000, 2.14],
  [1120089600000, 2.266],
  [1122768000000, 2.323],
  [1125446400000, 2.665],
  [1128038400000, 2.865],
  [1130716800000, 2.542],
  [1133308800000, 2.217],
  [1135987200000, 2.278],
  [1138665600000, 2.422],
  [1141084800000, 2.323],
  [1143763200000, 2.57],
  [1146355200000, 2.972],
  [1149033600000, 2.871],
  [1151625600000, 2.885],
  [1154304000000, 3.046],
  [1156982400000, 2.891],
  [1159574400000, 2.425],
  [1162252800000, 2.294],
  [1164844800000, 2.314],
  [1167523200000, 2.396],
  [1170201600000, 2.217],
  [1172620800000, 2.426],
  [1175299200000, 2.628],
  [1177891200000, 3.016],
  [1180569600000, 3.274],
  [1183161600000, 3.046],
  [1185840000000, 2.944],
  [1188518400000, 2.843],
  [1191110400000, 2.906],
  [1193788800000, 2.955],
  [1196380800000, 3.168],
  [1199059200000, 3.129],
  [1201737600000, 3.063],
  [1204243200000, 3.218],
  [1206921600000, 3.361],
  [1209513600000, 3.668],
  [1212192000000, 4.011],
  [1214784000000, 4.121],
  [1217462400000, 4.005],
  [1220140800000, 3.758],
  [1222732800000, 3.756],
  [1225411200000, 2.707],
  [1228003200000, 1.972],
  [1230681600000, 1.702],
  [1233360000000, 1.915],
  [1235779200000, 1.976],
  [1238457600000, 2.136],
  [1241049600000, 2.124],
  [1243728000000, 2.516],
  [1246320000000, 2.701],
  [1248998400000, 2.564],
  [1251676800000, 2.662],
  [1254268800000, 2.531],
  [1256947200000, 2.744],
  [1259539200000, 2.704],
  [1262217600000, 2.673],
  [1264896000000, 2.78],
  [1267315200000, 2.731],
  [1269993600000, 2.873],
  [1272585600000, 2.92],
  [1275264000000, 2.789],
  [1277856000000, 2.807],
  [1280534400000, 2.801],
  [1283212800000, 2.743],
  [1285804800000, 2.775],
  [1288483200000, 2.879],
  [1291075200000, 2.917],
  [1293753600000, 3.124],
  [1296432000000, 3.169],
  [1298851200000, 3.446],
  [1301529600000, 3.647],
  [1304121600000, 3.916],
  [1306800000000, 3.842],
  [1309392000000, 3.621],
  [1312070400000, 3.777],
  [1314748800000, 3.703],
  [1317340800000, 3.573],
  [1320019200000, 3.52],
  [1322611200000, 3.367],
  [1325289600000, 3.326],
  [1327968000000, 3.51],
  [1330473600000, 3.759],
  [1333152000000, 3.952],
  [1335744000000, 3.882],
  [1338422400000, 3.682],
  [1341014400000, 3.481],
  [1343692800000, 3.565],
  [1346371200000, 3.839],
  [1348963200000, 3.899],
  [1351641600000, 3.622],
  [1354233600000, 3.511],
  [1356912000000, 3.386],
  [1359590400000, 3.434],
  [1362009600000, 3.859],
  [1364688000000, 3.749],
  [1367280000000, 3.584],
  [1369958400000, 3.714],
  [1372550400000, 3.635],
  [1375228800000, 3.71],
  [1377907200000, 3.644],
  [1380499200000, 3.507],
  [1383177600000, 3.4],
  [1385769600000, 3.413],
  [1388448000000, 3.425],
  [1391126400000, 3.41],
  [1393545600000, 3.555],
  [1396224000000, 3.673],
  [1398816000000, 3.802],
  [1401494400000, 3.773],
  [1404086400000, 3.793],
  [1406764800000, 3.639],
  [1409443200000, 3.563],
  [1412035200000, 3.478],
  [1414713600000, 3.188],
  [1417305600000, 2.964],
  [1419984000000, 2.436],
  [1422662400000, 2.173],
  [1425081600000, 2.432],
  [1427760000000, 2.53],
  [1430352000000, 2.643],
  [1433030400000, 2.825],
  [1435622400000, 2.896],
  [1438300800000, 2.792],
  [1440979200000, 2.606],
  [1443571200000, 2.454]
]

jQuery(document).ready(function() {
  //https://www.quandl.com/data/FRED/GASMIDCOVW-US-Midgrade-Conventional-Gas-Price
  //https://www.quandl.com/api/v3/datasets/FRED/GASMIDCOVW.csv
  // This script creates a monthly array with an epoch timestamp that can then be used as an object or
  //http://www.epochconverter.com/
  // https://www.quandl.com/api/v3/datasets/FRED/GASMIDCOVW.json?auth_token=1pSvyraQWKbgLSu5zA_e&order=asc&exclude_headers=true&start_date=2000-09-01&collapse=monthly

  var gasGraphStartDate = new Date(gasGraphStartDate)
  //var gasGraphStartEpoch = gasGraphStartDate.getTime();
  var todaysDate = new Date()
  var todaysDateEpoch = todaysDate.getTime()

  // var testPrice = "[[\"2000-09-30\",1.607],[\"2000-10-31\",1.608],[\"2000-11-30\",1.575],[\"2000-12-31\",1.467],[\"2001-01-31\",1.533],[\"2001-02-28\",1.498],[\"2001-03-31\",1.468],[\"2001-04-30\",1.671],[\"2001-05-31\",1.73],[\"2001-06-30\",1.546],[\"2001-07-31\",1.406],[\"2001-08-31\",1.538],[\"2001-09-30\",1.532],[\"2001-10-31\",1.278],[\"2001-11-30\",1.18],[\"2001-12-31\",1.182],[\"2002-01-31\",1.167],[\"2002-02-28\",1.172],[\"2002-03-31\",1.393],[\"2002-04-30\",1.44],[\"2002-05-31\",1.438],[\"2002-06-30\",1.428],[\"2002-07-31\",1.459],[\"2002-08-31\",1.45],[\"2002-09-30\",1.471],[\"2002-10-31\",1.51],[\"2002-11-30\",1.423],[\"2002-12-31\",1.506],[\"2003-01-31\",1.525],[\"2003-02-28\",1.7],[\"2003-03-31\",1.666],[\"2003-04-30\",1.574],[\"2003-05-31\",1.517],[\"2003-06-30\",1.525],[\"2003-07-31\",1.574],[\"2003-08-31\",1.775],[\"2003-09-30\",1.613],[\"2003-10-31\",1.579],[\"2003-11-30\",1.563],[\"2003-12-31\",1.544],[\"2004-01-31\",1.691],[\"2004-02-29\",1.726],[\"2004-03-31\",1.802],[\"2004-04-30\",1.859],[\"2004-05-31\",2.084],[\"2004-06-30\",1.947],[\"2004-07-31\",1.948],[\"2004-08-31\",1.911],[\"2004-09-30\",1.979],[\"2004-10-31\",2.068],[\"2004-11-30\",1.994],[\"2004-12-31\",1.851],[\"2005-01-31\",1.982],[\"2005-02-28\",1.989],[\"2005-03-31\",2.225],[\"2005-04-30\",2.285],[\"2005-05-31\",2.14],[\"2005-06-30\",2.266],[\"2005-07-31\",2.323],[\"2005-08-31\",2.665],[\"2005-09-30\",2.865],[\"2005-10-31\",2.542],[\"2005-11-30\",2.217],[\"2005-12-31\",2.278],[\"2006-01-31\",2.422],[\"2006-02-28\",2.323],[\"2006-03-31\",2.57],[\"2006-04-30\",2.972],[\"2006-05-31\",2.871],[\"2006-06-30\",2.885],[\"2006-07-31\",3.046],[\"2006-08-31\",2.891],[\"2006-09-30\",2.425],[\"2006-10-31\",2.294],[\"2006-11-30\",2.314],[\"2006-12-31\",2.396],[\"2007-01-31\",2.217],[\"2007-02-28\",2.426],[\"2007-03-31\",2.628],[\"2007-04-30\",3.016],[\"2007-05-31\",3.274],[\"2007-06-30\",3.046],[\"2007-07-31\",2.944],[\"2007-08-31\",2.843],[\"2007-09-30\",2.906],[\"2007-10-31\",2.955],[\"2007-11-30\",3.168],[\"2007-12-31\",3.129],[\"2008-01-31\",3.063],[\"2008-02-29\",3.218],[\"2008-03-31\",3.361],[\"2008-04-30\",3.668],[\"2008-05-31\",4.011],[\"2008-06-30\",4.121],[\"2008-07-31\",4.005],[\"2008-08-31\",3.758],[\"2008-09-30\",3.756],[\"2008-10-31\",2.707],[\"2008-11-30\",1.972],[\"2008-12-31\",1.702],[\"2009-01-31\",1.915],[\"2009-02-28\",1.976],[\"2009-03-31\",2.136],[\"2009-04-30\",2.124],[\"2009-05-31\",2.516],[\"2009-06-30\",2.701],[\"2009-07-31\",2.564],[\"2009-08-31\",2.662],[\"2009-09-30\",2.531],[\"2009-10-31\",2.744],[\"2009-11-30\",2.704],[\"2009-12-31\",2.673],[\"2010-01-31\",2.78],[\"2010-02-28\",2.731],[\"2010-03-31\",2.873],[\"2010-04-30\",2.92],[\"2010-05-31\",2.789],[\"2010-06-30\",2.807],[\"2010-07-31\",2.801],[\"2010-08-31\",2.743],[\"2010-09-30\",2.775],[\"2010-10-31\",2.879],[\"2010-11-30\",2.917],[\"2010-12-31\",3.124],[\"2011-01-31\",3.169],[\"2011-02-28\",3.446],[\"2011-03-31\",3.647],[\"2011-04-30\",3.916],[\"2011-05-31\",3.842],[\"2011-06-30\",3.621],[\"2011-07-31\",3.777],[\"2011-08-31\",3.703],[\"2011-09-30\",3.573],[\"2011-10-31\",3.52],[\"2011-11-30\",3.367],[\"2011-12-31\",3.326],[\"2012-01-31\",3.51],[\"2012-02-29\",3.759],[\"2012-03-31\",3.952],[\"2012-04-30\",3.882],[\"2012-05-31\",3.682],[\"2012-06-30\",3.481],[\"2012-07-31\",3.565],[\"2012-08-31\",3.839],[\"2012-09-30\",3.899],[\"2012-10-31\",3.622],[\"2012-11-30\",3.511],[\"2012-12-31\",3.386],[\"2013-01-31\",3.434],[\"2013-02-28\",3.859],[\"2013-03-31\",3.749],[\"2013-04-30\",3.584],[\"2013-05-31\",3.714],[\"2013-06-30\",3.635],[\"2013-07-31\",3.71],[\"2013-08-31\",3.644],[\"2013-09-30\",3.507],[\"2013-10-31\",3.4],[\"2013-11-30\",3.413],[\"2013-12-31\",3.425],[\"2014-01-31\",3.41],[\"2014-02-28\",3.555],[\"2014-03-31\",3.673],[\"2014-04-30\",3.802],[\"2014-05-31\",3.773],[\"2014-06-30\",3.793],[\"2014-07-31\",3.639],[\"2014-08-31\",3.563],[\"2014-09-30\",3.478],[\"2014-10-31\",3.188],[\"2014-11-30\",2.964],[\"2014-12-31\",2.436],[\"2015-01-31\",2.173],[\"2015-02-28\",2.432],[\"2015-03-31\",2.53],[\"2015-04-30\",2.643],[\"2015-05-31\",2.825],[\"2015-06-30\",2.896],[\"2015-07-31\",2.792],[\"2015-08-31\",2.606],[\"2015-09-30\",2.449]]"
  //     //https://www.quandl.com/api/v3/datasets/FRED/GASMIDCOVW.json
  // var s = {
  //         name: 'Historical Gas Price',
  //         data: []
  //     },
  //     serialData = [],
  //     categories = [];
  // var flatData = [1.61, 1.59, 1.58, 1.50, 1.53, 1.52, 1.47, 1.59, 1.73, 1.63, 1.43, 1.46, 1.57, 1.33, 1.22, 1.15, 1.18, 1.18, 1.31, 1.46, 1.44, 1.43, 1.45, 1.44, 1.44, 1.51, 1.47, 1.44, 1.51, 1.67, 1.74, 1.61, 1.52, 1.53, 1.56, 1.67, 1.68, 1.60, 1.56, 1.54, 1.64, 1.70, 1.78, 1.84, 2.01, 2.00, 1.95, 1.93, 1.93, 2.04, 2.01, 1.89, 1.88, 1.97, 2.15, 2.30, 2.20, 2.21, 2.33, 2.58, 2.96, 2.86, 2.32, 2.26, 2.39, 2.34, 2.50, 2.81, 2.91, 2.90, 3.00, 3.00, 2.60, 2.31, 2.30, 2.38, 2.27, 2.33, 2.59, 2.85, 3.20, 3.12, 3.03, 2.87, 2.90, 2.89, 3.16, 3.08, 3.12, 3.12, 3.31, 3.52, 3.83, 4.08, 4.10, 3.84, 3.83, 3.13, 2.21, 1.75, 1.87, 2.00, 2.04, 2.13, 2.34, 2.72, 2.59, 2.67, 2.58, 2.60, 2.73, 2.68, 2.79, 2.71, 2.87, 2.92, 2.93, 2.78, 2.78, 2.79, 2.78, 2.87, 2.93, 3.06, 3.16, 3.22, 3.62, 3.85, 3.95, 3.73, 3.72, 3.70, 3.68, 3.51, 3.44, 3.34, 3.45, 3.64, 3.88, 3.97, 3.75, 3.57, 3.49, 3.78, 3.92, 3.76, 3.51, 3.40, 3.40, 3.73, 3.78, 3.62, 3.68, 3.69, 3.68, 3.65, 3.64, 3.44, 3.35, 3.38, 3.42, 3.47, 3.62, 3.76, 3.77, 3.78, 3.71, 3.59, 3.51, 3.30, 3.05, 2.62, 2.25, 2.33, 2.53, 2.56, 2.76, 2.89, 2.85, 2.74, 2.49],
  //     startDate = Date.UTC(2000, 1, 1);
  // // Set the xaxis value as first day of month
  // for (var i = 0; i < flatData.length; i++) {
  //     var d = new Date();
  //     d.setTime(startDate);
  //     d.setMonth(d.getMonth() + i);
  //     categories.push(d.getTime());
  // }
  // for (var i = 0; i < flatData.length; i++) {
  //     s.data.push([categories[i], flatData[i]]);
  // }
  // serialData.push(s);

  chart1 = new Highcharts.Chart({
    chart: {
      renderTo: 'piecontainer',
      type: 'pie',
      options3d: {
        enabled: true,
        alpha: 45,
        beta: 0,
        viewDistance: 100,
        depth: 100
      },
      plotBackgroundColor: null,
      spacingLeft: 60,
      spacingRight: 60,
      margin: [0, 20, 20, 20],
      plotBorderWidth: null,
      plotShadow: true
    },
    credits: {
      enabled: false
    },
    colors: ['#fff700', '#00aeef'],
    title: {
      enabled: false,
      text: null,
      margin: 50
    },

    tooltip: {
      formatter: function() {
        var s
        if (this.point.name == 'Gas') {
          // the pie chart

          s = '' + gascostforpie + ''
        } else {
          s = '' + electricitycostforpie + ''
        }
        return (
          '' +
          this.point.name +
          ' Driving: ' +
          Math.round(this.percentage) +
          '%<br />Yearly Costs: $' +
          s +
          ''
        )
      }
    },

    plotOptions: {
      pie: {
        allowPointSelect: false,
        cursor: 'pointer',
        depth: 35,
        center: ['50%', '50%'],
        dataLabels: {
          enabled: true,
          formatter: function() {
            if (this.y === 0) {
              return null
            } else return this.point.name
          },
          connectorColor: 'grey',
          distance: -40,
          color: 'white'
        },
        showInLegend: true,

        states: {
          hover: {
            enabled: false
          }
        }
      }
    },

    series: [
      {
        type: 'pie',
        name: 'Energy Costs',
        data: [
          {
            name: 'Gas',
            y: 48,
            selected: true,

            dataLabels: {
              color: 'black'
            }
          },
          {
            name: 'Electricity',
            y: 52,
            dataLabels: {
              distance: -60
            }
          }
        ]
      }
    ]
  })

  chart2 = new Highcharts.Chart({
    chart: {
      renderTo: 'barcontainer',
      type: 'column'
    },
    title: {
      text: ''
    },
    xAxis: {
      minorGridLineColor: '#fff',
      lineWidth: 0,
      tickWidth: 0,
      gridLineWidth: 0,
      categories: ['Conventional Vehicle', 'VIA VTRUX']
    },
    colors: ['#bdd73c', '#E86E34', '#0054ef'],
    yAxis: {
      min: 0,
      lineWidth: 0,
      gridLineColor: '#e0e0e0',
      minorGridLineWidth: 0,
      endOnTick: false,
      maxPadding: 0.025,
      tickWidth: 0,
      title: {
        text: 'Cost'
      },

      stackLabels: {
        enabled: false,
        align: 'left',
        textAlign: 'left',
        y: -25,
        style: {
          fontWeight: 'bold',
          font: '14px "flexoregular", Open Sans, Verdana, sans-serif',
          color: (Highcharts.theme && Highcharts.theme.textColor) || '#06C'
        }
      }
    },
    credits: {
      enabled: false
    },

    tooltip: {
      formatter: function() {
        return (
          '<b>' +
          this.series.name +
          '</b>: $' +
          Highcharts.numberFormat(this.y, 0, '.', ',') +
          '<br/><b>Total: </b>$' +
          this.total
        )
      }
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        shadow: false,

        dataLabels: {
          enabled: false
        }
      },
      column: {
        stacking: 'normal',
        states: {
          hover: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: true,
          color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'black'
        }
      }
    },

    series: [
      {
        name: 'Lease',
        data: [4981, 9025]
      },
      {
        name: 'Maintenance',
        data: [2400, 1400]
      },
      {
        name: 'Energy',
        data: [7073, 2028]
      }
    ]
  })

  chart3 = new Highcharts.Chart({
    chart: {
      renderTo: 'areacontainer',
      type: 'column',

      options3d: {
        enabled: true,
        alpha: 10,
        beta: 5,
        depth: 100,
        viewDistance: 100
      },
      width: jQuery('#tab-content-results').width()
    },
    title: {
      text: ' ',
      margin: 40,
      align: 'left',
      style: {
        fontSize: '28px'
      }
    },
    legend: {
      layout: 'vertical',
      align: 'left',
      verticalAlign: 'top',
      x: 120,
      y: 20,
      floating: true,
      borderWidth: 0,
      backgroundColor: 'rgba(248, 248, 248, 0.5)'
    },
    colors: ['#00aeef', '#9ae945'],
    xAxis: {
      categories: ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5', 'Year 6', 'Year 7', 'Year 8'],
      minorGridLineColor: '#fff',
      lineWidth: 0,
      tickWidth: 0,
      gridLineWidth: 0
    },
    yAxis: {
      title: {
        text: 'Yearly Energy Cost'
      },

      lineWidth: 0,
      gridLineColor: '#e0e0e0',
      minorGridLineWidth: 0,
      maxPadding: 0.025,
      tickWidth: 0
    },
    tooltip: {
      formatter: function() {
        return '<b>' + this.series.name + '</b>: $' + Highcharts.numberFormat(this.y, 0, '.', ',')
      }
    },
    credits: {
      enabled: false
    },
    plotOptions: {
      column: {
        dataLabels: {
          enabled: true,
          y: -20,
          borderRadius: 5,
          backgroundColor: 'rgba(248, 248, 248, 0.5)',
          formatter: function() {
            return '$' + Highcharts.numberFormat(this.y, 0, '.', ',') + ''
          }
        },
        series: {
          dataLabels: {
            enabled: true
          },
          marker: {
            symbol: 'circle'
          }
        }
      }
    },
    series: [
      {
        name: 'Conventional Gas Vehicle Energy',
        data: [6076, 6568, 7107, 7676, 8299, 8921, 9590]
      },
      {
        name: 'Electric Vehicle Energy',
        data: [1234, 1334, 1442, 1559, 1686, 1812, 1948]
      }
    ]
  })

  chart4 = new Highcharts.Chart({
    chart: {
      renderTo: 'roicontainer',
      type: 'column',
      options3d: {
        enabled: true,
        alpha: 0,
        beta: 0,
        viewDistance: 25,
        depth: 25
      },
      width: jQuery('#tab-content-results').width()
    },
    title: {
      text: 'Annual Return on Savings'
    },

    xAxis: {
      categories: ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5', 'Year 6', 'Year 7', 'Year 8'],
      minorGridLineColor: '#fff',
      lineWidth: 0,
      tickWidth: 0,
      gridLineWidth: 0
    },
    yAxis: {
      title: {
        text: 'Annual Return on Savings'
      },

      lineWidth: 0,
      gridLineColor: '#e0e0e0',
      minorGridLineWidth: 0,
      endOnTick: false,
      maxPadding: 0.2,
      tickWidth: 0
    },
    tooltip: {
      formatter: function() {
        return '$' + Highcharts.numberFormat(this.y, 0, '.', ',') + ''
      }
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true
        }
      },

      column: {
        dataLabels: {
          enabled: true,
          backgroundColor: '#f8f8f8',
          borderRadius: 3,

          formatter: function() {
            return '$' + Highcharts.numberFormat(this.y, 0, '.', ',') + ''
          }
        }
      }
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Annual Return',
        data: [-29661, -21313, -12964, -4616, 3733, 12081, 20430, 28778]
      }
    ]
  })

  chart5 = new Highcharts.Chart({
    chart: {
      renderTo: 'monthsSavechart',
      type: 'bar',
      options3d: {
        enabled: true,
        alpha: 0,
        beta: 0,
        viewDistance: 25,
        depth: 25
      },
      width: jQuery('#tab-content-results').width()
    },
    title: {
      text: ''
    },
    legend: {
      enabled: false
    },
    colors: ['#00aeef', '#9ae945'],
    xAxis: [
      {
        categories: ['Months'],
        reversed: false
      },
      {
        // mirror axis on right side
        opposite: true,
        reversed: false,
        categories: ['Months'],
        linkedTo: 0
      }
    ],
    yAxis: {
      title: {
        text: null
      },
      labels: {}
    },
    plotOptions: {
      series: {
        stacking: 'normal',
        borderWidth: 0
      },

      bar: {
        dataLabels: {
          enabled: true,
          backgroundColor: '#f8f8f8',
          Color: '#000000',
          borderRadius: 3,

          formatter: function() {
            return '' + Highcharts.numberFormat(this.point.y, 0, '.', ',') + ' Months'
          }
        }
      }
    },

    tooltip: {
      formatter: function() {
        return 'Months: ' + Highcharts.numberFormat(Math.abs(this.point.y), 0)
      }
    },
    credits: {
      enabled: false
    },

    series: [
      {
        data: [-54]
      },
      {
        data: [56]
      }
    ]
  })

  chart6 = new Highcharts.Chart({
    chart: {
      renderTo: 'carbonContainer',
      type: 'bar',
      options3d: {
        enabled: true,
        alpha: 0,
        beta: 0,
        viewDistance: 25,
        depth: 25
      },
      width: jQuery('#tab-content-results').width()
    },
    title: {
      text: 'CO<sub>2</sub> Comparison'
    },
    colors: ['#9ae945', '#00aeef'],
    xAxis: {
      categories: ['Standard Vehicle', 'VTRUX Vehicle'],
      minorGridLineColor: '#fff',
      lineWidth: 0,
      tickWidth: 0,
      gridLineWidth: 0
    },
    tooltip: {
      pointFormat: ' <span style="color:#000000">{series.name}</span>: <b>{point.y}</b><br/>',
      valueSuffix: ' lbs CO<sub>2</sub>',
      shared: true
    },
    yAxis: {
      min: 0,
      lineWidth: 0,
      gridLineColor: '#e0e0e0',
      minorGridLineWidth: 0,
      tickWidth: 0,
      tickLength: 0,
      title: {
        text: 'Pounds of CO<sub>2</sub>'
      }
    },

    legend: {
      reversed: true
    },
    credits: {
      enabled: false
    },
    plotOptions: {
      borderWidth: 0,
      series: {
        stacking: 'normal',
        borderWidth: 0
      },

      bar: {
        depth: 25,
        dataLabels: {
          enabled: false
        }
      }
    },
    series: [
      {
        name: 'CO<sub>2</sub> from Gas',
        data: [19583, 4512],
        zIndex: 2
      },
      {
        name: 'CO<sub>2</sub> from Electricity',
        data: [0, 0],
        zIndex: 1
      }
    ]
  })
  chart7 = new Highcharts.Chart({
    chart: {
      renderTo: 'historicalgas',
      zoomType: 'x',
      spacingRight: 20
    },
    title: {
      text: 'US National Average Gas Prices'
    },
    subtitle: {
      text:
        document.ontouchstart === undefined
          ? 'Click and drag in the plot area to zoom in'
          : 'Drag your finger over the plot to zoom in'
    },
    legend: {
      enabled: false
    },
    xAxis: {
      type: 'datetime',
      minorGridLineColor: '#fff',
      lineWidth: 0,
      tickWidth: 0,
      gridLineWidth: 0,
      maxZoom: 30.5 * 24 * 3600000, // thirty days
      title: {
        text: null
      },

      plotBands: [
        {
          from: todaysDateEpoch,
          to: todaysDateEpoch + 365 * 8,
          color: {
            linearGradient: {
              x1: 0,
              y1: 0,
              x2: 1,
              y2: 0
            },
            stops: [[0, 'rgb(230, 231, 233)'], [1, 'rgb(248, 248, 248)']]
          },
          label: {
            text: 'Projected Prices',
            align: 'left',
            x: 10,
            y: 15,
            zIndex: 5,
            style: {
              font: '15px flexoregular, Verdana, sans-serif'
            }
          }
        },
        {
          from: Date.UTC(1999, 9),
          to: Date.UTC(2015, 8, 30),
          color: '#f8f8f8',
          label: {
            text: 'Historical Prices',
            align: 'right',
            x: -10,
            y: 15,
            zIndex: 5,
            style: {
              font: '15px flexoregular, Verdana, sans-serif'
            }
          }
        }
      ]
    },
    yAxis: {
      lineWidth: 0,
      gridLineColor: '#e0e0e0',
      minorGridLineWidth: 0,
      minorTickInterval: 1,
      endOnTick: false,
      maxPadding: 0.25,
      tickWidth: 0,
      tickLength: 0,
      title: {
        text: 'Cost of Gas'
      }
    },

    credits: {
      text: 'Source: U.S. Energy Information Administration'
    },
    tooltip: {
      useHTML: true,
      formatter: function() {
        return '$' + Highcharts.numberFormat(this.y, 2, '.', ',') + ''
      }
    },
    colors: ['#696969', '#0054ef', '#0054ef'],
    plotOptions: {
      line: {
        lineWidth: 1,
        states: {
          hover: {
            lineWidth: 5
          }
        },
        marker: {
          enabled: false
        }
      },
      spline: {
        lineWidth: 4,
        states: {
          hover: {
            lineWidth: 5
          }
        },
        marker: {
          enabled: false
        }
      },
      area: {
        fillColor: {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1
          },
          stops: [
            [0, Highcharts.getOptions().colors[0]],
            [
              1,
              Highcharts.Color(Highcharts.getOptions().colors[0])
                .setOpacity(0.1)
                .get('rgba')
            ]
          ]
        },
        lineWidth: 1,
        marker: {
          enabled: false
        },
        shadow: false,
        states: {
          hover: {
            lineWidth: 1
          }
        },
        threshold: null
      }
    },

    series: [
      {
        type: 'area',
        name: 'Historical Gas Price',
        pointInterval: 24 * 3600 * 1000 * 7,
        pointStart: Date.UTC(2000, 8),
        data: [
          [938649600000, 1.342],
          [941328000000, 1.319],
          [943920000000, 1.357],
          [946598400000, 1.358],
          [949276800000, 1.398],
          [951782400000, 1.499],
          [954460800000, 1.576],
          [957052800000, 1.495],
          [959731200000, 1.594],
          [962323200000, 1.712],
          [965001600000, 1.541],
          [967680000000, 1.544],
          [970272000000, 1.607],
          [972950400000, 1.608],
          [975542400000, 1.575],
          [978220800000, 1.467],
          [980899200000, 1.533],
          [983318400000, 1.498],
          [985996800000, 1.468],
          [988588800000, 1.671],
          [991267200000, 1.73],
          [993859200000, 1.546],
          [996537600000, 1.406],
          [999216000000, 1.538],
          [1001808000000, 1.532],
          [1004486400000, 1.278],
          [1007078400000, 1.18],
          [1009756800000, 1.182],
          [1012435200000, 1.167],
          [1014854400000, 1.172],
          [1017532800000, 1.393],
          [1020124800000, 1.44],
          [1022803200000, 1.438],
          [1025395200000, 1.428],
          [1028073600000, 1.459],
          [1030752000000, 1.45],
          [1033344000000, 1.471],
          [1036022400000, 1.51],
          [1038614400000, 1.423],
          [1041292800000, 1.506],
          [1043971200000, 1.525],
          [1046390400000, 1.7],
          [1049068800000, 1.666],
          [1051660800000, 1.574],
          [1054339200000, 1.517],
          [1056931200000, 1.525],
          [1059609600000, 1.574],
          [1062288000000, 1.775],
          [1064880000000, 1.613],
          [1067558400000, 1.579],
          [1070150400000, 1.563],
          [1072828800000, 1.544],
          [1075507200000, 1.691],
          [1078012800000, 1.726],
          [1080691200000, 1.802],
          [1083283200000, 1.859],
          [1085961600000, 2.084],
          [1088553600000, 1.947],
          [1091232000000, 1.948],
          [1093910400000, 1.911],
          [1096502400000, 1.979],
          [1099180800000, 2.068],
          [1101772800000, 1.994],
          [1104451200000, 1.851],
          [1107129600000, 1.982],
          [1109548800000, 1.989],
          [1112227200000, 2.225],
          [1114819200000, 2.285],
          [1117497600000, 2.14],
          [1120089600000, 2.266],
          [1122768000000, 2.323],
          [1125446400000, 2.665],
          [1128038400000, 2.865],
          [1130716800000, 2.542],
          [1133308800000, 2.217],
          [1135987200000, 2.278],
          [1138665600000, 2.422],
          [1141084800000, 2.323],
          [1143763200000, 2.57],
          [1146355200000, 2.972],
          [1149033600000, 2.871],
          [1151625600000, 2.885],
          [1154304000000, 3.046],
          [1156982400000, 2.891],
          [1159574400000, 2.425],
          [1162252800000, 2.294],
          [1164844800000, 2.314],
          [1167523200000, 2.396],
          [1170201600000, 2.217],
          [1172620800000, 2.426],
          [1175299200000, 2.628],
          [1177891200000, 3.016],
          [1180569600000, 3.274],
          [1183161600000, 3.046],
          [1185840000000, 2.944],
          [1188518400000, 2.843],
          [1191110400000, 2.906],
          [1193788800000, 2.955],
          [1196380800000, 3.168],
          [1199059200000, 3.129],
          [1201737600000, 3.063],
          [1204243200000, 3.218],
          [1206921600000, 3.361],
          [1209513600000, 3.668],
          [1212192000000, 4.011],
          [1214784000000, 4.121],
          [1217462400000, 4.005],
          [1220140800000, 3.758],
          [1222732800000, 3.756],
          [1225411200000, 2.707],
          [1228003200000, 1.972],
          [1230681600000, 1.702],
          [1233360000000, 1.915],
          [1235779200000, 1.976],
          [1238457600000, 2.136],
          [1241049600000, 2.124],
          [1243728000000, 2.516],
          [1246320000000, 2.701],
          [1248998400000, 2.564],
          [1251676800000, 2.662],
          [1254268800000, 2.531],
          [1256947200000, 2.744],
          [1259539200000, 2.704],
          [1262217600000, 2.673],
          [1264896000000, 2.78],
          [1267315200000, 2.731],
          [1269993600000, 2.873],
          [1272585600000, 2.92],
          [1275264000000, 2.789],
          [1277856000000, 2.807],
          [1280534400000, 2.801],
          [1283212800000, 2.743],
          [1285804800000, 2.775],
          [1288483200000, 2.879],
          [1291075200000, 2.917],
          [1293753600000, 3.124],
          [1296432000000, 3.169],
          [1298851200000, 3.446],
          [1301529600000, 3.647],
          [1304121600000, 3.916],
          [1306800000000, 3.842],
          [1309392000000, 3.621],
          [1312070400000, 3.777],
          [1314748800000, 3.703],
          [1317340800000, 3.573],
          [1320019200000, 3.52],
          [1322611200000, 3.367],
          [1325289600000, 3.326],
          [1327968000000, 3.51],
          [1330473600000, 3.759],
          [1333152000000, 3.952],
          [1335744000000, 3.882],
          [1338422400000, 3.682],
          [1341014400000, 3.481],
          [1343692800000, 3.565],
          [1346371200000, 3.839],
          [1348963200000, 3.899],
          [1351641600000, 3.622],
          [1354233600000, 3.511],
          [1356912000000, 3.386],
          [1359590400000, 3.434],
          [1362009600000, 3.859],
          [1364688000000, 3.749],
          [1367280000000, 3.584],
          [1369958400000, 3.714],
          [1372550400000, 3.635],
          [1375228800000, 3.71],
          [1377907200000, 3.644],
          [1380499200000, 3.507],
          [1383177600000, 3.4],
          [1385769600000, 3.413],
          [1388448000000, 3.425],
          [1391126400000, 3.41],
          [1393545600000, 3.555],
          [1396224000000, 3.673],
          [1398816000000, 3.802],
          [1401494400000, 3.773],
          [1404086400000, 3.793],
          [1406764800000, 3.639],
          [1409443200000, 3.563],
          [1412035200000, 3.478],
          [1414713600000, 3.188],
          [1417305600000, 2.964],
          [1419984000000, 2.436],
          [1422662400000, 2.173],
          [1425081600000, 2.432],
          [1427760000000, 2.53],
          [1430352000000, 2.643],
          [1433030400000, 2.825],
          [1435622400000, 2.896],
          [1438300800000, 2.792],
          [1440979200000, 2.606],
          [1443571200000, 2.449]
        ]
      },
      // Define the data points. Note that in JavaScript, months start at 0 for January, 1 for February etc.

      {
        type: 'spline',
        name: 'Rate of Increase',
        marker: {
          symbol: 'circle'
        },
        pointInterval: 24 * 3600 * 1000 * 365,
        //Epoch date
        pointStart: Date.UTC(1999, 9),
        data: [
          1.2,
          1.3,
          1.42,
          1.54,
          1.68,
          1.82,
          1.99,
          2.16,
          2.35,
          2.56,
          2.78,
          3.03,
          3.29,
          3.58,
          3.9
        ]
      },
      {
        type: 'spline',
        dashStyle: 'ShortDot',
        name: 'Estimated',
        marker: {
          symbol: 'circle'
        },
        //Year
        pointInterval: 24 * 3600 * 1000 * 365,
        //9/30/2015 In epoch timeseconds
        //Date.UTC(2015, 8, 30)
        ///1443571200000
        pointStart: Date.UTC(2015, 8, 30),
        data: [3.9, 4.19, 4.51, 4.84, 5.21, 5.6, 6.02, 6.47]
      }
    ]
  })
})

/**
 * Grid theme for Highcharts JS
 * @author Torstein Hønsi
 */

Highcharts.theme = {
  colors: [
    '#00aeef',
    '#fff700',
    '#ED561B',
    '#DDDF00',
    '#24CBE5',
    '#64E572',
    '#FF9655',
    '#FFF263',
    '#6AF9C4'
  ],
  chart: {
    backgroundColor: 'rgba(255, 255, 255, 0)',
    borderWidth: 0,
    plotBackgroundColor: 'rgba(255, 255, 255, 0)',
    plotShadow: false,
    plotBorderWidth: 0
  },
  title: {
    style: {
      color: '#000',
      font:
        'normal 14px "flexoregular","Lucida Sans Unicode","Lucida Grande","Trebuchet MS",Helvetica,Arial,sans-serif'
    }
  },
  subtitle: {
    style: {
      color: '#666666',
      font:
        'normal 12px "flexoregular","Lucida Sans Unicode","Lucida Grande","Trebuchet MS",Helvetica,Arial,sans-serif'
    }
  },
  navigation: {
    buttonOptions: {
      enabled: false
    }
  },
  xAxis: {
    gridLineWidth: 1,
    lineColor: '#000',
    tickColor: '#000',
    labels: {
      style: {
        color: '#000',
        font:
          '12px "flexoregular","Lucida Sans Unicode","Lucida Grande","Trebuchet MS",Helvetica,Arial,sans-serif',
        position: 'relative'
      }
    },
    title: {
      style: {
        color: '#333',

        fontSize: '13px',
        fontFamily: 'flexoregular, Verdana, sans-serif'
      }
    }
  },
  yAxis: {
    minorTickInterval: 'auto',
    lineColor: '#000',
    lineWidth: 1,
    tickWidth: 1,
    tickColor: '#000',
    labels: {
      style: {
        color: '#000',
        font: '11px flexoregular, Verdana, sans-serif'
      }
    },
    title: {
      style: {
        color: '#333',

        fontSize: '12px',
        fontFamily: 'flexoregular, Verdana, sans-serif'
      }
    }
  },
  tooltip: {
    backgroundColor: {
      linearGradient: [0, 0, 0, 60],
      stops: [[0, '#FFFFFF'], [1, '#E0E0E0']]
    },
    borderWidth: 0
  },
  legend: {
    align: 'center',
    x: 0,
    verticalAlign: 'bottom',
    y: 20,
    floating: false,
    backgroundColor:
      (Highcharts.theme && Highcharts.theme.legendBackgroundColorSolid) ||
      'rgba(255, 255, 255, 0.1)',
    borderColor: '#CCC',
    borderWidth: 0,
    symbolPadding: 3,
    symbolWidth: 10,
    shadow: false,
    itemStyle: {
      color: '#000000',

      fontSize: '12px'
    }
  },
  labels: {
    style: {
      color: '#FFF'
    }
  }
}

// Apply the theme
var highchartsOptions = Highcharts.setOptions(Highcharts.theme)

/* globals jQuery, Parse, chart1, chart2, chart3, chart4, chart5, chart6, chart7, Highcharts, gascostforpie, electricitycostforpie */
/*  vars electricitycostforpie, gascostforpie */
/*jshint -W020 */
;('use strict')

var varS = {}

// Instantiate a Via function class

if (!window.console)
  var console = {
    log: function() {}
  }

;(function($) {
  Parse.initialize(
    '2kH3Sfiyv9E38OiIg5DfRTyHGUOpiq6r0Isc55ZH',
    'uFJnEPHtJsQVqnfVnBc10MwA5fEdf5S1wze0SYVW'
  )

  var Scenario = Parse.Object.extend('Scenario')
  var scenario = new Scenario()

  //Fix for undefined hashes

  //Setup some common variables that only need to be run once to share between functions
  var formArray,
    milesPeryear,
    standardmpg,
    daysWk,
    fleetSize,
    kwPerMile,
    electricmilesEachday,
    GallonsGasUsedDay,
    salesTax,
    corporateTaxRate,
    discountValues,
    stateValues,
    totaltaxdiscount,
    LifeLeasePlusTaxVtrux,
    co2multiplyFactor,
    stanninesix,
    Staninterst,
    NetLifeLease,
    vtruxnninesix,
    downpayment,
    vdownpayment,
    pmt,
    pmtt,
    NationalValues,
    yearsCalculated,
    msrp,
    smsrp,
    monthsToCalculate,
    lifecarboncreditsavings

  var via = {}

  var HistoricalCAGRArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
  for (var g = 0; g < HistoricalCAGRArray.length; g = g + 1) {
    HistoricalCAGRArray[g] = 1.1 * Math.pow(1.088, [g])
  }
  //getGasPricesFromParse();

  $(document).ready(function() {
    $('#saving').hide()
    $('#saving-status').hide()
    $(
      '.metricUnits, .van-settings, .suv-settings, .set-stan-cash, .set-vtrux-cash, .set-tax-settings'
    ).hide() //hide all
    $('.set-stan-lease, .set-stan-lease').show()

    $('.accordion').on('show hide', function(n) {
      $(n.target)
        .siblings('.accordion-heading')
        .find('.accordion-toggle i')
        .toggleClass('icon-chevron-right icon-chevron-down')
    })

    $('#costs-see-how').popover({
      html: true,
      placement: 'right',
      content: function() {
        return $($(this).data('contentwrapper')).html()
      }
    })
    // event handler to calculate and show the discount
    initalizeCalc()
    $('#tab-content-results').addClass('blur')
    if (window.location.hash.length != 11) {
      console.log('Invalid hash. Hash removed')
      localStorage.removeItem('hashkey')
      window.location.hash = ''
    }
    if (!window.location.hash) {
      // if (localStorage.getItem("hashkey") != "undefined") {
      //     var savedhashkey = localStorage.getItem("hashkey");
      //     if (savedhashkey) {

      //         $('#saving-status').text('Reloaded data from last save');
      //         $('#saving-status').show();
      //         $('#saving-status').delay(3000).fadeOut("slow", function() {
      //             $(this).hide();
      //         });
      //         window.location.hash = savedhashkey;
      //         getSettings();
      //         $.vpayment();
      //         $.vco2calc();
      //         $('#tab-content-results').removeClass('blur');

      //     }
      // } else {

      resetSettings('Loaded with default settings')
      // }
    } else {
      getSettings()
      $.vpayment()
      $.vco2calc()
    }
  })

  function initalizeCalc() {
    monthsToCalculate = 1
    lifecarboncreditsavings = 1258
    vtruxnninesix = 96
    stanninesix = 60
    formArray = ''

    $('.incentives-back-button').popover({
      html: true
    })

    $('#incentives-back-button').click(function() {
      varS.discountType = 'stateDropdown'
      $.vpayment()
    })
    $('#edit-incentives').click(function() {
      varS.discountType = 'customIncentives'
      $.vpayment()
    })

    $('#truck-set').click(function() {
      varS.vehicletype = 'truck'
      $.vpayment()
      $.vco2calc()
    })
    $('#suv-set').click(function() {
      varS.vehicletype = 'suv'
      $.vpayment()
      $.vco2calc()
    })
    $('#van-set').click(function() {
      varS.vehicletype = 'van'
      $.vpayment()
      $.vco2calc()
    })

    $('#hide-advanced').click(function() {
      $('.advanced').slideUp('fast')
    })

    $('#BigTabs > li').click(function() {
      varS.activeTab = $('#BigTabs li.active a').attr('href')
      $.vpayment()
      $.vco2calc()
    })

    $('#metric-set').click(function() {
      varS.units = 'metric'
      $('#slider-kilometers').slider('value', $('input[name$="miles-year"]').val() * 1.609344)
      $('#slider-gas-liter').slider('value', $('input[name$="gas-cost"]').val() * 26.4)
      $.vcalculate()
    })

    $('#usunits-set').click(function() {
      varS.units = 'us'
      $('#slider-miles').slider('value', $('input[name$="kilometers-year"]').val() / 1.609344)
      $('#slider-gas').slider('value', $('input[name$="gas-cost-liter"]').val() / 26.4)

      $.vcalculate()
    })
    $('#cng-set').click(function() {
      varS.fuel = 'CNG'
      $('#slider-standard-msrp').slider('value', 37000)
      $('#slider-standard-van-msrp').slider('value', 42000)
      $('#truck-stan-mpg').slider('value', 14)
      $('#van-stan-mpg').slider('value', 12)
      $('.fuel-type').text(varS.fuel)
      $.vcalculate()
      $.vpayment()
    })

    $('#gas-set').click(function() {
      varS.fuel = 'Gas'
      $('#slider-standard-msrp').slider('value', 25000)
      $('#slider-standard-van-msrp').slider('value', 30000)
      $('#truck-stan-mpg').slider('value', 19)
      $('#van-stan-mpg').slider('value', 18)
      $('.fuel-type').text(varS.fuel)
      $.vcalculate()
      $.vpayment()
    })

    $('#e-set').click(function() {
      varS.fuel = 'E-85'
      $('#truck-stan-mpg').slider('value', 14)
      $('#van-stan-mpg').slider('value', 12)
      $('#slider-standard-msrp').slider('value', 25000)
      $('#slider-standard-van-msrp').slider('value', 30000)
      $('.fuel-type').text(varS.fuel)
      $.vcalculate()
      $.vpayment()
    })
    $('#stan-lease-set').click(function() {
      downpayment = $('#std-downpayment').val()
      vdownpayment = $('#slider-vtrux-downpayment').val()
      Staninterst = parseFloat($('#interest-rate-stan-duplicate').val()) / 2400
      varS.stanbasis = 'lease'
      varS.vtruxbasis = 'lease'
      $('#single-payments').trigger('click')
      $.vpayment()
    })

    $('#stan-cash-set').click(function() {
      downpayment = 0
      vdownpayment = 0
      Staninterst = 0
      varS.stanbasis = 'cash'
      varS.vtruxbasis = 'cash'
      $.vpayment()
    })

    $('#taxes-set-on').click(function() {
      $('.set-tax-settings').show()
      varS.taxSettings = 'on'
      $.vpayment()
    })
    $('#taxes-set-off').click(function() {
      $('.set-tax-settings').hide()
      varS.taxSettings = 'off'
      $.vpayment()
    })

    // Get location specific tax credits for carbon offsets
    $('#state').change(function() {
      if (parseFloat(discountValues[2]) > 1) {
        varS.showCarbonCredit = 'on'
        $('#co2creditperTonne').slider('value', parseFloat(discountValues[2]))
        $.vpayment()
      } else {
        varS.showCarbonCredit = 'off'
        $('#co2creditperTonne').slider('value', parseFloat(0))
        $.vpayment()
      }
    })

    $('#calculatestart').click(function() {
      $.vcalculate()
    })
    $('.vehicleSelector').click(function() {
      $.vcalculate()
    })
    $('.unitsSelector').click(function() {
      $.vcalculate()
    })
    $('.timeSelector').click(function() {
      $.vpayment()
    })
    $('#month-set').click(function() {
      monthsToCalculate = 0.083333333333
      varS.termtext = 'Month'
      $.vpayment()
    })
    $('#year-set').click(function() {
      monthsToCalculate = 1
      varS.termtext = 'Year'
      $.vpayment()
    })
    $('#lifecycle-set').click(function() {
      monthsToCalculate = yearsCalculated
      varS.termtext = 'Lifecycle'
      $.vpayment()
    })

    $('#lifecycle-set').click(function() {
      monthsToCalculate = yearsCalculated
      varS.termtext = 'Lifecycle'
      $.vcalculate()
    })
  }

  $.vUpdateCagr = function(value) {
    $('.cagr-percent').text(value)

    varS.yearsOfHistory = value

    chart7.xAxis[0].addPlotLine({
      value: 5.5,
      color: 'red',
      width: 2,
      id: 'plot-line-1'
    })
  }

  $.vpayment = function() {
    var BonusSLeaseYears,
      StanLeaseYears,
      StanYearsOfUse,
      LeaseTermVtruxMonths,
      LifeLeasePlusTaxStan,
      taxsavingsStan,
      taxsavingsVtrux,
      lifeEffectiveStan,
      monthEffectiveStan

    //State and National Incentives
    discountValues = $('#state')
      .val()
      .split(',')
    if (varS.discountType == 'customIncentives') {
      $('#state-dropdown').hide()
      $('#state-custom').show()
      stateValues = $('input[name$="localdiscount"]').val()
      NationalValues = $('input[name$="nationaldiscount"]').val()
      $('#customLocation').val(stateValues + ',' + NationalValues)
      $('#customLocation').html(
        '$' + stateValues + '</span> Local + $' + NationalValues + ' National Incentives'
      )
      $('[name=state]').val(1)
    } else {
      $('#state-custom').hide()
      $('#state-dropdown').show()
      stateValues = discountValues[0]
      NationalValues = discountValues[1]
    }

    totaltaxdiscount =
      parseInt(parseFloat(stateValues, 10), 10) + parseInt(parseFloat(NationalValues, 10), 10)

    $('.total-tax-credit').text(totaltaxdiscount)
    $('.stcredits').text(stateValues)
    $('.national-discount').text(NationalValues)

    //State and National Incentives
    fleetSize = $('input[name$="fleet-size"]').val()
    yearsCalculated = $('input[name$="years-calculated"]').val()
    StanYearsOfUse = $('input[name$="stan-years-used"]').val()
    $('.yearsCalculated').text(yearsCalculated)
    StanLeaseYears = $('input[name$="stan-lease-years"]').val()
    $('.StanYearsCalculated').text(StanYearsOfUse)

    //Get Vehicle Price
    if (varS.vehicletype == 'van') {
      msrp = $('#slider-vtrux-van-msrp').val()
      smsrp = $('#slider-standard-van-msrp').val()
    } else {
      msrp = $('#slider-vtrux-msrp').val()
      smsrp = $('#slider-standard-msrp').val()
    }

    $('#msrp-stan-label').text(smsrp)
    $('#msrp-vtrux-label').text(msrp)

    //Standard Lease

    Staninterst = parseFloat($('#interest-rate-stan-duplicate').val()) / 2400
    var residualStanPercent = parseFloat($('input[name$="standard-residual"]').val()) / 100
    var LeaseTermStanMonths = parseFloat($('input[name$="stan-lease-years"]').val()) * 12

    $('#msrp-stan-label').text(smsrp)
    $('#residual-value-stan-label').text(residualStanPercent * 100 + '%')

    //Standard Residual
    var residualStanTotal = residualStanPercent * smsrp
    $('#residual-stan-total-label').text(residualStanTotal)

    //Net to Be Financed
    downpayment = parseFloat($('#std-downpayment').val())
    var NetCapitalizedCostStan = smsrp - downpayment
    $('#net-capitalized-cost-stan-label').text(NetCapitalizedCostStan)

    //Depreciation
    var LifecycleStanDepreciation = NetCapitalizedCostStan - residualStanTotal
    $('#lifecycle-stan-depreciation-label').text(LifecycleStanDepreciation)
    //var interestRate = $('input[name$="#interest-rate-stan-duplicate"]').val() / 2400;

    //Sales and Marginal Tax
    if (varS.taxSettings == 'on') {
      $('.set-tax-settings').show()
      salesTax = $('input[name$="sales-tax"]').val()
      corporateTaxRate = $('input[name$="corporate-tax-rate"]').val()
    } else {
      $('.set-tax-settings').hide()
      salesTax = 0
      corporateTaxRate = 0
    }
    BonusSLeaseYears = yearsCalculated - StanYearsOfUse
    LeaseTermStanMonths = 12 * StanLeaseYears

    //Calculate forLease Model
    if (varS.stanbasis == 'lease') {
      setLeaseModel()
      //Calculate for Cash Model
    } else {
      setCashModel()
    }

    $('#life-tax-savings-stan').text(taxsavingsStan.toFixed(0))
    $('#lifelease-tax-savings-stan').text(lifeEffectiveStan.toFixed(0))
    $('#lifelease-plus-sales-tax-stan-label').text(parseFloat(LifeLeasePlusTaxStan).toFixed(0))
    $('#effective-amortorized-stan').text((lifeEffectiveStan / LeaseTermStanMonths).toFixed(0))
    $('#BonusSLeaseYears').text(BonusSLeaseYears.toFixed(0))

    //VTRUX Lease
    var LeaseTermVtruxYears = parseFloat($('input[name$="slider-vtrux-lease"]').val())
    LeaseTermVtruxMonths = LeaseTermVtruxYears * 12
    var LifetimeUseVtruxMonths = $('input[name$="years-calculated"]').val() * 12

    //Vtrux Residual
    var residualVtruxTotal = residualStanPercent * msrp
    $('#residual-vtrux-total-label').text(residualVtruxTotal)

    //Net to Be Financed
    vdownpayment = parseFloat($('#slider-vtrux-downpayment').val())
    var NetCapitalizedCostVtrux = msrp - vdownpayment
    $('#net-capitalized-cost-vtrux-label').text(NetCapitalizedCostVtrux)

    //Depreciation
    var LifecycleVtruxDepreciation = NetCapitalizedCostVtrux - residualVtruxTotal
    $('#lifecycle-vtrux-depreciation-label').text(LifecycleVtruxDepreciation)
    //var interestRate = $('input[name$="#interest-rate-stan-duplicate"]').val() / 2400;

    vtruxnninesix = 12 * yearsCalculated

    var lifeEffectiveVtrux, monthEffectiveVtrux

    function setLeaseModel() {
      $('.set-stan-cash, .set-vtrux-cash').hide()
      $('.set-stan-lease, .set-vtrux-lease').show()
      $('#residual-row')
        .removeClass('span12')
        .addClass('span6')
      $('#residual-cell')
        .removeClass('layout-slider residual-row-adjust')
        .addClass('layout-slider-med')

      if (parseFloat(BonusSLeaseYears) < 0) {
        BonusSLeaseYears = 0
      }
      var TotalLeaseYears = parseFloat(StanLeaseYears) + parseFloat(BonusSLeaseYears)
      if (parseFloat(StanYearsOfUse) < parseFloat(StanLeaseYears)) {
        TotalLeaseYears = StanLeaseYears
        $('#stanyears-used').slider('value', parseFloat(StanLeaseYears))
        $.vcalculate()
      }
      stanninesix = 12 * parseFloat(TotalLeaseYears)
      //Stadard Interest
      var interestofStanLeasePMT = Staninterst * (NetCapitalizedCostStan + residualStanTotal)
      $('#lifecycle-stan-interest-label').text(interestofStanLeasePMT * LeaseTermStanMonths)

      var StanLeasePayment =
        (NetCapitalizedCostStan - residualStanTotal) / LeaseTermStanMonths +
        Staninterst * (NetCapitalizedCostStan + residualStanTotal)
      $('#lease-pmt-stan-label').text(StanLeasePayment.toFixed(0))

      var MonthlySalesTaxStan = StanLeasePayment * (salesTax / 100)
      $('#total-sales-tax-stan-label').text((MonthlySalesTaxStan * LeaseTermStanMonths).toFixed(0))

      LifeLeasePlusTaxStan = (MonthlySalesTaxStan + StanLeasePayment) * LeaseTermStanMonths
      taxsavingsStan = (corporateTaxRate / 100) * LifeLeasePlusTaxStan
      $('#life-tax-savings-stan').text(taxsavingsStan.toFixed(0))
      lifeEffectiveStan = LifeLeasePlusTaxStan - taxsavingsStan + downpayment
      monthEffectiveStan = lifeEffectiveStan / LeaseTermStanMonths
      pmtt = monthEffectiveStan * fleetSize
    }

    function setCashModel() {
      $('.set-stan-lease, .set-vtrux-lease').hide()
      $('.set-stan-cash, .set-vtrux-cash').show()
      $('#residual-row')
        .removeClass('span6')
        .addClass('span12')
      $('#residual-cell')
        .removeClass('layout-slider-med')
        .addClass('layout-slider residual-row-adjust')

      if (parseFloat(BonusSLeaseYears) < 0) {
        BonusSLeaseYears = 0
        $('#BonusSLeaseYears').text(BonusSLeaseYears.toFixed(0))
        $('#amortization-statement').hide()
      }
      // var YearsUsePlusBonus = parseFloat(StanYearsOfUse) + parseFloat(BonusSLeaseYears);
      if (parseFloat(StanYearsOfUse) > parseFloat(yearsCalculated)) {
        $('#years-calculated').slider('value', parseFloat(StanYearsOfUse))
        $('#amortization-statement').show()
        $('#BonusSLeaseYears').text(BonusSLeaseYears.toFixed(0))
        $.vcalculate()
      }

      Staninterst = 0
      stanninesix = 12 * StanYearsOfUse
      //Sales Tax on Purchase
      var salestaxonstanPurchase = smsrp * (salesTax / 100)
      $('#total-sales-tax-stan-label').text(salestaxonstanPurchase.toFixed(0))
      LifeLeasePlusTaxStan = parseFloat(smsrp) + parseFloat(salestaxonstanPurchase)
      taxsavingsStan = (corporateTaxRate / 100) * LifeLeasePlusTaxStan
      lifeEffectiveStan = LifecycleStanDepreciation - taxsavingsStan

      monthEffectiveStan = lifeEffectiveStan / (StanYearsOfUse * 12)
      pmtt = monthEffectiveStan * fleetSize
    }

    function calcLease() {
      if (parseFloat(LeaseTermVtruxMonths) > parseFloat(LifetimeUseVtruxMonths)) {
        $('#years-calculated').slider('value', LeaseTermVtruxYears)
        $.vcalculate()
        return
      }
      //Vtrux Interest
      var interestofVtruxLeasePMT = Staninterst * (NetCapitalizedCostVtrux + residualVtruxTotal)
      $('#lifecycle-vtrux-interest-label').text(interestofVtruxLeasePMT * LeaseTermVtruxMonths)

      var VtruxLeasePayment =
        (NetCapitalizedCostVtrux - residualVtruxTotal) / LeaseTermVtruxMonths +
        Staninterst * (NetCapitalizedCostVtrux + residualVtruxTotal)
      $('#lease-pmt-vtrux-label').text(VtruxLeasePayment.toFixed(0))
      var MonthlySalesTaxVtrux = VtruxLeasePayment * (salesTax / 100)
      $('#total-sales-tax-vtrux-label').text(
        (MonthlySalesTaxVtrux * LeaseTermVtruxMonths).toFixed(0)
      )
      LifeLeasePlusTaxVtrux = (MonthlySalesTaxVtrux + VtruxLeasePayment) * LeaseTermVtruxMonths
      taxsavingsVtrux = (corporateTaxRate / 100) * LifeLeasePlusTaxVtrux
      $('#life-tax-savings-vtrux').text(taxsavingsVtrux.toFixed(0))
      lifeEffectiveVtrux =
        LifeLeasePlusTaxVtrux -
        taxsavingsVtrux +
        (downpayment - totaltaxdiscount) -
        lifecarboncreditsavings
      monthEffectiveVtrux = lifeEffectiveVtrux / LeaseTermVtruxMonths
      $('#lease-pmt-vt-label').text(VtruxLeasePayment.toFixed(0))
      pmt = monthEffectiveVtrux * fleetSize
      updateVtruxLabels()
    }

    function calcCash() {
      //Sales Tax on Purchase
      vtruxnninesix = yearsCalculated * 12
      var salestaxonvtruxPurchase = parseFloat(msrp) * (salesTax / 100)
      $('#total-sales-tax-vtrux-label').text(salestaxonvtruxPurchase.toFixed(0))
      LifeLeasePlusTaxVtrux = parseFloat(msrp) + parseFloat(salestaxonvtruxPurchase)
      taxsavingsVtrux = (corporateTaxRate / 100) * LifeLeasePlusTaxVtrux
      $('#life-tax-savings-vtrux').text(taxsavingsVtrux.toFixed(0))
      lifeEffectiveVtrux =
        LifecycleVtruxDepreciation - taxsavingsVtrux - totaltaxdiscount - lifecarboncreditsavings
      monthEffectiveVtrux = lifeEffectiveVtrux / (yearsCalculated * 12)
      pmt = monthEffectiveVtrux * fleetSize
      updateVtruxLabels()
    }

    if (varS.vtruxbasis == 'lease') {
      calcLease()
      //Cash for VTRUX
    } else {
      calcCash()
    }
    function updateVtruxLabels() {
      $('#lifelease-plus-sales-tax-vtrux-label').text(LifeLeasePlusTaxVtrux.toFixed(0))
      $('#lifelease-tax-savings-vtrux').text(lifeEffectiveVtrux.toFixed(0))
      $('#effective-amortorized-vtrux').text(monthEffectiveVtrux.toFixed(0))
    }
    $.vcalculate()
  }

  $.vcalculate = function() {
    var CNGorGasCost,
      stanMainperMile,
      y,
      data2,
      vtruxMainperMile,
      chargedMpg,
      milesElectric,
      chargedMPGorKPL,
      gasCost,
      gascostmile,
      lifetimeMaintenanceStan,
      startgasCosts,
      lifetimeMaintenanceVTRUX,
      distanceElectricMiles,
      gascostmileforVTRUX,
      standardgascostyear,
      gasmilesEachdayfixed,
      gasmilesEachWeekfixed,
      percentelectricDrivingfixed

    //console.log($(this).value);

    fleetSize = $('input[name$="fleet-size"]').val()
    var cagr = $('input[name$="cagr"]').val() / 100 + 1
    //Efficiency Caluclation
    var IdlePercent = 1 - $('input[name$="idle"]').val() / 100

    var chargeTimesDay = parseFloat($('#chargesPerDay').val(), 10)

    if (varS.vehicletype == 'van') {
      // Van Default Values
      $('.truck-settings, .suv-settings').hide()
      $('.van-settings').show()

      standardmpg = $('input[name$="vanstanMpg"]').val() * IdlePercent // Cell B11 Standard Gas Vehicle Includes Assumption for idle time typical 15.5
      chargedMpg = $('input[name$="vanChargedMpg"]').val() // Cell C12 Charge Sustaining Mode mpg
      kwPerMile = 1.4 // Cell C11
      milesElectric = 35 * chargeTimesDay * fleetSize

      $('.vehiclelabel').text('Van')
      $('#pricetagVehicle2').prop('src', 'calculator_files/images/Price-Tag-On-Van2.png')
    } else if (varS.vehicletype == 'suv') {
      // Van Default Values
      $('.truck-settings, .van-settings').hide()
      $('.suv-settings').show()

      standardmpg = $('input[name$="suvstanMpg"]').val() * IdlePercent // Cell B11 Standard Gas Vehicle Includes Assumption for idle time typical 15.5
      chargedMpg = $('input[name$="suvChargedMpg"]').val() // Cell C12 Charge Sustaining Mode mpg
      kwPerMile = 1.4 // Cell C11
      milesElectric = 35 * chargeTimesDay * fleetSize

      $('.vehiclelabel').text('SUV')
      $('#pricetagVehicle2').prop('src', 'calculator_files/images/Price-Tag-On-SUV2.png')
    } else {
      // Truck Default Values
      $('.van-settings, .suv-settings').hide()
      $('.truck-settings').show()

      standardmpg = $('input[name$="truckstanMpg"]').val() * IdlePercent // Cell B11 Standard Gas Vehicle Includes Assumption for idle time typical 15.5
      chargedMpg = $('input[name$="truckChargedMpg"]').val() // Cell C12 Charge Sustaining Mode mpg
      kwPerMile = 1.96 // Cell C11
      milesElectric = 40 * chargeTimesDay * fleetSize
      $('.vehiclelabel').text('Truck')
      $('#pricetagVehicle2').prop('src', 'calculator_files/images/Price-Tag-On-Truck2.png')
    }

    $('#stan-monthly-lease').text(pmtt.toFixed(0))
    $('#stan-year-lease').text(((pmtt * 12) / 1).toFixed(0))
    $('#stan-life-lease').text((pmtt * stanninesix).toFixed(0))

    $('#monthly-lease').text(pmt.toFixed(0))
    $('#year-lease').text(((pmt * 12) / 1).toFixed(0))
    $('#life-lease').text((pmt * vtruxnninesix).toFixed(0))
    var NetMonthlyLeaseSavings = (pmt - pmtt).toFixed(0) * -1
    $('#net-monthly-lease').text(NetMonthlyLeaseSavings)
    $('#net-year-lease').text(NetMonthlyLeaseSavings * 12)
    NetLifeLease = parseFloat((pmt * vtruxnninesix - pmtt * stanninesix).toFixed(0))
    $('#net-life-lease').text(NetLifeLease * -1)
    stanMainperMile = parseFloat($('#stan-maint').val()) / 100
    vtruxMainperMile = parseFloat($('#vtrux-maint').val()) / 100

    if (varS.units == 'metric') {
      // Metric Inputs
      $('.standardUnits').hide()
      $('.metricUnits').show()
      chargedMPGorKPL = chargedMpg * 0.425143707
      startgasCosts = parseFloat($('input[name$="gas-cost-liter"]').val() / 100, 10)
      standardmpg = standardmpg * 0.425143707
      kwPerMile = kwPerMile * 1.609344
      milesPeryear = $('input[name$="kilometers-year"]').val() * fleetSize

      $('.unitdistance').text('Kilometers')
      distanceElectricMiles = milesElectric * 1.609347219
      $('#vechicle-mpg').text((standardmpg.toFixed(0) * 1.609347219).toFixed(0) + ' kpl')

      lifetimeMaintenanceStan = milesPeryear * yearsCalculated * (stanMainperMile / 1.609344)
      lifetimeMaintenanceVTRUX = milesPeryear * yearsCalculated * (vtruxMainperMile / 1.609344)
    } else {
      $('#vechicle-mpg').text(standardmpg.toFixed(0) + ' mpg')
      $('.metricUnits').hide()
      $('.standardUnits').show()
      chargedMPGorKPL = chargedMpg
      startgasCosts = parseFloat($('input[name$="gas-cost"]').val(), 10)

      milesPeryear = $('input[name$="miles-year"]').val() * fleetSize
      $('.unitdistance').text('Miles')
      distanceElectricMiles = milesElectric

      lifetimeMaintenanceStan = milesPeryear * yearsCalculated * stanMainperMile
      lifetimeMaintenanceVTRUX = milesPeryear * yearsCalculated * vtruxMainperMile
    }

    var gasCostEachYearArray = [0, 1, 2, 3, 4, 5, 6, 7]
    var gasCostStanFleetArray = []
    var gasCostStanAllYears = 0
    var AvgGasCost = 0
    gasCostEachYearArray = gasCostEachYearArray.splice(0, yearsCalculated)
    for (var i = 0; i < gasCostEachYearArray.length; i = i + 1) {
      gasCostEachYearArray[i] = startgasCosts * Math.pow(cagr, [i])
      AvgGasCost += gasCostEachYearArray[i] / yearsCalculated
      gasCostStanAllYears += ((gasCostEachYearArray[i] / standardmpg) * milesPeryear) << 0
      gasCostStanFleetArray[i] = Math.round((gasCostEachYearArray[i] / standardmpg) * milesPeryear)
    }

    if (varS.fuel == 'CNG') {
      $('#cng').show()
      co2multiplyFactor = 0.8
      var startcngcost = $('input[name$="slider-cng"]').val()
      var cngcagr = $('input[name$="slider-cngcagr"]').val() / 100 + 1
      var CNGCostEachYearArray = [0, 1, 2, 3, 4, 5, 6, 7]
      CNGorGasCost = 0
      CNGCostEachYearArray = CNGCostEachYearArray.splice(0, yearsCalculated)
      for (var cngi = 0; cngi < CNGCostEachYearArray.length; cngi = cngi + 1) {
        CNGCostEachYearArray[cngi] = startcngcost * Math.pow(cngcagr, [cngi])
        CNGorGasCost += CNGCostEachYearArray[cngi] / yearsCalculated
        gasCostStanAllYears += ((CNGCostEachYearArray[cngi] / standardmpg) * milesPeryear) << 0
        gasCostStanFleetArray[cngi] = Math.round(
          (CNGCostEachYearArray[cngi] / standardmpg) * milesPeryear
        )
      }
    } else {
      $('#cng').hide()
      co2multiplyFactor = 1
      CNGorGasCost = AvgGasCost
    }
    gasCost = AvgGasCost

    gascostmile = CNGorGasCost / standardmpg

    $('#avg-gas-cost').text(gasCost.toFixed(2))
    $('#avg-gas-cost-metric').text(gasCost.toFixed(2))
    var kwCosts = $('input[name$="elec-cost"]').val() / 100
    daysWk = $('input[name$="days"]').val()

    var milesDrivenPerweek = parseFloat(milesPeryear) / parseFloat(daysWk)
    var milesDrivenPerday = parseFloat(milesDrivenPerweek) / 52
    $('#Miles-Per-Day').text(milesDrivenPerday.toFixed(0))

    $('#maint-stan-life').text(lifetimeMaintenanceStan.toFixed(0))
    $('#maint-stan-vtrux').text(lifetimeMaintenanceVTRUX.toFixed(0))

    if (parseFloat(milesDrivenPerday) < distanceElectricMiles) {
      electricmilesEachday = milesDrivenPerday
    } else {
      electricmilesEachday = distanceElectricMiles
    }
    $('#electric-miles-driven-each-day').text(electricmilesEachday.toFixed(0))

    gascostmileforVTRUX = parseFloat(gasCost) / chargedMPGorKPL

    standardgascostyear = parseFloat(gascostmile) * parseFloat(milesPeryear)
    $('#standard-fuel-costs').text(standardgascostyear.toFixed(0))
    $('#standard-fuel-costs-lifetime').text((standardgascostyear * yearsCalculated).toFixed(0))
    //var fuelcostperChargedmile = parseFloat(gasCost) / chargedMPGorKPL;
    var gasmilesEachweek = parseFloat(milesPeryear) / daysWk
    var gasmilesEachday = gasmilesEachweek / 52 - electricmilesEachday
    if (parseFloat(gasmilesEachday) < 0) {
      gasmilesEachdayfixed = 0
    } else {
      gasmilesEachWeekfixed = parseFloat(milesPeryear) / parseFloat(daysWk)
      gasmilesEachdayfixed = gasmilesEachWeekfixed / 52 - electricmilesEachday
    }

    var totalMilesEachDay = electricmilesEachday + gasmilesEachday
    var percentGasDriving = gasmilesEachdayfixed / totalMilesEachDay
    if (parseFloat(percentGasDriving) < 0) {
      via.percentGasDrivingfixed = 0
    } else {
      via.percentGasDrivingfixed = gasmilesEachdayfixed / totalMilesEachDay
    }

    var percentelectricDriving = electricmilesEachday / totalMilesEachDay
    if (parseFloat(percentelectricDriving) > 1) {
      percentelectricDrivingfixed = 1
    } else {
      percentelectricDrivingfixed = electricmilesEachday / totalMilesEachDay
    }

    $('#gas-miles-driven-each-day').text(gasmilesEachdayfixed.toFixed(0))
    $('#percent-electric-miles-driven-each-day').text(
      (percentelectricDrivingfixed * 100).toFixed(0) + '%'
    )
    $('#percent-gas-miles-driven-each-day').text(
      (via.percentGasDrivingfixed * 100).toFixed(0) + '%'
    )

    GallonsGasUsedDay = gasmilesEachdayfixed / chargedMPGorKPL
    var avgVtruxmpg = milesPeryear / (GallonsGasUsedDay * (daysWk * 52))

    // Gas Savings

    if (varS.units == 'metric') {
      // Metric Inputs
      $('#vtrux-avg-mpg').text((avgVtruxmpg * 1.609347219).toFixed(0) + ' kpl')
    } else {
      $('#vtrux-avg-mpg').text(avgVtruxmpg.toFixed(0) + ' mpg')
    }
    var ElecCostPerMile = parseFloat(kwCosts) / kwPerMile
    var vtruxGasAndElectricCostPeryear =
      (via.percentGasDrivingfixed * gascostmileforVTRUX +
        percentelectricDrivingfixed * ElecCostPerMile) *
      milesPeryear
    var vtruxElecCostPeryear = percentelectricDrivingfixed * ElecCostPerMile * milesPeryear
    var vtruxGasCostPeryear = via.percentGasDrivingfixed * gascostmileforVTRUX * milesPeryear
    $('#vtrux-gas-costs').text(parseFloat(vtruxGasCostPeryear).toFixed(0))
    $('#vtrux-elec-costs').text(parseFloat(vtruxElecCostPeryear).toFixed(0))
    $('#vtrux-fuel-costs-lifetime').text(
      (vtruxGasAndElectricCostPeryear * yearsCalculated).toFixed(0)
    )

    var fuelcostsavingyear = vtruxGasAndElectricCostPeryear - standardgascostyear
    var fuelcostsavingmonth = (vtruxGasAndElectricCostPeryear - standardgascostyear) / 12
    $('#vtrux-fuel-costs').text(vtruxGasAndElectricCostPeryear.toFixed(0))

    $('#fuel-costs-savings-month').text(((fuelcostsavingyear / 12) * -1).toFixed(0))
    $('#fuel-costs-savings').text((fuelcostsavingyear * -1).toFixed(0))
    $('#fuel-costs-savings-life').text((fuelcostsavingyear * yearsCalculated * -1).toFixed(0))

    var MaintSavingLifetime = lifetimeMaintenanceVTRUX - lifetimeMaintenanceStan
    var MaintSavingMonth =
      (lifetimeMaintenanceVTRUX - lifetimeMaintenanceStan) / (12 * yearsCalculated)
    $('#Maint-costs-savings-month').text(
      ((MaintSavingLifetime / (12 * yearsCalculated)) * -1).toFixed(0)
    )
    $('#Maint-costs-savings').text(((MaintSavingLifetime / yearsCalculated) * -1).toFixed(0))
    $('#Maint-costs-savings-life').text((MaintSavingLifetime * -1).toFixed(0))

    $('#monthly-LME').text(
      (
        (MaintSavingMonth + fuelcostsavingmonth + NetLifeLease / (yearsCalculated * 12)) *
        -1
      ).toFixed(0)
    )
    var yearlyLME = parseFloat(
      ((MaintSavingMonth * 12 + fuelcostsavingyear + NetLifeLease / yearsCalculated) * -1).toFixed(
        0
      )
    )

    $('#yearly-LME').text(yearlyLME)

    var total8yearlifesavings = (
      (MaintSavingMonth * (12 * yearsCalculated) +
        fuelcostsavingyear * yearsCalculated +
        parseFloat(NetLifeLease)) *
      -1
    ).toFixed(0)

    $('#life-LME').text(total8yearlifesavings)
    $('#big-price-savings').text(total8yearlifesavings)

    $('#finalStanCost').text(
      (
        pmtt * stanninesix +
        lifetimeMaintenanceStan +
        standardgascostyear * yearsCalculated
      ).toFixed(0)
    )
    $('#finalVTRUXCost').text(
      (
        pmt * vtruxnninesix +
        lifetimeMaintenanceVTRUX +
        vtruxGasAndElectricCostPeryear * yearsCalculated
      ).toFixed(0)
    )

    //   ProjectedCAGR = HistoricalCAGRArray.splice(0, 16);

    //  HistoricalCAGRArray = HistoricalCAGRArray.splice(16, 9);
    chart7.series[1].setData(HistoricalCAGRArray, false)
    chart7.series[2].setData(gasCostEachYearArray, false)
    //  chart7.series[3].setData(ProjectedCAGR, false);
    chart7.redraw()
    //

    if (varS.activeTab == '#fleet-energy-cost') {
      $('#fleetsize').text(fleetSize)
      if (parseFloat(fleetSize) > 1) {
        $('#fleetsizeplural').text('s')
      }

      var VTRUXYearlyCostsArray = [0, 1, 2, 3, 4, 5, 6, 7]
      var VTRUXLifeEnergyCosts = 0
      VTRUXYearlyCostsArray = VTRUXYearlyCostsArray.splice(0, yearsCalculated)
      for (var vtruxi = 0; vtruxi < VTRUXYearlyCostsArray.length; vtruxi = vtruxi + 1) {
        VTRUXYearlyCostsArray[vtruxi] = Math.round(
          via.percentGasDrivingfixed *
            (gasCostEachYearArray[vtruxi] / chargedMPGorKPL) *
            milesPeryear +
            vtruxElecCostPeryear
        )
        VTRUXLifeEnergyCosts += VTRUXYearlyCostsArray[vtruxi] << 0
      }
      chart3.series[0].setData(gasCostStanFleetArray, false)
      chart3.series[1].setData(VTRUXYearlyCostsArray, false)

      $('#totalbluearea').text((standardgascostyear * yearsCalculated).toFixed(0))
      var totalvtruxAllYears = VTRUXLifeEnergyCosts
      $('#totalvtruxarea').text(totalvtruxAllYears.toFixed(0))
      $('#totalsavingsarea').text(
        (standardgascostyear * yearsCalculated - totalvtruxAllYears).toFixed(0)
      )
      chart3.redraw()
    } else if (varS.activeTab == '#roi') {
      //END Chart Math
      var yearSavings = parseFloat(
        (fuelcostsavingyear + MaintSavingLifetime / yearsCalculated) * -1
      )
      var roi1 = NetLifeLease * -1 + yearSavings

      var RoiArray = [0, 1, 2, 3, 4, 5, 6, 7]
      RoiArray = RoiArray.splice(0, yearsCalculated)
      for (var roii = 0; roii < RoiArray.length; roii = roii + 1) {
        RoiArray[roii] = Math.round(roi1 + [roii] * yearSavings)
      }

      chart4.series[0].setData(RoiArray, false)
      chart4.redraw()

      var roi = (total8yearlifesavings / NetLifeLease) * 100

      $('#roi-percent').text(roi.toFixed(0))
      var MonthsNeg = NetLifeLease / (yearSavings / 12)
      chart5.series[0].data[0].update((data2 = NetLifeLease))
      chart5.series[0].setData([MonthsNeg * -1], [yearsCalculated * 12], false)

      chart5.redraw()
      $('#months-breakeven').text(MonthsNeg.toFixed(0))
      $('#years-breakeven').text((MonthsNeg / 12).toFixed(1))

      $('.highcharts-stack-labels').currency({
        region: 'USD',
        decimals: 0
      })
    } else {
      totalSavingsCharts()
    }

    $('.currency').currency({
      region: 'USD',
      decimals: 0
    })

    function totalSavingsCharts() {
      electricitycostforpie = (
        percentelectricDrivingfixed *
        ElecCostPerMile *
        parseFloat(milesPeryear)
      ).toFixed(0)
      gascostforpie = (
        via.percentGasDrivingfixed *
        gascostmileforVTRUX *
        parseFloat(milesPeryear)
      ).toFixed(0)

      chart1.series[0].data[0].update((y = via.percentGasDrivingfixed * 100))
      chart1.series[0].data[1].update((y = percentelectricDrivingfixed * 100))
      chart1.redraw()

      if ($('#monthly:checked').val() == 'monthly') {
        chart2.series[0].setData([Math.round(pmtt / 1), Math.round(pmt / 1)], false)
        chart2.series[1].setData(
          [
            Math.round(lifetimeMaintenanceStan / (12 * yearsCalculated)),
            Math.round(lifetimeMaintenanceVTRUX / (12 * yearsCalculated))
          ],
          false
        )
        chart2.series[2].setData(
          [Math.round(standardgascostyear / 12), Math.round(vtruxGasAndElectricCostPeryear / 12)],
          false
        )
        $('.savingsfortime').text(
          ((MaintSavingMonth + fuelcostsavingmonth + NetLifeLease / vtruxnninesix) * -1).toFixed(0)
        )
      } else if ($('#yearly:checked').val() == 'yearly') {
        chart2.series[0].setData([Math.round((pmtt * 12) / 1), Math.round((pmt * 12) / 1)], false)
        chart2.series[1].setData(
          [
            Math.round(lifetimeMaintenanceStan / yearsCalculated),
            Math.round(lifetimeMaintenanceVTRUX / yearsCalculated)
          ],
          false
        )
        chart2.series[2].setData(
          [Math.round(standardgascostyear), Math.round(vtruxGasAndElectricCostPeryear)],
          false
        )
        $('.savingsfortime').text(
          (
            (MaintSavingMonth * 12 +
              fuelcostsavingyear +
              parseFloat(NetLifeLease) / yearsCalculated) *
            -1
          ).toFixed(0)
        )
      } else {
        chart2.series[0].setData(
          [Math.round(pmtt * stanninesix), Math.round(pmt * vtruxnninesix)],
          false
        )
        chart2.series[1].setData(
          [Math.round(lifetimeMaintenanceStan), Math.round(lifetimeMaintenanceVTRUX)],
          false
        )
        chart2.series[2].setData(
          [
            Math.round(standardgascostyear * yearsCalculated),
            Math.round(vtruxGasAndElectricCostPeryear * yearsCalculated)
          ],
          false
        )
        $('.savingsfortime').text(
          (
            (MaintSavingMonth * (12 * yearsCalculated) +
              fuelcostsavingyear * yearsCalculated +
              parseFloat(NetLifeLease)) *
            -1
          ).toFixed(0)
        )
      }
      chart2.redraw()
    }
  }

  $.vco2calc = function() {
    if (varS.showCarbonCredit == 'on') {
      $('.set-carbon-credit').show()
    } else {
      $('.set-carbon-credit').hide()
    }

    // Carbon
    var lbsCarbonperKw = parseFloat($('#carbonPerKW').val(), 10)
    var co2CreditperTonne = parseFloat($('#co2creditperTonne').val(), 10)

    var StanGalYear = milesPeryear / standardmpg
    var VTRUXGalYear = GallonsGasUsedDay * (daysWk * 52)
    var carbonStanYear = StanGalYear * 19.64 * co2multiplyFactor
    var GalYearSavings = StanGalYear - VTRUXGalYear
    var KWusedEachYear = (electricmilesEachday * (daysWk * 52)) / kwPerMile
    var electricCarbonVTRUXYear = Math.round(KWusedEachYear * lbsCarbonperKw)
    var carbonVTRUXYear = VTRUXGalYear * 19.64

    //var yearlyVTRUXco2 = carbonVTRUXYear + electricCarbonVTRUXYear;
    chart6.series[0].setData(
      [
        Math.round(carbonStanYear * monthsToCalculate),
        Math.round(carbonVTRUXYear * monthsToCalculate)
      ],
      false
    )
    chart6.series[1].setData([0, Math.round(electricCarbonVTRUXYear * monthsToCalculate)], false)
    //var stanCO2cubicft = carbonStanYear * 8.741;
    //var vtruxCO2cubicft = (carbonVTRUXYear + electricCarbonVTRUXYear) * 8.741;
    var co2savings = carbonStanYear - (carbonVTRUXYear + electricCarbonVTRUXYear)
    var lifecarbontonnes = co2savings * 0.000453592 * yearsCalculated
    lifecarboncreditsavings = lifecarbontonnes * co2CreditperTonne
    $('#lifecarboncreditsavings').text(lifecarboncreditsavings)

    var carsoffroad = (carbonStanYear / (carbonVTRUXYear + electricCarbonVTRUXYear)) * fleetSize
    //var c02cuFTsavings = stanCO2cubicft - vtruxCO2cubicft;
    //var c02linearFTsavings = Math.pow(c02cuFTsavings, (1 / 3));
    $('#cars-offroad').text(Highcharts.numberFormat(carsoffroad, 1, '.', ',') + 'x Cleaner')
    $('#gal-gas-savings').text(
      Highcharts.numberFormat(GalYearSavings * monthsToCalculate, 0, '.', ',') + ' Gals.'
    )
    $('#co2-savings').text(
      Highcharts.numberFormat(co2savings * monthsToCalculate, 0, '.', ',') + ' lbs.'
    )
    $('.time-period-text').text(varS.termtext)

    Highcharts.numberFormat(co2savings, 0, '.', ',')
    chart6.redraw()
    $.vpayment()
  }

  //create and clear the new JSON

  function getAllInputs() {
    //Get slider inputs
    var sliderArray = {}
    $($('.toSave')).each(function() {
      var ids = this.id
      ids = ids.replace(/-([a-z])/g, function(g) {
        return g[1].toUpperCase()
      })
      sliderArray[ids] = this.value
    })
    varS.sliders = sliderArray

    //Get active buttons
    var array = {}
    $($('button.active')).each(function() {
      var ids = this.id
      ids = ids.replace(/-([a-z])/g, function(g) {
        return g[1].toUpperCase()
      })
      array[ids] = this.value
    })
    varS.activeTab = $('#BigTabs li.active a').attr('href')
    varS.activeButtons = array

    //Bring in javascript values associated with active buttons
    //Get State
    varS.selectedState = $('#state option:selected').attr('id')
  }

  function setAllInputs(json) {
    if (json.sliders) {
      var result = json.sliders

      $.each(result, function(k, v) {
        var camelCased =
          '#' +
          k.replace(/([a-z][A-Z])/g, function(g) {
            return g[0] + '-' + g[1].toLowerCase()
          })

        //Check to see if it's a slider before we save it
        if ($(camelCased).hasClass('toSave')) {
          $(camelCased).slider('value', v, 0)
        }
      })
    } else {
      console.log('Error: no calculator slider settings in data')
    }
    //Reset buttons
    if (json.activeButtons) {
      $('button').removeClass('active')
      var results = json.activeButtons

      $.each(results, function(k) {
        var camelCased = k.replace(/([a-z][A-Z])/g, function(g) {
          return g[0] + '-' + g[1].toLowerCase()
        })
        $('#' + camelCased).addClass('active')
      })
    } else {
      console.log('Error: no active buttons selected in data')
    }
    //Set Javascript Variables

    //Set the state locale dropdown
    if (json.selectedState) {
      var setState = document.getElementById('state')
      var selectedState = document.getElementById(json.selectedState)
      setState.options[selectedState.index].selected = true
    }
    $.vpayment()
    $.vco2calc()
  }

  $('#vsave').click(function() {
    $('#saving-status')
      .text('Saving...')
      .show()
    window.location.hash = ''
    getAllInputs()
    saveObjects()
  })

  $('#vreset').click(function() {
    $('#saving-status')
      .text('Settings reset to default')
      .show()
    window.location.hash = ''
    $('#tab-content-results').addClass('blur')
    resetSettings('Settings Reset')
  })

  function saveObjects() {
    window.location.hash = ''
    delete varS.objectId
    //Create a new Scenario Object for Parse and save
    var scenario = new Scenario()

    //Go throughh each object and set it to Parse.com
    var object = varS
    $.each(object, function(k, v) {
      scenario.set(k, v)
    })
    scenario
      .save(null, {
        success: function(object) {
          // Execute any logic that should take place after the object is saved.
        },
        error: function(object, error) {
          // Execute any logic that should take place if the save fails.
          // error is a Parse.Error with an error code and message.s
          console.log('Failed to create new object, with error code: ' + error.message)
          $('#saving-status').hide()
          $('#verror')
            .show()
            .delay(3000)
            .fadeOut()
        }
      })
      .then(function(result) {
        // only the selected fields of the object will now be available here.

        return result.fetch()
      })
      .then(function() {
        console.log('Saved data successfully')
        // all fields of the object will now be available here.

        window.location.hash = scenario.id
        console.log('The new local storage hash key is' + scenario.id)
        localStorage.setItem('hashkey', scenario.id)
        //$('#tab-content-results').removeClass('blur');
        $('#saving-status')
          .text('Saved')
          .show()
        $('#saving-status')
          .delay(1000)
          .fadeOut('slow', function() {
            $(this).hide()
          })
      })
  }

  function getHash() {
    var windowHash = window.location.hash
    return windowHash.slice(1)
  }

  document.onhashchange = function() {
    console.log('the hash has changed')
    var urlHash = getHash()
    if (urlHash == 'undefined') {
      $('#saving-status')
        .text('Error saving page')
        .show()
      $('#saving-status')
        .delay(1000)
        .fadeOut('slow', function() {
          $(this).hide()
        })
    }
  }

  function getSettings() {
    var urlHash = getHash()
    $('#saving-status').text('Loading Data')
    $('#saving-status').show()
    // var query = new Parse.Query(Scenario);
    scenario.id = urlHash

    scenario
      .fetch({
        success: function() {
          console.log('Retrieved data successfully')
        },
        error: function(scenario, error) {
          // The object was not refreshed successfully.
          // error is a Parse.Error with an error code and message.
          console.log('error' + scenario + error)
          $('#saving-status').text('Error: Settings not found')
          $('#saving-status').show()

          $('#saving-status')
            .delay(1000)
            .fadeOut('slow', function() {
              setTimeout(resetSettings('Settings Reset'), 10)
              //  $('#tab-content-results').removeClass('blur');
            })
        }
      })
      .then(function(result) {
        // only the selected fields of the object will now be available here.

        //$('#tab-content-results').removeClass('blur');
        return result.fetch()
      })
      .then(function() {
        // all fields of the object will now be available here.
        var scene = JSON.parse(JSON.stringify(scenario))

        varS = scene
        setAllInputs(varS)

        $('#BigTabs a[href="' + varS.activeTab + '"]').tab('show')
        $('#tab-content-results').removeClass('blur')
        $('#saving-status').hide()
        $.vpayment()
        $.vco2calc()
      })
  }

  function updateGasToParse(object) {
    var objectId = 'LBubCei4BG'
    var GasHistory = Parse.Object.extend('GasHistory')

    var query = new Parse.Query(GasHistory)
    query
      .get(objectId, {
        success: function(gasHistoryItem) {
          if (!object) {
            console.log('gas content is empty')
            return
          }
          gasHistoryItem.set('gasHistory', object)
          gasHistoryItem.save()
        }
      })
      .then(function() {
        // only the selected fields of the object will now be available here.
      })
      .then(function() {
        console.log('Gas was old, new gas data updated to Parse data successfully')
        // all fields of the object will now be available here.
      })
  }

  function isWeekOld(date) {
    // var todaysDate = new Date();
    var oneWeekAgo = new Date()
    var epochLastWeek = oneWeekAgo.setDate(oneWeekAgo.getDate() - 7)
    if (epochLastWeek < date) {
      return true
    }
  }
  if (isWeekOld(1441150745)) {
    console.log('data is a week old')
  }

  function getGasPricesFromParse() {
    var GasHistory = Parse.Object.extend('GasHistory')
    var gasHistory = new GasHistory()

    gasHistory.id = null

    scenario
      .fetch({
        success: function() {
          console.log('Gas Data from Parse Retrieved data successfully')
        },
        error: function(scenario, error) {
          // The object was not refreshed successfully.
          // error is a Parse.Error with an error code and message.
          console.log('Error getting prices from parse' + scenario + error)
        }
      })
      .then(function(result) {
        // only the selected fields of the object will now be available here.
        return result.fetch()
      })
      .then(function() {
        console.log(gasHistory)
        // all fields of the object will now be available here.
        updateGasChart(gasHistory)
      })
  }

  function updateGasChart(array) {
    var sliderCagrYears = parseFloat($('input[name$="slider-cagr-years"]').val(), 10)
    var yearsCalculated = parseFloat($('input[name$="years-calculated"]').val(), 10)
    var todaysDate = new Date()
    var yearsOfHistory = todaysDate.getFullYear() - sliderCagrYears

    //In epoch time
    var startDateofHistory = Date.UTC(yearsOfHistory, todaysDate.getMonth())
    console.log('1 Result before processing')
    console.log(array)
    var allResults = []
    for (var i = 0; i < array.length; i++) {
      if (array[i][0] >= startDateofHistory) {
        var result = []
        result[0] = array[i][0]
        result[1] = array[i][1]
        allResults.push(result)
      }
    }
    console.log('1 Result AFTER processing')
    console.log(allResults)

    var objLength = allResults.length - 1
    var lastValue = allResults[objLength][1]

    //http://financejs.org/#CAGR

    // Compound Annual Growth Rate (CAGR)
    ///Finance.prototype.CAGR = function(beginningValue, endingValue, numOfPeriods) {
    // var CAGR = Math.pow((endingValue / beginningValue), 1 / numOfPeriods) - 1;
    //return Math.round(CAGR * 10000) / 100;
    //};

    var historicalCagr = Math.pow(lastValue / allResults[0][1], 1, yearsOfHistory * 12) - 1
    historicalCagr = Math.round(historicalCagr * 10000) / 100
    var HistoricalCAGRArray = []
    for (var g = 0; g < yearsOfHistory; g = g + 1) {
      HistoricalCAGRArray[g] = lastValue * Math.pow(historicalCagr, [g])
    }
    var projectedArray = []
    for (var h = 0; h < yearsCalculated * 12; h = h + 1) {
      projectedArray[h] = lastValue * Math.pow(historicalCagr, [h])
    }
    var yearDateLongAgo = todaysDate.getFullYear() - sliderCagrYears
    var gasGraphStart =
      yearDateLongAgo + '-' + (todaysDate.getMonth() + 1) + '-' + todaysDate.getDate()
    console.log(gasGraphStart)
    console.log('historicalCagr')
    console.log(HistoricalCAGRArray)
    console.log('ProjectedCagr')
    console.log(projectedArray)
    chart7.series[2].setData(projectedArray, false)
    chart7.series[1].setData(HistoricalCAGRArray, false)
    chart7.series[0].setData(allResults, false)
    chart7.redraw()
  }
  //getLatestGasPrices();

  function getLatestGasPrices() {
    var gasFromGov = jQuery
      .getJSON(
        'https://www.quandl.com/api/v3/datasets/FRED/GASMIDCOVW.json?auth_token=1pSvyraQWKbgLSu5zA_e&order=asc&exclude_headers=true&collapse=monthly',
        function() {
          console.log('gas fetch success')
        }
      )
      .done(function() {
        console.log('gas fetch second success')

        var responseFromGov = JSON.parse(gasFromGov.responseText)
        var gasWithDateArray = responseFromGov.dataset.data
        //console.log(arrayFromGov);

        jQuery.each(gasWithDateArray, function(index) {
          var someDate = new Date(gasWithDateArray[index][0])
          someDate = someDate.getTime()
          gasWithDateArray[index][0] = someDate
        })
        //console.log(gasWithDateArray);
        updateGasChart(gasWithDateArray)
        updateGasToParse(JSON.stringify(gasWithDateArray))
        return gasWithDateArray

        // console.log(gasWithDateArray);
      })
      .fail(function() {
        console.log('gas fetch error')
      })
      .always(function() {
        console.log('gas fetch complete')
      })
  }

  function resetSettings(showMessage) {
    console.log('reset settings function run')
    varS = {}
    var original = {
      activeButtons: {
        gasSet: '',
        stanLeaseSet: '',
        taxesSetOff: '',
        usunitsSet: '',
        vanSet: '',
        yearSet: ''
      },
      activeTab: '#total-savings',
      discountType: 'stateDropdown',
      selectedState: 'ca',
      sliders: {
        carbonPerKW: '0',
        chargesPerDay: '1',
        co2creditperTonne: '0',
        corporateTaxRate: '40',
        interestRateStanDuplicate: '3.5',
        localDiscount: '0',
        nationaldiscount: '7500',
        salesTax: '8.6',
        sliderCagr: '7',
        sliderCagrYears: '15',
        sliderCng: '2.11',
        sliderCngcagr: '5',
        sliderDays: '5',
        sliderElec: '12',
        sliderFleetSize: '1',
        sliderGas: '3.5',
        sliderGasLiter: '141.05',
        sliderIdle: '20',
        sliderKilometers: '24000',
        sliderMiles: '15000',
        sliderStandardMsrp: '38000',
        sliderStandardResidual: '20',
        sliderStandardSuvMsrp: '45000',
        sliderStandardVanMsrp: '28000',
        sliderVtruxDownpayment: '0',
        sliderVtruxLease: '8',
        sliderVtruxMsrp: '92000',
        sliderVtruxSuvMsrp: '92000',
        sliderVtruxVanMsrp: '89000',
        stanLeaseYears: '5',
        stanMaint: '9',
        stanyearsUsed: '8',
        stdDownpayment: '0',
        suvChargedMpg: '22',
        suvStanMpg: '12',
        truckChargedMpg: '22',
        truckStanMpg: '18',
        vanChargedMpg: '13.5',
        vanStanMpg: '9.8',
        vtruxMaint: '6',
        yearsCalculated: '8'
      },
      stanbasis: 'lease',
      taxSettings: 'off',
      termtext: 'Year',
      units: 'us',
      yearsOfHistory: '15',
      vehicletype: 'van',
      vtruxbasis: 'lease'
    }

    varS.sliders = original.sliders
    varS = original
    varS.activeTab = $('#BigTabs li.active a').attr('href')
    setAllInputs(original)

    getAllInputs()
    scenario.save(original)
    $.vpayment()
    $.vco2calc()
    $('#tab-content-results').removeClass('blur')
    if (showMessage != 'undefined') {
      $('#saving-status').text(showMessage)
      $('#saving-status').show()
      $('#saving-status')
        .delay(1500)
        .fadeOut('slow', function() {
          $(this).hide()
        })
    }
    window.location.hash = ''
    localStorage.removeItem('hashkey')
  }

  document.onhashchange = function() {
    console.log('the hash has changed')
  }
})(jQuery)

jQuery(function() {
  jQuery('a[data-toggle=tooltip]')
    .tooltip()
    .click(function(e) {
      e.preventDefault()
    })

  jQuery('#state-modal')
    .modal({
      show: false,
      backdrop: true,
      keyboard: true
    })
    .css({
      width: function() {
        return jQuery(document).width() * 0.9 + 'px'
      },
      'margin-left': function() {
        return -(jQuery(this).width() / 2)
      }
    })

  // tabs
  jQuery('#lease-settings a').click(function(e) {
    e.preventDefault()
    jQuery(this).tab('show')
  })

  jQuery(function() {
    jQuery("[rel='tooltip']").tooltip()
  })

  // tabs
  jQuery('#BigTabs a').click(function(e) {
    e.preventDefault()
    jQuery(this).tab('show')
  })

  // popover
  jQuery('a[data-toggle=popover]')
    .popover({
      placement: function(tip, ele) {
        var width = jQuery(window).width()
        return width >= 975 ? 'right' : width < 600 ? 'right' : 'right'
      }
    })
    .click(function(e) {
      e.preventDefault()
    })
  jQuery('area[data-toggle=popover]')
    .popover({
      placement: function(tip, ele) {
        var width = jQuery(window).width()
        return width >= 975 ? 'right' : width < 600 ? 'right' : 'right'
      }
    })
    .click(function(e) {
      e.preventDefault()
    })
})

;(function($) {
  $('#carousel-opener').bind('click', function() {
    $('#calc-footer').toggleClass('active')
  })
})(jQuery)

/* globals jQuery, $, Parse, chart1, chart2, chart3, chart4, chart5, chart6, chart7, Highcharts */
;('use strict')

jQuery('#slider-miles').slider({
  from: 10000,
  to: 100000,
  step: 1000,
  round: 1,
  heterogeneity: ['30/20000'],
  format: { format: '#,###', locale: 'en' },
  dimension: ' Miles Per Year',
  skin: 'round_plastic',
  callback: function(value) {
    jQuery.vcalculate()
    jQuery.vco2calc()
    console.log($('#slider-miles').val())
  }
})

jQuery('#slider-kilometers').slider({
  from: 17000,
  to: 165000,
  step: 1000,
  round: 1,
  heterogeneity: ['30/30000'],
  format: { format: '#,###', locale: 'en' },
  dimension: ' Kilometres Per Year',
  skin: 'round_plastic',
  callback: function(value) {
    jQuery.vcalculate()
    jQuery.vco2calc()
  }
})

jQuery('#slider-days').slider({
  from: 5,
  to: 7,
  step: 1,
  round: 1,
  format: { format: '#,###', locale: 'en' },
  dimension: ' Driving Days a Week',
  skin: 'round_plastic',
  callback: function(value) {
    jQuery.vcalculate()
  }
})

jQuery('#chargesPerDay').slider({
  from: 0,
  to: 3,
  step: 0.1,
  round: 2,
  format: { format: '#.0', locale: 'en' },
  dimension: ' Charges Per Day',
  skin: 'round_plastic',
  callback: function(value) {
    jQuery.vcalculate()
  }
})

jQuery('#slider-fleet-size').slider({
  from: 1,
  to: 3000,
  step: 1,
  round: 1,
  heterogeneity: ['30/100'],
  format: { format: '#,###', locale: 'en' },
  dimension: ' Vehicles in Fleet',
  skin: 'round_plastic',
  callback: function(value) {
    jQuery.vpayment()
    jQuery.vco2calc()
  }
})

jQuery('#slider-elec').slider({
  from: 3,
  to: 20,
  step: 0.1,
  round: 2,
  format: { format: '#.0', locale: 'en' },
  dimension: ' ¢ per kWh',
  skin: 'round_plastic',
  callback: function(value) {
    jQuery.vcalculate()
  }
})

jQuery('#slider-gas').slider({
  from: 2,
  to: 10,
  step: 0.01,
  round: 2,
  format: { format: '$#.00', locale: 'en' },
  dimension: ' per Gallon (Today&#39;s Prices)',
  skin: 'round_plastic',
  callback: function(value) {
    jQuery.vcalculate()
  }
})

jQuery('#slider-gas-liter').slider({
  from: 50,
  to: 200,
  step: 0.01,
  round: 2,
  format: { format: '#', locale: 'en' },
  dimension: ' ¢ per Litre (Today&#39;s Prices)',
  skin: 'round_plastic',
  callback: function(value) {
    jQuery.vcalculate()
  }
})

jQuery('#slider-cagr').slider({
  from: -15,
  to: 15,
  step: 0.1,
  round: 1,
  format: { format: '#.0', locale: 'en' },
  dimension: '% Gas Compound Annual Growth Rate',
  skin: 'round_plastic',
  callback: function(value) {
    jQuery.vcalculate()
  }
})

// jQuery("#slider-cagr-years").slider({ from: 1, to: 20, step: 1, round: 1, format: { format: '#', locale: 'en' }, dimension: ' Years of Growth', skin: "round_plastic", callback: function( value ){ jQuery.vUpdateCagr(value); } });

jQuery('#local-discount').slider({
  from: 0,
  to: 60000,
  step: 500,
  round: 2,
  format: { format: '$#,###', locale: 'en' },
  dimension: ' Local',
  skin: 'round_plastic',
  callback: function(value) {
    jQuery.vpayment()
  }
})

jQuery('#nationaldiscount').slider({
  from: 0,
  to: 35000,
  step: 500,
  round: 2,
  format: { format: '$#,###', locale: 'en' },
  dimension: ' National',
  skin: 'round_plastic',
  callback: function(value) {
    jQuery.vpayment()
  }
})

jQuery('#interest-rate-stan-duplicate').slider({
  from: 0,
  to: 8,
  step: 0.1,
  round: 1,
  format: { format: '#.#', locale: 'en' },
  dimension: '% Interest Rate',
  skin: 'round_plastic',
  callback: function(value) {
    jQuery.vpayment()
  }
})

jQuery('#slider-standard-residual').slider({
  from: 0,
  to: 80,
  step: 5,
  round: 2,
  format: { format: '#,###', locale: 'en' },
  dimension: ' % Residual Value',
  skin: 'round_plastic',
  callback: function(value) {
    jQuery.vpayment()
  }
})

jQuery('#sales-tax').slider({
  from: 0,
  to: 12,
  step: 0.1,
  round: 1,
  format: { format: '#.#', locale: 'en' },
  dimension: '% Sales Tax',
  skin: 'round_plastic',
  callback: function(value) {
    jQuery.vpayment()
  }
})

jQuery('#corporate-tax-rate').slider({
  from: 0,
  to: 60,
  step: 0.1,
  round: 1,
  format: { format: '#.#', locale: 'en' },
  dimension: '% Marginal Tax Rate',
  skin: 'round_plastic',
  callback: function(value) {
    jQuery.vpayment()
  }
})

jQuery('#slider-standard-msrp').slider({
  from: 20000,
  to: 110000,
  step: 1000,
  round: 2,
  format: { format: '$#,###', locale: 'en' },
  dimension: ' MSRP',
  skin: 'round_plastic',
  callback: function(value) {
    jQuery.vpayment()
  }
})

jQuery('#slider-standard-suv-msrp').slider({
  from: 20000,
  to: 110000,
  step: 1000,
  round: 2,
  format: { format: '$#,###', locale: 'en' },
  dimension: ' MSRP',
  skin: 'round_plastic',
  callback: function(value) {
    jQuery.vpayment()
  }
})

jQuery('#slider-standard-van-msrp').slider({
  from: 20000,
  to: 110000,
  step: 1000,
  round: 2,
  format: { format: '$#,###', locale: 'en' },
  dimension: ' MSRP',
  skin: 'round_plastic',
  callback: function(value) {
    jQuery.vpayment()
  }
})

jQuery('#std-downpayment').slider({
  from: 0,
  to: 30000,
  step: 250,
  round: 2,
  format: { format: '$#,###', locale: 'en' },
  dimension: ' Downpayment',
  skin: 'round_plastic',
  callback: function(value) {
    jQuery.vpayment()
  }
})

jQuery('#stan-lease-years').slider({
  from: 2,
  to: 8,
  step: 1,
  round: 2,
  format: { format: '#', locale: 'en' },
  dimension: ' Year Lease',
  skin: 'round_plastic',
  callback: function(value) {
    jQuery.vpayment()
  }
})

jQuery('#stanyears-used').slider({
  from: 3,
  to: 8,
  step: 1,
  round: 2,
  format: { format: '#', locale: 'en' },
  dimension: ' Year Lifecycle',
  skin: 'round_plastic',
  callback: function(value) {
    jQuery.vpayment()
  }
})

jQuery('#slider-vtrux-msrp').slider({
  from: 70000,
  to: 110000,
  step: 1000,
  round: 2,
  format: { format: '$#,###', locale: 'en' },
  dimension: ' MSRP',
  skin: 'round_plastic',
  callback: function(value) {
    jQuery.vpayment()
  }
})

jQuery('#slider-vtrux-van-msrp').slider({
  from: 70000,
  to: 110000,
  step: 1000,
  round: 2,
  format: { format: '$#,###', locale: 'en' },
  dimension: ' MSRP',
  skin: 'round_plastic',
  callback: function(value) {
    jQuery.vpayment()
  }
})

jQuery('#slider-vtrux-suv-msrp').slider({
  from: 70000,
  to: 110000,
  step: 1000,
  round: 2,
  format: { format: '$#,###', locale: 'en' },
  dimension: ' MSRP',
  skin: 'round_plastic',
  callback: function(value) {
    jQuery.vpayment()
  }
})

jQuery('#slider-vtrux-downpayment').slider({
  from: 0,
  to: 30000,
  step: 250,
  round: 2,
  format: { format: '$#,###', locale: 'en' },
  dimension: ' Downpayment',
  skin: 'round_plastic',
  callback: function(value) {
    jQuery.vpayment()
  }
})

jQuery('#slider-vtrux-lease').slider({
  from: 2,
  to: 8,
  step: 1,
  round: 1,
  format: { format: '#', locale: 'en' },
  dimension: ' Year Lease',
  skin: 'round_plastic',
  callback: function(value) {
    jQuery.vpayment()
  }
})

jQuery('#years-calculated').slider({
  from: 3,
  to: 8,
  step: 1,
  round: 2,
  format: { format: '#', locale: 'en' },
  dimension: ' Year Lifecycle',
  skin: 'round_plastic',
  callback: function(value) {
    jQuery.vpayment()
  }
})

jQuery('#truck-stan-mpg').slider({
  from: 5,
  to: 25,
  step: 0.1,
  round: 2,
  format: { format: '#.0', locale: 'en' },
  dimension: ' Standard MPG',
  skin: 'round_plastic',
  callback: function(value) {
    jQuery.vpayment()
  }
})

jQuery('#suv-stan-mpg').slider({
  from: 5,
  to: 25,
  step: 0.1,
  round: 2,
  format: { format: '#.0', locale: 'en' },
  dimension: ' Standard MPG',
  skin: 'round_plastic',
  callback: function(value) {
    jQuery.vpayment()
  }
})

jQuery('#van-stan-mpg').slider({
  from: 5,
  to: 25,
  step: 0.1,
  round: 2,
  format: { format: '#.0', locale: 'en' },
  dimension: ' Standard MPG',
  skin: 'round_plastic',
  callback: function(value) {
    jQuery.vpayment()
  }
})

jQuery('#slider-idle').slider({
  from: 0,
  to: 80,
  step: 1,
  round: 1,
  format: { format: '#', locale: 'en' },
  dimension: ' % Idle time',
  skin: 'round_plastic',
  callback: function(value) {
    jQuery.vpayment()
  }
})

jQuery('#stan-maint').slider({
  from: 1,
  to: 20,
  step: 1,
  round: 2,
  format: { format: '#', locale: 'en' },
  dimension: ' ¢ Maintenance Per Mile',
  skin: 'round_plastic',
  callback: function(value) {
    jQuery.vcalculate()
  }
})

jQuery('#slider-cng').slider({
  from: 1,
  to: 5,
  step: 0.01,
  round: 2,
  format: { format: '$#.00', locale: 'en' },
  dimension: ' per GGE',
  skin: 'round_plastic',
  callback: function(value) {
    jQuery.vcalculate()
  }
})

jQuery('#slider-cngcagr').slider({
  from: 0,
  to: 15,
  step: 0.1,
  round: 1,
  format: { format: '#.0', locale: 'en' },
  dimension: '% CNG CAGR',
  skin: 'round_plastic',
  callback: function(value) {
    jQuery.vcalculate()
  }
})

jQuery('#truck-charged-mpg').slider({
  from: 5,
  to: 40,
  step: 0.1,
  round: 2,
  format: { format: '#.0', locale: 'en' },
  dimension: ' Electrified MPG',
  skin: 'round_plastic',
  callback: function(value) {
    jQuery.vcalculate()
  }
})

jQuery('#suv-charged-mpg').slider({
  from: 5,
  to: 40,
  step: 0.1,
  round: 2,
  format: { format: '#.0', locale: 'en' },
  dimension: ' Electrified  MPG',
  skin: 'round_plastic',
  callback: function(value) {
    jQuery.vcalculate()
  }
})

jQuery('#van-charged-mpg').slider({
  from: 5,
  to: 40,
  step: 0.1,
  round: 2,
  format: { format: '#.0', locale: 'en' },
  dimension: ' Electrified MPG',
  skin: 'round_plastic',
  callback: function(value) {
    jQuery.vcalculate()
  }
})

jQuery('#vtrux-maint').slider({
  from: 1,
  to: 15,
  step: 1,
  round: 2,
  format: { format: '#', locale: 'en' },
  dimension: ' ¢ Maintenance Per Mile',
  skin: 'round_plastic',
  callback: function(value) {
    jQuery.vcalculate()
  }
})

jQuery('#carbonPerKW').slider({
  from: 0,
  to: 3,
  step: 0.01,
  round: 2,
  format: { format: '#.00', locale: 'en' },
  dimension: ' Lbs. CO2 per KWH',
  skin: 'round_plastic',
  callback: function(value) {
    jQuery.vco2calc()
  }
})

jQuery('#co2creditperTonne').slider({
  from: 0,
  to: 20,
  step: 0.01,
  round: 2,
  format: { format: '$#.00', locale: 'en' },
  dimension: '/Ton Carbon Credit',
  heterogeneity: ['20/9', '80/13'],
  skin: 'round_plastic',
  callback: function(value) {
    jQuery.vco2calc()
  }
})

jQuery(document).ready(function() {
  jQuery('.currency').currency({ region: 'USD', decimals: 0 })
  jQuery.vpayment()
})
