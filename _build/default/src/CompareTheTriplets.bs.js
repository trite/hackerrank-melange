// Generated by Melange
'use strict';

var Caml = require("bs-platform/lib/js/caml.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Stdlib = require("bs-platform/lib/js/stdlib.js");
var Trelude = require("./utils/Trelude.bs.js");
var Readline = require("./utils/Readline.bs.js");
var Caml_array = require("bs-platform/lib/js/caml_array.js");
var Caml_format = require("bs-platform/lib/js/caml_format.js");

Readline.withAll(function (arr) {
      var parseLine = function (lineNumber) {
        return Trelude.$$Array.map(Caml_format.caml_int_of_string, Trelude.$$String.split(" ", Curry._1(Trelude.$$Option.getExn, Trelude.List.get(lineNumber, arr))));
      };
      var items1 = parseLine(0);
      var items2 = parseLine(1);
      var match = Trelude.$$Array.reduce((function (param, param$1) {
              return [
                      param[0] + param$1[0] | 0,
                      param[1] + param$1[1] | 0
                    ];
            }), [
            0,
            0
          ], Trelude.$$Array.mapi((function (item1, i) {
                  var param = Caml.caml_int_compare(item1, Caml_array.get(items2, i));
                  switch (param) {
                    case -1 :
                        return [
                                0,
                                1
                              ];
                    case 0 :
                        return [
                                0,
                                0
                              ];
                    case 1 :
                        return [
                                1,
                                0
                              ];
                    default:
                      return Stdlib.failwith("This shouldn't be possible!");
                  }
                }), items1));
      var ans1 = String(match[0]);
      var ans2 = String(match[1]);
      console.log(ans1 + (" " + ans2));
    });

/*  Not a pure module */