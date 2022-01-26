const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
let h = Number(input[0]);
let m = Number(input[1]);
m -= 45;
if(m<0) {
    m += 60;
    h--;
    if(h<0){
        h = 23;
    }
 }
console.log(h, m);
/*
중첩된 if문을 썼어야 했다.
console.log에서 , 로 띄어쓰기 가능
*/