// 시간 복잡도: O(n)
// 공간 복잡도: O(n)
function main(n, arrA, arrB) {
  let result = "";
  const win = {
    1: 3,
    2: 1,
    3: 2,
  };

  for (let i = 0; i < n; i++) {
    if (arrA[i] === arrB[i]) {
      result += "D\n";
    } else if (win[arrA[i]] === arrB[i]) {
      result += "A\n";
    } else {
      result += "B\n";
    }
  }

  return result;
}

console.log(main(5, [2, 3, 3, 1, 3], [1, 1, 2, 2, 3]));
