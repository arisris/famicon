const sh = require("shelljs");

function cm(prop) {
  const { icon, iconName } = prop;
  return `/* Famicon by https://github.com/kliksob */
var m = require('"mithril"');
var util = require('"../../utils.js"');
module.exports = {
  view: function view(vnode) {
    var attrs = vnode.attrs;
    var svgAttrs = Object.assign({ xmlns: util.xmlns }, util.onlyObject(attrs.svgAttrs));
    var pathAttrs = util.onlyObject(attrs.pathAttrs);  
    return m('"svg[id=${iconName}][viewBox=0 0 ${icon[0]} ${icon[1]}]"', svgAttrs, m('"path[d=${icon[4]}]"', pathAttrs));
  }
}`;
}
async function build(fa, outDir) {
  const fas = fa[fa.prefix];
  const op = { async: true };
  await sh.rm("-rf", outDir);
  await sh.mkdir("-p", outDir);
  Object.keys(fas).forEach(async (name) => {
    try {
      await sh.exec(`echo "${cm(fas[name])}" > ${outDir}/${name}.js`, op);
      await sh.exec(`echo "exports.${name} = require('"./${name}.js"');" >> ${outDir}/index.js`, op);
    } catch(e) {
      console.error(e)
    }
  });
}

(async () => {
  try {
    await sh.echo("Please wait...");
    await build(require("@fortawesome/free-solid-svg-icons"), "dist/solid");
    await sh.echo("Done build solid..");
    
    await build(require("@fortawesome/free-brands-svg-icons"), "dist/brands");
    await sh.echo("Done build brands..");
    
    await build(require("@fortawesome/free-regular-svg-icons"), "dist/regular");
    await sh.echo("Done build regular..");
    
    await sh.echo("Done....");
    await sh.echo("Cleaning up...");
  } catch(e) {
    throw e;
    process.exit(1);
  }
})();