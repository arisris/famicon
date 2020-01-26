/* Famicon by https://github.com/kliksob */
var m = require('mithril');
var util = require('../../utils.js');
module.exports = {
  view: function view(vnode) {
    var attrs = vnode.attrs;
    var svgAttrs = Object.assign({ xmlns: util.xmlns }, util.onlyObject(attrs.svgAttrs));
    var pathAttrs = util.onlyObject(attrs.pathAttrs);  
    return m('svg[id=houzz][viewBox=0 0 448 512]', svgAttrs, m('path[d=M275.9 330.7H171.3V480H17V32h109.5v104.5l305.1 85.6V480H275.9z]', pathAttrs));
  }
}
