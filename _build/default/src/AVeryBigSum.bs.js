// Generated by Melange

import * as Int64 from "bs-platform/lib/es6/int64.js";
import * as Trelude from "./utils/Trelude.bs.js";
import * as Readline from "./utils/Readline.bs.js";
import * as Caml_int64 from "bs-platform/lib/es6/caml_int64.js";
import * as Caml_format from "bs-platform/lib/es6/caml_format.js";

Readline.withAll(function (arr) {
      var s = Trelude.List.get(1, arr);
      if (s !== undefined) {
        console.log(Int64.to_string(s.split(" ").map(Caml_format.caml_int64_of_string).reduce(Caml_int64.add, Caml_int64.zero)));
      } else {
        console.log("Something went wrong!");
      }
    });

var $great$great = Trelude.$great$great;

export {
  $great$great ,
}
/*  Not a pure module */
