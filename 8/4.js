// 시간 복잡도: O(3^n)
// 공간 복잡도: O(n)
function main(n) {
  function dfs(j = 1, result = []) {
    if (j > n) {
      return;
    }

    for (let i = j; i <= 3; i++) {
      result.push(i);
      dfs(i + 1, result);
      console.log(result);
      result.pop();
    }
  }

  dfs();
}

console.log(main(3));
