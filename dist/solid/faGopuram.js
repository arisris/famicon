/* Famicon by https://github.com/kliksob */
var m = require('mithril');
var util = require('../../utils.js');
module.exports = {
  view: function view(vnode) {
    var attrs = vnode.attrs;
    var svgAttrs = Object.assign({ xmlns: util.xmlns }, util.onlyObject(attrs.svgAttrs));
    var pathAttrs = util.onlyObject(attrs.pathAttrs);  
    return m('svg[id=gopuram][viewBox=0 0 512 512]', svgAttrs, m('path[d=M496 352h-16V240c0-8.8-7.2-16-16-16h-16v-80c0-8.8-7.2-16-16-16h-16V16c0-8.8-7.2-16-16-16s-16 7.2-16 16v16h-64V16c0-8.8-7.2-16-16-16s-16 7.2-16 16v16h-64V16c0-8.8-7.2-16-16-16s-16 7.2-16 16v16h-64V16c0-8.8-7.2-16-16-16S96 7.2 96 16v112H80c-8.8 0-16 7.2-16 16v80H48c-8.8 0-16 7.2-16 16v112H16c-8.8 0-16 7.2-16 16v128c0 8.8 7.2 16 16 16h80V352h32V224h32v-96h32v96h-32v128h-32v160h80v-80c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16v80h80V352h-32V224h-32v-96h32v96h32v128h32v160h80c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16zM232 176c0-8.8 7.2-16 16-16h16c8.8 0 16 7.2 16 16v48h-48zm56 176h-64v-64c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16z]', pathAttrs));
  }
}
