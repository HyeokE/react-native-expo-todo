/**
 * XDate v0.8.2
 * Docs & Licensing: http://arshaw.com/xdate/
 */
!(function (t, e, n, r) {
    var u = 864e5,
        i = "yyyy-MM-dd'T'HH:mm:ss(.fff)",
        o = i + 'zzz',
        s = ['FullYear', 'Month', 'Date', 'Hours', 'Minutes', 'Seconds', 'Milliseconds', 'Day', 'Year'],
        a = ['Years', 'Months', 'Days'],
        c = [12, 31, 24, 60, 60, 1e3, 1],
        f = new RegExp("(([a-zA-Z])\\2*)|(\\((('.*?'|\\(.*?\\)|.)*?)\\))|('(.*?)')"),
        g = t.UTC,
        h = t.prototype.toUTCString,
        d = l.prototype;
    function l() {
        return T(this instanceof l ? this : new l(), arguments);
    }
    function T(e, n) {
        var r,
            u = n.length;
        if ((Z(n[u - 1]) && ((r = n[--u]), (n = k(n, 0, u))), u))
            if (1 == u) {
                var i = n[0];
                i instanceof t
                    ? (e[0] = new t(i.getTime()))
                    : !(function (t) {
                          return 'number' == typeof t;
                      })(i)
                    ? i instanceof l
                        ? (e[0] = (function (e) {
                              var n = new t(e[0].getTime());
                              m(e) && (n.toString = h);
                              return n;
                          })(i))
                        : I(i) &&
                          ((e[0] = new t(0)),
                          (e = (function (e, n, r) {
                              for (var u, i = l.parsers, o = 0; o < i.length; o++) if ((u = i[o](e, n, r))) return u;
                              return (r[0] = new t(e)), r;
                          })(i, r || !1, e)))
                    : (e[0] = new t(i));
            } else (e[0] = new t(g.apply(t, n))), r || (e[0] = A(e[0]));
        else e[0] = new t();
        return Z(r) && y(e, r), e;
    }
    function m(t) {
        return t[0].toString === h;
    }
    function y(e, n, r) {
        var u;
        return (
            n
                ? m(e) || (r && (e[0] = ((u = e[0]), new t(g(u.getFullYear(), u.getMonth(), u.getDate(), u.getHours(), u.getMinutes(), u.getSeconds(), u.getMilliseconds())))), (e[0].toString = h))
                : m(e) && (e[0] = r ? A(e[0]) : new t(e[0].getTime())),
            e
        );
    }
    function p(t, e, n, r, u) {
        var i,
            o = Y(O, t[0], u),
            s = Y(W, t[0], u),
            a = !1;
        2 == r.length && Z(r[1]) && ((a = r[1]), (r = [n])), (i = 1 == e ? ((n % 12) + 12) % 12 : o(1)), s(e, r), a && o(1) != i && (s(1, [o(1) - 1]), s(2, [J(o(0), o(1))]));
    }
    function M(t, n, r, u) {
        r = Number(r);
        var i = e.floor(r);
        t['set' + s[n]](t['get' + s[n]]() + i, u || !1), i != r && n < 6 && M(t, n + 1, (r - i) * c[n], u);
    }
    function C(t, n, r) {
        (t = t.clone().setUTCMode(!0, !0)), (n = l(n).setUTCMode(!0, !0));
        var i = 0;
        if (0 == r || 1 == r) {
            for (var o = 6; o >= r; o--) (i /= c[o]), (i += O(n, !1, o) - O(t, !1, o));
            1 == r && (i += 12 * (n.getFullYear() - t.getFullYear()));
        } else if (2 == r) {
            var s = t.toDate().setUTCHours(0, 0, 0, 0),
                a = n.toDate().setUTCHours(0, 0, 0, 0);
            i = e.round((a - s) / u) + (n - a - (t - s)) / u;
        } else i = (n - t) / [36e5, 6e4, 1e3, 1][r - 3];
        return i;
    }
    function S(n) {
        return (r = n(0)), (i = n(1)), (o = n(2)), (s = new t(g(r, i, o))), (a = U(v(r, i, o))), e.floor(e.round((s - a) / u) / 7) + 1;
        var r, i, o, s, a;
    }
    function v(e, n, r) {
        var u = new t(g(e, n, r));
        return u < U(e) ? e - 1 : u >= U(e + 1) ? e + 1 : e;
    }
    function U(e) {
        var n = new t(g(e, 0, 4));
        return n.setUTCDate(n.getUTCDate() - ((n.getUTCDay() + 6) % 7)), n;
    }
    function w(t, e, n, u) {
        var i = Y(O, t, u),
            o = Y(W, t, u);
        n === r && (n = v(i(0), i(1), i(2)));
        var s = U(n);
        u || (s = A(s)), t.setTime(s.getTime()), o(2, [i(2) + 7 * (e - 1)]);
    }
    function D(t, e, n, r, u) {
        var i = l.locales,
            o = i[l.defaultLocale] || {},
            s = Y(O, t, u);
        return (
            (n = (I(n) ? i[n] : n) || {}),
            b(
                t,
                e,
                function (t) {
                    if (r) for (var e = (7 == t ? 2 : t) - 1; e >= 0; e--) r.push(s(e));
                    return s(t);
                },
                function (t) {
                    return n[t] || o[t];
                },
                u
            )
        );
    }
    function b(t, e, n, r, u) {
        for (var i, o, s = ''; (i = e.match(f)); )
            (s += e.substr(0, i.index)),
                i[1] ? (s += z(t, i[1], n, r, u)) : i[3] ? ((o = b(t, i[4], n, r, u)), parseInt(o.replace(/\D/g, ''), 10) && (s += o)) : (s += i[7] || "'"),
                (e = e.substr(i.index + i[0].length));
        return s + e;
    }
    function z(t, e, n, u, i) {
        for (var o, s = e.length, a = ''; s > 0; ) (o = N(t, e.substr(0, s), n, u, i)) !== r ? ((a += o), (s = (e = e.substr(s)).length)) : s--;
        return a + e;
    }
    function N(t, n, r, u, i) {
        var o = l.formatters[n];
        if (I(o)) return b(t, o, r, u, i);
        if ('function' == typeof o) return o(t, i || !1, u);
        switch (n) {
            case 'fff':
                return E(r(6), 3);
            case 's':
                return r(5);
            case 'ss':
                return E(r(5));
            case 'm':
                return r(4);
            case 'mm':
                return E(r(4));
            case 'h':
                return r(3) % 12 || 12;
            case 'hh':
                return E(r(3) % 12 || 12);
            case 'H':
                return r(3);
            case 'HH':
                return E(r(3));
            case 'd':
                return r(2);
            case 'dd':
                return E(r(2));
            case 'ddd':
                return u('dayNamesShort')[r(7)] || '';
            case 'dddd':
                return u('dayNames')[r(7)] || '';
            case 'M':
                return r(1) + 1;
            case 'MM':
                return E(r(1) + 1);
            case 'MMM':
                return u('monthNamesShort')[r(1)] || '';
            case 'MMMM':
                return u('monthNames')[r(1)] || '';
            case 'yy':
                return (r(0) + '').substring(2);
            case 'yyyy':
                return r(0);
            case 't':
                return H(r, u).substr(0, 1).toLowerCase();
            case 'tt':
                return H(r, u).toLowerCase();
            case 'T':
                return H(r, u).substr(0, 1);
            case 'TT':
                return H(r, u);
            case 'z':
            case 'zz':
            case 'zzz':
                return i
                    ? 'Z'
                    : (function (t, n) {
                          var r = t.getTimezoneOffset(),
                              u = r < 0 ? '+' : '-',
                              i = e.floor(e.abs(r) / 60),
                              o = e.abs(r) % 60,
                              s = i;
                          'zz' == n ? (s = E(i)) : 'zzz' == n && (s = E(i) + ':' + E(o));
                          return u + s;
                      })(t, n);
            case 'w':
                return S(r);
            case 'ww':
                return E(S(r));
            case 'S':
                var s = r(2);
                return s > 10 && s < 20 ? 'th' : ['st', 'nd', 'rd'][(s % 10) - 1] || 'th';
        }
    }
    function H(t, e) {
        return t(3) < 12 ? e('amDesignator') : e('pmDesignator');
    }
    function F(t) {
        return !isNaN(t[0].getTime());
    }
    function O(t, e, n) {
        return t['get' + (e ? 'UTC' : '') + s[n]]();
    }
    function W(t, e, n, r) {
        t['set' + (e ? 'UTC' : '') + s[n]].apply(t, r);
    }
    function A(e) {
        return new t(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), e.getUTCMilliseconds());
    }
    function J(e, n) {
        return 32 - new t(g(e, n, 32)).getUTCDate();
    }
    function L(t) {
        return function () {
            return t.apply(r, [this].concat(k(arguments)));
        };
    }
    function Y(t) {
        var e = k(arguments, 1);
        return function () {
            return t.apply(r, e.concat(k(arguments)));
        };
    }
    function k(t, e, u) {
        return n.prototype.slice.call(t, e || 0, u === r ? t.length : u);
    }
    function x(t, e) {
        for (var n = 0; n < t.length; n++) e(t[n], n);
    }
    function I(t) {
        return 'string' == typeof t;
    }
    function Z(t) {
        return 'boolean' == typeof t;
    }
    function E(t, e) {
        for (e = e || 2, t += ''; t.length < e; ) t = '0' + t;
        return t;
    }
    (d.length = 1),
        (d.splice = n.prototype.splice),
        (d.getUTCMode = L(m)),
        (d.setUTCMode = L(y)),
        (d.getTimezoneOffset = function () {
            return m(this) ? 0 : this[0].getTimezoneOffset();
        }),
        x(s, function (t, e) {
            (d['get' + t] = function () {
                return O(this[0], m(this), e);
            }),
                8 != e &&
                    (d['getUTC' + t] = function () {
                        return O(this[0], !0, e);
                    }),
                7 != e &&
                    ((d['set' + t] = function (t) {
                        return p(this, e, t, arguments, m(this)), this;
                    }),
                    8 != e &&
                        ((d['setUTC' + t] = function (t) {
                            return p(this, e, t, arguments, !0), this;
                        }),
                        (d['add' + (a[e] || t)] = function (t, n) {
                            return M(this, e, t, n), this;
                        }),
                        (d['diff' + (a[e] || t)] = function (t) {
                            return C(this, t, e);
                        })));
        }),
        (d.getWeek = function () {
            return S(Y(O, this, !1));
        }),
        (d.getUTCWeek = function () {
            return S(Y(O, this, !0));
        }),
        (d.setWeek = function (t, e) {
            return w(this, t, e, !1), this;
        }),
        (d.setUTCWeek = function (t, e) {
            return w(this, t, e, !0), this;
        }),
        (d.addWeeks = function (t) {
            return this.addDays(7 * Number(t));
        }),
        (d.diffWeeks = function (t) {
            return C(this, t, 2) / 7;
        }),
        (l.parsers = [
            function (e, n, r) {
                var u = e.match(/^(\d{4})(-(\d{2})(-(\d{2})([T ](\d{2}):(\d{2})(:(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/);
                if (u) {
                    var i = new t(g(u[1], u[3] ? u[3] - 1 : 0, u[5] || 1, u[7] || 0, u[8] || 0, u[10] || 0, u[12] ? 1e3 * Number('0.' + u[12]) : 0));
                    return u[13] ? u[14] && i.setUTCMinutes(i.getUTCMinutes() + ('-' == u[15] ? 1 : -1) * (60 * Number(u[16]) + (u[18] ? Number(u[18]) : 0))) : n || (i = A(i)), r.setTime(i.getTime());
                }
            },
        ]),
        (l.parse = function (t) {
            return +l('' + t);
        }),
        (d.toString = function (t, e, n) {
            return t !== r && F(this) ? D(this, t, e, n, m(this)) : this[0].toString();
        }),
        (d.toUTCString = d.toGMTString =
            function (t, e, n) {
                return t !== r && F(this) ? D(this, t, e, n, !0) : this[0].toUTCString();
            }),
        (d.toISOString = function () {
            return this.toUTCString(o);
        }),
        (l.defaultLocale = ''),
        (l.locales = {
            '': {
                monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                amDesignator: 'AM',
                pmDesignator: 'PM',
            },
        }),
        (l.formatters = { i: i, u: o }),
        x(['getTime', 'valueOf', 'toDateString', 'toTimeString', 'toLocaleString', 'toLocaleDateString', 'toLocaleTimeString', 'toJSON'], function (t) {
            d[t] = function () {
                return this[0][t]();
            };
        }),
        (d.setTime = function (t) {
            return this[0].setTime(t), this;
        }),
        (d.valid = L(F)),
        (d.clone = function () {
            return new l(this);
        }),
        (d.clearTime = function () {
            return this.setHours(0, 0, 0, 0);
        }),
        (d.toDate = function () {
            return new t(this[0].getTime());
        }),
        (l.now = function () {
            return new t().getTime();
        }),
        (l.today = function () {
            return new l().clearTime();
        }),
        (l.UTC = g),
        (l.getDaysInMonth = J),
        'undefined' != typeof module && module.exports && (module.exports = l),
        'function' == typeof define &&
            define.amd &&
            define([], function () {
                return l;
            });
})(Date, Math, Array);
