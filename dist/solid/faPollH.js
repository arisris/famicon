/* Famicon by https://github.com/kliksob */
var m = require('mithril');
var util = require('../../utils.js');
module.exports = {
  view: function view(vnode) {
    var attrs = vnode.attrs;
    var svgAttrs = Object.assign({ xmlns: util.xmlns }, util.onlyObject(attrs.svgAttrs));
    var pathAttrs = util.onlyObject(attrs.pathAttrs);  
    return m('svg[id=poll-h][viewBox=0 0 448 512]', svgAttrs, m('path[d=M448 432V80c0-26.5-21.5-48-48-48H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48zM112 192c-8.84 0-16-7.16-16-16v-32c0-8.84 7.16-16 16-16h128c8.84 0 16 7.16 16 16v32c0 8.84-7.16 16-16 16H112zm0 96c-8.84 0-16-7.16-16-16v-32c0-8.84 7.16-16 16-16h224c8.84 0 16 7.16 16 16v32c0 8.84-7.16 16-16 16H112zm0 96c-8.84 0-16-7.16-16-16v-32c0-8.84 7.16-16 16-16h64c8.84 0 16 7.16 16 16v32c0 8.84-7.16 16-16 16h-64z]', pathAttrs));
  }
}
