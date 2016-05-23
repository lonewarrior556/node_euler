var count = function (row, col) {
    var total = 0;
    var sum = 0;
    for (var i = 0; i <= row; i++) {
        sum += (row - i) * col;
        for (var j = 1; j < col; j++) {
            sum += (row - i) * (col - j);
        }
    }
    return sum;
};
console.log(count(2000, 1));
var x = 2000;
var y = 1;
var min = 999;
var ma = 1000;
var minvals = [0, 0];
console.log(minvals, min);
console.log(count(1154, 2));
console.log(count(816, 3));
console.log(count(77, 36));
