const firstFunction = async function () {
  const answear = await fetch(
    "https://jsonplaceholder.typicode.com/comments/1"
  );
  const jsonAnswear = await answear.json();
  console.log(jsonAnswear);
};

const secondFunction = async () => {
  const answear = await fetch("https://jsonplaceholder.typicode.com/posts/2");
  const jsonAnswear = await answear.json();
  console.log(jsonAnswear);
};

firstFunction();
secondFunction();
