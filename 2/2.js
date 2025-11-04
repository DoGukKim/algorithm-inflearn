// 시간 복잡도: O(n)
// 공간 복잡도: O(1)
function main(n, arr) {
  let result = 1;
  let minTall = arr[0];

  for (let i = 1; i < n; i++) {
    if (arr[i] > minTall) {
      minTall = arr[i];
      result++;
    }
  }

  return result;
}

console.log(main(8, [130, 135, 148, 140, 145, 150, 150, 153]));
