// https://www.hackerrank.com/challenges/diagonal-difference/problem


let (>>) = (f, g, x) => g(f(x));

let diag1: (array(array(int))) => int = (matrix) => {
    Trelude.rangeArr(0, matrix |> Js.Array.length)
    |> Js.Array.map(x => matrix[x][x])
    |> Trelude.sum
};


let diag2: (array(array(int))) => int = (matrix) => {
    let len = matrix |> Js.Array.length;
    Trelude.rangeArr(0, len)
    |> Js.Array.map(x => matrix[len-x-1][x])
    |> Trelude.sum
};
// let diag2: (int, array(array(int))) => int = (len, matrix) => {
//     rangeArr(0,len)
//     |> Js.Array.map(x => matrix[len-x-1][x])
//     |> sum
// };

let diagonalDifference: (array(array(int))) => int = (matrix) => {
    let d1 = diag1(matrix);
    let d2 = diag2(matrix);
    abs(d1 - d2)
};

let parse: (array(string)) => array(array(int)) = 
    Js.Array.map(
        Js.String.split(" ")
        >> Js.Array.map(int_of_string)
    );

// Readline.readLine(matrixSize => {
//     let matrixSize = matrixSize |> int_of_string;

//     Readline.readLines(matrixSize, true, (arr) => {
//         Js.log(arr);

//         arr
//         |> parse
//         |> diagonalDifference
//         |> string_of_int
//         |> Js.log
//     })
// });

module Async = {
    let let_ = (prom, cb) => Js.Promise.then_(cb, prom);
}

let go = () => {
    Js.log("Ask for first value");

    // let%Async matrixSize
};

go();
