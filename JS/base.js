// function putTextArea() {
//   let findToggle = document.getElementsByClassName("btn-toggle-moreless");
//   console.log(findToggle);
//   findToggle.insertAdjacentHTML("beforebegin", '<textarea class="answer" onkeydown="resize(this)" onkeyup="resize(this)" cols="90" rows="1"></textarea>');
// }

// putTextArea();

function getObject(target) {
  try {
    switch (typeof target) {
      case "undefined":
        return null;
      case "object":
        return target;
      default:
        return document.getElementById(target);
    }
  } catch (e) {
    return null;
  }
}
function HTTPRequest() {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.url = arguments[0];
      break;
    default:
    case 3:
      this["async"] = arguments[2];
    case 2:
      (this.method = arguments[0]), (this.url = arguments[1]), (this.charset = arguments[2]);
  }
  try {
    this._request = new XMLHttpRequest();
  } catch (e) {
    for (var objectNames = ["MSXML2.XMLHTTP.5.0", "MSXML2.XMLHTTP.4.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], i = 0; i < objectNames.length; i++)
      try {
        this._request = new ActiveXObject(objectNames[i]);
        break;
      } catch (e) {}
    if (null == this._request) return null;
  }
  (this._properties = new Array()), (this._attributes = new Array()), (this._userData = new Array());
}
!(function () {
  var a, b;
  (window.daum && window.daum.extend) ||
    (((a = window.daum = {}).extend = function (d, e, c) {
      var f,
        b = c === undefined || c;
      for (f in e) (d[f] && !b) || (d[f] = e[f]);
      return d;
    }),
    a.extend(a, {
      version: "1.0_r193",
      Array: {
        compact: function (c) {
          if (!c) return [];
          for (var e = 0, d = [], b = c.length; e < b; e += 1) null !== c[e] && "undefined" != typeof c[e] && d.push(c[e]);
          return d;
        },
        each: function (c, e) {
          if (Array.prototype.forEach) return c.forEach(e);
          for (var d = 0, b = c.length; d < b; d += 1) e(c[d], d);
        },
        indexOf: [].indexOf
          ? function (b, c) {
              return b.indexOf(c);
            }
          : function (c, e) {
              for (var d = 0, b = c.length; d < b; d += 1) if (c[d] === e) return d;
              return -1;
            },
        contains: function (b, c) {
          return -1 < b.indexOf(c);
        },
      },
      Browser: {
        ua: navigator.userAgent.toLowerCase(),
        offset: { width: 0, height: 0 },
        browserInit: function () {
          (this.ie = -1 != this.ua.indexOf("msie")),
            (this.ie_sv1 = -1 != this.ua.indexOf("sv1")),
            (this.ie_sv2 = -1 != this.ua.indexOf("sv2")),
            (this.ie6 = -1 != this.ua.indexOf("msie 6")),
            (this.ie7 = -1 != this.ua.indexOf("msie 7")),
            (this.ie8 = -1 != this.ua.indexOf("trident/4.0")),
            (this.ff = -1 != this.ua.indexOf("firefox") && -1 == this.ua.indexOf("navigator")),
            (this.ff2 = this.ff && -1 != this.ua.indexOf("firefox/2.")),
            (this.ff3 = this.ff && -1 != this.ua.indexOf("firefox/3.")),
            (this.sf = -1 != this.ua.indexOf("safari") && -1 == this.ua.indexOf("chrome")),
            (this.webkit = -1 != this.ua.indexOf("applewebkit")),
            (this.op = -1 != this.ua.indexOf("opera")),
            (this.cr = -1 != this.ua.indexOf("chrome/")),
            (this.ns = -1 != this.ua.indexOf("netscape") || (-1 != this.ua.indexOf("firefox") && -1 != this.ua.indexOf("navigator"))),
            (this.gecko = -1 != this.ua.indexOf("gecko")),
            (this.infopath = -1 != this.ua.indexOf("infopath")),
            (this.etc = this.gecko && this.ff && this.ns),
            (this.win = -1 != this.ua.indexOf("win")),
            (this.vista = -1 != this.ua.indexOf("nt 6")),
            (this.xp = -1 != this.ua.indexOf("nt 5.1")),
            (this.w2k = -1 != this.ua.indexOf("nt 5.0")),
            (this.w98 = -1 != this.ua.indexOf("windows 98")),
            (this.mac = -1 != this.ua.indexOf("mac")),
            (this.unix = !(this.win || this.mac)),
            (this.ipad = -1 != this.ua.indexOf("ipad;")),
            this.versioning();
        },
        versioning: function () {
          this.ie && (this.ie8 && (this.ie7 = this.ie6 = this.ie_sv2 = this.ie_sv1 = !1), this.ie7 && (this.ie6 = this.ie_sv2 = this.ie_sv1 = !1)), this.ff && this.ff3 && (this.ff2 = !1), this.sf && this.cr && (this.sf = !1);
        },
      },
      Element: {
        cleanBlankNodes: function (c) {
          var d,
            b = (d = a.$(c)).firstChild;
          try {
            for (; 3 !== b.nodeType || /\S/.test(b.nodeValue) || d.removeChild(b), (b = b.nextSibling); );
          } catch (d) {}
          return d;
        },
        getChildElements: function (d) {
          var c = a.$(d).firstChild,
            b = [];
          try {
            for (; 1 === c.nodeType && b.push(c), (c = c.nextSibling); );
          } catch (f) {}
          return b;
        },
        getElementsByClassName: function (g, d) {
          if (0 < document.getElementsByClassName.toString().indexOf("native")) return a.$A(g.getElementsByClassName(d));
          var h = g == document || g == document.body || g == window;
          if (h || g.id) return a.$$((h ? "" : "#" + g.id + " ") + "." + a.String.trim(d).replace(/\s+/g, "."));
          for (var c = a.$(g).getElementsByTagName("*"), f = [], e = 0, b = c.length; e < b; e += 1) a.Element.hasClassName(c[e], d) && f.push(c[e]);
          return 0 < f.length ? f : [];
        },
        getFirstChild: function (b) {
          for (var c = a.$(b).firstChild; c && 1 !== c.nodeType; ) c = c.nextSibling;
          return c;
        },
        getLastChild: function (c) {
          for (var b = a.$(c).lastChild; b && 1 !== b.nodeType; ) b = b.previousSibling;
          return b;
        },
        getNext: function (c) {
          for (var b = a.$(c).nextSibling; b && 1 !== b.nodeType; ) b = b.nextSibling;
          return b;
        },
        getPrev: function (b) {
          for (var c = a.$(b).previousSibling; c && 1 !== c.nodeType; ) c = c.previousSibling;
          return c;
        },
        getParent: function (b) {
          return a.$(b).parentNode;
        },
        getCoords: function (f, d, m) {
          for (var g = d || !1, l = a.$(m) || !1, i = a.$(f), m = i.offsetWidth, f = i.offsetHeight, j = { left: 0, top: 0, right: 0, bottom: 0 }; i; ) {
            if (((j.left += i.offsetLeft || 0), (j.top += i.offsetTop || 0), (i = i.offsetParent), g && i)) {
              if ("BODY" == i.tagName) break;
              if ("static" !== a.Element.getStyle(i, "position")) break;
            }
            if (l && l == i) break;
          }
          return (j.right = j.left + m), (j.bottom = j.top + f), j;
        },
        getCoordsTarget: function (c, b) {
          return a.Element.getCoords(c, !1, b);
        },
        getStyle: function (i, c, j) {
          var i = a.$(i),
            j = j || c,
            c = "float" == c.toLowerCase() ? (a.Browser.ie ? "styleFloat" : "cssFloat") : c,
            b = i.currentStyle
              ? ((b =
                  -1 !== c.indexOf("-")
                    ? c.replace(/[\-](.)/g, function (k, e) {
                        return e.toUpperCase();
                      })
                    : c),
                i.currentStyle[b])
              : ((b = /[A-Z]/.test(j)
                  ? j.replace(/([A-Z])/g, function (k, e) {
                      return "-" + e.toLowerCase();
                    })
                  : j),
                document.defaultView.getComputedStyle(i, null).getPropertyValue(b));
          return b;
        },
        hasClassName: function (d, e) {
          var f = a.String.trim(a.$(d).className).replace(/\s+/g, " ").split(" "),
            e = a.String.trim(e).replace(/\s+/g, " ").split(" "),
            b = !0;
          return (
            a.Array.each(e, function (g) {
              b = a.Array.contains(f, g) && b;
            }),
            b
          );
        },
        visible: function (c) {
          c = a.$(c);
          return !(0 === c.offsetWidth && 0 === c.offsetHeight);
        },
        show: function (c, d) {
          c = a.$(c);
          return (c.style.display = d || "block"), c;
        },
        hide: function (c) {
          c = a.$(c);
          return (c.style.display = "none"), c;
        },
        toggle: function (c, d) {
          c = a.$(c);
          return a.Element.visible(c) ? a.Element.hide(c) : a.Element.show(c, d || "block");
        },
        addClassName: function (d, b) {
          d = a.$(d);
          return a.Element.hasClassName(d, b) || (d.className = "" === a.String.trim(d.className) ? b : d.className + " " + b), d;
        },
        removeClassName: function (c, b) {
          return a.Element.replaceClassName(c, b, "");
        },
        replaceClassName: function (g, f, h) {
          var d = a.$(g),
            b = [],
            g = a.String.trim(a.$(g).className).replace(/\s+/g, " ").split(" ");
          return (
            a.Array.each(g, function (e) {
              e === f ? h && b.push(h) : b.push(e);
            }),
            (d.className = b.join(" ")),
            d
          );
        },
        setOpacity: function (c, d) {
          c = a.$(c);
          return (c.style.filter = "alpha(opacity=" + 100 * d + ")"), (c.style.opacity = c.style.MozOpacity = c.style.KhtmlOpacity = d), c;
        },
      },
      Event: {
        observer: [],
        EVENTID: 0,
        crossEvent:
          ((b = {}),
          document.addEventListener
            ? ((b.add = function (d) {
                var c = d.type;
                "mousewheel" == c.toLowerCase() && a.Browser.ff && (c = "DOMMouseScroll"), d.src.addEventListener(c, d.handler, d.isCapture);
              }),
              (b.remove = function (d) {
                var c = d.type;
                "mousewheel" == c.toLowerCase() && a.Browser.ff && (c = "DOMMouseScroll"), d.src.removeEventListener(c, d.handler, d.isCapture);
              }))
            : ((b.add = function (d) {
                var c = d.type;
                "dommousescroll" == c.toLowerCase() && (c = "mousewheel"), d.src.attachEvent("on" + c, d.handler);
              }),
              (b.remove = function (d) {
                var c = d.type;
                "dommousescroll" == c.toLowerCase() && (c = "mousewheel"), d.src.detachEvent("on" + c, d.handler);
              })),
          b),
        bindedHandlerRegister: [],
        getBindedHandler: function (g, f) {
          var c,
            e = a.Event.bindedHandlerRegister,
            b = -1,
            d = 0;
          for (loop = e.length; d < loop; d += 1)
            if (e[d].src === g && e[d].handler === f) {
              b = d;
              break;
            }
          return 0 <= b ? e[b].bindedHandler : ((c = a.Function.bindAsEventListener(f, g)), e.push({ src: g, handler: f, bindedHandler: c }), c);
        },
        addEvent: function (c, i, j, g) {
          var b = a.$(c),
            c = a.Event.EVENTID++,
            g = { src: b, type: i, handler: j, isCapture: g || !1 };
          return (a.Event.observer[c] = g), a.Event.crossEvent.add(g), c;
        },
        removeEvent: function (f, e, d, c) {
          var b = a.Event.observer;
          if (!f || e || d) {
            var g,
              h = a.$(f);
            for (g in (a.Event.crossEvent.remove({
              src: h,
              type: e,
              handler: d,
              isCapture: c || !1,
            }),
            b))
              if (b[g].src === h && b[g].type === e && b[g].handler === d && b[g].isCapture === (c || !1)) {
                delete a.Event.observer[g];
                break;
              }
          } else a.Event.crossEvent.remove(b[f]), delete a.Event.observer[f];
        },
        stopObserving: function (b) {
          a.Event.observer[b] && a.Event.removeEvent(b);
        },
        hasObserver: function (f, d) {
          if ("number" == typeof f) return !!a.Event.observer[f];
          var e,
            c = !1,
            b = a.Event.observer;
          for (e in b)
            if (b[e].src === f && b[e].type === d) {
              c = !0;
              break;
            }
          return c;
        },
        stopEvent: function (b) {
          return a.Event.stopPropagation(b), a.Event.preventDefault(b), !1;
        },
        preventDefault: function (b) {
          b = b || window.event;
          return b.preventDefault ? b.preventDefault() : (b.returnValue = !1), !1;
        },
        stopPropagation: function (b) {
          b = b || window.event;
          b.stopPropagation ? b.stopPropagation() : (b.cancelBubble = !0);
        },
        GC: function () {
          return a.Browser.ie
            ? function () {
                for (var b in a.Event.observer) {
                  var c;
                  if ((c = a.Event.observer[b].src) && c.ownerDocument)
                    try {
                      c.offsetParent || a.Event.stopObserving(b);
                    } catch (c) {
                      a.Event.stopObserving(b);
                    }
                }
              }
            : function () {
                for (var b in a.Event.observer) {
                  var d = a.Event.observer[b].src,
                    c = !1;
                  if (d && d.ownerDocument && !d.offsetParent) {
                    do {
                      if (d === document.body) {
                        c = !0;
                        break;
                      }
                    } while ((d = d.parentNode));
                    c || a.Event.stopObserving(b);
                  }
                }
              };
        },
      },
      Function: {
        bind: function (e) {
          var b,
            d,
            g = e,
            c = a.$A(arguments);
          return (
            c.shift(),
            (b = c.shift()),
            ((d = function () {
              return g.apply(b, c.concat(a.$A(arguments)));
            }).__Binded = !0),
            d
          );
        },
        bindAsEventListener: function (e) {
          var b,
            d,
            g = e,
            c = a.$A(arguments);
          return (
            c.shift(),
            (b = c.shift()),
            ((d = function (f) {
              return g.apply(b, [f || window.event].concat(c));
            }).__Binded = !0),
            d
          );
        },
        interval: function (c, b, d) {
          c = d ? a.Function.bind(c, d) : c;
          return window.setInterval(c, b);
        },
        timeout: function (c, b, d) {
          c = d ? a.Function.bind(c, d) : c;
          return window.setTimeout(c, b);
        },
      },
      Fx: {},
      Number: {},
      Object: {
        isArray: function (b) {
          return "Array" === a.Object.getType(b);
        },
        isBoolean: function (b) {
          return "Boolean" === a.Object.getType(b);
        },
        isFunction: function (b) {
          return "Function" === a.Object.getType(b);
        },
        isString: function (b) {
          return "String" === a.Object.getType(b);
        },
        isNumber: function (b) {
          return "Number" === a.Object.getType(b);
        },
        isObject: function (b) {
          return "Object" === a.Object.getType(b);
        },
        getType: function (b) {
          return Object.prototype.toString
            .call(b)
            .toString()
            .match(/\[object\s(\w*)\]$/)[1];
        },
        toJSON: function (b) {
          return a.toJSON(b);
        },
      },
      String: {
        trim: function (b) {
          return b.replace(/^\s\s*/, "").replace(/\s\s*$/, "");
        },
        replaceAll: function (c, b, d) {
          return b.constructor == RegExp ? c.replace(new RegExp(b.toString().replace(/^\/|\/$/gi, ""), "gi"), d) : c.split(b).join(d);
        },
        byteLength: function (c) {
          var b = 0;
          return (
            a.$A(c.toString()).each(function (d) {
              b += 3 < escape(d).length ? 2 : 1;
            }),
            b
          );
        },
        cutString: function (e, b, g) {
          var c,
            g = g || "",
            f = b - g.length,
            i = 0,
            h = "";
          return (
            a.$A(e.toString()).each(function (j) {
              (c = 3 < escape(j).length ? 2 : 1), (i += c), 0 <= (f -= c) && (h += j);
            }),
            i <= b ? e : (h += g)
          );
        },
      },
      $: function (b) {
        return "string" == typeof b ? document.getElementById(b) : b;
      },
      $A: function (d) {
        if (!d) return [];
        if (d instanceof Array && !a.Browser.op) return d;
        var f = "string" == typeof d && (a.ie || a.op) ? d.split("") : d;
        try {
          b = Array.prototype.slice.call(f);
        } catch (h) {
          for (var g = 0, b = [], c = d.length; g < c; g += 1) b.push(d[g]);
        }
        return b;
      },
      $C: function (c, d) {
        c = a.$(c);
        return null !== c ? a.Element.getElementsByClassName(c, d) : null;
      },
      $E: function (b) {
        b = a.$(b);
        return b && (a.extendMethods(b, a.Element, !1), (b.addEvent = a.methodize(a.Event.addEvent)), (b.removeEvent = a.methodize(a.Event.removeEvent))), b;
      },
      $F: function (f) {
        var c,
          g,
          b,
          f = a.$(f) || document.getElementsByName(f)[0];
        if (!f || ("INPUT" !== f.tagName && "SELECT" !== f.tagName && "TEXTAREA" !== f.tagName)) return "";
        if ("radio" == f.type || "checkbox" == f.type) {
          for (c = 0, g = document.getElementsByName(f.name), b = new Array(); c < g.length; c += 1) g[c].checked && b.push(g[c].value);
          b = "radio" == f.type ? b[0] : b;
        } else if ("select-multiple" == f.type) for (c = 0, g = a.Element.getChildElements(f), b = new Array(); c < g.length; c += 1) g[c].selected && b.push(g[c].value);
        else f.value && (b = f.value);
        return b;
      },
      $T: function (b, c) {
        return (c || document).getElementsByTagName(b);
      },
      activeX: function (k, e, f) {
        var j,
          m,
          n = new Date(),
          f = f || !1,
          n = n.getMinutes().toString() + n.getSeconds() + n.getMilliseconds(),
          i = k.param,
          h = !1,
          b = null,
          l = "<object ";
        for (j in ((l += 'id="' + (k.id ? k.id + '" ' : "daumActiveX" + n + '" ')),
        (l += 'name="' + (k.name ? k.name + '" ' : "daumActiveX" + n + '" ')),
        (l += k.type ? 'type="' + k.type + '" ' : ""),
        (l += k.classid ? 'classid="' + k.classid + '" ' : ""),
        (l += k.width ? 'width="' + k.width + '" ' : ""),
        (l += k.height ? 'height="' + k.height + '" ' : ""),
        (l += k.codebase ? 'codebase="' + k.codebase + '" ' : ""),
        (l += ">\r\n"),
        i))
          i.hasOwnProperty(j) && (l += '<param name="' + j + '" value="' + i[j] + '" />\r\n');
        for (j in ((l += "<embed "), (l += 'id="' + (k.id ? k.id + '" ' : "daumActiveX" + n + '" ')), (l += 'name="' + (k.name ? k.name + '" ' : "daumActiveX" + n + '" ')), (l += k.type ? 'type="' + k.type + '" ' : ""), (l += k.width ? 'width="' + k.width + '" ' : ""), (l += k.height ? 'height="' + k.height + '" ' : ""), i))
          i.hasOwnProperty(j) && (m = j.toLowerCase()) && (("movie" != m && "src" != m) || (b = i[j]), "flashvars" != m ? (l += m + '="' + i[j] + '" ') : (h = i[j]));
        return (
          (l += " />\r\n</object>\r\n"),
          h && b && (l = l.replace('src="' + b + '"', 'src="' + b + (-1 == b.indexOf("?") ? "?" : "&") + h + '"')),
          f ? l : ((e = a.$(e)), (a.Browser.ie || "application/x-shockwave-flash" == k.type || "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" == k.classid.toLowerCase() || (a.Browser.win && "clsid:22d6f312-b0f6-11d0-94ab-0080c74c7e95" == k.classid.toLowerCase())) && (f || (e.innerHTML = l)), (e = a.Element.getFirstChild(e)), a.Browser.ie ? e : e.getElementsByTagName("embed")[0])
        );
      },
      documentLoaded: !1,
      extendMethods: function (d, e, c) {
        var f,
          b = c === undefined || c;
        for (f in e) (d[f] && !b) || ("function" == typeof e[f] && (d[f] = a.methodize(e[f])));
        return d;
      },
      methodize: function (b) {
        return function () {
          return b.apply(null, [this].concat(a.$A(arguments)));
        };
      },
      nativeExtend: function () {
        var d,
          c = [
            [a.Object, Object],
            [a.String, String.prototype],
            [a.Number, Number.prototype],
            [a.Array, Array.prototype],
            [a.Function, Function.prototype],
          ],
          b = c.length;
        for (Array.prototype.isArray = !0, Number.prototype.isNumber = !0, String.prototype.isString = !0, Function.prototype.isFunction = !0, d = 0; d < b; d += 1) a.extendMethods(c[d][1], c[d][0], !1);
      },
      random: function (c, b) {
        return Math.floor(Math.random() * (b - c + 1) + c);
      },
      showFlash: function (f, e, c, h, b) {
        var d = {
            quality: "high",
            wmode: "transparent",
            bgcolor: "#FFFFFF",
            pluginspace: "http://www.macromedia.com/go/getflashplayer",
            allowScriptAccess: "always",
            allowFullScreen: "true",
            htmltext: !1,
          },
          f = {
            type: "application/x-shockwave-flash",
            classid: "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000",
            codebase: "http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0",
            wmode: "transparent",
            width: e,
            height: c,
            param: { movie: f, src: f },
          };
        return a.extend(d, b || {}), a.extend(f.param, d), -1 != location.toString().indexOf("https://") && (f.codebase = f.codebase.replace("http://", "https://")), a.activeX(f, h, d.htmltext);
      },
    }));
})(),
  daum.Browser.browserInit(),
  document.getElementsByClassName || (document.getElementsByClassName = daum.methodize(daum.Element.getElementsByClassName)),
  String.prototype.trim &&
    (daum.String.trim = function (a) {
      return a.trim();
    }),
  daum.extend(daum, {
    createElement: function (j, g) {
      var m,
        b,
        c,
        a = "",
        k = daum.HTMLStack;
      if (g) {
        for (c in g) a += c + '="' + g[c] + '" ';
        m = "<" + j + " " + a + "></" + j + ">";
      } else m = daum.String.startsWith(j, "<") ? j : "<" + j + "></" + j + ">";
      try {
        if (((k.innerHTML = m), 1 !== (b = k.removeChild(k.firstChild)).nodeType)) throw { message: "shit browser!" };
        return b;
      } catch (d) {
        return (j = {
          tbody: ["<table>", "</table>"],
          tr: ["<table><tbody>", "</tbody></table>"],
          td: ["<table><tbody><tr>", "</tr></tbody></table>"],
          option: ["<select>", "</select>"],
        })[(b = m.match(/\w+/).toString().toLowerCase())]
          ? ((k.innerHTML = j[b][0] + m + j[b][1]), k.removeChild(k.firstChild).getElementsByTagName(b)[0])
          : document.createElement(b);
      }
    },
    loadedScripts: {},
    loadTimer: {},
    load: function (e, a, b) {
      if (daum.loadedScripts[e]) return a && a(), !1;
      var d,
        c = document.createElement("script");
      for (d in ((c.type = "text/javascript"), b)) b.hasOwnProperty(d) && c.setAttribute(d, b[d]);
      return (
        (c.src = e),
        daum.$T("head")[0].appendChild(c),
        !!a &&
          ((c.onreadystatechange = function () {
            ("loaded" != this.readyState && "complete" != this.readyState) || daum.loadedScripts[e] || ((daum.loadedScripts[e] = !0), a());
          }),
          (c.onload = function () {
            daum.loadedScripts[e] || ((daum.loadedScripts[e] = !0), a());
          }),
          !0)
      );
    },
    urlParameter: (function () {
      for (var e, f = {}, c = location.search.substr(1).split("&"), d = 0, b = c.length; d < b; d += 1) f[(e = c[d].split("="))[0]] = e[1];
      return f;
    })(),
    getParam: function (a) {
      return this.urlParameter[a] || null;
    },
    useHTMLPrototype:
      ((daum.HTMLFragment = document.createDocumentFragment ? document.createDocumentFragment() : document.createElement("div")),
      (daum.HTMLPrototype = document.createElement("div")),
      (daum.HTMLStack = document.createElement("div")),
      (daum.HTMLPrototype.id = "daum_html_prototype"),
      (daum.HTMLStack.id = "daum_html_stack"),
      daum.HTMLFragment.appendChild(daum.HTMLPrototype),
      daum.HTMLFragment.appendChild(daum.HTMLStack),
      (daum.HTMLPrototype.style.position = daum.HTMLStack.style.position = "absolute"),
      (daum.HTMLPrototype.style.left = daum.HTMLStack.style.left = daum.HTMLPrototype.style.top = daum.HTMLStack.style.top = "-10000px"),
      !0),
    toJSON: function (a) {
      return JSON.stringify(a);
    },
    xmlToObject: function (a) {
      var a = a.documentElement,
        b = function (h) {
          for (var f, k, m = {}, n = daum.getChildElements(h), g = 0, d = n.length; g < d; g += 1) {
            (f = n[g].nodeName), (k = 0 < daum.getChildElements(n[g]).length ? b(n[g]) : null == n[g].firstChild ? "" : n[g].firstChild.nodeValue), m[f] != undefined || 1 < h.getElementsByTagName(f).length ? (m[f] == undefined && (m[f] = []), m[f].push(k)) : (m[f] = k);
            for (var e = 0; e < n[g].attributes.length; e += 1) m[f + "@" + n[g].attributes[e].nodeName] = (n[g].attributes[e].nodeValue || "").toString();
          }
          return m;
        };
      return b(a);
    },
    jsonToObject: function (a) {
      return JSON.parse(a);
    },
  }),
  daum.extend(daum.Array, {
    copy: function (c) {
      for (var e, d = 0, f = [], b = c.length; d < b; d += 1)
        if (c[d].constructor == c.constructor) f[d] = daum.Array.copy(c[d]);
        else if ("object" == typeof c[d])
          if ("object" == typeof c[d].valueOf()) for (e in ((f[d] = c[d].constructor()), c[d])) f[d][e] = c[d][e];
          else f[d] = c[d].constructor(c[d].valueOf());
        else f[d] = c[d];
      return f;
    },
    map: function (e, h) {
      if ("function" == typeof Array.prototype.map && 0 < Array.prototype.map.toString().indexOf("native")) return e.map(h);
      for (var c = [], g = 0, d = e.length; g < d; g += 1) c[g] = h(e[g], g);
      return c;
    },
    size: function (b) {
      return daum.Array.compact(b).length;
    },
    uniq: function (c) {
      for (var d = [], e = 0, d = [], b = c.length; e < b; e += 1) daum.Array.contains(d, c[e]) || d.push(c[e]);
      return d;
    },
    getFirst: function (b) {
      return b[0];
    },
    getLast: function (b) {
      return b[b.length - 1];
    },
  }),
  daum.extend(daum.Browser, {
    getWindowSize: function () {
      return {
        width: (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 1003) - 2,
        height: (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 650) - 2,
      };
    },
    getScrollOffsets: function () {
      return {
        left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
        top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop,
      };
    },
    setCookie: function (c, e, a) {
      var f = new Date(),
        b = "";
      a && (f.setDate(f.getDate() + a), (b = "expires=" + f.toGMTString() + ";")), (document.cookie = c + "=" + escape(e) + "; path=/;" + b);
    },
    getCookie: function (e) {
      var c = ";" + document.cookie.replace(/ /g, "") + ";",
        b = ";" + e + "=",
        e = c.indexOf(b);
      if (-1 != e) return (b = c.indexOf(";", (e += b.length))), unescape(c.substr(e, b - e));
    },
    delCookie: function (a) {
      document.cookie = a + "=;expires=Fri, 31 Dec 1987 23:59:59 GMT;";
    },
    setOffset: (function () {
      var b = daum.Browser,
        a = 0,
        c = 0;
      b.ie_sv1
        ? ((a = 10), (c = b.infopath ? 58 : 29))
        : b.ie7
        ? ((a = 10), (c = 81))
        : b.etc
        ? ((a = b.mac ? 0 : 6), (c = b.mac ? 68 : 54))
        : b.ff2
        ? ((a = b.mac ? 0 : 6), (c = b.mac ? 18 : b.infopath ? 54 : 49))
        : b.ff3
        ? ((a = b.mac ? 0 : 8), (c = b.mac ? 68 : b.infopath ? 85 : 75))
        : b.sf
        ? ((a = b.mac ? 0 : 4), (c = b.mac ? 23 : 27))
        : b.ns
        ? ((a = b.mac ? 0 : 6), (c = b.mac ? 18 : 54))
        : b.op && ((a = b.mac ? 0 : 9), (c = b.mac ? 36 : 49)),
        (b.offset.width = a),
        (b.offset.height = c);
    })(),
    resizePop: function (c, a) {
      (a = "object" == typeof c ? c.offsetHeight : a), (c = "object" == typeof c ? c.offsetWidth : c);
      window.resizeTo(c + daum.Browser.offset.width, a + daum.Browser.offset.height);
    },
    popup: function (d, b, g, a) {
      var c = { name: "daumPopup", scroll: 0, resize: 0, status: 0 },
        e = function (h) {
          return h && "no" != h ? "yes" : "no";
        };
      return daum.extend(c, a || {}, !0), (g = "width=" + b + ",height=" + g + ",status=" + e(c.status)), (g += ",resizable=" + e(c.resize) + ",scrollbars=" + e(c.scroll)), window.open(d, c.name, g);
    },
  }),
  daum.extend(daum.Function, {
    callBack: function (e) {
      var c,
        a,
        d = e,
        b = daum.$A(arguments);
      return (
        b.shift(),
        (c = b.shift()),
        function () {
          return (b = b.concat(daum.$A(arguments))), (a = d.apply(null, b)), c.apply(null, b), a;
        }
      );
    },
    callFore: function (d) {
      var b,
        c = d,
        a = daum.$A(arguments);
      return (
        a.shift(),
        (b = a.shift()),
        function () {
          return (a = a.concat(daum.$A(arguments))), b(a), c(a);
        }
      );
    },
    inherit: function (e, d, a) {
      var g,
        b = function () {};
      return (
        (b.prototype = d.prototype),
        (e.prototype = new b()),
        ((e.prototype.constructor = e).prototype.parent = (d.prototype.parent || []).concat(d)),
        (e._parent = d),
        (g = e.prototype.parent.length),
        (e.prototype.$super = function () {
          var c = this.constructor.prototype.parent[--g];
          c.apply(this, arguments), (g = 0 == g || -1 == c.toString().indexOf("this.$super(") ? this.constructor.prototype.parent.length : g);
        }),
        a && daum.Function.members(e, a),
        e
      );
    },
    members: function (c, d) {
      var b,
        a = c._parent || c;
      for (b in d)
        c.prototype[b] =
          "function" == typeof d[b]
            ? (a.prototype[b]
                ? function (e, f) {
                    return -1 < f.toString().indexOf("this.$super(")
                      ? function () {
                          return (
                            (this.$prev_super = this.$super),
                            (this.$super = function () {
                              return (this.$super = this.$prev_super), a.prototype[e].apply(this, arguments);
                            }),
                            f.apply(this, arguments)
                          );
                        }
                      : function () {
                          return f.apply(this, arguments);
                        };
                  }
                : function (e, f) {
                    if (-1 < f.toString().indexOf("this.$super(")) throw new Error(e + " function is not defined in " + c);
                    return function () {
                      return f.apply(this, arguments);
                    };
                  })(b, d[b])
            : d[b];
      return c;
    },
    method: function (d, c, a) {
      var e,
        f,
        b = d._parent || d;
      return (
        (d.prototype[c] =
          "function" == typeof a
            ? b.prototype[c]
              ? ((e = c),
                (f = a),
                function () {
                  return (
                    (this.$super = function () {
                      return b.prototype[e].apply(this, arguments);
                    }),
                    f.apply(this, arguments)
                  );
                })
              : (function (f) {
                  return function () {
                    return (
                      (this.$super = function () {
                        return !0;
                      }),
                      f.apply(this, arguments)
                    );
                  };
                })(a)
            : a),
        d
      );
    },
  }),
  (daum.createFunction = function (d, a) {
    for (var c = "return function(", b = 0; b < d.length; b++) c += d[b] + ",";
    return (c = (c = c.replace(/,$/, "")) + "){" + a + "}"), new Function(c)();
  }),
  daum.extend(daum.Fx, {
    running: {},
    parse: function (b, c, a) {
      "opacity" === c && daum.ie ? (b = b === undefined ? 1 : b) : "transparent" === b || b.startsWith("rgba") ? (b = "rgb(255,255,255)") : "auto" === b && (b = daum.String.px(a["scroll" + c.charAt(0).toUpperCase() + c.substr(1)]));
      (a = parseFloat(b)), (b = b.toString().replace(/^\-?[\d\.]+/, ""));
      return {
        value: isNaN(a) ? b : a,
        unit: isNaN(a) ? (b.startsWith("rgb") || b.startsWith("#") ? "color" : "") : b,
      };
    },
    normalize: function (a) {
      var g,
        c,
        b,
        h = {},
        j = "object" == typeof a ? "" : a,
        f = document.createElement("div"),
        e =
          "borderStyle backgroundColor borderBottomColor borderBottomWidth borderLeftColor borderLeftWidth borderRightColor borderRightWidth borderSpacing borderTopColor borderTopWidth bottom color fontSize fontWeight height left letterSpacing lineHeight marginBottom marginLeft marginRight marginTop maxHeight maxWidth minHeight minWidth opacity outlineColor outlineOffset outlineWidth paddingBottom paddingLeft paddingRight paddingTop right textIndent top width wordSpacing zIndex".split(
            " "
          ),
        d = e.length;
      if (((f.innerHTML = '<div style="' + j + '"></div>'), (c = f.childNodes[0]), "" === j)) for (b in a) c.style[b] = a[b].toString();
      for (; d--; ) (g = c.style[e[d]]) && (h[e[d]] = this.parse(g, e[d]));
      return h;
    },
    s: function (b, a, d) {
      return b.substr(a, d || 1);
    },
    stop: function (a, b) {
      clearInterval(this.running[a.id]), delete daum.Fx.running[a.id], b && b(a), (a.id = a.id.toString().startsWith("__t") ? "" : a.id);
    },
    color: function (b, g, k) {
      for (var d, h, f, e = 2, l = [], a = []; (d = 3), (h = arguments[e - 1]), e--; )
        if ("r" === this.s(h, 0)) for (h = h.match(/\d+/g); d--; ) l.push(~~h[d]);
        else for (4 === h.length && (h = "#" + this.s(h, 1) + this.s(h, 1) + this.s(h, 2) + this.s(h, 2) + this.s(h, 3) + this.s(h, 3)); d--; ) l.push(parseInt(this.s(h, 1 + 2 * d, 2), 16));
      for (; d--; ) (f = ~~(l[d + 3] + (l[d] - l[d + 3]) * k)), a.push(f < 0 ? 0 : 255 < f ? 255 : f);
      return "rgb(" + a.join(",") + ")";
    },
    animate: function (g, e, n) {
      var c,
        f = daum.$(g),
        a = n || {},
        j = this.normalize(e),
        h = f.currentStyle || getComputedStyle(f, null),
        i = {},
        d = +new Date(),
        b = (a.duration && a.duration <= 10 ? 1e3 * a.duration : a.duration) || 700,
        l = d + b,
        k =
          a.easing ||
          function (p, o, r, q) {
            return -r * (p /= q) * (p - 2) + o;
          };
      for (c in ((f.id = f.id || "__t" + +new Date() + daum.random(1, 1e4)), daum.ie6 && (f.style.zoom = "1"), this.running[f.id] && (clearInterval(this.running[f.id]), delete daum.Fx.running[f.id]), j)) i[c] = this.parse(h[c], c, f);
      daum.toJSON(i) !== daum.toJSON(j)
        ? ((e = setInterval(
            function () {
              var p = +new Date();
              for (c in j) {
                try {
                  f.style[c] = "color" === j[c].unit ? daum.Fx.color(i[c].value, j[c].value, k(p - d, 0, 1, b)) : k(p - d, i[c].value, j[c].value - i[c].value, b).toFixed(3) + j[c].unit;
                } catch (o) {
                  (f.style[c] = j[c].value), delete j[c];
                }
                "opacity" === c && daum.ie && (f.style.filter = "alpha(opacity=" + 100 * f.style[c] + ")");
              }
              if (l < p) {
                for (c in j) f.style[c] = "color" === j[c].unit ? daum.Fx.color(i[c].value, j[c].value, 1) : j[c].value + j[c].unit;
                this.stop(f, a.callback);
              }
            }.bind(this),
            13
          )),
          (this.running[f.id] = e))
        : this.stop(f, a.callback);
    },
    scrollTo: function (d, a) {
      var d = daum.$E(d),
        a = a || {},
        f = daum.ie ? document.documentElement.scrollTop : window.pageYOffset,
        c = +new Date(),
        h = d.getCoords().top + (a.offset || 0),
        b = a.duration || 700,
        i = c + b,
        g =
          a.easing ||
          function (m, l, o, n) {
            return -o * (m /= n) * (m - 2) + l;
          },
        j = setInterval(function () {
          var l = +new Date();
          window.scrollTo(0, g(l - c, f, h - f, b)), i < l && (window.scrollTo(0, h), clearInterval(j));
        }, 13);
    },
  }),
  daum.extend(daum.Element, {
    setLeft: function (a, c, b) {
      return daum.Element.setStyleProperty(a, "left", c, b);
    },
    setTop: function (a, c, b) {
      return daum.Element.setStyleProperty(a, "top", c, b);
    },
    setWidth: function (b, a, c) {
      return daum.Element.setStyleProperty(b, "width", a, c);
    },
    setHeight: function (b, a, c) {
      return daum.Element.setStyleProperty(b, "height", a, c);
    },
    setPosition: function (a, c, d, b) {
      return daum.Element.setStyleProperty(a, "left", c, b), daum.Element.setStyleProperty(a, "top", d, b);
    },
    setSize: function (c, a, b, d) {
      return daum.Element.setStyleProperty(c, "width", a, d), daum.Element.setStyleProperty(c, "height", b, d);
    },
    setStyleProperty: function (f, a, c, d) {
      (f = daum.$(f)),
        (c = d
          ? isNaN(parseInt(f.style[a]))
            ? parseInt(
                f[
                  "offset" +
                    a.replace(/^(.)/g, function (h, e) {
                      return e.toUpperCase();
                    })
                ]
              ) + c
            : parseInt(f.style[a]) + c
          : c);
      return (f.style[a] = daum.String.px(c)), f;
    },
    setLeftByOffset: function (a, b) {
      return daum.Element.setLeft(a, b, !0);
    },
    setTopByOffset: function (a, b) {
      return daum.Element.setTop(a, b, !0);
    },
    setWidthByOffset: function (a, b) {
      return daum.Element.setWidth(a, b, !0);
    },
    setHeightByOffset: function (a, b) {
      return daum.Element.setHeight(a, b, !0);
    },
    setPositionByOffset: function (b, a, c) {
      return daum.Element.setPosition(b, a, c, !0);
    },
    setSizeByOffset: function (b, a, c) {
      return daum.Element.setSize(b, a, c, !0);
    },
    posHide: function (b) {
      b = daum.$(b);
      return daum.Element.setPosition(b, -1e4, -1e4), b;
    },
    setCssText: daum.Browser.ie
      ? function (b, a) {
          b.style.cssText = a;
        }
      : function (b, a) {
          b.setAttribute("style", a);
        },
    setPngOpacity: daum.Browser.ie6
      ? function (b, c, d) {
          b = daum.$(b);
          (b.style.filter = 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' + c + '", sizingMethod="' + (d || "image") + '")'), "" != b.style.background && (b.style.background = "none"), "img" == b.tagName.toLowerCase() && (b.src = "//i1.daumcdn.net/imap/defaultimg/transparent.gif");
        }
      : function (c, d, a) {
          (a = "scale" == a ? "repeat" : "no-repeat"), (c = daum.$(c));
          "img" != c.tagName.toLowerCase() ? (c.style.background = "url(" + d + ") " + a) : (c.src = d);
        },
    setStyle: function (g, d, b) {
      if (b) return daum.Element.setStyleProperty(g, d, b, !1);
      var f,
        g = daum.$(g),
        a = g.style;
      if (d.length < 1) return g;
      if (daum.Object.isString(d)) a.cssText += ";" + d;
      else if (daum.Object.isObject(d)) for (f in d) a["float" == f || "cssFloat" == f ? (undefined == a.styleFloat ? "cssFloat" : "styleFloat") : f] = d[f];
      return g;
    },
    destroy: function (c) {
      var a = "__daumGB",
        d = daum.$(a),
        c = daum.$(c);
      c.id !== a && (d || ((d = daum.createElement("div", { id: a, style: "display:none;" })), document.body.appendChild(d)), d.appendChild(c), (d.innerHTML = ""));
    },
  }),
  daum.extend(daum.Event, {
    getWheel: function (c) {
      var b = c || window.event,
        c = 0;
      return b.wheelDelta ? (c = b.wheelDelta / 120) : b.detail && (c = -b.detail / 3), c;
    },
    getMouseButton: function (a) {
      a = (a || window.event).button;
      return {
        left: daum.Browser.ie ? 1 === a : 0 === a,
        middle: daum.Browser.ie ? 4 === a : 1 === a,
        right: 2 == a,
      };
    },
    getElement: function (b) {
      b = b || window.event;
      return b.srcElement || b.target;
    },
  }),
  daum.extend(daum.Number, {
    px: function (a) {
      return daum.String.px(a);
    },
    fillZero: function (e, a) {
      var d = a || 0,
        b = e.toString();
      if (d < b.length) return b;
      for (; b.length < d; ) b = "0" + b;
      return b;
    },
    toInt: function (b, a) {
      return daum.String.toInt(b, a);
    },
    toFloat: function (a) {
      return daum.String.toFloat(a);
    },
  }),
  daum.extend(daum.String, {
    empty: function (a) {
      return daum.String.isEmpty(a);
    },
    isEmpty: function (a) {
      return !a || 0 === a.length;
    },
    px: function (b) {
      var a = parseInt(b);
      return isNaN(a) ? b : a + "px";
    },
    removeCR: function (a) {
      return a ? daum.String.replaceAll(a, /\n|\r/, "") : null;
    },
    toInt: function (b, a) {
      return parseInt(b, a || 10);
    },
    toFloat: function (a) {
      return parseFloat(a);
    },
    startWith: function (b, a) {
      return daum.String.startsWith(b, a);
    },
    startsWith: function (b, a) {
      return 0 === b.indexOf(a);
    },
    endWith: function (b, a) {
      return daum.String.endsWith(b, a);
    },
    endsWith: function (b, c) {
      var a;
      return 0 <= (a = b.length - c.length) && b.lastIndexOf(c) === a;
    },
    cutPixel: function (c, f, e) {
      if (!daum.documentLoaded) return !1;
      var g,
        b,
        a = e || "";
      for (document.body.appendChild(daum.HTMLPrototype), daum.HTMLPrototype.innerHTML = a, f -= daum.HTMLPrototype.offsetWidth, daum.HTMLPrototype.innerHTML = "", g = [], b = 0; b < c.length; b += 1) {
        if (((daum.HTMLPrototype.innerHTML += c.charAt(b)), !(f > daum.HTMLPrototype.offsetWidth))) {
          g.push(a);
          break;
        }
        g.push(c.charAt(b));
      }
      return daum.HTMLFragment.appendChild(daum.HTMLPrototype), g.join("");
    },
    escape: function (b, a) {
      return a ? daum.String.escapeHTML(b) : daum.String.unescapeHTML(b);
    },
    escapeHTML: function (a) {
      return a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
    },
    unescapeHTML: function (a) {
      return daum.String.stripTags(a)
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&amp;/g, "&")
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'");
    },
    toHTML: function (a) {
      return daum.String.unescapeHTML(a);
    },
    stripTags: function (a) {
      return a.replace(/<\w+(\s+("[^"]*"|'[^']*'|[^>])+)?>|<\/\w+>/gi, "");
    },
    stripTag: function (a) {
      return daum.String.stripTags(a);
    },
  }),
  (daum.Ajax = function (a) {
    (this.options = {
      url: "",
      method: "get",
      async: !0,
      timeout: 5e3,
      paramString: "",
      encoding: "utf-8",
      onsuccess: function () {},
      onfailure: function () {},
      onloading: function () {},
      ontimeout: function () {},
      onabort: function () {},
      headers: {},
      link: "ignore",
    }),
      daum.extend(this.options, a || {}),
      this.init();
  }),
  (daum.Ajax.prototype = {
    init: function () {
      if (window.XMLHttpRequest) this.XHR = new XMLHttpRequest();
      else if (window.ActiveXObject)
        try {
          this.XHR = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (a) {
          try {
            this.XHR = new ActiveXObject("Microsoft.XMLHTTP");
          } catch (a) {
            this.XHR = null;
          }
        }
      if (!this.XHR) return !1;
      this.running = !1;
    },
    request: function (a, b) {
      if (this.running) {
        if ("cancel" !== this.options.link) return;
        this.abort();
      }
      this.setOptions(b);
      a = a || this.options.url;
      0 < this.options.paramString.length && "get" == this.options.method && (a = a + (0 < a.indexOf("?") ? "&" : "?") + this.options.paramString), this.open(a);
    },
    open: function (b) {
      (this.running = !0), this.options["async"] && (this.XHR.onreadystatechange = daum.Function.bindAsEventListener(this.stateHandle, this)), (this.options.timer = daum.Function.timeout(this.abort, this.options.timeout, this)), this.XHR.open(this.options.method, b, this.options["async"]);
      var a,
        c = this.options.headers;
      for (a in c) this.XHR.setRequestHeader(a, c[a]);
      this.XHR.send(this.options.paramString), this.options["async"] || this.stateHandle();
    },
    abort: function () {
      this.XHR && (this.XHR.abort(), this.callAbort(), (this.running = !1));
    },
    stateHandle: function (a) {
      switch (this.XHR.readyState) {
        case 4:
          window.clearTimeout(this.options.timer), (this.options.timer = null), 200 == this.XHR.status || 304 == this.XHR.status ? this.callSuccess() : 400 <= this.XHR.status && this.callFailure(this.XHR.status), (this.running = !1);
          break;
        case 1:
          this.callLoading();
      }
    },
    callSuccess: function () {
      this.options.onsuccess(this.XHR);
    },
    callFailure: function () {
      this.options.onfailure(this.XHR);
    },
    callLoading: function () {
      this.options.onloading(this.XHR);
    },
    callTimeout: function () {
      this.options.ontimeout(this.XHR);
    },
    callAbort: function () {
      this.options.onabort(this.XHR);
    },
    setOptions: function (a) {
      daum.extend(this.options, a || {}), (this.options.method = this.options.method.toLowerCase()), this.setHeader("charset", this.options.encoding), "post" == this.options.method && this.setHeader("Content-Type", "application/x-www-form-urlencoded");
    },
    setHeader: function (a, b) {
      return "object" == typeof a ? daum.extend(this.options.headers, a || {}, !0) : (this.options.headers[a] = b), this;
    },
    getHeader: function (a) {
      return this.XHR.getResponseHeader(a);
    },
  }),
  (daum.Ajax.xmlToObject = function (a) {
    return daum.xmlToObject(a);
  }),
  (daum.Ajax.jsonToObject = function (a) {
    return daum.jsonToObject(a);
  }),
  (daum.Template = function (a) {
    this.template = a;
  }),
  (daum.Template.prototype = {
    evaluate: function (a) {
      return this.template.replace(/#\{([A-Z_][\dA-Z_]*(?:\.[A-Z_][\dA-Z_]*)*)?\}/gi, function (d, e) {
        for (var b = e ? e.split(".") : "", c = a || ""; b.length; ) if ((c = c[b.shift()]) === undefined || null === c) return "";
        return c;
      });
    },
    toElement: function (a) {
      return daum.createElement(this.evaluate(a));
    },
  }),
  (function () {
    var p = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?/g,
      i = 0,
      d = Object.prototype.toString,
      n = !1,
      b = function (D, t, A, v) {
        A = A || [];
        var e = (t = t || document);
        if (1 !== t.nodeType && 9 !== t.nodeType) return [];
        if (!D || "string" != typeof D) return A;
        var C,
          G,
          s,
          B = [],
          r = !0,
          w = o(t);
        for (p.lastIndex = 0; null !== (C = p.exec(D)); )
          if ((B.push(C[1]), C[2])) {
            s = RegExp.rightContext;
            break;
          }
        if (1 < B.length && j.exec(D))
          if (2 === B.length && f.relative[B[0]]) y = g(B[0] + B[1], t);
          else for (y = f.relative[B[0]] ? [t] : b(B.shift(), t); B.length; ) (D = B.shift()), f.relative[D] && (D += B.shift()), (y = g(D, y));
        else if ((t = !v && 1 < B.length && 9 === t.nodeType && !w && f.match.ID.test(B[0]) && !f.match.ID.test(B[B.length - 1]) ? ((H = b.find(B.shift(), t, w)).expr ? b.filter(H.expr, H.set) : H.set)[0] : t)) {
          var H,
            y = (H = v ? { expr: B.pop(), set: a(v) } : b.find(B.pop(), 1 !== B.length || ("~" !== B[0] && "+" !== B[0]) || !t.parentNode ? t : t.parentNode, w)).expr ? b.filter(H.expr, H.set) : H.set;
          for (0 < B.length ? (G = a(y)) : (r = !1); B.length; ) {
            var u = B.pop(),
              x = u;
            f.relative[u] ? (x = B.pop()) : (u = ""), null == x && (x = t), f.relative[u](G, x, w);
          }
        } else G = B = [];
        if (!(G = G || y)) throw "Syntax error, unrecognized expression: " + (u || D);
        if ("[object Array]" === d.call(G))
          if (r)
            if (t && 1 === t.nodeType) for (var E = 0; null != G[E]; E++) G[E] && (!0 === G[E] || (1 === G[E].nodeType && h(t, G[E]))) && A.push(y[E]);
            else for (E = 0; null != G[E]; E++) G[E] && 1 === G[E].nodeType && A.push(y[E]);
          else A.push.apply(A, G);
        else a(G, A);
        return s && (b(s, e, A, v), b.uniqueSort(A)), A;
      };
    (b.uniqueSort = function (r) {
      if (c && ((n = !1), r.sort(c), n)) for (var e = 1; e < r.length; e++) r[e] === r[e - 1] && r.splice(e--, 1);
      return r;
    }),
      (b.matches = function (e, r) {
        return b(e, null, null, r);
      }),
      (b.find = function (x, e, y) {
        var w;
        if (!x) return [];
        for (var t = 0, s = f.order.length; t < s; t++) {
          var u,
            v = f.order[t];
          if ((u = f.match[v].exec(x))) {
            var r = RegExp.leftContext;
            if ("\\" !== r.substr(r.length - 1) && ((u[1] = (u[1] || "").replace(/\\/g, "")), null != (w = f.find[v](u, e, y)))) {
              x = x.replace(f.match[v], "");
              break;
            }
          }
        }
        return { set: (w = w || e.getElementsByTagName("*")), expr: x };
      }),
      (b.filter = function (A, z, D, t) {
        for (var v, s = A, F = [], x = z, w = z && z[0] && o(z[0]); A && z.length; ) {
          for (var y in f.filter)
            if (null != (v = f.match[y].exec(A))) {
              var C,
                r = f.filter[y],
                e = !1;
              if ((x == F && (F = []), f.preFilter[y]))
                if ((v = f.preFilter[y](v, x, D, F, t, w))) {
                  if (!0 === v) continue;
                } else e = E = !0;
              if (v) for (var E, B, u = 0; null != (C = x[u]); u++) C && ((B = t ^ !!(E = r(C, v, u, x))), D && null != E ? (B ? (e = !0) : (x[u] = !1)) : B && (F.push(C), (e = !0)));
              if (E !== undefined) {
                if ((D || (x = F), (A = A.replace(f.match[y], "")), !e)) return [];
                break;
              }
            }
          if (A == s) {
            if (null == e) throw "Syntax error, unrecognized expression: " + A;
            break;
          }
          s = A;
        }
        return x;
      });
    var l,
      f = (b.selectors = {
        order: ["ID", "NAME", "TAG"],
        match: {
          ID: /#((?:[\w\u00c0-\uFFFF-]|\\.)+)/,
          CLASS: /\.((?:[\w\u00c0-\uFFFF-]|\\.)+)/,
          NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF-]|\\.)+)['"]*\]/,
          ATTR: /\[\s*((?:[\w\u00c0-\uFFFF-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,
          TAG: /^((?:[\w\u00c0-\uFFFF\*-]|\\.)+)/,
          CHILD: /:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,
          POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,
          PSEUDO: /:((?:[\w\u00c0-\uFFFF-]|\\.)+)(?:\((['"]*)((?:\([^\)]+\)|[^\2\(\)]*)+)\2\))?/,
        },
        attrMap: { class: "className", for: "htmlFor" },
        attrHandle: {
          href: function (e) {
            return e.getAttribute("href");
          },
        },
        relative: {
          "+": function (x, e, w) {
            var u = "string" == typeof e,
              y = u && !/\W/.test(e),
              v = u && !y;
            y && !w && (e = e.toUpperCase());
            for (var r, t = 0, s = x.length; t < s; t++)
              if ((r = x[t])) {
                for (; (r = r.previousSibling) && 1 !== r.nodeType; );
                x[t] = v || (r && r.nodeName === e) ? r || !1 : r === e;
              }
            v && b.filter(e, x, !0);
          },
          ">": function (w, r, x) {
            var u = "string" == typeof r;
            if (u && !/\W/.test(r)) {
              r = x ? r : r.toUpperCase();
              for (var t, s = 0, e = w.length; s < e; s++) (v = w[s]) && ((t = v.parentNode), (w[s] = t.nodeName === r && t));
            } else {
              for (var v, s = 0, e = w.length; s < e; s++) (v = w[s]) && (w[s] = u ? v.parentNode : v.parentNode === r);
              u && b.filter(r, w, !0);
            }
          },
          "": function (t, r, v) {
            var u,
              s = i++,
              e = q;
            /\W/.test(r) || ((u = r = v ? r : r.toUpperCase()), (e = m)), e("parentNode", r, s, t, u, v);
          },
          "~": function (t, r, v) {
            var u,
              s = i++,
              e = q;
            "string" != typeof r || /\W/.test(r) || ((u = r = v ? r : r.toUpperCase()), (e = m)), e("previousSibling", r, s, t, u, v);
          },
        },
        find: {
          ID: function (r, e, t) {
            if ("undefined" != typeof e.getElementById && !t) {
              e = e.getElementById(r[1]);
              return e ? [e] : [];
            }
          },
          NAME: function (s, v, w) {
            if ("undefined" != typeof v.getElementsByName) {
              for (var r = [], u = v.getElementsByName(s[1]), t = 0, e = u.length; t < e; t++) u[t].getAttribute("name") === s[1] && r.push(u[t]);
              return 0 === r.length ? null : r;
            }
          },
          TAG: function (e, r) {
            return r.getElementsByTagName(e[1]);
          },
        },
        preFilter: {
          CLASS: function (t, r, s, e, w, x) {
            if (((t = " " + t[1].replace(/\\/g, "") + " "), x)) return t;
            for (var v, u = 0; null != (v = r[u]); u++) v && (w ^ (v.className && 0 <= (" " + v.className + " ").indexOf(t)) ? s || e.push(v) : s && (r[u] = !1));
            return !1;
          },
          ID: function (e) {
            return e[1].replace(/\\/g, "");
          },
          TAG: function (r, e) {
            for (var s = 0; !1 === e[s]; s++);
            return e[s] && o(e[s]) ? r[1] : r[1].toUpperCase();
          },
          CHILD: function (e) {
            var r;
            return "nth" == e[1] && ((r = /(-?)(\d*)n((?:\+|-)?\d*)/.exec(("even" == e[2] ? "2n" : "odd" == e[2] && "2n+1") || (!/\D/.test(e[2]) && "0n+" + e[2]) || e[2])), (e[2] = +(r[1] + (r[2] || 1))), (e[3] = +r[3])), (e[0] = i++), e;
          },
          ATTR: function (u, r, s, e, v, w) {
            var t = u[1].replace(/\\/g, "");
            return !w && f.attrMap[t] && (u[1] = f.attrMap[t]), "~=" === u[2] && (u[4] = " " + u[4] + " "), u;
          },
          PSEUDO: function (u, r, s, e, t) {
            if ("not" === u[1]) {
              if (!(1 < p.exec(u[3]).length || /^\w/.test(u[3]))) {
                t = b.filter(u[3], r, s, !0 ^ t);
                return s || e.push.apply(e, t), !1;
              }
              u[3] = b(u[3], null, null, r);
            } else if (f.match.POS.test(u[0]) || f.match.CHILD.test(u[0])) return !0;
            return u;
          },
          POS: function (e) {
            return e.unshift(!0), e;
          },
        },
        filters: {
          enabled: function (e) {
            return !1 === e.disabled && "hidden" !== e.type;
          },
          disabled: function (e) {
            return !0 === e.disabled;
          },
          checked: function (e) {
            return !0 === e.checked;
          },
          selected: function (e) {
            return e.parentNode.selectedIndex, !0 === e.selected;
          },
          parent: function (e) {
            return !!e.firstChild;
          },
          empty: function (e) {
            return !e.firstChild;
          },
          has: function (s, r, e) {
            return !!b(e[3], s).length;
          },
          header: function (e) {
            return /h\d/i.test(e.nodeName);
          },
          text: function (e) {
            return "text" === e.type;
          },
          radio: function (e) {
            return "radio" === e.type;
          },
          checkbox: function (e) {
            return "checkbox" === e.type;
          },
          file: function (e) {
            return "file" === e.type;
          },
          password: function (e) {
            return "password" === e.type;
          },
          submit: function (e) {
            return "submit" === e.type;
          },
          image: function (e) {
            return "image" === e.type;
          },
          reset: function (e) {
            return "reset" === e.type;
          },
          button: function (e) {
            return "button" === e.type || "BUTTON" === e.nodeName.toUpperCase();
          },
          input: function (e) {
            return /input|select|textarea|button/i.test(e.nodeName);
          },
        },
        setFilters: {
          first: function (r, e) {
            return 0 === e;
          },
          last: function (s, r, e, t) {
            return r === t.length - 1;
          },
          even: function (r, e) {
            return e % 2 == 0;
          },
          odd: function (r, e) {
            return e % 2 == 1;
          },
          lt: function (s, r, e) {
            return r < +e[3];
          },
          gt: function (s, r, e) {
            return r > +e[3];
          },
          nth: function (s, r, e) {
            return +e[3] == r;
          },
          eq: function (s, r, e) {
            return +e[3] == r;
          },
        },
        filter: {
          PSEUDO: function (w, s, t, x) {
            var r = s[1],
              u = f.filters[r];
            if (u) return u(w, t, s, x);
            if ("contains" === r) return 0 <= (w.textContent || w.innerText || "").indexOf(s[3]);
            if ("not" === r) {
              for (var v = s[3], t = 0, e = v.length; t < e; t++) if (v[t] === w) return !1;
              return !0;
            }
          },
          CHILD: function (e, t) {
            var w = t[1],
              r = e;
            switch (w) {
              case "only":
              case "first":
                for (; (r = r.previousSibling); ) if (1 === r.nodeType) return !1;
                if ("first" == w) return !0;
                r = e;
              case "last":
                for (; (r = r.nextSibling); ) if (1 === r.nodeType) return !1;
                return !0;
              case "nth":
                var s = t[2],
                  x = t[3];
                if (1 == s && 0 == x) return !0;
                var v = t[0],
                  y = e.parentNode;
                if (y && (y.sizcache !== v || !e.nodeIndex)) {
                  for (var u = 0, r = y.firstChild; r; r = r.nextSibling) 1 === r.nodeType && (r.nodeIndex = ++u);
                  y.sizcache = v;
                }
                x = e.nodeIndex - x;
                return 0 == s ? 0 == x : x % s == 0 && 0 <= x / s;
            }
          },
          ID: function (r, e) {
            return 1 === r.nodeType && r.getAttribute("id") === e;
          },
          TAG: function (r, e) {
            return ("*" === e && 1 === r.nodeType) || r.nodeName === e;
          },
          CLASS: function (r, e) {
            return -1 < (" " + (r.className || r.getAttribute("class")) + " ").indexOf(e);
          },
          ATTR: function (u, r) {
            var w = r[1],
              e = f.attrHandle[w] ? f.attrHandle[w](u) : null != u[w] ? u[w] : u.getAttribute(w),
              w = e + "",
              u = r[2],
              r = r[4];
            return null == e ? "!=" === u : "=" === u ? w === r : "*=" === u ? 0 <= w.indexOf(r) : "~=" === u ? 0 <= (" " + w + " ").indexOf(r) : r ? ("!=" === u ? w != r : "^=" === u ? 0 === w.indexOf(r) : "$=" === u ? w.substr(w.length - r.length) === r : "|=" === u && (w === r || w.substr(0, r.length + 1) === r + "-")) : w && !1 !== e;
          },
          POS: function (u, r, s, v) {
            var t = r[2],
              t = f.setFilters[t];
            if (t) return t(u, s, r, v);
          },
        },
      }),
      j = f.match.POS;
    for (l in f.match) f.match[l] = new RegExp(f.match[l].source + /(?![^\[]*\])(?![^\(]*\))/.source);
    var c,
      e,
      a = function (r, e) {
        return (r = Array.prototype.slice.call(r, 0)), e ? (e.push.apply(e, r), e) : r;
      };
    try {
      Array.prototype.slice.call(document.documentElement.childNodes, 0);
    } catch (k) {
      a = function (u, t) {
        var r = t || [];
        if ("[object Array]" === d.call(u)) Array.prototype.push.apply(r, u);
        else if ("number" == typeof u.length) for (var s = 0, e = u.length; s < e; s++) r.push(u[s]);
        else for (s = 0; u[s]; s++) r.push(u[s]);
        return r;
      };
    }
    function m(r, w, v, A, x, z) {
      for (var y = "previousSibling" == r && !z, t = 0, s = A.length; t < s; t++)
        if ((e = A[t])) {
          y && 1 === e.nodeType && ((e.sizcache = v), (e.sizset = t));
          for (var e = e[r], u = !1; e; ) {
            if (e.sizcache === v) {
              u = A[e.sizset];
              break;
            }
            if ((1 !== e.nodeType || z || ((e.sizcache = v), (e.sizset = t)), e.nodeName === w)) {
              u = e;
              break;
            }
            e = e[r];
          }
          A[t] = u;
        }
    }
    function q(r, w, v, A, x, z) {
      for (var y = "previousSibling" == r && !z, t = 0, s = A.length; t < s; t++)
        if ((e = A[t])) {
          y && 1 === e.nodeType && ((e.sizcache = v), (e.sizset = t));
          for (var e = e[r], u = !1; e; ) {
            if (e.sizcache === v) {
              u = A[e.sizset];
              break;
            }
            if (1 === e.nodeType)
              if ((z || ((e.sizcache = v), (e.sizset = t)), "string" != typeof w)) {
                if (e === w) {
                  u = !0;
                  break;
                }
              } else if (0 < b.filter(w, [e]).length) {
                u = e;
                break;
              }
            e = e[r];
          }
          A[t] = u;
        }
    }
    document.documentElement.compareDocumentPosition
      ? (c = function (r, s) {
          if (!r.compareDocumentPosition || !s.compareDocumentPosition) return r == s && (n = !0), 0;
          s = 4 & r.compareDocumentPosition(s) ? -1 : r === s ? 0 : 1;
          return 0 == s && (n = !0), s;
        })
      : "sourceIndex" in document.documentElement
      ? (c = function (r, s) {
          if (!r.sourceIndex || !s.sourceIndex) return r == s && (n = !0), 0;
          s = r.sourceIndex - s.sourceIndex;
          return 0 == s && (n = !0), s;
        })
      : document.createRange &&
        (c = function (t, r) {
          if (!t.ownerDocument || !r.ownerDocument) return t == r && (n = !0), 0;
          var u = t.ownerDocument.createRange(),
            e = r.ownerDocument.createRange();
          u.selectNode(t), u.collapse(!0), e.selectNode(r), e.collapse(!0);
          u = u.compareBoundaryPoints(Range.START_TO_END, e);
          return 0 === u && (n = !0), u;
        }),
      (function () {
        var r = document.createElement("div"),
          s = "script" + new Date().getTime();
        r.innerHTML = "<a name='" + s + "'/>";
        var e = document.documentElement;
        e.insertBefore(r, e.firstChild),
          document.getElementById(s) &&
            ((f.find.ID = function (u, t, w) {
              if ("undefined" != typeof t.getElementById && !w) {
                t = t.getElementById(u[1]);
                return t ? (t.id === u[1] || ("undefined" != typeof t.getAttributeNode && t.getAttributeNode("id").nodeValue === u[1]) ? [t] : undefined) : [];
              }
            }),
            (f.filter.ID = function (v, t) {
              var u = "undefined" != typeof v.getAttributeNode && v.getAttributeNode("id");
              return 1 === v.nodeType && u && u.nodeValue === t;
            })),
          e.removeChild(r);
      })(),
      (e = document.createElement("div")).appendChild(document.createComment("")),
      0 < e.getElementsByTagName("*").length &&
        (f.find.TAG = function (r, v) {
          var u = v.getElementsByTagName(r[1]);
          if ("*" === r[1]) {
            for (var t = [], s = 0; u[s]; s++) 1 === u[s].nodeType && t.push(u[s]);
            u = t;
          }
          return u;
        }),
      (e.innerHTML = "<a href='#'></a>"),
      e.firstChild &&
        "undefined" != typeof e.firstChild.getAttribute &&
        "#" !== e.firstChild.getAttribute("href") &&
        (f.attrHandle.href = function (r) {
          return r.getAttribute("href", 2);
        }),
      document.querySelectorAll &&
        (function () {
          var e = b,
            s = document.createElement("div");
          if (((s.innerHTML = "<p class='TEST'></p>"), !s.querySelectorAll || 0 !== s.querySelectorAll(".TEST").length))
            for (var r in ((b = function (w, v, t, u) {
              if (((v = v || document), !u && 9 === v.nodeType && !o(v)))
                try {
                  return a(v.querySelectorAll(w), t);
                } catch (x) {}
              return e(w, v, t, u);
            }),
            e))
              b[r] = e[r];
        })(),
      document.getElementsByClassName &&
        document.documentElement.getElementsByClassName &&
        (function () {
          var e = document.createElement("div");
          (e.innerHTML = "<div class='test e'></div><div class='test'></div>"),
            0 !== e.getElementsByClassName("e").length &&
              ((e.lastChild.className = "e"),
              1 !== e.getElementsByClassName("e").length &&
                (f.order.splice(1, 0, "CLASS"),
                (f.find.CLASS = function (r, s, t) {
                  if ("undefined" != typeof s.getElementsByClassName && !t) return s.getElementsByClassName(r[1]);
                })));
        })();
    var h = document.compareDocumentPosition
        ? function (r, e) {
            return 16 & r.compareDocumentPosition(e);
          }
        : function (r, e) {
            return r !== e && (!r.contains || r.contains(e));
          },
      o = function (e) {
        return (9 === e.nodeType && "HTML" !== e.documentElement.nodeName) || (!!e.ownerDocument && "HTML" !== e.ownerDocument.documentElement.nodeName);
      },
      g = function (e, x) {
        for (var v, t = [], u = "", s = x.nodeType ? [x] : x; (v = f.match.PSEUDO.exec(e)); ) (u += v[0]), (e = e.replace(f.match.PSEUDO, ""));
        e = f.relative[e] ? e + "*" : e;
        for (var w = 0, r = s.length; w < r; w++) b(e, s[w], t);
        return b.filter(u, t);
      };
    window.Sizzle = b;
  })(),
  daum.Browser.webkit || (JSON = undefined),
  this.JSON || (this.JSON = {}),
  (function () {
    function f(n) {
      return n < 10 ? "0" + n : n;
    }
    "function" != typeof Date.prototype.toJSON &&
      ((Date.prototype.toJSON = function (key) {
        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null;
      }),
      (String.prototype.toJSON =
        Number.prototype.toJSON =
        Boolean.prototype.toJSON =
          function (key) {
            return this.valueOf();
          }));
    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
      escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
      gap,
      indent,
      meta = {
        "\b": "\\b",
        "\t": "\\t",
        "\n": "\\n",
        "\f": "\\f",
        "\r": "\\r",
        '"': '\\"',
        "\\": "\\\\",
      },
      rep;
    function quote(string) {
      return (
        (escapable.lastIndex = 0),
        escapable.test(string)
          ? '"' +
            string.replace(escapable, function (a) {
              var c = meta[a];
              return "string" == typeof c ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
            }) +
            '"'
          : '"' + string + '"'
      );
    }
    function str(key, holder) {
      var i,
        k,
        v,
        length,
        partial,
        mind = gap,
        value = holder[key];
      switch ((value && "object" == typeof value && "function" == typeof value.toJSON && (value = value.toJSON(key)), typeof (value = "function" == typeof rep ? rep.call(holder, key, value) : value))) {
        case "string":
          return quote(value);
        case "number":
          return isFinite(value) ? String(value) : "null";
        case "boolean":
        case "null":
          return String(value);
        case "object":
          if (!value) return "null";
          if (((gap += indent), (partial = []), "[object Array]" === Object.prototype.toString.apply(value))) {
            for (length = value.length, i = 0; i < length; i += 1) partial[i] = str(i, value) || "null";
            return (v = 0 === partial.length ? "[]" : gap ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]" : "[" + partial.join(",") + "]"), (gap = mind), v;
          }
          if (rep && "object" == typeof rep) for (length = rep.length, i = 0; i < length; i += 1) "string" == typeof (k = rep[i]) && (v = str(k, value)) && partial.push(quote(k) + (gap ? ": " : ":") + v);
          else for (k in value) Object.hasOwnProperty.call(value, k) && (v = str(k, value)) && partial.push(quote(k) + (gap ? ": " : ":") + v);
          return (v = 0 === partial.length ? "{}" : gap ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}" : "{" + partial.join(",") + "}"), (gap = mind), v;
      }
    }
    "function" != typeof JSON.stringify &&
      (JSON.stringify = function (value, replacer, space) {
        var i;
        if (((indent = gap = ""), "number" == typeof space)) for (i = 0; i < space; i += 1) indent += " ";
        else "string" == typeof space && (indent = space);
        if ((rep = replacer) && "function" != typeof replacer && ("object" != typeof replacer || "number" != typeof replacer.length)) throw new Error("JSON.stringify");
        return str("", { "": value });
      }),
      "function" != typeof JSON.parse &&
        (JSON.parse = function (text, reviver) {
          var j;
          function walk(holder, key) {
            var k,
              v,
              value = holder[key];
            if (value && "object" == typeof value) for (k in value) Object.hasOwnProperty.call(value, k) && ((v = walk(value, k)) !== undefined ? (value[k] = v) : delete value[k]);
            return reviver.call(holder, key, value);
          }
          if (
            ((text = String(text)),
            (cx.lastIndex = 0),
            cx.test(text) &&
              (text = text.replace(cx, function (a) {
                return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
              })),
            /^[\],:{}\s]*$/.test(
              text
                .replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@")
                .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]")
                .replace(/(?:^|:|,)(?:\s*\[)+/g, "")
            ))
          )
            return (j = eval("(" + text + ")")), "function" == typeof reviver ? walk({ "": j }, "") : j;
          throw new SyntaxError("JSON.parse");
        });
  })(),
  window.$ || (window.$ = daum.$),
  window.$A || (window.$A = daum.$A),
  window.$E || (window.$E = daum.$E),
  window.$T || (window.$T = daum.$T),
  window.$C || (window.$C = daum.$C),
  window.Sizzle && (window.$$ = daum.$$ = window.Sizzle),
  daum.extend(daum, daum.Event),
  daum.extend(daum, daum.Browser),
  daum.extend(daum, daum.Element),
  daum.Event.GC != undefined && (window.JiguEventGC = daum.Function.interval(daum.Event.GC, 6e4, daum.Event)),
  daum.Event.addEvent(window, "load", function () {
    daum.documentLoaded = !0;
  }),
  daum.nativeExtend(),
  window.console
    ? window.console.log
      ? window.console.debug ||
        (window.console.debug = function () {
          for (var b = 0, a = arguments.length; b < a; b++) window.console.log(arguments[b]);
        })
      : (window.console.debug = window.console.log = function () {})
    : (window.console = { debug: function () {}, log: function () {} }),
  (daum.Ajax.prototype.callFailure = function () {
    try {
      "object" != typeof this.XHR || (500 != this.XHR.status && 503 != this.XHR.status) || (document.createElement("img").src = "http://group1.magpie.daum.net/magpie/opencounter/Open.do?service=tistory&key=" + this.XHR.status);
    } catch (e) {}
    this.options.onfailure(this.XHR);
  }),
  (function () {
    var T;
    window.T ||
      ((T = window.T =
        {
          cloneObject: function (obj) {
            if (obj && "object" == typeof obj) {
              var p,
                newObj = {};
              for (p in obj) newObj[p] = obj[p];
              return newObj;
            }
          },
          m: {},
          admin: {},
          blog: {},
          ui: {},
          util: {},
        }),
      (window.$T = T.util =
        {
          objectToQueryString: function (obj) {
            var key,
              queryString = [];
            for (key in obj) queryString.push(key + "=" + encodeURIComponent(obj[key]));
            return queryString.join("&");
          },
          formSerialize: function (formId, isHash) {
            var result = {},
              elem = daum.$(formId);
            if (elem) for (var value, elems = elem.elements, i = 0; (elem = elems[i]); i++) !elem.disabled && elem.name && ((value = daum.$F(elem.name)), (value = daum.Object.isArray(value) ? value.join(",") : value), (result[elem.name] = value || ""));
            return !0 !== isHash ? T.util.objectToQueryString(result) : result;
          },
          Cookie: {
            set: function (name, value, time, domain) {
              var date,
                expires = "",
                _domain = "";
              time && ((date = new Date()).setTime(date.getTime() + time), (expires = "; expires=" + date.toGMTString())), domain && (_domain = "domain=" + domain), (document.cookie = name + "=" + value + expires + "; path=/;" + _domain);
            },
            get: function (name) {
              for (var cookies = document.cookie.split(";"), i = cookies.length; i--; )
                if (-1 == cookies[i].indexOf("=")) {
                  if (name == cookies[i]) return !0;
                } else {
                  var crumb = cookies[i].split("=");
                  if (name == crumb[0].trim()) return crumb[1].trim();
                }
            },
            remove: function (name) {
              var date = new Date();
              date.setTime(date.getTime() - 1e3), (document.cookie = name + "=1; expires=" + date.toGMTString() + "; path=/; max-age=0");
            },
          },
          autoResizeHeight: function (fixedWidth, heightOffset) {
            var dl,
              diff,
              pos,
              left,
              top,
              contentScreentHeight,
              contentScreentWidth,
              win = window.top;
            "number" == typeof fixedWidth
              ? ((heightOffset = heightOffset || 0),
                (dl = self.document.documentElement),
                (diff = {}),
                (pos = { x: 0, y: 0 }),
                (left = win.screenLeft || win.screenX),
                (top = win.screenTop || win.screenY),
                win.resizeTo(fixedWidth, 300),
                (contentScreentHeight = dl.clientHeight == dl.scrollHeight && dl.scrollHeight != dl.offsetHeight ? dl.offsetHeight : dl.scrollHeight),
                (contentScreentWidth = dl.clientWidth == dl.scrollWidth && dl.scrollWidth != dl.offsetWidth ? dl.offsetWidth : dl.scrollWidth),
                contentScreentHeight > dl.clientHeight ? (diff.height = contentScreentHeight - dl.clientHeight) : ((diff.width = 8), (diff.height = dl.clientHeight - contentScreentHeight + 35)),
                (pos.y = Math.min(screen.availHeight - contentScreentHeight - top - 50, 0)),
                (pos.x = Math.min(screen.availWidth - contentScreentWidth - left - 30, 0)),
                (pos.x || pos.y) && ($tx.chrome || win.moveBy(pos.x, pos.y), win.resizeTo(fixedWidth, 300)),
                setTimeout(function () {
                  win.resizeBy(0, diff.height + heightOffset);
                }, 20))
              : setTimeout(function () {
                  var obj = (obj = fixedWidth) || document.getElementsByTagName("HTML")[0],
                    gapHeight = document.getElementsByTagName("HTML")[0],
                    gapWidth = gapHeight.clientWidth || gapHeight.scrollWidth,
                    gapHeight = gapHeight.clientHeight || gapHeight.scrollHeight,
                    gapWidth = (obj.offsetWidth || obj.scrollWidth) - gapWidth,
                    gapHeight = (obj.offsetHeight || obj.scrollHeight) - gapHeight;
                  (gapWidth || gapHeight) && win.resizeBy(gapWidth, gapHeight);
                }, 100);
          },
          getDate: function (format, gap) {
            var d = new Date(),
              fullYear = (d = gap ? new Date(d.getTime() + 864e5 * gap) : d).getFullYear(),
              month = d.getMonth() + 1,
              date = d.getDate();
            switch (format) {
              case "fullDate":
                return fullYear + (month < 10 ? "0" + month : month) + date;
              case "fullYear":
                return fullYear;
              case "month":
                return month;
              case "date":
                return date;
            }
          },
          on: function (elem, type, fn) {
            elem.addEventListener
              ? elem.addEventListener(type, fn, !1)
              : elem.attachEvent &&
                elem.attachEvent("on" + type, function () {
                  var event = window.event;
                  event.target || (event.target = event.srcElement || document), fn.call(elem, event);
                });
          },
          data: function (elem, name, data) {
            return data === undefined ? (elem.dataset ? elem.dataset[name] : elem.getAttribute("data-" + name)) : (elem.dataset ? (elem.dataset[name] = data) : elem.setAttribute("data-" + name, data), data);
          },
        }));
  })(),
  (function () {
    function Standardizer() {}
    (Standardizer.prototype.namespace = "Eolin.Application.Framework"),
      (Standardizer.prototype.name = "Eolin Standardizer"),
      (Standardizer.prototype.verion = "1.0"),
      (Standardizer.prototype.copyright = "Copyright &copy; 2005, Tatter & Company. All rights reserved."),
      (Standardizer.prototype.isIE = 0 <= navigator.userAgent.indexOf("MSIE")),
      (Standardizer.prototype.isFirefox = 0 <= navigator.userAgent.indexOf("Firefox")),
      (Standardizer.prototype.isSafari = 0 <= navigator.userAgent.indexOf("Safari")),
      (Standardizer.prototype.isOpera = !Standardizer.prototype.isIE && 0 <= navigator.userAgent.indexOf("Opera")),
      (Standardizer.prototype.isMozilla = !Standardizer.prototype.isIE && !Standardizer.prototype.isFirefox && !Standardizer.prototype.isSafari && !Standardizer.prototype.isOpera && 0 <= navigator.userAgent.indexOf("Mozilla")),
      (Standardizer.prototype.addEventListener = function (object) {
        object.addEventListener ||
          (object.addEventListener = function (type, listener, useCapture) {
            this.attachEvent("on" + type, listener);
          });
      }),
      (Standardizer.prototype.removeEventListener = function (object) {
        object.removeEventListener ||
          (object.removeEventListener = function (type, listener, useCapture) {
            this.detachEvent("on" + type, listener);
          });
      }),
      (Standardizer.prototype.event = function (event) {
        if (window.event) {
          if ((event = window.event).target) return event;
          event.srcElement && (event.target = event.srcElement),
            event.preventDefault == undefined &&
              (event.preventDefault = function () {
                this.returnValue = !1;
              });
        }
        return event;
      }),
      (Standardizer.prototype.getScrollTop = function () {
        return (this.isSafari ? document.body : document.documentElement).scrollTop;
      }),
      (Standardizer.prototype.getScrollLeft = function () {
        return (this.isSafari ? document.body : document.documentElement).scrollLeft;
      }),
      (window.STD = new Standardizer()).addEventListener(window);
  })(),
  (function () {
    function PageMaster() {
      (this._status = null), (this._messages = []), (this._requests = []), (this._holders = []), (this._timer = null), window.addEventListener("load", PageMaster.prototype._onLoad, !1), window.addEventListener("beforeunload", PageMaster.prototype._onBeforeUnload, !1);
    }
    (PageMaster.prototype.namespace = "Eolin.Application.Framework"),
      (PageMaster.prototype.name = "Eolin Page Master"),
      (PageMaster.prototype.verion = "1.0"),
      (PageMaster.prototype.copyright = "Copyright &copy; 2005, Tatter & Company. All rights reserved."),
      (PageMaster.prototype.message = "아직 처리중인 작업이 있습니다."),
      (PageMaster.prototype._onLoad = function (event) {
        (PM._status = document.createElement("div")),
          (PM._status.style.position = "absolute"),
          (PM._status.style.color = "white"),
          (PM._status.style.backgroundColor = "navy"),
          (PM._status.style.margin = "0px"),
          (PM._status.style.paddingLeft = "10px"),
          (PM._status.style.paddingRight = "10px"),
          STD.addEventListener(window),
          window.addEventListener("scroll", PageMaster.prototype._updateStatus, !1),
          window.addEventListener("resize", PageMaster.prototype._updateStatus, !1);
      }),
      (PageMaster.prototype._showStatus = function () {
        PM._status.parentNode != document.body && (document.body.appendChild(this._status), this._updateStatus());
      }),
      (PageMaster.prototype._hideStatus = function () {
        PM._status.parentNode == document.body && document.body.removeChild(PM._status);
      }),
      (PageMaster.prototype._updateStatus = function () {
        PM._status.parentNode == document.body && ((PM._status.style.top = (STD.isSafari ? document.body : document.documentElement).scrollTop + "px"), (PM._status.style.left = (STD.isSafari ? document.body : document.documentElement).scrollLeft + document.documentElement.clientWidth - PM._status.offsetWidth + "px")), PM.updateMessages();
      }),
      (PageMaster.prototype.showMessage = function (message, align, valign, timeout) {
        if ("string" != typeof message || 0 == message.length) return -1;
        align == undefined && (align = "center"), valign == undefined && (valign = "middle"), timeout == undefined && (timeout = 3e3);
        var index = document.createElement("div");
        (index.innerHTML = message), (index.style.position = "absolute"), (index.style.color = "white"), (index.style.backgroundColor = "green"), (index.style.margin = "0px"), (index.style.paddingLeft = "10px"), (index.style.paddingRight = "10px"), (index._align = align), (index._valign = valign), document.body.appendChild(index);
        index = this._messages.push(index) - 1;
        return this.updateMessages(), window.setTimeout("PM._hideMessage(" + index + ")", timeout), index;
      }),
      (PageMaster.prototype._hideMessage = function (index) {
        for (document.body.removeChild(this._messages[index]), this._messages.splice(index, 1, null); 0 < this._messages.length && null == this._messages[this._messages.length - 1]; ) this._messages.pop();
      }),
      (PageMaster.prototype.updateMessages = function () {
        for (var i = 0; i < this._messages.length; i++)
          if (null != this._messages[i]) {
            switch (this._messages[i]._align) {
              case "left":
                this._messages[i].style.left = STD.getScrollLeft() + "px";
                break;
              case "center":
                this._messages[i].style.left = STD.getScrollLeft() + (document.documentElement.clientWidth - this._messages[i].offsetWidth) / 2 + "px";
                break;
              case "right":
                this._messages[i].style.left = STD.getScrollLeft() + document.documentElement.clientWidth - this._messages[i].offsetWidth + "px";
            }
            switch (this._messages[i]._valign) {
              case "top":
                this._messages[i].style.top = STD.getScrollTop() + "px";
                break;
              case "middle":
                this._messages[i].style.top = STD.getScrollTop() + (document.documentElement.clientHeight - this._messages[i].offsetHeight) / 2 + "px";
                break;
              case "bottom":
                this._messages[i].style.top = STD.getScrollTop() + document.documentElement.clientHeight - this._messages[i].offsetHeight + "px";
            }
          }
      }),
      (PageMaster.prototype.addRequest = function (request, message) {
        this._requests.push(new Array(request, message)), this._status && message != undefined && ((this._status.innerHTML += message), this._showStatus());
      }),
      (PageMaster.prototype.removeRequest = function (request) {
        for (var i = 0; i < this._requests.length; i++)
          if (this._requests[i][0] == request) {
            this._requests.splice(i, 1);
            break;
          }
        for (var message = "", i = 0; i < this._requests.length; i++) this._requests[i][1] != undefined && (message += this._requests[i][1]);
        this._status && (0 == (this._status.innerHTML = message).length ? this._hideStatus() : this._updateStatus());
      }),
      (PageMaster.prototype.addHolder = function (holder) {
        this._holders.push(holder);
      }),
      (PageMaster.prototype.removeHolder = function (holder) {
        for (var i = 0; i < this._holders.length; i++) if (this._holders[i] == holder) return void this._holders.splice(i, 1);
      }),
      (PageMaster.prototype.showPanel = function (panel, halign, valign) {
        try {
          if ("object" != typeof (panel = "string" == typeof panel ? document.getElementById(panel) : panel)) return;
          var clientHeight = (STD.isOpera ? document.body : document.documentElement).clientHeight;
          switch (((panel.style.position = "absolute"), (panel.style.display = "block"), halign)) {
            case "left":
              panel.style.left = STD.getScrollLeft() + "px";
              break;
            default:
            case "center":
              panel.style.left = STD.getScrollLeft() + (document.documentElement.clientWidth - panel.offsetWidth) / 2 + "px";
              break;
            case "right":
              panel.style.left = STD.getScrollLeft() + document.documentElement.clientWidth - panel.offsetWidth + "px";
          }
          switch (valign) {
            case "top":
              panel.style.top = STD.getScrollTop() + "px";
              break;
            default:
            case "middle":
              panel.style.top = STD.getScrollTop() + (clientHeight - panel.offsetHeight) / 2 + "px";
              break;
            case "bottom":
              panel.style.top = STD.getScrollTop() + clientHeight - panel.offsetHeight + "px";
          }
        } catch (e) {}
      }),
      (PageMaster.prototype._onBeforeUnload = function (event) {
        if (((event = STD.event(event)), 0 < PM._requests.length)) event.returnValue = PM.message;
        else for (var i = 0; i < PM._holders.length; i++) if (PM._holders[i].isHolding()) return void (event.returnValue = PM._holders[i].message);
      });
    var PM = (window.PM = new PageMaster());
  })(),
  (HTTPRequest.prototype.namespace = "Eolin.Application.Framework"),
  (HTTPRequest.prototype.name = "Eolin HTTPXMLRequest Processor"),
  (HTTPRequest.prototype.verion = "1.0"),
  (HTTPRequest.prototype.copyright = "Copyright &copy; 2005, Tatter & Company. All rights reserved."),
  (HTTPRequest.prototype.method = "GET"),
  (HTTPRequest.prototype.url = null),
  (HTTPRequest.prototype.contentType = "application/x-www-form-urlencoded"),
  (HTTPRequest.prototype.content = ""),
  (HTTPRequest.prototype["async"] = !0),
  (HTTPRequest.prototype.cache = !1),
  (HTTPRequest.prototype.persistent = !0),
  (HTTPRequest.prototype.message = "Requesting..."),
  (HTTPRequest.prototype.onVerify = function () {
    return 0 == this.getText("/response/error");
  }),
  (HTTPRequest.prototype.onExecute = function () {}),
  (HTTPRequest.prototype.onSuccess = function () {}),
  (HTTPRequest.prototype.onError = function () {}),
  (HTTPRequest.prototype.presetProperty = function (object, property, success, error) {
    (error == undefined && success == (error = object[property])) || ((object[property] = success) != error && this._properties.push(new Array(object, property, error)));
  }),
  (HTTPRequest.prototype.presetAttribute = function (object, attribute, success, error) {
    (error == undefined && success == (error = object.getAttribute(attribute))) || (object.setAttribute(attribute, success), success != error && this._attributes.push(new Array(object, attribute, error)));
  }),
  (HTTPRequest.prototype.send = function () {
    if ("JSON" === this.method) {
      PM.jsonpNumber = PM.jsonpNumber || new Date().getTime();
      var jsonp = "jsonp" + PM.jsonpNumber++;
      this.url = this.url.split("=?").join("=" + jsonp);
      var callbackRequest = this;
      window[jsonp] =
        window[jsonp] ||
        function (data) {
          (callbackRequest.jsonData = data), (window[jsonp] = undefined);
          try {
            delete window[jsonp];
          } catch (e) {}
        };
      var head = document.getElementsByTagName("head")[0] || document.documentElement,
        script = document.createElement("script");
      (script.type = "text/javascript"), (script.charset = this.charset || "utf-8"), (script.src = this.url), (script.instance = this);
      var done = !1;
      return (
        (script.onload = script.onreadystatechange =
          function () {
            done || (this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState) || ((done = !0), this.instance.onSuccess(), (script.onload = script.onreadystatechange = null), head && script.parentNode && head.removeChild(script));
          }),
        (script.onerror = function () {
          try {
            "object" != typeof this.instance || "object" != typeof this.instance._request || (500 != this.instance._request.status && 503 != this.instance._request.status) || (document.createElement("img").src = "http://group1.magpie.daum.net/magpie/opencounter/Open.do?service=tistory&key=" + this.instance._request.status);
          } catch (e) {}
          this.instance.onError(), (script.onerror = null), head && script.parentNode && head.removeChild(script);
        }),
        head.insertBefore(script, head.firstChild),
        undefined
      );
    }
    var instance;
    if (
      (this.persistent && PM.addRequest(this),
      this["async"] &&
        ((instance = this)._request.onreadystatechange = function () {
          if (4 == instance._request.readyState)
            if ((instance.persistent && PM.removeRequest(instance), instance.onVerify())) instance.onSuccess();
            else {
              for (var i = 0; i < instance._properties.length; i++) instance._properties[i][0][instance._properties[i][1]] = instance._properties[i][2];
              for (i = 0; i < instance._attributes.length; i++) instance._attributes[i][0].setAttribute(instance._attributes[i][1], instance._attributes[i][2]);
              try {
                "object" != typeof instance || "object" != typeof instance._request || (500 != instance._request.status && 503 != instance._request.status) || (document.createElement("img").src = "http://group1.magpie.daum.net/magpie/opencounter/Open.do?service=tistory&key=" + instance._request.status);
              } catch (e) {}
              instance.onError();
            }
        }),
      this.cache ? this._request.open(this.method, this.url, this["async"]) : 0 <= this.url.lastIndexOf("?") ? this._request.open(this.method, this.url + "&__T__=" + new Date().getTime(), this["async"]) : this._request.open(this.method, this.url + "?__T__=" + new Date().getTime(), this["async"]),
      STD.isFirefox && this._request.setRequestHeader("Referer", location.href),
      0 < arguments.length && (this.content = arguments[0]),
      0 < this.content.length && this._request.setRequestHeader("Content-Type", this.contentType),
      this._request.send(this.content),
      !this["async"])
    )
      if ((this.persistent && PM.removeRequest(this), this.onVerify())) this.onSuccess();
      else {
        for (var i = 0; i < this._properties.length; i++) this._properties[i][0][this._properties[i][1]] = this._properties[i][2];
        for (i = 0; i < this._attributes.length; i++) this._attributes[i][0].setAttribute(this._attributes[i][1], this._attributes[i][2]);
        this.onError();
      }
  }),
  (HTTPRequest.prototype.getText = function (path) {
    try {
      if (path == undefined) return this._request.responseText;
      var directives = path.split("/");
      if ("" != directives[0]) return null;
      var cursor = this._request.responseXML.documentElement;
      if (cursor.nodeName != directives[1]) return null;
      for (var i = 2; i < directives.length; i++) {
        for (var j = 0; j < cursor.childNodes.length; j++)
          if (cursor.childNodes[j].nodeName == directives[i]) {
            (cursor = cursor.childNodes[j]), (j = -1);
            break;
          }
        if (-1 != j) return null;
      }
      return cursor.text ? cursor.text : this._getText(cursor);
    } catch (e) {
      return null;
    }
  }),
  (HTTPRequest.prototype._getText = function (node) {
    var text = "";
    node.nodeValue && (text += node.nodeValue);
    for (var i = 0; i < node.childNodes.length; i++) text += this._getText(node.childNodes[i]);
    return text;
  });
var sUserAgent = navigator.userAgent,
  fAppVersion = parseFloat(navigator.appVersion),
  daumMusicPlayerList = [];
function compareVersions(sVersion1, sVersion2) {
  var aVersion1 = sVersion1.split("."),
    aVersion2 = sVersion2.split(".");
  if (aVersion1.length > aVersion2.length) for (var i = 0; i < aVersion1.length - aVersion2.length; i++) aVersion2.push("0");
  else if (aVersion1.length < aVersion2.length) for (i = 0; i < aVersion2.length - aVersion1.length; i++) aVersion1.push("0");
  for (i = 0; i < aVersion1.length; i++) {
    if (aVersion1[i] < aVersion2[i]) return -1;
    if (aVersion1[i] > aVersion2[i]) return 1;
  }
  return 0;
}
var isOpera = -1 < sUserAgent.indexOf("Opera"),
  isMinOpera4 = !1,
  isMinOpera5 = !1,
  isMinOpera6 = !1,
  isMinOpera7 = !1,
  isMinOpera7_5 = !1,
  fOperaVersion,
  reOperaVersion,
  fOperaVersion,
  isMinOpera4,
  isMinOpera5,
  isMinOpera6,
  isMinOpera7,
  isMinOpera7_5;
isOpera && ((fOperaVersion = "Opera" == navigator.appName ? fAppVersion : ((reOperaVersion = new RegExp("Opera (\\d+\\.\\d+)")), reOperaVersion.test(sUserAgent), parseFloat(RegExp.$1))), (isMinOpera4 = 4 <= fOperaVersion), (isMinOpera5 = 5 <= fOperaVersion), (isMinOpera6 = 6 <= fOperaVersion), (isMinOpera7 = 7 <= fOperaVersion), (isMinOpera7_5 = 7.5 <= fOperaVersion));
var isKHTML = -1 < sUserAgent.indexOf("KHTML") || -1 < sUserAgent.indexOf("Konqueror") || -1 < sUserAgent.indexOf("AppleWebKit"),
  isMinSafari1 = !1,
  isMinSafari1_2 = !1,
  isMinKonq2_2 = !1,
  isMinKonq3 = !1,
  isMinKonq3_1 = !1,
  isMinKonq3_2 = !1,
  isSafari = !1,
  isKonq = !1,
  reAppleWebKit,
  fAppleWebKitVersion,
  isMinSafari1,
  isMinSafari1_2,
  reKonq,
  isSafari,
  isKonq;
isKHTML &&
  ((isSafari = -1 < sUserAgent.indexOf("AppleWebKit")),
  (isKonq = -1 < sUserAgent.indexOf("Konqueror")),
  isSafari
    ? ((reAppleWebKit = new RegExp("AppleWebKit\\/(\\d+(?:\\.\\d*)?)")), reAppleWebKit.test(sUserAgent), (fAppleWebKitVersion = parseFloat(RegExp.$1)), (isMinSafari1 = 85 <= fAppleWebKitVersion), (isMinSafari1_2 = 124 <= fAppleWebKitVersion))
    : isKonq && ((reKonq = new RegExp("Konqueror\\/(\\d+(?:\\.\\d+(?:\\.\\d)?)?)")), reKonq.test(sUserAgent), (isMinKonq2_2 = 0 <= compareVersions(RegExp.$1, "2.2")), (isMinKonq3 = 0 <= compareVersions(RegExp.$1, "3.0")), (isMinKonq3_1 = 0 <= compareVersions(RegExp.$1, "3.1")), (isMinKonq3_2 = 0 <= compareVersions(RegExp.$1, "3.2"))));
var isIE = -1 < sUserAgent.indexOf("compatible") && -1 < sUserAgent.indexOf("MSIE") && !isOpera,
  isMinIE4 = !1,
  isMinIE5 = !1,
  isMinIE5_5 = !1,
  isMinIE6 = !1,
  reIE,
  fIEVersion,
  isMinIE4,
  isMinIE5,
  isMinIE5_5,
  isMinIE6;
isIE && ((reIE = new RegExp("MSIE (\\d+\\.\\d+);")), reIE.test(sUserAgent), (fIEVersion = parseFloat(RegExp.$1)), (isMinIE4 = 4 <= fIEVersion), (isMinIE5 = 5 <= fIEVersion), (isMinIE5_5 = 5.5 <= fIEVersion), (isMinIE6 = 6 <= fIEVersion));
var isMoz = -1 < sUserAgent.indexOf("Gecko") && !isKHTML,
  isMinMoz1 = !1,
  isMinMoz1_4 = !1,
  isMinMoz1_5 = !1,
  reMoz;
isMoz && ((reMoz = new RegExp("rv:(\\d+\\.\\d+(?:\\.\\d+)?)")), reMoz.test(sUserAgent), (isMinMoz1 = 0 <= compareVersions(RegExp.$1, "1.0")), (isMinMoz1_4 = 0 <= compareVersions(RegExp.$1, "1.4")), (isMinMoz1_5 = 0 <= compareVersions(RegExp.$1, "1.5")));
var isNS4 = !isIE && !isOpera && !isMoz && !isKHTML && 0 == sUserAgent.indexOf("Mozilla") && "Netscape" == navigator.appName && 4 <= fAppVersion && fAppVersion < 5,
  isMinNS4 = !1,
  isMinNS4_5 = !1,
  isMinNS4_7 = !1,
  isMinNS4_8 = !1;
isNS4 && ((isMinNS4 = !0), (isMinNS4_5 = 4.5 <= fAppVersion), (isMinNS4_7 = 4.7 <= fAppVersion), (isMinNS4_8 = 4.8 <= fAppVersion));
var isWin = "Win32" == navigator.platform || "Windows" == navigator.platform,
  isMac = "Mac68K" == navigator.platform || "MacPPC" == navigator.platform || "Macintosh" == navigator.platform,
  isUnix = "X11" == navigator.platform && !isWin && !isMac,
  isWin95 = !1,
  isWin98 = !1,
  isWinNT4 = !1,
  isWin2K = !1,
  isWinME = !1,
  isWinXP = !1,
  isMac68K = !1,
  isMacPPC = !1,
  isSunOS = !1,
  isMinSunOS4 = !1,
  isMinSunOS5 = !1,
  isMinSunOS5_5 = !1,
  reSunOS,
  isSunOS;
function analysis(msg, mode) {
  try {
    if (mode == undefined) {
      var temp = '<table border="1"  cellspacing="0">';
      for (name in msg) (temp += "<tr>"), (temp += "<td>" + name + "</td><td>"), (temp += msg[name]), (temp += "</td>"), (temp += "</tr>");
      return (temp += "</table>");
    }
    mode = "a";
    var name,
      temp = "";
    for (name in msg) temp += name + "\t\t:" + msg[name] + "\n";
    return temp;
  } catch (e) {}
}
function trace(traceWin, mode) {
  (result = analysis(traceWin, mode)), mode == undefined ? ((traceWin = window.open("", "traceWin")).focus(), (traceWin.document.body.innerHTML = result)) : "w" == mode && alert(result);
}
function openLinkInNewWindow(url) {
  if (url) {
    url = url.getAttribute("href");
    if (url) return window.open(url), !1;
  }
  return !0;
}
function toggleLayer(id) {
  try {
    var obj = document.getElementById(id);
    obj.style.display = "none" == obj.style.display ? "block" : "none";
  } catch (e) {}
  return !0;
}
function showLayer(id) {
  return (document.getElementById(id).style.display = "block"), !0;
}
function tt_showLayer(id) {
  return (document.getElementById(id).style.display = "block"), !0;
}
function tt_hideLayer(id) {
  return (document.getElementById(id).style.display = "none"), !0;
}
function hideLayer(id) {
  return (document.getElementById(id).style.display = "none"), !0;
}
function findFormObject(caller) {
  for (var obj = caller; obj; obj = obj.parentNode) if ("FORM" == obj.nodeName) return obj;
  return null;
}
function trim(str) {
  for (var start = 0, end = str.length, i = 0; i < str.length; i++)
    if (" " != str.charAt(i)) {
      start = i;
      break;
    }
  for (i = str.length - 1; -1 <= i; i--)
    if (" " != str.charAt(i)) {
      end = i + 1;
      break;
    }
  return str.substring(start, end);
}
function checkValue(oField, message) {
  try {
    return 0 == oField.value.length ? (alert(message), oField.focus(), !1) : !0;
  } catch (e) {
    return !1;
  }
}
function trimAll(oForm) {
  try {
    for (var i = 0; i < oForm.elements.length; i++) oForm.elements[i].tagName.toLowerCase(), oForm.elements[i].type;
    return !0;
  } catch (e) {
    alert(e.message);
  }
}
function openKeyword(url) {
  window.open(url, "keyword", "width=570,height=650,location=0,menubar=0,resizable=1,scrollbars=1,status=0,toolbar=0");
}
isWin &&
  ((isWin95 = -1 < sUserAgent.indexOf("Win95") || -1 < sUserAgent.indexOf("Windows 95")),
  (isWin98 = -1 < sUserAgent.indexOf("Win98") || -1 < sUserAgent.indexOf("Windows 98")),
  (isWinME = -1 < sUserAgent.indexOf("Win 9x 4.90") || -1 < sUserAgent.indexOf("Windows ME")),
  (isWin2K = -1 < sUserAgent.indexOf("Windows NT 5.0") || -1 < sUserAgent.indexOf("Windows 2000")),
  (isWinXP = -1 < sUserAgent.indexOf("Windows NT 5.1") || -1 < sUserAgent.indexOf("Windows XP")),
  (isWinNT4 = -1 < sUserAgent.indexOf("WinNT") || -1 < sUserAgent.indexOf("Windows NT") || -1 < sUserAgent.indexOf("WinNT4.0") || (-1 < sUserAgent.indexOf("Windows NT 4.0") && !isWinME && !isWin2K && !isWinXP))),
  isMac && ((isMac68K = -1 < sUserAgent.indexOf("Mac_68000") || -1 < sUserAgent.indexOf("68K")), (isMacPPC = -1 < sUserAgent.indexOf("Mac_PowerPC") || -1 < sUserAgent.indexOf("PPC"))),
  isUnix && ((isSunOS = -1 < sUserAgent.indexOf("SunOS")), isSunOS && ((reSunOS = new RegExp("SunOS (\\d+\\.\\d+(?:\\.\\d+)?)")), reSunOS.test(sUserAgent), (isMinSunOS4 = 0 <= compareVersions(RegExp.$1, "4.0")), (isMinSunOS5 = 0 <= compareVersions(RegExp.$1, "5.0")), (isMinSunOS5_5 = 0 <= compareVersions(RegExp.$1, "5.5"))));
var oProgress = null;
function beginProgress() {
  endProgress(), ((oProgress = document.createElement("span")).style.position = "absolute"), (oProgress.style.left = "0px"), (oProgress.style.top = "0px"), (oProgress.style.backgroundColor = "#FFFF99"), (oProgress.innerText = "???.."), document.body.appendChild(oProgress);
}
function endProgress() {
  oProgress && (document.body.removeChild(oProgress), (oProgress = null));
}
function createHttp() {
  try {
    return new XMLHttpRequest();
  } catch (e) {
    for (var objectNames = ["MSXML2.XMLHTTP.5.0", "MSXML2.XMLHTTP.4.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], i = 0; i < objectNames.length; i++)
      try {
        return new ActiveXObject(objectNames[i]);
      } catch (e) {}
    return null;
  }
}
isMoz &&
  ((XMLDocument.prototype.selectNodes = function (path) {
    for (var oResult = new XPathEvaluator().evaluate(path, this, null, XPathResult.ORDERER_NODE_ITERATOR_TYPE, null), result = new Array(), oElement = oResult.iterateNext(); oElement; ) (result[oElement.nodeName] = oElement.firstChild.nodeValue), (oElement = oResult.iterateNext());
    return result;
  }),
  (XMLDocument.prototype.selectSingleNode = function (path) {
    return new XPathEvaluator().evaluate(path, this, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  }),
  Node.prototype.__defineGetter__("xml", function () {
    return new XMLSerializer().serializeToString(this, "text/xml");
  }));
var loading = !1;
function getResponse(uri, content) {
  try {
    loading = !0;
    document.body;
    var iframeElement = createHttp();
    if (((aux = -1 == uri.indexOf("?") ? "?" : "&"), iframeElement.open("POST", uri + aux + "time=" + new Date().getTime(), !1), content == undefined ? (content = "") : iframeElement.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), iframeElement.send(content), (result = new Array()), isSafari || isOpera)) {
      resultNodes = iframeElement.responseXML.firstChild.childNodes;
      for (var i = 0; i < resultNodes.length; i++) null != resultNodes.item(i).firstChild && (result[resultNodes.item(i).nodeName] = resultNodes.item(i).firstChild.nodeValue);
      return (loading = !1), result;
    }
    if (isIE) {
      (resultNodes = iframeElement.responseXML.documentElement.childNodes), (result = new Array());
      for (i = 0; i < resultNodes.length; i++) result[resultNodes[i].nodeName] = resultNodes[i].text;
      return (loading = !1), result;
    }
    return (loading = !1), iframeElement.responseXML.selectNodes("/response/descendant::*");
  } catch (e) {
    alert("exception"), (loading = !1);
    document.getElementsByName("body");
    iframeElement = document.createElement("div");
    return document.body.appendChild(iframeElement), (iframeElement.innerHTML = '<iframe src="' + uri + '"style="display:none" onload="location.href=location.href"></iframe>'), !1;
  }
}
function requestHttp(uri) {
  try {
    var oHttp = createHttp();
    return oHttp.open("GET", uri + "&time=" + new Date().getTime(), !1), oHttp.send(""), isSafari || isOpera ? oHttp.responseXML.firstChild.firstChild.nextSibling.firstChild.nodeValue : oHttp.responseXML.selectSingleNode("/response/error").text;
  } catch (e) {
    window.status = e.messge;
  }
}
function requestHttpText(uri) {
  var oHttp = createHttp();
  return oHttp.open("GET", uri + "&time=" + new Date().getTime(), !1), oHttp.send(""), oHttp.responseText;
}
function requestHttpXml(uri) {
  var oHttp = createHttp();
  return oHttp.open("GET", uri + "&time=" + new Date().getTime(), !1), oHttp.send(""), oHttp.responseXML;
}
function requestPost(uri, content) {
  var oHttp = createHttp();
  return oHttp.open("POST", uri + "&time=" + new Date().getTime(), !1), oHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), oHttp.send(content + "&time=" + new Date().getTime()), oHttp.responseXML.selectSingleNode("/response/error").text;
}
function requestPostText(uri, content) {
  var oHttp = createHttp();
  return oHttp.open("POST", uri + "&time=" + new Date().getTime(), !1), oHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), oHttp.send(content), oHttp.responseText;
}
function setRequestBody(elementName, elementValue, boundary) {
  var body = "";
  return (body += "--" + boundary + "\r\n"), (body += 'Content-Disposition: form-data; name="' + elementName + '"\r\n\r\n'), (body += elementValue + "\r\n");
}
function isNull(field, message) {
  return 0 == field.value.length && (alert(message + "\t"), field.focus(), !0);
}
var tatterImagePopup = null;
function open_img(url) {
  try {
    var left = Math.floor((screen.availWidth - 250) / 2),
      top = Math.floor((screen.availHeight - 100) / 2);
    try {
      tatterImagePopup.close();
    } catch (e) {}
    (tatterImagePopup = window.open("", "", "width=250, height=100, left=" + left + ", top=" + top + ", scrollbars=no, resizable=yes")).document.open("text/html", "replace"),
      (tatterImagePopup.document.location = "#"),
      tatterImagePopup.document.write(
        '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">\r\n<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ko">\r\n\t<head>\r\n\t\t<meta http-equiv="content-type" content="text/html; charset=utf-8"/>\r\n\t\t<title> :: View :: </title>\r\n\t\t<style type="text/css">\r\n\t\t\thtml, body { width: 100%; height: 100%; margin: 0; padding: 0; cursor: pointer; text-align: center; line-height: 0; }\r\n\t\t\tdiv { width: 100%; height: 100%; overflow: auto; }\r\n\t\t</style>\r\n\t\t<script type="text/javascript">\r\n' +
          (-1 < navigator.userAgent.indexOf("Safari") ? "\t\t\tfunction resizeImage() {\r\n" : "\t\t\twindow.onload = function() {\r\n") +
          '\t\t\t\tvar container = document.getElementById("Container");\r\n\t\t\t\tvar image = document.getElementById("Image");\r\n\t\t\t\tvar resizeWidth = 0, resizeHeight = 0, positionTop = 0, positionLeft = 0;\r\n\t\t\t\tvar offsetTop = window.screenTop || window.screenY;\r\n\t\t\t\tvar offsetLeft = window.screenLeft || window.screenX;\r\n\t\t\t\tif(navigator.userAgent.indexOf("Safari") > -1) {\r\n\t\t\t\t\tvar width = Math.min(image.width + 50, screen.availWidth - 100);\r\n\t\t\t\t\tvar height = Math.min(image.height + 50, screen.availHeight - 100);\r\n\t\t\t\t\twindow.moveTo((screen.availWidth - width) / 2, (screen.availHeight - height) / 2);\r\n\t\t\t\t\twindow.resizeTo(width, height);\r\n\t\t\t\t\treturn;\r\n\t\t\t\t}\r\n\t\t\t\tif(container.scrollWidth > container.offsetWidth) {\r\n\t\t\t\t\tresizeWidth += container.scrollWidth - container.offsetWidth;\r\n\t\t\t\t\tif(container.offsetWidth + resizeWidth + 100 > screen.availWidth) {\r\n\t\t\t\t\t\tresizeWidth = screen.availWidth - container.offsetWidth - 100;\r\n\t\t\t\t\t\tpositionLeft = -resizeWidth / 2;\r\n\t\t\t\t\t\tresizeHeight += 20;\r\n\t\t\t\t\t}\r\n\t\t\t\t\telse {\r\n\t\t\t\t\t\tpositionLeft = -resizeWidth / 2;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t\tif(container.scrollHeight > container.offsetHeight) {\r\n\t\t\t\t\tresizeHeight += container.scrollHeight - container.offsetHeight;\r\n\t\t\t\t\tif(container.offsetHeight + resizeHeight + 100 > screen.availHeight - 50) {\r\n\t\t\t\t\t\tresizeHeight = screen.availHeight - container.offsetHeight - 100 - 40;\r\n\t\t\t\t\t\tpositionTop = -resizeHeight / 2;\r\n\t\t\t\t\t\tresizeWidth += 20;\r\n\t\t\t\t\t}\r\n\t\t\t\t\telse {\r\n\t\t\t\t\t\tpositionTop = -resizeHeight / 2;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t\tif(resizeWidth == 0 && resizeHeight == 0)\r\n\t\t\t\t\timage.style.marginTop = ((container.offsetHeight - image.height) / 2) + "px";\r\n\t\t\t\twindow.moveBy(positionLeft, positionTop - 35);\r\n\t\t\t\twindow.resizeBy(resizeWidth, resizeHeight);\r\n\t\t\t}\r\n\t\t</script>\r\n\t</head>\r\n\t<body>\r\n' +
          (-1 < navigator.userAgent.indexOf("Safari") ? '\t\t<div id="Container"><img id="Image" src="' + url + '" alt="" onclick="window.close();" onload="resizeImage();"/></div>\r\n' : '\t\t<div id="Container"><img id="Image" src="' + url + '" onclick="window.close();" alt=""/></div>\r\n') +
          "\t</body>\r\n</html>"
      ),
      tatterImagePopup.document.close(),
      tatterImagePopup.document.focus && tatterImagePopup.document.focus();
  } catch (e) {
    window.open(url, "_blank");
  }
}
function enlargeImagzing(params) {
  var win = window.open("", "img_popup", "width=" + (screen.width - (STD.isIE ? 10 : 0)) + ",height=" + (screen.availHeight - (STD.isIE ? 40 : 0)) + ",left=0,top=0,scrollbars=no,resizable=yes");
  win.status = params.caption;
  var form = document.createElement("form");
  (form.action = params.action),
    (form.target = "img_popup"),
    (form.method = "post"),
    (form.innerHTML =
      '\t\t<input type="hidden" name="d" value="' +
      params.id +
      '"/>\t\t<input type="hidden" name="f" value="' +
      params.frame +
      '"/>\t\t<input type="hidden" name="t" value="' +
      params.transition +
      '"/>\t\t<input type="hidden" name="n" value="' +
      params.navigation +
      '"/>\t\t<input type="hidden" name="si" value="' +
      params.slideshowInterval +
      '"/>\t\t<input type="hidden" name="p" value="' +
      params.page +
      '"/>\t\t<input type="hidden" name="a" value="' +
      params.align +
      '"/>\t\t<input type="hidden" name="i" value="' +
      decodeURIComponent(params.images) +
      '"/>\t\t<input type="hidden" name="owner" value="' +
      params.owner +
      '"/>\t\t<input type="hidden" name="caption" value="' +
      params.caption +
      '"/>\t\t<input type="hidden" name="root" value="' +
      params.root +
      '"/>\t'),
    document.body.appendChild(form),
    form.submit();
  try {
    win.focus();
  } catch (e) {}
}
function scroller(target, acceleration) {
  try {
    var target = document.getElementById(target),
      dest = document.body.scrollTop;
    (status = target.scrollTop + "  " + document.body.scrollTop + "  " + acceleration + " = " + (target.offsetTop - document.body.scrollTop) / acceleration), (dest += (target.offsetTop - document.body.scrollTop) / acceleration), document.body.scrollTop == dest && clearInterval(scrollerId), window.scroll(0, dest);
  } catch (e) {
    clearInterval(scrollerId), alert(e.message);
  }
}
function eleganceScroll(target, acceleration) {
  acceleration == undefined && (acceleration = 8), (scrollerId = window.setInterval("scroller('" + target + "'," + acceleration + ")", 1e3 / 30));
}
function showJukeboxList(id, height) {
  (target = document.getElementById("jukeBoxContainer" + id)), (divTarget = document.getElementById("jukeBox" + id + "Div")), (flashTarget = document.getElementById("jukeBox" + id + "Flash")), (target.style.height = flashTarget.style.height = divTarget.style.height = height + "px");
}
function getWindowCleintHeight() {
  return null != window.innerHeight ? window.innerHeight : document.documentElement.clientHeight;
}
function getWindowCleintWidth() {
  return null != window.innerWidth ? window.innerWidth : document.documentElement.clientWidth;
}
function getOffsetTop(obj) {
  return obj ? obj.offsetTop + getOffsetTop(obj.offsetParent) : 0;
}
function getOffsetLeft(obj) {
  return obj ? obj.offsetLeft + getOffsetLeft(obj.offsetParent) : 0;
}
function updateFeed() {
  var http = createHttp();
  http && (http.open("GET", blogURL + "/feeder?" + new Date().getTime(), !0), http.send(""));
}
function searchChildNodes(obj, tagName) {
  var nodes = new Array();
  if (obj.hasChildNodes())
    for (var i = 0; i < obj.childNodes.length; i++) {
      var node = obj.childNodes[i];
      if (1 == node.nodeType) {
        node.tagName.toUpperCase() == tagName.toUpperCase() && (nodes[nodes.length] = node);
        for (var childNodes = searchChildNodes(node, tagName), j = 0; j < childNodes.length; j++) nodes[nodes.length] = childNodes[j];
      }
    }
  return nodes;
}
function getEmbedCode(movie, width, height, id, bg, FlashVars, menu, transparent, quality, bgcolor, allowScriptAccess, version) {
  try {
    if (movie == undefined || width == undefined || height == undefined) return !1;
    var _FlashVars_object, _FlashVars_embed, _menu_object, _menu_embed, _transparent_object, _transparent_embed, _quality_object, _quality_embed, _bgcolor_object, _bgcolor_embed;
    (_FlashVars_embed = FlashVars == undefined ? (_FlashVars_object = "") : ((_FlashVars_object = '<param name="FlashVars" value="' + FlashVars + '" />'), ' FlashVars="' + FlashVars + '" ')),
      (_menu_embed = menu == undefined ? (_menu_object = "") : ((_menu_object = '<param name="menu" value="' + menu + '" />'), ' menu="' + menu + '" ')),
      (_transparent_embed = transparent == undefined ? (_transparent_object = "") : ((_transparent_object = '<param name="wmode" value="' + transparent + '" />'), ' wmode="' + transparent + '" ')),
      (_quality_embed = quality == undefined ? (_quality_object = "") : ((_quality_object = '<param name="quality" value="' + quality + '" />'), ' quality="' + quality + '" ')),
      (_bgcolor_embed = bgcolor == undefined ? (_bgcolor_object = "") : ((_bgcolor_object = '<param name="bgcolor" value="' + bgcolor + '" />'), ' bgcolor="' + bgcolor + '" '));
    var _id;
    return (
      (_id = id == undefined ? "" : 'id="' + id + '"'),
      version == undefined && (version = "7,0,0,0"),
      STD.isIE
        ? '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=' +
          version +
          '" width="' +
          width +
          '" height="' +
          height +
          '" ' +
          _id +
          ' align="middle"><param name="movie" value="' +
          movie +
          '" /><param name="allowScriptAccess" value="always" />' +
          _FlashVars_object +
          _menu_object +
          _quality_object +
          _bgcolor_object +
          _transparent_object +
          "</object>"
        : "<embed " + _id + ' type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" src="' + movie + '" width="' + width + '" height="' + height + '" allowScriptAccess="always" ' + _FlashVars_embed + _menu_embed + _quality_embed + _bgcolor_embed + _transparent_embed + "/>"
    );
  } catch (e) {
    return !1;
  }
}
function writeCode(str, id) {
  id == undefined ? document.write(str) : (document.getElementById(id).innerHTML = str);
}
function writeCode2(str, id) {
  id == undefined ? document.write(str) : (document.getElementById(id).innerHTML = str);
}
var StringBuffer = function () {
  this.buffer = new Array();
};
function getTagChunks(string, tagName, callback) {
  var pos1,
    chunks = new Array();
  for (pos2 = 0; -1 < (pos1 = string.indexOfCaseInsensitive(new RegExp("<" + tagName + "\\s", "i"), pos2)); ) {
    var chunk = "";
    do {
      if (-1 == (pos2 = string.indexOfCaseInsensitive(new RegExp("</" + tagName, "i"), Math.max(pos1, pos2)))) return chunks;
    } while (((pos2 += tagName.length + 3), "" != (chunk = string.substring(pos1, pos2)) && chunk.count(new RegExp("<" + tagName + "\\s", "gi")) != chunk.count(new RegExp("</" + tagName, "gi"))));
    "function" == typeof callback && (chunk = callback(chunk)), (chunks[chunks.length] = chunk);
  }
  return chunks;
}
function getParentByTagName(tag, obj) {
  for (; obj.tagName != tag.toUpperCase(); ) obj = obj.parentNode;
  return obj;
}
function removeItselfById(id) {
  document.getElementById(id).parentNode.removeChild(document.getElementById(id));
}
function getSelectedRadio(buttonGroup) {
  if (buttonGroup[0]) {
    for (var i = 0; i < buttonGroup.length; i++) if (buttonGroup[i].checked) return i;
  } else if (buttonGroup.checked) return 0;
  return -1;
}
function getSelectedRadioValue(buttonGroup) {
  var i = getSelectedRadio(buttonGroup);
  return -1 == i ? "" : (buttonGroup[i] || buttonGroup).value;
}
function showMessage(str) {
  PM.showMessage("" + str, "right", "bottom");
}
function preventEnter(event, onEnter) {
  if (13 != (event = event || window.event).keyCode) return !0;
  (event.returnValue = !1), (event.cancelBubble = !0);
  try {
    event.preventDefault();
  } catch (e) {}
  return "function" == typeof onEnter && onEnter(), !1;
}
function thisMovie(movieName) {
  return (-1 != navigator.appName.indexOf("Microsoft") ? window : document)[movieName];
}
function onClipBoard(result) {
  alert(result ? "엮인글 주소가 복사되었습니다" : "엮인글 주소를 복사하지 못했습니다");
}
function gotoURL(url, target) {
  url && window.open(url, target);
}
function isColorRGB(string) {
  return 3 == string.length ? 0 <= string.search(/[0-9abcdef]{3}/i) : 6 == string.length && 0 <= string.search(/[0-9abcdef]{6}/i);
}
function isNumber(string, minValue, maxValue) {
  return !(string.search(/^(0|-?[1-9][0-9]{0,9})$/) < 0) && (null == maxValue && (maxValue = 2147483646), null == minValue && (minValue = -2147483647), !(parseInt(string) < minValue || parseInt(string) > maxValue));
}
(StringBuffer.prototype.append = function (str) {
  this.buffer[this.buffer.length] = str;
}),
  (StringBuffer.prototype.toString = function () {
    return this.buffer.join("");
  }),
  Array.prototype.push ||
    (Array.prototype.push = function () {
      for (var startLength = this.length, i = 0; i < arguments.length; i++) this[startLength + i] = arguments[i];
      return this.length;
    }),
  String.prototype.trim ||
    (String.prototype.trim = function () {
      return this.replace(new RegExp("(^\\s*)|(\\s*$)", "g"), "");
    }),
  String.prototype.replaceAll ||
    (String.prototype.replaceAll = function (source, target) {
      return (source = source.replace(new RegExp("(\\W)", "g"), "\\$1")), (target = target.replace(new RegExp("\\$", "g"), "$$$$")), this.replace(new RegExp(source, "gm"), target);
    }),
  String.prototype.count ||
    (String.prototype.count = function (matches) {
      return (matches = "string" == typeof matches ? this.match(new RegExp(matches.replace(new RegExp("(\\W)", "g"), "\\$1"), "g")) : this.match(matches)) ? matches.length : 0;
    }),
  String.prototype.indexOfCaseInsensitive ||
    (String.prototype.indexOfCaseInsensitive = function (search, from) {
      var result = void 0 === from ? this : this.substring(from, this.length),
        result = ("string" == typeof search ? new RegExp(search.replace(new RegExp("(\\W)", "g"), "\\$1"), "i") : search).exec(result);
      return result ? result.index + ("number" == typeof from ? from : 0) : -1;
    }),
  (function ($) {
    $(function () {
      var $btnMore = $(".btn_more"),
        $btnLess = $(".btn_less");
      $btnMore.on("click", function (e) {
        var $btn = $(this),
          $content = $btn.data("id"),
          $content = $("#content" + $content);
        $btn.hide(), $content.show();
      }),
        $btnLess.on("click", function (e) {
          var $content = $(this).data("id"),
            $btnMore = $("#more" + $content),
            $content = $("#content" + $content);
          $btnMore.show(), $content.hide();
        });
    });
  })(tjQuery);
var tistoryFootnote = {
  notes: {},
  add: function (entryId, noteId, content) {
    this.notes[entryId + "_" + noteId] = content;
  },
  show: function (anchor, entryId, noteId) {
    var layer = document.createElement("div");
    (layer.id = "tistoryFootnoteLayer_" + entryId + "_" + noteId),
      (layer.style.font = "11px/1 Dotum, Sans-serif"),
      (layer.style.width = "304px"),
      (layer.style.position = "absolute"),
      (layer.style.left = getOffsetLeft(anchor) - 86 + "px"),
      (layer.style.top = "0px"),
      (layer.style.zIndex = "810302"),
      new RegExp("MSIE [1-6]\\.").test(navigator.userAgent)
        ? (layer.innerHTML =
            "<div style=\"height: 6px; overflow: hidden; filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='//i1.daumcdn.net/cfs.tistory/static/admin/editor/footnotes_01.png', sizingMethod='crop')\"></div><div style=\"width: 304px; padding: 6px 0; filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='//i1.daumcdn.net/cfs.tistory/static/admin/editor/footnotes_02.png', sizingMethod='scale')\"><div style=\"padding-bottom: 6px; border-bottom: 1px solid #f2f1be; font-weight: bold; margin: 0 15px 9px 15px\">각주 " +
            noteId +
            '</div><div style="margin: 0 15px; line-height: 1.5">' +
            this.notes[entryId + "_" + noteId] +
            "</div></div><div style=\"height: 15px; overflow: hidden; filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='//t1.daumcdn.net/tistory_admin/static/admin/editor/footnotes_03.png', sizingMethod='crop')\"></div>")
        : (layer.innerHTML =
            '<div style="height: 6px; overflow: hidden; background-image: url(//t1.daumcdn.net/tistory_admin/static/admin/editor/footnotes_01.png)"></div><div style="width: 304; padding: 6px 0; background-image: url(//t1.daumcdn.net/tistory_admin/static/admin/editor/footnotes_02.png)"><div style="padding-bottom: 6px; border-bottom: 1px solid #f2f1be; font-weight: bold; margin: 0 15px 9px 15px">각주 ' +
            noteId +
            '</div><div style="margin: 0 15px; line-height: 1.5; overflow: hidden">' +
            this.notes[entryId + "_" + noteId] +
            '</div></div><div style="height: 15px; overflow: hidden; background-image: url(//t1.daumcdn.net/tistory_admin/static/admin/editor/footnotes_03.png)"></div>'),
      document.body.appendChild(layer),
      (layer.style.top = getOffsetTop(anchor) - layer.offsetHeight + "px");
  },
  hide: function (entryId, layer) {
    layer = document.getElementById("tistoryFootnoteLayer_" + entryId + "_" + layer);
    layer.parentNode.removeChild(layer);
  },
};
!(function ($) {
  var tistoryCcl_height = { 1: 72, 2: 48, 3: 24, 4: 48, 5: 72, 6: 48 };
  $(function () {
    var $layer,
      target,
      etcLayer =
        (($layer = $("#tistoryEtcLayer")),
        (target = null),
        $(document.body).on("click", hide),
        $(window).on("resize", position),
        1 == $(".bodyInside").length && "absolute" == $(".bodyInside").css("position") && "scroll" == $(".bodyInside").css("overflowY") && $(".bodyInside").on("scroll", position),
        {
          $layer: $layer,
          show: function (toChangeVisibilityText) {
            toChangeVisibilityText.preventDefault();
            var categoryVisibility,
              changeVisibilityButtonHtml,
              toChangeVisibility = $(toChangeVisibilityText.target),
              entryId = toChangeVisibility.parents(".wrap_btn_etc").data("entryId");
            toChangeVisibility.hasClass("ico_etc") && (toChangeVisibility = toChangeVisibility.parent()),
              (target = toChangeVisibility[0]),
              $layer.empty(),
              toChangeVisibility.hasClass("btn_etc1")
                ? ((changeVisibilityButtonHtml = toChangeVisibility.parents(".wrap_btn_etc").data("entryVisibility")),
                  (categoryVisibility = toChangeVisibility.parents(".wrap_btn_etc").data("categoryVisibility")),
                  (toChangeVisibility = toChangeVisibilityText = ""),
                  "public" === changeVisibilityButtonHtml ? ((toChangeVisibilityText = "비공개로 전환"), (toChangeVisibility = "private")) : "private" === changeVisibilityButtonHtml && ((toChangeVisibilityText = "공개로 전환"), (toChangeVisibility = "public")),
                  $layer.append(
                    $(
                      '<div class="bundle_post"><button type="button" class="btn_mark" role="modify">수정</button><button type="button" class="btn_mark" role="delete">삭제</button>' +
                        (changeVisibilityButtonHtml =
                          (changeVisibilityButtonHtml = "") != toChangeVisibilityText
                            ? "public" == categoryVisibility
                              ? '<button type="button" class="btn_mark" role="' + toChangeVisibility + '">' + toChangeVisibilityText + "</button>"
                              : '<button type="button" class="btn_mark" role="' + toChangeVisibility + '" style="opacity:0.3" disabled>' + toChangeVisibilityText + "</button>"
                            : changeVisibilityButtonHtml) +
                        '<span class="ico_postbtn ico_arrbt"></span></div>'
                    )
                  ))
                : $layer.append($('<div class="bundle_post"><button type="button" class="btn_mark" role="report">신고하기</button><span class="ico_postbtn ico_arrbt"></span></div>')),
              position(),
              $layer.data("entryId", entryId),
              $layer.show();
          },
          hide: hide,
        });
    function position() {
      var gap;
      null != target &&
        ((gap = $(target).hasClass("btn_etc1") ? 120 : 60),
        $layer.css({
          left: $(target).offset().left + target.clientWidth - 29 + "px",
          top: $(target).offset().top - gap + "px",
        }));
    }
    function hide(e) {
      $(e.target).hasClass("btn_mark") || $(e.target).hasClass("btn_etc1") || $(e.target).hasClass("btn_etc2") || $(e.target).hasClass("ico_etc") || ((target = null), $layer.hide());
    }
    var tistorySns = (function () {
      var $layerBody,
        $layer = $("#tistorySnsLayer"),
        target = null;
      function position() {
        null != target &&
          $layer.css({
            left: $(target).offset().left - 3 + "px",
            top: $(target).offset().top - $layer.height() - 30 + "px",
          });
      }
      function hide(e) {
        $(e.target).hasClass("btn_mark") || $(e.target).hasClass("ico_sns") || $(e.target).hasClass("btn_share") || $(e.target).hasClass("ico_share") || ((target = null), $layer.hide());
      }
      return (
        1 == $layer.length &&
          (($layerBody = navigator.userAgent.match(/ipad|ipod|iphone/i) ? "" : '<a href="#none" class="btn_mark" data-service="url"><span class="ico_sns ico_url"></span>URL 복사</a>'),
          ($layerBody = $(
            '<div class="bundle_post"><a href="#none" class="btn_mark" data-service="facebook"><span class="ico_sns ico_fb"></span>페이스북으로 공유</a><a href="#none" class="btn_mark" data-service="kakaotalk"><span class="ico_sns ico_kt"></span>카카오톡으로 공유</a><a href="#none" class="btn_mark" data-service="kakaostory"><span class="ico_sns ico_ks"></span>카카오스토리로 공유</a>' +
              (".daum.net" == window.location.hostname.substr(-9) ? "" : '<a href="#none" class="btn_mark" data-service="twitter"><span class="ico_sns ico_tw"></span>트위터로 공유</a>') +
              $layerBody +
              '<span class="ico_postbtn ico_arrbt"></span></div>'
          )),
          $layer.append($layerBody)),
        $(document.body).on("click", hide),
        $(window).on("resize", position),
        1 == $(".bodyInside").length && "absolute" == $(".bodyInside").css("position") && "scroll" == $(".bodyInside").css("overflowY") && $(".bodyInside").on("scroll", position),
        {
          $layer: $layer,
          show: function ($target) {
            $target.preventDefault();
            var $this = $(this);
            ($target = $($target.target)).hasClass("ico_share") && ($target = $target.parent()),
              (target = $target[0]),
              $layer.data("thumbnail-url", $this.data("thumbnail-url")),
              $layer.data("title", $this.data("title")),
              $layer.data("description", $this.data("description")),
              $layer.data("profile-image", $this.data("profile-image")),
              $layer.data("profile-name", $this.data("profile-name")),
              $layer.data("pc-url", $this.data("pc-url")),
              $layer.data("relative-pc-url", $this.data("relative-pc-url")),
              $layer.data("blog-title", $this.data("blog-title")),
              position(),
              $layer.show();
          },
          hide: hide,
        }
      );
    })();
    try {
      isDaumblogDomain() ? Kakao.init("d0aa8b850efdc64970656aa1390790b3") : Kakao.init("b8aef3eeb03fa312b81795386484f051");
    } catch (e) {}
    var SOCIAL_SHARE = {
      kakaostory: {
        url: "https://story.kakao.com/share",
        width: 640,
        height: 400,
        makeShareUrl: function (url) {
          return this.url + "?url=" + encodeURIComponent(url);
        },
      },
      facebook: {
        url: "https://www.facebook.com/sharer/sharer.php",
        width: 640,
        height: 400,
        makeShareUrl: function (url) {
          return this.url + "?display=popup&u=" + encodeURIComponent(url);
        },
      },
      twitter: {
        url: "https://twitter.com/intent/tweet",
        width: 640,
        height: 400,
        makeShareUrl: function (url) {
          return this.url + "?text=" + encodeURIComponent(tistorySns.$layer.data("title")) + "&url=" + encodeURIComponent(url);
        },
      },
    };
    $("#tistorySnsLayer").on("click", ".bundle_post a", function (url) {
      url.preventDefault();
      var templateArgs = $(this),
        area = SOCIAL_SHARE[templateArgs.data("service")],
        url = tistorySns.$layer.data("pc-url");
      area
        ? window.open(area.makeShareUrl(url), "", "width=" + area.width + ", height=" + area.height)
        : "url" == templateArgs.data("service")
        ? (window.clipboardData ? window.clipboardData.setData("Text", url) : ((area = $("<textarea readonly='true'></textarea>")).val(url), $("body").append(area), area[0].select(), document.execCommand("copy"), area.remove()), showTooltip("URL이 복사되었습니다."))
        : "kakaotalk" == templateArgs.data("service") &&
          (null != (templateArgs = tistorySns.$layer.data("relative-pc-url")) && "/" === templateArgs.substr(0, 1) && (templateArgs = templateArgs.substr(1, templateArgs.length)),
          (templateArgs = {
            TITLE: tistorySns.$layer.data("title"),
            DESCRIPTION: tistorySns.$layer.data("description"),
            PROFILE_IMAGE: tistorySns.$layer.data("profile-image"),
            PROFILE_NAME: tistorySns.$layer.data("profile-name"),
            BUTTON1_PC_URL: tistorySns.$layer.data("pc-url"),
            BUTTON1_MO_URL: tistorySns.$layer.data("pc-url"),
            BUTTON1_RELATIVE_PC_URL: templateArgs,
            BUTTON1_TITLE: tistorySns.$layer.data("blog-title") + "에서 읽기",
          }),
          "https://t1.daumcdn.net/tistory_admin/static/images/openGraph/opengraph.png" != tistorySns.$layer.data("thumbnail-url") && "https://img.daumcdn.net/daumblog_admin/static/top/images/openGraph/opengraph.png" != tistorySns.$layer.data("thumbnail-url")
            ? ((templateArgs.IMAGE1_URL = tistorySns.$layer.data("thumbnail-url")),
              Kakao.Link.sendCustom({
                templateId: isDaumblogDomain() ? 19296 : 7461,
                templateArgs: templateArgs,
              }))
            : Kakao.Link.sendCustom({
                templateId: isDaumblogDomain() ? 19298 : 7469,
                templateArgs: templateArgs,
              }));
    }),
      $("#tistoryEtcLayer").on("click", ".bundle_post button", function (e) {
        var entryId = $(this),
          role = entryId.attr("role"),
          entryId = entryId.parents(".layer_post").data("entryId");
        "modify" == role
          ? (location.href = addUriPrefix("/manage/post/" + entryId + "?returnURL=" + location.href))
          : "delete" == role
          ? deleteEntry(entryId)
          : "private" == role
          ? changeVisibility(entryId, 0)
          : "public" == role
          ? changeVisibility(entryId, 20)
          : "report" == role && window.open(window.TistoryBlog.tistoryUrl + "/toolbar/popup/abuseReport/?entryId=" + entryId, "ThisBlogReportPopup", "width=550, height=510, toolbar=no, menubar=no, status=no, scrollbars=no");
      }),
      $(".sns_btn").on("click", tistorySns.show),
      $(".ico_statistics")
        .parent()
        .on("click", function (entryId) {
          entryId.preventDefault();
          entryId = $(this).data("entryId");
          window.open(addUriPrefix("/manage/statistics/entry/" + entryId));
        }),
      $(".btn_subscription").on("click", function (device) {
        device.preventDefault();
        var blogId = $(this).data("blogId"),
          url = $(this).data("url"),
          device = $(this).data("device");
        $(this).data("doing") || ($(this).data("doing", !0), ($(this).hasClass("following") ? unfollowBlog : followBlog)(blogId, $(this), url, device));
      }),
      $(".ico_etc").parent().on("click", etcLayer.show),
      $(".postbtn_ccl")
        .mouseover(function () {
          var layer = document.createElement("div"),
            type = this.dataset.cclType;
          (layer.id = "tistoryCclLayer"), layer.classList.add("layer_ccl"), (layer.style.display = "block"), (layer.style.position = "absolute"), (layer.style.left = $(this).offset().left - 100 + this.clientWidth + "px"), (layer.style.top = $(this).offset().top - 28 - tistoryCcl_height[$(this).data("cclType")] + "px"), (layer.style.zIndex = "810302");
          var cclLayerInnerHtml = '<span class="txt_mark"><span class="ico_postbtn ico_ccl1"></span>저작자표시</span>';
          ("6" != type && "1" != type && "5" != type) || (cclLayerInnerHtml += '<span class="txt_mark"><span class="ico_postbtn ico_ccl2"></span>비영리</span>'),
            ("1" != type && "2" != type) || (cclLayerInnerHtml += '<span class="txt_mark"><span class="ico_postbtn ico_ccl3"></span>변경금지</span>'),
            ("4" != type && "5" != type) || (cclLayerInnerHtml += '<span class="txt_mark"><span class="ico_postbtn ico_ccl4"></span>동일조건</span>'),
            (layer.innerHTML = '<div class="bundle_ccl">' + cclLayerInnerHtml + '<span class="ico_postbtn ico_arrbt"></span></div>'),
            document.body.appendChild(layer);
        })
        .mouseout(function () {
          var layer = document.getElementById("tistoryCclLayer");
          layer.parentNode.removeChild(layer);
        });
  });
})(tjQuery);
var clickAreaCheck = !1;
document.onclick = function () {
  clickAreaCheck ? (clickAreaCheck = !1) : divDisplay(old_div, "none");
};
var old_div = "";
function divDisplay(objId, act, check) {
  (clickAreaCheck = !0), "" != old_div && document.getElementById(old_div) && (document.getElementById(old_div).style.display = "none"), "" != objId && document.getElementById(objId) && (document.getElementById(objId).style.display = act), 1 == check && (old_div = objId);
}
var checkCharLength = {
  config: {
    curValue: "",
    limitLength: 0,
    formId: "",
    outTextId: "",
    timer: null,
  },
  init: function (limit_length, fId, txtId, isBgImg) {
    (this.config.limitLength = limit_length), (this.config.formId = fId), (this.config.outTextId = txtId), this.start();
  },
  clearTimer: function () {
    null != this.config.timer && "undefined" != this.config.timer && (clearTimeout(this.config.timer), (this.config.timer = null));
  },
  start: function () {
    try {
      var comment = document.getElementById(this.config.formId),
        length = calculate_msglen(comment.value);
      this.config.curValue != comment.value &&
        ((this.config.curValue = comment.value),
        (document.getElementById(this.config.outTextId).innerHTML = length) > this.config.limitLength && (alert("최대 " + this.config.limitLength + "byte이므로 초과된 글자수는 자동으로 삭제됩니다."), (comment.value = comment.value.replace(/\r\n$/, "")), (comment.value = assert_msglen(comment.value, this.config.limitLength, this.config.outTextId))),
        (this.config.timer = setTimeout("checkCharLength.start()", 10)));
    } catch (e) {}
  },
};
function calculate_msglen(message) {
  for (var nbytes = 0, i = 0; i < message.length; i++) {
    var ch = message.charAt(i);
    4 < escape(ch).length ? (nbytes += 2) : "\n" == ch ? "\r" != message.charAt(i - 1) && (nbytes += 1) : (nbytes += "<" == ch || ">" == ch ? 4 : 1);
  }
  return nbytes;
}
function assert_msglen(message, maximum, textlimit) {
  for (var inc = 0, nbytes = 0, msg = "", msglen = message.length, i = 0; i < msglen; i++) {
    var ch = message.charAt(i);
    if ((4 < escape(ch).length ? (inc = 2) : "\n" == ch ? "\r" != message.charAt(i - 1) && (inc = 1) : (inc = "<" == ch || ">" == ch ? 4 : 1), maximum < nbytes + inc)) break;
    (nbytes += inc), (msg += ch);
  }
  return (document.getElementById(textlimit).innerHTML = nbytes), msg;
}
function playerControl(id, action) {
  if (action && "add" == action) daumMusicPlayerList.push(id);
  else for (var pidA = daumMusicPlayerList, i = 0, l = pidA.length; i < l; i++) id != pidA[i] && document.getElementById(pidA[i]).passiveMusic();
}
function setCookie(name, value, days, domain) {
  var date,
    expires = "",
    _domain = "";
  days && ((date = new Date()).setTime(date.getTime() + 864e5 * days), (expires = "; expires=" + date.toGMTString())), domain && (_domain = "domain=" + domain), (document.cookie = name + "=" + value + expires + "; path=/;" + _domain);
}
function goMobilePage(url, domain) {
  "tistory.com" == (domain = domain || "") || /^.*\.tistory.com$/i.test(domain) ? (setCookie("M_P2M", "Y", "", domain), setCookie("M_P2M", "Y", "", "tistory.com")) : setCookie("M_P2M", "Y", "", window.location.hostname), (window.location.href = url);
}
function moveCategoryPaging(action, category) {
  setCookie("categoryNo", category), (location.href = action);
}
function getCookie(name) {
  for (var cookies = document.cookie.split(";"), i = 0; i < cookies.length; i++)
    if (-1 == cookies[i].indexOf("=")) {
      if (name == cookies[i]) return "";
    } else {
      var crumb = cookies[i].split("=");
      if (name == crumb[0].trim()) return unescape(crumb[1].trim());
    }
}
function deleteCookie(name) {
  document.cookie = name + "=" + getCookie(name) + "; expires=Fri, 31 Dec 1999 23:59:59 GMT";
}
function checkTistoryDomain(domain) {
  return !!/^.*\.tistory.com$/i.test(domain);
}
var captchaPlugin = {
  init: function (type) {
    (this.commentCaptchaEvent = "commentCaptchaEvent"), (this.captchaDate = "captchaDate"), "complete" !== type && this.getSkinColor(), this.removeCaptcha("tt_captChaBox"), this.addCommentEvent();
  },
  addCommentEvent: function () {
    var commentArea = document.getElementsByName("comment");
    if (0 < commentArea.length) {
      this.type = commentCaptchaType;
      for (var i = commentArea.length; i--; )
        commentArea[i][this.commentCaptchaEvent] ||
          ("bottom" == commentCaptchaType ? ($T.on(commentArea[i], "fucus", this.openCaptchaBottom.bind(this)), $T.on(commentArea[i], "click", this.openCaptchaBottom.bind(this))) : ($T.on(commentArea[i], "focus", this.openCaptchaBox.bind(this)), $T.on(commentArea[i], "click", this.openCaptchaBox.bind(this))), (commentArea[i][this.commentCaptchaEvent] = !0));
    }
  },
  openCaptchaBottom: function (captchaBox) {
    var date,
      pos,
      captchaObj,
      target = captchaBox.target;
    this.removeCaptcha("tt_captChaBottom", target),
      document.getElementById("tt_captChaBottom") ||
        ((captchaObj = target.parentNode),
        (pos = target.nextSibling),
        (date = new Date().getTime()),
        ((captchaBox = document.createElement("div")).innerHTML =
          '<div id="tt_captChaBottom" style="color:' +
          this.skinColor +
          ';"><div class="wrap_box_border" style="border:1px solid ' +
          this.skinColor +
          ';"><div class="wrap_box_bg" style="background-color:' +
          this.skinColor +
          ';"></div></div><div id="innerBox" class="inner_captcha_box"><img id="imageCaptcha" src="/plugin/Captcha?width=198&height=50&__T__=' +
          date +
          '" width="198" height="50" alt="그림문자" /><div class="wrap_captcha_inner"><input type="text" id="inputCaptcha" autocomplete="off" name="captcha" value=""></input><div id="btnRefresh" class="btn_refresh" style="border:1px solid ' +
          this.skinColor +
          ';"><div class="wrap_btn_bg" style="background-color:' +
          this.skinColor +
          ';"></div></div><p id="textRefresh" style="top:6px;left:-50px;">새로고침</p><div class="wrap_captcha_notice"><span id="noticeCaptcha">글을 저장하시려면 그림문자를 입력해 주세요.</span></div></div></div></div>'),
        (captchaBox = captchaBox.firstChild),
        (target[this.captchaDate] = date),
        (captchaBox[this.captchaDate] = date),
        captchaObj.insertBefore(captchaBox, pos),
        (pos = this.getCoords("tt_captChaBottom", !0)),
        ((captchaObj = document.getElementById("innerBox")).style.left = pos.left + 21 + "px"),
        (captchaObj.style.top = pos.top + 17 + "px"),
        document.getElementById("btnRefresh").addEventListener("click", this.changeCaptchaImg.bind(this)),
        document.getElementById("textRefresh").addEventListener("click", this.changeCaptchaImg.bind(this)),
        document.getElementById("inputCaptcha").addEventListener("keyup", this.confirmCaptcha.bind(this)));
  },
  openCaptchaBox: function (captchaBox) {
    var pos,
      date,
      target = captchaBox.target;
    this.removeCaptcha("tt_captChaBox", target),
      document.getElementById("tt_captChaBox") ||
        ((pos = this.getCoords(target)),
        ((captchaBox = document.createElement("div")).innerHTML =
          '<div id="tt_captChaBox"><img id="imageCaptcha" src="/plugin/Captcha?width=198&height=50&__T__=' +
          date +
          '" alt="그림문자" /><div class="wrap_captcha_notice"><span id="noticeCaptcha">글을 저장하시려면 그림문자를 입력해 주세요.</span></div><div class="wrap_captcha_inner"><input type="text" id="inputCaptcha" autocomplete="off" value=""></input><img id="btnRefresh" class="btn_refresh" src="//t1.daumcdn.net/tistory_admin/static/images/btn_refresh.gif" /></div></div>'),
        (date = new Date().getTime()),
        (captchaBox = captchaBox.firstChild),
        (target[this.captchaDate] = date),
        (captchaBox[this.captchaDate] = date),
        document.body.appendChild(captchaBox),
        (captchaBox.style.left = (pos.right + pos.left - 239) / 2 + "px"),
        (captchaBox.style.top = pos.bottom + 50 + "px"),
        document.getElementById("btnRefresh").addEventListener("click", this.changeCaptchaImg.bind(this)),
        document.getElementById("inputCaptcha").addEventListener("keyup", this.confirmCaptcha.bind(this)));
  },
  getCoords: function (h, useOffset, w) {
    for (var uo = useOffset || !1, pa = ("string" == typeof w ? document.getElementById(w) : w) || !1, e = "string" == typeof h ? document.getElementById(h) : h, w = e.offsetWidth, h = e.offsetHeight, coords = { left: 0, top: 0, right: 0, bottom: 0 }; e; ) {
      if (((coords.left += e.offsetLeft || 0), (coords.top += e.offsetTop || 0), (e = e.offsetParent), uo && e)) {
        if ("BODY" == e.tagName) break;
        if ("static" !== e.getAttribute("position")) break;
      }
      if (pa && pa == e) break;
    }
    return (coords.right = coords.left + w), (coords.bottom = coords.top + h), coords;
  },
  removeCaptcha: function (removeEl, commentArea) {
    removeEl = document.getElementById(removeEl);
    !removeEl || (commentArea && removeEl[this.captchaDate] === commentArea[this.captchaDate]) || removeEl.parentNode.removeChild(removeEl);
  },
  changeCaptchaImg: function (e) {
    e.stopPropagation(), (document.getElementById("imageCaptcha").src = "/plugin/Captcha?__T__=" + new Date().getTime()), (document.getElementById("inputCaptcha").value = ""), this.confirmCaptcha();
  },
  confirmCaptcha: function (e) {
    var emTextColor,
      request,
      inputEl = document.getElementById("inputCaptcha"),
      len = inputEl.value.length,
      wrapNotice = document.getElementById("noticeCaptcha").parentNode,
      originTextColor = "",
      _this = this,
      originTextColor =
        "bottom" == this.type
          ? ((emTextColor = function () {
              wrapNotice.style.color = "#fc4f4f";
            }),
            function () {
              wrapNotice.style.color = _this.skinColor;
            })
          : ((emTextColor = function () {
              wrapNotice.style.color = "#fc4f4f";
            }),
            function () {
              wrapNotice.style.color = "#444";
            });
    5 == len
      ? (((request = new HTTPRequest("POST", "/plugin/Captcha_Check")).onSuccess = function () {
          "true" == this.getText() ? (_this.changeNotice("그림문자를 정확히 입력하셨습니다."), originTextColor()) : (_this.changeNotice("그림문자를 잘못 입력하셨습니다."), emTextColor());
        }),
        request.send("answer=" + inputEl.value))
      : 5 < len
      ? (this.changeNotice("그림문자를 잘못 입력하셨습니다."), emTextColor())
      : (this.changeNotice("글을 저장하시려면 그림문자를 입력해 주세요."), originTextColor());
  },
  changeNotice: function (newText) {
    var notice = document.getElementById("noticeCaptcha"),
      wrapNotice = notice.parentNode;
    wrapNotice.removeChild(notice);
    notice = document.createElement("div");
    (notice.innerHTML = '<span id="noticeCaptcha">' + newText + "</span>"), wrapNotice.appendChild(notice.firstChild);
  },
  getSkinColor: function () {
    var _this = this,
      request = new HTTPRequest("GET", "/plugin/Captcha_FontColor");
    (request.onVerify = function () {
      return this.getText();
    }),
      (request.onSuccess = function () {
        _this.skinColor = this.getText().replaceAll(/"/, "");
      }),
      (request.onError = function () {
        _this.skinColor = "#333333";
      }),
      request.send();
  },
};
function getEntryCommentsByPaging(entryId) {
  var commentWritten = daum.$("ttMorePreviousCommentsFirstWrittenFor" + entryId),
    commentId = daum.$("ttMorePreviousCommentsFirstIdFor" + entryId),
    moreButton = daum.$("ttMorePreviousCommentsFor" + entryId),
    moreText = daum.$$(".tt_more_preview_comments_text", moreButton)[0];
  return (
    !(!entryId || !commentWritten) &&
    (!0 === moreButton.gettingMoreComment
      ? "waiting"
      : ((moreButton.gettingMoreComment = !0),
        (moreText.innerHTML = "이전 댓글을 불러오는 중입니다."),
        void new daum.Ajax({
          url: addUriPrefix("/comment/view"),
          method: "POST",
          timeout: 3e4,
          paramString: "id=" + entryId + "&ts=" + commentWritten.value,
          onsuccess: function (tempTag) {
            for (var result = daum.jsonToObject(tempTag.responseText), firstComment = daum.$("comment" + commentId.value), wrapComment = daum.Element.getParent(firstComment), tempTag = new daum.Template("<div>" + result.data.comment + "</div>").toElement(), comments = daum.Element.getChildElements(tempTag), i = 0, l = comments.length; i < l; i++)
              comments[i] && wrapComment.insertBefore(comments[i], firstComment);
            (commentWritten.value = result.data.ts), (commentId.value = result.data.firstCommentId), result.data.isMoreComments || daum.Element.destroy(moreButton), (moreButton.gettingMoreComment = !1), (moreText.innerHTML = "이전 댓글 더보기");
          },
          onerror: function () {
            alert("댓글을 불러오지 못했습니다."), (moreButton.gettingMoreComment = !1), (moreText.innerHTML = "이전 댓글 더보기");
          },
        }).request()))
  );
}
function findArticleArea() {
  var articleArea = document;
  return (
    !daum.$("ttDesk_Container") &&
    (daum.$$(".tt_article_useless_p_margin")[0]
      ? (articleArea = daum.$$(".tt_article_useless_p_margin")[0])
      : (daum.$$("#content", articleArea)[0] && (articleArea = daum.$("content")),
        daum.Array.each(["entry", "article"], function (className, idx) {
          daum.$$("." + className, articleArea)[0] && (articleArea = daum.$$("." + className, articleArea)[0]);
        }),
        articleArea === document && (0 < daum.$$(".td_body").length && (articleArea = daum.$$(".td_body")), daum.$("unit2") && (articleArea = daum.$("unit2")), 0 < daum.$$(".memo_style").length && (articleArea = daum.$$(".memo_style")), daum.$("contents") && (articleArea = daum.$("contents")))),
    articleArea !== document && articleArea)
  );
}
function checkArticleImage() {
  var addImageEvent = function (area) {
      for (var articleImages = daum.$$("img", area), imgLen = articleImages.length; 0 < imgLen; imgLen--) {
        var image = articleImages[imgLen - 1];
        /\/static\//.test(image.src) || /\/skin\//.test(image.src) || /\/custom\//.test(image.src) || daum.Event.addEvent(image, "error", showErrorImage);
      }
    },
    showErrorImage = function (target) {
      target = target.target;
      (target.src = "https://www.computerhope.com/jargon/e/error.png"), (target.width = 250), (target.height = 250);
    },
    articleArea = findArticleArea();
  if (articleArea)
    if (articleArea.length && 0 < articleArea.length) for (var areaLen = articleArea.length; 0 < areaLen; areaLen--) addImageEvent(articleArea[areaLen - 1]);
    else addImageEvent(articleArea);
}
function looseURIEncode(string) {
  return (string = (string = (string = string.replace(new RegExp("%", "g"), "%25")).replace(new RegExp("\\?", "g"), "%3F")).replace(new RegExp("#", "g"), "%23"));
}
function escapeHTML(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function findFragmentAndHighlight(entryid) {
  if (window.location.hash) {
    var hash = window.location.hash.substring(1),
      r = document.getElementById(hash);
    if (null !== r) return window.scrollTo(0, r.offsetTop), void highlight();
    if (0 != (r = document.getElementsByName(hash)).length) return window.scrollTo(0, r.offsetTop), void highlight();
    r = getEntryCommentsByPaging(void 0 === entryid ? window.entryid : entryid);
    (void 0 !== r && !1 === r) || (void 0 === entryid ? setTimeout("findFragmentAndHighlight()", 200) : setTimeout("findFragmentAndHighlight(" + entryid + ")", 200));
  }
}
function addUriPrefix(path) {
  return this.isDaumblogDomain() ? "/" + window.location.pathname.split("/")[1] + path : path;
}
function isDaumblogDomain() {
  return ".daum.net" == window.location.hostname.substr(-9);
}
function TTGallery(containerId) {
  (this.containerId = containerId),
    (this.container = document.getElementById(this.containerId)),
    (this.container.style.filter = "progid:DXImageTransform.Microsoft.Fade(duration=0.3, overlap=1.0)"),
    (this.container.style.textAlign = "center"),
    (this.container.style.width = "100%"),
    ((this.container.instance = this).numImages = 0),
    (this.imageLoaded = 0),
    (this.offset = 0),
    (this.src = new Array()),
    (this.caption = new Array()),
    (this.width = new Array()),
    (this.height = new Array()),
    (this.imageCache = new Array()),
    (this.container = null);
}
"undefined" != typeof daum && ("undefined" != typeof window.needCommentCaptcha && ((window.captchaPlugin = captchaPlugin), daum.Event.addEvent(window, "load", captchaPlugin.init.bind(captchaPlugin))), daum.Event.addEvent(document, "DOMContentLoaded", checkArticleImage)),
  (TTGallery.prototype.appendImage = function (src, caption, width, height) {
    this.numImages++, (new Image().src = src), (this.imageCache[this.imageCache.length] = src), (this.src[this.src.length] = src), (this.width[this.width.length] = width), (this.height[this.height.length] = height), (this.caption[this.caption.length] = caption);
  }),
  (TTGallery.prototype.getControl = function () {
    var control = document.createElement("div");
    return (
      (control.style.marginBottom = "10px"),
      (control.className = "galleryControl"),
      (control.style.font = "bold 0.9em Verdana, Sans-serif"),
      (control.innerHTML =
        "(" +
        (this.offset + 1) +
        "/" +
        this.numImages +
        ') <a href="#" onclick="document.getElementById(\'' +
        this.containerId +
        '\').instance.prev(); return false" style="border: 0px"><img src="' +
        servicePath +
        '/image/gallery/gallery_prev.gif" width="20" height="16" alt="PREVIOUS" style="vertical-align: middle"/></a> <a href="#" onclick="document.getElementById(\'' +
        this.containerId +
        '\').instance.showImagePopup1(); return false" style="border: 0px"><img src="' +
        servicePath +
        '/image/gallery/gallery_enlarge.gif" width="70" height="19" alt="ZOOM" style="vertical-align: middle"/></a> <a href="#" onclick="document.getElementById(\'' +
        this.containerId +
        '\').instance.next(); return false" style="border: 0px"><img src="' +
        servicePath +
        '/image/gallery/gallery_next.gif" width="20" height="16" alt="NEXT" style="vertical-align: middle"/></a>'),
      control
    );
  }),
  (TTGallery.prototype.getImage = function () {
    var image = document.createElement("img");
    return (image.instance = this), (image.src = this.src[this.offset]), (image.width = this.width[this.offset]), (image.height = this.height[this.offset]), (image.onclick = this.showImagePopup2), (image.style.cursor = "pointer"), image;
  }),
  (TTGallery.prototype.getCaption = function () {
    var captionText = this.caption[this.offset];
    captionText = (captionText = (captionText = (captionText = (captionText = captionText.replace(new RegExp("&amp;?", "gi"), "&")).replace(new RegExp("&lt;?", "gi"), "<")).replace(new RegExp("&gt;?", "gi"), ">")).replace(new RegExp("&quot;?", "gi"), '"')).replace(new RegExp("&#39;?", "gi"), "'");
    var caption = document.createElement("div");
    return (caption.style.textAlign = "center"), (caption.style.marginTop = "8px"), (caption.className = "galleryCaption"), caption.appendChild(document.createTextNode(captionText)), caption;
  }),
  (TTGallery.prototype.show = function (offset) {
    if (((this.container = document.getElementById(this.containerId)), 0 == this.numImages)) {
      var div = document.createElement("div");
      return (div.style.textAlign = "center"), (div.style.color = "#888"), (div.style.margin = "10px auto"), (div.style.font = "bold 2em/1 Verdana, Sans-serif"), (div.innerHTML = '<img src="' + servicePath + '/image/noImages.gif" alt="No Images">'), this.container.appendChild(div), void (this.container = null);
    }
    void 0 === offset ? (this.offset = 0) : offset < 0 ? (this.offset = this.numImages - 1) : offset >= this.numImages ? (this.offset = 0) : (this.offset = offset),
      this.container.filters && this.container.filters[0].Apply(),
      (this.container.innerHTML = ""),
      this.container.appendChild(this.getControl()),
      this.container.appendChild(this.getImage()),
      this.container.appendChild(this.getCaption()),
      this.container.filters && this.container.filters[0].Play(),
      (this.container = null);
  }),
  (TTGallery.prototype.prev = function () {
    this.show(this.offset - 1);
  }),
  (TTGallery.prototype.next = function () {
    this.show(this.offset + 1);
  }),
  (TTGallery.prototype.showImagePopup1 = function () {
    this.showImagePopup();
  }),
  (TTGallery.prototype.showImagePopup2 = function () {
    this.instance.showImagePopup();
  }),
  (TTGallery.prototype.showImagePopup = function (offset) {
    try {
      open_img(this.src[this.offset]);
    } catch (e) {
      window.open(this.src[this.offset]);
    }
  }),
  (function ($) {
    $(function () {
      $(".imageslideblock").each(function (index, $img) {
        var $item = $($img),
          $indexBtns = $item.find(".mark span"),
          $btnPrev = $item.find(".btn-prev"),
          $btnNext = $item.find(".btn-next"),
          $imgContainer = $item.find(".image-container"),
          $imgWrap = $item.find(".image-wrap"),
          $img = $item.find("img"),
          currentIndex = 0,
          initialized = !1;
        function init($firstImage, w, h) {
          !initialized && w && h && ((w = 860 < w ? 860 : w < 480 ? 480 : w), (h = 860 < h ? 860 : h < 300 ? 300 : h), (initialized = !0), $item.addClass("ready"), $imgContainer.width(w), $imgContainer.height(h), resizeImage($firstImage));
        }
        function showImage(index) {
          initialized && ((index = index >= $imgWrap.length ? 0 : index) < 0 && (index = $imgWrap.length - 1), (currentIndex = index), $imgWrap.removeClass("selected"), $($imgWrap.get(index)).addClass("selected"), $indexBtns.css("backgroundColor", "#d6d6d6"), $($indexBtns.get(index)).css("backgroundColor", "#000"));
        }
        function resizeImage($curImg) {
          $curImg.removeAttr("width"), $curImg.removeAttr("height");
        }
        $img.on("load", function (e) {
          var $curImg = $(this),
            curWidth = $curImg[0].offsetWidth,
            curHeight = $curImg[0].offsetHeight;
          0 === currentIndex ? init($curImg, curWidth, curHeight) : resizeImage($curImg);
        }),
          $indexBtns.on("click", function (e) {
            showImage($(this).data("index"));
          }),
          $btnPrev.on("click", function (e) {
            showImage(currentIndex - 1);
          }),
          $btnNext.on("click", function (e) {
            showImage(currentIndex + 1);
          }),
          init($img, $img[0].offsetWidth, $img[0].offsetHeight);
      });
    });
  })(tjQuery),
  (function ($) {
    function close($btn, $parent) {
      $parent.removeClass("open"), $btn.text($parent.attr("data-text-more") || "더보기");
    }
    function init() {
      $('[data-ke-type="moreLess"] .btn-toggle-moreless')
        .on("click", function ($parent) {
          $parent.preventDefault();
          var $this = $(this),
            $parent = $this.parent();
          ($parent.hasClass("open")
            ? close
            : function ($btn, $parent) {
                $parent.addClass("open"), $btn.text($parent.attr("data-text-less") || "접기");
              })($this, $parent);
        })
        .each(function () {
          var $this = $(this),
            $parent = $this.parent();
          close($this, $parent);
        });
    }
    $(function () {
      init();
    });
  })(tjQuery);
var isIE = -1 != navigator.appVersion.indexOf("MSIE"),
  isWin = -1 != navigator.appVersion.toLowerCase().indexOf("win"),
  isOpera = -1 != navigator.userAgent.indexOf("Opera"),
  deconcept;
function isExplore() {
  return -1 < sUserAgent.indexOf("compatible") && -1 < sUserAgent.indexOf("MSIE") && !isOpera;
}
function ControlVersion() {
  var version, axo;
  try {
    version = (axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7")).GetVariable("$version");
  } catch (e) {}
  if (!version)
    try {
      (axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6")), (version = "WIN 6,0,21,0"), (axo.AllowScriptAccess = "always"), (version = axo.GetVariable("$version"));
    } catch (e) {}
  if (!version)
    try {
      version = (axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3")).GetVariable("$version");
    } catch (e) {}
  if (!version)
    try {
      (axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3")), (version = "WIN 3,0,18,0");
    } catch (e) {}
  if (!version)
    try {
      (axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")), (version = "WIN 2,0,0,11");
    } catch (e) {
      version = -1;
    }
  return version;
}
function GetSwfVer() {
  var descArray,
    versionMajor,
    versionMinor,
    versionRevision,
    flashVer = -1;
  return (
    null != navigator.plugins && 0 < navigator.plugins.length
      ? (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]) &&
        ((versionMinor = navigator.plugins["Shockwave Flash 2.0"] ? " 2.0" : ""),
        (versionMajor = (versionRevision = (descArray = navigator.plugins["Shockwave Flash" + versionMinor].description.split(" "))[2].split("."))[0]),
        (versionMinor = versionRevision[1]),
        "d" == (versionRevision = "" == (versionRevision = descArray[3]) ? descArray[4] : versionRevision)[0] ? (versionRevision = versionRevision.substring(1)) : "r" == versionRevision[0] && 0 < (versionRevision = versionRevision.substring(1)).indexOf("d") && (versionRevision = versionRevision.substring(0, versionRevision.indexOf("d"))),
        (flashVer = versionMajor + "." + versionMinor + "." + versionRevision),
        alert("flashVer=" + flashVer))
      : -1 != navigator.userAgent.toLowerCase().indexOf("webtv/2.6")
      ? (flashVer = 4)
      : -1 != navigator.userAgent.toLowerCase().indexOf("webtv/2.5")
      ? (flashVer = 3)
      : -1 != navigator.userAgent.toLowerCase().indexOf("webtv")
      ? (flashVer = 2)
      : isIE && isWin && !isOpera && (flashVer = ControlVersion()),
    flashVer
  );
}
function DetectFlashVer(reqMajorVer, reqMinorVer, reqRevision) {
  if (((versionStr = GetSwfVer()), -1 == versionStr)) return !1;
  if (0 != versionStr) {
    versionArray = isIE && isWin && !isOpera ? ((tempArray = versionStr.split(" ")), (tempString = tempArray[1]), tempString.split(",")) : versionStr.split(".");
    var versionMajor = versionArray[0],
      versionMinor = versionArray[1],
      versionRevision = versionArray[2];
    if (versionMajor > parseFloat(reqMajorVer)) return !0;
    if (versionMajor == parseFloat(reqMajorVer)) {
      if (versionMinor > parseFloat(reqMinorVer)) return !0;
      if (versionMinor == parseFloat(reqMinorVer) && versionRevision >= parseFloat(reqRevision)) return !0;
    }
    return !1;
  }
}
function AC_AddExtension(src, ext) {
  return -1 != src.indexOf("?") ? src.replace(/\?/, ext + "?") : src + ext;
}
function AC_Generateobj(objAttrs, params, embedAttrs) {
  var str = "";
  if (isIE && isWin && !isOpera) {
    for (var i in ((str += "<object "), objAttrs)) str += i + '="' + objAttrs[i] + '" ';
    for (var i in params) str += '><param name="' + i + '" value="' + params[i] + '" /> ';
    str += "></object>";
  } else {
    for (var i in ((str += "<embed "), embedAttrs)) str += i + '="' + embedAttrs[i] + '" ';
    str += "> </embed>";
  }
  document.write(str);
}
function AC_FL_RunContent() {
  var ret = AC_GetArgs(arguments, ".swf", "movie", "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000", "application/x-shockwave-flash");
  AC_Generateobj(ret.objAttrs, ret.params, ret.embedAttrs);
}
function AC_GetArgs(args, ext, srcParamName, classid, mimeType) {
  var ret = new Object();
  (ret.embedAttrs = new Object()), (ret.params = new Object()), (ret.objAttrs = new Object());
  for (var i = 0; i < args.length; i += 2)
    switch (args[i].toLowerCase()) {
      case "classid":
        break;
      case "pluginspage":
        ret.embedAttrs[args[i]] = args[i + 1];
        break;
      case "src":
      case "movie":
        (args[i + 1] = AC_AddExtension(args[i + 1], ext)), (ret.embedAttrs.src = args[i + 1]), (ret.params[srcParamName] = args[i + 1]);
        break;
      case "onafterupdate":
      case "onbeforeupdate":
      case "onblur":
      case "oncellchange":
      case "onclick":
      case "ondblClick":
      case "ondrag":
      case "ondragend":
      case "ondragenter":
      case "ondragleave":
      case "ondragover":
      case "ondrop":
      case "onfinish":
      case "onfocus":
      case "onhelp":
      case "onmousedown":
      case "onmouseup":
      case "onmouseover":
      case "onmousemove":
      case "onmouseout":
      case "onkeypress":
      case "onkeydown":
      case "onkeyup":
      case "onload":
      case "onlosecapture":
      case "onpropertychange":
      case "onreadystatechange":
      case "onrowsdelete":
      case "onrowenter":
      case "onrowexit":
      case "onrowsinserted":
      case "onstart":
      case "onscroll":
      case "onbeforeeditfocus":
      case "onactivate":
      case "onbeforedeactivate":
      case "ondeactivate":
      case "type":
      case "codebase":
        ret.objAttrs[args[i]] = args[i + 1];
        break;
      case "id":
      case "width":
      case "height":
      case "align":
      case "vspace":
      case "hspace":
      case "class":
      case "title":
      case "accesskey":
      case "name":
      case "tabindex":
        ret.embedAttrs[args[i]] = ret.objAttrs[args[i]] = args[i + 1];
        break;
      default:
        ret.embedAttrs[args[i]] = ret.params[args[i]] = args[i + 1];
    }
  return (ret.objAttrs.classid = classid), mimeType && (ret.embedAttrs.type = mimeType), ret;
}
function ExternalInterfaceManager() {
  (this.registerMovie = function (movieName) {
    window.fakeMovies || (window.fakeMovies = new Array()), (window.fakeMovies[window.fakeMovies.length] = movieName);
  }),
    (this.initialize = function () {
      if (document.all && window.fakeMovies) {
        for (i = 0; i < window.fakeMovies.length; i++) window[window.fakeMovies[i]] = new Object();
        STD.addEventListener(window), window.addEventListener("load", initializeExternalInterface, !1);
      }
    });
}
function initializeExternalInterface() {
  for (i = 0; i < window.fakeMovies.length; i++) {
    var method,
      movieName = window.fakeMovies[i],
      fakeMovie = window[movieName],
      realMovie = document.getElementById(movieName);
    for (method in fakeMovie)
      realMovie[method] = function () {
        (flashFunction = '<invoke name="' + method.toString() + '" returntype="javascript">' + __flash__argumentsToXML(arguments, 0) + "</invoke>"), this.CallFunction(flashFunction);
      };
    window[movieName] = realMovie;
  }
}
function getVariableFromFlash(myFlashElementID, myVariableName) {
  return document.getElementById(myFlashElementID) ? document.getElementById(myFlashElementID).GetVariable(myVariableName) : "";
}
function AC_FL_RunContentNotWriteGetString() {
  var ret = AC_GetArgs(arguments, ".swf", "movie", "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000", "application/x-shockwave-flash");
  return AC_GenerateobjNotWriteGetString(ret.objAttrs, ret.params, ret.embedAttrs);
}
function AC_GenerateobjNotWriteGetString(objAttrs, params, embedAttrs) {
  var str = "";
  if (isExplore()) {
    for (var i in ((str += "<object "), objAttrs)) str += i + '="' + objAttrs[i] + '" ';
    for (var i in ((str += ">"), params)) str += '<param name="' + i + '" value="' + params[i] + '" /> ';
  }
  for (i in ((str += "<embed "), embedAttrs)) str += i + '="' + embedAttrs[i] + '" ';
  return (str += " ></embed>"), isIE && (str += "</object>"), str;
}
("use strict");
!(function (H) {
  function v(c, a, b) {
    var h,
      l,
      m,
      F,
      r,
      g = 0,
      d = [],
      f = 0,
      p = !1,
      k = !1,
      q = [],
      t = [],
      y = !1,
      e = (b = b || {}).encoding || "UTF8",
      u = b.numRounds || 1,
      n = z(a, e);
    if (u !== parseInt(u, 10) || u < 1) throw Error("numRounds must a integer >= 1");
    if (
      ((F = function (a, b) {
        return A(a, b, c);
      }),
      (r = function (a, b, f, d) {
        var g, e;
        if ("SHA-224" !== c && "SHA-256" !== c) throw Error("Unexpected error in SHA-2 implementation");
        for (g = 15 + (((b + 65) >>> 9) << 4), e = 16; a.length <= g; ) a.push(0);
        for (a[b >>> 5] |= 128 << (24 - (b % 32)), a[g] = b + f, f = a.length, b = 0; b < f; b += e) d = A(a.slice(b, b + e), d, c);
        if ("SHA-224" === c) a = [d[0], d[1], d[2], d[3], d[4], d[5], d[6]];
        else {
          if ("SHA-256" !== c) throw Error("Unexpected error in SHA-2 implementation");
          a = d;
        }
        return a;
      }),
      "SHA-224" === c)
    )
      (m = 512), (l = 224);
    else {
      if ("SHA-256" !== c) throw Error("Chosen SHA variant is not supported");
      (m = 512), (l = 256);
    }
    (h = w(c)),
      (this.setHMACKey = function (a, b, d) {
        var f;
        if (!0 === k) throw Error("HMAC key already set");
        if (!0 === p) throw Error("Cannot set HMAC key after finalizing hash");
        if (!0 === y) throw Error("Cannot set HMAC key after calling update");
        if (((a = (b = z(b, (d || {}).encoding || "UTF8")(a)).binLen), (b = b.value), (d = (f = m >>> 3) / 4 - 1), f < a / 8)) {
          for (b = r(b, a, 0, w(c)); b.length <= d; ) b.push(0);
          b[d] &= 4294967040;
        } else if (a / 8 < f) {
          for (; b.length <= d; ) b.push(0);
          b[d] &= 4294967040;
        }
        for (a = 0; a <= d; a += 1) (q[a] = 909522486 ^ b[a]), (t[a] = 1549556828 ^ b[a]);
        (h = F(q, h)), (g = m), (k = !0);
      }),
      (this.update = function (a) {
        var c,
          e,
          l = 0,
          p = m >>> 5,
          b = n(a, d, f);
        for (a = b.binLen, c = b.value, b = a >>> 5, e = 0; e < b; e += p) l + m <= a && ((h = F(c.slice(e, e + p), h)), (l += m));
        (g += l), (d = c.slice(l >>> 5)), (f = a % m), (y = !0);
      }),
      (this.getHash = function (a, b) {
        var e, m, n;
        if (!0 === k) throw Error("Cannot call getHash after setting HMAC key");
        switch (((n = B(b)), a)) {
          case "HEX":
            e = function (a) {
              return C(a, n);
            };
            break;
          case "B64":
            e = function (a) {
              return D(a, n);
            };
            break;
          case "BYTES":
            e = E;
            break;
          default:
            throw Error("format must be HEX, B64, or BYTES");
        }
        if (!1 === p) for (h = r(d, f, g, h), m = 1; m < u; m += 1) h = r(h, l, 0, w(c));
        return (p = !0), e(h);
      }),
      (this.getHMAC = function (n, b) {
        var e, q;
        if (!1 === k) throw Error("Cannot call getHMAC without first setting HMAC key");
        switch (((q = B(b)), n)) {
          case "HEX":
            e = function (a) {
              return C(a, q);
            };
            break;
          case "B64":
            e = function (a) {
              return D(a, q);
            };
            break;
          case "BYTES":
            e = E;
            break;
          default:
            throw Error("outputFormat must be HEX, B64, or BYTES");
        }
        return !1 === p && ((n = r(d, f, g, h)), (h = F(t, w(c))), (h = r(n, l, m, h))), (p = !0), e(h);
      });
  }
  function k() {}
  function I(c, a, b) {
    var d,
      f,
      e,
      h,
      n,
      g = c.length;
    if (((a = a || [0]), (n = (b = b || 0) >>> 3), 0 != g % 2)) throw Error("String of HEX type must be in byte increments");
    for (d = 0; d < g; d += 2) {
      if (((f = parseInt(c.substr(d, 2), 16)), isNaN(f))) throw Error("String of HEX type contains invalid characters");
      for (e = (h = (d >>> 1) + n) >>> 2; a.length <= e; ) a.push(0);
      a[e] |= f << (8 * (3 - (h % 4)));
    }
    return { value: a, binLen: 4 * g + b };
  }
  function J(c, a, b) {
    for (var e, h, g = [], g = a || [0], f = (b = b || 0) >>> 3, d = 0; d < c.length; d += 1) (a = c.charCodeAt(d)), g.length <= (e = (h = d + f) >>> 2) && g.push(0), (g[e] |= a << (8 * (3 - (h % 4))));
    return { value: g, binLen: 8 * c.length + b };
  }
  function K(c, a, b) {
    var f,
      e,
      h,
      n,
      l,
      m,
      g = [],
      d = 0,
      g = a || [0];
    if (((a = (b = b || 0) >>> 3), -1 === c.search(/^[a-zA-Z0-9=+\/]+$/))) throw Error("Invalid character in base-64 string");
    if (((e = c.indexOf("=")), (c = c.replace(/\=/g, "")), -1 !== e && e < c.length)) throw Error("Invalid '=' found in base-64 string");
    for (e = 0; e < c.length; e += 4) {
      for (l = c.substr(e, 4), h = n = 0; h < l.length; h += 1) n |= (f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(l[h])) << (18 - 6 * h);
      for (h = 0; h < l.length - 1; h += 1) {
        for (f = (m = d + a) >>> 2; g.length <= f; ) g.push(0);
        (g[f] |= ((n >>> (16 - 8 * h)) & 255) << (8 * (3 - (m % 4)))), (d += 1);
      }
    }
    return { value: g, binLen: 8 * d + b };
  }
  function C(c, a) {
    for (var f, b = "", g = 4 * c.length, d = 0; d < g; d += 1) (f = c[d >>> 2] >>> (8 * (3 - (d % 4)))), (b += "0123456789abcdef".charAt((f >>> 4) & 15) + "0123456789abcdef".charAt(15 & f));
    return a.outputUpper ? b.toUpperCase() : b;
  }
  function D(c, a) {
    for (var f, e, b = "", g = 4 * c.length, d = 0; d < g; d += 3)
      for (f = c.length <= (e = (d + 1) >>> 2) ? 0 : c[e], e = c.length <= (e = (d + 2) >>> 2) ? 0 : c[e], e = (((c[d >>> 2] >>> (8 * (3 - (d % 4)))) & 255) << 16) | (((f >>> (8 * (3 - ((d + 1) % 4)))) & 255) << 8) | ((e >>> (8 * (3 - ((d + 2) % 4)))) & 255), f = 0; f < 4; f += 1)
        8 * d + 6 * f <= 32 * c.length ? (b += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt((e >>> (6 * (3 - f))) & 63)) : (b += a.b64Pad);
    return b;
  }
  function E(c) {
    for (var d, a = "", b = 4 * c.length, g = 0; g < b; g += 1) (d = (c[g >>> 2] >>> (8 * (3 - (g % 4)))) & 255), (a += String.fromCharCode(d));
    return a;
  }
  function B(c) {
    var a = { outputUpper: !1, b64Pad: "=" };
    if (((a.outputUpper = (c = c || {}).outputUpper || !1), (a.b64Pad = c.b64Pad || "="), "boolean" != typeof a.outputUpper)) throw Error("Invalid outputUpper formatting option");
    if ("string" != typeof a.b64Pad) throw Error("Invalid b64Pad formatting option");
    return a;
  }
  function z(c, a) {
    var b;
    switch (a) {
      case "UTF8":
      case "UTF16BE":
      case "UTF16LE":
        break;
      default:
        throw Error("encoding must be UTF8, UTF16BE, or UTF16LE");
    }
    switch (c) {
      case "HEX":
        b = I;
        break;
      case "TEXT":
        b = function (b, c, f) {
          var l,
            m,
            r,
            p,
            e = [],
            h = [],
            n = 0,
            e = c || [0],
            k = (c = f || 0) >>> 3;
          if ("UTF8" === a)
            for (l = 0; l < b.length; l += 1)
              for (
                h = [], (f = b.charCodeAt(l)) < 128 ? h.push(f) : f < 2048 ? (h.push(192 | (f >>> 6)), h.push(128 | (63 & f))) : f < 55296 || 57344 <= f ? h.push(224 | (f >>> 12), 128 | ((f >>> 6) & 63), 128 | (63 & f)) : ((f = 65536 + (((1023 & f) << 10) | (1023 & b.charCodeAt((l += 1))))), h.push(240 | (f >>> 18), 128 | ((f >>> 12) & 63), 128 | ((f >>> 6) & 63), 128 | (63 & f))), m = 0;
                m < h.length;
                m += 1
              ) {
                for (r = (p = n + k) >>> 2; e.length <= r; ) e.push(0);
                (e[r] |= h[m] << (8 * (3 - (p % 4)))), (n += 1);
              }
          else if ("UTF16BE" === a || "UTF16LE" === a)
            for (l = 0; l < b.length; l += 1) {
              for (f = b.charCodeAt(l), "UTF16LE" === a && (f = ((m = 255 & f) << 8) | (f >>> 8)), r = (p = n + k) >>> 2; e.length <= r; ) e.push(0);
              (e[r] |= f << (8 * (2 - (p % 4)))), (n += 2);
            }
          return { value: e, binLen: 8 * n + c };
        };
        break;
      case "B64":
        b = K;
        break;
      case "BYTES":
        b = J;
        break;
      default:
        throw Error("format must be HEX, TEXT, B64, or BYTES");
    }
    return b;
  }
  function t(c, a) {
    return (c >>> a) | (c << (32 - a));
  }
  function L(c, a, b) {
    return (c & a) ^ (~c & b);
  }
  function M(c, a, b) {
    return (c & a) ^ (c & b) ^ (a & b);
  }
  function N(c) {
    return t(c, 2) ^ t(c, 13) ^ t(c, 22);
  }
  function O(c) {
    return t(c, 6) ^ t(c, 11) ^ t(c, 25);
  }
  function P(c) {
    return t(c, 7) ^ t(c, 18) ^ (c >>> 3);
  }
  function Q(c) {
    return t(c, 17) ^ t(c, 19) ^ (c >>> 10);
  }
  function R(c, a) {
    var b = (65535 & c) + (65535 & a);
    return ((((c >>> 16) + (a >>> 16) + (b >>> 16)) & 65535) << 16) | (65535 & b);
  }
  function S(c, a, b, g) {
    var d = (65535 & c) + (65535 & a) + (65535 & b) + (65535 & g);
    return ((((c >>> 16) + (a >>> 16) + (b >>> 16) + (g >>> 16) + (d >>> 16)) & 65535) << 16) | (65535 & d);
  }
  function T(c, a, b, g, d) {
    var f = (65535 & c) + (65535 & a) + (65535 & b) + (65535 & g) + (65535 & d);
    return ((((c >>> 16) + (a >>> 16) + (b >>> 16) + (g >>> 16) + (d >>> 16) + (f >>> 16)) & 65535) << 16) | (65535 & f);
  }
  function w(c) {
    var a = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428],
      b = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225];
    switch (c) {
      case "SHA-224":
        c = a;
        break;
      case "SHA-256":
        c = b;
        break;
      case "SHA-384":
      case "SHA-512":
        c = [new k(), new k(), new k(), new k(), new k(), new k(), new k(), new k()];
        break;
      default:
        throw Error("Unknown SHA variant");
    }
    return c;
  }
  function A(c, a, b) {
    var g,
      d,
      f,
      e,
      h,
      n,
      l,
      m,
      k,
      r,
      p,
      t,
      q,
      v,
      u,
      y,
      w,
      z,
      A,
      B,
      C,
      D,
      E,
      x = [];
    if ("SHA-224" !== b && "SHA-256" !== b) throw Error("Unexpected error in SHA-2 implementation");
    for (r = 64, t = 1, D = Number, q = R, v = S, u = T, y = P, w = Q, z = N, A = O, C = M, B = L, E = G, b = a[0], g = a[1], d = a[2], f = a[3], e = a[4], h = a[5], n = a[6], l = a[7], p = 0; p < r; p += 1)
      p < 16 ? ((m = c.length <= (k = p * t) ? 0 : c[k]), (k = c.length <= k + 1 ? 0 : c[k + 1]), (x[p] = new D(m, k))) : (x[p] = v(w(x[p - 2]), x[p - 7], y(x[p - 15]), x[p - 16])), (m = u(l, A(e), B(e, h, n), E[p], x[p])), (k = q(z(b), C(b, g, d))), (l = n), (n = h), (h = e), (e = q(f, m)), (f = d), (d = g), (g = b), (b = q(m, k));
    return (a[0] = q(b, a[0])), (a[1] = q(g, a[1])), (a[2] = q(d, a[2])), (a[3] = q(f, a[3])), (a[4] = q(e, a[4])), (a[5] = q(h, a[5])), (a[6] = q(n, a[6])), (a[7] = q(l, a[7])), a;
  }
  var G = [
    1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205,
    773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298,
  ];
  "function" == typeof define && define.amd
    ? define(function () {
        return v;
      })
    : "undefined" != typeof exports
    ? "undefined" != typeof module && module.exports
      ? (module.exports = exports = v)
      : (exports = v)
    : (H.jsSHA = v);
})(this),
  (function (n) {
    function t(n, t) {
      var r = (65535 & n) + (65535 & t);
      return (((n >> 16) + (t >> 16) + (r >> 16)) << 16) | (65535 & r);
    }
    function e(n, e, o, u, c, f) {
      return t(
        (function (n, t) {
          return (n << t) | (n >>> (32 - t));
        })(t(t(e, n), t(u, f)), c),
        o
      );
    }
    function o(n, t, r, o, u, c, f) {
      return e((t & r) | (~t & o), n, t, u, c, f);
    }
    function u(n, t, r, o, u, c, f) {
      return e((t & o) | (r & ~o), n, t, u, c, f);
    }
    function c(n, t, r, o, u, c, f) {
      return e(t ^ r ^ o, n, t, u, c, f);
    }
    function f(n, t, r, o, u, c, f) {
      return e(r ^ (t | ~o), n, t, u, c, f);
    }
    function i(n, r) {
      (n[r >> 5] |= 128 << r % 32), (n[14 + (((r + 64) >>> 9) << 4)] = r);
      for (var i, a, h, d, l = 1732584193, g = -271733879, v = -1732584194, m = 271733878, e = 0; e < n.length; e += 16)
        (l = o((i = l), (a = g), (h = v), (d = m), n[e], 7, -680876936)),
          (m = o(m, l, g, v, n[e + 1], 12, -389564586)),
          (v = o(v, m, l, g, n[e + 2], 17, 606105819)),
          (g = o(g, v, m, l, n[e + 3], 22, -1044525330)),
          (l = o(l, g, v, m, n[e + 4], 7, -176418897)),
          (m = o(m, l, g, v, n[e + 5], 12, 1200080426)),
          (v = o(v, m, l, g, n[e + 6], 17, -1473231341)),
          (g = o(g, v, m, l, n[e + 7], 22, -45705983)),
          (l = o(l, g, v, m, n[e + 8], 7, 1770035416)),
          (m = o(m, l, g, v, n[e + 9], 12, -1958414417)),
          (v = o(v, m, l, g, n[e + 10], 17, -42063)),
          (g = o(g, v, m, l, n[e + 11], 22, -1990404162)),
          (l = o(l, g, v, m, n[e + 12], 7, 1804603682)),
          (m = o(m, l, g, v, n[e + 13], 12, -40341101)),
          (v = o(v, m, l, g, n[e + 14], 17, -1502002290)),
          (l = u(l, (g = o(g, v, m, l, n[e + 15], 22, 1236535329)), v, m, n[e + 1], 5, -165796510)),
          (m = u(m, l, g, v, n[e + 6], 9, -1069501632)),
          (v = u(v, m, l, g, n[e + 11], 14, 643717713)),
          (g = u(g, v, m, l, n[e], 20, -373897302)),
          (l = u(l, g, v, m, n[e + 5], 5, -701558691)),
          (m = u(m, l, g, v, n[e + 10], 9, 38016083)),
          (v = u(v, m, l, g, n[e + 15], 14, -660478335)),
          (g = u(g, v, m, l, n[e + 4], 20, -405537848)),
          (l = u(l, g, v, m, n[e + 9], 5, 568446438)),
          (m = u(m, l, g, v, n[e + 14], 9, -1019803690)),
          (v = u(v, m, l, g, n[e + 3], 14, -187363961)),
          (g = u(g, v, m, l, n[e + 8], 20, 1163531501)),
          (l = u(l, g, v, m, n[e + 13], 5, -1444681467)),
          (m = u(m, l, g, v, n[e + 2], 9, -51403784)),
          (v = u(v, m, l, g, n[e + 7], 14, 1735328473)),
          (l = c(l, (g = u(g, v, m, l, n[e + 12], 20, -1926607734)), v, m, n[e + 5], 4, -378558)),
          (m = c(m, l, g, v, n[e + 8], 11, -2022574463)),
          (v = c(v, m, l, g, n[e + 11], 16, 1839030562)),
          (g = c(g, v, m, l, n[e + 14], 23, -35309556)),
          (l = c(l, g, v, m, n[e + 1], 4, -1530992060)),
          (m = c(m, l, g, v, n[e + 4], 11, 1272893353)),
          (v = c(v, m, l, g, n[e + 7], 16, -155497632)),
          (g = c(g, v, m, l, n[e + 10], 23, -1094730640)),
          (l = c(l, g, v, m, n[e + 13], 4, 681279174)),
          (m = c(m, l, g, v, n[e], 11, -358537222)),
          (v = c(v, m, l, g, n[e + 3], 16, -722521979)),
          (g = c(g, v, m, l, n[e + 6], 23, 76029189)),
          (l = c(l, g, v, m, n[e + 9], 4, -640364487)),
          (m = c(m, l, g, v, n[e + 12], 11, -421815835)),
          (v = c(v, m, l, g, n[e + 15], 16, 530742520)),
          (l = f(l, (g = c(g, v, m, l, n[e + 2], 23, -995338651)), v, m, n[e], 6, -198630844)),
          (m = f(m, l, g, v, n[e + 7], 10, 1126891415)),
          (v = f(v, m, l, g, n[e + 14], 15, -1416354905)),
          (g = f(g, v, m, l, n[e + 5], 21, -57434055)),
          (l = f(l, g, v, m, n[e + 12], 6, 1700485571)),
          (m = f(m, l, g, v, n[e + 3], 10, -1894986606)),
          (v = f(v, m, l, g, n[e + 10], 15, -1051523)),
          (g = f(g, v, m, l, n[e + 1], 21, -2054922799)),
          (l = f(l, g, v, m, n[e + 8], 6, 1873313359)),
          (m = f(m, l, g, v, n[e + 15], 10, -30611744)),
          (v = f(v, m, l, g, n[e + 6], 15, -1560198380)),
          (g = f(g, v, m, l, n[e + 13], 21, 1309151649)),
          (l = f(l, g, v, m, n[e + 4], 6, -145523070)),
          (m = f(m, l, g, v, n[e + 11], 10, -1120210379)),
          (v = f(v, m, l, g, n[e + 2], 15, 718787259)),
          (g = f(g, v, m, l, n[e + 9], 21, -343485551)),
          (l = t(l, i)),
          (g = t(g, a)),
          (v = t(v, h)),
          (m = t(m, d));
      return [l, g, v, m];
    }
    function a(n) {
      for (var r = "", t = 0; t < 32 * n.length; t += 8) r += String.fromCharCode((n[t >> 5] >>> t % 32) & 255);
      return r;
    }
    function h(n) {
      var t,
        r = [];
      for (r[(n.length >> 2) - 1] = void 0, t = 0; t < r.length; t += 1) r[t] = 0;
      for (t = 0; t < 8 * n.length; t += 8) r[t >> 5] |= (255 & n.charCodeAt(t / 8)) << t % 32;
      return r;
    }
    function g(n) {
      for (var t, e = "0123456789abcdef", o = "", r = 0; r < n.length; r += 1) (t = n.charCodeAt(r)), (o += e.charAt((t >>> 4) & 15) + e.charAt(15 & t));
      return o;
    }
    function v(n) {
      return unescape(encodeURIComponent(n));
    }
    function m(n) {
      return (function (n) {
        return a(i(h(n), 8 * n.length));
      })(v(n));
    }
    function s(n, t) {
      return (function (n, e) {
        var r,
          o = h(n),
          u = [],
          c = [];
        for (u[15] = c[15] = void 0, 16 < o.length && (o = i(o, 8 * n.length)), r = 0; r < 16; r += 1) (u[r] = 909522486 ^ o[r]), (c[r] = 1549556828 ^ o[r]);
        return (e = i(u.concat(h(e)), 512 + 8 * e.length)), a(i(c.concat(e), 640));
      })(v(n), v(t));
    }
    function A(n, t, r) {
      return t
        ? (r
            ? s
            : function (n, t) {
                return g(s(n, t));
              })(t, n)
        : (r
            ? m
            : function (n) {
                return g(m(n));
              })(n);
    }
    "function" == typeof define && define.amd
      ? define(function () {
          return A;
        })
      : "object" == typeof module && module.exports
      ? (module.exports = A)
      : (n.md5 = A);
  })(this),
  void 0 === deconcept && (deconcept = new Object()),
  "undefined" == typeof deconcept.util && (deconcept.util = new Object()),
  "undefined" == typeof deconcept.SWFObjectUtil && (deconcept.SWFObjectUtil = new Object()),
  (deconcept.SWFObject = function (_1, id, w, h, _5, c, _7, _c, _9, _a) {
    document.getElementById &&
      ((this.DETECT_KEY = _a || "detectflash"),
      (this.skipDetect = deconcept.util.getRequestParameter(this.DETECT_KEY)),
      (this.params = new Object()),
      (this.variables = new Object()),
      (this.attributes = new Array()),
      _1 && this.setAttribute("swf", _1),
      id && this.setAttribute("id", id),
      w && this.setAttribute("width", w),
      h && this.setAttribute("height", h),
      _5 && this.setAttribute("version", new deconcept.PlayerVersion(_5.toString().split("."))),
      (this.installedVer = deconcept.SWFObjectUtil.getPlayerVersion()),
      !window.opera && document.all && 7 < this.installedVer.major && (deconcept.SWFObject.doPrepUnload = !0),
      c && this.addParam("bgcolor", c),
      this.addParam("quality", _7 || "high"),
      this.setAttribute("useExpressInstall", !1),
      this.setAttribute("doExpressInstall", !1),
      (_c = _c || window.location),
      this.setAttribute("xiRedirectUrl", _c),
      this.setAttribute("redirectUrl", ""),
      _9 && this.setAttribute("redirectUrl", _9));
  }),
  (deconcept.SWFObject.prototype = {
    useExpressInstall: function (_d) {
      (this.xiSWFPath = _d || "expressinstall.swf"), this.setAttribute("useExpressInstall", !0);
    },
    setAttribute: function (_e, _f) {
      this.attributes[_e] = _f;
    },
    getAttribute: function (_10) {
      return this.attributes[_10];
    },
    addParam: function (_11, _12) {
      this.params[_11] = _12;
    },
    getParams: function () {
      return this.params;
    },
    addVariable: function (_13, _14) {
      this.variables[_13] = _14;
    },
    getVariable: function (_15) {
      return this.variables[_15];
    },
    getVariables: function () {
      return this.variables;
    },
    getVariablePairs: function () {
      var key,
        _16 = new Array(),
        _18 = this.getVariables();
      for (key in _18) _16[_16.length] = key + "=" + _18[key];
      return _16;
    },
    getSWFHTML: function () {
      var _19 = "";
      if (navigator.plugins && navigator.mimeTypes && navigator.mimeTypes.length) {
        this.getAttribute("doExpressInstall") && (this.addVariable("MMplayerType", "PlugIn"), this.setAttribute("swf", this.xiSWFPath)),
          (_19 = '<embed type="application/x-shockwave-flash" src="' + this.getAttribute("swf") + '" width="' + this.getAttribute("width") + '" height="' + this.getAttribute("height") + '" style="' + this.getAttribute("style") + '"'),
          (_19 += ' id="' + this.getAttribute("id") + '" name="' + this.getAttribute("id") + '" ');
        var _1a = this.getParams();
        for (key in _1a) _19 += [key] + '="' + _1a[key] + '" ';
        var _1f = this.getVariablePairs().join("&");
        0 < _1f.length && (_19 += 'flashvars="' + _1f + '"'), (_19 += "/>");
      } else {
        this.getAttribute("doExpressInstall") && (this.addVariable("MMplayerType", "ActiveX"), this.setAttribute("swf", this.xiSWFPath)),
          (_19 = '<object id="' + this.getAttribute("id") + '" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="' + this.getAttribute("width") + '" height="' + this.getAttribute("height") + '" style="' + this.getAttribute("style") + '">'),
          (_19 += '<param name="movie" value="' + this.getAttribute("swf") + '" />');
        var key,
          _1d = this.getParams();
        for (key in _1d) _19 += '<param name="' + key + '" value="' + _1d[key] + '" />';
        _1f = this.getVariablePairs().join("&");
        0 < _1f.length && (_19 += '<param name="flashvars" value="' + _1f + '" />'), (_19 += "</object>");
      }
      return _19;
    },
    write: function (_20) {
      var _21;
      return (
        this.getAttribute("useExpressInstall") &&
          ((_21 = new deconcept.PlayerVersion([6, 0, 65])),
          this.installedVer.versionIsValid(_21) && !this.installedVer.versionIsValid(this.getAttribute("version")) && (this.setAttribute("doExpressInstall", !0), this.addVariable("MMredirectURL", escape(this.getAttribute("xiRedirectUrl"))), (document.title = document.title.slice(0, 47) + " - Flash Player Installation"), this.addVariable("MMdoctitle", document.title))),
        this.skipDetect || this.getAttribute("doExpressInstall") || this.installedVer.versionIsValid(this.getAttribute("version")) ? ((("string" == typeof _20 ? document.getElementById(_20) : _20).innerHTML = this.getSWFHTML()), !0) : ("" != this.getAttribute("redirectUrl") && document.location.replace(this.getAttribute("redirectUrl")), !1)
      );
    },
  }),
  (deconcept.SWFObjectUtil.getPlayerVersion = function () {
    var _23 = new deconcept.PlayerVersion([0, 0, 0]);
    if (navigator.plugins && navigator.mimeTypes.length) {
      var x = navigator.plugins["Shockwave Flash"];
      x &&
        x.description &&
        (_23 = new deconcept.PlayerVersion(
          x.description
            .replace(/([a-zA-Z]|\s)+/, "")
            .replace(/(\s+r|\s+b[0-9]+)/, ".")
            .split(".")
        ));
    } else if (navigator.userAgent && 0 <= navigator.userAgent.indexOf("Windows CE"))
      for (var axo = 1, _26 = 3; axo; )
        try {
          _26++, (axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + _26)), (_23 = new deconcept.PlayerVersion([_26, 0, 0]));
        } catch (e) {
          axo = null;
        }
    else {
      try {
        axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
      } catch (e) {
        try {
          (axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6")), (_23 = new deconcept.PlayerVersion([6, 0, 21]));
          axo.AllowScriptAccess = "always";
        } catch (e) {
          if (6 == _23.major) return _23;
        }
        try {
          axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
        } catch (e) {}
      }
      null != axo && (_23 = new deconcept.PlayerVersion(axo.GetVariable("$version").split(" ")[1].split(",")));
    }
    return _23;
  }),
  (deconcept.PlayerVersion = function (_29) {
    (this.major = null != _29[0] ? parseInt(_29[0]) : 0), (this.minor = null != _29[1] ? parseInt(_29[1]) : 0), (this.rev = null != _29[2] ? parseInt(_29[2]) : 0);
  }),
  (deconcept.PlayerVersion.prototype.versionIsValid = function (fv) {
    return !(this.major < fv.major) && (this.major > fv.major || (!(this.minor < fv.minor) && (this.minor > fv.minor || !(this.rev < fv.rev))));
  }),
  (deconcept.util = {
    getRequestParameter: function (_2b) {
      var q = document.location.search || document.location.hash;
      if (null == _2b) return q;
      if (q) for (var _2d = q.substring(1).split("&"), i = 0; i < _2d.length; i++) if (_2d[i].substring(0, _2d[i].indexOf("=")) == _2b) return _2d[i].substring(_2d[i].indexOf("=") + 1);
      return "";
    },
  }),
  (deconcept.SWFObjectUtil.cleanupSWFs = function () {
    for (var _2f = document.getElementsByTagName("OBJECT"), i = _2f.length - 1; 0 <= i; i--) for (var x in ((_2f[i].style.display = "none"), _2f[i])) "function" == typeof _2f[i][x] && (_2f[i][x] = function () {});
  }),
  deconcept.SWFObject.doPrepUnload &&
    (deconcept.unloadSet ||
      ((deconcept.SWFObjectUtil.prepUnload = function () {
        (__flash_unloadHandler = function () {}), (__flash_savedUnloadHandler = function () {}), window.attachEvent("onunload", deconcept.SWFObjectUtil.cleanupSWFs);
      }),
      window.attachEvent("onbeforeunload", deconcept.SWFObjectUtil.prepUnload),
      (deconcept.unloadSet = !0))),
  !document.getElementById &&
    document.all &&
    (document.getElementById = function (id) {
      return document.all[id];
    });
var getQueryParamValue = deconcept.util.getRequestParameter,
  FlashObject = deconcept.SWFObject,
  SWFObject = deconcept.SWFObject;
