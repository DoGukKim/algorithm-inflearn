// 시간 복잡도: O(n)
// 공간 복잡도: O(1)
function main(n, arr) {
  let result = 0;
  let acc = 1;

  for (let i = 0; i < n; i++) {
    if (arr[i] === 1) {
      result += acc;
      acc++;
    } else {
      acc = 1;
    }
  }

  return result;
}

console.log(main(10, [1, 0, 1, 1, 1, 0, 0, 1, 1, 0]));
