// Generated by Melange

import * as Curry from "melange/lib/es6/curry.js";
import * as Js_list from "melange/lib/es6/js_list.js";
import * as Belt_List from "melange/lib/es6/belt_List.js";
import * as Belt_Option from "melange/lib/es6/belt_Option.js";

function $great$great(f, g, x) {
  return Curry._1(g, Curry._1(f, x));
}

function $caret$colon(item, lst) {
  return {
          hd: item,
          tl: lst
        };
}

function sum(param) {
  return param.reduce((function (prim0, prim1) {
                return prim0 + prim1 | 0;
              }), 0);
}

function range(x, limit) {
  if (x >= limit) {
    return /* [] */0;
  } else {
    return {
            hd: x,
            tl: range(x + 1 | 0, limit)
          };
  }
}

function rangeArr(x, limit) {
  return Js_list.toVector(range(x, limit));
}

function get(i, lst) {
  return Belt_List.get(lst, i);
}

var List = {
  get: get,
  nth: get
};

function map(f, opt) {
  return Belt_Option.map(opt, f);
}

var $$Option = {
  map: map,
  getExn: Belt_Option.getExn
};

function split(prim0, prim1) {
  return prim1.split(prim0);
}

var $$String = {
  split: split
};

function map$1(prim0, prim1) {
  return prim1.map(Curry.__1(prim0));
}

function get$1(i, lst) {
  return lst[i];
}

function mapi(prim0, prim1) {
  return prim1.map(Curry.__2(prim0));
}

function reduce(prim0, prim1, prim2) {
  return prim2.reduce(Curry.__2(prim0), prim1);
}

var $$Array = {
  map: map$1,
  get: get$1,
  mapi: mapi,
  reduce: reduce
};

export {
  $great$great ,
  $caret$colon ,
  sum ,
  range ,
  rangeArr ,
  List ,
  $$Option ,
  $$String ,
  $$Array ,
}
/* No side effect */
