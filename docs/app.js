const m = require('mithril');
const solid = require("../dist/solid");
const regular = require("../dist/regular");
const brands = require("../dist/brands");
const { onlyObject } = require("../utils.js");
const randomColor = () => `#${Math.random().toString(16).slice(2,8)}`;


const modal = {
  active: false,
  toggle: e => {
    e.preventDefault();
    modal.active = true;
  },
  title: "Icon Details",
  body: ""
};

const IconList = {
  oninit({state}) {
    state.modal = {
      active: false,
      toggle: state => e => {
        e.preventDefault();
        state.modal.active = !state.modal.active;
      },
      title: "Icon Details",
      body: ""
    }
  },
  view({ attrs, state }) {
    const type = attrs.type;
    const list = onlyObject(attrs.list);
    return m(".container", (state.modal.active ? m(`.modal.active`, m(".modal-overlay", { onclick: state.modal.toggle(state) }), m(".modal-container", [
      m(".modal-header", m("a.btn.btn-clear.float-right[aria-label=close][href=#close]", { onclick: state.modal.toggle(state)}), m(".modal-title.h5", state.modal.title)),
      m(".modal-body", (state.modal.body || "Hiii"))
    ])) : null), m(".columns", Object.keys(list).map(i => {
      return m(`.col.col-3.p-2.text-center.p-0`, {
        key: i
      }, m(`a[href=#][data-tooltip=${i}].card.p-centered.p-2.tooltip`, {
        onclick: e => {
          state.modal.toggle(state)(e);
          state.modal.title = i;
          state.modal.body = m(".content", [
            m(list[i], {
              svgAttrs: {
                width: "64px",
                height: "64px"
              }
            }),
            m("pre[data-lang=HTML]", m("code", 
`// Example code
const m = require("mithril");
const ${i} = require("famicon/dist/[tabType]/${i}.js");
const ${i}Icon = m(${i}, {
  svgAttrs: {},
  pathAtrrs: {},
});
m.mount(el, ${i}Icon})
`
            ))
          ])
        }
      }, m(list[i], {
        svgAttrs: {
          width: "32px",
          height: "32px",
          fill: randomColor()
        }
      })), m("i.text-italic.text-primary", {
        style: {
          fontSize: "0.5em"
        }
      }, i));
    })));
  }
}

const IconPages = {
  tab: {
    current: 0,
    list: [solid,regular,brands],
    s: s => t => e => {
      if (s.tab.list[t]) {
        s.tab.current = t;
      } else {
        s.tab.current = 0;
      }
    }
  },
  view({ state }) {
    
    /* state.tab */
    const tabActive = t => t === state.tab.current ? ".active" : "";
    const tabSwitch = state.tab.s(state);
    const tabCurrent = state.tab.list[state.tab.current];
    const tabCount = t => Object.keys(t).length;
    
    return [
      m(".navbar.px-2.bg-primary", {
        style: {
          alignItems: "center",
          height: "54px"
        }
      }, [
        m(".navbar-section", [
          m("a[href=https://github.com/kliksob/famicon/blob/master/README.md][target=_blank].text-light", "README")
        ]),
        m(".navbar-center", m(".navbar-brand.h4", "Famicon")),
        m(".navbar-section", [
          m("a[href=https://npmjs.com/package/famicon][target=_blank].btn.btn-action.btn-primary.mr-2", { style: "border:none" }, m(brands.faNpm, {
            svgAttrs: {
              style: {
                width: "24px",
                height: "24px",
                fill: "red"
              }
            }
          })),
          m("a[href=https://github.com/kliksob/famicon][target=_blank].btn.btn-action.btn-primary", { style: "border:none" }, m(brands.faGithub, {
            svgAttrs: {
              style: {
                width: "24px",
                height: "24px"
              }
            }
          }))
        ])
      ]),
      //m(".divider"),
      m("ul.tab.tab-block", [
        m("li.tab-item"+tabActive(0), m(`a.badge[data-badge=${tabCount(solid)}]`, {
          onclick: tabSwitch(0)
        }, "Solid")),
        m("li.tab-item"+tabActive(1), m(`a.badge[data-badge=${tabCount(regular)}]`, {
          onclick: tabSwitch(1)
        }, "Regular")),
        m("li.tab-item"+tabActive(2), m(`a.badge[data-badge=${tabCount(brands)}]`, {
          onclick: tabSwitch(2)
        }, "Brands")),
      ]),
      m(IconList, { list: tabCurrent })
    ]
  }
}

m.mount(document.body, IconPages);