// 시간 복잡도: O(1)
// 공간 복잡도: O(1)
function main(A, B, C) {
  let result = A;

  if (B < result) {
    result = B;
  }

  if (C < result) {
    result = C;
  }

  return result;
}

console.log(main(20, 1, 1));
