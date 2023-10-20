let data = [55, 85, 6, 55, 9, 55, 8, 55, 7, 8, 555, 9, 5];
let result = data.filter((item) => {
    return item === 55;
});
console.log(result);
let result1 = data.filter((item) => {
    return item > 55;
});
console.log(result1);
let result2 = data.filter((item) => item < 55);
console.log(result2);