// 시간 복잡도: O(n)
// 공간 복잡도: O(n)
function main(n) {
  function dfs(m) {
    if (m === 1) {
      return 1;
    }

    return m * dfs(m - 1);
  }

  return dfs(n);
}

console.log(main(5));
