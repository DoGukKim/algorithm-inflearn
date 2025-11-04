// 시간 복잡도: O(n^2)
// 공간 복잡도: O(1)
function main(n, matrix) {
  let result = 0;

  for (let x = 0; x < n; x++) {
    for (let y = 0; y < n; y++) {
      const current = matrix[x][y];
      const top = matrix[x - 1]?.[y] ?? 0;
      const bottom = matrix[x + 1]?.[y] ?? 0;
      const left = matrix[x]?.[y - 1] ?? 0;
      const right = matrix[x]?.[y + 1] ?? 0;

      if (
        current > top &&
        current > bottom &&
        current > left &&
        current > right
      ) {
        result++;
      }
    }
  }

  return result;
}

console.log(
  main(5, [
    [5, 3, 7, 2, 3],
    [3, 7, 1, 6, 1],
    [7, 2, 5, 3, 4],
    [4, 3, 6, 4, 1],
    [8, 7, 3, 5, 2],
  ])
);
