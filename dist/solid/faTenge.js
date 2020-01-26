/* Famicon by https://github.com/kliksob */
var m = require('mithril');
var util = require('../../utils.js');
module.exports = {
  view: function view(vnode) {
    var attrs = vnode.attrs;
    var svgAttrs = Object.assign({ xmlns: util.xmlns }, util.onlyObject(attrs.svgAttrs));
    var pathAttrs = util.onlyObject(attrs.pathAttrs);  
    return m('svg[id=tenge][viewBox=0 0 384 512]', svgAttrs, m('path[d=M372 160H12c-6.6 0-12 5.4-12 12v56c0 6.6 5.4 12 12 12h140v228c0 6.6 5.4 12 12 12h56c6.6 0 12-5.4 12-12V240h140c6.6 0 12-5.4 12-12v-56c0-6.6-5.4-12-12-12zm0-128H12C5.4 32 0 37.4 0 44v56c0 6.6 5.4 12 12 12h360c6.6 0 12-5.4 12-12V44c0-6.6-5.4-12-12-12z]', pathAttrs));
  }
}
