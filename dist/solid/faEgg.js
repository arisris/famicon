const m = require('mithril');
const { onlyObject, xmlns } = require('../../utils.js');
module.exports = {
  view({ attrs }) {
    const svgAttrs = Object.assign({xmlns}, onlyObject(attrs.svgAttrs));
    const pathAttrs = onlyObject(attrs.pathAttrs);  
    return m('svg[id=egg][viewBox=0 0 384 512]', svgAttrs, m('path[d=M192 0C86 0 0 214 0 320s86 192 192 192 192-86 192-192S298 0 192 0z]', pathAttrs));
  }
}
