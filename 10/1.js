// 시간 복잡도: O(n)
// 공간 복잡도: O(n)
function main(n) {
  const dp = Array.from({ length: 46 }, () => 0);
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}

console.log(main(7));
