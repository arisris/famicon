/* Famicon by https://github.com/kliksob */
var m = require('mithril');
var util = require('../../utils.js');
module.exports = {
  view: function view(vnode) {
    var attrs = vnode.attrs;
    var svgAttrs = Object.assign({ xmlns: util.xmlns }, util.onlyObject(attrs.svgAttrs));
    var pathAttrs = util.onlyObject(attrs.pathAttrs);  
    return m('svg[id=egg][viewBox=0 0 384 512]', svgAttrs, m('path[d=M192 0C86 0 0 214 0 320s86 192 192 192 192-86 192-192S298 0 192 0z]', pathAttrs));
  }
}
