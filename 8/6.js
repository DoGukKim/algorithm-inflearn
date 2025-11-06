// 시간 복잡도: O(2^n)
// 공간 복잡도: O(n)
// 방법1 - bottom up 방식
function main(c, n, arr) {
  let result = 0;

  function dfs(level, sum) {
    if (sum > c) return;
    if (level === n) {
      result = Math.max(result, sum);
      return;
    }

    dfs(level + 1, sum + arr[level]);
    dfs(level + 1, sum);
  }

  dfs(0, 0);

  return result;
}

console.log(main(259, 5, [81, 58, 42, 33, 61]));

// 방법2 - top down 방식
// function main(c, n, arr) {
//   let result = 0;

//   function dfs(level, sum) {
//     if (sum > c) return;

//     result = Math.max(result, sum);

//     for (let i = level; i < n; i++) {
//       dfs(i + 1, sum + arr[i]);
//     }
//   }

//   dfs(0, 0);

//   return result;
// }
