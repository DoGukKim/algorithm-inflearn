// 시간 복잡도: O(1)
// 공간 복잡도: O(1)
function main(arr) {
  let oddSum = 0;
  let min = 100;

  for (let i = 0; i < arr.length; i++) {
    const isOdd = arr[i] % 2 !== 0;
    if (isOdd && arr[i] < min) {
      min = arr[i];
    }

    if (isOdd) {
      oddSum += arr[i];
    }
  }

  return [oddSum, min];
}

console.log(main([12, 77, 38, 41, 53, 92, 85]));
