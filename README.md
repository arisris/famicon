## Famicon
Fontawesome svg icon component for mithril

## How to use

```sh
npm install famicon
```

```js
const m = require("mithril");
const faIconName = require("famicon/dist/solid/faIconName");

m(faIconName, {
  svgAttrs: {}, // svg attributes eg. style
  pathAttrs: {} // path attributes
});
```

### all icon

```js
const { solid } = require("famicon");
const { faIconName } = solid;
```

### all icon type
```js
const { faIconName } = require("famicon/dist/solid");
```

### individual icon [recomended]

```js
const faIconName = require("famicon/dist/solid/faIconName");
```


