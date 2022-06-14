// Function composition
let (>>) = (f, g, x) => g(f(x));

// List cons operator
let (^:) = (item, lst) => [item, ...lst];

// Sum an integer array
let sum = Js.Array.reduce((+), 0);

// Produce a list of [x..limit] which is inclusive of `x` and exclusive of `limit`
let rec range = (x, limit) => x >= limit ? [] : x ^: range(x + 1, limit);

// Produce an array of [x..limit] which is inclusive of `x` and exclusive of `limit`
let rangeArr = (x, limit) => range(x, limit) |> Js.List.toVector;

module List = {
  let get = (i, lst) => Belt.List.get(lst, i);
  let nth = get;
  let map = (f, lst) => Belt.List.map(lst, f);

  let pop = lst => Belt.List.splitAt(lst, 1);
};

module Option = {
  let map = (f, opt) => Belt.Option.map(opt, f);
  let getExn = Belt.Option.getExn;
  let mapWithDefault = (f, def, o) => Belt.Option.mapWithDefault(o, def, f);
};

module String = {
  let split = Js.String.split;
};

module Array = {
  let map = Js.Array.map;
  let get = (i, lst) => Js.Array.unsafe_get(lst, i);
  let mapi = Js.Array.mapi;
  let reduce = Js.Array.reduce;
};