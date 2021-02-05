// map use to Select and do someting with element in array 
// filter = chakni, it give back an array
// fing jodi sorto puron kore then oikhner element ta day


const numbers = [1, 2, 3, 4, 5, 6, 8, 7, 8, 9];
/*
// array getting element normal way 
const output = [];

for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    const result = element * element;
    output.push(result);
}
console.log(output);
*/

/*
// function calling system
// 1
function square(element) {
    return element * element;
}]
// 2
const square = element => element * element;
const square = x => x * x;
*/

// map function e parameter 3ta element, index, array
/*
const result = numbers.map(function (element) {
    return (element * element);
})
*/

const result = numbers.map(x => x * x)

console.log(result);

newArray = [54, 65, 45, 45, 68, 868, 867687, 68787, 687, 3, 2, 1, 0]

const bigger = newArray.filter(x => x < 5)
console.log(bigger);
const find1 = newArray.find(x => x > 5)
const find2 = newArray.find(x => x < 5)
console.log(find1);
console.log(find2);