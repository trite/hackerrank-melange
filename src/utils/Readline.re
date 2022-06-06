// Modified/updated slightly from the original code here:
//   https://github.com/kfish610/bs-readline/blob/master/src/Readline.re

open Trelude;

type io = {
  .
    "input": in_channel,
    "output": out_channel
};

type rlType = {
  .
  [@bs.meth] "close": unit => unit,
  [@bs.meth] "write": string => unit,
  [@bs.meth] "on": (string, string => unit) => unit,
  [@bs.meth] "question": (string, string => unit) => unit,
};

// Providing an empty string produces a compiler warning now
[@bs.module "readline"]
external createInterface : io => rlType = "createInterface";

let rl = createInterface({
    "input": [%raw "process.stdin"],
    "output": [%raw "process.stdout"]
});

// Necessary for now to use `withAll` function
let lines: array(string) = [||];

/** Executes a given function with an array containing all
    program output provided until a CTRL+D is received
*/
let withAll = f => {
  rl##on("line", data => Js.Array.push(data, lines) |> ignore);
  rl##on("close", _ => f(lines |> Belt.List.fromArray));
};
