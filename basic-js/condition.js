// if condition 

// let age = 18;

// if (age >= 18){
//     console.log("you can give vote")

// }
 
// if age = 13
// if (age >= 18){
//     console.log("you can give vote")

// }else{
//     console.log("you can not give vote")
// }

// let mode = 'orange';
// let colour;

// if(mode === "dark"){
//     colour = "black";
// } else if(mode === "blue"){
//     colour = "blue";
// }else if(mode === "pink"){
//     colour = "pink";
// }else {
//     colour = "can not define"
// }

// Write a code which can give grades to student accroding to their scores:
// 80 - 100 (A)
// 70 - 79  (B)
// 60 - 69  (C)
// 50 - 59 (D)
// 0 - 49 (F)

let score = 72;
let grade;

if( score >= 90 && score <= 100){
    grade = "A";
}else if (score >= 70 && score <= 79){
    grade = "B";
}else if (score >= 60 && score <= 69){
    grade = "C";
}else if (score >= 50 && score <= 59){
    grade = "D";
}else if (score >= 0 && score <= 49){
    grade = "F";
}     

console.log("accoroding to your score, your grade is ", grade)