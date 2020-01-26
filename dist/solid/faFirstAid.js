/* Famicon by https://github.com/kliksob */
var m = require('mithril');
var util = require('../../utils.js');
module.exports = {
  view: function view(vnode) {
    var attrs = vnode.attrs;
    var svgAttrs = Object.assign({ xmlns: util.xmlns }, util.onlyObject(attrs.svgAttrs));
    var pathAttrs = util.onlyObject(attrs.pathAttrs);  
    return m('svg[id=first-aid][viewBox=0 0 576 512]', svgAttrs, m('path[d=M0 80v352c0 26.5 21.5 48 48 48h48V32H48C21.5 32 0 53.5 0 80zm128 400h320V32H128v448zm64-248c0-4.4 3.6-8 8-8h56v-56c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v56h56c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8h-56v56c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-56h-56c-4.4 0-8-3.6-8-8v-48zM528 32h-48v448h48c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z]', pathAttrs));
  }
}
