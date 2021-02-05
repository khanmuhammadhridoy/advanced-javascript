const nums = [45, 6, 98, 87887, 67, 42485, 24, 4, 8, 9];
// slice
const part = nums.slice(2, 5);
console.log(part);
console.log(nums);
// splice
const num2 = [5, 6, 8, 87, 67,85, 44, 4, 8, 9];
const removed = num2.splice(2,5,4545);
console.log(removed);
console.log(num2);

// join
const num3 = [45, 6, 98, 87887, 67, 42485, 24, 4, 8, 9];
const num3Part = num3.slice(2, 5);
const num3Removed = num3.splice(2,5,4545);
const together = num3.join(",");

console.log(together);