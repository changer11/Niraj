let a = 50;
let b = 0;
let wait = new Promise((resolve, rejected) => {
  resolve(30);
});
wait.then((data) => {
  let b = data;
  console.log(a + b);
});
