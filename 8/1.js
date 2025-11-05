// 시간 복잡도: O(n)
// 공간 복잡도: O(n)
function main(n) {
  function dfs(count) {
    if (count > n) {
      return;
    }

    console.log(count);
    dfs(count + 1);
  }

  dfs(1);
}

console.log(main(3));
