var leng = function (a, b, c) {
    return sqrt(Math.pow(a + b, 2) + Math.pow(c, 2));
};
var sqrt = function (n) {
    return Math.pow(n, .5);
};
var sum = 0;
for (var i_1 = 3; i_1 <= 1817; i_1++) {
    for (var j = 2; j <= i_1; j++) {
        for (var k = 1; k <= j; k++) {
            if (leng(k, j, i_1) % 1 === 0) {
                sum++;
            }
        }
    }
}
console.log(sum);
