/* Famicon by https://github.com/kliksob */
var m = require('mithril');
var util = require('../../utils.js');
module.exports = {
  view: function view(vnode) {
    var attrs = vnode.attrs;
    var svgAttrs = Object.assign({ xmlns: util.xmlns }, util.onlyObject(attrs.svgAttrs));
    var pathAttrs = util.onlyObject(attrs.pathAttrs);  
    return m('svg[id=grimace][viewBox=0 0 496 512]', svgAttrs, m('path[d=M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zM144 400h-8c-17.7 0-32-14.3-32-32v-8h40v40zm0-56h-40v-8c0-17.7 14.3-32 32-32h8v40zm-8-136c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32zm72 192h-48v-40h48v40zm0-56h-48v-40h48v40zm64 56h-48v-40h48v40zm0-56h-48v-40h48v40zm64 56h-48v-40h48v40zm0-56h-48v-40h48v40zm-8-104c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm64 128c0 17.7-14.3 32-32 32h-8v-40h40v8zm0-24h-40v-40h8c17.7 0 32 14.3 32 32v8z]', pathAttrs));
  }
}
