// 시간 복잡도: O(n^2)
// 공간 복잡도: O(1)
function main(n, matrix) {
  let result = 0;

  let diagSum1 = 0;
  let diagSum2 = 0;

  for (let x = 0; x < n; x++) {
    let rowSum = 0;
    let colSum = 0;

    for (let y = 0; y < n; y++) {
      rowSum += matrix[x][y];
      colSum += matrix[y][x];
    }

    diagSum1 += matrix[x][x];
    diagSum2 += matrix[x][n - x - 1];

    result = Math.max(result, rowSum, colSum);
  }

  return Math.max(result, diagSum1, diagSum2);
}

console.log(
  main(5, [
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19],
  ])
);
