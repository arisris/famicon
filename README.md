## Famicon
Fontawesome svg icon component for mithril

## How to use

$ npm install famicon

```js
const m = require("mithril");
const faIconName = require("famicon/dist/solid/faIconName");

m(faIconName, {
  svgAttrs: {}, // svg attributes eg. style
  pathAttrs: {} // path attributes
});
```

### all icon

``
const { solid } = require("famicon");
const { faIconName } = solid;
``

### all icon type
``
const { faIconName } = require("famicon/dist/solid");
``

### individual icon [recomended]

``
const faIconName = require("famicon/dist/solid/faIconName");
``


