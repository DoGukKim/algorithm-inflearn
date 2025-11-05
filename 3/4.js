// 시간 복잡도: O(n^2)
// 공간 복잡도: O(n)
function main(s, t) {
  let result = Array.from({ length: s.length }, () => 0);

  for (let i = 0; i < s.length; i++) {
    let dist = 100;
    if (s[i] === t) continue; // t인 경우는 순회할 필요 없음

    for (let j = 0; j < s.length; j++) {
      if (i !== j && s[j] === t) {
        dist = Math.min(dist, Math.abs(i - j));
      }
    }

    result[i] = dist;
  }

  return result;
}

console.log(main("teachermode", "e"));
