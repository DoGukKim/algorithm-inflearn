// 시간 복잡도: O(n!)
// 공간 복잡도: O(n^2)
function main(n, m, edges) {
  let result = 0;
  const matrix = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
  const ch = Array(n + 1).fill(0);
  ch[1] = 1;

  for (let i = 0; i < m; i++) {
    const [v, e] = edges[i];
    matrix[v][e] = e;
  }

  function dfs(v) {
    if (v === n) {
      result++;
      return;
    }

    for (let i = 1; i <= n; i++) {
      if (ch[i] === 1) continue;
      ch[i] = 1;
      dfs(matrix[v][i]);
      ch[i] = 0;
    }
  }

  dfs(1);

  return result;
}

console.log(
  main(5, 9, [
    [1, 2],
    [1, 3],
    [1, 4],
    [2, 1],
    [2, 3],
    [2, 5],
    [3, 4],
    [4, 2],
    [4, 5],
  ])
);
