var special = {
    2: { 0: 1 / 16, 2: 7 / 8, 10: 1 / 16 },
    7: { 0: 1 / 16, 4: 1 / 16, 5: 1 / 16, 7: 6 / 16, 10: 1 / 16, 11: 1 / 16, 12: 1 / 16, 15: 2 / 16, 24: 1 / 16, 39: 1 / 16 },
    17: { 0: 1 / 16, 10: 1 / 16, 17: 7 / 8 },
    22: { 0: 1 / 16, 5: 1 / 16, 10: 1 / 16, 11: 1 / 16, 19: 1 / 16, 22: 6 / 16, 24: 1 / 16, 25: 2 / 16, 28: 1 / 16, 39: 1 / 16 },
    30: { 10: 1 },
    33: { 33: 7 / 8, 10: 1 / 16, 0: 1 / 16 },
    36: { 0: 1 / 16, 5: 3 / 16, 10: 1 / 16, 11: 1 / 16, 12: 1 / 16, 24: 1 / 16, 33: 1 / 16, 36: 6 / 16, 39: 1 / 16 },
};
var g_landingmap = function (pos) {
    var obj = {};
    obj[pos] = 1;
    return special[pos] || obj;
};
var landingP = function (pos, prob) {
    var map = g_landingmap(pos);
    var probs = [];
    for (var key in map) {
        probs.push({
            pos: +key,
            val: map[key] * prob
        });
    }
    return probs;
};
var rollingP = function (pos) {
    var probs = {};
    probs[10] = 1 / 64;
    var values = []
        .concat(landingP((pos + 2) % 40, 15 / 256))
        .concat(landingP((pos + 3) % 40, 1 / 8))
        .concat(landingP((pos + 4) % 40, 47 / 256))
        .concat(landingP((pos + 5) % 40, 1 / 4))
        .concat(landingP((pos + 6) % 40, 47 / 256))
        .concat(landingP((pos + 7) % 40, 1 / 8))
        .concat(landingP((pos + 8) % 40, 15 / 256));
    for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
        var item = values_1[_i];
        probs[item.pos] = (probs[item.pos] || 0) + item.val;
    }
    return probs;
};
var visited = new Array(40);
var roll = function (pos) {
    var probs = rollingP(pos);
    var rand = Math.random();
    for (var key in probs) {
        rand = rand - probs[key];
        if (rand <= 0) {
            return +key;
        }
    }
    return +key;
};
var position = 0;
for (var i_1 = 0; i_1 < 1000000; i_1++) {
    position = roll(position);
    visited[position] = (visited[position] || 0) + 1;
}
visited = visited.map(function (a) { return a / 1000000; });
for (var i = 0; i < 40; i++) {
    if (visited[i] > 0.03)
        console.log(i, visited[i]);
}
