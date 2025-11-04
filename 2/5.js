// 시간 복잡도: O(n^2)
// 공간 복잡도: O(n)
function main(n, arr) {
  const result = Array.from({ length: n }, () => 1);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i !== j && arr[i] < arr[j]) {
        result[i]++;
      }
    }
  }

  return result;
}

console.log(main(5, [87, 89, 92, 100, 76]));
console.log(main(3, [92, 92, 76]));
