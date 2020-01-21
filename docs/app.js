const m = require('mithril');
const solid = require("../dist/solid");
const regular = require("../dist/regular");
const brands = require("../dist/brands");
function randomColor() {
    return "#" + Math.random().toString(16).slice(2,8);
}
const makeIcon = ic => Object.keys(ic).map(i => {
  return m(".col.col-3.p-2.text-center", { key: i }, m(`a.card.p-centered.p-2.tooltip[data-tooltip=${i}]`, m(ic[i], {
    svgAttrs: {
      width: "32px",
      height: "32px",
      fill: randomColor()
    }
  })));
});

const tab = {
  active: 0,
  list: [makeIcon(solid), makeIcon(regular), makeIcon(brands)],
  switch: (t) => ev => {
    if (tab.list[t]) {
      tab.active = t;
    } else {
      tab.active = 0;
    }
  },
}
const IconPages = {
  view(v) {
    const active = t => t === tab.active ? ".active" : "";
    return [
      m("h3.text-center", "Icon List"),
      /*m(".input-group.input-inline.float-right", [
          m("input.form-input.input-sm[type=search]", {}),
          m("button.btn.btn-primary.btn-sm.input-group-btn", "Search")
      ]),
      m(".clearfix"),*/
      m(".divider"),
      m("ul.tab.tab-block", [
        m("li.tab-item"+active(0), m(`a.badge[data-badge=${Object.keys(solid).length}]`, {
          onclick: tab.switch(0)
        }, "Solid")),
        m("li.tab-item"+active(1), m(`a.badge[data-badge=${Object.keys(regular).length}]`, {
          onclick: tab.switch(1)
        }, "Regular")),
        m("li.tab-item"+active(2), m(`a.badge[data-badge=${Object.keys(brands).length}]`, {
          onclick: tab.switch(2)
        }, "Brands")),
      ]),
      m(".container", m(".columns", tab.list[tab.active]))
    ]
  }
}

m.mount(document.body, IconPages);