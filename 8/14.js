// 시간 복잡도: O(nCm)
// 공간 복잡도: O(n)
function main(n, m) {
  let result = 0;
  const numbers = Array.from({ length: n }, (_, i) => i + 1);

  function dfs(level, j, combination) {
    if (level === m) {
      console.log(combination);
      result++;
      return;
    }

    for (let i = j; i < n; i++) {
      combination.push(numbers[i]);
      dfs(level + 1, i + 1, combination);
      combination.pop();
    }
  }

  dfs(0, 0, []);

  return result;
}

console.log(main(4, 2));
