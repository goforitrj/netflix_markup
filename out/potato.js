!(function(t) {
    var r = {};
    function o(e) {
        if (r[e]) return r[e].exports;
        var n = (r[e] = { i: e, l: !1, exports: {} });
        return t[e].call(n.exports, n, n.exports, o), (n.l = !0), n.exports;
    }
    (o.m = t),
        (o.c = r),
        (o.d = function(e, n, t) {
            o.o(e, n) ||
                Object.defineProperty(e, n, { enumerable: !0, get: t });
        }),
        (o.r = function(e) {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, {
                    value: 'Module'
                }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (o.t = function(n, e) {
            if ((1 & e && (n = o(n)), 8 & e)) return n;
            if (4 & e && 'object' == typeof n && n && n.__esModule) return n;
            var t = Object.create(null);
            if (
                (o.r(t),
                Object.defineProperty(t, 'default', {
                    enumerable: !0,
                    value: n
                }),
                2 & e && 'string' != typeof n)
            )
                for (var r in n)
                    o.d(
                        t,
                        r,
                        function(e) {
                            return n[e];
                        }.bind(null, r)
                    );
            return t;
        }),
        (o.n = function(e) {
            var n =
                e && e.__esModule
                    ? function() {
                          return e.default;
                      }
                    : function() {
                          return e;
                      };
            return o.d(n, 'a', n), n;
        }),
        (o.o = function(e, n) {
            return Object.prototype.hasOwnProperty.call(e, n);
        }),
        (o.p = ''),
        o((o.s = './index.js'));
})({
    './index.js':
        /*!******************!*\
  !*** ./index.js ***!
  \******************/
        /*! no static exports found */ function(module, exports) {
            eval(
                'const add = (x, y) => x + y;\n\nconst result = add(5, 5);\n\nconsole.log(result);\n\n\n//# sourceURL=webpack:///./index.js?'
            );
        }
});
