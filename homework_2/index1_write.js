function reverse(name) {
  let reverseName = name.split("").reverse().join("");
  return reverseName;
}

console.log(reverse("Andrii"));

let isPolidrom = (string) => {
  let reverseName = string.split("").reverse().join("");
  if (string == reverseName) {
    console.log("original: " + reverseName, "revesrse: " + string);
    return true;
  }
  return false;
};

console.log(isPolidrom("abamaba"));

let getPaired = (arr) => {
  let newArr = arr.filter((e) => e % 2 == 0);
  console.log(newArr);
};

getPaired(new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
