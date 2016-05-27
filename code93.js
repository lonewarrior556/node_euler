var itertools = require('itertools')
var _ = require('underscore')

function rpn( input ) {
  var ar = input.split( /\s+/ ), st = [], token;
  while( token = ar.shift() ) {
    if ( token == +token ) { // numeric
      st.push( token );
    } else {
      var n2 = st.pop(), n1 = st.pop();
      st.push( eval( n1 + token + ' ' + n2 ) );
    }
  }
  var ans = st.pop();
  if( ans < 0 ){ return 'NPI'}
  else if( ans === 0 ){return 'NPI';}
  else if(ans%1 === 0){ return ans}
  else{ return 'NPI'}
}

rpn("2 2 3 3 / * - "); // => ((3 / 3) * 2) / 2 => 1;

function makeSets(){
  var sets = [];
  for (var i = 1; i < 10; i++) {
    for (var j = i+1; j < 10; j++) {
      for (var k = j+1; k < 10; k++) {
        for (var l = k+1; l < 10; l++) {
          sets.push([i,j,k,l])
        }
      }
    }
  }
  return sets;
}

var max = 0;
var checkLength = function(obj){
  var i = 0;
  while(obj[++i]){}
  if( i > max ){ max = i }
  return i;
}

var middleSigns = [ ['+', '+'], ['+', '-'], ['+', '/'], ['+', '*'], ['-', '-'], ['-', '/'], ['-', '*'], ['/', '/'], ['/', '*'], ['*', '*'] ]
function middles(set, current){
  var nums = _.difference(set, current);
  var allMiddles = [];
  for (var i = 0; i < middleSigns.length; i++) {
    allMiddles = allMiddles.concat(itertools.permutationsSync(nums.concat(middleSigns[i]),4))
  }
  return allMiddles;
}

var sets = makeSets();
var signs = ['+', '-', '/', '*'];

for (var z = 0; z < sets.length; z++) {
  var set = sets[z];
  var firstNums = itertools.permutationsSync(set, 2);
  var obj ={};
  for (var i = 0; i < firstNums.length; i++) {
    var allMids = middles(set,firstNums[i]);
    for (var j = 0; j < allMids.length; j++) {
      for (var k = 0; k < signs.length; k++) {
        obj[rpn(firstNums[i].join(' ')+' '+allMids[j].join(' ')+' '+signs[k])] = true
      }
    }
  }

  console.log(set, checkLength(obj), max)
}
