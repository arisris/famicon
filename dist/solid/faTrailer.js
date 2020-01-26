/* Famicon by https://github.com/kliksob */
var m = require('mithril');
var util = require('../../utils.js');
module.exports = {
  view: function view(vnode) {
    var attrs = vnode.attrs;
    var svgAttrs = Object.assign({ xmlns: util.xmlns }, util.onlyObject(attrs.svgAttrs));
    var pathAttrs = util.onlyObject(attrs.pathAttrs);  
    return m('svg[id=trailer][viewBox=0 0 640 512]', svgAttrs, m('path[d=M624,320H544V80a16,16,0,0,0-16-16H16A16,16,0,0,0,0,80V368a16,16,0,0,0,16,16H65.61c7.83-54.21,54-96,110.39-96s102.56,41.79,110.39,96H624a16,16,0,0,0,16-16V336A16,16,0,0,0,624,320ZM96,243.68a176.29,176.29,0,0,0-32,20.71V136a8,8,0,0,1,8-8H88a8,8,0,0,1,8,8Zm96-18.54c-5.31-.49-10.57-1.14-16-1.14s-10.69.65-16,1.14V136a8,8,0,0,1,8-8h16a8,8,0,0,1,8,8Zm96,39.25a176.29,176.29,0,0,0-32-20.71V136a8,8,0,0,1,8-8h16a8,8,0,0,1,8,8ZM384,320H352V136a8,8,0,0,1,8-8h16a8,8,0,0,1,8,8Zm96,0H448V136a8,8,0,0,1,8-8h16a8,8,0,0,1,8,8Zm-304,0a80,80,0,1,0,80,80A80,80,0,0,0,176,320Zm0,112a32,32,0,1,1,32-32A32,32,0,0,1,176,432Z]', pathAttrs));
  }
}
