// 시간 복잡도: O(4^n*m)
// 공간 복잡도: O(n*m)
function main(matrix) {
  let result = 0;
  const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  const ch = Array.from({ length: 7 }, () => Array(7).fill(0));
  ch[0][0] = 1;

  function dfs(x, y) {
    if (x === 6 && y === 6) {
      result++;
      return;
    }

    for (let i = 0; i < directions.length; i++) {
      {
        const [dx, dy] = directions[i];
        const nx = x + dx;
        const ny = y + dy;
        if (nx < 0 || nx > 6 || ny < 0 || ny > 6) continue;
        if (ch[nx][ny] === 1 || matrix[nx][ny] === 1) continue;
        ch[nx][ny] = 1;
        dfs(nx, ny);
        ch[nx][ny] = 0;
      }
    }
  }

  dfs(0, 0);

  return result;
}

console.log(
  main([
    [0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [1, 1, 0, 1, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 1],
    [1, 1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 0],
  ])
);
