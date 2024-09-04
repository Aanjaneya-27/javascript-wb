// calculate the sum 0f 1 to 5 (using for loop)

// let sum = 0;
// for (let i = 1; i <= 5; i++) {
//     sum += i;
// }
// console.log(sum);

let sum = 0;
let i = 1;
while (i <= 5) {
    sum += i;
    i++;
}
console.log(sum);

let i = 1;
let sum = 0;

do {
    sum += i++;
} while (i <= 5);

console.log("The sum of numbers from 1 to 5 is: ", sum);