// 시간 복잡도: O(n^2)
// 공간 복잡도: O(n)
function main(n, arr) {
  const dp = Array.from({ length: n }, () => 0);
  dp[0] = 1;

  for (let i = 1; i < n; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (arr[i] > arr[j]) {
        dp[i] = Math.max(dp[i], dp[j]);
      }
    }
    dp[i]++;
  }

  return Math.max(...dp);
}

console.log(main(8, [5, 3, 7, 8, 6, 2, 9, 4]));
