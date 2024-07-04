(() => {
  "use strict";
  var t = {
      320: (t, o) => {
        Object.defineProperty(o, "__esModule", { value: !0 }),
          (o.ttttt = void 0),
          (o.ttttt = () => {
            console.log("ㅎㅇ");
          });
      },
    },
    o = {};
  function e(r) {
    var s = o[r];
    if (void 0 !== s) return s.exports;
    var l = (o[r] = { exports: {} });
    return t[r](l, l.exports, e), l.exports;
  }
  (() => {
    const t = e(320);
    console.log(1),
      console.log(1),
      console.log(1),
      console.log(1),
      (0, t.ttttt)();
  })();
})();
