var matrix = require('./p082_matrix.js').split("\n");
matrix = matrix.map(function(a){return eval("["+a+"]")})
var _ = require('underscore');

var traversed = JSON.parse(JSON.stringify(matrix));

matrix.column = function(n){return _.flatten(this.map(function(a){return a[n]}))}
traversed.column = function(n){return _.flatten(this.map(function(a){return a[n]}))}

function setCheapestPathto(col, row){
  var starters = traversed.column(col-1);
  var paths = matrix.column(col-1);
  var min = Infinity;
  for(var i = 0; i<=row; i++){
    var start = starters[i];
    var path = paths.slice(i+1,row+1).reduce(function(a,b){return a+b},0);
    if( start+path < min){
      min = start+path
    }
  }
  for(;i<=79; i++){
    var start = starters[i];
    if(i<10){
    }
    var path = paths.slice(row,i).reduce(function(a,b){return a+b},0);
    if( start+path < min){
      min = start+path
    }
  }
  traversed[row][col] = matrix[row][col]+min;
}

for(var i=1; i<80; i++){
  for(var j=0; j<80; j++){
    setCheapestPathto(i,j);
  }
}

console.log('min',Math.min.apply(Math,traversed.column(79)))
