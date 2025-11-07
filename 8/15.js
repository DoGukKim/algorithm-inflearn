// 시간 복잡도: O(nCk)
// 공간 복잡도: O(n)
function main(n, k, arr, m) {
  let result = 0;

  function dfs(level, j, sum) {
    if (level === k) {
      if (sum % m === 0) result++;
      return;
    }

    for (let i = j; i < n; i++) {
      dfs(level + 1, i + 1, sum + arr[i]);
    }
  }

  dfs(0, 0, 0);

  return result;
}

console.log(main(5, 3, [2, 4, 5, 8, 12], 6));
