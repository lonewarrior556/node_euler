function sortNumber(a,b) {
    return a - b;
}

function d(c1, c2){
  return Math.pow(c1[0]-c2[0],2) + Math.pow(c1[1]-c2[1],2)
}

function isRight(c2,c3){
  c1 = [0,0];
  var diss = [d(c1,c2),d(c1,c3),d(c2,c3)].sort(sortNumber);
  return diss[0] + diss[1] === diss[2];
}

function isMultiple(c1,c2){
  return (c2[1]/c1[1]||0)*c1[0] === c2[0]
}

var count =0;
for (var x1 = 0; x1 < 51; x1++) {
  for (var y1 = 0; y1< 51; y1++) {
    for (var x2 = 0; x2< 51; x2++){
      for (var y2 = 0; y2 < 51; y2++) {
        if(x1 == x2 && y1 == y2){ continue }
        if(x1+y1 === 0 || x2+y2 === 0 ){ continue;}
        if(isMultiple([x1,y1],[x2,y2])){continue}
        if( isRight([x1,y1],[x2,y2])){
          count++
        }
      }
    }
  }
}
console.log(count)
