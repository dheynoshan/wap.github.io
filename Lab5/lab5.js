/*
 * Question 1
 */
function sum(arg) {
  const sum = arg
    .filter((elem) => elem > 20)
    .reduce((total, num) => total + num, 0);

  return sum;
}
console.log(sum([21, 21, 20, 20]));

/*
 * Question 2
 */
const getNewArray = function (arg) {
  const arr = arg
    .filter((elem) => elem.length >= 5)
    .filter((elem) => elem.includes("a"));
  return arr;
};

console.log(getNewArray(["abc", "abcd", "abcde", "Abcdef", "abcdefg"]));

const students = [
  { name: "Quincy", grades: [99, 88], courses: ["cs301", "cs303"] },
  { name: "Jason", grades: [29, 38], courses: ["cs201", "cs203"] },
  { name: "Alexis", grades: [79, 78], courses: ["cs105", "cs211"] },
  { name: "Sam", grades: [91, 82], courses: ["cs445", "cs303"] },
  { name: "Katie", grades: [66, 77], courses: ["cs303", "cs477"] },
];

/*
Out put expected  
{
    Quincy: 93.5,
    Sam: 86.5,
    Katie: 71.5
}
*/
// const filter = students.filter(
//     elem => elem.courses.includes('cs303')
// ).map(
//     elem => elem.name + ': ' + elem.grades.reduce(
//         (total,num) => total+num/2
//         ,0)
// );
// console.log(filter)

// const filter = students.filter(
//     elem => elem.courses.includes('cs303')
// ).reduce((accum,elem) =>
// {   return{
//     ...accum,
//     [elem.name]:elem.grades.reduce((total,num) => total+num/2, 0)
// }
// },{});
// console.log(filter);

// function b() {
//   const y = 30;
//   a();
//   function a() {
//     console.log(x, y);
//   }
//   var x = 10;
//   console.log(x, y);
// }
// const x = 20;
// var y = 40;
// b();

// function foo(x) {
//   let m;
//   console.log(x, y);
//   if (x > 5) {
//     var y = 5;
//     m = x + y;
//   } else {
//     let z = 10;
//     m = z;
//   }
//   x = m;
//   console.log(x, y);
// }

// var x = 10;
// foo(3);
// console.log(x);

// Exercise 1:

// Undefined 30

// 10 30



// Exercise 2:

// 3 Undefined

// 10 Undefined

// 10

// function printNumbers(from, to){
//     let val = from;
//     let timerId = setInterval(
//         ()=>{
//             console.log(val);
//             if(val == to){
//                 clearInterval(timerId);
//             }
//             val++;
//         },
//         1000)

// }
// printNumbers(10,20);



