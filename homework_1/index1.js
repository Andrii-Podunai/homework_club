function canSmoke(age) {
  if (age < 18) {
    return "та зачекай ти";
  }
  return "може все таки не треба";
}

let exspressionCanSmoke = function (age) {
  if (age < 18) {
    return "та зачекай ти";
  }
  return "роби що хоч";
};

let arrowCanSmoke = (age) => {
  if (age < 18) {
    return "пізніш";
  }
  return "роби що хоч";
};
console.log(canSmoke(18));
console.log(exspressionCanSmoke(18));
console.log(arrowCanSmoke(17));

function allowedTOIn(name, age, department) {
  if (name == "Alexandria" && age >= 18 && department == "QA") {
    return true;
  }
  return false;
}
console.log(allowedTOIn("Alexandria", 18, "QA"));
