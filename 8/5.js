// 시간 복잡도: O(2^n)
// 공간 복잡도: O(n)
function main(n, arr) {
  const total = arr.reduce((acc, cur) => acc + cur, 0);

  function dfs(level, sum) {
    if (level === n) {
      return total - sum === sum;
    }

    const left = dfs(level + 1, sum + arr[level]);
    const right = dfs(level + 1, sum);

    return left || right;
  }

  return dfs(0, 0) ? "YES" : "NO";
}

console.log(main(3, [1, 3, 4]));
console.log(main(6, [1, 3, 5, 6, 7, 10]));
console.log(main(3, [1, 3, 5])); // NO가 나와야 함
console.log(main(4, [1, 2, 3, 10])); // NO가 나와야 함
