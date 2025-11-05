// 시간 복잡도: O(n)
// 공간 복잡도: O(n)
function main(s) {
  let result = "";
  const hashCounter = {};

  for (let i = 0; i < s.length; i++) {
    if (!hashCounter[s[i]]) {
      hashCounter[s[i]] = 1;
      continue;
    }
    hashCounter[s[i]]++;
  }

  for (const key in hashCounter) {
    result += `${key}${hashCounter[key] === 1 ? "" : hashCounter[key]}`;
  }

  return result;
}

console.log(main("KKHSSSSSSSE"));
