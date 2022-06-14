// https://www.hackerrank.com/challenges/compare-the-triplets/problem
module T = Trelude;

Readline.withAll(arr => {

    let parseLine = (lineNumber) =>
      arr
      |> T.List.get(lineNumber)
      |> T.Option.getExn
      |> T.String.split(" ")
      |> T.Array.map(int_of_string);

    let items1 = parseLine(0);
    let items2 = parseLine(1);

    let (ans1, ans2) = 
        items1
        |> T.Array.mapi( (item1, i) =>
            compare(item1, items2[i])
            |> fun
                | -1 => (0,1)
                | 0 => (0,0)
                | 1 => (1,0)
                | _ => failwith("This shouldn't be possible!")
        )
        |> T.Array.reduce(((ll, lr), (rl, rr)) => (ll + rl, lr + rr), (0, 0));

    let ans1 = string_of_int(ans1);
    let ans2 = string_of_int(ans2);

    Js.log(ans1 ++ " " ++ ans2);

});