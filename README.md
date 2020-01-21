## Famicon
Fontawesome svg icon component for mithril
https://kliksob.github.io/famicon/

## How to use

```bash
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
### Build example docs

```sh
npm install -g parcel-bundler
npm run watch-docs
npm run build-docs
```
### Development
Make sure your os is linux. bechause we use shelljs

```sh
node build.js
```
