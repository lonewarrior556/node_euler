var Big = require('big.js');
Big.DP = 20
Big.RM = 1

var total = 0;
function intArea(num){
  var n = new Big(num);
  var square = n.times(n).times(3).plus(1);
  var fourk = n.times(4)


  var a1 = square.plus(fourk)
  var a2 = square.minus(fourk)

  num = num*2
  if(a1.sqrt().mod(1).c.length === 1 ){
    console.log('a1:',num, num+1, num+1)
    total += (3*num + 2);
    console.log(total)
  }
  if(a2.sqrt().mod(1).c.length === 1 ){
    console.log('a2:',num, num-1, num-1)
    total += (3*num - 2);
    console.log(total)
  }
}

  for (var i = 2; i < (1000000000/6 ); i++) {
      intArea(i)
  }

  console.log(total)
