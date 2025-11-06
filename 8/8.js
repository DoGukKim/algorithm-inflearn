// 시간 복잡도: O(n^m)
// 공간 복잡도: O(m)
function main(n, m) {
  const numbers = Array.from({ length: n }, (_, i) => i + 1);

  function dfs(level, result) {
    if (level === m) {
      console.log(result);
      return;
    }

    for (let i = 0; i < n; i++) {
      result.push(numbers[i]);
      dfs(level + 1, result);
      result.pop();
    }
  }

  dfs(0, []);
}

console.log(main(3, 2));
