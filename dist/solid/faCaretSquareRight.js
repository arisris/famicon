/* Famicon by https://github.com/kliksob */
var m = require('mithril');
var util = require('../../utils.js');
module.exports = {
  view: function view(vnode) {
    var attrs = vnode.attrs;
    var svgAttrs = Object.assign({ xmlns: util.xmlns }, util.onlyObject(attrs.svgAttrs));
    var pathAttrs = util.onlyObject(attrs.pathAttrs);  
    return m('svg[id=caret-square-right][viewBox=0 0 448 512]', svgAttrs, m('path[d=M48 32h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48zm140.485 355.515l123.029-123.029c4.686-4.686 4.686-12.284 0-16.971l-123.029-123.03c-7.56-7.56-20.485-2.206-20.485 8.485v246.059c0 10.691 12.926 16.045 20.485 8.486z]', pathAttrs));
  }
}
