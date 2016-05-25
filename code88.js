var _ = require('underscore')

var add = function(a,b){return parseInt(a)+parseInt(b)};
var p = require('./primes');
var primes = {};
p.map(function(a){primes[a]=true})
primes[1]=true;

var factorize = function(n){
  if(primes[n]){ return [];}
  var factors= [];
  for (var i = 2; i <= n/i; i++) {
    if( n%i=== 0){
      factors.push([n/i,i])
    }
  }
  return factors
}

function allFactors(n){
  var stack = [ [n] ];
  var added = {};
  var factors = [ ];
  while (stack.length > 0){
    var current = stack.shift();
    for (var i = 0; i < current.length; i++) {
      var all = factorize(current[i]);
      for (var j = 0; j < all.length; j++) {
         var temp = _.clone(current);
         temp[i] = all[j];
         temp = _.flatten(temp).sort(sortNum);
         if(!added[temp]){
           stack.push(temp);
           factors.push(temp);
           added[temp] = true;
         }
      }
    }
  }
  return factors
}

var k = {2:4};
for (var i = 4; i <100000; i++) {
 var vals = allFactors(i).map(function(a){return a.length - a.reduce(add) + i; })
 for (var j = 0; j < vals.length; j++) {
   if( (k[vals[j]]||Infinity) > i){
     k[vals[j]] = i;
   }
 }
}
var obj = {};
for(var z=2;z<12001;z++){
  obj[k[z]]= true;
}

console.log(Object.keys(obj))
console.log(Object.keys(obj).length)
console.log(Object.keys(obj).reduce(add))
