const m = require('mithril');
const { onlyObject, xmlns } = require('../../utils.js');
module.exports = {
  view({ attrs }) {
    const svgAttrs = Object.assign({xmlns}, onlyObject(attrs.svgAttrs));
    const pathAttrs = onlyObject(attrs.pathAttrs);  
    return m('svg[id=square-full][viewBox=0 0 512 512]', svgAttrs, m('path[d=M512 512H0V0h512v512z]', pathAttrs));
  }
}
