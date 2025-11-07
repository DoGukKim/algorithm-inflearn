// 시간 복잡도: O(nPm)
// 공간 복잡도: O(n)
function main(n, m, arr) {
  let result = 0;
  const ch = Array.from({ length: n }, () => 0);

  function dfs(permute) {
    if (m === permute.length) {
      console.log(permute);
      result++;
      return;
    }

    for (let i = 0; i < n; i++) {
      if (ch[i] === 1) continue;

      ch[i] = 1;
      permute.push(arr[i]);
      dfs(permute);
      permute.pop();
      ch[i] = 0;
    }
  }

  dfs([]);

  return result;
}

console.log(main(3, 2, [3, 6, 9]));
