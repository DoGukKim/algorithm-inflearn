// 시간 복잡도: O(1)
// 공간 복잡도: O(1)

// 투 포인터
function main(arr) {
  let result = [];
  const cheatDwapTall = arr.reduce((acc, cur) => acc + cur, 0) - 100;
  const dwaps = arr.toSorted((a, b) => a - b);

  let left = 0;
  let right = arr.length - 1;
  let cheatDwap = [0, 0];

  while (left < right) {
    if (dwaps[left] + dwaps[right] === cheatDwapTall) {
      cheatDwap[0] = dwaps[left];
      cheatDwap[1] = dwaps[right];
      break;
    }

    left++;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === cheatDwap[0] || arr[i] === cheatDwap[1]) continue;
    result.push(arr[i]);
  }

  return result;
}

// 브루트포스
// function main(arr) {
//   let result = [];
//   const cheatDwapTall = arr.reduce((acc, cur) => acc + cur, 0) - 100;

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (cheatDwapTall === arr[i] + arr[j]) {
//         result = [...arr.slice(0, i), ...arr.slice(j + 1)];
//         break;
//       }
//     }
//   }

//   return result;
// }

console.log(main([20, 7, 23, 19, 10, 15, 25, 8, 13]));
