var n = require('fs').readFileSync('/dev/stdin').toString().trim();

if( (n%4) == 0 ){
  if( (n%400) == 0 ) {
    console.log('1');
  }
  else if( (n%100) != 0 ) {
    console.log('1');
  }
  else {
    console.log('0');
  }
}else {
  console.log('0');
}

//어려운 로직이 아닌데 자꾸 에러나서 힘들었다.