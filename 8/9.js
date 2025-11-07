// 시간 복잡도: O(n^m)
// 공간 복잡도: O(m)
function main(n, arr, m) {
  let result = 500;

  function dfs(level, sum) {
    if (sum > m) return;
    if (level > n) return;
    if (sum === m) {
      result = Math.min(result, level);
      return;
    }

    for (let i = 0; i < n; i++) {
      dfs(level + 1, sum + arr[i]);
    }
  }

  dfs(0, 0);

  return result;
}

console.log(main(3, [1, 2, 5], 15));
