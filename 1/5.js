// 시간 복잡도: O(1)
// 공간 복잡도: O(1)
function main(arr) {
  let result = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < result) {
      result = arr[i];
    }
  }

  return result;
}

console.log(main([5, 3, 7, 11, 2, 15, 17]));
