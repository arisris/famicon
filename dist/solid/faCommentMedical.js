/* Famicon by https://github.com/kliksob */
var m = require('mithril');
var util = require('../../utils.js');
module.exports = {
  view: function view(vnode) {
    var attrs = vnode.attrs;
    var svgAttrs = Object.assign({ xmlns: util.xmlns }, util.onlyObject(attrs.svgAttrs));
    var pathAttrs = util.onlyObject(attrs.pathAttrs);  
    return m('svg[id=comment-medical][viewBox=0 0 512 512]', svgAttrs, m('path[d=M256 32C114.62 32 0 125.12 0 240c0 49.56 21.41 95 57 130.74C44.46 421.05 2.7 466 2.2 466.5A8 8 0 0 0 8 480c66.26 0 116-31.75 140.6-51.38A304.66 304.66 0 0 0 256 448c141.39 0 256-93.12 256-208S397.39 32 256 32zm96 232a8 8 0 0 1-8 8h-56v56a8 8 0 0 1-8 8h-48a8 8 0 0 1-8-8v-56h-56a8 8 0 0 1-8-8v-48a8 8 0 0 1 8-8h56v-56a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v56h56a8 8 0 0 1 8 8z]', pathAttrs));
  }
}
