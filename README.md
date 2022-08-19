# IMPORTANT: Execution order on these steps is VITAL

``` bash
$ npm install
$ esy
$ npm run hackify ./_build/default/src/path_to_file.bs.js
```

```bash
trite@DESKTOP-0ACBTNR:~/git/hackerrank-melange$ npm install

added 125 packages, and audited 126 packages in 1s

17 packages are looking for funding
  run `npm fund` for details

1 high severity vulnerability

To address all issues, run:
  npm audit fix

Run `npm audit` for details.
trite@DESKTOP-0ACBTNR:~/git/hackerrank-melange$ esy
info esy 0.6.12-dev (using esy.json)
trite@DESKTOP-0ACBTNR:~/git/hackerrank-melange$ npm run hackify ./_build/default/src/AVeryBigSum.bs.js 

> hackerrank-melange-webpack-only-part@0.1.0 hackify
> webpack build -t "node" --mode production --entry  "./_build/default/src/AVeryBigSum.bs.js"

asset main.js 9.68 KiB [compared for emit] [minimized] (name: main)
orphan modules 159 KiB [orphan] 29 modules
./_build/default/src/AVeryBigSum.bs.js + 22 modules 121 KiB [not cacheable] [built] [code generated]
webpack 5.72.1 compiled successfully in 832 ms
trite@DESKTOP-0ACBTNR:~/git/hackerrank-melange$ 
```


# melange-basic-template

A simple project template using [Melange](https://github.com/melange-re/melange).

## Getting started

You will need [esy](https://esy.sh) package manager to obtain OCaml and Melange sources. See `esy` installation instructions [here](https://esy.sh/docs/en/getting-started.html#install-esy).

Once `esy` is available, run

```bash
esy
```

to install all dependencies.

Then:

```bash
esy build
```

to build the project. This command, as constructed in `esy.json`,

1. generates a symbolically linked dir `bs-platform` in `node_modules`, which is helpful when using JavaScript bundlers like Webpack that expect to find Melange stdlib JavaScript files under `node_modules/bs-platform`.
2. builds the project.

Now you should see a `_build` folder with all generated files, you can run

```bash
esy x node _build/default/src/Main.bs.js
```

to see the result of the script running.
