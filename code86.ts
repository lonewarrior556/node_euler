var leng = function(a ,b,c){
  return sqrt(Math.pow(a+b,2) + Math.pow(c,2));
}

var sqrt = function(n){
  return Math.pow(n,.5);
}
var sum = 0;

for (let i = 3; i <= 1817; i++) {
  for (let j = 2; j <= i; j++) {
    for (let k = 1; k <= j; k++) {
      if( leng(k,j,i)%1 ===0 ){
        // console.log(k,j,i)
        // console.log('int!');
        sum++;
      }
    }
  }
}

console.log(sum)
