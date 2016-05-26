
function next(n){
  if(n === 1 ){ console.log(i);return 0}
  if(n === 89){;return 1}
  return next( (''+n).split('').map(function(a){return Math.pow(parseInt(a),2)}).reduce(function(a,b){return a+b}) )
}

var count=0
for (i = 1; i < 10000000; i++) {
  count += next(i);
}

console.log(count)
