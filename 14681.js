const readline = require('readline'); 
const rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout
}); 

let input = []; 
rl.on('line', function (line) { 
    input.push(Number(line)); 
}).on('close', function () { 
    
const a = input[0];
const b = input[1];
if(a>0){
    b>0 ? console.log(1) : console.log(4)
} else if(a<0) {
    b>0 ? console.log(2) : console.log(3)
}
process.exit();
});

//node.js에서 쓰이는 fs모듈과 readline모듈에 대해 더 알아봐야겠다.