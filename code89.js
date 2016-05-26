var fs = require('fs');
var numerals = fs.readFileSync('./p089_roman.txt', 'utf8');

var N = {
  'I':1,
  'V':5,
  'X':10,
  'L':50,
  'C':100,
  'D':500,
  'M':1000,
}

function toNum(str){
  var str2 = '';
  for (var i = 0; i < (str.length-1); i++) {
    if( N[str[i]] < N[str[i+1]] ){
      str2+="-"+ N[str[i]]
    }else{
      str2+="+"+ N[str[i]]
    }
  }
  str2+='+'+N[str[i]]
  return str2
}

function minit(str){
  return str
  .replace(/DCCCC/g,'CM')
  .replace(/CCCC/g, 'CD')
  .replace(/LXXXX/g,'XC')
  .replace(/XXXX/g, 'XL')
  .replace(/VIIII/g,'IX')
  .replace(/IIII/g, 'IV')
}

var set = numerals.split("\n")
set.pop();
// console.log(numerals.split("\n").length)
var count =0;
for (var i = 0; i < set.length; i++) {
  if(set[i].length !== minit(set[i]).length){
    console.log('b',set[i], eval(toNum(set[i])))
    console.log('a',minit(set[i]),eval(toNum(minit(set[i])) ));
    console.log('---')
    count= count + (set[i].length - minit(set[i]).length )
  }
}
console.log( 'count: ', count)
