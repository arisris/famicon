/* Famicon by https://github.com/kliksob */
var m = require('mithril');
var util = require('../../utils.js');
module.exports = {
  view: function view(vnode) {
    var attrs = vnode.attrs;
    var svgAttrs = Object.assign({ xmlns: util.xmlns }, util.onlyObject(attrs.svgAttrs));
    var pathAttrs = util.onlyObject(attrs.pathAttrs);  
    return m('svg[id=circle][viewBox=0 0 512 512]', svgAttrs, m('path[d=M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z]', pathAttrs));
  }
}
