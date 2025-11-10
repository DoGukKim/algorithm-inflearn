// 시간 복잡도: O(n)
// 공간 복잡도: O(n)
function main(s, e) {
  const dist = Array.from({ length: e + 1 }, () => -1);

  const queue = [s];
  dist[s] = 0;

  while (dist[e] === -1) {
    const cur = queue.shift();

    for (const nx of [cur - 1, cur + 1, cur + 5]) {
      if (dist[nx] !== -1) continue;
      if (nx < 0 || nx > 10000) continue;
      dist[nx] = dist[cur] + 1;
      queue.push(nx);
    }
  }

  console.log(dist[e]);
}

console.log(main(5, 14));
