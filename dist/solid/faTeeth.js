/* Famicon by https://github.com/kliksob */
var m = require('mithril');
var util = require('../../utils.js');
module.exports = {
  view: function view(vnode) {
    var attrs = vnode.attrs;
    var svgAttrs = Object.assign({ xmlns: util.xmlns }, util.onlyObject(attrs.svgAttrs));
    var pathAttrs = util.onlyObject(attrs.pathAttrs);  
    return m('svg[id=teeth][viewBox=0 0 640 512]', svgAttrs, m('path[d=M544 0H96C42.98 0 0 42.98 0 96v320c0 53.02 42.98 96 96 96h448c53.02 0 96-42.98 96-96V96c0-53.02-42.98-96-96-96zM160 368c0 26.51-21.49 48-48 48s-48-21.49-48-48v-64c0-8.84 7.16-16 16-16h64c8.84 0 16 7.16 16 16v64zm0-128c0 8.84-7.16 16-16 16H80c-8.84 0-16-7.16-16-16v-64c0-26.51 21.49-48 48-48s48 21.49 48 48v64zm144 120c0 30.93-25.07 56-56 56s-56-25.07-56-56v-56c0-8.84 7.16-16 16-16h80c8.84 0 16 7.16 16 16v56zm0-120c0 8.84-7.16 16-16 16h-80c-8.84 0-16-7.16-16-16v-88c0-30.93 25.07-56 56-56s56 25.07 56 56v88zm144 120c0 30.93-25.07 56-56 56s-56-25.07-56-56v-56c0-8.84 7.16-16 16-16h80c8.84 0 16 7.16 16 16v56zm0-120c0 8.84-7.16 16-16 16h-80c-8.84 0-16-7.16-16-16v-88c0-30.93 25.07-56 56-56s56 25.07 56 56v88zm128 128c0 26.51-21.49 48-48 48s-48-21.49-48-48v-64c0-8.84 7.16-16 16-16h64c8.84 0 16 7.16 16 16v64zm0-128c0 8.84-7.16 16-16 16h-64c-8.84 0-16-7.16-16-16v-64c0-26.51 21.49-48 48-48s48 21.49 48 48v64z]', pathAttrs));
  }
}
