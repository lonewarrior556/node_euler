var p = require('./primes.js');

var powerSum = function(i,j,k){
  return Math.pow(p[i],2) + Math.pow(p[j],3) + Math.pow(p[k],4);
}

var limit = 50000000;
var l = p.length;
var all = {};

for (var i = 0; i < l; i++) {
  if(Math.pow(p[i],2) > limit){break;}
  for (var j = 0; j < l; j++) {
    if(Math.pow(p[j],3) > limit){break;}
    for (var k = 0; k < l; k++) {
      var s = powerSum(i,j,k)
      if( s < limit){
        all[s]=true
        // console.log(powerSum(i,j,k),' = ', p[i], p[j], p[k])
      }else{
        break;
      }
    }
  }
}

console.log(Object.keys(all).length)
