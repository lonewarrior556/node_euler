//square nums
var squares = [1,4,6,16,25,36,46,64,81]

function allGood(d1,d2){
  for (var i = 0; i < squares.length; i++) {
    var first = ''+Math.floor(squares[i]/10);
    var second = ''+squares[i]%10
    if((d1.indexOf(first) !== -1) && (d2.indexOf(second) !== -1)){
      continue;
    }
    else if((d2.indexOf(first) !== -1) && (d1.indexOf(second) !== -1)){
      continue;
    }else{
      return false
    }
  }
  return true;
}

// var map = {
//   0: [1,4,6],
//   1: [0,6,8],
//   2: [5],
//   3: [6],
//   4: [0, 6],
//   5: [2],
//   6: [0,1,3,4],
//   8: [1]
// }

// function complement(d1){
//     var d2={};
//     if( !d1[0] ){
//         if( d1[1] && d1[4] && d1[6] ){ d2[0]= true; }
//         else{ return false; }
//     }
//     if( !d1[1] ){
//         if( d1[0] && d1[6] && d1[8] ){ d2[1]= true; }
//         else{ return false; }
//     }
//     if( !d1[2] ){
//         if( d1[5] ){ d2[2] = true; }
//         else{ return false; }
//     }
//     if( !d1[3] ){
//         if( d1[6] ){ d2[3] = true; }
//         else{ return false; }
//     }
//     if( !d1[4] ){
//         if( d1[0] && d1[6] ){ d2[4] = true; }
//         else{ return false; }
//     }
//     if( !d1[5] ){
//         if( d1[2] ){ d2[5] = true; }
//         else{ return false; }
//     }
//     if( !d1[6] ){
//         if( d1[0] && d1[1] && d1[3] && d1[5]){ d2[6] = true; }
//         else{ return false; }
//     }
//     if( !d1[8] ){
//         if( d1[1] ){ d2[8] = true; }
//         else{ return false; }
//     }
//     var keys = '0123456678';
//     for( var key in d2){
//       keys = keys.replace(key,'')
//     };console.log(keys)
//     return d2;
// }
//
// function objectify(arr){
//   var obj ={};
//   for( var key of arr){
//     obj[key] = true;
//   }
//   return obj
// }

// d1= { 0: true, 5: true, 6: true, 8: true,}
// console.log(complement(d1))

function getCombinations(chars) {
  var result = [];
  var f = function(prefix, chars) {
    for (var i = 0; i < chars.length; i++) {
      result.push(prefix + chars[i]);
      f(prefix + chars[i], chars.slice(i + 1));
    }
  }
  f('', chars);
  return result;
}


var count = 0;
var all = getCombinations(['0','1','2','3','4','5','6','7','8','6']).filter(function(a){return a.length === 6}).map(function(a){return a.split('')})
// all = all.filter(function(a){return complement(objectify(a))})
// console.log(all)
// console.log(all.length);

for (var i = 0; i < all.length; i++) {
  for (var j = 0; j < all.length; j++) {
     if( allGood(all[i],all[j])){
       count++
     }
  }
}

console.log(count/2)
