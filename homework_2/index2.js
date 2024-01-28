let commonPrefix = (arr) => {
  let prefix = arr[0];

  arr.forEach((e) => {
    while (e.indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1);
    }
  });
  return prefix;
};
let result = commonPrefix(["flow", "flower", "flight"]);
console.log(result);
