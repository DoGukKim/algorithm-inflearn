// 시간 복잡도: O(n)
// 공간 복잡도: O(n)
function main(n, arr) {
  const result = [arr[0]];

  for (let i = 1; i < n; i++) {
    if (arr[i] > arr[i - 1]) {
      result.push(arr[i]);
    }
  }

  return result;
}

console.log(main(6, [7, 3, 9, 5, 6, 12]));
