// 시간 복잡도: O(1)
// 공간 복잡도: O(1)
function main(n, arr) {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    const digit = arr[i] % 10;
    if (n === digit) {
      result += 1;
    }
  }

  return result;
}

console.log(main(3, [25, 23, 11, 47, 53, 17, 33]));
