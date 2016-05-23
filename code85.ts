

var count = function(row, col){
  var total = 0;
  var sum = 0;
  for(var i =0; i <=row; i++){
    sum += (row-i)* col
    for(var j = 1; j<col; j++){
      sum += (row-i)*(col-j)
    }
  }
  return  sum
}

console.log(count(2000,1))

var x = 2000;
var y = 1;
var min= 999;
var ma= 1000;

var minvals = [0,0]

//
// while( x>1 ){
//   var total = count(x,y);
//   var dist =  Math.abs(2000000 - total);
//   if( dist< min ){
//     min = dist;
//     minvals= [x,y];
//     console.log('found:',x,y)
//   }else if( total > 2001000 ){
//     x--;
//     y=1;
//   } else{
//     y++;
//   }
// }
console.log(minvals, min)

console.log(count(1154,2))
console.log(count(816, 3))
console.log(count(77,36))
