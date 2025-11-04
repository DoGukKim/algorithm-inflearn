// 시간 복잡도: O(1)
// 공간 복잡도: O(1)
function main(A, B, C) {
  let result = "YES";
  let longest = Math.max(A, B, C);
  let rest = A + B + C - longest;

  if (rest < longest) {
    result = "NO";
  }

  return result;
}

console.log(main(13, 33, 17));
