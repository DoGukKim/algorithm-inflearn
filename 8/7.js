// 시간 복잡도: O(2^n)
// 공간 복잡도: O(n)
function main(n, m, arr) {
  let result = 0;

  function dfs(level, sum, time) {
    if (time > m) return;
    if (level === n) {
      result = Math.max(result, sum);
      return;
    }

    dfs(level + 1, sum + arr[level][0], time + arr[level][1]);
    dfs(level + 1, sum, time);
  }

  dfs(0, 0, 0);

  return result;
}

console.log(
  main(5, 20, [
    [10, 5],
    [25, 12],
    [15, 8],
    [6, 3],
    [7, 4],
  ])
);
