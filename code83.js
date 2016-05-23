var matrix = require('./p082_matrix.js').split("\n");
matrix = matrix.map(function(a){return eval("["+a+"]")})
var _ = require('underscore');

matrix.column = function(n){return _.flatten(this.map(function(a){return a[n]}))}
var add = function(a,b){return a+b}
var dirs = [ [-1,0], [1 ,0], [0,-1], [0, 1] ];

var que = [{val: matrix[0][0] , pos: [0,0] }]

var move = function(dir, pos ){
  return [pos[0]+dirs[dir][0], pos[1]+dirs[dir][1] ];
};

var valueAt = function(pos){
  try{
    return matrix[pos[0]][pos[1]];
  }catch(e){
    return false;
  }
}

var minmap = {};
var start = [0,0];
var startVal =  matrix[0][0];

minmap[start]= startVal;


// var limit = matrix.column(0).reduce(add) + matrix[matrix.length-1].reduce(add) - matrix[matrix.length-1][0]; //804802
var target = (matrix.length-1)*2
var limit = 427337; // solution to 81

while(que.length > 0 ){
  var obj = que.shift();

  if( obj.val < (minmap[obj.pos] || Infinity) ){
    minmap[obj.pos] = obj.val;
  }

  if(minmap[obj.pos] !== obj.val){
    continue;
  }
  else if( obj.val > limit ){
    var glob = {};
    for(var z = 0; z<que.length;z++){
      var obj = que[z];
      if( obj.val < ( (glob[obj.pos]||{}).val || Infinity) ){
        glob[obj.pos] = {pos: obj.pos, val: obj.val};
      }
    }
    que=[];
    for(var key in glob){
      que.push(glob[key]);
    }
    console.log('over, reduced paths left: ', que.length )
  }
  else if( obj.pos.reduce(add) === target ){
    limit = obj.val;
    console.log('new limit', limit)
  }
  else{
    for(var i = 0; i< 4;i++){
      var nextObj = {};
      var nextPos = move(i, obj.pos);
      var nextVal = valueAt(nextPos);
      if( nextVal ){
        nextObj.pos  = nextPos;
        nextObj.last = reverse[obj.pos];
        nextObj.val  = obj.val + nextVal;
        que.push(nextObj)
      }
    }
  }
}

console.log(limit)
