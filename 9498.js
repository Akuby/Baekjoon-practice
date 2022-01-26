let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

const score = Number(input[0]);
let grade;
if(score >= 90) {
  grade = 'A';
} else if(score >= 80) {
  grade = 'B';
} else if(score >= 70) {
  grade = 'C';
} else if(score >= 60) {
  grade = 'D';
} else {
  grade = 'F';
};

console.log(grade);

//정수가 주어지므로 어차피 90 미만은 89 이하일테니 && 연산자는 안넣었다.