// https://www.hackerrank.com/challenges/a-very-big-sum/problem
module T = Trelude;
let (>>) = T.(>>);

Readline.withAll(arr => {
  arr
  |> T.List.get(1)
  |> (
    fun
    | None => Js.log("Something went wrong!")
    | Some(s) =>
      s
      |> Js.String.split(" ")
      |> Js.Array.map(Int64.of_string)
      |> Js.Array.reduce(Int64.add, 0L)
      |> Int64.to_string
      |> Js.log
  )
});
