Latest error situation:

```sh
trite@DESKTOP-0ACBTNR:/mnt/c/git/hackerrank-reasonml$ node src/DiagonalDifference.bs.js 
2 # manual input
Matrix size: 2 # program output
12 34 # manual input

node:internal/readline/emitKeypressEvents:74
            throw err;
            ^
{
  RE_EXN_ID: 'Failure',
  _1: 'int_of_string',
  Error: Error
      at aux (/mnt/c/git/hackerrank-reasonml/node_modules/bs-platform/lib/js/caml_format.js:161:22)
      at Object.caml_int_of_string (/mnt/c/git/hackerrank-reasonml/node_modules/bs-platform/lib/js/caml_format.js:177:24)
      at Interface.<anonymous> (/mnt/c/git/hackerrank-reasonml/src/DiagonalDifference.bs.js:39:38)
      at Interface.emit (node:events:539:35)
      at Interface.[_onLine] [as _onLine] (node:internal/readline/interface:418:12)
      at Interface.[_line] [as _line] (node:internal/readline/interface:879:18)
      at Interface.[_ttyWrite] [as _ttyWrite] (node:internal/readline/interface:1257:22)
      at ReadStream.onkeypress (node:internal/readline/interface:269:20)
      at ReadStream.emit (node:events:527:28)
      at emitKeys (node:internal/readline/utils:358:14)
}

Node.js v17.9.0
```