// asynchronous process give the output indivisually
console.log("hello");
console.log("hello i am niraj");
console.log("how are you");
console.log("first");
// asynchronous process
setTimeout(() => {
  console.log("second");
}, 2000);
console.log("three");
