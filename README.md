# ctrl-xcv
A synchronous easy-to-use antifeature-rich dir/file move/copy/paste lib/cli.

Made mainly to test out publishing to npm.

## Install

Run

```
npm i ctrl-xcv
```

## Usage

On the cli:

```
ctrl-xcv source target [options]
```
where the `[options]` are:

* `-x` to move
* `-c` to copy
* `-f` to write to `target` even if `target` is not empty

As a module:

```js
const ctrl = require('ctrl-xcv');

//Copy item
ctrl.c("/path/of/source", "/path/to/copy/to");
//Move item
ctrl.x("/path/of/source", "/path/to/copy/to");

//Last argument forces overwrite to target
ctrl.c("/path/of/source", "/path/that/already/has/something");
```