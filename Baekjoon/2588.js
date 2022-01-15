let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

let a = Number(input[0]); 
let b = input[1]; 

console.log(a * Number(b[2]));
console.log(a * Number(b[1]));
console.log(a * Number(b[0]));
console.log(a * b);

//처음에 인덱스 값 순서가 틀렸었다..