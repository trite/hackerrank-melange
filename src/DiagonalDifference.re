// https://www.hackerrank.com/challenges/diagonal-difference/problem

module T = Trelude;

let (>>) = T.(>>);

let diag1: array(array(int)) => int =
  matrix => {
    Trelude.rangeArr(0, matrix |> Js.Array.length)
    |> Js.Array.map(x => matrix[x][x])
    |> Trelude.sum;
  };

let diag2: array(array(int)) => int =
  matrix => {
    let len = matrix |> Js.Array.length;
    Trelude.rangeArr(0, len)
    |> Js.Array.map(x => matrix[len - x - 1][x])
    |> Trelude.sum;
  };

let diagonalDifference: array(array(int)) => int =
  matrix => {
    let d1 = diag1(matrix);
    let d2 = diag2(matrix);
    abs(d1 - d2);
  };

let parse: array(string) => array(array(int)) =
  Js.Array.map(Js.String.split(" ") >> Js.Array.map(int_of_string));

let doWork = parse >> diagonalDifference;

let mapOrLog = (msg, f, opt) =>
  opt
  |> (
    fun
    | None => Js.log(msg)
    | Some(x) => f(x)
  );

Readline.withAll(arr => {
  T.List.pop(arr)
  |> mapOrLog("Oops!", ((_, rest)) =>
       rest |> Js.List.toVector |> doWork |> Js.log
     )
});