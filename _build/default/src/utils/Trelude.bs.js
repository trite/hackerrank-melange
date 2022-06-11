// Generated by Melange
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Js_list = require("bs-platform/lib/js/js_list.js");
var Belt_List = require("bs-platform/lib/js/belt_List.js");
var Belt_Option = require("bs-platform/lib/js/belt_Option.js");

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

exports.$great$great = $great$great;
exports.$caret$colon = $caret$colon;
exports.sum = sum;
exports.range = range;
exports.rangeArr = rangeArr;
exports.List = List;
exports.$$Option = $$Option;
exports.$$String = $$String;
exports.$$Array = $$Array;
/* No side effect */
